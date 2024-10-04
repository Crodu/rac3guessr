import { i as import1 } from "../chunks/chunk-C0O1Wsd-.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Container, Button } from "@mui/material";
import "react";
import "react-dom/server";
import "prop-types";
/* empty css                       */
/* empty css                       */
import "vike/server";
function Page() {
  return /* @__PURE__ */ jsxs(Container, { maxWidth: "xl", children: [
    /* @__PURE__ */ jsx("h1", { children: "RaceGuessr" }),
    /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx(Button, { variant: "contained", color: "primary", href: "/play", children: "Play" }) })
  ] });
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
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
