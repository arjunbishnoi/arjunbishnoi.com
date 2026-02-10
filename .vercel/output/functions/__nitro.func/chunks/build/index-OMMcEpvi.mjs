import { a as useSiteData, _ as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$2 } from './ProjectCard-BnGKIkit.mjs';
import { ref, unref, withCtx, createVNode, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "SkillListCard",
  __ssrInlineRender: true,
  props: {
    category: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900/50 p-6 rounded-lg h-full" }, _attrs))}><h3 class="text-xl font-semibold text-primary mb-4">${ssrInterpolate(_ctx.category)}</h3><ul class="space-y-2 text-gray-300"><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<li class="flex items-center"><span class="mr-2 text-primary">\u25B9</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillListCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects, shortSkillList, socialLinks } = useSiteData();
    const scrolledDown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_ProjectCard = _sfc_main$2;
      const _component_SkillListCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-black hero-section flex flex-col items-center justify-center min-h-screen"><div class="mx-auto max-w-7xl px-4 pt-12 pb-2 sm:pb-4 lg:px-8 w-full"><div class="text-center hero-content w-full flex items-center justify-center flex-col"><div class="inline-block hero-title-wrapper w-full"><h1 class="font-bold tracking-tight text-white text-center max-w-full leading-none w-full"><span class="hero-title-container inline-block text-center w-full"><span class="hero-title-line hero-line-1 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="${ssrRenderStyle({ "font-size": "30px !important", "line-height": "1.0" })}">Web &amp; Mobile</span><span class="hero-title-line hero-line-2 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="${ssrRenderStyle({ "font-size": "30px !important", "line-height": "1.0" })}">Designer / Developer</span></span></h1><p class="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg leading-6 xs:leading-7 sm:leading-7 text-gray-300 w-[95%] max-w-md sm:w-auto sm:max-w-2xl hero-text font-medium px-2 sm:px-0"> Mobile apps, web development, and design. Consistent, hands-on, and always evolving. </p></div></div></div><div class="flex items-center justify-center space-x-8 mb-4 mt-6"><a${ssrRenderAttr("href", unref(socialLinks).linkedin)} target="_blank" rel="noopener noreferrer" aria-label="Visit Arjun&#39;s LinkedIn profile" title="LinkedIn" class="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-gray-300 group-hover:fill-white transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a><a${ssrRenderAttr("href", unref(socialLinks).github)} target="_blank" rel="noopener noreferrer" aria-label="Visit Arjun&#39;s GitHub profile" title="GitHub" class="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8 fill-gray-300 group-hover:fill-white transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a></div><div class="w-full flex flex-col items-center justify-center mb-0 pb-4 sm:pb-4 sm:mb-4 md:mb-6 mt-4 relative z-40"><div class="flex items-center justify-center gap-x-6"><a${ssrRenderAttr("href", unref(socialLinks).resume)} class="resume-btn rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors" aria-label="Download Arjun&#39;s resume as PDF" title="Download Resume" download> Download Resume </a><a href="#contact" class="text-sm font-semibold leading-6 text-gray-300" aria-label="Jump to contact section" title="Contact Me"> Contact Me <span aria-hidden="true">\u2192</span></a></div><div class="scroll-indicator mt-2 sm:mt-4 pb-4 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="${ssrRenderClass([{ "opacity-0": scrolledDown.value }, "w-6 h-6 fill-gray-400 animate-bounce-subtle"])}"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></div></div><div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div></section><section id="projects" class="relative py-0 bg-black"><div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="${ssrRenderStyle({ "top": "calc(var(--navbar-height) - 1px)" })}"><div class="mx-auto max-w-7xl px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "flex justify-between items-center w-full group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-white group-hover:text-primary transition-colors"${_scopeId}>Projects</span><span class="text-gray-400 group-hover:text-primary transition-colors"${_scopeId}><span aria-hidden="true"${_scopeId}>\u2192</span></span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-white group-hover:text-primary transition-colors" }, "Projects"),
              createVNode("span", { class: "text-gray-400 group-hover:text-primary transition-colors" }, [
                createVNode("span", { "aria-hidden": "true" }, "\u2192")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mx-auto max-w-7xl px-6 pt-4 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(unref(projects).filter((p) => p.featured), (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: project.id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="skills" class="relative py-16 bg-black"><div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="${ssrRenderStyle({ "top": "calc(var(--navbar-height) - 1px)" })}"><div class="mx-auto max-w-7xl px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/skills",
        class: "flex justify-between items-center w-full group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-white group-hover:text-primary transition-colors"${_scopeId}>Skills</span><span class="text-gray-400 group-hover:text-primary transition-colors"${_scopeId}><span aria-hidden="true"${_scopeId}>\u2192</span></span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-white group-hover:text-primary transition-colors" }, "Skills"),
              createVNode("span", { class: "text-gray-400 group-hover:text-primary transition-colors" }, [
                createVNode("span", { "aria-hidden": "true" }, "\u2192")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(shortSkillList), (skillCategory) => {
        _push(ssrRenderComponent(_component_SkillListCard, {
          key: skillCategory.category,
          category: skillCategory.category,
          items: skillCategory.items
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="about" class="relative py-16 bg-black"><div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="${ssrRenderStyle({ "top": "calc(var(--navbar-height) - 1px)" })}"><div class="mx-auto max-w-7xl px-6 lg:px-8"><h2 class="text-2xl font-bold text-white">About</h2></div></div><div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div><h3 class="text-xl font-semibold text-primary mb-4">Who I Am</h3><p class="text-gray-300 mb-6"> I&#39;m Arjun Bishnoi, a mobile application developer and UI/UX designer passionate about creating smooth, engaging digital experiences. Whether I&#39;m working in React Native, SwiftUI, or Kotlin for Android, I have one goal in mind: build apps that look polished, perform reliably, and feel intuitive from the very first tap. On the frontend, I focus on clean, responsive layouts. On the backend, I use tools like Firebase and Node.js to keep data flowing effortlessly. </p><p class="text-gray-300"> My workflow combines careful engineering with a genuine focus on users. Each feature solves a real problem and is crafted with pixel-perfect detail. I break challenges into clear steps and mix technical precision with creative flair so every project stands out. </p></div><div><h3 class="text-xl font-semibold text-primary mb-4">My Journey</h3><p class="text-gray-300 mb-6"> My passion for development began at George Brown College when I dove into mobile app strategy and implementation. I&#39;ve built everything from a real-time cryptocurrency tracker in React Native to rental platform clones in SwiftUI and Kotlin. Each project has sharpened my skills and expanded my design sense. </p><p class="text-gray-300"> I&#39;m always curious and eager to learn new things, whether that means exploring emerging libraries or fine-tuning performance. As I grow, I stay committed to trying fresh approaches and delivering user-focused applications that leave a lasting impression. </p></div></div></div></section><section id="contact" class="relative py-16 bg-black"><div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="${ssrRenderStyle({ "top": "calc(var(--navbar-height) - 1px)" })}"><div class="mx-auto max-w-7xl px-6 lg:px-8"><h2 class="text-2xl font-bold text-white">Contact</h2></div></div><div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8"><div class="max-w-2xl mx-auto text-center mb-12"><h3 class="text-xl font-semibold text-white mb-4">Get In Touch</h3><p class="text-gray-300"> I&#39;m currently open to new opportunities and collaborations. Whether you have a question, a project in mind, or just want to say hello, feel free to reach out! </p></div><div class="max-w-xl mx-auto"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label><input type="text" id="name" class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary" placeholder="Your name"></div><div><label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label><input type="email" id="email" class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary" placeholder="your.email@example.com"></div><div><label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label><textarea id="message" rows="4" class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary" placeholder="Your message here..."></textarea></div><div><button type="submit" class="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"> Send Message </button></div></form></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-OMMcEpvi.mjs.map
