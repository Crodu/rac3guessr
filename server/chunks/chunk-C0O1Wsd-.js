import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React, { useContext } from "react";
import PropTypes from "prop-types";
/* empty css               */
/* empty css               */
import { Container } from "@mui/material";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const logoUrl = "/rac3guessr/assets/static/logo.2_7Lo9tV.svg";
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};
function Link(props) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href } = props;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className });
}
Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function Layout({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Container, { maxWidth: "xl", children: [
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Content, { children })
  ] }) }) });
}
const TopBar = () => {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }),
    /* @__PURE__ */ jsx(Link, { href: "/about", children: "About" }),
    /* @__PURE__ */ jsx(Link, { href: "/star-wars", children: "Data Fetching" })
  ] });
};
Content.propTypes = {
  children: childrenPropType
};
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "80vh"
      },
      children
    }
  ) });
}
function getPageTitle(pageContext) {
  var _a;
  const title = (
    // Title defined dynamically by data()
    ((_a = pageContext.data) == null ? void 0 : _a.title) || // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.config.title || "RaceGuessr"
  );
  return title;
}
function onRenderHtml(pageContext) {
  var _a;
  const { Page } = pageContext;
  if (!Page) throw new Error("My onRenderHtml() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(Layout, { pageContext, children: /* @__PURE__ */ jsx(Page, {}) })
  );
  const title = getPageTitle(pageContext);
  const desc = ((_a = pageContext.data) == null ? void 0 : _a.description) || pageContext.config.description || "Demo of using Vike";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  };
}
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  import1 as i,
  usePageContext as u
};
