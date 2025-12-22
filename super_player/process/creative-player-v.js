/**
 * @name @tencent/creative-player-web-v
 * @version 4.2.45
 * @time 2025-12-08 20:06:25
 */

!function(t, e) {
    "use strict";
    var o = function(t, e) {
        return o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        }
        ,
        o(t, e)
    };
    function i(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function i() {
            this.constructor = t
        }
        o(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
        new i)
    }
    var r, n, a, s, d, l, c, p, u, h, f, v, m, y, g, _, x, A, C, b, E, I, T, w, L, P, D = function() {
        return D = Object.assign || function(t) {
            for (var e, o = 1, i = arguments.length; o < i; o++)
                for (var r in e = arguments[o])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        ,
        D.apply(this, arguments)
    };
    function N(t, e) {
        var o = {};
        for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (o[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
                e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (o[i[r]] = t[i[r]])
        }
        return o
    }
    function O(t, e, o, i) {
        return new (o || (o = Promise))((function(r, n) {
            function a(t) {
                try {
                    d(i.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function s(t) {
                try {
                    d(i.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function d(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof o ? e : new o((function(t) {
                    t(e)
                }
                ))).then(a, s)
            }
            d((i = i.apply(t, e || [])).next())
        }
        ))
    }
    function S(t, e) {
        var o, i, r, n, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function s(s) {
            return function(d) {
                return function(s) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; n && (n = 0,
                    s[0] && (a = 0)),
                    a; )
                        try {
                            if (o = 1,
                            i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, s[1])).done)
                                return r;
                            switch (i = 0,
                            r && (s = [2 & s[0], r.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = s;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(s);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            s = e.call(t, a)
                        } catch (t) {
                            s = [6, t],
                            i = 0
                        } finally {
                            o = r = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, d])
            }
        }
    }
    function R(t, e, o) {
        if (o || 2 === arguments.length)
            for (var i, r = 0, n = e.length; r < n; r++)
                !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)),
                i[r] = e[r]);
        return t.concat(i || Array.prototype.slice.call(e))
    }
    "function" == typeof SuppressedError && SuppressedError,
    function(t) {
        t.LD = "LD",
        t.HT = "HT",
        t.ZC = "ZC",
        t.CZC = "CZC",
        t.ZT = "ZT",
        t.KB = "KB",
        t.PSJ = "PSJ",
        t.PLJ = "PLJ",
        t.PPB = "PPB",
        t.PVL = "PVL",
        t.PDF = "PDF",
        t.BS = "BS",
        t.VIN = "VIN",
        t.PHLS = "PHLS",
        t.DER = "DER",
        t.YXT = "YXT",
        t.RB = "RB"
    }(r || (r = {})),
    function(t) {
        t.LD = "WL",
        t.KB = "WK",
        t.HT = "WH"
    }(n || (n = {})),
    function(t) {
        t[t.PRE = 1] = "PRE",
        t[t.TAIL = 2] = "TAIL",
        t[t.ANCHOR = 3] = "ANCHOR",
        t[t.PAUSE = 4] = "PAUSE",
        t[t.PROGRESS_PREVIEW = 5] = "PROGRESS_PREVIEW",
        t[t.VIDEO_RESOLUTION = 6] = "VIDEO_RESOLUTION",
        t[t.DYNAMIC_MID = 7] = "DYNAMIC_MID"
    }(s || (s = {})),
    function(t) {
        t[t.UNKNOWN = -1] = "UNKNOWN",
        t[t.NOT_LOGIN = 0] = "NOT_LOGIN",
        t[t.LOGIN = 1] = "LOGIN",
        t[t.HLW_VIP = 2] = "HLW_VIP",
        t[t.TV_VIP = 9] = "TV_VIP",
        t[t.SPORTS_VIP = 10] = "SPORTS_VIP",
        t[t.SPORTS_SVIP = 12] = "SPORTS_SVIP"
    }(d || (d = {})),
    function(t) {
        t[t.GUEST = 0] = "GUEST",
        t[t.QQ = 1] = "QQ",
        t[t.WX = 2] = "WX",
        t[t.PHONE = 3] = "PHONE"
    }(l || (l = {})),
    function(t) {
        t[t.OK = 0] = "OK"
    }(c || (c = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.PRE = 1] = "PRE",
        t[t.BROADCAST = 2] = "BROADCAST",
        t[t.TAIL = 3] = "TAIL",
        t[t.PAUSE = 4] = "PAUSE",
        t[t.LOADING = 5] = "LOADING",
        t[t.PROGRESS_PREVIEW = 6] = "PROGRESS_PREVIEW",
        t[t.VIDEO_RESOLUTION = 7] = "VIDEO_RESOLUTION",
        t[t.MID = 8] = "MID",
        t[t.CREATIVE_MID = 9] = "CREATIVE_MID",
        t[t.HLS_MID = 10] = "HLS_MID",
        t[t.CORNER = 11] = "CORNER",
        t[t.LIVE_CORNER = 12] = "LIVE_CORNER",
        t[t.VIDEO_IN = 13] = "VIDEO_IN",
        t[t.WATCH_BUY = 14] = "WATCH_BUY",
        t[t.ANCHOR_EMPTY = 15] = "ANCHOR_EMPTY",
        t[t.NON_STANDARD = 16] = "NON_STANDARD",
        t[t.DYNAMIC_MID = 17] = "DYNAMIC_MID",
        t[t.CONTINUED_POST = 18] = "CONTINUED_POST",
        t[t.REWARD_BUBBLE = 19] = "REWARD_BUBBLE"
    }(p || (p = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.CLICK = 1] = "CLICK",
        t[t.SCAN = 2] = "SCAN"
    }(u || (u = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.ORIGIN_EXPOSURE = 1] = "ORIGIN_EXPOSURE",
        t[t.EXPOSURE = 2] = "EXPOSURE",
        t[t.PLAY_BACK = 3] = "PLAY_BACK",
        t[t.EMPTY = 4] = "EMPTY",
        t[t.EFFECT = 5] = "EFFECT",
        t[t.FEEDBACK = 6] = "FEEDBACK",
        t[t.CLICK = 7] = "CLICK",
        t[t.RANGE_EXPOSURE = 8] = "RANGE_EXPOSURE",
        t[t.RANGE_PLAY = 9] = "RANGE_PLAY",
        t[t.PLUGIN = 10] = "PLUGIN"
    }(h || (h = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.COMMON_EXPOSURE_CLICK = 1] = "COMMON_EXPOSURE_CLICK",
        t[t.HEADER_CLICK = 2] = "HEADER_CLICK",
        t[t.ACTION_BTN_CLICK = 3] = "ACTION_BTN_CLICK",
        t[t.POSTER_CLICK = 4] = "POSTER_CLICK",
        t[t.COMMON_PLAY = 5] = "COMMON_PLAY",
        t[t.COMMON_DOWNLOAD = 6] = "COMMON_DOWNLOAD",
        t[t.COMMON = 7] = "COMMON",
        t[t.SKIP_CLICK = 9] = "SKIP_CLICK"
    }(f || (f = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.PICTURE = 1] = "PICTURE",
        t[t.QRCODE = 2] = "QRCODE"
    }(v || (v = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.IMAGE = 1] = "IMAGE",
        t[t.VIDEO = 2] = "VIDEO"
    }(m || (m = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.VIDEO_TIME = 1] = "VIDEO_TIME",
        t[t.TIMESTAMP = 2] = "TIMESTAMP"
    }(y || (y = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.LEFT_TOP = 1] = "LEFT_TOP",
        t[t.LEFT_MIDDLE = 2] = "LEFT_MIDDLE",
        t[t.LEFT_BOTTOM = 3] = "LEFT_BOTTOM",
        t[t.RIGHT_MIDDLE = 4] = "RIGHT_MIDDLE"
    }(g || (g = {})),
    function(t) {
        t.SD = "sd",
        t.HD = "hd",
        t.SHD = "shd",
        t.FHD = "fhd",
        t.UHD = "uhd",
        t.HDR10 = "hdr10",
        t.DOLBY_VISION = "dolby"
    }(_ || (_ = {})),
    (a = {})[_.SD] = _.HD,
    a[_.HD] = _.HD,
    a[_.SHD] = _.SHD,
    a[_.FHD] = _.FHD,
    a[_.UHD] = _.FHD,
    a[_.HDR10] = _.FHD,
    a[_.DOLBY_VISION] = _.FHD,
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.SOLO = 1] = "SOLO"
    }(x || (x = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.FIX = 1] = "FIX",
        t[t.FIX_REALTIME = 2] = "FIX_REALTIME",
        t[t.DYNAMIC = 3] = "DYNAMIC"
    }(A || (A = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.LEFT_BOTTOM = 1] = "LEFT_BOTTOM",
        t[t.RIGHT_BOTTOM = 2] = "RIGHT_BOTTOM"
    }(C || (C = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.INTEGRATE = 1] = "INTEGRATE",
        t[t.DIRECTLY = 2] = "DIRECTLY"
    }(b || (b = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.CARD_BACKGROUND = 1] = "CARD_BACKGROUND",
        t[t.CARD_NO_BACKGROUND = 2] = "CARD_NO_BACKGROUND"
    }(E || (E = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.RIGHT_VERTICAL = 1] = "RIGHT_VERTICAL",
        t[t.RIGHT_HORIZONTAL = 2] = "RIGHT_HORIZONTAL",
        t[t.LEFT_HORIZONTAL = 3] = "LEFT_HORIZONTAL",
        t[t.LEFT_HORIZONTAL_BROKEN = 4] = "LEFT_HORIZONTAL_BROKEN"
    }(I || (I = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.SSO = 1] = "SSO"
    }(T || (T = {}));
    var k, M, V = ((w = {})[n.LD] = p.PRE,
    w[n.KB] = p.BROADCAST,
    w[n.HT] = p.TAIL,
    w), U = ((L = {})[r.LD] = p.PRE,
    L[r.HT] = p.TAIL,
    L[r.ZC] = p.MID,
    L[r.CZC] = p.CREATIVE_MID,
    L[r.ZT] = p.PAUSE,
    L[r.KB] = p.BROADCAST,
    L[r.PSJ] = p.CORNER,
    L[r.PLJ] = p.LIVE_CORNER,
    L[r.PPB] = p.PROGRESS_PREVIEW,
    L[r.PVL] = p.LOADING,
    L[r.PDF] = p.VIDEO_RESOLUTION,
    L[r.BS] = p.WATCH_BUY,
    L[r.VIN] = p.VIDEO_IN,
    L[r.PHLS] = p.HLS_MID,
    L[r.DER] = p.ANCHOR_EMPTY,
    L[r.YXT] = p.CONTINUED_POST,
    L[r.RB] = p.REWARD_BUBBLE,
    L), B = ((P = {})[p.PRE] = "preAd",
    P[p.BROADCAST] = "preAd",
    P[p.TAIL] = "postAd",
    P[p.MID] = "ZC",
    P[p.PAUSE] = "ZT",
    P), z = {
        toAdCoreType: function(t) {
            var e = U[t];
            if (e)
                return e;
            if (e = V[t])
                return e;
            var o = Object.entries(B).find((function(e) {
                return e[1] === t
            }
            ));
            return o ? Number(o[0]) : p.UNKNOWN
        },
        toAdTypeV: function(t) {
            var e = Object.entries(U).find((function(e) {
                return e[1] === t
            }
            ));
            if (e)
                return e[0]
        },
        toAdTypeM: function(t) {
            var e = Object.entries(V).find((function(e) {
                return e[1] === t
            }
            ));
            if (e)
                return e[0]
        },
        toThumbPlayerAdType: function(t) {
            return B[t]
        },
        getAdScene: function(t) {
            if ("number" == typeof t)
                return t;
            var e = z.toAdCoreType(t);
            return e === p.MID ? s.DYNAMIC_MID : e === p.PRE ? s.PRE : e === p.TAIL ? s.TAIL : s.PRE
        }
    }, H = ((k = {})[s.PRE] = "pre_ad_params",
    k[s.TAIL] = "tail_ad_params",
    k[s.ANCHOR] = "anchor_ad_params",
    k[s.PAUSE] = "pause_ad_params",
    k[s.PROGRESS_PREVIEW] = "progress_preview_ad_params",
    k[s.VIDEO_RESOLUTION] = "video_resolution_ad_params",
    k[s.DYNAMIC_MID] = "mid_ad_params",
    k), $ = function(t) {
        var e, o, i;
        if (!t)
            return "";
        if ("string" == typeof t)
            try {
                i = JSON.parse(t)
            } catch (t) {
                i = {}
            }
        else
            i = t;
        return (null === (o = null === (e = i[H[i.ad_scene]]) || void 0 === e ? void 0 : e.req_extra_info) || void 0 === o ? void 0 : o.ad_request_id) || ""
    };
    function K(t) {
        var e;
        if (!t)
            return "";
        var o = document.createElement("a");
        o.href = t;
        var i = o.search || "";
        if (!i)
            return t;
        var r = i.replace(/^\?/, "").split("&");
        return r.sort((function() {
            return .5 - Math.random() > 0 ? 1 : -1
        }
        )),
        r[0] && /^vkey/.test(r[0]) && r.length > 1 && (e = [r[1], r[0]],
        r[0] = e[0],
        r[1] = e[1]),
        i = (i = r.join("&")).replace(/sdtfrom=&|[&]?sdtfrom=$/, ""),
        o.href.replace(o.search, "?".concat(i))
    }
    function G(t) {
        return D(D({}, t), {
            file_size: Number(t.file_size),
            height: Number(t.height),
            width: Number(t.width)
        })
    }
    function q(t) {
        var e = t.video;
        return e ? D(D({}, G(e)), {
            url: K(e.url),
            duration: Number(e.duration) / 1e3
        }) : null
    }
    function Y(t) {
        var e = t.image;
        return e ? G(e) : null
    }
    !function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.REQUEST = 1] = "REQUEST",
        t[t.EXPOSURE = 2] = "EXPOSURE",
        t[t.CLICK = 3] = "CLICK",
        t[t.FEEDBACK = 4] = "FEEDBACK"
    }(M || (M = {}));
    for (var F = 1, W = 2, j = 4, Q = 8, Z = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, X = 0, J = 1, tt = 2, et = 3, ot = 4, it = 5, rt = 6, nt = 7, at = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(t) {
            for (var e = t << 10; at.getBCHDigit(e) - at.getBCHDigit(at.G15) >= 0; )
                e ^= at.G15 << at.getBCHDigit(e) - at.getBCHDigit(at.G15);
            return (t << 10 | e) ^ at.G15_MASK
        },
        getBCHTypeNumber: function(t) {
            for (var e = t << 12; at.getBCHDigit(e) - at.getBCHDigit(at.G18) >= 0; )
                e ^= at.G18 << at.getBCHDigit(e) - at.getBCHDigit(at.G18);
            return t << 12 | e
        },
        getBCHDigit: function(t) {
            for (var e = 0; 0 !== t; )
                e += 1,
                t >>>= 1;
            return e
        },
        getPatternPosition: function(t) {
            return at.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function(t, e, o) {
            switch (t) {
            case X:
                return (e + o) % 2 == 0;
            case J:
                return e % 2 == 0;
            case tt:
                return o % 3 == 0;
            case et:
                return (e + o) % 3 == 0;
            case ot:
                return (Math.floor(e / 2) + Math.floor(o / 3)) % 2 == 0;
            case it:
                return e * o % 2 + e * o % 3 == 0;
            case rt:
                return (e * o % 2 + e * o % 3) % 2 == 0;
            case nt:
                return (e * o % 3 + (e + o) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:".concat(t))
            }
        },
        getErrorCorrectPolynomial: function(t) {
            for (var e = new ft([1],0), o = 0; o < t; o++)
                e = e.multiply(new ft([1, ct.gexp(o)],0));
            return e
        },
        getLengthInBits: function(t, e) {
            if (1 <= e && e < 10)
                switch (t) {
                case F:
                    return 10;
                case W:
                    return 9;
                case j:
                case Q:
                    return 8;
                default:
                    throw new Error("mode:".concat(t))
                }
            else if (e < 27)
                switch (t) {
                case F:
                    return 12;
                case W:
                    return 11;
                case j:
                    return 16;
                case Q:
                    return 10;
                default:
                    throw new Error("mode:".concat(t))
                }
            else {
                if (!(e < 41))
                    throw new Error("type:".concat(e));
                switch (t) {
                case F:
                    return 14;
                case W:
                    return 13;
                case j:
                    return 16;
                case Q:
                    return 12;
                default:
                    throw new Error("mode:".concat(t))
                }
            }
        },
        getLostPoint: function(t) {
            for (var e = t.getModuleCount(), o = 0, i = 0; i < e; i++)
                for (var r = 0; r < e; r++) {
                    for (var n = 0, a = t.isDark(i, r), s = -1; s <= 1; s++)
                        if (!(i + s < 0 || e <= i + s))
                            for (var d = -1; d <= 1; d++)
                                r + d < 0 || e <= r + d || 0 === s && 0 === d || a === t.isDark(i + s, r + d) && (n += 1);
                    n > 5 && (o += 3 + n - 5)
                }
            for (i = 0; i < e - 1; i++)
                for (r = 0; r < e - 1; r++) {
                    var l = 0;
                    t.isDark(i, r) && (l += 1),
                    t.isDark(i + 1, r) && (l += 1),
                    t.isDark(i, r + 1) && (l += 1),
                    t.isDark(i + 1, r + 1) && (l += 1),
                    0 !== l && 4 !== l || (o += 3)
                }
            for (i = 0; i < e; i++)
                for (r = 0; r < e - 6; r++)
                    t.isDark(i, r) && !t.isDark(i, r + 1) && t.isDark(i, r + 2) && t.isDark(i, r + 3) && t.isDark(i, r + 4) && !t.isDark(i, r + 5) && t.isDark(i, r + 6) && (o += 40);
            for (r = 0; r < e; r++)
                for (i = 0; i < e - 6; i++)
                    t.isDark(i, r) && !t.isDark(i + 1, r) && t.isDark(i + 2, r) && t.isDark(i + 3, r) && t.isDark(i + 4, r) && !t.isDark(i + 5, r) && t.isDark(i + 6, r) && (o += 40);
            var c = 0;
            for (r = 0; r < e; r++)
                for (i = 0; i < e; i++)
                    t.isDark(i, r) && (c += 1);
            return o += 10 * (Math.abs(100 * c / e / e - 50) / 5)
        }
    }, st = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]], dt = function() {
        var t = !1
          , e = navigator.userAgent;
        if (/android/i.test(e)) {
            t = !0;
            var o = e.toString().match(/android ([0-9]\.[0-9])/i);
            (null == o ? void 0 : o[1]) && (t = parseFloat(o[1]))
        }
        return t
    }, lt = function(t) {
        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return e.length + (e.length != t ? 3 : 0)
    }, ct = {
        glog: function(t) {
            if (t < 1)
                throw new Error("glog(".concat(t, ")"));
            return ct.LOG_TABLE[t]
        },
        gexp: function(t) {
            for (; t < 0; )
                t += 255;
            for (; t >= 256; )
                t -= 255;
            return ct.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, pt = 0; pt < 8; pt++)
        ct.EXP_TABLE[pt] = 1 << pt;
    for (pt = 8; pt < 256; pt++)
        ct.EXP_TABLE[pt] = ct.EXP_TABLE[pt - 4] ^ ct.EXP_TABLE[pt - 5] ^ ct.EXP_TABLE[pt - 6] ^ ct.EXP_TABLE[pt - 8];
    for (pt = 0; pt < 255; pt++)
        ct.LOG_TABLE[ct.EXP_TABLE[pt]] = pt;
    var ut = function() {
        function t(t) {
            this.mode = j,
            this.data = t,
            this.parsedData = [];
            for (var e = 0, o = this.data.length; e < o; e++) {
                var i = []
                  , r = this.data.charCodeAt(e);
                r > 65536 ? (i[0] = 240 | (1835008 & r) >>> 18,
                i[1] = 128 | (258048 & r) >>> 12,
                i[2] = 128 | (4032 & r) >>> 6,
                i[3] = 128 | 63 & r) : r > 2048 ? (i[0] = 224 | (61440 & r) >>> 12,
                i[1] = 128 | (4032 & r) >>> 6,
                i[2] = 128 | 63 & r) : r > 128 ? (i[0] = 192 | (1984 & r) >>> 6,
                i[1] = 128 | 63 & r) : i[0] = r,
                this.parsedData.push(i)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length !== this.data.length && (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239))
        }
        return t.prototype.getLength = function() {
            return this.parsedData.length
        }
        ,
        t.prototype.write = function(t) {
            for (var e = 0, o = this.parsedData.length; e < o; e++)
                t.put(this.parsedData[e], 8)
        }
        ,
        t
    }()
      , ht = function() {
        function t(t, e) {
            this.typeNumber = t,
            this.errorCorrectLevel = e,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        return t.createData = function(e, o, i) {
            for (var r = vt.getRSBlocks(e, o), n = new mt, a = 0; a < i.length; a++) {
                var s = i[a];
                n.put(s.mode, 4),
                n.put(s.getLength(), at.getLengthInBits(s.mode, e)),
                s.write(n)
            }
            var d = 0;
            for (a = 0; a < r.length; a++)
                d += r[a].dataCount;
            if (n.getLengthInBits() > 8 * d)
                throw new Error("code length overflow. (".concat(n.getLengthInBits(), ">").concat(8 * d, ")"));
            for (n.getLengthInBits() + 4 <= 8 * d && n.put(0, 4); n.getLengthInBits() % 8 != 0; )
                n.putBit(!1);
            for (; !(n.getLengthInBits() >= 8 * d || (n.put(t.PAD0, 8),
            n.getLengthInBits() >= 8 * d)); )
                n.put(t.PAD1, 8);
            return t.createBytes(n, r)
        }
        ,
        t.createBytes = function(t, e) {
            for (var o = 0, i = 0, r = 0, n = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
                var d = e[s].dataCount
                  , l = e[s].totalCount - d;
                i = Math.max(i, d),
                r = Math.max(r, l),
                n[s] = new Array(d);
                for (var c = 0; c < n[s].length; c++)
                    n[s][c] = 255 & t.buffer[c + o];
                o += d;
                var p = at.getErrorCorrectPolynomial(l)
                  , u = new ft(n[s],p.getLength() - 1).mod(p);
                a[s] = new Array(p.getLength() - 1);
                for (c = 0; c < a[s].length; c++) {
                    var h = c + u.getLength() - a[s].length;
                    a[s][c] = h >= 0 ? u.get(h) : 0
                }
            }
            var f = 0;
            for (c = 0; c < e.length; c++)
                f += e[c].totalCount;
            var v = new Array(f)
              , m = 0;
            for (c = 0; c < i; c++)
                for (s = 0; s < e.length; s++)
                    c < n[s].length && (v[m++] = n[s][c]);
            for (c = 0; c < r; c++)
                for (s = 0; s < e.length; s++)
                    c < a[s].length && (v[m++] = a[s][c]);
            return v
        }
        ,
        t.prototype.addData = function(t) {
            var e = new ut(t);
            this.dataList.push(e),
            this.dataCache = null
        }
        ,
        t.prototype.isDark = function(t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                throw new Error("".concat(t).concat(e));
            return this.modules[t][e]
        }
        ,
        t.prototype.getModuleCount = function() {
            return this.moduleCount
        }
        ,
        t.prototype.make = function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        }
        ,
        t.prototype.makeImpl = function(e, o) {
            this.moduleCount = 4 * this.typeNumber + 17,
            this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var r = 0; r < this.moduleCount; r++)
                    this.modules[i][r] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, o),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, o)
        }
        ,
        t.prototype.setupPositionProbePattern = function(t, e) {
            for (var o = -1; o <= 7; o++)
                if (!(t + o <= -1 || this.moduleCount <= t + o))
                    for (var i = -1; i <= 7; i++)
                        e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + o][e + i] = 0 <= o && o <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == o || 6 == o) || 2 <= o && o <= 4 && 2 <= i && i <= 4)
        }
        ,
        t.prototype.getBestMaskPattern = function() {
            for (var t = 0, e = 0, o = 0; o < 8; o++) {
                this.makeImpl(!0, o);
                var i = at.getLostPoint(this);
                (0 == o || t > i) && (t = i,
                e = o)
            }
            return e
        }
        ,
        t.prototype.createMovieClip = function(t, e, o) {
            var i = t.createEmptyMovieClip(e, o);
            this.make();
            for (var r = 0; r < this.modules.length; r++)
                for (var n = 1 * r, a = 0; a < this.modules[r].length; a++) {
                    var s = 1 * a;
                    this.modules[r][a] && (i.beginFill(0, 100),
                    i.moveTo(s, n),
                    i.lineTo(s + 1, n),
                    i.lineTo(s + 1, n + 1),
                    i.lineTo(s, n + 1),
                    i.endFill())
                }
            return i
        }
        ,
        t.prototype.setupTimingPattern = function() {
            for (var t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
                null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        }
        ,
        t.prototype.setupPositionAdjustPattern = function() {
            for (var t = at.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var o = 0; o < t.length; o++) {
                    var i = t[e]
                      , r = t[o];
                    if (null == this.modules[i][r])
                        for (var n = -2; n <= 2; n++)
                            for (var a = -2; a <= 2; a++)
                                this.modules[i + n][r + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a
                }
        }
        ,
        t.prototype.setupTypeNumber = function(t) {
            for (var e = at.getBCHTypeNumber(this.typeNumber), o = 0; o < 18; o++) {
                var i = !t && 1 == (e >> o & 1);
                this.modules[Math.floor(o / 3)][o % 3 + this.moduleCount - 8 - 3] = i
            }
            for (o = 0; o < 18; o++) {
                i = !t && 1 == (e >> o & 1);
                this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)] = i
            }
        }
        ,
        t.prototype.setupTypeInfo = function(t, e) {
            for (var o = this.errorCorrectLevel << 3 | e, i = at.getBCHTypeInfo(o), r = 0; r < 15; r++) {
                var n = !t && 1 == (i >> r & 1);
                r < 6 ? this.modules[r][8] = n : r < 8 ? this.modules[r + 1][8] = n : this.modules[this.moduleCount - 15 + r][8] = n
            }
            for (r = 0; r < 15; r++) {
                n = !t && 1 == (i >> r & 1);
                r < 8 ? this.modules[8][this.moduleCount - r - 1] = n : r < 9 ? this.modules[8][15 - r - 1 + 1] = n : this.modules[8][15 - r - 1] = n
            }
            this.modules[this.moduleCount - 8][8] = !t
        }
        ,
        t.prototype.mapData = function(t, e) {
            for (var o = -1, i = this.moduleCount - 1, r = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                for (6 === a && (a -= 1); ; ) {
                    for (var s = 0; s < 2; s++)
                        if (null == this.modules[i][a - s]) {
                            var d = !1;
                            n < t.length && (d = 1 == (t[n] >>> r & 1)),
                            at.getMask(e, i, a - s) && (d = !d),
                            this.modules[i][a - s] = d,
                            -1 === (r -= 1) && (n += 1,
                            r = 7)
                        }
                    if ((i += o) < 0 || this.moduleCount <= i) {
                        i -= o,
                        o = -o;
                        break
                    }
                }
        }
        ,
        t.PAD0 = 236,
        t.PAD1 = 17,
        t
    }()
      , ft = function() {
        function t(t, e) {
            if (void 0 === t.length)
                throw new Error("".concat(t.length, "/").concat(e));
            for (var o = 0; o < t.length && 0 === t[o]; )
                o += 1;
            this.num = new Array(t.length - o + e);
            for (var i = 0; i < t.length - o; i++)
                this.num[i] = t[i + o]
        }
        return t.prototype.get = function(t) {
            return this.num[t]
        }
        ,
        t.prototype.getLength = function() {
            return this.num.length
        }
        ,
        t.prototype.multiply = function(e) {
            for (var o = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++)
                for (var r = 0; r < e.getLength(); r++)
                    o[i + r] ^= ct.gexp(ct.glog(this.get(i)) + ct.glog(e.get(r)));
            return new t(o,0)
        }
        ,
        t.prototype.mod = function(e) {
            if (this.getLength() - e.getLength() < 0)
                return this;
            for (var o = ct.glog(this.get(0)) - ct.glog(e.get(0)), i = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
                i[r] = this.get(r);
            for (r = 0; r < e.getLength(); r++)
                i[r] ^= ct.gexp(ct.glog(e.get(r)) + o);
            return new t(i,0).mod(e)
        }
        ,
        t
    }()
      , vt = function() {
        function t(t, e) {
            this.totalCount = t,
            this.dataCount = e
        }
        return t.getRSBlocks = function(e, o) {
            var i = t.getRsBlockTable(e, o);
            if (void 0 === i)
                throw new Error("bad rs block @ typeNumber:".concat(e, "/errorCorrectLevel:").concat(o));
            for (var r = i.length / 3, n = [], a = 0; a < r; a++)
                for (var s = i[3 * a + 0], d = i[3 * a + 1], l = i[3 * a + 2], c = 0; c < s; c++)
                    n.push(new t(d,l));
            return n
        }
        ,
        t.getRsBlockTable = function(e, o) {
            switch (o) {
            case Z.L:
                return t.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case Z.M:
                return t.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case Z.Q:
                return t.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case Z.H:
                return t.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return
            }
        }
        ,
        t.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        t
    }()
      , mt = function() {
        function t() {
            this.buffer = [],
            this.length = 0
        }
        return t.prototype.get = function(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        }
        ,
        t.prototype.put = function(t, e) {
            for (var o = 0; o < e; o++)
                this.putBit(1 == (t >>> e - o - 1 & 1))
        }
        ,
        t.prototype.getLengthInBits = function() {
            return this.length
        }
        ,
        t.prototype.putBit = function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length += 1
        }
        ,
        t
    }()
      , yt = function() {
        function t(t, e) {
            this._el = t,
            this._htOption = e
        }
        return t.prototype.draw = function(t) {
            for (var e = this._htOption, o = this._el, i = t.getModuleCount(), r = Math.floor(e.width / i), n = Math.floor(e.height / i), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < i; s++) {
                a.push("<tr>");
                for (var d = 0; d < i; d++)
                    a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'.concat(r, "px;height:").concat(n, "px;background-color:").concat(t.isDark(s, d) ? e.colorDark : e.colorLight, ';"></td>'));
                a.push("</tr>")
            }
            a.push("</table>"),
            o.innerHTML = a.join("");
            var l = o.childNodes[0]
              , c = (e.width - l.offsetWidth) / 2
              , p = (e.height - l.offsetHeight) / 2;
            c > 0 && p > 0 && (l.style.margin = "".concat(p, "px ").concat(c, "px"))
        }
        ,
        t.prototype.clear = function() {
            this._el.innerHTML = ""
        }
        ,
        t
    }()
      , gt = function() {
        function t(t, e) {
            if (this._bIsPainted = !1,
            this._android = dt(),
            this._htOption = e,
            this._elCanvas = document.createElement("canvas"),
            this._elCanvas.width = e.width,
            this._elCanvas.height = e.height,
            t.appendChild(this._elCanvas),
            this._el = t,
            this._oContext = this._elCanvas.getContext("2d"),
            this._bIsPainted = !1,
            this._elImage = document.createElement("img"),
            this._elImage.alt = "Scan me!",
            this._elImage.style.display = "none",
            this._el.appendChild(this._elImage),
            this._bSupportDataURI = null,
            this._android && this._android <= 2.1) {
                var o = 1 / window.devicePixelRatio
                  , i = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(t, e, r, n, a, s, d, l, c) {
                    if ("nodeName"in t && /img/i.test(t.nodeName))
                        for (var p = arguments.length - 1; p >= 1; p--)
                            arguments[p] = arguments[p] * o;
                    else
                        void 0 === l && (arguments[1] *= o,
                        arguments[2] *= o,
                        arguments[3] *= o,
                        arguments[4] *= o);
                    i.apply(this, arguments)
                }
            }
        }
        return t.prototype.draw = function(t) {
            var e = this._elImage
              , o = this._oContext
              , i = this._htOption
              , r = t.getModuleCount()
              , n = i.width / r
              , a = i.height / r
              , s = Math.round(n)
              , d = Math.round(a);
            e.style.display = "none",
            this.clear();
            for (var l = 0; l < r; l++)
                for (var c = 0; c < r; c++) {
                    var p = t.isDark(l, c)
                      , u = c * n
                      , h = l * a;
                    o.strokeStyle = p ? i.colorDark : i.colorLight,
                    o.lineWidth = 1,
                    o.fillStyle = p ? i.colorDark : i.colorLight,
                    o.fillRect(u, h, n, a),
                    o.strokeRect(Math.floor(u) + .5, Math.floor(h) + .5, s, d),
                    o.strokeRect(Math.ceil(u) - .5, Math.ceil(h) - .5, s, d)
                }
            this._bIsPainted = !0
        }
        ,
        t.prototype.makeImage = function() {
            this._bIsPainted && this.safeSetDataURI(this.onMakeImage)
        }
        ,
        t.prototype.onMakeImage = function() {
            this._elImage.src = this._elCanvas.toDataURL("image/png"),
            this._elImage.style.display = "block",
            this._elCanvas.style.display = "none"
        }
        ,
        t.prototype.isPainted = function() {
            return this._bIsPainted
        }
        ,
        t.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
            this._bIsPainted = !1
        }
        ,
        t.prototype.round = function(t) {
            return t ? Math.floor(1e3 * t) / 1e3 : t
        }
        ,
        t.prototype.safeSetDataURI = function(t, e) {
            var o = this;
            if (this._fFail = e,
            this._fSuccess = t,
            null === this._bSupportDataURI) {
                var i = document.createElement("img")
                  , r = function() {
                    o._bSupportDataURI = !1,
                    o._fFail && o._fFail.call(o)
                };
                return i.onabort = r,
                i.onerror = r,
                i.onload = function() {
                    o._bSupportDataURI = !0,
                    o._fSuccess && o._fSuccess.call(o)
                }
                ,
                void (i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
            }
            !0 === this._bSupportDataURI && this._fSuccess ? this._fSuccess.call(this) : !1 === this._bSupportDataURI && this._fFail && this._fFail.call(this)
        }
        ,
        t
    }()
      , _t = "undefined" != typeof CanvasRenderingContext2D ? gt : yt
      , xt = function() {
        function t(t, e) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: Z.H
            },
            "string" == typeof e && (e = {
                text: e
            }),
            e)
                for (var o in e)
                    this._htOption[o] = e[o];
            "string" == typeof t && (t = document.getElementById(t)),
            this._android = dt(),
            this._el = t,
            this._oQRCode = null,
            this._oDrawing = new _t(this._el,this._htOption),
            this._htOption.text && this.makeCode(this._htOption.text)
        }
        return t.prototype.makeCode = function(t) {
            this._oQRCode = new ht(function(t, e) {
                for (var o = 1, i = lt(t), r = 0, n = st.length; r <= n; r++) {
                    var a = 0;
                    switch (e) {
                    case Z.L:
                        a = st[r][0];
                        break;
                    case Z.M:
                        a = st[r][1];
                        break;
                    case Z.Q:
                        a = st[r][2];
                        break;
                    case Z.H:
                        a = st[r][3]
                    }
                    if (i <= a)
                        break;
                    o += 1
                }
                if (o > st.length)
                    throw new Error("Too long data");
                return o
            }(t, this._htOption.correctLevel),this._htOption.correctLevel),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            this._oDrawing.draw(this._oQRCode),
            this.makeImage()
        }
        ,
        t.prototype.makeImage = function() {
            "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
        }
        ,
        t.prototype.clear = function() {
            this._oDrawing.clear()
        }
        ,
        t.CorrectLevel = Z,
        t
    }();
    function At(t) {
        try {
            return JSON.stringify(t)
        } catch (t) {
            return ""
        }
    }
    function Ct(t) {
        try {
            return JSON.parse(t)
        } catch (t) {
            return {}
        }
    }
    var bt = "TxpCreativePlayer-rfid"
      , Et = "TxpCreativePlayer-vid-url"
      , It = "frequency_control_data"
      , Tt = "TxpCreativePlayer-request-mid-count"
      , wt = function(t) {
        var e = new RegExp("(?:^|;+|\\s+)".concat(t, "=([^;]*)"))
          , o = document.cookie.match(e);
        return o ? o[1] : ""
    }
      , Lt = ["width", "height", "left", "right", "top", "bottom"]
      , Pt = "txp_none"
      , Dt = {}
      , Nt = 1
      , Ot = function(t, e) {
        if (!(null == e ? void 0 : e.trim()))
            return !1;
        var o = e.split(" ")
          , i = t.className.split(" ")
          , r = !0;
        return o.forEach((function(t) {
            return !(!t || -1 !== i.indexOf(t)) && (r = !1,
            !0)
        }
        )),
        r
    }
      , St = function(t, e) {
        if (t && (null == e ? void 0 : e.trim()))
            return e.split(" ").forEach((function(e) {
                !function(t, e) {
                    if (Ot(t, e)) {
                        var o = t.className.split(" ")
                          , i = o.indexOf(e);
                        o.splice(i, 1);
                        var r = t;
                        r.className = o.join(" "),
                        r.className
                    }
                }(t, e)
            }
            )),
            t.className
    }
      , Rt = function(t, e) {
        if (!t)
            return "";
        if (!e || Ot(t, e))
            return t.className;
        var o = t;
        if (!t.className || 0 === t.className.length)
            return o.className = e,
            e;
        var i = t.className.split(" ");
        return i.push(e),
        o.className = i.join(" "),
        t.className
    }
      , kt = function(t, e, o, i) {
        if (void 0 === i && (i = !1),
        "function" == typeof t.removeEventListener)
            t.removeEventListener(e, o, i);
        else if ("function" == typeof t.detachEvent)
            t.detachEvent("on".concat(e), o, i);
        else {
            t["on".concat(e)] = null
        }
    }
      , Mt = function(t) {
        return Object.entries(t).map((function(t) {
            var e = t[0]
              , o = t[1];
            return "".concat(e, ": ").concat(o, ";")
        }
        )).join("")
    }
      , Vt = function(t, e, o) {
        if (!t)
            return "";
        var i = t;
        return e ? void 0 === o ? i.getAttribute(e) : (i.setAttribute(e, o),
        o) : ""
    }
      , Ut = function(t, e) {
        t && e && t.removeAttribute(e)
    }
      , Bt = function(t, e, o) {
        if (!t || !e)
            return "";
        if (void 0 === o && "string" == typeof e) {
            var i = {};
            try {
                i = document.defaultView.getComputedStyle(t, null)
            } catch (e) {
                i = t.currentStyle
            }
            return i[e]
        }
        if ("object" == typeof e) {
            var r = e
              , n = t;
            Object.entries(r).forEach((function(t) {
                var e = t[0]
                  , o = t[1]
                  , i = o;
                Lt.includes(e) && "number" == typeof o && (i = "".concat(o, "px")),
                n.style[e] = i
            }
            ))
        }
        "string" == typeof e && "string" == typeof o && (t.style[e] = /width|height|left|right|top|bottom/i.test(e) && "number" == typeof o ? "".concat(o, "px") : o)
    }
      , zt = Rt
      , Ht = St
      , $t = function(t) {
        t && Rt(t, Pt)
    }
      , Kt = function(t) {
        St(t, Pt)
    }
      , Gt = function(t, e, o, i) {
        if (void 0 === i && (i = !1),
        t && (function(t) {
            if (t.zid)
                return t.zid;
            Nt += 1,
            t.zid = Nt
        }(t),
        e && o)) {
            var r = function(t, e, o) {
                var i = t.zid
                  , r = {
                    evt: e
                };
                return Dt[i] || (Dt[i] = {}),
                r.cb = function(t) {
                    o(t)
                }
                ,
                Dt[i][e] || (Dt[i][e] = []),
                Dt[i][e].push(r),
                r
            }(t, e, o);
            if ("function" == typeof t.addEventListener)
                t.addEventListener(e, r.cb, i);
            else if ("function" == typeof t.attachEvent)
                t.attachEvent(e, r.cb, i);
            else {
                t["on".concat(e)] = r.cb
            }
        }
    }
      , qt = function(t, e, o, i) {
        if (void 0 === i && (i = !1),
        t && e)
            if (2 === arguments.length) {
                var r = function(t, e) {
                    var o = t.zid;
                    return o && Dt[o] ? Dt[o][e] : []
                }(t, e) || [];
                r.forEach((function(e) {
                    kt(t, e.evt, e.cb, !1)
                }
                )),
                function(t, e) {
                    var o = t.zid;
                    o && Dt[o] && (e ? delete Dt[o][e] : delete Dt[o])
                }(t, e)
            } else
                arguments.length > 2 && kt(t, e, o, i)
    }
      , Yt = function(t, e) {
        var o = t;
        if (o)
            return void 0 !== e && (o.innerText = e),
            o.innerText
    }
      , Ft = function(t, e) {
        var o = t;
        if (o)
            return void 0 !== e && (o.innerHTML = e),
            o.innerHTML
    }
      , Wt = function(t, e) {
        var o = e.hotArea
          , i = e.size
          , r = null != o ? o : {}
          , n = r.height_rate
          , a = void 0 === n ? 0 : n
          , s = r.margin_bottom_rate
          , d = void 0 === s ? 0 : s
          , l = r.margin_left_rate
          , c = void 0 === l ? 0 : l
          , p = r.margin_right_rate
          , u = void 0 === p ? 0 : p
          , h = {
            position: "absolute",
            left: "".concat(Math.round(i.width * c), "px"),
            right: "".concat(Math.round(i.width * u), "px"),
            bottom: "".concat(Math.round(i.height * d), "px"),
            height: "".concat(Math.round(i.height * a), "px"),
            display: "block",
            cursor: "pointer",
            "pointer-events": "auto"
        };
        t.style.cssText = Mt(h)
    }
      , jt = function() {
        function t() {
            this.eventsMap = {}
        }
        return t.prototype.on = function(t, e) {
            var o = this;
            t.split(",").forEach((function(t) {
                o.eventsMap[t] || (o.eventsMap[t] = []),
                o.eventsMap[t].push(e)
            }
            ))
        }
        ,
        t.prototype.off = function(t, e) {
            var o = this;
            t.split(",").forEach((function(t) {
                o.removeListener(t, e)
            }
            ))
        }
        ,
        t.prototype.emit = function(t) {
            for (var e = this, o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
            var r = [];
            this.eventsMap[t] && this.eventsMap[t].slice().forEach((function(i) {
                try {
                    r.push(i.apply(e, o))
                } catch (o) {
                    r.push(null),
                    e.processError(o, t)
                }
            }
            ));
            return r
        }
        ,
        t.prototype.getEvents = function(t) {
            return this.eventsMap[t] || []
        }
        ,
        t.prototype.removeAllListeners = function() {
            this.eventsMap = {}
        }
        ,
        t.prototype.processError = function(t, e) {}
        ,
        t.prototype.removeListener = function(t, e) {
            var o;
            if (void 0 !== e) {
                var i = null === (o = this.eventsMap[t]) || void 0 === o ? void 0 : o.findIndex((function(t) {
                    return t === e
                }
                ));
                i > -1 && this.eventsMap[t].splice(i, 1)
            } else
                this.eventsMap[t] = []
        }
        ,
        t
    }();
    function Qt() {
        try {
            var t = localStorage.getItem(It);
            return t ? JSON.parse(t) : {}
        } catch (t) {}
        return {}
    }
    function Zt(t) {
        localStorage.setItem(It, JSON.stringify(t))
    }
    var Xt = function(t, e) {
        var o, i = null == e ? void 0 : e[t];
        if (i) {
            var r = Qt();
            null === (o = i.ad_frequency_control_info_list) || void 0 === o || o.forEach((function(t) {
                var e = t.ad_frequency_key;
                e && (r[e] || (r[e] = {
                    ad_frequency_control_time_list: []
                }),
                r[e].ad_frequency_control_time_list.push(Math.floor(Date.now() / 1e3)))
            }
            )),
            Zt(r)
        }
    }
      , Jt = function(t) {
        var e = Qt()
          , o = !1;
        Object.values(t).forEach((function(t) {
            var i;
            null === (i = t.ad_frequency_control_info_list) || void 0 === i || i.forEach((function(t) {
                var i, r, n = t.ad_frequency_key, a = t.expireTime;
                if (n && a && (null === (r = null === (i = e[n]) || void 0 === i ? void 0 : i.ad_frequency_control_time_list) || void 0 === r ? void 0 : r.length)) {
                    var s = e[n].ad_frequency_control_time_list.length;
                    e[n].ad_frequency_control_time_list = e[n].ad_frequency_control_time_list.filter((function(t) {
                        return t >= a
                    }
                    )),
                    o || e[n].ad_frequency_control_time_list.length === s || (o = !0)
                }
            }
            ))
        }
        )),
        Object.entries(e).forEach((function(t) {
            var i, r = t[0];
            (null === (i = t[1].ad_frequency_control_time_list) || void 0 === i ? void 0 : i.length) || (delete e[r],
            o = !0)
        }
        )),
        o && Zt(e)
    };
    function te(t, e) {
        if (0 === e)
            return t;
        var o = t.lastIndexOf(".");
        return "".concat(t.substr(0, o), ".").concat(e).concat(t.substring(o))
    }
    function ee(t, e, o, i) {
        var r = [];
        return t.ui.forEach((function(t) {
            if (t.url) {
                var n = {};
                t.url && -1 === t.url.indexOf("".concat(e, ".flv")) && -1 === t.url.indexOf("".concat(e, ".mp4")) ? n.url = t.url + o : n.url = t.url,
                t.vt && (n.vt = Math.floor(t.vt));
                var a = n.url.indexOf("?") > -1 ? "&" : "?";
                n.url += "".concat(a, "guid=").concat(i.guid, "&sdtfrom=&vkey=").concat(i.vkey),
                r.push(n.url)
            }
        }
        )),
        r
    }
    !function() {
        var t, e, o, i, r, n = 1836, a = -8290, s = 2174, d = -2285, l = 3198, c = 5906, p = 8126, u = -3571, h = 2249, f = -693, v = -327, m = -1731, y = 1765, g = -5346, _ = -4080, x = 7512, A = -496, C = 2007, b = -1741, E = 700, I = -137, T = 8366, w = -6006, L = 9095, P = 2829, D = -6612, N = 2907, O = -3683, S = 8972, R = 5031, k = -2667, M = 3738, V = 4510, U = 6428, B = -4870, z = -5763, H = -132, $ = 9425, K = 9587, G = -3620, q = -955, Y = 9508, F = -7940, W = -6629, j = 5513, Q = 5977, Z = -4547, X = -3840, J = -2175, tt = 8487, et = -6720, ot = 6747, it = 6090, rt = -9874, nt = -6246, at = 9031, st = 2239, dt = -8467, lt = -955, ct = -2579, pt = -2673, ut = -8067, ht = -359, ft = -7307, vt = 291, mt = -5270, yt = -3336, gt = -1623, _t = 7936, xt = 3769, At = -239, Ct = 5156, bt = 9703, Et = 2034, It = 4093, Tt = -5537, wt = -657, Lt = 6972, Pt = -517, Dt = 5772, Nt = -3763, Ot = 8444, St = -4631, Rt = -1401, kt = 7370, Mt = -1755, Vt = -2468, Ut = 709, Bt = -7253, zt = 8815, Ht = -7188, $t = 2123, Kt = 1655, Gt = -4280, qt = -8940, Yt = Yt || function(t, e) {
            var o = {}
              , i = o.a = {}
              , r = function() {}
              , d = i.b = {
                c: function(t) {
                    for (var e = "", o = 0; o < 4; o++)
                        e += String.fromCharCode(n + 9807 - 9295 ^ "ॅूॅक़".charCodeAt(o));
                    r.prototype = this;
                    var i = new r;
                    return t && i.d(t),
                    i.hasOwnProperty(e) || (i.init = function() {
                        i.$super.init.apply(this, arguments)
                    }
                    ),
                    i.init.prototype = i,
                    i.$super = this,
                    i
                },
                create: function() {
                    var t = this.c();
                    return t.init.apply(t, arguments),
                    t
                },
                init: function() {},
                d: function(t) {
                    for (var e = "", o = 0; o < 8; o++)
                        e += String.fromCharCode(778 ^ ";͙ͥ;͸ͣͤͭ".charCodeAt(o));
                    for (var i in t)
                        t.hasOwnProperty(i) && (this[i] = t[i]);
                    t.hasOwnProperty(e) && (this.toString = t.toString)
                },
                e: function() {
                    return this.init.prototype.c(this)
                }
            }
              , p = i.f = d.c({
                init: function(t, e) {
                    t = this.g = t || [],
                    this.h = null != e ? e : (-2630 + a + 10924) * t.length
                },
                toString: function(t) {
                    return (t || h).i(this)
                },
                concat: function(t) {
                    var e = this.g
                      , o = t.g
                      , i = this.h;
                    if (t = t.h,
                    this.j(),
                    i % (s + -269 + -4213 + 2312))
                        for (var r = 0; r < t; r++)
                            e[i + r >>> 2] |= (o[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % (-9975 + s + -4490 + 12295) * 8;
                    else if (65535 < o.length)
                        for (r = 0; r < t; r += 4)
                            e[i + r >>> 2] = o[r >>> 2];
                    else
                        e.push.apply(e, o);
                    return this.h += t,
                    this
                },
                j: function() {
                    var e = this.g
                      , o = this.h;
                    e[o >>> 8517 + n + -2630 - 7721] &= n + 8309 + -4849 + 4294961999 << 32 - (n + -8270 + 6442) * (o % 4),
                    e.length = t.ceil(o / 4)
                },
                e: function() {
                    var t = d.e.call(this);
                    return t.g = this.g.slice(0),
                    t
                },
                random: function(e) {
                    for (var o = [], i = 0; i < e; i += 4)
                        o.push(4294967296 * t.random() | 0);
                    return new p.init(o,e)
                }
            })
              , u = o.k = {}
              , h = u.l = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(368 ^ "".charCodeAt(o));
                    var i = t.g;
                    t = t.h;
                    for (var r = [], n = 0; n < t; n++) {
                        var a = i[n >>> 2] >>> 24 - n % (l + 5624 - 8818) * 8 & 255;
                        r.push((a >>> 4).toString(16)),
                        r.push((15 & a).toString(16))
                    }
                    return r.join(e)
                },
                parse: function(t) {
                    for (var e = t.length, o = [], i = 0; i < e; i += 2)
                        o[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new p.init(o,e / 2)
                }
            }
              , f = u.m = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(2238 ^ "".charCodeAt(o));
                    var i = t.g;
                    t = t.h;
                    for (var r = [], n = 0; n < t; n++)
                        r.push(String.fromCharCode(i[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                    return r.join(e)
                },
                parse: function(t) {
                    for (var e = t.length, o = [], i = c - 5906; i < e; i++)
                        o[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new p.init(o,e)
                }
            }
              , v = u.n = {
                i: function(t) {
                    for (var e = "", o = 0, i = "ØôùóúçøðñµÀÁÓ¸­µñôáô"; o < 20; o++)
                        e += String.fromCharCode(149 ^ i.charCodeAt(o));
                    try {
                        return decodeURIComponent(escape(f.i(t)))
                    } catch (t) {
                        throw Error(e)
                    }
                },
                parse: function(t) {
                    return f.parse(unescape(encodeURIComponent(t)))
                }
            }
              , m = i.o = d.c({
                p: function() {
                    this.q = new p.init,
                    this.r = n - 1836
                },
                s: function(t) {
                    for (var e = "", o = 0; o < 6; o++)
                        e += String.fromCharCode(4052 ^ "ྦྷྠྦ྽ྺླ".charCodeAt(o));
                    e == typeof t && (t = v.parse(t)),
                    this.q.concat(t),
                    this.r += t.h
                },
                t: function(e) {
                    var o = this.q
                      , i = o.g
                      , r = o.h
                      , n = this.u
                      , a = r / (4 * n);
                    if (e = (a = e ? t.ceil(a) : t.max((0 | a) - this.v, 0)) * n,
                    r = t.min(4 * e, r),
                    e) {
                        for (var s = 0; s < e; s += n)
                            this.w(i, s);
                        s = i.splice(0, e),
                        o.h -= r
                    }
                    return new p.init(s,r)
                },
                e: function() {
                    var t = d.e.call(this);
                    return t.q = this.q.e(),
                    t
                },
                v: 0
            });
            i.x = m.c({
                y: d.c(),
                init: function(t) {
                    this.y = this.y.c(t),
                    this.p()
                },
                p: function() {
                    m.p.call(this),
                    this.z()
                },
                A: function(t) {
                    return this.s(t),
                    this.t(),
                    this
                },
                B: function(t) {
                    return t && this.s(t),
                    this.C()
                },
                u: 16,
                D: function(t) {
                    return function(e, o) {
                        return new t.init(o).B(e)
                    }
                },
                F: function(t) {
                    return function(e, o) {
                        return new y.HMAC.init(t,o).B(e)
                    }
                }
            });
            var y = o.G = {};
            return o
        }(Math);
        function Ft(t) {
            return Wt.call(this, j + 2097 + 8214 - 15822, t)
        }
        function Wt(t) {
            for (var e = "", o = -8432 + Z + 12979; o < 1; o++)
                String.fromCharCode(X + J + tt - 50 ^ "ऊ".charCodeAt(o));
            for (var i = "", r = 0; r < 1; r++)
                String.fromCharCode(w + 3326 + 4681 ^ "ޭ".charCodeAt(r));
            for (var d = "", p = 0; p < 1; p++)
                String.fromCharCode(et + O + l + 8449 ^ "Ҡ".charCodeAt(p));
            for (var C = "", k = 0; k < 1; k++)
                String.fromCharCode(I + -5316 + 8904 ^ "ഇ".charCodeAt(k));
            for (var j = "", jt = ot + 3628 + it - 16465; jt < 1; jt++)
                String.fromCharCode(146 + tt + -1434 - 5788 ^ "׿".charCodeAt(jt));
            for (var Qt = "", Zt = -1434 + rt + 11308; Zt < 1; Zt++)
                String.fromCharCode(2260 ^ "ࢨ".charCodeAt(Zt));
            for (var Xt = "", Jt = 0; Jt < 1; Jt++)
                String.fromCharCode(2890 ^ "ଶ".charCodeAt(Jt));
            for (var te = "", ee = nt + 6246; ee < 10; ee++)
                String.fromCharCode(-5316 + G + at + 358 ^ "ƨƢǶƦǶƧǵǱƧƤ".charCodeAt(ee));
            for (var oe = "", ie = st + 146 + 4448 - 6833; ie < 1; ie++)
                String.fromCharCode(2564 ^ "੸".charCodeAt(ie));
            for (var re = "", ne = dt + 4448 + 4019; ne < 1; ne++)
                String.fromCharCode(2096 ^ "ࡌ".charCodeAt(ne));
            for (var ae = "", se = lt + -3155 + -9555 + 13665; se < 1; se++)
                String.fromCharCode(b + -3155 + 6442 ^ "ٶ".charCodeAt(se));
            for (var de = "", le = ct + 2579; le < 1; le++)
                String.fromCharCode(P + 9851 - 9876 ^ "ઈ".charCodeAt(le));
            for (var ce = "", pe = 0; pe < 1; pe++)
                String.fromCharCode(G + 4223 ^ "ȧ".charCodeAt(pe));
            for (var ue = "", he = 0; he < 1; he++)
                String.fromCharCode(pt + b + 9851 - 4347 ^ "о".charCodeAt(he));
            for (var fe = "", ve = 0; ve < 1; ve++)
                String.fromCharCode(ut + R + Y - 4523 ^ "ߡ".charCodeAt(ve));
            for (var me = "", ye = -215 + D + E + 6127; ye < 1; ye++)
                String.fromCharCode(889 ^ "̅".charCodeAt(ye));
            for (var ge = "", _e = ht + -6842 + 7201; _e < 0; _e++)
                String.fromCharCode(x + ft + 3363 ^ "".charCodeAt(_e));
            for (var xe = "", Ae = $ + vt + mt - 4446; Ae < 0; Ae++)
                String.fromCharCode(H + _ + 4989 ^ "".charCodeAt(Ae));
            for (var Ce = "", be = -7878 + B + _ + 16828; be < 0; be++)
                String.fromCharCode(3628 + yt + 2321 ^ "".charCodeAt(be));
            for (var Ee = "", Ie = gt + _t + xt - 10082; Ie < 4; Ie++)
                String.fromCharCode(At + 5817 - 5364 ^ "´¹²¯".charCodeAt(Ie));
            for (var Te = "", we = U + v + -1665 - 4436; we < 4; we++)
                String.fromCharCode(Ct + 146 + -4109 + 529 ^ "ۘە۞ۃ".charCodeAt(we));
            for (var Le = "", Pe = bt + 9456 - 19159; Pe < 4; Pe++)
                String.fromCharCode(1542 ^ "٨٩٨٣".charCodeAt(Pe));
            for (var De = "", Ne = q + W + M + 3846; Ne < 2; Ne++)
                String.fromCharCode(168 ^ "ÁÌ".charCodeAt(Ne));
            for (var Oe = "", Se = F + 7940; Se < 3; Se++)
                String.fromCharCode(1698 ^ "ۆۋ۔".charCodeAt(Se));
            for (var Re = "", ke = 0, Me = "ଶଋ୑୞ଈ଍଍୑୙ଶ"; ke < 10; ke++)
                String.fromCharCode(9964 + Et + -1265 - 7812 ^ Me.charCodeAt(ke));
            for (var Ve = "", Ue = 0; Ue < 6; Ue++)
                String.fromCharCode(1454 ^ "יׇ׀׊ׁי".charCodeAt(Ue));
            switch (t) {
            case 0:
                var Be = [];
                window[Ve] === window ? Be.push(c + N + It - 12906) : Be.push(Tt + 5538);
                try {
                    var ze = Re + Math.floor(1e7 * Math.random())
                      , He = document.createElement(Oe);
                    He.setAttribute(De, ze),
                    He.style.La = Le,
                    (document.body || document.getElementsByTagName(Te)[0]).appendChild(He),
                    document.getElementById(ze) ? Be.push(0) : Be.push(1),
                    (document.body || document.getElementsByTagName(Ee)[wt + n + Lt - 8151]).removeChild(He)
                } catch (t) {
                    Be.push(-1361 + Pt + 1879)
                }
                return Be.join(Ce);
            case 1:
                var $e = arguments[g + 5347]
                  , Ke = new Yt.a.f.init([1332468387, -1641050960, Dt + S + 2136881301, -1629555948],pt + 2689)
                  , Ge = new Yt.a.f.init([Nt + y + 22041281, V + Ot + 1457907509, 776125350, -(-7878 + z + -5975 + 1942018983)],St + 4647);
                return Yt.Ga.$($e, Ke, {
                    ra: Ge,
                    ba: Yt.ba.la,
                    qa: Yt.na.ma
                }).xa.toString().toUpperCase();
            case Rt + kt - 5967:
                return arguments[Mt + -1708 + Vt + 5932] ? Ze.length > 8011 + T - 16329 ? Ze.substr(6968 + Ut - 7677, 48) : Ze : xe;
            case 3:
                var qe = window.document.URL
                  , Ye = window.navigator.userAgent.toLowerCase()
                  , Fe = ge;
                window.document.referrer.length > -11220 + Bt + 18473 && window.document.referrer;
                try {
                    Fe.length == zt - 8815 && opener.location.href.length > 0 && opener.location.href
                } catch (t) {}
                var We = window.navigator.appCodeName
                  , je = window.navigator.appName
                  , Qe = window.navigator.platform;
                return Ft(qe),
                Ft(Fe),
                qe + me + Ft(Ye) + fe + Fe + ue + We + ce + je + de + Qe;
            case Ht + L + K - 11490:
                var Ze = arguments[1]
                  , Xe = $t + -1434 - 689;
                if (Ze.length == h + K + Kt - 13491)
                    return Xe;
                for (a = Gt + 1003 + 4059 - 782; a < Ze.length; a++) {
                    var Je = Ze.charCodeAt(a);
                    0 | (Xe << 8276 + s - 10445) - Xe + Je
                }
                return Xe;
            case qt + 8945:
                var to = ae + arguments[A + a + 8787] + re + arguments[2] + oe + te + Xt + arguments[3] + Qt + arguments[f + x + u - 3244] + j + arguments[_ + Tt + -1658 + 11280] + C + function() {
                    return Wt.call(this, Q - 5974)
                }() + d + function() {
                    return Wt.call(this, 0)
                }() + i;
                return function(t) {
                    return Wt.call(this, 1, t)
                }(e + function(t) {
                    return Wt.call(this, m + 1735, t)
                }(to) + to)
            }
        }
        (function() {
            for (var t = "", e = 0, o = "±²³´µ¶·¸¹º»¼½¾¿ ¡¢£¤¥¦§¨©ªàáâãäåæçèéûÿí"; e < 65; e++)
                t += String.fromCharCode(208 ^ o.charCodeAt(e));
            var i = Yt
              , r = i.a.f;
            i.k.H = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(4077 ^ "".charCodeAt(o));
                    var i = t.g
                      , r = t.h
                      , n = this.I;
                    t.j(),
                    t = [];
                    for (var a = 0; a < r; a += 3)
                        for (var s = (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (i[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | i[a + 2 >>> 2] >>> u + 3595 - (a + 2) % 4 * 8 & 255, d = 0; 4 > d && a + .75 * d < r; d++)
                            t.push(n.charAt(s >>> 6 * (3 - d) & 63));
                    if (i = n.charAt(64))
                        for (; t.length % 4; )
                            t.push(i);
                    return t.join(e)
                },
                parse: function(t) {
                    var e = t.length
                      , o = this.I;
                    (i = o.charAt(64)) && -1 != (i = t.indexOf(i)) && (e = i);
                    for (var i = [], n = 0, a = 0; a < e; a++)
                        if (a % 4) {
                            var s = o.indexOf(t.charAt(a - 1)) << a % 4 * 2
                              , d = o.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                            i[n >>> 2] |= (s | d) << 24 - n % 4 * 8,
                            n++
                        }
                    return r.create(i, n)
                },
                I: t
            }
        }
        )(),
        function(t) {
            var e = 1864
              , o = -6103
              , i = -5750
              , r = -5616
              , a = -7555
              , M = -458
              , V = 1071
              , U = 927
              , B = -2568
              , z = 6326
              , H = -4204
              , $ = 4918
              , K = 7574
              , G = 6160
              , q = 855
              , Y = -9137
              , F = 2297
              , W = -9619
              , j = -8866
              , Q = -6091
              , Z = -7050
              , X = -1233
              , J = -7874
              , tt = 5847
              , et = 5062
              , ot = -4552
              , it = 4635;
            function rt(t, e, o, i, r, n, a) {
                return ft.call(this, 0, t, e, o, i, r, n, a)
            }
            function nt(t, e, o, i, r, n, a) {
                return ft.call(this, 1, t, e, o, i, r, n, a)
            }
            function at(t, e, o, i, r, n, a) {
                return ft.call(this, 2, t, e, o, i, r, n, a)
            }
            function st(t, e, o, i, r, n, a) {
                return ft.call(this, 3, t, e, o, i, r, n, a)
            }
            for (var dt = Yt, lt = (pt = dt.a).f, ct = pt.x, pt = dt.G, ut = [], ht = 0; 64 > ht; ht++)
                ut[ht] = 4294967296 * t.abs(t.sin(ht + 1)) | 0;
            function ft(t) {
                switch (t) {
                case 0:
                    var e = arguments[1]
                      , o = arguments[$ + 7592 + 7592 - 20100]
                      , i = arguments[G + q - 7012]
                      , n = arguments[K + Y + 1567]
                      , s = arguments[-1789 + F - 503]
                      , l = arguments[W + j + d + 20776];
                    return ((e = e + (o & i | ~o & n) + s + arguments[7]) << l | e >>> 32 - l) + o;
                case Q + r + 11708:
                    return ((e = (e = arguments[Z + 7051]) + ((o = arguments[2]) & (n = arguments[O + S + R - 10316]) | (i = arguments[z + L + -9220 - 6198]) & ~n) + (s = arguments[-5315 + a + 12875]) + arguments[7]) << (l = arguments[6]) | e >>> -9475 + X + L + 1645 - l) + o;
                case M + 460:
                    return ((e = (e = arguments[C + m - 275]) + ((o = arguments[2]) ^ (i = arguments[J + -6801 + 14678]) ^ (n = arguments[z + V - 7393])) + (s = arguments[B + tt + 36 - 3310]) + arguments[7]) << (l = arguments[p + P - 10949]) | e >>> 32 - l) + o;
                case et + ot + k + 2160:
                    return ((e = (e = arguments[1]) + ((i = arguments[C + U - 2931]) ^ ((o = arguments[2]) | ~(n = arguments[4]))) + (s = arguments[it - 4630]) + arguments[7]) << (l = arguments[P + -6978 + 4155]) | e >>> -8328 + H + -2734 + 15298 - l) + o
                }
            }
            pt = pt.J = ct.c({
                z: function() {
                    this.K = new lt.init([1732584193, 4023233417, 2562383102, 9348 + u + 7556 + 271720545])
                },
                w: function(t, d) {
                    for (var p = 0; 16 > p; p++) {
                        var u = t[R = d + p];
                        t[R] = 16711935 & (u << 8 | u >>> r + 5640) | 4278255360 & (u << 24 | u >>> 8)
                    }
                    p = this.K.g;
                    var O, S, R = t[d + 0], k = (u = t[d + 1],
                    t[d + (h - 2247)]), $ = t[d + 3], K = t[d + 4], G = t[d + 5], q = t[d + (r + h + 5624 - 2251)], Y = t[d + 7], F = t[d + 8], W = t[d + 9], j = t[d + 10], Q = t[d + 11], Z = t[d + 12], X = t[d + (o + s + 3942)], J = t[d + 14], tt = t[d + 15], et = p[-1465 + n - 371], ot = st(ot = st(ot = st(ot = st(ot = at(ot = at(ot = at(ot = at(ot = nt(ot = nt(ot = nt(ot = nt(ot = rt(ot = rt(ot = rt(ot = rt(ot = p[1], S = rt(S = p[2], O = rt(O = p[3], et = rt(et, ot, S, O, R, 7, ut[0]), ot, S, u, 12, ut[1]), et, ot, k, 5903 + r - 270, ut[2]), O, et, $, 22, ut[3]), S = rt(S, O = rt(O, et = rt(et, ot, S, O, K, 7, ut[4]), ot, S, G, 12, ut[5]), et, ot, q, 17, ut[6]), O, et, Y, 22, ut[7]), S = rt(S, O = rt(O, et = rt(et, ot, S, O, F, 7, ut[8]), ot, S, W, 12, ut[9]), et, ot, j, 4264 + r + 1369, ut[-3423 + f + 4126]), O, et, Q, 22, ut[11]), S = rt(S, O = rt(O, et = rt(et, ot, S, O, Z, c - 5899, ut[12]), ot, S, X, 12, ut[f + -2344 + 3050]), et, ot, J, 17, ut[1227 + a + 6342]), O, et, tt, 22, ut[M + -1821 + 806 + 1488]), S = nt(S, O = nt(O, et = nt(et, ot, S, O, u, -7413 + r + 13034, ut[16]), ot, S, q, 9, ut[e + v + -7697 + 6177]), et, ot, Q, m + -5305 + 7539 - 489, ut[18]), O, et, R, y + -571 + 6443 - 7617, ut[19]), S = nt(S, O = nt(O, et = nt(et, ot, S, O, G, 5, ut[V - 1051]), ot, S, j, 9, ut[21]), et, ot, tt, 14, ut[g + i + -8178 + 19296]), O, et, K, 20, ut[-11385 + _ + 15488]), S = nt(S, O = nt(O, et = nt(et, ot, S, O, W, 5, ut[24]), ot, S, J, 9, ut[25]), et, ot, $, -912 + x + 4359 - 10945, ut[U - 901]), O, et, F, 12598 + B - 10010, ut[27]), S = nt(S, O = nt(O, et = nt(et, ot, S, O, X, 5, ut[-4202 + z - 2096]), ot, S, k, 9, ut[29]), et, ot, Y, A + r + z - 200, ut[30]), O, et, Z, B + 9955 - 7367, ut[31]), S = at(S, O = at(O, et = at(et, ot, S, O, G, 4, ut[32]), ot, S, F, 11, ut[33]), et, ot, Q, A + 9362 - 8850, ut[34]), O, et, J, f + 716, ut[35]), S = at(S, O = at(O, et = at(et, ot, S, O, u, 4, ut[36]), ot, S, K, 11, ut[37]), et, ot, Y, 16, ut[38]), O, et, j, 23, ut[39]), S = at(S, O = at(O, et = at(et, ot, S, O, X, r + M + C + 4071, ut[40]), ot, S, R, b + 1752, ut[41]), et, ot, $, 16, ut[42]), O, et, q, 23, ut[43]), S = at(S, O = at(O, et = at(et, ot, S, O, W, 4, ut[44]), ot, S, Z, 11, ut[45]), et, ot, tt, _ + 4096, ut[46]), O, et, k, 23, ut[47]), S = st(S, O = st(O, et = st(et, ot, S, O, R, i + E + 5056, ut[I + 185]), ot, S, Y, x - 7502, ut[49]), et, ot, J, 4376 + T + 3667 - 16394, ut[50]), O, et, G, w + -983 + 7010, ut[51]), S = st(S, O = st(O, et = st(et, ot, S, O, Z, 42 + h + 656 - 2941, ut[52]), ot, S, $, 10, ut[53]), et, ot, j, 2553 + L + -8569 - 3064, ut[54]), O, et, u, 21, ut[3412 + g + 1989]), S = st(S, O = st(O, et = st(et, ot, S, O, F, 6, ut[56]), ot, S, tt, 2260 + M - 1792, ut[-6071 + P + 3299]), et, ot, q, 15, ut[-990 + H + 5252]), O, et, X, 4121 + l - 7298, ut[59]), S = st(S, O = st(O, et = st(et, ot, S, O, K, 6, ut[D + 6672]), ot, S, Q, 10, ut[61]), et, ot, k, 15, ut[62]), O, et, W, 21, ut[63]);
                    p[N - 2907] = p[0] + et | 0,
                    p[1] = p[1] + ot | 0,
                    p[2] = p[2] + S | 0,
                    p[3] = p[3] + O | 0
                },
                C: function() {
                    var e = this.q
                      , o = e.g
                      , i = (6876 + M + -335 - 6075) * this.r
                      , r = 8 * e.h;
                    o[r >>> 8761 + $ + 1268 - 14942] |= 128 << 24 - r % 32;
                    var n = t.floor(i / 4294967296);
                    for (o[15 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                    o[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                    e.h = 4 * (o.length + 1),
                    this.t(),
                    o = (e = this.K).g,
                    i = 0; 4 > i; i++)
                        r = o[i],
                        o[i] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 2244 + K + 2814 - 12624);
                    return e
                },
                e: function() {
                    var t = ct.e.call(this);
                    return t.K = this.K.e(),
                    t
                }
            }),
            dt.J = ct.D(pt),
            dt.L = ct.F(pt)
        }(Math),
        o = (t = (e = Yt).a).b,
        i = t.f,
        r = (t = e.G).M = o.c({
            y: o.c({
                N: 4,
                O: t.J,
                P: 1
            }),
            init: function(t) {
                this.y = this.y.c(t)
            },
            Q: function(t, e) {
                for (var o = (s = this.y).O.create(), r = i.create(), n = r.g, a = s.N, s = s.P; n.length < a; ) {
                    d && o.A(d);
                    var d = o.A(t).B(e);
                    o.p();
                    for (var l = 1; l < s; l++)
                        d = o.B(d),
                        o.p();
                    r.concat(d)
                }
                return r.h = 4 * a,
                r
            }
        }),
        e.M = function(t, e, o) {
            return r.create(o).Q(t, e)
        }
        ,
        Yt.a.R || function(t) {
            var e = (h = Yt).a
              , o = e.b
              , i = e.f
              , r = e.o
              , n = h.k.H
              , a = h.G.M
              , s = e.R = r.c({
                y: o.c(),
                S: function(t, e) {
                    return this.create(this.T, t, e)
                },
                U: function(t, e) {
                    return this.create(this.V, t, e)
                },
                init: function(t, e, o) {
                    this.y = this.y.c(o),
                    this.W = t,
                    this.X = e,
                    this.p()
                },
                p: function() {
                    r.p.call(this),
                    this.z()
                },
                Y: function(t) {
                    return this.s(t),
                    this.t()
                },
                B: function(t) {
                    return t && this.s(t),
                    this.C()
                },
                N: y - 1761,
                Z: 4,
                T: 1,
                V: 2,
                D: function(t) {
                    return {
                        $: function(e, o, i) {
                            for (var r = "", n = 0; n < 6; n++)
                                r += String.fromCharCode(403 ^ "ǠǧǡǺǽǴ".charCodeAt(n));
                            return (r == typeof o ? f : u).$(t, e, o, i)
                        },
                        _: function(e, o, i) {
                            for (var r = "", n = 0; n < 6; n++)
                                r += String.fromCharCode(2219 ^ "ࣘࣟࣙࣂࣅ࣌".charCodeAt(n));
                            return (r == typeof o ? f : u)._(t, e, o, i)
                        }
                    }
                }
            });
            e.aa = s.c({
                C: function() {
                    return this.t(!0)
                },
                u: 1
            });
            var d = h.ba = {}
              , l = function(t, e, o) {
                var i = this.ca;
                i ? this.ca = void 0 : i = this.da;
                for (var r = 0; r < o; r++)
                    t[e + r] ^= i[r]
            }
              , c = (e.ea = o.c({
                S: function(t, e) {
                    return this.fa.create(t, e)
                },
                U: function(t, e) {
                    return this.ga.create(t, e)
                },
                init: function(t, e) {
                    this.ha = t,
                    this.ca = e
                }
            })).c();
            c.fa = c.c({
                ia: function(t, e) {
                    var o = this.ha
                      , i = o.u;
                    l.call(this, t, e, i),
                    o.ja(t, e),
                    this.da = t.slice(e, e + i)
                }
            }),
            c.ga = c.c({
                ia: function(t, e) {
                    var o = this.ha
                      , i = o.u
                      , r = t.slice(e, e + i);
                    o.ka(t, e),
                    l.call(this, t, e, i),
                    this.da = r
                }
            }),
            d = d.la = c,
            c = (h.na = {}).ma = {
                na: function(t, e) {
                    for (var o, r = (o = (o = 4 * e) - t.h % o) << 24 | o << 16 | o << 8 | o, n = [], a = 6180 + P + -1259 - 7750; a < o; a += M + 6428 - 10162)
                        n.push(r);
                    o = i.create(n, o),
                    t.concat(o)
                },
                oa: function(t) {
                    t.h -= 255 & t.g[t.h - 1 >>> 2]
                }
            },
            e.pa = s.c({
                y: s.y.c({
                    ba: d,
                    qa: c
                }),
                p: function() {
                    s.p.call(this);
                    var t = (e = this.y).ra
                      , e = e.ba;
                    if (this.W == this.T)
                        var o = e.S;
                    else
                        o = e.U,
                        this.v = 1;
                    this.sa = o.call(e, this, t && t.g)
                },
                w: function(t, e) {
                    this.sa.ia(t, e)
                },
                C: function() {
                    var t = this.y.qa;
                    if (this.W == this.T) {
                        t.na(this.q, this.u);
                        var e = this.t(!0)
                    } else
                        e = this.t(!0),
                        t.oa(e);
                    return e
                },
                u: 4
            });
            var p = e.ta = o.c({
                init: function(t) {
                    this.d(t)
                },
                toString: function(t) {
                    return (t || this.ua).i(this)
                }
            })
              , u = (d = (h.wa = {}).va = {
                i: function(t) {
                    var e = t.xa;
                    return ((t = t.ya) ? i.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(n)
                },
                parse: function(t) {
                    var e = (t = n.parse(t)).g;
                    if (1398893684 == e[0] && 1701076831 == e[1]) {
                        var o = i.create(e.slice(2, 4));
                        e.splice(0, 4),
                        t.h -= 16
                    }
                    return p.create({
                        xa: t,
                        ya: o
                    })
                }
            },
            e.za = o.c({
                y: o.c({
                    wa: d
                }),
                $: function(t, e, o, i) {
                    i = this.y.c(i);
                    var r = t.S(o, i);
                    return e = r.B(e),
                    r = r.y,
                    p.create({
                        xa: e,
                        Aa: o,
                        ra: r.ra,
                        Ba: t,
                        ba: r.ba,
                        qa: r.qa,
                        u: t.u,
                        ua: i.wa
                    })
                },
                _: function(t, e, o, i) {
                    return i = this.y.c(i),
                    e = this.Ca(e, i.wa),
                    t.U(o, i).B(e.xa)
                },
                Ca: function(t, e) {
                    for (var o = "", i = -8390 + V + 3880; i < 6; i++)
                        o += String.fromCharCode(2150 ^ "ࠕࠒࠔࠏࠈࠁ".charCodeAt(i));
                    return o == typeof t ? e.parse(t, this) : t
                }
            }))
              , h = (h.Da = {}).va = {
                Ea: function(t, e, o, r) {
                    return r || (r = i.random(8)),
                    t = a.create({
                        N: e + o
                    }).Q(t, r),
                    o = i.create(t.g.slice(e), 4 * o),
                    t.h = 4 * e,
                    p.create({
                        Aa: t,
                        ra: o,
                        ya: r
                    })
                }
            }
              , f = e.Fa = u.c({
                y: u.y.c({
                    Da: h
                }),
                $: function(t, e, o, i) {
                    return o = (i = this.y.c(i)).Da.Ea(o, t.N, t.Z),
                    i.ra = o.ra,
                    (t = u.$.call(this, t, e, o.Aa, i)).d(o),
                    t
                },
                _: function(t, e, o, i) {
                    return i = this.y.c(i),
                    e = this.Ca(e, i.wa),
                    o = i.Da.Ea(o, t.N, t.Z, e.ya),
                    i.ra = o.ra,
                    u._.call(this, t, e, o.Aa, i)
                }
            })
        }(),
        function() {
            for (var t = Yt, e = t.a.pa, o = t.G, i = [], r = [], a = [], s = [], d = [], l = [], c = [], p = [], u = [], f = [], v = [], m = 0; 256 > m; m++)
                v[m] = 128 > m ? m << 1 : m << U + 4353 - 10780 ^ -4619 + B + 9772;
            var g = 0
              , _ = 0;
            for (m = 8146 + h + h - 12644; 256 > m; m++) {
                var x = (x = _ ^ _ << 1 ^ _ << n + 7286 + 7286 - 16406 ^ _ << 3 ^ _ << M + 2744 - 6478) >>> 8 ^ 255 & x ^ 7286 + z + -803 - 621;
                i[g] = x,
                r[x] = g;
                var C = v[g]
                  , b = v[C]
                  , E = v[b]
                  , I = 257 * v[x] ^ 16843008 * x;
                a[g] = I << 24 | I >>> 8,
                s[g] = I << 8146 + D - 1518 | I >>> 16,
                d[g] = I << -7226 + A + -8993 + 16723 | I >>> 24,
                l[g] = I,
                I = 16843009 * E ^ 65537 * b ^ (12950 + H - 12561) * C ^ ($ + 6038 + K + 16817958) * g,
                c[x] = I << 24 | I >>> 8,
                p[x] = I << 16 | I >>> 16,
                u[x] = I << T + G - 4738 | I >>> 24,
                f[x] = I,
                g ? (g = C ^ v[v[v[E ^ C]]],
                _ ^= v[v[_]]) : g = _ = 1
            }
            var w = [0, 1, G + 1538 + -9246 + 11330, q + -8064 + -6326 + 15349, 8, -7197 + Y - 2295, 32, 64, 128, 27, 54];
            o = o.Ga = e.c({
                z: function() {
                    for (var t = (o = this.X).g, e = o.h / 4, o = 4 * ((this.Ha = e + 6) + 1), r = this.Ia = [], n = 0; n < o; n++)
                        if (n < e)
                            r[n] = t[n];
                        else {
                            var a = r[n - 1];
                            n % e ? 6 < e && 4 == n % e && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = i[(a = a << 8 | a >>> 24) >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & F + 8195] << 8 | i[255 & a],
                            a ^= w[n / e | 0] << 24),
                            r[n] = r[n - e] ^ a
                        }
                    for (t = this.Ja = [],
                    e = 0; e < o; e++)
                        n = o - e,
                        a = e % 4 ? r[n] : r[n - 4],
                        t[e] = 4 > e || 4 >= n ? a : c[i[a >>> 24]] ^ p[i[a >>> 16 & 255]] ^ u[i[a >>> 8 & 255]] ^ f[i[255 & a]]
                },
                ja: function(t, e) {
                    this.Ka(t, e, this.Ia, a, s, d, l, i)
                },
                ka: function(t, e) {
                    var o = t[e + 1];
                    t[e + 1] = t[e + 3],
                    t[e + 3] = o,
                    this.Ka(t, e, this.Ja, c, p, u, f, r),
                    o = t[e + 1],
                    t[e + 1] = t[e + 3],
                    t[e + 3] = o
                },
                Ka: function(t, e, o, i, r, n, a, s) {
                    for (var d = this.Ha, l = t[e] ^ o[0], c = t[e + 1] ^ o[1], p = t[e + 2] ^ o[2], u = t[e + 3] ^ o[3], h = 4, f = 1; f < d; f++) {
                        var v = i[l >>> 24] ^ r[c >>> 16 & 255] ^ n[p >>> 8 & 255] ^ a[255 & u] ^ o[h++]
                          , m = i[c >>> 24] ^ r[p >>> 16 & 255] ^ n[u >>> 8 & 255] ^ a[255 & l] ^ o[h++]
                          , g = i[p >>> 24] ^ r[u >>> 16 & 255] ^ n[l >>> 8 & y - 1510] ^ a[255 & c] ^ o[h++];
                        u = i[u >>> 24] ^ r[l >>> 16 & 255] ^ n[c >>> -3930 + O + 7621 & 255] ^ a[255 & p] ^ o[h++],
                        l = v,
                        c = m,
                        p = g
                    }
                    v = (s[l >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ o[h++],
                    m = (s[c >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ o[h++],
                    g = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & c]) ^ o[h++],
                    u = (s[u >>> 24] << 9424 + W + -1219 - 1552 | s[l >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & p]) ^ o[h++],
                    t[e] = v,
                    t[e + 1] = m,
                    t[e + 2] = g,
                    t[e + 3] = u
                },
                N: 8
            }),
            t.Ga = e.D(o)
        }()
    }();
    var oe, ie, re = function(t, e) {
        var o, i, r;
        return t && "o" === t.s && (null === (o = t.vl) || void 0 === o ? void 0 : o.vi) && (3 === t.dltype || 8 === t.dltype ? (i = function(t) {
            var e, o, i, r, n, a, s = [], d = null === (o = null === (e = null == t ? void 0 : t.vl) || void 0 === e ? void 0 : e.vi) || void 0 === o ? void 0 : o[0];
            if (null === (r = null === (i = null == d ? void 0 : d.ul) || void 0 === i ? void 0 : i.ui) || void 0 === r ? void 0 : r.length)
                for (var l = void 0, c = 0, p = d.ul.ui.length; c < p; c++)
                    (l = d.ul.ui[c]).url && (null === (n = l.hls) || void 0 === n ? void 0 : n.pt) ? s.push(l.url + l.hls.pt) : 8 === t.dltype && s.push(l.url);
            return 8 === t.dltype && (null == d ? void 0 : d.ul) && (a = d.ul.m3u8),
            {
                urls: s,
                m3u8: a
            }
        }(t),
        r = "hls") : 1 === t.dltype && (i = function(t, e) {
            var o, i, r, n, a, s = [], d = t.vl.vi[0] || null, l = null === (o = d.cl) || void 0 === o ? void 0 : o.fc;
            if (!(null === (i = null == d ? void 0 : d.cl) || void 0 === i ? void 0 : i.ci) && d.fvkey && d.fn && (null === (n = null === (r = d.ul) || void 0 === r ? void 0 : r.ui) || void 0 === n ? void 0 : n.length))
                return {
                    urls: s
                };
            if (!(null === (a = d.cl) || void 0 === a ? void 0 : a.ci) || l !== d.cl.ci.length)
                return {
                    urls: s
                };
            for (var c = {
                vkey: d.fvkey,
                guid: e.guid
            }, p = 0; p < l; p++) {
                var u = te(d.fn, p + 1);
                s = ee(d.ul, d.lnk, u, c);
                break
            }
            return {
                urls: s
            }
        }(t, {
            guid: e
        }),
        r = "mp4")),
        i && r ? Promise.resolve({
            type: r,
            urls: i.urls,
            m3u8: i.m3u8
        }) : Promise.reject()
    };
    function ne(t, e, o) {
        var i = document.createElement("script");
        i.type = "text/javascript",
        i.charset = "UTF-8",
        (null == o ? void 0 : o.crossOrigin) && (i.crossOrigin = o.crossOrigin),
        i.src = t;
        var r = !1;
        if (i.onerror = function(t) {
            r = !0,
            null == e || e({
                src: t.target.src,
                error: {
                    type: "jserror",
                    code: 404
                }
            })
        }
        ,
        i.addEventListener ? i.addEventListener("load", (function() {
            r = !0,
            null == e || e()
        }
        ), !1) : i.attachEvent && i.attachEvent("onreadystatechange", (function() {
            "complete" === window.event.srcElement.readyState && (r = !0,
            null == e || e())
        }
        )),
        null == o ? void 0 : o.doc) {
            var n = document.createElement("base");
            n.href = i.src.match(/.+\//)[0],
            o.doc.getElementsByTagName("head")[0].appendChild(n)
        }
        (null == o ? void 0 : o.dom) ? o.dom.appendChild(i) : document.getElementsByTagName("head")[0].appendChild(i),
        setTimeout((function() {
            var o = !1;
            r || (!o && (null == e || e({
                src: t,
                error: {
                    type: "js timeout",
                    code: 502
                }
            })),
            o = !0)
        }
        ), 5e3)
    }
    !function(t) {
        if (void 0 === t && (t = "lossy"),
        void 0 !== oe)
            return oe;
        var e = new Image
          , o = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        new Promise((function(i) {
            e.onload = function() {
                oe = !0,
                i(!0)
            }
            ,
            e.onerror = function() {
                oe = !1,
                i(!1)
            }
            ,
            e.src = "data:image/webp;base64,".concat(o[t])
        }
        ))
    }(),
    function(t) {
        t.OUT = "out",
        t.IN = "in",
        t.H5 = "H5",
        t.CLIENT = "client"
    }(ie || (ie = {}));
    var ae = function() {
        function t() {
            var t = this;
            this.startTime = Date.now(),
            this.promise = new Promise((function(e, o) {
                t.fn = {
                    resolve: e,
                    reject: o
                }
            }
            ))
        }
        return Object.defineProperty(t.prototype, Symbol.toStringTag, {
            get: function() {
                return this.promise[Symbol.toStringTag]
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.resolve = function(t) {
            this.fn.resolve(t)
        }
        ,
        t.prototype.reject = function(t) {
            this.fn.reject(t)
        }
        ,
        t.prototype.then = function(t, e) {
            return this.promise.then(t, e)
        }
        ,
        t.prototype.catch = function(t) {
            return this.promise.catch(t)
        }
        ,
        t.prototype.finally = function(t) {
            return this.promise.finally(t)
        }
        ,
        t
    }()
      , se = function() {
        function t(t, e) {
            this.storageKey = t,
            this.options = e
        }
        return Object.defineProperty(t.prototype, "storage", {
            get: function() {
                var t;
                return (null === (t = this.options) || void 0 === t ? void 0 : t.useSessionStorage) ? window.sessionStorage : window.localStorage
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.getData = function(t) {
            if (!t && this.storageData)
                return this.storageData;
            try {
                var e = this.storage.getItem(this.storageKey);
                if (e)
                    return this.storageData = JSON.parse(e),
                    this.storageData
            } catch (t) {}
        }
        ,
        t.prototype.setData = function(t) {
            try {
                this.storageData = t;
                var e = JSON.stringify(this.storageData);
                this.storage.setItem(this.storageKey, e)
            } catch (t) {}
        }
        ,
        t.prototype.clear = function() {
            this.storage.removeItem(this.storageKey)
        }
        ,
        t
    }();
    function de(t, e) {
        var o = t
          , i = null
          , r = !0;
        function n() {
            var t = this
              , n = arguments;
            if (r)
                return o.apply(t, n),
                void (r = !1);
            i || (i = window.setTimeout((function() {
                i && (clearTimeout(i),
                i = null),
                o.apply(t, n)
            }
            ), e))
        }
        return n.cancel = function() {
            i && (clearTimeout(i),
            i = null)
        }
        ,
        n
    }
    function le(t) {
        if (null === t)
            return "null";
        var e = typeof t;
        return "object" !== e ? e : t instanceof Array ? "array" : "object"
    }
    function ce(t) {
        var e = le(t);
        return ["null", "undefined"].includes(e) ? [] : "array" === e ? t : [t]
    }
    function pe(t, e) {
        return Object.entries(e).forEach((function(e) {
            var o = e[0]
              , i = e[1]
              , r = le(i);
            ["null", "string", "number", "boolean", "function"].includes(r) ? t[o] = i : ("array" === r && (t[o] = i),
            "object" === r && (t[o] || (t[o] = {}),
            pe(t[o], i)))
        }
        )),
        t
    }
    function ue(t, e) {
        void 0 === e && (e = window.location.href);
        var o, i = new RegExp("(^|&|\\\\?)".concat(t, "=([^&]*)(&|$|#)"));
        return (o = e.match(i)) ? o[2] : ""
    }
    var he, fe = function(t) {
        var e = t.indexOf("?")
          , o = t.substring(e + 1)
          , i = {};
        return o.split("&").forEach((function(t) {
            var e = t.split("=");
            e.length >= 2 && (i[e.shift()] = e.join("="))
        }
        )),
        i
    }, ve = function(t, e) {
        void 0 === e && (e = {});
        var o = t;
        return Object.entries(e).forEach((function(t) {
            var e = t[0]
              , i = t[1];
            o = o.replace(e, i)
        }
        )),
        o
    }, me = function(t, e, o) {
        var i = t;
        return e && (i += (-1 === t.indexOf("?") ? "?" : "&") + function(t, e) {
            var o = [];
            return Object.keys(t).forEach((function(i) {
                var r = t[i];
                o.push("".concat(i, "=").concat(e ? encodeURIComponent(r) : r))
            }
            )),
            o.join("&")
        }(e, o)),
        i
    };
    function ye() {
        var t = URL.createObjectURL(new Blob);
        URL.revokeObjectURL(t);
        var e = t.split("/");
        return e[e.length - 1]
    }
    !function(t) {
        t[t.LessThan = -1] = "LessThan",
        t[t.EqualTo = 0] = "EqualTo",
        t[t.GreaterThan = 1] = "GreaterThan"
    }(he || (he = {}));
    var ge, _e, xe, Ae = 102e5, Ce = new se(Et), be = function(t) {
        var e = {};
        return Object.entries(t).forEach((function(t) {
            var o = t[0]
              , i = t[1];
            i && Date.now() - i.time <= Ae && (e[o] = i)
        }
        )),
        e
    }, Ee = (ge = Ce.getData()) ? be(ge) : {}, Ie = function(t, e, o) {
        var i = ue("fmt", e) || _.SHD
          , r = Ee["".concat(i, "-").concat(t)]
          , n = Date.now();
        return r && n - r.time <= Ae ? r.url : (function(t, e, o) {
            var i = Date.now();
            Ee["".concat(e, "-").concat(t)] = {
                url: o,
                time: i
            },
            Ee = be(Ee),
            Ce.setData(Ee)
        }(t, i, e),
        e)
    };
    !function(t) {
        t[t.PAUSE = 2] = "PAUSE",
        t[t.RESUME = 3] = "RESUME",
        t[t.END = 4] = "END",
        t[t.FAIL = 6] = "FAIL",
        t[t.AUTO_PLAY = 7] = "AUTO_PLAY",
        t[t.UNMUTE = 8] = "UNMUTE",
        t[t.MUTE = 9] = "MUTE",
        t[t.INTERRUPT = 10] = "INTERRUPT",
        t[t.AUTO_REPLAY = 13] = "AUTO_REPLAY"
    }(_e || (_e = {})),
    function(t) {
        t[t.NONE = 0] = "NONE",
        t[t.DOWNLOAD = 1] = "DOWNLOAD",
        t[t.PLAY = 2] = "PLAY",
        t[t.OTHER = 3] = "OTHER"
    }(xe || (xe = {}));
    var Te, we = function() {
        function t(t, e) {
            this.adCore = t,
            this.options = e,
            this.logger = this.adCore.logger.createLogger("AdInfoReporter"),
            this.reportedSet = new Set,
            this.delayReportSet = new Set;
            var o = e.report;
            this.effectReportList = this.formatToReportList(null == o ? void 0 : o[h.EFFECT]),
            this.clickReportList = this.formatToReportList(null == o ? void 0 : o[h.CLICK]),
            this.pluginReportList = this.formatToReportList(null == o ? void 0 : o[h.PLUGIN]),
            this.playReportList = this.formatToReportList(null == o ? void 0 : o[h.PLAY_BACK]),
            this.originExposureReportData = this.formatToExposureReportData(this.formatToReportList(null == o ? void 0 : o[h.ORIGIN_EXPOSURE])),
            this.otherExposureReportData = this.formatToExposureReportData(this.formatToReportList(null == o ? void 0 : o[h.EXPOSURE]))
        }
        return Object.defineProperty(t.prototype, "cgi", {
            get: function() {
                return this.adCore.cgi
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.setVideoPlaytime = function(t, e) {
            var o = this;
            this.originExposureReportData.range.forEach((function(i) {
                o.rangeReport(t, i, (function() {
                    o.logger.log("区间原始曝光上报", o.getLogParams()),
                    o.cgi.reportOriginUrl(i.reportUrl, o.getOriginReportData(), {
                        replaceDict: e
                    })
                }
                ))
            }
            )),
            this.otherExposureReportData.range.forEach((function(i) {
                o.rangeReport(t, i, (function() {
                    o.logger.log("区间第三方曝光上报", o.getLogParams()),
                    o.cgi.reportOtherUrl(i.reportUrl, {
                        replaceDict: e
                    })
                }
                ))
            }
            ))
        }
        ,
        t.prototype.reportExposure = function(t) {
            this.reportOriginExposure(t),
            this.reportOtherExposure(t)
        }
        ,
        t.prototype.reportOriginExposure = function(t) {
            var e = this;
            this.logger.log("原始曝光上报", this.getLogParams()),
            this.originExposureReportData.first.forEach((function(o) {
                e.logger.log("首帧上报", e.getLogParams()),
                e.cgi.reportOriginUrl(o.reportUrl, e.getOriginReportData(), {
                    replaceDict: t
                })
            }
            )),
            this.originExposureReportData.delay.forEach((function(o) {
                e.delayReport(o, (function() {
                    e.cgi.reportOriginUrl(o.reportUrl, e.getOriginReportData(), {
                        replaceDict: t,
                        appendParams: {
                            t: "".concat(o.reportBegin)
                        }
                    })
                }
                ))
            }
            ))
        }
        ,
        t.prototype.reportOtherExposure = function(t) {
            var e = this;
            this.logger.log("第三方曝光上报", this.getLogParams()),
            this.otherExposureReportData.first.forEach((function(o) {
                e.logger.log("首帧上报", e.getLogParams()),
                e.cgi.reportOtherUrl(o.reportUrl, {
                    replaceDict: t
                })
            }
            )),
            this.otherExposureReportData.delay.forEach((function(o) {
                e.delayReport(o, (function() {
                    e.cgi.reportOtherUrl(o.reportUrl, {
                        replaceDict: t
                    })
                }
                ))
            }
            ))
        }
        ,
        t.prototype.reportClick = function() {
            var t = this;
            this.logger.log("第三方点击上报", this.getLogParams()),
            this.clickReportList.forEach((function(e) {
                t.cgi.reportOtherUrl(e.reportUrl)
            }
            ))
        }
        ,
        t.prototype.reportEffects = function() {
            var t = this;
            this.logger.log("effects 上报", this.getLogParams()),
            this.effectReportList.forEach((function(e) {
                t.cgi.reportOtherUrl(e.reportUrl, {
                    replaceDict: {
                        __ACTION_ID__: "323"
                    }
                })
            }
            ))
        }
        ,
        t.prototype.reportPlay = function(t) {
            var e = this
              , o = t.playType
              , i = t.timeOffset
              , r = void 0 === i ? 0 : i
              , n = t.timeStamp
              , a = void 0 === n ? Date.now() : n
              , s = t.failReason
              , d = void 0 === s ? xe.NONE : s;
            this.logger.log("play 上报: ".concat(o)),
            this.playReportList.forEach((function(t) {
                e.cgi.reportOtherUrl(t.reportUrl, {
                    replaceDict: {
                        __PLAY_TYPE__: "".concat(o),
                        __TIME_OFFSET__: "".concat(o === _e.RESUME ? a : Math.floor(1e3 * r)),
                        __TIMESTAMP__: "".concat(a),
                        __FAIL_REASON__: "".concat(d)
                    }
                })
            }
            ))
        }
        ,
        t.prototype.reset = function() {
            this.reportedSet.clear(),
            this.delayReportSet.forEach((function(t) {
                window.clearTimeout(t)
            }
            )),
            this.delayReportSet.clear()
        }
        ,
        t.prototype.rangeReport = function(t, e, o) {
            this.reportedSet.has(e) || t >= e.reportBegin && t <= e.reportEnd && (this.logger.log("区间上报", "reportBegin:".concat(e.reportBegin, ", reportEnd: ").concat(e.reportEnd, ", playtime: ").concat(t)),
            o(),
            this.reportedSet.add(e))
        }
        ,
        t.prototype.delayReport = function(t, e) {
            var o = this;
            this.logger.log("延迟上报", this.getLogParams());
            var i = window.setTimeout((function() {
                o.delayReportSet.delete(i),
                e()
            }
            ), t.reportBegin);
            this.delayReportSet.add(i)
        }
        ,
        t.prototype.formatToReportList = function(t) {
            var e, o = [];
            return null === (e = null == t ? void 0 : t.report_list) || void 0 === e || e.forEach((function(t) {
                R(R(R([], t.report_urls || [], !0), t.api_urls || [], !0), t.sdk_urls || [], !0).forEach((function(e) {
                    o.push({
                        reportBegin: t.report_begin,
                        reportEnd: t.report_end,
                        reportUrl: e
                    })
                }
                ))
            }
            )),
            o
        }
        ,
        t.prototype.formatToExposureReportData = function(t) {
            var e = {
                first: [],
                delay: [],
                range: []
            };
            return t.forEach((function(t) {
                t.reportBegin && t.reportEnd ? e.range.push(t) : 0 === t.reportBegin ? e.first.push(t) : e.delay.push(t)
            }
            )),
            e
        }
        ,
        t.prototype.getLogParams = function() {
            return {
                adType: this.options.adType,
                index: this.options.orderIdx
            }
        }
        ,
        t.prototype.getOriginReportData = function() {
            return {
                orderIdx: this.options.orderIdx,
                oadId: this.options.oadId
            }
        }
        ,
        t
    }(), Le = function() {
        function t(t) {
            var e, o = t.data, i = t.orderIdx, r = t.adCore, n = t.auth, a = t.extraInfo, s = t.point, d = t.isEmpty;
            this.adCore = r,
            this.data = o,
            this.orderIdx = i,
            this.auth = n,
            this.isEmpty = !!d,
            this.extraInfo = a,
            this.point = s,
            this.reporter = new we(this.adCore,{
                adType: this.adType,
                orderIdx: this.orderIdx,
                report: this.data.order.report,
                oadId: "".concat((null === (e = this.auth) || void 0 === e ? void 0 : e.oaid) || "")
            }),
            Jt(this.frequencyControlConfig),
            this.pointFrequencyControlInfo = Ct(this.data.order.ad_frequency_control || "")
        }
        return Object.defineProperty(t.prototype, "adType", {
            get: function() {
                return this.data.order.ad_type
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "orderId", {
            get: function() {
                return this.data.order.order_id
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.getVrReportData = function(t) {
            var e;
            void 0 === t && (t = f.COMMON);
            var o = null === (e = this.data.order.vr_report_dict) || void 0 === e ? void 0 : e[t];
            return null == o ? void 0 : o.report_dict
        }
        ,
        Object.defineProperty(t.prototype, "clickable", {
            get: function() {
                var t;
                return (null === (t = this.data.order.ad_action) || void 0 === t ? void 0 : t.type) !== u.UNKNOWN
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "landing", {
            get: function() {
                var t = this.data.order.ad_action;
                return (null == t ? void 0 : t.type) === u.CLICK ? D({}, t.click) : (null == t ? void 0 : t.type) === u.SCAN ? D({}, t.scan) : {}
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "amsLinkParams", {
            get: function() {
                var t;
                return {
                    aid: this.orderId,
                    pid: this.data.order.pos_id,
                    wx_type: this.isMiniGame ? 2 : 1,
                    traceid: this.data.order.trace_id,
                    net_log_id: null === (t = this.extraInfo) || void 0 === t ? void 0 : t.net_log_id
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isMiniGame", {
            get: function() {
                return "46" === this.data.order.product_type
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "frequencyControlConfig", {
            get: function() {
                var t;
                return null !== (t = this.data.order.ad_frequency_control_info_list) && void 0 !== t ? t : {}
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "miniProgramData", {
            get: function() {
                var t, e, o, i, r, n = null === (t = this.landing) || void 0 === t ? void 0 : t.mini_program_info, a = null === (e = this.data.poster) || void 0 === e ? void 0 : e.advertiser, s = null === (o = this.data.poster) || void 0 === o ? void 0 : o.action_button;
                if ((null == n ? void 0 : n.appid) || (null == n ? void 0 : n.url_scheme))
                    return D(D({}, n), {
                        isGame: this.isMiniGame,
                        logo: null == a ? void 0 : a.icon_url,
                        title: null == a ? void 0 : a.name,
                        subTitle: null == a ? void 0 : a.description,
                        amsLinkParams: this.amsLinkParams,
                        qrcodeUrl: null === (i = this.landing) || void 0 === i ? void 0 : i.short_link,
                        btnText: null === (r = null == s ? void 0 : s.base) || void 0 === r ? void 0 : r.action_title.first_title
                    })
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.reportVrAdExposure = function(t) {
            var e, o, i;
            void 0 === t && (t = {}),
            this.adCore.vr.reportExposure(D(D({
                adid: null === (e = this.auth) || void 0 === e ? void 0 : e.adid,
                oaid: null === (o = this.auth) || void 0 === o ? void 0 : o.oaid,
                adRequestId: null === (i = this.extraInfo) || void 0 === i ? void 0 : i.ad_request_id,
                adType: this.adType,
                adGroupId: this.orderId
            }, t), this.getVrReportData()))
        }
        ,
        t.prototype.reportVrAdClick = function(t, e) {
            var o, i, r;
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            this.adCore.vr.reportClick(D(D(D({
                adid: null === (o = this.auth) || void 0 === o ? void 0 : o.adid,
                oaid: null === (i = this.auth) || void 0 === i ? void 0 : i.oaid,
                adRequestId: null === (r = this.extraInfo) || void 0 === r ? void 0 : r.ad_request_id,
                adType: this.adType,
                adGroupId: this.orderId
            }, t), e), this.getVrReportData()))
        }
        ,
        t
    }();
    function Pe(t, e, o, i) {
        return ce(i).map((function(i, r) {
            return new Le({
                data: i,
                orderIdx: r,
                adCore: t,
                point: e,
                auth: null == o ? void 0 : o.auth,
                extraInfo: null == o ? void 0 : o.extra_info
            })
        }
        ))
    }
    function De(t) {
        return D(D({}, t.point), {
            begin: Number(t.point.begin),
            end: Number(t.point.end),
            time_offset: Number(t.point.time_offset)
        })
    }
    function Ne(t, e, o) {
        return ce(o).map((function(o, i) {
            return new Le({
                data: o,
                orderIdx: i,
                adCore: t,
                auth: null == e ? void 0 : e.auth,
                extraInfo: null == e ? void 0 : e.extra_info,
                isEmpty: !0
            })
        }
        ))
    }
    function Oe(t, e, o) {
        Ne(t, e, o).forEach((function(t) {
            t.reporter.reportExposure()
        }
        ))
    }
    !function(t) {
        t.UNKNOWN = "UNKNOWN",
        t.EMPTY = "empty",
        t.TRANSPARENT_VIDEO = "TransparentVideo",
        t.ACTIVE_VIDEO = "ActiveVideo",
        t.CONTRACT_VIDEO = "ContractVideo",
        t.ACTIVE_PICTURE = "ActivePicture",
        t.CONTRACT_PICTURE = "ContractPicture",
        t.FULL_SCREEN_PICTURE = "FullScreenPicture",
        t.FULL_SCREEN_VIDEO = "FullScreenVideo"
    }(Te || (Te = {}));
    var Se, Re = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "materialType", {
            get: function() {
                return this.data.material.type
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "imageMaterial", {
            get: function() {
                return Y(this.data.material)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "videoMaterial", {
            get: function() {
                return q(this.data.material)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "url", {
            get: function() {
                var t, e;
                return this.materialType === m.IMAGE ? null === (t = this.imageMaterial) || void 0 === t ? void 0 : t.url : this.materialType === m.VIDEO ? null === (e = this.videoMaterial) || void 0 === e ? void 0 : e.url : void 0
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "enableClick", {
            get: function() {
                var t, e;
                return !0 === (null === (e = null === (t = this.data.order.ad_action) || void 0 === t ? void 0 : t.scan) || void 0 === e ? void 0 : e.enable_click)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "maxPlayReportCycles", {
            get: function() {
                var t, e, o, i;
                return (null === (i = null === (o = null === (e = null === (t = this.data.order.report) || void 0 === t ? void 0 : t[h.PLAY_BACK]) || void 0 === e ? void 0 : e.report_list) || void 0 === o ? void 0 : o[0]) || void 0 === i ? void 0 : i.max_report_cycles) || 5
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isActive", {
            get: function() {
                return [v.PICTURE, v.QRCODE].includes(this.data.poster.action_button.action_type)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isScanActive", {
            get: function() {
                return this.data.poster.action_button.action_type === v.QRCODE
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "muted", {
            get: function() {
                return this.data.poster.video_control.muted
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "orderType", {
            get: function() {
                var t;
                if (this.isEmpty)
                    return Te.EMPTY;
                var e = this.data.poster.split_control_info;
                if (e && (e.split_type !== g.UNKNOWN || [I.RIGHT_HORIZONTAL, I.RIGHT_VERTICAL, I.LEFT_HORIZONTAL, I.LEFT_HORIZONTAL_BROKEN].includes(e.split_view_type))) {
                    if (this.materialType === m.VIDEO)
                        return Te.FULL_SCREEN_VIDEO;
                    if (this.materialType === m.IMAGE)
                        return Te.FULL_SCREEN_PICTURE
                }
                return this.materialType === m.VIDEO ? (null === (t = this.videoMaterial) || void 0 === t ? void 0 : t.is_transparent) ? Te.TRANSPARENT_VIDEO : this.isActive ? Te.ACTIVE_VIDEO : Te.CONTRACT_VIDEO : this.materialType === m.IMAGE ? this.isActive ? Te.ACTIVE_PICTURE : Te.CONTRACT_PICTURE : Te.UNKNOWN
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(Le);
    !function(t) {
        t.AD_GET_INFO = "getAdInfoEvt",
        t.AD_ORDER_SET = "adOrderSetEvt",
        t.AD_LOAD_START = "loadStartEvt",
        t.AD_LOAD_COMPLETE = "loadCompleteEvt",
        t.AD_SHOW = "showAdEvt",
        t.AD_HIDE = "hideAdEvt",
        t.AD_PAUSE = "pauseEvt",
        t.AD_RESUME = "resumeEvt",
        t.AD_STOP = "stopAdEvt",
        t.AD_DESTROY = "destroyAdEvt",
        t.AD_ERROR = "errorAdEvt",
        t.AD_COUNTDOWN_CHANGE = "countdownChangeEvt",
        t.AD_LOAD_PROGRESS = "loadProgressEvt",
        t.AD_CAN_PLAY = "canPlayEvt",
        t.AD_PLAY_START = "playStartEvt",
        t.AD_PLAY_END = "playEndEvt",
        t.AD_PLAY_ERROR = "playErrorEvt",
        t.AD_AUTOPLAY_BLOCKED = "autoplayBlockedAd",
        t.AD_PLAYING = "playingAd",
        t.AD_TIME_UPDATE = "timeUpdateAd",
        t.AD_VOLUME_CHANGE = "volumeChangeAd",
        t.AD_SET_LOADING = "setLoadingAd",
        t.AD_PLAYER_SESSION_START = "adPlayerSessionStart",
        t.AD_PLAYER_SESSION_END = "adPlayerSessionEnd",
        t.AD_ENTER_COUNTDOWN = "enterCountdownEvt",
        t.AD_ENTER_COUNTDOWN_COMPLETE = "enterCountdownCompleteEvt",
        t.AD_REQUEST_ORDER = "requestOrderEvt",
        t.AD_BLACK_SCREEN = "blackScreenEvt",
        t.AD_EXIT_WINDOW_FULLSCREEN = "exitWindowFullscreen",
        t.AD_EXIT_BROWSER_FULLSCREEN = "exitBrowserFullscreen",
        t.AD_MOVE_IN = "moveinAd",
        t.AD_MOVE_OUT = "moveoutAd",
        t.AD_REPORT = "reportAd",
        t.AD_STOP_ALL = "adStopAll"
    }(Se || (Se = {}));
    var ke = function() {
        function t(t) {
            var e = this;
            this.options = t,
            this.playerMemoryData = null,
            this.cleanList = new Set,
            this.resetVideoContainer = function(t, o) {
                var i;
                e.clean();
                var r = null === (i = e.options.player) || void 0 === i ? void 0 : i.videoElementsContainer;
                if (e.logger.log("调用 resetVideoContainer: ".concat(t, "  el:").concat(!!r)),
                !r)
                    return Promise.reject();
                var n = function() {
                    var o;
                    if (r.style.cssText = e.getVideoContainerStyle(),
                    e.playerMemoryData = null,
                    t)
                        try {
                            e.logger.log("调用正片播放"),
                            null === (o = e.options.player) || void 0 === o || o.play()
                        } catch (t) {}
                };
                if (o)
                    return n(),
                    Promise.resolve();
                var a = r.parentElement.getBoundingClientRect();
                return Bt(r, {
                    width: "".concat(a.width, "px"),
                    height: "".concat(a.height, "px"),
                    top: "0",
                    left: "0"
                }),
                new Promise((function(t) {
                    var o = null
                      , i = function() {
                        r.removeEventListener("transitionend", i),
                        e.cleanList.delete(i),
                        o && (clearTimeout(o),
                        o = null),
                        n(),
                        t()
                    };
                    r.addEventListener("transitionend", i),
                    o = window.setTimeout((function() {
                        i()
                    }
                    ), 250),
                    e.cleanList.add(i)
                }
                ))
            }
            ,
            this.resizeVideoContainer = function(t) {
                var o, i = null === (o = e.options.player) || void 0 === o ? void 0 : o.videoElementsContainer;
                return i ? new Promise((function(o) {
                    var r;
                    if (JSON.stringify(t) === JSON.stringify(null === (r = e.playerMemoryData) || void 0 === r ? void 0 : r.sizeAndPosition))
                        return o(t);
                    Bt(i, {
                        width: "".concat(t.width, "px"),
                        height: "".concat(t.height, "px"),
                        top: "".concat(t.top, "px"),
                        left: "".concat(t.left, "px"),
                        borderRadius: "12px",
                        overflow: "hidden"
                    }),
                    e.playerMemoryData ? e.playerMemoryData.sizeAndPosition = t : e.playerMemoryData = {
                        sizeAndPosition: t
                    };
                    var n = null
                      , a = function() {
                        i.removeEventListener("transitionend", a),
                        e.cleanList.delete(a),
                        n && (clearTimeout(n),
                        n = null),
                        o(t)
                    };
                    i.addEventListener("transitionend", a),
                    n = window.setTimeout((function() {
                        e.logger.log("resizeVideoContainer 超时结束"),
                        a()
                    }
                    ), 250),
                    e.cleanList.add(a)
                }
                )) : Promise.reject()
            }
            ,
            this.shrinkVideoContainer = function(t) {
                return O(e, void 0, void 0, (function() {
                    var e, o, i, r;
                    return S(this, (function(n) {
                        return this.clean(),
                        (e = null === (r = this.options.player) || void 0 === r ? void 0 : r.videoElementsContainer) ? (this.playerMemoryData || (this.playerMemoryData = {},
                        o = this.options.getContainerSize(),
                        i = ["width", "height", "top", "left"].map((function(t) {
                            return "".concat(t, " 200ms cubic-bezier(0.4, 0, 0.2, 1)")
                        }
                        )).join(","),
                        Bt(e, {
                            transition: i,
                            width: "".concat(o.width, "px"),
                            height: "".concat(o.height, "px"),
                            zIndex: "1001",
                            backgroundColor: "#000"
                        })),
                        [2, this.resizeVideoContainer(t)]) : [2, Promise.reject()]
                    }
                    ))
                }
                ))
            }
            ,
            this.capturePlayer = function() {
                return Promise.resolve()
            }
            ,
            this.checkFullPauseInit = function() {
                var t;
                if (!e.options.adCore.ctrl.getRunningAds(p.PAUSE).some((function(t) {
                    return [Te.FULL_SCREEN_PICTURE, Te.FULL_SCREEN_VIDEO].includes(t.adInfo.orderType)
                }
                ))) {
                    var o = null === (t = e.options.player) || void 0 === t ? void 0 : t.videoElementsContainer;
                    if (e.logger.log("调用 checkFullPauseInit: ".concat(!!o)),
                    o) {
                        var i = e.getVideoContainerStyle();
                        o.style.cssText !== i && (o.style.cssText = i,
                        e.playerMemoryData = null)
                    }
                }
            }
            ,
            this.clean = function() {
                e.cleanList.forEach((function(t) {
                    t()
                }
                ))
            }
            ,
            this.logger = t.adCore.logger.createLogger("FullPauseHelper"),
            t.adCore.event.on(Se.AD_DESTROY, (function(t) {
                t.adType === p.PAUSE && setTimeout((function() {
                    try {
                        e.checkFullPauseInit()
                    } catch (t) {}
                }
                ), 1e3)
            }
            ))
        }
        return t.prototype.getVideoContainerStyle = function() {
            var t, e;
            return (null === (e = null === (t = this.options.player) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.videoContainerStyle) || "position:absolute;left:0;top:0;width:100%;height:100%;z-index:0;"
        }
        ,
        t
    }()
      , Me = function() {
        return Me = Object.assign || function(t) {
            for (var e, o = 1, i = arguments.length; o < i; o++)
                for (var r in e = arguments[o])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        ,
        Me.apply(this, arguments)
    };
    function Ve(t, e, o, i) {
        return new (o || (o = Promise))((function(r, n) {
            function a(t) {
                try {
                    d(i.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function s(t) {
                try {
                    d(i.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function d(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof o ? e : new o((function(t) {
                    t(e)
                }
                ))).then(a, s)
            }
            d((i = i.apply(t, e || [])).next())
        }
        ))
    }
    function Ue(t, e) {
        var o, i, r, n, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function s(s) {
            return function(d) {
                return function(s) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; n && (n = 0,
                    s[0] && (a = 0)),
                    a; )
                        try {
                            if (o = 1,
                            i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, s[1])).done)
                                return r;
                            switch (i = 0,
                            r && (s = [2 & s[0], r.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = s;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(s);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            s = e.call(t, a)
                        } catch (t) {
                            s = [6, t],
                            i = 0
                        } finally {
                            o = r = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, d])
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var Be = function(t, e, o) {
        var i = e.net_log_id
          , r = e.traceid
          , n = void 0 === r ? "" : r
          , a = e.is_opensdk
          , s = function(t, e) {
            var o = {};
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (o[i] = t[i]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
                    e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (o[i[r]] = t[i[r]])
            }
            return o
        }(e, ["net_log_id", "traceid", "is_opensdk"])
          , d = new XMLHttpRequest;
        d.open("POST", "https://sdkreport.e.qq.com/link_event"),
        d.responseType = "json",
        d.timeout = 8e3,
        d.send(JSON.stringify({
            os: (null == o ? void 0 : o.isClient) ? 2 : 3,
            av: (null == o ? void 0 : o.appVersion) || "",
            sdk_st: 7,
            pkg: "custom_define.qvideo.pc",
            events: [{
                ts: Date.now(),
                ei: t,
                biz: Me(Me({}, s), {
                    wx_sdk_type: a ? 0 : 7,
                    traceid: "".concat(n).concat(i ? "NETLOG".concat(i) : "")
                })
            }]
        }))
    }
      , ze = function(t, e, o) {
        Be(4006001, e, o),
        (null == t ? void 0 : t.startsWith("weixin://")) ? (Be(4006002, e, o),
        Be(4006070, e, o),
        (null == o ? void 0 : o.showPopup) && function(t) {
            if (document.querySelector("body > .mini-program-modal"))
                return {
                    close: function() {}
                };
            var e = document.createElement("div");
            e.className = "mini-program-modal",
            e.style.cssText = "position: fixed;z-index:10000;height:326px;width:412px;left: 50%;top: 200px;transform:translateX(-50%);display: flex;flex-direction: column;align-items: center;user-select:none;",
            e.innerHTML = '\n  <img style="width: 412px;height: 326px;position:\n   absolute;top: 0;left: 0;z-index: -1;" src="https://active.v.qq.com/resource/mini-program-bg.png"\n       alt="">\n  <svg data-close="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\n       style="position:absolute;right: 8px;top: 22px;cursor: pointer;">\n    <circle cx="12" cy="12" r="11.625" fill="black" fill-opacity="0.3" stroke="white" stroke-width="0.75"></circle>\n    <path d="M7.625 8.12506L16.1103 16.6103" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>\n    <path d="M16.375 8.12506L7.88972 16.6103" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>\n  </svg>\n  <div style="color: #fff;font-size: 18px;line-height:25px;font-weight: 600;margin-top: 6px;">\n    温馨提示\n  </div>\n  <div style="color: #1C2228;font-size: 18px;line-height:20px;font-weight: 600;margin-top: 27px;">\n    PC端畅玩微信'.concat(2 === (null == t ? void 0 : t.wxType) ? "小游戏" : "小程序", '\n  </div>\n  <img style="width: 342px;height: 164px;margin-top: 16px;" src="https://active.v.qq.com/resource/video-guidance.png"\n       alt="">\n  <div style="color: #000;font-size: 16px;line-height: 20px;margin-top: 18px;">\n    勾选“始终允许打开链接”，并点击“打开WeChat”\n  </div>\n  '),
            document.body.appendChild(e);
            var o = null
              , i = e.querySelector('svg[data-close="true"]')
              , r = function() {
                o && (window.clearTimeout(o),
                o = null),
                null == i || i.removeEventListener("click", r, !1),
                e.remove()
            };
            null == i || i.addEventListener("click", r, !1),
            o = window.setTimeout(r, (null == t ? void 0 : t.autoCloseMs) || 15e3)
        }({
            autoCloseMs: o.popupAutoCloseMs || 15e3,
            wxType: e.wx_type
        }),
        window.location.href = t) : Be(4006003, e, o)
    };
    function He(t, e, o) {
        return new Promise((function(i, r) {
            var n, a = new XMLHttpRequest;
            a.open(null !== (n = null == o ? void 0 : o.method) && void 0 !== n ? n : "POST", t),
            a.responseType = "json",
            a.timeout = 8e3,
            (null == o ? void 0 : o.withCredentials) && (a.withCredentials = !0),
            (null == o ? void 0 : o.headers) && Object.entries(o.headers).forEach((function(t) {
                var e = t[0]
                  , o = t[1];
                a.setRequestHeader(e, o)
            }
            )),
            a.send(function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return ""
                }
            }(e)),
            a.onload = function() {
                if (200 === a.status)
                    if (a.response)
                        try {
                            var t = "string" == typeof a.response ? JSON.parse(a.response) : a.response;
                            i(t)
                        } catch (t) {
                            r(t)
                        }
                    else
                        i(null);
                else
                    r()
            }
            ,
            a.onerror = function(t) {
                r(t)
            }
            ,
            a.onabort = function(t) {
                r(t)
            }
            ,
            a.ontimeout = function(t) {
                r(t)
            }
        }
        ))
    }
    for (var $e = null, Ke = function(t) {
        (null == t ? void 0 : t.startsWith("weixin://")) && (window.location.href = t)
    }, Ge = function(t, e, o) {
        return Ve(void 0, void 0, void 0, (function() {
            var i, r, n, a;
            return Ue(this, (function(s) {
                switch (s.label) {
                case 0:
                    return e = Me(Me({}, e), {
                        is_opensdk: !0
                    }),
                    Be(4006001, e, o),
                    t.userName ? [4, Ve(void 0, void 0, void 0, (function() {
                        return Ue(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]),
                                [4, Promise.all([Ve(void 0, void 0, void 0, (function() {
                                    return Ue(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            if ((null == $e ? void 0 : $e.ticket_expire_time) && 1e3 * Number($e.ticket_expire_time) + $e.createTimestamp < Date.now())
                                                return [2, $e];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]),
                                            [4, Ve(void 0, void 0, void 0, (function() {
                                                var t, e;
                                                return Ue(this, (function(o) {
                                                    switch (o.label) {
                                                    case 0:
                                                        return o.trys.push([0, 2, , 3]),
                                                        [4, He("https://pbaccess.video.qq.com/trpc.business_feeds.dsp_feeds_pc.IndependentPCFeeds/GetTicket?video_appid=3000010", {
                                                            app_id: "wx5ed58254bc0d6b7f"
                                                        }, {
                                                            method: "POST",
                                                            headers: {
                                                                "content-type": "application/json"
                                                            }
                                                        })];
                                                    case 1:
                                                        return t = o.sent(),
                                                        (null === (e = null == t ? void 0 : t.data) || void 0 === e ? void 0 : e.ticket) ? [2, {
                                                            ticket: t.data.ticket,
                                                            ticket_expire_time: t.data.ticket_expire_time,
                                                            createTimestamp: Date.now()
                                                        }] : [2, null];
                                                    case 2:
                                                        return o.sent(),
                                                        [2, null];
                                                    case 3:
                                                        return [2]
                                                    }
                                                }
                                                ))
                                            }
                                            ))];
                                        case 2:
                                            return [2, $e = t.sent()];
                                        case 3:
                                            return t.sent(),
                                            [2, null];
                                        case 4:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                )), window.wxopensdk ? window.wxopensdk : new Promise((function(t) {
                                    !function(t, e, o) {
                                        var i = document.createElement("script");
                                        i.type = "text/javascript",
                                        i.charset = "UTF-8",
                                        i.src = t;
                                        var r = !1;
                                        if (i.onerror = function(t) {
                                            r = !0,
                                            null == e || e(t.target.src)
                                        }
                                        ,
                                        void (i.addEventListener ? i.addEventListener("load", (function() {
                                            r = !0,
                                            null == e || e()
                                        }
                                        ), !1) : i.attachEvent && i.attachEvent("onreadystatechange", (function() {
                                            "complete" === window.event.srcElement.readyState && (r = !0,
                                            null == e || e())
                                        }
                                        )))) {
                                            var n = document.createElement("base");
                                            n.href = i.src.match(/.+\//)[0],
                                            o.doc.getElementsByTagName("head")[0].appendChild(n)
                                        }
                                        document.getElementsByTagName("head")[0].appendChild(i),
                                        setTimeout((function() {
                                            var t = !1;
                                            r || (!t && (null == e || e()),
                                            t = !0)
                                        }
                                        ), 5e3)
                                    }("https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxopensdk.js", (function() {
                                        t(window.wxopensdk)
                                    }
                                    ))
                                }
                                ))])];
                            case 1:
                                return [2, t.sent()];
                            case 2:
                                return t.sent(),
                                [2, []];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))] : (Be(4006003, Me(Me({}, e), {
                        act_code: 2
                    }), o),
                    Ke(t.urlScheme),
                    [2]);
                case 1:
                    return i = s.sent(),
                    r = i[0],
                    n = i[1],
                    r && n ? (Be(4006002, e, o),
                    a = function() {
                        return Ve(void 0, void 0, void 0, (function() {
                            var i, a;
                            return Ue(this, (function(s) {
                                switch (s.label) {
                                case 0:
                                    return Be(4006070, e, o),
                                    i = {
                                        appid: "wx5ed58254bc0d6b7f",
                                        userName: t.userName,
                                        path: t.path || "",
                                        ticket: r.ticket,
                                        timeout: 6e4
                                    },
                                    [4, n.launchMiniProgram(i)];
                                case 1:
                                    return 0 === (a = s.sent()).errcode ? Be(4006008, Me(Me({}, e), {
                                        act_code: 0
                                    }), o) : (Be(4006009, Me(Me({}, e), {
                                        act_code: a.errcode
                                    }), o),
                                    Ke(t.urlScheme)),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    n.ready ? a() : n.onReady = a) : Ke(t.urlScheme),
                    [2]
                }
            }
            ))
        }
        ))
    }, qe = {
        glog: function(t) {
            if (t < 1)
                throw new Error("glog(".concat(t, ")"));
            return qe.LOG_TABLE[t]
        },
        gexp: function(t) {
            for (; t < 0; )
                t += 255;
            for (; t >= 256; )
                t -= 255;
            return qe.EXP_TABLE[t]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, Ye = 0; Ye < 8; Ye++)
        qe.EXP_TABLE[Ye] = 1 << Ye;
    for (Ye = 8; Ye < 256; Ye++)
        qe.EXP_TABLE[Ye] = qe.EXP_TABLE[Ye - 4] ^ qe.EXP_TABLE[Ye - 5] ^ qe.EXP_TABLE[Ye - 6] ^ qe.EXP_TABLE[Ye - 8];
    for (Ye = 0; Ye < 255; Ye++)
        qe.LOG_TABLE[qe.EXP_TABLE[Ye]] = Ye;
    "function" == typeof SuppressedError && SuppressedError;
    var Fe, We, je, Qe, Ze, Xe, Je, to, eo, oo, io, ro, no, ao, so, lo, co = "TxpCreativePlayer-request-mid-count", po = function(t) {
        var e = new RegExp("(?:^|;+|\\s+)".concat(t, "=([^;]*)"))
          , o = document.cookie.match(e);
        return o ? o[1] : ""
    };
    !function(t) {
        t.LD = "LD",
        t.HT = "HT",
        t.ZC = "ZC",
        t.CZC = "CZC",
        t.ZT = "ZT",
        t.KB = "KB",
        t.PSJ = "PSJ",
        t.PLJ = "PLJ",
        t.PPB = "PPB",
        t.PVL = "PVL",
        t.PDF = "PDF",
        t.BS = "BS",
        t.VIN = "VIN",
        t.PHLS = "PHLS",
        t.DER = "DER",
        t.YXT = "YXT",
        t.RB = "RB"
    }(Fe || (Fe = {})),
    function(t) {
        t.LD = "WL",
        t.KB = "WK",
        t.HT = "WH"
    }(We || (We = {})),
    function(t) {
        t[t.PRE = 1] = "PRE",
        t[t.TAIL = 2] = "TAIL",
        t[t.ANCHOR = 3] = "ANCHOR",
        t[t.PAUSE = 4] = "PAUSE",
        t[t.PROGRESS_PREVIEW = 5] = "PROGRESS_PREVIEW",
        t[t.VIDEO_RESOLUTION = 6] = "VIDEO_RESOLUTION",
        t[t.DYNAMIC_MID = 7] = "DYNAMIC_MID"
    }(Qe || (Qe = {})),
    function(t) {
        t[t.UNKNOWN = -1] = "UNKNOWN",
        t[t.NOT_LOGIN = 0] = "NOT_LOGIN",
        t[t.LOGIN = 1] = "LOGIN",
        t[t.HLW_VIP = 2] = "HLW_VIP",
        t[t.TV_VIP = 9] = "TV_VIP",
        t[t.SPORTS_VIP = 10] = "SPORTS_VIP",
        t[t.SPORTS_SVIP = 12] = "SPORTS_SVIP"
    }(Ze || (Ze = {})),
    function(t) {
        t[t.GUEST = 0] = "GUEST",
        t[t.QQ = 1] = "QQ",
        t[t.WX = 2] = "WX",
        t[t.PHONE = 3] = "PHONE"
    }(Xe || (Xe = {})),
    function(t) {
        t[t.OK = 0] = "OK"
    }(Je || (Je = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.PRE = 1] = "PRE",
        t[t.BROADCAST = 2] = "BROADCAST",
        t[t.TAIL = 3] = "TAIL",
        t[t.PAUSE = 4] = "PAUSE",
        t[t.LOADING = 5] = "LOADING",
        t[t.PROGRESS_PREVIEW = 6] = "PROGRESS_PREVIEW",
        t[t.VIDEO_RESOLUTION = 7] = "VIDEO_RESOLUTION",
        t[t.MID = 8] = "MID",
        t[t.CREATIVE_MID = 9] = "CREATIVE_MID",
        t[t.HLS_MID = 10] = "HLS_MID",
        t[t.CORNER = 11] = "CORNER",
        t[t.LIVE_CORNER = 12] = "LIVE_CORNER",
        t[t.VIDEO_IN = 13] = "VIDEO_IN",
        t[t.WATCH_BUY = 14] = "WATCH_BUY",
        t[t.ANCHOR_EMPTY = 15] = "ANCHOR_EMPTY",
        t[t.NON_STANDARD = 16] = "NON_STANDARD",
        t[t.DYNAMIC_MID = 17] = "DYNAMIC_MID",
        t[t.CONTINUED_POST = 18] = "CONTINUED_POST",
        t[t.REWARD_BUBBLE = 19] = "REWARD_BUBBLE"
    }(to || (to = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.CLICK = 1] = "CLICK",
        t[t.SCAN = 2] = "SCAN"
    }(eo || (eo = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.ORIGIN_EXPOSURE = 1] = "ORIGIN_EXPOSURE",
        t[t.EXPOSURE = 2] = "EXPOSURE",
        t[t.PLAY_BACK = 3] = "PLAY_BACK",
        t[t.EMPTY = 4] = "EMPTY",
        t[t.EFFECT = 5] = "EFFECT",
        t[t.FEEDBACK = 6] = "FEEDBACK",
        t[t.CLICK = 7] = "CLICK",
        t[t.RANGE_EXPOSURE = 8] = "RANGE_EXPOSURE",
        t[t.RANGE_PLAY = 9] = "RANGE_PLAY",
        t[t.PLUGIN = 10] = "PLUGIN"
    }(oo || (oo = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.COMMON_EXPOSURE_CLICK = 1] = "COMMON_EXPOSURE_CLICK",
        t[t.HEADER_CLICK = 2] = "HEADER_CLICK",
        t[t.ACTION_BTN_CLICK = 3] = "ACTION_BTN_CLICK",
        t[t.POSTER_CLICK = 4] = "POSTER_CLICK",
        t[t.COMMON_PLAY = 5] = "COMMON_PLAY",
        t[t.COMMON_DOWNLOAD = 6] = "COMMON_DOWNLOAD",
        t[t.COMMON = 7] = "COMMON",
        t[t.SKIP_CLICK = 9] = "SKIP_CLICK"
    }(io || (io = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.PICTURE = 1] = "PICTURE",
        t[t.QRCODE = 2] = "QRCODE"
    }(ro || (ro = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.IMAGE = 1] = "IMAGE",
        t[t.VIDEO = 2] = "VIDEO"
    }(no || (no = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.VIDEO_TIME = 1] = "VIDEO_TIME",
        t[t.TIMESTAMP = 2] = "TIMESTAMP"
    }(ao || (ao = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.LEFT_TOP = 1] = "LEFT_TOP",
        t[t.LEFT_MIDDLE = 2] = "LEFT_MIDDLE",
        t[t.LEFT_BOTTOM = 3] = "LEFT_BOTTOM",
        t[t.RIGHT_MIDDLE = 4] = "RIGHT_MIDDLE"
    }(so || (so = {})),
    function(t) {
        t.SD = "sd",
        t.HD = "hd",
        t.SHD = "shd",
        t.FHD = "fhd",
        t.UHD = "uhd",
        t.HDR10 = "hdr10",
        t.DOLBY_VISION = "dolby"
    }(lo || (lo = {}));
    var uo, ho, fo, vo, mo, yo, go, _o, xo, Ao, Co = ((je = {})[lo.SD] = lo.HD,
    je[lo.HD] = lo.HD,
    je[lo.SHD] = lo.SHD,
    je[lo.FHD] = lo.FHD,
    je[lo.UHD] = lo.FHD,
    je[lo.HDR10] = lo.FHD,
    je[lo.DOLBY_VISION] = lo.FHD,
    je);
    !function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.SOLO = 1] = "SOLO"
    }(uo || (uo = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.FIX = 1] = "FIX",
        t[t.FIX_REALTIME = 2] = "FIX_REALTIME",
        t[t.DYNAMIC = 3] = "DYNAMIC"
    }(ho || (ho = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.LEFT_BOTTOM = 1] = "LEFT_BOTTOM",
        t[t.RIGHT_BOTTOM = 2] = "RIGHT_BOTTOM"
    }(fo || (fo = {})),
    function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.INTEGRATE = 1] = "INTEGRATE",
        t[t.DIRECTLY = 2] = "DIRECTLY"
    }(vo || (vo = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.CARD_BACKGROUND = 1] = "CARD_BACKGROUND",
        t[t.CARD_NO_BACKGROUND = 2] = "CARD_NO_BACKGROUND"
    }(mo || (mo = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.RIGHT_VERTICAL = 1] = "RIGHT_VERTICAL",
        t[t.RIGHT_HORIZONTAL = 2] = "RIGHT_HORIZONTAL",
        t[t.LEFT_HORIZONTAL = 3] = "LEFT_HORIZONTAL",
        t[t.LEFT_HORIZONTAL_BROKEN = 4] = "LEFT_HORIZONTAL_BROKEN"
    }(yo || (yo = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.SSO = 1] = "SSO"
    }(go || (go = {}));
    var bo, Eo, Io = ((_o = {})[We.LD] = to.PRE,
    _o[We.KB] = to.BROADCAST,
    _o[We.HT] = to.TAIL,
    _o), To = ((xo = {})[Fe.LD] = to.PRE,
    xo[Fe.HT] = to.TAIL,
    xo[Fe.ZC] = to.MID,
    xo[Fe.CZC] = to.CREATIVE_MID,
    xo[Fe.ZT] = to.PAUSE,
    xo[Fe.KB] = to.BROADCAST,
    xo[Fe.PSJ] = to.CORNER,
    xo[Fe.PLJ] = to.LIVE_CORNER,
    xo[Fe.PPB] = to.PROGRESS_PREVIEW,
    xo[Fe.PVL] = to.LOADING,
    xo[Fe.PDF] = to.VIDEO_RESOLUTION,
    xo[Fe.BS] = to.WATCH_BUY,
    xo[Fe.VIN] = to.VIDEO_IN,
    xo[Fe.PHLS] = to.HLS_MID,
    xo[Fe.DER] = to.ANCHOR_EMPTY,
    xo[Fe.YXT] = to.CONTINUED_POST,
    xo[Fe.RB] = to.REWARD_BUBBLE,
    xo), wo = ((Ao = {})[to.PRE] = "preAd",
    Ao[to.BROADCAST] = "preAd",
    Ao[to.TAIL] = "postAd",
    Ao[to.MID] = "ZC",
    Ao[to.PAUSE] = "ZT",
    Ao), Lo = {
        toAdCoreType: function(t) {
            var e = To[t];
            if (e)
                return e;
            if (e = Io[t])
                return e;
            var o = Object.entries(wo).find((function(e) {
                return e[1] === t
            }
            ));
            return o ? Number(o[0]) : to.UNKNOWN
        },
        toAdTypeV: function(t) {
            var e = Object.entries(To).find((function(e) {
                return e[1] === t
            }
            ));
            if (e)
                return e[0]
        },
        toAdTypeM: function(t) {
            var e = Object.entries(Io).find((function(e) {
                return e[1] === t
            }
            ));
            if (e)
                return e[0]
        },
        toThumbPlayerAdType: function(t) {
            return wo[t]
        },
        getAdScene: function(t) {
            if ("number" == typeof t)
                return t;
            var e = Lo.toAdCoreType(t);
            return e === to.MID ? Qe.DYNAMIC_MID : e === to.PRE ? Qe.PRE : e === to.TAIL ? Qe.TAIL : Qe.PRE
        }
    }, Po = ((bo = {})[Qe.PRE] = "pre_ad_params",
    bo[Qe.TAIL] = "tail_ad_params",
    bo[Qe.ANCHOR] = "anchor_ad_params",
    bo[Qe.PAUSE] = "pause_ad_params",
    bo[Qe.PROGRESS_PREVIEW] = "progress_preview_ad_params",
    bo[Qe.VIDEO_RESOLUTION] = "video_resolution_ad_params",
    bo[Qe.DYNAMIC_MID] = "mid_ad_params",
    bo);
    !function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.REQUEST = 1] = "REQUEST",
        t[t.EXPOSURE = 2] = "EXPOSURE",
        t[t.CLICK = 3] = "CLICK",
        t[t.FEEDBACK = 4] = "FEEDBACK"
    }(Eo || (Eo = {}));
    var Do = function() {
        return function() {
            try {
                var t = localStorage.getItem("frequency_control_data");
                return t ? JSON.parse(t) : {}
            } catch (t) {}
            return {}
        }()
    };
    !function() {
        var t, e, o, i, r, n = 2249, a = -496, s = 2007, d = 9095, l = l || function(t, e) {
            var o = {}
              , i = o.a = {}
              , r = function() {}
              , n = i.b = {
                c: function(t) {
                    for (var e = "", o = 0; o < 4; o++)
                        e += String.fromCharCode(2348 ^ "ॅूॅक़".charCodeAt(o));
                    r.prototype = this;
                    var i = new r;
                    return t && i.d(t),
                    i.hasOwnProperty(e) || (i.init = function() {
                        i.$super.init.apply(this, arguments)
                    }
                    ),
                    i.init.prototype = i,
                    i.$super = this,
                    i
                },
                create: function() {
                    var t = this.c();
                    return t.init.apply(t, arguments),
                    t
                },
                init: function() {},
                d: function(t) {
                    for (var e = "", o = 0; o < 8; o++)
                        e += String.fromCharCode(778 ^ ";͙ͥ;͸ͣͤͭ".charCodeAt(o));
                    for (var i in t)
                        t.hasOwnProperty(i) && (this[i] = t[i]);
                    t.hasOwnProperty(e) && (this.toString = t.toString)
                },
                e: function() {
                    return this.init.prototype.c(this)
                }
            }
              , a = i.f = n.c({
                init: function(t, e) {
                    t = this.g = t || [],
                    this.h = null != e ? e : 4 * t.length
                },
                toString: function(t) {
                    return (t || d).i(this)
                },
                concat: function(t) {
                    var e = this.g
                      , o = t.g
                      , i = this.h;
                    if (t = t.h,
                    this.j(),
                    i % 4)
                        for (var r = 0; r < t; r++)
                            e[i + r >>> 2] |= (o[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
                    else if (65535 < o.length)
                        for (r = 0; r < t; r += 4)
                            e[i + r >>> 2] = o[r >>> 2];
                    else
                        e.push.apply(e, o);
                    return this.h += t,
                    this
                },
                j: function() {
                    var e = this.g
                      , o = this.h;
                    e[o >>> 2] &= 4294967295 << 32 - o % 4 * 8,
                    e.length = t.ceil(o / 4)
                },
                e: function() {
                    var t = n.e.call(this);
                    return t.g = this.g.slice(0),
                    t
                },
                random: function(e) {
                    for (var o = [], i = 0; i < e; i += 4)
                        o.push(4294967296 * t.random() | 0);
                    return new a.init(o,e)
                }
            })
              , s = o.k = {}
              , d = s.l = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(368 ^ "".charCodeAt(o));
                    var i = t.g;
                    t = t.h;
                    for (var r = [], n = 0; n < t; n++) {
                        var a = i[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push((a >>> 4).toString(16)),
                        r.push((15 & a).toString(16))
                    }
                    return r.join(e)
                },
                parse: function(t) {
                    for (var e = t.length, o = [], i = 0; i < e; i += 2)
                        o[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new a.init(o,e / 2)
                }
            }
              , l = s.m = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(2238 ^ "".charCodeAt(o));
                    var i = t.g;
                    t = t.h;
                    for (var r = [], n = 0; n < t; n++)
                        r.push(String.fromCharCode(i[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                    return r.join(e)
                },
                parse: function(t) {
                    for (var e = t.length, o = [], i = 0; i < e; i++)
                        o[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new a.init(o,e)
                }
            }
              , c = s.n = {
                i: function(t) {
                    for (var e = "", o = 0; o < 20; o++)
                        e += String.fromCharCode(149 ^ "ØôùóúçøðñµÀÁÓ¸­µñôáô".charCodeAt(o));
                    try {
                        return decodeURIComponent(escape(l.i(t)))
                    } catch (t) {
                        throw Error(e)
                    }
                },
                parse: function(t) {
                    return l.parse(unescape(encodeURIComponent(t)))
                }
            }
              , p = i.o = n.c({
                p: function() {
                    this.q = new a.init,
                    this.r = 0
                },
                s: function(t) {
                    for (var e = "", o = 0; o < 6; o++)
                        e += String.fromCharCode(4052 ^ "ྦྷྠྦ྽ྺླ".charCodeAt(o));
                    e == typeof t && (t = c.parse(t)),
                    this.q.concat(t),
                    this.r += t.h
                },
                t: function(e) {
                    var o = this.q
                      , i = o.g
                      , r = o.h
                      , n = this.u
                      , s = r / (4 * n);
                    if (e = (s = e ? t.ceil(s) : t.max((0 | s) - this.v, 0)) * n,
                    r = t.min(4 * e, r),
                    e) {
                        for (var d = 0; d < e; d += n)
                            this.w(i, d);
                        d = i.splice(0, e),
                        o.h -= r
                    }
                    return new a.init(d,r)
                },
                e: function() {
                    var t = n.e.call(this);
                    return t.q = this.q.e(),
                    t
                },
                v: 0
            });
            i.x = p.c({
                y: n.c(),
                init: function(t) {
                    this.y = this.y.c(t),
                    this.p()
                },
                p: function() {
                    p.p.call(this),
                    this.z()
                },
                A: function(t) {
                    return this.s(t),
                    this.t(),
                    this
                },
                B: function(t) {
                    return t && this.s(t),
                    this.C()
                },
                u: 16,
                D: function(t) {
                    return function(e, o) {
                        return new t.init(o).B(e)
                    }
                },
                F: function(t) {
                    return function(e, o) {
                        return new u.HMAC.init(t,o).B(e)
                    }
                }
            });
            var u = o.G = {};
            return o
        }(Math);
        (function() {
            for (var t = "", e = 0; e < 65; e++)
                t += String.fromCharCode(208 ^ "±²³´µ¶·¸¹º»¼½¾¿ ¡¢£¤¥¦§¨©ªàáâãäåæçèéûÿí".charCodeAt(e));
            var o = l
              , i = o.a.f;
            o.k.H = {
                i: function(t) {
                    for (var e = "", o = 0; o < 0; o++)
                        e += String.fromCharCode(4077 ^ "".charCodeAt(o));
                    var i = t.g
                      , r = t.h
                      , n = this.I;
                    t.j(),
                    t = [];
                    for (var a = 0; a < r; a += 3)
                        for (var s = (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (i[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | i[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, d = 0; 4 > d && a + .75 * d < r; d++)
                            t.push(n.charAt(s >>> 6 * (3 - d) & 63));
                    if (i = n.charAt(64))
                        for (; t.length % 4; )
                            t.push(i);
                    return t.join(e)
                },
                parse: function(t) {
                    var e = t.length
                      , o = this.I;
                    (r = o.charAt(64)) && -1 != (r = t.indexOf(r)) && (e = r);
                    for (var r = [], n = 0, a = 0; a < e; a++)
                        if (a % 4) {
                            var s = o.indexOf(t.charAt(a - 1)) << a % 4 * 2
                              , d = o.indexOf(t.charAt(a)) >>> 6 - a % 4 * 2;
                            r[n >>> 2] |= (s | d) << 24 - n % 4 * 8,
                            n++
                        }
                    return i.create(r, n)
                },
                I: t
            }
        }
        )(),
        function(t) {
            var e = -5616
              , o = -7555
              , i = -458
              , r = 1071
              , c = 927
              , p = -2568
              , u = 6326
              , h = -4204
              , f = 4918
              , v = 7574
              , m = 6160
              , y = 855
              , g = -9137
              , _ = 2297
              , x = -9619
              , A = -8866
              , C = -6091
              , b = -7050
              , E = -1233
              , I = -7874
              , T = 5847
              , w = 5062
              , L = -4552
              , P = 4635;
            function D(t, e, o, i, r, n, a) {
                return z.call(this, 0, t, e, o, i, r, n, a)
            }
            function N(t, e, o, i, r, n, a) {
                return z.call(this, 1, t, e, o, i, r, n, a)
            }
            function O(t, e, o, i, r, n, a) {
                return z.call(this, 2, t, e, o, i, r, n, a)
            }
            function S(t, e, o, i, r, n, a) {
                return z.call(this, 3, t, e, o, i, r, n, a)
            }
            for (var R = l, k = (V = R.a).f, M = V.x, V = R.G, U = [], B = 0; 64 > B; B++)
                U[B] = 4294967296 * t.abs(t.sin(B + 1)) | 0;
            function z(t) {
                switch (t) {
                case 0:
                    var n = arguments[1]
                      , a = arguments[f + 7592 + 7592 - 20100]
                      , l = arguments[m + y - 7012]
                      , D = arguments[v + g + 1567]
                      , N = arguments[-1789 + _ - 503]
                      , O = arguments[x + A + -2285 + 20776];
                    return ((n = n + (a & l | ~a & D) + N + arguments[7]) << O | n >>> 32 - O) + a;
                case C + e + 11708:
                    return ((n = (n = arguments[b + 7051]) + ((a = arguments[2]) & (D = arguments[4]) | (l = arguments[u + d + -9220 - 6198]) & ~D) + (N = arguments[-5315 + o + 12875]) + arguments[7]) << (O = arguments[6]) | n >>> -9475 + E + d + 1645 - O) + a;
                case i + 460:
                    return ((n = (n = arguments[1]) + ((a = arguments[2]) ^ (l = arguments[I + -6801 + 14678]) ^ (D = arguments[u + r - 7393])) + (N = arguments[p + T + 36 - 3310]) + arguments[7]) << (O = arguments[6]) | n >>> 32 - O) + a;
                case w + L + -2667 + 2160:
                    return ((n = (n = arguments[1]) + ((l = arguments[s + c - 2931]) ^ ((a = arguments[2]) | ~(D = arguments[4]))) + (N = arguments[P - 4630]) + arguments[7]) << (O = arguments[6]) | n >>> -8328 + h + -2734 + 15298 - O) + a
                }
            }
            V = V.J = M.c({
                z: function() {
                    this.K = new k.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                w: function(t, d) {
                    for (var l = 0; 16 > l; l++) {
                        var f = t[y = d + l];
                        t[y] = 16711935 & (f << 8 | f >>> e + 5640) | 4278255360 & (f << 24 | f >>> 8)
                    }
                    l = this.K.g;
                    var v, m, y = t[d + 0], g = (f = t[d + 1],
                    t[d + 2]), _ = t[d + 3], x = t[d + 4], A = t[d + 5], C = t[d + (e + n + 5624 - 2251)], b = t[d + 7], E = t[d + 8], I = t[d + 9], T = t[d + 10], w = t[d + 11], L = t[d + 12], P = t[d + 13], R = t[d + 14], k = t[d + 15], M = l[0], V = S(V = S(V = S(V = S(V = O(V = O(V = O(V = O(V = N(V = N(V = N(V = N(V = D(V = D(V = D(V = D(V = l[1], m = D(m = l[2], v = D(v = l[3], M = D(M, V, m, v, y, 7, U[0]), V, m, f, 12, U[1]), M, V, g, 5903 + e - 270, U[2]), v, M, _, 22, U[3]), m = D(m, v = D(v, M = D(M, V, m, v, x, 7, U[4]), V, m, A, 12, U[5]), M, V, C, 17, U[6]), v, M, b, 22, U[7]), m = D(m, v = D(v, M = D(M, V, m, v, E, 7, U[8]), V, m, I, 12, U[9]), M, V, T, 4264 + e + 1369, U[10]), v, M, w, 22, U[11]), m = D(m, v = D(v, M = D(M, V, m, v, L, 7, U[12]), V, m, P, 12, U[13]), M, V, R, 17, U[1227 + o + 6342]), v, M, k, 22, U[i + -1821 + 806 + 1488]), m = N(m, v = N(v, M = N(M, V, m, v, f, -7413 + e + 13034, U[16]), V, m, C, 9, U[17]), M, V, w, 14, U[18]), v, M, y, 20, U[19]), m = N(m, v = N(v, M = N(M, V, m, v, A, 5, U[r - 1051]), V, m, T, 9, U[21]), M, V, k, 14, U[22]), v, M, x, 20, U[23]), m = N(m, v = N(v, M = N(M, V, m, v, I, 5, U[24]), V, m, R, 9, U[25]), M, V, _, 14, U[c - 901]), v, M, E, 12598 + p - 10010, U[27]), m = N(m, v = N(v, M = N(M, V, m, v, P, 5, U[-4202 + u - 2096]), V, m, g, 9, U[29]), M, V, b, a + e + u - 200, U[30]), v, M, L, p + 9955 - 7367, U[31]), m = O(m, v = O(v, M = O(M, V, m, v, A, 4, U[32]), V, m, E, 11, U[33]), M, V, w, 16, U[34]), v, M, R, 23, U[35]), m = O(m, v = O(v, M = O(M, V, m, v, f, 4, U[36]), V, m, x, 11, U[37]), M, V, b, 16, U[38]), v, M, T, 23, U[39]), m = O(m, v = O(v, M = O(M, V, m, v, P, e + i + s + 4071, U[40]), V, m, y, 11, U[41]), M, V, _, 16, U[42]), v, M, C, 23, U[43]), m = O(m, v = O(v, M = O(M, V, m, v, I, 4, U[44]), V, m, L, 11, U[45]), M, V, k, 16, U[46]), v, M, g, 23, U[47]), m = S(m, v = S(v, M = S(M, V, m, v, y, 6, U[48]), V, m, b, 10, U[49]), M, V, R, 15, U[50]), v, M, A, 21, U[51]), m = S(m, v = S(v, M = S(M, V, m, v, L, 6, U[52]), V, m, _, 10, U[53]), M, V, T, 15, U[54]), v, M, f, 21, U[55]), m = S(m, v = S(v, M = S(M, V, m, v, E, 6, U[56]), V, m, k, 2260 + i - 1792, U[57]), M, V, C, 15, U[-990 + h + 5252]), v, M, P, 21, U[59]), m = S(m, v = S(v, M = S(M, V, m, v, x, 6, U[60]), V, m, w, 10, U[61]), M, V, g, 15, U[62]), v, M, I, 21, U[63]);
                    l[0] = l[0] + M | 0,
                    l[1] = l[1] + V | 0,
                    l[2] = l[2] + m | 0,
                    l[3] = l[3] + v | 0
                },
                C: function() {
                    var e = this.q
                      , o = e.g
                      , r = (6876 + i + -335 - 6075) * this.r
                      , n = 8 * e.h;
                    o[n >>> 8761 + f + 1268 - 14942] |= 128 << 24 - n % 32;
                    var a = t.floor(r / 4294967296);
                    for (o[15 + (n + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                    o[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                    e.h = 4 * (o.length + 1),
                    this.t(),
                    o = (e = this.K).g,
                    r = 0; 4 > r; r++)
                        n = o[r],
                        o[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 2244 + v + 2814 - 12624);
                    return e
                },
                e: function() {
                    var t = M.e.call(this);
                    return t.K = this.K.e(),
                    t
                }
            }),
            R.J = M.D(V),
            R.L = M.F(V)
        }(Math),
        o = (t = (e = l).a).b,
        i = t.f,
        r = (t = e.G).M = o.c({
            y: o.c({
                N: 4,
                O: t.J,
                P: 1
            }),
            init: function(t) {
                this.y = this.y.c(t)
            },
            Q: function(t, e) {
                for (var o = (s = this.y).O.create(), r = i.create(), n = r.g, a = s.N, s = s.P; n.length < a; ) {
                    d && o.A(d);
                    var d = o.A(t).B(e);
                    o.p();
                    for (var l = 1; l < s; l++)
                        d = o.B(d),
                        o.p();
                    r.concat(d)
                }
                return r.h = 4 * a,
                r
            }
        }),
        e.M = function(t, e, o) {
            return r.create(o).Q(t, e)
        }
        ,
        l.a.R || function(t) {
            var e = (f = l).a
              , o = e.b
              , i = e.f
              , r = e.o
              , n = f.k.H
              , a = f.G.M
              , s = e.R = r.c({
                y: o.c(),
                S: function(t, e) {
                    return this.create(this.T, t, e)
                },
                U: function(t, e) {
                    return this.create(this.V, t, e)
                },
                init: function(t, e, o) {
                    this.y = this.y.c(o),
                    this.W = t,
                    this.X = e,
                    this.p()
                },
                p: function() {
                    r.p.call(this),
                    this.z()
                },
                Y: function(t) {
                    return this.s(t),
                    this.t()
                },
                B: function(t) {
                    return t && this.s(t),
                    this.C()
                },
                N: 4,
                Z: 4,
                T: 1,
                V: 2,
                D: function(t) {
                    return {
                        $: function(e, o, i) {
                            for (var r = "", n = 0; n < 6; n++)
                                r += String.fromCharCode(403 ^ "ǠǧǡǺǽǴ".charCodeAt(n));
                            return (r == typeof o ? v : h).$(t, e, o, i)
                        },
                        _: function(e, o, i) {
                            for (var r = "", n = 0; n < 6; n++)
                                r += String.fromCharCode(2219 ^ "ࣘࣟࣙࣂࣅ࣌".charCodeAt(n));
                            return (r == typeof o ? v : h)._(t, e, o, i)
                        }
                    }
                }
            });
            e.aa = s.c({
                C: function() {
                    return this.t(!0)
                },
                u: 1
            });
            var d = f.ba = {}
              , c = function(t, e, o) {
                var i = this.ca;
                i ? this.ca = void 0 : i = this.da;
                for (var r = 0; r < o; r++)
                    t[e + r] ^= i[r]
            }
              , p = (e.ea = o.c({
                S: function(t, e) {
                    return this.fa.create(t, e)
                },
                U: function(t, e) {
                    return this.ga.create(t, e)
                },
                init: function(t, e) {
                    this.ha = t,
                    this.ca = e
                }
            })).c();
            p.fa = p.c({
                ia: function(t, e) {
                    var o = this.ha
                      , i = o.u;
                    c.call(this, t, e, i),
                    o.ja(t, e),
                    this.da = t.slice(e, e + i)
                }
            }),
            p.ga = p.c({
                ia: function(t, e) {
                    var o = this.ha
                      , i = o.u
                      , r = t.slice(e, e + i);
                    o.ka(t, e),
                    c.call(this, t, e, i),
                    this.da = r
                }
            }),
            d = d.la = p,
            p = (f.na = {}).ma = {
                na: function(t, e) {
                    for (var o, r = (o = (o = 4 * e) - t.h % o) << 24 | o << 16 | o << 8 | o, n = [], a = 0; a < o; a += 4)
                        n.push(r);
                    o = i.create(n, o),
                    t.concat(o)
                },
                oa: function(t) {
                    t.h -= 255 & t.g[t.h - 1 >>> 2]
                }
            },
            e.pa = s.c({
                y: s.y.c({
                    ba: d,
                    qa: p
                }),
                p: function() {
                    s.p.call(this);
                    var t = (e = this.y).ra
                      , e = e.ba;
                    if (this.W == this.T)
                        var o = e.S;
                    else
                        o = e.U,
                        this.v = 1;
                    this.sa = o.call(e, this, t && t.g)
                },
                w: function(t, e) {
                    this.sa.ia(t, e)
                },
                C: function() {
                    var t = this.y.qa;
                    if (this.W == this.T) {
                        t.na(this.q, this.u);
                        var e = this.t(!0)
                    } else
                        e = this.t(!0),
                        t.oa(e);
                    return e
                },
                u: 4
            });
            var u = e.ta = o.c({
                init: function(t) {
                    this.d(t)
                },
                toString: function(t) {
                    return (t || this.ua).i(this)
                }
            })
              , h = (d = (f.wa = {}).va = {
                i: function(t) {
                    var e = t.xa;
                    return ((t = t.ya) ? i.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(n)
                },
                parse: function(t) {
                    var e = (t = n.parse(t)).g;
                    if (1398893684 == e[0] && 1701076831 == e[1]) {
                        var o = i.create(e.slice(2, 4));
                        e.splice(0, 4),
                        t.h -= 16
                    }
                    return u.create({
                        xa: t,
                        ya: o
                    })
                }
            },
            e.za = o.c({
                y: o.c({
                    wa: d
                }),
                $: function(t, e, o, i) {
                    i = this.y.c(i);
                    var r = t.S(o, i);
                    return e = r.B(e),
                    r = r.y,
                    u.create({
                        xa: e,
                        Aa: o,
                        ra: r.ra,
                        Ba: t,
                        ba: r.ba,
                        qa: r.qa,
                        u: t.u,
                        ua: i.wa
                    })
                },
                _: function(t, e, o, i) {
                    return i = this.y.c(i),
                    e = this.Ca(e, i.wa),
                    t.U(o, i).B(e.xa)
                },
                Ca: function(t, e) {
                    for (var o = "", i = 0; i < 6; i++)
                        o += String.fromCharCode(2150 ^ "ࠕࠒࠔࠏࠈࠁ".charCodeAt(i));
                    return o == typeof t ? e.parse(t, this) : t
                }
            }))
              , f = (f.Da = {}).va = {
                Ea: function(t, e, o, r) {
                    return r || (r = i.random(8)),
                    t = a.create({
                        N: e + o
                    }).Q(t, r),
                    o = i.create(t.g.slice(e), 4 * o),
                    t.h = 4 * e,
                    u.create({
                        Aa: t,
                        ra: o,
                        ya: r
                    })
                }
            }
              , v = e.Fa = h.c({
                y: h.y.c({
                    Da: f
                }),
                $: function(t, e, o, i) {
                    return o = (i = this.y.c(i)).Da.Ea(o, t.N, t.Z),
                    i.ra = o.ra,
                    (t = h.$.call(this, t, e, o.Aa, i)).d(o),
                    t
                },
                _: function(t, e, o, i) {
                    return i = this.y.c(i),
                    e = this.Ca(e, i.wa),
                    o = i.Da.Ea(o, t.N, t.Z, e.ya),
                    i.ra = o.ra,
                    h._.call(this, t, e, o.Aa, i)
                }
            })
        }(),
        function() {
            for (var t = l, e = t.a.pa, o = t.G, i = [], r = [], n = [], a = [], s = [], d = [], c = [], p = [], u = [], h = [], f = [], v = 0; 256 > v; v++)
                f[v] = 128 > v ? v << 1 : v << 1 ^ 283;
            var m = 0
              , y = 0;
            for (v = 0; 256 > v; v++) {
                var g = (g = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & g ^ 99;
                i[m] = g,
                r[g] = m;
                var _ = f[m]
                  , x = f[_]
                  , A = f[x]
                  , C = 257 * f[g] ^ 16843008 * g;
                n[m] = C << 24 | C >>> 8,
                a[m] = C << 16 | C >>> 16,
                s[m] = C << 8 | C >>> 24,
                d[m] = C,
                C = 16843009 * A ^ 65537 * x ^ 257 * _ ^ 16843008 * m,
                c[g] = C << 24 | C >>> 8,
                p[g] = C << 16 | C >>> 16,
                u[g] = C << 8 | C >>> 24,
                h[g] = C,
                m ? (m = _ ^ f[f[f[A ^ _]]],
                y ^= f[f[y]]) : m = y = 1
            }
            var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            o = o.Ga = e.c({
                z: function() {
                    for (var t = (o = this.X).g, e = o.h / 4, o = 4 * ((this.Ha = e + 6) + 1), r = this.Ia = [], n = 0; n < o; n++)
                        if (n < e)
                            r[n] = t[n];
                        else {
                            var a = r[n - 1];
                            n % e ? 6 < e && 4 == n % e && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = i[(a = a << 8 | a >>> 24) >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a],
                            a ^= b[n / e | 0] << 24),
                            r[n] = r[n - e] ^ a
                        }
                    for (t = this.Ja = [],
                    e = 0; e < o; e++)
                        n = o - e,
                        a = e % 4 ? r[n] : r[n - 4],
                        t[e] = 4 > e || 4 >= n ? a : c[i[a >>> 24]] ^ p[i[a >>> 16 & 255]] ^ u[i[a >>> 8 & 255]] ^ h[i[255 & a]]
                },
                ja: function(t, e) {
                    this.Ka(t, e, this.Ia, n, a, s, d, i)
                },
                ka: function(t, e) {
                    var o = t[e + 1];
                    t[e + 1] = t[e + 3],
                    t[e + 3] = o,
                    this.Ka(t, e, this.Ja, c, p, u, h, r),
                    o = t[e + 1],
                    t[e + 1] = t[e + 3],
                    t[e + 3] = o
                },
                Ka: function(t, e, o, i, r, n, a, s) {
                    for (var d = this.Ha, l = t[e] ^ o[0], c = t[e + 1] ^ o[1], p = t[e + 2] ^ o[2], u = t[e + 3] ^ o[3], h = 4, f = 1; f < d; f++) {
                        var v = i[l >>> 24] ^ r[c >>> 16 & 255] ^ n[p >>> 8 & 255] ^ a[255 & u] ^ o[h++]
                          , m = i[c >>> 24] ^ r[p >>> 16 & 255] ^ n[u >>> 8 & 255] ^ a[255 & l] ^ o[h++]
                          , y = i[p >>> 24] ^ r[u >>> 16 & 255] ^ n[l >>> 8 & 255] ^ a[255 & c] ^ o[h++];
                        u = i[u >>> 24] ^ r[l >>> 16 & 255] ^ n[c >>> 8 & 255] ^ a[255 & p] ^ o[h++],
                        l = v,
                        c = m,
                        p = y
                    }
                    v = (s[l >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ o[h++],
                    m = (s[c >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & l]) ^ o[h++],
                    y = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & c]) ^ o[h++],
                    u = (s[u >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & p]) ^ o[h++],
                    t[e] = v,
                    t[e + 1] = m,
                    t[e + 2] = y,
                    t[e + 3] = u
                },
                N: 8
            }),
            t.Ga = e.D(o)
        }()
    }();
    var No, Oo, So = function(t) {
        if (!t)
            return "";
        var e = po("main_login");
        if (!e)
            return "";
        if ("main_login" === t)
            return e;
        var o = po("vqq_".concat(t));
        return "qq" === e && o ? o : po(t)
    }, Ro = function(t) {
        if (void 0 === t && (t = "lossy"),
        void 0 !== No)
            return No;
        var e = new Image
          , o = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        return new Promise((function(i) {
            e.onload = function() {
                No = !0,
                i(!0)
            }
            ,
            e.onerror = function() {
                No = !1,
                i(!1)
            }
            ,
            e.src = "data:image/webp;base64,".concat(o[t])
        }
        ))
    };
    Ro(),
    function(t) {
        t.OUT = "out",
        t.IN = "in",
        t.H5 = "H5",
        t.CLIENT = "client"
    }(Oo || (Oo = {})),
    function() {
        function t() {
            var t = this;
            this.startTime = Date.now(),
            this.promise = new Promise((function(e, o) {
                t.fn = {
                    resolve: e,
                    reject: o
                }
            }
            ))
        }
        Object.defineProperty(t.prototype, Symbol.toStringTag, {
            get: function() {
                return this.promise[Symbol.toStringTag]
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.resolve = function(t) {
            this.fn.resolve(t)
        }
        ,
        t.prototype.reject = function(t) {
            this.fn.reject(t)
        }
        ,
        t.prototype.then = function(t, e) {
            return this.promise.then(t, e)
        }
        ,
        t.prototype.catch = function(t) {
            return this.promise.catch(t)
        }
        ,
        t.prototype.finally = function(t) {
            return this.promise.finally(t)
        }
    }();
    var ko, Mo, Vo = function() {
        function t(t, e) {
            this.storageKey = t,
            this.options = e
        }
        return Object.defineProperty(t.prototype, "storage", {
            get: function() {
                var t;
                return (null === (t = this.options) || void 0 === t ? void 0 : t.useSessionStorage) ? window.sessionStorage : window.localStorage
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.getData = function(t) {
            if (!t && this.storageData)
                return this.storageData;
            try {
                var e = this.storage.getItem(this.storageKey);
                if (e)
                    return this.storageData = JSON.parse(e),
                    this.storageData
            } catch (t) {}
        }
        ,
        t.prototype.setData = function(t) {
            try {
                this.storageData = t;
                var e = JSON.stringify(this.storageData);
                this.storage.setItem(this.storageKey, e)
            } catch (t) {}
        }
        ,
        t.prototype.clear = function() {
            this.storage.removeItem(this.storageKey)
        }
        ,
        t
    }();
    function Uo(t, e) {
        void 0 === e && (e = window.location.href);
        var o, i = new RegExp("(^|&|\\\\?)".concat(t, "=([^&]*)(&|$|#)"));
        return (o = e.match(i)) ? o[2] : ""
    }
    function Bo() {
        var t = URL.createObjectURL(new Blob);
        URL.revokeObjectURL(t);
        var e = t.split("/");
        return e[e.length - 1]
    }
    !function(t) {
        t[t.LessThan = -1] = "LessThan",
        t[t.EqualTo = 0] = "EqualTo",
        t[t.GreaterThan = 1] = "GreaterThan"
    }(ko || (ko = {})),
    !(Mo = new Vo("TxpCreativePlayer-vid-url").getData()) || function(t) {
        Object.entries(t).forEach((function(t) {
            t[0];
            var e = t[1];
            e && (Date.now(),
            e.time)
        }
        ))
    }(Mo);
    var zo = function() {
        return t.uaTool.os.iphone ? "iphone" : t.uaTool.os.ipad ? "ipad" : t.uaTool.os.android ? "android" : t.uaTool.os.windows || t.uaTool.os.mac ? "pc" : ""
    }
      , Ho = function(e) {
        if (/ptag=wx\.search/i.test(window.location.href))
            return 64;
        if (void 0 !== (null == e ? void 0 : e.playerChid))
            return e.playerChid;
        var o = NaN;
        return /(.*\.)3g\.qq\.com$/i.test(window.location.hostname) ? o = 13 : /(.*\.)?v\.qq\.com$/i.test(window.location.hostname) || t.uaTool.browser.qqlive ? o = t.uaTool.browser.wechat && t.uaTool.mobile ? 180 : /(.*\.)?v\.qq\.com$/i.test(window.location.hostname) && t.uaTool.mobile ? 191 : 0 : t.uaTool.browser.wechat && window.location.href.indexOf("/x/qqnews/") > -1 ? o = 3 : t.uaTool.browser.mqq && window.location.href.indexOf("/x/qqnews/") > -1 ? o = 10 : t.uaTool.browser.qqnews && (o = 2),
        o
    };
    function $o() {
        for (var t, e = document.location.toString().toLowerCase(), o = "", i = ["ptag", "adtag", "pgv_ref"], r = 0, n = i.length; r < n && !(o = Uo(i[r], e)); r++)
            ;
        if (!o)
            try {
                o = null !== (t = sessionStorage.getItem("ptag")) && void 0 !== t ? t : ""
            } catch (t) {}
        if (!o) {
            var a = function(t) {
                if (null == t || "" === t)
                    return "";
                var e = document.createElement("a");
                return e.href = t,
                e.hostname
            }(document.referrer);
            a && -1 === ["v.qq.com", "film.qq.com", "m.v.qq.com"].indexOf(a) && (o = a.replace(/\./g, "_"))
        }
        return o || (o = po("ptag")),
        o
    }
    var Ko = {
        exports: {}
    };
    Ko.exports = function() {
        var t = function() {}
          , e = {}
          , o = {}
          , i = {};
        function r(t, e) {
            if (t) {
                var r = i[t];
                if (o[t] = e,
                r)
                    for (; r.length; )
                        r[0](t, e),
                        r.splice(0, 1)
            }
        }
        function n(e, o) {
            e.call && (e = {
                success: e
            }),
            o.length ? (e.error || t)(o) : (e.success || t)(e)
        }
        function a(e, o, i, r) {
            var n, s, d, l = document, c = i.async, p = (i.numRetries || 0) + 1, u = i.before || t, h = e.replace(/[\?|#].*$/, ""), f = e.replace(/^(css|img|module|nomodule)!/, "");
            if (r = r || 0,
            /(^css!|\.css$)/.test(h))
                (d = l.createElement("link")).rel = "stylesheet",
                d.href = f,
                (n = "hideFocus"in d) && d.relList && (n = 0,
                d.rel = "preload",
                d.as = "style");
            else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h))
                (d = l.createElement("img")).src = f;
            else if ((d = l.createElement("script")).src = f,
            d.async = void 0 === c || c,
            s = "noModule"in d,
            /^module!/.test(h)) {
                if (!s)
                    return o(e, "l");
                d.type = "module"
            } else if (/^nomodule!/.test(h) && s)
                return o(e, "l");
            d.onload = d.onerror = d.onbeforeload = function(t) {
                var s = t.type[0];
                if (n)
                    try {
                        d.sheet.cssText.length || (s = "e")
                    } catch (t) {
                        18 != t.code && (s = "e")
                    }
                if ("e" == s) {
                    if ((r += 1) < p)
                        return a(e, o, i, r)
                } else if ("preload" == d.rel && "style" == d.as)
                    return d.rel = "stylesheet";
                o(e, s, t.defaultPrevented)
            }
            ,
            !1 !== u(e, d) && l.head.appendChild(d)
        }
        function s(t, e, o) {
            var i, r, n = (t = t.push ? t : [t]).length, s = n, d = [];
            for (i = function(t, o, i) {
                if ("e" == o && d.push(t),
                "b" == o) {
                    if (!i)
                        return;
                    d.push(t)
                }
                --n || e(d)
            }
            ,
            r = 0; r < s; r++)
                a(t[r], i, o)
        }
        function d(t, o, i) {
            var a, d;
            if (o && o.trim && (a = o),
            d = (a ? i : o) || {},
            a) {
                if (a in e)
                    throw "LoadJS";
                e[a] = !0
            }
            function l(e, o) {
                s(t, (function(t) {
                    n(d, t),
                    e && n({
                        success: e,
                        error: o
                    }, t),
                    r(a, t)
                }
                ), d)
            }
            if (d.returnPromise)
                return new Promise(l);
            l()
        }
        return d.ready = function(t, e) {
            return function(t, e) {
                t = t.push ? t : [t];
                var r, n, a, s = [], d = t.length, l = d;
                for (r = function(t, o) {
                    o.length && s.push(t),
                    --l || e(s)
                }
                ; d--; )
                    n = t[d],
                    (a = o[n]) ? r(n, a) : (i[n] = i[n] || []).push(r)
            }(t, (function(t) {
                n(e, t)
            }
            )),
            d
        }
        ,
        d.done = function(t) {
            r(t, [])
        }
        ,
        d.reset = function() {
            e = {},
            o = {},
            i = {}
        }
        ,
        d.isDefined = function(t) {
            return t in e
        }
        ,
        d
    }();
    var Go = function(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }(Ko.exports);
    function qo(t, e, o, i) {
        return new (o || (o = Promise))((function(r, n) {
            function a(t) {
                try {
                    d(i.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function s(t) {
                try {
                    d(i.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function d(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof o ? e : new o((function(t) {
                    t(e)
                }
                ))).then(a, s)
            }
            d((i = i.apply(t, e || [])).next())
        }
        ))
    }
    function Yo(t, e) {
        var o, i, r, n = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0),
        a.throw = s(1),
        a.return = s(2),
        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function s(s) {
            return function(d) {
                return function(s) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0,
                    s[0] && (n = 0)),
                    n; )
                        try {
                            if (o = 1,
                            i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, s[1])).done)
                                return r;
                            switch (i = 0,
                            r && (s = [2 & s[0], r.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return n.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                n.label++,
                                i = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = n.ops.pop(),
                                n.trys.pop();
                                continue;
                            default:
                                if (!((r = (r = n.trys).length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    n = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    n.label = s[1];
                                    break
                                }
                                if (6 === s[0] && n.label < r[1]) {
                                    n.label = r[1],
                                    r = s;
                                    break
                                }
                                if (r && n.label < r[2]) {
                                    n.label = r[2],
                                    n.ops.push(s);
                                    break
                                }
                                r[2] && n.ops.pop(),
                                n.trys.pop();
                                continue
                            }
                            s = e.call(t, n)
                        } catch (t) {
                            s = [6, t],
                            i = 0
                        } finally {
                            o = r = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, d])
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var Fo = function(t) {
        return qo(void 0, void 0, void 0, (function() {
            var e;
            return Yo(this, (function(o) {
                switch (o.label) {
                case 0:
                    return [4, qo(void 0, void 0, void 0, (function() {
                        return Yo(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return window.GameSessionSDK ? [2, window.GameSessionSDK] : [4, Go("https://active.v.qq.com/game-session-sdk/game-session-web-sdk.js", {
                                    returnPromise: !0
                                })];
                            case 1:
                                return t.sent(),
                                [2, window.GameSessionSDK]
                            }
                        }
                        ))
                    }
                    ))];
                case 1:
                    return null == (e = o.sent()) || e.getGameSession(t),
                    [2]
                }
            }
            ))
        }
        ))
    }
      , Wo = function() {
        function t() {
            this.QIMEISDK_PREFIX = "https://staticfile.qq.com/qimei/qimeisdk-web/0.6.5/lite.js",
            this.checkQimeiWebIsLoad() || function(t, e, o) {
                var i = document.createElement("script");
                i.type = "text/javascript",
                i.charset = "UTF-8",
                i.src = t;
                if (i.onerror = function(t) {
                    !0
                }
                ,
                void (i.addEventListener ? i.addEventListener("load", (function() {
                    !0
                }
                ), !1) : i.attachEvent && i.attachEvent("onreadystatechange", (function() {
                    "complete" === window.event.srcElement.readyState && !0
                }
                )))) {
                    var r = document.createElement("base");
                    r.href = i.src.match(/.+\//)[0],
                    o.doc.getElementsByTagName("head")[0].appendChild(r)
                }
                document.getElementsByTagName("head")[0].appendChild(i),
                setTimeout((function() {}
                ), 5e3)
            }(this.QIMEISDK_PREFIX)
        }
        return t.prototype.getQimei32 = function() {
            try {
                return window.qb_external.getQ16()
            } catch (t) {
                return this.getQimei32FromSdk()
            }
        }
        ,
        t.prototype.getQimei36 = function() {
            try {
                return window.qb_external.getQ36()
            } catch (t) {
                return this.getQimei36FromSdk()
            }
        }
        ,
        t.prototype.getQimei32FromSdk = function() {
            if (!window.QimeiWebLite)
                return po("_qimei_q32");
            try {
                return this.getQimeiData().q32 || null
            } catch (t) {
                return po("_qimei_q32")
            }
        }
        ,
        t.prototype.getQimei36FromSdk = function() {
            if (!window.QimeiWebLite)
                return po("_qimei_q36");
            try {
                return this.getQimeiData().q36 || null
            } catch (t) {
                return po("_qimei_q36")
            }
        }
        ,
        t.prototype.checkQimeiWebIsLoad = function() {
            var t = this;
            if (window.QimeiWebLite)
                return !0;
            try {
                var e = document.querySelectorAll("script");
                return Array.from(e).some((function(e) {
                    var o;
                    return null === (o = e.src) || void 0 === o ? void 0 : o.includes(t.QIMEISDK_PREFIX)
                }
                ))
            } catch (t) {
                return !1
            }
        }
        ,
        t.prototype.getQimeiData = function() {
            return this.qimeiWeb || (this.qimeiWeb = new window.QimeiWebLite({
                appKey: "fc347096e93d8844"
            })),
            this.qimeiWeb.getLocalQimei36()
        }
        ,
        t
    }()
      , jo = new Wo;
    function Qo() {
        var t = window.location.href;
        return !navigator.userAgent.toLowerCase().includes("micromessenger") && /^https?:\/\/v\.qq\.com\/x\/(cover|page)/.test(t)
    }
    var Zo = function() {
        function t() {
            this.name = "module"
        }
        return t.prototype.setOptions = function(t) {
            this.options = t
        }
        ,
        t.prototype.setAdCore = function(t) {
            this.adCore = t,
            this.logger = t.logger.createLogger(this.name)
        }
        ,
        t.prototype.init = function() {}
        ,
        t
    }()
      , Xo = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "adCtrlModule",
            e.runningSingleAdMap = new Map,
            e.runningMultipleAdMap = new Map,
            e
        }
        return i(e, t),
        e.prototype.destroyAd = function(t) {
            var e;
            this.logger.log("".concat(t.adType, " 类型广告销毁"));
            var o = this.adCore.plugin.getAdPlugin(t.adType);
            if (null == o ? void 0 : o.isMultiple) {
                var i = null === (e = t.adInfo) || void 0 === e ? void 0 : e.orderId;
                if (i) {
                    var r = this.runningMultipleAdMap.get(t.adType);
                    r && (r.delete(i),
                    0 === r.size && this.runningMultipleAdMap.delete(t.adType))
                }
            } else {
                this.runningSingleAdMap.get(t.adType) === t && this.runningSingleAdMap.delete(t.adType)
            }
        }
        ,
        e.prototype.loadAd = function(t) {
            this.logger.log("loadAd", t);
            var e = this.adCore.plugin.getAdPlugin(t);
            if (null == e ? void 0 : e.isPointAd) {
                return this.logger.warn("点位广告请使用 `loadAdOrder` 方法"),
                !1
            }
            var o = this.adCore.order.getAdOrder(t);
            return this.loadAdOrder(o)
        }
        ,
        e.prototype.loadAdOrder = function(t) {
            if (!t) {
                var e = "没有找到广告订单";
                return this.logger.warn(e),
                !1
            }
            var o = t.adType;
            this.logger.log("loadAdOrder", o);
            var i = this.adCore.plugin.getAdPlugin(o);
            if (!i) {
                e = "'".concat(o, "' 类型的广告未注册");
                return this.logger.warn(e),
                !1
            }
            return i.isMultiple ? this.createMultipleAd(o, i, t) : this.createSingleAd(o, i, t)
        }
        ,
        e.prototype.getSingleAds = function() {
            return Array.from(this.runningSingleAdMap.values())
        }
        ,
        e.prototype.getMultipleAds = function() {
            return Array.from(this.runningMultipleAdMap.entries())
        }
        ,
        e.prototype.getRunningAds = function(t, e) {
            var o = this.adCore.plugin.getAdPlugin(t);
            if (!(null == o ? void 0 : o.isMultiple))
                return (i = this.runningSingleAdMap.get(t)) ? [i] : [];
            var i, r = this.runningMultipleAdMap.get(t);
            return (null == r ? void 0 : r.size) ? e ? (i = r.get(e)) ? [i] : [] : Array.from(r.values()) : []
        }
        ,
        e.prototype.reset = function(t) {
            this.logger.log("reset"),
            this.forEachAd((function(e) {
                e.stop({
                    forceStop: !0,
                    reason: t || "ctrl 中被调用 reset"
                })
            }
            )),
            this.runningSingleAdMap.clear(),
            this.runningMultipleAdMap.clear()
        }
        ,
        e.prototype.forEachAd = function(t) {
            this.runningSingleAdMap.forEach((function(e) {
                t(e)
            }
            )),
            this.runningMultipleAdMap.forEach((function(e) {
                e.forEach((function(e) {
                    t(e)
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setPreloadPreAd = function(t) {
            this.runningSingleAdMap.set(p.PRE, t)
        }
        ,
        e.prototype.createMultipleAd = function(t, e, o) {
            var i = this
              , r = this.runningMultipleAdMap.get(t);
            r || (r = new Map,
            this.runningMultipleAdMap.set(t, r));
            var n = o.orders.filter((function(t) {
                return !r.has(t.orderId)
            }
            ));
            if (0 === n.length)
                return !0;
            try {
                return n.forEach((function(t) {
                    var n = e.creator(i.adCore, D(D({}, o), {
                        orders: [t],
                        empty: []
                    }));
                    n && (r.set(t.orderId, n),
                    n.load())
                }
                )),
                !0
            } catch (e) {
                var a = "load ".concat(t, " ad error");
                this.adCore.event.emit(Se.AD_ERROR, {
                    adType: t,
                    msg: a,
                    event: e
                })
            }
            return !0
        }
        ,
        e.prototype.createSingleAd = function(t, e, o) {
            var i = this.runningSingleAdMap.get(t);
            i && (this.logger.log("存在老的广告未结束，调用 stop：".concat(t)),
            i.stop({
                forceStop: !0,
                reason: "存在老的广告未结束，调用 stop"
            }));
            try {
                var r = e.creator(this.adCore, D({}, o));
                if (r)
                    return this.runningSingleAdMap.set(t, r),
                    r.load(),
                    0 !== r.order.orders.length
            } catch (e) {
                return this.adCore.event.emit(Se.AD_ERROR, {
                    adType: t,
                    msg: "load ".concat(t, " ad error"),
                    event: e
                }),
                !1
            }
            return !1
        }
        ,
        e
    }(Zo)
      , Jo = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "adPluginModule",
            e.adPluginMap = new Map,
            e
        }
        return i(e, t),
        e.prototype.register = function(t) {
            var e = this;
            t.forEach((function(t) {
                e.adPluginMap.set(t.adType, t),
                t.watcher && e.adCore.watcher.register(t.watcher)
            }
            ))
        }
        ,
        e.prototype.getAdPlugin = function(t) {
            var e;
            return null !== (e = this.adPluginMap.get(t)) && void 0 !== e ? e : null
        }
        ,
        e.prototype.getAllPlugin = function() {
            return Array.from(this.adPluginMap.values())
        }
        ,
        e
    }(Zo)
      , ti = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "adblockCheckerModule",
            e.hasCallDetectAdBlock = !1,
            e.enabled = !1,
            e
        }
        return i(e, t),
        e.prototype.init = function() {
            this.detectReady = this.doCheckAdblock()
        }
        ,
        Object.defineProperty(e.prototype, "adBlockEnabled", {
            get: function() {
                return this.enabled
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.checkAdblock = function() {
            return O(this, void 0, void 0, (function() {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.detectReady];
                    case 1:
                        return t.sent(),
                        [2, this.adBlockEnabled]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.adblockDetect = function() {
            return O(this, void 0, void 0, (function() {
                var t = this;
                return S(this, (function(e) {
                    return /mobile|mqqbrowser|android|iphone/gi.test(navigator.userAgent) ? [2] : (this.logger.log("adblock 检查"),
                    [2, new Promise((function(e) {
                        try {
                            var o = document.createElement("div");
                            o.className = "adsbox txp_ad_center",
                            o.style.cssText += "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;";
                            var i = document.createElement("div");
                            i.className = "side_ad txp_ad_center",
                            i.style.cssText += "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;",
                            document.body.appendChild(o),
                            document.body.appendChild(i),
                            setTimeout((function() {
                                try {
                                    t.hasCallDetectAdBlock = !0,
                                    0 !== o.offsetHeight && null !== i.offsetParent || (t.logger.log("adBlockEnabled", !0),
                                    t.enabled = !0,
                                    window.__adBlockEnabled = t.enabled,
                                    t.options.onAdBlockEnabledChange(!0)),
                                    o.remove(),
                                    i.remove(),
                                    e()
                                } catch (t) {
                                    e()
                                }
                            }
                            ), 100)
                        } catch (t) {
                            e()
                        }
                    }
                    ))])
                }
                ))
            }
            ))
        }
        ,
        e.prototype.doCheckAdblock = function() {
            return O(this, void 0, void 0, (function() {
                var t = this;
                return S(this, (function(e) {
                    return window.document && document.body ? [2, this.adblockDetect()] : [2, new Promise((function(e) {
                        window.document.addEventListener("readystatechange", (function() {
                            t.hasCallDetectAdBlock || "interactive" !== document.readyState && "complete" !== document.readyState || e(t.adblockDetect())
                        }
                        ))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        e
    }(Zo)
      , ei = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "apiModule",
            e
        }
        return i(e, t),
        e.prototype.setAdOrder = function(t) {
            this.logger.log("setAdOrder", t),
            this.adCore.order.setAdOrder(t)
        }
        ,
        e.prototype.loadAd = function(t) {
            return this.logger.log("loadAd", t),
            this.adCore.ctrl.loadAd(t)
        }
        ,
        e.prototype.playAd = function(t, e) {
            var o = this.adCore.ctrl.getRunningAds(t, e);
            0 !== o.length ? null == o || o.forEach((function(t) {
                t.play()
            }
            )) : this.adCore.event.emit(Se.AD_STOP, {
                adType: t
            })
        }
        ,
        e.prototype.pauseAd = function(t, e) {
            (this.logger.log("pauseAd", t, e),
            t) ? this.adCore.ctrl.getRunningAds(t, e).forEach((function(t) {
                t.pause()
            }
            )) : this.adCore.ctrl.forEachAd((function(t) {
                t.pause()
            }
            ))
        }
        ,
        e.prototype.resumeAd = function(t, e) {
            (this.logger.log("resumeAd", t, e),
            t) ? this.adCore.ctrl.getRunningAds(t, e).forEach((function(t) {
                t.resume()
            }
            )) : this.adCore.ctrl.forEachAd((function(t) {
                t.resume()
            }
            ))
        }
        ,
        e.prototype.stopAd = function(t, e, o) {
            (this.logger.log("stopAd", t, e, o),
            t) ? this.adCore.ctrl.getRunningAds(t, e).forEach((function(t) {
                t.stop({
                    reason: o || "外部调用 stopAd",
                    forceStop: !0
                })
            }
            )) : this.stopAllAd(o)
        }
        ,
        e.prototype.stopAllAd = function(t) {
            this.logger.log("stopAllAd"),
            this.adCore.event.emit(Se.AD_STOP_ALL, null),
            this.reset(t || "调用 stopAllAd")
        }
        ,
        e.prototype.muteAd = function() {
            this.logger.log("muteAd"),
            this.adCore.ctrl.forEachAd((function(t) {
                t.mute()
            }
            ))
        }
        ,
        e.prototype.unMuteAd = function() {
            this.logger.log("unMuteAd"),
            this.adCore.ctrl.forEachAd((function(t) {
                t.unMute()
            }
            ))
        }
        ,
        e.prototype.setVolume = function(t) {
            this.logger.log("setVolume", t),
            this.adCore.ctrl.forEachAd((function(e) {
                e.setVolume(t)
            }
            ))
        }
        ,
        e.prototype.reset = function(t) {
            this.logger.log("reset"),
            this.adCore.ctrl.reset(t),
            this.adCore.order.reset(),
            this.adCore.watcher.reset()
        }
        ,
        e.prototype.resizeAd = function(t) {
            this.logger.log("resizeAd", t),
            this.adCore.ctrl.forEachAd((function(e) {
                e.resize(t)
            }
            ))
        }
        ,
        e.prototype.adjustUI = function(t) {
            this.logger.log("adjustUI", t),
            this.adCore.ctrl.forEachAd((function(e) {
                e.adjustUI(t)
            }
            ))
        }
        ,
        e.prototype.setAdSmallWindow = function(t) {
            this.logger.log("setAdSmallWindow", t),
            this.adCore.ctrl.forEachAd((function(e) {
                e.setAdSmallWindow(t)
            }
            ))
        }
        ,
        e.prototype.hideAdBeforeResize = function() {
            this.logger.log("hideAdBeforeResize"),
            this.adCore.ctrl.forEachAd((function(t) {
                t.hideAdBeforeResize()
            }
            ))
        }
        ,
        e.prototype.seekStart = function() {
            this.logger.log("seekStart"),
            this.adCore.ctrl.forEachAd((function(t) {
                t.seekStart()
            }
            ))
        }
        ,
        e.prototype.reportAd = function(t, e, o) {
            this.logger.log("reportAd", t, e),
            this.adCore.ctrl.getRunningAds(t, o).forEach((function(t) {
                t.report(e)
            }
            ))
        }
        ,
        e
    }(Zo)
      , oi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "cgiReportModule",
            e.urlList = [],
            e.timer = null,
            e
        }
        return i(e, t),
        e.prototype.getOriginReportUrl = function(t, e, o) {
            var i = this.getFullUrl(t, e);
            if ((null == o ? void 0 : o.replaceDict) && (i = ve(i, o.replaceDict)),
            null == o ? void 0 : o.appendParams) {
                var r = fe(i)
                  , n = i.split("?")[0]
                  , a = D(D({}, r), o.appendParams);
                i = me(n, a)
            }
            return i
        }
        ,
        e.prototype.getOtherReportUrl = function(t, e) {
            var o = t;
            return (null == e ? void 0 : e.replaceDict) && (o = ve(o, e.replaceDict)),
            o
        }
        ,
        e.prototype.reportOriginUrl = function(t, e, o) {
            var i = this.getOriginReportUrl(t, e, o);
            this.logger.log("上报链接", i),
            this.requestReportUrl(i)
        }
        ,
        e.prototype.reportOtherUrl = function(t, e) {
            var o = this.getOtherReportUrl(t, e);
            this.logger.log("上报链接", o),
            this.requestReportUrl(o)
        }
        ,
        e.prototype.requestReportUrl = function(t) {
            var e = this
              , o = t;
            -1 === o.indexOf("uniquetimestamp") && (o = me(o, {
                uniquetimestamp: Date.now()
            })),
            this.timer ? this.urlList.push(o) : (this.timer = +setTimeout((function() {
                e.timeoutHandler()
            }
            ), 1e3),
            this.options.reportUrl(o).then((function() {
                e.timeoutHandler()
            }
            )))
        }
        ,
        e.prototype.getFullUrl = function(t, e) {
            var o = e.oadId
              , i = e.orderIdx
              , r = {
                oadid: o || "",
                url: window.location.href,
                lcount: i || 1,
                t: 0
            }
              , n = fe(t)
              , a = t.split("?")[0]
              , s = D(D(D({}, r), this.options.getConfig()), n);
            return me(a, s, !0)
        }
        ,
        e.prototype.timeoutHandler = function() {
            0 !== this.urlList.length ? (this.timer && clearTimeout(this.timer),
            this.timer = null,
            this.requestReportUrl(this.urlList.shift())) : this.timer = null
        }
        ,
        e
    }(Zo)
      , ii = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "configModule",
            e.renderQrCode = function(t, o, i) {
                var r, n;
                return null === (n = (r = e.options).renderQrCode) || void 0 === n ? void 0 : n.call(r, t, o, i)
            }
            ,
            e
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "simpleMode", {
            get: function() {
                return "1" === String(this.playerData.simpleMode)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "pluginName", {
            get: function() {
                return this.options.pluginName
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "clientVersion", {
            get: function() {
                return this.options.clientVersion || ""
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "forbidLinkJump", {
            get: function() {
                return !!this.options.forbidLinkJump
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isMobile", {
            get: function() {
                return !!this.options.isMobile
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "showCloseButton", {
            get: function() {
                return this.options.showCloseButton
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "disablePauseAd", {
            get: function() {
                return !!this.options.disablePauseAd
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "playerData", {
            get: function() {
                return this.options.getPlayerData()
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "outerPlayerData", {
            get: function() {
                return this.options.getOuterPlayerData()
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "phlsConfig", {
            get: function() {
                return this.options.phlsConfig || {}
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.getVrParams = function() {
            var t, e;
            return (null === (e = (t = this.options).getVrParams) || void 0 === e ? void 0 : e.call(t)) || {}
        }
        ,
        e.prototype.showOpenVIPGuide = function() {
            return this.options.showOpenVIPGuide()
        }
        ,
        e.prototype.resetBarrageZindex = function() {
            var t, e;
            return null === (e = (t = this.options).resetBarrageZindex) || void 0 === e ? void 0 : e.call(t)
        }
        ,
        e.prototype.getPlayerSize = function() {
            return this.options.getPlayerSize()
        }
        ,
        e.prototype.setPHLSConfig = function(t) {
            this.options.phlsConfig = D(D({}, this.options.phlsConfig), t)
        }
        ,
        e.prototype.requestProxyHttp = function(t, e) {
            return O(this, void 0, void 0, (function() {
                var o, i;
                return S(this, (function(r) {
                    return [2, null === (i = (o = this.options).requestProxyHttp) || void 0 === i ? void 0 : i.call(o, t, e)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.createPlayer = function(t, e, o) {
            return this.options.createPlayer(t, e, o)
        }
        ,
        e.prototype.launchMiniProgram = function(t) {
            return !!this.options.launchMiniProgram && this.options.launchMiniProgram(t)
        }
        ,
        e.prototype.openQQLive = function(t, e) {
            this.options.openQQLive && this.options.openQQLive(t, e)
        }
        ,
        e.prototype.amsLinkReportClick = function(t, e) {
            var o, i;
            null === (i = (o = this.options).amsLinkReportClick) || void 0 === i || i.call(o, t, e)
        }
        ,
        e.prototype.openHintBrowser = function(t) {
            return !!this.options.openHintBrowser && this.options.openHintBrowser(t)
        }
        ,
        e.prototype.getContainerSize = function() {
            return this.options.getContainerSize()
        }
        ,
        e.prototype.getTabExperimentId = function() {
            var t, e;
            return (null === (e = (t = this.options).getTabExperimentId) || void 0 === e ? void 0 : e.call(t)) || ""
        }
        ,
        e
    }(Zo)
      , ri = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "eventModule",
            e.eventEmitter = new jt,
            e
        }
        return i(e, t),
        e.prototype.on = function(t, e) {
            this.eventEmitter.on(t, e)
        }
        ,
        e.prototype.off = function(t, e) {
            this.eventEmitter.off(t, e)
        }
        ,
        e.prototype.emit = function(t, e) {
            this.eventEmitter.emit(t, e)
        }
        ,
        e
    }(Zo);
    var ni, ai, si = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "loggerModule",
            e
        }
        return i(e, t),
        e.create = function(t, o) {
            var i = o || e.originLogger;
            return {
                info: function() {
                    for (var o = [], r = 0; r < arguments.length; r++)
                        o[r] = arguments[r];
                    e.LOCAL_LOG,
                    null == i || i.info.apply(i, R(["<".concat(t, ">")], o, !1))
                },
                log: function() {
                    for (var o = [], r = 0; r < arguments.length; r++)
                        o[r] = arguments[r];
                    e.LOCAL_LOG,
                    null == i || i.log.apply(i, R(["<".concat(t, ">")], o, !1))
                },
                warn: function() {
                    for (var o = [], r = 0; r < arguments.length; r++)
                        o[r] = arguments[r];
                    e.LOCAL_LOG,
                    null == i || i.warn.apply(i, R(["<".concat(t, ">")], o, !1))
                },
                error: function() {
                    for (var o = [], r = 0; r < arguments.length; r++)
                        o[r] = arguments[r];
                    e.LOCAL_LOG,
                    null == i || i.error.apply(i, R(["<".concat(t, ">")], o, !1))
                }
            }
        }
        ,
        e.prototype.init = function() {
            e.originLogger = this.options
        }
        ,
        e.prototype.createLogger = function(t) {
            return e.create(t, this.options)
        }
        ,
        e.LOCAL_LOG = !0,
        e
    }(Zo), di = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "orderModule",
            e.adOrderMap = new Map,
            e.adExtraDataMap = new Map,
            e.adPointMap = new Map,
            e.setAdOrderMap = function(t) {
                e.adOrderMap.set(t.adType, t),
                e.adCore.event.emit(Se.AD_ORDER_SET, {
                    adType: t.adType,
                    adOrder: t
                })
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.setAdOrder = function(t) {
            var e, o, i = this;
            if (this.adCore.vrBase.setIsVip(!!(null === (e = t.auth) || void 0 === e ? void 0 : e.is_vip)),
            this.adCore.vrBase.setStrategyIds(null !== (o = t.strategy_ids) && void 0 !== o ? o : []),
            this.adCore.vr.reportSetAdOrder(t),
            t.ad_scene !== s.ANCHOR) {
                var r = this.adCore.plugin.getAllPlugin();
                null == r || r.forEach((function(e) {
                    var o = e.getOrderData(i.adCore, t);
                    if (o) {
                        var r = o.adData
                          , n = o.extraData;
                        (null == r ? void 0 : r.length) && r.forEach(i.setAdOrderMap),
                        (null == n ? void 0 : n.length) && n.forEach((function(t) {
                            var e = t.adType
                              , o = t.data;
                            i.addExtraData(e, o)
                        }
                        ))
                    }
                }
                ))
            } else
                this.handleAnchorAdOrder(t)
        }
        ,
        e.prototype.getAdOrder = function(t) {
            var e;
            return null !== (e = this.adOrderMap.get(t)) && void 0 !== e ? e : null
        }
        ,
        e.prototype.getPreAdOrder = function() {
            var t = this.getAdOrder(p.PRE)
              , e = this.getAdOrder(p.BROADCAST);
            if (t || e)
                return D(D({}, t || e), {
                    adType: p.PRE,
                    orders: R(R([], (null == t ? void 0 : t.orders) || [], !0), (null == e ? void 0 : e.orders) || [], !0),
                    empty: R(R([], (null == t ? void 0 : t.empty) || [], !0), (null == e ? void 0 : e.empty) || [], !0)
                })
        }
        ,
        e.prototype.getPoints = function(t) {
            var e, o = this.adPointMap.get(t);
            return Array.from(null !== (e = null == o ? void 0 : o.keys()) && void 0 !== e ? e : [])
        }
        ,
        e.prototype.getExtraData = function(t) {
            return this.adExtraDataMap.get(t)
        }
        ,
        e.prototype.getPointOrderFromPoint = function(t, e) {
            var o = this.adPointMap.get(t);
            if (o)
                return o.get(e)
        }
        ,
        e.prototype.getAdContext = function() {
            return Array.from(this.adOrderMap.values()).map((function(t) {
                return t.orders.map((function(t) {
                    return t.data.order.ad_context
                }
                ))
            }
            )).flat().filter(Boolean)
        }
        ,
        e.prototype.clearMidOrder = function() {
            this.adOrderMap.delete(p.MID)
        }
        ,
        e.prototype.feedbackConnerOrder = function(t) {
            var e = this.adPointMap.get(p.CORNER);
            null == e || e.delete(t.point)
        }
        ,
        e.prototype.reset = function() {
            this.adOrderMap.clear(),
            this.adPointMap.clear(),
            this.adExtraDataMap.clear()
        }
        ,
        e.prototype.checkPointConflict = function(t, e, o) {
            var i = [];
            return this.adPointMap.forEach((function(r) {
                r.forEach((function(r, n) {
                    (n.type === y.TIMESTAMP ? e : t) >= n.begin - o && t <= n.end + o && i.push(r)
                }
                ))
            }
            )),
            i
        }
        ,
        e.prototype.setPreloadData = function(t) {
            var e, o, i = this;
            null === (e = t.adData) || void 0 === e || e.forEach(this.setAdOrderMap),
            null === (o = t.extraData) || void 0 === o || o.forEach((function(t) {
                i.addExtraData(t.adType, t.data)
            }
            ))
        }
        ,
        e.prototype.addExtraData = function(t, e) {
            var o = this.adExtraDataMap.get(t);
            o || (o = {}),
            o = D(D({}, o), e),
            this.adExtraDataMap.set(t, o)
        }
        ,
        e.prototype.handleAnchorAdOrder = function(t) {
            var e = this
              , o = this.adCore.plugin.getAllPlugin();
            this.adPointMap.clear(),
            null == o || o.forEach((function(t) {
                t.isPointAd && e.adOrderMap.delete(t.adType)
            }
            )),
            this.adCore.pointFrequencyControl.clear(),
            null == o || o.forEach((function(o) {
                var i = o.getOrderData(e.adCore, t);
                if (i) {
                    var r = i.pointAdData;
                    (null == r ? void 0 : r.length) && r.forEach((function(t) {
                        var o = e.adPointMap.get(t.adType);
                        o || (o = new Map,
                        e.adPointMap.set(t.adType, o)),
                        o.set(t.point, t)
                    }
                    ))
                }
            }
            )),
            this.adPointMap.forEach((function(t, o) {
                var i = {
                    adType: o,
                    extraData: {},
                    orders: [],
                    empty: []
                };
                t.forEach((function(t) {
                    var e, o;
                    (e = i.empty).push.apply(e, t.empty),
                    (o = i.orders).push.apply(o, t.orders),
                    i.extraData = t.extraData
                }
                )),
                e.setAdOrderMap(i)
            }
            ))
        }
        ,
        e
    }(Zo), li = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "outerEventModule",
            e.eventEmitter = new jt,
            e
        }
        return i(e, t),
        e.prototype.init = function() {
            this.initEvents()
        }
        ,
        Object.defineProperty(e.prototype, "ctrlBarVisible", {
            get: function() {
                return this.options.getCtrlBarVisible()
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isMimiPlayer", {
            get: function() {
                return this.options.getIsMimiPlayer()
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.on = function(t, e) {
            this.eventEmitter.on(t, e)
        }
        ,
        e.prototype.off = function(t, e) {
            this.eventEmitter.off(t, e)
        }
        ,
        e.prototype.emit = function(t, e) {
            this.eventEmitter.emit(t, e)
        }
        ,
        e.prototype.destroy = function() {
            this.eventEmitter.removeAllListeners(),
            this.options.removeAllEvents()
        }
        ,
        e.prototype.initEvents = function() {
            var t = this
              , e = this.options.getEvents();
            Object.entries(e).forEach((function(e) {
                var o = e[0];
                (0,
                e[1])((function(e) {
                    t.eventEmitter.emit(o, {
                        event: o,
                        data: e
                    })
                }
                ))
            }
            ))
        }
        ,
        e
    }(Zo), ci = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.cacheData = new Map,
            e
        }
        return i(e, t),
        e.prototype.appendKey = function(t) {
            var e = this.cacheData.get(t) || 0;
            this.cacheData.set(t, e + 1)
        }
        ,
        e.prototype.checkFrequency = function(t) {
            if (!(null == t ? void 0 : t.frequencyKey) || !t.limit)
                return !1;
            var e = this.cacheData.get(t.frequencyKey);
            return !!e && e >= t.limit
        }
        ,
        e.prototype.clear = function() {
            this.cacheData.clear()
        }
        ,
        e
    }(Zo), pi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "preloadModule",
            e.preloadOpts = null,
            e.adOrderMap = new Map,
            e.adExtraDataMap = new Map,
            e.preloadPreAd = null,
            e
        }
        return i(e, t),
        e.prototype.preload = function(t, e) {
            return O(this, void 0, void 0, (function() {
                return S(this, (function(o) {
                    return this.preloadOpts = e,
                    this.preloadOpts ? (this.setPreloadData(t),
                    [2, this.preloadPre()]) : (this.logger.log("预加载未传入 vid"),
                    [2, Promise.reject()])
                }
                ))
            }
            ))
        }
        ,
        e.prototype.playSessionStart = function(t) {
            var e, o, i;
            if ((null === (e = this.preloadOpts) || void 0 === e ? void 0 : e.vid) !== t)
                return this.logger.log((null === (o = this.preloadOpts) || void 0 === o ? void 0 : o.vid) ? "预加载与实际播放不一致" : "没有预加载数据"),
                null === (i = this.preloadPreAd) || void 0 === i || i.stop({
                    forceStop: !0,
                    reason: "预加载与实际播放不一致",
                    skipEmitAdEnd: !0
                }),
                void this.clear();
            this.adCore.modules.order.setPreloadData({
                adData: Array.from(this.adOrderMap.values()),
                extraData: Array.from(this.adExtraDataMap.entries()).map((function(t) {
                    return {
                        adType: t[0],
                        data: t[1]
                    }
                }
                ))
            }),
            this.preloadPreAd && (this.logger.log("使用预加载前贴"),
            this.adCore.modules.ctrl.setPreloadPreAd(this.preloadPreAd)),
            this.clear()
        }
        ,
        e.prototype.getAd = function() {
            return this.preloadPreAd
        }
        ,
        e.prototype.clear = function() {
            this.preloadOpts = null,
            this.adOrderMap.clear(),
            this.adExtraDataMap.clear(),
            this.preloadPreAd = null
        }
        ,
        e.prototype.setPreloadData = function(t) {
            var e = this;
            this.adCore.vr.reportSetAdOrder(t, !0);
            var o = this.adCore.plugin.getAllPlugin();
            null == o || o.forEach((function(o) {
                var i = o.getOrderData(e.adCore, t);
                if (i) {
                    var r = i.adData
                      , n = i.extraData;
                    (null == r ? void 0 : r.length) && r.forEach((function(t) {
                        t.isPreload = !0,
                        e.adOrderMap.set(t.adType, t)
                    }
                    )),
                    (null == n ? void 0 : n.length) && n.forEach((function(t) {
                        var o = t.adType
                          , i = t.data;
                        e.adExtraDataMap.set(o, i)
                    }
                    ))
                }
            }
            ))
        }
        ,
        e.prototype.preloadPre = function() {
            return O(this, void 0, void 0, (function() {
                var t, e, o;
                return S(this, (function(i) {
                    if (!(t = this.getPreOrder()))
                        return this.logger.log("预加载前贴，未找到订单"),
                        [2, Promise.reject()];
                    try {
                        if (e = this.adCore.plugin.getAdPlugin(p.PRE),
                        o = null == e ? void 0 : e.creator(this.adCore, D({}, t)))
                            return this.preloadPreAd = o,
                            o.load(),
                            [2, 0 !== o.order.orders.length]
                    } catch (t) {
                        this.adCore.event.emit(Se.AD_ERROR, {
                            adType: p.PRE,
                            msg: "预加载前贴报错",
                            event: t
                        })
                    }
                    return [2, Promise.reject()]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getPreOrder = function() {
            var t = this.adOrderMap.get(p.PRE)
              , e = this.adOrderMap.get(p.BROADCAST);
            if (t || e)
                return D(D({}, t || e), {
                    adType: p.PRE,
                    orders: R(R([], (null == t ? void 0 : t.orders) || [], !0), (null == e ? void 0 : e.orders) || [], !0),
                    empty: R(R([], (null == t ? void 0 : t.empty) || [], !0), (null == e ? void 0 : e.empty) || [], !0)
                })
        }
        ,
        e
    }(Zo);
    !function(t) {
        t.PLAYER_CALL_LOAD = "ad_pc_playbox_player_call_loadAd",
        t.PLAYER_CALL_PLAY = "ad_pc_playbox_player_call_playAd",
        t.PLAYER_CALL_STOP = "ad_pc_playbox_player_call_stopAd",
        t.CALL_GET_AD_PARAMS = "ad_pc_playbox_player_call_sdk",
        t.PROXY_REQUEST = "ad_pc_playbox_player_request",
        t.PROXY_RESPONSE = "ad_pc_playbox_player_response",
        t.REQUEST_FIXED_MIDDLE = "ad_pc_playbox_sdk_req_fixed_zc",
        t.REQUEST_DYNAMIC_MIDDLE = "ad_pc_playbox_sdk_req_dynamically_zc",
        t.SET_AD_ORDER = "ad_pc_playbox_plugin_get_order",
        t.AD_CREATED = "ad_pc_playbox_receive_order",
        t.AD_LOADED = "ad_pc_playbox_creative_loading",
        t.AD_PLAY_START = "ad_pc_playbox_play_start",
        t.AD_PLAY_END = "ad_pc_playbox_play_end",
        t.AD_PLAY_ERROR = "ad_pc_playbox_play_error",
        t.AD_SHOW = "ad_pc_playbox_plugin_ad_show",
        t.AD_EXPOSURE = "originalexposure",
        t.AD_CLICK = "dt_clck",
        t.AD_ENDED = "ad_pc_playbox_exposure_close",
        t.TECH_PARAM = "ad_tech_param_report",
        t.NON_STANDARD_EXPOSURE = "ad_exposure_unnormal",
        t.CLIENT_GET_PIC_DATA = "ad_pc_playbox_client_get_pic_data",
        t.CLIENT_SET_PIC_DATA = "ad_pc_playbox_client_set_pic_data",
        t.IMP_END = "dt_imp_end",
        t.CONNER_EXPOSURE_FAILED = "ad_playbox_exposure_failed"
    }(ni || (ni = {}));
    var ui = ((ai = {})[p.UNKNOWN] = "unknown",
    ai[p.PRE] = "pre",
    ai[p.BROADCAST] = "broadcast",
    ai[p.TAIL] = "tail",
    ai[p.LOADING] = "loading",
    ai[p.MID] = "mid",
    ai[p.HLS_MID] = "hls_mid",
    ai[p.CORNER] = "corner",
    ai[p.VIDEO_IN] = "video_in",
    ai[p.ANCHOR_EMPTY] = "anchor_empty",
    ai[p.VIDEO_RESOLUTION] = "video_resolution",
    ai[p.PROGRESS_PREVIEW] = "progress_preview",
    ai[p.PAUSE] = "pause",
    ai[p.CREATIVE_MID] = "czc",
    ai[p.WATCH_BUY] = "bs",
    ai[p.LIVE_CORNER] = "plj",
    ai[p.NON_STANDARD] = "non_standard",
    ai[p.DYNAMIC_MID] = "mid",
    ai);
    var hi, fi, vi = {
        getAdScene: function(t) {
            var e;
            return null !== (e = vi.jsonParse(t).ad_scene) && void 0 !== e ? e : "parse error"
        },
        jsonParse: function(t) {
            try {
                return JSON.parse(t)
            } catch (e) {
                return {
                    data: t,
                    error: "json parse error"
                }
            }
        },
        parseProxyAdResponse: function(t, e) {
            var o, i, r, n, a, d, l, c, p, u, h, f, v;
            if (!t.ad_scene)
                return {
                    adScene: null != e ? e : -1,
                    adRequestId: null === (o = null == t ? void 0 : t.extra_info) || void 0 === o ? void 0 : o.ad_request_id,
                    adid: null === (i = null == t ? void 0 : t.auth) || void 0 === i ? void 0 : i.adid,
                    oaid: null === (r = null == t ? void 0 : t.auth) || void 0 === r ? void 0 : r.oaid,
                    errorType: "not ad_scene"
                };
            var m = {};
            try {
                switch (t.ad_scene) {
                case s.PRE:
                case s.TAIL:
                case s.DYNAMIC_MID:
                    m = function(t) {
                        if (!(null == t ? void 0 : t.ads))
                            throw new Error("not has ads");
                        var e = {};
                        return t.ads.forEach((function(t) {
                            var o, i, r = ui[t.ad_type];
                            if (r) {
                                e[r] || (e[r] = {
                                    ad_type: t.ad_type,
                                    empty: null !== (i = null === (o = t.empty) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0,
                                    orders: 0,
                                    order_ids: []
                                });
                                var n = t[r];
                                n && (e[r].orders = n.length,
                                n.forEach((function(t) {
                                    e[r].order_ids.push(t.order.order_id)
                                }
                                )))
                            }
                        }
                        )),
                        e
                    }(t);
                    break;
                case s.ANCHOR:
                    m = function(t) {
                        if (!t.anchor_ads)
                            throw new Error("not has anchor_ads");
                        var e = {};
                        return t.anchor_ads.forEach((function(t) {
                            var o, i, r = ui[t.ad_type];
                            if (r) {
                                e[r] || (e[r] = {
                                    ad_type: t.ad_type,
                                    empty: null !== (i = null === (o = t.empty) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0,
                                    orders: 0,
                                    order_ids: []
                                });
                                var n = t[r];
                                n && (e[r].orders = n.length,
                                n.forEach((function(t) {
                                    e[r].order_ids.push(t.order.order_id)
                                }
                                )))
                            }
                        }
                        )),
                        e
                    }(t);
                    break;
                case s.PROGRESS_PREVIEW:
                case s.VIDEO_RESOLUTION:
                case s.PAUSE:
                    m = function(t) {
                        var e = {}
                          , o = t.ad;
                        if (!o)
                            throw new Error("not has ad");
                        var i = ui[o.ad_type];
                        if (!i)
                            return e;
                        e[i] || (e[i] = {
                            ad_type: o.ad_type,
                            empty: o.empty ? 1 : 0,
                            orders: 0,
                            order_ids: []
                        });
                        var r = o[i];
                        return r && (e[i].orders = 1,
                        e[i].order_ids.push(r.order.order_id)),
                        e
                    }(t)
                }
            } catch (o) {
                return {
                    adScene: null !== (a = null !== (n = t.ad_scene) && void 0 !== n ? n : e) && void 0 !== a ? a : -1,
                    adRequestId: null === (d = null == t ? void 0 : t.extra_info) || void 0 === d ? void 0 : d.ad_request_id,
                    adid: null === (l = null == t ? void 0 : t.auth) || void 0 === l ? void 0 : l.adid,
                    oaid: null === (c = null == t ? void 0 : t.auth) || void 0 === c ? void 0 : c.oaid,
                    errorType: "not key"
                }
            }
            var y = Object.values(m).some((function(t) {
                return t.orders > 0
            }
            )) ? "0" : "1";
            return {
                adScene: null !== (u = null !== (p = t.ad_scene) && void 0 !== p ? p : e) && void 0 !== u ? u : -1,
                adData: m,
                isEmpty: y,
                adRequestId: null === (h = null == t ? void 0 : t.extra_info) || void 0 === h ? void 0 : h.ad_request_id,
                adid: null === (f = null == t ? void 0 : t.auth) || void 0 === f ? void 0 : f.adid,
                oaid: null === (v = null == t ? void 0 : t.auth) || void 0 === v ? void 0 : v.oaid
            }
        }
    }, mi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "vrReportModule",
            e
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "vrBase", {
            get: function() {
                return this.adCore.modules.vrBase
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.reportEvent = function(t, e) {
            this.vrBase.reportEvent(t, e)
        }
        ,
        e.prototype.reportTechParam = function(t, e) {
            void 0 === e && (e = {}),
            this.vrBase.reportEvent(ni.TECH_PARAM, D(D({
                plugin: "new"
            }, e), {
                name: t
            }))
        }
        ,
        e.prototype.reportRequestFixedMiddle = function() {
            this.vrBase.reportEvent(ni.REQUEST_FIXED_MIDDLE, {})
        }
        ,
        e.prototype.reportRequestDynamicMiddle = function() {
            this.vrBase.reportEvent(ni.REQUEST_DYNAMIC_MIDDLE, {})
        }
        ,
        e.prototype.reportCallGetAdParams = function(t) {
            this.vrBase.reportEvent(ni.CALL_GET_AD_PARAMS, t)
        }
        ,
        e.prototype.reportRequest = function(t) {
            this.vrBase.reportEvent(ni.PROXY_REQUEST, t)
        }
        ,
        e.prototype.reportResponse = function(t) {
            this.vrBase.reportEvent(ni.PROXY_RESPONSE, t)
        }
        ,
        e.prototype.reportSetAdOrder = function(t, e) {
            var o = vi.parseProxyAdResponse(t);
            this.vrBase.reportEvent(ni.SET_AD_ORDER, D(D({}, o), {
                isPreload: !!e
            }))
        }
        ,
        e.prototype.reportCreated = function(t) {
            this.vrBase.reportEvent(ni.AD_CREATED, t)
        }
        ,
        e.prototype.reportLoaded = function(t) {
            var e = D({}, t);
            e.loadingTime = e.loadingTime || -1,
            e.materialDuration && (e.materialDuration = 1e3 * e.materialDuration),
            this.vrBase.reportEvent(ni.AD_LOADED, e)
        }
        ,
        e.prototype.reportPlayStart = function(t) {
            this.vrBase.reportEvent(ni.AD_PLAY_START, t)
        }
        ,
        e.prototype.reportPlayEnd = function(t) {
            this.vrBase.reportEvent(ni.AD_PLAY_END, t)
        }
        ,
        e.prototype.reportAdShow = function(t) {
            this.vrBase.reportEvent(ni.AD_SHOW, t)
        }
        ,
        e.prototype.reportPlayError = function(t) {
            this.vrBase.reportEvent(ni.AD_PLAY_ERROR, t)
        }
        ,
        e.prototype.reportClick = function(t) {
            this.vrBase.reportEvent(ni.AD_CLICK, t)
        }
        ,
        e.prototype.reportExposure = function(t) {
            this.vrBase.reportEvent(ni.AD_EXPOSURE, t)
        }
        ,
        e.prototype.reportEnded = function(t) {
            this.vrBase.reportEvent(ni.AD_ENDED, t)
        }
        ,
        e.prototype.reportNonStandard = function(t) {
            void 0 === t && (t = {}),
            this.vrBase.reportEvent(ni.NON_STANDARD_EXPOSURE, D({}, t))
        }
        ,
        e.prototype.reportClientGetPicData = function() {
            this.vrBase.reportEvent(ni.CLIENT_GET_PIC_DATA)
        }
        ,
        e.prototype.reportClientSetPicData = function(t) {
            this.vrBase.reportEvent(ni.CLIENT_SET_PIC_DATA, t)
        }
        ,
        e.prototype.reportPlayerCallLoadAd = function(t) {
            this.vrBase.reportEvent(ni.PLAYER_CALL_LOAD, t)
        }
        ,
        e.prototype.reportPlayerCallPlayAd = function(t) {
            this.vrBase.reportEvent(ni.PLAYER_CALL_PLAY, t)
        }
        ,
        e.prototype.reportPlayerCallStopAd = function(t) {
            this.vrBase.reportEvent(ni.PLAYER_CALL_STOP, t)
        }
        ,
        e
    }(Zo), yi = function(e) {
        function o() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.name = "vrBaseModule",
            t.pgid = "ad_plugin",
            t.appKey = "JS0081LY3JY6J3",
            t.publicParams = {},
            t.pageParams = {},
            t.businessParams = {},
            t.isSelfLoadJs = !1,
            t.strategyIds = [],
            t.globalKey = "__VR_KEY__E9FC172E",
            t.eventEmitter = new jt,
            t
        }
        return i(o, e),
        Object.defineProperty(o.prototype, "reporter", {
            get: function() {
                return window[this.globalKey]
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.init = function() {
            var t = this;
            this.initReport().then((function() {
                var e, o;
                null === (e = t.eventEmitter) || void 0 === e || e.emit("ready"),
                null === (o = t.eventEmitter) || void 0 === o || o.removeAllListeners(),
                t.eventEmitter = null
            }
            ))
        }
        ,
        o.prototype.setIsVip = function(t) {
            this.publicParams = D(D({}, this.publicParams), {
                is_vip: t
            })
        }
        ,
        o.prototype.setStrategyIds = function(t) {
            this.strategyIds = Array.from(new Set(R(R([], this.strategyIds, !0), t, !0)))
        }
        ,
        o.prototype.updateParams = function(t) {
            var e;
            this.publicParams = D(D({}, this.publicParams), {
                v_channel_id: t.platform.channel_id,
                pt: t.player.play_type,
                app_vr: t.player.plugin,
                dt_mainlogin: null === (e = t.token) || void 0 === e ? void 0 : e.type,
                dt_guid: t.platform.guid,
                guid: t.platform.guid
            }),
            this.pageParams = D(D({}, this.pageParams), {
                play_platform: t.platform.play_platform,
                platform: t.platform.platform,
                flow_id: t.video.flow_id,
                live: t.video.is_live ? "1" : "0",
                pg_vid: t.video.base.vid,
                vid: t.video.base.vid,
                pg_cid: t.video.base.cid,
                pg_lid: t.video.base.lid,
                pid: t.video.pid,
                client_vr: t.player.version,
                is_self_load_js: this.isSelfLoadJs
            }),
            this.businessParams = D(D({}, this.businessParams), {
                flow_id: t.video.flow_id
            })
        }
        ,
        o.prototype.reportEvent = function(e, o) {
            var i, r = this;
            if (void 0 === o && (o = {}),
            !t.uaTool.spider) {
                var n = {};
                Object.entries(o).forEach((function(t) {
                    var e = t[0]
                      , o = t[1]
                      , i = e.replace(/([A-Z])/g, "_$1").toLowerCase();
                    n[i] = "boolean" == typeof o ? o ? "1" : "0" : o
                }
                ));
                var a = {
                    pgid: this.pgid,
                    eventName: e,
                    eventTime: Date.now(),
                    publicParams: this.getPublicParams(),
                    pageParams: this.getPageParams(),
                    businessParams: D(D({
                        report_id: ye()
                    }, this.getBusinessParams()), n)
                };
                this.reporter ? this.reporter.reportEvent(a) : null === (i = this.eventEmitter) || void 0 === i || i.on("ready", (function() {
                    r.reporter && r.reporter.reportEvent(a)
                }
                ))
            }
        }
        ,
        o.prototype.getBusinessParams = function() {
            return D(D(D({}, this.businessParams), {
                business: "ad",
                strategy_ids: this.strategyIds
            }), this.adCore.config.getVrParams())
        }
        ,
        o.prototype.getPageParams = function() {
            return D({
                plugin_name: this.adCore.config.pluginName,
                is_mobile: this.adCore.config.isMobile ? "1" : "0",
                guid: this.adCore.config.playerData.playerGuid,
                pgid: this.pgid,
                playtime: this.adCore.config.outerPlayerData.playtime,
                host: window.location.host,
                url: window.location.href.replace(window.location.search, ""),
                is_iframe: window.top !== window,
                ua: window.navigator.userAgent,
                client_version: this.adCore.config.clientVersion,
                web_version: this.adCore.config.playerData.playerVersion,
                expid: this.adCore.config.getTabExperimentId()
            }, this.pageParams)
        }
        ,
        o.prototype.getPublicParams = function() {
            var t = function(t) {
                if (!t)
                    return "";
                var e = wt("main_login");
                if (!e)
                    return "";
                if ("main_login" === t)
                    return e;
                var o = wt("vqq_".concat(t));
                return "qq" === e && o ? o : wt(t)
            }("vuserid");
            return D(D({
                lm_experiment_id: "-1",
                vuserid: t || "-1",
                ctime: Date.now()
            }, this.publicParams), {
                is_vip: t ? this.publicParams.is_vip ? 1 : 0 : -1
            })
        }
        ,
        o.prototype.initReport = function() {
            return O(this, void 0, void 0, (function() {
                return S(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        if (this.reporter)
                            return [2];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]),
                        [4, this.loadUniversalReport()];
                    case 2:
                        return t.sent(),
                        this.reporter ? [2] : (window[this.globalKey] = new window.UniversalReport({
                            beacon: this.appKey,
                            channel: "beacon",
                            formatMode: 1,
                            isDisableInitPage: !0,
                            isDisableObserver: !0
                        }),
                        [3, 4]);
                    case 3:
                        return t.sent(),
                        this.logger.error("UniversalReport 初始化失败"),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        o.prototype.loadUniversalReport = function() {
            return O(this, void 0, void 0, (function() {
                var t = this;
                return S(this, (function(e) {
                    return window.UniversalReport ? [2, window.UniversalReport] : [2, new Promise((function(e, o) {
                        ne("https://staticfile.qq.com/datong/universalReportH5/v4.5.1/universal-report.min.js", (function(i) {
                            if (window.UniversalReport)
                                return t.isSelfLoadJs = !0,
                                void e(window.UniversalReport);
                            (null == i ? void 0 : i.error) && t.logger.warn("加载大同 sdk 失败：".concat(i.error)),
                            o()
                        }
                        ), {
                            crossOrigin: "anonymous"
                        })
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        o
    }(Zo), gi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.name = "watcherModule",
            e.watcherList = [],
            e
        }
        return i(e, t),
        e.prototype.register = function(t) {
            var e = t(this.adCore);
            this.watcherList.push(e),
            e.startWatch()
        }
        ,
        e.prototype.reset = function() {
            this.watcherList.forEach((function(t) {
                t.reset()
            }
            ))
        }
        ,
        e.prototype.destroy = function() {
            this.watcherList.forEach((function(t) {
                t.endWatch()
            }
            ))
        }
        ,
        e
    }(Zo), _i = function() {
        function t(t) {
            var e = this;
            this.options = t,
            this.modules = {
                logger: new si,
                ctrl: new Xo,
                event: new ri,
                plugin: new Jo,
                order: new di,
                api: new ei,
                watcher: new gi,
                cgi: new oi,
                config: new ii,
                adblock: new ti,
                outerEvent: new li,
                vrBase: new yi,
                vr: new mi,
                pointFrequencyControl: new ci,
                preload: new pi
            },
            this.adCoreApi = this.createAdCoreApi(),
            Object.entries(this.modules).forEach((function(o) {
                var i, r = o[0], n = o[1], a = t.moduleOptions[r];
                a && n.setOptions(a),
                n.setAdCore(e.adCoreApi),
                null === (i = n.init) || void 0 === i || i.call(n)
            }
            ))
        }
        return Object.defineProperty(t.prototype, "api", {
            get: function() {
                return this.modules.api
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            Object.entries(this.modules).forEach((function(t) {
                t[1].destroy()
            }
            ))
        }
        ,
        t.prototype.createAdCoreApi = function() {
            var t = this;
            return D({
                get modules() {
                    return t.modules
                }
            }, t.modules)
        }
        ,
        t
    }(), xi = ((hi = {})[Se.AD_STOP] = e.H5_PLAY_EVENT.AD_END,
    hi[Se.AD_LOAD_START] = e.H5_PLAY_EVENT.AD_REQ_ASSETS_START,
    hi[Se.AD_LOAD_COMPLETE] = e.H5_PLAY_EVENT.AD_ASSETS_LOADED,
    hi[Se.AD_PAUSE] = e.H5_PLAY_EVENT.AD_PAUSE,
    hi[Se.AD_RESUME] = e.H5_PLAY_EVENT.AD_RESUME,
    hi[Se.AD_PLAYING] = e.H5_PLAY_EVENT.AD_PLAYING,
    hi[Se.AD_TIME_UPDATE] = e.H5_PLAY_EVENT.AD_TIME_UPDATE,
    hi[Se.AD_VOLUME_CHANGE] = e.H5_PLAY_EVENT.AD_VOLUME_CHANGE,
    hi[Se.AD_SET_LOADING] = e.H5_EXT_EVENT.SET_LOADING,
    hi[Se.AD_AUTOPLAY_BLOCKED] = e.H5_PLAY_EVENT.AD_AUTOPLAY_BLOCKED,
    hi[Se.AD_COUNTDOWN_CHANGE] = "AD_COUNTDOWN_CHANGE",
    hi[Se.AD_SHOW] = "adShowEvt",
    hi[Se.AD_HIDE] = "adHideEvt",
    hi[Se.AD_ENTER_COUNTDOWN] = "enterCountdownEvt",
    hi[Se.AD_ENTER_COUNTDOWN_COMPLETE] = "enterCountdownCompleteEvt",
    hi[Se.AD_PLAYER_SESSION_START] = "adPlayerSessionStartEvt",
    hi[Se.AD_PLAYER_SESSION_END] = "adPlayerSessionEndEvt",
    hi[Se.AD_PLAY_ERROR] = "adPlayErrorEvt",
    hi), Ai = "abcdefghijklmnopqrstuvwxy".split("");
    function Ci(t) {
        void 0 === t && (t = 4);
        for (var e = "", o = 0; o < t; o++)
            e += Ai[Math.floor(Math.random() * Ai.length)];
        return e
    }
    !function(t) {
        t.SET_LOADING = "SET_LOADING",
        t.VIDEO_TIMEUPDATE = "VIDEO_TIMEUPDATE",
        t.VIDEO_PLAYING = "VIDEO_PLAYING",
        t.VIDEO_PAUSE = "VIDEO_PAUSE",
        t.CTRL_SHOW = "CTRL_SHOW",
        t.CTRL_HIDE = "CTRL_HIDE",
        t.HOVER_PROGRESS = "HOVER_PROGRESS",
        t.SHOW_LEVELS = "SHOW_LEVELS",
        t.TOGGLE_MINI_PLAYER = "TOGGLE_MINI_PLAYER",
        t.AD_SESSION_ID_CHANGE = "AD_SESSION_ID_CHANGE",
        t.VIDEO_PLAY_SESSION_END = "VIDEO_PLAY_SESSION_END",
        t.VIDEO_SETLEVEL_END = "VIDEO_SETLEVEL_END",
        t.TOGGLE_COUNTDOWN_VISIBLE = "TOGGLE_COUNTDOWN_VISIBLE"
    }(fi || (fi = {}));
    var bi, Ei, Ii, Ti, wi = function() {
        function t(t, o) {
            var i = this;
            this.player = t,
            this.options = o,
            this.destroyEvents = [],
            this.ctrlBarVisible = !0,
            this.isMiniPlayerOpened = !1,
            this.startPlaytimeData = {
                vid: "",
                playtime: 0,
                setTime: 0
            },
            this.getStartPlaytime = function() {
                return i.startPlaytimeData.playtime
            }
            ,
            this.getCtrlBarVisible = function() {
                return i.ctrlBarVisible
            }
            ,
            this.getIsMimiPlayer = function() {
                return i.isMiniPlayerOpened
            }
            ,
            this.destroy = function() {
                i.destroyEvents.forEach((function(t) {
                    t()
                }
                ))
            }
            ,
            this.getEvents = function() {
                var t;
                return (t = {})[fi.SET_LOADING] = function(t) {
                    var o;
                    i.listenEvent(null === (o = i.player) || void 0 === o ? void 0 : o.pluginMsg, e.H5_EXT_EVENT.SET_LOADING, (function(e) {
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.VIDEO_TIMEUPDATE] = function(t) {
                    i.listenEvent(i.player, e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, (function(e) {
                        i.options.updatePlaytime(e.data.playtime),
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.VIDEO_PLAYING] = function(t) {
                    i.listenEvent(i.player, e.H5_PLAY_EVENT.VIDEO_PLAYING, (function(e) {
                        var o = "".concat(i.player.vid);
                        (i.startPlaytimeData.vid !== o || Date.now() - i.startPlaytimeData.setTime < 1e3) && (i.startPlaytimeData = {
                            vid: o,
                            playtime: i.player.playtime,
                            setTime: Date.now()
                        }),
                        i.options.log("player emit event", "VIDEO_PLAYING", null == e ? void 0 : e.data),
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.VIDEO_PAUSE] = function(t) {
                    i.listenEvent(i.player, e.H5_PLAY_EVENT.VIDEO_PAUSE, (function(e) {
                        i.options.log("player emit event", "VIDEO_PAUSE", null == e ? void 0 : e.data),
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.CTRL_SHOW] = function(t) {
                    i.listenCtrlBarEvent("ctrl:show", (function(e) {
                        i.ctrlBarVisible = !0,
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.CTRL_HIDE] = function(t) {
                    i.listenCtrlBarEvent("ctrl:hide", (function(e) {
                        i.ctrlBarVisible = !1,
                        t(e.data)
                    }
                    ))
                }
                ,
                t[fi.HOVER_PROGRESS] = function(t) {
                    i.listenCtrlBarEvent("ctrl:hover-progress", t)
                }
                ,
                t[fi.SHOW_LEVELS] = function(t) {
                    i.listenCtrlBarEvent("ctrl:show-levels", t)
                }
                ,
                t[fi.TOGGLE_MINI_PLAYER] = function(t) {
                    var e;
                    i.listenEvent(null === (e = i.player) || void 0 === e ? void 0 : e.miniPlayerPlugin, "toggle", (function(e) {
                        i.isMiniPlayerOpened !== e.data.isOpened && (i.isMiniPlayerOpened = e.data.isOpened,
                        t(e.data))
                    }
                    ))
                }
                ,
                t[fi.AD_SESSION_ID_CHANGE] = function(t) {
                    i.listenEvent(i.player, e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, (function(e) {
                        var o, r, n, a;
                        "0" === (null === (o = e.data) || void 0 === o ? void 0 : o.code) && ((null !== (r = i.options.getPlayerData().playerSessionId) && void 0 !== r ? r : "") !== (null !== (a = null === (n = i.player.getCommonKv("getinfoAdInfo")) || void 0 === n ? void 0 : n.adsid) && void 0 !== a ? a : "") && t(e.data))
                    }
                    ))
                }
                ,
                t[fi.VIDEO_PLAY_SESSION_END] = function(t) {
                    i.listenPlayerEvent(e.H5_PLAY_EVENT.PLAY_SESSION_END, t)
                }
                ,
                t[fi.VIDEO_SETLEVEL_END] = function(t) {
                    i.listenPlayerEvent(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, t)
                }
                ,
                t[fi.TOGGLE_COUNTDOWN_VISIBLE] = function(t) {
                    i.emitToggleCountdownVisible = t,
                    i.destroyEvents.push((function() {
                        i.emitToggleCountdownVisible = void 0
                    }
                    ))
                }
                ,
                t
            }
        }
        return t.prototype.setPostAdCountdownVisible = function(t) {
            var e;
            null === (e = this.emitToggleCountdownVisible) || void 0 === e || e.call(this, t)
        }
        ,
        t.prototype.listenPlayerEvent = function(t, e) {
            this.listenEvent(this.player, t, (function(t) {
                e(t.data)
            }
            ))
        }
        ,
        t.prototype.listenCtrlBarEvent = function(t, e) {
            var o = this
              , i = function() {
                e({})
            };
            this.getCtrlBar().then((function(e) {
                o.listenEvent(e, t, i)
            }
            ))
        }
        ,
        t.prototype.listenEvent = function(t, e, o) {
            null == t || t.on(e, o),
            this.destroyEvents.push((function() {
                null == t || t.off(e, o)
            }
            ))
        }
        ,
        t.prototype.getCtrlBar = function() {
            var t = this;
            return new Promise((function(e) {
                var o = t.player.plugins.ctrlbar;
                if (o)
                    e(o);
                else {
                    var i = function() {
                        e(t.player.plugins.ctrlbar),
                        t.player.pluginMsg.off("pluginsetup:ctrlbar", i)
                    };
                    t.player.pluginMsg.on("pluginsetup:ctrlbar", i)
                }
            }
            ))
        }
        ,
        t
    }(), Li = {
        playerMethod: {},
        playerData: {
            playerPf: void 0,
            playerPfEx: zo(),
            playerWidth: 0,
            playerHeight: 0,
            playerLeft: 0,
            playerTop: 0,
            playtime: 0,
            playerEndTime: 0,
            playerDuration: 0,
            playerPlatform: "",
            playerFrom: null,
            playerVersion: "",
            playerCid: "",
            playerVid: "",
            playerFlowid: "",
            playerGuid: "",
            playerPt: "",
            playerPu: "",
            playerTrialerMode: !1,
            playerAdExt: "",
            playerType: "",
            playerIsSkipPrelude: !1,
            playerVptag: "",
            playerOHeight: 0,
            playerOWidth: 0,
            playerTpid: ""
        },
        touchPlayer: !1,
        forbidLinkJump: !1
    }, Pi = "https://mark.l.qq.com/fcgi-bin/get_video_mark_all", Di = "https://testmark.l.qq.com/fcgi-bin/get_video_mark_all", Ni = "1" === t.urlTool.getUrlParamByKey(window.location.href, "debugvideomark");
    function Oi(o, i) {
        return O(this, void 0, void 0, (function() {
            var r, n, a;
            return S(this, (function(s) {
                switch (s.label) {
                case 0:
                    r = Ni ? Di : Pi,
                    n = function(o, i) {
                        var r = {
                            pr: 1,
                            otype: "json",
                            idlist: o.getCommonKv(e.COMMON_DATA_KEY.vid),
                            vuid: t.cookieTool.get("vuserid") || t.cookieTool.get("vqq_vuserid")
                        };
                        if (i === x.SOLO)
                            return r;
                        var n = o.getCommonKv("hlsAdRanges");
                        return (null == n ? void 0 : n.length) > 0 && (r.adsegments = At({
                            ad_segments: n.map((function(t) {
                                return {
                                    start_time: t.start,
                                    duration: t.end - t.start
                                }
                            }
                            ))
                        })),
                        r
                    }(o, i),
                    a = {},
                    s.label = 1;
                case 1:
                    return s.trys.push([1, 3, 4, 5]),
                    [4, t.netTool.jsonp(r, {
                        name: "thumbplayer_mr_ad_callback",
                        query: n
                    })];
                case 2:
                    return a = s.sent(),
                    [3, 5];
                case 3:
                    return s.sent(),
                    [3, 5];
                case 4:
                    return o.emit("getVideoMarkAllOver", a),
                    [7];
                case 5:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    !function(t) {
        t.bind = "on",
        t.unbind = "off"
    }(bi || (bi = {})),
    function(t) {
        t[t.LOAD_FREEZE = 2201] = "LOAD_FREEZE",
        t[t.LOAD_FAIL = 2301] = "LOAD_FAIL",
        t[t.AD_BLOCKED = 6] = "AD_BLOCKED",
        t[t.TIMEOUT = 10] = "TIMEOUT",
        t[t.PRELOAD_TIMEOUT = 20] = "PRELOAD_TIMEOUT",
        t[t.HLS_PLAY_ERROR = 30] = "HLS_PLAY_ERROR",
        t[t.FINAL_ERROR = 40] = "FINAL_ERROR",
        t[t.EMPTY_URL = 50] = "EMPTY_URL",
        t[t.PRELOAD_EMPTY_URL = 60] = "PRELOAD_EMPTY_URL",
        t[t.BACKUP_URL_PLAY_ERROR = 70] = "BACKUP_URL_PLAY_ERROR"
    }(Ei || (Ei = {})),
    function(t) {
        t.LOADSTART = "loadstart",
        t.PROGRESS = "progress",
        t.CANPLAY = "canplay",
        t.PLAYING = "playing",
        t.PLAY = "play",
        t.PAUSE = "pause",
        t.TIMEUPDATE = "timeupdate",
        t.ENDED = "ended",
        t.ERROR = "error",
        t.WATCH_LOAD_PROGRESS = "watchLoadProgress",
        t.ALL_ENDED = "allEnded",
        t.ALL_LOAD_COMPLETE = "allLoadComplete",
        t.AD_AUTOPLAY_BLOCKED = "autoplayBlockedAd",
        t.SET_LOADING = "setLoading"
    }(Ii || (Ii = {})),
    function(t) {
        t.IDLE = "idle",
        t.LOAD_START = "loadStart",
        t.CANPLAY = "canplay",
        t.LOADING = "loading",
        t.LOAD_READY = "loadReady",
        t.PLAYING = "playing",
        t.PAUSE = "pause",
        t.SEEKING = "seeking",
        t.SEEKED = "seeked",
        t.BUFFERING = "buffering",
        t.END = "end"
    }(Ti || (Ti = {}));
    var Si, Ri = function(t) {
        var e = "";
        try {
            window.localStorage && (e = window.localStorage[t])
        } catch (t) {}
        return e
    }, ki = function() {
        function o(t, e) {
            this.adCore = t,
            this.adVideoInfoList = [],
            this.logger = this.adCore.logger.createLogger("ThumbplayerAdapter"),
            this.currentAdIndex = 0,
            this.urls = [],
            this.hasCallPlay = !1,
            this.eventEmitter = new jt,
            this.container = e.container,
            this.options = e,
            this.player = this.createPlayer(),
            this.bindPlayerEvent()
        }
        return o.prototype.on = function(t, e) {
            this.eventEmitter.on(t, e)
        }
        ,
        o.prototype.off = function(t, e) {
            this.eventEmitter.off(t, e)
        }
        ,
        o.prototype.removeAllListeners = function() {
            this.eventEmitter.removeAllListeners()
        }
        ,
        o.prototype.destroy = function() {
            var t, e;
            null === (t = this.player) || void 0 === t || t.removeAllListeners(),
            null === (e = this.player) || void 0 === e || e.destroy(),
            this.player = void 0
        }
        ,
        o.prototype.load = function(t) {
            var e;
            this.adVideoInfoList = t.map((function(t, e) {
                return D({
                    index: e,
                    status: Ti.IDLE
                }, t)
            }
            )),
            this.urls = t.map((function(t) {
                return D(D({}, t), {
                    autoPreloadLeftTime: 5
                })
            }
            )),
            this.logger.log("player load: ".concat(At(t))),
            this.currentAdIndex = 0,
            null === (e = this.player) || void 0 === e || e.load(this.urls, this.getKernelConfig())
        }
        ,
        o.prototype.pause = function() {
            var t;
            null === (t = this.player) || void 0 === t || t.pause()
        }
        ,
        o.prototype.resume = function() {
            this.hasCallPlay = !0,
            this.callPlayerPlay()
        }
        ,
        o.prototype.play = function() {
            this.hasCallPlay || this.emit(Ii.WATCH_LOAD_PROGRESS, {
                index: 0,
                adVideoInfo: this.adVideoInfoList[0]
            }),
            this.hasCallPlay = !0,
            this.callPlayerPlay()
        }
        ,
        o.prototype.stop = function() {
            var t;
            null === (t = this.player) || void 0 === t || t.stop(),
            this.hasCallPlay = !1,
            this.urls = [],
            this.adVideoInfoList = [],
            this.currentAdIndex = 0,
            this.errorVideoInfo = void 0
        }
        ,
        Object.defineProperty(o.prototype, "currentVideoElement", {
            get: function() {
                var t;
                return null === (t = this.player) || void 0 === t ? void 0 : t.currentVideoElement
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "currentTime", {
            get: function() {
                var t;
                return null === (t = this.player) || void 0 === t ? void 0 : t.playtime
            },
            set: function(t) {
                t && this.player && this.player.seek(t)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "volume", {
            get: function() {
                var t;
                return null === (t = this.player) || void 0 === t ? void 0 : t.volume
            },
            set: function(t) {
                var e, o;
                this.player && "number" == typeof t && (this.player.volume = t,
                null === (o = (e = this.options).onVolumeChange) || void 0 === o || o.call(e, t))
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.preloadNext = function(t, e) {
            return !0
        }
        ,
        o.prototype.playNext = function(e, o) {
            var i, r = this;
            void 0 === o && (o = !1);
            var n = this.adVideoInfoList.length
              , a = this.adVideoInfoList[n - 1].index;
            if (this.logger.log("当前播放: ".concat(At({
                kernelName: null === (i = this.player) || void 0 === i ? void 0 : i.kernelName,
                nextPlayVideoIndex: e,
                len: n
            }))),
            e && e > a)
                return this.logger.log("当前播放的是最后一个, 不再播放下一个"),
                !1;
            if (this.urls.shift(),
            this.urls.length <= 0)
                return !1;
            this.currentAdIndex = e,
            this.emit(Ii.WATCH_LOAD_PROGRESS, {
                index: e,
                adVideoInfo: this.adVideoInfoList[e]
            });
            var s = this.adVideoInfoList[e - 1];
            return setTimeout((function() {
                var i;
                (o || (null === (i = r.player) || void 0 === i ? void 0 : i.kernelName) === t.KERNEL_NAME.HLS_JS || s.backupUrlData) && 0 !== e ? (r.logger.log("重新播放: ".concat(At(r.urls))),
                r.callPlayerPlay(r.urls, r.getKernelConfig())) : r.callPlayerPlay()
            }
            )),
            !0
        }
        ,
        o.prototype.setAdVideoSrcEmpty = function(t) {
            var e = this.adVideoInfoList[t];
            if (e) {
                var o = {
                    config: {
                        uid: e.uid
                    }
                };
                this.errorVideoInfo = o,
                e.errorCode = "srcEmpty",
                this.handleVideoError(e, !0)
            }
        }
        ,
        o.prototype.tryPlayBackupUrl = function(t) {
            t.tryBackupUrlsPending || (t.backupUrlData ? this.playUrl(t) : this.getBackupUrl(t))
        }
        ,
        o.prototype.playUrl = function(t) {
            this.logger.log("播放备用地址");
            var e = t
              , o = t.backupUrlData
              , i = o.urls;
            if (!i || i.length <= 0)
                this.handleVideoError(t, !1);
            else if ("hls" === o.type) {
                if (this.unbindHlsEvents(),
                this.bindHlsEvents(e),
                o.m3u8 && !o.tryM3u8Flag)
                    return this.replacePlay(t, i, !0, o.m3u8),
                    void (o.tryM3u8Flag = !0);
                this.replacePlay(t, i, !0)
            } else
                this.replacePlay(t, i, !1)
        }
        ,
        o.prototype.getKernelConfig = function(e) {
            return this.options.isMobile ? {} : "hls" === e ? {
                kernelName: t.KERNEL_NAME.HLS_JS
            } : {
                kernelName: this.options.isUseDemuxKernel ? t.KERNEL_NAME.DEMUX_2_FMP4 : t.KERNEL_NAME.ORIGIN
            }
        }
        ,
        o.prototype.bindPlayerEvent = function() {
            var e = this;
            this.player && (this.player.on(t.PLAY_EVENT.VIDEO_BUFFER_CHANGE, (function(t) {
                e.handleVideoProgress(t)
            }
            )),
            this.player.on(t.PLAY_EVENT.STATE_CHANGE, (function(o) {
                o.data.new === t.VIDEO_STATE.LOAD_START && e.handleVideoLoadStart(o),
                o.data.new === t.VIDEO_STATE.CANPLAY && e.handleVideoCanPlay(o),
                o.data.new === t.VIDEO_STATE.PAUSE && e.handleVideoPause(o),
                o.data.new === t.VIDEO_STATE.PLAYING && (o.data.old === t.VIDEO_STATE.PAUSE && e.handleVideoResume(o),
                e.handleVideoPlaying(o)),
                o.data.new === t.VIDEO_STATE.END && o.data.videoInfo && e.handleVideoEnd(o)
            }
            )),
            this.player.on(t.PLAY_EVENT.TIME_UPDATE, (function(t) {
                e.handleVideoTimeupdate(t)
            }
            )),
            this.player.on(t.PLAY_EVENT.ERROR, (function(t) {
                var o, i, r, n, a, s = t.data.videoInfo;
                e.errorVideoInfo = s.config ? s : null !== (o = e.errorVideoInfo) && void 0 !== o ? o : D(D({}, s), {
                    config: null !== (i = e.adVideoInfoList[e.currentAdIndex]) && void 0 !== i ? i : e.urls[0],
                    errorCode: "not has videoInfo"
                });
                var d = e.transformAdVideoInfo(e.errorVideoInfo);
                e.logger.error("播放器错误: ".concat(At(s.error))),
                d.errorCode = null !== (n = null === (r = s.error) || void 0 === r ? void 0 : r.code) && void 0 !== n ? n : "not has errorCode",
                d.errorMsg = null === (a = s.error) || void 0 === a ? void 0 : a.message,
                e.handleVideoError(d, !0)
            }
            )),
            this.player.on(t.PLAY_EVENT.AUTOPLAY_BLOCKED, (function(t) {
                e.handleVideoAutoplayBlocked(t)
            }
            )),
            this.player.on(t.PLAY_EVENT.SET_LOADING, (function() {
                e.emit(Ii.SET_LOADING)
            }
            )))
        }
        ,
        o.prototype.handleVideoLoadStart = function(t) {
            var e = this.transformAdVideoInfo(t.data.videoInfo);
            this.transparentEvent(Ii.LOADSTART, e)
        }
        ,
        o.prototype.handleVideoCanPlay = function(t) {
            this.transparentEvent(Ii.CANPLAY, this.transformAdVideoInfo(t.data.videoInfo), t.target)
        }
        ,
        o.prototype.handleVideoProgress = function(t) {
            this.transparentEvent(Ii.PROGRESS, this.transformAdVideoInfo(t.data.videoInfo), t.target)
        }
        ,
        o.prototype.handleVideoTimeupdate = function(t) {
            this.transparentEvent(Ii.TIMEUPDATE, this.transformAdVideoInfo(t.data.videoInfo), t.target)
        }
        ,
        o.prototype.handleVideoPlaying = function(t) {
            var e = this.transformAdVideoInfo(t.data.videoInfo);
            e.kernelName = t.target.kernelName,
            e.playingCount = (e.playingCount || 0) + 1,
            this.adCore.vr.reportTechParam("video-playing", {
                adType: e.adType,
                callPlayCount: e.callPlayCount,
                errorTimes: e.errorTimes,
                hasTryBackupUrls: e.hasTryBackupUrls,
                kernelName: e.kernelName,
                playingCount: e.playingCount,
                duration: t.data.videoInfo.duration,
                playtime: t.data.videoInfo.playtime,
                startPlayTime: e.callPlayTimestamp ? Date.now() - e.callPlayTimestamp : 0,
                firstPlayTime: e.firstCallPlayTimestamp ? Date.now() - e.firstCallPlayTimestamp : 0,
                index: e.index
            }),
            e.played || (e.played = !0,
            this.transparentEvent(Ii.PLAYING, e))
        }
        ,
        o.prototype.handleVideoPause = function(t) {
            this.transparentEvent(Ii.PAUSE, this.transformAdVideoInfo(t.data.videoInfo))
        }
        ,
        o.prototype.handleVideoResume = function(t) {
            this.transparentEvent(Ii.PLAY, this.transformAdVideoInfo(t.data.videoInfo))
        }
        ,
        o.prototype.handleVideoEnd = function(t) {
            this.transparentEvent(Ii.ENDED, this.transformAdVideoInfo(t.data.videoInfo))
        }
        ,
        o.prototype.handleVideoError = function(t, e) {
            this.transparentEvent(Ii.ERROR, t, void 0, {
                canTryBackup: e
            })
        }
        ,
        o.prototype.handleVideoAutoplayBlocked = function(t) {
            this.logger.log("自动播放器被阻止");
            var e = this.transformAdVideoInfo(t.data.videoInfo);
            this.transparentEvent(Ii.AD_AUTOPLAY_BLOCKED, e)
        }
        ,
        o.prototype.transparentEvent = function(t, e, o, i) {
            var r, n, a = e.duration, s = null !== (n = null === (r = null == o ? void 0 : o.videoBuffered) || void 0 === r ? void 0 : r.reduce((function(t, e) {
                var o = null != e ? e : {}
                  , i = o.start
                  , r = void 0 === i ? 0 : i
                  , n = o.end;
                return t + ((void 0 === n ? 0 : n) - r)
            }
            ), 0)) && void 0 !== n ? n : 0, d = s / a;
            this.updateOrderInfoStatus(e, t, d);
            var l = null == o ? void 0 : o.currentVideoElement;
            this.emit(t, D({
                index: Number(e.index),
                adVideoInfo: pe(e, {
                    loadedPercent: d,
                    buffered: s,
                    playTime: null == o ? void 0 : o.playtime,
                    readyState: null == l ? void 0 : l.readyState,
                    networkState: null == l ? void 0 : l.networkState
                })
            }, i))
        }
        ,
        o.prototype.updateOrderInfoStatus = function(t, e, o) {
            e !== Ii.PLAYING && e !== Ii.PLAY || (t.status = Ti.PLAYING),
            e === Ii.PAUSE && (t.status = Ti.PAUSE),
            e === Ii.ENDED && (t.status = Ti.END),
            e !== Ii.PROGRESS && e !== Ii.TIMEUPDATE || o > .99 && (t.status = Ti.LOAD_READY)
        }
        ,
        o.prototype.getBackupUrl = function(t) {
            var e = this;
            this.logger.log("开始请求备用地址, 第 ".concat(t.index, " 个, vid: ").concat(t.vid)),
            t.tryBackupUrlsPending = !0,
            this.requestVideoUrlsByVid(t.vid).then((function(o) {
                t.tryBackupUrlsPending = !1,
                e.getBackupUrlSuccess(t, o)
            }
            )).catch((function(o) {
                t.tryBackupUrlsPending = !1,
                e.getBackupUrlFailed(t)
            }
            ))
        }
        ,
        o.prototype.getBackupUrlSuccess = function(t, e) {
            var o;
            this.logger.log("请求备用地址成功, 第".concat(t.index, "个, vid: ").concat(t.vid, ",备份地址数：").concat((null == e ? void 0 : e.urls) ? e.urls.length : 0)),
            (null === (o = e.urls) || void 0 === o ? void 0 : o.length) ? (t.backupUrlData = e,
            this.playUrl(t)) : (t.errorCode = "backupUrlEmpty",
            this.handleVideoError(t, !1))
        }
        ,
        o.prototype.getBackupUrlFailed = function(t) {
            this.logger.log("请求备用地址失败, 第 ".concat(t.index, "个")),
            t.errorCode = "backupUrlFailed",
            this.handleVideoError(t, !1)
        }
        ,
        o.prototype.bindHlsEvents = function(t) {
            var e = this
              , o = t;
            this.hlsEvt = {
                hlsError: function(i) {
                    var r = i.data;
                    e.logger.error("重试播放 hls error: ".concat(At({
                        index: o.index,
                        vid: o.vid
                    }), " ").concat(r)),
                    o.detailErrorCode = Ei.HLS_PLAY_ERROR,
                    t.errorCode += "-hlsError",
                    e.handleVideoError(t, !1)
                }
            },
            Object.keys(this.hlsEvt).forEach((function(t) {
                var o;
                null === (o = e.player) || void 0 === o || o.on(t, e.hlsEvt[t])
            }
            ))
        }
        ,
        o.prototype.unbindHlsEvents = function() {
            var t = this;
            this.hlsEvt && (Object.keys(this.hlsEvt).forEach((function(e) {
                var o;
                null === (o = t.player) || void 0 === o || o.off(e, t.hlsEvt[e])
            }
            )),
            this.hlsEvt = void 0)
        }
        ,
        o.prototype.replacePlay = function(t, e, o, i) {
            var r, n, a = this;
            void 0 === i && (i = ""),
            this.logger.log("替换 url 播放: ".concat(e, " ").concat(i));
            var s = e.shift()
              , d = {
                backupUrls: e,
                url: s,
                autoPreloadLeftTime: 5
            };
            i && (d.m3u8 = ((r = {})[s] = i,
            r)),
            Object.assign(this.urls[0], d);
            var l = this.getKernelConfig(o ? "hls" : "");
            this.hasCallPlay ? (this.emit(Ii.WATCH_LOAD_PROGRESS, {
                index: t.index,
                adVideoInfo: pe(t, {
                    status: t.status
                })
            }),
            setTimeout((function() {
                a.logger.log("播放重试 url: ".concat(At(a.urls[0]), " ").concat(At(l))),
                a.callPlayerPlay(a.urls[0], l)
            }
            ))) : (this.logger.log("加载重试 url: ".concat(At(this.urls[0]), " ").concat(At(l))),
            null === (n = this.player) || void 0 === n || n.load(this.urls[0], l))
        }
        ,
        o.prototype.transformAdVideoInfo = function(t) {
            var e, o = t.config.uid.split("-")[1];
            return pe(null !== (e = this.adVideoInfoList.find((function(e) {
                return e.uid === t.config.uid
            }
            ))) && void 0 !== e ? e : {
                vid: o
            }, {
                status: t.status
            })
        }
        ,
        o.prototype.requestVideoUrlsByVid = function(t) {
            var o, i = this.options.plugin.player, r = (null === (o = i.getinfoPlugin) || void 0 === o ? void 0 : o.request) || this.options.requestUrlByVid;
            if (!r)
                return Promise.reject();
            var n = i.getCommonKv(e.COMMON_DATA_KEY.guid);
            return r(t, {
                defnpayver: 0,
                defn: "",
                dtype: 3,
                fhdswitch: 0,
                platform: "10201",
                sdtfrom: "v1010",
                spwm: 0,
                unid: Ri("txp-unid"),
                vid: t,
                sphls: 2
            }).then((function(t) {
                return !t || t.error ? Promise.reject() : re(t.resData, n)
            }
            ))
        }
        ,
        o.prototype.createPlayer = function() {
            return this.options.createPlayer(D({
                container: this.container,
                originKernelConfig: {
                    maxVideoNodeCount: this.options.playerVideoDom ? 1 : 2
                },
                opencache: !this.options.isMobile && this.options.isOpenCache && this.options.isUseDemuxKernel,
                videoElements: this.options.playerVideoDom ? [this.options.playerVideoDom] : void 0,
                createVideoNodeWhenLoad: !!this.options.playerVideoDom
            }, this.options.kernelOptions))
        }
        ,
        o.prototype.callPlayerPlay = function(t, e) {
            var o;
            if (null === (o = this.player) || void 0 === o ? void 0 : o.play) {
                this.player.play(t, e);
                var i = ce(t)[0] || this.urls[0]
                  , r = this.adVideoInfoList.find((function(t) {
                    return t.uid === (null == i ? void 0 : i.uid)
                }
                ));
                r && (r.callPlayCount = (r.callPlayCount || 0) + 1,
                1 === r.callPlayCount && (r.firstCallPlayTimestamp = Date.now()),
                r.played || (r.callPlayTimestamp = Date.now()),
                this.adCore.vr.reportTechParam("player-call-play", {
                    adType: r.adType,
                    callPlayCount: r.callPlayCount,
                    errorTimes: r.errorTimes,
                    hasTryBackupUrls: r.hasTryBackupUrls,
                    kernelName: null == e ? void 0 : e.kernelName,
                    index: r.index
                }))
            }
        }
        ,
        o.prototype.emit = function(t, e) {
            this.eventEmitter.emit(t, e)
        }
        ,
        o
    }(), Mi = function(o) {
        function r(t, i) {
            var r = o.call(this, t) || this;
            r.config = D({}, Li),
            r.isMobile = !1,
            r.echoField = Ci(8),
            r.getLogger = function() {
                var t = {
                    info: function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        r.info.apply(r, t)
                    },
                    log: function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        r.log.apply(r, t)
                    },
                    warn: function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        r.warn.apply(r, t)
                    },
                    error: function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        r.error.apply(r, t)
                    }
                };
                return t
            }
            ,
            r.getPlayerSize = function() {
                var t = r.player
                  , e = t.container
                  , o = t.currentVideoElement
                  , i = (null == o ? void 0 : o.offsetWidth) || (null == e ? void 0 : e.offsetWidth)
                  , n = (null == o ? void 0 : o.offsetHeight) || (null == e ? void 0 : e.offsetHeight)
                  , a = r.player.videoSize;
                return {
                    playerWidth: i,
                    playerHeight: n,
                    playerOWidth: a.width,
                    playerOHeight: a.height
                }
            }
            ,
            r.getContainerSize = function() {
                var t = r.player.videoElementsContainer
                  , e = null == t ? void 0 : t.parentElement;
                if (!e) {
                    var o = r.getPlayerSize();
                    return {
                        width: o.playerWidth,
                        height: o.playerHeight
                    }
                }
                return {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            ,
            r.createLayer = function(t) {
                var e = document.createElement("div");
                return e.className = "creative-player-".concat(t, "-layer"),
                r.layer.appendChild(e),
                e
            }
            ,
            r.onPlaySessionStart = function(t) {
                var e;
                r.logger.log("playSessionStart"),
                r.adCore.api.reset("PLAY_SESSION_START 导致调用 reset"),
                r.setConf({
                    playerData: {
                        playerFlowid: null === (e = t.data) || void 0 === e ? void 0 : e.flowid
                    }
                }),
                r.adCore.modules.preload.playSessionStart(t.data.playItem)
            }
            ,
            r.safePrependEle = function(t, e, o, i) {
                var n;
                void 0 === i && (i = "container");
                var a = r.player;
                (null === (n = a.plugins[t]) || void 0 === n ? void 0 : n[e]) && "function" == typeof a.plugins[t][e] ? a.plugins[t][e](o, i) : a.pluginMsg.on("pluginsetup:".concat(t), (function() {
                    a.plugins[t][e](o, i)
                }
                ))
            }
            ,
            r.launchMiniProgram = function(t) {
                var e, o, i, n, a, s = "SHOW-MINI-PROGRAM-POPUP-DETAIL", d = (a = new Date,
                "".concat(a.getFullYear(), "-").concat(a.getMonth(), "-").concat(a.getDate())), l = localStorage.getItem(s), c = "in" === (null === (o = null === (e = r.config) || void 0 === e ? void 0 : e.playerData) || void 0 === o ? void 0 : o.playerPf) && t.show_popup && l !== d;
                return function(t, e, o) {
                    t.enableOpenSdk ? Ge(t, e, o) : ze(t.urlScheme, e, o)
                }({
                    urlScheme: t.url_scheme,
                    path: t.path,
                    userName: t.username,
                    enableOpenSdk: Qo() && !!t.enable_pc_open_sdk
                }, t.amsLinkParams, {
                    isClient: !1,
                    appVersion: (null === (n = null === (i = r.config) || void 0 === i ? void 0 : i.playerData) || void 0 === n ? void 0 : n.playerVersion) || "",
                    showPopup: c,
                    popupAutoCloseMs: t.auto_close_ms
                }),
                c && localStorage.setItem(s, d),
                !0
            }
            ,
            r.getReportPlayerCallData = function(t) {
                var e = z.toAdCoreType(t)
                  , o = r.adCore.modules.order
                  , i = e === p.PRE ? o.getPreAdOrder() : o.getAdOrder(e);
                return {
                    paramAdType: t,
                    adType: e,
                    hasOrder: !!i,
                    orderLen: (null == i ? void 0 : i.orders.length) || 0,
                    emptyLen: (null == i ? void 0 : i.empty.length) || 0,
                    isPreload: !!(null == i ? void 0 : i.isPreload)
                }
            }
            ,
            r.amsLinkReportClick = function(t, e) {
                var o, i;
                Be(t, e, {
                    isClient: !1,
                    appVersion: (null === (i = null === (o = r.config) || void 0 === o ? void 0 : o.playerData) || void 0 === i ? void 0 : i.playerVersion) || ""
                })
            }
            ,
            r.fixResData = function(t) {
                var e = t[r.echoField];
                return e ? t.ad_scene === s.ANCHOR ? D(D({}, t), {
                    anchor_ads: e
                }) : [s.PRE, s.DYNAMIC_MID, s.TAIL].includes(t.ad_scene) ? D(D({}, t), {
                    ads: e
                }) : D(D({}, t), {
                    ad: e
                }) : t
            }
            ;
            var n = r.getInitData();
            return r.isMobile = n.isMobile,
            r.configPluginName = n.pluginName,
            r.setConf(i),
            r.layer = r.createElement(),
            r.outerEventHelper = new wi(t,{
                getPlayerData: function() {
                    var t;
                    return null !== (t = r.config.playerData) && void 0 !== t ? t : {}
                },
                updatePlaytime: function(t) {
                    var e;
                    r.config.playerData && (null === (e = r.config.playerData) || void 0 === e ? void 0 : e.playtime) !== t && (r.config.playerData.playtime = t)
                },
                log: function() {
                    for (var t, e = [], o = 0; o < arguments.length; o++)
                        e[o] = arguments[o];
                    (t = r.logger).log.apply(t, e)
                }
            }),
            r.adCore = r.createAdCore(),
            r.logger = r.adCore.modules.logger.createLogger("VideoAdWebPlugin"),
            r.logger.log("config", i),
            r.bindReportEvent(),
            r.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, r.onPlaySessionStart),
            r.registerAd(),
            r.bindPlayerEvent(),
            r
        }
        return i(r, o),
        r.prototype.getPlayerInstance = function(t) {
            var e, o, i;
            if ("ZT" === t) {
                var r = this.adCore.modules.ctrl.getRunningAds(p.PAUSE)[0];
                return null === (e = null == r ? void 0 : r.getCurrentPlayer()) || void 0 === e ? void 0 : e.player
            }
            var n = (null === (o = this.adCore.modules.ctrl.getRunningAds(p.PRE)) || void 0 === o ? void 0 : o[0]) || this.adCore.modules.preload.getAd();
            return null === (i = null == n ? void 0 : n.getCurrentPlayer()) || void 0 === i ? void 0 : i.player
        }
        ,
        r.prototype.reset = function() {
            this.adCore.api.reset("外部调用 reset")
        }
        ,
        r.prototype.getConf = function() {
            return this.config
        }
        ,
        r.prototype.setConf = function(t) {
            if (this.config) {
                var e = t.playerData
                  , o = t.playerMethod
                  , i = t.embedAdDom
                  , r = N(t, ["playerData", "playerMethod", "embedAdDom"]);
                this.config = D(D(D({}, this.config), r), {
                    playerData: D(D({}, this.config.playerData), e),
                    playerMethod: D(D({}, this.config.playerMethod), o),
                    embedAdDom: D(D({}, this.config.embedAdDom), i)
                })
            } else
                this.config = t
        }
        ,
        r.prototype.setAdInfo = function(t) {
            try {
                this.adCore.api.setAdOrder(this.fixResData(t))
            } catch (t) {}
        }
        ,
        r.prototype.getOrdersByType = function(t) {
            var e = z.toAdCoreType(t);
            if (e)
                return this.adCore.modules.order.getAdOrder(e)
        }
        ,
        r.prototype.isOrderEmpty = function(t) {
            if (!t)
                return !0;
            var e = this.getOrdersByType(t);
            return !e || 0 === e.orders.length
        }
        ,
        r.prototype.preload = function(t, e) {
            return O(this, void 0, void 0, (function() {
                return S(this, (function(o) {
                    return t.ad_scene !== s.PRE ? [2, !1] : [2, this.adCore.modules.preload.preload(this.fixResData(t), e)]
                }
                ))
            }
            ))
        }
        ,
        r.prototype.loadAd = function(t) {
            return O(this, arguments, void 0, (function(t) {
                var e, o = t.adType;
                return S(this, (function(t) {
                    return this.logger.log("loadAd", {
                        adType: o
                    }),
                    e = z.toAdCoreType(o),
                    this.adCore.modules.vr.reportPlayerCallLoadAd(this.getReportPlayerCallData(o)),
                    e && this.hasAdOrder(e) ? [2, this.adCore.api.loadAd(e)] : (this.logger.log("未找到广告订单", {
                        adType: o,
                        adCoreType: e
                    }),
                    [2, Promise.reject()])
                }
                ))
            }
            ))
        }
        ,
        r.prototype.playAd = function(t) {
            return O(this, arguments, void 0, (function(t) {
                var e, o = this, i = t.adType;
                return S(this, (function(t) {
                    return this.logger.log("playAd", {
                        adType: i
                    }),
                    e = z.toAdCoreType(i),
                    this.adCore.modules.vr.reportPlayerCallPlayAd(this.getReportPlayerCallData(i)),
                    e && this.hasAdOrder(e) ? this.adCore.modules.ctrl.getRunningAds(e).length ? (this.adCore.api.playAd(e),
                    [2, Promise.resolve()]) : [2, this.loadAd({
                        adType: i
                    }).finally((function() {
                        return o.adCore.api.playAd(e)
                    }
                    ))] : (this.logger.log("未找到广告订单", {
                        adType: i,
                        adCoreType: e
                    }),
                    [2, Promise.reject()])
                }
                ))
            }
            ))
        }
        ,
        r.prototype.pauseAd = function(t) {
            this.logger.log("pauseAd", {
                adType: t
            }),
            this.adCore.api.pauseAd(t && z.toAdCoreType(t))
        }
        ,
        r.prototype.resumeAd = function(t) {
            this.logger.log("resumeAd", {
                adType: t
            }),
            this.adCore.api.resumeAd(t && z.toAdCoreType(t))
        }
        ,
        r.prototype.stopAd = function(t) {
            this.logger.log("stopAd: ".concat(At(t)));
            var e = (null == t ? void 0 : t.adType) || t;
            this.adCore.api.stopAd(e && z.toAdCoreType(e), void 0, "外部调用 stopAd"),
            this.adCore.modules.vr.reportPlayerCallStopAd(this.getReportPlayerCallData(e || "stopAllAd"))
        }
        ,
        r.prototype.readRfId = function() {
            return function() {
                try {
                    return window.localStorage.getItem(bt) || ""
                } catch (t) {
                    return ""
                }
            }()
        }
        ,
        r.prototype.muteAd = function() {
            this.adCore.api.muteAd()
        }
        ,
        r.prototype.unMuteAd = function() {
            this.adCore.api.unMuteAd()
        }
        ,
        r.prototype.setAdVolume = function(t) {
            this.adCore.api.setVolume(t)
        }
        ,
        r.prototype.getAdVolume = function() {
            return this.postVolume
        }
        ,
        r.prototype.resizeAd = function(t) {
            var e = this.getPlayerSize();
            this.adCore.api.resizeAd(D({
                width: e.playerWidth,
                height: e.playerHeight,
                oWidth: e.playerOWidth,
                oHeight: e.playerOHeight
            }, t))
        }
        ,
        r.prototype.adjustUI = function(t) {
            this.adCore.api.adjustUI(t)
        }
        ,
        r.prototype.setAdSmallWindow = function(t) {
            this.adCore.api.setAdSmallWindow(t)
        }
        ,
        r.prototype.hideAdBeforeResize = function() {
            this.adCore.api.hideAdBeforeResize()
        }
        ,
        r.prototype.seekStart = function() {
            this.adCore.api.seekStart()
        }
        ,
        r.prototype.reportAd = function(t, e) {
            this.adCore.api.reportAd(z.toAdCoreType(t), e)
        }
        ,
        r.prototype.getAdParams = function(o) {
            var i = this.adCore.adCoreApi.order.getAdContext()
              , r = function(o, i, r, n, a) {
                var s, d, l, c, p, u, h, f, v, m, y, g = Lo.getAdScene(o.adType), _ = o.fmt || i.getCommonKv(e.COMMON_DATA_KEY.currentDefn) || i.getCommonKv(e.PersistedUserSettings.definition), x = {
                    base: {
                        vid: o.vid || i.getCommonKv(e.COMMON_DATA_KEY.vid),
                        cid: o.coverId || i.getCommonKv(e.COMMON_DATA_KEY.cid)
                    },
                    is_live: "1" === o.live || i.config.type === t.PLAY_MODE.LIVE,
                    type_id: Number(o.tpId || r.playerTpid) || 0,
                    referer: o.refer || i.getCommonKv(e.COMMON_DATA_KEY.referrer) || "",
                    url: o.url || i.getCommonKv(e.COMMON_DATA_KEY.url),
                    flow_id: o.flowId || i.getCommonKv(e.COMMON_DATA_KEY.flowid),
                    refresh_id: "",
                    fmt: _ ? Co[_] : lo.HD || lo.HD
                };
                o.livePid && (x.pid = o.livePid,
                x.base.pid = o.livePid);
                var A = null === (s = i.getCommonKv("getinfoAdInfo")) || void 0 === s ? void 0 : s.adsid;
                g === Qe.ANCHOR && A && (x.session_id = A);
                var C = o.pf || r.playerPf || function(e) {
                    if (t.uaTool.mobile)
                        return Oo.H5;
                    var o = window.location.hostname;
                    return "v.qq.com" === o || "film.qq.com" === o || 8 === e ? Oo.IN : Oo.OUT
                }(Ho(r))
                  , b = {
                    guid: o.guId || i.getCommonKv(e.COMMON_DATA_KEY.guid),
                    channel_id: o.chId || Ho(r),
                    site: o.ty || "web",
                    platform: C,
                    from: Number(o.from) || Number(t.uaTool.os.iphone ? "3" : t.uaTool.os.ipad ? "6" : t.uaTool.os.android ? "4" : "0"),
                    device: o.pfEx || r.playerPfEx || zo(),
                    play_platform: Number(null !== (d = o.platform) && void 0 !== d ? d : i.getCommonKv(e.COMMON_DATA_KEY.platform)),
                    pv_tag: o.vpTag || r.playerVptag || $o(),
                    support_click_scan_integration: "in" === C,
                    vip_page_channel_id: o.vip_page_channel_id
                };
                r.gameSession ? b.game_session = r.gameSession : Qo() && (b.game_session = function(t) {
                    var e = function(t) {
                        var e = function(t) {
                            return "game-session-".concat(t)
                        }(t)
                          , o = localStorage.getItem(e);
                        if (!o)
                            return null;
                        try {
                            var i = JSON.parse(o);
                            return i && "object" == typeof i ? i : null
                        } catch (t) {
                            return null
                        }
                    }(t.appid);
                    return e ? (function(t) {
                        return !t || Date.now() >= t.update_time + 12096e5
                    }(e) && Fo(t),
                    JSON.stringify(e.infos.map((function(t) {
                        return {
                            iv: t.iv,
                            encrypted_data: t.encrypted_data
                        }
                    }
                    )))) : (Fo(t),
                    "")
                }({
                    appid: 2,
                    appKey: "11a72f16f145215e"
                })),
                r.launchChannel && (b.launch_channel = r.launchChannel),
                1 === o.disable_time_offset && (b.disable_time_offset = !0);
                var E = r.qimei32 || jo.getQimei32();
                E && (b.qimei32 = E);
                var I = r.qimei36 || jo.getQimei36();
                I && (b.qimei36 = I),
                1 === o.disable_time_offset && (b.disable_time_offset = !0);
                var T = {
                    version: o.v || r.playerVersion || i.getCommonKv(e.COMMON_DATA_KEY.playerver),
                    plugin: o.appVersion || "4.2.45",
                    switch: Number(null !== (l = o.adaptor) && void 0 !== l ? l : 1),
                    play_type: "".concat(null !== (p = null !== (c = o.pt) && void 0 !== c ? c : i.getCommonKv(e.COMMON_DATA_KEY.playertype)) && void 0 !== p ? p : "")
                };
                !0 === Ro() && (T.img_type = "webp");
                var w, L = {
                    type: (w = o.lt || So("main_login"),
                    "qq" === (null == w ? void 0 : w.toLowerCase()) ? Xe.QQ : "wx" === (null == w ? void 0 : w.toLowerCase()) ? Xe.WX : "phone" === (null == w ? void 0 : w.toLowerCase()) ? Xe.PHONE : Xe.GUEST),
                    vuid: Number(null !== (h = null !== (u = o.userId) && void 0 !== u ? u : So("vuserid")) && void 0 !== h ? h : 0),
                    vuser_session: null !== (f = o.token) && void 0 !== f ? f : So("vusession"),
                    app_id: null !== (v = o.appId) && void 0 !== v ? v : So("appid"),
                    open_id: null !== (m = o.openId) && void 0 !== m ? m : So("openid"),
                    access_token: null !== (y = o.accessToken) && void 0 !== y ? y : So("access_token")
                };
                r.wuid && (L.wuid = r.wuid);
                var P, D = o.pu || r.playerPu, N = {
                    ad_scene: g,
                    user_type: "" === D ? Ze.UNKNOWN : Number(D),
                    video: x,
                    platform: b,
                    player: T,
                    token: L,
                    req_extra_info: {
                        now_timestamp_s: Math.floor(Date.now() / 1e3),
                        ad_frequency_control_time_list: Do(),
                        ad_request_id: Bo(),
                        exp_ids: (P = po("tab_experiment_str") || "",
                        Array.from(new Set(P.split("#")))),
                        video_played_time_ms: Math.floor(1e3 * i.playtime),
                        playback_novelty_contexts: n
                    }
                };
                a && (N.req_extra_info.echo_field = a),
                r.unionId && (N.req_extra_info.pc_device_info = r.unionId);
                var O = {
                    ad_scene: g
                };
                if (O.ad_scene === Qe.PRE && (N.video.refresh_id = function() {
                    try {
                        return window.localStorage.getItem("TxpCreativePlayer-rfid") || ""
                    } catch (t) {
                        return ""
                    }
                }()),
                N.extra_info = function(t) {
                    var e = {};
                    t.isTodayFirstShortVideo && (e.is_today_first_short_video = !0);
                    var o = t.watchCompleteTimestamp
                      , i = t.refreshVideoNum
                      , r = t.freeAdTime
                      , n = t.refreshFreeAdNum;
                    return [o, i, r, n].some((function(t) {
                        return void 0 !== t
                    }
                    )) && (e.news_frequency_info = {
                        watch_complete_timestamp_ms: o,
                        refresh_video_num: i,
                        free_ad_time_ms: r,
                        refresh_free_ad_num: n
                    }),
                    e
                }(r),
                g === Qe.DYNAMIC_MID) {
                    var S = Number(window.sessionStorage.getItem(co) || 0);
                    N.dynamic = {
                        dynamic_mid_ad_request_num: S
                    }
                }
                O.ad_scene === Qe.DYNAMIC_MID && (S = Number(window.sessionStorage.getItem(co) || 0),
                N.dynamic = {
                    dynamic_mid_ad_request_num: S
                });
                var R = Po[g];
                return R && (O[R] = N),
                O
            }(o, this.player, this.config.playerData || {}, i, this.echoField)
              , n = r[H[r.ad_scene]];
            n && this.adCore.modules.vrBase.updateParams(n),
            this.adCore.modules.vr.reportCallGetAdParams({
                adScene: r.ad_scene,
                paramsAdType: o.adType,
                adRequestId: $(r)
            });
            var a = Ci();
            return this.updateConfig(r.ad_scene, n),
            this.logger.log("getAdParams", o, r),
            {
                adparam: D(D({}, o), {
                    sspKey: a
                }),
                sspAdParam: r
            }
        }
        ,
        r.prototype.destroy = function() {
            o.prototype.destroy.call(this),
            this.adCore.destroy(),
            this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onPlaySessionStart)
        }
        ,
        r.prototype.setPhlsPlayType = function(t) {
            void 0 === t && (t = x.SOLO),
            this.adCore.modules.config.setPHLSConfig({
                phlsPlayType: t
            })
        }
        ,
        r.prototype.startSoloPlayPhls = function(t) {
            this.adCore.modules.config.setPHLSConfig({
                isSoloPlayingPhls: !0,
                soloPlayPhlsTimeOffset: 1e3 * t
            })
        }
        ,
        r.prototype.endSoloPlayPhls = function() {
            this.adCore.modules.config.setPHLSConfig({
                isSoloPlayingPhls: !1,
                soloPlayPhlsTimeOffset: void 0
            })
        }
        ,
        r.prototype.setPostAdCountdownVisible = function(t) {
            this.outerEventHelper.setPostAdCountdownVisible(t)
        }
        ,
        r.prototype.bindPlayerEvent = function() {
            var t = this;
            Object.entries(xi).forEach((function(o) {
                var i = o[0]
                  , r = o[1];
                t.adCore.modules.event.on(i, (function(o) {
                    i !== Se.AD_LOAD_START ? (i !== Se.AD_LOAD_COMPLETE || void 0 === o.isAllLoaded || o.isAllLoaded) && t.emit(r, t.transformEventData(o)) : "number" == typeof o.index && t.emit(e.H5_PLAY_EVENT.AD_REQ_ASSETS_START, t.transformEventData(o))
                }
                ))
            }
            ))
        }
        ,
        r.prototype.reportUrl = function(t) {
            return new Promise((function(e) {
                var o = document.createElement("img")
                  , i = function() {
                    o.onerror = null,
                    o.onload = null,
                    e()
                };
                o.onerror = i,
                o.onload = i,
                o.src = t
            }
            ))
        }
        ,
        r.prototype.transformEventData = function(t) {
            return (null == t ? void 0 : t.adType) ? D(D({}, t), {
                adType: this.transformToThumbPlayerAdType(t.adType),
                coreAdType: t.adType,
                h5AdType: this.transformToH5Type(t.adType)
            }) : t
        }
        ,
        r.prototype.updateConfig = function(t, e) {
            var o, i, r;
            if (e) {
                var n = {
                    playerVersion: e.player.version,
                    playerPf: e.platform.platform,
                    playerPfEx: e.platform.device,
                    playerFlowid: e.video.flow_id,
                    playerGuid: e.platform.guid,
                    playerCid: e.video.base.cid,
                    playerVid: e.video.base.vid,
                    playerPt: e.player.play_type,
                    playerPu: e.user_type,
                    playerPlatform: "".concat(null !== (o = e.platform.play_platform) && void 0 !== o ? o : ""),
                    playerTpid: "".concat(null !== (i = e.video.type_id) && void 0 !== i ? i : "")
                };
                t === s.ANCHOR && (n.playerSessionId = null !== (r = e.video.session_id) && void 0 !== r ? r : ""),
                this.setConf({
                    playerData: n
                })
            }
        }
        ,
        r.prototype.transformToThumbPlayerAdType = function(t) {
            var e, o;
            return null !== (o = null !== (e = z.toThumbPlayerAdType(t)) && void 0 !== e ? e : z.toAdTypeV(t)) && void 0 !== o ? o : "".concat(t)
        }
        ,
        r.prototype.bindReportEvent = function() {
            var t = this;
            this.player.pluginMsg.on(e.H5_EXT_EVENT.PROXY_HTTP_START, (function(e) {
                var o, i = e.data;
                if ((null === (o = null == i ? void 0 : i.buid) || void 0 === o ? void 0 : o.includes("ad")) && i.sspAdParam) {
                    var r = vi.getAdScene(i.sspAdParam);
                    t.adCore.modules.vr.reportRequest({
                        adScene: r,
                        adRequestId: $(i.sspAdParam)
                    })
                }
            }
            )),
            this.player.pluginMsg.on(e.H5_EXT_EVENT.PROXY_HTTP_END, (function(e) {
                var o, i, r, n, a, s, d = e.data;
                if (null === (i = null === (o = null == d ? void 0 : d.reqParams) || void 0 === o ? void 0 : o.buid) || void 0 === i ? void 0 : i.includes("ad")) {
                    var l = vi.getAdScene(null === (r = d.reqParams) || void 0 === r ? void 0 : r.sspAdParam);
                    (null === (n = d.parseData) || void 0 === n ? void 0 : n.ad) ? (t.adCore.modules.vrBase.setStrategyIds(null !== (a = d.parseData.ad.strategy_ids) && void 0 !== a ? a : []),
                    t.adCore.modules.vr.reportResponse(vi.parseProxyAdResponse(d.parseData.ad, l))) : t.adCore.modules.vr.reportResponse({
                        adScene: null != l ? l : -1,
                        adRequestId: $(null === (s = d.reqParams) || void 0 === s ? void 0 : s.sspAdParam),
                        hasError: "1",
                        url: window.location.href,
                        resData: d.resData,
                        xhrReqData: d.xhrReqData,
                        reqParams: d.reqParams,
                        error: d.error
                    })
                }
            }
            ))
        }
        ,
        r.prototype.hasAdOrder = function(t) {
            var e = function(t) {
                return !!t && (!!t.empty.length || !!t.orders.length)
            };
            return t === p.PRE ? e(this.adCore.modules.order.getPreAdOrder()) : e(this.adCore.modules.order.getAdOrder(t))
        }
        ,
        r.prototype.createElement = function() {
            var t = document.createElement("div");
            return t.className = "plugin-creative-player",
            this.player.container.appendChild(t),
            t
        }
        ,
        r.prototype.transformToH5Type = function(t) {
            var e;
            return null !== (e = z.toAdTypeV(t)) && void 0 !== e ? e : "".concat(t)
        }
        ,
        r.prototype.createAdCore = function() {
            var t = this
              , e = this.player;
            return new _i({
                moduleOptions: {
                    logger: this.getLogger(),
                    config: this.getConfig(),
                    cgi: {
                        reportUrl: function(e) {
                            return t.reportUrl(e)
                        },
                        getConfig: function() {
                            var o = t.config.playerData;
                            return {
                                from: null == o ? void 0 : o.playerFrom,
                                pf: null == o ? void 0 : o.playerPf,
                                v: null == o ? void 0 : o.playerVersion,
                                dura: e.duration,
                                coverid: (null == o ? void 0 : o.playerCid) || "",
                                pf_ex: null == o ? void 0 : o.playerPfEx,
                                chid: (null == o ? void 0 : o.playerChid) || 0,
                                tpid: (null == o ? void 0 : o.playerTpid) || "",
                                vptag: (null == o ? void 0 : o.playerVptag) || $o() || "",
                                appversion: "4.2.45"
                            }
                        }
                    },
                    adblock: {
                        onAdBlockEnabledChange: function(e) {
                            t.adBlockEnabled = e
                        }
                    },
                    outerEvent: {
                        getEvents: function() {
                            return t.outerEventHelper.getEvents()
                        },
                        getCtrlBarVisible: function() {
                            return t.outerEventHelper.getCtrlBarVisible()
                        },
                        removeAllEvents: function() {
                            return t.outerEventHelper.destroy()
                        },
                        getIsMimiPlayer: function() {
                            return t.outerEventHelper.getIsMimiPlayer()
                        }
                    }
                }
            })
        }
        ,
        r.prototype.getConfig = function() {
            var o, i = this;
            return {
                pluginName: this.configPluginName,
                isMobile: this.isMobile,
                disablePauseAd: this.config.disablePauseAd,
                getContainerSize: this.getContainerSize,
                forbidLinkJump: !!this.config.forbidLinkJump,
                showCloseButton: "function" == typeof (null === (o = this.config.playerMethod) || void 0 === o ? void 0 : o.showOpenVIPGuide),
                phlsConfig: {
                    phlsPlayType: x.NORMAL
                },
                getVrParams: function() {
                    var t, e;
                    return {
                        business_id: null === (t = i.player) || void 0 === t ? void 0 : t.getCommonKv("businessId"),
                        device_score: null === (e = i.player) || void 0 === e ? void 0 : e.getCommonKv("deviceScore")
                    }
                },
                getPlayerData: function() {
                    var t;
                    return null !== (t = i.config.playerData) && void 0 !== t ? t : {}
                },
                showOpenVIPGuide: function() {
                    var t, e;
                    null === (e = null === (t = i.config.playerMethod) || void 0 === t ? void 0 : t.showOpenVIPGuide) || void 0 === e || e.call(t)
                },
                getOuterPlayerData: function() {
                    var t, e;
                    return {
                        volume: i.player.volume,
                        duration: i.player.duration,
                        playerVid: "".concat(i.player.vid),
                        playtime: (i.player.playtime || 0) + ((null === (t = i.adCore.modules.config.phlsConfig) || void 0 === t ? void 0 : t.soloPlayPhlsTimeOffset) || 0) / 1e3,
                        type: null === (e = i.player.config) || void 0 === e ? void 0 : e.type,
                        state: i.player.state,
                        startPlaytime: i.outerEventHelper.getStartPlaytime()
                    }
                },
                renderQrCode: function(t, e, o) {
                    var i = t;
                    return i.innerHTML = "",
                    new xt(i,{
                        text: e,
                        width: o,
                        height: o
                    })
                },
                requestProxyHttp: function(t, e) {
                    return O(i, void 0, void 0, (function() {
                        var o, i;
                        return S(this, (function(r) {
                            return t === s.ANCHOR && Oi(this.player, this.adCore.modules.config.phlsConfig.phlsPlayType),
                            [2, null === (i = (o = this.config).requestProxyHttp) || void 0 === i ? void 0 : i.call(o, t, e)]
                        }
                        ))
                    }
                    ))
                },
                getPlayerSize: function() {
                    return i.getPlayerSize()
                },
                resetBarrageZindex: function() {
                    var t, e;
                    null === (e = null === (t = i.config.playerMethod) || void 0 === t ? void 0 : t.resetBarrageZindex) || void 0 === e || e.call(t)
                },
                createPlayer: function(o, r, n) {
                    var a, s, d, l, c, u = {
                        container: n,
                        plugin: i,
                        isMobile: i.isMobile,
                        flowId: null !== (s = null === (a = i.config.playerData) || void 0 === a ? void 0 : a.playerFlowid) && void 0 !== s ? s : i.player.getCommonKv(e.COMMON_DATA_KEY.flowid),
                        guId: null !== (l = null === (d = i.config.playerData) || void 0 === d ? void 0 : d.playerGuid) && void 0 !== l ? l : i.player.getCommonKv(e.COMMON_DATA_KEY.guid),
                        isOpenCache: i.config.opencache,
                        isUseDemuxKernel: i.config.isUseDemuxKernel,
                        createPlayer: function(e) {
                            return i.config.createPlayer ? i.config.createPlayer(e) : (i.logger.log("未传入创建 KernelProxy 的方法, 自己创建"),
                            new t.KernelProxy(e))
                        },
                        requestUrlByVid: i.config.requestUrlByVid,
                        playerVideoDom: null === (c = i.config.playerData) || void 0 === c ? void 0 : c.playerVideoDom
                    };
                    return r === p.PAUSE ? new ki(o,D(D({}, u), {
                        kernelOptions: {
                            createVideoNodeWhenLoad: !1,
                            videoElements: void 0,
                            originKernelConfig: {
                                maxVideoNodeCount: 1
                            }
                        }
                    })) : new ki(o,D(D({}, u), {
                        onVolumeChange: function(t) {
                            i.postVolume = t
                        }
                    }))
                },
                amsLinkReportClick: this.amsLinkReportClick,
                launchMiniProgram: this.launchMiniProgram,
                getTabExperimentId: function() {
                    return wt("tab_experiment_str") || ""
                }
            }
        }
        ,
        r.pluginName = e.AdPluginName,
        r.VERSION = "4.2.45",
        r
    }(e.Plugin), Vi = function(t) {
        var e;
        return {
            auth: t.auth,
            ad_request_id: null === (e = t.extra_info) || void 0 === e ? void 0 : e.ad_request_id,
            strategy_ids: t.strategy_ids
        }
    }, Ui = function(t) {
        var e, o;
        return {
            oaid: null === (e = null == t ? void 0 : t.auth) || void 0 === e ? void 0 : e.oaid,
            adid: null === (o = null == t ? void 0 : t.auth) || void 0 === o ? void 0 : o.adid,
            adRequestId: null == t ? void 0 : t.ad_request_id
        }
    };
    !function(t) {
        t[t.INIT = 0] = "INIT",
        t[t.LOADING = 1] = "LOADING",
        t[t.LOAD_READY = 2] = "LOAD_READY",
        t[t.PLAYING = 3] = "PLAYING",
        t[t.PAUSED = 4] = "PAUSED",
        t[t.END = -1] = "END",
        t[t.WAIT_FOR_STOP = -2] = "WAIT_FOR_STOP",
        t[t.ERROR = 5] = "ERROR"
    }(Si || (Si = {}));
    var Bi, zi = function() {
        this.createTime = Date.now(),
        this.state = Si.INIT,
        this.isShow = !1
    }, Hi = function() {
        function t(t) {
            this.adCore = t.adCore,
            this.order = t.order,
            this.config = t.config,
            this.logger = this.adCore.logger.createLogger("AbstractAd"),
            this.adInfo = this.getInitAdInfo(),
            this.data = this.initData(),
            this.setState(Si.INIT),
            this.logger.log("创建广告实例: ".concat(this.adType)),
            this.adCore.vr.reportCreated(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                orderTypes: this.getOrderTypes(),
                adGroupIds: this.order.orders.map((function(t) {
                    return t.data.order.order_id
                }
                )),
                isPreload: !!this.order.isPreload
            }))
        }
        return Object.defineProperty(t.prototype, "adType", {
            get: function() {
                return this.order.adType
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "state", {
            get: function() {
                var t;
                return null !== (t = this.data.state) && void 0 !== t ? t : Si.INIT
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.getCurrentPlayer = function() {}
        ,
        t.prototype.load = function() {
            this.setState(Si.LOADING),
            this.adCore.event.emit(Se.AD_LOAD_START, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo
            })
        }
        ,
        t.prototype.play = function() {
            this.setState(Si.PLAYING),
            this.data.hasCallPlay = !0,
            this.data.isStart || (this.data.isStart = !0)
        }
        ,
        t.prototype.pause = function() {
            this.setState(Si.PAUSED)
        }
        ,
        t.prototype.resume = function() {
            this.setState(Si.PLAYING)
        }
        ,
        t.prototype.mute = function() {}
        ,
        t.prototype.unMute = function() {}
        ,
        t.prototype.setVolume = function(t) {}
        ,
        t.prototype.stop = function(t) {
            this.data.isStart = !1,
            this.setState(Si.END),
            this.adCore.event.emit(Se.AD_STOP, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo,
                index: this.adInfo.orderIdx,
                forceStop: null == t ? void 0 : t.forceStop,
                reason: null == t ? void 0 : t.reason
            })
        }
        ,
        t.prototype.destroy = function() {
            this.data.hasDestroy || (this.data.hasDestroy = !0,
            this.order.orders.forEach((function(t) {
                t.reporter.reset()
            }
            )),
            this.order.empty.forEach((function(t) {
                t.reporter.reset()
            }
            )),
            this.adCore.ctrl.destroyAd(this),
            this.adCore.event.emit(Se.AD_DESTROY, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo
            }))
        }
        ,
        t.prototype.show = function() {
            this.data.isShow || (this.data.isShow = !0,
            this.adCore.vr.reportAdShow(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                adGroupId: this.adInfo.orderId,
                isPreload: !!this.order.isPreload
            })),
            this.adCore.event.emit(Se.AD_SHOW, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo
            }),
            this.data.showTime || (this.data.showTime = Date.now()))
        }
        ,
        t.prototype.hide = function() {
            this.data.isShow = !1,
            this.adCore.event.emit(Se.AD_HIDE, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo
            })
        }
        ,
        t.prototype.setAdFullScreen = function(t) {}
        ,
        t.prototype.setAdSmallWindow = function(t) {
            this.data.isSmallWindow = t.isSmallWindow
        }
        ,
        t.prototype.report = function(t) {}
        ,
        t.prototype.resize = function(t) {}
        ,
        t.prototype.adjustUI = function(t) {}
        ,
        t.prototype.hideAdBeforeResize = function() {}
        ,
        t.prototype.seekStart = function() {}
        ,
        t.prototype.setState = function(t) {
            this.data.state = t
        }
        ,
        t.prototype.canplayHandler = function(t) {
            this.data.canPlay || (this.logger.log("广告可播: ".concat(At(t))),
            this.data.canPlay = !0,
            this.setState(Si.LOAD_READY),
            this.adCore.event.emit(Se.AD_CAN_PLAY, D({
                adType: this.adType,
                adInfo: this.adInfo
            }, t)))
        }
        ,
        t.prototype.loadCompleteHandle = function(t) {
            this.adCore.event.emit(Se.AD_LOAD_COMPLETE, t),
            t.adInfo;
            var e = t.adOrder
              , o = t.isAllLoaded
              , i = N(t, ["adInfo", "adOrder", "isAllLoaded"]);
            this.logger.log("素材加载完成: ".concat(At(D(D({}, i), {
                adOrder: e,
                isAllLoaded: o
            })))),
            this.adCore.vr.reportLoaded(D(D(D({}, Ui(this.order.extraData)), i), {
                isPreload: !!this.order.isPreload
            }))
        }
        ,
        t.prototype.doClickAction = function(t, e) {
            var o, i, r = Date.now();
            if (!(this.data.lastClickTime && r - this.data.lastClickTime < 300) && (this.data.lastClickTime = r,
            t.reportVrAdClick(D({
                adActType: e.adActType,
                forbidLinkJump: this.adCore.config.forbidLinkJump,
                clickable: t.clickable
            }, e)),
            t.clickable && !this.adCore.config.forbidLinkJump && ((null === (o = t.data.order.ad_action) || void 0 === o ? void 0 : o.type) !== u.SCAN || t.landing.enable_click))) {
                this.adCore.config.amsLinkReportClick(4e6, t.amsLinkParams);
                var n = t.landing
                  , a = n.landing_page_popup_url
                  , s = n.landing_page_type
                  , d = n.enable_terminal_inside_open_mini_game
                  , l = e.adActType
                  , c = ve(a || "", {
                    __ACTTYPE__: "".concat(l),
                    __AMS_LINK_PARAMS__: encodeURIComponent(JSON.stringify(t.amsLinkParams))
                });
                if (s === T.SSO && c)
                    return this.logger.log("sso 方式打开落地页：".concat(a)),
                    this.adCore.config.openQQLive(c, t),
                    t.landing.only_report_click && this.jumpNormal(t, e, {
                        linkOnlyReport: !0
                    }),
                    void t.reporter.reportClick();
                if (s === T.NORMAL && c)
                    if (this.adCore.config.openHintBrowser(c))
                        return void t.reporter.reportClick();
                if (d && t.miniProgramData || (null === (i = t.miniProgramData) || void 0 === i ? void 0 : i.url_scheme))
                    if (this.adCore.config.launchMiniProgram(t.miniProgramData))
                        return void this.jumpNormal(t, e, {
                            linkOnlyReport: !0
                        });
                this.jumpNormal(t, e)
            }
        }
        ,
        t.prototype.getJumpLink = function(t, e) {
            var o = t.landing.link;
            if (o) {
                var i = this.adCore.config.playerData.playerPfEx || "";
                return o = (o = me(o, {
                    pf_ex: i,
                    version: "4.2.45"
                })).replace("__RETURN_TYPE__", "2"),
                e && (o = o.replace("__ACTTYPE__", e)),
                o
            }
        }
        ,
        t.prototype.doExposure = function(t, e) {
            t.reporter.reportExposure(e),
            Xt(M.EXPOSURE, t.frequencyControlConfig)
        }
        ,
        t.prototype.getOrderTypes = function() {
            return {
                sum: this.order.orders.length
            }
        }
        ,
        t.prototype.initData = function() {
            return new zi
        }
        ,
        t.prototype.getInitAdInfo = function() {
            return this.order.orders[0] || this.order.empty[0]
        }
        ,
        t.prototype.jumpNormal = function(t, e, o) {
            var i, r = this.getJumpLink(t, e.adActType);
            r && (null !== (i = null == o ? void 0 : o.linkOnlyReport) && void 0 !== i && i ? this.adCore.cgi.requestReportUrl(r) : (window.navigator.userAgent.indexOf("SGWebviewApi") > 0 ? window.parent.postMessage({
                action: "goLink",
                params: {
                    url: r
                }
            }, {
                targetOrigin: window.parent.origin
            }) : window.open(r),
            t.reporter.reportClick()))
        }
        ,
        t
    }(), $i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.load = function() {
            t.prototype.load.call(this),
            this.play()
        }
        ,
        e.prototype.play = function() {
            t.prototype.play.call(this),
            this.show();
            var e = this.adCore.config.playerData.playtime || this.adCore.config.outerPlayerData.playtime
              , o = this.adCore.config.outerPlayerData.startPlaytime;
            this.logger.log("der report: ".concat(At({
                playtime: e,
                startPlaytime: o
            }))),
            this.doExposure(this.adInfo, {
                __TIME_OFFSET__: "".concat(Math.floor(1e3 * e)),
                __START_TIME__: "".concat(Math.floor(1e3 * o))
            }),
            this.adInfo.reportVrAdExposure(),
            this.stop({
                reason: "正常上报后结束"
            })
        }
        ,
        e.prototype.stop = function(e) {
            var o;
            t.prototype.stop.call(this, e),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                firstView: null !== (o = this.data.showTime) && void 0 !== o ? o : -1,
                reason: e.reason
            })),
            this.destroy()
        }
        ,
        e
    }(Hi);
    !function(t) {
        t[t.INIT = 0] = "INIT",
        t[t.LOADING = 2] = "LOADING",
        t[t.PLAYING = 6] = "PLAYING",
        t[t.END = -1] = "END",
        t[t.FREQUENCY = -1e3] = "FREQUENCY"
    }(Bi || (Bi = {}));
    var Ki, Gi = function(t, e) {
        var o;
        if (e.ad_scene !== s.ANCHOR)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
            if (o.ad_type === p.ANCHOR_EMPTY)
                if (o.point) {
                    var i = De(o);
                    r.push({
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: Pe(t, i, e, o.anchor_empty),
                        point: i,
                        pointStatus: Bi.INIT
                    })
                } else
                    Oe(t, e, o.empty)
        }
        )),
        r.length > 0 && (i.pointAdData = r),
        i
    }, qi = function() {
        function t(t) {
            this.adCore = t,
            this.name = "AdWatcher",
            this.logger = this.adCore.logger.createLogger(this.name)
        }
        return t.prototype.reset = function() {}
        ,
        t
    }(), Yi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handleVideoTimeupdate = function(t) {
                var o = t.data.playtime;
                e.timeupdate(1e3 * o)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.outerEvent.on(fi.VIDEO_TIMEUPDATE, this.handleVideoTimeupdate)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.outerEvent.off(fi.VIDEO_TIMEUPDATE, this.handleVideoTimeupdate)
        }
        ,
        e
    }(qi), Fi = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handleVideoPlaySessionEnd = function() {
                var t = e.adCore.order.getPoints(p.ANCHOR_EMPTY);
                (null == t ? void 0 : t.length) && t.forEach((function(t) {
                    var o = e.adCore.order.getPointOrderFromPoint(p.ANCHOR_EMPTY, t);
                    o && 0 !== o.orders.length && o.pointStatus === Bi.INIT && (o.pointStatus = Bi.LOADING,
                    e.adCore.ctrl.loadAdOrder(o),
                    o.pointStatus = Bi.END)
                }
                ))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            t.prototype.startWatch.call(this),
            this.adCore.outerEvent.on(fi.VIDEO_PLAY_SESSION_END, this.handleVideoPlaySessionEnd),
            this.adCore.event.on(Se.AD_STOP_ALL, this.handleVideoPlaySessionEnd)
        }
        ,
        e.prototype.endWatch = function() {
            t.prototype.endWatch.call(this),
            this.adCore.outerEvent.off(fi.VIDEO_PLAY_SESSION_END, this.handleVideoPlaySessionEnd),
            this.adCore.event.off(Se.AD_STOP_ALL, this.handleVideoPlaySessionEnd)
        }
        ,
        e.prototype.timeupdate = function(t) {
            var e = this;
            this.adCore.config.phlsConfig.isSoloPlayingPhls || this.adCore.order.getPoints(p.ANCHOR_EMPTY).forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(p.ANCHOR_EMPTY, o);
                i && 0 !== i.orders.length && t >= o.begin && i.pointStatus === Bi.INIT && (i.pointStatus = Bi.LOADING,
                e.adCore.ctrl.loadAdOrder(i),
                i.pointStatus = Bi.END)
            }
            ))
        }
        ,
        e
    }(Yi), Wi = function(t) {
        function e(e, o) {
            var i = t.call(this, e) || this;
            return i.adCore = e,
            i.options = o,
            i.name = "AnchorWatcher",
            i.requestAnchorOrder = function(t) {
                t.data.isFirst && (i.options.disable || "vod" !== i.adCore.config.outerPlayerData.type || i.adCore.config.requestProxyHttp(s.ANCHOR))
            }
            ,
            i
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.requestAnchorOrder),
            this.adCore.outerEvent.on(fi.AD_SESSION_ID_CHANGE, this.requestAnchorOrder)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.requestAnchorOrder),
            this.adCore.outerEvent.off(fi.AD_SESSION_ID_CHANGE, this.requestAnchorOrder)
        }
        ,
        e
    }(qi);
    !function(t) {
        t[t.START = 0] = "START",
        t[t.PAUSED = 1] = "PAUSED"
    }(Ki || (Ki = {}));
    var ji, Qi, Zi = function() {
        function t(t, e) {
            var o;
            this.isRunning = !1,
            this.timeList = [],
            this.prevTime = null,
            this.interval = null,
            this.options = t,
            this.logger = e,
            this.options.timeout = null !== (o = this.options.timeout) && void 0 !== o ? o : 200
        }
        return Object.defineProperty(t.prototype, "time", {
            get: function() {
                var t;
                return null !== (t = this.prevTime) && void 0 !== t ? t : 0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.start = function() {
            this.isRunning || (this.timeList.push({
                time: Date.now(),
                type: Ki.START
            }),
            this.startInterval())
        }
        ,
        t.prototype.pause = function() {
            this.isRunning && (this.timeList.push({
                time: Date.now(),
                type: Ki.PAUSED
            }),
            this.clearInterval())
        }
        ,
        t.prototype.clear = function() {
            this.clearInterval(),
            this.timeList = [],
            this.prevTime = null
        }
        ,
        t.prototype.startInterval = function() {
            var t = this;
            this.interval || (this.interval = window.setInterval((function() {
                var e = t.getRunningTime()
                  , o = t.options.onChange;
                t.prevTime !== e && (t.prevTime = e,
                null == o || o(t.prevTime))
            }
            ), this.options.timeout),
            this.isRunning = !0)
        }
        ,
        t.prototype.clearInterval = function() {
            this.interval && (clearInterval(this.interval),
            this.interval = null,
            this.isRunning = !1)
        }
        ,
        t.prototype.getRunningTime = function() {
            var t = null
              , e = [];
            return this.timeList.forEach((function(o) {
                o.type !== Ki.START || t ? o.type === Ki.PAUSED && t && (e.push(o.time - t),
                t = null) : t = o.time
            }
            )),
            t && e.push(Date.now() - t),
            Math.floor(e.reduce((function(t, e) {
                return t + e
            }
            ), 0) / 1e3)
        }
        ,
        t
    }();
    function Xi(t, e) {
        void 0 === e && (e = {});
        var o = e.insertAt;
        if (t && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0]
              , r = document.createElement("style");
            r.type = "text/css",
            "top" === o && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r),
            r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }
    }
    !function(t) {
        t.ADVERTISER_LOGO = "1002",
        t.ADVERTISER_NAME = "1003",
        t.AD_TITLE = "1011",
        t.AD_VIEW_AREA = "1014",
        t.AD_DETAIL = "1024",
        t.LD_DOWNLOAD_BANNER = "1025",
        t.AD_ACTION_BUTTON = "1021",
        t.CONTINUED_POST = "1043"
    }(ji || (ji = {})),
    function(t) {
        t.INTERRUPT = "interrupt",
        t.COUNTDOWN = "countdown",
        t.VIDEO_END = "videoEnd"
    }(Qi || (Qi = {}));
    var Ji;
    Xi('txp,txpdiv{-webkit-box-sizing:border-box;box-sizing:border-box;display:block}.txp_ad{color:#fff;font-family:sans-serif;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:4}.txp_ad a{text-decoration:none}.txp_ad .txp_btn_close{color:#fff;cursor:pointer;display:inline-block;height:28px;margin-left:3px;pointer-events:auto;position:relative;vertical-align:top;width:14px}.txp_ad .txp_btn_close:before{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiAxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEwLjUgMTAtLjUuNS00LTQtNCA0LS41LS41IDQtNC00LTQgLjUtLjUgNCA0IDQtNCAuNS41LTQgNCA0IDR6Ii8+PC9zdmc+) 50% no-repeat;content:"";height:12px;left:0;position:absolute;top:7px;width:12px}.txp_ad img{max-width:100%;pointer-events:auto}.txp_ad .txp_ad_inner{height:100%;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0;width:100%}.txp_ad .txp_ad_inner .txp_creative_link{cursor:auto;display:block;height:100%;pointer-events:auto;width:100%}.txp_ad .txp_btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:none;cursor:pointer;font-family:inherit;position:relative}.txp_ad .txp_ad_dialog{background-color:#242424;background-color:rgba(36,36,36,.98);left:50%;margin:auto;padding-bottom:25px;padding-top:40px;pointer-events:auto;position:absolute;text-align:center;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:420px;z-index:7}.txp_ad .txp_ad_dialog .txp_ad_btn{background-color:#ff7800;border-radius:1px;cursor:pointer;display:block;font-size:14px;line-height:34px;margin:25px auto 0;overflow:hidden;text-align:center;width:100px}.txp_ad .txp_ad_dialog .txp_ad_fb{display:inline-block;font-size:12px;margin:15px auto 0;text-align:center}.txp_ad .txp_ad_dialog .txp_dialog_bd{color:#fff;display:block;font-size:14px;line-height:1.5;margin:auto 30px;text-align:left}.txp_ad .txp_ad_dialog .txp_btn_close{color:#848484;cursor:pointer;font-size:0;position:absolute;right:8px;top:2px;-webkit-transform:scale(1.5);transform:scale(1.5)}.txp_ad_countdown{color:#ff6e0b;display:inline-block;font-family:Helvetica,arial;font-size:14px;font-weight:400;line-height:26px;padding-left:3px;position:relative;vertical-align:top}.txp_ad_countdown:after{background-color:#fff;background-color:hsla(0,0%,100%,.6);background-size:1px 100%;bottom:9px;content:"";position:absolute;right:-9px;top:9px;width:1px}.txp_ad_skip_text{line-height:26px;margin-left:6px;padding-left:10px}.txp_ad_skip_text,.txp_btn_hint{display:inline-block;position:relative;vertical-align:top}.txp_btn_hint{background-color:#ff6e0b;border-radius:100%;height:14px;margin-left:3px;margin-top:6px;width:14px}.txp_btn_hint:after{content:"?";left:0;line-height:14px;position:absolute;text-align:center;top:0;width:100%}.txp_ad_more,.txp_ad_skip{background-color:#252525;background-color:rgba(37,37,37,.7);border-radius:1px;color:#fff!important;display:inline-block;font-size:12px;height:26px;line-height:26px;overflow:hidden;padding:0 5px;pointer-events:auto;position:relative;vertical-align:top;white-space:nowrap;z-index:100}.txp_ad .txp_ad_inner .txp_creative_link.txp_none,.txp_ad .txp_none,.txp_none,txpdiv .txp_none{display:none}.plugin-creative-player .txp_none{display:none!important}.plugin-creative-player *,.plugin-creative-player :after,.plugin-creative-player :before{-webkit-box-sizing:border-box;box-sizing:border-box}'),
    function(t) {
        t.CLICK = "click",
        t.MOUSE_ENTER = "mouseenter",
        t.LOAD = "load",
        t.ERROR = "error"
    }(Ji || (Ji = {}));
    var tr, er = function(t) {
        return function(e) {
            return function(t, e) {
                return "".concat("creative-player", "-").concat(t, "-").concat(e)
            }(t, e)
        }
    }, or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAACHklEQVRYCe2YPU7DQBCFY5ASCUGLAgUdNIRDIAqgyC04CAplOkRyBlpygQghQUOJkGiQIEBHwU8VCvM9sKXVZuPYziaxBCO9eD078/yy3h2vXSr9W/IIBMndg71hGJbxboM6qIEVsApkLxFuOXZANwiCPkf/hpAqaIF3kNbeCGyDqjdFkFXAEfgEeU25DVAZSxgEGpVL4MuuIMo3WiTWQG+Ikkf8J2AfbIDFCGrLp75hufJvZR4pki6AbU84DsD8KELFRLHPHG2TqGwjRcKNxdLhfGmUELtfOeDM4tKpbl/6OUVwHWhFfQFNyDn7YmnPlQuOgW2NtBw/cWSXwYIrCf8yaEZYdsWYPuIkyh4prb5st84kNdsQnYPY7mmsmf2uNjG6ffacartiM/sgtgtkWlFaFKapeKr6j2eQuObESFHkafVplZm2O54asmET8anJGrXTiFKdMq01tiARwJhLFHkqnqZ1nYKI2AOqwj5MI+VcffhV0U27GybowYzy0G66LgSvHjWmfcRxuYtdTODpGDp5kFysW+ZUmeDkD0x2Uidce6ArrxgRket/2UNauMJYuEfH9B+u3BZtGZybKPzT3X5wwR3wCvrgEOSuWcoFrjmXfoMGwTUwrcPJTLewXVNN1J7pJn8TET2HKLn0AFYt0VN7HUz+NSgqYMV5UYxLM/++OK/SsShjtCb+scHH5xh9itEnGdn0Psf8Xu8P/n4D4PsXcaUqP5MAAAAASUVORK5CYII=", ir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAz0lEQVRIDe1V2w3CMAxs2IGBYOduUDZgC35gAnOuUpFYxvGhSvw0khulvjsn5z6m6RiMAyIyIxbEmeEpVjmVO3/lVgAmuSPSRRRbOZhkiQq0wFQRIz7mMAQG250qQ8xgOlG7iASinNUJ156Qdy8UGSUdQW2kjnFDR+JbHmLt00WJnzaRv81m92rLfhY54mpVa9fvfYiEolzK6oxABuMWY4gMdi1GE8CiOADrv0AH1Tzg28Z3n2v7HrywqRviUkp5rMdKXCr2WrnPBOWAfBx4A/82CR3u3683AAAAAElFTkSuQmCC", rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAAAg0lEQVRYCe2WQQqAMAwEix8r+BnBg7/2G8YVPRVa2pNbmEAubaDDNISkRGAAAxiY0EBEZOVqgy6YU3kpNwsogezKJ6ygjpcJqHaXyBKm2oq+W0x1aVJRYWp4eC69D01ZV9j5d4oDU+shzMxixmv9UN/YLWhZUMNTuPb9nGMAAxhwMnADTiAA962llmkAAAAASUVORK5CYII=", nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAABGElEQVRYCe1VwQrCMAxdBfHixY8RYf/PQPYxXryMHWaea2CWpkkKTg8NZNM2L+81ybaua9Yq0Crw4wqEEv+yLDfaP5KPIYSpFJvuEfZEa1fymbD3dJ//H/iHcAf5hbyPCYWwz+UY20cscoimCRgJ+SQ/k5tEbMiBARY5RCu2AKhMwkFqhyeWFakCrCJqyJHbJEATUUvuEiCJwDoZBo57LrboHZlczBVgXOa02KoiB9AtAKBEBJYw7a6TAwTTHsM16otXdwWS0+PksH1akCEfVv4dhjBHzi+k0l4UKN5MLbAQWGJyKlQBnsSeWBZTFFCT0IvRHkN8z10THucCw8lfUeQQTRMwE/JB7nrJbEQAixzNWgVaBf63Ai9zOaAYWlyyrgAAAABJRU5ErkJggg==", ar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACAUlEQVRYCcVXsU7DMBC109JKFWVALPADfAE7zCyVKCNLi/goBgZYO7Cws/MF/EQlaFWppdS858ZplLiNL6jJk44YN3fv2Tmfba0yMMY00dWBtWANWATTsDIwcFrBfmEL2ExrvcQzQRIYxGwfwrrJr/tpTBB2CiEUtx5ZTH6M/9vsrABzcIwpgtNLcORVkZOPXORUUfzN9z3t5MqiS27OABOuLnQogNleF1oUwKXmx/3Vsxpcvqq3FyaoDPShL2NsR4MCaH6szJH5mV+o0eNIJILk8LG+iOEPbnsjkie1IPfizXCgm81Ps1yeB4tw5PChr0KMXNxNh94+er50fTdW/Yd+sIgsOXxtjA1hrrVbgERECXKGLxYQIqIkOUNrFIMzNoLgI6IjE85984BpT3PJBNAzKwJdZckZTi6AXikRNgizXThy+hFhObB+dy9/5QJSo+fyDF6iW+TLBGTI7bRL6oRHBI9fYfCRs1Ct0dduJbBsK1VYgBxp2AzsJpdXTMeOZ7GAInIXTFq2Y7/dAkLJ/yGCdeAU/v4dEfs5t1S7q0nWeVr4QftDPb33nMbM0x5KeW73I9LfmgEk5IzEz9Eb3lpfrb/8wW3vijNwgmZdx7IFc4A3lrpgBczqYgfvLIrvarwuVY0Jud0ynIKd16WqQC5ybpYfkrG+y2l62BBS6fX8Dz8LYXDqX2E6AAAAAElFTkSuQmCC", sr = function() {
        function t(t) {
            this.options = t,
            this.$domNodes = {},
            this.eventEmitter = new jt,
            this.logger = this.adCore.logger.createLogger("ui")
        }
        return Object.defineProperty(t.prototype, "adCore", {
            get: function() {
                return this.options.adCore
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "container", {
            get: function() {
                return this.options.container
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.init = function() {
            this.mount(),
            this.logger.log("ui 创建"),
            this.domEvents = this.getDomEvents(),
            this.bindUIEvent()
        }
        ,
        t.prototype.destroy = function() {
            this.unbindUIEvent(),
            this.$domNodes.layer && (this.logger.log("ui 销毁并移除"),
            this.$domNodes.layer.remove()),
            this.eventEmitter.removeAllListeners(),
            this.container.remove()
        }
        ,
        t.prototype.on = function(t, e) {
            this.eventEmitter.on("".concat(t), e)
        }
        ,
        t.prototype.off = function(t, e) {
            this.eventEmitter.off("".concat(t), e)
        }
        ,
        t.prototype.emit = function(t, e) {
            this.eventEmitter.emit("".concat(t), e)
        }
        ,
        t.prototype.setDomVisible = function(t, e) {
            e ? Kt(t) : $t(t)
        }
        ,
        t.prototype.mount = function() {
            if (!this.$domNodes.layer) {
                var t = document.createElement("div");
                t.dataset.role = this.roleMap.layer,
                this.container.appendChild(t),
                this.$domNodes.layer = t
            }
            this.appendDom(this.$domNodes.layer)
        }
        ,
        t.prototype.appendDom = function(t, e) {
            var o = this;
            void 0 === e && (e = this.$domNodes);
            var i = this.getTemplate();
            i && (t.innerHTML = i,
            Object.keys(this.roleMap).forEach((function(i) {
                o.setDomNodes(t, e, i)
            }
            )))
        }
        ,
        t.prototype.setDomNodes = function(t, e, o) {
            void 0 === e && (e = this.$domNodes);
            var i = t.querySelector('[data-role="'.concat(this.roleMap[o], '"]'));
            i && (e[o] = i)
        }
        ,
        t.prototype.bindUIEvent = function() {
            var t;
            null === (t = this.domEvents) || void 0 === t || t.forEach((function(t) {
                Gt(t.el, t.eventName, t.listener)
            }
            ))
        }
        ,
        t.prototype.unbindUIEvent = function() {
            var t;
            null === (t = this.domEvents) || void 0 === t || t.forEach((function(t) {
                qt(t.el, t.eventName, t.listener)
            }
            ))
        }
        ,
        t.prototype.forwardDomEvent = function(t, e, o, i) {
            var r = this;
            return void 0 === o && (o = Ji.CLICK),
            {
                el: t,
                eventName: o,
                listener: function(t) {
                    i && t.stopPropagation(),
                    r.emit(e, {
                        target: t.target
                    })
                }
            }
        }
        ,
        t.prototype.getDomEvents = function() {
            return []
        }
        ,
        t
    }(), dr = function() {
        function t(t, e) {
            this.props = t,
            this.children = e,
            this.container = null,
            this.el = null,
            this.created = !1,
            this.state = {}
        }
        return Object.defineProperty(t.prototype, "$el", {
            get: function() {
                return this.el
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.create = function() {
            this.el = this.render(),
            this.updateConfig = this.getUpdate(),
            this.created = !0
        }
        ,
        t.prototype.mount = function(t) {
            if (this.container)
                throw new Error("已经被 mount，无法重复 mount");
            this.created || this.create(),
            this.el && (this.container = t,
            t.innerHTML = "",
            t.appendChild(this.el)),
            this.mounted()
        }
        ,
        t.prototype.mounted = function() {}
        ,
        t.prototype.destroy = function() {
            this.container && this.container.remove()
        }
        ,
        t.prototype.getState = function(t) {
            return t in this.state ? this.state[t] : this.props && t in this.props ? this.props[t] : void 0
        }
        ,
        t.prototype.setState = function(t) {
            var e = this;
            Object.keys(t).forEach((function(o) {
                var i, r = null === (i = e.updateConfig) || void 0 === i ? void 0 : i[o], n = e.getState(o), a = t[o];
                e.state[o] = a,
                null == r || r(a, n)
            }
            ))
        }
        ,
        t.prototype.getUpdate = function() {
            return {}
        }
        ,
        t.prototype.createRef = function() {
            var t;
            function e(e) {
                t = e
            }
            return Object.defineProperty(e, "value", {
                get: function() {
                    return t
                }
            }),
            e
        }
        ,
        t
    }();
    function lr(t, e, o) {
        if (function(t, e) {
            return "function" == typeof e && t.startsWith("on")
        }(e, o)) {
            var i = e.slice(2).toLowerCase();
            t.__handlers = t.__handlers || {},
            t.removeEventListener(i, t.__handlers[i]),
            t.__handlers[i] = o,
            t.addEventListener(i, t.__handlers[i])
        } else
            ["checked", "value", "className"].includes(e) ? t[e] = o : !function(t, e) {
                return "ref" === t && "function" == typeof e
            }(e, o) ? t.setAttribute(e, String(o)) : o(t)
    }
    function cr(t, e) {
        for (var o = [], i = 2; i < arguments.length; i++)
            o[i - 2] = arguments[i];
        var r = document.createElementNS("http://www.w3.org/2000/svg", t);
        return e && Object.entries(e).forEach((function(t) {
            var e = t[0]
              , o = t[1];
            lr(r, e, o)
        }
        )),
        o.forEach((function(t) {
            r.appendChild(t)
        }
        )),
        r
    }
    function pr(t, e) {
        for (var o = [], i = 2; i < arguments.length; i++)
            o[i - 2] = arguments[i];
        if (function(t) {
            return ["svg", "rect", "circle", "ellipse", "line", "polyline", "polygon", "path", "clipPath", "defs", "g"].includes(t)
        }(t))
            return cr.apply(void 0, R([t, e], o, !1));
        var r = "fragment" === t
          , n = r ? document.createDocumentFragment() : document.createElement(t);
        return !r && e && Object.entries(e).forEach((function(t) {
            var e = t[0]
              , o = t[1];
            lr(n, e, o)
        }
        )),
        function t(e) {
            e.forEach((function(e) {
                if (e)
                    if (Array.isArray(e))
                        t(e);
                    else if (e instanceof Node)
                        n.appendChild(e);
                    else if ("string" == typeof e || "number" == typeof e) {
                        var o = document.createTextNode(String(e));
                        n.appendChild(o)
                    }
            }
            ))
        }(o),
        n
    }
    function ur(t, e) {
        for (var o = [], i = 2; i < arguments.length; i++)
            o[i - 2] = arguments[i];
        try {
            if ("string" == typeof t)
                return pr.apply(void 0, R([t, e || {}], o, !1));
            if ("function" == typeof t) {
                var r = new t(e || {},o);
                r.create();
                var n = null == e ? void 0 : e.ref;
                return "function" == typeof n && n(r),
                r.$el
            }
        } catch (t) {}
    }
    function hr(t, e) {
        void 0 === e && (e = ji.AD_DETAIL);
        var o = t.dataset.acttype;
        return o || (t.parentElement ? hr(t.parentElement) : e)
    }
    function fr(t) {
        var e = t.dataset.eid;
        return e || (t.parentElement ? fr(t.parentElement) : "whole_ad")
    }
    function vr(t, e, o) {
        e !== o && (e ? Ht(t, "txp_none") : zt(t, "txp_none"))
    }
    function mr(t) {
        var e = t.width
          , o = t.height;
        return e < 480 || o < 270 ? tr.SIZE_480_270 : e < 590 || o < 328 ? tr.SIZE_590_328 : e < 1110 || o < 624 ? tr.SIZE_1110_624 : e < 1920 || o < 1080 ? tr.SIZE_1920_1080 : tr.DEFAULT
    }
    !function(t) {
        t.SIZE_480_270 = "size_480_270",
        t.SIZE_590_328 = "size_590_328",
        t.SIZE_1110_624 = "size_1110_624",
        t.SIZE_1920_1080 = "size_1920_1080",
        t.DEFAULT = "default"
    }(tr || (tr = {}));
    Xi("div[data-role=creative-player-continued-post-layer]{height:100%;pointer-events:none;position:absolute;width:100%;z-index:3}div[data-role=creative-player-continued-post-layer] .txp_scan_card{background:rgba(0,0,0,.7);border-radius:8px;bottom:64px;height:206px;pointer-events:auto;position:absolute;right:10px;width:162px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#000;border-radius:8px 8px 0 0;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:40px;padding:10px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_title>img{border-radius:3px;height:20px;width:20px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_title>div{color:#fff;font-size:14px;margin-left:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode_container{text-align:center}div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode{margin-top:12px;width:100%}div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode,div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode>div{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;border-radius:4px;display:-webkit-box;display:-ms-flexbox;display:flex;height:110px;justify-content:center}div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode>div{background:#fff;width:110px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_qrcode_text{color:#fff;font-size:12px;margin-top:10px;opacity:.5;white-space:nowrap}div[data-role=creative-player-continued-post-layer] .txp_scan_card.txp_scan_card_left{left:10px;right:unset}div[data-role=creative-player-continued-post-layer] .txp_scan_card.txp_scan_card_left .txp_scan_card_flag{left:0;right:unset}div[data-role=creative-player-continued-post-layer] .txp_scan_card_flag{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:rgba(0,0,0,.7);border-radius:4px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:18px;justify-content:center;pointer-events:auto;position:absolute;right:0;top:-25px;width:46px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_flag>span{color:#8b8b8b;font-size:12px;margin-right:4px}div[data-role=creative-player-continued-post-layer] .txp_scan_card_flag>img{height:8px;opacity:.7;width:8px}div[data-role=creative-player-continued-post-layer] .txp_scan_card.txp_autohide{bottom:10px}.simple-white-theme txpdiv[data-role=creative-player-continued-post-layer] .txp_scan_card{bottom:100px}.simple-white-theme txpdiv[data-role=creative-player-continued-post-layer] .txp_scan_card.txp_autohide{bottom:10px}");
    var yr, gr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                icon: e.createRef(),
                name: e.createRef(),
                code: e.createRef(),
                text: e.createRef()
            },
            e.onClick = function(t) {
                var o;
                t.stopPropagation();
                var i = t.target
                  , r = hr(i)
                  , n = fr(i);
                null === (o = e.props) || void 0 === o || o.onClick(r, n)
            }
            ,
            e.onCloseClick = function(t) {
                var o;
                t.stopPropagation(),
                null === (o = e.props) || void 0 === o || o.onCloseClick()
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.renderQrCode = function(t) {
            var e, o;
            this.$refs.code.value.innerHTML = "",
            this.$refs.code.value && t && (null === (o = null === (e = this.props) || void 0 === e ? void 0 : e.renderQrCode) || void 0 === o || o.call(e, this.$refs.code.value, t, 100))
        }
        ,
        e.prototype.setContainerBottom = function(t) {
            this.$refs.container && Bt(this.$refs.container.value, "bottom", t)
        }
        ,
        e.prototype.render = function() {
            var t, e, o, i;
            return ur("div", {
                ref: this.$refs.container,
                class: "txp_scan_card ".concat(this.getLocationClass(), " ").concat((null === (t = this.props) || void 0 === t ? void 0 : t.visible) ? "" : "txp_none"),
                onClick: this.onClick,
                "data-eid": "poster_rlt",
                "data-acttype": ji.AD_DETAIL
            }, ur("div", {
                class: "txp_scan_card_title"
            }, ur("img", {
                ref: this.$refs.icon,
                alt: "",
                src: (null === (e = this.props) || void 0 === e ? void 0 : e.iconUrl) || "",
                "data-eid": "ad_head",
                "data-acttype": ji.ADVERTISER_LOGO
            }), ur("div", {
                ref: this.$refs.name,
                "data-eid": "ad_name",
                "data-acttype": ji.ADVERTISER_NAME
            }, null === (o = this.props) || void 0 === o ? void 0 : o.name)), ur("div", {
                class: "txp_scan_card_qrcode_container"
            }, ur("div", {
                class: "txp_scan_card_qrcode"
            }, ur("div", {
                ref: this.$refs.code,
                "data-eid": "poster",
                "data-acttype": ji.AD_VIEW_AREA
            })), ur("div", {
                class: "txp_scan_card_qrcode_text",
                ref: this.$refs.text,
                "data-eid": "ad_title"
            }, null === (i = this.props) || void 0 === i ? void 0 : i.qrcodeTip)), ur("div", {
                class: "txp_scan_card_flag",
                onClick: this.onCloseClick
            }, ur("span", null, "广告"), ur("img", {
                class: "close_icon",
                src: ir,
                alt: ""
            })))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    e !== o && (e ? Ht(t.$refs.container.value, "txp_none") : zt(t.$refs.container.value, "txp_none"))
                },
                name: function(e, o) {
                    e !== o && (t.$refs.name.value.innerText = e || "")
                },
                iconUrl: function(e, o) {
                    e !== o && (t.$refs.icon.value.src = e)
                },
                qrcodeTip: function(e, o) {
                    e !== o && (t.$refs.text.value.innerText = e || "")
                },
                ctrlBarVisible: function(e, o) {
                    e !== o && (e ? Ht(t.$refs.container.value, "txp_autohide") : zt(t.$refs.container.value, "txp_autohide"))
                },
                location: function(e, o) {
                    e !== o && (e === C.LEFT_BOTTOM ? zt(t.$refs.container.value, "txp_scan_card_left") : Ht(t.$refs.container.value, "txp_scan_card_left"))
                }
            }
        }
        ,
        e.prototype.getLocationClass = function() {
            var t;
            return (null === (t = this.props) || void 0 === t ? void 0 : t.location) === C.LEFT_BOTTOM ? "txp_scan_card_left" : ""
        }
        ,
        e
    }(dr), _r = {
        layer: er("continued-post")("layer")
    };
    !function(t) {
        t.CLOSE_CLICK = "CLOSE_CLICK",
        t.CLICK = "CLICK"
    }(yr || (yr = {}));
    var xr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = _r,
            e.handleCtrlBarShow = function() {
                var t;
                null === (t = e.scanCard) || void 0 === t || t.setState({
                    ctrlBarVisible: !0
                })
            }
            ,
            e.handleCtrlBarHide = function() {
                var t;
                null === (t = e.scanCard) || void 0 === t || t.setState({
                    ctrlBarVisible: !1
                })
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.init = function() {
            t.prototype.init.call(this),
            this.bindOwnEvent()
        }
        ,
        e.prototype.destroy = function() {
            this.unbindOwnEvent(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.show = function() {
            var t;
            null === (t = this.scanCard) || void 0 === t || t.setState({
                visible: !0
            })
        }
        ,
        e.prototype.hide = function() {
            var t;
            null === (t = this.scanCard) || void 0 === t || t.setState({
                visible: !1
            })
        }
        ,
        e.prototype.setLocation = function(t) {
            var e;
            void 0 === t && (t = C.RIGHT_BOTTOM),
            null === (e = this.scanCard) || void 0 === e || e.setState({
                location: t
            })
        }
        ,
        e.prototype.updateUI = function(t) {
            var e, o;
            null === (e = this.scanCard) || void 0 === e || e.setState({
                name: t.name,
                iconUrl: t.iconUrl,
                qrcodeTip: t.qrcodeTip || "微信扫码了解详情",
                ctrlBarVisible: this.adCore.outerEvent.ctrlBarVisible
            }),
            t.qrcodeUrl && (null === (o = this.scanCard) || void 0 === o || o.renderQrCode(t.qrcodeUrl))
        }
        ,
        e.prototype.setContainerBottom = function(t) {
            var e;
            t && (null === (e = this.scanCard) || void 0 === e || e.setContainerBottom(t))
        }
        ,
        e.prototype.appendDom = function(t) {
            var e = this;
            this.scanCard = new gr({
                renderQrCode: function(t, o, i) {
                    return e.adCore.config.renderQrCode(t, o, i)
                },
                visible: !1,
                onCloseClick: function() {
                    e.emit(yr.CLOSE_CLICK)
                },
                onClick: function(t, o) {
                    e.emit(yr.CLICK, {
                        actType: t,
                        eid: o
                    })
                }
            }),
            this.scanCard.mount(t)
        }
        ,
        e.prototype.getTemplate = function() {
            return ""
        }
        ,
        e.prototype.bindOwnEvent = function() {
            this.adCore.outerEvent.on(fi.CTRL_SHOW, this.handleCtrlBarShow),
            this.adCore.outerEvent.on(fi.CTRL_HIDE, this.handleCtrlBarHide)
        }
        ,
        e.prototype.unbindOwnEvent = function() {
            this.adCore.outerEvent.off(fi.CTRL_SHOW, this.handleCtrlBarShow),
            this.adCore.outerEvent.off(fi.CTRL_HIDE, this.handleCtrlBarHide)
        }
        ,
        e
    }(sr);
    function Ar(t, e) {
        var o = t.order.getExtraData(p.CONTINUED_POST);
        return e === p.PRE ? null == o ? void 0 : o.pre : e === p.MID ? null == o ? void 0 : o.mid : void 0
    }
    var Cr = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.handleClose = function() {
                var t;
                o.stop({
                    reason: "用户点击关闭"
                }),
                Xt(M.FEEDBACK, null === (t = o.adInfo) || void 0 === t ? void 0 : t.frequencyControlConfig)
            }
            ,
            o.handleClick = function(t) {
                var e = t.eid;
                if (o.data.isShow) {
                    var i = o.adInfo;
                    o.doClickAction(i, D({
                        eid: e,
                        adActType: ji.CONTINUED_POST,
                        orderType: i.orderType
                    }, o.getVrReportData()))
                }
            }
            ,
            o.getVrReportData = function() {
                return {
                    ad_type: "ad_continue_paste",
                    mod_id: "ad_bottom_float",
                    ad_ref_equip: "PC",
                    ad_jump_type: o.continuedPost.landing_page_type === b.DIRECTLY ? "2" : "1",
                    fromscene: o.fromAd === p.MID ? "2" : "1"
                }
            }
            ,
            o.logger = o.adCore.logger.createLogger("ContinuedPostAd"),
            o.continuedPostUI = new xr({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.continuedPostUI.init(),
            o
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "fromAd", {
            get: function() {
                var t;
                return (null === (t = this.order.config) || void 0 === t ? void 0 : t.fromAd) || p.PRE
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.load = function() {
            var e, o = this;
            if (t.prototype.load.call(this),
            !this.fromAd)
                return this.logger.log("广告初始化参数错误: config: ".concat(At(this.config))),
                void this.stop({
                    reason: "广告初始化参数错误"
                });
            this.continuedPost = Ar(this.adCore, this.fromAd),
            (null === (e = this.continuedPost) || void 0 === e ? void 0 : e.enable) ? (this.continuedPostUI.setLocation(this.continuedPost.location),
            this.countdown = new Zi({
                timeout: 500,
                onChange: function(t) {
                    var e = 1e3 * t;
                    if (e > o.continuedPost.display_time)
                        o.stop({
                            reason: "正常倒计时结束"
                        });
                    else {
                        var i = Math.floor(e / o.continuedPost.rotate_speed) % o.order.orders.length;
                        i !== o.curIdx && o.updateUI(i)
                    }
                }
            },this.logger),
            this.updateUI(0),
            this.bindEvent(),
            this.canplayHandler()) : this.stop({
                reason: "不允许延续贴"
            })
        }
        ,
        e.prototype.play = function(e) {
            var o, i;
            t.prototype.play.call(this),
            (null === (o = this.continuedPost) || void 0 === o ? void 0 : o.enable) && (e ? (this.show(),
            null === (i = this.countdown) || void 0 === i || i.start()) : this.pause())
        }
        ,
        e.prototype.show = function() {
            t.prototype.show.call(this),
            this.continuedPostUI.show(),
            this.data.hasReportView || (this.data.hasReportView = !0,
            this.adInfo.reportVrAdExposure({
                eid: "whole_ad",
                isFirstExposure: 0 === this.curIdx
            }))
        }
        ,
        e.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.continuedPostUI.hide()
        }
        ,
        e.prototype.pause = function() {
            var e;
            this.state === Si.PLAYING && (t.prototype.pause.call(this),
            this.hide(),
            null === (e = this.countdown) || void 0 === e || e.pause())
        }
        ,
        e.prototype.resume = function() {
            var e;
            this.state === Si.PAUSED && (t.prototype.resume.call(this),
            this.show(),
            null === (e = this.countdown) || void 0 === e || e.start())
        }
        ,
        e.prototype.stop = function(e) {
            this.state !== Si.END && (this.hide(),
            t.prototype.stop.call(this, e),
            this.destroy())
        }
        ,
        e.prototype.destroy = function() {
            var e;
            null === (e = this.countdown) || void 0 === e || e.clear(),
            this.unbindEvent(),
            this.continuedPostUI.destroy(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.resize = function(t) {
            t.width && t.width < 600 ? this.pause() : this.canShow() && this.resume()
        }
        ,
        e.prototype.setAdSmallWindow = function(t) {
            t.isSmallWindow ? this.pause() : this.canShow() && this.resume()
        }
        ,
        e.prototype.adjustUI = function(t) {
            if (this.logger.log("调用 adjustUI: ".concat(At(t))),
            null == t ? void 0 : t.bottom) {
                var e = "".concat(t.bottom || 10, "px");
                this.continuedPostUI.setContainerBottom(e)
            }
        }
        ,
        e.prototype.updateUI = function(t) {
            var e, o, i, r, n, a, s;
            this.logger.log("updateUI: ".concat(t));
            var d = this.order.orders[t];
            if (d) {
                this.curIdx = t,
                this.adInfo = d;
                var l = null === (o = null === (e = d.data.order.ad_action) || void 0 === e ? void 0 : e.scan) || void 0 === o ? void 0 : o.short_link;
                if (l && (l = me(l, {
                    act: "1043"
                })),
                1 !== this.order.orders.length) {
                    var c = (null === (n = this.continuedPost) || void 0 === n ? void 0 : n.landing_page_type) === b.INTEGRATE ? this.continuedPost.qrcode : l;
                    this.continuedPostUI.updateUI({
                        name: d.data.poster.advertiser.name,
                        iconUrl: d.data.poster.advertiser.icon_url,
                        qrcodeTip: null === (s = null === (a = d.data.order.ad_action) || void 0 === a ? void 0 : a.scan) || void 0 === s ? void 0 : s.qrcode_tips,
                        qrcodeUrl: c
                    })
                } else
                    this.continuedPostUI.updateUI({
                        name: d.data.poster.advertiser.name,
                        iconUrl: d.data.poster.advertiser.icon_url,
                        qrcodeTip: null === (r = null === (i = d.data.order.ad_action) || void 0 === i ? void 0 : i.scan) || void 0 === r ? void 0 : r.qrcode_tips,
                        qrcodeUrl: l
                    })
            }
        }
        ,
        e.prototype.bindEvent = function() {
            this.continuedPostUI.on(yr.CLOSE_CLICK, this.handleClose),
            this.continuedPostUI.on(yr.CLICK, this.handleClick)
        }
        ,
        e.prototype.unbindEvent = function() {
            this.continuedPostUI.off(yr.CLOSE_CLICK, this.handleClose),
            this.continuedPostUI.off(yr.CLICK, this.handleClick)
        }
        ,
        e.prototype.canShow = function() {
            var t = !0;
            return this.adCore.ctrl.forEachAd((function(e) {
                (e.adType === p.CORNER && e.adInfo.isWholeScene || [p.CORNER, p.MID, p.PAUSE, p.HLS_MID].includes(e.adType) && e.data.isShow) && (t = !1)
            }
            )),
            t
        }
        ,
        e
    }(Hi)
      , br = function(t) {
        return function(e, o) {
            return new Cr({
                adCore: e,
                order: o,
                config: t
            })
        }
    };
    var Er, Ir, Tr = function(t, e) {
        return e.ad_scene === s.PRE ? function(t, e) {
            var o, i = {};
            return null === (o = e.ads) || void 0 === o || o.forEach((function(t) {
                t.ad_type === p.CONTINUED_POST && t.continued_ad && (i.extraData = [{
                    adType: p.CONTINUED_POST,
                    data: {
                        pre: D({}, t.continued_ad)
                    }
                }])
            }
            )),
            i
        }(0, e) : e.ad_scene === s.ANCHOR ? function(t, e) {
            var o, i = {};
            return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(t) {
                t.ad_type === p.CONTINUED_POST && t.continued_ad && (i.extraData = [{
                    adType: p.CONTINUED_POST,
                    data: {
                        mid: D({}, t.continued_ad)
                    }
                }])
            }
            )),
            i
        }(0, e) : e.ad_scene === s.DYNAMIC_MID ? function(t, e) {
            var o, i = {};
            return null === (o = e.ads) || void 0 === o || o.forEach((function(t) {
                t.ad_type === p.CONTINUED_POST && t.continued_ad && (i.extraData = [{
                    adType: p.CONTINUED_POST,
                    data: {
                        mid: D({}, t.continued_ad)
                    }
                }])
            }
            )),
            i
        }(0, e) : void 0
    }, wr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.canShow = !0,
            e.handleAdShow = function(t) {
                var o = t.adType;
                [p.PRE, p.MID].includes(o) && (e.canShow = !0,
                e.loadContinueAd(o)),
                o === p.CORNER && t.adInfo.isWholeScene || [p.CORNER, p.MID, p.PAUSE, p.HLS_MID].includes(o) && (e.canShow = !1,
                e.adCore.api.pauseAd(p.CONTINUED_POST))
            }
            ,
            e.handleAdHide = function(t) {
                var o = t.adType;
                o === p.CORNER && t.adInfo.isWholeScene || [p.CORNER, p.MID, p.PAUSE, p.HLS_MID].includes(o) && (e.canShow = !0,
                e.adCore.api.resumeAd(p.CONTINUED_POST))
            }
            ,
            e.handleVideoPlaying = function() {
                var t = e.adCore.ctrl.getRunningAds(p.CONTINUED_POST)[0];
                t && [Si.LOAD_READY, Si.PAUSED].includes(t.state) && t.play(e.canShow)
            }
            ,
            e.handleVideoPause = function() {
                e.adCore.api.pauseAd(p.CONTINUED_POST)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.event.on(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.on(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.handleVideoPlaying),
            this.adCore.outerEvent.on(fi.VIDEO_PAUSE, this.handleVideoPause)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.event.off(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.off(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.handleVideoPlaying),
            this.adCore.outerEvent.off(fi.VIDEO_PAUSE, this.handleVideoPause)
        }
        ,
        e.prototype.loadContinueAd = function(t) {
            var e = Ar(this.adCore, t);
            if (this.logger.log("continuePost: ".concat(At(e))),
            null == e ? void 0 : e.enable) {
                var o = this.adCore.order.getAdOrder(t)
                  , i = (null == o ? void 0 : o.orders.filter((function(t) {
                    return t.isScanActive
                }
                ))) || [];
                if (this.logger.log("scanOrder: ".concat(i.length)),
                i.length) {
                    var r = {
                        adType: p.CONTINUED_POST,
                        extraData: (null == o ? void 0 : o.extraData) || {},
                        empty: [],
                        orders: i,
                        config: {
                            fromAd: t
                        }
                    };
                    this.adCore.ctrl.loadAdOrder(r)
                }
            }
        }
        ,
        e
    }(qi), Lr = function(t) {
        return {
            adType: p.CONTINUED_POST,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: Tr,
            creator: br(t),
            watcher: function(t) {
                return new wr(t)
            }
        }
    }, Pr = function() {
        function t(t, e) {
            this.options = t,
            this.logger = e
        }
        return Object.defineProperty(t.prototype, "materialUrl", {
            get: function() {
                return this.loadedUrl
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "loadTime", {
            get: function() {
                return this.loadEndTime && this.loadStartTime ? this.loadEndTime - this.loadStartTime : -1
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.load = function(t) {
            var e = this;
            if (this.loadedUrl)
                return Promise.resolve(this.loadedUrl);
            this.loadStartTime = Date.now();
            var o = this.options.url
              , i = new XMLHttpRequest
              , r = o.replace("http://", "https://");
            return i.open("GET", r, !0),
            i.responseType = "arraybuffer",
            i.timeout = 6e4,
            i.send(),
            new Promise((function(o, r) {
                i.onload = function() {
                    if (e.logger.log("请求素材文件成功"),
                    200 === i.status) {
                        e.logger.log("回包正确");
                        var n = new Uint8Array(i.response)
                          , a = window.URL.createObjectURL(new Blob([n],t));
                        e.logger.log("生成blob成功"),
                        e.loadedUrl = a,
                        e.loadEndTime = Date.now(),
                        o(a)
                    } else
                        r()
                }
                ,
                i.onerror = function(t) {
                    e.logger.error("请求素材文件失败: ".concat(At(t))),
                    e.loadEndTime = Date.now(),
                    r("error")
                }
                ,
                i.ontimeout = function() {
                    e.logger.error("请求素材文件超时"),
                    e.loadEndTime = Date.now(),
                    r("timeout")
                }
            }
            ))
        }
        ,
        t
    }(), Dr = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.load = function() {
            return t.prototype.load.call(this, {
                type: "video/mp4"
            })
        }
        ,
        e.prototype.destroy = function() {
            this.loadedUrl && (this.loadedUrl = void 0)
        }
        ,
        e
    }(Pr), Nr = function() {
        function t(t, e) {
            void 0 === e && (e = 20);
            var o = this;
            this.state = {
                isRunning: !1,
                runningTime: 0,
                startTime: 0
            },
            this.requestAnimationFrameId = null,
            this.timeupdate = function() {
                if (o.state.isRunning) {
                    var t = Date.now()
                      , e = o.state.startTime
                      , i = t - o.state.startTime;
                    i > o.interval && (o.state.startTime = t - i % o.interval,
                    o.state.runningTime = Math.floor(o.state.runningTime + (o.state.startTime - e)),
                    o.callback(o.state.runningTime)),
                    o.requestAnimationFrameId = window.requestAnimationFrame(o.timeupdate)
                }
            }
            ,
            this.fps = e,
            this.interval = 1e3 / e,
            this.callback = t
        }
        return Object.defineProperty(t.prototype, "isRunning", {
            get: function() {
                return this.state.isRunning
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentTime", {
            get: function() {
                return this.state.runningTime
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.seek = function(t) {
            this.state.runningTime = t
        }
        ,
        t.prototype.start = function() {
            this.state.isRunning || (this.state.isRunning = !0,
            this.state.startTime = Date.now(),
            this.callback(this.state.runningTime),
            this.timeupdate())
        }
        ,
        t.prototype.pause = function() {
            this.state.isRunning && (this.state.isRunning = !1,
            this.requestAnimationFrameId && window.cancelAnimationFrame(this.requestAnimationFrameId),
            this.state.startTime = 0)
        }
        ,
        t.prototype.stop = function() {
            this.pause(),
            this.state.runningTime = 0
        }
        ,
        t
    }();
    !function(t) {
        t.CACHE = "cache",
        t.VIDEO = "video"
    }(Er || (Er = {})),
    function(t) {
        t.CANPLAY = "tp-canplay",
        t.LOADED = "tp-loaded",
        t.PLAY = "tp-play",
        t.PAUSE = "tp-pause",
        t.ENDED = "tp-ended",
        t.ERROR = "tp-error",
        t.TIMEUPDATE = "tp-timeupdate"
    }(Ir || (Ir = {}));
    var Or = {
        autoplay: !0,
        loop: !1,
        useCache: !1,
        fps: 20,
        width: 0,
        height: 0
    }
      , Sr = function() {
        function t(t) {
            var e = this;
            this.eventEmitter = new jt,
            this.replayTimer = null,
            this.videoSize = {
                width: 0,
                height: 0
            },
            this.displayOffset = {
                scale: 1,
                width: 0,
                height: 0
            },
            this.unbindVideoEvent = function() {
                e.$domNodes.video && (e.$domNodes.video.removeEventListener("canplaythrough", e.handleVideoCanplay),
                e.$domNodes.video.removeEventListener("playing", e.handleVideoPlaying),
                e.$domNodes.video.removeEventListener("play", e.handleVideoPlay),
                e.$domNodes.video.removeEventListener("pause", e.handleVideoPause),
                e.$domNodes.video.removeEventListener("ended", e.handleVideoEnded),
                e.$domNodes.video.removeEventListener("error", e.handleVideoError),
                e.$domNodes.video.removeEventListener("progress", e.handleVideoProgress))
            }
            ,
            this.bindCacheVideoEvent = function() {
                e.$domNodes.cacheVideo && e.$domNodes.cacheVideo.addEventListener("canplaythrough", e.handleCacheVideoCanplay)
            }
            ,
            this.unbindCacheVideoEvent = function() {
                e.$domNodes.cacheVideo && e.$domNodes.cacheVideo.removeEventListener("canplaythrough", e.handleCacheVideoCanplay)
            }
            ,
            this.handleVideoCanplay = function() {
                e.emit(Ir.CANPLAY, {
                    playType: Er.VIDEO,
                    currentTime: e.fpsTimer.currentTime
                })
            }
            ,
            this.handleVideoPlay = function() {
                e.emit(Ir.PLAY, {
                    playType: Er.VIDEO,
                    currentTime: e.fpsTimer.currentTime
                })
            }
            ,
            this.handleVideoPlaying = function() {
                var t = e.$domNodes.video;
                t && (e.updateBufferVideoUI(t),
                e.fpsTimer.start())
            }
            ,
            this.handleVideoPause = function() {
                e.$domNodes.video && (e.fpsTimer.pause(),
                e.emit(Ir.PAUSE, {
                    playType: Er.VIDEO,
                    currentTime: Math.floor(1e3 * e.$domNodes.video.currentTime)
                }))
            }
            ,
            this.handleVideoEnded = function() {
                if (e.$domNodes.video) {
                    var t = e.$domNodes.video.currentTime;
                    e.$domNodes.video.currentTime = 0,
                    e.doEnded(t)
                }
            }
            ,
            this.handleVideoError = function(t) {
                e.emit(Ir.ERROR, {
                    playType: Er.VIDEO,
                    currentTime: 0,
                    msg: t.message
                }),
                e.destroy()
            }
            ,
            this.handleVideoProgress = function(t) {
                if (!e.isVideoLoaded) {
                    for (var o = t.target, i = o.duration, r = o.buffered, n = 0, a = 0; n < r.length; )
                        a += r.end(n) - r.start(n),
                        n += 1;
                    a / i > .99 && (e.isVideoLoaded = !0,
                    e.emit(Ir.LOADED, {
                        playType: Er.VIDEO,
                        currentTime: 1e3 * o.currentTime
                    }))
                }
            }
            ,
            this.handleCacheEnded = function() {
                e.cacheData && (e.cacheData.isCached = !0,
                e.destroyCacheVideo())
            }
            ,
            this.handleCacheVideoCanplay = function() {
                var t = e.$domNodes.cacheVideo;
                if (t && e.cacheData && e.bufferContext) {
                    e.updateBufferVideoUI(t);
                    var o = e.cacheData.currentIndex;
                    e.cacheData.currentIndex += 1;
                    var i = e.getFrameImageData(t, e.bufferContext);
                    e.cacheData.imageDataList[o] = i;
                    var r = 1e3 * t.duration;
                    e.cacheData.currentTime += e.cacheData.fpsInterval,
                    e.cacheData.currentTime = Math.min(e.cacheData.currentTime, r),
                    e.cacheData.currentTime >= r ? e.handleCacheEnded() : t.currentTime = e.cacheData.currentTime / 1e3
                }
            }
            ,
            this.handleTimeUpdate = function(t) {
                var o;
                if (e.fpsTimer.isRunning)
                    if (null === (o = e.cacheData) || void 0 === o ? void 0 : o.isRunning) {
                        var i = e.getCacheDataIndex(t);
                        if (i > e.cacheData.imageDataList.length)
                            return void e.doEnded(t / 1e3);
                        var r = e.cacheData.imageDataList[i];
                        e.drawDisplayFrame(r),
                        e.emit(Ir.TIMEUPDATE, {
                            playType: Er.CACHE,
                            currentTime: t
                        })
                    } else {
                        var n = e.$domNodes.video;
                        if (!n || !e.bufferContext)
                            return;
                        r = e.getFrameImageData(n, e.bufferContext);
                        e.drawDisplayFrame(r),
                        e.emit(Ir.TIMEUPDATE, {
                            playType: Er.VIDEO,
                            currentTime: 1e3 * n.currentTime
                        })
                    }
            }
            ,
            this.options = D(D({}, Or), t),
            this.$domNodes = this.createUI(),
            this.bufferContext = this.$domNodes.bufferCanvas.getContext("2d"),
            this.displayContext = this.$domNodes.displayCanvas.getContext("2d"),
            this.fpsTimer = new Nr(this.handleTimeUpdate,this.options.fps),
            this.bindVideoEvent(),
            this.options.useCache && this.runCache()
        }
        return Object.defineProperty(t.prototype, "logger", {
            get: function() {
                return this.options.logger
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "playtime", {
            get: function() {
                var t;
                if (null === (t = this.cacheData) || void 0 === t ? void 0 : t.isRunning)
                    return this.fpsTimer.currentTime;
                var e = this.$domNodes.video;
                return e ? 1e3 * e.currentTime : -1
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.on = function(t, e) {
            this.eventEmitter.on(t, e)
        }
        ,
        t.prototype.off = function(t, e) {
            this.eventEmitter.off(t, e)
        }
        ,
        t.prototype.play = function() {
            this.fpsTimer.isRunning || this.startPlay()
        }
        ,
        t.prototype.pause = function() {
            var t, e;
            this.fpsTimer.isRunning && ((null === (t = this.cacheData) || void 0 === t ? void 0 : t.isRunning) ? this.fpsTimer.pause() : null === (e = this.$domNodes.video) || void 0 === e || e.pause())
        }
        ,
        t.prototype.seek = function(t) {
            this.fpsTimer.seek(1e3 * t),
            this.$domNodes.video && (this.$domNodes.video.currentTime = t)
        }
        ,
        t.prototype.stop = function() {
            var t;
            this.fpsTimer.stop(),
            !(null === (t = this.cacheData) || void 0 === t ? void 0 : t.isRunning) && this.$domNodes.video && (this.$domNodes.video.currentTime = 0,
            this.$domNodes.video.pause()),
            this.displayContext.clearRect(0, 0, this.videoSize.width / 2, this.videoSize.height)
        }
        ,
        t.prototype.resize = function(t, e) {
            this.options.width = t,
            this.options.height = e;
            var o = this.displayContext.getImageData(this.displayOffset.width, this.displayOffset.height, Math.floor(this.videoSize.width / 2), this.videoSize.height);
            this.updateDisplayUI(),
            this.drawDisplayFrame(o)
        }
        ,
        t.prototype.destroy = function() {
            this.stop(),
            this.replayTimer && clearTimeout(this.replayTimer),
            this.destroyVideo(),
            this.destroyCacheVideo(),
            this.destroyBufferCanvas()
        }
        ,
        t.prototype.createVideo = function(t) {
            var e = document.createElement("video");
            return e.autoplay = t,
            e.controls = !1,
            e.crossOrigin = "*",
            e.playsInline = !0,
            e.style.cssText = Mt({
                position: "absolute",
                backgroundColor: "rgb(255, 255, 255)",
                zIndex: "-1",
                visibility: "hidden"
            }),
            e.muted = !0,
            e.src = this.options.url,
            e
        }
        ,
        t.prototype.createUI = function() {
            var t = document.createDocumentFragment()
              , e = this.createVideo(!!this.options.autoplay);
            t.appendChild(e);
            var o = document.createElement("canvas")
              , i = document.createElement("canvas");
            t.appendChild(i);
            var r, n = this.options.container;
            return (r = "string" == typeof n ? document.querySelector(n) : n).style.overflow = "hidden",
            r.appendChild(t),
            {
                container: r,
                video: e,
                bufferCanvas: o,
                displayCanvas: i
            }
        }
        ,
        t.prototype.destroyVideo = function() {
            var t, e = this.$domNodes.video;
            e && (this.unbindVideoEvent(),
            e.removeAttribute("src"),
            null === (t = e.parentNode) || void 0 === t || t.removeChild(e),
            this.$domNodes.video = void 0,
            this.destroyBufferCanvas())
        }
        ,
        t.prototype.destroyCacheVideo = function() {
            var t, e = this.$domNodes.cacheVideo;
            e && (this.unbindCacheVideoEvent(),
            e.removeAttribute("src"),
            null === (t = e.parentNode) || void 0 === t || t.removeChild(e),
            this.$domNodes.cacheVideo = void 0,
            this.destroyBufferCanvas())
        }
        ,
        t.prototype.destroyBufferCanvas = function() {
            this.$domNodes.video || this.$domNodes.cacheVideo || (this.$domNodes.bufferCanvas = void 0,
            this.bufferContext = void 0)
        }
        ,
        t.prototype.updateBufferVideoUI = function(t) {
            if (!this.videoSize.width) {
                this.videoSize = {
                    width: Math.floor(t.videoWidth),
                    height: Math.floor(t.videoHeight)
                };
                var e = this.$domNodes.bufferCanvas;
                e && (e.width = this.videoSize.width,
                e.height = this.videoSize.height),
                this.updateDisplayUI()
            }
        }
        ,
        t.prototype.updateDisplayUI = function() {
            var t = {
                width: Math.floor(this.videoSize.width / 2),
                height: this.videoSize.height
            }
              , e = t.width / t.height
              , o = this.options.width || this.options.height * e || t.width
              , i = o / Math.floor(this.options.height || this.options.width / e || t.height)
              , r = {
                width: t.width,
                height: t.height
            };
            e > i ? r.height = Math.floor(r.width / i) : r.width = r.height * i;
            var n = this.$domNodes.displayCanvas;
            n.setAttribute("width", "".concat(r.width)),
            n.setAttribute("height", "".concat(r.height));
            var a = {
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "".concat(r.width, "px"),
                height: "".concat(r.height, "px"),
                display: "block",
                "transform-origin": "0 100%"
            };
            n.style.cssText = Mt(a),
            this.displayOffset = {
                scale: o / r.width,
                width: Math.floor((r.width - t.width) / 2),
                height: Math.floor((r.height - t.height) / 2)
            }
        }
        ,
        t.prototype.bindVideoEvent = function() {
            this.$domNodes.video && (this.$domNodes.video.addEventListener("canplaythrough", this.handleVideoCanplay),
            this.$domNodes.video.addEventListener("playing", this.handleVideoPlaying),
            this.$domNodes.video.addEventListener("play", this.handleVideoPlay),
            this.$domNodes.video.addEventListener("pause", this.handleVideoPause),
            this.$domNodes.video.addEventListener("ended", this.handleVideoEnded),
            this.$domNodes.video.addEventListener("error", this.handleVideoError),
            this.$domNodes.video.addEventListener("progress", this.handleVideoProgress))
        }
        ,
        t.prototype.startPlay = function() {
            var t, e;
            if (null === (t = this.cacheData) || void 0 === t ? void 0 : t.isCached)
                return this.cacheData.isRunning = !0,
                this.emit(Ir.PLAY, {
                    playType: Er.CACHE,
                    currentTime: this.fpsTimer.currentTime
                }),
                this.fpsTimer.start(),
                void this.destroyVideo();
            null === (e = this.$domNodes.video) || void 0 === e || e.play()
        }
        ,
        t.prototype.doEnded = function(t) {
            var e;
            this.fpsTimer.stop(),
            this.options.loop ? this.replay() : this.stop(),
            this.emit(Ir.ENDED, {
                playType: (null === (e = this.cacheData) || void 0 === e ? void 0 : e.isRunning) ? Er.CACHE : Er.VIDEO,
                currentTime: t
            })
        }
        ,
        t.prototype.replay = function() {
            var t = this;
            this.options.loopInterval ? (this.stop(),
            this.replayTimer = window.setTimeout((function() {
                t.startPlay(),
                t.replayTimer = null
            }
            ), Number(this.options.loopInterval))) : this.startPlay()
        }
        ,
        t.prototype.drawDisplayFrame = function(t) {
            t && this.displayContext.putImageData(t, this.displayOffset.width, this.displayOffset.height),
            this.$domNodes.displayCanvas.style.transform = "scale(".concat(this.displayOffset.scale, ")")
        }
        ,
        t.prototype.emit = function(t, e) {
            this.eventEmitter.emit(t, e)
        }
        ,
        t.prototype.getFrameImageData = function(t, e) {
            var o;
            try {
                var i = this.videoSize
                  , r = i.width
                  , n = i.height;
                e.drawImage(t, 0, 0, r, n);
                for (var a = e.getImageData(r / 2, 0, r / 2, n), s = e.getImageData(0, 0, r / 2, n), d = s.data.length / 4, l = 0; l < d; l++)
                    s.data[4 * l + 3] = a.data[4 * l + 1];
                return s
            } catch (e) {
                this.emit(Ir.ERROR, {
                    playType: (null === (o = this.cacheData) || void 0 === o ? void 0 : o.isRunning) ? Er.CACHE : Er.VIDEO,
                    currentTime: t.currentTime,
                    msg: String(e) || "合成透明帧失败"
                })
            }
        }
        ,
        t.prototype.runCache = function() {
            if (this.cacheData = {
                currentTime: 0,
                fpsInterval: Math.floor(1e3 / this.options.fps),
                imageDataList: [],
                isCached: !1,
                isRunning: !1,
                currentIndex: 0
            },
            !this.$domNodes.cacheVideo) {
                var t = this.createVideo(!1);
                this.$domNodes.container.appendChild(t),
                this.$domNodes.cacheVideo = t,
                t.currentTime = .001,
                this.bindCacheVideoEvent()
            }
        }
        ,
        t.prototype.getCacheDataIndex = function(t) {
            return this.cacheData ? Math.floor(t / this.cacheData.fpsInterval) : 0
        }
        ,
        t
    }()
      , Rr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.firstStartTime = -1,
            e
        }
        return i(e, t),
        e
    }(zi);
    Xi(".close-icon-circle{stroke-dasharray:114,114;stroke-dashoffset:114}.mod_player_float ._txp_ad_psj{display:none}.flow-close{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flow-close,.flow-close-icon-area{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:48px}.flow-close-icon-area{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:48px}.flow-close-icon-area svg{height:36px;width:36px}.flow-flag-text{color:#fff;font-size:20px;font-weight:500;text-shadow:0 2px 4px rgba(0,0,0,.5)}.flow-flag-text-area{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:48px;justify-content:center;width:52px}");
    var kr = er("corner")
      , Mr = {
        layer: kr("layer"),
        container: kr("container")
    }
      , Vr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = Mr,
            e.cornerMap = new Map,
            e
        }
        return i(e, t),
        e.prototype.setContainerVisible = function(t) {
            this.setDomVisible(this.$domNodes.container, t)
        }
        ,
        e.prototype.destroyCorner = function(t) {
            var e = this.cornerMap.get(t);
            this.$domNodes.container && e && (this.$domNodes.container.removeChild(e.container),
            this.cornerMap.delete(t))
        }
        ,
        e.prototype.renderCorner = function(t) {
            var e = this;
            if (this.$domNodes.container && !this.cornerMap.has(t)) {
                var o = {
                    container: t,
                    close: "".concat(t, "-close"),
                    closeArea: "".concat(t, "-close-area"),
                    player: "".concat(t, "-player"),
                    closeRate: "".concat(t, "-close-rate"),
                    hotArea: "".concat(t, "-hot-area"),
                    hotFlag: "".concat(t, "-hot-flag")
                }
                  , i = '\n      <div data-role="'.concat(o.container, '" style="position: absolute;" class="txp_none">\n        <div data-role="').concat(o.hotArea, '" class="yaliu-hot-area txp_none" style="position:absolute;pointer-events:auto;cursor:pointer;z-index:2;display: block;" ></div>\n        <div data-role="').concat(o.close, '" class="flow-close " style="position:absolute;z-index:2;" title="关闭该广告">\n          <div class="flow-flag-text-area" data-role="').concat(o.hotFlag, '">\n            <span class="flow-flag-text">广告</span>\n          </div>\n          <div data-role="').concat(o.closeArea, '" class="flow-close-icon-area txp_none" style="pointer-events:auto;cursor:pointer;">\n          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="19.5" cy="19.6738" r="18" fill="#161622" fill-opacity="0.85" style="fill:#161622;fill-opacity:0.85;"/>\n            <rect x="11.4844" y="13.7676" width="2.98438" height="19.6875" rx="1.49219" transform="rotate(-45 11.4844 13.7676)" fill="white" style="fill:white;fill-opacity:1;"/>\n            <rect x="13.5938" y="27.6895" width="2.98438" height="19.6875" rx="1.49219" transform="rotate(-135 13.5938 27.6895)" fill="white" style="fill:white;fill-opacity:1;"/>\n            <circle data-role="').concat(o.closeRate, '" class="close-icon-circle" cx="19.5" cy="19.6738" r="18" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="2" stroke-linecap="round" fill="none"/>\n          </svg>\n          </div>\n        </div>\n        <div data-role="').concat(o.player, '" />\n      </div>\n    ')
                  , r = document.createElement("div");
                r.innerHTML = i,
                this.$domNodes.container.appendChild(r.children[0]);
                var n = {};
                Object.keys(o).forEach((function(t) {
                    n[t] = e.$domNodes.container.querySelector('[data-role="'.concat(o[t], '"]'))
                }
                )),
                this.cornerMap.set(t, n)
            }
        }
        ,
        e.prototype.getCornerDomNodes = function(t) {
            return this.cornerMap.get(t)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <txpdiv data-role="'.concat(this.roleMap.container, '" class="txp_ad _txp_ad_psj" style="position: absolute; z-index: 3;">\n      </txpdiv>\n    ')
        }
        ,
        e
    }(sr)
      , Ur = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.handleCloseBtnClick = function(t) {
                var e, i, r;
                o.logger.log("角标用户点击关闭"),
                t.stopPropagation(),
                o.data.closeBtnClicked = !0,
                o.adCore.vr.reportEvent(ni.IMP_END, D(D({}, o.adInfo.getVrReportData()), {
                    eid: "whole_playbox_ad",
                    ad_type: o.adType,
                    progress_bar_time: Math.floor(1e3 * o.adCore.config.outerPlayerData.playtime)
                })),
                Xt(M.FEEDBACK, null === (e = o.adInfo) || void 0 === e ? void 0 : e.frequencyControlConfig),
                null === (r = null === (i = o.adInfo.pointFrequencyControlInfo) || void 0 === i ? void 0 : i.frequencyTriggerList) || void 0 === r || r.forEach((function(t) {
                    t.frequencyKey && t.triggerType === M.FEEDBACK && o.adCore.pointFrequencyControl.appendKey(t.frequencyKey)
                }
                )),
                o.adCore.order.feedbackConnerOrder(o.order),
                o.stop({
                    reason: "用户点击关闭"
                })
            }
            ,
            o.handleAdClick = function() {
                o.doClickAction(o.adInfo, {
                    adActType: ji.AD_VIEW_AREA,
                    playtime: o.data.showTime ? Date.now() - o.data.showTime : -1
                })
            }
            ,
            o.handleCloseRatePercentTimeupdate = function(t) {
                if (!o.adInfo.isWholeScene) {
                    var e = o.cornerUI.getCornerDomNodes(o.cornerAdId);
                    if (null == e ? void 0 : e.closeRate) {
                        var i = 1e3 * o.adInfo.material.duration
                          , r = Math.min(t / i, 1);
                        e.closeRate.style.strokeDashoffset = "".concat(114 - 114 * r)
                    }
                }
            }
            ,
            o.handleTransparentPlayerCanPlay = function() {
                o.canplayHandler()
            }
            ,
            o.handleTransparentPlayerPlay = function() {
                o.show(),
                o.data.hasReportView || (o.data.hasReportView = !0,
                o.doExposure(o.adInfo),
                o.adInfo.reportVrAdExposure())
            }
            ,
            o.logger = o.adCore.logger.createLogger("CornerAd"),
            o.cornerUI = new Vr({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.cornerUI.init(),
            o.fpsTimer = new Nr(o.handleCloseRatePercentTimeupdate,20),
            o.init(),
            o
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "cornerAdId", {
            get: function() {
                return "corner-ad-".concat(this.adInfo.orderId)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "container", {
            get: function() {
                return this.cornerUI.container
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.load = function() {
            var e, o = this;
            if ((null === (e = this.adInfo) || void 0 === e ? void 0 : e.material) && this.adInfo.point) {
                var i = this.adInfo.material.url;
                i = this.adInfo.material.enable_crt_cached ? Ie(this.adInfo.material.vid, i, this.adInfo.adType) : i,
                this.videoMaterial = new Dr({
                    url: i
                },this.logger);
                var r = this.cornerUI.getCornerDomNodes(this.cornerAdId);
                this.videoMaterial.load().then((function(e) {
                    var i, n, a, s;
                    o.transparentPlayer = new Sr({
                        url: e,
                        width: o.containerSize.width,
                        height: o.containerSize.height,
                        container: r.player,
                        loop: !0,
                        useCache: o.adInfo.isWholeScene,
                        autoplay: !1,
                        fps: 20,
                        loopInterval: o.adInfo.data.poster.play.interval || 0
                    }),
                    o.bindTransparentPlayerEvent(),
                    o.loadCompleteHandle({
                        adType: o.adType,
                        adInfo: o.adInfo,
                        index: o.adInfo.orderIdx,
                        loadingTime: null === (i = o.videoMaterial) || void 0 === i ? void 0 : i.loadTime,
                        materialUrl: null === (n = o.adInfo.material) || void 0 === n ? void 0 : n.url,
                        materialVid: null === (a = o.adInfo.material) || void 0 === a ? void 0 : a.vid,
                        materialDuration: null === (s = o.adInfo.material) || void 0 === s ? void 0 : s.duration,
                        materialType: m.VIDEO,
                        adGroupId: o.adInfo.orderId
                    }),
                    t.prototype.load.call(o)
                }
                )).catch((function(t) {
                    var e, i, r, n;
                    o.loadCompleteHandle({
                        adType: o.adType,
                        adInfo: o.adInfo,
                        index: o.adInfo.orderIdx,
                        hasError: "1",
                        loadingTime: null === (e = o.videoMaterial) || void 0 === e ? void 0 : e.loadTime,
                        materialUrl: null === (i = o.adInfo.material) || void 0 === i ? void 0 : i.url,
                        materialVid: null === (r = o.adInfo.material) || void 0 === r ? void 0 : r.vid,
                        materialDuration: null === (n = o.adInfo.material) || void 0 === n ? void 0 : n.duration,
                        materialType: m.VIDEO,
                        adGroupId: o.adInfo.orderId
                    }),
                    o.stop({
                        reason: "素材加载失败"
                    })
                }
                ))
            } else
                this.stop({
                    reason: "物料或者点位不存在"
                })
        }
        ,
        e.prototype.play = function() {
            var e, o, i = this, r = this.adCore.config.outerPlayerData.playtime;
            this.adInfo.reporter.setVideoPlaytime(1e3 * r),
            this.data.firstStartTime < 0 && this.transparentPlayerSeek(),
            this.fpsTimer.seek(Math.floor(1e3 * r) - this.adInfo.point.begin),
            this.fpsTimer.start(),
            setTimeout((function() {
                i.fpsTimer.pause()
            }
            ), 0),
            this.state !== Si.PLAYING && this.state !== Si.PAUSED && (this.data.isForceHide || (t.prototype.play.call(this),
            (null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) ? null === (o = this.transparentPlayer) || void 0 === o || o.play() : this.stop({
                reason: "点位不存在"
            })))
        }
        ,
        e.prototype.pause = function() {
            var e;
            null === (e = this.transparentPlayer) || void 0 === e || e.pause(),
            this.fpsTimer.pause(),
            t.prototype.pause.call(this)
        }
        ,
        e.prototype.resume = function() {
            var e;
            null === (e = this.transparentPlayer) || void 0 === e || e.play(),
            t.prototype.resume.call(this)
        }
        ,
        e.prototype.show = function(e) {
            var o, i = this;
            if (e && (this.data.isForceHide = !0,
            this.transparentPlayerSeek(),
            null === (o = this.transparentPlayer) || void 0 === o || o.play(),
            this.adInfo.isWholeScene && setTimeout((function() {
                i.adCore.event.emit(Se.AD_MOVE_IN, {
                    adType: i.adType,
                    adInfo: i.adInfo
                })
            }
            ), 200)),
            !this.data.isShow) {
                var r = this.cornerUI.getCornerDomNodes(this.cornerAdId);
                r && Kt(r.container),
                this.setCloseVisible(!0),
                t.prototype.show.call(this),
                this.adCore.config.resetBarrageZindex()
            }
        }
        ,
        e.prototype.hide = function(e) {
            var o;
            if (e && (this.data.isForceHide = !0,
            null === (o = this.transparentPlayer) || void 0 === o || o.stop(),
            this.adInfo.isWholeScene && this.adCore.event.emit(Se.AD_MOVE_OUT, {
                adType: this.adType,
                adInfo: this.adInfo
            })),
            this.data.isShow) {
                var i = this.cornerUI.getCornerDomNodes(this.cornerAdId);
                i && $t(i.container),
                this.setCloseVisible(!1),
                t.prototype.hide.call(this),
                this.adCore.config.resetBarrageZindex()
            }
        }
        ,
        e.prototype.stop = function(e) {
            var o, i, r, n, a;
            if (this.state !== Si.END) {
                this.logger.log("角标 stop");
                var s = this.data.closeBtnClicked && !this.adInfo.isWholeScene && null !== (i = null === (o = this.transparentPlayer) || void 0 === o ? void 0 : o.playtime) && void 0 !== i ? i : -1;
                this.hide(),
                null === (r = this.transparentPlayer) || void 0 === r || r.stop(),
                t.prototype.stop.call(this, e),
                this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                    adType: this.adType,
                    adPlaytime: this.data.showTime && !this.adInfo.isWholeScene ? Date.now() - this.data.showTime : -1,
                    adDuration: null === (n = this.adInfo.material) || void 0 === n ? void 0 : n.duration,
                    firstView: null !== (a = this.data.showTime) && void 0 !== a ? a : -1,
                    userClose: !!this.data.closeBtnClicked,
                    closeTime: s,
                    reason: e.reason
                })),
                this.destroy()
            }
        }
        ,
        e.prototype.destroy = function() {
            var e, o;
            this.data.hasDestroy || (this.logger.log("角标销毁"),
            this.unbindEvent(),
            this.adCore.ctrl.getRunningAds(p.CORNER).length <= 1 && this.cornerUI.setContainerVisible(!1),
            this.fpsTimer.stop(),
            this.cornerUI.destroyCorner(this.cornerAdId),
            null === (e = this.transparentPlayer) || void 0 === e || e.destroy(),
            null === (o = this.videoMaterial) || void 0 === o || o.destroy(),
            this.cornerUI.destroy(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.resize = function(t) {
            var e;
            if (t && (this.setPlayerSize(),
            this.setFlowSize(),
            this.setCloseBtnSizeAndPosition(),
            null === (e = this.transparentPlayer) || void 0 === e || e.resize(this.containerSize.width, this.containerSize.height)),
            !this.data.isForceHide) {
                var o = this.cornerUI.getCornerDomNodes(this.cornerAdId);
                Kt(null == o ? void 0 : o.container)
            }
        }
        ,
        e.prototype.hideAdBeforeResize = function() {
            var t = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            t && $t(t.container)
        }
        ,
        e.prototype.initData = function() {
            return new Rr
        }
        ,
        e.prototype.init = function() {
            this.setPlayerSize(),
            this.cornerUI.setContainerVisible(!0),
            this.cornerUI.renderCorner(this.cornerAdId),
            this.updateAdFlag(),
            this.setFlowSize(),
            this.setCloseBtnSizeAndPosition(),
            this.bindEvent()
        }
        ,
        e.prototype.bindEvent = function() {
            var t = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            t && (this.logger.log("角标绑定关闭事件:".concat(!!t.closeArea)),
            t.closeArea.addEventListener("click", this.handleCloseBtnClick),
            this.adInfo.data.poster.click_hot_area ? t.hotArea.addEventListener("click", this.handleAdClick) : t.container.addEventListener("click", this.handleAdClick))
        }
        ,
        e.prototype.unbindEvent = function() {
            var t, e;
            null === (t = this.transparentPlayer) || void 0 === t || t.off(Ir.CANPLAY, this.handleTransparentPlayerCanPlay),
            null === (e = this.transparentPlayer) || void 0 === e || e.off(Ir.PLAY, this.handleTransparentPlayerPlay);
            var o = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            o && (this.logger.log("角标解绑关闭事件:".concat(!!o.closeArea)),
            o.closeArea.removeEventListener("click", this.handleCloseBtnClick),
            this.adInfo.data.poster.click_hot_area ? o.hotArea.removeEventListener("click", this.handleAdClick) : o.container.removeEventListener("click", this.handleAdClick))
        }
        ,
        e.prototype.setFlowSize = function() {
            var t, e = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            if (e) {
                var o = this.playerSize
                  , i = o.width
                  , r = o.height
                  , n = o.top
                  , a = o.left
                  , s = this.adInfo.data.poster.position
                  , d = !s.width && !s.height
                  , l = Math.ceil(i * Number(s.width))
                  , c = Math.ceil(r * Number(s.height))
                  , p = Number(s.width) / Number(s.height) * (i / r)
                  , u = this.adInfo.material.width / 2 / this.adInfo.material.height;
                1 !== Number(s.width) && (p > u || 1 === Number(s.height)) ? l = Math.ceil(c * u) : c = Math.ceil(l / u);
                var h = Math.floor(l) % 2 == 0 ? l : l + 1
                  , f = c
                  , v = i * Number(s.x_axis) + a
                  , m = r * Number(s.y_axis) + n
                  , y = r - f + n;
                m = Math.min(m, y);
                var g = {
                    position: "absolute",
                    left: "".concat(v, "px"),
                    top: "".concat(m, "px"),
                    width: "".concat(h, "px"),
                    height: "".concat(f, "px"),
                    cursor: "auto",
                    "pointer-events": "none"
                };
                if (d && (g.overflow = "hidden"),
                !this.adInfo.data.poster.click_hot_area && this.adInfo.clickable && (g.cursor = "pointer",
                g["pointer-events"] = "auto"),
                e.container.style.cssText = Mt(g),
                this.adInfo.data.poster.click_hot_area) {
                    var _ = null !== (t = this.adInfo.data.poster.click_hot_area) && void 0 !== t ? t : {}
                      , x = _.height_rate
                      , A = void 0 === x ? 0 : x
                      , C = _.margin_bottom_rate
                      , b = void 0 === C ? 0 : C
                      , E = _.margin_left_rate
                      , I = void 0 === E ? 0 : E
                      , T = _.margin_right_rate
                      , w = void 0 === T ? 0 : T
                      , L = {
                        position: "absolute",
                        left: "".concat(Math.round(h * I), "px"),
                        right: "".concat(Math.round(h * w), "px"),
                        bottom: "".concat(Math.round(f * b), "px"),
                        height: "".concat(Math.round(f * A), "px"),
                        display: "block",
                        "z-index": "1",
                        cursor: "auto",
                        "pointer-events": "none"
                    };
                    this.adInfo.clickable && (L.cursor = "pointer",
                    L["pointer-events"] = "auto"),
                    e.hotArea.style.cssText = Mt(L),
                    Kt(e.hotArea)
                }
                this.containerSize = {
                    width: h,
                    height: f,
                    top: m,
                    left: v
                },
                this.transparentPlayer && this.transparentPlayer.resize(h, f)
            }
        }
        ,
        e.prototype.setCloseBtnSizeAndPosition = function() {
            var t = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            if (null == t ? void 0 : t.close) {
                var e = this.adInfo.data.poster.close_button;
                if ((null == e ? void 0 : e.top) || (null == e ? void 0 : e.right) || (null == e ? void 0 : e.bottom) || (null == e ? void 0 : e.left)) {
                    var o = {
                        top: e.top ? "".concat(Number(e.top) * this.playerSize.height, "px") : "auto",
                        right: e.right ? "".concat(Number(e.right) * this.playerSize.width, "px") : "auto",
                        bottom: e.bottom ? "".concat(Number(e.bottom) * this.playerSize.height, "px") : "auto",
                        left: e.left ? "".concat(Number(e.left) * this.playerSize.width, "px") : "auto"
                    };
                    t.close.style.cssText += Mt(o)
                } else {
                    t.close.style.cssText += Mt({
                        top: "8px",
                        right: "8px",
                        bottom: "auto",
                        left: "auto"
                    })
                }
            }
        }
        ,
        e.prototype.setCloseVisible = function(t) {
            var e = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            if (null == e ? void 0 : e.closeArea)
                if (t) {
                    var o = this.adInfo.data.poster.close_button;
                    (null == o ? void 0 : o.is_show) ? Kt(e.closeArea) : $t(e.closeArea)
                } else
                    $t(e.closeArea)
        }
        ,
        e.prototype.updateAdFlag = function() {
            var t = this.cornerUI.getCornerDomNodes(this.cornerAdId);
            (null == t ? void 0 : t.hotFlag) && !this.adInfo.data.poster.show_ad_icon_type && $t(t.hotFlag)
        }
        ,
        e.prototype.setPlayerSize = function() {
            var t = this.adCore.config.getPlayerSize();
            this.playerSize = {
                width: t.playerWidth || t.playerOWidth,
                height: t.playerHeight || t.playerOHeight,
                left: 0,
                top: 0
            };
            var e = this.playerSize
              , o = e.width
              , i = e.height
              , r = t.playerOWidth || t.playerWidth
              , n = t.playerOHeight || t.playerHeight;
            if (o / i < r / n) {
                this.playerSize.left = 0;
                var a = o / r;
                this.playerSize.height = n * a,
                this.playerSize.top = (i - this.playerSize.height) / 2
            } else {
                this.playerSize.top = 0;
                a = i / n;
                this.playerSize.width = r * a,
                this.playerSize.left = (o - this.playerSize.width) / 2
            }
        }
        ,
        e.prototype.transparentPlayerSeek = function() {
            var t;
            if (!this.adInfo.isWholeScene) {
                var e = this.adCore.config.outerPlayerData.playtime - this.adInfo.point.begin / 1e3;
                this.data.firstStartTime = e,
                e > 0 && (null === (t = this.transparentPlayer) || void 0 === t || t.seek(e))
            }
        }
        ,
        e.prototype.bindTransparentPlayerEvent = function() {
            this.transparentPlayer.on(Ir.CANPLAY, this.handleTransparentPlayerCanPlay),
            this.transparentPlayer.on(Ir.PLAY, this.handleTransparentPlayerPlay)
        }
        ,
        e
    }(Hi)
      , Br = function(t) {
        return function(e, o) {
            return new Ur({
                adCore: e,
                order: o,
                config: t
            })
        }
    }
      , zr = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "material", {
            get: function() {
                return q(this.data.material)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isWholeScene", {
            get: function() {
                var t;
                return !!(null === (t = this.point) || void 0 === t ? void 0 : t.is_whole_scene)
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(Le)
      , Hr = function(t, e) {
        var o;
        if (e.ad_scene !== s.ANCHOR)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
            o.ad_type === p.CORNER && (o.point ? o.corner.forEach((function(i, n) {
                var a = De(o);
                r.push({
                    adType: o.ad_type,
                    extraData: Vi(e),
                    empty: Ne(t, e, o.empty),
                    orders: [new zr({
                        data: i,
                        orderIdx: n,
                        adCore: t,
                        auth: e.auth,
                        extraInfo: e.extra_info,
                        point: a
                    })],
                    point: a,
                    pointStatus: Bi.INIT
                })
            }
            )) : Oe(t, e, o.empty))
        }
        )),
        r.length > 0 && (i.pointAdData = r),
        i
    }
      , $r = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handleAdShow = function(t) {
                t.adInfo;
                e.isNeedCheckType(t.adType) && e.checkSceneShow()
            }
            ,
            e.handleAdHide = function(t) {
                var o = t.adInfo;
                !(null == o ? void 0 : o.isWholeScene) && e.isNeedCheckType(t.adType) && e.checkSceneShow()
            }
            ,
            e.handleAdPause = function() {
                e.adCore.api.pauseAd(p.CORNER)
            }
            ,
            e.handleAdResume = function() {
                e.adCore.api.resumeAd(p.CORNER)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            t.prototype.startWatch.call(this),
            this.adCore.event.on(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.on(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.on(fi.VIDEO_PAUSE, this.handleAdPause),
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.handleAdResume)
        }
        ,
        e.prototype.endWatch = function() {
            t.prototype.endWatch.call(this),
            this.adCore.event.off(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.off(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.off(fi.VIDEO_PAUSE, this.handleAdPause),
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.handleAdResume)
        }
        ,
        e.prototype.timeupdate = function(t) {
            var e = this;
            this.adCore.config.phlsConfig.isSoloPlayingPhls || this.adCore.order.getPoints(p.CORNER).forEach((function(o) {
                var i = o.type === y.TIMESTAMP ? Date.now() : t
                  , r = e.adCore.order.getPointOrderFromPoint(p.CORNER, o);
                r && 0 !== r.orders.length && r.pointStatus !== Bi.FREQUENCY && e.checkTime(r, i)
            }
            ))
        }
        ,
        e.prototype.checkTime = function(t, e) {
            var o = t.point;
            if (e >= o.begin - 6e3 && e < o.begin)
                this.handlePreLoad(t);
            else if (e >= o.begin && e <= o.end)
                this.handlePlaying(t, e);
            else if (t.pointStatus !== Bi.INIT) {
                t.pointStatus = Bi.INIT;
                var i = t.orders[0];
                this.adCore.api.stopAd(p.CORNER, i.orderId, "进度在点位区间以外")
            }
        }
        ,
        e.prototype.handlePreLoad = function(t) {
            if (t.pointStatus !== Bi.INIT) {
                if (t.pointStatus === Bi.PLAYING) {
                    t.pointStatus = Bi.INIT;
                    var e = t.orders[0];
                    this.adCore.api.stopAd(p.CORNER, e.orderId, "在预加载区间，结束正在运行的实例")
                }
            } else
                this.load(t)
        }
        ,
        e.prototype.handlePlaying = function(t, e) {
            if (e === t.point.begin && t.pointStatus === Bi.PLAYING) {
                t.pointStatus = Bi.INIT;
                var o = t.orders[0];
                this.adCore.api.stopAd(p.CORNER, o.orderId, "正在播放，直接 seek 到开始点位")
            }
            if (t.pointStatus !== Bi.INIT) {
                if ([Bi.LOADING, Bi.PLAYING].includes(t.pointStatus)) {
                    t.pointStatus = Bi.PLAYING;
                    o = t.orders[0];
                    this.adCore.api.playAd(p.CORNER, o.orderId)
                }
            } else
                this.load(t)
        }
        ,
        e.prototype.load = function(t) {
            var e, o, i = this, r = this.adCore.ctrl.getRunningAds(p.CORNER), n = t.orders[0];
            if (n.point.type !== y.TIMESTAMP || !r.some((function(t) {
                return !t.adInfo.isWholeScene
            }
            ))) {
                if (n.isWholeScene || r.forEach((function(t) {
                    t.adInfo.point.type === y.TIMESTAMP && t.stop({
                        reason: "展示非全程角标，导致时间贴结束"
                    })
                }
                )),
                null === (o = null === (e = n.pointFrequencyControlInfo) || void 0 === e ? void 0 : e.frequencyConditionList) || void 0 === o ? void 0 : o.some((function(t) {
                    return i.adCore.pointFrequencyControl.checkFrequency(t)
                }
                )))
                    return t.pointStatus = Bi.FREQUENCY,
                    this.logger.log("当前订单被负反馈频控拦截，不予展示"),
                    void this.adCore.vr.reportEvent(ni.CONNER_EXPOSURE_FAILED, D(D({}, n.getVrReportData()), {
                        eid: "whole_playbox_ad",
                        fail_reason: 1
                    }));
                t.pointStatus = Bi.LOADING,
                this.adCore.ctrl.loadAdOrder(t)
            }
        }
        ,
        e.prototype.isNeedCheckType = function(t) {
            return [p.PAUSE, p.CORNER, p.HLS_MID, p.MID].includes(t)
        }
        ,
        e.prototype.checkSceneShow = function() {
            var t = this.adCore.ctrl.getRunningAds(p.CORNER)
              , e = this.hasOtherShow();
            t.forEach((function(t) {
                t.adInfo.isWholeScene && (e && t.data.isShow ? t.hide(!0) : t.data.isShow || t.show(!0))
            }
            ))
        }
        ,
        e.prototype.hasOtherShow = function() {
            return !!this.adCore.ctrl.getSingleAds().some((function(t) {
                return t.data.isShow && ![p.PROGRESS_PREVIEW, p.VIDEO_RESOLUTION].includes(t.adType)
            }
            )) || this.adCore.ctrl.getMultipleAds().some((function(t) {
                var e = t[0]
                  , o = t[1];
                return [p.CORNER].includes(e) ? Array.from(o.values()).some((function(t) {
                    return t.data.isShow && !t.adInfo.isWholeScene
                }
                )) : Array.from(o.values()).some((function(t) {
                    return t.data.isShow
                }
                ))
            }
            ))
        }
        ,
        e
    }(Yi)
      , Kr = function(t) {
        return {
            adType: p.CORNER,
            isPointAd: !0,
            isMultiple: !0,
            getOrderData: Hr,
            creator: Br(t),
            watcher: function(t) {
                return new $r(t)
            }
        }
    }
      , Gr = er("hls-mid")
      , qr = {
        layer: Gr("layer"),
        clickHotArea: Gr("click-hot-area")
    }
      , Yr = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = qr,
            e.eventMap = new Map,
            e
        }
        return i(e, t),
        e.prototype.init = function() {
            t.prototype.init.call(this),
            this.$domNodes.layer && (this.$domNodes.layer.style.cssText += "position: absolute; width: 100%; height: 100%; pointer-events: auto; z-index: 3;")
        }
        ,
        e.prototype.onMaskClick = function(t, e) {
            var o = this.eventMap.get(t);
            o || (o = new Set),
            o.add(e),
            this.eventMap.set(t, o)
        }
        ,
        e.prototype.offMaskClick = function(t, e) {
            var o = this.eventMap.get(t);
            o && o.delete(e)
        }
        ,
        e.prototype.hideLayer = function() {
            $t(this.$domNodes.layer)
        }
        ,
        e.prototype.showJumpMaskOnly = function() {
            Bt(this.$domNodes.layer, {
                pointerEvents: "auto",
                cursor: "pointer"
            }),
            Kt(this.$domNodes.layer),
            $t(this.$domNodes.clickHotArea)
        }
        ,
        e.prototype.showHotArea = function() {
            Bt(this.$domNodes.layer, {
                pointerEvents: "none",
                cursor: "auto"
            }),
            Bt(this.$domNodes.clickHotArea, {
                pointerEvents: "auto",
                cursor: "pointer"
            }),
            Kt(this.$domNodes.layer),
            Kt(this.$domNodes.clickHotArea)
        }
        ,
        e.prototype.getDomEvents = function() {
            var t = this;
            return [{
                el: this.$domNodes.layer,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.target.dataset.role === t.roleMap.layer && t.eventMap.forEach((function(e) {
                        if (e.size > 0) {
                            var o = Array.from(e.values())[0];
                            null == o || o({
                                role: t.roleMap.layer
                            })
                        }
                    }
                    ))
                }
            }, {
                el: this.$domNodes.clickHotArea,
                eventName: Ji.CLICK,
                listener: function() {
                    t.eventMap.forEach((function(e) {
                        if (e.size > 0) {
                            var o = Array.from(e.values())[0];
                            null == o || o({
                                role: t.roleMap.clickHotArea
                            })
                        }
                    }
                    ))
                }
            }]
        }
        ,
        e.prototype.getTemplate = function() {
            return '<txpdiv data-role="'.concat(this.roleMap.clickHotArea, '" style="position: absolute; pointer-events: auto"></txpdiv>')
        }
        ,
        e
    }(sr)
      , Fr = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.handleClick = function(t) {
                o.adInfo.clickable && (o.adInfo.hasHotArea || t.role !== qr.layer || o.open(),
                o.adInfo.hasHotArea && t.role === qr.clickHotArea && o.open())
            }
            ,
            o.hlsMidUI = new Yr({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.hlsMidUI.init(),
            o.init(),
            o
        }
        return i(e, t),
        e.prototype.show = function() {
            this.data.isShow || (this.setJumpMaskVisible(!0),
            t.prototype.show.call(this))
        }
        ,
        e.prototype.hide = function() {
            this.data.isShow && (this.setJumpMaskVisible(!1),
            t.prototype.hide.call(this))
        }
        ,
        e.prototype.load = function() {
            var e;
            t.prototype.load.call(this),
            (null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) || this.stop({
                reason: "调用 load 时，点位不存在"
            })
        }
        ,
        e.prototype.play = function() {
            var e, o = this.adCore.config.outerPlayerData.playtime;
            this.adInfo.reporter.setVideoPlaytime(1e3 * o),
            this.state !== Si.PLAYING && this.state !== Si.PAUSED && ((null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) ? (t.prototype.play.call(this),
            this.show(),
            this.doExposure(this.adInfo),
            this.adInfo.reportVrAdExposure()) : this.stop({
                reason: "调用 play 时，点位不存在"
            }))
        }
        ,
        e.prototype.stop = function(e) {
            var o;
            this.state !== Si.END && (this.hide(),
            t.prototype.stop.call(this, e),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                adPlaytime: this.data.showTime ? Date.now() - this.data.showTime : -1,
                firstView: null !== (o = this.data.showTime) && void 0 !== o ? o : -1,
                reason: e.reason
            })),
            this.destroy())
        }
        ,
        e.prototype.destroy = function() {
            this.data.hasDestroy || (this.unbindUIEvent(),
            this.hlsMidUI.destroy(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.resize = function() {
            this.resizeHotArea()
        }
        ,
        e.prototype.init = function() {
            this.setJumpMaskVisible(!1),
            this.bindUIEvent()
        }
        ,
        e.prototype.bindUIEvent = function() {
            this.hlsMidUI.onMaskClick(this.adInfo.orderId, this.handleClick)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            this.hlsMidUI.offMaskClick(this.adInfo.orderId, this.handleClick)
        }
        ,
        e.prototype.open = function() {
            this.doClickAction(this.adInfo, {
                adActType: ji.AD_VIEW_AREA,
                playtime: this.data.showTime ? Date.now() - this.data.showTime : -1
            })
        }
        ,
        e.prototype.setJumpMaskVisible = function(t) {
            this.adInfo.clickable && t ? this.adInfo.hasHotArea ? (this.resizeHotArea(),
            this.hlsMidUI.showHotArea()) : this.hlsMidUI.showJumpMaskOnly() : this.hlsMidUI.hideLayer()
        }
        ,
        e.prototype.resizeHotArea = function() {
            if (this.adInfo.hasHotArea && this.adInfo.material) {
                var t, e, o, i, r = this.adInfo.material, n = r.width / r.height, a = this.adCore.config.getPlayerSize(), s = a.playerWidth, d = a.playerHeight, l = a.playerOWidth, c = a.playerOHeight, p = s || l, u = d || c;
                n > p / u ? (t = p,
                i = 0,
                o = (u - (e = p / n)) / 2) : (e = u,
                i = (p - (t = u * n)) / 2,
                o = 0);
                var h = this.adInfo.clickHotArea
                  , f = h.height_rate
                  , v = void 0 === f ? 0 : f
                  , m = h.margin_bottom_rate
                  , y = h.margin_left_rate
                  , g = h.margin_right_rate
                  , _ = {
                    position: "absolute",
                    left: "".concat(Math.round(t * y + i), "px"),
                    right: "".concat(Math.round(t * g + i), "px"),
                    bottom: "".concat(Math.round(e * m + o), "px"),
                    height: "".concat(Math.round(e * v), "px"),
                    cursor: "pointer",
                    "pointer-events": "auto"
                };
                this.hlsMidUI.$domNodes.clickHotArea && (this.hlsMidUI.$domNodes.clickHotArea.style.cssText = Mt(_))
            }
        }
        ,
        e
    }(Hi)
      , Wr = function(t) {
        return function(e, o) {
            return new Fr({
                adCore: e,
                order: o,
                config: t
            })
        }
    }
      , jr = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "clickable", {
            get: function() {
                var t;
                return (null === (t = this.data.order.ad_action) || void 0 === t ? void 0 : t.type) === u.CLICK
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "material", {
            get: function() {
                return q(this.data.material)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "hasHotArea", {
            get: function() {
                var t;
                return !!(null === (t = this.clickHotArea) || void 0 === t ? void 0 : t.height_rate)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "clickHotArea", {
            get: function() {
                var t;
                return null === (t = this.data.poster) || void 0 === t ? void 0 : t.click_hot_area
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(Le)
      , Qr = function(t, e) {
        var o;
        if (e.ad_scene !== s.ANCHOR)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
            if (o.ad_type === p.HLS_MID)
                if (o.point) {
                    var i = De(o);
                    r.push({
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: o.hls_mid.map((function(o, r) {
                            return new jr({
                                data: o,
                                orderIdx: r,
                                adCore: t,
                                auth: e.auth,
                                point: i
                            })
                        }
                        )),
                        point: i,
                        pointStatus: Bi.INIT
                    })
                } else
                    Oe(t, e, o.empty)
        }
        )),
        r.length > 0 && (i.pointAdData = r),
        i
    }
      , Zr = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.timeupdate = function(t) {
            var e = this
              , o = this.adCore.order.getPoints(p.HLS_MID)
              , i = this.adCore.config.phlsConfig
              , r = i.phlsPlayType
              , n = i.isSoloPlayingPhls
              , a = i.soloPlayPhlsTimeOffset
              , s = void 0 === a ? 0 : a;
            (r !== x.SOLO || n) && (n && s >= 0 && (t += s),
            o.forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(p.HLS_MID, o);
                i && 0 !== i.orders.length && e.checkTime(i, t)
            }
            )))
        }
        ,
        e.prototype.checkTime = function(t, e) {
            var o = this
              , i = t.point;
            e >= i.begin - 2e3 && e <= i.begin ? this.handlePreLoad(t) : e >= i.begin && e <= i.end ? this.handlePlaying(t) : t.pointStatus !== Bi.INIT && (t.pointStatus = Bi.INIT,
            t.orders.forEach((function(t) {
                o.adCore.api.stopAd(p.HLS_MID, t.orderId, "进度在点位区间以外")
            }
            )))
        }
        ,
        e.prototype.handlePreLoad = function(t) {
            var e = this;
            t.pointStatus !== Bi.INIT ? t.pointStatus === Bi.PLAYING && (t.pointStatus = Bi.INIT,
            t.orders.forEach((function(t) {
                e.adCore.api.stopAd(p.HLS_MID, t.orderId, "在预加载区间，结束正在运行的实例")
            }
            ))) : this.load(t)
        }
        ,
        e.prototype.handlePlaying = function(t) {
            var e = this;
            t.pointStatus !== Bi.INIT ? [Bi.LOADING, Bi.PLAYING].includes(t.pointStatus) && (t.pointStatus = Bi.PLAYING,
            t.orders.forEach((function(t) {
                e.adCore.api.playAd(p.HLS_MID, t.orderId)
            }
            ))) : this.load(t)
        }
        ,
        e.prototype.load = function(t) {
            var e = this;
            t.orders.forEach((function(o) {
                e.adCore.ctrl.loadAdOrder(D(D({}, t), {
                    orders: [o],
                    empty: []
                })),
                t.pointStatus = Bi.LOADING
            }
            ))
        }
        ,
        e
    }(Yi)
      , Xr = function(t) {
        return {
            adType: p.HLS_MID,
            isPointAd: !0,
            isMultiple: !0,
            getOrderData: Qr,
            creator: Wr(t),
            watcher: function(t) {
                return new Zr(t)
            }
        }
    }
      , Jr = 0
      , tn = Date.now()
      , en = function() {
        function t(t) {
            this.image = null,
            this.options = t
        }
        return Object.defineProperty(t.prototype, "loadTime", {
            get: function() {
                return this.loadEndTime && this.loadStartTime ? this.loadEndTime - this.loadStartTime : -1
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.load = function() {
            var t = this;
            if (this.image)
                return Promise.resolve(this.image);
            var e = this.options;
            return new Promise((function(o, i) {
                var r = new Image;
                r.id = "ad_player_image_material_".concat(tn, "_").concat(Jr),
                r.style.width = "100%",
                r.style.height = "100%",
                e.style && Object.entries(e.style).forEach((function(t) {
                    var e = t[0]
                      , o = t[1];
                    r.style[e] = o
                }
                )),
                r.onload = function() {
                    t.image = r,
                    Jr += 1,
                    t.loadEndTime = Date.now(),
                    o(t.image)
                }
                ,
                r.onerror = function(t) {
                    i(t)
                }
                ,
                t.loadStartTime = Date.now(),
                r.src = e.url
            }
            ))
        }
        ,
        t.prototype.destroy = function() {
            this.image && (this.image.src = "",
            this.image = null)
        }
        ,
        t
    }()
      , on = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.load = function() {
            var t = this;
            if (this.adInfo.isEmpty)
                return this.doExposure(this.adInfo),
                void this.stop({
                    reason: "空单结束"
                });
            this.loadMaterial().then((function() {
                t.loadMaterialSuccess()
            }
            )).catch((function(e) {
                t.loadMaterialFail()
            }
            ))
        }
        ,
        e.prototype.play = function() {
            t.prototype.play.call(this),
            this.show()
        }
        ,
        e.prototype.stop = function(e) {
            this.state !== Si.END && (this.hide(),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                reason: e.reason
            })),
            t.prototype.stop.call(this, e),
            this.destroy())
        }
        ,
        e.prototype.show = function() {
            this.data.isShow || (this.ui.setLayerVisible(!0),
            t.prototype.show.call(this))
        }
        ,
        e.prototype.hide = function() {
            this.data.isShow && (this.ui.setLayerVisible(!1),
            t.prototype.hide.call(this))
        }
        ,
        e.prototype.destroy = function() {
            var e;
            null === (e = this.imageMaterial) || void 0 === e || e.destroy(),
            this.ui.destroy(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.report = function() {
            this.doExposure(this.adInfo),
            this.adInfo.isEmpty || this.adInfo.reportVrAdExposure()
        }
        ,
        e.prototype.loadMaterialSuccess = function() {}
        ,
        e.prototype.loadMaterialFail = function() {
            var t;
            null === (t = this.imageMaterial) || void 0 === t || t.destroy(),
            this.stop({
                reason: "素材加载失败"
            })
        }
        ,
        e.prototype.loadMaterial = function() {
            return O(this, void 0, void 0, (function() {
                var t;
                return S(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        if (!(null === (t = this.adInfo.material) || void 0 === t ? void 0 : t.url))
                            return [2, Promise.reject("no url")];
                        this.imageMaterial = new en({
                            url: this.adInfo.material.url
                        }),
                        this.adCore.event.emit(Se.AD_LOAD_START, {
                            adType: this.order.adType,
                            adInfo: this.adInfo
                        }),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this.imageMaterial.load()];
                    case 2:
                        return e.sent(),
                        this.canplayHandler(),
                        this.loadCompleteHandle({
                            adType: this.adType,
                            adInfo: this.adInfo,
                            index: this.adInfo.orderIdx,
                            loadingTime: this.imageMaterial.loadTime,
                            materialUrl: this.adInfo.material.url,
                            materialType: m.IMAGE,
                            adGroupId: this.adInfo.orderId
                        }),
                        [3, 4];
                    case 3:
                        return e.sent(),
                        this.loadCompleteHandle({
                            adType: this.adType,
                            adInfo: this.adInfo,
                            index: this.adInfo.orderIdx,
                            hasError: "1",
                            loadingTime: this.imageMaterial.loadTime,
                            materialUrl: this.adInfo.material.url,
                            materialType: m.IMAGE,
                            adGroupId: this.adInfo.orderId,
                            error: {
                                message: "load failed"
                            }
                        }),
                        [2, Promise.reject("image load failed")];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(Hi);
    Xi(".txp_overlay_loading_ad{left:50%;margin-top:-144px;max-width:38%;position:absolute;top:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:200px}.txp_popup_definition .txp_menuitem_ad{border-bottom:1px solid hsla(0,0%,100%,.08);cursor:default!important;font-size:12px;height:30px;line-height:30px;margin-bottom:6px;padding:0 10px 6px}.txp_popup_definition .txp_definition_ad{margin-right:6px}.txp_popup_definition .txp_definition_ad_text{color:#fff;max-width:124px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.txp_tooltip_preview_ad{height:24px;left:0;position:absolute;top:-26px;white-space:nowrap;width:100%}.txp_tooltip_preview_ad .txp_ad_mark{bottom:2px;display:inline-block;left:0;position:relative;right:auto}.txp_tooltip_preview_ad .txp_ad_mark.txp_none{display:none}.simple-white-theme .txp_tooltip_preview{overflow:visible!important}.txp_ad_mark{bottom:0;color:#fff;font-size:12px;line-height:1;opacity:.8;position:absolute;right:2px;-webkit-transform:scale(.7);transform:scale(.7)}");
    var rn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.setLayerVisible = function(t) {
            this.setDomVisible(this.$domNodes.layer, t)
        }
        ,
        e
    }(sr)
      , nn = er("loading")
      , an = {
        layer: nn("layer"),
        img: nn("img"),
        adFlag: nn("flag")
    }
      , sn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = an,
            e
        }
        return i(e, t),
        e.prototype.update = function(t) {
            var e = t.url
              , o = t.hasAdFlag;
            this.$domNodes.img && (this.$domNodes.img.src = e),
            o ? Kt(this.$domNodes.adFlag) : $t(this.$domNodes.adFlag)
        }
        ,
        e.prototype.mount = function() {
            if (!this.$domNodes.layer) {
                var t = document.createElement("div");
                t.className = "txp_overlay_loading_ad txp_none",
                t.dataset.role = this.roleMap.layer,
                this.options.prependEle(t),
                this.$domNodes.layer = t
            }
            this.appendDom(this.$domNodes.layer)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <img data-role="'.concat(this.roleMap.img, '" width="200" class="txp_img" />\n      <txpdiv data-role="').concat(this.roleMap.adFlag, '" class="txp_ad_mark txp_none">广告</txpdiv>\n    ')
        }
        ,
        e
    }(rn)
      , dn = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.ui = new sn({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType),
                prependEle: o.config.prependEle
            }),
            o.ui.init(),
            o
        }
        return i(e, t),
        e.prototype.loadMaterialSuccess = function() {
            this.ui.update({
                url: this.adInfo.material.url,
                hasAdFlag: this.adInfo.hasFlag
            }),
            this.show(),
            this.doExposure(this.adInfo),
            this.adInfo.reportVrAdExposure()
        }
        ,
        e
    }(on)
      , ln = function(t) {
        return function(e, o) {
            return new dn({
                adCore: e,
                order: o,
                config: t
            })
        }
    }
      , cn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "material", {
            get: function() {
                return Y(this.data.material)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "hasFlag", {
            get: function() {
                var t;
                return null === (t = this.data.poster) || void 0 === t ? void 0 : t.ad_flag
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(Le);
    function pn(t, e, o) {
        return ce(o).map((function(o, i) {
            return new cn({
                data: o,
                orderIdx: i,
                adCore: t,
                auth: null == e ? void 0 : e.auth,
                extraInfo: null == e ? void 0 : e.extra_info
            })
        }
        ))
    }
    var un, hn = function(t, e) {
        var o;
        if (e.ad_scene !== s.PRE)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.ads) || void 0 === o || o.forEach((function(o) {
            o.ad_type === p.LOADING && r.push({
                adType: o.ad_type,
                extraData: Vi(e),
                empty: Ne(t, e, o.empty),
                orders: pn(t, e, o.loading)
            })
        }
        )),
        r.length > 0 && (i.adData = r),
        i
    }, fn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.loadLoadingAd = function(t) {
                var o = t.data;
                (null == o ? void 0 : o.value) && (e.adCore.ctrl.getRunningAds(p.LOADING).length && e.adCore.api.reportAd(p.LOADING))
            }
            ,
            e.handleAdOrderSet = function(t) {
                return O(e, void 0, void 0, (function() {
                    return S(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            if (t.adType !== p.LOADING)
                                return [3, 4];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            [4, this.adCore.api.loadAd(p.LOADING)];
                        case 2:
                            return e.sent(),
                            [3, 4];
                        case 3:
                            return e.sent(),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.outerEvent.on(fi.SET_LOADING, this.loadLoadingAd),
            this.adCore.event.on(Se.AD_ORDER_SET, this.handleAdOrderSet)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.outerEvent.off(fi.SET_LOADING, this.loadLoadingAd),
            this.adCore.event.off(Se.AD_ORDER_SET, this.handleAdOrderSet)
        }
        ,
        e
    }(qi), vn = function(t) {
        return {
            adType: p.LOADING,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: hn,
            creator: ln(t),
            watcher: function(t) {
                return new fn(t)
            }
        }
    }, mn = function(t) {
        function e(e) {
            var o = t.call(this) || this;
            return o.ad = e,
            o.duration = 0,
            o.showCountdown = 0,
            o.urlList = [],
            o.volume = 0,
            o.isMute = !1,
            o.isLoadComplete = !1,
            o.prevPlayTime = 0,
            o.hasReportVideoEnd = !1,
            o.hasAdPlayingEmit = !1,
            o.adIndex = 0,
            o.isFirstExposure = !0,
            o.countdownVisible = !0,
            o
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "isEmpty", {
            get: function() {
                return 0 === this.ad.order.orders.length
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentAdInfo", {
            get: function() {
                return this.ad.order.orders[this.adIndex]
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentVideoInfo", {
            get: function() {
                var t;
                return this.ad.getVideoInfoByOrderId(null === (t = this.currentAdInfo) || void 0 === t ? void 0 : t.orderId)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "videoInfoList", {
            get: function() {
                var t;
                return (null === (t = this.ad.playerService) || void 0 === t ? void 0 : t.postPlayer.adVideoInfoList) || []
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "firstLoadTime", {
            get: function() {
                return this.firstLoadingEndTime && this.firstLoadingStartTime ? Math.abs(this.firstLoadingEndTime - this.firstLoadingStartTime) : -1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isTrueView", {
            get: function() {
                var t, e, o;
                if (1 === this.ad.order.orders.length && (null === (e = null === (t = this.ad.adInfo) || void 0 === t ? void 0 : t.data.poster) || void 0 === e ? void 0 : e.skip)) {
                    var i = null === (o = this.ad.adInfo) || void 0 === o ? void 0 : o.data.poster.skip
                      , r = i.duration
                      , n = i.sub_title;
                    return r > 0 && !!n
                }
                return !1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "trueViewCountDown", {
            get: function() {
                return this.isTrueView ? this.currentAdInfo.data.poster.skip.duration / 1e3 : 0
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "skipAdTitle", {
            get: function() {
                var t, e, o, i;
                return null !== (i = null === (o = null === (e = null === (t = this.currentAdInfo) || void 0 === t ? void 0 : t.data.poster) || void 0 === e ? void 0 : e.skip) || void 0 === o ? void 0 : o.title) && void 0 !== i ? i : "关闭该广告"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "skipAdSubTitle", {
            get: function() {
                var t, e, o, i;
                return null !== (i = null === (o = null === (e = null === (t = this.currentAdInfo) || void 0 === t ? void 0 : t.data.poster) || void 0 === e ? void 0 : e.skip) || void 0 === o ? void 0 : o.sub_title) && void 0 !== i ? i : "关闭该广告"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "canClickToStopAd", {
            get: function() {
                return this.isTrueView
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "rfid", {
            get: function() {
                var t, e;
                return null !== (t = this.refresh_id) && void 0 !== t ? t : null === (e = this.ad.order.extraData.auth) || void 0 === e ? void 0 : e.refresh_id
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(zi), yn = function() {
        function t(t) {
            this.videoAdInterface = t,
            this.ready = Promise.resolve()
        }
        return Object.defineProperty(t.prototype, "logger", {
            get: function() {
                return this.adInterface.logger
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adCore", {
            get: function() {
                return this.videoAdInterface.adCore
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adInterface", {
            get: function() {
                return this.videoAdInterface
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "videoUI", {
            get: function() {
                return this.videoAdInterface.videoUI
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "videoCountdown", {
            get: function() {
                return this.videoAdInterface.videoCountdown
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "blockScreen", {
            get: function() {
                return this.videoAdInterface.blockScreen
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "playerService", {
            get: function() {
                return this.videoAdInterface.playerService
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adEndService", {
            get: function() {
                return this.videoAdInterface.adEndService
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "updateUIService", {
            get: function() {
                return this.videoAdInterface.updateUIService
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "videoUIEventService", {
            get: function() {
                return this.videoAdInterface.videoUIEventService
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }(), gn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.handleAdEnd = function(t) {
            var e = this;
            this.adInterface.state !== Si.END && (this.adInterface.setState(Si.END),
            this.logger.log("handleAdEnd: ".concat(At(t), "}")),
            this.blockScreen && !t.forceStop ? this.blockScreen.check((function() {
                e.doAdEnd(t)
            }
            )) : this.doAdEnd(t))
        }
        ,
        e.prototype.doAdEnd = function(t) {
            if (!this.adInterface.data.hasReportVideoEnd) {
                this.adInterface.data.hasReportVideoEnd = !0,
                this.videoCountdown.stopCountdown(),
                this.adInterface.hide();
                var e = this.getDurations();
                this.logger.log("处理结束: ".concat(At(e)));
                var o = e.adDurationList
                  , i = e.adViewTimeList
                  , r = e.adDurationsTotal
                  , n = e.adViewTimeTotal
                  , a = {
                    reason: t.reason,
                    errors: this.adInterface.data.videoInfoList.map((function(t) {
                        var e;
                        return !t.hasReportView && (null === (e = t.error) || void 0 === e ? void 0 : e.code)
                    }
                    )),
                    blockTime: this.adInterface.data.blockTime,
                    orderLen: this.adInterface.order.orders.length,
                    playLen: this.adInterface.data.videoInfoList.filter((function(t) {
                        return t.status === Ti.END
                    }
                    )).length,
                    adPlaytimeList: i,
                    adDurationList: o,
                    hasReportView: this.adInterface.data.videoInfoList.some((function(t) {
                        return t.hasReportView
                    }
                    )),
                    index: this.adInterface.data.adIndex
                };
                this.reportAdEndToVr(e, a, t),
                t.skipEmitAdEnd || this.adCore.event.emit(Se.AD_STOP, D({
                    adType: this.adInterface.order.adType,
                    adInfo: this.adInterface.data.currentAdInfo,
                    adOrder: this.adInterface.order,
                    rfid: this.adInterface.data.rfid,
                    isAllAdEnd: Math.abs(r - n) < 5e3
                }, a)),
                this.adInterface.destroy()
            }
        }
        ,
        e.prototype.reportAdEndToVr = function(t, e, o) {
            var i, r = t.adDurationList, n = t.adViewTimeList, a = t.adRealViewTimeTotal, s = t.adDurationsTotal;
            this.adCore.vr.reportEnded(D(D(D({}, Ui(this.adInterface.order.extraData)), {
                adType: this.adInterface.adType,
                startToEndTime: this.adInterface.data.showTime ? Date.now() - this.adInterface.data.showTime : -1,
                firstView: null !== (i = this.adInterface.data.showTime) && void 0 !== i ? i : -1,
                forceStop: !!o.forceStop,
                reason: o.reason,
                userClose: !!this.adInterface.data.userCloseOrderId,
                closeTime: this.adInterface.data.userCloseOrderId ? 1e3 * (this.adInterface.data.duration - this.videoCountdown.remainingCountdown) : -1,
                loadToViewTime: this.adInterface.data.isEmpty ? -1 : this.adInterface.data.firstLoadTime,
                adPlaytime: a,
                adPlaytimeList: n,
                adDurationList: r,
                adDuration: s,
                isTrueview: this.adInterface.data.isTrueView,
                isPreload: !!this.adInterface.order.isPreload
            }), e))
        }
        ,
        e.prototype.getDurations = function() {
            var t = this
              , e = this.adInterface.data.isEmpty ? [] : this.adInterface.order.orders.map((function(t) {
                return 1e3 * t.material.duration
            }
            ))
              , o = e.reduce((function(t, e) {
                return t + e
            }
            ), 0)
              , i = this.adInterface.data.isEmpty ? [] : this.adInterface.order.orders.map((function(e) {
                var o = t.adInterface.getVideoInfoByOrderId(e.orderId);
                return void 0 !== (null == o ? void 0 : o.playTime) ? 1e3 * o.playTime : 0
            }
            ))
              , r = i.reduce((function(t, e) {
                return t + e
            }
            ), 0);
            return {
                adDurationList: e,
                adDurationsTotal: o,
                adViewTimeList: i,
                adViewTimeTotal: r,
                adRealViewTimeTotal: this.adInterface.order.orders.reduce((function(e, o) {
                    var i = t.adInterface.getVideoInfoByOrderId(o.orderId);
                    return (null == i ? void 0 : i.viewTime) ? e + 1e3 * i.viewTime : (null == i ? void 0 : i.viewStartTime) ? e + (Date.now() - i.viewStartTime) : e
                }
                ), 0)
            }
        }
        ,
        e
    }(yn), _n = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.lsKey = "gp-cacdc",
            o.filmFirstPlay = !1,
            o.showing = !1,
            o.errorByADBlock = !1,
            o.isShow = !1,
            o.startCountdownID = null,
            o.handleFilmFirstPlayListener = function(t) {
                t.data.isFirst && !o.filmFirstPlay && (o.filmFirstPlay = !0,
                o.reset())
            }
            ,
            o.reset(),
            o.bindPlayerEvent(),
            o
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "$dom", {
            get: function() {
                return this.videoUI.$domNodes.videoBlackScreen
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.check = function(t) {
            return O(this, void 0, void 0, (function() {
                var e, o, i, r, n, a;
                return S(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, this.adCore.adblock.checkAdblock()];
                    case 1:
                        return e = s.sent(),
                        this.logger.log("是否使用 adblock: ".concat(e)),
                        e ? this.showing ? [2] : (o = null !== (a = null === (n = this.adInterface.data.videoInfoList) || void 0 === n ? void 0 : n.filter((function(t) {
                            return !t.viewTime || t.viewTime < 1
                        }
                        ))) && void 0 !== a ? a : [],
                        this.logger.log("被 adblock 拦截的广告: ".concat(At(o))),
                        i = o.length,
                        this.setLSValue(i),
                        0 === (r = this.getBlockTime(i)) ? (t(),
                        [2]) : (this.adInterface.data.blockTime = r,
                        this.startCountdown(t, r),
                        [2])) : (t(),
                        [2])
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getLSValue = function() {
            var t;
            try {
                if (window.localStorage)
                    return +(null !== (t = window.localStorage.getItem(this.lsKey)) && void 0 !== t ? t : 0)
            } catch (t) {
                return 0
            }
            return 0
        }
        ,
        e.prototype.setLSValue = function(t) {
            try {
                window.localStorage && window.localStorage.setItem(this.lsKey, "".concat(t))
            } catch (e) {
                this.logger.error("localStorage.setItem 出错: ".concat(At({
                    lsKey: this.lsKey,
                    value: t
                })))
            }
        }
        ,
        e.prototype.setErrorByADBlock = function(t) {
            this.errorByADBlock = t
        }
        ,
        e.prototype.reset = function() {
            this.unBindPlayerEvent(),
            this.filmFirstPlay = !1,
            this.errorByADBlock = !1,
            this.isShow = !1,
            this.showing = !1,
            this.$dom && zt(this.$dom, "txp_none"),
            Number(this.startCountdownID) > 0 && (this.startCountdownID && clearInterval(this.startCountdownID),
            this.startCountdownID = null)
        }
        ,
        e.prototype.bindPlayerEvent = function() {
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.handleFilmFirstPlayListener)
        }
        ,
        e.prototype.unBindPlayerEvent = function() {
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.handleFilmFirstPlayListener)
        }
        ,
        e.prototype.getBlockTime = function(t) {
            return 1 === t ? 30 : 2 === t ? 45 : t >= 3 ? 60 : 0
        }
        ,
        e.prototype.startCountdown = function(t, e) {
            var o = this;
            this.isShow = !0,
            this.showing = !0;
            var i = e;
            this.videoUI.setVideoBlackScreenVisible(!0),
            this.videoUI.updateVideoBlackScreen("".concat(i)),
            this.adCore.event.emit(Se.AD_BLACK_SCREEN, {
                adInfo: this.adInterface.data.currentAdInfo,
                adType: this.adInterface.order.adType,
                bc: this.getLSValue()
            }),
            this.startCountdownID = +setInterval((function() {
                i > 0 ? (i -= 1,
                o.videoUI.updateVideoBlackScreen("".concat(i))) : (Number(o.startCountdownID) > 0 && (o.startCountdownID && clearInterval(o.startCountdownID),
                o.startCountdownID = null),
                t(),
                o.videoUI.setVideoBlackScreenVisible(!1),
                o.showing = !1)
            }
            ), 1e3)
        }
        ,
        e
    }(yn), xn = function() {
        function t() {
            this.timer = NaN,
            this.startTime = NaN,
            this.during = 0,
            this.remain = -1,
            this.callback = void 0
        }
        return t.prototype.on = function(t, e) {
            var o = this;
            t < 0 || "function" == typeof e && (this.clearTimer(),
            this.during = t,
            this.callback = e,
            this.timer = +setTimeout((function() {
                var t;
                null === (t = o.callback) || void 0 === t || t.call(o),
                o.clear()
            }
            ), t),
            this.startTime = Date.now())
        }
        ,
        t.prototype.pause = function() {
            var t = Date.now() - this.startTime;
            t > this.during || (this.remain = this.during - t,
            this.clearTimer())
        }
        ,
        t.prototype.go = function() {
            this.remain < 0 || this.on(this.remain, this.callback)
        }
        ,
        t.prototype.clear = function() {
            this.clearTimer(),
            this.callback = void 0,
            this.remain = -1
        }
        ,
        t.prototype.clearTimer = function() {
            this.timer && (clearTimeout(this.timer),
            this.timer = NaN),
            this.startTime = NaN,
            this.during = 0
        }
        ,
        t
    }(), An = function() {
        function t(t) {
            t && (this.api = {
                url: "https://ra.gtimg.com/web/viewability/viewabilityalone.js",
                startMonitor: null
            },
            this.target = t)
        }
        return t.prototype.start = function(t) {
            var e = this;
            if (this.api) {
                var o = this.getReportData(t);
                o && (this.api.startMonitor ? this.api.startMonitor(o) : this.initApi().then((function() {
                    e.api.startMonitor(o)
                }
                )))
            }
        }
        ,
        t.prototype.initApi = function() {
            var t = this;
            return new Promise((function(e, o) {
                ne(t.api.url, (function(i) {
                    var r;
                    i ? o() : (null === (r = window.crystalViewModule) || void 0 === r ? void 0 : r.startviewability) ? (t.api.startMonitor = window.crystalViewModule.startviewability,
                    e()) : o()
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getReportData = function(t) {
            var e = []
              , o = t.reporter.pluginReportList;
            return o && o.length > 0 ? (o.forEach((function(t) {
                e.push(t.reportUrl)
            }
            )),
            {
                reportItemUrl: e,
                objectID: [this.target],
                oid: t.orderId,
                duration: 1e3 * parseInt("".concat(t.material.duration), 10),
                retry: 0
            }) : null
        }
        ,
        t
    }(), Cn = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.errorCount = 0,
            o.handleVideoLoadStart = function(t) {
                var e = t.index
                  , i = t.adVideoInfo;
                if (i.url) {
                    o.adInterface.data.firstLoadingStartTime || (o.adInterface.data.firstLoadingStartTime = Date.now()),
                    o.logger.log("开始加载第 ".concat(e, " 个"));
                    var r = o.adInterface.order.orders[e];
                    r && (i.loadStartTime = Date.now(),
                    o.adCore.event.emit(Se.AD_LOAD_START, {
                        adInfo: r,
                        adType: o.adInterface.order.adType,
                        index: r.orderIdx
                    }))
                }
            }
            ,
            o.handleVideoProgress = function(t) {
                var e = t.index
                  , i = t.adVideoInfo
                  , r = o.adInterface.order.orders[e];
                if (r) {
                    var n = i.loadedPercent;
                    i.buffered,
                    i.duration;
                    if (n) {
                        var a = Date.now();
                        n && i.loadStartTime && (i.speed = i.fileSize / (a - i.loadStartTime) * 1e3),
                        o.adCore.event.emit(Se.AD_LOAD_PROGRESS, {
                            adInfo: r,
                            adType: o.adInterface.order.adType,
                            speed: i.speed,
                            loadedPercent: i.loadedPercent,
                            buffered: i.buffered
                        }),
                        o.handleVideoLoadComplete(i, r),
                        o.adInterface.adType === p.MID && n >= .05 && o.adInterface.canplayHandler()
                    }
                }
            }
            ,
            o.handleVideoCanPlay = function(t) {
                var e = t.index
                  , i = t.adVideoInfo;
                if (o.adInterface.order.orders[e]) {
                    var r = i.loadedPercent
                      , n = void 0 === r ? 0 : r;
                    o.logger.log("广告视频可播: index: ".concat(t.index, "  percent: ").concat(n)),
                    (o.adInterface.adType !== p.MID || n >= .05) && o.adInterface.canplayHandler()
                }
            }
            ,
            o.handleVideoPlaying = function(t) {
                var e, i = t.index, r = t.adVideoInfo, n = o.adInterface.order.orders[i];
                if (n) {
                    n.reporter.reportPlay({
                        playType: _e.AUTO_PLAY,
                        timeOffset: r.playTime
                    }),
                    o.clearAdTimer(r, i),
                    o.videoCountdown.updateCountdownUI(),
                    o.updateUIService.updateVideoUI(n),
                    o.adInterface.setState(Si.PLAYING);
                    var a = {
                        adInfo: n,
                        adType: o.adInterface.order.adType
                    };
                    o.adCore.event.emit(Se.AD_PLAY_START, a),
                    o.adInterface.show(),
                    r && !r.viewStartTime && (r.viewStartTime = Date.now()),
                    o.adInterface.data.hasAdPlayingEmit || (o.adInterface.data.showTime = Date.now(),
                    o.adInterface.data.hasAdPlayingEmit = !0,
                    o.adCore.event.emit(Se.AD_PLAYING, {
                        adType: o.adInterface.order.adType,
                        adInfo: o.adInterface.data.currentAdInfo
                    })),
                    o.adCore.vr.reportPlayStart({
                        adType: o.adInterface.order.adType,
                        index: r.index,
                        orderType: null == n ? void 0 : n.orderType,
                        hasReportView: !!r.hasReportView,
                        playtime: r.playTime,
                        adGroupId: null == n ? void 0 : n.orderId,
                        vid: r.vid,
                        isPreload: !!o.adInterface.order.isPreload
                    }),
                    r.hasReportView || (r.hasReportView = !0,
                    o.adInterface.doExposure(n),
                    n.reportVrAdExposure({
                        isFirstExposure: !o.adInterface.data.firstViewTime,
                        index: i,
                        orderType: n.orderType,
                        exposureTime: Date.now() - o.adInterface.data.createTime,
                        isPreload: !!o.adInterface.order.isPreload
                    }),
                    o.adInterface.data.isFirstExposure && (o.adInterface.data.isFirstExposure = !1)),
                    o.adInterface.data.firstViewTime || (o.adInterface.data.firstViewTime = Date.now()),
                    o.adInterface.data.firstLoadingEndTime || (o.adInterface.data.firstLoadingEndTime = Date.now()),
                    o.logger.log("开始播放, 第 ".concat(i, " 个开播了")),
                    o.videoCountdown.startCountdown(),
                    null === (e = o.adViewMonitor) || void 0 === e || e.start(n)
                }
            }
            ,
            o.handleVideoResume = function(t) {
                var e = t.index;
                o.logger.log("广告恢复播放: ".concat(e)),
                o.adInterface.resume(),
                o.videoUI.setCenterQrcodeVisible(!1);
                var i = o.adInterface.order.orders[e];
                i && (i.reporter.reportPlay({
                    playType: _e.RESUME,
                    timeOffset: Date.now()
                }),
                o.adCore.event.emit(Se.AD_RESUME, {
                    adInfo: i,
                    adType: o.adInterface.order.adType
                }))
            }
            ,
            o.handleVideoPause = function(t) {
                var e = t.index
                  , i = t.adVideoInfo;
                o.logger.log("广告暂停: ".concat(e)),
                o.adInterface.pause();
                var r = o.adInterface.order.orders[e];
                r && (r.reporter.reportPlay({
                    playType: _e.PAUSE,
                    timeOffset: null == i ? void 0 : i.playTime
                }),
                o.adCore.event.emit(Se.AD_PAUSE, {
                    adInfo: r,
                    adType: o.adInterface.order.adType
                }))
            }
            ,
            o.handleVideoTimeupdate = function(t) {
                var e = t.index
                  , i = t.adVideoInfo
                  , r = o.adInterface.order.orders[e];
                if (r) {
                    var n = i.playTime
                      , a = i.loadedPercent
                      , s = Math.floor(null != n ? n : 0);
                    s && a && s !== o.adInterface.data.prevPlayTime && (Math.abs(s - o.adInterface.data.prevPlayTime) > 1 ? o.postPlayer.currentTime = o.adInterface.data.prevPlayTime + .5 : (i.viewStartTime && (i.viewTime = (Date.now() - i.viewStartTime) / 1e3),
                    o.adInterface.data.prevPlayTime = s,
                    o.unfoldActiveDetail(r, 1e3 * n),
                    o.handleVideoLoadComplete(i, r),
                    o.adCore.event.emit(Se.AD_TIME_UPDATE, {
                        adType: o.adInterface.order.adType,
                        adInfo: r,
                        playTime: n
                    })))
                }
            }
            ,
            o.handleVideoError = function(t) {
                var e = t.index
                  , i = t.adVideoInfo
                  , r = o.adInterface.order.orders[e];
                if (i.errorTimes = (i.errorTimes || 0) + 1,
                i.error = {
                    type: "error",
                    code: i.errorCode,
                    message: i.errorMsg
                },
                o.adCore.vr.reportPlayError({
                    adType: o.adInterface.order.adType,
                    index: i.index,
                    orderType: null == r ? void 0 : r.orderType,
                    materialVid: null == r ? void 0 : r.material.vid,
                    materialUrl: null == r ? void 0 : r.material.url,
                    hasReportView: !!i.hasReportView,
                    playtime: i.playTime,
                    adGroupId: i.orderId,
                    error: i.error,
                    errorTimes: i.errorTimes,
                    isPreload: !!o.adInterface.order.isPreload
                }),
                !o.adInterface.data.isLoadComplete)
                    if (o.errorCount === o.adInterface.order.orders.length && (o.adInterface.data.errorCode = Ei.LOAD_FREEZE),
                    o.clearAdTimer(i, e),
                    t.canTryBackup)
                        i.backupUrlData ? o.postPlayer.playUrl(i) : o.postPlayer.tryPlayBackupUrl(i);
                    else if (o.logger.error("广告播放报错: ".concat(At(i))),
                    r) {
                        i.viewStartTime && (i.viewTime = (Date.now() - i.viewStartTime) / 1e3),
                        o.adInterface.setState(Si.ERROR),
                        o.adInterface.data.prevPlayTime = 0,
                        o.errorCount += 1,
                        !i.loadCompleteTime && i.loadStartTime && (i.loadCompleteTime = Date.now(),
                        i.loadTime = i.loadCompleteTime - i.loadStartTime);
                        var n = i.errorMsg
                          , a = i.readyState
                          , s = i.networkState;
                        if (i.url || (n = "MEDIA_ELEMENT_ERROR: Empty src attribute",
                        i.detailErrorCode = Ei.EMPTY_URL),
                        a && (n += ";readyState:".concat(a)),
                        s && (n += ";networkState:".concat(s)),
                        o.adCore.event.emit(Se.AD_PLAY_ERROR, {
                            index: e,
                            errorCode: i.errorCode,
                            detailErrorCode: i.detailErrorCode,
                            errorMsg: n || "",
                            adInfo: r,
                            adType: o.adInterface.order.adType,
                            isAllAdEnd: e === o.adInterface.order.orders.length - 1,
                            preload: e !== o.adInterface.data.adIndex
                        }),
                        r.reporter.reportPlay({
                            playType: _e.FAIL,
                            failReason: xe.PLAY
                        }),
                        i.hasReportLoadComplete || (i.hasReportLoadComplete = !0,
                        o.adInterface.loadCompleteHandle(D(D({}, o.getLoadCompleteParams(i, r)), {
                            hasError: "1",
                            error: {
                                type: "error",
                                code: i.errorCode,
                                message: i.errorMsg
                            },
                            errorTimes: i.errorTimes
                        }))),
                        !i.isComputedCountdown) {
                            i.isComputedCountdown = !0;
                            var d = r.material.duration - Math.ceil(i.playTime || 0)
                              , l = o.videoCountdown.countdown - d;
                            if (o.videoCountdown.setCountdown(l),
                            ![p.BROADCAST].includes(r.adType)) {
                                var c = o.videoCountdown.showCountdown - d;
                                o.videoCountdown.setShowCountdown(c)
                            }
                        }
                        e === o.adInterface.data.adIndex ? o.adInterface.data.currentPlayAdType ? (o.logger.log("当前视频失败了，当前已经准备好了，直接播放下一个"),
                        o.playNext(o.adInterface.data.adIndex + 1, !0)) : (o.logger.log("当前视频失败了，但是还没有调用过play，直接预加载下一个."),
                        o.adInterface.data.adIndex <= o.adInterface.order.orders.length - 1 ? (o.adInterface.setAdIndex(o.adInterface.data.adIndex + 1),
                        o.preloadNext(e + 1, !1)) : (o.logger.log("所有都播完了"),
                        o.adEndService.handleAdEnd({
                            reason: "所有都播完了"
                        }))) : o.preloadNext(e + 1, !1)
                    }
            }
            ,
            o.handleVideoEnded = function(t) {
                o.videoCountdown.stopCountdown();
                var e = t.index
                  , i = t.adVideoInfo
                  , r = o.adInterface.order.orders[e];
                r && (r.reporter.reportPlay({
                    playType: _e.END,
                    timeOffset: null == i ? void 0 : i.duration
                }),
                o.logger.log("播放完成: 第 ".concat(e, " 个")),
                o.adCore.vr.reportPlayEnd({
                    adType: o.adInterface.order.adType,
                    index: i.index,
                    orderType: null == r ? void 0 : r.orderType,
                    playtime: i.playTime,
                    endType: Qi.VIDEO_END,
                    adGroupId: null == r ? void 0 : r.orderId,
                    hasReportView: i.hasReportView,
                    errorTimes: i.errorTimes,
                    vid: i.vid,
                    isPreload: !!o.adInterface.order.isPreload
                }),
                o.clearAdTimer(i, e),
                i.viewStartTime && (i.viewTime = (Date.now() - i.viewStartTime) / 1e3),
                o.adCore.event.emit(Se.AD_PLAY_END, {
                    adInfo: r,
                    adType: o.adInterface.order.adType
                }),
                o.playNext(o.adInterface.data.adIndex + 1),
                o.adInterface.data.prevPlayTime = 0)
            }
            ,
            o.startAdTimer = function(t, e) {
                void 0 === e && (e = 14);
                var i = t.index
                  , r = t.adVideoInfo;
                o.logger.log("开始卡顿定时器: ".concat(i)),
                o.adInterface.order.orders[i] && (r.loadProgressTimer || (r.loadProgressTimer = new xn),
                r.loadProgressTimer.clear(),
                r.loadProgressTimer.on(1e3 * e, (function() {
                    o.logger.log("订单超时: ".concat(i));
                    var t = r.loadedPercent;
                    r.status === Ti.PLAYING && (!r || 0 !== t && r.playTime || (o.videoCountdown.setCountdown(o.videoCountdown.countdown + e),
                    r.detailErrorCode = Ei.TIMEOUT)),
                    r.status === Ti.BUFFERING && 0 === t && (r.detailErrorCode = Ei.PRELOAD_TIMEOUT),
                    o.postPlayer.setAdVideoSrcEmpty(i)
                }
                )))
            }
            ,
            o.handleAutoplayBlockedAd = function() {
                var t;
                o.adCore.event.emit(Se.AD_AUTOPLAY_BLOCKED, {
                    adType: o.adInterface.order.adType,
                    adInfo: o.adInterface.data.currentAdInfo
                }),
                null === (t = o.adInterface.data.videoInfoList) || void 0 === t || t.forEach((function(t) {
                    o.clearAdTimer(t, t.index)
                }
                ))
            }
            ,
            o.handleSetLoading = function() {
                o.adCore.event.emit(Se.AD_SET_LOADING, {
                    adType: o.adInterface.order.adType,
                    adInfo: o.adInterface.data.currentAdInfo
                })
            }
            ,
            o.postPlayer = o.initPlayer(),
            o.initVolume(),
            o.bindVideoAdPlayerEvent(),
            o
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "currentTime", {
            get: function() {
                return this.postPlayer.currentTime
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.setVolume = function(t) {
            var e = Math.max(0, Math.min(1, t));
            this.adInterface.data.volume = e;
            var o = 0 === this.adInterface.data.volume;
            this.postPlayer.volume = e,
            this.adInterface.data.volume !== e && (o !== this.adInterface.data.isMute && (this.adInterface.data.isMute = o,
            this.adInterface.data.isMute ? this.mute() : this.unMute(),
            this.videoUI.updateVideoVolumeBtn(this.adInterface.data.isMute)),
            this.adCore.event.emit(Se.AD_VOLUME_CHANGE, {
                volume: t,
                adType: this.adInterface.order.adType,
                adInfo: this.adInterface.data.currentAdInfo,
                orderList: this.adInterface.order.orders
            }))
        }
        ,
        e.prototype.mute = function() {
            this.postPlayer.volume = 0;
            var t = this.adInterface.data
              , e = t.currentAdInfo;
            t.hasAdPlayingEmit && !this.adInterface.data.hasDestroy && (null == e || e.reporter.reportPlay({
                playType: _e.MUTE
            }))
        }
        ,
        e.prototype.unMute = function() {
            this.postPlayer.volume = this.adInterface.data.volume;
            var t = this.adInterface.data
              , e = t.currentAdInfo;
            t.hasAdPlayingEmit && !this.adInterface.data.hasDestroy && (null == e || e.reporter.reportPlay({
                playType: _e.UNMUTE
            }))
        }
        ,
        e.prototype.play = function() {
            this.postPlayer.play()
        }
        ,
        e.prototype.resume = function() {
            this.postPlayer.resume()
        }
        ,
        e.prototype.pause = function() {
            this.postPlayer.pause(),
            this.videoCountdown.stopCountdown()
        }
        ,
        e.prototype.load = function() {
            this.adCore.event.emit(Se.AD_PLAYER_SESSION_START, {
                adType: this.adInterface.adType,
                vids: this.adInterface.data.urlList.map((function(t) {
                    return t.vid
                }
                ))
            }),
            this.postPlayer.load(R([], this.adInterface.data.urlList, !0))
        }
        ,
        e.prototype.start = function() {
            this.adViewMonitor || (this.adViewMonitor = new An(this.videoUI.$domNodes.videoContainer)),
            this.play()
        }
        ,
        e.prototype.destroy = function() {
            var t, e = this, o = this.adInterface.data, i = o.currentVideoInfo, r = o.currentAdInfo;
            (null == i ? void 0 : i.playTime) && (this.videoCountdown.remainingCountdown > 0 && (i.index !== this.postPlayer.adVideoInfoList.length - 1 || i.status !== Ti.END) && (null == r || r.reporter.reportPlay({
                playType: _e.INTERRUPT,
                timeOffset: i.playTime
            }),
            this.adCore.vr.reportPlayEnd({
                adType: this.adInterface.order.adType,
                index: i.index,
                orderType: null == r ? void 0 : r.orderType,
                playtime: i.playTime,
                endType: Qi.INTERRUPT,
                adGroupId: null == r ? void 0 : r.orderId,
                hasReportView: i.hasReportView,
                errorTimes: i.errorTimes,
                vid: i.vid,
                isPreload: !!this.adInterface.order.isPreload
            })),
            this.videoCountdown.remainingCountdown <= 0 && i.status !== Ti.END && (null == r || r.reporter.reportPlay({
                playType: _e.END,
                timeOffset: null == i ? void 0 : i.duration
            }),
            this.adCore.vr.reportPlayEnd({
                adType: this.adInterface.order.adType,
                index: i.index,
                orderType: null == r ? void 0 : r.orderType,
                playtime: i.playTime,
                endType: Qi.COUNTDOWN,
                adGroupId: null == r ? void 0 : r.orderId,
                hasReportView: i.hasReportView,
                errorTimes: i.errorTimes,
                vid: i.vid,
                isPreload: !!this.adInterface.order.isPreload
            }))),
            this.postPlayer.stop(),
            this.postPlayer.removeAllListeners(),
            this.postPlayer.destroy(),
            this.unbindVideoAdPlayerEvent(),
            this.adCore.event.emit(Se.AD_PLAYER_SESSION_END, {
                adType: this.adInterface.adType,
                vids: this.adInterface.data.urlList.map((function(t) {
                    return t.vid
                }
                ))
            }),
            null === (t = this.adInterface.data.videoInfoList) || void 0 === t || t.forEach((function(t) {
                e.clearAdTimer(t, t.index)
            }
            ))
        }
        ,
        e.prototype.bindVideoAdPlayerEvent = function() {
            this.forEachEvent(bi.bind)
        }
        ,
        e.prototype.unbindVideoAdPlayerEvent = function() {
            this.forEachEvent(bi.unbind)
        }
        ,
        e.prototype.forEachEvent = function(t) {
            this.postPlayer[t](Ii.LOADSTART, this.handleVideoLoadStart),
            this.postPlayer[t](Ii.PROGRESS, this.handleVideoProgress),
            this.postPlayer[t](Ii.CANPLAY, this.handleVideoCanPlay),
            this.postPlayer[t](Ii.PLAYING, this.handleVideoPlaying),
            this.postPlayer[t](Ii.PLAY, this.handleVideoResume),
            this.postPlayer[t](Ii.PAUSE, this.handleVideoPause),
            this.postPlayer[t](Ii.TIMEUPDATE, this.handleVideoTimeupdate),
            this.postPlayer[t](Ii.ERROR, this.handleVideoError),
            this.postPlayer[t](Ii.ENDED, this.handleVideoEnded),
            this.postPlayer[t](Ii.WATCH_LOAD_PROGRESS, this.startAdTimer),
            this.postPlayer[t](Ii.AD_AUTOPLAY_BLOCKED, this.handleAutoplayBlockedAd),
            this.postPlayer[t](Ii.SET_LOADING, this.handleSetLoading)
        }
        ,
        e.prototype.getLoadCompleteParams = function(t, e) {
            return {
                adInfo: e,
                adType: this.adInterface.order.adType,
                index: t.index,
                isAllLoaded: t.index === this.adInterface.order.orders.length - 1,
                loadingTime: t.loadTime,
                materialDuration: e.material.duration,
                materialVid: e.material.vid,
                materialUrl: e.material.url,
                materialType: m.VIDEO,
                adBlockEnabled: this.adCore.adblock.adBlockEnabled ? "1" : "0",
                playtime: t.playTime,
                hasReportView: !!t.hasReportView,
                adGroupId: e.orderId,
                errorTimes: t.errorTimes
            }
        }
        ,
        e.prototype.handleVideoLoadComplete = function(t, e) {
            var o;
            if (!this.adInterface.data.isLoadComplete && !t.loadCompleteTime && (null !== (o = t.loadedPercent) && void 0 !== o ? o : 0) > .99) {
                var i = t.index;
                this.logger.log("加载完成第 ".concat(i, " 个"));
                var r = i === this.adInterface.data.adIndex;
                if (t.loadCompleteTime = Date.now(),
                t.loadStartTime && (t.loadTime = t.loadCompleteTime - t.loadStartTime),
                t.hasReportLoadComplete || (t.hasReportLoadComplete = !0,
                this.adInterface.loadCompleteHandle(D({}, this.getLoadCompleteParams(t, e)))),
                this.adInterface.data.isLoadComplete = i >= this.adInterface.order.orders.length - 1,
                this.adInterface.data.isLoadComplete)
                    this.logger.log("所有广告加载完成");
                else {
                    var n = r ? this.adInterface.data.adIndex + 1 : i + 1;
                    this.preloadNext(n, r)
                }
            }
        }
        ,
        e.prototype.playNext = function(t, e) {
            void 0 === e && (e = !1),
            this.logger.log("播放下一个：".concat(t)),
            this.videoCountdown.stopCountdown(),
            this.postPlayer.playNext(t, e) ? this.adInterface.setAdIndex(this.adInterface.data.adIndex + 1) : this.adEndService.handleAdEnd({
                reason: "播放到最后一个"
            })
        }
        ,
        e.prototype.preloadNext = function(t, e) {
            this.adInterface.order.orders && 0 !== this.adInterface.order.orders.length ? t >= this.adInterface.order.orders.length ? this.adEndService.handleAdEnd({
                reason: "预加载时，索引过界"
            }) : this.postPlayer.preloadNext(t, e) ? this.adInterface.order.orders[t] || this.adEndService.handleAdEnd({
                reason: "预加载时，没有下一个信息"
            }) : this.adEndService.handleAdEnd({
                reason: "预加载时，预加载下一个返回false"
            }) : this.adEndService.handleAdEnd({
                reason: "预加载时，整体空单"
            })
        }
        ,
        e.prototype.clearAdTimer = function(t, e) {
            var o;
            t.loadProgressTimer && (this.logger.log("清除卡顿定时器: ".concat(e)),
            null === (o = t.loadProgressTimer) || void 0 === o || o.clear())
        }
        ,
        e.prototype.initPlayer = function() {
            var t;
            return (null === (t = this.videoUI) || void 0 === t ? void 0 : t.$domNodes.videoAdContainer) ? this.adCore.config.createPlayer(this.adCore, this.adInterface.adType, this.videoUI.$domNodes.videoAdContainer) : (this.logger.error("'videoAdContainer' dom 节点不存在"),
            void this.adInterface.stop({
                reason: "未找到创建播放器的 dom 节点"
            }))
        }
        ,
        e.prototype.initVolume = function() {
            var t = this.adCore.config.outerPlayerData.volume;
            this.adInterface.data.volume = Math.min(1, Math.max(0, void 0 === t ? 1 : t)),
            this.postPlayer.volume = this.adInterface.data.volume,
            this.adInterface.data.volume ? this.unMute() : this.mute()
        }
        ,
        e.prototype.unfoldActiveDetail = function(t, e) {
            var o, i, r = t.data.poster.action_button, n = null === (o = r.picture) || void 0 === o ? void 0 : o.display_interval, a = null === (i = r.qrcode) || void 0 === i ? void 0 : i.display_interval;
            (t.isPictureActive && n && e >= n || t.isScanActive && a && e >= a) && this.videoUI.unfoldActiveDetail()
        }
        ,
        e
    }(yn), bn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.updateVideoUI = function(t) {
            this.videoUI.resetVideoUI(),
            t && (this.videoUI.setVideoLayerVisible(!0),
            this.videoUI.setVideoAdInnerVisible(!0),
            this.videoUI.setVideoAdControlVisible(this.adInterface.data.countdownVisible),
            this.videoUI.setVideoAdLayerVisible(!0),
            this.videoUI.setLinkAreaVisible(t.clickable),
            this.updateTitle(t),
            this.updateSkipButton(t),
            this.updateActionButton(t))
        }
        ,
        e.prototype.updateTitle = function(t) {
            this.videoUI.updateVideoDSP(t.data.poster.title.dsp_name)
        }
        ,
        e.prototype.updateSkipButton = function(t) {
            if (this.videoUI.updateVideoVolumeBtn(this.adInterface.data.isMute),
            this.videoUI.setVideoCountdownVisible(this.videoCountdown.remainingShowCountdown > 0),
            p.BROADCAST === t.adType)
                return this.adCore.config.showCloseButton ? void this.videoUI.updateCloseButton({
                    text: this.adInterface.data.skipAdTitle,
                    show: !0
                }) : void this.videoUI.updateCloseButton({
                    show: !1
                });
            this.adInterface.data.isTrueView ? this.videoUI.updateTrueview({
                countdown: this.videoCountdown.remainingSkipCountdown,
                showCloseButton: this.adCore.config.showCloseButton,
                skipAdTitle: this.adInterface.data.skipAdTitle,
                skipAdSubTitle: this.adInterface.data.skipAdSubTitle
            }) : this.videoUI.updateCloseButton({
                text: this.adInterface.data.skipAdTitle,
                show: this.adCore.config.showCloseButton
            })
        }
        ,
        e.prototype.updateActionButton = function(t) {
            var e, o = t.data.poster.action_button;
            if (o.display_none)
                this.videoUI.setVideoDetailVisible(!1);
            else {
                this.videoUI.setVideoDetailVisible(!0);
                var i = null !== (e = t.data.poster.action_button.base.action_title.first_title) && void 0 !== e ? e : "点击按钮，查看详情"
                  , r = t.data.poster.advertiser;
                if (this.videoUI.updateActionButton({
                    btnText: i,
                    bgColor: o.base.bg_color,
                    textColor: o.base.text_color
                }),
                t.isPictureActive)
                    this.videoUI.updateActionPicture(D(D({}, r), {
                        btnText: i
                    }));
                else if (t.isScanActive) {
                    var n = t.data.order.ad_action.scan
                      , a = D(D({}, r), {
                        btnText: i,
                        qrcodeUrl: null == n ? void 0 : n.short_link,
                        qrcodeTips: (null == n ? void 0 : n.qrcode_tips) || "微信扫码查看更多"
                    });
                    this.videoUI.updateActionQrcode(a),
                    this.videoUI.updateCenterQrcode(a);
                    var s = n.url;
                    this.videoUI.setScanCanOpenVisible(t.isActive && t.isScanActive && !(!s || -1 !== s.indexOf("http://")))
                }
            }
        }
        ,
        e
    }(yn), En = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            if (o.state = {
                showCountdown: 0,
                countdown: 0,
                skipCountdown: 0,
                showSkipCountdown: !1
            },
            o.handleCountdownChange = function(t) {
                if (o.adCore.event.emit(Se.AD_COUNTDOWN_CHANGE, {
                    adType: o.adInterface.adType,
                    countdown: o.state.countdown - t
                }),
                t <= o.state.showCountdown)
                    o.updateCountdownUI(t);
                else {
                    if (t <= o.state.countdown)
                        return o.videoUI.updateVideoCountdown(""),
                        void o.videoUI.setVideoCountdownVisible(!1);
                    if (o.countdownInterval.pause(),
                    o.videoUI.resetVideoUI(),
                    o.videoUI.updateVideoCountdown(""),
                    o.adInterface.order.orders.length > 0 && !o.adInterface.data.hasReportVideoEnd) {
                        o.logger.log("倒计时结束了");
                        var e = o.adInterface.order.orders.length - 1;
                        if (o.adInterface.data.currentAdInfo && o.playerService.currentTime && o.adInterface.data.adIndex === e) {
                            var i = o.playerService.currentTime / o.adInterface.data.currentAdInfo.material.duration;
                            i >= 0 && i < .5 && (o.adInterface.data.errorCode = Ei.LOAD_FREEZE)
                        }
                        o.adInterface.data.adIndex < e && (o.adInterface.data.errorCode = Ei.LOAD_FREEZE),
                        o.adEndService.handleAdEnd({
                            reason: "倒计时结束了"
                        })
                    }
                }
            }
            ,
            o.countdownInterval = new Zi({
                onChange: o.handleCountdownChange
            },o.adCore.logger.createLogger("CountdownInterval")),
            o.setCountdown(o.adInterface.data.duration),
            o.setShowCountdown(o.adInterface.data.showCountdown),
            o.state.showSkipCountdown = o.adInterface.data.isTrueView,
            o.adInterface.data.isTrueView) {
                var i = o.adInterface.data.duration - o.adInterface.data.trueViewCountDown;
                o.state.skipCountdown = o.adInterface.data.duration <= i ? 0 : o.adInterface.data.trueViewCountDown
            }
            return o
        }
        return i(e, t),
        e.prototype.startCountdown = function() {
            this.countdownInterval.start()
        }
        ,
        e.prototype.stopCountdown = function() {
            this.countdownInterval.pause()
        }
        ,
        e.prototype.updateCountdownUI = function(t) {
            void 0 === t && (t = this.countdownInterval.time);
            var e = this.state.showCountdown - t;
            this.videoUI.updateVideoCountdown("".concat(e)),
            this.updateTrueViewUI(t)
        }
        ,
        e.prototype.updateTrueViewUI = function(t) {
            if (this.state.showSkipCountdown) {
                var e = this.state.skipCountdown - t;
                this.videoUI.updateTrueview({
                    countdown: e > 0 ? e : 0,
                    showCloseButton: this.adCore.config.showCloseButton,
                    skipAdTitle: this.adInterface.data.skipAdTitle,
                    skipAdSubTitle: this.adInterface.data.skipAdSubTitle
                })
            }
        }
        ,
        Object.defineProperty(e.prototype, "countdown", {
            get: function() {
                return this.state.countdown
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "showCountdown", {
            get: function() {
                return this.state.showCountdown
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "skipCountdown", {
            get: function() {
                return this.state.skipCountdown
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "remainingSkipCountdown", {
            get: function() {
                return this.state.skipCountdown - this.countdownInterval.time
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "remainingCountdown", {
            get: function() {
                return this.state.countdown - this.countdownInterval.time
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "remainingShowCountdown", {
            get: function() {
                return this.state.showCountdown - this.countdownInterval.time
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "canSkipClose", {
            get: function() {
                return !this.state.showSkipCountdown || this.state.skipCountdown - this.countdownInterval.time <= 0
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.setShowCountdown = function(t) {
            this.state.showCountdown = Math.floor(t)
        }
        ,
        e.prototype.setCountdown = function(t) {
            this.state.countdown = Math.floor(t)
        }
        ,
        e
    }(yn);
    Xi(".txp-center-code{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,.3);bottom:0;display:none;justify-content:center;left:0;pointer-events:auto;position:absolute;right:0;top:0}.txp-center-code-content{text-align:center}.txp-center-code-name{color:#fff;font-size:20px;line-height:normal;margin-bottom:12px;overflow:hidden;text-align:center;text-overflow:ellipsis;text-shadow:0 1px 3px rgba(0,0,0,.2);white-space:nowrap}.txp-center-code-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#fff;border-radius:8px;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.2);box-shadow:0 0 20px 0 rgba(0,0,0,.2);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding:20px 16px;position:relative;width:240px}.txp-center-code-qr-tips{color:rgba(0,0,0,.4);font-size:16px;line-height:normal;margin-top:12px}.txp-center-code-qr-icon{border:2px solid #fff;border-radius:4px;height:48px;left:96px;position:absolute;top:96px;width:48px}.txp-center-code-close{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-top:12px}.txp-center-code-close:hover path{fill:#fe5c38}.txp-center-code-close-tag{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.5);border-radius:4px;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;padding:2px 4px 2px 6px;position:absolute;right:-6px;top:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.txp-center-code-close-tag>span{color:#fff;font-size:12px;font-style:normal;font-weight:500;line-height:16px}.txp-center-code-close-tag>svg{height:12px;margin-left:2px;width:12px}.txp-center-code[data-mode=size_480_270],.txp-center-code[data-mode=size_590_328]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_480_270] .txp-center-code-card,.txp-center-code[data-mode=size_590_328] .txp-center-code-card{padding:10px 10px 8px;width:110px}.txp-center-code[data-mode=size_480_270] .txp-center-code-name,.txp-center-code[data-mode=size_590_328] .txp-center-code-name{display:none}.txp-center-code[data-mode=size_480_270] .txp-center-code-qr-tips,.txp-center-code[data-mode=size_590_328] .txp-center-code-qr-tips{font-size:10px;margin-top:4px}.txp-center-code[data-mode=size_480_270] .txp-center-code-close,.txp-center-code[data-mode=size_480_270] .txp-center-code-qr-icon,.txp-center-code[data-mode=size_590_328] .txp-center-code-close,.txp-center-code[data-mode=size_590_328] .txp-center-code-qr-icon{display:none}.txp-center-code[data-mode=size_480_270] .txp-center-code-close-tag,.txp-center-code[data-mode=size_590_328] .txp-center-code-close-tag{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.txp-center-code[data-mode=size_1110_624]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_1110_624] .txp-center-code-card{padding:12px;width:152px}.txp-center-code[data-mode=size_1110_624] .txp-center-code-name{display:none}.txp-center-code[data-mode=size_1110_624] .txp-center-code-qr-tips{font-size:12px;margin-top:10px}.txp-center-code[data-mode=size_1110_624] .txp-center-code-close,.txp-center-code[data-mode=size_1110_624] .txp-center-code-qr-icon{display:none}.txp-center-code[data-mode=size_1110_624] .txp-center-code-close-tag{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.txp-center-code[data-mode=size_1920_1080]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_1920_1080] .txp-center-code-close-tag{display:none}.txp-center-code[data-mode=default]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=default] .txp-center-code-name{margin-bottom:16px}.txp-center-code[data-mode=default] .txp-center-code-card{padding:20px;width:280px}.txp-center-code[data-mode=default] .txp-center-code-qr-tips{font-size:18px}.txp-center-code[data-mode=default] .txp-center-code-qr-icon{height:56px;left:112px;top:112px;width:56px}.txp-center-code[data-mode=default] .txp-center-code-close-tag{display:none}");
    var In = ((un = {})[tr.SIZE_480_270] = 90,
    un[tr.SIZE_590_328] = 90,
    un[tr.SIZE_1110_624] = 128,
    un[tr.SIZE_1920_1080] = 208,
    un[tr.DEFAULT] = 240,
    un)
      , Tn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                code: e.createRef(),
                name: e.createRef(),
                iconUrl: e.createRef(),
                qrcodeTips: e.createRef()
            },
            e.handleClick = function(t) {
                t.stopPropagation()
            }
            ,
            e.handleClose = function(t) {
                t.stopPropagation(),
                e.props.onClose()
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.resize = function(t) {
            var e = mr(t);
            this.playerMode !== e && (this.playerMode = e,
            this.$refs.container.value.setAttribute("data-mode", this.playerMode),
            this.renderQrCode())
        }
        ,
        e.prototype.render = function() {
            var t = "txp-center-code";
            return ur("div", {
                ref: this.$refs.container,
                class: "".concat(t, " ").concat(this.props.visible ? "" : "txp_none"),
                onClick: this.handleClick
            }, ur("div", {
                class: "".concat(t, "-content")
            }, ur("div", {
                ref: this.$refs.name,
                class: "".concat(t, "-name")
            }, this.props.name), ur("div", {
                class: "".concat(t, "-card")
            }, ur("div", {
                ref: this.$refs.code,
                class: "".concat(t, "-qr-code")
            }), ur("img", {
                ref: this.$refs.iconUrl,
                class: "".concat(t, "-qr-icon"),
                alt: "",
                src: this.props.iconUrl || ""
            }), ur("div", {
                ref: this.$refs.qrcodeTips,
                class: "".concat(t, "-qr-tips")
            }, this.props.qrcodeTips), ur("div", {
                class: "".concat(t, "-close-tag"),
                onClick: this.handleClose
            }, ur("span", null, "广告"), ur("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none"
            }, ur("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M2.46967 8.23008C2.17678 8.52297 2.17678 8.99784 2.46967 9.29074C2.76256 9.58363 3.23744 9.58363 3.53033 9.29074L6.00526 6.81581L8.48021 9.29076C8.7731 9.58365 9.24798 9.58365 9.54087 9.29076C9.83376 8.99787 9.83376 8.52299 9.54087 8.2301L7.06592 5.75515L9.54074 3.28033C9.83363 2.98744 9.83363 2.51256 9.54074 2.21967C9.24784 1.92678 8.77297 1.92678 8.48008 2.21967L6.00526 4.69449L3.53046 2.21969C3.23757 1.9268 2.76269 1.9268 2.4698 2.21969C2.17691 2.51259 2.17691 2.98746 2.4698 3.28035L4.9446 5.75515L2.46967 8.23008Z",
                fill: "white"
            })))), ur("div", {
                class: "".concat(t, "-close"),
                onClick: this.handleClose
            }, ur("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "26",
                height: "26",
                viewBox: "0 0 26 26",
                fill: "none"
            }, ur("rect", {
                width: "26",
                height: "26",
                rx: "13",
                fill: "black",
                "fill-opacity": "0.3"
            }), ur("path", {
                d: "M8.64645 8.64645L8.29289 8.29289L8.29289 8.29289L8.64645 8.64645ZM8.64645 9.35355L8.29289 9.70711L8.29289 9.70711L8.64645 9.35355ZM9.35355 8.64645L9 9L9 9L9.35355 8.64645ZM13 12.2929L12.6464 12.6464L13 13L13.3536 12.6464L13 12.2929ZM16.6464 8.64645L17 9V9L16.6464 8.64645ZM17.3536 8.64645L17.7071 8.29289L17.7071 8.29289L17.3536 8.64645ZM17.3536 9.35355L17.7071 9.70711V9.70711L17.3536 9.35355ZM13.7071 13L13.3536 12.6464L13 13L13.3536 13.3536L13.7071 13ZM17.3536 16.6464L17.7071 16.2929L17.7071 16.2929L17.3536 16.6464ZM17.3536 17.3536L17.7071 17.7071L17.7071 17.7071L17.3536 17.3536ZM16.6464 17.3536L16.2929 17.7071L16.2929 17.7071L16.6464 17.3536ZM13 13.7071L13.3536 13.3536L13 13L12.6464 13.3536L13 13.7071ZM9.35355 17.3536L9.70711 17.7071H9.70711L9.35355 17.3536ZM8.64645 17.3536L8.29289 17.7071L8.29289 17.7071L8.64645 17.3536ZM8.64645 16.6464L8.29289 16.2929L8.29289 16.2929L8.64645 16.6464ZM12.2929 13L12.6464 13.3536L13 13L12.6464 12.6464L12.2929 13ZM8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L9 9L9 9L8.29289 8.29289ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289L9 9L9 9L9.70711 8.29289ZM13.3536 11.9393L9.70711 8.29289L9 9L12.6464 12.6464L13.3536 11.9393ZM13.3536 12.6464L17 9L16.2929 8.29289L12.6464 11.9393L13.3536 12.6464ZM17 9V9L17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289L17 9ZM17 9V9L17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L17 9ZM17 9L13.3536 12.6464L14.0607 13.3536L17.7071 9.70711L17 9ZM17.7071 16.2929L14.0607 12.6464L13.3536 13.3536L17 17L17.7071 16.2929ZM17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L17 17V17L17.7071 17.7071ZM16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071L17 17H17L16.2929 17.7071ZM12.6464 14.0607L16.2929 17.7071L17 17L13.3536 13.3536L12.6464 14.0607ZM12.6464 13.3536L9 17L9.70711 17.7071L13.3536 14.0607L12.6464 13.3536ZM9 17H9L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L9 17ZM9 17V17L8.29289 16.2929C7.90237 16.6834 7.90237 17.3166 8.29289 17.7071L9 17ZM9 17L12.6464 13.3536L11.9393 12.6464L8.29289 16.2929L9 17ZM8.29289 9.70711L11.9393 13.3536L12.6464 12.6464L9 9L8.29289 9.70711Z",
                fill: "white"
            })))))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                },
                name: function(e, o) {
                    e !== o && (t.$refs.name.value.innerText = e || "")
                },
                iconUrl: function(e, o) {
                    e !== o && Vt(t.$refs.iconUrl.value, "src", e || "")
                },
                qrcodeUrl: function(e, o) {
                    e !== o && t.renderQrCode()
                },
                qrcodeTips: function(e, o) {
                    e !== o && (t.$refs.qrcodeTips.value.innerText = e || "")
                }
            }
        }
        ,
        e.prototype.renderQrCode = function() {
            var t = this.getState("qrcodeUrl");
            if (t && this.playerMode) {
                var e = this.getCodeSize(this.playerMode);
                this.props.renderQrCode(this.$refs.code.value, t, e)
            }
        }
        ,
        e.prototype.getCodeSize = function(t) {
            return In[t]
        }
        ,
        e
    }(dr);
    Xi(".game-card{border-radius:8px;cursor:pointer;height:132px;overflow:hidden;position:relative;width:346px}.game-card.can-anim{opacity:0;-webkit-transform:scale(.3);transform:scale(.3);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-transition:opacity .5s ease-in-out .3s,-webkit-transform .5s ease-in-out .3s;transition:opacity .5s ease-in-out .3s,-webkit-transform .5s ease-in-out .3s;transition:transform .5s ease-in-out .3s,opacity .5s ease-in-out .3s;transition:transform .5s ease-in-out .3s,opacity .5s ease-in-out .3s,-webkit-transform .5s ease-in-out .3s}.game-card.can-anim.show-anim{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.game-card-main{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;padding:16px;position:relative;width:100%}.game-card-logo{height:100px;width:100px}.game-card-info{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:16px}.game-card-title{font-size:18px;font-weight:500;width:142px}.game-card-desc,.game-card-title{color:#fff;font-style:normal;height:18px;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.game-card-desc{font-size:14px;font-weight:400;margin-top:8px;opacity:.6;width:176px}.game-card-btn{-ms-flex-negative:0;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fe5c38;border-radius:24px;color:#fff;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;flex-shrink:0;font-size:14px;font-style:normal;font-weight:500;height:34px;justify-content:center;line-height:16px;margin-top:14px;padding:9px 16px;text-align:center}.game-card-small-qrcode{background:hsla(0,0%,100%,.1);height:48px;overflow:hidden;padding:2px 2px 6px 6px;position:absolute;right:0;top:0;width:48px}.game-card-small-qrcode,.game-card-small-qrcode svg{border-radius:0 0 0 48px}.game-card-qrcode{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);background:rgba(0,0,0,.8);border-radius:8px;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;left:0;padding:10px;position:absolute;right:0;top:0}.game-card-qrcode-text{-webkit-box-flex:1;color:#fff;-ms-flex:1;flex:1;font-size:18px;font-style:normal;font-weight:500;line-height:18px;overflow:hidden;padding-left:4px;text-overflow:ellipsis;white-space:nowrap}.game-card-qrcode-code,.game-card-qrcode-text{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}.game-card-qrcode-code{background:#fff;border-radius:4px;height:112px;padding:6px;width:112px}.game-card-bg{-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;left:0;position:absolute;right:0;top:0}.game-card-bg img{width:100%}");
    var wn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                qrcodeCard: e.createRef(),
                logo: e.createRef(),
                name: e.createRef(),
                desc: e.createRef(),
                btn: e.createRef(),
                code: e.createRef(),
                codeTip: e.createRef(),
                bg: e.createRef(),
                bgImg: e.createRef()
            },
            e.isShowQrcode = !1,
            e.handleMouseEnter = function() {
                e.isShowQrcode || (e.isShowQrcode = !0,
                Kt(e.$refs.qrcodeCard.value))
            }
            ,
            e.handleMouseLeave = function() {
                e.isShowQrcode && (e.isShowQrcode = !1,
                $t(e.$refs.qrcodeCard.value))
            }
            ,
            e.handleClick = function(t) {
                var o;
                t.stopPropagation();
                var i = hr(t.target);
                null === (o = e.props) || void 0 === o || o.onClick(i)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.renderQrCode = function(t) {
            var e, o;
            this.$refs.code.value.innerHTML = "",
            this.$refs.code.value && t && (null === (o = null === (e = this.props) || void 0 === e ? void 0 : e.renderQrCode) || void 0 === o || o.call(e, this.$refs.code.value, t, 100))
        }
        ,
        e.prototype.show = function() {
            var t, e = this;
            (null === (t = this.props) || void 0 === t ? void 0 : t.canAnim) && setTimeout((function() {
                zt(e.$refs.container.value, "show-anim")
            }
            ), 60)
        }
        ,
        e.prototype.hide = function() {
            var t;
            (null === (t = this.props) || void 0 === t ? void 0 : t.canAnim) && Ht(this.$refs.container.value, "show-anim")
        }
        ,
        e.prototype.destroy = function() {
            this.$refs.container.value.remove()
        }
        ,
        e.prototype.render = function() {
            var t, e, o, i, r, n, a, s, d;
            return ur("div", {
                ref: this.$refs.container,
                class: "game-card ".concat((null === (t = this.props) || void 0 === t ? void 0 : t.canAnim) ? "can-anim" : "", " ").concat((null === (e = this.props) || void 0 === e ? void 0 : e.visible) ? "" : "txp_none"),
                onMouseLeave: this.handleMouseLeave,
                onClick: this.handleClick,
                "data-acttype": ji.AD_DETAIL
            }, (null === (o = this.props) || void 0 === o ? void 0 : o.hasBg) ? ur("div", {
                ref: this.$refs.bg,
                class: "game-card-bg"
            }, ur("img", {
                ref: this.$refs.bgImg,
                alt: "bg",
                src: (null === (i = this.props) || void 0 === i ? void 0 : i.icon_url) || ""
            })) : null, ur("div", {
                class: "game-card-main"
            }, ur("img", {
                ref: this.$refs.logo,
                class: "game-card-logo",
                src: (null === (r = this.props) || void 0 === r ? void 0 : r.icon_url) || "",
                alt: "logo",
                "data-acttype": ji.ADVERTISER_LOGO
            }), ur("div", {
                class: "game-card-info"
            }, ur("div", {
                class: "game-card-name"
            }, ur("span", {
                ref: this.$refs.name,
                "data-acttype": ji.ADVERTISER_NAME
            }, null === (n = this.props) || void 0 === n ? void 0 : n.name)), ur("div", {
                class: "game-card-desc"
            }, ur("span", {
                ref: this.$refs.desc,
                "data-acttype": ji.AD_TITLE
            }, null === (a = this.props) || void 0 === a ? void 0 : a.desc)), ur("div", {
                ref: this.$refs.btn,
                class: "game-card-btn",
                "data-acttype": ji.AD_ACTION_BUTTON
            }, null === (s = this.props) || void 0 === s ? void 0 : s.btnText)), ur("div", {
                class: "game-card-small-qrcode",
                onMouseEnter: this.handleMouseEnter
            }, ur("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, ur("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M18.2222 7.55556H7.55556V18.2222H18.2222V7.55556ZM4.88889 4C4.39797 4 4 4.39797 4 4.88889V20.8889C4 21.3798 4.39797 21.7778 4.88889 21.7778H20.8889C21.3798 21.7778 21.7778 21.3798 21.7778 20.8889V4.88889C21.7778 4.39797 21.3798 4 20.8889 4H4.88889ZM11.1111 28.8889H7.55556V32.4444H11.1111V28.8889ZM4.88889 25.3333C4.39797 25.3333 4 25.7313 4 26.2222V35.1111C4 35.602 4.39797 36 4.88889 36H13.7778C14.2687 36 14.6667 35.602 14.6667 35.1111V26.2222C14.6667 25.7313 14.2687 25.3333 13.7778 25.3333H4.88889ZM28.8889 28.8889H32.4444V32.4444H28.8889V28.8889ZM25.3333 26.2222C25.3333 25.7313 25.7313 25.3333 26.2222 25.3333H35.1111C35.602 25.3333 36 25.7313 36 26.2222V35.1111C36 35.602 35.602 36 35.1111 36H26.2222C25.7313 36 25.3333 35.602 25.3333 35.1111V26.2222ZM32.4444 7.55556H28.8889V11.1111H32.4444V7.55556ZM26.2222 4C25.7313 4 25.3333 4.39797 25.3333 4.88889V13.7778C25.3333 14.2687 25.7313 14.6667 26.2222 14.6667H35.1111C35.602 14.6667 36 14.2687 36 13.7778V4.88889C36 4.39797 35.602 4 35.1111 4H26.2222ZM28.8889 18.2222H25.3333V21.7778H28.8889V18.2222ZM18.2222 25.3333H21.7778V28.8889H18.2222V25.3333ZM10.2222 10.2222H15.5556V15.5556H10.2222V10.2222ZM18.2222 32.4444H21.7778V36H18.2222V32.4444ZM36 18.2222H32.4444V21.7778H36V18.2222Z",
                fill: "white",
                "fill-opacity": "0.5"
            })))), ur("div", {
                ref: this.$refs.qrcodeCard,
                class: "game-card-qrcode txp_none"
            }, ur("div", {
                ref: this.$refs.codeTip,
                class: "game-card-qrcode-text"
            }, null === (d = this.props) || void 0 === d ? void 0 : d.qrcodeTip), ur("div", {
                ref: this.$refs.code,
                "data-acttype": ji.AD_ACTION_BUTTON,
                class: "game-card-qrcode-code"
            })))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    e !== o && (e ? Ht(t.$refs.container.value, "txp_none") : zt(t.$refs.container.value, "txp_none"))
                },
                icon_url: function(e, o) {
                    e !== o && (t.$refs.logo.value.src = e || "",
                    t.$refs.bgImg.value && (t.$refs.bgImg.value.src = e || ""))
                },
                name: function(e, o) {
                    e !== o && (t.$refs.name.value.innerText = e || "")
                },
                desc: function(e, o) {
                    e !== o && (t.$refs.desc.value.innerText = e || "")
                },
                btnText: function(e, o) {
                    e !== o && (t.$refs.btn.value.innerText = e || "")
                },
                qrcodeTip: function(e, o) {
                    e !== o && (t.$refs.codeTip.value.innerText = e || "微信扫一扫查看详情")
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp_btn_ad_volume{background:rgba(37,37,37,.7) url(https://ca.gtimg.com/adplugin/js/imgs/mutes.png) no-repeat;border:none;border-radius:14px;cursor:pointer;display:inline-block;height:28px;margin-left:8px;outline:none;-webkit-user-select:initial;-moz-user-select:initial;-ms-user-select:initial;user-select:auto;vertical-align:top;width:28px}.txp_btn_ad_mute{background-position-y:-28px}.txp_cac_black_screen{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-ms-flex-pack:center;background-color:#000;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;left:0;line-height:1.5;position:absolute;text-align:center;top:0;width:100%;z-index:1000}.txp_cac_black_screen .txp_cac_black_screen_title{color:#fff;font-size:16px;margin-bottom:15px;text-align:center}.txp_cac_black_screen .txp_cac_black_screen_em{color:#ff7000;display:inline}.txp_is_mobile .txp_ad_skip{background-color:rgba(0,0,0,.5);border-radius:14px;font-size:13px;height:26px;line-height:28px;overflow:hidden;padding:0 8px;position:absolute;right:12px;top:10px;vertical-align:top;white-space:nowrap}.txp_is_mobile .txp_ad_detail{bottom:8px;right:8px}.txp_is_mobile .txp_ad_detail .txp_ad_more{background-color:rgba(255,112,0,.75);border-radius:15px;font-size:14px;height:30px;padding:0 12px;text-decoration:none}.txp_is_mobile .txp_ad_detail .txp_ad_more txpdiv{line-height:30px}.txp_play_icon{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:10%}.txp_ad_detail,.txp_play_icon{pointer-events:auto;position:absolute}.txp_ad_detail{background-color:transparent;border-radius:8px;bottom:64px;height:34px;left:auto;overflow:hidden;right:10px;text-align:right;top:auto;z-index:10}.txp_ad_detail>*{text-align:left}.txp_ad_detail.txp_ad_active_normal{background-color:rgba(0,0,0,.8);height:124px;-webkit-transition:width .7s ease-in-out .8s,height .7s ease-in-out .8s,background-color 1s ease-in-out .6s;transition:width .7s ease-in-out .8s,height .7s ease-in-out .8s,background-color 1s ease-in-out .6s;width:340px}.txp_ad_detail.txp_ad_active_normal:hover{background-color:#000}.txp_ad_detail.txp_ad_active_normal .active_normal{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:10px;opacity:0}.txp_ad_detail.txp_ad_active_normal .active_normal .txp_ad_active_close{cursor:pointer;height:16px;line-height:8px;position:absolute;right:3px;top:3px;width:16px}.txp_ad_detail.txp_ad_active_normal .active_normal .txp_ad_active_close:hover img.hover{display:block}.txp_ad_detail.txp_ad_active_normal .active_normal .txp_ad_active_close img.hover,.txp_ad_detail.txp_ad_active_normal .active_normal .txp_ad_active_close:hover img.not-hover{display:none}.txp_ad_detail.txp_ad_active_normal .active_normal .content{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.txp_ad_detail.txp_ad_active_normal .active_normal .content .txp_ad_active_img{border-radius:4px;height:60px;margin-right:10px;overflow:hidden;width:60px}.txp_ad_detail.txp_ad_active_normal .active_normal .content .txp_ad_active_normal_text{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:14px;height:60px;justify-content:space-between;line-height:18px;width:240px}.txp_ad_detail.txp_ad_active_normal .active_normal .content .txp_ad_active_normal_text .vendor{font-size:12px;opacity:.5}.txp_ad_detail.txp_ad_active_normal .active_normal .txp_ad_more{opacity:1}.txp_ad_detail.txp_ad_active_scan{background-color:rgba(0,0,0,.8);height:207px;-webkit-transition:width .3s ease-in-out,height .3s ease-in-out;transition:width .3s ease-in-out,height .3s ease-in-out;width:162px}.txp_ad_detail.txp_ad_active_scan.has-transition{-webkit-transition:width .7s ease-in-out .8s,height .7s ease-in-out .8s,background-color 1s ease-in-out .6s;transition:width .7s ease-in-out .8s,height .7s ease-in-out .8s,background-color 1s ease-in-out .6s}.txp_ad_detail.txp_ad_active_scan.has-transition .qr-code{opacity:0}.txp_ad_detail.txp_ad_active_scan .active_scan{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;align-items:center;color:hsla(0,0%,100%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:12px;height:100%;justify-content:space-between;opacity:0;padding-bottom:15px;-webkit-transition:padding-bottom .3s ease-in-out;transition:padding-bottom .3s ease-in-out;width:100%}.txp_ad_detail.txp_ad_active_scan .active_scan .txp_ad_more{-webkit-box-pack:start;-ms-flex-pack:start;background-color:#000;border-radius:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:40px;justify-content:flex-start;line-height:40px;opacity:1;padding:0 9px;-webkit-transition:padding .3s ease-in-out,background .3s ease-in-out;transition:padding .3s ease-in-out,background .3s ease-in-out;width:100%}.txp_ad_detail.txp_ad_active_scan .active_scan .txp_ad_more txpdiv{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:left}.txp_ad_detail.txp_ad_active_scan .active_scan .txp_ad_more:hover{background-color:#000}.txp_ad_detail.txp_ad_active_scan .active_scan .item-icon{border-radius:2px;height:20px;margin-right:5px;min-width:20px;overflow:hidden;width:20px}.txp_ad_detail.txp_ad_active_scan .active_scan .item-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.txp_ad_detail.txp_ad_active_scan .active_scan .qr-code{background-color:#fff;border-radius:4px;height:110px;padding:4px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;width:110px}.txp_ad_detail.txp_ad_active_scan .active_scan .qr-code .code{height:100%;width:100%}.txp_ad_detail.txp_ad_active_scan .txp_ad_more:hover{background-color:#000}.txp_ad_detail.txp_ad_active_game{height:auto}.txp_ad_detail.txp_ad_active_game .txp_none{display:none!important}.txp_ad_detail.can-not-open a{cursor:default}.txp_ad_detail .txp_ad_more{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#fe5c38;border-radius:16px;bottom:unset;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:14px;height:34px;justify-content:center;left:auto;line-height:34px;opacity:0;padding:0 16px;pointer-events:auto;position:relative;right:unset;text-align:center;top:auto;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.txp_ad_detail .txp_ad_more:hover{background-color:#ff183e}.txp_ad_detail .txp_ad_more img{height:16px;margin-right:8px;width:16px}.txp_ad_detail .active_show{opacity:1!important;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.txp_ad_control{cursor:default;pointer-events:auto;position:absolute;right:10px;top:10px;z-index:2}.txp_ad_control .txp_ad_skip{border-radius:12px;padding:0 12px}.txp_ad_control .txp_ad_skip .txp_ad_countdown{color:#fe5c38;font-size:12px}.plugin_ctrl--large .txp_ad_detail{bottom:104px}.txp_autohide .txp_ad_detail{bottom:10px}.txp_autohide .txp_ad_more{bottom:unset}.cant-open-toast{background-color:rgba(0,0,0,.9);border-radius:20px;color:#fff;font-size:14px;height:40px;left:50%;line-height:40px;padding:0 20px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition),.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition),.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition){height:219px;width:170px}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan{padding-bottom:8px}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan .txp_ad_more,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan .txp_ad_more,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .active_scan .txp_ad_more{background:transparent;padding:0 20px}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .qr-code,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .qr-code,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition) .qr-code{-webkit-transform:scale(1.27);transform:scale(1.27)}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover{height:292px;width:240px}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .active_scan,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .active_scan,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .active_scan{padding-bottom:15px}.txp-post-ad[data-mode=default].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .qr-code,.txp-post-ad[data-mode=size_1110_624].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .qr-code,.txp-post-ad[data-mode=size_1920_1080].txp_ad:hover .txp_ad_active_scan:not(.has-transition):hover .qr-code{-webkit-transform:scale(1.82);transform:scale(1.82)}.txp-post-ad.txp_ad[data-mode=size_590_328] .txp_ad_detail.txp_ad_active_scan,.txp-post-ad.txp_ad[data-mode=size_590_328]>.txp_ad_inner>.txp_ad_detail>.txp_ad_more{-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad[data-mode=size_480_270] .txp_ad_detail.txp_ad_active_scan{-webkit-transform:scale(.6763);transform:scale(.6763);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad[data-mode=size_480_270] .txp_ad_detail.txp_ad_active_normal{-webkit-transform:scale(.5882);transform:scale(.5882);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad[data-mode=size_480_270]>.txp_ad_inner>.txp_ad_detail>.txp_ad_more{-webkit-transform:scale(.8235);transform:scale(.8235);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_normal,.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad.simple-mode>.txp_ad_inner>.txp_ad_detail>.txp_ad_more{-webkit-transform:scale(.5882);transform:scale(.5882);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail,.txp-post-ad.txp_ad.simple-mode .txp_autohide .txp_ad_detail{bottom:12px}.txp-post-ad.txp_ad.simple-mode .txp_ad_control{left:12px;position:absolute;right:12px;top:12px}.txp-post-ad.txp_ad.simple-mode .simple-mode_countdown{border-radius:23px;color:#fe5c38;font-size:12px;height:23px;left:0;padding:10px}.txp-post-ad.txp_ad.simple-mode .simple-mode_countdown,.txp-post-ad.txp_ad.simple-mode .simple-mode_skip{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,.4);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.txp-post-ad.txp_ad.simple-mode .simple-mode_skip{border-radius:2px;font-size:10px;height:18px;padding:3px;right:0}.txp-post-ad.txp_ad.simple-mode .simple-mode_skip .txp_btn_close{height:8px;width:8px}.txp-post-ad.txp_ad.simple-mode .simple-mode_skip .txp_btn_close:before{height:8px;top:1px;width:8px}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan{background-color:rgba(0,0,0,.4);border-radius:4px;height:88px;width:74px}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan>.txp_ad_more{bottom:0;position:absolute}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan .active_scan{color:#fff;font-size:8px}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan .active_scan>.txp_ad_more{display:none}.txp-post-ad.txp_ad.simple-mode .txp_ad_detail.txp_ad_active_scan .active_scan .qr-code{border-radius:4px;height:62px;margin:6px auto 5px;padding:4px;width:62px}");
    var Ln, Pn, Dn, Nn = er("video"), On = {
        layer: Nn("layer"),
        videoContainer: Nn("container"),
        videoAdInner: Nn("inner"),
        videoAdContainer: Nn("ad-container"),
        videoAdControl: Nn("ad-control"),
        videoCountdown: Nn("countdown"),
        videoCloseBtn: Nn("close-btn"),
        videoSkipText: Nn("skip-text"),
        videoNoSkipBtn: Nn("no-skip-btn"),
        videoDetail: Nn("detail"),
        videoDetailBtn: Nn("detail-btn"),
        videoDetailBtnText: Nn("detail-btn-text"),
        activeNormalVideoDetail: Nn("active-normal-video-detail"),
        activeNormalVideoDetailCloseBtn: Nn("active-normal-video-detail-close-btn"),
        activeNormalVideoDetailItemImg: Nn("active-normal-video-detail-item-img"),
        activeNormalVideoDetailItemDesc: Nn("active-normal-video-detail-item-desc"),
        activeNormalVideoDetailItemName: Nn("active-normal-video-detail-item-name"),
        activeNormalVideoDetailBtn: Nn("active-normal-video-detail-btn"),
        activeNormalVideoDetailBtnText: Nn("active-normal-video-detail-btn-text"),
        activeScanVideoDetail: Nn("active-scan-video-detail"),
        activeScanVideoDetailBtn: Nn("active-scan-video-detail-btn"),
        activeScanVideoDetailBtnText: Nn("active-scan-video-detail-btn-text"),
        activeScanVideoDetailBtnImg: Nn("active-scan-video-detail-btn-img"),
        activeScanVideoDetailQrCode: Nn("active-scan-video-detail-qr-code"),
        activeScanVideoDetailQrCodeText: Nn("active-scan-video-detail-qr-code-text"),
        cantOpenToast: Nn("active-cant-open-toast"),
        activeScanCanOpenArrow: Nn("active-can-open-arrow"),
        gameDetail: Nn("game-detail"),
        videoLinkArea: Nn("link-area"),
        videoVolumeBtn: Nn("volume-btn"),
        videoNoSkipDialog: Nn("no-skip-dialog"),
        videoNoSkipAuthor: Nn("no-skip-author"),
        videoNoSkipKnowBtn: Nn("no-skip-know-btn"),
        videoNoSkipCloseBtn: Nn("no-skip-close-btn"),
        videoDspNameText: Nn("dsp-name-text"),
        videoBlackScreen: Nn("black-screen"),
        videoBlackScreenCount: Nn("black-screen-count"),
        centerQrcode: Nn("center-qrcode"),
        simpleModeCountdown: Nn("simple-mode-countdown"),
        simpleModeSkip: Nn("simple-mode-skip")
    };
    !function(t) {
        t.VIDEO_SKIP_TEXT_CLICK = "VIDEO_SKIP_TEXT_CLICK",
        t.VIDEO_CLOSE_BUTTON_CLICK = "VIDEO_CLOSE_BUTTON_CLICK",
        t.VIDEO_NO_SKIP_CLOSE_BUTTON_CLICK = "VIDEO_NO_SKIP_CLOSE_BUTTON_CLICK",
        t.VIDEO_NO_SKIP_KNOW_BUTTON_CLICK = "VIDEO_NO_SKIP_KNOW_BUTTON_CLICK",
        t.VIDEO_NO_SKIP_BUTTON_CLICK = "VIDEO_NO_SKIP_BUTTON_CLICK",
        t.VIDEO_LINK_AREA_CLICK = "VIDEO_LINK_AREA_CLICK",
        t.VIDEO_DETAIL_BUTTON_CLICK = "VIDEO_DETAIL_BUTTON_CLICK",
        t.VIDEO_VOLUME_BUTTON_CLICK = "VIDEO_VOLUME_BUTTON_CLICK",
        t.VIDEO_PLAY_ICON_CLICK = "VIDEO_PLAY_ICON_CLICK",
        t.ACTIVE_SCAN_DETAIL_BUTTON_CLICK = "ACTIVE_SCAN_DETAIL_BUTTON_CLICK",
        t.CENTER_QRCODE_CLOSE_BUTTON_CLICK = "CENTER_QRCODE_CLOSE_BUTTON_CLICK"
    }(Ln || (Ln = {})),
    function(t) {
        t[t.NORMAL = 0] = "NORMAL",
        t[t.WARNER = 1] = "WARNER",
        t[t.COPYRIGHT = 2] = "COPYRIGHT"
    }(Pn || (Pn = {})),
    function(t) {
        t.NORMAL = "Normal",
        t.SCAN = "Scan",
        t.GAME = "Game"
    }(Dn || (Dn = {}));
    var Sn, Rn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = On,
            e.activeType = null,
            e.hasUnfoldActiveDetail = !1,
            e.handleCtrlBarShow = function() {
                Ht(e.$domNodes.videoAdInner, "txp_autohide")
            }
            ,
            e.handleCtrlBarHide = function() {
                zt(e.$domNodes.videoAdInner, "txp_autohide")
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.init = function() {
            t.prototype.init.call(this),
            this.adCore.config.isMobile && zt(this.$domNodes.videoContainer, "txp_is_mobile"),
            Bt(this.$domNodes.layer, {
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                zIndex: "5",
                pointerEvents: "none"
            }),
            this.bindOwnEvent()
        }
        ,
        e.prototype.destroy = function() {
            this.unbindOwnEvent(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.on = function(t, e) {
            this.eventEmitter.on(t, e)
        }
        ,
        e.prototype.off = function(t, e) {
            this.eventEmitter.off(t, e)
        }
        ,
        e.prototype.updateVideoContainerSize = function(t, e) {
            Bt(this.$domNodes.videoContainer, {
                width: t,
                height: e
            })
        }
        ,
        e.prototype.setVideoAdInnerVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoAdInner, t)
        }
        ,
        e.prototype.setVideoAdControlVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoAdControl, t)
        }
        ,
        e.prototype.setVideoLayerVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoContainer, t),
            t && this.resize()
        }
        ,
        e.prototype.adjustVideoAdControl = function(t) {
            t && (this.$domNodes.videoAdControl && Bt(this.$domNodes.videoAdControl, "top", t.top),
            this.$domNodes.videoDetail && Bt(this.$domNodes.videoDetail, "bottom", t.bottom))
        }
        ,
        e.prototype.setVideoAdLayerVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoAdContainer, t),
            t && this.resize()
        }
        ,
        e.prototype.updateVideoDSP = function(t) {
            t ? (Yt(this.$domNodes.videoDspNameText, t),
            Kt(this.$domNodes.videoDspNameText)) : (Yt(this.$domNodes.videoDspNameText, ""),
            $t(this.$domNodes.videoDspNameText))
        }
        ,
        e.prototype.setLinkAreaVisible = function(t) {
            this.$domNodes.videoLinkArea && (this.adCore.config.isMobile || Bt(this.$domNodes.videoLinkArea, "cursor", t ? "pointer" : "auto"))
        }
        ,
        e.prototype.showVideoForbidSkipAd = function(t) {
            t === Pn.COPYRIGHT ? (Yt(this.$domNodes.videoNoSkipAuthor, "内容方"),
            Yt(this.$domNodes.videoSkipText, "应内容方要求，VIP无法免该片广告"),
            Kt(this.$domNodes.videoSkipText),
            Kt(this.$domNodes.videoNoSkipBtn)) : t === Pn.WARNER && (Yt(this.$domNodes.videoNoSkipAuthor, "版权方（华纳）"),
            Yt(this.$domNodes.videoSkipText, "应版权方要求，VIP无法免该片广告"),
            Kt(this.$domNodes.videoSkipText),
            Kt(this.$domNodes.videoNoSkipBtn)),
            Kt(this.$domNodes.videoNoSkipCloseBtn),
            Kt(this.$domNodes.videoNoSkipKnowBtn)
        }
        ,
        e.prototype.updateCloseButton = function(t) {
            var e = this.$domNodes.videoCloseBtn
              , o = this.$domNodes.videoSkipText;
            t.show ? (Kt(e),
            Kt(o)) : ($t(e),
            $t(o)),
            void 0 !== t.text && Yt(o, t.text)
        }
        ,
        e.prototype.updateActionButton = function(t) {
            t.btnText && (Yt(this.$domNodes.videoDetailBtnText, t.btnText),
            Bt(this.$domNodes.videoDetailBtn, {
                color: t.textColor,
                backgroundColor: t.bgColor
            }))
        }
        ,
        e.prototype.updateActionPicture = function(t) {
            this.adCore.config.simpleMode || (this.activeType && this.foldActiveDetail(),
            this.activeType = Dn.NORMAL,
            Yt(this.$domNodes.activeNormalVideoDetailBtnText, t.btnText),
            Vt(this.$domNodes.activeNormalVideoDetailItemImg, "src", t.icon_url),
            Yt(this.$domNodes.activeNormalVideoDetailItemDesc, t.description),
            Yt(this.$domNodes.activeNormalVideoDetailItemName, t.name))
        }
        ,
        e.prototype.updateActionQrcode = function(t) {
            var e = this;
            if (this.activeType && this.foldActiveDetail(),
            !this.adCore.config.simpleMode && [E.CARD_BACKGROUND, E.CARD_NO_BACKGROUND].includes(t.mini_game_ui_type))
                return this.activeType = Dn.GAME,
                $t(this.$domNodes.activeScanVideoDetail),
                this.gameCard || (this.gameCard = new wn({
                    visible: !0,
                    canAnim: !0,
                    icon_url: t.icon_url,
                    name: t.name,
                    desc: t.description,
                    btnText: t.btnText,
                    qrcodeTip: t.qrcodeTips || "微信扫一扫查看详情",
                    hasBg: t.mini_game_ui_type === E.CARD_BACKGROUND,
                    renderQrCode: function(t, o, i) {
                        e.renderQrCode(t, o, i)
                    },
                    onClick: function(t) {
                        e.emit(Ln.VIDEO_DETAIL_BUTTON_CLICK, {
                            actionType: t
                        })
                    }
                }),
                this.gameCard.mount(this.$domNodes.gameDetail)),
                void (t.qrcodeUrl && this.gameCard.renderQrCode(me(t.qrcodeUrl, {
                    act: "1025"
                })));
            this.activeType = Dn.SCAN,
            Yt(this.$domNodes.videoDetailBtnText, t.btnText),
            Yt(this.$domNodes.activeScanVideoDetailBtnText, t.name),
            Vt(this.$domNodes.activeScanVideoDetailBtnImg, "src", t.icon_url),
            Yt(this.$domNodes.activeScanVideoDetailQrCodeText, this.adCore.config.simpleMode ? "扫一扫查看详情" : t.qrcodeTips),
            t.qrcodeUrl && this.renderQrCode(this.$domNodes.activeScanVideoDetailQrCode, me(t.qrcodeUrl, {
                act: "1025"
            }), 102)
        }
        ,
        e.prototype.updateCenterQrcode = function(t) {
            var e = this;
            this.centerCode || (this.centerCode = new Tn({
                visible: !0,
                onClose: function() {
                    e.emit(Ln.CENTER_QRCODE_CLOSE_BUTTON_CLICK)
                },
                renderQrCode: function(t, o, i) {
                    e.renderQrCode(t, me(o, {
                        act: "1026"
                    }), i)
                }
            }),
            this.centerCode.mount(this.$domNodes.centerQrcode)),
            this.centerCode.setState({
                name: t.name,
                qrcodeUrl: t.qrcodeUrl,
                qrcodeTips: t.qrcodeTips,
                iconUrl: t.icon_url
            }),
            this.resize()
        }
        ,
        e.prototype.resize = function() {
            var t;
            if (this.$domNodes.videoContainer) {
                var e = {
                    width: this.$domNodes.videoContainer.offsetWidth,
                    height: this.$domNodes.videoContainer.offsetHeight
                };
                null === (t = this.centerCode) || void 0 === t || t.resize(e);
                var o = mr(e);
                this.playerMode !== o && (this.playerMode = o,
                this.$domNodes.videoContainer.setAttribute("data-mode", this.playerMode))
            }
        }
        ,
        e.prototype.setScanCanOpenVisible = function(t) {
            t ? (Kt(this.$domNodes.activeScanCanOpenArrow),
            this.setLinkAreaVisible(!0),
            Ht(this.$domNodes.videoDetail, "can-not-open")) : ($t(this.$domNodes.activeScanCanOpenArrow),
            this.setLinkAreaVisible(!1),
            zt(this.$domNodes.videoDetail, "can-not-open"))
        }
        ,
        e.prototype.setVideoDetailVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoDetail, t)
        }
        ,
        e.prototype.updateTrueview = function(t) {
            var e;
            if (t.showCloseButton || [3, 2020, 3012].includes(null !== (e = this.adCore.config.playerData.playerChid) && void 0 !== e ? e : 0)) {
                var o = t.countdown;
                o > 0 ? (Yt(this.$domNodes.videoSkipText, t.skipAdTitle.replace("__second__", "".concat(o))),
                Kt(this.$domNodes.videoSkipText),
                $t(this.$domNodes.videoCloseBtn)) : (Yt(this.$domNodes.videoSkipText, t.skipAdSubTitle),
                Kt(this.$domNodes.videoSkipText),
                Kt(this.$domNodes.videoCloseBtn))
            } else
                $t(this.$domNodes.videoSkipText)
        }
        ,
        e.prototype.updateVideoVolumeBtn = function(t) {
            $t(this.$domNodes.videoVolumeBtn),
            t ? zt(this.$domNodes.videoVolumeBtn, "txp_btn_ad_mute") : Ht(this.$domNodes.videoVolumeBtn, "txp_btn_ad_mute")
        }
        ,
        e.prototype.unfoldActiveDetail = function(t) {
            var e = this;
            if (void 0 === t && (t = this.activeType),
            t && !this.hasUnfoldActiveDetail) {
                this.hasUnfoldActiveDetail = !0;
                var o = this.getActiveDetailConfig(t);
                zt(this.$domNodes.videoDetail, "".concat(o.videoDetailClass, " has-transition")),
                this.$domNodes.videoDetailBtn && (this.$domNodes.videoDetailBtn.className = "txp_ad_more"),
                setTimeout((function() {
                    var i;
                    $t(e.$domNodes.videoDetailBtn),
                    Kt(o.videoDetailDom),
                    t === Dn.GAME && (null === (i = e.gameCard) || void 0 === i || i.show())
                }
                ), 500),
                setTimeout((function() {
                    zt(o.videoDetailDom, "active_show"),
                    Ht(e.$domNodes.videoDetail, "has-transition")
                }
                ), 1500)
            }
        }
        ,
        e.prototype.foldActiveDetail = function(t) {
            var e;
            if (void 0 === t && (t = this.activeType),
            t) {
                this.hasUnfoldActiveDetail = !1;
                var o = this.getActiveDetailConfig(t);
                this.$domNodes.videoDetail && (this.$domNodes.videoDetail.className = "txp_ad_detail"),
                Ht(this.$domNodes.videoDetail, o.videoDetailClass),
                $t(o.videoDetailDom),
                Ht(o.videoDetailDom, "active_show"),
                this.$domNodes.videoDetailBtn && (this.$domNodes.videoDetailBtn.className = "txp_ad_more active_show"),
                t === Dn.GAME && (null === (e = this.gameCard) || void 0 === e || e.hide()),
                this.activeType = null
            }
        }
        ,
        e.prototype.showCantOpenToast = function() {
            var t = this;
            Kt(this.$domNodes.cantOpenToast),
            setTimeout((function() {
                $t(t.$domNodes.cantOpenToast)
            }
            ), 2e3)
        }
        ,
        e.prototype.setCenterQrcodeVisible = function(t) {
            this.adCore.config.simpleMode || (this.setDomVisible(this.$domNodes.videoDetail, !t),
            this.setDomVisible(this.$domNodes.centerQrcode, t))
        }
        ,
        e.prototype.resetVideoUI = function(t) {
            var e = [this.$domNodes.videoCountdown, this.$domNodes.videoCloseBtn, this.$domNodes.videoSkipText, this.$domNodes.videoAdControl, this.$domNodes.videoNoSkipBtn, this.$domNodes.videoNoSkipDialog, this.$domNodes.videoNoSkipKnowBtn, this.$domNodes.videoNoSkipCloseBtn, this.$domNodes.centerQrcode];
            t && e.push(this.$domNodes.videoContainer, this.$domNodes.videoAdContainer),
            e.forEach((function(t) {
                $t(t)
            }
            )),
            Yt(this.$domNodes.videoSkipText, ""),
            Yt(this.$domNodes.activeScanVideoDetailQrCodeText, "微信扫码查看更多"),
            this.activeType && this.foldActiveDetail(),
            this.gameCard && (this.gameCard.destroy(),
            this.gameCard = void 0)
        }
        ,
        e.prototype.updateVideoCountdown = function(t) {
            this.adCore.config.simpleMode ? Ft(this.$domNodes.simpleModeCountdown, t) : this.adCore.config.showCloseButton ? Ft(this.$domNodes.videoCountdown, t) : Ft(this.$domNodes.videoCountdown, '<span style="color:#fff;">广告剩余: </span><span>'.concat(t, '</span><span style="color:#fff;">秒</span><style>.txp_ad_countdown:after{display:none}</style>'))
        }
        ,
        e.prototype.setVideoCountdownVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoCountdown, t)
        }
        ,
        e.prototype.setNoSkipDialogVisible = function(t) {
            this.setDomVisible(this.$domNodes.videoNoSkipDialog, t)
        }
        ,
        e.prototype.setVideoBlackScreenVisible = function(t) {
            t && this.setDomVisible(this.$domNodes.videoContainer, !0),
            this.setDomVisible(this.$domNodes.videoBlackScreen, !0)
        }
        ,
        e.prototype.updateVideoBlackScreen = function(t) {
            Yt(this.$domNodes.videoBlackScreenCount, t)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <txpdiv data-role="'.concat(this.roleMap.videoContainer, '"class="txp-post-ad txp_ad ').concat(this.adCore.config.simpleMode ? "simple-mode" : "", ' txp_none" style="width: 100%; height: 100%; background-color: #000;">\n        \x3c!-- 广告 video 标签容器--\x3e\n        <txpdiv\n          data-role="').concat(this.roleMap.videoAdContainer, '"\n          style="width: 100%; height: 100%; position: relative; background-color: #000"\n        ></txpdiv>\n        \x3c!-- 拦截黑屏 --\x3e\n        <txp data-role="').concat(this.roleMap.videoBlackScreen, '" class="txp_cac_black_screen txp_none">\n          <txp class="txp_cac_black_screen_title">\n            广告被拦截插件误伤啦，\n            <txp data-role="').concat(this.roleMap.videoBlackScreenCount, '" class="txp_cac_black_screen_em">1</txp>\n            秒后播放\n          </txp>\n          <txp>关闭拦截插件恢复正常</txp>\n        </txp>\n    \n        \x3c!-- 内部区域 --\x3e\n        <txpdiv data-role="').concat(this.roleMap.videoAdInner, '" class="txp_ad_inner txp_none">\n          \x3c!-- 广告点击区域 --\x3e\n          <a data-role="').concat(this.roleMap.videoLinkArea, '" href="javascript:;" class="txp_creative_link"></a>\n    \n          \x3c!-- 不能打开落地页toast提示 --\x3e\n          <txpdiv data-role="').concat(this.roleMap.cantOpenToast, '" class="cant-open-toast txp_none">暂不支持打开，请用微信扫码浏览</txpdiv>\n    \n          \x3c!-- 居中展示的二维码 --\x3e\n          <txpdiv data-role="').concat(this.roleMap.centerQrcode, '" class="txp_none center-qrcode"></txpdiv>\n    \n          \x3c!-- 详情点击 --\x3e\n          <txpdiv data-role="').concat(this.roleMap.videoDetail, '" class="txp_ad_detail">\n            \x3c!-- 竞价内容 --\x3e\n            \x3c!-- 普通竞价 --\x3e\n            <txpdiv data-role="').concat(this.roleMap.activeNormalVideoDetail, '" class="active_normal txp_none">\n              \x3c!-- 关闭按钮 --\x3e\n              <txpdiv data-role="').concat(this.roleMap.activeNormalVideoDetailCloseBtn, '" class="txp_ad_active_close">\n                <img\n                  class="not-hover"\n                  src="').concat(nr, '"\n                  alt=""\n                />\n                <img\n                  class="hover"\n                  src="').concat(ar, '"\n                  alt=""\n                />\n              </txpdiv>\n              <txpdiv class="content">\n                \x3c!-- 图片 --\x3e\n                <txpdiv class="txp_ad_active_img"><img data-role="').concat(this.roleMap.activeNormalVideoDetailItemImg, '" /></txpdiv>\n                \x3c!-- 文本 --\x3e\n                <txpdiv class="txp_ad_active_normal_text">\n                  \x3c!-- 描述 --\x3e\n                  <txpdiv class="desc" data-role="').concat(this.roleMap.activeNormalVideoDetailItemDesc, '"></txpdiv>\n                  \x3c!-- 厂商 --\x3e\n                  <txpdiv class="vendor">\n                    <span data-role="').concat(this.roleMap.activeNormalVideoDetailItemName, '"></span>\n                  </txpdiv>\n                </txpdiv>\n              </txpdiv>\n              <a data-role="').concat(this.roleMap.activeNormalVideoDetailBtn, '" class="txp_ad_more" href="javascript:;">\n                <img\n                  src="').concat(or, '"\n                  alt=""\n                />\n                <txpdiv data-role="').concat(this.roleMap.activeNormalVideoDetailBtnText, '"></txpdiv>\n              </a>\n            </txpdiv>\n            \x3c!-- 扫码竞价 --\x3e\n            <txpdiv data-role="').concat(this.roleMap.activeScanVideoDetail, '" class="active_scan txp_none">\n              \x3c!-- 跳转按钮 --\x3e\n              <a data-role="').concat(this.roleMap.activeScanVideoDetailBtn, '" class="txp_ad_more" href="javascript:;">\n                <img data-role="').concat(this.roleMap.activeScanVideoDetailBtnImg, '" class="item-icon" alt="" />\n                <txpdiv data-role="').concat(this.roleMap.activeScanVideoDetailBtnText, '" class="item-text"></txpdiv>\n                <img\n                  data-role="').concat(this.roleMap.activeScanCanOpenArrow, '"\n                  src="').concat(rr, '"\n                  style="margin: 0"\n                  alt=""\n                />\n              </a>\n              \x3c!-- 二维码 --\x3e\n              <txpdiv class="qr-code"><txpdiv data-role="').concat(this.roleMap.activeScanVideoDetailQrCode, '" class="code"></txpdiv></txpdiv>\n              <txpdiv class="text" data-role="').concat(this.roleMap.activeScanVideoDetailQrCodeText, '">微信扫码查看更多</txpdiv>\n            </txpdiv>\n            \x3c!-- 小游戏样式 --\x3e\n            <div data-role="').concat(this.roleMap.gameDetail, '" class="game_detail txp_none">\n            </div>\n            \x3c!-- 单按钮 --\x3e\n            <a data-role="').concat(this.roleMap.videoDetailBtn, '" class="txp_ad_more active_show" href="javascript:;">\n              <img\n                src="').concat(or, '"\n                alt=""\n              />\n              <txpdiv data-role="').concat(this.roleMap.videoDetailBtnText, '"></txpdiv>\n            </a>\n          </txpdiv>\n    \n          \x3c!-- 底部介绍 --\x3e\n          <txpdiv\n            data-role="').concat(this.roleMap.videoDspNameText, '"\n            style="\n              left: 10px;\n              bottom: 10px;\n              position: absolute;\n              opacity: 0.6;\n              font-size: 12px;\n              text-shadow: 2px 2px #000;\n            "\n          ></txpdiv>\n    \n          \x3c!-- 无法跳过广告按钮 --\x3e\n          <txpdiv class="txp_ad_control" data-role="').concat(this.roleMap.videoAdControl, '">\n            ').concat(this.adCore.config.simpleMode ? '\n              <div class="simple-mode_countdown">\n                <span style="margin-right: 2px;color: #fff;">广告</span> \n                <span data-role="'.concat(this.roleMap.simpleModeCountdown, '"></span>\n              </div>\n              <div data-role="').concat(this.roleMap.simpleModeSkip, '" class="simple-mode_skip">\n                广告\n                <div data-role="').concat(this.roleMap.videoCloseBtn, '" class="txp_btn txp_btn_close"></div>\n              </div>\n            ') : '\n              <txpdiv class="txp_ad_skip">\n                \x3c!-- 倒计时 --\x3e\n                <txpdiv data-role="'.concat(this.roleMap.videoCountdown, '" class="txp_ad_countdown"></txpdiv>\n      \n                \x3c!-- 跳过广告文案或者进入广告文案 --\x3e\n                <txpdiv\n                  data-role="').concat(this.roleMap.videoSkipText, '"\n                  class="txp_ad_skip_text"\n                  style="cursor: pointer"\n                ></txpdiv>\n      \n                \x3c!-- 关闭广告按钮 --\x3e\n                <button data-role="').concat(this.roleMap.videoCloseBtn, '" class="txp_btn txp_btn_close"></button>\n      \n                \x3c!-- 无法免广告说明 --\x3e\n                <button\n                  data-role="').concat(this.roleMap.videoNoSkipBtn, '"\n                  class="txp_btn txp_btn_hint"\n                  title="无法跳过广告说明"\n                ></button>\n              </txpdiv>\n              <button\n                data-role="').concat(this.roleMap.videoVolumeBtn, '"\n                class="txp_btn txp_btn_ad_volume txp_none"\n                style="z-index: 10; position: relative"\n              ></button>\n            '), '\n          </txpdiv>\n    \n          \x3c!-- 无法免广告弹窗说明 --\x3e\n          <txpdiv data-role="').concat(this.roleMap.videoNoSkipDialog, '" class="txp_ad_dialog txp_none">\n            <txpdiv class="txp_dialog_bd"> 无法关闭广告……继续争取广告权益…… </txpdiv>\n            <txpdiv data-role="').concat(this.roleMap.videoNoSkipKnowBtn, '" class="txp_ad_btn">我知道了!</txpdiv>\n            <a class="txp_ad_fb" target="_blank" href="http://support.qq.com/write.shtml?fid=850">\n              意见反馈\n            </a>\n            <button data-role="').concat(this.roleMap.videoNoSkipCloseBtn, '" class="txp_btn txp_btn_close"></button>\n          </txpdiv>\n        </txpdiv>\n      </txpdiv>\n    ')
        }
        ,
        e.prototype.getDomEvents = function() {
            var t = this;
            return [this.forwardDomEvent(this.$domNodes.videoSkipText, Ln.VIDEO_SKIP_TEXT_CLICK), this.forwardDomEvent(this.$domNodes.simpleModeSkip, Ln.VIDEO_SKIP_TEXT_CLICK), this.forwardDomEvent(this.$domNodes.videoCloseBtn, Ln.VIDEO_CLOSE_BUTTON_CLICK, Ji.CLICK, !0), this.forwardDomEvent(this.$domNodes.videoNoSkipBtn, Ln.VIDEO_NO_SKIP_BUTTON_CLICK), this.forwardDomEvent(this.$domNodes.videoNoSkipCloseBtn, Ln.VIDEO_NO_SKIP_CLOSE_BUTTON_CLICK), this.forwardDomEvent(this.$domNodes.videoNoSkipKnowBtn, Ln.VIDEO_NO_SKIP_KNOW_BUTTON_CLICK), {
                el: this.$domNodes.videoLinkArea,
                eventName: Ji.CLICK,
                listener: function(e) {
                    t.emit(Ln.VIDEO_LINK_AREA_CLICK, {
                        target: e.target,
                        actionType: ji.AD_VIEW_AREA
                    })
                }
            }, this.forwardActionTypeDomEvent(this.$domNodes.videoDetailBtn, ji.AD_ACTION_BUTTON, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeNormalVideoDetailBtn, ji.AD_ACTION_BUTTON, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeScanVideoDetailBtn, ji.ADVERTISER_NAME, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeScanVideoDetailBtnImg, ji.ADVERTISER_LOGO, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeNormalVideoDetailItemName, ji.ADVERTISER_NAME, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeNormalVideoDetailItemImg, ji.ADVERTISER_LOGO, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeNormalVideoDetailItemDesc, ji.AD_TITLE, !0), this.forwardActionTypeDomEvent(this.$domNodes.activeNormalVideoDetail, ji.AD_DETAIL, !0), this.forwardActionTypeDomEvent(this.$domNodes.videoDetail, ji.AD_DETAIL), this.forwardDomEvent(this.$domNodes.videoVolumeBtn, Ln.VIDEO_VOLUME_BUTTON_CLICK), this.forwardDomEvent(this.$domNodes.activeScanVideoDetail, Ln.ACTIVE_SCAN_DETAIL_BUTTON_CLICK), {
                el: this.$domNodes.activeNormalVideoDetailCloseBtn,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.stopPropagation(),
                    t.foldActiveDetail()
                }
            }, this.forwardActionTypeDomEvent(this.$domNodes.activeScanVideoDetailQrCode, ji.AD_ACTION_BUTTON, !0)]
        }
        ,
        e.prototype.forwardActionTypeDomEvent = function(t, e, o) {
            var i = this;
            return {
                el: t,
                eventName: Ji.CLICK,
                listener: function(t) {
                    o && t.stopPropagation(),
                    i.emit(Ln.VIDEO_DETAIL_BUTTON_CLICK, {
                        target: t.target,
                        actionType: e
                    })
                }
            }
        }
        ,
        e.prototype.renderQrCode = function(t, e, o) {
            return this.adCore.config.renderQrCode(t, e, o)
        }
        ,
        e.prototype.getActiveDetailConfig = function(t) {
            return t === Dn.SCAN ? {
                videoDetailClass: "txp_ad_active_scan",
                videoDetailDom: this.$domNodes.activeScanVideoDetail
            } : t === Dn.GAME ? {
                videoDetailClass: "txp_ad_active_game",
                videoDetailDom: this.$domNodes.gameDetail
            } : {
                videoDetailClass: "txp_ad_active_normal",
                videoDetailDom: this.$domNodes.activeNormalVideoDetail
            }
        }
        ,
        e.prototype.bindOwnEvent = function() {
            this.adCore.outerEvent.on(fi.CTRL_SHOW, this.handleCtrlBarShow),
            this.adCore.outerEvent.on(fi.CTRL_HIDE, this.handleCtrlBarHide)
        }
        ,
        e.prototype.unbindOwnEvent = function() {
            this.adCore.outerEvent.off(fi.CTRL_SHOW, this.handleCtrlBarShow),
            this.adCore.outerEvent.off(fi.CTRL_HIDE, this.handleCtrlBarHide)
        }
        ,
        e
    }(sr), kn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handleVideoSkipTextClick = function() {
                var t;
                e.videoCountdown.canSkipClose && (e.handleClose(),
                Xt(M.FEEDBACK, null === (t = e.adInterface.data.currentAdInfo) || void 0 === t ? void 0 : t.frequencyControlConfig))
            }
            ,
            e.handleVideoCloseButtonClick = function() {
                var t;
                e.handleClose(),
                Xt(M.FEEDBACK, null === (t = e.adInterface.data.currentAdInfo) || void 0 === t ? void 0 : t.frequencyControlConfig)
            }
            ,
            e.handleVideoLinkAreaClick = function(t) {
                var o = t.actionType
                  , i = e.adInterface.data.currentAdInfo;
                (null == i ? void 0 : i.isFullscreenClick) && e.handleDetail(o)
            }
            ,
            e.handleVideoDetailButtonClick = function(t) {
                var o = t.actionType;
                e.handleDetail(o)
            }
            ,
            e.handleVideoNoSkipButtonClick = function() {
                e.handleToggleNoSkipDialog(!0)
            }
            ,
            e.handleVideoNoSkipKnowButtonClick = function() {
                e.handleToggleNoSkipDialog(!1)
            }
            ,
            e.handleVideoNoSkipCloseButtonClick = function() {
                e.handleToggleNoSkipDialog(!1)
            }
            ,
            e.handleVideoVolumeButtonClick = function() {
                var t;
                e.adInterface.data.isMute = !e.adInterface.data.isMute,
                e.adInterface.data.isMute ? e.playerService.setVolume(0) : e.playerService.setVolume(Math.min(100, Math.max(0, null !== (t = e.adCore.config.outerPlayerData.volume) && void 0 !== t ? t : 1))),
                e.videoUI.updateVideoVolumeBtn(e.adInterface.data.isMute)
            }
            ,
            e.handleVideoPlayIconClick = function() {
                e.adInterface.resume()
            }
            ,
            e.handleActiveScanDetailButtonClick = function() {}
            ,
            e.handleCenterQrcodeButtonClick = function() {
                e.adInterface.resume()
            }
            ,
            e.toggleCountdownVisible = function(t) {
                e.adInterface.data.countdownVisible = t.data,
                e.videoUI.setVideoAdControlVisible(t.data)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.destroy = function() {
            this.unbindVideoUIEvent()
        }
        ,
        e.prototype.unbindVideoUIEvent = function() {
            this.forEachEvent(bi.unbind)
        }
        ,
        e.prototype.bindVideoUIEvent = function() {
            this.forEachEvent(bi.bind)
        }
        ,
        e.prototype.forEachEvent = function(t) {
            this.videoUI[t](Ln.VIDEO_SKIP_TEXT_CLICK, this.handleVideoSkipTextClick),
            this.videoUI[t](Ln.VIDEO_CLOSE_BUTTON_CLICK, this.handleVideoCloseButtonClick),
            this.videoUI[t](Ln.VIDEO_LINK_AREA_CLICK, this.handleVideoLinkAreaClick),
            this.videoUI[t](Ln.VIDEO_DETAIL_BUTTON_CLICK, this.handleVideoDetailButtonClick),
            this.videoUI[t](Ln.VIDEO_NO_SKIP_BUTTON_CLICK, this.handleVideoNoSkipButtonClick),
            this.videoUI[t](Ln.VIDEO_NO_SKIP_KNOW_BUTTON_CLICK, this.handleVideoNoSkipKnowButtonClick),
            this.videoUI[t](Ln.VIDEO_NO_SKIP_CLOSE_BUTTON_CLICK, this.handleVideoNoSkipCloseButtonClick),
            this.videoUI[t](Ln.VIDEO_VOLUME_BUTTON_CLICK, this.handleVideoVolumeButtonClick),
            this.videoUI[t](Ln.VIDEO_PLAY_ICON_CLICK, this.handleVideoPlayIconClick),
            this.videoUI[t](Ln.ACTIVE_SCAN_DETAIL_BUTTON_CLICK, this.handleActiveScanDetailButtonClick),
            this.videoUI[t](Ln.CENTER_QRCODE_CLOSE_BUTTON_CLICK, this.handleCenterQrcodeButtonClick),
            this.adCore.outerEvent[t](fi.TOGGLE_COUNTDOWN_VISIBLE, this.toggleCountdownVisible)
        }
        ,
        e.prototype.handleClose = function() {
            if (this.adInterface.data.canClickToStopAd) {
                var t = this.adInterface.data
                  , e = t.currentVideoInfo
                  , o = t.currentAdInfo;
                return (null == e ? void 0 : e.viewStartTime) && (e.viewTime = (Date.now() - e.viewStartTime) / 1e3),
                this.adInterface.data.userCloseOrderId = null == o ? void 0 : o.orderId,
                this.logger.log("用户点击了关闭"),
                void this.adEndService.handleAdEnd({
                    reason: "用户点击关闭"
                })
            }
            this.adCore.config.showCloseButton && (this.adInterface.pause(),
            this.adInterface.data.pauseWhenVipPanelShow = !0,
            this.adCore.config.showOpenVIPGuide())
        }
        ,
        e.prototype.handleDetail = function(t) {
            var e;
            void 0 === t && (t = ji.AD_DETAIL);
            var o = this.adInterface.data.currentAdInfo;
            o && (this.adCore.config.simpleMode || !o.isScanActive || o.enableClick && !(null === (e = o.miniProgramData) || void 0 === e ? void 0 : e.url_scheme) ? this.adInterface.resume() : (this.adInterface.pause(),
            this.videoUI.setCenterQrcodeVisible(!0),
            o.reporter.reportEffects()),
            this.adInterface.doClickAction(o, {
                adActType: t,
                playtime: this.playerService.currentTime,
                orderType: o.orderType
            }))
        }
        ,
        e.prototype.handleToggleNoSkipDialog = function(t) {
            t ? this.adInterface.pause() : this.adInterface.resume(),
            this.videoUI.setNoSkipDialogVisible(t)
        }
        ,
        e
    }(yn), Mn = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.logger = o.adCore.logger.createLogger("PostAd"),
            o.videoUI = new Rn({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.videoUI.init(),
            o.playerService = new Cn(o),
            o.blockScreen = new _n(o),
            o.adEndService = new gn(o),
            o.updateUIService = new bn(o),
            o.videoUIEventService = new kn(o),
            o.parseOrder(),
            o.videoCountdown = new En(o),
            o.videoUIEventService.bindVideoUIEvent(),
            o
        }
        return i(e, t),
        e.prototype.getCurrentPlayer = function() {
            return this.playerService.postPlayer
        }
        ,
        e.prototype.load = function() {
            this.logger.log("调用 load"),
            this.state !== Si.WAIT_FOR_STOP ? (this.setState(Si.LOADING),
            this.data.isEmpty || this.playerService.load()) : this.logger.log("调用 load 方法, ".concat(Si.WAIT_FOR_STOP, " 状态的广告不需要执行 load"))
        }
        ,
        e.prototype.play = function() {
            if (this.logger.log("调用 play, isEmpty: ".concat(this.data.isEmpty)),
            this.data.isEmpty)
                return this.logger.log("整体空单，广告结束"),
                void this.adEndService.handleAdEnd({
                    reason: "调用 play 时， 整体空单，广告结束"
                });
            if (this.data.currentPlayAdType = this.order.adType,
            [p.TAIL].includes(this.order.adType) && this.state === Si.WAIT_FOR_STOP)
                return t.prototype.pause.call(this),
                this.logger.log("后贴已结束"),
                void this.adEndService.handleAdEnd({
                    reason: "调用 play 时，后贴已结束"
                });
            if (this.state !== Si.PLAYING) {
                if (this.logger.log("调用 play: state: ".concat(this.state, "  pauseWhenVipPanelShow: ").concat(this.data.pauseWhenVipPanelShow)),
                this.state === Si.PAUSED || this.data.pauseWhenVipPanelShow)
                    return this.data.pauseWhenVipPanelShow = !1,
                    void this.resume();
                this.playerService.start()
            }
        }
        ,
        e.prototype.resume = function() {
            this.logger.log("调用 resume"),
            t.prototype.resume.call(this),
            this.data.currentAdInfo && (this.playerService.resume(),
            this.videoCountdown.startCountdown())
        }
        ,
        e.prototype.pause = function() {
            (this.logger.log("调用 pause"),
            this.state !== Si.PAUSED) && (t.prototype.pause.call(this),
            this.data.currentAdInfo && (this.playerService.pause(),
            this.videoCountdown.stopCountdown()))
        }
        ,
        e.prototype.mute = function() {
            this.logger.log("调用 mute"),
            this.playerService.mute()
        }
        ,
        e.prototype.unMute = function() {
            this.logger.log("调用 unMute"),
            this.playerService.unMute()
        }
        ,
        e.prototype.stop = function(t) {
            this.logger.log("调用 stop: ".concat(At(t))),
            this.blockScreen && this.blockScreen.reset(),
            this.adEndService.handleAdEnd(t)
        }
        ,
        e.prototype.resize = function(t) {
            this.logger.log("调用 resize , ".concat(At(t))),
            this.videoUI.resize()
        }
        ,
        e.prototype.adjustUI = function(t) {
            if (this.logger.log("调用 adjustUI, ".concat(At(t))),
            t) {
                var e = "".concat(t.top || 10, "px")
                  , o = "".concat(t.bottom || 10, "px");
                this.videoUI.adjustVideoAdControl({
                    top: e,
                    bottom: o
                })
            }
        }
        ,
        e.prototype.setVolume = function(t) {
            this.playerService.setVolume(t)
        }
        ,
        e.prototype.report = function() {
            this.logger.log("调用 report"),
            this.data.currentAdInfo && this.doExposure(this.data.currentAdInfo)
        }
        ,
        e.prototype.reset = function() {
            var t;
            null === (t = this.data.videoInfoList) || void 0 === t || t.forEach((function(t) {
                var e;
                null === (e = t.loadProgressTimer) || void 0 === e || e.clear()
            }
            ))
        }
        ,
        e.prototype.destroy = function() {
            this.logger.log("调用 destroy"),
            this.data.hasDestroy || (this.pause(),
            this.videoUI.resetVideoUI(!0),
            this.playerService.destroy(),
            this.reset(),
            this.videoUIEventService.destroy(),
            this.videoUI.destroy(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.setAdIndex = function(t) {
            this.data.adIndex = t,
            this.adInfo = this.order.orders[t]
        }
        ,
        e.prototype.getVideoInfoByOrderId = function(t) {
            var e;
            return null === (e = this.playerService) || void 0 === e ? void 0 : e.postPlayer.adVideoInfoList.find((function(e) {
                return e.orderId === t
            }
            ))
        }
        ,
        e.prototype.setRfid = function(t) {
            this.data.refresh_id = t
        }
        ,
        e.prototype.initData = function() {
            return new mn(this)
        }
        ,
        e.prototype.getOrderTypes = function() {
            var t = {
                sum: this.order.orders.length
            };
            return this.order.orders.forEach((function(e) {
                t[e.orderType] || (t[e.orderType] = 0),
                t[e.orderType] += 1
            }
            )),
            t
        }
        ,
        e.prototype.parseOrder = function() {
            var t = this;
            this.order.empty.forEach((function(e) {
                t.logger.log("上报空单，index: ".concat(e.orderIdx)),
                e.reporter.reportExposure()
            }
            )),
            this.data.duration = this.order.orders.reduce((function(t, e) {
                return t + e.material.duration
            }
            ), 0),
            this.data.showCountdown = this.order.orders.reduce((function(t, e) {
                return p.BROADCAST === e.adType ? t : t + e.material.duration
            }
            ), 0),
            0 !== this.order.orders.length ? (this.logger.log("一共有[".concat(this.order.orders.length, "]个非空订单，总时长: ").concat(this.data.duration, " s")),
            this.data.urlList = this.order.orders.map((function(e, o) {
                var i = e.material
                  , r = e.orderId
                  , n = ue("fmt", i.url) || _.SHD;
                return {
                    fmt: n,
                    orderId: r,
                    uid: "".concat(n, "-").concat(i.vid, "-").concat(o),
                    cacheKey: "".concat(n, "-").concat(i.vid),
                    vid: i.vid,
                    url: i.enable_crt_cached ? Ie(i.vid, i.url, e.adType) : i.url,
                    fileSize: i.file_size,
                    duration: i.duration,
                    adType: t.adType
                }
            }
            ))) : this.logger.log("整体空订单")
        }
        ,
        e
    }(Hi), Vn = er("enter-countdown"), Un = {
        layer: Vn("layer"),
        container: Vn("container"),
        countdownNum: Vn("num")
    }, Bn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = Un,
            e
        }
        return i(e, t),
        e.prototype.updateCountdown = function(t) {
            Yt(this.$domNodes.countdownNum, t),
            this.setDomVisible(this.$domNodes.container, !0)
        }
        ,
        e.prototype.reset = function() {
            Yt(this.$domNodes.countdownNum, ""),
            this.setDomVisible(this.$domNodes.container, !1)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <txpdiv class="txp_ad_control txp_none" data-role="'.concat(this.roleMap.container, '">\n        <txpdiv class="txp_ad_skip">\n          <txpdiv class="txp_ad_countdown" data-role="').concat(this.roleMap.countdownNum, '"></txpdiv>\n          <txpdiv class="txp_ad_skip_text">进入广告</txpdiv>\n        </txpdiv>\n      </txpdiv>\n    ')
        }
        ,
        e
    }(sr), zn = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.countdown = 10,
            o.isCountdownStart = !1,
            o.handleCountdownChange = function(t) {
                var e = o.countdown - t;
                e >= 0 ? o.enterCountdownUI.updateCountdown("".concat(e)) : (o.countdownInterval.pause(),
                o.enterCountdownUI.reset(),
                o.isCountdownStart = !1,
                o.adCore.event.emit(Se.AD_ENTER_COUNTDOWN_COMPLETE, {
                    adType: o.adType
                }))
            }
            ,
            o.enterCountdownUI = new Bn({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.enterCountdownUI.init(),
            o.countdownInterval = new Zi({
                onChange: o.handleCountdownChange
            },o.logger),
            o
        }
        return i(e, t),
        e.prototype.load = function() {
            t.prototype.load.call(this),
            this.data.isEmpty && this.adEndService.handleAdEnd({
                reason: "调用load 时，空单直接结束"
            })
        }
        ,
        e.prototype.pauseCountdown = function() {
            this.countdownInterval.pause()
        }
        ,
        e.prototype.resumeCountdown = function() {
            this.isCountdownStart && this.countdownInterval.time <= this.countdown && this.countdownInterval.start()
        }
        ,
        e.prototype.stop = function(e) {
            this.enterCountdownUI.reset(),
            this.countdownInterval.clear(),
            t.prototype.stop.call(this, e)
        }
        ,
        e.prototype.destroy = function() {
            this.enterCountdownUI.destroy(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.startEnterCountdown = function() {
            this.adCore.event.emit(Se.AD_ENTER_COUNTDOWN, {
                adType: this.adType
            }),
            this.countdownInterval.start(),
            this.isCountdownStart = !0
        }
        ,
        e
    }(Mn), Hn = function(t) {
        return function(e, o) {
            return new zn({
                adCore: e,
                order: o,
                config: t
            })
        }
    };
    !function(t) {
        t.CONTRACT = "Contract",
        t.ACTIVE_PICTURE = "ActivePicture",
        t.ACTIVE_SCAN_JUMP = "ActiveScanJump",
        t.ACTIVE_SCAN = "ActiveScan"
    }(Sn || (Sn = {}));
    var $n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "material", {
            get: function() {
                var t = q(this.data.material);
                return t || {
                    duration: 0,
                    url: "",
                    vid: "",
                    file_size: 0,
                    is_transparent: !1,
                    enable_crt_cached: !1,
                    width: 0,
                    height: 0
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isFullscreenClick", {
            get: function() {
                return !!this.data.poster.enable_fullscreen_click
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isActive", {
            get: function() {
                return [v.PICTURE, v.QRCODE].includes(this.data.poster.action_button.action_type)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isPictureActive", {
            get: function() {
                return this.data.poster.action_button.action_type === v.PICTURE
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isScanActive", {
            get: function() {
                return this.data.poster.action_button.action_type === v.QRCODE
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "enableClick", {
            get: function() {
                var t, e;
                return !0 === (null === (e = null === (t = this.data.order.ad_action) || void 0 === t ? void 0 : t.scan) || void 0 === e ? void 0 : e.enable_click)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "orderType", {
            get: function() {
                return this.isActive ? this.isScanActive ? this.enableClick ? Sn.ACTIVE_SCAN_JUMP : Sn.ACTIVE_SCAN : Sn.ACTIVE_PICTURE : Sn.CONTRACT
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(Le);
    function Kn(t, e, o) {
        return ce(o).map((function(o, i) {
            return new $n({
                data: o,
                orderIdx: i,
                adCore: t,
                auth: null == e ? void 0 : e.auth,
                extraInfo: null == e ? void 0 : e.extra_info
            })
        }
        ))
    }
    var Gn, qn = function(t, e) {
        return e.ad_scene === s.PRE ? function(t, e) {
            var o, i = {};
            return null === (o = e.ads) || void 0 === o || o.forEach((function(t) {
                t.ad_type === p.DYNAMIC_MID && t.dynamic && (i.extraData = [{
                    adType: p.DYNAMIC_MID,
                    data: D({}, t.dynamic)
                }])
            }
            )),
            i
        }(0, e) : e.ad_scene === s.ANCHOR ? function(t, e) {
            var o, i = {}, r = [];
            return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
                if (o.ad_type === p.MID)
                    if (o.point) {
                        var i = De(o);
                        o.mid.length > 0 ? r.push({
                            adType: o.ad_type,
                            extraData: Vi(e),
                            empty: Ne(t, e, o.empty),
                            orders: o.mid.map((function(o, r) {
                                return new $n({
                                    data: o,
                                    orderIdx: r,
                                    adCore: t,
                                    point: i,
                                    auth: e.auth,
                                    extraInfo: e.extra_info
                                })
                            }
                            )),
                            point: i,
                            pointStatus: Bi.INIT
                        }) : 0 === o.mid.length && [A.FIX_REALTIME, A.DYNAMIC].includes(o.point.mid_type) && r.push({
                            adType: o.ad_type,
                            extraData: Vi(e),
                            empty: [],
                            orders: [],
                            point: i,
                            pointStatus: Bi.INIT
                        })
                    } else
                        Oe(t, e, o.empty)
            }
            )),
            r.length > 0 && (i.pointAdData = r),
            i
        }(t, e) : e.ad_scene === s.DYNAMIC_MID ? function(t, e) {
            var o, i = {}, r = [];
            return null === (o = e.ads) || void 0 === o || o.forEach((function(o) {
                var n, a;
                o.ad_type === p.DYNAMIC_MID && (((null === (n = o.mid) || void 0 === n ? void 0 : n.length) || (null === (a = o.empty) || void 0 === a ? void 0 : a.length)) && r.push({
                    adType: p.MID,
                    extraData: Vi(e),
                    empty: Ne(t, e, o.empty),
                    orders: Kn(t, e, o.mid)
                }),
                o.dynamic && (i.extraData = [{
                    adType: p.DYNAMIC_MID,
                    data: D({}, o.dynamic)
                }]))
            }
            )),
            r.length > 0 && (i.adData = r),
            i
        }(t, e) : void 0
    };
    !function(t) {
        t[t.INIT = 0] = "INIT",
        t[t.REQUEST = 1] = "REQUEST",
        t[t.LOADING = 2] = "LOADING",
        t[t.PLAYING = 3] = "PLAYING"
    }(Gn || (Gn = {}));
    var Yn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.countdownInterval = null,
            e.dynamicMidStatus = Gn.INIT,
            e.checkDynamicMid = function(t) {
                return O(e, void 0, void 0, (function() {
                    var e, o, i, r, n, a, s = this;
                    return S(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            return e = 1e3 * t,
                            o = this.dynamicInfo.next_request_interval,
                            this.dynamicMidStatus !== Gn.INIT ? [3, 3] : e >= o - 15e3 ? (this.dynamicMidStatus = Gn.REQUEST,
                            this.adCore.vr.reportRequestDynamicMiddle(),
                            [4, this.requestDynamicMid()]) : [3, 2];
                        case 1:
                            d.sent(),
                            d.label = 2;
                        case 2:
                            return [2];
                        case 3:
                            return this.dynamicMidStatus === Gn.REQUEST ? (this.loadDynamicMid(),
                            [2]) : (this.dynamicMidStatus === Gn.LOADING && (i = 1e3 * this.adCore.config.outerPlayerData.playtime,
                            r = Math.max(o - e, 0),
                            this.adCore.order.checkPointConflict(i + r, Date.now() + r, this.conflictInterval).forEach((function(t) {
                                if (!(t.adType === p.MID || t.adType === p.CORNER && t.point.is_whole_scene)) {
                                    var e = t.point.end + s.conflictInterval - (t.point.type === y.TIMESTAMP ? Date.now() : i);
                                    e > r && (r = e)
                                }
                            }
                            )),
                            n = this.getAd(),
                            r <= 1e4 && (null == n ? void 0 : n.data.canPlay) && (null == n || n.startEnterCountdown(),
                            null === (a = this.countdownInterval) || void 0 === a || a.clear(),
                            this.dynamicMidStatus = Gn.PLAYING)),
                            [2])
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.handleVideoPause = function() {
                var t;
                null === (t = e.countdownInterval) || void 0 === t || t.pause();
                var o = e.getAd();
                null == o || o.pauseCountdown()
            }
            ,
            e.handleVideoResume = function() {
                var t;
                null === (t = e.countdownInterval) || void 0 === t || t.start();
                var o = e.getAd();
                null == o || o.resumeCountdown()
            }
            ,
            e.handleAdStop = function(t) {
                [p.MID, p.DYNAMIC_MID].includes(t.adType) && (e.clear(),
                e.isDynamicMid && e.doDynamicMid())
            }
            ,
            e
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "needCheckPlaytime", {
            get: function() {
                var t = this.adCore.ctrl.getRunningAds(p.TAIL);
                return !t.length || !t.some((function(t) {
                    return t.data.hasCallPlay
                }
                ))
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "dynamicMidPoint", {
            get: function() {
                return this.adCore.order.getPoints(p.MID).find((function(t) {
                    return t.mid_type === A.DYNAMIC
                }
                ))
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isDynamicMid", {
            get: function() {
                return !!this.dynamicMidPoint
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "conflictInterval", {
            get: function() {
                var t;
                return (null === (t = this.dynamicMidPoint) || void 0 === t ? void 0 : t.conflict_interval) || 1e4
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.startWatch = function() {
            t.prototype.startWatch.call(this),
            this.adCore.outerEvent.on(fi.VIDEO_PAUSE, this.handleVideoPause),
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.handleVideoResume),
            this.adCore.event.on(Se.AD_STOP, this.handleAdStop)
        }
        ,
        e.prototype.endWatch = function() {
            t.prototype.endWatch.call(this),
            this.adCore.outerEvent.off(fi.VIDEO_PAUSE, this.handleVideoPause),
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.handleVideoResume),
            this.adCore.event.off(Se.AD_STOP, this.handleAdStop)
        }
        ,
        e.prototype.timeupdate = function(t) {
            var e = this;
            this.adCore.config.phlsConfig.isSoloPlayingPhls || this.needCheckPlaytime && (this.isDynamicMid ? this.doDynamicMid() : this.adCore.order.getPoints(p.MID).forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(p.MID, o);
                if (o.mid_type !== A.FIX_REALTIME) {
                    if (0 !== i.point.begin)
                        if (i.pointStatus !== Bi.INIT) {
                            if (i.pointStatus === Bi.LOADING) {
                                var r = e.getAd();
                                t >= i.point.begin - 1e4 && (null == r ? void 0 : r.data.canPlay) && (null == r || r.startEnterCountdown(),
                                i.pointStatus = Bi.PLAYING)
                            }
                        } else
                            t >= i.point.begin - 15e3 && t <= i.point.begin + 15e3 && (i.pointStatus = Bi.LOADING,
                            e.adCore.ctrl.loadAdOrder(i))
                } else
                    e.checkFixRealTimeMid(t, i)
            }
            )))
        }
        ,
        e.prototype.reset = function() {
            this.clear(),
            window.sessionStorage.removeItem(Tt)
        }
        ,
        e.prototype.clear = function() {
            this.dynamicMidStatus = Gn.INIT,
            this.countdownInterval && (this.countdownInterval.clear(),
            this.countdownInterval = null)
        }
        ,
        e.prototype.requestDynamicMid = function(t) {
            return O(this, void 0, void 0, (function() {
                var e, o;
                return S(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        this.adCore.order.clearMidOrder(),
                        (null == t ? void 0 : t.mid_type) === A.FIX_REALTIME ? e = null !== (o = t.zcindex) && void 0 !== o ? o : 0 : (e = Number(window.sessionStorage.getItem(Tt) || -1),
                        e += 1),
                        window.sessionStorage.setItem(Tt, "".concat(e)),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, this.adCore.config.requestProxyHttp(s.DYNAMIC_MID)];
                    case 2:
                        return i.sent(),
                        [3, 4];
                    case 3:
                        return i.sent(),
                        this.clear(),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.doDynamicMid = function() {
            var t;
            if (this.dynamicMidStatus === Gn.INIT) {
                var e = this.adCore.order.getExtraData(p.DYNAMIC_MID);
                if (e)
                    return e.stop_request_dynamic_ad ? (null === (t = this.countdownInterval) || void 0 === t || t.clear(),
                    void (this.countdownInterval = null)) : void (this.countdownInterval || (this.countdownInterval = new Zi({
                        timeout: 1e3,
                        onChange: this.checkDynamicMid
                    },this.logger),
                    this.dynamicInfo = e,
                    this.countdownInterval.start()))
            }
        }
        ,
        e.prototype.getAd = function() {
            var t = this.adCore.ctrl.getRunningAds(p.MID);
            if (t.length > 0)
                return t[0]
        }
        ,
        e.prototype.checkFixRealTimeMid = function(t, e) {
            if (this.dynamicMidStatus !== Gn.INIT || e.pointStatus !== Bi.INIT)
                if (this.dynamicMidStatus !== Gn.REQUEST) {
                    if (this.dynamicMidStatus === Gn.LOADING) {
                        var o = this.getAd();
                        t >= e.point.begin - 1e4 && (null == o ? void 0 : o.data.canPlay) && (null == o || o.startEnterCountdown(),
                        this.dynamicMidStatus = Gn.PLAYING)
                    }
                } else
                    this.loadDynamicMid();
            else
                t >= e.point.begin - 15e3 && t <= e.point.begin + 15e3 && (this.adCore.vr.reportRequestFixedMiddle(),
                this.requestDynamicMid(e.point),
                this.dynamicMidStatus = Gn.REQUEST,
                e.pointStatus = Bi.LOADING)
        }
        ,
        e.prototype.loadDynamicMid = function() {
            var t = this.adCore.order.getAdOrder(p.MID);
            t && (0 === this.adCore.ctrl.getRunningAds(p.MID).length && (this.adCore.ctrl.loadAdOrder(t),
            this.dynamicMidStatus = Gn.LOADING))
        }
        ,
        e
    }(Yi)
      , Fn = function(t) {
        return {
            adType: p.MID,
            isPointAd: !0,
            isMultiple: !1,
            getOrderData: qn,
            creator: Hn(t),
            watcher: function(t) {
                return new Yn(t)
            }
        }
    }
      , Wn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.load = function() {
            var e;
            t.prototype.load.call(this),
            (null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) || this.stop({
                reason: "调用 load 时，点位不存在"
            })
        }
        ,
        e.prototype.play = function() {
            var e, o = this.adCore.config.outerPlayerData.playtime;
            if (this.adInfo.reporter.setVideoPlaytime(1e3 * o),
            this.state !== Si.PLAYING && this.state !== Si.PAUSED)
                if (null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) {
                    t.prototype.play.call(this),
                    this.show(),
                    this.adInfo.reportVrAdExposure();
                    var i = this.adCore.config.playerData
                      , r = i.playerVid
                      , n = i.playerCid
                      , a = i.playerFlowid
                      , s = this.adInfo.point.time_offset
                      , d = void 0 === s ? 0 : s;
                    this.adCore.vr.reportNonStandard(D(D({
                        vid: r,
                        cid: n,
                        flow_id: a,
                        ad_exposure_position: (1e3 * o - d).toFixed(0)
                    }, Ui(this.order.extraData)), this.adInfo.getVrReportData()))
                } else
                    this.stop({
                        reason: "调用 play 时，点位不存在"
                    })
        }
        ,
        e.prototype.stop = function(e) {
            var o;
            this.state !== Si.END && (this.hide(),
            t.prototype.stop.call(this, e),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                adPlaytime: this.data.showTime ? Date.now() - this.data.showTime : -1,
                firstView: null !== (o = this.data.showTime) && void 0 !== o ? o : -1,
                reason: e.reason
            })),
            this.destroy())
        }
        ,
        e.isPointAd = !0,
        e.isMultiple = !0,
        e
    }(Hi)
      , jn = function(t, e) {
        var o;
        if (e.ad_scene !== s.ANCHOR)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
            if (o.ad_type === p.NON_STANDARD)
                if (o.point) {
                    var i = De(o);
                    r.push({
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: Pe(t, i, e, o.non_standard),
                        point: i,
                        pointStatus: Bi.INIT
                    })
                } else
                    Oe(t, e, o.empty)
        }
        )),
        r.length > 0 && (i.pointAdData = r),
        i
    }
      , Qn = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.timeupdate = function(t) {
            var e = this;
            this.adCore.config.phlsConfig.isSoloPlayingPhls || this.adCore.order.getPoints(p.NON_STANDARD).forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(p.NON_STANDARD, o);
                i && 0 !== i.orders.length && (t >= o.begin && t <= o.end ? (i.pointStatus === Bi.INIT && (i.orders.forEach((function(t) {
                    e.adCore.ctrl.loadAdOrder(D(D({}, i), {
                        orders: [t]
                    }))
                }
                )),
                i.pointStatus = Bi.PLAYING),
                i.pointStatus === Bi.PLAYING && i.orders.forEach((function(t) {
                    e.adCore.api.playAd(p.NON_STANDARD, t.orderId)
                }
                ))) : i.pointStatus !== Bi.INIT && (i.pointStatus = Bi.INIT,
                i.orders.forEach((function(t) {
                    e.adCore.api.stopAd(p.NON_STANDARD, t.orderId, "进度在点位区间以外")
                }
                ))))
            }
            ))
        }
        ,
        e
    }(Yi);
    Xi(".game-pause-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.802);bottom:0;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:absolute;right:0;top:0;width:270px}.game-pause-card-logo{-ms-flex-negative:0;border-radius:100%;flex-shrink:0;height:48px;margin-top:90px;overflow:hidden;width:48px}.game-pause-card-logo img{height:100%;width:100%}.game-pause-card-name{-ms-flex-negative:0;color:#fff;flex-shrink:0;font-size:14px;font-style:normal;font-weight:500;line-height:14px;margin-top:15px;text-align:center}.game-pause-card-desc{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;line-height:22px;max-width:212px;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.game-pause-card-btn,.game-pause-card-desc{-ms-flex-negative:0;color:#fff;flex-shrink:0;font-size:14px;font-style:normal;margin-top:20px;text-align:center}.game-pause-card-btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fe5c38;border-radius:24px;font-weight:500;gap:10px;justify-content:center;line-height:14px;padding:10px 36px}.game-pause-card-btn,.game-pause-card-close{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.game-pause-card-close{opacity:.6;position:absolute;right:18px;top:12px}.game-pause-card-close span{color:#fff;font-size:12px;font-style:normal;font-weight:400;line-height:12px;text-align:right}.game-pause-card-close img{height:12px;margin-left:4px;width:12px}.game-pause-card-code-icon{background:hsla(0,0%,100%,.1);border-radius:4px;bottom:15px;height:48px;position:absolute;right:15px;width:48px}.game-pause-card-code,.game-pause-card.code-show .game-pause-card-code-icon{display:none}.game-pause-card.code-show .game-pause-card-code{-ms-flex-negative:0;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fff;border-radius:6px;display:-webkit-box;display:-ms-flexbox;display:flex;flex-shrink:0;height:160px;justify-content:center;margin-top:20px;padding:8px;width:160px}.game-pause-card.code-show .game-pause-card-logo{margin-top:32px}.game-pause-card.code-show .game-pause-card-desc,.game-pause-card.code-show .game-pause-card-name{margin-top:10px}.game-pause-card.code-show .game-pause-card-btn{margin-top:15px}");
    var Zn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                code: e.createRef()
            },
            e.handleSmallCodeHover = function() {
                zt(e.$refs.container.value, "code-show")
            }
            ,
            e.handleContainerLeave = function() {
                Ht(e.$refs.container.value, "code-show")
            }
            ,
            e.handleClick = function(t) {
                var o;
                t.stopPropagation();
                var i = hr(t.target);
                null === (o = e.props) || void 0 === o || o.onClick(i)
            }
            ,
            e.handleClose = function(t) {
                var o, i;
                t.stopPropagation(),
                null === (i = null === (o = e.props) || void 0 === o ? void 0 : o.onClose) || void 0 === i || i.call(o)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.renderQrCode = function(t) {
            var e, o;
            this.$refs.code.value.innerHTML = "",
            this.$refs.code.value && t && (null === (o = null === (e = this.props) || void 0 === e ? void 0 : e.renderQrCode) || void 0 === o || o.call(e, this.$refs.code.value, t, 144))
        }
        ,
        e.prototype.resetHover = function() {
            Ht(this.$refs.container.value, "code-show")
        }
        ,
        e.prototype.render = function() {
            var t, e, o, i, r;
            return ur("div", {
                ref: this.$refs.container,
                class: "game-pause-card ".concat((null === (t = this.props) || void 0 === t ? void 0 : t.visible) ? "" : "txp_none"),
                onMouseLeave: this.handleContainerLeave,
                onClick: this.handleClick,
                "data-acttype": ji.AD_DETAIL
            }, ur("div", {
                class: "game-pause-card-logo"
            }, ur("img", {
                "data-acttype": ji.ADVERTISER_LOGO,
                src: (null === (e = this.props) || void 0 === e ? void 0 : e.icon_url) || "",
                alt: ""
            })), ur("div", {
                class: "game-pause-card-name"
            }, ur("span", {
                "data-acttype": ji.ADVERTISER_NAME
            }, null === (o = this.props) || void 0 === o ? void 0 : o.name)), ur("div", {
                class: "game-pause-card-desc"
            }, ur("span", {
                "data-acttype": ji.AD_TITLE
            }, null === (i = this.props) || void 0 === i ? void 0 : i.desc)), ur("div", {
                ref: this.$refs.code,
                "data-acttype": ji.AD_ACTION_BUTTON,
                class: "game-pause-card-code"
            }), ur("div", {
                class: "game-pause-card-btn",
                "data-acttype": ji.AD_ACTION_BUTTON
            }, null === (r = this.props) || void 0 === r ? void 0 : r.btnText), ur("div", {
                class: "game-pause-card-close",
                onClick: this.handleClose
            }, ur("span", null, "广告"), ur("img", {
                src: ir,
                alt: ""
            })), ur("div", {
                class: "game-pause-card-code-icon",
                onMouseEnter: this.handleSmallCodeHover
            }, ur("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, ur("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M22 10H10V22H22V10ZM7 6C6.44772 6 6 6.44772 6 7V25C6 25.5523 6.44772 26 7 26H25C25.5523 26 26 25.5523 26 25V7C26 6.44772 25.5523 6 25 6H7ZM14 34H10V38H14V34ZM7 30C6.44772 30 6 30.4477 6 31V41C6 41.5523 6.44772 42 7 42H17C17.5523 42 18 41.5523 18 41V31C18 30.4477 17.5523 30 17 30H7ZM34 34H38V38H34V34ZM30 31C30 30.4477 30.4477 30 31 30H41C41.5523 30 42 30.4477 42 31V41C42 41.5523 41.5523 42 41 42H31C30.4477 42 30 41.5523 30 41V31ZM38 10H34V14H38V10ZM31 6C30.4477 6 30 6.44772 30 7V17C30 17.5523 30.4477 18 31 18H41C41.5523 18 42 17.5523 42 17V7C42 6.44772 41.5523 6 41 6H31ZM34 22H30V26H34V22ZM22 30H26V34H22V30ZM13 13H19V19H13V13ZM22 38H26V42H22V38ZM42 22H38V26H42V22Z",
                fill: "white",
                "fill-opacity": "0.5"
            }))))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    e !== o && (e ? Ht(t.$refs.container.value, "txp_none") : zt(t.$refs.container.value, "txp_none"))
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".game-pause-ui{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.game-pause-ui .game-pause-card{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:all .3s ease;transition:all .3s ease;will-change:transform}.game-pause-ui .game-card{bottom:10px;opacity:1;position:absolute;right:10px;-webkit-transition:all .3s ease;transition:all .3s ease;will-change:opacity}.game-pause-ui.can-hover:hover .game-pause-card{-webkit-transform:translateX(0);transform:translateX(0)}.game-pause-ui.can-hover:hover .game-card,.game-pause-ui.can-hover:hover .game-pause-ui-close{opacity:0}.game-pause-ui-close{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:rgba(0,0,0,.5);border-radius:2px;display:-webkit-box;display:-ms-flexbox;display:flex;height:26px;justify-content:center;opacity:1;position:absolute;right:5px;top:5px;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;width:58px}.game-pause-ui-close span{color:#fff;font-size:12px;font-style:normal;font-weight:400;line-height:12px;margin-right:4px;text-align:right}.game-pause-ui-btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fe5c38;border-radius:24px;bottom:20px;color:#fff;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:14px;font-style:normal;font-weight:500;height:36px;justify-content:center;line-height:14px;padding:0 30px;position:absolute;right:20px}.game-pause-ui-btn img{height:16px;margin-right:4px;width:16px}");
    var Xn = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                gamePauseCard: e.createRef(),
                gameCard: e.createRef(),
                container: e.createRef(),
                btn: e.createRef()
            },
            e.handleBtnClick = function(t) {
                var o;
                t.stopPropagation(),
                null === (o = e.props) || void 0 === o || o.onClick(ji.AD_ACTION_BUTTON)
            }
            ,
            e.handleClose = function(t) {
                t.stopPropagation(),
                e.props.onClose()
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.renderQrCode = function(t) {
            this.$refs.gamePauseCard.value.renderQrCode(t),
            this.$refs.gameCard.value.renderQrCode(t)
        }
        ,
        e.prototype.setSize = function(t) {
            var e = t > 602
              , o = 602 === t;
            this.$refs.gameCard.value.setState({
                visible: e || o
            }),
            this.$refs.gamePauseCard.value.setState({
                visible: e
            }),
            e ? zt(this.$refs.container.value, "can-hover") : Ht(this.$refs.container.value, "can-hover"),
            e || o ? $t(this.$refs.btn.value) : Kt(this.$refs.btn.value)
        }
        ,
        e.prototype.render = function() {
            var t, e, o, i, r, n, a, s, d, l;
            return ur("div", {
                ref: this.$refs.container,
                class: "game-pause-ui can-hover"
            }, ur(wn, {
                ref: this.$refs.gameCard,
                visible: !0,
                icon_url: null === (t = this.props) || void 0 === t ? void 0 : t.icon_url,
                name: null === (e = this.props) || void 0 === e ? void 0 : e.name,
                desc: null === (o = this.props) || void 0 === o ? void 0 : o.desc,
                btnText: null === (i = this.props) || void 0 === i ? void 0 : i.btnText,
                qrcodeTip: null === (r = this.props) || void 0 === r ? void 0 : r.qrcodeTip,
                hasBg: this.props.hasBg,
                renderQrCode: this.props.renderQrCode,
                onClick: this.props.onClick
            }), ur(Zn, {
                ref: this.$refs.gamePauseCard,
                icon_url: null === (n = this.props) || void 0 === n ? void 0 : n.icon_url,
                name: null === (a = this.props) || void 0 === a ? void 0 : a.name,
                desc: null === (s = this.props) || void 0 === s ? void 0 : s.desc,
                btnText: null === (d = this.props) || void 0 === d ? void 0 : d.btnText,
                renderQrCode: this.props.renderQrCode,
                onClose: this.props.onClose,
                onClick: this.props.onClick
            }), ur("div", {
                ref: this.$refs.btn,
                class: "game-pause-ui-btn txp_none",
                onClick: this.handleBtnClick
            }, ur("img", {
                src: or,
                alt: ""
            }), ur("div", null, " ", null === (l = this.props) || void 0 === l ? void 0 : l.btnText)), ur("div", {
                class: "game-pause-ui-close",
                onClick: this.handleClose
            }, ur("span", null, "广告"), ur("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none"
            }, ur("path", {
                d: "M1.64645 1.64645L1.29289 1.29289L1.29289 1.29289L1.64645 1.64645ZM1.64645 2.35355L1.29289 2.70711L1.29289 2.70711L1.64645 2.35355ZM2.35355 1.64645L2 2L2 2L2.35355 1.64645ZM6 5.29289L5.64645 5.64645L6 6L6.35355 5.64645L6 5.29289ZM9.64645 1.64645L10 2V2L9.64645 1.64645ZM10.3536 1.64645L10.7071 1.29289L10.7071 1.29289L10.3536 1.64645ZM10.3536 2.35355L10.7071 2.70711V2.70711L10.3536 2.35355ZM6.70711 6L6.35355 5.64645L6 6L6.35355 6.35355L6.70711 6ZM10.3536 9.64645L10.7071 9.29289L10.7071 9.29289L10.3536 9.64645ZM10.3536 10.3536L10.7071 10.7071L10.7071 10.7071L10.3536 10.3536ZM9.64645 10.3536L9.29289 10.7071L9.29289 10.7071L9.64645 10.3536ZM6 6.70711L6.35355 6.35355L6 6L5.64645 6.35355L6 6.70711ZM2.35355 10.3536L2.70711 10.7071H2.70711L2.35355 10.3536ZM1.64645 10.3536L1.29289 10.7071L1.29289 10.7071L1.64645 10.3536ZM1.64645 9.64645L1.29289 9.29289L1.29289 9.29289L1.64645 9.64645ZM5.29289 6L5.64645 6.35355L6 6L5.64645 5.64645L5.29289 6ZM1.29289 1.29289C0.902369 1.68342 0.902369 2.31658 1.29289 2.70711L2 2L2 2L1.29289 1.29289ZM2.70711 1.29289C2.31658 0.902368 1.68342 0.90237 1.29289 1.29289L2 2L2 2L2.70711 1.29289ZM6.35355 4.93934L2.70711 1.29289L2 2L5.64645 5.64645L6.35355 4.93934ZM6.35355 5.64645L10 2L9.29289 1.29289L5.64645 4.93934L6.35355 5.64645ZM10 2V2L10.7071 1.29289C10.3166 0.90237 9.68342 0.902368 9.29289 1.29289L10 2ZM10 2V2L10.7071 2.70711C11.0976 2.31658 11.0976 1.68342 10.7071 1.29289L10 2ZM10 2L6.35355 5.64645L7.06066 6.35355L10.7071 2.70711L10 2ZM10.7071 9.29289L7.06066 5.64645L6.35355 6.35355L10 10L10.7071 9.29289ZM10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L10 10V10L10.7071 10.7071ZM9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071L10 10H10L9.29289 10.7071ZM5.64645 7.06066L9.29289 10.7071L10 10L6.35355 6.35355L5.64645 7.06066ZM5.64645 6.35355L2 10L2.70711 10.7071L6.35355 7.06066L5.64645 6.35355ZM2 10H2L1.29289 10.7071C1.68342 11.0976 2.31658 11.0976 2.70711 10.7071L2 10ZM2 10V10L1.29289 9.29289C0.90237 9.68342 0.90237 10.3166 1.29289 10.7071L2 10ZM2 10L5.64645 6.35355L4.93934 5.64645L1.29289 9.29289L2 10ZM1.29289 2.70711L4.93934 6.35355L5.64645 5.64645L2 2L1.29289 2.70711Z",
                fill: "white"
            }))))
        }
        ,
        e
    }(dr);
    Xi(".txp_zt{color:#fff;height:100%;position:absolute;width:100%;z-index:2}.txp_zt .txp_zt_ad_mask{background-color:rgba(0,0,0,.5);height:100%;pointer-events:none;width:100%}.txp_zt .txp_zt_content{background-color:#1c1c1c;border-radius:4px;cursor:pointer;left:50%;overflow:hidden;pointer-events:auto;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.txp_zt .txp_zt_content.txp_ad_active_normal .txp_zt_progress{bottom:66px}.txp_zt .txp_zt_content.txp_ad_active_normal .txp_zt_mute{bottom:82px}.txp_zt .txp_zt_content.txp_ad_active_normal .bottom_desc_text_container,.txp_zt .txp_zt_content.txp_ad_active_normal .bottom_desc_text_container .bottom_desc_text{display:block}.txp_zt .txp_zt_content .txp_zt_loading{background-color:#1c1c1c;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;cursor:auto;pointer-events:unset;z-index:2}.txp_zt .txp_zt_content .txp_zt_err_tips{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#1c1c1c;cursor:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;justify-content:center;position:absolute;width:100%;z-index:2}.txp_zt .txp_zt_content .txp_zt_err_tips .txp_zt_err_tips_text{font-size:16px;margin-bottom:20px}.txp_zt .txp_zt_content .txp_zt_err_tips .txp_zt_err_tips_btn{background-color:hsla(0,0%,100%,.1);border-radius:15px;cursor:pointer;font-size:12px;height:30px;line-height:30px;text-align:center;width:90px}.txp_zt .txp_zt_content .txp_zt_image_material,.txp_zt .txp_zt_content .txp_zt_video_material{height:100%;width:100%}.txp_zt .txp_zt_content .txp_zt_close{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.5);border-radius:2px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:12px;height:26px;line-height:26px;padding-left:10px;position:absolute;right:5px;top:5px;width:58px;z-index:3}.txp_zt .txp_zt_content .txp_zt_close:hover{background-color:rgba(0,0,0,.8)}.txp_zt .txp_zt_content .txp_zt_close img{display:block;height:14px;margin-left:2px;width:14px}.txp_zt .txp_zt_content .txp_zt_detail{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fe5c38;border-radius:15px;bottom:12px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:12px;height:30px;line-height:30px;padding:0 15px;position:absolute;right:10px}.txp_zt .txp_zt_content .txp_zt_detail:hover{background-color:#ff183e}.txp_zt .txp_zt_content .txp_zt_detail img{height:16px;margin-right:6px;width:16px}.txp_zt .txp_zt_content .txp_zt_mute{fill:#fff;border-radius:50%;bottom:12px;cursor:pointer;height:30px;left:10px;padding:5px;position:absolute;width:30px}.txp_zt .txp_zt_content .txp_zt_mute:hover{background-color:rgba(0,0,0,.8)}.txp_zt .txp_zt_content .txp_zt_mute.mute .txp_svg_volume_mute,.txp_zt .txp_zt_content .txp_zt_mute.volume .txp_svg_volume{display:block}.txp_zt .txp_zt_content .txp_zt_mute .txp_svg_symbol{display:none}.txp_zt .txp_zt_content .txp_zt_progress{background-color:hsla(0,0%,100%,.45);bottom:0;cursor:auto;height:4px;left:0;position:absolute;width:100%}.txp_zt .txp_zt_content .txp_zt_progress .progress{background-color:#fe5c38;border-bottom-right-radius:2px;border-top-right-radius:2px;height:4px;-webkit-transition:width .15s;transition:width .15s;width:0}.txp_zt .txp_zt_content .bottom_desc_text_container{background-color:rgba(31,31,31,.9);bottom:0;display:none;height:66px;left:0;position:absolute;width:100%}.txp_zt .txp_zt_content .bottom_desc_text_container .bottom_desc_text{color:#fff;font-size:18px;height:66px;line-height:66px;overflow:hidden;text-indent:15px;text-overflow:ellipsis;white-space:nowrap}.txp_zt .txp_zt_content .bottom_desc_text_container .bottom_desc_text.level-full{width:645px}.txp_zt .txp_zt_content .bottom_desc_text_container .bottom_desc_text.level-high-hd{width:447px}.txp_zt .txp_zt_content .bottom_desc_text_container .bottom_desc_text.level-hd{width:306px}.txp_zt .txp_zt_content .bottom_desc_text_container .bottom_desc_text.level-normal{width:180px}.txp_zt .txp_zt_content .translucent-top-text-container{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),color-stop(93%,transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent 93%);border-radius:4px 4px 0 0;height:80px;left:0;position:absolute;top:0;-webkit-transition:all .3s ease;transition:all .3s ease;width:100%}.txp_zt .txp_zt_content .translucent-top-text-container .translucent-top-text{color:#fff;font-size:18px;letter-spacing:0;line-height:48px;overflow:hidden;text-indent:15px;text-overflow:ellipsis;text-shadow:0 1px 2px rgba(0,0,0,.25);white-space:nowrap}.txp_zt .txp_zt_content .translucent-top-text-container .translucent-top-text.level-full{width:540px}.txp_zt .txp_zt_content .translucent-top-text-container .translucent-top-text.level-high-hd{width:468px}.txp_zt .txp_zt_content .translucent-top-text-container .translucent-top-text.level-hd{width:342px}.txp_zt .txp_zt_content .translucent-top-text-container .translucent-top-text.level-normal{width:252px}.txp_zt .txp_zt_content .float-qrcode{background-color:rgba(0,0,0,.8);border-radius:4px;bottom:10px;height:134px;position:absolute;right:10px;-webkit-transition:all .3s ease;transition:all .3s ease;width:110px}.txp_zt .txp_zt_content .float-qrcode .float-code{background-color:#fff;height:90px;left:10px;position:absolute;top:10px;width:90px}.txp_zt .txp_zt_content .float-qrcode .float-code img{height:90%;margin:5%;width:90%}.txp_zt .txp_zt_content .float-qrcode .scan-tips{bottom:10px;color:#fff;height:14px;left:0;letter-spacing:1px;position:absolute;white-space:nowrap;width:110px}.txp_zt .txp_zt_content .float-qrcode .scan-tips span{font-size:20px;left:50%;line-height:14px;position:absolute;-webkit-transform:scale(.5) translateX(-100%);transform:scale(.5) translateX(-100%);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.txp_zt .txp_zt_content .right-qrcode{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;justify-content:center;pointer-events:auto;position:absolute;right:-270px;top:0;-webkit-transition:all .3s ease;transition:all .3s ease;width:270px}.txp_zt .txp_zt_content .right-qrcode.level-high-hd .item-avatar-box{margin-top:20px}.txp_zt .txp_zt_content .right-qrcode.level-high-hd .item-text{display:none}.txp_zt .txp_zt_content .right-qrcode.level-high-hd .right-code{margin-top:10px}.txp_zt .txp_zt_content .right-qrcode.level-hd .item-avatar-box{margin-top:15px}.txp_zt .txp_zt_content .right-qrcode.level-hd .item-title{margin-top:5px}.txp_zt .txp_zt_content .right-qrcode.level-hd .item-text{display:none}.txp_zt .txp_zt_content .right-qrcode.level-hd .right-code{height:136px;margin-top:5px;width:136px}.txp_zt .txp_zt_content .right-qrcode.level-normal .item-avatar-box,.txp_zt .txp_zt_content .right-qrcode.level-normal .item-text,.txp_zt .txp_zt_content .right-qrcode.level-normal .item-title{display:none}.txp_zt .txp_zt_content .right-qrcode.level-normal .right-code{height:136px;margin-top:10px;width:136px}.txp_zt .txp_zt_content .right-qrcode .item-avatar-box{border-radius:50%;height:40px;margin-top:35px;overflow:hidden;width:40px}.txp_zt .txp_zt_content .right-qrcode .item-avatar-box .item-avatar{height:100%;width:100%}.txp_zt .txp_zt_content .right-qrcode .item-title{color:#fff;font-size:14px;margin-top:10px;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:190px}.txp_zt .txp_zt_content .right-qrcode .item-text{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#fff;display:-webkit-box;font-size:14px;line-height:22px;margin-top:15px;overflow:hidden;text-align:center;text-overflow:ellipsis;text-overflow:-o-ellipsis-lastline;width:200px}.txp_zt .txp_zt_content .right-qrcode .right-code{background-color:#fff;height:200px;margin-top:20px;width:200px}.txp_zt .txp_zt_content .right-qrcode .right-code img{height:90%;margin:5%;width:90%}.txp_zt .txp_zt_content .right-qrcode .scan-tips{color:#fff;font-size:14px;letter-spacing:1px;line-height:14px;margin-bottom:10px;margin-top:10px;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.25);white-space:nowrap;width:200px}.txp_zt .txp_zt_content:hover .translucent-top-text-container{top:-80px;-webkit-transition:all .3s ease;transition:all .3s ease}.txp_zt .txp_zt_content:hover .float-qrcode{right:-120px;-webkit-transition:all .3s ease;transition:all .3s ease}.txp_zt .txp_zt_content:hover .right-qrcode{right:0;-webkit-transition:all .3s ease;transition:all .3s ease}.txp_zt .txp_play_icon{left:50%;pointer-events:auto;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:10%}.txp_zt .txp_none{display:none!important}.txp_zt.txp_zt_3d_video .txp_zt_content{background-color:transparent;max-height:522px;max-width:932px}.txp_zt.txp_zt_3d_video .txp_zt_content .txp_zt_loading{background-color:transparent}.txp_ad .txp_btn_close_ad{background-color:#000;background-color:rgba(0,0,0,.7);height:26px;position:absolute;right:0;top:0;width:26px;z-index:2}.txp_ad .txp_btn_close_ad:after,.txp_ad .txp_btn_close_ad:before{left:7px}");
    var Jn, ta, ea, oa = er("pause"), ia = {
        layer: oa("layer"),
        pauseContainer: oa("container"),
        pauseMask: oa("mask"),
        pauseContent: oa("content"),
        pauseLoading: oa("loading"),
        pauseErrorTips: oa("error-tips"),
        pauseErrorTipsBtn: oa("error-tips-btn"),
        pauseVideoMaterialContainer: oa("video-material-container"),
        pauseImageMaterialContainer: oa("image-material-container"),
        pauseImageMaterialImg: oa("image-material-img"),
        pauseTopTextContainer: oa("top-text-container"),
        pauseTopText: oa("top-text"),
        pauseFloatQrcode: oa("float-qrcode"),
        pauseFloatQrcodeContainer: oa("float-qrcode-container"),
        pauseFloatQrcodeScanTips: oa("float-qrcode-scan-tips"),
        pauseRightQrcode: oa("right-qrcode"),
        pauseCenterQrcodeItemAvatar: oa("center-qrcode-item-avatar"),
        pauseRightQrcodeItemTitle: oa("center-qrcode-item-title"),
        pauseRightQrcodeItemText: oa("center-qrcode-item-text"),
        pauseCenterQrcodeContainer: oa("center-qrcode-container"),
        pauseCenterQrcodeScanTips: oa("center-qrcode-scan-tips"),
        pauseClose: oa("close"),
        pauseMute: oa("mute"),
        pauseProgressContainer: oa("progress-container"),
        pauseProgress: oa("progress"),
        pauseBottomTextContainer: oa("bottom-text-container"),
        pauseBottomText: oa("bottom-text"),
        pauseBottomTextSpan: oa("bottom-text-span"),
        pauseDetailBtn: oa("detail-btn"),
        pauseDetailBtnText: oa("detail-btn-text"),
        pausePictureContainer: oa("picture-container"),
        pausePictureImg: oa("picture-img"),
        pausePictureClose: oa("picture-close"),
        pausePictureDspName: oa("picture-dsp-name"),
        pausePictureVpaidContainer: oa("picture-vpaid-container"),
        gameDetail: oa("game-detail")
    };
    !function(t) {
        t.PAUSE_CONTENT_HOVER = "PAUSE_CONTENT_HOVER",
        t.PAUSE_CLOSE_CLICK = "PAUSE_CLOSE_CLICK",
        t.PAUSE_MUTE_CLICK = "PAUSE_MUTE_CLICK",
        t.PAUSE_RETRY_CLICK = "PAUSE_RETRY_CLICK",
        t.PAUSE_LINK_AREA_CLICK = "PAUSE_LINK_AREA_CLICK",
        t.PAUSE_DETAIL_BTN_CLICK = "PAUSE_DETAIL_BTN_CLICK",
        t.PAUSE_IMAGE_MATERIAL_IMG_LOAD = "PAUSE_IMAGE_MATERIAL_IMG_LOAD",
        t.PAUSE_IMAGE_MATERIAL_IMG_ERROR = "PAUSE_IMAGE_MATERIAL_IMG_ERROR"
    }(Jn || (Jn = {})),
    function(t) {
        t.LEVEL_FULL = "levelFullHd",
        t.LEVEL_HIGH_HD = "levelHighHd",
        t.LEVEL_HD = "levelHd",
        t.LEVEL_NORMAL = "levelNormal"
    }(ta || (ta = {})),
    function(t) {
        t[t.LEVEL_FULL = 1 / 0] = "LEVEL_FULL",
        t[t.LEVEL_HIGH_HD = 1390] = "LEVEL_HIGH_HD",
        t[t.LEVEL_HD = 1180] = "LEVEL_HD",
        t[t.LEVEL_NORMAL = 880] = "LEVEL_NORMAL"
    }(ea || (ea = {}));
    var ra, na = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = ia,
            e
        }
        return i(e, t),
        e.prototype.getPlayerMode = function() {
            var t;
            return null !== (t = this.playerMode) && void 0 !== t ? t : tr.DEFAULT
        }
        ,
        e.prototype.setContainerVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseContainer, t)
        }
        ,
        e.prototype.setPauseContentVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseContent, t)
        }
        ,
        e.prototype.setMaskVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseMask, t)
        }
        ,
        e.prototype.setErrorTipsVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseErrorTips, t)
        }
        ,
        e.prototype.setLoadingVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseLoading, t)
        }
        ,
        e.prototype.toggleMute = function(t) {
            t ? (Ht(this.$domNodes.pauseMute, "volume"),
            zt(this.$domNodes.pauseMute, "mute")) : (Ht(this.$domNodes.pauseMute, "mute"),
            zt(this.$domNodes.pauseMute, "volume"))
        }
        ,
        e.prototype.setVideoMaterialVisible = function(t) {
            t ? (Kt(this.$domNodes.pauseVideoMaterialContainer),
            Kt(this.$domNodes.pauseProgressContainer),
            Kt(this.$domNodes.pauseMute)) : ($t(this.$domNodes.pauseVideoMaterialContainer),
            $t(this.$domNodes.pauseProgressContainer),
            $t(this.$domNodes.pauseMute),
            this.setLoadingVisible(!1))
        }
        ,
        e.prototype.setImageMaterialVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseImageMaterialContainer, t)
        }
        ,
        e.prototype.setTransparentVideoMaterialVisible = function(t) {
            this.setDomVisible(this.$domNodes.pauseVideoMaterialContainer, t)
        }
        ,
        e.prototype.setPausePictureMaterialVisible = function(t) {
            this.setDomVisible(this.$domNodes.pausePictureContainer, t)
        }
        ,
        e.prototype.updateTransparentVideoContainer = function() {
            zt(this.$domNodes.pauseContainer, "txp_zt_3d_video")
        }
        ,
        e.prototype.updateImageMaterial = function(t) {
            Vt(this.$domNodes.pauseImageMaterialImg, "src", t)
        }
        ,
        e.prototype.updateClickable = function(t) {
            Bt(this.$domNodes.pauseContent, "cursor", t ? "pointer" : "auto")
        }
        ,
        e.prototype.updateActionButton = function(t) {
            t.btnText && t.show && (Yt(this.$domNodes.pauseDetailBtnText, t.btnText),
            Bt(this.$domNodes.pauseDetailBtn, {
                color: t.textColor,
                backgroundColor: t.bgColor
            }),
            Kt(this.$domNodes.pauseDetailBtn))
        }
        ,
        e.prototype.updateProgress = function(t) {
            Bt(this.$domNodes.pauseProgress, "width", t)
        }
        ,
        e.prototype.resizeMaterialContainerSize = function(t, e) {
            var o;
            void 0 === t && (t = !1),
            void 0 === e && (e = this.$domNodes.pauseContainer.offsetWidth);
            var i = 783
              , r = 439;
            e < 1390 && (i = 602,
            r = 338),
            e < 1180 && (i = 463,
            r = 260),
            e < 880 && (i = 356,
            r = 200),
            Bt(this.$domNodes.pauseContent, {
                width: i,
                height: r
            }),
            this.$domNodes.pauseContent.setAttribute("data-width", "".concat(i)),
            null === (o = this.gamePauseUI) || void 0 === o || o.setSize(i),
            t && (e >= ea.LEVEL_HIGH_HD && e < ea.LEVEL_FULL && (this.showQrcodeTypeWith(ta.LEVEL_FULL),
            this.showWebpageGameAdTypeWith(ta.LEVEL_FULL)),
            e >= ea.LEVEL_HD && e < ea.LEVEL_HIGH_HD && (this.showQrcodeTypeWith(ta.LEVEL_HIGH_HD),
            this.showWebpageGameAdTypeWith(ta.LEVEL_HIGH_HD)),
            e >= ea.LEVEL_NORMAL && e < ea.LEVEL_HD && (this.showQrcodeTypeWith(ta.LEVEL_HD),
            this.showWebpageGameAdTypeWith(ta.LEVEL_HD)),
            e < ea.LEVEL_NORMAL && (this.showQrcodeTypeWith(ta.LEVEL_NORMAL),
            this.showWebpageGameAdTypeWith(ta.LEVEL_NORMAL)))
        }
        ,
        e.prototype.updateVideoPost = function(t) {
            t && Bt(this.$domNodes.pauseLoading, "background-image", "url('".concat(t, "')"))
        }
        ,
        e.prototype.updateActivePicture = function(t) {
            zt(this.$domNodes.pauseContent, "txp_ad_active_normal"),
            Yt(this.$domNodes.pauseBottomTextSpan, t),
            Kt(this.$domNodes.pauseBottomTextContainer)
        }
        ,
        e.prototype.updateActiveQrcode = function(t) {
            var e = this;
            if ([E.CARD_BACKGROUND, E.CARD_NO_BACKGROUND].includes(t.mini_game_ui_type))
                this.gamePauseUI || (this.gamePauseUI = new Xn({
                    hasBg: t.mini_game_ui_type === E.CARD_BACKGROUND,
                    icon_url: t.icon_url,
                    name: t.name,
                    desc: t.description,
                    btnText: t.btnText,
                    qrcodeTip: t.qrcodeTips || "微信扫一扫查看详情",
                    renderQrCode: function(t, o, i) {
                        e.adCore.config.renderQrCode(t, me(o, {
                            act: "1025"
                        }), i)
                    },
                    onClick: function(t) {
                        e.emit(Jn.PAUSE_DETAIL_BTN_CLICK, t)
                    },
                    onClose: function() {
                        e.emit(Jn.PAUSE_CLOSE_CLICK)
                    }
                }),
                this.gamePauseUI.mount(this.$domNodes.gameDetail),
                Kt(this.$domNodes.gameDetail),
                $t(this.$domNodes.pauseClose),
                t.qrcodeUrl && this.gamePauseUI.renderQrCode(me(t.qrcodeUrl, {
                    act: "1025"
                })));
            else {
                this.$domNodes.pauseFloatQrcodeContainer && t.qrcodeUrl && this.adCore.config.renderQrCode(this.$domNodes.pauseFloatQrcodeContainer, me(t.qrcodeUrl, {
                    act: "1025"
                }), 90),
                this.$domNodes.pauseCenterQrcodeContainer && t.qrcodeUrl && this.adCore.config.renderQrCode(this.$domNodes.pauseCenterQrcodeContainer, me(t.qrcodeUrl, {
                    act: "1026"
                }), 200);
                var o = t.qrcodeTips || "扫码了解详情";
                Yt(this.$domNodes.pauseCenterQrcodeScanTips, o),
                Yt(this.$domNodes.pauseFloatQrcodeScanTips, o),
                Kt(this.$domNodes.pauseFloatQrcode),
                Kt(this.$domNodes.pauseRightQrcode),
                Kt(this.$domNodes.pauseTopTextContainer),
                Yt(this.$domNodes.pauseTopText, t.description),
                Vt(this.$domNodes.pauseCenterQrcodeItemAvatar, "src", t.icon_url),
                Yt(this.$domNodes.pauseRightQrcodeItemTitle, t.name),
                Yt(this.$domNodes.pauseRightQrcodeItemText, t.description)
            }
        }
        ,
        e.prototype.adjustDomNodes = function() {
            this.$domNodes.layer && this.setDomNodes(this.$domNodes.layer, this.$domNodes, "pauseVideoMaterialContainer")
        }
        ,
        e.prototype.computedPlayerMode = function(t) {
            var e, o = mr(t);
            this.playerMode !== o && (this.playerMode = o,
            null === (e = this.$domNodes.pauseContainer) || void 0 === e || e.setAttribute("data-mode", this.playerMode))
        }
        ,
        e.prototype.reset = function() {
            this.setMaskVisible(!1),
            this.setContainerVisible(!1),
            this.setPauseContentVisible(!1),
            this.setErrorTipsVisible(!1),
            this.setVideoMaterialVisible(!1),
            this.setImageMaterialVisible(!1),
            this.setTransparentVideoMaterialVisible(!1),
            this.setPausePictureMaterialVisible(!1),
            Bt(this.$domNodes.pauseLoading, "background-image", ""),
            Ht(this.$domNodes.pauseContainer, "txp_zt_3d_video"),
            Ut(this.$domNodes.pauseImageMaterialImg, "src"),
            Ft(this.$domNodes.pauseVideoMaterialContainer, ""),
            Ht(this.$domNodes.pauseContent, "txp_ad_active_normal"),
            Yt(this.$domNodes.pauseBottomTextSpan, ""),
            $t(this.$domNodes.pauseDetailBtn),
            $t(this.$domNodes.pauseFloatQrcode),
            $t(this.$domNodes.pauseRightQrcode),
            $t(this.$domNodes.pauseTopTextContainer),
            Yt(this.$domNodes.pauseTopText, ""),
            Vt(this.$domNodes.pauseCenterQrcodeItemAvatar, "src", ""),
            Yt(this.$domNodes.pauseRightQrcodeItemTitle, ""),
            Yt(this.$domNodes.pauseRightQrcodeItemText, ""),
            Kt(this.$domNodes.pauseClose),
            this.$domNodes.gameDetail.innerHTML = "",
            this.gamePauseUI = void 0
        }
        ,
        e.prototype.resizePausePictureContainer = function(t, e) {
            Bt(this.$domNodes.pausePictureContainer, {
                width: "".concat(t, "px"),
                height: "".concat(e, "px"),
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                margin: "auto"
            }),
            Bt(this.$domNodes.pausePictureImg, {
                width: "".concat(t, "px"),
                height: "".concat(e, "px")
            })
        }
        ,
        e.prototype.updatePausePictureDspName = function(t) {
            Ft(this.$domNodes.pausePictureDspName, t)
        }
        ,
        e.prototype.updatePausePictureImgCursor = function(t) {
            Bt(this.$domNodes.pausePictureImg, "cursor", t)
        }
        ,
        e.prototype.updatePausePictureImgSrc = function(t) {
            this.$domNodes.pausePictureImg && (t ? this.$domNodes.pausePictureImg.src = t : Ut(this.$domNodes.pausePictureImg, "src"))
        }
        ,
        e.prototype.mount = function() {
            t.prototype.mount.call(this),
            this.$domNodes.layer && (this.$domNodes.layer.style.cssText = "position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; z-index: 4; pointer-events: none;")
        }
        ,
        e.prototype.getDomEvents = function() {
            var t = this
              , e = !1;
            return [{
                el: this.$domNodes.pauseContent,
                eventName: Ji.MOUSE_ENTER,
                listener: function(o) {
                    o.stopPropagation(),
                    e || (t.emit(Jn.PAUSE_CONTENT_HOVER),
                    e = !0,
                    setTimeout((function() {
                        e = !1
                    }
                    ), 1e3))
                }
            }, {
                el: this.$domNodes.pauseClose,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.stopPropagation(),
                    t.emit(Jn.PAUSE_CLOSE_CLICK)
                }
            }, {
                el: this.$domNodes.pauseMute,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.stopPropagation(),
                    t.emit(Jn.PAUSE_MUTE_CLICK)
                }
            }, {
                el: this.$domNodes.pauseErrorTipsBtn,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.stopPropagation(),
                    t.emit(Jn.PAUSE_RETRY_CLICK)
                }
            }, {
                el: this.$domNodes.pauseContent,
                eventName: Ji.CLICK,
                listener: function(e) {
                    e.stopPropagation(),
                    t.emit(Jn.PAUSE_LINK_AREA_CLICK, ji.AD_VIEW_AREA)
                }
            }, this.forwardActionTypeDomEvent(this.$domNodes.pauseTopTextContainer, ji.AD_DETAIL), this.forwardActionTypeDomEvent(this.$domNodes.pauseFloatQrcode, ji.AD_DETAIL), this.forwardActionTypeDomEvent(this.$domNodes.pauseRightQrcode, ji.AD_DETAIL), this.forwardActionTypeDomEvent(this.$domNodes.pauseBottomTextContainer, ji.AD_DETAIL), this.forwardActionTypeDomEvent(this.$domNodes.pauseDetailBtn, ji.AD_ACTION_BUTTON), this.forwardActionTypeDomEvent(this.$domNodes.pauseCenterQrcodeItemAvatar, ji.ADVERTISER_LOGO), this.forwardActionTypeDomEvent(this.$domNodes.pauseRightQrcodeItemTitle, ji.ADVERTISER_NAME), this.forwardActionTypeDomEvent(this.$domNodes.pauseRightQrcodeItemText, ji.AD_TITLE), this.forwardActionTypeDomEvent(this.$domNodes.pauseBottomTextSpan, ji.AD_TITLE), this.forwardActionTypeDomEvent(this.$domNodes.pauseTopText, ji.AD_TITLE), this.forwardActionTypeDomEvent(this.$domNodes.pauseCenterQrcodeContainer, ji.AD_ACTION_BUTTON), this.forwardActionTypeDomEvent(this.$domNodes.pauseFloatQrcodeContainer, ji.AD_ACTION_BUTTON), {
                el: this.$domNodes.pauseErrorTips,
                eventName: Ji.CLICK,
                listener: function(t) {
                    t.stopPropagation()
                }
            }, {
                el: this.$domNodes.pauseLoading,
                eventName: Ji.CLICK,
                listener: function(t) {
                    t.stopPropagation()
                }
            }, {
                el: this.$domNodes.pauseImageMaterialImg,
                eventName: Ji.LOAD,
                listener: function(e) {
                    t.emit(Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, e)
                }
            }, {
                el: this.$domNodes.pauseImageMaterialImg,
                eventName: Ji.ERROR,
                listener: function() {
                    t.emit(Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR)
                }
            }, this.forwardDomEvent(this.$domNodes.pausePictureImg, Jn.PAUSE_LINK_AREA_CLICK), this.forwardDomEvent(this.$domNodes.pausePictureImg, Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, Ji.LOAD), this.forwardDomEvent(this.$domNodes.pausePictureImg, Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR, Ji.ERROR), this.forwardDomEvent(this.$domNodes.pausePictureClose, Jn.PAUSE_CLOSE_CLICK)]
        }
        ,
        e.prototype.getTemplate = function() {
            var t = this.roleMap;
            return '\n      <txpdiv data-role="'.concat(t.pauseContainer, '" class="txp_zt txp_none">\n        \x3c!-- 遮罩层 --\x3e\n        <txpdiv data-role="').concat(t.pauseMask, '" class="txp_zt_ad_mask txp_none"></txpdiv>\n    \n        \x3c!-- 内容区域 --\x3e\n        <txpdiv data-role="').concat(t.pauseContent, '" class="txp_zt_content txp_none">\n          \x3c!-- loading 提示 --\x3e\n          <txpdiv data-role="').concat(t.pauseLoading, '" class="txp_zt_loading txp_overlay_loading txp_none">\n            <txpdiv class="txp_icon_loading"></txpdiv>\n          </txpdiv>\n          \x3c!-- 错误提示 --\x3e\n          <txpdiv data-role="').concat(t.pauseErrorTips, '" class="txp_zt_err_tips txp_none">\n            <txpdiv class="txp_zt_err_tips_text">视频加载失败，请点击重试</txpdiv>\n            <txpdiv data-role="').concat(t.pauseErrorTipsBtn, '" class="txp_zt_err_tips_btn">点击重试</txpdiv>\n          </txpdiv>\n          \x3c!-- 视频素材容器 --\x3e\n          <txpdiv data-role="').concat(t.pauseVideoMaterialContainer, '" class="txp_zt_video_material txp_none"></txpdiv>\n          \x3c!-- 图片素材容器 --\x3e\n          <txpdiv data-role="').concat(t.pauseImageMaterialContainer, '" class="txp_zt_image_material txp_none">\n            <img data-role="').concat(t.pauseImageMaterialImg, '" style="width:100%; height:100%;" alt="" />\n          </txpdiv>\n          \n          \x3c!-- 顶部半透明文案（仅二维码广告展示） --\x3e\n          <txpdiv data-role="').concat(t.pauseTopTextContainer, '" class="txp_none translucent-top-text-container">\n            <txpdiv data-role="').concat(t.pauseTopText, '" class="translucent-top-text"></txpdiv>\n          </txpdiv>\n    \n          \x3c!-- 右下方悬浮展示的二维码 --\x3e\n          <txpdiv data-role="').concat(t.pauseFloatQrcode, '" class="txp_none float-qrcode">\n            \x3c!-- 二维码容器 --\x3e\n            <txpdiv data-role="').concat(t.pauseFloatQrcodeContainer, '" class="float-code"></txpdiv>\n            \x3c!-- 提示 --\x3e\n            <txpdiv class="scan-tips"><span data-role="').concat(t.pauseFloatQrcodeScanTips, '">扫码了解详情</span></txpdiv>\n          </txpdiv>\n    \n          \x3c!-- 右侧展示的二维码 --\x3e\n          <txpdiv data-role="').concat(t.pauseRightQrcode, '" class="txp_none right-qrcode">\n            \x3c!-- 商品头像 --\x3e\n            <div class="item-avatar-box">\n              <img\n                data-role="').concat(t.pauseCenterQrcodeItemAvatar, '"\n                class="item-avatar"\n                alt=""\n                src="').concat(or, '"\n              />\n            </div>\n            \x3c!-- 商品名称 --\x3e\n            <div data-role="').concat(t.pauseRightQrcodeItemTitle, '" class="item-title"></div>\n            <div data-role="').concat(t.pauseRightQrcodeItemText, '" class="item-text"></div>\n            \x3c!-- 二维码容器 --\x3e\n            <txpdiv data-role="').concat(t.pauseCenterQrcodeContainer, '" class="right-code"></txpdiv>\n            \x3c!-- 提示 --\x3e\n            <txpdiv data-role="').concat(t.pauseCenterQrcodeScanTips, '" class="scan-tips">扫码了解详情</txpdiv>\n          </txpdiv>\n    \n          \x3c!-- 小游戏样式 --\x3e\n          <div data-role="').concat(this.roleMap.gameDetail, '" class="game_detail txp_none"></div>\n    \n          \x3c!-- 关闭按钮 --\x3e\n          <txpdiv data-role="').concat(t.pauseClose, '" class="txp_zt_close">\n            广告\n            <txpidv class="close">\n              <img\n                class="not-hover"\n                src="').concat(ir, '"\n                alt=""\n              />\n            </txpidv>\n          </txpdiv>\n          \x3c!-- 静音切换 --\x3e\n          <txpdiv data-role="').concat(t.pauseMute, '" class="txp_zt_mute volume txp_none">\n            <svg viewBox="0 0 20 20" class="txp_svg_volume txp_svg_symbol">\n              <path\n                d="M16.714 15.593l-.01-.01a1 1 0 0 1-1.705-.708c0-.287.124-.542.317-.724C16.354 13.073 17 11.614 17 10s-.645-3.072-1.682-4.151A.993.993 0 0 1 15 5.125a1 1 0 0 1 1-1c.3 0 .561.139.744.348l.017-.016A7.969 7.969 0 0 1 19 10c0 2.178-.874 4.15-2.286 5.593zm-3.999 3.122a.956.956 0 0 1-.688.28c-.009 0-.018.005-.027.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.818l5.432-3.643A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v16c0 .009-.005.017-.005.026a.959.959 0 0 1-.28.689zM6.75 6.643A.984.984 0 0 1 6 7H3v6h3c.304 0 .567.143.75.357l4.25 2.85V3.792L6.75 6.643z"\n              ></path>\n            </svg>\n            <svg viewBox="0 0 20 20" class="txp_svg_volume_mute txp_svg_symbol">\n              <path\n                d="M16.394 12.566A5.88 5.88 0 0 0 17 10a5.97 5.97 0 0 0-1.682-4.151.993.993 0 0 1-.318-.724 1 1 0 0 1 1-1c.3 0 .561.139.745.348l.016-.016A7.969 7.969 0 0 1 19 10a7.934 7.934 0 0 1-1.116 4.055l-1.49-1.489zM11 3.792L8.978 5.149 7.62 3.792l3.63-2.435A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v7.171l-2-2V3.792zm7.864 14.072a.999.999 0 0 1-1.414 0L2.136 2.55a1 1 0 1 1 1.415-1.415L18.864 16.45a1 1 0 0 1 0 1.414zM3.171 5l2 2H3v6h3c.304 0 .567.143.75.357l4.25 2.85v-3.379l2 2V18c0 .009-.005.017-.005.027a.955.955 0 0 1-.967.968c-.01 0-.019.005-.028.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.171z"\n              ></path>\n            </svg>\n          </txpdiv>\n          \x3c!-- 进度条 --\x3e\n          <txpdiv data-role="').concat(t.pauseProgressContainer, '" class="txp_zt_progress txp_none">\n            <txpdiv data-role="').concat(t.pauseProgress, '" class="progress"></txpdiv>\n          </txpdiv>\n          \x3c!-- 底部文案 --\x3e\n          <txpdiv data-role="').concat(t.pauseBottomTextContainer, '" class="bottom_desc_text_container txp_none">\n            <txpdiv data-role="').concat(t.pauseBottomText, '" class="bottom_desc_text">\n              <span data-role="').concat(t.pauseBottomTextSpan, '"></span>\n            </txpdiv>\n          </txpdiv>\n          \x3c!-- 查看详情 --\x3e\n          <txpdiv data-role="').concat(t.pauseDetailBtn, '" class="txp_zt_detail txp_none">\n            <img\n              src="').concat(or, '"\n              alt=""\n            />\n            <txpidv data-role="').concat(t.pauseDetailBtnText, '"></txpidv>\n          </txpdiv>\n        </txpdiv>\n        \n        \x3c!-- 合约图片区域  --\x3e\n        <txpdiv data-role="').concat(t.pausePictureContainer, '" class="txp_ad txp_none" style="position: absolute;z-index: 2; cursor: pointer;">\n          <button data-role="').concat(t.pausePictureClose, '" class="txp_btn txp_btn_close txp_btn_close_ad" title="关闭该广告" ></button>\n          <img data-role="').concat(t.pausePictureImg, '" alt="" />\n          <txpdiv style="left:8px;bottom:8px;position:absolute;opacity:0.6;font-size:12px;z-index:99">\n            <txpdiv style="background:#000;display:inline-block;">广告</txpdiv>\n            <txpdiv data-role="').concat(t.pausePictureDspName, '" style="display:inline-block;margin-left:10px;text-shadow:2px 2px #000" />\n          </txpdiv>\n          <txpdiv data-role="').concat(t.pausePictureVpaidContainer, '" />\n        </txpdiv>\n      </txpdiv>\n    ')
        }
        ,
        e.prototype.showQrcodeTypeWith = function(t) {
            this.resizeShowType(this.$domNodes.pauseRightQrcode, t),
            this.resizeShowType(this.$domNodes.pauseTopText, t)
        }
        ,
        e.prototype.showWebpageGameAdTypeWith = function(t) {
            this.resizeShowType(this.$domNodes.pauseBottomText, t)
        }
        ,
        e.prototype.resizeShowType = function(t, e) {
            t && (Ht(t, "level-full"),
            Ht(t, "level-high-hd"),
            Ht(t, "level-hd"),
            Ht(t, "level-normal"),
            e === ta.LEVEL_FULL ? zt(t, "level-full") : e === ta.LEVEL_HIGH_HD ? zt(t, "level-high-hd") : e === ta.LEVEL_HD ? zt(t, "level-hd") : e === ta.LEVEL_NORMAL && zt(t, "level-normal"))
        }
        ,
        e.prototype.forwardActionTypeDomEvent = function(t, e) {
            var o = this;
            return {
                el: t,
                eventName: Ji.CLICK,
                listener: function(t) {
                    t.stopPropagation(),
                    o.emit(Jn.PAUSE_DETAIL_BTN_CLICK, e)
                }
            }
        }
        ,
        e
    }(sr), aa = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.handleCloseClick = function() {
                var t;
                o.data.closeBtnClicked = !0,
                o.stop({
                    reason: "用户点击关闭"
                }),
                Xt(M.FEEDBACK, null === (t = o.adInfo) || void 0 === t ? void 0 : t.frequencyControlConfig)
            }
            ,
            o.handleDetailClick = function(t) {
                void 0 === t && (t = ji.AD_VIEW_AREA);
                var e = o.data.showTime ? Date.now() - o.data.showTime : -1;
                o.doClickAction(o.adInfo, {
                    adActType: t,
                    playtime: e,
                    orderType: o.adInfo.orderType
                })
            }
            ,
            o.handleContentHover = function() {
                o.adInfo.data.poster.action_button.action_type === v.QRCODE && o.adInfo.reporter.reportEffects()
            }
            ,
            o.handleImageLoad = function() {
                var t;
                o.data.endLoadTime = Date.now(),
                o.canplayHandler(),
                o.loadCompleteHandle({
                    adType: o.adType,
                    adInfo: o.adInfo,
                    index: o.adInfo.orderIdx,
                    loadingTime: o.data.endLoadTime - o.data.startLoadTime,
                    materialUrl: null === (t = o.adInfo.imageMaterial) || void 0 === t ? void 0 : t.url,
                    materialType: o.adInfo.materialType,
                    adGroupId: o.adInfo.orderId
                }),
                o.show()
            }
            ,
            o.handleImageError = function() {
                var t;
                o.data.endLoadTime = Date.now(),
                o.data.errorCode = Ei.LOAD_FAIL,
                o.loadCompleteHandle({
                    adType: o.adType,
                    adInfo: o.adInfo,
                    index: o.adInfo.orderIdx,
                    hasError: "1",
                    loadingTime: o.data.endLoadTime - o.data.startLoadTime,
                    materialUrl: null === (t = o.adInfo.imageMaterial) || void 0 === t ? void 0 : t.url,
                    materialType: o.adInfo.materialType,
                    adGroupId: o.adInfo.orderId
                }),
                o.stop({
                    reason: "图片加载失败"
                })
            }
            ,
            o.handleToggleMiniPlayer = function(t) {
                t.data.isOpened && o.stop({
                    reason: "切换 MiniPlayer 关闭暂停广告"
                })
            }
            ,
            o.pauseUI = new na({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            }),
            o.pauseUI.init(),
            o.pauseUI.reset(),
            o.data.startTime = Date.now(),
            o.adCore.outerEvent.on(fi.TOGGLE_MINI_PLAYER, o.handleToggleMiniPlayer),
            o
        }
        return i(e, t),
        e.prototype.stop = function(t) {
            this.state !== Si.END && (this.hide(),
            this.data.isStart = !1,
            this.setState(Si.END),
            this.adCore.event.emit(Se.AD_STOP, {
                adType: this.adType,
                adOrder: this.order,
                adInfo: this.adInfo,
                index: this.adInfo.orderIdx,
                forceStop: null == t ? void 0 : t.forceStop,
                reason: null == t ? void 0 : t.reason,
                errors: this.data.errors
            }),
            this.vrReportEnded(t),
            this.destroy())
        }
        ,
        e.prototype.destroy = function() {
            this.pauseUI.destroy(),
            this.adCore.outerEvent.off(fi.TOGGLE_MINI_PLAYER, this.handleToggleMiniPlayer),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.updateUI = function() {
            var t, e, o, i = this.adInfo.data.poster.action_button, r = (null === (t = i.base) || void 0 === t ? void 0 : t.action_title.first_title) || "了解详情";
            this.pauseUI.updateClickable(this.adInfo.clickable);
            var n = this.adInfo.data.poster.advertiser;
            if (i.action_type !== v.QRCODE)
                i.action_type === v.PICTURE && this.pauseUI.updateActivePicture(n.description),
                this.pauseUI.updateActionButton({
                    btnText: r,
                    textColor: null === (e = i.base) || void 0 === e ? void 0 : e.text_color,
                    bgColor: null === (o = i.base) || void 0 === o ? void 0 : o.bg_color,
                    show: !i.display_none
                });
            else {
                var a = this.adInfo.data.order.ad_action.scan
                  , s = D(D({}, n), {
                    btnText: r,
                    qrcodeUrl: null == a ? void 0 : a.short_link,
                    qrcodeTips: null == a ? void 0 : a.qrcode_tips
                });
                this.pauseUI.updateActiveQrcode(s)
            }
        }
        ,
        e.prototype.bindUIEvent = function() {
            this.pauseUI.on(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.on(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick),
            this.pauseUI.on(Jn.PAUSE_DETAIL_BTN_CLICK, this.handleDetailClick),
            this.pauseUI.on(Jn.PAUSE_CONTENT_HOVER, this.handleContentHover)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            this.pauseUI.off(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.off(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick),
            this.pauseUI.off(Jn.PAUSE_DETAIL_BTN_CLICK, this.handleDetailClick),
            this.pauseUI.off(Jn.PAUSE_CONTENT_HOVER, this.handleContentHover)
        }
        ,
        e.prototype.getLoadTime = function() {
            var t = this.data;
            return t.startLoadTime && t.endLoadTime ? t.endLoadTime - t.startLoadTime : -1
        }
        ,
        e.prototype.vrReportEnded = function(t) {
            var e;
            if (!this.data.isFirstClose && this.data.showTime) {
                var o = this.data;
                this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                    adType: this.adType,
                    loadToViewTime: this.getLoadTime(),
                    closeTime: o.closeBtnClicked && this.data.showTime ? Date.now() - this.data.showTime : -1,
                    adPlaytime: o.startTime ? Date.now() - o.startTime : -1,
                    firstView: null !== (e = o.showTime) && void 0 !== e ? e : -1,
                    reason: t.reason
                })),
                o.isFirstClose = !0
            }
        }
        ,
        e.prototype.reportExposure = function() {
            this.data.hasReportView || (this.data.hasReportView = !0,
            this.doExposure(this.adInfo),
            this.adInfo.reportVrAdExposure())
        }
        ,
        e
    }(Hi), sa = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.pauseUI.setPauseContentVisible(!0),
            o.updateUI(),
            o.bindUIEvent(),
            o
        }
        return i(e, t),
        e.prototype.load = function() {
            var e, o;
            (null === (o = null === (e = this.adInfo) || void 0 === e ? void 0 : e.imageMaterial) || void 0 === o ? void 0 : o.url) ? (t.prototype.load.call(this),
            this.adCore.event.emit(Se.AD_LOAD_START, {
                adType: this.order.adType,
                adInfo: this.adInfo
            }),
            this.data.startLoadTime = Date.now(),
            this.pauseUI.setImageMaterialVisible(!0),
            this.pauseUI.updateImageMaterial(this.adInfo.imageMaterial.url)) : this.stop({
                reason: "物料不存在"
            })
        }
        ,
        e.prototype.show = function() {
            t.prototype.show.call(this),
            this.pauseUI.setContainerVisible(!0),
            this.pauseUI.setLoadingVisible(!1),
            this.pauseUI.resizeMaterialContainerSize(this.adInfo.isActive),
            this.reportExposure()
        }
        ,
        e.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.pauseUI.setContainerVisible(!1)
        }
        ,
        e.prototype.destroy = function() {
            this.data.hasDestroy || (this.unbindUIEvent(),
            this.pauseUI.reset(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.resize = function(t) {
            !t || t.left && t.top || this.pauseUI.resizeMaterialContainerSize(this.adInfo.isActive, t.width)
        }
        ,
        e.prototype.bindUIEvent = function() {
            t.prototype.bindUIEvent.call(this),
            this.pauseUI.on(Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, this.handleImageLoad),
            this.pauseUI.on(Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR, this.handleImageError)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            t.prototype.unbindUIEvent.call(this),
            this.pauseUI.off(Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, this.handleImageLoad),
            this.pauseUI.off(Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR, this.handleImageError)
        }
        ,
        e
    }(aa);
    var da = ((ra = {})[tr.SIZE_480_270] = 120,
    ra[tr.SIZE_590_328] = 160,
    ra[tr.SIZE_1110_624] = 210,
    ra[tr.SIZE_1920_1080] = 340,
    ra[tr.DEFAULT] = 540,
    ra)
      , la = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.logger = o.adCore.logger.createLogger("ContractPicturePauseAd"),
            o.imgSizePromise = new ae,
            o.handlePicImageLoad = function(t) {
                var e = t.target;
                o.imgSizePromise.resolve({
                    width: e.width,
                    height: e.height
                }),
                o.handleImageLoad()
            }
            ,
            o.bindUIEvent(),
            o
        }
        return i(e, t),
        e.prototype.load = function() {
            var e, o, i, r;
            if (null === (o = null === (e = this.adInfo) || void 0 === e ? void 0 : e.imageMaterial) || void 0 === o ? void 0 : o.url) {
                t.prototype.load.call(this),
                this.adCore.event.emit(Se.AD_LOAD_START, {
                    adType: this.order.adType,
                    adInfo: this.adInfo
                }),
                this.pauseUI.updatePausePictureDspName(null === (r = null === (i = this.adInfo.data.poster) || void 0 === i ? void 0 : i.title) || void 0 === r ? void 0 : r.dsp_name);
                var n = this.adCore.config.getPlayerSize()
                  , a = n.playerWidth
                  , s = n.playerHeight;
                this.resize({
                    width: a,
                    height: s
                }),
                this.pauseUI.updatePausePictureImgCursor(this.adInfo.clickable ? "pointer" : "auto"),
                this.data.startLoadTime = Date.now(),
                this.pauseUI.updatePausePictureImgSrc(this.adInfo.imageMaterial.url)
            } else
                this.stop({
                    reason: "物料不存在"
                })
        }
        ,
        e.prototype.show = function() {
            t.prototype.show.call(this),
            this.pauseUI.setPausePictureMaterialVisible(!0),
            this.pauseUI.setContainerVisible(!0),
            this.adCore.config.resetBarrageZindex(),
            this.reportExposure()
        }
        ,
        e.prototype.hide = function() {
            this.data.isShow && (this.pauseUI.setPausePictureMaterialVisible(!1),
            this.pauseUI.setContainerVisible(!1),
            t.prototype.hide.call(this))
        }
        ,
        e.prototype.destroy = function() {
            this.pauseUI.updatePausePictureImgSrc(),
            this.unbindUIEvent(),
            this.pauseUI.reset(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.setAdSmallWindow = function(t) {
            t && this.resize(t)
        }
        ,
        e.prototype.resize = function(t) {
            var e = this;
            if (!(!t || t.left && t.top) && t.width && t.height && this.adInfo.imageMaterial) {
                var o = this.adInfo.imageMaterial
                  , i = o.width
                  , r = o.height;
                i && r ? (this.pauseUI.computedPlayerMode({
                    width: t.width,
                    height: t.height
                }),
                this.getPicSize().then((function(t) {
                    var o = t.width
                      , n = t.height;
                    if (i > o || r > n) {
                        var a = function(t, e, o, i) {
                            if (t <= 0 || e <= 0 || o <= 0 || i <= 0)
                                return 0;
                            var r = o / t
                              , n = i / e;
                            return Math.min(r, n) || 1
                        }(i, r, o, n);
                        i *= a,
                        r *= a
                    }
                    e.pauseUI.resizePausePictureContainer(i, r)
                }
                ))) : this.updateContentSize({
                    width: t.width,
                    height: t.height
                })
            }
        }
        ,
        e.prototype.bindUIEvent = function() {
            this.pauseUI.on(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick),
            this.pauseUI.on(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.on(Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, this.handlePicImageLoad),
            this.pauseUI.on(Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR, this.handleImageError)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            this.pauseUI.off(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick),
            this.pauseUI.off(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.off(Jn.PAUSE_IMAGE_MATERIAL_IMG_LOAD, this.handlePicImageLoad),
            this.pauseUI.off(Jn.PAUSE_IMAGE_MATERIAL_IMG_ERROR, this.handleImageError)
        }
        ,
        e.prototype.updateContentSize = function(t) {
            var e = this;
            this.pauseUI.computedPlayerMode(t),
            this.getPicSize().then((function(t) {
                e.pauseUI.resizePausePictureContainer(t.width, t.height)
            }
            ))
        }
        ,
        e.prototype.getPicSize = function() {
            var t = this;
            return this.imgSizePromise.then((function(e) {
                var o = da[t.pauseUI.getPlayerMode()];
                return {
                    height: o,
                    width: o / e.height * e.width
                }
            }
            ))
        }
        ,
        e
    }(aa)
      , ca = "txp_full_screen_pause";
    Xi(".txp_full_screen_pause-btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(51,51,51,.6);border-radius:48px;color:#fff;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;font-style:normal;font-weight:500;height:40px;justify-content:center;line-height:22px;padding:0 16px;-webkit-transition:background-color .3s ease-in-out;transition:background-color .3s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.txp_full_screen_pause-btn img{height:20px;margin-right:4px;width:20px}.txp_full_screen_pause-btn:hover{background-color:#ff183e!important}");
    var pa, ua = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                detailBtn: e.createRef(),
                btnText: e.createRef()
            },
            e
        }
        return i(e, t),
        e.prototype.render = function() {
            var t = ca
              , e = this.props
              , o = e.acttype
              , i = e.eid
              , r = e.onClick
              , n = e.btnText
              , a = e.cssText;
            return ur("div", {
                ref: this.$refs.detailBtn,
                class: "".concat(t, "-btn txp_none"),
                "data-acttype": o,
                "data-eid": i,
                onClick: r,
                style: a
            }, ur("img", {
                src: or,
                alt: ""
            }), ur("div", {
                ref: this.$refs.btnText
            }, n || ""))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.detailBtn.value, e, o)
                },
                btnText: function(e, o) {
                    e !== o && (t.$refs.btnText.value.innerText = e || "")
                },
                cssText: function(e) {
                    t.$refs.detailBtn.value.style.cssText = e || ""
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp-center-code{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,.3);bottom:0;display:none;justify-content:center;left:0;pointer-events:auto;position:absolute;right:0;top:0}.txp-center-code-content{text-align:center}.txp-center-code-name{color:#fff;font-size:20px;line-height:normal;margin-bottom:12px;overflow:hidden;text-align:center;text-overflow:ellipsis;text-shadow:0 1px 3px rgba(0,0,0,.2);white-space:nowrap}.txp-center-code-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#fff;border-radius:8px;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.2);box-shadow:0 0 20px 0 rgba(0,0,0,.2);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding:20px 16px;position:relative;width:240px}.txp-center-code-qr-tips{color:rgba(0,0,0,.4);font-size:16px;line-height:normal;margin-top:12px}.txp-center-code-qr-icon{border:2px solid #fff;border-radius:4px;height:48px;left:96px;position:absolute;top:96px;width:48px}.txp-center-code-close{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-top:12px}.txp-center-code-close:hover path{fill:#fe5c38}.txp-center-code-close-tag{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.5);border-radius:4px;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;padding:2px 4px 2px 6px;position:absolute;right:-6px;top:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.txp-center-code-close-tag>span{color:#fff;font-size:12px;font-style:normal;font-weight:500;line-height:16px}.txp-center-code-close-tag>svg{height:12px;margin-left:2px;width:12px}.txp-center-code[data-mode=size_480_270],.txp-center-code[data-mode=size_590_328]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_480_270] .txp-center-code-card,.txp-center-code[data-mode=size_590_328] .txp-center-code-card{padding:10px 10px 8px;width:110px}.txp-center-code[data-mode=size_480_270] .txp-center-code-name,.txp-center-code[data-mode=size_590_328] .txp-center-code-name{display:none}.txp-center-code[data-mode=size_480_270] .txp-center-code-qr-tips,.txp-center-code[data-mode=size_590_328] .txp-center-code-qr-tips{font-size:10px;margin-top:4px}.txp-center-code[data-mode=size_480_270] .txp-center-code-close,.txp-center-code[data-mode=size_480_270] .txp-center-code-qr-icon,.txp-center-code[data-mode=size_590_328] .txp-center-code-close,.txp-center-code[data-mode=size_590_328] .txp-center-code-qr-icon{display:none}.txp-center-code[data-mode=size_480_270] .txp-center-code-close-tag,.txp-center-code[data-mode=size_590_328] .txp-center-code-close-tag{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.txp-center-code[data-mode=size_1110_624]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_1110_624] .txp-center-code-card{padding:12px;width:152px}.txp-center-code[data-mode=size_1110_624] .txp-center-code-name{display:none}.txp-center-code[data-mode=size_1110_624] .txp-center-code-qr-tips{font-size:12px;margin-top:10px}.txp-center-code[data-mode=size_1110_624] .txp-center-code-close,.txp-center-code[data-mode=size_1110_624] .txp-center-code-qr-icon{display:none}.txp-center-code[data-mode=size_1110_624] .txp-center-code-close-tag{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.txp-center-code[data-mode=size_1920_1080]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=size_1920_1080] .txp-center-code-close-tag{display:none}.txp-center-code[data-mode=default]{display:-webkit-box;display:-ms-flexbox;display:flex}.txp-center-code[data-mode=default] .txp-center-code-name{margin-bottom:16px}.txp-center-code[data-mode=default] .txp-center-code-card{padding:20px;width:280px}.txp-center-code[data-mode=default] .txp-center-code-qr-tips{font-size:18px}.txp-center-code[data-mode=default] .txp-center-code-qr-icon{height:56px;left:112px;top:112px;width:56px}.txp-center-code[data-mode=default] .txp-center-code-close-tag{display:none}");
    var ha = ((pa = {})[tr.SIZE_480_270] = 90,
    pa[tr.SIZE_590_328] = 90,
    pa[tr.SIZE_1110_624] = 128,
    pa[tr.SIZE_1920_1080] = 208,
    pa[tr.DEFAULT] = 240,
    pa)
      , fa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                code: e.createRef(),
                name: e.createRef(),
                iconUrl: e.createRef(),
                qrcodeTips: e.createRef()
            },
            e.handleClick = function(t) {
                t.stopPropagation()
            }
            ,
            e.handleClose = function(t) {
                t.stopPropagation(),
                e.props.onClose()
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.resize = function(t) {
            var e = mr(t);
            this.playerMode !== e && (this.playerMode = e,
            this.$refs.container.value.setAttribute("data-mode", this.playerMode),
            this.renderQrCode())
        }
        ,
        e.prototype.render = function() {
            var t = "txp-center-code";
            return ur("div", {
                ref: this.$refs.container,
                class: "".concat(t, " ").concat(this.props.visible ? "" : "txp_none"),
                onClick: this.handleClick
            }, ur("div", {
                class: "".concat(t, "-content")
            }, ur("div", {
                ref: this.$refs.name,
                class: "".concat(t, "-name")
            }, this.props.name), ur("div", {
                class: "".concat(t, "-card")
            }, ur("div", {
                ref: this.$refs.code,
                class: "".concat(t, "-qr-code")
            }), ur("img", {
                ref: this.$refs.iconUrl,
                class: "".concat(t, "-qr-icon"),
                alt: "",
                src: this.props.iconUrl || ""
            }), ur("div", {
                ref: this.$refs.qrcodeTips,
                class: "".concat(t, "-qr-tips")
            }, this.props.qrcodeTips), ur("div", {
                class: "".concat(t, "-close-tag"),
                onClick: this.handleClose
            }, ur("span", null, "广告"), ur("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none"
            }, ur("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M2.46967 8.23008C2.17678 8.52297 2.17678 8.99784 2.46967 9.29074C2.76256 9.58363 3.23744 9.58363 3.53033 9.29074L6.00526 6.81581L8.48021 9.29076C8.7731 9.58365 9.24798 9.58365 9.54087 9.29076C9.83376 8.99787 9.83376 8.52299 9.54087 8.2301L7.06592 5.75515L9.54074 3.28033C9.83363 2.98744 9.83363 2.51256 9.54074 2.21967C9.24784 1.92678 8.77297 1.92678 8.48008 2.21967L6.00526 4.69449L3.53046 2.21969C3.23757 1.9268 2.76269 1.9268 2.4698 2.21969C2.17691 2.51259 2.17691 2.98746 2.4698 3.28035L4.9446 5.75515L2.46967 8.23008Z",
                fill: "white"
            })))), ur("div", {
                class: "".concat(t, "-close"),
                onClick: this.handleClose
            }, ur("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "26",
                height: "26",
                viewBox: "0 0 26 26",
                fill: "none"
            }, ur("rect", {
                width: "26",
                height: "26",
                rx: "13",
                fill: "black",
                "fill-opacity": "0.3"
            }), ur("path", {
                d: "M8.64645 8.64645L8.29289 8.29289L8.29289 8.29289L8.64645 8.64645ZM8.64645 9.35355L8.29289 9.70711L8.29289 9.70711L8.64645 9.35355ZM9.35355 8.64645L9 9L9 9L9.35355 8.64645ZM13 12.2929L12.6464 12.6464L13 13L13.3536 12.6464L13 12.2929ZM16.6464 8.64645L17 9V9L16.6464 8.64645ZM17.3536 8.64645L17.7071 8.29289L17.7071 8.29289L17.3536 8.64645ZM17.3536 9.35355L17.7071 9.70711V9.70711L17.3536 9.35355ZM13.7071 13L13.3536 12.6464L13 13L13.3536 13.3536L13.7071 13ZM17.3536 16.6464L17.7071 16.2929L17.7071 16.2929L17.3536 16.6464ZM17.3536 17.3536L17.7071 17.7071L17.7071 17.7071L17.3536 17.3536ZM16.6464 17.3536L16.2929 17.7071L16.2929 17.7071L16.6464 17.3536ZM13 13.7071L13.3536 13.3536L13 13L12.6464 13.3536L13 13.7071ZM9.35355 17.3536L9.70711 17.7071H9.70711L9.35355 17.3536ZM8.64645 17.3536L8.29289 17.7071L8.29289 17.7071L8.64645 17.3536ZM8.64645 16.6464L8.29289 16.2929L8.29289 16.2929L8.64645 16.6464ZM12.2929 13L12.6464 13.3536L13 13L12.6464 12.6464L12.2929 13ZM8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L9 9L9 9L8.29289 8.29289ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289L9 9L9 9L9.70711 8.29289ZM13.3536 11.9393L9.70711 8.29289L9 9L12.6464 12.6464L13.3536 11.9393ZM13.3536 12.6464L17 9L16.2929 8.29289L12.6464 11.9393L13.3536 12.6464ZM17 9V9L17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289L17 9ZM17 9V9L17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L17 9ZM17 9L13.3536 12.6464L14.0607 13.3536L17.7071 9.70711L17 9ZM17.7071 16.2929L14.0607 12.6464L13.3536 13.3536L17 17L17.7071 16.2929ZM17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L17 17V17L17.7071 17.7071ZM16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071L17 17H17L16.2929 17.7071ZM12.6464 14.0607L16.2929 17.7071L17 17L13.3536 13.3536L12.6464 14.0607ZM12.6464 13.3536L9 17L9.70711 17.7071L13.3536 14.0607L12.6464 13.3536ZM9 17H9L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L9 17ZM9 17V17L8.29289 16.2929C7.90237 16.6834 7.90237 17.3166 8.29289 17.7071L9 17ZM9 17L12.6464 13.3536L11.9393 12.6464L8.29289 16.2929L9 17ZM8.29289 9.70711L11.9393 13.3536L12.6464 12.6464L9 9L8.29289 9.70711Z",
                fill: "white"
            })))))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                },
                name: function(e, o) {
                    e !== o && (t.$refs.name.value.innerText = e || "")
                },
                iconUrl: function(e, o) {
                    e !== o && Vt(t.$refs.iconUrl.value, "src", e || "")
                },
                qrcodeUrl: function(e, o) {
                    e !== o && t.renderQrCode()
                },
                qrcodeTips: function(e, o) {
                    e !== o && (t.$refs.qrcodeTips.value.innerText = e || "")
                }
            }
        }
        ,
        e.prototype.renderQrCode = function() {
            var t = this.getState("qrcodeUrl");
            if (t && this.playerMode) {
                var e = this.getCodeSize(this.playerMode);
                this.props.renderQrCode(this.$refs.code.value, t, e)
            }
        }
        ,
        e.prototype.getCodeSize = function(t) {
            return ha[t]
        }
        ,
        e
    }(dr);
    Xi(".txp_full_screen_pause-close{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:rgba(51,51,51,.6);border-radius:18px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:36px;justify-content:center;position:absolute;right:24px;top:16px;width:89px;z-index:1000}");
    var va = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                btn: e.createRef()
            },
            e.handleClick = function(t) {
                var o, i;
                t.stopPropagation(),
                null === (i = (o = e.props).onClick) || void 0 === i || i.call(o)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.render = function() {
            return ur("div", {
                ref: this.$refs.btn,
                class: "".concat(ca, "-close"),
                onClick: this.handleClick,
                style: "top:".concat(this.props.top || "", ";left:").concat(this.props.left || "")
            }, "关闭广告")
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                top: function(e) {
                    e && (t.$refs.btn.value.style.top = e)
                },
                left: function(e) {
                    e && (t.$refs.btn.value.style.left = e)
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp_full_screen_pause-material-container{background-size:100% 100%;height:100%;width:100%}.txp_full_screen_pause-material-container video{background:#000}");
    var ma = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                pictureContainer: e.createRef(),
                videoContainer: e.createRef(),
                pictureImg: e.createRef()
            },
            e
        }
        return i(e, t),
        e.prototype.getVideoContainer = function() {
            return this.$refs.videoContainer.value
        }
        ,
        e.prototype.render = function() {
            var t, e = ca;
            return ur("fragment", null, ur("div", {
                ref: this.$refs.videoContainer,
                class: "".concat(e, "-material-container txp_none"),
                "data-acttype": ji.AD_VIEW_AREA,
                "data-eid": "poster"
            }), ur("div", {
                ref: this.$refs.pictureContainer,
                class: "".concat(e, "-material-container txp_none"),
                "data-acttype": ji.AD_VIEW_AREA,
                "data-eid": "poster"
            }, ur("img", {
                ref: this.$refs.pictureImg,
                style: "width:100%; height:100%;",
                alt: "",
                src: null !== (t = this.props.imgSrc) && void 0 !== t ? t : "",
                onLoad: this.props.onImgLoad
            })))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                pictureVisible: function(e, o) {
                    vr(t.$refs.pictureContainer.value, e, o)
                },
                videoVisible: function(e, o) {
                    vr(t.$refs.videoContainer.value, e, o)
                },
                imgSrc: function(e) {
                    t.$refs.pictureImg.value && (e ? t.$refs.pictureImg.value.src = e : Ut(t.$refs.pictureImg.value, "src"))
                },
                postSrc: function(e) {
                    Bt(t.$refs.videoContainer.value, "background-image", "url('".concat(e, "')"))
                }
            }
        }
        ,
        e
    }(dr)
      , ya = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = e.getRefs(),
            e.handlePlayIconClick = function(t) {
                t.stopPropagation(),
                e.props.onPlayIconClick()
            }
            ,
            e.handleClick = function(t) {
                t.stopPropagation();
                var o = t.target
                  , i = hr(o)
                  , r = fr(o);
                e.props.onClick(i, r)
            }
            ,
            e.handleBtnClick = function(t) {
                t.stopPropagation(),
                e.props.onBtnClick(ji.AD_ACTION_BUTTON, "ad_action")
            }
            ,
            e
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "logger", {
            get: function() {
                return this.props.logger
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.getVideoContainer = function() {
            return this.$refs.materialContainer.value.getVideoContainer()
        }
        ,
        e.prototype.updateActionButton = function(t) {
            var e;
            this.$refs.detailBtn.value.setState({
                visible: t.show,
                btnText: null !== (e = t.btnText) && void 0 !== e ? e : "点击视频，了解详情"
            })
        }
        ,
        e.prototype.updatePlayMask = function(t) {
            this.$refs.playerMask.value.show(t)
        }
        ,
        e.prototype.hidePlayMask = function() {
            this.$refs.playerMask.value.hide()
        }
        ,
        e.prototype.toggleMute = function(t) {
            this.$refs.muteIcon.value.setState({
                mute: t
            })
        }
        ,
        e.prototype.setContainerCursor = function(t) {
            Bt(this.$refs.container.value, "cursor", t)
        }
        ,
        e.prototype.setMiniPlayer = function(t) {
            t ? zt(this.$refs.container.value, "mini-player") : Ht(this.$refs.container.value, "mini-player")
        }
        ,
        e.prototype.getRefs = function() {
            return {
                container: this.createRef(),
                playerMask: this.createRef(),
                detailBtn: this.createRef(),
                muteIcon: this.createRef(),
                materialContainer: this.createRef()
            }
        }
        ,
        e.prototype.renderMaterialContainer = function() {
            return ur(ma, {
                ref: this.$refs.materialContainer,
                pictureVisible: this.props.pictureVisible,
                videoVisible: this.props.videoVisible,
                imgSrc: this.props.imgSrc,
                postSrc: this.props.postSrc,
                onImgLoad: this.props.onImgLoad
            })
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                },
                muteVisible: function(e) {
                    t.$refs.muteIcon.value.setState({
                        visible: e
                    })
                },
                playIconVisible: function(e) {
                    t.$refs.playerMask.value.setState({
                        visible: e
                    })
                },
                pictureVisible: function(e) {
                    t.$refs.materialContainer.value.setState({
                        pictureVisible: e
                    })
                },
                videoVisible: function(e) {
                    t.$refs.materialContainer.value.setState({
                        videoVisible: e
                    })
                },
                imgSrc: function(e) {
                    t.$refs.materialContainer.value.setState({
                        imgSrc: e
                    })
                },
                postSrc: function(e) {
                    t.$refs.materialContainer.value.setState({
                        postSrc: e
                    })
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp_full_screen_pause-active{background-color:#000;height:100%;overflow:hidden;position:absolute;width:100%;z-index:1000}.txp_full_screen_pause-active-content,.txp_full_screen_pause-active-mask,.txp_full_screen_pause-active-mask-inner{bottom:0;left:0;position:absolute;right:0;top:0}.txp_full_screen_pause-active-mask{display:none}.txp_full_screen_pause-active-content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;font-weight:500;padding:20px}.txp_full_screen_pause-active-left{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:200px}.txp_full_screen_pause-active-info{-webkit-box-flex:1;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;justify-content:center;-webkit-transform-origin:0 0;transform-origin:0 0}.txp_full_screen_pause-active-info>div{text-align:center;width:100%}.txp_full_screen_pause-active-logo{height:84px;width:84px}.txp_full_screen_pause-active-code{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fff;border-radius:4px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;padding:2px;width:84px}.txp_full_screen_pause-active-code .qrcode{height:80px;width:80px}.txp_full_screen_pause-active-code .qrcode-tips{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:10px;justify-content:center;margin-top:2px;white-space:nowrap}.txp_full_screen_pause-active-only-code .txp_full_screen_pause-active-code{height:84px}.txp_full_screen_pause-active-only-code .qrcode-tips{color:#fff;font-size:14px;line-height:22px;margin-top:12px;text-align:center;white-space:nowrap}.txp_full_screen_pause-active-name{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:20px;justify-content:center;line-height:28px;margin-top:12px}.txp_full_screen_pause-active-name img{height:24px;margin-right:8px;width:24px}.txp_full_screen_pause-active-desc{font-size:16px;line-height:24px;margin-top:10px;opacity:.7}.txp_full_screen_pause-active-right{border-radius:12px;margin-left:16px;overflow:hidden;position:relative}.txp_full_screen_pause-active-right .txp_full_screen_pause-close{right:16px;top:16px}.txp_full_screen_pause-active-right>.txp_full_screen_pause-mute{bottom:12px;left:12px;margin-left:0;position:absolute}.txp_full_screen_pause-active-detail-box{-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:16px;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;right:16px}.txp_full_screen_pause-active .txp_none,.txp_full_screen_pause-active.txp_none{display:none!important}.txp_full_screen_pause-active.mini-player .txp_full_screen_pause-active-desc{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports ((-webkit-backdrop-filter:blur(10px)) or (backdrop-filter:blur(10px))){.txp_full_screen_pause-active-mask{display:block}.txp_full_screen_pause-active-mask-inner{-webkit-backdrop-filter:blur(35px);backdrop-filter:blur(35px);background:rgba(0,0,0,.4)}}");
    Xi(".txp_full_screen_pause-mute{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:rgba(51,51,51,.6);border-radius:18px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:36px;justify-content:center;margin-left:12px;width:36px}.txp_full_screen_pause-mute .txp_svg_symbol{height:18px;width:18px}.txp_full_screen_pause-mute.volume .txp_svg_volume{display:block}.txp_full_screen_pause-mute.mute .txp_svg_volume,.txp_full_screen_pause-mute.volume .txp_svg_volume_mute{display:none}.txp_full_screen_pause-mute.mute .txp_svg_volume_mute{display:block}");
    var ga, _a = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef()
            },
            e.handleClick = function(t) {
                var o, i;
                t.stopPropagation(),
                null === (i = (o = e.props).onToggle) || void 0 === i || i.call(o, !e.props.mute)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.render = function() {
            return ur("div", {
                ref: this.$refs.container,
                class: "".concat(ca, "-mute ").concat(this.props.visible ? "" : "txp_none", " ").concat(this.props.mute ? "mute" : "volume"),
                onClick: this.handleClick,
                style: this.props.cssText
            }, ur("svg", {
                viewBox: "0 0 20 20",
                class: "txp_svg_volume txp_svg_symbol",
                fill: "currentColor"
            }, ur("path", {
                d: "M16.714 15.593l-.01-.01a1 1 0 0 1-1.705-.708c0-.287.124-.542.317-.724C16.354 13.073 17 11.614 17 10s-.645-3.072-1.682-4.151A.993.993 0 0 1 15 5.125a1 1 0 0 1 1-1c.3 0 .561.139.744.348l.017-.016A7.969 7.969 0 0 1 19 10c0 2.178-.874 4.15-2.286 5.593zm-3.999 3.122a.956.956 0 0 1-.688.28c-.009 0-.018.005-.027.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.818l5.432-3.643A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v16c0 .009-.005.017-.005.026a.959.959 0 0 1-.28.689zM6.75 6.643A.984.984 0 0 1 6 7H3v6h3c.304 0 .567.143.75.357l4.25 2.85V3.792L6.75 6.643z"
            })), ur("svg", {
                viewBox: "0 0 20 20",
                class: "txp_svg_volume_mute txp_svg_symbol",
                fill: "currentColor"
            }, ur("path", {
                d: "M16.394 12.566A5.88 5.88 0 0 0 17 10a5.97 5.97 0 0 0-1.682-4.151.993.993 0 0 1-.318-.724 1 1 0 0 1 1-1c.3 0 .561.139.745.348l.016-.016A7.969 7.969 0 0 1 19 10a7.934 7.934 0 0 1-1.116 4.055l-1.49-1.489zM11 3.792L8.978 5.149 7.62 3.792l3.63-2.435A.984.984 0 0 1 12 1c.009 0 .017.005.026.005a.954.954 0 0 1 .968.967c.001.01.006.018.006.028v7.171l-2-2V3.792zm7.864 14.072a.999.999 0 0 1-1.414 0L2.136 2.55a1 1 0 1 1 1.415-1.415L18.864 16.45a1 1 0 0 1 0 1.414zM3.171 5l2 2H3v6h3c.304 0 .567.143.75.357l4.25 2.85v-3.379l2 2V18c0 .009-.005.017-.005.027a.955.955 0 0 1-.967.968c-.01 0-.019.005-.028.005a.984.984 0 0 1-.75-.357L5.818 15H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.171z"
            })))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                mute: function(e, o) {
                    e !== o && (e ? (Ht(t.$refs.container.value, "volume"),
                    zt(t.$refs.container.value, "mute")) : (Ht(t.$refs.container.value, "mute"),
                    zt(t.$refs.container.value, "volume")))
                },
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                },
                cssText: function(e) {
                    t.$refs.container.value.style.cssText = e || ""
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp_full_screen_pause-player-mask{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,.3);border-radius:12px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;opacity:0;position:absolute;-webkit-transition:opacity 50ms ease-in;transition:opacity 50ms ease-in;z-index:10000}.txp_full_screen_pause-player-mask>svg{height:32px;width:32px}.txp_full_screen_pause-player-mask-btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:rgba(51,51,51,.6);border-radius:48px;display:-webkit-box;display:-ms-flexbox;display:flex;height:40px;justify-content:center;width:113px}.txp_full_screen_pause-player-mask-btn>svg{height:16px;width:16px}.txp_full_screen_pause-player-mask-btn>span{color:#fff;font-size:14px;font-style:normal;font-weight:500;line-height:22px;margin-left:6px}"),
    function(t) {
        t.ICON = "icon",
        t.BTN = "btn"
    }(ga || (ga = {}));
    var xa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                playerMask: e.createRef()
            },
            e
        }
        return i(e, t),
        e.prototype.show = function(t) {
            this.$refs.playerMask.value && (this.$refs.playerMask.value.style.cssText = Mt({
                width: "".concat(t.width, "px"),
                height: "".concat(t.height, "px"),
                top: "".concat(t.top, "px"),
                left: "".concat(t.left, "px"),
                opacity: "1"
            }))
        }
        ,
        e.prototype.hide = function() {
            this.$refs.playerMask.value && (this.$refs.playerMask.value.style.opacity = "0")
        }
        ,
        e.prototype.render = function() {
            var t = "".concat(ca, "-player-mask")
              , e = this.props
              , o = e.styleType
              , i = void 0 === o ? ga.ICON : o
              , r = e.onClick;
            return ur("div", {
                ref: this.$refs.playerMask,
                class: "".concat(t, " txp_none"),
                "style-type": i,
                onClick: r
            }, i === ga.BTN ? ur("div", {
                class: "".concat(t, "-btn")
            }, this.renderSvg(), ur("span", null, "继续播放")) : this.renderSvg())
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.playerMask.value, e, o)
                }
            }
        }
        ,
        e.prototype.renderSvg = function() {
            return ur("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, ur("g", {
                "clip-path": "url(#clip0_404_5155)"
            }, ur("path", {
                d: "M23.5 11.402C25.5 12.5567 25.5 15.4435 23.5 16.5982L8 25.5471C6 26.7018 3.5 25.2584 3.5 22.949L3.5 5.05115C3.5 2.74175 6 1.29838 8 2.45308L23.5 11.402Z",
                fill: "white"
            })), ur("defs", null, ur("clipPath", {
                id: "clip0_404_5155"
            }, ur("rect", {
                width: "28",
                height: "28",
                fill: "white"
            }))))
        }
        ,
        e
    }(dr)
      , Aa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = D(D({}, e.getRefs()), {
                mask: e.createRef(),
                content: e.createRef(),
                left: e.createRef(),
                right: e.createRef(),
                player: e.createRef(),
                code: e.createRef(),
                info: e.createRef(),
                centerCode: e.createRef()
            }),
            e.handleCenterCodeClose = function() {
                e.setState({
                    centerCodeVisible: !1
                })
            }
            ,
            e.handleImgError = function(t) {
                var e = t.target;
                e && (e.style.opacity = "0")
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.mounted = function() {
            var t;
            (null === (t = this.props.uiData) || void 0 === t ? void 0 : t.qrcodeUrl) && this.$refs.code.value && this.props.renderQrCode(this.$refs.code.value, this.props.uiData.qrcodeUrl, 80)
        }
        ,
        e.prototype.setContainerCursor = function(t) {
            Bt(this.$refs.content.value, "cursor", t)
        }
        ,
        e.prototype.updateSize = function(t) {
            var e, o;
            null === (e = this.$refs.centerCode.value) || void 0 === e || e.resize(t);
            var i = (null === (o = this.props.uiData) || void 0 === o ? void 0 : o.scale_ratio) || .3
              , r = Math.floor(t.width * i)
              , n = r / 16 * 9
              , a = t.width - 56 - r
              , s = a / 16 * 9;
            this.$refs.left.value.style.width = "".concat(r, "px"),
            this.$refs.left.value.style.height = "".concat(s, "px"),
            this.$refs.right.value.style.width = "".concat(a, "px"),
            this.$refs.right.value.style.height = "".concat(s, "px"),
            this.$refs.player.value.style.width = "".concat(r, "px"),
            this.$refs.player.value.style.height = "".concat(n, "px");
            var d = r / 328;
            return this.$refs.info.value.style.cssText = d < .92 ? Mt({
                width: "328px",
                transform: "scale(".concat(d, ")")
            }) : "",
            {
                width: r,
                height: n,
                left: 20,
                top: t.height - (t.height - s) / 2 - n
            }
        }
        ,
        e.prototype.adjustAd = function() {}
        ,
        e.prototype.render = function() {
            var t, e, o = "".concat(ca, "-active"), i = this.props.uiData;
            return ur("fragment", null, ur("div", {
                ref: this.$refs.container,
                class: "".concat(o, " txp_none"),
                "data-acttype": ji.AD_VIEW_AREA,
                "data-eid": "poster",
                onClick: this.handleClick
            }, ur("div", {
                ref: this.$refs.mask,
                class: "".concat(o, "-mask")
            }, ur("div", {
                class: "".concat(o, "-mask-inner"),
                style: "background: ".concat((null == i ? void 0 : i.background_color) || "")
            })), ur("div", {
                ref: this.$refs.content,
                class: "".concat(o, "-content")
            }, ur("div", {
                ref: this.$refs.left,
                class: "".concat(o, "-left")
            }, ur("div", {
                ref: this.$refs.info,
                class: "".concat(o, "-info")
            }, this.renderInfo()), ur("div", {
                ref: this.$refs.player,
                class: "".concat(o, "-player")
            })), ur("div", {
                ref: this.$refs.right,
                class: "".concat(o, "-right")
            }, this.renderMaterialContainer(), ur(va, {
                onClick: this.props.onClose
            }), ur("div", {
                class: "".concat(o, "-detail-box")
            }, ur(ua, {
                ref: this.$refs.detailBtn,
                acttype: ji.AD_ACTION_BUTTON,
                eid: "ad_action",
                onClick: this.handleBtnClick
            }), (null === (t = this.props.uiData) || void 0 === t ? void 0 : t.split_view_type) === I.RIGHT_HORIZONTAL ? ur(_a, {
                ref: this.$refs.muteIcon,
                onToggle: this.props.onMuteClick
            }) : null), (null === (e = this.props.uiData) || void 0 === e ? void 0 : e.split_view_type) === I.RIGHT_VERTICAL ? ur(_a, {
                ref: this.$refs.muteIcon,
                onToggle: this.props.onMuteClick
            }) : null)), (null == i ? void 0 : i.hasCenterCode) ? ur(fa, {
                ref: this.$refs.centerCode,
                qrcodeUrl: i.qrcodeUrl,
                qrcodeTips: i.qrcodeTips,
                iconUrl: i.icon_url,
                name: i.name,
                onClose: this.handleCenterCodeClose,
                renderQrCode: this.props.renderQrCode
            }) : null), ur(xa, {
                ref: this.$refs.playerMask,
                onClick: this.handlePlayIconClick
            }))
        }
        ,
        e.prototype.renderInfo = function() {
            var t, e, o = "".concat(ca, "-active"), i = this.props.uiData;
            return (null == i ? void 0 : i.split_view_type) === I.RIGHT_HORIZONTAL ? ur("div", null, (null == i ? void 0 : i.qrcodeUrl) ? ur("div", {
                class: "".concat(o, "-code")
            }, ur("div", {
                "data-acttype": ji.AD_ACTION_BUTTON,
                "data-eid": "ad_action",
                class: "qrcode",
                ref: this.$refs.code
            }), ur("div", {
                class: "qrcode-tips"
            }, null !== (t = i.qrcodeTips) && void 0 !== t ? t : "扫码了解详情")) : ur("img", {
                class: "".concat(o, "-logo"),
                src: (null == i ? void 0 : i.icon_url) || "",
                alt: "logo",
                "data-acttype": ji.ADVERTISER_LOGO,
                "data-eid": "ad_head",
                onError: this.handleImgError
            }), ur("div", {
                class: "".concat(o, "-name")
            }, (null == i ? void 0 : i.qrcodeUrl) ? ur("img", {
                class: "".concat(o, "-logo"),
                src: (null == i ? void 0 : i.icon_url) || "",
                alt: "logo",
                "data-acttype": ji.ADVERTISER_LOGO,
                "data-eid": "ad_head",
                onError: this.handleImgError
            }) : null, ur("div", {
                "data-acttype": ji.ADVERTISER_NAME,
                "data-eid": "ad_name"
            }, null == i ? void 0 : i.name)), ur("div", {
                class: "".concat(o, "-desc"),
                "data-acttype": ji.AD_TITLE,
                "data-eid": "ad_title"
            }, null == i ? void 0 : i.description)) : (null == i ? void 0 : i.split_view_type) === I.RIGHT_VERTICAL ? ur("div", null, ur("div", {
                class: "".concat(o, "-only-code")
            }, ur("div", {
                class: "".concat(o, "-code")
            }, ur("div", {
                "data-acttype": ji.AD_ACTION_BUTTON,
                "data-eid": "ad_action",
                class: "qrcode",
                ref: this.$refs.code
            })), ur("div", {
                class: "qrcode-tips"
            }, null !== (e = i.qrcodeTips) && void 0 !== e ? e : "扫码了解详情"))) : null
        }
        ,
        e.prototype.getUpdate = function() {
            var e = this;
            return D(D({}, t.prototype.getUpdate.call(this)), {
                postSrc: function(t) {
                    e.$refs.materialContainer.value.setState({
                        postSrc: t
                    }),
                    Bt(e.$refs.mask.value, "background-image", "url('".concat(t, "')"))
                },
                centerCodeVisible: function(t) {
                    var o;
                    null === (o = e.$refs.centerCode.value) || void 0 === o || o.setState({
                        visible: t
                    })
                }
            })
        }
        ,
        e
    }(ya);
    Xi(".txp_full_screen_pause-bg{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;justify-content:center;overflow:hidden;position:absolute;width:100%;z-index:1000}.txp_full_screen_pause-bg video{background:transparent}.txp_full_screen_pause-bg-mask{background:#000;height:100%;position:absolute;width:100%;z-index:0}.txp_full_screen_pause-bg-mask img{height:100%;width:100%}.txp_full_screen_pause-bg-content{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;width:100%;z-index:100}.txp_full_screen_pause-bg-left{border-radius:12px;overflow:hidden;position:relative}.txp_full_screen_pause-bg-right{margin-left:22px}.txp_full_screen_pause-bg-product-url{border-radius:12px;overflow:hidden;width:100%}.txp_full_screen_pause-bg-product-url img{width:100%}.txp_full_screen_pause-bg .txp_full_screen_pause-ad-flag{left:42px;position:absolute;top:32px}.txp_full_screen_pause-bg .txp_full_screen_pause-close{right:42px;top:32px}.txp_full_screen_pause-bg .txp_none,.txp_full_screen_pause-bg.txp_none{display:none!important}.txp_full_screen_pause-bg .txp_full_screen_pause-mute{bottom:18px;left:18px;margin:0;position:absolute;z-index:1000}.txp_full_screen_pause-bg .txp_full_screen_pause-btn{bottom:16px;position:absolute;right:18px;z-index:1000}");
    var Ca = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = D(D({}, e.getRefs()), {
                mask: e.createRef(),
                content: e.createRef(),
                bgImg: e.createRef(),
                left: e.createRef(),
                right: e.createRef(),
                productImg: e.createRef(),
                closeButton: e.createRef()
            }),
            e.handleImgError = function() {
                e.$refs.bgImg.value.style.opacity = "0",
                vr(e.$refs.mask.value, !0)
            }
            ,
            e.handleImgLoad = function() {
                vr(e.$refs.mask.value, !0)
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.setContainerCursor = function(t) {
            Bt(this.$refs.left.value, "cursor", t),
            Bt(this.$refs.productImg.value, "cursor", t)
        }
        ,
        e.prototype.updateActionButton = function(t) {
            var e;
            this.$refs.detailBtn.value.setState({
                visible: t.show,
                btnText: null !== (e = t.btnText) && void 0 !== e ? e : "了解详情"
            })
        }
        ,
        e.prototype.updateSize = function(t) {
            var e = Math.floor(.564 * t.width)
              , o = Math.floor(.288 * t.width)
              , i = e / 16 * 9
              , r = o
              , n = r / 16 * 9;
            this.$refs.content.value.style.height = "".concat(i, "px"),
            this.$refs.left.value.style.width = "".concat(e, "px"),
            this.$refs.left.value.style.height = "".concat(i, "px"),
            this.$refs.right.value.style.width = "".concat(o, "px"),
            this.$refs.right.value.style.height = "".concat(i, "px");
            var a = (t.height - i) / 2
              , s = (t.width - e - o - 22) / 2;
            return this.$refs.productImg.value.style.maxHeight = "".concat(i - 22 - n, "px"),
            {
                width: r,
                height: n,
                top: t.height - a - n,
                left: s + e + 22
            }
        }
        ,
        e.prototype.adjustAd = function() {}
        ,
        e.prototype.render = function() {
            var t = "".concat(ca, "-bg")
              , e = this.props.uiData;
            return ur("fragment", null, ur("div", {
                ref: this.$refs.container,
                class: "".concat(t, " txp_none"),
                "data-acttype": ji.AD_DETAIL,
                "data-eid": "whole_ad"
            }, ur("div", {
                ref: this.$refs.mask,
                class: "".concat(t, "-mask txp_none")
            }, ur("img", {
                ref: this.$refs.bgImg,
                src: (null == e ? void 0 : e.background_url) || "",
                alt: "",
                onError: this.handleImgError,
                onLoad: this.handleImgLoad
            })), ur("div", {
                ref: this.$refs.content,
                class: "".concat(t, "-content")
            }, ur("div", {
                ref: this.$refs.left,
                class: "".concat(t, "-left"),
                onClick: this.handleClick
            }, this.renderMaterialContainer(), ur(ua, {
                ref: this.$refs.detailBtn,
                acttype: ji.AD_ACTION_BUTTON,
                onClick: this.handleBtnClick
            }), ur(_a, {
                ref: this.$refs.muteIcon,
                onToggle: this.props.onMuteClick
            })), ur("div", {
                ref: this.$refs.right,
                class: "".concat(t, "-right")
            }, ur("div", {
                ref: this.$refs.productImg,
                class: "".concat(t, "-product-url"),
                onClick: this.handleClick,
                "data-acttype": ji.ADVERTISER_LOGO
            }, ur("img", {
                src: (null == e ? void 0 : e.product_url) || "",
                alt: ""
            })))), ur(va, {
                ref: this.$refs.closeButton,
                top: "68px",
                onClick: this.props.onClose
            })), ur(xa, {
                ref: this.$refs.playerMask,
                styleType: ga.BTN,
                onClick: this.handlePlayIconClick
            }))
        }
        ,
        e
    }(ya);
    Xi(".txp_full_screen_pause-bg-v2{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#000;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;justify-content:center;overflow:hidden;position:absolute;width:100%;z-index:1000}.txp_full_screen_pause-bg-v2 video{background:transparent}.txp_full_screen_pause-bg-v2-content{position:relative;z-index:10}.txp_full_screen_pause-bg-v2 .txp_full_screen_pause-mute{margin:0;position:absolute;z-index:1000}.txp_full_screen_pause-bg-v2 .txp_full_screen_pause-btn{position:absolute;z-index:1000}.txp_full_screen_pause-bg-v2-click-hot-area{position:absolute;z-index:100}");
    var ba = {
        width: 1920,
        height: 1080
    }
      , Ea = {
        width: 1083,
        height: 610,
        top: 235,
        left: 122
    }
      , Ia = {
        width: 554,
        height: 260,
        left: 1243,
        top: 235
    }
      , Ta = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = D(D({}, e.getRefs()), {
                content: e.createRef(),
                tvc: e.createRef(),
                product: e.createRef(),
                closeButton: e.createRef()
            }),
            e.handleContentClick = function(t) {
                var o, i;
                t.stopPropagation();
                var r = fr(t.target)
                  , n = t.offsetX
                  , a = t.offsetY
                  , s = e.getClickActtype(n, a);
                e.logger.log("clickArea acttype: ".concat(s)),
                (null === (i = null === (o = e.props.uiData) || void 0 === o ? void 0 : o.clickHotAreaList) || void 0 === i ? void 0 : i.length) || e.props.onClick(s, r)
            }
            ,
            e.handleHotAreaClick = function(t) {
                t.stopPropagation();
                var o = t.target
                  , i = fr(o)
                  , r = t.offsetX
                  , n = t.offsetY
                  , a = e.getClickActtype(r + o.offsetLeft, n + o.offsetTop);
                e.logger.log("clickArea acttype: ".concat(a)),
                e.props.onBtnClick(a, i)
            }
            ,
            e.checkInArea = function(t, e, o) {
                var i = o.top
                  , r = o.width
                  , n = o.height
                  , a = o.left;
                return t >= a && t <= a + r && e >= i && e <= i + n
            }
            ,
            e.getClickActtype = function(t, o) {
                return e.checkFromConfig(t, o, Ea) ? ji.AD_VIEW_AREA : e.checkFromConfig(t, o, Ia) ? ji.ADVERTISER_LOGO : ji.AD_DETAIL
            }
            ,
            e.checkFromConfig = function(t, o, i) {
                var r = e.$refs.content.value.offsetWidth / ba.width
                  , n = {
                    width: Math.round(i.width * r),
                    height: Math.round(i.height * r),
                    top: Math.round(i.top * r),
                    left: Math.round(i.left * r)
                }
                  , a = e.checkInArea(t, o, n);
                return e.logger.log("checkFromConfig ".concat(At({
                    click: {
                        x: t,
                        y: o
                    },
                    config: i,
                    sizeAndPosition: n,
                    inArea: a
                }))),
                a
            }
            ,
            e.updateClickArea = function(t) {
                var o, i, r = e.$refs.content.value.querySelectorAll('div[data-eid="click-area"]');
                null === (i = null === (o = e.props.uiData) || void 0 === o ? void 0 : o.clickHotAreaList) || void 0 === i || i.forEach((function(e, o) {
                    var i = r[o];
                    i && Wt(i, {
                        size: t,
                        hotArea: e
                    })
                }
                ))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.adjustAd = function() {}
        ,
        e.prototype.updateSize = function(t) {
            var e = t.width / ba.width
              , o = Math.round(t.width / 16 * 9);
            this.$refs.content.value.style.cssText = Mt({
                width: "".concat(t.width, "px"),
                height: "".concat(o, "px")
            }),
            this.$refs.muteIcon.value.setState({
                cssText: Mt({
                    bottom: "".concat(Math.round(235 * e) + 18, "px"),
                    left: "".concat(Math.round(122 * e) + 18, "px")
                })
            }),
            this.$refs.detailBtn.value.setState({
                cssText: Mt({
                    right: "".concat(Math.round(715 * e) + 18, "px"),
                    bottom: "".concat(Math.round(235 * e) + 16, "px")
                })
            });
            var i = Math.round(119 * e - 36);
            return this.$refs.closeButton.value.setState({
                top: "".concat(o > t.height ? (o - t.height) / 2 + i : i, "px")
            }),
            this.updateClickArea({
                width: t.width,
                height: o
            }),
            {
                width: Math.round(554 * e),
                height: Math.round(312 * e),
                top: Math.round(533 * e) + (t.height - o) / 2,
                left: Math.round(1243 * e)
            }
        }
        ,
        e.prototype.render = function() {
            var t, e, o = this, i = "".concat(ca, "-bg-v2");
            return ur("fragment", null, ur("div", {
                ref: this.$refs.container,
                class: "".concat(i, " txp_none"),
                "data-acttype": ji.AD_DETAIL,
                onClick: this.handleClick,
                "data-eid": "whole_ad"
            }, ur("div", {
                ref: this.$refs.content,
                class: "".concat(i, "-content"),
                onClick: this.handleContentClick
            }, this.renderMaterialContainer(), ur(_a, {
                ref: this.$refs.muteIcon,
                onToggle: this.props.onMuteClick
            }), ur(ua, {
                ref: this.$refs.detailBtn,
                acttype: ji.AD_ACTION_BUTTON,
                onClick: this.handleBtnClick
            }), ur(va, {
                ref: this.$refs.closeButton,
                top: "48px",
                onClick: this.props.onClose
            }), null === (e = null === (t = this.props.uiData) || void 0 === t ? void 0 : t.clickHotAreaList) || void 0 === e ? void 0 : e.map((function() {
                return ur("div", {
                    "data-eid": "click-area",
                    class: "".concat(i, "-click-hot-area"),
                    onClick: o.handleHotAreaClick
                })
            }
            )))), ur(xa, {
                ref: this.$refs.playerMask,
                styleType: ga.BTN,
                onClick: this.handlePlayIconClick
            }))
        }
        ,
        e
    }(ya);
    Xi(".txp_full_screen_pause-ad-flag{left:16px;position:absolute;top:16px;z-index:3}");
    var wa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                adFlag: e.createRef()
            },
            e
        }
        return i(e, t),
        e.prototype.render = function() {
            return ur("svg", {
                ref: this.$refs.adFlag,
                class: "".concat(ca, "-ad-flag"),
                width: "30",
                height: "16",
                viewBox: "0 0 30 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: "top:".concat(this.props.top || "")
            }, ur("rect", {
                width: "30",
                height: "16",
                rx: "3",
                fill: "#333333",
                "fill-opacity": "0.6",
                style: "fill:#333333;fill-opacity:0.6;"
            }), ur("path", {
                d: "M10.8 3.04V3.8H14.56V5.05H6.88V9.56C6.88 9.99333 6.84 10.4 6.76 10.78C6.68667 11.16 6.57 11.4967 6.41 11.79C6.25 12.0833 6.04667 12.33 5.8 12.53C5.56 12.7367 5.27 12.8833 4.93 12.97V11.34C5.18333 11.1533 5.34667 10.8967 5.42 10.57C5.49333 10.2367 5.53 9.83333 5.53 9.36V3.8H9.45V3.04H10.8ZM24.42 12.84H16.07V8.96H24.42V12.84ZM18 3.37C17.98 3.62333 17.94 3.87 17.88 4.11H19.57V3.09H20.91V4.11H24.63V5.36H20.91V6.92H24.89V8.17H15.6V6.92H19.57V5.36H17.34C17.1467 5.63333 16.9133 5.86333 16.64 6.05C16.3667 6.23 16.05 6.34667 15.69 6.4V5.13C15.9833 5.01 16.2167 4.79 16.39 4.47C16.5633 4.15 16.6667 3.78333 16.7 3.37H18ZM23.07 10.2H17.42V11.59H23.07V10.2Z",
                fill: "white",
                style: "fill:white;fill-opacity:1;"
            }))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                top: function(e) {
                    e && (t.$refs.adFlag.value.style.top = e)
                }
            }
        }
        ,
        e
    }(dr);
    Xi(".txp_full_screen_pause{background:#000;color:#fff;font-size:14px;font-weight:500;height:100%;position:absolute;width:100%;z-index:1000}.txp_full_screen_pause .txp_full_screen_pause-ad-flag{left:16px;position:absolute;top:16px}.txp_full_screen_pause .txp_full_screen_pause-btn{background-color:#fe5c38;border-radius:18px;height:36px;padding:0 12px 0 10px}.txp_full_screen_pause-detail-box{-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:16px;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;right:24px}.txp_full_screen_pause .txp_none,.txp_full_screen_pause.txp_none{display:none!important}");
    var La, Pa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = D(D({}, e.getRefs()), {
                detailBox: e.createRef(),
                closeButton: e.createRef()
            }),
            e
        }
        return i(e, t),
        e.prototype.updateSize = function(t) {
            var e, o, i, r, n = null !== (o = null === (e = this.props.uiData) || void 0 === e ? void 0 : e.split_type) && void 0 !== o ? o : g.LEFT_BOTTOM, a = null !== (r = null === (i = this.props.uiData) || void 0 === i ? void 0 : i.scale_ratio) && void 0 !== r ? r : .3, s = {
                width: Math.floor(t.width * a),
                height: Math.floor(t.height * a),
                top: 16,
                left: 16
            };
            switch (n) {
            case g.LEFT_TOP:
                s.top = 16,
                s.left = 16;
                break;
            case g.LEFT_MIDDLE:
                s.top = t.height / 2 - s.height / 2,
                s.left = 16;
                break;
            case g.LEFT_BOTTOM:
                s.top = t.height - s.height - 16,
                s.left = 16;
                break;
            case g.RIGHT_MIDDLE:
                s.top = t.height / 2 - s.height / 2,
                s.left = t.width - s.width - 16
            }
            return s
        }
        ,
        e.prototype.adjustAd = function(t) {
            t && (this.$refs.closeButton.value.setState({
                top: t.top
            }),
            this.$refs.detailBox.value.style.bottom = t.bottom)
        }
        ,
        e.prototype.render = function() {
            var t = ca;
            return ur("fragment", null, ur("div", {
                ref: this.$refs.container,
                class: "".concat(t, " txp_none"),
                "data-acttype": ji.AD_VIEW_AREA,
                "data-eid": "poster",
                onClick: this.handleClick
            }, this.renderMaterialContainer(), ur(wa, null), ur(va, {
                ref: this.$refs.closeButton,
                onClick: this.props.onClose
            }), ur("div", {
                ref: this.$refs.detailBox,
                class: "".concat(t, "-detail-box")
            }, ur(ua, {
                ref: this.$refs.detailBtn,
                acttype: ji.AD_ACTION_BUTTON,
                onClick: this.handleBtnClick
            }), ur(_a, {
                ref: this.$refs.muteIcon,
                onToggle: this.props.onMuteClick
            }))), ur(xa, {
                ref: this.$refs.playerMask,
                onClick: this.handlePlayIconClick
            }))
        }
        ,
        e
    }(ya), Da = {
        layer: er("full-screen-pause")("layer")
    };
    !function(t) {
        t.IMAGE_LOAD = "FULL_SCREEN_PAUSE_IMAGE_LOAD",
        t.CLOSE_CLICK = "FULL_SCREEN_PAUSE_CLOSE_CLICK",
        t.PLAY_CLICK = "FULL_SCREEN_PAUSE_PLAY_ICON_CLICK",
        t.LINK_AREA_CLICK = "FULL_SCREEN_PAUSE_LINK_AREA_CLICK",
        t.DETAIL_BTN_CLICK = "FULL_SCREEN_PAUSE_DETAIL_BTN_CLICK",
        t.MUTE_CLICK = "FULL_SCREEN_PAUSE_MUTE_CLICK"
    }(La || (La = {}));
    var Na = function(t) {
        function e(e, o) {
            var i = t.call(this, e) || this;
            return i.roleMap = Da,
            i.uiData = o,
            i
        }
        return i(e, t),
        e.prototype.getVideoContainer = function() {
            var t;
            return null === (t = this.ui) || void 0 === t ? void 0 : t.getVideoContainer()
        }
        ,
        e.prototype.setContainerVisible = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                visible: t
            })
        }
        ,
        e.prototype.setMuteVisible = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                muteVisible: t
            })
        }
        ,
        e.prototype.setPictureVisible = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                pictureVisible: t
            })
        }
        ,
        e.prototype.setVideoVisible = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                videoVisible: t
            })
        }
        ,
        e.prototype.setPlayIconVisible = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                playIconVisible: t
            })
        }
        ,
        e.prototype.setMiniPlayer = function(t) {
            var e;
            this.setPlayIconVisible(!t),
            null === (e = this.ui) || void 0 === e || e.setMiniPlayer(t)
        }
        ,
        e.prototype.updateActionButton = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.updateActionButton(t)
        }
        ,
        e.prototype.adjustDomNodes = function() {}
        ,
        e.prototype.updatePlayMask = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.updatePlayMask(t)
        }
        ,
        e.prototype.hidePlayMask = function() {
            var t;
            null === (t = this.ui) || void 0 === t || t.hidePlayMask()
        }
        ,
        e.prototype.toggleMute = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.toggleMute(t)
        }
        ,
        e.prototype.setContainerCursor = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setContainerCursor(t)
        }
        ,
        e.prototype.adjustAd = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.adjustAd(t)
        }
        ,
        e.prototype.updateImgSrc = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                imgSrc: t
            })
        }
        ,
        e.prototype.updatePostSrc = function(t) {
            var e;
            null === (e = this.ui) || void 0 === e || e.setState({
                postSrc: t
            })
        }
        ,
        e.prototype.reset = function() {
            this.destroy(),
            this.ui = void 0
        }
        ,
        e.prototype.updateSize = function(t) {
            var e;
            return null === (e = this.ui) || void 0 === e ? void 0 : e.updateSize(t)
        }
        ,
        e.prototype.showCenterCode = function() {
            var t;
            null === (t = this.ui) || void 0 === t || t.setState({
                centerCodeVisible: !0
            })
        }
        ,
        e.prototype.appendDom = function(t) {
            var e = this
              , o = {
                logger: this.logger,
                uiData: this.uiData,
                onClose: function() {
                    e.emit(La.CLOSE_CLICK)
                },
                onMuteClick: function() {
                    e.emit(La.MUTE_CLICK)
                },
                onClick: function(t, o) {
                    e.emit(La.LINK_AREA_CLICK, {
                        actType: t,
                        eid: o
                    })
                },
                onBtnClick: function(t, o) {
                    e.emit(La.DETAIL_BTN_CLICK, {
                        actType: t,
                        eid: o
                    })
                },
                onPlayIconClick: function() {
                    e.emit(La.PLAY_CLICK)
                },
                onImgLoad: function() {
                    e.emit(La.IMAGE_LOAD)
                },
                renderQrCode: function(t, o, i) {
                    e.adCore.config.renderQrCode(t, me(o, {
                        act: "1025"
                    }), i)
                }
            };
            this.ui = this.renderFullPauseUI(o),
            this.ui.mount(t)
        }
        ,
        e.prototype.getTemplate = function() {
            return ""
        }
        ,
        e.prototype.renderFullPauseUI = function(t) {
            var e = this.uiData.split_view_type;
            return e === I.LEFT_HORIZONTAL_BROKEN ? new Ta(t) : [I.RIGHT_HORIZONTAL, I.RIGHT_VERTICAL].includes(e) ? new Aa(t) : I.LEFT_HORIZONTAL === e ? new Ca(t) : new Pa(t)
        }
        ,
        e
    }(sr)
      , Oa = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            o.resizeRunning = !1,
            o.needRunResize = !1,
            o.handleCloseClick = function() {
                var t;
                o.logger.log("全屏暂停点击关闭按钮"),
                o.data.closeBtnClicked = !0,
                o.adInfo.reportVrAdClick({
                    eid: "close"
                }),
                o.pauseUI.hidePlayMask(),
                o.resetVideoContainer().finally((function() {
                    o.stop({
                        reason: "用户点击关闭"
                    })
                }
                )),
                Xt(M.FEEDBACK, null === (t = o.adInfo) || void 0 === t ? void 0 : t.frequencyControlConfig)
            }
            ,
            o.handlePlayClick = function() {
                o.logger.log("全屏暂停点击播放按钮"),
                o.pauseUI.hidePlayMask(),
                o.resetVideoContainer(!0).finally((function() {
                    o.stop({
                        reason: "全屏暂停点击播放按钮"
                    })
                }
                ))
            }
            ,
            o.handleLinkAreaClick = function(t) {
                o.adInfo.data.poster.enable_fullscreen_click && o.handleDetailClick(t)
            }
            ,
            o.handleDetailClick = function(t) {
                var e = t.actType
                  , i = t.eid;
                if (o.adInfo.clickable) {
                    o.adInfo.isScanActive && !o.adInfo.enableClick && o.pauseUI.showCenterCode();
                    var r = o.data.showTime ? Date.now() - o.data.showTime : -1;
                    o.doClickAction(o.adInfo, {
                        adActType: e,
                        eid: i,
                        playtime: r,
                        orderType: o.adInfo.orderType
                    })
                }
            }
            ,
            o.handleToggleMiniPlayer = function(t) {
                o.pauseUI.setMiniPlayer(!!t.data.isOpened),
                t.data.isOpened && (o.logger.log("切换 MiniPlayer 关闭暂停广告"),
                o.stop({
                    reason: "切换 MiniPlayer 关闭暂停广告"
                }))
            }
            ;
            var i = o.adInfo.data.poster;
            return o.pauseUI = new Na({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType)
            },D(D(D({}, i.advertiser), i.split_control_info), {
                qrcodeUrl: o.adInfo.landing.short_link,
                qrcodeTips: o.adInfo.landing.qrcode_tips,
                hasCenterCode: o.adInfo.isScanActive && !o.adInfo.enableClick,
                clickHotAreaList: i.enable_fullscreen_click ? void 0 : i.click_hot_area_list
            })),
            o.pauseUI.init(),
            o.updateUISize(),
            o.data.startTime = Date.now(),
            o.adCore.outerEvent.on(fi.TOGGLE_MINI_PLAYER, o.handleToggleMiniPlayer),
            o
        }
        return i(e, t),
        e.prototype.stop = function(e) {
            var o = this
              , i = function() {
                o.hide(),
                t.prototype.stop.call(o, e),
                o.vrReportEnded(e),
                o.destroy()
            };
            if (this.logger.log("全屏暂停广告 stop: ".concat(At(e))),
            e.forceStop)
                return this.setState(Si.END),
                this.pauseUI.hidePlayMask(),
                this.resetVideoContainer(!1, !0),
                void i();
            this.state !== Si.END && (this.setState(Si.END),
            this.pauseUI.hidePlayMask(),
            this.resetVideoContainer().finally((function() {
                i()
            }
            )))
        }
        ,
        e.prototype.destroy = function() {
            this.adCore.outerEvent.off(fi.TOGGLE_MINI_PLAYER, this.handleToggleMiniPlayer),
            this.pauseUI.destroy(),
            this.logger.log("全屏暂停广告 destroy"),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.setAdSmallWindow = function(t) {
            t && this.resize()
        }
        ,
        e.prototype.resize = function() {
            if (!this.resizeRunning)
                return this.updateUISize(),
                this.resizeVideoContainer(),
                void (this.needRunResize = !1);
            this.needRunResize = !0
        }
        ,
        e.prototype.adjustUI = function(t) {
            if (t) {
                var e = "".concat(t.top || 16, "px")
                  , o = "".concat(t.bottom || 16, "px");
                this.pauseUI.adjustAd({
                    top: e,
                    bottom: o
                })
            }
        }
        ,
        e.prototype.resizeVideoContainer = function() {
            var t = this;
            this.playerSizeAndPosition && (this.resizeRunning = !0,
            this.pauseUI.hidePlayMask(),
            this.config.resizeVideoContainer(this.playerSizeAndPosition).then((function(e) {
                t.adCore.outerEvent.isMimiPlayer || t.pauseUI.updatePlayMask(e)
            }
            )).catch((function(e) {
                var o;
                t.logger.error("resizeVideoContainer error: ".concat(null !== (o = null == e ? void 0 : e.message) && void 0 !== o ? o : e))
            }
            )).finally((function() {
                t.resizeRunning = !1,
                t.needRunResize && t.resize()
            }
            )))
        }
        ,
        e.prototype.updateUI = function() {
            var t, e, o, i = this.adInfo.data.poster.action_button, r = (null === (t = i.base) || void 0 === t ? void 0 : t.action_title.first_title) || "了解详情";
            this.pauseUI.updateActionButton({
                btnText: r,
                textColor: null === (e = i.base) || void 0 === e ? void 0 : e.text_color,
                bgColor: null === (o = i.base) || void 0 === o ? void 0 : o.bg_color,
                show: !i.display_none
            }),
            this.pauseUI.toggleMute(this.adInfo.muted),
            this.pauseUI.setContainerCursor(this.adInfo.data.poster.enable_fullscreen_click ? "pointer" : "auto"),
            this.pauseUI.setPlayIconVisible(!0)
        }
        ,
        e.prototype.shrinkPlayer = function() {
            var t = this;
            this.playerSizeAndPosition && (this.resizeRunning = !0,
            this.config.shrinkVideoContainer(this.playerSizeAndPosition).then((function(e) {
                t.adCore.outerEvent.isMimiPlayer || t.pauseUI.updatePlayMask(e)
            }
            )).catch((function(e) {
                var o;
                t.logger.error("shrinkVideoContainer error: ".concat(null !== (o = null == e ? void 0 : e.message) && void 0 !== o ? o : e)),
                t.stop({
                    reason: "全屏暂停，缩框时错误"
                })
            }
            )).finally((function() {
                t.resizeRunning = !1,
                t.needRunResize && t.resize()
            }
            )))
        }
        ,
        e.prototype.bindUIEvent = function() {
            this.pauseUI.on(La.CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.on(La.PLAY_CLICK, this.handlePlayClick),
            this.pauseUI.on(La.LINK_AREA_CLICK, this.handleLinkAreaClick),
            this.pauseUI.on(La.DETAIL_BTN_CLICK, this.handleDetailClick)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            this.pauseUI.off(La.CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.off(La.PLAY_CLICK, this.handlePlayClick),
            this.pauseUI.off(La.LINK_AREA_CLICK, this.handleLinkAreaClick),
            this.pauseUI.off(La.DETAIL_BTN_CLICK, this.handleDetailClick)
        }
        ,
        e.prototype.reportExposure = function() {
            this.data.hasReportView || (this.data.hasReportView = !0,
            this.doExposure(this.adInfo),
            this.adInfo.reportVrAdExposure({
                eid: "whole_playbox_ad",
                orderType: this.adInfo.orderType
            }))
        }
        ,
        e.prototype.vrReportEnded = function(t) {
            var e;
            if (!this.data.isFirstClose && this.data.showTime) {
                var o = this.data;
                this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                    adType: this.adType,
                    loadToViewTime: this.getLoadTime(),
                    closeTime: o.closeBtnClicked && this.data.showTime ? Date.now() - this.data.showTime : -1,
                    adPlaytime: o.startTime ? Date.now() - o.startTime : -1,
                    firstView: null !== (e = o.showTime) && void 0 !== e ? e : -1,
                    reason: t.reason
                })),
                o.isFirstClose = !0
            }
        }
        ,
        e.prototype.updateUISize = function() {
            this.playerSizeAndPosition = this.pauseUI.updateSize(this.adCore.config.getContainerSize())
        }
        ,
        e.prototype.resetVideoContainer = function(t, e) {
            return O(this, void 0, void 0, (function() {
                var o = this;
                return S(this, (function(i) {
                    return [2, this.config.resetVideoContainer(t, e).catch((function(t) {
                        var e;
                        o.logger.error("resetVideoContainer error: ".concat(null !== (e = null == t ? void 0 : t.message) && void 0 !== e ? e : t))
                    }
                    )).finally((function() {
                        o.logger.log("resetVideoContainer finally"),
                        o.pauseUI.setContainerVisible(!1)
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        e
    }(Hi)
      , Sa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.handleImageLoad = function() {
                var t;
                e.data.endLoadTime = Date.now(),
                null === (t = e.capturePlayerPromise) || void 0 === t || t.then((function() {
                    var t;
                    e.shrinkPlayer(),
                    e.pauseUI.setContainerVisible(!0),
                    e.show(),
                    e.reportExposure(),
                    e.canplayHandler(),
                    e.loadCompleteHandle({
                        adType: e.adType,
                        adInfo: e.adInfo,
                        index: e.adInfo.orderIdx,
                        loadingTime: e.getLoadTime(),
                        materialUrl: null === (t = e.adInfo.imageMaterial) || void 0 === t ? void 0 : t.url,
                        materialType: e.adInfo.materialType,
                        adGroupId: e.adInfo.orderId
                    })
                }
                )).catch((function(t) {
                    e.logger.log("截图接口出错：".concat((null == t ? void 0 : t.message) || t)),
                    e.stop({
                        reason: "截图接口出错"
                    })
                }
                ))
            }
            ,
            e.handleImageError = function() {
                var t;
                e.data.endLoadTime = Date.now(),
                e.data.errorCode = Ei.LOAD_FAIL,
                e.loadCompleteHandle({
                    adType: e.adType,
                    adInfo: e.adInfo,
                    index: e.adInfo.orderIdx,
                    hasError: "1",
                    loadingTime: e.getLoadTime(),
                    materialUrl: null === (t = e.adInfo.imageMaterial) || void 0 === t ? void 0 : t.url,
                    materialType: e.adInfo.materialType,
                    adGroupId: e.adInfo.orderId
                }),
                e.logger.log("图片素材加载出错"),
                e.stop({
                    reason: "图片素材加载出错"
                })
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.load = function() {
            var e, o, i = this;
            if (!(null === (o = null === (e = this.adInfo) || void 0 === e ? void 0 : e.imageMaterial) || void 0 === o ? void 0 : o.url))
                return this.logger.log("没有广告素材链接"),
                void this.stop({
                    reason: "物料不存在"
                });
            t.prototype.load.call(this),
            this.bindUIEvent(),
            this.adCore.event.emit(Se.AD_LOAD_START, {
                adType: this.order.adType,
                adInfo: this.adInfo
            }),
            this.imageMaterial = new en({
                url: this.adInfo.imageMaterial.url
            }),
            this.imageMaterial.load().then((function(t) {
                i.pauseUI.updateImgSrc(t.src),
                i.pauseUI.setPictureVisible(!0),
                i.updateUI()
            }
            )).catch((function(t) {
                i.handleImageError()
            }
            )),
            this.capturePlayerPromise = this.config.capturePlayer()
        }
        ,
        e.prototype.destroy = function() {
            this.pauseUI.updateImgSrc(),
            this.unbindUIEvent(),
            this.pauseUI.reset(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.updateUI = function() {
            t.prototype.updateUI.call(this),
            this.pauseUI.setMuteVisible(!1)
        }
        ,
        e.prototype.bindUIEvent = function() {
            t.prototype.bindUIEvent.call(this),
            this.pauseUI.on(La.IMAGE_LOAD, this.handleImageLoad)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            t.prototype.unbindUIEvent.call(this),
            this.pauseUI.off(La.IMAGE_LOAD, this.handleImageLoad)
        }
        ,
        e.prototype.getLoadTime = function() {
            var t, e;
            return null !== (e = null === (t = this.imageMaterial) || void 0 === t ? void 0 : t.loadTime) && void 0 !== e ? e : -1
        }
        ,
        e
    }(Oa)
      , Ra = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e
    }(zi)
      , ka = function() {
        function t(t) {
            var e = this;
            this.data = {
                volume: 0,
                playTimes: 0
            },
            this.handleVideoLoadStart = function(t) {
                var o = t.adVideoInfo;
                o.loadStartTime || (o.loadStartTime = Date.now(),
                e.adCore.event.emit(Se.AD_LOAD_START, {
                    adInfo: e.adInfo,
                    adType: e.adInfo.adType,
                    index: e.adInfo.orderIdx
                }))
            }
            ,
            this.handleVideoProcess = function(t) {
                var o = t.adVideoInfo
                  , i = o.loadedPercent;
                o.buffered,
                o.duration;
                if (i) {
                    var r = Date.now();
                    i && o.loadStartTime && (o.speed = o.fileSize / (r - o.loadStartTime) * 1e3);
                    var n = i > .99;
                    e.adCore.event.emit(Se.AD_LOAD_PROGRESS, {
                        adInfo: e.adInfo,
                        adType: e.adInfo.adType,
                        speed: o.speed,
                        loadedPercent: o.loadedPercent,
                        buffered: o.buffered
                    }),
                    n && !e.data.endLoadTime && e.handleVideoLoadComplete(o)
                }
            }
            ,
            this.handleVideoLoadComplete = function(t, o) {
                var i, r, n;
                t.loadCompleteTime || (t.loadCompleteTime = Date.now(),
                e.data.endLoadTime = t.loadCompleteTime),
                t.loadStartTime && (t.loadTime = t.loadCompleteTime - t.loadStartTime),
                t.hasReportLoadComplete || (t.hasReportLoadComplete = !0,
                e.adInterface.loadCompleteHandle({
                    adInfo: e.adInfo,
                    adType: e.adInfo.adType,
                    index: 0,
                    hasError: o ? "1" : void 0,
                    loadingTime: t.loadTime,
                    materialVid: null === (i = e.adInfo.videoMaterial) || void 0 === i ? void 0 : i.vid,
                    materialUrl: null === (r = e.adInfo.videoMaterial) || void 0 === r ? void 0 : r.url,
                    materialDuration: null === (n = e.adInfo.videoMaterial) || void 0 === n ? void 0 : n.duration,
                    materialType: m.VIDEO,
                    adGroupId: e.adInfo.orderId
                }))
            }
            ,
            this.handleVideoCanplay = function() {
                e.adInterface.canplayHandler(),
                e.adPlayer.play()
            }
            ,
            this.handleVideoPlaying = function(t) {
                var o, i, r = t.adVideoInfo;
                null === (i = (o = e.options).onVideoPlayStart) || void 0 === i || i.call(o, r),
                e.data.startPlayTime || (e.data.startPlayTime = Date.now()),
                e.canPlayReport && e.adInfo.reporter.reportPlay({
                    playType: 0 === e.data.playTimes ? _e.AUTO_PLAY : _e.AUTO_REPLAY,
                    timeOffset: e.adPlayer.currentTime
                })
            }
            ,
            this.handleVideoTimeupdate = function(t) {
                var o, i, r = t.adVideoInfo;
                null === (i = (o = e.options).onTimeUpdate) || void 0 === i || i.call(o, e.adPlayer.currentTime, e.adInfo.videoMaterial.duration);
                var n = r.loadedPercent;
                n && (n > .99 && !e.data.endLoadTime && (e.canPlayReport && e.adInfo.reporter.reportPlay({
                    playType: _e.FAIL,
                    failReason: xe.PLAY
                }),
                e.handleVideoLoadComplete(r)))
            }
            ,
            this.handleVideoPause = function() {
                e.adPlayer.play()
            }
            ,
            this.handleVideoError = function(t) {
                var o, i = t.adVideoInfo;
                e.adInterface.data.errors = [null !== (o = i.errorCode) && void 0 !== o ? o : null],
                t.canTryBackup ? i.backupUrlData ? e.adPlayer.playUrl(i) : e.adPlayer.tryPlayBackupUrl(i) : (e.handleVideoLoadComplete(i, !0),
                e.adInterface.stop({
                    reason: "素材加载失败"
                }))
            }
            ,
            this.handleVideoEnd = function() {
                var t;
                e.canPlayReport && e.adInfo.reporter.reportPlay({
                    playType: _e.END,
                    timeOffset: null === (t = e.adInfo.videoMaterial) || void 0 === t ? void 0 : t.duration
                }),
                e.data.playTimes += 1,
                e.retry()
            }
            ,
            this.options = t,
            this.logger = this.adCore.logger.createLogger("PausePlayer"),
            this.adPlayer = this.initPlayer(),
            this.bindVideoEvent()
        }
        return Object.defineProperty(t.prototype, "loadTime", {
            get: function() {
                return this.data.startLoadTime && this.data.endLoadTime ? this.data.endLoadTime - this.data.startLoadTime : -1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adCore", {
            get: function() {
                return this.options.adCore
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adInfo", {
            get: function() {
                return this.options.adInfo
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "adInterface", {
            get: function() {
                return this.options.adInterface
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.load = function(t) {
            var e = t.url
              , o = ue("fmt", e = t.enable_crt_cached ? Ie(t.vid, e, this.adInfo.adType) : e) || _.SHD;
            this.data.urlConfig = {
                uid: "".concat(o, "-").concat(t.vid),
                cacheKey: "".concat(o, "-").concat(t.vid),
                url: e,
                duration: t.duration,
                vid: t.vid,
                fileSize: t.file_size,
                orderId: this.adInfo.orderId,
                adType: p.PAUSE
            },
            this.adCore.event.emit(Se.AD_PLAYER_SESSION_START, {
                adType: this.adInfo.adType,
                vids: [this.data.urlConfig.vid]
            }),
            this.adPlayer.load([this.data.urlConfig]),
            this.data.startLoadTime = Date.now()
        }
        ,
        t.prototype.setVolume = function(t) {
            this.data.volume = Math.min(1, Math.max(0, void 0 === t ? 1 : t)),
            this.adPlayer.volume = this.data.muted ? 0 : this.data.volume
        }
        ,
        t.prototype.toggleMute = function() {
            var t, e;
            this.data.muted = !this.data.muted,
            this.adPlayer.volume = this.data.muted ? 0 : this.data.volume,
            null === (e = (t = this.options).toggleMute) || void 0 === e || e.call(t, this.data.muted),
            this.canPlayReport && this.data.startPlayTime && this.adInfo.reporter.reportPlay({
                playType: this.data.muted ? _e.MUTE : _e.UNMUTE,
                timeOffset: this.adPlayer.currentTime
            })
        }
        ,
        t.prototype.retry = function() {
            var t, e;
            this.data.urlConfig && (this.adPlayer.load([this.data.urlConfig]),
            null === (e = (t = this.options).onTimeUpdate) || void 0 === e || e.call(t, 0, this.adInfo.videoMaterial.duration),
            this.adPlayer.play())
        }
        ,
        t.prototype.destroy = function() {
            var t = this.adPlayer.currentTime;
            this.canPlayReport && this.data.startPlayTime && t && t < this.adInfo.videoMaterial.duration && this.adInfo.reporter.reportPlay({
                playType: _e.INTERRUPT,
                timeOffset: t
            }),
            this.adPlayer.removeAllListeners(),
            this.unbindVideoEvent(),
            this.adPlayer.stop(),
            this.adCore.event.emit(Se.AD_PLAYER_SESSION_END, {
                adType: this.adInfo.adType,
                vids: [this.data.urlConfig.vid]
            }),
            this.adPlayer.destroy()
        }
        ,
        t.prototype.initPlayer = function() {
            var t, e, o = this.adCore.config.createPlayer(this.adCore, this.adInfo.adType, this.options.container), i = this.adCore.config.outerPlayerData.volume;
            return this.data.volume = Math.min(1, Math.max(0, void 0 === i ? 1 : i)),
            this.data.muted = this.adInfo.muted,
            o.volume = this.data.muted ? 0 : this.data.volume,
            null === (e = (t = this.options).toggleMute) || void 0 === e || e.call(t, this.data.muted),
            o
        }
        ,
        t.prototype.bindVideoEvent = function() {
            this.adPlayer.on(Ii.PROGRESS, this.handleVideoProcess),
            this.adPlayer.on(Ii.LOADSTART, this.handleVideoLoadStart),
            this.adPlayer.on(Ii.CANPLAY, this.handleVideoCanplay),
            this.adPlayer.on(Ii.PLAYING, this.handleVideoPlaying),
            this.adPlayer.on(Ii.PAUSE, this.handleVideoPause),
            this.adPlayer.on(Ii.TIMEUPDATE, this.handleVideoTimeupdate),
            this.adPlayer.on(Ii.ENDED, this.handleVideoEnd),
            this.adPlayer.on(Ii.ERROR, this.handleVideoError)
        }
        ,
        t.prototype.unbindVideoEvent = function() {
            this.adPlayer.off(Ii.PROGRESS, this.handleVideoProcess),
            this.adPlayer.off(Ii.LOADSTART, this.handleVideoLoadStart),
            this.adPlayer.off(Ii.CANPLAY, this.handleVideoCanplay),
            this.adPlayer.off(Ii.PLAYING, this.handleVideoPlaying),
            this.adPlayer.off(Ii.PAUSE, this.handleVideoPause),
            this.adPlayer.off(Ii.TIMEUPDATE, this.handleVideoTimeupdate),
            this.adPlayer.on(Ii.ENDED, this.handleVideoEnd),
            this.adPlayer.off(Ii.ERROR, this.handleVideoError)
        }
        ,
        Object.defineProperty(t.prototype, "canPlayReport", {
            get: function() {
                return this.data.playTimes < this.adInfo.maxPlayReportCycles
            },
            enumerable: !1,
            configurable: !0
        }),
        t
    }();
    !function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        i(e, t)
    }(Ra);
    var Ma = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.handleMuteClick = function() {
                o.pausePlayer.toggleMute()
            }
            ,
            o.pausePlayer = new ka({
                container: o.pauseUI.getVideoContainer(),
                adInterface: o,
                adInfo: o.adInfo,
                adCore: o.adCore,
                toggleMute: function(t) {
                    o.pauseUI.toggleMute(t),
                    o.adInfo.reportVrAdClick({
                        eid: "ad_sound"
                    }, {
                        status: t ? 1 : 0
                    })
                },
                onVideoPlayStart: function(e) {
                    o.showAd(),
                    t.prototype.play.call(o),
                    t.prototype.show.call(o),
                    e.hasReportView || (o.logger.log("可见曝光"),
                    e.hasReportView = !0,
                    o.reportExposure())
                }
            }),
            o
        }
        return i(e, t),
        e.prototype.getCurrentPlayer = function() {
            return this.pausePlayer.adPlayer
        }
        ,
        e.prototype.load = function() {
            var e, o;
            if (!(null === (o = null === (e = this.adInfo) || void 0 === e ? void 0 : e.videoMaterial) || void 0 === o ? void 0 : o.url))
                return this.logger.log("没有广告素材链接"),
                void this.stop({
                    reason: "物料不存在"
                });
            t.prototype.load.call(this),
            this.bindUIEvent(),
            this.adCore.event.emit(Se.AD_LOAD_START, {
                adType: this.order.adType,
                adInfo: this.adInfo
            }),
            this.loadPoster(),
            this.pausePlayer.load(this.adInfo.videoMaterial),
            this.capturePlayerPromise = this.config.capturePlayer()
        }
        ,
        e.prototype.setVolume = function(t) {
            this.pausePlayer.setVolume(t)
        }
        ,
        e.prototype.destroy = function() {
            this.data.hasDestroy || (this.unbindUIEvent(),
            this.pausePlayer.destroy(),
            this.pauseUI.adjustDomNodes(),
            this.pauseUI.reset(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.updateUI = function() {
            t.prototype.updateUI.call(this),
            this.pauseUI.setMuteVisible(!0)
        }
        ,
        e.prototype.bindUIEvent = function() {
            t.prototype.bindUIEvent.call(this),
            this.pauseUI.on(La.MUTE_CLICK, this.handleMuteClick)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            t.prototype.unbindUIEvent.call(this),
            this.pauseUI.off(La.MUTE_CLICK, this.handleMuteClick)
        }
        ,
        e.prototype.getLoadTime = function() {
            return this.pausePlayer.loadTime
        }
        ,
        e.prototype.loadPoster = function() {
            var t, e = this, o = null === (t = this.adInfo.data.cover_picture) || void 0 === t ? void 0 : t.url;
            o && (this.imageMaterial = new en({
                url: o
            }),
            this.imageMaterial.load().then((function(t) {
                e.pauseUI.updatePostSrc(t.src),
                e.showAd()
            }
            )).catch((function(t) {}
            )))
        }
        ,
        e.prototype.showAd = function() {
            var t = this;
            !this.data.fullScreenIsShow && this.capturePlayerPromise && this.capturePlayerPromise.then((function() {
                t.data.fullScreenIsShow = !0,
                t.pauseUI.setVideoVisible(!0),
                t.updateUI(),
                t.shrinkPlayer(),
                t.pauseUI.setContainerVisible(!0),
                t.show()
            }
            )).catch((function(e) {
                t.logger.log("截图接口出错：".concat((null == e ? void 0 : e.message) || e)),
                t.stop({
                    reason: "截图接口出错"
                })
            }
            ))
        }
        ,
        e
    }(Oa)
      , Va = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.playTimes = 0,
            e
        }
        return i(e, t),
        e
    }(Ra)
      , Ua = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            o.handleRetryClick = function() {
                o.pauseUI.setLoadingVisible(!0),
                o.pauseUI.setErrorTipsVisible(!1),
                o.createTransparentPlayer()
            }
            ,
            o.handlePlayerCanplay = function() {
                var t;
                o.canplayHandler(),
                null === (t = o.transparentPlayer) || void 0 === t || t.play()
            }
            ,
            o.handlePlayerLoaded = function() {
                var t, e, i;
                o.data.endLoadTime = Date.now(),
                o.loadCompleteHandle({
                    adInfo: o.adInfo,
                    adType: o.adType,
                    index: 0,
                    loadingTime: o.data.endLoadTime - o.data.startLoadTime,
                    materialVid: null === (t = o.adInfo.videoMaterial) || void 0 === t ? void 0 : t.vid,
                    materialUrl: null === (e = o.adInfo.videoMaterial) || void 0 === e ? void 0 : e.url,
                    materialDuration: null === (i = o.adInfo.videoMaterial) || void 0 === i ? void 0 : i.duration,
                    materialType: m.VIDEO,
                    adGroupId: o.adInfo.orderId
                })
            }
            ,
            o.handlePlayerPlay = function() {
                o.data.startPlayTime || (o.data.startPlayTime = Date.now()),
                o.pauseUI.setLoadingVisible(!1),
                o.data.isReportView || (o.data.isReportView = !0,
                o.reportExposure()),
                o.canPlayReport && o.adInfo.reporter.reportPlay({
                    playType: 0 === o.data.playTimes ? _e.AUTO_PLAY : _e.AUTO_REPLAY
                })
            }
            ,
            o.handlePlayerEnded = function() {
                o.canPlayReport && o.adInfo.reporter.reportPlay({
                    playType: _e.END,
                    timeOffset: o.adInfo.videoMaterial.duration
                }),
                o.data.playTimes += 1
            }
            ,
            o.handlePlayerError = function() {
                var t, e, i;
                o.pauseUI.setErrorTipsVisible(!0),
                o.pauseUI.setMaskVisible(!1),
                o.canPlayReport && o.adInfo.reporter.reportPlay({
                    playType: _e.FAIL,
                    failReason: xe.PLAY
                }),
                o.data.endLoadTime || (o.data.endLoadTime = Date.now(),
                o.data.errorCode = Ei.LOAD_FAIL,
                o.loadCompleteHandle({
                    adInfo: o.adInfo,
                    adType: o.adType,
                    index: 0,
                    hasError: "1",
                    loadingTime: o.data.endLoadTime - o.data.startLoadTime,
                    materialVid: null === (t = o.adInfo.videoMaterial) || void 0 === t ? void 0 : t.vid,
                    materialUrl: null === (e = o.adInfo.videoMaterial) || void 0 === e ? void 0 : e.url,
                    materialDuration: null === (i = o.adInfo.videoMaterial) || void 0 === i ? void 0 : i.duration,
                    materialType: m.VIDEO,
                    adGroupId: o.adInfo.orderId
                }))
            }
            ,
            o.pauseUI.reset(),
            o.pauseUI.setPauseContentVisible(!0);
            var i = o.adCore.config.getPlayerSize();
            return o.playerSize = {
                width: i.playerWidth || i.playerOWidth,
                height: i.playerHeight || i.playerOHeight
            },
            o.init(),
            o
        }
        return i(e, t),
        e.prototype.load = function() {
            this.adInfo && this.data.videoUrl && -1 !== this.data.videoUrl.indexOf("http") ? (t.prototype.load.call(this),
            this.pauseUI.setTransparentVideoMaterialVisible(!0),
            this.show(),
            this.adCore.event.emit(Se.AD_LOAD_START, {
                adType: this.adType,
                adInfo: this.adInfo
            }),
            this.data.startLoadTime = Date.now(),
            this.createTransparentPlayer()) : this.stop({
                reason: "物料信息错误"
            })
        }
        ,
        e.prototype.show = function() {
            t.prototype.show.call(this),
            this.pauseUI.setContainerVisible(!0)
        }
        ,
        e.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.pauseUI.setContainerVisible(!1)
        }
        ,
        e.prototype.stop = function(e) {
            this.state !== Si.END && (this.reportPlayNotEnd(),
            t.prototype.stop.call(this, e))
        }
        ,
        e.prototype.destroy = function() {
            var e, o;
            if (!this.data.hasDestroy) {
                var i = null === (e = this.transparentPlayer) || void 0 === e ? void 0 : e.playtime;
                this.canPlayReport && this.data.startPlayTime && i && i < this.adInfo.videoMaterial.duration && this.adInfo.reporter.reportPlay({
                    playType: _e.INTERRUPT,
                    timeOffset: i
                }),
                this.unbindPlayEvent(),
                this.unbindUIEvent(),
                null === (o = this.transparentPlayer) || void 0 === o || o.destroy(),
                this.pauseUI.reset(),
                t.prototype.destroy.call(this)
            }
        }
        ,
        e.prototype.resize = function(t) {
            !t || t.left && t.top || this.setContainerSize()
        }
        ,
        e.prototype.initData = function() {
            return new Va
        }
        ,
        e.prototype.bindUIEvent = function() {
            this.pauseUI.on(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.on(Jn.PAUSE_RETRY_CLICK, this.handleRetryClick),
            this.pauseUI.on(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick)
        }
        ,
        e.prototype.unbindUIEvent = function() {
            this.pauseUI.off(Jn.PAUSE_CLOSE_CLICK, this.handleCloseClick),
            this.pauseUI.off(Jn.PAUSE_RETRY_CLICK, this.handleRetryClick),
            this.pauseUI.off(Jn.PAUSE_LINK_AREA_CLICK, this.handleDetailClick)
        }
        ,
        e.prototype.init = function() {
            var t;
            if (this.pauseUI.updateTransparentVideoContainer(),
            this.pauseUI.updateVideoPost(null === (t = this.adInfo.data.cover_picture) || void 0 === t ? void 0 : t.url),
            this.pauseUI.setLoadingVisible(!0),
            this.pauseUI.setMaskVisible(!0),
            this.pauseUI.updateClickable(this.adInfo.clickable),
            this.adInfo.videoMaterial) {
                var e = this.adInfo.videoMaterial
                  , o = e.url
                  , i = e.enable_crt_cached
                  , r = e.vid;
                this.data.videoUrl = i ? Ie(r, o, this.adInfo.adType) : o
            }
            this.pauseUI.setErrorTipsVisible(!1),
            this.setContainerSize(),
            this.bindUIEvent()
        }
        ,
        e.prototype.setContainerSize = function() {
            var t, e = this.playerSize.width, o = 932, i = 522;
            e < 1390 && (o = 716,
            i = 402),
            e < 1180 && (o = 550,
            i = 309),
            e < 880 && (o = 424,
            i = 238),
            this.containerSize = {
                width: o,
                height: i
            },
            Bt(this.pauseUI.$domNodes.pauseContent, {
                width: o,
                height: i
            }),
            null === (t = this.transparentPlayer) || void 0 === t || t.resize(o, i)
        }
        ,
        e.prototype.createTransparentPlayer = function() {
            var t;
            null === (t = this.transparentPlayer) || void 0 === t || t.destroy(),
            this.transparentPlayer = new Sr({
                url: this.data.videoUrl,
                width: this.containerSize.width,
                height: this.containerSize.height,
                container: this.pauseUI.$domNodes.pauseVideoMaterialContainer,
                loop: !0,
                useCache: !0,
                autoplay: !0,
                fps: 20,
                loopInterval: 0
            }),
            this.transparentPlayer.on(Ir.CANPLAY, this.handlePlayerCanplay),
            this.transparentPlayer.on(Ir.PLAY, this.handlePlayerPlay),
            this.transparentPlayer.on(Ir.ENDED, this.handlePlayerEnded),
            this.transparentPlayer.on(Ir.ERROR, this.handlePlayerError),
            this.transparentPlayer.on(Ir.LOADED, this.handlePlayerLoaded)
        }
        ,
        e.prototype.unbindPlayEvent = function() {
            var t, e, o, i, r;
            null === (t = this.transparentPlayer) || void 0 === t || t.off(Ir.CANPLAY, this.handlePlayerCanplay),
            null === (e = this.transparentPlayer) || void 0 === e || e.off(Ir.PLAY, this.handlePlayerPlay),
            null === (o = this.transparentPlayer) || void 0 === o || o.off(Ir.ENDED, this.handlePlayerEnded),
            null === (i = this.transparentPlayer) || void 0 === i || i.off(Ir.ERROR, this.handlePlayerError),
            null === (r = this.transparentPlayer) || void 0 === r || r.off(Ir.LOADED, this.handlePlayerLoaded)
        }
        ,
        e.prototype.reportPlayNotEnd = function() {
            var t;
            if (this.canPlayReport && this.adInfo.videoMaterial && this.data.startPlayTime) {
                var e = Math.floor((null === (t = this.transparentPlayer) || void 0 === t ? void 0 : t.playtime) || 0);
                e < this.adInfo.videoMaterial.duration && this.adInfo.reporter.reportPlay({
                    playType: _e.INTERRUPT,
                    timeOffset: e
                })
            }
        }
        ,
        Object.defineProperty(e.prototype, "canPlayReport", {
            get: function() {
                return this.data.playTimes < this.adInfo.maxPlayReportCycles
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }(aa);
    !function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        i(e, t)
    }(Ra);
    var Ba, za, Ha = function(t) {
        function e(e) {
            var o, i = t.call(this, e) || this;
            i.logger = i.adCore.logger.createLogger("VideoPauseAd"),
            i.handleMuteClick = function() {
                i.pausePlayer.toggleMute()
            }
            ,
            i.handleRetryClick = function() {
                i.pauseUI.setLoadingVisible(!0),
                i.pauseUI.setErrorTipsVisible(!1),
                i.pausePlayer.retry()
            }
            ,
            i.pauseUI.setPauseContentVisible(!0),
            i.updateUI();
            var r = null === (o = i.adInfo.data.cover_picture) || void 0 === o ? void 0 : o.url;
            return i.pauseUI.updateVideoPost(r),
            i.bindUIEvent(),
            i.pauseUI.updateProgress("0%"),
            i.pauseUI.setLoadingVisible(!0),
            i.pausePlayer = new ka({
                container: i.pauseUI.$domNodes.pauseVideoMaterialContainer,
                adInterface: i,
                adInfo: i.adInfo,
                adCore: i.adCore,
                toggleMute: function(t) {
                    i.pauseUI.toggleMute(t)
                },
                onVideoPlayStart: function(e) {
                    i.pauseUI.setLoadingVisible(!1),
                    i.pauseUI.setMaskVisible(!0),
                    t.prototype.play.call(i),
                    e.hasReportView || (i.logger.log("可见曝光"),
                    e.hasReportView = !0,
                    i.reportExposure())
                },
                onTimeUpdate: function(t, e) {
                    i.pauseUI.updateProgress("".concat(t / e * 100, "%"))
                }
            }),
            i.bindVideoUIEvent(),
            i
        }
        return i(e, t),
        e.prototype.getLoadTime = function() {
            return this.pausePlayer.loadTime
        }
        ,
        e.prototype.getCurrentPlayer = function() {
            return this.pausePlayer.adPlayer
        }
        ,
        e.prototype.load = function() {
            var e, o;
            if (null === (o = null === (e = this.adInfo) || void 0 === e ? void 0 : e.videoMaterial) || void 0 === o ? void 0 : o.url) {
                var i = this.adInfo.videoMaterial
                  , r = i.url
                  , n = ue("fmt", r = i.enable_crt_cached ? Ie(i.vid, r, this.adInfo.adType) : r) || _.SHD;
                this.data.urlConfig = {
                    uid: "".concat(n, "-").concat(i.vid),
                    cacheKey: "".concat(n, "-").concat(i.vid),
                    url: r,
                    duration: i.duration,
                    vid: i.vid,
                    fileSize: i.file_size,
                    orderId: this.adInfo.orderId,
                    adType: this.adType
                },
                t.prototype.load.call(this),
                this.pauseUI.setVideoMaterialVisible(!0),
                this.show(),
                this.canplayHandler(),
                this.pausePlayer.load(this.adInfo.videoMaterial)
            } else
                this.stop({
                    reason: "物料不存在"
                })
        }
        ,
        e.prototype.show = function() {
            t.prototype.show.call(this),
            this.pauseUI.setContainerVisible(!0),
            this.pauseUI.resizeMaterialContainerSize(this.adInfo.isActive)
        }
        ,
        e.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.pauseUI.setContainerVisible(!1)
        }
        ,
        e.prototype.resize = function(t) {
            !t || t.left && t.top || this.pauseUI.resizeMaterialContainerSize(this.adInfo.isActive, t.width)
        }
        ,
        e.prototype.setVolume = function(t) {
            this.pausePlayer.setVolume(t)
        }
        ,
        e.prototype.destroy = function() {
            this.data.hasDestroy || (this.pauseUI.updateProgress("0%"),
            this.unbindUIEvent(),
            this.unbindVideoUIEvent(),
            this.pausePlayer.destroy(),
            this.pauseUI.adjustDomNodes(),
            this.pauseUI.reset(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.bindVideoUIEvent = function() {
            this.pauseUI.on(Jn.PAUSE_MUTE_CLICK, this.handleMuteClick),
            this.pauseUI.on(Jn.PAUSE_RETRY_CLICK, this.handleRetryClick)
        }
        ,
        e.prototype.unbindVideoUIEvent = function() {
            this.pauseUI.off(Jn.PAUSE_MUTE_CLICK, this.handleMuteClick),
            this.pauseUI.off(Jn.PAUSE_RETRY_CLICK, this.handleRetryClick)
        }
        ,
        e
    }(aa), $a = ((Ba = {})[Te.UNKNOWN] = la,
    Ba[Te.EMPTY] = la,
    Ba[Te.CONTRACT_PICTURE] = la,
    Ba[Te.TRANSPARENT_VIDEO] = Ua,
    Ba[Te.ACTIVE_VIDEO] = Ha,
    Ba[Te.CONTRACT_VIDEO] = Ha,
    Ba[Te.ACTIVE_PICTURE] = sa,
    Ba[Te.FULL_SCREEN_PICTURE] = Sa,
    Ba[Te.FULL_SCREEN_VIDEO] = Ma,
    Ba), Ka = function(t) {
        return function(e, o) {
            var i, r;
            if (e.config.disablePauseAd)
                return null;
            var n = null !== (i = o.orders[0]) && void 0 !== i ? i : o.empty[0];
            if (!n)
                return new la({
                    adCore: e,
                    order: o,
                    config: t
                });
            n.isEmpty && n.reporter.reportExposure();
            var a = n.orderType;
            return e.logger.createLogger("PauseAd").log("创建暂停类型：".concat(a)),
            new (null !== (r = $a[a]) && void 0 !== r ? r : la)({
                adCore: e,
                order: o,
                config: t
            })
        }
    }, Ga = function(t, e) {
        if (e.ad_scene === s.PAUSE) {
            var o = e.ad
              , i = e.auth;
            if (o && (o.empty || o.pause))
                return {
                    adData: [{
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: ce(o.pause).map((function(o, r) {
                            return new Re({
                                adCore: t,
                                orderIdx: r,
                                data: o,
                                auth: i,
                                extraInfo: e.extra_info
                            })
                        }
                        ))
                    }]
                }
        }
    }, qa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.loadPauseAd = function(t) {
                return O(e, void 0, void 0, (function() {
                    return S(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return ["user-click", "click-mask", "click-ctrl-mask", "press-hot-key", "click-play-btn"].includes(t.data.pauseType) ? this.adCore.outerEvent.isMimiPlayer ? [2] : [4, this.adCore.config.requestProxyHttp(s.PAUSE)] : [2];
                        case 1:
                            if (e.sent(),
                            "pause" !== this.adCore.config.outerPlayerData.state)
                                return [2];
                            e.label = 2;
                        case 2:
                            return e.trys.push([2, 4, , 5]),
                            [4, this.adCore.api.loadAd(p.PAUSE)];
                        case 3:
                            return e.sent(),
                            [3, 5];
                        case 4:
                            return e.sent(),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.stopPauseAd = function() {
                e.adCore.api.stopAd(p.PAUSE, void 0, "正片续播")
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.config.disablePauseAd || (this.adCore.outerEvent.on(fi.VIDEO_PAUSE, this.loadPauseAd),
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.stopPauseAd))
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.config.disablePauseAd || (this.adCore.outerEvent.off(fi.VIDEO_PAUSE, this.loadPauseAd),
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.stopPauseAd))
        }
        ,
        e
    }(qi), Ya = function(t) {
        return {
            adType: p.PAUSE,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: Ga,
            creator: Ka(t),
            watcher: function(t) {
                return new qa(t)
            }
        }
    }, Fa = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.logger = o.adCore.logger.createLogger("PreAd"),
            o.handleAdStop = function(t) {
                t.adType === p.PRE && t.isAllAdEnd && t.rfid && (o.logger.log("设置 rfid: ".concat(t.rfid)),
                window.localStorage.setItem(bt, t.rfid || ""))
            }
            ,
            o.bindAdEnd(),
            o
        }
        return i(e, t),
        e.prototype.destroy = function() {
            this.unbindAdEnd(),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.bindAdEnd = function() {
            this.adCore.event.on(Se.AD_STOP, this.handleAdStop)
        }
        ,
        e.prototype.unbindAdEnd = function() {
            this.adCore.event.off(Se.AD_STOP, this.handleAdStop)
        }
        ,
        e
    }(Mn), Wa = function(t) {
        return function(e, o) {
            var i, r, n = D(D({}, o), {
                orders: R([], o.orders, !0),
                empty: R([], o.empty, !0)
            }), a = e.order.getAdOrder(p.BROADCAST);
            return a && ((i = n.orders).push.apply(i, a.orders),
            (r = n.empty).push.apply(r, a.empty)),
            new Fa({
                adCore: e,
                order: n,
                config: t
            })
        }
    }, ja = function(t, e) {
        var o;
        if (e.ad_scene !== s.PRE)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.ads) || void 0 === o || o.forEach((function(o) {
            o.ad_type !== p.PRE ? o.ad_type === p.BROADCAST && r.push({
                adType: p.BROADCAST,
                extraData: Vi(e),
                empty: Ne(t, e, o.empty),
                orders: Kn(t, e, o.broadcast)
            }) : r.push({
                adType: p.PRE,
                extraData: Vi(e),
                empty: Ne(t, e, o.empty),
                orders: Kn(t, e, o.pre)
            })
        }
        )),
        r.length > 0 && (i.adData = r),
        i
    }, Qa = er("progress-preview"), Za = {
        layer: Qa("layer"),
        img: Qa("img"),
        adFlag: Qa("flag")
    }, Xa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$domNodes2 = {},
            e.roleMap = Za,
            e
        }
        return i(e, t),
        e.prototype.setLayerVisible = function(t) {
            this.setDomVisible(this.$domNodes.layer, t),
            this.setDomVisible(this.$domNodes2.layer, t)
        }
        ,
        e.prototype.update = function(t) {
            var e = t.url
              , o = t.hasAdFlag;
            this.$domNodes.img && (this.$domNodes.img.src = e),
            this.$domNodes2.img && (this.$domNodes2.img.src = e),
            o ? (Kt(this.$domNodes.adFlag),
            Kt(this.$domNodes2.adFlag)) : ($t(this.$domNodes.adFlag),
            $t(this.$domNodes2.adFlag))
        }
        ,
        e.prototype.mount = function() {
            if (!this.$domNodes.layer) {
                var t = document.createElement("div");
                t.className = "txp_tooltip_preview_ad txp_none",
                t.dataset.role = this.roleMap.layer;
                var e = document.createElement("div");
                e.className = "txp_tooltip_preview_ad txp_none",
                e.dataset.role = this.roleMap.layer,
                this.options.prependEle(t, e),
                this.$domNodes.layer = t,
                this.$domNodes2.layer = e
            }
            this.appendDom(this.$domNodes.layer, this.$domNodes),
            this.appendDom(this.$domNodes2.layer, this.$domNodes2)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <img data-role="'.concat(this.roleMap.img, '" />\n      <txpdiv data-role="').concat(this.roleMap.adFlag, '" class="txp_ad_mark txp_none">广告</txpdiv>\n    ')
        }
        ,
        e
    }(rn), Ja = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.ui = new Xa({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType),
                prependEle: o.config.prependEle
            }),
            o.ui.init(),
            o
        }
        return i(e, t),
        e.prototype.loadMaterialSuccess = function() {
            this.ui.update({
                url: this.adInfo.material.url,
                hasAdFlag: this.adInfo.hasFlag
            }),
            this.show()
        }
        ,
        e
    }(on), ts = function(t) {
        return function(e, o) {
            return new Ja({
                adCore: e,
                order: o,
                config: t
            })
        }
    }, es = function(t, e) {
        if (e.ad_scene === s.PROGRESS_PREVIEW) {
            var o = e.ad;
            if (o && (o.empty || o.progress_preview))
                return {
                    adData: [{
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: pn(t, e, o.progress_preview)
                    }]
                }
        }
    }, os = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hasLoadAd = !1,
            e.throttleReportAd = de((function() {
                e.adCore.api.reportAd(p.PROGRESS_PREVIEW)
            }
            ), 2e3),
            e.loadProgressPreviewAd = function() {
                return O(e, void 0, void 0, (function() {
                    return S(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.adCore.config.requestProxyHttp ? this.hasLoadAd ? [3, 5] : (this.hasLoadAd = !0,
                            [4, this.adCore.config.requestProxyHttp(s.PROGRESS_PREVIEW)]) : [2];
                        case 1:
                            t.sent(),
                            t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]),
                            [4, this.adCore.api.loadAd(p.PROGRESS_PREVIEW)];
                        case 3:
                            return t.sent(),
                            [3, 5];
                        case 4:
                            return t.sent(),
                            [3, 5];
                        case 5:
                            return this.throttleReportAd(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.outerEvent.on(fi.HOVER_PROGRESS, this.loadProgressPreviewAd)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.outerEvent.off(fi.HOVER_PROGRESS, this.loadProgressPreviewAd)
        }
        ,
        e.prototype.reset = function() {
            this.hasLoadAd = !1,
            this.throttleReportAd.cancel()
        }
        ,
        e
    }(qi), is = function(t) {
        return {
            adType: p.PROGRESS_PREVIEW,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: es,
            creator: ts(t),
            watcher: function(t) {
                return new os(t)
            }
        }
    };
    !function(t) {
        t[t.UNKNOWN = 0] = "UNKNOWN",
        t[t.CLICK_TO_NAVIGATE = 1] = "CLICK_TO_NAVIGATE",
        t[t.HOVER_TO_REVEAL = 2] = "HOVER_TO_REVEAL"
    }(za || (za = {}));
    var rs = function(t) {
        function e(e) {
            var o = this
              , i = e.bubble_material
              , r = e.vr_map
              , n = N(e, ["bubble_material", "vr_map"]);
            return (o = t.call(this, n) || this).bubble_material = D({}, i),
            o.vr_map = r,
            o
        }
        return i(e, t),
        e.prototype.getVrReportData = function() {
            return this.vr_map
        }
        ,
        e
    }(Le)
      , ns = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e
    }(zi);
    Xi(".reward_bubble{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reward_bubble_content{background:hsla(0,0%,9%,.9);border-radius:12px;bottom:100px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:92px;left:40px;pointer-events:auto;position:absolute;-webkit-transform-origin:0 100%;transform-origin:0 100%}.reward_bubble_poster{height:92px;position:relative;width:84px}.reward_bubble_poster .icon-bg-box{background:-webkit-gradient(linear,left top,left bottom,from(hsla(45,88%,77%,.15)),to(hsla(45,76%,67%,.15)));background:linear-gradient(180deg,hsla(45,88%,77%,.15),hsla(45,76%,67%,.15));border-radius:30px;height:60px;left:12px;overflow:hidden;position:absolute;top:16px;width:60px;will-change:auto}.reward_bubble_poster .icon-box{height:54px;left:14px;position:absolute;top:14px;width:34px;will-change:auto}.reward_bubble_poster .icon-box .icon1{height:54px;position:absolute;width:34px;will-change:auto;z-index:4}.reward_bubble_poster .icon-box .icon2-box{height:54px;left:0;overflow:hidden;position:absolute;top:0;-webkit-transform:translateY(2px) rotate(-12deg);transform:translateY(2px) rotate(-12deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;width:16px;will-change:auto}.reward_bubble_poster .icon-box .icon2{height:54px;left:0;position:absolute;top:0;width:34px;z-index:2}.reward_bubble_poster .poster-img{border-radius:4px;height:84px;left:12px;opacity:0;position:absolute;top:-4px;width:60px;will-change:auto;z-index:5}.reward_bubble_info .title{color:#f7dd8f;font-size:16px;font-weight:500;line-height:22px;margin-top:21px;text-overflow:ellipsis;white-space:nowrap}.reward_bubble_info .subtitle{color:#fff;font-size:14px;font-weight:400;line-height:20px;margin-top:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.reward_bubble_action{margin:0 16px}.reward_bubble_action,.reward_bubble_btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;width:88px}.reward_bubble_btn{background:-webkit-gradient(linear,left top,right top,from(#ebcb6d),to(#f9e094));background:linear-gradient(90deg,#ebcb6d,#f9e094);border-radius:100px;color:#6d3b00;font-size:14px;font-weight:500;height:36px}.reward_bubble_close{position:absolute;right:-16px;top:-16px}.reward_bubble_close>svg{height:32px;width:32px}.reward_bubble[animation-type=icon] .icon2-box{-webkit-transform:translateY(2px) rotate(-12deg);transform:translateY(2px) rotate(-12deg);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 0ms,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms}.reward_bubble[animation-type=icon] .icon-box{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s;transition:opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity 50ms linear .9s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s}.reward_bubble[animation-type=icon] .icon-bg-box{background-color:hsla(45,88%,77%,.15);border-radius:30px;height:60px;opacity:1;top:16px;-webkit-transition:all .5s cubic-bezier(.48,.04,.52,.96) .75s,opacity .5s linear 1.25s;transition:all .5s cubic-bezier(.48,.04,.52,.96) .75s,opacity .5s linear 1.25s;width:60px}.reward_bubble[animation-type=icon] .poster-img{opacity:0;-webkit-transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 1.25s}.reward_bubble[animation-type=forward] .icon2-box{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 0ms,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 0ms}.reward_bubble[animation-type=forward] .icon-box{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s;transition:opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity 50ms linear .9s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity 50ms linear .9s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .5s}.reward_bubble[animation-type=forward] .icon-bg-box{background-color:#ebcb6d;border-radius:4px;height:84px;opacity:0;top:-4px;-webkit-transition:all .5s cubic-bezier(.48,.04,.52,.96) .75s,opacity .5s linear 1.25s;transition:all .5s cubic-bezier(.48,.04,.52,.96) .75s,opacity .5s linear 1.25s;width:60px}.reward_bubble[animation-type=forward] .poster-img{opacity:1;-webkit-transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 1.25s}.reward_bubble[animation-type=poster] .icon2-box{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s}.reward_bubble[animation-type=poster] .icon-box{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .75s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s}.reward_bubble[animation-type=poster] .icon-bg-box{background-color:#ebcb6d;border-radius:4px;height:84px;opacity:0;top:-4px;-webkit-transition:all .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:all .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;width:60px}.reward_bubble[animation-type=poster] .poster-img{opacity:1;-webkit-transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms}.reward_bubble[animation-type=reverse] .icon2-box{-webkit-transform:translateY(2px) rotate(-12deg);transform:translateY(2px) rotate(-12deg);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) 1.25s}.reward_bubble[animation-type=reverse] .icon-box{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .75s;transition:transform .5s cubic-bezier(.48,.04,.52,.96) .75s,-webkit-transform .5s cubic-bezier(.48,.04,.52,.96) .75s}.reward_bubble[animation-type=reverse] .icon-bg-box{background-color:hsla(45,88%,77%,.15);border-radius:30px;height:60px;opacity:1;top:16px;-webkit-transition:all .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:all .5s cubic-bezier(.48,.04,.52,.96) .5s,opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;width:60px}.reward_bubble[animation-type=reverse] .poster-img{opacity:0;-webkit-transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms;transition:opacity .5s cubic-bezier(.48,.04,.52,.96) 0ms}");
    var as = 5e3
      , ss = 1e4
      , ds = 1750
      , ls = as + ds + ss + ds
      , cs = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.$refs = {
                container: o.createRef(),
                content: o.createRef(),
                iconBox: o.createRef(),
                posterImg: o.createRef(),
                code: o.createRef()
            },
            o.timeupdate = function(t) {
                var e = o.$refs.container.value;
                if (e) {
                    var i = t % ls
                      , r = e.getAttribute("animation-type")
                      , n = o.getAnimationType(i);
                    r !== n && e.setAttribute("animation-type", n)
                }
            }
            ,
            o.getAnimationType = function(t) {
                var e = as;
                return t < e ? "icon" : t <= (e += ds) ? "forward" : t < (e += ss) ? "poster" : t <= (e += ds) ? "reverse" : ""
            }
            ,
            o.handleClose = function(t) {
                var e, i;
                t.stopPropagation(),
                null === (i = (e = o.props).onClose) || void 0 === i || i.call(e, {
                    isUserClick: !0
                })
            }
            ,
            o.handleClick = function(t) {
                var e, i;
                t.stopPropagation(),
                null === (i = (e = o.props).onClick) || void 0 === i || i.call(e)
            }
            ,
            o.fpsTimer = new Nr(o.timeupdate),
            o
        }
        return i(e, t),
        e.prototype.mounted = function() {
            t.prototype.mounted.call(this),
            this.$refs.iconBox.value.innerHTML = "".concat('\n<svg class="icon1" width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36523 54C1.50666 54 7.09194e-07 52.4933 1.58403e-06 50.6348L2.3834e-05 3.36523C2.47089e-05 1.50666 1.50669 -3.46786e-06 3.36526 -5.98105e-06L13 -1.90094e-05L13 1.15082e-05C13 2.20915 14.7909 4.00001 17 4.00001C19.2091 4 21 2.20914 21 6.90488e-07L21 -2.98271e-05L30.6348 -4.28555e-05C32.4933 -4.53687e-05 34 1.50662 34 3.36518L34 50.6347C34 52.4933 32.4933 54 30.6347 54L20.8739 54C20.4299 52.2748 18.8638 51 17 51C15.1362 51 13.5701 52.2748 13.126 54L3.36523 54Z" fill="url(#paint0_linear_1060_88)" style=""/>\n<mask id="mask0_1060_88" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="54">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36523 54C1.50666 54 7.09194e-07 52.4933 1.58403e-06 50.6348L2.3834e-05 3.36523C2.47089e-05 1.50666 1.50669 -3.46786e-06 3.36526 -5.98105e-06L13 -1.90094e-05L13 1.15082e-05C13 2.20915 14.7909 4.00001 17 4.00001C19.2091 4 21 2.20914 21 6.90488e-07L21 -2.98271e-05L30.6348 -4.28555e-05C32.4933 -4.53687e-05 34 1.50662 34 3.36518L34 50.6347C34 52.4933 32.4933 54 30.6347 54L20.8739 54C20.4299 52.2748 18.8638 51 17 51C15.1362 51 13.5701 52.2748 13.126 54L3.36523 54Z" fill="url(#paint1_linear_1060_88)" style=""/>\n</mask>\n<g mask="url(#mask0_1060_88)">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M-6.36328 24.3979C-6.38374 24.5052 -6.40134 24.6134 -6.42127 24.7209V24.7209C-1.84085 26.0677 2.65931 27.7601 7.02666 29.8156V29.8156C11.5517 31.9449 15.8918 34.177 19.5765 37.0428V37.0428C22.0611 38.9752 22.3265 41.4123 19.597 43.5148V43.5148C15.9419 46.33 11.6931 48.5889 7.23725 50.7191V50.7191C2.80002 52.8402 -1.77832 54.5841 -6.44286 55.9693V55.9693C-6.42189 56.0811 -6.40377 56.1938 -6.38254 56.3056V56.3056C-5.75392 59.5941 -2.22514 61.5556 1.0336 60.431V60.431C6.2193 58.6417 11.3087 56.3652 16.2373 53.5844V53.5844C21.0518 50.8679 25.8618 48.1464 29.5933 44.3964V44.3964C32.6042 41.3697 32.2358 38.5558 29.571 36.1418V36.1418C25.5997 32.5435 20.8989 29.6402 16.0093 26.9239V26.9239C11.1478 24.2235 6.13472 22.01 1.03055 20.2685V20.2685C0.408934 20.0563 -0.222 19.9565 -0.840506 19.9565V19.9565C-3.45874 19.9565 -5.85327 21.7466 -6.36328 24.3979M-13.8888 28.036C-15.4192 31.9504 -15.332 36.3145 -15.332 40.6101V40.6101C-15.332 44.8778 -15.3535 49.1897 -13.907 53.1051V53.1051C-12.5776 56.7041 -9.95963 57.2299 -6.86532 56.3466V56.3466C-6.73196 56.3082 -6.59967 56.267 -6.46658 56.2283V56.2283C-7.41737 51.2619 -7.92107 46.1485 -7.94022 40.9279V40.9279C-7.94155 40.8268 -7.94394 40.7261 -7.94394 40.6249V40.6249L-7.94421 40.6274L-7.94421 40.6206C-7.94424 35.2582 -7.42943 30.0095 -6.44734 24.9147V24.9147C-6.58787 24.8745 -6.7276 24.8314 -6.8684 24.7917V24.7917C-7.57849 24.5913 -8.26865 24.4894 -8.92508 24.4894V24.4894C-11.1249 24.4894 -12.9489 25.6321 -13.8888 28.036M-6.44198 40.1552C-6.44196 44.693 -6.06953 49.2417 -5.33372 53.7021V53.7021C-1.30988 52.4206 2.60869 50.8706 6.33861 49.085V49.085C10.1581 47.2565 14.5716 44.9936 18.345 42.0833V42.0833C18.9583 41.6102 19.6907 40.8766 19.6923 40.0726V40.0726C19.6938 39.4241 19.2056 38.6863 18.3182 37.9951V37.9951C14.6796 35.1596 10.314 32.9474 6.13752 30.9787V30.9787C2.47244 29.2505 -1.37332 27.7491 -5.31635 26.5065V26.5065C-6.06371 31.0001 -6.442 35.5835 -6.44198 40.1552M-0.489852 45.4917C-0.489852 45.4917 -0.694742 44.9286 -0.694765 40.3345V40.3345C-0.694788 35.7403 -0.489904 35.2239 -0.489904 35.2239V35.2239C-0.343523 34.6286 -0.00528188 34.4673 0.528906 34.6145V34.6145C0.528906 34.6145 2.10311 34.9285 5.90706 36.8057V36.8057C9.75214 38.7036 10.9319 39.7486 10.9319 39.7486V39.7486C11.5162 40.2309 11.3979 40.5246 10.9319 40.9672V40.9672C10.9319 40.9672 10.2117 41.7458 5.90505 43.8434V43.8434C1.59887 45.9405 0.528963 46.1014 0.528963 46.1014V46.1014C0.393309 46.1313 0.274516 46.1467 0.170795 46.1467V46.1467C-0.214197 46.1467 -0.394049 45.9361 -0.489852 45.4917" fill="url(#paint2_linear_1060_88)" fill-opacity="0.6" style=""/>\n</g>\n<g opacity="0.2">\n<mask id="path-4-inside-1_1060_88" fill="white">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.52441 53.0166C2.13049 53.0166 1.00049 51.8866 1.00049 50.4927L1.00051 3.54052C1.00051 2.1466 2.13051 1.0166 3.52444 1.0166L12.0364 1.01659C12.3338 3.49406 14.4429 5.41438 17.0005 5.41438C19.5581 5.41437 21.6672 3.49404 21.9646 1.01657L30.4766 1.01656C31.8705 1.01656 33.0005 2.14656 33.0005 3.54048L33.0005 50.4926C33.0005 51.8866 31.8705 53.0166 30.4766 53.0166L21.7761 53.0166C21.1435 50.9805 19.2447 49.502 17.0005 49.502C14.7563 49.502 12.8575 50.9805 12.2249 53.0166L3.52441 53.0166Z"/>\n</mask>\n<path d="M12.0364 1.01659L12.6625 0.941436L12.5958 0.386067L12.0364 0.386068L12.0364 1.01659ZM21.9646 1.01657L21.9646 0.386054L21.4052 0.386055L21.3386 0.941425L21.9646 1.01657ZM33.0005 3.54048L32.37 3.54048L33.0005 3.54048ZM33.0005 50.4926L33.631 50.4926L33.0005 50.4926ZM30.4766 53.0166L30.4766 53.6471L30.4766 53.0166ZM21.7761 53.0166L21.174 53.2037L21.3118 53.6471L21.7761 53.6471L21.7761 53.0166ZM12.2249 53.0166L12.2249 53.6471L12.6892 53.6471L12.827 53.2037L12.2249 53.0166ZM0.369972 50.4927C0.369971 52.2348 1.78226 53.6471 3.52441 53.6471L3.52441 52.3861C2.47871 52.3861 1.63101 51.5384 1.63101 50.4927L0.369972 50.4927ZM0.369994 3.54052L0.369972 50.4927L1.63101 50.4927L1.63103 3.54052L0.369994 3.54052ZM3.52444 0.386079C1.78229 0.386082 0.369995 1.79837 0.369994 3.54052L1.63103 3.54052C1.63103 2.49482 2.47874 1.64712 3.52444 1.64712L3.52444 0.386079ZM12.0364 0.386068L3.52444 0.386079L3.52444 1.64712L12.0364 1.6471L12.0364 0.386068ZM17.0005 4.78386C14.7659 4.78386 12.9223 3.10584 12.6625 0.941436L11.4104 1.09173C11.7454 3.88228 14.1199 6.0449 17.0005 6.04489L17.0005 4.78386ZM21.3386 0.941425C21.0788 3.10583 19.2351 4.78386 17.0005 4.78386L17.0005 6.04489C19.8811 6.04489 22.2556 3.88226 22.5906 1.09172L21.3386 0.941425ZM30.4766 0.386043L21.9646 0.386054L21.9646 1.64709L30.4766 1.64708L30.4766 0.386043ZM33.631 3.54048C33.631 1.79833 32.2187 0.38604 30.4766 0.386043L30.4766 1.64708C31.5223 1.64708 32.37 2.49478 32.37 3.54048L33.631 3.54048ZM33.631 50.4926L33.631 3.54048L32.37 3.54048L32.37 50.4926L33.631 50.4926ZM30.4766 53.6471C32.2187 53.6471 33.631 52.2348 33.631 50.4926L32.37 50.4926C32.37 51.5383 31.5223 52.386 30.4766 52.386L30.4766 53.6471ZM21.7761 53.6471L30.4766 53.6471L30.4766 52.386L21.7761 52.3861L21.7761 53.6471ZM17.0005 50.1325C18.9607 50.1325 20.621 51.4238 21.174 53.2037L22.3783 52.8295C21.6661 50.5372 19.5286 48.8715 17.0005 48.8715L17.0005 50.1325ZM12.827 53.2037C13.38 51.4238 15.0403 50.1325 17.0005 50.1325L17.0005 48.8715C14.4724 48.8715 12.335 50.5372 11.6228 52.8295L12.827 53.2037ZM3.52441 53.6471L12.2249 53.6471L12.2249 52.3861L3.52441 52.3861L3.52441 53.6471Z" fill="#663D00" style="fill:#663D00;fill-opacity:1;" mask="url(#path-4-inside-1_1060_88)"/>\n<path d="M1.50049 14.2036L32.5005 14.2036" stroke="#663D00" style="stroke:#663D00;stroke-opacity:1;" stroke-width="0.630518"/>\n</g>\n<defs>\n<linearGradient id="paint0_linear_1060_88" x1="19.4983" y1="54.0004" x2="19.4983" y2="0.259118" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FFD56A" style="stop-color:#FFD56A;stop-opacity:1;"/>\n<stop offset="0.845" stop-color="#FFD56A" style="stop-color:#FFD56A;stop-opacity:1;"/>\n</linearGradient>\n<linearGradient id="paint1_linear_1060_88" x1="19.4983" y1="54.0004" x2="19.4983" y2="0.259118" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FFD56A" style="stop-color:#FFD56A;stop-opacity:1;"/>\n<stop offset="0.845" stop-color="#FFD56A" style="stop-color:#FFD56A;stop-opacity:1;"/>\n</linearGradient>\n<linearGradient id="paint2_linear_1060_88" x1="-15.3329" y1="40.3532" x2="31.7131" y2="40.353" gradientUnits="userSpaceOnUse">\n<stop stop-color="#E7B351" style="stop-color:#E7B351;stop-opacity:1;"/>\n<stop offset="1" stop-color="#E8AB37" style="stop-color:#E8AB37;stop-opacity:1;"/>\n</linearGradient>\n</defs>\n</svg>\n', '<div class="icon2-box">').concat('\n<svg class="icon2" width="34" height="54" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36523 54C1.50666 54 7.09194e-07 52.4933 1.58403e-06 50.6348L2.3834e-05 3.36523C2.47089e-05 1.50666 1.50669 -3.46786e-06 3.36526 -5.98105e-06L13 -1.90094e-05L13 1.15082e-05C13 2.20915 14.7909 4.00001 17 4.00001C19.2091 4 21 2.20914 21 6.90489e-07L21 -2.98271e-05L30.6348 -4.28555e-05C32.4933 -4.53687e-05 34 1.50662 34 3.36518L34 50.6347C34 52.4933 32.4933 54 30.6347 54L20.8739 54C20.4299 52.2748 18.8638 51 17 51C15.1362 51 13.5701 52.2748 13.126 54L3.36523 54Z" fill="url(#paint0_linear_1060_84)" style=""/>\n<defs>\n<linearGradient id="paint0_linear_1060_84" x1="19.4983" y1="54.0004" x2="19.4983" y2="0.259118" gradientUnits="userSpaceOnUse">\n<stop stop-color="#BFA04F" style="stop-color:#BFA04F;stop-opacity:1;"/>\n<stop offset="0.845" stop-color="#BFA04F" style="stop-color:#BFA04F;stop-opacity:1;"/>\n</linearGradient>\n</defs>\n</svg>\n', "</div>")
        }
        ,
        e.prototype.updateClosePercent = function() {}
        ,
        e.prototype.start = function() {
            this.fpsTimer.start()
        }
        ,
        e.prototype.resize = function(t) {
            var e = this.$refs.content.value;
            e && (t.width < 960 ? e.style.transform = "scale(".concat(t.width / 1160, ")") : e.style.transform = "scale(1)")
        }
        ,
        e.prototype.render = function() {
            var t, e = null === (t = this.props) || void 0 === t ? void 0 : t.bubbleMaterial;
            return ur("div", {
                ref: this.$refs.container,
                class: "txp_ad reward_bubble txp_none"
            }, ur("div", {
                ref: this.$refs.content,
                class: "reward_bubble_content",
                onClick: this.handleClick
            }, ur("div", {
                class: "reward_bubble_poster"
            }, ur("div", {
                class: "icon-bg-box"
            }, ur("div", {
                ref: this.$refs.iconBox,
                class: "icon-box"
            })), ur("img", {
                class: "poster-img",
                ref: this.$refs.posterImg,
                alt: "",
                src: (null == e ? void 0 : e.post_url) || ""
            })), ur("div", {
                class: "reward_bubble_info"
            }, ur("div", {
                class: "title",
                title: (null == e ? void 0 : e.title) || ""
            }, (null == e ? void 0 : e.title) || ""), ur("div", {
                class: "subtitle",
                title: (null == e ? void 0 : e.sub_title) || ""
            }, this.getSubtitle())), ur("div", {
                class: "reward_bubble_action"
            }, ur("div", {
                class: "reward_bubble_btn"
            }, (null == e ? void 0 : e.jump_text) || "")), ur("div", {
                class: "reward_bubble_close",
                onClick: this.handleClose
            }, ur("svg", {
                width: "39",
                height: "39",
                viewBox: "0 0 39 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, ur("circle", {
                cx: "19.5",
                cy: "19.6738",
                r: "18",
                fill: "#161622",
                "fill-opacity": "0.85",
                style: "fill:#161622;fill-opacity:0.85;"
            }), ur("rect", {
                x: "11.4844",
                y: "13.7676",
                width: "2.98438",
                height: "19.6875",
                rx: "1.49219",
                transform: "rotate(-45 11.4844 13.7676)",
                fill: "white",
                style: "fill:white;fill-opacity:1;"
            }), ur("rect", {
                x: "13.5938",
                y: "27.6895",
                width: "2.98438",
                height: "19.6875",
                rx: "1.49219",
                transform: "rotate(-135 13.5938 27.6895)",
                fill: "white",
                style: "fill:white;fill-opacity:1;"
            })))))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                }
            }
        }
        ,
        e.prototype.getSubtitle = function() {
            var t, e, o = (null === (e = null === (t = this.props) || void 0 === t ? void 0 : t.bubbleMaterial) || void 0 === e ? void 0 : e.sub_title) || "", i = o.match(/《(.*?)》/), r = (null == i ? void 0 : i[1]) || "";
            return r.length > 6 ? o.replace(r, "".concat(r.slice(0, 5), "…")) : o
        }
        ,
        e
    }(dr)
      , ps = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                percentRef: e.createRef()
            },
            e
        }
        return i(e, t),
        e.prototype.updatePercent = function(t) {
            this.$refs.percentRef.value && (this.$refs.percentRef.value.style.strokeDashoffset = "".concat(114 - 114 * t))
        }
        ,
        e.prototype.render = function() {
            var t = this.props.size || 39;
            return ur("svg", {
                class: this.props.class || "",
                width: t,
                height: t,
                viewBox: "0 0 39 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: this.props.onClick
            }, ur("circle", {
                cx: "19.5",
                cy: "19.6738",
                r: "18",
                fill: "#161622",
                "fill-opacity": "0.85",
                style: "fill:#161622;fill-opacity:0.85;"
            }), ur("rect", {
                x: "11.4844",
                y: "13.7676",
                width: "2.98438",
                height: "19.6875",
                rx: "1.49219",
                transform: "rotate(-45 11.4844 13.7676)",
                fill: "white",
                style: "fill:white;fill-opacity:1;"
            }), ur("rect", {
                x: "13.5938",
                y: "27.6895",
                width: "2.98438",
                height: "19.6875",
                rx: "1.49219",
                transform: "rotate(-135 13.5938 27.6895)",
                fill: "white",
                style: "fill:white;fill-opacity:1;"
            }), ur("circle", {
                ref: this.$refs.percentRef,
                class: "close-icon-circle",
                cx: "19.5",
                cy: "19.6738",
                r: "18",
                stroke: "white",
                style: "stroke:white;stroke-opacity:1;",
                "stroke-width": "2",
                "stroke-linecap": "round",
                fill: "none"
            }))
        }
        ,
        e
    }(dr);
    Xi(".reward_bubble_v2{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reward_bubble_v2_content{bottom:100px;left:40px;margin-left:38px;position:absolute;-webkit-transform-origin:0 100%;transform-origin:0 100%}.reward_bubble_v2_horizontal{cursor:pointer;pointer-events:auto}.reward_bubble_v2_horizontal .reward_bubble_v2_card{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,9%,.9);border-radius:104px 12px 12px 104px;display:-webkit-box;display:-ms-flexbox;display:flex;height:104px;width:440px}.reward_bubble_v2_horizontal .reward_bubble_v2_poster{height:128px;overflow:hidden;position:relative;width:127px}.reward_bubble_v2_horizontal .reward_bubble_v2_poster img{height:128px;left:-8px;max-width:128px;position:absolute;top:0;width:128px}.reward_bubble_v2_horizontal .reward_bubble_v2_info{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:12px;width:0}.reward_bubble_v2_horizontal .reward_bubble_v2_info .title{color:#f7dd8f;font-size:24px;font-weight:500;line-height:34px;margin-top:4px;text-overflow:ellipsis;white-space:nowrap}.reward_bubble_v2_horizontal .reward_bubble_v2_info .subtitle{color:#fff;font-size:20px;font-weight:400;line-height:28px;margin-top:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.reward_bubble_v2_horizontal .reward_bubble_v2_action{width:104px}.reward_bubble_v2_horizontal .reward_bubble_v2_qrcode_code{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fff;border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;height:104px;justify-content:center;width:104px}.reward_bubble_v2_close{position:absolute;right:-20px;top:-18px}.reward_bubble_v2_close .close-icon-circle{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.reward_bubble_v2_vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,8%,.9);border-radius:12px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:444px;pointer-events:auto;width:440px}.reward_bubble_v2_vertical .title{color:#ffd27a;font-size:22px;font-weight:600;line-height:31px;margin-top:24px}.reward_bubble_v2_vertical .cid_title{color:#f2f2f2;font-size:22px;font-weight:500;line-height:31px;margin-top:16px}.reward_bubble_v2_vertical .step-box{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 22px;width:100%}.reward_bubble_v2_vertical .reward_bubble_v2_qrcode_code{-ms-flex-negative:0;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background:#fff;border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;flex-shrink:0;height:120px;justify-content:center;margin-top:16px;width:120px}.reward_bubble_v2_vertical .reward_bubble_v2_split_line{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),color-stop(hsla(0,0%,100%,.15)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.15),hsla(0,0%,100%,0));height:1px;margin:16px 0;width:380px}.reward_bubble_v2_vertical .reward_bubble_v2_step{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-align:center;-ms-flex-pack:center;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.reward_bubble_v2_vertical .reward_bubble_v2_step,.reward_bubble_v2_vertical .reward_bubble_v2_step .step_seq{-webkit-box-align:center;-webkit-box-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}.reward_bubble_v2_vertical .reward_bubble_v2_step .step_seq{-ms-flex-align:center;-ms-flex-pack:center;background:hsla(0,0%,100%,.15);border-radius:50%;font-size:16px;height:22px;line-height:1;width:22px}.reward_bubble_v2_vertical .reward_bubble_v2_step .step_text{-webkit-box-flex:1;color:hsla(0,0%,95%,.8);-ms-flex:1;flex:1;font-size:13px}.reward_bubble_v2_vertical .reward_bubble_v2_step .step_icon{height:64px;margin-top:16px;width:50px}.reward_bubble_v2_vertical .reward_bubble_v2_step .step_icon img{height:64px;width:50px}.reward_bubble_v2_vertical .reward_bubble_v2_close{right:-15px;top:-16px}");
    var us = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.$refs = {
                container: e.createRef(),
                content: e.createRef(),
                horizontal: e.createRef(),
                vertical: e.createRef(),
                horizontalCode: e.createRef(),
                verticalCode: e.createRef(),
                closeIcon: e.createRef()
            },
            e.stepData = [{
                step: 1,
                text: ["打开微信", "扫描二维码"]
            }, {
                step: 2,
                text: ["打开页面", "点击立即参与"]
            }, {
                step: 3,
                text: ["做广告任务", "领点映券"]
            }],
            e.showVerticalTime = 0,
            e.handleClose = function(t, o) {
                var i, r;
                t.stopPropagation(),
                null === (r = (i = e.props).onClose) || void 0 === r || r.call(i, {
                    isUserClick: !0,
                    isHoverCard: o
                })
            }
            ,
            e.handleClick = function(t) {
                e.props.onClick(),
                e.handleHorizontalEnter(t)
            }
            ,
            e.handleHorizontalEnter = function(t) {
                var o, i;
                t.stopPropagation(),
                e.showVerticalTime = Date.now(),
                $t(e.$refs.horizontal.value),
                Kt(e.$refs.vertical.value),
                e.props.onClick(),
                null === (i = (o = e.props).onHoverCardExposure) || void 0 === i || i.call(o)
            }
            ,
            e.handleVerticalLevel = function(t) {
                t.stopPropagation(),
                e.showVerticalTime && Date.now() - e.showVerticalTime >= 5e3 ? e.props.onClose() : (e.showVerticalTime = 0,
                Kt(e.$refs.horizontal.value),
                $t(e.$refs.vertical.value))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.mounted = function() {
            var e, o, i, r;
            t.prototype.mounted.call(this);
            var n = this.props.bubbleMaterial.qr_code_url;
            n && (this.$refs.horizontalCode.value && (null === (o = null === (e = this.props) || void 0 === e ? void 0 : e.renderQrCode) || void 0 === o || o.call(e, this.$refs.horizontalCode.value, n.replace("__ENTRY_TYPE__", "0"), 90)),
            this.$refs.verticalCode.value && (null === (r = null === (i = this.props) || void 0 === i ? void 0 : i.renderQrCode) || void 0 === r || r.call(i, this.$refs.verticalCode.value, n.replace("__ENTRY_TYPE__", "1"), 104)))
        }
        ,
        e.prototype.updateClosePercent = function(t) {
            var e;
            null === (e = this.$refs.closeIcon.value) || void 0 === e || e.updatePercent(t)
        }
        ,
        e.prototype.resize = function(t) {
            var e = this.$refs.content.value;
            e && (t.width < 1400 ? e.style.transform = "scale(".concat(t.width / 1400, ")") : e.style.transform = "scale(1)")
        }
        ,
        e.prototype.start = function() {}
        ,
        e.prototype.render = function() {
            var t, e = this, o = null === (t = this.props) || void 0 === t ? void 0 : t.bubbleMaterial, i = "reward_bubble_v2";
            return ur("div", {
                ref: this.$refs.container,
                class: "".concat(i, " txp_ad  txp_none")
            }, ur("div", {
                ref: this.$refs.content,
                class: "".concat(i, "_content")
            }, ur("div", {
                ref: this.$refs.horizontal,
                class: "".concat(i, "_horizontal ")
            }, ur("div", {
                class: "".concat(i, "_card"),
                onMouseenter: this.handleHorizontalEnter,
                onClick: this.handleClick
            }, ur("div", {
                class: "".concat(i, "_poster")
            }, ur("img", {
                alt: "",
                src: "https://active.v.qq.com/creative-resource/reward-bubble-icon.png"
            })), ur("div", {
                class: "".concat(i, "_info")
            }, ur("div", {
                class: "title",
                title: (null == o ? void 0 : o.title) || ""
            }, (null == o ? void 0 : o.title) || ""), ur("div", {
                class: "subtitle",
                title: (null == o ? void 0 : o.sub_title) || ""
            }, this.getSubtitle())), ur("div", {
                class: "".concat(i, "_action")
            }, ur("div", {
                ref: this.$refs.horizontalCode,
                class: "".concat(i, "_qrcode_code")
            }))), ur(ps, {
                class: "".concat(i, "_close"),
                size: 34,
                ref: this.$refs.closeIcon,
                onClick: this.handleClose
            })), ur("div", {
                ref: this.$refs.vertical,
                class: "".concat(i, "_vertical txp_none"),
                onMouseleave: this.handleVerticalLevel
            }, ur("div", {
                class: "title"
            }, (null == o ? void 0 : o.hover_title) || ""), ur("div", {
                class: "cid_title"
            }, this.getCidTitle()), ur("div", {
                ref: this.$refs.verticalCode,
                class: "".concat(i, "_qrcode_code")
            }), ur("div", {
                class: "".concat(i, "_split_line")
            }), ur("div", {
                class: "step-box"
            }, this.stepData.map((function(t) {
                return ur("div", {
                    class: "".concat(i, "_step step_").concat(t.step)
                }, ur("div", {
                    class: "step_seq"
                }, t.step), ur("div", {
                    class: "step_icon"
                }, ur("img", {
                    alt: "",
                    src: "https://active.v.qq.com/creative-resource/reward-bubble-step-".concat(t.step, ".svg")
                })), t.text.map((function(t) {
                    return ur("div", {
                        class: "step_text"
                    }, t)
                }
                )))
            }
            ))), ur(ps, {
                class: "".concat(i, "_close"),
                size: 34,
                onClick: function(t) {
                    return e.handleClose(t, !0)
                }
            }))))
        }
        ,
        e.prototype.getUpdate = function() {
            var t = this;
            return {
                visible: function(e, o) {
                    vr(t.$refs.container.value, e, o)
                }
            }
        }
        ,
        e.prototype.getSubtitle = function() {
            var t, e, o = (null === (e = null === (t = this.props) || void 0 === t ? void 0 : t.bubbleMaterial) || void 0 === e ? void 0 : e.sub_title) || "", i = o.match(/《(.*?)》/), r = (null == i ? void 0 : i[1]) || "";
            return r.length > 6 ? o.replace(r, "".concat(r.slice(0, 5), "…")) : o
        }
        ,
        e.prototype.getCidTitle = function() {
            return this.props.bubbleMaterial.column_title ? "《".concat(this.props.bubbleMaterial.column_title, "》") : ""
        }
        ,
        e
    }(dr)
      , hs = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            o.hasReportView = !1,
            o.isV2 = !1,
            o.handleHoverCardExposure = function() {
                o.data.hasHoverCardExposure || (o.data.hasHoverCardExposure = !0,
                o.adInfo.reportVrAdExposure(D({
                    eid: "whole_ad_vip_card",
                    ad_from_type: "1"
                }, o.adInfo.getVrReportData())))
            }
            ,
            o.handleClick = function(t) {
                o.adInfo.reportVrAdClick({
                    eid: "whole_ad_vip_entrance"
                }, {
                    ad_from_type: o.isV2 ? t ? "1" : "0" : "2",
                    adClckPosition: o.isV2 ? 4 : 1
                });
                var e = o.adInfo.bubble_material.jump_url;
                e && !o.isV2 && (e = e.replace("__ENTRY_TYPE__", "2"),
                window.open(e))
            }
            ,
            o.handleClose = function(t) {
                var e;
                (null == t ? void 0 : t.isUserClick) && (o.data.closeBtnClicked = !0,
                o.adInfo.reportVrAdClick({
                    eid: "whole_ad_vip_entrance"
                }, {
                    ad_from_type: o.isV2 ? t.isHoverCard ? "1" : "0" : "2",
                    adClckPosition: 2
                })),
                o.stop({
                    reason: "用户点击关闭"
                }),
                Xt(M.FEEDBACK, null === (e = o.adInfo) || void 0 === e ? void 0 : e.frequencyControlConfig)
            }
            ,
            o.handleCloseRatePercentTimeupdate = function() {
                if (o.adInfo.point) {
                    var t = o.adInfo.point.end - o.adInfo.point.begin || 0
                      , e = 1e3 * o.adCore.config.outerPlayerData.playtime
                      , i = Math.min((e - o.adInfo.point.begin) / t, 1);
                    o.rewardBubbleUI.updateClosePercent(i)
                }
            }
            ;
            var i = {
                visible: !1,
                renderQrCode: o.adCore.config.renderQrCode,
                bubbleMaterial: o.adInfo.bubble_material,
                onClose: o.handleClose,
                onClick: o.handleClick,
                onHoverCardExposure: o.handleHoverCardExposure
            };
            return o.isV2 = o.adInfo.bubble_material.pc_qr_code_mode === za.HOVER_TO_REVEAL,
            o.rewardBubbleUI = o.isV2 ? new us(i) : new cs(i),
            o.rewardBubbleUI.mount(o.config.createLayer(o.adType)),
            o.fpsTimer = new Nr(o.handleCloseRatePercentTimeupdate,20),
            o.logger.log("RewardBubbleAd bubble_material: ".concat(At(o.adInfo.bubble_material))),
            o
        }
        return i(e, t),
        e.prototype.play = function() {
            this.canplayHandler(),
            t.prototype.play.call(this),
            this.show(),
            this.fpsTimer.start(),
            this.rewardBubbleUI.start()
        }
        ,
        e.prototype.show = function() {
            var e = this.adCore.config.getPlayerSize();
            this.rewardBubbleUI.resize({
                width: e.playerWidth,
                height: e.playerHeight
            }),
            this.rewardBubbleUI.setState({
                visible: !0
            }),
            this.hasReportView || (this.adInfo.reportVrAdExposure(D({
                eid: "whole_ad_vip_card",
                ad_from_type: this.isV2 ? "0" : "2"
            }, this.adInfo.getVrReportData())),
            Xt(M.EXPOSURE, this.adInfo.frequencyControlConfig)),
            t.prototype.show.call(this)
        }
        ,
        e.prototype.hide = function() {
            this.rewardBubbleUI.setState({
                visible: !1
            }),
            t.prototype.hide.call(this)
        }
        ,
        e.prototype.stop = function(e) {
            var o;
            this.state !== Si.END && (this.hide(),
            t.prototype.stop.call(this, e),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                adPlaytime: this.data.showTime ? Date.now() - this.data.showTime : -1,
                firstView: null !== (o = this.data.showTime) && void 0 !== o ? o : -1,
                userClose: !!this.data.closeBtnClicked
            })),
            this.destroy())
        }
        ,
        e.prototype.destroy = function() {
            this.data.hasDestroy || (this.fpsTimer.stop(),
            this.rewardBubbleUI.destroy(),
            t.prototype.destroy.call(this))
        }
        ,
        e.prototype.resize = function(t) {
            t.width && t.height && this.rewardBubbleUI.resize({
                width: t.width,
                height: t.height
            })
        }
        ,
        e.prototype.initData = function() {
            return new ns
        }
        ,
        e
    }(Hi)
      , fs = function(t, e) {
        var o;
        if (e.ad_scene !== s.ANCHOR)
            return {};
        var i = {}
          , r = [];
        return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
            if (o.ad_type === p.REWARD_BUBBLE && o.reward_bubble) {
                var i = o.reward_bubble.transfer_info;
                if (i) {
                    var n = Ct(i);
                    if (n.bubble_material) {
                        var a = De(o);
                        r.push({
                            adType: o.ad_type,
                            extraData: Vi(e),
                            point: a,
                            pointStatus: Bi.INIT,
                            empty: [],
                            orders: [new rs({
                                point: a,
                                data: {
                                    order: o.reward_bubble.order
                                },
                                auth: e.auth,
                                adCore: t,
                                orderIdx: 0,
                                bubble_material: n.bubble_material,
                                vr_map: n.vr_map
                            })]
                        })
                    }
                }
            }
        }
        )),
        r.length > 0 && (i.pointAdData = r),
        i
    }
      , vs = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.preLoadTime = 6e3,
            e.handleAdPause = function() {
                e.adCore.api.pauseAd(p.REWARD_BUBBLE)
            }
            ,
            e.handleAdResume = function() {
                e.adCore.api.resumeAd(p.REWARD_BUBBLE)
            }
            ,
            e.handleAdShow = function(t) {
                t.adInfo;
                e.isNeedCheckType(t.adType) && e.checkSceneShow()
            }
            ,
            e.handleAdHide = function(t) {
                var o = t.adInfo;
                !(null == o ? void 0 : o.isWholeScene) && e.isNeedCheckType(t.adType) && e.checkSceneShow()
            }
            ,
            e
        }
        return i(e, t),
        Object.defineProperty(e.prototype, "adType", {
            get: function() {
                return p.REWARD_BUBBLE
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.startWatch = function() {
            t.prototype.startWatch.call(this),
            this.adCore.event.on(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.on(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.on(fi.VIDEO_PAUSE, this.handleAdPause),
            this.adCore.outerEvent.on(fi.VIDEO_PLAYING, this.handleAdResume)
        }
        ,
        e.prototype.endWatch = function() {
            t.prototype.endWatch.call(this),
            this.adCore.event.off(Se.AD_SHOW, this.handleAdShow),
            this.adCore.event.off(Se.AD_HIDE, this.handleAdHide),
            this.adCore.outerEvent.off(fi.VIDEO_PAUSE, this.handleAdPause),
            this.adCore.outerEvent.off(fi.VIDEO_PLAYING, this.handleAdResume)
        }
        ,
        e.prototype.timeupdate = function(t) {
            this.checkPoints(t)
        }
        ,
        e.prototype.isNeedCheckType = function(t) {
            return [p.PAUSE, p.HLS_MID, p.MID].includes(t)
        }
        ,
        e.prototype.checkSceneShow = function() {
            var t = this.adCore.ctrl.getRunningAds(p.REWARD_BUBBLE)
              , e = this.hasOtherShow();
            t.forEach((function(t) {
                e && t.data.isShow ? t.hide(!0) : t.data.isShow || t.show(!0)
            }
            ))
        }
        ,
        e.prototype.hasOtherShow = function() {
            return !!this.adCore.ctrl.getSingleAds().some((function(t) {
                return t.data.isShow && ![p.PROGRESS_PREVIEW, p.VIDEO_RESOLUTION, p.REWARD_BUBBLE].includes(t.adType)
            }
            )) || this.adCore.ctrl.getMultipleAds().some((function(t) {
                var e = t[0]
                  , o = t[1];
                return [p.CORNER].includes(e) ? Array.from(o.values()).some((function(t) {
                    return t.data.isShow && !t.adInfo.isWholeScene
                }
                )) : Array.from(o.values()).some((function(t) {
                    return t.data.isShow
                }
                ))
            }
            ))
        }
        ,
        e.prototype.checkPoints = function(t) {
            var e = this;
            this.adCore.order.getPoints(this.adType).forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(e.adType, o);
                i && 0 !== i.orders.length && e.checkTime(i, t)
            }
            ))
        }
        ,
        e.prototype.checkTime = function(t, e) {
            var o = this
              , i = t.point;
            e >= i.begin - this.preLoadTime && e <= i.begin ? this.handlePreLoad(t) : e >= i.begin && e <= i.end ? this.handlePlaying(t) : t.pointStatus !== Bi.INIT && (t.pointStatus = Bi.INIT,
            t.orders.forEach((function(t) {
                o.adCore.api.stopAd(o.adType, t.orderId, "进度在点位区间以外")
            }
            )))
        }
        ,
        e.prototype.handlePreLoad = function(t) {
            var e = this;
            t.pointStatus !== Bi.INIT ? t.pointStatus === Bi.PLAYING && (t.pointStatus = Bi.INIT,
            t.orders.forEach((function(t) {
                e.adCore.api.stopAd(e.adType, t.orderId, "在预加载区间，结束正在运行的实例")
            }
            ))) : this.load(t)
        }
        ,
        e.prototype.handlePlaying = function(t) {
            var e = this;
            t.pointStatus !== Bi.INIT ? [Bi.LOADING].includes(t.pointStatus) && (t.pointStatus = Bi.PLAYING,
            t.orders.forEach((function(t) {
                e.adCore.api.playAd(e.adType, t.orderId)
            }
            ))) : this.load(t)
        }
        ,
        e.prototype.load = function(t) {
            var e = this;
            t.orders.forEach((function(o) {
                e.adCore.ctrl.loadAdOrder(D(D({}, t), {
                    orders: [o],
                    empty: []
                })),
                t.pointStatus = Bi.LOADING
            }
            ))
        }
        ,
        e
    }(Yi)
      , ms = function(t) {
        return {
            adType: p.REWARD_BUBBLE,
            isPointAd: !0,
            isMultiple: !1,
            getOrderData: fs,
            creator: function(e, o) {
                return new hs({
                    adCore: e,
                    order: o,
                    config: t
                })
            },
            watcher: function(t) {
                return new vs(t)
            }
        }
    }
      , ys = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e
    }(Mn)
      , gs = function(t) {
        return function(e, o) {
            return new ys({
                adCore: e,
                order: o,
                config: t
            })
        }
    }
      , _s = function(t, e) {
        var o;
        if (e.ad_scene === s.TAIL) {
            var i = {}
              , r = [];
            return null === (o = e.ads) || void 0 === o || o.forEach((function(o) {
                o.ad_type === p.TAIL && r.push({
                    adType: o.ad_type,
                    extraData: Vi(e),
                    empty: Ne(t, e, o.empty),
                    orders: Kn(t, e, o.tail)
                })
            }
            )),
            r.length > 0 && (i.adData = r),
            i
        }
    }
      , xs = function(t) {
        return {
            adType: p.TAIL,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: _s,
            creator: gs(t)
        }
    }
      , As = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.play = function() {
            var e, o = this.adCore.config.outerPlayerData.playtime;
            this.adInfo.reporter.setVideoPlaytime(1e3 * o),
            this.state !== Si.PLAYING && this.state !== Si.PAUSED && ((null === (e = this.adInfo) || void 0 === e ? void 0 : e.point) ? (t.prototype.play.call(this),
            this.show(),
            this.doExposure(this.adInfo),
            this.adInfo.reportVrAdExposure()) : this.stop({
                reason: "点位不存在"
            }))
        }
        ,
        e.prototype.stop = function(e) {
            var o;
            t.prototype.stop.call(this, e),
            this.adCore.vr.reportEnded(D(D({}, Ui(this.order.extraData)), {
                adType: this.adType,
                firstView: null !== (o = this.data.showTime) && void 0 !== o ? o : -1,
                adPlaytime: -1,
                reason: e.reason
            })),
            this.destroy()
        }
        ,
        e
    }(Hi)
      , Cs = function(t, e) {
        var o;
        if (e.ad_scene === s.ANCHOR) {
            var i = {}
              , r = [];
            return null === (o = e.anchor_ads) || void 0 === o || o.forEach((function(o) {
                if (o.ad_type === p.VIDEO_IN)
                    if (o.point) {
                        var i = De(o);
                        r.push({
                            adType: o.ad_type,
                            extraData: Vi(e),
                            empty: Ne(t, e, o.empty),
                            orders: Pe(t, i, e, o.video_in),
                            point: i,
                            pointStatus: Bi.INIT
                        })
                    } else
                        Oe(t, e, o.empty)
            }
            )),
            r.length > 0 && (i.pointAdData = r),
            i
        }
    }
      , bs = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.timeupdate = function(t) {
            var e = this;
            this.adCore.config.phlsConfig.isSoloPlayingPhls || this.adCore.order.getPoints(p.VIDEO_IN).forEach((function(o) {
                var i = e.adCore.order.getPointOrderFromPoint(p.VIDEO_IN, o);
                i && 0 !== i.orders.length && (t >= o.begin && t <= o.end ? i.pointStatus === Bi.INIT ? (i.orders.forEach((function(t) {
                    e.adCore.ctrl.loadAdOrder(D(D({}, i), {
                        orders: [t]
                    }))
                }
                )),
                i.pointStatus = Bi.PLAYING) : i.pointStatus === Bi.PLAYING && i.orders.forEach((function(t) {
                    e.adCore.api.playAd(p.VIDEO_IN, t.orderId)
                }
                )) : i.pointStatus !== Bi.INIT && (i.pointStatus = Bi.INIT,
                i.orders.forEach((function(t) {
                    e.adCore.api.stopAd(p.VIDEO_IN, t.orderId, "进度在点位区间以外")
                }
                ))))
            }
            ))
        }
        ,
        e
    }(Yi)
      , Es = er("video-resolution")
      , Is = {
        layer: Es("layer"),
        img: Es("img"),
        title: Es("title"),
        adFlag: Es("flag")
    }
      , Ts = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.roleMap = Is,
            e
        }
        return i(e, t),
        e.prototype.update = function(t) {
            var e = t.url
              , o = t.hasAdFlag
              , i = t.title;
            this.$domNodes.img && (this.$domNodes.img.src = e),
            Yt(this.$domNodes.title, i),
            o ? Kt(this.$domNodes.adFlag) : $t(this.$domNodes.adFlag)
        }
        ,
        e.prototype.mount = function() {
            if (!this.$domNodes.layer) {
                var t = document.createElement("div");
                t.className = "txp_menuitem txp_menuitem_ad txp_none",
                t.dataset.role = this.roleMap.layer,
                this.options.prependEle(t),
                this.$domNodes.layer = t
            }
            this.appendDom(this.$domNodes.layer)
        }
        ,
        e.prototype.getTemplate = function() {
            return '\n      <img data-role="'.concat(this.roleMap.img, '" class="txp_definition_ad" style="width: 40px; height: 23px;" />\n      <txpdiv data-role="').concat(this.roleMap.title, '" class="txp_definition_ad_text"></txpdiv>\n      <txpdiv data-role="').concat(this.roleMap.adFlag, '" class="txp_ad_mark txp_none">广告</txpdiv>\n    ')
        }
        ,
        e
    }(rn)
      , ws = function(t) {
        function e(e) {
            var o = t.call(this, e) || this;
            return o.ui = new Ts({
                adCore: o.adCore,
                container: o.config.createLayer(o.adType),
                prependEle: o.config.prependEle
            }),
            o.ui.init(),
            o
        }
        return i(e, t),
        e.prototype.loadMaterialSuccess = function() {
            var t = this.adInfo.data;
            this.ui.update({
                title: t.poster.title,
                url: this.adInfo.material.url,
                hasAdFlag: this.adInfo.hasFlag
            }),
            this.show()
        }
        ,
        e
    }(on)
      , Ls = function(t) {
        return function(e, o) {
            return new ws({
                adCore: e,
                order: o,
                config: t
            })
        }
    }
      , Ps = function(t, e) {
        if (e.ad_scene === s.VIDEO_RESOLUTION) {
            var o = e.ad;
            if (o && (o.empty || o.video_resolution))
                return {
                    adData: [{
                        adType: o.ad_type,
                        extraData: Vi(e),
                        empty: Ne(t, e, o.empty),
                        orders: pn(t, e, o.video_resolution)
                    }]
                }
        }
    }
      , Ds = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hasLoadAd = !1,
            e.throttleReportAd = de((function() {
                e.adCore.api.reportAd(p.VIDEO_RESOLUTION)
            }
            ), 2e3),
            e.loadVideoResolutionAd = function() {
                return O(e, void 0, void 0, (function() {
                    return S(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return this.adCore.config.requestProxyHttp ? this.hasLoadAd ? [3, 5] : (this.hasLoadAd = !0,
                            [4, this.adCore.config.requestProxyHttp(s.VIDEO_RESOLUTION)]) : [2];
                        case 1:
                            t.sent(),
                            t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]),
                            [4, this.adCore.ctrl.loadAd(p.VIDEO_RESOLUTION)];
                        case 3:
                            return t.sent(),
                            [3, 5];
                        case 4:
                            return t.sent(),
                            [3, 5];
                        case 5:
                            return this.throttleReportAd(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e
        }
        return i(e, t),
        e.prototype.startWatch = function() {
            this.adCore.outerEvent.on(fi.SHOW_LEVELS, this.loadVideoResolutionAd)
        }
        ,
        e.prototype.endWatch = function() {
            this.adCore.outerEvent.off(fi.SHOW_LEVELS, this.loadVideoResolutionAd)
        }
        ,
        e.prototype.reset = function() {
            this.hasLoadAd = !1,
            this.throttleReportAd.cancel()
        }
        ,
        e
    }(qi)
      , Ns = function(t) {
        return {
            adType: p.VIDEO_RESOLUTION,
            isPointAd: !1,
            isMultiple: !1,
            getOrderData: Ps,
            creator: Ls(t),
            watcher: function(t) {
                return new Ds(t)
            }
        }
    }
      , Os = function(e) {
        function o() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i(o, e),
        o.prototype.getInitData = function() {
            return {
                isMobile: !1,
                pluginName: "web-v"
            }
        }
        ,
        o.prototype.registerAd = function() {
            var e, o = this, i = new ke({
                player: this.player,
                adCore: this.adCore.adCoreApi,
                getContainerSize: this.getContainerSize
            });
            this.adCore.modules.watcher.register((function(e) {
                return new Wi(e,{
                    disable: t.uaTool.mobile
                })
            }
            )),
            this.adCore.modules.plugin.register([(e = {
                createLayer: this.createLayer
            },
            {
                adType: p.PRE,
                isPointAd: !1,
                isMultiple: !1,
                getOrderData: ja,
                creator: Wa(e)
            }), xs({
                createLayer: this.createLayer
            }), Fn({
                createLayer: this.createLayer
            }), Lr({
                createLayer: this.createLayer
            }), vn({
                createLayer: this.createLayer,
                prependEle: function(t) {
                    o.safePrependEle("ui-loading", "prependElement", t)
                }
            }), is({
                createLayer: this.createLayer,
                prependEle: function(t, e) {
                    o.safePrependEle("ui-preview", "prependElement", t),
                    o.safePrependEle("ui-preview-list", "prependElement", e, "current")
                }
            }), Ns({
                createLayer: this.createLayer,
                prependEle: function(t) {
                    o.safePrependEle("ctrlbar", "prependElementToLevels", t)
                }
            }), Ya({
                createLayer: this.createLayer,
                resetVideoContainer: i.resetVideoContainer,
                resizeVideoContainer: i.resizeVideoContainer,
                shrinkVideoContainer: i.shrinkVideoContainer,
                capturePlayer: i.capturePlayer
            }), Kr({
                createLayer: this.createLayer
            }), ms({
                createLayer: this.createLayer
            }), {
                adType: p.ANCHOR_EMPTY,
                isPointAd: !0,
                isMultiple: !1,
                getOrderData: Gi,
                creator: function(t, e) {
                    return new $i({
                        adCore: t,
                        order: e,
                        config: void 0
                    })
                },
                watcher: function(t) {
                    return new Fi(t)
                }
            }, {
                adType: p.VIDEO_IN,
                isPointAd: !0,
                isMultiple: !0,
                getOrderData: Cs,
                creator: function(t, e) {
                    return new As({
                        adCore: t,
                        order: e,
                        config: void 0
                    })
                },
                watcher: function(t) {
                    return new bs(t)
                }
            }, Xr({
                createLayer: this.createLayer
            }), {
                adType: p.NON_STANDARD,
                isPointAd: !0,
                isMultiple: !0,
                getOrderData: jn,
                creator: function(t, e) {
                    return new Wn({
                        adCore: t,
                        order: e,
                        config: void 0
                    })
                },
                watcher: function(t) {
                    return new Qn(t)
                }
            }])
        }
        ,
        o
    }(Mi);
    e.H5Player.registerPlugin(e.AdPluginName, Os),
    window.CreativePlayerPlugin = Os
}(ThumbPlayerCore, ThumbPlayerH5);
