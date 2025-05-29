(()=>{
    "use strict";
    var t = {
        d: (e,n)=>{
            for (var i in n)
                t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: n[i]
                })
        }
        ,
        o: (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
        r: t=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
      , e = {};
    t.r(e),
    t.d(e, {
        ArcCurve: ()=>li,
        CatmullRomCurve3: ()=>mi,
        CubicBezierCurve: ()=>yi,
        CubicBezierCurve3: ()=>xi,
        EllipseCurve: ()=>oi,
        LineCurve: ()=>_i,
        LineCurve3: ()=>bi,
        QuadraticBezierCurve: ()=>wi,
        QuadraticBezierCurve3: ()=>Mi,
        SplineCurve: ()=>Si
    });
    var n = {};
    t.r(n),
    t.d(n, {
        LineBasicMaterial: ()=>zn,
        LineDashedMaterial: ()=>Xr,
        Material: ()=>Te,
        MeshBasicMaterial: ()=>Ae,
        MeshDepthMaterial: ()=>Vr,
        MeshDistanceMaterial: ()=>Wr,
        MeshLambertMaterial: ()=>Hr,
        MeshMatcapMaterial: ()=>jr,
        MeshNormalMaterial: ()=>kr,
        MeshPhongMaterial: ()=>Br,
        MeshPhysicalMaterial: ()=>Fr,
        MeshStandardMaterial: ()=>Ur,
        MeshToonMaterial: ()=>Gr,
        PointsMaterial: ()=>Rn,
        RawShaderMaterial: ()=>zr,
        ShaderMaterial: ()=>Or,
        ShadowMaterial: ()=>Cr,
        SpriteMaterial: ()=>pn
    });
    var i = {};
    t.r(i),
    t.d(i, {
        BoxBufferGeometry: ()=>Qr,
        BoxGeometry: ()=>Qr,
        CircleBufferGeometry: ()=>$r,
        CircleGeometry: ()=>$r,
        ConeBufferGeometry: ()=>es,
        ConeGeometry: ()=>es,
        CylinderBufferGeometry: ()=>ts,
        CylinderGeometry: ()=>ts,
        DodecahedronBufferGeometry: ()=>is,
        DodecahedronGeometry: ()=>is,
        EdgesGeometry: ()=>ls,
        ExtrudeBufferGeometry: ()=>Us,
        ExtrudeGeometry: ()=>Us,
        IcosahedronBufferGeometry: ()=>Bs,
        IcosahedronGeometry: ()=>Bs,
        LatheBufferGeometry: ()=>Gs,
        LatheGeometry: ()=>Gs,
        OctahedronBufferGeometry: ()=>ks,
        OctahedronGeometry: ()=>ks,
        ParametricBufferGeometry: ()=>Hs,
        ParametricGeometry: ()=>Hs,
        PlaneBufferGeometry: ()=>Vs,
        PlaneGeometry: ()=>Vs,
        PolyhedronBufferGeometry: ()=>ns,
        PolyhedronGeometry: ()=>ns,
        RingBufferGeometry: ()=>Ws,
        RingGeometry: ()=>Ws,
        ShapeBufferGeometry: ()=>js,
        ShapeGeometry: ()=>js,
        SphereBufferGeometry: ()=>Xs,
        SphereGeometry: ()=>Xs,
        TetrahedronBufferGeometry: ()=>qs,
        TetrahedronGeometry: ()=>qs,
        TextBufferGeometry: ()=>Ys,
        TextGeometry: ()=>Ys,
        TorusBufferGeometry: ()=>Zs,
        TorusGeometry: ()=>Zs,
        TorusKnotBufferGeometry: ()=>Js,
        TorusKnotGeometry: ()=>Js,
        TubeBufferGeometry: ()=>Ks,
        TubeGeometry: ()=>Ks,
        WireframeGeometry: ()=>Qs
    });
    const r = 0
      , s = 2
      , a = 100
      , o = 301
      , l = 302
      , c = 306
      , h = 307
      , u = 1e3
      , d = 1001
      , p = 1002
      , m = 1003
      , f = 1004
      , g = 1005
      , v = 1006
      , y = 1008
      , x = 1009
      , _ = 1012
      , b = 1014
      , w = 1015
      , M = 1016
      , S = 1020
      , E = 1022
      , T = 1023
      , A = 1026
      , L = 1027
      , R = 2300
      , P = 2301
      , C = 2302
      , D = 3e3
      , N = 7680
      , I = "300 es";
    class O {
        constructor(t=0, e=0, n=0, i=1) {
            this.x = t,
            this.y = e,
            this.z = n,
            this.w = i
        }
        get width() {
            return this.z
        }
        set width(t) {
            this.z = t
        }
        get height() {
            return this.w
        }
        set height(t) {
            this.w = t
        }
        set(t, e, n, i) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this.w = i,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setW(t) {
            return this.w = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this.w *= t.w,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = this.w
              , s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r,
            this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r,
            this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r,
            this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = .01
              , a = .1
              , o = t.elements
              , l = o[0]
              , c = o[4]
              , h = o[8]
              , u = o[1]
              , d = o[5]
              , p = o[9]
              , m = o[2]
              , f = o[6]
              , g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                const t = (l + 1) / 2
                  , o = (d + 1) / 2
                  , v = (g + 1) / 2
                  , y = (c + u) / 4
                  , x = (h + m) / 4
                  , _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (n = 0,
                i = .707106781,
                r = .707106781) : (n = Math.sqrt(t),
                i = y / n,
                r = x / n) : o > v ? o < s ? (n = .707106781,
                i = 0,
                r = .707106781) : (i = Math.sqrt(o),
                n = y / i,
                r = _ / i) : v < s ? (n = .707106781,
                i = .707106781,
                r = 0) : (r = Math.sqrt(v),
                n = x / r,
                i = _ / r),
                this.set(n, i, r, e),
                this
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1),
            this.x = (f - p) / v,
            this.y = (h - m) / v,
            this.z = (u - c) / v,
            this.w = Math.acos((l + d + g - 1) / 2),
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this.w = Math.max(t, Math.min(e, this.w)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this.w = t.w + (e.w - t.w) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this.w = Math.random(),
            this
        }
    }
    O.prototype.isVector4 = !0;
    const z = [];
    for (let t = 0; t < 256; t++)
        z[t] = (t < 16 ? "0" : "") + t.toString(16);
    let U = 1234567;
    const F = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            const t = 4294967295 * Math.random() | 0
              , e = 4294967295 * Math.random() | 0
              , n = 4294967295 * Math.random() | 0
              , i = 4294967295 * Math.random() | 0;
            return (z[255 & t] + z[t >> 8 & 255] + z[t >> 16 & 255] + z[t >> 24 & 255] + "-" + z[255 & e] + z[e >> 8 & 255] + "-" + z[e >> 16 & 15 | 64] + z[e >> 24 & 255] + "-" + z[63 & n | 128] + z[n >> 8 & 255] + "-" + z[n >> 16 & 255] + z[n >> 24 & 255] + z[255 & i] + z[i >> 8 & 255] + z[i >> 16 & 255] + z[i >> 24 & 255]).toUpperCase()
        },
        clamp: function(t, e, n) {
            return Math.max(e, Math.min(n, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e)
        },
        lerp: function(t, e, n) {
            return (1 - n) * t + n * e
        },
        damp: function(t, e, n, i) {
            return F.lerp(t, e, 1 - Math.exp(-n * i))
        },
        pingpong: function(t, e=1) {
            return e - Math.abs(F.euclideanModulo(t, 2 * e) - e)
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        seededRandom: function(t) {
            return void 0 !== t && (U = t % 2147483647),
            U = 16807 * U % 2147483647,
            (U - 1) / 2147483646
        },
        degToRad: function(t) {
            return t * F.DEG2RAD
        },
        radToDeg: function(t) {
            return t * F.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        },
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
            const s = Math.cos
              , a = Math.sin
              , o = s(n / 2)
              , l = a(n / 2)
              , c = s((e + i) / 2)
              , h = a((e + i) / 2)
              , u = s((e - i) / 2)
              , d = a((e - i) / 2)
              , p = s((i - e) / 2)
              , m = a((i - e) / 2);
            switch (r) {
            case "XYX":
                t.set(o * h, l * u, l * d, o * c);
                break;
            case "YZY":
                t.set(l * d, o * h, l * u, o * c);
                break;
            case "ZXZ":
                t.set(l * u, l * d, o * h, o * c);
                break;
            case "XZX":
                t.set(o * h, l * m, l * p, o * c);
                break;
            case "YXY":
                t.set(l * p, o * h, l * m, o * c);
                break;
            case "ZYZ":
                t.set(l * m, l * p, o * h, o * c);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
            }
        }
    };
    class B {
        constructor(t=0, e=0, n=0, i=1) {
            this._x = t,
            this._y = e,
            this._z = n,
            this._w = i
        }
        static slerp(t, e, n, i) {
            return n.copy(t).slerp(e, i)
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0]
              , l = n[i + 1]
              , c = n[i + 2]
              , h = n[i + 3];
            const u = r[s + 0]
              , d = r[s + 1]
              , p = r[s + 2]
              , m = r[s + 3];
            if (0 === a)
                return t[e + 0] = o,
                t[e + 1] = l,
                t[e + 2] = c,
                void (t[e + 3] = h);
            if (1 === a)
                return t[e + 0] = u,
                t[e + 1] = d,
                t[e + 2] = p,
                void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m
                  , n = e >= 0 ? 1 : -1
                  , i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i)
                      , s = Math.atan2(r, e * n);
                    t = Math.sin(t * s) / r,
                    a = Math.sin(a * s) / r
                }
                const r = a * n;
                if (o = o * t + u * r,
                l = l * t + d * r,
                c = c * t + p * r,
                h = h * t + m * r,
                t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t,
                    l *= t,
                    c *= t,
                    h *= t
                }
            }
            t[e] = o,
            t[e + 1] = l,
            t[e + 2] = c,
            t[e + 3] = h
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i]
              , o = n[i + 1]
              , l = n[i + 2]
              , c = n[i + 3]
              , h = r[s]
              , u = r[s + 1]
              , d = r[s + 2]
              , p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u,
            t[e + 1] = o * p + c * u + l * h - a * d,
            t[e + 2] = l * p + c * d + a * u - o * h,
            t[e + 3] = c * p - a * h - o * u - l * d,
            t
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
            this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(t) {
            this._w = t,
            this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._w = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        }
        copy(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this._onChangeCallback(),
            this
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._order
              , a = Math.cos
              , o = Math.sin
              , l = a(n / 2)
              , c = a(i / 2)
              , h = a(r / 2)
              , u = o(n / 2)
              , d = o(i / 2)
              , p = o(r / 2);
            switch (s) {
            case "XYZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p,
                this._y = l * d * h + u * c * p,
                this._z = l * c * p - u * d * h,
                this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p,
                this._y = l * d * h - u * c * p,
                this._z = l * c * p + u * d * h,
                this._w = l * c * h + u * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
            }
            return !1 !== e && this._onChangeCallback(),
            this
        }
        setFromAxisAngle(t, e) {
            const n = e / 2
              , i = Math.sin(n);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(t) {
            const e = t.elements
              , n = e[0]
              , i = e[4]
              , r = e[8]
              , s = e[1]
              , a = e[5]
              , o = e[9]
              , l = e[2]
              , c = e[6]
              , h = e[10]
              , u = n + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t,
                this._x = (c - o) * t,
                this._y = (r - l) * t,
                this._z = (s - i) * t
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t,
                this._x = .25 * t,
                this._y = (i + s) / t,
                this._z = (r + l) / t
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t,
                this._x = (i + s) / t,
                this._y = .25 * t,
                this._z = (o + c) / t
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t,
                this._x = (r + l) / t,
                this._y = (o + c) / t,
                this._z = .25 * t
            }
            return this._onChangeCallback(),
            this
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < 1e-6 ? (n = 0,
            Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
            this._y = t.x,
            this._z = 0,
            this._w = n) : (this._x = 0,
            this._y = -t.z,
            this._z = t.y,
            this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
            this._y = t.z * e.x - t.x * e.z,
            this._z = t.x * e.y - t.y * e.x,
            this._w = n),
            this.normalize()
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(F.clamp(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n)
                return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i),
            this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this._onChangeCallback(),
            this
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this._onChangeCallback(),
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this)
        }
        multiplyQuaternions(t, e) {
            const n = t._x
              , i = t._y
              , r = t._z
              , s = t._w
              , a = e._x
              , o = e._y
              , l = e._z
              , c = e._w;
            return this._x = n * c + s * a + i * l - r * o,
            this._y = i * c + s * o + r * a - n * l,
            this._z = r * c + s * l + n * o - i * a,
            this._w = s * c - n * a - i * o - r * l,
            this._onChangeCallback(),
            this
        }
        slerp(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            const n = this._x
              , i = this._y
              , r = this._z
              , s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            a = -a) : this.copy(t),
            a >= 1)
                return this._w = s,
                this._x = n,
                this._y = i,
                this._z = r,
                this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w,
                this._x = t * n + e * this._x,
                this._y = t * i + e * this._y,
                this._z = t * r + e * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
            }
            const l = Math.sqrt(o)
              , c = Math.atan2(l, a)
              , h = Math.sin((1 - e) * c) / l
              , u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u,
            this._x = n * h + this._x * u,
            this._y = i * h + this._y * u,
            this._z = r * h + this._z * u,
            this._onChangeCallback(),
            this
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }
        fromArray(t, e=0) {
            return this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this._onChangeCallback(),
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e),
            this._y = t.getY(e),
            this._z = t.getZ(e),
            this._w = t.getW(e),
            this
        }
        _onChange(t) {
            return this._onChangeCallback = t,
            this
        }
        _onChangeCallback() {}
    }
    B.prototype.isQuaternion = !0;
    class G {
        constructor(t=0, e=0, n=0) {
            this.x = t,
            this.y = e,
            this.z = n
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z),
            this.x = t,
            this.y = e,
            this.z = n,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setZ(t) {
            return this.z = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(H.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(H.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i,
            this.y = r[1] * e + r[4] * n + r[7] * i,
            this.z = r[2] * e + r[5] * n + r[8] * i,
            this
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements
              , s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s,
            this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s,
            this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s,
            this
        }
        applyQuaternion(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.x
              , s = t.y
              , a = t.z
              , o = t.w
              , l = o * e + s * i - a * n
              , c = o * n + a * e - r * i
              , h = o * i + r * n - s * e
              , u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s,
            this.y = c * o + u * -s + h * -r - l * -a,
            this.z = h * o + u * -a + l * -s - c * -r,
            this
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        }
        transformDirection(t) {
            const e = this.x
              , n = this.y
              , i = this.z
              , r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i,
            this.y = r[1] * e + r[5] * n + r[9] * i,
            this.z = r[2] * e + r[6] * n + r[10] * i,
            this.normalize()
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this.z = t.z + (e.z - t.z) * n,
            this
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
        crossVectors(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = e.x
              , a = e.y
              , o = e.z;
            return this.x = i * o - r * a,
            this.y = r * s - n * o,
            this.z = n * a - i * s,
            this
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e)
                return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n)
        }
        projectOnPlane(t) {
            return k.copy(this).projectOnVector(t),
            this.sub(k)
        }
        reflect(t) {
            return this.sub(k.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e)
                return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(F.clamp(n, -1, 1))
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
              , n = this.y - t.y
              , i = this.z - t.z;
            return e * e + n * n + i * i
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n),
            this.y = Math.cos(e) * t,
            this.z = i * Math.cos(n),
            this
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e),
            this.y = n,
            this.z = t * Math.cos(e),
            this
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12],
            this.y = e[13],
            this.z = e[14],
            this
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length()
              , n = this.setFromMatrixColumn(t, 1).length()
              , i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = n,
            this.z = i,
            this
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e)
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e)
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this
        }
    }
    G.prototype.isVector3 = !0;
    const k = new G
      , H = new B;
    class V {
        constructor(t=0, e=0) {
            this.x = t,
            this.y = e
        }
        get width() {
            return this.x
        }
        set width(t) {
            this.x = t
        }
        get height() {
            return this.y
        }
        set height(t) {
            this.y = t
        }
        set(t, e) {
            return this.x = t,
            this.y = e,
            this
        }
        setScalar(t) {
            return this.x = t,
            this.y = t,
            this
        }
        setX(t) {
            return this.x = t,
            this
        }
        setY(t) {
            return this.y = t,
            this
        }
        setComponent(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y)
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        }
        addScalar(t) {
            return this.x += t,
            this.y += t,
            this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        }
        subScalar(t) {
            return this.x -= t,
            this.y -= t,
            this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        }
        multiply(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        }
        multiplyScalar(t) {
            return this.x *= t,
            this.y *= t,
            this
        }
        divide(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        applyMatrix3(t) {
            const e = this.x
              , n = this.y
              , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6],
            this.y = i[1] * e + i[4] * n + i[7],
            this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y
        }
        cross(t) {
            return this.x * t.y - this.y * t.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
              , n = this.y - t.y;
            return e * e + n * n
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
            this.y = t.y + (e.y - t.y) * n,
            this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y
        }
        fromArray(t, e=0) {
            return this.x = t[e],
            this.y = t[e + 1],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.x,
            t[e + 1] = this.y,
            t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        }
        rotateAround(t, e) {
            const n = Math.cos(e)
              , i = Math.sin(e)
              , r = this.x - t.x
              , s = this.y - t.y;
            return this.x = r * n - s * i + t.x,
            this.y = r * i + s * n + t.y,
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this
        }
    }
    V.prototype.isVector2 = !0;
    const W = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }
      , j = {
        h: 0,
        s: 0,
        l: 0
    }
      , X = {
        h: 0,
        s: 0,
        l: 0
    };
    function q(t, e, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
    }
    function Y(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
    }
    function Z(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
    }
    class J {
        constructor(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        }
        setScalar(t) {
            return this.r = t,
            this.g = t,
            this.b = t,
            this
        }
        setHex(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        }
        setRGB(t, e, n) {
            return this.r = t,
            this.g = e,
            this.b = n,
            this
        }
        setHSL(t, e, n) {
            if (t = F.euclideanModulo(t, 1),
            e = F.clamp(e, 0, 1),
            n = F.clamp(n, 0, 1),
            0 === e)
                this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e
                  , r = 2 * n - i;
                this.r = q(r, i, t + 1 / 3),
                this.g = q(r, i, t),
                this.b = q(r, i, t - 1 / 3)
            }
            return this
        }
        setStyle(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const i = n[1]
                  , r = n[2];
                switch (i) {
                case "rgb":
                case "rgba":
                    if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                        return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                        e(t[4]),
                        this;
                    if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                        return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                        e(t[4]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                        const n = parseFloat(t[1]) / 360
                          , i = parseInt(t[2], 10) / 100
                          , r = parseInt(t[3], 10) / 100;
                        return e(t[4]),
                        this.setHSL(n, i, r)
                    }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = n[1]
                  , e = t.length;
                if (3 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                    this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                    this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                    this;
                if (6 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                    this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                    this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                    this
            }
            return t && t.length > 0 ? this.setColorName(t) : this
        }
        setColorName(t) {
            const e = W[t];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
            this
        }
        clone() {
            return new this.constructor(this.r,this.g,this.b)
        }
        copy(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        }
        copyGammaToLinear(t, e=2) {
            return this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        }
        copyLinearToGamma(t, e=2) {
            const n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n),
            this.g = Math.pow(t.g, n),
            this.b = Math.pow(t.b, n),
            this
        }
        convertGammaToLinear(t) {
            return this.copyGammaToLinear(this, t),
            this
        }
        convertLinearToGamma(t) {
            return this.copyLinearToGamma(this, t),
            this
        }
        copySRGBToLinear(t) {
            return this.r = Y(t.r),
            this.g = Y(t.g),
            this.b = Y(t.b),
            this
        }
        copyLinearToSRGB(t) {
            return this.r = Z(t.r),
            this.g = Z(t.g),
            this.b = Z(t.b),
            this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this),
            this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this),
            this
        }
        getHex() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }
        getHexString() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }
        getHSL(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
            t = {
                h: 0,
                s: 0,
                l: 0
            });
            const e = this.r
              , n = this.g
              , i = this.b
              , r = Math.max(e, n, i)
              , s = Math.min(e, n, i);
            let a, o;
            const l = (s + r) / 2;
            if (s === r)
                a = 0,
                o = 0;
            else {
                const t = r - s;
                switch (o = l <= .5 ? t / (r + s) : t / (2 - r - s),
                r) {
                case e:
                    a = (n - i) / t + (n < i ? 6 : 0);
                    break;
                case n:
                    a = (i - e) / t + 2;
                    break;
                case i:
                    a = (e - n) / t + 4
                }
                a /= 6
            }
            return t.h = a,
            t.s = o,
            t.l = l,
            t
        }
        getStyle() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }
        offsetHSL(t, e, n) {
            return this.getHSL(j),
            j.h += t,
            j.s += e,
            j.l += n,
            this.setHSL(j.h, j.s, j.l),
            this
        }
        add(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        }
        addColors(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        }
        addScalar(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        }
        multiply(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        }
        multiplyScalar(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n,
            this.g = t.g + (e.g - t.g) * n,
            this.b = t.b + (e.b - t.b) * n,
            this
        }
        lerpHSL(t, e) {
            this.getHSL(j),
            t.getHSL(X);
            const n = F.lerp(j.h, X.h, e)
              , i = F.lerp(j.s, X.s, e)
              , r = F.lerp(j.l, X.l, e);
            return this.setHSL(n, i, r),
            this
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }
        fromArray(t, e=0) {
            return this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e),
            this.g = t.getY(e),
            this.b = t.getZ(e),
            !0 === t.normalized && (this.r /= 255,
            this.g /= 255,
            this.b /= 255),
            this
        }
        toJSON() {
            return this.getHex()
        }
    }
    J.NAMES = W,
    J.prototype.isColor = !0,
    J.prototype.r = 1,
    J.prototype.g = 1,
    J.prototype.b = 1;
    const K = new G
      , Q = new V;
    function $(t, e, n) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.normalized = !0 === n,
        this.usage = 35044,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function tt(t, e, n) {
        $.call(this, new Int8Array(t), e, n)
    }
    function et(t, e, n) {
        $.call(this, new Uint8Array(t), e, n)
    }
    function nt(t, e, n) {
        $.call(this, new Uint8ClampedArray(t), e, n)
    }
    function it(t, e, n) {
        $.call(this, new Int16Array(t), e, n)
    }
    function rt(t, e, n) {
        $.call(this, new Uint16Array(t), e, n)
    }
    function st(t, e, n) {
        $.call(this, new Int32Array(t), e, n)
    }
    function at(t, e, n) {
        $.call(this, new Uint32Array(t), e, n)
    }
    function ot(t, e, n) {
        $.call(this, new Uint16Array(t), e, n)
    }
    function lt(t, e, n) {
        $.call(this, new Float32Array(t), e, n)
    }
    function ct(t, e, n) {
        $.call(this, new Float64Array(t), e, n)
    }
    Object.defineProperty($.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign($.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setUsage: function(t) {
            return this.usage = t,
            this
        },
        copy: function(t) {
            return this.name = t.name,
            this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.usage = t.usage,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.itemSize,
            n *= e.itemSize;
            for (let i = 0, r = this.itemSize; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                r = new J),
                e[n++] = r.r,
                e[n++] = r.g,
                e[n++] = r.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                r = new V),
                e[n++] = r.x,
                e[n++] = r.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                r = new G),
                e[n++] = r.x,
                e[n++] = r.y,
                e[n++] = r.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                r = new O),
                e[n++] = r.x,
                e[n++] = r.y,
                e[n++] = r.z,
                e[n++] = r.w
            }
            return this
        },
        applyMatrix3: function(t) {
            if (2 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    Q.fromBufferAttribute(this, e),
                    Q.applyMatrix3(t),
                    this.setXY(e, Q.x, Q.y);
            else if (3 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    K.fromBufferAttribute(this, e),
                    K.applyMatrix3(t),
                    this.setXYZ(e, K.x, K.y, K.z);
            return this
        },
        applyMatrix4: function(t) {
            for (let e = 0, n = this.count; e < n; e++)
                K.x = this.getX(e),
                K.y = this.getY(e),
                K.z = this.getZ(e),
                K.applyMatrix4(t),
                this.setXYZ(e, K.x, K.y, K.z);
            return this
        },
        applyNormalMatrix: function(t) {
            for (let e = 0, n = this.count; e < n; e++)
                K.x = this.getX(e),
                K.y = this.getY(e),
                K.z = this.getZ(e),
                K.applyNormalMatrix(t),
                this.setXYZ(e, K.x, K.y, K.z);
            return this
        },
        transformDirection: function(t) {
            for (let e = 0, n = this.count; e < n; e++)
                K.x = this.getX(e),
                K.y = this.getY(e),
                K.z = this.getZ(e),
                K.transformDirection(t),
                this.setXYZ(e, K.x, K.y, K.z);
            return this
        },
        set: function(t, e=0) {
            return this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, n, i, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = i,
            this.array[t + 3] = r,
            this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        },
        clone: function() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        },
        toJSON: function() {
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            }
        }
    }),
    tt.prototype = Object.create($.prototype),
    tt.prototype.constructor = tt,
    et.prototype = Object.create($.prototype),
    et.prototype.constructor = et,
    nt.prototype = Object.create($.prototype),
    nt.prototype.constructor = nt,
    it.prototype = Object.create($.prototype),
    it.prototype.constructor = it,
    rt.prototype = Object.create($.prototype),
    rt.prototype.constructor = rt,
    st.prototype = Object.create($.prototype),
    st.prototype.constructor = st,
    at.prototype = Object.create($.prototype),
    at.prototype.constructor = at,
    ot.prototype = Object.create($.prototype),
    ot.prototype.constructor = ot,
    ot.prototype.isFloat16BufferAttribute = !0,
    lt.prototype = Object.create($.prototype),
    lt.prototype.constructor = lt,
    ct.prototype = Object.create($.prototype),
    ct.prototype.constructor = ct;
    class ht {
        constructor() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = n,
            g[12] = i,
            g[1] = r,
            g[5] = s,
            g[9] = a,
            g[13] = o,
            g[2] = l,
            g[6] = c,
            g[10] = h,
            g[14] = u,
            g[3] = d,
            g[7] = p,
            g[11] = m,
            g[15] = f,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        clone() {
            return (new ht).fromArray(this.elements)
        }
        copy(t) {
            const e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            e[9] = n[9],
            e[10] = n[10],
            e[11] = n[11],
            e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            e[15] = n[15],
            this
        }
        copyPosition(t) {
            const e = this.elements
              , n = t.elements;
            return e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            this
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
            this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
            this
        }
        extractRotation(t) {
            const e = this.elements
              , n = t.elements
              , i = 1 / ut.setFromMatrixColumn(t, 0).length()
              , r = 1 / ut.setFromMatrixColumn(t, 1).length()
              , s = 1 / ut.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i,
            e[1] = n[1] * i,
            e[2] = n[2] * i,
            e[3] = 0,
            e[4] = n[4] * r,
            e[5] = n[5] * r,
            e[6] = n[6] * r,
            e[7] = 0,
            e[8] = n[8] * s,
            e[9] = n[9] * s,
            e[10] = n[10] * s,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z
              , s = Math.cos(n)
              , a = Math.sin(n)
              , o = Math.cos(i)
              , l = Math.sin(i)
              , c = Math.cos(r)
              , h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c
                  , n = s * h
                  , i = a * c
                  , r = a * h;
                e[0] = o * c,
                e[4] = -o * h,
                e[8] = l,
                e[1] = n + i * l,
                e[5] = t - r * l,
                e[9] = -a * o,
                e[2] = r - t * l,
                e[6] = i + n * l,
                e[10] = s * o
            } else if ("YXZ" === t.order) {
                const t = o * c
                  , n = o * h
                  , i = l * c
                  , r = l * h;
                e[0] = t + r * a,
                e[4] = i * a - n,
                e[8] = s * l,
                e[1] = s * h,
                e[5] = s * c,
                e[9] = -a,
                e[2] = n * a - i,
                e[6] = r + t * a,
                e[10] = s * o
            } else if ("ZXY" === t.order) {
                const t = o * c
                  , n = o * h
                  , i = l * c
                  , r = l * h;
                e[0] = t - r * a,
                e[4] = -s * h,
                e[8] = i + n * a,
                e[1] = n + i * a,
                e[5] = s * c,
                e[9] = r - t * a,
                e[2] = -s * l,
                e[6] = a,
                e[10] = s * o
            } else if ("ZYX" === t.order) {
                const t = s * c
                  , n = s * h
                  , i = a * c
                  , r = a * h;
                e[0] = o * c,
                e[4] = i * l - n,
                e[8] = t * l + r,
                e[1] = o * h,
                e[5] = r * l + t,
                e[9] = n * l - i,
                e[2] = -l,
                e[6] = a * o,
                e[10] = s * o
            } else if ("YZX" === t.order) {
                const t = s * o
                  , n = s * l
                  , i = a * o
                  , r = a * l;
                e[0] = o * c,
                e[4] = r - t * h,
                e[8] = i * h + n,
                e[1] = h,
                e[5] = s * c,
                e[9] = -a * c,
                e[2] = -l * c,
                e[6] = n * h + i,
                e[10] = t - r * h
            } else if ("XZY" === t.order) {
                const t = s * o
                  , n = s * l
                  , i = a * o
                  , r = a * l;
                e[0] = o * c,
                e[4] = -h,
                e[8] = l * c,
                e[1] = t * h + r,
                e[5] = s * c,
                e[9] = n * h - i,
                e[2] = i * h - n,
                e[6] = a * c,
                e[10] = r * h + t
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        makeRotationFromQuaternion(t) {
            return this.compose(pt, t, mt)
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return vt.subVectors(t, e),
            0 === vt.lengthSq() && (vt.z = 1),
            vt.normalize(),
            ft.crossVectors(n, vt),
            0 === ft.lengthSq() && (1 === Math.abs(n.z) ? vt.x += 1e-4 : vt.z += 1e-4,
            vt.normalize(),
            ft.crossVectors(n, vt)),
            ft.normalize(),
            gt.crossVectors(vt, ft),
            i[0] = ft.x,
            i[4] = gt.x,
            i[8] = vt.x,
            i[1] = ft.y,
            i[5] = gt.y,
            i[9] = vt.y,
            i[2] = ft.z,
            i[6] = gt.z,
            i[10] = vt.z,
            this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
              , i = e.elements
              , r = this.elements
              , s = n[0]
              , a = n[4]
              , o = n[8]
              , l = n[12]
              , c = n[1]
              , h = n[5]
              , u = n[9]
              , d = n[13]
              , p = n[2]
              , m = n[6]
              , f = n[10]
              , g = n[14]
              , v = n[3]
              , y = n[7]
              , x = n[11]
              , _ = n[15]
              , b = i[0]
              , w = i[4]
              , M = i[8]
              , S = i[12]
              , E = i[1]
              , T = i[5]
              , A = i[9]
              , L = i[13]
              , R = i[2]
              , P = i[6]
              , C = i[10]
              , D = i[14]
              , N = i[3]
              , I = i[7]
              , O = i[11]
              , z = i[15];
            return r[0] = s * b + a * E + o * R + l * N,
            r[4] = s * w + a * T + o * P + l * I,
            r[8] = s * M + a * A + o * C + l * O,
            r[12] = s * S + a * L + o * D + l * z,
            r[1] = c * b + h * E + u * R + d * N,
            r[5] = c * w + h * T + u * P + d * I,
            r[9] = c * M + h * A + u * C + d * O,
            r[13] = c * S + h * L + u * D + d * z,
            r[2] = p * b + m * E + f * R + g * N,
            r[6] = p * w + m * T + f * P + g * I,
            r[10] = p * M + m * A + f * C + g * O,
            r[14] = p * S + m * L + f * D + g * z,
            r[3] = v * b + y * E + x * R + _ * N,
            r[7] = v * w + y * T + x * P + _ * I,
            r[11] = v * M + y * A + x * C + _ * O,
            r[15] = v * S + y * L + x * D + _ * z,
            this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        }
        determinant() {
            const t = this.elements
              , e = t[0]
              , n = t[4]
              , i = t[8]
              , r = t[12]
              , s = t[1]
              , a = t[5]
              , o = t[9]
              , l = t[13]
              , c = t[2]
              , h = t[6]
              , u = t[10]
              , d = t[14];
            return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1],
            t[1] = t[4],
            t[4] = e,
            e = t[2],
            t[2] = t[8],
            t[8] = e,
            e = t[6],
            t[6] = t[9],
            t[9] = e,
            e = t[3],
            t[3] = t[12],
            t[12] = e,
            e = t[7],
            t[7] = t[13],
            t[13] = e,
            e = t[11],
            t[11] = t[14],
            t[14] = e,
            this
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x,
            i[13] = t.y,
            i[14] = t.z) : (i[12] = t,
            i[13] = e,
            i[14] = n),
            this
        }
        invert() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8]
              , h = t[9]
              , u = t[10]
              , d = t[11]
              , p = t[12]
              , m = t[13]
              , f = t[14]
              , g = t[15]
              , v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g
              , y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g
              , x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g
              , _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f
              , b = e * v + n * y + i * x + r * _;
            if (0 === b)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const w = 1 / b;
            return t[0] = v * w,
            t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * w,
            t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * w,
            t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * w,
            t[4] = y * w,
            t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * w,
            t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * w,
            t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * w,
            t[8] = x * w,
            t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * w,
            t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * w,
            t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * w,
            t[12] = _ * w,
            t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * w,
            t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * w,
            t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * w,
            this
        }
        scale(t) {
            const e = this.elements
              , n = t.x
              , i = t.y
              , r = t.z;
            return e[0] *= n,
            e[4] *= i,
            e[8] *= r,
            e[1] *= n,
            e[5] *= i,
            e[9] *= r,
            e[2] *= n,
            e[6] *= i,
            e[10] *= r,
            e[3] *= n,
            e[7] *= i,
            e[11] *= r,
            this
        }
        getMaxScaleOnAxis() {
            const t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
            this
        }
        makeRotationX(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
            this
        }
        makeRotationY(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
            this
        }
        makeRotationZ(t) {
            const e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e)
              , i = Math.sin(e)
              , r = 1 - n
              , s = t.x
              , a = t.y
              , o = t.z
              , l = r * s
              , c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1),
            this
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
        }
        makeShear(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
            this
        }
        compose(t, e, n) {
            const i = this.elements
              , r = e._x
              , s = e._y
              , a = e._z
              , o = e._w
              , l = r + r
              , c = s + s
              , h = a + a
              , u = r * l
              , d = r * c
              , p = r * h
              , m = s * c
              , f = s * h
              , g = a * h
              , v = o * l
              , y = o * c
              , x = o * h
              , _ = n.x
              , b = n.y
              , w = n.z;
            return i[0] = (1 - (m + g)) * _,
            i[1] = (d + x) * _,
            i[2] = (p - y) * _,
            i[3] = 0,
            i[4] = (d - x) * b,
            i[5] = (1 - (u + g)) * b,
            i[6] = (f + v) * b,
            i[7] = 0,
            i[8] = (p + y) * w,
            i[9] = (f - v) * w,
            i[10] = (1 - (u + m)) * w,
            i[11] = 0,
            i[12] = t.x,
            i[13] = t.y,
            i[14] = t.z,
            i[15] = 1,
            this
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = ut.set(i[0], i[1], i[2]).length();
            const s = ut.set(i[4], i[5], i[6]).length()
              , a = ut.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r),
            t.x = i[12],
            t.y = i[13],
            t.z = i[14],
            dt.copy(this);
            const o = 1 / r
              , l = 1 / s
              , c = 1 / a;
            return dt.elements[0] *= o,
            dt.elements[1] *= o,
            dt.elements[2] *= o,
            dt.elements[4] *= l,
            dt.elements[5] *= l,
            dt.elements[6] *= l,
            dt.elements[8] *= c,
            dt.elements[9] *= c,
            dt.elements[10] *= c,
            e.setFromRotationMatrix(dt),
            n.x = r,
            n.y = s,
            n.z = a,
            this
        }
        makePerspective(t, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements
              , o = 2 * r / (e - t)
              , l = 2 * r / (n - i)
              , c = (e + t) / (e - t)
              , h = (n + i) / (n - i)
              , u = -(s + r) / (s - r)
              , d = -2 * s * r / (s - r);
            return a[0] = o,
            a[4] = 0,
            a[8] = c,
            a[12] = 0,
            a[1] = 0,
            a[5] = l,
            a[9] = h,
            a[13] = 0,
            a[2] = 0,
            a[6] = 0,
            a[10] = u,
            a[14] = d,
            a[3] = 0,
            a[7] = 0,
            a[11] = -1,
            a[15] = 0,
            this
        }
        makeOrthographic(t, e, n, i, r, s) {
            const a = this.elements
              , o = 1 / (e - t)
              , l = 1 / (n - i)
              , c = 1 / (s - r)
              , h = (e + t) * o
              , u = (n + i) * l
              , d = (s + r) * c;
            return a[0] = 2 * o,
            a[4] = 0,
            a[8] = 0,
            a[12] = -h,
            a[1] = 0,
            a[5] = 2 * l,
            a[9] = 0,
            a[13] = -u,
            a[2] = 0,
            a[6] = 0,
            a[10] = -2 * c,
            a[14] = -d,
            a[3] = 0,
            a[7] = 0,
            a[11] = 0,
            a[15] = 1,
            this
        }
        equals(t) {
            const e = this.elements
              , n = t.elements;
            for (let t = 0; t < 16; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e=0) {
            for (let n = 0; n < 16; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t=[], e=0) {
            const n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t[e + 9] = n[9],
            t[e + 10] = n[10],
            t[e + 11] = n[11],
            t[e + 12] = n[12],
            t[e + 13] = n[13],
            t[e + 14] = n[14],
            t[e + 15] = n[15],
            t
        }
    }
    ht.prototype.isMatrix4 = !0;
    const ut = new G
      , dt = new ht
      , pt = new G(0,0,0)
      , mt = new G(1,1,1)
      , ft = new G
      , gt = new G
      , vt = new G;
    function yt() {}
    Object.assign(yt.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        },
        dispatchEvent: function(t) {
            if (void 0 === this._listeners)
                return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for (let e = 0, i = n.length; e < i; e++)
                    n[e].call(this, t)
            }
        }
    });
    const xt = new ht
      , _t = new B;
    class bt {
        constructor(t=0, e=0, n=0, i=bt.DefaultOrder) {
            this._x = t,
            this._y = e,
            this._z = n,
            this._order = i
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
            this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(t) {
            this._order = t,
            this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._order = i || this._order,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        }
        copy(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(t, e, n) {
            const i = F.clamp
              , r = t.elements
              , s = r[0]
              , a = r[4]
              , o = r[8]
              , l = r[1]
              , c = r[5]
              , h = r[9]
              , u = r[2]
              , d = r[6]
              , p = r[10];
            switch (e = e || this._order) {
            case "XYZ":
                this._y = Math.asin(i(o, -1, 1)),
                Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, p),
                this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c),
                this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-i(h, -1, 1)),
                Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, p),
                this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s),
                this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(i(d, -1, 1)),
                Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p),
                this._z = Math.atan2(-a, c)) : (this._y = 0,
                this._z = Math.atan2(l, s));
                break;
            case "ZYX":
                this._y = Math.asin(-i(u, -1, 1)),
                Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p),
                this._z = Math.atan2(l, s)) : (this._x = 0,
                this._z = Math.atan2(-a, c));
                break;
            case "YZX":
                this._z = Math.asin(i(l, -1, 1)),
                Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c),
                this._y = Math.atan2(-u, s)) : (this._x = 0,
                this._y = Math.atan2(o, p));
                break;
            case "XZY":
                this._z = Math.asin(-i(a, -1, 1)),
                Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c),
                this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p),
                this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
            }
            return this._order = e,
            !1 !== n && this._onChangeCallback(),
            this
        }
        setFromQuaternion(t, e, n) {
            return xt.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(xt, e, n)
        }
        setFromVector3(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        }
        reorder(t) {
            return _t.setFromEuler(this),
            this.setFromQuaternion(_t, t)
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }
        fromArray(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
        }
        toArray(t=[], e=0) {
            return t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        }
        toVector3(t) {
            return t ? t.set(this._x, this._y, this._z) : new G(this._x,this._y,this._z)
        }
        _onChange(t) {
            return this._onChangeCallback = t,
            this
        }
        _onChangeCallback() {}
    }
    bt.prototype.isEuler = !0,
    bt.DefaultOrder = "XYZ",
    bt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    class wt {
        constructor() {
            this.mask = 1
        }
        set(t) {
            this.mask = 1 << t | 0
        }
        enable(t) {
            this.mask |= 1 << t | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(t) {
            this.mask ^= 1 << t | 0
        }
        disable(t) {
            this.mask &= ~(1 << t | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(t) {
            return 0 != (this.mask & t.mask)
        }
    }
    class Mt {
        constructor() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t,
            c[1] = i,
            c[2] = a,
            c[3] = e,
            c[4] = r,
            c[5] = o,
            c[6] = n,
            c[7] = s,
            c[8] = l,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        }
        copy(t) {
            const e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        }
        multiply(t) {
            return this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
              , i = e.elements
              , r = this.elements
              , s = n[0]
              , a = n[3]
              , o = n[6]
              , l = n[1]
              , c = n[4]
              , h = n[7]
              , u = n[2]
              , d = n[5]
              , p = n[8]
              , m = i[0]
              , f = i[3]
              , g = i[6]
              , v = i[1]
              , y = i[4]
              , x = i[7]
              , _ = i[2]
              , b = i[5]
              , w = i[8];
            return r[0] = s * m + a * v + o * _,
            r[3] = s * f + a * y + o * b,
            r[6] = s * g + a * x + o * w,
            r[1] = l * m + c * v + h * _,
            r[4] = l * f + c * y + h * b,
            r[7] = l * g + c * x + h * w,
            r[2] = u * m + d * v + p * _,
            r[5] = u * f + d * y + p * b,
            r[8] = u * g + d * x + p * w,
            this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        }
        determinant() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
        }
        invert() {
            const t = this.elements
              , e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , s = t[4]
              , a = t[5]
              , o = t[6]
              , l = t[7]
              , c = t[8]
              , h = c * s - a * l
              , u = a * o - c * r
              , d = l * r - s * o
              , p = e * h + n * u + i * d;
            if (0 === p)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m,
            t[1] = (i * l - c * n) * m,
            t[2] = (a * n - i * s) * m,
            t[3] = u * m,
            t[4] = (c * e - i * o) * m,
            t[5] = (i * r - a * e) * m,
            t[6] = d * m,
            t[7] = (n * o - l * e) * m,
            t[8] = (s * e - n * r) * m,
            this
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose()
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r)
              , l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1),
            this
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t,
            n[3] *= t,
            n[6] *= t,
            n[1] *= e,
            n[4] *= e,
            n[7] *= e,
            this
        }
        rotate(t) {
            const e = Math.cos(t)
              , n = Math.sin(t)
              , i = this.elements
              , r = i[0]
              , s = i[3]
              , a = i[6]
              , o = i[1]
              , l = i[4]
              , c = i[7];
            return i[0] = e * r + n * o,
            i[3] = e * s + n * l,
            i[6] = e * a + n * c,
            i[1] = -n * r + e * o,
            i[4] = -n * s + e * l,
            i[7] = -n * a + e * c,
            this
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2],
            n[3] += t * n[5],
            n[6] += t * n[8],
            n[1] += e * n[2],
            n[4] += e * n[5],
            n[7] += e * n[8],
            this
        }
        equals(t) {
            const e = this.elements
              , n = t.elements;
            for (let t = 0; t < 9; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e=0) {
            for (let n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t=[], e=0) {
            const n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t
        }
        clone() {
            return (new this.constructor).fromArray(this.elements)
        }
    }
    Mt.prototype.isMatrix3 = !0;
    let St = 0;
    const Et = new G
      , Tt = new B
      , At = new ht
      , Lt = new G
      , Rt = new G
      , Pt = new G
      , Ct = new B
      , Dt = new G(1,0,0)
      , Nt = new G(0,1,0)
      , It = new G(0,0,1)
      , Ot = {
        type: "added"
    }
      , zt = {
        type: "removed"
    };
    function Ut() {
        Object.defineProperty(this, "id", {
            value: St++
        }),
        this.uuid = F.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = Ut.DefaultUp.clone();
        const t = new G
          , e = new bt
          , n = new B
          , i = new G(1,1,1);
        e._onChange((function() {
            n.setFromEuler(e, !1)
        }
        )),
        n._onChange((function() {
            e.setFromQuaternion(n, void 0, !1)
        }
        )),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new ht
            },
            normalMatrix: {
                value: new Mt
            }
        }),
        this.matrix = new ht,
        this.matrixWorld = new ht,
        this.matrixAutoUpdate = Ut.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new wt,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    Ut.DefaultUp = new G(0,1,0),
    Ut.DefaultMatrixAutoUpdate = !0,
    Ut.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: Ut,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix4: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t),
            this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function(t, e) {
            return Tt.setFromAxisAngle(t, e),
            this.quaternion.multiply(Tt),
            this
        },
        rotateOnWorldAxis: function(t, e) {
            return Tt.setFromAxisAngle(t, e),
            this.quaternion.premultiply(Tt),
            this
        },
        rotateX: function(t) {
            return this.rotateOnAxis(Dt, t)
        },
        rotateY: function(t) {
            return this.rotateOnAxis(Nt, t)
        },
        rotateZ: function(t) {
            return this.rotateOnAxis(It, t)
        },
        translateOnAxis: function(t, e) {
            return Et.copy(t).applyQuaternion(this.quaternion),
            this.position.add(Et.multiplyScalar(e)),
            this
        },
        translateX: function(t) {
            return this.translateOnAxis(Dt, t)
        },
        translateY: function(t) {
            return this.translateOnAxis(Nt, t)
        },
        translateZ: function(t) {
            return this.translateOnAxis(It, t)
        },
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function(t) {
            return t.applyMatrix4(At.copy(this.matrixWorld).invert())
        },
        lookAt: function(t, e, n) {
            t.isVector3 ? Lt.copy(t) : Lt.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1),
            Rt.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight ? At.lookAt(Rt, Lt, this.up) : At.lookAt(Lt, Rt, this.up),
            this.quaternion.setFromRotationMatrix(At),
            i && (At.extractRotation(i.matrixWorld),
            Tt.setFromRotationMatrix(At),
            this.quaternion.premultiply(Tt.invert()))
        },
        add: function(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.add(arguments[t]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
            this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            this.children.push(t),
            t.dispatchEvent(Ot)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this)
        },
        remove: function(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.remove(arguments[t]);
                return this
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null,
            this.children.splice(e, 1),
            t.dispatchEvent(zt)),
            this
        },
        clear: function() {
            for (let t = 0; t < this.children.length; t++) {
                const e = this.children[t];
                e.parent = null,
                e.dispatchEvent(zt)
            }
            return this.children.length = 0,
            this
        },
        attach: function(t) {
            return this.updateWorldMatrix(!0, !1),
            At.copy(this.matrixWorld).invert(),
            null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
            At.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(At),
            this.add(t),
            t.updateWorldMatrix(!1, !0),
            this
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i)
                    return i
            }
        },
        getWorldPosition: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
            t = new G),
            this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
            t = new B),
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Rt, t, Pt),
            t
        },
        getWorldScale: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
            t = new G),
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Rt, Ct, t),
            t
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
            t = new G),
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function() {},
        traverse: function(t) {
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 === this.visible)
                return;
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverseVisible(t)
        },
        traverseAncestors: function(t) {
            const e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            t = !0);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].updateMatrixWorld(t)
        },
        updateWorldMatrix: function(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === e) {
                const t = this.children;
                for (let e = 0, n = t.length; e < n; e++)
                    t[e].updateWorldMatrix(!1, !0)
            }
        },
        toJSON: function(t) {
            const e = void 0 === t || "string" == typeof t
              , n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {}
            },
            n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
                n.uuid
            }
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
            i.layers = this.layers.mask,
            i.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh && (i.type = "InstancedMesh",
            i.count = this.count,
            i.instanceMatrix = this.instanceMatrix.toJSON()),
            this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n))
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            r(t.shapes, i)
                        }
                    else
                        r(t.shapes, n)
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
            i.bindMatrix = this.bindMatrix.toArray(),
            void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
            i.skeleton = this.skeleton.uuid)),
            void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    const e = [];
                    for (let n = 0, i = this.material.length; n < i; n++)
                        e.push(r(t.materials, this.material[n]));
                    i.material = e
                } else
                    i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (let e = 0; e < this.children.length; e++)
                    i.children.push(this.children[e].toJSON(t).object)
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for (let e = 0; e < this.animations.length; e++) {
                    const n = this.animations[e];
                    i.animations.push(r(t.animations, n))
                }
            }
            if (e) {
                const e = s(t.geometries)
                  , i = s(t.materials)
                  , r = s(t.textures)
                  , a = s(t.images)
                  , o = s(t.shapes)
                  , l = s(t.skeletons)
                  , c = s(t.animations);
                e.length > 0 && (n.geometries = e),
                i.length > 0 && (n.materials = i),
                r.length > 0 && (n.textures = r),
                a.length > 0 && (n.images = a),
                o.length > 0 && (n.shapes = o),
                l.length > 0 && (n.skeletons = l),
                c.length > 0 && (n.animations = c)
            }
            return n.object = i,
            n;
            function s(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e=!0) {
            if (this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.rotation.order = t.rotation.order,
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.layers.mask = t.layers.mask,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            !0 === e)
                for (let e = 0; e < t.children.length; e++) {
                    const n = t.children[e];
                    this.add(n.clone())
                }
            return this
        }
    });
    class Ft extends Ut {
        constructor() {
            super(),
            this.type = "Group"
        }
    }
    Ft.prototype.isGroup = !0;
    class Bt {
        constructor(t=new G(1 / 0,1 / 0,1 / 0), e=new G(-1 / 0,-1 / 0,-1 / 0)) {
            this.min = t,
            this.max = e
        }
        set(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        }
        setFromArray(t) {
            let e = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , s = -1 / 0
              , a = -1 / 0;
            for (let o = 0, l = t.length; o < l; o += 3) {
                const l = t[o]
                  , c = t[o + 1]
                  , h = t[o + 2];
                l < e && (e = l),
                c < n && (n = c),
                h < i && (i = h),
                l > r && (r = l),
                c > s && (s = c),
                h > a && (a = h)
            }
            return this.min.set(e, n, i),
            this.max.set(r, s, a),
            this
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , s = -1 / 0
              , a = -1 / 0;
            for (let o = 0, l = t.count; o < l; o++) {
                const l = t.getX(o)
                  , c = t.getY(o)
                  , h = t.getZ(o);
                l < e && (e = l),
                c < n && (n = c),
                h < i && (i = h),
                l > r && (r = l),
                c > s && (s = c),
                h > a && (a = h)
            }
            return this.min.set(e, n, i),
            this.max.set(r, s, a),
            this
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        }
        setFromCenterAndSize(t, e) {
            const n = kt.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
            this.max.copy(t).add(n),
            this
        }
        setFromObject(t) {
            return this.makeEmpty(),
            this.expandByObject(t)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
            t = new G),
            this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
            t = new G),
            this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        }
        expandByVector(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        }
        expandByScalar(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        }
        expandByObject(t) {
            t.updateWorldMatrix(!1, !1);
            const e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
            Ht.copy(e.boundingBox),
            Ht.applyMatrix4(t.matrixWorld),
            this.union(Ht));
            const n = t.children;
            for (let t = 0, e = n.length; t < e; t++)
                this.expandByObject(n[t]);
            return this
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }
        getParameter(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
            e = new G),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, kt),
            kt.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
            n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            n = t.normal.x * this.min.x),
            t.normal.y > 0 ? (e += t.normal.y * this.min.y,
            n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            n += t.normal.y * this.min.y),
            t.normal.z > 0 ? (e += t.normal.z * this.min.z,
            n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            n += t.normal.z * this.min.z),
            e <= -t.constant && n >= -t.constant
        }
        intersectsTriangle(t) {
            if (this.isEmpty())
                return !1;
            this.getCenter(Zt),
            Jt.subVectors(this.max, Zt),
            Vt.subVectors(t.a, Zt),
            Wt.subVectors(t.b, Zt),
            jt.subVectors(t.c, Zt),
            Xt.subVectors(Wt, Vt),
            qt.subVectors(jt, Wt),
            Yt.subVectors(Vt, jt);
            let e = [0, -Xt.z, Xt.y, 0, -qt.z, qt.y, 0, -Yt.z, Yt.y, Xt.z, 0, -Xt.x, qt.z, 0, -qt.x, Yt.z, 0, -Yt.x, -Xt.y, Xt.x, 0, -qt.y, qt.x, 0, -Yt.y, Yt.x, 0];
            return !!$t(e, Vt, Wt, jt, Jt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            !!$t(e, Vt, Wt, jt, Jt) && (Kt.crossVectors(Xt, qt),
            e = [Kt.x, Kt.y, Kt.z],
            $t(e, Vt, Wt, jt, Jt)))
        }
        clampPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
            e = new G),
            e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
            return kt.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        getBoundingSphere(t) {
            return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
            this.getCenter(t.center),
            t.radius = .5 * this.getSize(kt).length(),
            t
        }
        intersect(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        }
        union(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        }
        applyMatrix4(t) {
            return this.isEmpty() || (Gt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            Gt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            Gt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            Gt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            Gt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            Gt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            Gt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            Gt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(Gt)),
            this
        }
        translate(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }
    Bt.prototype.isBox3 = !0;
    const Gt = [new G, new G, new G, new G, new G, new G, new G, new G]
      , kt = new G
      , Ht = new Bt
      , Vt = new G
      , Wt = new G
      , jt = new G
      , Xt = new G
      , qt = new G
      , Yt = new G
      , Zt = new G
      , Jt = new G
      , Kt = new G
      , Qt = new G;
    function $t(t, e, n, i, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
            Qt.fromArray(t, s);
            const a = r.x * Math.abs(Qt.x) + r.y * Math.abs(Qt.y) + r.z * Math.abs(Qt.z)
              , o = e.dot(Qt)
              , l = n.dot(Qt)
              , c = i.dot(Qt);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a)
                return !1
        }
        return !0
    }
    const te = new Bt;
    class ee {
        constructor(t=new G, e=-1) {
            this.center = t,
            this.radius = e
        }
        set(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : te.setFromPoints(t).getCenter(n);
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++)
                i = Math.max(i, n.distanceToSquared(t[e]));
            return this.radius = Math.sqrt(i),
            this
        }
        copy(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0),
            this.radius = -1,
            this
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        }
        intersectsBox(t) {
            return t.intersectsSphere(this)
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            e = new G),
            e.copy(t),
            n > this.radius * this.radius && (e.sub(this.center).normalize(),
            e.multiplyScalar(this.radius).add(this.center)),
            e
        }
        getBoundingBox(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
            t = new Bt),
            this.isEmpty() ? (t.makeEmpty(),
            t) : (t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t)
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        }
        translate(t) {
            return this.center.add(t),
            this
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const ne = new G
      , ie = new G
      , re = new G
      , se = new G
      , ae = new G
      , oe = new G
      , le = new G;
    class ce {
        constructor(t=new G, e=new G(0,0,-1)) {
            this.origin = t,
            this.direction = e
        }
        set(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        }
        copy(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        }
        at(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
            e = new G),
            e.copy(this.direction).multiplyScalar(t).add(this.origin)
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        }
        recast(t) {
            return this.origin.copy(this.at(t, ne)),
            this
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
            e = new G),
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        }
        distanceSqToPoint(t) {
            const e = ne.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (ne.copy(this.direction).multiplyScalar(e).add(this.origin),
            ne.distanceToSquared(t))
        }
        distanceSqToSegment(t, e, n, i) {
            ie.copy(t).add(e).multiplyScalar(.5),
            re.copy(e).sub(t).normalize(),
            se.copy(this.origin).sub(ie);
            const r = .5 * t.distanceTo(e)
              , s = -this.direction.dot(re)
              , a = se.dot(this.direction)
              , o = -se.dot(re)
              , l = se.lengthSq()
              , c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0)
                if (h = s * o - a,
                u = s * a - o,
                p = r * c,
                h >= 0)
                    if (u >= -p)
                        if (u <= p) {
                            const t = 1 / c;
                            h *= t,
                            u *= t,
                            d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
                        } else
                            u = r,
                            h = Math.max(0, -(s * u + a)),
                            d = -h * h + u * (u + 2 * o) + l;
                    else
                        u = -r,
                        h = Math.max(0, -(s * u + a)),
                        d = -h * h + u * (u + 2 * o) + l;
                else
                    u <= -p ? (h = Math.max(0, -(-s * r + a)),
                    u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
                    d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0,
                    u = Math.min(Math.max(-r, -o), r),
                    d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)),
                    u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
                    d = -h * h + u * (u + 2 * o) + l);
            else
                u = s > 0 ? -r : r,
                h = Math.max(0, -(s * u + a)),
                d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
            i && i.copy(re).multiplyScalar(u).add(ie),
            d
        }
        intersectSphere(t, e) {
            ne.subVectors(t.center, this.origin);
            const n = ne.dot(this.direction)
              , i = ne.dot(ne) - n * n
              , r = t.radius * t.radius;
            if (i > r)
                return null;
            const s = Math.sqrt(r - i)
              , a = n - s
              , o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e)
                return !0;
            return t.normal.dot(this.direction) * e < 0
        }
        intersectBox(t, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x
              , c = 1 / this.direction.y
              , h = 1 / this.direction.z
              , u = this.origin;
            return l >= 0 ? (n = (t.min.x - u.x) * l,
            i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l,
            i = (t.min.x - u.x) * l),
            c >= 0 ? (r = (t.min.y - u.y) * c,
            s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c,
            s = (t.min.y - u.y) * c),
            n > s || r > i ? null : ((r > n || n != n) && (n = r),
            (s < i || i != i) && (i = s),
            h >= 0 ? (a = (t.min.z - u.z) * h,
            o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h,
            o = (t.min.z - u.z) * h),
            n > o || a > i ? null : ((a > n || n != n) && (n = a),
            (o < i || i != i) && (i = o),
            i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, ne)
        }
        intersectTriangle(t, e, n, i, r) {
            ae.subVectors(e, t),
            oe.subVectors(n, t),
            le.crossVectors(ae, oe);
            let s, a = this.direction.dot(le);
            if (a > 0) {
                if (i)
                    return null;
                s = 1
            } else {
                if (!(a < 0))
                    return null;
                s = -1,
                a = -a
            }
            se.subVectors(this.origin, t);
            const o = s * this.direction.dot(oe.crossVectors(se, oe));
            if (o < 0)
                return null;
            const l = s * this.direction.dot(ae.cross(se));
            if (l < 0)
                return null;
            if (o + l > a)
                return null;
            const c = -s * se.dot(le);
            return c < 0 ? null : this.at(c / a, r)
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const he = new G
      , ue = new G
      , de = new Mt;
    class pe {
        constructor(t=new G(1,0,0), e=0) {
            this.normal = t,
            this.constant = e
        }
        set(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n),
            this.constant = i,
            this
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        }
        setFromCoplanarPoints(t, e, n) {
            const i = he.subVectors(n, e).cross(ue.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t),
            this
        }
        copy(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        }
        negate() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius
        }
        projectPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
            e = new G),
            e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        }
        intersectLine(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
            e = new G);
            const n = t.delta(he)
              , i = this.normal.dot(n);
            if (0 === i)
                return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start)
              , n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        }
        intersectsBox(t) {
            return t.intersectsPlane(this)
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this)
        }
        coplanarPoint(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
            t = new G),
            t.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(t, e) {
            const n = e || de.getNormalMatrix(t)
              , i = this.coplanarPoint(he).applyMatrix4(t)
              , r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r),
            this
        }
        translate(t) {
            return this.constant -= t.dot(this.normal),
            this
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    pe.prototype.isPlane = !0;
    const me = new G
      , fe = new G
      , ge = new G
      , ve = new G
      , ye = new G
      , xe = new G
      , _e = new G
      , be = new G
      , we = new G
      , Me = new G;
    class Se {
        constructor(t=new G, e=new G, n=new G) {
            this.a = t,
            this.b = e,
            this.c = n
        }
        static getNormal(t, e, n, i) {
            void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
            i = new G),
            i.subVectors(n, e),
            me.subVectors(t, e),
            i.cross(me);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        static getBarycoord(t, e, n, i, r) {
            me.subVectors(i, e),
            fe.subVectors(n, e),
            ge.subVectors(t, e);
            const s = me.dot(me)
              , a = me.dot(fe)
              , o = me.dot(ge)
              , l = fe.dot(fe)
              , c = fe.dot(ge)
              , h = s * l - a * a;
            if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
            r = new G),
            0 === h)
                return r.set(-2, -1, -1);
            const u = 1 / h
              , d = (l * o - a * c) * u
              , p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d)
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, ve),
            ve.x >= 0 && ve.y >= 0 && ve.x + ve.y <= 1
        }
        static getUV(t, e, n, i, r, s, a, o) {
            return this.getBarycoord(t, e, n, i, ve),
            o.set(0, 0),
            o.addScaledVector(r, ve.x),
            o.addScaledVector(s, ve.y),
            o.addScaledVector(a, ve.z),
            o
        }
        static isFrontFacing(t, e, n, i) {
            return me.subVectors(n, e),
            fe.subVectors(t, e),
            me.cross(fe).dot(i) < 0
        }
        set(t, e, n) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(n),
            this
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]),
            this.b.copy(t[n]),
            this.c.copy(t[i]),
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        }
        getArea() {
            return me.subVectors(this.c, this.b),
            fe.subVectors(this.a, this.b),
            .5 * me.cross(fe).length()
        }
        getMidpoint(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
            t = new G),
            t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(t) {
            return Se.getNormal(this.a, this.b, this.c, t)
        }
        getPlane(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
            t = new pe),
            t.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(t, e) {
            return Se.getBarycoord(t, this.a, this.b, this.c, e)
        }
        getUV(t, e, n, i, r) {
            return Se.getUV(t, this.a, this.b, this.c, e, n, i, r)
        }
        containsPoint(t) {
            return Se.containsPoint(t, this.a, this.b, this.c)
        }
        isFrontFacing(t) {
            return Se.isFrontFacing(this.a, this.b, this.c, t)
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this)
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
            e = new G);
            const n = this.a
              , i = this.b
              , r = this.c;
            let s, a;
            ye.subVectors(i, n),
            xe.subVectors(r, n),
            be.subVectors(t, n);
            const o = ye.dot(be)
              , l = xe.dot(be);
            if (o <= 0 && l <= 0)
                return e.copy(n);
            we.subVectors(t, i);
            const c = ye.dot(we)
              , h = xe.dot(we);
            if (c >= 0 && h <= c)
                return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0)
                return s = o / (o - c),
                e.copy(n).addScaledVector(ye, s);
            Me.subVectors(t, r);
            const d = ye.dot(Me)
              , p = xe.dot(Me);
            if (p >= 0 && d <= p)
                return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0)
                return a = l / (l - p),
                e.copy(n).addScaledVector(xe, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0)
                return _e.subVectors(r, i),
                a = (h - c) / (h - c + (d - p)),
                e.copy(i).addScaledVector(_e, a);
            const g = 1 / (f + m + u);
            return s = m * g,
            a = u * g,
            e.copy(n).addScaledVector(ye, s).addScaledVector(xe, a)
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }
    let Ee = 0;
    function Te() {
        Object.defineProperty(this, "id", {
            value: Ee++
        }),
        this.uuid = F.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.blending = 1,
        this.side = 0,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = 204,
        this.blendDst = 205,
        this.blendEquation = a,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = 3,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = 519,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = N,
        this.stencilZFail = N,
        this.stencilZPass = N,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0
    }
    Te.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: Te,
        isMaterial: !0,
        onBeforeCompile: function() {},
        customProgramCacheKey: function() {
            return this.onBeforeCompile.toString()
        },
        setValues: function(t) {
            if (void 0 !== t)
                for (const e in t) {
                    const n = t[e];
                    if (void 0 === n) {
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                        continue
                    }
                    if ("shading" === e) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                        this.flatShading = 1 === n;
                        continue
                    }
                    const i = this[e];
                    void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                }
        },
        toJSON: function(t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
            n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
            n.lightMapIntensity = this.lightMapIntensity),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            n.reflectivity = this.reflectivity,
            n.refractionRatio = this.refractionRatio,
            void 0 !== this.combine && (n.combine = this.combine),
            void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (n.blending = this.blending),
            0 !== this.side && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            n.stencilWrite = this.stencilWrite,
            n.stencilWriteMask = this.stencilWriteMask,
            n.stencilFunc = this.stencilFunc,
            n.stencilRef = this.stencilRef,
            n.stencilFuncMask = this.stencilFuncMask,
            n.stencilFail = this.stencilFail,
            n.stencilZFail = this.stencilZFail,
            n.stencilZPass = this.stencilZPass,
            this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.morphTargets && (n.morphTargets = !0),
            !0 === this.morphNormals && (n.morphNormals = !0),
            !0 === this.skinning && (n.skinning = !0),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            !1 === this.visible && (n.visible = !1),
            !1 === this.toneMapped && (n.toneMapped = !1),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            e) {
                const e = i(t.textures)
                  , r = i(t.images);
                e.length > 0 && (n.textures = e),
                r.length > 0 && (n.images = r)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.blending = t.blending,
            this.side = t.side,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.stencilWriteMask = t.stencilWriteMask,
            this.stencilFunc = t.stencilFunc,
            this.stencilRef = t.stencilRef,
            this.stencilFuncMask = t.stencilFuncMask,
            this.stencilFail = t.stencilFail,
            this.stencilZFail = t.stencilZFail,
            this.stencilZPass = t.stencilZPass,
            this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for (let i = 0; i !== t; ++i)
                    n[i] = e[i].clone()
            }
            return this.clippingPlanes = n,
            this.clipIntersection = t.clipIntersection,
            this.clipShadows = t.clipShadows,
            this.shadowSide = t.shadowSide,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.dithering = t.dithering,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.visible = t.visible,
            this.toneMapped = t.toneMapped,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.defineProperty(Te.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    });
    class Ae extends Te {
        constructor(t) {
            super(),
            this.type = "MeshBasicMaterial",
            this.color = new J(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this
        }
    }
    function Le(t) {
        if (0 === t.length)
            return -1 / 0;
        let e = t[0];
        for (let n = 1, i = t.length; n < i; ++n)
            t[n] > e && (e = t[n]);
        return e
    }
    Ae.prototype.isMeshBasicMaterial = !0;
    const Re = {
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
    };
    function Pe(t, e) {
        return new Re[t](e)
    }
    let Ce = 0;
    const De = new ht
      , Ne = new Ut
      , Ie = new G
      , Oe = new Bt
      , ze = new Bt
      , Ue = new G;
    function Fe() {
        Object.defineProperty(this, "id", {
            value: Ce++
        }),
        this.uuid = F.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    Fe.prototype = Object.assign(Object.create(yt.prototype), {
        constructor: Fe,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            return Array.isArray(t) ? this.index = new (Le(t) > 65535 ? at : rt)(t,1) : this.index = t,
            this
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        setAttribute: function(t, e) {
            return this.attributes[t] = e,
            this
        },
        deleteAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        hasAttribute: function(t) {
            return void 0 !== this.attributes[t]
        },
        addGroup: function(t, e, n=0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix4: function(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t),
            e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new Mt).getNormalMatrix(t);
                n.applyNormalMatrix(e),
                n.needsUpdate = !0
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t),
            i.needsUpdate = !0),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: function(t) {
            return De.makeRotationX(t),
            this.applyMatrix4(De),
            this
        },
        rotateY: function(t) {
            return De.makeRotationY(t),
            this.applyMatrix4(De),
            this
        },
        rotateZ: function(t) {
            return De.makeRotationZ(t),
            this.applyMatrix4(De),
            this
        },
        translate: function(t, e, n) {
            return De.makeTranslation(t, e, n),
            this.applyMatrix4(De),
            this
        },
        scale: function(t, e, n) {
            return De.makeScale(t, e, n),
            this.applyMatrix4(De),
            this
        },
        lookAt: function(t) {
            return Ne.lookAt(t),
            Ne.updateMatrix(),
            this.applyMatrix4(Ne.matrix),
            this
        },
        center: function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(Ie).negate(),
            this.translate(Ie.x, Ie.y, Ie.z),
            this
        },
        setFromPoints: function(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.push(i.x, i.y, i.z || 0)
            }
            return this.setAttribute("position", new lt(e,3)),
            this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new Bt);
            const t = this.attributes.position
              , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingBox.set(new G(-1 / 0,-1 / 0,-1 / 0), new G(1 / 0,1 / 0,1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t),
                e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        Oe.setFromBufferAttribute(n),
                        this.morphTargetsRelative ? (Ue.addVectors(this.boundingBox.min, Oe.min),
                        this.boundingBox.expandByPoint(Ue),
                        Ue.addVectors(this.boundingBox.max, Oe.max),
                        this.boundingBox.expandByPoint(Ue)) : (this.boundingBox.expandByPoint(Oe.min),
                        this.boundingBox.expandByPoint(Oe.max))
                    }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new ee);
            const t = this.attributes.position
              , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingSphere.set(new G, 1 / 0);
            if (t) {
                const n = this.boundingSphere.center;
                if (Oe.setFromBufferAttribute(t),
                e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        ze.setFromBufferAttribute(n),
                        this.morphTargetsRelative ? (Ue.addVectors(Oe.min, ze.min),
                        Oe.expandByPoint(Ue),
                        Ue.addVectors(Oe.max, ze.max),
                        Oe.expandByPoint(Ue)) : (Oe.expandByPoint(ze.min),
                        Oe.expandByPoint(ze.max))
                    }
                Oe.getCenter(n);
                let i = 0;
                for (let e = 0, r = t.count; e < r; e++)
                    Ue.fromBufferAttribute(t, e),
                    i = Math.max(i, n.distanceToSquared(Ue));
                if (e)
                    for (let r = 0, s = e.length; r < s; r++) {
                        const s = e[r]
                          , a = this.morphTargetsRelative;
                        for (let e = 0, r = s.count; e < r; e++)
                            Ue.fromBufferAttribute(s, e),
                            a && (Ie.fromBufferAttribute(t, e),
                            Ue.add(Ie)),
                            i = Math.max(i, n.distanceToSquared(Ue))
                    }
                this.boundingSphere.radius = Math.sqrt(i),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        },
        computeFaceNormals: function() {},
        computeTangents: function() {
            const t = this.index
              , e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
                return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array
              , i = e.position.array
              , r = e.normal.array
              , s = e.uv.array
              , a = i.length / 3;
            void 0 === e.tangent && this.setAttribute("tangent", new $(new Float32Array(4 * a),4));
            const o = e.tangent.array
              , l = []
              , c = [];
            for (let t = 0; t < a; t++)
                l[t] = new G,
                c[t] = new G;
            const h = new G
              , u = new G
              , d = new G
              , p = new V
              , m = new V
              , f = new V
              , g = new G
              , v = new G;
            function y(t, e, n) {
                h.fromArray(i, 3 * t),
                u.fromArray(i, 3 * e),
                d.fromArray(i, 3 * n),
                p.fromArray(s, 2 * t),
                m.fromArray(s, 2 * e),
                f.fromArray(s, 2 * n),
                u.sub(h),
                d.sub(h),
                m.sub(p),
                f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r),
                v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r),
                l[t].add(g),
                l[e].add(g),
                l[n].add(g),
                c[t].add(v),
                c[e].add(v),
                c[n].add(v))
            }
            let x = this.groups;
            0 === x.length && (x = [{
                start: 0,
                count: n.length
            }]);
            for (let t = 0, e = x.length; t < e; ++t) {
                const e = x[t]
                  , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    y(n[t + 0], n[t + 1], n[t + 2])
            }
            const _ = new G
              , b = new G
              , w = new G
              , M = new G;
            function S(t) {
                w.fromArray(r, 3 * t),
                M.copy(w);
                const e = l[t];
                _.copy(e),
                _.sub(w.multiplyScalar(w.dot(e))).normalize(),
                b.crossVectors(M, e);
                const n = b.dot(c[t]) < 0 ? -1 : 1;
                o[4 * t] = _.x,
                o[4 * t + 1] = _.y,
                o[4 * t + 2] = _.z,
                o[4 * t + 3] = n
            }
            for (let t = 0, e = x.length; t < e; ++t) {
                const e = x[t]
                  , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    S(n[t + 0]),
                    S(n[t + 1]),
                    S(n[t + 2])
            }
        },
        computeVertexNormals: function() {
            const t = this.index
              , e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n)
                    n = new $(new Float32Array(3 * e.count),3),
                    this.setAttribute("normal", n);
                else
                    for (let t = 0, e = n.count; t < e; t++)
                        n.setXYZ(t, 0, 0, 0);
                const i = new G
                  , r = new G
                  , s = new G
                  , a = new G
                  , o = new G
                  , l = new G
                  , c = new G
                  , h = new G;
                if (t)
                    for (let u = 0, d = t.count; u < d; u += 3) {
                        const d = t.getX(u + 0)
                          , p = t.getX(u + 1)
                          , m = t.getX(u + 2);
                        i.fromBufferAttribute(e, d),
                        r.fromBufferAttribute(e, p),
                        s.fromBufferAttribute(e, m),
                        c.subVectors(s, r),
                        h.subVectors(i, r),
                        c.cross(h),
                        a.fromBufferAttribute(n, d),
                        o.fromBufferAttribute(n, p),
                        l.fromBufferAttribute(n, m),
                        a.add(c),
                        o.add(c),
                        l.add(c),
                        n.setXYZ(d, a.x, a.y, a.z),
                        n.setXYZ(p, o.x, o.y, o.z),
                        n.setXYZ(m, l.x, l.y, l.z)
                    }
                else
                    for (let t = 0, a = e.count; t < a; t += 3)
                        i.fromBufferAttribute(e, t + 0),
                        r.fromBufferAttribute(e, t + 1),
                        s.fromBufferAttribute(e, t + 2),
                        c.subVectors(s, r),
                        h.subVectors(i, r),
                        c.cross(h),
                        n.setXYZ(t + 0, c.x, c.y, c.z),
                        n.setXYZ(t + 1, c.x, c.y, c.z),
                        n.setXYZ(t + 2, c.x, c.y, c.z);
                this.normalizeNormals(),
                n.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (!t || !t.isBufferGeometry)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0,
            console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for (const i in n) {
                if (void 0 === t.attributes[i])
                    continue;
                const r = n[i].array
                  , s = t.attributes[i]
                  , a = s.array
                  , o = s.itemSize * e
                  , l = Math.min(a.length, r.length - o);
                for (let t = 0, e = o; t < l; t++,
                e++)
                    r[e] = a[t]
            }
            return this
        },
        normalizeNormals: function() {
            const t = this.attributes.normal;
            for (let e = 0, n = t.count; e < n; e++)
                Ue.fromBufferAttribute(t, e),
                Ue.normalize(),
                t.setXYZ(e, Ue.x, Ue.y, Ue.z)
        },
        toNonIndexed: function() {
            function t(t, e) {
                const n = t.array
                  , i = t.itemSize
                  , r = t.normalized
                  , s = new n.constructor(e.length * i);
                let a = 0
                  , o = 0;
                for (let t = 0, r = e.length; t < r; t++) {
                    a = e[t] * i;
                    for (let t = 0; t < i; t++)
                        s[o++] = n[a++]
                }
                return new $(s,i,r)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                this;
            const e = new Fe
              , n = this.index.array
              , i = this.attributes;
            for (const r in i) {
                const s = t(i[r], n);
                e.setAttribute(r, s)
            }
            const r = this.morphAttributes;
            for (const i in r) {
                const s = []
                  , a = r[i];
                for (let e = 0, i = a.length; e < i; e++) {
                    const i = t(a[e], n);
                    s.push(i)
                }
                e.morphAttributes[i] = s
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for (let t = 0, n = s.length; t < n; t++) {
                const n = s[t];
                e.addGroup(n.start, n.count, n.materialIndex)
            }
            return e
        },
        toJSON: function() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 && (t.userData = this.userData),
            void 0 !== this.parameters) {
                const e = this.parameters;
                for (const n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for (const e in n) {
                const i = n[e]
                  , r = i.toJSON(t.data);
                "" !== i.name && (r.name = i.name),
                t.data.attributes[e] = r
            }
            const i = {};
            let r = !1;
            for (const e in this.morphAttributes) {
                const n = this.morphAttributes[e]
                  , s = [];
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e]
                      , r = i.toJSON(t.data);
                    "" !== i.name && (r.name = i.name),
                    s.push(r)
                }
                s.length > 0 && (i[e] = s,
                r = !0)
            }
            r && (t.data.morphAttributes = i,
            t.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }),
            t
        },
        clone: function() {
            return (new Fe).copy(this)
        },
        copy: function(t) {
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for (const t in i) {
                const n = i[t];
                this.setAttribute(t, n.clone(e))
            }
            const r = t.morphAttributes;
            for (const t in r) {
                const n = []
                  , i = r[t];
                for (let t = 0, r = i.length; t < r; t++)
                    n.push(i[t].clone(e));
                this.morphAttributes[t] = n
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t];
                this.addGroup(e.start, e.count, e.materialIndex)
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()),
            this.drawRange.start = t.drawRange.start,
            this.drawRange.count = t.drawRange.count,
            this.userData = t.userData,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    const Be = new ht
      , Ge = new ce
      , ke = new ee
      , He = new G
      , Ve = new G
      , We = new G
      , je = new G
      , Xe = new G
      , qe = new G
      , Ye = new G
      , Ze = new G
      , Je = new G
      , Ke = new V
      , Qe = new V
      , $e = new V
      , tn = new G
      , en = new G;
    function nn(t=new Fe, e=new Ae) {
        Ut.call(this),
        this.type = "Mesh",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    function rn(t, e, n, i, r, s, a, o, l, c, h, u) {
        He.fromBufferAttribute(r, c),
        Ve.fromBufferAttribute(r, h),
        We.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (e.morphTargets && s && d) {
            Ye.set(0, 0, 0),
            Ze.set(0, 0, 0),
            Je.set(0, 0, 0);
            for (let t = 0, e = s.length; t < e; t++) {
                const e = d[t]
                  , n = s[t];
                0 !== e && (je.fromBufferAttribute(n, c),
                Xe.fromBufferAttribute(n, h),
                qe.fromBufferAttribute(n, u),
                a ? (Ye.addScaledVector(je, e),
                Ze.addScaledVector(Xe, e),
                Je.addScaledVector(qe, e)) : (Ye.addScaledVector(je.sub(He), e),
                Ze.addScaledVector(Xe.sub(Ve), e),
                Je.addScaledVector(qe.sub(We), e)))
            }
            He.add(Ye),
            Ve.add(Ze),
            We.add(Je)
        }
        t.isSkinnedMesh && e.skinning && (t.boneTransform(c, He),
        t.boneTransform(h, Ve),
        t.boneTransform(u, We));
        const p = function(t, e, n, i, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o),
            null === l)
                return null;
            en.copy(o),
            en.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(en);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: en.clone(),
                object: t
            }
        }(t, e, n, i, He, Ve, We, tn);
        if (p) {
            o && (Ke.fromBufferAttribute(o, c),
            Qe.fromBufferAttribute(o, h),
            $e.fromBufferAttribute(o, u),
            p.uv = Se.getUV(tn, He, Ve, We, Ke, Qe, $e, new V)),
            l && (Ke.fromBufferAttribute(l, c),
            Qe.fromBufferAttribute(l, h),
            $e.fromBufferAttribute(l, u),
            p.uv2 = Se.getUV(tn, He, Ve, We, Ke, Qe, $e, new V));
            const t = {
                a: c,
                b: h,
                c: u,
                normal: new G,
                materialIndex: 0
            };
            Se.getNormal(He, Ve, We, t.normal),
            p.face = t
        }
        return p
    }
    nn.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: nn,
        isMesh: !0,
        copy: function(t) {
            return Ut.prototype.copy.call(this, t),
            void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        },
        updateMorphTargets: function() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        raycast: function(t, e) {
            const n = this.geometry
              , i = this.material
              , r = this.matrixWorld;
            if (void 0 === i)
                return;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            ke.copy(n.boundingSphere),
            ke.applyMatrix4(r),
            !1 === t.ray.intersectsSphere(ke))
                return;
            if (Be.copy(r).invert(),
            Ge.copy(t.ray).applyMatrix4(Be),
            null !== n.boundingBox && !1 === Ge.intersectsBox(n.boundingBox))
                return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index
                  , a = n.attributes.position
                  , o = n.morphAttributes.position
                  , l = n.morphTargetsRelative
                  , c = n.attributes.uv
                  , h = n.attributes.uv2
                  , u = n.groups
                  , d = n.drawRange;
                if (null !== r)
                    if (Array.isArray(i))
                        for (let n = 0, p = u.length; n < p; n++) {
                            const p = u[n]
                              , m = i[p.materialIndex];
                            for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                                const i = r.getX(n)
                                  , u = r.getX(n + 1)
                                  , d = r.getX(n + 2);
                                s = rn(this, m, t, Ge, a, o, l, c, h, i, u, d),
                                s && (s.faceIndex = Math.floor(n / 3),
                                s.face.materialIndex = p.materialIndex,
                                e.push(s))
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                            const u = r.getX(n)
                              , d = r.getX(n + 1)
                              , p = r.getX(n + 2);
                            s = rn(this, i, t, Ge, a, o, l, c, h, u, d, p),
                            s && (s.faceIndex = Math.floor(n / 3),
                            e.push(s))
                        }
                    }
                else if (void 0 !== a)
                    if (Array.isArray(i))
                        for (let n = 0, r = u.length; n < r; n++) {
                            const r = u[n]
                              , p = i[r.materialIndex];
                            for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                                s = rn(this, p, t, Ge, a, o, l, c, h, n, n + 1, n + 2),
                                s && (s.faceIndex = Math.floor(n / 3),
                                s.face.materialIndex = r.materialIndex,
                                e.push(s))
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) {
                            s = rn(this, i, t, Ge, a, o, l, c, h, n, n + 1, n + 2),
                            s && (s.faceIndex = Math.floor(n / 3),
                            e.push(s))
                        }
                    }
            } else
                n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    });
    const sn = new ht
      , an = new ht
      , on = []
      , ln = new nn;
    function cn(t, e, n) {
        nn.call(this, t, e),
        this.instanceMatrix = new $(new Float32Array(16 * n),16),
        this.instanceColor = null,
        this.count = n,
        this.frustumCulled = !1
    }
    function hn(t, e) {
        this.array = t,
        this.stride = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.usage = 35044,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.uuid = F.generateUUID()
    }
    cn.prototype = Object.assign(Object.create(nn.prototype), {
        constructor: cn,
        isInstancedMesh: !0,
        copy: function(t) {
            return nn.prototype.copy.call(this, t),
            this.instanceMatrix.copy(t.instanceMatrix),
            null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()),
            this.count = t.count,
            this
        },
        getColorAt: function(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t)
        },
        getMatrixAt: function(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t)
        },
        raycast: function(t, e) {
            const n = this.matrixWorld
              , i = this.count;
            if (ln.geometry = this.geometry,
            ln.material = this.material,
            void 0 !== ln.material)
                for (let r = 0; r < i; r++) {
                    this.getMatrixAt(r, sn),
                    an.multiplyMatrices(n, sn),
                    ln.matrixWorld = an,
                    ln.raycast(t, on);
                    for (let t = 0, n = on.length; t < n; t++) {
                        const n = on[t];
                        n.instanceId = r,
                        n.object = this,
                        e.push(n)
                    }
                    on.length = 0
                }
        },
        setColorAt: function(t, e) {
            null === this.instanceColor && (this.instanceColor = new $(new Float32Array(3 * this.count),3)),
            e.toArray(this.instanceColor.array, 3 * t)
        },
        setMatrixAt: function(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t)
        },
        updateMorphTargets: function() {},
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.defineProperty(hn.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(hn.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setUsage: function(t) {
            return this.usage = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.usage = t.usage,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.stride,
            n *= e.stride;
            for (let i = 0, r = this.stride; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        },
        set: function(t, e=0) {
            return this.array.set(t, e),
            this
        },
        clone: function(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = F.generateUUID()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new hn(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),this.stride);
            return e.setUsage(this.usage),
            e
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        },
        toJSON: function(t) {
            return void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = F.generateUUID()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
            {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            }
        }
    });
    const un = new G;
    function dn(t, e, n, i) {
        this.name = "",
        this.data = t,
        this.itemSize = e,
        this.offset = n,
        this.normalized = !0 === i
    }
    Object.defineProperties(dn.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        },
        needsUpdate: {
            set: function(t) {
                this.data.needsUpdate = t
            }
        }
    }),
    Object.assign(dn.prototype, {
        isInterleavedBufferAttribute: !0,
        applyMatrix4: function(t) {
            for (let e = 0, n = this.data.count; e < n; e++)
                un.x = this.getX(e),
                un.y = this.getY(e),
                un.z = this.getZ(e),
                un.applyMatrix4(t),
                this.setXYZ(e, un.x, un.y, un.z);
            return this
        },
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = i,
            this.data.array[t + 3] = r,
            this
        },
        clone: function(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++)
                        t.push(this.data.array[n + e])
                }
                return new $(new this.array.constructor(t),this.itemSize,this.normalized)
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
            new dn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
        },
        toJSON: function(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for (let e = 0; e < this.count; e++) {
                    const n = e * this.data.stride + this.offset;
                    for (let e = 0; e < this.itemSize; e++)
                        t.push(this.data.array[n + e])
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t,
                    normalized: this.normalized
                }
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
        }
    });
    class pn extends Te {
        constructor(t) {
            super(),
            this.type = "SpriteMaterial",
            this.color = new J(16777215),
            this.map = null,
            this.alphaMap = null,
            this.rotation = 0,
            this.sizeAttenuation = !0,
            this.transparent = !0,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.rotation = t.rotation,
            this.sizeAttenuation = t.sizeAttenuation,
            this
        }
    }
    let mn;
    pn.prototype.isSpriteMaterial = !0;
    const fn = new G
      , gn = new G
      , vn = new G
      , yn = new V
      , xn = new V
      , _n = new ht
      , bn = new G
      , wn = new G
      , Mn = new G
      , Sn = new V
      , En = new V
      , Tn = new V;
    class An extends Ut {
        constructor(t) {
            if (super(),
            this.type = "Sprite",
            void 0 === mn) {
                mn = new Fe;
                const t = new hn(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),5);
                mn.setIndex([0, 1, 2, 0, 2, 3]),
                mn.setAttribute("position", new dn(t,3,0,!1)),
                mn.setAttribute("uv", new dn(t,2,3,!1))
            }
            this.geometry = mn,
            this.material = void 0 !== t ? t : new pn,
            this.center = new V(.5,.5)
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),
            gn.setFromMatrixScale(this.matrixWorld),
            _n.copy(t.camera.matrixWorld),
            this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld),
            vn.setFromMatrixPosition(this.modelViewMatrix),
            t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && gn.multiplyScalar(-vn.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n),
            i = Math.sin(n));
            const s = this.center;
            Ln(bn.set(-.5, -.5, 0), vn, s, gn, i, r),
            Ln(wn.set(.5, -.5, 0), vn, s, gn, i, r),
            Ln(Mn.set(.5, .5, 0), vn, s, gn, i, r),
            Sn.set(0, 0),
            En.set(1, 0),
            Tn.set(1, 1);
            let a = t.ray.intersectTriangle(bn, wn, Mn, !1, fn);
            if (null === a && (Ln(wn.set(-.5, .5, 0), vn, s, gn, i, r),
            En.set(0, 1),
            a = t.ray.intersectTriangle(bn, Mn, wn, !1, fn),
            null === a))
                return;
            const o = t.ray.origin.distanceTo(fn);
            o < t.near || o > t.far || e.push({
                distance: o,
                point: fn.clone(),
                uv: Se.getUV(fn, bn, wn, Mn, Sn, En, Tn, new V),
                face: null,
                object: this
            })
        }
        copy(t) {
            return super.copy(t),
            void 0 !== t.center && this.center.copy(t.center),
            this.material = t.material,
            this
        }
    }
    function Ln(t, e, n, i, r, s) {
        yn.subVectors(t, n).addScalar(.5).multiply(i),
        void 0 !== r ? (xn.x = s * yn.x - r * yn.y,
        xn.y = r * yn.x + s * yn.y) : xn.copy(yn),
        t.copy(e),
        t.x += xn.x,
        t.y += xn.y,
        t.applyMatrix4(_n)
    }
    An.prototype.isSprite = !0;
    class Rn extends Te {
        constructor(t) {
            super(),
            this.type = "PointsMaterial",
            this.color = new J(16777215),
            this.map = null,
            this.alphaMap = null,
            this.size = 1,
            this.sizeAttenuation = !0,
            this.morphTargets = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.size = t.size,
            this.sizeAttenuation = t.sizeAttenuation,
            this.morphTargets = t.morphTargets,
            this
        }
    }
    Rn.prototype.isPointsMaterial = !0;
    const Pn = new ht
      , Cn = new ce
      , Dn = new ee
      , Nn = new G;
    function In(t=new Fe, e=new Rn) {
        Ut.call(this),
        this.type = "Points",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    function On(t, e, n, i, r, s, a) {
        const o = Cn.distanceSqToPoint(t);
        if (o < n) {
            const n = new G;
            Cn.closestPointToPoint(t, n),
            n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far)
                return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            })
        }
    }
    In.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: In,
        isPoints: !0,
        copy: function(t) {
            return Ut.prototype.copy.call(this, t),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        },
        raycast: function(t, e) {
            const n = this.geometry
              , i = this.matrixWorld
              , r = t.params.Points.threshold;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            Dn.copy(n.boundingSphere),
            Dn.applyMatrix4(i),
            Dn.radius += r,
            !1 === t.ray.intersectsSphere(Dn))
                return;
            Pn.copy(i).invert(),
            Cn.copy(t.ray).applyMatrix4(Pn);
            const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , a = s * s;
            if (n.isBufferGeometry) {
                const r = n.index
                  , s = n.attributes.position;
                if (null !== r) {
                    const n = r.array;
                    for (let r = 0, o = n.length; r < o; r++) {
                        const o = n[r];
                        Nn.fromBufferAttribute(s, o),
                        On(Nn, o, a, i, t, e, this)
                    }
                } else
                    for (let n = 0, r = s.count; n < r; n++)
                        Nn.fromBufferAttribute(s, n),
                        On(Nn, n, a, i, t, e, this)
            } else
                console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        },
        updateMorphTargets: function() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
    });
    class zn extends Te {
        constructor(t) {
            super(),
            this.type = "LineBasicMaterial",
            this.color = new J(16777215),
            this.linewidth = 1,
            this.linecap = "round",
            this.linejoin = "round",
            this.morphTargets = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.linewidth = t.linewidth,
            this.linecap = t.linecap,
            this.linejoin = t.linejoin,
            this.morphTargets = t.morphTargets,
            this
        }
    }
    zn.prototype.isLineBasicMaterial = !0;
    const Un = new G
      , Fn = new G
      , Bn = new ht
      , Gn = new ce
      , kn = new ee;
    function Hn(t=new Fe, e=new zn) {
        Ut.call(this),
        this.type = "Line",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    Hn.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: Hn,
        isLine: !0,
        copy: function(t) {
            return Ut.prototype.copy.call(this, t),
            this.material = t.material,
            this.geometry = t.geometry,
            this
        },
        computeLineDistances: function() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position
                      , n = [0];
                    for (let t = 1, i = e.count; t < i; t++)
                        Un.fromBufferAttribute(e, t - 1),
                        Fn.fromBufferAttribute(e, t),
                        n[t] = n[t - 1],
                        n[t] += Un.distanceTo(Fn);
                    t.setAttribute("lineDistance", new lt(n,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else
                t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this
        },
        raycast: function(t, e) {
            const n = this.geometry
              , i = this.matrixWorld
              , r = t.params.Line.threshold;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            kn.copy(n.boundingSphere),
            kn.applyMatrix4(i),
            kn.radius += r,
            !1 === t.ray.intersectsSphere(kn))
                return;
            Bn.copy(i).invert(),
            Gn.copy(t.ray).applyMatrix4(Bn);
            const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , a = s * s
              , o = new G
              , l = new G
              , c = new G
              , h = new G
              , u = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index
                  , r = n.attributes.position;
                if (null !== i) {
                    const n = i.array;
                    for (let i = 0, s = n.length - 1; i < s; i += u) {
                        const s = n[i]
                          , u = n[i + 1];
                        o.fromBufferAttribute(r, s),
                        l.fromBufferAttribute(r, u);
                        if (Gn.distanceSqToSegment(o, l, h, c) > a)
                            continue;
                        h.applyMatrix4(this.matrixWorld);
                        const d = t.ray.origin.distanceTo(h);
                        d < t.near || d > t.far || e.push({
                            distance: d,
                            point: c.clone().applyMatrix4(this.matrixWorld),
                            index: i,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
                } else
                    for (let n = 0, i = r.count - 1; n < i; n += u) {
                        o.fromBufferAttribute(r, n),
                        l.fromBufferAttribute(r, n + 1);
                        if (Gn.distanceSqToSegment(o, l, h, c) > a)
                            continue;
                        h.applyMatrix4(this.matrixWorld);
                        const i = t.ray.origin.distanceTo(h);
                        i < t.near || i > t.far || e.push({
                            distance: i,
                            point: c.clone().applyMatrix4(this.matrixWorld),
                            index: n,
                            face: null,
                            faceIndex: null,
                            object: this
                        })
                    }
            } else
                n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        },
        updateMorphTargets: function() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                  , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
    });
    class Vn extends Hn {
        constructor(t, e) {
            super(t, e),
            this.type = "LineLoop"
        }
    }
    Vn.prototype.isLineLoop = !0;
    const Wn = new G
      , jn = new G;
    function Xn(t, e) {
        Hn.call(this, t, e),
        this.type = "LineSegments"
    }
    Xn.prototype = Object.assign(Object.create(Hn.prototype), {
        constructor: Xn,
        isLineSegments: !0,
        computeLineDistances: function() {
            const t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    const e = t.attributes.position
                      , n = [];
                    for (let t = 0, i = e.count; t < i; t += 2)
                        Wn.fromBufferAttribute(e, t),
                        jn.fromBufferAttribute(e, t + 1),
                        n[t] = 0 === t ? 0 : n[t - 1],
                        n[t + 1] = n[t] + Wn.distanceTo(jn);
                    t.setAttribute("lineDistance", new lt(n,1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else
                t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this
        }
    });
    const qn = new G
      , Yn = new G;
    class Zn extends Ut {
        constructor() {
            super(),
            this._currentLevel = 0,
            this.type = "LOD",
            Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }),
            this.autoUpdate = !0
        }
        copy(t) {
            super.copy(t, !1);
            const e = t.levels;
            for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                this.addLevel(n.object.clone(), n.distance)
            }
            return this.autoUpdate = t.autoUpdate,
            this
        }
        addLevel(t, e=0) {
            e = Math.abs(e);
            const n = this.levels;
            let i;
            for (i = 0; i < n.length && !(e < n[i].distance); i++)
                ;
            return n.splice(i, 0, {
                distance: e,
                object: t
            }),
            this.add(t),
            this
        }
        getCurrentLevel() {
            return this._currentLevel
        }
        getObjectForDistance(t) {
            const e = this.levels;
            if (e.length > 0) {
                let n, i;
                for (n = 1,
                i = e.length; n < i && !(t < e[n].distance); n++)
                    ;
                return e[n - 1].object
            }
            return null
        }
        raycast(t, e) {
            if (this.levels.length > 0) {
                qn.setFromMatrixPosition(this.matrixWorld);
                const n = t.ray.origin.distanceTo(qn);
                this.getObjectForDistance(n).raycast(t, e)
            }
        }
        update(t) {
            const e = this.levels;
            if (e.length > 1) {
                qn.setFromMatrixPosition(t.matrixWorld),
                Yn.setFromMatrixPosition(this.matrixWorld);
                const n = qn.distanceTo(Yn) / t.zoom;
                let i, r;
                for (e[0].object.visible = !0,
                i = 1,
                r = e.length; i < r && n >= e[i].distance; i++)
                    e[i - 1].object.visible = !1,
                    e[i].object.visible = !0;
                for (this._currentLevel = i - 1; i < r; i++)
                    e[i].object.visible = !1
            }
        }
        toJSON(t) {
            const e = super.toJSON(t);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1),
            e.object.levels = [];
            const n = this.levels;
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                e.object.levels.push({
                    object: i.object.uuid,
                    distance: i.distance
                })
            }
            return e
        }
    }
    const Jn = new G
      , Kn = new O
      , Qn = new O
      , $n = new G
      , ti = new ht;
    function ei(t, e) {
        nn.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new ht,
        this.bindMatrixInverse = new ht
    }
    function ni() {
        Ut.call(this),
        this.type = "Bone"
    }
    ei.prototype = Object.assign(Object.create(nn.prototype), {
        constructor: ei,
        isSkinnedMesh: !0,
        copy: function(t) {
            return nn.prototype.copy.call(this, t),
            this.bindMode = t.bindMode,
            this.bindMatrix.copy(t.bindMatrix),
            this.bindMatrixInverse.copy(t.bindMatrixInverse),
            this.skeleton = t.skeleton,
            this
        },
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.copy(e).invert()
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            const t = new O
              , e = this.geometry.attributes.skinWeight;
            for (let n = 0, i = e.count; n < i; n++) {
                t.x = e.getX(n),
                t.y = e.getY(n),
                t.z = e.getZ(n),
                t.w = e.getW(n);
                const i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
                e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function(t) {
            nn.prototype.updateMatrixWorld.call(this, t),
            "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        boneTransform: function(t, e) {
            const n = this.skeleton
              , i = this.geometry;
            Kn.fromBufferAttribute(i.attributes.skinIndex, t),
            Qn.fromBufferAttribute(i.attributes.skinWeight, t),
            Jn.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix),
            e.set(0, 0, 0);
            for (let t = 0; t < 4; t++) {
                const i = Qn.getComponent(t);
                if (0 !== i) {
                    const r = Kn.getComponent(t);
                    ti.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
                    e.addScaledVector($n.copy(Jn).applyMatrix4(ti), i)
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse)
        }
    }),
    ni.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: ni,
        isBone: !0
    });
    const ii = new ht
      , ri = new ht;
    class si {
        constructor(t=[], e=[]) {
            this.uuid = F.generateUUID(),
            this.bones = t.slice(0),
            this.boneInverses = e,
            this.boneMatrices = null,
            this.boneTexture = null,
            this.boneTextureSize = 0,
            this.frame = -1,
            this.init()
        }
        init() {
            const t = this.bones
              , e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t.length),
            0 === e.length)
                this.calculateInverses();
            else if (t.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
                this.boneInverses = [];
                for (let t = 0, e = this.bones.length; t < e; t++)
                    this.boneInverses.push(new ht)
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for (let t = 0, e = this.bones.length; t < e; t++) {
                const e = new ht;
                this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(),
                this.boneInverses.push(e)
            }
        }
        pose() {
            for (let t = 0, e = this.bones.length; t < e; t++) {
                const e = this.bones[t];
                e && e.matrixWorld.copy(this.boneInverses[t]).invert()
            }
            for (let t = 0, e = this.bones.length; t < e; t++) {
                const e = this.bones[t];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(),
                e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
                e.matrix.decompose(e.position, e.quaternion, e.scale))
            }
        }
        update() {
            const t = this.bones
              , e = this.boneInverses
              , n = this.boneMatrices
              , i = this.boneTexture;
            for (let i = 0, r = t.length; i < r; i++) {
                const r = t[i] ? t[i].matrixWorld : ri;
                ii.multiplyMatrices(r, e[i]),
                ii.toArray(n, 16 * i)
            }
            null !== i && (i.needsUpdate = !0)
        }
        clone() {
            return new si(this.bones,this.boneInverses)
        }
        getBoneByName(t) {
            for (let e = 0, n = this.bones.length; e < n; e++) {
                const n = this.bones[e];
                if (n.name === t)
                    return n
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(),
            this.boneTexture = null)
        }
        fromJSON(t, e) {
            this.uuid = t.uuid;
            for (let n = 0, i = t.bones.length; n < i; n++) {
                const i = t.bones[n];
                let r = e[i];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i),
                r = new ni),
                this.bones.push(r),
                this.boneInverses.push((new ht).fromArray(t.boneInverses[n]))
            }
            return this.init(),
            this
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t.uuid = this.uuid;
            const e = this.bones
              , n = this.boneInverses;
            for (let i = 0, r = e.length; i < r; i++) {
                const r = e[i];
                t.bones.push(r.uuid);
                const s = n[i];
                t.boneInverses.push(s.toArray())
            }
            return t
        }
    }
    function ai() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    Object.assign(ai.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."),
            null
        },
        getPointAt: function(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        },
        getPoints: function(t=5) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return e
        },
        getSpacedPoints: function(t=5) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPointAt(n / t));
            return e
        },
        getLength: function() {
            const t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for (let s = 1; s <= t; s++)
                n = this.getPoint(s / t),
                r += n.distanceTo(i),
                e.push(r),
                i = n;
            return this.cacheArcLengths = e,
            e
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t * n[r - 1];
            let a, o = 0, l = r - 1;
            for (; o <= l; )
                if (i = Math.floor(o + (l - o) / 2),
                a = n[i] - s,
                a < 0)
                    o = i + 1;
                else {
                    if (!(a > 0)) {
                        l = i;
                        break
                    }
                    l = i - 1
                }
            if (i = l,
            n[i] === s)
                return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1)
        },
        getTangent: function(t, e) {
            const n = 1e-4;
            let i = t - n
              , r = t + n;
            i < 0 && (i = 0),
            r > 1 && (r = 1);
            const s = this.getPoint(i)
              , a = this.getPoint(r)
              , o = e || (s.isVector2 ? new V : new G);
            return o.copy(a).sub(s).normalize(),
            o
        },
        getTangentAt: function(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getTangent(n, e)
        },
        computeFrenetFrames: function(t, e) {
            const n = new G
              , i = []
              , r = []
              , s = []
              , a = new G
              , o = new ht;
            for (let e = 0; e <= t; e++) {
                const n = e / t;
                i[e] = this.getTangentAt(n, new G),
                i[e].normalize()
            }
            r[0] = new G,
            s[0] = new G;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x)
              , h = Math.abs(i[0].y)
              , u = Math.abs(i[0].z);
            c <= l && (l = c,
            n.set(1, 0, 0)),
            h <= l && (l = h,
            n.set(0, 1, 0)),
            u <= l && n.set(0, 0, 1),
            a.crossVectors(i[0], n).normalize(),
            r[0].crossVectors(i[0], a),
            s[0].crossVectors(i[0], r[0]);
            for (let e = 1; e <= t; e++) {
                if (r[e] = r[e - 1].clone(),
                s[e] = s[e - 1].clone(),
                a.crossVectors(i[e - 1], i[e]),
                a.length() > Number.EPSILON) {
                    a.normalize();
                    const t = Math.acos(F.clamp(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t))
                }
                s[e].crossVectors(i[e], r[e])
            }
            if (!0 === e) {
                let e = Math.acos(F.clamp(r[0].dot(r[t]), -1, 1));
                e /= t,
                i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for (let n = 1; n <= t; n++)
                    r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
                    s[n].crossVectors(i[n], r[n])
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        },
        toJSON: function() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions,
            t.type = this.type,
            t
        },
        fromJSON: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
    });
    class oi extends ai {
        constructor(t=0, e=0, n=1, i=1, r=0, s=2 * Math.PI, a=!1, o=0) {
            super(),
            this.type = "EllipseCurve",
            this.aX = t,
            this.aY = e,
            this.xRadius = n,
            this.yRadius = i,
            this.aStartAngle = r,
            this.aEndAngle = s,
            this.aClockwise = a,
            this.aRotation = o
        }
        getPoint(t, e) {
            const n = e || new V
              , i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for (; r < 0; )
                r += i;
            for (; r > i; )
                r -= i;
            r < Number.EPSILON && (r = s ? 0 : i),
            !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a)
              , l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation)
                  , e = Math.sin(this.aRotation)
                  , n = o - this.aX
                  , i = l - this.aY;
                o = n * t - i * e + this.aX,
                l = n * e + i * t + this.aY
            }
            return n.set(o, l)
        }
        copy(t) {
            return super.copy(t),
            this.aX = t.aX,
            this.aY = t.aY,
            this.xRadius = t.xRadius,
            this.yRadius = t.yRadius,
            this.aStartAngle = t.aStartAngle,
            this.aEndAngle = t.aEndAngle,
            this.aClockwise = t.aClockwise,
            this.aRotation = t.aRotation,
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.aX = this.aX,
            t.aY = this.aY,
            t.xRadius = this.xRadius,
            t.yRadius = this.yRadius,
            t.aStartAngle = this.aStartAngle,
            t.aEndAngle = this.aEndAngle,
            t.aClockwise = this.aClockwise,
            t.aRotation = this.aRotation,
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.aX = t.aX,
            this.aY = t.aY,
            this.xRadius = t.xRadius,
            this.yRadius = t.yRadius,
            this.aStartAngle = t.aStartAngle,
            this.aEndAngle = t.aEndAngle,
            this.aClockwise = t.aClockwise,
            this.aRotation = t.aRotation,
            this
        }
    }
    oi.prototype.isEllipseCurve = !0;
    class li extends oi {
        constructor(t, e, n, i, r, s) {
            super(t, e, n, n, i, r, s),
            this.type = "ArcCurve"
        }
    }
    function ci() {
        let t = 0
          , e = 0
          , n = 0
          , i = 0;
        function r(r, s, a, o) {
            t = r,
            e = a,
            n = -3 * r + 3 * s - 2 * a - o,
            i = 2 * r - 2 * s + a + o
        }
        return {
            initCatmullRom: function(t, e, n, i, s) {
                r(e, n, s * (n - t), s * (i - e))
            },
            initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
                let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a
                  , c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a,
                c *= a,
                r(e, n, l, c)
            },
            calc: function(r) {
                const s = r * r;
                return t + e * r + n * s + i * (s * r)
            }
        }
    }
    li.prototype.isArcCurve = !0;
    const hi = new G
      , ui = new ci
      , di = new ci
      , pi = new ci;
    class mi extends ai {
        constructor(t=[], e=!1, n="centripetal", i=.5) {
            super(),
            this.type = "CatmullRomCurve3",
            this.points = t,
            this.closed = e,
            this.curveType = n,
            this.tension = i
        }
        getPoint(t, e=new G) {
            const n = e
              , i = this.points
              , r = i.length
              , s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2,
            c = 1),
            this.closed || l > 0 ? a = i[(l - 1) % r] : (hi.subVectors(i[0], i[1]).add(i[0]),
            a = hi);
            const h = i[l % r]
              , u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (hi.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]),
            o = hi),
            "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t)
                  , n = Math.pow(h.distanceToSquared(u), t)
                  , i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1),
                e < 1e-4 && (e = n),
                i < 1e-4 && (i = n),
                ui.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
                di.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
                pi.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i)
            } else
                "catmullrom" === this.curveType && (ui.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
                di.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
                pi.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(ui.calc(c), di.calc(c), pi.calc(c)),
            n
        }
        copy(t) {
            super.copy(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone())
            }
            return this.closed = t.closed,
            this.curveType = t.curveType,
            this.tension = t.tension,
            this
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray())
            }
            return t.closed = this.closed,
            t.curveType = this.curveType,
            t.tension = this.tension,
            t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push((new G).fromArray(n))
            }
            return this.closed = t.closed,
            this.curveType = t.curveType,
            this.tension = t.tension,
            this
        }
    }
    function fi(t, e, n, i, r) {
        const s = .5 * (i - e)
          , a = .5 * (r - n)
          , o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n
    }
    function gi(t, e, n, i) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, i)
    }
    function vi(t, e, n, i, r) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            const n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, i) + function(t, e) {
            return t * t * t * e
        }(t, r)
    }
    mi.prototype.isCatmullRomCurve3 = !0;
    class yi extends ai {
        constructor(t=new V, e=new V, n=new V, i=new V) {
            super(),
            this.type = "CubicBezierCurve",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n,
            this.v3 = i
        }
        getPoint(t, e=new V) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2
              , a = this.v3;
            return n.set(vi(t, i.x, r.x, s.x, a.x), vi(t, i.y, r.y, s.y, a.y)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t.v3 = this.v3.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
        }
    }
    yi.prototype.isCubicBezierCurve = !0;
    class xi extends ai {
        constructor(t=new G, e=new G, n=new G, i=new G) {
            super(),
            this.type = "CubicBezierCurve3",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n,
            this.v3 = i
        }
        getPoint(t, e=new G) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2
              , a = this.v3;
            return n.set(vi(t, i.x, r.x, s.x, a.x), vi(t, i.y, r.y, s.y, a.y), vi(t, i.z, r.z, s.z, a.z)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t.v3 = this.v3.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
        }
    }
    xi.prototype.isCubicBezierCurve3 = !0;
    class _i extends ai {
        constructor(t=new V, e=new V) {
            super(),
            this.type = "LineCurve",
            this.v1 = t,
            this.v2 = e
        }
        getPoint(t, e=new V) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
            n.multiplyScalar(t).add(this.v1)),
            n
        }
        getPointAt(t, e) {
            return this.getPoint(t, e)
        }
        getTangent(t, e) {
            const n = e || new V;
            return n.copy(this.v2).sub(this.v1).normalize(),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    _i.prototype.isLineCurve = !0;
    class bi extends ai {
        constructor(t=new G, e=new G) {
            super(),
            this.type = "LineCurve3",
            this.isLineCurve3 = !0,
            this.v1 = t,
            this.v2 = e
        }
        getPoint(t, e=new G) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
            n.multiplyScalar(t).add(this.v1)),
            n
        }
        getPointAt(t, e) {
            return this.getPoint(t, e)
        }
        copy(t) {
            return super.copy(t),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    class wi extends ai {
        constructor(t=new V, e=new V, n=new V) {
            super(),
            this.type = "QuadraticBezierCurve",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n
        }
        getPoint(t, e=new V) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2;
            return n.set(gi(t, i.x, r.x, s.x), gi(t, i.y, r.y, s.y)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    wi.prototype.isQuadraticBezierCurve = !0;
    class Mi extends ai {
        constructor(t=new G, e=new G, n=new G) {
            super(),
            this.type = "QuadraticBezierCurve3",
            this.v0 = t,
            this.v1 = e,
            this.v2 = n
        }
        getPoint(t, e=new G) {
            const n = e
              , i = this.v0
              , r = this.v1
              , s = this.v2;
            return n.set(gi(t, i.x, r.x, s.x), gi(t, i.y, r.y, s.y), gi(t, i.z, r.z, s.z)),
            n
        }
        copy(t) {
            return super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(),
            t.v1 = this.v1.toArray(),
            t.v2 = this.v2.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
        }
    }
    Mi.prototype.isQuadraticBezierCurve3 = !0;
    class Si extends ai {
        constructor(t=[]) {
            super(),
            this.type = "SplineCurve",
            this.points = t
        }
        getPoint(t, e=new V) {
            const n = e
              , i = this.points
              , r = (i.length - 1) * t
              , s = Math.floor(r)
              , a = r - s
              , o = i[0 === s ? s : s - 1]
              , l = i[s]
              , c = i[s > i.length - 2 ? i.length - 1 : s + 1]
              , h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(fi(a, o.x, l.x, c.x, h.x), fi(a, o.y, l.y, c.y, h.y)),
            n
        }
        copy(t) {
            super.copy(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push(n.clone())
            }
            return this
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for (let e = 0, n = this.points.length; e < n; e++) {
                const n = this.points[e];
                t.points.push(n.toArray())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.points = [];
            for (let e = 0, n = t.points.length; e < n; e++) {
                const n = t.points[e];
                this.points.push((new V).fromArray(n))
            }
            return this
        }
    }
    Si.prototype.isSplineCurve = !0;
    class Ei extends ai {
        constructor() {
            super(),
            this.type = "CurvePath",
            this.curves = [],
            this.autoClose = !1
        }
        add(t) {
            this.curves.push(t)
        }
        closePath() {
            const t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new _i(e,t))
        }
        getPoint(t) {
            const e = t * this.getLength()
              , n = this.getCurveLengths();
            let i = 0;
            for (; i < n.length; ) {
                if (n[i] >= e) {
                    const t = n[i] - e
                      , r = this.curves[i]
                      , s = r.getLength()
                      , a = 0 === s ? 0 : 1 - t / s;
                    return r.getPointAt(a)
                }
                i++
            }
            return null
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1]
        }
        updateArcLengths() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            const t = [];
            let e = 0;
            for (let n = 0, i = this.curves.length; n < i; n++)
                e += this.curves[n].getLength(),
                t.push(e);
            return this.cacheLengths = t,
            t
        }
        getSpacedPoints(t=40) {
            const e = [];
            for (let n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]),
            e
        }
        getPoints(t=12) {
            const e = [];
            let n;
            for (let i = 0, r = this.curves; i < r.length; i++) {
                const s = r[i]
                  , a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t
                  , o = s.getPoints(a);
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    n && n.equals(i) || (e.push(i),
                    n = i)
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]),
            e
        }
        copy(t) {
            super.copy(t),
            this.curves = [];
            for (let e = 0, n = t.curves.length; e < n; e++) {
                const n = t.curves[e];
                this.curves.push(n.clone())
            }
            return this.autoClose = t.autoClose,
            this
        }
        toJSON() {
            const t = super.toJSON();
            t.autoClose = this.autoClose,
            t.curves = [];
            for (let e = 0, n = this.curves.length; e < n; e++) {
                const n = this.curves[e];
                t.curves.push(n.toJSON())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.autoClose = t.autoClose,
            this.curves = [];
            for (let n = 0, i = t.curves.length; n < i; n++) {
                const i = t.curves[n];
                this.curves.push((new e[i.type]).fromJSON(i))
            }
            return this
        }
    }
    class Ti extends Ei {
        constructor(t) {
            super(),
            this.type = "Path",
            this.currentPoint = new V,
            t && this.setFromPoints(t)
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for (let e = 1, n = t.length; e < n; e++)
                this.lineTo(t[e].x, t[e].y);
            return this
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e),
            this
        }
        lineTo(t, e) {
            const n = new _i(this.currentPoint.clone(),new V(t,e));
            return this.curves.push(n),
            this.currentPoint.set(t, e),
            this
        }
        quadraticCurveTo(t, e, n, i) {
            const r = new wi(this.currentPoint.clone(),new V(t,e),new V(n,i));
            return this.curves.push(r),
            this.currentPoint.set(n, i),
            this
        }
        bezierCurveTo(t, e, n, i, r, s) {
            const a = new yi(this.currentPoint.clone(),new V(t,e),new V(n,i),new V(r,s));
            return this.curves.push(a),
            this.currentPoint.set(r, s),
            this
        }
        splineThru(t) {
            const e = [this.currentPoint.clone()].concat(t)
              , n = new Si(e);
            return this.curves.push(n),
            this.currentPoint.copy(t[t.length - 1]),
            this
        }
        arc(t, e, n, i, r, s) {
            const a = this.currentPoint.x
              , o = this.currentPoint.y;
            return this.absarc(t + a, e + o, n, i, r, s),
            this
        }
        absarc(t, e, n, i, r, s) {
            return this.absellipse(t, e, n, n, i, r, s),
            this
        }
        ellipse(t, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x
              , c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, n, i, r, s, a, o),
            this
        }
        absellipse(t, e, n, i, r, s, a, o) {
            const l = new oi(t,e,n,i,r,s,a,o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c),
            this
        }
        copy(t) {
            return super.copy(t),
            this.currentPoint.copy(t.currentPoint),
            this
        }
        toJSON() {
            const t = super.toJSON();
            return t.currentPoint = this.currentPoint.toArray(),
            t
        }
        fromJSON(t) {
            return super.fromJSON(t),
            this.currentPoint.fromArray(t.currentPoint),
            this
        }
    }
    class Ai extends Ti {
        constructor(t) {
            super(t),
            this.uuid = F.generateUUID(),
            this.type = "Shape",
            this.holes = []
        }
        getPointsHoles(t) {
            const e = [];
            for (let n = 0, i = this.holes.length; n < i; n++)
                e[n] = this.holes[n].getPoints(t);
            return e
        }
        extractPoints(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        }
        copy(t) {
            super.copy(t),
            this.holes = [];
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push(n.clone())
            }
            return this
        }
        toJSON() {
            const t = super.toJSON();
            t.uuid = this.uuid,
            t.holes = [];
            for (let e = 0, n = this.holes.length; e < n; e++) {
                const n = this.holes[e];
                t.holes.push(n.toJSON())
            }
            return t
        }
        fromJSON(t) {
            super.fromJSON(t),
            this.uuid = t.uuid,
            this.holes = [];
            for (let e = 0, n = t.holes.length; e < n; e++) {
                const n = t.holes[e];
                this.holes.push((new Ti).fromJSON(n))
            }
            return this
        }
    }
    class Li {
        constructor(t, e, n) {
            this.name = "",
            this.color = new J(t),
            this.near = void 0 !== e ? e : 1,
            this.far = void 0 !== n ? n : 1e3
        }
        clone() {
            return new Li(this.color,this.near,this.far)
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }
    Li.prototype.isFog = !0;
    class Ri {
        constructor(t, e) {
            this.name = "",
            this.color = new J(t),
            this.density = void 0 !== e ? e : 25e-5
        }
        clone() {
            return new Ri(this.color,this.density)
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    }
    Ri.prototype.isFogExp2 = !0;
    class Pi extends Ut {
        constructor(t, e=1) {
            super(),
            this.type = "Light",
            this.color = new J(t),
            this.intensity = e
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
        }
    }
    Pi.prototype.isLight = !0;
    class Ci extends Pi {
        constructor(t, e, n) {
            super(t, n),
            this.type = "HemisphereLight",
            this.position.copy(Ut.DefaultUp),
            this.updateMatrix(),
            this.groundColor = new J(e)
        }
        copy(t) {
            return Pi.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }
    Ci.prototype.isHemisphereLight = !0;
    const Di = new ee
      , Ni = new G;
    class Ii {
        constructor(t=new pe, e=new pe, n=new pe, i=new pe, r=new pe, s=new pe) {
            this.planes = [t, e, n, i, r, s]
        }
        set(t, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t),
            a[1].copy(e),
            a[2].copy(n),
            a[3].copy(i),
            a[4].copy(r),
            a[5].copy(s),
            this
        }
        copy(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                e[n].copy(t.planes[n]);
            return this
        }
        setFromProjectionMatrix(t) {
            const e = this.planes
              , n = t.elements
              , i = n[0]
              , r = n[1]
              , s = n[2]
              , a = n[3]
              , o = n[4]
              , l = n[5]
              , c = n[6]
              , h = n[7]
              , u = n[8]
              , d = n[9]
              , p = n[10]
              , m = n[11]
              , f = n[12]
              , g = n[13]
              , v = n[14]
              , y = n[15];
            return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(),
            e[1].setComponents(a + i, h + o, m + u, y + f).normalize(),
            e[2].setComponents(a + r, h + l, m + d, y + g).normalize(),
            e[3].setComponents(a - r, h - l, m - d, y - g).normalize(),
            e[4].setComponents(a - s, h - c, m - p, y - v).normalize(),
            e[5].setComponents(a + s, h + c, m + p, y + v).normalize(),
            this
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Di)
        }
        intersectsSprite(t) {
            return Di.center.set(0, 0, 0),
            Di.radius = .7071067811865476,
            Di.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Di)
        }
        intersectsSphere(t) {
            const e = this.planes
              , n = t.center
              , i = -t.radius;
            for (let t = 0; t < 6; t++) {
                if (e[t].distanceToPoint(n) < i)
                    return !1
            }
            return !0
        }
        intersectsBox(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) {
                const i = e[n];
                if (Ni.x = i.normal.x > 0 ? t.max.x : t.min.x,
                Ni.y = i.normal.y > 0 ? t.max.y : t.min.y,
                Ni.z = i.normal.z > 0 ? t.max.z : t.min.z,
                i.distanceToPoint(Ni) < 0)
                    return !1
            }
            return !0
        }
        containsPoint(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const Oi = new ht
      , zi = new G
      , Ui = new G;
    class Fi {
        constructor(t) {
            this.camera = t,
            this.bias = 0,
            this.normalBias = 0,
            this.radius = 1,
            this.mapSize = new V(512,512),
            this.map = null,
            this.mapPass = null,
            this.matrix = new ht,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this._frustum = new Ii,
            this._frameExtents = new V(1,1),
            this._viewportCount = 1,
            this._viewports = [new O(0,0,1,1)]
        }
        getViewportCount() {
            return this._viewportCount
        }
        getFrustum() {
            return this._frustum
        }
        updateMatrices(t) {
            const e = this.camera
              , n = this.matrix;
            zi.setFromMatrixPosition(t.matrixWorld),
            e.position.copy(zi),
            Ui.setFromMatrixPosition(t.target.matrixWorld),
            e.lookAt(Ui),
            e.updateMatrixWorld(),
            Oi.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(Oi),
            n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
            n.multiply(e.projectionMatrix),
            n.multiply(e.matrixWorldInverse)
        }
        getViewport(t) {
            return this._viewports[t]
        }
        getFrameExtents() {
            return this._frameExtents
        }
        copy(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        toJSON() {
            const t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            0 !== this.normalBias && (t.normalBias = this.normalBias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }
    function Bi() {
        Ut.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new ht,
        this.projectionMatrix = new ht,
        this.projectionMatrixInverse = new ht
    }
    function Gi(t=50, e=1, n=.1, i=2e3) {
        Bi.call(this),
        this.type = "PerspectiveCamera",
        this.fov = t,
        this.zoom = 1,
        this.near = n,
        this.far = i,
        this.focus = 10,
        this.aspect = e,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    Bi.prototype = Object.assign(Object.create(Ut.prototype), {
        constructor: Bi,
        isCamera: !0,
        copy: function(t, e) {
            return Ut.prototype.copy.call(this, t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
            t = new G),
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function(t) {
            Ut.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        },
        updateWorldMatrix: function(t, e) {
            Ut.prototype.updateWorldMatrix.call(this, t, e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    Gi.prototype = Object.assign(Object.create(Bi.prototype), {
        constructor: Gi,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return Bi.prototype.copy.call(this, t, e),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * F.RAD2DEG * Math.atan(e),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            const t = Math.tan(.5 * F.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * F.RAD2DEG * Math.atan(Math.tan(.5 * F.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, n, i, r, s) {
            this.aspect = t / e,
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = s,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            const t = this.near;
            let e = t * Math.tan(.5 * F.DEG2RAD * this.fov) / this.zoom
              , n = 2 * e
              , i = this.aspect * n
              , r = -.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth
                  , a = s.fullHeight;
                r += s.offsetX * i / t,
                e -= s.offsetY * n / a,
                i *= s.width / t,
                n *= s.height / a
            }
            const a = this.filmOffset;
            0 !== a && (r += t * a / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        },
        toJSON: function(t) {
            const e = Ut.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    });
    class ki extends Fi {
        constructor() {
            super(new Gi(50,1,.5,500)),
            this.focus = 1
        }
        updateMatrices(t) {
            const e = this.camera
              , n = 2 * F.RAD2DEG * t.angle * this.focus
              , i = this.mapSize.width / this.mapSize.height
              , r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n,
            e.aspect = i,
            e.far = r,
            e.updateProjectionMatrix()),
            super.updateMatrices(t)
        }
    }
    ki.prototype.isSpotLightShadow = !0;
    class Hi extends Pi {
        constructor(t, e, n=0, i=Math.PI / 3, r=0, s=1) {
            super(t, e),
            this.type = "SpotLight",
            this.position.copy(Ut.DefaultUp),
            this.updateMatrix(),
            this.target = new Ut,
            this.distance = n,
            this.angle = i,
            this.penumbra = r,
            this.decay = s,
            this.shadow = new ki
        }
        get power() {
            return this.intensity * Math.PI
        }
        set power(t) {
            this.intensity = t / Math.PI
        }
        copy(t) {
            return super.copy(t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }
    Hi.prototype.isSpotLight = !0;
    const Vi = new ht
      , Wi = new G
      , ji = new G;
    class Xi extends Fi {
        constructor() {
            super(new Gi(90,1,.5,500)),
            this._frameExtents = new V(4,2),
            this._viewportCount = 6,
            this._viewports = [new O(2,1,1,1), new O(0,1,1,1), new O(3,1,1,1), new O(1,1,1,1), new O(3,0,1,1), new O(1,0,1,1)],
            this._cubeDirections = [new G(1,0,0), new G(-1,0,0), new G(0,0,1), new G(0,0,-1), new G(0,1,0), new G(0,-1,0)],
            this._cubeUps = [new G(0,1,0), new G(0,1,0), new G(0,1,0), new G(0,1,0), new G(0,0,1), new G(0,0,-1)]
        }
        updateMatrices(t, e=0) {
            const n = this.camera
              , i = this.matrix;
            Wi.setFromMatrixPosition(t.matrixWorld),
            n.position.copy(Wi),
            ji.copy(n.position),
            ji.add(this._cubeDirections[e]),
            n.up.copy(this._cubeUps[e]),
            n.lookAt(ji),
            n.updateMatrixWorld(),
            i.makeTranslation(-Wi.x, -Wi.y, -Wi.z),
            Vi.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(Vi)
        }
    }
    Xi.prototype.isPointLightShadow = !0;
    class qi extends Pi {
        constructor(t, e, n=0, i=1) {
            super(t, e),
            this.type = "PointLight",
            this.distance = n,
            this.decay = i,
            this.shadow = new Xi
        }
        get power() {
            return 4 * this.intensity * Math.PI
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI)
        }
        copy(t) {
            return super.copy(t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }
    qi.prototype.isPointLight = !0;
    class Yi extends Bi {
        constructor(t=-1, e=1, n=1, i=-1, r=.1, s=2e3) {
            super(),
            this.type = "OrthographicCamera",
            this.zoom = 1,
            this.view = null,
            this.left = t,
            this.right = e,
            this.top = n,
            this.bottom = i,
            this.near = r,
            this.far = s,
            this.updateProjectionMatrix()
        }
        copy(t, e) {
            return super.copy(t, e),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        }
        setViewOffset(t, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = s,
            this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2;
            let r = n - t
              , s = n + t
              , a = i + e
              , o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom
                  , e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t * this.view.offsetX,
                s = r + t * this.view.width,
                a -= e * this.view.offsetY,
                o = a - e * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
            const e = Ut.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    }
    Yi.prototype.isOrthographicCamera = !0;
    class Zi extends Fi {
        constructor() {
            super(new Yi(-5,5,5,-5,.5,500))
        }
    }
    Zi.prototype.isDirectionalLightShadow = !0;
    class Ji extends Pi {
        constructor(t, e) {
            super(t, e),
            this.type = "DirectionalLight",
            this.position.copy(Ut.DefaultUp),
            this.updateMatrix(),
            this.target = new Ut,
            this.shadow = new Zi
        }
        copy(t) {
            return super.copy(t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }
    Ji.prototype.isDirectionalLight = !0;
    class Ki extends Pi {
        constructor(t, e) {
            super(t, e),
            this.type = "AmbientLight"
        }
    }
    Ki.prototype.isAmbientLight = !0;
    class Qi extends Pi {
        constructor(t, e, n=10, i=10) {
            super(t, e),
            this.type = "RectAreaLight",
            this.width = n,
            this.height = i
        }
        copy(t) {
            return super.copy(t),
            this.width = t.width,
            this.height = t.height,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.width = this.width,
            e.object.height = this.height,
            e
        }
    }
    Qi.prototype.isRectAreaLight = !0;
    class $i {
        constructor() {
            this.coefficients = [];
            for (let t = 0; t < 9; t++)
                this.coefficients.push(new G)
        }
        set(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].copy(t[e]);
            return this
        }
        zero() {
            for (let t = 0; t < 9; t++)
                this.coefficients[t].set(0, 0, 0);
            return this
        }
        getAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095),
            e.addScaledVector(s[1], .488603 * i),
            e.addScaledVector(s[2], .488603 * r),
            e.addScaledVector(s[3], .488603 * n),
            e.addScaledVector(s[4], n * i * 1.092548),
            e.addScaledVector(s[5], i * r * 1.092548),
            e.addScaledVector(s[6], .315392 * (3 * r * r - 1)),
            e.addScaledVector(s[7], n * r * 1.092548),
            e.addScaledVector(s[8], .546274 * (n * n - i * i)),
            e
        }
        getIrradianceAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z
              , s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227),
            e.addScaledVector(s[1], 1.023328 * i),
            e.addScaledVector(s[2], 1.023328 * r),
            e.addScaledVector(s[3], 1.023328 * n),
            e.addScaledVector(s[4], .858086 * n * i),
            e.addScaledVector(s[5], .858086 * i * r),
            e.addScaledVector(s[6], .743125 * r * r - .247708),
            e.addScaledVector(s[7], .858086 * n * r),
            e.addScaledVector(s[8], .429043 * (n * n - i * i)),
            e
        }
        add(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].add(t.coefficients[e]);
            return this
        }
        addScaledSH(t, e) {
            for (let n = 0; n < 9; n++)
                this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this
        }
        scale(t) {
            for (let e = 0; e < 9; e++)
                this.coefficients[e].multiplyScalar(t);
            return this
        }
        lerp(t, e) {
            for (let n = 0; n < 9; n++)
                this.coefficients[n].lerp(t.coefficients[n], e);
            return this
        }
        equals(t) {
            for (let e = 0; e < 9; e++)
                if (!this.coefficients[e].equals(t.coefficients[e]))
                    return !1;
            return !0
        }
        copy(t) {
            return this.set(t.coefficients)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        fromArray(t, e=0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++)
                n[i].fromArray(t, e + 3 * i);
            return this
        }
        toArray(t=[], e=0) {
            const n = this.coefficients;
            for (let i = 0; i < 9; i++)
                n[i].toArray(t, e + 3 * i);
            return t
        }
        static getBasisAt(t, e) {
            const n = t.x
              , i = t.y
              , r = t.z;
            e[0] = .282095,
            e[1] = .488603 * i,
            e[2] = .488603 * r,
            e[3] = .488603 * n,
            e[4] = 1.092548 * n * i,
            e[5] = 1.092548 * i * r,
            e[6] = .315392 * (3 * r * r - 1),
            e[7] = 1.092548 * n * r,
            e[8] = .546274 * (n * n - i * i)
        }
    }
    $i.prototype.isSphericalHarmonics3 = !0;
    class tr extends Pi {
        constructor(t=new $i, e=1) {
            super(void 0, e),
            this.sh = t
        }
        copy(t) {
            return super.copy(t),
            this.sh.copy(t.sh),
            this
        }
        fromJSON(t) {
            return this.intensity = t.intensity,
            this.sh.fromArray(t.sh),
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.sh = this.sh.toArray(),
            e
        }
    }
    tr.prototype.isLightProbe = !0;
    class er extends Ut {
        constructor() {
            super(),
            this.type = "Scene",
            this.background = null,
            this.environment = null,
            this.fog = null,
            this.overrideMaterial = null,
            this.autoUpdate = !0,
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                detail: this
            }))
        }
        copy(t, e) {
            return super.copy(t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.environment && (this.environment = t.environment.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
            this.autoUpdate = t.autoUpdate,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)),
            null !== this.environment && (e.object.environment = this.environment.toJSON(t)),
            null !== this.fog && (e.object.fog = this.fog.toJSON()),
            e
        }
    }
    let nr;
    er.prototype.isScene = !0;
    const ir = function(t) {
        if (/^data:/i.test(t.src))
            return t.src;
        if ("undefined" == typeof HTMLCanvasElement)
            return t.src;
        let e;
        if (t instanceof HTMLCanvasElement)
            e = t;
        else {
            void 0 === nr && (nr = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
            nr.width = t.width,
            nr.height = t.height;
            const n = nr.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
            e = nr
        }
        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
    };
    let rr = 0;
    class sr extends yt {
        constructor(t=sr.DEFAULT_IMAGE, e=sr.DEFAULT_MAPPING, n=1001, i=1001, r=1006, s=1008, a=1023, o=1009, l=1, c=3e3) {
            super(),
            Object.defineProperty(this, "id", {
                value: rr++
            }),
            this.uuid = F.generateUUID(),
            this.name = "",
            this.image = t,
            this.mipmaps = [],
            this.mapping = e,
            this.wrapS = n,
            this.wrapT = i,
            this.magFilter = r,
            this.minFilter = s,
            this.anisotropy = l,
            this.format = a,
            this.internalFormat = null,
            this.type = o,
            this.offset = new V(0,0),
            this.repeat = new V(1,1),
            this.center = new V(0,0),
            this.rotation = 0,
            this.matrixAutoUpdate = !0,
            this.matrix = new Mt,
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = c,
            this.version = 0,
            this.onUpdate = null
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.internalFormat = t.internalFormat,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if (void 0 === i.uuid && (i.uuid = F.generateUUID()),
                !e && void 0 === t.images[i.uuid]) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for (let t = 0, n = i.length; t < n; t++)
                            i[t].isDataTexture ? e.push(ar(i[t].image)) : e.push(ar(i[t]))
                    } else
                        e = ar(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: e
                    }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n),
            n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(t) {
            if (300 !== this.mapping)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || t.x > 1)
                switch (this.wrapS) {
                case u:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case d:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case p:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                case u:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case d:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case p:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
    }
    function ar(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? ir(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
        {})
    }
    sr.DEFAULT_IMAGE = void 0,
    sr.DEFAULT_MAPPING = 300,
    sr.prototype.isTexture = !0;
    class or extends sr {
        constructor(t, e, n, i, r, s, a, l, c, h) {
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : o, n, i, r, s, a = void 0 !== a ? a : E, l, c, h),
            this._needsFlipEnvMap = !0,
            this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(t) {
            this.image = t
        }
    }
    or.prototype.isCubeTexture = !0;
    class lr extends sr {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
            super(null, s, a, o, l, c, i, r, h, u),
            this.image = {
                data: t || null,
                width: e || 1,
                height: n || 1
            },
            this.magFilter = void 0 !== l ? l : m,
            this.minFilter = void 0 !== c ? c : m,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1,
            this.needsUpdate = !0
        }
    }
    lr.prototype.isDataTexture = !0;
    const cr = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    };
    function hr(t, e, n) {
        const i = this;
        let r, s = !1, a = 0, o = 0;
        const l = [];
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = n,
        this.itemStart = function(t) {
            o++,
            !1 === s && void 0 !== i.onStart && i.onStart(t, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== i.onProgress && i.onProgress(t, a, o),
            a === o && (s = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }
        ,
        this.resolveURL = function(t) {
            return r ? r(t) : t
        }
        ,
        this.setURLModifier = function(t) {
            return r = t,
            this
        }
        ,
        this.addHandler = function(t, e) {
            return l.push(t, e),
            this
        }
        ,
        this.removeHandler = function(t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2),
            this
        }
        ,
        this.getHandler = function(t) {
            for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e]
                  , i = l[e + 1];
                if (n.global && (n.lastIndex = 0),
                n.test(t))
                    return i
            }
            return null
        }
    }
    const ur = new hr;
    function dr(t) {
        this.manager = void 0 !== t ? t : ur,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    Object.assign(dr.prototype, {
        load: function() {},
        loadAsync: function(t, e) {
            const n = this;
            return new Promise((function(i, r) {
                n.load(t, i, e, r)
            }
            ))
        },
        parse: function() {},
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t,
            this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t,
            this
        }
    });
    class pr extends dr {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            const r = this
              , s = cr.get(t);
            if (void 0 !== s)
                return r.manager.itemStart(t),
                setTimeout((function() {
                    e && e(s),
                    r.manager.itemEnd(t)
                }
                ), 0),
                s;
            const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            function o() {
                a.removeEventListener("load", o, !1),
                a.removeEventListener("error", l, !1),
                cr.add(t, this),
                e && e(this),
                r.manager.itemEnd(t)
            }
            function l(e) {
                a.removeEventListener("load", o, !1),
                a.removeEventListener("error", l, !1),
                i && i(e),
                r.manager.itemError(t),
                r.manager.itemEnd(t)
            }
            return a.addEventListener("load", o, !1),
            a.addEventListener("error", l, !1),
            "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
            r.manager.itemStart(t),
            a.src = t,
            a
        }
    }
    const mr = {
        arraySlice: function(t, e, n) {
            return mr.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            const e = t.length
              , n = new Array(e);
            for (let t = 0; t !== e; ++t)
                n[t] = t;
            return n.sort((function(e, n) {
                return t[e] - t[n]
            }
            )),
            n
        },
        sortedArray: function(t, e, n) {
            const i = t.length
              , r = new t.constructor(i);
            for (let s = 0, a = 0; a !== i; ++s) {
                const i = n[s] * e;
                for (let n = 0; n !== e; ++n)
                    r[a++] = t[i + n]
            }
            return r
        },
        flattenJSON: function(t, e, n, i) {
            let r = 1
              , s = t[0];
            for (; void 0 !== s && void 0 === s[i]; )
                s = t[r++];
            if (void 0 === s)
                return;
            let a = s[i];
            if (void 0 !== a)
                if (Array.isArray(a))
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        n.push.apply(n, a)),
                        s = t[r++]
                    } while (void 0 !== s);
                else if (void 0 !== a.toArray)
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        a.toArray(n, n.length)),
                        s = t[r++]
                    } while (void 0 !== s);
                else
                    do {
                        a = s[i],
                        void 0 !== a && (e.push(s.time),
                        n.push(a)),
                        s = t[r++]
                    } while (void 0 !== s)
        },
        subclip: function(t, e, n, i, r=30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for (let t = 0; t < s.tracks.length; ++t) {
                const e = s.tracks[t]
                  , o = e.getValueSize()
                  , l = []
                  , c = [];
                for (let t = 0; t < e.times.length; ++t) {
                    const s = e.times[t] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t]);
                        for (let n = 0; n < o; ++n)
                            c.push(e.values[t * o + n])
                    }
                }
                0 !== l.length && (e.times = mr.convertArray(l, e.times.constructor),
                e.values = mr.convertArray(c, e.values.constructor),
                a.push(e))
            }
            s.tracks = a;
            let o = 1 / 0;
            for (let t = 0; t < s.tracks.length; ++t)
                o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
            for (let t = 0; t < s.tracks.length; ++t)
                s.tracks[t].shift(-1 * o);
            return s.resetDuration(),
            s
        },
        makeClipAdditive: function(t, e=0, n=t, i=30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length
              , s = e / i;
            for (let e = 0; e < r; ++e) {
                const i = n.tracks[e]
                  , r = i.ValueTypeName;
                if ("bool" === r || "string" === r)
                    continue;
                const a = t.tracks.find((function(t) {
                    return t.name === i.name && t.ValueTypeName === r
                }
                ));
                if (void 0 === a)
                    continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t = o
                      , e = l - o;
                    d = mr.arraySlice(i.values, t, e)
                } else if (s >= i.times[u]) {
                    const t = u * l + o
                      , e = t + l - o;
                    d = mr.arraySlice(i.values, t, e)
                } else {
                    const t = i.createInterpolant()
                      , e = o
                      , n = l - o;
                    t.evaluate(s),
                    d = mr.arraySlice(t.resultBuffer, e, n)
                }
                if ("quaternion" === r) {
                    (new B).fromArray(d).normalize().conjugate().toArray(d)
                }
                const p = a.times.length;
                for (let t = 0; t < p; ++t) {
                    const e = t * h + c;
                    if ("quaternion" === r)
                        B.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for (let n = 0; n < t; ++n)
                            a.values[e + n] -= d[n]
                    }
                }
            }
            return t.blendMode = 2501,
            t
        }
    };
    function fr(t, e, n, i) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== i ? i : new e.constructor(n),
        this.sampleValues = e,
        this.valueSize = n
    }
    function gr(t, e, n, i) {
        fr.call(this, t, e, n, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    function vr(t, e, n, i) {
        fr.call(this, t, e, n, i)
    }
    function yr(t, e, n, i) {
        fr.call(this, t, e, n, i)
    }
    Object.assign(fr.prototype, {
        evaluate: function(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex
              , i = e[n]
              , r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t < i)) {
                            for (let s = n + 2; ; ) {
                                if (void 0 === i) {
                                    if (t < r)
                                        break i;
                                    return n = e.length,
                                    this._cachedIndex = n,
                                    this.afterEnd_(n - 1, t, r)
                                }
                                if (n === s)
                                    break;
                                if (r = i,
                                i = e[++n],
                                t < i)
                                    break e
                            }
                            s = e.length;
                            break n
                        }
                        if (t >= r)
                            break t;
                        {
                            const a = e[1];
                            t < a && (n = 2,
                            r = a);
                            for (let s = n - 2; ; ) {
                                if (void 0 === r)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, t, i);
                                if (n === s)
                                    break;
                                if (i = r,
                                r = e[--n - 1],
                                t >= r)
                                    break e
                            }
                            s = n,
                            n = 0
                        }
                    }
                    for (; n < s; ) {
                        const i = n + s >>> 1;
                        t < e[i] ? s = i : n = i + 1
                    }
                    if (i = e[n],
                    r = e[n - 1],
                    void 0 === r)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, i);
                    if (void 0 === i)
                        return n = e.length,
                        this._cachedIndex = n,
                        this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            const e = this.resultBuffer
              , n = this.sampleValues
              , i = this.valueSize
              , r = t * i;
            for (let t = 0; t !== i; ++t)
                e[t] = n[r + t];
            return e
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }),
    Object.assign(fr.prototype, {
        beforeStart_: fr.prototype.copySampleValue_,
        afterEnd_: fr.prototype.copySampleValue_
    }),
    gr.prototype = Object.assign(Object.create(fr.prototype), {
        constructor: gr,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2
              , s = t + 1
              , a = i[r]
              , o = i[s];
            if (void 0 === a)
                switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t,
                    a = 2 * e - n;
                    break;
                case 2402:
                    r = i.length - 2,
                    a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t,
                    a = n
                }
            if (void 0 === o)
                switch (this.getSettings_().endingEnd) {
                case 2401:
                    s = t,
                    o = 2 * n - e;
                    break;
                case 2402:
                    s = 1,
                    o = n + i[1] - i[0];
                    break;
                default:
                    s = t - 1,
                    o = e
                }
            const l = .5 * (n - e)
              , c = this.valueSize;
            this._weightPrev = l / (e - a),
            this._weightNext = l / (o - n),
            this._offsetPrev = r * c,
            this._offsetNext = s * c
        },
        interpolate_: function(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = t * a
              , l = o - a
              , c = this._offsetPrev
              , h = this._offsetNext
              , u = this._weightPrev
              , d = this._weightNext
              , p = (n - e) / (i - e)
              , m = p * p
              , f = m * p
              , g = -u * f + 2 * u * m - u * p
              , v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1
              , y = (-1 - d) * f + (1.5 + d) * m + .5 * p
              , x = d * f - d * m;
            for (let t = 0; t !== a; ++t)
                r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
            return r
        }
    }),
    vr.prototype = Object.assign(Object.create(fr.prototype), {
        constructor: vr,
        interpolate_: function(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = t * a
              , l = o - a
              , c = (n - e) / (i - e)
              , h = 1 - c;
            for (let t = 0; t !== a; ++t)
                r[t] = s[l + t] * h + s[o + t] * c;
            return r
        }
    }),
    yr.prototype = Object.assign(Object.create(fr.prototype), {
        constructor: yr,
        interpolate_: function(t) {
            return this.copySampleValue_(t - 1)
        }
    });
    class xr {
        constructor(t, e, n, i) {
            if (void 0 === t)
                throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length)
                throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t,
            this.times = mr.convertArray(e, this.TimeBufferType),
            this.values = mr.convertArray(n, this.ValueBufferType),
            this.setInterpolation(i || this.DefaultInterpolation)
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON)
                n = e.toJSON(t);
            else {
                n = {
                    name: t.name,
                    times: mr.convertArray(t.times, Array),
                    values: mr.convertArray(t.values, Array)
                };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (n.interpolation = e)
            }
            return n.type = t.ValueTypeName,
            n
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new yr(this.times,this.values,this.getValueSize(),t)
        }
        InterpolantFactoryMethodLinear(t) {
            return new vr(this.times,this.values,this.getValueSize(),t)
        }
        InterpolantFactoryMethodSmooth(t) {
            return new gr(this.times,this.values,this.getValueSize(),t)
        }
        setInterpolation(t) {
            let e;
            switch (t) {
            case R:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case P:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case C:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)
                        throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", e),
                this
            }
            return this.createInterpolant = e,
            this
        }
        getInterpolation() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return R;
            case this.InterpolantFactoryMethodLinear:
                return P;
            case this.InterpolantFactoryMethodSmooth:
                return C
            }
        }
        getValueSize() {
            return this.values.length / this.times.length
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n)
                    e[n] += t
            }
            return this
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for (let n = 0, i = e.length; n !== i; ++n)
                    e[n] *= t
            }
            return this
        }
        trim(t, e) {
            const n = this.times
              , i = n.length;
            let r = 0
              , s = i - 1;
            for (; r !== i && n[r] < t; )
                ++r;
            for (; -1 !== s && n[s] > e; )
                --s;
            if (++s,
            0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1),
                r = s - 1);
                const t = this.getValueSize();
                this.times = mr.arraySlice(n, r, s),
                this.values = mr.arraySlice(this.values, r * t, s * t)
            }
            return this
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            t = !1);
            const n = this.times
              , i = this.values
              , r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            t = !1);
            let s = null;
            for (let e = 0; e !== r; e++) {
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i),
                    t = !1;
                    break
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s),
                    t = !1;
                    break
                }
                s = i
            }
            if (void 0 !== i && mr.isTypedArray(i))
                for (let e = 0, n = i.length; e !== n; ++e) {
                    const n = i[e];
                    if (isNaN(n)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n),
                        t = !1;
                        break
                    }
                }
            return t
        }
        optimize() {
            const t = mr.arraySlice(this.times)
              , e = mr.arraySlice(this.values)
              , n = this.getValueSize()
              , i = this.getInterpolation() === C
              , r = t.length - 1;
            let s = 1;
            for (let a = 1; a < r; ++a) {
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                    if (i)
                        r = !0;
                    else {
                        const t = a * n
                          , i = t - n
                          , s = t + n;
                        for (let a = 0; a !== n; ++a) {
                            const n = e[t + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break
                            }
                        }
                    }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const i = a * n
                          , r = s * n;
                        for (let t = 0; t !== n; ++t)
                            e[r + t] = e[i + t]
                    }
                    ++s
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for (let t = r * n, i = s * n, a = 0; a !== n; ++a)
                    e[i + a] = e[t + a];
                ++s
            }
            return s !== t.length ? (this.times = mr.arraySlice(t, 0, s),
            this.values = mr.arraySlice(e, 0, s * n)) : (this.times = t,
            this.values = e),
            this
        }
        clone() {
            const t = mr.arraySlice(this.times, 0)
              , e = mr.arraySlice(this.values, 0)
              , n = new (0,
            this.constructor)(this.name,t,e);
            return n.createInterpolant = this.createInterpolant,
            n
        }
    }
    xr.prototype.TimeBufferType = Float32Array,
    xr.prototype.ValueBufferType = Float32Array,
    xr.prototype.DefaultInterpolation = P;
    class _r extends xr {
    }
    _r.prototype.ValueTypeName = "bool",
    _r.prototype.ValueBufferType = Array,
    _r.prototype.DefaultInterpolation = R,
    _r.prototype.InterpolantFactoryMethodLinear = void 0,
    _r.prototype.InterpolantFactoryMethodSmooth = void 0;
    class br extends xr {
    }
    br.prototype.ValueTypeName = "color";
    class wr extends xr {
    }
    function Mr(t, e, n, i) {
        fr.call(this, t, e, n, i)
    }
    wr.prototype.ValueTypeName = "number",
    Mr.prototype = Object.assign(Object.create(fr.prototype), {
        constructor: Mr,
        interpolate_: function(t, e, n, i) {
            const r = this.resultBuffer
              , s = this.sampleValues
              , a = this.valueSize
              , o = (n - e) / (i - e);
            let l = t * a;
            for (let t = l + a; l !== t; l += 4)
                B.slerpFlat(r, 0, s, l - a, s, l, o);
            return r
        }
    });
    class Sr extends xr {
        InterpolantFactoryMethodLinear(t) {
            return new Mr(this.times,this.values,this.getValueSize(),t)
        }
    }
    Sr.prototype.ValueTypeName = "quaternion",
    Sr.prototype.DefaultInterpolation = P,
    Sr.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Er extends xr {
    }
    Er.prototype.ValueTypeName = "string",
    Er.prototype.ValueBufferType = Array,
    Er.prototype.DefaultInterpolation = R,
    Er.prototype.InterpolantFactoryMethodLinear = void 0,
    Er.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Tr extends xr {
    }
    Tr.prototype.ValueTypeName = "vector";
    class Ar {
        constructor(t, e=-1, n, i=2500) {
            this.name = t,
            this.tracks = n,
            this.duration = e,
            this.blendMode = i,
            this.uuid = F.generateUUID(),
            this.duration < 0 && this.resetDuration()
        }
        static parse(t) {
            const e = []
              , n = t.tracks
              , i = 1 / (t.fps || 1);
            for (let t = 0, r = n.length; t !== r; ++t)
                e.push(Lr(n[t]).scale(i));
            const r = new this(t.name,t.duration,e,t.blendMode);
            return r.uuid = t.uuid,
            r
        }
        static toJSON(t) {
            const e = []
              , n = t.tracks
              , i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for (let t = 0, i = n.length; t !== i; ++t)
                e.push(xr.toJSON(n[t]));
            return i
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
            const r = e.length
              , s = [];
            for (let t = 0; t < r; t++) {
                let a = []
                  , o = [];
                a.push((t + r - 1) % r, t, (t + 1) % r),
                o.push(0, 1, 0);
                const l = mr.getKeyframeOrder(a);
                a = mr.sortedArray(a, 1, l),
                o = mr.sortedArray(o, 1, l),
                i || 0 !== a[0] || (a.push(r),
                o.push(o[0])),
                s.push(new wr(".morphTargetInfluences[" + e[t].name + "]",a,o).scale(1 / n))
            }
            return new this(t,-1,s)
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const e = t;
                n = e.geometry && e.geometry.animations || e.animations
            }
            for (let t = 0; t < n.length; t++)
                if (n[t].name === e)
                    return n[t];
            return null
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const i = {}
              , r = /^([\w-]*?)([\d]+)$/;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e]
                  , s = n.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = i[t];
                    e || (i[t] = e = []),
                    e.push(n)
                }
            }
            const s = [];
            for (const t in i)
                s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
            return s
        }
        static parseAnimation(t, e) {
            if (!t)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            const n = function(t, e, n, i, r) {
                if (0 !== n.length) {
                    const s = []
                      , a = [];
                    mr.flattenJSON(n, s, a, i),
                    0 !== s.length && r.push(new t(e,s,a))
                }
            }
              , i = []
              , r = t.name || "default"
              , s = t.fps || 30
              , a = t.blendMode;
            let o = t.length || -1;
            const l = t.hierarchy || [];
            for (let t = 0; t < l.length; t++) {
                const r = l[t].keys;
                if (r && 0 !== r.length)
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for (e = 0; e < r.length; e++)
                            if (r[e].morphTargets)
                                for (let n = 0; n < r[e].morphTargets.length; n++)
                                    t[r[e].morphTargets[n]] = -1;
                        for (const n in t) {
                            const t = []
                              , s = [];
                            for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                                const i = r[e];
                                t.push(i.time),
                                s.push(i.morphTarget === n ? 1 : 0)
                            }
                            i.push(new wr(".morphTargetInfluence[" + n + "]",t,s))
                        }
                        o = t.length * (s || 1)
                    } else {
                        const s = ".bones[" + e[t].name + "]";
                        n(Tr, s + ".position", r, "pos", i),
                        n(Sr, s + ".quaternion", r, "rot", i),
                        n(Tr, s + ".scale", r, "scl", i)
                    }
            }
            if (0 === i.length)
                return null;
            return new this(r,o,i,a)
        }
        resetDuration() {
            let t = 0;
            for (let e = 0, n = this.tracks.length; e !== n; ++e) {
                const n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1])
            }
            return this.duration = t,
            this
        }
        trim() {
            for (let t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        }
        validate() {
            let t = !0;
            for (let e = 0; e < this.tracks.length; e++)
                t = t && this.tracks[e].validate();
            return t
        }
        optimize() {
            for (let t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        }
        clone() {
            const t = [];
            for (let e = 0; e < this.tracks.length; e++)
                t.push(this.tracks[e].clone());
            return new this.constructor(this.name,this.duration,t,this.blendMode)
        }
        toJSON() {
            return this.constructor.toJSON(this)
        }
    }
    function Lr(t) {
        if (void 0 === t.type)
            throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return wr;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return Tr;
            case "color":
                return br;
            case "quaternion":
                return Sr;
            case "bool":
            case "boolean":
                return _r;
            case "string":
                return Er
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            const e = []
              , n = [];
            mr.flattenJSON(t.keys, e, n, "value"),
            t.times = e,
            t.values = n
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
    }
    const Rr = {};
    function Pr(t) {
        dr.call(this, t)
    }
    Pr.prototype = Object.assign(Object.create(dr.prototype), {
        constructor: Pr,
        load: function(t, e, n, i) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            const r = this
              , s = cr.get(t);
            if (void 0 !== s)
                return r.manager.itemStart(t),
                setTimeout((function() {
                    e && e(s),
                    r.manager.itemEnd(t)
                }
                ), 0),
                s;
            if (void 0 !== Rr[t])
                return void Rr[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: i
                });
            const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            let o;
            if (a) {
                const n = a[1]
                  , s = !!a[2];
                let o = a[3];
                o = decodeURIComponent(o),
                s && (o = atob(o));
                try {
                    let i;
                    const s = (this.responseType || "").toLowerCase();
                    switch (s) {
                    case "arraybuffer":
                    case "blob":
                        const t = new Uint8Array(o.length);
                        for (let e = 0; e < o.length; e++)
                            t[e] = o.charCodeAt(e);
                        i = "blob" === s ? new Blob([t.buffer],{
                            type: n
                        }) : t.buffer;
                        break;
                    case "document":
                        const e = new DOMParser;
                        i = e.parseFromString(o, n);
                        break;
                    case "json":
                        i = JSON.parse(o);
                        break;
                    default:
                        i = o
                    }
                    setTimeout((function() {
                        e && e(i),
                        r.manager.itemEnd(t)
                    }
                    ), 0)
                } catch (e) {
                    setTimeout((function() {
                        i && i(e),
                        r.manager.itemError(t),
                        r.manager.itemEnd(t)
                    }
                    ), 0)
                }
            } else {
                Rr[t] = [],
                Rr[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: i
                }),
                o = new XMLHttpRequest,
                o.open("GET", t, !0),
                o.addEventListener("load", (function(e) {
                    const n = this.response
                      , i = Rr[t];
                    if (delete Rr[t],
                    200 === this.status || 0 === this.status) {
                        0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                        cr.add(t, n);
                        for (let t = 0, e = i.length; t < e; t++) {
                            const e = i[t];
                            e.onLoad && e.onLoad(n)
                        }
                        r.manager.itemEnd(t)
                    } else {
                        for (let t = 0, n = i.length; t < n; t++) {
                            const n = i[t];
                            n.onError && n.onError(e)
                        }
                        r.manager.itemError(t),
                        r.manager.itemEnd(t)
                    }
                }
                ), !1),
                o.addEventListener("progress", (function(e) {
                    const n = Rr[t];
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t];
                        i.onProgress && i.onProgress(e)
                    }
                }
                ), !1),
                o.addEventListener("error", (function(e) {
                    const n = Rr[t];
                    delete Rr[t];
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t];
                        i.onError && i.onError(e)
                    }
                    r.manager.itemError(t),
                    r.manager.itemEnd(t)
                }
                ), !1),
                o.addEventListener("abort", (function(e) {
                    const n = Rr[t];
                    delete Rr[t];
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t];
                        i.onError && i.onError(e)
                    }
                    r.manager.itemError(t),
                    r.manager.itemEnd(t)
                }
                ), !1),
                void 0 !== this.responseType && (o.responseType = this.responseType),
                void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials),
                o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (const t in this.requestHeader)
                    o.setRequestHeader(t, this.requestHeader[t]);
                o.send(null)
            }
            return r.manager.itemStart(t),
            o
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setMimeType: function(t) {
            return this.mimeType = t,
            this
        }
    });
    class Cr extends Te {
        constructor(t) {
            super(),
            this.type = "ShadowMaterial",
            this.color = new J(0),
            this.transparent = !0,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this
        }
    }
    function Dr(t) {
        const e = {};
        for (const n in t) {
            e[n] = {};
            for (const i in t[n]) {
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
        }
        return e
    }
    function Nr(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = Dr(t[n]);
            for (const t in i)
                e[t] = i[t]
        }
        return e
    }
    Cr.prototype.isShadowMaterial = !0;
    const Ir = {
        clone: Dr,
        merge: Nr
    };
    function Or(t) {
        Te.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
        this.fragmentShader = "\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    Or.prototype = Object.create(Te.prototype),
    Or.prototype.constructor = Or,
    Or.prototype.isShaderMaterial = !0,
    Or.prototype.copy = function(t) {
        return Te.prototype.copy.call(this, t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = Dr(t.uniforms),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.extensions = Object.assign({}, t.extensions),
        this.glslVersion = t.glslVersion,
        this
    }
    ,
    Or.prototype.toJSON = function(t) {
        const e = Te.prototype.toJSON.call(this, t);
        e.glslVersion = this.glslVersion,
        e.uniforms = {};
        for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
                type: "t",
                value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
                type: "c",
                value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
                type: "v2",
                value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
                type: "v3",
                value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
                type: "v4",
                value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
                type: "m3",
                value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
                type: "m4",
                value: i.toArray()
            } : e.uniforms[n] = {
                value: i
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader;
        const n = {};
        for (const t in this.extensions)
            !0 === this.extensions[t] && (n[t] = !0);
        return Object.keys(n).length > 0 && (e.extensions = n),
        e
    }
    ;
    class zr extends Or {
        constructor(t) {
            super(t),
            this.type = "RawShaderMaterial"
        }
    }
    function Ur(t) {
        Te.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new J(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new J(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new V(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.flatShading = !1,
        this.vertexTangents = !1,
        this.setValues(t)
    }
    function Fr(t) {
        Ur.call(this),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.clearcoat = 0,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new V(1,1),
        this.clearcoatNormalMap = null,
        this.reflectivity = .5,
        Object.defineProperty(this, "ior", {
            get: function() {
                return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
            },
            set: function(t) {
                this.reflectivity = F.clamp(2.5 * (t - 1) / (t + 1), 0, 1)
            }
        }),
        this.sheen = null,
        this.transmission = 0,
        this.transmissionMap = null,
        this.setValues(t)
    }
    zr.prototype.isRawShaderMaterial = !0,
    Ur.prototype = Object.create(Te.prototype),
    Ur.prototype.constructor = Ur,
    Ur.prototype.isMeshStandardMaterial = !0,
    Ur.prototype.copy = function(t) {
        return Te.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.flatShading = t.flatShading,
        this.vertexTangents = t.vertexTangents,
        this
    }
    ,
    Fr.prototype = Object.create(Ur.prototype),
    Fr.prototype.constructor = Fr,
    Fr.prototype.isMeshPhysicalMaterial = !0,
    Fr.prototype.copy = function(t) {
        return Ur.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.clearcoat = t.clearcoat,
        this.clearcoatMap = t.clearcoatMap,
        this.clearcoatRoughness = t.clearcoatRoughness,
        this.clearcoatRoughnessMap = t.clearcoatRoughnessMap,
        this.clearcoatNormalMap = t.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
        this.reflectivity = t.reflectivity,
        t.sheen ? this.sheen = (this.sheen || new J).copy(t.sheen) : this.sheen = null,
        this.transmission = t.transmission,
        this.transmissionMap = t.transmissionMap,
        this
    }
    ;
    class Br extends Te {
        constructor(t) {
            super(),
            this.type = "MeshPhongMaterial",
            this.color = new J(16777215),
            this.specular = new J(1118481),
            this.shininess = 30,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new J(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new V(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.specular.copy(t.specular),
            this.shininess = t.shininess,
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this.flatShading = t.flatShading,
            this
        }
    }
    Br.prototype.isMeshPhongMaterial = !0;
    class Gr extends Te {
        constructor(t) {
            super(),
            this.defines = {
                TOON: ""
            },
            this.type = "MeshToonMaterial",
            this.color = new J(16777215),
            this.map = null,
            this.gradientMap = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new J(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new V(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.gradientMap = t.gradientMap,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.alphaMap = t.alphaMap,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
    }
    Gr.prototype.isMeshToonMaterial = !0;
    class kr extends Te {
        constructor(t) {
            super(),
            this.type = "MeshNormalMaterial",
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new V(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this.flatShading = t.flatShading,
            this
        }
    }
    kr.prototype.isMeshNormalMaterial = !0;
    class Hr extends Te {
        constructor(t) {
            super(),
            this.type = "MeshLambertMaterial",
            this.color = new J(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new J(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.color.copy(t.color),
            this.map = t.map,
            this.lightMap = t.lightMap,
            this.lightMapIntensity = t.lightMapIntensity,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.emissive.copy(t.emissive),
            this.emissiveMap = t.emissiveMap,
            this.emissiveIntensity = t.emissiveIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this
        }
    }
    Hr.prototype.isMeshLambertMaterial = !0;
    class Vr extends Te {
        constructor(t) {
            super(),
            this.type = "MeshDepthMaterial",
            this.depthPacking = 3200,
            this.skinning = !1,
            this.morphTargets = !1,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.depthPacking = t.depthPacking,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this
        }
    }
    Vr.prototype.isMeshDepthMaterial = !0;
    class Wr extends Te {
        constructor(t) {
            super(),
            this.type = "MeshDistanceMaterial",
            this.referencePosition = new G,
            this.nearDistance = 1,
            this.farDistance = 1e3,
            this.skinning = !1,
            this.morphTargets = !1,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.fog = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.referencePosition.copy(t.referencePosition),
            this.nearDistance = t.nearDistance,
            this.farDistance = t.farDistance,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.map = t.map,
            this.alphaMap = t.alphaMap,
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this
        }
    }
    Wr.prototype.isMeshDistanceMaterial = !0;
    class jr extends Te {
        constructor(t) {
            super(),
            this.defines = {
                MATCAP: ""
            },
            this.type = "MeshMatcapMaterial",
            this.color = new J(16777215),
            this.matcap = null,
            this.map = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new V(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.flatShading = !1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.defines = {
                MATCAP: ""
            },
            this.color.copy(t.color),
            this.matcap = t.matcap,
            this.map = t.map,
            this.bumpMap = t.bumpMap,
            this.bumpScale = t.bumpScale,
            this.normalMap = t.normalMap,
            this.normalMapType = t.normalMapType,
            this.normalScale.copy(t.normalScale),
            this.displacementMap = t.displacementMap,
            this.displacementScale = t.displacementScale,
            this.displacementBias = t.displacementBias,
            this.alphaMap = t.alphaMap,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this.flatShading = t.flatShading,
            this
        }
    }
    jr.prototype.isMeshMatcapMaterial = !0;
    class Xr extends zn {
        constructor(t) {
            super(),
            this.type = "LineDashedMaterial",
            this.scale = 1,
            this.dashSize = 3,
            this.gapSize = 1,
            this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
            this.scale = t.scale,
            this.dashSize = t.dashSize,
            this.gapSize = t.gapSize,
            this
        }
    }
    Xr.prototype.isLineDashedMaterial = !0;
    class qr extends dr {
        constructor(t) {
            super(t),
            this.textures = {}
        }
        load(t, e, n, i) {
            const r = this
              , s = new Pr(r.manager);
            s.setPath(r.path),
            s.setRequestHeader(r.requestHeader),
            s.setWithCredentials(r.withCredentials),
            s.load(t, (function(n) {
                try {
                    e(r.parse(JSON.parse(n)))
                } catch (e) {
                    i ? i(e) : console.error(e),
                    r.manager.itemError(t)
                }
            }
            ), n, i)
        }
        parse(t) {
            const e = this.textures;
            function i(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                e[t]
            }
            const r = new n[t.type];
            if (void 0 !== t.uuid && (r.uuid = t.uuid),
            void 0 !== t.name && (r.name = t.name),
            void 0 !== t.color && void 0 !== r.color && r.color.setHex(t.color),
            void 0 !== t.roughness && (r.roughness = t.roughness),
            void 0 !== t.metalness && (r.metalness = t.metalness),
            void 0 !== t.sheen && (r.sheen = (new J).setHex(t.sheen)),
            void 0 !== t.emissive && void 0 !== r.emissive && r.emissive.setHex(t.emissive),
            void 0 !== t.specular && void 0 !== r.specular && r.specular.setHex(t.specular),
            void 0 !== t.shininess && (r.shininess = t.shininess),
            void 0 !== t.clearcoat && (r.clearcoat = t.clearcoat),
            void 0 !== t.clearcoatRoughness && (r.clearcoatRoughness = t.clearcoatRoughness),
            void 0 !== t.fog && (r.fog = t.fog),
            void 0 !== t.flatShading && (r.flatShading = t.flatShading),
            void 0 !== t.blending && (r.blending = t.blending),
            void 0 !== t.combine && (r.combine = t.combine),
            void 0 !== t.side && (r.side = t.side),
            void 0 !== t.opacity && (r.opacity = t.opacity),
            void 0 !== t.transparent && (r.transparent = t.transparent),
            void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (r.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite),
            void 0 !== t.stencilWrite && (r.stencilWrite = t.stencilWrite),
            void 0 !== t.stencilWriteMask && (r.stencilWriteMask = t.stencilWriteMask),
            void 0 !== t.stencilFunc && (r.stencilFunc = t.stencilFunc),
            void 0 !== t.stencilRef && (r.stencilRef = t.stencilRef),
            void 0 !== t.stencilFuncMask && (r.stencilFuncMask = t.stencilFuncMask),
            void 0 !== t.stencilFail && (r.stencilFail = t.stencilFail),
            void 0 !== t.stencilZFail && (r.stencilZFail = t.stencilZFail),
            void 0 !== t.stencilZPass && (r.stencilZPass = t.stencilZPass),
            void 0 !== t.wireframe && (r.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.rotation && (r.rotation = t.rotation),
            1 !== t.linewidth && (r.linewidth = t.linewidth),
            void 0 !== t.dashSize && (r.dashSize = t.dashSize),
            void 0 !== t.gapSize && (r.gapSize = t.gapSize),
            void 0 !== t.scale && (r.scale = t.scale),
            void 0 !== t.polygonOffset && (r.polygonOffset = t.polygonOffset),
            void 0 !== t.polygonOffsetFactor && (r.polygonOffsetFactor = t.polygonOffsetFactor),
            void 0 !== t.polygonOffsetUnits && (r.polygonOffsetUnits = t.polygonOffsetUnits),
            void 0 !== t.skinning && (r.skinning = t.skinning),
            void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets),
            void 0 !== t.morphNormals && (r.morphNormals = t.morphNormals),
            void 0 !== t.dithering && (r.dithering = t.dithering),
            void 0 !== t.vertexTangents && (r.vertexTangents = t.vertexTangents),
            void 0 !== t.visible && (r.visible = t.visible),
            void 0 !== t.toneMapped && (r.toneMapped = t.toneMapped),
            void 0 !== t.userData && (r.userData = t.userData),
            void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? r.vertexColors = t.vertexColors > 0 : r.vertexColors = t.vertexColors),
            void 0 !== t.uniforms)
                for (const e in t.uniforms) {
                    const n = t.uniforms[e];
                    switch (r.uniforms[e] = {},
                    n.type) {
                    case "t":
                        r.uniforms[e].value = i(n.value);
                        break;
                    case "c":
                        r.uniforms[e].value = (new J).setHex(n.value);
                        break;
                    case "v2":
                        r.uniforms[e].value = (new V).fromArray(n.value);
                        break;
                    case "v3":
                        r.uniforms[e].value = (new G).fromArray(n.value);
                        break;
                    case "v4":
                        r.uniforms[e].value = (new O).fromArray(n.value);
                        break;
                    case "m3":
                        r.uniforms[e].value = (new Mt).fromArray(n.value);
                        break;
                    case "m4":
                        r.uniforms[e].value = (new ht).fromArray(n.value);
                        break;
                    default:
                        r.uniforms[e].value = n.value
                    }
                }
            if (void 0 !== t.defines && (r.defines = t.defines),
            void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader),
            void 0 !== t.extensions)
                for (const e in t.extensions)
                    r.extensions[e] = t.extensions[e];
            if (void 0 !== t.shading && (r.flatShading = 1 === t.shading),
            void 0 !== t.size && (r.size = t.size),
            void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (r.map = i(t.map)),
            void 0 !== t.matcap && (r.matcap = i(t.matcap)),
            void 0 !== t.alphaMap && (r.alphaMap = i(t.alphaMap)),
            void 0 !== t.bumpMap && (r.bumpMap = i(t.bumpMap)),
            void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (r.normalMap = i(t.normalMap)),
            void 0 !== t.normalMapType && (r.normalMapType = t.normalMapType),
            void 0 !== t.normalScale) {
                let e = t.normalScale;
                !1 === Array.isArray(e) && (e = [e, e]),
                r.normalScale = (new V).fromArray(e)
            }
            return void 0 !== t.displacementMap && (r.displacementMap = i(t.displacementMap)),
            void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (r.roughnessMap = i(t.roughnessMap)),
            void 0 !== t.metalnessMap && (r.metalnessMap = i(t.metalnessMap)),
            void 0 !== t.emissiveMap && (r.emissiveMap = i(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (r.specularMap = i(t.specularMap)),
            void 0 !== t.envMap && (r.envMap = i(t.envMap)),
            void 0 !== t.envMapIntensity && (r.envMapIntensity = t.envMapIntensity),
            void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity),
            void 0 !== t.refractionRatio && (r.refractionRatio = t.refractionRatio),
            void 0 !== t.lightMap && (r.lightMap = i(t.lightMap)),
            void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (r.aoMap = i(t.aoMap)),
            void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.gradientMap && (r.gradientMap = i(t.gradientMap)),
            void 0 !== t.clearcoatMap && (r.clearcoatMap = i(t.clearcoatMap)),
            void 0 !== t.clearcoatRoughnessMap && (r.clearcoatRoughnessMap = i(t.clearcoatRoughnessMap)),
            void 0 !== t.clearcoatNormalMap && (r.clearcoatNormalMap = i(t.clearcoatNormalMap)),
            void 0 !== t.clearcoatNormalScale && (r.clearcoatNormalScale = (new V).fromArray(t.clearcoatNormalScale)),
            void 0 !== t.transmission && (r.transmission = t.transmission),
            void 0 !== t.transmissionMap && (r.transmissionMap = i(t.transmissionMap)),
            r
        }
        setTextures(t) {
            return this.textures = t,
            this
        }
    }
    const Yr = function(t) {
        const e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1)
    };
    function Zr() {
        Fe.call(this),
        this.type = "InstancedBufferGeometry",
        this.instanceCount = 1 / 0
    }
    function Jr(t, e, n, i) {
        "number" == typeof n && (i = n,
        n = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        $.call(this, t, e, n),
        this.meshPerAttribute = i || 1
    }
    Zr.prototype = Object.assign(Object.create(Fe.prototype), {
        constructor: Zr,
        isInstancedBufferGeometry: !0,
        copy: function(t) {
            return Fe.prototype.copy.call(this, t),
            this.instanceCount = t.instanceCount,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            const t = Fe.prototype.toJSON.call(this);
            return t.instanceCount = this.instanceCount,
            t.isInstancedBufferGeometry = !0,
            t
        }
    }),
    Jr.prototype = Object.assign(Object.create($.prototype), {
        constructor: Jr,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return $.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        },
        toJSON: function() {
            const t = $.prototype.toJSON.call(this);
            return t.meshPerAttribute = this.meshPerAttribute,
            t.isInstancedBufferAttribute = !0,
            t
        }
    });
    class Kr extends dr {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            const r = this
              , s = new Pr(r.manager);
            s.setPath(r.path),
            s.setRequestHeader(r.requestHeader),
            s.setWithCredentials(r.withCredentials),
            s.load(t, (function(n) {
                try {
                    e(r.parse(JSON.parse(n)))
                } catch (e) {
                    i ? i(e) : console.error(e),
                    r.manager.itemError(t)
                }
            }
            ), n, i)
        }
        parse(t) {
            const e = {}
              , n = {};
            function i(t, i) {
                if (void 0 !== e[i])
                    return e[i];
                const r = t.interleavedBuffers[i]
                  , s = function(t, e) {
                    if (void 0 !== n[e])
                        return n[e];
                    const i = t.arrayBuffers[e]
                      , r = new Uint32Array(i).buffer;
                    return n[e] = r,
                    r
                }(t, r.buffer)
                  , a = new hn(Pe(r.type, s),r.stride);
                return a.uuid = r.uuid,
                e[i] = a,
                a
            }
            const r = t.isInstancedBufferGeometry ? new Zr : new Fe
              , s = t.data.index;
            if (void 0 !== s) {
                const t = Pe(s.type, s.array);
                r.setIndex(new $(t,1))
            }
            const a = t.data.attributes;
            for (const e in a) {
                const n = a[e];
                let s;
                if (n.isInterleavedBufferAttribute) {
                    s = new dn(i(t.data, n.data),n.itemSize,n.offset,n.normalized)
                } else {
                    const t = Pe(n.type, n.array);
                    s = new (n.isInstancedBufferAttribute ? Jr : $)(t,n.itemSize,n.normalized)
                }
                void 0 !== n.name && (s.name = n.name),
                r.setAttribute(e, s)
            }
            const o = t.data.morphAttributes;
            if (o)
                for (const e in o) {
                    const n = o[e]
                      , s = [];
                    for (let e = 0, r = n.length; e < r; e++) {
                        const r = n[e];
                        let a;
                        if (r.isInterleavedBufferAttribute) {
                            a = new dn(i(t.data, r.data),r.itemSize,r.offset,r.normalized)
                        } else {
                            a = new $(Pe(r.type, r.array),r.itemSize,r.normalized)
                        }
                        void 0 !== r.name && (a.name = r.name),
                        s.push(a)
                    }
                    r.morphAttributes[e] = s
                }
            t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
            const l = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== l)
                for (let t = 0, e = l.length; t !== e; ++t) {
                    const e = l[t];
                    r.addGroup(e.start, e.count, e.materialIndex)
                }
            const c = t.data.boundingSphere;
            if (void 0 !== c) {
                const t = new G;
                void 0 !== c.center && t.fromArray(c.center),
                r.boundingSphere = new ee(t,c.radius)
            }
            return t.name && (r.name = t.name),
            t.userData && (r.userData = t.userData),
            r
        }
    }
    class Qr extends Fe {
        constructor(t=1, e=1, n=1, i=1, r=1, s=1) {
            super(),
            this.type = "BoxGeometry",
            this.parameters = {
                width: t,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            i = Math.floor(i),
            r = Math.floor(r),
            s = Math.floor(s);
            const o = []
              , l = []
              , c = []
              , h = [];
            let u = 0
              , d = 0;
            function p(t, e, n, i, r, s, p, m, f, g, v) {
                const y = s / f
                  , x = p / g
                  , _ = s / 2
                  , b = p / 2
                  , w = m / 2
                  , M = f + 1
                  , S = g + 1;
                let E = 0
                  , T = 0;
                const A = new G;
                for (let s = 0; s < S; s++) {
                    const a = s * x - b;
                    for (let o = 0; o < M; o++) {
                        const u = o * y - _;
                        A[t] = u * i,
                        A[e] = a * r,
                        A[n] = w,
                        l.push(A.x, A.y, A.z),
                        A[t] = 0,
                        A[e] = 0,
                        A[n] = m > 0 ? 1 : -1,
                        c.push(A.x, A.y, A.z),
                        h.push(o / f),
                        h.push(1 - s / g),
                        E += 1
                    }
                }
                for (let t = 0; t < g; t++)
                    for (let e = 0; e < f; e++) {
                        const n = u + e + M * t
                          , i = u + e + M * (t + 1)
                          , r = u + (e + 1) + M * (t + 1)
                          , s = u + (e + 1) + M * t;
                        o.push(n, i, s),
                        o.push(i, r, s),
                        T += 6
                    }
                a.addGroup(d, T, v),
                d += T,
                u += E
            }
            p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
            p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
            p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
            p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
            p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
            p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
            this.setIndex(o),
            this.setAttribute("position", new lt(l,3)),
            this.setAttribute("normal", new lt(c,3)),
            this.setAttribute("uv", new lt(h,2))
        }
    }
    class $r extends Fe {
        constructor(t=1, e=8, n=0, i=2 * Math.PI) {
            super(),
            this.type = "CircleGeometry",
            this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: i
            },
            e = Math.max(3, e);
            const r = []
              , s = []
              , a = []
              , o = []
              , l = new G
              , c = new V;
            s.push(0, 0, 0),
            a.push(0, 0, 1),
            o.push(.5, .5);
            for (let r = 0, h = 3; r <= e; r++,
            h += 3) {
                const u = n + r / e * i;
                l.x = t * Math.cos(u),
                l.y = t * Math.sin(u),
                s.push(l.x, l.y, l.z),
                a.push(0, 0, 1),
                c.x = (s[h] / t + 1) / 2,
                c.y = (s[h + 1] / t + 1) / 2,
                o.push(c.x, c.y)
            }
            for (let t = 1; t <= e; t++)
                r.push(t, t + 1, 0);
            this.setIndex(r),
            this.setAttribute("position", new lt(s,3)),
            this.setAttribute("normal", new lt(a,3)),
            this.setAttribute("uv", new lt(o,2))
        }
    }
    class ts extends Fe {
        constructor(t=1, e=1, n=1, i=8, r=1, s=!1, a=0, o=2 * Math.PI) {
            super(),
            this.type = "CylinderGeometry",
            this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: o
            };
            const l = this;
            i = Math.floor(i),
            r = Math.floor(r);
            const c = []
              , h = []
              , u = []
              , d = [];
            let p = 0;
            const m = []
              , f = n / 2;
            let g = 0;
            function v(n) {
                const r = p
                  , s = new V
                  , m = new G;
                let v = 0;
                const y = !0 === n ? t : e
                  , x = !0 === n ? 1 : -1;
                for (let t = 1; t <= i; t++)
                    h.push(0, f * x, 0),
                    u.push(0, x, 0),
                    d.push(.5, .5),
                    p++;
                const _ = p;
                for (let t = 0; t <= i; t++) {
                    const e = t / i * o + a
                      , n = Math.cos(e)
                      , r = Math.sin(e);
                    m.x = y * r,
                    m.y = f * x,
                    m.z = y * n,
                    h.push(m.x, m.y, m.z),
                    u.push(0, x, 0),
                    s.x = .5 * n + .5,
                    s.y = .5 * r * x + .5,
                    d.push(s.x, s.y),
                    p++
                }
                for (let t = 0; t < i; t++) {
                    const e = r + t
                      , i = _ + t;
                    !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e),
                    v += 3
                }
                l.addGroup(g, v, !0 === n ? 1 : 2),
                g += v
            }
            !function() {
                const s = new G
                  , v = new G;
                let y = 0;
                const x = (e - t) / n;
                for (let l = 0; l <= r; l++) {
                    const c = []
                      , g = l / r
                      , y = g * (e - t) + t;
                    for (let t = 0; t <= i; t++) {
                        const e = t / i
                          , r = e * o + a
                          , l = Math.sin(r)
                          , m = Math.cos(r);
                        v.x = y * l,
                        v.y = -g * n + f,
                        v.z = y * m,
                        h.push(v.x, v.y, v.z),
                        s.set(l, x, m).normalize(),
                        u.push(s.x, s.y, s.z),
                        d.push(e, 1 - g),
                        c.push(p++)
                    }
                    m.push(c)
                }
                for (let t = 0; t < i; t++)
                    for (let e = 0; e < r; e++) {
                        const n = m[e][t]
                          , i = m[e + 1][t]
                          , r = m[e + 1][t + 1]
                          , s = m[e][t + 1];
                        c.push(n, i, s),
                        c.push(i, r, s),
                        y += 6
                    }
                l.addGroup(g, y, 0),
                g += y
            }(),
            !1 === s && (t > 0 && v(!0),
            e > 0 && v(!1)),
            this.setIndex(c),
            this.setAttribute("position", new lt(h,3)),
            this.setAttribute("normal", new lt(u,3)),
            this.setAttribute("uv", new lt(d,2))
        }
    }
    class es extends ts {
        constructor(t=1, e=1, n=8, i=1, r=!1, s=0, a=2 * Math.PI) {
            super(0, t, e, n, i, r, s, a),
            this.type = "ConeGeometry",
            this.parameters = {
                radius: t,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            }
        }
    }
    class ns extends Fe {
        constructor(t, e, n=1, i=0) {
            super(),
            this.type = "PolyhedronGeometry",
            this.parameters = {
                vertices: t,
                indices: e,
                radius: n,
                detail: i
            };
            const r = []
              , s = [];
            function a(t, e, n, i) {
                const r = i + 1
                  , s = [];
                for (let i = 0; i <= r; i++) {
                    s[i] = [];
                    const a = t.clone().lerp(n, i / r)
                      , o = e.clone().lerp(n, i / r)
                      , l = r - i;
                    for (let t = 0; t <= l; t++)
                        s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l)
                }
                for (let t = 0; t < r; t++)
                    for (let e = 0; e < 2 * (r - t) - 1; e++) {
                        const n = Math.floor(e / 2);
                        e % 2 == 0 ? (o(s[t][n + 1]),
                        o(s[t + 1][n]),
                        o(s[t][n])) : (o(s[t][n + 1]),
                        o(s[t + 1][n + 1]),
                        o(s[t + 1][n]))
                    }
            }
            function o(t) {
                r.push(t.x, t.y, t.z)
            }
            function l(e, n) {
                const i = 3 * e;
                n.x = t[i + 0],
                n.y = t[i + 1],
                n.z = t[i + 2]
            }
            function c(t, e, n, i) {
                i < 0 && 1 === t.x && (s[e] = t.x - 1),
                0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5)
            }
            function h(t) {
                return Math.atan2(t.z, -t.x)
            }
            !function(t) {
                const n = new G
                  , i = new G
                  , r = new G;
                for (let s = 0; s < e.length; s += 3)
                    l(e[s + 0], n),
                    l(e[s + 1], i),
                    l(e[s + 2], r),
                    a(n, i, r, t)
            }(i),
            function(t) {
                const e = new G;
                for (let n = 0; n < r.length; n += 3)
                    e.x = r[n + 0],
                    e.y = r[n + 1],
                    e.z = r[n + 2],
                    e.normalize().multiplyScalar(t),
                    r[n + 0] = e.x,
                    r[n + 1] = e.y,
                    r[n + 2] = e.z
            }(n),
            function() {
                const t = new G;
                for (let n = 0; n < r.length; n += 3) {
                    t.x = r[n + 0],
                    t.y = r[n + 1],
                    t.z = r[n + 2];
                    const i = h(t) / 2 / Math.PI + .5
                      , a = (e = t,
                    Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                    s.push(i, 1 - a)
                }
                var e;
                (function() {
                    const t = new G
                      , e = new G
                      , n = new G
                      , i = new G
                      , a = new V
                      , o = new V
                      , l = new V;
                    for (let u = 0, d = 0; u < r.length; u += 9,
                    d += 6) {
                        t.set(r[u + 0], r[u + 1], r[u + 2]),
                        e.set(r[u + 3], r[u + 4], r[u + 5]),
                        n.set(r[u + 6], r[u + 7], r[u + 8]),
                        a.set(s[d + 0], s[d + 1]),
                        o.set(s[d + 2], s[d + 3]),
                        l.set(s[d + 4], s[d + 5]),
                        i.copy(t).add(e).add(n).divideScalar(3);
                        const p = h(i);
                        c(a, d + 0, t, p),
                        c(o, d + 2, e, p),
                        c(l, d + 4, n, p)
                    }
                }
                )(),
                function() {
                    for (let t = 0; t < s.length; t += 6) {
                        const e = s[t + 0]
                          , n = s[t + 2]
                          , i = s[t + 4]
                          , r = Math.max(e, n, i)
                          , a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1),
                        n < .2 && (s[t + 2] += 1),
                        i < .2 && (s[t + 4] += 1))
                    }
                }()
            }(),
            this.setAttribute("position", new lt(r,3)),
            this.setAttribute("normal", new lt(r.slice(),3)),
            this.setAttribute("uv", new lt(s,2)),
            0 === i ? this.computeVertexNormals() : this.normalizeNormals()
        }
    }
    class is extends ns {
        constructor(t=1, e=0) {
            const n = (1 + Math.sqrt(5)) / 2
              , i = 1 / n;
            super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e),
            this.type = "DodecahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
    }
    const rs = new G
      , ss = new G
      , as = new G
      , os = new Se;
    class ls extends Fe {
        constructor(t, e) {
            if (super(),
            this.type = "EdgesGeometry",
            this.parameters = {
                thresholdAngle: e
            },
            e = void 0 !== e ? e : 1,
            !0 === t.isGeometry)
                return void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            const n = Math.pow(10, 4)
              , i = Math.cos(F.DEG2RAD * e)
              , r = t.getIndex()
              , s = t.getAttribute("position")
              , a = r ? r.count : s.count
              , o = [0, 0, 0]
              , l = ["a", "b", "c"]
              , c = new Array(3)
              , h = {}
              , u = [];
            for (let t = 0; t < a; t += 3) {
                r ? (o[0] = r.getX(t),
                o[1] = r.getX(t + 1),
                o[2] = r.getX(t + 2)) : (o[0] = t,
                o[1] = t + 1,
                o[2] = t + 2);
                const {a: e, b: a, c: d} = os;
                if (e.fromBufferAttribute(s, o[0]),
                a.fromBufferAttribute(s, o[1]),
                d.fromBufferAttribute(s, o[2]),
                os.getNormal(as),
                c[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`,
                c[1] = `${Math.round(a.x * n)},${Math.round(a.y * n)},${Math.round(a.z * n)}`,
                c[2] = `${Math.round(d.x * n)},${Math.round(d.y * n)},${Math.round(d.z * n)}`,
                c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
                    for (let t = 0; t < 3; t++) {
                        const e = (t + 1) % 3
                          , n = c[t]
                          , r = c[e]
                          , s = os[l[t]]
                          , a = os[l[e]]
                          , d = `${n}_ ${r}`
                          , p = `${r}_ ${n}`;
                        p in h && h[p] ? (as.dot(h[p].normal) <= i && (u.push(s.x, s.y, s.z),
                        u.push(a.x, a.y, a.z)),
                        h[p] = null) : d in h || (h[d] = {
                            index0: o[t],
                            index1: o[e],
                            normal: as.clone()
                        })
                    }
            }
            for (const t in h)
                if (h[t]) {
                    const {index0: e, index1: n} = h[t];
                    rs.fromBufferAttribute(s, e),
                    ss.fromBufferAttribute(s, n),
                    u.push(rs.x, rs.y, rs.z),
                    u.push(ss.x, ss.y, ss.z)
                }
            this.setAttribute("position", new lt(u,3))
        }
    }
    const cs = function(t, e, n) {
        n = n || 2;
        const i = e && e.length
          , r = i ? e[0] * n : t.length;
        let s = hs(t, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev)
            return a;
        let o, l, c, h, u, d, p;
        if (i && (s = function(t, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for (s = 0,
            a = e.length; s < a; s++)
                o = e[s] * i,
                l = s < a - 1 ? e[s + 1] * i : t.length,
                c = hs(t, o, l, i, !1),
                c === c.next && (c.steiner = !0),
                r.push(bs(c));
            for (r.sort(vs),
            s = 0; s < r.length; s++)
                ys(r[s], n),
                n = us(n, n.next);
            return n
        }(t, e, s, n)),
        t.length > 80 * n) {
            o = c = t[0],
            l = h = t[1];
            for (let e = n; e < r; e += n)
                u = t[e],
                d = t[e + 1],
                u < o && (o = u),
                d < l && (l = d),
                u > c && (c = u),
                d > h && (h = d);
            p = Math.max(c - o, h - l),
            p = 0 !== p ? 1 / p : 0
        }
        return ds(s, a, n, o, l, p),
        a
    };
    function hs(t, e, n, i, r) {
        let s, a;
        if (r === function(t, e, n, i) {
            let r = 0;
            for (let s = e, a = n - i; s < n; s += i)
                r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]),
                a = s;
            return r
        }(t, e, n, i) > 0)
            for (s = e; s < n; s += i)
                a = Cs(s, t[s], t[s + 1], a);
        else
            for (s = n - i; s >= e; s -= i)
                a = Cs(s, t[s], t[s + 1], a);
        return a && Es(a, a.next) && (Ds(a),
        a = a.next),
        a
    }
    function us(t, e) {
        if (!t)
            return t;
        e || (e = t);
        let n, i = t;
        do {
            if (n = !1,
            i.steiner || !Es(i, i.next) && 0 !== Ss(i.prev, i, i.next))
                i = i.next;
            else {
                if (Ds(i),
                i = e = i.prev,
                i === i.next)
                    break;
                n = !0
            }
        } while (n || i !== e);
        return e
    }
    function ds(t, e, n, i, r, s, a) {
        if (!t)
            return;
        !a && s && function(t, e, n, i) {
            let r = t;
            do {
                null === r.z && (r.z = _s(r.x, r.y, e, n, i)),
                r.prevZ = r.prev,
                r.nextZ = r.next,
                r = r.next
            } while (r !== t);
            r.prevZ.nextZ = null,
            r.prevZ = null,
            function(t) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for (n = t,
                    t = null,
                    s = null,
                    a = 0; n; ) {
                        for (a++,
                        i = n,
                        o = 0,
                        e = 0; e < c && (o++,
                        i = i.nextZ,
                        i); e++)
                            ;
                        for (l = c; o > 0 || l > 0 && i; )
                            0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n,
                            n = n.nextZ,
                            o--) : (r = i,
                            i = i.nextZ,
                            l--),
                            s ? s.nextZ = r : t = r,
                            r.prevZ = s,
                            s = r;
                        n = i
                    }
                    s.nextZ = null,
                    c *= 2
                } while (a > 1)
            }(r)
        }(t, i, r, s);
        let o, l, c = t;
        for (; t.prev !== t.next; )
            if (o = t.prev,
            l = t.next,
            s ? ms(t, i, r, s) : ps(t))
                e.push(o.i / n),
                e.push(t.i / n),
                e.push(l.i / n),
                Ds(t),
                t = l.next,
                c = l.next;
            else if ((t = l) === c) {
                a ? 1 === a ? ds(t = fs(us(t), e, n), e, n, i, r, s, 2) : 2 === a && gs(t, e, n, i, r, s) : ds(us(t), e, n, i, r, s, 1);
                break
            }
    }
    function ps(t) {
        const e = t.prev
          , n = t
          , i = t.next;
        if (Ss(e, n, i) >= 0)
            return !1;
        let r = t.next.next;
        for (; r !== t.prev; ) {
            if (ws(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Ss(r.prev, r, r.next) >= 0)
                return !1;
            r = r.next
        }
        return !0
    }
    function ms(t, e, n, i) {
        const r = t.prev
          , s = t
          , a = t.next;
        if (Ss(r, s, a) >= 0)
            return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x
          , l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y
          , c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x
          , h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y
          , u = _s(o, l, e, n, i)
          , d = _s(c, h, e, n, i);
        let p = t.prevZ
          , m = t.nextZ;
        for (; p && p.z >= u && m && m.z <= d; ) {
            if (p !== t.prev && p !== t.next && ws(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ss(p.prev, p, p.next) >= 0)
                return !1;
            if (p = p.prevZ,
            m !== t.prev && m !== t.next && ws(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ss(m.prev, m, m.next) >= 0)
                return !1;
            m = m.nextZ
        }
        for (; p && p.z >= u; ) {
            if (p !== t.prev && p !== t.next && ws(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && Ss(p.prev, p, p.next) >= 0)
                return !1;
            p = p.prevZ
        }
        for (; m && m.z <= d; ) {
            if (m !== t.prev && m !== t.next && ws(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && Ss(m.prev, m, m.next) >= 0)
                return !1;
            m = m.nextZ
        }
        return !0
    }
    function fs(t, e, n) {
        let i = t;
        do {
            const r = i.prev
              , s = i.next.next;
            !Es(r, s) && Ts(r, i, i.next, s) && Rs(r, s) && Rs(s, r) && (e.push(r.i / n),
            e.push(i.i / n),
            e.push(s.i / n),
            Ds(i),
            Ds(i.next),
            i = t = s),
            i = i.next
        } while (i !== t);
        return us(i)
    }
    function gs(t, e, n, i, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for (; t !== a.prev; ) {
                if (a.i !== t.i && Ms(a, t)) {
                    let o = Ps(a, t);
                    return a = us(a, a.next),
                    o = us(o, o.next),
                    ds(a, e, n, i, r, s),
                    void ds(o, e, n, i, r, s)
                }
                t = t.next
            }
            a = a.next
        } while (a !== t)
    }
    function vs(t, e) {
        return t.x - e.x
    }
    function ys(t, e) {
        if (e = function(t, e) {
            let n = e;
            const i = t.x
              , r = t.y;
            let s, a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t <= i && t > a) {
                        if (a = t,
                        t === i) {
                            if (r === n.y)
                                return n;
                            if (r === n.next.y)
                                return n.next
                        }
                        s = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== e);
            if (!s)
                return null;
            if (i === a)
                return s;
            const o = s
              , l = s.x
              , c = s.y;
            let h, u = 1 / 0;
            n = s;
            do {
                i >= n.x && n.x >= l && i !== n.x && ws(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x),
                Rs(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && xs(s, n))) && (s = n,
                u = h)),
                n = n.next
            } while (n !== o);
            return s
        }(t, e)) {
            const n = Ps(e, t);
            us(e, e.next),
            us(n, n.next)
        }
    }
    function xs(t, e) {
        return Ss(t.prev, t, e.prev) < 0 && Ss(e.next, t, t.next) < 0
    }
    function _s(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function bs(t) {
        let e = t
          , n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e),
            e = e.next
        } while (e !== t);
        return n
    }
    function ws(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0
    }
    function Ms(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            let n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Ts(n, n.next, t, e))
                    return !0;
                n = n.next
            } while (n !== t);
            return !1
        }(t, e) && (Rs(t, e) && Rs(e, t) && function(t, e) {
            let n = t
              , i = !1;
            const r = (t.x + e.x) / 2
              , s = (t.y + e.y) / 2;
            do {
                n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i),
                n = n.next
            } while (n !== t);
            return i
        }(t, e) && (Ss(t.prev, t, e.prev) || Ss(t, e.prev, e)) || Es(t, e) && Ss(t.prev, t, t.next) > 0 && Ss(e.prev, e, e.next) > 0)
    }
    function Ss(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }
    function Es(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function Ts(t, e, n, i) {
        const r = Ls(Ss(t, e, n))
          , s = Ls(Ss(t, e, i))
          , a = Ls(Ss(n, i, t))
          , o = Ls(Ss(n, i, e));
        return r !== s && a !== o || (!(0 !== r || !As(t, n, e)) || (!(0 !== s || !As(t, i, e)) || (!(0 !== a || !As(n, t, i)) || !(0 !== o || !As(n, e, i)))))
    }
    function As(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
    }
    function Ls(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }
    function Rs(t, e) {
        return Ss(t.prev, t, t.next) < 0 ? Ss(t, e, t.next) >= 0 && Ss(t, t.prev, e) >= 0 : Ss(t, e, t.prev) < 0 || Ss(t, t.next, e) < 0
    }
    function Ps(t, e) {
        const n = new Ns(t.i,t.x,t.y)
          , i = new Ns(e.i,e.x,e.y)
          , r = t.next
          , s = e.prev;
        return t.next = e,
        e.prev = t,
        n.next = r,
        r.prev = n,
        i.next = n,
        n.prev = i,
        s.next = i,
        i.prev = s,
        i
    }
    function Cs(t, e, n, i) {
        const r = new Ns(t,e,n);
        return i ? (r.next = i.next,
        r.prev = i,
        i.next.prev = r,
        i.next = r) : (r.prev = r,
        r.next = r),
        r
    }
    function Ds(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function Ns(t, e, n) {
        this.i = t,
        this.x = e,
        this.y = n,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    const Is = {
        area: function(t) {
            const e = t.length;
            let n = 0;
            for (let i = e - 1, r = 0; r < e; i = r++)
                n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n
        },
        isClockWise: function(t) {
            return Is.area(t) < 0
        },
        triangulateShape: function(t, e) {
            const n = []
              , i = []
              , r = [];
            Os(t),
            zs(n, t);
            let s = t.length;
            e.forEach(Os);
            for (let t = 0; t < e.length; t++)
                i.push(s),
                s += e[t].length,
                zs(n, e[t]);
            const a = cs(n, i);
            for (let t = 0; t < a.length; t += 3)
                r.push(a.slice(t, t + 3));
            return r
        }
    };
    function Os(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
    }
    function zs(t, e) {
        for (let n = 0; n < e.length; n++)
            t.push(e[n].x),
            t.push(e[n].y)
    }
    class Us extends Fe {
        constructor(t, e) {
            super(),
            this.type = "ExtrudeGeometry",
            this.parameters = {
                shapes: t,
                options: e
            },
            t = Array.isArray(t) ? t : [t];
            const n = this
              , i = []
              , r = [];
            for (let e = 0, n = t.length; e < n; e++) {
                s(t[e])
            }
            function s(t) {
                const s = []
                  , a = void 0 !== e.curveSegments ? e.curveSegments : 12
                  , o = void 0 !== e.steps ? e.steps : 1;
                let l = void 0 !== e.depth ? e.depth : 100
                  , c = void 0 === e.bevelEnabled || e.bevelEnabled
                  , h = void 0 !== e.bevelThickness ? e.bevelThickness : 6
                  , u = void 0 !== e.bevelSize ? e.bevelSize : h - 2
                  , d = void 0 !== e.bevelOffset ? e.bevelOffset : 0
                  , p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath
                  , f = void 0 !== e.UVGenerator ? e.UVGenerator : Fs;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
                l = e.amount);
                let g, v, y, x, _, b = !1;
                m && (g = m.getSpacedPoints(o),
                b = !0,
                c = !1,
                v = m.computeFrenetFrames(o, !1),
                y = new G,
                x = new G,
                _ = new G),
                c || (p = 0,
                h = 0,
                u = 0,
                d = 0);
                const w = t.extractPoints(a);
                let M = w.shape;
                const S = w.holes;
                if (!Is.isClockWise(M)) {
                    M = M.reverse();
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        Is.isClockWise(e) && (S[t] = e.reverse())
                    }
                }
                const E = Is.triangulateShape(M, S)
                  , T = M;
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    M = M.concat(e)
                }
                function A(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                    e.clone().multiplyScalar(n).add(t)
                }
                const L = M.length
                  , R = E.length;
                function P(t, e, n) {
                    let i, r, s;
                    const a = t.x - e.x
                      , o = t.y - e.y
                      , l = n.x - t.x
                      , c = n.y - t.y
                      , h = a * a + o * o
                      , u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h)
                          , d = Math.sqrt(l * l + c * c)
                          , p = e.x - o / u
                          , m = e.y + a / u
                          , f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t.x,
                        r = m + o * f - t.y;
                        const g = i * i + r * r;
                        if (g <= 2)
                            return new V(i,r);
                        s = Math.sqrt(g / 2)
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0),
                        t ? (i = -o,
                        r = a,
                        s = Math.sqrt(h)) : (i = a,
                        r = o,
                        s = Math.sqrt(h / 2))
                    }
                    return new V(i / s,r / s)
                }
                const C = [];
                for (let t = 0, e = T.length, n = e - 1, i = t + 1; t < e; t++,
                n++,
                i++)
                    n === e && (n = 0),
                    i === e && (i = 0),
                    C[t] = P(T[t], T[n], T[i]);
                const D = [];
                let N, I = C.concat();
                for (let t = 0, e = S.length; t < e; t++) {
                    const e = S[t];
                    N = [];
                    for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++,
                    i++,
                    r++)
                        i === n && (i = 0),
                        r === n && (r = 0),
                        N[t] = P(e[t], e[i], e[r]);
                    D.push(N),
                    I = I.concat(N)
                }
                for (let t = 0; t < p; t++) {
                    const e = t / p
                      , n = h * Math.cos(e * Math.PI / 2)
                      , i = u * Math.sin(e * Math.PI / 2) + d;
                    for (let t = 0, e = T.length; t < e; t++) {
                        const e = A(T[t], C[t], i);
                        U(e.x, e.y, -n)
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        N = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], N[t], i);
                            U(r.x, r.y, -n)
                        }
                    }
                }
                const O = u + d;
                for (let t = 0; t < L; t++) {
                    const e = c ? A(M[t], I[t], O) : M[t];
                    b ? (x.copy(v.normals[0]).multiplyScalar(e.x),
                    y.copy(v.binormals[0]).multiplyScalar(e.y),
                    _.copy(g[0]).add(x).add(y),
                    U(_.x, _.y, _.z)) : U(e.x, e.y, 0)
                }
                for (let t = 1; t <= o; t++)
                    for (let e = 0; e < L; e++) {
                        const n = c ? A(M[e], I[e], O) : M[e];
                        b ? (x.copy(v.normals[t]).multiplyScalar(n.x),
                        y.copy(v.binormals[t]).multiplyScalar(n.y),
                        _.copy(g[t]).add(x).add(y),
                        U(_.x, _.y, _.z)) : U(n.x, n.y, l / o * t)
                    }
                for (let t = p - 1; t >= 0; t--) {
                    const e = t / p
                      , n = h * Math.cos(e * Math.PI / 2)
                      , i = u * Math.sin(e * Math.PI / 2) + d;
                    for (let t = 0, e = T.length; t < e; t++) {
                        const e = A(T[t], C[t], i);
                        U(e.x, e.y, l + n)
                    }
                    for (let t = 0, e = S.length; t < e; t++) {
                        const e = S[t];
                        N = D[t];
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = A(e[t], N[t], i);
                            b ? U(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : U(r.x, r.y, l + n)
                        }
                    }
                }
                function z(t, e) {
                    let n = t.length;
                    for (; --n >= 0; ) {
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t.length - 1);
                        for (let t = 0, n = o + 2 * p; t < n; t++) {
                            const n = L * t
                              , s = L * (t + 1);
                            B(e + i + n, e + r + n, e + r + s, e + i + s)
                        }
                    }
                }
                function U(t, e, n) {
                    s.push(t),
                    s.push(e),
                    s.push(n)
                }
                function F(t, e, r) {
                    k(t),
                    k(e),
                    k(r);
                    const s = i.length / 3
                      , a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    H(a[0]),
                    H(a[1]),
                    H(a[2])
                }
                function B(t, e, r, s) {
                    k(t),
                    k(e),
                    k(s),
                    k(e),
                    k(r),
                    k(s);
                    const a = i.length / 3
                      , o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    H(o[0]),
                    H(o[1]),
                    H(o[3]),
                    H(o[1]),
                    H(o[2]),
                    H(o[3])
                }
                function k(t) {
                    i.push(s[3 * t + 0]),
                    i.push(s[3 * t + 1]),
                    i.push(s[3 * t + 2])
                }
                function H(t) {
                    r.push(t.x),
                    r.push(t.y)
                }
                !function() {
                    const t = i.length / 3;
                    if (c) {
                        let t = 0
                          , e = L * t;
                        for (let t = 0; t < R; t++) {
                            const n = E[t];
                            F(n[2] + e, n[1] + e, n[0] + e)
                        }
                        t = o + 2 * p,
                        e = L * t;
                        for (let t = 0; t < R; t++) {
                            const n = E[t];
                            F(n[0] + e, n[1] + e, n[2] + e)
                        }
                    } else {
                        for (let t = 0; t < R; t++) {
                            const e = E[t];
                            F(e[2], e[1], e[0])
                        }
                        for (let t = 0; t < R; t++) {
                            const e = E[t];
                            F(e[0] + L * o, e[1] + L * o, e[2] + L * o)
                        }
                    }
                    n.addGroup(t, i.length / 3 - t, 0)
                }(),
                function() {
                    const t = i.length / 3;
                    let e = 0;
                    z(T, e),
                    e += T.length;
                    for (let t = 0, n = S.length; t < n; t++) {
                        const n = S[t];
                        z(n, e),
                        e += n.length
                    }
                    n.addGroup(t, i.length / 3 - t, 1)
                }()
            }
            this.setAttribute("position", new lt(i,3)),
            this.setAttribute("uv", new lt(r,2)),
            this.computeVertexNormals()
        }
        toJSON() {
            const t = Fe.prototype.toJSON.call(this);
            return function(t, e, n) {
                if (n.shapes = [],
                Array.isArray(t))
                    for (let e = 0, i = t.length; e < i; e++) {
                        const i = t[e];
                        n.shapes.push(i.uuid)
                    }
                else
                    n.shapes.push(t.uuid);
                void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n
            }(this.parameters.shapes, this.parameters.options, t)
        }
    }
    const Fs = {
        generateTopUV: function(t, e, n, i, r) {
            const s = e[3 * n]
              , a = e[3 * n + 1]
              , o = e[3 * i]
              , l = e[3 * i + 1]
              , c = e[3 * r]
              , h = e[3 * r + 1];
            return [new V(s,a), new V(o,l), new V(c,h)]
        },
        generateSideWallUV: function(t, e, n, i, r, s) {
            const a = e[3 * n]
              , o = e[3 * n + 1]
              , l = e[3 * n + 2]
              , c = e[3 * i]
              , h = e[3 * i + 1]
              , u = e[3 * i + 2]
              , d = e[3 * r]
              , p = e[3 * r + 1]
              , m = e[3 * r + 2]
              , f = e[3 * s]
              , g = e[3 * s + 1]
              , v = e[3 * s + 2];
            return Math.abs(o - h) < .01 ? [new V(a,1 - l), new V(c,1 - u), new V(d,1 - m), new V(f,1 - v)] : [new V(o,1 - l), new V(h,1 - u), new V(p,1 - m), new V(g,1 - v)]
        }
    };
    class Bs extends ns {
        constructor(t=1, e=0) {
            const n = (1 + Math.sqrt(5)) / 2;
            super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e),
            this.type = "IcosahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
    }
    class Gs extends Fe {
        constructor(t, e=12, n=0, i=2 * Math.PI) {
            super(),
            this.type = "LatheGeometry",
            this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: i
            },
            e = Math.floor(e),
            i = F.clamp(i, 0, 2 * Math.PI);
            const r = []
              , s = []
              , a = []
              , o = 1 / e
              , l = new G
              , c = new V;
            for (let r = 0; r <= e; r++) {
                const h = n + r * o * i
                  , u = Math.sin(h)
                  , d = Math.cos(h);
                for (let n = 0; n <= t.length - 1; n++)
                    l.x = t[n].x * u,
                    l.y = t[n].y,
                    l.z = t[n].x * d,
                    s.push(l.x, l.y, l.z),
                    c.x = r / e,
                    c.y = n / (t.length - 1),
                    a.push(c.x, c.y)
            }
            for (let n = 0; n < e; n++)
                for (let e = 0; e < t.length - 1; e++) {
                    const i = e + n * t.length
                      , s = i
                      , a = i + t.length
                      , o = i + t.length + 1
                      , l = i + 1;
                    r.push(s, a, l),
                    r.push(a, o, l)
                }
            if (this.setIndex(r),
            this.setAttribute("position", new lt(s,3)),
            this.setAttribute("uv", new lt(a,2)),
            this.computeVertexNormals(),
            i === 2 * Math.PI) {
                const n = this.attributes.normal.array
                  , i = new G
                  , r = new G
                  , s = new G
                  , a = e * t.length * 3;
                for (let e = 0, o = 0; e < t.length; e++,
                o += 3)
                    i.x = n[o + 0],
                    i.y = n[o + 1],
                    i.z = n[o + 2],
                    r.x = n[a + o + 0],
                    r.y = n[a + o + 1],
                    r.z = n[a + o + 2],
                    s.addVectors(i, r).normalize(),
                    n[o + 0] = n[a + o + 0] = s.x,
                    n[o + 1] = n[a + o + 1] = s.y,
                    n[o + 2] = n[a + o + 2] = s.z
            }
        }
    }
    class ks extends ns {
        constructor(t=1, e=0) {
            super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
            this.type = "OctahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
    }
    function Hs(t, e, n) {
        Fe.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        const i = []
          , r = []
          , s = []
          , a = []
          , o = 1e-5
          , l = new G
          , c = new G
          , h = new G
          , u = new G
          , d = new G;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        const p = e + 1;
        for (let i = 0; i <= n; i++) {
            const p = i / n;
            for (let n = 0; n <= e; n++) {
                const i = n / e;
                t(i, p, c),
                r.push(c.x, c.y, c.z),
                i - o >= 0 ? (t(i - o, p, h),
                u.subVectors(c, h)) : (t(i + o, p, h),
                u.subVectors(h, c)),
                p - o >= 0 ? (t(i, p - o, h),
                d.subVectors(c, h)) : (t(i, p + o, h),
                d.subVectors(h, c)),
                l.crossVectors(u, d).normalize(),
                s.push(l.x, l.y, l.z),
                a.push(i, p)
            }
        }
        for (let t = 0; t < n; t++)
            for (let n = 0; n < e; n++) {
                const e = t * p + n
                  , r = t * p + n + 1
                  , s = (t + 1) * p + n + 1
                  , a = (t + 1) * p + n;
                i.push(e, r, a),
                i.push(r, s, a)
            }
        this.setIndex(i),
        this.setAttribute("position", new lt(r,3)),
        this.setAttribute("normal", new lt(s,3)),
        this.setAttribute("uv", new lt(a,2))
    }
    Hs.prototype = Object.create(Fe.prototype),
    Hs.prototype.constructor = Hs;
    class Vs extends Fe {
        constructor(t=1, e=1, n=1, i=1) {
            super(),
            this.type = "PlaneGeometry",
            this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t / 2
              , s = e / 2
              , a = Math.floor(n)
              , o = Math.floor(i)
              , l = a + 1
              , c = o + 1
              , h = t / a
              , u = e / o
              , d = []
              , p = []
              , m = []
              , f = [];
            for (let t = 0; t < c; t++) {
                const e = t * u - s;
                for (let n = 0; n < l; n++) {
                    const i = n * h - r;
                    p.push(i, -e, 0),
                    m.push(0, 0, 1),
                    f.push(n / a),
                    f.push(1 - t / o)
                }
            }
            for (let t = 0; t < o; t++)
                for (let e = 0; e < a; e++) {
                    const n = e + l * t
                      , i = e + l * (t + 1)
                      , r = e + 1 + l * (t + 1)
                      , s = e + 1 + l * t;
                    d.push(n, i, s),
                    d.push(i, r, s)
                }
            this.setIndex(d),
            this.setAttribute("position", new lt(p,3)),
            this.setAttribute("normal", new lt(m,3)),
            this.setAttribute("uv", new lt(f,2))
        }
    }
    class Ws extends Fe {
        constructor(t=.5, e=1, n=8, i=1, r=0, s=2 * Math.PI) {
            super(),
            this.type = "RingGeometry",
            this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: s
            },
            n = Math.max(3, n);
            const a = []
              , o = []
              , l = []
              , c = [];
            let h = t;
            const u = (e - t) / (i = Math.max(1, i))
              , d = new G
              , p = new V;
            for (let t = 0; t <= i; t++) {
                for (let t = 0; t <= n; t++) {
                    const i = r + t / n * s;
                    d.x = h * Math.cos(i),
                    d.y = h * Math.sin(i),
                    o.push(d.x, d.y, d.z),
                    l.push(0, 0, 1),
                    p.x = (d.x / e + 1) / 2,
                    p.y = (d.y / e + 1) / 2,
                    c.push(p.x, p.y)
                }
                h += u
            }
            for (let t = 0; t < i; t++) {
                const e = t * (n + 1);
                for (let t = 0; t < n; t++) {
                    const i = t + e
                      , r = i
                      , s = i + n + 1
                      , o = i + n + 2
                      , l = i + 1;
                    a.push(r, s, l),
                    a.push(s, o, l)
                }
            }
            this.setIndex(a),
            this.setAttribute("position", new lt(o,3)),
            this.setAttribute("normal", new lt(l,3)),
            this.setAttribute("uv", new lt(c,2))
        }
    }
    class js extends Fe {
        constructor(t, e=12) {
            super(),
            this.type = "ShapeGeometry",
            this.parameters = {
                shapes: t,
                curveSegments: e
            };
            const n = []
              , i = []
              , r = []
              , s = [];
            let a = 0
              , o = 0;
            if (!1 === Array.isArray(t))
                l(t);
            else
                for (let e = 0; e < t.length; e++)
                    l(t[e]),
                    this.addGroup(a, o, e),
                    a += o,
                    o = 0;
            function l(t) {
                const a = i.length / 3
                  , l = t.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === Is.isClockWise(c) && (c = c.reverse());
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    !0 === Is.isClockWise(e) && (h[t] = e.reverse())
                }
                const u = Is.triangulateShape(c, h);
                for (let t = 0, e = h.length; t < e; t++) {
                    const e = h[t];
                    c = c.concat(e)
                }
                for (let t = 0, e = c.length; t < e; t++) {
                    const e = c[t];
                    i.push(e.x, e.y, 0),
                    r.push(0, 0, 1),
                    s.push(e.x, e.y)
                }
                for (let t = 0, e = u.length; t < e; t++) {
                    const e = u[t]
                      , i = e[0] + a
                      , r = e[1] + a
                      , s = e[2] + a;
                    n.push(i, r, s),
                    o += 3
                }
            }
            this.setIndex(n),
            this.setAttribute("position", new lt(i,3)),
            this.setAttribute("normal", new lt(r,3)),
            this.setAttribute("uv", new lt(s,2))
        }
        toJSON() {
            const t = Fe.prototype.toJSON.call(this);
            return function(t, e) {
                if (e.shapes = [],
                Array.isArray(t))
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = t[n];
                        e.shapes.push(i.uuid)
                    }
                else
                    e.shapes.push(t.uuid);
                return e
            }(this.parameters.shapes, t)
        }
    }
    class Xs extends Fe {
        constructor(t=1, e=8, n=6, i=0, r=2 * Math.PI, s=0, a=Math.PI) {
            super(),
            this.type = "SphereGeometry",
            this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            },
            e = Math.max(3, Math.floor(e)),
            n = Math.max(2, Math.floor(n));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = []
              , h = new G
              , u = new G
              , d = []
              , p = []
              , m = []
              , f = [];
            for (let d = 0; d <= n; d++) {
                const g = []
                  , v = d / n;
                let y = 0;
                0 == d && 0 == s ? y = .5 / e : d == n && o == Math.PI && (y = -.5 / e);
                for (let n = 0; n <= e; n++) {
                    const o = n / e;
                    h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a),
                    h.y = t * Math.cos(s + v * a),
                    h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a),
                    p.push(h.x, h.y, h.z),
                    u.copy(h).normalize(),
                    m.push(u.x, u.y, u.z),
                    f.push(o + y, 1 - v),
                    g.push(l++)
                }
                c.push(g)
            }
            for (let t = 0; t < n; t++)
                for (let i = 0; i < e; i++) {
                    const e = c[t][i + 1]
                      , r = c[t][i]
                      , a = c[t + 1][i]
                      , l = c[t + 1][i + 1];
                    (0 !== t || s > 0) && d.push(e, r, l),
                    (t !== n - 1 || o < Math.PI) && d.push(r, a, l)
                }
            this.setIndex(d),
            this.setAttribute("position", new lt(p,3)),
            this.setAttribute("normal", new lt(m,3)),
            this.setAttribute("uv", new lt(f,2))
        }
    }
    class qs extends ns {
        constructor(t=1, e=0) {
            super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
            this.type = "TetrahedronGeometry",
            this.parameters = {
                radius: t,
                detail: e
            }
        }
    }
    class Ys extends Us {
        constructor(t, e={}) {
            const n = e.font;
            if (!n || !n.isFont)
                return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
                new Fe;
            const i = n.generateShapes(t, e.size);
            e.depth = void 0 !== e.height ? e.height : 50,
            void 0 === e.bevelThickness && (e.bevelThickness = 10),
            void 0 === e.bevelSize && (e.bevelSize = 8),
            void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
            super(i, e),
            this.type = "TextGeometry"
        }
    }
    class Zs extends Fe {
        constructor(t=1, e=.4, n=8, i=6, r=2 * Math.PI) {
            super(),
            this.type = "TorusGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            },
            n = Math.floor(n),
            i = Math.floor(i);
            const s = []
              , a = []
              , o = []
              , l = []
              , c = new G
              , h = new G
              , u = new G;
            for (let s = 0; s <= n; s++)
                for (let d = 0; d <= i; d++) {
                    const p = d / i * r
                      , m = s / n * Math.PI * 2;
                    h.x = (t + e * Math.cos(m)) * Math.cos(p),
                    h.y = (t + e * Math.cos(m)) * Math.sin(p),
                    h.z = e * Math.sin(m),
                    a.push(h.x, h.y, h.z),
                    c.x = t * Math.cos(p),
                    c.y = t * Math.sin(p),
                    u.subVectors(h, c).normalize(),
                    o.push(u.x, u.y, u.z),
                    l.push(d / i),
                    l.push(s / n)
                }
            for (let t = 1; t <= n; t++)
                for (let e = 1; e <= i; e++) {
                    const n = (i + 1) * t + e - 1
                      , r = (i + 1) * (t - 1) + e - 1
                      , a = (i + 1) * (t - 1) + e
                      , o = (i + 1) * t + e;
                    s.push(n, r, o),
                    s.push(r, a, o)
                }
            this.setIndex(s),
            this.setAttribute("position", new lt(a,3)),
            this.setAttribute("normal", new lt(o,3)),
            this.setAttribute("uv", new lt(l,2))
        }
    }
    class Js extends Fe {
        constructor(t=1, e=.4, n=64, i=8, r=2, s=3) {
            super(),
            this.type = "TorusKnotGeometry",
            this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: s
            },
            n = Math.floor(n),
            i = Math.floor(i);
            const a = []
              , o = []
              , l = []
              , c = []
              , h = new G
              , u = new G
              , d = new G
              , p = new G
              , m = new G
              , f = new G
              , g = new G;
            for (let a = 0; a <= n; ++a) {
                const y = a / n * r * Math.PI * 2;
                v(y, r, s, t, d),
                v(y + .01, r, s, t, p),
                f.subVectors(p, d),
                g.addVectors(p, d),
                m.crossVectors(f, g),
                g.crossVectors(m, f),
                m.normalize(),
                g.normalize();
                for (let t = 0; t <= i; ++t) {
                    const r = t / i * Math.PI * 2
                      , s = -e * Math.cos(r)
                      , p = e * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x),
                    h.y = d.y + (s * g.y + p * m.y),
                    h.z = d.z + (s * g.z + p * m.z),
                    o.push(h.x, h.y, h.z),
                    u.subVectors(h, d).normalize(),
                    l.push(u.x, u.y, u.z),
                    c.push(a / n),
                    c.push(t / i)
                }
            }
            for (let t = 1; t <= n; t++)
                for (let e = 1; e <= i; e++) {
                    const n = (i + 1) * (t - 1) + (e - 1)
                      , r = (i + 1) * t + (e - 1)
                      , s = (i + 1) * t + e
                      , o = (i + 1) * (t - 1) + e;
                    a.push(n, r, o),
                    a.push(r, s, o)
                }
            function v(t, e, n, i, r) {
                const s = Math.cos(t)
                  , a = Math.sin(t)
                  , o = n / e * t
                  , l = Math.cos(o);
                r.x = i * (2 + l) * .5 * s,
                r.y = i * (2 + l) * a * .5,
                r.z = i * Math.sin(o) * .5
            }
            this.setIndex(a),
            this.setAttribute("position", new lt(o,3)),
            this.setAttribute("normal", new lt(l,3)),
            this.setAttribute("uv", new lt(c,2))
        }
    }
    class Ks extends Fe {
        constructor(t, e=64, n=1, i=8, r=!1) {
            super(),
            this.type = "TubeGeometry",
            this.parameters = {
                path: t,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            };
            const s = t.computeFrenetFrames(e, r);
            this.tangents = s.tangents,
            this.normals = s.normals,
            this.binormals = s.binormals;
            const a = new G
              , o = new G
              , l = new V;
            let c = new G;
            const h = []
              , u = []
              , d = []
              , p = [];
            function m(r) {
                c = t.getPointAt(r / e, c);
                const l = s.normals[r]
                  , d = s.binormals[r];
                for (let t = 0; t <= i; t++) {
                    const e = t / i * Math.PI * 2
                      , r = Math.sin(e)
                      , s = -Math.cos(e);
                    o.x = s * l.x + r * d.x,
                    o.y = s * l.y + r * d.y,
                    o.z = s * l.z + r * d.z,
                    o.normalize(),
                    u.push(o.x, o.y, o.z),
                    a.x = c.x + n * o.x,
                    a.y = c.y + n * o.y,
                    a.z = c.z + n * o.z,
                    h.push(a.x, a.y, a.z)
                }
            }
            !function() {
                for (let t = 0; t < e; t++)
                    m(t);
                m(!1 === r ? e : 0),
                function() {
                    for (let t = 0; t <= e; t++)
                        for (let n = 0; n <= i; n++)
                            l.x = t / e,
                            l.y = n / i,
                            d.push(l.x, l.y)
                }(),
                function() {
                    for (let t = 1; t <= e; t++)
                        for (let e = 1; e <= i; e++) {
                            const n = (i + 1) * (t - 1) + (e - 1)
                              , r = (i + 1) * t + (e - 1)
                              , s = (i + 1) * t + e
                              , a = (i + 1) * (t - 1) + e;
                            p.push(n, r, a),
                            p.push(r, s, a)
                        }
                }()
            }(),
            this.setIndex(p),
            this.setAttribute("position", new lt(h,3)),
            this.setAttribute("normal", new lt(u,3)),
            this.setAttribute("uv", new lt(d,2))
        }
        toJSON() {
            const t = Fe.prototype.toJSON.call(this);
            return t.path = this.parameters.path.toJSON(),
            t
        }
    }
    class Qs extends Fe {
        constructor(t) {
            if (super(),
            this.type = "WireframeGeometry",
            !0 === t.isGeometry)
                return void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            const e = []
              , n = [0, 0]
              , i = {}
              , r = new G;
            if (null !== t.index) {
                const s = t.attributes.position
                  , a = t.index;
                let o = t.groups;
                0 === o.length && (o = [{
                    start: 0,
                    count: a.count,
                    materialIndex: 0
                }]);
                for (let t = 0, e = o.length; t < e; ++t) {
                    const e = o[t]
                      , r = e.start;
                    for (let t = r, s = r + e.count; t < s; t += 3)
                        for (let e = 0; e < 3; e++) {
                            const r = a.getX(t + e)
                              , s = a.getX(t + (e + 1) % 3);
                            n[0] = Math.min(r, s),
                            n[1] = Math.max(r, s);
                            const o = n[0] + "," + n[1];
                            void 0 === i[o] && (i[o] = {
                                index1: n[0],
                                index2: n[1]
                            })
                        }
                }
                for (const t in i) {
                    const n = i[t];
                    r.fromBufferAttribute(s, n.index1),
                    e.push(r.x, r.y, r.z),
                    r.fromBufferAttribute(s, n.index2),
                    e.push(r.x, r.y, r.z)
                }
            } else {
                const n = t.attributes.position;
                for (let t = 0, i = n.count / 3; t < i; t++)
                    for (let i = 0; i < 3; i++) {
                        const s = 3 * t + i;
                        r.fromBufferAttribute(n, s),
                        e.push(r.x, r.y, r.z);
                        const a = 3 * t + (i + 1) % 3;
                        r.fromBufferAttribute(n, a),
                        e.push(r.x, r.y, r.z)
                    }
            }
            this.setAttribute("position", new lt(e,3))
        }
    }
    const $s = {
        UVMapping: 300,
        CubeReflectionMapping: o,
        CubeRefractionMapping: l,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        CubeUVReflectionMapping: c,
        CubeUVRefractionMapping: h
    }
      , ta = {
        RepeatWrapping: u,
        ClampToEdgeWrapping: d,
        MirroredRepeatWrapping: p
    }
      , ea = {
        NearestFilter: m,
        NearestMipmapNearestFilter: f,
        NearestMipmapLinearFilter: g,
        LinearFilter: v,
        LinearMipmapNearestFilter: 1007,
        LinearMipmapLinearFilter: y
    };
    function na() {
        let t = null
          , e = !1
          , n = null
          , i = null;
        function r(e, s) {
            n(e, s),
            i = t.requestAnimationFrame(r)
        }
        return {
            start: function() {
                !0 !== e && null !== n && (i = t.requestAnimationFrame(r),
                e = !0)
            },
            stop: function() {
                t.cancelAnimationFrame(i),
                e = !1
            },
            setAnimationLoop: function(t) {
                n = t
            },
            setContext: function(e) {
                t = e
            }
        }
    }
    function ia(t, e) {
        const n = e.isWebGL2
          , i = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                i.get(t)
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t.deleteBuffer(n.buffer),
                i.delete(e))
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t = i.get(e);
                    return void ((!t || t.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }))
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                void 0 === s ? i.set(e, function(e, i) {
                    const r = e.array
                      , s = e.usage
                      , a = t.createBuffer();
                    t.bindBuffer(i, a),
                    t.bufferData(i, r, s),
                    e.onUploadCallback();
                    let o = t.FLOAT;
                    return r instanceof Float32Array ? o = t.FLOAT : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = t.HALF_FLOAT : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = t.UNSIGNED_SHORT : r instanceof Int16Array ? o = t.SHORT : r instanceof Uint32Array ? o = t.UNSIGNED_INT : r instanceof Int32Array ? o = t.INT : r instanceof Int8Array ? o = t.BYTE : r instanceof Uint8Array && (o = t.UNSIGNED_BYTE),
                    {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(e, r)) : s.version < e.version && (!function(e, i, r) {
                    const s = i.array
                      , a = i.updateRange;
                    t.bindBuffer(r, e),
                    -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)),
                    a.count = -1)
                }(s.buffer, e, r),
                s.version = e.version)
            }
        }
    }
    const ra = {
        alphamap_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
        alphamap_pars_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
        alphatest_fragment: "\n#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",
        aomap_fragment: "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n",
        aomap_pars_fragment: "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n",
        bsdfs: '\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n\n}\n\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t// page 32, equation 26: E[window1]\n\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t// this is intended to be used on spot and point lights who are represented as luminous intensity\n\t// but who must be converted to luminous irradiance for surface lighting calculation\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\tif( cutoffDistance > 0.0 ) {\n\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t}\n\n\treturn distanceFalloff;\n\n#else\n\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n#endif\n\n}\n\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick \'94\n\t// float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n} // validated\n\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\n\t// See F_Schlick\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\n\treturn Fr * fresnel + F0;\n\n}\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\t// geometry term (normalized) = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\n\t// also see #12151\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\n\treturn 1.0 / ( gl * gv );\n\n} // validated\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\t// dotNL and dotNV are explicitly swapped. This is not a mistake.\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\n\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\n\treturn specularColor * brdf.x + brdf.y;\n\n} // validated\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\t//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\t//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\n\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94\nfloat D_Charlie(float roughness, float NoH) {\n\t// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136\nfloat V_Neubelt(float NoV, float NoL) {\n\t// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\n\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n\n}\n\n#endif\n',
        bumpmap_pars_fragment: "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",
        clipping_planes_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n",
        clipping_planes_pars_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
        clipping_planes_pars_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n",
        clipping_planes_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n",
        color_fragment: "\n#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n",
        color_pars_fragment: "\n#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n",
        color_pars_vertex: "\n#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
        color_vertex: "\n#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor.xyz *= color.xyz;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n",
        common: "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\n// https://en.wikipedia.org/wiki/Relative_luminance\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\n\treturn dot( weights, color.rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n",
        cube_uv_reflection_fragment: "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\n\t\tvec2 f = fract( uv );\n\n\t\tuv += 0.5 - f;\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\n\t\t}\n\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\n\t\tuv *= texelSize;\n\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\n\t\tuv.x += texelSize;\n\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\n\t\tuv.y += texelSize;\n\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\n\t\tuv.x -= texelSize;\n\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\n\t\tvec3 tm = mix( tl, tr, f.x );\n\n\t\tvec3 bm = mix( bl, br, f.x );\n\n\t\treturn mix( tm, bm, f.y );\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= r1 ) {\n\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\n\t\t} else if ( roughness >= r4 ) {\n\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\n\t\t} else if ( roughness >= r5 ) {\n\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\n\t\t} else if ( roughness >= r6 ) {\n\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n",
        defaultnormal_vertex: "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n",
        displacementmap_pars_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",
        displacementmap_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n",
        emissivemap_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
        emissivemap_pars_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",
        encodings_fragment: "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment: "\n// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\n\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\n\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n\t// return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\n\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\n\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\t// NOTE: The implementation with min causes the shader to not compile on\n\t// a common Alcatel A502DL in Chrome 78/Android 8.1. Some research suggests \n\t// that the chipset is Mediatek MT6739 w/ IMG PowerVR GE8100 GPU.\n\t// D = min( floor( D ) / 255.0, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
        envmap_fragment: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\n\t\tenvColor = envMapTexelToLinear( envColor );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",
        envmap_common_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n",
        envmap_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n",
        envmap_pars_vertex: "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n",
        envmap_physical_pars_fragment: "\n#if defined( USE_ENVMAP )\n\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\n\tvec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\n\t\t\t// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n\t\t\t// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#else\n\n\t\t\t\t// force the bias high to get the last LOD level as it is the most blurred.\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t#else\n\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\n\t\t#endif\n\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t}\n\n\t// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\n\t\t// clamp to allowable LOD ranges.\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\n\t}\n\n\tvec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\n\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\n\t\t#endif\n\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t#endif\n\n\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t}\n\n#endif\n",
        envmap_vertex: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
        fog_vertex: "\n#ifdef USE_FOG\n\n\tfogDepth = - mvPosition.z;\n\n#endif\n",
        fog_pars_vertex: "\n#ifdef USE_FOG\n\n\tvarying float fogDepth;\n\n#endif\n",
        fog_fragment: "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
        fog_pars_fragment: "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n",
        gradientmap_pars_fragment: "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\n\t#else\n\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\n\t#endif\n\n}\n",
        lightmap_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\n\n#endif\n",
        lightmap_pars_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n",
        lights_lambert_vertex: "\nvec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\n\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n\n#ifdef DOUBLE_SIDED\n\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n\n#endif\n\n#if NUM_POINT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n/*\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\t// TODO (abelnation): implement\n\n\t}\n\n#endif\n*/\n\n#if NUM_DIR_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n",
        lights_pars_begin: "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI;\n\n\t#endif\n\n\treturn irradiance;\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\n\t\tif ( angleCos > spotLight.coneCos ) {\n\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\n\t\t} else {\n\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\n\t\t}\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tirradiance *= PI;\n\n\t\t#endif\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
        lights_toon_fragment: "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n",
        lights_toon_pars_fragment: "\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_phong_fragment: "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment: "\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment: "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n\n#ifdef REFLECTIVITY\n\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n\n#endif\n\n#ifdef CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheen;\n\n#endif\n",
        lights_physical_pars_fragment: "\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n\n};\n\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n\n// Clear coat directional hemishperical reflectance (this approximation should be improved)\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\t#ifdef CLEARCOAT\n\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tccIrradiance *= PI; // punctual light\n\n\t\t#endif\n\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\n\t#else\n\n\t\tfloat clearcoatDHR = 0.0;\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef CLEARCOAT\n\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\n\t#else\n\n\t\tfloat clearcoatDHR = 0.0;\n\n\t#endif\n\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n",
        lights_fragment_begin: "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
        lights_fragment_maps: "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\n\t#ifdef CLEARCOAT\n\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\n\t#endif\n\n#endif\n",
        lights_fragment_end: "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n",
        logdepthbuf_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n",
        logdepthbuf_pars_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n",
        logdepthbuf_pars_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n",
        logdepthbuf_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
        map_fragment: "\n#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n",
        map_pars_fragment: "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n",
        map_particle_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n",
        map_particle_pars_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
        metalnessmap_fragment: "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n",
        metalnessmap_pars_fragment: "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n",
        morphnormal_vertex: "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n#endif\n",
        morphtarget_pars_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifndef USE_MORPHNORMALS\n\n\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif\n",
        morphtarget_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n",
        normal_fragment_begin: "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n",
        normal_fragment_maps: "\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n",
        normalmap_pars_fragment: "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n\t}\n\n#endif\n",
        clearcoat_normal_fragment_begin: "\n#ifdef CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n",
        clearcoat_normal_fragment_maps: "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\n\t#endif\n\n#endif\n",
        clearcoat_pars_fragment: "\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n",
        packing: "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment: "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
        project_vertex: "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n",
        dithering_fragment: "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n",
        dithering_pars_fragment: "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n",
        roughnessmap_fragment: "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n",
        roughnessmap_pars_fragment: "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n",
        shadowmap_pars_fragment: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
        shadowmap_pars_vertex: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n",
        shadowmap_vertex: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\n\t#endif\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n",
        shadowmask_pars_fragment: "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n",
        skinbase_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n",
        skinning_pars_vertex: "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
        skinning_vertex: "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n",
        skinnormal_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n",
        specularmap_fragment: "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n",
        specularmap_pars_fragment: "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n",
        tonemapping_fragment: "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
        tonemapping_pars_fragment: "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n",
        transmissionmap_fragment: "\n#ifdef USE_TRANSMISSIONMAP\n\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n\n#endif\n",
        transmissionmap_pars_fragment: "\n#ifdef USE_TRANSMISSIONMAP\n\n\tuniform sampler2D transmissionMap;\n\n#endif\n",
        uv_pars_fragment: "\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n",
        uv_pars_vertex: "\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n",
        uv_vertex: "\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n",
        uv2_pars_fragment: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n",
        uv2_pars_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n",
        uv2_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n",
        worldpos_vertex: "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n",
        background_frag: "\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tvec4 texColor = texture2D( t2D, vUv );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        background_vert: "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n",
        cube_frag: "\n#include <envmap_common_pars_fragment>\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        cube_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
        depth_frag: "\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
        depth_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.\n// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for\n// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvHighPrecisionZW = gl_Position.zw;\n\n}\n",
        distanceRGBA_frag: "\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
        distanceRGBA_vert: "\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n",
        equirect_frag: "\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV = equirectUv( direction );\n\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
        equirect_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n",
        linedashed_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
        linedashed_vert: "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvLineDistance = scale * lineDistance;\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshbasic_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshbasic_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshlambert_frag: "\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\n\t#endif\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert: "\n#define LAMBERT\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshmatcap_frag: "\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( 1.0 );\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshmatcap_vert: "\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\t\tvNormal = normalize( transformedNormal );\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n",
        meshtoon_frag: "\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshtoon_vert: "\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshphong_frag: "\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshphong_vert: "\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        meshphysical_frag: "\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t// this is a stub for the transmission model\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
        meshphysical_vert: "\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        normal_frag: "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n}\n",
        normal_vert: "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n",
        points_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
        points_vert: "\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n",
        shadow_frag: "\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        shadow_vert: "\n#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
        sprite_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        sprite_vert: "\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n"
    }
      , sa = {
        common: {
            diffuse: {
                value: new J(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Mt
            },
            uv2Transform: {
                value: new Mt
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new V(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new J(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new J(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new Mt
            }
        },
        sprite: {
            diffuse: {
                value: new J(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new V(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new Mt
            }
        }
    }
      , aa = {
        basic: {
            uniforms: Nr([sa.common, sa.specularmap, sa.envmap, sa.aomap, sa.lightmap, sa.fog]),
            vertexShader: ra.meshbasic_vert,
            fragmentShader: ra.meshbasic_frag
        },
        lambert: {
            uniforms: Nr([sa.common, sa.specularmap, sa.envmap, sa.aomap, sa.lightmap, sa.emissivemap, sa.fog, sa.lights, {
                emissive: {
                    value: new J(0)
                }
            }]),
            vertexShader: ra.meshlambert_vert,
            fragmentShader: ra.meshlambert_frag
        },
        phong: {
            uniforms: Nr([sa.common, sa.specularmap, sa.envmap, sa.aomap, sa.lightmap, sa.emissivemap, sa.bumpmap, sa.normalmap, sa.displacementmap, sa.fog, sa.lights, {
                emissive: {
                    value: new J(0)
                },
                specular: {
                    value: new J(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: ra.meshphong_vert,
            fragmentShader: ra.meshphong_frag
        },
        standard: {
            uniforms: Nr([sa.common, sa.envmap, sa.aomap, sa.lightmap, sa.emissivemap, sa.bumpmap, sa.normalmap, sa.displacementmap, sa.roughnessmap, sa.metalnessmap, sa.fog, sa.lights, {
                emissive: {
                    value: new J(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: ra.meshphysical_vert,
            fragmentShader: ra.meshphysical_frag
        },
        toon: {
            uniforms: Nr([sa.common, sa.aomap, sa.lightmap, sa.emissivemap, sa.bumpmap, sa.normalmap, sa.displacementmap, sa.gradientmap, sa.fog, sa.lights, {
                emissive: {
                    value: new J(0)
                }
            }]),
            vertexShader: ra.meshtoon_vert,
            fragmentShader: ra.meshtoon_frag
        },
        matcap: {
            uniforms: Nr([sa.common, sa.bumpmap, sa.normalmap, sa.displacementmap, sa.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: ra.meshmatcap_vert,
            fragmentShader: ra.meshmatcap_frag
        },
        points: {
            uniforms: Nr([sa.points, sa.fog]),
            vertexShader: ra.points_vert,
            fragmentShader: ra.points_frag
        },
        dashed: {
            uniforms: Nr([sa.common, sa.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: ra.linedashed_vert,
            fragmentShader: ra.linedashed_frag
        },
        depth: {
            uniforms: Nr([sa.common, sa.displacementmap]),
            vertexShader: ra.depth_vert,
            fragmentShader: ra.depth_frag
        },
        normal: {
            uniforms: Nr([sa.common, sa.bumpmap, sa.normalmap, sa.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ra.normal_vert,
            fragmentShader: ra.normal_frag
        },
        sprite: {
            uniforms: Nr([sa.sprite, sa.fog]),
            vertexShader: ra.sprite_vert,
            fragmentShader: ra.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Mt
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: ra.background_vert,
            fragmentShader: ra.background_frag
        },
        cube: {
            uniforms: Nr([sa.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ra.cube_vert,
            fragmentShader: ra.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: ra.equirect_vert,
            fragmentShader: ra.equirect_frag
        },
        distanceRGBA: {
            uniforms: Nr([sa.common, sa.displacementmap, {
                referencePosition: {
                    value: new G
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: ra.distanceRGBA_vert,
            fragmentShader: ra.distanceRGBA_frag
        },
        shadow: {
            uniforms: Nr([sa.lights, sa.fog, {
                color: {
                    value: new J(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ra.shadow_vert,
            fragmentShader: ra.shadow_frag
        }
    };
    function oa(t, e, n, i, r) {
        const s = new J(0);
        let a, o, l = 0, h = null, u = 0, d = null;
        function p(t, e) {
            n.buffers.color.setClear(t.r, t.g, t.b, e, r)
        }
        return {
            getClearColor: function() {
                return s
            },
            setClearColor: function(t, e=1) {
                s.set(t),
                l = e,
                p(s, l)
            },
            getClearAlpha: function() {
                return l
            },
            setClearAlpha: function(t) {
                l = t,
                p(s, l)
            },
            render: function(n, r, m, f) {
                let g = !0 === r.isScene ? r.background : null;
                g && g.isTexture && (g = e.get(g));
                const v = t.xr
                  , y = v.getSession && v.getSession();
                y && "additive" === y.environmentBlendMode && (g = null),
                null === g ? p(s, l) : g && g.isColor && (p(g, 1),
                f = !0),
                (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                g && (g.isCubeTexture || g.isWebGLCubeRenderTarget || g.mapping === c) ? (void 0 === o && (o = new nn(new Qr(1,1,1),new Or({
                    name: "BackgroundCubeMaterial",
                    uniforms: Dr(aa.cube.uniforms),
                    vertexShader: aa.cube.vertexShader,
                    fragmentShader: aa.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })),
                o.geometry.deleteAttribute("normal"),
                o.geometry.deleteAttribute("uv"),
                o.onBeforeRender = function(t, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld)
                }
                ,
                Object.defineProperty(o.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value
                    }
                }),
                i.update(o)),
                g.isWebGLCubeRenderTarget && (g = g.texture),
                o.material.uniforms.envMap.value = g,
                o.material.uniforms.flipEnvMap.value = g.isCubeTexture && g._needsFlipEnvMap ? -1 : 1,
                h === g && u === g.version && d === t.toneMapping || (o.material.needsUpdate = !0,
                h = g,
                u = g.version,
                d = t.toneMapping),
                n.unshift(o, o.geometry, o.material, 0, 0, null)) : g && g.isTexture && (void 0 === a && (a = new nn(new Vs(2,2),new Or({
                    name: "BackgroundMaterial",
                    uniforms: Dr(aa.background.uniforms),
                    vertexShader: aa.background.vertexShader,
                    fragmentShader: aa.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })),
                a.geometry.deleteAttribute("normal"),
                Object.defineProperty(a.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value
                    }
                }),
                i.update(a)),
                a.material.uniforms.t2D.value = g,
                !0 === g.matrixAutoUpdate && g.updateMatrix(),
                a.material.uniforms.uvTransform.value.copy(g.matrix),
                h === g && u === g.version && d === t.toneMapping || (a.material.needsUpdate = !0,
                h = g,
                u = g.version,
                d = t.toneMapping),
                n.unshift(a, a.geometry, a.material, 0, 0, null))
            }
        }
    }
    function la(t, e, n, i) {
        const r = t.getParameter(t.MAX_VERTEX_ATTRIBS)
          , s = i.isWebGL2 ? null : e.get("OES_vertex_array_object")
          , a = i.isWebGL2 || null !== s
          , o = {}
          , l = d(null);
        let c = l;
        function h(e) {
            return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
        }
        function u(e) {
            return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
        }
        function d(t) {
            const e = []
              , n = []
              , i = [];
            for (let t = 0; t < r; t++)
                e[t] = 0,
                n[t] = 0,
                i[t] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t,
                attributes: {},
                index: null
            }
        }
        function p() {
            const t = c.newAttributes;
            for (let e = 0, n = t.length; e < n; e++)
                t[e] = 0
        }
        function m(t) {
            f(t, 0)
        }
        function f(n, r) {
            const s = c.newAttributes
              , a = c.enabledAttributes
              , o = c.attributeDivisors;
            if (s[n] = 1,
            0 === a[n] && (t.enableVertexAttribArray(n),
            a[n] = 1),
            o[n] !== r) {
                (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
                o[n] = r
            }
        }
        function g() {
            const e = c.newAttributes
              , n = c.enabledAttributes;
            for (let i = 0, r = n.length; i < r; i++)
                n[i] !== e[i] && (t.disableVertexAttribArray(i),
                n[i] = 0)
        }
        function v(e, n, r, s, a, o) {
            !0 !== i.isWebGL2 || r !== t.INT && r !== t.UNSIGNED_INT ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o)
        }
        function y() {
            x(),
            c !== l && (c = l,
            h(c.object))
        }
        function x() {
            l.geometry = null,
            l.program = null,
            l.wireframe = !1
        }
        return {
            setup: function(r, l, u, y, x) {
                let _ = !1;
                if (a) {
                    const e = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {},
                        o[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {},
                        l[n.id] = c);
                        let h = c[a];
                        void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()),
                        c[a] = h);
                        return h
                    }(y, u, l);
                    c !== e && (c = e,
                    h(c.object)),
                    _ = function(t, e) {
                        const n = c.attributes
                          , i = t.attributes;
                        let r = 0;
                        for (const t in i) {
                            const e = n[t]
                              , s = i[t];
                            if (void 0 === e)
                                return !0;
                            if (e.attribute !== s)
                                return !0;
                            if (e.data !== s.data)
                                return !0;
                            r++
                        }
                        return c.attributesNum !== r || c.index !== e
                    }(y, x),
                    _ && function(t, e) {
                        const n = {}
                          , i = t.attributes;
                        let r = 0;
                        for (const t in i) {
                            const e = i[t]
                              , s = {};
                            s.attribute = e,
                            e.data && (s.data = e.data),
                            n[t] = s,
                            r++
                        }
                        c.attributes = n,
                        c.attributesNum = r,
                        c.index = e
                    }(y, x)
                } else {
                    const t = !0 === l.wireframe;
                    c.geometry === y.id && c.program === u.id && c.wireframe === t || (c.geometry = y.id,
                    c.program = u.id,
                    c.wireframe = t,
                    _ = !0)
                }
                !0 === r.isInstancedMesh && (_ = !0),
                null !== x && n.update(x, t.ELEMENT_ARRAY_BUFFER),
                _ && (!function(r, s, a, o) {
                    if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
                        return;
                    p();
                    const l = o.attributes
                      , c = a.getAttributes()
                      , h = s.defaultAttributeValues;
                    for (const e in c) {
                        const i = c[e];
                        if (i >= 0) {
                            const s = l[e];
                            if (void 0 !== s) {
                                const e = s.normalized
                                  , r = s.itemSize
                                  , a = n.get(s);
                                if (void 0 === a)
                                    continue;
                                const l = a.buffer
                                  , c = a.type
                                  , h = a.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const n = s.data
                                      , a = n.stride
                                      , u = s.offset;
                                    n && n.isInstancedInterleavedBuffer ? (f(i, n.meshPerAttribute),
                                    void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)) : m(i),
                                    t.bindBuffer(t.ARRAY_BUFFER, l),
                                    v(i, r, c, e, a * h, u * h)
                                } else
                                    s.isInstancedBufferAttribute ? (f(i, s.meshPerAttribute),
                                    void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)) : m(i),
                                    t.bindBuffer(t.ARRAY_BUFFER, l),
                                    v(i, r, c, e, 0, 0)
                            } else if ("instanceMatrix" === e) {
                                const e = n.get(r.instanceMatrix);
                                if (void 0 === e)
                                    continue;
                                const s = e.buffer
                                  , a = e.type;
                                f(i + 0, 1),
                                f(i + 1, 1),
                                f(i + 2, 1),
                                f(i + 3, 1),
                                t.bindBuffer(t.ARRAY_BUFFER, s),
                                t.vertexAttribPointer(i + 0, 4, a, !1, 64, 0),
                                t.vertexAttribPointer(i + 1, 4, a, !1, 64, 16),
                                t.vertexAttribPointer(i + 2, 4, a, !1, 64, 32),
                                t.vertexAttribPointer(i + 3, 4, a, !1, 64, 48)
                            } else if ("instanceColor" === e) {
                                const e = n.get(r.instanceColor);
                                if (void 0 === e)
                                    continue;
                                const s = e.buffer
                                  , a = e.type;
                                f(i, 1),
                                t.bindBuffer(t.ARRAY_BUFFER, s),
                                t.vertexAttribPointer(i, 3, a, !1, 12, 0)
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n)
                                    switch (n.length) {
                                    case 2:
                                        t.vertexAttrib2fv(i, n);
                                        break;
                                    case 3:
                                        t.vertexAttrib3fv(i, n);
                                        break;
                                    case 4:
                                        t.vertexAttrib4fv(i, n);
                                        break;
                                    default:
                                        t.vertexAttrib1fv(i, n)
                                    }
                            }
                        }
                    }
                    g()
                }(r, l, u, y),
                null !== x && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(x).buffer))
            },
            reset: y,
            resetDefaultState: x,
            dispose: function() {
                y();
                for (const t in o) {
                    const e = o[t];
                    for (const t in e) {
                        const n = e[t];
                        for (const t in n)
                            u(n[t].object),
                            delete n[t];
                        delete e[t]
                    }
                    delete o[t]
                }
            },
            releaseStatesOfGeometry: function(t) {
                if (void 0 === o[t.id])
                    return;
                const e = o[t.id];
                for (const t in e) {
                    const n = e[t];
                    for (const t in n)
                        u(n[t].object),
                        delete n[t];
                    delete e[t]
                }
                delete o[t.id]
            },
            releaseStatesOfProgram: function(t) {
                for (const e in o) {
                    const n = o[e];
                    if (void 0 === n[t.id])
                        continue;
                    const i = n[t.id];
                    for (const t in i)
                        u(i[t].object),
                        delete i[t];
                    delete n[t.id]
                }
            },
            initAttributes: p,
            enableAttribute: m,
            disableUnusedAttributes: g
        }
    }
    function ca(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t) {
            s = t
        }
        ,
        this.render = function(e, i) {
            t.drawArrays(s, e, i),
            n.update(i, s, 1)
        }
        ,
        this.renderInstances = function(i, a, o) {
            if (0 === o)
                return;
            let l, c;
            if (r)
                l = t,
                c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"),
            c = "drawArraysInstancedANGLE",
            null === l)
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o),
            n.update(a, s, o)
        }
    }
    function ha(t, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)
                    return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."),
        a = o);
        const l = !0 === n.logarithmicDepthBuffer
          , c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
          , h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
          , u = t.getParameter(t.MAX_TEXTURE_SIZE)
          , d = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
          , p = t.getParameter(t.MAX_VERTEX_ATTRIBS)
          , m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)
          , f = t.getParameter(t.MAX_VARYING_VECTORS)
          , g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)
          , v = h > 0
          , y = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            getMaxAnisotropy: function() {
                if (void 0 !== i)
                    return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                } else
                    i = 0;
                return i
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: l,
            maxTextures: c,
            maxVertexTextures: h,
            maxTextureSize: u,
            maxCubemapSize: d,
            maxAttributes: p,
            maxVertexUniforms: m,
            maxVaryings: f,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y,
            maxSamples: s ? t.getParameter(t.MAX_SAMPLES) : 0
        }
    }
    function ua(t) {
        const e = this;
        let n = null
          , i = 0
          , r = !1
          , s = !1;
        const a = new pe
          , o = new Mt
          , l = {
            value: null,
            needsUpdate: !1
        };
        function c() {
            l.value !== n && (l.value = n,
            l.needsUpdate = i > 0),
            e.numPlanes = i,
            e.numIntersection = 0
        }
        function h(t, n, i, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value,
                !0 !== r || null === c) {
                    const e = i + 4 * s
                      , r = n.matrixWorldInverse;
                    o.getNormalMatrix(r),
                    (null === c || c.length < e) && (c = new Float32Array(e));
                    for (let e = 0, n = i; e !== s; ++e,
                    n += 4)
                        a.copy(t[e]).applyMatrix4(r, o),
                        a.normal.toArray(c, n),
                        c[n + 3] = a.constant
                }
                l.value = c,
                l.needsUpdate = !0
            }
            return e.numPlanes = s,
            e.numIntersection = 0,
            c
        }
        this.uniform = l,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(t, e, s) {
            const a = 0 !== t.length || e || 0 !== i || r;
            return r = e,
            n = h(t, s, 0),
            i = t.length,
            a
        }
        ,
        this.beginShadows = function() {
            s = !0,
            h(null)
        }
        ,
        this.endShadows = function() {
            s = !1,
            c()
        }
        ,
        this.setState = function(e, a, o) {
            const u = e.clippingPlanes
              , d = e.clipIntersection
              , p = e.clipShadows
              , m = t.get(e);
            if (!r || null === u || 0 === u.length || s && !p)
                s ? h(null) : c();
            else {
                const t = s ? 0 : i
                  , e = 4 * t;
                let r = m.clippingState || null;
                l.value = r,
                r = h(u, a, e, o);
                for (let t = 0; t !== e; ++t)
                    r[t] = n[t];
                m.clippingState = r,
                this.numIntersection = d ? this.numPlanes : 0,
                this.numPlanes += t
            }
        }
    }
    aa.physical = {
        uniforms: Nr([aa.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new V(1,1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: new J(0)
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            }
        }]),
        vertexShader: ra.meshphysical_vert,
        fragmentShader: ra.meshphysical_frag
    };
    class da extends yt {
        constructor(t, e, n) {
            super(),
            this.width = t,
            this.height = e,
            this.depth = 1,
            this.scissor = new O(0,0,t,e),
            this.scissorTest = !1,
            this.viewport = new O(0,0,t,e),
            n = n || {},
            this.texture = new sr(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
            this.texture.image = {},
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.texture.image.depth = 1,
            this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
            this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : v,
            this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
            this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
            this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
        }
        setTexture(t) {
            t.image = {
                width: this.width,
                height: this.height,
                depth: this.depth
            },
            this.texture = t
        }
        setSize(t, e, n=1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t,
            this.height = e,
            this.depth = n,
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.texture.image.depth = n,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.width = t.width,
            this.height = t.height,
            this.depth = t.depth,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    da.prototype.isWebGLRenderTarget = !0;
    const pa = 90;
    class ma extends Ut {
        constructor(t, e, n) {
            if (super(),
            this.type = "CubeCamera",
            !0 !== n.isWebGLCubeRenderTarget)
                return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new Gi(pa,1,t,e);
            i.layers = this.layers,
            i.up.set(0, -1, 0),
            i.lookAt(new G(1,0,0)),
            this.add(i);
            const r = new Gi(pa,1,t,e);
            r.layers = this.layers,
            r.up.set(0, -1, 0),
            r.lookAt(new G(-1,0,0)),
            this.add(r);
            const s = new Gi(pa,1,t,e);
            s.layers = this.layers,
            s.up.set(0, 0, 1),
            s.lookAt(new G(0,1,0)),
            this.add(s);
            const a = new Gi(pa,1,t,e);
            a.layers = this.layers,
            a.up.set(0, 0, -1),
            a.lookAt(new G(0,-1,0)),
            this.add(a);
            const o = new Gi(pa,1,t,e);
            o.layers = this.layers,
            o.up.set(0, -1, 0),
            o.lookAt(new G(0,0,1)),
            this.add(o);
            const l = new Gi(pa,1,t,e);
            l.layers = this.layers,
            l.up.set(0, -1, 0),
            l.lookAt(new G(0,0,-1)),
            this.add(l)
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget
              , [i,r,s,a,o,l] = this.children
              , c = t.xr.enabled
              , h = t.getRenderTarget();
            t.xr.enabled = !1;
            const u = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1,
            t.setRenderTarget(n, 0),
            t.render(e, i),
            t.setRenderTarget(n, 1),
            t.render(e, r),
            t.setRenderTarget(n, 2),
            t.render(e, s),
            t.setRenderTarget(n, 3),
            t.render(e, a),
            t.setRenderTarget(n, 4),
            t.render(e, o),
            n.texture.generateMipmaps = u,
            t.setRenderTarget(n, 5),
            t.render(e, l),
            t.setRenderTarget(h),
            t.xr.enabled = c
        }
    }
    class fa extends da {
        constructor(t, e, n) {
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
            e = n),
            super(t, t, e),
            e = e || {},
            this.texture = new or(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),
            this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps,
            this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : v,
            this.texture._needsFlipEnvMap = !1
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type,
            this.texture.format = T,
            this.texture.encoding = e.encoding,
            this.texture.generateMipmaps = e.generateMipmaps,
            this.texture.minFilter = e.minFilter,
            this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
            }
              , i = new Qr(5,5,5)
              , r = new Or({
                name: "CubemapFromEquirect",
                uniforms: Dr(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new nn(i,r)
              , a = e.minFilter;
            e.minFilter === y && (e.minFilter = v);
            return new ma(1,10,this).update(t, s),
            e.minFilter = a,
            s.geometry.dispose(),
            s.material.dispose(),
            this
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for (let r = 0; r < 6; r++)
                t.setRenderTarget(this, r),
                t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }
    function ga(t) {
        let e = new WeakMap;
        function n(t, e) {
            return 303 === e ? t.mapping = o : 304 === e && (t.mapping = l),
            t
        }
        function i(t) {
            const n = t.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n),
            r.dispose())
        }
        return {
            get: function(r) {
                if (r && r.isTexture) {
                    const s = r.mapping;
                    if (303 === s || 304 === s) {
                        if (e.has(r)) {
                            return n(e.get(r).texture, r.mapping)
                        }
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = t.getRenderTarget()
                                  , o = new fa(s.height / 2);
                                return o.fromEquirectangularTexture(t, r),
                                e.set(r, o),
                                t.setRenderTarget(a),
                                r.addEventListener("dispose", i),
                                n(o.texture, r.mapping)
                            }
                            return null
                        }
                    }
                }
                return r
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }
    function va(t) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n])
                return e[n];
            let i;
            switch (n) {
            case "WEBGL_depth_texture":
                i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = t.getExtension(n)
            }
            return e[n] = i,
            i
        }
        return {
            has: function(t) {
                return null !== n(t)
            },
            init: function(t) {
                t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
                n("OES_texture_float"),
                n("OES_texture_half_float"),
                n("OES_texture_half_float_linear"),
                n("OES_standard_derivatives"),
                n("OES_element_index_uint"),
                n("OES_vertex_array_object"),
                n("ANGLE_instanced_arrays")),
                n("OES_texture_float_linear"),
                n("EXT_color_buffer_half_float")
            },
            get: function(t) {
                const e = n(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
                e
            }
        }
    }
    function ya(t, e, n, i) {
        const r = {}
          , s = new WeakMap;
        function a(t) {
            const o = t.target;
            null !== o.index && e.remove(o.index);
            for (const t in o.attributes)
                e.remove(o.attributes[t]);
            o.removeEventListener("dispose", a),
            delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l),
            s.delete(o)),
            i.releaseStatesOfGeometry(o),
            !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
            n.memory.geometries--
        }
        function o(t) {
            const n = []
              , i = t.index
              , r = t.attributes.position;
            let a = 0;
            if (null !== i) {
                const t = i.array;
                a = i.version;
                for (let e = 0, i = t.length; e < i; e += 3) {
                    const i = t[e + 0]
                      , r = t[e + 1]
                      , s = t[e + 2];
                    n.push(i, r, r, s, s, i)
                }
            } else {
                const t = r.array;
                a = r.version;
                for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                    const t = e + 0
                      , i = e + 1
                      , r = e + 2;
                    n.push(t, i, i, r, r, t)
                }
            }
            const o = new (Le(n) > 65535 ? at : rt)(n,1);
            o.version = a;
            const l = s.get(t);
            l && e.remove(l),
            s.set(t, o)
        }
        return {
            get: function(t, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a),
                r[e.id] = !0,
                n.memory.geometries++),
                e
            },
            update: function(n) {
                const i = n.attributes;
                for (const n in i)
                    e.update(i[n], t.ARRAY_BUFFER);
                const r = n.morphAttributes;
                for (const n in r) {
                    const i = r[n];
                    for (let n = 0, r = i.length; n < r; n++)
                        e.update(i[n], t.ARRAY_BUFFER)
                }
            },
            getWireframeAttribute: function(t) {
                const e = s.get(t);
                if (e) {
                    const n = t.index;
                    null !== n && e.version < n.version && o(t)
                } else
                    o(t);
                return s.get(t)
            }
        }
    }
    function xa(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
            s = t
        }
        ,
        this.setIndex = function(t) {
            a = t.type,
            o = t.bytesPerElement
        }
        ,
        this.render = function(e, i) {
            t.drawElements(s, i, a, e * o),
            n.update(i, s, 1)
        }
        ,
        this.renderInstances = function(i, l, c) {
            if (0 === c)
                return;
            let h, u;
            if (r)
                h = t,
                u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"),
            u = "drawElementsInstancedANGLE",
            null === h)
                return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c),
            n.update(l, s, c)
        }
    }
    function _a(t) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++,
                e.calls = 0,
                e.triangles = 0,
                e.points = 0,
                e.lines = 0
            },
            update: function(n, i, r) {
                switch (e.calls++,
                i) {
                case t.TRIANGLES:
                    e.triangles += r * (n / 3);
                    break;
                case t.LINES:
                    e.lines += r * (n / 2);
                    break;
                case t.LINE_STRIP:
                    e.lines += r * (n - 1);
                    break;
                case t.LINE_LOOP:
                    e.lines += r * n;
                    break;
                case t.POINTS:
                    e.points += r * n;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                }
            }
        }
    }
    function ba(t, e) {
        return t[0] - e[0]
    }
    function wa(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }
    function Ma(t) {
        const e = {}
          , n = new Float32Array(8)
          , i = [];
        for (let t = 0; t < 8; t++)
            i[t] = [t, 0];
        return {
            update: function(r, s, a, o) {
                const l = r.morphTargetInfluences
                  , c = void 0 === l ? 0 : l.length;
                let h = e[s.id];
                if (void 0 === h) {
                    h = [];
                    for (let t = 0; t < c; t++)
                        h[t] = [t, 0];
                    e[s.id] = h
                }
                for (let t = 0; t < c; t++) {
                    const e = h[t];
                    e[0] = t,
                    e[1] = l[t]
                }
                h.sort(wa);
                for (let t = 0; t < 8; t++)
                    t < c && h[t][1] ? (i[t][0] = h[t][0],
                    i[t][1] = h[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER,
                    i[t][1] = 0);
                i.sort(ba);
                const u = a.morphTargets && s.morphAttributes.position
                  , d = a.morphNormals && s.morphAttributes.normal;
                let p = 0;
                for (let t = 0; t < 8; t++) {
                    const e = i[t]
                      , r = e[0]
                      , a = e[1];
                    r !== Number.MAX_SAFE_INTEGER && a ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]),
                    d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]),
                    n[t] = a,
                    p += a) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t),
                    d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t),
                    n[t] = 0)
                }
                const m = s.morphTargetsRelative ? 1 : 1 - p;
                o.getUniforms().setValue(t, "morphTargetBaseInfluence", m),
                o.getUniforms().setValue(t, "morphTargetInfluences", n)
            }
        }
    }
    function Sa(t, e, n, i) {
        let r = new WeakMap;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s),
            n.remove(e.instanceMatrix),
            null !== e.instanceColor && n.remove(e.instanceColor)
        }
        return {
            update: function(a) {
                const o = i.render.frame
                  , l = a.geometry
                  , c = e.get(a, l);
                return r.get(c) !== o && (e.update(c),
                r.set(c, o)),
                a.isInstancedMesh && (!1 === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s),
                n.update(a.instanceMatrix, t.ARRAY_BUFFER),
                null !== a.instanceColor && n.update(a.instanceColor, t.ARRAY_BUFFER)),
                c
            },
            dispose: function() {
                r = new WeakMap
            }
        }
    }
    fa.prototype.isWebGLCubeRenderTarget = !0;
    class Ea extends sr {
        constructor(t=null, e=1, n=1, i=1) {
            super(null),
            this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            },
            this.magFilter = m,
            this.minFilter = m,
            this.wrapR = d,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.needsUpdate = !0
        }
    }
    Ea.prototype.isDataTexture2DArray = !0;
    class Ta extends sr {
        constructor(t=null, e=1, n=1, i=1) {
            super(null),
            this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            },
            this.magFilter = m,
            this.minFilter = m,
            this.wrapR = d,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.needsUpdate = !0
        }
    }
    Ta.prototype.isDataTexture3D = !0;
    const Aa = new sr
      , La = new Ea
      , Ra = new Ta
      , Pa = new or
      , Ca = []
      , Da = []
      , Na = new Float32Array(16)
      , Ia = new Float32Array(9)
      , Oa = new Float32Array(4);
    function za(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0)
            return t;
        const r = e * n;
        let s = Ca[r];
        if (void 0 === s && (s = new Float32Array(r),
        Ca[r] = s),
        0 !== e) {
            i.toArray(s, 0);
            for (let i = 1, r = 0; i !== e; ++i)
                r += n,
                t[i].toArray(s, r)
        }
        return s
    }
    function Ua(t, e) {
        if (t.length !== e.length)
            return !1;
        for (let n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n])
                return !1;
        return !0
    }
    function Fa(t, e) {
        for (let n = 0, i = e.length; n < i; n++)
            t[n] = e[n]
    }
    function Ba(t, e) {
        let n = Da[e];
        void 0 === n && (n = new Int32Array(e),
        Da[e] = n);
        for (let i = 0; i !== e; ++i)
            n[i] = t.allocateTextureUnit();
        return n
    }
    function Ga(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e),
        n[0] = e)
    }
    function ka(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
            n[0] = e.x,
            n[1] = e.y);
        else {
            if (Ua(n, e))
                return;
            t.uniform2fv(this.addr, e),
            Fa(n, e)
        }
    }
    function Ha(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z);
        else if (void 0 !== e.r)
            n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
            n[0] = e.r,
            n[1] = e.g,
            n[2] = e.b);
        else {
            if (Ua(n, e))
                return;
            t.uniform3fv(this.addr, e),
            Fa(n, e)
        }
    }
    function Va(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z,
            n[3] = e.w);
        else {
            if (Ua(n, e))
                return;
            t.uniform4fv(this.addr, e),
            Fa(n, e)
        }
    }
    function Wa(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Ua(n, e))
                return;
            t.uniformMatrix2fv(this.addr, !1, e),
            Fa(n, e)
        } else {
            if (Ua(n, i))
                return;
            Oa.set(i),
            t.uniformMatrix2fv(this.addr, !1, Oa),
            Fa(n, i)
        }
    }
    function ja(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Ua(n, e))
                return;
            t.uniformMatrix3fv(this.addr, !1, e),
            Fa(n, e)
        } else {
            if (Ua(n, i))
                return;
            Ia.set(i),
            t.uniformMatrix3fv(this.addr, !1, Ia),
            Fa(n, i)
        }
    }
    function Xa(t, e) {
        const n = this.cache
          , i = e.elements;
        if (void 0 === i) {
            if (Ua(n, e))
                return;
            t.uniformMatrix4fv(this.addr, !1, e),
            Fa(n, e)
        } else {
            if (Ua(n, i))
                return;
            Na.set(i),
            t.uniformMatrix4fv(this.addr, !1, Na),
            Fa(n, i)
        }
    }
    function qa(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTexture2D(e || Aa, r)
    }
    function Ya(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture2DArray(e || La, r)
    }
    function Za(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.setTexture3D(e || Ra, r)
    }
    function Ja(t, e, n) {
        const i = this.cache
          , r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r),
        i[0] = r),
        n.safeSetTextureCube(e || Pa, r)
    }
    function Ka(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e),
        n[0] = e)
    }
    function Qa(t, e) {
        const n = this.cache;
        Ua(n, e) || (t.uniform2iv(this.addr, e),
        Fa(n, e))
    }
    function $a(t, e) {
        const n = this.cache;
        Ua(n, e) || (t.uniform3iv(this.addr, e),
        Fa(n, e))
    }
    function to(t, e) {
        const n = this.cache;
        Ua(n, e) || (t.uniform4iv(this.addr, e),
        Fa(n, e))
    }
    function eo(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e),
        n[0] = e)
    }
    function no(t, e) {
        t.uniform1fv(this.addr, e)
    }
    function io(t, e) {
        t.uniform1iv(this.addr, e)
    }
    function ro(t, e) {
        t.uniform2iv(this.addr, e)
    }
    function so(t, e) {
        t.uniform3iv(this.addr, e)
    }
    function ao(t, e) {
        t.uniform4iv(this.addr, e)
    }
    function oo(t, e) {
        const n = za(e, this.size, 2);
        t.uniform2fv(this.addr, n)
    }
    function lo(t, e) {
        const n = za(e, this.size, 3);
        t.uniform3fv(this.addr, n)
    }
    function co(t, e) {
        const n = za(e, this.size, 4);
        t.uniform4fv(this.addr, n)
    }
    function ho(t, e) {
        const n = za(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n)
    }
    function uo(t, e) {
        const n = za(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n)
    }
    function po(t, e) {
        const n = za(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n)
    }
    function mo(t, e, n) {
        const i = e.length
          , r = Ba(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t)
            n.safeSetTexture2D(e[t] || Aa, r[t])
    }
    function fo(t, e, n) {
        const i = e.length
          , r = Ba(n, i);
        t.uniform1iv(this.addr, r);
        for (let t = 0; t !== i; ++t)
            n.safeSetTextureCube(e[t] || Pa, r[t])
    }
    function go(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return Ga;
            case 35664:
                return ka;
            case 35665:
                return Ha;
            case 35666:
                return Va;
            case 35674:
                return Wa;
            case 35675:
                return ja;
            case 35676:
                return Xa;
            case 5124:
            case 35670:
                return Ka;
            case 35667:
            case 35671:
                return Qa;
            case 35668:
            case 35672:
                return $a;
            case 35669:
            case 35673:
                return to;
            case 5125:
                return eo;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return qa;
            case 35679:
            case 36299:
            case 36307:
                return Za;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Ja;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Ya
            }
        }(e.type)
    }
    function vo(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.size = e.size,
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return no;
            case 35664:
                return oo;
            case 35665:
                return lo;
            case 35666:
                return co;
            case 35674:
                return ho;
            case 35675:
                return uo;
            case 35676:
                return po;
            case 5124:
            case 35670:
                return io;
            case 35667:
            case 35671:
                return ro;
            case 35668:
            case 35672:
                return so;
            case 35669:
            case 35673:
                return ao;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return mo;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return fo
            }
        }(e.type)
    }
    function yo(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    vo.prototype.updateCache = function(t) {
        const e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
        Fa(e, t)
    }
    ,
    yo.prototype.setValue = function(t, e, n) {
        const i = this.seq;
        for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(t, e[s.id], n)
        }
    }
    ;
    const xo = /(\w+)(\])?(\[|\.)?/g;
    function _o(t, e) {
        t.seq.push(e),
        t.map[e.id] = e
    }
    function bo(t, e, n) {
        const i = t.name
          , r = i.length;
        for (xo.lastIndex = 0; ; ) {
            const s = xo.exec(i)
              , a = xo.lastIndex;
            let o = s[1];
            const l = "]" === s[2]
              , c = s[3];
            if (l && (o |= 0),
            void 0 === c || "[" === c && a + 2 === r) {
                _o(n, void 0 === c ? new go(o,t,e) : new vo(o,t,e));
                break
            }
            {
                let t = n.map[o];
                void 0 === t && (t = new yo(o),
                _o(n, t)),
                n = t
            }
        }
    }
    function wo(t, e) {
        this.seq = [],
        this.map = {};
        const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            bo(n, t.getUniformLocation(e, n.name), this)
        }
    }
    function Mo(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n),
        t.compileShader(i),
        i
    }
    wo.prototype.setValue = function(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i)
    }
    ,
    wo.prototype.setOptional = function(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }
    ,
    wo.upload = function(t, e, n, i) {
        for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r]
              , a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i)
        }
    }
    ,
    wo.seqWithValue = function(t, e) {
        const n = [];
        for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r)
        }
        return n
    }
    ;
    let So = 0;
    function Eo(t) {
        switch (t) {
        case D:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case 3003:
            return ["LogLuv", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
            ["Linear", "( value )"]
        }
    }
    function To(t, e, n) {
        const i = t.getShaderParameter(e, t.COMPILE_STATUS)
          , r = t.getShaderInfoLog(e).trim();
        if (i && "" === r)
            return "";
        return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
            const e = t.split("\n");
            for (let t = 0; t < e.length; t++)
                e[t] = t + 1 + ": " + e[t];
            return e.join("\n")
        }(t.getShaderSource(e))
    }
    function Ao(t, e) {
        const n = Eo(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }
    function Lo(t, e) {
        const n = Eo(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    }
    function Ro(t, e) {
        let n;
        switch (e) {
        case 1:
            n = "Linear";
            break;
        case 2:
            n = "Reinhard";
            break;
        case 3:
            n = "OptimizedCineon";
            break;
        case 4:
            n = "ACESFilmic";
            break;
        case 5:
            n = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
            n = "Linear"
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }
    function Po(t) {
        return "" !== t
    }
    function Co(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }
    function Do(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    const No = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function Io(t) {
        return t.replace(No, Oo)
    }
    function Oo(t, e) {
        const n = ra[e];
        if (void 0 === n)
            throw new Error("Can not resolve #include <" + e + ">");
        return Io(n)
    }
    const zo = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
      , Uo = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Fo(t) {
        return t.replace(Uo, Go).replace(zo, Bo)
    }
    function Bo(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
        Go(t, e, n, i)
    }
    function Go(t, e, n, i) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(n); t++)
            r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r
    }
    function ko(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
        e
    }
    function Ho(t, e, n, i) {
        const r = t.getContext()
          , s = n.defines;
        let a = n.vertexShader
          , u = n.fragmentShader;
        const d = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
            e
        }(n)
          , p = function(t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap)
                switch (t.envMapMode) {
                case o:
                case l:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case c:
                case h:
                    e = "ENVMAP_TYPE_CUBE_UV"
                }
            return e
        }(n)
          , m = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            if (t.envMap)
                switch (t.envMapMode) {
                case l:
                case h:
                    e = "ENVMAP_MODE_REFRACTION"
                }
            return e
        }(n)
          , f = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap)
                switch (t.combine) {
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD"
                }
            return e
        }(n)
          , g = t.gammaFactor > 0 ? t.gammaFactor : 1
          , v = n.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Po).join("\n")
        }(n)
          , y = function(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
        }(s)
          , x = r.createProgram();
        let _, b, w = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial ? (_ = [y].filter(Po).join("\n"),
        _.length > 0 && (_ += "\n"),
        b = [v, y].filter(Po).join("\n"),
        b.length > 0 && (b += "\n")) : (_ = [ko(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Po).join("\n"),
        b = [v, ko(n), "#define SHADER_NAME " + n.shaderName, y, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", n.envMap ? "#define " + f : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ra.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Ro("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", ra.encodings_pars_fragment, n.map ? Ao("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Ao("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Ao("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Ao("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Ao("lightMapTexelToLinear", n.lightMapEncoding) : "", Lo("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Po).join("\n")),
        a = Io(a),
        a = Co(a, n),
        a = Do(a, n),
        u = Io(u),
        u = Co(u, n),
        u = Do(u, n),
        a = Fo(a),
        u = Fo(u),
        n.isWebGL2 && !0 !== n.isRawShaderMaterial && (w = "#version 300 es\n",
        _ = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _,
        b = ["#define varying in", n.glslVersion === I ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === I ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + b);
        const M = w + _ + a
          , S = w + b + u
          , E = Mo(r, r.VERTEX_SHADER, M)
          , T = Mo(r, r.FRAGMENT_SHADER, S);
        if (r.attachShader(x, E),
        r.attachShader(x, T),
        void 0 !== n.index0AttributeName ? r.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(x, 0, "position"),
        r.linkProgram(x),
        t.debug.checkShaderErrors) {
            const t = r.getProgramInfoLog(x).trim()
              , e = r.getShaderInfoLog(E).trim()
              , n = r.getShaderInfoLog(T).trim();
            let i = !0
              , s = !0;
            if (!1 === r.getProgramParameter(x, r.LINK_STATUS)) {
                i = !1;
                const e = To(r, E, "vertex")
                  , n = To(r, T, "fragment");
                console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(x, r.VALIDATE_STATUS), "gl.getProgramInfoLog", t, e, n)
            } else
                "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (s = !1);
            s && (this.diagnostics = {
                runnable: i,
                programLog: t,
                vertexShader: {
                    log: e,
                    prefix: _
                },
                fragmentShader: {
                    log: n,
                    prefix: b
                }
            })
        }
        let A, L;
        return r.deleteShader(E),
        r.deleteShader(T),
        this.getUniforms = function() {
            return void 0 === A && (A = new wo(r,x)),
            A
        }
        ,
        this.getAttributes = function() {
            return void 0 === L && (L = function(t, e) {
                const n = {}
                  , i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
                for (let r = 0; r < i; r++) {
                    const i = t.getActiveAttrib(e, r).name;
                    n[i] = t.getAttribLocation(e, i)
                }
                return n
            }(r, x)),
            L
        }
        ,
        this.destroy = function() {
            i.releaseStatesOfProgram(this),
            r.deleteProgram(x),
            this.program = void 0
        }
        ,
        this.name = n.shaderName,
        this.id = So++,
        this.cacheKey = e,
        this.usedTimes = 1,
        this.program = x,
        this.vertexShader = E,
        this.fragmentShader = T,
        this
    }
    function Vo(t, e, n, i, r, s) {
        const a = []
          , o = i.isWebGL2
          , l = i.logarithmicDepthBuffer
          , u = i.floatVertexTextures
          , d = i.maxVertexUniforms
          , p = i.vertexTextures;
        let m = i.precision;
        const f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
        function v(t) {
            let e;
            return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            e = t.texture.encoding) : e = D,
            e
        }
        return {
            getParameters: function(r, a, g, y, x) {
                const _ = y.fog
                  , b = r.isMeshStandardMaterial ? y.environment : null
                  , w = e.get(r.envMap || b)
                  , M = f[r.type]
                  , S = x.isSkinnedMesh ? function(t) {
                    const e = t.skeleton.bones;
                    if (u)
                        return 1024;
                    {
                        const t = d
                          , n = Math.floor((t - 20) / 4)
                          , i = Math.min(n, e.length);
                        return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."),
                        0) : i
                    }
                }(x) : 0;
                let E, T;
                if (null !== r.precision && (m = i.getMaxPrecision(r.precision),
                m !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", m, "instead.")),
                M) {
                    const t = aa[M];
                    E = t.vertexShader,
                    T = t.fragmentShader
                } else
                    E = r.vertexShader,
                    T = r.fragmentShader;
                const A = t.getRenderTarget();
                return {
                    isWebGL2: o,
                    shaderID: M,
                    shaderName: r.type,
                    vertexShader: E,
                    fragmentShader: T,
                    defines: r.defines,
                    isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                    glslVersion: r.glslVersion,
                    precision: m,
                    instancing: !0 === x.isInstancedMesh,
                    instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
                    map: !!r.map,
                    mapEncoding: v(r.map),
                    matcap: !!r.matcap,
                    matcapEncoding: v(r.matcap),
                    envMap: !!w,
                    envMapMode: w && w.mapping,
                    envMapEncoding: v(w),
                    envMapCubeUV: !!w && (w.mapping === c || w.mapping === h),
                    lightMap: !!r.lightMap,
                    lightMapEncoding: v(r.lightMap),
                    aoMap: !!r.aoMap,
                    emissiveMap: !!r.emissiveMap,
                    emissiveMapEncoding: v(r.emissiveMap),
                    bumpMap: !!r.bumpMap,
                    normalMap: !!r.normalMap,
                    objectSpaceNormalMap: 1 === r.normalMapType,
                    tangentSpaceNormalMap: 0 === r.normalMapType,
                    clearcoatMap: !!r.clearcoatMap,
                    clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                    clearcoatNormalMap: !!r.clearcoatNormalMap,
                    displacementMap: !!r.displacementMap,
                    roughnessMap: !!r.roughnessMap,
                    metalnessMap: !!r.metalnessMap,
                    specularMap: !!r.specularMap,
                    alphaMap: !!r.alphaMap,
                    gradientMap: !!r.gradientMap,
                    sheen: !!r.sheen,
                    transmissionMap: !!r.transmissionMap,
                    combine: r.combine,
                    vertexTangents: r.normalMap && r.vertexTangents,
                    vertexColors: r.vertexColors,
                    vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
                    uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
                    fog: !!_,
                    useFog: r.fog,
                    fogExp2: _ && _.isFogExp2,
                    flatShading: !!r.flatShading,
                    sizeAttenuation: r.sizeAttenuation,
                    logarithmicDepthBuffer: l,
                    skinning: r.skinning && S > 0,
                    maxBones: S,
                    useVertexTexture: u,
                    morphTargets: r.morphTargets,
                    morphNormals: r.morphNormals,
                    maxMorphTargets: t.maxMorphTargets,
                    maxMorphNormals: t.maxMorphNormals,
                    numDirLights: a.directional.length,
                    numPointLights: a.point.length,
                    numSpotLights: a.spot.length,
                    numRectAreaLights: a.rectArea.length,
                    numHemiLights: a.hemi.length,
                    numDirLightShadows: a.directionalShadowMap.length,
                    numPointLightShadows: a.pointShadowMap.length,
                    numSpotLightShadows: a.spotShadowMap.length,
                    numClippingPlanes: s.numPlanes,
                    numClipIntersection: s.numIntersection,
                    dithering: r.dithering,
                    shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: r.toneMapped ? t.toneMapping : 0,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: r.premultipliedAlpha,
                    alphaTest: r.alphaTest,
                    doubleSided: 2 === r.side,
                    flipSided: 1 === r.side,
                    depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                    index0AttributeName: r.index0AttributeName,
                    extensionDerivatives: r.extensions && r.extensions.derivatives,
                    extensionFragDepth: r.extensions && r.extensions.fragDepth,
                    extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                    extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: r.customProgramCacheKey()
                }
            },
            getProgramCacheKey: function(e) {
                const n = [];
                if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader),
                n.push(e.vertexShader)),
                void 0 !== e.defines)
                    for (const t in e.defines)
                        n.push(t),
                        n.push(e.defines[t]);
                if (!1 === e.isRawShaderMaterial) {
                    for (let t = 0; t < g.length; t++)
                        n.push(e[g[t]]);
                    n.push(t.outputEncoding),
                    n.push(t.gammaFactor)
                }
                return n.push(e.customProgramCacheKey),
                n.join()
            },
            getUniforms: function(t) {
                const e = f[t.type];
                let n;
                if (e) {
                    const t = aa[e];
                    n = Ir.clone(t.uniforms)
                } else
                    n = t.uniforms;
                return n
            },
            acquireProgram: function(e, n) {
                let i;
                for (let t = 0, e = a.length; t < e; t++) {
                    const e = a[t];
                    if (e.cacheKey === n) {
                        i = e,
                        ++i.usedTimes;
                        break
                    }
                }
                return void 0 === i && (i = new Ho(t,n,e,r),
                a.push(i)),
                i
            },
            releaseProgram: function(t) {
                if (0 == --t.usedTimes) {
                    const e = a.indexOf(t);
                    a[e] = a[a.length - 1],
                    a.pop(),
                    t.destroy()
                }
            },
            programs: a
        }
    }
    function Wo() {
        let t = new WeakMap;
        return {
            get: function(e) {
                let n = t.get(e);
                return void 0 === n && (n = {},
                t.set(e, n)),
                n
            },
            remove: function(e) {
                t.delete(e)
            },
            update: function(e, n, i) {
                t.get(e)[n] = i
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }
    function jo(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }
    function Xo(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }
    function qo(t) {
        const e = [];
        let n = 0;
        const i = []
          , r = []
          , s = {
            id: -1
        };
        function a(i, r, a, o, l, c) {
            let h = e[n];
            const u = t.get(a);
            return void 0 === h ? (h = {
                id: i.id,
                object: i,
                geometry: r,
                material: a,
                program: u.program || s,
                groupOrder: o,
                renderOrder: i.renderOrder,
                z: l,
                group: c
            },
            e[n] = h) : (h.id = i.id,
            h.object = i,
            h.geometry = r,
            h.material = a,
            h.program = u.program || s,
            h.groupOrder = o,
            h.renderOrder = i.renderOrder,
            h.z = l,
            h.group = c),
            n++,
            h
        }
        return {
            opaque: i,
            transparent: r,
            init: function() {
                n = 0,
                i.length = 0,
                r.length = 0
            },
            push: function(t, e, n, s, o, l) {
                const c = a(t, e, n, s, o, l);
                (!0 === n.transparent ? r : i).push(c)
            },
            unshift: function(t, e, n, s, o, l) {
                const c = a(t, e, n, s, o, l);
                (!0 === n.transparent ? r : i).unshift(c)
            },
            finish: function() {
                for (let t = n, i = e.length; t < i; t++) {
                    const n = e[t];
                    if (null === n.id)
                        break;
                    n.id = null,
                    n.object = null,
                    n.geometry = null,
                    n.material = null,
                    n.program = null,
                    n.group = null
                }
            },
            sort: function(t, e) {
                i.length > 1 && i.sort(t || jo),
                r.length > 1 && r.sort(e || Xo)
            }
        }
    }
    function Yo(t) {
        let e = new WeakMap;
        return {
            get: function(n, i) {
                let r;
                return !1 === e.has(n) ? (r = new qo(t),
                e.set(n, [r])) : i >= e.get(n).length ? (r = new qo(t),
                e.get(n).push(r)) : r = e.get(n)[i],
                r
            },
            dispose: function() {
                e = new WeakMap
            }
        }
    }
    function Zo() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id])
                    return t[e.id];
                let n;
                switch (e.type) {
                case "DirectionalLight":
                    n = {
                        direction: new G,
                        color: new J
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new G,
                        direction: new G,
                        color: new J,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new G,
                        color: new J,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new G,
                        skyColor: new J,
                        groundColor: new J
                    };
                    break;
                case "RectAreaLight":
                    n = {
                        color: new J,
                        position: new G,
                        halfWidth: new G,
                        halfHeight: new G
                    }
                }
                return t[e.id] = n,
                n
            }
        }
    }
    let Jo = 0;
    function Ko(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
    }
    function Qo(t, e) {
        const n = new Zo
          , i = function() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id])
                        return t[e.id];
                    let n;
                    switch (e.type) {
                    case "DirectionalLight":
                    case "SpotLight":
                        n = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new V
                        };
                        break;
                    case "PointLight":
                        n = {
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new V,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        }
                    }
                    return t[e.id] = n,
                    n
                }
            }
        }()
          , r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for (let t = 0; t < 9; t++)
            r.probe.push(new G);
        const s = new G
          , a = new ht
          , o = new ht;
        return {
            setup: function(s) {
                let a = 0
                  , o = 0
                  , l = 0;
                for (let t = 0; t < 9; t++)
                    r.probe[t].set(0, 0, 0);
                let c = 0
                  , h = 0
                  , u = 0
                  , d = 0
                  , p = 0
                  , m = 0
                  , f = 0
                  , g = 0;
                s.sort(Ko);
                for (let t = 0, e = s.length; t < e; t++) {
                    const e = s[t]
                      , v = e.color
                      , y = e.intensity
                      , x = e.distance
                      , _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight)
                        a += v.r * y,
                        o += v.g * y,
                        l += v.b * y;
                    else if (e.isLightProbe)
                        for (let t = 0; t < 9; t++)
                            r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                    else if (e.isDirectionalLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity),
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            r.directionalShadow[c] = n,
                            r.directionalShadowMap[c] = _,
                            r.directionalShadowMatrix[c] = e.shadow.matrix,
                            m++
                        }
                        r.directional[c] = t,
                        c++
                    } else if (e.isSpotLight) {
                        const t = n.get(e);
                        if (t.position.setFromMatrixPosition(e.matrixWorld),
                        t.color.copy(v).multiplyScalar(y),
                        t.distance = x,
                        t.coneCos = Math.cos(e.angle),
                        t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)),
                        t.decay = e.decay,
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            r.spotShadow[u] = n,
                            r.spotShadowMap[u] = _,
                            r.spotShadowMatrix[u] = e.shadow.matrix,
                            g++
                        }
                        r.spot[u] = t,
                        u++
                    } else if (e.isRectAreaLight) {
                        const t = n.get(e);
                        t.color.copy(v).multiplyScalar(y),
                        t.halfWidth.set(.5 * e.width, 0, 0),
                        t.halfHeight.set(0, .5 * e.height, 0),
                        r.rectArea[d] = t,
                        d++
                    } else if (e.isPointLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity),
                        t.distance = e.distance,
                        t.decay = e.decay,
                        e.castShadow) {
                            const t = e.shadow
                              , n = i.get(e);
                            n.shadowBias = t.bias,
                            n.shadowNormalBias = t.normalBias,
                            n.shadowRadius = t.radius,
                            n.shadowMapSize = t.mapSize,
                            n.shadowCameraNear = t.camera.near,
                            n.shadowCameraFar = t.camera.far,
                            r.pointShadow[h] = n,
                            r.pointShadowMap[h] = _,
                            r.pointShadowMatrix[h] = e.shadow.matrix,
                            f++
                        }
                        r.point[h] = t,
                        h++
                    } else if (e.isHemisphereLight) {
                        const t = n.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(y),
                        t.groundColor.copy(e.groundColor).multiplyScalar(y),
                        r.hemi[p] = t,
                        p++
                    }
                }
                d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = sa.LTC_FLOAT_1,
                r.rectAreaLTC2 = sa.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = sa.LTC_HALF_1,
                r.rectAreaLTC2 = sa.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                r.ambient[0] = a,
                r.ambient[1] = o,
                r.ambient[2] = l;
                const v = r.hash;
                v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c,
                r.spot.length = u,
                r.rectArea.length = d,
                r.point.length = h,
                r.hemi.length = p,
                r.directionalShadow.length = m,
                r.directionalShadowMap.length = m,
                r.pointShadow.length = f,
                r.pointShadowMap.length = f,
                r.spotShadow.length = g,
                r.spotShadowMap.length = g,
                r.directionalShadowMatrix.length = m,
                r.pointShadowMatrix.length = f,
                r.spotShadowMatrix.length = g,
                v.directionalLength = c,
                v.pointLength = h,
                v.spotLength = u,
                v.rectAreaLength = d,
                v.hemiLength = p,
                v.numDirectionalShadows = m,
                v.numPointShadows = f,
                v.numSpotShadows = g,
                r.version = Jo++)
            },
            setupView: function(t, e) {
                let n = 0
                  , i = 0
                  , l = 0
                  , c = 0
                  , h = 0;
                const u = e.matrixWorldInverse;
                for (let e = 0, d = t.length; e < d; e++) {
                    const d = t[e];
                    if (d.isDirectionalLight) {
                        const t = r.directional[n];
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        s.setFromMatrixPosition(d.target.matrixWorld),
                        t.direction.sub(s),
                        t.direction.transformDirection(u),
                        n++
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        s.setFromMatrixPosition(d.target.matrixWorld),
                        t.direction.sub(s),
                        t.direction.transformDirection(u),
                        l++
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        o.identity(),
                        a.copy(d.matrixWorld),
                        a.premultiply(u),
                        o.extractRotation(a),
                        t.halfWidth.set(.5 * d.width, 0, 0),
                        t.halfHeight.set(0, .5 * d.height, 0),
                        t.halfWidth.applyMatrix4(o),
                        t.halfHeight.applyMatrix4(o),
                        c++
                    } else if (d.isPointLight) {
                        const t = r.point[i];
                        t.position.setFromMatrixPosition(d.matrixWorld),
                        t.position.applyMatrix4(u),
                        i++
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld),
                        t.direction.transformDirection(u),
                        t.direction.normalize(),
                        h++
                    }
                }
            },
            state: r
        }
    }
    function $o(t, e) {
        const n = new Qo(t,e)
          , i = []
          , r = [];
        return {
            init: function() {
                i.length = 0,
                r.length = 0
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function() {
                n.setup(i)
            },
            setupLightsView: function(t) {
                n.setupView(i, t)
            },
            pushLight: function(t) {
                i.push(t)
            },
            pushShadow: function(t) {
                r.push(t)
            }
        }
    }
    function tl(t, e) {
        let n = new WeakMap;
        return {
            get: function(i, r=0) {
                let s;
                return !1 === n.has(i) ? (s = new $o(t,e),
                n.set(i, [s])) : r >= n.get(i).length ? (s = new $o(t,e),
                n.get(i).push(s)) : s = n.get(i)[r],
                s
            },
            dispose: function() {
                n = new WeakMap
            }
        }
    }
    function el(t, e, n) {
        let i = new Ii;
        const r = new V
          , s = new V
          , a = new O
          , o = []
          , l = []
          , c = {}
          , h = {
            0: 1,
            1: 0,
            2: 2
        }
          , u = new Or({
            defines: {
                SAMPLE_RATE: 2 / 8,
                HALF_SAMPLE_RATE: 1 / 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new V
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n",
            fragmentShader: "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\n\t// This seems totally useless but it's a crazy work around for a Adreno compiler bug\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\n\t\t#ifdef HORIZONTAL_PASS\n\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n\t\t#else\n\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\n\t\t#endif\n\n\t}\n\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n"
        })
          , d = u.clone();
        d.defines.HORIZONTAL_PASS = 1;
        const p = new Fe;
        p.setAttribute("position", new $(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
        const f = new nn(p,u)
          , g = this;
        function y(n, i) {
            const r = e.update(f);
            u.uniforms.shadow_pass.value = n.map.texture,
            u.uniforms.resolution.value = n.mapSize,
            u.uniforms.radius.value = n.radius,
            t.setRenderTarget(n.mapPass),
            t.clear(),
            t.renderBufferDirect(i, null, r, u, f, null),
            d.uniforms.shadow_pass.value = n.mapPass.texture,
            d.uniforms.resolution.value = n.mapSize,
            d.uniforms.radius.value = n.radius,
            t.setRenderTarget(n.map),
            t.clear(),
            t.renderBufferDirect(i, null, r, d, f, null)
        }
        function x(t, e, n) {
            const i = t << 0 | e << 1 | n << 2;
            let r = o[i];
            return void 0 === r && (r = new Vr({
                depthPacking: 3201,
                morphTargets: t,
                skinning: e
            }),
            o[i] = r),
            r
        }
        function _(t, e, n) {
            const i = t << 0 | e << 1 | n << 2;
            let r = l[i];
            return void 0 === r && (r = new Wr({
                morphTargets: t,
                skinning: e
            }),
            l[i] = r),
            r
        }
        function b(e, n, i, r, s, a, o) {
            let l = null
              , u = x
              , d = e.customDepthMaterial;
            if (!0 === r.isPointLight && (u = _,
            d = e.customDistanceMaterial),
            void 0 === d) {
                let t = !1;
                !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
                let r = !1;
                !0 === e.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e));
                l = u(t, r, !0 === e.isInstancedMesh)
            } else
                l = d;
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                const t = l.uuid
                  , e = i.uuid;
                let n = c[t];
                void 0 === n && (n = {},
                c[t] = n);
                let r = n[e];
                void 0 === r && (r = l.clone(),
                n[e] = r),
                l = r
            }
            return l.visible = i.visible,
            l.wireframe = i.wireframe,
            l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : h[i.side],
            l.clipShadows = i.clipShadows,
            l.clippingPlanes = i.clippingPlanes,
            l.clipIntersection = i.clipIntersection,
            l.wireframeLinewidth = i.wireframeLinewidth,
            l.linewidth = i.linewidth,
            !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
            l.nearDistance = s,
            l.farDistance = a),
            l
        }
        function w(n, r, s, a, o) {
            if (!1 === n.visible)
                return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e.update(n)
                  , r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for (let l = 0, c = e.length; l < c; l++) {
                        const c = e[l]
                          , h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = b(n, i, h, a, s.near, s.far, o);
                            t.renderBufferDirect(s, null, i, e, n, c)
                        }
                    }
                } else if (r.visible) {
                    const e = b(n, i, r, a, s.near, s.far, o);
                    t.renderBufferDirect(s, null, i, e, n, null)
                }
            }
            const l = n.children;
            for (let t = 0, e = l.length; t < e; t++)
                w(l[t], r, s, a, o)
        }
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = 1,
        this.render = function(e, o, l) {
            if (!1 === g.enabled)
                return;
            if (!1 === g.autoUpdate && !1 === g.needsUpdate)
                return;
            if (0 === e.length)
                return;
            const c = t.getRenderTarget()
              , h = t.getActiveCubeFace()
              , u = t.getActiveMipmapLevel()
              , d = t.state;
            d.setBlending(0),
            d.buffers.color.setClear(1, 1, 1, 1),
            d.buffers.depth.setTest(!0),
            d.setScissorTest(!1);
            for (let c = 0, h = e.length; c < h; c++) {
                const h = e[c]
                  , u = h.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", h, "has no shadow.");
                    continue
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate)
                    continue;
                r.copy(u.mapSize);
                const p = u.getFrameExtents();
                if (r.multiply(p),
                s.copy(u.mapSize),
                (r.x > n || r.y > n) && (r.x > n && (s.x = Math.floor(n / p.x),
                r.x = s.x * p.x,
                u.mapSize.x = s.x),
                r.y > n && (s.y = Math.floor(n / p.y),
                r.y = s.y * p.y,
                u.mapSize.y = s.y)),
                null === u.map && !u.isPointLightShadow && 3 === this.type) {
                    const t = {
                        minFilter: v,
                        magFilter: v,
                        format: T
                    };
                    u.map = new da(r.x,r.y,t),
                    u.map.texture.name = h.name + ".shadowMap",
                    u.mapPass = new da(r.x,r.y,t),
                    u.camera.updateProjectionMatrix()
                }
                if (null === u.map) {
                    const t = {
                        minFilter: m,
                        magFilter: m,
                        format: T
                    };
                    u.map = new da(r.x,r.y,t),
                    u.map.texture.name = h.name + ".shadowMap",
                    u.camera.updateProjectionMatrix()
                }
                t.setRenderTarget(u.map),
                t.clear();
                const f = u.getViewportCount();
                for (let t = 0; t < f; t++) {
                    const e = u.getViewport(t);
                    a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
                    d.viewport(a),
                    u.updateMatrices(h, t),
                    i = u.getFrustum(),
                    w(o, l, u.camera, h, this.type)
                }
                u.isPointLightShadow || 3 !== this.type || y(u, l),
                u.needsUpdate = !1
            }
            g.needsUpdate = !1,
            t.setRenderTarget(c, h, u)
        }
    }
    function nl(t, e, n) {
        const i = n.isWebGL2;
        const r = new function() {
            let e = !1;
            const n = new O;
            let i = null;
            const r = new O(0,0,0,0);
            return {
                setMask: function(n) {
                    i === n || e || (t.colorMask(n, n, n, n),
                    i = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e, i, s, a, o) {
                    !0 === o && (e *= a,
                    i *= a,
                    s *= a),
                    n.set(e, i, s, a),
                    !1 === r.equals(n) && (t.clearColor(e, i, s, a),
                    r.copy(n))
                },
                reset: function() {
                    e = !1,
                    i = null,
                    r.set(-1, 0, 0, 0)
                }
            }
        }
          , s = new function() {
            let e = !1
              , n = null
              , i = null
              , r = null;
            return {
                setTest: function(e) {
                    e ? I(t.DEPTH_TEST) : z(t.DEPTH_TEST)
                },
                setMask: function(i) {
                    n === i || e || (t.depthMask(i),
                    n = i)
                },
                setFunc: function(e) {
                    if (i !== e) {
                        if (e)
                            switch (e) {
                            case 0:
                                t.depthFunc(t.NEVER);
                                break;
                            case 1:
                                t.depthFunc(t.ALWAYS);
                                break;
                            case 2:
                                t.depthFunc(t.LESS);
                                break;
                            case 3:
                                t.depthFunc(t.LEQUAL);
                                break;
                            case 4:
                                t.depthFunc(t.EQUAL);
                                break;
                            case 5:
                                t.depthFunc(t.GEQUAL);
                                break;
                            case 6:
                                t.depthFunc(t.GREATER);
                                break;
                            case 7:
                                t.depthFunc(t.NOTEQUAL);
                                break;
                            default:
                                t.depthFunc(t.LEQUAL)
                            }
                        else
                            t.depthFunc(t.LEQUAL);
                        i = e
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    r !== e && (t.clearDepth(e),
                    r = e)
                },
                reset: function() {
                    e = !1,
                    n = null,
                    i = null,
                    r = null
                }
            }
        }
          , o = new function() {
            let e = !1
              , n = null
              , i = null
              , r = null
              , s = null
              , a = null
              , o = null
              , l = null
              , c = null;
            return {
                setTest: function(n) {
                    e || (n ? I(t.STENCIL_TEST) : z(t.STENCIL_TEST))
                },
                setMask: function(i) {
                    n === i || e || (t.stencilMask(i),
                    n = i)
                },
                setFunc: function(e, n, a) {
                    i === e && r === n && s === a || (t.stencilFunc(e, n, a),
                    i = e,
                    r = n,
                    s = a)
                },
                setOp: function(e, n, i) {
                    a === e && o === n && l === i || (t.stencilOp(e, n, i),
                    a = e,
                    o = n,
                    l = i)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    c !== e && (t.clearStencil(e),
                    c = e)
                },
                reset: function() {
                    e = !1,
                    n = null,
                    i = null,
                    r = null,
                    s = null,
                    a = null,
                    o = null,
                    l = null,
                    c = null
                }
            }
        }
        ;
        let l = {}
          , c = null
          , h = !1
          , u = null
          , d = null
          , p = null
          , m = null
          , f = null
          , g = null
          , v = null
          , y = !1
          , x = null
          , _ = null
          , b = null
          , w = null
          , M = null;
        const S = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let E = !1
          , T = 0;
        const A = t.getParameter(t.VERSION);
        -1 !== A.indexOf("WebGL") ? (T = parseFloat(/^WebGL (\d)/.exec(A)[1]),
        E = T >= 1) : -1 !== A.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),
        E = T >= 2);
        let L = null
          , R = {};
        const P = new O
          , C = new O;
        function D(e, n, i) {
            const r = new Uint8Array(4)
              , s = t.createTexture();
            t.bindTexture(e, s),
            t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (let e = 0; e < i; e++)
                t.texImage2D(n + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
            return s
        }
        const N = {};
        function I(e) {
            !0 !== l[e] && (t.enable(e),
            l[e] = !0)
        }
        function z(e) {
            !1 !== l[e] && (t.disable(e),
            l[e] = !1)
        }
        N[t.TEXTURE_2D] = D(t.TEXTURE_2D, t.TEXTURE_2D, 1),
        N[t.TEXTURE_CUBE_MAP] = D(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
        r.setClear(0, 0, 0, 1),
        s.setClear(1),
        o.setClear(0),
        I(t.DEPTH_TEST),
        s.setFunc(3),
        G(!1),
        k(1),
        I(t.CULL_FACE),
        B(0);
        const U = {
            [a]: t.FUNC_ADD,
            101: t.FUNC_SUBTRACT,
            102: t.FUNC_REVERSE_SUBTRACT
        };
        if (i)
            U[103] = t.MIN,
            U[104] = t.MAX;
        else {
            const t = e.get("EXT_blend_minmax");
            null !== t && (U[103] = t.MIN_EXT,
            U[104] = t.MAX_EXT)
        }
        const F = {
            200: t.ZERO,
            201: t.ONE,
            202: t.SRC_COLOR,
            204: t.SRC_ALPHA,
            210: t.SRC_ALPHA_SATURATE,
            208: t.DST_COLOR,
            206: t.DST_ALPHA,
            203: t.ONE_MINUS_SRC_COLOR,
            205: t.ONE_MINUS_SRC_ALPHA,
            209: t.ONE_MINUS_DST_COLOR,
            207: t.ONE_MINUS_DST_ALPHA
        };
        function B(e, n, i, r, s, o, l, c) {
            if (0 !== e) {
                if (!1 === h && (I(t.BLEND),
                h = !0),
                5 === e)
                    s = s || n,
                    o = o || i,
                    l = l || r,
                    n === d && s === f || (t.blendEquationSeparate(U[n], U[s]),
                    d = n,
                    f = s),
                    i === p && r === m && o === g && l === v || (t.blendFuncSeparate(F[i], F[r], F[o], F[l]),
                    p = i,
                    m = r,
                    g = o,
                    v = l),
                    u = e,
                    y = null;
                else if (e !== u || c !== y) {
                    if (d === a && f === a || (t.blendEquation(t.FUNC_ADD),
                    d = a,
                    f = a),
                    c)
                        switch (e) {
                        case 1:
                            t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            t.blendFunc(t.ONE, t.ONE);
                            break;
                        case 3:
                            t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 4:
                            t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                        }
                    else
                        switch (e) {
                        case 1:
                            t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            t.blendFunc(t.SRC_ALPHA, t.ONE);
                            break;
                        case 3:
                            t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR);
                            break;
                        case 4:
                            t.blendFunc(t.ZERO, t.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                        }
                    p = null,
                    m = null,
                    g = null,
                    v = null,
                    u = e,
                    y = c
                }
            } else
                !0 === h && (z(t.BLEND),
                h = !1)
        }
        function G(e) {
            x !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
            x = e)
        }
        function k(e) {
            0 !== e ? (I(t.CULL_FACE),
            e !== _ && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : z(t.CULL_FACE),
            _ = e
        }
        function H(e, n, i) {
            e ? (I(t.POLYGON_OFFSET_FILL),
            w === n && M === i || (t.polygonOffset(n, i),
            w = n,
            M = i)) : z(t.POLYGON_OFFSET_FILL)
        }
        function V(e) {
            void 0 === e && (e = t.TEXTURE0 + S - 1),
            L !== e && (t.activeTexture(e),
            L = e)
        }
        return {
            buffers: {
                color: r,
                depth: s,
                stencil: o
            },
            enable: I,
            disable: z,
            useProgram: function(e) {
                return c !== e && (t.useProgram(e),
                c = e,
                !0)
            },
            setBlending: B,
            setMaterial: function(e, n) {
                2 === e.side ? z(t.CULL_FACE) : I(t.CULL_FACE);
                let i = 1 === e.side;
                n && (i = !i),
                G(i),
                1 === e.blending && !1 === e.transparent ? B(0) : B(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha),
                s.setFunc(e.depthFunc),
                s.setTest(e.depthTest),
                s.setMask(e.depthWrite),
                r.setMask(e.colorWrite);
                const a = e.stencilWrite;
                o.setTest(a),
                a && (o.setMask(e.stencilWriteMask),
                o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
                H(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
            },
            setFlipSided: G,
            setCullFace: k,
            setLineWidth: function(e) {
                e !== b && (E && t.lineWidth(e),
                b = e)
            },
            setPolygonOffset: H,
            setScissorTest: function(e) {
                e ? I(t.SCISSOR_TEST) : z(t.SCISSOR_TEST)
            },
            activeTexture: V,
            bindTexture: function(e, n) {
                null === L && V();
                let i = R[L];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                },
                R[L] = i),
                i.type === e && i.texture === n || (t.bindTexture(e, n || N[e]),
                i.type = e,
                i.texture = n)
            },
            unbindTexture: function() {
                const e = R[L];
                void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null),
                e.type = void 0,
                e.texture = void 0)
            },
            compressedTexImage2D: function() {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    t.texImage3D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(e) {
                !1 === P.equals(e) && (t.scissor(e.x, e.y, e.z, e.w),
                P.copy(e))
            },
            viewport: function(e) {
                !1 === C.equals(e) && (t.viewport(e.x, e.y, e.z, e.w),
                C.copy(e))
            },
            reset: function() {
                t.disable(t.BLEND),
                t.disable(t.CULL_FACE),
                t.disable(t.DEPTH_TEST),
                t.disable(t.POLYGON_OFFSET_FILL),
                t.disable(t.SCISSOR_TEST),
                t.disable(t.STENCIL_TEST),
                t.blendEquation(t.FUNC_ADD),
                t.blendFunc(t.ONE, t.ZERO),
                t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
                t.colorMask(!0, !0, !0, !0),
                t.clearColor(0, 0, 0, 0),
                t.depthMask(!0),
                t.depthFunc(t.LESS),
                t.clearDepth(1),
                t.stencilMask(4294967295),
                t.stencilFunc(t.ALWAYS, 0, 4294967295),
                t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
                t.clearStencil(0),
                t.cullFace(t.BACK),
                t.frontFace(t.CCW),
                t.polygonOffset(0, 0),
                t.activeTexture(t.TEXTURE0),
                t.useProgram(null),
                t.lineWidth(1),
                t.scissor(0, 0, t.canvas.width, t.canvas.height),
                t.viewport(0, 0, t.canvas.width, t.canvas.height),
                l = {},
                L = null,
                R = {},
                c = null,
                h = !1,
                u = null,
                d = null,
                p = null,
                m = null,
                f = null,
                g = null,
                v = null,
                y = !1,
                x = null,
                _ = null,
                b = null,
                w = null,
                M = null,
                r.reset(),
                s.reset(),
                o.reset()
            }
        }
    }
    function il(t, e, n, i, r, s, a) {
        const o = r.isWebGL2
          , l = r.maxTextures
          , c = r.maxCubemapSize
          , h = r.maxTextureSize
          , x = r.maxSamples
          , R = new WeakMap;
        let P, C = !1;
        try {
            C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
        } catch (t) {}
        function D(t, e) {
            return C ? new OffscreenCanvas(t,e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        }
        function N(t, e, n, i) {
            let r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
            r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    const i = e ? F.floorPowerOfTwo : Math.floor
                      , s = i(r * t.width)
                      , a = i(r * t.height);
                    void 0 === P && (P = D(s, a));
                    const o = n ? D(s, a) : P;
                    o.width = s,
                    o.height = a;
                    return o.getContext("2d").drawImage(t, 0, 0, s, a),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."),
                    o
                }
                return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
                t
            }
            return t
        }
        function I(t) {
            return F.isPowerOfTwo(t.width) && F.isPowerOfTwo(t.height)
        }
        function O(t, e) {
            return t.generateMipmaps && e && t.minFilter !== m && t.minFilter !== v
        }
        function z(e, n, r, s) {
            t.generateMipmap(e);
            i.get(n).__maxMipLevel = Math.log2(Math.max(r, s))
        }
        function U(n, i, r) {
            if (!1 === o)
                return i;
            if (null !== n) {
                if (void 0 !== t[n])
                    return t[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
            }
            let s = i;
            return i === t.RED && (r === t.FLOAT && (s = t.R32F),
            r === t.HALF_FLOAT && (s = t.R16F),
            r === t.UNSIGNED_BYTE && (s = t.R8)),
            i === t.RGB && (r === t.FLOAT && (s = t.RGB32F),
            r === t.HALF_FLOAT && (s = t.RGB16F),
            r === t.UNSIGNED_BYTE && (s = t.RGB8)),
            i === t.RGBA && (r === t.FLOAT && (s = t.RGBA32F),
            r === t.HALF_FLOAT && (s = t.RGBA16F),
            r === t.UNSIGNED_BYTE && (s = t.RGBA8)),
            s !== t.R16F && s !== t.R32F && s !== t.RGBA16F && s !== t.RGBA32F || e.get("EXT_color_buffer_float"),
            s
        }
        function B(e) {
            return e === m || e === f || e === g ? t.NEAREST : t.LINEAR
        }
        function G(e) {
            const n = e.target;
            n.removeEventListener("dispose", G),
            function(e) {
                const n = i.get(e);
                if (void 0 === n.__webglInit)
                    return;
                t.deleteTexture(n.__webglTexture),
                i.remove(e)
            }(n),
            n.isVideoTexture && R.delete(n),
            a.memory.textures--
        }
        function k(e) {
            const n = e.target;
            n.removeEventListener("dispose", k),
            function(e) {
                const n = e.texture
                  , r = i.get(e)
                  , s = i.get(n);
                if (!e)
                    return;
                void 0 !== s.__webglTexture && t.deleteTexture(s.__webglTexture);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget)
                    for (let e = 0; e < 6; e++)
                        t.deleteFramebuffer(r.__webglFramebuffer[e]),
                        r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                else
                    t.deleteFramebuffer(r.__webglFramebuffer),
                    r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer),
                    r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                    r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                    r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                i.remove(n),
                i.remove(e)
            }(n),
            a.memory.textures--
        }
        let H = 0;
        function V(e, r) {
            const s = i.get(e);
            if (e.isVideoTexture && function(t) {
                const e = a.render.frame;
                R.get(t) !== e && (R.set(t, e),
                t.update())
            }(e),
            e.version > 0 && s.__version !== e.version) {
                const t = e.image;
                if (void 0 === t)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== t.complete)
                        return void Z(s, e, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            n.activeTexture(t.TEXTURE0 + r),
            n.bindTexture(t.TEXTURE_2D, s.__webglTexture)
        }
        function W(e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version ? function(e, i, r) {
                if (6 !== i.image.length)
                    return;
                Y(e, i),
                n.activeTexture(t.TEXTURE0 + r),
                n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture),
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY),
                t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
                t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment),
                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
                const a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture)
                  , l = i.image[0] && i.image[0].isDataTexture
                  , h = [];
                for (let t = 0; t < 6; t++)
                    h[t] = a || l ? l ? i.image[t].image : i.image[t] : N(i.image[t], !1, !0, c);
                const u = h[0]
                  , d = I(u) || o
                  , p = s.convert(i.format)
                  , m = s.convert(i.type)
                  , f = U(i.internalFormat, p, m);
                let g;
                if (q(t.TEXTURE_CUBE_MAP, i, d),
                a) {
                    for (let e = 0; e < 6; e++) {
                        g = h[e].mipmaps;
                        for (let r = 0; r < g.length; r++) {
                            const s = g[r];
                            i.format !== T && i.format !== E ? null !== p ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, r, f, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, r, f, s.width, s.height, 0, p, m, s.data)
                        }
                    }
                    e.__maxMipLevel = g.length - 1
                } else {
                    g = i.mipmaps;
                    for (let e = 0; e < 6; e++)
                        if (l) {
                            n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, f, h[e].width, h[e].height, 0, p, m, h[e].data);
                            for (let i = 0; i < g.length; i++) {
                                const r = g[i].image[e].image;
                                n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, f, r.width, r.height, 0, p, m, r.data)
                            }
                        } else {
                            n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, f, p, m, h[e]);
                            for (let i = 0; i < g.length; i++) {
                                const r = g[i];
                                n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, f, p, m, r.image[e])
                            }
                        }
                    e.__maxMipLevel = g.length
                }
                O(i, d) && z(t.TEXTURE_CUBE_MAP, i, u.width, u.height);
                e.__version = i.version,
                i.onUpdate && i.onUpdate(i)
            }(a, e, r) : (n.activeTexture(t.TEXTURE0 + r),
            n.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture))
        }
        const j = {
            [u]: t.REPEAT,
            [d]: t.CLAMP_TO_EDGE,
            [p]: t.MIRRORED_REPEAT
        }
          , X = {
            [m]: t.NEAREST,
            [f]: t.NEAREST_MIPMAP_NEAREST,
            [g]: t.NEAREST_MIPMAP_LINEAR,
            [v]: t.LINEAR,
            1007: t.LINEAR_MIPMAP_NEAREST,
            [y]: t.LINEAR_MIPMAP_LINEAR
        };
        function q(n, s, a) {
            if (a ? (t.texParameteri(n, t.TEXTURE_WRAP_S, j[s.wrapS]),
            t.texParameteri(n, t.TEXTURE_WRAP_T, j[s.wrapT]),
            n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, j[s.wrapR]),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, X[s.magFilter]),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, X[s.minFilter])) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
            s.wrapS === d && s.wrapT === d || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, B(s.magFilter)),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, B(s.minFilter)),
            s.minFilter !== m && s.minFilter !== v && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            !0 === e.has("EXT_texture_filter_anisotropic")) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.type === w && !1 === e.has("OES_texture_float_linear"))
                    return;
                if (!1 === o && s.type === M && !1 === e.has("OES_texture_half_float_linear"))
                    return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())),
                i.get(s).__currentAnisotropy = s.anisotropy)
            }
        }
        function Y(e, n) {
            void 0 === e.__webglInit && (e.__webglInit = !0,
            n.addEventListener("dispose", G),
            e.__webglTexture = t.createTexture(),
            a.memory.textures++)
        }
        function Z(e, i, r) {
            let a = t.TEXTURE_2D;
            i.isDataTexture2DArray && (a = t.TEXTURE_2D_ARRAY),
            i.isDataTexture3D && (a = t.TEXTURE_3D),
            Y(e, i),
            n.activeTexture(t.TEXTURE0 + r),
            n.bindTexture(a, e.__webglTexture),
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY),
            t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
            t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment),
            t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
            const l = function(t) {
                return !o && (t.wrapS !== d || t.wrapT !== d || t.minFilter !== m && t.minFilter !== v)
            }(i) && !1 === I(i.image)
              , c = N(i.image, l, !1, h)
              , u = I(c) || o
              , p = s.convert(i.format);
            let f, g = s.convert(i.type), y = U(i.internalFormat, p, g);
            q(a, i, u);
            const x = i.mipmaps;
            if (i.isDepthTexture)
                y = t.DEPTH_COMPONENT,
                o ? y = i.type === w ? t.DEPTH_COMPONENT32F : i.type === b ? t.DEPTH_COMPONENT24 : i.type === S ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT16 : i.type === w && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                i.format === A && y === t.DEPTH_COMPONENT && i.type !== _ && i.type !== b && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                i.type = _,
                g = s.convert(i.type)),
                i.format === L && y === t.DEPTH_COMPONENT && (y = t.DEPTH_STENCIL,
                i.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                i.type = S,
                g = s.convert(i.type))),
                n.texImage2D(t.TEXTURE_2D, 0, y, c.width, c.height, 0, p, g, null);
            else if (i.isDataTexture)
                if (x.length > 0 && u) {
                    for (let e = 0, i = x.length; e < i; e++)
                        f = x[e],
                        n.texImage2D(t.TEXTURE_2D, e, y, f.width, f.height, 0, p, g, f.data);
                    i.generateMipmaps = !1,
                    e.__maxMipLevel = x.length - 1
                } else
                    n.texImage2D(t.TEXTURE_2D, 0, y, c.width, c.height, 0, p, g, c.data),
                    e.__maxMipLevel = 0;
            else if (i.isCompressedTexture) {
                for (let e = 0, r = x.length; e < r; e++)
                    f = x[e],
                    i.format !== T && i.format !== E ? null !== p ? n.compressedTexImage2D(t.TEXTURE_2D, e, y, f.width, f.height, 0, f.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, e, y, f.width, f.height, 0, p, g, f.data);
                e.__maxMipLevel = x.length - 1
            } else if (i.isDataTexture2DArray)
                n.texImage3D(t.TEXTURE_2D_ARRAY, 0, y, c.width, c.height, c.depth, 0, p, g, c.data),
                e.__maxMipLevel = 0;
            else if (i.isDataTexture3D)
                n.texImage3D(t.TEXTURE_3D, 0, y, c.width, c.height, c.depth, 0, p, g, c.data),
                e.__maxMipLevel = 0;
            else if (x.length > 0 && u) {
                for (let e = 0, i = x.length; e < i; e++)
                    f = x[e],
                    n.texImage2D(t.TEXTURE_2D, e, y, p, g, f);
                i.generateMipmaps = !1,
                e.__maxMipLevel = x.length - 1
            } else
                n.texImage2D(t.TEXTURE_2D, 0, y, p, g, c),
                e.__maxMipLevel = 0;
            O(i, u) && z(a, i, c.width, c.height),
            e.__version = i.version,
            i.onUpdate && i.onUpdate(i)
        }
        function J(e, r, a, o) {
            const l = r.texture
              , c = s.convert(l.format)
              , h = s.convert(l.type)
              , u = U(l.internalFormat, c, h);
            o === t.TEXTURE_3D || o === t.TEXTURE_2D_ARRAY ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null),
            t.bindFramebuffer(t.FRAMEBUFFER, e),
            t.framebufferTexture2D(t.FRAMEBUFFER, a, o, i.get(l).__webglTexture, 0),
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }
        function K(e, n, i) {
            if (t.bindRenderbuffer(t.RENDERBUFFER, e),
            n.depthBuffer && !n.stencilBuffer) {
                let r = t.DEPTH_COMPONENT16;
                if (i) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === w ? r = t.DEPTH_COMPONENT32F : e.type === b && (r = t.DEPTH_COMPONENT24));
                    const i = $(n);
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, i, r, n.width, n.height)
                } else
                    t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, e, t.DEPTH24_STENCIL8, n.width, n.height)
                } else
                    t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height);
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)
            } else {
                const e = n.texture
                  , r = s.convert(e.format)
                  , a = s.convert(e.type)
                  , o = U(e.internalFormat, r, a);
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, e, o, n.width, n.height)
                } else
                    t.renderbufferStorage(t.RENDERBUFFER, o, n.width, n.height)
            }
            t.bindRenderbuffer(t.RENDERBUFFER, null)
        }
        function Q(e) {
            const n = i.get(e)
              , r = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture) {
                if (r)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, n) {
                    if (n && n.isWebGLCubeRenderTarget)
                        throw new Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(t.FRAMEBUFFER, e),
                    !n.depthTexture || !n.depthTexture.isDepthTexture)
                        throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width,
                    n.depthTexture.image.height = n.height,
                    n.depthTexture.needsUpdate = !0),
                    V(n.depthTexture, 0);
                    const r = i.get(n.depthTexture).__webglTexture;
                    if (n.depthTexture.format === A)
                        t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
                    else {
                        if (n.depthTexture.format !== L)
                            throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
                    }
                }(n.__webglFramebuffer, e)
            } else if (r) {
                n.__webglDepthbuffer = [];
                for (let i = 0; i < 6; i++)
                    t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[i]),
                    n.__webglDepthbuffer[i] = t.createRenderbuffer(),
                    K(n.__webglDepthbuffer[i], e, !1)
            } else
                t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer),
                n.__webglDepthbuffer = t.createRenderbuffer(),
                K(n.__webglDepthbuffer, e, !1);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }
        function $(t) {
            return o && t.isWebGLMultisampleRenderTarget ? Math.min(x, t.samples) : 0
        }
        let tt = !1
          , et = !1;
        this.allocateTextureUnit = function() {
            const t = H;
            return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l),
            H += 1,
            t
        }
        ,
        this.resetTextureUnits = function() {
            H = 0
        }
        ,
        this.setTexture2D = V,
        this.setTexture2DArray = function(e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? Z(s, e, r) : (n.activeTexture(t.TEXTURE0 + r),
            n.bindTexture(t.TEXTURE_2D_ARRAY, s.__webglTexture))
        }
        ,
        this.setTexture3D = function(e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? Z(s, e, r) : (n.activeTexture(t.TEXTURE0 + r),
            n.bindTexture(t.TEXTURE_3D, s.__webglTexture))
        }
        ,
        this.setTextureCube = W,
        this.setupRenderTarget = function(e) {
            const r = e.texture
              , l = i.get(e)
              , c = i.get(r);
            e.addEventListener("dispose", k),
            c.__webglTexture = t.createTexture(),
            a.memory.textures++;
            const h = !0 === e.isWebGLCubeRenderTarget
              , u = !0 === e.isWebGLMultisampleRenderTarget
              , d = r.isDataTexture3D || r.isDataTexture2DArray
              , p = I(e) || o;
            if (!o || r.format !== E || r.type !== w && r.type !== M || (r.format = T,
            console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
            h) {
                l.__webglFramebuffer = [];
                for (let e = 0; e < 6; e++)
                    l.__webglFramebuffer[e] = t.createFramebuffer()
            } else if (l.__webglFramebuffer = t.createFramebuffer(),
            u)
                if (o) {
                    l.__webglMultisampledFramebuffer = t.createFramebuffer(),
                    l.__webglColorRenderbuffer = t.createRenderbuffer(),
                    t.bindRenderbuffer(t.RENDERBUFFER, l.__webglColorRenderbuffer);
                    const n = s.convert(r.format)
                      , i = s.convert(r.type)
                      , a = U(r.internalFormat, n, i)
                      , o = $(e);
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, o, a, e.width, e.height),
                    t.bindFramebuffer(t.FRAMEBUFFER, l.__webglMultisampledFramebuffer),
                    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, l.__webglColorRenderbuffer),
                    t.bindRenderbuffer(t.RENDERBUFFER, null),
                    e.depthBuffer && (l.__webglDepthRenderbuffer = t.createRenderbuffer(),
                    K(l.__webglDepthRenderbuffer, e, !0)),
                    t.bindFramebuffer(t.FRAMEBUFFER, null)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (h) {
                n.bindTexture(t.TEXTURE_CUBE_MAP, c.__webglTexture),
                q(t.TEXTURE_CUBE_MAP, r, p);
                for (let n = 0; n < 6; n++)
                    J(l.__webglFramebuffer[n], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + n);
                O(r, p) && z(t.TEXTURE_CUBE_MAP, r, e.width, e.height),
                n.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else {
                let i = t.TEXTURE_2D;
                if (d)
                    if (o) {
                        i = r.isDataTexture3D ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY
                    } else
                        console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
                n.bindTexture(i, c.__webglTexture),
                q(i, r, p),
                J(l.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, i),
                O(r, p) && z(t.TEXTURE_2D, r, e.width, e.height),
                n.bindTexture(t.TEXTURE_2D, null)
            }
            e.depthBuffer && Q(e)
        }
        ,
        this.updateRenderTargetMipmap = function(e) {
            const r = e.texture;
            if (O(r, I(e) || o)) {
                const s = e.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D
                  , a = i.get(r).__webglTexture;
                n.bindTexture(s, a),
                z(s, r, e.width, e.height),
                n.bindTexture(s, null)
            }
        }
        ,
        this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (o) {
                    const n = i.get(e);
                    t.bindFramebuffer(t.READ_FRAMEBUFFER, n.__webglMultisampledFramebuffer),
                    t.bindFramebuffer(t.DRAW_FRAMEBUFFER, n.__webglFramebuffer);
                    const r = e.width
                      , s = e.height;
                    let a = t.COLOR_BUFFER_BIT;
                    e.depthBuffer && (a |= t.DEPTH_BUFFER_BIT),
                    e.stencilBuffer && (a |= t.STENCIL_BUFFER_BIT),
                    t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, t.NEAREST),
                    t.bindFramebuffer(t.FRAMEBUFFER, n.__webglMultisampledFramebuffer)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
        ,
        this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
            tt = !0),
            t = t.texture),
            V(t, e)
        }
        ,
        this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            et = !0),
            t = t.texture),
            W(t, e)
        }
    }
    function rl(t, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function(n) {
                let r;
                if (n === x)
                    return t.UNSIGNED_BYTE;
                if (1017 === n)
                    return t.UNSIGNED_SHORT_4_4_4_4;
                if (1018 === n)
                    return t.UNSIGNED_SHORT_5_5_5_1;
                if (1019 === n)
                    return t.UNSIGNED_SHORT_5_6_5;
                if (1010 === n)
                    return t.BYTE;
                if (1011 === n)
                    return t.SHORT;
                if (n === _)
                    return t.UNSIGNED_SHORT;
                if (1013 === n)
                    return t.INT;
                if (n === b)
                    return t.UNSIGNED_INT;
                if (n === w)
                    return t.FLOAT;
                if (n === M)
                    return i ? t.HALF_FLOAT : (r = e.get("OES_texture_half_float"),
                    null !== r ? r.HALF_FLOAT_OES : null);
                if (1021 === n)
                    return t.ALPHA;
                if (n === E)
                    return t.RGB;
                if (n === T)
                    return t.RGBA;
                if (1024 === n)
                    return t.LUMINANCE;
                if (1025 === n)
                    return t.LUMINANCE_ALPHA;
                if (n === A)
                    return t.DEPTH_COMPONENT;
                if (n === L)
                    return t.DEPTH_STENCIL;
                if (1028 === n)
                    return t.RED;
                if (1029 === n)
                    return t.RED_INTEGER;
                if (1030 === n)
                    return t.RG;
                if (1031 === n)
                    return t.RG_INTEGER;
                if (1032 === n)
                    return t.RGB_INTEGER;
                if (1033 === n)
                    return t.RGBA_INTEGER;
                if (33776 === n || 33777 === n || 33778 === n || 33779 === n) {
                    if (r = e.get("WEBGL_compressed_texture_s3tc"),
                    null === r)
                        return null;
                    if (33776 === n)
                        return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === n)
                        return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === n)
                        return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === n)
                        return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
                    if (r = e.get("WEBGL_compressed_texture_pvrtc"),
                    null === r)
                        return null;
                    if (35840 === n)
                        return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === n)
                        return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === n)
                        return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === n)
                        return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === n)
                    return r = e.get("WEBGL_compressed_texture_etc1"),
                    null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
                if ((37492 === n || 37496 === n) && (r = e.get("WEBGL_compressed_texture_etc"),
                null !== r)) {
                    if (37492 === n)
                        return r.COMPRESSED_RGB8_ETC2;
                    if (37496 === n)
                        return r.COMPRESSED_RGBA8_ETC2_EAC
                }
                return 37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n || 37840 === n || 37841 === n || 37842 === n || 37843 === n || 37844 === n || 37845 === n || 37846 === n || 37847 === n || 37848 === n || 37849 === n || 37850 === n || 37851 === n || 37852 === n || 37853 === n ? (r = e.get("WEBGL_compressed_texture_astc"),
                null !== r ? n : null) : 36492 === n ? (r = e.get("EXT_texture_compression_bptc"),
                null !== r ? n : null) : n === S ? i ? t.UNSIGNED_INT_24_8 : (r = e.get("WEBGL_depth_texture"),
                null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0
            }
        }
    }
    function sl(t=[]) {
        Gi.call(this),
        this.cameras = t
    }
    function al() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    function ol(t, e) {
        const n = this;
        let i = null
          , r = 1
          , s = null
          , a = "local-floor"
          , o = null;
        const l = []
          , c = new Map
          , h = new Gi;
        h.layers.enable(1),
        h.viewport = new O;
        const u = new Gi;
        u.layers.enable(2),
        u.viewport = new O;
        const d = [h, u]
          , p = new sl;
        p.layers.enable(1),
        p.layers.enable(2);
        let m = null
          , f = null;
        function g(t) {
            const e = c.get(t.inputSource);
            e && e.dispatchEvent({
                type: t.type,
                data: t.inputSource
            })
        }
        function v() {
            c.forEach((function(t, e) {
                t.disconnect(e)
            }
            )),
            c.clear(),
            m = null,
            f = null,
            t.setFramebuffer(null),
            t.setRenderTarget(t.getRenderTarget()),
            M.stop(),
            n.isPresenting = !1,
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        function y(t) {
            const e = i.inputSources;
            for (let t = 0; t < l.length; t++)
                c.set(e[t], l[t]);
            for (let e = 0; e < t.removed.length; e++) {
                const n = t.removed[e]
                  , i = c.get(n);
                i && (i.dispatchEvent({
                    type: "disconnected",
                    data: n
                }),
                c.delete(n))
            }
            for (let e = 0; e < t.added.length; e++) {
                const n = t.added[e]
                  , i = c.get(n);
                i && i.dispatchEvent({
                    type: "connected",
                    data: n
                })
            }
        }
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(t) {
            let e = l[t];
            return void 0 === e && (e = new al,
            l[t] = e),
            e.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(t) {
            let e = l[t];
            return void 0 === e && (e = new al,
            l[t] = e),
            e.getGripSpace()
        }
        ,
        this.getHand = function(t) {
            let e = l[t];
            return void 0 === e && (e = new al,
            l[t] = e),
            e.getHandSpace()
        }
        ,
        this.setFramebufferScaleFactor = function(t) {
            r = t,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(t) {
            a = t,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return s
        }
        ,
        this.getSession = function() {
            return i
        }
        ,
        this.setSession = async function(t) {
            if (i = t,
            null !== i) {
                i.addEventListener("select", g),
                i.addEventListener("selectstart", g),
                i.addEventListener("selectend", g),
                i.addEventListener("squeeze", g),
                i.addEventListener("squeezestart", g),
                i.addEventListener("squeezeend", g),
                i.addEventListener("end", v),
                i.addEventListener("inputsourceschange", y);
                const t = e.getContextAttributes();
                !0 !== t.xrCompatible && await e.makeXRCompatible();
                const o = {
                    antialias: t.antialias,
                    alpha: t.alpha,
                    depth: t.depth,
                    stencil: t.stencil,
                    framebufferScaleFactor: r
                }
                  , l = new XRWebGLLayer(i,e,o);
                i.updateRenderState({
                    baseLayer: l
                }),
                s = await i.requestReferenceSpace(a),
                M.setContext(i),
                M.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ;
        const x = new G
          , _ = new G;
        function b(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.copy(t.matrixWorld).invert()
        }
        this.getCamera = function(t) {
            p.near = u.near = h.near = t.near,
            p.far = u.far = h.far = t.far,
            m === p.near && f === p.far || (i.updateRenderState({
                depthNear: p.near,
                depthFar: p.far
            }),
            m = p.near,
            f = p.far);
            const e = t.parent
              , n = p.cameras;
            b(p, e);
            for (let t = 0; t < n.length; t++)
                b(n[t], e);
            t.matrixWorld.copy(p.matrixWorld),
            t.matrix.copy(p.matrix),
            t.matrix.decompose(t.position, t.quaternion, t.scale);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++)
                r[t].updateMatrixWorld(!0);
            return 2 === n.length ? function(t, e, n) {
                x.setFromMatrixPosition(e.matrixWorld),
                _.setFromMatrixPosition(n.matrixWorld);
                const i = x.distanceTo(_)
                  , r = e.projectionMatrix.elements
                  , s = n.projectionMatrix.elements
                  , a = r[14] / (r[10] - 1)
                  , o = r[14] / (r[10] + 1)
                  , l = (r[9] + 1) / r[5]
                  , c = (r[9] - 1) / r[5]
                  , h = (r[8] - 1) / r[0]
                  , u = (s[8] + 1) / s[0]
                  , d = a * h
                  , p = a * u
                  , m = i / (-h + u)
                  , f = m * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                t.translateX(f),
                t.translateZ(m),
                t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                t.matrixWorldInverse.copy(t.matrixWorld).invert();
                const g = a + m
                  , v = o + m
                  , y = d - f
                  , b = p + (i - f)
                  , w = l * o / v * g
                  , M = c * o / v * g;
                t.projectionMatrix.makePerspective(y, b, w, M, g, v)
            }(p, h, u) : p.projectionMatrix.copy(h.projectionMatrix),
            p
        }
        ;
        let w = null;
        const M = new na;
        M.setAnimationLoop((function(e, n) {
            if (o = n.getViewerPose(s),
            null !== o) {
                const e = o.views
                  , n = i.renderState.baseLayer;
                t.setFramebuffer(n.framebuffer);
                let r = !1;
                e.length !== p.cameras.length && (p.cameras.length = 0,
                r = !0);
                for (let t = 0; t < e.length; t++) {
                    const i = e[t]
                      , s = n.getViewport(i)
                      , a = d[t];
                    a.matrix.fromArray(i.transform.matrix),
                    a.projectionMatrix.fromArray(i.projectionMatrix),
                    a.viewport.set(s.x, s.y, s.width, s.height),
                    0 === t && p.matrix.copy(a.matrix),
                    !0 === r && p.cameras.push(a)
                }
            }
            const r = i.inputSources;
            for (let t = 0; t < l.length; t++) {
                const e = l[t]
                  , i = r[t];
                e.update(i, n, s)
            }
            w && w(e, n)
        }
        )),
        this.setAnimationLoop = function(t) {
            w = t
        }
        ,
        this.dispose = function() {}
    }
    function ll(t) {
        function e(e, n) {
            e.opacity.value = n.opacity,
            n.color && e.diffuse.value.copy(n.color),
            n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
            n.map && (e.map.value = n.map),
            n.alphaMap && (e.alphaMap.value = n.alphaMap),
            n.specularMap && (e.specularMap.value = n.specularMap);
            const i = t.get(n).envMap;
            if (i) {
                e.envMap.value = i,
                e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1,
                e.reflectivity.value = n.reflectivity,
                e.refractionRatio.value = n.refractionRatio;
                const r = t.get(i).__maxMipLevel;
                void 0 !== r && (e.maxMipLevel.value = r)
            }
            let r, s;
            n.lightMap && (e.lightMap.value = n.lightMap,
            e.lightMapIntensity.value = n.lightMapIntensity),
            n.aoMap && (e.aoMap.value = n.aoMap,
            e.aoMapIntensity.value = n.aoMapIntensity),
            n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
            void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
            !0 === r.matrixAutoUpdate && r.updateMatrix(),
            e.uvTransform.value.copy(r.matrix)),
            n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap),
            void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture),
            !0 === s.matrixAutoUpdate && s.updateMatrix(),
            e.uv2Transform.value.copy(s.matrix))
        }
        function n(e, n) {
            e.roughness.value = n.roughness,
            e.metalness.value = n.metalness,
            n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
            n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
            n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
            n.bumpMap && (e.bumpMap.value = n.bumpMap,
            e.bumpScale.value = n.bumpScale,
            1 === n.side && (e.bumpScale.value *= -1)),
            n.normalMap && (e.normalMap.value = n.normalMap,
            e.normalScale.value.copy(n.normalScale),
            1 === n.side && e.normalScale.value.negate()),
            n.displacementMap && (e.displacementMap.value = n.displacementMap,
            e.displacementScale.value = n.displacementScale,
            e.displacementBias.value = n.displacementBias);
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
        }
        return {
            refreshFogUniforms: function(t, e) {
                t.fogColor.value.copy(e.color),
                e.isFog ? (t.fogNear.value = e.near,
                t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            },
            refreshMaterialUniforms: function(t, i, r, s) {
                i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i),
                function(t, e) {
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                }(t, i)) : i.isMeshToonMaterial ? (e(t, i),
                function(t, e) {
                    e.gradientMap && (t.gradientMap.value = e.gradientMap);
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshPhongMaterial ? (e(t, i),
                function(t, e) {
                    t.specular.value.copy(e.specular),
                    t.shininess.value = Math.max(e.shininess, 1e-4),
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshStandardMaterial ? (e(t, i),
                i.isMeshPhysicalMaterial ? function(t, e) {
                    n(t, e),
                    t.reflectivity.value = e.reflectivity,
                    t.clearcoat.value = e.clearcoat,
                    t.clearcoatRoughness.value = e.clearcoatRoughness,
                    e.sheen && t.sheen.value.copy(e.sheen);
                    e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                    e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                    e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    t.clearcoatNormalMap.value = e.clearcoatNormalMap,
                    1 === e.side && t.clearcoatNormalScale.value.negate());
                    t.transmission.value = e.transmission,
                    e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
                }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i),
                function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshDepthMaterial ? (e(t, i),
                function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i),
                function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias);
                    t.referencePosition.value.copy(e.referencePosition),
                    t.nearDistance.value = e.nearDistance,
                    t.farDistance.value = e.farDistance
                }(t, i)) : i.isMeshNormalMaterial ? (e(t, i),
                function(t, e) {
                    e.bumpMap && (t.bumpMap.value = e.bumpMap,
                    t.bumpScale.value = e.bumpScale,
                    1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap,
                    t.normalScale.value.copy(e.normalScale),
                    1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap,
                    t.displacementScale.value = e.displacementScale,
                    t.displacementBias.value = e.displacementBias)
                }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity
                }(t, i),
                i.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize,
                    t.totalSize.value = e.dashSize + e.gapSize,
                    t.scale.value = e.scale
                }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity,
                    t.size.value = e.size * n,
                    t.scale.value = .5 * i,
                    e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                    t.uvTransform.value.copy(r.matrix))
                }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color),
                    t.opacity.value = e.opacity,
                    t.rotation.value = e.rotation,
                    e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    let n;
                    e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    t.uvTransform.value.copy(n.matrix))
                }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color),
                t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
            }
        }
    }
    function cl(t) {
        const e = void 0 !== (t = t || {}).canvas ? t.canvas : function() {
            const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            return t.style.display = "block",
            t
        }()
          , n = void 0 !== t.context ? t.context : null
          , i = void 0 !== t.alpha && t.alpha
          , r = void 0 === t.depth || t.depth
          , s = void 0 === t.stencil || t.stencil
          , a = void 0 !== t.antialias && t.antialias
          , o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , c = void 0 !== t.powerPreference ? t.powerPreference : "default"
          , h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let u = null
          , d = null;
        const p = []
          , m = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.outputEncoding = D,
        this.physicallyCorrectLights = !1,
        this.toneMapping = 0,
        this.toneMappingExposure = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        const f = this;
        let g = !1
          , v = null
          , y = 0
          , _ = 0
          , b = null
          , S = null
          , E = -1
          , A = null;
        const L = new O
          , R = new O;
        let P = null
          , C = e.width
          , N = e.height
          , I = 1
          , z = null
          , U = null;
        const B = new O(0,0,C,N)
          , k = new O(0,0,C,N);
        let H = !1;
        const W = new Ii;
        let j = !1
          , X = !1;
        const q = new ht
          , Y = new G
          , Z = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function K() {
            return null === b ? I : 1
        }
        let Q, $, tt, et, nt, it, rt, st, at, ot, lt, ct, ut, dt, pt, mt, ft, gt, vt, yt, xt, _t = n;
        function bt(t, n) {
            for (let i = 0; i < t.length; i++) {
                const r = t[i]
                  , s = e.getContext(r, n);
                if (null !== s)
                    return s
            }
            return null
        }
        try {
            const t = {
                alpha: i,
                depth: r,
                stencil: s,
                antialias: a,
                premultipliedAlpha: o,
                preserveDrawingBuffer: l,
                powerPreference: c,
                failIfMajorPerformanceCaveat: h
            };
            if (e.addEventListener("webglcontextlost", Et, !1),
            e.addEventListener("webglcontextrestored", Tt, !1),
            null === _t) {
                const e = ["webgl2", "webgl", "experimental-webgl"];
                if (!0 === f.isWebGL1Renderer && e.shift(),
                _t = bt(e, t),
                null === _t)
                    throw bt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            void 0 === _t.getShaderPrecisionFormat && (_t.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message),
            t
        }
        function wt() {
            Q = new va(_t),
            $ = new ha(_t,Q,t),
            Q.init($),
            yt = new rl(_t,Q,$),
            tt = new nl(_t,Q,$),
            tt.scissor(R.copy(k).multiplyScalar(I).floor()),
            tt.viewport(L.copy(B).multiplyScalar(I).floor()),
            et = new _a(_t),
            nt = new Wo,
            it = new il(_t,Q,tt,nt,$,yt,et),
            rt = new ga(f),
            st = new ia(_t,$),
            xt = new la(_t,Q,st,$),
            at = new ya(_t,st,et,xt),
            ot = new Sa(_t,at,st,et),
            ft = new Ma(_t),
            pt = new ua(nt),
            lt = new Vo(f,rt,Q,$,xt,pt),
            ct = new ll(nt),
            ut = new Yo(nt),
            dt = new tl(Q,$),
            mt = new oa(f,rt,tt,ot,o),
            gt = new ca(_t,Q,et,$),
            vt = new xa(_t,Q,et,$),
            et.programs = lt.programs,
            f.capabilities = $,
            f.extensions = Q,
            f.properties = nt,
            f.renderLists = ut,
            f.state = tt,
            f.info = et
        }
        wt();
        const Mt = new ol(f,_t);
        this.xr = Mt;
        const St = new el(f,ot,$.maxTextureSize);
        function Et(t) {
            t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            g = !0
        }
        function Tt() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            g = !1,
            wt()
        }
        function At(t) {
            const e = t.target;
            e.removeEventListener("dispose", At),
            function(t) {
                Lt(t),
                nt.remove(t)
            }(e)
        }
        function Lt(t) {
            const e = nt.get(t).program;
            void 0 !== e && lt.releaseProgram(e)
        }
        this.shadowMap = St,
        this.getContext = function() {
            return _t
        }
        ,
        this.getContextAttributes = function() {
            return _t.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const t = Q.get("WEBGL_lose_context");
            t && t.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const t = Q.get("WEBGL_lose_context");
            t && t.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return I
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (I = t,
            this.setSize(C, N, !1))
        }
        ,
        this.getSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
            t = new V),
            t.set(C, N)
        }
        ,
        this.setSize = function(t, n, i) {
            Mt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (C = t,
            N = n,
            e.width = Math.floor(t * I),
            e.height = Math.floor(n * I),
            !1 !== i && (e.style.width = t + "px",
            e.style.height = n + "px"),
            this.setViewport(0, 0, t, n))
        }
        ,
        this.getDrawingBufferSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
            t = new V),
            t.set(C * I, N * I).floor()
        }
        ,
        this.setDrawingBufferSize = function(t, n, i) {
            C = t,
            N = n,
            I = i,
            e.width = Math.floor(t * i),
            e.height = Math.floor(n * i),
            this.setViewport(0, 0, t, n)
        }
        ,
        this.getCurrentViewport = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
            t = new O),
            t.copy(L)
        }
        ,
        this.getViewport = function(t) {
            return t.copy(B)
        }
        ,
        this.setViewport = function(t, e, n, i) {
            t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i),
            tt.viewport(L.copy(B).multiplyScalar(I).floor())
        }
        ,
        this.getScissor = function(t) {
            return t.copy(k)
        }
        ,
        this.setScissor = function(t, e, n, i) {
            t.isVector4 ? k.set(t.x, t.y, t.z, t.w) : k.set(t, e, n, i),
            tt.scissor(R.copy(k).multiplyScalar(I).floor())
        }
        ,
        this.getScissorTest = function() {
            return H
        }
        ,
        this.setScissorTest = function(t) {
            tt.setScissorTest(H = t)
        }
        ,
        this.setOpaqueSort = function(t) {
            z = t
        }
        ,
        this.setTransparentSort = function(t) {
            U = t
        }
        ,
        this.getClearColor = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),
            t = new J),
            t.copy(mt.getClearColor())
        }
        ,
        this.setClearColor = function() {
            mt.setClearColor.apply(mt, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return mt.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            mt.setClearAlpha.apply(mt, arguments)
        }
        ,
        this.clear = function(t, e, n) {
            let i = 0;
            (void 0 === t || t) && (i |= _t.COLOR_BUFFER_BIT),
            (void 0 === e || e) && (i |= _t.DEPTH_BUFFER_BIT),
            (void 0 === n || n) && (i |= _t.STENCIL_BUFFER_BIT),
            _t.clear(i)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", Et, !1),
            e.removeEventListener("webglcontextrestored", Tt, !1),
            ut.dispose(),
            dt.dispose(),
            nt.dispose(),
            rt.dispose(),
            ot.dispose(),
            xt.dispose(),
            Mt.dispose(),
            Pt.stop()
        }
        ,
        this.renderBufferImmediate = function(t, e) {
            xt.initAttributes();
            const n = nt.get(t);
            t.hasPositions && !n.position && (n.position = _t.createBuffer()),
            t.hasNormals && !n.normal && (n.normal = _t.createBuffer()),
            t.hasUvs && !n.uv && (n.uv = _t.createBuffer()),
            t.hasColors && !n.color && (n.color = _t.createBuffer());
            const i = e.getAttributes();
            t.hasPositions && (_t.bindBuffer(_t.ARRAY_BUFFER, n.position),
            _t.bufferData(_t.ARRAY_BUFFER, t.positionArray, _t.DYNAMIC_DRAW),
            xt.enableAttribute(i.position),
            _t.vertexAttribPointer(i.position, 3, _t.FLOAT, !1, 0, 0)),
            t.hasNormals && (_t.bindBuffer(_t.ARRAY_BUFFER, n.normal),
            _t.bufferData(_t.ARRAY_BUFFER, t.normalArray, _t.DYNAMIC_DRAW),
            xt.enableAttribute(i.normal),
            _t.vertexAttribPointer(i.normal, 3, _t.FLOAT, !1, 0, 0)),
            t.hasUvs && (_t.bindBuffer(_t.ARRAY_BUFFER, n.uv),
            _t.bufferData(_t.ARRAY_BUFFER, t.uvArray, _t.DYNAMIC_DRAW),
            xt.enableAttribute(i.uv),
            _t.vertexAttribPointer(i.uv, 2, _t.FLOAT, !1, 0, 0)),
            t.hasColors && (_t.bindBuffer(_t.ARRAY_BUFFER, n.color),
            _t.bufferData(_t.ARRAY_BUFFER, t.colorArray, _t.DYNAMIC_DRAW),
            xt.enableAttribute(i.color),
            _t.vertexAttribPointer(i.color, 3, _t.FLOAT, !1, 0, 0)),
            xt.disableUnusedAttributes(),
            _t.drawArrays(_t.TRIANGLES, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, e, n, i, r, s) {
            null === e && (e = Z);
            const a = r.isMesh && r.matrixWorld.determinant() < 0
              , o = Ot(t, e, i, r);
            tt.setMaterial(i, a);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count)
                    return
            } else if (0 === l.count)
                return;
            let h, u = 1;
            !0 === i.wireframe && (l = at.getWireframeAttribute(n),
            u = 2),
            (i.morphTargets || i.morphNormals) && ft.update(r, n, i, o),
            xt.setup(r, i, o, n, l);
            let d = gt;
            null !== l && (h = st.get(l),
            d = vt,
            d.setIndex(h));
            const p = null !== l ? l.count : c.count
              , m = n.drawRange.start * u
              , f = n.drawRange.count * u
              , g = null !== s ? s.start * u : 0
              , v = null !== s ? s.count * u : 1 / 0
              , y = Math.max(m, g)
              , x = Math.min(p, m + f, g + v) - 1
              , _ = Math.max(0, x - y + 1);
            if (0 !== _) {
                if (r.isMesh)
                    !0 === i.wireframe ? (tt.setLineWidth(i.wireframeLinewidth * K()),
                    d.setMode(_t.LINES)) : d.setMode(_t.TRIANGLES);
                else if (r.isLine) {
                    let t = i.linewidth;
                    void 0 === t && (t = 1),
                    tt.setLineWidth(t * K()),
                    r.isLineSegments ? d.setMode(_t.LINES) : r.isLineLoop ? d.setMode(_t.LINE_LOOP) : d.setMode(_t.LINE_STRIP)
                } else
                    r.isPoints ? d.setMode(_t.POINTS) : r.isSprite && d.setMode(_t.TRIANGLES);
                if (r.isInstancedMesh)
                    d.renderInstances(y, _, r.count);
                else if (n.isInstancedBufferGeometry) {
                    const t = Math.min(n.instanceCount, n._maxInstanceCount);
                    d.renderInstances(y, _, t)
                } else
                    d.render(y, _)
            }
        }
        ,
        this.compile = function(t, e) {
            d = dt.get(t),
            d.init(),
            t.traverseVisible((function(t) {
                t.isLight && t.layers.test(e.layers) && (d.pushLight(t),
                t.castShadow && d.pushShadow(t))
            }
            )),
            d.setupLights();
            const n = new WeakMap;
            t.traverse((function(e) {
                const i = e.material;
                if (i)
                    if (Array.isArray(i))
                        for (let r = 0; r < i.length; r++) {
                            const s = i[r];
                            !1 === n.has(s) && (It(s, t, e),
                            n.set(s))
                        }
                    else
                        !1 === n.has(i) && (It(i, t, e),
                        n.set(i))
            }
            ))
        }
        ;
        let Rt = null;
        const Pt = new na;
        function Ct(t, e, n, i) {
            if (!1 === t.visible)
                return;
            if (t.layers.test(e.layers))
                if (t.isGroup)
                    n = t.renderOrder;
                else if (t.isLOD)
                    !0 === t.autoUpdate && t.update(e);
                else if (t.isLight)
                    d.pushLight(t),
                    t.castShadow && d.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || W.intersectsSprite(t)) {
                        i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                        const e = ot.update(t)
                          , r = t.material;
                        r.visible && u.push(t, e, r, n, Y.z, null)
                    }
                } else if (t.isImmediateRenderObject)
                    i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q),
                    u.push(t, null, t.material, n, Y.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== et.render.frame && (t.skeleton.update(),
                t.skeleton.frame = et.render.frame),
                !t.frustumCulled || W.intersectsObject(t))) {
                    i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
                    const e = ot.update(t)
                      , r = t.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for (let s = 0, a = i.length; s < a; s++) {
                            const a = i[s]
                              , o = r[a.materialIndex];
                            o && o.visible && u.push(t, e, o, n, Y.z, a)
                        }
                    } else
                        r.visible && u.push(t, e, r, n, Y.z, null)
                }
            const r = t.children;
            for (let t = 0, s = r.length; t < s; t++)
                Ct(r[t], e, n, i)
        }
        function Dt(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r]
                  , a = s.object
                  , o = s.geometry
                  , l = null === i ? s.material : i
                  , c = s.group;
                if (n.isArrayCamera) {
                    const t = n.cameras;
                    for (let n = 0, i = t.length; n < i; n++) {
                        const i = t[n];
                        a.layers.test(i.layers) && (tt.viewport(L.copy(i.viewport)),
                        d.setupLightsView(i),
                        Nt(a, e, i, o, l, c))
                    }
                } else
                    Nt(a, e, n, o, l, c)
            }
        }
        function Nt(t, e, n, i, r, s) {
            if (t.onBeforeRender(f, e, n, i, r, s),
            t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            t.isImmediateRenderObject) {
                const i = Ot(n, e, r, t);
                tt.setMaterial(r),
                xt.reset(),
                function(t, e) {
                    t.render((function(t) {
                        f.renderBufferImmediate(t, e)
                    }
                    ))
                }(t, i)
            } else
                f.renderBufferDirect(n, e, i, r, t, s);
            t.onAfterRender(f, e, n, i, r, s)
        }
        function It(t, e, n) {
            !0 !== e.isScene && (e = Z);
            const i = nt.get(t)
              , r = d.state.lights
              , s = d.state.shadowsArray
              , a = r.state.version
              , o = lt.getParameters(t, r.state, s, e, n)
              , l = lt.getProgramCacheKey(o);
            let c = i.program
              , h = !0;
            if (i.environment = t.isMeshStandardMaterial ? e.environment : null,
            i.fog = e.fog,
            i.envMap = rt.get(t.envMap || i.environment),
            void 0 === c)
                t.addEventListener("dispose", At);
            else if (c.cacheKey !== l)
                Lt(t);
            else if (i.lightsStateVersion !== a)
                h = !1;
            else {
                if (void 0 !== o.shaderID)
                    return;
                h = !1
            }
            h && (o.uniforms = lt.getUniforms(t),
            t.onBeforeCompile(o, f),
            c = lt.acquireProgram(o, l),
            i.program = c,
            i.uniforms = o.uniforms,
            i.outputEncoding = o.outputEncoding);
            const u = i.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = pt.numPlanes,
            i.numIntersection = pt.numIntersection,
            u.clippingPlanes = pt.uniform),
            i.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
            }(t),
            i.lightsStateVersion = a,
            i.needsLights && (u.ambientLightColor.value = r.state.ambient,
            u.lightProbe.value = r.state.probe,
            u.directionalLights.value = r.state.directional,
            u.directionalLightShadows.value = r.state.directionalShadow,
            u.spotLights.value = r.state.spot,
            u.spotLightShadows.value = r.state.spotShadow,
            u.rectAreaLights.value = r.state.rectArea,
            u.ltc_1.value = r.state.rectAreaLTC1,
            u.ltc_2.value = r.state.rectAreaLTC2,
            u.pointLights.value = r.state.point,
            u.pointLightShadows.value = r.state.pointShadow,
            u.hemisphereLights.value = r.state.hemi,
            u.directionalShadowMap.value = r.state.directionalShadowMap,
            u.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
            u.spotShadowMap.value = r.state.spotShadowMap,
            u.spotShadowMatrix.value = r.state.spotShadowMatrix,
            u.pointShadowMap.value = r.state.pointShadowMap,
            u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const p = i.program.getUniforms()
              , m = wo.seqWithValue(p.seq, u);
            i.uniformsList = m
        }
        function Ot(t, e, n, i) {
            !0 !== e.isScene && (e = Z),
            it.resetTextureUnits();
            const r = e.fog
              , s = n.isMeshStandardMaterial ? e.environment : null
              , a = null === b ? f.outputEncoding : b.texture.encoding
              , o = rt.get(n.envMap || s)
              , l = nt.get(n)
              , c = d.state.lights;
            if (!0 === j && (!0 === X || t !== A)) {
                const e = t === A && n.id === E;
                pt.setState(n, t, e)
            }
            n.version === l.__version ? n.fog && l.fog !== r || l.environment !== s || l.needsLights && l.lightsStateVersion !== c.state.version ? It(n, e, i) : void 0 === l.numClippingPlanes || l.numClippingPlanes === pt.numPlanes && l.numIntersection === pt.numIntersection ? (l.outputEncoding !== a || l.envMap !== o) && It(n, e, i) : It(n, e, i) : (It(n, e, i),
            l.__version = n.version);
            let h = !1
              , u = !1
              , p = !1;
            const m = l.program
              , g = m.getUniforms()
              , v = l.uniforms;
            if (tt.useProgram(m.program) && (h = !0,
            u = !0,
            p = !0),
            n.id !== E && (E = n.id,
            u = !0),
            h || A !== t) {
                if (g.setValue(_t, "projectionMatrix", t.projectionMatrix),
                $.logarithmicDepthBuffer && g.setValue(_t, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                A !== t && (A = t,
                u = !0,
                p = !0),
                n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                    const e = g.map.cameraPosition;
                    void 0 !== e && e.setValue(_t, Y.setFromMatrixPosition(t.matrixWorld))
                }
                (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && g.setValue(_t, "isOrthographic", !0 === t.isOrthographicCamera),
                (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && g.setValue(_t, "viewMatrix", t.matrixWorldInverse)
            }
            if (n.skinning) {
                g.setOptional(_t, i, "bindMatrix"),
                g.setOptional(_t, i, "bindMatrixInverse");
                const t = i.skeleton;
                if (t) {
                    const e = t.bones;
                    if ($.floatVertexTextures) {
                        if (null === t.boneTexture) {
                            let n = Math.sqrt(4 * e.length);
                            n = F.ceilPowerOfTwo(n),
                            n = Math.max(n, 4);
                            const i = new Float32Array(n * n * 4);
                            i.set(t.boneMatrices);
                            const r = new lr(i,n,n,T,w);
                            t.boneMatrices = i,
                            t.boneTexture = r,
                            t.boneTextureSize = n
                        }
                        g.setValue(_t, "boneTexture", t.boneTexture, it),
                        g.setValue(_t, "boneTextureSize", t.boneTextureSize)
                    } else
                        g.setOptional(_t, t, "boneMatrices")
                }
            }
            var y, x;
            return (u || l.receiveShadow !== i.receiveShadow) && (l.receiveShadow = i.receiveShadow,
            g.setValue(_t, "receiveShadow", i.receiveShadow)),
            u && (g.setValue(_t, "toneMappingExposure", f.toneMappingExposure),
            l.needsLights && (x = p,
            (y = v).ambientLightColor.needsUpdate = x,
            y.lightProbe.needsUpdate = x,
            y.directionalLights.needsUpdate = x,
            y.directionalLightShadows.needsUpdate = x,
            y.pointLights.needsUpdate = x,
            y.pointLightShadows.needsUpdate = x,
            y.spotLights.needsUpdate = x,
            y.spotLightShadows.needsUpdate = x,
            y.rectAreaLights.needsUpdate = x,
            y.hemisphereLights.needsUpdate = x),
            r && n.fog && ct.refreshFogUniforms(v, r),
            ct.refreshMaterialUniforms(v, n, I, N),
            wo.upload(_t, l.uniformsList, v, it)),
            n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (wo.upload(_t, l.uniformsList, v, it),
            n.uniformsNeedUpdate = !1),
            n.isSpriteMaterial && g.setValue(_t, "center", i.center),
            g.setValue(_t, "modelViewMatrix", i.modelViewMatrix),
            g.setValue(_t, "normalMatrix", i.normalMatrix),
            g.setValue(_t, "modelMatrix", i.matrixWorld),
            m
        }
        Pt.setAnimationLoop((function(t) {
            Mt.isPresenting || Rt && Rt(t)
        }
        )),
        "undefined" != typeof window && Pt.setContext(window),
        this.setAnimationLoop = function(t) {
            Rt = t,
            Mt.setAnimationLoop(t),
            null === t ? Pt.stop() : Pt.start()
        }
        ,
        this.render = function(t, e) {
            let n, i;
            if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
            n = arguments[2]),
            void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
            i = arguments[3]),
            void 0 !== e && !0 !== e.isCamera)
                return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === g)
                return;
            xt.resetDefaultState(),
            E = -1,
            A = null,
            !0 === t.autoUpdate && t.updateMatrixWorld(),
            null === e.parent && e.updateMatrixWorld(),
            !0 === Mt.enabled && !0 === Mt.isPresenting && (e = Mt.getCamera(e)),
            !0 === t.isScene && t.onBeforeRender(f, t, e, n || b),
            d = dt.get(t, m.length),
            d.init(),
            m.push(d),
            q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            W.setFromProjectionMatrix(q),
            X = this.localClippingEnabled,
            j = pt.init(this.clippingPlanes, X, e),
            u = ut.get(t, p.length),
            u.init(),
            p.push(u),
            Ct(t, e, 0, f.sortObjects),
            u.finish(),
            !0 === f.sortObjects && u.sort(z, U),
            !0 === j && pt.beginShadows();
            const r = d.state.shadowsArray;
            St.render(r, t, e),
            d.setupLights(),
            d.setupLightsView(e),
            !0 === j && pt.endShadows(),
            !0 === this.info.autoReset && this.info.reset(),
            void 0 !== n && this.setRenderTarget(n),
            mt.render(u, t, e, i);
            const s = u.opaque
              , a = u.transparent;
            s.length > 0 && Dt(s, t, e),
            a.length > 0 && Dt(a, t, e),
            !0 === t.isScene && t.onAfterRender(f, t, e),
            null !== b && (it.updateRenderTargetMipmap(b),
            it.updateMultisampleRenderTarget(b)),
            tt.buffers.depth.setTest(!0),
            tt.buffers.depth.setMask(!0),
            tt.buffers.color.setMask(!0),
            tt.setPolygonOffset(!1),
            m.pop(),
            d = m.length > 0 ? m[m.length - 1] : null,
            p.pop(),
            u = p.length > 0 ? p[p.length - 1] : null
        }
        ,
        this.setFramebuffer = function(t) {
            v !== t && null === b && _t.bindFramebuffer(_t.FRAMEBUFFER, t),
            v = t
        }
        ,
        this.getActiveCubeFace = function() {
            return y
        }
        ,
        this.getActiveMipmapLevel = function() {
            return _
        }
        ,
        this.getRenderTarget = function() {
            return b
        }
        ,
        this.setRenderTarget = function(t, e=0, n=0) {
            b = t,
            y = e,
            _ = n,
            t && void 0 === nt.get(t).__webglFramebuffer && it.setupRenderTarget(t);
            let i = v
              , r = !1
              , s = !1;
            if (t) {
                const n = t.texture;
                (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
                const a = nt.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (i = a[e],
                r = !0) : i = t.isWebGLMultisampleRenderTarget ? nt.get(t).__webglMultisampledFramebuffer : a,
                L.copy(t.viewport),
                R.copy(t.scissor),
                P = t.scissorTest
            } else
                L.copy(B).multiplyScalar(I).floor(),
                R.copy(k).multiplyScalar(I).floor(),
                P = H;
            if (S !== i && (_t.bindFramebuffer(_t.FRAMEBUFFER, i),
            S = i),
            tt.viewport(L),
            tt.scissor(R),
            tt.setScissorTest(P),
            r) {
                const i = nt.get(t.texture);
                _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.COLOR_ATTACHMENT0, _t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i.__webglTexture, n)
            } else if (s) {
                const i = nt.get(t.texture)
                  , r = e || 0;
                _t.framebufferTextureLayer(_t.FRAMEBUFFER, _t.COLOR_ATTACHMENT0, i.__webglTexture, n || 0, r)
            }
        }
        ,
        this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget)
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = nt.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]),
            o) {
                let a = !1;
                o !== S && (_t.bindFramebuffer(_t.FRAMEBUFFER, o),
                a = !0);
                try {
                    const o = t.texture
                      , l = o.format
                      , c = o.type;
                    if (l !== T && yt.convert(l) !== _t.getParameter(_t.IMPLEMENTATION_COLOR_READ_FORMAT))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const h = c === M && (Q.has("EXT_color_buffer_half_float") || $.isWebGL2 && Q.has("EXT_color_buffer_float"));
                    if (!(c === x || yt.convert(c) === _t.getParameter(_t.IMPLEMENTATION_COLOR_READ_TYPE) || c === w && ($.isWebGL2 || Q.has("OES_texture_float") || Q.has("WEBGL_color_buffer_float")) || h))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    _t.checkFramebufferStatus(_t.FRAMEBUFFER) === _t.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && _t.readPixels(e, n, i, r, yt.convert(l), yt.convert(c), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    a && _t.bindFramebuffer(_t.FRAMEBUFFER, S)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(t, e, n=0) {
            const i = Math.pow(2, -n)
              , r = Math.floor(e.image.width * i)
              , s = Math.floor(e.image.height * i)
              , a = yt.convert(e.format);
            it.setTexture2D(e, 0),
            _t.copyTexImage2D(_t.TEXTURE_2D, n, a, t.x, t.y, r, s, 0),
            tt.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(t, e, n, i=0) {
            const r = e.image.width
              , s = e.image.height
              , a = yt.convert(n.format)
              , o = yt.convert(n.type);
            it.setTexture2D(n, 0),
            _t.pixelStorei(_t.UNPACK_FLIP_Y_WEBGL, n.flipY),
            _t.pixelStorei(_t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
            _t.pixelStorei(_t.UNPACK_ALIGNMENT, n.unpackAlignment),
            e.isDataTexture ? _t.texSubImage2D(_t.TEXTURE_2D, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? _t.compressedTexSubImage2D(_t.TEXTURE_2D, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : _t.texSubImage2D(_t.TEXTURE_2D, i, t.x, t.y, a, o, e.image),
            0 === i && n.generateMipmaps && _t.generateMipmap(_t.TEXTURE_2D),
            tt.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(t, e, n, i, r=0) {
            if (f.isWebGL1Renderer)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const {width: s, height: a, data: o} = n.image
              , l = yt.convert(i.format)
              , c = yt.convert(i.type);
            let h;
            if (i.isDataTexture3D)
                it.setTexture3D(i, 0),
                h = _t.TEXTURE_3D;
            else {
                if (!i.isDataTexture2DArray)
                    return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                it.setTexture2DArray(i, 0),
                h = _t.TEXTURE_2D_ARRAY
            }
            _t.pixelStorei(_t.UNPACK_FLIP_Y_WEBGL, i.flipY),
            _t.pixelStorei(_t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
            _t.pixelStorei(_t.UNPACK_ALIGNMENT, i.unpackAlignment);
            const u = _t.getParameter(_t.UNPACK_ROW_LENGTH)
              , d = _t.getParameter(_t.UNPACK_IMAGE_HEIGHT)
              , p = _t.getParameter(_t.UNPACK_SKIP_PIXELS)
              , m = _t.getParameter(_t.UNPACK_SKIP_ROWS)
              , g = _t.getParameter(_t.UNPACK_SKIP_IMAGES);
            _t.pixelStorei(_t.UNPACK_ROW_LENGTH, s),
            _t.pixelStorei(_t.UNPACK_IMAGE_HEIGHT, a),
            _t.pixelStorei(_t.UNPACK_SKIP_PIXELS, t.min.x),
            _t.pixelStorei(_t.UNPACK_SKIP_ROWS, t.min.y),
            _t.pixelStorei(_t.UNPACK_SKIP_IMAGES, t.min.z),
            _t.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o),
            _t.pixelStorei(_t.UNPACK_ROW_LENGTH, u),
            _t.pixelStorei(_t.UNPACK_IMAGE_HEIGHT, d),
            _t.pixelStorei(_t.UNPACK_SKIP_PIXELS, p),
            _t.pixelStorei(_t.UNPACK_SKIP_ROWS, m),
            _t.pixelStorei(_t.UNPACK_SKIP_IMAGES, g),
            0 === r && i.generateMipmaps && _t.generateMipmap(h),
            tt.unbindTexture()
        }
        ,
        this.initTexture = function(t) {
            it.setTexture2D(t, 0),
            tt.unbindTexture()
        }
        ,
        this.resetState = function() {
            tt.reset(),
            xt.reset()
        }
        ,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    function hl(t, e, n=0, i=1 / 0) {
        this.ray = new ce(t,e),
        this.near = n,
        this.far = i,
        this.camera = null,
        this.layers = new wt,
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    function ul(t, e) {
        return t.distance - e.distance
    }
    function dl(t, e, n, i) {
        if (t.layers.test(e.layers) && t.raycast(e, n),
        !0 === i) {
            const i = t.children;
            for (let t = 0, r = i.length; t < r; t++)
                dl(i[t], e, n, !0)
        }
    }
    sl.prototype = Object.assign(Object.create(Gi.prototype), {
        constructor: sl,
        isArrayCamera: !0
    }),
    Object.assign(al.prototype, {
        constructor: al,
        getHandSpace: function() {
            return null === this._hand && (this._hand = new Ft,
            this._hand.matrixAutoUpdate = !1,
            this._hand.visible = !1,
            this._hand.joints = {},
            this._hand.inputState = {
                pinching: !1
            }),
            this._hand
        },
        getTargetRaySpace: function() {
            return null === this._targetRay && (this._targetRay = new Ft,
            this._targetRay.matrixAutoUpdate = !1,
            this._targetRay.visible = !1),
            this._targetRay
        },
        getGripSpace: function() {
            return null === this._grip && (this._grip = new Ft,
            this._grip.matrixAutoUpdate = !1,
            this._grip.visible = !1),
            this._grip
        },
        dispatchEvent: function(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t),
            null !== this._grip && this._grip.dispatchEvent(t),
            null !== this._hand && this._hand.dispatchEvent(t),
            this
        },
        disconnect: function(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
        },
        update: function(t, e, n) {
            let i = null
              , r = null
              , s = null;
            const a = this._targetRay
              , o = this._grip
              , l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState)
                if (l && t.hand) {
                    s = !0;
                    for (const i of t.hand.values()) {
                        const t = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t = new Ft;
                            t.matrixAutoUpdate = !1,
                            t.visible = !1,
                            l.joints[i.jointName] = t,
                            l.add(t)
                        }
                        const r = l.joints[i.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix),
                        r.matrix.decompose(r.position, r.rotation, r.scale),
                        r.jointRadius = t.radius),
                        r.visible = null !== t
                    }
                    const i = l.joints["index-finger-tip"]
                      , r = l.joints["thumb-tip"]
                      , a = i.position.distanceTo(r.position)
                      , o = .02
                      , c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1,
                    this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0,
                    this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }))
                } else
                    null !== a && (i = e.getPose(t.targetRaySpace, n),
                    null !== i && (a.matrix.fromArray(i.transform.matrix),
                    a.matrix.decompose(a.position, a.rotation, a.scale))),
                    null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                    null !== r && (o.matrix.fromArray(r.transform.matrix),
                    o.matrix.decompose(o.position, o.rotation, o.scale)));
            return null !== a && (a.visible = null !== i),
            null !== o && (o.visible = null !== r),
            null !== l && (l.visible = null !== s),
            this
        }
    }),
    Object.assign(ol.prototype, yt.prototype),
    Object.assign(hl.prototype, {
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(),
            this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
            this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
        },
        intersectObject: function(t, e=!1, n=[]) {
            return dl(t, this, n, e),
            n.sort(ul),
            n
        },
        intersectObjects: function(t, e=!1, n=[]) {
            for (let i = 0, r = t.length; i < r; i++)
                dl(t[i], this, n, e);
            return n.sort(ul),
            n
        }
    });
    const pl = new V
      , ml = new G
      , fl = new hl;
    fl.params.Line.threshold = 1,
    fl.params.Points.threshold = 1;
    const gl = {
        background: 4210752,
        lighting: 16777215,
        emissive: 468276,
        meshTempHover: 10342381,
        point: 16777215,
        selpoint: 16711680,
        line: 16777215,
        mesh: 10342381,
        dimension: 255,
        plane: 16776960,
        planeBorder: 3026432,
        opacity: .02
    }
      , vl = {
        emissive: 3421191,
        point: 1096065,
        selpoint: 16711680,
        line: 1096065,
        mesh: 16430593,
        dimension: 1096065,
        plane: 16776960,
        planeBorder: 9539840,
        opacity: .06
    }
      , yl = new zn({
        linewidth: 1,
        color: gl.line,
        depthTest: !1
    })
      , xl = new Rn({
        color: gl.point,
        size: 4,
        depthTest: !1
    })
      , _l = (t,e=!0)=>{
        const n = new In((new Fe).setAttribute("position", new lt(t || 3,3)),xl.clone());
        return n.name = "p" + id++,
        n.userData.type = "point",
        n.visible = e,
        n.renderOrder = 1,
        n
    }
      , bl = (t=1)=>{
        const e = new Hn((new Fe).setAttribute("position", new lt(3 * (t + 1),3)),yl.clone());
        return e.name = "l" + id++,
        e.userData.type = "line",
        e.renderOrder = 1,
        e
    }
    ;
    async function wl(...t) {
        function e() {
            for (let e = t.length - 1; e >= 0; e--) {
                const i = t[e];
                let r = 0;
                for (let s in n) {
                    if (!i[s] || n[s] > i[s]) {
                        t.splice(e, 1);
                        break
                    }
                    n[s] == i[s] && (r += 1)
                }
                if (r == Object.keys(i).length)
                    return !0
            }
            return !1
        }
        const n = {};
        let i = (this.selected || this.scene.selected).slice();
        for (let t of i) {
            const e = t.userData.type;
            n[e] ? n[e] += 1 : n[e] = 1
        }
        if (e())
            return i;
        let r = !1;
        for (; t.length && !r; ) {
            let t, s, a;
            try {
                t = await new Promise(((t,e)=>{
                    a = t=>"Escape" == t.key && e(),
                    s = e=>this.hovered.length && t(this.hovered[0]),
                    this.canvas.addEventListener("pointerdown", s),
                    window.addEventListener("keydown", a)
                }
                )),
                i.push(t);
                const r = t.userData.type;
                if (n[r] ? n[r] += 1 : n[r] = 1,
                e())
                    return i
            } catch (t) {
                r = !0
            }
            this.canvas.removeEventListener("pointerdown", s),
            window.removeEventListener("keydown", a)
        }
        return console.log("fail"),
        null
    }
    function Ml(t, e, n=!0) {
        let i = 1 == e ? vl : gl;
        switch (t.userData.type) {
        case "plane":
            t.material.opacity = i.opacity,
            t.children[0].material.color.set(i.planeBorder);
            break;
        case "sketch":
            t.traverse((t=>{
                "line" == t.userData.type && t.material.color.set(i.line)
            }
            ));
            break;
        case "mesh":
            if (!n)
                break;
            t.material.emissive.set(i.emissive);
        case "point":
            t.material.color.set(i[t.userData.type]),
            t.material.size = e ? 8 : 4;
        default:
            t.material.color.set(i[t.userData.type])
        }
    }
    const Sl = new Or({
        uniforms: {
            color: {
                value: new J(16711680)
            },
            edgeColor: {
                value: new J(7798784)
            },
            pointWidth: {
                value: 4
            },
            edgeSize: {
                value: 4
            }
        },
        vertexShader: "\n  uniform float edgeSize;\n  uniform float pointWidth;\n  void main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = (pointWidth + edgeSize);\n    gl_Position = projectionMatrix * mvPosition;\n  }\n",
        fragmentShader: "\n  uniform vec3 color;\n  uniform vec3 edgeColor;\n  uniform float edgeSize;\n  uniform float pointWidth;\n  void main() {\n    gl_FragColor = vec4(color, 1.0);\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    float totalWidth = pointWidth + edgeSize;\n    float edgeStart = pointWidth;\n    float edgeEnd = pointWidth + 2.0;\n    float sEdge = smoothstep(edgeStart, edgeEnd, distance * totalWidth);\n    // transition from edgeColor to color along the edge\n    gl_FragColor = ( vec4(edgeColor, 1.0) * sEdge) + ((1.0 - sEdge) * gl_FragColor);\n\n    if (distance > 1.0) {\n      discard;\n    }\n  }\n",
        depthTest: !1
    });
    window.rc = fl;
    function El(t, e) {
        const [n,i,r,s] = e;
        i.geometry.attributes.position.set(t),
        i.geometry.attributes.position.needsUpdate = !0,
        i.geometry.computeBoundingSphere();
        const [a,o] = function(t, e, n=30) {
            const i = e[0] - t[0]
              , r = e[1] - t[1]
              , s = Math.sqrt(i ** 2 + r ** 2)
              , a = (Math.atan2(r, i) - Math.PI / 2) % (2 * Math.PI);
            let o = a - Math.PI / 6
              , l = a + Math.PI / 6;
            o = o < 0 ? o + 2 * Math.PI : o,
            l = l < 0 ? l + 2 * Math.PI : o;
            const c = Math.tan(Math.PI / 3)
              , h = (t[0] + e[0] - r * c) / 2
              , u = (t[1] + e[1] + i * c) / 2
              , d = s
              , p = Math.PI / 3;
            let m = new Float32Array(3 * (n + 1));
            for (let t = 0; t <= n; t++) {
                const e = o + t / n * p;
                m[3 * t] = h + d * Math.cos(e),
                m[3 * t + 1] = u + d * Math.sin(e)
            }
            return [m, [h, u]]
        }(n.geometry.attributes.position.array, i.geometry.attributes.position.array);
        s.geometry.attributes.position.set(a),
        s.geometry.attributes.position.needsUpdate = !0,
        r.geometry.attributes.position.set(o),
        r.geometry.attributes.position.needsUpdate = !0,
        r.geometry.computeBoundingSphere()
    }
    const Tl = new V
      , Al = new V
      , Ll = new V
      , Rl = new V
      , Pl = new V
      , Cl = new V
      , Dl = new V
      , Nl = new V;
    let Il, Ol, zl, Ul, Fl;
    function Bl(t, e, n, i=30) {
        const r = [t[0] - n[0], t[1] - n[1]]
          , s = [e[0] - n[0], e[1] - n[1]];
        let a = Math.atan2(r[1], r[0])
          , o = Math.atan2(s[1], s[0]);
        const l = Math.sqrt(r[0] ** 2 + r[1] ** 2);
        let c = o - a;
        c <= 0 && (c += 2 * Math.PI);
        let h = new Float32Array(3 * (i + 1));
        for (let t = 0; t <= i; t++) {
            const e = a + t / i * c;
            h[3 * t] = n[0] + l * Math.cos(e),
            h[3 * t + 1] = n[1] + l * Math.sin(e)
        }
        return h
    }
    function Gl(t, e) {
        const [n,i,r] = e;
        i.geometry.attributes.position.set(t),
        i.geometry.attributes.position.needsUpdate = !0,
        i.geometry.computeBoundingSphere(),
        r.geometry.attributes.position.set(t, 3),
        r.geometry.attributes.position.needsUpdate = !0,
        r.geometry.computeBoundingSphere()
    }
    function kl(t) {
        if (1 !== t.buttons)
            return;
        let e;
        this.canvas.addEventListener("pointermove", this.drawPreClick2),
        this.canvas.addEventListener("pointerdown", this.drawOnClick2, {
            once: !0
        }),
        e = this.hovered.length && !this.subsequent ? this.hovered[this.hovered.length - 1].geometry.attributes.position.array : this.getLocation(t).toArray(),
        "line" == this.scene.mode ? (this.toPush = function(t) {
            const e = _l();
            e.matrixAutoUpdate = !1,
            e.userData.constraints = [];
            const n = _l();
            n.matrixAutoUpdate = !1,
            n.userData.constraints = [];
            const i = bl();
            return i.matrixAutoUpdate = !1,
            i.frustumCulled = !1,
            i.userData.constraints = [],
            i.geometry.attributes.position.set(t),
            e.geometry.attributes.position.set(t),
            [e, n, i]
        }(e),
        this.subsequent && (this.constraints.set(++this.c_id, ["points_coincident", -1, [this.obj3d.children[this.obj3d.children.length - 2].name, this.toPush[0].name, -1, -1]]),
        this.obj3d.children[this.obj3d.children.length - 2].userData.constraints.push(this.c_id),
        this.toPush[0].userData.constraints.push(this.c_id))) : "arc" == this.scene.mode && (this.toPush = function(t) {
            const e = _l(t);
            e.matrixAutoUpdate = !1,
            e.userData.constraints = [];
            const n = _l();
            n.matrixAutoUpdate = !1,
            n.userData.constraints = [];
            const i = bl(30);
            i.frustumCulled = !1,
            i.userData.constraints = [];
            const r = _l();
            return r.matrixAutoUpdate = !1,
            r.userData.constraints = [],
            [e, n, r, i]
        }(e)),
        this.hovered.length && !this.subsequent && (this.constraints.set(++this.c_id, ["points_coincident", -1, [this.hovered[this.hovered.length - 1].name, this.toPush[0].name, -1, -1]]),
        this.hovered[this.hovered.length - 1].userData.constraints.push(this.c_id),
        this.toPush[0].userData.constraints.push(this.c_id),
        this.updateOtherBuffers()),
        this.updatePoint = this.obj3d.children.length,
        this.obj3d.add(...this.toPush),
        this.linkedObjs.set(this.l_id, [this.scene.mode, this.toPush.map((t=>t.name))]);
        for (let t of this.toPush)
            t.userData.l_id = this.l_id;
        this.l_id += 1
    }
    function Hl(t) {
        const e = this.getLocation(t).toArray();
        "line" == this.scene.mode ? Gl(e, this.toPush) : "arc" == this.scene.mode && El(e, this.toPush),
        this.scene.render()
    }
    function Vl(t) {
        if (1 !== t.buttons)
            return;
        let e;
        this.canvas.removeEventListener("pointermove", this.drawPreClick2),
        this.updatePointsBuffer(this.updatePoint),
        this.updateOtherBuffers(),
        this.toPush.forEach((t=>{
            t.layers.enable(2)
        }
        )),
        this.hovered.length && (this.constraints.set(++this.c_id, ["points_coincident", -1, [this.hovered[this.hovered.length - 1].name, this.toPush[1].name, -1, -1]]),
        this.hovered[this.hovered.length - 1].userData.constraints.push(this.c_id),
        this.toPush[1].userData.constraints.push(this.c_id),
        this.updateOtherBuffers(),
        e = this.hovered[this.hovered.length - 1].geometry.attributes.position.array),
        "line" == this.scene.mode ? e ? (Gl(e, this.toPush),
        this.subsequent = !1,
        this.updatePoint = this.obj3d.children.length,
        this.canvas.addEventListener("pointerdown", this.drawOnClick1, {
            once: !0
        })) : (this.subsequent = !0,
        this.drawOnClick1(t)) : "arc" == this.scene.mode && (e && El(e, this.toPush),
        function(t, e) {
            Cl.set(t.geometry.attributes.position.array[0], t.geometry.attributes.position.array[1]),
            Dl.set(e.geometry.attributes.position.array[0], e.geometry.attributes.position.array[1]),
            Nl.subVectors(Dl, Cl),
            Ll.set(-Nl.y, Nl.x),
            Tl.addVectors(Cl, Nl.multiplyScalar(.5))
        }(this.toPush[0], this.toPush[1]),
        this.canvas.addEventListener("pointermove", this.drawPreClick3),
        this.canvas.addEventListener("pointerdown", this.drawOnClick3, {
            once: !0
        }))
    }
    function Wl(t) {
        const e = this.getLocation(t);
        Fl = function(t, e) {
            const [n,i,r,s] = e;
            return Pl.set(t.x - Cl.x, t.y - Cl.y),
            zl = Nl.cross(Pl) < 0 ? 1 : 0,
            Rl.set(-Pl.y, Pl.x),
            Al.addVectors(Cl, Pl.multiplyScalar(.5)),
            Il = Ll.cross(Rl),
            Ol = 0 === Il ? .5 : Pl.subVectors(Al, Tl).cross(Ll) / Il,
            r.geometry.attributes.position.set(Pl.addVectors(Al, Rl.multiplyScalar(Ol)).toArray()),
            r.geometry.attributes.position.needsUpdate = !0,
            r.geometry.computeBoundingSphere(),
            zl ? (Ul = Bl(n.geometry.attributes.position.array, i.geometry.attributes.position.array, r.geometry.attributes.position.array),
            n.userData.start = !0,
            i.userData.start = !1) : (Ul = Bl(i.geometry.attributes.position.array, n.geometry.attributes.position.array, r.geometry.attributes.position.array),
            i.userData.start = !0,
            n.userData.start = !1),
            s.geometry.attributes.position.set(Ul),
            s.geometry.attributes.position.needsUpdate = !0,
            s.geometry.computeBoundingSphere(),
            s.userData.ccw = zl,
            zl
        }(e, this.toPush),
        this.scene.render()
    }
    function jl(t) {
        if (1 === t.buttons) {
            if (this.canvas.removeEventListener("pointermove", this.drawPreClick3),
            !Fl) {
                let t;
                const e = this.linkedObjs.get(this.l_id - 1);
                t = e[1][0],
                e[1][0] = e[1][1],
                e[1][1] = t,
                this.linkedObjs.set(this.l_id - 1, e);
                let n = 5 * (this.linkedObjs.size - 1);
                t = this.linksBuf[n + 1],
                this.linksBuf[n + 1] = this.linksBuf[n + 2],
                this.linksBuf[n + 2] = t
            }
            this.updatePoint = this.obj3d.children.length,
            this.canvas.addEventListener("pointerdown", this.drawOnClick1, {
                once: !0
            })
        }
    }
    function Xl() {
        "" != this.scene.mode && (["line", "arc"].includes(this.scene.mode) && this.delete(this.obj3d.children[this.updatePoint]),
        this.canvas.removeEventListener("pointerdown", this.drawOnClick1),
        this.canvas.removeEventListener("pointermove", this.drawPreClick2),
        this.canvas.removeEventListener("pointerdown", this.drawOnClick2),
        this.canvas.removeEventListener("pointermove", this.drawPreClick3),
        this.canvas.removeEventListener("pointerdown", this.drawOnClick3),
        this.scene.render(),
        this.subsequent = !1,
        this.toPush = [])
    }
    const ql = new zn({
        linewidth: 1,
        color: gl.dimension
    })
      , Yl = new Rn({
        color: gl.dimension,
        size: 4
    });
    let Zl;
    async function Jl() {
        let t, e, n, i = await this.awaitSelection({
            point: 2
        }, {
            point: 1,
            line: 1
        }, {
            line: 2
        });
        if (null == i)
            return;
        if (i.every((t=>"line" == t.userData.type)))
            t = new Xn((new Fe).setAttribute("position", new lt(Array(2 * (Sc + 2) * 3).fill(-.001),3)),ql.clone()),
            Zl = qc(i),
            e = ["angle", Zl, [-1, -1, i[0].name, i[1].name], 0],
            n = "a";
        else {
            let r;
            if (t = new Xn((new Fe).setAttribute("position", new lt(Array(24).fill(-.001),3)),ql.clone()),
            i.every((t=>"point" == t.userData.type))) {
                Zl = 0;
                for (let t = 0; t < 3; t++)
                    Zl += (i[0].geometry.attributes.position.array[t] - i[1].geometry.attributes.position.array[t]) ** 2;
                Zl = Math.sqrt(Zl),
                e = ["pt_pt_distance", Zl, [i[0].name, i[1].name, -1, -1]]
            } else {
                r = "point" == i[0].userData.type ? [0, 1] : [1, 0];
                const t = i[r[0]].geometry.attributes.position.array
                  , n = i[r[1]].geometry.attributes.position.array;
                nc.set(n[0], n[1]),
                sc.set(n[3], n[4]),
                Ql.set(t[0], t[1]),
                vc = sc.clone().sub(nc).normalize(),
                ac = Ql.clone().sub(nc),
                cc = vc.multiplyScalar(ac.dot(vc)),
                xc = ac.clone().sub(cc),
                Zl = Math.sign(xc.y) * Math.sqrt(xc.x ** 2 + xc.y ** 2),
                e = ["pt_line_distance", Zl, [i[r[0]].name, -1, i[r[1]].name, -1]]
            }
            n = "d"
        }
        const r = new In((new Fe).setAttribute("position", new lt(3,3)),Yl.clone());
        t.userData.ids = i.map((t=>t.name)),
        t.userData.type = "dimension",
        t.userData.dimType = n,
        r.userData.type = "dimension",
        r.userData.dimType = n,
        t.layers.enable(2),
        r.layers.enable(2),
        this.dimGroup.add(t).add(r);
        const s = this._onMoveDimension(r, t, !0);
        let a, o;
        r.label = document.createElement("div"),
        r.label.textContent = Zl.toFixed(3),
        r.label.contentEditable = !0,
        this.labelContainer.append(r.label);
        let l = await new Promise((t=>{
            a = ()=>{
                "a" == r.userData.dimType ? r.userData.offset = Ec[5].toArray() : r.userData.offset = lc.toArray(),
                t(!0)
            }
            ,
            o = e=>"Escape" == e.key && t(!1),
            this.canvas.addEventListener("pointermove", s),
            this.canvas.addEventListener("pointerdown", a),
            window.addEventListener("keydown", o)
        }
        ));
        this.canvas.removeEventListener("pointermove", s),
        this.canvas.removeEventListener("pointerdown", a),
        window.removeEventListener("keydown", o),
        r.geometry.computeBoundingSphere(),
        t.geometry.computeBoundingSphere(),
        l ? ("h" == t.userData.dimType ? (e[0] = "h_dist",
        e[1] = sc.x - nc.x) : "v" == t.userData.dimType && (e[0] = "v_dist",
        e[1] = sc.y - nc.y),
        this.constraints.set(++this.c_id, e),
        i[0].userData.constraints.push(this.c_id),
        i[1].userData.constraints.push(this.c_id),
        this.updateOtherBuffers(),
        t.name = this.c_id,
        r.name = this.c_id,
        r.label.addEventListener("focus", this.updateDim(this.c_id))) : (this.dimGroup.children.splice(this.dimGroup.children.length - 2, 2).forEach((t=>{
            t.geometry.dispose(),
            t.material.dispose()
        }
        )),
        this.labelContainer.removeChild(this.labelContainer.lastChild),
        this.scene.render()),
        "dimension" == this.scene.mode && this.drawDimension()
    }
    function Kl(t) {
        return e=>{
            let n = e.target.textContent;
            document.addEventListener("keydown", (i=>{
                if ("Enter" == i.key) {
                    i.preventDefault();
                    const r = this.constraints.get(t);
                    r[1] = parseFloat(e.target.textContent),
                    n = r[1],
                    this.constraints.set(t, r),
                    this.updateOtherBuffers(),
                    this.solve(),
                    this.scene.render(),
                    e.target.blur(),
                    this.updateBoundingSpheres(),
                    this.hasChanged = !0
                } else
                    "Escape" == i.key && (e.target.textContent = n,
                    getSelection().empty(),
                    e.target.blur())
            }
            ))
        }
    }
    const Ql = new V;
    let $l;
    function tc(t, e, n) {
        $l = e.userData.ids;
        let i, r, s = this.obj3d.children[this.objIdx.get($l[0])].geometry.attributes.position.array, a = this.obj3d.children[this.objIdx.get($l[1])].geometry.attributes.position.array;
        return r = "a" == e.userData.dimType ? Hc : Mc,
        o=>{
            i = this.getLocation(o),
            Ql.set(i.x, i.y),
            r(e, t, s, a, null, n),
            this.scene.render()
        }
    }
    function ec() {
        const t = 0 == this.labelContainer.childElementCount
          , e = this.dimGroup.children;
        let n, i;
        for (let r = 0; r < e.length; r += 2) {
            t && (n = e[r + 1],
            i = this.constraints.get(n.name)[1],
            n.label = document.createElement("div"),
            n.label.textContent = i.toFixed(3),
            n.label.contentEditable = !0,
            this.labelContainer.append(n.label),
            n.label.addEventListener("focus", this.updateDim(this.c_id))),
            $l = e[r].userData.ids;
            let s, a = this.obj3d.children[this.objIdx.get($l[0])].geometry.attributes.position.array, o = this.obj3d.children[this.objIdx.get($l[1])].geometry.attributes.position.array;
            s = "a" == e[r].userData.dimType ? Hc : Mc,
            s(e[r], e[r + 1], a, o, e[r + 1].userData.offset)
        }
    }
    const nc = new V;
    let ic;
    const rc = new V
      , sc = new V;
    let ac, oc, lc, cc, hc, uc, dc, pc, mc, fc, gc, vc, yc, xc, _c, bc, wc;
    function Mc(t, e, n, i, r, s) {
        const a = t.geometry.attributes.position
          , o = e.geometry.attributes.position;
        r && (n.length < i.length ? Ql.set(n[0] + r[0], n[1] + r[1]) : Ql.set(i[0] + r[0], i[1] + r[1]));
        let l = null;
        if (n.length == i.length)
            switch (nc.set(n[0], n[1]),
            sc.set(i[0], i[1]),
            s && ((Ql.x - nc.x) * (Ql.x - sc.x) > 0 && (Ql.y - nc.y) * (Ql.y - sc.y) < 0 ? (t.userData.dimType = "v",
            e.userData.dimType = "v",
            e.label.textContent = (sc.y - nc.y).toFixed(3)) : (Ql.x - nc.x) * (Ql.x - sc.x) < 0 && (Ql.y - nc.y) * (Ql.y - sc.y) > 0 ? (t.userData.dimType = "h",
            e.userData.dimType = "h",
            e.label.textContent = (sc.x - nc.x).toFixed(3)) : (t.userData.dimType = "d",
            e.userData.dimType = "d",
            e.label.textContent = Zl.toFixed(3))),
            t.userData.dimType) {
            case "v":
                l = [n[0] + 1, n[1]];
                break;
            case "h":
                l = [n[0], n[1] + 1];
                break;
            default:
                vc = sc.clone().sub(nc).normalize(),
                lc = Ql.clone().sub(sc),
                cc = vc.multiplyScalar(lc.dot(vc)),
                xc = lc.clone().sub(cc),
                dc = nc.clone().add(xc),
                mc = dc.toArray(),
                pc = sc.clone().add(xc),
                fc = pc.toArray(),
                gc = Ql.toArray(),
                _c = dc.distanceToSquared(Ql),
                bc = pc.distanceToSquared(Ql),
                wc = dc.distanceToSquared(pc),
                a.array.set(nc.toArray(), 0)
            }
        (n.length != i.length || l) && (l ? (nc.set(n[0], n[1]),
        rc.set(...l),
        sc.set(i[0], i[1])) : n.length > i.length ? (nc.set(n[0], n[1]),
        rc.set(n[3], n[4]),
        sc.set(i[0], i[1])) : (nc.set(i[0], i[1]),
        rc.set(i[3], i[4]),
        sc.set(n[0], n[1])),
        yc = rc.clone().sub(nc),
        ic = nc.clone().addScaledVector(yc, .5),
        yc.normalize(),
        ac = sc.clone().sub(ic),
        cc = yc.multiplyScalar(ac.dot(yc)),
        vc = ac.clone().sub(cc),
        wc = vc.lengthSq(),
        vc.normalize(),
        oc = Ql.clone().sub(ic),
        hc = vc.clone().multiplyScalar(oc.dot(vc)),
        lc = Ql.clone().sub(sc),
        uc = vc.clone().multiplyScalar(lc.dot(vc)),
        mc = Ql.clone().sub(hc).toArray(),
        fc = Ql.clone().sub(uc).toArray(),
        gc = Ql.toArray(),
        _c = hc.lengthSq(),
        bc = uc.lengthSq(),
        a.array.set(ic.toArray(), 0)),
        a.array.set(mc, 3),
        a.array.set(mc, 6),
        a.array.set(fc, 9),
        a.array.set(fc, 12),
        a.array.set(sc.toArray(), 15),
        wc >= _c && wc >= bc ? a.array.set(gc, 18) : _c > bc ? a.array.set(fc, 18) : a.array.set(mc, 18),
        a.array.set(gc, 21),
        a.needsUpdate = !0,
        o.array.set(gc),
        o.needsUpdate = !0
    }
    const Sc = 12
      , Ec = Array(6);
    for (let t = 0; t < Ec.length; t++)
        Ec[t] = new V;
    const Tc = Array(3)
      , Ac = new V;
    let Lc, Rc, Pc, Cc, Dc, Nc, Ic, Oc, zc, Uc, Fc, Bc, Gc, kc;
    function Hc(t, e, n, i, r) {
        const s = t.geometry.attributes.position
          , a = e.geometry.attributes.position;
        for (Rc = 0; Rc < 4; )
            Lc = 0 == Rc ? n : i,
            Ec[Rc++].set(Lc[0], Lc[1]),
            Ec[Rc++].set(Lc[3] - Lc[0], Lc[4] - Lc[1]);
        for (Dc = Ec[3].cross(Ec[1]),
        Cc = 0 === Dc ? .5 : Ac.subVectors(Ec[0], Ec[2]).cross(Ec[3]) / Dc,
        Nc = Ec[4].addVectors(Ec[0], Ec[1].clone().multiplyScalar(Cc)),
        r && Ql.set(Nc.x + r[0], Nc.y + r[1]),
        Ec[5].subVectors(Ql, Nc),
        Ic = Ec[5].length(),
        Pc = 1,
        Rc = 0; Pc < Ec.length; Pc += 2,
        Rc++)
            Tc[Rc] = Math.atan2(Ec[Pc].y, Ec[Pc].x);
        Oc = Xc(Tc[1] - Tc[0]),
        zc = Xc(Tc[2] - (Tc[0] + Oc / 2)),
        Uc = Math.abs(zc) < Math.PI / 2 ? 0 : Math.PI,
        Fc = Xc(Tc[2] - (Tc[0] + Uc)),
        Bc = Xc(Tc[2] - (Tc[0] + Oc + Uc)),
        Oc * Fc < 0 ? (Gc = Tc[0] + Fc + Uc,
        kc = Oc - Fc) : Oc * Bc > 0 ? (Gc = Tc[0] + Uc,
        kc = Oc + Bc) : (Gc = Tc[0] + Uc,
        kc = Oc),
        Pc = 0,
        s.array[Pc++] = Nc.x + Ic * Math.cos(Gc),
        s.array[Pc++] = Nc.y + Ic * Math.sin(Gc),
        Pc++;
        let o = Gc + 1 / Sc * kc;
        for (s.array[Pc++] = Nc.x + Ic * Math.cos(o),
        s.array[Pc++] = Nc.y + Ic * Math.sin(o),
        Pc++,
        Rc = 2; Rc <= Sc; Rc++)
            s.array[Pc++] = s.array[Pc - 4],
            s.array[Pc++] = s.array[Pc - 4],
            Pc++,
            o = Gc + Rc / Sc * kc,
            s.array[Pc++] = Nc.x + Ic * Math.cos(o),
            s.array[Pc++] = Nc.y + Ic * Math.sin(o),
            Pc++;
        for (Rc = 0; Rc < 2; Rc++)
            s.array[Pc++] = Ec[2 * Rc].x,
            s.array[Pc++] = Ec[2 * Rc].y,
            Pc++,
            s.array[Pc++] = Nc.x + Ic * Math.cos(Tc[Rc] + Uc),
            s.array[Pc++] = Nc.y + Ic * Math.sin(Tc[Rc] + Uc),
            Pc++;
        s.needsUpdate = !0,
        a.array.set(Ql.toArray()),
        a.needsUpdate = !0
    }
    const Vc = 2 * Math.PI
      , Wc = 2 * -Math.PI
      , jc = -Math.PI;
    function Xc(t) {
        return t > Math.PI ? t = Wc + t : t < jc && (t = Vc + t),
        t
    }
    const qc = t=>{
        for (let e = 0; e < 2; e++) {
            const n = t[e].geometry.attributes.position.array;
            Ec[2 * e].set(...n.slice(0, 2)),
            Ec[2 * e + 1].set(n[3] - n[0], n[4] - n[1])
        }
        const e = Math.atan2(Ec[1].y, Ec[1].x)
          , n = Math.atan2(Ec[3].y, Ec[3].x);
        let i = Math.abs(n - e);
        return i > Math.PI && (i = 2 * Math.PI - i),
        i / Math.PI * 180
    }
    ;
    let Yc, Zc;
    function Jc(t) {
        if (t.buttons)
            return;
        let e;
        fl.setFromCamera(new V((t.clientX - this.rect.left) / this.rect.width * 2 - 1,-(t.clientY - this.rect.top) / this.rect.height * 2 + 1), this.camera),
        "sketch" != this.obj3d.userData.type ? (fl.layers.set(1),
        e = fl.intersectObjects(this.obj3d.children, !0)) : (fl.layers.set(2),
        e = fl.intersectObjects([...this.dimGroup.children, ...this.obj3d.children]));
        let n = [];
        const i = 1e-4;
        if (e.length) {
            let t = 1 / 0;
            for (let r = 0; r < e.length; r++)
                if (e[r].distanceToRay)
                    if (e[r].distanceToRay < t - i) {
                        if (n = [r],
                        "sketch" != this.obj3d.userData.type)
                            break;
                        t = e[r].distanceToRay
                    } else
                        e[r].distanceToRay < t + i && n.push(r);
            n.length || this.disableLineHover || n.push(0)
        }
        const r = this.selected || this.scene.selected;
        if (n.length) {
            if (!this.hovered.length || "number" == typeof this.hovered[0] && this.hovered[0] != e[n[0]].index || "object" == typeof this.hovered[0] && this.hovered[0] != e[n[0]].object) {
                for (let t = 0; t < this.hovered.length; t++) {
                    const e = this.hovered[t];
                    "object" != typeof e || r.includes(e) || Ml(e, 0)
                }
                this.hovered = [];
                for (let t = 0; t < n.length; t++) {
                    let i = e[n[t]].object;
                    Ml(i, 1, !1),
                    "sketch" != this.obj3d.userData.type && ("point" == i.userData.type ? (Yc = i.geometry.attributes.position.array.slice(3 * e[n[t]].index, 3 * e[n[t]].index + 3),
                    this.selpoints[0].geometry.attributes.position.array.set(Yc),
                    this.selpoints[0].matrix = i.parent.matrix,
                    this.selpoints[0].geometry.attributes.position.needsUpdate = !0,
                    this.selpoints[0].visible = !0,
                    i = e[n[t]].index,
                    this.selpoints[0].idx = i) : this.selpoints[0].visible = !1),
                    this.hovered.push(i)
                }
                this.obj3d.dispatchEvent({
                    type: "change"
                })
            }
        } else if (this.hovered.length) {
            for (let t = 0; t < this.hovered.length; t++) {
                const e = this.hovered[t];
                "number" == typeof e ? this.selpoints[0].visible = !1 : r.includes(e) || Ml(e, 0)
            }
            this.hovered = [],
            this.obj3d.dispatchEvent({
                type: "change"
            })
        }
    }
    function Kc(t) {
        if (this.scene && ["line", "arc"].includes(this.scene.mode) || 1 != t.buttons)
            return;
        const e = this.store || this.scene.store
          , n = this.selected || this.scene.selected;
        if (this.hovered.length) {
            let t = this.hovered[this.hovered.length - 1];
            if ("object" != typeof t) {
                const e = this.selpoints[this.fptIdx % 3 + 1]
                  , n = this.selpoints[0];
                e.geometry.attributes.position.array.set(n.geometry.attributes.position.array),
                e.matrix = n.matrix,
                e.geometry.attributes.position.needsUpdate = !0,
                e.visible = !0,
                t = e,
                this.fptIdx++
            }
            e.dispatch({
                type: "on-pick",
                obj: t
            });
            const i = n.indexOf(t);
            if ("selpoint" != t.userData.type && (-1 == i ? this.setHover(t, 1) : this.setHover(n[i], 0)),
            this.obj3d.dispatchEvent({
                type: "change"
            }),
            "sketch" == this.obj3d.userData.type)
                switch (t.userData.type) {
                case "dimension":
                    const t = this.dimGroup.children.indexOf(this.hovered[0]);
                    t % 2 && (this.onDragDim = this._onMoveDimension(this.dimGroup.children[t], this.dimGroup.children[t - 1]),
                    this.canvas.addEventListener("pointermove", this.onDragDim),
                    this.canvas.addEventListener("pointerup", (()=>{
                        var e;
                        "a" == (e = this.dimGroup.children[t]).userData.dimType ? e.userData.offset = Ec[5].toArray() : e.userData.offset = lc.toArray(),
                        this.onRelease()
                    }
                    ))),
                    Zc = this.dimGroup.children[t].label,
                    Zc.style.zIndex = -1;
                    break;
                case "point":
                    this.canvas.addEventListener("pointermove", this.onDrag),
                    this.canvas.addEventListener("pointerup", this.onRelease)
                }
        } else {
            const t = e.getState().treeEntries.visible;
            for (let e, i = 0; i < n.length; i++)
                e = n[i],
                "selpoint" == e.userData.type ? e.visible = !1 : Ml(e, 0),
                "sketch" != e.userData.type || t[e.name] || (e.visible = !1);
            e.dispatch({
                type: "clear-selection"
            }),
            this.obj3d.dispatchEvent({
                type: "change"
            })
        }
    }
    function Qc(t) {
        for (let e = 0; e < this.hovered.length; e++) {
            const n = this.hovered[e];
            this.ptsBuf.set(this.getLocation(t).toArray(), 3 * this.objIdx.get(n.name))
        }
        this.solve(),
        this.scene.render()
    }
    function $c(t) {
        this.canvas.removeEventListener("pointermove", this.onDrag),
        this.canvas.removeEventListener("pointermove", this.onDragDim),
        this.canvas.removeEventListener("pointerup", this.onRelease),
        this.updateBoundingSpheres(),
        Zc && (Zc.style.zIndex = 0)
    }
    function th() {
        const t = this.selected || this.scene.selected;
        for (let e, n = 0; n < t.length; n++)
            e = t[n],
            "selpoint" == e.userData.type ? e.visible = !1 : Ml(e, 0);
        store.dispatch({
            type: "clear-selection"
        });
        for (let t = 0; t < this.hovered.length; t++) {
            Ml(this.hovered[t], 0)
        }
    }
    async function eh(t) {
        let e;
        if (void 0 === t) {
            if (e = await this.awaitSelection({
                point: 2
            }, {
                point: 1,
                line: 1
            }),
            null == e)
                return
        } else
            e = t;
        if (e.every((t=>"point" == t.userData.type)))
            this.constraints.set(++this.c_id, ["points_coincident", -1, [e[0].name, e[1].name, -1, -1]]);
        else {
            const t = "point" == e[0].userData.type ? [0, 1] : [1, 0];
            this.constraints.set(++this.c_id, [void 0 !== e[t[1]].userData.ccw ? "pt_on_circle" : "pt_on_line", -1, [e[t[0]].name, -1, e[t[1]].name, -1]])
        }
        e[1].userData.constraints.push(this.c_id),
        e[0].userData.constraints.push(this.c_id),
        this.updateOtherBuffers(),
        this.solve(),
        this.updateBoundingSpheres(),
        this.clearSelection(),
        this.scene.render()
    }
    async function nh(t=0) {
        let e, n = await this.awaitSelection({
            point: 2
        }, {
            line: 1
        });
        null != n && (e = 1 == n.length ? [-1, -1, n[0].name, -1] : [n[0].name, n[1].name, -1, -1],
        this.constraints.set(++this.c_id, [t ? "vertical" : "horizontal", -1, e]),
        n.forEach((t=>{
            t.userData.constraints.push(this.c_id)
        }
        )),
        this.updateOtherBuffers(),
        this.solve(),
        this.updateBoundingSpheres(),
        this.clearSelection(),
        this.scene.render())
    }
    async function ih() {
        let t = await this.awaitSelection({
            line: 2
        });
        if (null == t)
            return;
        const e = {};
        let n = -1;
        const i = [];
        let r, s;
        for (let a = 0; a < 2; a++) {
            null == t[a].userData.ccw && (n = a);
            const o = t[a].userData.l_id
              , l = this.linkedObjs.get(o)[1];
            for (let a = 0; a < 2; a++) {
                const o = this.obj3d.children[this.objIdx.get(l[a])].userData.constraints;
                for (let a = 0; a < o.length; a++) {
                    const c = this.constraints.get(o[a]);
                    if ("points_coincident" == c[0]) {
                        if (e[o[a]]) {
                            for (let t = 0; t < 2; t++)
                                i[t] = this.obj3d.children[this.objIdx.get(c[2][t])].userData.start ? 0 : 1;
                            if (s = 0 == n ? [-1, -1, t[1].name, t[0].name] : [-1, -1, t[0].name, t[1].name],
                            r = -1 == n ? "curve_curve_tangent" : "arc_line_tangent",
                            l.includes(c[2][1]) && 0 == n || !l.includes(c[2][1]) && 0 != n) {
                                let t = i[0];
                                i[0] = i[1],
                                i[1] = t
                            }
                            break
                        }
                        e[o[a]] = !0
                    }
                }
            }
        }
        this.constraints.set(++this.c_id, [r, -1, s, i[0], i[1]]),
        t.forEach((t=>{
            t.userData.constraints.push(this.c_id)
        }
        )),
        this.updateOtherBuffers(),
        this.solve(),
        this.updateBoundingSpheres(),
        this.clearSelection(),
        this.scene.render()
    }
    function rh(t, e) {
        return e instanceof Map ? {
            dataType: "Map",
            value: Array.from(e.entries())
        } : e
    }
    function sh(t, e) {
        return "object" == typeof e && null !== e && "Map" === e.dataType ? new Map(e.value) : e
    }
    var ah;
    const oh = (ah = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
    function(t) {
        var e, n;
        (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise((function(t, i) {
            e = t,
            n = i
        }
        ));
        var i, r = {};
        for (i in t)
            t.hasOwnProperty(i) && (r[i] = t[i]);
        var s, a = [], o = "./this.program", l = function(t, e) {
            throw e
        }, c = "";
        "undefined" != typeof document && document.currentScript && (c = document.currentScript.src),
        ah && (c = ah),
        c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "";
        var h, u = t.print || console.log.bind(console), d = t.printErr || console.warn.bind(console);
        for (i in r)
            r.hasOwnProperty(i) && (t[i] = r[i]);
        r = null,
        t.arguments && (a = t.arguments),
        t.thisProgram && (o = t.thisProgram),
        t.quit && (l = t.quit),
        t.wasmBinary && (h = t.wasmBinary);
        var p, m = t.noExitRuntime || !0;
        "object" != typeof WebAssembly && P("no native wasm support detected");
        var f, g, v, y = !1, x = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function _(t, e, n) {
            for (var i = e + n, r = e; t[r] && !(r >= i); )
                ++r;
            if (r - e > 16 && t.subarray && x)
                return x.decode(t.subarray(e, r));
            for (var s = ""; e < r; ) {
                var a = t[e++];
                if (128 & a) {
                    var o = 63 & t[e++];
                    if (192 != (224 & a)) {
                        var l = 63 & t[e++];
                        if ((a = 224 == (240 & a) ? (15 & a) << 12 | o << 6 | l : (7 & a) << 18 | o << 12 | l << 6 | 63 & t[e++]) < 65536)
                            s += String.fromCharCode(a);
                        else {
                            var c = a - 65536;
                            s += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                        }
                    } else
                        s += String.fromCharCode((31 & a) << 6 | o)
                } else
                    s += String.fromCharCode(a)
            }
            return s
        }
        function b(t) {
            var e = function(t) {
                for (var e = 0, n = 0; n < t.length; ++n) {
                    var i = t.charCodeAt(n);
                    i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & t.charCodeAt(++n)),
                    i <= 127 ? ++e : e += i <= 2047 ? 2 : i <= 65535 ? 3 : 4
                }
                return e
            }(t) + 1
              , n = Y(e);
            return function(t, e, n, i) {
                if (!(i > 0))
                    return 0;
                for (var r = n + i - 1, s = 0; s < t.length; ++s) {
                    var a = t.charCodeAt(s);
                    if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++s)),
                    a <= 127) {
                        if (n >= r)
                            break;
                        e[n++] = a
                    } else if (a <= 2047) {
                        if (n + 1 >= r)
                            break;
                        e[n++] = 192 | a >> 6,
                        e[n++] = 128 | 63 & a
                    } else if (a <= 65535) {
                        if (n + 2 >= r)
                            break;
                        e[n++] = 224 | a >> 12,
                        e[n++] = 128 | a >> 6 & 63,
                        e[n++] = 128 | 63 & a
                    } else {
                        if (n + 3 >= r)
                            break;
                        e[n++] = 240 | a >> 18,
                        e[n++] = 128 | a >> 12 & 63,
                        e[n++] = 128 | a >> 6 & 63,
                        e[n++] = 128 | 63 & a
                    }
                }
                e[n] = 0
            }(t, f, n, e),
            n
        }
        t.INITIAL_MEMORY;
        var w, M = [], S = [], E = [], T = [];
        S.push({
            func: function() {
                X()
            }
        });
        var A = 0
          , L = null
          , R = null;
        function P(e) {
            t.onAbort && t.onAbort(e),
            d(e += ""),
            y = !0,
            e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
            var i = new WebAssembly.RuntimeError(e);
            throw n(i),
            i
        }
        function C(t) {
            return e = t,
            n = "data:application/octet-stream;base64,",
            String.prototype.startsWith ? e.startsWith(n) : 0 === e.indexOf(n);
            var e, n
        }
        t.preloadedImages = {},
        t.preloadedAudios = {};
        var D, N = "solver.wasm";
        function I(t) {
            try {
                if (t == N && h)
                    return new Uint8Array(h);
                if (s)
                    return s(t);
                throw "both async and sync fetching of the wasm failed"
            } catch (t) {
                P(t)
            }
        }
        function O(e) {
            for (; e.length > 0; ) {
                var n = e.shift();
                if ("function" != typeof n) {
                    var i = n.func;
                    "number" == typeof i ? void 0 === n.arg ? w.get(i)() : w.get(i)(n.arg) : i(void 0 === n.arg ? null : n.arg)
                } else
                    n(t)
            }
        }
        C(N) || (D = N,
        N = t.locateFile ? t.locateFile(D, c) : c + D);
        var z = 0
          , U = 4
          , F = 8
          , B = 12
          , G = 13
          , k = 16;
        function H(t) {
            this.excPtr = t,
            this.ptr = t - k,
            this.set_type = function(t) {
                v[this.ptr + F >> 2] = t
            }
            ,
            this.get_type = function() {
                return v[this.ptr + F >> 2]
            }
            ,
            this.set_destructor = function(t) {
                v[this.ptr + z >> 2] = t
            }
            ,
            this.get_destructor = function() {
                return v[this.ptr + z >> 2]
            }
            ,
            this.set_refcount = function(t) {
                v[this.ptr + U >> 2] = t
            }
            ,
            this.set_caught = function(t) {
                t = t ? 1 : 0,
                f[this.ptr + B >> 0] = t
            }
            ,
            this.get_caught = function() {
                return 0 != f[this.ptr + B >> 0]
            }
            ,
            this.set_rethrown = function(t) {
                t = t ? 1 : 0,
                f[this.ptr + G >> 0] = t
            }
            ,
            this.get_rethrown = function() {
                return 0 != f[this.ptr + G >> 0]
            }
            ,
            this.init = function(t, e) {
                this.set_type(t),
                this.set_destructor(e),
                this.set_refcount(0),
                this.set_caught(!1),
                this.set_rethrown(!1)
            }
            ,
            this.add_ref = function() {
                var t = v[this.ptr + U >> 2];
                v[this.ptr + U >> 2] = t + 1
            }
            ,
            this.release_ref = function() {
                var t = v[this.ptr + U >> 2];
                return v[this.ptr + U >> 2] = t - 1,
                1 === t
            }
        }
        var V, W = {
            mappings: {},
            buffers: [null, [], []],
            printChar: function(t, e) {
                var n = W.buffers[t];
                0 === e || 10 === e ? ((1 === t ? u : d)(_(n, 0)),
                n.length = 0) : n.push(e)
            },
            varargs: void 0,
            get: function() {
                return W.varargs += 4,
                v[W.varargs - 4 >> 2]
            },
            getStr: function(t) {
                return function(t, e) {
                    return t ? _(g, t, e) : ""
                }(t)
            },
            get64: function(t, e) {
                return t
            }
        }, j = {
            h: function(t) {
                return q(t + k) + k
            },
            g: function(t, e, n) {
                throw new H(t).init(e, n),
                t
            },
            b: function() {
                P()
            },
            d: function(t, e, n) {
                g.copyWithin(t, e, e + n)
            },
            e: function(t) {
                P("OOM")
            },
            i: function(t) {
                K(t)
            },
            f: function(t) {
                return 0
            },
            c: function(t, e, n, i, r) {},
            a: function(t, e, n, i) {
                for (var r = 0, s = 0; s < n; s++) {
                    for (var a = v[e + 8 * s >> 2], o = v[e + (8 * s + 4) >> 2], l = 0; l < o; l++)
                        W.printChar(t, g[a + l]);
                    r += o
                }
                return v[i >> 2] = r,
                0
            }
        }, X = (function() {
            var e = {
                a: j
            };
            function i(e, n) {
                var i, r = e.exports;
                t.asm = r,
                p = t.asm.j,
                i = p.buffer,
                t.HEAP8 = f = new Int8Array(i),
                t.HEAP16 = new Int16Array(i),
                t.HEAP32 = v = new Int32Array(i),
                t.HEAPU8 = g = new Uint8Array(i),
                t.HEAPU16 = new Uint16Array(i),
                t.HEAPU32 = new Uint32Array(i),
                t.HEAPF32 = new Float32Array(i),
                t.HEAPF64 = new Float64Array(i),
                w = t.asm.p,
                function(e) {
                    if (A--,
                    t.monitorRunDependencies && t.monitorRunDependencies(A),
                    0 == A && (null !== L && (clearInterval(L),
                    L = null),
                    R)) {
                        var n = R;
                        R = null,
                        n()
                    }
                }()
            }
            function r(t) {
                i(t.instance)
            }
            function s(t) {
                return (h || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return I(N)
                }
                )) : fetch(N, {
                    credentials: "same-origin"
                }).then((function(t) {
                    if (!t.ok)
                        throw "failed to load wasm binary file at '" + N + "'";
                    return t.arrayBuffer()
                }
                )).catch((function() {
                    return I(N)
                }
                ))).then((function(t) {
                    return WebAssembly.instantiate(t, e)
                }
                )).then(t, (function(t) {
                    d("failed to asynchronously prepare wasm: " + t),
                    P(t)
                }
                ))
            }
            if (A++,
            t.monitorRunDependencies && t.monitorRunDependencies(A),
            t.instantiateWasm)
                try {
                    return t.instantiateWasm(e, i)
                } catch (t) {
                    return d("Module.instantiateWasm callback failed with error: " + t),
                    !1
                }
            (h || "function" != typeof WebAssembly.instantiateStreaming || C(N) || "function" != typeof fetch ? s(r) : fetch(N, {
                credentials: "same-origin"
            }).then((function(t) {
                return WebAssembly.instantiateStreaming(t, e).then(r, (function(t) {
                    return d("wasm streaming compile failed: " + t),
                    d("falling back to ArrayBuffer instantiation"),
                    s(r)
                }
                ))
            }
            ))).catch(n)
        }(),
        t.___wasm_call_ctors = function() {
            return (X = t.___wasm_call_ctors = t.asm.k).apply(null, arguments)
        }
        ), q = (t._solver = function() {
            return (t._solver = t.asm.l).apply(null, arguments)
        }
        ,
        t._main = function() {
            return (t._main = t.asm.m).apply(null, arguments)
        }
        ,
        t._malloc = function() {
            return (q = t._malloc = t.asm.n).apply(null, arguments)
        }
        ), Y = (t._free = function() {
            return (t._free = t.asm.o).apply(null, arguments)
        }
        ,
        t.stackAlloc = function() {
            return (Y = t.stackAlloc = t.asm.q).apply(null, arguments)
        }
        );
        function Z(t) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + t + ")",
            this.status = t
        }
        function J(n) {
            function i() {
                V || (V = !0,
                t.calledRun = !0,
                y || (O(S),
                O(E),
                e(t),
                t.onRuntimeInitialized && t.onRuntimeInitialized(),
                Q && function(e) {
                    var n = t._main
                      , i = (e = e || []).length + 1
                      , r = Y(4 * (i + 1));
                    v[r >> 2] = b(o);
                    for (var s = 1; s < i; s++)
                        v[(r >> 2) + s] = b(e[s - 1]);
                    v[(r >> 2) + i] = 0;
                    try {
                        K(n(i, r), !0)
                    } catch (t) {
                        if (t instanceof Z)
                            return;
                        if ("unwind" == t)
                            return void (m = !0);
                        var a = t;
                        t && "object" == typeof t && t.stack && (a = [t, t.stack]),
                        d("exception thrown: " + a),
                        l(1, t)
                    }
                }(n),
                function() {
                    if (t.postRun)
                        for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; )
                            e = t.postRun.shift(),
                            T.unshift(e);
                    var e;
                    O(T)
                }()))
            }
            n = n || a,
            A > 0 || (function() {
                if (t.preRun)
                    for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; )
                        e = t.preRun.shift(),
                        M.unshift(e);
                var e;
                O(M)
            }(),
            A > 0 || (t.setStatus ? (t.setStatus("Running..."),
            setTimeout((function() {
                setTimeout((function() {
                    t.setStatus("")
                }
                ), 1),
                i()
            }
            ), 1)) : i()))
        }
        function K(e, n) {
            n && m && 0 === e || (m || (t.onExit && t.onExit(e),
            y = !0),
            l(e, new Z(e)))
        }
        if (R = function t() {
            V || J(),
            V || (R = t)
        }
        ,
        t.run = J,
        t.preInit)
            for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; )
                t.preInit.pop()();
        var Q = !0;
        return t.noInitialRun && (Q = !1),
        J(),
        t.ready
    }
    );
    class lh {
        constructor(t, e) {
            if (this.ptsBuf = new Float32Array(3 * this.max_pts).fill(NaN),
            this.linksBuf = new Float32Array(5 * this.max_links).fill(NaN),
            this.constraintsBuf = new Float32Array(8 * this.max_constraints).fill(NaN),
            this.plane = new pe(new G(0,0,1),0),
            this.labelContainer = document.getElementById("labels"),
            void 0 === e) {
                this.obj3d = new Ft,
                this.obj3d.name = "s" + t.sid++,
                this.obj3d.userData.type = "sketch",
                this.obj3d.matrixAutoUpdate = !1,
                this.objIdx = new Map,
                this.linkedObjs = new Map,
                this.l_id = 0,
                this.constraints = new Map,
                this.c_id = 1,
                this.dimGroup = new Ft,
                this.dimGroup.name = "dimensions",
                this.obj3d.add(this.dimGroup),
                this.geomStartIdx = this.obj3d.children.length,
                this.obj3d.userData.geomStartIdx = this.geomStartIdx,
                this.labels = [];
                const e = _l();
                e.matrixAutoUpdate = !1,
                e.userData.constraints = [],
                this.obj3d.add(e),
                this.updatePointsBuffer()
            } else
                this.obj3d = e.obj3d,
                this.obj3d.inverse = e.obj3d.matrix.clone().invert(),
                this.objIdx = JSON.parse(e.objIdx, sh),
                this.linkedObjs = JSON.parse(e.linkedObjs, sh),
                this.l_id = e.l_id,
                this.constraints = JSON.parse(e.constraints, sh),
                this.c_id = e.c_id,
                this.geomStartIdx = this.obj3d.userData.geomStartIdx,
                this.dimGroup = this.obj3d.children[this.geomStartIdx - 1],
                this.updatePointsBuffer(),
                this.updateOtherBuffers(),
                this.plane.applyMatrix4(this.obj3d.matrix);
            this.scene = t,
            this.camera = t.camera,
            this.canvas = t.canvas,
            this.rect = t.rect,
            this.bindHandlers(),
            this.hovered = [],
            this.scene.mode = "",
            this.subsequent = !1,
            this.wasm = null,
            (new oh).then((t=>this.wasm = t))
        }
        toJSON() {
            return {
                obj3d: this.obj3d,
                objIdx: JSON.stringify(this.objIdx, rh),
                linkedObjs: JSON.stringify(this.linkedObjs, rh),
                l_id: this.l_id,
                constraints: JSON.stringify(this.constraints, rh),
                c_id: this.c_id
            }
        }
        bindHandlers() {
            this.drawOnClick1 = kl.bind(this),
            this.drawPreClick2 = Hl.bind(this),
            this.drawOnClick2 = Vl.bind(this),
            this.drawPreClick3 = Wl.bind(this),
            this.drawOnClick3 = jl.bind(this),
            this.drawDimension = Jl.bind(this),
            this._onMoveDimension = tc.bind(this),
            this.setDimLines = ec.bind(this),
            this.updateDim = Kl.bind(this),
            this.awaitSelection = wl.bind(this),
            this.onHover = Jc.bind(this),
            this.onPick = Kc.bind(this),
            this.onDrag = Qc.bind(this),
            this.onRelease = $c.bind(this),
            this.onKeyPress = this.onKeyPress.bind(this),
            this.setHover = Ml.bind(this),
            this.clearSelection = th.bind(this)
        }
        setClean() {
            this.hasChanged = !1,
            this.idOnActivate = id,
            this.c_idOnActivate = this.c_id;
            const t = e=>{
                this.scene.selected.length && e.buttons && (this.canvas.removeEventListener("pointermove", t),
                this.hasChanged = !0)
            }
            ;
            this.canvas.addEventListener("pointermove", t)
        }
        activate() {
            window.addEventListener("keydown", this.onKeyPress),
            this.canvas.addEventListener("pointerdown", this.onPick),
            this.canvas.addEventListener("pointermove", this.onHover),
            this.setDimLines(),
            this.obj3d.traverse((t=>t.layers.enable(2))),
            this.obj3d.visible = !0,
            this.scene.axes.matrix = this.obj3d.matrix,
            this.scene.axes.visible = !0,
            this.scene.activeSketch = this,
            window.sketcher = this,
            this.setClean()
        }
        deactivate() {
            window.removeEventListener("keydown", this.onKeyPress),
            this.canvas.removeEventListener("pointerdown", this.onPick),
            this.canvas.removeEventListener("pointermove", this.onHover),
            this.labelContainer.innerHTML = "",
            this.obj3d.visible = !1,
            this.obj3d.traverse((t=>t.layers.disable(2))),
            this.scene.axes.visible = !1,
            this.scene.activeSketch = null,
            this.disableLineHover = !1,
            this.scene.newSketch && (this.scene.newSketch = !1),
            this.clearSelection()
        }
        align(t, e, n) {
            const i = ml.subVectors(n, t).normalize()
              , r = ch.elements;
            uh.subVectors(e, t).normalize(),
            ph.crossVectors(uh, i).normalize(),
            dh.crossVectors(ph, uh),
            r[0] = uh.x,
            r[4] = dh.x,
            r[8] = ph.x,
            r[1] = uh.y,
            r[5] = dh.y,
            r[9] = ph.y,
            r[2] = uh.z,
            r[6] = dh.z,
            r[10] = ph.z,
            this.obj3d.quaternion.setFromRotationMatrix(ch);
            const s = this.obj3d.parent;
            ch.extractRotation(s.matrixWorld),
            hh.setFromRotationMatrix(ch),
            this.obj3d.quaternion.premultiply(hh.invert()),
            this.obj3d.updateMatrix(),
            this.obj3d.matrix.setPosition(t),
            this.plane.applyMatrix4(this.obj3d.matrix),
            this.obj3d.inverse = this.obj3d.matrix.clone().invert()
        }
        onKeyPress(t) {
            if (t.isTrusted && "Escape" == t.key)
                this.disableLineHover = !1,
                Xl.call(this),
                this.scene.store.dispatch({
                    type: "set-mode",
                    mode: ""
                });
            else {
                const e = {
                    l: "line",
                    a: "arc",
                    p: "point",
                    d: "dimension",
                    c: "coincident",
                    v: "vertical",
                    h: "horizontal",
                    t: "tangent",
                    Delete: "delete",
                    Backspace: "delete"
                };
                this.command(e[t.key])
            }
        }
        command(t) {
            let e;
            switch (this.disableLineHover = !1,
            Xl.call(this),
            t) {
            case "delete":
                this.deleteSelected();
                break;
            case "coincident":
            case "vertical":
            case "horizontal":
            case "tangent":
                window.dispatchEvent(new KeyboardEvent("keydown",{
                    key: "Escape"
                }));
            case "line":
            case "arc":
            case "point":
            case "dimension":
                if (this.scene.mode == t)
                    e = "";
                else
                    switch (e = t,
                    t) {
                    case "line":
                    case "arc":
                        this.disableLineHover = !0,
                        this.canvas.addEventListener("pointerdown", this.drawOnClick1, {
                            once: !0
                        });
                        break;
                    case "point":
                        this.disableLineHover = !0,
                        this.canvas.addEventListener("pointerdown", (t=>{
                            if ("point" !== this.scene.mode)
                                return;
                            const e = _l();
                            e.matrixAutoUpdate = !1,
                            e.userData.constraints = [],
                            e.geometry.attributes.position.set(this.getLocation(t).toArray()),
                            e.layers.enable(2),
                            this.obj3d.add(e),
                            this.updatePointsBuffer(this.obj3d.children.length - 1),
                            this.scene.render()
                        }
                        ));
                        break;
                    case "dimension":
                        this.drawDimension();
                        break;
                    case "coincident":
                        eh.call(this).then((()=>this.scene.store.dispatch({
                            type: "set-mode",
                            mode: ""
                        })));
                        break;
                    case "vertical":
                        nh.call(this, 0).then((()=>this.scene.store.dispatch({
                            type: "set-mode",
                            mode: ""
                        })));
                        break;
                    case "horizontal":
                        nh.call(this, 1).then((()=>this.scene.store.dispatch({
                            type: "set-mode",
                            mode: ""
                        })));
                        break;
                    case "tangent":
                        ih.call(this).then((()=>this.scene.store.dispatch({
                            type: "set-mode",
                            mode: ""
                        })))
                    }
            }
            void 0 !== e && this.scene.store.dispatch({
                type: "set-mode",
                mode: e
            })
        }
        deleteSelected() {
            this.scene.selected.filter((t=>"dimension" == t.userData.type)).forEach((t=>this.constraints.has(t.name) && this.deleteConstraints(t.name)));
            const t = this.scene.selected.filter((t=>"line" == t.userData.type)).sort(((t,e)=>e.id - t.id)).map((t=>this.delete(t)));
            t.length && this.updatePointsBuffer(t[t.length - 1]),
            this.updateOtherBuffers(),
            this.scene.store.dispatch({
                type: "clear-selection"
            }),
            this.scene.render()
        }
        delete(t) {
            if (!t)
                return;
            if ("dimension" == t.userData.type)
                return void this.deleteConstraints(t.name);
            let e = this.linkedObjs.get(t.userData.l_id);
            if (!e)
                return;
            e = e[1];
            let n = this.objIdx.get(e[0]) || this.updatePoint;
            for (let t = 0; t < e.length; t++) {
                const e = this.obj3d.children[n + t];
                e.traverse((t=>{
                    t.geometry && t.geometry.dispose(),
                    t.material && t.material.dispose()
                }
                ));
                let i, r = [];
                for (let t of e.userData.constraints.slice())
                    i = this.constraints.get(t),
                    "points_coincident" == i[0] && r.push(i[2][0] == e.name ? i[2][1] : i[2][0]),
                    this.deleteConstraints(t);
                for (let t = 0; t < r.length - 1; t++)
                    eh.call(this, [this.obj3d.children[this.objIdx.get(r[t])], this.obj3d.children[this.objIdx.get(r[t + 1])]]);
                e.userData.constraints = []
            }
            return this.obj3d.children.splice(n, e.length),
            this.linkedObjs.delete(t.userData.l_id),
            n
        }
        deleteConstraints(t) {
            for (let e of this.constraints.get(t)[2]) {
                if (-1 == e)
                    continue;
                const n = this.obj3d.children[this.objIdx.get(e)];
                n && n.userData.constraints.splice(n.userData.constraints.indexOf(t), 1)
            }
            this.constraints.delete(t);
            for (let e = 0; e < this.dimGroup.children.length; e++)
                if (this.dimGroup.children[e].name == t) {
                    this.dimGroup.children.splice(e, e + 2).forEach((t=>{
                        t.label && t.label.remove(),
                        t.geometry.dispose(),
                        t.material.dispose()
                    }
                    ));
                    break
                }
        }
        updateOtherBuffers() {
            let t = 0;
            for (let[e,n] of this.constraints)
                this.constraintsBuf.set([this.constraintNum[n[0]], n[1], ...n[2].map((t=>this.objIdx.get(t) ?? 0)), n[3], n[4]], 8 * t),
                t++;
            t = 0;
            for (let[e,n] of this.linkedObjs)
                this.linksBuf.set([this.linkNum[n[0]], ...n[1].map((t=>this.objIdx.get(t) ?? -1))], 5 * t),
                t++
        }
        updatePointsBuffer(t=0) {
            for (let e = t; e < this.obj3d.children.length; e++) {
                const t = this.obj3d.children[e];
                this.objIdx.set(t.name, e),
                "Points" == t.type && this.ptsBuf.set(t.geometry.attributes.position.array, 3 * e)
            }
        }
        updateBoundingSpheres() {
            for (let t = this.geomStartIdx; t < this.obj3d.children.length; t++) {
                this.obj3d.children[t].geometry.computeBoundingSphere()
            }
            for (let t = 0; t < this.dimGroup.children.length; t++) {
                this.dimGroup.children[t].geometry.computeBoundingSphere()
            }
        }
        getLocation(t) {
            return fl.setFromCamera(pl.set((t.clientX - this.rect.left) / this.rect.width * 2 - 1, -(t.clientY - this.rect.top) / this.rect.height * 2 + 1), this.camera),
            fl.ray.intersectPlane(this.plane, ml).applyMatrix4(this.obj3d.inverse),
            ml
        }
        getScreenXY(t) {
            return ml.set(...t).applyMatrix4(this.obj3d.matrix).project(this.camera)
        }
        solve() {
            const t = this.wasm._malloc(this.ptsBuf.length * this.ptsBuf.BYTES_PER_ELEMENT);
            this.wasm.HEAPF32.set(this.ptsBuf, t >> 2);
            const e = this.wasm._malloc(this.constraintsBuf.length * this.constraintsBuf.BYTES_PER_ELEMENT);
            this.wasm.HEAPF32.set(this.constraintsBuf, e >> 2);
            const n = this.wasm._malloc(this.linksBuf.length * this.linksBuf.BYTES_PER_ELEMENT);
            this.wasm.HEAPF32.set(this.linksBuf, n >> 2),
            this.wasm._solver(this.obj3d.children.length, t, this.constraints.size, e, this.linkedObjs.size, n, this.geomStartIdx);
            for (let e = this.geomStartIdx, n = (t >> 2) + 3 * this.geomStartIdx; e < this.obj3d.children.length; e += 1,
            n += 3) {
                const t = this.obj3d.children[e].geometry.attributes.position;
                isNaN(this.wasm.HEAPF32[n]) ? (t.array[0] = this.wasm.HEAPF32[n - 6],
                t.array[1] = this.wasm.HEAPF32[n - 5],
                t.array[3] = this.wasm.HEAPF32[n - 3],
                t.array[4] = this.wasm.HEAPF32[n - 2]) : (t.array[0] = this.wasm.HEAPF32[n],
                t.array[1] = this.wasm.HEAPF32[n + 1]),
                t.needsUpdate = !0
            }
            this.wasm._free(t),
            this.wasm._free(n),
            this.wasm._free(e);
            for (let[t,e] of this.linkedObjs) {
                if ("arc" != e[0])
                    continue;
                const [t,n,i,r] = e[1].map((t=>this.obj3d.children[this.objIdx.get(t)]));
                let s;
                s = Bl(t.geometry.attributes.position.array, n.geometry.attributes.position.array, i.geometry.attributes.position.array),
                r.geometry.attributes.position.set(s),
                r.needsUpdate = !0
            }
            this.setDimLines()
        }
    }
    const ch = new ht
      , hh = new B
      , uh = new G
      , dh = new G
      , ph = new G;
    function mh(t, e) {
        let n = t.constraints
          , i = t.linkedObjs
          , r = t.obj3d.children
          , s = t.objIdx
          , a = new Set
          , o = [];
        function l(e) {
            if (e.userData.construction)
                return;
            a.add(e);
            let c, h, u, d = i.get(e.userData.l_id);
            if ("line" == d[0] ? h = d[1][2] : "arc" == d[0] && (h = d[1][3]),
            c = r[s.get(h)].geometry.attributes.position.array,
            d[1][0] == e.name) {
                u = 1;
                for (let t = 0; t < c.length; t += 3)
                    o.push(new V(c[t],c[t + 1]))
            } else {
                u = 0;
                for (let t = c.length - 3; t >= 0; t -= 3)
                    o.push(new V(c[t],c[t + 1]))
            }
            let p = r[s.get(d[1][u])];
            r[t.geomStartIdx + 1],
            function(e) {
                for (let i of e.userData.constraints)
                    if ("points_coincident" == n.get(i)[0])
                        for (let a of n.get(i)[2]) {
                            if (-1 == a)
                                continue;
                            const n = r[s.get(a)];
                            n != e && (n == r[t.geomStartIdx + 1] || l(n))
                        }
            }(p)
        }
        l(r[t.geomStartIdx + 1]);
        const c = new Ai(o)
          , h = new nn(new Us(c,{
            depth: e,
            bevelEnabled: !1
        }),new Br({
            color: gl.mesh,
            emissive: gl.emissive
        }));
        h.userData.type = "mesh",
        h.userData.featureInfo = [t.obj3d.name, e],
        h.layers.enable(1);
        const u = new In(h.geometry,new Rn);
        return u.userData.type = "point",
        u.visible = !1,
        u.layers.enable(1),
        h.add(u),
        h.matrixAutoUpdate = !1,
        h.matrix.multiply(t.obj3d.matrix),
        e < 0 && (fh(h.geometry),
        h.userData.inverted = !0,
        console.log("heere", h)),
        h
    }
    function fh(t) {
        const e = [0, 0, 0];
        for (let n = 0; n < t.attributes.normal.array.length / 9; n++)
            e[0] = t.attributes.normal.array[9 * n],
            e[1] = t.attributes.normal.array[9 * n + 1],
            e[2] = t.attributes.normal.array[9 * n + 2],
            t.attributes.normal.array[9 * n] = t.attributes.normal.array[9 * n + 6],
            t.attributes.normal.array[9 * n + 1] = t.attributes.normal.array[9 * n + 7],
            t.attributes.normal.array[9 * n + 2] = t.attributes.normal.array[9 * n + 8],
            t.attributes.normal.array[9 * n + 6] = e[0],
            t.attributes.normal.array[9 * n + 7] = e[1],
            t.attributes.normal.array[9 * n + 8] = e[2];
        for (let n = 0; n < t.attributes.position.array.length / 9; n++)
            e[0] = t.attributes.position.array[9 * n],
            e[1] = t.attributes.position.array[9 * n + 1],
            e[2] = t.attributes.position.array[9 * n + 2],
            t.attributes.position.array[9 * n] = t.attributes.position.array[9 * n + 6],
            t.attributes.position.array[9 * n + 1] = t.attributes.position.array[9 * n + 7],
            t.attributes.position.array[9 * n + 2] = t.attributes.position.array[9 * n + 8],
            t.attributes.position.array[9 * n + 6] = e[0],
            t.attributes.position.array[9 * n + 7] = e[1],
            t.attributes.position.array[9 * n + 8] = e[2];
        for (let n = 0; n < t.attributes.uv.array.length / 6; n++)
            e[0] = t.attributes.uv.array[6 * n],
            e[1] = t.attributes.uv.array[6 * n + 1],
            t.attributes.uv.array[6 * n] = t.attributes.uv.array[6 * n + 4],
            t.attributes.uv.array[6 * n + 1] = t.attributes.uv.array[6 * n + 5],
            t.attributes.uv.array[6 * n + 4] = e[0],
            t.attributes.uv.array[6 * n + 5] = e[1];
        t.attributes.normal.needsUpdate = !0,
        t.attributes.position.needsUpdate = !0,
        t.attributes.uv.needsUpdate = !0
    }
    Object.assign(lh.prototype, {
        linkNum: {
            line: 0,
            arc: 1
        },
        constraintNum: {
            points_coincident: 0,
            pt_pt_distance: 1,
            pt_plane_distance: 2,
            pt_line_distance: 3,
            pt_face_distance: 4,
            pt_in_plane: 5,
            pt_on_line: 6,
            pt_on_face: 7,
            equal_length_lines: 8,
            length_ratio: 9,
            eq_len_pt_line_d: 10,
            eq_pt_ln_distances: 11,
            equal_angle: 12,
            equal_line_arc_len: 13,
            symmetric: 14,
            symmetric_horiz: 15,
            symmetric_vert: 16,
            symmetric_line: 17,
            at_midpoint: 18,
            horizontal: 19,
            vertical: 20,
            diameter: 21,
            pt_on_circle: 22,
            same_orientation: 23,
            angle: 24,
            parallel: 25,
            perpendicular: 26,
            arc_line_tangent: 27,
            cubic_line_tangent: 28,
            equal_radius: 29,
            proj_pt_distance: 30,
            where_dragged: 31,
            curve_curve_tangent: 32,
            length_difference: 33,
            h_dist: 34,
            v_dist: 35
        },
        max_pts: 1e3,
        max_links: 1e3,
        max_constraints: 1e3
    });
    const gh = new G;
    let vh, yh;
    class xh extends Ut {
        constructor(t=new G(0,0,1), e=new G(0,0,0), n=1, i=16776960, r=.2 * n, s=.2 * r) {
            super(),
            this.type = "ArrowHelper",
            void 0 === vh && (vh = new Fe,
            vh.setAttribute("position", new lt([0, 0, 0, 0, 1, 0],3)),
            yh = new ts(0,.5,1,5,1),
            yh.translate(0, -.5, 0)),
            this.position.copy(e),
            this.line = new Hn(vh,new zn({
                color: i,
                toneMapped: !1
            })),
            this.line.matrixAutoUpdate = !1,
            this.add(this.line),
            this.cone = new nn(yh,new Ae({
                color: i,
                toneMapped: !1
            })),
            this.cone.matrixAutoUpdate = !1,
            this.add(this.cone),
            this.setDirection(t),
            this.setLength(n, r, s)
        }
        setDirection(t) {
            if (t.y > .99999)
                this.quaternion.set(0, 0, 0, 1);
            else if (t.y < -.99999)
                this.quaternion.set(1, 0, 0, 0);
            else {
                gh.set(t.z, 0, -t.x).normalize();
                const e = Math.acos(t.y);
                this.quaternion.setFromAxisAngle(gh, e)
            }
        }
        setLength(t, e=.2 * t, n=.2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t - e), 1),
            this.line.updateMatrix(),
            this.cone.scale.set(n, e, n),
            this.cone.position.y = t,
            this.cone.updateMatrix()
        }
        setColor(t) {
            this.line.material.color.set(t),
            this.cone.material.color.set(t)
        }
        copy(t) {
            return super.copy(t, !1),
            this.line.copy(t.line),
            this.cone.copy(t.cone),
            this
        }
    }
    class _h extends Ut {
        constructor(t=1) {
            return super(),
            this.matrixAutoUpdate = !1,
            this.initialZoom = t,
            this.length = [5.5, 10],
            this.headLength = 2.5,
            this.headWidth = 1.2,
            this.dirs = [[1, 0, 0], [0, 1, 0]],
            this.add(...this.dirs.map(((t,e)=>new xh(new G(...t),new G(0,0,0),this.length[e],13377306,this.headLength,this.headWidth)))),
            this
        }
        resize(t, e) {
            const n = this.initialZoom / t * 1e3 / e;
            for (let t = 0; t < this.children.length; t++)
                this.children[t].setLength(this.length[t] * n, this.headLength * n, this.headWidth * n)
        }
    }
    var bh = function(t, e) {
        void 0 === e && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),
        e === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
        var n = this
          , i = -1
          , a = 0
          , o = 1
          , l = 2
          , c = 3
          , h = 4;
        this.object = t,
        this.domElement = e,
        this.enabled = !0,
        this.screen = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        },
        this.rotateSpeed = 3,
        this.zoomSpeed = 1.2,
        this.panSpeed = 2,
        this.noRotate = !1,
        this.noZoom = !1,
        this.noPan = !1,
        this.staticMoving = !0,
        this.dynamicDampingFactor = .2,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.keys = [65, 83, 68],
        this.mouseButtons = {
            LEFT: null,
            MIDDLE: s,
            RIGHT: r
        },
        this.target = new G;
        var u = 1e-6
          , d = new G
          , p = 1
          , m = i
          , f = i
          , g = new G
          , v = new V
          , y = new V
          , x = new G
          , _ = 0
          , b = new V
          , w = new V
          , M = 0
          , S = 0
          , E = new V
          , T = new V;
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.up0 = this.object.up.clone(),
        this.zoom0 = this.object.zoom;
        var A = {
            type: "change"
        }
          , L = {
            type: "start"
        }
          , R = {
            type: "end"
        };
        this.handleResize = function() {
            var t = n.domElement.getBoundingClientRect()
              , e = n.domElement.ownerDocument.documentElement;
            n.screen.left = t.left + window.pageXOffset - e.clientLeft,
            n.screen.top = t.top + window.pageYOffset - e.clientTop,
            n.screen.width = t.width,
            n.screen.height = t.height
        }
        ;
        var P, C, D, N, I, O, z, U, F, k, H, W = (P = new V,
        function(t, e) {
            return P.set((t - n.screen.left) / n.screen.width, (e - n.screen.top) / n.screen.height),
            P
        }
        ), j = function() {
            var t = new V;
            return function(e, i) {
                return t.set((e - .5 * n.screen.width - n.screen.left) / (.5 * n.screen.width), (n.screen.height + 2 * (n.screen.top - i)) / n.screen.width),
                t
            }
        }();
        function X(t) {
            if (!1 !== n.enabled)
                switch (t.pointerType) {
                case "mouse":
                case "pen":
                    !function(t) {
                        if (t.preventDefault(),
                        t.stopPropagation(),
                        m === i)
                            switch (t.button) {
                            case 0:
                                m = n.mouseButtons.LEFT;
                                break;
                            case 1:
                                m = n.mouseButtons.MIDDLE;
                                break;
                            case 2:
                                m = t.ctrlKey ? n.mouseButtons.MIDDLE : n.mouseButtons.RIGHT;
                                break;
                            default:
                                m = i
                            }
                        var e = f !== i ? f : m;
                        e !== a || n.noRotate ? e !== o || n.noZoom ? e !== l || n.noPan || (E.copy(W(t.pageX, t.pageY)),
                        T.copy(E)) : (b.copy(W(t.pageX, t.pageY)),
                        w.copy(b)) : (y.copy(j(t.pageX, t.pageY)),
                        v.copy(y));
                        n.domElement.ownerDocument.addEventListener("pointermove", q),
                        n.domElement.ownerDocument.addEventListener("pointerup", Y),
                        n.dispatchEvent(L)
                    }(t)
                }
        }
        function q(t) {
            if (!1 !== n.enabled)
                switch (t.pointerType) {
                case "mouse":
                case "pen":
                    !function(t) {
                        if (!1 === n.enabled)
                            return;
                        t.preventDefault(),
                        t.stopPropagation();
                        var e = f !== i ? f : m;
                        e !== a || n.noRotate ? e !== o || n.noZoom ? e !== l || n.noPan || T.copy(W(t.pageX, t.pageY)) : w.copy(W(t.pageX, t.pageY)) : (v.copy(y),
                        y.copy(j(t.pageX, t.pageY)));
                        n.update()
                    }(t)
                }
        }
        function Y(t) {
            if (!1 !== n.enabled)
                switch (t.pointerType) {
                case "mouse":
                case "pen":
                    !function(t) {
                        if (!1 === n.enabled)
                            return;
                        t.preventDefault(),
                        t.stopPropagation(),
                        m = i,
                        n.domElement.ownerDocument.removeEventListener("pointermove", q),
                        n.domElement.ownerDocument.removeEventListener("pointerup", Y),
                        n.dispatchEvent(R)
                    }(t)
                }
        }
        function Z(t) {
            !1 !== n.enabled && (window.removeEventListener("keydown", Z),
            f === i && (t.keyCode !== n.keys[a] || n.noRotate ? t.keyCode !== n.keys[o] || n.noZoom ? t.keyCode !== n.keys[l] || n.noPan || (f = l) : f = o : f = a))
        }
        function J() {
            !1 !== n.enabled && (f = i,
            window.addEventListener("keydown", Z))
        }
        function K(t) {
            if (!1 !== n.enabled && !0 !== n.noZoom) {
                switch (t.preventDefault(),
                t.stopPropagation(),
                t.deltaMode) {
                case 2:
                    b.y -= .025 * t.deltaY;
                    break;
                case 1:
                    b.y -= .01 * t.deltaY;
                    break;
                default:
                    b.y -= 25e-5 * t.deltaY
                }
                n.update(),
                n.dispatchEvent(L),
                n.dispatchEvent(R)
            }
        }
        function Q(t) {
            if (!1 !== n.enabled) {
                switch (t.preventDefault(),
                t.touches.length) {
                case 1:
                    m = c,
                    y.copy(j(t.touches[0].pageX, t.touches[0].pageY)),
                    v.copy(y);
                    break;
                default:
                    m = h;
                    var e = t.touches[0].pageX - t.touches[1].pageX
                      , i = t.touches[0].pageY - t.touches[1].pageY;
                    S = M = Math.sqrt(e * e + i * i);
                    var r = (t.touches[0].pageX + t.touches[1].pageX) / 2
                      , s = (t.touches[0].pageY + t.touches[1].pageY) / 2;
                    E.copy(W(r, s)),
                    T.copy(E)
                }
                n.dispatchEvent(L)
            }
        }
        function $(t) {
            if (!1 !== n.enabled) {
                switch (t.preventDefault(),
                t.stopPropagation(),
                t.touches.length) {
                case 1:
                    v.copy(y),
                    y.copy(j(t.touches[0].pageX, t.touches[0].pageY));
                    break;
                default:
                    var e = t.touches[0].pageX - t.touches[1].pageX
                      , i = t.touches[0].pageY - t.touches[1].pageY;
                    S = Math.sqrt(e * e + i * i);
                    var r = (t.touches[0].pageX + t.touches[1].pageX) / 2
                      , s = (t.touches[0].pageY + t.touches[1].pageY) / 2;
                    T.copy(W(r, s))
                }
                n.update()
            }
        }
        function tt(t) {
            if (!1 !== n.enabled) {
                switch (t.touches.length) {
                case 0:
                    m = i;
                    break;
                case 1:
                    m = c,
                    y.copy(j(t.touches[0].pageX, t.touches[0].pageY)),
                    v.copy(y)
                }
                n.dispatchEvent(R)
            }
        }
        function et(t) {
            !1 !== n.enabled && t.preventDefault()
        }
        this.rotateCamera = (D = new G,
        N = new B,
        I = new G,
        O = new G,
        z = new G,
        U = new G,
        function() {
            U.set(y.x - v.x, y.y - v.y, 0),
            (C = U.length()) ? (g.copy(n.object.position).sub(n.target),
            I.copy(g).normalize(),
            O.copy(n.object.up).normalize(),
            z.crossVectors(O, I).normalize(),
            O.setLength(y.y - v.y),
            z.setLength(y.x - v.x),
            U.copy(O.add(z)),
            D.crossVectors(U, g).normalize(),
            C *= n.rotateSpeed,
            N.setFromAxisAngle(D, C),
            g.applyQuaternion(N),
            n.object.up.applyQuaternion(N),
            x.copy(D),
            _ = C) : !n.staticMoving && _ && (_ *= Math.sqrt(1 - n.dynamicDampingFactor),
            g.copy(n.object.position).sub(n.target),
            N.setFromAxisAngle(x, _),
            g.applyQuaternion(N),
            n.object.up.applyQuaternion(N)),
            v.copy(y)
        }
        ),
        this.zoomCamera = function() {
            var t;
            m === h ? (t = S / M,
            M = S,
            n.object.isPerspectiveCamera ? g.multiplyScalar(t) : n.object.isOrthographicCamera ? (n.object.zoom *= t,
            n.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (1 !== (t = 1 + (w.y - b.y) * n.zoomSpeed) && t > 0 && (n.object.isPerspectiveCamera ? g.multiplyScalar(t) : n.object.isOrthographicCamera ? (n.object.zoom /= t,
            n.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")),
            n.staticMoving ? b.copy(w) : b.y += (w.y - b.y) * this.dynamicDampingFactor)
        }
        ,
        this.panCamera = (F = new V,
        k = new G,
        H = new G,
        function() {
            if (F.copy(T).sub(E),
            F.lengthSq()) {
                if (n.object.isOrthographicCamera) {
                    var t = (n.object.right - n.object.left) / n.object.zoom / n.domElement.clientWidth
                      , e = (n.object.top - n.object.bottom) / n.object.zoom / n.domElement.clientWidth;
                    F.x *= t,
                    F.y *= e
                }
                F.multiplyScalar(1 * g.length() / 577 * n.domElement.clientWidth),
                H.copy(g).cross(n.object.up).setLength(F.x),
                H.add(k.copy(n.object.up).setLength(F.y)),
                n.object.position.add(H),
                n.target.add(H),
                n.staticMoving ? E.copy(T) : E.add(F.subVectors(T, E).multiplyScalar(n.dynamicDampingFactor))
            }
        }
        ),
        this.checkDistances = function() {
            n.noZoom && n.noPan || (g.lengthSq() > n.maxDistance * n.maxDistance && (n.object.position.addVectors(n.target, g.setLength(n.maxDistance)),
            b.copy(w)),
            g.lengthSq() < n.minDistance * n.minDistance && (n.object.position.addVectors(n.target, g.setLength(n.minDistance)),
            b.copy(w)))
        }
        ,
        this.update = function() {
            g.subVectors(n.object.position, n.target),
            n.noRotate || n.rotateCamera(),
            n.noZoom || n.zoomCamera(),
            n.noPan || n.panCamera(),
            n.object.position.addVectors(n.target, g),
            n.object.isPerspectiveCamera ? (n.checkDistances(),
            n.object.lookAt(n.target),
            d.distanceToSquared(n.object.position) > u && (n.dispatchEvent(A),
            d.copy(n.object.position))) : n.object.isOrthographicCamera ? (n.object.lookAt(n.target),
            (d.distanceToSquared(n.object.position) > u || p !== n.object.zoom) && (n.dispatchEvent(A),
            d.copy(n.object.position),
            p = n.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type")
        }
        ,
        this.reset = function() {
            m = i,
            f = i,
            n.target.copy(n.target0),
            n.object.position.copy(n.position0),
            n.object.up.copy(n.up0),
            n.object.zoom = n.zoom0,
            n.object.updateProjectionMatrix(),
            g.subVectors(n.object.position, n.target),
            n.object.lookAt(n.target),
            n.dispatchEvent(A),
            d.copy(n.object.position),
            p = n.object.zoom
        }
        ,
        this.dispose = function() {
            n.domElement.removeEventListener("contextmenu", et),
            n.domElement.removeEventListener("pointerdown", X),
            n.domElement.removeEventListener("wheel", K),
            n.domElement.removeEventListener("touchstart", Q),
            n.domElement.removeEventListener("touchend", tt),
            n.domElement.removeEventListener("touchmove", $),
            n.domElement.ownerDocument.removeEventListener("pointermove", q),
            n.domElement.ownerDocument.removeEventListener("pointerup", Y),
            window.removeEventListener("keydown", Z),
            window.removeEventListener("keyup", J)
        }
        ,
        this.domElement.addEventListener("contextmenu", et),
        this.domElement.addEventListener("pointerdown", X),
        this.domElement.addEventListener("wheel", K),
        this.domElement.addEventListener("touchstart", Q),
        this.domElement.addEventListener("touchend", tt),
        this.domElement.addEventListener("touchmove", $),
        this.domElement.ownerDocument.addEventListener("pointermove", q),
        this.domElement.ownerDocument.addEventListener("pointerup", Y),
        window.addEventListener("keydown", Z),
        window.addEventListener("keyup", J),
        this.handleResize(),
        this.update()
    };
    (bh.prototype = Object.create(yt.prototype)).constructor = bh;
    class wh {
        constructor() {
            this.polygons = []
        }
        clone() {
            let t = new wh;
            return t.polygons = this.polygons.map((function(t) {
                return t.clone()
            }
            )),
            t
        }
        toPolygons() {
            return this.polygons
        }
        union(t) {
            let e = new Rh(this.clone().polygons)
              , n = new Rh(t.clone().polygons);
            return e.clipTo(n),
            n.clipTo(e),
            n.invert(),
            n.clipTo(e),
            n.invert(),
            e.build(n.allPolygons()),
            wh.fromPolygons(e.allPolygons())
        }
        subtract(t) {
            let e = new Rh(this.clone().polygons)
              , n = new Rh(t.clone().polygons);
            return e.invert(),
            e.clipTo(n),
            n.clipTo(e),
            n.invert(),
            n.clipTo(e),
            n.invert(),
            e.build(n.allPolygons()),
            e.invert(),
            wh.fromPolygons(e.allPolygons())
        }
        intersect(t) {
            let e = new Rh(this.clone().polygons)
              , n = new Rh(t.clone().polygons);
            return e.invert(),
            n.clipTo(e),
            n.invert(),
            e.clipTo(n),
            n.clipTo(e),
            e.build(n.allPolygons()),
            e.invert(),
            wh.fromPolygons(e.allPolygons())
        }
        inverse() {
            let t = this.clone();
            return t.polygons.forEach((t=>t.flip())),
            t
        }
    }
    wh.fromPolygons = function(t) {
        let e = new wh;
        return e.polygons = t,
        e
    }
    ;
    class Mh {
        constructor(t=0, e=0, n=0) {
            this.x = t,
            this.y = e,
            this.z = n
        }
        copy(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        }
        clone() {
            return new Mh(this.x,this.y,this.z)
        }
        negate() {
            return this.x *= -1,
            this.y *= -1,
            this.z *= -1,
            this
        }
        add(t) {
            return this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this
        }
        sub(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this
        }
        times(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        }
        dividedBy(t) {
            return this.x /= t,
            this.y /= t,
            this.z /= t,
            this
        }
        lerp(t, e) {
            return this.add(Sh.copy(t).sub(this).times(e))
        }
        unit() {
            return this.dividedBy(this.length())
        }
        length() {
            return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
        }
        normalize() {
            return this.unit()
        }
        cross(t) {
            let e = this;
            const n = e.x
              , i = e.y
              , r = e.z
              , s = t.x
              , a = t.y
              , o = t.z;
            return this.x = i * o - r * a,
            this.y = r * s - n * o,
            this.z = n * a - i * s,
            this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }
    }
    let Sh = new Mh
      , Eh = new Mh;
    class Th {
        constructor(t, e, n, i) {
            this.pos = (new Mh).copy(t),
            this.normal = (new Mh).copy(e),
            this.uv = (new Mh).copy(n),
            this.uv.z = 0,
            i && (this.color = (new Mh).copy(i))
        }
        clone() {
            return new Th(this.pos,this.normal,this.uv,this.color)
        }
        flip() {
            this.normal.negate()
        }
        interpolate(t, e) {
            return new Th(this.pos.clone().lerp(t.pos, e),this.normal.clone().lerp(t.normal, e),this.uv.clone().lerp(t.uv, e),this.color && t.color && this.color.clone().lerp(t.color, e))
        }
    }
    class Ah {
        constructor(t, e) {
            this.normal = t,
            this.w = e
        }
        clone() {
            return new Ah(this.normal.clone(),this.w)
        }
        flip() {
            this.normal.negate(),
            this.w = -this.w
        }
        splitPolygon(t, e, n, i, r) {
            let s = 0
              , a = [];
            for (let e = 0; e < t.vertices.length; e++) {
                let n = this.normal.dot(t.vertices[e].pos) - this.w
                  , i = n < -Ah.EPSILON ? 2 : n > Ah.EPSILON ? 1 : 0;
                s |= i,
                a.push(i)
            }
            switch (s) {
            case 0:
                (this.normal.dot(t.plane.normal) > 0 ? e : n).push(t);
                break;
            case 1:
                i.push(t);
                break;
            case 2:
                r.push(t);
                break;
            case 3:
                let s = []
                  , o = [];
                for (let e = 0; e < t.vertices.length; e++) {
                    let n = (e + 1) % t.vertices.length
                      , i = a[e]
                      , r = a[n]
                      , l = t.vertices[e]
                      , c = t.vertices[n];
                    if (2 != i && s.push(l),
                    1 != i && o.push(2 != i ? l.clone() : l),
                    3 == (i | r)) {
                        let t = (this.w - this.normal.dot(l.pos)) / this.normal.dot(Sh.copy(c.pos).sub(l.pos))
                          , e = l.interpolate(c, t);
                        s.push(e),
                        o.push(e.clone())
                    }
                }
                s.length >= 3 && i.push(new Lh(s,t.shared)),
                o.length >= 3 && r.push(new Lh(o,t.shared))
            }
        }
    }
    Ah.EPSILON = 1e-5,
    Ah.fromPoints = function(t, e, n) {
        let i = Sh.copy(e).sub(t).cross(Eh.copy(n).sub(t)).normalize();
        return new Ah(i.clone(),i.dot(t))
    }
    ;
    class Lh {
        constructor(t, e) {
            this.vertices = t,
            this.shared = e,
            this.plane = Ah.fromPoints(t[0].pos, t[1].pos, t[2].pos)
        }
        clone() {
            return new Lh(this.vertices.map((t=>t.clone())),this.shared)
        }
        flip() {
            this.vertices.reverse().map((t=>t.flip())),
            this.plane.flip()
        }
    }
    class Rh {
        constructor(t) {
            this.plane = null,
            this.front = null,
            this.back = null,
            this.polygons = [],
            t && this.build(t)
        }
        clone() {
            let t = new Rh;
            return t.plane = this.plane && this.plane.clone(),
            t.front = this.front && this.front.clone(),
            t.back = this.back && this.back.clone(),
            t.polygons = this.polygons.map((t=>t.clone())),
            t
        }
        invert() {
            for (let t = 0; t < this.polygons.length; t++)
                this.polygons[t].flip();
            this.plane && this.plane.flip(),
            this.front && this.front.invert(),
            this.back && this.back.invert();
            let t = this.front;
            this.front = this.back,
            this.back = t
        }
        clipPolygons(t) {
            if (!this.plane)
                return t.slice();
            let e = []
              , n = [];
            for (let i = 0; i < t.length; i++)
                this.plane.splitPolygon(t[i], e, n, e, n);
            return this.front && (e = this.front.clipPolygons(e)),
            n = this.back ? this.back.clipPolygons(n) : [],
            e.concat(n)
        }
        clipTo(t) {
            this.polygons = t.clipPolygons(this.polygons),
            this.front && this.front.clipTo(t),
            this.back && this.back.clipTo(t)
        }
        allPolygons() {
            let t = this.polygons.slice();
            return this.front && (t = t.concat(this.front.allPolygons())),
            this.back && (t = t.concat(this.back.allPolygons())),
            t
        }
        build(t) {
            if (!t.length)
                return;
            this.plane || (this.plane = t[0].plane.clone());
            let e = []
              , n = [];
            for (let i = 0; i < t.length; i++)
                this.plane.splitPolygon(t[i], this.polygons, this.polygons, e, n);
            e.length && (this.front || (this.front = new Rh),
            this.front.build(e)),
            n.length && (this.back || (this.back = new Rh),
            this.back.build(n))
        }
    }
    wh.fromJSON = function(t) {
        return wh.fromPolygons(t.polygons.map((t=>new Lh(t.vertices.map((t=>new Th(t.pos,t.normal,t.uv))),t.shared))))
    }
    ,
    wh.fromGeometry = function(t, e) {
        if (!t.isBufferGeometry)
            return void console.error("Unsupported CSG input type:" + t.type);
        let n, i = [], r = t.attributes.position, s = t.attributes.normal, a = t.attributes.uv, o = t.attributes.color;
        if (t.index)
            n = t.index.array;
        else {
            n = new Array(r.array.length / r.itemSize | 0);
            for (let t = 0; t < n.length; t++)
                n[t] = t
        }
        let l = n.length / 3 | 0;
        i = new Array(l);
        for (let t = 0, l = 0, c = n.length; t < c; t += 3,
        l++) {
            let c = new Array(3);
            for (let e = 0; e < 3; e++) {
                let i = n[t + e]
                  , l = 3 * i
                  , h = 2 * i
                  , u = r.array[l]
                  , d = r.array[l + 1]
                  , p = r.array[l + 2]
                  , m = s.array[l]
                  , f = s.array[l + 1]
                  , g = s.array[l + 2]
                  , v = a.array[h]
                  , y = a.array[h + 1];
                c[e] = new Th({
                    x: u,
                    y: d,
                    z: p
                },{
                    x: m,
                    y: f,
                    z: g
                },{
                    x: v,
                    y,
                    z: 0
                },o && {
                    x: o.array[h],
                    y: o.array[h + 1],
                    z: o.array[h + 2]
                })
            }
            i[l] = new Lh(c,e)
        }
        return wh.fromPolygons(i)
    }
    ;
    let Ph = new G
      , Ch = new Mt;
    wh.fromMesh = function(t, e) {
        let n = wh.fromGeometry(t.geometry, e);
        Ch.getNormalMatrix(t.matrix);
        for (let e = 0; e < n.polygons.length; e++) {
            let i = n.polygons[e];
            for (let e = 0; e < i.vertices.length; e++) {
                let n = i.vertices[e];
                n.pos.copy(Ph.copy(n.pos).applyMatrix4(t.matrix)),
                n.normal.copy(Ph.copy(n.normal).applyMatrix3(Ch))
            }
        }
        return n
    }
    ;
    let Dh = t=>({
        top: 0,
        array: new Float32Array(t),
        write: function(t) {
            this.array[this.top++] = t.x,
            this.array[this.top++] = t.y,
            this.array[this.top++] = t.z
        }
    })
      , Nh = t=>({
        top: 0,
        array: new Float32Array(t),
        write: function(t) {
            this.array[this.top++] = t.x,
            this.array[this.top++] = t.y
        }
    });
    wh.toMesh = function(t, e, n) {
        let i, r, s = t.polygons;
        {
            let t = 0;
            s.forEach((e=>t += e.vertices.length - 2)),
            i = new Fe;
            let e, n = Dh(3 * t * 3), a = Dh(3 * t * 3), o = Nh(2 * t * 3), l = [];
            if (s.forEach((i=>{
                let r = i.vertices
                  , s = r.length;
                void 0 !== i.shared && (l[i.shared] || (l[i.shared] = [])),
                s && void 0 !== r[0].color && (e || (e = Dh(3 * t * 3)));
                for (let t = 3; t <= s; t++)
                    void 0 !== i.shared && l[i.shared].push(n.top / 3, n.top / 3 + 1, n.top / 3 + 2),
                    n.write(r[0].pos),
                    n.write(r[t - 2].pos),
                    n.write(r[t - 1].pos),
                    a.write(r[0].normal),
                    a.write(r[t - 2].normal),
                    a.write(r[t - 1].normal),
                    o.write(r[0].uv),
                    o.write(r[t - 2].uv),
                    o.write(r[t - 1].uv),
                    e && (e.write(r[0].color) || e.write(r[t - 2].color) || e.write(r[t - 1].color))
            }
            )),
            i.setAttribute("position", new $(n.array,3)),
            i.setAttribute("normal", new $(a.array,3)),
            i.setAttribute("uv", new $(o.array,2)),
            e && i.setAttribute("color", new $(e.array,3)),
            l.length) {
                let t = []
                  , e = 0;
                for (let n = 0; n < l.length; n++)
                    i.addGroup(e, l[n].length, n),
                    e += l[n].length,
                    t = t.concat(l[n]);
                i.setIndex(t)
            }
            r = i
        }
        let a = (new ht).copy(e).invert();
        i.applyMatrix4(a),
        i.computeBoundingSphere(),
        i.computeBoundingBox();
        let o = new nn(i,n);
        return o.matrix.copy(e),
        o.matrix.decompose(o.position, o.quaternion, o.scale),
        o.rotation.setFromQuaternion(o.quaternion),
        o.updateMatrixWorld(),
        o.castShadow = o.receiveShadow = !0,
        o
    }
    ;
    const Ih = wh;
    var Oh = function() {};
    let zh, Uh, Fh, Bh, Gh, kh, Hh;
    Oh.prototype = {
        constructor: Oh,
        parse: function(t, e) {
            void 0 === e && (e = {});
            var n, i = void 0 !== e.binary && e.binary, r = [], s = 0;
            t.traverse((function(t) {
                if (t.isMesh) {
                    var e = t.geometry;
                    if (!0 !== e.isBufferGeometry)
                        throw new Error("THREE.STLExporter: Geometry is not of type THREE.BufferGeometry.");
                    var n = e.index
                      , i = e.getAttribute("position");
                    s += null !== n ? n.count / 3 : i.count / 3,
                    r.push({
                        object3d: t,
                        geometry: e
                    })
                }
            }
            ));
            var a = 80;
            if (!0 === i) {
                var o = new ArrayBuffer(2 * s + 3 * s * 4 * 4 + 80 + 4);
                (n = new DataView(o)).setUint32(a, s, !0),
                a += 4
            } else
                n = "",
                n += "solid exported\n";
            for (var l = new G, c = new G, h = new G, u = new G, d = new G, p = new G, m = 0, f = r.length; m < f; m++) {
                var g = r[m].object3d
                  , v = r[m].geometry
                  , y = v.index
                  , x = v.getAttribute("position");
                if (null !== y)
                    for (var _ = 0; _ < y.count; _ += 3) {
                        b(y.getX(_ + 0), y.getX(_ + 1), y.getX(_ + 2), x, g)
                    }
                else
                    for (_ = 0; _ < x.count; _ += 3) {
                        b(_ + 0, _ + 1, _ + 2, x, g)
                    }
            }
            return !1 === i && (n += "endsolid exported\n"),
            n;
            function b(t, e, r, s, o) {
                l.fromBufferAttribute(s, t),
                c.fromBufferAttribute(s, e),
                h.fromBufferAttribute(s, r),
                !0 === o.isSkinnedMesh && (o.boneTransform(t, l),
                o.boneTransform(e, c),
                o.boneTransform(r, h)),
                l.applyMatrix4(o.matrixWorld),
                c.applyMatrix4(o.matrixWorld),
                h.applyMatrix4(o.matrixWorld),
                function(t, e, r) {
                    u.subVectors(r, e),
                    d.subVectors(t, e),
                    u.cross(d).normalize(),
                    p.copy(u).normalize(),
                    !0 === i ? (n.setFloat32(a, p.x, !0),
                    a += 4,
                    n.setFloat32(a, p.y, !0),
                    a += 4,
                    n.setFloat32(a, p.z, !0),
                    a += 4) : (n += "\tfacet normal " + p.x + " " + p.y + " " + p.z + "\n",
                    n += "\t\touter loop\n")
                }(l, c, h),
                w(l),
                w(c),
                w(h),
                !0 === i ? (n.setUint16(a, 0, !0),
                a += 2) : (n += "\t\tendloop\n",
                n += "\tendfacet\n")
            }
            function w(t) {
                !0 === i ? (n.setFloat32(a, t.x, !0),
                a += 4,
                n.setFloat32(a, t.y, !0),
                a += 4,
                n.setFloat32(a, t.z, !0),
                a += 4) : n += "\t\t\tvertex " + t.x + " " + t.y + " " + t.z + "\n"
            }
        }
    },
    window.loader = new class extends dr {
        constructor(t) {
            super(t)
        }
        load(t, e, n, i) {
            const r = this
              , s = "" === this.path ? Yr(t) : this.path;
            this.resourcePath = this.resourcePath || s;
            const a = new Pr(this.manager);
            a.setPath(this.path),
            a.setRequestHeader(this.requestHeader),
            a.setWithCredentials(this.withCredentials),
            a.load(t, (function(n) {
                let s = null;
                try {
                    s = JSON.parse(n)
                } catch (e) {
                    return void 0 !== i && i(e),
                    void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                const a = s.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t)
            }
            ), n, i)
        }
        parse(t, e) {
            const n = this.parseAnimations(t.animations)
              , i = this.parseShapes(t.shapes)
              , r = this.parseGeometries(t.geometries, i)
              , s = this.parseImages(t.images, (function() {
                void 0 !== e && e(l)
            }
            ))
              , a = this.parseTextures(t.textures, s)
              , o = this.parseMaterials(t.materials, a)
              , l = this.parseObject(t.object, r, o, n)
              , c = this.parseSkeletons(t.skeletons, l);
            if (this.bindSkeletons(l, c),
            void 0 !== e) {
                let t = !1;
                for (const e in s)
                    if (s[e]instanceof HTMLImageElement) {
                        t = !0;
                        break
                    }
                !1 === t && e(l)
            }
            return l
        }
        parseShapes(t) {
            const e = {};
            if (void 0 !== t)
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = (new Ai).fromJSON(t[n]);
                    e[i.uuid] = i
                }
            return e
        }
        parseSkeletons(t, e) {
            const n = {}
              , i = {};
            if (e.traverse((function(t) {
                t.isBone && (i[t.uuid] = t)
            }
            )),
            void 0 !== t)
                for (let e = 0, r = t.length; e < r; e++) {
                    const r = (new si).fromJSON(t[e], i);
                    n[r.uuid] = r
                }
            return n
        }
        parseGeometries(t, n) {
            const r = {};
            let s;
            if (void 0 !== t) {
                const a = new Kr;
                for (let o = 0, l = t.length; o < l; o++) {
                    let l;
                    const c = t[o];
                    switch (c.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        l = new i[c.type](c.width,c.height,c.widthSegments,c.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                        l = new i[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        l = new i[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        l = new i[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        l = new i[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        l = new i[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        l = new i[c.type](c.radius,c.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        l = new i[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        l = new i[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        l = new i[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        l = new i[c.type]((new e[c.path.type]).fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        l = new i[c.type](c.points,c.segments,c.phiStart,c.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        l = new i[c.type](c.vertices,c.indices,c.radius,c.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        s = [];
                        for (let t = 0, e = c.shapes.length; t < e; t++) {
                            const e = n[c.shapes[t]];
                            s.push(e)
                        }
                        l = new i[c.type](s,c.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        s = [];
                        for (let t = 0, e = c.shapes.length; t < e; t++) {
                            const e = n[c.shapes[t]];
                            s.push(e)
                        }
                        const t = c.options.extrudePath;
                        void 0 !== t && (c.options.extrudePath = (new e[t.type]).fromJSON(t)),
                        l = new i[c.type](s,c.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        l = a.parse(c);
                        break;
                    case "Geometry":
                        console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                        continue
                    }
                    l.uuid = c.uuid,
                    void 0 !== c.name && (l.name = c.name),
                    !0 === l.isBufferGeometry && void 0 !== c.userData && (l.userData = c.userData),
                    r[c.uuid] = l
                }
            }
            return r
        }
        parseMaterials(t, e) {
            const n = {}
              , i = {};
            if (void 0 !== t) {
                const r = new qr;
                r.setTextures(e);
                for (let e = 0, s = t.length; e < s; e++) {
                    const s = t[e];
                    if ("MultiMaterial" === s.type) {
                        const t = [];
                        for (let e = 0; e < s.materials.length; e++) {
                            const i = s.materials[e];
                            void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)),
                            t.push(n[i.uuid])
                        }
                        i[s.uuid] = t
                    } else
                        void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)),
                        i[s.uuid] = n[s.uuid]
                }
            }
            return i
        }
        parseAnimations(t) {
            const e = {};
            if (void 0 !== t)
                for (let n = 0; n < t.length; n++) {
                    const i = t[n]
                      , r = Ar.parse(i);
                    e[r.uuid] = r
                }
            return e
        }
        parseImages(t, e) {
            const n = this
              , i = {};
            let r;
            function s(t) {
                if ("string" == typeof t) {
                    const e = t;
                    return function(t) {
                        return n.manager.itemStart(t),
                        r.load(t, (function() {
                            n.manager.itemEnd(t)
                        }
                        ), void 0, (function() {
                            n.manager.itemError(t),
                            n.manager.itemEnd(t)
                        }
                        ))
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e)
                }
                return t.data ? {
                    data: Pe(t.type, t.data),
                    width: t.width,
                    height: t.height
                } : null
            }
            if (void 0 !== t && t.length > 0) {
                const n = new hr(e);
                r = new pr(n),
                r.setCrossOrigin(this.crossOrigin);
                for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e]
                      , r = n.url;
                    if (Array.isArray(r)) {
                        i[n.uuid] = [];
                        for (let t = 0, e = r.length; t < e; t++) {
                            const e = s(r[t]);
                            null !== e && (e instanceof HTMLImageElement ? i[n.uuid].push(e) : i[n.uuid].push(new lr(e.data,e.width,e.height)))
                        }
                    } else {
                        const t = s(n.url);
                        null !== t && (i[n.uuid] = t)
                    }
                }
            }
            return i
        }
        parseTextures(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                e[t])
            }
            const i = {};
            if (void 0 !== t)
                for (let r = 0, s = t.length; r < s; r++) {
                    const s = t[r];
                    let a;
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    const o = e[s.image];
                    Array.isArray(o) ? (a = new or(o),
                    6 === o.length && (a.needsUpdate = !0)) : (a = o && o.data ? new lr(o.data,o.width,o.height) : new sr(o),
                    o && (a.needsUpdate = !0)),
                    a.uuid = s.uuid,
                    void 0 !== s.name && (a.name = s.name),
                    void 0 !== s.mapping && (a.mapping = n(s.mapping, $s)),
                    void 0 !== s.offset && a.offset.fromArray(s.offset),
                    void 0 !== s.repeat && a.repeat.fromArray(s.repeat),
                    void 0 !== s.center && a.center.fromArray(s.center),
                    void 0 !== s.rotation && (a.rotation = s.rotation),
                    void 0 !== s.wrap && (a.wrapS = n(s.wrap[0], ta),
                    a.wrapT = n(s.wrap[1], ta)),
                    void 0 !== s.format && (a.format = s.format),
                    void 0 !== s.type && (a.type = s.type),
                    void 0 !== s.encoding && (a.encoding = s.encoding),
                    void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, ea)),
                    void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, ea)),
                    void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (a.flipY = s.flipY),
                    void 0 !== s.premultiplyAlpha && (a.premultiplyAlpha = s.premultiplyAlpha),
                    void 0 !== s.unpackAlignment && (a.unpackAlignment = s.unpackAlignment),
                    i[s.uuid] = a
                }
            return i
        }
        parseObject(t, e, n, i) {
            let r, s, a;
            function o(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                e[t]
            }
            function l(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        const e = [];
                        for (let i = 0, r = t.length; i < r; i++) {
                            const r = t[i];
                            void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r),
                            e.push(n[r])
                        }
                        return e
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                    n[t]
                }
            }
            switch (t.type) {
            case "Scene":
                r = new er,
                void 0 !== t.background && Number.isInteger(t.background) && (r.background = new J(t.background)),
                void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new Li(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new Ri(t.fog.color,t.fog.density)));
                break;
            case "PerspectiveCamera":
                r = new Gi(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (r.focus = t.focus),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                r = new Yi(t.left,t.right,t.top,t.bottom,t.near,t.far),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                r = new Ki(t.color,t.intensity);
                break;
            case "DirectionalLight":
                r = new Ji(t.color,t.intensity);
                break;
            case "PointLight":
                r = new qi(t.color,t.intensity,t.distance,t.decay);
                break;
            case "RectAreaLight":
                r = new Qi(t.color,t.intensity,t.width,t.height);
                break;
            case "SpotLight":
                r = new Hi(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                r = new Ci(t.color,t.groundColor,t.intensity);
                break;
            case "LightProbe":
                r = (new tr).fromJSON(t);
                break;
            case "SkinnedMesh":
                s = o(t.geometry),
                a = l(t.material),
                r = new ei(s,a),
                void 0 !== t.bindMode && (r.bindMode = t.bindMode),
                void 0 !== t.bindMatrix && r.bindMatrix.fromArray(t.bindMatrix),
                void 0 !== t.skeleton && (r.skeleton = t.skeleton);
                break;
            case "Mesh":
                s = o(t.geometry),
                a = l(t.material),
                r = new nn(s,a);
                break;
            case "InstancedMesh":
                s = o(t.geometry),
                a = l(t.material);
                const e = t.count
                  , n = t.instanceMatrix;
                r = new cn(s,a,e),
                r.instanceMatrix = new $(new Float32Array(n.array),16);
                break;
            case "LOD":
                r = new Zn;
                break;
            case "Line":
                r = new Hn(o(t.geometry),l(t.material));
                break;
            case "LineLoop":
                r = new Vn(o(t.geometry),l(t.material));
                break;
            case "LineSegments":
                r = new Xn(o(t.geometry),l(t.material));
                break;
            case "PointCloud":
            case "Points":
                r = new In(o(t.geometry),l(t.material));
                break;
            case "Sprite":
                r = new An(l(t.material));
                break;
            case "Group":
                r = new Ft;
                break;
            case "Bone":
                r = new ni;
                break;
            default:
                r = new Ut
            }
            if (r.uuid = t.uuid,
            void 0 !== t.name && (r.name = t.name),
            void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix),
            void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate),
            r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position),
            void 0 !== t.rotation && r.rotation.fromArray(t.rotation),
            void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion),
            void 0 !== t.scale && r.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (r.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow),
            t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias),
            void 0 !== t.shadow.normalBias && (r.shadow.normalBias = t.shadow.normalBias),
            void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius),
            void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize),
            void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))),
            void 0 !== t.visible && (r.visible = t.visible),
            void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled),
            void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder),
            void 0 !== t.userData && (r.userData = t.userData),
            void 0 !== t.layers && (r.layers.mask = t.layers),
            void 0 !== t.children) {
                const s = t.children;
                for (let t = 0; t < s.length; t++)
                    r.add(this.parseObject(s[t], e, n, i))
            }
            if (void 0 !== t.animations) {
                const e = t.animations;
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    r.animations.push(i[n])
                }
            }
            if ("LOD" === t.type) {
                void 0 !== t.autoUpdate && (r.autoUpdate = t.autoUpdate);
                const e = t.levels;
                for (let t = 0; t < e.length; t++) {
                    const n = e[t]
                      , i = r.getObjectByProperty("uuid", n.object);
                    void 0 !== i && r.addLevel(i, n.distance)
                }
            }
            return r
        }
        bindSkeletons(t, e) {
            0 !== Object.keys(e).length && t.traverse((function(t) {
                if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
                    const n = e[t.skeleton];
                    void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix)
                }
            }
            ))
        }
        setTexturePath(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),
            this.setResourcePath(t)
        }
    }
    ,
    window.STLexp = new Oh,
    window.id = 0;
    function Vh() {
        if (this.resizeCanvas(this.renderer)) {
            const t = this.renderer.domElement;
            this.camera.left = -t.clientWidth / t.clientHeight,
            this.camera.right = t.clientWidth / t.clientHeight,
            this.camera.updateProjectionMatrix(),
            this.controls.handleResize(),
            Object.assign(this.rect, this.canvas.getBoundingClientRect().toJSON())
        }
        if (this.axes && this.axes.resize(this.camera.zoom, this.canvas.clientHeight),
        this.renderer.render(this.obj3d, this.camera),
        this.activeSketch)
            for (kh = this.activeSketch.dimGroup.children,
            Hh = this.activeSketch.obj3d.matrix,
            zh = 1; zh < kh.length; zh += 2)
                Bh = kh[zh],
                Gh = ml.set(...Bh.geometry.attributes.position.array).applyMatrix4(Hh).project(this.camera),
                Uh = (.5 * Gh.x + .5) * this.canvas.clientWidth + 10 + this.rect.left,
                Fh = (-.5 * Gh.y + .5) * this.canvas.clientHeight + this.rect.top,
                Bh.label.style.transform = `translate(0%, -50%) translate(${Uh}px,${Fh}px)`
    }
    function Wh() {
        let t;
        if (3 == this.selected.length && this.selected.every((t=>"selpoint" == t.userData.type)))
            t = new lh(this),
            this.obj3d.add(t.obj3d),
            t.align(...this.selected.map((t=>new G(...t.geometry.attributes.position.array).applyMatrix4(t.matrixWorld))));
        else {
            if (!this.selected.length || "plane" != this.selected[0].userData.type)
                return;
            t = new lh(this),
            t.obj3d.matrix = this.selected[0].matrix,
            t.plane.applyMatrix4(t.obj3d.matrix),
            t.obj3d.inverse = t.obj3d.matrix.clone().invert(),
            this.obj3d.add(t.obj3d)
        }
        return this.newSketch = !0,
        this.clearSelection(),
        t.obj3d.addEventListener("change", this.render),
        t
    }
    window.sce = new class {
        constructor(t) {
            this.sid = 1,
            this.mid = 1,
            this.canvas = document.querySelector("#c"),
            this.rect = this.canvas.getBoundingClientRect().toJSON(),
            this.renderer = new cl({
                canvas: this.canvas
            }),
            this.store = t;
            this.camera = new Yi(-1,1,1,-1,-1,1e3),
            this.camera.zoom = .008;
            const e = 30 * Math.PI / 180;
            this.camera.position.set(500 * Math.sin(e), 500 * Math.tan(30 * Math.PI / 180), 500 * Math.cos(e)),
            this.camera.layers.enable(3),
            this.controls = new bh(this.camera,this.canvas),
            this.controls.target.set(0, 0, 0),
            this.controls.update(),
            this.obj3d = new er;
            const n = new Ft;
            n.name = "helpers",
            this.obj3d.add(n);
            for (let t = 0; t < 4; t++) {
                const t = new In((new Fe).setAttribute("position", new lt(3,3)),Sl.clone());
                t.matrixAutoUpdate = !1,
                t.visible = !1,
                t.renderOrder = 1,
                t.userData.type = "selpoint",
                n.add(t)
            }
            this.selpoints = this.obj3d.children[0].children,
            this.fptIdx = 0,
            this.fptObj = {};
            const i = new Vs(50,50)
              , r = new nn(i,new Ae({
                color: gl.plane,
                opacity: .02,
                side: 2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            }));
            r.add(new Xn(new ls(i),new zn({
                color: gl.planeBorder
            }))),
            r.userData.type = "plane",
            r.layers.enable(1),
            r.children[0].layers.disable(1);
            const s = r.clone().rotateY(Math.PI / 2)
              , a = r.clone().rotateX(-Math.PI / 2);
            n.add(r),
            [a, s].forEach((t=>{
                t.traverse((t=>t.material = t.material.clone())),
                n.add(t)
            }
            )),
            this.axes = new _h(this.camera.zoom),
            this.axes.visible = !1,
            n.add(this.axes);
            const o = new qi(gl.lighting,.5);
            o.position.set(500, 1e3, 1500),
            n.add(o);
            const l = new qi(gl.lighting,.5);
            l.position.set(-500, -1e3, -1500),
            n.add(l),
            this.render = Vh.bind(this),
            this.addSketch = Wh.bind(this),
            this.onHover = Jc.bind(this),
            this.onPick = Kc.bind(this),
            this.clearSelection = th.bind(this),
            this.setHover = Ml.bind(this),
            this.awaitSelection = wl.bind(this),
            this.extrude = this.extrude.bind(this),
            this.obj3d.addEventListener("change", this.render),
            this.controls.addEventListener("change", this.render),
            this.controls.addEventListener("start", this.render),
            window.addEventListener("resize", this.render),
            this.hovered = [],
            this.activeSketch = null,
            this.selected = [],
            this.mode = "",
            this.store.subscribe(this.reduxCallback.bind(this)),
            this.render()
        }
        reduxCallback() {
            const t = this.store.getState().ui.selectedList
              , e = this.store.getState().ui.mode;
            t !== this.selected && (this.selected = t),
            e !== this.mode && (this.mode = e)
        }
        resizeCanvas(t) {
            const e = t.domElement
              , n = e.clientWidth
              , i = e.clientHeight
              , r = e.width !== n || e.height !== i;
            return r && t.setSize(n, i, !1),
            r
        }
        clearScene() {
            const t = this.obj3d.children.splice(1);
            for (let e = 0; e < t.length; e++)
                t[e].traverse((t=>{
                    t.geometry && t.geometry.dispose(),
                    t.material && t.material.dispose()
                }
                ))
        }
        newPart() {
            this.clearScene(),
            window.id = 0,
            this.sid = 1,
            this.mid = 1
        }
        loadState(t) {
            this.clearScene();
            const [e,n,i,r] = JSON.parse(t);
            window.id = e,
            this.sid = n,
            this.mid = i;
            const s = r.byId;
            for (let t in s)
                "s" == t[0] ? (s[t].obj3d = loader.parse(s[t].obj3d),
                this.obj3d.add(s[t].obj3d),
                s[t] = new lh(this,s[t]),
                s[t].obj3d.addEventListener("change", this.render)) : "e" == t[0] ? (s[t] = loader.parse(r.byId[t]),
                s[t].userData.inverted && fh(s[t].geometry),
                this.obj3d.add(s[t])) : (s[t] = loader.parse(r.byId[t]),
                this.obj3d.add(s[t]));
            return r
        }
        loadSketch(t) {
            let e = JSON.parse(t);
            return e.obj3d = loader.parse(e.obj3d),
            e = new lh(this,e),
            e.obj3d.addEventListener("change", this.render),
            e
        }
        extrude(t, e) {
            const n = mh(t, e);
            return n.name = "e" + this.mid++,
            this.obj3d.add(n),
            n
        }
        boolOp(t, e, n) {
            let i, r, s = Ih.fromMesh(t), a = Ih.fromMesh(e);
            switch (t.visible = !1,
            e.visible = !1,
            t.traverse((t=>t.layers.disable(1))),
            e.traverse((t=>t.layers.disable(1))),
            n) {
            case "s":
                i = s.subtract(a),
                r = "-";
                break;
            case "u":
                i = s.union(a),
                r = "∪";
                break;
            case "i":
                i = s.intersect(a),
                r = "∩"
            }
            let o = Ih.toMesh(i, t.matrix, t.material);
            o.userData.type = "mesh",
            o.userData.featureInfo = [t.name, e.name, n],
            o.name = `(${t.name} ${r} ${e.name})`,
            o.layers.enable(1);
            const l = new In(o.geometry,new Rn);
            return l.visible = !1,
            l.userData.type = "point",
            l.layers.enable(1),
            o.add(l),
            o
        }
        refreshNode(t, {byId: e, tree: n}) {
            let i, r = [t], s = 0;
            for (; s < r.length; ) {
                if (i = r[s++],
                e[i].userData) {
                    const t = e[i].userData.featureInfo;
                    let n;
                    2 == t.length ? n = mh(e[t[0]], t[1]) : 3 == t.length && (n = this.boolOp(e[t[0]], e[t[1]], t[2])),
                    e[i].geometry.copy(n.geometry),
                    e[i].geometry.parameters = n.geometry.parameters,
                    e[i].userData.inverted = n.userData.inverted
                }
                for (let t in n[i])
                    r.push(t)
            }
        }
    }
    (store)
}
)();
