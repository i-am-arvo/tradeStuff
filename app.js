// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4zjAY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "1d7c6cc1844731c6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hXVIw":[function(require,module,exports) {
/**
 * tradeStuff
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _state = require("./db/state");
var _head = require("./view/head");
var _headDefault = parcelHelpers.interopDefault(_head);
var _positions = require("./view/positions");
window.state = (0, _state.state);
console.log("app load => ", (0, _state.state).position);
(0, _state.load)();
const row = (v)=>{
    let list = null;
    if (v.attrs.bs === "b") list = db.bList;
    if (v.attrs.bs === "s") list = db.sList;
    const view = ()=>{
        list.map((item)=>{
            return _mithril("li", [
                _mithril("span", "QTY: "),
                _mithril('input[type="text"].amount', {
                    min: 0,
                    placeholder: 0
                }),
                _mithril("span", "PRICE: "),
                _mithril('input[type="text"].price', {
                    min: 0,
                    placeholder: 0
                }),
                item.id > 0 && _mithril("img", {
                    src: "./gui/delete.png",
                    height: "16px",
                    onclick: ()=>del(item.id)
                })
            ]);
        });
    };
    return {
        view
    };
};
const bs = (v)=>{
    const add = (bs)=>bs === "b" ? db.bList.push({
            id: db.bList.length
        }) : db.sList.push({
            id: db.sList.length
        });
    let bors = v.attrs.bs;
    return {
        view: ()=>{
            return _mithril(".c -5of12 " + bors, [
                _mithril("h6", bors === "b" ? "buys" : "sells", _mithril("button", {
                    onclick: ()=>add(bors)
                }, "+")),
                _mithril("ul", _mithril(row, {
                    bs: bors
                }))
            ]);
        }
    };
};
_mithril.mount(document.body, {
    view: (v)=>{
        return _mithril(".box", [
            _mithril(".grd -middle -around", {
                style: {
                    width: "89%"
                }
            }, [
                _mithril((0, _headDefault.default)),
                _mithril((0, _positions.pos))
            ]),
            (0, _state.state).chart && _mithril((0, _positions.chart))
        ]);
    }
});

},{"./view/head":"cm5Gr","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","./db/state":"6HMOL","mithril":"05eVJ","./view/positions":"8EyXB"}],"cm5Gr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _state = require("../db/state");
var _trade = require("./trade");
var _tradeDefault = parcelHelpers.interopDefault(_trade);
var _calc = require("./calc");
var _calcDefault = parcelHelpers.interopDefault(_calc);
exports.default = {
    view: (x)=>{
        return (0, _mithrilDefault.default)(".grd -middle -around", {
            style: {
                width: "100%"
            }
        }, [
            (0, _mithrilDefault.default)(".c -4of12 info", [
                (0, _mithrilDefault.default)("h5", (0, _mithrilDefault.default)("img", {
                    src: "./gui/logo.png"
                }), "tradeStuff", (0, _mithrilDefault.default)("span", "v0.0.1-alpha")),
                (0, _mithrilDefault.default)("ul", [
                    (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "stuff will go here " + (0, _state.state).spent)),
                    (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "stuff will go here " + (0, _state.state).break))
                ])
            ]),
            (0, _mithrilDefault.default)(".c -fill"),
            (0, _mithrilDefault.default)((0, _calcDefault.default)),
            (0, _mithrilDefault.default)(".c -fill"),
            (0, _mithrilDefault.default)((0, _tradeDefault.default))
        ]);
    }
};

},{"mithril":"05eVJ","../db/state":"6HMOL","./trade":"a48mX","./calc":"cgmCH","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"05eVJ":[function(require,module,exports) {
"use strict";
var hyperscript = require("2d179bad95709f");
var request = require("224e2f2235d38ebd");
var mountRedraw = require("4849ebdb0f672d27");
var domFor = require("5ef9395e1183fbe6");
var m = function m() {
    return hyperscript.apply(this, arguments);
};
m.m = hyperscript;
m.trust = hyperscript.trust;
m.fragment = hyperscript.fragment;
m.Fragment = "[";
m.mount = mountRedraw.mount;
m.route = require("84c53ae8b5d7cb9c");
m.render = require("d25b6e359ef3d9ac");
m.redraw = mountRedraw.redraw;
m.request = request.request;
m.parseQueryString = require("d2540e1c141b3b04");
m.buildQueryString = require("cbe9f50dd9eb8e88");
m.parsePathname = require("3dba448b7198a832");
m.buildPathname = require("b43033d2341056fa");
m.vnode = require("ea96a5dae89bcebf");
m.censor = require("58c10285a01083ea");
m.domFor = domFor.domFor;
module.exports = m;

},{"2d179bad95709f":"aVriM","224e2f2235d38ebd":"ljSDe","4849ebdb0f672d27":"dvp1x","5ef9395e1183fbe6":"bjZmw","84c53ae8b5d7cb9c":"8HVTZ","d25b6e359ef3d9ac":"88EoG","d2540e1c141b3b04":"1Bqsf","cbe9f50dd9eb8e88":"dJUE4","3dba448b7198a832":"jciPb","b43033d2341056fa":"lXNwO","ea96a5dae89bcebf":"egGtB","58c10285a01083ea":"9jEja"}],"aVriM":[function(require,module,exports) {
"use strict";
var hyperscript = require("fb961aa42dcc9a6b");
hyperscript.trust = require("592dc27b407eecdf");
hyperscript.fragment = require("3b818c112f143eff");
module.exports = hyperscript;

},{"fb961aa42dcc9a6b":"5oIm8","592dc27b407eecdf":"7nvWj","3b818c112f143eff":"5IQLU"}],"5oIm8":[function(require,module,exports) {
"use strict";
var Vnode = require("6ff9be895faf7c4c");
var hyperscriptVnode = require("a39ba15dd9901ca7");
var hasOwn = require("5a072750e6d9e7dd");
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
var selectorCache = {};
function isEmpty(object) {
    for(var key in object)if (hasOwn.call(object, key)) return false;
    return true;
}
function compileSelector(selector) {
    var match, tag = "div", classes = [], attrs = {};
    while(match = selectorParser.exec(selector)){
        var type = match[1], value = match[2];
        if (type === "" && value !== "") tag = value;
        else if (type === "#") attrs.id = value;
        else if (type === ".") classes.push(value);
        else if (match[3][0] === "[") {
            var attrValue = match[6];
            if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match[4] === "class") classes.push(attrValue);
            else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
        }
    }
    if (classes.length > 0) attrs.className = classes.join(" ");
    return selectorCache[selector] = {
        tag: tag,
        attrs: attrs
    };
}
function execSelector(state, vnode) {
    var attrs = vnode.attrs;
    var hasClass = hasOwn.call(attrs, "class");
    var className = hasClass ? attrs.class : attrs.className;
    vnode.tag = state.tag;
    vnode.attrs = {};
    if (!isEmpty(state.attrs)) {
        var newAttrs = {};
        for(var key in attrs)if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];
        attrs = newAttrs;
    }
    for(var key in state.attrs)if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)) attrs[key] = state.attrs[key];
    if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
    if (hasClass) attrs.class = null;
    for(var key in attrs)if (hasOwn.call(attrs, key) && key !== "key") {
        vnode.attrs = attrs;
        break;
    }
    return vnode;
}
function hyperscript(selector) {
    if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") throw Error("The selector must be either a string or a component.");
    var vnode = hyperscriptVnode.apply(1, arguments);
    if (typeof selector === "string") {
        vnode.children = Vnode.normalizeChildren(vnode.children);
        if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
    }
    vnode.tag = selector;
    return vnode;
}
module.exports = hyperscript;

},{"6ff9be895faf7c4c":"egGtB","a39ba15dd9901ca7":"iRFFB","5a072750e6d9e7dd":"94qwS"}],"egGtB":[function(require,module,exports) {
"use strict";
function Vnode(tag, key, attrs, children, text, dom) {
    return {
        tag: tag,
        key: key,
        attrs: attrs,
        children: children,
        text: text,
        dom: dom,
        domSize: undefined,
        state: undefined,
        events: undefined,
        instance: undefined
    };
}
Vnode.normalize = function(node) {
    if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
    if (node == null || typeof node === "boolean") return null;
    if (typeof node === "object") return node;
    return Vnode("#", undefined, undefined, String(node), undefined, undefined);
};
Vnode.normalizeChildren = function(input) {
    var children = [];
    if (input.length) {
        var isKeyed = input[0] != null && input[0].key != null;
        // Note: this is a *very* perf-sensitive check.
        // Fun fact: merging the loop like this is somehow faster than splitting
        // it, noticeably so.
        for(var i = 1; i < input.length; i++){
            if ((input[i] != null && input[i].key != null) !== isKeyed) throw new TypeError(isKeyed && (input[i] != null || typeof input[i] === "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys.");
        }
        for(var i = 0; i < input.length; i++)children[i] = Vnode.normalize(input[i]);
    }
    return children;
};
module.exports = Vnode;

},{}],"iRFFB":[function(require,module,exports) {
"use strict";
var Vnode = require("880e1d4a5c086cde");
// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
    var attrs = arguments[this], start = this + 1, children;
    if (attrs == null) attrs = {};
    else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
        attrs = {};
        start = this;
    }
    if (arguments.length === start + 1) {
        children = arguments[start];
        if (!Array.isArray(children)) children = [
            children
        ];
    } else {
        children = [];
        while(start < arguments.length)children.push(arguments[start++]);
    }
    return Vnode("", attrs.key, attrs, children);
};

},{"880e1d4a5c086cde":"egGtB"}],"94qwS":[function(require,module,exports) {
// This exists so I'm only saving it once.
"use strict";
module.exports = ({}).hasOwnProperty;

},{}],"7nvWj":[function(require,module,exports) {
"use strict";
var Vnode = require("8f6a709e541cf3c8");
module.exports = function(html) {
    if (html == null) html = "";
    return Vnode("<", undefined, undefined, html, undefined, undefined);
};

},{"8f6a709e541cf3c8":"egGtB"}],"5IQLU":[function(require,module,exports) {
"use strict";
var Vnode = require("629b8406e8d1aad5");
var hyperscriptVnode = require("b33001d0967b235");
module.exports = function() {
    var vnode = hyperscriptVnode.apply(0, arguments);
    vnode.tag = "[";
    vnode.children = Vnode.normalizeChildren(vnode.children);
    return vnode;
};

},{"629b8406e8d1aad5":"egGtB","b33001d0967b235":"iRFFB"}],"ljSDe":[function(require,module,exports) {
"use strict";
var mountRedraw = require("4157c26bee942b4b");
module.exports = require("8b43d47c83a92e78")(typeof window !== "undefined" ? window : null, mountRedraw.redraw);

},{"4157c26bee942b4b":"dvp1x","8b43d47c83a92e78":"7XXSl"}],"dvp1x":[function(require,module,exports) {
"use strict";
var render = require("3b87dd0ed7b692a4");
module.exports = require("433bfad0b40fc6e8")(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null);

},{"3b87dd0ed7b692a4":"88EoG","433bfad0b40fc6e8":"hNjwY"}],"88EoG":[function(require,module,exports) {
"use strict";
module.exports = require("c8ac598c57ba73f8")(typeof window !== "undefined" ? window : null);

},{"c8ac598c57ba73f8":"7G4HF"}],"7G4HF":[function(require,module,exports) {
"use strict";
var Vnode = require("2e3e0a3565a62107");
var df = require("4ce582185ead7f61");
var delayedRemoval = df.delayedRemoval;
var domFor = df.domFor;
module.exports = function($window) {
    var $doc = $window && $window.document;
    var nameSpace = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    };
    var currentRedraw;
    var currentRender;
    function getNameSpace(vnode) {
        return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
    }
    //sanity check to discourage people from doing `vnode.state = ...`
    function checkState(vnode, original) {
        if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.");
    }
    //Note: the hook is passed as the `this` argument to allow proxying the
    //arguments without requiring a full array allocation to do so. It also
    //takes advantage of the fact the current `vnode` is the first argument in
    //all lifecycle methods.
    function callHook(vnode) {
        var original = vnode.state;
        try {
            return this.apply(original, arguments);
        } finally{
            checkState(vnode, original);
        }
    }
    // IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
    // inside an iframe. Catch and swallow this error, and heavy-handidly return null.
    function activeElement() {
        try {
            return $doc.activeElement;
        } catch (e) {
            return null;
        }
    }
    //create
    function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function createNode(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        if (typeof tag === "string") {
            vnode.state = {};
            if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
            switch(tag){
                case "#":
                    createText(parent, vnode, nextSibling);
                    break;
                case "<":
                    createHTML(parent, vnode, ns, nextSibling);
                    break;
                case "[":
                    createFragment(parent, vnode, hooks, ns, nextSibling);
                    break;
                default:
                    createElement(parent, vnode, hooks, ns, nextSibling);
            }
        } else createComponent(parent, vnode, hooks, ns, nextSibling);
    }
    function createText(parent, vnode, nextSibling) {
        vnode.dom = $doc.createTextNode(vnode.children);
        insertDOM(parent, vnode.dom, nextSibling);
    }
    var possibleParents = {
        caption: "table",
        thead: "table",
        tbody: "table",
        tfoot: "table",
        tr: "tbody",
        th: "tr",
        td: "tr",
        colgroup: "table",
        col: "colgroup"
    };
    function createHTML(parent, vnode, ns, nextSibling) {
        var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
        // not using the proper parent makes the child element(s) vanish.
        //     var div = document.createElement("div")
        //     div.innerHTML = "<td>i</td><td>j</td>"
        //     console.log(div.innerHTML)
        // --> "ij", no <td> in sight.
        var temp = $doc.createElement(possibleParents[match[1]] || "div");
        if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + vnode.children + "</svg>";
            temp = temp.firstChild;
        } else temp.innerHTML = vnode.children;
        vnode.dom = temp.firstChild;
        vnode.domSize = temp.childNodes.length;
        // Capture nodes to remove, so we don't confuse them.
        var fragment = $doc.createDocumentFragment();
        var child;
        while(child = temp.firstChild)fragment.appendChild(child);
        insertDOM(parent, fragment, nextSibling);
    }
    function createFragment(parent, vnode, hooks, ns, nextSibling) {
        var fragment = $doc.createDocumentFragment();
        if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
        }
        vnode.dom = fragment.firstChild;
        vnode.domSize = fragment.childNodes.length;
        insertDOM(parent, fragment, nextSibling);
    }
    function createElement(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        var attrs = vnode.attrs;
        var is = attrs && attrs.is;
        ns = getNameSpace(vnode) || ns;
        var element = ns ? is ? $doc.createElementNS(ns, tag, {
            is: is
        }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {
            is: is
        }) : $doc.createElement(tag);
        vnode.dom = element;
        if (attrs != null) setAttrs(vnode, attrs, ns);
        insertDOM(parent, element, nextSibling);
        if (!maybeSetContentEditable(vnode)) {
            if (vnode.children != null) {
                var children = vnode.children;
                createNodes(element, children, 0, children.length, hooks, null, ns);
                if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs);
            }
        }
    }
    function initComponent(vnode, hooks) {
        var sentinel;
        if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
        } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
        }
        initLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        sentinel.$$reentrantLock$$ = null;
    }
    function createComponent(parent, vnode, hooks, ns, nextSibling) {
        initComponent(vnode, hooks);
        if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
        } else vnode.domSize = 0;
    }
    //update
    /**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */ // This function diffs and patches lists of vnodes, both keyed and unkeyed.
    //
    // We will:
    //
    // 1. describe its general structure
    // 2. focus on the diff algorithm optimizations
    // 3. discuss DOM node operations.
    // ## Overview:
    //
    // The updateNodes() function:
    // - deals with trivial cases
    // - determines whether the lists are keyed or unkeyed based on the first non-null node
    //   of each list.
    // - diffs them and patches the DOM if needed (that's the brunt of the code)
    // - manages the leftovers: after diffing, are there:
    //   - old nodes left to remove?
    // 	 - new nodes to insert?
    // 	 deal with them!
    //
    // The lists are only iterated over once, with an exception for the nodes in `old` that
    // are visited in the fourth part of the diff and in the `removeNodes` loop.
    // ## Diffing
    //
    // Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
    // may be good for context on longest increasing subsequence-based logic for moving nodes.
    //
    // In order to diff keyed lists, one has to
    //
    // 1) match nodes in both lists, per key, and update them accordingly
    // 2) create the nodes present in the new list, but absent in the old one
    // 3) remove the nodes present in the old list, but absent in the new one
    // 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
    //
    // To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
    // over the new list and for each new vnode, find the corresponding vnode in the old list using
    // the map.
    // 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
    // and must be created.
    // For the removals, we actually remove the nodes that have been updated from the old list.
    // The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
    // The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
    // algorithm.
    //
    // the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
    // from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
    // corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
    //  match the above lists, for example).
    //
    // In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
    // can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
    //
    // @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
    // the longest increasing subsequence *of old nodes still present in the new list*).
    //
    // It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
    // and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
    // the `LIS` and a temporary one to create the LIS).
    //
    // So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
    // the LIS and can be updated without moving them.
    //
    // If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
    // the exception of the last node if the list is fully reversed).
    //
    // ## Finding the next sibling.
    //
    // `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
    // When the list is being traversed top-down, at any index, the DOM nodes up to the previous
    // vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
    // list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
    //
    // In the other scenarios (swaps, upwards traversal, map-based diff),
    // the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
    // bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
    // as the next sibling (cached in the `nextSibling` variable).
    // ## DOM node moves
    //
    // In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
    // this is not the case if the node moved (second and fourth part of the diff algo). We move
    // the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
    // variable rather than fetching it using `getNextSibling()`.
    function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
        if (old === vnodes || old == null && vnodes == null) return;
        else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
        else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
        else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start = 0, oldStart = 0;
            if (!isOldKeyed) while(oldStart < old.length && old[oldStart] == null)oldStart++;
            if (!isKeyed) while(start < vnodes.length && vnodes[start] == null)start++;
            if (isOldKeyed !== isKeyed) {
                removeNodes(parent, old, oldStart, old.length);
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
                // Don't index past the end of either list (causes deopts).
                var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
                // Rewind if necessary to the first non-null index on either side.
                // We could alternatively either explicitly create or remove nodes when `start !== oldStart`
                // but that would be optimizing for sparse lists which are more rare than dense ones.
                start = start < oldStart ? start : oldStart;
                for(; start < commonLength; start++){
                    o = old[start];
                    v = vnodes[start];
                    if (o === v || o == null && v == null) continue;
                    else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                    else if (v == null) removeNode(parent, o);
                    else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);
                }
                if (old.length > commonLength) removeNodes(parent, old, start, old.length);
                if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
                // keyed diff
                var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling;
                // bottom-up
                while(oldEnd >= oldStart && end >= start){
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                }
                // top-down
                while(oldEnd >= oldStart && end >= start){
                    o = old[oldStart];
                    v = vnodes[start];
                    if (o.key !== v.key) break;
                    oldStart++, start++;
                    if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
                }
                // swaps and list reversals
                while(oldEnd >= oldStart && end >= start){
                    if (start === end) break;
                    if (o.key !== ve.key || oe.key !== v.key) break;
                    topSibling = getNextSibling(old, oldStart, nextSibling);
                    moveDOM(parent, oe, topSibling);
                    if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
                    if (++start <= --end) moveDOM(parent, o, nextSibling);
                    if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldStart++;
                    oldEnd--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    o = old[oldStart];
                    v = vnodes[start];
                }
                // bottom up once again
                while(oldEnd >= oldStart && end >= start){
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                }
                if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);
                else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                else {
                    // inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
                    var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map, lisIndices;
                    for(i = 0; i < vnodesLength; i++)oldIndices[i] = -1;
                    for(i = end; i >= start; i--){
                        if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);
                        ve = vnodes[i];
                        var oldIndex = map[ve.key];
                        if (oldIndex != null) {
                            pos = oldIndex < pos ? oldIndex : -1 // becomes -1 if nodes were re-ordered
                            ;
                            oldIndices[i - start] = oldIndex;
                            oe = old[oldIndex];
                            old[oldIndex] = null;
                            if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                            if (ve.dom != null) nextSibling = ve.dom;
                            matched++;
                        }
                    }
                    nextSibling = originalNextSibling;
                    if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
                    if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                    else {
                        if (pos === -1) {
                            // the indices of the indices of the items that are part of the
                            // longest increasing subsequence in the oldIndices list
                            lisIndices = makeLisIndices(oldIndices);
                            li = lisIndices.length - 1;
                            for(i = end; i >= start; i--){
                                v = vnodes[i];
                                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                                else if (lisIndices[li] === i - start) li--;
                                else moveDOM(parent, v, nextSibling);
                                if (v.dom != null) nextSibling = vnodes[i].dom;
                            }
                        } else for(i = end; i >= start; i--){
                            v = vnodes[i];
                            if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                            if (v.dom != null) nextSibling = vnodes[i].dom;
                        }
                    }
                }
            }
        }
    }
    function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
        var oldTag = old.tag, tag = vnode.tag;
        if (oldTag === tag) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old)) return;
            if (typeof oldTag === "string") {
                if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
                switch(oldTag){
                    case "#":
                        updateText(old, vnode);
                        break;
                    case "<":
                        updateHTML(parent, old, vnode, ns, nextSibling);
                        break;
                    case "[":
                        updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                        break;
                    default:
                        updateElement(old, vnode, hooks, ns);
                }
            } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
        } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function updateText(old, vnode) {
        if (old.children.toString() !== vnode.children.toString()) old.dom.nodeValue = vnode.children;
        vnode.dom = old.dom;
    }
    function updateHTML(parent, old, vnode, ns, nextSibling) {
        if (old.children !== vnode.children) {
            removeDOM(parent, old, undefined);
            createHTML(parent, vnode, ns, nextSibling);
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
        }
    }
    function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
        updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
        var domSize = 0, children = vnode.children;
        vnode.dom = null;
        if (children != null) {
            for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null && child.dom != null) {
                    if (vnode.dom == null) vnode.dom = child.dom;
                    domSize += child.domSize || 1;
                }
            }
            if (domSize !== 1) vnode.domSize = domSize;
        }
    }
    function updateElement(old, vnode, hooks, ns) {
        var element = vnode.dom = old.dom;
        ns = getNameSpace(vnode) || ns;
        if (vnode.tag === "textarea") {
            if (vnode.attrs == null) vnode.attrs = {};
        }
        updateAttrs(vnode, old.attrs, vnode.attrs, ns);
        if (!maybeSetContentEditable(vnode)) updateNodes(element, old.children, vnode.children, hooks, null, ns);
    }
    function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        updateLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
        if (vnode.instance != null) {
            if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
        } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = undefined;
            vnode.domSize = 0;
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
        }
    }
    function getKeyMap(vnodes, start, end) {
        var map = Object.create(null);
        for(; start < end; start++){
            var vnode = vnodes[start];
            if (vnode != null) {
                var key = vnode.key;
                if (key != null) map[key] = start;
            }
        }
        return map;
    }
    // Lifted from ivi https://github.com/ivijs/ivi/
    // takes a list of unique numbers (-1 is special and can
    // occur multiple times) and returns an array with the indices
    // of the items that are part of the longest increasing
    // subsequence
    var lisTemp = [];
    function makeLisIndices(a) {
        var result = [
            0
        ];
        var u = 0, v = 0, i = 0;
        var il = lisTemp.length = a.length;
        for(var i = 0; i < il; i++)lisTemp[i] = a[i];
        for(var i = 0; i < il; ++i){
            if (a[i] === -1) continue;
            var j = result[result.length - 1];
            if (a[j] < a[i]) {
                lisTemp[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                // Fast integer average without overflow.
                // eslint-disable-next-line no-bitwise
                var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
                if (a[result[c]] < a[i]) u = c + 1;
                else v = c;
            }
            if (a[i] < a[result[u]]) {
                if (u > 0) lisTemp[i] = result[u - 1];
                result[u] = i;
            }
        }
        u = result.length;
        v = result[u - 1];
        while(u-- > 0){
            result[u] = v;
            v = lisTemp[v];
        }
        lisTemp.length = 0;
        return result;
    }
    function getNextSibling(vnodes, i, nextSibling) {
        for(; i < vnodes.length; i++){
            if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
        }
        return nextSibling;
    }
    // This handles fragments with zombie children (removed from vdom, but persisted in DOM through onbeforeremove)
    function moveDOM(parent, vnode, nextSibling) {
        if (vnode.dom != null) {
            var target;
            if (vnode.domSize == null) // don't allocate for the common case
            target = vnode.dom;
            else {
                target = $doc.createDocumentFragment();
                for (var dom of domFor(vnode))target.appendChild(dom);
            }
            insertDOM(parent, target, nextSibling);
        }
    }
    function insertDOM(parent, dom, nextSibling) {
        if (nextSibling != null) parent.insertBefore(dom, nextSibling);
        else parent.appendChild(dom);
    }
    function maybeSetContentEditable(vnode) {
        if (vnode.attrs == null || vnode.attrs.contenteditable == null && // attribute
        vnode.attrs.contentEditable == null // property
        ) return false;
        var children = vnode.children;
        if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
        } else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.");
        return true;
    }
    //remove
    function removeNodes(parent, vnodes, start, end) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) removeNode(parent, vnode);
        }
    }
    function removeNode(parent, vnode) {
        var mask = 0;
        var original = vnode.state;
        var stateResult, attrsResult;
        if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
            var result = callHook.call(vnode.state.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                mask = 1;
                stateResult = result;
            }
        }
        if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
            var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                // eslint-disable-next-line no-bitwise
                mask |= 2;
                attrsResult = result;
            }
        }
        checkState(vnode, original);
        var generation;
        // If we can, try to fast-path it and avoid all the overhead of awaiting
        if (!mask) {
            onremove(vnode);
            removeDOM(parent, vnode, generation);
        } else {
            generation = currentRender;
            for (var dom of domFor(vnode))delayedRemoval.set(dom, generation);
            if (stateResult != null) stateResult.finally(function() {
                // eslint-disable-next-line no-bitwise
                if (mask & 1) {
                    // eslint-disable-next-line no-bitwise
                    mask &= 2;
                    if (!mask) {
                        checkState(vnode, original);
                        onremove(vnode);
                        removeDOM(parent, vnode, generation);
                    }
                }
            });
            if (attrsResult != null) attrsResult.finally(function() {
                // eslint-disable-next-line no-bitwise
                if (mask & 2) {
                    // eslint-disable-next-line no-bitwise
                    mask &= 1;
                    if (!mask) {
                        checkState(vnode, original);
                        onremove(vnode);
                        removeDOM(parent, vnode, generation);
                    }
                }
            });
        }
    }
    function removeDOM(parent, vnode, generation) {
        if (vnode.dom == null) return;
        if (vnode.domSize == null) // don't allocate for the common case
        {
            if (delayedRemoval.get(vnode.dom) === generation) parent.removeChild(vnode.dom);
        } else for (var dom of domFor(vnode, {
            generation
        }))parent.removeChild(dom);
    }
    function onremove(vnode) {
        if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
        if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
        if (typeof vnode.tag !== "string") {
            if (vnode.instance != null) onremove(vnode.instance);
        } else {
            var children = vnode.children;
            if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null) onremove(child);
            }
        }
    }
    //attrs
    function setAttrs(vnode, attrs, ns) {
        // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
        //
        // Also, the DOM does things to inputs based on the value, so it needs set first.
        // See: https://github.com/MithrilJS/mithril.js/issues/2622
        if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type);
        var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file";
        for(var key in attrs)setAttr(vnode, key, null, attrs[key], ns, isFileInput);
    }
    function setAttr(vnode, key, old, value, ns, isFileInput) {
        if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object" || key === "type" && vnode.tag === "input") return;
        if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value);
        if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        else if (key === "style") updateStyle(vnode.dom, old, value);
        else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
                // Only do the coercion if we're actually going to check the value.
                /* eslint-disable no-implicit-coercion */ //setting input[value] to same value by typing on focused element moves cursor to end in Chrome
                //setting input[type=file][value] to same value causes an error to be generated if it's non-empty
                if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement())) return;
                //setting select[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return;
                //setting option[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return;
                //setting input[type=file][value] to different value is an error if it's non-empty
                // Not ideal, but it at least works around the most common source of uncaught exceptions for now.
                if (isFileInput && "" + value !== "") {
                    console.error("`value` is read-only on file inputs!");
                    return;
                }
            /* eslint-enable no-implicit-coercion */ }
            vnode.dom[key] = value;
        } else if (typeof value === "boolean") {
            if (value) vnode.dom.setAttribute(key, "");
            else vnode.dom.removeAttribute(key);
        } else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
    }
    function removeAttr(vnode, key, old, ns) {
        if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return;
        if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined);
        else if (key === "style") updateStyle(vnode.dom, old, null);
        else if (hasPropertyKey(vnode, key, ns) && key !== "className" && key !== "title" // creates "null" as title
         && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) vnode.dom[key] = null;
        else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
            if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
        }
    }
    function setLateSelectAttrs(vnode, attrs) {
        if ("value" in attrs) {
            if (attrs.value === null) {
                if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
            } else {
                var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
                ;
                if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) vnode.dom.value = normalized;
            }
        }
        if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
    }
    function updateAttrs(vnode, old, attrs, ns) {
        if (old && old === attrs) console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major");
        if (attrs != null) {
            // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
            //
            // Also, the DOM does things to inputs based on the value, so it needs set first.
            // See: https://github.com/MithrilJS/mithril.js/issues/2622
            if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type);
            var isFileInput = vnode.tag === "input" && attrs.type === "file";
            for(var key in attrs)setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput);
        }
        var val;
        if (old != null) {
            for(var key in old)if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) removeAttr(vnode, key, val, ns);
        }
    }
    function isFormAttribute(vnode, attr) {
        return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement;
    }
    function isLifecycleMethod(attr) {
        return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
    }
    function hasPropertyKey(vnode, key, ns) {
        // Filter out namespaced keys
        return ns === undefined && // If it's a custom element, just keep it.
        (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
        key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height" // && key !== "type"
        ) && key in vnode.dom;
    }
    //style
    var uppercaseRegex = /[A-Z]/g;
    function toLowerCase(capital) {
        return "-" + capital.toLowerCase();
    }
    function normalizeKey(key) {
        return key[0] === "-" && key[1] === "-" ? key : key === "cssFloat" ? "float" : key.replace(uppercaseRegex, toLowerCase);
    }
    function updateStyle(element, old, style) {
        if (old === style) ;
        else if (style == null) // New style is missing, just clear it.
        element.style = "";
        else if (typeof style !== "object") // New style is a string, let engine deal with patching.
        element.style = style;
        else if (old == null || typeof old !== "object") {
            // `old` is missing or a string, `style` is an object.
            element.style.cssText = "";
            // Add new style properties
            for(var key in style){
                var value = style[key];
                if (value != null) element.style.setProperty(normalizeKey(key), String(value));
            }
        } else {
            // Both old & new are (different) objects.
            // Update style properties that have changed
            for(var key in style){
                var value = style[key];
                if (value != null && (value = String(value)) !== String(old[key])) element.style.setProperty(normalizeKey(key), value);
            }
            // Remove style properties that no longer exist
            for(var key in old)if (old[key] != null && style[key] == null) element.style.removeProperty(normalizeKey(key));
        }
    }
    // Here's an explanation of how this works:
    // 1. The event names are always (by design) prefixed by `on`.
    // 2. The EventListener interface accepts either a function or an object
    //    with a `handleEvent` method.
    // 3. The object does not inherit from `Object.prototype`, to avoid
    //    any potential interference with that (e.g. setters).
    // 4. The event name is remapped to the handler before calling it.
    // 5. In function-based event handlers, `ev.target === this`. We replicate
    //    that below.
    // 6. In function-based event handlers, `return false` prevents the default
    //    action and stops event propagation. We replicate that below.
    function EventDict() {
        // Save this, so the current redraw is correctly tracked.
        this._ = currentRedraw;
    }
    EventDict.prototype = Object.create(null);
    EventDict.prototype.handleEvent = function(ev) {
        var handler = this["on" + ev.type];
        var result;
        if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
        else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
        if (this._ && ev.redraw !== false) (0, this._)();
        if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    //event
    function updateEvent(vnode, key, value) {
        if (vnode.events != null) {
            vnode.events._ = currentRedraw;
            if (vnode.events[key] === value) return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
                if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = value;
            } else {
                if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = undefined;
            }
        } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
        }
    }
    //lifecycle
    function initLifecycle(source, vnode, hooks) {
        if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
        if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
    }
    function updateLifecycle(source, vnode, hooks) {
        if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
    }
    function shouldNotUpdate(vnode, old) {
        do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
                var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
                var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            return false;
        }while (false); // eslint-disable-line no-constant-condition
        vnode.dom = old.dom;
        vnode.domSize = old.domSize;
        vnode.instance = old.instance;
        // One would think having the actual latest attributes would be ideal,
        // but it doesn't let us properly diff based on our current internal
        // representation. We have to save not only the old DOM info, but also
        // the attributes used to create it, as we diff *that*, not against the
        // DOM directly (with a few exceptions in `setAttr`). And, of course, we
        // need to save the children and text as they are conceptually not
        // unlike special "attributes" internally.
        vnode.attrs = old.attrs;
        vnode.children = old.children;
        vnode.text = old.text;
        return true;
    }
    var currentDOM;
    return function(dom, vnodes, redraw) {
        if (!dom) throw new TypeError("DOM element being rendered to does not exist.");
        if (currentDOM != null && dom.contains(currentDOM)) throw new TypeError("Node is currently being rendered to and thus is locked.");
        var prevRedraw = currentRedraw;
        var prevDOM = currentDOM;
        var hooks = [];
        var active = activeElement();
        var namespace = dom.namespaceURI;
        currentDOM = dom;
        currentRedraw = typeof redraw === "function" ? redraw : undefined;
        currentRender = {};
        try {
            // First time rendering into a node clears it out
            if (dom.vnodes == null) dom.textContent = "";
            vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [
                vnodes
            ]);
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
            dom.vnodes = vnodes;
            // `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
            if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus();
            for(var i = 0; i < hooks.length; i++)hooks[i]();
        } finally{
            currentRedraw = prevRedraw;
            currentDOM = prevDOM;
        }
    };
};

},{"2e3e0a3565a62107":"egGtB","4ce582185ead7f61":"bjZmw"}],"bjZmw":[function(require,module,exports) {
"use strict";
var delayedRemoval = new WeakMap;
function* domFor({ dom , domSize  }, { generation  } = {}) {
    if (dom != null) do {
        const { nextSibling  } = dom;
        if (delayedRemoval.get(dom) === generation) {
            yield dom;
            domSize--;
        }
        dom = nextSibling;
    }while (domSize);
}
module.exports = {
    delayedRemoval: delayedRemoval,
    domFor: domFor
};

},{}],"hNjwY":[function(require,module,exports) {
"use strict";
var Vnode = require("c44d302aacbac6a1");
module.exports = function(render, schedule, console) {
    var subscriptions = [];
    var pending = false;
    var offset = -1;
    function sync() {
        for(offset = 0; offset < subscriptions.length; offset += 2)try {
            render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw);
        } catch (e) {
            console.error(e);
        }
        offset = -1;
    }
    function redraw() {
        if (!pending) {
            pending = true;
            schedule(function() {
                pending = false;
                sync();
            });
        }
    }
    redraw.sync = sync;
    function mount(root, component) {
        if (component != null && component.view == null && typeof component !== "function") throw new TypeError("m.mount expects a component, not a vnode.");
        var index = subscriptions.indexOf(root);
        if (index >= 0) {
            subscriptions.splice(index, 2);
            if (index <= offset) offset -= 2;
            render(root, []);
        }
        if (component != null) {
            subscriptions.push(root, component);
            render(root, Vnode(component), redraw);
        }
    }
    return {
        mount: mount,
        redraw: redraw
    };
};

},{"c44d302aacbac6a1":"egGtB"}],"7XXSl":[function(require,module,exports) {
"use strict";
var buildPathname = require("f2fd7b06910588aa");
var hasOwn = require("bc11ccb9a74edcc9");
module.exports = function($window, oncompletion) {
    function PromiseProxy(executor) {
        return new Promise(executor);
    }
    function makeRequest(url, args) {
        return new Promise(function(resolve, reject) {
            url = buildPathname(url, args.params);
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
                aborted = true;
                abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
            if (assumeJSON && body != null && !hasHeader(args, "content-type")) xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) xhr.setRequestHeader("Accept", "application/json, text/*");
            if (args.withCredentials) xhr.withCredentials = args.withCredentials;
            if (args.timeout) xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for(var key in args.headers)if (hasOwn.call(args.headers, key)) xhr.setRequestHeader(key, args.headers[key]);
            xhr.onreadystatechange = function(ev) {
                // Don't throw errors on xhr.abort().
                if (aborted) return;
                if (ev.target.readyState === 4) try {
                    var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                    // When the response type isn't "" or "text",
                    // `xhr.responseText` is the wrong thing to use.
                    // Browsers do the right thing and throw here, and we
                    // should honor that and do the right thing by
                    // preferring `xhr.response` where possible/practical.
                    var response = ev.target.response, message;
                    if (responseType === "json") {
                        // For IE and Edge, which don't implement
                        // `responseType: "json"`.
                        if (!ev.target.responseType && typeof args.extract !== "function") // Handle no-content which will not parse.
                        try {
                            response = JSON.parse(ev.target.responseText);
                        } catch (e) {
                            response = null;
                        }
                    } else if (!responseType || responseType === "text") // Only use this default if it's text. If a parsed
                    // document is needed on old IE and friends (all
                    // unsupported), the user should use a custom
                    // `config` instead. They're already using this at
                    // their own risk.
                    {
                        if (response == null) response = ev.target.responseText;
                    }
                    if (typeof args.extract === "function") {
                        response = args.extract(ev.target, args);
                        success = true;
                    } else if (typeof args.deserialize === "function") response = args.deserialize(response);
                    if (success) {
                        if (typeof args.type === "function") {
                            if (Array.isArray(response)) for(var i = 0; i < response.length; i++)response[i] = new args.type(response[i]);
                            else response = new args.type(response);
                        }
                        resolve(response);
                    } else {
                        var completeErrorResponse = function() {
                            try {
                                message = ev.target.responseText;
                            } catch (e) {
                                message = response;
                            }
                            var error = new Error(message);
                            error.code = ev.target.status;
                            error.response = response;
                            reject(error);
                        };
                        if (xhr.status === 0) // Use setTimeout to push this code block onto the event queue
                        // This allows `xhr.ontimeout` to run in the case that there is a timeout
                        // Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
                        // as `xhr.onreadystatechange` will run before it
                        setTimeout(function() {
                            if (isTimeout) return;
                            completeErrorResponse();
                        });
                        else completeErrorResponse();
                    }
                } catch (e) {
                    reject(e);
                }
            };
            xhr.ontimeout = function(ev) {
                isTimeout = true;
                var error = new Error("Request timed out");
                error.code = ev.target.status;
                reject(error);
            };
            if (typeof args.config === "function") {
                xhr = args.config(xhr, args, url) || xhr;
                // Propagate the `abort` to any replacement XHR as well.
                if (xhr !== original) {
                    replacedAbort = xhr.abort;
                    xhr.abort = function() {
                        aborted = true;
                        replacedAbort.call(this);
                    };
                }
            }
            if (body == null) xhr.send();
            else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body);
            else xhr.send(JSON.stringify(body));
        });
    }
    // In case the global Promise is some userland library's where they rely on
    // `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
    // similar. Let's *not* break them.
    PromiseProxy.prototype = Promise.prototype;
    PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
    ;
    function hasHeader(args, name) {
        for(var key in args.headers){
            if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true;
        }
        return false;
    }
    return {
        request: function(url, args) {
            if (typeof url !== "string") {
                args = url;
                url = url.url;
            } else if (args == null) args = {};
            var promise = makeRequest(url, args);
            if (args.background === true) return promise;
            var count = 0;
            function complete() {
                if (--count === 0 && typeof oncompletion === "function") oncompletion();
            }
            return wrap(promise);
            function wrap(promise) {
                var then = promise.then;
                // Set the constructor, so engines know to not await or resolve
                // this as a native promise. At the time of writing, this is
                // only necessary for V8, but their behavior is the correct
                // behavior per spec. See this spec issue for more details:
                // https://github.com/tc39/ecma262/issues/1577. Also, see the
                // corresponding comment in `request/tests/test-request.js` for
                // a bit more background on the issue at hand.
                promise.constructor = PromiseProxy;
                promise.then = function() {
                    count++;
                    var next = then.apply(promise, arguments);
                    next.then(complete, function(e) {
                        complete();
                        if (count === 0) throw e;
                    });
                    return wrap(next);
                };
                return promise;
            }
        }
    };
};

},{"f2fd7b06910588aa":"lXNwO","bc11ccb9a74edcc9":"94qwS"}],"lXNwO":[function(require,module,exports) {
"use strict";
var buildQueryString = require("c3fc1a714e955903");
var assign = require("f5b747dd088b8133");
// Returns `path` from `template` + `params`
module.exports = function(template, params) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(template)) throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
    if (params == null) return template;
    var queryIndex = template.indexOf("?");
    var hashIndex = template.indexOf("#");
    var queryEnd = hashIndex < 0 ? template.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = template.slice(0, pathEnd);
    var query = {};
    assign(query, params);
    var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
        delete query[key];
        // If no such parameter exists, don't interpolate it.
        if (params[key] == null) return m;
        // Escape normal parameters, but not variadic ones.
        return variadic ? params[key] : encodeURIComponent(String(params[key]));
    });
    // In case the template substitution adds new query/hash parameters.
    var newQueryIndex = resolved.indexOf("?");
    var newHashIndex = resolved.indexOf("#");
    var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
    var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
    var result = resolved.slice(0, newPathEnd);
    if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
    if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
    var querystring = buildQueryString(query);
    if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
    if (hashIndex >= 0) result += template.slice(hashIndex);
    if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
    return result;
};

},{"c3fc1a714e955903":"dJUE4","f5b747dd088b8133":"3fHzt"}],"dJUE4":[function(require,module,exports) {
"use strict";
module.exports = function(object) {
    if (Object.prototype.toString.call(object) !== "[object Object]") return "";
    var args = [];
    for(var key in object)destructure(key, object[key]);
    return args.join("&");
    function destructure(key, value) {
        if (Array.isArray(value)) for(var i = 0; i < value.length; i++)destructure(key + "[" + i + "]", value[i]);
        else if (Object.prototype.toString.call(value) === "[object Object]") for(var i in value)destructure(key + "[" + i + "]", value[i]);
        else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
    }
};

},{}],"3fHzt":[function(require,module,exports) {
// This exists so I'm only saving it once.
"use strict";
var hasOwn = require("76694360149c1b46");
module.exports = Object.assign || function(target, source) {
    for(var key in source)if (hasOwn.call(source, key)) target[key] = source[key];
};

},{"76694360149c1b46":"94qwS"}],"8HVTZ":[function(require,module,exports) {
"use strict";
var mountRedraw = require("176e576aaa7158da");
module.exports = require("ce7e925b5dfe8958")(typeof window !== "undefined" ? window : null, mountRedraw);

},{"176e576aaa7158da":"dvp1x","ce7e925b5dfe8958":"4yJlG"}],"4yJlG":[function(require,module,exports) {
"use strict";
var Vnode = require("3a975382ff6dbb82");
var m = require("ccf5ebf7d122217b");
var buildPathname = require("46ec3080a65dc32d");
var parsePathname = require("85f31281c340b443");
var compileTemplate = require("e2c0041dbee96226");
var assign = require("5591ebd279426b51");
var censor = require("8de927289dc28d9c");
var sentinel = {};
function decodeURIComponentSave(component) {
    try {
        return decodeURIComponent(component);
    } catch (e) {
        return component;
    }
}
module.exports = function($window, mountRedraw) {
    var callAsync = $window == null ? null : typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout;
    var p = Promise.resolve();
    var scheduled = false;
    // state === 0: init
    // state === 1: scheduled
    // state === 2: done
    var ready = false;
    var state = 0;
    var compiled, fallbackRoute;
    var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
    var RouterRoot = {
        onbeforeupdate: function() {
            state = state ? 2 : 1;
            return !(!state || sentinel === currentResolver);
        },
        onremove: function() {
            $window.removeEventListener("popstate", fireAsync, false);
            $window.removeEventListener("hashchange", resolveRoute, false);
        },
        view: function() {
            if (!state || sentinel === currentResolver) return;
            // Wrap in a fragment to preserve existing key semantics
            var vnode = [
                Vnode(component, attrs.key, attrs)
            ];
            if (currentResolver) vnode = currentResolver.render(vnode[0]);
            return vnode;
        }
    };
    var SKIP = route.SKIP = {};
    function resolveRoute() {
        scheduled = false;
        // Consider the pathname holistically. The prefix might even be invalid,
        // but that's not our problem.
        var prefix = $window.location.hash;
        if (route.prefix[0] !== "#") {
            prefix = $window.location.search + prefix;
            if (route.prefix[0] !== "?") {
                prefix = $window.location.pathname + prefix;
                if (prefix[0] !== "/") prefix = "/" + prefix;
            }
        }
        // This seemingly useless `.concat()` speeds up the tests quite a bit,
        // since the representation is consistently a relatively poorly
        // optimized cons string.
        var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave).slice(route.prefix.length);
        var data = parsePathname(path);
        assign(data.params, $window.history.state);
        function reject(e) {
            console.error(e);
            setPath(fallbackRoute, null, {
                replace: true
            });
        }
        loop(0);
        function loop(i) {
            // state === 0: init
            // state === 1: scheduled
            // state === 2: done
            for(; i < compiled.length; i++)if (compiled[i].check(data)) {
                var payload = compiled[i].component;
                var matchedRoute = compiled[i].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                    if (update !== lastUpdate) return;
                    if (comp === SKIP) return loop(i + 1);
                    component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                    attrs = data.params, currentPath = path, lastUpdate = null;
                    currentResolver = payload.render ? payload : null;
                    if (state === 2) mountRedraw.redraw();
                    else {
                        state = 2;
                        mountRedraw.redraw.sync();
                    }
                };
                // There's no understating how much I *wish* I could
                // use `async`/`await` here...
                if (payload.view || typeof payload === "function") {
                    payload = {};
                    update(localComp);
                } else if (payload.onmatch) p.then(function() {
                    return payload.onmatch(data.params, path, matchedRoute);
                }).then(update, path === fallbackRoute ? null : reject);
                else update("div");
                return;
            }
            if (path === fallbackRoute) throw new Error("Could not resolve default route " + fallbackRoute + ".");
            setPath(fallbackRoute, null, {
                replace: true
            });
        }
    }
    // Set it unconditionally so `m.route.set` and `m.route.Link` both work,
    // even if neither `pushState` nor `hashchange` are supported. It's
    // cleared if `hashchange` is used, since that makes it automatically
    // async.
    function fireAsync() {
        if (!scheduled) {
            scheduled = true;
            // TODO: just do `mountRedraw.redraw()` here and elide the timer
            // dependency. Note that this will muck with tests a *lot*, so it's
            // not as easy of a change as it sounds.
            callAsync(resolveRoute);
        }
    }
    function setPath(path, data, options) {
        path = buildPathname(path, data);
        if (ready) {
            fireAsync();
            var state = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path);
            else $window.history.pushState(state, title, route.prefix + path);
        } else $window.location.href = route.prefix + path;
    }
    function route(root, defaultRoute, routes) {
        if (!root) throw new TypeError("DOM element being rendered to does not exist.");
        compiled = Object.keys(routes).map(function(route) {
            if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route)) throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
            return {
                route: route,
                component: routes[route],
                check: compileTemplate(route)
            };
        });
        fallbackRoute = defaultRoute;
        if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
                return i.check(defaultData);
            })) throw new ReferenceError("Default route doesn't match any known routes.");
        }
        if (typeof $window.history.pushState === "function") $window.addEventListener("popstate", fireAsync, false);
        else if (route.prefix[0] === "#") $window.addEventListener("hashchange", resolveRoute, false);
        ready = true;
        mountRedraw.mount(root, RouterRoot);
        resolveRoute();
    }
    route.set = function(path, data, options) {
        if (lastUpdate != null) {
            options = options || {};
            options.replace = true;
        }
        lastUpdate = null;
        setPath(path, data, options);
    };
    route.get = function() {
        return currentPath;
    };
    route.prefix = "#!";
    route.Link = {
        view: function(vnode) {
            // Omit the used parameters from the rendered element - they are
            // internal. Also, censor the various lifecycle methods.
            //
            // We don't strip the other parameters because for convenience we
            // let them be specified in the selector as well.
            var child = m(vnode.attrs.selector || "a", censor(vnode.attrs, [
                "options",
                "params",
                "selector",
                "onclick"
            ]), vnode.children);
            var options, onclick, href;
            // Let's provide a *right* way to disable a route link, rather than
            // letting people screw up accessibility on accident.
            //
            // The attribute is coerced so users don't get surprised over
            // `disabled: 0` resulting in a button that's somehow routable
            // despite being visibly disabled.
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
                child.attrs.href = null;
                child.attrs["aria-disabled"] = "true";
            // If you *really* do want add `onclick` on a disabled link, use
            // an `oncreate` hook to add it.
            } else {
                options = vnode.attrs.options;
                onclick = vnode.attrs.onclick;
                // Easier to build it now to keep it isomorphic.
                href = buildPathname(child.attrs.href, vnode.attrs.params);
                child.attrs.href = route.prefix + href;
                child.attrs.onclick = function(e) {
                    var result;
                    if (typeof onclick === "function") result = onclick.call(e.currentTarget, e);
                    else if (onclick == null || typeof onclick !== "object") ;
                    else if (typeof onclick.handleEvent === "function") onclick.handleEvent(e);
                    // Adapted from React Router's implementation:
                    // https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
                    //
                    // Try to be flexible and intuitive in how we handle links.
                    // Fun fact: links aren't as obvious to get right as you
                    // would expect. There's a lot more valid ways to click a
                    // link than this, and one might want to not simply click a
                    // link, but right click or command-click it to copy the
                    // link target, etc. Nope, this isn't just for blind people.
                    if (// Skip if `onclick` prevented default
                    result !== false && !e.defaultPrevented && // Ignore everything but left clicks
                    (e.button === 0 || e.which === 0 || e.which === 1) && // Let the browser handle `target=_blank`, etc.
                    (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        e.redraw = false;
                        route.set(href, null, options);
                    }
                };
            }
            return child;
        }
    };
    route.param = function(key) {
        return attrs && key != null ? attrs[key] : attrs;
    };
    return route;
};

},{"3a975382ff6dbb82":"egGtB","ccf5ebf7d122217b":"5oIm8","46ec3080a65dc32d":"lXNwO","85f31281c340b443":"jciPb","e2c0041dbee96226":"dZhtQ","5591ebd279426b51":"3fHzt","8de927289dc28d9c":"9jEja"}],"jciPb":[function(require,module,exports) {
"use strict";
var parseQueryString = require("d545de51484214d8");
// Returns `{path, params}` from `url`
module.exports = function(url) {
    var queryIndex = url.indexOf("?");
    var hashIndex = url.indexOf("#");
    var queryEnd = hashIndex < 0 ? url.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
    if (!path) path = "/";
    else if (path[0] !== "/") path = "/" + path;
    return {
        path: path,
        params: queryIndex < 0 ? {} : parseQueryString(url.slice(queryIndex + 1, queryEnd))
    };
};

},{"d545de51484214d8":"1Bqsf"}],"1Bqsf":[function(require,module,exports) {
"use strict";
function decodeURIComponentSave(str) {
    try {
        return decodeURIComponent(str);
    } catch (err) {
        return str;
    }
}
module.exports = function(string) {
    if (string === "" || string == null) return {};
    if (string.charAt(0) === "?") string = string.slice(1);
    var entries = string.split("&"), counters = {}, data = {};
    for(var i = 0; i < entries.length; i++){
        var entry = entries[i].split("=");
        var key = decodeURIComponentSave(entry[0]);
        var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : "";
        if (value === "true") value = true;
        else if (value === "false") value = false;
        var levels = key.split(/\]\[?|\[/);
        var cursor = data;
        if (key.indexOf("[") > -1) levels.pop();
        for(var j = 0; j < levels.length; j++){
            var level = levels[j], nextLevel = levels[j + 1];
            var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
                var key = levels.slice(0, j).join();
                if (counters[key] == null) counters[key] = Array.isArray(cursor) ? cursor.length : 0;
                level = counters[key]++;
            } else if (level === "__proto__") break;
            if (j === levels.length - 1) cursor[level] = value;
            else {
                // Read own properties exclusively to disallow indirect
                // prototype pollution
                var desc = Object.getOwnPropertyDescriptor(cursor, level);
                if (desc != null) desc = desc.value;
                if (desc == null) cursor[level] = desc = isNumber ? [] : {};
                cursor = desc;
            }
        }
    }
    return data;
};

},{}],"dZhtQ":[function(require,module,exports) {
"use strict";
var parsePathname = require("edea46a9a5a0e2b8");
// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
    var templateData = parsePathname(template);
    var templateKeys = Object.keys(templateData.params);
    var keys = [];
    var regexp = new RegExp("^" + templateData.path.replace(// I escape literal text so people can use things like `:file.:ext` or
    // `:lang-:locale` in routes. This is all merged into one pass so I
    // don't also accidentally escape `-` and make it harder to detect it to
    // ban it from template parameters.
    /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m, key, extra) {
        if (key == null) return "\\" + m;
        keys.push({
            k: key,
            r: extra === "..."
        });
        if (extra === "...") return "(.*)";
        if (extra === ".") return "([^/]+)\\.";
        return "([^/]+)" + (extra || "");
    }) + "$");
    return function(data) {
        // First, check the params. Usually, there isn't any, and it's just
        // checking a static set.
        for(var i = 0; i < templateKeys.length; i++){
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;
        }
        // If no interpolations exist, let's skip all the ceremony
        if (!keys.length) return regexp.test(data.path);
        var values = regexp.exec(data.path);
        if (values == null) return false;
        for(var i = 0; i < keys.length; i++)data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
        return true;
    };
};

},{"edea46a9a5a0e2b8":"jciPb"}],"9jEja":[function(require,module,exports) {
"use strict";
// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```
var hasOwn = require("ced0e793f95e8e94");
// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().
var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
module.exports = function(attrs, extras) {
    var result = {};
    if (extras != null) {
        for(var key in attrs)if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) result[key] = attrs[key];
    } else {
        for(var key in attrs)if (hasOwn.call(attrs, key) && !magic.test(key)) result[key] = attrs[key];
    }
    return result;
};

},{"ced0e793f95e8e94":"94qwS"}],"6HMOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "load", ()=>load);
parcelHelpers.export(exports, "addPosition", ()=>addPosition);
parcelHelpers.export(exports, "editPosition", ()=>editPosition);
parcelHelpers.export(exports, "delPosition", ()=>delPosition);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
class iDB {
    constructor(request, objArray, version = 1){
        this.request = request;
        this.objectArray = objArray;
        this.version = version;
    }
    getRequest() {
        return this.request;
    }
    getObjectArray() {
        return this.objectArray;
    }
    query(storeName, method, object) {
        const store = this.request;
        const request = window.indexedDB.open(store, this.version);
        const objectArray = this.getObjectArray();
        return new Promise((resolve, reject)=>{
            // create variables to hold reference to the database, transaction (tx), and object store
            let db, tx, store;
            // if version has changed (or if this is the first time using the database)
            // run this method and create the object stores
            request.onupgradeneeded = (e)=>{
                const db = request.result;
                objectArray.forEach((object)=>{
                    db.createObjectStore(object.name, {
                        keyPath: object.id,
                        autoIncrement: object.increment
                    });
                });
            };
            // handle any errors with connecting
            request.onerror = (e)=>console.log("error: ", e);
            // on database open success
            request.onsuccess = (e)=>{
                // save a reference of the database to the `db` variable
                db = request.result;
                // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
                tx = db.transaction(storeName, "readwrite");
                // save a reference to that object store
                store = tx.objectStore(storeName);
                // if there's any errors, let us know
                db.onerror = (e)=>console.log("error: ", e);
                switch(method){
                    case "put":
                        store.put(object);
                        resolve(object);
                        break;
                    case "get":
                        const all = store.getAll();
                        all.onsuccess = ()=>resolve(all.result);
                        break;
                    case "delete":
                        store.delete(object.id);
                        break;
                    default:
                        console.log("invalid method");
                        break;
                }
                // when the transaction is complete, close the connection
                tx.oncomplete = ()=>db.close();
            };
        });
    }
}
const db = new iDB("tradeStuff", [
    {
        id: "id",
        name: "position",
        increment: true
    }
], 1);
const state = {
    position: [
        {
            id: 0,
            eDate: null,
            xDate: null,
            coin: "",
            trades: null,
            qty: 0,
            entry: 0,
            exit: 0,
            stop: 0,
            pnl: 0
        }
    ],
    addP: {
        id: null,
        eDate: null,
        xDate: null,
        coin: null,
        chart: null,
        trades: null
    },
    calc: {
        risk: 0,
        entry: 0,
        stop: 0,
        tp: 0,
        calcs: 0
    },
    bList: [
        {
            id: 0
        }
    ],
    sList: [
        {
            id: 0
        }
    ],
    profit: 0,
    break: 0,
    spent: 0
};
function getStats(pos, x) {
    let trades, b = 0, s = 0, bc = 0, sc = 0;
    if (pos.trades !== null) trades = pos.trades.split("\n");
    for(let i = 0; i < trades.length; i++){
        const t = trades[i].split(",");
        let bs = t[0], qty = parseFloat(t[1]), p = parseFloat(t[2]);
        if (bs === "b") {
            b = b + qty;
            bc = bc + qty * p;
        }
        if (bs === "s") {
            s = s + qty;
            sc = sc + qty * p;
        }
    }
    state.position[x].qty = b;
    state.position[x].entry = (bc / b).toFixed(2);
    state.position[x].exit = (sc / s).toFixed(2);
    state.position[x].pnl = "$" + (sc - bc).toFixed(2) + " (" + ((sc - bc) / bc * 100).toFixed(2) + "%)";
}
async function load() {
    //const [products, setProducts] = useState([]);
    state.position = await db.query("position", "get");
    for(let i = 0; i < state.position.length; i++)getStats(state.position[i], i);
    console.log("state => ", state.position);
    (0, _mithrilDefault.default).redraw();
}
async function addPosition(obj) {
    await db.query("position", "put", obj).then(load());
}
async function editPosition(obj) {
    state.addP = obj;
    console.log(state.addP);
    (0, _mithrilDefault.default).redraw();
}
async function delPosition(i) {
    await db.query("position", "delete", i).then(load());
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","mithril":"05eVJ"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a48mX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _state = require("../db/state");
/*{
	id: 0,
	trades: [],
	coinpair: '',
	qty: 0,
	entry: 0,
	exit: 0,
	stop: 0,
	pnl: 0
}*/ exports.default = {
    view: (x)=>{
        return (0, _mithrilDefault.default)(".c -4of12 trade", [
            (0, _mithrilDefault.default)("h5", (0, _mithrilDefault.default)("img", {
                src: "./gui/trade.png"
            }), "add position"),
            (0, _mithrilDefault.default)("ul", [
                (0, _mithrilDefault.default)("li", {
                    style: {
                        alignItems: "center"
                    }
                }, [
                    (0, _mithrilDefault.default)("span", "coin - ", [
                        (0, _mithrilDefault.default)('input[type="text"] .d', {
                            oninput: (e)=>(0, _state.state).addP.coin = e.target.value.toUpperCase(),
                            value: (0, _state.state).addP.coin
                        }),
                        (0, _mithrilDefault.default)("span", " - "),
                        (0, _mithrilDefault.default)('input[type="text"] .d', {
                            oninput: (e)=>(0, _state.state).addP.chart = e.target.value,
                            value: (0, _state.state).addP.chart
                        }),
                        (0, _mithrilDefault.default)("span", " - chart")
                    ])
                ]),
                (0, _mithrilDefault.default)("li", {
                    style: {
                        alignItems: "center"
                    }
                }, [
                    (0, _mithrilDefault.default)("span", "entry - ", [
                        (0, _mithrilDefault.default)('input[type="date"] .d', {
                            oninput: (e)=>(0, _state.state).addP.eDate = e.target.value,
                            value: (0, _state.state).addP.eDate
                        }),
                        (0, _mithrilDefault.default)("span", " - "),
                        (0, _mithrilDefault.default)('input[type="date"] .d', {
                            oninput: (e)=>(0, _state.state).addP.xDate = e.target.value,
                            value: (0, _state.state).addP.xDate
                        }),
                        (0, _mithrilDefault.default)("span", " - exit")
                    ])
                ])
            ]),
            (0, _mithrilDefault.default)("hr"),
            (0, _mithrilDefault.default)("ul", [
                (0, _mithrilDefault.default)("li", {
                    style: {
                        alignItems: "center"
                    }
                }, "- enter trade info -", [
                    (0, _mithrilDefault.default)("br"),
                    (0, _mithrilDefault.default)("span", {
                        style: {
                            color: "rgba(21, 34, 55, 0.89)",
                            fontSize: "0.8em",
                            textShadow: "none"
                        }
                    }, "(format: b or s,qty,cost) - (example: b,69,420)")
                ])
            ]),
            (0, _mithrilDefault.default)("textarea.d", {
                style: {
                    boxSizing: "border-box",
                    height: "83px",
                    width: "calc(100% - 6px)",
                    margin: "3px"
                },
                oninput: (e)=>(0, _state.state).addP.trades = e.target.value,
                value: (0, _state.state).addP.trades
            }),
            (0, _mithrilDefault.default)("br"),
            (0, _mithrilDefault.default)("button.d", {
                onclick: ()=>{
                    if ((0, _state.state).addP.id !== null) {
                        console.log("edit new position");
                        (0, _state.addPosition)({
                            id: (0, _state.state).addP.id,
                            eDate: (0, _state.state).addP.eDate,
                            xDate: (0, _state.state).addP.xDate,
                            coin: (0, _state.state).addP.coin,
                            chart: (0, _state.state).addP.chart,
                            trades: (0, _state.state).addP.trades
                        });
                        Object.keys((0, _state.state).addP).forEach((k)=>(0, _state.state).addP[k] = null);
                    } else {
                        console.log("add new position");
                        (0, _state.addPosition)({
                            eDate: (0, _state.state).addP.eDate,
                            xDate: (0, _state.state).addP.xDate,
                            coin: (0, _state.state).addP.coin,
                            chart: (0, _state.state).addP.chart,
                            trades: (0, _state.state).addP.trades
                        });
                        Object.keys((0, _state.state).addP).forEach((k)=>(0, _state.state).addP[k] = null);
                    }
                }
            }, "add position [" + (0, _state.state).addP.id + "]")
        ]);
    }
};

},{"mithril":"05eVJ","../db/state":"6HMOL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cgmCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _state = require("../db/state");
function calcIt(db) {
    if (db.entry > db.stop) db.calcs = db.risk / (db.entry - db.stop);
    else db.calcs = db.risk / (db.stop - db.entry);
}
exports.default = {
    view: (x)=>{
        return (0, _mithrilDefault.default)(".c -3of12 calc", [
            (0, _mithrilDefault.default)("h5", (0, _mithrilDefault.default)("img", {
                src: "./gui/calc.png"
            }), "position size"),
            (0, _mithrilDefault.default)(".note tc", "$ risk / (entry - stop) = coins"),
            (0, _mithrilDefault.default)("ul", [
                (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "$ risk - ", (0, _mithrilDefault.default)('input[type="text"] .g', {
                    oninput: (e)=>{
                        (0, _state.state).calc.risk = e.target.value;
                        calcIt((0, _state.state).calc);
                    },
                    value: (0, _state.state).calc.risk
                }))),
                (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "entry - ", (0, _mithrilDefault.default)('input[type="text"] .g', {
                    oninput: (e)=>{
                        (0, _state.state).calc.entry = e.target.value;
                        calcIt((0, _state.state).calc);
                    },
                    value: (0, _state.state).calc.entry
                }))),
                (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "stop - ", (0, _mithrilDefault.default)('input[type="text"] .g', {
                    oninput: (e)=>{
                        (0, _state.state).calc.stop = e.target.value;
                        calcIt((0, _state.state).calc);
                    },
                    value: (0, _state.state).calc.stop
                }))),
                (0, _mithrilDefault.default)("li", (0, _mithrilDefault.default)("span", "tp - ", (0, _mithrilDefault.default)('input[type="text"] .g', {
                    oninput: (e)=>{
                        (0, _state.state).calc.tp = e.target.value;
                        calcIt((0, _state.state).calc);
                    },
                    value: (0, _state.state).calc.tp
                })))
            ]),
            (0, _mithrilDefault.default)(".note tc", "$" + (0, _state.state).calc.calcs)
        ]);
    }
};

},{"mithril":"05eVJ","../db/state":"6HMOL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8EyXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chart", ()=>chart);
parcelHelpers.export(exports, "pos", ()=>pos);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _state = require("../db/state");
const chart = {
    view: (v)=>(0, _mithrilDefault.default)(".chart", (0, _mithrilDefault.default)("img", {
            src: (0, _state.state).chart,
            onclick: ()=>(0, _state.state).chart = null
        }))
};
const pos = {
    view: (v)=>(0, _mithrilDefault.default)(".grd -middle -center", {
            style: {
                width: "100%"
            }
        }, [
            (0, _mithrilDefault.default)(".c -12of12 info", (0, _mithrilDefault.default)(".grd -middle -center head", [
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "ID"),
                (0, _mithrilDefault.default)(".c -2of12 tc rb", "DATE"),
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "COIN"),
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "QTY"),
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "ENTRY"),
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "EXIT"),
                (0, _mithrilDefault.default)(".c -1of12 tc rb", "STOP"),
                (0, _mithrilDefault.default)(".c -2of12 tc rb", "PnL"),
                (0, _mithrilDefault.default)(".c -2of12 tc", "CHART"),
                (0, _mithrilDefault.default)(".c -fill tc")
            ]), (0, _state.state).position.length < 1 && (0, _mithrilDefault.default)(".tc", "emtpy"), (0, _state.state).position.length > 0 && (0, _mithrilDefault.default)(".c -12of12", (0, _state.state).position.map((x)=>(0, _mithrilDefault.default)(".grd -middle -center head", [
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.id),
                    (0, _mithrilDefault.default)(".c -1of12 tc", x.eDate),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.xDate),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.coin),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.qty),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.entry),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.exit),
                    (0, _mithrilDefault.default)(".c -1of12 tc rbl", x.stop),
                    (0, _mithrilDefault.default)(".c -2of12 tc rbl", x.pnl),
                    (0, _mithrilDefault.default)(".c -2of12 tc hi", (0, _mithrilDefault.default)("img", {
                        src: x.chart,
                        style: {
                            height: "24px",
                            margin: "0"
                        },
                        onclick: ()=>(0, _state.state).chart = x.chart
                    })),
                    (0, _mithrilDefault.default)(".c -fill hi", [
                        (0, _mithrilDefault.default)("img", {
                            src: "./gui/edit.png",
                            style: {
                                position: "relative",
                                margin: "0",
                                left: "8px",
                                height: "24px",
                                cursor: "pointer"
                            },
                            onclick: ()=>(0, _state.editPosition)({
                                    id: x.id,
                                    eDate: x.eDate,
                                    xDate: x.xDate,
                                    coin: x.coin,
                                    chart: x.chart,
                                    trades: x.trades
                                })
                        }),
                        (0, _mithrilDefault.default)("img", {
                            src: "./gui/delete.png",
                            style: {
                                position: "relative",
                                margin: "-31px 24px 24px 31px",
                                left: "8px",
                                height: "24px",
                                cursor: "pointer"
                            },
                            onclick: ()=>(0, _state.delPosition)({
                                    id: x.id
                                })
                        })
                    ])
                ]))))
        ])
};

},{"../db/state":"6HMOL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","mithril":"05eVJ"}]},["4zjAY","hXVIw"], "hXVIw", "parcelRequirebf57")

