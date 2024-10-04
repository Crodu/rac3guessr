import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedBy": "/pages/about/" },
    loadConfigValuesAll: () => import("./entries/pages_about.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/play/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/play", "definedBy": "/pages/play/index/" },
    loadConfigValuesAll: () => import("./entries/pages_play_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars/@id", "definedBy": "/pages/star-wars/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_-id.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars", "definedBy": "/pages/star-wars/index/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{008}~.js": {
    "file": "assets/static/pages_about_code-10d2d77a.Bv6kHCCM.css",
    "src": "_chunk-!~{008}~.js"
  },
  "_chunk-!~{009}~.js": {
    "file": "assets/static/pages_play_index_styles-a72a82e8.DJPlaMqo.css",
    "src": "_chunk-!~{009}~.js"
  },
  "_chunk-!~{00a}~.js": {
    "file": "assets/static/renderer_Layout-031b266d.DarhGNBM.css",
    "src": "_chunk-!~{00a}~.js"
  },
  "_chunk-!~{00b}~.js": {
    "file": "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
    "src": "_chunk-!~{00b}~.js"
  },
  "_chunk-1QMCCYTv.js": {
    "file": "assets/chunks/chunk-1QMCCYTv.js",
    "name": "_onRenderClient",
    "css": [
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ]
  },
  "_chunk-BKKGtC_c.js": {
    "file": "assets/chunks/chunk-BKKGtC_c.js",
    "name": "Button",
    "imports": [
      "_chunk-1QMCCYTv.js"
    ]
  },
  "_chunk-Bw_wQQl7.js": {
    "file": "assets/chunks/chunk-Bw_wQQl7.js",
    "name": "useData",
    "imports": [
      "_chunk-1QMCCYTv.js"
    ]
  },
  "_chunk-CvOBQiiF.js": {
    "file": "assets/chunks/chunk-CvOBQiiF.js",
    "name": "renderPageClientSide"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.B729JSTI.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-CvOBQiiF.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/about",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/play/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index"
    ]
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.2_7Lo9tV.svg",
    "src": "renderer/logo.svg"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.B43VmMjR.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/about": {
    "file": "assets/entries/pages_about.BLvHDDDj.js",
    "name": "entries/pages/about",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js"
    ],
    "css": [
      "assets/static/pages_about_code-10d2d77a.Bv6kHCCM.css",
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.cIi-V-tF.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js",
      "_chunk-BKKGtC_c.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/play/index": {
    "file": "assets/entries/pages_play_index.DLd9klDw.js",
    "name": "entries/pages/play/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/play/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js",
      "_chunk-CvOBQiiF.js",
      "_chunk-Bw_wQQl7.js",
      "_chunk-BKKGtC_c.js"
    ],
    "css": [
      "assets/static/pages_play_index_styles-a72a82e8.DJPlaMqo.css",
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id": {
    "file": "assets/entries/pages_star-wars_-id.DmY-8Vw5.js",
    "name": "entries/pages/star-wars/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js",
      "_chunk-Bw_wQQl7.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index": {
    "file": "assets/entries/pages_star-wars_index.1HpZbvDY.js",
    "name": "entries/pages/star-wars/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-1QMCCYTv.js",
      "_chunk-Bw_wQQl7.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.FMehjOCd.css",
      "assets/static/renderer_Layout-031b266d.DarhGNBM.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.197",
    "usesClientRouter": false,
    "baseServer": "/rac3guessr/",
    "baseAssets": "/rac3guessr/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
