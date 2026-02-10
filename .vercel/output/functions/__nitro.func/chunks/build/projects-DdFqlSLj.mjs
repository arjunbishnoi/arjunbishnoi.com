import { _ as _sfc_main$1 } from './ProjectCard-BnGKIkit.mjs';
import { a as useSiteData, u as useHead, _ as __nuxt_component_1 } from './server.mjs';
import { computed, mergeProps, unref, withCtx, createBlock, createVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { projects, socialLinks } = useSiteData();
    const featuredProject = computed(() => projects.find((p) => p.featured));
    useHead({
      title: "Projects | Arjun Bishnoi",
      meta: [
        { name: "description", content: "Explore my portfolio of web development and design projects showcasing a range of skills and technologies." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black min-h-screen" }, _attrs))}><div class="pt-16 pb-8 relative overflow-hidden"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="max-w-3xl"><h1 class="text-4xl font-bold tracking-tight text-white"> Projects </h1><p class="mt-6 text-lg text-gray-300 max-w-2xl"> A curated collection of my recent projects, highlighting my skills in full-stack development, UI/UX design, and problem-solving. </p></div></div><div class="absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20"><div class="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-primary to-secondary" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div></div><div class="mx-auto max-w-7xl px-6 lg:px-8">`);
      if (featuredProject.value) {
        _push(`<section class="mb-20"><div class="flex items-center mb-8"><h2 class="text-2xl font-bold text-white">Featured Project</h2><div class="h-px flex-grow bg-gray-800 ml-4"></div></div><div class="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 shadow-xl transition-all duration-300 hover:shadow-primary/10"><div class="h-80 relative overflow-hidden"><img${ssrRenderAttr("src", featuredProject.value.image)}${ssrRenderAttr("alt", featuredProject.value.title)} class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"><div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div></div><div class="p-8 md:p-10"><h3 class="text-2xl font-semibold text-white mb-3">${ssrInterpolate(featuredProject.value.title)}</h3><p class="text-gray-400 mb-6 leading-relaxed">${ssrInterpolate(featuredProject.value.description)}</p><div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
        ssrRenderList(featuredProject.value.tags, (tag) => {
          _push(`<span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div>`);
        if (featuredProject.value.challenge) {
          _push(`<div class="space-y-3 bg-black/30 p-4 rounded-lg mb-6"><p class="text-gray-300"><span class="text-primary font-semibold">Challenge:</span> ${ssrInterpolate(featuredProject.value.challenge)}</p><p class="text-gray-300"><span class="text-primary font-semibold">Solution:</span> ${ssrInterpolate(featuredProject.value.solution)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex gap-4 mt-6"><a${ssrRenderAttr("href", featuredProject.value.sourceUrl)} target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors text-sm font-medium">Source Code</a></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="mb-20"><div class="flex items-center mb-8"><h2 class="text-2xl font-bold text-white">All Projects</h2><div class="h-px flex-grow bg-gray-800 ml-4"></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div class="group h-full">`);
        _push(ssrRenderComponent(_component_ProjectCard, { project }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="mb-20"><div class="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 p-8 md:p-12 text-center"><div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"><svg class="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg></div><h3 class="text-xl font-bold text-white mb-3">More Projects in Development</h3><p class="text-gray-400 mb-8 max-w-xl mx-auto"> I&#39;m constantly working on new projects and experiments. Visit my GitHub profile to see all my repositories, including works in progress and contributions to open source. </p><a${ssrRenderAttr("href", unref(socialLinks).github)} target="_blank" rel="noopener noreferrer" class="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-flex items-center transition-colors"><span class="font-medium">View All on GitHub</span><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></section><section class="mb-12"><div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800/50 p-10 md:p-16 relative"><div class="absolute inset-0 opacity-10"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dotPattern)"></rect></svg></div><div class="relative"><h2 class="text-2xl font-bold text-white mb-3 text-center">Interested in working together?</h2><div class="h-1 w-20 bg-primary mx-auto mb-6"></div><p class="text-gray-400 mb-8 max-w-2xl mx-auto text-center"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&#39;s create something amazing together. </p><div class="text-center"><a href="/#contact" class="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-flex items-center transition-all duration-300 hover:scale-105"><span class="font-medium">Get In Touch</span><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div></div></section><div class="py-8 mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-400 hover:text-white transition-colors group flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"${_scopeId}></path></svg><span class="font-medium"${_scopeId}>Back to Home</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
                  "clip-rule": "evenodd"
                })
              ])),
              createVNode("span", { class: "font-medium" }, "Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-DdFqlSLj.mjs.map
