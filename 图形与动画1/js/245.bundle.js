(self.webpackChunk = self.webpackChunk || []).push([[245], {
    245: (e,t,r)=>{
        "use strict";
        r.r(t),
        r.d(t, {
            default: ()=>i
        });
        const a = async(e,t,r=e.name)=>{
            const i = []
              , s = [];
            for await(const n of e.values()) {
                const e = `${r}/${n.name}`;
                "file" === n.kind ? s.push(n.getFile().then((t=>Object.defineProperty(t, "webkitRelativePath", {
                    configurable: !0,
                    enumerable: !0,
                    get: ()=>e
                })))) : "directory" === n.kind && t && i.push(a(n, t, e))
            }
            return [...(await Promise.all(i)).flat(), ...await Promise.all(s)]
        }
          , i = async(e={})=>{
            e.recursive = e.recursive || !1;
            const t = await window.showDirectoryPicker();
            return a(t, e.recursive)
        }
    }
}]);
