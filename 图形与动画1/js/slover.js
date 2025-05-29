var key, Module = void 0 !== Module ? Module : {}, moduleOverrides = {};
for (key in Module)
    Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
var arguments_ = []
  , thisProgram = "./this.program"
  , quit_ = function(e, t) {
    throw t
}
  , ENVIRONMENT_IS_WEB = !1
  , ENVIRONMENT_IS_WORKER = !1
  , ENVIRONMENT_IS_NODE = !1
  , ENVIRONMENT_IS_SHELL = !1;
if (ENVIRONMENT_IS_WEB = "object" == typeof window,
ENVIRONMENT_IS_WORKER = "function" == typeof importScripts,
ENVIRONMENT_IS_NODE = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER,
Module.ENVIRONMENT)
    throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
var read_, readAsync, readBinary, setWindowTitle, nodeFS, nodePath, scriptDirectory = "";
function locateFile(e) {
    return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e
}
if (ENVIRONMENT_IS_NODE)
    scriptDirectory = ENVIRONMENT_IS_WORKER ? require("path").dirname(scriptDirectory) + "/" : __dirname + "/",
    read_ = function(e, t) {
        return nodeFS || (nodeFS = require("fs")),
        nodePath || (nodePath = require("path")),
        e = nodePath.normalize(e),
        nodeFS.readFileSync(e, t ? null : "utf8")
    }
    ,
    readBinary = function(e) {
        var t = read_(e, !0);
        return t.buffer || (t = new Uint8Array(t)),
        assert(t.buffer),
        t
    }
    ,
    process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")),
    arguments_ = process.argv.slice(2),
    "undefined" != typeof module && (module.exports = Module),
    process.on("uncaughtException", (function(e) {
        if (!(e instanceof ExitStatus))
            throw e
    }
    )),
    process.on("unhandledRejection", abort),
    quit_ = function(e) {
        process.exit(e)
    }
    ,
    Module.inspect = function() {
        return "[Emscripten Module object]"
    }
    ;
else if (ENVIRONMENT_IS_SHELL)
    "undefined" != typeof read && (read_ = function(e) {
        return read(e)
    }
    ),
    readBinary = function(e) {
        var t;
        return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (assert("object" == typeof (t = read(e, "binary"))),
        t)
    }
    ,
    "undefined" != typeof scriptArgs ? arguments_ = scriptArgs : "undefined" != typeof arguments && (arguments_ = arguments),
    "function" == typeof quit && (quit_ = function(e) {
        quit(e)
    }
    ),
    "undefined" != typeof print && ("undefined" == typeof console && (console = {}),
    console.log = print,
    console.warn = console.error = "undefined" != typeof printErr ? printErr : print);
else {
    if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER)
        throw new Error("environment detection error");
    ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : "undefined" != typeof document && document.currentScript && (scriptDirectory = document.currentScript.src),
    scriptDirectory = 0 !== scriptDirectory.indexOf("blob:") ? scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1) : "",
    read_ = function(e) {
        var t = new XMLHttpRequest;
        return t.open("GET", e, !1),
        t.send(null),
        t.responseText
    }
    ,
    ENVIRONMENT_IS_WORKER && (readBinary = function(e) {
        var t = new XMLHttpRequest;
        return t.open("GET", e, !1),
        t.responseType = "arraybuffer",
        t.send(null),
        new Uint8Array(t.response)
    }
    ),
    readAsync = function(e, t, o) {
        var r = new XMLHttpRequest;
        r.open("GET", e, !0),
        r.responseType = "arraybuffer",
        r.onload = function() {
            200 == r.status || 0 == r.status && r.response ? t(r.response) : o()
        }
        ,
        r.onerror = o,
        r.send(null)
    }
    ,
    setWindowTitle = function(e) {
        document.title = e
    }
}
var out = Module.print || console.log.bind(console)
  , err = Module.printErr || console.warn.bind(console);
for (key in moduleOverrides)
    moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
