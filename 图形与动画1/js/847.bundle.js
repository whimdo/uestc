(self.webpackChunk = self.webpackChunk || []).push([[847], {
    847: (e,s,t)=>{
        "use strict";
        t.r(s),
        t.d(s, {
            default: ()=>n
        });
        const i = async e=>{
            const s = await e.getFile();
            return s.handle = e,
            s
        }
          , n = async(e={})=>{
            const s = {};
            e.mimeTypes ? e.mimeTypes.map((t=>{
                s[t] = e.extensions || []
            }
            )) : s["*/*"] = e.extensions || [];
            const t = await window.showOpenFilePicker({
                types: [{
                    description: e.description || "",
                    accept: s
                }],
                multiple: e.multiple || !1
            })
              , n = await Promise.all(t.map(i));
            return e.multiple ? n : n[0]
        }
    }
}]);
