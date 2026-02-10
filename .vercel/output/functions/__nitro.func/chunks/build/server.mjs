import { defineComponent, ref, h, resolveComponent, computed, hasInjectionContext, inject, getCurrentInstance, useSSRContext, Suspense, Fragment, createApp, reactive, provide, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, shallowReactive, createBlock, openBlock, createVNode, toRef, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, effectScope, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, getCurrentScope } from 'vue';
import { p as parseQuery, h as hasProtocol, i as joinURL, w as withQuery, k as withTrailingSlash, l as withoutTrailingSlash, m as isScriptProtocol, s as sanitizeStatusCode, n as getContext, $ as $fetch, o as createHooks, q as executeAsync, c as createError$1, r as toRouteMatcher, v as createRouter$1, x as defu } from '../_/nitro.mjs';
import { u as useHead$1, h as headSymbol, b as baseURL, p as publicAssetsURL } from '../routes/renderer.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const __nuxt_page_meta$1 = {
  layout: "default"
};
const __nuxt_page_meta = {
  layout: "default",
  name: "error"
};
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "200",
    path: "/200",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./200-rQPG3Xe4.mjs')
  },
  {
    name: "error",
    path: "/404",
    meta: __nuxt_page_meta || {},
    component: () => import('./404-BSqSMyol.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-dfyVlOV5.mjs')
  },
  {
    name: "skills",
    path: "/skills",
    component: () => import('./skills-CX-T_IBe.mjs')
  },
  {
    name: "projects",
    path: "/projects",
    component: () => import('./projects-DdFqlSLj.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes22) => routes22);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError$1(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  {
    return;
  }
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry2 = useHead(input);
  const ctx = { input, entry: entry2 };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const useSiteData = () => {
  const navigationItems = [
    { name: "about", href: "/#about" },
    { name: "skills", href: "/skills" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/#contact" }
  ];
  const socialLinks = {
    github: "https://github.com/arjunbishnoi",
    linkedin: "https://www.linkedin.com/in/arjun-bishnoi-b981bb104",
    email: "mailto:contact@arjunbishnoi.com",
    resume: "/Resume - Arjun Bishnoi.pdf",
    resumeDownloadName: "Arjun Bishnoi - Resume.pdf"
  };
  const projects = [
    {
      id: "cryptotracker",
      title: "Cryptocurrency Tracker",
      description: "A cross-platform cryptocurrency tracker built with React Native, Expo, and Firebase Firestore. Features include real-time market data via the CoinLore API, detailed coin statistics, favorites management, pull-to-refresh, and seamless, native-feel navigation.",
      image: "/cryptotracker.png",
      tags: ["React Native", "Expo", "Firebase", "CoinLore API"],
      sourceUrl: "https://github.com/arjunbishnoi/CryptoTracker",
      featured: true,
      challenge: "Building a cross-platform mobile app with real-time data synchronization and offline capabilities.",
      solution: "Implemented Firebase Firestore for real-time data, Expo for cross-platform development, and optimized API calls for smooth performance."
    },
    {
      id: "4rent",
      title: "4rent",
      description: "A modern iOS rental marketplace built with SwiftUI, Combine, and MVVM architecture. Features include infinite-scroll property listings, high-resolution image galleries, detailed amenity and pricing views, favorites management, and fully adaptive layouts across all iPhone screen sizes.",
      image: "/4rent.png",
      tags: ["SwiftUI", "Combine", "MVVM", "iOS"],
      sourceUrl: "https://github.com/arjunbishnoi/4rent",
      featured: true
    },
    {
      id: "carrental",
      title: "Car Rental",
      description: "A user-friendly Android car rental app built with Kotlin, MVVM, Jetpack Navigation, Retrofit, Room, and Hilt. Features include searchable, filterable vehicle listings, seamless booking flows with date selection, favorites management, profile & booking history screens, and offline-cached browsing for uninterrupted access.",
      image: "/carrental.png",
      tags: ["Kotlin", "MVVM", "Jetpack Navigation", "Retrofit", "Room", "Hilt"],
      sourceUrl: "https://github.com/arjunbishnoi/CarRental",
      featured: false
    }
  ];
  const skills = [
    {
      category: "Frontend Development",
      groups: [
        {
          name: "Frameworks & Libraries",
          items: [
            { name: "React.js", level: "Advanced", percentage: 95, details: "Redux, React Router, React Query, Context API, Hooks, Custom Hooks" },
            { name: "Vue.js", level: "Advanced", percentage: 90, details: "Vuex, Vue Router, Composition API, Nuxt.js, Vue Test Utils" },
            { name: "Next.js", level: "Intermediate to Advanced", percentage: 85, details: "SSR, SSG, ISR, API Routes, Next Auth, Image Optimization" }
          ]
        },
        {
          name: "Languages & Styling",
          items: [
            { name: "JavaScript/TypeScript", level: "Advanced", percentage: 92, details: "ES6+, TypeScript, Async/Await, Functional Programming, Design Patterns" },
            { name: "CSS & Styling", level: "Advanced", percentage: 90, details: "CSS3, Sass/SCSS, Tailwind CSS, CSS Modules, Styled Components, CSS-in-JS" },
            { name: "HTML5", level: "Advanced", percentage: 95, details: "Semantic HTML, Accessibility (ARIA), SEO Optimization, Canvas, Web Components" }
          ]
        }
      ]
    },
    {
      category: "Backend Development",
      groups: [
        {
          name: "Server-side Technologies",
          items: [
            { name: "Node.js", level: "Advanced", percentage: 90, details: "Express.js, Fastify, RESTful APIs, Middleware, Authentication" },
            { name: "API Development", level: "Advanced", percentage: 92, details: "REST, GraphQL, Swagger/OpenAPI, API Authentication, Rate Limiting" },
            { name: "Authentication & Security", level: "Intermediate to Advanced", percentage: 85, details: "JWT, OAuth, Passport.js, CORS, XSS Prevention, CSRF, Helmet.js" }
          ]
        },
        {
          name: "Databases & Storage",
          items: [
            { name: "NoSQL Databases", level: "Advanced", percentage: 88, details: "MongoDB, Mongoose, Firebase Firestore, Redis, Schema Design" },
            { name: "SQL Databases", level: "Intermediate to Advanced", percentage: 80, details: "PostgreSQL, MySQL, Sequelize, Knex.js, Query Optimization" },
            { name: "Cloud Storage", level: "Intermediate", percentage: 75, details: "AWS S3, Firebase Storage, Content Delivery Networks (CDN)" }
          ]
        }
      ]
    },
    {
      category: "DevOps & Tools",
      groups: [
        {
          name: "DevOps & Deployment",
          items: [
            { name: "CI/CD", level: "Intermediate", percentage: 78, details: "GitHub Actions, CircleCI, Jenkins, Automated Testing, Deployment Pipelines" },
            { name: "Containerization", level: "Intermediate", percentage: 75, details: "Docker, Docker Compose, Container Orchestration" },
            { name: "Cloud Services", level: "Intermediate", percentage: 72, details: "AWS, Vercel, Netlify, Heroku, Firebase" }
          ]
        },
        {
          name: "Development Tools & Practices",
          items: [
            { name: "Version Control", level: "Advanced", percentage: 95, details: "Git, GitHub, GitLab, Branching Strategies, Code Reviews" },
            { name: "Testing", level: "Intermediate to Advanced", percentage: 85, details: "Jest, Testing Library, Cypress, Mocha, Chai, TDD Methodology" },
            { name: "Project Management", level: "Intermediate", percentage: 80, details: "Agile, Scrum, Jira, Trello, Sprint Planning" }
          ]
        }
      ]
    },
    {
      category: "Design & UX",
      groups: [
        {
          name: "UI/UX Design",
          items: [
            { name: "UI Design", level: "Advanced", percentage: 88, details: "Visual Design, Color Theory, Typography, Component Design" },
            { name: "UX Design", level: "Intermediate to Advanced", percentage: 82, details: "User Research, Wireframing, Prototyping, User Testing" },
            { name: "Design Tools", level: "Advanced", percentage: 90, details: "Figma, Adobe XD, Sketch, Illustrator, Photoshop" }
          ]
        }
      ]
    }
  ];
  const learning = [
    "Web3 & Blockchain",
    "Machine Learning Basics",
    "Progressive Web Apps",
    "Svelte & SvelteKit",
    "Kubernetes"
  ];
  const shortSkillList = [
    {
      category: "Frontend",
      items: ["React.js", "Vue.js", "Next.js", "Nuxt.js", "Tailwind CSS", "JavaScript/TypeScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API Design", "GraphQL"]
    },
    {
      category: "Design & Tools",
      items: ["UI/UX Design", "Figma", "Git & GitHub", "Docker", "AWS", "CI/CD"]
    }
  ];
  return {
    navigationItems,
    socialLinks,
    projects,
    skills,
    learning,
    shortSkillList
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheAppHeader",
  __ssrInlineRender: true,
  emits: ["toggle-menu"],
  setup(__props, { emit: __emit }) {
    const { navigationItems } = useSiteData();
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const showFullLogo = computed(() => !isScrolled.value || isMobileMenuOpen.value);
    const isDarkMode = ref(true);
    const emit = __emit;
    watch(isMobileMenuOpen, (isOpen) => {
      emit("toggle-menu", isOpen);
      if (isOpen) {
        (void 0).body.classList.add("overflow-hidden");
      } else {
        (void 0).body.classList.remove("overflow-hidden");
      }
    }, { flush: "post" });
    watch(isDarkMode, (isDark) => {
      if (isDark) {
        (void 0).documentElement.classList.add("dark-theme");
        (void 0).documentElement.classList.remove("light-theme");
      } else {
        (void 0).documentElement.classList.add("light-theme");
        (void 0).documentElement.classList.remove("dark-theme");
      }
    });
    const toggleMobileMenu = (event) => {
      event.preventDefault();
      requestAnimationFrame(() => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed w-full top-0 z-50" }, _attrs))}><div class="bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden" style="${ssrRenderStyle({
        height: isMobileMenuOpen.value ? "100vh" : "var(--navbar-height)",
        minHeight: "var(--navbar-height)"
      })}"><div class="mx-auto max-w-7xl h-12 flex items-center"><div class="flex-none px-6 lg:px-8"><div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["absolute inset-y-0 z-10 cursor-pointer", showFullLogo.value ? "w-[10rem]" : "w-[2.5rem]"],
        "aria-label": "Go to homepage"
      }, null, _parent));
      _push(`<div class="text-xl font-bold relative"><div class="relative"><div class="${ssrRenderClass([!showFullLogo.value ? "opacity-0 transform scale-95" : "opacity-100", "transition-all duration-300 ease-in-out absolute left-0"])}"><span style="${ssrRenderStyle({ color: isDarkMode.value ? "white" : "#111827" })}">a</span><span style="${ssrRenderStyle({
        color: isDarkMode.value ? "white" : "#111827",
        transition: "all 300ms ease-in-out",
        opacity: !showFullLogo.value ? 0 : 1
      })}">rjun</span><span style="${ssrRenderStyle({
        color: isDarkMode.value ? "white" : "#111827",
        transition: "all 300ms ease-in-out",
        transform: !showFullLogo.value ? "translateX(-3.8rem)" : "translateX(0)",
        opacity: !showFullLogo.value ? 0 : 1
      })}">b</span><span style="${ssrRenderStyle({
        color: isDarkMode.value ? "white" : "#111827",
        transition: "all 300ms ease-in-out",
        opacity: !showFullLogo.value ? 0 : 1
      })}">ishnoi</span><span style="${ssrRenderStyle({
        color: isDarkMode.value ? "#9CA3AF" : "#6B7280",
        transition: "all 300ms ease-in-out",
        transform: !showFullLogo.value ? "translateX(-7.2rem)" : "translateX(0)",
        opacity: !showFullLogo.value ? 0 : 1
      })}">_</span></div><div class="transition-all duration-300 ease-in-out absolute left-0 overflow-visible" style="${ssrRenderStyle({
        opacity: showFullLogo.value ? 0 : 1
      })}"><span style="${ssrRenderStyle({ color: isDarkMode.value ? "white" : "#111827" })}">a</span><span style="${ssrRenderStyle({ color: isDarkMode.value ? "white" : "#111827" })}">b</span><span style="${ssrRenderStyle({ color: isDarkMode.value ? "#9CA3AF" : "#6B7280" })}">_</span></div></div><span class="opacity-0">arjunbishnoi_</span></div></div></div><div class="hidden md:flex items-center justify-center w-full absolute left-0 right-0"><div class="flex items-center space-x-8"><!--[-->`);
      ssrRenderList(unref(navigationItems), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.href,
          class: "text-sm font-medium text-gray-400 hover:text-white transition-colors nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name.charAt(0).toUpperCase() + item.name.slice(1))}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name.charAt(0).toUpperCase() + item.name.slice(1)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="hidden md:flex items-center ml-auto px-6 lg:px-8 space-x-6"><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Toggle theme</span><span class="absolute inset-y-0 left-[-20px] right-[20px]"></span>`);
      if (isDarkMode.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>`);
      }
      _push(`</button><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Send email</span><span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></button><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Download Resume</span><span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg></button></div><div class="md:hidden flex items-center px-6 lg:px-8 relative h-full ml-auto space-x-6"><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Toggle theme</span><span class="absolute inset-y-0 left-[-20px] right-[20px]"></span>`);
      if (isDarkMode.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>`);
      }
      _push(`</button><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Send email</span><span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></button><button type="button" class="flex items-center justify-center w-4 h-4 text-gray-400 hover:text-white transition-colors z-10 relative" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Download Resume</span><span class="absolute inset-y-0 left-[-3px] right-[-3px]"></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg></button><button type="button" class="flex items-center justify-center cursor-pointer relative z-10" style="${ssrRenderStyle({ "height": "var(--navbar-height)" })}"><span class="sr-only">Open main menu</span><span class="absolute inset-y-0 left-[-3px] right-[999px]"></span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 28 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 hover:text-white transition-colors"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 8h15" class="transition-all duration-300 ease-in-out" style="${ssrRenderStyle({
        transform: isMobileMenuOpen.value ? "translateY(4px) rotate(45deg)" : "none",
        transformOrigin: "center"
      })}"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 16h15" class="transition-all duration-300 ease-in-out" style="${ssrRenderStyle({
        transform: isMobileMenuOpen.value ? "translateY(-4px) rotate(-45deg)" : "none",
        transformOrigin: "center"
      })}"></path></svg></button></div></div><div class="md:hidden"><div class="menu-items-container px-6 lg:px-8"><!--[-->`);
      ssrRenderList(unref(navigationItems), (item, index) => {
        _push(`<div class="transform transition-all duration-500 ease-out mb-4" style="${ssrRenderStyle({
          opacity: isMobileMenuOpen.value ? 1 : 0,
          transform: `translateY(${isMobileMenuOpen.value ? 0 : -8}px)`,
          filter: `blur(${isMobileMenuOpen.value ? 0 : 2}px)`,
          transitionDelay: isMobileMenuOpen.value ? `${80 * index}ms` : `${30 * (unref(navigationItems).length - index - 1)}ms`
        })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          class: "text-gray-400 text-xl font-bold hover:text-white transition-colors nav-link",
          onClick: toggleMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name.charAt(0).toUpperCase() + item.name.slice(1))}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name.charAt(0).toUpperCase() + item.name.slice(1)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="transform transition-all duration-500 ease-out mb-4" style="${ssrRenderStyle({
        opacity: isMobileMenuOpen.value ? 1 : 0,
        transform: `translateY(${isMobileMenuOpen.value ? 0 : -8}px)`,
        filter: `blur(${isMobileMenuOpen.value ? 0 : 2}px)`,
        transitionDelay: isMobileMenuOpen.value ? "400ms" : "0ms"
      })}"><button class="text-gray-400 text-xl font-bold hover:text-white transition-colors nav-link"> Download Resume </button></div></div><div class="px-6 lg:px-8 pb-12 text-sm font-medium text-[#9CA3AF] text-center absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out" style="${ssrRenderStyle({
        opacity: isMobileMenuOpen.value ? 1 : 0,
        transform: `translateY(${isMobileMenuOpen.value ? 0 : -8}px)`,
        filter: `blur(${isMobileMenuOpen.value ? 0 : 2}px)`,
        transitionDelay: isMobileMenuOpen.value ? "400ms" : "0ms"
      })}"> made with <span class="text-red-500">❤</span> by arjun </div></div></div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheAppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { navigationItems, projects, socialLinks } = useSiteData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black border-t border-gray-800" }, _attrs))}><div class="py-12 border-b border-gray-800"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div><h3 class="text-lg font-semibold text-white mb-4">Navigation</h3><ul class="space-y-2"><!--[-->`);
      ssrRenderList(unref(navigationItems), (item) => {
        _push(`<li>`);
        if (item.href.startsWith("/")) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: "text-gray-400 hover:text-white transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name.charAt(0).toUpperCase() + item.name.slice(1))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name.charAt(0).toUpperCase() + item.name.slice(1)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a${ssrRenderAttr("href", item.href)} class="text-gray-400 hover:text-white transition-colors">${ssrInterpolate(item.name.charAt(0).toUpperCase() + item.name.slice(1))}</a>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="text-lg font-semibold text-white mb-4">Projects</h3><ul class="space-y-2"><!--[-->`);
      ssrRenderList(unref(projects).slice(0, 3), (project) => {
        _push(`<li><a${ssrRenderAttr("href", project.sourceUrl)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">${ssrInterpolate(project.title)}</a></li>`);
      });
      _push(`<!--]--><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "text-primary hover:text-primary/80 transition-colors font-semibold flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All Projects <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View All Projects "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold text-white mb-4">Contact</h3><ul class="space-y-2"><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a${ssrRenderAttr("href", unref(socialLinks).email)} class="text-gray-400 hover:text-white transition-colors">contact@arjunbishnoi.com</a></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg><a${ssrRenderAttr("href", unref(socialLinks).github)} class="text-gray-400 hover:text-white transition-colors">github.com/arjunbishnoi</a></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" clip-rule="evenodd"></path></svg><a${ssrRenderAttr("href", unref(socialLinks).linkedin)} class="text-gray-400 hover:text-white transition-colors">linkedin.com/in/arjun-bishnoi-b981bb104</a></li></ul></div></div></div></div><div class="py-8"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="flex flex-col md:flex-row justify-between items-center"><div class="mb-4 md:mb-0"><p class="text-sm text-gray-400">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Arjun Bishnoi. All rights reserved.</p></div><div class="flex space-x-6"><a${ssrRenderAttr("href", unref(socialLinks).github)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white"><span class="sr-only">GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a><a${ssrRenderAttr("href", unref(socialLinks).linkedin)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white"><span class="sr-only">LinkedIn</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" clip-rule="evenodd"></path></svg></a><a${ssrRenderAttr("href", unref(socialLinks).email)} class="text-gray-400 hover:text-white"><span class="sr-only">Email</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path></svg></a></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/favicon.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const onToggleMenu = (isOpen) => {
      isMobileMenuOpen.value = isOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_TheAppHeader = _sfc_main$4;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_TheAppFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black fixed-bg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"${_scopeId}><link rel="apple-touch-icon" sizes="152x152" href="/favicon.png"${_scopeId}><link rel="apple-touch-icon" sizes="120x120" href="/favicon.png"${_scopeId}><link rel="apple-touch-icon" href="/favicon.png"${_scopeId}><meta name="apple-mobile-web-app-capable" content="yes"${_scopeId}><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"${_scopeId}><meta name="apple-mobile-web-app-title" content="Arjun Bishnoi"${_scopeId}><link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png"${_scopeId}><link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png"${_scopeId}><link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png"${_scopeId}><link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png"${_scopeId}><link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.png"${_scopeId}>`);
          } else {
            return [
              createVNode("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-icon",
                href: "/favicon.png"
              }),
              createVNode("meta", {
                name: "apple-mobile-web-app-capable",
                content: "yes"
              }),
              createVNode("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black-translucent"
              }),
              createVNode("meta", {
                name: "apple-mobile-web-app-title",
                content: "Arjun Bishnoi"
              }),
              createVNode("link", {
                rel: "apple-touch-startup-image",
                media: "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-startup-image",
                media: "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-startup-image",
                media: "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-startup-image",
                media: "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)",
                href: "/favicon.png"
              }),
              createVNode("link", {
                rel: "apple-touch-startup-image",
                media: "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
                href: "/favicon.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TheAppHeader, { onToggleMenu }, null, _parent));
      _push(`<div class="w-full flex justify-center items-center pt-24 pb-0"><img${ssrRenderAttr("src", _imports_0)} alt="Arjun Bishnoi Logo" class="w-32 h-32 object-contain transition-transform duration-300 hover:scale-105"></div><main class="${ssrRenderClass([{ "overflow-hidden": isMobileMenuOpen.value }, "pt-0 bg-black text-white"])}">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_TheAppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gray-50" }, _attrs))}><div class="text-center"><h1 class="text-6xl font-bold text-gray-900 mb-4">${ssrInterpolate(__props.error.statusCode === 404 ? "404" : "Error")}</h1><p class="text-xl text-gray-600 mb-8">${ssrInterpolate(__props.error.statusCode === 404 ? "Page not found" : "Something went wrong")}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go back home `);
          } else {
            return [
              createTextVNode(" Go back home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { __nuxt_component_1 as _, useSiteData as a, entry$1 as default, useHead as u };
//# sourceMappingURL=server.mjs.map
