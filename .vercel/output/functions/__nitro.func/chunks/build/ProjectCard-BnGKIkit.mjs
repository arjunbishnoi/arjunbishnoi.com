import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900/50 rounded-lg overflow-hidden h-full flex flex-col" }, _attrs))}><div class="h-48 bg-gray-800/50 relative overflow-hidden group"><img${ssrRenderAttr("src", _ctx.project.image)}${ssrRenderAttr("alt", _ctx.project.title)} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div></div><div class="p-6 flex flex-col flex-grow"><h3 class="text-xl font-semibold text-white mb-2">${ssrInterpolate(_ctx.project.title)}</h3><p class="text-gray-400 mb-4 flex-grow">${ssrInterpolate(_ctx.project.description)}</p><div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
      ssrRenderList(_ctx.project.tags, (tag) => {
        _push(`<span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><div class="flex gap-4 mt-auto"><a${ssrRenderAttr("href", _ctx.project.sourceUrl)} target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 text-sm font-medium"> Source Code </a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProjectCard-BnGKIkit.mjs.map
