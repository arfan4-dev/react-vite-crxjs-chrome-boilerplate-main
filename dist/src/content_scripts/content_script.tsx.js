import { injectQuery as __vite__injectQuery } from "/vendor/vite-client.js";import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content_scripts/content_script.tsx.js");import { jsxDEV } from "/vendor/id-__x00__react-jsx-dev-runtime.js";
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
    RefreshRuntime.register(type, "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--d6e72aa9.js"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/vendor/.vite-deps-react-dom_client.js__v--c08c4a64.js"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import Button from "/src/components/Button.tsx.js";
function ContentScript() {
  return /* @__PURE__ */ jsxDEV("div", { className: "App", children: /* @__PURE__ */ jsxDEV("header", { className: "App-header", children: [
    /* @__PURE__ */ jsxDEV("h1", { children: "ContentScript" }, void 0, false, {
      fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV(Button, { children: "button" }, void 0, false, {
      fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
_c = ContentScript;
const index = document.createElement("div");
index.id = "content-script";
document.body.appendChild(index);
ReactDOM.createRoot(index).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ContentScript, {}, void 0, false, {
  fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
  lineNumber: 17,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx",
  lineNumber: 16,
  columnNumber: 35
}, this));
var _c;
$RefreshReg$(_c, "ContentScript");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import(
    /* @vite-ignore */
    __vite__injectQuery(import.meta.url, 'import')).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Arfan.dev/Downloads/react-vite-crxjs-chrome-boilerplate-main/react-vite-crxjs-chrome-boilerplate-main/src/content_scripts/content_script.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
