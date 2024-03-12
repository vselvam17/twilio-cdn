"use strict";
this.Twilio = this.Twilio || {}, this.Twilio.Conversations = function (e) {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function n(e) { if (e.__esModule)
        return e; var t = Object.defineProperty({}, "__esModule", { value: !0 }); return Object.keys(e).forEach((function (n) { var r = Object.getOwnPropertyDescriptor(e, n); Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function () { return e[n]; } }); })), t; }
    var r = function (e) { return e && e.Math == Math && e; }, i = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || function () { return this; }() || Function("return this")(), a = {}, s = function (e) { try {
        return !!e();
    }
    catch (e) {
        return !0;
    } }, o = !s((function () { return 7 != Object.defineProperty({}, 1, { get: function () { return 7; } })[1]; })), u = {}, c = {}.propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, f = l && !c.call({ 1: 2 }, 1);
    u.f = f ? function (e) { var t = l(this, e); return !!t && t.enumerable; } : c;
    var d, p, h = function (e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }; }, v = {}.toString, y = function (e) { return v.call(e).slice(8, -1); }, m = y, g = "".split, b = s((function () { return !Object("z").propertyIsEnumerable(0); })) ? function (e) { return "String" == m(e) ? g.call(e, "") : Object(e); } : Object, k = function (e) { if (null == e)
        throw TypeError("Can't call method on " + e); return e; }, w = b, x = k, _ = function (e) { return w(x(e)); }, S = function (e) { return "object" == typeof e ? null !== e : "function" == typeof e; }, T = i, E = function (e) { return "function" == typeof e ? e : void 0; }, R = function (e, t) { return arguments.length < 2 ? E(T[e]) : T[e] && T[e][t]; }, I = R("navigator", "userAgent") || "", O = i, C = I, P = O.process, A = O.Deno, j = P && P.versions || A && A.version, M = j && j.v8;
    M ? p = (d = M.split("."))[0] < 4 ? 1 : d[0] + d[1] : C && (!(d = C.match(/Edge\/(\d+)/)) || d[1] >= 74) && (d = C.match(/Chrome\/(\d+)/)) && (p = d[1]);
    var L = p && +p, N = L, U = s, D = !!Object.getOwnPropertySymbols && !U((function () { var e = Symbol(); return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && N && N < 41; })), F = D && !Symbol.sham && "symbol" == typeof Symbol.iterator, B = R, q = F ? function (e) { return "symbol" == typeof e; } : function (e) { var t = B("Symbol"); return "function" == typeof t && Object(e) instanceof t; }, z = S, W = { exports: {} }, G = i, $ = function (e, t) { try {
        Object.defineProperty(G, e, { value: t, configurable: !0, writable: !0 });
    }
    catch (n) {
        G[e] = t;
    } return t; }, V = $, J = "__core-js_shared__", K = i[J] || V(J, {}), H = K;
    (W.exports = function (e, t) { return H[e] || (H[e] = void 0 !== t ? t : {}); })("versions", []).push({ version: "3.17.3", mode: "global", copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)" });
    var Y = k, Q = function (e) { return Object(Y(e)); }, X = Q, Z = {}.hasOwnProperty, ee = Object.hasOwn || function (e, t) { return Z.call(X(e), t); }, te = 0, ne = Math.random(), re = function (e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++te + ne).toString(36); }, ie = i, ae = W.exports, se = ee, oe = re, ue = D, ce = F, le = ae("wks"), fe = ie.Symbol, de = ce ? fe : fe && fe.withoutSetter || oe, pe = function (e) { return se(le, e) && (ue || "string" == typeof le[e]) || (ue && se(fe, e) ? le[e] = fe[e] : le[e] = de("Symbol." + e)), le[e]; }, he = S, ve = q, ye = function (e, t) { var n, r; if ("string" === t && "function" == typeof (n = e.toString) && !z(r = n.call(e)))
        return r; if ("function" == typeof (n = e.valueOf) && !z(r = n.call(e)))
        return r; if ("string" !== t && "function" == typeof (n = e.toString) && !z(r = n.call(e)))
        return r; throw TypeError("Can't convert object to primitive value"); }, me = pe("toPrimitive"), ge = function (e, t) { if (!he(e) || ve(e))
        return e; var n, r = e[me]; if (void 0 !== r) {
        if (void 0 === t && (t = "default"), n = r.call(e, t), !he(n) || ve(n))
            return n;
        throw TypeError("Can't convert object to primitive value");
    } return void 0 === t && (t = "number"), ye(e, t); }, be = ge, ke = q, we = function (e) { var t = be(e, "string"); return ke(t) ? t : String(t); }, xe = S, _e = i.document, Se = xe(_e) && xe(_e.createElement), Te = function (e) { return Se ? _e.createElement(e) : {}; }, Ee = Te, Re = !o && !s((function () { return 7 != Object.defineProperty(Ee("div"), "a", { get: function () { return 7; } }).a; })), Ie = o, Oe = u, Ce = h, Pe = _, Ae = we, je = ee, Me = Re, Le = Object.getOwnPropertyDescriptor;
    a.f = Ie ? Le : function (e, t) { if (e = Pe(e), t = Ae(t), Me)
        try {
            return Le(e, t);
        }
        catch (e) { } if (je(e, t))
        return Ce(!Oe.f.call(e, t), e[t]); };
    var Ne = {}, Ue = S, De = function (e) { if (!Ue(e))
        throw TypeError(String(e) + " is not an object"); return e; }, Fe = o, Be = Re, qe = De, ze = we, We = Object.defineProperty;
    Ne.f = Fe ? We : function (e, t, n) { if (qe(e), t = ze(t), qe(n), Be)
        try {
            return We(e, t, n);
        }
        catch (e) { } if ("get" in n || "set" in n)
        throw TypeError("Accessors not supported"); return "value" in n && (e[t] = n.value), e; };
    var Ge = Ne, $e = h, Ve = o ? function (e, t, n) { return Ge.f(e, t, $e(1, n)); } : function (e, t, n) { return e[t] = n, e; }, Je = { exports: {} }, Ke = K, He = Function.toString;
    "function" != typeof Ke.inspectSource && (Ke.inspectSource = function (e) { return He.call(e); });
    var Ye, Qe, Xe, Ze = Ke.inspectSource, et = Ze, tt = i.WeakMap, nt = "function" == typeof tt && /native code/.test(et(tt)), rt = W.exports, it = re, at = rt("keys"), st = function (e) { return at[e] || (at[e] = it(e)); }, ot = {}, ut = nt, ct = S, lt = Ve, ft = ee, dt = K, pt = st, ht = ot, vt = "Object already initialized", yt = i.WeakMap;
    if (ut || dt.state) {
        var mt = dt.state || (dt.state = new yt), gt = mt.get, bt = mt.has, kt = mt.set;
        Ye = function (e, t) { if (bt.call(mt, e))
            throw new TypeError(vt); return t.facade = e, kt.call(mt, e, t), t; }, Qe = function (e) { return gt.call(mt, e) || {}; }, Xe = function (e) { return bt.call(mt, e); };
    }
    else {
        var wt = pt("state");
        ht[wt] = !0, Ye = function (e, t) { if (ft(e, wt))
            throw new TypeError(vt); return t.facade = e, lt(e, wt, t), t; }, Qe = function (e) { return ft(e, wt) ? e[wt] : {}; }, Xe = function (e) { return ft(e, wt); };
    }
    var xt = { set: Ye, get: Qe, has: Xe, enforce: function (e) { return Xe(e) ? Qe(e) : Ye(e, {}); }, getterFor: function (e) { return function (t) { var n; if (!ct(t) || (n = Qe(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required"); return n; }; } }, _t = i, St = Ve, Tt = ee, Et = $, Rt = Ze, It = xt.get, Ot = xt.enforce, Ct = String(String).split("String");
    (Je.exports = function (e, t, n, r) { var i, a = !!r && !!r.unsafe, s = !!r && !!r.enumerable, o = !!r && !!r.noTargetGet; "function" == typeof n && ("string" != typeof t || Tt(n, "name") || St(n, "name", t), (i = Ot(n)).source || (i.source = Ct.join("string" == typeof t ? t : ""))), e !== _t ? (a ? !o && e[t] && (s = !0) : delete e[t], s ? e[t] = n : St(e, t, n)) : s ? e[t] = n : Et(t, n); })(Function.prototype, "toString", (function () { return "function" == typeof this && It(this).source || Rt(this); }));
    var Pt = {}, At = Math.ceil, jt = Math.floor, Mt = function (e) { return isNaN(e = +e) ? 0 : (e > 0 ? jt : At)(e); }, Lt = Mt, Nt = Math.min, Ut = function (e) { return e > 0 ? Nt(Lt(e), 9007199254740991) : 0; }, Dt = Mt, Ft = Math.max, Bt = Math.min, qt = function (e, t) { var n = Dt(e); return n < 0 ? Ft(n + t, 0) : Bt(n, t); }, zt = _, Wt = Ut, Gt = qt, $t = function (e) { return function (t, n, r) { var i, a = zt(t), s = Wt(a.length), o = Gt(r, s); if (e && n != n) {
        for (; s > o;)
            if ((i = a[o++]) != i)
                return !0;
    }
    else
        for (; s > o; o++)
            if ((e || o in a) && a[o] === n)
                return e || o || 0; return !e && -1; }; }, Vt = { includes: $t(!0), indexOf: $t(!1) }, Jt = ee, Kt = _, Ht = Vt.indexOf, Yt = ot, Qt = function (e, t) { var n, r = Kt(e), i = 0, a = []; for (n in r)
        !Jt(Yt, n) && Jt(r, n) && a.push(n); for (; t.length > i;)
        Jt(r, n = t[i++]) && (~Ht(a, n) || a.push(n)); return a; }, Xt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Zt = Qt, en = Xt.concat("length", "prototype");
    Pt.f = Object.getOwnPropertyNames || function (e) { return Zt(e, en); };
    var tn = {};
    tn.f = Object.getOwnPropertySymbols;
    var nn, rn = Pt, an = tn, sn = De, on = R("Reflect", "ownKeys") || function (e) { var t = rn.f(sn(e)), n = an.f; return n ? t.concat(n(e)) : t; }, un = ee, cn = on, ln = a, fn = Ne, dn = function (e, t) { for (var n = cn(t), r = fn.f, i = ln.f, a = 0; a < n.length; a++) {
        var s = n[a];
        un(e, s) || r(e, s, i(t, s));
    } }, pn = s, hn = /#|\.prototype\./, vn = function (e, t) { var n = mn[yn(e)]; return n == bn || n != gn && ("function" == typeof t ? pn(t) : !!t); }, yn = vn.normalize = function (e) { return String(e).replace(hn, ".").toLowerCase(); }, mn = vn.data = {}, gn = vn.NATIVE = "N", bn = vn.POLYFILL = "P", kn = vn, wn = i, xn = a.f, _n = Ve, Sn = Je.exports, Tn = $, En = dn, Rn = kn, In = function (e, t) { var n, r, i, a, s, o = e.target, u = e.global, c = e.stat; if (n = u ? wn : c ? wn[o] || Tn(o, {}) : (wn[o] || {}).prototype)
        for (r in t) {
            if (a = t[r], i = e.noTargetGet ? (s = xn(n, r)) && s.value : n[r], !Rn(u ? r : o + (c ? "." : "#") + r, e.forced) && void 0 !== i) {
                if (typeof a == typeof i)
                    continue;
                En(a, i);
            }
            (e.sham || i && i.sham) && _n(a, "sham", !0), Sn(n, r, a, e);
        } }, On = function (e) { if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function"); return e; }, Cn = Qt, Pn = Xt, An = Object.keys || function (e) { return Cn(e, Pn); }, jn = Ne, Mn = De, Ln = An, Nn = o ? Object.defineProperties : function (e, t) { Mn(e); for (var n, r = Ln(t), i = r.length, a = 0; i > a;)
        jn.f(e, n = r[a++], t[n]); return e; }, Un = R("document", "documentElement"), Dn = De, Fn = Nn, Bn = Xt, qn = ot, zn = Un, Wn = Te, Gn = st("IE_PROTO"), $n = function () { }, Vn = function (e) { return "<script>" + e + "</" + "script>"; }, Jn = function (e) { e.write(Vn("")), e.close(); var t = e.parentWindow.Object; return e = null, t; }, Kn = function () { try {
        nn = new ActiveXObject("htmlfile");
    }
    catch (e) { } var e, t; Kn = "undefined" != typeof document ? document.domain && nn ? Jn(nn) : ((t = Wn("iframe")).style.display = "none", zn.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Vn("document.F=Object")), e.close(), e.F) : Jn(nn); for (var n = Bn.length; n--;)
        delete Kn.prototype[Bn[n]]; return Kn(); };
    qn[Gn] = !0;
    var Hn = Object.create || function (e, t) { var n; return null !== e ? ($n.prototype = Dn(e), n = new $n, $n.prototype = null, n[Gn] = e) : n = Kn(), void 0 === t ? n : Fn(n, t); }, Yn = On, Qn = S, Xn = [].slice, Zn = {}, er = function (e, t, n) { if (!(t in Zn)) {
        for (var r = [], i = 0; i < t; i++)
            r[i] = "a[" + i + "]";
        Zn[t] = Function("C,a", "return new C(" + r.join(",") + ")");
    } return Zn[t](e, n); }, tr = Function.bind || function (e) { var t = Yn(this), n = Xn.call(arguments, 1), r = function () { var i = n.concat(Xn.call(arguments)); return this instanceof r ? er(t, i.length, i) : t.apply(e, i); }; return Qn(t.prototype) && (r.prototype = t.prototype), r; }, nr = In, rr = On, ir = De, ar = S, sr = Hn, or = tr, ur = s, cr = R("Reflect", "construct"), lr = ur((function () { function e() { } return !(cr((function () { }), [], e) instanceof e); })), fr = !ur((function () { cr((function () { })); })), dr = lr || fr;
    nr({ target: "Reflect", stat: !0, forced: dr, sham: dr }, { construct: function (e, t) { rr(e), ir(t); var n = arguments.length < 3 ? e : rr(arguments[2]); if (fr && !lr)
            return cr(e, t, n); if (e == n) {
            switch (t.length) {
                case 0: return new e;
                case 1: return new e(t[0]);
                case 2: return new e(t[0], t[1]);
                case 3: return new e(t[0], t[1], t[2]);
                case 4: return new e(t[0], t[1], t[2], t[3]);
            }
            var r = [null];
            return r.push.apply(r, t), new (or.apply(e, r));
        } var i = n.prototype, a = sr(ar(i) ? i : Object.prototype), s = Function.apply.call(e, a, t); return ar(s) ? s : a; } });
    var pr = Q, hr = An;
    In({ target: "Object", stat: !0, forced: s((function () { hr(1); })) }, { keys: function (e) { return hr(pr(e)); } });
    var vr = y, yr = Array.isArray || function (e) { return "Array" == vr(e); }, mr = q, gr = function (e) { if (mr(e))
        throw TypeError("Cannot convert a Symbol value to a string"); return String(e); }, br = {}, kr = _, wr = Pt.f, xr = {}.toString, _r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    br.f = function (e) { return _r && "[object Window]" == xr.call(e) ? function (e) { try {
        return wr(e);
    }
    catch (e) {
        return _r.slice();
    } }(e) : wr(kr(e)); };
    var Sr = {}, Tr = pe;
    Sr.f = Tr;
    var Er = i, Rr = ee, Ir = Sr, Or = Ne.f, Cr = function (e) { var t = Er.Symbol || (Er.Symbol = {}); Rr(t, e) || Or(t, e, { value: Ir.f(e) }); }, Pr = Ne.f, Ar = ee, jr = pe("toStringTag"), Mr = function (e, t, n) { e && !Ar(e = n ? e : e.prototype, jr) && Pr(e, jr, { configurable: !0, value: t }); }, Lr = On, Nr = function (e, t, n) { if (Lr(e), void 0 === t)
        return e; switch (n) {
        case 0: return function () { return e.call(t); };
        case 1: return function (n) { return e.call(t, n); };
        case 2: return function (n, r) { return e.call(t, n, r); };
        case 3: return function (n, r, i) { return e.call(t, n, r, i); };
    } return function () { return e.apply(t, arguments); }; }, Ur = S, Dr = yr, Fr = pe("species"), Br = function (e) { var t; return Dr(e) && ("function" != typeof (t = e.constructor) || t !== Array && !Dr(t.prototype) ? Ur(t) && null === (t = t[Fr]) && (t = void 0) : t = void 0), void 0 === t ? Array : t; }, qr = function (e, t) { return new (Br(e))(0 === t ? 0 : t); }, zr = Nr, Wr = b, Gr = Q, $r = Ut, Vr = qr, Jr = [].push, Kr = function (e) { var t = 1 == e, n = 2 == e, r = 3 == e, i = 4 == e, a = 6 == e, s = 7 == e, o = 5 == e || a; return function (u, c, l, f) { for (var d, p, h = Gr(u), v = Wr(h), y = zr(c, l, 3), m = $r(v.length), g = 0, b = f || Vr, k = t ? b(u, m) : n || s ? b(u, 0) : void 0; m > g; g++)
        if ((o || g in v) && (p = y(d = v[g], g, h), e))
            if (t)
                k[g] = p;
            else if (p)
                switch (e) {
                    case 3: return !0;
                    case 5: return d;
                    case 6: return g;
                    case 2: Jr.call(k, d);
                }
            else
                switch (e) {
                    case 4: return !1;
                    case 7: Jr.call(k, d);
                } return a ? -1 : r || i ? i : k; }; }, Hr = { forEach: Kr(0), map: Kr(1), filter: Kr(2), some: Kr(3), every: Kr(4), find: Kr(5), findIndex: Kr(6), filterReject: Kr(7) }, Yr = In, Qr = i, Xr = R, Zr = o, ei = D, ti = s, ni = ee, ri = yr, ii = S, ai = q, si = De, oi = Q, ui = _, ci = we, li = gr, fi = h, di = Hn, pi = An, hi = Pt, vi = br, yi = tn, mi = a, gi = Ne, bi = u, ki = Ve, wi = Je.exports, xi = W.exports, _i = ot, Si = re, Ti = pe, Ei = Sr, Ri = Cr, Ii = Mr, Oi = xt, Ci = Hr.forEach, Pi = st("hidden"), Ai = "Symbol", ji = Ti("toPrimitive"), Mi = Oi.set, Li = Oi.getterFor(Ai), Ni = Object.prototype, Ui = Qr.Symbol, Di = Xr("JSON", "stringify"), Fi = mi.f, Bi = gi.f, qi = vi.f, zi = bi.f, Wi = xi("symbols"), Gi = xi("op-symbols"), $i = xi("string-to-symbol-registry"), Vi = xi("symbol-to-string-registry"), Ji = xi("wks"), Ki = Qr.QObject, Hi = !Ki || !Ki.prototype || !Ki.prototype.findChild, Yi = Zr && ti((function () { return 7 != di(Bi({}, "a", { get: function () { return Bi(this, "a", { value: 7 }).a; } })).a; })) ? function (e, t, n) { var r = Fi(Ni, t); r && delete Ni[t], Bi(e, t, n), r && e !== Ni && Bi(Ni, t, r); } : Bi, Qi = function (e, t) { var n = Wi[e] = di(Ui.prototype); return Mi(n, { type: Ai, tag: e, description: t }), Zr || (n.description = t), n; }, Xi = function (e, t, n) { e === Ni && Xi(Gi, t, n), si(e); var r = ci(t); return si(n), ni(Wi, r) ? (n.enumerable ? (ni(e, Pi) && e[Pi][r] && (e[Pi][r] = !1), n = di(n, { enumerable: fi(0, !1) })) : (ni(e, Pi) || Bi(e, Pi, fi(1, {})), e[Pi][r] = !0), Yi(e, r, n)) : Bi(e, r, n); }, Zi = function (e, t) { si(e); var n = ui(t), r = pi(n).concat(ra(n)); return Ci(r, (function (t) { Zr && !ea.call(n, t) || Xi(e, t, n[t]); })), e; }, ea = function (e) { var t = ci(e), n = zi.call(this, t); return !(this === Ni && ni(Wi, t) && !ni(Gi, t)) && (!(n || !ni(this, t) || !ni(Wi, t) || ni(this, Pi) && this[Pi][t]) || n); }, ta = function (e, t) { var n = ui(e), r = ci(t); if (n !== Ni || !ni(Wi, r) || ni(Gi, r)) {
        var i = Fi(n, r);
        return !i || !ni(Wi, r) || ni(n, Pi) && n[Pi][r] || (i.enumerable = !0), i;
    } }, na = function (e) { var t = qi(ui(e)), n = []; return Ci(t, (function (e) { ni(Wi, e) || ni(_i, e) || n.push(e); })), n; }, ra = function (e) { var t = e === Ni, n = qi(t ? Gi : ui(e)), r = []; return Ci(n, (function (e) { !ni(Wi, e) || t && !ni(Ni, e) || r.push(Wi[e]); })), r; };
    (ei || (wi((Ui = function () { if (this instanceof Ui)
        throw TypeError("Symbol is not a constructor"); var e = arguments.length && void 0 !== arguments[0] ? li(arguments[0]) : void 0, t = Si(e), n = function (e) { this === Ni && n.call(Gi, e), ni(this, Pi) && ni(this[Pi], t) && (this[Pi][t] = !1), Yi(this, t, fi(1, e)); }; return Zr && Hi && Yi(Ni, t, { configurable: !0, set: n }), Qi(t, e); }).prototype, "toString", (function () { return Li(this).tag; })), wi(Ui, "withoutSetter", (function (e) { return Qi(Si(e), e); })), bi.f = ea, gi.f = Xi, mi.f = ta, hi.f = vi.f = na, yi.f = ra, Ei.f = function (e) { return Qi(Ti(e), e); }, Zr && (Bi(Ui.prototype, "description", { configurable: !0, get: function () { return Li(this).description; } }), wi(Ni, "propertyIsEnumerable", ea, { unsafe: !0 }))), Yr({ global: !0, wrap: !0, forced: !ei, sham: !ei }, { Symbol: Ui }), Ci(pi(Ji), (function (e) { Ri(e); })), Yr({ target: Ai, stat: !0, forced: !ei }, { for: function (e) { var t = li(e); if (ni($i, t))
            return $i[t]; var n = Ui(t); return $i[t] = n, Vi[n] = t, n; }, keyFor: function (e) { if (!ai(e))
            throw TypeError(e + " is not a symbol"); if (ni(Vi, e))
            return Vi[e]; }, useSetter: function () { Hi = !0; }, useSimple: function () { Hi = !1; } }), Yr({ target: "Object", stat: !0, forced: !ei, sham: !Zr }, { create: function (e, t) { return void 0 === t ? di(e) : Zi(di(e), t); }, defineProperty: Xi, defineProperties: Zi, getOwnPropertyDescriptor: ta }), Yr({ target: "Object", stat: !0, forced: !ei }, { getOwnPropertyNames: na, getOwnPropertySymbols: ra }), Yr({ target: "Object", stat: !0, forced: ti((function () { yi.f(1); })) }, { getOwnPropertySymbols: function (e) { return yi.f(oi(e)); } }), Di) && Yr({ target: "JSON", stat: !0, forced: !ei || ti((function () { var e = Ui(); return "[null]" != Di([e]) || "{}" != Di({ a: e }) || "{}" != Di(Object(e)); })) }, { stringify: function (e, t, n) { for (var r, i = [e], a = 1; arguments.length > a;)
            i.push(arguments[a++]); if (r = t, (ii(t) || void 0 !== e) && !ai(e))
            return ri(t) || (t = function (e, t) { if ("function" == typeof r && (t = r.call(this, e, t)), !ai(t))
                return t; }), i[1] = t, Di.apply(null, i); } });
    Ui.prototype[ji] || ki(Ui.prototype, ji, Ui.prototype.valueOf), Ii(Ui, Ai), _i[Pi] = !0;
    var ia = s, aa = L, sa = pe("species"), oa = function (e) { return aa >= 51 || !ia((function () { var t = []; return (t.constructor = {})[sa] = function () { return { foo: 1 }; }, 1 !== t[e](Boolean).foo; })); }, ua = Hr.filter;
    In({ target: "Array", proto: !0, forced: !oa("filter") }, { filter: function (e) { return ua(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    var ca = In, la = s, fa = _, da = a.f, pa = o, ha = la((function () { da(1); }));
    ca({ target: "Object", stat: !0, forced: !pa || ha, sham: !pa }, { getOwnPropertyDescriptor: function (e, t) { return da(fa(e), t); } });
    var va = we, ya = Ne, ma = h, ga = function (e, t, n) { var r = va(t); r in e ? ya.f(e, r, ma(0, n)) : e[r] = n; }, ba = on, ka = _, wa = a, xa = ga;
    function _a(e, t, n, r, i, a, s) { try {
        var o = e[a](s), u = o.value;
    }
    catch (e) {
        return void n(e);
    } o.done ? t(u) : Promise.resolve(u).then(r, i); }
    function Sa(e) { return function () { var t = this, n = arguments; return new Promise((function (r, i) { var a = e.apply(t, n); function s(e) { _a(a, r, i, s, o, "next", e); } function o(e) { _a(a, r, i, s, o, "throw", e); } s(void 0); })); }; }
    function Ta(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function Ea(e, t, n) { return t && Ta(e.prototype, t), n && Ta(e, n), e; }
    function Ra(e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
    function Ia(e, t) { return (Ia = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }
    function Oa(e, t) { if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ia(e, t); }
    function Ca(e) { return (Ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
    function Pa(e, t) { return !t || "object" !== Ca(t) && "function" != typeof t ? Ra(e) : t; }
    function Aa(e) { return (Aa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); }
    function ja(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function Ma(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    In({ target: "Object", stat: !0, sham: !o }, { getOwnPropertyDescriptors: function (e) { for (var t, n, r = ka(e), i = wa.f, a = ba(r), s = {}, o = 0; a.length > o;)
            void 0 !== (n = i(r, t = a[o++])) && xa(s, t, n); return s; } });
    var La = {};
    La[pe("toStringTag")] = "z";
    var Na = "[object z]" === String(La), Ua = Na, Da = y, Fa = pe("toStringTag"), Ba = "Arguments" == Da(function () { return arguments; }()), qa = Ua ? Da : function (e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) { try {
        return e[t];
    }
    catch (e) { } }(t = Object(e), Fa)) ? n : Ba ? Da(t) : "Object" == (r = Da(t)) && "function" == typeof t.callee ? "Arguments" : r; }, za = qa, Wa = Na ? {}.toString : function () { return "[object " + za(this) + "]"; }, Ga = Na, $a = Je.exports, Va = Wa;
    Ga || $a(Object.prototype, "toString", Va, { unsafe: !0 });
    var Ja = i.Promise, Ka = Je.exports, Ha = function (e, t, n) { for (var r in t)
        Ka(e, r, t[r], n); return e; }, Ya = S, Qa = De, Xa = function (e) { if (!Ya(e) && null !== e)
        throw TypeError("Can't set " + String(e) + " as a prototype"); return e; }, Za = Object.setPrototypeOf || ("__proto__" in {} ? function () { var e, t = !1, n = {}; try {
        (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
    }
    catch (e) { } return function (n, r) { return Qa(n), Xa(r), t ? e.call(n, r) : n.__proto__ = r, n; }; }() : void 0), es = R, ts = Ne, ns = o, rs = pe("species"), is = function (e) { var t = es(e), n = ts.f; ns && t && !t[rs] && n(t, rs, { configurable: !0, get: function () { return this; } }); }, as = function (e, t, n) { if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return e; }, ss = {}, os = ss, us = pe("iterator"), cs = Array.prototype, ls = function (e) { return void 0 !== e && (os.Array === e || cs[us] === e); }, fs = qa, ds = ss, ps = pe("iterator"), hs = function (e) { if (null != e)
        return e[ps] || e["@@iterator"] || ds[fs(e)]; }, vs = De, ys = hs, ms = function (e, t) { var n = arguments.length < 2 ? ys(e) : t; if ("function" != typeof n)
        throw TypeError(String(e) + " is not iterable"); return vs(n.call(e)); }, gs = De, bs = function (e, t, n) { var r, i; gs(e); try {
        if (void 0 === (r = e.return)) {
            if ("throw" === t)
                throw n;
            return n;
        }
        r = r.call(e);
    }
    catch (e) {
        i = !0, r = e;
    } if ("throw" === t)
        throw n; if (i)
        throw r; return gs(r), n; }, ks = De, ws = ls, xs = Ut, _s = Nr, Ss = ms, Ts = hs, Es = bs, Rs = function (e, t) { this.stopped = e, this.result = t; }, Is = function (e, t, n) { var r, i, a, s, o, u, c, l = n && n.that, f = !(!n || !n.AS_ENTRIES), d = !(!n || !n.IS_ITERATOR), p = !(!n || !n.INTERRUPTED), h = _s(t, l, 1 + f + p), v = function (e) { return r && Es(r, "normal", e), new Rs(!0, e); }, y = function (e) { return f ? (ks(e), p ? h(e[0], e[1], v) : h(e[0], e[1])) : p ? h(e, v) : h(e); }; if (d)
        r = e;
    else {
        if ("function" != typeof (i = Ts(e)))
            throw TypeError("Target is not iterable");
        if (ws(i)) {
            for (a = 0, s = xs(e.length); s > a; a++)
                if ((o = y(e[a])) && o instanceof Rs)
                    return o;
            return new Rs(!1);
        }
        r = Ss(e, i);
    } for (u = r.next; !(c = u.call(r)).done;) {
        try {
            o = y(c.value);
        }
        catch (e) {
            Es(r, "throw", e);
        }
        if ("object" == typeof o && o && o instanceof Rs)
            return o;
    } return new Rs(!1); }, Os = pe("iterator"), Cs = !1;
    try {
        var Ps = 0, As = { next: function () { return { done: !!Ps++ }; }, return: function () { Cs = !0; } };
        As[Os] = function () { return this; }, Array.from(As, (function () { throw 2; }));
    }
    catch (e) { }
    var js, Ms, Ls, Ns, Us = function (e, t) { if (!t && !Cs)
        return !1; var n = !1; try {
        var r = {};
        r[Os] = function () { return { next: function () { return { done: n = !0 }; } }; }, e(r);
    }
    catch (e) { } return n; }, Ds = De, Fs = On, Bs = pe("species"), qs = function (e, t) { var n, r = Ds(e).constructor; return void 0 === r || null == (n = Ds(r)[Bs]) ? t : Fs(n); }, zs = /(?:ipad|iphone|ipod).*applewebkit/i.test(I), Ws = "process" == y(i.process), Gs = i, $s = s, Vs = Nr, Js = Un, Ks = Te, Hs = zs, Ys = Ws, Qs = Gs.setImmediate, Xs = Gs.clearImmediate, Zs = Gs.process, eo = Gs.MessageChannel, to = Gs.Dispatch, no = 0, ro = {}, io = "onreadystatechange";
    try {
        js = Gs.location;
    }
    catch (e) { }
    var ao = function (e) { if (ro.hasOwnProperty(e)) {
        var t = ro[e];
        delete ro[e], t();
    } }, so = function (e) { return function () { ao(e); }; }, oo = function (e) { ao(e.data); }, uo = function (e) { Gs.postMessage(String(e), js.protocol + "//" + js.host); };
    Qs && Xs || (Qs = function (e) { for (var t = [], n = arguments.length, r = 1; n > r;)
        t.push(arguments[r++]); return ro[++no] = function () { ("function" == typeof e ? e : Function(e)).apply(void 0, t); }, Ms(no), no; }, Xs = function (e) { delete ro[e]; }, Ys ? Ms = function (e) { Zs.nextTick(so(e)); } : to && to.now ? Ms = function (e) { to.now(so(e)); } : eo && !Hs ? (Ns = (Ls = new eo).port2, Ls.port1.onmessage = oo, Ms = Vs(Ns.postMessage, Ns, 1)) : Gs.addEventListener && "function" == typeof postMessage && !Gs.importScripts && js && "file:" !== js.protocol && !$s(uo) ? (Ms = uo, Gs.addEventListener("message", oo, !1)) : Ms = io in Ks("script") ? function (e) { Js.appendChild(Ks("script")).onreadystatechange = function () { Js.removeChild(this), ao(e); }; } : function (e) { setTimeout(so(e), 0); });
    var co, lo, fo, po, ho, vo, yo, mo, go = { set: Qs, clear: Xs }, bo = i, ko = /ipad|iphone|ipod/i.test(I) && void 0 !== bo.Pebble, wo = /web0s(?!.*chrome)/i.test(I), xo = i, _o = a.f, So = go.set, To = zs, Eo = ko, Ro = wo, Io = Ws, Oo = xo.MutationObserver || xo.WebKitMutationObserver, Co = xo.document, Po = xo.process, Ao = xo.Promise, jo = _o(xo, "queueMicrotask"), Mo = jo && jo.value;
    Mo || (co = function () { var e, t; for (Io && (e = Po.domain) && e.exit(); lo;) {
        t = lo.fn, lo = lo.next;
        try {
            t();
        }
        catch (e) {
            throw lo ? po() : fo = void 0, e;
        }
    } fo = void 0, e && e.enter(); }, To || Io || Ro || !Oo || !Co ? !Eo && Ao && Ao.resolve ? ((yo = Ao.resolve(void 0)).constructor = Ao, mo = yo.then, po = function () { mo.call(yo, co); }) : po = Io ? function () { Po.nextTick(co); } : function () { So.call(xo, co); } : (ho = !0, vo = Co.createTextNode(""), new Oo(co).observe(vo, { characterData: !0 }), po = function () { vo.data = ho = !ho; }));
    var Lo = Mo || function (e) { var t = { fn: e, next: void 0 }; fo && (fo.next = t), lo || (lo = t, po()), fo = t; }, No = {}, Uo = On, Do = function (e) { var t, n; this.promise = new e((function (e, r) { if (void 0 !== t || void 0 !== n)
        throw TypeError("Bad Promise constructor"); t = e, n = r; })), this.resolve = Uo(t), this.reject = Uo(n); };
    No.f = function (e) { return new Do(e); };
    var Fo, Bo, qo, zo, Wo = De, Go = S, $o = No, Vo = i, Jo = "object" == typeof window, Ko = In, Ho = i, Yo = R, Qo = Ja, Xo = Je.exports, Zo = Ha, eu = Za, tu = Mr, nu = is, ru = S, iu = On, au = as, su = Ze, ou = Is, uu = Us, cu = qs, lu = go.set, fu = Lo, du = function (e, t) { if (Wo(e), Go(t) && t.constructor === e)
        return t; var n = $o.f(e); return (0, n.resolve)(t), n.promise; }, pu = function (e, t) { var n = Vo.console; n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t)); }, hu = No, vu = function (e) { try {
        return { error: !1, value: e() };
    }
    catch (e) {
        return { error: !0, value: e };
    } }, yu = xt, mu = kn, gu = Jo, bu = Ws, ku = L, wu = pe("species"), xu = "Promise", _u = yu.get, Su = yu.set, Tu = yu.getterFor(xu), Eu = Qo && Qo.prototype, Ru = Qo, Iu = Eu, Ou = Ho.TypeError, Cu = Ho.document, Pu = Ho.process, Au = hu.f, ju = Au, Mu = !!(Cu && Cu.createEvent && Ho.dispatchEvent), Lu = "function" == typeof PromiseRejectionEvent, Nu = "unhandledrejection", Uu = !1, Du = mu(xu, (function () { var e = su(Ru), t = e !== String(Ru); if (!t && 66 === ku)
        return !0; if (ku >= 51 && /native code/.test(e))
        return !1; var n = new Ru((function (e) { e(1); })), r = function (e) { e((function () { }), (function () { })); }; return (n.constructor = {})[wu] = r, !(Uu = n.then((function () { })) instanceof r) || !t && gu && !Lu; })), Fu = Du || !uu((function (e) { Ru.all(e).catch((function () { })); })), Bu = function (e) { var t; return !(!ru(e) || "function" != typeof (t = e.then)) && t; }, qu = function (e, t) { if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        fu((function () { for (var r = e.value, i = 1 == e.state, a = 0; n.length > a;) {
            var s, o, u, c = n[a++], l = i ? c.ok : c.fail, f = c.resolve, d = c.reject, p = c.domain;
            try {
                l ? (i || (2 === e.rejection && $u(e), e.rejection = 1), !0 === l ? s = r : (p && p.enter(), s = l(r), p && (p.exit(), u = !0)), s === c.promise ? d(Ou("Promise-chain cycle")) : (o = Bu(s)) ? o.call(s, f, d) : f(s)) : d(r);
            }
            catch (e) {
                p && !u && p.exit(), d(e);
            }
        } e.reactions = [], e.notified = !1, t && !e.rejection && Wu(e); }));
    } }, zu = function (e, t, n) { var r, i; Mu ? ((r = Cu.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), Ho.dispatchEvent(r)) : r = { promise: t, reason: n }, !Lu && (i = Ho["on" + e]) ? i(r) : e === Nu && pu("Unhandled promise rejection", n); }, Wu = function (e) { lu.call(Ho, (function () { var t, n = e.facade, r = e.value; if (Gu(e) && (t = vu((function () { bu ? Pu.emit("unhandledRejection", r, n) : zu(Nu, n, r); })), e.rejection = bu || Gu(e) ? 2 : 1, t.error))
        throw t.value; })); }, Gu = function (e) { return 1 !== e.rejection && !e.parent; }, $u = function (e) { lu.call(Ho, (function () { var t = e.facade; bu ? Pu.emit("rejectionHandled", t) : zu("rejectionhandled", t, e.value); })); }, Vu = function (e, t, n) { return function (r) { e(t, r, n); }; }, Ju = function (e, t, n) { e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, qu(e, !0)); }, Ku = function (e, t, n) { if (!e.done) {
        e.done = !0, n && (e = n);
        try {
            if (e.facade === t)
                throw Ou("Promise can't be resolved itself");
            var r = Bu(t);
            r ? fu((function () { var n = { done: !1 }; try {
                r.call(t, Vu(Ku, n, e), Vu(Ju, n, e));
            }
            catch (t) {
                Ju(n, t, e);
            } })) : (e.value = t, e.state = 1, qu(e, !1));
        }
        catch (t) {
            Ju({ done: !1 }, t, e);
        }
    } };
    if (Du && (Iu = (Ru = function (e) { au(this, Ru, xu), iu(e), Fo.call(this); var t = _u(this); try {
        e(Vu(Ku, t), Vu(Ju, t));
    }
    catch (e) {
        Ju(t, e);
    } }).prototype, (Fo = function (e) { Su(this, { type: xu, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }); }).prototype = Zo(Iu, { then: function (e, t) { var n = Tu(this), r = Au(cu(this, Ru)); return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = bu ? Pu.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && qu(n, !1), r.promise; }, catch: function (e) { return this.then(void 0, e); } }), Bo = function () { var e = new Fo, t = _u(e); this.promise = e, this.resolve = Vu(Ku, t), this.reject = Vu(Ju, t); }, hu.f = Au = function (e) { return e === Ru || e === qo ? new Bo(e) : ju(e); }, "function" == typeof Qo && Eu !== Object.prototype)) {
        zo = Eu.then, Uu || (Xo(Eu, "then", (function (e, t) { var n = this; return new Ru((function (e, t) { zo.call(n, e, t); })).then(e, t); }), { unsafe: !0 }), Xo(Eu, "catch", Iu.catch, { unsafe: !0 }));
        try {
            delete Eu.constructor;
        }
        catch (e) { }
        eu && eu(Eu, Iu);
    }
    Ko({ global: !0, wrap: !0, forced: Du }, { Promise: Ru }), tu(Ru, xu, !1), nu(xu), qo = Yo(xu), Ko({ target: xu, stat: !0, forced: Du }, { reject: function (e) { var t = Au(this); return t.reject.call(void 0, e), t.promise; } }), Ko({ target: xu, stat: !0, forced: Du }, { resolve: function (e) { return du(this, e); } }), Ko({ target: xu, stat: !0, forced: Fu }, { all: function (e) { var t = this, n = Au(t), r = n.resolve, i = n.reject, a = vu((function () { var n = iu(t.resolve), a = [], s = 0, o = 1; ou(e, (function (e) { var u = s++, c = !1; a.push(void 0), o++, n.call(t, e).then((function (e) { c || (c = !0, a[u] = e, --o || r(a)); }), i); })), --o || r(a); })); return a.error && i(a.value), n.promise; }, race: function (e) { var t = this, n = Au(t), r = n.reject, i = vu((function () { var i = iu(t.resolve); ou(e, (function (e) { i.call(t, e).then(n.resolve, r); })); })); return i.error && r(i.value), n.promise; } });
    var Hu = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Yu = Te("span").classList, Qu = Yu && Yu.constructor && Yu.constructor.prototype, Xu = Qu === Object.prototype ? void 0 : Qu, Zu = s, ec = function (e, t) { var n = [][e]; return !!n && Zu((function () { n.call(null, t || function () { throw 1; }, 1); })); }, tc = Hr.forEach, nc = i, rc = Hu, ic = Xu, ac = ec("forEach") ? [].forEach : function (e) { return tc(this, e, arguments.length > 1 ? arguments[1] : void 0); }, sc = Ve, oc = function (e) { if (e && e.forEach !== ac)
        try {
            sc(e, "forEach", ac);
        }
        catch (t) {
            e.forEach = ac;
        } };
    for (var uc in rc)
        oc(nc[uc] && nc[uc].prototype);
    oc(ic);
    var cc = S, lc = Za, fc = function (e, t, n) { var r, i; return lc && "function" == typeof (r = t.constructor) && r !== n && cc(i = r.prototype) && i !== n.prototype && lc(e, i), e; }, dc = k, pc = gr, hc = "[\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff]", vc = RegExp("^" + hc + hc + "*"), yc = RegExp(hc + hc + "*$"), mc = function (e) { return function (t) { var n = pc(dc(t)); return 1 & e && (n = n.replace(vc, "")), 2 & e && (n = n.replace(yc, "")), n; }; }, gc = { start: mc(1), end: mc(2), trim: mc(3) }, bc = o, kc = i, wc = kn, xc = Je.exports, _c = ee, Sc = y, Tc = fc, Ec = q, Rc = ge, Ic = s, Oc = Hn, Cc = Pt.f, Pc = a.f, Ac = Ne.f, jc = gc.trim, Mc = "Number", Lc = kc.Number, Nc = Lc.prototype, Uc = Sc(Oc(Nc)) == Mc, Dc = function (e) { if (Ec(e))
        throw TypeError("Cannot convert a Symbol value to a number"); var t, n, r, i, a, s, o, u, c = Rc(e, "number"); if ("string" == typeof c && c.length > 2)
        if (43 === (t = (c = jc(c)).charCodeAt(0)) || 45 === t) {
            if (88 === (n = c.charCodeAt(2)) || 120 === n)
                return NaN;
        }
        else if (48 === t) {
            switch (c.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2, i = 49;
                    break;
                case 79:
                case 111:
                    r = 8, i = 55;
                    break;
                default: return +c;
            }
            for (s = (a = c.slice(2)).length, o = 0; o < s; o++)
                if ((u = a.charCodeAt(o)) < 48 || u > i)
                    return NaN;
            return parseInt(a, r);
        } return +c; };
    if (wc(Mc, !Lc(" 0o1") || !Lc("0b1") || Lc("+0x1"))) {
        for (var Fc, Bc = function (e) { var t = arguments.length < 1 ? 0 : e, n = this; return n instanceof Bc && (Uc ? Ic((function () { Nc.valueOf.call(n); })) : Sc(n) != Mc) ? Tc(new Lc(Dc(t)), n, Bc) : Dc(t); }, qc = bc ? Cc(Lc) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), zc = 0; qc.length > zc; zc++)
            _c(Lc, Fc = qc[zc]) && !_c(Bc, Fc) && Ac(Bc, Fc, Pc(Lc, Fc));
        Bc.prototype = Nc, Nc.constructor = Bc, xc(kc, Mc, Bc);
    }
    var Wc, Gc = Object.prototype, $c = Gc.hasOwnProperty, Vc = "function" == typeof Symbol ? Symbol : {}, Jc = Vc.iterator || "@@iterator", Kc = Vc.asyncIterator || "@@asyncIterator", Hc = Vc.toStringTag || "@@toStringTag";
    function Yc(e, t, n, r) { var i = t && t.prototype instanceof rl ? t : rl, a = Object.create(i.prototype), s = new yl(r || []); return a._invoke = function (e, t, n) { var r = Xc; return function (i, a) { if (r === el)
        throw new Error("Generator is already running"); if (r === tl) {
        if ("throw" === i)
            throw a;
        return gl();
    } for (n.method = i, n.arg = a;;) {
        var s = n.delegate;
        if (s) {
            var o = pl(s, n);
            if (o) {
                if (o === nl)
                    continue;
                return o;
            }
        }
        if ("next" === n.method)
            n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
            if (r === Xc)
                throw r = tl, n.arg;
            n.dispatchException(n.arg);
        }
        else
            "return" === n.method && n.abrupt("return", n.arg);
        r = el;
        var u = Qc(e, t, n);
        if ("normal" === u.type) {
            if (r = n.done ? tl : Zc, u.arg === nl)
                continue;
            return { value: u.arg, done: n.done };
        }
        "throw" === u.type && (r = tl, n.method = "throw", n.arg = u.arg);
    } }; }(e, n, s), a; }
    function Qc(e, t, n) { try {
        return { type: "normal", arg: e.call(t, n) };
    }
    catch (e) {
        return { type: "throw", arg: e };
    } }
    var Xc = "suspendedStart", Zc = "suspendedYield", el = "executing", tl = "completed", nl = {};
    function rl() { }
    function il() { }
    function al() { }
    var sl = {};
    sl[Jc] = function () { return this; };
    var ol = Object.getPrototypeOf, ul = ol && ol(ol(ml([])));
    ul && ul !== Gc && $c.call(ul, Jc) && (sl = ul);
    var cl = al.prototype = rl.prototype = Object.create(sl);
    function ll(e) { ["next", "throw", "return"].forEach((function (t) { e[t] = function (e) { return this._invoke(t, e); }; })); }
    function fl(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === il || "GeneratorFunction" === (t.displayName || t.name)); }
    function dl(e, t) { function n(r, i, a, s) { var o = Qc(e[r], e, i); if ("throw" !== o.type) {
        var u = o.arg, c = u.value;
        return c && "object" === Ca(c) && $c.call(c, "__await") ? t.resolve(c.__await).then((function (e) { n("next", e, a, s); }), (function (e) { n("throw", e, a, s); })) : t.resolve(c).then((function (e) { u.value = e, a(u); }), (function (e) { return n("throw", e, a, s); }));
    } s(o.arg); } var r; this._invoke = function (e, i) { function a() { return new t((function (t, r) { n(e, i, t, r); })); } return r = r ? r.then(a, a) : a(); }; }
    function pl(e, t) { var n = e.iterator[t.method]; if (n === Wc) {
        if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = Wc, pl(e, t), "throw" === t.method))
                return nl;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return nl;
    } var r = Qc(n, e.iterator, t.arg); if ("throw" === r.type)
        return t.method = "throw", t.arg = r.arg, t.delegate = null, nl; var i = r.arg; return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = Wc), t.delegate = null, nl) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, nl); }
    function hl(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); }
    function vl(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; }
    function yl(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(hl, this), this.reset(!0); }
    function ml(e) { if (e) {
        var t = e[Jc];
        if (t)
            return t.call(e);
        if ("function" == typeof e.next)
            return e;
        if (!isNaN(e.length)) {
            var n = -1, r = function t() { for (; ++n < e.length;)
                if ($c.call(e, n))
                    return t.value = e[n], t.done = !1, t; return t.value = Wc, t.done = !0, t; };
            return r.next = r;
        }
    } return { next: gl }; }
    function gl() { return { value: Wc, done: !0 }; }
    il.prototype = cl.constructor = al, al.constructor = il, al[Hc] = il.displayName = "GeneratorFunction", ll(dl.prototype), dl.prototype[Kc] = function () { return this; }, ll(cl), cl[Hc] = "Generator", cl[Jc] = function () { return this; }, cl.toString = function () { return "[object Generator]"; }, yl.prototype = { constructor: yl, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = Wc, this.done = !1, this.delegate = null, this.method = "next", this.arg = Wc, this.tryEntries.forEach(vl), !e)
            for (var t in this)
                "t" === t.charAt(0) && $c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = Wc); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
            throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
            throw e; var t = this; function n(n, r) { return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = Wc), !!r; } for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r], a = i.completion;
            if ("root" === i.tryLoc)
                return n("end");
            if (i.tryLoc <= this.prev) {
                var s = $c.call(i, "catchLoc"), o = $c.call(i, "finallyLoc");
                if (s && o) {
                    if (this.prev < i.catchLoc)
                        return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc)
                        return n(i.finallyLoc);
                }
                else if (s) {
                    if (this.prev < i.catchLoc)
                        return n(i.catchLoc, !0);
                }
                else {
                    if (!o)
                        throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc)
                        return n(i.finallyLoc);
                }
            }
        } }, abrupt: function (e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc <= this.prev && $c.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var i = r;
                break;
            }
        } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, nl) : this.complete(a); }, complete: function (e, t) { if ("throw" === e.type)
            throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), nl; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), vl(n), nl;
        } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                    var i = r.arg;
                    vl(n);
                }
                return i;
            }
        } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, n) { return this.delegate = { iterator: ml(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = Wc), nl; } };
    var bl = { wrap: Yc, isGeneratorFunction: fl, AsyncIterator: dl, mark: function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, al) : (e.__proto__ = al, Hc in e || (e[Hc] = "GeneratorFunction")), e.prototype = Object.create(cl), e; }, awrap: function (e) { return { __await: e }; }, async: function (e, t, n, r, i) { void 0 === i && (i = Promise); var a = new dl(Yc(e, t, n, r), i); return fl(t) ? a : a.next().then((function (e) { return e.done ? e.value : a.next(); })); }, keys: function (e) { var t = []; for (var n in e)
            t.push(n); return t.reverse(), function n() { for (; t.length;) {
            var r = t.pop();
            if (r in e)
                return n.value = r, n.done = !1, n;
        } return n.done = !0, n; }; }, values: ml }, kl = Object.freeze({ __proto__: null, default: bl });
    function wl(e, t, n, r) { var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ca(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (i = e[o]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s); return a > 3 && s && Object.defineProperty(t, n, s), s; }
    function xl(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ca(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t); }
    var _l = In, Sl = s, Tl = yr, El = S, Rl = Q, Il = Ut, Ol = ga, Cl = qr, Pl = oa, Al = L, jl = pe("isConcatSpreadable"), Ml = 9007199254740991, Ll = "Maximum allowed index exceeded", Nl = Al >= 51 || !Sl((function () { var e = []; return e[jl] = !1, e.concat()[0] !== e; })), Ul = Pl("concat"), Dl = function (e) { if (!El(e))
        return !1; var t = e[jl]; return void 0 !== t ? !!t : Tl(e); };
    _l({ target: "Array", proto: !0, forced: !Nl || !Ul }, { concat: function (e) { var t, n, r, i, a, s = Rl(this), o = Cl(s, 0), u = 0; for (t = -1, r = arguments.length; t < r; t++)
            if (Dl(a = -1 === t ? s : arguments[t])) {
                if (u + (i = Il(a.length)) > Ml)
                    throw TypeError(Ll);
                for (n = 0; n < i; n++, u++)
                    n in a && Ol(o, u, a[n]);
            }
            else {
                if (u >= Ml)
                    throw TypeError(Ll);
                Ol(o, u++, a);
            } return o.length = u, o; } });
    var Fl = De, Bl = bs, ql = Nr, zl = Q, Wl = function (e, t, n, r) { try {
        return r ? t(Fl(n)[0], n[1]) : t(n);
    }
    catch (t) {
        Bl(e, "throw", t);
    } }, Gl = ls, $l = Ut, Vl = ga, Jl = ms, Kl = hs, Hl = function (e) { var t, n, r, i, a, s, o = zl(e), u = "function" == typeof this ? this : Array, c = arguments.length, l = c > 1 ? arguments[1] : void 0, f = void 0 !== l, d = Kl(o), p = 0; if (f && (l = ql(l, c > 2 ? arguments[2] : void 0, 2)), null == d || u == Array && Gl(d))
        for (n = new u(t = $l(o.length)); t > p; p++)
            s = f ? l(o[p], p) : o[p], Vl(n, p, s);
    else
        for (a = (i = Jl(o, d)).next, n = new u; !(r = a.call(i)).done; p++)
            s = f ? Wl(i, l, [r.value, p], !0) : r.value, Vl(n, p, s); return n.length = p, n; }, Yl = Hl;
    In({ target: "Array", stat: !0, forced: !Us((function (e) { Array.from(e); })) }, { from: Yl });
    var Ql, Xl, Zl, ef = Mt, tf = gr, nf = k, rf = function (e) { return function (t, n) { var r, i, a = tf(nf(t)), s = ef(n), o = a.length; return s < 0 || s >= o ? e ? "" : void 0 : (r = a.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === o || (i = a.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? a.charAt(s) : r : e ? a.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536; }; }, af = { codeAt: rf(!1), charAt: rf(!0) }, sf = !s((function () { function e() { } return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype; })), of = ee, uf = Q, cf = sf, lf = st("IE_PROTO"), ff = Object.prototype, df = cf ? Object.getPrototypeOf : function (e) { return e = uf(e), of(e, lf) ? e[lf] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ff : null; }, pf = s, hf = df, vf = Ve, yf = pe("iterator"), mf = !1;
    [].keys && ("next" in (Zl = [].keys()) ? (Xl = hf(hf(Zl))) !== Object.prototype && (Ql = Xl) : mf = !0), (null == Ql || pf((function () { var e = {}; return Ql[yf].call(e) !== e; }))) && (Ql = {}), "function" != typeof Ql[yf] && vf(Ql, yf, (function () { return this; }));
    var gf = { IteratorPrototype: Ql, BUGGY_SAFARI_ITERATORS: mf }, bf = gf.IteratorPrototype, kf = Hn, wf = h, xf = Mr, _f = ss, Sf = function () { return this; }, Tf = function (e, t, n) { var r = t + " Iterator"; return e.prototype = kf(bf, { next: wf(1, n) }), xf(e, r, !1), _f[r] = Sf, e; }, Ef = In, Rf = Tf, If = df, Of = Za, Cf = Mr, Pf = Ve, Af = Je.exports, jf = ss, Mf = gf.IteratorPrototype, Lf = gf.BUGGY_SAFARI_ITERATORS, Nf = pe("iterator"), Uf = "keys", Df = "values", Ff = "entries", Bf = function () { return this; }, qf = function (e, t, n, r, i, a, s) { Rf(n, t, r); var o, u, c, l = function (e) { if (e === i && v)
        return v; if (!Lf && e in p)
        return p[e]; switch (e) {
        case Uf:
        case Df:
        case Ff: return function () { return new n(this, e); };
    } return function () { return new n(this); }; }, f = t + " Iterator", d = !1, p = e.prototype, h = p[Nf] || p["@@iterator"] || i && p[i], v = !Lf && h || l(i), y = "Array" == t && p.entries || h; if (y && (o = If(y.call(new e))) !== Object.prototype && o.next && (If(o) !== Mf && (Of ? Of(o, Mf) : "function" != typeof o[Nf] && Pf(o, Nf, Bf)), Cf(o, f, !0)), i == Df && h && h.name !== Df && (d = !0, v = function () { return h.call(this); }), p[Nf] !== v && Pf(p, Nf, v), jf[t] = v, i)
        if (u = { values: l(Df), keys: a ? v : l(Uf), entries: l(Ff) }, s)
            for (c in u)
                (Lf || d || !(c in p)) && Af(p, c, u[c]);
        else
            Ef({ target: t, proto: !0, forced: Lf || d }, u); return u; }, zf = af.charAt, Wf = gr, Gf = xt, $f = qf, Vf = "String Iterator", Jf = Gf.set, Kf = Gf.getterFor(Vf);
    $f(String, "String", (function (e) { Jf(this, { type: Vf, string: Wf(e), index: 0 }); }), (function () { var e, t = Kf(this), n = t.string, r = t.index; return r >= n.length ? { value: void 0, done: !0 } : (e = zf(n, r), t.index += e.length, { value: e, done: !1 }); }));
    var Hf, Yf, Qf, Xf = { exports: {} };
    function Zf(e, t) { return ["".concat((new Date).toISOString(), " Conversations ").concat(e, ":")].concat(Array.from(t)); }
    Yf = t, Qf = function () { var e = function () { }, t = "undefined", n = ("undefined" == typeof window ? "undefined" : Ca(window)) !== t && Ca(window.navigator) !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), r = ["trace", "debug", "info", "warn", "error"]; function i(e, t) { var n = e[t]; if ("function" == typeof n.bind)
        return n.bind(e); try {
        return Function.prototype.bind.call(n, e);
    }
    catch (t) {
        return function () { return Function.prototype.apply.apply(n, [e, arguments]); };
    } } function a() { console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace(); } function s(r) { return "debug" === r && (r = "log"), ("undefined" == typeof console ? "undefined" : Ca(console)) !== t && ("trace" === r && n ? a : void 0 !== console[r] ? i(console, r) : void 0 !== console.log ? i(console, "log") : e); } function o(t, n) { for (var i = 0; i < r.length; i++) {
        var a = r[i];
        this[a] = i < t ? e : this.methodFactory(a, t, n);
    } this.log = this.debug; } function u(e, n, r) { return function () { ("undefined" == typeof console ? "undefined" : Ca(console)) !== t && (o.call(this, n, r), this[e].apply(this, arguments)); }; } function c(e, t, n) { return s(e) || u.apply(this, arguments); } function l(e, n, i) { var a, s = this, u = "loglevel"; function l() { var e; if (("undefined" == typeof window ? "undefined" : Ca(window)) !== t && u) {
        try {
            e = window.localStorage[u];
        }
        catch (e) { }
        if (Ca(e) === t)
            try {
                var n = window.document.cookie, r = n.indexOf(encodeURIComponent(u) + "=");
                -1 !== r && (e = /^([^;]+)/.exec(n.slice(r))[1]);
            }
            catch (e) { }
        return void 0 === s.levels[e] && (e = void 0), e;
    } } "string" == typeof e ? u += ":" + e : "symbol" === Ca(e) && (u = void 0), s.name = e, s.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, s.methodFactory = i || c, s.getLevel = function () { return a; }, s.setLevel = function (n, i) { if ("string" == typeof n && void 0 !== s.levels[n.toUpperCase()] && (n = s.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= s.levels.SILENT))
        throw "log.setLevel() called with invalid level: " + n; if (a = n, !1 !== i && function (e) { var n = (r[e] || "silent").toUpperCase(); if (("undefined" == typeof window ? "undefined" : Ca(window)) !== t && u) {
        try {
            return void (window.localStorage[u] = n);
        }
        catch (e) { }
        try {
            window.document.cookie = encodeURIComponent(u) + "=" + n + ";";
        }
        catch (e) { }
    } }(n), o.call(s, n, e), ("undefined" == typeof console ? "undefined" : Ca(console)) === t && n < s.levels.SILENT)
        return "No console available for logging"; }, s.setDefaultLevel = function (e) { l() || s.setLevel(e, !1); }, s.enableAll = function (e) { s.setLevel(s.levels.TRACE, e); }, s.disableAll = function (e) { s.setLevel(s.levels.SILENT, e); }; var f = l(); null == f && (f = null == n ? "WARN" : n), s.setLevel(f, !1); } var f = new l, d = {}; f.getLogger = function (e) { if ("symbol" !== Ca(e) && "string" != typeof e || "" === e)
        throw new TypeError("You must supply a name when creating a logger."); var t = d[e]; return t || (t = d[e] = new l(e, f.getLevel(), f.methodFactory)), t; }; var p = ("undefined" == typeof window ? "undefined" : Ca(window)) !== t ? window.log : void 0; return f.noConflict = function () { return ("undefined" == typeof window ? "undefined" : Ca(window)) !== t && window.log === f && (window.log = p), f; }, f.getLoggers = function () { return d; }, f.default = f, f; }, (Hf = Xf).exports ? Hf.exports = Qf() : Yf.log = Qf();
    var ed, td, nd = Xf.exports.getLogger("twilio-conversations"), rd = function () { function e(t) { Ma(this, e), ja(this, "prefix", ""), this.prefix = null != t && t.length > 0 ? t + " " : ""; } return Ea(e, [{ key: "setLevel", value: function (e) { nd.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.trace.apply(null, Zf(this.prefix + "T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.debug.apply(null, Zf(this.prefix + "D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.info.apply(null, Zf(this.prefix + "I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.warn.apply(null, Zf(this.prefix + "W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.error.apply(null, Zf(this.prefix + "E", t)); } }], [{ key: "scope", value: function (t) { return new e(t); } }, { key: "setLevel", value: function (e) { nd.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.trace.apply(null, Zf("T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.debug.apply(null, Zf("D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.info.apply(null, Zf("I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.warn.apply(null, Zf("W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; nd.error.apply(null, Zf("E", t)); } }]), e; }(), id = {};
    Object.defineProperty(id, "__esModule", { value: !0 });
    var ad = ["weeks", "years", "months", "days", "hours", "minutes", "seconds"], sd = id.pattern = new RegExp("P(?:(\\d+(?:[\\.,]\\d+)?W)|(\\d+(?:[\\.,]\\d+)?Y)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?D)?(?:T(\\d+(?:[\\.,]\\d+)?H)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?S)?)?)"), od = td = id.parse = function (e) { return e.match(sd).slice(1).reduce((function (e, t, n) { return e[ad[n]] = parseFloat(t) || 0, e; }), {}); }, ud = id.end = function (e, t) { var n = t ? t.getTime() : Date.now(), r = new Date(n); return r.setFullYear(r.getFullYear() + e.years), r.setMonth(r.getMonth() + e.months), r.setDate(r.getDate() + e.days), r.setHours(r.getHours() + e.hours), r.setMinutes(r.getMinutes() + e.minutes), r.setMilliseconds(r.getMilliseconds() + 1e3 * e.seconds), r.setDate(r.getDate() + 7 * e.weeks), r; }, cd = ed = id.toSeconds = function (e, t) { var n = t ? t.getTime() : Date.now(), r = new Date(n); return (ud(e, r).getTime() - r.getTime()) / 1e3; };
    function ld(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function fd(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ld(Object(n), !0).forEach((function (t) { ja(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ld(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    id.default = { end: ud, toSeconds: cd, pattern: sd, parse: od };
    var dd = "PT5S", pd = "PT5S", hd = function e() { var t, n, r, i, a, s, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0, c = arguments.length > 2 ? arguments[2] : void 0; Ma(this, e), ja(this, "typingIndicatorTimeoutDefault", 5e3); var l = o.Chat || o.IPMessaging || o || {}; this.productId = l.productId, this.links = { myConversations: u.links.my_conversations, conversations: u.links.conversations, users: u.links.users, currentUser: u.links.current_user, typing: u.links.typing, mediaService: u.links.media_service, mediaSetService: u.links.media_set_service, messagesReceipts: u.links.messages_receipts }, this.limits = { mediaAttachmentsCountLimit: u.options.media_attachments_count_limit, mediaAttachmentSizeLimitInMb: u.options.media_attachment_size_limit_in_mb, mediaAttachmentsTotalSizeLimitInMb: u.options.media_attachments_total_size_limit_in_mb, emailHistoriesAllowedMimeTypes: u.options.email_histories_allowed_mime_types, emailBodiesAllowedMimeTypes: u.options.email_bodies_allowed_mime_types }, this.typingIndicatorTimeoutOverride = l.typingIndicatorTimeoutOverride, this.backoffConfiguration = fd({ min: 1e3, max: 4e3, maxAttemptsCount: 3 }, l.backoffConfigOverride), this.retryWhenThrottled = void 0 === l.retryWhenThrottledOverride || l.retryWhenThrottledOverride, this.userInfosToSubscribe = null !== (t = null !== (n = l.userInfosToSubscribeOverride) && void 0 !== n ? n : u.options.user_infos_to_subscribe) && void 0 !== t ? t : 100, this.reachabilityEnabled = u.options.reachability_enabled, this.userIdentity = u.identity, this.userInfo = u.sync_objects.my_user_info, this.myConversations = u.sync_objects.my_conversations; var f = null !== (r = null !== (i = l.httpCacheIntervalOverride) && void 0 !== i ? i : u.options.http_cache_interval) && void 0 !== r ? r : dd; try {
        this.httpCacheInterval = ed(td(f));
    }
    catch (e) {
        c.error("Failed to parse http cache interval ".concat(f, ", using default value ").concat(dd)), this.httpCacheInterval = ed(td(dd));
    } var d = null !== (a = null !== (s = l.consumptionReportIntervalOverride) && void 0 !== s ? s : u.options.consumption_report_interval) && void 0 !== a ? a : pd; try {
        this.consumptionReportInterval = ed(td(d));
    }
    catch (e) {
        c.error("Failed to parse consumption report interval ".concat(d, ", using default value ").concat(pd)), this.consumptionReportInterval = ed(td(pd));
    } }, vd = Hr.map;
    In({ target: "Array", proto: !0, forced: !oa("map") }, { map: function (e) { return vd(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    var yd = Hn, md = Ne, gd = pe("unscopables"), bd = Array.prototype;
    null == bd[gd] && md.f(bd, gd, { configurable: !0, value: yd(null) });
    var kd = function (e) { bd[gd][e] = !0; }, wd = _, xd = kd, _d = ss, Sd = xt, Td = qf, Ed = "Array Iterator", Rd = Sd.set, Id = Sd.getterFor(Ed), Od = Td(Array, "Array", (function (e, t) { Rd(this, { type: Ed, target: wd(e), index: 0, kind: t }); }), (function () { var e = Id(this), t = e.target, n = e.kind, r = e.index++; return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 }; }), "values");
    _d.Arguments = _d.Array, xd("keys"), xd("values"), xd("entries");
    var Cd = i, Pd = Hu, Ad = Xu, jd = Od, Md = Ve, Ld = pe, Nd = Ld("iterator"), Ud = Ld("toStringTag"), Dd = jd.values, Fd = function (e, t) { if (e) {
        if (e[Nd] !== Dd)
            try {
                Md(e, Nd, Dd);
            }
            catch (t) {
                e[Nd] = Dd;
            }
        if (e[Ud] || Md(e, Ud, t), Pd[t])
            for (var n in jd)
                if (e[n] !== jd[n])
                    try {
                        Md(e, n, jd[n]);
                    }
                    catch (t) {
                        e[n] = jd[n];
                    }
    } };
    for (var Bd in Pd)
        Fd(Cd[Bd] && Cd[Bd].prototype, Bd);
    Fd(Ad, "DOMTokenList");
    var qd = De, zd = function () { var e = qd(this), t = ""; return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t; }, Wd = {}, Gd = s, $d = i.RegExp;
    Wd.UNSUPPORTED_Y = Gd((function () { var e = $d("a", "y"); return e.lastIndex = 2, null != e.exec("abcd"); })), Wd.BROKEN_CARET = Gd((function () { var e = $d("^r", "gy"); return e.lastIndex = 2, null != e.exec("str"); }));
    var Vd, Jd, Kd = s, Hd = i.RegExp, Yd = Kd((function () { var e = Hd(".", "s"); return !(e.dotAll && e.exec("\n") && "s" === e.flags); })), Qd = s, Xd = i.RegExp, Zd = Qd((function () { var e = Xd("(?<a>b)", "g"); return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c"); })), ep = gr, tp = zd, np = Wd, rp = W.exports, ip = Hn, ap = xt.get, sp = Yd, op = Zd, up = RegExp.prototype.exec, cp = rp("native-string-replace", String.prototype.replace), lp = up, fp = (Vd = /a/, Jd = /b*/g, up.call(Vd, "a"), up.call(Jd, "a"), 0 !== Vd.lastIndex || 0 !== Jd.lastIndex), dp = np.UNSUPPORTED_Y || np.BROKEN_CARET, pp = void 0 !== /()??/.exec("")[1];
    (fp || pp || dp || sp || op) && (lp = function (e) { var t, n, r, i, a, s, o, u = this, c = ap(u), l = ep(e), f = c.raw; if (f)
        return f.lastIndex = u.lastIndex, t = lp.call(f, l), u.lastIndex = f.lastIndex, t; var d = c.groups, p = dp && u.sticky, h = tp.call(u), v = u.source, y = 0, m = l; if (p && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), m = l.slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== l.charAt(u.lastIndex - 1)) && (v = "(?: " + v + ")", m = " " + m, y++), n = new RegExp("^(?:" + v + ")", h)), pp && (n = new RegExp("^" + v + "$(?!\\s)", h)), fp && (r = u.lastIndex), i = up.call(p ? n : u, m), p ? i ? (i.input = i.input.slice(y), i[0] = i[0].slice(y), i.index = u.lastIndex, u.lastIndex += i[0].length) : u.lastIndex = 0 : fp && i && (u.lastIndex = u.global ? i.index + i[0].length : r), pp && i && i.length > 1 && cp.call(i[0], n, (function () { for (a = 1; a < arguments.length - 2; a++)
        void 0 === arguments[a] && (i[a] = void 0); })), i && d)
        for (i.groups = s = ip(null), a = 0; a < d.length; a++)
            s[(o = d[a])[0]] = i[o[1]]; return i; });
    var hp = lp;
    In({ target: "RegExp", proto: !0, forced: /./.exec !== hp }, { exec: hp });
    var vp = Je.exports, yp = hp, mp = s, gp = pe, bp = Ve, kp = gp("species"), wp = RegExp.prototype, xp = function (e, t, n, r) { var i = gp(e), a = !mp((function () { var t = {}; return t[i] = function () { return 7; }, 7 != ""[e](t); })), s = a && !mp((function () { var t = !1, n = /a/; return "split" === e && ((n = {}).constructor = {}, n.constructor[kp] = function () { return n; }, n.flags = "", n[i] = /./[i]), n.exec = function () { return t = !0, null; }, n[i](""), !t; })); if (!a || !s || n) {
        var o = /./[i], u = t(i, ""[e], (function (e, t, n, r, i) { var s = t.exec; return s === yp || s === wp.exec ? a && !i ? { done: !0, value: o.call(t, n, r) } : { done: !0, value: e.call(n, t, r) } : { done: !1 }; }));
        vp(String.prototype, e, u[0]), vp(wp, i, u[1]);
    } r && bp(wp[i], "sham", !0); }, _p = af.charAt, Sp = function (e, t, n) { return t + (n ? _p(e, t).length : 1); }, Tp = Q, Ep = Math.floor, Rp = "".replace, Ip = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Op = /\$([$&'`]|\d{1,2})/g, Cp = y, Pp = hp, Ap = function (e, t) { var n = e.exec; if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
            throw TypeError("RegExp exec method returned something other than an Object or null");
        return r;
    } if ("RegExp" !== Cp(e))
        throw TypeError("RegExp#exec called on incompatible receiver"); return Pp.call(e, t); }, jp = xp, Mp = s, Lp = De, Np = Mt, Up = Ut, Dp = gr, Fp = k, Bp = Sp, qp = function (e, t, n, r, i, a) { var s = n + e.length, o = r.length, u = Op; return void 0 !== i && (i = Tp(i), u = Ip), Rp.call(a, u, (function (a, u) { var c; switch (u.charAt(0)) {
        case "$": return "$";
        case "&": return e;
        case "`": return t.slice(0, n);
        case "'": return t.slice(s);
        case "<":
            c = i[u.slice(1, -1)];
            break;
        default:
            var l = +u;
            if (0 === l)
                return a;
            if (l > o) {
                var f = Ep(l / 10);
                return 0 === f ? a : f <= o ? void 0 === r[f - 1] ? u.charAt(1) : r[f - 1] + u.charAt(1) : a;
            }
            c = r[l - 1];
    } return void 0 === c ? "" : c; })); }, zp = Ap, Wp = pe("replace"), Gp = Math.max, $p = Math.min, Vp = "$0" === "a".replace(/./, "$0"), Jp = !!/./[Wp] && "" === /./[Wp]("a", "$0");
    jp("replace", (function (e, t, n) { var r = Jp ? "$" : "$0"; return [function (e, n) { var r = Fp(this), i = null == e ? void 0 : e[Wp]; return void 0 !== i ? i.call(e, r, n) : t.call(Dp(r), e, n); }, function (e, i) { var a = Lp(this), s = Dp(e); if ("string" == typeof i && -1 === i.indexOf(r) && -1 === i.indexOf("$<")) {
            var o = n(t, a, s, i);
            if (o.done)
                return o.value;
        } var u = "function" == typeof i; u || (i = Dp(i)); var c = a.global; if (c) {
            var l = a.unicode;
            a.lastIndex = 0;
        } for (var f = [];;) {
            var d = zp(a, s);
            if (null === d)
                break;
            if (f.push(d), !c)
                break;
            "" === Dp(d[0]) && (a.lastIndex = Bp(s, Up(a.lastIndex), l));
        } for (var p, h = "", v = 0, y = 0; y < f.length; y++) {
            d = f[y];
            for (var m = Dp(d[0]), g = Gp($p(Np(d.index), s.length), 0), b = [], k = 1; k < d.length; k++)
                b.push(void 0 === (p = d[k]) ? p : String(p));
            var w = d.groups;
            if (u) {
                var x = [m].concat(b, g, s);
                void 0 !== w && x.push(w);
                var _ = Dp(i.apply(void 0, x));
            }
            else
                _ = qp(m, s, g, b, w, i);
            g >= v && (h += s.slice(v, g) + _, v = g + m.length);
        } return h + s.slice(v); }]; }), !!Mp((function () { var e = /./; return e.exec = function () { var e = []; return e.groups = { a: "7" }, e; }, "7" !== "".replace(e, "$<a>"); })) || !Vp || Jp);
    var Kp = In, Hp = _, Yp = [].join, Qp = b != Object, Xp = ec("join", ",");
    function Zp(e) { return JSON.parse(JSON.stringify(e)); }
    function eh(e) { return void 0 === e || isNaN(Number(e)) ? null : Number(e); }
    function th(e) { try {
        return new Date(e);
    }
    catch (e) {
        return null;
    } }
    function nh(e, t, n) { var r = {}; if (e)
        try {
            r = JSON.parse(e);
        }
        catch (e) {
            n.warn(t, e);
        } return r; }
    Kp({ target: "Array", proto: !0, forced: Qp || !Xp }, { join: function (e) { return Yp.call(Hp(this), void 0 === e ? "," : e); } });
    var rh = function () { function e(t) { Ma(this, e), this.base = t.replace(/\/$/, ""), this.args = [], this.paths = []; } return Ea(e, [{ key: "arg", value: function (e, t) { return void 0 !== t && this.args.push(encodeURIComponent(e) + "=" + encodeURIComponent(t)), this; } }, { key: "path", value: function (e) { return this.paths.push(encodeURIComponent(e)), this; } }, { key: "build", value: function () { var e = this.base; return this.paths.length && (e += "/" + this.paths.join("/")), this.args.length && (e += "?" + this.args.join("&")), e; } }]), e; }(), ih = {}, ah = In, sh = S, oh = yr, uh = qt, ch = Ut, lh = _, fh = ga, dh = pe, ph = oa("slice"), hh = dh("species"), vh = [].slice, yh = Math.max;
    ah({ target: "Array", proto: !0, forced: !ph }, { slice: function (e, t) { var n, r, i, a = lh(this), s = ch(a.length), o = uh(e, s), u = uh(void 0 === t ? s : t, s); if (oh(a) && ("function" != typeof (n = a.constructor) || n !== Array && !oh(n.prototype) ? sh(n) && null === (n = n[hh]) && (n = void 0) : n = void 0, n === Array || void 0 === n))
            return vh.call(a, o, u); for (r = new (void 0 === n ? Array : n)(yh(u - o, 0)), i = 0; o < u; o++, i++)
            o in a && fh(r, i, a[o]); return r.length = i, r; } });
    var mh = In, gh = o, bh = i, kh = ee, wh = S, xh = Ne.f, _h = dn, Sh = bh.Symbol;
    if (gh && "function" == typeof Sh && (!("description" in Sh.prototype) || void 0 !== Sh().description)) {
        var Th = {}, Eh = function () { var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]), t = this instanceof Eh ? new Sh(e) : void 0 === e ? Sh() : Sh(e); return "" === e && (Th[t] = !0), t; };
        _h(Eh, Sh);
        var Rh = Eh.prototype = Sh.prototype;
        Rh.constructor = Eh;
        var Ih = Rh.toString, Oh = "Symbol(test)" == String(Sh("test")), Ch = /^Symbol\((.*)\)[^)]+$/;
        xh(Rh, "description", { configurable: !0, get: function () { var e = wh(this) ? this.valueOf() : this, t = Ih.call(e); if (kh(Th, e))
                return ""; var n = Oh ? t.slice(7, -1) : t.replace(Ch, "$1"); return "" === n ? void 0 : n; } }), mh({ global: !0, forced: !0 }, { Symbol: Eh });
    }
    Cr("iterator");
    var Ph = { exports: {} };
    !function (e) { function t(n) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = t = function (e) { return typeof e; }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = t = function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, e.exports.default = e.exports, e.exports.__esModule = !0), t(n); } e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0; }(Ph);
    var Ah = o, jh = Ne.f, Mh = Function.prototype, Lh = Mh.toString, Nh = /^\s*function ([^ (]*)/, Uh = "name";
    Ah && !(Uh in Mh) && jh(Mh, Uh, { configurable: !0, get: function () { try {
            return Lh.call(this).match(Nh)[1];
        }
        catch (e) {
            return "";
        } } });
    var Dh = S, Fh = Math.floor, Bh = function (e) { return !Dh(e) && isFinite(e) && Fh(e) === e; };
    In({ target: "Number", stat: !0 }, { isInteger: Bh });
    var qh = { exports: {} }, zh = { exports: {} };
    !function (e) { e.exports = function (e) { if (Array.isArray(e))
        return e; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(zh);
    var Wh = { exports: {} };
    !function (e) { e.exports = function (e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != n) {
        var r, i, a = [], s = !0, o = !1;
        try {
            for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0)
                ;
        }
        catch (e) {
            o = !0, i = e;
        }
        finally {
            try {
                s || null == n.return || n.return();
            }
            finally {
                if (o)
                    throw i;
            }
        }
        return a;
    } }, e.exports.default = e.exports, e.exports.__esModule = !0; }(Wh);
    var Gh = { exports: {} }, $h = { exports: {} };
    !function (e) { e.exports = function (e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }, e.exports.default = e.exports, e.exports.__esModule = !0; }($h), function (e) { var t = $h.exports; e.exports = function (e, n) { if (e) {
        if ("string" == typeof e)
            return t(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
    } }, e.exports.default = e.exports, e.exports.__esModule = !0; }(Gh);
    var Vh = { exports: {} };
    !function (e) { e.exports = function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(Vh), function (e) { var t = zh.exports, n = Wh.exports, r = Gh.exports, i = Vh.exports; e.exports = function (e, a) { return t(e) || n(e, a) || r(e, a) || i(); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(qh);
    var Jh = o, Kh = An, Hh = _, Yh = u.f, Qh = function (e) { return function (t) { for (var n, r = Hh(t), i = Kh(r), a = i.length, s = 0, o = []; a > s;)
        n = i[s++], Jh && !Yh.call(r, n) || o.push(e ? [n, r[n]] : r[n]); return o; }; }, Xh = { entries: Qh(!0), values: Qh(!1) }.entries;
    In({ target: "Object", stat: !0 }, { entries: function (e) { return Xh(e); } });
    var Zh = { exports: {} }, ev = { exports: {} };
    !function (e) { var t = $h.exports; e.exports = function (e) { if (Array.isArray(e))
        return t(e); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(ev);
    var tv = { exports: {} };
    !function (e) { e.exports = function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(tv);
    var nv = { exports: {} };
    !function (e) { e.exports = function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(nv), function (e) { var t = ev.exports, n = tv.exports, r = Gh.exports, i = nv.exports; e.exports = function (e) { return t(e) || n(e) || r(e) || i(); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(Zh);
    var rv = { exports: {} };
    !function (e) { e.exports = function (e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(rv);
    var iv = { exports: {} }, av = { exports: {} };
    !function (e) { function t(n, r) { return e.exports = t = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; }, e.exports.default = e.exports, e.exports.__esModule = !0, t(n, r); } e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0; }(av), function (e) { var t = av.exports; e.exports = function (e, n) { if ("function" != typeof n && null !== n)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), n && t(e, n); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(iv);
    var sv = { exports: {} }, ov = { exports: {} };
    !function (e) { e.exports = function (e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(ov), function (e) { var t = Ph.exports.default, n = ov.exports; e.exports = function (e, r) { return !r || "object" !== t(r) && "function" != typeof r ? n(e) : r; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(sv);
    var uv = { exports: {} };
    !function (e) { function t(n) { return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, e.exports.default = e.exports, e.exports.__esModule = !0, t(n); } e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0; }(uv);
    var cv = Vt.includes, lv = kd;
    In({ target: "Array", proto: !0 }, { includes: function (e) { return cv(this, e, arguments.length > 1 ? arguments[1] : void 0); } }), lv("includes"), Object.defineProperty(ih, "__esModule", { value: !0 });
    var fv = qh.exports, dv = Zh.exports, pv = rv.exports, hv = iv.exports, vv = sv.exports, yv = uv.exports;
    function mv(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; }
    var gv = mv(Ph.exports), bv = mv(fv), kv = mv(dv), wv = mv(pv), xv = mv(hv), _v = mv(vv), Sv = mv(yv), Tv = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return { checks: t }; };
    function Ev(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return Rv(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Rv(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function Rv(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var Iv = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return Tv((function (e) { var n, r = !1, i = [], a = Ev(t); try {
        for (a.s(); !(n = a.n()).done;) {
            var s = n.value;
            "string" != typeof s ? (r = r || e instanceof s, i.push("an instance of ".concat(s.name))) : (r = r || gv.default(e) === s, i.push("of type ".concat(s)));
        }
    }
    catch (e) {
        a.e(e);
    }
    finally {
        a.f();
    } return [r, i]; })); };
    function Ov(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return Cv(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Cv(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function Cv(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var Pv = Tv((function (e) { return ["string" == typeof e && e.length > 0, "a non-empty string"]; })), Av = Tv((function (e) { return ["number" == typeof e && Number.isInteger(e) && e >= 0, "a non-negative integer"]; })), jv = Tv((function (e) { return ["object" === gv.default(e) && null !== e && !Array.isArray(e), "a pure object (non-null and non-array)"]; }));
    function Mv(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Sv.default(e); if (t) {
        var i = Sv.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return _v.default(this, n); }; }
    function Lv(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return Nv(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Nv(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function Nv(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var Uv = function (e, t) { if (t.length > e.length)
        throw new Error("Expected at most ".concat(e.length, " argument(s), but got ").concat(t.length)); for (; t.length < e.length;)
        t.push(void 0); var n, r = Lv(t.entries()); try {
        for (r.s(); !(n = r.n()).done;) {
            var i = bv.default(n.value, 2), a = i[0], s = i[1], o = qv(e[a], s), u = bv.default(o, 4), c = u[0], l = u[1], f = u[2], d = u[3];
            if (!c)
                throw new Error("Argument ".concat(a + 1, " is expected to be ").concat(f).concat(d, " but got ").concat(l));
        }
    }
    catch (e) {
        r.e(e);
    }
    finally {
        r.f();
    } }, Dv = function (e) { var t, n, r; (["undefined", "boolean", "number", "bigint", "string"].includes(gv.default(e)) && (n = "string" == typeof e ? '"'.concat(e, '"') : "".concat(e)), "object" === gv.default(e) && "Object" !== (null == e || null === (t = e.constructor) || void 0 === t ? void 0 : t.name)) && (n = null === e ? "null" : "instance of ".concat(null == e || null === (r = e.constructor) || void 0 === r ? void 0 : r.name)); return n || (n = gv.default(e)), n; }, Fv = function (e) { var t, n = [], r = Lv(e); try {
        for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            n.push(Bv(i));
        }
    }
    catch (e) {
        r.e(e);
    }
    finally {
        r.f();
    } return n; }, Bv = function (e) { var t, n = [], r = Lv(Array.isArray(e) ? e : [e]); try {
        for (r.s(); !(t = r.n()).done;) {
            var i = t.value;
            "string" != typeof i && "function" != typeof i ? n.push(i) : n.push(Iv(i));
        }
    }
    catch (e) {
        r.e(e);
    }
    finally {
        r.f();
    } return n; }, qv = function (e, t) { var n, r, i = [], a = !1, s = Lv(e); try {
        for (s.s(); !(r = s.n()).done;) {
            var o, u = Lv(r.value.checks);
            try {
                for (u.s(); !(o = u.n()).done;) {
                    var c = (0, o.value)(t), l = bv.default(c, 3), f = l[0], d = l[1], p = l[2];
                    a = a || f, !n && p && (n = p), d && (i = [].concat(kv.default(i), "string" == typeof d ? [d] : kv.default(d)));
                }
            }
            catch (e) {
                u.e(e);
            }
            finally {
                u.f();
            }
        }
    }
    catch (e) {
        s.e(e);
    }
    finally {
        s.f();
    } if (a)
        return [!0]; var h = n || Dv(t), v = i.length - 1; return [!1, h, v > 0 ? "".concat(i.slice(0, v).join(", "), " or ").concat(i[v]) : i.join(", "), v > 1 ? ";" : ","]; };
    function zv(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return Wv(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Wv(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function Wv(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    ih.array = function (e, t) { return Tv((function (n) { if (!Array.isArray(n))
        return [!1, "an array of ".concat(e)]; var r, i = zv(n.entries()); try {
        for (i.s(); !(r = i.n()).done;) {
            var a = bv.default(r.value, 2), s = a[0], o = a[1], u = qv(Bv(t), o), c = bv.default(u, 3), l = c[0], f = c[1], d = c[2];
            if (!l)
                return [!1, "a valid array of ".concat(e, " (index ").concat(s, " should be ").concat(d, ")"), "malformed array of ".concat(e, " (index ").concat(s, " is ").concat(f, ")")];
        }
    }
    catch (e) {
        i.e(e);
    }
    finally {
        i.f();
    } return [!0]; })); };
    var Gv = ih.custom = Tv, $v = ih.literal = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return Tv((function (e) { var n, r = !1, i = [], a = Ov(t); try {
        for (a.s(); !(n = a.n()).done;) {
            var s = n.value;
            r = r || e === s, i.push("string" == typeof s ? '"'.concat(s, '"') : "".concat(s));
        }
    }
    catch (e) {
        a.e(e);
    }
    finally {
        a.f();
    } return [r, i]; })); }, Vv = ih.nonEmptyString = Pv, Jv = ih.nonNegativeInteger = Av, Kv = ih.objectSchema = function (e, t) { return Tv((function (n) { if ("object" !== gv.default(n) || null === n || Array.isArray(n))
        return [!1, "valid ".concat(e, " (should be a pure object)")]; for (var r = 0, i = Object.entries(t); r < i.length; r++) {
        var a = bv.default(i[r], 2), s = a[0], o = a[1], u = qv(Bv(o), n[s]), c = bv.default(u, 3), l = c[0], f = c[1], d = c[2];
        if (!l)
            return [!1, "valid ".concat(e, ' (key "').concat(s, '" should be ').concat(d, ")"), "malformed ".concat(e, ' (key "').concat(s, '" is ').concat(f, ")")];
    } return [!0]; })); }, Hv = ih.pureObject = jv;
    ih.runtimeTypeValidation = Uv, ih.stringifyReceivedType = Dv, ih.type = Iv;
    var Yv = ih.validateConstructorTypes = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; var r = Fv(t); return function (e) { return function (e) { xv.default(n, e); var t = Mv(n); function n() { wv.default(this, n); for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++)
        i[a] = arguments[a]; return Uv(r, i), t.call.apply(t, [this].concat(i)); } return n; }(e); }; }, Qv = ih.validateTypes = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; var r = Fv(t); return function (e, t, n) { if ("function" != typeof n.value)
        throw new Error("The validateTypes decorator can only be applied to methods"); var i = n.value; n.value = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return Uv(r, t), i.apply(this, t); }; }; }, Xv = ih.validateTypesAsync = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; var r = Fv(t); return function (e, t, n) { if ("function" != typeof n.value)
        throw new Error("The validateTypesAsync decorator can only be applied to methods"); var i = n.value; n.value = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; try {
        Uv(r, t);
    }
    catch (e) {
        return Promise.reject(e);
    } return i.apply(this, t); }; }; }, Zv = {};
    function ey(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function ty(e) { return function (e) { if (Array.isArray(e))
        return ey(e); }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }(e) || function (e, t) { if (e) {
        if ("string" == typeof e)
            return ey(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ey(e, t) : void 0;
    } }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    function ny(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function ry(e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
    function iy(e) { return (iy = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); }
    function ay(e, t, n) { return (ay = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) { var r = function (e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = iy(e));)
        ; return e; }(e, t); if (r) {
        var i = Object.getOwnPropertyDescriptor(r, t);
        return i.get ? i.get.call(n) : i.value;
    } })(e, t, n || e); }
    function sy(e, t) { return (sy = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }
    function oy(e) { return (oy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
    function uy(e, t) { return !t || "object" !== oy(t) && "function" != typeof t ? ry(e) : t; }
    function cy() { }
    function ly() { ly.init.call(this); }
    function fy(e) { return void 0 === e._maxListeners ? ly.defaultMaxListeners : e._maxListeners; }
    function dy(e, t, n) { if (t)
        e.call(n);
    else
        for (var r = e.length, i = ky(e, r), a = 0; a < r; ++a)
            i[a].call(n); }
    function py(e, t, n, r) { if (t)
        e.call(n, r);
    else
        for (var i = e.length, a = ky(e, i), s = 0; s < i; ++s)
            a[s].call(n, r); }
    function hy(e, t, n, r, i) { if (t)
        e.call(n, r, i);
    else
        for (var a = e.length, s = ky(e, a), o = 0; o < a; ++o)
            s[o].call(n, r, i); }
    function vy(e, t, n, r, i, a) { if (t)
        e.call(n, r, i, a);
    else
        for (var s = e.length, o = ky(e, s), u = 0; u < s; ++u)
            o[u].call(n, r, i, a); }
    function yy(e, t, n, r) { if (t)
        e.apply(n, r);
    else
        for (var i = e.length, a = ky(e, i), s = 0; s < i; ++s)
            a[s].apply(n, r); }
    function my(e, t, n, r) { var i, a, s, o; if ("function" != typeof n)
        throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = new cy, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = fy(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, o = u, "function" == typeof console.warn ? console.warn(o) : console.log(o);
        }
    }
    else
        s = a[t] = n, ++e._eventsCount; return e; }
    function gy(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; }
    function by(e) { var t = this._events; if (t) {
        var n = t[e];
        if ("function" == typeof n)
            return 1;
        if (n)
            return n.length;
    } return 0; }
    function ky(e, t) { for (var n = new Array(t); t--;)
        n[t] = e[t]; return n; }
    function wy(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = iy(e); if (t) {
        var i = iy(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return uy(this, n); }; }
    Object.defineProperty(Zv, "__esModule", { value: !0 }), cy.prototype = Object.create(null), ly.EventEmitter = ly, ly.usingDomains = !1, ly.prototype.domain = void 0, ly.prototype._events = void 0, ly.prototype._maxListeners = void 0, ly.defaultMaxListeners = 10, ly.init = function () { this.domain = null, ly.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new cy, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, ly.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, ly.prototype.getMaxListeners = function () { return fy(this); }, ly.prototype.emit = function (e) { var t, n, r, i, a, s, o, u = "error" === e; if (s = this._events)
        u = u && null == s.error;
    else if (!u)
        return !1; if (o = this.domain, u) {
        if (t = arguments[1], !o) {
            if (t instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    } if (!(n = s[e]))
        return !1; var l = "function" == typeof n; switch (r = arguments.length) {
        case 1:
            dy(n, l, this);
            break;
        case 2:
            py(n, l, this, arguments[1]);
            break;
        case 3:
            hy(n, l, this, arguments[1], arguments[2]);
            break;
        case 4:
            vy(n, l, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
            yy(n, l, this, i);
    } return !0; }, ly.prototype.addListener = function (e, t) { return my(this, e, t, !1); }, ly.prototype.on = ly.prototype.addListener, ly.prototype.prependListener = function (e, t) { return my(this, e, t, !0); }, ly.prototype.once = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.on(e, gy(this, e, t)), this; }, ly.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, gy(this, e, t)), this; }, ly.prototype.removeListener = function (e, t) { var n, r, i, a, s; if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
        return this; if (!(n = r[e]))
        return this; if (n === t || n.listener && n.listener === t)
        0 == --this._eventsCount ? this._events = new cy : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, a = n.length; a-- > 0;)
            if (n[a] === t || n[a].listener && n[a].listener === t) {
                s = n[a].listener, i = a;
                break;
            }
        if (i < 0)
            return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount)
                return this._events = new cy, this;
            delete r[e];
        }
        else
            !function (e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
                e[n] = e[r]; e.pop(); }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    } return this; }, ly.prototype.off = function (e, t) { return this.removeListener(e, t); }, ly.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
        return this; if (!n.removeListener)
        return 0 === arguments.length ? (this._events = new cy, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new cy : delete n[e]), this; if (0 === arguments.length) {
        for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
            "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new cy, this._eventsCount = 0, this;
    } if ("function" == typeof (t = n[e]))
        this.removeListener(e, t);
    else if (t)
        do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]); return this; }, ly.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }(t) : []; }, ly.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : by.call(e, t); }, ly.prototype.listenerCount = by, ly.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; };
    var xy = function (e) { !function (e, t) { if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && sy(e, t); }(n, e); var t = wy(n); function n() { var e; return function (e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }(this, n), function (e, t, n) { t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n; }(ry(e = t.call(this)), "eventHistory", new Map), e; } return function (e, t, n) { t && ny(e.prototype, t), n && ny(e, n); }(n, [{ key: "on", value: function (e, t) { return ay(iy(n.prototype), "on", this).call(this, e, t); } }, { key: "once", value: function (e, t) { return ay(iy(n.prototype), "once", this).call(this, e, t); } }, { key: "off", value: function (e, t) { return ay(iy(n.prototype), "off", this).call(this, e, t); } }, { key: "emit", value: function (e) { for (var t, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                i[a - 1] = arguments[a]; return this.eventHistory.set(e, i), (t = ay(iy(n.prototype), "emit", this)).call.apply(t, [this, e].concat(i)); } }, { key: "addListener", value: function (e, t) { return ay(iy(n.prototype), "addListener", this).call(this, e, t); } }, { key: "removeListener", value: function (e, t) { return ay(iy(n.prototype), "removeListener", this).call(this, e, t); } }, { key: "addListenerWithReplay", value: function (e, t) { var n = this.eventHistory.get(e); return void 0 !== n && t.apply(void 0, ty(n)), this.addListener(e, t); } }, { key: "onWithReplay", value: function (e, t) { return this.addListenerWithReplay(e, t); } }]), n; }(ly), _y = Zv.ReplayEventEmitter = xy, Sy = { exports: {} };
    !function (e, n) { var r = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", s = "[object Array]", o = "[object Boolean]", u = "[object Date]", c = "[object Error]", l = "[object Function]", f = "[object Map]", d = "[object Number]", p = "[object Object]", h = "[object Promise]", v = "[object RegExp]", y = "[object Set]", m = "[object String]", g = "[object Symbol]", b = "[object WeakMap]", k = "[object ArrayBuffer]", w = "[object DataView]", x = /^\[object .+?Constructor\]$/, _ = /^(?:0|[1-9]\d*)$/, S = {}; S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[s] = S[k] = S[o] = S[w] = S[u] = S[c] = S[l] = S[f] = S[d] = S[p] = S[v] = S[y] = S[m] = S[b] = !1; var T = "object" == Ca(t) && t && t.Object === Object && t, E = "object" == ("undefined" == typeof self ? "undefined" : Ca(self)) && self && self.Object === Object && self, R = T || E || Function("return this")(), I = n && !n.nodeType && n, O = I && e && !e.nodeType && e, C = O && O.exports === I, P = C && T.process, A = function () { try {
        return P && P.binding && P.binding("util");
    }
    catch (e) { } }(), j = A && A.isTypedArray; function M(e, t) { for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e))
            return !0; return !1; } function L(e, t) { return e.has(t); } function N(e) { var t = -1, n = Array(e.size); return e.forEach((function (e, r) { n[++t] = [r, e]; })), n; } function U(e) { var t = -1, n = Array(e.size); return e.forEach((function (e) { n[++t] = e; })), n; } var D, F, B = Array.prototype, q = Function.prototype, z = Object.prototype, W = R["__core-js_shared__"], G = q.toString, $ = z.hasOwnProperty, V = function () { var e = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : ""; }(), J = z.toString, K = RegExp("^" + G.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), H = C ? R.Buffer : void 0, Y = R.Symbol, Q = R.Uint8Array, X = z.propertyIsEnumerable, Z = B.splice, ee = Y ? Y.toStringTag : void 0, te = Object.getOwnPropertySymbols, ne = H ? H.isBuffer : void 0, re = (D = Object.keys, F = Object, function (e) { return D(F(e)); }), ie = Ae(R, "DataView"), ae = Ae(R, "Map"), se = Ae(R, "Promise"), oe = Ae(R, "Set"), ue = Ae(R, "WeakMap"), ce = Ae(Object, "create"), le = Ne(ie), fe = Ne(ae), de = Ne(se), pe = Ne(oe), he = Ne(ue), ve = Y ? Y.prototype : void 0, ye = ve ? ve.valueOf : void 0; function me(e) { var t = -1, n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
    } } function ge(e) { var t = -1, n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
    } } function be(e) { var t = -1, n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
    } } function ke(e) { var t = -1, n = null == e ? 0 : e.length; for (this.__data__ = new be; ++t < n;)
        this.add(e[t]); } function we(e) { var t = this.__data__ = new ge(e); this.size = t.size; } function xe(e, t) { var n = Fe(e), r = !n && De(e), i = !n && !r && Be(e), a = !n && !r && !i && $e(e), s = n || r || i || a, o = s ? function (e, t) { for (var n = -1, r = Array(e); ++n < e;)
        r[n] = t(n); return r; }(e.length, String) : [], u = o.length; for (var c in e)
        !t && !$.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Le(c, u)) || o.push(c); return o; } function _e(e, t) { for (var n = e.length; n--;)
        if (Ue(e[n][0], t))
            return n; return -1; } function Se(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ee && ee in Object(e) ? function (e) { var t = $.call(e, ee), n = e[ee]; try {
        e[ee] = void 0;
        var r = !0;
    }
    catch (e) { } var i = J.call(e); r && (t ? e[ee] = n : delete e[ee]); return i; }(e) : function (e) { return J.call(e); }(e); } function Te(e) { return Ge(e) && Se(e) == a; } function Ee(e, t, n, r, i) { return e === t || (null == e || null == t || !Ge(e) && !Ge(t) ? e != e && t != t : function (e, t, n, r, i, l) { var h = Fe(e), b = Fe(t), x = h ? s : Me(e), _ = b ? s : Me(t), S = (x = x == a ? p : x) == p, T = (_ = _ == a ? p : _) == p, E = x == _; if (E && Be(e)) {
        if (!Be(t))
            return !1;
        h = !0, S = !1;
    } if (E && !S)
        return l || (l = new we), h || $e(e) ? Oe(e, t, n, r, i, l) : function (e, t, n, r, i, a, s) { switch (n) {
            case w:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer, t = t.buffer;
            case k: return !(e.byteLength != t.byteLength || !a(new Q(e), new Q(t)));
            case o:
            case u:
            case d: return Ue(+e, +t);
            case c: return e.name == t.name && e.message == t.message;
            case v:
            case m: return e == t + "";
            case f: var l = N;
            case y:
                var p = 1 & r;
                if (l || (l = U), e.size != t.size && !p)
                    return !1;
                var h = s.get(e);
                if (h)
                    return h == t;
                r |= 2, s.set(e, t);
                var b = Oe(l(e), l(t), r, i, a, s);
                return s.delete(e), b;
            case g: if (ye)
                return ye.call(e) == ye.call(t);
        } return !1; }(e, t, x, n, r, i, l); if (!(1 & n)) {
        var R = S && $.call(e, "__wrapped__"), I = T && $.call(t, "__wrapped__");
        if (R || I) {
            var O = R ? e.value() : e, C = I ? t.value() : t;
            return l || (l = new we), i(O, C, n, r, l);
        }
    } if (!E)
        return !1; return l || (l = new we), function (e, t, n, r, i, a) { var s = 1 & n, o = Ce(e), u = o.length, c = Ce(t).length; if (u != c && !s)
        return !1; var l = u; for (; l--;) {
        var f = o[l];
        if (!(s ? f in t : $.call(t, f)))
            return !1;
    } var d = a.get(e); if (d && a.get(t))
        return d == t; var p = !0; a.set(e, t), a.set(t, e); var h = s; for (; ++l < u;) {
        var v = e[f = o[l]], y = t[f];
        if (r)
            var m = s ? r(y, v, f, t, e, a) : r(v, y, f, e, t, a);
        if (!(void 0 === m ? v === y || i(v, y, n, r, a) : m)) {
            p = !1;
            break;
        }
        h || (h = "constructor" == f);
    } if (p && !h) {
        var g = e.constructor, b = t.constructor;
        g == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof b && b instanceof b || (p = !1);
    } return a.delete(e), a.delete(t), p; }(e, t, n, r, i, l); }(e, t, n, r, Ee, i)); } function Re(e) { return !(!We(e) || function (e) { return !!V && V in e; }(e)) && (qe(e) ? K : x).test(Ne(e)); } function Ie(e) { if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || z, t !== r)
        return re(e); var t, n, r, i = []; for (var a in Object(e))
        $.call(e, a) && "constructor" != a && i.push(a); return i; } function Oe(e, t, n, r, i, a) { var s = 1 & n, o = e.length, u = t.length; if (o != u && !(s && u > o))
        return !1; var c = a.get(e); if (c && a.get(t))
        return c == t; var l = -1, f = !0, d = 2 & n ? new ke : void 0; for (a.set(e, t), a.set(t, e); ++l < o;) {
        var p = e[l], h = t[l];
        if (r)
            var v = s ? r(h, p, l, t, e, a) : r(p, h, l, e, t, a);
        if (void 0 !== v) {
            if (v)
                continue;
            f = !1;
            break;
        }
        if (d) {
            if (!M(t, (function (e, t) { if (!L(d, t) && (p === e || i(p, e, n, r, a)))
                return d.push(t); }))) {
                f = !1;
                break;
            }
        }
        else if (p !== h && !i(p, h, n, r, a)) {
            f = !1;
            break;
        }
    } return a.delete(e), a.delete(t), f; } function Ce(e) { return function (e, t, n) { var r = t(e); return Fe(e) ? r : function (e, t) { for (var n = -1, r = t.length, i = e.length; ++n < r;)
        e[i + n] = t[n]; return e; }(r, n(e)); }(e, Ve, je); } function Pe(e, t) { var n = e.__data__; return function (e) { var t = Ca(e); return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e; }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map; } function Ae(e, t) { var n = function (e, t) { return null == e ? void 0 : e[t]; }(e, t); return Re(n) ? n : void 0; } me.prototype.clear = function () { this.__data__ = ce ? ce(null) : {}, this.size = 0; }, me.prototype.delete = function (e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t; }, me.prototype.get = function (e) { var t = this.__data__; if (ce) {
        var n = t[e];
        return n === r ? void 0 : n;
    } return $.call(t, e) ? t[e] : void 0; }, me.prototype.has = function (e) { var t = this.__data__; return ce ? void 0 !== t[e] : $.call(t, e); }, me.prototype.set = function (e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = ce && void 0 === t ? r : t, this; }, ge.prototype.clear = function () { this.__data__ = [], this.size = 0; }, ge.prototype.delete = function (e) { var t = this.__data__, n = _e(t, e); return !(n < 0) && (n == t.length - 1 ? t.pop() : Z.call(t, n, 1), --this.size, !0); }, ge.prototype.get = function (e) { var t = this.__data__, n = _e(t, e); return n < 0 ? void 0 : t[n][1]; }, ge.prototype.has = function (e) { return _e(this.__data__, e) > -1; }, ge.prototype.set = function (e, t) { var n = this.__data__, r = _e(n, e); return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this; }, be.prototype.clear = function () { this.size = 0, this.__data__ = { hash: new me, map: new (ae || ge), string: new me }; }, be.prototype.delete = function (e) { var t = Pe(this, e).delete(e); return this.size -= t ? 1 : 0, t; }, be.prototype.get = function (e) { return Pe(this, e).get(e); }, be.prototype.has = function (e) { return Pe(this, e).has(e); }, be.prototype.set = function (e, t) { var n = Pe(this, e), r = n.size; return n.set(e, t), this.size += n.size == r ? 0 : 1, this; }, ke.prototype.add = ke.prototype.push = function (e) { return this.__data__.set(e, r), this; }, ke.prototype.has = function (e) { return this.__data__.has(e); }, we.prototype.clear = function () { this.__data__ = new ge, this.size = 0; }, we.prototype.delete = function (e) { var t = this.__data__, n = t.delete(e); return this.size = t.size, n; }, we.prototype.get = function (e) { return this.__data__.get(e); }, we.prototype.has = function (e) { return this.__data__.has(e); }, we.prototype.set = function (e, t) { var n = this.__data__; if (n instanceof ge) {
        var r = n.__data__;
        if (!ae || r.length < 199)
            return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new be(r);
    } return n.set(e, t), this.size = n.size, this; }; var je = te ? function (e) { return null == e ? [] : (e = Object(e), function (e, t) { for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r;) {
        var s = e[n];
        t(s, n, e) && (a[i++] = s);
    } return a; }(te(e), (function (t) { return X.call(e, t); }))); } : function () { return []; }, Me = Se; function Le(e, t) { return !!(t = null == t ? i : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t; } function Ne(e) { if (null != e) {
        try {
            return G.call(e);
        }
        catch (e) { }
        try {
            return e + "";
        }
        catch (e) { }
    } return ""; } function Ue(e, t) { return e === t || e != e && t != t; } (ie && Me(new ie(new ArrayBuffer(1))) != w || ae && Me(new ae) != f || se && Me(se.resolve()) != h || oe && Me(new oe) != y || ue && Me(new ue) != b) && (Me = function (e) { var t = Se(e), n = t == p ? e.constructor : void 0, r = n ? Ne(n) : ""; if (r)
        switch (r) {
            case le: return w;
            case fe: return f;
            case de: return h;
            case pe: return y;
            case he: return b;
        } return t; }); var De = Te(function () { return arguments; }()) ? Te : function (e) { return Ge(e) && $.call(e, "callee") && !X.call(e, "callee"); }, Fe = Array.isArray; var Be = ne || function () { return !1; }; function qe(e) { if (!We(e))
        return !1; var t = Se(e); return t == l || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t; } function ze(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i; } function We(e) { var t = Ca(e); return null != e && ("object" == t || "function" == t); } function Ge(e) { return null != e && "object" == Ca(e); } var $e = j ? function (e) { return function (t) { return e(t); }; }(j) : function (e) { return Ge(e) && ze(e.length) && !!S[Se(e)]; }; function Ve(e) { return null != (t = e) && ze(t.length) && !qe(t) ? xe(e) : Ie(e); var t; } e.exports = function (e, t) { return Ee(e, t); }; }(Sy, Sy.exports);
    var Ty = Sy.exports;
    function Ey(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    var Ry = rd.scope("User"), User = function (e) { Oa(User, e); var t, n, r, i, a, s, o, u = Ey(User); function User(e, t, n, r) { var i; return Ma(this, User), ja(Ra(i = u.call(this)), "promiseToFetch", null), ja(Ra(i), "updated", "updated"), ja(Ra(i), "userSubscribed", "userSubscribed"), ja(Ra(i), "userUnsubscribed", "userUnsubscribed"), i.services = r, i.subscribed = "initializing", i.setMaxListeners(0), i.state = { identity: e, entityName: t, friendlyName: null, attributes: {}, online: null, notifiable: null }, i._initializationPromise = new Promise((function (e) { i._resolveInitializationPromise = e; })), null !== n && i._resolveInitialization(n, e, t, !1), i; } return Ea(User, [{ key: "identity", get: function () { return this.state.identity; }, set: function (e) { this.state.identity = e; } }, { key: "entityName", set: function (e) { this.state.entityName = e; } }, { key: "attributes", get: function () { return this.state.attributes; } }, { key: "friendlyName", get: function () { return this.state.friendlyName; } }, { key: "isOnline", get: function () { return this.state.online; } }, { key: "isNotifiable", get: function () { return this.state.notifiable; } }, { key: "isSubscribed", get: function () { return "subscribed" == this.subscribed; } }, { key: "_update", value: (o = Sa(bl.mark((function e(t, n) { var r, i; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        r = [], Ry.debug("User for", this.state.identity, "updated:", t, n), e.t0 = t, e.next = "friendlyName" === e.t0 ? 7 : "attributes" === e.t0 ? 9 : "reachability" === e.t0 ? 12 : 15;
                        break;
                    case 7: return this.state.friendlyName !== n.value && (r.push("friendlyName"), this.state.friendlyName = n.value), e.abrupt("break", 16);
                    case 9: return i = nh(n.value, "Retrieved malformed attributes from the server for user: ".concat(this.state.identity), Ry), Ty(this.state.attributes, i) || (this.state.attributes = i, r.push("attributes")), e.abrupt("break", 16);
                    case 12: return this.state.online !== n.online && (this.state.online = n.online, r.push("reachabilityOnline")), this.state.notifiable !== n.notifiable && (this.state.notifiable = n.notifiable, r.push("reachabilityNotifiable")), e.abrupt("break", 16);
                    case 15: return e.abrupt("return");
                    case 16: r.length > 0 && this.emit("updated", { user: this, updateReasons: r });
                    case 17:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return o.apply(this, arguments); }) }, { key: "_updateReachabilityInfo", value: (s = Sa(bl.mark((function e(t, n) { var r = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        if (this.configuration.reachabilityEnabled) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", Promise.resolve());
                    case 4: return e.abrupt("return", t.get("reachability").then(n).catch((function (e) { Ry.warn("Failed to get reachability info for ", r.state.identity, e); })));
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return s.apply(this, arguments); }) }, { key: "_fetch", value: (a = Sa(bl.mark((function e() { var t = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        if (this.state.entityName) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return", this);
                    case 4: return this.promiseToFetch = this.services.syncClient.map({ id: this.state.entityName, mode: "open_existing", includeItems: !0 }).then((function (e) { return t.entity = e, e.on("itemUpdated", (function (e) { return Ry.debug(t.state.entityName + " (" + t.state.identity + ") itemUpdated: " + e.item.key), t._update(e.item.key, e.item.data); })), Promise.all([e.get("friendlyName").then((function (e) { return t._update(e.key, e.data); })), e.get("attributes").then((function (e) { return t._update(e.key, e.data); })), t._updateReachabilityInfo(e, (function (e) { return t._update(e.key, e.data); }))]); })).then((function () { return Ry.debug("Fetched for", t.identity), t.subscribed = "subscribed", t.emit("userSubscribed", t), t; })).catch((function (e) { throw t.promiseToFetch = null, e; })), e.abrupt("return", this.promiseToFetch);
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return a.apply(this, arguments); }) }, { key: "_ensureFetched", value: (i = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2: return e.abrupt("return", this.promiseToFetch || this._fetch());
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return i.apply(this, arguments); }) }, { key: "updateAttributes", value: (r = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        if ("unsubscribed" != this.subscribed) {
                            e.next = 4;
                            break;
                        }
                        throw new Error("Can't modify unsubscribed object");
                    case 4: return e.next = 6, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: JSON.stringify(t) });
                    case 6: return e.abrupt("return", this);
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "updateFriendlyName", value: (n = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        if ("unsubscribed" != this.subscribed) {
                            e.next = 4;
                            break;
                        }
                        throw new Error("Can't modify unsubscribed object");
                    case 4: return e.next = 6, this.services.commandExecutor.mutateResource("post", this.links.self, { friendly_name: t });
                    case 6: return e.abrupt("return", this);
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "unsubscribe", value: (t = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._initializationPromise;
                    case 2:
                        if (!this.promiseToFetch) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 5, this.promiseToFetch;
                    case 5: this.entity.close(), this.promiseToFetch = null, this.subscribed = "unsubscribed", this.emit("userUnsubscribed", this);
                    case 9:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "_resolveInitialization", value: function (e, t, n, r) { this.configuration = e, this.identity = t, this.entityName = n, this.links = { self: "".concat(this.configuration.links.users, "/").concat(this.identity) }, this._resolveInitializationPromise(), r && this.emit("updated", { user: this, updateReasons: ["friendlyName", "attributes", "reachabilityOnline", "reachabilityNotifiable"] }); } }]), User; }(_y);
    function Iy(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function Oy(e, t) { if (e) {
        if ("string" == typeof e)
            return Iy(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Iy(e, t) : void 0;
    } }
    function Cy(e, t) { return function (e) { if (Array.isArray(e))
        return e; }(e) || function (e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != n) {
        var r, i, a = [], s = !0, o = !1;
        try {
            for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0)
                ;
        }
        catch (e) {
            o = !0, i = e;
        }
        finally {
            try {
                s || null == n.return || n.return();
            }
            finally {
                if (o)
                    throw i;
            }
        }
        return a;
    } }(e, t) || Oy(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    wl([Xv(["string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], User.prototype, "updateAttributes", null), wl([Xv(["string"]), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], User.prototype, "updateFriendlyName", null);
    var Py = { exports: {} }, Ay = !s((function () { return Object.isExtensible(Object.preventExtensions({})); })), jy = In, My = ot, Ly = S, Ny = ee, Uy = Ne.f, Dy = Pt, Fy = br, By = Ay, qy = !1, zy = re("meta"), Wy = 0, Gy = Object.isExtensible || function () { return !0; }, $y = function (e) { Uy(e, zy, { value: { objectID: "O" + Wy++, weakData: {} } }); }, Vy = Py.exports = { enable: function () { Vy.enable = function () { }, qy = !0; var e = Dy.f, t = [].splice, n = {}; n[zy] = 1, e(n).length && (Dy.f = function (n) { for (var r = e(n), i = 0, a = r.length; i < a; i++)
            if (r[i] === zy) {
                t.call(r, i, 1);
                break;
            } return r; }, jy({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: Fy.f })); }, fastKey: function (e, t) { if (!Ly(e))
            return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!Ny(e, zy)) {
            if (!Gy(e))
                return "F";
            if (!t)
                return "E";
            $y(e);
        } return e[zy].objectID; }, getWeakData: function (e, t) { if (!Ny(e, zy)) {
            if (!Gy(e))
                return !0;
            if (!t)
                return !1;
            $y(e);
        } return e[zy].weakData; }, onFreeze: function (e) { return By && qy && Gy(e) && !Ny(e, zy) && $y(e), e; } };
    My[zy] = !0;
    var Jy = In, Ky = i, Hy = kn, Yy = Je.exports, Qy = Py.exports, Xy = Is, Zy = as, em = S, tm = s, nm = Us, rm = Mr, im = fc, am = function (e, t, n) { var r = -1 !== e.indexOf("Map"), i = -1 !== e.indexOf("Weak"), a = r ? "set" : "add", s = Ky[e], o = s && s.prototype, u = s, c = {}, l = function (e) { var t = o[e]; Yy(o, e, "add" == e ? function (e) { return t.call(this, 0 === e ? 0 : e), this; } : "delete" == e ? function (e) { return !(i && !em(e)) && t.call(this, 0 === e ? 0 : e); } : "get" == e ? function (e) { return i && !em(e) ? void 0 : t.call(this, 0 === e ? 0 : e); } : "has" == e ? function (e) { return !(i && !em(e)) && t.call(this, 0 === e ? 0 : e); } : function (e, n) { return t.call(this, 0 === e ? 0 : e, n), this; }); }; if (Hy(e, "function" != typeof s || !(i || o.forEach && !tm((function () { (new s).entries().next(); })))))
        u = n.getConstructor(t, e, r, a), Qy.enable();
    else if (Hy(e, !0)) {
        var f = new u, d = f[a](i ? {} : -0, 1) != f, p = tm((function () { f.has(1); })), h = nm((function (e) { new s(e); })), v = !i && tm((function () { for (var e = new s, t = 5; t--;)
            e[a](t, t); return !e.has(-0); }));
        h || ((u = t((function (t, n) { Zy(t, u, e); var i = im(new s, t, u); return null != n && Xy(n, i[a], { that: i, AS_ENTRIES: r }), i; }))).prototype = o, o.constructor = u), (p || v) && (l("delete"), l("has"), r && l("get")), (v || d) && l(a), i && o.clear && delete o.clear;
    } return c[e] = u, Jy({ global: !0, forced: u != s }, c), rm(u, e), i || n.setStrong(u, e, r), u; }, sm = Ne.f, om = Hn, um = Ha, cm = Nr, lm = as, fm = Is, dm = qf, pm = is, hm = o, vm = Py.exports.fastKey, ym = xt.set, mm = xt.getterFor, gm = { getConstructor: function (e, t, n, r) { var i = e((function (e, a) { lm(e, i, t), ym(e, { type: t, index: om(null), first: void 0, last: void 0, size: 0 }), hm || (e.size = 0), null != a && fm(a, e[r], { that: e, AS_ENTRIES: n }); })), a = mm(t), s = function (e, t, n) { var r, i, s = a(e), u = o(e, t); return u ? u.value = n : (s.last = u = { index: i = vm(t, !0), key: t, value: n, previous: r = s.last, next: void 0, removed: !1 }, s.first || (s.first = u), r && (r.next = u), hm ? s.size++ : e.size++, "F" !== i && (s.index[i] = u)), e; }, o = function (e, t) { var n, r = a(e), i = vm(t); if ("F" !== i)
            return r.index[i]; for (n = r.first; n; n = n.next)
            if (n.key == t)
                return n; }; return um(i.prototype, { clear: function () { for (var e = a(this), t = e.index, n = e.first; n;)
                n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next; e.first = e.last = void 0, hm ? e.size = 0 : this.size = 0; }, delete: function (e) { var t = this, n = a(t), r = o(t, e); if (r) {
                var i = r.next, s = r.previous;
                delete n.index[r.index], r.removed = !0, s && (s.next = i), i && (i.previous = s), n.first == r && (n.first = i), n.last == r && (n.last = s), hm ? n.size-- : t.size--;
            } return !!r; }, forEach: function (e) { for (var t, n = a(this), r = cm(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                for (r(t.value, t.key, this); t && t.removed;)
                    t = t.previous; }, has: function (e) { return !!o(this, e); } }), um(i.prototype, n ? { get: function (e) { var t = o(this, e); return t && t.value; }, set: function (e, t) { return s(this, 0 === e ? 0 : e, t); } } : { add: function (e) { return s(this, e = 0 === e ? 0 : e, e); } }), hm && sm(i.prototype, "size", { get: function () { return a(this).size; } }), i; }, setStrong: function (e, t, n) { var r = t + " Iterator", i = mm(t), a = mm(r); dm(e, t, (function (e, t) { ym(this, { type: r, target: e, state: i(e), kind: t, last: void 0 }); }), (function () { for (var e = a(this), t = e.kind, n = e.last; n && n.removed;)
            n = n.previous; return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? { value: n.key, done: !1 } : "values" == t ? { value: n.value, done: !1 } : { value: [n.key, n.value], done: !1 } : (e.target = void 0, { value: void 0, done: !0 }); }), n ? "entries" : "values", !n, !0), pm(t); } };
    am("Map", (function (e) { return function () { return e(this, arguments.length ? arguments[0] : void 0); }; }), gm);
    var bm = {}, km = { exports: {} };
    !function (e) { function t(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } } e.exports = function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(km);
    var wm = { exports: {} };
    !function (e) { e.exports = function (e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(wm), Object.defineProperty(bm, "__esModule", { value: !0 });
    var xm = km.exports, _m = ov.exports, Sm = iv.exports, Tm = sv.exports, Em = uv.exports, Rm = wm.exports;
    function Im(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; }
    var Om = Im(rv.exports), Cm = Im(xm), Pm = Im(_m), Am = Im(Sm), jm = Im(Tm), Mm = Im(Em), Lm = Im(Rm);
    function Nm() { }
    function Um() { Um.init.call(this); }
    function Dm(e) { return void 0 === e._maxListeners ? Um.defaultMaxListeners : e._maxListeners; }
    function Fm(e, t, n) { if (t)
        e.call(n);
    else
        for (var r = e.length, i = Jm(e, r), a = 0; a < r; ++a)
            i[a].call(n); }
    function Bm(e, t, n, r) { if (t)
        e.call(n, r);
    else
        for (var i = e.length, a = Jm(e, i), s = 0; s < i; ++s)
            a[s].call(n, r); }
    function qm(e, t, n, r, i) { if (t)
        e.call(n, r, i);
    else
        for (var a = e.length, s = Jm(e, a), o = 0; o < a; ++o)
            s[o].call(n, r, i); }
    function zm(e, t, n, r, i, a) { if (t)
        e.call(n, r, i, a);
    else
        for (var s = e.length, o = Jm(e, s), u = 0; u < s; ++u)
            o[u].call(n, r, i, a); }
    function Wm(e, t, n, r) { if (t)
        e.apply(n, r);
    else
        for (var i = e.length, a = Jm(e, i), s = 0; s < i; ++s)
            a[s].apply(n, r); }
    function Gm(e, t, n, r) { var i, a, s, o; if ("function" != typeof n)
        throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = new Nm, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = Dm(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, o = u, "function" == typeof console.warn ? console.warn(o) : console.log(o);
        }
    }
    else
        s = a[t] = n, ++e._eventsCount; return e; }
    function $m(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; }
    function Vm(e) { var t = this._events; if (t) {
        var n = t[e];
        if ("function" == typeof n)
            return 1;
        if (n)
            return n.length;
    } return 0; }
    function Jm(e, t) { for (var n = new Array(t); t--;)
        n[t] = e[t]; return n; }
    function Km(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Mm.default(e); if (t) {
        var i = Mm.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jm.default(this, n); }; }
    Nm.prototype = Object.create(null), Um.EventEmitter = Um, Um.usingDomains = !1, Um.prototype.domain = void 0, Um.prototype._events = void 0, Um.prototype._maxListeners = void 0, Um.defaultMaxListeners = 10, Um.init = function () { this.domain = null, Um.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new Nm, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, Um.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, Um.prototype.getMaxListeners = function () { return Dm(this); }, Um.prototype.emit = function (e) { var t, n, r, i, a, s, o, u = "error" === e; if (s = this._events)
        u = u && null == s.error;
    else if (!u)
        return !1; if (o = this.domain, u) {
        if (t = arguments[1], !o) {
            if (t instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    } if (!(n = s[e]))
        return !1; var l = "function" == typeof n; switch (r = arguments.length) {
        case 1:
            Fm(n, l, this);
            break;
        case 2:
            Bm(n, l, this, arguments[1]);
            break;
        case 3:
            qm(n, l, this, arguments[1], arguments[2]);
            break;
        case 4:
            zm(n, l, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
            Wm(n, l, this, i);
    } return !0; }, Um.prototype.addListener = function (e, t) { return Gm(this, e, t, !1); }, Um.prototype.on = Um.prototype.addListener, Um.prototype.prependListener = function (e, t) { return Gm(this, e, t, !0); }, Um.prototype.once = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.on(e, $m(this, e, t)), this; }, Um.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, $m(this, e, t)), this; }, Um.prototype.removeListener = function (e, t) { var n, r, i, a, s; if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
        return this; if (!(n = r[e]))
        return this; if (n === t || n.listener && n.listener === t)
        0 == --this._eventsCount ? this._events = new Nm : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, a = n.length; a-- > 0;)
            if (n[a] === t || n[a].listener && n[a].listener === t) {
                s = n[a].listener, i = a;
                break;
            }
        if (i < 0)
            return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount)
                return this._events = new Nm, this;
            delete r[e];
        }
        else
            !function (e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
                e[n] = e[r]; e.pop(); }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    } return this; }, Um.prototype.off = function (e, t) { return this.removeListener(e, t); }, Um.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
        return this; if (!n.removeListener)
        return 0 === arguments.length ? (this._events = new Nm, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new Nm : delete n[e]), this; if (0 === arguments.length) {
        for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
            "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new Nm, this._eventsCount = 0, this;
    } if ("function" == typeof (t = n[e]))
        this.removeListener(e, t);
    else if (t)
        do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]); return this; }, Um.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }(t) : []; }, Um.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : Vm.call(e, t); }, Um.prototype.listenerCount = Vm, Um.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; };
    var Hm = function (e) { Am.default(n, e); var t = Km(n); function n(e) { var r; return Om.default(this, n), r = t.call(this), Lm.default(Pm.default(r), "timeout", null), Lm.default(Pm.default(r), "startTimestamp", -1), r.minDelay = e.min, r.maxDelay = e.max, r.initialDelay = e.initial || 0, r.maxAttemptsCount = e.maxAttemptsCount || 0, r.maxAttemptsTime = e.maxAttemptsTime || 0, r.randomness = e.randomness || 0, r.inProgress = !1, r.attemptNum = 0, r.prevDelay = 0, r.currDelay = 0, r; } return Cm.default(n, [{ key: "attempt", value: function () { this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.attemptNum++, this.emit("attempt", this); } }, { key: "nextDelay", value: function (e) { if ("number" == typeof e)
                return this.prevDelay = 0, this.currDelay = e, e; if (0 == this.attemptNum)
                return this.initialDelay; if (1 == this.attemptNum)
                return this.currDelay = this.minDelay, this.currDelay; this.prevDelay = this.currDelay; var t = this.currDelay + this.prevDelay; return this.maxDelay && t > this.maxDelay && (this.currDelay = this.maxDelay, t = this.maxDelay), this.currDelay = t, t; } }, { key: "randomize", value: function (e) { var t = e * this.randomness, n = Math.round(Math.random() * t * 2 - t); return Math.max(0, e + n); } }, { key: "scheduleAttempt", value: function (e) { var t = this; if (this.maxAttemptsCount && this.attemptNum >= this.maxAttemptsCount)
                return this.cleanup(), void this.emit("failed", new Error("Maximum attempt count limit reached")); var n = this.nextDelay(e); if (n = this.randomize(n), this.maxAttemptsTime && this.startTimestamp + this.maxAttemptsTime < Date.now() + n)
                return this.cleanup(), void this.emit("failed", new Error("Maximum attempt time limit reached")); this.timeout = setTimeout((function () { return t.attempt(); }), n); } }, { key: "cleanup", value: function () { this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.inProgress = !1, this.attemptNum = 0, this.prevDelay = 0, this.currDelay = 0; } }, { key: "start", value: function () { if (this.inProgress)
                throw new Error("Retrier is already in progress"); this.inProgress = !0, this.startTimestamp = Date.now(), this.scheduleAttempt(this.initialDelay); } }, { key: "cancel", value: function () { this.timeout && (clearTimeout(this.timeout), this.timeout = null, this.inProgress = !1, this.emit("cancelled")); } }, { key: "succeeded", value: function (e) { this.emit("succeeded", e); } }, { key: "failed", value: function (e, t) { if (this.timeout)
                throw new Error("Retrier attempt is already in progress"); this.scheduleAttempt(t); } }]), n; }(Um), Ym = function (e) { Am.default(n, e); var t = Km(n); function n(e) { var r; return Om.default(this, n), r = t.call(this), Lm.default(Pm.default(r), "resolve", (function () { })), Lm.default(Pm.default(r), "reject", (function () { })), r.retrier = new Hm(e), r; } return Cm.default(n, [{ key: "run", value: function (e) { var t = this; return this.retrier.on("attempt", (function () { e().then((function (e) { return t.retrier.succeeded(e); })).catch((function (e) { return t.retrier.failed(e); })); })), this.retrier.on("succeeded", (function (e) { return t.resolve(e); })), this.retrier.on("cancelled", (function () { return t.reject(new Error("Cancelled")); })), this.retrier.on("failed", (function (e) { return t.reject(e); })), new Promise((function (e, n) { t.resolve = e, t.reject = n, t.retrier.start(); })); } }, { key: "cancel", value: function () { this.retrier.cancel(); } }]), n; }(Um);
    function Qm(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Mm.default(e); if (t) {
        var i = Mm.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jm.default(this, n); }; }
    function Xm(e) { return null != e; }
    var Zm = function (e) { Am.default(n, e); var t = Qm(n); function n(e) { var r; Om.default(this, n), r = t.call(this), Lm.default(Pm.default(r), "backoffDelay", 0), Lm.default(Pm.default(r), "nextBackoffDelay", 0), Lm.default(Pm.default(r), "backoffNumber", 0), Lm.default(Pm.default(r), "timeoutID", null), Lm.default(Pm.default(r), "maxNumberOfRetry", -1); var i = e = e || {}, a = i.initialDelay, s = i.maxDelay, o = i.randomisationFactor, u = i.factor; if (Xm(a) && a < 1)
        throw new Error("The initial timeout must be equal to or greater than 1."); if (Xm(s) && s <= 1)
        throw new Error("The maximal timeout must be greater than 1."); if (Xm(o) && (o < 0 || o > 1))
        throw new Error("The randomisation factor must be between 0 and 1."); if (Xm(u) && u <= 1)
        throw new Error("Exponential factor should be greater than 1."); if (r.initialDelay = a || 100, r.maxDelay = s || 1e4, r.maxDelay <= r.initialDelay)
        throw new Error("The maximal backoff delay must be greater than the initial backoff delay."); return r.randomisationFactor = o || 0, r.factor = u || 2, r.reset(), r; } return Cm.default(n, [{ key: "backoff", value: function (e) { null == this.timeoutID && (this.backoffNumber === this.maxNumberOfRetry ? (this.emit("fail", e), this.reset()) : (this.backoffDelay = this.next(), this.timeoutID = setTimeout(this.onBackoff.bind(this), this.backoffDelay), this.emit("backoff", this.backoffNumber, this.backoffDelay, e))); } }, { key: "reset", value: function () { this.backoffDelay = 0, this.nextBackoffDelay = this.initialDelay, this.backoffNumber = 0, this.timeoutID && clearTimeout(this.timeoutID), this.timeoutID = null; } }, { key: "failAfter", value: function (e) { if (e <= 0)
                throw new Error("Expected a maximum number of retry greater than 0 but got ".concat(e)); this.maxNumberOfRetry = e; } }, { key: "next", value: function () { this.backoffDelay = Math.min(this.nextBackoffDelay, this.maxDelay), this.nextBackoffDelay = this.backoffDelay * this.factor; var e = 1 + Math.random() * this.randomisationFactor; return Math.min(this.maxDelay, Math.round(this.backoffDelay * e)); } }, { key: "onBackoff", value: function () { this.timeoutID = null, this.emit("ready", this.backoffNumber, this.backoffDelay), this.backoffNumber++; } }], [{ key: "exponential", value: function (e) { return new n(e); } }]), n; }(Um), eg = bm.AsyncRetrier = Ym;
    bm.Backoff = Zm;
    var tg = bm.Retrier = Hm;
    function ng(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return rg(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return rg(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function rg(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var ig = function () { function e(t, n) { Ma(this, e), this.configuration = t, this.services = n, this.cache = new Map, this.cacheLifetime = 100 * this.configuration.httpCacheInterval, this.cleanupCache(); } return Ea(e, [{ key: "isExpired", value: function (e) { return !this.cacheLifetime || Date.now() - e > this.cacheLifetime; } }, { key: "cleanupCache", value: function () { var e, t = ng(this.cache); try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = Cy(e.value, 2), r = n[0], i = n[1];
                    this.isExpired(i.timestamp) && this.cache.delete(r);
                }
            }
            catch (e) {
                t.e(e);
            }
            finally {
                t.f();
            } 0 === this.cache.size && clearInterval(this.timer); } }, { key: "pokeTimer", value: function () { var e = this; this.timer = this.timer || setInterval((function () { return e.cleanupCache(); }), 2 * this.cacheLifetime); } }, { key: "executeWithRetry", value: function (e) { var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return new Promise((function (r, i) { var a = [502, 503, 504]; n && a.push(429); var s = new tg(t.configuration.backoffConfiguration); s.on("attempt", (function () { e().then((function (e) { return s.succeeded(e); })).catch((function (e) { a.indexOf(e.status) > -1 || "Twilsock disconnected" === e.message ? s.failed(e) : (s.removeAllListeners(), s.cancel(), i(e)); })); })), s.on("succeeded", (function (e) { r(e); })), s.on("cancelled", (function (e) { return i(e); })), s.on("failed", (function (e) { return i(e); })), s.start(); })); } }, { key: "get", value: function () { var e = Sa(bl.mark((function e(t) { var n, r, i, a = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!(n = this.cache.get(t)) || this.isExpired(n.timestamp)) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", n.response);
                    case 3: return r = {}, e.next = 6, this.executeWithRetry((function () { return a.services.transport.get(t, r, a.configuration.productId); }), this.configuration.retryWhenThrottled);
                    case 6: return i = e.sent, this.cache.set(t, { response: i, timestamp: Date.now() }), this.pokeTimer(), e.abrupt("return", i);
                    case 10:
                    case "end": return e.stop();
                } }), e, this); }))); return function (t) { return e.apply(this, arguments); }; }() }]), e; }(), ag = function e() { Ma(this, e); };
    ja(ag, "TYPING_INDICATOR", "twilio.ipmsg.typing_indicator"), ja(ag, "NEW_MESSAGE", "twilio.conversations.new_message"), ja(ag, "ADDED_TO_CONVERSATION", "twilio.conversations.added_to_conversation"), ja(ag, "REMOVED_FROM_CONVERSATION", "twilio.conversations.removed_from_conversation"), ja(ag, "CONSUMPTION_UPDATE", "twilio.channel.consumption_update");
    var sg = {}, og = { exports: {} };
    !function (e) { function t(e, t, n, r, i, a, s) { try {
        var o = e[a](s), u = o.value;
    }
    catch (e) {
        return void n(e);
    } o.done ? t(u) : Promise.resolve(u).then(r, i); } e.exports = function (e) { return function () { var n = this, r = arguments; return new Promise((function (i, a) { var s = e.apply(n, r); function o(e) { t(s, i, a, o, u, "next", e); } function u(e) { t(s, i, a, o, u, "throw", e); } o(void 0); })); }; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(og);
    var ug = { exports: {} }, cg = { exports: {} };
    !function (e) { var t = uv.exports; e.exports = function (e, n) { for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = t(e));)
        ; return e; }, e.exports.default = e.exports, e.exports.__esModule = !0; }(cg), function (e) { var t = cg.exports; function n(r, i, a) { return "undefined" != typeof Reflect && Reflect.get ? (e.exports = n = Reflect.get, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = n = function (e, n, r) { var i = t(e, n); if (i) {
        var a = Object.getOwnPropertyDescriptor(i, n);
        return a.get ? a.get.call(r) : a.value;
    } }, e.exports.default = e.exports, e.exports.__esModule = !0), n(r, i, a || r); } e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0; }(ug);
    var lg = n(kl), fg = Je.exports, dg = De, pg = gr, hg = s, vg = zd, yg = "toString", mg = RegExp.prototype, gg = mg.toString, bg = hg((function () { return "/a/b" != gg.call({ source: "a", flags: "b" }); })), kg = gg.name != yg;
    (bg || kg) && fg(RegExp.prototype, yg, (function () { var e = dg(this), t = pg(e.source), n = e.flags; return "/" + t + "/" + pg(void 0 === n && e instanceof RegExp && !("flags" in mg) ? vg.call(e) : n); }), { unsafe: !0 }), am("Set", (function (e) { return function () { return e(this, arguments.length ? arguments[0] : void 0); }; }), gm);
    var wg = { exports: {} };
    !function (e, t) { var n; n = function () { return function (e) { var t = {}; function n(r) { if (t[r])
        return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports; } return n.m = e, n.c = t, n.i = function (e) { return e; }, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }); }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, "a", t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = "", n(n.s = 5); }([function (e, t, n) { e.exports = function (e, t) { var n, r, i; for (n = 1; n < arguments.length; n++)
            for (i in r = arguments[n])
                r.hasOwnProperty(i) && (e[i] = r[i]); return e; }; }, function (e, t, n) { var r = n(0); e.exports = { build: function (e, t) { var n, i, a, s = t.plugins; for (n = 0, i = s.length; n < i; n++)
                (a = s[n]).methods && r(e, a.methods), a.properties && Object.defineProperties(e, a.properties); }, hook: function (e, t, n) { var r, i, a, s, o = e.config.plugins, u = [e.context]; for (n && (u = u.concat(n)), r = 0, i = o.length; r < i; r++)
                s = o[r], (a = o[r][t]) && a.apply(s, u); } }; }, function (e, t, n) { function r(e) { if (0 === e.length)
            return e; var t, n, r = e.split(/[_-]/); if (1 === r.length && r[0][0].toLowerCase() === r[0][0])
            return e; for (n = r[0].toLowerCase(), t = 1; t < r.length; t++)
            n = n + r[t].charAt(0).toUpperCase() + r[t].substring(1).toLowerCase(); return n; } r.prepended = function (e, t) { return e + (t = r(t))[0].toUpperCase() + t.substring(1); }, e.exports = r; }, function (e, t, n) { var r = n(0), i = n(2); function a(e, t) { e = e || {}, this.options = e, this.defaults = t.defaults, this.states = [], this.transitions = [], this.map = {}, this.lifecycle = this.configureLifecycle(), this.init = this.configureInitTransition(e.init), this.data = this.configureData(e.data), this.methods = this.configureMethods(e.methods), this.map[this.defaults.wildcard] = {}, this.configureTransitions(e.transitions || []), this.plugins = this.configurePlugins(e.plugins, t.plugin); } r(a.prototype, { addState: function (e) { this.map[e] || (this.states.push(e), this.addStateLifecycleNames(e), this.map[e] = {}); }, addStateLifecycleNames: function (e) { this.lifecycle.onEnter[e] = i.prepended("onEnter", e), this.lifecycle.onLeave[e] = i.prepended("onLeave", e), this.lifecycle.on[e] = i.prepended("on", e); }, addTransition: function (e) { this.transitions.indexOf(e) < 0 && (this.transitions.push(e), this.addTransitionLifecycleNames(e)); }, addTransitionLifecycleNames: function (e) { this.lifecycle.onBefore[e] = i.prepended("onBefore", e), this.lifecycle.onAfter[e] = i.prepended("onAfter", e), this.lifecycle.on[e] = i.prepended("on", e); }, mapTransition: function (e) { var t = e.name, n = e.from, r = e.to; return this.addState(n), "function" != typeof r && this.addState(r), this.addTransition(t), this.map[n][t] = e, e; }, configureLifecycle: function () { return { onBefore: { transition: "onBeforeTransition" }, onAfter: { transition: "onAfterTransition" }, onEnter: { state: "onEnterState" }, onLeave: { state: "onLeaveState" }, on: { transition: "onTransition" } }; }, configureInitTransition: function (e) { return "string" == typeof e ? this.mapTransition(r({}, this.defaults.init, { to: e, active: !0 })) : "object" === Ca(e) ? this.mapTransition(r({}, this.defaults.init, e, { active: !0 })) : (this.addState(this.defaults.init.from), this.defaults.init); }, configureData: function (e) { return "function" == typeof e ? e : "object" === Ca(e) ? function () { return e; } : function () { return {}; }; }, configureMethods: function (e) { return e || {}; }, configurePlugins: function (e, t) { var n, r, i; for (n = 0, r = (e = e || []).length; n < r; n++)
                "function" == typeof (i = e[n]) && (e[n] = i = i()), i.configure && i.configure(this); return e; }, configureTransitions: function (e) { var t, n, r, i, a, s = this.defaults.wildcard; for (n = 0; n < e.length; n++)
                for (r = e[n], i = Array.isArray(r.from) ? r.from : [r.from || s], a = r.to || s, t = 0; t < i.length; t++)
                    this.mapTransition({ name: r.name, from: i[t], to: a }); }, transitionFor: function (e, t) { var n = this.defaults.wildcard; return this.map[e][t] || this.map[n][t]; }, transitionsFor: function (e) { var t = this.defaults.wildcard; return Object.keys(this.map[e]).concat(Object.keys(this.map[t])); }, allStates: function () { return this.states; }, allTransitions: function () { return this.transitions; } }), e.exports = a; }, function (e, t, n) { var r = n(0), i = n(6), a = n(1), s = [null, []]; function o(e, t) { this.context = e, this.config = t, this.state = t.init.from, this.observers = [e]; } r(o.prototype, { init: function (e) { if (r(this.context, this.config.data.apply(this.context, e)), a.hook(this, "init"), this.config.init.active)
                return this.fire(this.config.init.name, []); }, is: function (e) { return Array.isArray(e) ? e.indexOf(this.state) >= 0 : this.state === e; }, isPending: function () { return this.pending; }, can: function (e) { return !this.isPending() && !!this.seek(e); }, cannot: function (e) { return !this.can(e); }, allStates: function () { return this.config.allStates(); }, allTransitions: function () { return this.config.allTransitions(); }, transitions: function () { return this.config.transitionsFor(this.state); }, seek: function (e, t) { var n = this.config.defaults.wildcard, r = this.config.transitionFor(this.state, e), i = r && r.to; return "function" == typeof i ? i.apply(this.context, t) : i === n ? this.state : i; }, fire: function (e, t) { return this.transit(e, this.state, this.seek(e, t), t); }, transit: function (e, t, n, r) { var i = this.config.lifecycle, a = this.config.options.observeUnchangedState || t !== n; return n ? this.isPending() ? this.context.onPendingTransition(e, t, n) : (this.config.addState(n), this.beginTransit(), r.unshift({ transition: e, from: t, to: n, fsm: this.context }), this.observeEvents([this.observersForEvent(i.onBefore.transition), this.observersForEvent(i.onBefore[e]), a ? this.observersForEvent(i.onLeave.state) : s, a ? this.observersForEvent(i.onLeave[t]) : s, this.observersForEvent(i.on.transition), a ? ["doTransit", [this]] : s, a ? this.observersForEvent(i.onEnter.state) : s, a ? this.observersForEvent(i.onEnter[n]) : s, a ? this.observersForEvent(i.on[n]) : s, this.observersForEvent(i.onAfter.transition), this.observersForEvent(i.onAfter[e]), this.observersForEvent(i.on[e])], r)) : this.context.onInvalidTransition(e, t, n); }, beginTransit: function () { this.pending = !0; }, endTransit: function (e) { return this.pending = !1, e; }, failTransit: function (e) { throw this.pending = !1, e; }, doTransit: function (e) { this.state = e.to; }, observe: function (e) { if (2 === e.length) {
                var t = {};
                t[e[0]] = e[1], this.observers.push(t);
            }
            else
                this.observers.push(e[0]); }, observersForEvent: function (e) { for (var t, n = 0, r = this.observers.length, i = []; n < r; n++)
                (t = this.observers[n])[e] && i.push(t); return [e, i, !0]; }, observeEvents: function (e, t, n, r) { if (0 === e.length)
                return this.endTransit(void 0 === r || r); var i = e[0][0], s = e[0][1], o = e[0][2]; if (t[0].event = i, i && o && i !== n && a.hook(this, "lifecycle", t), 0 === s.length)
                return e.shift(), this.observeEvents(e, t, i, r); var u = s.shift(), c = u[i].apply(u, t); return c && "function" == typeof c.then ? c.then(this.observeEvents.bind(this, e, t, i)).catch(this.failTransit.bind(this)) : !1 === c ? this.endTransit(!1) : this.observeEvents(e, t, i, c); }, onInvalidTransition: function (e, t, n) { throw new i("transition is invalid in current state", e, t, n, this.state); }, onPendingTransition: function (e, t, n) { throw new i("transition is invalid while previous transition is still in progress", e, t, n, this.state); } }), e.exports = o; }, function (e, t, n) { var r = n(0), i = n(2), a = n(1), s = n(3), o = n(4), u = { is: function (e) { return this._fsm.is(e); }, can: function (e) { return this._fsm.can(e); }, cannot: function (e) { return this._fsm.cannot(e); }, observe: function () { return this._fsm.observe(arguments); }, transitions: function () { return this._fsm.transitions(); }, allTransitions: function () { return this._fsm.allTransitions(); }, allStates: function () { return this._fsm.allStates(); }, onInvalidTransition: function (e, t, n) { return this._fsm.onInvalidTransition(e, t, n); }, onPendingTransition: function (e, t, n) { return this._fsm.onPendingTransition(e, t, n); } }, c = { state: { configurable: !1, enumerable: !0, get: function () { return this._fsm.state; }, set: function (e) { throw Error("use transitions to change state"); } } }; function l(e) { return f(this || {}, e); } function f(e, t) { return d(e, new s(t, l)), e._fsm(), e; } function d(e, t) { if ("object" !== Ca(e) || Array.isArray(e))
            throw Error("StateMachine can only be applied to objects"); a.build(e, t), Object.defineProperties(e, c), r(e, u), r(e, t.methods), t.allTransitions().forEach((function (t) { e[i(t)] = function () { return this._fsm.fire(t, [].slice.call(arguments)); }; })), e._fsm = function () { this._fsm = new o(this, t), this._fsm.init(arguments); }; } l.version = "3.0.1", l.factory = function () { var e, t; "function" == typeof arguments[0] ? (e = arguments[0], t = arguments[1] || {}) : (e = function () { this._fsm.apply(this, arguments); }, t = arguments[0] || {}); var n = new s(t, l); return d(e.prototype, n), e.prototype._fsm.config = n, e; }, l.apply = f, l.defaults = { wildcard: "*", init: { name: "init", from: "none" } }, e.exports = l; }, function (e, t, n) { e.exports = function (e, t, n, r, i) { this.message = e, this.transition = t, this.from = n, this.to = r, this.current = i; }; }]); }, e.exports = n(); }(wg);
    var xg = { exports: {} }, _g = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (_g) {
        var Sg = new Uint8Array(16);
        xg.exports = function () { return _g(Sg), Sg; };
    }
    else {
        var Tg = new Array(16);
        xg.exports = function () { for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()), Tg[t] = e >>> ((3 & t) << 3) & 255; return Tg; };
    }
    for (var Eg = [], Rg = 0; Rg < 256; ++Rg)
        Eg[Rg] = (Rg + 256).toString(16).substr(1);
    var Ig, Og, Cg = function (e, t) { var n = t || 0, r = Eg; return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join(""); }, Pg = xg.exports, Ag = Cg, jg = 0, Mg = 0;
    var Lg = function (e, t, n) { var r = t && n || 0, i = t || [], a = (e = e || {}).node || Ig, s = void 0 !== e.clockseq ? e.clockseq : Og; if (null == a || null == s) {
        var o = Pg();
        null == a && (a = Ig = [1 | o[0], o[1], o[2], o[3], o[4], o[5]]), null == s && (s = Og = 16383 & (o[6] << 8 | o[7]));
    } var u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(), c = void 0 !== e.nsecs ? e.nsecs : Mg + 1, l = u - jg + (c - Mg) / 1e4; if (l < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (l < 0 || u > jg) && void 0 === e.nsecs && (c = 0), c >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec"); jg = u, Mg = c, Og = s; var f = (1e4 * (268435455 & (u += 122192928e5)) + c) % 4294967296; i[r++] = f >>> 24 & 255, i[r++] = f >>> 16 & 255, i[r++] = f >>> 8 & 255, i[r++] = 255 & f; var d = u / 4294967296 * 1e4 & 268435455; i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = 255 & s; for (var p = 0; p < 6; ++p)
        i[r + p] = a[p]; return t || Ag(i); }, Ng = xg.exports, Ug = Cg;
    var Dg = Lg, Fg = function (e, t, n) { var r = t && n || 0; "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null); var i = (e = e || {}).random || (e.rng || Ng)(); if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
        for (var a = 0; a < 16; ++a)
            t[r + a] = i[a]; return t || Ug(i); }, Bg = Fg;
    Bg.v1 = Dg, Bg.v4 = Fg;
    var qg, zg, Wg, Gg = Bg, $g = { exports: {} }, Vg = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, Jg = Vg, Kg = o, Hg = i, Yg = S, Qg = ee, Xg = qa, Zg = Ve, eb = Je.exports, tb = Ne.f, nb = df, rb = Za, ib = pe, ab = re, sb = Hg.Int8Array, ob = sb && sb.prototype, ub = Hg.Uint8ClampedArray, cb = ub && ub.prototype, lb = sb && nb(sb), fb = ob && nb(ob), db = Object.prototype, pb = db.isPrototypeOf, hb = ib("toStringTag"), vb = ab("TYPED_ARRAY_TAG"), yb = ab("TYPED_ARRAY_CONSTRUCTOR"), mb = Jg && !!rb && "Opera" !== Xg(Hg.opera), gb = !1, bb = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, kb = { BigInt64Array: 8, BigUint64Array: 8 }, wb = function (e) { if (!Yg(e))
        return !1; var t = Xg(e); return Qg(bb, t) || Qg(kb, t); };
    for (qg in bb)
        (Wg = (zg = Hg[qg]) && zg.prototype) ? Zg(Wg, yb, zg) : mb = !1;
    for (qg in kb)
        (Wg = (zg = Hg[qg]) && zg.prototype) && Zg(Wg, yb, zg);
    if ((!mb || "function" != typeof lb || lb === Function.prototype) && (lb = function () { throw TypeError("Incorrect invocation"); }, mb))
        for (qg in bb)
            Hg[qg] && rb(Hg[qg], lb);
    if ((!mb || !fb || fb === db) && (fb = lb.prototype, mb))
        for (qg in bb)
            Hg[qg] && rb(Hg[qg].prototype, fb);
    if (mb && nb(cb) !== fb && rb(cb, fb), Kg && !Qg(fb, hb))
        for (qg in gb = !0, tb(fb, hb, { get: function () { return Yg(this) ? this[vb] : void 0; } }), bb)
            Hg[qg] && Zg(Hg[qg], vb, qg);
    var xb = { NATIVE_ARRAY_BUFFER_VIEWS: mb, TYPED_ARRAY_CONSTRUCTOR: yb, TYPED_ARRAY_TAG: gb && vb, aTypedArray: function (e) { if (wb(e))
            return e; throw TypeError("Target is not a typed array"); }, aTypedArrayConstructor: function (e) { if (rb && !pb.call(lb, e))
            throw TypeError("Target is not a typed array constructor"); return e; }, exportTypedArrayMethod: function (e, t, n) { if (Kg) {
            if (n)
                for (var r in bb) {
                    var i = Hg[r];
                    if (i && Qg(i.prototype, e))
                        try {
                            delete i.prototype[e];
                        }
                        catch (e) { }
                }
            fb[e] && !n || eb(fb, e, n ? t : mb && ob[e] || t);
        } }, exportTypedArrayStaticMethod: function (e, t, n) { var r, i; if (Kg) {
            if (rb) {
                if (n)
                    for (r in bb)
                        if ((i = Hg[r]) && Qg(i, e))
                            try {
                                delete i[e];
                            }
                            catch (e) { }
                if (lb[e] && !n)
                    return;
                try {
                    return eb(lb, e, n ? t : mb && lb[e] || t);
                }
                catch (e) { }
            }
            for (r in bb)
                !(i = Hg[r]) || i[e] && !n || eb(i, e, t);
        } }, isView: function (e) { if (!Yg(e))
            return !1; var t = Xg(e); return "DataView" === t || Qg(bb, t) || Qg(kb, t); }, isTypedArray: wb, TypedArray: lb, TypedArrayPrototype: fb }, _b = i, Sb = s, Tb = Us, Eb = xb.NATIVE_ARRAY_BUFFER_VIEWS, Rb = _b.ArrayBuffer, Ib = _b.Int8Array, Ob = !Eb || !Sb((function () { Ib(1); })) || !Sb((function () { new Ib(-1); })) || !Tb((function (e) { new Ib, new Ib(null), new Ib(1.5), new Ib(e); }), !0) || Sb((function () { return 1 !== new Ib(new Rb(2), 1, void 0).length; })), Cb = Mt, Pb = Ut, Ab = function (e) { if (void 0 === e)
        return 0; var t = Cb(e), n = Pb(t); if (t !== n)
        throw RangeError("Wrong length or index"); return n; }, jb = Math.abs, Mb = Math.pow, Lb = Math.floor, Nb = Math.log, Ub = Math.LN2, Db = Q, Fb = qt, Bb = Ut, qb = function (e) { for (var t = Db(this), n = Bb(t.length), r = arguments.length, i = Fb(r > 1 ? arguments[1] : void 0, n), a = r > 2 ? arguments[2] : void 0, s = void 0 === a ? n : Fb(a, n); s > i;)
        t[i++] = e; return t; }, zb = i, Wb = o, Gb = Vg, $b = Ve, Vb = Ha, Jb = s, Kb = as, Hb = Mt, Yb = Ut, Qb = Ab, Xb = { pack: function (e, t, n) { var r, i, a, s = new Array(n), o = 8 * n - t - 1, u = (1 << o) - 1, c = u >> 1, l = 23 === t ? Mb(2, -24) - Mb(2, -77) : 0, f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, d = 0; for ((e = jb(e)) != e || e === 1 / 0 ? (i = e != e ? 1 : 0, r = u) : (r = Lb(Nb(e) / Ub), e * (a = Mb(2, -r)) < 1 && (r--, a *= 2), (e += r + c >= 1 ? l / a : l * Mb(2, 1 - c)) * a >= 2 && (r++, a /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (e * a - 1) * Mb(2, t), r += c) : (i = e * Mb(2, c - 1) * Mb(2, t), r = 0)); t >= 8; s[d++] = 255 & i, i /= 256, t -= 8)
            ; for (r = r << t | i, o += t; o > 0; s[d++] = 255 & r, r /= 256, o -= 8)
            ; return s[--d] |= 128 * f, s; }, unpack: function (e, t) { var n, r = e.length, i = 8 * r - t - 1, a = (1 << i) - 1, s = a >> 1, o = i - 7, u = r - 1, c = e[u--], l = 127 & c; for (c >>= 7; o > 0; l = 256 * l + e[u], u--, o -= 8)
            ; for (n = l & (1 << -o) - 1, l >>= -o, o += t; o > 0; n = 256 * n + e[u], u--, o -= 8)
            ; if (0 === l)
            l = 1 - s;
        else {
            if (l === a)
                return n ? NaN : c ? -1 / 0 : 1 / 0;
            n += Mb(2, t), l -= s;
        } return (c ? -1 : 1) * n * Mb(2, l - t); } }, Zb = df, ek = Za, tk = Pt.f, nk = Ne.f, rk = qb, ik = Mr, ak = xt.get, sk = xt.set, ok = "ArrayBuffer", uk = "DataView", ck = "Wrong index", lk = zb.ArrayBuffer, fk = lk, dk = zb.DataView, pk = dk && dk.prototype, hk = Object.prototype, vk = zb.RangeError, yk = Xb.pack, mk = Xb.unpack, gk = function (e) { return [255 & e]; }, bk = function (e) { return [255 & e, e >> 8 & 255]; }, kk = function (e) { return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]; }, wk = function (e) { return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]; }, xk = function (e) { return yk(e, 23, 4); }, _k = function (e) { return yk(e, 52, 8); }, Sk = function (e, t) { nk(e.prototype, t, { get: function () { return ak(this)[t]; } }); }, Tk = function (e, t, n, r) { var i = Qb(n), a = ak(e); if (i + t > a.byteLength)
        throw vk(ck); var s = ak(a.buffer).bytes, o = i + a.byteOffset, u = s.slice(o, o + t); return r ? u : u.reverse(); }, Ek = function (e, t, n, r, i, a) { var s = Qb(n), o = ak(e); if (s + t > o.byteLength)
        throw vk(ck); for (var u = ak(o.buffer).bytes, c = s + o.byteOffset, l = r(+i), f = 0; f < t; f++)
        u[c + f] = l[a ? f : t - f - 1]; };
    if (Gb) {
        if (!Jb((function () { lk(1); })) || !Jb((function () { new lk(-1); })) || Jb((function () { return new lk, new lk(1.5), new lk(NaN), lk.name != ok; }))) {
            for (var Rk, Ik = (fk = function (e) { return Kb(this, fk), new lk(Qb(e)); }).prototype = lk.prototype, Ok = tk(lk), Ck = 0; Ok.length > Ck;)
                (Rk = Ok[Ck++]) in fk || $b(fk, Rk, lk[Rk]);
            Ik.constructor = fk;
        }
        ek && Zb(pk) !== hk && ek(pk, hk);
        var Pk = new dk(new fk(2)), Ak = pk.setInt8;
        Pk.setInt8(0, 2147483648), Pk.setInt8(1, 2147483649), !Pk.getInt8(0) && Pk.getInt8(1) || Vb(pk, { setInt8: function (e, t) { Ak.call(this, e, t << 24 >> 24); }, setUint8: function (e, t) { Ak.call(this, e, t << 24 >> 24); } }, { unsafe: !0 });
    }
    else
        fk = function (e) { Kb(this, fk, ok); var t = Qb(e); sk(this, { bytes: rk.call(new Array(t), 0), byteLength: t }), Wb || (this.byteLength = t); }, dk = function (e, t, n) { Kb(this, dk, uk), Kb(e, fk, uk); var r = ak(e).byteLength, i = Hb(t); if (i < 0 || i > r)
            throw vk("Wrong offset"); if (i + (n = void 0 === n ? r - i : Yb(n)) > r)
            throw vk("Wrong length"); sk(this, { buffer: e, byteLength: n, byteOffset: i }), Wb || (this.buffer = e, this.byteLength = n, this.byteOffset = i); }, Wb && (Sk(fk, "byteLength"), Sk(dk, "buffer"), Sk(dk, "byteLength"), Sk(dk, "byteOffset")), Vb(dk.prototype, { getInt8: function (e) { return Tk(this, 1, e)[0] << 24 >> 24; }, getUint8: function (e) { return Tk(this, 1, e)[0]; }, getInt16: function (e) { var t = Tk(this, 2, e, arguments.length > 1 ? arguments[1] : void 0); return (t[1] << 8 | t[0]) << 16 >> 16; }, getUint16: function (e) { var t = Tk(this, 2, e, arguments.length > 1 ? arguments[1] : void 0); return t[1] << 8 | t[0]; }, getInt32: function (e) { return wk(Tk(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)); }, getUint32: function (e) { return wk(Tk(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0; }, getFloat32: function (e) { return mk(Tk(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23); }, getFloat64: function (e) { return mk(Tk(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52); }, setInt8: function (e, t) { Ek(this, 1, e, gk, t); }, setUint8: function (e, t) { Ek(this, 1, e, gk, t); }, setInt16: function (e, t) { Ek(this, 2, e, bk, t, arguments.length > 2 ? arguments[2] : void 0); }, setUint16: function (e, t) { Ek(this, 2, e, bk, t, arguments.length > 2 ? arguments[2] : void 0); }, setInt32: function (e, t) { Ek(this, 4, e, kk, t, arguments.length > 2 ? arguments[2] : void 0); }, setUint32: function (e, t) { Ek(this, 4, e, kk, t, arguments.length > 2 ? arguments[2] : void 0); }, setFloat32: function (e, t) { Ek(this, 4, e, xk, t, arguments.length > 2 ? arguments[2] : void 0); }, setFloat64: function (e, t) { Ek(this, 8, e, _k, t, arguments.length > 2 ? arguments[2] : void 0); } });
    ik(fk, ok), ik(dk, uk);
    var jk = { ArrayBuffer: fk, DataView: dk }, Mk = Mt, Lk = function (e) { var t = Mk(e); if (t < 0)
        throw RangeError("The argument can't be less than 0"); return t; }, Nk = function (e, t) { var n = Lk(e); if (n % t)
        throw RangeError("Wrong offset"); return n; }, Uk = Q, Dk = Ut, Fk = ms, Bk = hs, qk = ls, zk = Nr, Wk = xb.aTypedArrayConstructor, Gk = In, $k = i, Vk = o, Jk = Ob, Kk = xb, Hk = jk, Yk = as, Qk = h, Xk = Ve, Zk = Bh, ew = Ut, tw = Ab, nw = Nk, rw = we, iw = ee, aw = qa, sw = S, ow = q, uw = Hn, cw = Za, lw = Pt.f, fw = function (e) { var t, n, r, i, a, s, o = Uk(e), u = arguments.length, c = u > 1 ? arguments[1] : void 0, l = void 0 !== c, f = Bk(o); if (null != f && !qk(f))
        for (s = (a = Fk(o, f)).next, o = []; !(i = s.call(a)).done;)
            o.push(i.value); for (l && u > 2 && (c = zk(c, arguments[2], 2)), n = Dk(o.length), r = new (Wk(this))(n), t = 0; n > t; t++)
        r[t] = l ? c(o[t], t) : o[t]; return r; }, dw = Hr.forEach, pw = is, hw = Ne, vw = a, yw = fc, mw = xt.get, gw = xt.set, bw = hw.f, kw = vw.f, ww = Math.round, xw = $k.RangeError, _w = Hk.ArrayBuffer, Sw = Hk.DataView, Tw = Kk.NATIVE_ARRAY_BUFFER_VIEWS, Ew = Kk.TYPED_ARRAY_CONSTRUCTOR, Rw = Kk.TYPED_ARRAY_TAG, Iw = Kk.TypedArray, Ow = Kk.TypedArrayPrototype, Cw = Kk.aTypedArrayConstructor, Pw = Kk.isTypedArray, Aw = "BYTES_PER_ELEMENT", jw = "Wrong length", Mw = function (e, t) { for (var n = 0, r = t.length, i = new (Cw(e))(r); r > n;)
        i[n] = t[n++]; return i; }, Lw = function (e, t) { bw(e, t, { get: function () { return mw(this)[t]; } }); }, Nw = function (e) { var t; return e instanceof _w || "ArrayBuffer" == (t = aw(e)) || "SharedArrayBuffer" == t; }, Uw = function (e, t) { return Pw(e) && !ow(t) && t in e && Zk(+t) && t >= 0; }, Dw = function (e, t) { return t = rw(t), Uw(e, t) ? Qk(2, e[t]) : kw(e, t); }, Fw = function (e, t, n) { return t = rw(t), !(Uw(e, t) && sw(n) && iw(n, "value")) || iw(n, "get") || iw(n, "set") || n.configurable || iw(n, "writable") && !n.writable || iw(n, "enumerable") && !n.enumerable ? bw(e, t, n) : (e[t] = n.value, e); };
    Vk ? (Tw || (vw.f = Dw, hw.f = Fw, Lw(Ow, "buffer"), Lw(Ow, "byteOffset"), Lw(Ow, "byteLength"), Lw(Ow, "length")), Gk({ target: "Object", stat: !0, forced: !Tw }, { getOwnPropertyDescriptor: Dw, defineProperty: Fw }), $g.exports = function (e, t, n) { var r = e.match(/\d+$/)[0] / 8, i = e + (n ? "Clamped" : "") + "Array", a = "get" + e, s = "set" + e, o = $k[i], u = o, c = u && u.prototype, l = {}, f = function (e, t) { bw(e, t, { get: function () { return function (e, t) { var n = mw(e); return n.view[a](t * r + n.byteOffset, !0); }(this, t); }, set: function (e) { return function (e, t, i) { var a = mw(e); n && (i = (i = ww(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), a.view[s](t * r + a.byteOffset, i, !0); }(this, t, e); }, enumerable: !0 }); }; Tw ? Jk && (u = t((function (e, t, n, a) { return Yk(e, u, i), yw(sw(t) ? Nw(t) ? void 0 !== a ? new o(t, nw(n, r), a) : void 0 !== n ? new o(t, nw(n, r)) : new o(t) : Pw(t) ? Mw(u, t) : fw.call(u, t) : new o(tw(t)), e, u); })), cw && cw(u, Iw), dw(lw(o), (function (e) { e in u || Xk(u, e, o[e]); })), u.prototype = c) : (u = t((function (e, t, n, a) { Yk(e, u, i); var s, o, c, l = 0, d = 0; if (sw(t)) {
        if (!Nw(t))
            return Pw(t) ? Mw(u, t) : fw.call(u, t);
        s = t, d = nw(n, r);
        var p = t.byteLength;
        if (void 0 === a) {
            if (p % r)
                throw xw(jw);
            if ((o = p - d) < 0)
                throw xw(jw);
        }
        else if ((o = ew(a) * r) + d > p)
            throw xw(jw);
        c = o / r;
    }
    else
        c = tw(t), s = new _w(o = c * r); for (gw(e, { buffer: s, byteOffset: d, byteLength: o, length: c, view: new Sw(s) }); l < c;)
        f(e, l++); })), cw && cw(u, Iw), c = u.prototype = uw(Ow)), c.constructor !== u && Xk(c, "constructor", u), Xk(c, Ew, u), Rw && Xk(c, Rw, i), l[i] = u, Gk({ global: !0, forced: u != o, sham: !Tw }, l), Aw in u || Xk(u, Aw, r), Aw in c || Xk(c, Aw, r), pw(i); }) : $g.exports = function () { }, (0, $g.exports)("Uint8", (function (e) { return function (t, n, r) { return e(this, t, n, r); }; }));
    var Bw = Q, qw = qt, zw = Ut, Ww = Math.min, Gw = [].copyWithin || function (e, t) { var n = Bw(this), r = zw(n.length), i = qw(e, r), a = qw(t, r), s = arguments.length > 2 ? arguments[2] : void 0, o = Ww((void 0 === s ? r : qw(s, r)) - a, r - i), u = 1; for (a < i && i < a + o && (u = -1, a += o - 1, i += o - 1); o-- > 0;)
        a in n ? n[i] = n[a] : delete n[i], i += u, a += u; return n; }, $w = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("copyWithin", (function (e, t) { return Gw.call($w(this), e, t, arguments.length > 2 ? arguments[2] : void 0); }));
    var Vw = Hr.every, Jw = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("every", (function (e) { return Vw(Jw(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var Kw = qb, Hw = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("fill", (function (e) { return Kw.apply(Hw(this), arguments); }));
    var Yw = qs, Qw = xb.TYPED_ARRAY_CONSTRUCTOR, Xw = xb.aTypedArrayConstructor, Zw = function (e) { return Xw(Yw(e, e[Qw])); }, ex = function (e, t) { for (var n = 0, r = t.length, i = new e(r); r > n;)
        i[n] = t[n++]; return i; }, tx = Zw, nx = Hr.filter, rx = function (e, t) { return ex(tx(e), t); }, ix = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("filter", (function (e) { var t = nx(ix(this), e, arguments.length > 1 ? arguments[1] : void 0); return rx(this, t); }));
    var ax = Hr.find, sx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("find", (function (e) { return ax(sx(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var ox = Hr.findIndex, ux = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("findIndex", (function (e) { return ox(ux(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var cx = Hr.forEach, lx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("forEach", (function (e) { cx(lx(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var fx = Vt.includes, dx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("includes", (function (e) { return fx(dx(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var px = Vt.indexOf, hx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("indexOf", (function (e) { return px(hx(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var vx = i, yx = xb, mx = Od, gx = pe("iterator"), bx = vx.Uint8Array, kx = mx.values, wx = mx.keys, xx = mx.entries, _x = yx.aTypedArray, Sx = yx.exportTypedArrayMethod, Tx = bx && bx.prototype[gx], Ex = !!Tx && ("values" == Tx.name || null == Tx.name), Rx = function () { return kx.call(_x(this)); };
    Sx("entries", (function () { return xx.call(_x(this)); })), Sx("keys", (function () { return wx.call(_x(this)); })), Sx("values", Rx, !Ex), Sx(gx, Rx, !Ex);
    var Ix = xb.aTypedArray, Ox = [].join;
    (0, xb.exportTypedArrayMethod)("join", (function (e) { return Ox.apply(Ix(this), arguments); }));
    var Cx = _, Px = Mt, Ax = Ut, jx = ec, Mx = Math.min, Lx = [].lastIndexOf, Nx = !!Lx && 1 / [1].lastIndexOf(1, -0) < 0, Ux = jx("lastIndexOf"), Dx = Nx || !Ux ? function (e) { if (Nx)
        return Lx.apply(this, arguments) || 0; var t = Cx(this), n = Ax(t.length), r = n - 1; for (arguments.length > 1 && (r = Mx(r, Px(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
        if (r in t && t[r] === e)
            return r || 0; return -1; } : Lx, Fx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("lastIndexOf", (function (e) { return Dx.apply(Fx(this), arguments); }));
    var Bx = Hr.map, qx = Zw, zx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("map", (function (e) { return Bx(zx(this), e, arguments.length > 1 ? arguments[1] : void 0, (function (e, t) { return new (qx(e))(t); })); }));
    var Wx = On, Gx = Q, $x = b, Vx = Ut, Jx = function (e) { return function (t, n, r, i) { Wx(n); var a = Gx(t), s = $x(a), o = Vx(a.length), u = e ? o - 1 : 0, c = e ? -1 : 1; if (r < 2)
        for (;;) {
            if (u in s) {
                i = s[u], u += c;
                break;
            }
            if (u += c, e ? u < 0 : o <= u)
                throw TypeError("Reduce of empty array with no initial value");
        } for (; e ? u >= 0 : o > u; u += c)
        u in s && (i = n(i, s[u], u, a)); return i; }; }, Kx = { left: Jx(!1), right: Jx(!0) }, Hx = Kx.left, Yx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("reduce", (function (e) { return Hx(Yx(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0); }));
    var Qx = Kx.right, Xx = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("reduceRight", (function (e) { return Qx(Xx(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0); }));
    var Zx = xb.aTypedArray, e_ = xb.exportTypedArrayMethod, t_ = Math.floor;
    e_("reverse", (function () { for (var e, t = this, n = Zx(t).length, r = t_(n / 2), i = 0; i < r;)
        e = t[i], t[i++] = t[--n], t[n] = e; return t; }));
    var n_ = Ut, r_ = Nk, i_ = Q, a_ = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("set", (function (e) { a_(this); var t = r_(arguments.length > 1 ? arguments[1] : void 0, 1), n = this.length, r = i_(e), i = n_(r.length), a = 0; if (i + t > n)
        throw RangeError("Wrong length"); for (; a < i;)
        this[t + a] = r[a++]; }), s((function () { new Int8Array(1).set({}); })));
    var s_ = Zw, o_ = xb.aTypedArray, u_ = [].slice;
    (0, xb.exportTypedArrayMethod)("slice", (function (e, t) { for (var n = u_.call(o_(this), e, t), r = s_(this), i = 0, a = n.length, s = new r(a); a > i;)
        s[i] = n[i++]; return s; }), s((function () { new Int8Array(1).slice(); })));
    var c_ = Hr.some, l_ = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("some", (function (e) { return c_(l_(this), e, arguments.length > 1 ? arguments[1] : void 0); }));
    var f_ = Math.floor, d_ = function (e, t) { var n = e.length, r = f_(n / 2); return n < 8 ? p_(e, t) : h_(d_(e.slice(0, r), t), d_(e.slice(r), t), t); }, p_ = function (e, t) { for (var n, r, i = e.length, a = 1; a < i;) {
        for (r = a, n = e[a]; r && t(e[r - 1], n) > 0;)
            e[r] = e[--r];
        r !== a++ && (e[r] = n);
    } return e; }, h_ = function (e, t, n) { for (var r = e.length, i = t.length, a = 0, s = 0, o = []; a < r || s < i;)
        a < r && s < i ? o.push(n(e[a], t[s]) <= 0 ? e[a++] : t[s++]) : o.push(a < r ? e[a++] : t[s++]); return o; }, v_ = d_, y_ = I.match(/firefox\/(\d+)/i), m_ = !!y_ && +y_[1], g_ = /MSIE|Trident/.test(I), b_ = I.match(/AppleWebKit\/(\d+)\./), k_ = !!b_ && +b_[1], w_ = s, x_ = On, __ = Ut, S_ = v_, T_ = m_, E_ = g_, R_ = L, I_ = k_, O_ = xb.aTypedArray, C_ = xb.exportTypedArrayMethod, P_ = i.Uint16Array, A_ = P_ && P_.prototype.sort, j_ = !!A_ && !w_((function () { var e = new P_(2); e.sort(null), e.sort({}); })), M_ = !!A_ && !w_((function () { if (R_)
        return R_ < 74; if (T_)
        return T_ < 67; if (E_)
        return !0; if (I_)
        return I_ < 602; var e, t, n = new P_(516), r = Array(516); for (e = 0; e < 516; e++)
        t = e % 4, n[e] = 515 - e, r[e] = e - 2 * t + 3; for (n.sort((function (e, t) { return (e / 4 | 0) - (t / 4 | 0); })), e = 0; e < 516; e++)
        if (n[e] !== r[e])
            return !0; }));
    C_("sort", (function (e) { var t = this; if (void 0 !== e && x_(e), M_)
        return A_.call(t, e); O_(t); var n, r = __(t.length), i = Array(r); for (n = 0; n < r; n++)
        i[n] = t[n]; for (i = S_(t, function (e) { return function (t, n) { return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n; }; }(e)), n = 0; n < r; n++)
        t[n] = i[n]; return t; }), !M_ || j_);
    var L_ = Ut, N_ = qt, U_ = Zw, D_ = xb.aTypedArray;
    (0, xb.exportTypedArrayMethod)("subarray", (function (e, t) { var n = D_(this), r = n.length, i = N_(e, r); return new (U_(n))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, L_((void 0 === t ? r : N_(t, r)) - i)); }));
    var F_ = xb, B_ = s, q_ = i.Int8Array, z_ = F_.aTypedArray, W_ = F_.exportTypedArrayMethod, G_ = [].toLocaleString, $_ = [].slice, V_ = !!q_ && B_((function () { G_.call(new q_(1)); }));
    W_("toLocaleString", (function () { return G_.apply(V_ ? $_.call(z_(this)) : z_(this), arguments); }), B_((function () { return [1, 2].toLocaleString() != new q_([1, 2]).toLocaleString(); })) || !B_((function () { q_.prototype.toLocaleString.call([1, 2]); })));
    var J_ = xb.exportTypedArrayMethod, K_ = s, H_ = i.Uint8Array, Y_ = H_ && H_.prototype || {}, Q_ = [].toString, X_ = [].join;
    K_((function () { Q_.call({}); })) && (Q_ = function () { return X_.call(this); });
    var Z_ = Y_.toString != Q_;
    J_("toString", Q_, Z_);
    var eS = S, tS = y, nS = pe("match"), rS = function (e) { var t; return eS(e) && (void 0 !== (t = e[nS]) ? !!t : "RegExp" == tS(e)); }, iS = xp, aS = rS, sS = De, oS = k, uS = qs, cS = Sp, lS = Ut, fS = gr, dS = Ap, pS = hp, hS = s, vS = Wd.UNSUPPORTED_Y, yS = [].push, mS = Math.min, gS = 4294967295;
    iS("split", (function (e, t, n) { var r; return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) { var r = fS(oS(this)), i = void 0 === n ? gS : n >>> 0; if (0 === i)
        return []; if (void 0 === e)
        return [r]; if (!aS(e))
        return t.call(r, e, i); for (var a, s, o, u = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, f = new RegExp(e.source, c + "g"); (a = pS.call(f, r)) && !((s = f.lastIndex) > l && (u.push(r.slice(l, a.index)), a.length > 1 && a.index < r.length && yS.apply(u, a.slice(1)), o = a[0].length, l = s, u.length >= i));)
        f.lastIndex === a.index && f.lastIndex++; return l === r.length ? !o && f.test("") || u.push("") : u.push(r.slice(l)), u.length > i ? u.slice(0, i) : u; } : "0".split(void 0, 0).length ? function (e, n) { return void 0 === e && 0 === n ? [] : t.call(this, e, n); } : t, [function (t, n) { var i = oS(this), a = null == t ? void 0 : t[e]; return void 0 !== a ? a.call(t, i, n) : r.call(fS(i), t, n); }, function (e, i) { var a = sS(this), s = fS(e), o = n(r, a, s, i, r !== t); if (o.done)
            return o.value; var u = uS(a, RegExp), c = a.unicode, l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (vS ? "g" : "y"), f = new u(vS ? "^(?:" + a.source + ")" : a, l), d = void 0 === i ? gS : i >>> 0; if (0 === d)
            return []; if (0 === s.length)
            return null === dS(f, s) ? [s] : []; for (var p = 0, h = 0, v = []; h < s.length;) {
            f.lastIndex = vS ? 0 : h;
            var y, m = dS(f, vS ? s.slice(h) : s);
            if (null === m || (y = mS(lS(f.lastIndex + (vS ? h : 0)), s.length)) === p)
                h = cS(s, h, c);
            else {
                if (v.push(s.slice(p, h)), v.length === d)
                    return v;
                for (var g = 1; g <= m.length - 1; g++)
                    if (v.push(m[g]), v.length === d)
                        return v;
                h = p = y;
            }
        } return v.push(s.slice(p)), v; }]; }), !!hS((function () { var e = /(?:)/, t = e.exec; e.exec = function () { return t.apply(this, arguments); }; var n = "ab".split(e); return 2 !== n.length || "a" !== n[0] || "b" !== n[1]; })), vS);
    var bS = { exports: {} }, kS = { exports: {} };
    !function (e) { e.exports = function (e) { return -1 !== Function.toString.call(e).indexOf("[native code]"); }, e.exports.default = e.exports, e.exports.__esModule = !0; }(kS);
    var wS = { exports: {} }, xS = { exports: {} };
    !function (e) { e.exports = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }, e.exports.default = e.exports, e.exports.__esModule = !0; }(xS), function (e) { var t = av.exports, n = xS.exports; function r(i, a, s) { return n() ? (e.exports = r = Reflect.construct, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function (e, n, r) { var i = [null]; i.push.apply(i, n); var a = new (Function.bind.apply(e, i)); return r && t(a, r.prototype), a; }, e.exports.default = e.exports, e.exports.__esModule = !0), r.apply(null, arguments); } e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0; }(wS), function (e) { var t = uv.exports, n = av.exports, r = kS.exports, i = wS.exports; function a(s) { var o = "function" == typeof Map ? new Map : void 0; return e.exports = a = function (e) { if (null === e || !r(e))
        return e; if ("function" != typeof e)
        throw new TypeError("Super expression must either be null or a function"); if (void 0 !== o) {
        if (o.has(e))
            return o.get(e);
        o.set(e, a);
    } function a() { return i(e, arguments, t(this).constructor); } return a.prototype = Object.create(e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), n(a, e); }, e.exports.default = e.exports, e.exports.__esModule = !0, a(s); } e.exports = a, e.exports.default = e.exports, e.exports.__esModule = !0; }(bS);
    var _S = { exports: {} };
    !function (e, n) { (function () { var r = { function: !0, object: !0 }["undefined" == typeof window ? "undefined" : Ca(window)] && window || this, i = n, a = e && !e.nodeType && e, s = i && a && "object" == Ca(t) && t; !s || s.global !== s && s.window !== s && s.self !== s || (r = s); var o = Math.pow(2, 53) - 1, u = /\bOpera/, c = Object.prototype, l = c.hasOwnProperty, f = c.toString; function d(e) { return (e = String(e)).charAt(0).toUpperCase() + e.slice(1); } function p(e) { return e = g(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : d(e); } function h(e, t) { for (var n in e)
        l.call(e, n) && t(e[n], n, e); } function v(e) { return null == e ? d(e) : f.call(e).slice(8, -1); } function y(e) { return String(e).replace(/([ -])(?!$)/g, "$1?"); } function m(e, t) { var n = null; return function (e, t) { var n = -1, r = e ? e.length : 0; if ("number" == typeof r && r > -1 && r <= o)
        for (; ++n < r;)
            t(e[n], n, e);
    else
        h(e, t); }(e, (function (r, i) { n = t(n, r, i, e); })), n; } function g(e) { return String(e).replace(/^ +| +$/g, ""); } var b = function e(t) { var n = r, i = t && "object" == Ca(t) && "String" != v(t); i && (n = t, t = null); var a = n.navigator || {}, s = a.userAgent || ""; t || (t = s); var o, c, l = i ? !!a.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()), d = "Object", b = i ? d : "ScriptBridgingProxyObject", k = i ? d : "Environment", w = i && n.java ? "JavaPackage" : v(n.java), x = i ? d : "RuntimeObject", _ = /\bJava/.test(w) && n.java, S = _ && v(n.environment) == k, T = _ ? "a" : "Î±", E = _ ? "b" : "Î²", R = n.document || {}, I = n.operamini || n.opera, O = u.test(O = i && I ? I["[[Class]]"] : v(I)) ? O : I = null, C = t, P = [], A = null, j = t == s, M = j && I && "function" == typeof I.version && I.version(), L = m([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function (e, n) { return e || RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(t) && (n.label || n); })), N = function (e) { return m(e, (function (e, n) { return e || RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(t) && (n.label || n); })); }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", { label: "Yandex Browser", pattern: "YaBrowser" }, { label: "UC Browser", pattern: "UCBrowser" }, "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chromium", "Chrome", { label: "Chrome", pattern: "(?:HeadlessChrome)" }, { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"]), U = B([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]), D = function (e) { return m(e, (function (e, n, r) { return e || (n[U] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] || RegExp("\\b" + y(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r; })); }({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Alcatel: {}, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, Huawei: {}, Lenovo: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Oppo: {}, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 }, Xiaomi: { Mi: 1, Redmi: 1 } }), F = function (e) { return m(e, (function (e, n) { var r = n.pattern || y(n); return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function (e, t, n) { var r = { "10.0": "10", 6.4: "10 Technical Preview", 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" }; return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), p(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]); }(e, r, n.label || n)), e; })); }(["Windows Phone", "KaiOS", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", { label: "DragonFly BSD", pattern: "DragonFly" }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]); function B(e) { return m(e, (function (e, n) { var r = n.pattern || y(n); return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = p(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e; })); } function q(e) { return m(e, (function (e, n) { return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null; })); } if (L && (L = [L]), /\bAndroid\b/.test(F) && !U && (o = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (U = g(o[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), D && !U ? U = B([D]) : D && U && (U = U.replace(RegExp("^(" + y(D) + ")[-_.\\s]", "i"), D + " ").replace(RegExp("^(" + y(D) + ")[-_.]?(\\w)", "i"), D + " $2")), (o = /\bGoogle TV\b/.exec(U)) && (U = o[0]), /\bSimulator\b/i.test(t) && (U = (U ? U + " " : "") + "Simulator"), "Opera Mini" == N && /\bOPiOS\b/.test(t) && P.push("running in Turbo/Uncompressed mode"), "IE" == N && /\blike iPhone OS\b/.test(t) ? (D = (o = e(t.replace(/like iPhone OS/, ""))).manufacturer, U = o.product) : /^iP/.test(U) ? (N || (N = "Safari"), F = "iOS" + ((o = / OS ([\d_]+)/i.exec(t)) ? " " + o[1].replace(/_/g, ".") : "")) : "Konqueror" == N && /^Linux\b/i.test(F) ? F = "Kubuntu" : D && "Google" != D && (/Chrome/.test(N) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(U)) || /\bAndroid\b/.test(F) && /^Chrome/.test(N) && /\bVersion\//i.test(t) ? (N = "Android Browser", F = /\bAndroid\b/.test(F) ? F : "Android") : "Silk" == N ? (/\bMobi/i.test(t) || (F = "Android", P.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && P.unshift("accelerated")) : "UC Browser" == N && /\bUCWEB\b/.test(t) ? P.push("speed mode") : "PaleMoon" == N && (o = /\bFirefox\/([\d.]+)\b/.exec(t)) ? P.push("identifying as Firefox " + o[1]) : "Firefox" == N && (o = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (F || (F = "Firefox OS"), U || (U = o[1])) : !N || (o = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(N)) ? (N && !U && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(o + "/") + 8)) && (N = null), (o = U || D || F) && (U || D || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (N = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : o) + " Browser")) : "Electron" == N && (o = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && P.push("Chromium " + o), M || (M = q(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", y(N), "(?:Firefox|Minefield|NetFront)"])), (o = ("iCab" == L && parseFloat(M) > 3 ? "WebKit" : /\bOpera\b/.test(N) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit" || !L && /\bMSIE\b/i.test(t) && ("Mac OS" == F ? "Tasman" : "Trident") || "WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(N) && "NetFront") && (L = [o]), "IE" == N && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (N += " Mobile", F = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x"), P.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (N = "IE Mobile", F = "Windows Phone 8.x", P.unshift("desktop mode"), M || (M = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != N && "Trident" == L && (o = /\brv:([\d.]+)/.exec(t)) && (N && P.push("identifying as " + N + (M ? " " + M : "")), N = "IE", M = o[1]), j) {
        if (function (e, t) { var n = null != e ? Ca(e[t]) : "number"; return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t]); }(n, "global"))
            if (_ && (C = (o = _.lang.System).getProperty("os.arch"), F = F || o.getProperty("os.name") + " " + o.getProperty("os.version")), S) {
                try {
                    M = n.require("ringo/engine").version.join("."), N = "RingoJS";
                }
                catch (e) {
                    (o = n.system) && o.global.system == n.system && (N = "Narwhal", F || (F = o[0].os || null));
                }
                N || (N = "Rhino");
            }
            else
                "object" == Ca(n.process) && !n.process.browser && (o = n.process) && ("object" == Ca(o.versions) && ("string" == typeof o.versions.electron ? (P.push("Node " + o.versions.node), N = "Electron", M = o.versions.electron) : "string" == typeof o.versions.nw && (P.push("Chromium " + M, "Node " + o.versions.node), N = "NW.js", M = o.versions.nw)), N || (N = "Node.js", C = o.arch, F = o.platform, M = (M = /[\d.]+/.exec(o.version)) ? M[0] : null));
        else
            v(o = n.runtime) == b ? (N = "Adobe AIR", F = o.flash.system.Capabilities.os) : v(o = n.phantom) == x ? (N = "PhantomJS", M = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch) : "number" == typeof R.documentMode && (o = /\bTrident\/(\d+)/i.exec(t)) ? (M = [M, R.documentMode], (o = +o[1] + 4) != M[1] && (P.push("IE " + M[1] + " mode"), L && (L[1] = ""), M[1] = o), M = "IE" == N ? String(M[1].toFixed(1)) : M[0]) : "number" == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(N) && (P.push("masking as " + N + " " + M), N = "IE", M = "11.0", L = ["Trident"], F = "Windows");
        F = F && p(F);
    } if (M && (o = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(M) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (j && a.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (A = /b/i.test(o) ? "beta" : "alpha", M = M.replace(RegExp(o + "\\+?$"), "") + ("beta" == A ? E : T) + (/\d+\+?/.exec(o) || "")), "Fennec" == N || "Firefox" == N && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F))
        N = "Firefox Mobile";
    else if ("Maxthon" == N && M)
        M = M.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(U))
        "Xbox 360" == U && (F = null), "Xbox 360" == U && /\bIEMobile\b/.test(t) && P.unshift("mobile mode");
    else if (!/^(?:Chrome|IE|Opera)$/.test(N) && (!N || U || /Browser|Mobi/.test(N)) || "Windows CE" != F && !/Mobi/i.test(t))
        if ("IE" == N && j)
            try {
                null === n.external && P.unshift("platform preview");
            }
            catch (e) {
                P.unshift("embedded");
            }
        else
            (/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(t)) && (o = (RegExp(U.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || M) ? (F = ((o = [o, /BB10/.test(t)])[1] ? (U = null, D = "BlackBerry") : "Device Software") + " " + o[0], M = null) : this != h && "Wii" != U && (j && I || /Opera/.test(N) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == N && /\bOS X (?:\d+\.){2,}/.test(F) || "IE" == N && (F && !/^Win/.test(F) && M > 5.5 || /\bWindows XP\b/.test(F) && M > 8 || 8 == M && !/\bTrident\b/.test(t))) && !u.test(o = e.call(h, t.replace(u, "") + ";")) && o.name && (o = "ing as " + o.name + ((o = o.version) ? " " + o : ""), u.test(N) ? (/\bIE\b/.test(o) && "Mac OS" == F && (F = null), o = "identify" + o) : (o = "mask" + o, N = O ? p(O.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(o) && (F = null), j || (M = null)), L = ["Presto"], P.push(o));
    else
        N += " Mobile"; (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o], "Safari" == N && "+" == o[1].slice(-1) ? (N = "WebKit Nightly", A = "alpha", M = o[1].slice(0, -1)) : M != o[1] && M != (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (M = null), o[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == L && (L = ["Blink"]), j && (l || o[1]) ? (L && (L[1] = "like Chrome"), o = o[1] || ((o = o[0]) < 530 ? 1 : o < 532 ? 2 : o < 532.05 ? 3 : o < 533 ? 4 : o < 534.03 ? 5 : o < 534.07 ? 6 : o < 534.1 ? 7 : o < 534.13 ? 8 : o < 534.16 ? 9 : o < 534.24 ? 10 : o < 534.3 ? 11 : o < 535.01 ? 12 : o < 535.02 ? "13+" : o < 535.07 ? 15 : o < 535.11 ? 16 : o < 535.19 ? 17 : o < 536.05 ? 18 : o < 536.1 ? 19 : o < 537.01 ? 20 : o < 537.11 ? "21+" : o < 537.13 ? 23 : o < 537.18 ? 24 : o < 537.24 ? 25 : o < 537.36 ? 26 : "Blink" != L ? "27" : "28")) : (L && (L[1] = "like Safari"), o = (o = o[0]) < 400 ? 1 : o < 500 ? 2 : o < 526 ? 3 : o < 533 ? 4 : o < 534 ? "4+" : o < 535 ? 5 : o < 537 ? 6 : o < 538 ? 7 : o < 601 ? 8 : o < 602 ? 9 : o < 604 ? 10 : o < 606 ? 11 : o < 608 ? 12 : "12"), L && (L[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")), "Safari" == N && (!M || parseInt(M) > 45) ? M = o : "Chrome" == N && /\bHeadlessChrome/i.test(t) && P.unshift("headless")), "Opera" == N && (o = /\bzbov|zvav$/.exec(F)) ? (N += " ", P.unshift("desktop mode"), "zvav" == o ? (N += "Mini", M = null) : N += "Mobile", F = F.replace(RegExp(" *" + o + "$"), "")) : "Safari" == N && /\bChrome\b/.exec(L && L[1]) ? (P.unshift("desktop mode"), N = "Chrome Mobile", M = null, /\bOS X\b/.test(F) ? (D = "Apple", F = "iOS 4.3+") : F = null) : /\bSRWare Iron\b/.test(N) && !M && (M = q("Chrome")), M && 0 == M.indexOf(o = /[\d.]+$/.exec(F)) && t.indexOf("/" + o + "-") > -1 && (F = g(F.replace(o, ""))), F && -1 != F.indexOf(N) && !RegExp(N + " OS").test(F) && (F = F.replace(RegExp(" *" + y(N) + " *"), "")), L && !/\b(?:Avant|Nook)\b/.test(N) && (/Browser|Lunascape|Maxthon/.test(N) || "Safari" != N && /^iOS/.test(F) && /\bSafari\b/.test(L[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(N) && L[1]) && (o = L[L.length - 1]) && P.push(o), P.length && (P = ["(" + P.join("; ") + ")"]), D && U && U.indexOf(D) < 0 && P.push("on " + D), U && P.push((/^on /.test(P[P.length - 1]) ? "" : "on ") + U), F && (o = / ([\d.+]+)$/.exec(F), c = o && "/" == F.charAt(F.length - o[0].length - 1), F = { architecture: 32, family: o && !c ? F.replace(o[0], "") : F, version: o ? o[1] : null, toString: function () { var e = this.version; return this.family + (e && !c ? " " + e : "") + (64 == this.architecture ? " 64-bit" : ""); } }), (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(C)) && !/\bi686\b/i.test(C) ? (F && (F.architecture = 64, F.family = F.family.replace(RegExp(" *" + o), "")), N && (/\bWOW64\b/i.test(t) || j && /\w(?:86|32)$/.test(a.cpuClass || a.platform) && !/\bWin64; x64\b/i.test(t)) && P.unshift("32-bit")) : F && /^OS X/.test(F.family) && "Chrome" == N && parseFloat(M) >= 39 && (F.architecture = 64), t || (t = null); var z = {}; return z.description = t, z.layout = L && L[0], z.manufacturer = D, z.name = N, z.prerelease = A, z.product = U, z.ua = t, z.version = N && M, z.os = F || { architecture: null, family: null, version: null, toString: function () { return "null"; } }, z.parse = e, z.toString = function () { return this.description || ""; }, z.version && P.unshift(M), z.name && P.unshift(N), F && N && (F != String(F).split(" ")[0] || F != N.split(" ")[0] && !U) && P.push(U ? "(" + F + ")" : "on " + F), P.length && (z.description = P.join(" ")), z; }(); i && a ? h(b, (function (e, t) { i[t] = e; })) : r.platform = b; }).call(t); }(_S, _S.exports);
    var SS = De, TS = Ut, ES = gr, RS = k, IS = Sp, OS = Ap;
    xp("match", (function (e, t, n) { return [function (t) { var n = RS(this), r = null == t ? void 0 : t[e]; return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](ES(n)); }, function (e) { var r = SS(this), i = ES(e), a = n(t, r, i); if (a.done)
            return a.value; if (!r.global)
            return OS(r, i); var s = r.unicode; r.lastIndex = 0; for (var o, u = [], c = 0; null !== (o = OS(r, i));) {
            var l = ES(o[0]);
            u[c] = l, "" === l && (r.lastIndex = IS(i, TS(r.lastIndex), s)), c++;
        } return 0 === c ? null : u; }]; }));
    var CS = Object.is || function (e, t) { return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t; }, PS = De, AS = k, jS = CS, MS = gr, LS = Ap;
    xp("search", (function (e, t, n) { return [function (t) { var n = AS(this), r = null == t ? void 0 : t[e]; return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](MS(n)); }, function (e) { var r = PS(this), i = MS(e), a = n(t, r, i); if (a.done)
            return a.value; var s = r.lastIndex; jS(s, 0) || (r.lastIndex = 0); var o = LS(r, i); return jS(r.lastIndex, s) || (r.lastIndex = s), null === o ? -1 : o.index; }]; }));
    var NS = In, US = qt, DS = Mt, FS = Ut, BS = Q, qS = qr, zS = ga, WS = oa("splice"), GS = Math.max, $S = Math.min, VS = 9007199254740991, JS = "Maximum allowed length exceeded";
    NS({ target: "Array", proto: !0, forced: !WS }, { splice: function (e, t) { var n, r, i, a, s, o, u = BS(this), c = FS(u.length), l = US(e, c), f = arguments.length; if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = c - l) : (n = f - 2, r = $S(GS(DS(t), 0), c - l)), c + n - r > VS)
            throw TypeError(JS); for (i = qS(u, r), a = 0; a < r; a++)
            (s = l + a) in u && zS(i, a, u[s]); if (i.length = r, n < r) {
            for (a = l; a < c - r; a++)
                o = a + n, (s = a + r) in u ? u[o] = u[s] : delete u[o];
            for (a = c; a > c - r + n; a--)
                delete u[a - 1];
        }
        else if (n > r)
            for (a = c - r; a > l; a--)
                o = a + n - 1, (s = a + r - 1) in u ? u[o] = u[s] : delete u[o]; for (a = 0; a < n; a++)
            u[a + l] = arguments[a + 2]; return u.length = c - r + n, i; } }), function (e) { var t = void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}; Object.defineProperty(e, "__esModule", { value: !0 }); var n = og.exports, r = km.exports, i = ov.exports, a = ug.exports, s = iv.exports, o = sv.exports, u = uv.exports, c = rv.exports, l = wm.exports, f = lg, d = Ph.exports, p = ih, h = Xf.exports, v = wg.exports, y = Gg, m = bS.exports, g = bm, b = _S.exports; function k(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; } function w(e) { if (e && e.__esModule)
        return e; var t = Object.create(null); return e && Object.keys(e).forEach((function (n) { if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function () { return e[n]; } });
    } })), t.default = e, Object.freeze(t); } var x = k(n), _ = k(r), S = k(i), T = k(a), E = k(s), R = k(o), I = k(u), O = k(c), C = k(l), P = k(f), A = k(d), j = w(h), M = w(v), L = k(m), N = w(b); function U() { } function D() { D.init.call(this); } function F(e) { return void 0 === e._maxListeners ? D.defaultMaxListeners : e._maxListeners; } function B(e, t, n) { if (t)
        e.call(n);
    else
        for (var r = e.length, i = K(e, r), a = 0; a < r; ++a)
            i[a].call(n); } function q(e, t, n, r) { if (t)
        e.call(n, r);
    else
        for (var i = e.length, a = K(e, i), s = 0; s < i; ++s)
            a[s].call(n, r); } function z(e, t, n, r, i) { if (t)
        e.call(n, r, i);
    else
        for (var a = e.length, s = K(e, a), o = 0; o < a; ++o)
            s[o].call(n, r, i); } function W(e, t, n, r, i, a) { if (t)
        e.call(n, r, i, a);
    else
        for (var s = e.length, o = K(e, s), u = 0; u < s; ++u)
            o[u].call(n, r, i, a); } function G(e, t, n, r) { if (t)
        e.apply(n, r);
    else
        for (var i = e.length, a = K(e, i), s = 0; s < i; ++s)
            a[s].apply(n, r); } function $(e, t, n, r) { var i, a, s, o; if ("function" != typeof n)
        throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = new U, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = F(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, o = u, "function" == typeof console.warn ? console.warn(o) : console.log(o);
        }
    }
    else
        s = a[t] = n, ++e._eventsCount; return e; } function V(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; } function J(e) { var t = this._events; if (t) {
        var n = t[e];
        if ("function" == typeof n)
            return 1;
        if (n)
            return n.length;
    } return 0; } function K(e, t) { for (var n = new Array(t); t--;)
        n[t] = e[t]; return n; } U.prototype = Object.create(null), D.EventEmitter = D, D.usingDomains = !1, D.prototype.domain = void 0, D.prototype._events = void 0, D.prototype._maxListeners = void 0, D.defaultMaxListeners = 10, D.init = function () { this.domain = null, D.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new U, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, D.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, D.prototype.getMaxListeners = function () { return F(this); }, D.prototype.emit = function (e) { var t, n, r, i, a, s, o, u = "error" === e; if (s = this._events)
        u = u && null == s.error;
    else if (!u)
        return !1; if (o = this.domain, u) {
        if (t = arguments[1], !o) {
            if (t instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    } if (!(n = s[e]))
        return !1; var l = "function" == typeof n; switch (r = arguments.length) {
        case 1:
            B(n, l, this);
            break;
        case 2:
            q(n, l, this, arguments[1]);
            break;
        case 3:
            z(n, l, this, arguments[1], arguments[2]);
            break;
        case 4:
            W(n, l, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
            G(n, l, this, i);
    } return !0; }, D.prototype.addListener = function (e, t) { return $(this, e, t, !1); }, D.prototype.on = D.prototype.addListener, D.prototype.prependListener = function (e, t) { return $(this, e, t, !0); }, D.prototype.once = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.on(e, V(this, e, t)), this; }, D.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, V(this, e, t)), this; }, D.prototype.removeListener = function (e, t) { var n, r, i, a, s; if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
        return this; if (!(n = r[e]))
        return this; if (n === t || n.listener && n.listener === t)
        0 == --this._eventsCount ? this._events = new U : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, a = n.length; a-- > 0;)
            if (n[a] === t || n[a].listener && n[a].listener === t) {
                s = n[a].listener, i = a;
                break;
            }
        if (i < 0)
            return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount)
                return this._events = new U, this;
            delete r[e];
        }
        else
            !function (e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
                e[n] = e[r]; e.pop(); }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    } return this; }, D.prototype.off = function (e, t) { return this.removeListener(e, t); }, D.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
        return this; if (!n.removeListener)
        return 0 === arguments.length ? (this._events = new U, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new U : delete n[e]), this; if (0 === arguments.length) {
        for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
            "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new U, this._eventsCount = 0, this;
    } if ("function" == typeof (t = n[e]))
        this.removeListener(e, t);
    else if (t)
        do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]); return this; }, D.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }(t) : []; }, D.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : J.call(e, t); }, D.prototype.listenerCount = J, D.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; }; var H = j.getLogger("twilsock"); function Y(e, t) { return ["".concat((new Date).toISOString(), " Twilsock ").concat(e, ":")].concat(Array.from(t)); } var Q = new (function () { function e(t) { O.default(this, e), C.default(this, "prefix", ""), this.prefix = null != t && t.length > 0 ? " " + t + ":" : ""; } return _.default(e, [{ key: "setLevel", value: function (e) { H.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.trace.apply(null, Y("T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.debug.apply(null, Y("D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.info.apply(null, Y("I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.warn.apply(null, Y("W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.error.apply(null, Y("E", t)); } }], [{ key: "setLevel", value: function (e) { H.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.trace.apply(null, Y("T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.debug.apply(null, Y("D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.info.apply(null, Y("I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.warn.apply(null, Y("W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; H.error.apply(null, Y("E", t)); } }]), e; }())(""), X = "0.12.1", Z = function () { function e(t, n, r) { O.default(this, e), C.default(this, "confirmedCapabilities", new Set), this.activeGrant = n, this._token = t; var i = r.region || "us1", a = "wss://tsock.".concat(i, ".twilio.com/v3/wsconnect"), s = r.twilsock || r.Twilsock || {}; this.url = s.uri || a, this._continuationToken = r.continuationToken ? r.continuationToken : null, this.logLevel = r.logLevel ? r.logLevel : "error", this.retryPolicy = r.retryPolicy ? r.retryPolicy : { min: 1e3, max: 12e4, randomness: .2 }, this.clientMetadata = r.clientMetadata ? r.clientMetadata : {}, this.clientMetadata.ver = X, this.initRegistrations = r.initRegistrations ? r.initRegistrations : null, this.tweaks = r.tweaks ? r.tweaks : null; } return _.default(e, [{ key: "token", get: function () { return this._token; } }, { key: "continuationToken", get: function () { return this._continuationToken; } }, { key: "updateToken", value: function (e) { this._token = e; } }, { key: "updateContinuationToken", value: function (e) { this._continuationToken = e; } }]), e; }(), ee = function e(t) { O.default(this, e), this.id = t || "TM".concat(y.v4()); }; function te(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var ne = function (e) { E.default(n, e); var t = te(n); function n(e, r, i, a, s) { var o; return O.default(this, n), o = t.call(this), C.default(S.default(o), "method", "init"), o.token = e, o.continuation_token = r, o.metadata = i, o.registrations = a, o.tweaks = s, o.capabilities = ["client_update", "offline_storage", "telemetry.v1"], o; } return n; }(ee); function re(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var ie = function (e) { E.default(n, e); var t = re(n); function n(e, r, i, a, s, o, u) { var c; return O.default(this, n), (c = t.call(this, e)).continuationToken = r, c.continuationTokenStatus = a, c.offlineStorage = s, c.initRegistrations = o, c.debugInfo = u, c.confirmedCapabilities = i, c; } return n; }(ee); function ae(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var se = function (e) { E.default(n, e); var t = ae(n); function n(e) { var r; return O.default(this, n), r = t.call(this), C.default(S.default(r), "method", "update"), r.token = e, r; } return n; }(ee); function oe(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Message = function (e) { E.default(Message, e); var t = oe(Message); function Message(e, n, r) { var i; return O.default(this, Message), i = t.call(this), C.default(S.default(i), "method", "message"), i.active_grant = e, i.payload_type = n, i.http_request = r, i; } return Message; }(ee); function ue(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var ce = function (e) { E.default(n, e); var t = ue(n); function n(e) { var r; return O.default(this, n), r = t.call(this, e), C.default(S.default(r), "method", "reply"), C.default(S.default(r), "payload_type", "application/json"), C.default(S.default(r), "status", { code: 200, status: "OK" }), r; } return n; }(ee); function le(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var fe = function (e) { E.default(n, e); var t = le(n); function n() { var e; return O.default(this, n), e = t.call(this), C.default(S.default(e), "method", "close"), e; } return n; }(ee); function de(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var pe = function e(t, n, r, i, a, s) { O.default(this, e), this.start = t, this.end = n, this.title = r, this.details = i, this.id = a, this.type = s; }, he = function (e) { E.default(n, e); var t = de(n); function n(e) { var r; return O.default(this, n), r = t.call(this), C.default(S.default(r), "method", "telemetry.v1"), r.events = e, r; } return n; }(ee); function ve(e) { return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function (e, t) { return String.fromCharCode(Number("0x" + t)); })).length; } function ye(e) { var t = encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function (e, t) { return String.fromCharCode(Number("0x" + t)); })), n = new Uint8Array(t.length); return Array.prototype.forEach.call(t, (function (e, t) { n[t] = e.charCodeAt(0); })), n; } function me(e) { var t = Array.prototype.map.call(e, (function (e) { return String.fromCharCode(e); })).join("").replace(/(.)/g, (function (e, t) { var n = t.charCodeAt(0).toString(16).toUpperCase(); return n.length < 2 && (n = "0" + n), "%" + n; })); return decodeURIComponent(t); } function ge(e) { return JSON.parse(me(e)); } var be = function () { function e() { O.default(this, e); } return _.default(e, null, [{ key: "parse", value: function (e) { var t, n, r = new Uint8Array(e), i = function (e) { for (var t = "", n = 0; n < e.length; ++n) {
                var r = String.fromCharCode(e[n]);
                if (t += r, "\r" === r) {
                    n += 2;
                    break;
                }
            } var i = t.split(" "); return { size: n, protocol: i[0], version: i[1], headerSize: Number(i[2]) }; }(r); if ("TWILSOCK" !== i.protocol || "V3.0" !== i.version)
                return Q.error("unsupported protocol: ".concat(i.protocol, " ver ").concat(i.version)), null; try {
                t = ge(r.subarray(i.size, i.size + i.headerSize));
            }
            catch (t) {
                return Q.error("failed to parse message header", t, e), null;
            } if (Q.debug("message received: ", t.method), Q.trace("message received: ", t), t.payload_size > 0) {
                var a = 2 + i.size + i.headerSize, s = t.payload_size;
                if (t.hasOwnProperty("payload_type") && 0 !== t.payload_type.indexOf("application/json"))
                    0 === t.payload_type.indexOf("text/plain") && (n = me(r.subarray(a, a + s)));
                else
                    try {
                        n = ge(r.subarray(a, a + s));
                    }
                    catch (t) {
                        return Q.error("failed to parse message body", t, e), null;
                    }
            } return { method: t.method, header: t, payload: n }; } }, { key: "createPacket", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; e.payload_size = ve(t); var n = JSON.stringify(e), r = "TWILSOCK V3.0 " + ve(n); Q.debug("send request:", r + n + t); var i = ye(r + "\r\n" + n + "\r\n" + t); return i.buffer; } }]), e; }(); function ke(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var we = function (e) { E.default(n, e); var t = ke(n); function n(e) { return O.default(this, n), t.call(this, e); } return n; }(L.default(Error)); function xe(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var _e = function (e) { E.default(n, e); var t = xe(n); function n(e, r) { var i; return O.default(this, n), (i = t.call(this, e)).reply = r, i; } return n; }(we); function Se(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; } function Te(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Se(Object(n), !0).forEach((function (t) { C.default(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; } function Ee(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Re = function (e) { E.default(n, e); var t = Ee(n); function n(e) { var r; return O.default(this, n), r = t.call(this), C.default(S.default(r), "newBackoff", null), C.default(S.default(r), "usedBackoff", null), C.default(S.default(r), "retrier", null), r.options = e ? Te({}, e) : {}, r; } return _.default(n, [{ key: "inProgress", get: function () { return !!this.retrier; } }, { key: "start", value: function () { if (this.inProgress)
                throw new Error("Already waiting for next attempt, call finishAttempt(success : boolean) to finish it"); this.createRetrier(); } }, { key: "stop", value: function () { this.cleanRetrier(), this.newBackoff = null, this.usedBackoff = null; } }, { key: "modifyBackoff", value: function (e) { this.newBackoff = e; } }, { key: "attemptFailed", value: function () { if (!this.inProgress)
                throw new Error("No attempt is in progress"); var e, t; this.newBackoff ? !this.usedBackoff || this.usedBackoff < this.newBackoff ? this.createRetrier() : null === (e = this.retrier) || void 0 === e || e.failed(new Error) : null === (t = this.retrier) || void 0 === t || t.failed(new Error); } }, { key: "cancel", value: function () { var e; null === (e = this.retrier) || void 0 === e || e.cancel(); } }, { key: "cleanRetrier", value: function () { var e, t; null === (e = this.retrier) || void 0 === e || e.removeAllListeners(), null === (t = this.retrier) || void 0 === t || t.cancel(), this.retrier = null; } }, { key: "getRetryPolicy", value: function () { var e = Te({}, this.options); return this.newBackoff && (e.min = this.newBackoff, e.max = this.options.max && this.options.max > this.newBackoff ? this.options.max : this.newBackoff), e.maxAttemptsCount = this.options.maxAttemptsCount ? this.options.maxAttemptsCount + 1 : void 0, e; } }, { key: "createRetrier", value: function () { var e = this; this.cleanRetrier(); var t = this.getRetryPolicy(); this.retrier = new g.Retrier(t), this.retrier.once("attempt", (function () { var t, n; null === (t = e.retrier) || void 0 === t || t.on("attempt", (function () { return e.emit("attempt"); })), null === (n = e.retrier) || void 0 === n || n.failed(new Error("Skipping first attempt")); })), this.retrier.on("failed", (function (t) { return e.emit("failed", t); })), this.usedBackoff = this.newBackoff, this.newBackoff = null, this.retrier.start(); } }]), n; }(D); function Ie(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Oe = function (e) { E.default(i, e); var t, n, r = Ie(i); function i(e, t, n) { var a; O.default(this, i), a = r.call(this), C.default(S.default(a), "disconnectingTimer", null), C.default(S.default(a), "disconnectedPromiseResolve", null), C.default(S.default(a), "terminalStates", ["disconnected", "rejected"]), C.default(S.default(a), "tokenExpiredSasCode", 20104), C.default(S.default(a), "terminationReason", "Connection is not initialized"), a.websocket = e, a.websocket.on("connected", (function () { return a.fsm.socketConnected(); })), a.websocket.on("disconnected", (function () { return a.fsm.socketClosed(); })), a.websocket.on("message", (function (e) { return a.onIncomingMessage(e); })), a.websocket.on("socketError", (function (e) { return a.emit("connectionError", { terminal: !1, message: "Socket error: ".concat(e.message), httpStatusCode: null, errorCode: null }); })), a.transport = t, a.config = n, a.retrier = new Re(n.retryPolicy), a.retrier.on("attempt", (function () { return a.retry(); })), a.retrier.on("failed", (function (e) { Q.warn("Retrying failed: ".concat(e.message)), a.disconnect(); })), "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", (function () { Q.debug("Browser reported connectivity state: online"), a.resetBackoff(), a.fsm.systemOnline(); })), window.addEventListener("offline", (function () { Q.debug("Browser reported connectivity state: offline"), a.websocket.close(), a.fsm.socketClosed(); }))); var s = M.factory({ init: "disconnected", transitions: [{ name: "userConnect", from: ["disconnected", "rejected"], to: "connecting" }, { name: "userConnect", from: ["connecting", "connected"] }, { name: "userDisconnect", from: ["connecting", "initialising", "connected", "updating", "retrying", "rejected", "waitSocketClosed", "waitOffloadSocketClosed"], to: "disconnecting" }, { name: "userRetry", from: ["retrying"], to: "connecting" }, { name: "socketConnected", from: ["connecting"], to: "initialising" }, { name: "socketClosed", from: ["connecting", "initialising", "connected", "updating", "error", "waitOffloadSocketClosed"], to: "retrying" }, { name: "socketClosed", from: ["disconnecting"], to: "disconnected" }, { name: "socketClosed", from: ["waitSocketClosed"], to: "disconnected" }, { name: "socketClosed", from: ["rejected"], to: "rejected" }, { name: "initSuccess", from: ["initialising"], to: "connected" }, { name: "initError", from: ["initialising"], to: "error" }, { name: "tokenRejected", from: ["initialising", "updating"], to: "rejected" }, { name: "protocolError", from: ["initialising", "connected", "updating"], to: "error" }, { name: "receiveClose", from: ["initialising", "connected", "updating"], to: "waitSocketClosed" }, { name: "receiveOffload", from: ["initialising", "connected", "updating"], to: "waitOffloadSocketClosed" }, { name: "unsupportedProtocol", from: ["initialising", "connected", "updating"], to: "unsupported" }, { name: "receiveFatalClose", from: ["initialising", "connected", "updating"], to: "unsupported" }, { name: "userUpdateToken", from: ["disconnected", "rejected", "connecting", "retrying"], to: "connecting" }, { name: "userUpdateToken", from: ["connected"], to: "updating" }, { name: "updateSuccess", from: ["updating"], to: "connected" }, { name: "updateError", from: ["updating"], to: "error" }, { name: "userSend", from: ["connected"], to: "connected" }, { name: "systemOnline", from: ["retrying"], to: "connecting" }], methods: { onConnecting: function () { a.setupSocket(), a.emit("connecting"); }, onEnterInitialising: function () { a.sendInit(); }, onLeaveInitialising: function () { a.cancelInit(); }, onEnterUpdating: function () { a.sendUpdate(); }, onLeaveUpdating: function () { a.cancelUpdate(); }, onEnterRetrying: function () { a.initRetry(), a.emit("connecting"); }, onEnterConnected: function () { a.resetBackoff(), a.onConnected(); }, onUserUpdateToken: function () { a.resetBackoff(); }, onTokenRejected: function () { a.resetBackoff(), a.closeSocket(!0), a.finalizeSocket(); }, onUserDisconnect: function () { a.closeSocket(!0); }, onEnterDisconnecting: function () { a.startDisconnectTimer(); }, onLeaveDisconnecting: function () { a.cancelDisconnectTimer(); }, onEnterWaitSocketClosed: function () { a.startDisconnectTimer(); }, onLeaveWaitSocketClosed: function () { a.cancelDisconnectTimer(); }, onEnterWaitOffloadSocketClosed: function () { a.startDisconnectTimer(); }, onLeaveWaitOffloadSocketClosed: function () { a.cancelDisconnectTimer(); }, onDisconnected: function () { a.resetBackoff(), a.finalizeSocket(); }, onReceiveClose: function () { a.onCloseReceived(); }, onReceiveOffload: function (e, t) { Q.debug("onreceiveoffload: ", t), a.modifyBackoff(t.body), a.onCloseReceived(); }, onUnsupported: function () { a.closeSocket(!0), a.finalizeSocket(); }, onError: function (e, t) { a.closeSocket(t), a.finalizeSocket(); }, onEnterState: function (e) { "none" !== e.from && a.changeState(e); }, onInvalidTransition: function (e, t, n) { Q.warn("FSM: unexpected transition", t, n); } } }); return a.fsm = new s, a; } return _.default(i, [{ key: "changeState", value: function (e) { Q.debug("FSM: ".concat(e.transition, ": ").concat(e.from, " --\x3e ").concat(e.to)), this.lastEmittedState !== this.state && (this.lastEmittedState = this.state, this.emit("stateChanged", this.state)); } }, { key: "resetBackoff", value: function () { Q.trace("resetBackoff"), this.retrier.stop(); } }, { key: "modifyBackoff", value: function (e) { Q.trace("modifyBackoff", e); var t = e ? e.backoff_policy : null; t && "number" == typeof t.reconnect_min_ms && this.retrier.modifyBackoff(t.reconnect_min_ms); } }, { key: "startDisconnectTimer", value: function () { var e = this; Q.trace("startDisconnectTimer"), this.disconnectingTimer && (clearTimeout(this.disconnectingTimer), this.disconnectingTimer = null), this.disconnectingTimer = setTimeout((function () { Q.debug("disconnecting is timed out"), e.closeSocket(!0); }), 3e3); } }, { key: "cancelDisconnectTimer", value: function () { Q.trace("cancelDisconnectTimer"), this.disconnectingTimer && (clearTimeout(this.disconnectingTimer), this.disconnectingTimer = null); } }, { key: "isConnected", get: function () { return "connected" === this.state && this.websocket.isConnected; } }, { key: "state", get: function () { switch (this.fsm.state) {
                case "connecting":
                case "initialising":
                case "retrying":
                case "error": return "connecting";
                case "updating":
                case "connected": return "connected";
                case "rejected": return "denied";
                case "disconnecting":
                case "waitSocketClosed":
                case "waitOffloadSocketClosed": return "disconnecting";
                case "disconnected":
                default: return "disconnected";
            } } }, { key: "initRetry", value: function () { Q.debug("initRetry"), this.retrier.inProgress ? this.retrier.attemptFailed() : this.retrier.start(); } }, { key: "retry", value: function () { "connecting" != this.fsm.state ? (Q.trace("retry"), this.websocket.close(), this.fsm.userRetry()) : Q.trace("can\t retry as already connecting"); } }, { key: "onConnected", value: function () { this.emit("connected"); } }, { key: "finalizeSocket", value: function () { Q.trace("finalizeSocket"), this.websocket.close(), this.emit("disconnected"), this.disconnectedPromiseResolve && (this.disconnectedPromiseResolve(), this.disconnectedPromiseResolve = null); } }, { key: "setupSocket", value: function () { Q.trace("setupSocket:", this.config.token), this.emit("beforeConnect"), this.websocket.connect(); } }, { key: "onIncomingMessage", value: function (e) { var t = be.parse(e); if (t) {
                var n = t.method, r = t.header, i = t.payload;
                if ("reply" !== n && this.confirmReceiving(r), "notification" === n)
                    this.emit("message", r.message_type, i);
                else if ("reply" === r.method)
                    this.transport.processReply({ id: r.id, status: r.status, header: r, body: i });
                else if ("client_update" === r.method)
                    "token_about_to_expire" === r.client_update_type && this.emit("tokenAboutToExpire");
                else if ("close" === r.method)
                    if (308 === r.status.code)
                        Q.debug("Connection has been offloaded"), this.fsm.receiveOffload({ status: r.status.status, body: i });
                    else if (406 === r.status.code) {
                        var a = "Server closed connection because can't parse protocol: ".concat(JSON.stringify(r.status));
                        this.emitReplyConnectionError(a, r, !0), Q.error(a), this.fsm.receiveFatalClose();
                    }
                    else
                        417 === r.status.code ? (Q.error("Server closed connection because can't parse client reply: ".concat(JSON.stringify(r.status))), this.fsm.receiveFatalClose(r.status.status)) : 410 === r.status.code ? (Q.warn("Server closed connection: ".concat(JSON.stringify(r.status))), this.fsm.receiveClose(r.status.status), this.emit("tokenExpired")) : 401 === r.status.code ? (Q.error("Server closed connection: ".concat(JSON.stringify(r.status))), this.fsm.receiveClose(r.status.status)) : (Q.warn("unexpected message: ", r.status), this.fsm.receiveOffload({ status: r.status.status, body: null }));
            } } }, { key: "sendInit", value: (n = x.default(P.default.mark((function e() { var t, n; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return Q.trace("sendInit"), e.prev = 1, this.emit("beforeSendInit"), e.next = 5, this.transport.sendInit();
                    case 5:
                        t = e.sent, this.config.updateContinuationToken(t.continuationToken), this.config.confirmedCapabilities = t.confirmedCapabilities, this.fsm.initSuccess(t), this.emit("initialized", t), this.emit("tokenUpdated"), e.next = 17;
                        break;
                    case 13: e.prev = 13, e.t0 = e.catch(1), e.t0 instanceof _e ? (n = !1, Q.warn("Init rejected by server: ".concat(JSON.stringify(e.t0.reply.status))), this.emit("sendInitFailed"), 401 === e.t0.reply.status.code || 403 === e.t0.reply.status.code ? (n = !0, this.fsm.tokenRejected(e.t0.reply.status), e.t0.reply.status.errorCode === this.tokenExpiredSasCode && this.emit("tokenExpired")) : 429 === e.t0.reply.status.code ? (this.modifyBackoff(e.t0.reply.body), this.fsm.initError(!0)) : 500 === e.t0.reply.status.code ? this.fsm.initError(!1) : this.fsm.initError(!0), this.emitReplyConnectionError(e.t0.message, e.t0.reply, n)) : (this.terminationReason = e.t0.message, this.emit("connectionError", { terminal: !0, message: "Unknown error during connection initialisation: ".concat(e.t0.message, "\n").concat(JSON.stringify(e.t0, null, 2)), httpStatusCode: null, errorCode: null }), this.fsm.initError(!0)), this.emit("tokenUpdated", e.t0);
                    case 17:
                    case "end": return e.stop();
                } }), e, this, [[1, 13]]); }))), function () { return n.apply(this, arguments); }) }, { key: "sendUpdate", value: (t = x.default(P.default.mark((function e() { var t, n, r; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return Q.trace("sendUpdate"), t = new se(this.config.token), e.prev = 2, e.next = 5, this.transport.sendWithReply(t);
                    case 5:
                        n = e.sent, this.fsm.updateSuccess(n.body), this.emit("tokenUpdated"), e.next = 14;
                        break;
                    case 10: e.prev = 10, e.t0 = e.catch(2), e.t0 instanceof _e ? (r = !1, Q.warn("Token update rejected by server: ".concat(JSON.stringify(e.t0.reply.status))), 401 === e.t0.reply.status.code || 403 === e.t0.reply.status.code ? (r = !0, this.fsm.tokenRejected(e.t0.reply.status), e.t0.reply.status.errorCode === this.tokenExpiredSasCode && this.emit("tokenExpired")) : 429 === e.t0.reply.status.code ? (this.modifyBackoff(e.t0.reply.body), this.fsm.updateError(e.t0.reply.status)) : this.fsm.updateError(e.t0.reply.status), this.emitReplyConnectionError(e.t0.message, e.t0.reply, r)) : (this.emit("error", !1, e.t0.message, null, null), this.fsm.updateError(e.t0)), this.emit("tokenUpdated", e.t0);
                    case 14:
                    case "end": return e.stop();
                } }), e, this, [[2, 10]]); }))), function () { return t.apply(this, arguments); }) }, { key: "emitReplyConnectionError", value: function (e, t, n) { var r = t.status && t.status.description ? t.status.description : e, i = t.status.code, a = t.status && t.status.errorCode ? t.status.errorCode : null; n && (this.terminationReason = r), this.emit("connectionError", { terminal: n, message: "Connection error: ".concat(r), httpStatusCode: i, errorCode: a }); } }, { key: "cancelInit", value: function () { Q.trace("cancelInit"); } }, { key: "cancelUpdate", value: function () { Q.trace("cancelUpdate"); } }, { key: "confirmReceiving", value: function (e) { Q.trace("confirmReceiving"); try {
                this.transport.send(new ce(e.id));
            }
            catch (e) {
                Q.debug("failed to confirm packet receiving", e);
            } } }, { key: "closeSocket", value: function (e) { var t = this; Q.trace("closeSocket (graceful: ".concat(e, ")")), e && this.transport.isConnected && this.transport.sendClose(), this.websocket.close(), setTimeout((function () { return t.fsm.socketClosed(); }), 0); } }, { key: "connect", value: function () { Q.trace("connect"), this.fsm.userConnect(); } }, { key: "disconnect", value: function () { var e = this; return Q.trace("disconnect"), this.fsm.is("disconnected") ? Promise.resolve() : new Promise((function (t) { e.disconnectedPromiseResolve = t, e.fsm.userDisconnect(); })); } }, { key: "updateToken", value: function (e) { var t = this; return Q.trace("updateToken:", e), new Promise((function (e, n) { t.once("tokenUpdated", (function (t) { t ? n(t) : e(); })), t.fsm.userUpdateToken(); })); } }, { key: "isTerminalState", get: function () { return -1 !== this.terminalStates.indexOf(this.fsm.state); } }, { key: "getTerminationReason", get: function () { return this.terminationReason; } }, { key: "onCloseReceived", value: function () { this.websocket.close(); } }]), i; }(D), Ce = function () { function e() { O.default(this, e); } return _.default(e, null, [{ key: "getMetadata", value: function (e) { var t, n, r, i, a, s, o, u, c = e && e.clientMetadata ? e.clientMetadata : {}, l = { env: null !== (t = N.name) && void 0 !== t ? t : "unknown", envv: null !== (n = N.version) && void 0 !== n ? n : "unknown", os: null !== (r = null === (i = N.os) || void 0 === i ? void 0 : i.family) && void 0 !== r ? r : "unknown", osv: null !== (a = null === (s = N.os) || void 0 === s ? void 0 : s.version) && void 0 !== a ? a : "unknown", osa: null !== (o = null === (u = N.os) || void 0 === u ? void 0 : u.architecture) && void 0 !== o ? o : "unknown", sdk: "js-default" }, f = {}; return ["ver", "env", "envv", "os", "osv", "osa", "type", "sdk", "sdkv", "dev", "devv", "devt", "app", "appv"].filter((function (e) { return e in c || e in l; })).forEach((function (e) { return f[e] = e in c ? c[e] : l[e]; })), f; } }]), e; }(); var Pe = function () { function e(t, n) { var r = this; O.default(this, e), this.config = n, this.activeRequests = new Map, this.channel = t, this.channel.on("reply", (function (e) { return r.processReply(e); })), this.channel.on("disconnected", (function () { r.activeRequests.forEach((function (e) { clearTimeout(e.timeout), e.reject(new we("disconnected")); })), r.activeRequests.clear(); })); } var t; return _.default(e, [{ key: "isConnected", get: function () { return this.channel.isConnected; } }, { key: "processReply", value: function (e) { var t, n = this.activeRequests.get(e.id); n && (clearTimeout(n.timeout), this.activeRequests.delete(e.id), (t = e.status.code) >= 200 && t < 300 ? n.resolve(e) : (n.reject(new _e("Transport failure: " + e.status.status, e)), Q.trace("message rejected"))); } }, { key: "storeRequest", value: function (e, t, n) { var r = { resolve: t, reject: n, timeout: setTimeout((function () { Q.trace("request", e, "is timed out"), n(new we("Twilsock: request timeout: " + e)); }), 3e4) }; this.activeRequests.set(e, r); } }, { key: "shutdown", value: function () { this.activeRequests.forEach((function (e) { clearTimeout(e.timeout), e.reject(new we("Twilsock: request cancelled by user")); })), this.activeRequests.clear(); } }, { key: "sendInit", value: (t = x.default(P.default.mark((function e() { var t, n, r; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return Q.trace("sendInit"), t = Ce.getMetadata(this.config), n = new ne(this.config.token, this.config.continuationToken, t, this.config.initRegistrations, this.config.tweaks), e.next = 5, this.sendWithReply(n);
                    case 5: return r = e.sent, e.abrupt("return", new ie(r.id, r.header.continuation_token, new Set(r.header.capabilities), r.header.continuation_token_status, r.header.offline_storage, r.header.init_registrations, r.header.debug_info));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "sendClose", value: function () { var e = new fe; this.send(e); } }, { key: "sendWithReply", value: function (e, t) { var n = this; return new Promise((function (r, i) { var a = n.send(e, t); n.storeRequest(a, r, i); })); } }, { key: "send", value: function (e, t) { e.id = e.id || "TM".concat(y.v4()); var n = be.createPacket(e, function (e) { switch (A.default(e)) {
                case "undefined": return "";
                case "object": return JSON.stringify(e);
                default: return e;
            } }(t)); try {
                return this.channel.send(n), e.id;
            }
            catch (t) {
                throw Q.debug("failed to send ", e, t), Q.trace(t.stack), t;
            } } }]), e; }(); function Ae(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var je = function (e) { E.default(r, e); var n = Ae(r); function r(e) { var i; return O.default(this, r), i = n.call(this), C.default(S.default(i), "socket", null), i.url = e, i.url = e, i.WebSocket = t.WebSocket || t.MozWebSocket || {}, i; } return _.default(r, [{ key: "isConnected", get: function () { return !!this.socket && 1 === this.socket.readyState; } }, { key: "connect", value: function () { var e, t = this; Q.trace("connecting to socket"); try {
                e = new this.WebSocket(this.url);
            }
            catch (e) {
                return Q.debug("Socket error: ".concat(this.url)), void this.emit("socketError", e);
            } e.binaryType = "arraybuffer", e.onopen = function () { Q.debug("socket opened ".concat(t.url)), t.emit("connected"); }, e.onclose = function (e) { Q.debug("socket closed", e), t.emit("disconnected", e); }, e.onerror = function (e) { Q.debug("Socket error:", e), t.emit("socketError", e); }, e.onmessage = function (e) { t.emit("message", e.data); }, this.socket = e; } }, { key: "send", value: function (e) { return this.socket && this.socket.send(e); } }, { key: "close", value: function () { if (Q.trace("closing socket"), this.socket) {
                this.socket.onopen = null, this.socket.onclose = null, this.socket.onerror = null, this.socket.onmessage = null;
                try {
                    this.socket.close();
                }
                finally { }
            } } }]), r; }(D); function Me(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Le = function (e) { E.default(u, e); var t, n, r, i, a, s, o = Me(u); function u(e) { var t; return O.default(this, u), (t = o.call(this)).transport = e, t.registrations = new Map, t.registrationsInProgress = new Map, t; } return _.default(u, [{ key: "putNotificationContext", value: (s = x.default(P.default.mark((function e(t, n) { var r; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = { method: "put_notification_ctx", notification_ctx_id: t }, e.next = 3, this.transport.sendWithReply(r, n);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return s.apply(this, arguments); }) }, { key: "deleteNotificationContext", value: (a = x.default(P.default.mark((function e(t) { var n; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = { method: "delete_notification_ctx", notification_ctx_id: t }, e.next = 3, this.transport.sendWithReply(n);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return a.apply(this, arguments); }) }, { key: "updateRegistration", value: (i = x.default(P.default.mark((function e(t, n) { var r, i; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return Q.debug("update registration for context", t), (r = this.registrationsInProgress.get(t)) || (r = new Set, this.registrationsInProgress.set(t, r)), i = y.v4(), r.add(i), e.prev = 5, e.next = 8, this.putNotificationContext(t, n);
                    case 8:
                        Q.debug("registration attempt succeeded for context", n), r.delete(i), 0 === r.size && (this.registrationsInProgress.delete(t), this.emit("registered", t)), e.next = 19;
                        break;
                    case 13: e.prev = 13, e.t0 = e.catch(5), Q.warn("registration attempt failed for context", n), Q.debug(e.t0), r.delete(i), 0 === r.size && (this.registrationsInProgress.delete(t), this.emit("registrationFailed", t, e.t0));
                    case 19:
                    case "end": return e.stop();
                } }), e, this, [[5, 13]]); }))), function (e, t) { return i.apply(this, arguments); }) }, { key: "updateRegistrations", value: (r = x.default(P.default.mark((function e() { var t, n = this; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return Q.trace("refreshing ".concat(this.registrations.size, " registrations")), t = [], this.registrations.forEach((function (e, r) { t.push(n.updateRegistration(r, e)); })), e.next = 5, Promise.all(t);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return r.apply(this, arguments); }) }, { key: "setNotificationsContext", value: (n = x.default(P.default.mark((function e(t, n) { return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (t && n) {
                            e.next = 2;
                            break;
                        }
                        throw new we("Invalid arguments provided");
                    case 2: return this.registrations.set(t, n), e.next = 5, this.updateRegistration(t, n);
                    case 5: return e.abrupt("return", e.sent);
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "removeNotificationsContext", value: (t = x.default(P.default.mark((function e(t) { return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.registrations.has(t)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");
                    case 2: return e.next = 4, this.deleteNotificationContext(t);
                    case 4: this.transport.isConnected && this.registrations.delete(t);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }]), u; }(D); function Ne(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Ue = function (e) { E.default(n, e); var t = Ne(n); function n(e, r, i) { var a; return O.default(this, n), (a = t.call(this, r)).status = e, a.description = r, a.body = i, a; } return n; }(we); function De(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Fe = function (e) { E.default(n, e); var t = De(n); function n(e) { return O.default(this, n), t.call(this, e); } return n; }(we); function Be(e, t) { var n = function (e) { var t = e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/); if (t) {
        var n = { protocol: t[1], host: t[2], hostname: t[3], port: t[4], pathname: t[5], search: t[6], hash: t[7], params: {} };
        if (n.search.length > 0) {
            var r = n.search.substring(1);
            n.params = r.split("&").map((function (e) { return e.split("="); })).reduce((function (e, t) { return e.hasOwnProperty(t[0]) ? Array.isArray(e[t[0]]) ? e[t[0]].push(t[1]) : e[t[0]] = [e[t[0]], t[1]] : e[t[0]] = t[1], e; }), {});
        }
        return n;
    } throw new we("Incorrect URI: " + e); }(t), r = { method: e, host: n.host, path: n.pathname }; return n.params && (r.params = n.params), r; } function qe(e, t, n, r, i) { return { to: Be(e, t), headers: n, body: r, grant: i }; } var ze = function () { function e(t, n, r) { O.default(this, e), this.config = r, this.transport = t, this.pendingMessages = [], this.twilsock = n; } var t; return _.default(e, [{ key: "saveMessage", value: function (e) { var t = this; return new Promise((function (n, r) { var i = { message: e, resolve: n, reject: r, alreadyRejected: !1, timeout: setTimeout((function () { Q.debug("request is timed out"), r(new we("request '".concat(e.to.method, "' to '").concat(e.to.host, "' timed out"))), i.alreadyRejected = !0; }), 2e4) }; t.pendingMessages.push(i); })); } }, { key: "sendPendingMessages", value: function () { for (var e = this, t = function () { var t = e.pendingMessages[0]; if (!t.alreadyRejected)
                try {
                    var n = t.message;
                    e.actualSend(n).then((function (e) { return t.resolve(e); })).catch((function (e) { return t.reject(e); })), clearTimeout(t.timeout);
                }
                catch (e) {
                    return Q.debug("Failed to send pending message", e), "break";
                } e.pendingMessages.splice(0, 1); }; this.pendingMessages.length > 0;) {
                if ("break" === t())
                    break;
            } } }, { key: "rejectPendingMessages", value: function () { var e = this; this.pendingMessages.forEach((function (t) { t.reject(new Fe("Unable to connect: " + e.twilsock.getTerminationReason)), t.alreadyRejected = !0, clearTimeout(t.timeout); })), this.pendingMessages.splice(0, this.pendingMessages.length); } }, { key: "actualSend", value: (t = x.default(P.default.mark((function e(t) { var n, r, i, a, s, o, u, c; return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = t.to, i = t.headers, a = t.body, s = null !== (n = t.grant) && void 0 !== n ? n : this.config.activeGrant, o = { host: r.host, path: r.path, method: r.method, params: r.params, headers: i }, u = new Message(s, i["Content-Type"] || "application/json", o), Q.trace("Sending upstream message", u), e.next = 9, this.transport.sendWithReply(u, a);
                    case 9:
                        if (c = e.sent, Q.trace("Received upstream message response", c), !((f = c) && f.header && f.header.http_status) || (l = c.header.http_status.code) >= 200 && l < 300) {
                            e.next = 13;
                            break;
                        }
                        throw new Ue(c.header.http_status.code, c.header.http_status.status, c.body);
                    case 13: return e.abrupt("return", { status: c.header.http_status, headers: c.header.http_headers, body: c.body });
                    case 14:
                    case "end": return e.stop();
                } var l, f; }), e, this); }))), function (e) { return t.apply(this, arguments); }) }, { key: "send", value: function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0; if (this.twilsock.isTerminalState)
                return Promise.reject(new Fe("Unable to connect: " + this.twilsock.getTerminationReason)); var a = qe(e, t, n, r, i); return this.twilsock.isConnected ? this.actualSend(a) : this.saveMessage(a); } }]), e; }(), We = function () { function e() { var t = this; O.default(this, e), this._promise = new Promise((function (e, n) { t._resolve = e, t._reject = n; })); } return _.default(e, [{ key: "promise", get: function () { return this._promise; } }, { key: "update", value: function (e) { this._resolve(e); } }, { key: "set", value: function (e) { this._resolve(e); } }, { key: "fail", value: function (e) { this._reject(e); } }]), e; }(), Ge = function () { function e(t) { O.default(this, e), this.id = t; } return _.default(e, null, [{ key: "create", value: function (t) { if (t instanceof Object && "storage_id" in t)
                return new e(t.storage_id); throw new we('Field "storage_id" is missing'); } }]), e; }(), $e = function () { function e() { return O.default(this, e), C.default(this, "initializedFlag", "twilio_twilsock_token_storage"), C.default(this, "tokenStoragePrefix", "twilio_continuation_token_"), e._instance || (this.initialize(), e._instance = this), e._instance; } return _.default(e, [{ key: "sessionStorage", value: function () { try {
                return t.sessionStorage;
            }
            catch (e) {
                return null;
            } } }, { key: "window", value: function () { try {
                return t.window;
            }
            catch (e) {
                return null;
            } } }, { key: "storeToken", value: function (e, t) { this.canStore() && this.sessionStorage.setItem(this.getKeyName(t), e); } }, { key: "getStoredToken", value: function (e) { return this.canStore() ? this.sessionStorage.getItem(this.getKeyName(e)) : null; } }, { key: "initialize", value: function () { var e = this; if (this.canStore()) {
                this.sessionStorage.getItem(this.initializedFlag) && this.clear(), this.sessionStorage.setItem(this.initializedFlag, "true");
                var t = this.sessionStorage.removeItem;
                this.window.addEventListener("unload", (function () { t(e.initializedFlag); }));
            } } }, { key: "clear", value: function () { if (this.canStore()) {
                for (var e = [], t = 0; t < this.sessionStorage.length; t++) {
                    var n = this.sessionStorage.key(t);
                    n && 0 === n.indexOf(this.tokenStoragePrefix) && e.push(n);
                }
                var r = this.sessionStorage.removeItem;
                e.forEach((function (e) { return r(e); })), r(this.initializedFlag);
            } } }, { key: "getKeyName", value: function (e) { return "".concat(this.tokenStoragePrefix).concat(e); } }, { key: "canStore", value: function () { return !!(this.sessionStorage && this.sessionStorage.length && this.window); } }]), e; }(); C.default($e, "_instance", null); var Ve, Je, Ke = new $e, He = function () { function e(t, n, r, i, a, s) { O.default(this, e), this.title = t, this.details = n, this.start = r, this.type = a, this.id = s, this.end = i; } return _.default(e, [{ key: "toTelemetryEvent", value: function () { var e = new Date, t = this.start, n = this.end ? this.end : e; if (n < t) {
                var r = n;
                n = t, t = r;
            } var i = t.getTime() - e.getTime(), a = n.getTime() - e.getTime(); return new pe(i, a, this.title, this.details, this.id, this.type); } }]), e; }(); e.TelemetryPoint = void 0, (Ve = e.TelemetryPoint || (e.TelemetryPoint = {}))[Ve.Start = 0] = "Start", Ve[Ve.End = 1] = "End", e.EventSendingLimitation = void 0, (Je = e.EventSendingLimitation || (e.EventSendingLimitation = {}))[Je.MinEventsPortion = 0] = "MinEventsPortion", Je[Je.AnyEvents = 1] = "AnyEvents", Je[Je.AnyEventsIncludingUnfinished = 2] = "AnyEventsIncludingUnfinished"; var Ye = function () { function t(e, n) { O.default(this, t), C.default(this, "minEventsPortionToSend", 50), C.default(this, "maxEventsPortionToSend", 100), C.default(this, "pendingEvents", new Map), C.default(this, "readyEvents", []), C.default(this, "hasInitializationFinished", !1), C.default(this, "_canSendTelemetry", !1), this.config = e, this.packetInterface = n; } return _.default(t, [{ key: "isTelemetryEnabled", get: function () { return this.config.confirmedCapabilities.has("telemetry.v1"); } }, { key: "canSendTelemetry", get: function () { return this._canSendTelemetry && this.isTelemetryEnabled; }, set: function (t) { Q.debug("TelemetryTracker.canSendTelemetry: ".concat(t, " TelemetryTracker.isTelemetryEnabled: ").concat(this.isTelemetryEnabled)), this._canSendTelemetry && !t && (this.pendingEvents.clear(), this.readyEvents = []), this._canSendTelemetry = t, t && this.sendTelemetry(e.EventSendingLimitation.AnyEvents), t && !this.hasInitializationFinished && (this.hasInitializationFinished = !0); } }, { key: "addTelemetryEvent", value: function (e) { !this.canSendTelemetry && this.hasInitializationFinished || this.readyEvents.push(e); } }, { key: "addPartialEvent", value: function (t, n, r) { Q.debug("Adding ".concat(r === e.TelemetryPoint.Start ? "starting" : "ending", " timepoint for '").concat(n, "' event")); var i = this.pendingEvents.has(n); if (r === e.TelemetryPoint.Start)
                i && Q.debug("Overwriting starting point for '".concat(n, "' event")), this.pendingEvents.set(n, t);
            else {
                if (!i)
                    return void Q.info("Could not find started event for '".concat(n, "' event"));
                this.addTelemetryEvent(this.merge(this.pendingEvents.get(n), t)), this.pendingEvents.delete(n);
            } } }, { key: "getTelemetryToSend", value: function (t) { return this.canSendTelemetry && 0 != this.readyEvents.length ? t == e.EventSendingLimitation.MinEventsPortion && this.readyEvents.length < this.minEventsPortionToSend ? [] : this.getTelemetryPortion(t == e.EventSendingLimitation.AnyEventsIncludingUnfinished) : []; } }, { key: "getTelemetryPortion", value: function (e) { var t = this, n = Math.min(this.readyEvents.length, this.maxEventsPortionToSend), r = this.readyEvents.splice(0, n); return e && r.length < this.maxEventsPortionToSend && this.pendingEvents.forEach((function (e, n) { if (!(r.length >= t.maxEventsPortionToSend)) {
                var i = t.pendingEvents.get(n);
                t.pendingEvents.delete(n), r.push(new He("[UNFINISHED] ".concat(i.title), i.details, i.start, null, i.type, i.id));
            } })), r; } }, { key: "merge", value: function (e, t) { return new He(t.title ? t.title : e.title, t.details ? t.details : e.details, e.start, t.end, t.type ? t.type : e.type, t.id ? t.id : e.id); } }, { key: "sendTelemetryIfMinimalPortionCollected", value: function () { this.sendTelemetry(e.EventSendingLimitation.MinEventsPortion); } }, { key: "sendTelemetry", value: function (e) { var t = this.getTelemetryToSend(e); if (0 !== t.length)
                try {
                    this.packetInterface.send(new he(t.map((function (e) { return e.toTelemetryEvent(); }))));
                }
                catch (e) {
                    Q.debug("Error while sending ".concat(t.length, " telemetry events due to ").concat(e, "; they will be resubmitted")), this.readyEvents = this.readyEvents.concat(t);
                } } }]), t; }(); function Qe(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = I.default(e); if (t) {
        var i = I.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return R.default(this, n); }; } var Xe = function e() { O.default(this, e); }; C.default(Xe, "TWILSOCK_CONNECT", "twilsock.sdk.connect"), C.default(Xe, "TWILSOCK_INIT", "twilsock.sdk.init"), e.TwilsockClient = function (t) { E.default(f, t); var n, r, i, a, s, o, u, c, l = Qe(f); function f(t, n, r) { var i; O.default(this, f), i = l.call(this), C.default(S.default(i), "version", X), C.default(S.default(i), "offlineStorageDeferred", new We), r.continuationToken = r.continuationToken ? r.continuationToken : Ke.getStoredToken(n); var a = i.config = new Z(t, n, r); Q.setLevel(a.logLevel); var s = new je(a.url), o = new Pe(s, a); return i.channel = new Oe(s, o, a), i.registrations = new Le(o), i.upstream = new ze(o, i.channel, a), i.telemetryTracker = new Ye(a, o), i.channel.on("initialized", (function () { return i.telemetryTracker.canSendTelemetry = !0; })), s.on("disconnected", (function () { return i.telemetryTracker.canSendTelemetry = !1; })), i.registrations.on("registered", (function (e) { return i.emit("registered", e); })), i.channel.on("message", (function (e, t) { return setTimeout((function () { return i.emit("message", e, t); }), 0); })), i.channel.on("stateChanged", (function (e) { return setTimeout((function () { return i.emit("stateChanged", e); }), 0); })), i.channel.on("connectionError", (function (e) { return setTimeout((function () { return i.emit("connectionError", e); }), 0); })), i.channel.on("tokenAboutToExpire", (function () { return setTimeout((function () { return i.emit("tokenAboutToExpire"); }), 0); })), i.channel.on("tokenExpired", (function () { return setTimeout((function () { return i.emit("tokenExpired"); }), 0); })), i.channel.on("connected", (function () { return i.registrations.updateRegistrations(); })), i.channel.on("connected", (function () { return i.upstream.sendPendingMessages(); })), i.channel.on("connected", (function () { return setTimeout((function () { return i.emit("connected"); }), 0); })), i.channel.on("beforeConnect", (function () { return i.telemetryTracker.addPartialEvent(new He("Establish WebSocket connection", "", new Date), Xe.TWILSOCK_CONNECT, e.TelemetryPoint.Start); })), i.channel.on("connected", (function () { return i.telemetryTracker.addPartialEvent(new He("Establish WebSocket connection", "", new Date, new Date), Xe.TWILSOCK_CONNECT, e.TelemetryPoint.End); })), i.channel.on("beforeSendInit", (function () { return i.telemetryTracker.addPartialEvent(new He("Send Twilsock init", "", new Date), Xe.TWILSOCK_INIT, e.TelemetryPoint.Start); })), i.channel.on("initialized", (function () { return i.telemetryTracker.addPartialEvent(new He("Send Twilsock init", "Succeeded", new Date, new Date), Xe.TWILSOCK_INIT, e.TelemetryPoint.End); })), i.channel.on("sendInitFailed", (function () { return i.telemetryTracker.addPartialEvent(new He("Send Twilsock init", "Failed", new Date, new Date), Xe.TWILSOCK_INIT, e.TelemetryPoint.End); })), i.channel.on("initialized", (function (e) { i.handleStorageId(n, e), Ke.storeToken(e.continuationToken, n), setTimeout((function () { return i.emit("initialized", e); }), 0); })), i.channel.on("disconnected", (function () { return setTimeout((function () { return i.emit("disconnected"); }), 0); })), i.channel.on("disconnected", (function () { return i.upstream.rejectPendingMessages(); })), i.channel.on("disconnected", (function () { return i.offlineStorageDeferred.fail(new we("Client disconnected")); })), i.offlineStorageDeferred.promise.catch((function () { })), i; } return _.default(f, [{ key: "emit", value: function (e) { for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i]; return Q.debug("Emitting ".concat(e.toString(), "(").concat(r.map((function (e) { return JSON.stringify(e); })).join(", "), ")")), (t = T.default(I.default(f.prototype), "emit", this)).call.apply(t, [this, e].concat(r)); } }, { key: "handleStorageId", value: function (e, t) { if (t.offlineStorage)
                if (t.offlineStorage.hasOwnProperty(e))
                    try {
                        this.offlineStorageDeferred.set(Ge.create(t.offlineStorage[e])), Q.debug("Offline storage for '".concat(e, "' product: ").concat(JSON.stringify(t.offlineStorage[e]), "."));
                    }
                    catch (n) {
                        this.offlineStorageDeferred.fail(new we("Failed to parse offline storage for ".concat(e, " ").concat(JSON.stringify(t.offlineStorage[e]), ". ").concat(n, ".")));
                    }
                else
                    this.offlineStorageDeferred.fail(new we("No offline storage id for '".concat(e, "' product: ").concat(JSON.stringify(t.offlineStorage))));
            else
                this.offlineStorageDeferred.fail(new we("No offline storage id")); } }, { key: "storageId", value: function () { return this.offlineStorageDeferred.promise; } }, { key: "isConnected", get: function () { return this.channel.isConnected; } }, { key: "state", get: function () { return this.channel.state; } }, { key: "updateToken", value: (c = x.default(P.default.mark((function e(t) { return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (Q.trace("updating token '".concat(t, "'")), this.config.token !== t) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");
                    case 3: return this.config.updateToken(t), e.next = 6, this.channel.updateToken(t);
                    case 6: return e.abrupt("return", e.sent);
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return c.apply(this, arguments); }) }, { key: "setNotificationsContext", value: (u = x.default(P.default.mark((function e(t, n) { return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.registrations.setNotificationsContext(t, n);
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return u.apply(this, arguments); }) }, { key: "removeNotificationsContext", value: (o = x.default(P.default.mark((function e(t) { return P.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.registrations.removeNotificationsContext(t);
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return o.apply(this, arguments); }) }, { key: "connect", value: function () { return this.channel.connect(); } }, { key: "disconnect", value: (s = x.default(P.default.mark((function t() { return P.default.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return this.telemetryTracker.sendTelemetry(e.EventSendingLimitation.AnyEventsIncludingUnfinished), t.next = 3, this.channel.disconnect();
                    case 3: return t.abrupt("return", t.sent);
                    case 4:
                    case "end": return t.stop();
                } }), t, this); }))), function () { return s.apply(this, arguments); }) }, { key: "get", value: (a = x.default(P.default.mark((function t(n, r, i) { return P.default.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return this.telemetryTracker.sendTelemetry(e.EventSendingLimitation.AnyEvents), t.next = 3, this.upstream.send("GET", n, r, void 0, i);
                    case 3: return t.abrupt("return", t.sent);
                    case 4:
                    case "end": return t.stop();
                } }), t, this); }))), function (e, t, n) { return a.apply(this, arguments); }) }, { key: "post", value: (i = x.default(P.default.mark((function t(n, r, i, a) { return P.default.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return this.telemetryTracker.sendTelemetry(e.EventSendingLimitation.AnyEvents), t.next = 3, this.upstream.send("POST", n, r, i, a);
                    case 3: return t.abrupt("return", t.sent);
                    case 4:
                    case "end": return t.stop();
                } }), t, this); }))), function (e, t, n, r) { return i.apply(this, arguments); }) }, { key: "put", value: (r = x.default(P.default.mark((function t(n, r, i, a) { return P.default.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return this.telemetryTracker.sendTelemetry(e.EventSendingLimitation.AnyEvents), t.next = 3, this.upstream.send("PUT", n, r, i, a);
                    case 3: return t.abrupt("return", t.sent);
                    case 4:
                    case "end": return t.stop();
                } }), t, this); }))), function (e, t, n, i) { return r.apply(this, arguments); }) }, { key: "delete", value: (n = x.default(P.default.mark((function t(n, r, i, a) { return P.default.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0: return this.telemetryTracker.sendTelemetry(e.EventSendingLimitation.AnyEvents), t.next = 3, this.upstream.send("DELETE", n, r, i, a);
                    case 3: return t.abrupt("return", t.sent);
                    case 4:
                    case "end": return t.stop();
                } }), t, this); }))), function (e, t, r, i) { return n.apply(this, arguments); }) }, { key: "addTelemetryEvent", value: function (e) { this.telemetryTracker.addTelemetryEvent(e), this.telemetryTracker.sendTelemetryIfMinimalPortionCollected(); } }, { key: "addPartialTelemetryEvent", value: function (t, n, r) { this.telemetryTracker.addPartialEvent(t, n, r), r === e.TelemetryPoint.End && this.telemetryTracker.sendTelemetryIfMinimalPortionCollected(); } }]), f; }(D), e.TwilsockClient = function (e, t, n, r) { var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" === ("undefined" == typeof Reflect ? "undefined" : A.default(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (i = e[o]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s); return a > 3 && s && Object.defineProperty(t, n, s), s; }([p.validateConstructorTypes(p.nonEmptyString, p.nonEmptyString, [p.pureObject, "undefined", p.literal(null)]), function (e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : A.default(Reflect)) && "function" == typeof Reflect.metadata)
            return Reflect.metadata(e, t); }("design:paramtypes", [String, String, Object])], e.TwilsockClient); var Ze = function () { function e(t) { O.default(this, e), this.product = t, this.type = "ers", this.notification_protocol_version = 0, this.message_types = []; } return _.default(e, [{ key: "populateInitRegistrations", value: function (e) { var t = new Set(this.message_types); for (var n in e)
                t.add(e[n]); this.message_types = Array.from(t); } }]), e; }(); e.InitRegistration = Ze, e.TelemetryEventDescription = He, e.TelemetryTracker = Ye, e.TransportUnavailableError = Fe, e.Twilsock = e.TwilsockClient, e.TwilsockError = we; }(sg);
    var KS = {}, HS = o, YS = s, QS = An, XS = tn, ZS = u, eT = Q, tT = b, nT = Object.assign, rT = Object.defineProperty, iT = !nT || YS((function () { if (HS && 1 !== nT({ b: 1 }, nT(rT({}, "a", { enumerable: !0, get: function () { rT(this, "b", { value: 3, enumerable: !1 }); } }), { b: 2 })).b)
        return !0; var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach((function (e) { t[e] = e; })), 7 != nT({}, e)[n] || QS(nT({}, t)).join("") != r; })) ? function (e, t) { for (var n = eT(e), r = arguments.length, i = 1, a = XS.f, s = ZS.f; r > i;)
        for (var o, u = tT(arguments[i++]), c = a ? QS(u).concat(a(u)) : QS(u), l = c.length, f = 0; l > f;)
            o = c[f++], HS && !s.call(u, o) || (n[o] = u[o]); return n; } : nT, aT = iT;
    In({ target: "Object", stat: !0, forced: Object.assign !== aT }, { assign: aT }), function (e) { Object.defineProperty(e, "__esModule", { value: !0 }); var t = og.exports, n = rv.exports, r = km.exports, i = iv.exports, a = sv.exports, s = uv.exports, o = lg, u = Ph.exports, c = sg, l = ov.exports, f = wm.exports, d = bm, p = qh.exports, h = Zh.exports, v = Xf.exports, y = Gg, m = ih; function g(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; } function b(e) { if (e && e.__esModule)
        return e; var t = Object.create(null); return e && Object.keys(e).forEach((function (n) { if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function () { return e[n]; } });
    } })), t.default = e, Object.freeze(t); } var k = g(t), w = g(n), x = g(r), _ = g(i), S = g(a), T = g(s), E = g(o), R = g(u), I = g(l), O = g(f), C = g(p), P = g(h), A = b(v), j = b(y); function M(e, t, n, r) { var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" === ("undefined" == typeof Reflect ? "undefined" : R.default(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (i = e[o]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s); return a > 3 && s && Object.defineProperty(t, n, s), s; } function L(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : R.default(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t); } function N() { } function U() { U.init.call(this); } function D(e) { return void 0 === e._maxListeners ? U.defaultMaxListeners : e._maxListeners; } function F(e, t, n) { if (t)
        e.call(n);
    else
        for (var r = e.length, i = J(e, r), a = 0; a < r; ++a)
            i[a].call(n); } function B(e, t, n, r) { if (t)
        e.call(n, r);
    else
        for (var i = e.length, a = J(e, i), s = 0; s < i; ++s)
            a[s].call(n, r); } function q(e, t, n, r, i) { if (t)
        e.call(n, r, i);
    else
        for (var a = e.length, s = J(e, a), o = 0; o < a; ++o)
            s[o].call(n, r, i); } function z(e, t, n, r, i, a) { if (t)
        e.call(n, r, i, a);
    else
        for (var s = e.length, o = J(e, s), u = 0; u < s; ++u)
            o[u].call(n, r, i, a); } function W(e, t, n, r) { if (t)
        e.apply(n, r);
    else
        for (var i = e.length, a = J(e, i), s = 0; s < i; ++s)
            a[s].apply(n, r); } function G(e, t, n, r) { var i, a, s, o; if ("function" != typeof n)
        throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = new N, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = D(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, o = u, "function" == typeof console.warn ? console.warn(o) : console.log(o);
        }
    }
    else
        s = a[t] = n, ++e._eventsCount; return e; } function $(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; } function V(e) { var t = this._events; if (t) {
        var n = t[e];
        if ("function" == typeof n)
            return 1;
        if (n)
            return n.length;
    } return 0; } function J(e, t) { for (var n = new Array(t); t--;)
        n[t] = e[t]; return n; } N.prototype = Object.create(null), U.EventEmitter = U, U.usingDomains = !1, U.prototype.domain = void 0, U.prototype._events = void 0, U.prototype._maxListeners = void 0, U.defaultMaxListeners = 10, U.init = function () { this.domain = null, U.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new N, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, U.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, U.prototype.getMaxListeners = function () { return D(this); }, U.prototype.emit = function (e) { var t, n, r, i, a, s, o, u = "error" === e; if (s = this._events)
        u = u && null == s.error;
    else if (!u)
        return !1; if (o = this.domain, u) {
        if (t = arguments[1], !o) {
            if (t instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    } if (!(n = s[e]))
        return !1; var l = "function" == typeof n; switch (r = arguments.length) {
        case 1:
            F(n, l, this);
            break;
        case 2:
            B(n, l, this, arguments[1]);
            break;
        case 3:
            q(n, l, this, arguments[1], arguments[2]);
            break;
        case 4:
            z(n, l, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
            W(n, l, this, i);
    } return !0; }, U.prototype.addListener = function (e, t) { return G(this, e, t, !1); }, U.prototype.on = U.prototype.addListener, U.prototype.prependListener = function (e, t) { return G(this, e, t, !0); }, U.prototype.once = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.on(e, $(this, e, t)), this; }, U.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, $(this, e, t)), this; }, U.prototype.removeListener = function (e, t) { var n, r, i, a, s; if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
        return this; if (!(n = r[e]))
        return this; if (n === t || n.listener && n.listener === t)
        0 == --this._eventsCount ? this._events = new N : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, a = n.length; a-- > 0;)
            if (n[a] === t || n[a].listener && n[a].listener === t) {
                s = n[a].listener, i = a;
                break;
            }
        if (i < 0)
            return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount)
                return this._events = new N, this;
            delete r[e];
        }
        else
            !function (e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
                e[n] = e[r]; e.pop(); }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    } return this; }, U.prototype.off = function (e, t) { return this.removeListener(e, t); }, U.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
        return this; if (!n.removeListener)
        return 0 === arguments.length ? (this._events = new N, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new N : delete n[e]), this; if (0 === arguments.length) {
        for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
            "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new N, this._eventsCount = 0, this;
    } if ("function" == typeof (t = n[e]))
        this.removeListener(e, t);
    else if (t)
        do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]); return this; }, U.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }(t) : []; }, U.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : V.call(e, t); }, U.prototype.listenerCount = V, U.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; }; var K = A.getLogger("twilio-notificatiions"); function H(e, t) { return ["".concat((new Date).toISOString(), " Twilio.Notifications ").concat(e, ":")].concat(Array.from(t)); } var Y = new (function () { function e() { w.default(this, e); } return x.default(e, [{ key: "setLevel", value: function (e) { K.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; K.trace.apply(null, H("T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; K.debug.apply(null, H("D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; K.info.apply(null, H("I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; K.warn.apply(null, H("W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]; K.error.apply(null, H("E", t)); } }]), e; }()); function Q(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = T.default(e); if (t) {
        var i = T.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return S.default(this, n); }; } var X = function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set; w.default(this, e), this.token = t, this.notificationId = n, this.messageTypes = r; }; function Z(e, t) { var n = new Set; return e.notificationId !== t.notificationId && n.add("notificationId"), e.token !== t.token && n.add("token"), function (e, t) { return [].concat(P.default(P.default(e).filter((function (e) { return !t.has(e); }))), P.default(P.default(t).filter((function (t) { return !e.has(t); })))); }(e.messageTypes, t.messageTypes).length > 0 && n.add("messageType"), [n.size > 0, n]; } var ee = function (e) { _.default(r, e); var t, n = Q(r); function r(e) { var t; return w.default(this, r), t = n.call(this), O.default(I.default(t), "desiredState", new X), O.default(I.default(t), "currentState", new X), O.default(I.default(t), "_hasActiveAttempt", !1), t.channelType = e, t; } return x.default(r, [{ key: "setNotificationId", value: function (e) { this.desiredState.notificationId = e; } }, { key: "isActive", value: function () { return "" !== this.desiredState.notificationId; } }, { key: "subscribe", value: function (e) { this.desiredState.messageTypes.has(e) ? Y.debug("message type '".concat(e, "' for channel ").concat(this.channelType, " is already registered")) : this.desiredState.messageTypes.add(e); } }, { key: "unsubscribe", value: function (e) { this.desiredState.messageTypes.has(e) && this.desiredState.messageTypes.delete(e); } }, { key: "updateToken", value: function (e) { this.desiredState.token = e; } }, { key: "commitChanges", value: (t = k.default(E.default.mark((function e() { var t, n, r, i, a, s; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!this._hasActiveAttempt) {
                            e.next = 3;
                            break;
                        }
                        throw Y.error("One registration attempt is already in progress"), new Error("One registration attempt is already in progress");
                    case 3:
                        if (t = Z(this.desiredState, this.currentState), n = C.default(t, 2), r = n[0], i = n[1], r) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return");
                    case 6:
                        if (this.currentState.notificationId || i.delete("notificationId"), Y.trace("Persisting ".concat(this.channelType, " registration"), i, this.desiredState), e.prev = 8, this._hasActiveAttempt = !0, (a = new X).token = this.desiredState.token, a.notificationId = this.desiredState.notificationId, a.messageTypes = new Set(this.desiredState.messageTypes), !(a.messageTypes.size > 0)) {
                            e.next = 24;
                            break;
                        }
                        return e.next = 17, this.updateRegistration(a, i);
                    case 17:
                        s = e.sent, this.currentState.token = s.token, this.currentState.notificationId = s.notificationId, this.currentState.messageTypes = new Set(s.messageTypes), this.emit("stateChanged", this.channelType, "registered", this.currentState), e.next = 30;
                        break;
                    case 24: return e.next = 26, this.removeRegistration();
                    case 26: this.currentState.token = a.token, this.currentState.notificationId = a.notificationId, this.currentState.messageTypes.clear(), this.emit("stateChanged", this.channelType, "unregistered", this.currentState);
                    case 30:
                        e.next = 35;
                        break;
                    case 32: throw e.prev = 32, e.t0 = e.catch(8), e.t0;
                    case 35: return e.prev = 35, this._hasActiveAttempt = !1, e.finish(35);
                    case 38:
                    case "end": return e.stop();
                } }), e, this, [[8, 32, 35, 38]]); }))), function () { return t.apply(this, arguments); }) }]), r; }(U); function te(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = T.default(e); if (t) {
        var i = T.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return S.default(this, n); }; } var ne = { min: 2e3, max: 12e4, randomness: .2 }, re = function (e) { _.default(a, e); var t, n, r, i = te(a); function a(e, t, n, r) { var s; return w.default(this, a), s = i.call(this, e), O.default(I.default(s), "registrationId", null), s.context = t, s.twilsock = n, s.registrarUrl = r, s; } return x.default(a, [{ key: "updateRegistration", value: (r = k.default(E.default.mark((function e(t, n) { var r, i, a, s, o, u = this; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!n.has("notificationId")) {
                            e.next = 3;
                            break;
                        }
                        return e.next = 3, this.removeRegistration();
                    case 3:
                        if (t.notificationId && t.notificationId.length) {
                            e.next = 6;
                            break;
                        }
                        throw Y.error("No push notification ID for registration"), new Error("No push notification ID for registration");
                    case 6: return Y.trace("Registering", this.channelType, t), r = { endpoint_platform: this.context.platform, channel_type: this.channelType, version: this.context.protocolVersion.toString(), message_types: Array.from(t.messageTypes), data: { registration_id: t.notificationId } }, i = this.context.productId, a = "".concat(this.registrarUrl, "?productId=").concat(i), s = { "Content-Type": "application/json" }, Y.trace("Creating registration for channel ".concat(this.channelType)), e.prev = 12, e.next = 15, new d.AsyncRetrier(ne).run((function () { return u.twilsock.post(a, s, r, i); }));
                    case 15:
                        o = e.sent, this.registrationId = o.body.id, Y.debug("Registration created: ", o), e.next = 24;
                        break;
                    case 20: throw e.prev = 20, e.t0 = e.catch(12), Y.error("Registration failed: ", e.t0), e.t0;
                    case 24: return e.abrupt("return", t);
                    case 25:
                    case "end": return e.stop();
                } }), e, this, [[12, 20]]); }))), function (e, t) { return r.apply(this, arguments); }) }, { key: "removeRegistration", value: (n = k.default(E.default.mark((function e() { var t, n, r, i = this; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.registrationId) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");
                    case 2: return t = this.context.productId, n = "".concat(this.registrarUrl, "/").concat(this.registrationId, "?productId=").concat(t), r = { "Content-Type": "application/json" }, Y.trace("Removing registration for ".concat(this.channelType)), e.prev = 6, e.next = 9, new d.AsyncRetrier(Object.assign(ne, { maxAttemptsCount: 3 })).run((function () { return i.twilsock.delete(n, r, {}, t); }));
                    case 9:
                        this.registrationId = null, this.currentState.notificationId = "", Y.debug("Registration removed for ".concat(this.channelType)), e.next = 18;
                        break;
                    case 14: throw e.prev = 14, e.t0 = e.catch(6), Y.error("Failed to remove registration ", this.channelType, e.t0), e.t0;
                    case 18:
                    case "end": return e.stop();
                } }), e, this, [[6, 14]]); }))), function () { return n.apply(this, arguments); }) }, { key: "sendDeviceRemoveRequest", value: (t = k.default(E.default.mark((function e(t) { var n, r, i, a, s = this; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if ("" !== t) {
                            e.next = 2;
                            break;
                        }
                        throw new Error("Empty registration ID");
                    case 2: return n = this.context.productId, r = "".concat(this.registrarUrl, "?productId=").concat(n), i = { "Content-Type": "application/json" }, a = { binding_type: this.channelType, address: t }, e.prev = 6, Y.trace("Removing old registrations for ".concat(this.channelType)), e.next = 10, new d.AsyncRetrier(Object.assign(ne, { maxAttemptsCount: 3 })).run((function () { return s.twilsock.delete(r, i, a, n); }));
                    case 10:
                        this.registrationId = null, this.currentState.notificationId = "", Y.debug("Registration removed for ".concat(this.channelType)), e.next = 19;
                        break;
                    case 15: throw e.prev = 15, e.t0 = e.catch(6), Y.error("Failed to remove registration ", this.channelType, e.t0), e.t0;
                    case 19:
                    case "end": return e.stop();
                } }), e, this, [[6, 15]]); }))), function (e) { return t.apply(this, arguments); }) }]), a; }(ee); function ie(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = T.default(e); if (t) {
        var i = T.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return S.default(this, n); }; } var ae, se = function (e) { _.default(a, e); var t, n, r, i = ie(a); function a(e, t, n) { var r; return w.default(this, a), r = i.call(this, "twilsock"), O.default(I.default(r), "contextId", j.v4()), r.productId = e, r.platform = t, r.twilsock = n, r; } return x.default(a, [{ key: "updateRegistration", value: (r = k.default(E.default.mark((function e(t, n) { var r, i; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (n.has("messageType")) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", t);
                    case 2: return r = Array.from(t.messageTypes), i = { product_id: this.productId, notification_protocol_version: 4, endpoint_platform: this.platform, message_types: r }, e.prev = 4, e.next = 7, this.twilsock.setNotificationsContext(this.contextId, i);
                    case 7:
                        e.next = 13;
                        break;
                    case 9: throw e.prev = 9, e.t0 = e.catch(4), Y.error("Failed to update twilsock notification context: ".concat(e.t0)), e.t0;
                    case 13: return e.abrupt("return", t);
                    case 14:
                    case "end": return e.stop();
                } }), e, this, [[4, 9]]); }))), function (e, t) { return r.apply(this, arguments); }) }, { key: "removeRegistration", value: (n = k.default(E.default.mark((function e() { return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, e.next = 3, this.twilsock.removeNotificationsContext(this.contextId);
                    case 3:
                        e.next = 9;
                        break;
                    case 5: throw e.prev = 5, e.t0 = e.catch(0), Y.error("Failed to remove twilsock notification context: ".concat(e.t0)), e.t0;
                    case 9:
                    case "end": return e.stop();
                } }), e, this, [[0, 5]]); }))), function () { return n.apply(this, arguments); }) }, { key: "sendDeviceRemoveRequest", value: (t = k.default(E.default.mark((function e(t) { return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                    case "end": return e.stop();
                } }), e); }))), function (e) { return t.apply(this, arguments); }) }]), a; }(ee); function oe(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = T.default(e); if (t) {
        var i = T.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return S.default(this, n); }; } var ue = m.literal("apn", "fcm", "twilsock"); e.Notifications = ae = function (e) { _.default(Client, e); var t, n, r, i = oe(Client); function Client(e) { var t, n, r, a, s, o, u, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; w.default(this, Client), u = i.call(this), l.logLevel = null !== (t = l.logLevel) && void 0 !== t ? t : "error", Y.setLevel(l.logLevel); var f = null !== (n = l.productId) && void 0 !== n ? n : "notifications", d = !l.twilsockClient, p = l.twilsockClient = null !== (r = l.twilsockClient) && void 0 !== r ? r : new c.TwilsockClient(e, f, l), h = null !== (a = l.notifications) && void 0 !== a ? a : {}, v = null !== (s = null !== (o = h.region) && void 0 !== o ? o : l.region) && void 0 !== s ? s : "us1", y = "https://ers.".concat(v, ".twilio.com/v1/registrations"), m = h.ersUrl || y; u.connectors = new Map; var g = ae._detectPlatform(); return u.connectors.set("apn", new re("apn", { protocolVersion: 4, productId: f, platform: g }, p, m)), u.connectors.set("fcm", new re("fcm", { protocolVersion: 3, productId: f, platform: g }, p, m)), u.connectors.set("twilsock", new se(f, g, p)), p.on("stateChanged", (function (e) { return u.emit("transportState", e); })), u._connector("twilsock").on("stateChanged", (function (e, t, n) { return u.emit("stateChanged", e, t, n); })), u._connector("apn").on("stateChanged", (function (e, t, n) { return u.emit("stateChanged", e, t, n); })), u._connector("fcm").on("stateChanged", (function (e, t, n) { return u.emit("stateChanged", e, t, n); })), p.on("message", (function (e, t) { return u._routeMessage(e, t); })), u.updateToken(e), d && (p.connect(), u.twilsock = p), u; } return x.default(Client, [{ key: "shutdown", value: (r = k.default(E.default.mark((function e() { return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.connectors.clear(), !this.twilsock) {
                            e.next = 4;
                            break;
                        }
                        return e.next = 4, this.twilsock.disconnect();
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return r.apply(this, arguments); }) }, { key: "setPushRegistrationId", value: function (e, t) { Y.debug("Set ".concat(e, " push registration id '").concat(t, "'")), this._connector(e).setNotificationId(t); } }, { key: "subscribe", value: function (e, t) { Y.debug("Add ".concat(e, " subscriptions for message type ").concat(t)), this._connector(e).subscribe(t); } }, { key: "unsubscribe", value: function (e, t) { Y.debug("Remove ".concat(e, " subscriptions for message type ").concat(t)), this._connector(e).unsubscribe(t); } }, { key: "updateToken", value: function (e) { this.connectors.forEach((function (t) { return t.updateToken(e); })); } }, { key: "commitChanges", value: (n = k.default(E.default.mark((function e() { var t; return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = [], this.connectors.forEach((function (e) { e.isActive() && t.push(e.commitChanges()); })), e.next = 4, Promise.all(t);
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }, { key: "removeRegistrations", value: (t = k.default(E.default.mark((function e(t, n) { return E.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._connector(t).sendDeviceRemoveRequest(n);
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, n) { return t.apply(this, arguments); }) }, { key: "handlePushNotification", value: function (e) { return { messageType: e.twi_message_type, payload: e.payload }; } }, { key: "_routeMessage", value: function (e, t) { Y.debug("Notification message arrived: ", e, t), this.emit("message", e, t); } }, { key: "_connector", value: function (e) { var t = this.connectors.get(e); if (!t)
                throw new Error("Unknown channel type: ".concat(e)); return t; } }], [{ key: "_detectPlatform", value: function () { var e = ""; return "undefined" != typeof navigator ? (e = "unknown", void 0 !== navigator.product && (e = navigator.product), void 0 !== navigator.userAgent && (e = navigator.userAgent)) : e = "web", e.substring(0, 128); } }]), Client; }(U), M([m.validateTypes(ue, m.nonEmptyString), L("design:type", Function), L("design:paramtypes", [String, String]), L("design:returntype", void 0)], e.Notifications.prototype, "setPushRegistrationId", null), M([m.validateTypes(ue, m.nonEmptyString), L("design:type", Function), L("design:paramtypes", [String, String]), L("design:returntype", void 0)], e.Notifications.prototype, "subscribe", null), M([m.validateTypes(ue, m.nonEmptyString), L("design:type", Function), L("design:paramtypes", [String, String]), L("design:returntype", void 0)], e.Notifications.prototype, "unsubscribe", null), M([m.validateTypes(m.nonEmptyString), L("design:type", Function), L("design:paramtypes", [String]), L("design:returntype", void 0)], e.Notifications.prototype, "updateToken", null), M([m.validateTypesAsync(ue, m.nonEmptyString), L("design:type", Function), L("design:paramtypes", [String, String]), L("design:returntype", Promise)], e.Notifications.prototype, "removeRegistrations", null), e.Notifications = ae = M([m.validateConstructorTypes(m.nonEmptyString, [m.pureObject, "undefined", m.literal(null)]), L("design:paramtypes", [String, Object])], e.Notifications); }(KS);
    var sT = {};
    Object.defineProperty(sT, "__esModule", { value: !0 });
    var oT = og.exports, uT = rv.exports, cT = km.exports, lT = ov.exports, fT = iv.exports, dT = sv.exports, pT = uv.exports, hT = wm.exports, vT = lg, yT = Ph.exports, mT = ih, gT = sg, bT = bS.exports, kT = Xf.exports, wT = qh.exports, xT = bm, _T = Gg, ST = ug.exports, TT = _S.exports;
    function ET(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; }
    function RT(e) { if (e && e.__esModule)
        return e; var t = Object.create(null); return e && Object.keys(e).forEach((function (n) { if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function () { return e[n]; } });
    } })), t.default = e, Object.freeze(t); }
    var IT = ET(oT), OT = ET(uT), CT = ET(cT), PT = ET(lT), AT = ET(fT), jT = ET(dT), MT = ET(pT), LT = ET(hT), NT = ET(vT), UT = ET(yT), DT = ET(bT), FT = RT(kT), BT = ET(wT), qT = RT(_T), zT = ET(ST), WT = RT(TT);
    function GT(e, t, n, r) { var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" === ("undefined" == typeof Reflect ? "undefined" : UT.default(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (i = e[o]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s); return a > 3 && s && Object.defineProperty(t, n, s), s; }
    function $T(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : UT.default(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t); }
    function VT() { }
    function JT() { JT.init.call(this); }
    function KT(e) { return void 0 === e._maxListeners ? JT.defaultMaxListeners : e._maxListeners; }
    function HT(e, t, n) { if (t)
        e.call(n);
    else
        for (var r = e.length, i = rE(e, r), a = 0; a < r; ++a)
            i[a].call(n); }
    function YT(e, t, n, r) { if (t)
        e.call(n, r);
    else
        for (var i = e.length, a = rE(e, i), s = 0; s < i; ++s)
            a[s].call(n, r); }
    function QT(e, t, n, r, i) { if (t)
        e.call(n, r, i);
    else
        for (var a = e.length, s = rE(e, a), o = 0; o < a; ++o)
            s[o].call(n, r, i); }
    function XT(e, t, n, r, i, a) { if (t)
        e.call(n, r, i, a);
    else
        for (var s = e.length, o = rE(e, s), u = 0; u < s; ++u)
            o[u].call(n, r, i, a); }
    function ZT(e, t, n, r) { if (t)
        e.apply(n, r);
    else
        for (var i = e.length, a = rE(e, i), s = 0; s < i; ++s)
            a[s].apply(n, r); }
    function eE(e, t, n, r) { var i, a, s, o; if ("function" != typeof n)
        throw new TypeError('"listener" argument must be a function'); if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]) : (a = e._events = new VT, e._eventsCount = 0), s) {
        if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = KT(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, o = u, "function" == typeof console.warn ? console.warn(o) : console.log(o);
        }
    }
    else
        s = a[t] = n, ++e._eventsCount; return e; }
    function tE(e, t, n) { var r = !1; function i() { e.removeListener(t, i), r || (r = !0, n.apply(e, arguments)); } return i.listener = n, i; }
    function nE(e) { var t = this._events; if (t) {
        var n = t[e];
        if ("function" == typeof n)
            return 1;
        if (n)
            return n.length;
    } return 0; }
    function rE(e, t) { for (var n = new Array(t); t--;)
        n[t] = e[t]; return n; }
    VT.prototype = Object.create(null), JT.EventEmitter = JT, JT.usingDomains = !1, JT.prototype.domain = void 0, JT.prototype._events = void 0, JT.prototype._maxListeners = void 0, JT.defaultMaxListeners = 10, JT.init = function () { this.domain = null, JT.usingDomains && undefined.active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new VT, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, JT.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this; }, JT.prototype.getMaxListeners = function () { return KT(this); }, JT.prototype.emit = function (e) { var t, n, r, i, a, s, o, u = "error" === e; if (s = this._events)
        u = u && null == s.error;
    else if (!u)
        return !1; if (o = this.domain, u) {
        if (t = arguments[1], !o) {
            if (t instanceof Error)
                throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c;
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1;
    } if (!(n = s[e]))
        return !1; var l = "function" == typeof n; switch (r = arguments.length) {
        case 1:
            HT(n, l, this);
            break;
        case 2:
            YT(n, l, this, arguments[1]);
            break;
        case 3:
            QT(n, l, this, arguments[1], arguments[2]);
            break;
        case 4:
            XT(n, l, this, arguments[1], arguments[2], arguments[3]);
            break;
        default:
            for (i = new Array(r - 1), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
            ZT(n, l, this, i);
    } return !0; }, JT.prototype.addListener = function (e, t) { return eE(this, e, t, !1); }, JT.prototype.on = JT.prototype.addListener, JT.prototype.prependListener = function (e, t) { return eE(this, e, t, !0); }, JT.prototype.once = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.on(e, tE(this, e, t)), this; }, JT.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, tE(this, e, t)), this; }, JT.prototype.removeListener = function (e, t) { var n, r, i, a, s; if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
        return this; if (!(n = r[e]))
        return this; if (n === t || n.listener && n.listener === t)
        0 == --this._eventsCount ? this._events = new VT : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, a = n.length; a-- > 0;)
            if (n[a] === t || n[a].listener && n[a].listener === t) {
                s = n[a].listener, i = a;
                break;
            }
        if (i < 0)
            return this;
        if (1 === n.length) {
            if (n[0] = void 0, 0 == --this._eventsCount)
                return this._events = new VT, this;
            delete r[e];
        }
        else
            !function (e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
                e[n] = e[r]; e.pop(); }(n, i);
        r.removeListener && this.emit("removeListener", e, s || t);
    } return this; }, JT.prototype.off = function (e, t) { return this.removeListener(e, t); }, JT.prototype.removeAllListeners = function (e) { var t, n; if (!(n = this._events))
        return this; if (!n.removeListener)
        return 0 === arguments.length ? (this._events = new VT, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new VT : delete n[e]), this; if (0 === arguments.length) {
        for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
            "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), this._events = new VT, this._eventsCount = 0, this;
    } if ("function" == typeof (t = n[e]))
        this.removeListener(e, t);
    else if (t)
        do {
            this.removeListener(e, t[t.length - 1]);
        } while (t[0]); return this; }, JT.prototype.listeners = function (e) { var t, n = this._events; return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n]; return t; }(t) : []; }, JT.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : nE.call(e, t); }, JT.prototype.listenerCount = nE, JT.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; };
    var iE = function () { function e(t) { OT.default(this, e), this.base = t, this.args = new Array, this.paths = new Array; } return CT.default(e, [{ key: "pathSegment", value: function (e) { return this.paths.push(encodeURIComponent(e)), this; } }, { key: "queryParam", value: function (e, t) { return void 0 !== t && this.args.push(encodeURIComponent(e) + "=" + encodeURIComponent(t)), this; } }, { key: "build", value: function () { var e = this.base; return this.paths.length && (e += "/" + this.paths.join("/")), this.args.length && (e += "?" + this.args.join("&")), e; } }]), e; }();
    function aE(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var sE = function (e) { AT.default(n, e); var t = aE(n); function n(e) { var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return OT.default(this, n), (r = t.call(this)).name = r.constructor.name, r.message = "".concat(e, " (status: ").concat(i, ", code: ").concat(a, ")"), r.status = i, r.code = a, r; } return n; }(DT.default(Error)), oE = function (e) { AT.default(n, e); var t = aE(n); function n(e) { var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 ? arguments[3] : void 0; return OT.default(this, n), (r = t.call(this, e, i, a)).body = s, r; } return n; }(sE);
    function uE(e) { return JSON.parse(JSON.stringify(e)); }
    function cE(e) { if (!(void 0 === e || lE(e)))
        throw new sE("Invalid pageSize parameter. Expected a positive integer, was '".concat(e, "'."), 400, 20007); }
    function lE(e) { return function (e) { return !isNaN(parseInt(e)) && isFinite(e); }(e) && e > 0; }
    var fE = FT.getLogger("twilio-sync");
    function dE(e, t) { return ["".concat((new Date).toISOString(), " Sync ").concat(e, ":")].concat(Array.from(t)); }
    var pE = function (e) { fE.setLevel(e); }, hE = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; fE.trace.apply(null, dE("T", t)); }, vE = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; fE.debug.apply(null, dE("D", t)); }, yE = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; fE.warn.apply(null, dE("W", t)); }, mE = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; fE.error.apply(null, dE("E", t)); }, gE = "/v4/Subscriptions", bE = "/v3/Maps", kE = "/v3/Lists", wE = "/v3/Documents", xE = "/v3/Streams", _E = "/v3/Insights";
    function SE(e, t, n) { return e && void 0 !== e[t] ? e[t] : n; }
    var TE = function () { function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; OT.default(this, e); var n = t.region || "us1", r = "https://cds.".concat(n, ".twilio.com"), i = t.cdsUri || r; this.settings = { subscriptionsUri: i + gE, documentsUri: i + wE, listsUri: i + kE, mapsUri: i + bE, streamsUri: i + xE, insightsUri: i + _E, sessionStorageEnabled: SE(t.Sync, "enableSessionStorage", !0), productId: t.productId }; } return CT.default(e, [{ key: "subscriptionsUri", get: function () { return this.settings.subscriptionsUri; } }, { key: "documentsUri", get: function () { return this.settings.documentsUri; } }, { key: "listsUri", get: function () { return this.settings.listsUri; } }, { key: "mapsUri", get: function () { return this.settings.mapsUri; } }, { key: "streamsUri", get: function () { return this.settings.streamsUri; } }, { key: "insightsUri", get: function () { return this.settings.insightsUri; } }, { key: "backoffConfig", get: function () { return this.settings.backoffConfig || {}; } }, { key: "sessionStorageEnabled", get: function () { return this.settings.sessionStorageEnabled; } }, { key: "productId", get: function () { return this.settings.productId; } }]), e; }();
    function EE(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return RE(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return RE(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function RE(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var IE = function () { function e(t) { OT.default(this, e), this.localObject = t, this.pendingCorrelationId = null, this.pendingAction = null, this.established = !1, this.retryCount = 0; } return CT.default(e, [{ key: "sid", get: function () { return this.localObject.sid; } }, { key: "type", get: function () { return this.localObject.type; } }, { key: "lastEventId", get: function () { return this.localObject.lastEventId; } }, { key: "indexName", get: function () { return this.localObject.indexName; } }, { key: "queryString", get: function () { return this.localObject.queryString; } }, { key: "isEstablished", get: function () { return this.established; } }, { key: "update", value: function (e, t) { this.localObject._update(e, t); } }, { key: "updatePending", value: function (e, t) { this.pendingAction = e, this.pendingCorrelationId = t; } }, { key: "reset", value: function () { this.updatePending(null, null), this.retryCount = 0, this.established = !1, this.setSubscriptionState("none"); } }, { key: "markAsFailed", value: function (e) { this.rejectedWithError = e.error, this.updatePending(null, null), this.localObject.reportFailure(new sE("Failed to subscribe on service events: ".concat(e.error.message), e.error.status, e.error.code)); } }, { key: "complete", value: function (e) { this.updatePending(null, null), this.established = !0, this.localObject._advanceLastEventId(e); } }, { key: "setSubscriptionState", value: function (e) { this.localObject._setSubscriptionState(e); } }]), e; }(), OE = function () { function e(t) { var n = this; OT.default(this, e), LT.default(this, "isConnected", !1), LT.default(this, "maxBatchSize", 100), LT.default(this, "subscriptionTtlTimer", null), LT.default(this, "pendingPokeReason", null), this.services = t, this.subscriptions = new Map, this.persisted = new Map, this.latestPokeResponseArrivalTimestampByCorrelationId = new Map; this.backoff = xT.Backoff.exponential(Object.assign({ randomisationFactor: .2, initialDelay: 100, maxDelay: 12e4 }, this.services.config.backoffConfig)), this.backoff.on("ready", (function () { var e = n.getSubscriptionUpdateBatch(), t = e.action, r = e.subscriptions; t ? n.applyNewSubscriptionUpdateBatch(t, r) : (n.backoff.reset(), vE("All subscriptions resolved.")); })); } var t; return CT.default(e, [{ key: "getSubscriptionUpdateBatch", value: function () { function e(e, t, n, r) { var i, a = [], s = EE(e); try {
                for (s.s(); !(i = s.n()).done;) {
                    var o = BT.default(i.value, 2), u = o[0], c = o[1];
                    if (!t.get(u) && n !== c.pendingAction && !c.rejectedWithError && (a.push(c), r && a.length >= r))
                        break;
                }
            }
            catch (e) {
                s.e(e);
            }
            finally {
                s.f();
            } return a; } var t = e(this.subscriptions, this.persisted, "establish", this.maxBatchSize); if (t.length > 0)
                return { action: "establish", subscriptions: t }; var n = e(this.persisted, this.subscriptions, "cancel", this.maxBatchSize); return n.length > 0 ? { action: "cancel", subscriptions: n } : { action: null, subscriptions: null }; } }, { key: "persist", value: function () { this.backoff.backoff(); } }, { key: "applyNewSubscriptionUpdateBatch", value: (t = IT.default(NT.default.mark((function e(t, n) { var r, i, a, s, o, u, c, l, f, d, p, h, v = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.isConnected) {
                            e.next = 4;
                            break;
                        }
                        return vE("Twilsock connection (required for subscription) not ready; waitingâ€¦"), this.backoff.reset(), e.abrupt("return");
                    case 4:
                        n = this.processLocalActions(t, n), r = (new Date).getTime(), i = EE(n);
                        try {
                            for (i.s(); !(a = i.n()).done;)
                                s = a.value, this.recordActionAttemptOn(s, t, r);
                        }
                        catch (e) {
                            i.e(e);
                        }
                        finally {
                            i.f();
                        }
                        return o = this.pendingPokeReason, this.pendingPokeReason = null, e.prev = 10, e.next = 13, this.request(t, r, o, n);
                    case 13:
                        u = e.sent, c = u.body.max_batch_size, !isNaN(parseInt(c)) && isFinite(c) && c > 0 && (this.maxBatchSize = c), this.subscriptionTtlTimer || (l = u.body.ttl_in_s, !isNaN(parseFloat(l)) && isFinite(l) && l > 0 && (this.subscriptionTtlTimer = setTimeout((function () { return v.onSubscriptionTtlElapsed(); }), 1e3 * l))), "establish" === t && (f = u.body.estimated_delivery_in_ms, !isNaN(parseFloat(f)) && isFinite(f) && f > 0 ? setTimeout((function () { return v.verifyPokeDelivery(r, f, n); }), f) : mE("Invalid timeout: ".concat(f)), n.filter((function (e) { return e.pendingCorrelationId === r; })).forEach((function (e) { return e.setSubscriptionState("response_in_flight"); }))), this.backoff.reset(), e.next = 26;
                        break;
                    case 21:
                        e.prev = 21, e.t0 = e.catch(10), d = EE(n);
                        try {
                            for (d.s(); !(p = d.n()).done;)
                                h = p.value, this.recordActionFailureOn(h, t);
                        }
                        catch (e) {
                            d.e(e);
                        }
                        finally {
                            d.f();
                        }
                        e.t0 instanceof gT.TransportUnavailableError ? (vE("Twilsock connection (required for subscription) not ready (c:".concat(r, "); waitingâ€¦")), this.backoff.reset()) : (vE("Failed an attempt to ".concat(t, " subscriptions (c:").concat(r, "); retrying"), e.t0), this.persist());
                    case 26:
                    case "end": return e.stop();
                } }), e, this, [[10, 21]]); }))), function (e, n) { return t.apply(this, arguments); }) }, { key: "verifyPokeDelivery", value: function (e, t, n) { var r = this, i = this.latestPokeResponseArrivalTimestampByCorrelationId.get(e), a = i ? (new Date).getTime() - i : t; a >= t ? (n.filter((function (t) { return t.pendingCorrelationId === e; })).forEach((function (e) { e.updatePending(null, null), e.retryCount++, r.persisted.delete(e.sid); })), this.persist(), this.latestPokeResponseArrivalTimestampByCorrelationId.delete(e)) : setTimeout((function () { return r.verifyPokeDelivery(e, t, n); }), t - a); } }, { key: "processLocalActions", value: function (e, t) { return "cancel" === e ? t.filter((function (e) { return !e.rejectedWithError; })) : t; } }, { key: "recordActionAttemptOn", value: function (e, t, n) { if (e.setSubscriptionState("request_in_flight"), "establish" === t)
                this.persisted.set(e.sid, e), e.updatePending(t, n);
            else {
                var r = this.persisted.get(e.sid);
                r && r.updatePending(t, n);
            } } }, { key: "recordActionFailureOn", value: function (e, t) { e.setSubscriptionState("none"), e.updatePending(null, null), "establish" === t && this.persisted.delete(e.sid); } }, { key: "request", value: function (e, t, n, r) { var i = r.map((function (t) { return { object_sid: t.sid, object_type: t.type, last_event_id: "establish" === e ? t.lastEventId : void 0, index_name: "establish" === e ? t.indexName : void 0, query_string: "establish" === e ? t.queryString : void 0 }; })), a = r.filter((function (e) { return e.retryCount > 0; })).length; vE("Attempting '".concat(e, "' request (c:").concat(t, "):"), i); var s = { event_protocol_version: 3, action: e, correlation_id: t, retried_requests: a, ttl_in_s: -1, requests: i }; return "ttl" === n && (s.reason = n), this.services.network.post(this.services.config.subscriptionsUri, s); } }, { key: "add", value: function (e, t) { vE("Establishing intent to subscribe to ".concat(e)); var n = this.subscriptions.get(e); n && t && n.lastEventId === t.lastEventId || (this.persisted.delete(e), this.subscriptions.set(e, new IE(t)), this.persist()); } }, { key: "remove", value: function (e) { vE("Establishing intent to unsubscribe from ".concat(e)), this.subscriptions.delete(e) && this.persist(); } }, { key: "acceptMessage", value: function (e, t) { var n; switch (hE("Subscriptions received", e), e.correlation_id && this.latestPokeResponseArrivalTimestampByCorrelationId.set(e.correlation_id, (new Date).getTime()), e.event_type) {
                case "subscription_established":
                    this.applySubscriptionEstablishedMessage(e.event, e.correlation_id);
                    break;
                case "subscription_canceled":
                    this.applySubscriptionCancelledMessage(e.event, e.correlation_id);
                    break;
                case "subscription_failed":
                    this.applySubscriptionFailedMessage(e.event, e.correlation_id);
                    break;
                case (n = e.event_type.match(/^(?:map|list|document|stream|live_query)_/) || {}).input:
                    var r;
                    switch (n[0]) {
                        case "map_":
                            r = e.event.map_sid;
                            break;
                        case "list_":
                            r = e.event.list_sid;
                            break;
                        case "document_":
                            r = e.event.document_sid;
                            break;
                        case "stream_":
                            r = e.event.stream_sid;
                            break;
                        case "live_query_":
                            r = e.event.query_id, t = !1, !0 === e.strictly_ordered && (t = !0);
                            break;
                        default: r = void 0;
                    }
                    this.applyEventToSubscribedEntity(r, e, t);
                    break;
                default: vE("Dropping unknown message type ".concat(e.event_type));
            } } }, { key: "applySubscriptionEstablishedMessage", value: function (e, t) { var n = e.object_sid, r = this.persisted.get(e.object_sid); r && r.pendingCorrelationId === t ? "interrupted" === e.replay_status ? (vE("Event Replay for subscription to ".concat(n, " (c:").concat(t, ") interrupted; continuing eagerly.")), r.updatePending(null, null), this.persisted.delete(r.sid), this.backoff.reset()) : "completed" === e.replay_status && (vE("Event Replay for subscription to ".concat(n, " (c:").concat(t, ") completed. Subscription is ready.")), r.complete(e.last_event_id), this.persisted.set(e.object_sid, r), r.setSubscriptionState("established"), this.backoff.reset()) : vE("Late message for ".concat(e.object_sid, " (c:").concat(t, ") dropped.")), this.persist(); } }, { key: "applySubscriptionCancelledMessage", value: function (e, t) { var n = this.persisted.get(e.object_sid); n && n.pendingCorrelationId === t ? (n.updatePending(null, null), n.setSubscriptionState("none"), this.persisted.delete(e.object_sid)) : vE("Late message for ".concat(e.object_sid, " (c:").concat(t, ") dropped.")), this.persist(); } }, { key: "applySubscriptionFailedMessage", value: function (e, t) { var n = e.object_sid, r = this.subscriptions.get(n), i = this.persisted.get(n); r && i ? i.pendingCorrelationId === t && (mE("Failed to subscribe on ".concat(i.sid), e.error), i.markAsFailed(e), i.setSubscriptionState("none")) : !r && i && (this.persisted.delete(n), i.setSubscriptionState("none")), this.persist(); } }, { key: "applyEventToSubscribedEntity", value: function (e, t, n) { if (e) {
                var r;
                n = n || (r = this.persisted.get(e)) && r.isEstablished;
                var i = this.subscriptions.get(e);
                i ? (t.event.type = t.event_type, i.update(t.event, n)) : vE("Message dropped for SID '".concat(e, "', for which there is no subscription."));
            } } }, { key: "onConnectionStateChanged", value: function (e) { this.isConnected = e, e && this.poke("reconnect"); } }, { key: "onSubscriptionTtlElapsed", value: function () { this.isConnected && this.poke("ttl"); } }, { key: "poke", value: function (e) { vE("Triggering event replay for all subscriptions, reason=".concat(e)), this.pendingPokeReason = e, this.subscriptionTtlTimer && (clearTimeout(this.subscriptionTtlTimer), this.subscriptionTtlTimer = null); var t, n = [], r = EE(this.persisted.values()); try {
                for (r.s(); !(t = r.n()).done;) {
                    var i = t.value;
                    i.reset(), i.rejectedWithError && n.push(i);
                }
            }
            catch (e) {
                r.e(e);
            }
            finally {
                r.f();
            } this.persisted.clear(); for (var a = 0, s = n; a < s.length; a++) {
                var o = s[a];
                this.persisted.set(o.sid, o);
            } this.persist(); } }, { key: "shutdown", value: function () { this.backoff.reset(), this.subscriptions.clear(); } }]), e; }();
    function CE(e) { if (e.body && e.body.message)
        return e.body.message; switch (e.status) {
        case 429: return "Throttled by server";
        case 404: return "Not found from server";
        default: return "Error from server";
    } }
    function PE(e) { return e.body ? e.body.code : 0; }
    function AE(e) { return 409 === e.status ? new oE(CE(e), e.status, PE(e), e.body) : e.status ? new sE(CE(e), e.status, PE(e)) : e instanceof gT.TransportUnavailableError ? e : new sE(e.message, 0, 0); }
    var jE = function () { function e(t, n, r) { OT.default(this, e), this.clientInfo = t, this.config = n, this.transport = r; } return CT.default(e, [{ key: "createHeaders", value: function () { return { "Content-Type": "application/json", "Twilio-Sync-Client-Info": JSON.stringify(this.clientInfo), "Twilio-Request-Id": "RQ" + qT.v4().replace(/-/g, "") }; } }, { key: "backoffConfig", value: function () { return Object.assign({ min: 4e3, max: 6e4, maxAttemptsTime: 9e4, randomness: .2 }, this.config.backoffConfig); } }, { key: "executeWithRetry", value: function (e) { var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return new Promise((function (r, i) { var a = [502, 503, 504]; n && a.push(429); var s = new xT.Retrier(t.backoffConfig()); s.on("attempt", (function () { e().then((function (e) { return s.succeeded(e); })).catch((function (e) { if (a.includes(e.status)) {
                var t = parseInt(e.headers ? e.headers["Retry-After"] : null);
                s.failed(AE(e), isNaN(t) ? null : 1e3 * t);
            }
            else
                "Twilsock disconnected" === e.message ? s.failed(AE(e)) : (s.removeAllListeners(), s.cancel(), i(AE(e))); })); })), s.on("succeeded", (function (e) { r(e); })), s.on("cancelled", (function (e) { return i(AE(e)); })), s.on("failed", (function (e) { return i(AE(e)); })), s.start(); })); } }, { key: "get", value: function (e) { var t = this, n = this.createHeaders(); return vE("GET", e, "ID:", n["Twilio-Request-Id"]), this.executeWithRetry((function () { return t.transport.get(e, n, t.config.productId); }), !0); } }, { key: "post", value: function (e, t, n) { var r = this, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = this.createHeaders(); return null != n && (a["If-Match"] = n), vE("POST", e, "ID:", a["Twilio-Request-Id"]), this.executeWithRetry((function () { return r.transport.post(e, a, t, r.config.productId); }), i); } }, { key: "put", value: function (e, t, n) { var r = this, i = this.createHeaders(); return null != n && (i["If-Match"] = n), vE("PUT", e, "ID:", i["Twilio-Request-Id"]), this.executeWithRetry((function () { return r.transport.put(e, i, t, r.config.productId); }), !1); } }, { key: "delete", value: function (e) { var t = this, n = this.createHeaders(); return vE("DELETE", e, "ID:", n["Twilio-Request-Id"]), this.executeWithRetry((function () { return t.transport.delete(e, n, t.config.productId); }), !1); } }]), e; }(), ME = function () { function e(t, n) { OT.default(this, e), this.config = t, this.storageId = null; try {
        this.storage = n || sessionStorage;
    }
    catch (e) { } } return CT.default(e, [{ key: "storageKey", value: function (e, t) { return "".concat(this.storageId, "::").concat(e, "::").concat(t); } }, { key: "isReady", get: function () { return this.config.sessionStorageEnabled && !!this.storageId; } }, { key: "updateStorageId", value: function (e) { this.storageId = e; } }, { key: "store", value: function (e, t, n) { return this.isReady ? this._store(this.storageKey(e, t), n) : null; } }, { key: "read", value: function (e, t) { return this.isReady ? this._read(this.storageKey(e, t)) : null; } }, { key: "remove", value: function (e, t, n) { if (!this.isReady)
                return null; try {
                this.storage.removeItem(this.storageKey(e, t)), n && this.storage.removeItem(this.storageKey(e, n));
            }
            catch (e) { } } }, { key: "update", value: function (e, t, n, r) { if (!this.isReady)
                return null; this._apply(this.storageKey(e, t), r), n && this._apply(this.storageKey(e, n), r); } }, { key: "_store", value: function (e, t) { try {
                this.storage.setItem(e, JSON.stringify(t));
            }
            catch (e) { } } }, { key: "_read", value: function (e) { try {
                var t = this.storage.getItem(e);
                if (t)
                    return JSON.parse(t);
            }
            catch (e) { } return null; } }, { key: "_apply", value: function (e, t) { var n = this._read(e); if (!n)
                return !1; this._store(e, Object.assign(n, t)); } }]), e; }();
    function LE(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return NE(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return NE(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function NE(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var UE = function () { function e(t, n) { OT.default(this, e), this.services = t, this.removalHandler = n, this.subscriptionState = "none", this._attachedListeners = new Map; } return CT.default(e, [{ key: "_advanceLastEventId", value: function (e, t) { } }, { key: "reportFailure", value: function (e) { 404 === e.status ? this.onRemoved(!1) : this.broadcastEventToListeners("failure", e); } }, { key: "_subscribe", value: function () { this.services.router._subscribe(this.sid, this); } }, { key: "_unsubscribe", value: function () { this.services.router._unsubscribe(this.sid); } }, { key: "_setSubscriptionState", value: function (e) { this.subscriptionState = e, this.broadcastEventToListeners("_subscriptionStateChanged", e); } }, { key: "close", value: function () { this._unsubscribe(), null != this.removalHandler && this.removalHandler(this.type, this.sid, this.uniqueName); } }, { key: "attach", value: function (e) { var t = e.listenerUuid; this._attachedListeners.get(t) || (this._attachedListeners.size || this._subscribe(), this._attachedListeners.set(t, e)); } }, { key: "detach", value: function (e) { this._attachedListeners.delete(e), this._attachedListeners.size || this.close(); } }, { key: "broadcastEventToListeners", value: function (e, t) { var n, r = LE(this._attachedListeners.values()); try {
                for (r.s(); !(n = r.n()).done;) {
                    n.value.emit(e, t);
                }
            }
            catch (e) {
                r.e(e);
            }
            finally {
                r.f();
            } } }]), e; }(), DE = function () { function e(t) { OT.default(this, e), LT.default(this, "queuedRequests", []), LT.default(this, "isRequestInFlight", !1), this.inputMergingFunction = t; } return CT.default(e, [{ key: "add", value: function (e, t) { var n = this, r = new Promise((function (r, i) { return n.queuedRequests.push({ input: e, requestFunction: t, resolve: r, reject: i }); })); return this.wakeupQueue(), r; } }, { key: "squashAndAdd", value: function (e, t) { var n, r = this.queuedRequests; this.queuedRequests = [], r.length > 0 ? (n = r.map((function (e) { return e.input; })).reduce(this.inputMergingFunction), n = this.inputMergingFunction(n, e)) : n = e; var i = this.add(n, t); return r.forEach((function (e) { return i.then(e.resolve, e.reject); })), i; } }, { key: "isEmpty", value: function () { return 0 === this.queuedRequests.length && !this.isRequestInFlight; } }, { key: "wakeupQueue", value: function () { var e = this; if (0 !== this.queuedRequests.length && !this.isRequestInFlight) {
                var t = this.queuedRequests.shift();
                this.isRequestInFlight = !0, t.requestFunction(t.input).then(t.resolve, t.reject).then((function (t) { e.isRequestInFlight = !1, e.wakeupQueue(); }));
            } } }]), e; }(), FE = function () { function e(t) { OT.default(this, e), LT.default(this, "queueByNamespaceKey", new Map), this.inputReducer = t; } var t, n, r; return CT.default(e, [{ key: "add", value: (r = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.invokeQueueMethod(t, (function (e) { return e.add(n, r); })));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return r.apply(this, arguments); }) }, { key: "squashAndAdd", value: (n = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.invokeQueueMethod(t, (function (e) { return e.squashAndAdd(n, r); })));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, r) { return n.apply(this, arguments); }) }, { key: "invokeQueueMethod", value: (t = IT.default(NT.default.mark((function e(t, n) { var r, i; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.queueByNamespaceKey.has(t) || this.queueByNamespaceKey.set(t, new DE(this.inputReducer)), r = this.queueByNamespaceKey.get(t), i = n(r), this.queueByNamespaceKey.get(t).isEmpty() && this.queueByNamespaceKey.delete(t), e.abrupt("return", i);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, n) { return t.apply(this, arguments); }) }]), e; }();
    function BE(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var qE = function (e) { AT.default(n, e); var t = BE(n); function n() { var e; return OT.default(this, n), (e = t.call(this)).closed = !1, e.uuid = _T.v4(), e; } return CT.default(n, [{ key: "listenerUuid", get: function () { return this.uuid; } }, { key: "close", value: function () { this.removeAllListeners(), this.closed = !0; } }, { key: "ensureNotClosed", value: function () { if (this.closed)
                throw new Error("Invalid operation on closed object"); } }]), n; }(JT);
    function zE(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var WE = function (e) { AT.default(f, e); var t, n, r, i, a, s, o, u, c, l = zE(f); function f(e, t, n) { var r; OT.default(this, f), r = l.call(this, e, n), LT.default(PT.default(r), "isDeleted", !1); return r.updateMergingQueue = new DE((function (e, t) { return "number" == typeof t.ttl ? { ttl: t.ttl } : e; })), r.descriptor = t, r.descriptor.data = r.descriptor.data || {}, r.descriptor.date_updated = new Date(r.descriptor.date_updated), r; } return CT.default(f, [{ key: "uri", get: function () { return this.descriptor.url; } }, { key: "revision", get: function () { return this.descriptor.revision; } }, { key: "lastEventId", get: function () { return this.descriptor.last_event_id; } }, { key: "dateExpires", get: function () { return this.descriptor.date_expires; } }, { key: "type", get: function () { return "document"; } }, { key: "indexName", get: function () { } }, { key: "queryString", get: function () { } }, { key: "sid", get: function () { return this.descriptor.sid; } }, { key: "data", get: function () { return this.descriptor.data; } }, { key: "dateUpdated", get: function () { return this.descriptor.date_updated; } }, { key: "uniqueName", get: function () { return this.descriptor.unique_name || null; } }, { key: "_update", value: function (e) { switch (e.date_created = new Date(e.date_created), e.type) {
                case "document_updated":
                    if (e.id <= this.lastEventId) {
                        hE("Document update skipped, current:", this.lastEventId, ", remote:", e.id);
                        break;
                    }
                    var t = void 0 !== this.descriptor.data ? uE(this.descriptor.data) : null;
                    this.descriptor.last_event_id = e.id, this.descriptor.revision = e.document_revision, this.descriptor.date_updated = e.date_created, this.descriptor.data = e.document_data, this.broadcastEventToListeners("updated", { data: e.document_data, isLocal: !1, previousData: t }), this.services.storage.update(this.type, this.sid, this.uniqueName, { last_event_id: e.id, revision: e.document_revision, date_updated: e.date_created, data: e.document_data });
                    break;
                case "document_removed": this.onRemoved(!1);
            } } }, { key: "set", value: (c = IT.default(NT.default.mark((function e(t, n) { var r, i = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = n || {}, e.abrupt("return", this.updateMergingQueue.squashAndAdd(r, (function (e) { return i._setUnconditionally(t, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return c.apply(this, arguments); }) }, { key: "mutate", value: (u = IT.default(NT.default.mark((function e(t, n) { var r, i = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = n || {}, e.abrupt("return", this.updateMergingQueue.add(r, (function (e) { return i._setWithIfMatch(t, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return u.apply(this, arguments); }) }, { key: "update", value: (o = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.mutate((function (e) { return Object.assign(e, t); }), n));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return o.apply(this, arguments); }) }, { key: "setTtl", value: (s = IT.default(NT.default.mark((function e(t) { var n; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._postUpdateToServer({ ttl: t });
                    case 2: n = e.sent, this.descriptor.date_expires = n.date_expires;
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "_setUnconditionally", value: (a = IT.default(NT.default.mark((function e(t, n) { var r; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._postUpdateToServer({ data: t, revision: void 0, ttl: n });
                    case 2: return r = e.sent, this._handleSuccessfulUpdateResult(r), e.abrupt("return", this.descriptor.data);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return a.apply(this, arguments); }) }, { key: "_setWithIfMatch", value: (i = IT.default(NT.default.mark((function e(t, n) { var r, i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!(r = t(uE(this.descriptor.data)))) {
                            e.next = 22;
                            break;
                        }
                        return i = this.revision, e.prev = 3, e.next = 6, this._postUpdateToServer({ data: r, revision: i, ttl: n });
                    case 6: return a = e.sent, this._handleSuccessfulUpdateResult(a), e.abrupt("return", this.descriptor.data);
                    case 11:
                        if (e.prev = 11, e.t0 = e.catch(3), 412 !== e.t0.status) {
                            e.next = 19;
                            break;
                        }
                        return e.next = 16, this._softSync();
                    case 16: return e.abrupt("return", this._setWithIfMatch(t));
                    case 19: throw e.t0;
                    case 20:
                        e.next = 23;
                        break;
                    case 22: return e.abrupt("return", this.descriptor.data);
                    case 23:
                    case "end": return e.stop();
                } }), e, this, [[3, 11]]); }))), function (e, t) { return i.apply(this, arguments); }) }, { key: "_handleSuccessfulUpdateResult", value: function (e) { if (!(e.last_event_id <= this.descriptor.last_event_id)) {
                var t = void 0 !== this.descriptor.data ? uE(this.descriptor.data) : null;
                this.descriptor.revision = e.revision, this.descriptor.data = e.data, this.descriptor.last_event_id = e.last_event_id, this.descriptor.date_expires = e.date_expires, this.descriptor.date_updated = new Date(e.date_updated), this.services.storage.update(this.type, this.sid, this.uniqueName, { last_event_id: e.last_event_id, revision: e.revision, date_updated: e.date_updated, data: e.data }), this.broadcastEventToListeners("updated", { data: this.descriptor.data, isLocal: !0, previousData: t });
            } } }, { key: "_postUpdateToServer", value: (r = IT.default(NT.default.mark((function e(t) { var n, r, i; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.isDeleted) {
                            e.next = 17;
                            break;
                        }
                        return n = { data: t.data }, void 0 !== t.ttl && (n.ttl = t.ttl), r = t.revision, e.prev = 4, e.next = 7, this.services.network.post(this.uri, n, r);
                    case 7: return i = e.sent, e.abrupt("return", { revision: i.body.revision, data: t.data, last_event_id: i.body.last_event_id, date_updated: i.body.date_updated, date_expires: i.body.date_expires });
                    case 11: throw e.prev = 11, e.t0 = e.catch(4), 404 === e.t0.status && this.onRemoved(!1), e.t0;
                    case 15:
                        e.next = 18;
                        break;
                    case 17: return e.abrupt("return", Promise.reject(new sE("The Document has been removed", 404, 54100)));
                    case 18:
                    case "end": return e.stop();
                } }), e, this, [[4, 11]]); }))), function (e) { return r.apply(this, arguments); }) }, { key: "_softSync", value: (n = IT.default(NT.default.mark((function e() { var t = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.services.network.get(this.uri).then((function (e) { var n = { type: "document_updated", id: e.body.last_event_id, document_revision: e.body.revision, document_data: e.body.data, date_created: e.body.date_updated }; return t._update(n), t; })).catch((function (e) { 404 === e.status ? t.onRemoved(!1) : mE("Can't get updates for ".concat(t.sid, ":"), e); })));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }, { key: "onRemoved", value: function (e) { if (!this.isDeleted) {
                var t = void 0 !== this.descriptor.data ? uE(this.descriptor.data) : null;
                this.isDeleted = !0, this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: e, previousData: t });
            } } }, { key: "removeDocument", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.isDeleted) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 3, this.services.network.delete(this.uri);
                    case 3:
                        this.onRemoved(!0), e.next = 7;
                        break;
                    case 6: return e.abrupt("return", Promise.reject(new sE("The Document has been removed", 404, 54100)));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }], [{ key: "type", get: function () { return "document"; } }]), f; }(UE), GE = function (e) { AT.default(o, e); var t, n, r, i, a, s = zE(o); function o(e) { var t; return OT.default(this, o), (t = s.call(this)).syncDocumentImpl = e, t.syncDocumentImpl.attach(PT.default(t)), t; } return CT.default(o, [{ key: "uri", get: function () { return this.syncDocumentImpl.uri; } }, { key: "revision", get: function () { return this.syncDocumentImpl.revision; } }, { key: "lastEventId", get: function () { return this.syncDocumentImpl.lastEventId; } }, { key: "dateExpires", get: function () { return this.syncDocumentImpl.dateExpires; } }, { key: "type", get: function () { return WE.type; } }, { key: "sid", get: function () { return this.syncDocumentImpl.sid; } }, { key: "data", get: function () { return this.syncDocumentImpl.data; } }, { key: "dateUpdated", get: function () { return this.syncDocumentImpl.dateUpdated; } }, { key: "uniqueName", get: function () { return this.syncDocumentImpl.uniqueName; } }, { key: "set", value: (a = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncDocumentImpl.set(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return a.apply(this, arguments); }) }, { key: "mutate", value: (i = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncDocumentImpl.mutate(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return i.apply(this, arguments); }) }, { key: "update", value: (r = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncDocumentImpl.update(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return r.apply(this, arguments); }) }, { key: "setTtl", value: (n = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncDocumentImpl.setTtl(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "removeDocument", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncDocumentImpl.removeDocument());
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "close", value: function () { zT.default(MT.default(o.prototype), "close", this).call(this), this.syncDocumentImpl.detach(this.listenerUuid); } }], [{ key: "type", get: function () { return WE.type; } }]), o; }(qE);
    LT.default(GE, "removed", "removed"), LT.default(GE, "updated", "updated"), GT([mT.validateTypesAsync(mT.pureObject, ["undefined", mT.objectSchema("document metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object, Object]), $T("design:returntype", Promise)], GE.prototype, "set", null), GT([mT.validateTypesAsync("function", ["undefined", mT.objectSchema("document metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Function, Object]), $T("design:returntype", Promise)], GE.prototype, "mutate", null), GT([mT.validateTypesAsync(mT.pureObject, ["undefined", mT.objectSchema("document metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object, Object]), $T("design:returntype", Promise)], GE.prototype, "update", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], GE.prototype, "setTtl", null);
    var $E = function () { function e(t) { OT.default(this, e), this.descriptor = t; } return CT.default(e, [{ key: "uri", get: function () { return this.descriptor.uri; } }, { key: "revision", get: function () { return this.descriptor.revision; } }, { key: "lastEventId", get: function () { return this.descriptor.lastEventId; } }, { key: "dateUpdated", get: function () { return this.descriptor.dateUpdated; } }, { key: "dateExpires", get: function () { return this.descriptor.dateExpires; } }, { key: "index", get: function () { return this.descriptor.index; } }, { key: "data", get: function () { return this.descriptor.data; } }, { key: "update", value: function (e, t, n, r) { return this.descriptor.lastEventId = e, this.descriptor.revision = t, this.descriptor.data = n, this.descriptor.dateUpdated = r, this; } }, { key: "updateDateExpires", value: function (e) { this.descriptor.dateExpires = e; } }]), e; }(), Paginator = function () { function Paginator(e, t, n, r) { OT.default(this, Paginator), this.prevToken = n, this.nextToken = r, this.items = e, this.source = t; } var e, t; return CT.default(Paginator, [{ key: "hasNextPage", get: function () { return !!this.nextToken; } }, { key: "hasPrevPage", get: function () { return !!this.prevToken; } }, { key: "nextPage", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.hasNextPage) {
                            e.next = 2;
                            break;
                        }
                        throw new Error("No next page");
                    case 2: return e.abrupt("return", this.source(this.nextToken));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "prevPage", value: (e = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.hasPrevPage) {
                            e.next = 2;
                            break;
                        }
                        throw new Error("No previous page");
                    case 2: return e.abrupt("return", this.source(this.prevToken));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return e.apply(this, arguments); }) }]), Paginator; }();
    function VE(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return JE(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return JE(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function JE(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var KE = function () { function e(t, n) { OT.default(this, e), this.balanceFactor = 0, this.key = t, this.value = n, this.parent = null, this.left = null, this.right = null; } return CT.default(e, [{ key: "isRoot", get: function () { return null === this.parent; } }, { key: "isLeaf", get: function () { return null === this.left && null === this.right; } }, { key: "isLeftChild", get: function () { return this.parent.left === this; } }, { key: "update", value: function (e) { this.value = e; } }, { key: "replace", value: function (e, t) { e && (this.left === t ? this.left = t : this.right === t && (this.right = t)); } }]), e; }(), HE = function () { function e(t, n) { OT.default(this, e), this.isLessThan = t || function (e, t) { return e < t; }, this.isEqual = n || function (e, t) { return e === t; }, this.root = null, this.count = null; } return CT.default(e, [{ key: "size", get: function () { return this.count; } }, { key: "clear", value: function () { this.root = null, this.count = 0; } }, { key: "set", value: function (e, t) { var n = this.getNode(e); n ? n.update(t) : this.insert(e, t); } }, { key: "insert", value: function (e, t) { var n = new KE(e, t); if (this.count++, this.root) {
                for (var r = this.root;;)
                    if (this.isLessThan(e, r.key)) {
                        if (!r.left) {
                            r.left = n;
                            break;
                        }
                        r = r.left;
                    }
                    else {
                        if (!r.right) {
                            r.right = n;
                            break;
                        }
                        r = r.right;
                    }
                for (n.parent = r, r = n; r.parent;) {
                    var i = r.parent, a = i.balanceFactor;
                    if (r.isLeftChild ? i.balanceFactor++ : i.balanceFactor--, Math.abs(i.balanceFactor) < Math.abs(a))
                        break;
                    if (i.balanceFactor < -1 || i.balanceFactor > 1) {
                        this.rebalance(i);
                        break;
                    }
                    r = i;
                }
            }
            else
                this.root = n; } }, { key: "get", value: function (e) { for (var t = this.root; t;) {
                if (this.isEqual(e, t.key))
                    return t.value;
                t = this.isLessThan(e, t.key) ? t.left : t.right;
            } return null; } }, { key: "delete", value: function (e) { var t = this.getNode(e); if (!t || t.key !== e)
                return null; var n = t.parent, r = t.left, i = t.right; if (!!r != !!i) {
                var a = r || i;
                n || a ? n && !a ? this.root = a : (n.replace(t, null), this.rebalance(n)) : this.root = null;
            }
            else {
                for (var s = t.left; s.right;)
                    s = s.right;
                if (t.left === s)
                    t.isRoot ? (this.root = s, s.parent = null) : (t.isLeftChild ? t.parent.left = s : t.parent.right = s, s.parent = t.parent), s.right = t.right, s.right.parent = s, s.balanceFactor = t.balanceFactor, t = { parent: s, isLeftChild: !0 };
                else {
                    var o = s.parent, u = s.left;
                    o.right = u, u && (u.parent = o), t.isRoot ? (this.root = s, s.parent = null) : (t.isLeftChild ? t.parent.left = s : t.parent.right = s, s.parent = t.parent), s.right = t.right, s.right.parent = s, s.left = t.left, s.left.parent = s, s.balanceFactor = t.balanceFactor, t = { parent: o, isLeftChild: !1 };
                }
            } for (this.count--; t.parent;) {
                var c = t.parent, l = c.balanceFactor;
                if (t.isLeftChild ? c.balanceFactor -= 1 : c.balanceFactor += 1, Math.abs(c.balanceFactor) > Math.abs(l)) {
                    if (!(c.balanceFactor < -1 || c.balanceFactor > 1))
                        break;
                    if (this.rebalance(c), 0 !== c.parent.balanceFactor)
                        break;
                    t = c.parent;
                }
                else
                    t = c;
            } return null; } }, { key: "getNode", value: function (e) { for (var t = this.root; t;) {
                if (this.isEqual(e, t.key))
                    return t;
                t = this.isLessThan(e, t.key) ? t.left : t.right;
            } return null; } }, { key: "rebalance", value: function (e) { e.balanceFactor < 0 ? e.right.balanceFactor > 0 ? (this.rotateRight(e.right), this.rotateLeft(e)) : this.rotateLeft(e) : e.balanceFactor > 0 && (e.left.balanceFactor < 0 ? (this.rotateLeft(e.left), this.rotateRight(e)) : this.rotateRight(e)); } }, { key: "rotateLeft", value: function (e) { var t = e.right; e.right = t.left, null !== t.left && (t.left.parent = e), t.parent = e.parent, null === t.parent ? this.root = t : e.isLeftChild ? t.parent.left = t : t.parent.right = t, t.left = e, e.parent = t, e.balanceFactor = e.balanceFactor + 1 - Math.min(t.balanceFactor, 0), t.balanceFactor = t.balanceFactor + 1 - Math.max(e.balanceFactor, 0); } }, { key: "rotateRight", value: function (e) { var t = e.left; e.left = t.right, null !== t.right && (t.right.parent = e), t.parent = e.parent, null === t.parent ? this.root = t : e.isLeftChild ? t.parent.left = t : t.parent.right = t, t.right = e, e.parent = t, e.balanceFactor = e.balanceFactor - 1 - Math.min(t.balanceFactor, 0), t.balanceFactor = t.balanceFactor - 1 - Math.max(e.balanceFactor, 0); } }, { key: Symbol.iterator, value: NT.default.mark((function e() { var t, n, r; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: t = VE(this.getIterator()), e.prev = 1, t.s();
                    case 3:
                        if ((n = t.n()).done) {
                            e.next = 9;
                            break;
                        }
                        return r = n.value, e.next = 7, r;
                    case 7:
                        e.next = 3;
                        break;
                    case 9:
                        e.next = 14;
                        break;
                    case 11: e.prev = 11, e.t0 = e.catch(1), t.e(e.t0);
                    case 14: return e.prev = 14, t.f(), e.finish(14);
                    case 17:
                    case "end": return e.stop();
                } }), e, this, [[1, 11, 14, 17]]); })) }, { key: "getIterator", value: NT.default.mark((function e() { var t, n, r, i = arguments; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: t = i.length > 0 && void 0 !== i[0] ? i[0] : null, n = this.root;
                    case 2:
                        if (!n) {
                            e.next = 8;
                            break;
                        }
                        if (!this.isEqual(t, n.key) && (null !== t || n.left)) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("break", 8);
                    case 5:
                        n = this.isLessThan(t, n.key) || null === t ? n.left : n.right, e.next = 2;
                        break;
                    case 8:
                        if (n) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return", null);
                    case 10: r = !0;
                    case 11:
                        if (!r) {
                            e.next = 29;
                            break;
                        }
                        return e.next = 14, [n.key, n.value];
                    case 14:
                        if (r = !1, !n.right) {
                            e.next = 21;
                            break;
                        }
                        for (n = n.right; n.left;)
                            n = n.left;
                        r = !0, e.next = 27;
                        break;
                    case 21:
                        if (!n.parent) {
                            e.next = 26;
                            break;
                        }
                        r = n.parent.left === n, n = n.parent, e.next = 27;
                        break;
                    case 26: return e.abrupt("break", 37);
                    case 27:
                        e.next = 35;
                        break;
                    case 29:
                        if (!n.parent) {
                            e.next = 34;
                            break;
                        }
                        r = n.parent.left === n, n = n.parent, e.next = 35;
                        break;
                    case 34: return e.abrupt("break", 37);
                    case 35:
                        e.next = 11;
                        break;
                    case 37: return e.abrupt("return", null);
                    case 38:
                    case "end": return e.stop();
                } }), e, this); })) }, { key: "getReverseIterator", value: NT.default.mark((function e() { var t, n, r, i = arguments; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: t = i.length > 0 && void 0 !== i[0] ? i[0] : null, n = this.root;
                    case 2:
                        if (!n) {
                            e.next = 8;
                            break;
                        }
                        if (!this.isEqual(t, n.key) && (null !== t || n.right)) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("break", 8);
                    case 5:
                        n = this.isLessThan(t, n.key) && null !== t ? n.left : n.right, e.next = 2;
                        break;
                    case 8:
                        if (n) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return", null);
                    case 10: r = !0;
                    case 11:
                        if (!r) {
                            e.next = 29;
                            break;
                        }
                        return e.next = 14, [n.key, n.value];
                    case 14:
                        if (r = !1, !n.left) {
                            e.next = 21;
                            break;
                        }
                        for (n = n.left; n.right;)
                            n = n.right;
                        r = !0, e.next = 27;
                        break;
                    case 21:
                        if (!n.parent) {
                            e.next = 26;
                            break;
                        }
                        r = n.parent.right === n, n = n.parent, e.next = 27;
                        break;
                    case 26: return e.abrupt("break", 37);
                    case 27:
                        e.next = 35;
                        break;
                    case 29:
                        if (!n.parent) {
                            e.next = 34;
                            break;
                        }
                        r = n.parent.right === n, n = n.parent, e.next = 35;
                        break;
                    case 34: return e.abrupt("break", 37);
                    case 35:
                        e.next = 11;
                        break;
                    case 37: return e.abrupt("return", null);
                    case 38:
                    case "end": return e.stop();
                } }), e, this); })) }]), e; }();
    function YE(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return QE(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return QE(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function QE(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    var XE = function () { function e(t, n) { OT.default(this, e), this.value = t, this.revision = n || 0; } return CT.default(e, [{ key: "isValid", get: function () { return !0; } }]), e; }(), ZE = function () { function e(t) { OT.default(this, e), this.revision = t; } return CT.default(e, [{ key: "isValid", get: function () { return !1; } }]), e; }(), eR = function () { function e() { OT.default(this, e), this.items = new HE; } return CT.default(e, [{ key: "store", value: function (e, t, n) { var r = this.items.get(e); return r && r.revision > n ? r.isValid ? r.value : null : (this.items.set(e, new XE(t, n)), t); } }, { key: "delete", value: function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = this.items.get(e); (!r || r.revision < t || r && !0 === n) && this.items.set(e, new ZE(t)); } }, { key: "isKnown", value: function (e, t) { var n = this.items.get(e); return n && n.revision >= t; } }, { key: "get", value: function (e) { var t = this.items.get(e); return t && t.isValid ? t.value : null; } }, { key: "has", value: function (e) { var t = this.items.get(e); return t && t.isValid; } }, { key: "forEach", value: function (e) { if (this.items) {
                var t, n = YE(this.items);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = BT.default(t.value, 2), i = r[0], a = r[1];
                        a.isValid && e(i, a.value);
                    }
                }
                catch (e) {
                    n.e(e);
                }
                finally {
                    n.f();
                }
            } } }]), e; }();
    function tR(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var nR = function (e) { AT.default(y, e); var t, n, r, i, a, s, o, u, c, l, f, d, p, h, v = tR(y); function y(e, t, n) { var r; OT.default(this, y); return (r = v.call(this, e, n)).updateMergingQueue = new FE((function (e, t) { return "number" == typeof t.ttl ? { ttl: t.ttl } : e; })), r.cache = new eR, r.descriptor = t, r.descriptor.date_updated = new Date(r.descriptor.date_updated), r; } return CT.default(y, [{ key: "uri", get: function () { return this.descriptor.url; } }, { key: "revision", get: function () { return this.descriptor.revision; } }, { key: "lastEventId", get: function () { return this.descriptor.last_event_id; } }, { key: "links", get: function () { return this.descriptor.links; } }, { key: "dateExpires", get: function () { return this.descriptor.date_expires; } }, { key: "type", get: function () { return "list"; } }, { key: "indexName", get: function () { } }, { key: "queryString", get: function () { } }, { key: "sid", get: function () { return this.descriptor.sid; } }, { key: "uniqueName", get: function () { return this.descriptor.unique_name || null; } }, { key: "dateUpdated", get: function () { return this.descriptor.date_updated; } }, { key: "_addOrUpdateItemOnServer", value: (h = IT.default(NT.default.mark((function e(t, n, r, i) { var a, s; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return a = { data: n }, void 0 !== i && (a.ttl = i), e.next = 4, this.services.network.post(t, a, r);
                    case 4: return (s = e.sent).body.data = n, s.body.date_updated = new Date(s.body.date_updated), e.abrupt("return", s.body);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n, r) { return h.apply(this, arguments); }) }, { key: "push", value: (p = IT.default(NT.default.mark((function e(t, n) { var r, i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = (n || {}).ttl, e.next = 3, this._addOrUpdateItemOnServer(this.links.items, t, void 0, r);
                    case 3: return i = e.sent, a = Number(i.index), this._handleItemMutated(a, i.url, i.last_event_id, i.revision, t, i.date_updated, i.date_expires, !0, !1), e.abrupt("return", this.cache.get(a));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return p.apply(this, arguments); }) }, { key: "set", value: (d = IT.default(NT.default.mark((function e(t, n, r) { var i, a = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return i = r || {}, e.abrupt("return", this.updateMergingQueue.squashAndAdd(t, i, (function (e) { return a._updateItemUnconditionally(t, n, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return d.apply(this, arguments); }) }, { key: "_updateItemUnconditionally", value: (f = IT.default(NT.default.mark((function e(t, n, r) { var i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2: return i = e.sent, e.next = 5, this._addOrUpdateItemOnServer(i.uri, n, void 0, r);
                    case 5: return a = e.sent, this._handleItemMutated(t, a.url, a.last_event_id, a.revision, a.data, a.date_updated, a.date_expires, !1, !1), e.abrupt("return", this.cache.get(t));
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return f.apply(this, arguments); }) }, { key: "_updateItemWithIfMatch", value: (l = IT.default(NT.default.mark((function e(t, n, r) { var i, a, s, o; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2:
                        if (i = e.sent, !(a = n(uE(i.data)))) {
                            e.next = 25;
                            break;
                        }
                        return s = i.revision, e.prev = 6, e.next = 9, this._addOrUpdateItemOnServer(i.uri, a, s, r);
                    case 9: return o = e.sent, this._handleItemMutated(t, o.url, o.last_event_id, o.revision, o.data, o.date_updated, o.date_expires, !1, !1), e.abrupt("return", this.cache.get(t));
                    case 14:
                        if (e.prev = 14, e.t0 = e.catch(6), 412 !== e.t0.status) {
                            e.next = 22;
                            break;
                        }
                        return e.next = 19, this._getItemFromServer(t);
                    case 19: return e.abrupt("return", this._updateItemWithIfMatch(t, n, r));
                    case 22: throw e.t0;
                    case 23:
                        e.next = 26;
                        break;
                    case 25: return e.abrupt("return", i);
                    case 26:
                    case "end": return e.stop();
                } }), e, this, [[6, 14]]); }))), function (e, t, n) { return l.apply(this, arguments); }) }, { key: "mutate", value: (c = IT.default(NT.default.mark((function e(t, n, r) { var i, a = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return i = r || {}, e.abrupt("return", this.updateMergingQueue.add(t, i, (function (e) { return a._updateItemWithIfMatch(t, n, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return c.apply(this, arguments); }) }, { key: "update", value: (u = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.mutate(t, (function (e) { return Object.assign(e, n); }), r));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return u.apply(this, arguments); }) }, { key: "remove", value: (o = IT.default(NT.default.mark((function e(t) { var n, r, i; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2: return n = e.sent, r = uE(n.data), e.next = 6, this.services.network.delete(n.uri);
                    case 6: i = e.sent, this._handleItemRemoved(t, i.body.last_event_id, r, new Date(i.body.date_updated), !1);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return o.apply(this, arguments); }) }, { key: "get", value: function () { var e = IT.default(NT.default.mark((function e(t) { var n; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!(n = this.cache.get(t))) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", n);
                    case 5: return e.abrupt("return", this._getItemFromServer(t));
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))); return function (t) { return e.apply(this, arguments); }; }() }, { key: "_getItemFromServer", value: (s = IT.default(NT.default.mark((function e(t) { var n; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.queryItems({ index: t });
                    case 2:
                        if (!((n = e.sent).items.length < 1)) {
                            e.next = 7;
                            break;
                        }
                        throw new sE("No item with index ".concat(t, " found"), 404, 54151);
                    case 7: return e.abrupt("return", n.items[0]);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "queryItems", value: function () { var e = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = t || {}, n = new iE(this.links.items).queryParam("From", t.from).queryParam("PageSize", t.limit).queryParam("Index", t.index).queryParam("PageToken", t.pageToken).queryParam("Order", t.order).build(), e.next = 4, this.services.network.get(n);
                    case 4: return r = e.sent, i = r.body.items.map((function (e) { return e.date_updated = new Date(e.date_updated), s.cache.get(e.index) ? s._handleItemMutated(e.index, e.url, e.last_event_id, e.revision, e.data, e.date_updated, e.date_expires, !1, !0) : s.cache.store(Number(e.index), new $E({ index: Number(e.index), uri: e.url, revision: e.revision, lastEventId: e.last_event_id, dateUpdated: e.date_updated, dateExpires: e.date_expires, data: e.data }), e.last_event_id), s.cache.get(e.index); })), a = r.body.meta, e.abrupt("return", new Paginator(i, (function (e) { return s.queryItems({ pageToken: e }); }), a.previous_token, a.next_token));
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))); return function (t) { return e.apply(this, arguments); }; }() }, { key: "getItems", value: (a = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return cE((t = t || {}).pageSize), t.limit = t.pageSize || t.limit || 50, t.order = t.order || "asc", e.abrupt("return", this.queryItems(t));
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return a.apply(this, arguments); }) }, { key: "getContext", value: (i = IT.default(NT.default.mark((function e() { var t; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.context) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 3, this.services.network.get(this.links.context);
                    case 3: t = e.sent, this._updateContextIfRequired(t.body.data, t.body.last_event_id);
                    case 5: return e.abrupt("return", this.context);
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return i.apply(this, arguments); }) }, { key: "setTtl", value: (r = IT.default(NT.default.mark((function e(t) { var n, r; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, n = { ttl: t }, e.next = 4, this.services.network.post(this.uri, n);
                    case 4:
                        r = e.sent, this.descriptor.date_expires = r.body.date_expires, e.next = 12;
                        break;
                    case 8: throw e.prev = 8, e.t0 = e.catch(0), 404 === e.t0.status && this.onRemoved(!1), e.t0;
                    case 12:
                    case "end": return e.stop();
                } }), e, this, [[0, 8]]); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setItemTtl", value: (n = IT.default(NT.default.mark((function e(t, n) { var r, i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2: return r = e.sent, i = { ttl: n }, e.next = 6, this.services.network.post(r.uri, i);
                    case 6: a = e.sent, r.updateDateExpires(a.body.date_expires);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "removeList", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.network.delete(this.uri);
                    case 2: this.onRemoved(!0);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "onRemoved", value: function (e) { this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: e }); } }, { key: "shouldIgnoreEvent", value: function (e, t) { return this.cache.isKnown(e, t); } }, { key: "_update", value: function (e, t) { var n = Number(e.item_index); switch (e.date_created = new Date(e.date_created), e.type) {
                case "list_item_added":
                case "list_item_updated":
                    this._handleItemMutated(n, e.item_url, e.id, e.item_revision, e.item_data, e.date_created, void 0, "list_item_added" === e.type, !0);
                    break;
                case "list_item_removed":
                    this._handleItemRemoved(n, e.id, e.item_data, e.date_created, !0);
                    break;
                case "list_context_updated":
                    this._handleContextUpdate(e.context_data, e.id, e.date_created);
                    break;
                case "list_removed": this.onRemoved(!1);
            } t && this._advanceLastEventId(e.id, e.list_revision); } }, { key: "_advanceLastEventId", value: function (e, t) { this.lastEventId < e && (this.descriptor.last_event_id = e, t && (this.descriptor.revision = t)); } }, { key: "_updateRootDateUpdated", value: function (e) { (!this.descriptor.date_updated || e.getTime() > this.descriptor.date_updated.getTime()) && (this.descriptor.date_updated = e, this.services.storage.update(this.type, this.sid, this.uniqueName, { date_updated: e })); } }, { key: "_handleItemMutated", value: function (e, t, n, r, i, a, s, o, u) { if (this.shouldIgnoreEvent(e, n))
                hE("Item ".concat(e, " update skipped, current: ").concat(this.lastEventId, ", remote: ").concat(n));
            else {
                this._updateRootDateUpdated(a);
                var c = this.cache.get(e);
                if (!c) {
                    var l = new $E({ index: e, uri: t, lastEventId: n, revision: r, data: i, dateUpdated: a, dateExpires: s });
                    return this.cache.store(e, l, n), void this.emitItemMutationEvent(l, u, o);
                }
                var f = uE(c.data);
                c.update(n, r, i, a), this.cache.store(e, c, n), void 0 !== s && c.updateDateExpires(s), this.emitItemMutationEvent(c, u, !1, f);
            } } }, { key: "emitItemMutationEvent", value: function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i = n ? "itemAdded" : "itemUpdated", a = { item: e, isLocal: !t }; n || (a.previousItemData = r), this.broadcastEventToListeners(i, a); } }, { key: "_handleItemRemoved", value: function (e, t, n, r, i) { this._updateRootDateUpdated(r), this.cache.delete(e, t), this.broadcastEventToListeners("itemRemoved", { index: e, isLocal: !i, previousItemData: n }); } }, { key: "_handleContextUpdate", value: function (e, t, n) { this._updateRootDateUpdated(n), this._updateContextIfRequired(e, t) && this.broadcastEventToListeners("contextUpdated", { context: e, isLocal: !1 }); } }, { key: "_updateContextIfRequired", value: function (e, t) { return !this.contextEventId || t > this.contextEventId ? (this.context = e, this.contextEventId = t, !0) : (hE("Context update skipped, current:", this.lastEventId, ", remote:", t), !1); } }], [{ key: "type", get: function () { return "list"; } }]), y; }(UE), rR = function (e) { AT.default(p, e); var t, n, r, i, a, s, o, u, c, l, f, d = tR(p); function p(e) { var t; return OT.default(this, p), (t = d.call(this)).syncListImpl = e, t.syncListImpl.attach(PT.default(t)), t; } return CT.default(p, [{ key: "uri", get: function () { return this.syncListImpl.uri; } }, { key: "revision", get: function () { return this.syncListImpl.revision; } }, { key: "lastEventId", get: function () { return this.syncListImpl.lastEventId; } }, { key: "links", get: function () { return this.syncListImpl.links; } }, { key: "dateExpires", get: function () { return this.syncListImpl.dateExpires; } }, { key: "type", get: function () { return nR.type; } }, { key: "sid", get: function () { return this.syncListImpl.sid; } }, { key: "uniqueName", get: function () { return this.syncListImpl.uniqueName; } }, { key: "dateUpdated", get: function () { return this.syncListImpl.dateUpdated; } }, { key: "push", value: (f = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.push(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return f.apply(this, arguments); }) }, { key: "set", value: (l = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.set(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return l.apply(this, arguments); }) }, { key: "mutate", value: (c = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.mutate(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return c.apply(this, arguments); }) }, { key: "update", value: (u = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.update(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return u.apply(this, arguments); }) }, { key: "remove", value: (o = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.remove(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return o.apply(this, arguments); }) }, { key: "get", value: (s = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.get(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "getContext", value: (a = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.getContext());
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return a.apply(this, arguments); }) }, { key: "getItems", value: (i = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.getItems(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "setTtl", value: (r = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.setTtl(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setItemTtl", value: (n = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.setItemTtl(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "removeList", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncListImpl.removeList());
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "close", value: function () { zT.default(MT.default(p.prototype), "close", this).call(this), this.syncListImpl.detach(this.listenerUuid); } }], [{ key: "type", get: function () { return nR.type; } }]), p; }(qE);
    LT.default(rR, "itemAdded", "itemAdded"), LT.default(rR, "itemUpdated", "itemUpdated"), LT.default(rR, "itemRemoved", "itemRemoved"), LT.default(rR, "removed", "removed"), GT([mT.validateTypesAsync(mT.pureObject, ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object, Object]), $T("design:returntype", Promise)], rR.prototype, "push", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger, mT.pureObject, ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Number, Object, Object]), $T("design:returntype", Promise)], rR.prototype, "set", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger, "function", ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Number, Function, Object]), $T("design:returntype", Promise)], rR.prototype, "mutate", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger, mT.pureObject, ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Number, Object, Object]), $T("design:returntype", Promise)], rR.prototype, "update", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], rR.prototype, "remove", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], rR.prototype, "get", null), GT([mT.validateTypesAsync(["undefined", mT.objectSchema("query options", { from: [mT.nonNegativeInteger, "undefined"], pageSize: [mT.custom((function (e) { return [lE(e), "a positive integer"]; })), "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], rR.prototype, "getItems", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], rR.prototype, "setTtl", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger, mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number, Number]), $T("design:returntype", Promise)], rR.prototype, "setItemTtl", null);
    var iR = function () { function e(t) { OT.default(this, e), this.descriptor = t; } return CT.default(e, [{ key: "uri", get: function () { return this.descriptor.url; } }, { key: "revision", get: function () { return this.descriptor.revision; } }, { key: "lastEventId", get: function () { return this.descriptor.last_event_id; } }, { key: "dateExpires", get: function () { return this.descriptor.date_expires; } }, { key: "key", get: function () { return this.descriptor.key; } }, { key: "data", get: function () { return this.descriptor.data; } }, { key: "dateUpdated", get: function () { return this.descriptor.date_updated; } }, { key: "update", value: function (e, t, n, r) { return this.descriptor.last_event_id = e, this.descriptor.revision = t, this.descriptor.data = n, this.descriptor.date_updated = r, this; } }, { key: "updateDateExpires", value: function (e) { this.descriptor.date_expires = e; } }]), e; }();
    function aR(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var sR = function (e) { AT.default(h, e); var t, n, r, i, a, s, o, u, c, l, f, d, p = aR(h); function h(e, t, n) { var r; OT.default(this, h); return (r = p.call(this, e, n)).updateMergingQueue = new FE((function (e, t) { return "number" == typeof t.ttl ? { ttl: t.ttl } : e; })), r.cache = new eR, r.descriptor = t, r.descriptor.date_updated = new Date(r.descriptor.date_updated), t.items && t.items.forEach((function (e) { e.date_updated = new Date(e.date_updated), r.cache.store(e.key, new iR(e), e.last_event_id); })), r; } return CT.default(h, [{ key: "uri", get: function () { return this.descriptor.url; } }, { key: "links", get: function () { return this.descriptor.links; } }, { key: "revision", get: function () { return this.descriptor.revision; } }, { key: "lastEventId", get: function () { return this.descriptor.last_event_id; } }, { key: "dateExpires", get: function () { return this.descriptor.date_expires; } }, { key: "type", get: function () { return "map"; } }, { key: "indexName", get: function () { } }, { key: "queryString", get: function () { } }, { key: "sid", get: function () { return this.descriptor.sid; } }, { key: "uniqueName", get: function () { return this.descriptor.unique_name || null; } }, { key: "dateUpdated", get: function () { return this.descriptor.date_updated; } }, { key: "set", value: (d = IT.default(NT.default.mark((function e(t, n, r) { var i, a = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return i = r || {}, e.abrupt("return", this.updateMergingQueue.squashAndAdd(t, i, (function (e) { return a._putItemUnconditionally(t, n, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return d.apply(this, arguments); }) }, { key: "get", value: function () { var e = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (null != t) {
                            e.next = 2;
                            break;
                        }
                        throw new sE("SyncMapItem key may not be empty", 400, 54209);
                    case 2:
                        if (!this.cache.has(t)) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", this.cache.get(t));
                    case 6: return e.abrupt("return", this._getItemFromServer(t));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))); return function (t) { return e.apply(this, arguments); }; }() }, { key: "_getItemFromServer", value: (f = IT.default(NT.default.mark((function e(t) { var n; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.queryItems({ key: t });
                    case 2:
                        if (!((n = e.sent).items.length < 1)) {
                            e.next = 7;
                            break;
                        }
                        throw new sE("The specified Map Item does not exist", 404, 54201);
                    case 7: return e.abrupt("return", n.items[0]);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return f.apply(this, arguments); }) }, { key: "mutate", value: (l = IT.default(NT.default.mark((function e(t, n, r) { var i, a = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return i = r || {}, e.abrupt("return", this.updateMergingQueue.add(t, i, (function (e) { return a._putItemWithIfMatch(t, n, e.ttl); })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return l.apply(this, arguments); }) }, { key: "update", value: (c = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.mutate(t, (function (e) { return Object.assign(e, n); }), r));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return c.apply(this, arguments); }) }, { key: "_putItemUnconditionally", value: (u = IT.default(NT.default.mark((function e(t, n, r) { var i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._putItemToServer(t, n, void 0, r);
                    case 2: return i = e.sent, a = i.item, this._handleItemMutated(a.key, a.url, a.last_event_id, a.revision, a.data, a.date_updated, a.date_expires, i.added, !1), e.abrupt("return", this.cache.get(a.key));
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return u.apply(this, arguments); }) }, { key: "_putItemWithIfMatch", value: (o = IT.default(NT.default.mark((function e(t, n, r) { var i, a, s, o, u; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t).catch((function (e) { if (404 === e.status)
                        return new iR({ key: t, data: {}, last_event_id: -1, revision: "-1", url: null, date_updated: null, date_expires: null }); throw e; }));
                    case 2:
                        if (i = e.sent, !(a = n(uE(i.data)))) {
                            e.next = 26;
                            break;
                        }
                        return s = i.revision, e.prev = 6, e.next = 9, this._putItemToServer(t, a, s, r);
                    case 9: return o = e.sent, u = o.item, this._handleItemMutated(u.key, u.url, u.last_event_id, u.revision, u.data, u.date_updated, u.date_expires, o.added, !1), e.abrupt("return", this.cache.get(u.key));
                    case 15:
                        if (e.prev = 15, e.t0 = e.catch(6), 412 !== e.t0.status) {
                            e.next = 23;
                            break;
                        }
                        return e.next = 20, this._getItemFromServer(t);
                    case 20: return e.abrupt("return", this._putItemWithIfMatch(t, n, r));
                    case 23: throw e.t0;
                    case 24:
                        e.next = 27;
                        break;
                    case 26: return e.abrupt("return", i);
                    case 27:
                    case "end": return e.stop();
                } }), e, this, [[6, 15]]); }))), function (e, t, n) { return o.apply(this, arguments); }) }, { key: "_putItemToServer", value: (s = IT.default(NT.default.mark((function e(t, n, r, i) { var a, s, o, u, c; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return a = new iE(this.links.items).pathSegment(t).build(), s = { data: n }, void 0 !== i && (s.ttl = i), e.prev = 3, e.next = 6, this.services.network.put(a, s, r);
                    case 6: return o = e.sent, (u = o.body).data = n, u.date_updated = new Date(u.date_updated), c = 201 === o.status.code, e.abrupt("return", { added: c, item: u });
                    case 14: throw e.prev = 14, e.t0 = e.catch(3), 404 === e.t0.status && this.onRemoved(!1), e.t0;
                    case 18:
                    case "end": return e.stop();
                } }), e, this, [[3, 14]]); }))), function (e, t, n, r) { return s.apply(this, arguments); }) }, { key: "remove", value: (a = IT.default(NT.default.mark((function e(t) { var n, r, i; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2: return n = e.sent, r = uE(n.data), e.next = 6, this.services.network.delete(n.uri);
                    case 6: i = e.sent, this._handleItemRemoved(t, i.body.last_event_id, r, new Date(i.body.date_updated), !1);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return a.apply(this, arguments); }) }, { key: "queryItems", value: function () { var e = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = t || {}, n = new iE(this.links.items).queryParam("From", t.from).queryParam("PageSize", t.limit).queryParam("Key", t.key).queryParam("PageToken", t.pageToken).queryParam("Order", t.order).build(), e.next = 4, this.services.network.get(n);
                    case 4: return r = e.sent, i = r.body.items.map((function (e) { return e.date_updated = new Date(e.date_updated), s.cache.get(e.key) ? s._handleItemMutated(e.key, e.url, e.last_event_id, e.revision, e.data, e.date_updated, e.date_expires, !1, !0) : s.cache.store(e.key, new iR(e), e.last_event_id), s.cache.get(e.key); })), a = r.body.meta, e.abrupt("return", new Paginator(i, (function (e) { return s.queryItems({ pageToken: e }); }), a.previous_token, a.next_token));
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))); return function (t) { return e.apply(this, arguments); }; }() }, { key: "getItems", value: (i = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return cE((t = t || {}).pageSize), t.limit = t.pageSize || t.limit || 50, t.order = t.order || "asc", e.abrupt("return", this.queryItems(t));
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "shouldIgnoreEvent", value: function (e, t) { return this.cache.isKnown(e, t); } }, { key: "_update", value: function (e, t) { switch (e.date_created = new Date(e.date_created), e.type) {
                case "map_item_added":
                case "map_item_updated":
                    this._handleItemMutated(e.item_key, e.item_url, e.id, e.item_revision, e.item_data, e.date_created, void 0, "map_item_added" === e.type, !0);
                    break;
                case "map_item_removed":
                    this._handleItemRemoved(e.item_key, e.id, e.item_data, e.date_created, !0);
                    break;
                case "map_removed": this.onRemoved(!1);
            } t && this._advanceLastEventId(e.id, e.map_revision); } }, { key: "_advanceLastEventId", value: function (e, t) { this.lastEventId < e && (this.descriptor.last_event_id = e, t && (this.descriptor.revision = t)); } }, { key: "_updateRootDateUpdated", value: function (e) { (!this.descriptor.date_updated || e.getTime() > this.descriptor.date_updated.getTime()) && (this.descriptor.date_updated = e, this.services.storage.update(this.type, this.sid, this.uniqueName, { date_updated: e })); } }, { key: "_handleItemMutated", value: function (e, t, n, r, i, a, s, o, u) { if (this.shouldIgnoreEvent(e, n))
                hE("SyncMapItem ", e, " update skipped, current:", this.lastEventId, ", remote:", n);
            else {
                this._updateRootDateUpdated(a);
                var c = this.cache.get(e);
                if (!c) {
                    var l = new iR({ key: e, url: t, last_event_id: n, revision: r, data: i, date_updated: a, date_expires: s });
                    return this.cache.store(e, l, n), void this.emitItemMutationEvent(l, u, o);
                }
                var f = uE(c.data);
                c.update(n, r, i, a), this.cache.store(e, c, n), void 0 !== s && c.updateDateExpires(s), this.emitItemMutationEvent(c, u, !1, f);
            } } }, { key: "emitItemMutationEvent", value: function (e, t, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i = n ? "itemAdded" : "itemUpdated", a = { item: e, isLocal: !t }; n || (a.previousItemData = r), this.broadcastEventToListeners(i, a); } }, { key: "_handleItemRemoved", value: function (e, t, n, r, i) { this._updateRootDateUpdated(r), this.cache.delete(e, t), this.broadcastEventToListeners("itemRemoved", { key: e, isLocal: !i, previousItemData: n }); } }, { key: "onRemoved", value: function (e) { this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: e }); } }, { key: "setTtl", value: (r = IT.default(NT.default.mark((function e(t) { var n, r; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, n = { ttl: t }, e.next = 4, this.services.network.post(this.uri, n);
                    case 4:
                        r = e.sent, this.descriptor.date_expires = r.body.date_expires, e.next = 12;
                        break;
                    case 8: throw e.prev = 8, e.t0 = e.catch(0), 404 === e.t0.status && this.onRemoved(!1), e.t0;
                    case 12:
                    case "end": return e.stop();
                } }), e, this, [[0, 8]]); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setItemTtl", value: (n = IT.default(NT.default.mark((function e(t, n) { var r, i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.get(t);
                    case 2: return r = e.sent, i = { ttl: n }, e.next = 6, this.services.network.post(r.uri, i);
                    case 6: a = e.sent, r.updateDateExpires(a.body.date_expires);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "removeMap", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.network.delete(this.uri);
                    case 2: this.onRemoved(!0);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }], [{ key: "type", get: function () { return "map"; } }]), h; }(UE), oR = function (e) { AT.default(f, e); var t, n, r, i, a, s, o, u, c, l = aR(f); function f(e) { var t; return OT.default(this, f), (t = l.call(this)).syncMapImpl = e, t.syncMapImpl.attach(PT.default(t)), t; } return CT.default(f, [{ key: "uri", get: function () { return this.syncMapImpl.uri; } }, { key: "links", get: function () { return this.syncMapImpl.links; } }, { key: "revision", get: function () { return this.syncMapImpl.revision; } }, { key: "lastEventId", get: function () { return this.syncMapImpl.lastEventId; } }, { key: "dateExpires", get: function () { return this.syncMapImpl.dateExpires; } }, { key: "type", get: function () { return sR.type; } }, { key: "sid", get: function () { return this.syncMapImpl.sid; } }, { key: "uniqueName", get: function () { return this.syncMapImpl.uniqueName; } }, { key: "dateUpdated", get: function () { return this.syncMapImpl.dateUpdated; } }, { key: "set", value: (c = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.set(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return c.apply(this, arguments); }) }, { key: "get", value: (u = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.get(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return u.apply(this, arguments); }) }, { key: "mutate", value: (o = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.mutate(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return o.apply(this, arguments); }) }, { key: "update", value: (s = IT.default(NT.default.mark((function e(t, n, r) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.update(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return s.apply(this, arguments); }) }, { key: "remove", value: (a = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.remove(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return a.apply(this, arguments); }) }, { key: "getItems", value: (i = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.getItems(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "setTtl", value: (r = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.setTtl(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setItemTtl", value: (n = IT.default(NT.default.mark((function e(t, n) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncMapImpl.setItemTtl(t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "removeMap", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.next = 3, this.syncMapImpl.removeMap();
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "close", value: function () { zT.default(MT.default(f.prototype), "close", this).call(this), this.syncMapImpl.detach(this.listenerUuid); } }], [{ key: "type", get: function () { return sR.type; } }]), f; }(qE);
    function uR(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    LT.default(oR, "itemAdded", "itemAdded"), LT.default(oR, "itemUpdated", "itemUpdated"), LT.default(oR, "itemRemoved", "itemRemoved"), LT.default(oR, "removed", "removed"), GT([mT.validateTypesAsync("string", mT.pureObject, ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [String, Object, Object]), $T("design:returntype", Promise)], oR.prototype, "set", null), GT([mT.validateTypesAsync("string"), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", Promise)], oR.prototype, "get", null), GT([mT.validateTypesAsync("string", "function", ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [String, Function, Object]), $T("design:returntype", Promise)], oR.prototype, "mutate", null), GT([mT.validateTypesAsync("string", mT.pureObject, ["undefined", mT.objectSchema("item metadata", { ttl: [mT.nonNegativeInteger, "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [String, Object, Object]), $T("design:returntype", Promise)], oR.prototype, "update", null), GT([mT.validateTypesAsync("string"), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", Promise)], oR.prototype, "remove", null), GT([mT.validateTypesAsync(["undefined", mT.objectSchema("query options", { from: ["string", "undefined"], pageSize: [mT.custom((function (e) { return [lE(e), "a positive integer"]; })), "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], oR.prototype, "getItems", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], oR.prototype, "setTtl", null), GT([mT.validateTypesAsync("string", mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [String, Number]), $T("design:returntype", Promise)], oR.prototype, "setItemTtl", null);
    var cR = function (e) { AT.default(a, e); var t, n, r, i = uR(a); function a(e, t, n) { var r; return OT.default(this, a), (r = i.call(this, e, n)).descriptor = t, r; } return CT.default(a, [{ key: "uri", get: function () { return this.descriptor.url; } }, { key: "links", get: function () { return this.descriptor.links; } }, { key: "dateExpires", get: function () { return this.descriptor.date_expires; } }, { key: "type", get: function () { return "stream"; } }, { key: "lastEventId", get: function () { return null; } }, { key: "indexName", get: function () { } }, { key: "queryString", get: function () { } }, { key: "sid", get: function () { return this.descriptor.sid; } }, { key: "uniqueName", get: function () { return this.descriptor.unique_name || null; } }, { key: "publishMessage", value: (r = IT.default(NT.default.mark((function e(t) { var n, r, i, a; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = { data: t }, e.next = 3, this.services.network.post(this.links.messages, n);
                    case 3: return r = e.sent, i = r.body, a = this._handleMessagePublished(i.sid, t, !1), e.abrupt("return", a);
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setTtl", value: (n = IT.default(NT.default.mark((function e(t) { var n, r; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, n = { ttl: t }, e.next = 4, this.services.network.post(this.uri, n);
                    case 4:
                        r = e.sent, this.descriptor.date_expires = r.body.date_expires, e.next = 12;
                        break;
                    case 8: throw e.prev = 8, e.t0 = e.catch(0), 404 === e.t0.status && this.onRemoved(!1), e.t0;
                    case 12:
                    case "end": return e.stop();
                } }), e, this, [[0, 8]]); }))), function (e) { return n.apply(this, arguments); }) }, { key: "removeStream", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.network.delete(this.uri);
                    case 2: this.onRemoved(!0);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "_update", value: function (e) { switch (e.type) {
                case "stream_message_published":
                    this._handleMessagePublished(e.message_sid, e.message_data, !0);
                    break;
                case "stream_removed": this.onRemoved(!1);
            } } }, { key: "_handleMessagePublished", value: function (e, t, n) { var r = { sid: e, data: t }; return this.broadcastEventToListeners("messagePublished", { message: r, isLocal: !n }), r; } }, { key: "onRemoved", value: function (e) { this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: e }); } }], [{ key: "type", get: function () { return "stream"; } }]), a; }(UE);
    GT([mT.validateTypesAsync(mT.pureObject), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], cR.prototype, "publishMessage", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], cR.prototype, "setTtl", null);
    var lR = function (e) { AT.default(a, e); var t, n, r, i = uR(a); function a(e) { var t; return OT.default(this, a), (t = i.call(this)).syncStreamImpl = e, t.syncStreamImpl.attach(PT.default(t)), t; } return CT.default(a, [{ key: "uri", get: function () { return this.syncStreamImpl.uri; } }, { key: "links", get: function () { return this.syncStreamImpl.links; } }, { key: "dateExpires", get: function () { return this.syncStreamImpl.dateExpires; } }, { key: "type", get: function () { return cR.type; } }, { key: "lastEventId", get: function () { return null; } }, { key: "sid", get: function () { return this.syncStreamImpl.sid; } }, { key: "uniqueName", get: function () { return this.syncStreamImpl.uniqueName; } }, { key: "publishMessage", value: (r = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncStreamImpl.publishMessage(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "setTtl", value: (n = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncStreamImpl.setTtl(t));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "removeStream", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.ensureNotClosed(), e.abrupt("return", this.syncStreamImpl.removeStream());
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "close", value: function () { zT.default(MT.default(a.prototype), "close", this).call(this), this.syncStreamImpl.detach(this.listenerUuid); } }], [{ key: "type", get: function () { return cR.type; } }]), a; }(qE);
    LT.default(lR, "messagePublished", "messagePublished"), LT.default(lR, "removed", "removed"), GT([mT.validateTypesAsync(mT.pureObject), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], lR.prototype, "publishMessage", null), GT([mT.validateTypesAsync(mT.nonNegativeInteger), $T("design:type", Function), $T("design:paramtypes", [Number]), $T("design:returntype", Promise)], lR.prototype, "setTtl", null);
    var fR = function e(t) { OT.default(this, e), this.sdk = "js", this.sdkVer = t, this.os = WT.os.family, this.osVer = WT.os.version, this.pl = WT.name, this.plVer = WT.version; }, dR = function () { function e() { OT.default(this, e), this.names = new Map, this.entities = new Map; } return CT.default(e, [{ key: "store", value: function (e) { var t = this.entities.get(e.sid); return t || (this.entities.set(e.sid, e), e.uniqueName && this.names.set(e.type + "::" + e.uniqueName, e.sid), e); } }, { key: "getResolved", value: function (e, t) { var n = this.names.get(t + "::" + e); return n ? this.entities.get(n) : null; } }, { key: "get", value: function (e, t) { return this.entities.get(e) || this.getResolved(e, t) || null; } }, { key: "remove", value: function (e) { var t = this.entities.get(e); t && (this.entities.delete(e), t.uniqueName && this.names.delete(t.type + "::" + t.uniqueName)); } }]), e; }();
    function pR(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    var hR = function (e) { AT.default(n, e); var t = pR(n); function n(e, r, i, a) { var s; return OT.default(this, n), (s = t.call(this, r, i)).descriptor = e, s.cache = new eR, a && a.forEach((function (e) { s.cache.store(e.key, { key: e.key, value: e.data }, e.revision); })), s; } return CT.default(n, [{ key: "sid", get: function () { return this.descriptor.sid; } }, { key: "uniqueName", get: function () { return null; } }, { key: "type", get: function () { return n.type; } }, { key: "lastEventId", get: function () { return this.descriptor.last_event_id; } }, { key: "indexName", get: function () { return this.descriptor.indexName; } }, { key: "queryString", get: function () { return this.descriptor.queryExpression; } }, { key: "queryUri", get: function () { return this.descriptor.queryUri; } }, { key: "liveQueryDescriptor", get: function () { return this.descriptor; } }, { key: "onRemoved", value: function () { } }, { key: "getItems", value: function () { var e = {}; return this.cache.forEach((function (t, n) { e[t] = n.value; })), e; } }, { key: "_update", value: function (e, t) { switch (e.type) {
                case "live_query_item_updated":
                    this.handleItemMutated(e.item_key, e.item_data, e.item_revision);
                    break;
                case "live_query_item_removed":
                    this.handleItemRemoved(e.item_key, e.item_revision);
                    break;
                case "live_query_updated": this.handleBatchUpdate(e.items);
            } t && this._advanceLastEventId(e.last_event_id); } }, { key: "handleItemMutated", value: function (e, t, n) { if (this.shouldIgnoreEvent(e, n))
                hE("Item ".concat(e, " update skipped, revision: ").concat(n));
            else {
                var r = { key: e, value: t };
                this.cache.store(e, r, n), this.broadcastEventToListeners("itemUpdated", r);
            } } }, { key: "handleItemRemoved", value: function (e, t) { var n = null === t; this.shouldIgnoreEvent(e, t) ? hE("Item ".concat(e, " delete skipped, revision: ").concat(t)) : (this.cache.delete(e, t, n), this.broadcastEventToListeners("itemRemoved", { key: e })); } }, { key: "handleBatchUpdate", value: function (e) { var t = this, n = {}; for (var r in null != e && e.forEach((function (e) { n[e.key] = { data: e.data, revision: e.revision }; })), this.cache.forEach((function (e, r) { var i = n[e]; null != i ? t.handleItemMutated(e, i.data, i.revision) : t.handleItemRemoved(e, null), delete n[e]; })), n)
                this.handleItemMutated(r, n[r].data, n[r].revision); } }, { key: "shouldIgnoreEvent", value: function (e, t) { return null != e && null != t && this.cache.isKnown(e, t); } }, { key: "_advanceLastEventId", value: function (e, t) { this.lastEventId < e && (this.descriptor.last_event_id = e); } }], [{ key: "type", get: function () { return "live_query"; } }]), n; }(UE);
    function vR(e) { return yR.apply(this, arguments); }
    function yR() { return (yR = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s, o; return NT.default.wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (n = t.network, r = t.queryString, i = t.uri, a = t.type, null != r) {
                    e.next = 3;
                    break;
                }
                throw new sE("Invalid query", 400, 54507);
            case 3: return s = { query_string: r }, a === mR.type && (s.type = a), e.next = 7, n.post(i, s, void 0, !0);
            case 7: return o = e.sent, e.abrupt("return", o.body);
            case 9:
            case "end": return e.stop();
        } }), e); })))).apply(this, arguments); }
    var mR = function (e) { AT.default(n, e); var t = pR(n); function n(e) { var r; return OT.default(this, n), (r = t.call(this)).liveQueryImpl = e, r.liveQueryImpl.attach(PT.default(r)), r; } return CT.default(n, [{ key: "type", get: function () { return hR.type; } }, { key: "lastEventId", get: function () { return this.liveQueryImpl.lastEventId; } }, { key: "sid", get: function () { return this.liveQueryImpl.sid; } }, { key: "close", value: function () { zT.default(MT.default(n.prototype), "close", this).call(this), this.liveQueryImpl.detach(this.listenerUuid); } }, { key: "getItems", value: function () { return this.ensureNotClosed(), this.liveQueryImpl.getItems(); } }], [{ key: "type", get: function () { return hR.type; } }]), n; }(qE);
    LT.default(mR, "itemUpdated", "itemUpdated"), LT.default(mR, "itemRemoved", "itemRemoved");
    var gR = function (e) { AT.default(i, e); var t, n, r = pR(i); function i(e) { var t; return OT.default(this, i), t = r.call(this), LT.default(PT.default(t), "queryExpression", null), LT.default(PT.default(t), "items", {}), Object.assign(PT.default(t), e), t.updateIndexName(e.indexName), t; } return CT.default(i, [{ key: "type", get: function () { return i.type; } }, { key: "search", value: (n = IT.default(NT.default.mark((function e(t) { var n = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return this.items = {}, e.abrupt("return", vR({ network: this.network, uri: this.queryUri, queryString: t }).then((function (e) { n.queryExpression = t, e.items && e.items.forEach((function (e) { n.items[e.key] = e.data; })), n.emit("searchResult", n.getItems()); })).catch((function (e) { throw mE("Error '".concat(e.message, "' while executing query '").concat(t, "'")), n.queryExpression = null, e; })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "subscribe", value: (t = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (null != this.queryExpression) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", Promise.reject(new sE("Invalid query", 400, 54507)));
                    case 2: return e.abrupt("return", this.liveQueryCreator(this.indexName, this.queryExpression));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "getItems", value: function () { return this.items; } }, { key: "updateIndexName", value: function (e) { this.indexName = e, this.queryUri = this.generateQueryUri(this.indexName); } }, { key: "generateQueryUri", value: function (e) { return new iE(this.insightsUri).pathSegment(e).pathSegment("Items").build(); } }], [{ key: "type", get: function () { return "instant_query"; } }]), i; }(JT);
    LT.default(gR, "searchResult", "searchResult"), GT([mT.validateTypesAsync("string"), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", Promise)], gR.prototype, "search", null), GT([mT.validateTypes(mT.nonEmptyString), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", void 0)], gR.prototype, "updateIndexName", null);
    function bR(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = MT.default(e); if (t) {
        var i = MT.default(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return jT.default(this, n); }; }
    function kR(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function wR(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? kR(Object(n), !0).forEach((function (t) { LT.default(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kR(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    var xR = "data_sync", _R = "3.0.6";
    function SR(e) { if (e) {
        if ("string" == typeof e)
            return { id: e, mode: "open_or_create" };
        var t = e.mode || (e.id ? "open_or_create" : "create_new");
        return wR(wR({}, e), {}, { mode: t });
    } return { mode: "create_new" }; }
    var TR = "com.twilio.rtd.cds.document", ER = "com.twilio.rtd.cds.list", RR = "com.twilio.rtd.cds.map", IR = "twilio.sync.event", Client = function (e) { AT.default(Client, e); var t, n, r, i, a, s, o, u, c, l, f, d, p, h, v, y = bR(Client); function Client(e) { var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (OT.default(this, Client), t = y.call(this), !e)
        throw new Error("Sync library needs a valid Twilio token to be passed"); n.hasOwnProperty("logLevel") ? pE(n.logLevel) : pE("silent"); var r = n.productId = n.productId || xR; n.clientMetadata = n.clientMetadata || {}, n.clientMetadata.hasOwnProperty("type") || (n.clientMetadata.type = "sync"), n.clientMetadata.hasOwnProperty("sdk") || (n.clientMetadata.sdk = "JS", n.clientMetadata.sdkv = _R); var i = !n.twilsockClient; if (!n.initRegistrations) {
        var a = new gT.InitRegistration(r);
        Client.populateInitRegistrations(a), n.initRegistrations = [a];
    } var s = n.twilsockClient = n.twilsockClient || new gT.Twilsock(e, r, n); s.on("tokenAboutToExpire", (function (e) { return t.emit("tokenAboutToExpire", e); })), s.on("tokenExpired", (function () { return t.emit("tokenExpired"); })), s.on("connectionError", (function (e) { return t.emit("connectionError", e); })), s.on("stateChanged", (function (e) { t.emit("connectionStateChanged", e), t.services.subscriptions.onConnectionStateChanged("connected" === e); })), s.on("message", (function (e, n) { return t._routeMessage(e, n); })); var o = new TE(n), u = new jE(new fR(_R), o, s), c = new ME(o); return t.services = { config: o, twilsock: s, network: u, storage: c, router: PT.default(t), subscriptions: null }, t.services.subscriptions = new OE(t.services), t.entities = new dR, i && s.connect(), t; } return CT.default(Client, [{ key: "_routeMessage", value: function (e, t) { switch (hE("Notification type:", e, "content:", t), e) {
                case TR:
                case ER:
                case RR:
                    this.services.subscriptions.acceptMessage(t, !1);
                    break;
                case IR: this.services.subscriptions.acceptMessage(t, !0);
            } } }, { key: "_subscribe", value: function (e, t) { this.services.subscriptions.add(e, t); } }, { key: "_unsubscribe", value: function (e) { this.services.subscriptions.remove(e); } }, { key: "connectionState", get: function () { return this.services.twilsock.state; } }, { key: "ensureReady", value: (v = IT.default(NT.default.mark((function e() { var t; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.services.config.sessionStorageEnabled) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");
                    case 2: return e.prev = 2, e.next = 5, this.services.twilsock.storageId();
                    case 5:
                        t = e.sent, this.services.storage.updateStorageId(t.id), e.next = 12;
                        break;
                    case 9: e.prev = 9, e.t0 = e.catch(2), yE("Failed to initialize storage", e.t0);
                    case 12:
                    case "end": return e.stop();
                } }), e, this, [[2, 9]]); }))), function () { return v.apply(this, arguments); }) }, { key: "storeRootInSessionCache", value: function (e, t, n) { if (this.services.config.sessionStorageEnabled && t) {
                var r = uE(n);
                e !== rR.type && e !== oR.type || (r.last_event_id = null, delete r.items), this.services.storage.store(e, t, r);
            } } }, { key: "readRootFromSessionCache", value: function (e, t) { return this.services.config.sessionStorageEnabled && t ? this.services.storage.read(e, t) : null; } }, { key: "_get", value: (h = IT.default(NT.default.mark((function e(t, n) { var r, i, a, s = arguments; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (r = s.length > 2 && void 0 !== s[2] && s[2], n) {
                            e.next = 3;
                            break;
                        }
                        throw new sE("Cannot get entity without id", 404);
                    case 3: return i = new iE(t).pathSegment(n).queryParam("Include", r ? "items" : void 0).build(), e.next = 6, this.services.network.get(i);
                    case 6: return a = e.sent, e.abrupt("return", a.body);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return h.apply(this, arguments); }) }, { key: "_createDocument", value: function (e, t, n) { var r = { unique_name: e, data: t || {} }; return void 0 !== n && (r.ttl = n), this.services.network.post(this.services.config.documentsUri, r).then((function (e) { return e.body.data = r.data, e.body; })); } }, { key: "_getDocument", value: (p = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.readRootFromSessionCache(GE.type, t) || this._get(this.services.config.documentsUri, t));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return p.apply(this, arguments); }) }, { key: "_createList", value: function (e, t, n, r) { var i = { unique_name: e, purpose: t, context: n }; return void 0 !== r && (i.ttl = r), this.services.network.post(this.services.config.listsUri, i).then((function (e) { return e.body; })); } }, { key: "_getList", value: (d = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.readRootFromSessionCache(rR.type, t) || this._get(this.services.config.listsUri, t));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return d.apply(this, arguments); }) }, { key: "_createMap", value: function (e, t) { var n = { unique_name: e }; return void 0 !== t && (n.ttl = t), this.services.network.post(this.services.config.mapsUri, n).then((function (e) { return e.body; })); } }, { key: "_getMap", value: (f = IT.default(NT.default.mark((function e(t) { var n, r = arguments; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = r.length > 1 && void 0 !== r[1] && r[1], e.abrupt("return", this.readRootFromSessionCache(oR.type, t) || this._get(this.services.config.mapsUri, t, n));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return f.apply(this, arguments); }) }, { key: "_getStream", value: (l = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.readRootFromSessionCache(lR.type, t) || this._get(this.services.config.streamsUri, t, !1));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return l.apply(this, arguments); }) }, { key: "_createStream", value: (c = IT.default(NT.default.mark((function e(t, n) { var r, i; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = { unique_name: t }, void 0 !== n && (r.ttl = n), e.next = 4, this.services.network.post(this.services.config.streamsUri, r);
                    case 4: return i = e.sent, e.abrupt("return", i.body);
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return c.apply(this, arguments); }) }, { key: "_getLiveQuery", value: function (e) { return this.readRootFromSessionCache(mR.type, e); } }, { key: "getCached", value: function (e, t) { return e && this.entities.get(e, t) || null; } }, { key: "removeFromCacheAndSession", value: function (e, t, n) { this.entities.remove(t), this.services.config.sessionStorageEnabled && this.services.storage.remove(e, t, n); } }, { key: "document", value: (u = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2:
                        if ("create_new" !== (n = SR(t)).mode) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 6, this._createDocument(n.id, n.data, n.ttl);
                    case 6:
                        r = e.sent, e.next = 39;
                        break;
                    case 9:
                        if (!(i = this.getCached(n.id, GE.type))) {
                            e.next = 14;
                            break;
                        }
                        return e.abrupt("return", new GE(i));
                    case 14: return e.prev = 14, e.next = 17, this._getDocument(n.id);
                    case 17:
                        r = e.sent, e.next = 39;
                        break;
                    case 20:
                        if (e.prev = 20, e.t0 = e.catch(14), 404 === e.t0.status && "open_existing" !== n.mode) {
                            e.next = 26;
                            break;
                        }
                        throw e.t0;
                    case 26: return e.prev = 26, e.next = 29, this._createDocument(n.id, n.data, n.ttl);
                    case 29:
                        r = e.sent, e.next = 39;
                        break;
                    case 32:
                        if (e.prev = 32, e.t1 = e.catch(26), 409 !== e.t1.status) {
                            e.next = 38;
                            break;
                        }
                        return e.abrupt("return", this.document(t));
                    case 38: throw e.t1;
                    case 39: return this.storeRootInSessionCache(GE.type, n.id, r), a = new WE(this.services, r, (function (e, t, n) { return s.removeFromCacheAndSession(e, t, n); })), a = this.entities.store(a), e.abrupt("return", new GE(a));
                    case 43:
                    case "end": return e.stop();
                } }), e, this, [[14, 20], [26, 32]]); }))), function (e) { return u.apply(this, arguments); }) }, { key: "map", value: (o = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2:
                        if ("create_new" !== (n = SR(t)).mode) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 6, this._createMap(n.id, n.ttl);
                    case 6:
                        r = e.sent, e.next = 39;
                        break;
                    case 9:
                        if (!(i = this.getCached(n.id, oR.type))) {
                            e.next = 14;
                            break;
                        }
                        return e.abrupt("return", new oR(i));
                    case 14: return e.prev = 14, e.next = 17, this._getMap(n.id, n.includeItems);
                    case 17:
                        r = e.sent, e.next = 39;
                        break;
                    case 20:
                        if (e.prev = 20, e.t0 = e.catch(14), 404 === e.t0.status && "open_existing" !== n.mode) {
                            e.next = 26;
                            break;
                        }
                        throw e.t0;
                    case 26: return e.prev = 26, e.next = 29, this._createMap(n.id, n.ttl);
                    case 29:
                        r = e.sent, e.next = 39;
                        break;
                    case 32:
                        if (e.prev = 32, e.t1 = e.catch(26), 409 !== e.t1.status) {
                            e.next = 38;
                            break;
                        }
                        return e.abrupt("return", this.map(t));
                    case 38: throw e.t1;
                    case 39: return this.storeRootInSessionCache(oR.type, n.id, r), a = new sR(this.services, r, (function (e, t, n) { return s.removeFromCacheAndSession(e, t, n); })), a = this.entities.store(a), e.abrupt("return", new oR(a));
                    case 43:
                    case "end": return e.stop();
                } }), e, this, [[14, 20], [26, 32]]); }))), function (e) { return o.apply(this, arguments); }) }, { key: "list", value: (s = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2:
                        if ("create_new" !== (n = SR(t)).mode) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 6, this._createList(n.id, n.purpose, n.context, n.ttl);
                    case 6:
                        r = e.sent, e.next = 39;
                        break;
                    case 9:
                        if (!(i = this.getCached(n.id, rR.type))) {
                            e.next = 14;
                            break;
                        }
                        return e.abrupt("return", new rR(i));
                    case 14: return e.prev = 14, e.next = 17, this._getList(n.id);
                    case 17:
                        r = e.sent, e.next = 39;
                        break;
                    case 20:
                        if (e.prev = 20, e.t0 = e.catch(14), 404 === e.t0.status && "open_existing" !== n.mode) {
                            e.next = 26;
                            break;
                        }
                        throw e.t0;
                    case 26: return e.prev = 26, e.next = 29, this._createList(n.id, n.purpose, n.context, n.ttl);
                    case 29:
                        r = e.sent, e.next = 39;
                        break;
                    case 32:
                        if (e.prev = 32, e.t1 = e.catch(26), 409 !== e.t1.status) {
                            e.next = 38;
                            break;
                        }
                        return e.abrupt("return", this.list(t));
                    case 38: throw e.t1;
                    case 39: return this.storeRootInSessionCache(rR.type, n.id, r), a = new nR(this.services, r, (function (e, t, n) { return s.removeFromCacheAndSession(e, t, n); })), a = this.entities.store(a), e.abrupt("return", new rR(a));
                    case 43:
                    case "end": return e.stop();
                } }), e, this, [[14, 20], [26, 32]]); }))), function (e) { return s.apply(this, arguments); }) }, { key: "stream", value: (a = IT.default(NT.default.mark((function e(t) { var n, r, i, a, s, o = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2:
                        if ("create_new" !== (n = SR(t)).mode) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 6, this._createStream(n.id, n.ttl);
                    case 6:
                        r = e.sent, e.next = 39;
                        break;
                    case 9:
                        if (!(i = this.getCached(n.id, lR.type))) {
                            e.next = 14;
                            break;
                        }
                        return e.abrupt("return", new lR(i));
                    case 14: return e.prev = 14, e.next = 17, this._getStream(n.id);
                    case 17:
                        r = e.sent, e.next = 39;
                        break;
                    case 20:
                        if (e.prev = 20, e.t0 = e.catch(14), 404 === e.t0.status && "open_existing" !== n.mode) {
                            e.next = 26;
                            break;
                        }
                        throw e.t0;
                    case 26: return e.prev = 26, e.next = 29, this._createStream(n.id, n.ttl);
                    case 29:
                        r = e.sent, e.next = 39;
                        break;
                    case 32:
                        if (e.prev = 32, e.t1 = e.catch(26), 409 !== e.t1.status) {
                            e.next = 38;
                            break;
                        }
                        return e.abrupt("return", this.stream(t));
                    case 38: throw e.t1;
                    case 39: return this.storeRootInSessionCache(lR.type, n.id, r), a = function (e, t, n) { return o.removeFromCacheAndSession(e, t, n); }, s = new cR(this.services, r, a), s = this.entities.store(s), e.abrupt("return", new lR(s));
                    case 44:
                    case "end": return e.stop();
                } }), e, this, [[14, 20], [26, 32]]); }))), function (e) { return a.apply(this, arguments); }) }, { key: "shutdown", value: (i = IT.default(NT.default.mark((function e() { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.subscriptions.shutdown();
                    case 2: return e.next = 4, this.services.twilsock.disconnect();
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return i.apply(this, arguments); }) }, { key: "updateToken", value: (r = IT.default(NT.default.mark((function e(t) { return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.services.twilsock.updateToken(t).catch((function (e) { var t, n = null == e || null === (t = e.reply) || void 0 === t ? void 0 : t.status; if (401 === (null == n ? void 0 : n.code) && "UNAUTHORIZED" === (null == n ? void 0 : n.status))
                        throw new sE("Updated token was rejected by server", 400, 51130); throw e; })));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "liveQuery", value: (n = IT.default(NT.default.mark((function e(t, n) { var r, i, a, s, o, u = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2: return r = new iE(this.services.config.insightsUri).pathSegment(t).pathSegment("Items").build(), e.next = 5, vR({ network: this.services.network, uri: r, queryString: n, type: mR.type });
                    case 5: return i = e.sent, (a = this.getCached(i.query_id, mR.type)) || ((s = this._getLiveQuery(i.query_id)) || (s = { indexName: t, queryExpression: n, sid: i.query_id, queryUri: r, last_event_id: i.last_event_id }), o = function (e, t, n) { return u.removeFromCacheAndSession(e, t, n); }, a = new hR(s, this.services, o, i.items)), this.storeRootInSessionCache(mR.type, i.query_id, a.liveQueryDescriptor), a = this.entities.store(a), e.abrupt("return", new mR(a));
                    case 11:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "instantQuery", value: (t = IT.default(NT.default.mark((function e(t) { var n, r = this; return NT.default.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.ensureReady();
                    case 2: return n = function (e, t) { return r.liveQuery(e, t); }, e.abrupt("return", new gR({ indexName: t, network: this.services.network, insightsUri: this.services.config.insightsUri, liveQueryCreator: n }));
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }], [{ key: "populateInitRegistrations", value: function (e) { e.populateInitRegistrations([IR, TR, ER, RR]); } }, { key: "version", get: function () { return _R; } }]), Client; }(JT);
    LT.default(Client, "connectionStateChanged", "connectionStateChanged"), LT.default(Client, "connectionError", "connectionError"), LT.default(Client, "tokenAboutToExpire", "tokenAboutToExpire"), LT.default(Client, "tokenExpired", "tokenExpired"), GT([mT.validateTypesAsync(["undefined", "string", mT.objectSchema("open document options", { id: ["string", "undefined"], mode: [mT.literal("open_or_create", "open_existing", "create_new"), "undefined"], ttl: [mT.nonNegativeInteger, "undefined"], data: [mT.pureObject, "undefined", mT.literal(null)] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], Client.prototype, "document", null), GT([mT.validateTypesAsync(["undefined", "string", mT.objectSchema("open map options", { id: ["string", "undefined"], mode: [mT.literal("open_or_create", "open_existing", "create_new"), "undefined"], ttl: [mT.nonNegativeInteger, "undefined"], data: [mT.pureObject, "undefined", mT.literal(null)], includeItems: ["boolean", "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], Client.prototype, "map", null), GT([mT.validateTypesAsync(["undefined", "string", mT.objectSchema("open list options", { id: ["string", "undefined"], mode: [mT.literal("open_or_create", "open_existing", "create_new"), "undefined"], ttl: [mT.nonNegativeInteger, "undefined"], data: [mT.pureObject, "undefined", mT.literal(null)], purpose: ["string", "undefined"], context: [mT.pureObject, "undefined"], includeItems: ["boolean", "undefined"] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], Client.prototype, "list", null), GT([mT.validateTypesAsync(["undefined", "string", mT.objectSchema("open stream options", { id: ["string", "undefined"], mode: [mT.literal("open_or_create", "open_existing", "create_new"), "undefined"], ttl: [mT.nonNegativeInteger, "undefined"], data: [mT.pureObject, "undefined", mT.literal(null)] })]), $T("design:type", Function), $T("design:paramtypes", [Object]), $T("design:returntype", Promise)], Client.prototype, "stream", null), GT([mT.validateTypesAsync(mT.nonEmptyString), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", Promise)], Client.prototype, "updateToken", null), GT([mT.validateTypesAsync(mT.nonEmptyString, "string"), $T("design:type", Function), $T("design:paramtypes", [String, String]), $T("design:returntype", Promise)], Client.prototype, "liveQuery", null), GT([mT.validateTypesAsync(mT.nonEmptyString), $T("design:type", Function), $T("design:paramtypes", [String]), $T("design:returntype", Promise)], Client.prototype, "instantQuery", null), sT.Client = Client, sT.InsightsItem = function e() { OT.default(this, e); }, sT.InstantQuery = gR, sT.LiveQuery = mR, sT.Paginator = Paginator;
    var OR = sT.SyncClient = Client;
    function CR() { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }
    function PR(e, t, n) { return (PR = CR() ? Reflect.construct : function (e, t, n) { var r = [null]; r.push.apply(r, t); var i = new (Function.bind.apply(e, r)); return n && Ia(i, n.prototype), i; }).apply(null, arguments); }
    function AR(e) { var t = "function" == typeof Map ? new Map : void 0; return (AR = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]")))
        return e; var n; if ("function" != typeof e)
        throw new TypeError("Super expression must either be null or a function"); if (void 0 !== t) {
        if (t.has(e))
            return t.get(e);
        t.set(e, r);
    } function r() { return PR(e, arguments, Aa(this).constructor); } return r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Ia(r, e); })(e); }
    sT.SyncDocument = GE, sT.SyncList = rR, sT.SyncListItem = $E, sT.SyncMap = oR, sT.SyncMapItem = iR, sT.SyncStream = lR;
    var jR, MR = {}, LR = rS, NR = function (e) { if (LR(e))
        throw TypeError("The method doesn't accept regular expressions"); return e; }, UR = pe("match"), DR = function (e) { var t = /./; try {
        "/./"[e](t);
    }
    catch (n) {
        try {
            return t[UR] = !1, "/./"[e](t);
        }
        catch (e) { }
    } return !1; }, FR = In, BR = a.f, qR = Ut, zR = gr, WR = NR, GR = k, $R = DR, VR = "".startsWith, JR = Math.min, KR = $R("startsWith");
    FR({ target: "String", proto: !0, forced: !!(KR || (jR = BR(String.prototype, "startsWith"), !jR || jR.writable)) && !KR }, { startsWith: function (e) { var t = zR(GR(this)); WR(e); var n = qR(JR(arguments.length > 1 ? arguments[1] : void 0, t.length)), r = zR(e); return VR ? VR.call(t, r, n) : t.slice(n, n + r.length) === r; } });
    var HR = Kx.left, YR = L, QR = Ws;
    In({ target: "Array", proto: !0, forced: !ec("reduce") || !QR && YR > 79 && YR < 83 }, { reduce: function (e) { return HR(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0); } });
    var XR = s, ZR = pe("iterator"), eI = !XR((function () { var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, n = ""; return e.pathname = "c%20d", t.forEach((function (e, r) { t.delete("b"), n += r + e; })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[ZR] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://Ñ‚ÐµÑÑ‚").host || "#%D0%B1" !== new URL("http://a#Ð±").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host; })), tI = 2147483647, nI = /[^\0-\u007E]/, rI = /[.\u3002\uFF0E\uFF61]/g, iI = "Overflow: input needs wider integers to process", aI = Math.floor, sI = String.fromCharCode, oI = function (e) { return e + 22 + 75 * (e < 26); }, uI = function (e, t, n) { var r = 0; for (e = n ? aI(e / 700) : e >> 1, e += aI(e / t); e > 455; r += 36)
        e = aI(e / 35); return aI(r + 36 * e / (e + 38)); }, cI = function (e) { var t, n, r = [], i = (e = function (e) { for (var t = [], n = 0, r = e.length; n < r;) {
        var i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            var a = e.charCodeAt(n++);
            56320 == (64512 & a) ? t.push(((1023 & i) << 10) + (1023 & a) + 65536) : (t.push(i), n--);
        }
        else
            t.push(i);
    } return t; }(e)).length, a = 128, s = 0, o = 72; for (t = 0; t < e.length; t++)
        (n = e[t]) < 128 && r.push(sI(n)); var u = r.length, c = u; for (u && r.push("-"); c < i;) {
        var l = tI;
        for (t = 0; t < e.length; t++)
            (n = e[t]) >= a && n < l && (l = n);
        var f = c + 1;
        if (l - a > aI((tI - s) / f))
            throw RangeError(iI);
        for (s += (l - a) * f, a = l, t = 0; t < e.length; t++) {
            if ((n = e[t]) < a && ++s > tI)
                throw RangeError(iI);
            if (n == a) {
                for (var d = s, p = 36;; p += 36) {
                    var h = p <= o ? 1 : p >= o + 26 ? 26 : p - o;
                    if (d < h)
                        break;
                    var v = d - h, y = 36 - h;
                    r.push(sI(oI(h + v % y))), d = aI(v / y);
                }
                r.push(sI(oI(d))), o = uI(s, f, c == u), s = 0, ++c;
            }
        }
        ++s, ++a;
    } return r.join(""); }, lI = In, fI = R, dI = eI, pI = Je.exports, hI = Ha, vI = Mr, yI = Tf, mI = xt, gI = as, bI = ee, kI = Nr, wI = qa, xI = De, _I = S, SI = gr, TI = Hn, EI = h, RI = ms, II = hs, OI = pe, CI = fI("fetch"), PI = fI("Request"), AI = PI && PI.prototype, jI = fI("Headers"), MI = OI("iterator"), LI = "URLSearchParams", NI = "URLSearchParamsIterator", UI = mI.set, DI = mI.getterFor(LI), FI = mI.getterFor(NI), BI = /\+/g, qI = Array(4), zI = function (e) { return qI[e - 1] || (qI[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi")); }, WI = function (e) { try {
        return decodeURIComponent(e);
    }
    catch (t) {
        return e;
    } }, GI = function (e) { var t = e.replace(BI, " "), n = 4; try {
        return decodeURIComponent(t);
    }
    catch (e) {
        for (; n;)
            t = t.replace(zI(n--), WI);
        return t;
    } }, $I = /[!'()~]|%20/g, VI = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, JI = function (e) { return VI[e]; }, KI = function (e) { return encodeURIComponent(e).replace($I, JI); }, HI = function (e, t) { if (t)
        for (var n, r, i = t.split("&"), a = 0; a < i.length;)
            (n = i[a++]).length && (r = n.split("="), e.push({ key: GI(r.shift()), value: GI(r.join("=")) })); }, YI = function (e) { this.entries.length = 0, HI(this.entries, e); }, QI = function (e, t) { if (e < t)
        throw TypeError("Not enough arguments"); }, XI = yI((function (e, t) { UI(this, { type: NI, iterator: RI(DI(e).entries), kind: t }); }), "Iterator", (function () { var e = FI(this), t = e.kind, n = e.iterator.next(), r = n.value; return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n; })), ZI = function () { gI(this, ZI, LI); var e, t, n, r, i, a, s, o, u, c = arguments.length > 0 ? arguments[0] : void 0, l = this, f = []; if (UI(l, { type: LI, entries: f, updateURL: function () { }, updateSearchParams: YI }), void 0 !== c)
        if (_I(c))
            if ("function" == typeof (e = II(c)))
                for (n = (t = RI(c, e)).next; !(r = n.call(t)).done;) {
                    if ((s = (a = (i = RI(xI(r.value))).next).call(i)).done || (o = a.call(i)).done || !a.call(i).done)
                        throw TypeError("Expected sequence with length 2");
                    f.push({ key: SI(s.value), value: SI(o.value) });
                }
            else
                for (u in c)
                    bI(c, u) && f.push({ key: u, value: SI(c[u]) });
        else
            HI(f, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : SI(c)); }, eO = ZI.prototype;
    if (hI(eO, { append: function (e, t) { QI(arguments.length, 2); var n = DI(this); n.entries.push({ key: SI(e), value: SI(t) }), n.updateURL(); }, delete: function (e) { QI(arguments.length, 1); for (var t = DI(this), n = t.entries, r = SI(e), i = 0; i < n.length;)
            n[i].key === r ? n.splice(i, 1) : i++; t.updateURL(); }, get: function (e) { QI(arguments.length, 1); for (var t = DI(this).entries, n = SI(e), r = 0; r < t.length; r++)
            if (t[r].key === n)
                return t[r].value; return null; }, getAll: function (e) { QI(arguments.length, 1); for (var t = DI(this).entries, n = SI(e), r = [], i = 0; i < t.length; i++)
            t[i].key === n && r.push(t[i].value); return r; }, has: function (e) { QI(arguments.length, 1); for (var t = DI(this).entries, n = SI(e), r = 0; r < t.length;)
            if (t[r++].key === n)
                return !0; return !1; }, set: function (e, t) { QI(arguments.length, 1); for (var n, r = DI(this), i = r.entries, a = !1, s = SI(e), o = SI(t), u = 0; u < i.length; u++)
            (n = i[u]).key === s && (a ? i.splice(u--, 1) : (a = !0, n.value = o)); a || i.push({ key: s, value: o }), r.updateURL(); }, sort: function () { var e, t, n, r = DI(this), i = r.entries, a = i.slice(); for (i.length = 0, n = 0; n < a.length; n++) {
            for (e = a[n], t = 0; t < n; t++)
                if (i[t].key > e.key) {
                    i.splice(t, 0, e);
                    break;
                }
            t === n && i.push(e);
        } r.updateURL(); }, forEach: function (e) { for (var t, n = DI(this).entries, r = kI(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;)
            r((t = n[i++]).value, t.key, this); }, keys: function () { return new XI(this, "keys"); }, values: function () { return new XI(this, "values"); }, entries: function () { return new XI(this, "entries"); } }, { enumerable: !0 }), pI(eO, MI, eO.entries), pI(eO, "toString", (function () { for (var e, t = DI(this).entries, n = [], r = 0; r < t.length;)
        e = t[r++], n.push(KI(e.key) + "=" + KI(e.value)); return n.join("&"); }), { enumerable: !0 }), vI(ZI, LI), lI({ global: !0, forced: !dI }, { URLSearchParams: ZI }), !dI && "function" == typeof jI) {
        var tO = function (e) { if (_I(e)) {
            var t, n = e.body;
            if (wI(n) === LI)
                return (t = e.headers ? new jI(e.headers) : new jI).has("content-type") || t.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), TI(e, { body: EI(0, String(n)), headers: EI(0, t) });
        } return e; };
        if ("function" == typeof CI && lI({ global: !0, enumerable: !0, forced: !0 }, { fetch: function (e) { return CI(e, arguments.length > 1 ? tO(arguments[1]) : {}); } }), "function" == typeof PI) {
            var nO = function (e) { return gI(this, nO, "Request"), new PI(e, arguments.length > 1 ? tO(arguments[1]) : {}); };
            AI.constructor = nO, nO.prototype = AI, lI({ global: !0, forced: !0 }, { Request: nO });
        }
    }
    var rO, iO = { URLSearchParams: ZI, getState: DI }, aO = In, sO = o, oO = eI, uO = i, cO = Nn, lO = Je.exports, fO = as, dO = ee, pO = iT, hO = Hl, vO = af.codeAt, yO = function (e) { var t, n, r = [], i = e.toLowerCase().replace(rI, ".").split("."); for (t = 0; t < i.length; t++)
        n = i[t], r.push(nI.test(n) ? "xn--" + cI(n) : n); return r.join("."); }, mO = gr, gO = Mr, bO = iO, kO = xt, wO = uO.URL, xO = bO.URLSearchParams, _O = bO.getState, SO = kO.set, TO = kO.getterFor("URL"), EO = Math.floor, RO = Math.pow, IO = "Invalid scheme", OO = "Invalid host", CO = "Invalid port", PO = /[A-Za-z]/, AO = /[\d+-.A-Za-z]/, jO = /\d/, MO = /^0x/i, LO = /^[0-7]+$/, NO = /^\d+$/, UO = /^[\dA-Fa-f]+$/, DO = /[\0\t\n\r #%/:<>?@[\\\]^|]/, FO = /[\0\t\n\r #/:<>?@[\\\]^|]/, BO = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, qO = /[\t\n\r]/g, zO = function (e, t) { var n, r, i; if ("[" == t.charAt(0)) {
        if ("]" != t.charAt(t.length - 1))
            return OO;
        if (!(n = GO(t.slice(1, -1))))
            return OO;
        e.host = n;
    }
    else if (XO(e)) {
        if (t = yO(t), DO.test(t))
            return OO;
        if (null === (n = WO(t)))
            return OO;
        e.host = n;
    }
    else {
        if (FO.test(t))
            return OO;
        for (n = "", r = hO(t), i = 0; i < r.length; i++)
            n += YO(r[i], VO);
        e.host = n;
    } }, WO = function (e) { var t, n, r, i, a, s, o, u = e.split("."); if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4)
        return e; for (n = [], r = 0; r < t; r++) {
        if ("" == (i = u[r]))
            return e;
        if (a = 10, i.length > 1 && "0" == i.charAt(0) && (a = MO.test(i) ? 16 : 8, i = i.slice(8 == a ? 1 : 2)), "" === i)
            s = 0;
        else {
            if (!(10 == a ? NO : 8 == a ? LO : UO).test(i))
                return e;
            s = parseInt(i, a);
        }
        n.push(s);
    } for (r = 0; r < t; r++)
        if (s = n[r], r == t - 1) {
            if (s >= RO(256, 5 - t))
                return null;
        }
        else if (s > 255)
            return null; for (o = n.pop(), r = 0; r < n.length; r++)
        o += n[r] * RO(256, 3 - r); return o; }, GO = function (e) { var t, n, r, i, a, s, o, u = [0, 0, 0, 0, 0, 0, 0, 0], c = 0, l = null, f = 0, d = function () { return e.charAt(f); }; if (":" == d()) {
        if (":" != e.charAt(1))
            return;
        f += 2, l = ++c;
    } for (; d();) {
        if (8 == c)
            return;
        if (":" != d()) {
            for (t = n = 0; n < 4 && UO.test(d());)
                t = 16 * t + parseInt(d(), 16), f++, n++;
            if ("." == d()) {
                if (0 == n)
                    return;
                if (f -= n, c > 6)
                    return;
                for (r = 0; d();) {
                    if (i = null, r > 0) {
                        if (!("." == d() && r < 4))
                            return;
                        f++;
                    }
                    if (!jO.test(d()))
                        return;
                    for (; jO.test(d());) {
                        if (a = parseInt(d(), 10), null === i)
                            i = a;
                        else {
                            if (0 == i)
                                return;
                            i = 10 * i + a;
                        }
                        if (i > 255)
                            return;
                        f++;
                    }
                    u[c] = 256 * u[c] + i, 2 != ++r && 4 != r || c++;
                }
                if (4 != r)
                    return;
                break;
            }
            if (":" == d()) {
                if (f++, !d())
                    return;
            }
            else if (d())
                return;
            u[c++] = t;
        }
        else {
            if (null !== l)
                return;
            f++, l = ++c;
        }
    } if (null !== l)
        for (s = c - l, c = 7; 0 != c && s > 0;)
            o = u[c], u[c--] = u[l + s - 1], u[l + --s] = o;
    else if (8 != c)
        return; return u; }, $O = function (e) { var t, n, r, i; if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++)
            t.unshift(e % 256), e = EO(e / 256);
        return t.join(".");
    } if ("object" == typeof e) {
        for (t = "", r = function (e) { for (var t = null, n = 1, r = null, i = 0, a = 0; a < 8; a++)
            0 !== e[a] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = a), ++i); return i > n && (t = r, n = i), t; }(e), n = 0; n < 8; n++)
            i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
        return "[" + t + "]";
    } return e; }, VO = {}, JO = pO({}, VO, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), KO = pO({}, JO, { "#": 1, "?": 1, "{": 1, "}": 1 }), HO = pO({}, KO, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), YO = function (e, t) { var n = vO(e, 0); return n > 32 && n < 127 && !dO(t, e) ? e : encodeURIComponent(e); }, QO = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, XO = function (e) { return dO(QO, e.scheme); }, ZO = function (e) { return "" != e.username || "" != e.password; }, eC = function (e) { return !e.host || e.cannotBeABaseURL || "file" == e.scheme; }, tC = function (e, t) { var n; return 2 == e.length && PO.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n); }, nC = function (e) { var t; return e.length > 1 && tC(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t); }, rC = function (e) { var t = e.path, n = t.length; !n || "file" == e.scheme && 1 == n && tC(t[0], !0) || t.pop(); }, iC = function (e) { return "." === e || "%2e" === e.toLowerCase(); }, aC = {}, sC = {}, oC = {}, uC = {}, cC = {}, lC = {}, fC = {}, dC = {}, pC = {}, hC = {}, vC = {}, yC = {}, mC = {}, gC = {}, bC = {}, kC = {}, wC = {}, xC = {}, _C = {}, SC = {}, TC = {}, EC = function (e, t, n, r) { var i, a, s, o, u, c = n || aC, l = 0, f = "", d = !1, p = !1, h = !1; for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(BO, "")), t = t.replace(qO, ""), i = hO(t); l <= i.length;) {
        switch (a = i[l], c) {
            case aC:
                if (!a || !PO.test(a)) {
                    if (n)
                        return IO;
                    c = oC;
                    continue;
                }
                f += a.toLowerCase(), c = sC;
                break;
            case sC:
                if (a && (AO.test(a) || "+" == a || "-" == a || "." == a))
                    f += a.toLowerCase();
                else {
                    if (":" != a) {
                        if (n)
                            return IO;
                        f = "", c = oC, l = 0;
                        continue;
                    }
                    if (n && (XO(e) != dO(QO, f) || "file" == f && (ZO(e) || null !== e.port) || "file" == e.scheme && !e.host))
                        return;
                    if (e.scheme = f, n)
                        return void (XO(e) && QO[e.scheme] == e.port && (e.port = null));
                    f = "", "file" == e.scheme ? c = gC : XO(e) && r && r.scheme == e.scheme ? c = uC : XO(e) ? c = dC : "/" == i[l + 1] ? (c = cC, l++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = _C);
                }
                break;
            case oC:
                if (!r || r.cannotBeABaseURL && "#" != a)
                    return IO;
                if (r.cannotBeABaseURL && "#" == a) {
                    e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, c = TC;
                    break;
                }
                c = "file" == r.scheme ? gC : lC;
                continue;
            case uC:
                if ("/" != a || "/" != i[l + 1]) {
                    c = lC;
                    continue;
                }
                c = pC, l++;
                break;
            case cC:
                if ("/" == a) {
                    c = hC;
                    break;
                }
                c = xC;
                continue;
            case lC:
                if (e.scheme = r.scheme, a == rO)
                    e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;
                else if ("/" == a || "\\" == a && XO(e))
                    c = fC;
                else if ("?" == a)
                    e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", c = SC;
                else {
                    if ("#" != a) {
                        e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), c = xC;
                        continue;
                    }
                    e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = TC;
                }
                break;
            case fC:
                if (!XO(e) || "/" != a && "\\" != a) {
                    if ("/" != a) {
                        e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, c = xC;
                        continue;
                    }
                    c = hC;
                }
                else
                    c = pC;
                break;
            case dC:
                if (c = pC, "/" != a || "/" != f.charAt(l + 1))
                    continue;
                l++;
                break;
            case pC:
                if ("/" != a && "\\" != a) {
                    c = hC;
                    continue;
                }
                break;
            case hC:
                if ("@" == a) {
                    d && (f = "%40" + f), d = !0, s = hO(f);
                    for (var v = 0; v < s.length; v++) {
                        var y = s[v];
                        if (":" != y || h) {
                            var m = YO(y, HO);
                            h ? e.password += m : e.username += m;
                        }
                        else
                            h = !0;
                    }
                    f = "";
                }
                else if (a == rO || "/" == a || "?" == a || "#" == a || "\\" == a && XO(e)) {
                    if (d && "" == f)
                        return "Invalid authority";
                    l -= hO(f).length + 1, f = "", c = vC;
                }
                else
                    f += a;
                break;
            case vC:
            case yC:
                if (n && "file" == e.scheme) {
                    c = kC;
                    continue;
                }
                if (":" != a || p) {
                    if (a == rO || "/" == a || "?" == a || "#" == a || "\\" == a && XO(e)) {
                        if (XO(e) && "" == f)
                            return OO;
                        if (n && "" == f && (ZO(e) || null !== e.port))
                            return;
                        if (o = zO(e, f))
                            return o;
                        if (f = "", c = wC, n)
                            return;
                        continue;
                    }
                    "[" == a ? p = !0 : "]" == a && (p = !1), f += a;
                }
                else {
                    if ("" == f)
                        return OO;
                    if (o = zO(e, f))
                        return o;
                    if (f = "", c = mC, n == yC)
                        return;
                }
                break;
            case mC:
                if (!jO.test(a)) {
                    if (a == rO || "/" == a || "?" == a || "#" == a || "\\" == a && XO(e) || n) {
                        if ("" != f) {
                            var g = parseInt(f, 10);
                            if (g > 65535)
                                return CO;
                            e.port = XO(e) && g === QO[e.scheme] ? null : g, f = "";
                        }
                        if (n)
                            return;
                        c = wC;
                        continue;
                    }
                    return CO;
                }
                f += a;
                break;
            case gC:
                if (e.scheme = "file", "/" == a || "\\" == a)
                    c = bC;
                else {
                    if (!r || "file" != r.scheme) {
                        c = xC;
                        continue;
                    }
                    if (a == rO)
                        e.host = r.host, e.path = r.path.slice(), e.query = r.query;
                    else if ("?" == a)
                        e.host = r.host, e.path = r.path.slice(), e.query = "", c = SC;
                    else {
                        if ("#" != a) {
                            nC(i.slice(l).join("")) || (e.host = r.host, e.path = r.path.slice(), rC(e)), c = xC;
                            continue;
                        }
                        e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", c = TC;
                    }
                }
                break;
            case bC:
                if ("/" == a || "\\" == a) {
                    c = kC;
                    break;
                }
                r && "file" == r.scheme && !nC(i.slice(l).join("")) && (tC(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), c = xC;
                continue;
            case kC:
                if (a == rO || "/" == a || "\\" == a || "?" == a || "#" == a) {
                    if (!n && tC(f))
                        c = xC;
                    else if ("" == f) {
                        if (e.host = "", n)
                            return;
                        c = wC;
                    }
                    else {
                        if (o = zO(e, f))
                            return o;
                        if ("localhost" == e.host && (e.host = ""), n)
                            return;
                        f = "", c = wC;
                    }
                    continue;
                }
                f += a;
                break;
            case wC:
                if (XO(e)) {
                    if (c = xC, "/" != a && "\\" != a)
                        continue;
                }
                else if (n || "?" != a)
                    if (n || "#" != a) {
                        if (a != rO && (c = xC, "/" != a))
                            continue;
                    }
                    else
                        e.fragment = "", c = TC;
                else
                    e.query = "", c = SC;
                break;
            case xC:
                if (a == rO || "/" == a || "\\" == a && XO(e) || !n && ("?" == a || "#" == a)) {
                    if (".." === (u = (u = f).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (rC(e), "/" == a || "\\" == a && XO(e) || e.path.push("")) : iC(f) ? "/" == a || "\\" == a && XO(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && tC(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (a == rO || "?" == a || "#" == a))
                        for (; e.path.length > 1 && "" === e.path[0];)
                            e.path.shift();
                    "?" == a ? (e.query = "", c = SC) : "#" == a && (e.fragment = "", c = TC);
                }
                else
                    f += YO(a, KO);
                break;
            case _C:
                "?" == a ? (e.query = "", c = SC) : "#" == a ? (e.fragment = "", c = TC) : a != rO && (e.path[0] += YO(a, VO));
                break;
            case SC:
                n || "#" != a ? a != rO && ("'" == a && XO(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : YO(a, VO)) : (e.fragment = "", c = TC);
                break;
            case TC: a != rO && (e.fragment += YO(a, JO));
        }
        l++;
    } }, RC = function (e) { var t, n, r = fO(this, RC, "URL"), i = arguments.length > 1 ? arguments[1] : void 0, a = mO(e), s = SO(r, { type: "URL" }); if (void 0 !== i)
        if (i instanceof RC)
            t = TO(i);
        else if (n = EC(t = {}, mO(i)))
            throw TypeError(n); if (n = EC(s, a, null, t))
        throw TypeError(n); var o = s.searchParams = new xO, u = _O(o); u.updateSearchParams(s.query), u.updateURL = function () { s.query = String(o) || null; }, sO || (r.href = OC.call(r), r.origin = CC.call(r), r.protocol = PC.call(r), r.username = AC.call(r), r.password = jC.call(r), r.host = MC.call(r), r.hostname = LC.call(r), r.port = NC.call(r), r.pathname = UC.call(r), r.search = DC.call(r), r.searchParams = FC.call(r), r.hash = BC.call(r)); }, IC = RC.prototype, OC = function () { var e = TO(this), t = e.scheme, n = e.username, r = e.password, i = e.host, a = e.port, s = e.path, o = e.query, u = e.fragment, c = t + ":"; return null !== i ? (c += "//", ZO(e) && (c += n + (r ? ":" + r : "") + "@"), c += $O(i), null !== a && (c += ":" + a)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + s.join("/") : "", null !== o && (c += "?" + o), null !== u && (c += "#" + u), c; }, CC = function () { var e = TO(this), t = e.scheme, n = e.port; if ("blob" == t)
        try {
            return new RC(t.path[0]).origin;
        }
        catch (e) {
            return "null";
        } return "file" != t && XO(e) ? t + "://" + $O(e.host) + (null !== n ? ":" + n : "") : "null"; }, PC = function () { return TO(this).scheme + ":"; }, AC = function () { return TO(this).username; }, jC = function () { return TO(this).password; }, MC = function () { var e = TO(this), t = e.host, n = e.port; return null === t ? "" : null === n ? $O(t) : $O(t) + ":" + n; }, LC = function () { var e = TO(this).host; return null === e ? "" : $O(e); }, NC = function () { var e = TO(this).port; return null === e ? "" : String(e); }, UC = function () { var e = TO(this), t = e.path; return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""; }, DC = function () { var e = TO(this).query; return e ? "?" + e : ""; }, FC = function () { return TO(this).searchParams; }, BC = function () { var e = TO(this).fragment; return e ? "#" + e : ""; }, qC = function (e, t) { return { get: e, set: t, configurable: !0, enumerable: !0 }; };
    if (sO && cO(IC, { href: qC(OC, (function (e) { var t = TO(this), n = mO(e), r = EC(t, n); if (r)
            throw TypeError(r); _O(t.searchParams).updateSearchParams(t.query); })), origin: qC(CC), protocol: qC(PC, (function (e) { var t = TO(this); EC(t, mO(e) + ":", aC); })), username: qC(AC, (function (e) { var t = TO(this), n = hO(mO(e)); if (!eC(t)) {
            t.username = "";
            for (var r = 0; r < n.length; r++)
                t.username += YO(n[r], HO);
        } })), password: qC(jC, (function (e) { var t = TO(this), n = hO(mO(e)); if (!eC(t)) {
            t.password = "";
            for (var r = 0; r < n.length; r++)
                t.password += YO(n[r], HO);
        } })), host: qC(MC, (function (e) { var t = TO(this); t.cannotBeABaseURL || EC(t, mO(e), vC); })), hostname: qC(LC, (function (e) { var t = TO(this); t.cannotBeABaseURL || EC(t, mO(e), yC); })), port: qC(NC, (function (e) { var t = TO(this); eC(t) || ("" == (e = mO(e)) ? t.port = null : EC(t, e, mC)); })), pathname: qC(UC, (function (e) { var t = TO(this); t.cannotBeABaseURL || (t.path = [], EC(t, mO(e), wC)); })), search: qC(DC, (function (e) { var t = TO(this); "" == (e = mO(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", EC(t, e, SC)), _O(t.searchParams).updateSearchParams(t.query); })), searchParams: qC(FC), hash: qC(BC, (function (e) { var t = TO(this); "" != (e = mO(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", EC(t, e, TC)) : t.fragment = null; })) }), lO(IC, "toJSON", (function () { return OC.call(this); }), { enumerable: !0 }), lO(IC, "toString", (function () { return OC.call(this); }), { enumerable: !0 }), wO) {
        var zC = wO.createObjectURL, WC = wO.revokeObjectURL;
        zC && lO(RC, "createObjectURL", (function (e) { return zC.apply(wO, arguments); })), WC && lO(RC, "revokeObjectURL", (function (e) { return WC.apply(wO, arguments); }));
    }
    function GC(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    function $C(e) { return function (e) { if (Array.isArray(e))
        return Iy(e); }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }(e) || Oy(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    gO(RC, "URL"), aO({ global: !0, forced: !oO, sham: !sO }, { URL: RC }), function (e) {
        var t = void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = og.exports, r = wm.exports, i = lg, a = Xf.exports, s = bm, o = ih;
        function u(e) { return e && "object" === Ca(e) && "default" in e ? e : { default: e }; }
        function c(e) { if (e && e.__esModule)
            return e; var t = Object.create(null); return e && Object.keys(e).forEach((function (n) { if ("default" !== n) {
            var r = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function () { return e[n]; } });
        } })), t.default = e, Object.freeze(t); }
        var l = u(n), f = u(r), d = u(i), p = c(a);
        function h(e, t, n, r) { var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r; if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ca(Reflect)) && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, n, r);
        else
            for (var o = e.length - 1; o >= 0; o--)
                (i = e[o]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, n, s) : i(t, n)) || s); return a > 3 && s && Object.defineProperty(t, n, s), s; }
        function v(e, t) { if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ca(Reflect)) && "function" == typeof Reflect.metadata)
            return Reflect.metadata(e, t); }
        function y(e, t) { return ["".concat((new Date).toISOString(), " MCS Client ").concat(e, ":")].concat(Array.from(t)); }
        var m = function () { function e(t) { Ma(this, e), f.default(this, "prefix", ""), this.prefix = null != t && t.length > 0 ? t + " " : ""; } return Ea(e, [{ key: "setLevel", value: function (e) { p.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.trace.apply(null, y(this.prefix + "T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.debug.apply(null, y(this.prefix + "D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.info.apply(null, y(this.prefix + "I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.warn.apply(null, y(this.prefix + "W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.error.apply(null, y(this.prefix + "E", t)); } }], [{ key: "scope", value: function (t) { return new e(t); } }, { key: "setLevel", value: function (e) { p.setLevel(e); } }, { key: "trace", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.trace.apply(null, y("T", t)); } }, { key: "debug", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.debug.apply(null, y("D", t)); } }, { key: "info", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.info.apply(null, y("I", t)); } }, { key: "warn", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.warn.apply(null, y("W", t)); } }, { key: "error", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; p.error.apply(null, y("E", t)); } }]), e; }(), g = function (e, t) { return "".concat((n = e, n.startsWith("http") ? "" : function (e) { return "https://mcs.".concat(null != e ? e : "us1", ".twilio.com"); }(t))).concat(e); var n; }, b = function () { function e(t, n, r, i) { var a, s, o, u, c, l; Ma(this, e); var f = null !== (a = null !== (s = i.MCS) && void 0 !== s ? s : i) && void 0 !== a ? a : {}; this.region = null !== (o = null !== (u = f.region) && void 0 !== u ? u : i.region) && void 0 !== o ? o : "us1", this.mediaUrl = g(n, this.region), this.mediaSetUrl = r ? g(r) : "".concat(this.mediaUrl, "Set"), this.token = t, this.retryWhenThrottledOverride = null === (c = f.retryWhenThrottledOverride) || void 0 === c || c, this.backoffConfigOverride = null !== (l = f.backoffConfigOverride) && void 0 !== l ? l : e.backoffConfigDefault; } return Ea(e, [{ key: "updateToken", value: function (e) { this.token = e; } }], [{ key: "backoffConfigDefault", get: function () { return { min: 1e3, max: 4e3, maxAttemptsCount: 3 }; } }, { key: "retryWhenThrottledDefault", get: function () { return true; } }]), e; }(), Media = function () { function Media(e, t, n) { Ma(this, Media), this.config = e, this.network = t, this._update(n); } return Ea(Media, [{ key: "sid", get: function () { return this.state.sid; } }, { key: "serviceSid", get: function () { return this.state.serviceSid; } }, { key: "dateCreated", get: function () { return this.state.dateCreated; } }, { key: "dateUpdated", get: function () { return this.state.dateUpdated; } }, { key: "contentType", get: function () { return this.state.contentType; } }, { key: "size", get: function () { return this.state.size; } }, { key: "fileName", get: function () { return this.state.filename; } }, { key: "filename", get: function () { return this.state.filename; } }, { key: "category", get: function () { return this.state.category; } }, { key: "getContentUrl", value: function () { var e = this; return l.default(d.default.mark((function t() { var n; return d.default.wrap((function (t) { for (;;)
                    switch (t.prev = t.next) {
                        case 0: return t.next = 2, e.network.get("".concat(e.config.mediaUrl, "/").concat(e.sid));
                        case 2: return n = t.sent, e._update(n.body), t.abrupt("return", Promise.resolve(e.state.contentDirectUrl));
                        case 5:
                        case "end": return t.stop();
                    } }), t); })))(); } }, { key: "getCachedContentUrl", value: function () { var e = this; return l.default(d.default.mark((function t() { return d.default.wrap((function (t) { for (;;)
                    switch (t.prev = t.next) {
                        case 0:
                            if (!e.state.contentDirectUrl) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", Promise.resolve(e.state.contentDirectUrl));
                        case 2: return t.next = 4, e.getContentUrl();
                        case 4: return t.abrupt("return", t.sent);
                        case 5:
                        case "end": return t.stop();
                    } }), t); })))(); } }, { key: "_update", value: function (e) { var t, n, r, i; this.state = { sid: e.sid, serviceSid: e.service_sid, channelSid: e.channel_sid, messageSid: e.message_sid, dateCreated: e.date_created ? new Date(e.date_created) : null, dateUploadUpdated: e.date_upload_updated ? new Date(e.date_upload_updated) : null, dateUpdated: e.date_updated ? new Date(e.date_updated) : null, size: e.size, contentType: e.content_type, author: e.author, url: e.url, contentUrl: e.links.content, contentDirectUrl: null !== (t = e.links.content_direct_temporary) && void 0 !== t ? t : null, filename: null !== (n = e.filename) && void 0 !== n ? n : null, category: null !== (r = e.category) && void 0 !== r ? r : "media", isMultipartUpstream: null !== (i = e.is_multipart_upstream) && void 0 !== i && i }; } }]), Media; }(), k = function (e) { Oa(n, e); var t = GC(n); function n(e, r, i, a, s) { var o; return Ma(this, n), (o = t.call(this, e)).code = r, o.body = i, o.status = a, o.headers = s, o; } return n; }(AR(Error)), w = t.XMLHttpRequest || {};
        function x(e) { var t = e.getResponseHeader("Content-Type"); if (!t || 0 !== t.indexOf("application/json") || 0 === e.responseText.length)
            return e.responseText; try {
            return JSON.parse(e.responseText);
        }
        catch (t) {
            return e.responseText;
        } }
        var _, S, T = function () { function e() { Ma(this, e); } return Ea(e, [{ key: "get", value: function (t, n) { return l.default(d.default.mark((function r() { return d.default.wrap((function (r) { for (;;)
                    switch (r.prev = r.next) {
                        case 0: return r.abrupt("return", e.request("GET", t, n));
                        case 1:
                        case "end": return r.stop();
                    } }), r); })))(); } }, { key: "post", value: function (t, n, r) { return l.default(d.default.mark((function i() { return d.default.wrap((function (i) { for (;;)
                    switch (i.prev = i.next) {
                        case 0: return i.abrupt("return", e.request("POST", t, n, r));
                        case 1:
                        case "end": return i.stop();
                    } }), i); })))(); } }], [{ key: "request", value: function (e, t, n, r) { return l.default(d.default.mark((function i() { return d.default.wrap((function (i) { for (;;)
                    switch (i.prev = i.next) {
                        case 0: return i.abrupt("return", new Promise((function (i, a) { var s = new w; for (var o in s.open(e, t, !0), s.onreadystatechange = function () { if (4 === s.readyState) {
                            var e, t = (e = s.getAllResponseHeaders()) ? e.split("\r\n").map((function (e) { return e.split(": "); })).filter((function (e) { return 2 === e.length && e[1].length > 0; })).reduce((function (e, t) { return e[t[0]] = t[1], e; }), {}) : {}, n = x(s);
                            if (200 <= s.status && s.status < 300)
                                i({ status: s.status, headers: t, body: n });
                            else {
                                var r, o, u = null !== (r = s.statusText) && void 0 !== r ? r : "NONE";
                                o = "string" == typeof n ? n && 1 === n.split("\n", 2).length ? n : "" : JSON.stringify(n);
                                var c = "".concat(s.status, ": [").concat(u, "] ").concat(o);
                                a(new k(c, s.status, n, u, t));
                            }
                        } }, n)
                            s.setRequestHeader(o, n[o]), "Content-Type" === o && "application/json" === n[o] && (r = JSON.stringify(r)); s.send(r); })));
                        case 1:
                        case "end": return i.stop();
                    } }), i); })))(); } }]), e; }(), E = m.scope("Network"), R = function () { function e(t, n) { Ma(this, e), this.config = t, this.transport = n; } return Ea(e, [{ key: "backoffConfig", value: function () { return Object.assign(b.backoffConfigDefault, this.config.backoffConfigOverride); } }, { key: "retryWhenThrottled", value: function () { var e, t; return null !== (e = null !== (t = this.config.retryWhenThrottledOverride) && void 0 !== t ? t : b.retryWhenThrottledDefault) && void 0 !== e && e; } }, { key: "executeWithRetry", value: function (e, t) { var n = this; return l.default(d.default.mark((function r() { return d.default.wrap((function (r) { for (;;)
                    switch (r.prev = r.next) {
                        case 0: return r.abrupt("return", new Promise((function (r, i) { var a = [502, 503, 504]; t && a.push(429); var o = new s.Retrier(n.backoffConfig()); o.on("attempt", l.default(d.default.mark((function t() { var n; return d.default.wrap((function (t) { for (;;)
                            switch (t.prev = t.next) {
                                case 0: return t.prev = 0, t.next = 3, e();
                                case 3:
                                    n = t.sent, o.succeeded(n), t.next = 10;
                                    break;
                                case 7: t.prev = 7, t.t0 = t.catch(0), a.indexOf(t.t0.status) > -1 || "Twilsock disconnected" === t.t0.message ? o.failed(t.t0) : (o.removeAllListeners(), o.cancel(), i(t.t0));
                                case 10:
                                case "end": return t.stop();
                            } }), t, null, [[0, 7]]); })))), o.on("succeeded", (function (e) { r(e); })), o.on("cancelled", (function (e) { return i(e); })), o.on("failed", (function (e) { return i(e); })), o.start(); })));
                        case 1:
                        case "end": return r.stop();
                    } }), r); })))(); } }, { key: "get", value: function (e) { var t = this; return l.default(d.default.mark((function n() { var r, i; return d.default.wrap((function (n) { for (;;)
                    switch (n.prev = n.next) {
                        case 0: return r = { "X-Twilio-Token": t.config.token }, E.trace("sending GET request to ", e, " headers ", r), n.prev = 2, n.next = 5, t.executeWithRetry((function () { return t.transport.get(e, r); }), t.retryWhenThrottled());
                        case 5: return i = n.sent, E.trace("response", i), n.abrupt("return", i);
                        case 10: throw n.prev = 10, n.t0 = n.catch(2), E.debug("get() error ".concat(n.t0)), n.t0;
                        case 14:
                        case "end": return n.stop();
                    } }), n, null, [[2, 10]]); })))(); } }, { key: "post", value: function (e, n, r, i, a) { var s = this; return l.default(d.default.mark((function o() { var u, c, l; return d.default.wrap((function (o) { for (;;)
                    switch (o.prev = o.next) {
                        case 0: return u = { "X-Twilio-Token": s.config.token }, "undefined" != typeof FormData && r instanceof FormData || !i || Object.assign(u, { "Content-Type": i }), c = new URL(e), n && c.searchParams.append("Category", n), a && c.searchParams.append("Filename", a), E.trace("sending POST request to ".concat(e, " with headers ").concat(u)), o.prev = 6, o.next = 9, s.transport.post(c.href, u, r);
                        case 9:
                            l = o.sent, o.next = 18;
                            break;
                        case 12:
                            if (o.prev = 12, o.t0 = o.catch(6), !(void 0 === t.XMLHttpRequest && r instanceof FormData)) {
                                o.next = 16;
                                break;
                            }
                            throw new TypeError("Posting FormData supported only with browser engine's FormData");
                        case 16: throw E.debug("post() error ".concat(o.t0)), o.t0;
                        case 18: return E.trace("response", l), o.abrupt("return", l);
                        case 20:
                        case "end": return o.stop();
                    } }), o, null, [[6, 12]]); })))(); } }]), e; }(), I = m.scope("");
        e.default = (S = _ = function () { function Client(e, t, n) { var r, i; Ma(this, Client); var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; this.options = a, this.options.logLevel = null !== (r = this.options.logLevel) && void 0 !== r ? r : "silent", this.config = new b(e, t, n, this.options), I.setLevel(this.options.logLevel), this.options.transport = null !== (i = this.options.transport) && void 0 !== i ? i : new T, this.transport = this.options.transport, this.network = new R(this.config, this.transport); } return Ea(Client, [{ key: "updateToken", value: function (e) { I.info("updateToken"), this.config.updateToken(e); } }, { key: "get", value: function (e) { var t = this; return l.default(d.default.mark((function n() { var r; return d.default.wrap((function (n) { for (;;)
                    switch (n.prev = n.next) {
                        case 0: return n.next = 2, t.network.get("".concat(t.config.mediaUrl, "/").concat(e));
                        case 2: return r = n.sent, n.abrupt("return", new Media(t.config, t.network, r.body));
                        case 4:
                        case "end": return n.stop();
                    } }), n); })))(); } }, { key: "post", value: function (e, t, n, r) { var i = this; return l.default(d.default.mark((function a() { var s; return d.default.wrap((function (a) { for (;;)
                    switch (a.prev = a.next) {
                        case 0: return a.next = 2, i.network.post(i.config.mediaUrl, null != n ? n : "media", t, e, r);
                        case 2: return s = a.sent, a.abrupt("return", new Media(i.config, i.network, s.body));
                        case 4:
                        case "end": return a.stop();
                    } }), a); })))(); } }, { key: "postFormData", value: function (e, t) { var n = this; return l.default(d.default.mark((function r() { var i; return d.default.wrap((function (r) { for (;;)
                    switch (r.prev = r.next) {
                        case 0: return r.next = 2, n.network.post(n.config.mediaUrl, null != t ? t : "media", e);
                        case 2: return i = r.sent, r.abrupt("return", new Media(n.config, n.network, i.body));
                        case 4:
                        case "end": return r.stop();
                    } }), r); })))(); } }, { key: "mediaSetGet", value: function (e) { var t = this; return l.default(d.default.mark((function n() { var r, i; return d.default.wrap((function (n) { for (;;)
                    switch (n.prev = n.next) {
                        case 0: return r = { command: "get", list: e.map((function (e) { return { media_sid: e }; })) }, n.next = 3, t.network.post("".concat(t.config.mediaSetUrl), null, JSON.stringify(r), "application/json");
                        case 3: return i = n.sent, n.abrupt("return", i.map((function (e) { if (200 !== e.code)
                            throw new Error("Failed to obtain detailed information about Media items (failed SID ".concat(e.media_record.sid, ")")); return new Media(t.config, t.network, e.media_record); })));
                        case 5:
                        case "end": return n.stop();
                    } }), n); })))(); } }]), Client; }(), f.default(_, "version", "0.5.2"), S), h([o.validateTypes(o.nonEmptyString), v("design:type", Function), v("design:paramtypes", [String]), v("design:returntype", void 0)], e.default.prototype, "updateToken", null), h([o.validateTypesAsync(o.nonEmptyString), v("design:type", Function), v("design:paramtypes", [String]), v("design:returntype", Promise)], e.default.prototype, "get", null), e.default = h([o.validateConstructorTypes(o.nonEmptyString, o.nonEmptyString, [o.nonEmptyString, o.literal(null)], [o.pureObject, "undefined"]), v("design:paramtypes", [String, String, Object, Object])], e.default), e.Client = e.default, e.McsClient = e.default, e.McsMedia = Media, e.Media = Media, e.default = e.default;
    }(MR);
    var VC = is, JC = "ArrayBuffer", KC = jk.ArrayBuffer;
    function HC(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    In({ global: !0, forced: i.ArrayBuffer !== KC }, { ArrayBuffer: KC }), VC(JC);
    var YC = rd.scope("Participant"), Participant = function (e) { Oa(Participant, e); var t, n, r, i = HC(Participant); function Participant(e, t, n, r, a) { var s; if (Ma(this, Participant), (s = i.call(this)).conversation = n, s.links = r, s.services = a, s.state = { attributes: nh(e.attributes, "Retrieved malformed attributes from the server for participant: " + t, YC), dateCreated: e.dateCreated ? th(e.dateCreated) : null, dateUpdated: e.dateCreated ? th(e.dateUpdated) : null, sid: t, typingTimeout: null, isTyping: !1, identity: e.identity || null, roleSid: e.roleSid || null, lastReadMessageIndex: Number.isInteger(e.lastConsumedMessageIndex) ? e.lastConsumedMessageIndex : null, lastReadTimestamp: e.lastConsumptionTimestamp ? th(e.lastConsumptionTimestamp) : null, type: e.type || "chat", userInfo: e.userInfo }, !e.identity && !e.type)
        throw new Error("Received invalid Participant object from server: Missing identity or type of Participant."); return s; } return Ea(Participant, [{ key: "sid", get: function () { return this.state.sid; } }, { key: "attributes", get: function () { return this.state.attributes; } }, { key: "dateCreated", get: function () { return this.state.dateCreated; } }, { key: "dateUpdated", get: function () { return this.state.dateUpdated; } }, { key: "identity", get: function () { return this.state.identity; } }, { key: "isTyping", get: function () { return this.state.isTyping; } }, { key: "lastReadMessageIndex", get: function () { return this.state.lastReadMessageIndex; } }, { key: "lastReadTimestamp", get: function () { return this.state.lastReadTimestamp; } }, { key: "roleSid", get: function () { return this.state.roleSid; } }, { key: "type", get: function () { return this.state.type; } }, { key: "_startTyping", value: function (e) { var t = this; return clearTimeout(this.state.typingTimeout), this.state.isTyping = !0, this.emit("typingStarted", this), this.conversation.emit("typingStarted", this), this.state.typingTimeout = setTimeout((function () { return t._endTyping(); }), e), this; } }, { key: "_endTyping", value: function () { this.state.typingTimeout && (this.state.isTyping = !1, this.emit("typingEnded", this), this.conversation.emit("typingEnded", this), clearInterval(this.state.typingTimeout), this.state.typingTimeout = null); } }, { key: "_update", value: function (e) { var t = [], n = nh(e.attributes, "Retrieved malformed attributes from the server for participant: " + this.state.sid, YC); e.attributes && !Ty(this.state.attributes, n) && (this.state.attributes = n, t.push("attributes")); var r = th(e.dateUpdated); e.dateUpdated && r.getTime() !== (this.state.dateUpdated && this.state.dateUpdated.getTime()) && (this.state.dateUpdated = r, t.push("dateUpdated")); var i = th(e.dateCreated); if (e.dateCreated && i.getTime() !== (this.state.dateCreated && this.state.dateCreated.getTime()) && (this.state.dateCreated = i, t.push("dateCreated")), e.roleSid && this.state.roleSid !== e.roleSid && (this.state.roleSid = e.roleSid, t.push("roleSid")), !Number.isInteger(e.lastConsumedMessageIndex) && null !== e.lastConsumedMessageIndex || this.state.lastReadMessageIndex === e.lastConsumedMessageIndex || (this.state.lastReadMessageIndex = e.lastConsumedMessageIndex, t.push("lastReadMessageIndex")), e.lastConsumptionTimestamp) {
                var a = new Date(e.lastConsumptionTimestamp);
                this.state.lastReadTimestamp && this.state.lastReadTimestamp.getTime() === a.getTime() || (this.state.lastReadTimestamp = a, t.push("lastReadTimestamp"));
            } return t.length > 0 && this.emit("updated", { participant: this, updateReasons: t }), this; } }, { key: "getUser", value: (r = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if ("chat" == this.type) {
                            e.next = 2;
                            break;
                        }
                        throw new Error("Getting User is not supported for this Participant type: " + this.type);
                    case 2: return e.abrupt("return", this.services.users.getUser(this.state.identity, this.state.userInfo));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return r.apply(this, arguments); }) }, { key: "remove", value: (n = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.conversation.removeParticipant(this));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }, { key: "updateAttributes", value: (t = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: JSON.stringify(t) });
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }]), Participant; }(_y);
    function QC(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    ja(Participant, "typingStarted", "typingStarted"), ja(Participant, "typingEnded", "typingEnded"), ja(Participant, "updated", "updated"), wl([Xv(["string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], Participant.prototype, "updateAttributes", null);
    var XC = rd.scope("Participants"), ZC = function (e) { Oa(o, e); var t, n, r, i, a, s = QC(o); function o(e, t, n, r, i) { var a; return Ma(this, o), (a = s.call(this)).conversation = e, a.participants = t, a.links = n, a.configuration = r, a.services = i, a; } return Ea(o, [{ key: "unsubscribe", value: (a = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!this.rosterEntityPromise) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 3, this.rosterEntityPromise;
                    case 3: e.sent.close(), this.rosterEntityPromise = null;
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return a.apply(this, arguments); }) }, { key: "subscribe", value: function (e) { var t = this; return this.rosterEntityPromise = this.rosterEntityPromise || this.services.syncClient.map({ id: e, mode: "open_existing" }).then((function (e) { e.on("itemAdded", (function (e) { XC.debug(t.conversation.sid + " itemAdded: " + e.item.key), t.upsertParticipant(e.item.key, e.item.data).then((function (e) { t.emit("participantJoined", e); })); })), e.on("itemRemoved", (function (e) { XC.debug(t.conversation.sid + " itemRemoved: " + e.key); var n = e.key; if (t.participants.has(n)) {
                var r = t.participants.get(n);
                t.participants.delete(n), t.emit("participantLeft", r);
            } })), e.on("itemUpdated", (function (e) { XC.debug(t.conversation.sid + " itemUpdated: " + e.item.key), t.upsertParticipant(e.item.key, e.item.data); })); var n = [], r = t; return e.getItems().then((function e(t) { return t.items.forEach((function (e) { n.push(r.upsertParticipant(e.key, e.data)); })), t.hasNextPage ? t.nextPage().then(e) : null; })).then((function () { return Promise.all(n); })).then((function () { return e; })); })).catch((function (e) { throw t.rosterEntityPromise = null, "disconnected" != t.services.syncClient.connectionState && XC.error("Failed to get roster object for conversation", t.conversation.sid, e), XC.debug("ERROR: Failed to get roster object for conversation", t.conversation.sid, e), e; })); } }, { key: "upsertParticipant", value: (i = Sa(bl.mark((function e(t, n) { var r, i, a = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!(r = this.participants.get(t))) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", r._update(n));
                    case 3: return i = { self: "".concat(this.links.participants, "/").concat(t) }, r = new Participant(n, t, this.conversation, i, this.services), this.participants.set(t, r), r.on("updated", (function (e) { return a.emit("participantUpdated", e); })), e.abrupt("return", r);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return i.apply(this, arguments); }) }, { key: "getParticipants", value: function () { var e = this; return this.rosterEntityPromise.then((function () { var t = []; return e.participants.forEach((function (e) { return t.push(e); })), t; })); } }, { key: "getParticipantBySid", value: (r = Sa(bl.mark((function e(t) { var n = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.rosterEntityPromise.then((function () { var e = n.participants.get(t); if (!e)
                        throw new Error("Participant with SID " + t + " was not found"); return e; })));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "getParticipantByIdentity", value: (n = Sa(bl.mark((function e(t) { var n, r = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = null, e.abrupt("return", this.rosterEntityPromise.then((function () { if (r.participants.forEach((function (e) { e.identity === t && (n = e); })), !n)
                        throw new Error("Participant with identity " + t + " was not found"); return n; })));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "add", value: (t = Sa(bl.mark((function e(t, n) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.participants, { identity: t, attributes: void 0 !== n ? JSON.stringify(n) : void 0 });
                    case 2: return e.abrupt("return", e.sent);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, n) { return t.apply(this, arguments); }) }, { key: "addNonChatParticipant", value: function (e, t, n) { return this.services.commandExecutor.mutateResource("post", this.links.participants, { attributes: void 0 !== n ? JSON.stringify(n) : void 0, messaging_binding: { address: t, proxy_address: e } }); } }, { key: "remove", value: function (e) { return this.services.commandExecutor.mutateResource("delete", "".concat(this.links.participants, "/").concat(e)); } }]), o; }(_y), eP = In, tP = On, nP = Q, rP = Ut, iP = gr, aP = s, sP = v_, oP = ec, uP = m_, cP = g_, lP = L, fP = k_, dP = [], pP = dP.sort, hP = aP((function () { dP.sort(void 0); })), vP = aP((function () { dP.sort(null); })), yP = oP("sort"), mP = !aP((function () { if (lP)
        return lP < 70; if (!(uP && uP > 3)) {
        if (cP)
            return !0;
        if (fP)
            return fP < 603;
        var e, t, n, r, i = "";
        for (e = 65; e < 76; e++) {
            switch (t = String.fromCharCode(e), e) {
                case 66:
                case 69:
                case 70:
                case 72:
                    n = 3;
                    break;
                case 68:
                case 71:
                    n = 4;
                    break;
                default: n = 2;
            }
            for (r = 0; r < 47; r++)
                dP.push({ k: t + r, v: n });
        }
        for (dP.sort((function (e, t) { return t.v - e.v; })), r = 0; r < dP.length; r++)
            t = dP[r].k.charAt(0), i.charAt(i.length - 1) !== t && (i += t);
        return "DGBEFHACIJK" !== i;
    } }));
    eP({ target: "Array", proto: !0, forced: hP || !vP || !yP || !mP }, { sort: function (e) { void 0 !== e && tP(e); var t = nP(this); if (mP)
            return void 0 === e ? pP.call(t) : pP.call(t, e); var n, r, i = [], a = rP(t.length); for (r = 0; r < a; r++)
            r in t && i.push(t[r]); for (n = (i = sP(i, function (e) { return function (t, n) { return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : iP(t) > iP(n) ? 1 : -1; }; }(e))).length, r = 0; r < n;)
            t[r] = i[r++]; for (; r < a;)
            delete t[r++]; return t; } });
    var gP = NR, bP = k, kP = gr;
    In({ target: "String", proto: !0, forced: !DR("includes") }, { includes: function (e) { return !!~kP(bP(this)).indexOf(kP(gP(e)), arguments.length > 1 ? arguments[1] : void 0); } });
    var Media = function () { function Media(e, t) { Ma(this, Media), ja(this, "mcsMedia", null), this.services = t, e instanceof MR.McsMedia && (this.mcsMedia = e), this.state = { sid: e.sid, category: e.category, filename: e.filename, contentType: e.contentType, size: e.size }; } var e, t, n; return Ea(Media, [{ key: "sid", get: function () { return this.state.sid; } }, { key: "filename", get: function () { return this.state.filename; } }, { key: "contentType", get: function () { return this.state.contentType; } }, { key: "size", get: function () { return this.state.size; } }, { key: "category", get: function () { return this.state.category; } }, { key: "getContentTemporaryUrl", value: (n = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._fetchMcsMedia();
                    case 2: return e.abrupt("return", this.mcsMedia.getContentUrl());
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }, { key: "getCachedTemporaryUrl", value: (t = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._fetchMcsMedia();
                    case 2: return e.abrupt("return", this.mcsMedia.getCachedContentUrl());
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "_fetchMcsMedia", value: (e = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.mcsMedia) {
                            e.next = 8;
                            break;
                        }
                        if (!this.services.mcsClient) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 4, this.services.mcsClient.get(this.state.sid);
                    case 4:
                        this.mcsMedia = e.sent, e.next = 8;
                        break;
                    case 7: throw new Error("Media Content Service is unavailable");
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return e.apply(this, arguments); }) }]), Media; }(), AggregatedDeliveryReceipt = function () { function AggregatedDeliveryReceipt(e) { Ma(this, AggregatedDeliveryReceipt), this.state = e; } return Ea(AggregatedDeliveryReceipt, [{ key: "total", get: function () { return this.state.total; } }, { key: "sent", get: function () { return this.state.sent; } }, { key: "delivered", get: function () { return this.state.delivered; } }, { key: "read", get: function () { return this.state.read; } }, { key: "undelivered", get: function () { return this.state.undelivered; } }, { key: "failed", get: function () { return this.state.failed; } }, { key: "_update", value: function (e) { this.state = e; } }, { key: "_isEquals", value: function (e) { var t = this.total === e.total, n = this.sent === e.sent, r = this.delivered === e.delivered, i = this.read === e.read, a = this.undelivered === e.undelivered, s = this.failed === e.failed; return t && n && r && i && a && s; } }]), AggregatedDeliveryReceipt; }(), wP = function () { function e(t, n, r, i) { Ma(this, e), this.state = { prevToken: r, nextToken: i, source: n, items: t }; } return Ea(e, [{ key: "hasNextPage", get: function () { return !!this.state.nextToken; } }, { key: "hasPrevPage", get: function () { return !!this.state.prevToken; } }, { key: "items", get: function () { return this.state.items; } }, { key: "nextPage", value: function () { return this.hasNextPage ? this.state.source(this.state.nextToken) : Promise.reject(new Error("No next page")); } }, { key: "prevPage", value: function () { return this.hasPrevPage ? this.state.source(this.state.prevToken) : Promise.reject(new Error("No previous page")); } }]), e; }(), DetailedDeliveryReceipt = function DetailedDeliveryReceipt(e) { Ma(this, DetailedDeliveryReceipt), this.sid = e.sid, this.messageSid = e.message_sid, this.conversationSid = e.conversation_sid, this.channelMessageSid = e.channel_message_sid, this.participantSid = e.participant_sid, this.status = e.status || "queued", this.errorCode = e.error_code || 0, this.dateCreated = e.date_created, this.dateUpdated = e.date_updated; };
    function xP(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    var _P = rd.scope("Message"), Message = function (e) { Oa(Message, e); var t, n, r, i, a, s, o, u = xP(Message); function Message(e, t, n, r, i, a) { var s, o, c, l, f, d; return Ma(this, Message), (d = u.call(this)).conversation = n, d.links = r, d.configuration = i, d.services = a, d.state = { sid: t.sid, index: e, author: null !== (s = t.author) && void 0 !== s ? s : null, subject: null !== (o = t.subject) && void 0 !== o ? o : null, body: t.text, timestamp: t.timestamp ? new Date(t.timestamp) : null, dateUpdated: t.dateUpdated ? new Date(t.dateUpdated) : null, lastUpdatedBy: null !== (c = t.lastUpdatedBy) && void 0 !== c ? c : null, attributes: nh(t.attributes, "Got malformed attributes for the message ".concat(t.sid), _P), type: null !== (l = t.type) && void 0 !== l ? l : "text", media: t.type && "media" === t.type && t.media ? new Media(t.media, d.services) : null, medias: t.type && "media" === t.type && t.medias ? t.medias.map((function (e) { return new Media(e, d.services); })) : null, participantSid: null !== (f = t.memberSid) && void 0 !== f ? f : null, aggregatedDeliveryReceipt: t.delivery ? new AggregatedDeliveryReceipt(t.delivery) : null }, d; } return Ea(Message, [{ key: "sid", get: function () { return this.state.sid; } }, { key: "author", get: function () { return this.state.author; } }, { key: "subject", get: function () { return this.state.subject; } }, { key: "body", get: function () { return this.state.body; } }, { key: "dateUpdated", get: function () { return this.state.dateUpdated; } }, { key: "index", get: function () { return this.state.index; } }, { key: "lastUpdatedBy", get: function () { return this.state.lastUpdatedBy; } }, { key: "dateCreated", get: function () { return this.state.timestamp; } }, { key: "attributes", get: function () { return this.state.attributes; } }, { key: "type", get: function () { return this.state.type; } }, { key: "media", get: function () { return this.state.media; } }, { key: "attachedMedia", get: function () { return this.getMediaByCategory(["media"]); } }, { key: "participantSid", get: function () { return this.state.participantSid; } }, { key: "aggregatedDeliveryReceipt", get: function () { return this.state.aggregatedDeliveryReceipt; } }, { key: "getMediaByCategory", value: function (e) { var t; return null === (t = this.state.medias) || void 0 === t ? void 0 : t.filter((function (t) { return e.includes(t.category); })); } }, { key: "_update", value: function (e) { var t = []; !e.text && "string" != typeof e.text || e.text === this.state.body || (this.state.body = e.text, t.push("body")), e.subject && e.subject !== this.state.subject && (this.state.subject = e.subject, t.push("subject")), e.lastUpdatedBy && e.lastUpdatedBy !== this.state.lastUpdatedBy && (this.state.lastUpdatedBy = e.lastUpdatedBy, t.push("lastUpdatedBy")), e.author && e.author !== this.state.author && (this.state.author = e.author, t.push("author")), e.dateUpdated && new Date(e.dateUpdated).getTime() !== (this.state.dateUpdated && this.state.dateUpdated.getTime()) && (this.state.dateUpdated = new Date(e.dateUpdated), t.push("dateUpdated")), e.timestamp && new Date(e.timestamp).getTime() !== (this.state.timestamp && this.state.timestamp.getTime()) && (this.state.timestamp = new Date(e.timestamp), t.push("dateCreated")); var n = nh(e.attributes, "Got malformed attributes for the message ".concat(this.sid), _P); Ty(this.state.attributes, n) || (this.state.attributes = n, t.push("attributes")); var r = e.delivery, i = this.state.aggregatedDeliveryReceipt; !!(r && r.total && r.delivered && r.failed && r.read && r.sent && r.undelivered) && (i ? i._isEquals(r) || (i._update(r), t.push("deliveryReceipt")) : (this.state.aggregatedDeliveryReceipt = new AggregatedDeliveryReceipt(r), t.push("deliveryReceipt"))), t.length > 0 && this.emit("updated", { message: this, updateReasons: t }); } }, { key: "getParticipant", value: (o = Sa(bl.mark((function e() { var t, n, r = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (t = null, !this.state.participantSid) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 4, this.conversation.getParticipantBySid(this.participantSid).catch((function () { return _P.debug('Participant with sid "'.concat(r.participantSid, '" not found for message ').concat(r.sid)), null; }));
                    case 4: t = e.sent;
                    case 5:
                        if (t || !this.state.author) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 8, this.conversation.getParticipantByIdentity(this.state.author).catch((function () { return _P.debug('Participant with identity "'.concat(r.author, '" not found for message ').concat(r.sid)), null; }));
                    case 8: t = e.sent;
                    case 9:
                        if (!t) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return", t);
                    case 11: throw n = "Participant with ", this.state.participantSid && (n += "SID '" + this.state.participantSid + "' "), this.state.author && (this.state.participantSid && (n += "or "), n += "identity '" + this.state.author + "' "), "Participant with " === n && (n = "Participant "), n += "was not found", new Error(n);
                    case 17:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return o.apply(this, arguments); }) }, { key: "getDetailedDeliveryReceipts", value: (s = Sa(bl.mark((function e() { var t, n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._getDetailedDeliveryReceiptsPaginator();
                    case 2: t = e.sent, n = [];
                    case 4:
                        if (n = [].concat($C(n), $C(t.items)), t.hasNextPage) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("break", 13);
                    case 8: return e.next = 10, t.nextPage();
                    case 10:
                        t = e.sent, e.next = 4;
                        break;
                    case 13: return e.abrupt("return", n);
                    case 14:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return s.apply(this, arguments); }) }, { key: "remove", value: (a = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("delete", this.links.self);
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return a.apply(this, arguments); }) }, { key: "updateBody", value: (i = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { body: t });
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "updateAttributes", value: (r = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: void 0 !== t ? JSON.stringify(t) : void 0 });
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "attachTemporaryUrlsFor", value: (n = Sa(bl.mark((function e(t) { var n, r = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (n = t.map((function (e) { return e.sid; })), !this.services.mcsClient) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 4, this.services.mcsClient.mediaSetGet(n);
                    case 4: return e.abrupt("return", e.sent.map((function (e) { return new Media(e, r.services); })));
                    case 7: throw new Error("Media Content Service is unavailable");
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "_getDetailedDeliveryReceiptsPaginator", value: (t = Sa(bl.mark((function e(t) { var n, r, i, a = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = this.configuration.links.messagesReceipts.replace("%s", this.conversation.sid).replace("%s", this.sid), r = new rh(n).arg("PageToken", null == t ? void 0 : t.pageToken).arg("PageSize", null == t ? void 0 : t.pageSize).build(), e.next = 4, this.services.network.get(r);
                    case 4: return i = e.sent, e.abrupt("return", new wP(i.body.delivery_receipts.map((function (e) { return new DetailedDeliveryReceipt(e); })), (function (e, t) { return a._getDetailedDeliveryReceiptsPaginator({ pageToken: e, pageSize: t }); }), i.body.meta.previous_token, i.body.meta.next_token));
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }]), Message; }(_y);
    function SP(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return TP(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return TP(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function TP(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function EP(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    ja(Message, "updated", "updated"), wl([Xv("string"), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Message.prototype, "updateBody", null), wl([Xv(["string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], Message.prototype, "updateAttributes", null), wl([Xv(Gv((function (e) { return [e instanceof Array && e.length > 0 && e.reduce((function (e, t) { return e && t instanceof Media; })), "a non-empty array of Media"]; }))), xl("design:type", Function), xl("design:paramtypes", [Array]), xl("design:returntype", Promise)], Message.prototype, "attachTemporaryUrlsFor", null);
    var RP = rd.scope("Messages"), IP = function (e) { Oa(c, e); var t, n, r, i, a, s, o, u = EP(c); function c(e, t, n) { var r; return Ma(this, c), (r = u.call(this)).conversation = e, r.configuration = t, r.services = n, r.messagesByIndex = new Map, r.messagesListPromise = null, r; } return Ea(c, [{ key: "subscribe", value: (o = Sa(bl.mark((function e(t) { var n, r = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!this.messagesListPromise) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", this.messagesListPromise);
                    case 2: return this.messagesListPromise = this.services.syncClient.list({ id: t, mode: "open_existing" }), e.prev = 3, e.next = 6, this.messagesListPromise;
                    case 6: return (n = e.sent).on("itemAdded", (function (e) { RP.debug("".concat(r.conversation.sid, " itemAdded: ").concat(e.item.index)); var t = { self: "".concat(r.conversation.links.messages, "/").concat(e.item.data.sid), conversation: r.conversation.links.self, messages_receipts: "".concat(r.conversation.links.messages, "/").concat(e.item.data.sid, "/Receipts") }, n = new Message(e.item.index, e.item.data, r.conversation, t, r.configuration, r.services); r.messagesByIndex.has(n.index) ? RP.debug("Message arrived, but is already known and ignored", r.conversation.sid, n.index) : (r.messagesByIndex.set(n.index, n), n.on("updated", (function (e) { return r.emit("messageUpdated", e); })), r.emit("messageAdded", n)); })), n.on("itemRemoved", (function (e) { RP.debug("#{this.conversation.sid} itemRemoved: ".concat(e.index)); var t = e.index; if (r.messagesByIndex.has(t)) {
                        var n = r.messagesByIndex.get(t);
                        r.messagesByIndex.delete(n.index), n.removeAllListeners("updated"), r.emit("messageRemoved", n);
                    } })), n.on("itemUpdated", (function (e) { RP.debug("".concat(r.conversation.sid, " itemUpdated: ").concat(e.item.index)); var t = r.messagesByIndex.get(e.item.index); t && t._update(e.item.data); })), e.abrupt("return", n);
                    case 13: throw e.prev = 13, e.t0 = e.catch(3), this.messagesListPromise = null, "disconnected" !== this.services.syncClient.connectionState && RP.error("Failed to get messages object for conversation", this.conversation.sid, e.t0), RP.debug("ERROR: Failed to get messages object for conversation", this.conversation.sid, e.t0), e.t0;
                    case 19:
                    case "end": return e.stop();
                } }), e, this, [[3, 13]]); }))), function (e) { return o.apply(this, arguments); }) }, { key: "unsubscribe", value: (s = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.messagesListPromise) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");
                    case 2: return e.next = 4, this.messagesListPromise;
                    case 4: e.sent.close(), this.messagesListPromise = null;
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return s.apply(this, arguments); }) }, { key: "sendV2", value: (a = Sa(bl.mark((function e(t) { var n, r, i, a, s, o, u; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: RP.debug("Sending message V2", t.mediaContent, t.attributes, t.emailOptions), r = [], i = SP(t.mediaContent), e.prev = 3, i.s();
                    case 5:
                        if ((a = i.n()).done) {
                            e.next = 22;
                            break;
                        }
                        if (s = Cy(a.value, 2), o = s[0], u = s[1], RP.debug("Adding media to a message as ".concat(u instanceof FormData ? "FormData" : "SendMediaOptions"), u), e.t0 = r, !(u instanceof FormData)) {
                            e.next = 15;
                            break;
                        }
                        return e.next = 12, this.services.mcsClient.postFormData(u, o);
                    case 12:
                        e.t1 = e.sent, e.next = 18;
                        break;
                    case 15: return e.next = 17, this.services.mcsClient.post(u.contentType, u.media, o, u.filename);
                    case 17: e.t1 = e.sent;
                    case 18: e.t2 = e.t1, e.t0.push.call(e.t0, e.t2);
                    case 20:
                        e.next = 5;
                        break;
                    case 22:
                        e.next = 27;
                        break;
                    case 24: e.prev = 24, e.t3 = e.catch(3), i.e(e.t3);
                    case 27: return e.prev = 27, i.f(), e.finish(27);
                    case 30: return e.next = 32, this.services.commandExecutor.mutateResource("post", this.conversation.links.messages, { body: t.text, subject: null === (n = t.emailOptions) || void 0 === n ? void 0 : n.subject, media_sids: r.map((function (e) { return e.sid; })), attributes: void 0 !== t.attributes ? JSON.stringify(t.attributes) : void 0 });
                    case 32: return e.abrupt("return", e.sent);
                    case 33:
                    case "end": return e.stop();
                } }), e, this, [[3, 24, 27, 30]]); }))), function (e) { return a.apply(this, arguments); }) }, { key: "send", value: (i = Sa(bl.mark((function e(t) { var n, r, i = arguments; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = i.length > 1 && void 0 !== i[1] ? i[1] : {}, r = i.length > 2 ? i[2] : void 0, RP.debug("Sending text message", t, n, r), e.next = 5, this.services.commandExecutor.mutateResource("post", this.conversation.links.messages, { body: null != t ? t : "", attributes: void 0 !== n ? JSON.stringify(n) : void 0, subject: null == r ? void 0 : r.subject });
                    case 5: return e.abrupt("return", e.sent);
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "sendMedia", value: (r = Sa(bl.mark((function e(t) { var n, r, i, a = arguments; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, r = a.length > 2 ? a[2] : void 0, RP.debug("Sending media message", t, n, r), RP.debug("Sending media message as ".concat(t instanceof FormData ? "FormData" : "SendMediaOptions"), t, n), !(t instanceof FormData)) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 7, this.services.mcsClient.postFormData(t);
                    case 7:
                        e.t0 = e.sent, e.next = 13;
                        break;
                    case 10: return e.next = 12, this.services.mcsClient.post(t.contentType, t.media, "media", t.filename);
                    case 12: e.t0 = e.sent;
                    case 13: return i = e.t0, e.next = 16, this.services.commandExecutor.mutateResource("post", this.conversation.links.messages, { media_sids: [i.sid], attributes: void 0 !== n ? JSON.stringify(n) : void 0 });
                    case 16: return e.abrupt("return", e.sent);
                    case 17:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "getMessages", value: (n = Sa(bl.mark((function e(t, n) { var r, i = arguments; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return r = i.length > 2 && void 0 !== i[2] ? i[2] : "backwards", e.abrupt("return", this._getMessages(t, n, r));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "_wrapPaginator", value: function (e, t, n) { var r = this, i = "desc" === e, a = function () { return t.nextPage().then((function (t) { return r._wrapPaginator(e, t, n); })); }, s = function () { return t.prevPage().then((function (t) { return r._wrapPaginator(e, t, n); })); }; return n(t.items).then((function (e) { return { items: e.sort((function (e, t) { return e.index - t.index; })), hasPrevPage: i ? t.hasNextPage : t.hasPrevPage, hasNextPage: i ? t.hasPrevPage : t.hasNextPage, prevPage: i ? a : s, nextPage: i ? s : a }; })); } }, { key: "_upsertMessage", value: function (e, t) { var n = this, r = this.messagesByIndex.get(e); if (r)
                return r; var i = { self: "".concat(this.conversation.links.messages, "/").concat(t.sid), conversation: this.conversation.links.self, messages_receipts: "".concat(this.conversation.links.messages, "/").concat(t.sid, "/Receipts") }, a = new Message(e, t, this.conversation, i, this.configuration, this.services); return this.messagesByIndex.set(a.index, a), a.on("updated", (function (e) { return n.emit("messageUpdated", e); })), a; } }, { key: "_getMessages", value: (t = Sa(bl.mark((function e() { var t, n, r, i, a, s, o = this, u = arguments; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = u.length > 0 && void 0 !== u[0] ? u[0] : 30, n = u.length > 1 && void 0 !== u[1] ? u[1] : "end", r = u.length > 2 && void 0 !== u[2] ? u[2] : "forward", i = "backwards" === r ? "desc" : "asc", e.next = 6, this.messagesListPromise;
                    case 6: return a = e.sent, e.next = 9, a.getItems({ from: "end" !== n ? n : void 0, pageSize: t, order: i, limit: t });
                    case 9: return s = e.sent, e.next = 12, this._wrapPaginator(i, s, (function (e) { return Promise.all(e.map((function (e) { return o._upsertMessage(e.index, e.data); }))); }));
                    case 12: return e.abrupt("return", e.sent);
                    case 13:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }]), c; }(_y), OP = function () { function e(t) { Ma(this, e), ja(this, "attributes", {}), ja(this, "mediaContent", []), ja(this, "emailOptions", {}), this.messagesEntity = t; } var t; return Ea(e, [{ key: "send", value: (t = Sa(bl.mark((function e() { var t; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.messagesEntity.sendV2(this);
                    case 2: return t = e.sent, e.abrupt("return", eh(t.index));
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }]), e; }(), CP = function () { function e(t, n) { Ma(this, e), this.limits = t, this.message = new OP(n); } return Ea(e, [{ key: "setBody", value: function (e) { return this.message.text = e, this; } }, { key: "setSubject", value: function (e) { return this.message.emailOptions.subject = e, this; } }, { key: "setAttributes", value: function (e) { return this.message.attributes = e, this; } }, { key: "addMedia", value: function (e) { return this.message.mediaContent.push(["media", e]), this; } }, { key: "build", value: function () { if (this.message.mediaContent.length > this.limits.mediaAttachmentsCountLimit)
                throw new Error("Too many media attachments in the message (".concat(this.message.mediaContent.length, " > ").concat(this.limits.mediaAttachmentsCountLimit, ")")); return this.message; } }, { key: "getPayloadContentType", value: function (e) { return "undefined" != typeof FormData && e instanceof FormData ? e.get("Content-Type") : e.contentType; } }]), e; }();
    function PP(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return AP(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return AP(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function AP(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function jP(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    var MP = rd.scope("Conversation"), LP = { lastMessage: "lastMessage", attributes: "attributes", createdBy: "createdBy", dateCreated: "dateCreated", dateUpdated: "dateUpdated", friendlyName: "friendlyName", lastConsumedMessageIndex: "lastConsumedMessageIndex", notificationLevel: "notificationLevel", sid: "sid", status: "status", uniqueName: "uniqueName", state: "state" };
    function NP(e) { try {
        return new Date(e);
    }
    catch (e) {
        return null;
    } }
    var Conversation = function (e) { Oa(Conversation, e); var t, n, r, i, a, s, o, u, c, l, f, d, p, h, v, y, m, g, b, k, w, x, _, S, T, E, R = jP(Conversation); function Conversation(e, t, n, r, i) { var a; Ma(this, Conversation), (a = R.call(this)).sid = t, a.links = n, a.configuration = r, a.services = i; var s = e.attributes || {}, o = e.createdBy, u = NP(e.dateCreated), c = NP(e.dateUpdated), l = e.friendlyName || null, f = Number.isInteger(e.lastConsumedMessageIndex) ? e.lastConsumedMessageIndex : null, d = e.uniqueName || null; try {
        JSON.stringify(s);
    }
    catch (e) {
        throw new Error("Attributes must be a valid JSON object.");
    } a.entityName = e.channel, a.channelState = { uniqueName: d, status: "notParticipating", attributes: s, createdBy: o, dateCreated: u, dateUpdated: c, friendlyName: l, lastReadMessageIndex: f }, e.notificationLevel && (a.channelState.notificationLevel = e.notificationLevel); var p = { participants: a.links.participants }; return a.participants = new Map, a.participantsEntity = new ZC(Ra(a), a.participants, p, a.configuration, a.services), a.participantsEntity.on("participantJoined", a.emit.bind(Ra(a), "participantJoined")), a.participantsEntity.on("participantLeft", a.emit.bind(Ra(a), "participantLeft")), a.participantsEntity.on("participantUpdated", (function (e) { return a.emit("participantUpdated", e); })), a.messagesEntity = new IP(Ra(a), r, i), a.messagesEntity.on("messageAdded", (function (e) { return a._onMessageAdded(e); })), a.messagesEntity.on("messageUpdated", (function (e) { return a.emit("messageUpdated", e); })), a.messagesEntity.on("messageRemoved", a.emit.bind(Ra(a), "messageRemoved")), a; } return Ea(Conversation, [{ key: "uniqueName", get: function () { return this.channelState.uniqueName; } }, { key: "status", get: function () { return this.channelState.status; } }, { key: "friendlyName", get: function () { return this.channelState.friendlyName; } }, { key: "dateUpdated", get: function () { return this.channelState.dateUpdated; } }, { key: "dateCreated", get: function () { return this.channelState.dateCreated; } }, { key: "createdBy", get: function () { return this.channelState.createdBy; } }, { key: "attributes", get: function () { return this.channelState.attributes; } }, { key: "lastReadMessageIndex", get: function () { return this.channelState.lastReadMessageIndex; } }, { key: "lastMessage", get: function () { return this.channelState.lastMessage; } }, { key: "notificationLevel", get: function () { return this.channelState.notificationLevel; } }, { key: "limits", get: function () { return this.configuration.limits; } }, { key: "state", get: function () { return this.channelState.state; } }, { key: "_subscribe", value: function () { var e, t = this; return this.entityPromise = null !== (e = this.entityPromise) && void 0 !== e ? e : this.services.syncClient.document({ id: this.entityName, mode: "open_existing" }).then((function (e) { return t.entity = e, t.entity.on("updated", (function (e) { t._update(e.data); })), t.entity.on("removed", (function () { return t.emit("removed", t); })), t._update(t.entity.data), e; })).catch((function (e) { throw t.entity = null, t.entityPromise = null, "disconnected" != t.services.syncClient.connectionState && MP.error("Failed to get conversation object", e), MP.debug("ERROR: Failed to get conversation object", e), e; })); } }, { key: "_subscribeStreams", value: (E = Sa(bl.mark((function e() { var t, n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, e.next = 3, this._subscribe();
                    case 3: return MP.trace("_subscribeStreams, this.entity.data=", this.entity.data), t = this.entity.data.messages, n = this.entity.data.roster, e.next = 8, Promise.all([this.messagesEntity.subscribe(t), this.participantsEntity.subscribe(n)]);
                    case 8:
                        e.next = 15;
                        break;
                    case 10: throw e.prev = 10, e.t0 = e.catch(0), "disconnected" !== this.services.syncClient.connectionState && MP.error("Failed to subscribe on conversation objects", this.sid, e.t0), MP.debug("ERROR: Failed to subscribe on conversation objects", this.sid, e.t0), e.t0;
                    case 15:
                    case "end": return e.stop();
                } }), e, this, [[0, 10]]); }))), function () { return E.apply(this, arguments); }) }, { key: "_unsubscribe", value: (T = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (!this.entity) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 3, this.entity.close();
                    case 3: this.entity = null, this.entityPromise = null;
                    case 5: return e.abrupt("return", Promise.all([this.participantsEntity.unsubscribe(), this.messagesEntity.unsubscribe()]));
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return T.apply(this, arguments); }) }, { key: "_setStatus", value: function (e, t) { var n = this; this.statusSource = t, this.channelState.status !== e && (this.channelState.status = e, "joined" === e ? this._subscribeStreams().catch((function (t) { if (MP.debug("ERROR while setting conversation status " + e, t), "disconnected" !== n.services.syncClient.connectionState)
                throw t; })) : this.entityPromise && this._unsubscribe().catch((function (t) { if (MP.debug("ERROR while setting conversation status " + e, t), "disconnected" !== n.services.syncClient.connectionState)
                throw t; }))); } }, { key: "_statusSource", value: function () { return this.statusSource; } }, { key: "_update", value: function (e) { var t, n, r, i, a; MP.trace("_update", e), Conversation.preprocessUpdate(e, this.sid); for (var s = new Set, o = 0, u = Object.keys(e); o < u.length; o++) {
                var c = u[o], l = LP[c];
                if (l)
                    switch (l) {
                        case LP.status:
                            if (!e.status || "unknown" === e.status || this.channelState.status === e.status)
                                break;
                            this.channelState.status = e.status, s.add(l);
                            break;
                        case LP.attributes:
                            if (Ty(this.channelState.attributes, e.attributes))
                                break;
                            this.channelState.attributes = e.attributes, s.add(l);
                            break;
                        case LP.lastConsumedMessageIndex:
                            if (void 0 === e.lastConsumedMessageIndex || e.lastConsumedMessageIndex === this.channelState.lastReadMessageIndex)
                                break;
                            this.channelState.lastReadMessageIndex = e.lastConsumedMessageIndex, s.add("lastReadMessageIndex");
                            break;
                        case LP.lastMessage:
                            if (this.channelState.lastMessage && !e.lastMessage) {
                                delete this.channelState.lastMessage, s.add(l);
                                break;
                            }
                            this.channelState.lastMessage = this.channelState.lastMessage || {}, void 0 !== (null === (t = e.lastMessage) || void 0 === t ? void 0 : t.index) && e.lastMessage.index !== this.channelState.lastMessage.index && (this.channelState.lastMessage.index = e.lastMessage.index, s.add(l)), void 0 !== (null === (n = e.lastMessage) || void 0 === n ? void 0 : n.timestamp) && (null === (r = this.channelState.lastMessage) || void 0 === r || null === (i = r.dateCreated) || void 0 === i ? void 0 : i.getTime()) !== e.lastMessage.timestamp.getTime() && (this.channelState.lastMessage.dateCreated = e.lastMessage.timestamp, s.add(l)), Ty(this.channelState.lastMessage, {}) && delete this.channelState.lastMessage;
                            break;
                        case LP.state:
                            var f = e.state || void 0;
                            if (void 0 !== f && (f.dateUpdated = new Date(f.dateUpdated)), Ty(this.channelState.state, f))
                                break;
                            this.channelState.state = f, s.add(l);
                            break;
                        default:
                            var d = e[c] instanceof Date, p = d && (null === (a = this.channelState[l]) || void 0 === a ? void 0 : a.getTime()) === e[c].getTime(), h = !d && this[l] === e[c];
                            if (p || h)
                                break;
                            this.channelState[l] = e[c], s.add(l);
                    }
            } s.size > 0 && this.emit("updated", { conversation: this, updateReasons: $C(s) }); } }, { key: "_onMessageAdded", value: function (e) { var t, n = PP(this.participants.values()); try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    if (r.identity === e.author) {
                        r._endTyping();
                        break;
                    }
                }
            }
            catch (e) {
                n.e(e);
            }
            finally {
                n.f();
            } this.emit("messageAdded", e); } }, { key: "_setLastReadMessageIndex", value: (S = Sa(bl.mark((function e(t) { var n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", "".concat(this.configuration.links.myConversations, "/").concat(this.sid), { last_read_message_index: t });
                    case 2: return n = e.sent, e.abrupt("return", n.unread_messages_count);
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return S.apply(this, arguments); }) }, { key: "add", value: (_ = Sa(bl.mark((function e(t, n) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.participantsEntity.add(t, n));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return _.apply(this, arguments); }) }, { key: "addNonChatParticipant", value: (x = Sa(bl.mark((function e(t, n, r) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.participantsEntity.addNonChatParticipant(t, n, r));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return x.apply(this, arguments); }) }, { key: "advanceLastReadMessageIndex", value: (w = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2:
                        if (!(t < this.lastReadMessageIndex)) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 5, this._setLastReadMessageIndex(this.lastReadMessageIndex);
                    case 5: return e.abrupt("return", e.sent);
                    case 6: return e.next = 8, this._setLastReadMessageIndex(t);
                    case 8: return e.abrupt("return", e.sent);
                    case 9:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return w.apply(this, arguments); }) }, { key: "delete", value: (k = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("delete", this.links.self);
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return k.apply(this, arguments); }) }, { key: "getAttributes", value: (b = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribe();
                    case 2: return e.abrupt("return", this.attributes);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return b.apply(this, arguments); }) }, { key: "getMessages", value: (g = Sa(bl.mark((function e(t, n, r) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2: return e.abrupt("return", this.messagesEntity.getMessages(t, n, r));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return g.apply(this, arguments); }) }, { key: "getParticipants", value: (m = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2: return e.abrupt("return", this.participantsEntity.getParticipants());
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return m.apply(this, arguments); }) }, { key: "getParticipantsCount", value: (y = Sa(bl.mark((function e() { var t, n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = new rh(this.configuration.links.conversations).path(this.sid).build(), e.next = 3, this.services.network.get(t);
                    case 3: return n = e.sent, e.abrupt("return", n.body.participants_count);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return y.apply(this, arguments); }) }, { key: "getParticipantBySid", value: (v = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.participantsEntity.getParticipantBySid(t));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return v.apply(this, arguments); }) }, { key: "getParticipantByIdentity", value: (h = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.abrupt("return", this.participantsEntity.getParticipantByIdentity(t));
                    case 1:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return h.apply(this, arguments); }) }, { key: "getMessagesCount", value: (p = Sa(bl.mark((function e() { var t, n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = new rh(this.configuration.links.conversations).path(this.sid).build(), e.next = 3, this.services.network.get(t);
                    case 3: return n = e.sent, e.abrupt("return", n.body.messages_count);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return p.apply(this, arguments); }) }, { key: "getUnreadMessagesCount", value: (d = Sa(bl.mark((function e() { var t, n, r; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return t = new rh(this.configuration.links.myConversations).path(this.sid).build(), e.next = 3, this.services.network.get(t);
                    case 3:
                        if ((n = e.sent).body.conversation_sid === this.sid) {
                            e.next = 6;
                            break;
                        }
                        throw new Error("Conversation was not found in the user conversations list");
                    case 6:
                        if ("number" != typeof (r = n.body.unread_messages_count)) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return", r);
                    case 9: return e.abrupt("return", null);
                    case 10:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return d.apply(this, arguments); }) }, { key: "join", value: (f = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.participants, { identity: this.configuration.userIdentity });
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return f.apply(this, arguments); }) }, { key: "leave", value: (l = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if ("joined" !== this.channelState.status) {
                            e.next = 3;
                            break;
                        }
                        return e.next = 3, this.services.commandExecutor.mutateResource("delete", "".concat(this.links.participants, "/").concat(this.configuration.userIdentity));
                    case 3: return e.abrupt("return", this);
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return l.apply(this, arguments); }) }, { key: "removeParticipant", value: (c = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.participantsEntity.remove("string" == typeof t ? t : t.sid);
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return c.apply(this, arguments); }) }, { key: "sendMessage", value: (u = Sa(bl.mark((function e(t, n, r) { var i, a; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if ("string" != typeof t && null !== t) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 3, this.messagesEntity.send(t, n, r);
                    case 3: return i = e.sent, e.abrupt("return", eh(i.index));
                    case 5: return e.next = 7, this.messagesEntity.sendMedia(t, n, r);
                    case 7: return a = e.sent, e.abrupt("return", eh(a.index));
                    case 9:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return u.apply(this, arguments); }) }, { key: "prepareMessage", value: function () { return new CP(this.limits, this.messagesEntity); } }, { key: "setAllMessagesRead", value: (o = Sa(bl.mark((function e() { var t; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2: return e.next = 4, this.getMessages(1);
                    case 4:
                        if (!((t = e.sent).items.length > 0)) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return", this.advanceLastReadMessageIndex(t.items[0].index));
                    case 7: return e.abrupt("return", Promise.resolve(0));
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return o.apply(this, arguments); }) }, { key: "setAllMessagesUnread", value: (s = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2: return e.next = 4, this._setLastReadMessageIndex(null);
                    case 4: return e.abrupt("return", e.sent);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return s.apply(this, arguments); }) }, { key: "setUserNotificationLevel", value: (a = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", "".concat(this.configuration.links.myConversations, "/").concat(this.sid), { notification_level: t });
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return a.apply(this, arguments); }) }, { key: "typing", value: function () { return this.services.typingIndicator.send(this.sid); } }, { key: "updateAttributes", value: (i = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: void 0 !== t ? JSON.stringify(t) : void 0 });
                    case 2: return e.abrupt("return", this);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "updateFriendlyName", value: (r = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.channelState.friendlyName === t) {
                            e.next = 3;
                            break;
                        }
                        return e.next = 3, this.services.commandExecutor.mutateResource("post", this.links.self, { friendly_name: t });
                    case 3: return e.abrupt("return", this);
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "updateLastReadMessageIndex", value: (n = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._subscribeStreams();
                    case 2: return e.abrupt("return", this._setLastReadMessageIndex(t));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "updateUniqueName", value: (t = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (this.channelState.uniqueName === t) {
                            e.next = 4;
                            break;
                        }
                        return t || (t = ""), e.next = 4, this.services.commandExecutor.mutateResource("post", this.links.self, { unique_name: t });
                    case 4: return e.abrupt("return", this);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }], [{ key: "preprocessUpdate", value: function (e, t) { try {
                "string" == typeof e.attributes ? e.attributes = JSON.parse(e.attributes) : e.attributes && JSON.stringify(e.attributes);
            }
            catch (n) {
                MP.warn("Retrieved malformed attributes from the server for conversation: " + t), e.attributes = {};
            } try {
                e.dateCreated && (e.dateCreated = new Date(e.dateCreated));
            }
            catch (n) {
                MP.warn("Retrieved malformed dateCreated from the server for conversation: " + t), delete e.dateCreated;
            } try {
                e.dateUpdated && (e.dateUpdated = new Date(e.dateUpdated));
            }
            catch (n) {
                MP.warn("Retrieved malformed dateUpdated from the server for conversation: " + t), delete e.dateUpdated;
            } try {
                e.lastMessage && e.lastMessage.timestamp && (e.lastMessage.timestamp = new Date(e.lastMessage.timestamp));
            }
            catch (n) {
                MP.warn("Retrieved malformed lastMessage.timestamp from the server for conversation: " + t), delete e.lastMessage.timestamp;
            } } }]), Conversation; }(_y);
    ja(Conversation, "participantJoined", "participantJoined"), ja(Conversation, "participantLeft", "participantLeft"), ja(Conversation, "participantUpdated", "participantUpdated"), ja(Conversation, "messageAdded", "messageAdded"), ja(Conversation, "messageRemoved", "messageRemoved"), ja(Conversation, "messageUpdated", "messageUpdated"), ja(Conversation, "typingEnded", "typingEnded"), ja(Conversation, "typingStarted", "typingStarted"), ja(Conversation, "updated", "updated"), ja(Conversation, "removed", "removed"), wl([Xv(Vv, ["undefined", "string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [String, Object]), xl("design:returntype", Promise)], Conversation.prototype, "add", null), wl([Xv(Vv, Vv, ["undefined", "string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [String, String, Object]), xl("design:returntype", Promise)], Conversation.prototype, "addNonChatParticipant", null), wl([Xv(Jv), xl("design:type", Function), xl("design:paramtypes", [Number]), xl("design:returntype", Promise)], Conversation.prototype, "advanceLastReadMessageIndex", null), wl([Xv(["undefined", Jv], ["undefined", Jv], ["undefined", $v("backwards", "forward")]), xl("design:type", Function), xl("design:paramtypes", [Number, Number, String]), xl("design:returntype", Promise)], Conversation.prototype, "getMessages", null), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Conversation.prototype, "getParticipantBySid", null), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Conversation.prototype, "getParticipantByIdentity", null), wl([Xv([Vv, Participant]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], Conversation.prototype, "removeParticipant", null), wl([Xv(["string", $v(null), Gv((function (e) { return [e instanceof FormData, "an instance of FormData"]; })), Kv("media options", { contentType: Vv, media: Gv((function (e) { var t = "string" == typeof e && e.length > 0 || e instanceof Uint8Array || e instanceof ArrayBuffer; return "function" == typeof Blob && (t = t || e instanceof Blob), [t, "a non-empty string, an instance of Buffer or an instance of Blob"]; })) })], ["undefined", "string", "number", "boolean", "object", $v(null)], ["undefined", $v(null), Kv("email attributes", { subject: [Vv, "undefined"] })]), xl("design:type", Function), xl("design:paramtypes", [Object, Object, Object]), xl("design:returntype", Promise)], Conversation.prototype, "sendMessage", null), wl([Xv($v("default", "muted")), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Conversation.prototype, "setUserNotificationLevel", null), wl([Xv(["string", "number", "boolean", "object", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], Conversation.prototype, "updateAttributes", null), wl([Xv(["string"]), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Conversation.prototype, "updateFriendlyName", null), wl([Xv([$v(null), Jv]), xl("design:type", Function), xl("design:paramtypes", [Number]), xl("design:returntype", Promise)], Conversation.prototype, "updateLastReadMessageIndex", null), wl([Xv(["string", $v(null)]), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], Conversation.prototype, "updateUniqueName", null);
    var UP = function () { function e() { var t = this; Ma(this, e), this._promise = new Promise((function (e, n) { t._resolve = e, t._reject = n; })); } return Ea(e, [{ key: "promise", get: function () { return this._promise; } }, { key: "update", value: function (e) { this._resolve(e); } }, { key: "set", value: function (e) { this.current = e, this._resolve(e); } }, { key: "fail", value: function (e) { this._reject(e); } }]), e; }();
    function DP(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
        if (Array.isArray(e) || (n = function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return FP(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
            return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return FP(e, t); }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0, i = function () { };
            return { s: i, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, s = !0, o = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return s = e.done, e; }, e: function (e) { o = !0, a = e; }, f: function () { try {
            s || null == n.return || n.return();
        }
        finally {
            if (o)
                throw a;
        } } }; }
    function FP(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function BP(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function qP(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? BP(Object(n), !0).forEach((function (t) { ja(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : BP(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    function zP(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    var WP = rd.scope("Conversations"), GP = function (e) { Oa(p, e); var t, n, r, i, a, s, o, u, c, l, f, d = zP(p); function p(e, t) { var n; return Ma(this, p), ja(Ra(n = d.call(this)), "conversations", new Map), ja(Ra(n), "myConversationsRead", new UP), ja(Ra(n), "tombstones", new Set), ja(Ra(n), "myConversationsFetched", !1), n.configuration = e, n.services = t, n; } return Ea(p, [{ key: "addConversation", value: (f = Sa(bl.mark((function e(t) { var n, r, i, a, s, o, u, c, l, f; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return a = void 0 !== (null == t ? void 0 : t.attributes) ? t.attributes : {}, e.next = 3, this.services.commandExecutor.mutateResource("post", this.configuration.links.conversations, { friendly_name: t.friendlyName, unique_name: t.uniqueName, attributes: void 0 !== a ? JSON.stringify(a) : void 0 });
                    case 3:
                        if (s = e.sent, o = null !== (n = s.sid) && void 0 !== n ? n : null, u = null !== (r = null === (i = s.sync_objects) || void 0 === i ? void 0 : i.conversation) && void 0 !== r ? r : null, c = qP({ self: s.url }, s.links), !(l = this.conversations.get(o))) {
                            e.next = 12;
                            break;
                        }
                        return e.next = 11, l._subscribe();
                    case 11: return e.abrupt("return", l);
                    case 12: return f = new Conversation({ channel: u, entityName: null, uniqueName: null, attributes: null, createdBy: null, friendlyName: null, lastConsumedMessageIndex: null, dateCreated: null, dateUpdated: null }, o, c, this.configuration, this.services), this.conversations.set(f.sid, f), this._registerForEvents(f), e.next = 17, f._subscribe();
                    case 17: return this.emit("conversationAdded", f), e.abrupt("return", f);
                    case 19:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return f.apply(this, arguments); }) }, { key: "fetchConversations", value: (l = Sa(bl.mark((function e() { var t, n, r, i, a, s, o, u = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 0, e.next = 3, this._getMap();
                    case 3: return (t = e.sent).on("itemAdded", (function (e) { WP.debug("itemAdded: ".concat(e.item.key)), u._upsertConversation("sync", e.item.key, e.item.data); })), t.on("itemRemoved", (function (e) { WP.debug("itemRemoved: ".concat(e.key)); var t = e.key; u.myConversationsFetched || u.tombstones.add(t); var n = u.conversations.get(t); n && ("joined" === n.status && (n._setStatus("notParticipating", "sync"), u.emit("conversationLeft", n)), u.conversations.delete(t), u.emit("conversationRemoved", n), n.emit("removed", n)); })), t.on("itemUpdated", (function (e) { WP.debug("itemUpdated: ".concat(e.item.key)), u._upsertConversation("sync", e.item.key, e.item.data); })), e.next = 9, this._fetchMyConversations();
                    case 9:
                        n = e.sent, r = [], i = DP(n);
                        try {
                            for (i.s(); !(a = i.n()).done;)
                                s = a.value, r.push(this._upsertConversation("rest", s.channel_sid, s));
                        }
                        catch (e) {
                            i.e(e);
                        }
                        finally {
                            i.f();
                        }
                        return this.myConversationsRead.set(!0), e.next = 16, Promise.all(r);
                    case 16: return this.myConversationsFetched = !0, this.tombstones.clear(), WP.debug("The conversations list has been successfully fetched"), e.abrupt("return", this);
                    case 22: throw e.prev = 22, e.t0 = e.catch(0), o = "Failed to fetch the conversations list", "disconnected" !== this.services.syncClient.connectionState && WP.error(o, e.t0), WP.debug("ERROR: ".concat(o), e.t0), e.t0;
                    case 28:
                    case "end": return e.stop();
                } }), e, this, [[0, 22]]); }))), function () { return l.apply(this, arguments); }) }, { key: "getConversations", value: (c = Sa(bl.mark((function e(t) { var n, r, i = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._getMap();
                    case 2: return n = e.sent, e.next = 5, n.getItems();
                    case 5: return r = e.sent, e.abrupt("return", this._wrapPaginator(r, (function (e) { return Promise.all(e.map((function (e) { return i._upsertConversation("sync", e.key, e.data); }))); })));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return c.apply(this, arguments); }) }, { key: "getConversation", value: (u = Sa(bl.mark((function e(t) { var n, r, i, a = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._getMap();
                    case 2: return n = e.sent, e.next = 5, n.getItems({ key: t });
                    case 5: return r = e.sent, i = r.items.map((function (e) { return a._upsertConversation("sync", e.key, e.data); })), e.abrupt("return", i.length > 0 ? i[0] : null);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return u.apply(this, arguments); }) }, { key: "getConversationByUniqueName", value: (o = Sa(bl.mark((function e(t) { var n, r, i, a, s; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = new rh(this.configuration.links.myConversations).path(t).build(), e.next = 3, this.services.network.get(n);
                    case 3: return r = e.sent, i = r.body, a = i.conversation_sid, s = { entityName: null, lastConsumedMessageIndex: i.last_read_message_index, status: (null == i ? void 0 : i.status) || "unknown", friendlyName: i.friendly_name, dateUpdated: i.date_updated, dateCreated: i.date_created, uniqueName: i.unique_name, createdBy: i.created_by, attributes: i.attributes, channel: i.sync_objects.conversation, notificationLevel: null == i ? void 0 : i.notification_level, sid: a }, e.abrupt("return", this._upsertConversation("sync", a, s));
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return o.apply(this, arguments); }) }, { key: "peekConversation", value: (s = Sa(bl.mark((function e(t) { var n, r, i, a; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = new rh(this.configuration.links.conversations).path(t).build(), e.next = 3, this.services.network.get(n);
                    case 3: return r = e.sent, i = r.body, a = { entityName: null, status: (null == i ? void 0 : i.status) || "unknown", friendlyName: i.friendly_name, dateUpdated: i.date_updated, dateCreated: i.date_created, uniqueName: i.unique_name, createdBy: i.created_by, attributes: i.attributes, channel: "".concat(t, ".channel"), sid: t }, e.abrupt("return", this._upsertConversation("sync", t, a));
                    case 7:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "_getMap", value: (a = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.syncClient.map({ id: this.configuration.myConversations, mode: "open_existing" });
                    case 2: return e.abrupt("return", e.sent);
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return a.apply(this, arguments); }) }, { key: "_wrapPaginator", value: (i = Sa(bl.mark((function e(t, n) { var r, i = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, n(t.items);
                    case 2: return r = e.sent, e.abrupt("return", { items: r, hasNextPage: t.hasNextPage, hasPrevPage: t.hasPrevPage, nextPage: function () { return t.nextPage().then((function (e) { return i._wrapPaginator(e, n); })); }, prevPage: function () { return t.prevPage().then((function (e) { return i._wrapPaginator(e, n); })); } });
                    case 4:
                    case "end": return e.stop();
                } }), e); }))), function (e, t) { return i.apply(this, arguments); }) }, { key: "_updateConversation", value: (r = Sa(bl.mark((function e(t, n, r) { var i, a, s, o = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (i = void 0 !== n._statusSource() && t !== n._statusSource(), a = "rest" !== t || "sync" === n._statusSource(), !i || !a || "sync" === t) {
                            e.next = 5;
                            break;
                        }
                        return WP.trace("upsertConversation: conversation is known from sync and came from chat, ignoring", { sid: n.sid, data: r.status, conversation: n.status }), e.abrupt("return");
                    case 5:
                        if ("joined" !== r.status || "joined" === n.status) {
                            e.next = 13;
                            break;
                        }
                        return n._setStatus("joined", t), s = {}, void 0 !== r.notificationLevel && (s.notificationLevel = r.notificationLevel), void 0 !== r.lastConsumedMessageIndex && (s.lastConsumedMessageIndex = r.lastConsumedMessageIndex), Ty(s, {}) || n._update(s), n._subscribe().then((function () { o.emit("conversationJoined", n); })), e.abrupt("return");
                    case 13:
                        if ("notParticipating" !== r.status || "joined" !== n.status) {
                            e.next = 20;
                            break;
                        }
                        return n._setStatus("notParticipating", t), n._update(r), e.next = 18, n._subscribe();
                    case 18: return this.emit("conversationLeft", n), e.abrupt("return");
                    case 20:
                        if ("notParticipating" !== r.status) {
                            e.next = 24;
                            break;
                        }
                        return e.next = 23, n._subscribe();
                    case 23: return e.abrupt("return");
                    case 24: n._update(r);
                    case 25:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n) { return r.apply(this, arguments); }) }, { key: "_upsertConversation", value: (n = Sa(bl.mark((function e(t, n, r) { var i, a, s, o; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (WP.trace("upsertConversation called for ".concat(n), r), !(i = this.conversations.get(n))) {
                            e.next = 9;
                            break;
                        }
                        return WP.trace("upsertConversation: the conversation ".concat(i.sid, " is known;") + "its status is known from the source ".concat(i._statusSource(), " ") + "and the update came from the source ".concat(t), i), e.next = 6, this._updateConversation(t, i, r);
                    case 6: return e.next = 8, i._subscribe();
                    case 8: return e.abrupt("return", i);
                    case 9:
                        if (!["chat", "rest"].includes(t) || !this.tombstones.has(n)) {
                            e.next = 12;
                            break;
                        }
                        return WP.trace("upsertChannel: the channel is deleted but reappeared again from chat, ignoring", n), e.abrupt("return");
                    case 12: return WP.trace("upsertConversation: creating a local conversation object with sid " + n, r), a = "".concat(this.configuration.links.conversations, "/").concat(n), s = { self: a, messages: "".concat(a, "/Messages"), participants: "".concat(a, "/Participants") }, o = new Conversation(r, n, s, this.configuration, this.services), this.conversations.set(n, o), e.next = 19, o._subscribe();
                    case 19: return this._registerForEvents(o), this.emit("conversationAdded", o), "joined" === r.status && (o._setStatus("joined", t), this.emit("conversationJoined", o)), e.abrupt("return", o);
                    case 23:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, r) { return n.apply(this, arguments); }) }, { key: "_fetchMyConversations", value: (t = Sa(bl.mark((function e() { var t, n, r, i, a; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: t = [], n = null;
                    case 2: return r = new rh(this.configuration.links.myConversations), n && r.arg("PageToken", n), e.next = 6, this.services.network.get(r.build());
                    case 6: i = e.sent, a = i.body.conversations.map((function (e) { return { descriptor: e, channel_sid: e.conversation_sid, status: e.status, channel: e.sync_objects.conversation, messages: e.sync_objects.messages, roster: "".concat(e.conversation_sid, ".roster"), lastConsumedMessageIndex: e.last_consumed_message_index, notificationLevel: e.notification_level }; })), n = i.body.meta.next_token, t = [].concat($C(t), $C(a));
                    case 10: if (n) {
                        e.next = 2;
                        break;
                    }
                    case 11: return e.abrupt("return", t);
                    case 12:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "_onConversationRemoved", value: function (e) { var t = this.conversations.get(e); t && (this.conversations.delete(e), this.emit("conversationRemoved", t)); } }, { key: "_registerForEvents", value: function (e) { var t = this; e.on("removed", (function () { return t._onConversationRemoved(e.sid); })), e.on("updated", (function (e) { return t.emit("conversationUpdated", e); })), e.on("participantJoined", this.emit.bind(this, "participantJoined")), e.on("participantLeft", this.emit.bind(this, "participantLeft")), e.on("participantUpdated", (function (e) { return t.emit("participantUpdated", e); })), e.on("messageAdded", this.emit.bind(this, "messageAdded")), e.on("messageUpdated", (function (e) { return t.emit("messageUpdated", e); })), e.on("messageRemoved", this.emit.bind(this, "messageRemoved")), e.on("typingStarted", this.emit.bind(this, "typingStarted")), e.on("typingEnded", this.emit.bind(this, "typingEnded")); } }]), p; }(_y), $P = In, VP = Hr.find, JP = kd, KP = "find", HP = !0;
    function YP(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    KP in [] && Array(1).find((function () { HP = !1; })), $P({ target: "Array", proto: !0, forced: HP }, { find: function (e) { return VP(this, e, arguments.length > 1 ? arguments[1] : void 0); } }), JP(KP);
    var QP = function (e) { Oa(a, e); var t, n, r, i = YP(a); function a(e, t, n) { var r; return Ma(this, a), (r = i.call(this)).configuration = t, r.services = n, r.fifoStack = [], r.myself = e, r.myself.on("updated", (function (e) { return r.emit("userUpdated", e); })), r.myself.on("userSubscribed", (function () { return r.emit("userSubscribed", r.myself); })), r.myself.on("userUnsubscribed", (function () { r.emit("userUnsubscribed", r.myself), r.myself._ensureFetched(); })), r.subscribedUsers = new Map, r; } return Ea(a, [{ key: "handleUnsubscribeUser", value: function (e) { this.subscribedUsers.has(e.identity) && this.subscribedUsers.delete(e.identity); var t = -1; this.fifoStack.find((function (n, r) { return n == e.identity && (t = r, !0); })) && this.fifoStack.splice(t, 1), this.emit("userUnsubscribed", e); } }, { key: "handleSubscribeUser", value: function (e) { this.subscribedUsers.has(e.identity) || (this.fifoStack.length >= this.configuration.userInfosToSubscribe && this.subscribedUsers.get(this.fifoStack.shift()).unsubscribe(), this.fifoStack.push(e.identity), this.subscribedUsers.set(e.identity, e), this.emit("userSubscribed", e)); } }, { key: "getUser", value: (r = Sa(bl.mark((function e(t) { var n, r, i = this, a = arguments; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = a.length > 1 && void 0 !== a[1] ? a[1] : null, e.next = 3, this.myself._ensureFetched();
                    case 3:
                        if (t != this.myself.identity) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", this.myself);
                    case 5:
                        if (r = this.subscribedUsers.get(t)) {
                            e.next = 17;
                            break;
                        }
                        if (n) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 10, this.getSyncUniqueName(t);
                    case 10: n = e.sent;
                    case 11: return (r = new User(t, n, this.configuration, this.services)).on("updated", (function (e) { return i.emit("userUpdated", e); })), r.on("userSubscribed", (function () { return i.handleSubscribeUser(r); })), r.on("userUnsubscribed", (function () { return i.handleUnsubscribeUser(r); })), e.next = 17, r._ensureFetched();
                    case 17: return e.abrupt("return", r);
                    case 18:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "getSubscribedUsers", value: (n = Sa(bl.mark((function e() { var t; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.myself._ensureFetched();
                    case 2: return t = [this.myself], this.subscribedUsers.forEach((function (e) { return t.push(e); })), e.abrupt("return", t);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }, { key: "getSyncUniqueName", value: (t = Sa(bl.mark((function e(t) { var n, r; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return n = new rh(this.configuration.links.users).path(t).build(), e.next = 3, this.services.network.get(n);
                    case 3: return r = e.sent, e.abrupt("return", r.body.sync_objects.user_info_map);
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }]), a; }(_y), XP = rd.scope("TypingIndicator"), ZP = function () { function e(t, n, r) { Ma(this, e), this.configuration = n, this.services = r, this.getConversation = t, this.serviceTypingTimeout = null, this.sentUpdates = new Map; } var t; return Ea(e, [{ key: "typingTimeout", get: function () { return this.configuration.typingIndicatorTimeoutOverride || this.serviceTypingTimeout || this.configuration.typingIndicatorTimeoutDefault; } }, { key: "initialize", value: function () { var e = this; this.services.notificationClient.on("message", function () { var t = Sa(bl.mark((function t(n, r) { return bl.wrap((function (t) { for (;;)
                switch (t.prev = t.next) {
                    case 0:
                        if (n !== ag.TYPING_INDICATOR) {
                            t.next = 3;
                            break;
                        }
                        return t.next = 3, e._handleRemoteTyping(r);
                    case 3:
                    case "end": return t.stop();
                } }), t); }))); return function (e, n) { return t.apply(this, arguments); }; }()); } }, { key: "_handleRemoteTyping", value: (t = Sa(bl.mark((function e(t) { var n = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: XP.trace("Got new typing indicator ", t), this.getConversation(t.channel_sid).then((function (e) { e && e.participants.forEach((function (e) { if (e.identity === t.identity) {
                        var r = n.configuration.typingIndicatorTimeoutOverride + 1e3 || 1e3 * t.typing_timeout;
                        e._startTyping(r);
                    } })); })).catch((function (e) { throw XP.error(e), e; }));
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return t.apply(this, arguments); }) }, { key: "send", value: function (e) { var t = this.sentUpdates.get(e); return t && t > Date.now() - this.typingTimeout ? Promise.resolve() : (this.sentUpdates.set(e, Date.now()), this._send(e)); } }, { key: "_send", value: function (e) { var t = this; XP.trace("Sending typing indicator"); var n = this.configuration.links.typing, r = "ChannelSid=".concat(e); return this.services.twilsockClient.post(n, { "Content-Type": "application/x-www-form-urlencoded" }, r, this.configuration.productId).then((function (e) { e.body.hasOwnProperty("typing_timeout") && (t.serviceTypingTimeout = 1e3 * e.body.typing_timeout); })).catch((function (e) { throw XP.error("Failed to send typing indicator:", e), e; })); } }]), e; }(), PushNotification = function PushNotification(e) { Ma(this, PushNotification), this.title = e.title || null, this.body = e.body || null, this.sound = e.sound || null, this.badge = e.badge || null, this.action = e.action || null, this.type = e.type || null, this.data = e.data || {}; };
    function eA(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function tA(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? eA(Object(n), !0).forEach((function (t) { ja(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eA(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    var nA, rA, iA, aA = function (e) { return e.replace(/(^\/+|\/+$)/g, ""); }, sA = function () { function e(t, n, r) { Ma(this, e), this._serviceUrl = t, this._services = n, this._productId = r; } var t, n, r; return Ea(e, [{ key: "_preProcessUrl", value: function (e) { var t = aA(e); return /^https?:\/\//.test(e) ? t : "".concat(aA(this._serviceUrl), "/").concat(t); } }, { key: "_makeRequest", value: (r = Sa(bl.mark((function e(t, n, r, i) { var a, s, o, u; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        a = this._preProcessUrl(n), s = tA({ "Content-Type": "application/json; charset=utf-8" }, i || {}), e.t0 = t, e.next = "get" === e.t0 ? 5 : "post" === e.t0 ? 11 : "delete" === e.t0 ? 15 : 19;
                        break;
                    case 5: return u = a, r && (u += "?" + Object.entries(r).map((function (e) { return e.map(encodeURIComponent).join("="); })).join("&")), e.next = 9, this._services.transport.get(u, s, this._productId);
                    case 9: return o = e.sent, e.abrupt("break", 19);
                    case 11: return e.next = 13, this._services.transport.post(a, s, JSON.stringify(r), this._productId);
                    case 13: return o = e.sent, e.abrupt("break", 19);
                    case 15: return e.next = 17, this._services.transport.delete(a, s, null, this._productId);
                    case 17: return o = e.sent, e.abrupt("break", 19);
                    case 19:
                        if (!(o.status.code < 200 || o.status.code >= 300)) {
                            e.next = 21;
                            break;
                        }
                        throw new Error("Request responded with a non-success code ".concat(o.status.code));
                    case 21: return e.abrupt("return", o);
                    case 22:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t, n, i) { return r.apply(this, arguments); }) }, { key: "fetchResource", value: (n = Sa(bl.mark((function e(t, n) { var r, i = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.prev = 1, e.next = 4, new eg({ min: 50, max: 1600, maxAttemptsCount: 6 }).run((function () { return i._makeRequest("get", t, n); }));
                    case 4:
                        r = e.sent, e.next = 10;
                        break;
                    case 7: throw e.prev = 7, e.t0 = e.catch(1), new Error('Fetch resource from "'.concat(t, '" failed.'));
                    case 10: return e.abrupt("return", r.body);
                    case 11:
                    case "end": return e.stop();
                } }), e, null, [[1, 7]]); }))), function (e, t) { return n.apply(this, arguments); }) }, { key: "mutateResource", value: (t = Sa(bl.mark((function e(t, n, r) { var i; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._makeRequest(t, n, r, { "X-Twilio-Mutation-Id": Gg.v4() });
                    case 2:
                        if (202 !== (i = e.sent).status.code) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 6, this.fetchResource(i.body.resource_url);
                    case 6: return e.abrupt("return", e.sent);
                    case 7: return e.abrupt("return", i.body);
                    case 8:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, n, r) { return t.apply(this, arguments); }) }]), e; }();
    function oA(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function uA(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? oA(Object(n), !0).forEach((function (t) { ja(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oA(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    function cA(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(); return function () { var n, r = Aa(e); if (t) {
        var i = Aa(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Pa(this, n); }; }
    var lA = rd.scope("Client"), fA = "2.0.1", dA = function e() { Ma(this, e); };
    return e.Client = (rA = nA = function (e) { Oa(Client, e); var t, n, r, i, a, s, o, u, c, l, f, d, p, h, v = cA(Client); function Client(e) { var t, n, r, i, a, s, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (Ma(this, Client), ja(Ra(s = v.call(this)), "connectionState", "unknown"), ja(Ra(s), "conversationsPromise", null), ja(Ra(s), "_ensureReady", null), ja(Ra(s), "_resolveEnsureReady", null), ja(Ra(s), "_rejectEnsureReady", null), ja(Ra(s), "version", fA), ja(Ra(s), "parsePushNotification", iA.parsePushNotification), s.fpaToken = e, s.options = o, !s.options.disableDeepClone) {
        var u = uA(uA({}, s.options), {}, { transport: void 0, twilsockClient: void 0 });
        (u = Zp(u)).transport = s.options.transport, u.twilsockClient = s.options.twilsockClient, s.options = u;
    } s.options.logLevel = null !== (t = s.options.logLevel) && void 0 !== t ? t : "silent", lA.setLevel(s.options.logLevel); var c = s.options.productId = "ip_messaging"; if (s.options.clientMetadata = s.options.clientMetadata || {}, s.options.clientMetadata.hasOwnProperty("type") || (s.options.clientMetadata.type = "conversations"), s.options.clientMetadata.hasOwnProperty("sdk") || (s.options.clientMetadata.sdk = "JS", s.options.clientMetadata.sdkv = fA), s.options.Sync = s.options.Sync || {}, void 0 === s.options.Sync.enableSessionStorage && (s.options.Sync.enableSessionStorage = !0), s.options.region && (s.options.Sync.region = s.options.region), !e)
        throw new Error("A valid Twilio token should be provided"); s.services = new dA, s._myself = new User("", "", null, s.services); var l = !s.options.twilsockClient; if (!s.options.initRegistrations) {
        var f = new sg.InitRegistration(c);
        iA.populateInitRegistrations(f), s.options.initRegistrations = [f];
    } s.services.twilsockClient = s.options.twilsockClient = null !== (n = s.options.twilsockClient) && void 0 !== n ? n : new sg.TwilsockClient(e, c, s.options), s.services.twilsockClient.on("tokenAboutToExpire", (function (e) { return s.emit("tokenAboutToExpire", e); })), s.services.twilsockClient.on("tokenExpired", (function () { return s.emit("tokenExpired"); })), s.services.twilsockClient.on("connectionError", (function (e) { return s.emit("connectionError", e); })), s.services.twilsockClient.on("stateChanged", (function (e) { lA.debug("Handling stateChanged for ConversationsClient: new state ".concat(e)), e !== s.connectionState && (s.connectionState = e, s.emit("connectionStateChanged", s.connectionState)); })), s.services.transport = s.options.transport = null !== (r = s.options.transport) && void 0 !== r ? r : s.options.twilsockClient, s.services.notificationClient = s.options.notificationsClient = null !== (i = s.options.notificationsClient) && void 0 !== i ? i : new KS.Notifications(e, s.options), s.services.syncClient = s.options.syncClient = null !== (a = s.options.syncClient) && void 0 !== a ? a : new OR(e, s.options); var d = o.Chat || o.IPMessaging || o || {}, p = d.region || o.region, h = d.apiUri || d.typingUri || "https://aim.".concat(p || "us1", ".twilio.com"); s.services.commandExecutor = new sA(h, { transport: s.options.transport }, c); var y = function (e) { s._rejectEnsureReady(e), s.emit("stateChanged", "failed"); }; return s.services.twilsockClient.once("connectionError", y), s.services.twilsockClient.once("disconnected", y), s.services.twilsockClient.once("connected", Sa(bl.mark((function e() { var t; return bl.wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return lA.debug("ConversationsClient started INITIALIZING"), s.services.twilsockClient.off("connectionError", y), s.services.twilsockClient.off("disconnected", y), e.prev = 3, t = "conversations.client.startup", s.services.twilsockClient.addPartialTelemetryEvent(new sg.TelemetryEventDescription(t, "Conversations client startup", new Date), t, sg.TelemetryPoint.Start), e.next = 8, s._initialize();
            case 8:
                s.services.twilsockClient.addPartialTelemetryEvent(new sg.TelemetryEventDescription("", "", new Date), t, sg.TelemetryPoint.End), e.next = 15;
                break;
            case 11: e.prev = 11, e.t0 = e.catch(3), s._rejectEnsureReady(e.t0), s.emit("stateChanged", "failed");
            case 15:
            case "end": return e.stop();
        } }), e, null, [[3, 11]]); })))), s._ensureReady = new Promise((function (e, t) { s._resolveEnsureReady = e, s._rejectEnsureReady = t; })).catch((function (e) { })), l && s.services.twilsockClient.connect(), s; } return Ea(Client, [{ key: "user", get: function () { return this._myself; } }, { key: "reachabilityEnabled", get: function () { if (!this.configuration)
                throw new Error("Reachability information could not yet be accessed as the client has not yet been initialized. Subscribe to the 'stateChanged' event to properly react to the client initialization."); return this.configuration.reachabilityEnabled; } }, { key: "token", get: function () { return this.fpaToken; } }, { key: "_subscribeToPushNotifications", value: function (e) { var t = this; [ag.NEW_MESSAGE, ag.ADDED_TO_CONVERSATION, ag.REMOVED_FROM_CONVERSATION, ag.TYPING_INDICATOR, ag.CONSUMPTION_UPDATE].forEach((function (n) { t.services.notificationClient.subscribe(e, n); })); } }, { key: "_unsubscribeFromPushNotifications", value: function (e) { var t = this; [ag.NEW_MESSAGE, ag.ADDED_TO_CONVERSATION, ag.REMOVED_FROM_CONVERSATION, ag.TYPING_INDICATOR, ag.CONSUMPTION_UPDATE].forEach((function (n) { t.services.notificationClient.unsubscribe(e, n); })); } }, { key: "_initialize", value: (h = Sa(bl.mark((function e() { var t, n = this; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.commandExecutor.fetchResource("Client/v2/Configuration");
                    case 2: return t = e.sent, this.configuration = new hd(this.options, t, lA), this._myself._resolveInitialization(this.configuration, this.configuration.userIdentity, this.configuration.userInfo, !0), this.services.typingIndicator = new ZP(this.getConversationBySid.bind(this), this.configuration, this.services), this.services.network = new ig(this.configuration, this.services), this.services.users = new QP(this._myself, this.configuration, this.services), this.services.users.on("userSubscribed", this.emit.bind(this, "userSubscribed")), this.services.users.on("userUpdated", (function (e) { return n.emit("userUpdated", e); })), this.services.users.on("userUnsubscribed", this.emit.bind(this, "userUnsubscribed")), this.conversations = new GP(this.configuration, this.services), this.conversations.on("conversationAdded", this.emit.bind(this, "conversationAdded")), this.conversations.on("conversationRemoved", this.emit.bind(this, "conversationRemoved")), this.conversations.on("conversationJoined", this.emit.bind(this, "conversationJoined")), this.conversations.on("conversationLeft", this.emit.bind(this, "conversationLeft")), this.conversations.on("conversationUpdated", (function (e) { return n.emit("conversationUpdated", e); })), this.conversations.on("participantJoined", this.emit.bind(this, "participantJoined")), this.conversations.on("participantLeft", this.emit.bind(this, "participantLeft")), this.conversations.on("participantUpdated", (function (e) { return n.emit("participantUpdated", e); })), this.conversations.on("messageAdded", this.emit.bind(this, "messageAdded")), this.conversations.on("messageUpdated", (function (e) { return n.emit("messageUpdated", e); })), this.conversations.on("messageRemoved", this.emit.bind(this, "messageRemoved")), this.conversations.on("typingStarted", this.emit.bind(this, "typingStarted")), this.conversations.on("typingEnded", this.emit.bind(this, "typingEnded")), this.conversationsPromise = this.conversations.fetchConversations().then((function () { return n.conversations; })).catch((function (e) { throw e; })), e.next = 28, this.services.users.myself._ensureFetched();
                    case 28: iA.supportedPushChannels.forEach((function (e) { return n._subscribeToPushNotifications(e); })), this.services.typingIndicator.initialize(), this.services.mcsClient = new MR.McsClient(this.fpaToken, this.configuration.links.mediaService, this.configuration.links.mediaSetService, uA(uA({}, this.options), {}, { transport: null })), this._resolveEnsureReady(), this.emit("stateChanged", "initialized");
                    case 33:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return h.apply(this, arguments); }) }, { key: "shutdown", value: (p = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.next = 4, this.services.twilsockClient.disconnect();
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return p.apply(this, arguments); }) }, { key: "updateToken", value: (d = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2:
                        if (lA.info("updateToken"), this.fpaToken !== t) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", this);
                    case 5: return e.next = 7, this.services.twilsockClient.updateToken(t);
                    case 7: return e.next = 9, this.services.notificationClient.updateToken(t);
                    case 9: return e.next = 11, this.services.mcsClient.updateToken(t);
                    case 11: return this.fpaToken = t, e.abrupt("return", this);
                    case 13:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return d.apply(this, arguments); }) }, { key: "getConversationBySid", value: (f = Sa(bl.mark((function e(t) { var n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.next = 4, this.conversations.myConversationsRead.promise;
                    case 4: return e.next = 6, this.conversations.getConversation(t);
                    case 6:
                        if (n = e.sent) {
                            e.next = 11;
                            break;
                        }
                        return e.next = 10, this.conversations.peekConversation(t);
                    case 10: n = e.sent;
                    case 11:
                        if (n) {
                            e.next = 13;
                            break;
                        }
                        throw new Error("Conversation with SID ".concat(t, " is not found."));
                    case 13: return e.abrupt("return", n);
                    case 14:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return f.apply(this, arguments); }) }, { key: "getConversationByUniqueName", value: (l = Sa(bl.mark((function e(t) { var n; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.next = 4, this.conversations.myConversationsRead.promise;
                    case 4: return e.next = 6, this.conversations.getConversationByUniqueName(t);
                    case 6:
                        if (n = e.sent) {
                            e.next = 9;
                            break;
                        }
                        throw new Error("Conversation with unique name ".concat(t, " is not found."));
                    case 9: return e.abrupt("return", n);
                    case 10:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return l.apply(this, arguments); }) }, { key: "getSubscribedConversations", value: (c = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.abrupt("return", this.conversationsPromise.then((function (e) { return e.getConversations(t); })));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return c.apply(this, arguments); }) }, { key: "createConversation", value: (u = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return t = t || {}, e.abrupt("return", this.conversationsPromise.then((function (e) { return e.addConversation(t); })));
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return u.apply(this, arguments); }) }, { key: "setPushRegistrationId", value: (o = Sa(bl.mark((function e(t, n) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return this._subscribeToPushNotifications(t), this.services.notificationClient.setPushRegistrationId(t, n), e.next = 6, this.services.notificationClient.commitChanges();
                    case 6:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return o.apply(this, arguments); }) }, { key: "unsetPushRegistrationId", value: (s = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return this._unsubscribeFromPushNotifications(t), e.next = 5, this.services.notificationClient.commitChanges();
                    case 5:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "removePushRegistrations", value: (a = Sa(bl.mark((function e(t, n) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this.services.notificationClient.removeRegistrations(t, n);
                    case 2:
                    case "end": return e.stop();
                } }), e, this); }))), function (e, t) { return a.apply(this, arguments); }) }, { key: "handlePushNotification", value: (i = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: lA.debug("handlePushNotification, notificationPayload=", t), this.emit("pushNotification", iA.parsePushNotification(t));
                    case 4:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "getUser", value: (r = Sa(bl.mark((function e(t) { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.abrupt("return", this.services.users.getUser(t));
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function (e) { return r.apply(this, arguments); }) }, { key: "getSubscribedUsers", value: (n = Sa(bl.mark((function e() { return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0: return e.next = 2, this._ensureReady;
                    case 2: return e.abrupt("return", this.services.users.getSubscribedUsers());
                    case 3:
                    case "end": return e.stop();
                } }), e, this); }))), function () { return n.apply(this, arguments); }) }], [{ key: "populateInitRegistrations", value: function (e) { e.populateInitRegistrations([ag.TYPING_INDICATOR]), OR.populateInitRegistrations(e); } }, { key: "create", value: (t = Sa(bl.mark((function e(t, n) { var r; return bl.wrap((function (e) { for (;;)
                switch (e.prev = e.next) {
                    case 0:
                        if (null == n || !n.twilsockClient) {
                            e.next = 2;
                            break;
                        }
                        throw new Error("Obsolete usage of ConversationsClient.create() factory method: if you pass twilsock from the outside then you must use ConversationsClient constructor and be prepared to work with uninitialized client.");
                    case 2: return r = new iA(t, n), e.next = 5, r._ensureReady;
                    case 5: return e.abrupt("return", r);
                    case 6:
                    case "end": return e.stop();
                } }), e); }))), function (e, n) { return t.apply(this, arguments); }) }, { key: "parsePushNotificationChatData", value: function (e) { var t = {}; for (var n in iA.supportedPushDataFields)
                void 0 !== e[n] && null !== e[n] && ("message_index" === n ? null !== eh(e[n]) && (t[iA.supportedPushDataFields[n]] = Number(e[n])) : t[iA.supportedPushDataFields[n]] = e[n]); return t; } }, { key: "parsePushNotification", value: function (e) { if (lA.debug("parsePushNotification, notificationPayload=", e), void 0 !== e.aps) {
                if (!e.twi_message_type)
                    throw new Error("Provided push notification payload does not contain Programmable Chat push notification type");
                var t = iA.parsePushNotificationChatData(e), n = e.aps, r = null, i = null;
                return "string" == typeof n.alert ? r = n.alert || null : (r = n.alert.body || null, i = n.alert.title || null), new PushNotification({ title: i, body: r, sound: n.sound || null, badge: n.badge || null, action: n.category || null, type: e.twi_message_type, data: t });
            } if (void 0 !== e.data) {
                var a = e.data;
                if (!a.twi_message_type)
                    throw new Error("Provided push notification payload does not contain Programmable Chat push notification type");
                var s = iA.parsePushNotificationChatData(e.data);
                return new PushNotification({ title: a.twi_title || null, body: a.twi_body || null, sound: a.twi_sound || null, badge: null, action: a.twi_action || null, type: a.twi_message_type, data: s });
            } throw new Error("Provided push notification payload is not Programmable Chat notification"); } }]), Client; }(_y), ja(nA, "version", fA), ja(nA, "supportedPushChannels", ["fcm", "apn"]), ja(nA, "supportedPushDataFields", { conversation_sid: "conversationSid", message_sid: "messageSid", message_index: "messageIndex" }), ja(nA, "conversationAdded", "conversationAdded"), ja(nA, "conversationJoined", "conversationJoined"), ja(nA, "conversationLeft", "conversationLeft"), ja(nA, "conversationRemoved", "conversationRemoved"), ja(nA, "conversationUpdated", "conversationUpdated"), ja(nA, "participantJoined", "participantJoined"), ja(nA, "participantLeft", "participantLeft"), ja(nA, "participantUpdated", "participantUpdated"), ja(nA, "messageAdded", "messageAdded"), ja(nA, "messageRemoved", "messageRemoved"), ja(nA, "messageUpdated", "messageUpdated"), ja(nA, "tokenAboutToExpire", "tokenAboutToExpire"), ja(nA, "tokenExpired", "tokenExpired"), ja(nA, "typingEnded", "typingEnded"), ja(nA, "typingStarted", "typingStarted"), ja(nA, "pushNotification", "pushNotification"), ja(nA, "userSubscribed", "userSubscribed"), ja(nA, "userUnsubscribed", "userUnsubscribed"), ja(nA, "userUpdated", "userUpdated"), ja(nA, "stateChanged", "stateChanged"), ja(nA, "connectionStateChanged", "connectionStateChanged"), ja(nA, "connectionError", "connectionError"), iA = rA), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], e.Client.prototype, "updateToken", null), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], e.Client.prototype, "getConversationBySid", null), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], e.Client.prototype, "getConversationByUniqueName", null), wl([Xv(["undefined", Kv("conversation options", { friendlyName: ["string", "undefined"], isPrivate: ["boolean", "undefined"], uniqueName: ["string", "undefined"] })]), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], e.Client.prototype, "createConversation", null), wl([Xv($v("fcm", "apn"), "string"), xl("design:type", Function), xl("design:paramtypes", [String, String]), xl("design:returntype", Promise)], e.Client.prototype, "setPushRegistrationId", null), wl([Xv($v("fcm", "apn")), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], e.Client.prototype, "unsetPushRegistrationId", null), wl([Xv($v("fcm", "apn"), Vv), xl("design:type", Function), xl("design:paramtypes", [String, String]), xl("design:returntype", Promise)], e.Client.prototype, "removePushRegistrations", null), wl([Xv(Hv), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", Promise)], e.Client.prototype, "handlePushNotification", null), wl([Xv(Vv), xl("design:type", Function), xl("design:paramtypes", [String]), xl("design:returntype", Promise)], e.Client.prototype, "getUser", null), wl([Xv("string", ["undefined", Hv]), xl("design:type", Function), xl("design:paramtypes", [String, Object]), xl("design:returntype", Promise)], e.Client, "create", null), wl([Qv(Hv), xl("design:type", Function), xl("design:paramtypes", [Object]), xl("design:returntype", PushNotification)], e.Client, "parsePushNotification", null), e.Client = iA = wl([Yv(Vv, [Hv, "undefined"]), xl("design:paramtypes", [String, Object])], e.Client), e.AggregatedDeliveryReceipt = AggregatedDeliveryReceipt, e.Conversation = Conversation, e.DetailedDeliveryReceipt = DetailedDeliveryReceipt, e.Media = Media, e.Message = Message, e.MessageBuilder = CP, e.NotificationTypes = ag, e.Participant = Participant, e.PushNotification = PushNotification, e.RestPaginator = wP, e.UnsentMessage = OP, e.User = User, Object.defineProperty(e, "__esModule", { value: !0 }), e;
}({});
