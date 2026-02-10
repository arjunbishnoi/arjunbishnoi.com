import { mergeProps, unref, defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { a as useSiteData, u as useHead, _ as __nuxt_component_1 } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@vercel/speed-insights/nuxt';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkillCard",
  __ssrInlineRender: true,
  props: {
    group: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900/50 rounded-lg p-6 h-full" }, _attrs))}><h3 class="text-xl font-semibold text-primary mb-4">${ssrInterpolate(_ctx.group.name)}</h3><div class="space-y-6"><!--[-->`);
      ssrRenderList(_ctx.group.items, (item) => {
        _push(`<div><div class="flex justify-between items-center mb-2"><span class="text-white font-medium">${ssrInterpolate(item.name)}</span><span class="text-gray-400 text-sm">${ssrInterpolate(item.level)}</span></div><div class="w-full bg-gray-700 rounded-full h-2"><div class="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div><p class="mt-2 text-sm text-gray-400">${ssrInterpolate(item.details)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { skills, learning } = useSiteData();
    useHead({
      title: "Skills | Arjun Bishnoi",
      meta: [
        { name: "description", content: "Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkillCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black min-h-screen" }, _attrs))}><div class="pt-12"><div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8"><h1 class="text-4xl font-bold tracking-tight text-white"> Skills <span class="block text-xl text-primary mt-2">My technical expertise</span></h1><p class="mt-4 text-lg text-gray-300 max-w-2xl"> A comprehensive overview of my technical skills and proficiencies, developed through years of professional experience and continuous learning. </p></div></div><div class="mx-auto max-w-7xl px-6 py-10 lg:px-8"><!--[-->`);
      ssrRenderList(unref(skills), (skillCategory) => {
        _push(`<div class="mb-16"><h2 class="text-2xl font-bold text-white mb-8">${ssrInterpolate(skillCategory.category)}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(skillCategory.groups, (group) => {
          _push(ssrRenderComponent(_component_SkillCard, {
            key: group.name,
            group
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mx-auto max-w-7xl px-6 py-12 lg:px-8"><div class="bg-gray-900/50 rounded-lg p-8"><h2 class="text-2xl font-bold text-white mb-6">Currently Learning</h2><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(unref(learning), (item) => {
        _push(`<div class="px-4 py-2 bg-primary/20 text-primary rounded-full">${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-gray-900/50 py-12 mt-10"><div class="mx-auto max-w-7xl px-6 lg:px-8 text-center"><h2 class="text-2xl font-bold text-white mb-3">Let&#39;s Work Together</h2><p class="text-gray-400 mb-6 max-w-2xl mx-auto"> Looking for a developer with the right skill set for your project? Let&#39;s discuss how I can help bring your ideas to life. </p><a href="/#contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors"> Contact Me </a></div></div><div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-400 hover:text-white transition-colors flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span aria-hidden="true"${_scopeId}>\u2190</span> Back to Home `);
          } else {
            return [
              createVNode("span", { "aria-hidden": "true" }, "\u2190"),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=skills-DlH1Z7RB.mjs.map
