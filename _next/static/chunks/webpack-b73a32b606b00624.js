! function() {
  "use strict";
  var e, t, n, r, f, a, c, o, u, i, d, s, b = {},
    l = {};

  function p(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var n = l[e] = {
        exports: {}
      },
      r = !0;
    try {
      b[e].call(n.exports, n, n.exports, p), r = !1
    } finally {
      r && delete l[e]
    }
    return n.exports
  }
  p.m = b, e = [], p.O = function(t, n, r, f) {
    if (n) {
      f = f || 0;
      for (var a = e.length; a > 0 && e[a - 1][2] > f; a--) e[a] = e[a - 1];
      e[a] = [n, r, f];
      return
    }
    for (var c = 1 / 0, a = 0; a < e.length; a++) {
      for (var n = e[a][0], r = e[a][1], f = e[a][2], o = !0, u = 0; u < n.length; u++) c >= f && Object.keys(p.O).every(function(e) {
        return p.O[e](n[u])
      }) ? n.splice(u--, 1) : (o = !1, f < c && (c = f));
      if (o) {
        e.splice(a--, 1);
        var i = r();
        void 0 !== i && (t = i)
      }
    }
    return t
  }, p.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return p.d(t, {
      a: t
    }), t
  }, n = Object.getPrototypeOf ? function(e) {
    return Object.getPrototypeOf(e)
  } : function(e) {
    return e.__proto__
  }, p.t = function(e, r) {
    if (1 & r && (e = this(e)), 8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then)) return e;
    var f = Object.create(null);
    p.r(f);
    var a = {};
    t = t || [null, n({}), n([]), n(n)];
    for (var c = 2 & r && e;
      "object" == typeof c && !~t.indexOf(c); c = n(c)) Object.getOwnPropertyNames(c).forEach(function(t) {
      a[t] = function() {
        return e[t]
      }
    });
    return a.default = function() {
      return e
    }, p.d(f, a), f
  }, p.d = function(e, t) {
    for (var n in t) p.o(t, n) && !p.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    })
  }, p.f = {}, p.e = function(e) {
    return Promise.all(Object.keys(p.f).reduce(function(t, n) {
      return p.f[n](e, t), t
    }, []))
  }, p.u = function(e) {
    return 1664 === e ? "static/chunks/1664-f8b91051938f8245.js" : 5675 === e ? "static/chunks/5675-dac579d7988115a4.js" : 9220 === e ? "static/chunks/9220-aed94110747431fb.js" : 2368 === e ? "static/chunks/2368-ff9fa32cd1e026cb.js" : 8173 === e ? "static/chunks/8173-428e071127ffd526.js" : 6639 === e ? "static/chunks/6639-866ab9c3155dc7fa.js" : 228 === e ? "static/chunks/228-259c4b622d795c95.js" : 3791 === e ? "static/chunks/3791-a786b6844f500910.js" : "static/chunks/" + e + "." + ({
      38: "12738f7e84fcbaa2",
      732: "c674fc756eb8b9d9",
      1179: "e1407537144f0dc4",
      1197: "d0c419383da0332c",
      1323: "84e55fd2797ceab6",
      1707: "c25cddffe25559f3",
      1742: "7ef3f51043245a30",
      1897: "8e6a9c9ae55b02c7",
      2202: "931cc10316e354d5",
      2601: "97cf6eca1d00d59e",
      2722: "8055465ae7f0d6ae",
      3144: "104c6de84458da67",
      3174: "7aaaff4759ed5a3b",
      3303: "e22db792ef71cdd4",
      3675: "a849017bc8ad63dd",
      4093: "51e4edc4528624cc",
      4310: "91b160fc88cb7091",
      4492: "f54b55aa23e61818",
      4532: "f1a67ca7de275d28",
      4618: "8b7c4ff9dde4a909",
      4897: "69c489f8d337bd13",
      5265: "5b4d05afbc995216",
      5314: "fc610fa30b4b42fc",
      5331: "26e9d0957f331dee",
      5353: "dea325239a805685",
      5436: "b540dabc66f6229f",
      5795: "89b30fd8bd2d29ed",
      5844: "4b416a15b8dae41e",
      5955: "2804141c6310b3f6",
      6145: "c289ab5a0432c34c",
      6150: "1a191dbedfc0ce54",
      6229: "0316804a89dcf6e2",
      6866: "272c97d047c886bf",
      7057: "e45034e1c423c9ee",
      7161: "28d8b69a65c7ba7c",
      7166: "28b8efd75596d1f8",
      7642: "0b2e92e38ad08637",
      7973: "82adfeb6e1f0be4d",
      8834: "524da5a93556b97e",
      8896: "da6ea8d9e96b7715",
      9508: "53f6f3220cbc5fcb"
    })[e] + ".js"
  }, p.miniCssF = function(e) {
    return "static/css/" + ({
      422: "829450247328fdbb",
      827: "829450247328fdbb",
      994: "f6fd1a21d1794308",
      2202: "ec69a859c4fcca82",
      2523: "639caa0998d3bf12",
      2713: "829450247328fdbb",
      2888: "93460d62d7a2e94e",
      4310: "639caa0998d3bf12",
      4897: "77da82b959f6b9ac",
      5513: "89dd4ce4d099d5e8",
      5593: "829450247328fdbb",
      6696: "829450247328fdbb",
      6993: "829450247328fdbb",
      7057: "19223e2af202d02a",
      7368: "f6fd1a21d1794308",
      8247: "829450247328fdbb",
      8276: "1e60ca7d8a037c4c",
      8705: "829450247328fdbb",
      8896: "b1334fb132bc48b2"
    })[e] + ".css"
  }, p.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), p.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r = {}, f = "_N_E:", p.l = function(e, t, n, a) {
    if (r[e]) {
      r[e].push(t);
      return
    }
    if (void 0 !== n)
      for (var c, o, u = document.getElementsByTagName("script"), i = 0; i < u.length; i++) {
        var d = u[i];
        if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == f + n) {
          c = d;
          break
        }
      }
    c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, p.nc && c.setAttribute("nonce", p.nc), c.setAttribute("data-webpack", f + n), c.src = p.tu(e)), r[e] = [t];
    var s = function(t, n) {
        c.onerror = c.onload = null, clearTimeout(b);
        var f = r[e];
        if (delete r[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(function(e) {
            return e(n)
          }), t) return t(n)
      },
      b = setTimeout(s.bind(null, void 0, {
        type: "timeout",
        target: c
      }), 12e4);
    c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
  }, p.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, p.tt = function() {
    return void 0 === a && (a = {
      createScriptURL: function(e) {
        return e
      }
    }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (a = trustedTypes.createPolicy("nextjs#bundler", a))), a
  }, p.tu = function(e) {
    return p.tt().createScriptURL(e)
  }, p.p = "https://api.codetabs.com/v1/proxy/?quest=https://gomuraw.com/_next/", c = function(e, t, n, r) {
    var f = document.createElement("link");
    return f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = function(a) {
      if (f.onerror = f.onload = null, "load" === a.type) n();
      else {
        var c = a && ("load" === a.type ? "missing" : a.type),
          o = a && a.target && a.target.href || t,
          u = Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.code = "CSS_CHUNK_LOAD_FAILED", u.type = c, u.request = o, f.parentNode.removeChild(f), r(u)
      }
    }, f.href = t, document.head.appendChild(f), f
  }, o = function(e, t) {
    for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
      var f = n[r],
        a = f.getAttribute("data-href") || f.getAttribute("href");
      if ("stylesheet" === f.rel && (a === e || a === t)) return f
    }
    for (var c = document.getElementsByTagName("style"), r = 0; r < c.length; r++) {
      var f = c[r],
        a = f.getAttribute("data-href");
      if (a === e || a === t) return f
    }
  }, u = {
    2272: 0
  }, p.f.miniCss = function(e, t) {
    u[e] ? t.push(u[e]) : 0 !== u[e] && ({
      2202: 1,
      4310: 1,
      4897: 1,
      7057: 1,
      8896: 1
    })[e] && t.push(u[e] = new Promise(function(t, n) {
      var r = p.miniCssF(e),
        f = p.p + r;
      if (o(r, f)) return t();
      c(e, f, t, n)
    }).then(function() {
      u[e] = 0
    }, function(t) {
      throw delete u[e], t
    }))
  }, i = {
    2272: 0
  }, p.f.j = function(e, t) {
    var n = p.o(i, e) ? i[e] : void 0;
    if (0 !== n) {
      if (n) t.push(n[2]);
      else if (/^(2272|4310)$/.test(e)) i[e] = 0;
      else {
        var r = new Promise(function(t, r) {
          n = i[e] = [t, r]
        });
        t.push(n[2] = r);
        var f = p.p + p.u(e),
          a = Error();
        p.l(f, function(t) {
          if (p.o(i, e) && (0 !== (n = i[e]) && (i[e] = void 0), n)) {
            var r = t && ("load" === t.type ? "missing" : t.type),
              f = t && t.target && t.target.src;
            a.message = "Loading chunk " + e + " failed.\n(" + r + ": " + f + ")", a.name = "ChunkLoadError", a.type = r, a.request = f, n[1](a)
          }
        }, "chunk-" + e, e)
      }
    }
  }, p.O.j = function(e) {
    return 0 === i[e]
  }, d = function(e, t) {
    var n, r, f = t[0],
      a = t[1],
      c = t[2],
      o = 0;
    if (f.some(function(e) {
        return 0 !== i[e]
      })) {
      for (n in a) p.o(a, n) && (p.m[n] = a[n]);
      if (c) var u = c(p)
    }
    for (e && e(t); o < f.length; o++) r = f[o], p.o(i, r) && i[r] && i[r][0](), i[r] = 0;
    return p.O(u)
  }, (s = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(d.bind(null, 0)), s.push = d.bind(null, s.push.bind(s))
}();
