!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t, n) {
    "use strict";
    (function(e) {
        var n;
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        /*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
        /*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
        !function(t, n) {
            "object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
        }("undefined" != typeof window ? window : void 0, function(i, o) {
            var a = []
              , s = i.document
              , u = a.slice
              , l = a.concat
              , c = a.push
              , d = a.indexOf
              , f = {}
              , p = f.toString
              , h = f.hasOwnProperty
              , v = {}
              , m = function e(t, n) {
                return new e.fn.init(t,n)
            }
              , g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , y = /^-ms-/
              , x = /-([\da-z])/gi
              , b = function(e, t) {
                return t.toUpperCase()
            };
            function w(e) {
                var t = !!e && "length"in e && e.length
                  , n = m.type(e);
                return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            m.fn = m.prototype = {
                jquery: "2.2.4",
                constructor: m,
                selector: "",
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
                },
                pushStack: function(e) {
                    var t = m.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e) {
                    return m.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(m.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: a.sort,
                splice: a.splice
            },
            m.extend = m.fn.extend = function() {
                var e, t, n, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                s = arguments[u] || {},
                u++),
                "object" === r(s) || m.isFunction(s) || (s = {}),
                u === l && (s = this,
                u--); u < l; u++)
                    if (null != (e = arguments[u]))
                        for (t in e)
                            n = s[t],
                            s !== (i = e[t]) && (c && i && (m.isPlainObject(i) || (o = m.isArray(i))) ? (o ? (o = !1,
                            a = n && m.isArray(n) ? n : []) : a = n && m.isPlainObject(n) ? n : {},
                            s[t] = m.extend(c, a, i)) : void 0 !== i && (s[t] = i));
                return s
            }
            ,
            m.extend({
                expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === m.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !m.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(e) {
                    var t;
                    if ("object" !== m.type(e) || e.nodeType || m.isWindow(e))
                        return !1;
                    if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf"))
                        return !1;
                    for (t in e)
                        ;
                    return void 0 === t || h.call(e, t)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" === r(e) || "function" == typeof e ? f[p.call(e)] || "object" : r(e)
                },
                globalEval: function(e) {
                    var t, n = eval;
                    (e = m.trim(e)) && (1 === e.indexOf("use strict") ? ((t = s.createElement("script")).text = e,
                    s.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(x, b)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (w(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                            ;
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r]))
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(g, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (w(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : d.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                        e[i++] = t[r];
                    return e.length = i,
                    e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                        !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0, a = [];
                    if (w(e))
                        for (r = e.length; o < r; o++)
                            null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e)
                            null != (i = t(e[o], o, n)) && a.push(i);
                    return l.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    m.isFunction(e))
                        return r = u.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(u.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || m.guid++,
                        i
                },
                now: Date.now,
                support: v
            }),
            "function" == typeof Symbol && (m.fn[Symbol.iterator] = a[Symbol.iterator]),
            m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase()
            });
            var T = /*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
   */
            function(e) {
                var t, n, r, i, o, a, s, u, l, c, d, f, p, h, v, m, g, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, k = oe(), S = oe(), j = oe(), _ = function(e, t) {
                    return e === t && (d = !0),
                    0
                }, E = 1 << 31, N = {}.hasOwnProperty, A = [], D = A.pop, L = A.push, q = A.push, P = A.slice, O = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = "\\[" + M + "*(" + F + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]", W = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", I = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), B = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), U = new RegExp(W), V = new RegExp("^" + F + "$"), G = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + H + ")$","i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
                }, Y = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, re = function() {
                    f()
                };
                try {
                    q.apply(A = P.call(w.childNodes), w.childNodes),
                    A[w.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: A.length ? function(e, t) {
                            L.apply(e, P.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                function ie(e, t, r, i) {
                    var o, s, l, c, d, h, g, y, T = t && t.ownerDocument, C = t ? t.nodeType : 9;
                    if (r = r || [],
                    "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                        return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t),
                    t = t || p,
                    v)) {
                        if (11 !== C && (h = K.exec(e)))
                            if (o = h[1]) {
                                if (9 === C) {
                                    if (!(l = t.getElementById(o)))
                                        return r;
                                    if (l.id === o)
                                        return r.push(l),
                                        r
                                } else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o)
                                    return r.push(l),
                                    r
                            } else {
                                if (h[2])
                                    return q.apply(r, t.getElementsByTagName(e)),
                                    r;
                                if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return q.apply(r, t.getElementsByClassName(o)),
                                    r
                            }
                        if (n.qsa && !j[e + " "] && (!m || !m.test(e))) {
                            if (1 !== C)
                                T = t,
                                y = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = b),
                                s = (g = a(e)).length,
                                d = V.test(c) ? "#" + c : "[id='" + c + "']"; s--; )
                                    g[s] = d + " " + ve(g[s]);
                                y = g.join(","),
                                T = Z.test(e) && pe(t.parentNode) || t
                            }
                            if (y)
                                try {
                                    return q.apply(r, T.querySelectorAll(y)),
                                    r
                                } catch (e) {} finally {
                                    c === b && t.removeAttribute("id")
                                }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }
                function oe() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                        t[n + " "] = i
                    }
                }
                function ae(e) {
                    return e[b] = !0,
                    e
                }
                function se(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function ue(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; )
                        r.attrHandle[n[i]] = t
                }
                function le(e, t) {
                    var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || E) - (~e.sourceIndex || E);
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function ce(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function de(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function fe(e) {
                    return ae(function(t) {
                        return t = +t,
                        ae(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--; )
                                n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function pe(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ie.support = {},
                o = ie.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                f = ie.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
                    v = !o(p),
                    (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                    n.attributes = se(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    n.getElementsByTagName = se(function(e) {
                        return e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    n.getElementsByClassName = J.test(p.getElementsByClassName),
                    n.getById = se(function(e) {
                        return h.appendChild(e).id = b,
                        !p.getElementsByName || !p.getElementsByName(b).length
                    }),
                    n.getById ? (r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ,
                    r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ) : (delete r.find.ID,
                    r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ),
                    r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }
                    ,
                    r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    g = [],
                    m = [],
                    (n.qsa = J.test(p.querySelectorAll)) && (se(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                        e.querySelectorAll(":checked").length || m.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                    }),
                    se(function(e) {
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:")
                    })),
                    (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                        n.disconnectedMatch = y.call(e, "div"),
                        y.call(e, "[s!='']:x"),
                        g.push("!=", W)
                    }),
                    m = m.length && new RegExp(m.join("|")),
                    g = g.length && new RegExp(g.join("|")),
                    t = J.test(h.compareDocumentPosition),
                    x = t || J.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    _ = t ? function(e, t) {
                        if (e === t)
                            return d = !0,
                            0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return d = !0,
                            0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                        if (!i || !o)
                            return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (i === o)
                            return le(e, t);
                        for (n = e; n = n.parentNode; )
                            a.unshift(n);
                        for (n = t; n = n.parentNode; )
                            s.unshift(n);
                        for (; a[r] === s[r]; )
                            r++;
                        return r ? le(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }
                    ,
                    p) : p
                }
                ,
                ie.matches = function(e, t) {
                    return ie(e, null, null, t)
                }
                ,
                ie.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== p && f(e),
                    t = t.replace(X, "='$1']"),
                    n.matchesSelector && v && !j[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t)))
                        try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (e) {}
                    return ie(t, p, null, [e]).length > 0
                }
                ,
                ie.contains = function(e, t) {
                    return (e.ownerDocument || e) !== p && f(e),
                    x(e, t)
                }
                ,
                ie.attr = function(e, t) {
                    (e.ownerDocument || e) !== p && f(e);
                    var i = r.attrHandle[t.toLowerCase()]
                      , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                    return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }
                ,
                ie.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                ie.uniqueSort = function(e) {
                    var t, r = [], i = 0, o = 0;
                    if (d = !n.detectDuplicates,
                    c = !n.sortStable && e.slice(0),
                    e.sort(_),
                    d) {
                        for (; t = e[o++]; )
                            t === e[o] && (i = r.push(o));
                        for (; i--; )
                            e.splice(r[i], 1)
                    }
                    return c = null,
                    e
                }
                ,
                i = ie.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += i(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[r++]; )
                            n += i(t);
                    return n
                }
                ,
                (r = ie.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = ie.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "",
                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, d, f, p, h, v = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                                if (m) {
                                    if (o) {
                                        for (; v; ) {
                                            for (f = t; f = f[v]; )
                                                if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)
                                                    return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                        for (x = (p = (l = (c = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                        f = p && m.childNodes[p]; f = ++p && f && f[v] || (x = p = 0) || h.pop(); )
                                            if (1 === f.nodeType && ++x && f === t) {
                                                c[e] = [T, p, x];
                                                break
                                            }
                                    } else if (y && (x = p = (l = (c = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                                    !1 === x)
                                        for (; (f = ++p && f && f[v] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++x || (y && ((c = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, x]),
                                        f !== t)); )
                                            ;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                            r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--; )
                                    e[r = O(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }
                            ) : i
                        }
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var t = []
                              , n = []
                              , r = s(e.replace($, "$1"));
                            return r[b] ? ae(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                    (o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e,
                                r(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: ae(function(e) {
                            return function(t) {
                                return ie(e, t).length > 0
                            }
                        }),
                        contains: ae(function(e) {
                            return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                        }),
                        lang: ae(function(e) {
                            return V.test(e || "") || ie.error("unsupported lang: " + e),
                            e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Q.test(e.nodeName)
                        },
                        input: function(e) {
                            return Y.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: fe(function() {
                            return [0]
                        }),
                        last: fe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: fe(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: fe(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: fe(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }),
                        gt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    r.pseudos[t] = ce(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    r.pseudos[t] = de(t);
                function he() {}
                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function me(e, t, n) {
                    var r = t.dir
                      , i = n && "parentNode" === r
                      , o = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i)
                                return e(t, n, o)
                    }
                    : function(t, n, a) {
                        var s, u, l, c = [T, o];
                        if (a) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || i) && e(t, n, a))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || i) {
                                    if ((s = (u = (l = t[b] || (t[b] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === T && s[1] === o)
                                        return c[2] = s[2];
                                    if (u[r] = c,
                                    c[2] = e(t, n, a))
                                        return !0
                                }
                    }
                }
                function ge(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; )
                            if (!e[i](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function ye(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                        (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                        l && t.push(s)));
                    return a
                }
                function xe(e, t, n, r, i, o) {
                    return r && !r[b] && (r = xe(r)),
                    i && !i[b] && (i = xe(i, o)),
                    ae(function(o, a, s, u) {
                        var l, c, d, f = [], p = [], h = a.length, v = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++)
                                ie(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? v : ye(v, f, e, s, u), g = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, g, s, u),
                        r)
                            for (l = ye(g, p),
                            r(l, [], s, u),
                            c = l.length; c--; )
                                (d = l[c]) && (g[p[c]] = !(m[p[c]] = d));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [],
                                    c = g.length; c--; )
                                        (d = g[c]) && l.push(m[c] = d);
                                    i(null, g = [], l, u)
                                }
                                for (c = g.length; c--; )
                                    (d = g[c]) && (l = i ? O(o, d) : f[c]) > -1 && (o[l] = !(a[l] = d))
                            }
                        } else
                            g = ye(g === a ? g.splice(h, g.length) : g),
                            i ? i(null, a, g, u) : q.apply(a, g)
                    })
                }
                function be(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                        return e === t
                    }, s, !0), d = me(function(e) {
                        return O(t, e) > -1
                    }, s, !0), f = [function(e, n, r) {
                        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                        return t = null,
                        i
                    }
                    ]; u < o; u++)
                        if (n = r.relative[e[u].type])
                            f = [me(ge(f), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                    ;
                                return xe(u > 1 && ge(f), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && be(e.slice(u, i)), i < o && be(e = e.slice(i)), i < o && ve(e))
                            }
                            f.push(n)
                        }
                    return ge(f)
                }
                return he.prototype = r.filters = r.pseudos,
                r.setFilters = new he,
                a = ie.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = S[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    for (s = e,
                    u = [],
                    l = r.preFilter; s; ) {
                        for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        n = !1,
                        (i = z.exec(s)) && (n = i.shift(),
                        o.push({
                            value: n,
                            type: i[0].replace($, " ")
                        }),
                        s = s.slice(n.length)),
                        r.filter)
                            !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                            o.push({
                                value: n,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? s.length : s ? ie.error(e) : S(e, u).slice(0)
                }
                ,
                s = ie.compile = function(e, t) {
                    var n, i = [], o = [], s = j[e + " "];
                    if (!s) {
                        for (t || (t = a(e)),
                        n = t.length; n--; )
                            (s = be(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = j(e, function(e, t) {
                            var n = t.length > 0
                              , i = e.length > 0
                              , o = function(o, a, s, u, c) {
                                var d, h, m, g = 0, y = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), k = T += null == w ? 1 : Math.random() || .1, S = C.length;
                                for (c && (l = a === p || a || c); y !== S && null != (d = C[y]); y++) {
                                    if (i && d) {
                                        for (h = 0,
                                        a || d.ownerDocument === p || (f(d),
                                        s = !v); m = e[h++]; )
                                            if (m(d, a || p, s)) {
                                                u.push(d);
                                                break
                                            }
                                        c && (T = k)
                                    }
                                    n && ((d = !m && d) && g--,
                                    o && x.push(d))
                                }
                                if (g += y,
                                n && y !== g) {
                                    for (h = 0; m = t[h++]; )
                                        m(x, b, a, s);
                                    if (o) {
                                        if (g > 0)
                                            for (; y--; )
                                                x[y] || b[y] || (b[y] = D.call(u));
                                        b = ye(b)
                                    }
                                    q.apply(u, b),
                                    c && !o && b.length > 0 && g + t.length > 1 && ie.uniqueSort(u)
                                }
                                return c && (T = k,
                                l = w),
                                x
                            };
                            return n ? ae(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }
                ,
                u = ie.select = function(e, t, i, o) {
                    var u, l, c, d, f, p = "function" == typeof e && e, h = !o && a(e = p.selector || e);
                    if (i = i || [],
                    1 === h.length) {
                        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && v && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                                return i;
                            p && (t = t.parentNode),
                            e = e.slice(l.shift().value.length)
                        }
                        for (u = G.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u],
                        !r.relative[d = c.type]); )
                            if ((f = r.find[d]) && (o = f(c.matches[0].replace(te, ne), Z.test(l[0].type) && pe(t.parentNode) || t))) {
                                if (l.splice(u, 1),
                                !(e = o.length && ve(l)))
                                    return q.apply(i, o),
                                    i;
                                break
                            }
                    }
                    return (p || s(e, h))(o, t, !v, i, !t || Z.test(e) && pe(t.parentNode) || t),
                    i
                }
                ,
                n.sortStable = b.split("").sort(_).join("") === b,
                n.detectDuplicates = !!d,
                f(),
                n.sortDetached = se(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("div"))
                }),
                se(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                n.attributes && se(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || ue("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                se(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ue(H, function(e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }),
                ie
            }(i);
            m.find = T,
            m.expr = T.selectors,
            m.expr[":"] = m.expr.pseudos,
            m.uniqueSort = m.unique = T.uniqueSort,
            m.text = T.getText,
            m.isXMLDoc = T.isXML,
            m.contains = T.contains;
            var C = function(e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (i && m(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
              , k = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , S = m.expr.match.needsContext
              , j = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
              , _ = /^.[^:#\[\.,]*$/;
            function E(e, t, n) {
                if (m.isFunction(t))
                    return m.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                if (t.nodeType)
                    return m.grep(e, function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (_.test(t))
                        return m.filter(t, e, n);
                    t = m.filter(t, e)
                }
                return m.grep(e, function(e) {
                    return d.call(t, e) > -1 !== n
                })
            }
            m.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            m.fn.extend({
                find: function(e) {
                    var t, n = this.length, r = [], i = this;
                    if ("string" != typeof e)
                        return this.pushStack(m(e).filter(function() {
                            for (t = 0; t < n; t++)
                                if (m.contains(i[t], this))
                                    return !0
                        }));
                    for (t = 0; t < n; t++)
                        m.find(e, i[t], r);
                    return (r = this.pushStack(n > 1 ? m.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e,
                    r
                },
                filter: function(e) {
                    return this.pushStack(E(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(E(this, e || [], !0))
                },
                is: function(e) {
                    return !!E(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
                }
            });
            var N, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (m.fn.init = function(e, t, n) {
                var r, i;
                if (!e)
                    return this;
                if (n = n || N,
                "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof m ? t[0] : t,
                        m.merge(this, m.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)),
                        j.test(r[1]) && m.isPlainObject(t))
                            for (r in t)
                                m.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = s.getElementById(r[2])) && i.parentNode && (this.length = 1,
                    this[0] = i),
                    this.context = s,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                m.makeArray(e, this))
            }
            ).prototype = m.fn,
            N = m(s);
            var D = /^(?:parents|prev(?:Until|All))/
              , L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function q(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            m.fn.extend({
                has: function(e) {
                    var t = m(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (m.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = S.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? d.call(m(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            m.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return q(e, "nextSibling")
                },
                prev: function(e) {
                    return q(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return k((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return k(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || m.merge([], e.childNodes)
                }
            }, function(e, t) {
                m.fn[e] = function(n, r) {
                    var i = m.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = m.filter(r, i)),
                    this.length > 1 && (L[e] || m.uniqueSort(i),
                    D.test(e) && i.reverse()),
                    this.pushStack(i)
                }
            });
            var P, O = /\S+/g;
            function H() {
                s.removeEventListener("DOMContentLoaded", H),
                i.removeEventListener("load", H),
                m.ready()
            }
            m.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return m.each(e.match(O) || [], function(e, n) {
                        t[n] = !0
                    }),
                    t
                }(e) : m.extend({}, e);
                var t, n, r, i, o = [], a = [], s = -1, u = function() {
                    for (i = e.once,
                    r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length; )
                            !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    i && (o = n ? [] : "")
                }, l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1,
                        a.push(n)),
                        function t(n) {
                            m.each(n, function(n, r) {
                                m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r)
                            })
                        }(arguments),
                        n && !t && u()),
                        this
                    },
                    remove: function() {
                        return m.each(arguments, function(e, t) {
                            for (var n; (n = m.inArray(t, o, n)) > -1; )
                                o.splice(n, 1),
                                n <= s && s--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? m.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return i = a = [],
                        o = n = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = a = [],
                        n || (o = n = ""),
                        this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                        a.push(n),
                        t || u()),
                        this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return l
            }
            ,
            m.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
                      , n = "pending"
                      , r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return m.Deferred(function(n) {
                                m.each(t, function(t, o) {
                                    var a = m.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && m.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? m.extend(e, r) : r
                        }
                    }
                      , i = {};
                    return r.pipe = r.then,
                    m.each(t, function(e, o) {
                        var a = o[2]
                          , s = o[3];
                        r[o[1]] = a.add,
                        s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                        i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments),
                            this
                        }
                        ,
                        i[o[0] + "With"] = a.fireWith
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                },
                when: function(e) {
                    var t, n, r, i = 0, o = u.call(arguments), a = o.length, s = 1 !== a || e && m.isFunction(e.promise) ? a : 0, l = 1 === s ? e : m.Deferred(), c = function(e, n, r) {
                        return function(i) {
                            n[e] = this,
                            r[e] = arguments.length > 1 ? u.call(arguments) : i,
                            r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                    if (a > 1)
                        for (t = new Array(a),
                        n = new Array(a),
                        r = new Array(a); i < a; i++)
                            o[i] && m.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(l.reject) : --s;
                    return s || l.resolveWith(r, o),
                    l.promise()
                }
            }),
            m.fn.ready = function(e) {
                return m.ready.promise().done(e),
                this
            }
            ,
            m.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? m.readyWait++ : m.ready(!0)
                },
                ready: function(e) {
                    (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0,
                    !0 !== e && --m.readyWait > 0 || (P.resolveWith(s, [m]),
                    m.fn.triggerHandler && (m(s).triggerHandler("ready"),
                    m(s).off("ready"))))
                }
            }),
            m.ready.promise = function(e) {
                return P || (P = m.Deferred(),
                "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? i.setTimeout(m.ready) : (s.addEventListener("DOMContentLoaded", H),
                i.addEventListener("load", H))),
                P.promise(e)
            }
            ,
            m.ready.promise();
            var M = function e(t, n, r, i, o, a, s) {
                var u = 0
                  , l = t.length
                  , c = null == r;
                if ("object" === m.type(r))
                    for (u in o = !0,
                    r)
                        e(t, n, u, r[u], !0, a, s);
                else if (void 0 !== i && (o = !0,
                m.isFunction(i) || (s = !0),
                c && (s ? (n.call(t, i),
                n = null) : (c = n,
                n = function(e, t, n) {
                    return c.call(m(e), n)
                }
                )),
                n))
                    for (; u < l; u++)
                        n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                return o ? t : c ? n.call(t) : l ? n(t[0], r) : a
            }
              , F = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function R() {
                this.expando = m.expando + R.uid++
            }
            R.uid = 1,
            R.prototype = {
                register: function(e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }),
                    e[this.expando]
                },
                cache: function(e) {
                    if (!F(e))
                        return {};
                    var t = e[this.expando];
                    return t || (t = {},
                    F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t)
                        i[t] = n;
                    else
                        for (r in t)
                            i[r] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                },
                access: function(e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, m.camelCase(t)) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r, i, o = e[this.expando];
                    if (void 0 !== o) {
                        if (void 0 === t)
                            this.register(e);
                        else {
                            m.isArray(t) ? r = t.concat(t.map(m.camelCase)) : (i = m.camelCase(t),
                            r = t in o ? [t, i] : (r = i)in o ? [r] : r.match(O) || []),
                            n = r.length;
                            for (; n--; )
                                delete o[r[n]]
                        }
                        (void 0 === t || m.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !m.isEmptyObject(t)
                }
            };
            var W = new R
              , I = new R
              , $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , B = /[A-Z]/g;
            function z(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(B, "-$&").toLowerCase(),
                    "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $.test(n) ? m.parseJSON(n) : n)
                        } catch (e) {}
                        I.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            m.extend({
                hasData: function(e) {
                    return I.hasData(e) || W.hasData(e)
                },
                data: function(e, t, n) {
                    return I.access(e, t, n)
                },
                removeData: function(e, t) {
                    I.remove(e, t)
                },
                _data: function(e, t, n) {
                    return W.access(e, t, n)
                },
                _removeData: function(e, t) {
                    W.remove(e, t)
                }
            }),
            m.fn.extend({
                data: function(e, t) {
                    var n, i, o, a = this[0], s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = I.get(a),
                        1 === a.nodeType && !W.get(a, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = m.camelCase(i.slice(5)),
                                z(a, i, o[i]));
                            W.set(a, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" === r(e) ? this.each(function() {
                        I.set(this, e)
                    }) : M(this, function(t) {
                        var n, r;
                        if (a && void 0 === t)
                            return void 0 !== (n = I.get(a, e) || I.get(a, e.replace(B, "-$&").toLowerCase())) ? n : (r = m.camelCase(e),
                            void 0 !== (n = I.get(a, r)) ? n : void 0 !== (n = z(a, r, void 0)) ? n : void 0);
                        r = m.camelCase(e),
                        this.each(function() {
                            var n = I.get(this, r);
                            I.set(this, r, t),
                            e.indexOf("-") > -1 && void 0 !== n && I.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        I.remove(this, e)
                    })
                }
            }),
            m.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue",
                        r = W.get(e, t),
                        n && (!r || m.isArray(n) ? r = W.access(e, t, m.makeArray(n)) : r.push(n)),
                        r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = m.queue(e, t)
                      , r = n.length
                      , i = n.shift()
                      , o = m._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, function() {
                        m.dequeue(e, t)
                    }, o)),
                    !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return W.get(e, n) || W.access(e, n, {
                        empty: m.Callbacks("once memory").add(function() {
                            W.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            m.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = m.queue(this, e, t);
                        m._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        m.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1, i = m.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--; )
                        (n = W.get(o[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                    return s(),
                    i.promise(t)
                }
            });
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , U = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$","i")
              , V = ["Top", "Right", "Bottom", "Left"]
              , G = function(e, t) {
                return e = t || e,
                "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
            };
            function Y(e, t, n, r) {
                var i, o = 1, a = 20, s = r ? function() {
                    return r.cur()
                }
                : function() {
                    return m.css(e, t, "")
                }
                , u = s(), l = n && n[3] || (m.cssNumber[t] ? "" : "px"), c = (m.cssNumber[t] || "px" !== l && +u) && U.exec(m.css(e, t));
                if (c && c[3] !== l) {
                    l = l || c[3],
                    n = n || [],
                    c = +u || 1;
                    do {
                        c /= o = o || ".5",
                        m.style(e, t, c + l)
                    } while (o !== (o = s() / u) && 1 !== o && --a)
                }
                return n && (c = +c || +u || 0,
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = l,
                r.start = c,
                r.end = i)),
                i
            }
            var Q = /^(?:checkbox|radio)$/i
              , J = /<([\w:-]+)/
              , K = /^$|\/(?:java|ecma)script/i
              , Z = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function ee(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], n) : n
            }
            function te(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    W.set(e[n], "globalEval", !t || W.get(t[n], "globalEval"))
            }
            Z.optgroup = Z.option,
            Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead,
            Z.th = Z.td;
            var ne = /<|&#?\w+;/;
            function re(e, t, n, r, i) {
                for (var o, a, s, u, l, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === m.type(o))
                            m.merge(f, o.nodeType ? [o] : o);
                        else if (ne.test(o)) {
                            for (a = a || d.appendChild(t.createElement("div")),
                            s = (J.exec(o) || ["", ""])[1].toLowerCase(),
                            u = Z[s] || Z._default,
                            a.innerHTML = u[1] + m.htmlPrefilter(o) + u[2],
                            c = u[0]; c--; )
                                a = a.lastChild;
                            m.merge(f, a.childNodes),
                            (a = d.firstChild).textContent = ""
                        } else
                            f.push(t.createTextNode(o));
                for (d.textContent = "",
                p = 0; o = f[p++]; )
                    if (r && m.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (l = m.contains(o.ownerDocument, o),
                    a = ee(d.appendChild(o), "script"),
                    l && te(a),
                    n)
                        for (c = 0; o = a[c++]; )
                            K.test(o.type || "") && n.push(o);
                return d
            }
            !function() {
                var e = s.createDocumentFragment().appendChild(s.createElement("div"))
                  , t = s.createElement("input");
                t.setAttribute("type", "radio"),
                t.setAttribute("checked", "checked"),
                t.setAttribute("name", "t"),
                e.appendChild(t),
                v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                e.innerHTML = "<textarea>x</textarea>",
                v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var ie = /^key/
              , oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , ae = /^([^.]*)(?:\.(.+)|)/;
            function se() {
                return !0
            }
            function ue() {
                return !1
            }
            function le() {
                try {
                    return s.activeElement
                } catch (e) {}
            }
            function ce(e, t, n, i, o, a) {
                var s, u;
                if ("object" === r(t)) {
                    for (u in "string" != typeof n && (i = i || n,
                    n = void 0),
                    t)
                        ce(e, u, n, i, t[u], a);
                    return e
                }
                if (null == i && null == o ? (o = n,
                i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
                i = void 0) : (o = i,
                i = n,
                n = void 0)),
                !1 === o)
                    o = ue;
                else if (!o)
                    return e;
                return 1 === a && (s = o,
                (o = function(e) {
                    return m().off(e),
                    s.apply(this, arguments)
                }
                ).guid = s.guid || (s.guid = m.guid++)),
                e.each(function() {
                    m.event.add(this, t, o, i, n)
                })
            }
            m.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, v, g = W.get(e);
                    if (g)
                        for (n.handler && (n = (o = n).handler,
                        i = o.selector),
                        n.guid || (n.guid = m.guid++),
                        (u = g.events) || (u = g.events = {}),
                        (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        l = (t = (t || "").match(O) || [""]).length; l--; )
                            p = v = (s = ae.exec(t[l]) || [])[1],
                            h = (s[2] || "").split(".").sort(),
                            p && (d = m.event.special[p] || {},
                            p = (i ? d.delegateType : d.bindType) || p,
                            d = m.event.special[p] || {},
                            c = m.extend({
                                type: p,
                                origType: v,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && m.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (f = u[p]) || ((f = u[p] = []).delegateCount = 0,
                            d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                            d.add && (d.add.call(e, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                            i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                            m.event.global[p] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, v, g = W.hasData(e) && W.get(e);
                    if (g && (u = g.events)) {
                        for (l = (t = (t || "").match(O) || [""]).length; l--; )
                            if (p = v = (s = ae.exec(t[l]) || [])[1],
                            h = (s[2] || "").split(".").sort(),
                            p) {
                                for (d = m.event.special[p] || {},
                                f = u[p = (r ? d.delegateType : d.bindType) || p] || [],
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                a = o = f.length; o--; )
                                    c = f[o],
                                    !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1),
                                    c.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, c));
                                a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || m.removeEvent(e, p, g.handle),
                                delete u[p])
                            } else
                                for (p in u)
                                    m.event.remove(e, p + t[l], n, r, !0);
                        m.isEmptyObject(u) && W.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    e = m.event.fix(e);
                    var t, n, r, i, o, a, s = u.call(arguments), l = (W.get(this, "events") || {})[e.type] || [], c = m.event.special[e.type] || {};
                    if (s[0] = e,
                    e.delegateTarget = this,
                    !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                        for (a = m.event.handlers.call(this, e, l),
                        t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                            for (e.currentTarget = i.elem,
                            n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                e.data = o.data,
                                void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(),
                                e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                    if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                                for (r = [],
                                n = 0; n < s; n++)
                                    void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? m(i, this).index(u) > -1 : m.find(i, this, null, [u]).length),
                                    r[i] && r.push(o);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                    a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || s).documentElement,
                        i = n.body,
                        e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                        e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                        e
                    }
                },
                fix: function(e) {
                    if (e[m.expando])
                        return e;
                    var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = oe.test(i) ? this.mouseHooks : ie.test(i) ? this.keyHooks : {}),
                    r = a.props ? this.props.concat(a.props) : this.props,
                    e = new m.Event(o),
                    t = r.length; t--; )
                        e[n = r[t]] = o[n];
                    return e.target || (e.target = s),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== le() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === le() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && m.nodeName(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return m.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            m.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            m.Event = function(e, t) {
                if (!(this instanceof m.Event))
                    return new m.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ue) : this.type = e,
                t && m.extend(this, t),
                this.timeStamp = e && e.timeStamp || m.now(),
                this[m.expando] = !0
            }
            ,
            m.Event.prototype = {
                constructor: m.Event,
                isDefaultPrevented: ue,
                isPropagationStopped: ue,
                isImmediatePropagationStopped: ue,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = se,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = se,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = se,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            m.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                m.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget, i = e.handleObj;
                        return r && (r === this || m.contains(this, r)) || (e.type = i.origType,
                        n = i.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            m.fn.extend({
                on: function(e, t, n, r) {
                    return ce(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ce(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" === r(e)) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = ue),
                    this.each(function() {
                        m.event.remove(this, e, n, t)
                    })
                }
            });
            var de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
              , fe = /<script|<style|<link/i
              , pe = /checked\s*(?:[^=]|=\s*.checked.)/i
              , he = /^true\/(.*)/
              , ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function me(e, t) {
                return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function ge(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function ye(e) {
                var t = he.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function xe(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (W.hasData(e) && (o = W.access(e),
                    a = W.set(t, o),
                    l = o.events))
                        for (i in delete a.handle,
                        a.events = {},
                        l)
                            for (n = 0,
                            r = l[i].length; n < r; n++)
                                m.event.add(t, i, l[i][n]);
                    I.hasData(e) && (s = I.access(e),
                    u = m.extend({}, s),
                    I.set(t, u))
                }
            }
            function be(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Q.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function we(e, t, n, r) {
                t = l.apply([], t);
                var i, o, a, s, u, c, d = 0, f = e.length, p = f - 1, h = t[0], g = m.isFunction(h);
                if (g || f > 1 && "string" == typeof h && !v.checkClone && pe.test(h))
                    return e.each(function(i) {
                        var o = e.eq(i);
                        g && (t[0] = h.call(this, i, o.html())),
                        we(o, t, n, r)
                    });
                if (f && (o = (i = re(t, e[0].ownerDocument, !1, e, r)).firstChild,
                1 === i.childNodes.length && (i = o),
                o || r)) {
                    for (s = (a = m.map(ee(i, "script"), ge)).length; d < f; d++)
                        u = i,
                        d !== p && (u = m.clone(u, !0, !0),
                        s && m.merge(a, ee(u, "script"))),
                        n.call(e[d], u, d);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument,
                        m.map(a, ye),
                        d = 0; d < s; d++)
                            u = a[d],
                            K.test(u.type || "") && !W.access(u, "globalEval") && m.contains(c, u) && (u.src ? m._evalUrl && m._evalUrl(u.src) : m.globalEval(u.textContent.replace(ve, "")))
                }
                return e
            }
            function Te(e, t, n) {
                for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || m.cleanData(ee(r)),
                    r.parentNode && (n && m.contains(r.ownerDocument, r) && te(ee(r, "script")),
                    r.parentNode.removeChild(r));
                return e
            }
            m.extend({
                htmlPrefilter: function(e) {
                    return e.replace(de, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), u = m.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                        for (a = ee(s),
                        r = 0,
                        i = (o = ee(e)).length; r < i; r++)
                            be(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || ee(e),
                            a = a || ee(s),
                            r = 0,
                            i = o.length; r < i; r++)
                                xe(o[r], a[r]);
                        else
                            xe(e, s);
                    return (a = ee(s, "script")).length > 0 && te(a, !u && ee(e, "script")),
                    s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (F(n)) {
                            if (t = n[W.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
                                n[W.expando] = void 0
                            }
                            n[I.expando] && (n[I.expando] = void 0)
                        }
                }
            }),
            m.fn.extend({
                domManip: we,
                detach: function(e) {
                    return Te(this, e, !0)
                },
                remove: function(e) {
                    return Te(this, e)
                },
                text: function(e) {
                    return M(this, function(e) {
                        return void 0 === e ? m.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return we(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || me(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return we(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = me(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return we(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return we(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (m.cleanData(ee(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return m.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return M(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !fe.test(e) && !Z[(J.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = m.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType && (m.cleanData(ee(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return we(this, arguments, function(t) {
                        var n = this.parentNode;
                        m.inArray(this, e) < 0 && (m.cleanData(ee(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            m.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                m.fn[e] = function(e) {
                    for (var n, r = [], i = m(e), o = i.length - 1, a = 0; a <= o; a++)
                        n = a === o ? this : this.clone(!0),
                        m(i[a])[t](n),
                        c.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ce, ke = {
                HTML: "block",
                BODY: "block"
            };
            function Se(e, t) {
                var n = m(t.createElement(e)).appendTo(t.body)
                  , r = m.css(n[0], "display");
                return n.detach(),
                r
            }
            function je(e) {
                var t = s
                  , n = ke[e];
                return n || ("none" !== (n = Se(e, t)) && n || ((t = (Ce = (Ce || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
                t.close(),
                n = Se(e, t),
                Ce.detach()),
                ke[e] = n),
                n
            }
            var _e = /^margin/
              , Ee = new RegExp("^(" + X + ")(?!px)[a-z%]+$","i")
              , Ne = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = i),
                t.getComputedStyle(e)
            }
              , Ae = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t)
                    a[o] = e.style[o],
                    e.style[o] = t[o];
                for (o in i = n.apply(e, r || []),
                t)
                    e.style[o] = a[o];
                return i
            }
              , De = s.documentElement;
            function Le(e, t, n) {
                var r, i, o, a, s = e.style;
                return "" !== (a = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)),
                n && !v.pixelMarginRight() && Ee.test(a) && _e.test(t) && (r = s.width,
                i = s.minWidth,
                o = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = r,
                s.minWidth = i,
                s.maxWidth = o),
                void 0 !== a ? a + "" : a
            }
            function qe(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                var e, t, n, r, o = s.createElement("div"), a = s.createElement("div");
                function u() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    a.innerHTML = "",
                    De.appendChild(o);
                    var s = i.getComputedStyle(a);
                    e = "1%" !== s.top,
                    r = "2px" === s.marginLeft,
                    t = "4px" === s.width,
                    a.style.marginRight = "50%",
                    n = "4px" === s.marginRight,
                    De.removeChild(o)
                }
                a.style && (a.style.backgroundClip = "content-box",
                a.cloneNode(!0).style.backgroundClip = "",
                v.clearCloneStyle = "content-box" === a.style.backgroundClip,
                o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                o.appendChild(a),
                m.extend(v, {
                    pixelPosition: function() {
                        return u(),
                        e
                    },
                    boxSizingReliable: function() {
                        return null == t && u(),
                        t
                    },
                    pixelMarginRight: function() {
                        return null == t && u(),
                        n
                    },
                    reliableMarginLeft: function() {
                        return null == t && u(),
                        r
                    },
                    reliableMarginRight: function() {
                        var e, t = a.appendChild(s.createElement("div"));
                        return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        t.style.marginRight = t.style.width = "0",
                        a.style.width = "1px",
                        De.appendChild(o),
                        e = !parseFloat(i.getComputedStyle(t).marginRight),
                        De.removeChild(o),
                        a.removeChild(t),
                        e
                    }
                }))
            }();
            var Pe = /^(none|table(?!-c[ea]).+)/
              , Oe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , He = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , Me = ["Webkit", "O", "Moz", "ms"]
              , Fe = s.createElement("div").style;
            function Re(e) {
                if (e in Fe)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Me.length; n--; )
                    if ((e = Me[n] + t)in Fe)
                        return e
            }
            function We(e, t, n) {
                var r = U.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function Ie(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                    "margin" === n && (a += m.css(e, n + V[o], !0, i)),
                    r ? ("content" === n && (a -= m.css(e, "padding" + V[o], !0, i)),
                    "margin" !== n && (a -= m.css(e, "border" + V[o] + "Width", !0, i))) : (a += m.css(e, "padding" + V[o], !0, i),
                    "padding" !== n && (a += m.css(e, "border" + V[o] + "Width", !0, i)));
                return a
            }
            function $e(e, t, n) {
                var r = !0
                  , i = "width" === t ? e.offsetWidth : e.offsetHeight
                  , o = Ne(e)
                  , a = "border-box" === m.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (((i = Le(e, t, o)) < 0 || null == i) && (i = e.style[t]),
                    Ee.test(i))
                        return i;
                    r = a && (v.boxSizingReliable() || i === e.style[t]),
                    i = parseFloat(i) || 0
                }
                return i + Ie(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }
            function Be(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
                    (r = e[a]).style && (o[a] = W.get(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && G(r) && (o[a] = W.access(r, "olddisplay", je(r.nodeName)))) : (i = G(r),
                    "none" === n && i || W.set(r, "olddisplay", i ? n : m.css(r, "display"))));
                for (a = 0; a < s; a++)
                    (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }
            function ze(e, t, n, r, i) {
                return new ze.prototype.init(e,t,n,r,i)
            }
            m.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Le(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, u = m.camelCase(t), l = e.style;
                        if (t = m.cssProps[u] || (m.cssProps[u] = Re(u) || u),
                        s = m.cssHooks[t] || m.cssHooks[u],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                        "string" === (a = r(n)) && (o = U.exec(n)) && o[1] && (n = Y(e, t, o),
                        a = "number"),
                        null != n && n == n && ("number" === a && (n += o && o[3] || (m.cssNumber[u] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = m.camelCase(t);
                    return t = m.cssProps[s] || (m.cssProps[s] = Re(s) || s),
                    (a = m.cssHooks[t] || m.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = Le(e, t, r)),
                    "normal" === i && t in He && (i = He[t]),
                    "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }),
            m.each(["height", "width"], function(e, t) {
                m.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return Pe.test(m.css(e, "display")) && 0 === e.offsetWidth ? Ae(e, Oe, function() {
                                return $e(e, t, r)
                            }) : $e(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i, o = r && Ne(e), a = r && Ie(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o);
                        return a && (i = U.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                        n = m.css(e, t)),
                        We(0, n, a)
                    }
                }
            }),
            m.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(Le(e, "marginLeft")) || e.getBoundingClientRect().left - Ae(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            m.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
                if (t)
                    return Ae(e, {
                        display: "inline-block"
                    }, Le, [e, "marginRight"])
            }),
            m.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                m.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                            i[e + V[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                _e.test(e) || (m.cssHooks[e + t].set = We)
            }),
            m.fn.extend({
                css: function(e, t) {
                    return M(this, function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (m.isArray(t)) {
                            for (r = Ne(e),
                            i = t.length; a < i; a++)
                                o[t[a]] = m.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return Be(this, !0)
                },
                hide: function() {
                    return Be(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        G(this) ? m(this).show() : m(this).hide()
                    })
                }
            }),
            m.Tween = ze,
            ze.prototype = {
                constructor: ze,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = i || m.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (m.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ze.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ze.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : ze.propHooks._default.set(this),
                    this
                }
            },
            ze.prototype.init.prototype = ze.prototype,
            ze.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            ze.propHooks.scrollTop = ze.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            m.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            m.fx = ze.prototype.init,
            m.fx.step = {};
            var Xe, Ue, Ve = /^(?:toggle|show|hide)$/, Ge = /queueHooks$/;
            function Ye() {
                return i.setTimeout(function() {
                    Xe = void 0
                }),
                Xe = m.now()
            }
            function Qe(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    i["margin" + (n = V[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                i
            }
            function Je(e, t, n) {
                for (var r, i = (Ke.tweeners[t] || []).concat(Ke.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function Ke(e, t, n) {
                var r, i, o = 0, a = Ke.prefilters.length, s = m.Deferred().always(function() {
                    delete u.elem
                }), u = function() {
                    if (i)
                        return !1;
                    for (var t = Xe || Ye(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                        l.tweens[o].run(r);
                    return s.notifyWith(e, [l, r, n]),
                    r < 1 && a ? n : (s.resolveWith(e, [l]),
                    !1)
                }, l = s.promise({
                    elem: e,
                    props: m.extend({}, t),
                    opts: m.extend(!0, {
                        specialEasing: {},
                        easing: m.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Xe || Ye(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                        r
                    },
                    stop: function(t) {
                        var n = 0
                          , r = t ? l.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; n < r; n++)
                            l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                        this
                    }
                }), c = l.props;
                for (!function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = m.camelCase(n)],
                        o = e[n],
                        m.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                        n !== r && (e[r] = o,
                        delete e[n]),
                        (a = m.cssHooks[r]) && "expand"in a)
                            for (n in o = a.expand(o),
                            delete e[r],
                            o)
                                n in e || (e[n] = o[n],
                                t[n] = i);
                        else
                            t[r] = i
                }(c, l.opts.specialEasing); o < a; o++)
                    if (r = Ke.prefilters[o].call(l, e, c, l.opts))
                        return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)),
                        r;
                return m.map(c, Je, l),
                m.isFunction(l.opts.start) && l.opts.start.call(e, l),
                m.fx.timer(m.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            m.Animation = m.extend(Ke, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return Y(n.elem, e, U.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    m.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(O);
                    for (var n, r = 0, i = e.length; r < i; r++)
                        n = e[r],
                        Ke.tweeners[n] = Ke.tweeners[n] || [],
                        Ke.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, a, s, u, l, c = this, d = {}, f = e.style, p = e.nodeType && G(e), h = W.get(e, "fxshow");
                    for (r in n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                    u = s.empty.fire,
                    s.empty.fire = function() {
                        s.unqueued || u()
                    }
                    ),
                    s.unqueued++,
                    c.always(function() {
                        c.always(function() {
                            s.unqueued--,
                            m.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                    1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                    "inline" === ("none" === (l = m.css(e, "display")) ? W.get(e, "olddisplay") || je(e.nodeName) : l) && "none" === m.css(e, "float") && (f.display = "inline-block")),
                    n.overflow && (f.overflow = "hidden",
                    c.always(function() {
                        f.overflow = n.overflow[0],
                        f.overflowX = n.overflow[1],
                        f.overflowY = n.overflow[2]
                    })),
                    t)
                        if (i = t[r],
                        Ve.exec(i)) {
                            if (delete t[r],
                            o = o || "toggle" === i,
                            i === (p ? "hide" : "show")) {
                                if ("show" !== i || !h || void 0 === h[r])
                                    continue;
                                p = !0
                            }
                            d[r] = h && h[r] || m.style(e, r)
                        } else
                            l = void 0;
                    if (m.isEmptyObject(d))
                        "inline" === ("none" === l ? je(e.nodeName) : l) && (f.display = l);
                    else
                        for (r in h ? "hidden"in h && (p = h.hidden) : h = W.access(e, "fxshow", {}),
                        o && (h.hidden = !p),
                        p ? m(e).show() : c.done(function() {
                            m(e).hide()
                        }),
                        c.done(function() {
                            var t;
                            for (t in W.remove(e, "fxshow"),
                            d)
                                m.style(e, t, d[t])
                        }),
                        d)
                            a = Je(p ? h[r] : 0, r, c),
                            r in h || (h[r] = a.start,
                            p && (a.end = a.start,
                            a.start = "width" === r || "height" === r ? 1 : 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? Ke.prefilters.unshift(e) : Ke.prefilters.push(e)
                }
            }),
            m.speed = function(e, t, n) {
                var i = e && "object" === r(e) ? m.extend({}, e) : {
                    complete: n || !n && t || m.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !m.isFunction(t) && t
                };
                return i.duration = m.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in m.fx.speeds ? m.fx.speeds[i.duration] : m.fx.speeds._default,
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    m.isFunction(i.old) && i.old.call(this),
                    i.queue && m.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            m.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(G).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = m.isEmptyObject(e)
                      , o = m.speed(t, n, r)
                      , a = function() {
                        var t = Ke(this, m.extend({}, e), o);
                        (i || W.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , i = null != e && e + "queueHooks"
                          , o = m.timers
                          , a = W.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && Ge.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                            t = !1,
                            o.splice(i, 1));
                        !t && n || m.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = W.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = m.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                        m.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            m.each(["toggle", "show", "hide"], function(e, t) {
                var n = m.fn[t];
                m.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Qe(t, !0), e, r, i)
                }
            }),
            m.each({
                slideDown: Qe("show"),
                slideUp: Qe("hide"),
                slideToggle: Qe("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                m.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }),
            m.timers = [],
            m.fx.tick = function() {
                var e, t = 0, n = m.timers;
                for (Xe = m.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || m.fx.stop(),
                Xe = void 0
            }
            ,
            m.fx.timer = function(e) {
                m.timers.push(e),
                e() ? m.fx.start() : m.timers.pop()
            }
            ,
            m.fx.interval = 13,
            m.fx.start = function() {
                Ue || (Ue = i.setInterval(m.fx.tick, m.fx.interval))
            }
            ,
            m.fx.stop = function() {
                i.clearInterval(Ue),
                Ue = null
            }
            ,
            m.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            m.fn.delay = function(e, t) {
                return e = m.fx && m.fx.speeds[e] || e,
                t = t || "fx",
                this.queue(t, function(t, n) {
                    var r = i.setTimeout(t, e);
                    n.stop = function() {
                        i.clearTimeout(r)
                    }
                })
            }
            ,
            function() {
                var e = s.createElement("input")
                  , t = s.createElement("select")
                  , n = t.appendChild(s.createElement("option"));
                e.type = "checkbox",
                v.checkOn = "" !== e.value,
                v.optSelected = n.selected,
                t.disabled = !0,
                v.optDisabled = !n.disabled,
                (e = s.createElement("input")).value = "t",
                e.type = "radio",
                v.radioValue = "t" === e.value
            }();
            var Ze, et = m.expr.attrHandle;
            m.fn.extend({
                attr: function(e, t) {
                    return M(this, m.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        m.removeAttr(this, e)
                    })
                }
            }),
            m.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(),
                        i = m.attrHooks[t] || (m.expr.match.bool.test(t) ? Ze : void 0)),
                        void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!v.radioValue && "radio" === t && m.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0, o = t && t.match(O);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++]; )
                            r = m.propFix[n] || n,
                            m.expr.match.bool.test(n) && (e[r] = !1),
                            e.removeAttribute(n)
                }
            }),
            Ze = {
                set: function(e, t, n) {
                    return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = et[t] || m.find.attr;
                et[t] = function(e, t, r) {
                    var i, o;
                    return r || (o = et[t],
                    et[t] = i,
                    i = null != n(e, t, r) ? t.toLowerCase() : null,
                    et[t] = o),
                    i
                }
            });
            var tt = /^(?:input|select|textarea|button)$/i
              , nt = /^(?:a|area)$/i;
            m.fn.extend({
                prop: function(e, t) {
                    return M(this, m.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[m.propFix[e] || e]
                    })
                }
            }),
            m.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t,
                        i = m.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = m.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            v.optSelected || (m.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                m.propFix[this.toLowerCase()] = this
            });
            var rt = /[\t\r\n\f]/g;
            function it(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            m.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (m.isFunction(e))
                        return this.each(function(t) {
                            m(this).addClass(e.call(this, t, it(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(O) || []; n = this[u++]; )
                            if (i = it(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                                for (a = 0; o = t[a++]; )
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = m.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (m.isFunction(e))
                        return this.each(function(t) {
                            m(this).removeClass(e.call(this, t, it(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(O) || []; n = this[u++]; )
                            if (i = it(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
                                for (a = 0; o = t[a++]; )
                                    for (; r.indexOf(" " + o + " ") > -1; )
                                        r = r.replace(" " + o + " ", " ");
                                i !== (s = m.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = r(e);
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
                        m(this).toggleClass(e.call(this, n, it(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0,
                            i = m(this),
                            o = e.match(O) || []; t = o[r++]; )
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || ((t = it(this)) && W.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : W.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + it(n) + " ").replace(rt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var ot = /\r/g
              , at = /[\x20\t\r\n\f]+/g;
            m.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = m.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ot, "") : null == n ? "" : n : void 0
                }
            }),
            m.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = m.find.attr(e, "value");
                            return null != t ? t : m.trim(m.text(e)).replace(at, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                                if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = m(n).val(),
                                    o)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--; )
                                ((r = i[a]).selected = m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            m.each(["radio", "checkbox"], function() {
                m.valHooks[this] = {
                    set: function(e, t) {
                        if (m.isArray(t))
                            return e.checked = m.inArray(m(e).val(), t) > -1
                    }
                },
                v.checkOn || (m.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var st = /^(?:focusinfocus|focusoutblur)$/;
            m.extend(m.event, {
                trigger: function(e, t, n, o) {
                    var a, u, l, c, d, f, p, v = [n || s], g = h.call(e, "type") ? e.type : e, y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (u = l = n = n || s,
                    3 !== n.nodeType && 8 !== n.nodeType && !st.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(),
                    y.sort()),
                    d = g.indexOf(":") < 0 && "on" + g,
                    (e = e[m.expando] ? e : new m.Event(g,"object" === r(e) && e)).isTrigger = o ? 2 : 3,
                    e.namespace = y.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : m.makeArray(t, [e]),
                    p = m.event.special[g] || {},
                    o || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                        if (!o && !p.noBubble && !m.isWindow(n)) {
                            for (c = p.delegateType || g,
                            st.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                                v.push(u),
                                l = u;
                            l === (n.ownerDocument || s) && v.push(l.defaultView || l.parentWindow || i)
                        }
                        for (a = 0; (u = v[a++]) && !e.isPropagationStopped(); )
                            e.type = a > 1 ? c : p.bindType || g,
                            (f = (W.get(u, "events") || {})[e.type] && W.get(u, "handle")) && f.apply(u, t),
                            (f = d && u[d]) && f.apply && F(u) && (e.result = f.apply(u, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = g,
                        o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), t) || !F(n) || d && m.isFunction(n[g]) && !m.isWindow(n) && ((l = n[d]) && (n[d] = null),
                        m.event.triggered = g,
                        n[g](),
                        m.event.triggered = void 0,
                        l && (n[d] = l)),
                        e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = m.extend(new m.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    m.event.trigger(r, null, t)
                }
            }),
            m.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        m.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return m.event.trigger(e, t, n, !0)
                }
            }),
            m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                m.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            m.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            v.focusin = "onfocusin"in i,
            v.focusin || m.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    m.event.simulate(t, e.target, m.event.fix(e))
                };
                m.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                          , i = W.access(r, t);
                        i || r.addEventListener(e, n, !0),
                        W.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                          , i = W.access(r, t) - 1;
                        i ? W.access(r, t, i) : (r.removeEventListener(e, n, !0),
                        W.remove(r, t))
                    }
                }
            });
            var ut = i.location
              , lt = m.now()
              , ct = /\?/;
            m.parseJSON = function(e) {
                return JSON.parse(e + "")
            }
            ,
            m.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t = (new i.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e),
                t
            }
            ;
            var dt = /#.*$/
              , ft = /([?&])_=[^&]*/
              , pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , ht = /^(?:GET|HEAD)$/
              , vt = /^\/\//
              , mt = {}
              , gt = {}
              , yt = "*/".concat("*")
              , xt = s.createElement("a");
            function bt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var r, i = 0, o = t.toLowerCase().match(O) || [];
                    if (m.isFunction(n))
                        for (; r = o[i++]; )
                            "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function wt(e, t, n, r) {
                var i = {}
                  , o = e === gt;
                function a(s) {
                    var u;
                    return i[s] = !0,
                    m.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        a(l),
                        !1)
                    }),
                    u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }
            function Tt(e, t) {
                var n, r, i = m.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && m.extend(!0, e, r),
                e
            }
            xt.href = ut.href,
            m.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ut.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": yt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": m.parseJSON,
                        "text xml": m.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Tt(Tt(e, m.ajaxSettings), t) : Tt(m.ajaxSettings, e)
                },
                ajaxPrefilter: bt(mt),
                ajaxTransport: bt(gt),
                ajax: function(e, t) {
                    "object" === r(e) && (t = e,
                    e = void 0),
                    t = t || {};
                    var n, o, a, u, l, c, d, f, p = m.ajaxSetup({}, t), h = p.context || p, v = p.context && (h.nodeType || h.jquery) ? m(h) : m.event, g = m.Deferred(), y = m.Callbacks("once memory"), x = p.statusCode || {}, b = {}, w = {}, T = 0, C = "canceled", k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === T) {
                                if (!u)
                                    for (u = {}; t = pt.exec(a); )
                                        u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === T ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return T || (e = w[n] = w[n] || e,
                            b[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return T || (p.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (T < 2)
                                    for (t in e)
                                        x[t] = [x[t], e[t]];
                                else
                                    k.always(e[k.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return n && n.abort(t),
                            S(0, t),
                            this
                        }
                    };
                    if (g.promise(k).complete = y.add,
                    k.success = k.done,
                    k.error = k.fail,
                    p.url = ((e || p.url || ut.href) + "").replace(dt, "").replace(vt, ut.protocol + "//"),
                    p.type = t.method || t.type || p.method || p.type,
                    p.dataTypes = m.trim(p.dataType || "*").toLowerCase().match(O) || [""],
                    null == p.crossDomain) {
                        c = s.createElement("a");
                        try {
                            c.href = p.url,
                            c.href = c.href,
                            p.crossDomain = xt.protocol + "//" + xt.host != c.protocol + "//" + c.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = m.param(p.data, p.traditional)),
                    wt(mt, p, t, k),
                    2 === T)
                        return k;
                    for (f in (d = m.event && p.global) && 0 == m.active++ && m.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !ht.test(p.type),
                    o = p.url,
                    p.hasContent || (p.data && (o = p.url += (ct.test(o) ? "&" : "?") + p.data,
                    delete p.data),
                    !1 === p.cache && (p.url = ft.test(o) ? o.replace(ft, "$1_=" + lt++) : o + (ct.test(o) ? "&" : "?") + "_=" + lt++)),
                    p.ifModified && (m.lastModified[o] && k.setRequestHeader("If-Modified-Since", m.lastModified[o]),
                    m.etag[o] && k.setRequestHeader("If-None-Match", m.etag[o])),
                    (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                    k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]),
                    p.headers)
                        k.setRequestHeader(f, p.headers[f]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || 2 === T))
                        return k.abort();
                    for (f in C = "abort",
                    {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        k[f](p[f]);
                    if (n = wt(gt, p, t, k)) {
                        if (k.readyState = 1,
                        d && v.trigger("ajaxSend", [k, p]),
                        2 === T)
                            return k;
                        p.async && p.timeout > 0 && (l = i.setTimeout(function() {
                            k.abort("timeout")
                        }, p.timeout));
                        try {
                            T = 1,
                            n.send(b, S)
                        } catch (e) {
                            if (!(T < 2))
                                throw e;
                            S(-1, e)
                        }
                    } else
                        S(-1, "No Transport");
                    function S(e, t, r, s) {
                        var u, c, f, b, w, C = t;
                        2 !== T && (T = 2,
                        l && i.clearTimeout(l),
                        n = void 0,
                        a = s || "",
                        k.readyState = e > 0 ? 4 : 0,
                        u = e >= 200 && e < 300 || 304 === e,
                        r && (b = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                                u.shift(),
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0]in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o),
                                n[o]
                        }(p, k, r)),
                        b = function(e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                u = o,
                                o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                    c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws)
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, b, k, u),
                        u ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (m.lastModified[o] = w),
                        (w = k.getResponseHeader("etag")) && (m.etag[o] = w)),
                        204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                        c = b.data,
                        u = !(f = b.error))) : (f = C,
                        !e && C || (C = "error",
                        e < 0 && (e = 0))),
                        k.status = e,
                        k.statusText = (t || C) + "",
                        u ? g.resolveWith(h, [c, C, k]) : g.rejectWith(h, [k, C, f]),
                        k.statusCode(x),
                        x = void 0,
                        d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? c : f]),
                        y.fireWith(h, [k, C]),
                        d && (v.trigger("ajaxComplete", [k, p]),
                        --m.active || m.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, n) {
                    return m.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return m.get(e, void 0, t, "script")
                }
            }),
            m.each(["get", "post"], function(e, t) {
                m[t] = function(e, n, r, i) {
                    return m.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    m.ajax(m.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, m.isPlainObject(e) && e))
                }
            }),
            m._evalUrl = function(e) {
                return m.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            m.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return m.isFunction(e) ? this.each(function(t) {
                        m(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = m(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this)
                },
                wrapInner: function(e) {
                    return m.isFunction(e) ? this.each(function(t) {
                        m(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = m(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = m.isFunction(e);
                    return this.each(function(n) {
                        m(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            m.expr.filters.hidden = function(e) {
                return !m.expr.filters.visible(e)
            }
            ,
            m.expr.filters.visible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            }
            ;
            var Ct = /%20/g
              , kt = /\[\]$/
              , St = /\r?\n/g
              , jt = /^(?:submit|button|image|reset|file)$/i
              , _t = /^(?:input|select|textarea|keygen)/i;
            function Et(e, t, n, i) {
                var o;
                if (m.isArray(t))
                    m.each(t, function(t, o) {
                        n || kt.test(e) ? i(e, o) : Et(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i)
                    });
                else if (n || "object" !== m.type(t))
                    i(e, t);
                else
                    for (o in t)
                        Et(e + "[" + o + "]", t[o], n, i)
            }
            m.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    t = m.isFunction(t) ? t() : null == t ? "" : t,
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional),
                m.isArray(e) || e.jquery && !m.isPlainObject(e))
                    m.each(e, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        Et(n, e[n], t, i);
                return r.join("&").replace(Ct, "+")
            }
            ,
            m.fn.extend({
                serialize: function() {
                    return m.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = m.prop(this, "elements");
                        return e ? m.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !m(this).is(":disabled") && _t.test(this.nodeName) && !jt.test(e) && (this.checked || !Q.test(e))
                    }).map(function(e, t) {
                        var n = m(this).val();
                        return null == n ? null : m.isArray(n) ? m.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(St, "\r\n")
                        }
                    }).get()
                }
            }),
            m.ajaxSettings.xhr = function() {
                try {
                    return new i.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var Nt = {
                0: 200,
                1223: 204
            }
              , At = m.ajaxSettings.xhr();
            v.cors = !!At && "withCredentials"in At,
            v.ajax = At = !!At,
            m.ajaxTransport(function(e) {
                var t, n;
                if (v.cors || At && !e.crossDomain)
                    return {
                        send: function(r, o) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (a in e.xhrFields)
                                    s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                            e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                            r)
                                s.setRequestHeader(a, r[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Nt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }
                            ,
                            s.onload = t(),
                            n = s.onerror = t("error"),
                            void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                4 === s.readyState && i.setTimeout(function() {
                                    t && n()
                                })
                            }
                            ,
                            t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
            }),
            m.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return m.globalEval(e),
                        e
                    }
                }
            }),
            m.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            m.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain)
                    return {
                        send: function(r, i) {
                            t = m("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            s.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            });
            var Dt = []
              , Lt = /(=)\?(?=&|$)|\?\?/;
            m.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Dt.pop() || m.expando + "_" + lt++;
                    return this[e] = !0,
                    e
                }
            }),
            m.ajaxPrefilter("json jsonp", function(e, t, n) {
                var r, o, a, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return r = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    s ? e[s] = e[s].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function() {
                        return a || m.error(r + " was not called"),
                        a[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    o = i[r],
                    i[r] = function() {
                        a = arguments
                    }
                    ,
                    n.always(function() {
                        void 0 === o ? m(i).removeProp(r) : i[r] = o,
                        e[r] && (e.jsonpCallback = t.jsonpCallback,
                        Dt.push(r)),
                        a && m.isFunction(o) && o(a[0]),
                        a = o = void 0
                    }),
                    "script"
            }),
            m.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (n = t,
                t = !1),
                t = t || s;
                var r = j.exec(e)
                  , i = !n && [];
                return r ? [t.createElement(r[1])] : (r = re([e], t, i),
                i && i.length && m(i).remove(),
                m.merge([], r.childNodes))
            }
            ;
            var qt = m.fn.load;
            function Pt(e) {
                return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            m.fn.load = function(e, t, n) {
                if ("string" != typeof e && qt)
                    return qt.apply(this, arguments);
                var i, o, a, s = this, u = e.indexOf(" ");
                return u > -1 && (i = m.trim(e.slice(u)),
                e = e.slice(0, u)),
                m.isFunction(t) ? (n = t,
                t = void 0) : t && "object" === r(t) && (o = "POST"),
                s.length > 0 && m.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments,
                    s.html(i ? m("<div>").append(m.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                m.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            m.expr.filters.animated = function(e) {
                return m.grep(m.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            m.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = m.css(e, "position"), c = m(e), d = {};
                    "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = m.css(e, "top"),
                    u = m.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                    i = r.left) : (a = parseFloat(o) || 0,
                    i = parseFloat(u) || 0),
                    m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))),
                    null != t.top && (d.top = t.top - s.top + a),
                    null != t.left && (d.left = t.left - s.left + i),
                    "using"in t ? t.using.call(e, d) : c.css(d)
                }
            },
            m.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            m.offset.setOffset(this, e, t)
                        });
                    var t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    }, o = r && r.ownerDocument;
                    return o ? (t = o.documentElement,
                    m.contains(t, r) ? (i = r.getBoundingClientRect(),
                    n = Pt(o),
                    {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0], r = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        m.nodeName(e[0], "html") || (r = e.offset()),
                        r.top += m.css(e[0], "borderTopWidth", !0),
                        r.left += m.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - r.top - m.css(n, "marginTop", !0),
                            left: t.left - r.left - m.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === m.css(e, "position"); )
                            e = e.offsetParent;
                        return e || De
                    })
                }
            }),
            m.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                m.fn[e] = function(r) {
                    return M(this, function(e, r, i) {
                        var o = Pt(e);
                        if (void 0 === i)
                            return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }),
            m.each(["top", "left"], function(e, t) {
                m.cssHooks[t] = qe(v.pixelPosition, function(e, n) {
                    if (n)
                        return n = Le(e, t),
                        Ee.test(n) ? m(e).position()[t] + "px" : n
                })
            }),
            m.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                m.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    m.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r)
                          , a = n || (!0 === r || !0 === i ? "margin" : "border");
                        return M(this, function(t, n, r) {
                            var i;
                            return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }),
            m.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                size: function() {
                    return this.length
                }
            }),
            m.fn.andSelf = m.fn.addBack,
            void 0 === (n = function() {
                return m
            }
            .apply(t, [])) || (e.exports = n);
            var Ot = i.jQuery
              , Ht = i.$;
            return m.noConflict = function(e) {
                return i.$ === m && (i.$ = Ht),
                e && i.jQuery === m && (i.jQuery = Ot),
                m
            }
            ,
            o || (i.jQuery = i.$ = m),
            m
        })
    }
    ).call(this, n(5)(e))
}
, function(e, t) {
    e.exports = prestashop
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.psShowHide = /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    function() {
        (0,
        r.default)(".ps-shown-by-js").show(),
        (0,
        r.default)(".ps-hidden-by-js").hide()
    }
    ,
    t.psGetRequestParameter = i,
    t.refreshCheckoutPage = function() {
        if (null !== i("updatedTransaction"))
            window.location.reload();
        else {
            var e = i();
            e.updatedTransaction = 1;
            var t = [];
            for (var n in e) {
                var r = e[n];
                t.push(n + "=" + r)
            }
            window.location.href = window.location.pathname + "?" + t.join("&")
        }
    }
    ;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    function i(e) {
        var t = {};
        return window.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(e, n, r) {
            t[n] = void 0 !== r ? r : ""
        }),
        void 0 !== e ? t[e] ? t[e] : null : t
    }
}
, function(e, t, n) {
    e.exports = n(4)
}
, function(e, t, n) {
    "use strict";
    var r = s(n(0));
    n(6),
    n(7),
    n(11),
    n(12),
    n(13),
    n(14);
    var i = s(n(1))
      , o = s(n(15))
      , a = n(2);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    for (var u in window.$ = r.default,
    window.jQuery = r.default,
    o.default.prototype)
        i.default[u] = o.default.prototype[u];
    (0,
    r.default)(document).ready(function() {
        (0,
        a.psShowHide)()
    })
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = a(n(0))
      , i = a(n(1))
      , o = n(2);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    (0,
    r.default)(document).ready(function() {
        i.default.on("updateCart", function(e) {
            i.default.cart = e.reason.cart;
            var t = (0,
            r.default)(".js-cart").data("refresh-url");
            if (t) {
                var n = {};
                e && e.reason && (n = {
                    id_product_attribute: e.reason.idProductAttribute,
                    id_product: e.reason.idProduct
                }),
                r.default.post(t, n).then(function(e) {
                    (0,
                    r.default)(".cart-detailed-totals").replaceWith(e.cart_detailed_totals),
                    (0,
                    r.default)(".cart-summary-items-subtotal").replaceWith(e.cart_summary_items_subtotal),
                    (0,
                    r.default)(".cart-summary-totals").replaceWith(e.cart_summary_totals),
                    (0,
                    r.default)(".cart-detailed-actions").replaceWith(e.cart_detailed_actions),
                    (0,
                    r.default)(".cart-voucher").replaceWith(e.cart_voucher),
                    (0,
                    r.default)(".cart-overview").replaceWith(e.cart_detailed),
                    (0,
                    r.default)("#product_customization_id").val(0),
                    (0,
                    r.default)(".js-cart-line-product-quantity").each(function(e, t) {
                        var n = (0,
                        r.default)(t);
                        n.attr("value", n.val())
                    }),
                    (0,
                    r.default)(".js-cart-payment-step-refresh").length && (0,
                    o.refreshCheckoutPage)(),
                    i.default.emit("updatedCart", {
                        eventType: "updateCart",
                        resp: e
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "updateCart",
                        resp: e
                    })
                })
            }
        });
        var e = (0,
        r.default)("body");
        e.on("click", '[data-button-action="add-to-cart"]', function(e) {
            if (e.preventDefault(),
            (0,
            r.default)("#quantity_wanted").val() > (0,
            r.default)("[data-stock]").data("stock") && 0 === (0,
            r.default)("[data-allow-oosp]").data("allow-oosp").length)
                (0,
                r.default)('[data-button-action="add-to-cart"]').attr("disabled", "disabled");
            else {
                var t = (0,
                r.default)(e.target).closest("form")
                  , n = t.serialize() + "&add=1&action=update"
                  , o = t.attr("action")
                  , a = function(e) {
                    e.parents(".product-add-to-cart").first().find(".product-minimal-quantity").addClass("error"),
                    e.parent().find("label").addClass("error")
                }
                  , s = t.find("input[min]");
                if (!function(e) {
                    var t = !0;
                    return e.each(function(e, n) {
                        var i = (0,
                        r.default)(n)
                          , o = parseInt(i.attr("min"), 10);
                        o && i.val() < o && (a(i),
                        t = !1)
                    }),
                    t
                }(s))
                    return void a(s);
                r.default.post(o, n, null, "json").then(function(e) {
                    i.default.emit("updateCart", {
                        reason: {
                            idProduct: e.id_product,
                            idProductAttribute: e.id_product_attribute,
                            idCustomization: e.id_customization,
                            linkAction: "add-to-cart",
                            cart: e.cart
                        },
                        resp: e
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "addProductToCart",
                        resp: e
                    })
                })
            }
        }),
        e.on("submit", '[data-link-action="add-voucher"]', function(e) {
            e.preventDefault();
            var t = (0,
            r.default)(e.currentTarget)
              , n = t.attr("action");
            0 === t.find("[name=action]").length && t.append((0,
            r.default)("<input>", {
                type: "hidden",
                name: "ajax",
                value: 1
            })),
            0 === t.find("[name=action]").length && t.append((0,
            r.default)("<input>", {
                type: "hidden",
                name: "action",
                value: "update"
            })),
            r.default.post(n, t.serialize(), null, "json").then(function(t) {
                t.hasError ? (0,
                r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]) : i.default.emit("updateCart", {
                    reason: e.target.dataset,
                    resp: t
                })
            }).fail(function(e) {
                i.default.emit("handleError", {
                    eventType: "updateCart",
                    resp: e
                })
            })
        })
    })
}
, function(e, t, n) {
    "use strict";
    var r = u(n(0))
      , i = u(n(1))
      , o = u(n(8))
      , a = u(n(9))
      , s = u(n(10));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    function l() {
        (0,
        o.default)(),
        (0,
        a.default)(),
        (0,
        s.default)(),
        function() {
            (0,
            r.default)(".checkout-step").off("click");
            var e = (0,
            r.default)("#checkout-personal-information-step").nextAll();
            (0,
            r.default)(".js-current-step").prevAll().add(e).on("click", function(e) {
                var t = (0,
                r.default)(e.target).closest(".checkout-step");
                t.hasClass("-unreachable") || ((0,
                r.default)(".js-current-step, .-current").removeClass("js-current-step -current"),
                t.toggleClass("-current"),
                t.toggleClass("js-current-step")),
                i.default.emit("changedCheckoutStep", {
                    event: e
                })
            }),
            (0,
            r.default)(".js-current-step:not(#checkout-personal-information-step)").nextAll().on("click", function(e) {
                (0,
                r.default)(".js-current-step button.continue").click(),
                i.default.emit("changedCheckoutStep", {
                    event: e
                })
            })
        }()
    }
    (0,
    r.default)(document).ready(function() {
        1 === (0,
        r.default)("#checkout").length && l()
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        (0,
        r.default)(".js-edit-addresses").on("click", function(e) {
            e.stopPropagation(),
            (0,
            r.default)("#checkout-addresses-step").trigger("click"),
            i.default.emit("editAddress")
        }),
        (0,
        r.default)("#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]").on("click", function() {
            (0,
            r.default)(".address-item").removeClass("selected"),
            (0,
            r.default)(".address-item:has(input[type=radio]:checked)").addClass("selected");
            var e = (0,
            r.default)(".js-address-error").prop("id").split("-").pop()
              , t = (0,
            r.default)("#not-valid-addresses").val()
              , n = this.name.split("_").pop()
              , i = (0,
            r.default)(".js-address-error[name=alert-" + n + "]");
            l(!1, e, n),
            "" !== t && null === s && t.split(",").indexOf(this.value) >= 0 ? (i.show(),
            l(!0, this.value, n),
            (0,
            r.default)(".js-address-error").prop("id", "id-failure-address-" + this.value)) : i.hide();
            var o = (0,
            r.default)(".js-address-error:visible");
            c(o.length <= 0)
        })
    }
    ;
    var r = a(n(0))
      , i = a(n(1))
      , o = n(2);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    var s = (0,
    o.psGetRequestParameter)("editAddress")
      , u = (0,
    o.psGetRequestParameter)("use_same_address");
    (0,
    r.default)(window).load(function() {
        var e = (0,
        r.default)(".js-address-error:visible");
        if (0 === parseInt(u) && (0,
        r.default)("#invoice-addresses input[type=radio]:checked").trigger("click"),
        (null !== s || (0,
        r.default)(".js-address-form:visible").length > 1) && e.hide(),
        e.length > 0) {
            var t = (0,
            r.default)(".js-address-error").prop("id").split("-").pop();
            e.each(function() {
                l(!0, t, (0,
                r.default)(this).attr("name").split("-").pop())
            })
        }
        e = (0,
        r.default)(".js-address-error:visible"),
        c(e.length <= 0)
    });
    var l = function(e, t, n) {
        var i = "#7a7a7a";
        e && ((0,
        r.default)("#" + n + "-addresses a.edit-address").prop("style", "color: #7a7a7a !important"),
        i = "#2fb5d2"),
        (0,
        r.default)("#id-address-" + n + "-address-" + t + " a.edit-address").prop("style", "color: " + i + " !important")
    }
      , c = function(e) {
        (0,
        r.default)("button[name=confirm-addresses]").prop("disabled", !e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    function() {
        var e = (0,
        r.default)("body");
        e.on("change", "#js-delivery input", function(e) {
            var t = (0,
            r.default)("#js-delivery")
              , n = t.serialize()
              , a = (0,
            r.default)(e.currentTarget).parents("div.delivery-option");
            r.default.post(t.data("url-update"), n).then(function(e) {
                (0,
                r.default)("#js-checkout-summary").replaceWith(e.preview),
                (0,
                r.default)(".js-cart-payment-step-refresh").length && (0,
                o.refreshCheckoutPage)(),
                i.default.emit("updatedDeliveryForm", {
                    dataForm: t.serializeArray(),
                    deliveryOption: a,
                    resp: e
                })
            }).fail(function(e) {
                i.default.trigger("handleError", {
                    eventType: "updateDeliveryOptions",
                    resp: e
                })
            })
        }),
        e.on("click", ".js-edit-delivery", function(e) {
            e.stopPropagation(),
            (0,
            r.default)("#checkout-delivery-step").trigger("click"),
            i.default.emit("editDelivery")
        })
    }
    ;
    var r = a(n(0))
      , i = a(n(1))
      , o = n(2);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = new o;
        return e.init(),
        e
    }
    ;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.confirmationSelector = "#payment-confirmation",
            this.paymentSelector = "#payment-section",
            this.conditionsSelector = "#conditions-to-approve",
            this.conditionAlertSelector = ".js-alert-payment-conditions",
            this.additionalInformatonSelector = ".js-additional-information",
            this.optionsForm = ".js-payment-option-form"
        }
        return function(e, t, n) {
            t && i(e.prototype, t),
            n && i(e, n)
        }(e, [{
            key: "init",
            value: function() {
                (0,
                r.default)(this.paymentSelector + ' input[type="checkbox"][disabled]').attr("disabled", !1);
                var e = (0,
                r.default)("body");
                e.on("change", this.conditionsSelector + ' input[type="checkbox"]', r.default.proxy(this.toggleOrderButton, this)),
                e.on("change", 'input[name="payment-option"]', r.default.proxy(this.toggleOrderButton, this)),
                e.on("click", this.confirmationSelector + " button", r.default.proxy(this.confirm, this)),
                this.collapseOptions()
            }
        }, {
            key: "collapseOptions",
            value: function() {
                (0,
                r.default)(this.additionalInformatonSelector + ", " + this.optionsForm).hide()
            }
        }, {
            key: "getSelectedOption",
            value: function() {
                return (0,
                r.default)('input[name="payment-option"]:checked').attr("id")
            }
        }, {
            key: "hideConfirmation",
            value: function() {
                (0,
                r.default)(this.confirmationSelector).hide()
            }
        }, {
            key: "showConfirmation",
            value: function() {
                (0,
                r.default)(this.confirmationSelector).show()
            }
        }, {
            key: "toggleOrderButton",
            value: function() {
                var e = !0;
                (0,
                r.default)(this.conditionsSelector + ' input[type="checkbox"]').each(function(t, n) {
                    n.checked || (e = !1)
                }),
                this.collapseOptions();
                var t = this.getSelectedOption();
                if (t || (e = !1),
                (0,
                r.default)("#" + t + "-additional-information").show(),
                (0,
                r.default)("#pay-with-" + t + "-form").show(),
                (0,
                r.default)(".js-payment-binary").hide(),
                (0,
                r.default)("#" + t).hasClass("binary")) {
                    var n = this.getPaymentOptionSelector(t);
                    this.hideConfirmation(),
                    (0,
                    r.default)(n).show(),
                    e ? (0,
                    r.default)(n).removeClass("disabled") : (0,
                    r.default)(n).addClass("disabled")
                } else
                    this.showConfirmation(),
                    (0,
                    r.default)(this.confirmationSelector + " button").attr("disabled", !e),
                    e ? (0,
                    r.default)(this.conditionAlertSelector).hide() : (0,
                    r.default)(this.conditionAlertSelector).show()
            }
        }, {
            key: "getPaymentOptionSelector",
            value: function(e) {
                var t = (0,
                r.default)("#".concat(e)).data("module-name");
                return ".js-payment-".concat(t)
            }
        }, {
            key: "confirm",
            value: function() {
                var e = this.getSelectedOption();
                e && ((0,
                r.default)(this.confirmationSelector + " button").prop("disabled", !0),
                (0,
                r.default)("#pay-with-" + e + "-form form").submit())
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    (n(0));
    var i = !1;
    function o(e) {
        i = !1,
        prestashop.emit("updateProductList", e),
        window.history.pushState(e, document.title, e.current_url),
        window.scrollTo(0, 0)
    }
    function a() {
        i = !1
    }
    (0,
    r.default)(document).ready(function() {
        prestashop.on("updateFacets", function(e) {
            !function(e) {
                if (i)
                    ;
                else {
                    var t = [e, e.indexOf("?") >= 0 ? "&" : "?", "from-xhr"].join("");
                    r.default.get(t, null, null, "json").then(o).fail(a)
                }
            }(e)
        })
    })
}
, function(e, t, n) {
    "use strict";
    var r = o(n(0))
      , i = o(n(1));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    (0,
    r.default)(document).ready(function() {
        (0,
        r.default)("body").on("click", ".quick-view", function(e) {
            i.default.emit("clickQuickView", {
                dataset: (0,
                r.default)(e.target).closest(".js-product-miniature").data()
            }),
            e.preventDefault()
        })
    })
}
, function(e, t, n) {
    "use strict";
    var r = a(n(0))
      , i = a(n(1))
      , o = n(2);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    /**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
    var s = null
      , u = null;
    function l(e, t, n) {
        var a = (0,
        r.default)(".product-actions")
          , l = a.find("#quantity_wanted:first")
          , f = a.find("form:first").serialize()
          , p = (0,
        o.psGetRequestParameter)("preview");
        if (p = null !== p ? "&preview=" + p : "",
        null !== n) {
            if (!e || "keyup" !== e.type || l.val() !== l.data("old-value")) {
                l.data("old-value", l.val()),
                u && clearTimeout(u);
                var h = 30;
                "updatedProductQuantity" === t && (h = 750),
                u = setTimeout(function() {
                    "" !== f && (s = r.default.ajax({
                        url: n + (-1 === n.indexOf("?") ? "?" : "&") + f + p,
                        method: "POST",
                        data: {
                            ajax: 1,
                            action: "refresh",
                            quantity_wanted: l.val()
                        },
                        dataType: "json",
                        beforeSend: function() {
                            null !== s && s.abort()
                        },
                        error: function(e, t, n) {
                            "abort" !== t && 0 === (0,
                            r.default)("section#main > .ajax-error").length && d((0,
                            r.default)("#product-availability"), "An error occurred while processing your request")
                        },
                        success: function(e, n, o) {
                            var a = (0,
                            r.default)("<div>").append(e.product_cover_thumbnails);
                            (0,
                            r.default)(".images-container").html() !== a.find(".images-container").html() && (0,
                            r.default)(".images-container").replaceWith(e.product_cover_thumbnails),
                            (0,
                            r.default)(".product-prices").replaceWith(e.product_prices),
                            (0,
                            r.default)(".product-customization").replaceWith(e.product_customization),
                            (0,
                            r.default)(".product-variants").replaceWith(e.product_variants),
                            (0,
                            r.default)(".product-discounts").replaceWith(e.product_discounts),
                            (0,
                            r.default)(".product-additional-info").replaceWith(e.product_additional_info),
                            (0,
                            r.default)("#product-details").replaceWith(e.product_details),
                            function(e) {
                                var t = null;
                                (0,
                                r.default)(e.product_add_to_cart).each(function(e, n) {
                                    if ((0,
                                    r.default)(n).hasClass("product-add-to-cart"))
                                        return t = (0,
                                        r.default)(n),
                                        !1
                                }),
                                null === t && d((0,
                                r.default)("#product-availability"), "An error occurred while processing your request");
                                var n = (0,
                                r.default)(".product-add-to-cart");
                                c({
                                    $addToCartSnippet: t,
                                    $targetParent: n,
                                    targetSelector: ".add"
                                }),
                                c({
                                    $addToCartSnippet: t,
                                    $targetParent: n,
                                    targetSelector: "#product-availability"
                                }),
                                c({
                                    $addToCartSnippet: t,
                                    $targetParent: n,
                                    targetSelector: ".product-minimal-quantity"
                                })
                            }(e);
                            var s = parseInt(e.product_minimal_quantity, 10);
                            console.log("k3n :: updatedProductQuantity");
                            isNaN(s) || "updatedProductQuantity" === t || 
                            l.val(s),
                            l.attr("value",s),
                            l.attr("min",s), 
                            l.attr("step", l.attr("step") || 1),
                            i.default.emit("updatedProduct",e);
                            console.log( 'k3n-sellinmultiples: ' + (0,r.default)('.k3n-sellinmultiples').length );
                        },
                        complete: function(e, t) {
                            s = null,
                            u = null
                        }
                    }))
                }
                .bind(s, u), h)
            }
        } else
            d((0,
            r.default)("#product-availability"), "An error occurred while processing your request")
    }
    function c(e) {
        var t = (0,
        r.default)(e.$targetParent.find(e.targetSelector));
        if (!(t.length <= 0)) {
            var n = e.$addToCartSnippet.find(e.targetSelector);
            n.length > 0 ? t.replaceWith(n[0].outerHTML) : t.html("")
        }
    }
    function d(e, t) {
        var n = (0,
        r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(t, "</div>"));
        e.replaceWith(n)
    }
    (0,
    r.default)(document).ready(function() {
        (0,
        r.default)("body").on("change touchspin.on.startspin", ".product-variants *[name]", function(e) {
            i.default.emit("updateProduct", {
                eventType: "updatedProductCombination",
                event: e,
                resp: {},
                reason: {
                    productUrl: i.default.urls.pages.product || ""
                }
            })
        }),
        (0,
        r.default)("body").on("click", ".product-refresh", function(e, t) {
            e.preventDefault();
            var n = "updatedProductCombination";
            void 0 !== t && t.eventType && (n = t.eventType),
            i.default.emit("updateProduct", {
                eventType: n,
                event: e,
                resp: {},
                reason: {
                    productUrl: i.default.urls.pages.product || ""
                }
            })
        }),
        i.default.on("updateProduct", function(e) {
            var t = e.eventType
              , n = e.event;
            (function() {
                var e = r.default.Deferred()
                  , t = (0,
                r.default)(".product-actions")
                  , n = (0,
                r.default)("#quantity_wanted");
                if (null !== i.default && null !== i.default.urls && null !== i.default.urls.pages && "" !== i.default.urls.pages.product && null !== i.default.urls.pages.product)
                    return e.resolve(i.default.urls.pages.product),
                    e.promise();
                var o = {};
                return (0,
                r.default)(t.find("form:first").serializeArray()).each(function(e, t) {
                    o[t.name] = t.value
                }),
                r.default.ajax({
                    url: t.find("form:first").attr("action"),
                    method: "POST",
                    data: Object.assign({
                        ajax: 1,
                        action: "productrefresh",
                        quantity_wanted: n.val()
                    }, o),
                    dataType: "json",
                    success: function(t) {
                        var n = t.productUrl;
                        i.default.page.canonical = n,
                        e.resolve(n)
                    },
                    error: function(t, n, r) {
                        e.reject({
                            jqXHR: t,
                            textStatus: n,
                            errorThrown: r
                        })
                    }
                }),
                e.promise()
            }
            )().done(function(e) {
                return l(n, t, e)
            }).fail(function() {
                0 === (0,
                r.default)("section#main > .ajax-error").length && d((0,
                r.default)("#product-availability"), "An error occurred while processing your request")
            })
        }),
        i.default.on("updatedProduct", function(e) {
            if (e.product_url && e.id_product_attribute && !(0,
            r.default)(".modal.quickview").length) {
                var t = document.title;
                e.product_title && (t = e.product_title,
                (0,
                r.default)(document).attr("title", t)),
                window.history.replaceState({
                    id_product_attribute: e.id_product_attribute
                }, t, e.product_url)
            }
        })
    })
}
, function(e, t, n) {
    "use strict";
    var r = o(n(0))
      , i = o(n(1));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    (0,
    r.default)(document).ready(function() {
        !function(e) {
            (0,
            r.default)("body").on("change", e.country, function() {
                var t = {
                    id_country: (0,
                    r.default)(e.country).val(),
                    id_address: (0,
                    r.default)(e.address + " form").data("id-address")
                }
                  , n = (0,
                r.default)(e.address + " form").data("refresh-url")
                  , o = e.address + " input";
                r.default.post(n, t).then(function(t) {
                    var n = [];
                    (0,
                    r.default)(o).each(function() {
                        n[(0,
                        r.default)(this).prop("name")] = (0,
                        r.default)(this).val()
                    }),
                    (0,
                    r.default)(e.address).replaceWith(t.address_form),
                    (0,
                    r.default)(o).each(function() {
                        (0,
                        r.default)(this).val(n[(0,
                        r.default)(this).prop("name")])
                    }),
                    i.default.emit("updatedAddressForm", {
                        target: (0,
                        r.default)(e.address),
                        resp: t
                    })
                }).fail(function(e) {
                    i.default.emit("handleError", {
                        eventType: "updateAddressForm",
                        resp: e
                    })
                })
            })
        }({
            country: ".js-country",
            address: ".js-address-form"
        })
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function o(e) {
        return "function" == typeof e
    }
    function a(e) {
        return "object" === r(e) && null !== e
    }
    function s(e) {
        return void 0 === e
    }
    e.exports = i,
    i.EventEmitter = i,
    i.prototype._events = void 0,
    i.prototype._maxListeners = void 0,
    i.defaultMaxListeners = 10,
    i.prototype.setMaxListeners = function(e) {
        if (!function(e) {
            return "number" == typeof e
        }(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
        return this._maxListeners = e,
        this
    }
    ,
    i.prototype.emit = function(e) {
        var t, n, r, i, u, l;
        if (this._events || (this._events = {}),
        "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1])instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t,
            c
        }
        if (s(n = this._events[e]))
            return !1;
        if (o(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                i = Array.prototype.slice.call(arguments, 1),
                n.apply(this, i)
            }
        else if (a(n))
            for (i = Array.prototype.slice.call(arguments, 1),
            r = (l = n.slice()).length,
            u = 0; u < r; u++)
                l[u].apply(this, i);
        return !0
    }
    ,
    i.prototype.addListener = function(e, t) {
        var n;
        if (!o(t))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t),
        this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
        a(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    i.prototype.on = i.prototype.addListener,
    i.prototype.once = function(e, t) {
        if (!o(t))
            throw TypeError("listener must be a function");
        var n = !1;
        function r() {
            this.removeListener(e, r),
            n || (n = !0,
            t.apply(this, arguments))
        }
        return r.listener = t,
        this.on(e, r),
        this
    }
    ,
    i.prototype.removeListener = function(e, t) {
        var n, r, i, s;
        if (!o(t))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[e])
            return this;
        if (i = (n = this._events[e]).length,
        r = -1,
        n === t || o(n.listener) && n.listener === t)
            delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(n)) {
            for (s = i; s-- > 0; )
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                }
            if (r < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[e]) : n.splice(r, 1),
            this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }
    ,
    i.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
            this;
        if (0 === arguments.length) {
            for (t in this._events)
                "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (o(n = this._events[e]))
            this.removeListener(e, n);
        else if (n)
            for (; n.length; )
                this.removeListener(e, n[n.length - 1]);
        return delete this._events[e],
        this
    }
    ,
    i.prototype.listeners = function(e) {
        return this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }
    ,
    i.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (o(t))
                return 1;
            if (t)
                return t.length
        }
        return 0
    }
    ,
    i.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}
]);
//# sourceMappingURL=core.js.map