moduleOverrides = null,
Module.arguments && (arguments_ = Module.arguments),
Object.getOwnPropertyDescriptor(Module, "arguments") || Object.defineProperty(Module, "arguments", {
    configurable: !0,
    get: function() {
        abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
Module.thisProgram && (thisProgram = Module.thisProgram),
Object.getOwnPropertyDescriptor(Module, "thisProgram") || Object.defineProperty(Module, "thisProgram", {
    configurable: !0,
    get: function() {
        abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
Module.quit && (quit_ = Module.quit),
Object.getOwnPropertyDescriptor(Module, "quit") || Object.defineProperty(Module, "quit", {
    configurable: !0,
    get: function() {
        abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
assert(void 0 === Module.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),
assert(void 0 === Module.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),
assert(void 0 === Module.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),
assert(void 0 === Module.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),
assert(void 0 === Module.read, "Module.read option was removed (modify read_ in JS)"),
assert(void 0 === Module.readAsync, "Module.readAsync option was removed (modify readAsync in JS)"),
assert(void 0 === Module.readBinary, "Module.readBinary option was removed (modify readBinary in JS)"),
assert(void 0 === Module.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),
assert(void 0 === Module.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),
Object.getOwnPropertyDescriptor(Module, "read") || Object.defineProperty(Module, "read", {
    configurable: !0,
    get: function() {
        abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
Object.getOwnPropertyDescriptor(Module, "readAsync") || Object.defineProperty(Module, "readAsync", {
    configurable: !0,
    get: function() {
        abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
Object.getOwnPropertyDescriptor(Module, "readBinary") || Object.defineProperty(Module, "readBinary", {
    configurable: !0,
    get: function() {
        abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
Object.getOwnPropertyDescriptor(Module, "setWindowTitle") || Object.defineProperty(Module, "setWindowTitle", {
    configurable: !0,
    get: function() {
        abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
});
var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js"
  , PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js"
  , WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js"
  , NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js"
  , STACK_ALIGN = 16;
function alignMemory(e, t) {
    return t || (t = STACK_ALIGN),
    Math.ceil(e / t) * t
}
function getNativeTypeSize(e) {
    switch (e) {
    case "i1":
    case "i8":
        return 1;
    case "i16":
        return 2;
    case "i32":
        return 4;
    case "i64":
        return 8;
    case "float":
        return 4;
    case "double":
        return 8;
    default:
        if ("*" === e[e.length - 1])
            return 4;
        if ("i" === e[0]) {
            var t = Number(e.substr(1));
            return assert(t % 8 == 0, "getNativeTypeSize invalid bits " + t + ", type " + e),
            t / 8
        }
        return 0
    }
}
function warnOnce(e) {
    warnOnce.shown || (warnOnce.shown = {}),
    warnOnce.shown[e] || (warnOnce.shown[e] = 1,
    err(e))
}
function convertJsFunctionToWasm(e, t) {
    if ("function" == typeof WebAssembly.Function) {
        for (var o = {
            i: "i32",
            j: "i64",
            f: "f32",
            d: "f64"
        }, r = {
            parameters: [],
            results: "v" == t[0] ? [] : [o[t[0]]]
        }, n = 1; n < t.length; ++n)
            r.parameters.push(o[t[n]]);
        return new WebAssembly.Function(r,e)
    }
    var a = [1, 0, 1, 96]
      , i = t.slice(0, 1)
      , s = t.slice(1)
      , d = {
        i: 127,
        j: 126,
        f: 125,
        d: 124
    };
    a.push(s.length);
    for (n = 0; n < s.length; ++n)
        a.push(d[s[n]]);
    "v" == i ? a.push(0) : a = a.concat([1, d[i]]),
    a[1] = a.length - 2;
    var c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(a, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]))
      , l = new WebAssembly.Module(c);
    return new WebAssembly.Instance(l,{
        e: {
            f: e
        }
    }).exports.f
}
var functionsInTableMap, freeTableIndexes = [];
function getEmptyTableSlot() {
    if (freeTableIndexes.length)
        return freeTableIndexes.pop();
    try {
        wasmTable.grow(1)
    } catch (e) {
        if (!(e instanceof RangeError))
            throw e;
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
    }
    return wasmTable.length - 1
}
function addFunctionWasm(e, t) {
    if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap;
        for (var o = 0; o < wasmTable.length; o++) {
            var r = wasmTable.get(o);
            r && functionsInTableMap.set(r, o)
        }
    }
    if (functionsInTableMap.has(e))
        return functionsInTableMap.get(e);
    var n = getEmptyTableSlot();
    try {
        wasmTable.set(n, e)
    } catch (o) {
        if (!(o instanceof TypeError))
            throw o;
        assert(void 0 !== t, "Missing signature argument to addFunction: " + e);
        var a = convertJsFunctionToWasm(e, t);
        wasmTable.set(n, a)
    }
    return functionsInTableMap.set(e, n),
    n
}
function removeFunction(e) {
    functionsInTableMap.delete(wasmTable.get(e)),
    freeTableIndexes.push(e)
}
function addFunction(e, t) {
    return assert(void 0 !== e),
    addFunctionWasm(e, t)
}
function makeBigInt(e, t, o) {
    return o ? +(e >>> 0) + 4294967296 * +(t >>> 0) : +(e >>> 0) + 4294967296 * +(0 | t)
}
var wasmBinary, tempRet0 = 0, setTempRet0 = function(e) {
    tempRet0 = e
}, getTempRet0 = function() {
    return tempRet0
};
function getCompilerSetting(e) {
    throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work"
}
Module.wasmBinary && (wasmBinary = Module.wasmBinary),
Object.getOwnPropertyDescriptor(Module, "wasmBinary") || Object.defineProperty(Module, "wasmBinary", {
    configurable: !0,
    get: function() {
        abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
});
var wasmMemory, noExitRuntime = Module.noExitRuntime || !0;
function setValue(e, t, o, r) {
    switch ("*" === (o = o || "i8").charAt(o.length - 1) && (o = "i32"),
    o) {
    case "i1":
    case "i8":
        HEAP8[e >> 0] = t;
        break;
    case "i16":
        HEAP16[e >> 1] = t;
        break;
    case "i32":
        HEAP32[e >> 2] = t;
        break;
    case "i64":
        tempI64 = [t >>> 0, (tempDouble = t,
        +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (0 | Math.min(+Math.floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[e >> 2] = tempI64[0],
        HEAP32[e + 4 >> 2] = tempI64[1];
        break;
    case "float":
        HEAPF32[e >> 2] = t;
        break;
    case "double":
        HEAPF64[e >> 3] = t;
        break;
    default:
        abort("invalid type for setValue: " + o)
    }
}
function getValue(e, t, o) {
    switch ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"),
    t) {
    case "i1":
    case "i8":
        return HEAP8[e >> 0];
    case "i16":
        return HEAP16[e >> 1];
    case "i32":
    case "i64":
        return HEAP32[e >> 2];
    case "float":
        return HEAPF32[e >> 2];
    case "double":
        return HEAPF64[e >> 3];
    default:
        abort("invalid type for getValue: " + t)
    }
    return null
}
Object.getOwnPropertyDescriptor(Module, "noExitRuntime") || Object.defineProperty(Module, "noExitRuntime", {
    configurable: !0,
    get: function() {
        abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
"object" != typeof WebAssembly && abort("no native wasm support detected");
var EXITSTATUS, ABORT = !1;
function assert(e, t) {
    e || abort("Assertion failed: " + t)
}
function getCFunc(e) {
    var t = Module["_" + e];
    return assert(t, "Cannot call unknown function " + e + ", make sure it is exported"),
    t
}
function ccall(e, t, o, r, n) {
    var a = {
        string: function(e) {
            var t = 0;
            if (null != e && 0 !== e) {
                var o = 1 + (e.length << 2);
                stringToUTF8(e, t = stackAlloc(o), o)
            }
            return t
        },
        array: function(e) {
            var t = stackAlloc(e.length);
            return writeArrayToMemory(e, t),
            t
        }
    };
    var i = getCFunc(e)
      , s = []
      , d = 0;
    if (assert("array" !== t, 'Return type should not be "array".'),
    r)
        for (var c = 0; c < r.length; c++) {
            var l = a[o[c]];
            l ? (0 === d && (d = stackSave()),
            s[c] = l(r[c])) : s[c] = r[c]
        }
    var u = i.apply(null, s);
    return u = function(e) {
        return "string" === t ? UTF8ToString(e) : "boolean" === t ? Boolean(e) : e
    }(u),
    0 !== d && stackRestore(d),
    u
}
function cwrap(e, t, o, r) {
    return function() {
        return ccall(e, t, o, arguments, r)
    }
}
var ALLOC_NORMAL = 0
  , ALLOC_STACK = 1;
function allocate(e, t) {
    var o;
    return assert("number" == typeof t, "allocate no longer takes a type argument"),
    assert("number" != typeof e, "allocate no longer takes a number as arg0"),
    o = t == ALLOC_STACK ? stackAlloc(e.length) : _malloc(e.length),
    e.subarray || e.slice ? HEAPU8.set(e, o) : HEAPU8.set(new Uint8Array(e), o),
    o
}
var UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function UTF8ArrayToString(e, t, o) {
    for (var r = t + o, n = t; e[n] && !(n >= r); )
        ++n;
    if (n - t > 16 && e.subarray && UTF8Decoder)
        return UTF8Decoder.decode(e.subarray(t, n));
    for (var a = ""; t < n; ) {
        var i = e[t++];
        if (128 & i) {
            var s = 63 & e[t++];
            if (192 != (224 & i)) {
                var d = 63 & e[t++];
                if (224 == (240 & i) ? i = (15 & i) << 12 | s << 6 | d : (240 != (248 & i) && warnOnce("Invalid UTF-8 leading byte 0x" + i.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),
                i = (7 & i) << 18 | s << 12 | d << 6 | 63 & e[t++]),
                i < 65536)
                    a += String.fromCharCode(i);
                else {
                    var c = i - 65536;
                    a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                }
            } else
                a += String.fromCharCode((31 & i) << 6 | s)
        } else
            a += String.fromCharCode(i)
    }
    return a
}
function UTF8ToString(e, t) {
    return e ? UTF8ArrayToString(HEAPU8, e, t) : ""
}
function stringToUTF8Array(e, t, o, r) {
    if (!(r > 0))
        return 0;
    for (var n = o, a = o + r - 1, i = 0; i < e.length; ++i) {
        var s = e.charCodeAt(i);
        if (s >= 55296 && s <= 57343)
            s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++i);
        if (s <= 127) {
            if (o >= a)
                break;
            t[o++] = s
        } else if (s <= 2047) {
            if (o + 1 >= a)
                break;
            t[o++] = 192 | s >> 6,
            t[o++] = 128 | 63 & s
        } else if (s <= 65535) {
            if (o + 2 >= a)
                break;
            t[o++] = 224 | s >> 12,
            t[o++] = 128 | s >> 6 & 63,
            t[o++] = 128 | 63 & s
        } else {
            if (o + 3 >= a)
                break;
            s >= 2097152 && warnOnce("Invalid Unicode code point 0x" + s.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF)."),
            t[o++] = 240 | s >> 18,
            t[o++] = 128 | s >> 12 & 63,
            t[o++] = 128 | s >> 6 & 63,
            t[o++] = 128 | 63 & s
        }
    }
    return t[o] = 0,
    o - n
}
function stringToUTF8(e, t, o) {
    return assert("number" == typeof o, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),
    stringToUTF8Array(e, HEAPU8, t, o)
}
function lengthBytesUTF8(e) {
    for (var t = 0, o = 0; o < e.length; ++o) {
        var r = e.charCodeAt(o);
        r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++o)),
        r <= 127 ? ++t : t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4
    }
    return t
}
function AsciiToString(e) {
    for (var t = ""; ; ) {
        var o = HEAPU8[e++ >> 0];
        if (!o)
            return t;
        t += String.fromCharCode(o)
    }
}
function stringToAscii(e, t) {
    return writeAsciiToMemory(e, t, !1)
}
var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64, UTF16Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function UTF16ToString(e, t) {
    assert(e % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
    for (var o = e, r = o >> 1, n = r + t / 2; !(r >= n) && HEAPU16[r]; )
        ++r;
    if ((o = r << 1) - e > 32 && UTF16Decoder)
        return UTF16Decoder.decode(HEAPU8.subarray(e, o));
    for (var a = "", i = 0; !(i >= t / 2); ++i) {
        var s = HEAP16[e + 2 * i >> 1];
        if (0 == s)
            break;
        a += String.fromCharCode(s)
    }
    return a
}
function stringToUTF16(e, t, o) {
    if (assert(t % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"),
    assert("number" == typeof o, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),
    void 0 === o && (o = 2147483647),
    o < 2)
        return 0;
    for (var r = t, n = (o -= 2) < 2 * e.length ? o / 2 : e.length, a = 0; a < n; ++a) {
        var i = e.charCodeAt(a);
        HEAP16[t >> 1] = i,
        t += 2
    }
    return HEAP16[t >> 1] = 0,
    t - r
}
function lengthBytesUTF16(e) {
    return 2 * e.length
}
function UTF32ToString(e, t) {
    assert(e % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
    for (var o = 0, r = ""; !(o >= t / 4); ) {
        var n = HEAP32[e + 4 * o >> 2];
        if (0 == n)
            break;
        if (++o,
        n >= 65536) {
            var a = n - 65536;
            r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
        } else
            r += String.fromCharCode(n)
    }
    return r
}
function stringToUTF32(e, t, o) {
    if (assert(t % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!"),
    assert("number" == typeof o, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),
    void 0 === o && (o = 2147483647),
    o < 4)
        return 0;
    for (var r = t, n = r + o - 4, a = 0; a < e.length; ++a) {
        var i = e.charCodeAt(a);
        if (i >= 55296 && i <= 57343)
            i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++a);
        if (HEAP32[t >> 2] = i,
        (t += 4) + 4 > n)
            break
    }
    return HEAP32[t >> 2] = 0,
    t - r
}
function lengthBytesUTF32(e) {
    for (var t = 0, o = 0; o < e.length; ++o) {
        var r = e.charCodeAt(o);
        r >= 55296 && r <= 57343 && ++o,
        t += 4
    }
    return t
}
function allocateUTF8(e) {
    var t = lengthBytesUTF8(e) + 1
      , o = _malloc(t);
    return o && stringToUTF8Array(e, HEAP8, o, t),
    o
}
function allocateUTF8OnStack(e) {
    var t = lengthBytesUTF8(e) + 1
      , o = stackAlloc(t);
    return stringToUTF8Array(e, HEAP8, o, t),
    o
}
function writeStringToMemory(e, t, o) {
    var r, n;
    warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!"),
    o && (n = t + lengthBytesUTF8(e),
    r = HEAP8[n]),
    stringToUTF8(e, t, 1 / 0),
    o && (HEAP8[n] = r)
}
function writeArrayToMemory(e, t) {
    assert(e.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"),
    HEAP8.set(e, t)
}
function writeAsciiToMemory(e, t, o) {
    for (var r = 0; r < e.length; ++r)
        assert(e.charCodeAt(r) == e.charCodeAt(r) & 255),
        HEAP8[t++ >> 0] = e.charCodeAt(r);
    o || (HEAP8[t >> 0] = 0)
}
function alignUp(e, t) {
    return e % t > 0 && (e += t - e % t),
    e
}
function updateGlobalBufferAndViews(e) {
    buffer = e,
    Module.HEAP8 = HEAP8 = new Int8Array(e),
    Module.HEAP16 = HEAP16 = new Int16Array(e),
    Module.HEAP32 = HEAP32 = new Int32Array(e),
    Module.HEAPU8 = HEAPU8 = new Uint8Array(e),
    Module.HEAPU16 = HEAPU16 = new Uint16Array(e),
    Module.HEAPU32 = HEAPU32 = new Uint32Array(e),
    Module.HEAPF32 = HEAPF32 = new Float32Array(e),
    Module.HEAPF64 = HEAPF64 = new Float64Array(e)
}
var TOTAL_STACK = 5242880;
Module.TOTAL_STACK && assert(TOTAL_STACK === Module.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var wasmTable, INITIAL_MEMORY = Module.INITIAL_MEMORY || 134217728;
function writeStackCookie() {
    var e = _emscripten_stack_get_end();
    assert(0 == (3 & e)),
    HEAPU32[1 + (e >> 2)] = 34821223,
    HEAPU32[2 + (e >> 2)] = 2310721022,
    HEAP32[0] = 1668509029
}
function checkStackCookie() {
    if (!ABORT) {
        var e = _emscripten_stack_get_end()
          , t = HEAPU32[1 + (e >> 2)]
          , o = HEAPU32[2 + (e >> 2)];
        34821223 == t && 2310721022 == o || abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + o.toString(16) + " " + t.toString(16)),
        1668509029 !== HEAP32[0] && abort("Runtime error: The application has corrupted its heap memory area (address zero)!")
    }
}
function abortFnPtrError(e, t) {
    abort("Invalid function pointer " + e + " called with signature '" + t + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.")
}
Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY") || Object.defineProperty(Module, "INITIAL_MEMORY", {
    configurable: !0,
    get: function() {
        abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}),
assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")"),
assert("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support"),
assert(!Module.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally"),
assert(134217728 == INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically"),
function() {
    var e = new Int16Array(1)
      , t = new Int8Array(e.buffer);
    if (e[0] = 25459,
    115 !== t[0] || 99 !== t[1])
        throw "Runtime error: expected the system to be little-endian!"
}();
var __ATPRERUN__ = []
  , __ATINIT__ = []
  , __ATMAIN__ = []
  , __ATEXIT__ = []
  , __ATPOSTRUN__ = []
  , runtimeInitialized = !1
  , runtimeExited = !1;
function preRun() {
    if (Module.preRun)
        for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length; )
            addOnPreRun(Module.preRun.shift());
    callRuntimeCallbacks(__ATPRERUN__)
}
function initRuntime() {
    checkStackCookie(),
    assert(!runtimeInitialized),
    runtimeInitialized = !0,
    callRuntimeCallbacks(__ATINIT__)
}
function preMain() {
    checkStackCookie(),
    callRuntimeCallbacks(__ATMAIN__)
}
function exitRuntime() {
    checkStackCookie(),
    runtimeExited = !0
}
function postRun() {
    if (checkStackCookie(),
    Module.postRun)
        for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length; )
            addOnPostRun(Module.postRun.shift());
    callRuntimeCallbacks(__ATPOSTRUN__)
}
function addOnPreRun(e) {
    __ATPRERUN__.unshift(e)
}
function addOnInit(e) {
    __ATINIT__.unshift(e)
}
function addOnPreMain(e) {
    __ATMAIN__.unshift(e)
}
function addOnExit(e) {}
function addOnPostRun(e) {
    __ATPOSTRUN__.unshift(e)
}
__ATINIT__.push({
    func: function() {
        ___wasm_call_ctors()
    }
}),
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var runDependencies = 0
  , runDependencyWatcher = null
  , dependenciesFulfilled = null
  , runDependencyTracking = {};
function getUniqueRunDependency(e) {
    for (var t = e; ; ) {
        if (!runDependencyTracking[e])
            return e;
        e = t + Math.random()
    }
}
function addRunDependency(e) {
    runDependencies++,
    Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies),
    e ? (assert(!runDependencyTracking[e]),
    runDependencyTracking[e] = 1,
    null === runDependencyWatcher && "undefined" != typeof setInterval && (runDependencyWatcher = setInterval((function() {
        if (ABORT)
            return clearInterval(runDependencyWatcher),
            void (runDependencyWatcher = null);
        var e = !1;
        for (var t in runDependencyTracking)
            e || (e = !0,
            err("still waiting on run dependencies:")),
            err("dependency: " + t);
        e && err("(end of list)")
    }
    ), 1e4))) : err("warning: run dependency added without ID")
}
function removeRunDependency(e) {
    if (runDependencies--,
    Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies),
    e ? (assert(runDependencyTracking[e]),
    delete runDependencyTracking[e]) : err("warning: run dependency removed without ID"),
    0 == runDependencies && (null !== runDependencyWatcher && (clearInterval(runDependencyWatcher),
    runDependencyWatcher = null),
    dependenciesFulfilled)) {
        var t = dependenciesFulfilled;
        dependenciesFulfilled = null,
        t()
    }
}
function abort(e) {
    throw Module.onAbort && Module.onAbort(e),
    err(e += ""),
    ABORT = !0,
    EXITSTATUS = 1,
    e = "abort(" + e + ") at " + stackTrace(),
    new WebAssembly.RuntimeError(e)
}
Module.preloadedImages = {},
Module.preloadedAudios = {};
var FS = {
    error: function() {
        abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")
    },
    init: function() {
        FS.error()
    },
    createDataFile: function() {
        FS.error()
    },
    createPreloadedFile: function() {
        FS.error()
    },
    createLazyFile: function() {
        FS.error()
    },
    open: function() {
        FS.error()
    },
    mkdev: function() {
        FS.error()
    },
    registerDevice: function() {
        FS.error()
    },
    analyzePath: function() {
        FS.error()
    },
    loadFilesFromDB: function() {
        FS.error()
    },
    ErrnoError: function() {
        FS.error()
    }
};
function hasPrefix(e, t) {
    return String.prototype.startsWith ? e.startsWith(t) : 0 === e.indexOf(t)
}
Module.FS_createDataFile = FS.createDataFile,
Module.FS_createPreloadedFile = FS.createPreloadedFile;
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(e) {
    return hasPrefix(e, dataURIPrefix)
}
var fileURIPrefix = "file://";
function isFileURI(e) {
    return hasPrefix(e, fileURIPrefix)
}
function createExportWrapper(e, t) {
    return function() {
        var o = e
          , r = t;
        return t || (r = Module.asm),
        assert(runtimeInitialized, "native function `" + o + "` called before runtime initialization"),
        assert(!runtimeExited, "native function `" + o + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),
        r[e] || assert(r[e], "exported native function `" + o + "` not found"),
        r[e].apply(null, arguments)
    }
}
var tempDouble, tempI64, wasmBinaryFile = "solver.wasm";
function getBinary(e) {
    try {
        if (e == wasmBinaryFile && wasmBinary)
            return new Uint8Array(wasmBinary);
        if (readBinary)
            return readBinary(e);
        throw "both async and sync fetching of the wasm failed"
    } catch (e) {
        abort(e)
    }
}
function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if ("function" == typeof fetch && !isFileURI(wasmBinaryFile))
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then((function(e) {
                if (!e.ok)
                    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                return e.arrayBuffer()
            }
            )).catch((function() {
                return getBinary(wasmBinaryFile)
            }
            ));
        if (readAsync)
            return new Promise((function(e, t) {
                readAsync(wasmBinaryFile, (function(t) {
                    e(new Uint8Array(t))
                }
                ), t)
            }
            ))
    }
    return Promise.resolve().then((function() {
        return getBinary(wasmBinaryFile)
    }
    ))
}
function createWasm() {
    var e = {
        env: asmLibraryArg,
        wasi_snapshot_preview1: asmLibraryArg
    };
    function t(e, t) {
        var o = e.exports;
        Module.asm = o,
        assert(wasmMemory = Module.asm.memory, "memory not found in wasm exports"),
        updateGlobalBufferAndViews(wasmMemory.buffer),
        assert(wasmTable = Module.asm.__indirect_function_table, "table not found in wasm exports"),
        removeRunDependency("wasm-instantiate")
    }
    addRunDependency("wasm-instantiate");
    var o = Module;
    function r(e) {
        assert(Module === o, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),
        o = null,
        t(e.instance)
    }
    function n(t) {
        return getBinaryPromise().then((function(t) {
            return WebAssembly.instantiate(t, e)
        }
        )).then(t, (function(e) {
            err("failed to asynchronously prepare wasm: " + e),
            isFileURI(wasmBinaryFile) && err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),
            abort(e)
        }
        ))
    }
    if (Module.instantiateWasm)
        try {
            return Module.instantiateWasm(e, t)
        } catch (e) {
            return err("Module.instantiateWasm callback failed with error: " + e),
            !1
        }
    return wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || isDataURI(wasmBinaryFile) || isFileURI(wasmBinaryFile) || "function" != typeof fetch ? n(r) : fetch(wasmBinaryFile, {
        credentials: "same-origin"
    }).then((function(t) {
        return WebAssembly.instantiateStreaming(t, e).then(r, (function(e) {
            return err("wasm streaming compile failed: " + e),
            err("falling back to ArrayBuffer instantiation"),
            n(r)
        }
        ))
    }
    )),
    {}
}
isDataURI(wasmBinaryFile) || (wasmBinaryFile = locateFile(wasmBinaryFile));
var ASM_CONSTS = {};
function callRuntimeCallbacks(e) {
    for (; e.length > 0; ) {
        var t = e.shift();
        if ("function" != typeof t) {
            var o = t.func;
            "number" == typeof o ? void 0 === t.arg ? wasmTable.get(o)() : wasmTable.get(o)(t.arg) : o(void 0 === t.arg ? null : t.arg)
        } else
            t(Module)
    }
}
function demangle(e) {
    return warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),
    e
}
function demangleAll(e) {
    return e.replace(/\b_Z[\w\d_]+/g, (function(e) {
        var t = demangle(e);
        return e === t ? e : t + " [" + e + "]"
    }
    ))
}
function jsStackTrace() {
    var e = new Error;
    if (!e.stack) {
        try {
            throw new Error
        } catch (t) {
            e = t
        }
        if (!e.stack)
            return "(no stack trace available)"
    }
    return e.stack.toString()
}
function stackTrace() {
    var e = jsStackTrace();
    return Module.extraStackTrace && (e += "\n" + Module.extraStackTrace()),
    demangleAll(e)
}
var ExceptionInfoAttrs = {
    DESTRUCTOR_OFFSET: 0,
    REFCOUNT_OFFSET: 4,
    TYPE_OFFSET: 8,
    CAUGHT_OFFSET: 12,
    RETHROWN_OFFSET: 13,
    SIZE: 16
};
function ___cxa_allocate_exception(e) {
    return _malloc(e + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE
}
function _atexit(e, t) {}
function ___cxa_atexit(e, t) {
    return _atexit(e, t)
}
function ExceptionInfo(e) {
    this.excPtr = e,
    this.ptr = e - ExceptionInfoAttrs.SIZE,
    this.set_type = function(e) {
        HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2] = e
    }
    ,
    this.get_type = function() {
        return HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2]
    }
    ,
    this.set_destructor = function(e) {
        HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2] = e
    }
    ,
    this.get_destructor = function() {
        return HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2]
    }
    ,
    this.set_refcount = function(e) {
        HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = e
    }
    ,
    this.set_caught = function(e) {
        e = e ? 1 : 0,
        HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] = e
    }
    ,
    this.get_caught = function() {
        return 0 != HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0]
    }
    ,
    this.set_rethrown = function(e) {
        e = e ? 1 : 0,
        HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] = e
    }
    ,
    this.get_rethrown = function() {
        return 0 != HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0]
    }
    ,
    this.init = function(e, t) {
        this.set_type(e),
        this.set_destructor(t),
        this.set_refcount(0),
        this.set_caught(!1),
        this.set_rethrown(!1)
    }
    ,
    this.add_ref = function() {
        var e = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
        HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = e + 1
    }
    ,
    this.release_ref = function() {
        var e = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
        return HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = e - 1,
        assert(e > 0),
        1 === e
    }
}
var exceptionLast = 0
  , uncaughtExceptionCount = 0;
function ___cxa_throw(e, t, o) {
    throw new ExceptionInfo(e).init(t, o),
    exceptionLast = e,
    uncaughtExceptionCount++,
    e + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
}
function _abort() {
    abort()
}
function _emscripten_memcpy_big(e, t, o) {
    HEAPU8.copyWithin(e, t, t + o)
}
function _emscripten_get_heap_size() {
    return HEAPU8.length
}
function abortOnCannotGrowMemory(e) {
    abort("Cannot enlarge memory arrays to size " + e + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + HEAP8.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
}
function _emscripten_resize_heap(e) {
    abortOnCannotGrowMemory(e)
}
function _exit(e) {
    exit(e)
}
var SYSCALLS = {
    mappings: {},
    buffers: [null, [], []],
    printChar: function(e, t) {
        var o = SYSCALLS.buffers[e];
        assert(o),
        0 === t || 10 === t ? ((1 === e ? out : err)(UTF8ArrayToString(o, 0)),
        o.length = 0) : o.push(t)
    },
    varargs: void 0,
    get: function() {
        return assert(null != SYSCALLS.varargs),
        SYSCALLS.varargs += 4,
        HEAP32[SYSCALLS.varargs - 4 >> 2]
    },
    getStr: function(e) {
        return UTF8ToString(e)
    },
    get64: function(e, t) {
        return assert(e >= 0 ? 0 === t : -1 === t),
        e
    }
};
function _fd_close(e) {
    return abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM"),
    0
}
function _fd_seek(e, t, o, r, n) {
    abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
}
function flush_NO_FILESYSTEM() {
    void 0 !== _fflush && _fflush(0);
    var e = SYSCALLS.buffers;
    e[1].length && SYSCALLS.printChar(1, 10),
    e[2].length && SYSCALLS.printChar(2, 10)
}
function _fd_write(e, t, o, r) {
    for (var n = 0, a = 0; a < o; a++) {
        for (var i = HEAP32[t + 8 * a >> 2], s = HEAP32[t + (8 * a + 4) >> 2], d = 0; d < s; d++)
            SYSCALLS.printChar(e, HEAPU8[i + d]);
        n += s
    }
    return HEAP32[r >> 2] = n,
    0
}
function _setTempRet0(e) {
    setTempRet0(0 | e)
}
var ASSERTIONS = !0;
function intArrayFromString(e, t, o) {
    var r = o > 0 ? o : lengthBytesUTF8(e) + 1
      , n = new Array(r)
      , a = stringToUTF8Array(e, n, 0, n.length);
    return t && (n.length = a),
    n
}
function intArrayToString(e) {
    for (var t = [], o = 0; o < e.length; o++) {
        var r = e[o];
        r > 255 && (ASSERTIONS && assert(!1, "Character code " + r + " (" + String.fromCharCode(r) + ")  at offset " + o + " not in 0x00-0xFF."),
        r &= 255),
        t.push(String.fromCharCode(r))
    }
    return t.join("")
}
var calledRun, asmLibraryArg = {
    __cxa_allocate_exception: ___cxa_allocate_exception,
    __cxa_atexit: ___cxa_atexit,
    __cxa_throw: ___cxa_throw,
    abort: _abort,
    emscripten_memcpy_big: _emscripten_memcpy_big,
    emscripten_resize_heap: _emscripten_resize_heap,
    exit: _exit,
    fd_close: _fd_close,
    fd_seek: _fd_seek,
    fd_write: _fd_write,
    setTempRet0: _setTempRet0
}, asm = createWasm(), ___wasm_call_ctors = Module.___wasm_call_ctors = createExportWrapper("__wasm_call_ctors"), _solver = Module._solver = createExportWrapper("solver"), _main = Module._main = createExportWrapper("main"), _malloc = Module._malloc = createExportWrapper("malloc"), _free = Module._free = createExportWrapper("free"), ___errno_location = Module.___errno_location = createExportWrapper("__errno_location"), _fflush = Module._fflush = createExportWrapper("fflush"), stackSave = Module.stackSave = createExportWrapper("stackSave"), stackRestore = Module.stackRestore = createExportWrapper("stackRestore"), stackAlloc = Module.stackAlloc = createExportWrapper("stackAlloc"), _emscripten_stack_init = Module._emscripten_stack_init = function() {
    return (_emscripten_stack_init = Module._emscripten_stack_init = Module.asm.emscripten_stack_init).apply(null, arguments)
}
, _emscripten_stack_get_free = Module._emscripten_stack_get_free = function() {
    return (_emscripten_stack_get_free = Module._emscripten_stack_get_free = Module.asm.emscripten_stack_get_free).apply(null, arguments)
}
, _emscripten_stack_get_end = Module._emscripten_stack_get_end = function() {
    return (_emscripten_stack_get_end = Module._emscripten_stack_get_end = Module.asm.emscripten_stack_get_end).apply(null, arguments)
}
, dynCall_jiji = Module.dynCall_jiji = createExportWrapper("dynCall_jiji");
function ExitStatus(e) {
    this.name = "ExitStatus",
    this.message = "Program terminated with exit(" + e + ")",
    this.status = e
}
Object.getOwnPropertyDescriptor(Module, "intArrayFromString") || (Module.intArrayFromString = function() {
    abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "intArrayToString") || (Module.intArrayToString = function() {
    abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ccall") || (Module.ccall = function() {
    abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "cwrap") || (Module.cwrap = function() {
    abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setValue") || (Module.setValue = function() {
    abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getValue") || (Module.getValue = function() {
    abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "allocate") || (Module.allocate = function() {
    abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString") || (Module.UTF8ArrayToString = function() {
    abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "UTF8ToString") || (Module.UTF8ToString = function() {
    abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array") || (Module.stringToUTF8Array = function() {
    abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToUTF8") || (Module.stringToUTF8 = function() {
    abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8") || (Module.lengthBytesUTF8 = function() {
    abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stackTrace") || (Module.stackTrace = function() {
    abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addOnPreRun") || (Module.addOnPreRun = function() {
    abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addOnInit") || (Module.addOnInit = function() {
    abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addOnPreMain") || (Module.addOnPreMain = function() {
    abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addOnExit") || (Module.addOnExit = function() {
    abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addOnPostRun") || (Module.addOnPostRun = function() {
    abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeStringToMemory") || (Module.writeStringToMemory = function() {
    abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory") || (Module.writeArrayToMemory = function() {
    abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory") || (Module.writeAsciiToMemory = function() {
    abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addRunDependency") || (Module.addRunDependency = function() {
    abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "removeRunDependency") || (Module.removeRunDependency = function() {
    abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createFolder") || (Module.FS_createFolder = function() {
    abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createPath") || (Module.FS_createPath = function() {
    abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createDataFile") || (Module.FS_createDataFile = function() {
    abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile") || (Module.FS_createPreloadedFile = function() {
    abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile") || (Module.FS_createLazyFile = function() {
    abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createLink") || (Module.FS_createLink = function() {
    abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_createDevice") || (Module.FS_createDevice = function() {
    abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "FS_unlink") || (Module.FS_unlink = function() {
    abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
}
),
Object.getOwnPropertyDescriptor(Module, "getLEB") || (Module.getLEB = function() {
    abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getFunctionTables") || (Module.getFunctionTables = function() {
    abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "alignFunctionTables") || (Module.alignFunctionTables = function() {
    abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerFunctions") || (Module.registerFunctions = function() {
    abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "addFunction") || (Module.addFunction = function() {
    abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "removeFunction") || (Module.removeFunction = function() {
    abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getFuncWrapper") || (Module.getFuncWrapper = function() {
    abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "prettyPrint") || (Module.prettyPrint = function() {
    abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "makeBigInt") || (Module.makeBigInt = function() {
    abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "dynCall") || (Module.dynCall = function() {
    abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getCompilerSetting") || (Module.getCompilerSetting = function() {
    abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "print") || (Module.print = function() {
    abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "printErr") || (Module.printErr = function() {
    abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getTempRet0") || (Module.getTempRet0 = function() {
    abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setTempRet0") || (Module.setTempRet0 = function() {
    abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "callMain") || (Module.callMain = function() {
    abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "abort") || (Module.abort = function() {
    abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8") || (Module.stringToNewUTF8 = function() {
    abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setFileTime") || (Module.setFileTime = function() {
    abort("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory") || (Module.abortOnCannotGrowMemory = function() {
    abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer") || (Module.emscripten_realloc_buffer = function() {
    abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ENV") || (Module.ENV = function() {
    abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES") || (Module.ERRNO_CODES = function() {
    abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES") || (Module.ERRNO_MESSAGES = function() {
    abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setErrNo") || (Module.setErrNo = function() {
    abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "inetPton4") || (Module.inetPton4 = function() {
    abort("'inetPton4' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "inetNtop4") || (Module.inetNtop4 = function() {
    abort("'inetNtop4' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "inetPton6") || (Module.inetPton6 = function() {
    abort("'inetPton6' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "inetNtop6") || (Module.inetNtop6 = function() {
    abort("'inetNtop6' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "readSockaddr") || (Module.readSockaddr = function() {
    abort("'readSockaddr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeSockaddr") || (Module.writeSockaddr = function() {
    abort("'writeSockaddr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "DNS") || (Module.DNS = function() {
    abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getHostByName") || (Module.getHostByName = function() {
    abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES") || (Module.GAI_ERRNO_MESSAGES = function() {
    abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "Protocols") || (Module.Protocols = function() {
    abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "Sockets") || (Module.Sockets = function() {
    abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getRandomDevice") || (Module.getRandomDevice = function() {
    abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "traverseStack") || (Module.traverseStack = function() {
    abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE") || (Module.UNWIND_CACHE = function() {
    abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc") || (Module.withBuiltinMalloc = function() {
    abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray") || (Module.readAsmConstArgsArray = function() {
    abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs") || (Module.readAsmConstArgs = function() {
    abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM") || (Module.mainThreadEM_ASM = function() {
    abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "jstoi_q") || (Module.jstoi_q = function() {
    abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "jstoi_s") || (Module.jstoi_s = function() {
    abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getExecutableName") || (Module.getExecutableName = function() {
    abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "listenOnce") || (Module.listenOnce = function() {
    abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext") || (Module.autoResumeAudioContext = function() {
    abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "dynCallLegacy") || (Module.dynCallLegacy = function() {
    abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getDynCaller") || (Module.getDynCaller = function() {
    abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "dynCall") || (Module.dynCall = function() {
    abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks") || (Module.callRuntimeCallbacks = function() {
    abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "reallyNegative") || (Module.reallyNegative = function() {
    abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "unSign") || (Module.unSign = function() {
    abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "reSign") || (Module.reSign = function() {
    abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "formatString") || (Module.formatString = function() {
    abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "PATH") || (Module.PATH = function() {
    abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "PATH_FS") || (Module.PATH_FS = function() {
    abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SYSCALLS") || (Module.SYSCALLS = function() {
    abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "syscallMmap2") || (Module.syscallMmap2 = function() {
    abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "syscallMunmap") || (Module.syscallMunmap = function() {
    abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getSocketFromFD") || (Module.getSocketFromFD = function() {
    abort("'getSocketFromFD' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getSocketAddress") || (Module.getSocketAddress = function() {
    abort("'getSocketAddress' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "JSEvents") || (Module.JSEvents = function() {
    abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback") || (Module.registerKeyEventCallback = function() {
    abort("'registerKeyEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets") || (Module.specialHTMLTargets = function() {
    abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString") || (Module.maybeCStringToJsString = function() {
    abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "findEventTarget") || (Module.findEventTarget = function() {
    abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget") || (Module.findCanvasEventTarget = function() {
    abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect") || (Module.getBoundingClientRect = function() {
    abort("'getBoundingClientRect' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillMouseEventData") || (Module.fillMouseEventData = function() {
    abort("'fillMouseEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback") || (Module.registerMouseEventCallback = function() {
    abort("'registerMouseEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback") || (Module.registerWheelEventCallback = function() {
    abort("'registerWheelEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback") || (Module.registerUiEventCallback = function() {
    abort("'registerUiEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback") || (Module.registerFocusEventCallback = function() {
    abort("'registerFocusEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData") || (Module.fillDeviceOrientationEventData = function() {
    abort("'fillDeviceOrientationEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback") || (Module.registerDeviceOrientationEventCallback = function() {
    abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData") || (Module.fillDeviceMotionEventData = function() {
    abort("'fillDeviceMotionEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback") || (Module.registerDeviceMotionEventCallback = function() {
    abort("'registerDeviceMotionEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "screenOrientation") || (Module.screenOrientation = function() {
    abort("'screenOrientation' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData") || (Module.fillOrientationChangeEventData = function() {
    abort("'fillOrientationChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback") || (Module.registerOrientationChangeEventCallback = function() {
    abort("'registerOrientationChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData") || (Module.fillFullscreenChangeEventData = function() {
    abort("'fillFullscreenChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback") || (Module.registerFullscreenChangeEventCallback = function() {
    abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle") || (Module.registerRestoreOldStyle = function() {
    abort("'registerRestoreOldStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement") || (Module.hideEverythingExceptGivenElement = function() {
    abort("'hideEverythingExceptGivenElement' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements") || (Module.restoreHiddenElements = function() {
    abort("'restoreHiddenElements' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setLetterbox") || (Module.setLetterbox = function() {
    abort("'setLetterbox' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy") || (Module.currentFullscreenStrategy = function() {
    abort("'currentFullscreenStrategy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle") || (Module.restoreOldWindowedStyle = function() {
    abort("'restoreOldWindowedStyle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget") || (Module.softFullscreenResizeWebGLRenderTarget = function() {
    abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen") || (Module.doRequestFullscreen = function() {
    abort("'doRequestFullscreen' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData") || (Module.fillPointerlockChangeEventData = function() {
    abort("'fillPointerlockChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback") || (Module.registerPointerlockChangeEventCallback = function() {
    abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback") || (Module.registerPointerlockErrorEventCallback = function() {
    abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "requestPointerLock") || (Module.requestPointerLock = function() {
    abort("'requestPointerLock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData") || (Module.fillVisibilityChangeEventData = function() {
    abort("'fillVisibilityChangeEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback") || (Module.registerVisibilityChangeEventCallback = function() {
    abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback") || (Module.registerTouchEventCallback = function() {
    abort("'registerTouchEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData") || (Module.fillGamepadEventData = function() {
    abort("'fillGamepadEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback") || (Module.registerGamepadEventCallback = function() {
    abort("'registerGamepadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback") || (Module.registerBeforeUnloadEventCallback = function() {
    abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData") || (Module.fillBatteryEventData = function() {
    abort("'fillBatteryEventData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "battery") || (Module.battery = function() {
    abort("'battery' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback") || (Module.registerBatteryEventCallback = function() {
    abort("'registerBatteryEventCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize") || (Module.setCanvasElementSize = function() {
    abort("'setCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize") || (Module.getCanvasElementSize = function() {
    abort("'getCanvasElementSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate") || (Module.polyfillSetImmediate = function() {
    abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "demangle") || (Module.demangle = function() {
    abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "demangleAll") || (Module.demangleAll = function() {
    abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "jsStackTrace") || (Module.jsStackTrace = function() {
    abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stackTrace") || (Module.stackTrace = function() {
    abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getEnvStrings") || (Module.getEnvStrings = function() {
    abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "checkWasiClock") || (Module.checkWasiClock = function() {
    abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM") || (Module.flush_NO_FILESYSTEM = function() {
    abort("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeI53ToI64") || (Module.writeI53ToI64 = function() {
    abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped") || (Module.writeI53ToI64Clamped = function() {
    abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling") || (Module.writeI53ToI64Signaling = function() {
    abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped") || (Module.writeI53ToU64Clamped = function() {
    abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling") || (Module.writeI53ToU64Signaling = function() {
    abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "readI53FromI64") || (Module.readI53FromI64 = function() {
    abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "readI53FromU64") || (Module.readI53FromU64 = function() {
    abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53") || (Module.convertI32PairToI53 = function() {
    abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53") || (Module.convertU32PairToI53 = function() {
    abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount") || (Module.uncaughtExceptionCount = function() {
    abort("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "exceptionLast") || (Module.exceptionLast = function() {
    abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "exceptionCaught") || (Module.exceptionCaught = function() {
    abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs") || (Module.ExceptionInfoAttrs = function() {
    abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "ExceptionInfo") || (Module.ExceptionInfo = function() {
    abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "CatchInfo") || (Module.CatchInfo = function() {
    abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "exception_addRef") || (Module.exception_addRef = function() {
    abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "exception_decRef") || (Module.exception_decRef = function() {
    abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "Browser") || (Module.Browser = function() {
    abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "funcWrappers") || (Module.funcWrappers = function() {
    abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "getFuncWrapper") || (Module.getFuncWrapper = function() {
    abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "setMainLoop") || (Module.setMainLoop = function() {
    abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "FS") || (Module.FS = function() {
    abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "mmapAlloc") || (Module.mmapAlloc = function() {
    abort("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "MEMFS") || (Module.MEMFS = function() {
    abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "TTY") || (Module.TTY = function() {
    abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "PIPEFS") || (Module.PIPEFS = function() {
    abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SOCKFS") || (Module.SOCKFS = function() {
    abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback") || (Module._setNetworkCallback = function() {
    abort("'_setNetworkCallback' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray") || (Module.tempFixedLengthArray = function() {
    abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers") || (Module.miniTempWebGLFloatBuffers = function() {
    abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType") || (Module.heapObjectForWebGLType = function() {
    abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap") || (Module.heapAccessShiftForWebGLHeap = function() {
    abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GL") || (Module.GL = function() {
    abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet") || (Module.emscriptenWebGLGet = function() {
    abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize") || (Module.computeUnpackAlignedImageSize = function() {
    abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData") || (Module.emscriptenWebGLGetTexPixelData = function() {
    abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform") || (Module.emscriptenWebGLGetUniform = function() {
    abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib") || (Module.emscriptenWebGLGetVertexAttrib = function() {
    abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "writeGLArray") || (Module.writeGLArray = function() {
    abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "AL") || (Module.AL = function() {
    abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SDL_unicode") || (Module.SDL_unicode = function() {
    abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext") || (Module.SDL_ttfContext = function() {
    abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SDL_audio") || (Module.SDL_audio = function() {
    abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SDL") || (Module.SDL = function() {
    abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "SDL_gfx") || (Module.SDL_gfx = function() {
    abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GLUT") || (Module.GLUT = function() {
    abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "EGL") || (Module.EGL = function() {
    abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GLFW_Window") || (Module.GLFW_Window = function() {
    abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GLFW") || (Module.GLFW = function() {
    abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "GLEW") || (Module.GLEW = function() {
    abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "IDBStore") || (Module.IDBStore = function() {
    abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError") || (Module.runAndAbortIfError = function() {
    abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "warnOnce") || (Module.warnOnce = function() {
    abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stackSave") || (Module.stackSave = function() {
    abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stackRestore") || (Module.stackRestore = function() {
    abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stackAlloc") || (Module.stackAlloc = function() {
    abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "AsciiToString") || (Module.AsciiToString = function() {
    abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToAscii") || (Module.stringToAscii = function() {
    abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "UTF16ToString") || (Module.UTF16ToString = function() {
    abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToUTF16") || (Module.stringToUTF16 = function() {
    abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16") || (Module.lengthBytesUTF16 = function() {
    abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "UTF32ToString") || (Module.UTF32ToString = function() {
    abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "stringToUTF32") || (Module.stringToUTF32 = function() {
    abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32") || (Module.lengthBytesUTF32 = function() {
    abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "allocateUTF8") || (Module.allocateUTF8 = function() {
    abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack") || (Module.allocateUTF8OnStack = function() {
    abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
}
),
Module.writeStackCookie = writeStackCookie,
Module.checkStackCookie = checkStackCookie,
Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL") || Object.defineProperty(Module, "ALLOC_NORMAL", {
    configurable: !0,
    get: function() {
        abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }
}),
Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK") || Object.defineProperty(Module, "ALLOC_STACK", {
    configurable: !0,
    get: function() {
        abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }
});
var calledMain = !1;
function callMain(e) {
    assert(0 == runDependencies, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'),
    assert(0 == __ATPRERUN__.length, "cannot call main when preRun functions remain to be called");
    var t = Module._main
      , o = (e = e || []).length + 1
      , r = stackAlloc(4 * (o + 1));
    HEAP32[r >> 2] = allocateUTF8OnStack(thisProgram);
    for (var n = 1; n < o; n++)
        HEAP32[(r >> 2) + n] = allocateUTF8OnStack(e[n - 1]);
    HEAP32[(r >> 2) + o] = 0;
    try {
        exit(t(o, r), !0)
    } catch (e) {
        if (e instanceof ExitStatus)
            return;
        if ("unwind" == e)
            return void (noExitRuntime = !0);
        var a = e;
        e && "object" == typeof e && e.stack && (a = [e, e.stack]),
        err("exception thrown: " + a),
        quit_(1, e)
    } finally {
        calledMain = !0
    }
}
function stackCheckInit() {
    _emscripten_stack_init(),
    writeStackCookie()
}
function run(e) {
    function t() {
        calledRun || (calledRun = !0,
        Module.calledRun = !0,
        ABORT || (initRuntime(),
        preMain(),
        Module.onRuntimeInitialized && Module.onRuntimeInitialized(),
        shouldRunNow && callMain(e),
        postRun()))
    }
    e = e || arguments_,
    runDependencies > 0 || (stackCheckInit(),
    preRun(),
    runDependencies > 0 || (Module.setStatus ? (Module.setStatus("Running..."),
    setTimeout((function() {
        setTimeout((function() {
            Module.setStatus("")
        }
        ), 1),
        t()
    }
    ), 1)) : t(),
    checkStackCookie()))
}
function checkUnflushedContent() {
    var e = out
      , t = err
      , o = !1;
    out = err = function(e) {
        o = !0
    }
    ;
    try {
        flush_NO_FILESYSTEM && flush_NO_FILESYSTEM()
    } catch (e) {}
    out = e,
    err = t,
    o && (warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."),
    warnOnce("(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)"))
}
function exit(e, t) {
    if (checkUnflushedContent(),
    !t || !noExitRuntime || 0 !== e) {
        if (noExitRuntime) {
            if (!t)
                err("program exited (with status: " + e + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)")
        } else
            EXITSTATUS = e,
            exitRuntime(),
            Module.onExit && Module.onExit(e),
            ABORT = !0;
        quit_(e, new ExitStatus(e))
    }
}
if (dependenciesFulfilled = function e() {
    calledRun || run(),
    calledRun || (dependenciesFulfilled = e)
}
,
Module.run = run,
Module.preInit)
    for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; )
        Module.preInit.pop()();
var shouldRunNow = !0;
Module.noInitialRun && (shouldRunNow = !1),
run();
