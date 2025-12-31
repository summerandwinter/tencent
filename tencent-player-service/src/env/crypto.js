module.exports = `
(() => {
    window.maskStorage = {};
    
    const TPBase64 = {
        toUint8Array: (str, key) => {
            let o = String(str).replace(/=/g, "").replace(/-/g, "+").replace(/_/g, "/");
            if (key && window.maskStorage[key]) {
                const k = window.maskStorage[key].split("");
                const n = o.split("");
                o = n.map((e, t) => String.fromCharCode(e.charCodeAt(0) ^ k[t].charCodeAt(0))).join("");
            }
            try {
                const raw = window.atob(o.replace(/=/g, ""));
                const bytes = new Uint8Array(raw.length);
                for(let i=0; i<raw.length; i++) bytes[i] = raw.charCodeAt(i);
                return bytes;
            } catch(e) { return new Uint8Array([]); }
        },
        fromUint8Array: (arr) => {
            let s = "";
            for(let i=0; i<arr.length; i++) s += String.fromCharCode(arr[i]);
            return window.btoa(s);
        },
        toUTF8: (str) => {
            try { return decodeURIComponent(escape(window.atob(str))); } catch(e) { return str; }
        }
    };

    const TPHex = {
        encode: (s) => s.split("").map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(""),
        toUint8Array: (s) => new Uint8Array(s.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || []),
        fromUint8Array: (arr) => Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('')
    };

    const TPUTF16 = {
        toUint16Array: (e) => { var t = new Uint16Array(e.length); for(var o=0;o<e.length;o++)t[o]=e.charCodeAt(o); return t; },
        fromUint16Array: (e) => String.fromCharCode.apply(null, new Uint16Array(e)),
        fromTypeArray: (e) => String.fromCharCode.apply(null, new Uint16Array(e.buffer))
    };
    
    const TPUTF8 = {
        toUint8Array: (s) => new TextEncoder().encode(s),
        fromUint8Array: (b) => new TextDecoder().decode(b)
    };

    // 挂载到全局，供 Objects 使用
    window.EnvCrypto = { TPBase64, TPHex, TPUTF16, TPUTF8 };
})();
`;