(self.webpackChunk = self.webpackChunk || []).push([[448], {
    800: (e,t,i)=>{
        "use strict";
        i.r(t),
        i.d(t, {
            default: ()=>a
        });
        const a = async(e,t={},i=null,a=!1)=>{
            t.fileName = t.fileName || "Untitled";
            const s = {};
            if (t.mimeTypes ? (t.mimeTypes.push(e.type),
            t.mimeTypes.map((e=>{
                s[e] = t.extensions || []
            }
            ))) : s[e.type] = t.extensions || [],
            i)
                try {
                    await i.getFile()
                } catch (e) {
                    if (i = null,
                    a)
                        throw e
                }
            const n = i || await window.showSaveFilePicker({
                suggestedName: t.fileName,
                types: [{
                    description: t.description || "",
                    accept: s
                }]
            })
              , c = await n.createWritable();
            return await c.write(e),
            await c.close(),
            n
        }
    }
}]);
