import { injectQuery as __vite__injectQuery } from "/vendor/vite-client.js";import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/Button.tsx.js");import { jsxDEV } from "/vendor/id-__x00__react-jsx-dev-runtime.js";
import RefreshRuntime from "/vendor/react-refresh.js";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/components/Button.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
const Button = (props) => /* @__PURE__ */ jsxDEV("button", { ...props }, void 0, false, {
  fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/components/Button.tsx",
  lineNumber: 2,
  columnNumber: 32
}, this);
_c = Button;
export default Button;
var _c;
$RefreshReg$(_c, "Button");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import(
    /* @vite-ignore */
    __vite__injectQuery(import.meta.url, 'import')).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/components/Button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
