import { u as usePageContext, i as import1 } from "../chunks/chunk-C0O1Wsd-.js";
import { jsx } from "react/jsx-runtime";
import "react-dom/server";
import "react";
import "prop-types";
/* empty css                       */
/* empty css                       */
import "@mui/material";
import "vike/server";
function Page() {
  const pageContext = usePageContext();
  let { abortReason } = pageContext;
  if (!abortReason) {
    abortReason = pageContext.is404 ? "Page not found." : "Something went wrong.";
  }
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("p", { style: { fontSize: "1.3em" }, children: abortReason }) });
}
function Center({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children
    }
  );
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/_error/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
