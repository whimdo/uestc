(()=>{
    var e, t = {
        679: (e,t,n)=>{
            "use strict";
            var r = n(864)
              , a = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
              , l = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
              , o = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
              , i = {};
            function u(e) {
                return r.isMemo(e) ? o : i[e.$$typeof] || a
            }
            i[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            },
            i[r.Memo] = o;
            var s = Object.defineProperty
              , c = Object.getOwnPropertyNames
              , f = Object.getOwnPropertySymbols
              , d = Object.getOwnPropertyDescriptor
              , p = Object.getPrototypeOf
              , h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (h) {
                        var a = p(n);
                        a && a !== h && e(t, a, r)
                    }
                    var o = c(n);
                    f && (o = o.concat(f(n)));
                    for (var i = u(t), m = u(n), g = 0; g < o.length; ++g) {
                        var v = o[g];
                        if (!(l[v] || r && r[v] || m && m[v] || i && i[v])) {
                            var y = d(n, v);
                            try {
                                s(t, v, y)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        }
        ,
        145: (e,t)=>{
            "use strict";
            function n(e) {
                return "object" != typeof e || "toString"in e ? e : Object.prototype.toString.call(e).slice(8, -1)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "object" == typeof process && !0;
            function a(e, t) {
                if (!e) {
                    if (r)
                        throw new Error("Invariant failed");
                    throw new Error(t())
                }
            }
            t.invariant = a;
            var l = Object.prototype.hasOwnProperty
              , o = Array.prototype.splice
              , i = Object.prototype.toString;
            function u(e) {
                return i.call(e).slice(8, -1)
            }
            var s = Object.assign || function(e, t) {
                return c(t).forEach((function(n) {
                    l.call(t, n) && (e[n] = t[n])
                }
                )),
                e
            }
              , c = "function" == typeof Object.getOwnPropertySymbols ? function(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols(e))
            }
            : function(e) {
                return Object.keys(e)
            }
            ;
            function f(e) {
                return Array.isArray(e) ? s(e.constructor(e.length), e) : "Map" === u(e) ? new Map(e) : "Set" === u(e) ? new Set(e) : e && "object" == typeof e ? s(Object.create(Object.getPrototypeOf(e)), e) : e
            }
            var d = function() {
                function e() {
                    this.commands = s({}, p),
                    this.update = this.update.bind(this),
                    this.update.extend = this.extend = this.extend.bind(this),
                    this.update.isEquals = function(e, t) {
                        return e === t
                    }
                    ,
                    this.update.newContext = function() {
                        return (new e).update
                    }
                }
                return Object.defineProperty(e.prototype, "isEquals", {
                    get: function() {
                        return this.update.isEquals
                    },
                    set: function(e) {
                        this.update.isEquals = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.extend = function(e, t) {
                    this.commands[e] = t
                }
                ,
                e.prototype.update = function(e, t) {
                    var n = this
                      , r = "function" == typeof t ? {
                        $apply: t
                    } : t;
                    Array.isArray(e) && Array.isArray(r) || a(!Array.isArray(r), (function() {
                        return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."
                    }
                    )),
                    a("object" == typeof r && null !== r, (function() {
                        return "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: " + Object.keys(n.commands).join(", ") + "."
                    }
                    ));
                    var o = e;
                    return c(r).forEach((function(t) {
                        if (l.call(n.commands, t)) {
                            var a = e === o;
                            o = n.commands[t](r[t], o, r, e),
                            a && n.isEquals(o, e) && (o = e)
                        } else {
                            var i = "Map" === u(e) ? n.update(e.get(t), r[t]) : n.update(e[t], r[t])
                              , s = "Map" === u(o) ? o.get(t) : o[t];
                            n.isEquals(i, s) && (void 0 !== i || l.call(e, t)) || (o === e && (o = f(e)),
                            "Map" === u(o) ? o.set(t, i) : o[t] = i)
                        }
                    }
                    )),
                    o
                }
                ,
                e
            }();
            t.Context = d;
            var p = {
                $push: function(e, t, n) {
                    return m(t, n, "$push"),
                    e.length ? t.concat(e) : t
                },
                $unshift: function(e, t, n) {
                    return m(t, n, "$unshift"),
                    e.length ? e.concat(t) : t
                },
                $splice: function(e, t, r, l) {
                    return function(e, t) {
                        a(Array.isArray(e), (function() {
                            return "Expected $splice target to be an array; got " + n(e)
                        }
                        )),
                        v(t.$splice)
                    }(t, r),
                    e.forEach((function(e) {
                        v(e),
                        t === l && e.length && (t = f(l)),
                        o.apply(t, e)
                    }
                    )),
                    t
                },
                $set: function(e, t, n) {
                    return function(e) {
                        a(1 === Object.keys(e).length, (function() {
                            return "Cannot have more than one key in an object with $set"
                        }
                        ))
                    }(n),
                    e
                },
                $toggle: function(e, t) {
                    g(e, "$toggle");
                    var n = e.length ? f(t) : t;
                    return e.forEach((function(e) {
                        n[e] = !t[e]
                    }
                    )),
                    n
                },
                $unset: function(e, t, n, r) {
                    return g(e, "$unset"),
                    e.forEach((function(e) {
                        Object.hasOwnProperty.call(t, e) && (t === r && (t = f(r)),
                        delete t[e])
                    }
                    )),
                    t
                },
                $add: function(e, t, n, r) {
                    return y(t, "$add"),
                    g(e, "$add"),
                    "Map" === u(t) ? e.forEach((function(e) {
                        var n = e[0]
                          , a = e[1];
                        t === r && t.get(n) !== a && (t = f(r)),
                        t.set(n, a)
                    }
                    )) : e.forEach((function(e) {
                        t !== r || t.has(e) || (t = f(r)),
                        t.add(e)
                    }
                    )),
                    t
                },
                $remove: function(e, t, n, r) {
                    return y(t, "$remove"),
                    g(e, "$remove"),
                    e.forEach((function(e) {
                        t === r && t.has(e) && (t = f(r)),
                        t.delete(e)
                    }
                    )),
                    t
                },
                $merge: function(e, t, r, l) {
                    var o, i;
                    return o = t,
                    a((i = e) && "object" == typeof i, (function() {
                        return "update(): $merge expects a spec of type 'object'; got " + n(i)
                    }
                    )),
                    a(o && "object" == typeof o, (function() {
                        return "update(): $merge expects a target of type 'object'; got " + n(o)
                    }
                    )),
                    c(e).forEach((function(n) {
                        e[n] !== t[n] && (t === l && (t = f(l)),
                        t[n] = e[n])
                    }
                    )),
                    t
                },
                $apply: function(e, t) {
                    var r;
                    return a("function" == typeof (r = e), (function() {
                        return "update(): expected spec of $apply to be a function; got " + n(r) + "."
                    }
                    )),
                    e(t)
                }
            }
              , h = new d;
            function m(e, t, r) {
                a(Array.isArray(e), (function() {
                    return "update(): expected target of " + n(r) + " to be an array; got " + n(e) + "."
                }
                )),
                g(t[r], r)
            }
            function g(e, t) {
                a(Array.isArray(e), (function() {
                    return "update(): expected spec of " + n(t) + " to be an array; got " + n(e) + ". Did you forget to wrap your parameter in an array?"
                }
                ))
            }
            function v(e) {
                a(Array.isArray(e), (function() {
                    return "update(): expected spec of $splice to be an array of arrays; got " + n(e) + ". Did you forget to wrap your parameters in an array?"
                }
                ))
            }
            function y(e, t) {
                var r = u(e);
                a("Map" === r || "Set" === r, (function() {
                    return "update(): " + n(t) + " expects a target of type Set or Map; got " + n(r)
                }
                ))
            }
            t.isEquals = h.update.isEquals,
            t.extend = h.extend,
            t.default = h.update,
            t.default.default = e.exports = s(t.default, t)
        }
        ,
        418: e=>{
            "use strict";
            var t = Object.getOwnPropertySymbols
              , n = Object.prototype.hasOwnProperty
              , r = Object.prototype.propertyIsEnumerable;
            function a(e) {
                if (null == e)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var e = new String("abc");
                    if (e[5] = "de",
                    "5" === Object.getOwnPropertyNames(e)[0])
                        return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                        t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                        return t[e]
                    }
                    )).join(""))
                        return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    }
                    )),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, l) {
                for (var o, i, u = a(e), s = 1; s < arguments.length; s++) {
                    for (var c in o = Object(arguments[s]))
                        n.call(o, c) && (u[c] = o[c]);
                    if (t) {
                        i = t(o);
                        for (var f = 0; f < i.length; f++)
                            r.call(o, i[f]) && (u[i[f]] = o[i[f]])
                    }
                }
                return u
            }
        }
        ,
        703: (e,t,n)=>{
            "use strict";
            var r = n(414);
            function a() {}
            function l() {}
            l.resetWarningCache = a,
            e.exports = function() {
                function e(e, t, n, a, l, o) {
                    if (o !== r) {
                        var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw i.name = "Invariant Violation",
                        i
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: l,
                    resetWarningCache: a
                };
                return n.PropTypes = n,
                n
            }
        }
        ,
        697: (e,t,n)=>{
            e.exports = n(703)()
        }
        ,
        414: e=>{
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        448: (e,t,n)=>{
            "use strict";
            var r = n(294)
              , a = n(418)
              , l = n(840);
            function o(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!r)
                throw Error(o(227));
            var i = new Set
              , u = {};
            function s(e, t) {
                c(e, t),
                c(e + "Capture", t)
            }
            function c(e, t) {
                for (u[e] = t,
                e = 0; e < t.length; e++)
                    i.add(t[e])
            }
            var f = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
              , d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = Object.prototype.hasOwnProperty
              , h = {}
              , m = {};
            function g(e, t, n, r, a, l, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = l,
                this.removeEmptyString = o
            }
            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                v[e] = new g(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                v[t] = new g(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                v[e] = new g(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                v[e] = new g(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                v[e] = new g(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                v[e] = new g(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                v[e] = new g(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                v[e] = new g(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                v[e] = new g(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var y = /[\-:]([a-z])/g;
            function b(e) {
                return e[1].toUpperCase()
            }
            function w(e, t, n, r) {
                var a = v.hasOwnProperty(t) ? v[t] : null;
                (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                    if (null == t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, a, r) && (n = null),
                r || null === a ? function(e) {
                    return !!p.call(m, e) || !p.call(h, e) && (d.test(e) ? m[e] = !0 : (h[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName,
                r = a.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(y, b);
                v[t] = new g(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(y, b);
                v[t] = new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(y, b);
                v[t] = new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                v[e] = new g(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            v.xlinkHref = new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                v[e] = new g(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , x = 60103
              , E = 60106
              , S = 60107
              , C = 60108
              , _ = 60114
              , N = 60109
              , z = 60110
              , P = 60112
              , L = 60113
              , O = 60120
              , M = 60115
              , T = 60116
              , j = 60121
              , I = 60128
              , R = 60129
              , D = 60130
              , $ = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var V = Symbol.for;
                x = V("react.element"),
                E = V("react.portal"),
                S = V("react.fragment"),
                C = V("react.strict_mode"),
                _ = V("react.profiler"),
                N = V("react.provider"),
                z = V("react.context"),
                P = V("react.forward_ref"),
                L = V("react.suspense"),
                O = V("react.suspense_list"),
                M = V("react.memo"),
                T = V("react.lazy"),
                j = V("react.block"),
                V("react.scope"),
                I = V("react.opaque.id"),
                R = V("react.debug_trace_mode"),
                D = V("react.offscreen"),
                $ = V("react.legacy_hidden")
            }
            var A, F = "function" == typeof Symbol && Symbol.iterator;
            function U(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = F && e[F] || e["@@iterator"]) ? e : null
            }
            function B(e) {
                if (void 0 === A)
                    try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        A = t && t[1] || ""
                    }
                return "\n" + A + e
            }
            var H = !1;
            function W(e, t) {
                if (!e || H)
                    return "";
                H = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" == typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (e) {
                                var r = e
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (e) {
                                r = e
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (e) {
                    if (e && r && "string" == typeof e.stack) {
                        for (var a = e.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i]; )
                            i--;
                        for (; 1 <= o && 0 <= i; o--,
                        i--)
                            if (a[o] !== l[i]) {
                                if (1 !== o || 1 !== i)
                                    do {
                                        if (o--,
                                        0 > --i || a[o] !== l[i])
                                            return "\n" + a[o].replace(" at new ", " at ")
                                    } while (1 <= o && 0 <= i);
                                break
                            }
                    }
                } finally {
                    H = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? B(e) : ""
            }
            function Q(e) {
                switch (e.tag) {
                case 5:
                    return B(e.type);
                case 16:
                    return B("Lazy");
                case 13:
                    return B("Suspense");
                case 19:
                    return B("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = W(e.type, !1);
                case 11:
                    return e = W(e.type.render, !1);
                case 22:
                    return e = W(e.type._render, !1);
                case 1:
                    return e = W(e.type, !0);
                default:
                    return ""
                }
            }
            function q(e) {
                if (null == e)
                    return null;
                if ("function" == typeof e)
                    return e.displayName || e.name || null;
                if ("string" == typeof e)
                    return e;
                switch (e) {
                case S:
                    return "Fragment";
                case E:
                    return "Portal";
                case _:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case L:
                    return "Suspense";
                case O:
                    return "SuspenseList"
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                    case z:
                        return (e.displayName || "Context") + ".Consumer";
                    case N:
                        return (e._context.displayName || "Context") + ".Provider";
                    case P:
                        var t = e.render;
                        return t = t.displayName || t.name || "",
                        e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case M:
                        return q(e.type);
                    case j:
                        return q(e._render);
                    case T:
                        t = e._payload,
                        e = e._init;
                        try {
                            return q(e(t))
                        } catch (e) {}
                    }
                return null
            }
            function K(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
                }
            }
            function Y(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function X(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = Y(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var a = n.get
                          , l = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                l.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function G(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function Z(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function J(e, t) {
                var n = t.checked;
                return a({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = K(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function te(e, t) {
                null != (t = t.checked) && w(e, "checked", t, !1)
            }
            function ne(e, t) {
                te(e, t);
                var n = K(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && ae(e, t.type, K(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function ae(e, t, n) {
                "number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            function le(e, t) {
                return e = a({
                    children: void 0
                }, t),
                (t = function(e) {
                    var t = "";
                    return r.Children.forEach(e, (function(e) {
                        null != e && (t += e)
                    }
                    )),
                    t
                }(t.children)) && (e.children = t),
                e
            }
            function oe(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var a = 0; a < n.length; a++)
                        t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++)
                        a = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== a && (e[n].selected = a),
                        a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + K(n),
                    t = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === n)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function ie(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(o(91));
                return a({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ue(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(o(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length))
                                throw Error(o(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: K(n)
                }
            }
            function se(e, t) {
                var n = K(t.value)
                  , r = K(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function ce(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            var fe = "http://www.w3.org/1999/xhtml"
              , de = "http://www.w3.org/2000/svg";
            function pe(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function he(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var me, ge, ve = (ge = function(e, t) {
                if (e.namespaceURI !== de || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ge(e, t)
                }
                ))
            }
            : ge);
            function ye(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var be = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , we = ["Webkit", "ms", "Moz", "O"];
            function ke(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || be.hasOwnProperty(e) && be[e] ? ("" + t).trim() : t + "px"
            }
            function xe(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , a = ke(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(be).forEach((function(e) {
                we.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    be[t] = be[e]
                }
                ))
            }
            ));
            var Ee = a({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function Se(e, t) {
                if (t) {
                    if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(o(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(o(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(o(61))
                    }
                    if (null != t.style && "object" != typeof t.style)
                        throw Error(o(62))
                }
            }
            function Ce(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" == typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            function _e(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Ne = null
              , ze = null
              , Pe = null;
            function Le(e) {
                if (e = ea(e)) {
                    if ("function" != typeof Ne)
                        throw Error(o(280));
                    var t = e.stateNode;
                    t && (t = na(t),
                    Ne(e.stateNode, e.type, t))
                }
            }
            function Oe(e) {
                ze ? Pe ? Pe.push(e) : Pe = [e] : ze = e
            }
            function Me() {
                if (ze) {
                    var e = ze
                      , t = Pe;
                    if (Pe = ze = null,
                    Le(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Le(t[e])
                }
            }
            function Te(e, t) {
                return e(t)
            }
            function je(e, t, n, r, a) {
                return e(t, n, r, a)
            }
            function Ie() {}
            var Re = Te
              , De = !1
              , $e = !1;
            function Ve() {
                null === ze && null === Pe || (Ie(),
                Me())
            }
            function Ae(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = na(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" != typeof n)
                    throw Error(o(231, t, typeof n));
                return n
            }
            var Fe = !1;
            if (f)
                try {
                    var Ue = {};
                    Object.defineProperty(Ue, "passive", {
                        get: function() {
                            Fe = !0
                        }
                    }),
                    window.addEventListener("test", Ue, Ue),
                    window.removeEventListener("test", Ue, Ue)
                } catch (ge) {
                    Fe = !1
                }
            function Be(e, t, n, r, a, l, o, i, u) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s)
                } catch (e) {
                    this.onError(e)
                }
            }
            var He = !1
              , We = null
              , Qe = !1
              , qe = null
              , Ke = {
                onError: function(e) {
                    He = !0,
                    We = e
                }
            };
            function Ye(e, t, n, r, a, l, o, i, u) {
                He = !1,
                We = null,
                Be.apply(Ke, arguments)
            }
            function Xe(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 != (1026 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Ge(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Ze(e) {
                if (Xe(e) !== e)
                    throw Error(o(188))
            }
            function Je(e) {
                if (!(e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Xe(e)))
                            throw Error(o(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a)
                            break;
                        var l = a.alternate;
                        if (null === l) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === l.child) {
                            for (l = a.child; l; ) {
                                if (l === n)
                                    return Ze(a),
                                    e;
                                if (l === r)
                                    return Ze(a),
                                    t;
                                l = l.sibling
                            }
                            throw Error(o(188))
                        }
                        if (n.return !== r.return)
                            n = a,
                            r = l;
                        else {
                            for (var i = !1, u = a.child; u; ) {
                                if (u === n) {
                                    i = !0,
                                    n = a,
                                    r = l;
                                    break
                                }
                                if (u === r) {
                                    i = !0,
                                    r = a,
                                    n = l;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!i) {
                                for (u = l.child; u; ) {
                                    if (u === n) {
                                        i = !0,
                                        n = l,
                                        r = a;
                                        break
                                    }
                                    if (u === r) {
                                        i = !0,
                                        r = l,
                                        n = a;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!i)
                                    throw Error(o(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(o(190))
                    }
                    if (3 !== n.tag)
                        throw Error(o(188));
                    return n.stateNode.current === n ? e : t
                }(e)))
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    if (t.child)
                        t.child.return = t,
                        t = t.child;
                    else {
                        if (t === e)
                            break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e)
                                return null;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return null
            }
            function et(e, t) {
                for (var n = e.alternate; null !== t; ) {
                    if (t === e || t === n)
                        return !0;
                    t = t.return
                }
                return !1
            }
            var tt, nt, rt, at, lt = !1, ot = [], it = null, ut = null, st = null, ct = new Map, ft = new Map, dt = [], pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function ht(e, t, n, r, a) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | n,
                    nativeEvent: a,
                    targetContainers: [r]
                }
            }
            function mt(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    it = null;
                    break;
                case "dragenter":
                case "dragleave":
                    ut = null;
                    break;
                case "mouseover":
                case "mouseout":
                    st = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ct.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ft.delete(t.pointerId)
                }
            }
            function gt(e, t, n, r, a, l) {
                return null === e || e.nativeEvent !== l ? (e = ht(t, n, r, a, l),
                null !== t && (null !== (t = ea(t)) && nt(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== a && -1 === t.indexOf(a) && t.push(a),
                e)
            }
            function vt(e) {
                var t = Jr(e.target);
                if (null !== t) {
                    var n = Xe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Ge(n)))
                                return e.blockedOn = t,
                                void at(e.lanePriority, (function() {
                                    l.unstable_runWithPriority(e.priority, (function() {
                                        rt(n)
                                    }
                                    ))
                                }
                                ))
                        } else if (3 === t && n.stateNode.hydrate)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function yt(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = ea(n)) && nt(t),
                        e.blockedOn = n,
                        !1;
                    t.shift()
                }
                return !0
            }
            function bt(e, t, n) {
                yt(e) && n.delete(t)
            }
            function wt() {
                for (lt = !1; 0 < ot.length; ) {
                    var e = ot[0];
                    if (null !== e.blockedOn) {
                        null !== (e = ea(e.blockedOn)) && tt(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && ot.shift()
                }
                null !== it && yt(it) && (it = null),
                null !== ut && yt(ut) && (ut = null),
                null !== st && yt(st) && (st = null),
                ct.forEach(bt),
                ft.forEach(bt)
            }
            function kt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                lt || (lt = !0,
                l.unstable_scheduleCallback(l.unstable_NormalPriority, wt)))
            }
            function xt(e) {
                function t(t) {
                    return kt(t, e)
                }
                if (0 < ot.length) {
                    kt(ot[0], e);
                    for (var n = 1; n < ot.length; n++) {
                        var r = ot[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== it && kt(it, e),
                null !== ut && kt(ut, e),
                null !== st && kt(st, e),
                ct.forEach(t),
                ft.forEach(t),
                n = 0; n < dt.length; n++)
                    (r = dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
                    vt(n),
                    null === n.blockedOn && dt.shift()
            }
            function Et(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var St = {
                animationend: Et("Animation", "AnimationEnd"),
                animationiteration: Et("Animation", "AnimationIteration"),
                animationstart: Et("Animation", "AnimationStart"),
                transitionend: Et("Transition", "TransitionEnd")
            }
              , Ct = {}
              , _t = {};
            function Nt(e) {
                if (Ct[e])
                    return Ct[e];
                if (!St[e])
                    return e;
                var t, n = St[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in _t)
                        return Ct[e] = n[t];
                return e
            }
            f && (_t = document.createElement("div").style,
            "AnimationEvent"in window || (delete St.animationend.animation,
            delete St.animationiteration.animation,
            delete St.animationstart.animation),
            "TransitionEvent"in window || delete St.transitionend.transition);
            var zt = Nt("animationend")
              , Pt = Nt("animationiteration")
              , Lt = Nt("animationstart")
              , Ot = Nt("transitionend")
              , Mt = new Map
              , Tt = new Map
              , jt = ["abort", "abort", zt, "animationEnd", Pt, "animationIteration", Lt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ot, "transitionEnd", "waiting", "waiting"];
            function It(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n]
                      , a = e[n + 1];
                    a = "on" + (a[0].toUpperCase() + a.slice(1)),
                    Tt.set(r, t),
                    Mt.set(r, a),
                    s(a, [r])
                }
            }
            (0,
            l.unstable_now)();
            var Rt = 8;
            function Dt(e) {
                if (0 != (1 & e))
                    return Rt = 15,
                    1;
                if (0 != (2 & e))
                    return Rt = 14,
                    2;
                if (0 != (4 & e))
                    return Rt = 13,
                    4;
                var t = 24 & e;
                return 0 !== t ? (Rt = 12,
                t) : 0 != (32 & e) ? (Rt = 11,
                32) : 0 !== (t = 192 & e) ? (Rt = 10,
                t) : 0 != (256 & e) ? (Rt = 9,
                256) : 0 !== (t = 3584 & e) ? (Rt = 8,
                t) : 0 != (4096 & e) ? (Rt = 7,
                4096) : 0 !== (t = 4186112 & e) ? (Rt = 6,
                t) : 0 !== (t = 62914560 & e) ? (Rt = 5,
                t) : 67108864 & e ? (Rt = 4,
                67108864) : 0 != (134217728 & e) ? (Rt = 3,
                134217728) : 0 !== (t = 805306368 & e) ? (Rt = 2,
                t) : 0 != (1073741824 & e) ? (Rt = 1,
                1073741824) : (Rt = 8,
                e)
            }
            function $t(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return Rt = 0;
                var r = 0
                  , a = 0
                  , l = e.expiredLanes
                  , o = e.suspendedLanes
                  , i = e.pingedLanes;
                if (0 !== l)
                    r = l,
                    a = Rt = 15;
                else if (0 !== (l = 134217727 & n)) {
                    var u = l & ~o;
                    0 !== u ? (r = Dt(u),
                    a = Rt) : 0 !== (i &= l) && (r = Dt(i),
                    a = Rt)
                } else
                    0 !== (l = n & ~o) ? (r = Dt(l),
                    a = Rt) : 0 !== i && (r = Dt(i),
                    a = Rt);
                if (0 === r)
                    return 0;
                if (r = n & ((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1,
                0 !== t && t !== r && 0 == (t & o)) {
                    if (Dt(t),
                    a <= Rt)
                        return t;
                    Rt = a
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        a = 1 << (n = 31 - Ht(t)),
                        r |= e[n],
                        t &= ~a;
                return r
            }
            function Vt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function At(e, t) {
                switch (e) {
                case 15:
                    return 1;
                case 14:
                    return 2;
                case 12:
                    return 0 === (e = Ft(24 & ~t)) ? At(10, t) : e;
                case 10:
                    return 0 === (e = Ft(192 & ~t)) ? At(8, t) : e;
                case 8:
                    return 0 === (e = Ft(3584 & ~t)) && (0 === (e = Ft(4186112 & ~t)) && (e = 512)),
                    e;
                case 2:
                    return 0 === (t = Ft(805306368 & ~t)) && (t = 268435456),
                    t
                }
                throw Error(o(358, e))
            }
            function Ft(e) {
                return e & -e
            }
            function Ut(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function Bt(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                e.suspendedLanes &= r,
                e.pingedLanes &= r,
                (e = e.eventTimes)[t = 31 - Ht(t)] = n
            }
            var Ht = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === e ? 32 : 31 - (Wt(e) / Qt | 0) | 0
            }
              , Wt = Math.log
              , Qt = Math.LN2;
            var qt = l.unstable_UserBlockingPriority
              , Kt = l.unstable_runWithPriority
              , Yt = !0;
            function Xt(e, t, n, r) {
                De || Ie();
                var a = Zt
                  , l = De;
                De = !0;
                try {
                    je(a, e, t, n, r)
                } finally {
                    (De = l) || Ve()
                }
            }
            function Gt(e, t, n, r) {
                Kt(qt, Zt.bind(null, e, t, n, r))
            }
            function Zt(e, t, n, r) {
                var a;
                if (Yt)
                    if ((a = 0 == (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
                        e = ht(null, e, t, n, r),
                        ot.push(e);
                    else {
                        var l = Jt(e, t, n, r);
                        if (null === l)
                            a && mt(e, r);
                        else {
                            if (a) {
                                if (-1 < pt.indexOf(e))
                                    return e = ht(l, e, t, n, r),
                                    void ot.push(e);
                                if (function(e, t, n, r, a) {
                                    switch (t) {
                                    case "focusin":
                                        return it = gt(it, e, t, n, r, a),
                                        !0;
                                    case "dragenter":
                                        return ut = gt(ut, e, t, n, r, a),
                                        !0;
                                    case "mouseover":
                                        return st = gt(st, e, t, n, r, a),
                                        !0;
                                    case "pointerover":
                                        var l = a.pointerId;
                                        return ct.set(l, gt(ct.get(l) || null, e, t, n, r, a)),
                                        !0;
                                    case "gotpointercapture":
                                        return l = a.pointerId,
                                        ft.set(l, gt(ft.get(l) || null, e, t, n, r, a)),
                                        !0
                                    }
                                    return !1
                                }(l, e, t, n, r))
                                    return;
                                mt(e, r)
                            }
                            Mr(e, t, r, null, n)
                        }
                    }
            }
            function Jt(e, t, n, r) {
                var a = _e(r);
                if (null !== (a = Jr(a))) {
                    var l = Xe(a);
                    if (null === l)
                        a = null;
                    else {
                        var o = l.tag;
                        if (13 === o) {
                            if (null !== (a = Ge(l)))
                                return a;
                            a = null
                        } else if (3 === o) {
                            if (l.stateNode.hydrate)
                                return 3 === l.tag ? l.stateNode.containerInfo : null;
                            a = null
                        } else
                            l !== a && (a = null)
                    }
                }
                return Mr(e, t, r, a, n),
                null
            }
            var en = null
              , tn = null
              , nn = null;
            function rn() {
                if (nn)
                    return nn;
                var e, t, n = tn, r = n.length, a = "value"in en ? en.value : en.textContent, l = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++)
                    ;
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
                    ;
                return nn = a.slice(e, 1 < t ? 1 - t : void 0)
            }
            function an(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function ln() {
                return !0
            }
            function on() {
                return !1
            }
            function un(e) {
                function t(t, n, r, a, l) {
                    for (var o in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = a,
                    this.target = l,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(o) && (t = e[o],
                        this[o] = t ? t(a) : a[o]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? ln : on,
                    this.isPropagationStopped = on,
                    this
                }
                return a(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = ln)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = ln)
                    },
                    persist: function() {},
                    isPersistent: ln
                }),
                t
            }
            var sn, cn, fn, dn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, pn = un(dn), hn = a({}, dn, {
                view: 0,
                detail: 0
            }), mn = un(hn), gn = a({}, hn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Nn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (sn = e.screenX - fn.screenX,
                    cn = e.screenY - fn.screenY) : cn = sn = 0,
                    fn = e),
                    sn)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : cn
                }
            }), vn = un(gn), yn = un(a({}, gn, {
                dataTransfer: 0
            })), bn = un(a({}, hn, {
                relatedTarget: 0
            })), wn = un(a({}, dn, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), kn = un(a({}, dn, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            })), xn = un(a({}, dn, {
                data: 0
            })), En = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Sn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Cn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function _n(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
            }
            function Nn() {
                return _n
            }
            var zn = un(a({}, hn, {
                key: function(e) {
                    if (e.key) {
                        var t = En[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = an(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Nn,
                charCode: function(e) {
                    return "keypress" === e.type ? an(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? an(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }))
              , Pn = un(a({}, gn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Ln = un(a({}, hn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Nn
            }))
              , On = un(a({}, dn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , Mn = un(a({}, gn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }))
              , Tn = [9, 13, 27, 32]
              , jn = f && "CompositionEvent"in window
              , In = null;
            f && "documentMode"in document && (In = document.documentMode);
            var Rn = f && "TextEvent"in window && !In
              , Dn = f && (!jn || In && 8 < In && 11 >= In)
              , $n = String.fromCharCode(32)
              , Vn = !1;
            function An(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Tn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Fn(e) {
                return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Un = !1;
            var Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }
            function Wn(e, t, n, r) {
                Oe(r),
                0 < (t = jr(t, "onChange")).length && (n = new pn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Qn = null
              , qn = null;
            function Kn(e) {
                _r(e, 0)
            }
            function Yn(e) {
                if (G(ta(e)))
                    return e
            }
            function Xn(e, t) {
                if ("change" === e)
                    return t
            }
            var Gn = !1;
            if (f) {
                var Zn;
                if (f) {
                    var Jn = "oninput"in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Jn = "function" == typeof er.oninput
                    }
                    Zn = Jn
                } else
                    Zn = !1;
                Gn = Zn && (!document.documentMode || 9 < document.documentMode)
            }
            function tr() {
                Qn && (Qn.detachEvent("onpropertychange", nr),
                qn = Qn = null)
            }
            function nr(e) {
                if ("value" === e.propertyName && Yn(qn)) {
                    var t = [];
                    if (Wn(t, qn, e, _e(e)),
                    e = Kn,
                    De)
                        e(t);
                    else {
                        De = !0;
                        try {
                            Te(e, t)
                        } finally {
                            De = !1,
                            Ve()
                        }
                    }
                }
            }
            function rr(e, t, n) {
                "focusin" === e ? (tr(),
                qn = n,
                (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Yn(qn)
            }
            function lr(e, t) {
                if ("click" === e)
                    return Yn(t)
            }
            function or(e, t) {
                if ("input" === e || "change" === e)
                    return Yn(t)
            }
            var ir = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
              , ur = Object.prototype.hasOwnProperty;
            function sr(e, t) {
                if (ir(e, t))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++)
                    if (!ur.call(t, n[r]) || !ir(e[n[r]], t[n[r]]))
                        return !1;
                return !0
            }
            function cr(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function fr(e, t) {
                var n, r = cr(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = cr(r)
                }
            }
            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function pr() {
                for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = Z((e = t.contentWindow).document)
                }
                return t
            }
            function hr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var mr = f && "documentMode"in document && 11 >= document.documentMode
              , gr = null
              , vr = null
              , yr = null
              , br = !1;
            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == gr || gr !== Z(r) || ("selectionStart"in (r = gr) && hr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                yr && sr(yr, r) || (yr = r,
                0 < (r = jr(vr, "onSelect")).length && (t = new pn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = gr)))
            }
            It("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
            It("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
            It(jt, 2);
            for (var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), xr = 0; xr < kr.length; xr++)
                Tt.set(kr[xr], 0);
            c("onMouseEnter", ["mouseout", "mouseover"]),
            c("onMouseLeave", ["mouseout", "mouseover"]),
            c("onPointerEnter", ["pointerout", "pointerover"]),
            c("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Sr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
            function Cr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, a, l, i, u, s) {
                    if (Ye.apply(this, arguments),
                    He) {
                        if (!He)
                            throw Error(o(198));
                        var c = We;
                        He = !1,
                        We = null,
                        Qe || (Qe = !0,
                        qe = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function _r(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var l = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var i = r[o]
                                  , u = i.instance
                                  , s = i.currentTarget;
                                if (i = i.listener,
                                u !== l && a.isPropagationStopped())
                                    break e;
                                Cr(a, i, s),
                                l = u
                            }
                        else
                            for (o = 0; o < r.length; o++) {
                                if (u = (i = r[o]).instance,
                                s = i.currentTarget,
                                i = i.listener,
                                u !== l && a.isPropagationStopped())
                                    break e;
                                Cr(a, i, s),
                                l = u
                            }
                    }
                }
                if (Qe)
                    throw e = qe,
                    Qe = !1,
                    qe = null,
                    e
            }
            function Nr(e, t) {
                var n = ra(t)
                  , r = e + "__bubble";
                n.has(r) || (Or(t, e, 2, !1),
                n.add(r))
            }
            var zr = "_reactListening" + Math.random().toString(36).slice(2);
            function Pr(e) {
                e[zr] || (e[zr] = !0,
                i.forEach((function(t) {
                    Sr.has(t) || Lr(t, !1, e, null),
                    Lr(t, !0, e, null)
                }
                )))
            }
            function Lr(e, t, n, r) {
                var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
                  , l = n;
                if ("selectionchange" === e && 9 !== n.nodeType && (l = n.ownerDocument),
                null !== r && !t && Sr.has(e)) {
                    if ("scroll" !== e)
                        return;
                    a |= 2,
                    l = r
                }
                var o = ra(l)
                  , i = e + "__" + (t ? "capture" : "bubble");
                o.has(i) || (t && (a |= 4),
                Or(l, e, a, t),
                o.add(i))
            }
            function Or(e, t, n, r) {
                var a = Tt.get(t);
                switch (void 0 === a ? 2 : a) {
                case 0:
                    a = Xt;
                    break;
                case 1:
                    a = Gt;
                    break;
                default:
                    a = Zt
                }
                n = a.bind(null, t, n, e),
                a = void 0,
                !Fe || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0),
                r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }
            function Mr(e, t, n, r, a) {
                var l = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var i = r.stateNode.containerInfo;
                            if (i === a || 8 === i.nodeType && i.parentNode === a)
                                break;
                            if (4 === o)
                                for (o = r.return; null !== o; ) {
                                    var u = o.tag;
                                    if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                        return;
                                    o = o.return
                                }
                            for (; null !== i; ) {
                                if (null === (o = Jr(i)))
                                    return;
                                if (5 === (u = o.tag) || 6 === u) {
                                    r = l = o;
                                    continue e
                                }
                                i = i.parentNode
                            }
                        }
                        r = r.return
                    }
                !function(e, t, n) {
                    if ($e)
                        return e(t, n);
                    $e = !0;
                    try {
                        Re(e, t, n)
                    } finally {
                        $e = !1,
                        Ve()
                    }
                }((function() {
                    var r = l
                      , a = _e(n)
                      , o = [];
                    e: {
                        var i = Mt.get(e);
                        if (void 0 !== i) {
                            var u = pn
                              , s = e;
                            switch (e) {
                            case "keypress":
                                if (0 === an(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                u = zn;
                                break;
                            case "focusin":
                                s = "focus",
                                u = bn;
                                break;
                            case "focusout":
                                s = "blur",
                                u = bn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                u = bn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                u = vn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                u = yn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                u = Ln;
                                break;
                            case zt:
                            case Pt:
                            case Lt:
                                u = wn;
                                break;
                            case Ot:
                                u = On;
                                break;
                            case "scroll":
                                u = mn;
                                break;
                            case "wheel":
                                u = Mn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                u = kn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                u = Pn
                            }
                            var c = 0 != (4 & t)
                              , f = !c && "scroll" === e
                              , d = c ? null !== i ? i + "Capture" : null : i;
                            c = [];
                            for (var p, h = r; null !== h; ) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m,
                                null !== d && (null != (m = Ae(h, d)) && c.push(Tr(h, m, p)))),
                                f)
                                    break;
                                h = h.return
                            }
                            0 < c.length && (i = new u(i,s,null,n,a),
                            o.push({
                                event: i,
                                listeners: c
                            }))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e,
                        (!(i = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(s = n.relatedTarget || n.fromElement) || !Jr(s) && !s[Gr]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window,
                        u ? (u = r,
                        null !== (s = (s = n.relatedTarget || n.toElement) ? Jr(s) : null) && (s !== (f = Xe(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null,
                        s = r),
                        u !== s)) {
                            if (c = vn,
                            m = "onMouseLeave",
                            d = "onMouseEnter",
                            h = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Pn,
                            m = "onPointerLeave",
                            d = "onPointerEnter",
                            h = "pointer"),
                            f = null == u ? i : ta(u),
                            p = null == s ? i : ta(s),
                            (i = new c(m,h + "leave",u,n,a)).target = f,
                            i.relatedTarget = p,
                            m = null,
                            Jr(a) === r && ((c = new c(d,h + "enter",s,n,a)).target = p,
                            c.relatedTarget = f,
                            m = c),
                            f = m,
                            u && s)
                                e: {
                                    for (d = s,
                                    h = 0,
                                    p = c = u; p; p = Ir(p))
                                        h++;
                                    for (p = 0,
                                    m = d; m; m = Ir(m))
                                        p++;
                                    for (; 0 < h - p; )
                                        c = Ir(c),
                                        h--;
                                    for (; 0 < p - h; )
                                        d = Ir(d),
                                        p--;
                                    for (; h--; ) {
                                        if (c === d || null !== d && c === d.alternate)
                                            break e;
                                        c = Ir(c),
                                        d = Ir(d)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== u && Rr(o, i, u, c, !1),
                            null !== s && null !== f && Rr(o, f, s, c, !0)
                        }
                        if ("select" === (u = (i = r ? ta(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                            var g = Xn;
                        else if (Hn(i))
                            if (Gn)
                                g = or;
                            else {
                                g = ar;
                                var v = rr
                            }
                        else
                            (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (g = lr);
                        switch (g && (g = g(e, r)) ? Wn(o, g, n, a) : (v && v(e, i, r),
                        "focusout" === e && (v = i._wrapperState) && v.controlled && "number" === i.type && ae(i, "number", i.value)),
                        v = r ? ta(r) : window,
                        e) {
                        case "focusin":
                            (Hn(v) || "true" === v.contentEditable) && (gr = v,
                            vr = r,
                            yr = null);
                            break;
                        case "focusout":
                            yr = vr = gr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            wr(o, n, a);
                            break;
                        case "selectionchange":
                            if (mr)
                                break;
                        case "keydown":
                        case "keyup":
                            wr(o, n, a)
                        }
                        var y;
                        if (jn)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Un ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Dn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = rn()) : (tn = "value"in (en = a) ? en.value : en.textContent,
                        Un = !0)),
                        0 < (v = jr(r, b)).length && (b = new xn(b,e,null,n,a),
                        o.push({
                            event: b,
                            listeners: v
                        }),
                        y ? b.data = y : null !== (y = Fn(n)) && (b.data = y))),
                        (y = Rn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Fn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Vn = !0,
                                $n);
                            case "textInput":
                                return (e = t.data) === $n && Vn ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Un)
                                return "compositionend" === e || !jn && An(e, t) ? (e = rn(),
                                nn = tn = en = null,
                                Un = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Dn && "ko" !== t.locale ? null : t.data;
                            default:
                                return null
                            }
                        }(e, n)) && (0 < (r = jr(r, "onBeforeInput")).length && (a = new xn("onBeforeInput","beforeinput",null,n,a),
                        o.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = y))
                    }
                    _r(o, t)
                }
                ))
            }
            function Tr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function jr(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var a = e
                      , l = a.stateNode;
                    5 === a.tag && null !== l && (a = l,
                    null != (l = Ae(e, n)) && r.unshift(Tr(e, l, a)),
                    null != (l = Ae(e, t)) && r.push(Tr(e, l, a))),
                    e = e.return
                }
                return r
            }
            function Ir(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function Rr(e, t, n, r, a) {
                for (var l = t._reactName, o = []; null !== n && n !== r; ) {
                    var i = n
                      , u = i.alternate
                      , s = i.stateNode;
                    if (null !== u && u === r)
                        break;
                    5 === i.tag && null !== s && (i = s,
                    a ? null != (u = Ae(n, l)) && o.unshift(Tr(n, u, i)) : a || null != (u = Ae(n, l)) && o.push(Tr(n, u, i))),
                    n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            function Dr() {}
            var $r = null
              , Vr = null;
            function Ar(e, t) {
                switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
                }
                return !1
            }
            function Fr(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Ur = "function" == typeof setTimeout ? setTimeout : void 0
              , Br = "function" == typeof clearTimeout ? clearTimeout : void 0;
            function Hr(e) {
                1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
            }
            function Wr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break
                }
                return e
            }
            function Qr(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var qr = 0;
            var Kr = Math.random().toString(36).slice(2)
              , Yr = "__reactFiber$" + Kr
              , Xr = "__reactProps$" + Kr
              , Gr = "__reactContainer$" + Kr
              , Zr = "__reactEvents$" + Kr;
            function Jr(e) {
                var t = e[Yr];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[Gr] || n[Yr]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = Qr(e); null !== e; ) {
                                if (n = e[Yr])
                                    return n;
                                e = Qr(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function ea(e) {
                return !(e = e[Yr] || e[Gr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function ta(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(o(33))
            }
            function na(e) {
                return e[Xr] || null
            }
            function ra(e) {
                var t = e[Zr];
                return void 0 === t && (t = e[Zr] = new Set),
                t
            }
            var aa = []
              , la = -1;
            function oa(e) {
                return {
                    current: e
                }
            }
            function ia(e) {
                0 > la || (e.current = aa[la],
                aa[la] = null,
                la--)
            }
            function ua(e, t) {
                la++,
                aa[la] = e.current,
                e.current = t
            }
            var sa = {}
              , ca = oa(sa)
              , fa = oa(!1)
              , da = sa;
            function pa(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return sa;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, l = {};
                for (a in n)
                    l[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = l),
                l
            }
            function ha(e) {
                return null != (e = e.childContextTypes)
            }
            function ma() {
                ia(fa),
                ia(ca)
            }
            function ga(e, t, n) {
                if (ca.current !== sa)
                    throw Error(o(168));
                ua(ca, t),
                ua(fa, n)
            }
            function va(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes,
                "function" != typeof r.getChildContext)
                    return n;
                for (var l in r = r.getChildContext())
                    if (!(l in e))
                        throw Error(o(108, q(t) || "Unknown", l));
                return a({}, n, r)
            }
            function ya(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sa,
                da = ca.current,
                ua(ca, e),
                ua(fa, fa.current),
                !0
            }
            function ba(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(o(169));
                n ? (e = va(e, t, da),
                r.__reactInternalMemoizedMergedChildContext = e,
                ia(fa),
                ia(ca),
                ua(ca, e)) : ia(fa),
                ua(fa, n)
            }
            var wa = null
              , ka = null
              , xa = l.unstable_runWithPriority
              , Ea = l.unstable_scheduleCallback
              , Sa = l.unstable_cancelCallback
              , Ca = l.unstable_shouldYield
              , _a = l.unstable_requestPaint
              , Na = l.unstable_now
              , za = l.unstable_getCurrentPriorityLevel
              , Pa = l.unstable_ImmediatePriority
              , La = l.unstable_UserBlockingPriority
              , Oa = l.unstable_NormalPriority
              , Ma = l.unstable_LowPriority
              , Ta = l.unstable_IdlePriority
              , ja = {}
              , Ia = void 0 !== _a ? _a : function() {}
              , Ra = null
              , Da = null
              , $a = !1
              , Va = Na()
              , Aa = 1e4 > Va ? Na : function() {
                return Na() - Va
            }
            ;
            function Fa() {
                switch (za()) {
                case Pa:
                    return 99;
                case La:
                    return 98;
                case Oa:
                    return 97;
                case Ma:
                    return 96;
                case Ta:
                    return 95;
                default:
                    throw Error(o(332))
                }
            }
            function Ua(e) {
                switch (e) {
                case 99:
                    return Pa;
                case 98:
                    return La;
                case 97:
                    return Oa;
                case 96:
                    return Ma;
                case 95:
                    return Ta;
                default:
                    throw Error(o(332))
                }
            }
            function Ba(e, t) {
                return e = Ua(e),
                xa(e, t)
            }
            function Ha(e, t, n) {
                return e = Ua(e),
                Ea(e, t, n)
            }
            function Wa() {
                if (null !== Da) {
                    var e = Da;
                    Da = null,
                    Sa(e)
                }
                Qa()
            }
            function Qa() {
                if (!$a && null !== Ra) {
                    $a = !0;
                    var e = 0;
                    try {
                        var t = Ra;
                        Ba(99, (function() {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        }
                        )),
                        Ra = null
                    } catch (t) {
                        throw null !== Ra && (Ra = Ra.slice(e + 1)),
                        Ea(Pa, Wa),
                        t
                    } finally {
                        $a = !1
                    }
                }
            }
            var qa = k.ReactCurrentBatchConfig;
            function Ka(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = a({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var Ya = oa(null)
              , Xa = null
              , Ga = null
              , Za = null;
            function Ja() {
                Za = Ga = Xa = null
            }
            function el(e) {
                var t = Ya.current;
                ia(Ya),
                e.type._context._currentValue = t
            }
            function tl(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t)
                            break;
                        n.childLanes |= t
                    } else
                        e.childLanes |= t,
                        null !== n && (n.childLanes |= t);
                    e = e.return
                }
            }
            function nl(e, t) {
                Xa = e,
                Za = Ga = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (jo = !0),
                e.firstContext = null)
            }
            function rl(e, t) {
                if (Za !== e && !1 !== t && 0 !== t)
                    if ("number" == typeof t && 1073741823 !== t || (Za = e,
                    t = 1073741823),
                    t = {
                        context: e,
                        observedBits: t,
                        next: null
                    },
                    null === Ga) {
                        if (null === Xa)
                            throw Error(o(308));
                        Ga = t,
                        Xa.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else
                        Ga = Ga.next = t;
                return e._currentValue
            }
            var al = !1;
            function ll(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }
            function ol(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function il(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function ul(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next,
                    n.next = t),
                    e.pending = t
                }
            }
            function sl(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null
                      , l = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === l ? a = l = o : l = l.next = o,
                            n = n.next
                        } while (null !== n);
                        null === l ? a = l = t : l = l.next = t
                    } else
                        a = l = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: l,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function cl(e, t, n, r) {
                var l = e.updateQueue;
                al = !1;
                var o = l.firstBaseUpdate
                  , i = l.lastBaseUpdate
                  , u = l.shared.pending;
                if (null !== u) {
                    l.shared.pending = null;
                    var s = u
                      , c = s.next;
                    s.next = null,
                    null === i ? o = c : i.next = c,
                    i = s;
                    var f = e.alternate;
                    if (null !== f) {
                        var d = (f = f.updateQueue).lastBaseUpdate;
                        d !== i && (null === d ? f.firstBaseUpdate = c : d.next = c,
                        f.lastBaseUpdate = s)
                    }
                }
                if (null !== o) {
                    for (d = l.baseState,
                    i = 0,
                    f = c = s = null; ; ) {
                        u = o.lane;
                        var p = o.eventTime;
                        if ((r & u) === u) {
                            null !== f && (f = f.next = {
                                eventTime: p,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e: {
                                var h = e
                                  , m = o;
                                switch (u = t,
                                p = n,
                                m.tag) {
                                case 1:
                                    if ("function" == typeof (h = m.payload)) {
                                        d = h.call(p, d, u);
                                        break e
                                    }
                                    d = h;
                                    break e;
                                case 3:
                                    h.flags = -4097 & h.flags | 64;
                                case 0:
                                    if (null == (u = "function" == typeof (h = m.payload) ? h.call(p, d, u) : h))
                                        break e;
                                    d = a({}, d, u);
                                    break e;
                                case 2:
                                    al = !0
                                }
                            }
                            null !== o.callback && (e.flags |= 32,
                            null === (u = l.effects) ? l.effects = [o] : u.push(o))
                        } else
                            p = {
                                eventTime: p,
                                lane: u,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            },
                            null === f ? (c = f = p,
                            s = d) : f = f.next = p,
                            i |= u;
                        if (null === (o = o.next)) {
                            if (null === (u = l.shared.pending))
                                break;
                            o = u.next,
                            u.next = null,
                            l.lastBaseUpdate = u,
                            l.shared.pending = null
                        }
                    }
                    null === f && (s = d),
                    l.baseState = s,
                    l.firstBaseUpdate = c,
                    l.lastBaseUpdate = f,
                    $i |= i,
                    e.lanes = i,
                    e.memoizedState = d
                }
            }
            function fl(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = n,
                            "function" != typeof a)
                                throw Error(o(191, a));
                            a.call(r)
                        }
                    }
            }
            var dl = (new r.Component).refs;
            function pl(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : a({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var hl = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Xe(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = su()
                      , a = cu(e)
                      , l = il(r, a);
                    l.payload = t,
                    null != n && (l.callback = n),
                    ul(e, l),
                    fu(e, a, r)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = su()
                      , a = cu(e)
                      , l = il(r, a);
                    l.tag = 1,
                    l.payload = t,
                    null != n && (l.callback = n),
                    ul(e, l),
                    fu(e, a, r)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = su()
                      , r = cu(e)
                      , a = il(n, r);
                    a.tag = 2,
                    null != t && (a.callback = t),
                    ul(e, a),
                    fu(e, r, n)
                }
            };
            function ml(e, t, n, r, a, l, o) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, l))
            }
            function gl(e, t, n) {
                var r = !1
                  , a = sa
                  , l = t.contextType;
                return "object" == typeof l && null !== l ? l = rl(l) : (a = ha(t) ? da : ca.current,
                l = (r = null != (r = t.contextTypes)) ? pa(e, a) : sa),
                t = new t(n,l),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = hl,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = l),
                t
            }
            function vl(e, t, n, r) {
                e = t.state,
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && hl.enqueueReplaceState(t, t.state, null)
            }
            function yl(e, t, n, r) {
                var a = e.stateNode;
                a.props = n,
                a.state = e.memoizedState,
                a.refs = dl,
                ll(e);
                var l = t.contextType;
                "object" == typeof l && null !== l ? a.context = rl(l) : (l = ha(t) ? da : ca.current,
                a.context = pa(e, l)),
                cl(e, n, a, r),
                a.state = e.memoizedState,
                "function" == typeof (l = t.getDerivedStateFromProps) && (pl(e, t, l, n),
                a.state = e.memoizedState),
                "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state,
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                t !== a.state && hl.enqueueReplaceState(a, a.state, null),
                cl(e, n, a, r),
                a.state = e.memoizedState),
                "function" == typeof a.componentDidMount && (e.flags |= 4)
            }
            var bl = Array.isArray;
            function wl(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(o(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(o(147, e));
                        var a = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                            var t = r.refs;
                            t === dl && (t = r.refs = {}),
                            null === e ? delete t[a] : t[a] = e
                        }
                        )._stringRef = a,
                        t)
                    }
                    if ("string" != typeof e)
                        throw Error(o(284));
                    if (!n._owner)
                        throw Error(o(290, e))
                }
                return e
            }
            function kl(e, t) {
                if ("textarea" !== e.type)
                    throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }
            function xl(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n,
                        t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                        n.nextEffect = null,
                        n.flags = 8
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function a(e, t) {
                    return (e = Bu(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function l(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2,
                    n) : r : (t.flags = 2,
                    n) : n
                }
                function i(t) {
                    return e && null === t.alternate && (t.flags = 2),
                    t
                }
                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = qu(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function s(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = wl(e, t, n),
                    r.return = e,
                    r) : ((r = Hu(n.type, n.key, n.props, null, e.mode, r)).ref = wl(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ku(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n.children || [])).return = e,
                    t)
                }
                function f(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Wu(n, e.mode, r, l)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function d(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t)
                        return (t = qu("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case x:
                            return (n = Hu(t.type, t.key, t.props, null, e.mode, n)).ref = wl(e, null, t),
                            n.return = e,
                            n;
                        case E:
                            return (t = Ku(t, e.mode, n)).return = e,
                            t
                        }
                        if (bl(t) || U(t))
                            return (t = Wu(t, e.mode, n, null)).return = e,
                            t;
                        kl(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n)
                        return null !== a ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case x:
                            return n.key === a ? n.type === S ? f(e, t, n.props.children, r, a) : s(e, t, n, r) : null;
                        case E:
                            return n.key === a ? c(e, t, n, r) : null
                        }
                        if (bl(n) || U(n))
                            return null !== a ? null : f(e, t, n, r, null);
                        kl(e, n)
                    }
                    return null
                }
                function h(e, t, n, r, a) {
                    if ("string" == typeof r || "number" == typeof r)
                        return u(t, e = e.get(n) || null, "" + r, a);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case x:
                            return e = e.get(null === r.key ? n : r.key) || null,
                            r.type === S ? f(t, e, r.props.children, a, r.key) : s(t, e, r, a);
                        case E:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                        }
                        if (bl(r) || U(r))
                            return f(t, e = e.get(n) || null, r, a, null);
                        kl(t, r)
                    }
                    return null
                }
                function m(a, o, i, u) {
                    for (var s = null, c = null, f = o, m = o = 0, g = null; null !== f && m < i.length; m++) {
                        f.index > m ? (g = f,
                        f = null) : g = f.sibling;
                        var v = p(a, f, i[m], u);
                        if (null === v) {
                            null === f && (f = g);
                            break
                        }
                        e && f && null === v.alternate && t(a, f),
                        o = l(v, o, m),
                        null === c ? s = v : c.sibling = v,
                        c = v,
                        f = g
                    }
                    if (m === i.length)
                        return n(a, f),
                        s;
                    if (null === f) {
                        for (; m < i.length; m++)
                            null !== (f = d(a, i[m], u)) && (o = l(f, o, m),
                            null === c ? s = f : c.sibling = f,
                            c = f);
                        return s
                    }
                    for (f = r(a, f); m < i.length; m++)
                        null !== (g = h(f, a, m, i[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
                        o = l(g, o, m),
                        null === c ? s = g : c.sibling = g,
                        c = g);
                    return e && f.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    s
                }
                function g(a, i, u, s) {
                    var c = U(u);
                    if ("function" != typeof c)
                        throw Error(o(150));
                    if (null == (u = c.call(u)))
                        throw Error(o(151));
                    for (var f = c = null, m = i, g = i = 0, v = null, y = u.next(); null !== m && !y.done; g++,
                    y = u.next()) {
                        m.index > g ? (v = m,
                        m = null) : v = m.sibling;
                        var b = p(a, m, y.value, s);
                        if (null === b) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === b.alternate && t(a, m),
                        i = l(b, i, g),
                        null === f ? c = b : f.sibling = b,
                        f = b,
                        m = v
                    }
                    if (y.done)
                        return n(a, m),
                        c;
                    if (null === m) {
                        for (; !y.done; g++,
                        y = u.next())
                            null !== (y = d(a, y.value, s)) && (i = l(y, i, g),
                            null === f ? c = y : f.sibling = y,
                            f = y);
                        return c
                    }
                    for (m = r(a, m); !y.done; g++,
                    y = u.next())
                        null !== (y = h(m, a, g, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
                        i = l(y, i, g),
                        null === f ? c = y : f.sibling = y,
                        f = y);
                    return e && m.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    c
                }
                return function(e, r, l, u) {
                    var s = "object" == typeof l && null !== l && l.type === S && null === l.key;
                    s && (l = l.props.children);
                    var c = "object" == typeof l && null !== l;
                    if (c)
                        switch (l.$$typeof) {
                        case x:
                            e: {
                                for (c = l.key,
                                s = r; null !== s; ) {
                                    if (s.key === c) {
                                        switch (s.tag) {
                                        case 7:
                                            if (l.type === S) {
                                                n(e, s.sibling),
                                                (r = a(s, l.props.children)).return = e,
                                                e = r;
                                                break e
                                            }
                                            break;
                                        default:
                                            if (s.elementType === l.type) {
                                                n(e, s.sibling),
                                                (r = a(s, l.props)).ref = wl(e, s, l),
                                                r.return = e,
                                                e = r;
                                                break e
                                            }
                                        }
                                        n(e, s);
                                        break
                                    }
                                    t(e, s),
                                    s = s.sibling
                                }
                                l.type === S ? ((r = Wu(l.props.children, e.mode, u, l.key)).return = e,
                                e = r) : ((u = Hu(l.type, l.key, l.props, null, e.mode, u)).ref = wl(e, r, l),
                                u.return = e,
                                e = u)
                            }
                            return i(e);
                        case E:
                            e: {
                                for (s = l.key; null !== r; ) {
                                    if (r.key === s) {
                                        if (4 === r.tag && r.stateNode.containerInfo === l.containerInfo && r.stateNode.implementation === l.implementation) {
                                            n(e, r.sibling),
                                            (r = a(r, l.children || [])).return = e,
                                            e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r),
                                    r = r.sibling
                                }
                                (r = Ku(l, e.mode, u)).return = e,
                                e = r
                            }
                            return i(e)
                        }
                    if ("string" == typeof l || "number" == typeof l)
                        return l = "" + l,
                        null !== r && 6 === r.tag ? (n(e, r.sibling),
                        (r = a(r, l)).return = e,
                        e = r) : (n(e, r),
                        (r = qu(l, e.mode, u)).return = e,
                        e = r),
                        i(e);
                    if (bl(l))
                        return m(e, r, l, u);
                    if (U(l))
                        return g(e, r, l, u);
                    if (c && kl(e, l),
                    void 0 === l && !s)
                        switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(o(152, q(e.type) || "Component"))
                        }
                    return n(e, r)
                }
            }
            var El = xl(!0)
              , Sl = xl(!1)
              , Cl = {}
              , _l = oa(Cl)
              , Nl = oa(Cl)
              , zl = oa(Cl);
            function Pl(e) {
                if (e === Cl)
                    throw Error(o(174));
                return e
            }
            function Ll(e, t) {
                switch (ua(zl, t),
                ua(Nl, e),
                ua(_l, Cl),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
                    break;
                default:
                    t = he(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                ia(_l),
                ua(_l, t)
            }
            function Ol() {
                ia(_l),
                ia(Nl),
                ia(zl)
            }
            function Ml(e) {
                Pl(zl.current);
                var t = Pl(_l.current)
                  , n = he(t, e.type);
                t !== n && (ua(Nl, e),
                ua(_l, n))
            }
            function Tl(e) {
                Nl.current === e && (ia(_l),
                ia(Nl))
            }
            var jl = oa(0);
            function Il(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (64 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var Rl = null
              , Dl = null
              , $l = !1;
            function Vl(e, t) {
                var n = Fu(5, null, null, 0);
                n.elementType = "DELETED",
                n.type = "DELETED",
                n.stateNode = t,
                n.return = e,
                n.flags = 8,
                null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
                e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }
            function Al(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    !0);
                case 13:
                default:
                    return !1
                }
            }
            function Fl(e) {
                if ($l) {
                    var t = Dl;
                    if (t) {
                        var n = t;
                        if (!Al(e, t)) {
                            if (!(t = Wr(n.nextSibling)) || !Al(e, t))
                                return e.flags = -1025 & e.flags | 2,
                                $l = !1,
                                void (Rl = e);
                            Vl(Rl, n)
                        }
                        Rl = e,
                        Dl = Wr(t.firstChild)
                    } else
                        e.flags = -1025 & e.flags | 2,
                        $l = !1,
                        Rl = e
                }
            }
            function Ul(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                Rl = e
            }
            function Bl(e) {
                if (e !== Rl)
                    return !1;
                if (!$l)
                    return Ul(e),
                    $l = !0,
                    !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Fr(t, e.memoizedProps))
                    for (t = Dl; t; )
                        Vl(e, t),
                        t = Wr(t.nextSibling);
                if (Ul(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Dl = Wr(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Dl = null
                    }
                } else
                    Dl = Rl ? Wr(e.stateNode.nextSibling) : null;
                return !0
            }
            function Hl() {
                Dl = Rl = null,
                $l = !1
            }
            var Wl = [];
            function Ql() {
                for (var e = 0; e < Wl.length; e++)
                    Wl[e]._workInProgressVersionPrimary = null;
                Wl.length = 0
            }
            var ql = k.ReactCurrentDispatcher
              , Kl = k.ReactCurrentBatchConfig
              , Yl = 0
              , Xl = null
              , Gl = null
              , Zl = null
              , Jl = !1
              , eo = !1;
            function to() {
                throw Error(o(321))
            }
            function no(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!ir(e[n], t[n]))
                        return !1;
                return !0
            }
            function ro(e, t, n, r, a, l) {
                if (Yl = l,
                Xl = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                ql.current = null === e || null === e.memoizedState ? Lo : Oo,
                e = n(r, a),
                eo) {
                    l = 0;
                    do {
                        if (eo = !1,
                        !(25 > l))
                            throw Error(o(301));
                        l += 1,
                        Zl = Gl = null,
                        t.updateQueue = null,
                        ql.current = Mo,
                        e = n(r, a)
                    } while (eo)
                }
                if (ql.current = Po,
                t = null !== Gl && null !== Gl.next,
                Yl = 0,
                Zl = Gl = Xl = null,
                Jl = !1,
                t)
                    throw Error(o(300));
                return e
            }
            function ao() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === Zl ? Xl.memoizedState = Zl = e : Zl = Zl.next = e,
                Zl
            }
            function lo() {
                if (null === Gl) {
                    var e = Xl.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = Gl.next;
                var t = null === Zl ? Xl.memoizedState : Zl.next;
                if (null !== t)
                    Zl = t,
                    Gl = e;
                else {
                    if (null === e)
                        throw Error(o(310));
                    e = {
                        memoizedState: (Gl = e).memoizedState,
                        baseState: Gl.baseState,
                        baseQueue: Gl.baseQueue,
                        queue: Gl.queue,
                        next: null
                    },
                    null === Zl ? Xl.memoizedState = Zl = e : Zl = Zl.next = e
                }
                return Zl
            }
            function oo(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            function io(e) {
                var t = lo()
                  , n = t.queue;
                if (null === n)
                    throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = Gl
                  , a = r.baseQueue
                  , l = n.pending;
                if (null !== l) {
                    if (null !== a) {
                        var i = a.next;
                        a.next = l.next,
                        l.next = i
                    }
                    r.baseQueue = a = l,
                    n.pending = null
                }
                if (null !== a) {
                    a = a.next,
                    r = r.baseState;
                    var u = i = l = null
                      , s = a;
                    do {
                        var c = s.lane;
                        if ((Yl & c) === c)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null
                            }),
                            r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                        else {
                            var f = {
                                lane: c,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null
                            };
                            null === u ? (i = u = f,
                            l = r) : u = u.next = f,
                            Xl.lanes |= c,
                            $i |= c
                        }
                        s = s.next
                    } while (null !== s && s !== a);
                    null === u ? l = r : u.next = i,
                    ir(r, t.memoizedState) || (jo = !0),
                    t.memoizedState = r,
                    t.baseState = l,
                    t.baseQueue = u,
                    n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }
            function uo(e) {
                var t = lo()
                  , n = t.queue;
                if (null === n)
                    throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , a = n.pending
                  , l = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var i = a = a.next;
                    do {
                        l = e(l, i.action),
                        i = i.next
                    } while (i !== a);
                    ir(l, t.memoizedState) || (jo = !0),
                    t.memoizedState = l,
                    null === t.baseQueue && (t.baseState = l),
                    n.lastRenderedState = l
                }
                return [l, r]
            }
            function so(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var a = t._workInProgressVersionPrimary;
                if (null !== a ? e = a === r : (e = e.mutableReadLanes,
                (e = (Yl & e) === e) && (t._workInProgressVersionPrimary = r,
                Wl.push(t))),
                e)
                    return n(t._source);
                throw Wl.push(t),
                Error(o(350))
            }
            function co(e, t, n, r) {
                var a = Li;
                if (null === a)
                    throw Error(o(349));
                var l = t._getVersion
                  , i = l(t._source)
                  , u = ql.current
                  , s = u.useState((function() {
                    return so(a, t, n)
                }
                ))
                  , c = s[1]
                  , f = s[0];
                s = Zl;
                var d = e.memoizedState
                  , p = d.refs
                  , h = p.getSnapshot
                  , m = d.source;
                d = d.subscribe;
                var g = Xl;
                return e.memoizedState = {
                    refs: p,
                    source: t,
                    subscribe: r
                },
                u.useEffect((function() {
                    p.getSnapshot = n,
                    p.setSnapshot = c;
                    var e = l(t._source);
                    if (!ir(i, e)) {
                        e = n(t._source),
                        ir(f, e) || (c(e),
                        e = cu(g),
                        a.mutableReadLanes |= e & a.pendingLanes),
                        e = a.mutableReadLanes,
                        a.entangledLanes |= e;
                        for (var r = a.entanglements, o = e; 0 < o; ) {
                            var u = 31 - Ht(o)
                              , s = 1 << u;
                            r[u] |= e,
                            o &= ~s
                        }
                    }
                }
                ), [n, t, r]),
                u.useEffect((function() {
                    return r(t._source, (function() {
                        var e = p.getSnapshot
                          , n = p.setSnapshot;
                        try {
                            n(e(t._source));
                            var r = cu(g);
                            a.mutableReadLanes |= r & a.pendingLanes
                        } catch (e) {
                            n((function() {
                                throw e
                            }
                            ))
                        }
                    }
                    ))
                }
                ), [t, r]),
                ir(h, n) && ir(m, t) && ir(d, r) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: oo,
                    lastRenderedState: f
                }).dispatch = c = zo.bind(null, Xl, e),
                s.queue = e,
                s.baseQueue = null,
                f = so(a, t, n),
                s.memoizedState = s.baseState = f),
                f
            }
            function fo(e, t, n) {
                return co(lo(), e, t, n)
            }
            function po(e) {
                var t = ao();
                return "function" == typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: oo,
                    lastRenderedState: e
                }).dispatch = zo.bind(null, Xl, e),
                [t.memoizedState, e]
            }
            function ho(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = Xl.updateQueue) ? (t = {
                    lastEffect: null
                },
                Xl.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function mo(e) {
                return e = {
                    current: e
                },
                ao().memoizedState = e
            }
            function go() {
                return lo().memoizedState
            }
            function vo(e, t, n, r) {
                var a = ao();
                Xl.flags |= e,
                a.memoizedState = ho(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function yo(e, t, n, r) {
                var a = lo();
                r = void 0 === r ? null : r;
                var l = void 0;
                if (null !== Gl) {
                    var o = Gl.memoizedState;
                    if (l = o.destroy,
                    null !== r && no(r, o.deps))
                        return void ho(t, n, l, r)
                }
                Xl.flags |= e,
                a.memoizedState = ho(1 | t, n, l, r)
            }
            function bo(e, t) {
                return vo(516, 4, e, t)
            }
            function wo(e, t) {
                return yo(516, 4, e, t)
            }
            function ko(e, t) {
                return yo(4, 2, e, t)
            }
            function xo(e, t) {
                return "function" == typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null != t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function Eo(e, t, n) {
                return n = null != n ? n.concat([e]) : null,
                yo(4, 2, xo.bind(null, t, e), n)
            }
            function So() {}
            function Co(e, t) {
                var n = lo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && no(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function _o(e, t) {
                var n = lo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && no(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function No(e, t) {
                var n = Fa();
                Ba(98 > n ? 98 : n, (function() {
                    e(!0)
                }
                )),
                Ba(97 < n ? 97 : n, (function() {
                    var n = Kl.transition;
                    Kl.transition = 1;
                    try {
                        e(!1),
                        t()
                    } finally {
                        Kl.transition = n
                    }
                }
                ))
            }
            function zo(e, t, n) {
                var r = su()
                  , a = cu(e)
                  , l = {
                    lane: a,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }
                  , o = t.pending;
                if (null === o ? l.next = l : (l.next = o.next,
                o.next = l),
                t.pending = l,
                o = e.alternate,
                e === Xl || null !== o && o === Xl)
                    eo = Jl = !0;
                else {
                    if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , u = o(i, n);
                            if (l.eagerReducer = o,
                            l.eagerState = u,
                            ir(u, i))
                                return
                        } catch (e) {}
                    fu(e, a, r)
                }
            }
            var Po = {
                readContext: rl,
                useCallback: to,
                useContext: to,
                useEffect: to,
                useImperativeHandle: to,
                useLayoutEffect: to,
                useMemo: to,
                useReducer: to,
                useRef: to,
                useState: to,
                useDebugValue: to,
                useDeferredValue: to,
                useTransition: to,
                useMutableSource: to,
                useOpaqueIdentifier: to,
                unstable_isNewReconciler: !1
            }
              , Lo = {
                readContext: rl,
                useCallback: function(e, t) {
                    return ao().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: rl,
                useEffect: bo,
                useImperativeHandle: function(e, t, n) {
                    return n = null != n ? n.concat([e]) : null,
                    vo(4, 2, xo.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return vo(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = ao();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = ao();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = (e = r.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = zo.bind(null, Xl, e),
                    [r.memoizedState, e]
                },
                useRef: mo,
                useState: po,
                useDebugValue: So,
                useDeferredValue: function(e) {
                    var t = po(e)
                      , n = t[0]
                      , r = t[1];
                    return bo((function() {
                        var t = Kl.transition;
                        Kl.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Kl.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = po(!1)
                      , t = e[0];
                    return mo(e = No.bind(null, e[1])),
                    [e, t]
                },
                useMutableSource: function(e, t, n) {
                    var r = ao();
                    return r.memoizedState = {
                        refs: {
                            getSnapshot: t,
                            setSnapshot: null
                        },
                        source: e,
                        subscribe: n
                    },
                    co(r, e, t, n)
                },
                useOpaqueIdentifier: function() {
                    if ($l) {
                        var e = !1
                          , t = function(e) {
                            return {
                                $$typeof: I,
                                toString: e,
                                valueOf: e
                            }
                        }((function() {
                            throw e || (e = !0,
                            n("r:" + (qr++).toString(36))),
                            Error(o(355))
                        }
                        ))
                          , n = po(t)[1];
                        return 0 == (2 & Xl.mode) && (Xl.flags |= 516,
                        ho(5, (function() {
                            n("r:" + (qr++).toString(36))
                        }
                        ), void 0, null)),
                        t
                    }
                    return po(t = "r:" + (qr++).toString(36)),
                    t
                },
                unstable_isNewReconciler: !1
            }
              , Oo = {
                readContext: rl,
                useCallback: Co,
                useContext: rl,
                useEffect: wo,
                useImperativeHandle: Eo,
                useLayoutEffect: ko,
                useMemo: _o,
                useReducer: io,
                useRef: go,
                useState: function() {
                    return io(oo)
                },
                useDebugValue: So,
                useDeferredValue: function(e) {
                    var t = io(oo)
                      , n = t[0]
                      , r = t[1];
                    return wo((function() {
                        var t = Kl.transition;
                        Kl.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Kl.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = io(oo)[0];
                    return [go().current, e]
                },
                useMutableSource: fo,
                useOpaqueIdentifier: function() {
                    return io(oo)[0]
                },
                unstable_isNewReconciler: !1
            }
              , Mo = {
                readContext: rl,
                useCallback: Co,
                useContext: rl,
                useEffect: wo,
                useImperativeHandle: Eo,
                useLayoutEffect: ko,
                useMemo: _o,
                useReducer: uo,
                useRef: go,
                useState: function() {
                    return uo(oo)
                },
                useDebugValue: So,
                useDeferredValue: function(e) {
                    var t = uo(oo)
                      , n = t[0]
                      , r = t[1];
                    return wo((function() {
                        var t = Kl.transition;
                        Kl.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Kl.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = uo(oo)[0];
                    return [go().current, e]
                },
                useMutableSource: fo,
                useOpaqueIdentifier: function() {
                    return uo(oo)[0]
                },
                unstable_isNewReconciler: !1
            }
              , To = k.ReactCurrentOwner
              , jo = !1;
            function Io(e, t, n, r) {
                t.child = null === e ? Sl(t, null, n, r) : El(t, e.child, n, r)
            }
            function Ro(e, t, n, r, a) {
                n = n.render;
                var l = t.ref;
                return nl(t, a),
                r = ro(e, t, n, r, l, a),
                null === e || jo ? (t.flags |= 1,
                Io(e, t, r, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~a,
                ni(e, t, a))
            }
            function Do(e, t, n, r, a, l) {
                if (null === e) {
                    var o = n.type;
                    return "function" != typeof o || Uu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Hu(n.type, null, r, t, t.mode, l)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = o,
                    $o(e, t, o, r, a, l))
                }
                return o = e.child,
                0 == (a & l) && (a = o.memoizedProps,
                (n = null !== (n = n.compare) ? n : sr)(a, r) && e.ref === t.ref) ? ni(e, t, l) : (t.flags |= 1,
                (e = Bu(o, r)).ref = t.ref,
                e.return = t,
                t.child = e)
            }
            function $o(e, t, n, r, a, l) {
                if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
                    if (jo = !1,
                    0 == (l & a))
                        return t.lanes = e.lanes,
                        ni(e, t, l);
                    0 != (16384 & e.flags) && (jo = !0)
                }
                return Fo(e, t, n, r, l)
            }
            function Vo(e, t, n) {
                var r = t.pendingProps
                  , a = r.children
                  , l = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                    if (0 == (4 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        bu(t, n);
                    else {
                        if (0 == (1073741824 & n))
                            return e = null !== l ? l.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e
                            },
                            bu(t, e),
                            null;
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        bu(t, null !== l ? l.baseLanes : n)
                    }
                else
                    null !== l ? (r = l.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    bu(t, r);
                return Io(e, t, a, n),
                t.child
            }
            function Ao(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
            }
            function Fo(e, t, n, r, a) {
                var l = ha(n) ? da : ca.current;
                return l = pa(t, l),
                nl(t, a),
                n = ro(e, t, n, r, l, a),
                null === e || jo ? (t.flags |= 1,
                Io(e, t, n, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~a,
                ni(e, t, a))
            }
            function Uo(e, t, n, r, a) {
                if (ha(n)) {
                    var l = !0;
                    ya(t)
                } else
                    l = !1;
                if (nl(t, a),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    gl(t, n, r),
                    yl(t, n, r, a),
                    r = !0;
                else if (null === e) {
                    var o = t.stateNode
                      , i = t.memoizedProps;
                    o.props = i;
                    var u = o.context
                      , s = n.contextType;
                    "object" == typeof s && null !== s ? s = rl(s) : s = pa(t, s = ha(n) ? da : ca.current);
                    var c = n.getDerivedStateFromProps
                      , f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
                    f || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && vl(t, o, r, s),
                    al = !1;
                    var d = t.memoizedState;
                    o.state = d,
                    cl(t, r, o, a),
                    u = t.memoizedState,
                    i !== r || d !== u || fa.current || al ? ("function" == typeof c && (pl(t, n, c, r),
                    u = t.memoizedState),
                    (i = al || ml(t, n, i, r, d, u, s)) ? (f || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    "function" == typeof o.componentDidMount && (t.flags |= 4)) : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                    t.memoizedProps = r,
                    t.memoizedState = u),
                    o.props = r,
                    o.state = u,
                    o.context = s,
                    r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                    r = !1)
                } else {
                    o = t.stateNode,
                    ol(e, t),
                    i = t.memoizedProps,
                    s = t.type === t.elementType ? i : Ka(t.type, i),
                    o.props = s,
                    f = t.pendingProps,
                    d = o.context,
                    "object" == typeof (u = n.contextType) && null !== u ? u = rl(u) : u = pa(t, u = ha(n) ? da : ca.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== f || d !== u) && vl(t, o, r, u),
                    al = !1,
                    d = t.memoizedState,
                    o.state = d,
                    cl(t, r, o, a);
                    var h = t.memoizedState;
                    i !== f || d !== h || fa.current || al ? ("function" == typeof p && (pl(t, n, p, r),
                    h = t.memoizedState),
                    (s = al || ml(t, n, s, r, d, h, u)) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u),
                    "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 256),
                    t.memoizedProps = r,
                    t.memoizedState = h),
                    o.props = r,
                    o.state = h,
                    o.context = u,
                    r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 256),
                    r = !1)
                }
                return Bo(e, t, n, r, l, a)
            }
            function Bo(e, t, n, r, a, l) {
                Ao(e, t);
                var o = 0 != (64 & t.flags);
                if (!r && !o)
                    return a && ba(t, n, !1),
                    ni(e, t, l);
                r = t.stateNode,
                To.current = t;
                var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && o ? (t.child = El(t, e.child, null, l),
                t.child = El(t, null, i, l)) : Io(e, t, i, l),
                t.memoizedState = r.state,
                a && ba(t, n, !0),
                t.child
            }
            function Ho(e) {
                var t = e.stateNode;
                t.pendingContext ? ga(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ga(0, t.context, !1),
                Ll(e, t.containerInfo)
            }
            var Wo, Qo, qo, Ko = {
                dehydrated: null,
                retryLane: 0
            };
            function Yo(e, t, n) {
                var r, a = t.pendingProps, l = jl.current, o = !1;
                return (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
                r ? (o = !0,
                t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (l |= 1),
                ua(jl, 1 & l),
                null === e ? (void 0 !== a.fallback && Fl(t),
                e = a.children,
                l = a.fallback,
                o ? (e = Xo(t, e, l, n),
                t.child.memoizedState = {
                    baseLanes: n
                },
                t.memoizedState = Ko,
                e) : "number" == typeof a.unstable_expectedLoadTime ? (e = Xo(t, e, l, n),
                t.child.memoizedState = {
                    baseLanes: n
                },
                t.memoizedState = Ko,
                t.lanes = 33554432,
                e) : ((n = Qu({
                    mode: "visible",
                    children: e
                }, t.mode, n, null)).return = t,
                t.child = n)) : (e.memoizedState,
                o ? (a = Zo(e, t, a.children, a.fallback, n),
                o = t.child,
                l = e.child.memoizedState,
                o.memoizedState = null === l ? {
                    baseLanes: n
                } : {
                    baseLanes: l.baseLanes | n
                },
                o.childLanes = e.childLanes & ~n,
                t.memoizedState = Ko,
                a) : (n = Go(e, t, a.children, n),
                t.memoizedState = null,
                n))
            }
            function Xo(e, t, n, r) {
                var a = e.mode
                  , l = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                },
                0 == (2 & a) && null !== l ? (l.childLanes = 0,
                l.pendingProps = t) : l = Qu(t, a, 0, null),
                n = Wu(n, a, r, null),
                l.return = e,
                n.return = e,
                l.sibling = n,
                e.child = l,
                n
            }
            function Go(e, t, n, r) {
                var a = e.child;
                return e = a.sibling,
                n = Bu(a, {
                    mode: "visible",
                    children: n
                }),
                0 == (2 & t.mode) && (n.lanes = r),
                n.return = t,
                n.sibling = null,
                null !== e && (e.nextEffect = null,
                e.flags = 8,
                t.firstEffect = t.lastEffect = e),
                t.child = n
            }
            function Zo(e, t, n, r, a) {
                var l = t.mode
                  , o = e.child;
                e = o.sibling;
                var i = {
                    mode: "hidden",
                    children: n
                };
                return 0 == (2 & l) && t.child !== o ? ((n = t.child).childLanes = 0,
                n.pendingProps = i,
                null !== (o = n.lastEffect) ? (t.firstEffect = n.firstEffect,
                t.lastEffect = o,
                o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Bu(o, i),
                null !== e ? r = Bu(e, r) : (r = Wu(r, l, a, null)).flags |= 2,
                r.return = t,
                n.return = t,
                n.sibling = r,
                t.child = n,
                r
            }
            function Jo(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t),
                tl(e.return, t)
            }
            function ei(e, t, n, r, a, l) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a,
                    lastEffect: l
                } : (o.isBackwards = t,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = r,
                o.tail = n,
                o.tailMode = a,
                o.lastEffect = l)
            }
            function ti(e, t, n) {
                var r = t.pendingProps
                  , a = r.revealOrder
                  , l = r.tail;
                if (Io(e, t, r.children, n),
                0 != (2 & (r = jl.current)))
                    r = 1 & r | 2,
                    t.flags |= 64;
                else {
                    if (null !== e && 0 != (64 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Jo(e, n);
                            else if (19 === e.tag)
                                Jo(e, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (ua(jl, r),
                0 == (2 & t.mode))
                    t.memoizedState = null;
                else
                    switch (a) {
                    case "forwards":
                        for (n = t.child,
                        a = null; null !== n; )
                            null !== (e = n.alternate) && null === Il(e) && (a = n),
                            n = n.sibling;
                        null === (n = a) ? (a = t.child,
                        t.child = null) : (a = n.sibling,
                        n.sibling = null),
                        ei(t, !1, a, n, l, t.lastEffect);
                        break;
                    case "backwards":
                        for (n = null,
                        a = t.child,
                        t.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === Il(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = n,
                            n = a,
                            a = e
                        }
                        ei(t, !0, n, null, l, t.lastEffect);
                        break;
                    case "together":
                        ei(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function ni(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                $i |= t.lanes,
                0 != (n & t.childLanes)) {
                    if (null !== e && t.child !== e.child)
                        throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Bu(e = t.child, e.pendingProps),
                        t.child = n,
                        n.return = t; null !== e.sibling; )
                            e = e.sibling,
                            (n = n.sibling = Bu(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                return null
            }
            function ri(e, t) {
                if (!$l)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function ai(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                    return ha(t.type) && ma(),
                    null;
                case 3:
                    return Ol(),
                    ia(fa),
                    ia(ca),
                    Ql(),
                    (r = t.stateNode).pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (Bl(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)),
                    null;
                case 5:
                    Tl(t);
                    var l = Pl(zl.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        Qo(e, t, n, r),
                        e.ref !== t.ref && (t.flags |= 128);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(o(166));
                            return null
                        }
                        if (e = Pl(_l.current),
                        Bl(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var i = t.memoizedProps;
                            switch (r[Yr] = t,
                            r[Xr] = i,
                            n) {
                            case "dialog":
                                Nr("cancel", r),
                                Nr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Nr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Er.length; e++)
                                    Nr(Er[e], r);
                                break;
                            case "source":
                                Nr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Nr("error", r),
                                Nr("load", r);
                                break;
                            case "details":
                                Nr("toggle", r);
                                break;
                            case "input":
                                ee(r, i),
                                Nr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                Nr("invalid", r);
                                break;
                            case "textarea":
                                ue(r, i),
                                Nr("invalid", r)
                            }
                            for (var s in Se(n, i),
                            e = null,
                            i)
                                i.hasOwnProperty(s) && (l = i[s],
                                "children" === s ? "string" == typeof l ? r.textContent !== l && (e = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (e = ["children", "" + l]) : u.hasOwnProperty(s) && null != l && "onScroll" === s && Nr("scroll", r));
                            switch (n) {
                            case "input":
                                X(r),
                                re(r, i, !0);
                                break;
                            case "textarea":
                                X(r),
                                ce(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof i.onClick && (r.onclick = Dr)
                            }
                            r = e,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            switch (s = 9 === l.nodeType ? l : l.ownerDocument,
                            e === fe && (e = pe(n)),
                            e === fe ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                            "select" === n && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                            e[Yr] = t,
                            e[Xr] = r,
                            Wo(e, t),
                            t.stateNode = e,
                            s = Ce(n, r),
                            n) {
                            case "dialog":
                                Nr("cancel", e),
                                Nr("close", e),
                                l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Nr("load", e),
                                l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Er.length; l++)
                                    Nr(Er[l], e);
                                l = r;
                                break;
                            case "source":
                                Nr("error", e),
                                l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Nr("error", e),
                                Nr("load", e),
                                l = r;
                                break;
                            case "details":
                                Nr("toggle", e),
                                l = r;
                                break;
                            case "input":
                                ee(e, r),
                                l = J(e, r),
                                Nr("invalid", e);
                                break;
                            case "option":
                                l = le(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                l = a({}, r, {
                                    value: void 0
                                }),
                                Nr("invalid", e);
                                break;
                            case "textarea":
                                ue(e, r),
                                l = ie(e, r),
                                Nr("invalid", e);
                                break;
                            default:
                                l = r
                            }
                            Se(n, l);
                            var c = l;
                            for (i in c)
                                if (c.hasOwnProperty(i)) {
                                    var f = c[i];
                                    "style" === i ? xe(e, f) : "dangerouslySetInnerHTML" === i ? null != (f = f ? f.__html : void 0) && ve(e, f) : "children" === i ? "string" == typeof f ? ("textarea" !== n || "" !== f) && ye(e, f) : "number" == typeof f && ye(e, "" + f) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (u.hasOwnProperty(i) ? null != f && "onScroll" === i && Nr("scroll", e) : null != f && w(e, i, f, s))
                                }
                            switch (n) {
                            case "input":
                                X(e),
                                re(e, r, !1);
                                break;
                            case "textarea":
                                X(e),
                                ce(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + K(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                null != (i = r.value) ? oe(e, !!r.multiple, i, !1) : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof l.onClick && (e.onclick = Dr)
                            }
                            Ar(n, r) && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 128)
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode)
                        qo(0, t, e.memoizedProps, r);
                    else {
                        if ("string" != typeof r && null === t.stateNode)
                            throw Error(o(166));
                        n = Pl(zl.current),
                        Pl(_l.current),
                        Bl(t) ? (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Yr] = t,
                        r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Yr] = t,
                        t.stateNode = r)
                    }
                    return null;
                case 13:
                    return ia(jl),
                    r = t.memoizedState,
                    0 != (64 & t.flags) ? (t.lanes = n,
                    t) : (r = null !== r,
                    n = !1,
                    null === e ? void 0 !== t.memoizedProps.fallback && Bl(t) : n = null !== e.memoizedState,
                    r && !n && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & jl.current) ? 0 === Ii && (Ii = 3) : (0 !== Ii && 3 !== Ii || (Ii = 4),
                    null === Li || 0 == (134217727 & $i) && 0 == (134217727 & Vi) || mu(Li, Mi))),
                    (r || n) && (t.flags |= 4),
                    null);
                case 4:
                    return Ol(),
                    null === e && Pr(t.stateNode.containerInfo),
                    null;
                case 10:
                    return el(t),
                    null;
                case 17:
                    return ha(t.type) && ma(),
                    null;
                case 19:
                    if (ia(jl),
                    null === (r = t.memoizedState))
                        return null;
                    if (i = 0 != (64 & t.flags),
                    null === (s = r.rendering))
                        if (i)
                            ri(r, !1);
                        else {
                            if (0 !== Ii || null !== e && 0 != (64 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = Il(e))) {
                                        for (t.flags |= 64,
                                        ri(r, !1),
                                        null !== (i = s.updateQueue) && (t.updateQueue = i,
                                        t.flags |= 4),
                                        null === r.lastEffect && (t.firstEffect = null),
                                        t.lastEffect = r.lastEffect,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (i = n).flags &= 2,
                                            i.nextEffect = null,
                                            i.firstEffect = null,
                                            i.lastEffect = null,
                                            null === (s = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                            i.lanes = s.lanes,
                                            i.child = s.child,
                                            i.memoizedProps = s.memoizedProps,
                                            i.memoizedState = s.memoizedState,
                                            i.updateQueue = s.updateQueue,
                                            i.type = s.type,
                                            e = s.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return ua(jl, 1 & jl.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== r.tail && Aa() > Bi && (t.flags |= 64,
                            i = !0,
                            ri(r, !1),
                            t.lanes = 33554432)
                        }
                    else {
                        if (!i)
                            if (null !== (e = Il(s))) {
                                if (t.flags |= 64,
                                i = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                ri(r, !0),
                                null === r.tail && "hidden" === r.tailMode && !s.alternate && !$l)
                                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null),
                                    null
                            } else
                                2 * Aa() - r.renderingStartTime > Bi && 1073741824 !== n && (t.flags |= 64,
                                i = !0,
                                ri(r, !1),
                                t.lanes = 33554432);
                        r.isBackwards ? (s.sibling = t.child,
                        t.child = s) : (null !== (n = r.last) ? n.sibling = s : t.child = s,
                        r.last = s)
                    }
                    return null !== r.tail ? (n = r.tail,
                    r.rendering = n,
                    r.tail = n.sibling,
                    r.lastEffect = t.lastEffect,
                    r.renderingStartTime = Aa(),
                    n.sibling = null,
                    t = jl.current,
                    ua(jl, i ? 1 & t | 2 : 1 & t),
                    n) : null;
                case 23:
                case 24:
                    return wu(),
                    null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4),
                    null
                }
                throw Error(o(156, t.tag))
            }
            function li(e) {
                switch (e.tag) {
                case 1:
                    ha(e.type) && ma();
                    var t = e.flags;
                    return 4096 & t ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 3:
                    if (Ol(),
                    ia(fa),
                    ia(ca),
                    Ql(),
                    0 != (64 & (t = e.flags)))
                        throw Error(o(285));
                    return e.flags = -4097 & t | 64,
                    e;
                case 5:
                    return Tl(e),
                    null;
                case 13:
                    return ia(jl),
                    4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 19:
                    return ia(jl),
                    null;
                case 4:
                    return Ol(),
                    null;
                case 10:
                    return el(e),
                    null;
                case 23:
                case 24:
                    return wu(),
                    null;
                default:
                    return null
                }
            }
            function oi(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += Q(r),
                        r = r.return
                    } while (r);
                    var a = n
                } catch (e) {
                    a = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a
                }
            }
            function ii(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function() {
                        throw e
                    }
                    ))
                }
            }
            Wo = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Qo = function(e, t, n, r) {
                var l = e.memoizedProps;
                if (l !== r) {
                    e = t.stateNode,
                    Pl(_l.current);
                    var o, i = null;
                    switch (n) {
                    case "input":
                        l = J(e, l),
                        r = J(e, r),
                        i = [];
                        break;
                    case "option":
                        l = le(e, l),
                        r = le(e, r),
                        i = [];
                        break;
                    case "select":
                        l = a({}, l, {
                            value: void 0
                        }),
                        r = a({}, r, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        l = ie(e, l),
                        r = ie(e, r),
                        i = [];
                        break;
                    default:
                        "function" != typeof l.onClick && "function" == typeof r.onClick && (e.onclick = Dr)
                    }
                    for (f in Se(n, r),
                    n = null,
                    l)
                        if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && null != l[f])
                            if ("style" === f) {
                                var s = l[f];
                                for (o in s)
                                    s.hasOwnProperty(o) && (n || (n = {}),
                                    n[o] = "")
                            } else
                                "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (u.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
                    for (f in r) {
                        var c = r[f];
                        if (s = null != l ? l[f] : void 0,
                        r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                            if ("style" === f)
                                if (s) {
                                    for (o in s)
                                        !s.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}),
                                        n[o] = "");
                                    for (o in c)
                                        c.hasOwnProperty(o) && s[o] !== c[o] && (n || (n = {}),
                                        n[o] = c[o])
                                } else
                                    n || (i || (i = []),
                                    i.push(f, n)),
                                    n = c;
                            else
                                "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != c && s !== c && (i = i || []).push(f, c)) : "children" === f ? "string" != typeof c && "number" != typeof c || (i = i || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (u.hasOwnProperty(f) ? (null != c && "onScroll" === f && Nr("scroll", e),
                                i || s === c || (i = [])) : "object" == typeof c && null !== c && c.$$typeof === I ? c.toString() : (i = i || []).push(f, c))
                    }
                    n && (i = i || []).push("style", n);
                    var f = i;
                    (t.updateQueue = f) && (t.flags |= 4)
                }
            }
            ,
            qo = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var ui = "function" == typeof WeakMap ? WeakMap : Map;
            function si(e, t, n) {
                (n = il(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    qi || (qi = !0,
                    Ki = r),
                    ii(0, t)
                }
                ,
                n
            }
            function ci(e, t, n) {
                (n = il(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return ii(0, t),
                        r(a)
                    }
                }
                var l = e.stateNode;
                return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function() {
                    "function" != typeof r && (null === Yi ? Yi = new Set([this]) : Yi.add(this),
                    ii(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            var fi = "function" == typeof WeakSet ? WeakSet : Set;
            function di(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t)
                        try {
                            t(null)
                        } catch (t) {
                            Du(e, t)
                        }
                    else
                        t.current = null
            }
            function pi(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    return;
                case 1:
                    if (256 & t.flags && null !== e) {
                        var n = e.memoizedProps
                          , r = e.memoizedState;
                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ka(t.type, n), r),
                        e.__reactInternalSnapshotBeforeUpdate = t
                    }
                    return;
                case 3:
                    return void (256 & t.flags && Hr(t.stateNode.containerInfo));
                case 5:
                case 6:
                case 4:
                case 17:
                    return
                }
                throw Error(o(163))
            }
            function hi(e, t, n) {
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            if (3 == (3 & e.tag)) {
                                var r = e.create;
                                e.destroy = r()
                            }
                            e = e.next
                        } while (e !== t)
                    }
                    if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            var a = e;
                            r = a.next,
                            0 != (4 & (a = a.tag)) && 0 != (1 & a) && (ju(n, e),
                            Tu(n, e)),
                            e = r
                        } while (e !== t)
                    }
                    return;
                case 1:
                    return e = n.stateNode,
                    4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ka(n.type, t.memoizedProps),
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                    void (null !== (t = n.updateQueue) && fl(n, t, e));
                case 3:
                    if (null !== (t = n.updateQueue)) {
                        if (e = null,
                        null !== n.child)
                            switch (n.child.tag) {
                            case 5:
                                e = n.child.stateNode;
                                break;
                            case 1:
                                e = n.child.stateNode
                            }
                        fl(n, t, e)
                    }
                    return;
                case 5:
                    return e = n.stateNode,
                    void (null === t && 4 & n.flags && Ar(n.type, n.memoizedProps) && e.focus());
                case 6:
                case 4:
                case 12:
                    return;
                case 13:
                    return void (null === n.memoizedState && (n = n.alternate,
                    null !== n && (n = n.memoizedState,
                    null !== n && (n = n.dehydrated,
                    null !== n && xt(n)))));
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24:
                    return
                }
                throw Error(o(163))
            }
            function mi(e, t) {
                for (var n = e; ; ) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t)
                            "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                        else {
                            r = n.stateNode;
                            var a = n.memoizedProps.style;
                            a = null != a && a.hasOwnProperty("display") ? a.display : null,
                            r.style.display = ke("display", a)
                        }
                    } else if (6 === n.tag)
                        n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            function gi(e, t) {
                if (ka && "function" == typeof ka.onCommitFiberUnmount)
                    try {
                        ka.onCommitFiberUnmount(wa, t)
                    } catch (e) {}
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var n = e = e.next;
                        do {
                            var r = n
                              , a = r.destroy;
                            if (r = r.tag,
                            void 0 !== a)
                                if (0 != (4 & r))
                                    ju(t, n);
                                else {
                                    r = t;
                                    try {
                                        a()
                                    } catch (e) {
                                        Du(r, e)
                                    }
                                }
                            n = n.next
                        } while (n !== e)
                    }
                    break;
                case 1:
                    if (di(t),
                    "function" == typeof (e = t.stateNode).componentWillUnmount)
                        try {
                            e.props = t.memoizedProps,
                            e.state = t.memoizedState,
                            e.componentWillUnmount()
                        } catch (e) {
                            Du(t, e)
                        }
                    break;
                case 5:
                    di(t);
                    break;
                case 4:
                    xi(e, t)
                }
            }
            function vi(e) {
                e.alternate = null,
                e.child = null,
                e.dependencies = null,
                e.firstEffect = null,
                e.lastEffect = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.return = null,
                e.updateQueue = null
            }
            function yi(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function bi(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (yi(t))
                            break e;
                        t = t.return
                    }
                    throw Error(o(160))
                }
                var n = t;
                switch (t = n.stateNode,
                n.tag) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo,
                    r = !0;
                    break;
                default:
                    throw Error(o(161))
                }
                16 & n.flags && (ye(t, ""),
                n.flags &= -17);
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || yi(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return,
                    n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.flags)
                            continue t;
                        if (null === n.child || 4 === n.tag)
                            continue t;
                        n.child.return = n,
                        n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? wi(e, n, t) : ki(e, n, t)
            }
            function wi(e, t, n) {
                var r = e.tag
                  , a = 5 === r || 6 === r;
                if (a)
                    e = a ? e.stateNode : e.stateNode.instance,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Dr));
                else if (4 !== r && null !== (e = e.child))
                    for (wi(e, t, n),
                    e = e.sibling; null !== e; )
                        wi(e, t, n),
                        e = e.sibling
            }
            function ki(e, t, n) {
                var r = e.tag
                  , a = 5 === r || 6 === r;
                if (a)
                    e = a ? e.stateNode : e.stateNode.instance,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ki(e, t, n),
                    e = e.sibling; null !== e; )
                        ki(e, t, n),
                        e = e.sibling
            }
            function xi(e, t) {
                for (var n, r, a = t, l = !1; ; ) {
                    if (!l) {
                        l = a.return;
                        e: for (; ; ) {
                            if (null === l)
                                throw Error(o(160));
                            switch (n = l.stateNode,
                            l.tag) {
                            case 5:
                                r = !1;
                                break e;
                            case 3:
                            case 4:
                                n = n.containerInfo,
                                r = !0;
                                break e
                            }
                            l = l.return
                        }
                        l = !0
                    }
                    if (5 === a.tag || 6 === a.tag) {
                        e: for (var i = e, u = a, s = u; ; )
                            if (gi(i, s),
                            null !== s.child && 4 !== s.tag)
                                s.child.return = s,
                                s = s.child;
                            else {
                                if (s === u)
                                    break e;
                                for (; null === s.sibling; ) {
                                    if (null === s.return || s.return === u)
                                        break e;
                                    s = s.return
                                }
                                s.sibling.return = s.return,
                                s = s.sibling
                            }
                        r ? (i = n,
                        u = a.stateNode,
                        8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u)) : n.removeChild(a.stateNode)
                    } else if (4 === a.tag) {
                        if (null !== a.child) {
                            n = a.stateNode.containerInfo,
                            r = !0,
                            a.child.return = a,
                            a = a.child;
                            continue
                        }
                    } else if (gi(e, a),
                    null !== a.child) {
                        a.child.return = a,
                        a = a.child;
                        continue
                    }
                    if (a === t)
                        break;
                    for (; null === a.sibling; ) {
                        if (null === a.return || a.return === t)
                            return;
                        4 === (a = a.return).tag && (l = !1)
                    }
                    a.sibling.return = a.return,
                    a = a.sibling
                }
            }
            function Ei(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var n = t.updateQueue;
                    if (null !== (n = null !== n ? n.lastEffect : null)) {
                        var r = n = n.next;
                        do {
                            3 == (3 & r.tag) && (e = r.destroy,
                            r.destroy = void 0,
                            void 0 !== e && e()),
                            r = r.next
                        } while (r !== n)
                    }
                    return;
                case 1:
                    return;
                case 5:
                    if (null != (n = t.stateNode)) {
                        r = t.memoizedProps;
                        var a = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var l = t.updateQueue;
                        if (t.updateQueue = null,
                        null !== l) {
                            for (n[Xr] = r,
                            "input" === e && "radio" === r.type && null != r.name && te(n, r),
                            Ce(e, a),
                            t = Ce(e, r),
                            a = 0; a < l.length; a += 2) {
                                var i = l[a]
                                  , u = l[a + 1];
                                "style" === i ? xe(n, u) : "dangerouslySetInnerHTML" === i ? ve(n, u) : "children" === i ? ye(n, u) : w(n, i, u, t)
                            }
                            switch (e) {
                            case "input":
                                ne(n, r);
                                break;
                            case "textarea":
                                se(n, r);
                                break;
                            case "select":
                                e = n._wrapperState.wasMultiple,
                                n._wrapperState.wasMultiple = !!r.multiple,
                                null != (l = r.value) ? oe(n, !!r.multiple, l, !1) : e !== !!r.multiple && (null != r.defaultValue ? oe(n, !!r.multiple, r.defaultValue, !0) : oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode)
                        throw Error(o(162));
                    return void (t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void ((n = t.stateNode).hydrate && (n.hydrate = !1,
                    xt(n.containerInfo)));
                case 12:
                    return;
                case 13:
                    return null !== t.memoizedState && (Ui = Aa(),
                    mi(t.child, !0)),
                    void Si(t);
                case 19:
                    return void Si(t);
                case 17:
                    return;
                case 23:
                case 24:
                    return void mi(t, null !== t.memoizedState)
                }
                throw Error(o(163))
            }
            function Si(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new fi),
                    t.forEach((function(t) {
                        var r = Vu.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function Ci(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
            }
            var _i = Math.ceil
              , Ni = k.ReactCurrentDispatcher
              , zi = k.ReactCurrentOwner
              , Pi = 0
              , Li = null
              , Oi = null
              , Mi = 0
              , Ti = 0
              , ji = oa(0)
              , Ii = 0
              , Ri = null
              , Di = 0
              , $i = 0
              , Vi = 0
              , Ai = 0
              , Fi = null
              , Ui = 0
              , Bi = 1 / 0;
            function Hi() {
                Bi = Aa() + 500
            }
            var Wi, Qi = null, qi = !1, Ki = null, Yi = null, Xi = !1, Gi = null, Zi = 90, Ji = [], eu = [], tu = null, nu = 0, ru = null, au = -1, lu = 0, ou = 0, iu = null, uu = !1;
            function su() {
                return 0 != (48 & Pi) ? Aa() : -1 !== au ? au : au = Aa()
            }
            function cu(e) {
                if (0 == (2 & (e = e.mode)))
                    return 1;
                if (0 == (4 & e))
                    return 99 === Fa() ? 1 : 2;
                if (0 === lu && (lu = Di),
                0 !== qa.transition) {
                    0 !== ou && (ou = null !== Fi ? Fi.pendingLanes : 0),
                    e = lu;
                    var t = 4186112 & ~ou;
                    return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)),
                    t
                }
                return e = Fa(),
                0 != (4 & Pi) && 98 === e ? e = At(12, lu) : e = At(e = function(e) {
                    switch (e) {
                    case 99:
                        return 15;
                    case 98:
                        return 10;
                    case 97:
                    case 96:
                        return 8;
                    case 95:
                        return 2;
                    default:
                        return 0
                    }
                }(e), lu),
                e
            }
            function fu(e, t, n) {
                if (50 < nu)
                    throw nu = 0,
                    ru = null,
                    Error(o(185));
                if (null === (e = du(e, t)))
                    return null;
                Bt(e, t, n),
                e === Li && (Vi |= t,
                4 === Ii && mu(e, Mi));
                var r = Fa();
                1 === t ? 0 != (8 & Pi) && 0 == (48 & Pi) ? gu(e) : (pu(e, n),
                0 === Pi && (Hi(),
                Wa())) : (0 == (4 & Pi) || 98 !== r && 99 !== r || (null === tu ? tu = new Set([e]) : tu.add(e)),
                pu(e, n)),
                Fi = e
            }
            function du(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            function pu(e, t) {
                for (var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
                    var u = 31 - Ht(i)
                      , s = 1 << u
                      , c = l[u];
                    if (-1 === c) {
                        if (0 == (s & r) || 0 != (s & a)) {
                            c = t,
                            Dt(s);
                            var f = Rt;
                            l[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                        }
                    } else
                        c <= t && (e.expiredLanes |= s);
                    i &= ~s
                }
                if (r = $t(e, e === Li ? Mi : 0),
                t = Rt,
                0 === r)
                    null !== n && (n !== ja && Sa(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0);
                else {
                    if (null !== n) {
                        if (e.callbackPriority === t)
                            return;
                        n !== ja && Sa(n)
                    }
                    15 === t ? (n = gu.bind(null, e),
                    null === Ra ? (Ra = [n],
                    Da = Ea(Pa, Qa)) : Ra.push(n),
                    n = ja) : 14 === t ? n = Ha(99, gu.bind(null, e)) : n = Ha(n = function(e) {
                        switch (e) {
                        case 15:
                        case 14:
                            return 99;
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                            return 98;
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 4:
                        case 5:
                            return 97;
                        case 3:
                        case 2:
                        case 1:
                            return 95;
                        case 0:
                            return 90;
                        default:
                            throw Error(o(358, e))
                        }
                    }(t), hu.bind(null, e)),
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function hu(e) {
                if (au = -1,
                ou = lu = 0,
                0 != (48 & Pi))
                    throw Error(o(327));
                var t = e.callbackNode;
                if (Mu() && e.callbackNode !== t)
                    return null;
                var n = $t(e, e === Li ? Mi : 0);
                if (0 === n)
                    return null;
                var r = n
                  , a = Pi;
                Pi |= 16;
                var l = Eu();
                for (Li === e && Mi === r || (Hi(),
                ku(e, r)); ; )
                    try {
                        _u();
                        break
                    } catch (t) {
                        xu(e, t)
                    }
                if (Ja(),
                Ni.current = l,
                Pi = a,
                null !== Oi ? r = 0 : (Li = null,
                Mi = 0,
                r = Ii),
                0 != (Di & Vi))
                    ku(e, 0);
                else if (0 !== r) {
                    if (2 === r && (Pi |= 64,
                    e.hydrate && (e.hydrate = !1,
                    Hr(e.containerInfo)),
                    0 !== (n = Vt(e)) && (r = Su(e, n))),
                    1 === r)
                        throw t = Ri,
                        ku(e, 0),
                        mu(e, n),
                        pu(e, Aa()),
                        t;
                    switch (e.finishedWork = e.current.alternate,
                    e.finishedLanes = n,
                    r) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 2:
                        Pu(e);
                        break;
                    case 3:
                        if (mu(e, n),
                        (62914560 & n) === n && 10 < (r = Ui + 500 - Aa())) {
                            if (0 !== $t(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & n) !== n) {
                                su(),
                                e.pingedLanes |= e.suspendedLanes & a;
                                break
                            }
                            e.timeoutHandle = Ur(Pu.bind(null, e), r);
                            break
                        }
                        Pu(e);
                        break;
                    case 4:
                        if (mu(e, n),
                        (4186112 & n) === n)
                            break;
                        for (r = e.eventTimes,
                        a = -1; 0 < n; ) {
                            var i = 31 - Ht(n);
                            l = 1 << i,
                            (i = r[i]) > a && (a = i),
                            n &= ~l
                        }
                        if (n = a,
                        10 < (n = (120 > (n = Aa() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * _i(n / 1960)) - n)) {
                            e.timeoutHandle = Ur(Pu.bind(null, e), n);
                            break
                        }
                        Pu(e);
                        break;
                    case 5:
                        Pu(e);
                        break;
                    default:
                        throw Error(o(329))
                    }
                }
                return pu(e, Aa()),
                e.callbackNode === t ? hu.bind(null, e) : null
            }
            function mu(e, t) {
                for (t &= ~Ai,
                t &= ~Vi,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - Ht(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function gu(e) {
                if (0 != (48 & Pi))
                    throw Error(o(327));
                if (Mu(),
                e === Li && 0 != (e.expiredLanes & Mi)) {
                    var t = Mi
                      , n = Su(e, t);
                    0 != (Di & Vi) && (n = Su(e, t = $t(e, t)))
                } else
                    n = Su(e, t = $t(e, 0));
                if (0 !== e.tag && 2 === n && (Pi |= 64,
                e.hydrate && (e.hydrate = !1,
                Hr(e.containerInfo)),
                0 !== (t = Vt(e)) && (n = Su(e, t))),
                1 === n)
                    throw n = Ri,
                    ku(e, 0),
                    mu(e, t),
                    pu(e, Aa()),
                    n;
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                Pu(e),
                pu(e, Aa()),
                null
            }
            function vu(e, t) {
                var n = Pi;
                Pi |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Pi = n) && (Hi(),
                    Wa())
                }
            }
            function yu(e, t) {
                var n = Pi;
                Pi &= -2,
                Pi |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (Pi = n) && (Hi(),
                    Wa())
                }
            }
            function bu(e, t) {
                ua(ji, Ti),
                Ti |= t,
                Di |= t
            }
            function wu() {
                Ti = ji.current,
                ia(ji)
            }
            function ku(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                Br(n)),
                null !== Oi)
                    for (n = Oi.return; null !== n; ) {
                        var r = n;
                        switch (r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && ma();
                            break;
                        case 3:
                            Ol(),
                            ia(fa),
                            ia(ca),
                            Ql();
                            break;
                        case 5:
                            Tl(r);
                            break;
                        case 4:
                            Ol();
                            break;
                        case 13:
                        case 19:
                            ia(jl);
                            break;
                        case 10:
                            el(r);
                            break;
                        case 23:
                        case 24:
                            wu()
                        }
                        n = n.return
                    }
                Li = e,
                Oi = Bu(e.current, null),
                Mi = Ti = Di = t,
                Ii = 0,
                Ri = null,
                Ai = Vi = $i = 0
            }
            function xu(e, t) {
                for (; ; ) {
                    var n = Oi;
                    try {
                        if (Ja(),
                        ql.current = Po,
                        Jl) {
                            for (var r = Xl.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            Jl = !1
                        }
                        if (Yl = 0,
                        Zl = Gl = Xl = null,
                        eo = !1,
                        zi.current = null,
                        null === n || null === n.return) {
                            Ii = 1,
                            Ri = t,
                            Oi = null;
                            break
                        }
                        e: {
                            var l = e
                              , o = n.return
                              , i = n
                              , u = t;
                            if (t = Mi,
                            i.flags |= 2048,
                            i.firstEffect = i.lastEffect = null,
                            null !== u && "object" == typeof u && "function" == typeof u.then) {
                                var s = u;
                                if (0 == (2 & i.mode)) {
                                    var c = i.alternate;
                                    c ? (i.updateQueue = c.updateQueue,
                                    i.memoizedState = c.memoizedState,
                                    i.lanes = c.lanes) : (i.updateQueue = null,
                                    i.memoizedState = null)
                                }
                                var f = 0 != (1 & jl.current)
                                  , d = o;
                                do {
                                    var p;
                                    if (p = 13 === d.tag) {
                                        var h = d.memoizedState;
                                        if (null !== h)
                                            p = null !== h.dehydrated;
                                        else {
                                            var m = d.memoizedProps;
                                            p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f)
                                        }
                                    }
                                    if (p) {
                                        var g = d.updateQueue;
                                        if (null === g) {
                                            var v = new Set;
                                            v.add(s),
                                            d.updateQueue = v
                                        } else
                                            g.add(s);
                                        if (0 == (2 & d.mode)) {
                                            if (d.flags |= 64,
                                            i.flags |= 16384,
                                            i.flags &= -2981,
                                            1 === i.tag)
                                                if (null === i.alternate)
                                                    i.tag = 17;
                                                else {
                                                    var y = il(-1, 1);
                                                    y.tag = 2,
                                                    ul(i, y)
                                                }
                                            i.lanes |= 1;
                                            break e
                                        }
                                        u = void 0,
                                        i = t;
                                        var b = l.pingCache;
                                        if (null === b ? (b = l.pingCache = new ui,
                                        u = new Set,
                                        b.set(s, u)) : void 0 === (u = b.get(s)) && (u = new Set,
                                        b.set(s, u)),
                                        !u.has(i)) {
                                            u.add(i);
                                            var w = $u.bind(null, l, s, i);
                                            s.then(w, w)
                                        }
                                        d.flags |= 4096,
                                        d.lanes = t;
                                        break e
                                    }
                                    d = d.return
                                } while (null !== d);
                                u = Error((q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Ii && (Ii = 2),
                            u = oi(u, i),
                            d = o;
                            do {
                                switch (d.tag) {
                                case 3:
                                    l = u,
                                    d.flags |= 4096,
                                    t &= -t,
                                    d.lanes |= t,
                                    sl(d, si(0, l, t));
                                    break e;
                                case 1:
                                    l = u;
                                    var k = d.type
                                      , x = d.stateNode;
                                    if (0 == (64 & d.flags) && ("function" == typeof k.getDerivedStateFromError || null !== x && "function" == typeof x.componentDidCatch && (null === Yi || !Yi.has(x)))) {
                                        d.flags |= 4096,
                                        t &= -t,
                                        d.lanes |= t,
                                        sl(d, ci(d, l, t));
                                        break e
                                    }
                                }
                                d = d.return
                            } while (null !== d)
                        }
                        zu(n)
                    } catch (e) {
                        t = e,
                        Oi === n && null !== n && (Oi = n = n.return);
                        continue
                    }
                    break
                }
            }
            function Eu() {
                var e = Ni.current;
                return Ni.current = Po,
                null === e ? Po : e
            }
            function Su(e, t) {
                var n = Pi;
                Pi |= 16;
                var r = Eu();
                for (Li === e && Mi === t || ku(e, t); ; )
                    try {
                        Cu();
                        break
                    } catch (t) {
                        xu(e, t)
                    }
                if (Ja(),
                Pi = n,
                Ni.current = r,
                null !== Oi)
                    throw Error(o(261));
                return Li = null,
                Mi = 0,
                Ii
            }
            function Cu() {
                for (; null !== Oi; )
                    Nu(Oi)
            }
            function _u() {
                for (; null !== Oi && !Ca(); )
                    Nu(Oi)
            }
            function Nu(e) {
                var t = Wi(e.alternate, e, Ti);
                e.memoizedProps = e.pendingProps,
                null === t ? zu(e) : Oi = t,
                zi.current = null
            }
            function zu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 == (2048 & t.flags)) {
                        if (null !== (n = ai(n, t, Ti)))
                            return void (Oi = n);
                        if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & Ti) || 0 == (4 & n.mode)) {
                            for (var r = 0, a = n.child; null !== a; )
                                r |= a.lanes | a.childLanes,
                                a = a.sibling;
                            n.childLanes = r
                        }
                        null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                        null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
                        e.lastEffect = t.lastEffect),
                        1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t,
                        e.lastEffect = t))
                    } else {
                        if (null !== (n = li(t)))
                            return n.flags &= 2047,
                            void (Oi = n);
                        null !== e && (e.firstEffect = e.lastEffect = null,
                        e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling))
                        return void (Oi = t);
                    Oi = t = e
                } while (null !== t);
                0 === Ii && (Ii = 5)
            }
            function Pu(e) {
                var t = Fa();
                return Ba(99, Lu.bind(null, e, t)),
                null
            }
            function Lu(e, t) {
                do {
                    Mu()
                } while (null !== Gi);
                if (0 != (48 & Pi))
                    throw Error(o(327));
                var n = e.finishedWork;
                if (null === n)
                    return null;
                if (e.finishedWork = null,
                e.finishedLanes = 0,
                n === e.current)
                    throw Error(o(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes
                  , a = r
                  , l = e.pendingLanes & ~a;
                e.pendingLanes = a,
                e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.expiredLanes &= a,
                e.mutableReadLanes &= a,
                e.entangledLanes &= a,
                a = e.entanglements;
                for (var i = e.eventTimes, u = e.expirationTimes; 0 < l; ) {
                    var s = 31 - Ht(l)
                      , c = 1 << s;
                    a[s] = 0,
                    i[s] = -1,
                    u[s] = -1,
                    l &= ~c
                }
                if (null !== tu && 0 == (24 & r) && tu.has(e) && tu.delete(e),
                e === Li && (Oi = Li = null,
                Mi = 0),
                1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n,
                r = n.firstEffect) : r = n : r = n.firstEffect,
                null !== r) {
                    if (a = Pi,
                    Pi |= 32,
                    zi.current = null,
                    $r = Yt,
                    hr(i = pr())) {
                        if ("selectionStart"in i)
                            u = {
                                start: i.selectionStart,
                                end: i.selectionEnd
                            };
                        else
                            e: if (u = (u = i.ownerDocument) && u.defaultView || window,
                            (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount) {
                                u = c.anchorNode,
                                l = c.anchorOffset,
                                s = c.focusNode,
                                c = c.focusOffset;
                                try {
                                    u.nodeType,
                                    s.nodeType
                                } catch (e) {
                                    u = null;
                                    break e
                                }
                                var f = 0
                                  , d = -1
                                  , p = -1
                                  , h = 0
                                  , m = 0
                                  , g = i
                                  , v = null;
                                t: for (; ; ) {
                                    for (var y; g !== u || 0 !== l && 3 !== g.nodeType || (d = f + l),
                                    g !== s || 0 !== c && 3 !== g.nodeType || (p = f + c),
                                    3 === g.nodeType && (f += g.nodeValue.length),
                                    null !== (y = g.firstChild); )
                                        v = g,
                                        g = y;
                                    for (; ; ) {
                                        if (g === i)
                                            break t;
                                        if (v === u && ++h === l && (d = f),
                                        v === s && ++m === c && (p = f),
                                        null !== (y = g.nextSibling))
                                            break;
                                        v = (g = v).parentNode
                                    }
                                    g = y
                                }
                                u = -1 === d || -1 === p ? null : {
                                    start: d,
                                    end: p
                                }
                            } else
                                u = null;
                        u = u || {
                            start: 0,
                            end: 0
                        }
                    } else
                        u = null;
                    Vr = {
                        focusedElem: i,
                        selectionRange: u
                    },
                    Yt = !1,
                    iu = null,
                    uu = !1,
                    Qi = r;
                    do {
                        try {
                            Ou()
                        } catch (e) {
                            if (null === Qi)
                                throw Error(o(330));
                            Du(Qi, e),
                            Qi = Qi.nextEffect
                        }
                    } while (null !== Qi);
                    iu = null,
                    Qi = r;
                    do {
                        try {
                            for (i = e; null !== Qi; ) {
                                var b = Qi.flags;
                                if (16 & b && ye(Qi.stateNode, ""),
                                128 & b) {
                                    var w = Qi.alternate;
                                    if (null !== w) {
                                        var k = w.ref;
                                        null !== k && ("function" == typeof k ? k(null) : k.current = null)
                                    }
                                }
                                switch (1038 & b) {
                                case 2:
                                    bi(Qi),
                                    Qi.flags &= -3;
                                    break;
                                case 6:
                                    bi(Qi),
                                    Qi.flags &= -3,
                                    Ei(Qi.alternate, Qi);
                                    break;
                                case 1024:
                                    Qi.flags &= -1025;
                                    break;
                                case 1028:
                                    Qi.flags &= -1025,
                                    Ei(Qi.alternate, Qi);
                                    break;
                                case 4:
                                    Ei(Qi.alternate, Qi);
                                    break;
                                case 8:
                                    xi(i, u = Qi);
                                    var x = u.alternate;
                                    vi(u),
                                    null !== x && vi(x)
                                }
                                Qi = Qi.nextEffect
                            }
                        } catch (e) {
                            if (null === Qi)
                                throw Error(o(330));
                            Du(Qi, e),
                            Qi = Qi.nextEffect
                        }
                    } while (null !== Qi);
                    if (k = Vr,
                    w = pr(),
                    b = k.focusedElem,
                    i = k.selectionRange,
                    w !== b && b && b.ownerDocument && dr(b.ownerDocument.documentElement, b)) {
                        null !== i && hr(b) && (w = i.start,
                        void 0 === (k = i.end) && (k = w),
                        "selectionStart"in b ? (b.selectionStart = w,
                        b.selectionEnd = Math.min(k, b.value.length)) : (k = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (k = k.getSelection(),
                        u = b.textContent.length,
                        x = Math.min(i.start, u),
                        i = void 0 === i.end ? x : Math.min(i.end, u),
                        !k.extend && x > i && (u = i,
                        i = x,
                        x = u),
                        u = fr(b, x),
                        l = fr(b, i),
                        u && l && (1 !== k.rangeCount || k.anchorNode !== u.node || k.anchorOffset !== u.offset || k.focusNode !== l.node || k.focusOffset !== l.offset) && ((w = w.createRange()).setStart(u.node, u.offset),
                        k.removeAllRanges(),
                        x > i ? (k.addRange(w),
                        k.extend(l.node, l.offset)) : (w.setEnd(l.node, l.offset),
                        k.addRange(w))))),
                        w = [];
                        for (k = b; k = k.parentNode; )
                            1 === k.nodeType && w.push({
                                element: k,
                                left: k.scrollLeft,
                                top: k.scrollTop
                            });
                        for ("function" == typeof b.focus && b.focus(),
                        b = 0; b < w.length; b++)
                            (k = w[b]).element.scrollLeft = k.left,
                            k.element.scrollTop = k.top
                    }
                    Yt = !!$r,
                    Vr = $r = null,
                    e.current = n,
                    Qi = r;
                    do {
                        try {
                            for (b = e; null !== Qi; ) {
                                var E = Qi.flags;
                                if (36 & E && hi(b, Qi.alternate, Qi),
                                128 & E) {
                                    w = void 0;
                                    var S = Qi.ref;
                                    if (null !== S) {
                                        var C = Qi.stateNode;
                                        switch (Qi.tag) {
                                        case 5:
                                            w = C;
                                            break;
                                        default:
                                            w = C
                                        }
                                        "function" == typeof S ? S(w) : S.current = w
                                    }
                                }
                                Qi = Qi.nextEffect
                            }
                        } catch (e) {
                            if (null === Qi)
                                throw Error(o(330));
                            Du(Qi, e),
                            Qi = Qi.nextEffect
                        }
                    } while (null !== Qi);
                    Qi = null,
                    Ia(),
                    Pi = a
                } else
                    e.current = n;
                if (Xi)
                    Xi = !1,
                    Gi = e,
                    Zi = t;
                else
                    for (Qi = r; null !== Qi; )
                        t = Qi.nextEffect,
                        Qi.nextEffect = null,
                        8 & Qi.flags && ((E = Qi).sibling = null,
                        E.stateNode = null),
                        Qi = t;
                if (0 === (r = e.pendingLanes) && (Yi = null),
                1 === r ? e === ru ? nu++ : (nu = 0,
                ru = e) : nu = 0,
                n = n.stateNode,
                ka && "function" == typeof ka.onCommitFiberRoot)
                    try {
                        ka.onCommitFiberRoot(wa, n, void 0, 64 == (64 & n.current.flags))
                    } catch (e) {}
                if (pu(e, Aa()),
                qi)
                    throw qi = !1,
                    e = Ki,
                    Ki = null,
                    e;
                return 0 != (8 & Pi) || Wa(),
                null
            }
            function Ou() {
                for (; null !== Qi; ) {
                    var e = Qi.alternate;
                    uu || null === iu || (0 != (8 & Qi.flags) ? et(Qi, iu) && (uu = !0) : 13 === Qi.tag && Ci(e, Qi) && et(Qi, iu) && (uu = !0));
                    var t = Qi.flags;
                    0 != (256 & t) && pi(e, Qi),
                    0 == (512 & t) || Xi || (Xi = !0,
                    Ha(97, (function() {
                        return Mu(),
                        null
                    }
                    ))),
                    Qi = Qi.nextEffect
                }
            }
            function Mu() {
                if (90 !== Zi) {
                    var e = 97 < Zi ? 97 : Zi;
                    return Zi = 90,
                    Ba(e, Iu)
                }
                return !1
            }
            function Tu(e, t) {
                Ji.push(t, e),
                Xi || (Xi = !0,
                Ha(97, (function() {
                    return Mu(),
                    null
                }
                )))
            }
            function ju(e, t) {
                eu.push(t, e),
                Xi || (Xi = !0,
                Ha(97, (function() {
                    return Mu(),
                    null
                }
                )))
            }
            function Iu() {
                if (null === Gi)
                    return !1;
                var e = Gi;
                if (Gi = null,
                0 != (48 & Pi))
                    throw Error(o(331));
                var t = Pi;
                Pi |= 32;
                var n = eu;
                eu = [];
                for (var r = 0; r < n.length; r += 2) {
                    var a = n[r]
                      , l = n[r + 1]
                      , i = a.destroy;
                    if (a.destroy = void 0,
                    "function" == typeof i)
                        try {
                            i()
                        } catch (e) {
                            if (null === l)
                                throw Error(o(330));
                            Du(l, e)
                        }
                }
                for (n = Ji,
                Ji = [],
                r = 0; r < n.length; r += 2) {
                    a = n[r],
                    l = n[r + 1];
                    try {
                        var u = a.create;
                        a.destroy = u()
                    } catch (e) {
                        if (null === l)
                            throw Error(o(330));
                        Du(l, e)
                    }
                }
                for (u = e.current.firstEffect; null !== u; )
                    e = u.nextEffect,
                    u.nextEffect = null,
                    8 & u.flags && (u.sibling = null,
                    u.stateNode = null),
                    u = e;
                return Pi = t,
                Wa(),
                !0
            }
            function Ru(e, t, n) {
                ul(e, t = si(0, t = oi(n, t), 1)),
                t = su(),
                null !== (e = du(e, 1)) && (Bt(e, 1, t),
                pu(e, t))
            }
            function Du(e, t) {
                if (3 === e.tag)
                    Ru(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            Ru(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Yi || !Yi.has(r))) {
                                var a = ci(n, e = oi(t, e), 1);
                                if (ul(n, a),
                                a = su(),
                                null !== (n = du(n, 1)))
                                    Bt(n, 1, a),
                                    pu(n, a);
                                else if ("function" == typeof r.componentDidCatch && (null === Yi || !Yi.has(r)))
                                    try {
                                        r.componentDidCatch(t, e)
                                    } catch (e) {}
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function $u(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = su(),
                e.pingedLanes |= e.suspendedLanes & n,
                Li === e && (Mi & n) === n && (4 === Ii || 3 === Ii && (62914560 & Mi) === Mi && 500 > Aa() - Ui ? ku(e, 0) : Ai |= n),
                pu(e, t)
            }
            function Vu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t),
                0 === (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === Fa() ? 1 : 2 : (0 === lu && (lu = Di),
                0 === (t = Ft(62914560 & ~lu)) && (t = 4194304))),
                n = su(),
                null !== (e = du(e, t)) && (Bt(e, t, n),
                pu(e, n))
            }
            function Au(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.flags = 0,
                this.lastEffect = this.firstEffect = this.nextEffect = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Fu(e, t, n, r) {
                return new Au(e,t,n,r)
            }
            function Uu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Bu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Fu(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.nextEffect = null,
                n.firstEffect = null,
                n.lastEffect = null),
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function Hu(e, t, n, r, a, l) {
                var i = 2;
                if (r = e,
                "function" == typeof e)
                    Uu(e) && (i = 1);
                else if ("string" == typeof e)
                    i = 5;
                else
                    e: switch (e) {
                    case S:
                        return Wu(n.children, a, l, t);
                    case R:
                        i = 8,
                        a |= 16;
                        break;
                    case C:
                        i = 8,
                        a |= 1;
                        break;
                    case _:
                        return (e = Fu(12, n, t, 8 | a)).elementType = _,
                        e.type = _,
                        e.lanes = l,
                        e;
                    case L:
                        return (e = Fu(13, n, t, a)).type = L,
                        e.elementType = L,
                        e.lanes = l,
                        e;
                    case O:
                        return (e = Fu(19, n, t, a)).elementType = O,
                        e.lanes = l,
                        e;
                    case D:
                        return Qu(n, a, l, t);
                    case $:
                        return (e = Fu(24, n, t, a)).elementType = $,
                        e.lanes = l,
                        e;
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                            case N:
                                i = 10;
                                break e;
                            case z:
                                i = 9;
                                break e;
                            case P:
                                i = 11;
                                break e;
                            case M:
                                i = 14;
                                break e;
                            case T:
                                i = 16,
                                r = null;
                                break e;
                            case j:
                                i = 22;
                                break e
                            }
                        throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                return (t = Fu(i, n, t, a)).elementType = e,
                t.type = r,
                t.lanes = l,
                t
            }
            function Wu(e, t, n, r) {
                return (e = Fu(7, e, r, t)).lanes = n,
                e
            }
            function Qu(e, t, n, r) {
                return (e = Fu(23, e, r, t)).elementType = D,
                e.lanes = n,
                e
            }
            function qu(e, t, n) {
                return (e = Fu(6, e, null, t)).lanes = n,
                e
            }
            function Ku(e, t, n) {
                return (t = Fu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Yu(e, t, n) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.pendingContext = this.context = null,
                this.hydrate = n,
                this.callbackNode = null,
                this.callbackPriority = 0,
                this.eventTimes = Ut(0),
                this.expirationTimes = Ut(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = Ut(0),
                this.mutableSourceEagerHydrationData = null
            }
            function Xu(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: E,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }
            function Gu(e, t, n, r) {
                var a = t.current
                  , l = su()
                  , i = cu(a);
                e: if (n) {
                    t: {
                        if (Xe(n = n._reactInternals) !== n || 1 !== n.tag)
                            throw Error(o(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                            case 3:
                                u = u.stateNode.context;
                                break t;
                            case 1:
                                if (ha(u.type)) {
                                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                            }
                            u = u.return
                        } while (null !== u);
                        throw Error(o(171))
                    }
                    if (1 === n.tag) {
                        var s = n.type;
                        if (ha(s)) {
                            n = va(n, s, u);
                            break e
                        }
                    }
                    n = u
                } else
                    n = sa;
                return null === t.context ? t.context = n : t.pendingContext = n,
                (t = il(l, i)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                ul(a, t),
                fu(a, i, l),
                i
            }
            function Zu(e) {
                if (!(e = e.current).child)
                    return null;
                switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode
                }
            }
            function Ju(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function es(e, t) {
                Ju(e, t),
                (e = e.alternate) && Ju(e, t)
            }
            function ts(e, t, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new Yu(e,t,null != n && !0 === n.hydrate),
                t = Fu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0),
                n.current = t,
                t.stateNode = n,
                ll(t),
                e[Gr] = n.current,
                Pr(8 === e.nodeType ? e.parentNode : e),
                r)
                    for (e = 0; e < r.length; e++) {
                        var a = (t = r[e])._getVersion;
                        a = a(t._source),
                        null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a)
                    }
                this._internalRoot = n
            }
            function ns(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function rs(e, t, n, r, a) {
                var l = n._reactRootContainer;
                if (l) {
                    var o = l._internalRoot;
                    if ("function" == typeof a) {
                        var i = a;
                        a = function() {
                            var e = Zu(o);
                            i.call(e)
                        }
                    }
                    Gu(t, o, e, a)
                } else {
                    if (l = n._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                        !t)
                            for (var n; n = e.lastChild; )
                                e.removeChild(n);
                        return new ts(e,0,t ? {
                            hydrate: !0
                        } : void 0)
                    }(n, r),
                    o = l._internalRoot,
                    "function" == typeof a) {
                        var u = a;
                        a = function() {
                            var e = Zu(o);
                            u.call(e)
                        }
                    }
                    yu((function() {
                        Gu(t, o, e, a)
                    }
                    ))
                }
                return Zu(o)
            }
            function as(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ns(t))
                    throw Error(o(200));
                return Xu(e, t, null, n)
            }
            Wi = function(e, t, n) {
                var r = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || fa.current)
                        jo = !0;
                    else {
                        if (0 == (n & r)) {
                            switch (jo = !1,
                            t.tag) {
                            case 3:
                                Ho(t),
                                Hl();
                                break;
                            case 5:
                                Ml(t);
                                break;
                            case 1:
                                ha(t.type) && ya(t);
                                break;
                            case 4:
                                Ll(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r = t.memoizedProps.value;
                                var a = t.type._context;
                                ua(Ya, a._currentValue),
                                a._currentValue = r;
                                break;
                            case 13:
                                if (null !== t.memoizedState)
                                    return 0 != (n & t.child.childLanes) ? Yo(e, t, n) : (ua(jl, 1 & jl.current),
                                    null !== (t = ni(e, t, n)) ? t.sibling : null);
                                ua(jl, 1 & jl.current);
                                break;
                            case 19:
                                if (r = 0 != (n & t.childLanes),
                                0 != (64 & e.flags)) {
                                    if (r)
                                        return ti(e, t, n);
                                    t.flags |= 64
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null,
                                a.tail = null,
                                a.lastEffect = null),
                                ua(jl, jl.current),
                                r)
                                    break;
                                return null;
                            case 23:
                            case 24:
                                return t.lanes = 0,
                                Vo(e, t, n)
                            }
                            return ni(e, t, n)
                        }
                        jo = 0 != (16384 & e.flags)
                    }
                else
                    jo = !1;
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    if (r = t.type,
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps,
                    a = pa(t, ca.current),
                    nl(t, n),
                    a = ro(null, t, r, e, a, n),
                    t.flags |= 1,
                    "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                        if (t.tag = 1,
                        t.memoizedState = null,
                        t.updateQueue = null,
                        ha(r)) {
                            var l = !0;
                            ya(t)
                        } else
                            l = !1;
                        t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                        ll(t);
                        var i = r.getDerivedStateFromProps;
                        "function" == typeof i && pl(t, r, i, e),
                        a.updater = hl,
                        t.stateNode = a,
                        a._reactInternals = t,
                        yl(t, r, e, n),
                        t = Bo(null, t, r, !0, l, n)
                    } else
                        t.tag = 0,
                        Io(null, t, a, n),
                        t = t.child;
                    return t;
                case 16:
                    a = t.elementType;
                    e: {
                        switch (null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.flags |= 2),
                        e = t.pendingProps,
                        a = (l = a._init)(a._payload),
                        t.type = a,
                        l = t.tag = function(e) {
                            if ("function" == typeof e)
                                return Uu(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === P)
                                    return 11;
                                if (e === M)
                                    return 14
                            }
                            return 2
                        }(a),
                        e = Ka(a, e),
                        l) {
                        case 0:
                            t = Fo(null, t, a, e, n);
                            break e;
                        case 1:
                            t = Uo(null, t, a, e, n);
                            break e;
                        case 11:
                            t = Ro(null, t, a, e, n);
                            break e;
                        case 14:
                            t = Do(null, t, a, Ka(a.type, e), r, n);
                            break e
                        }
                        throw Error(o(306, a, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    a = t.pendingProps,
                    Fo(e, t, r, a = t.elementType === r ? a : Ka(r, a), n);
                case 1:
                    return r = t.type,
                    a = t.pendingProps,
                    Uo(e, t, r, a = t.elementType === r ? a : Ka(r, a), n);
                case 3:
                    if (Ho(t),
                    r = t.updateQueue,
                    null === e || null === r)
                        throw Error(o(282));
                    if (r = t.pendingProps,
                    a = null !== (a = t.memoizedState) ? a.element : null,
                    ol(e, t),
                    cl(t, r, null, n),
                    (r = t.memoizedState.element) === a)
                        Hl(),
                        t = ni(e, t, n);
                    else {
                        if ((l = (a = t.stateNode).hydrate) && (Dl = Wr(t.stateNode.containerInfo.firstChild),
                        Rl = t,
                        l = $l = !0),
                        l) {
                            if (null != (e = a.mutableSourceEagerHydrationData))
                                for (a = 0; a < e.length; a += 2)
                                    (l = e[a])._workInProgressVersionPrimary = e[a + 1],
                                    Wl.push(l);
                            for (n = Sl(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 1024,
                                n = n.sibling
                        } else
                            Io(e, t, r, n),
                            Hl();
                        t = t.child
                    }
                    return t;
                case 5:
                    return Ml(t),
                    null === e && Fl(t),
                    r = t.type,
                    a = t.pendingProps,
                    l = null !== e ? e.memoizedProps : null,
                    i = a.children,
                    Fr(r, a) ? i = null : null !== l && Fr(r, l) && (t.flags |= 16),
                    Ao(e, t),
                    Io(e, t, i, n),
                    t.child;
                case 6:
                    return null === e && Fl(t),
                    null;
                case 13:
                    return Yo(e, t, n);
                case 4:
                    return Ll(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = El(t, null, r, n) : Io(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    a = t.pendingProps,
                    Ro(e, t, r, a = t.elementType === r ? a : Ka(r, a), n);
                case 7:
                    return Io(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return Io(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        r = t.type._context,
                        a = t.pendingProps,
                        i = t.memoizedProps,
                        l = a.value;
                        var u = t.type._context;
                        if (ua(Ya, u._currentValue),
                        u._currentValue = l,
                        null !== i)
                            if (u = i.value,
                            0 === (l = ir(u, l) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, l) : 1073741823))) {
                                if (i.children === a.children && !fa.current) {
                                    t = ni(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                                    var s = u.dependencies;
                                    if (null !== s) {
                                        i = u.child;
                                        for (var c = s.firstContext; null !== c; ) {
                                            if (c.context === r && 0 != (c.observedBits & l)) {
                                                1 === u.tag && ((c = il(-1, n & -n)).tag = 2,
                                                ul(u, c)),
                                                u.lanes |= n,
                                                null !== (c = u.alternate) && (c.lanes |= n),
                                                tl(u.return, n),
                                                s.lanes |= n;
                                                break
                                            }
                                            c = c.next
                                        }
                                    } else
                                        i = 10 === u.tag && u.type === t.type ? null : u.child;
                                    if (null !== i)
                                        i.return = u;
                                    else
                                        for (i = u; null !== i; ) {
                                            if (i === t) {
                                                i = null;
                                                break
                                            }
                                            if (null !== (u = i.sibling)) {
                                                u.return = i.return,
                                                i = u;
                                                break
                                            }
                                            i = i.return
                                        }
                                    u = i
                                }
                        Io(e, t, a.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return a = t.type,
                    r = (l = t.pendingProps).children,
                    nl(t, n),
                    r = r(a = rl(a, l.unstable_observedBits)),
                    t.flags |= 1,
                    Io(e, t, r, n),
                    t.child;
                case 14:
                    return l = Ka(a = t.type, t.pendingProps),
                    Do(e, t, a, l = Ka(a.type, l), r, n);
                case 15:
                    return $o(e, t, t.type, t.pendingProps, r, n);
                case 17:
                    return r = t.type,
                    a = t.pendingProps,
                    a = t.elementType === r ? a : Ka(r, a),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    t.tag = 1,
                    ha(r) ? (e = !0,
                    ya(t)) : e = !1,
                    nl(t, n),
                    gl(t, r, a),
                    yl(t, r, a, n),
                    Bo(null, t, r, !0, e, n);
                case 19:
                    return ti(e, t, n);
                case 23:
                case 24:
                    return Vo(e, t, n)
                }
                throw Error(o(156, t.tag))
            }
            ,
            ts.prototype.render = function(e) {
                Gu(e, this._internalRoot, null, null)
            }
            ,
            ts.prototype.unmount = function() {
                var e = this._internalRoot
                  , t = e.containerInfo;
                Gu(null, e, null, (function() {
                    t[Gr] = null
                }
                ))
            }
            ,
            tt = function(e) {
                13 === e.tag && (fu(e, 4, su()),
                es(e, 4))
            }
            ,
            nt = function(e) {
                13 === e.tag && (fu(e, 67108864, su()),
                es(e, 67108864))
            }
            ,
            rt = function(e) {
                if (13 === e.tag) {
                    var t = su()
                      , n = cu(e);
                    fu(e, n, t),
                    es(e, n)
                }
            }
            ,
            at = function(e, t) {
                return t()
            }
            ,
            Ne = function(e, t, n) {
                switch (t) {
                case "input":
                    if (ne(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = na(r);
                                if (!a)
                                    throw Error(o(90));
                                G(r),
                                ne(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    se(e, n);
                    break;
                case "select":
                    null != (t = n.value) && oe(e, !!n.multiple, t, !1)
                }
            }
            ,
            Te = vu,
            je = function(e, t, n, r, a) {
                var l = Pi;
                Pi |= 4;
                try {
                    return Ba(98, e.bind(null, t, n, r, a))
                } finally {
                    0 === (Pi = l) && (Hi(),
                    Wa())
                }
            }
            ,
            Ie = function() {
                0 == (49 & Pi) && (function() {
                    if (null !== tu) {
                        var e = tu;
                        tu = null,
                        e.forEach((function(e) {
                            e.expiredLanes |= 24 & e.pendingLanes,
                            pu(e, Aa())
                        }
                        ))
                    }
                    Wa()
                }(),
                Mu())
            }
            ,
            Re = function(e, t) {
                var n = Pi;
                Pi |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (Pi = n) && (Hi(),
                    Wa())
                }
            }
            ;
            var ls = {
                Events: [ea, ta, na, Oe, Me, Mu, {
                    current: !1
                }]
            }
              , os = {
                findFiberByHostInstance: Jr,
                bundleType: 0,
                version: "17.0.2",
                rendererPackageName: "react-dom"
            }
              , is = {
                bundleType: os.bundleType,
                version: os.version,
                rendererPackageName: os.rendererPackageName,
                rendererConfig: os.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: k.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = Je(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: os.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!us.isDisabled && us.supportsFiber)
                    try {
                        wa = us.inject(is),
                        ka = us
                    } catch (ge) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ls,
            t.createPortal = as,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render)
                        throw Error(o(188));
                    throw Error(o(268, Object.keys(e)))
                }
                return e = null === (e = Je(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e, t) {
                var n = Pi;
                if (0 != (48 & n))
                    return e(t);
                Pi |= 1;
                try {
                    if (e)
                        return Ba(99, e.bind(null, t))
                } finally {
                    Pi = n,
                    Wa()
                }
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!ns(t))
                    throw Error(o(200));
                return rs(null, e, t, !0, n)
            }
            ,
            t.render = function(e, t, n) {
                if (!ns(t))
                    throw Error(o(200));
                return rs(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!ns(e))
                    throw Error(o(40));
                return !!e._reactRootContainer && (yu((function() {
                    rs(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[Gr] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = vu,
            t.unstable_createPortal = function(e, t) {
                return as(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }
            ,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!ns(n))
                    throw Error(o(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(o(38));
                return rs(e, t, n, !1, r)
            }
            ,
            t.version = "17.0.2"
        }
        ,
        935: (e,t,n)=>{
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
            }(),
            e.exports = n(448)
        }
        ,
        921: (e,t)=>{
            "use strict";
            var n = "function" == typeof Symbol && Symbol.for
              , r = n ? Symbol.for("react.element") : 60103
              , a = n ? Symbol.for("react.portal") : 60106
              , l = n ? Symbol.for("react.fragment") : 60107
              , o = n ? Symbol.for("react.strict_mode") : 60108
              , i = n ? Symbol.for("react.profiler") : 60114
              , u = n ? Symbol.for("react.provider") : 60109
              , s = n ? Symbol.for("react.context") : 60110
              , c = n ? Symbol.for("react.async_mode") : 60111
              , f = n ? Symbol.for("react.concurrent_mode") : 60111
              , d = n ? Symbol.for("react.forward_ref") : 60112
              , p = n ? Symbol.for("react.suspense") : 60113
              , h = n ? Symbol.for("react.suspense_list") : 60120
              , m = n ? Symbol.for("react.memo") : 60115
              , g = n ? Symbol.for("react.lazy") : 60116
              , v = n ? Symbol.for("react.block") : 60121
              , y = n ? Symbol.for("react.fundamental") : 60117
              , b = n ? Symbol.for("react.responder") : 60118
              , w = n ? Symbol.for("react.scope") : 60119;
            function k(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case r:
                        switch (e = e.type) {
                        case c:
                        case f:
                        case l:
                        case i:
                        case o:
                        case p:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                            case s:
                            case d:
                            case g:
                            case m:
                            case u:
                                return e;
                            default:
                                return t
                            }
                        }
                    case a:
                        return t
                    }
                }
            }
            function x(e) {
                return k(e) === f
            }
            t.AsyncMode = c,
            t.ConcurrentMode = f,
            t.ContextConsumer = s,
            t.ContextProvider = u,
            t.Element = r,
            t.ForwardRef = d,
            t.Fragment = l,
            t.Lazy = g,
            t.Memo = m,
            t.Portal = a,
            t.Profiler = i,
            t.StrictMode = o,
            t.Suspense = p,
            t.isAsyncMode = function(e) {
                return x(e) || k(e) === c
            }
            ,
            t.isConcurrentMode = x,
            t.isContextConsumer = function(e) {
                return k(e) === s
            }
            ,
            t.isContextProvider = function(e) {
                return k(e) === u
            }
            ,
            t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }
            ,
            t.isForwardRef = function(e) {
                return k(e) === d
            }
            ,
            t.isFragment = function(e) {
                return k(e) === l
            }
            ,
            t.isLazy = function(e) {
                return k(e) === g
            }
            ,
            t.isMemo = function(e) {
                return k(e) === m
            }
            ,
            t.isPortal = function(e) {
                return k(e) === a
            }
            ,
            t.isProfiler = function(e) {
                return k(e) === i
            }
            ,
            t.isStrictMode = function(e) {
                return k(e) === o
            }
            ,
            t.isSuspense = function(e) {
                return k(e) === p
            }
            ,
            t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === l || e === f || e === i || e === o || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === s || e.$$typeof === d || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === v)
            }
            ,
            t.typeOf = k
        }
        ,
        864: (e,t,n)=>{
            "use strict";
            e.exports = n(921)
        }
        ,
        408: (e,t,n)=>{
            "use strict";
            var r = n(418)
              , a = 60103
              , l = 60106;
            t.Fragment = 60107,
            t.StrictMode = 60108,
            t.Profiler = 60114;
            var o = 60109
              , i = 60110
              , u = 60112;
            t.Suspense = 60113;
            var s = 60115
              , c = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var f = Symbol.for;
                a = f("react.element"),
                l = f("react.portal"),
                t.Fragment = f("react.fragment"),
                t.StrictMode = f("react.strict_mode"),
                t.Profiler = f("react.profiler"),
                o = f("react.provider"),
                i = f("react.context"),
                u = f("react.forward_ref"),
                t.Suspense = f("react.suspense"),
                s = f("react.memo"),
                c = f("react.lazy")
            }
            var d = "function" == typeof Symbol && Symbol.iterator;
            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , m = {};
            function g(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = m,
                this.updater = n || h
            }
            function v() {}
            function y(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = m,
                this.updater = n || h
            }
            g.prototype.isReactComponent = {},
            g.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            v.prototype = g.prototype;
            var b = y.prototype = new v;
            b.constructor = y,
            r(b, g.prototype),
            b.isPureReactComponent = !0;
            var w = {
                current: null
            }
              , k = Object.prototype.hasOwnProperty
              , x = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function E(e, t, n) {
                var r, l = {}, o = null, i = null;
                if (null != t)
                    for (r in void 0 !== t.ref && (i = t.ref),
                    void 0 !== t.key && (o = "" + t.key),
                    t)
                        k.call(t, r) && !x.hasOwnProperty(r) && (l[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u)
                    l.children = n;
                else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    l.children = s
                }
                if (e && e.defaultProps)
                    for (r in u = e.defaultProps)
                        void 0 === l[r] && (l[r] = u[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: o,
                    ref: i,
                    props: l,
                    _owner: w.current
                }
            }
            function S(e) {
                return "object" == typeof e && null !== e && e.$$typeof === a
            }
            var C = /\/+/g;
            function _(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function N(e, t, n, r, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var u = !1;
                if (null === e)
                    u = !0;
                else
                    switch (i) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case a:
                        case l:
                            u = !0
                        }
                    }
                if (u)
                    return o = o(u = e),
                    e = "" === r ? "." + _(u, 0) : r,
                    Array.isArray(o) ? (n = "",
                    null != e && (n = e.replace(C, "$&/") + "/"),
                    N(o, t, n, "", (function(e) {
                        return e
                    }
                    ))) : null != o && (S(o) && (o = function(e, t) {
                        return {
                            $$typeof: a,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, n + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(C, "$&/") + "/") + e)),
                    t.push(o)),
                    1;
                if (u = 0,
                r = "" === r ? "." : r + ":",
                Array.isArray(e))
                    for (var s = 0; s < e.length; s++) {
                        var c = r + _(i = e[s], s);
                        u += N(i, t, n, c, o)
                    }
                else if ("function" == typeof (c = function(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = d && e[d] || e["@@iterator"]) ? e : null
                }(e)))
                    for (e = c.call(e),
                    s = 0; !(i = e.next()).done; )
                        u += N(i = i.value, t, n, c = r + _(i, s++), o);
                else if ("object" === i)
                    throw t = "" + e,
                    Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return u
            }
            function z(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return N(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                }
                )),
                r
            }
            function P(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(),
                    e._status = 0,
                    e._result = t,
                    t.then((function(t) {
                        0 === e._status && (t = t.default,
                        e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 === e._status && (e._status = 2,
                        e._result = t)
                    }
                    ))
                }
                if (1 === e._status)
                    return e._result;
                throw e._result
            }
            var L = {
                current: null
            };
            function O() {
                var e = L.current;
                if (null === e)
                    throw Error(p(321));
                return e
            }
            var M = {
                ReactCurrentDispatcher: L,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: w,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            t.Children = {
                map: z,
                forEach: function(e, t, n) {
                    z(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return z(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return z(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!S(e))
                        throw Error(p(143));
                    return e
                }
            },
            t.Component = g,
            t.PureComponent = y,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M,
            t.cloneElement = function(e, t, n) {
                if (null == e)
                    throw Error(p(267, e));
                var l = r({}, e.props)
                  , o = e.key
                  , i = e.ref
                  , u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref,
                    u = w.current),
                    void 0 !== t.key && (o = "" + t.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (c in t)
                        k.call(t, c) && !x.hasOwnProperty(c) && (l[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c)
                    l.children = n;
                else if (1 < c) {
                    s = Array(c);
                    for (var f = 0; f < c; f++)
                        s[f] = arguments[f + 2];
                    l.children = s
                }
                return {
                    $$typeof: a,
                    type: e.type,
                    key: o,
                    ref: i,
                    props: l,
                    _owner: u
                }
            }
            ,
            t.createContext = function(e, t) {
                return void 0 === t && (t = null),
                (e = {
                    $$typeof: i,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: o,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = E,
            t.createFactory = function(e) {
                var t = E.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            t.isValidElement = S,
            t.lazy = function(e) {
                return {
                    $$typeof: c,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: s,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.useCallback = function(e, t) {
                return O().useCallback(e, t)
            }
            ,
            t.useContext = function(e, t) {
                return O().useContext(e, t)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useEffect = function(e, t) {
                return O().useEffect(e, t)
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return O().useImperativeHandle(e, t, n)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return O().useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return O().useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return O().useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return O().useRef(e)
            }
            ,
            t.useState = function(e) {
                return O().useState(e)
            }
            ,
            t.version = "17.0.2"
        }
        ,
        294: (e,t,n)=>{
            "use strict";
            e.exports = n(408)
        }
        ,
        53: (e,t)=>{
            "use strict";
            var n, r, a, l;
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var i = Date
                  , u = i.now();
                t.unstable_now = function() {
                    return i.now() - u
                }
            }
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var s = null
                  , c = null
                  , f = function() {
                    if (null !== s)
                        try {
                            var e = t.unstable_now();
                            s(!0, e),
                            s = null
                        } catch (e) {
                            throw setTimeout(f, 0),
                            e
                        }
                };
                n = function(e) {
                    null !== s ? setTimeout(n, 0, e) : (s = e,
                    setTimeout(f, 0))
                }
                ,
                r = function(e, t) {
                    c = setTimeout(e, t)
                }
                ,
                a = function() {
                    clearTimeout(c)
                }
                ,
                t.unstable_shouldYield = function() {
                    return !1
                }
                ,
                l = t.unstable_forceFrameRate = function() {}
            } else {
                var d = window.setTimeout
                  , p = window.clearTimeout;
                if ("undefined" != typeof console) {
                    var h = window.cancelAnimationFrame;
                    "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
                    "function" != typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var m = !1
                  , g = null
                  , v = -1
                  , y = 5
                  , b = 0;
                t.unstable_shouldYield = function() {
                    return t.unstable_now() >= b
                }
                ,
                l = function() {}
                ,
                t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : y = 0 < e ? Math.floor(1e3 / e) : 5
                }
                ;
                var w = new MessageChannel
                  , k = w.port2;
                w.port1.onmessage = function() {
                    if (null !== g) {
                        var e = t.unstable_now();
                        b = e + y;
                        try {
                            g(!0, e) ? k.postMessage(null) : (m = !1,
                            g = null)
                        } catch (e) {
                            throw k.postMessage(null),
                            e
                        }
                    } else
                        m = !1
                }
                ,
                n = function(e) {
                    g = e,
                    m || (m = !0,
                    k.postMessage(null))
                }
                ,
                r = function(e, n) {
                    v = d((function() {
                        e(t.unstable_now())
                    }
                    ), n)
                }
                ,
                a = function() {
                    p(v),
                    v = -1
                }
            }
            function x(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; ; ) {
                    var r = n - 1 >>> 1
                      , a = e[r];
                    if (!(void 0 !== a && 0 < C(a, t)))
                        break e;
                    e[r] = t,
                    e[n] = a,
                    n = r
                }
            }
            function E(e) {
                return void 0 === (e = e[0]) ? null : e
            }
            function S(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length; r < a; ) {
                            var l = 2 * (r + 1) - 1
                              , o = e[l]
                              , i = l + 1
                              , u = e[i];
                            if (void 0 !== o && 0 > C(o, n))
                                void 0 !== u && 0 > C(u, o) ? (e[r] = u,
                                e[i] = n,
                                r = i) : (e[r] = o,
                                e[l] = n,
                                r = l);
                            else {
                                if (!(void 0 !== u && 0 > C(u, n)))
                                    break e;
                                e[r] = u,
                                e[i] = n,
                                r = i
                            }
                        }
                    }
                    return t
                }
                return null
            }
            function C(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var _ = []
              , N = []
              , z = 1
              , P = null
              , L = 3
              , O = !1
              , M = !1
              , T = !1;
            function j(e) {
                for (var t = E(N); null !== t; ) {
                    if (null === t.callback)
                        S(N);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        S(N),
                        t.sortIndex = t.expirationTime,
                        x(_, t)
                    }
                    t = E(N)
                }
            }
            function I(e) {
                if (T = !1,
                j(e),
                !M)
                    if (null !== E(_))
                        M = !0,
                        n(R);
                    else {
                        var t = E(N);
                        null !== t && r(I, t.startTime - e)
                    }
            }
            function R(e, n) {
                M = !1,
                T && (T = !1,
                a()),
                O = !0;
                var l = L;
                try {
                    for (j(n),
                    P = E(_); null !== P && (!(P.expirationTime > n) || e && !t.unstable_shouldYield()); ) {
                        var o = P.callback;
                        if ("function" == typeof o) {
                            P.callback = null,
                            L = P.priorityLevel;
                            var i = o(P.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" == typeof i ? P.callback = i : P === E(_) && S(_),
                            j(n)
                        } else
                            S(_);
                        P = E(_)
                    }
                    if (null !== P)
                        var u = !0;
                    else {
                        var s = E(N);
                        null !== s && r(I, s.startTime - n),
                        u = !1
                    }
                    return u
                } finally {
                    P = null,
                    L = l,
                    O = !1
                }
            }
            var D = l;
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                M || O || (M = !0,
                n(R))
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return L
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return E(_)
            }
            ,
            t.unstable_next = function(e) {
                switch (L) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = L
                }
                var n = L;
                L = t;
                try {
                    return e()
                } finally {
                    L = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = D,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = L;
                L = e;
                try {
                    return t()
                } finally {
                    L = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, l, o) {
                var i = t.unstable_now();
                switch ("object" == typeof o && null !== o ? o = "number" == typeof (o = o.delay) && 0 < o ? i + o : i : o = i,
                e) {
                case 1:
                    var u = -1;
                    break;
                case 2:
                    u = 250;
                    break;
                case 5:
                    u = 1073741823;
                    break;
                case 4:
                    u = 1e4;
                    break;
                default:
                    u = 5e3
                }
                return e = {
                    id: z++,
                    callback: l,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: u = o + u,
                    sortIndex: -1
                },
                o > i ? (e.sortIndex = o,
                x(N, e),
                null === E(_) && e === E(N) && (T ? a() : T = !0,
                r(I, o - i))) : (e.sortIndex = u,
                x(_, e),
                M || O || (M = !0,
                n(R))),
                e
            }
            ,
            t.unstable_wrapCallback = function(e) {
                var t = L;
                return function() {
                    var n = L;
                    L = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        L = n
                    }
                }
            }
        }
        ,
        840: (e,t,n)=>{
            "use strict";
            e.exports = n(53)
        }
        ,
        121: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            }),
            e = n.hmd(e);
            const r = function(e) {
                var t, n = e.Symbol;
                return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
                n.observable = t) : t = "@@observable",
                t
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : e)
        }
    }, n = {};
    function r(e) {
        var a = n[e];
        if (void 0 !== a)
            return a.exports;
        var l = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e](l, l.exports, r),
        l.loaded = !0,
        l.exports
    }
    r.m = t,
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.f = {},
    r.e = e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e, t),
    t)), [])),
    r.u = e=>e + ".bundle.js",
    r.miniCssF = e=>{}
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    r.l = (t,n,a,l)=>{
        if (e[t])
            e[t].push(n);
        else {
            var o, i;
            if (void 0 !== a)
                for (var u = document.getElementsByTagName("script"), s = 0; s < u.length; s++) {
                    var c = u[s];
                    if (c.getAttribute("src") == t) {
                        o = c;
                        break
                    }
                }
            o || (i = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            r.nc && o.setAttribute("nonce", r.nc),
            o.src = t),
            e[t] = [n];
            var f = (n,r)=>{
                o.onerror = o.onload = null,
                clearTimeout(d);
                var a = e[t];
                if (delete e[t],
                o.parentNode && o.parentNode.removeChild(o),
                a && a.forEach((e=>e(r))),
                n)
                    return n(r)
            }
              , d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = f.bind(null, o.onerror),
            o.onload = f.bind(null, o.onload),
            i && document.head.appendChild(o)
        }
    }
    ,
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        r.p = e
    }
    )(),
    (()=>{
        var e = {
            143: 0
        };
        r.f.j = (t,n)=>{
            var a = r.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    n.push(a[2]);
                else {
                    var l = new Promise(((n,r)=>a = e[t] = [n, r]));
                    n.push(a[2] = l);
                    var o = r.p + r.u(t)
                      , i = new Error;
                    r.l(o, (n=>{
                        if (r.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var l = n && ("load" === n.type ? "missing" : n.type)
                              , o = n && n.target && n.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")",
                            i.name = "ChunkLoadError",
                            i.type = l,
                            i.request = o,
                            a[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t,n)=>{
            var a, l, [o,i,u] = n, s = 0;
            for (a in i)
                r.o(i, a) && (r.m[a] = i[a]);
            for (u && u(r),
            t && t(n); s < o.length; s++)
                l = o[s],
                r.o(e, l) && e[l] && e[l][0](),
                e[o[s]] = 0
        }
          , n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    (()=>{
        "use strict";
        var e = r(935)
          , t = r(294)
          , n = r(121)
          , a = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , l = {
            INIT: "@@redux/INIT" + a(),
            REPLACE: "@@redux/REPLACE" + a(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + a()
            }
        };
        function o(e) {
            if ("object" != typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function i(e, t) {
            var n = t && t.type;
            return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }
        r(697);
        var u = t.createContext(null);
        var s = function(e) {
            e()
        }
          , c = function() {
            return s
        }
          , f = {
            notify: function() {}
        };
        var d = function() {
            function e(e, t) {
                this.store = e,
                this.parentSub = t,
                this.unsubscribe = null,
                this.listeners = f,
                this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
            }
            var t = e.prototype;
            return t.addNestedSub = function(e) {
                return this.trySubscribe(),
                this.listeners.subscribe(e)
            }
            ,
            t.notifyNestedSubs = function() {
                this.listeners.notify()
            }
            ,
            t.handleChangeWrapper = function() {
                this.onStateChange && this.onStateChange()
            }
            ,
            t.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }
            ,
            t.trySubscribe = function() {
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper),
                this.listeners = function() {
                    var e = c()
                      , t = null
                      , n = null;
                    return {
                        clear: function() {
                            t = null,
                            n = null
                        },
                        notify: function() {
                            e((function() {
                                for (var e = t; e; )
                                    e.callback(),
                                    e = e.next
                            }
                            ))
                        },
                        get: function() {
                            for (var e = [], n = t; n; )
                                e.push(n),
                                n = n.next;
                            return e
                        },
                        subscribe: function(e) {
                            var r = !0
                              , a = n = {
                                callback: e,
                                next: null,
                                prev: n
                            };
                            return a.prev ? a.prev.next = a : t = a,
                            function() {
                                r && null !== t && (r = !1,
                                a.next ? a.next.prev = a.prev : n = a.prev,
                                a.prev ? a.prev.next = a.next : t = a.next)
                            }
                        }
                    }
                }())
            }
            ,
            t.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(),
                this.unsubscribe = null,
                this.listeners.clear(),
                this.listeners = f)
            }
            ,
            e
        }()
          , p = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? t.useLayoutEffect : t.useEffect;
        const h = function(e) {
            var n = e.store
              , r = e.context
              , a = e.children
              , l = (0,
            t.useMemo)((function() {
                var e = new d(n);
                return e.onStateChange = e.notifyNestedSubs,
                {
                    store: n,
                    subscription: e
                }
            }
            ), [n])
              , o = (0,
            t.useMemo)((function() {
                return n.getState()
            }
            ), [n]);
            p((function() {
                var e = l.subscription;
                return e.trySubscribe(),
                o !== n.getState() && e.notifyNestedSubs(),
                function() {
                    e.tryUnsubscribe(),
                    e.onStateChange = null
                }
            }
            ), [l, o]);
            var i = r || u;
            return t.createElement(i.Provider, {
                value: l
            }, a)
        };
        r(679),
        r(864);
        function m() {
            return (0,
            t.useContext)(u)
        }
        function g(e) {
            void 0 === e && (e = u);
            var n = e === u ? m : function() {
                return (0,
                t.useContext)(e)
            }
            ;
            return function() {
                return n().store
            }
        }
        var v = g();
        function y(e) {
            void 0 === e && (e = u);
            var t = e === u ? v : g(e);
            return function() {
                return t().dispatch
            }
        }
        var b = y()
          , w = function(e, t) {
            return e === t
        };
        function k(e) {
            void 0 === e && (e = u);
            var n = e === u ? m : function() {
                return (0,
                t.useContext)(e)
            }
            ;
            return function(e, r) {
                void 0 === r && (r = w);
                var a = n()
                  , l = function(e, n, r, a) {
                    var l, o = (0,
                    t.useReducer)((function(e) {
                        return e + 1
                    }
                    ), 0)[1], i = (0,
                    t.useMemo)((function() {
                        return new d(r,a)
                    }
                    ), [r, a]), u = (0,
                    t.useRef)(), s = (0,
                    t.useRef)(), c = (0,
                    t.useRef)(), f = (0,
                    t.useRef)(), h = r.getState();
                    try {
                        if (e !== s.current || h !== c.current || u.current) {
                            var m = e(h);
                            l = void 0 !== f.current && n(m, f.current) ? f.current : m
                        } else
                            l = f.current
                    } catch (e) {
                        throw u.current && (e.message += "\nThe error may be correlated with this previous error:\n" + u.current.stack + "\n\n"),
                        e
                    }
                    return p((function() {
                        s.current = e,
                        c.current = h,
                        f.current = l,
                        u.current = void 0
                    }
                    )),
                    p((function() {
                        function e() {
                            try {
                                var e = s.current(r.getState());
                                if (n(e, f.current))
                                    return;
                                f.current = e
                            } catch (e) {
                                u.current = e
                            }
                            o()
                        }
                        return i.onStateChange = e,
                        i.trySubscribe(),
                        e(),
                        function() {
                            return i.tryUnsubscribe()
                        }
                    }
                    ), [r, i]),
                    l
                }(e, r, a.store, a.subscription);
                return (0,
                t.useDebugValue)(l),
                l
            }
        }
        var x, E = k();
        x = e.unstable_batchedUpdates,
        s = x;
        class S {
            constructor(e) {
                this.order = {
                    ...e.order
                },
                this.byId = {
                    ...e.byId
                },
                this.allIds = [...e.allIds],
                this.tree = {};
                for (let t in e.tree)
                    this.tree[t] = {
                        ...e.tree[t]
                    }
            }
            addParent(e) {
                this.tree[e] || (this.tree[e] = {},
                this.order[e] = this.allIds.length,
                this.allIds.push(e))
            }
            addChild(e, ...t) {
                for (let n of t)
                    this.tree[n][e] = !0;
                this.addParent(e)
            }
            getDescendents(e) {
                const t = e=>{
                    n.add(e),
                    r.push(e);
                    for (let r in this.tree[e])
                        n.has(r) || t(r)
                }
                  , n = new Set
                  , r = [];
                return t(e),
                r
            }
            deleteNode(e) {
                const t = this.getDescendents(e);
                let n;
                t.sort(((e,t)=>this.order[t] - this.order[e]));
                for (let e of t) {
                    n = this.order[e],
                    this.allIds.splice(n, 1);
                    sce.obj3d.children.splice(n + 1, 1)[0].traverse((e=>{
                        e.geometry && e.geometry.dispose(),
                        e.material && e.material.dispose()
                    }
                    )),
                    delete this.tree[e],
                    delete this.byId[e],
                    delete this.order[e]
                }
                for (let e = n; e < this.allIds.length; e++)
                    this.order[this.allIds[e]] = e;
                const r = new Set(t);
                for (let e in this.tree)
                    for (let t in this.tree[e])
                        r.has(t) && delete this.tree[e][t];
                return this
            }
        }
        var C = r(145)
          , _ = r.n(C);
        const N = {
            byId: {},
            allIds: [],
            tree: {},
            order: {},
            visible: {}
        };
        let z;
        const P = {
            dialog: {},
            fileHandle: null,
            fileName: "Untitled",
            selectedList: [],
            selectedSet: {}
        };
        const L = function(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var a = t[r];
                0,
                "function" == typeof e[a] && (n[a] = e[a])
            }
            var o, u = Object.keys(n);
            try {
                !function(e) {
                    Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        if (void 0 === n(void 0, {
                            type: l.INIT
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === n(void 0, {
                            type: l.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + l.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }
                    ))
                }(n)
            } catch (e) {
                o = e
            }
            return function(e, t) {
                if (void 0 === e && (e = {}),
                o)
                    throw o;
                for (var r = !1, a = {}, l = 0; l < u.length; l++) {
                    var s = u[l]
                      , c = n[s]
                      , f = e[s]
                      , d = c(f, t);
                    if (void 0 === d) {
                        var p = i(s, t);
                        throw new Error(p)
                    }
                    a[s] = d,
                    r = r || d !== f
                }
                return (r = r || u.length !== Object.keys(e).length) ? a : e
            }
        }({
            ui: function(e=P, t) {
                switch (t.type) {
                case "set-active-sketch":
                case "rx-sketch":
                    return _()(e, {
                        sketchActive: {
                            $set: !0
                        }
                    });
                case "finish-sketch":
                    return _()(e, {
                        sketchActive: {
                            $set: !1
                        }
                    });
                case "set-dialog":
                    return _()(e, {
                        dialog: {
                            $set: {
                                target: t.target,
                                action: t.action
                            }
                        },
                        mode: {
                            $set: ""
                        }
                    });
                case "clear-dialog":
                    return _()(e, {
                        dialog: {
                            $set: {}
                        },
                        mode: {
                            $set: ""
                        }
                    });
                case "set-file-handle":
                    return _()(e, {
                        fileHandle: {
                            $set: t.fileHandle
                        },
                        modified: {
                            $set: !1
                        }
                    });
                case "new-part":
                    return P;
                case "set-modified":
                    return _()(e, {
                        modified: {
                            $set: t.status
                        }
                    });
                case "delete-node":
                case "rx-extrusion":
                    return _()(e, {
                        modified: {
                            $set: !0
                        }
                    });
                case "restore-state":
                    return _()(e, {
                        fileName: {
                            $set: t.fileName
                        }
                    });
                case "on-pick":
                    const n = e.selectedList.indexOf(t.obj)
                      , r = "mesh" == t.obj.userData.type || "sketch" == t.obj.userData.type;
                    return -1 == n ? _()(e, {
                        selectedList: {
                            $push: [t.obj]
                        },
                        selectedSet: e=>r ? {
                            ...e,
                            [t.obj.name]: !0
                        } : e
                    }) : "selpoint" != t.obj.userData.type ? _()(e, {
                        selectedList: {
                            $splice: [[n, 1]]
                        },
                        selectedSet: e=>r ? {
                            ...e,
                            [t.obj.name]: !1
                        } : e
                    }) : e;
                case "clear-selection":
                    return e.selectedList.length ? _()(e, {
                        selectedList: {
                            $set: []
                        },
                        selectedSet: {
                            $set: {}
                        }
                    }) : e;
                case "set-mode":
                    return _()(e, {
                        mode: {
                            $set: t.mode
                        }
                    });
                default:
                    return e
                }
            },
            treeEntries: function(e=N, t) {
                switch (t.type) {
                case "rx-sketch":
                    return _()(e, {
                        byId: {
                            [t.obj.obj3d.name]: {
                                $set: t.obj
                            }
                        },
                        allIds: {
                            $push: [t.obj.obj3d.name]
                        },
                        tree: {
                            [t.obj.obj3d.name]: {
                                $set: {}
                            }
                        },
                        order: {
                            [t.obj.obj3d.name]: {
                                $set: e.allIds.length
                            }
                        },
                        visible: {
                            [t.obj.obj3d.name]: {
                                $set: !0
                            }
                        }
                    });
                case "set-entry-visibility":
                    return _()(e, {
                        visible: {
                            $merge: t.obj
                        }
                    });
                case "set-active-sketch":
                    return z = JSON.stringify(t.sketch),
                    _()(e, {
                        visible: {
                            [t.sketch.obj3d.name]: {
                                $set: !0
                            }
                        }
                    });
                case "finish-sketch":
                    return _()(e, {
                        visible: {
                            [sce.activeSketch.obj3d.name]: {
                                $set: !1
                            }
                        }
                    });
                case "restore-sketch":
                    const n = sce.loadSketch(z);
                    return sce.obj3d.children.splice(e.order[sce.activeSketch.obj3d.name] + 1, 1, n.obj3d)[0].traverse((e=>{
                        e.geometry && e.geometry.dispose(),
                        e.material && e.material.dispose()
                    }
                    )),
                    sce.activeSketch = n,
                    _()(e, {
                        byId: {
                            [sce.activeSketch.obj3d.name]: {
                                $set: n
                            }
                        }
                    });
                case "rx-extrusion":
                    return _()(e, {
                        byId: {
                            [t.mesh.name]: {
                                $set: t.mesh
                            }
                        },
                        allIds: {
                            $push: [t.mesh.name]
                        },
                        tree: {
                            [t.sketchId]: {
                                [t.mesh.name]: {
                                    $set: !0
                                }
                            },
                            [t.mesh.name]: {
                                $set: {}
                            }
                        },
                        order: {
                            [t.mesh.name]: {
                                $set: e.allIds.length
                            }
                        },
                        visible: {
                            [t.mesh.name]: {
                                $set: !0
                            }
                        }
                    });
                case "rx-boolean":
                    return _()(e, {
                        byId: {
                            [t.mesh.name]: {
                                $set: t.mesh
                            }
                        },
                        allIds: {
                            $push: [t.mesh.name]
                        },
                        tree: {
                            [t.deps[0]]: {
                                [t.mesh.name]: {
                                    $set: !0
                                }
                            },
                            [t.deps[1]]: {
                                [t.mesh.name]: {
                                    $set: !0
                                }
                            },
                            [t.mesh.name]: {
                                $set: {}
                            }
                        },
                        order: {
                            [t.mesh.name]: {
                                $set: e.allIds.length
                            }
                        }
                    });
                case "delete-node":
                    const r = new S(e).deleteNode(t.id);
                    return _()(e, {
                        $merge: r
                    });
                case "restore-state":
                    return t.state;
                case "new-part":
                    return N;
                default:
                    return e
                }
            }
        });
        var O = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , M = t.createContext && t.createContext(O)
          , T = function() {
            return (T = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ).apply(this, arguments)
        }
          , j = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
        function I(e) {
            return e && e.map((function(e, n) {
                return t.createElement(e.tag, T({
                    key: n
                }, e.attr), I(e.child))
            }
            ))
        }
        function R(e) {
            return function(n) {
                return t.createElement(D, T({
                    attr: T({}, e.attr)
                }, n), I(e.child))
            }
        }
        function D(e) {
            var n = function(n) {
                var r, a = e.attr, l = e.size, o = e.title, i = j(e, ["attr", "size", "title"]), u = l || n.size || "1em";
                return n.className && (r = n.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                t.createElement("svg", T({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, n.attr, a, i, {
                    className: r,
                    style: T(T({
                        color: e.color || n.color
                    }, n.style), e.style),
                    height: u,
                    width: u,
                    xmlns: "http://www.w3.org/2000/svg"
                }), o && t.createElement("title", null, o), e.children)
            };
            return void 0 !== M ? t.createElement(M.Consumer, null, (function(e) {
                return n(e)
            }
            )) : n(O)
        }
        function $(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    }
                }]
            })(e)
        }
        function V(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    }
                }]
            })(e)
        }
        function A(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                    }
                }]
            })(e)
        }
        function F(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    }
                }]
            })(e)
        }
        function U(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
                    }
                }]
            })(e)
        }
        function B(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
                    }
                }]
            })(e)
        }
        function H(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
                    }
                }]
            })(e)
        }
        function W(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    }
                }]
            })(e)
        }
        function Q(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                    }
                }]
            })(e)
        }
        function q(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    }
                }]
            })(e)
        }
        function K(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                    }
                }]
            })(e)
        }
        function Y(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    }
                }]
            })(e)
        }
        function X(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 496 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    }
                }]
            })(e)
        }
        function G(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 2703.214 1272.608"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "m72.373 651.52c-10.264-439.09 468.9-747.49 889.47-506.49 138.55 79.397 256.17 196.99 382.63 325.42 5.749 5.839 8.404 5.236 13.785-0.188 197.81-199.4 484.22-503.45 885.4-385.16 168.83 49.784 286.15 159.32 346.26 324.38 201.16 552.41-375.87 1009.8-870.69 706.59-124.8-76.466-232.58-181.98-359.98-311.73-6.801-6.927-9.868-5.946-16.086 0.324-144.74 145.96-300.54 304.61-492.98 371.02-391.6 135.15-767.01-98.201-777.8-524.17zm245.04-8.512c12.485 253.64 207.59 371.88 415.47 326.92 179.65-38.857 330.36-196.86 458.72-328.81 4.325-4.446 1.9-6.251-1.072-9.025-111.49-104.07-220.36-231.18-357.58-296.6-265.94-126.78-516.43 59.149-515.54 307.52zm2067.8-10.72c-7.903-245.12-201.29-378.7-424.13-326.43-175.33 41.126-325.16 198.38-449.64 326.28-4.318 4.437-2.66 6.509 0.879 9.811 155.64 145.24 339.3 374.57 587.44 332.77 165.29-27.84 285.82-171.81 285.45-342.43z"
                    }
                }]
            })(e)
        }
        function Z(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 512 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                    }
                }]
            })(e)
        }
        function J(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 576 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                    }
                }]
            })(e)
        }
        function ee(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 512 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
                    }
                }]
            })(e)
        }
        function te() {
            return (te = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const ne = ()=>{
            const e = E((e=>e.treeEntries))
              , n = E((e=>e.ui.fileHandle))
              , r = E((e=>e.ui.fileName));
            return t.createElement("div", {
                className: "sideNav flex flex-col bg-gray-800"
            }, t.createElement("div", {
                className: "w-full text-gray-50 h-9 text-lg mx-1 border-0 flex items-center focus:outline-none bg-transparent"
            }, (n ? n.name : r).replace(/\.[^/.]+$/, "")), t.createElement("div", {
                className: "overflow-auto"
            }, e.allIds.map(((e,n)=>t.createElement(ae, {
                key: e,
                entId: e
            })))))
        }
          , re = {
            mesh: function(e) {
                return R({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 512 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"
                        }
                    }]
                })(e)
            },
            sketch: function(e) {
                return R({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 448 512"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
                        }
                    }]
                })(e)
            }
        }
          , ae = ({entId: e})=>{
            const n = b()
              , r = E((t=>t.treeEntries.byId[e]))
              , a = E((t=>t.treeEntries.visible[e]))
              , l = E((t=>t.ui.selectedSet[e]))
              , o = E((e=>e.ui.dialog.target));
            let i, u;
            r.obj3d ? (i = r.obj3d,
            u = r) : i = r;
            let s = re[i.userData.type];
            const [c,f] = (0,
            t.useReducer)((e=>e + 1), 0)
              , [d,p] = (0,
            t.useState)(!1)
              , h = {
                onPointerEnter: ()=>{
                    d || (p(!0),
                    "sketch" == i.userData.type && (i.visible = !0),
                    sce.setHover(i, 1),
                    sce.render())
                }
                ,
                onPointerLeave: ()=>{
                    d && (p(!1),
                    "sketch" != i.userData.type || sce.selected.includes(i) || a || (i.visible = !1),
                    sce.selected.includes(i) || (sce.setHover(i, 0),
                    sce.render()))
                }
                ,
                onClick: ()=>{
                    const e = sce.selected.indexOf(i);
                    -1 == e ? sce.setHover(i, 1) : sce.setHover(sce.selected[e], 0),
                    n({
                        type: "on-pick",
                        obj: i
                    }),
                    sce.render()
                }
            };
            return t.createElement("div", te({
                className: "cursor-pointer select-none fill-current text-gray-200 w-full h-8\n  flex justify-start items-center text-xs " + (d || l ? "bg-gray-600" : "bg-transparent")
            }, h, {
                tooltip: "click to add to selection"
            }), t.createElement(s, {
                className: "h-full w-auto p-2 flex-none fill-current " + (e == o ? "text-green-500" : "text-gray-200")
            }), t.createElement("div", {
                className: "pl-1 h-full flex justify-start items-center overflow-x-hidden whitespace-nowrap "
            }, e), t.createElement("div", {
                className: "flex h-full ml-auto"
            }, d && "(" != i.name[0] && t.createElement(W, {
                className: "btn-green h-full w-auto p-1.5",
                onClick: e=>{
                    e.stopPropagation(),
                    "sketch" == i.userData.type ? (sce.activeSketch && (n({
                        type: "finish-sketch"
                    }),
                    sce.activeSketch.deactivate()),
                    u.activate(),
                    n({
                        type: "set-active-sketch",
                        sketch: u
                    }),
                    sce.clearSelection(),
                    sce.activeSketch = u,
                    n({
                        type: "set-dialog",
                        action: "sketch",
                        target: i.name
                    }),
                    sce.render()) : 2 == i.userData.featureInfo.length && n({
                        type: "set-dialog",
                        action: "extrude-edit",
                        target: i.name
                    })
                }
            }), d && t.createElement($, {
                className: "btn-green h-full w-auto p-1.5",
                onClick: t=>{
                    t.stopPropagation(),
                    n({
                        type: "delete-node",
                        id: e
                    }),
                    sce.render()
                }
            }), (d || a) && t.createElement(F, {
                className: "btn-green h-full w-auto p-1.5",
                onClick: t=>{
                    t.stopPropagation(),
                    n({
                        type: "set-entry-visibility",
                        obj: {
                            [e]: !a
                        }
                    }),
                    i.visible = !a,
                    "mesh" == i.userData.type && i.traverse((e=>a ? e.layers.disable(1) : e.layers.enable(1))),
                    sce.render(),
                    f()
                }
            })))
        }
        ;
        function le() {
            return (le = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function oe(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M3.92 1.94a12.5 12.5 0 014.454 1.71",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5
            }), t.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                d: "M.75.75h2v2h-2zM13.25 13.25h2v2h-2zM9.433 4.336h2v2h-2z"
            }), t.createElement("rect", {
                width: .8,
                height: 4,
                x: 1.35,
                y: 12,
                ry: 0
            }), t.createElement("rect", {
                width: .8,
                height: 4,
                x: -14.65,
                ry: 0,
                transform: "rotate(-90)"
            }), t.createElement("path", {
                d: "M12.113 7.26a12.5 12.5 0 011.983 5.035",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5
            }))
        }
        function ie(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("g", {
                stroke: "currentColor"
            }, t.createElement("path", {
                strokeLinecap: "round",
                d: "M7 7h2v2H7z"
            }), t.createElement("path", {
                d: "M1.847 14.153l4.305-4.306M9.847 6.153l4.305-4.306",
                fill: "none",
                strokeWidth: .983
            }), t.createElement("path", {
                d: "M10.034 10.034l3.932 3.932",
                fill: "none",
                strokeWidth: 1.51
            })))
        }
        function ue(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("defs", null, t.createElement("marker", {
                id: "prefix__a",
                refX: 0,
                refY: 0,
                orient: "auto",
                overflow: "visible"
            }, t.createElement("path", {
                d: "M-1.154 0l1.73-1v2l-1.73-1z",
                fillRule: "evenodd",
                stroke: "currentColor",
                strokeWidth: ".2pt",
                fill: "currentColor"
            })), t.createElement("marker", {
                id: "prefix__b",
                refX: 0,
                refY: 0,
                orient: "auto",
                overflow: "visible"
            }, t.createElement("path", {
                d: "M1.154 0l-1.73 1v-2l1.73 1z",
                fillRule: "evenodd",
                stroke: "currentColor",
                strokeWidth: ".2pt",
                fill: "currentColor"
            }))), t.createElement("path", {
                d: "M4.009 10.009l6-6",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                markerStart: "url(#prefix__a)",
                markerEnd: "url(#prefix__b)"
            }), t.createElement("path", {
                d: "M15.485 4.516l-4-4M4.516 15.485l-4-4",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: .893
            }))
        }
        function se(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 512 512"
            }, e), t.createElement("path", {
                style: {
                    lineHeight: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantPosition: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantAlternates: "normal",
                    fontVariantEastAsian: "normal",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    textIndent: 0,
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    textOrientation: "mixed",
                    whiteSpace: "normal",
                    shapePadding: 0,
                    shapeMargin: 0,
                    inlineSize: 0,
                    isolation: "auto",
                    mixBlendMode: "normal",
                    solidColor: "#000",
                    solidOpacity: 1
                },
                d: "M256 0L144 144h64v240h96V144.802l64-1.604z",
                color: "currentColor",
                fontWeight: 400,
                fontFamily: "sans-serif",
                overflow: "visible",
                fillRule: "evenodd"
            }), t.createElement("path", {
                style: {
                    lineHeight: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantPosition: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantAlternates: "normal",
                    fontVariantEastAsian: "normal",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    textIndent: 0,
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    textOrientation: "mixed",
                    whiteSpace: "normal",
                    shapePadding: 0,
                    shapeMargin: 0,
                    inlineSize: 0,
                    isolation: "auto",
                    mixBlendMode: "normal",
                    solidColor: "#000",
                    solidOpacity: 1
                },
                d: "M176 302.768L10.059 369.145a16.002 16.002 0 00-.825 29.353l240 112a16.002 16.002 0 0013.532 0l240-112a16.002 16.002 0 00-.825-29.353L336 302.768v34.464l119.746 47.899L256 478.344 56.254 385.13 176 337.232v-34.464z",
                color: "currentColor",
                fontWeight: 400,
                fontFamily: "sans-serif",
                overflow: "visible"
            }))
        }
        function ce(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M14.87.102L4.968 4.346l2.129 2.127-6.952 6.994 1.418 1.408 6.948-6.988 2.115 2.115 4.242-9.9z"
            }), t.createElement("path", {
                d: "M15.281 8.387l-3.999 4-.96-.961-1.96 4.573 4.574-1.96-.96-.96 3.998-4z",
                fillOpacity: .7
            }))
        }
        function fe(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M14.506 8.007l-13-.012",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2
            }))
        }
        function de(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M5.55 5.5c-.018.166-.05.329-.05.5 0 2.491 2.009 4.5 4.5 4.5.171 0 .334-.032.5-.05V6c0-.286-.214-.5-.5-.5z",
                fill: "currentColor",
                fillOpacity: .7
            }), t.createElement("rect", {
                width: 10,
                height: 10,
                x: 1,
                y: 5,
                rx: 1,
                ry: 1,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }), t.createElement("circle", {
                cx: 10,
                cy: 6,
                r: 5,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }))
        }
        function pe(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("g", {
                stroke: "currentColor"
            }, t.createElement("path", {
                d: "M2.75 11.75l1.5-4.5m2.5-.5l2.5 2.5m2.5-.5l1.5-4.5",
                fill: "none",
                strokeWidth: 1.5
            }), t.createElement("path", {
                strokeLinecap: "round",
                d: "M1 13h2v2H1zM4 4h2v2H4zM10 10h2v2h-2zM13 1h2v2h-2z"
            })))
        }
        function he(e) {
            return t.createElement("img", le({
                src: "./images/1.jpg",
                width: "1em",
                height: "1em"
            }, e));
        }
        function me(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 105.833 169.333",
                height: "1em",
                width: "1em"
            }, e), t.createElement("path", {
                d: "M46.56 30.571l-.001 9.986a11.89 11.89 0 00-7.912 11.225v21.404a11.865 11.865 0 0011.891 11.892h4.757a11.865 11.865 0 0011.891-11.892V51.782c0-5.209-3.315-9.615-7.959-11.23l-.031-9.981zm-3.157 0c-22.398 0-40.43 18.032-40.43 40.43v54.929c0 22.398 18.032 40.43 40.43 40.43H62.43c22.398 0 40.43-18.032 40.43-40.43V71c0-22.398-18.032-40.43-40.43-40.43z",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.946,
                strokeLinecap: "round",
                paintOrder: "markers stroke fill"
            }), t.createElement("path", {
                d: "M70.184 40.523a35.596 35.596 0 0124.352 33.852v23.307h-41.62V92.71h2.38c10.504 0 19.13-8.629 19.13-19.132V52.173c0-4.456-1.626-8.462-4.242-11.65z",
                fill: "#fff",
                paintOrder: "markers stroke fill"
            }))
        }
        function ge(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("g", {
                "aria-label": "STL",
                style: {
                    lineHeight: 1.25
                },
                fontWeight: 400,
                fontSize: 12,
                fontFamily: "Ubuntu Condensed",
                letterSpacing: 0,
                wordSpacing: 0
            }, t.createElement("path", {
                d: "M2.576 11.42q.648 0 .996-.36.36-.36.36-.972 0-.324-.108-.576-.108-.252-.288-.456-.168-.204-.396-.372t-.468-.336q-.276-.192-.576-.408-.3-.216-.552-.504-.24-.288-.396-.672-.156-.384-.156-.9 0-.504.168-.912.18-.408.48-.696.312-.288.732-.444.432-.156.924-.156.48 0 .888.12.408.12.684.288l-.336.852q-.252-.168-.552-.252-.288-.096-.612-.096-.588 0-.948.324-.348.312-.348.924 0 .336.108.588.12.252.3.456.192.204.432.372.252.168.528.348.276.18.564.396.288.216.516.504.24.276.384.66.156.372.156.888 0 .468-.144.888t-.456.744q-.3.312-.768.504-.456.18-1.08.18-.576 0-1.008-.132-.432-.132-.768-.348L1.172 11q.312.192.636.312.336.108.768.108zM10.28 3.848v.924H8.432v7.392h-1.08V4.772H5.504v-.924zM15.164 11.24v.924h-3.708V3.848h1.08v7.392z",
                style: {
                    InkscapeFontSpecification: "'Ubuntu Condensed, '"
                }
            })))
        }
        function ve(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M2 5.5c-.286 0-.5.214-.5.5v8c0 .286.214.5.5.5h8c.286 0 .5-.214.5-.5v-2.525a5.504 5.504 0 01-.5.025A5.508 5.508 0 014.5 6c0-.169.01-.335.025-.5z",
                fill: "currentColor",
                fillOpacity: .7
            }), t.createElement("rect", {
                width: 10,
                height: 10,
                x: 1,
                y: 5,
                rx: 1,
                ry: 1,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }), t.createElement("circle", {
                cx: 10,
                cy: 6,
                r: 5,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }))
        }
        function ye(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16"
            }, e), t.createElement("g", {
                fill: "none",
                stroke: "currentColor"
            }, t.createElement("path", {
                d: "M1.497 15.004l13.847-8.686",
                strokeWidth: 2
            }), t.createElement("circle", {
                cx: 5.25,
                cy: 5.25,
                r: 4.5,
                strokeWidth: 1.5,
                strokeLinejoin: "round"
            })))
        }
        function be(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M5.55 5.5c-.018.166-.05.329-.05.5 0 2.491 2.009 4.5 4.5 4.5.171 0 .334-.032.5-.05V6c0-.286-.214-.5-.5-.5z",
                fill: "currentColor",
                fillOpacity: .7
            }), t.createElement("path", {
                d: "M2 5.5c-.286 0-.5.214-.5.5v8c0 .286.214.5.5.5h8c.286 0 .5-.214.5-.5v-2.525a5.504 5.504 0 01-.5.025A5.508 5.508 0 014.5 6c0-.169.01-.335.025-.5zM10 1.5a4.477 4.477 0 00-4.225 3H10c.822 0 1.5.678 1.5 1.5v4.225A4.477 4.477 0 0014.5 6c0-2.491-2.009-4.5-4.5-4.5z",
                fill: "currentColor",
                fillOpacity: .7
            }), t.createElement("rect", {
                width: 10,
                height: 10,
                x: 1,
                y: 5,
                rx: 1,
                ry: 1,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }), t.createElement("circle", {
                cx: 10,
                cy: 6,
                r: 5,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }))
        }
        function we(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                className: "prefix__bi prefix__bi-intersect",
                viewBox: "0 0 16 16"
            }, e), t.createElement("path", {
                d: "M8.012 1.5L8 14.5",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2
            }))
        }
        const ke = ()=>{
            const e = E((e=>e.ui.dialog))
              , n = E((e=>e.treeEntries))
              , r = b()
              , a = (0,
            t.useRef)()
              , l = n.byId[e.target];
            (0,
            t.useEffect)((()=>{
                a.current && a.current.focus()
            }
            ), [e]);
            const o = ()=>{
                const e = sce.extrude(l, a.current.value);
                r({
                    type: "rx-extrusion",
                    mesh: e,
                    sketchId: l.obj3d.name
                }),
                sce.activeSketch == l && (r({
                    type: "finish-sketch"
                }),
                l.deactivate()),
                r({
                    type: "clear-dialog"
                }),
                sce.render()
            }
              , i = ()=>{
                sce.activeSketch == l ? r({
                    type: "set-dialog",
                    action: "sketch"
                }) : r({
                    type: "clear-dialog"
                })
            }
              , u = ()=>{
                l.userData.featureInfo[1] = a.current.value,
                sce.refreshNode(l.name, n),
                r({
                    type: "set-modified",
                    status: !0
                }),
                r({
                    type: "clear-dialog"
                }),
                sce.render()
            }
              , s = ()=>r({
                type: "clear-dialog"
            })
              , c = ()=>{
                (sce.activeSketch.hasChanged || sce.activeSketch.idOnActivate != id || sce.activeSketch.c_idOnActivate != sce.activeSketch.c_id) && (sce.refreshNode(sce.activeSketch.obj3d.name, n),
                r({
                    type: "set-modified",
                    status: !0
                })),
                r({
                    type: "finish-sketch"
                }),
                sce.activeSketch.deactivate(),
                sce.render(),
                r({
                    type: "clear-dialog"
                })
            }
              , f = ()=>{
                sce.newSketch ? (r({
                    type: "delete-node",
                    id: sce.activeSketch.obj3d.name
                }),
                sce.sid -= 1) : (sce.activeSketch.hasChanged || sce.activeSketch.idOnActivate != id || sce.activeSketch.c_idOnActivate != sce.activeSketch.c_id) && r({
                    type: "restore-sketch"
                }),
                r({
                    type: "finish-sketch"
                }),
                sce.activeSketch.deactivate(),
                sce.render(),
                r({
                    type: "clear-dialog"
                })
            }
            ;
            switch (e.action) {
            case "extrude":
                return t.createElement(t.Fragment, null, t.createElement("input", {
                    className: "w-10 border-t-0 border-l-0 border-r-0 border-b border-gray-50 text-gray-50",
                    type: "number",
                    defaultValue: "10",
                    step: "0.1",
                    ref: a
                }), t.createElement(ce, {
                    className: "btn text-gray-200 w-auto h-full p-3.5",
                    onClick: ()=>a.current.value *= -1
                }), t.createElement(V, {
                    className: "btn w-auto h-full p-3.5 text-green-500",
                    onClick: o
                }), t.createElement(Y, {
                    className: "btn w-auto h-full p-3.5 text-red-500",
                    onClick: i
                }));
            case "extrude-edit":
                return t.createElement(t.Fragment, null, t.createElement("input", {
                    className: "w-10 border-t-0 border-l-0 border-r-0 border-b border-gray-50 text-gray-50",
                    type: "number",
                    defaultValue: l.userData.featureInfo[1],
                    step: "0.1",
                    ref: a
                }), t.createElement(ce, {
                    className: "btn text-gray-200 w-auto h-full p-3.5",
                    onClick: ()=>a.current.value *= -1
                }), t.createElement(V, {
                    className: "btn w-auto h-full p-3.5 text-green-500",
                    onClick: u
                }), t.createElement(Y, {
                    className: "btn w-auto h-full p-3.5 text-red-500",
                    onClick: s
                }));
            case "sketch":
                return t.createElement(t.Fragment, null, t.createElement(V, {
                    className: "btn w-auto h-full p-3.5 text-green-500",
                    onClick: c
                }), t.createElement(Y, {
                    className: "btn w-auto h-full p-3.5 text-red-500",
                    onClick: f
                }));
            default:
                return null
            }
        }
          , xe = document.getElementById("react");
        class Ee extends t.Component {
            constructor(e) {
                super(e),
                this.el = document.createElement("div"),
                this.setModal = e.setModal,
                this.id = e.id,
                this.handleClickout = this.handleClickout.bind(this),
                this.clickOut = null == e.clickOut || e.clickOut
            }
            handleClickout(e) {
                xe.lastChild == this.el && (e.composedPath().includes(this.el) || (this.setModal(!1),
                e.stopPropagation()))
            }
            componentDidMount() {
                xe.appendChild(this.el),
                this.clickOut && document.addEventListener("click", this.handleClickout, {
                    capture: !0
                })
            }
            componentWillUnmount() {
                document.removeEventListener("click", this.handleClickout, {
                    capture: !0
                }),
                xe.removeChild(this.el)
            }
            render() {
                return e.createPortal(this.props.children, this.el)
            }
        }
        const Se = (()=>{
            if ("top"in self && self !== top)
                try {
                    top.location
                } catch {
                    return !1
                }
            else {
                if ("chooseFileSystemEntries"in self)
                    return "chooseFileSystemEntries";
                if ("showOpenFilePicker"in self)
                    return "showOpenFilePicker"
            }
            return !1
        }
        )()
          , Ce = Se ? "chooseFileSystemEntries" === Se ? r.e(945).then(r.bind(r, 945)) : r.e(847).then(r.bind(r, 847)) : r.e(768).then(r.bind(r, 768));
        Se ? "chooseFileSystemEntries" === Se ? r.e(965).then(r.bind(r, 965)) : r.e(245).then(r.bind(r, 245)) : r.e(605).then(r.bind(r, 605));
        const _e = Se ? "chooseFileSystemEntries" === Se ? r.e(725).then(r.bind(r, 725)) : r.e(448).then(r.bind(r, 800)) : r.e(94).then(r.bind(r, 94));
        async function Ne(...e) {
            return (await _e).default(...e)
        }
        const ze = document.createElement("a");
        ze.style.display = "none",
        document.body.appendChild(ze);
        var Pe = 6e4 * (new Date).getTimezoneOffset();
        function Le(e) {
            const t = STLexp.parse(sce.selected[0], {
                binary: !0
            })
              , n = new Date(Date.now() - Pe).toISOString().slice(0, -5).replace(/:/g, "-");
            !function(e, t) {
                ze.href = URL.createObjectURL(e),
                ze.download = t,
                ze.click()
            }(new Blob([t],{
                type: "model/stl"
            }), `${e}_ ${n}.stl`)
        }
        async function Oe(e, t, n, r) {
            try {
                if (!e)
                    return await async function(e, t, n) {
                        try {
                            const r = new Blob([e],{
                                type: "application/json"
                            });
                            Me.fileName = n + Me.extensions[0];
                            t({
                                type: "set-file-handle",
                                fileHandle: await Ne(r, Me),
                                modified: !1
                            })
                        } catch (e) {
                            const t = "保存失败";
                            return console.error(t, e),
                            void alert(t)
                        }
                    }(t, n, r);
                const a = new Blob([t],{
                    type: "application/json"
                });
                await Ne(a, void 0, e, !0),
                n({
                    type: "set-modified",
                    status: !1
                })
            } catch (e) {
                const t = "保存失败";
                console.error(t, e),
                alert(t)
            }
        }
        const Me = {
            mimeTypes: ["application/json"],
            extensions: [".json"],
            multiple: !1,
            description: "Part files"
        };
        async function Te(e) {
            let t;
            try {
                t = await async function(...e) {
                    return (await Ce).default(...e)
                }(Me)
            } catch (e) {
                if ("AbortError" === e.name)
                    return;
                const t = "打开文件时发生错误";
                console.error(t, e),
                alert(t)
            }
            try {
                const n = await t.text();
                console.log(t, t.handle),
                e({
                    type: "restore-state",
                    state: sce.loadState(n),
                    fileName: t.name
                }),
                t.handle && e({
                    type: "set-file-handle",
                    fileHandle: t.handle
                })
            } catch (e) {
                const t = `An error occured reading ${fileHandle}`;
                console.error(t, e),
                alert(t)
            }
        }
        const je = ({setClip: e, clip: n})=>{
            let r;
            r = window.innerWidth / 1.6 > window.innerHeight ? 1.6 * window.innerHeight : window.innerWidth,
            r = Math.min(.9 * r, 1024);
            const a = (window.innerHeight - r / 1.6 - 32) / 2;
            return t.createElement("div", {
                className: "absolute left-0 right-0 m-auto flex flex-col overflow-hidden ",
                style: {
                    width: r,
                    top: a
                }
            }, t.createElement("div", {
                className: "text-xl flex justify-center items-center bg-blue-500 "
            }, t.createElement("div", {
                className: "text-gray-50"
            }, n[1]), t.createElement(K, {
                className: "absolute cursor-pointer text-gray-50 hover:text-gray-400 right-1",
                onClick: ()=>e(null)
            })), t.createElement("video", {
                className: "border-2 border-gray-500",
                src: n[0],
                width: "100%",
                controls: !0,
                muted: !0,
                type: "video/mp4"
            }))
        }
          , Ie = [" ", "鼠标操作", [["选择", function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                height: "1em",
                viewBox: "0 0 24 24",
                width: "1em"
            }, e), t.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }), t.createElement("path", {
                d: "M17 5h-2V3h2v2zm-2 10v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15h-6zm4-6h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 17h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-8 2h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm0-8h2V3c-1.1 0-2 .9-2 2z"
            }))
        }
        ], [function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 105.833 169.333",
                height: "1em",
                width: "1em"
            }, e), t.createElement("path", {
                d: "M46.56 30.571l-.001 9.986a11.89 11.89 0 00-7.912 11.225v21.404a11.865 11.865 0 0011.891 11.892h4.757a11.865 11.865 0 0011.891-11.892V51.782c0-5.209-3.315-9.615-7.959-11.23l-.031-9.981zm-3.157 0c-22.398 0-40.43 18.032-40.43 40.43v54.929c0 22.398 18.032 40.43 40.43 40.43H62.43c22.398 0 40.43-18.032 40.43-40.43V71c0-22.398-18.032-40.43-40.43-40.43z",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.946,
                strokeLinecap: "round",
                paintOrder: "markers stroke fill"
            }), t.createElement("path", {
                d: "M35.648 40.523a35.596 35.596 0 00-24.352 33.852v23.307h41.62V92.71h-2.378c-10.505 0-19.131-8.629-19.131-19.132V52.173c0-4.456 1.625-8.462 4.241-11.65z",
                fill: "#fff",
                paintOrder: "markers stroke fill"
            }))
        }
        , "左键单击 + 拖动"]], [["旋转", function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                "aria-label": "PowerCycle",
                viewBox: "0 0 24 24",
                className: "prefix__StyledIcon-ofa7kd-0 prefix__dSCMyp",
                width: "1em",
                height: "1em"
            }, e), t.createElement("path", {
                style: {
                    lineHeight: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantPosition: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantAlternates: "normal",
                    fontVariantEastAsian: "normal",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    textIndent: 0,
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    textOrientation: "mixed",
                    whiteSpace: "normal",
                    shapePadding: 0,
                    shapeMargin: 0,
                    inlineSize: 0,
                    isolation: "auto",
                    mixBlendMode: "normal",
                    solidColor: "#000",
                    solidOpacity: 1
                },
                d: "M11.967 3C7.023 3 3 7.042 3 12h1.8c0-3.989 3.2-7.2 7.167-7.2 2.26 0 4.233 1.068 5.545 2.7H14.7v1.8H21V3h-1.8v3.81C17.572 4.53 14.969 3 11.967 3zm7.233 9c0 3.989-3.2 7.2-7.167 7.2-2.26 0-4.233-1.068-5.545-2.7H9.3v-1.8H3V21h1.8v-3.81C6.428 19.47 9.031 21 12.033 21 16.977 21 21 16.958 21 12z",
                color: "currentColor",
                fontWeight: 400,
                fontFamily: "sans-serif",
                overflow: "visible"
            }))
        }
        ], [me, "右键点击"]], [["缩放", function(e) {
            return R({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"
                    }
                }]
            })(e)
        }
        ], [function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 105.833 169.333",
                height: "1em",
                width: "1em"
            }, e), t.createElement("path", {
                d: "M46.56 30.571l-.001 9.986a11.89 11.89 0 00-7.912 11.225v21.404a11.865 11.865 0 0011.891 11.892h4.757a11.865 11.865 0 0011.891-11.892V51.782c0-5.209-3.315-9.615-7.959-11.23l-.031-9.981zm-3.157 0c-22.398 0-40.43 18.032-40.43 40.43v54.929c0 22.398 18.032 40.43 40.43 40.43H62.43c22.398 0 40.43-18.032 40.43-40.43V71c0-22.398-18.032-40.43-40.43-40.43z",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.946,
                strokeLinecap: "round",
                paintOrder: "markers stroke fill"
            }), t.createElement("path", {
                d: "M42.607 14.547L52.95 4.204 63.226 14.48M52.95 25.827V4.204M42.607 101.655l10.343 10.342 10.276-10.275M52.95 90.374v21.623",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.946
            }))
        }
        , "向上/向下滚动"]], [["平移", function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                "aria-label": "Pan",
                viewBox: "0 0 24 24",
                className: "prefix__StyledIcon-ofa7kd-0 prefix__dSCMyp",
                width: "1em",
                height: "1em"
            }, e), t.createElement("path", {
                style: {
                    lineHeight: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantPosition: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantAlternates: "normal",
                    fontVariantEastAsian: "normal",
                    fontFeatureSettings: "normal",
                    fontVariationSettings: "normal",
                    textIndent: 0,
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    textOrientation: "mixed",
                    whiteSpace: "normal",
                    shapePadding: 0,
                    shapeMargin: 0,
                    inlineSize: 0,
                    isolation: "auto",
                    mixBlendMode: "normal",
                    solidColor: "#000",
                    solidOpacity: 1
                },
                d: "M12 2L8.314 5.686l1.239 1.239 1.57-1.571v5.77h-5.77l1.572-1.571-1.24-1.239L2 12l3.686 3.686 1.239-1.239-1.571-1.57h5.77v5.77l-1.571-1.572-1.239 1.24L12 22l3.686-3.686-1.239-1.239-1.57 1.571v-5.77h5.77l-1.572 1.571 1.24 1.239L22 12l-3.686-3.686-1.239 1.239 1.571 1.57h-5.77v-5.77l1.571 1.572 1.239-1.24z",
                color: "currentColor",
                fontWeight: 400,
                fontFamily: "sans-serif",
                overflow: "visible"
            }))
        }
        ], [function(e) {
            return t.createElement("svg", le({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 105.833 169.333",
                height: "1em",
                width: "1em"
            }, e), t.createElement("path", {
                d: "M46.56 30.571l-.001 9.986a11.89 11.89 0 00-7.912 11.225v21.404a11.865 11.865 0 0011.891 11.892h4.757a11.865 11.865 0 0011.891-11.892V51.782c0-5.209-3.315-9.615-7.959-11.23l-.031-9.981zm-3.157 0c-22.398 0-40.43 18.032-40.43 40.43v54.929c0 22.398 18.032 40.43 40.43 40.43H62.43c22.398 0 40.43-18.032 40.43-40.43V71c0-22.398-18.032-40.43-40.43-40.43z",
                fill: "none",
                stroke: "#fff",
                strokeWidth: 5.946,
                strokeLinecap: "round",
                paintOrder: "markers stroke fill"
            }), t.createElement("rect", {
                width: 13.081,
                height: 29.728,
                x: 46.376,
                y: 47.757,
                rx: 4.757,
                ry: 4.757,
                fill: "#fff",
                paintOrder: "markers stroke fill"
            }))
        }
        , "单击中键 (或", ()=>t.createElement("div", {
            className: "border border-gray-300 rounded-lg mx-2"
        }, "Ctrl"), " + ", me, " 右键单击) + 拖拽"]], "", "模型工具栏", [["草图", J], ["在选定平面或由现有模型中的三个选定点定义的平面上启动新草图。"]], [["拉伸", se], ["启动一个新的拉伸对话框。单击此按钮之前。用户必须首先选择要从中拉伸的草图"]], [["合并", be], ["创建一个新实体，它是两个选定实体的并集"]], [["相减", ve], ["创建一个新实体，该实体是第二个选定实体与第一个选定实体的布尔减法"]], [["求交", de], ["创建一个新实体，该实体是布尔交集或两个选定实体。"]], [["新文件", B], ["擦除当前工作区并启动新文件"]], [["保存", U], ["保存当前文档。首次保存时，用户可以指定保存位置和文件名"]], [["打开", H], ["从本地磁盘加载现有文件。"]], [["导出为 STL", ge], ["将所选实体导出为 3D 打印机使用的 STL 格式"]], "", "草图工具栏", [["拉伸", se], ["根据当前草图创建一个新的挤出模型"]], [["画线", pe], ["启动线段链。随后在画布上的点击会定义线段链的顶点。"]], [["画弧", oe], ["在随后的三次鼠标点击中，第一次设置起点，第二次设置终点，第三次设置半径。"]], [["度量", ue], ["添加 2 个点之间的距离，或 1 个点和 1 条直线之间的距离。选择两条直线时，添加一个角度。"]], [["重合约束", ie], ["在两点或一条直线和一个点之间重合约束"]], [["垂直", we], ["将选定的直线或两个选定的点与 Y 轴对齐"]], [["Horizontal", fe], ["将选定的直线或两个选定的点与 X 轴对齐"]], [["切线", ye], ["在两条选定的弧或一条直线和一条弧之间添加相切关系。实体之间必须有一个端点重合"]]]
          , Re = [["./images/basic-workflow.mp4", "基本物体创建工作流程"], ["./images/load-file-and-edit.mp4", "加载和编辑零件"], ["./images/export-to-3dprint.mp4", "导出零件以进行 3D 打印"], ["./images/Untitled.json.gz", "我的模型--扳手"]]
          , De = new TextDecoder
          , $e = ({setModal: e})=>{
            const n = b()
              , [r,a] = (0,
            t.useState)(null);
            return t.createElement("div", {
                className: "absolute left-0 right-0 mx-auto bg-gray-700 flex flex-col items-center text-sm lg:text-base xl:text-lg text-gray-50",
                style: {
                    width: "min(800px, 70%)",
                    height: "90%",
                    top: "calc(5% + 14px)"
                }
            }, t.createElement("div", {
                className: "w-full h-full bg-transparent overflow-y-auto overflow-x-hidden flex flex-col items-center"
            }, t.createElement("div", {
                className: "text-center text-base lg:text-lg xl:text-xl mb-2 font-bold"
            }, "演示"), t.createElement("div", {
                className: "mb-4 cursor-pointer w-min"
            }, Re.map(((r,l)=>{
                const o = ".gz" == r[0].match(/\.[0-9a-z]+$/i)[0];
                return t.createElement("div", {
                    className: "flex h-12 mx-2 items-center hover:text-green-500 whitespace-nowrap",
                    onClick: async()=>{
                        if (o) {
                            const t = sce.loadState(De.decode(new Zlib.Gunzip(new Uint8Array(await (await (await fetch(r[0])).blob()).arrayBuffer())).decompress()));
                            e(!1),
                            n({
                                type: "restore-state",
                                state: t,
                                fileName: r[0].replace(/\.[^/.]+$/, "")
                            }),
                            sce.render()
                        } else
                            a(r)
                    }
                    ,
                    key: l
                }, o ? t.createElement(Z, {
                    size: "2.5em",
                    className: "flex-shrink-0",
                    style: {
                        padding: "0.625em"
                    }
                }) : t.createElement(ee, {
                    size: "2.5em",
                    className: "flex-shrink-0",
                    style: {
                        padding: "0.625em"
                    }
                }), r[1])
            }
            ))), t.createElement("div", {
                className: "h-full w-11/12",
                style: {
                    display: "grid",
                    grid: "minmax(1em, auto) / 1fr"
                }
            }, Ie.map(((e,n)=>"string" == typeof e ? t.createElement("div", {
                className: "col-span-2 flex justify-center  text-base lg:text-lg xl:text-xl mb-2 font-bold",
                key: n
            }, e) : t.createElement(t.Fragment, {
                key: n
            }, t.createElement("div", {
                className: "flex items-center justify-end border-r-2 border-gray-50 text-right"
            }, e[0][0], t.createElement(e[0][1], {
                className: "fill-current text-gray-100 flex-shrink-0",
                width: "2.5em",
                height: "2.5em",
                size: "2.5em",
                style: {
                    padding: "0.5em"
                }
            })), t.createElement("div", {
                className: "flex items-center ml-2 my-2"
            }, e[1].map(((e,n)=>"string" == typeof e ? e : t.createElement(e, {
                className: "fill-current text-gray-100 flex-none " + (0 == n ? "mr-2" : "mx-2"),
                key: n,
                width: "1.5625em",
                height: "2.5em"
            }))))))))), t.createElement("div", {
                className: "absolute -top-7 w-full text-xl flex justify-center items-center bg-blue-500"
            }, t.createElement("div", {
                className: "text-gray-50"
            }, "爆炸扳手CAD"), t.createElement(K, {
                className: "absolute cursor-pointer text-gray-50 hover:text-gray-400 right-1",
                onClick: ()=>e(null)
            })), r && t.createElement(Ee, {
                setModal: a,
                id: "qs"
            }, t.createElement(je, {
                setClip: a,
                clip: r
            })))
        }
        ;
        function Ve(e, t) {
            switch (t.type) {
            case "resize":
                const n = Math.min(Math.min(.8 * window.innerHeight, .7 * window.innerWidth), 800);
                return {
                    ...e,
                    rect: n,
                    dragLeft: e.pg * n,
                    dragging: !0
                };
            case "move":
                return {
                    ...e,
                    pg: e.pg + t.del,
                    dragging: !1
                };
            case "drag-start":
                return {
                    ...e,
                    dragLeft: e.pg * e.rect,
                    dragging: !0
                };
            case "drag":
                const r = e.dragLeft - t.move;
                return r < 0 || r > e.rect * (Ae.length - 1) ? e : {
                    ...e,
                    dragLeft: r
                };
            case "drag-end":
                return {
                    ...e,
                    pg: Math.round(e.dragLeft / e.rect),
                    dragging: !1
                };
            default:
                console.error(t)
            }
        }
        const Ae = [["右上角的问号可以查看我的模型示例", "./images/1.jpg"], ["草图勾勒出创意的二维轮廓", "./images/sculpt.gif"], ["将草图形状拉伸为三维实体", "./images/extrude.png"], ["使用其他草图来修改或扩展模型", "./images/extrude.png"], ["将您的设计导出到 3D 打印机,如果你可以的话,无穷大符号网页跳转", "./images/2.jpg"]]
          , Fe = ({setModal: e, setQs: n})=>{
            const r = (0,
            t.useRef)(null)
              , a = Math.min(Math.min(.8 * window.innerHeight, .7 * window.innerWidth), 800)
              , [l,o] = (0,
            t.useReducer)(Ve, {
                rect: a,
                pg: 0,
                dragLeft: 0,
                dragging: !1
            })
              , i = (0,
            t.useCallback)(function(e, t) {
                let n = null;
                return (...r)=>{
                    clearTimeout(n),
                    n = setTimeout((()=>e(...r)), t)
                }
            }((()=>{
                o({
                    type: "resize"
                })
            }
            ), 200), [])
              , u = ()=>o({
                type: "drag-start"
            })
              , s = e=>1 == e.buttons && o({
                type: "drag",
                move: e.movementX
            })
              , c = ()=>o({
                type: "drag-end"
            });
            return (0,
            t.useEffect)((()=>(window.addEventListener("resize", i),
            document.addEventListener("mousedown", u),
            document.addEventListener("mousemove", s),
            document.addEventListener("mouseup", c),
            ()=>{
                window.removeEventListener("resize", i),
                document.removeEventListener("mousedown", u),
                document.removeEventListener("mousemove", s),
                document.removeEventListener("mouseup", c)
            }
            )), []),
            t.createElement("div", {
                className: "absolute left-0 right-0 mx-auto bg-gray-700 rounded-xl flex flex-col items-center border-gray-500 border-2 text-sm lg:text-base xl:text-lg select-none ",
                style: {
                    width: l.rect,
                    height: 1.1 * l.rect,
                    top: (window.innerHeight - 1.1 * l.rect) / 3
                },
                ref: r
            }, t.createElement("div", {
                className: "w-full overflow-hidden relative rounded-t-xl",
                style: {
                    height: l.rect
                }
            }, t.createElement("div", {
                className: "bg-transparent h-full flex select-none",
                style: {
                    width: l.rect * Ae.length,
                    transform: `translateX(${l.dragging ? -l.dragLeft - 4 : -l.pg * l.rect - 4}px)`,
                    transition: l.dragging ? null : "transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
                }
            }, Ae.map(((e,n)=>{
                const r = ".mp4" == e[1].match(/\.[0-9a-z]+$/i)[0];
                return t.createElement("div", {
                    className: "flex flex-col items-center",
                    style: {
                        width: l.rect,
                        height: "100%"
                    },
                    key: n
                }, r ? t.createElement("video", {
                    src: e[1],
                    style: {
                        width: .8 * l.rect,
                        height: .8 * l.rect
                    },
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    type: "video/mp4"
                }) : t.createElement("img", {
                    src: e[1],
                    style: {
                        width: .8 * l.rect,
                        height: .8 * l.rect
                    },
                    draggable: "false"
                }), t.createElement("div", {
                    className: "my-auto text-center text-gray-50 text-sm sm:text-base md:text-xl"
                }, e[0]))
            }
            )))), t.createElement("div", {
                className: "cursor-pointer text-gray-50 bg-blue-500 rounded p-1.5 inline-block hover:bg-green-600",
                onClick: ()=>{
                    e(!1),
                    n(!0)
                }
            }, "开始"), t.createElement("div", {
                className: "cursor-pointer select-none absolute w-12 h-12 top-0 bottom-0 my-auto -left-24 fill-current bg-gray-200 hover:bg-gray-400 rounded-full",
                onClick: ()=>o({
                    type: "move",
                    del: -1
                }),
                style: {
                    visibility: 0 == l.pg ? "hidden" : "visible"
                }
            }, t.createElement(Q, {
                className: "w-full h-full text-gray-700 p-3"
            })), t.createElement("div", {
                className: "cursor-pointer select-none absolute w-12 h-12 top-0 bottom-0 my-auto -right-24 fill-current bg-gray-200 hover:bg-gray-400 rounded-full",
                onClick: ()=>o({
                    type: "move",
                    del: 1
                }),
                style: {
                    visibility: l.pg == Ae.length - 1 ? "hidden" : "visible"
                }
            }, t.createElement(q, {
                className: "w-full h-full text-gray-700 p-3"
            })), t.createElement("div", {
                className: "flex -bottom-8 absolute flex justify-center items-center"
            }, Array(Ae.length).fill().map(((e,n)=>t.createElement("div", {
                key: n,
                className: "h-2 w-2 mx-1 rounded-full " + (n == l.pg ? "bg-gray-50" : "bg-gray-500")
            })))))
        }
          , Ue = sessionStorage
          , Be = {
            line: 1,
            arc: 2,
            dimension: 3,
            coincident: 4,
            vertical: 5,
            horizontal: 6,
            tangent: 7
        }
          , He = ()=>{
            const e = b()
              , n = E((e=>e.treeEntries))
              , r = E((e=>e.ui.sketchActive))
              , a = E((e=>e.ui.fileHandle))
              , l = E((e=>e.ui.modified))
              , o = E((e=>e.ui.fileName))
              , i = E((e=>e.ui.mode))
              , u = t=>{
                if (2 != sce.selected.length || !sce.selected.every((e=>"mesh" == e.userData.type)))
                    return void alert("请先选择两个体进行布尔运算");
                const [n,r] = sce.selected
                  , a = sce.boolOp(n, r, t);
                sce.obj3d.add(a),
                e({
                    type: "set-entry-visibility",
                    obj: {
                        [n.name]: !1,
                        [r.name]: !1,
                        [a.name]: !0
                    }
                }),
                e({
                    type: "rx-boolean",
                    mesh: a,
                    deps: [n.name, r.name]
                }),
                sce.render(),
                p()
            }
              , s = ()=>!l || confirm("Discard changes? All changes will be lost.");
            (0,
            t.useEffect)((()=>{
                const e = e=>{
                    (l || sce.activeSketch && (sce.activeSketch.hasChanged || sce.activeSketch.idOnActivate != id || sce.activeSketch.c_idOnActivate != sce.activeSketch.c_id)) && (e.preventDefault(),
                    e.returnValue = "There are unsaved changes. Are you sure you want to leave?")
                }
                ;
                return window.addEventListener("beforeunload", e),
                ()=>window.removeEventListener("beforeunload", e)
            }
            ), [l]),
            (0,
            t.useEffect)((()=>{
                if (!r)
                    return sce.canvas.addEventListener("pointermove", sce.onHover),
                    sce.canvas.addEventListener("pointerdown", sce.onPick),
                    ()=>{
                        sce.canvas.removeEventListener("pointermove", sce.onHover),
                        sce.canvas.removeEventListener("pointerdown", sce.onPick)
                    }
            }
            ), [r]);
            const c = [[se, ()=>e({
                type: "set-dialog",
                action: "extrude",
                target: sce.activeSketch.obj3d.name
            }), "拉伸"], [pe, ()=>sce.activeSketch.command("line"), "画线 (l)"], [oe, ()=>sce.activeSketch.command("arc"), "画弧线 (a)"], [ue, ()=>sce.activeSketch.command("dimension"), "度量 (d)"], [ie, ()=>sce.activeSketch.command("coincident"), "重合约束 (c)"], [we, ()=>sce.activeSketch.command("vertical"), "垂直 (v)"], [fe, ()=>sce.activeSketch.command("horizontal"), "水平 (h)"], [ye, ()=>sce.activeSketch.command("tangent"), "切线 (t)"], [U, async()=>Oe(a, JSON.stringify([id, sce.sid, sce.mid, n]), e, o), "Save"]]
              , f = [[J, ()=>{
                const t = sce.addSketch();
                t ? (e({
                    type: "rx-sketch",
                    obj: t
                }),
                t.activate(),
                sce.render(),
                e({
                    type: "set-dialog",
                    action: "sketch",
                    target: t.obj3d.name
                }),
                p()) : alert("请选择一个平面或 3 个点来设置草图平面")
            }
            , "草图"], [se, ()=>{
                try {
                    e({
                        type: "set-dialog",
                        action: "extrude",
                        target: sce.selected[0].name
                    })
                } catch (e) {
                    console.error(e),
                    alert("请从左侧窗格选择一个草图拉伸")
                }
            }
            , "拉伸"], [be, ()=>u("u"), "合并"], [ve, ()=>u("s"), "相减"], [de, ()=>u("i"), "求交"], [B, ()=>{
                s() && (sce.newPart(),
                e({
                    type: "new-part"
                }),
                sce.render())
            }
            , "新文件"], [U, ()=>{
                Oe(a, JSON.stringify([id, sce.sid, sce.mid, n]), e, o)
            }
            , "保存"], [H, ()=>{
                s() && Te(e).then(sce.render)
            }
            , "打开"], [ge, ()=>{
                sce.selected[0] && "mesh" == sce.selected[0].userData.type ? Le(a ? a.name.replace(/\.[^/.]+$/, "") : "untitled") : alert("请先选择一个要导出的主体")
            }
            , "导出为STL"]]
              , [d,p] = (0,
            t.useReducer)((e=>e + 1), 0)
              , [h,m] = (0,
            t.useState)(!Ue.getItem("visited"))
              , [g,v] = (0,
            t.useState)(!1);
            return t.createElement("div", {
                className: "topNav flex justify-center bg-gray-800 text-gray-200 "
            }, t.createElement("div", {
                className: "w-auto h-full flex-1 flex justify-end lg:justify-between"
            }, t.createElement("div", {
                className: "w-100 h-full font-mono text-lg text-gray-200 select-none hidden lg:flex mr-8 items-center"
            }, t.createElement(he, {
                className: "w-auto h-6 mx-1"
            }), "DWM_CAD"), t.createElement("div", {
                className: "h-full w-48 flex items-center justify-end"
            }, t.createElement(ke, null))), t.createElement("div", {
                className: "w-auto h-full flex"
            }, (r ? c : f).map((([e,n,r],a)=>void 0 !== e ? t.createElement(e, {
                className: "cursor-pointer fill-current w-auto h-full p-3.5\n            " + (a == Be[i] ? "bg-blue-500" : "hover:bg-gray-600 bg-transparent"),
                tooltip: r,
                onClick: n,
                key: a
            }) : t.createElement("div", {
                className: "w-12 h-full"
            })))), t.createElement("div", {
                className: "w-auto h-full flex-1 justify-end flex-shrink-1 hidden md:flex"
            }, t.createElement(A, {
                className: "cursor-pointer fill-current w-auto h-full p-3\n            " + (g ? "bg-blue-500" : "hover:bg-gray-600 bg-transparent"),
                onClick: ()=>{
                    v(!0)
                }
            }), t.createElement("a", {
                href: "https://github.com/twpride/three.cad",
                className: "h-full w-auto"
            }, t.createElement(X, {
                className: "text-gray-200 cursor-pointer hover:bg-gray-600 bg-transparent w-auto h-full p-3.5"
            })), t.createElement("a", {
                href: "https://sise.uestc.edu.cn/",
                className: "h-full w-auto"
            }, t.createElement(G, {
                className: "text-gray-200 cursor-pointer hover:bg-gray-600 bg-transparent w-auto h-full p-3.5"
            }))), h && t.createElement(Ee, {
                setModal: m,
                clickOut: !1
            }, t.createElement(Fe, {
                setModal: m,
                setQs: v
            })), g && t.createElement(Ee, {
                setModal: v,
                id: "navbar"
            }, t.createElement($e, {
                setModal: v
            })))
        }
          , We = ()=>{
            const [e,n] = (0,
            t.useState)(null)
              , r = (0,
            t.useRef)()
              , a = (0,
            t.useRef)(!1)
              , l = (0,
            t.useRef)(null);
            return (0,
            t.useEffect)((()=>{
                const e = ["path", "g", "rect", "circle"];
                document.addEventListener("mouseover", (t=>{
                    let o = t.target;
                    for (; e.includes(o.nodeName); )
                        o = o.parentElement;
                    const i = o.getAttribute("tooltip");
                    if (clearTimeout(l.current),
                    i) {
                        let {left: e, top: t, width: u, height: s} = o.getBoundingClientRect();
                        e = e + u / 2 - Qe(i) / 2 - 4,
                        t = t + s + 6,
                        n(i),
                        a.current ? r.current.setAttribute("style", `left:${e}px; top:${t}px; visibility:visible`) : l.current = setTimeout((()=>{
                            r.current.setAttribute("style", `left:${e}px; top:${t}px; visibility:visible`),
                            a.current = !0
                        }
                        ), 700)
                    } else
                        r.current.setAttribute("style", "visibility:hidden"),
                        a.current = !1
                }
                ))
            }
            ), []),
            t.createElement("div", {
                className: "absolute drop-down-top p-1 rounded invisible bg-gray-700 text-gray-200",
                ref: r
            }, e, t.createElement("div", {
                className: "arrow"
            }))
        }
        ;
        function Qe(e, t="16px sans-serif") {
            let n = (Qe.canvas || (Qe.canvas = document.createElement("canvas"))).getContext("2d");
            return n.font = t,
            n.measureText(e).width
        }
        let qe;
        qe = function e(t, r, a) {
            var i;
            if ("function" == typeof r && "function" == typeof a || "function" == typeof a && "function" == typeof arguments[3])
                throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
            if ("function" == typeof r && void 0 === a && (a = r,
            r = void 0),
            void 0 !== a) {
                if ("function" != typeof a)
                    throw new Error("Expected the enhancer to be a function.");
                return a(e)(t, r)
            }
            if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
            var u = t
              , s = r
              , c = []
              , f = c
              , d = !1;
            function p() {
                f === c && (f = c.slice())
            }
            function h() {
                if (d)
                    throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return s
            }
            function m(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the listener to be a function.");
                if (d)
                    throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                var t = !0;
                return p(),
                f.push(e),
                function() {
                    if (t) {
                        if (d)
                            throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                        t = !1,
                        p();
                        var n = f.indexOf(e);
                        f.splice(n, 1),
                        c = null
                    }
                }
            }
            function g(e) {
                if (!o(e))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    d = !0,
                    s = u(s, e)
                } finally {
                    d = !1
                }
                for (var t = c = f, n = 0; n < t.length; n++)
                    (0,
                    t[n])();
                return e
            }
            function v(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the nextReducer to be a function.");
                u = e,
                g({
                    type: l.REPLACE
                })
            }
            function y() {
                var e, t = m;
                return (e = {
                    subscribe: function(e) {
                        if ("object" != typeof e || null === e)
                            throw new TypeError("Expected the observer to be an object.");
                        function n() {
                            e.next && e.next(h())
                        }
                        return n(),
                        {
                            unsubscribe: t(n)
                        }
                    }
                })[n.Z] = function() {
                    return this
                }
                ,
                e
            }
            return g({
                type: l.INIT
            }),
            (i = {
                dispatch: g,
                subscribe: m,
                getState: h,
                replaceReducer: v
            })[n.Z] = y,
            i
        }(L);
        const Ke = sessionStorage
          , Ye = ({store: e})=>t.createElement(h, {
            store: e
        }, t.createElement(He, null), t.createElement(ne, null), t.createElement(We, null));
        document.addEventListener("DOMContentLoaded", (()=>{
            e.render(t.createElement(Ye, {
                store: qe
            }), document.getElementById("react")),
            Ke.setItem("visited", !0)
        }
        )),
        window.store = qe
    }
    )()
}
)();
