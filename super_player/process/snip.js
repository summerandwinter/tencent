  var Qh = {
        pad: function(e, t) {
            for (var o = zB, i = 4 * t, n = i - e[o(612) + "s"] % i, A = n << 24 | n << 16 | n << 8 | n, r = [], a = 0; a < n; a += 4)
                r[o(621)](A);
            var s = ah[o(541)](r, n);
            e.concat(s)
        },
        unpad: function(e) {
            var t = e
              , o = 255 & t[zB(562)][t.sigBytes - 1 >>> 2];
            t.sigBytes -= o
        }
    }
      , wh = function(e) {
        var t = zB;
        function o(t, o, i) {
            var n = Jh
              , A = e[n(624)](this, t, o, Object[n(623)]({
                mode: mh,
                padding: Qh
            }, i)) || this;
            return A[n(525) + "ze"] = 4,
            A
        }
        return nh(o, e),
        o.prototype[t(642)] = function() {
            var o, i = t;
            e[i(589) + "pe"][i(642)][i(624)](this);
            var n = this.cfg
              , A = n.iv
              , r = n[i(599)];
            this["_xformM" + i(622)] === this["constru" + i(555)][i(617) + i(564) + "E"] ? o = r[i(497) + i(506) + "r"] : (o = r[i(577) + i(607) + "r"],
            this[i(559) + "ferSize"] = 1),
            this._mode = o.call(r, this, null == A ? void 0 : A.words),
            this._mode[i(498) + "or"] = o
        }
        ,
        o[t(589) + "pe"][t(553) + t(530) + "k"] = function(e, o) {
            var i = t;
            this[i(533)][i(503) + i(600)](e, o)
        }
        ,
        o[t(589) + "pe"][t(587) + t(610)] = function() {
            var e, o = t, i = this[o(615)][o(569)];
            return this[o(591) + o(622)] === this[o(552) + "ctor"]["_ENC_XF" + o(564) + "E"] ? (i[o(627)](this[o(626)], this[o(525) + "ze"]),
            e = this[o(625) + "s"](!0)) : (e = this[o(625) + "s"](!0),
            i[o(631)](e)),
            e
        }
        ,
        o
    }(yh)
      , Th = function(e) {
        var t = zB;
        function o(t) {
            var o = Jh
              , i = e.call(this) || this;
            return i[o(604)](t),
            i
        }
        return nh(o, e),
        o[t(589) + "pe"][t(597) + "g"] = function(e) {
            var o = t;
            return (e || this[o(573) + "er"])[o(567) + "fy"](this)
        }
        ,
        o
    }(rh)
      , Sh = {
        stringify: function(e) {
            var t = zB
              , o = e[t(516) + "ext"]
              , i = e[t(557)];
            return (i ? ah.create([1398893684, 1701076831])[t(532)](i)[t(532)](o) : o)[t(597) + "g"](Ih)
        },
        parse: function(e) {
            var t, o = zB, i = Ih.parse(e), n = i.words;
            return 1398893684 === n[0] && 1701076831 === n[1] && (t = ah[o(541)](n.slice(2, 4)),
            n[o(504)](0, 4),
            i[o(612) + "s"] -= 16),
            Th[o(541)]({
                ciphertext: i,
                salt: t
            })
        }
    }
      , _h = function(e) {
        var t = zB;
        function o() {
            return null !== e && e[Jh(556)](this, arguments) || this
        }
        return nh(o, e),
        o[t(538)] = function(e, o, i, n) {
            var A = t
              , r = Object.assign(new rh, this[A(615)], n)
              , a = e[A(497) + "ncryptor"](i, r)
              , s = a[A(644) + "e"](o)
              , l = a[A(615)];
            return Th[A(541)]({
                ciphertext: s,
                key: i,
                iv: l.iv,
                algorithm: e,
                mode: l[A(599)],
                padding: l[A(569)],
                blockSize: a.blockSize,
                formatter: r.format
            })
        }
        ,
        o[t(603)] = function(e, o, i, n) {
            var A = t
              , r = o
              , a = Object[A(623)](new rh, this[A(615)], n);
            return r = this[A(584)](r, a[A(576)]),
            e[A(577) + A(607) + "r"](i, a)[A(644) + "e"](r[A(516) + A(643)])
        }
        ,
        o[t(584)] = function(e, o) {
            var i = t;
            return i(544) == (void 0 === e ? "undefined" : d(e)) ? o[i(522)](e, this) : e
        }
        ,
        o
    }(rh);
    _h[zB(615)] = Object[zB(623)](new rh, {
        format: Sh
    });
    var Dh = []
      , Ph = []
      , Fh = []
      , Lh = []
      , Yh = []
      , Rh = []
      , bh = []
      , kh = []
      , Gh = []
      , Nh = [];
    for (Eh = 0; Eh < 256; Eh += 1)
        Nh[Eh] = Eh < 128 ? Eh << 1 : Eh << 1 ^ 283;
    var Mh = 0
      , Uh = 0;
    for (Eh = 0; Eh < 256; Eh += 1) {
        var Oh = Uh ^ Uh << 1 ^ Uh << 2 ^ Uh << 3 ^ Uh << 4;
        Oh = Oh >>> 8 ^ 255 & Oh ^ 99,
        Dh[Mh] = Oh;
        var Kh = Nh[Mh]
          , xh = Nh[Kh]
          , Vh = Nh[xh]
          , Hh = 257 * Nh[Oh] ^ 16843008 * Oh;
        Ph[Mh] = Hh << 24 | Hh >>> 8,
        Fh[Mh] = Hh << 16 | Hh >>> 16,
        Lh[Mh] = Hh << 8 | Hh >>> 24,
        Yh[Mh] = Hh,
        Hh = 16843009 * Vh ^ 65537 * xh ^ 257 * Kh ^ 16843008 * Mh,
        Rh[Oh] = Hh << 24 | Hh >>> 8,
        bh[Oh] = Hh << 16 | Hh >>> 16,
        kh[Oh] = Hh << 8 | Hh >>> 24,
        Gh[Oh] = Hh,
        Mh ? (Mh = Kh ^ Nh[Nh[Nh[Vh ^ Kh]]],
        Uh ^= Nh[Nh[Uh]]) : Mh = Uh = 1
    }
    var jh = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , qh = function(e) {
        var t = zB;
        function o() {
            return null !== e && e.apply(this, arguments) || this
        }
        return nh(o, e),
        o[t(589) + "pe"][t(568) + "t"] = function() {
            var e, o = t;
            if (!this._nRounds || this[o(614) + o(638)] !== this[o(519)]) {
                this[o(614) + o(638)] = this[o(519)];
                var i = this[o(614) + o(638)]
                  , n = i[o(562)]
                  , A = i[o(612) + "s"] / 4;
                this._nRounds = A + 6;
                var r = 4 * (this[o(547) + "s"] + 1);
                this._keySchedule = [];
                for (var a = this[o(646) + o(592)], s = 0; s < r; s += 1)
                    s < A ? a[s] = n[s] : (e = a[s - 1],
                    s % A ? A > 6 && s % A == 4 && (e = Dh[e >>> 24] << 24 | Dh[e >>> 16 & 255] << 16 | Dh[e >>> 8 & 255] << 8 | Dh[255 & e]) : (e = Dh[(e = e << 8 | e >>> 24) >>> 24] << 24 | Dh[e >>> 16 & 255] << 16 | Dh[e >>> 8 & 255] << 8 | Dh[255 & e],
                    e ^= jh[s / A | 0] << 24),
                    a[s] = a[s - A] ^ e);
                this[o(628) + "Schedule"] = [];
                for (var l = this[o(628) + o(521) + "e"], g = 0; g < r; g += 1)
                    s = r - g,
                    e = g % 4 ? a[s] : a[s - 4],
                    l[g] = g < 4 || s <= 4 ? e : Rh[Dh[e >>> 24]] ^ bh[Dh[e >>> 16 & 255]] ^ kh[Dh[e >>> 8 & 255]] ^ Gh[Dh[255 & e]]
            }
        }
        ,
        o[t(589) + "pe"]["encrypt" + t(600)] = function(e, o) {
            var i = t;
            this[i(518) + i(637)](e, o, this[i(646) + i(592)], Ph, Fh, Lh, Yh, Dh)
        }
        ,
        o.prototype[t(518) + t(637)] = function(e, o, i, n, A, r, a, s) {
            for (var l = e, g = this[t(547) + "s"], c = l[o] ^ i[0], u = l[o + 1] ^ i[1], E = l[o + 2] ^ i[2], d = l[o + 3] ^ i[3], B = 4, h = 1; h < g; h += 1) {
                var p = n[c >>> 24] ^ A[u >>> 16 & 255] ^ r[E >>> 8 & 255] ^ a[255 & d] ^ i[B];
                B += 1;
                var v = n[u >>> 24] ^ A[E >>> 16 & 255] ^ r[d >>> 8 & 255] ^ a[255 & c] ^ i[B];
                B += 1;
                var f = n[E >>> 24] ^ A[d >>> 16 & 255] ^ r[c >>> 8 & 255] ^ a[255 & u] ^ i[B];
                B += 1;
                var I = n[d >>> 24] ^ A[c >>> 16 & 255] ^ r[u >>> 8 & 255] ^ a[255 & E] ^ i[B];
                B += 1,
                c = p,
                u = v,
                E = f,
                d = I
            }
            var y = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[E >>> 8 & 255] << 8 | s[255 & d]) ^ i[B];
            B += 1;
            var C = (s[u >>> 24] << 24 | s[E >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & c]) ^ i[B];
            B += 1;
            var m = (s[E >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ i[B];
            B += 1;
            var Q = (s[d >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & E]) ^ i[B];
            B += 1,
            l[o] = y,
            l[o + 1] = C,
            l[o + 2] = m,
            l[o + 3] = Q
        }
        ,
        o
    }(wh);
    function Wh() {
        var e = ["zgvJCNLWDa", "BwL4sw4", "DxbKyxrL", "Dg9vChbLCG", "zwnYExb0BW", "mZm1ma", "q0zbqZiXnG", "BgL6zq", "ms4WlJe", "C2LNqNL0zq", "y2HHCKf0", "x2TLEvbYAq", "y2zN", "uvjtvfzxwa", "x0voq19yrG", "zMXVB3i", "rw5JCNLWDa", "EhOWmti0nG", "ChvZAa", "B2rL", "yxnZAwDU", "y2fSBa", "x3bYB2nLCW", "x2rHDge", "CgfK", "x2LUDKTLEq", "seLks0XntG", "qujdrevgrW", "Dw5Wywq", "ndy0nZy2v05fAxn2", "yNvMzMvY", "Dw5KzwzPBG", "z3vPza", "C3vIC3rY", "DejSB2nR", "B3jszxnLDa", "ls0Wmq", "x21HCa", "mtu2v01bueTf", "CMvZzxq", "zxH0", "zMLUywXPEG", "Bwf4", "x2TLEvnJAa", "BwLU", "y3jLyxrLrq", "x19JCMvHDa", "zu1HCa", "vLDywvPHyG", "AMTSBw5VCa", "mtK5nJyXmenlBerOua", "ChjVy2vZCW", "C3bSAwnL", "z3rO", "BMnYExb0BW", "BM9Uy2u", "ody3ntu1Aw1JtwLi", "C2v0", "ngLJEfvODa", "mtu3ntGZndnwuLPJwLy", "x3bYzxzcBa", "x2nYzwf0zq", "ndqZnZCZqq", "y3j5ChrV", "y2LWAgvYDa", "nde2odG5nND1DuztyW", "x2rVq3j5Ca", "x2TLEq", "y2XHBxa", "u2nOzwr1Ba", "CgfYC2u", "y2XVBMu", "AM9PBG", "yMXVy2TtAq", "yNvZsLnptG", "yNL0zuXLBG", "mKe1que2ma", "B2nR", "zxnZqMXVyW", "x2L2", "y29Uy2f0", "x21Vzgu", "x2fWCgvUza", "x3jLDMvYCW", "x19WCM90BW", "x2HHC2G", "zw5JCNLWDa", "C2LU", "nJaXmZu3nq", "y3jLyxrL", "C2vJsLnptG", "x0rfq19yrG", "C3rYAw5N", "yNL0zu9MzG", "qujdruzhsa", "x25sB3vUza", "BgvUz3rO", "y2vPBa", "DMLK", "C3vIC3rYAq", "y29UC3rYDq", "x2rVuhjVyW", "t1bruLnuvq", "y3rVCG", "yxbWBhK", "C2fSDa", "CMfUza", "x21PBKj1zG", "mtC4que2qW", "CM9Wzxj0Eq", "D29Yzhm", "CMfUzg9T", "t1jnx01pra", "ndu2nZG5kW", "wvPHyMnLzG", "C3rYAw5NAq", "x2rVuMvZzq", "CgfKzgLUzW", "C2XPy2u", "sgvSCgvY", "nKm0rq", "zM9YBwf0Da", "C2rRvMvY", "Adm4", "zM9YBwf0", "y3jLyxrLra", "zuf0", "igLZig5VDa", "ExrLCW", "ChfYC3v2DW", "x25eyxrHqG", "nJGXndqYnevYvKPQtG", "x3bHCNnL", "AgfZt3DUua", "z2LQA2XTBG", "x2rVrMLUyq", "y2HHCKnVza", "ChjVDg90Eq", "x2nPCgHLCG", "x3HMB3jTtq", "zwr1Bgu", "mtmWnJaWvKXdrhfd", "EhrLBMrZia", "AxnwAwv3", "rgvJCNLWDa", "Dg9tDhjPBG", "CgXHDgzVCG", "Bw9Kzq", "qMXVy2S", "zMvYu2L6zq", "ig9Yig51Ba"];
        return (Wh = function() {
            return e
        }
        )()
    }
    function Jh(e, t) {
        var o = Wh();
        return Jh = function(t, i) {
            var n = o[t -= 497];
            if (void 0 === Jh.FikNlj) {
                Jh.kyqcpm = function(e) {
                    for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                    A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                        o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                    for (var a = 0, s = i.length; a < s; a++)
                        n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                    return decodeURIComponent(n)
                }
                ,
                e = arguments,
                Jh.FikNlj = !0
            }
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Jh.kyqcpm(n),
            e[A] = n),
            n
        }
        ,
        Jh(e, t)
    }
    qh.keySize = 8;
    var zh = wh[zB(513) + zB(571)](qh);
    function Xh(e) {
        var t = e.svrtick
          , o = e.platform
          , i = e.ckeyid
          , n = e.sdtfrom
          , A = (new Date).getDay()
          , r = "7.".concat(0 === A ? 7 : A)
          , a = t > 0 ? "".concat(1e3 * t).substring(0, 10) : Nd();
        return {
            tm: a,
            cKey: JB.$xx(o, i, n, 1, a, r),
            encryptVer: r
        }
    }
    function Zh(t) {
        var o = t.vid
          , i = t.updateTimeStamp
          , n = t.appVer
          , A = t.guid
          , r = t.platform
          , a = t.h38
          , s = "".concat(i) || Nd()
          , l = function(e) {
            var t = zB
              , o = function(e) {
                var t = Jh;
                void 0 === e && (e = 32);
                for (var o = t(546) + "IJKLNOP" + t(616) + t(566) + t(586) + t(581) + t(620) + "79", i = "", n = 0; n < e; n += 1)
                    i += o[t(613)](Math[t(618)](Math[t(563)]() * o[t(548)]));
                return i
            }(11)
              , i = e[t(550)]
              , n = e.ts
              , A = e.appVer
              , r = e[t(635)]
              , a = e[t(598) + "m"]
              , s = e.h38
              , l = void 0 === s ? "" : s
              , g = e[t(542)]
              , c = void 0 === g ? "" : g
              , u = e[t(526)]
              , E = void 0 === u ? "" : u
              , d = {};
            d.vid = i,
            d[t(574)] = t(611),
            d[t(507)] = o,
            d[t(558)] = fh(""[t(532)](o, "1234"))[t(597) + "g"]()[t(551) + "ng"](0, 8),
            d.appVer = A,
            d[t(635)] = r,
            d.platform = a,
            d.ts = n,
            d[t(575)] = l,
            d.sj = c,
            d.bj = E,
            d.os = JSON[t(567) + "fy"]({});
            var B = {};
            B.iv = sh[t(522)](t(609) + "FAA2D39" + t(540) + "D4055C6" + t(608)),
            B.mode = mh,
            B[t(569)] = Qh;
            var h = zh.encrypt(JSON[t(567) + "fy"](d), sh[t(522)](t(528) + t(560) + "8DA662E" + t(514) + t(572)), B);
            return t(639).concat(h[t(516) + "ext"][t(597) + "g"]()[t(606) + "Case"]())
        }({
            vid: o,
            ts: s,
            appVer: n,
            guid: A,
            platform: r,
            h38: a
        });
        return {
            tm: s,
            cKey: l,
            encryptVer: e.CKEY_VRE.CKEY_8
        }
    }
    var $h, ep = "lcad_";
    function tp(e) {
        var t = function(e) {
            if (!e)
                return;
            var t = [];
            try {
                t = JSON.parse(e)
            } catch (e) {}
            if (!t || !R(t, Array) || t.length <= 0)
                return;
            var o = {};
            return t.forEach((function(e) {
                Object.assign(o, function(e) {
                    for (var t = e ? e.split("; ") : [], o = {}, i = {
                        value: ""
                    }, n = 0; n < t.length; n++) {
                        var A = I(t[n].split("="), 2)
                          , r = A[0]
                          , a = A[1];
                        0 === n ? (o["".concat(ep).concat(r)] = i,
                        i.value = a) : "Expires" === r && (i.expires = a)
                    }
                    return o
                }(e))
            }
            )),
            o
        }(e);
        t && Object.keys(t).forEach((function(e) {
            var o = t[e];
            try {
                document.cookie = "".concat(e, "=").concat(o.value, "; domain=.").concat(location.host, "; path=/; expires=").concat(o.expires)
            } catch (e) {}
        }
        ))
    }
    !function(e) {
        e.onlyvinfo = "onlyvinfo",
        e.onlyad = "onlyad",
        e.vinfoad = "vinfoad"
    }($h || ($h = {}));
    var op = {
        POLL_DURATION_WILL_SWITCH: "恭喜解锁新功能，本视频稍后将为你扩充为完整版！",
        POLL_DURATION_SWITCH_SUCCESS: "进度条抢救成功！",
        GETINFO_MISSING_PARAM: "缺少必要播放参数 ($0)",
        DEFN_ABR_LABEL: "自动",
        DEVICE_SCORE_NOT_PASS: "当前设备不支持播放",
        PROXY_HTTP_PARSE_ERROR: "播放后台返回错误码（$0）",
        AUDIO_VIVID_DEGRADE_TEXT: "音轨切换失败，已切换回默认音轨"
    };
    function ip(e) {
        return function(t, o) {
            var i = -1;
            return function n(A) {
                if (A <= i)
                    return Promise.reject(new Error("next() called multiple times"));
                i = A;
                var r = e[A];
                if (A === e.length && (r = o),
                !r)
                    return Promise.resolve(null);
                try {
                    return Promise.resolve(r(t, n.bind(null, A + 1)))
                } catch (e) {
                    return Promise.reject(e)
                }
            }(0)
        }
    }
    Ka.tvk = op;
    var np, Ap, rp, ap, sp = function() {
        function e(t) {
            n(this, e),
            a(this, "jsonpPrefix", void 0),
            this.jsonpPrefix = t
        }
        return r(e, [{
            key: "start",
            value: function(t, o) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.timeout;
                return Wa.jsonp(t, {
                    query: o,
                    timeout: i,
                    charset: "utf-8",
                    name: "".concat(this.jsonpPrefix).concat(Math.floor(1e6 * Math.random()))
                })
            }
        }]),
        e
    }();
    a(sp, "timeout", 6e3),
    function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN",
        e[e.DEVICE_SCORE_NOT_PASS = 1] = "DEVICE_SCORE_NOT_PASS"
    }(np || (np = {})),
    _s.tvk = 17,
    function(e) {
        e.UPDATE_K = "uk",
        e.UPDATE_DRM = "udrm",
        e.PROXY_REQ = "proxyReq",
        e.RES_MODIFY = "resMfy",
        e.RES_PARSE = "resParse"
    }(Ap || (Ap = {})),
    function(e) {
        e.vodVQQ = "10201",
        e.vodHarmonyTxVideo = "7891901",
        e.vodDefault = "70201",
        e.liveVQQ = "10201"
    }(rp || (rp = {})),
    function(e) {
        e.cover = "100101",
        e.page = "100102"
    }(ap || (ap = {}));
    var lp, gp = "__audiovivid", cp = "EXT-QQHLS-STREAM-KEYID", up = "ctrlbar", Ep = {
        CID: 1
    }, dp = "tvk_currentUsKey", Bp = "tvk_isVip";
    function hp(e, t) {
        return pp.apply(this, arguments)
    }
    function pp() {
        return pp = i((function(e, t) {
            var o, i, n = arguments;
            return F(this, (function(A) {
                switch (A.label) {
                case 0:
                    return o = n.length > 2 && void 0 !== n[2] && n[2],
                    Ln.start(Ap.UPDATE_DRM, t),
                    [4, uB(e, o)];
                case 1:
                    return i = A.sent(),
                    Ln.end(Ap.UPDATE_DRM, t),
                    [2, i]
                }
            }
            ))
        }
        )),
        pp.apply(this, arguments)
    }
    !function(e) {
        e[e.NONE = 0] = "NONE",
        e[e.FAIRPLAY = 4] = "FAIRPLAY",
        e[e.WIDEVINE = 5] = "WIDEVINE",
        e[e.CHACHA20 = 3] = "CHACHA20",
        e[e.CHINADRM2 = 7] = "CHINADRM2"
    }(lp || (lp = {}));
    var vp = fp;
    function fp(e, t) {
        var o = Ip();
        return fp = function(t, i) {
            var n = o[t -= 369];
            void 0 === fp.eWYTcE && (fp.jatiZT = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            fp.eWYTcE = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = fp.jatiZT(n),
            e[A] = n),
            n
        }
        ,
        fp(e, t)
    }
    function Ip() {
        var e = ["yxbWvMvY", "C2vUDa", "zgvZAwDUoNbHCMfTDhLWzxm", "y0TLEq", "BM93", "y0TLEunVC3ruAw1L", "y29UDgv4De1VzgLMAwvY", "C3rHCNq", "yNvZAw5LC3neyxrH", "Bg9Nz2vY", "Dhj5CW", "CgXHEwvYsw5ZDgfUy2vjza", "y29UDgv4De1VzgLMAwvYigvYCM9YoG", "CMvXugfYyw1Z", "zgvZAwDUoNjLDhvYBNr5Cgu", "CgXHDgzVCM0", "DxbKyxrL", "zgvZAwDUoNr5Cgu", "y3r4", "zxHLy0nVBNrLEhrnB2rPzMLLCG", "mZeZndG0nMP5tvLMBG", "DMLK", "mtiZntKWng1wvwv2Aa", "BgfIzwW", "nJK3nJi5mfD4t3nJsG", "mJH5EhPPwwu", "zw5JCNLWDfzLCG", "zw5K", "BgvUz3rO", "y2fSBa", "nZe5mZy0ofzzEgLlsa", "Adm4", "mta4q1fhEgLN", "vxbKyxrLuMvXugfYyw1Z", "mti4mJC2ofL3z1jXwq", "ChjVDg90ExbL", "y29UzMLN", "vvbeqvrfx0S", "oda1mJC4uhbNu0XR", "ChvZAa", "nZK1odK5v2fMs3bM", "z3vPza", "zxjYB3i"];
        return (Ip = function() {
            return e
        }
        )()
    }
    !function(e, t) {
        for (var o = fp, i = Ip(); ; )
            try {
                if (948680 == -parseInt(o(402)) / 1 + parseInt(o(382)) / 2 + -parseInt(o(400)) / 3 + parseInt(o(392)) / 4 + parseInt(o(386)) / 5 + -parseInt(o(384)) / 6 * (parseInt(o(387)) / 7) + parseInt(o(396)) / 8 * (-parseInt(o(394)) / 9))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var yp = bn(vp(395))
      , Cp = function() {
        var e = vp;
        function t(e) {
            var o = fp;
            n(this, t),
            a(this, o(380), void 0),
            this[o(380)] = e
        }
        return r(t, [{
            key: e(373),
            get: function() {
                var t, o = e;
                return null === (t = this[o(380)]) || void 0 === t ? void 0 : t[o(373)]
            }
        }, {
            key: e(378),
            value: function() {
                var t = arguments[e(390)] > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , o = this;
                return i((function() {
                    var e, i, n, A, r, a, s, l, g, c, u, E, d, B, h, p, v;
                    return F(this, (function(f) {
                        var I = fp;
                        switch (f[I(385)]) {
                        case 0:
                            return Ln[I(369)](Ap[I(399)], o[I(373)]),
                            e = o[I(380)][I(375)],
                            i = o[I(380)][I(370)],
                            n = i[I(393)],
                            A = void 0 === n ? "" : n,
                            r = e[I(383)],
                            a = void 0 === r ? "" : r,
                            s = e[I(405)],
                            l = void 0 === s ? "" : s,
                            g = e[I(403)],
                            c = void 0 === g ? "" : g,
                            u = e[I(377)],
                            E = void 0 === u ? "" : u,
                            d = performance[I(409)](),
                            B = Zh({
                                vid: a,
                                updateTimeStamp: t,
                                platform: E,
                                guid: c,
                                appVer: l,
                                h38: A
                            }),
                            h = B.tm,
                            p = B[I(408)],
                            v = B[I(388)],
                            e.tm = h,
                            e[I(408)] = p,
                            e[I(388)] = v,
                            o[I(380)][I(410)] = performance[I(409)]() - d,
                            [4, o[I(381)]()];
                        case 1:
                            return f[I(406)](),
                            Ln[I(389)](Ap[I(399)], o[I(373)]),
                            [2, e]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: e(381),
            value: function() {
                var e = this;
                return i((function() {
                    var t, o, i;
                    return F(this, (function(n) {
                        var A = fp;
                        switch (n[A(385)]) {
                        case 0:
                            return n[A(372)][A(401)]([0, 2, , 3]),
                            [4, null === (t = (o = e[A(380)][A(398)])[A(411)]) || void 0 === t ? void 0 : t[A(391)](o, e[A(380)])];
                        case 1:
                            return n[A(406)](),
                            [3, 3];
                        case 2:
                            return i = n[A(406)](),
                            e[A(380)][A(371)][A(404)](A(374), i),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))()
            }
        }]),
        t
    }();
    function mp() {
        var e = ["nZCXnJHwt2DKrgG", "mti5nJq4odbnB2HHB0e", "BxvSDgLKCM0", "zw5HyMXLvhHfBMm", "DxbKyxrL", "y29UzMLN", "DMLK", "nMvYAMDfBa", "mtK3otK4oeXYAxjUBG", "Bg9Nz2vY", "CgXHEwvYsw5ZDgfUy2vjza", "odH4u1DJrwC", "CMvXugfYyw1Z", "ywXS", "C2vUzcbWyxjHBq", "mtm4nJaZnNrRs2rlCa", "mxzdu0LRsq", "mtiYnte4nKr5v1bUsW", "mti3nfP6AK5rza", "Bg9N", "ChjLDMLK", "nxfmugvTqG", "nZa5mZCWnhDlA29Szq", "BgfIzwW", "odeZmJKXm0zAAxH1ra", "zhjT", "C2vUDa", "yxbWBhK"];
        return (mp = function() {
            return e
        }
        )()
    }
    function Qp(e, t) {
        var o = mp();
        return Qp = function(t, i) {
            var n = o[t -= 120];
            void 0 === Qp.EEwJFe && (Qp.bIGIOE = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Qp.EEwJFe = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Qp.bIGIOE(n),
            e[A] = n),
            n
        }
        ,
        Qp(e, t)
    }
    _([yp, D(vp(379), Function), D(vp(407), [void 0]), D(vp(376), Promise)], Cp[vp(397)], vp(378), null),
    _([yp, D(vp(379), Function), D(vp(407), []), D(vp(376), Promise)], Cp[vp(397)], vp(381), null),
    function(e, t) {
        for (var o = Qp, i = mp(); ; )
            try {
                if (948294 == parseInt(o(143)) / 1 * (-parseInt(o(144)) / 2) + -parseInt(o(134)) / 3 * (parseInt(o(135)) / 4) + parseInt(o(120)) / 5 * (parseInt(o(121)) / 6) + parseInt(o(145)) / 7 * (-parseInt(o(127)) / 8) + parseInt(o(123)) / 9 + parseInt(o(128)) / 10 + -parseInt(o(138)) / 11 * (-parseInt(o(142)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var wp = function() {
        var e = i((function(e, t) {
            var o, i, n, A, r;
            return F(this, (function(a) {
                var s = Qp;
                switch (a[s(122)]) {
                case 0:
                    return o = e[s(139)],
                    i = void 0 === o ? {} : o,
                    [4, Promise[s(140)]([new Cp(e)[s(131)](), hp(i[s(124)], e[s(137)], e[s(132)][s(130)]), dB(i[s(129)])])];
                case 1:
                    return n = I[s(126)](void 0, [a[s(125)](), 3]),
                    A = n[1],
                    r = n[2],
                    i[s(124)] = A,
                    i[s(129)] = r || 0,
                    i[s(147)] && delete i[s(133)],
                    e[s(136)][s(146)](s(141), e[s(139)]),
                    [4, t()];
                case 2:
                    return a[s(125)](),
                    [2]
                }
            }
            ))
        }
        ));
        return function(t, o) {
            return e[Qp(126)](this, arguments)
        }
    }();
    !function(e, t) {
        for (var o = Sp, i = _p(); ; )
            try {
                if (332606 == parseInt(o(406)) / 1 * (parseInt(o(396)) / 2) + parseInt(o(401)) / 3 * (parseInt(o(402)) / 4) + -parseInt(o(403)) / 5 * (parseInt(o(398)) / 6) + parseInt(o(404)) / 7 * (parseInt(o(397)) / 8) + parseInt(o(395)) / 9 + parseInt(o(399)) / 10 * (parseInt(o(400)) / 11) + -parseInt(o(405)) / 12)
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var Tp = {
        path: "",
        retryCount: 3,
        test: 0,
        timeout: 6e3,
        ckeyVer: "",
        keepAdReqWithCustomPath: !1,
        enableTxEnc: !1
    };
    function Sp(e, t) {
        var o = _p();
        return Sp = function(t, i) {
            var n = o[t -= 395];
            void 0 === Sp.QClVpQ && (Sp.zofXJO = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Sp.QClVpQ = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Sp.zofXJO(n),
            e[A] = n),
            n
        }
        ,
        Sp(e, t)
    }
    function _p() {
        var e = ["n0TPwhHxua", "mJu4odGWnunoEw1xta", "mJmWotrdB2Xbq0S", "nti4oerJEw1MyG", "mta3mtqYnKXxuvzNDW", "mtqXmJu0mfLUyKTKza", "mtfAAuHsDgS", "mtv0vfP2AeO", "ode1nZjhtxPgCKu", "nwXduxjJsG", "nty5oenRqwTfsq", "nZy2mJG0mezxzvzXDa"];
        return (_p = function() {
            return e
        }
        )()
    }
    var Dp = Mp;
    !function(e, t) {
        for (var o = Mp, i = bp(); ; )
            try {
                if (845835 == -parseInt(o(414)) / 1 + parseInt(o(360)) / 2 * (parseInt(o(368)) / 3) + parseInt(o(363)) / 4 * (-parseInt(o(380)) / 5) + -parseInt(o(355)) / 6 + parseInt(o(374)) / 7 + -parseInt(o(352)) / 8 * (parseInt(o(397)) / 9) + parseInt(o(413)) / 10)
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var Pp, Fp = {
        COMMON: [Dp(378), Dp(389), Dp(372)],
        TEST: Dp(347)
    };
    !function(e) {
        var t = Dp;
        e[t(388)] = t(371),
        e[t(412)] = t(375),
        e[t(367)] = t(408),
        e[t(404)] = t(384),
        e[t(403)] = t(410),
        e[t(382)] = t(409),
        e[t(385)] = t(361),
        e[t(364)] = t(399),
        e[t(362)] = t(366),
        e[t(356)] = t(402),
        e[t(395)] = t(387),
        e[t(383)] = t(357)
    }(Pp || (Pp = {}));
    var Lp, Yp = {
        1: Dp(390),
        2: Dp(358),
        3: Dp(377),
        4: Dp(394),
        5: Dp(405),
        6: Dp(381),
        7: Dp(406),
        8: Dp(369),
        9: Dp(415),
        10: Dp(353),
        11: Dp(386),
        12: Dp(417),
        13: Dp(349),
        14: Dp(407),
        15: Dp(370),
        16: Dp(401),
        17: Dp(350),
        18: Dp(379),
        19: Dp(411),
        20: Dp(392),
        21: Dp(351),
        23: Dp(398),
        26: Dp(391),
        27: Dp(359)
    }, Rp = {
        9: Dp(365)
    };
    function bp() {
        var e = ["u0rskW", "y2TLEvzLCNnPB24", "DMLKzw9gCMfTzvjHDgu", "DM9KlwDLDgLUzM86DMLWvg9Rzw4", "y2DPBMfTzq", "u0zsnfHFserskdeYmezquYK", "DM9KlwDLDgLUzM86CgfYC2vdB3n0vgLTzq", "DMLKzw9uExbL", "Ahr0Chm6lY9IA2G1DNyUDMLKzw8UCxeUy29Tl2DLDhzPBMzV", "qMfZAwm", "vKfwmq", "qwr2yw5JzwqTDhH2", "qvztm0e", "rg9SyNLwAxnPB24", "CgfYC2vdB3n0vgLTzq", "ANnVBNa", "nJG2ntjwzM5gzhi", "veLfx1y0", "DM9KlwDLDgLUzM86y2TLExrPBwu", "re9mqLLFvKLtsu9o", "u0zsx1rjrv9wmIG2mezquYK", "DM9KlwDLDgLUzM86DNvYBa", "y2TLEq", "DMLWvg9Rzw4", "tM9UzsHbDwrPBYbpBMX5kq", "u0rs", "qvyX", "DM9KlwDLDgLUzM86DxnLCLbHEvr5Cgu", "DM9KlwDLDgLUzM86y2TLEvzLCNnPB24", "DM9KlwDLDgLUzM86y2TLEq", "q1vwqs1irfi", "DMLKzw9dAgfYz2vK", "mZK4otm2ndblB1zbsvO", "mtiXnZe3owvsr3PUvG", "su1HEa", "EgHY", "u0zsm1HFserskdKWrLbtkq", "Ahr0Chm6lY90zxn0DNyUDMLKzw8UCxeUy29Tl2DLDgG1Aw5MBZ8", "sdi2nG", "qvztmW", "u0zsm1HFveLfx1yYkdKWrLbtkq", "yMfZAwmTDhH2", "mta0ogrmEgLXBW", "u0zsx0HeuIG2mezquYK", "vu5ltK9xtG", "nJG0mZG0merXv3zktG", "DNvYBa", "DM9KlwDLDgLUzM86DMLKzw9gCMfTzvjHDgu", "rwzMAwnPzw50", "u0zsx1zjvKLe", "mMfwCwn1sG", "DM9KlwDLDgLUzM86y2DPBMfTzq", "y2TLEwrN", "ntC2mti5mM5eCwDYua", "y2TLExrPBwu", "DML2Awq", "DM9KlwDLDgLUzM86y2TLEwrN", "DxnLCLbHEvr5Cgu", "mteXodu4m1neDuHIEq", "rwzMAwnPzw50lxr4DG", "veLfx1yY", "DM9KlwDLDgLUzM86DMLKzw9uExbL", "Ahr0Chm6lY9HDI52AwrLBY5XCs5JB20Vz2v0DMLUzM8", "sdi2nq", "odK2nZe0me1Kywfcra", "DM9KlwDLDgLUzM86DMLKzw9dAgfYz2vK", "sdi2na", "sersmta", "Ahr0Chm6lY9Onxz2nI52AwrLBY5XCs5JB20Vz2v0DMLUzM8", "u0zsnfHFveLfx1yYkdeYmezquYK", "nuDyugDwzq"];
        return (bp = function() {
            return e
        }
        )()
    }
    var kp, Gp = (a(Lp = {}, e.VIDEO_CODEC[Dp(376)], [1, 21]),
    a(Lp, e.VIDEO_CODEC[Dp(373)], [2, 3, 6, 7, 8, 10, 11, 12, 15, 16, 17, 18, 19, 23, 27]),
    a(Lp, e.VIDEO_CODEC[Dp(400)], [4]),
    a(Lp, e.VIDEO_CODEC[Dp(407)], [14, 26]),
    a(Lp, e.VIDEO_CODEC[Dp(348)], [20]),
    Lp), Np = (a(kp = {}, e.AUDIO_CODEC[Dp(393)], [9]),
    a(kp, e.AUDIO_CODEC[Dp(354)], []),
    kp);
    function Mp(e, t) {
        var o = bp();
        return Mp = function(t, i) {
            var n = o[t -= 347];
            void 0 === Mp.owXqgL && (Mp.kMBjHE = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Mp.owXqgL = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Mp.kMBjHE(n),
            e[A] = n),
            n
        }
        ,
        Mp(e, t)
    }
    var Up = {
        JSONP: Dp(396),
        XHR: Dp(416)
    }
      , Op = Kp;
    function Kp(e, t) {
        var o = qp();
        return Kp = function(t, i) {
            var n = o[t -= 450];
            void 0 === Kp.YuvuIl && (Kp.nRAIUU = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Kp.YuvuIl = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Kp.nRAIUU(n),
            e[A] = n),
            n
        }
        ,
        Kp(e, t)
    }
    !function(e, t) {
        for (var o = Kp, i = qp(); ; )
            try {
                if (565569 == -parseInt(o(491)) / 1 + -parseInt(o(492)) / 2 * (-parseInt(o(458)) / 3) + parseInt(o(510)) / 4 + -parseInt(o(515)) / 5 * (parseInt(o(452)) / 6) + -parseInt(o(507)) / 7 * (parseInt(o(490)) / 8) + parseInt(o(519)) / 9 * (parseInt(o(457)) / 10) + -parseInt(o(484)) / 11 * (-parseInt(o(470)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var xp = Op(518)
      , Vp = [Op(497), "ad"]
      , Hp = function() {
        var t = i((function(t, o) {
            var i, n, A, r, a, s, l, g, c, u, E, d, B, h, p, v, f, I, y, C;
            return F(this, (function(m) {
                var Q = Kp;
                switch (m[Q(463)]) {
                case 0:
                    t[Q(524)][Q(486)](Q(500)),
                    n = t[Q(473)],
                    A = n[Q(462)],
                    r = void 0 === A ? 3 : A,
                    a = null,
                    s = 0,
                    function(e) {
                        var t, o = Op, i = e[o(473)][o(460)];
                        (null === (t = e[o(468)]) || void 0 === t ? void 0 : t[o(508)]) && i && (i === Up[o(456)] ? e[o(468)][o(508)] = o(513) : e[o(468)][o(508)] = o(472))
                    }(t),
                    t[Q(524)][Q(486)](Q(495), null === (i = t[Q(468)]) || void 0 === i ? void 0 : i[Q(508)]),
                    l = !1,
                    m[Q(463)] = 1;
                case 1:
                    if (!(s <= r))
                        return [3, 12];
                    t[Q(524)][Q(486)](Q(517), s),
                    t[Q(501)] = s,
                    m[Q(463)] = 2;
                case 2:
                    return m[Q(454)][Q(516)]([2, 9, , 11]),
                    a = null,
                    t[Q(493)] = function(e, t) {
                        var o = Op
                          , i = e[o(499)]
                          , n = e[o(475)];
                        if (i)
                            return Fp[o(469)];
                        var A = n || Fp[o(502)];
                        return typeof A === o(520) ? A : A[t % A[o(489)]]
                    }(n, s),
                    c = Date[Q(525)](),
                    (E = t[Q(512)]) ? [3, 4] : [4, jp(t)];
                case 3:
                    E = m[Q(505)](),
                    m[Q(463)] = 4;
                case 4:
                    return u = E,
                    t[Q(524)][Q(486)](Q(455)[Q(527)](s, Q(453))[Q(527)](Date[Q(525)]() - c)),
                    Ln[Q(477)](Ap[Q(526)], t[Q(498)]),
                    [4, null === (g = n[Q(509)]) || void 0 === g ? void 0 : g[Q(496)](n, u)];
                case 5:
                    return t[Q(512)] = null !== (d = m[Q(505)]()) && void 0 !== d ? d : u,
                    Ln[Q(461)](Ap[Q(526)], t[Q(498)]),
                    t[Q(512)] ? 85 != +t[Q(512)].em || -3 != +t[Q(512)][Q(522)] || l ? [3, 7] : (t[Q(524)][Q(486)](Q(465)),
                    B = t[Q(512)][Q(480)],
                    t[Q(512)] = void 0,
                    [4, new Cp(t)[Q(459)](B)]) : [3, 8];
                case 6:
                    return m[Q(505)](),
                    l = !0,
                    [3, 1];
                case 7:
                    return [3, 12];
                case 8:
                    return [3, 11];
                case 9:
                    return h = m[Q(505)](),
                    p = null == h ? void 0 : h[Q(451)],
                    v = null == h ? void 0 : h[Q(521)],
                    t[Q(524)][Q(483)](Q(504)[Q(527)](s, Q(471))[Q(527)](v, Q(511))[Q(527)](p)),
                    p === Q(487) ? a = {
                        code: e.ErrorCode[Q(450)],
                        message: ns(xa[Q(523)][Q(464)])
                    } : v && (a = {
                        code: v,
                        message: p
                    }),
                    t[Q(512)] = void 0,
                    t[Q(494)] ? [3, 12] : [4, new Cp(t)[Q(459)]()];
                case 10:
                    return m[Q(505)](),
                    [3, 11];
                case 11:
                    return s += 1,
                    [3, 1];
                case 12:
                    if (t[Q(478)] = t[Q(478)] || +new Date,
                    !t[Q(512)])
                        return !(null == a ? void 0 : a[Q(521)]) && os[Q(514)](xp, Vp) && (a = {
                            code: e.ErrorCode[Q(467)],
                            message: ns(xa[Q(523)][Q(466)])
                        }),
                        t[Q(476)]((null == a ? void 0 : a[Q(521)]) || e.ErrorCode[Q(482)], (null == a ? void 0 : a[Q(451)]) || ns(xa[Q(523)][Q(466)])),
                        [2];
                    try {
                        f = t[Q(512)],
                        I = f.fl,
                        y = f.vl,
                        C = Ag(f, ["fl", "vl"]),
                        t[Q(524)][Q(479)](Q(503), C),
                        t[Q(524)][Q(479)](Q(503), I),
                        t[Q(524)][Q(479)](Q(503), y)
                    } catch (e) {}
                    return [4, o()];
                case 13:
                    return m[Q(505)](),
                    [2]
                }
            }
            ))
        }
        ));
        return function(e, o) {
            return t[Kp(481)](this, arguments)
        }
    }();
    function jp(e) {
        return Wp[Op(481)](this, arguments)
    }
    function qp() {
        var e = ["mJjqCgDQzKi", "DgLTzw91Da", "Bg9N", "ANnVBNaGDgLTzw91Da", "CMvXDwvZDg9Y", "BgvUz3rO", "og92y093vW", "ndm3ndG2AKXcsKfq", "mKLXD2vLuW", "CMvXugf0Aa", "AgfZu3j2rgf0yq", "Bw9KAwz5ig90ExbL", "y2fSBa", "ywrZ", "CgXHEwvYsw5ZDgfUy2vjza", "DgvZDa", "C2vUzcbZDgfYDa", "ywXYzwfKEvjLDhj5q291BNq", "q09ntu9o", "C2vUzcbVDMvY", "DgHLia", "C2vUDa", "zgf0yq", "mta2mtG1ogXAzxzsEa", "B3r5Cgu", "CMvZCg9UC2vnB2rPzMLLCG", "ntm3otzTAvblq1y", "lcbTC2C9", "CMvZrgf0yq", "ANnVBG", "Axnku09ovgfTCgvYzwq", "ndu1nu5cAhHcDG", "ChvZAa", "CMvXDwvZDgLUzY4UlM51Bt0", "EYjHzhmIoLTDlcjHzci6E319", "ovf1sLLqtW", "C3rYAw5N", "y29Kzq", "zxHLBq", "AdvWBgf5zxi", "Bg9Nz2vY", "BM93", "uKvtx01preLgwq", "y29Uy2f0", "r0vusu5gt19usu1ft1vu", "BwvZC2fNzq", "ndqYoe5PserZEa", "lcbJB3n0pq", "Dhj5CW", "CMvXDwvZDcbVDMvYlI4UBNvTpq", "sLnptLa", "mZyWoduZmhrdq1npCa", "nJG1mJu3vgPsvMjY", "DxbKyxrL", "CMvXDwvZDe1Vzgu", "zw5K", "CMv0CNLdB3vUDa", "BgfIzwW", "rvjst1jFr0vusu5gt19usu1ft1vu", "y2fSyYa4ns0Z", "rvjst1jFr0vusu5gt19orvq", "r0vusu5gt19ku09ox1rbtvbfuKve", "CMvXugfYyw1Z", "vevtva", "nZm0nJa3nMf6DuzNAW", "ihjLCxvLC3qGzxjYlcbJB2rLpq", "B2PZB24", "y29UzMLN", "weHs", "Cgf0Aa", "DgHYB3C", "C3rHCNq", "zw5KvgLTzq", "y2fJAgu", "y3vYvgLTzq", "yxbWBhK", "r0vusu5gt19orvq", "zxjYB3i"];
        return (qp = function() {
            return e
        }
        )()
    }
    function Wp() {
        var e = Op;
        return Wp = i((function(e) {
            var t, o, i, n, A, r;
            return F(this, (function(a) {
                var s = Kp;
                switch (a[s(463)]) {
                case 0:
                    return t = e[s(488)],
                    o = e[s(473)],
                    i = o[s(485)],
                    n = void 0 === i ? Tp[s(485)] : i,
                    A = o[s(460)],
                    [4, t[s(477)](e[s(493)], e[s(468)], n)];
                case 1:
                    return r = a[s(505)](),
                    A === Up[s(474)] ? [2, r[s(506)]] : [2, r]
                }
            }
            ))
        }
        )),
        Wp[e(481)](this, arguments)
    }
    var Jp = function() {
        function e() {
            n(this, e)
        }
        return r(e, [{
            key: "start",
            value: function(e, t, o) {
                var i = e.includes("?") ? "" : "?"
                  , n = "".concat(e).concat(i).concat(ts.object2string(t, "&"));
                return Wa.xhr({
                    url: n,
                    timeout: o,
                    method: "GET",
                    withCredentials: !0,
                    responseType: "json"
                })
            }
        }]),
        e
    }();
    function zp(t) {
        var o = t || {}
          , i = o.code
          , n = o.message
          , A = o.stack;
        return i || (i = e.ErrorCode.GETINFO_INNER,
        n = "".concat(ns(xa.h5player.ERROR_GETINFO_INNER), ", err (").concat(t, ")"),
        A = A || ""),
        {
            code: i,
            message: n,
            stack: A,
            data: t.data
        }
    }
    function Xp(e, t) {
        var o = e.drmType
          , i = e.licenseUrl
          , n = e.certificateUrl;
        if (i) {
            var A, r = (a(A = {}, Rc.FAIR_PLAY, WA.FairPlayWebKit),
            a(A, Rc.WIDEVINE, WA.Widevine),
            A), s = {
                enableChromeM113Workaround: !0,
                licenseUrl: i,
                certificate: {},
                keySystem: r[o],
                licenseRequestSetup: function(e) {
                    if (o === Rc.FAIR_PLAY) {
                        e.responseType = "text";
                        var i = {
                            guid: t(Nc.guid)
                        }
                          , n = Object.keys(i).map((function(e) {
                            return "".concat(e, "=").concat(i[e])
                        }
                        )).join("&");
                        return e.body = "".concat(e.body, "&").concat(n),
                        e
                    }
                    return e
                },
                licenseResponseSetup: function(e) {
                    return o === Rc.FAIR_PLAY ? es.base64ToUint8Array(e) : e
                }
            };
            return o === Rc.FAIR_PLAY && (s.certificate = a({}, r[o], n)),
            s
        }
    }
    function Zp(e, t, o) {
        if (t === Rc.NONE) {
            var i = {
                platform: o(Nc.platform) || "",
                osVer: o(Nc.osver) || "",
                broVer: o(Nc.ua) || "",
                playerVer: o(Nc.playerver) || "",
                guid: o(Nc.guid) || "",
                qq: "",
                wx: "",
                vip: !1
            }
              , n = o(Nc.hc_main_login);
            return "qq" === n ? i.qq = o(Nc.hc_vuserid) : "wx" === n && (i.wx = o(Nc.hc_vuserid)),
            E(u({
                flowId: o(Nc.flowid),
                playerInfo: i
            }, e), {
                vid: "",
                format: ""
            })
        }
    }
    function $p(e, t) {
        var o = ev();
        return $p = function(t, i) {
            var n = o[t -= 417];
            void 0 === $p.UZedwN && ($p.SALwSZ = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            $p.UZedwN = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = $p.SALwSZ(n),
            e[A] = n),
            n
        }
        ,
        $p(e, t)
    }
    function ev() {
        var e = ["mtf3B3jlr0i", "mte0mJeYntjAu1LxuLu", "zxjYB3i", "r0vusu5gt19qqvjtrq", "AdvWBgf5zxi", "mtK1odCWmfPiyvnjwG", "nZi5mJa3yw5kAgry", "nZu1nuftz1jLqq", "y29Uy2f0", "n3jtEM54yW", "yxbWBhK", "C2vUDa", "ChjLDMLLDW", "BgfIzwW", "Dw5KzwzPBMvK", "mJq2mgPirxvqqW", "y2HLy2SGCMvZCg9UC2uGzMfPBgvK", "nfnkuhjNqq", "mte2mJiZmMjiq0vAqG", "CMvZrgf0yq", "BxnN", "rvjst1jFr0vusu5gt19qqvjtrq", "zxHLBq", "rvjst1jFr0vusu5gt19dt0rf", "C2XPy2u", "mJKZndCZmM1AvuTUuW", "nZbttuHuuKu", "DgHYB3C", "mJq3nJiYvMn3BvnM", "r0vusu5gt19trvjwrvjFq09erv9quKvgsvG", "Bg9Nz2vY", "mdaW"];
        return (ev = function() {
            return e
        }
        )()
    }
    !function(e, t) {
        for (var o = $p, i = ev(); ; )
            try {
                if (468670 == -parseInt(o(422)) / 1 * (-parseInt(o(433)) / 2) + parseInt(o(442)) / 3 + parseInt(o(420)) / 4 * (-parseInt(o(444)) / 5) + parseInt(o(430)) / 6 * (parseInt(o(446)) / 7) + parseInt(o(423)) / 8 + parseInt(o(443)) / 9 * (parseInt(o(431)) / 10) + -parseInt(o(437)) / 11 * (parseInt(o(438)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var tv, ov, iv, nv = function() {
        var t = i((function(t, o) {
            var i, n, A, r, a, s, l, g;
            return F(this, (function(c) {
                var u = $p;
                switch (c[u(418)]) {
                case 0:
                    return n = t[u(424)],
                    r = typeof (A = void 0 === n ? {} : n).em === u(419) ? 0 : +A.em,
                    a = +A[u(427)],
                    s = I((null === (i = A.vl) || void 0 === i ? void 0 : i.vi) || [], 1),
                    l = s[0],
                    0 === r && l && (8 === l.st || !isNaN(a) && 0 !== a) && 0 == +A[u(417)] && (r = 83),
                    0 !== r ? (g = ""[u(445)](e.ErrorCode[u(434)])[u(445)](u(436)[u(445)](r)[u(429)](-3))[u(445)](isNaN(a) ? "" : "."[u(445)](a)),
                    t[u(432)](g, A[u(425)] || ns(xa[u(441)][u(428)])),
                    [2]) : "o" === A.s && l ? [4, o()] : (t[u(435)][u(439)](u(421), A),
                    t[u(432)](e.ErrorCode[u(440)], ns(xa[u(441)][u(426)])),
                    [2]);
                case 1:
                    return c[u(448)](),
                    [2]
                }
            }
            ))
        }
        ));
        return function(e, o) {
            return t[$p(447)](this, arguments)
        }
    }();
    function Av(t) {
        var o = t.codec
          , i = t.audioCodec
          , n = t.dltype
          , A = void 0;
        return o === e.VIDEO_CODEC.H265 || o === e.VIDEO_CODEC.DOLBY_VISION ? A = function(t) {
            var o = void 0;
            return ja.supportHevc() ? t === md.MP4 ? o = e.KERNEL_NAME.ORIGIN : t !== md.HLS && t !== md.DIR_HLS || (o = e.KERNEL_NAME.HLS_JS) : o = e.KERNEL_NAME.WASM,
            o
        }(n) : o === e.VIDEO_CODEC.H264 ? A = function(t) {
            var o = void 0;
            return t === md.MP4 ? o = e.KERNEL_NAME.ORIGIN : t === md.DIR_HLS && (o = e.KERNEL_NAME.HLS_JS),
            o
        }(n) : o === e.VIDEO_CODEC.H266 && (A = e.KERNEL_NAME.WASM),
        i === e.AUDIO_CODEC.AVS3A && (A = e.KERNEL_NAME.WASM_AUDIOVIVID),
        A = function(t) {
            var o = t.drm
              , i = t.codec
              , n = void 0;
            return o === lp.WIDEVINE || o === lp.CHINADRM2 ? n = e.KERNEL_NAME.HLS_JS : o === lp.FAIRPLAY ? n = e.KERNEL_NAME.ORIGIN : o === lp.CHACHA20 && i === e.VIDEO_CODEC.H264 && (n = e.KERNEL_NAME.HLS_JS),
            n
        }(t) || A,
        A
    }
    function rv(e) {
        var t = e.name
          , o = e.feature;
        return t === Vd.suhd && o & lB.aiEnhancedSuhd ? aB.aiEnhancedSuhd : rB[t]
    }
    function av(e) {
        var t = e.name
          , o = e.feature
          , i = e.video
          , n = void 0 === i ? -1 : i;
        return t === Vd.suhd && o & lB.aiEnhancedSuhd ? jd.ai_enhanced : sB[n]
    }
    function sv(e, t) {
        var o = lv();
        return sv = function(t, i) {
            var n = o[t -= 145];
            void 0 === sv.zDIVmc && (sv.fUvQDA = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            sv.zDIVmc = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = sv.fUvQDA(n),
            e[A] = n),
            n
        }
        ,
        sv(e, t)
    }
    function lv() {
        var e = ["i0vyveLorJO", "CMvWBgfJzq", "mtuWmJzhqurotwm", "mZmXnZrgrujZzM4", "DwHK", "CgfYC2u", "Aw5KzxHpzG", "sdi2na", "ChjLDMLLDW", "sefsra", "otCWy2D1rNH1", "ywrWAw5MBW", "DMLKzw8", "BMfTzq", "C2vSzwn0zwq", "Dw5RBM93BG", "lMzSDG", "tva0", "y29Uy2f0", "BwfW", "C3vWCg9YDeHLDMm", "DMLKzw9SAxn0", "Dw5ZDxbWB3j0zwq", "rvHulvGTvefsr0vurfvsqvrjt046", "zMLUza", "mteYodK5y1LxD2Pk", "C2r0zNjVBq", "otm0mdbfvhnNy1i", "seXt", "mtrgyungBeC", "ntvSt0ngCgW", "jNnKDgzYB209", "mtiZnZCYnfnSzKLHAG", "jNzRzxK9", "C3vIC3rYAw5N", "C2XPy2u", "CgXHEq", "DMLKzw9dB2rLyW", "y250", "yMfJA3vWvxjSCW", "mtm2mJu3oerIrLj2sG", "A2v5CW", "sdi2nq", "C3rHCNq", "DhjHy2S", "nK9YtMjpBG", "DMzWCW", "Btn1oa", "zxHLBq", "C3vIC3rY", "C29YDa", "yxvKAw8", "mMvjAhfmqW", "zhjT", "B3b0ExbL", "zM9YrwfJAa", "yxnZzxrPzf9PBMzV", "p3nKDgzYB209", "BM9Uzq", "C3bSAwnL", "zgX0ExbL", "Bg5R", "lM1Wna", "jMD1Awq9", "yxvKAw9dB2rLyW", "reLsx0HmuW", "A2v5Awq", "A2v5Awq6lY8", "ueHmuW", "mtndvMnMqKW", "lM0ZDtG", "DxjS", "AgXZlG", "C3rHCNrWCMv2Awv3", "AgXZ", "Agv2yW", "Bg10", "ChvZAa", "ywrFDgLTzv9LBMq", "BgfZDeLUzgv4t2y", "mJa4ndm0sxLpC3zV", "zhvTBxK", "BgvUz3rO", "mZy4ngXHz3j1va", "BwfZDgvYDxjS", "vu5ltK9xtG", "ywrFDgLTzv9IzwDPBG", "zNzRzxK", "u01pt1ri"];
        return (lv = function() {
            return e
        }
        )()
    }
    function gv(e) {
        var t, o, i = sv, n = e[i(146)];
        return [{
            url: null !== (o = null === (t = n[i(194)]) || void 0 === t ? void 0 : t[0]) && void 0 !== o ? o : i(177)[i(217)](n[i(176)], i(180)),
            vt: e.vl.vi[0].ul.ui[0].vt
        }]
    }
    function cv(e, t, o, i, n, A) {
        for (var r, a, s = sv, l = [], g = e.ui[s(192)], c = 0; c < g; c++)
            a = {
                url: "",
                vt: 0
            },
            (r = e.ui[c])[s(181)] && (r[s(181)] && -1 === r[s(181)][s(205)](""[s(217)](t, s(215))) && -1 === r[s(181)][s(205)](""[s(217)](t, s(172))) ? a[s(181)] = r[s(181)] + o : a[s(181)] = r[s(181)],
            r.vt && (a.vt = parseInt(r.vt, 10)),
            -1 === a[s(181)][s(205)](s(225)) && (a[s(181)][s(205)]("?") > -1 ? a[s(181)] += s(230)[s(217)](n) : a[s(181)] += s(167)[s(217)](n),
            a[s(181)] += s(173)[s(217)](A, s(232))[s(217)](i)),
            l[s(187)](a));
        return l
    }
    function uv(e) {
        var t, o, i, n = sv, A = [];
        if (!e)
            return A;
        var r = e.al
          , a = e.vl
          , s = !1;
        null == r || null === (t = r.ai) || void 0 === t || t[n(165)]((function(e) {
            var t = n
              , o = e[t(176)]
              , i = e.sl
              , r = e[t(154)]
              , a = e.ul
              , l = e[t(212)];
            i && (s = !0);
            var g = Y(a.ui[t(218)]((function(e) {
                return e[t(181)]
            }
            )))
              , c = g[0]
              , u = g[t(145)](1);
            A[t(187)]({
                backupUrls: u,
                id: o,
                selected: !!i,
                url: c,
                name: r,
                displayName: l
            })
        }
        ));
        var l = null == a || null === (i = a.vi) || void 0 === i || null === (o = i[0]) || void 0 === o ? void 0 : o.ai;
        if (l) {
            var g = l[n(154)]
              , c = l[n(212)];
            A[n(187)]({
                id: -1,
                selected: !s,
                url: "",
                name: g,
                displayName: c
            })
        }
        return A
    }
    function Ev(e) {
        var t, o, i, n, A, r, a = sv, s = null == e || null === (i = e[a(146)]) || void 0 === i || null === (o = i[a(220)]) || void 0 === o || null === (t = o[0]) || void 0 === t ? void 0 : t[a(176)];
        return (null == e ? void 0 : e[a(146)]) && !s ? null : s ? a(182)[a(217)](s[a(200)](/\.hls$/, "")) : a(182)[a(217)](null == e || null === (r = e.vl) || void 0 === r || null === (A = r.vi) || void 0 === A || null === (n = A[0]) || void 0 === n ? void 0 : n[a(176)])
    }
    function dv(e) {
        var t, o, i, n = sv, A = Sa[n(206)], r = I((null == e || null === (t = e.vl) || void 0 === t ? void 0 : t.vi) || [], 1)[0], a = null == e || null === (i = e.fl) || void 0 === i || null === (o = i.fi) || void 0 === o ? void 0 : o[n(223)]((function(e) {
            return 1 === e.sl
        }
        )), s = null == a ? void 0 : a[n(211)];
        return r && 1 === r[n(185)] && (A = Sa[n(152)]),
        {
            vtypeKey: s,
            vtype: Yp[s] || n(214),
            codec: A,
            fmt: null == a ? void 0 : a.id,
            fps: null == a ? void 0 : a[n(156)]
        }
    }
    function Bv(e) {
        var t = sv;
        try {
            if (!(null == e ? void 0 : e[t(192)]))
                return null;
            var o = e[t(223)]((function(e) {
                return e[t(213)]
            }
            ));
            if (!o)
                return null;
            var i = o.id
              , n = o[t(181)]
              , A = o[t(149)]
              , r = void 0 === A ? [] : A;
            return {
                url: n,
                name: o[t(212)],
                keyId: String(i),
                backupUrls: r
            }
        } catch (e) {
            return null
        }
    }
    function hv(e, t) {
        var o = sv
          , i = t.fl
          , n = i.fi;
        return 0 === i[o(148)] ? [] : n[o(218)]((function(e) {
            var t, i, n, A, r, a = o, s = e[a(191)], l = e[a(207)], g = e[a(186)], c = !(s > 0 || 0 === l), d = qd[a(168)];
            return function(e) {
                var t = sv;
                return e[t(212)] === Vd[t(203)] && !ja[t(219)]()
            }(e) && (c = !1,
            d = qd[a(221)]),
            s > 0 && (d = s),
            i = (t = E(u({}, e), {
                lmt: 3 === g ? 1 : g,
                allowSwitch: c,
                previewDurationS: l,
                restrictionType: d,
                framerate: e[a(156)] || 0
            })).lmt,
            n = t.name,
            r = void 0 === (A = t.framerate) ? 25 : A,
            E(u({}, t), {
                tvkColorBrandName: av(t),
                tvkDefinitionBrandDescriptor: rv(t),
                tvkDefinitionBrandName: AB[n],
                tvkDefinitionKind: n,
                tvkFramerate: r,
                tvkPaywallLevel: i
            })
        }
        ))
    }
    function pv(e) {
        var t = sv
          , o = [];
        if (!(null == e ? void 0 : e[t(210)]))
            return o;
        try {
            var i, n;
            null === (n = JSON[t(204)](e[t(210)])) || void 0 === n || null === (i = n[t(166)]) || void 0 === i || i[t(165)]((function(e) {
                var i = t;
                2 == +e[i(164)] && o[i(187)]({
                    start: e[i(196)] / 1e3,
                    end: e[i(188)] / 1e3,
                    type: +e[i(164)]
                })
            }
            ))
        } catch (e) {}
        return o[t(160)]((function(e, o) {
            var i = t;
            return e[i(153)] - o[i(153)]
        }
        )),
        o
    }
    !function(e, t) {
        for (var o = sv, i = lv(); ; )
            try {
                if (408489 == parseInt(o(224)) / 1 * (parseInt(o(162)) / 2) + -parseInt(o(155)) / 3 * (-parseInt(o(231)) / 4) + parseInt(o(229)) / 5 * (-parseInt(o(190)) / 6) + -parseInt(o(228)) / 7 * (-parseInt(o(226)) / 8) + -parseInt(o(202)) / 9 * (-parseInt(o(209)) / 10) + -parseInt(o(201)) / 11 * (parseInt(o(193)) / 12) + parseInt(o(179)) / 13 * (parseInt(o(150)) / 14))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }(),
    (ov = tv || (tv = {}))[ov[(iv = sv)(178)] = 2] = iv(178);
    var vv = Iv;
    function fv() {
        var e = ["BM93", "CgfYC2veyxrH", "zgvZAwDUoNbHCMfTDhLWzxm", "z3vPza", "yxr5CgvlzxK", "zxH0CMfqBgf5q29UzMLN", "CMvZrgf0yq", "y3r4", "CgfYC2vdB3n0vgLTzq", "mJy3otKYyxDuC25g", "zhvYyxrPB24", "y29Kzwm", "C3rHCNq", "zgvZAwDUoNjLDhvYBNr5Cgu", "zgvZAwDUoNr5Cgu", "ndCZmdi4oeDpEfPICq", "CgXHEwvYsw5ZDgfUy2vjza", "zgvMAw5PDgLVBKXPC3q", "mtm1CNbxu0DT", "uKvtx1bbuLnf", "CMvXugfYyw1Z", "ugfYC2vszxnWB25Zzq", "C2r0zNjVBq", "DNr5Cgu", "mta5oduYmMzQEfHlza", "zw5K", "C2vUDa", "ntvTs1z6q0W", "mJi4ndaYnNPnu1bgBa", "n2DoBw54ta", "DxjSCW", "C2zS", "mZa2mti5rejHDNrL", "BgfIzwW", "C2v0tgv2zwXnB2rL", "CMv2zxjZzq", "yxbWBhK", "ChjVDg90ExbL", "mtu0zu1XAw9u", "nZeXmZeWz3zPuxnT", "DNr5CgvlzxK", "neTVwLP6tW", "mtG4odiWvuLIy0ry"];
        return (fv = function() {
            return e
        }
        )()
    }
    function Iv(e, t) {
        var o = fv();
        return Iv = function(t, i) {
            var n = o[t -= 265];
            void 0 === Iv.bgjAgQ && (Iv.xnhcbH = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Iv.bgjAgQ = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Iv.xnhcbH(n),
            e[A] = n),
            n
        }
        ,
        Iv(e, t)
    }
    !function(e, t) {
        for (var o = Iv, i = fv(); ; )
            try {
                if (690912 == parseInt(o(289)) / 1 + parseInt(o(306)) / 2 * (parseInt(o(297)) / 3) + parseInt(o(274)) / 4 * (-parseInt(o(292)) / 5) + -parseInt(o(293)) / 6 * (-parseInt(o(294)) / 7) + parseInt(o(280)) / 8 + -parseInt(o(283)) / 9 * (parseInt(o(304)) / 10) + parseInt(o(303)) / 11 * (parseInt(o(307)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var yv = bn(vv(286))
      , Cv = function() {
        var t = vv;
        function o(e) {
            var t = Iv;
            n(this, o),
            a(this, t(272), void 0),
            this[t(272)] = e
        }
        return r(o, [{
            key: t(281),
            get: function() {
                var e, o = t;
                return null === (e = this[o(272)]) || void 0 === e ? void 0 : e[o(281)]
            }
        }, {
            key: t(277),
            value: function() {
                var o, i, n, A, r, a = t;
                Ln[a(277)](Ap[a(284)], this[a(281)]);
                var s, l = performance[a(265)](), g = this[a(272)], c = g[a(271)], u = void 0 === c ? {} : c, E = g[a(285)], d = void 0 === E ? {} : E, B = I(null === (o = u.vl) || void 0 === o ? void 0 : o.vi, 1)[0], h = B.ti, p = B.vh, v = B.vw, f = B.br, y = B.fs, C = +B.td, m = function(e, t, o) {
                    var i, n, A, r, a = sv;
                    if (!(e && (null === (A = e.vl) || void 0 === A || null === (n = A.vi[0].ul) || void 0 === n || null === (i = n.ui) || void 0 === i ? void 0 : i[a(192)]) > 0))
                        return {
                            urls: [],
                            setLevelMode: ra[a(208)]
                        };
                    var s = e[a(170)]
                      , l = I(null === (r = e.vl) || void 0 === r ? void 0 : r.vi, 1)[0]
                      , g = l.fn
                      , c = l[a(197)];
                    if (s === md[a(227)] || s === md[a(175)]) {
                        if (e[a(146)])
                            return {
                                urls: gv(e),
                                setLevelMode: ra[a(208)]
                            };
                        var u = function(e) {
                            var t = sv;
                            return e.vl.vi[0].ul.ui[t(218)]((function(e) {
                                var o, i = t;
                                return e[i(181)] && (null === (o = e[i(184)]) || void 0 === o ? void 0 : o.pt) ? {
                                    url: e[i(181)] + e[i(184)].pt,
                                    vt: e.vt
                                } : {
                                    url: e[i(181)],
                                    vt: e.vt
                                }
                            }
                            ))
                        }(e)
                          , E = !1
                          , d = Ev(e);
                        if (s === md[a(175)]) {
                            var B = e.vl.vi[0].ul[a(157)];
                            B && !(B[a(205)](a(199)) > 0 || B[a(205)](a(222)) > 0) && d && (E = !0,
                            u[a(169)](0, 1, {
                                url: a(177)[a(217)](d, a(180)),
                                vt: u[0].vt
                            }))
                        }
                        return {
                            urls: u,
                            setLevelMode: E ? ra[a(208)] : ra[a(198)]
                        }
                    }
                    if (s === md[a(216)]) {
                        var h, p, v, f, y = (null === (p = l.cl) || void 0 === p || null === (h = p.ci) || void 0 === h ? void 0 : h[a(192)]) || 0, C = l[a(197)] && l.fn && (null === (f = l.ul) || void 0 === f || null === (v = f.ui) || void 0 === v ? void 0 : v[a(192)]) > 0;
                        if (y <= 0 && C)
                            return {
                                urls: cv(l.ul, l[a(171)], g, c, t, o),
                                setLevelMode: ra[a(208)]
                            }
                    }
                    return {
                        urls: [],
                        setLevelMode: ra[a(208)]
                    }
                }(u, d[a(287)], d[a(268)]), Q = m[a(295)], w = m[a(299)], T = dv(u), S = T[a(276)], _ = T[a(288)], D = T[a(305)], P = function(e) {
                    var t, o, i, n = sv, A = null == e || null === (i = e.al) || void 0 === i || null === (o = i.ai) || void 0 === o || null === (t = o[n(223)]((function(e) {
                        return 1 === e.sl
                    }
                    ))) || void 0 === t ? void 0 : t[n(161)];
                    return {
                        atypeKey: A,
                        atype: Rp[A] || n(214)
                    }
                }(u)[a(269)], F = function(e) {
                    var t, o = sv, i = ((null == e || null === (t = e.fl) || void 0 === t ? void 0 : t.fi) || [])[o(223)]((function(e) {
                        return 1 == +e.sl
                    }
                    ));
                    return i ? +i[o(163)] : 0
                }(u), L = function(t) {
                    var o = sv
                      , i = Object[o(151)](Gp)[o(223)]((function(e) {
                        var i;
                        return -1 !== (null === (i = Gp[e]) || void 0 === i ? void 0 : i[o(205)](t))
                    }
                    ));
                    return i || e.VIDEO_CODEC[o(195)]
                }(D), Y = function(t) {
                    var o = sv
                      , i = Object[o(151)](Np)[o(223)]((function(e) {
                        var i;
                        return -1 !== (null === (i = Np[e]) || void 0 === i ? void 0 : i[o(205)](t))
                    }
                    ));
                    return i || e.AUDIO_CODEC[o(195)]
                }(P), R = function(e) {
                    var t, o = sv;
                    if (!e)
                        return {
                            duration: 0,
                            start: 0
                        };
                    var i, n = I(null === (t = e.vl) || void 0 === t ? void 0 : t.vi, 1)[0], A = +e.em, r = +e[o(158)], a = +e[o(207)], s = +(null !== (i = e[o(183)]) && void 0 !== i ? i : 0);
                    return isNaN(A) || 0 !== A || 0 === a ? {
                        duration: 0,
                        start: 0
                    } : r > 0 || 8 == +n.st ? {
                        duration: a,
                        start: s
                    } : {
                        duration: 0,
                        start: 0
                    }
                }(u), b = R[a(275)], k = R[a(277)];
                null !== (s = (r = this[a(272)])[a(270)]) && void 0 !== s || (r[a(270)] = {}),
                this[a(272)][a(270)][a(299)] = w,
                this[a(272)][a(266)] = {
                    drmType: F,
                    codec: S,
                    videoCodec: L,
                    vtype: _,
                    vtypeKey: D,
                    audioCodec: Y,
                    atypeKey: P,
                    preview: b,
                    previewRemainCount: 0,
                    vitem: B,
                    duration: C,
                    title: h,
                    byteRate: f,
                    videoHeight: p,
                    videoWidth: v,
                    fileSize: y,
                    urls: Q,
                    definitionList: hv(0, u),
                    subtitleList: null === (i = u[a(296)]) || void 0 === i ? void 0 : i.fi,
                    watermarkList: B.wl,
                    previewList: B.pl ? null === (n = B.pl[0]) || void 0 === n ? void 0 : n.pd : [],
                    additionalTrackInfo: {
                        subtitleTrack: [],
                        altAudioTrack: uv(u)
                    },
                    supplementaryInfo: {
                        contentInfo: {
                            ad: pv(B.ad),
                            preview: b,
                            previewStartPosition: k
                        }
                    }
                },
                null === (A = this[a(272)][a(266)][a(282)]) || void 0 === A || A[a(300)](),
                this[a(272)][a(273)] = performance[a(265)]() - l,
                Ln[a(290)](Ap[a(284)], this[a(281)])
            }
        }]),
        o
    }();
    _([yv, D(vv(279), Function), D(vv(267), []), D(vv(278), void 0)], Cv[vv(302)], vv(277), null);
    var mv, Qv = (mv = i((function(e, t) {
        return F(this, (function(o) {
            var i = Iv;
            switch (o[i(298)]) {
            case 0:
                return new Cv(e)[i(277)](),
                [4, t()];
            case 1:
                return o[i(291)](),
                [2]
            }
        }
        ))
    }
    )),
    function(e, t) {
        return mv[Iv(301)](this, arguments)
    }
    ), wv = Tv;
    function Tv(e, t) {
        var o = _v();
        return Tv = function(t, i) {
            var n = o[t -= 186];
            void 0 === Tv.NjPhpp && (Tv.DBGalB = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Tv.NjPhpp = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Tv.DBGalB(n),
            e[A] = n),
            n
        }
        ,
        Tv(e, t)
    }
    !function(e, t) {
        for (var o = Tv, i = _v(); ; )
            try {
                if (401387 == -parseInt(o(247)) / 1 * (parseInt(o(228)) / 2) + -parseInt(o(214)) / 3 + -parseInt(o(230)) / 4 + parseInt(o(303)) / 5 + -parseInt(o(292)) / 6 + -parseInt(o(198)) / 7 + parseInt(o(221)) / 8)
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var Sv = bn(wv(188));
    function _v() {
        var e = ["B3n2zxi", "ueXbwvjfqurz", "CgXHDgzVCM0", "yxjYyxLIDwzMzxi", "v0LervzjtKu", "lM0ZDtG", "v2LKzxzPBMu", "AgnFDNvZzxjPza", "zgvZAwDUoNbHCMfTDhLWzxm", "C3rHCNq", "Bg9Nz2vY", "DMLKzw9dB2rLyW", "y2f0y2G", "DMLKzw9dyxbHyMLSAxrPzxm", "y2fJAgvKuMvZDwX0", "ChjLtwLKzgXLD2fYzxm", "yNvZAw5LC3njza", "C3rHy2S", "C2v0vMLKzw9jBMzV", "DhzR", "lcbTC2C9", "CgXHEwvYq29UzMLN", "ANnVBG", "vM9Kr2v0Aw5MB1jLCq", "BwvYz2vuAw1LuMfUz2vZ", "v2LZzvbSyxK", "z2v0Aw5MB0nVBMzPzW", "y29SBgvJDejHC2vszxf1zxn0ugfYyw0", "z2v0q29TBw9Us3y", "BxnN", "DgHLBG", "yxbWvMvY", "z2v0ugXHEwvYsw5MBW", "nteYnJqYou1cEwz4vq", "r0vusu5gt19nsvntsu5hx1bbuKfn", "BgLJzw5ZzvvYBa", "BwvZC2fNzq", "rMfPCLbSyxLxzwjlAxq", "BgfIzwW", "Btn1oa", "ChjLCgfYzvjLCxvLC3rnAwrKBgvxyxjL", "AgnFBwfPBL9SB2DPBG", "CMvXugfYyw1Z", "zg93BMXVywrTB2rL", "CgXHEwvYDMvY", "ywX0qxvKAw9uCMfJAW", "DxjSCW", "C3vWCgXLBwvUDgfYEuLUzM8", "CMvXDwvZDa", "ntKYmZjcvuj6ruW", "uMvXvM9K", "zMXVD2LK", "yMfZzq", "q0Hbq0Hb", "Aw5Zzxj0ywjSzvn0CMvHBxm", "C3bSAxq", "mtq5nZm2ntzLAMvsugm", "ywjVCNrLza", "AM9PBG", "C2r0zNjVBq", "y29Uy2f0", "zw5K", "zNbZ", "mtC0ohPrsgnUsG", "z2v0Aw5MB19JywXSyMfJA18", "mtG2mdm2mgHWz0zIAW", "y29UDgvUDeLUzM8", "B25nAwrKBgv3yxjLrxHLy3v0zvn1y2nLC3m", "y2vYDgLMAwnHDgvvCMW", "DMfSAwrHDgvszxfqyxjHBxm", "ywjVCNq", "D21Zigv4zwmGC3vJyW", "z2v0uMvXugfYyw1Z", "y3jLyxrLqMfZzunVBNrLEhq", "CwLTzwLrmZy", "y29UzMLN", "C2vUDa", "zgvZDhjVEq", "DNr5CgvlzxK", "zNaYCa", "CgfYC2vfEhrLCM5HBfzPzgvVsw5MBW", "C2vUzfjLCxvLC3rnAwrKBgvxyxjL", "mZeXq2DcuNHV", "A2v5Awq6lY8", "Dw5KzwzPBMvK", "rKfjuL9qtefz", "z3vPza", "yM9KEq", "C2fMyxjP", "BxvSDgLKCM0", "q2HPBMfeuK0Y", "C2vX", "zhjTvhLWzq", "CMvZB2X2zq", "C2v0tgv2zwXnB2rL", "CgfYC2veyxrH", "zM9YBwf0t3v0Chv0rgf0yq", "lMfKlG", "ChjLCgfYzq", "Aw5ZDgfUy2vjza", "C2XPy2u", "zgvZAwDUoNjLDhvYBNr5Cgu", "ChjLCgfYzuLUC2vYDgfIBgvtDhjLyw1Z", "AgfYBw9UEvr4vMLKzw8", "A2v5CW", "ChjLCgfYzvaYuenVBMzPzW", "CMvZCg9UC2vuExbL", "CwLTzwLimZG", "DxjS", "zMLUza", "B25nAwrKBgv3yxjLrxHLy3v0Aw9UrMfPBa", "Bg5R", "yxnZAwDU", "ChjLCgfYzurstunVBMzPzW", "Cg9ZDe1PzgrSzxDHCMvZ", "zxjYlcbJB2rLpq", "CMvXDwvZDe1Vzgu", "CgfYC2vszxnWB25Zzu1PzgrSzvDHCMu", "zgvZAwDUoNr5Cgu", "ugXHEvjLywr5sgfYzhDHCMu", "y29Kzwm", "zM10", "yNjVD3nLCG", "ywrKAxrPB25HBfrYywnRsw5MBW", "sLnptLa", "r0vusu5gt19jtK5fuG", "sefsra", "mtu3ntm3mLLcrKHvtW", "weHs", "y2TJ", "CgXHEwvYsw5ZDgfUy2vjza", "lcbZDgfJAZ0", "y2HLy2TszxnWB25Zzu1PzgrSzvDHCMu", "CMvZrgf0yq", "zxH0CMfqBgf5q29UzMLN", "BgvUz3rO", "DMLK", "Bg9N", "mtqWnJe4nvHwzgTHwq", "z2v0Aw5MBYbLCNi", "y29Kzq", "BwfW", "y2vYDgLMAwnHDgu", "yMfZzty0vg9vAw50oefYCMf5", "DML0zw0", "ChjVDg90ExbL", "CgfYC2vwAwrLB0LUzM8", "zxjYB3i"];
        return (_v = function() {
            return e
        }
        )()
    }
    var Dv = function() {
        var t = wv;
        function o(e, t) {
            var i = Tv;
            n(this, o),
            a(this, i(222), !1),
            a(this, i(256), 0),
            a(this, i(327), {}),
            a(this, i(323), void 0),
            a(this, i(186), void 0),
            a(this, i(193), void 0),
            this[i(193)] = (null == t ? void 0 : t[i(193)]) || function() {
                return ""
            }
            ,
            this[i(186)] = e,
            this[i(323)] = new ia(e[i(264)],i(215))
        }
        return r(o, [{
            key: t(240),
            get: function() {
                var e = t;
                return u({}, Tp, this[e(186)][e(191)])
            }
        }, {
            key: t(295),
            get: function() {
                var e, o = t;
                return null === (e = this[o(186)]) || void 0 === e ? void 0 : e[o(264)]
            }
        }, {
            key: t(237),
            value: function(e, o) {
                var i = t
                  , n = this
                  , A = this[i(263)](e, o);
                return ip([this[i(240)][i(205)] || wp])(A)[i(195)]((function() {
                    return n[i(232)](A, !0)
                }
                ))[i(325)]((function(e) {
                    return n[i(275)](A, e)
                }
                ))
            }
        }, {
            key: t(331),
            value: function(e, t, o) {
                var n = this;
                return i((function() {
                    return F(this, (function(i) {
                        var A = Tv;
                        return t ? n[A(245)](e, t, o) : n[A(327)][e] = void 0,
                        [2]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(245),
            value: function(e, t, o) {
                var n = this;
                return i((function() {
                    var i, A, r, a, s, l;
                    return F(this, (function(g) {
                        var c = Tv;
                        return o ? (n[c(256)] += 1,
                        o[c(256)] = n[c(256)],
                        i = o) : i = n[c(263)](e),
                        i[c(298)] = t,
                        A = n[c(240)][c(246)] || Hp,
                        r = n[c(240)][c(297)] || nv,
                        a = n[c(240)][c(282)] || Qv,
                        s = n[c(240)][c(328)] || [],
                        l = n[c(240)][c(279)] || [],
                        n[c(327)][e] = ip(C(s)[c(225)]([A, r, a], C(l)))(i)[c(195)]((function() {
                            return n[c(232)](i)
                        }
                        ))[c(325)]((function(e) {
                            return n[c(275)](i, e)
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(311),
            value: function(e, t, o) {
                return i((function() {
                    return F(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(213),
            value: function(t, o, n) {
                var A = this;
                return i((function() {
                    var i, r, a, s, l, g, c, u, E, d;
                    return F(this, (function(B) {
                        var h = Tv;
                        switch (B[h(203)]) {
                        case 0:
                            return i = t,
                            A[h(222)] = !1,
                            A[h(327)][i] ? [4, A[h(327)][i]] : [3, 2];
                        case 1:
                            return r = B[h(241)](),
                            A[h(327)][i] = void 0,
                            [2, Promise[h(258)](r)];
                        case 2:
                            return a = A[h(263)](i, o),
                            (s = A[h(234)](a[h(207)])) ? (a[h(312)] = {
                                code: e.ErrorCode[h(290)],
                                message: ns(xa[h(332)][h(199)], s)
                            },
                            [2, Promise[h(258)](A[h(261)](a))]) : (l = A[h(240)][h(205)] || wp,
                            g = A[h(240)][h(246)] || Hp,
                            c = A[h(240)][h(297)] || nv,
                            u = A[h(240)][h(282)] || Qv,
                            E = A[h(240)][h(328)] || [],
                            d = A[h(240)][h(279)] || [],
                            [2, ip((null == n ? void 0 : n[h(300)]) ? n : C(E)[h(225)]([l, g, c, u], C(d)))(a)[h(195)]((function() {
                                return A[h(232)](a)
                            }
                            ))[h(325)]((function(e) {
                                return A[h(275)](a, e)
                            }
                            ))])
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(235),
            value: function() {
                this[t(222)] = !0
            }
        }, {
            key: t(242),
            value: function() {
                var e = t;
                this[e(235)](),
                this[e(327)] = null,
                this[e(193)] = null
            }
        }, {
            key: t(234),
            value: function(e) {
                var o = t;
                return [o(301), o(315), o(224), o(216), o(251)][o(274)]((function(t) {
                    return !e[t]
                }
                ))
            }
        }, {
            key: t(263),
            value: function(e, o, i) {
                var n = t;
                this[n(222)] = !1,
                this[n(256)] += 1;
                var A = this[n(238)](i);
                return Object[n(277)](A[n(207)], o, {
                    vid: e
                }),
                A
            }
        }, {
            key: t(232),
            value: function(e, t) {
                var o = this;
                return i((function() {
                    var i;
                    return F(this, (function(n) {
                        var A = Tv;
                        return o[A(222)] || o[A(256)] !== e[A(256)] ? (o[A(327)] && (o[A(327)][e[A(301)]] = void 0),
                        [2, new Promise((function() {}
                        ))]) : (e[A(260)],
                        e[A(298)],
                        e[A(207)],
                        i = Ag(e, [A(260), A(298), A(207)]),
                        o[A(323)][A(302)](A(236), i),
                        t ? [2, e] : [2, o[A(261)](e)])
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(275),
            value: function(e, t) {
                var o = this;
                return i((function() {
                    return F(this, (function(i) {
                        var n = Tv;
                        return o[n(222)] || o[n(256)] !== e[n(256)] ? (o[n(327)] && (o[n(327)][e[n(301)]] = void 0),
                        [2, new Promise((function() {}
                        ))]) : (e[n(312)] = zp(t),
                        o[n(323)][n(312)](n(280)[n(225)](e[n(312)][n(305)], n(333))[n(225)](e[n(312)][n(201)], n(296))[n(225)](e[n(312)][n(330)])),
                        [2, o[n(261)](e)])
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(192),
            value: function() {
                var e = t;
                return E(u({}, {
                    charge: 0,
                    otype: "json",
                    defnpayver: 0,
                    spau: 1,
                    spaudio: 1,
                    spwm: 1,
                    sphls: 1,
                    host: location.host,
                    refer: Yd(),
                    ehost: bd(),
                    sphttps: Gd(),
                    encryptVer: "",
                    cKey: "",
                    clip: 4,
                    guid: "",
                    flowid: "",
                    platform: "",
                    sdtfrom: "",
                    appVer: "1.0.0.0",
                    unid: "",
                    auth_from: "",
                    auth_ext: "",
                    vid: "",
                    defn: "",
                    fhdswitch: 0,
                    dtype: md.HLS,
                    spsrt: 2,
                    tm: "",
                    lang_code: 0,
                    logintoken: ""
                }), {
                    appVer: this[e(193)](Nc[e(196)]),
                    platform: this[e(193)](Nc[e(315)]),
                    sdtfrom: this[e(193)](Nc[e(224)]),
                    flowid: this[e(193)](Nc[e(216)]),
                    guid: this[e(193)](Nc[e(251)]),
                    qimei: this[e(193)](Nc[e(239)]) || ""
                })
            }
        }, {
            key: t(238),
            value: function(e) {
                var o, i = t, n = this[i(240)][i(281)], A = void 0 === n ? Up[i(289)] : n, r = (a(o = {}, Up[i(289)], new sp(i(229))),
                a(o, Up[i(293)], new Jp),
                o)[A];
                return {
                    businessData: {
                        h38: this[i(193)](Nc[i(272)]),
                        q36: this[i(193)](Nc[i(239)])
                    },
                    startTime: +new Date,
                    endTime: 0,
                    alreadyRetryCount: 0,
                    config: this[i(240)],
                    reqParams: this[i(192)](),
                    reqPath: void 0,
                    resData: void 0,
                    requestor: r,
                    parseData: void 0,
                    error: void 0,
                    throw: function(e, t) {
                        var o = i
                          , n = new Error(o(304));
                        throw n[o(305)] = e,
                        n[o(201)] = t,
                        n
                    },
                    extraPlayConfig: {
                        setLevelMode: ra[i(291)]
                    },
                    seq: this[i(256)],
                    urlConfig: void 0,
                    logger: this[i(323)],
                    playerInstanceId: this[i(186)][i(264)],
                    hasSrvData: e
                }
            }
        }, {
            key: t(261),
            value: function(e) {
                var o = t
                  , i = e[o(207)]
                  , n = e[o(298)]
                  , A = e[o(260)]
                  , r = u({}, e)
                  , a = void 0
                  , s = function(e, t) {
                    var o, i, n = sv, A = (e || {})[n(170)], r = null == e || null === (i = e.fl) || void 0 === i || null === (o = i.fi) || void 0 === o ? void 0 : o[n(223)]((function(e) {
                        return 1 === e.sl
                    }
                    )), a = t || {};
                    return Av({
                        codec: a[n(147)],
                        audioCodec: a[n(174)],
                        dltype: A,
                        drm: null == r ? void 0 : r[n(163)]
                    })
                }(n, A);
                if (n && A) {
                    var l, g, c, d, B, h, p, v, f, y = A[o(285)], C = A[o(324)], m = A[o(243)], Q = A[o(257)], w = Y(null == A ? void 0 : A[o(211)][o(306)]((function(e) {
                        return e[o(273)]
                    }
                    ))), T = w[0], S = w[o(265)](1), _ = I((null == A || null === (g = A[o(309)]) || void 0 === g || null === (l = g[o(294)]) || void 0 === l ? void 0 : l[o(220)]("|")) || [], 2), D = _[0], P = _[1], F = Ev(n), L = dv(n), R = L[o(227)], b = L[o(286)], k = n[o(208)] || 0;
                    a = {
                        url: T,
                        backupUrls: S,
                        m3u8: null == A ? void 0 : A[o(211)][o(204)],
                        p2pConfig: F ? this[o(270)]({
                            keyId: F,
                            useP2P: 2 === n[o(244)],
                            flowId: i[o(216)],
                            downloadMode: k,
                            encoding: m,
                            vid: i[o(301)],
                            format: b
                        }) : void 0,
                        drmConfig: D ? this[o(278)]({
                            drmType: Q,
                            licenseUrl: D,
                            certificateUrl: P,
                            vid: null == A || null === (c = A[o(309)]) || void 0 === c ? void 0 : c[o(301)]
                        }, i) : void 0,
                        chachaParam: Q === Rc[o(218)] ? {
                            linkvid: null == A || null === (d = A[o(309)]) || void 0 === d ? void 0 : d[o(276)],
                            base: null == A || null === (B = A[o(309)]) || void 0 === B ? void 0 : B[o(217)],
                            appVer: i[o(196)],
                            tm: null == n ? void 0 : n.tm,
                            platform: i[o(315)]
                        } : null,
                        drmType: Q,
                        kernelName: s,
                        audioTrack: Bv(null === (h = A[o(288)]) || void 0 === h ? void 0 : h[o(210)]),
                        vcodec: y,
                        videoFrameRate: R,
                        videoCodec: C,
                        setLevelMode: null === (p = r[o(299)]) || void 0 === p ? void 0 : p[o(259)],
                        expireTimeStamp: +new Date + 72e5
                    },
                    is[o(287)][o(253)] && (a[o(219)] = this[o(267)](F, null === (f = A[o(212)]) || void 0 === f || null === (v = f[o(231)]) || void 0 === v ? void 0 : v.ad))
                }
                return E(u({}, r), {
                    kernelName: s,
                    urlConfig: a
                })
            }
        }, {
            key: t(267),
            value: function(e, o) {
                var i = t
                  , n = os[i(189)](null != o ? o : [])
                  , A = 0;
                return n[i(306)]((function(t, o) {
                    var n = i
                      , r = t[n(322)]
                      , a = t[n(226)]
                      , s = {
                        startTime: r - A,
                        endTime: a - A,
                        url: n(248)[n(225)](e, n(262))[n(225)](o, n(318))
                    };
                    return A += a - r,
                    s
                }
                ))
            }
        }, {
            key: t(278),
            value: function(e, o) {
                var i, n = t, A = e[n(257)], r = e[n(200)], s = e[n(233)], l = e[n(301)], g = this[n(193)], c = (a(i = {}, Rc[n(250)], WA[n(202)]),
                a(i, Rc[n(317)], WA[n(319)]),
                a(i, Rc[n(314)], WA[n(284)]),
                a(i, Rc[n(255)], is[n(287)][n(268)] ? WA[n(190)] : void 0),
                i), E = {
                    enableChromeM113Workaround: !0,
                    licenseUrl: r,
                    certificate: {},
                    keySystem: c[A],
                    licenseRequestSetup: function(e) {
                        var t = n;
                        if (A === Rc[t(255)] ? e[t(271)] = t(316) : e[t(271)] = t(187),
                        A === Rc[t(250)]) {
                            var o = {
                                guid: g(Nc[t(251)]),
                                fmt: g(Nc[t(286)]),
                                vid: l
                            }
                              , i = Object[t(269)](o)[t(306)]((function(e) {
                                var i = t;
                                return ""[i(225)](e, "=")[i(225)](o[e])
                            }
                            ))[t(223)]("&");
                            return e[t(252)] = ""[t(225)](e[t(252)], "&")[t(225)](i),
                            e
                        }
                        return e
                    },
                    licenseResponseSetup: function(e) {
                        var t = n;
                        if (A === Rc[t(255)])
                            return e;
                        var o = e[t(305)]
                          , i = e[t(294)]
                          , r = e[t(194)];
                        if (0 === o)
                            return es[t(308)](i);
                        throw {
                            code: o,
                            message: r
                        }
                    }
                };
                return A === Rc[n(250)] ? E[n(307)] = a({}, c[A], s) : A === Rc[n(255)] && o[n(254)] === Id[n(255)] && (E[n(326)] = u({}, or)),
                E
            }
        }, {
            key: t(270),
            value: function(e) {
                return u({
                    playerInfo: this[t(197)]()
                }, e)
            }
        }, {
            key: t(197),
            value: function() {
                var e = t
                  , o = this[e(193)]
                  , i = {
                    platform: o(Nc[e(315)]) || "",
                    osVer: o(Nc[e(313)]) || "",
                    broVer: o(Nc.ua) || "",
                    playerVer: o(Nc[e(209)]) || "",
                    guid: o(Nc[e(251)]) || "",
                    sceneID: o(e(329)) || "",
                    qq: "",
                    wx: "",
                    vip: !1
                }
                  , n = o(Nc[e(206)]);
                return "qq" === n ? i.qq = o(Nc[e(320)]) : "wx" === n && (i.wx = o(Nc[e(320)])),
                i
            }
        }]),
        o
    }();
    function Pv() {
        var e = ["nJiXExDYq3PM", "ntyXodb5vxvSseq", "mtG3mteYmvLOExHZsq", "mty5mJeWmMX0qxLRCq", "ndy1mZeXn25yt2PvsG", "mJa2otm4nMPIA1bTAG", "mtb3tfn4DgW", "mJjNz1fhDfe", "nJaZnZaZmgz0rLDwEq", "mtm1otG0svDevKTt", "ofLTC09kzW"];
        return (Pv = function() {
            return e
        }
        )()
    }
    function Fv(e, t) {
        var o = Pv();
        return Fv = function(t, i) {
            var n = o[t -= 229];
            void 0 === Fv.vGrJkJ && (Fv.IscvCH = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            Fv.vGrJkJ = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = Fv.IscvCH(n),
            e[A] = n),
            n
        }
        ,
        Fv(e, t)
    }
    _([Sv, D(wv(283), Function), D(wv(321), [Object, typeof ReqParams === wv(249) ? Object : ReqParams]), D(wv(266), typeof Promise === wv(249) ? Object : Promise)], Dv[wv(310)], wv(237), null),
    _([Sv, D(wv(283), Function), D(wv(321), [Object, typeof ReqParams === wv(249) ? Object : ReqParams, Array]), D(wv(266), Promise)], Dv[wv(310)], wv(213), null),
    _([Sv, D(wv(283), Function), D(wv(321), [typeof MiddleWareCtx === wv(249) ? Object : MiddleWareCtx, Boolean]), D(wv(266), Promise)], Dv[wv(310)], wv(232), null),
    _([Sv, D(wv(283), Function), D(wv(321), [Boolean]), D(wv(266), typeof MiddleWareCtx === wv(249) ? Object : MiddleWareCtx)], Dv[wv(310)], wv(238), null),
    _([Sv, D(wv(283), Function), D(wv(321), [typeof MiddleWareCtx === wv(249) ? Object : MiddleWareCtx]), D(wv(266), typeof ReqInfoOutputData === wv(249) ? Object : ReqInfoOutputData)], Dv[wv(310)], wv(261), null),
    function(e, t) {
        for (var o = Fv, i = Pv(); ; )
            try {
                if (709462 == parseInt(o(230)) / 1 * (-parseInt(o(235)) / 2) + -parseInt(o(236)) / 3 * (parseInt(o(233)) / 4) + parseInt(o(231)) / 5 + -parseInt(o(237)) / 6 + parseInt(o(238)) / 7 + parseInt(o(232)) / 8 * (parseInt(o(234)) / 9) + -parseInt(o(229)) / 10 * (parseInt(o(239)) / 11))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var Lv, Yv = ["https://infozb6.video.qq.com/cgi-bin/getliveinfo?", "https://bkinfozb6.video.qq.com/cgi-bin/getliveinfo?"];
    !function(e) {
        e.playtime = "live-getinfo:playtime",
        e.livesid = "live-getinfo:livesid",
        e.isuserpay = "live-getinfo:isuserpay",
        e.cpay = "live-getinfo:cpay",
        e.pay_type = "live-getinfo:pay_type",
        e.restpreviewcnt = "live-getinfo:resetpreviewcnt"
    }(Lv || (Lv = {}));
    var Rv = ["flowid", "guid"]
      , bv = {
        1: "Basic",
        2: "Efficient",
        4: "SDR",
        22: "DolbyVisionTs",
        23: "DolbyVisionFmp4"
    }
      , kv = {
        retryCount: 3,
        test: 0,
        timeout: 6e3,
        enableTxEnc: !1
    };
    function Gv() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = ns(xa.h5player.ERROR_GETINFO_CODE)
          , o = e.retcode
          , i = e.errmsg
          , n = void 0 === i ? t : i;
        switch (+o) {
        case 5:
        case 16:
        case 18:
        case 51:
        case 52:
        case 67:
        case 97:
        default:
            return {
                name: "setErrorView",
                params: {
                    msg: n
                }
            };
        case 7:
            return {
                name: "setErrorView",
                params: {
                    msg: n,
                    hideRefresh: !0,
                    hideCode: !0
                }
            };
        case 8:
            return {
                name: "setErrorView",
                params: {
                    msg: n,
                    hideRefresh: !0,
                    hideCode: !0,
                    isOver: !0
                }
            };
        case 46:
            return {
                name: "showPayTips",
                params: {
                    msg: n
                }
            };
        case 25:
        case 30:
        case 45:
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.errmsg || ns(xa.h5player.ERROR_GETINFO_CODE);
                return 1 === e.iretdetailcode ? {
                    name: "execVIPRight",
                    params: {
                        msg: t,
                        type: "backplay",
                        refer: 113
                    }
                } : {
                    name: "showPayTips",
                    params: {
                        msg: t,
                        cmd: 3
                    }
                }
            }(e)
        }
    }
    function Nv(e, t) {
        if (!t)
            return [];
        var o = t.urls;
        return (void 0 === o ? [] : o).map((function(e) {
            return {
                url: e
            }
        }
        ))
    }
    function Mv(e, t) {
        return t ? t.map((function(t) {
            var o, i, n, A, r;
            return i = (o = {
                id: t.sid,
                name: t.defn,
                cname: "".concat(t.defn_name, " ").concat(t.defn_rate),
                framerate: t.fps,
                sname: t.defn_name,
                resolution: t.defn_rate,
                sl: t.defn === e ? 1 : 0,
                lmt: xv[t.lmt || 0],
                allowSwitch: !0,
                restrictionType: qd.none,
                previewDurationS: -1
            }).lmt,
            n = o.name,
            r = void 0 === (A = o.framerate) ? 25 : A,
            E(u({}, o), {
                tvkDefinitionBrandName: qB[n],
                tvkColorBrandName: void 0,
                tvkDefinitionBrandDescriptor: WB[n],
                tvkDefinitionKind: n,
                tvkFramerate: r,
                tvkPaywallLevel: i
            })
        }
        )).reverse() : []
    }
    function Uv(e) {
        return {
            wi: e ? [e] : []
        }
    }
    function Ov(t) {
        var o, i = Sa.H264, n = e.VIDEO_CODEC.H264, A = null == t || null === (o = t.codec_param) || void 0 === o ? void 0 : o.vcode;
        return 2 === A && (i = Sa.H265,
        n = e.VIDEO_CODEC.H265),
        {
            vtype: bv[A] || "unknown",
            vtypeKey: A,
            codec: i,
            videoCodec: n
        }
    }
    var Kv, xv = {
        0: 0,
        1: xd.vip,
        2: xd.svip
    }, Vv = (Kv = i((function(t, o) {
        var i, n, A, r, a;
        return F(this, (function(s) {
            switch (s.label) {
            case 0:
                return i = t.resData,
                n = i.retcode,
                A = i.errmsg,
                r = void 0 === A ? ns(xa.h5player.ERROR_GETINFO_CODE) : A,
                void 0 === n ? (t.throw(e.ErrorCode.GETINFO_PARSE, ns(xa.h5player.ERROR_GETINFO_PARSE), Gv(t.resData)),
                [2]) : 0 !== n ? (a = "".concat(e.ErrorCode.GETINFO_LIVE_SERVER_CODE_PREFIX).concat("000".concat(n).slice(-3)),
                t.throw(a, r, Gv(t.resData)),
                [2]) : [4, o()];
            case 1:
                return s.sent(),
                [2]
            }
        }
        ))
    }
    )),
    function(e, t) {
        return Kv.apply(this, arguments)
    }
    ), Hv = function() {
        var t = i((function(t, o) {
            var i, n, A, r, a, s, l, g, c, u, E, d, B, h, p, v, f, I;
            return F(this, (function(y) {
                switch (y.label) {
                case 0:
                    return A = t.resData,
                    a = (r = void 0 === A ? {} : A).suggest_defn,
                    s = r.format_list,
                    l = r.play_list,
                    g = r.preview_info,
                    c = r.brandlogo,
                    (u = null == l ? void 0 : l.find((function(e) {
                        return e.defn === a
                    }
                    ))) ? (r.playback && (r.playback.svrtick = r.svrtick),
                    E = Ov(u),
                    d = E.codec,
                    B = E.vtype,
                    h = E.vtypeKey,
                    p = E.videoCodec,
                    v = (null === (i = u.crypt_param) || void 0 === i ? void 0 : i.drmtype) || 0,
                    I = {
                        protectionWatermark: 1 === (null === (n = r.float_mark) || void 0 === n ? void 0 : n.fwflag) ? r.float_mark.uin : "",
                        preview: +(null !== (f = null == g ? void 0 : g.playtime) && void 0 !== f ? f : 0)
                    },
                    t.parseData = {
                        drmType: v,
                        videoCodec: p,
                        codec: d,
                        vtype: B,
                        vtypeKey: h,
                        vitem: u,
                        preview: g ? +g.playtime : 0,
                        previewRemainCount: g ? +g.restpreviewcnt : 0,
                        urls: Nv(0, u),
                        definitionList: Mv(a, s),
                        watermarkList: Uv(c),
                        supplementaryInfo: {
                            contentInfo: I,
                            previewList: [],
                            watermarkList: [],
                            posterList: []
                        }
                    },
                    [4, o()]) : (t.throw(e.ErrorCode.GETINFO_PARSE, ns(xa.h5player.ERROR_GETINFO_PARSE)),
                    [2]);
                case 1:
                    return y.sent(),
                    [2]
                }
            }
            ))
        }
        ));
        return function(e, o) {
            return t.apply(this, arguments)
        }
    }();
    function jv(e, t) {
        var o = e.roomid
          , i = e.chid
          , n = e.cnlid
          , A = Xh({
            platform: e.platform,
            ckeyid: o ? i : n,
            sdtfrom: e.sdtfrom,
            svrtick: null == t ? void 0 : t.svrtick
        })
          , r = A.tm
          , a = A.cKey
          , s = A.encryptVer;
        return e.tm = r,
        e.ckey = a,
        e.encrypt_ver = s,
        e
    }
    function qv(e, t) {
        return Wv.apply(this, arguments)
    }
    function Wv() {
        return (Wv = i((function(e, t) {
            var o;
            return F(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, hp(e.livedrm, "", t.config.enableTxEnc)];
                case 1:
                    return o = i.sent(),
                    e.livedrm = o,
                    e.playbackdrm = o,
                    [2]
                }
            }
            ))
        }
        ))).apply(this, arguments)
    }
    var Jv, zv = function() {
        var e = i((function(e, t) {
            var o, i;
            return F(this, (function(n) {
                switch (n.label) {
                case 0:
                    return o = e.reqParams,
                    jv(i = void 0 === o ? {} : o, e.resData),
                    [4, qv(i, e)];
                case 1:
                    return n.sent(),
                    e.logger.log("send param", e.reqParams),
                    [4, t()];
                case 2:
                    return n.sent(),
                    [2]
                }
            }
            ))
        }
        ));
        return function(t, o) {
            return e.apply(this, arguments)
        }
    }(), Xv = function() {
        var t = i((function(t, o) {
            var i, n, A, r, a, s, l, g, c, u, E;
            return F(this, (function(d) {
                switch (d.label) {
                case 0:
                    t.logger.log("send start"),
                    i = t.requestor,
                    n = t.reqParams,
                    A = void 0 === n ? {} : n,
                    r = t.config,
                    a = r.retryCount,
                    s = r.timeout,
                    l = void 0 === s ? kv.timeout : s,
                    g = null,
                    c = 0,
                    d.label = 1;
                case 1:
                    if (!(c < a + 1))
                        return [3, 7];
                    t.logger.log("retry... count is: ", c),
                    d.label = 2;
                case 2:
                    return d.trys.push([2, 4, , 5]),
                    g = null,
                    t.reqPath = function(e, t) {
                        var o = e.test
                          , i = e.path;
                        return o ? "https://test.zb.video.qq.com/cgi-bin/getliveinfo?" : i || Yv[t % Yv.length]
                    }(r, c),
                    [4, i.start(t.reqPath, A, l)];
                case 3:
                    return u = d.sent(),
                    t.resData = u.data,
                    [3, 5];
                case 4:
                    return E = d.sent(),
                    t.resData = void 0,
                    t.logger.log("the ".concat(c, " retry err:"), E),
                    "xhrTimeoutError" === (null == E ? void 0 : E.error) && (g = {
                        code: e.ErrorCode.GETINFO_TIMEOUT,
                        message: ns(xa.h5player.ERROR_GETINFO_TIMEOUT)
                    }),
                    [3, 5];
                case 5:
                    if (t.endTime = +new Date,
                    t.alreadyRetryCount = c,
                    t.resData) {
                        if (32 !== t.resData.retcode)
                            return [3, 7];
                        jv(A, t.resData)
                    }
                    d.label = 6;
                case 6:
                    return c++,
                    [3, 1];
                case 7:
                    return t.endTime = +new Date,
                    t.resData ? (t.logger.cache("send over", t.resData),
                    [4, o()]) : (t.throw((null == g ? void 0 : g.code) || e.ErrorCode.GETINFO_NET, (null == g ? void 0 : g.message) || ns(xa.h5player.ERROR_GETINFO_NET)),
                    [2]);
                case 8:
                    return d.sent(),
                    [2]
                }
            }
            ))
        }
        ));
        return function(e, o) {
            return t.apply(this, arguments)
        }
    }(), Zv = function() {
        function t(e, o) {
            n(this, t),
            a(this, "aborted", !1),
            a(this, "seq", 0),
            a(this, "middlewares", void 0),
            a(this, "config", void 0),
            a(this, "logger", void 0),
            a(this, "getCommonKv", void 0),
            this.getCommonKv = (null == o ? void 0 : o.getCommonKv) || function() {
                return ""
            }
            ,
            this.config = u({}, kv, e.getinfoLiveConfig || {}),
            this.logger = new ia(e.instanceId,"UnifiedLiveGetInfo")
        }
        return r(t, [{
            key: "request",
            value: function(t, o) {
                var i = this
                  , n = u({}, this.collectBaseRequestParam(), o)
                  , A = this.handlerIds(t, n);
                n = u({}, n, A),
                this.aborted = !1,
                this.seq += 1;
                var r = {
                    startTime: +new Date,
                    endTime: 0,
                    alreadyRetryCount: 0,
                    config: this.config,
                    reqParams: n,
                    reqPath: void 0,
                    resData: void 0,
                    requestor: new Jp,
                    parseData: void 0,
                    error: void 0,
                    throw: function(e, t, o) {
                        var i = new Error("getinfo err");
                        throw i.code = e,
                        i.message = t,
                        i.data = o,
                        i
                    },
                    seq: this.seq,
                    urlConfig: void 0,
                    logger: this.logger
                }
                  , a = Rv.find((function(e) {
                    return !n[e]
                }
                ));
                if (a)
                    return r.error = {
                        code: e.ErrorCode.GETINFO_INNER,
                        message: ns(xa.tvk.GETINFO_MISSING_PARAM, a)
                    },
                    Promise.resolve(this.formatOutputData(r));
                var s = this.config.prepareRequestMiddleWare || zv
                  , l = this.config.sendRequestMiddleWare || Xv
                  , g = this.config.checkResponseMiddleWare || Vv
                  , c = this.config.parseResponseMiddleWare || Hv;
                this.middlewares = [s, l, g, c];
                var E = ip(this.middlewares)
                  , d = new Promise((function() {}
                ));
                return E(r).then((function() {
                    if (i.aborted || i.seq !== r.seq)
                        return d;
                    r.parseData,
                    r.resData,
                    r.reqParams;
                    var e = Ag(r, ["parseData", "resData", "reqParams"]);
                    return i.logger.log("wms exec succ", e),
                    i.formatOutputData(r)
                }
                )).catch((function(e) {
                    return i.aborted || i.seq !== r.seq ? d : (r.error = zp(e),
                    i.logger.error("err, code=".concat(r.error.code, ", msg=").concat(r.error.message, ", stack=").concat(r.error.stack)),
                    i.formatOutputData(r))
                }
                ))
            }
        }, {
            key: "abort",
            value: function() {
                this.aborted = !0
            }
        }, {
            key: "destroy",
            value: function() {
                this.abort(),
                this.middlewares = null,
                this.getCommonKv = null
            }
        }, {
            key: "formatOutputData",
            value: function(t) {
                var o, i = t.resData, n = t.parseData, A = u({}, t);
                if (["requestor", "player", "throw"].forEach((function(e) {
                    delete A[e]
                }
                )),
                !i || !n)
                    return u({}, A);
                var r = n.vitem
                  , a = n.urls
                  , s = n.codec
                  , l = n.videoCodec
                  , g = n.vtypeKey
                  , c = n.drmType
                  , d = r.crypt_param
                  , B = function(t) {
                    var o, i, n = md.HLS, A = null == t || null === (o = t.crypt_param) || void 0 === o ? void 0 : o.drmtype;
                    return (null == t || null === (i = t.codec_param) || void 0 === i ? void 0 : i.stream) === HB.FLV ? e.KERNEL_NAME.FLV_JS : Av({
                        codec: Ov(t).videoCodec,
                        dltype: n,
                        drm: A
                    })
                }(r)
                  , h = Y(a.map((function(e) {
                    return e.url
                }
                )))
                  , p = h[0]
                  , v = h.slice(1)
                  , f = I((null == d || null === (o = d.drmckc) || void 0 === o ? void 0 : o.split("|")) || [], 2)
                  , y = f[0]
                  , C = f[1]
                  , m = {
                    url: p,
                    backupUrls: v,
                    headers: null == i ? void 0 : i.trans_headers,
                    drmConfig: Xp({
                        drmType: c,
                        licenseUrl: y,
                        certificateUrl: C
                    }, this.getCommonKv.bind(this)),
                    chachaParam: c === Rc.CHACHA ? {
                        cnlid: null == i ? void 0 : i.chid,
                        baseKey: d.deckey,
                        randoms: d.randoms
                    } : null,
                    p2pConfig: Zp({
                        keyId: r.sid,
                        useP2P: !!r.usep2p,
                        downloadMode: 0,
                        encoding: g
                    }, c, this.getCommonKv.bind(this)),
                    drmType: c,
                    vcodec: s,
                    videoCodec: l
                };
                return E(u({}, A), {
                    kernelName: B,
                    urlConfig: m
                })
            }
        }, {
            key: "handlerIds",
            value: function(e, t) {
                var o, i = t.roomid, n = t.livepid, A = void 0 === n ? "" : n, r = t.anchorid;
                return i ? (o = {
                    pid: A,
                    chid: e,
                    roomid: i,
                    anchorid: void 0 === r ? "" : r
                },
                delete t.cnlid) : o = {
                    pid: A,
                    cnlid: e
                },
                delete t.livepid,
                o
            }
        }, {
            key: "collectBaseRequestParam",
            value: function() {
                var e;
                return E(u({}, function() {
                    var e = VA();
                    return {
                        defnswitch: 0,
                        flowid: "",
                        cmd: 2,
                        roomid: "",
                        anchorid: 0,
                        pid: "",
                        chid: "",
                        defn: "auto",
                        ufps: "auto",
                        playbacktime: 0,
                        ckey: "",
                        appver: "1.0.0.0",
                        encrypt_ver: "",
                        uin: "",
                        country_code: 0,
                        lang_code: 0,
                        guid: "",
                        appid: 0,
                        platform: "",
                        playbackdrm: 0,
                        format_support: fr() && !e.mobile ? HB.FLV | HB.HLS : HB.HLS,
                        caplv: 0,
                        hevclv: 0,
                        net_type: 0,
                        bandwidth: 0,
                        sphttps: Gd(),
                        unicomtype: 0,
                        unicom: "",
                        telcom: "",
                        cmcc: "",
                        toushe: 0,
                        from_platform: 0,
                        tm: "",
                        scene: "",
                        spaudio: 0,
                        spvideo: 0,
                        atmos: 0,
                        sdclive_info: "",
                        cnlid: "",
                        host: location.host,
                        sdtfrom: ""
                    }
                }()), {
                    appver: null === (e = this.getCommonKv(Nc.appVer)) || void 0 === e ? void 0 : e.replace("-beta", ""),
                    platform: this.getCommonKv(Nc.platform),
                    sdtfrom: this.getCommonKv(Nc.sdtfrom),
                    flowid: this.getCommonKv(Nc.flowid),
                    guid: this.getCommonKv(Nc.guid)
                })
            }
        }]),
        t
    }();
    !function(e) {
        e[e.succ = 0] = "succ",
        e[e.paramsErr = 1] = "paramsErr",
        e[e.decryptErr = 2] = "decryptErr",
        e[e.versionErr = 3] = "versionErr",
        e[e.illegal = 4] = "illegal"
    }(Jv || (Jv = {}));
    var $v = nf;
    !function() {
        for (var e = nf, t = of(); ; )
            try {
                if (932836 == parseInt(e(291)) / 1 + parseInt(e(297)) / 2 * (-parseInt(e(311)) / 3) + -parseInt(e(289)) / 4 * (parseInt(e(288)) / 5) + -parseInt(e(284)) / 6 * (-parseInt(e(299)) / 7) + -parseInt(e(302)) / 8 * (parseInt(e(295)) / 9) + -parseInt(e(285)) / 10 * (-parseInt(e(294)) / 11) + parseInt(e(306)) / 12 * (parseInt(e(283)) / 13))
                    break;
                t.push(t.shift())
            } catch (e) {
                t.push(t.shift())
            }
    }();
    var ef = $v(308)
      , tf = $v(293);
    function of() {
        var e = ["C3bSAxq", "CMvKDwnL", "mtiZnteYDw5rC0DW", "Aw5KzxHpzG", "C2v0", "ChvZAa", "mJa4nJGWme1gCvLwza", "y2HHCKnVzgvbDa", "ms4WlJa", "DhH2A2v5", "Dg9mB3DLCKnHC2u", "mtiYndG0nM9KBvbpyG", "C2XPy2u", "yxbWBhK", "AM9PBG", "nJvmDuv6zgS", "mtG5nKflv2zTsq", "mJiWDvL5Dwv3", "CMvWBgfJzq", "BwfW", "nu1QvMrOva", "nJmYmJC3mKndz2vvqW", "zNjVBunOyxjdB2rL", "odi4mZG2C3nAEw1P", "CMfUzg9T", "DMvYC2LVBIbUB3qGBwf0y2G", "nJiZody1qMP4thzf", "oti3BKnbvNLe", "BgvUz3rO", "mKnhtKjQtG", "zMXVB3i", "mZq2otLdDw92BvK"];
        return (of = function() {
            return e
        }
        )()
    }
    function nf(e, t) {
        var o = of();
        return nf = function(t, i) {
            var n = o[t -= 281];
            void 0 === nf.yZZqST && (nf.KLCuCk = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            nf.yZZqST = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = nf.KLCuCk(n),
            e[A] = n),
            n
        }
        ,
        nf(e, t)
    }
    var Af = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      , rf = ["2", "8", "q", "w", "e", "k", "3", "9", "r", "x", "f", "l", "0", "6", "o", "u", "c", "i", "1", "7", "p", "v", "d", "j", "y", "4", "m", "s", "a", "g", "z", "5", "n", "t", "b", "h"]
      , af = $v(309);
    function sf(e, t) {
        for (var o = $v, i = t[o(296)], n = new Uint8Array(e[o(296)]), A = 0; A < e[o(296)]; A++)
            n[A] = e[A] ^ af[o(307)](A % i);
        return n
    }
    function lf(e) {
        for (var t = $v, o = new Uint8Array(e[t(296)]), i = 0; i < e[t(296)]; i++) {
            var n = String[t(290)](e[i])
              , A = Af[t(303)](n);
            o[i] = rf[A] ? rf[A][t(307)](0) : n[t(307)](0)
        }
        return o
    }
    function gf(e, t, o) {
        return [t, sf(e, sf(lf(t), cf("" + af + o)))]
    }
    function cf(e) {
        for (var t = $v, o = new Uint8Array(e[t(296)]), i = 0; i < e[t(296)]; i++)
            o[i] = e[t(307)](i);
        return o
    }
    function uf() {
        for (var e = $v, t = [], o = 0; o < arguments[e(296)]; o++)
            t[o] = arguments[o];
        for (var i = t[e(301)]((function(t, o) {
            return t + o[e(296)]
        }
        ), 0), n = new Uint8Array(i), A = 0, r = 0; r < t[e(296)]; r++)
            n[e(304)](t[r], A),
            A += t[r][e(296)];
        return n
    }
    var Ef = function() {
        function e() {}
        return e.verifyAppkey = function(e) {
            if (-1 !== ["127.0.0.1", "localhost", "0.0.0.0"].indexOf(location.hostname))
                return Jv.succ;
            var t, o = e || {}, i = o.appkey, n = o.platform, A = o.appid;
            if (!i || !n)
                return Jv.paramsErr;
            try {
                t = function(e) {
                    var t = $v;
                    if (e[t(312)](0, 3) !== ef[t(286)](/\./g, ""))
                        throw new Error(tf);
                    for (var o = cf(atob(e[t(312)](3))), i = [], n = 0; n < o[t(296)]; n += 8)
                        i[t(305)](o[t(312)](n, n + 8));
                    var A = i[t(287)]((function(e) {
                        for (var o, i = t, n = [e[i(312)](0, e[i(296)] / 2), e[i(312)](e[i(296)] / 2)], A = n[0], r = n[1], a = 21; a >= 0; a -= 1)
                            A = (o = gf(A, r, a))[0],
                            r = o[1];
                        return uf(r, A)
                    }
                    ))
                      , r = "" + function(e) {
                        for (var t = $v, o = "", i = 0; i < e[t(296)]; i++)
                            o += String[t(290)](e[i]);
                        return o
                    }(uf[t(281)](void 0, A))
                      , a = r[t(300)]("|");
                    return {
                        version: ef,
                        origin: r,
                        domains: a[1],
                        platform: a[2],
                        sdtfrom: a[3],
                        isIframe: "1" === a[4]
                    }
                }(i)
            } catch (e) {
                return e.message === tf ? Jv.versionErr : Jv.decryptErr
            }
            var r = t.domains
              , a = t.platform
              , s = function() {
                var e = "";
                if (window.top !== window)
                    try {
                        e = window.top.location.href
                    } catch (t) {
                        e = document.referrer
                    }
                else
                    e = window.location.href;
                return e
            }()
              , l = function(e) {
                var t = e ? e.trim().toLocaleLowerCase().split(",") : []
                  , o = []
                  , i = [];
                return t.forEach((function(e) {
                    0 === e.indexOf("@") ? i.push(e.slice(1)) : o.push(e)
                }
                )),
                {
                    domains: o,
                    packages: i
                }
            }(r)
              , g = l.domains
              , c = l.packages;
            return /^https?:\/\//.test(s) ? this.verifyAppkeyForDomain({
                platform: n,
                platformFromAppkey: a,
                curUrl: s,
                domains: g
            }) : this.verifyAppkeyForPackage({
                platform: n,
                platformFromAppkey: a,
                appid: A,
                packages: c
            })
        }
        ,
        e.verifyAppkeyForDomain = function(e) {
            var t = e.platform
              , o = e.platformFromAppkey
              , i = e.curUrl
              , n = e.domains
              , A = !i || -1 !== i.indexOf("v.qq.com/txp/iframe/player.html");
            return window.top !== window && A || function(e, t) {
                for (var o = t.trim().toLocaleLowerCase(), i = 0, n = e; i < n.length; i++) {
                    var A = n[i];
                    if (A === o)
                        return !0;
                    if (A.startsWith("*.") && new RegExp("^" + A.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$","i").test(o))
                        return !0
                }
                return !1
            }(n, new URL(i).hostname) && o === t ? Jv.succ : Jv.illegal
        }
        ,
        e.verifyAppkeyForPackage = function(e) {
            var t = e.packages
              , o = e.appid
              , i = e.platform
              , n = e.platformFromAppkey;
            if (!o)
                return Jv.paramsErr;
            var A = null == o ? void 0 : o.toLocaleLowerCase();
            return -1 === t.findIndex((function(e) {
                return e === A
            }
            )) || n !== i ? Jv.illegal : Jv.succ
        }
        ,
        e
    }();
    var df = '<div style="margin-left: 6px; padding: 0 2px;transform: scale(0.8);border: 1px solid #fc3f4c;border-radius: 2px;color: #fc3f4c;font-size: 12px;letter-spacing: 1px;line-height: 14px;text-align: center;">VIP</div>'
      , Bf = '<div class="defn_vip_logo" style="color: #ffdf89; margin-left: 8px;">VIP 尊享</div>'
      , hf = function() {
        function e(t, o) {
            n(this, e),
            a(this, "player", void 0),
            a(this, "tvk", void 0),
            a(this, "config", void 0),
            this.player = t,
            this.tvk = o,
            this.config = o.config
        }
        return r(e, [{
            key: "init",
            value: function() {}
        }, {
            key: "destroy",
            value: function() {
                this.player = null,
                this.tvk = null
            }
        }, {
            key: "log",
            value: function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                var i;
                (i = this.tvk.logger).log.apply(i, ["[".concat(this.constructor.moduleName, "]")].concat(C(t)))
            }
        }, {
            key: "warn",
            value: function(e) {
                for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    o[i - 1] = arguments[i];
                var n;
                (n = this.tvk.logger).warn.apply(n, ["[".concat(this.constructor.moduleName, "] ").concat(e)].concat(C(o)))
            }
        }, {
            key: "error",
            value: function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                var i;
                (i = this.tvk.logger).error.apply(i, ["[".concat(this.constructor.moduleName, "]")].concat(C(t)))
            }
        }]),
        e
    }();
    a(hf, "moduleName", "base-controller");
    var pf = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var e;
            return n(this, A),
            a(t(e = i.apply(this, arguments)), "audioTrackInfoFromServer", []),
            a(t(e), "drmType", void 0),
            a(t(e), "onGetInfoOver", (function(t) {
                var o, i, n = t.data, A = n.parseData, r = n.error, a = n.resData, s = n.urlConfig;
                !r && A && s ? (e.drmType = null === (o = s.drmConfig) || void 0 === o ? void 0 : o.keySystem,
                e.audioTrackInfoFromServer = null == A || null === (i = A.additionalTrackInfo) || void 0 === i ? void 0 : i.altAudioTrack) : e.log("no parsed info found from getvinfo", r, a)
            }
            )),
            a(t(e), "onHlsManifestParsed", (function(t) {
                var o = t.data
                  , i = o.playerInstanceId
                  , n = o.audioTracks
                  , A = void 0 === n ? [] : n;
                i !== e.player.config.instanceId || 0 === A.length || e.shouldUseGetinfoTrackList || (e.drmType === WA.Widevine && (A[0].default = !0),
                e.configureDataSet(e.updateAudioTrackInfo(A), null))
            }
            )),
            a(t(e), "refreshAudioTrack", (function() {
                if (e.shouldUseGetinfoTrackList)
                    return e.setAudioTrackByGetinfo();
                if (e.player.currentVideoInfo) {
                    var t = e.player.currentVideoInfo.currentAudioTrack;
                    e.configureDataSet(null, t)
                }
            }
            )),
            a(t(e), "updateAudioTrackInfo", (function(t) {
                if (!t.length || !e.audioTrackInfoFromServer)
                    return null;
                var o, i, n, A = e.audioTrackInfoFromServer.find((function(e) {
                    return -1 === e.id
                }
                )), r = A ? {
                    value: A.id,
                    btnLabel: null !== (o = A.name) && void 0 !== o ? o : "",
                    label: null !== (i = A.displayName) && void 0 !== i ? i : "",
                    payload: null !== (n = A.displayName) && void 0 !== n ? n : ""
                } : null, a = t.map((function(t) {
                    var o, i, n, A = e.audioTrackInfoFromServer.find((function(e) {
                        return function(e, t) {
                            for (var o = t.tags, i = void 0 === o ? [] : o, n = t.name, A = t.lang, r = 0; r < i.length; r += 1)
                                if (i[r][0] === cp)
                                    return i[r][1] === e.id;
                            return e.name === n || e.name === A
                        }(e, t)
                    }
                    ));
                    return A ? {
                        value: t.id,
                        btnLabel: null !== (o = A.name) && void 0 !== o ? o : "",
                        label: null !== (i = A.displayName) && void 0 !== i ? i : "",
                        payload: null !== (n = A.displayName) && void 0 !== n ? n : ""
                    } : null
                }
                )).concat(r).filter((function(e) {
                    return !!e
                }
                ));
                return e.player.currentVideoInfo.audioTracks = a.map((function(e) {
                    return {
                        name: e.btnLabel,
                        id: e.value
                    }
                }
                )),
                a
            }
            )),
            a(t(e), "onAudioTrackSwitching", (function(t) {
                if (e.shouldUseGetinfoTrackList) {
                    var o, i = ((null === (o = t.data.videoInfo) || void 0 === o ? void 0 : o.config.audioTrack) || {}).name;
                    return e.configureDataSet(null, i || vf.value)
                }
                e.configureDataSet(null, t.data.id)
            }
            )),
            a(t(e), "onAudioTrackSwitched", (function(t) {
                if (!t.data.fail) {
                    if (e.shouldUseGetinfoTrackList) {
                        var o, i = ((null === (o = t.data.videoInfo) || void 0 === o ? void 0 : o.config.audioTrack) || {}).name;
                        return e.configureDataSet(null, i || vf.value)
                    }
                    e.configureDataSet(null, t.data.id)
                }
            }
            )),
            e
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.setupPlayerEventListeners(),
                this.log("init success")
            }
        }, {
            key: "destroy",
            value: function() {
                this.removePlayerEventListeners(),
                this.audioTrackInfoFromServer = void 0,
                this.drmType = void 0,
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "configureDataSet",
            value: function(e, t) {
                e && (this.log("setting audioTrack options to player", e),
                this.player.setCommonKv(Nc.currentAudioTrackList, e)),
                "number" != typeof t && "string" != typeof t || (this.log("setting current audioTrack to player", t),
                this.player.setCommonKv(Nc.currentAudioTrack, t))
            }
        }, {
            key: "setupPlayerEventListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.on(e.PLAY_EVENT.SET_AUDIO_TRACK_START, this.onAudioTrackSwitching),
                this.player.on(e.PLAY_EVENT.SET_AUDIO_TRACK_OVER, this.onAudioTrackSwitched),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_CANPLAY, this.refreshAudioTrack),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.refreshAudioTrack),
                Ks.on("hlsManifestParsed", this.onHlsManifestParsed)
            }
        }, {
            key: "removePlayerEventListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.off(e.PLAY_EVENT.SET_AUDIO_TRACK_START, this.onAudioTrackSwitching),
                this.player.off(e.PLAY_EVENT.SET_AUDIO_TRACK_OVER, this.onAudioTrackSwitched),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_CANPLAY, this.refreshAudioTrack),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.refreshAudioTrack),
                Ks.off("hlsManifestParsed", this.onHlsManifestParsed)
            }
        }, {
            key: "setAudioTrackByGetinfo",
            value: function() {
                var e, t;
                if (!(null === (e = this.audioTrackInfoFromServer) || void 0 === e ? void 0 : e.length))
                    return this.configureDataSet(null, NaN);
                var o = Number(this.player.getCommonKv(Nc.vip)) > 0
                  , i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.filter((function(e) {
                        return "vivid" === e.name && t
                    }
                    ))
                }(this.audioTrackInfoFromServer, o)
                  , n = function(e, t) {
                    return e.map((function(e) {
                        if ("vivid" === e.name)
                            return function(e, t) {
                                var o = t || {}
                                  , i = o.suffix
                                  , n = o.useThemeSuffix
                                  , A = void 0 !== n && n
                                  , r = e.displayName || e.name
                                  , a = A ? Bf : df
                                  , s = (null == i ? void 0 : i(e)) || a;
                                return {
                                    btnLabel: r,
                                    label: "".concat(r).concat(s),
                                    value: e.name,
                                    payload: r
                                }
                            }(e, t);
                        var o = e.displayName || e.name;
                        return {
                            btnLabel: o,
                            label: o,
                            value: e.name,
                            payload: o
                        }
                    }
                    ))
                }(i, this.config.audioTrackOptionDecorator);
                n.length && n.push(vf);
                var A = (null === (t = this.audioTrackInfoFromServer.find((function(e) {
                    return e.selected
                }
                ))) || void 0 === t ? void 0 : t.name) || vf.value;
                this.configureDataSet(n, A)
            }
        }, {
            key: "shouldUseGetinfoTrackList",
            get: function() {
                return "1" === ts.getUrlParamByKey(location.href, gp) || this.config.enableAudiovivid && this.player.vid && this.player.config.type === e.PLAY_MODE.VOD
            }
        }]),
        A
    }(hf);
    a(pf, "moduleName", "audio-track-controller");
    var vf = {
        btnLabel: "标准音质",
        label: "标准音质",
        value: "default",
        payload: "标准音质"
    };
    function ff(e, t, o, i) {
        var n, A = e.name, r = e.lmt, a = I(t ? function(e) {
            var t = e.resolution
              , o = e.framerate
              , i = void 0 === o ? 0 : o
              , n = e.tvkDefinitionBrandDescriptor
              , A = void 0 === n ? "" : n;
            return i >= 50 && (A = "".concat(A, " ").concat(i, "帧")),
            [A, t]
        }(e) : If(e), 2), s = a[0], l = void 0 === s ? "" : s, g = a[1], c = void 0 === g ? "" : g, u = o.suffix || Qf(r), E = o.content || (t ? yf : Cf)(l, c), d = o.button || c, B = o.tips || "".concat(l, " ").concat(c), h = o.prefix, p = "";
        return i && (p = i({
            content: E,
            suffix: u,
            prefix: h
        }, e)),
        p || (p = is.mobile ? (n = c,
        "<div>".concat(l, "<div><div>").concat(n, "</div>")) : mf(E, h, u)),
        {
            label: p,
            btnLabel: d,
            value: A,
            payload: B
        }
    }
    function If(e) {
        var t = e.cname
          , o = e.video;
        if (!(null == t ? void 0 : t.length))
            return ["", ""];
        var i = t.match(/(.*);\((.*)\)/);
        if (i && i.length >= 3) {
            var n = i[1];
            return 19 === o && (n = "".concat(n, " HDR Vivid")),
            [n, i[2]]
        }
        return ["", t]
    }
    function yf(e, t) {
        return "".concat(t, " ").concat(e)
    }
    function Cf(e, t) {
        return "".concat(t, " ").concat(e)
    }
    function mf(e, t, o) {
        var i = wf({
            alignItems: "center"
        });
        t && i.insertAdjacentHTML("afterbegin", t);
        var n = wf();
        return n.innerHTML = e,
        i.appendChild(n),
        o && i.insertAdjacentHTML("beforeend", o),
        i.outerHTML
    }
    function Qf(e) {
        var t = Ff[e];
        if (t)
            return '<div style="margin-left: 6px; padding: 0 2px;transform: scale(0.8);border: 1px solid #fc3f4c;border-radius: 2px;color: #fc3f4c;font-size: 12px;letter-spacing: 1px;line-height: 14px;text-align: center;">'.concat(t, "</div>")
    }
    function wf(e) {
        var t = document.createElement("div");
        return t.style.display = "flex",
        e && Object.keys(e).forEach((function(o) {
            t.style[o] = e[o]
        }
        )),
        t
    }
    var Tf, Sf, _f, Df = '<svg class="tp-hdr-prefix-icon" width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n <path d="M0 14.4449L0.02931 12.2882L8.90291 1.4655H0.271117V0H12L0 14.4449Z" fill="currentColor"/>\n <path d="M11.8315 15.7615H0.102661L11.7925 1.72937L11.7778 4.04974L3.19975 14.296H11.8315V15.7615Z" fill="currentColor"/>\n <path d="M11.9 12.0219H8.03349L11.9 7.40312V5.12915L4.9364 13.4874H11.9V12.0219Z" fill="currentColor"/>\n </svg>', Pf = (a(Tf = {}, Vd.dolby, '<svg class="tp-dolby-prefix-icon" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n <path fill-rule="evenodd" clip-rule="evenodd" d="M0.714233 1.14282C0.714233 0.590537 1.16195 0.142822 1.71423 0.142822H20.2857C20.8379 0.142822 21.2857 0.590537 21.2857 1.14282V12.8571C21.2857 13.4094 20.8379 13.8571 20.2857 13.8571H1.71423C1.16195 13.8571 0.714233 13.4094 0.714233 12.8571V1.14282ZM2.42852 1.85711H4.99995C7.84027 1.85711 10.1428 4.15965 10.1428 6.99997C10.1428 9.84028 7.84027 12.1428 4.99995 12.1428H2.42852V1.85711ZM16.9999 1.85711C14.1596 1.85711 11.8571 4.15965 11.8571 6.99997C11.8571 9.84028 14.1596 12.1428 16.9999 12.1428H19.5714V1.85711H16.9999Z" fill="currentColor"/>\n </svg>'),
    a(Tf, Vd.hdr10, Df),
    a(Tf, Vd.suhd, Df),
    Tf), Ff = (a(Sf = {}, xd.vip, "VIP"),
    a(Sf, xd.svip, "SVIP"),
    Sf), Lf = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var e;
            return n(this, A),
            a(t(e = i.apply(this, arguments)), "useKernelLevel", !0),
            a(t(e), "ctrlbarPlugin", void 0),
            a(t(e), "onVideoMetadataChange", (function() {
                var t = e.player.currentVideoInfo || {}
                  , o = t.levels
                  , i = t.currentLevel
                  , n = t.isAutoLevel;
                if (e.useKernelLevel && (null == o ? void 0 : o.length) && i) {
                    var A = o.slice(0).sort((function(e, t) {
                        return t.bitrate - e.bitrate
                    }
                    )).map((function(t) {
                        return e.parseKernelLevel(t)
                    }
                    ));
                    e.isEnableAbrLevel() && A.length > 1 && A.push(E(u({}, Nf), {
                        url: o[0].url
                    })),
                    e.configureDataSet(A, String(n ? Nf.value : i.id || i.value))
                }
            }
            )),
            a(t(e), "onPlaySessionEnd", (function() {
                e.useKernelLevel = e.config.enableHlsManifestLevels
            }
            )),
            a(t(e), "onGetInfoOver", (function(t) {
                var o = t.data
                  , i = o.parseData
                  , n = o.error
                  , A = o.urlConfig;
                if (!n && i && A) {
                    var r = i.definitionList;
                    if (r) {
                        var a = e.setupDefinitionOptionList(r);
                        if (a) {
                            var s = e.useUserDefinedKernelIfNeeded(a);
                            s && (e.log("use user defined kernel=".concat(s, " for definition=").concat(a)),
                            A.kernelName = s)
                        }
                    } else
                        e.log("no definitionList found from getvinfo", r)
                } else
                    e.log("no parsed info found from getvinfo", n, i, A)
            }
            )),
            e
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.ctrlbarPlugin = this.player.plugins[up],
                this.setupPlayerEventListeners(),
                this.log("init success")
            }
        }, {
            key: "destroy",
            value: function() {
                this.removePlayerEventListeners(),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "configureDataSet",
            value: function(e, t) {
                e && (this.log("setting definition options to player", null == e ? void 0 : e.map((function(e) {
                    return e.label,
                    Ag(e, ["label"])
                }
                ))),
                this.player.setCommonKv(Nc.currentDefnList, e)),
                t && (this.log("setting current definition to player", t),
                this.player.setCommonKv(Nc.currentDefn, t))
            }
        }, {
            key: "parseKernelLevel",
            value: function(e) {
                var t = e.label
                  , o = e.value
                  , i = e.url;
                return {
                    value: o,
                    label: t,
                    payload: t,
                    btnLabel: t,
                    url: e.masterUrl || i
                }
            }
        }, {
            key: "isEnableAbrLevel",
            value: function() {
                return this.player.kernelName === e.KERNEL_NAME.HLS_JS && this.player.config.hlsjsKernelConfig.enableAbrLevel
            }
        }, {
            key: "setupPlayerEventListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_METADATA_CHANGE, this.onVideoMetadataChange),
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onPlaySessionEnd)
            }
        }, {
            key: "removePlayerEventListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver)
            }
        }, {
            key: "useUserDefinedKernelIfNeeded",
            value: function(e) {
                return this.config.kernelMapForDefinition[e] || null
            }
        }, {
            key: "setupDefinitionOptionList",
            value: function(t) {
                var o, i = [], n = null === (o = t.find((function(e) {
                    return 1 === e.sl
                }
                ))) || void 0 === o ? void 0 : o.name;
                if (!n)
                    return null;
                var A = this.player.config.type === e.PLAY_MODE.LIVE
                  , r = this.config
                  , s = r.definitionOptionDecorator
                  , l = r.definitionOptionComposer;
                return t.slice().sort((function(e, t) {
                    var o = bf[e.name] + (kf[e.lmt] || 0);
                    return bf[t.name] + (kf[t.lmt] || 0) - o
                }
                )).forEach((function(e) {
                    var t = function(e, t, o, i) {
                        var n = {
                            prefix: "",
                            suffix: "",
                            content: "",
                            button: "",
                            tips: ""
                        };
                        return (null == o ? void 0 : o.prefix) && (n.prefix = "function" == typeof o.prefix ? o.prefix(e) : void 0),
                        (null == o ? void 0 : o.suffix) && (n.suffix = "function" == typeof o.suffix ? o.suffix(e) : void 0),
                        (null == o ? void 0 : o.content) && (n.content = "function" == typeof o.content ? o.content(e) : void 0),
                        (null == o ? void 0 : o.button) && (n.button = "function" == typeof o.button ? o.button(e) : void 0),
                        (null == o ? void 0 : o.tips) && (n.tips = "function" == typeof o.tips ? o.tips(e) : void 0),
                        t ? ff(e, !0, n, i) : function(e, t, o) {
                            var i = e.name;
                            return i === Vd.hdr10 || i === Vd.suhd || i === Vd.dolby ? function(e, t, o, i) {
                                var n, A = e.name, r = e.resolution, s = e.lmt, l = e.sname, g = I(If(e), 1)[0], c = void 0 === g ? "" : g, u = o.suffix || Qf(s), E = o.prefix || function(e, t) {
                                    var o = document.createElement("div");
                                    return o.className = "tp-defn-option-icon-container",
                                    t && Object.entries(t).forEach((function(e) {
                                        var t = I(e, 2)
                                          , i = t[0]
                                          , n = t[1];
                                        o.style[i] = n
                                    }
                                    )),
                                    o.innerHTML = e,
                                    o.outerHTML
                                }(Pf[t], {
                                    width: "30px"
                                }), d = (a(n = {}, Vd.dolby, r),
                                a(n, Vd.hdr10, function(e) {
                                    var t = wf({
                                        alignItems: "center",
                                        width: "100%"
                                    });
                                    t.textContent = e;
                                    var o = wf({
                                        transform: "scale(0.8)"
                                    });
                                    return o.innerHTML = Df,
                                    t.insertAdjacentElement("beforeend", o),
                                    t.outerHTML
                                }(l.substring(0, 2))),
                                a(n, Vd.suhd, r),
                                n), B = o.button || d[t], h = o.tips || r, p = o.content || c, v = "";
                                return i && (v = i({
                                    content: p,
                                    suffix: u,
                                    prefix: E
                                }, e)),
                                v || (v = mf(p, E, u)),
                                {
                                    label: v,
                                    btnLabel: B,
                                    value: A,
                                    payload: h
                                }
                            }(e, i, t, o) : ff(e, !1, t, o)
                        }(e, n, i)
                    }(e, A, s, l);
                    i.push(t)
                }
                )),
                this.useKernelLevel = !1,
                this.configureDataSet(i, n),
                n
            }
        }]),
        A
    }(hf);
    a(Lf, "moduleName", "definition-controller");
    var Yf, Rf, bf = (a(_f = {}, Vd.sd, 0),
    a(_f, Vd.hd, 1),
    a(_f, Vd.shd, 2),
    a(_f, Vd.fhd, 3),
    a(_f, Vd.uhd, 4),
    a(_f, Vd.hdr10, 5),
    a(_f, Vd.dolby, 6),
    _f), kf = (a(Yf = {}, xd.svip, 1e3),
    a(Yf, xd.vip, 100),
    Yf), Gf = ns(xa.tvk.DEFN_ABR_LABEL), Nf = {
        value: "abr",
        btnLabel: Gf,
        label: Gf,
        payload: Gf
    }, Mf = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var e;
            return n(this, A),
            a(t(e = i.apply(this, arguments)), "dom", null),
            a(t(e), "hideNoticeCallback", (function() {
                e.hideNotice()
            }
            )),
            a(t(e), "showNoticeCallback", (function() {
                e.showNoticeIfNeeded()
            }
            )),
            e
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.config.enableDRMRecordingNotice ? (this.toggleEventHandler(!0),
                this.prepareNoticeDom()) : this.log("DRM recording notice is disabled by config")
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                null === (e = this.dom) || void 0 === e || e.remove(),
                this.dom = null,
                this.toggleEventHandler(!1),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "toggleEventHandler",
            value: function(t) {
                var o = t ? "on" : "off";
                this.player[o](e.H5_PLAY_EVENT.VIDEO_PLAYING, this.showNoticeCallback),
                this.player[o](e.H5_PLAY_EVENT.VIDEO_PAUSE, this.hideNoticeCallback),
                this.player[o](e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.hideNoticeCallback),
                this.player[o](e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.showNoticeCallback),
                this.player[o](e.H5_PLAY_EVENT.PLAY_SESSION_END, this.hideNoticeCallback),
                this.player.pluginMsg[o](e.PLAY_EVENT_EXT.RETRY_PLAY, this.hideNoticeCallback),
                this.player.pluginMsg[o](e.PLAY_EVENT_EXT.RETRY_PLAY_SUCC, this.showNoticeCallback),
                this.player.pluginMsg[o](e.PLAY_EVENT_EXT.SUBTITLE_BEFORE_REPLAY, this.hideNoticeCallback),
                this.player.pluginMsg[o](e.PLAY_EVENT_EXT.SUBTITLE_AFTER_REPLAY, this.showNoticeCallback)
            }
        }, {
            key: "showNoticeIfNeeded",
            value: function() {
                if (this.dom) {
                    var e = this.player.currentVideoInfo.config.drmConfig;
                    (null == e ? void 0 : e.keySystem) && (this.dom.style.display = "block")
                } else
                    this.warn("DOM is not prepared")
            }
        }, {
            key: "hideNotice",
            value: function() {
                this.dom && (this.dom.style.display = "none")
            }
        }, {
            key: "prepareNoticeDom",
            value: function() {
                var e = this.config
                  , t = e.drmRecordingNoticeText
                  , o = e.drmRecordingNoticeStyle
                  , i = document.createElement("div");
                i.classList.add("drm-recording-notice"),
                i.textContent = t,
                Object.assign(i.style, o),
                this.dom = i,
                this.hideNotice(),
                this.player.container.prepend(i)
            }
        }]),
        A
    }(hf);
    a(Mf, "moduleName", "drm-recording-notice-controller"),
    function(e) {
        e[e.Pass = 0] = "Pass",
        e[e.NotSupportAVC = 1] = "NotSupportAVC",
        e[e.IsWebDriver = 2] = "IsWebDriver",
        e[e.IsSpider = 4] = "IsSpider",
        e[e.IsHeadless = 8] = "IsHeadless",
        e[e.IsOuterDimensionInvalid = 16] = "IsOuterDimensionInvalid",
        e[e.IsOnline = 32] = "IsOnline",
        e[e.IsPluginsEmpty = 64] = "IsPluginsEmpty",
        e[e.IsMimeTypeEmpty = 128] = "IsMimeTypeEmpty",
        e[e.NotSupportWASMButShould = 256] = "NotSupportWASMButShould"
    }(Rf || (Rf = {}));
    var Uf, Of, Kf = (Uf = 0,
    (Of = function(e) {
        Uf |= e()
    }
    )((function() {
        return ja.isVideoCanPlayType('video/mp4; codecs="avc1.42E01E"') ? 0 : 1
    }
    )),
    Of((function() {
        return navigator.webdriver ? 2 : 0
    }
    )),
    Of((function() {
        return is.spider ? 4 : 0
    }
    )),
    Of((function() {
        return is.headless ? 8 : 0
    }
    )),
    Of((function() {
        return 0 === window.outerWidth && 0 === window.outerHeight ? 16 : 0
    }
    )),
    Of((function() {
        return navigator.onLine ? 0 : 32
    }
    )),
    Of((function() {
        var e;
        return (null === (e = navigator.plugins) || void 0 === e ? void 0 : e.length) > 0 ? 0 : 64
    }
    )),
    Of((function() {
        var e;
        return (null === (e = navigator.mimeTypes) || void 0 === e ? void 0 : e.length) > 0 ? 0 : 128
    }
    )),
    Of((function() {
        return is.browser.chrome && os.compareVersion(is.browser.chrome.version, "57") && !ja.isWasmSupported() ? 256 : 0
    }
    )),
    Uf), xf = {
        scoreMaskForBlocking: Rf.Pass,
        scoreMaskForReporting: Rf.Pass,
        debug: !1,
        enableTEE: !1,
        isOfficialSite: !1,
        allowDRMDowngrade: !1,
        isDelayParseGetinfo: !0,
        definitionController: Lf,
        audioTrackController: pf,
        drmRecordingNoticeText: "当前画面异常，受版权方要求本视频不允许录屏/投屏/连接非适配HDCP的显示器，请检查播放环境后重试。",
        drmRecordingNoticeStyle: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            userSelect: "none",
            pointerEvents: "none",
            color: "white",
            maxWidth: "280px",
            wordBreak: "break-all"
        },
        enableDRMRecordingNotice: !1,
        subtitleStorageDimension: Ep.CID,
        enabledHevcDefinition: [],
        enabledHevcFrameRateLevel: [],
        enableHlsManifestLevels: !0,
        kernelMapForDefinition: {},
        codecDegradeReportConfig: {},
        enableSuhdWatermark: !1,
        usKeyBusinessId: "780014",
        usKeyDataSchema: {
            vid: Nc.vid,
            pid: Nc.flowid,
            guid: Nc.guid
        },
        enableTrustedJSON: !1,
        enableHarmonyAudioWorkaround: !1
    }, Vf = /#EXT-X-DISCONTINUITY/;
    var Hf = "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-PLAYLIST-TYPE:VOD\n"
      , jf = "#EXT-X-ENDLIST\n"
      , qf = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "context", void 0),
            a(t(o), "onGetInfoOver", (function(t) {
                var i = t.data;
                o.player.config.type !== e.PLAY_MODE.VOD ? o.handleLiveLatencyChaseBehavior(i) : o.handleVodUrlConfig(i)
            }
            )),
            a(t(o), "handleLiveLatencyChaseBehavior", (function(e) {
                var t = e.resData;
                if (null == t ? void 0 : t.fast_forward) {
                    var i = t.fast_forward
                      , n = i.speed
                      , A = i.start_fast_foward
                      , r = i.stop_fast_foward;
                    o.player.config.latencyConfig = {
                        expectedLatency: A,
                        minLatency: r,
                        syncSpeed: n
                    }
                }
            }
            )),
            a(t(o), "onHlsManifestParsed", (function(e) {
                var t = e.data
                  , i = t.playerInstanceId
                  , n = t.audioTracks
                  , A = void 0 === n ? [] : n
                  , r = t.levels
                  , a = void 0 === r ? [] : r;
                i === o.player.config.instanceId && (A.forEach((function(e) {
                    var t = Xf(e);
                    t && (o.context.keyid[e.url] = t)
                }
                )),
                a.forEach((function(e) {
                    var t = Xf(e);
                    t && (o.context.keyid[e.url] = t)
                }
                )))
            }
            )),
            o
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.resetContext(),
                this.player.config.tempOffsetStartPosition = this.offsetStartPosition.bind(this),
                this.configHlsjsKernel({
                    pProxy: this.lookupCache.bind(this)
                }),
                this.configureWasmKernel(),
                this.setupEventListeners()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeEventListeners(),
                this.resetContext(),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_RESULT, this.onGetInfoOver),
                Ks.on("hlsManifestParsed", this.onHlsManifestParsed)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_RESULT, this.onGetInfoOver),
                Ks.off("hlsManifestParsed", this.onHlsManifestParsed)
            }
        }, {
            key: "resetContext",
            value: function() {
                this.log("reset context"),
                this.context = {
                    m3u8: {},
                    keyid: {}
                }
            }
        }, {
            key: "configHlsjsKernel",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = Object.assign({}, this.player.config.hlsjsKernelConfig, e);
                this.player.config.hlsjsKernelConfig = t
            }
        }, {
            key: "offsetStartPosition",
            value: function(e) {
                var t = this.config.tempHlsAdRangesDatasetKey;
                if (!t)
                    return e;
                var o = this.player.getCommonKv(t);
                if (!o)
                    return e;
                var i = !0
                  , n = !1
                  , A = void 0;
                try {
                    for (var r, a = o[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
                        var s = r.value
                          , l = s.start
                          , g = s.end;
                        if (e >= l - 3 && e <= g + 3)
                            return l - 3
                    }
                } catch (e) {
                    n = !0,
                    A = e
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw A
                    }
                }
                return e
            }
        }, {
            key: "configureWasmKernel",
            value: function() {
                var e = this.player.config;
                e.wasmKernelConfig = E(u({}, e.wasmKernelConfig), {
                    lookupCache: this.lookupCache.bind(this)
                }),
                e.wasmAudiovividKernelConfig = E(u({}, e.wasmAudiovividKernelConfig), {
                    lookupCache: this.lookupCache.bind(this)
                })
            }
        }, {
            key: "handleVodUrlConfig",
            value: function(e) {
                var t = this
                  , o = e.resData
                  , i = e.parseData
                  , n = e.urlConfig;
                if (0 === (null == o ? void 0 : o.em)) {
                    var A = [];
                    if (o.play) {
                        this.log("found master m3u8 endpoint", o.play);
                        var r = o.play
                          , a = r.keyid
                          , s = r.audiolist
                          , l = void 0 === s ? [] : s
                          , g = r.videolist
                          , c = void 0 === g ? [] : g
                          , d = r.masterurl
                          , B = void 0 === d ? [] : d
                          , h = r.master;
                        return this.config.enableHarmonyAudioWorkaround && is.browser.harmonyTxVideo && (null == i ? void 0 : i.drmType) === Rc.ChinaDRM2 && (h = h.replace(Jf, zf)),
                        a && h && (this.context.m3u8[a] = h),
                        a && B.forEach((function(e) {
                            t.context.keyid[e] = a
                        }
                        )),
                        c.forEach((function(e) {
                            t.context.m3u8[e.keyid] = e.m3u8
                        }
                        )),
                        l.forEach((function(e) {
                            t.context.m3u8[e.keyid] = e.m3u8
                        }
                        )),
                        o.vl.vi[0].ul.ui.forEach((function(e) {
                            var o, i;
                            t.context.keyid[e.url] = "".concat(null !== (i = null === (o = c[0]) || void 0 === o ? void 0 : o.keyid) && void 0 !== i ? i : ""),
                            A.push(e.url)
                        }
                        )),
                        void (e.urlConfig.backupUrls = A)
                    }
                    if (o.dltype === md.DIR_HLS) {
                        var p, v, f, y, C, m, Q = o.vl.vi[0].ul.m3u8, w = (null == n || null === (p = n.p2pConfig) || void 0 === p ? void 0 : p.keyId) || "";
                        if (is.browser.safari) {
                            var T, S, _ = I(function(e, t) {
                                if (!t || 0 === t.length)
                                    return [e, []];
                                for (var o = [], i = e.split(/[\r\n]/), n = 0, A = !1, r = []; n < i.length; ) {
                                    if (Vf.test(i[n])) {
                                        if (A) {
                                            r.push(n),
                                            o.push(r),
                                            r = [],
                                            A = !1,
                                            n += 1;
                                            continue
                                        }
                                        r.push(n),
                                        A = !0
                                    }
                                    n += 1
                                }
                                var a, s, l, g, c, d = (a = t.slice().sort((function(e, t) {
                                    return e.start - t.start
                                }
                                )).map((function(e, t) {
                                    return E(u({}, e), {
                                        m3u8: o[t] ? i.slice(o[t][0], o[t][1] + 1).join("\n") : ""
                                    })
                                }
                                )),
                                s = [],
                                l = a[0].start,
                                g = -1,
                                c = a[0].m3u8,
                                a.forEach((function(e) {
                                    var t = e.start
                                      , o = e.end
                                      , i = e.m3u8;
                                    if (t <= g)
                                        return g = o,
                                        void (c = "".concat(c, "\n").concat(i));
                                    g >= 0 && s.push({
                                        start: l,
                                        end: g,
                                        m3u8: "".concat(Hf).concat(c, "\n").concat(jf)
                                    }),
                                    l = t,
                                    g = o,
                                    c = i
                                }
                                )),
                                s.push({
                                    start: l,
                                    end: g,
                                    m3u8: "".concat(Hf).concat(c, "\n").concat(jf)
                                }),
                                s);
                                return [i.filter((function(e, t) {
                                    return !o.some((function(e) {
                                        return t >= e[0] && t <= e[1]
                                    }
                                    ))
                                }
                                )).join("\n"), d]
                            }(Q, null == i || null === (S = i.supplementaryInfo) || void 0 === S || null === (T = S.contentInfo) || void 0 === T ? void 0 : T.ad), 2), D = _[0], P = _[1];
                            this.context.m3u8[w] = D,
                            P.forEach((function(e, o) {
                                var i = "".concat(w, ".ad.").concat(o);
                                t.context.m3u8[i] = e.m3u8
                            }
                            ))
                        } else
                            this.context.m3u8[w] = Q;
                        return null == i || null === (v = i.urls) || void 0 === v || v.forEach((function(e) {
                            Wf.test(e.url) || A.push(e.url),
                            i.drmType !== Rc.WIDEVINE && (t.context.keyid[e.url] = w)
                        }
                        )),
                        n.backupUrls = A,
                        null == i || null === (f = i.additionalTrackInfo) || void 0 === f || f.altAudioTrack.forEach((function(e) {
                            e.selected && (n.audioTrack = {
                                url: e.url,
                                backupUrls: e.backupUrls
                            },
                            t.log("audio url set to:", n.audioTrack))
                        }
                        )),
                        null == o || null === (C = o.al) || void 0 === C || null === (y = C.ai) || void 0 === y || y.forEach((function(e) {
                            var o = e.m3u8
                              , i = e.keyid
                              , n = e.ul
                              , A = null == n ? void 0 : n.ui[0].url;
                            t.context.keyid[A] = i,
                            t.context.m3u8[i] = o
                        }
                        )),
                        n.preferKernelRetry = !0,
                        this.log("url config set: v=".concat(null == n ? void 0 : n.url, ", a=").concat(null == n || null === (m = n.audioTrack) || void 0 === m ? void 0 : m.url)),
                        void this.log("m3u8 proxy set: ", this.context)
                    }
                }
            }
        }, {
            key: "lookupCache",
            value: function(e) {
                this.log("proxy download", e, this.context);
                var t = this.getKeyIdFromUrl(e);
                return t ? this.lookupByKeyId(t) : (this.log("no keyid found for url", e),
                null)
            }
        }, {
            key: "getKeyIdFromUrl",
            value: function(e) {
                for (var t; null !== (t = Wf.exec(e)); )
                    return t[1];
                return this.context.keyid[e]
            }
        }, {
            key: "lookupByKeyId",
            value: function(e) {
                var t = this.context.m3u8[e];
                return t ? (this.log("m3u8 found for keyid, network request skipped", e),
                t) : (this.log("no m3u8 found for keyid", e),
                null)
            }
        }]),
        A
    }(hf);
    a(qf, "moduleName", "network-controller");
    var Wf = /keyid:\/\/([0-9a-zA-Z.]+).m3u8/
      , Jf = "mp4a.40.2"
      , zf = "mp4a.40.5";
    function Xf(e) {
        var t, o = e.tags;
        return o ? null === (t = o.find((function(e) {
            return I(e, 1)[0] === cp
        }
        ))) || void 0 === t ? void 0 : t[1] : null
    }
    var Zf = function() {
        var e = Xa.get("luin") || Xa.get("uin");
        return e && (e = e.replace(/\D/g, "").replace(/^0+/, "")),
        e
    }
      , $f = function() {
        var e, t = document.location.toString().toLowerCase();
        if (e = ["ptag", "adtag", "pgv_ref"].find((function(e) {
            return ts.getUrlParamByKey(t, e)
        }
        )))
            return e;
        try {
            e = sessionStorage.getItem("ptag")
        } catch (e) {}
        if (e)
            return e;
        var o = ts.getDomainOfURL(document.referrer);
        return ["v.qq.com", "film.qq.com", "m.v.qq.com"].includes(o) || (e = o.replace(/\./g, "_")),
        e || Xa.get("ptag")
    };
    function eI(e, t) {
        return void 0 === t && (t = !1),
        isNaN(e) || !isFinite(e) ? 0 : t ? Math.round(+e) : +e
    }
    function tI(e) {
        var t = e.url
          , o = e.data;
        try {
            var i = Object.keys(o).reduce((function(e, t) {
                var i;
                return e[t] = encodeURIComponent(null !== (i = o[t]) && void 0 !== i ? i : ""),
                e
            }
            ), {
                _dc: Math.random()
            });
            navigator.sendBeacon(t, ts.object2string(i))
        } catch (e) {}
    }
    function oI() {
        var e = "other"
          , t = is.browser
          , o = is.os;
        return t.qqlive && (o.iphone ? e = "iphone_qqlive" : o.android && (e = "aphone_qqlive")),
        e
    }
    function iI(e) {
        var t = e.url
          , o = e.data;
        return Wa.xhr({
            url: t,
            body: o,
            method: "POST",
            withCredentials: !0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
    var nI, AI = {
        iQQ: "",
        sid: Nc.vid,
        pid: Nc.livepid,
        playno: Nc.flowid,
        guid: Nc.guid,
        ctime: "",
        sdtfrom: Nc.sdtfrom,
        surl: "",
        sref: "",
        flashver: "",
        fplayerver: Nc.playerver,
        P2PVer: "",
        vurl: "",
        tpay: "",
        cpay: "",
        ptag: "",
        adid: "",
        playtime: "",
        error_code: "",
        drm: Nc.drmtype,
        rest_preview_cnt: "",
        hh_ua: Nc.ua,
        hc_main_login: Nc.hc_main_login,
        hc_openid: Nc.hc_openid,
        hc_vuserid: Nc.hc_vuserid,
        hc_appid: Nc.hc_appid,
        extrainfo: "",
        platform: Nc.platform,
        format_ua: "",
        qimei36: ""
    }, rI = function(t) {
        function o(o, i, n) {
            var A = t.call(this, o, i, n) || this;
            A.FLOW_DATA_KEY = "",
            A.step5Timer = null,
            A.started = !1,
            A.setEvtHandler = function() {
                A.msg.on(e.PLAY_EVENT_EXT.DATASET_STATE_UPDATE, A.onStateChange)
            }
            ,
            A.onStateChange = function(t) {
                var o, i = t.data, n = i.key, r = ((o = {})[e.DATA_STATE.LOAD_END] = A.step6,
                o[e.DATA_STATE.SET_LEVEL_START] = A.step8,
                o[e.DATA_STATE.GET_INFO_END] = A.step4,
                o[e.DATA_STATE.SESSION_END] = A.onEnd,
                o[e.DATA_STATE.SESSION_START] = A.start,
                o);
                r[n] && !i.newVal.isContiguous && r[n](i)
            }
            ,
            A.start = function() {
                A.started = !0,
                A.step3()
            }
            ,
            A.step3 = function() {
                A.report({
                    step: "3",
                    val: 0,
                    val1: 0,
                    val2: 0
                }),
                A.step5Timer = setInterval((function() {
                    A.step5()
                }
                ), 6e4)
            }
            ,
            A.step4 = function(e) {
                var t = e.newVal
                  , o = void 0 === t ? {} : t
                  , i = e.startEvent
                  , n = void 0 === i ? {} : i
                  , r = {
                    val: o.ftime - n.ftime,
                    val1: 0,
                    val2: 0
                };
                A.reportedEvt.step4 || (A.reportedEvt.step4 = !0,
                A.report(S({
                    step: "4"
                }, r))),
                A.report(S({
                    step: "1100"
                }, r))
            }
            ,
            A.step5 = function() {
                A.report({
                    step: "5",
                    val: 6e4,
                    val1: 0,
                    val2: 0
                })
            }
            ,
            A.step6 = function(e) {
                var t = e.newVal
                  , o = void 0 === t ? {} : t
                  , i = e.startEvent
                  , n = void 0 === i ? {} : i
                  , r = {
                    step: "6",
                    val: o.ftime - n.ftime,
                    val1: A.reportedEvt.step7 ? 1 : 0,
                    val2: 0
                };
                A.report(r)
            }
            ,
            A.step7 = function() {
                A.report({
                    step: "7",
                    val: 0,
                    val1: 0,
                    val2: 0
                })
            }
            ,
            A.step8 = function() {
                A.report({
                    step: "8",
                    val: 0,
                    val1: 0,
                    val2: 0
                })
            }
            ,
            A.onEnd = function() {
                A.step5Timer && (clearInterval(A.step5Timer),
                A.step5Timer = null),
                A.reportedEvt = {}
            }
            ;
            var r = o.config.liveFlowReporterConfig
              , a = is.mobile ? {
                id: "zbb00003101",
                token: "3917576196"
            } : {
                id: "zae00003007",
                token: "2345779398"
            }
              , s = a.id
              , l = a.token
              , g = r || {}
              , c = g.id
              , u = g.token
              , E = g.devicePlatform
              , d = g.serviceURL
              , B = g.paramsKey
              , h = g.forceImage
              , p = g.onBeforeReport
              , v = g.onAfterReport;
            return A.REPORT_URL = null != d ? d : "https://h.trace.qq.com/bosskv?",
            A.config = {
                paramsKey: S(S({}, AI), B || {}),
                onBeforeReport: p,
                onAfterReport: v,
                forceImage: h,
                id: null != c ? c : s,
                token: null != u ? u : l,
                devicePlatform: null != E ? E : is.mobile ? "mobile" : "desktop"
            },
            A.setEvtHandler(),
            A
        }
        return T(o, t),
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e, t = this.config.paramsKey, o = void 0 === t ? {} : t, i = this.player.getCommonKv;
                return {
                    attaid: this.config.id,
                    token: this.config.token,
                    iQQ: this.getKvWithDefault(o.iQQ, Zf()),
                    sid: this.getKvWithDefault(o.sid, ""),
                    pid: this.getKvWithDefault(o.pid, ""),
                    playno: i(o.playno),
                    guid: this.getKvWithDefault(o.guid, ""),
                    ctime: os.dateFormat(void 0, void 0),
                    sdtfrom: this.getKvWithDefault(o.sdtfrom, ""),
                    surl: this.getKvWithDefault(o.surl, location.href),
                    sref: this.getKvWithDefault(o.sref, document.referrer),
                    flashver: this.getKvWithDefault(o.flashver, ""),
                    fplayerver: this.getKvWithDefault(o.fplayerver, ""),
                    P2PVer: this.getKvWithDefault(o.P2PVer, ""),
                    vurl: this.getKvWithDefault(o.vurl, null === (e = this.player.currentVideoInfo) || void 0 === e ? void 0 : e.loadingUrl),
                    tpay: this.getKvWithDefault(o.tpay, 0),
                    cpay: this.getKvWithDefault(o.cpay, 0),
                    ptag: this.getKvWithDefault(o.ptag, ""),
                    adid: this.getKvWithDefault(o.adid, ""),
                    playtime: this.getKvWithDefault(o.playtime, 0),
                    error_code: this.getKvWithDefault(o.error_code, 0),
                    rest_preview_cnt: this.getKvWithDefault(o.rest_preview_cnt, -1),
                    hh_ua: this.getKvWithDefault(o.hh_ua, ""),
                    hc_main_login: this.getKvWithDefault(o.hc_main_login, ""),
                    hc_openid: this.getKvWithDefault(o.hc_openid, ""),
                    hc_vuserid: this.getKvWithDefault(o.hc_vuserid, ""),
                    hc_appid: this.getKvWithDefault(o.hc_appid, ""),
                    extrainfo: this.getKvWithDefault(o.extrainfo, ""),
                    platform: this.getKvWithDefault(o.platform, ""),
                    qimei36: this.getKvWithDefault(o.qimei36, ""),
                    format_ua: this.getKvWithDefault(o.format_ua, oI()),
                    playertype: 1,
                    drm: this.getKvWithDefault(o.drm, 0),
                    kernel: this.player.kernelName,
                    is_fake_live: this.player.isFakeLive ? 1 : 0
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.step5Timer && (clearInterval(this.step5Timer),
            this.step5Timer = null)
        }
        ,
        o.prototype.reportAd = function() {
            this.step7()
        }
        ,
        o.prototype.report = function(e) {
            var o;
            if (this.started) {
                var i = null !== (o = this.config.onBeforeReport) && void 0 !== o ? o : function(e) {
                    return e
                }
                ;
                t.prototype.report.call(this, i(e))
            }
        }
        ,
        o.pluginName = "live-flow-reporter",
        o
    }(kE), aI = {
        progid: "",
        playno: Nc.flowid,
        guid: Nc.guid,
        sip: "",
        iqq: "",
        hh_ua: Nc.ua,
        cdn: "",
        sdtfrom: Nc.sdtfrom,
        loadingtime: "",
        blocktime: "",
        blockcount: "",
        prdlength: "",
        platform: Nc.platform,
        errorcode: "",
        dsip: "",
        durl: "",
        firstreport: "",
        sUrl: Nc.url,
        sRef: Nc.referrer,
        fplayerver: Nc.playerver,
        livepid: Nc.livepid,
        viewid: "",
        seq: "",
        cmd: "",
        fullecode: "",
        protocol: "",
        format: "",
        rate: "",
        geturltime: "",
        playtime: "",
        ispay: "",
        isuserpay: "",
        switch: "",
        lookback: "",
        nettype: "",
        freetype: "",
        https: "",
        downspeed: "",
        vip_type: "",
        playertype: "",
        pvid: "",
        login_type: "",
        open_id: Nc.hc_openid,
        live_delay: "",
        use_p2p: Nc.p2p,
        p2p_play: "",
        p2pver: Nc.p2pver
    }, sI = "0AND0F8T5N4N7QT0", lI = "0DOU0M38AT4C4UVD", gI = function(t) {
        function o(o, i, n) {
            var A, r, a, s, l = t.call(this, o, i, n) || this;
            l.periodTickTimer = 0,
            l.currentPeriodStartTime = 0,
            l.isInPlayback = 0,
            l.lastSid = 0,
            l.loadCost = 0,
            l.redirectCost = 0,
            l.bufferCount = 0,
            l.redirectStartTime = 0,
            l.bufferDuration = 0,
            l.reported = !1,
            l.delay = 0,
            l.seq = 0,
            l.errCode = e.ErrorCode.SUC,
            l.keyMapping = S(S({}, aI), null === (A = o.config.liveFlyReporterConfig) || void 0 === A ? void 0 : A.paramsKey);
            var g = null === (r = o.config.liveFlyReporterConfig) || void 0 === r ? void 0 : r.isOversea
              , c = {
                appKey: g ? lI : sI,
                isOversea: g
            };
            return l.REPORT_KEY = c.appKey,
            l.config.onAfterReport = null === (a = o.config.liveFlyReporterConfig) || void 0 === a ? void 0 : a.onAfterReport,
            l.config.onBeforeReport = null === (s = o.config.liveFlyReporterConfig) || void 0 === s ? void 0 : s.onBeforeReport,
            l.bindEventHandlers(),
            GE.register(c),
            l.reporter = GE.report,
            l.cachedVideoInfo = dI(),
            l
        }
        return T(o, t),
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e = this
                  , t = e.player
                  , o = e.keyMapping
                  , i = e.cachedVideoInfo
                  , n = t.currentVideoInfo
                  , A = (null == n ? void 0 : n.loadingUrl) || ""
                  , r = this.getAuthInfo()
                  , a = r.pvid
                  , s = r.loginType;
                return {
                    progid: i.liveSid || 0,
                    playno: this.getKvWithDefault(o.playno, ""),
                    guid: this.getKvWithDefault(o.guid, ""),
                    sip: i.clientIp || "0.0.0.0",
                    iqq: this.getKvWithDefault(o.iqq, 0),
                    hh_ua: this.getKvWithDefault(o.hh_ua, ""),
                    cdn: i.cdnName || "",
                    sdtfrom: this.getKvWithDefault(o.sdtfrom, 0),
                    loadingtime: this.loadCost,
                    blocktime: this.bufferDuration,
                    blockcount: this.bufferCount,
                    prdlength: 0,
                    platform: t.getCommonKv(o.platform),
                    errorcode: this.errCode,
                    dsip: "0.0.0.0",
                    durl: A,
                    firstreport: +!this.reported,
                    sUrl: this.getKvWithDefault(o.sUrl, ""),
                    sRef: this.getKvWithDefault(o.sRef, ""),
                    fplayerver: this.getKvWithDefault(o.fplayerver, "0.0.0"),
                    livepid: i.livePid || 0,
                    viewid: i.liveChid || 0,
                    seq: this.seq,
                    cmd: 0,
                    fullecode: this.errCode,
                    protocol: i.protocol,
                    format: i.format,
                    rate: 0,
                    geturltime: this.redirectCost,
                    playtime: i.previewLength || -1,
                    ispay: i.ispay || 0,
                    isuserpay: i.isuserpay || 0,
                    switch: "",
                    lookback: this.isInPlayback,
                    nettype: 0,
                    freetype: 0,
                    https: +(0 === A.indexOf("https://")),
                    downspeed: 0,
                    vip_type: this.getKvWithDefault(o.vip_type, 0),
                    playertype: this.getKvWithDefault(o.playertype, 0),
                    pvid: a || 0,
                    login_type: s,
                    open_id: this.getKvWithDefault(o.open_id, ""),
                    live_delay: this.delay,
                    use_p2p: this.getKvWithDefault(o.use_p2p, 0),
                    p2p_play: 0,
                    p2pver: this.getKvWithDefault(o.p2pver, "")
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.destroy = function() {
            this.clearTick(),
            this.clearSessionData(),
            t.prototype.destroy.call(this)
        }
        ,
        o.prototype.report = function(e) {
            var o;
            (null === (o = this.cachedVideoInfo) || void 0 === o ? void 0 : o.liveSid) && (is.spider || (t.prototype.report.call(this, S(S({}, e), {
                stepname: uI
            })),
            this.seq += 1,
            this.reported = !0))
        }
        ,
        o.prototype.getAuthInfo = function() {
            return {
                pvid: Xa.get("pgv_pvid"),
                loginType: this.getKvWithDefault(Nc.hc_main_login, "none")
            }
        }
        ,
        o.prototype.getVideoInfo = function(e) {
            var t, o = e.data.resData, i = o.play_list;
            if (null == i ? void 0 : i[0]) {
                var n = i[0]
                  , A = n.codec_param
                  , r = n.urls[0];
                this.cachedVideoInfo = {
                    liveChid: o.chid,
                    livePid: o.pid,
                    liveSid: n.sid,
                    cdnName: ts.getUrlParamByKey(r, "cdn"),
                    protocol: null == A ? void 0 : A.stream,
                    format: null == A ? void 0 : A.vcode,
                    ispay: o.pay_type,
                    isuserpay: o.isuserpay,
                    previewLength: null === (t = o.preview_info) || void 0 === t ? void 0 : t.playtime,
                    clientIp: o.client_ip
                }
            } else
                this.cachedVideoInfo = {
                    liveChid: o.livechid,
                    liveSid: o.livesid,
                    livePid: o.livepid,
                    ispay: o.ispay,
                    isuserpay: o.isuserpay,
                    previewLength: o.playtime,
                    cdnName: o.cdn_name,
                    protocol: o.stream,
                    format: o.vcode,
                    clientIp: "0.0.0.0"
                };
            this.redirectCost = Date.now() - this.redirectStartTime
        }
        ,
        o.prototype.bindEventHandlers = function() {
            var t = this;
            this.msg.on(e.PLAY_EVENT_EXT.GETINFO_START, (function() {
                t.redirectStartTime = Date.now()
            }
            )),
            this.msg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.getVideoInfo.bind(this)),
            this.msg.on(e.PLAY_EVENT_EXT.DATASET_STATE_UPDATE, this.onDataSetStateUpdate.bind(this)),
            this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onSessionEnded.bind(this)),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.onSetLevelStart.bind(this))
        }
        ,
        o.prototype.onDataSetStateUpdate = function(t) {
            var o, i = ((o = {})[e.DATA_STATE.BUFFER_END] = this.onBufferEnd,
            o[e.DATA_STATE.LOAD_END] = this.onLoaded,
            o[e.DATA_STATE.SET_LEVEL_END] = this.onSetLevelEnd,
            o);
            i[t.data.key] && i[t.data.key].call(this, t)
        }
        ,
        o.prototype.onLoaded = function(t) {
            var o = t.data
              , i = o.newVal
              , n = o.startEvent
              , A = i.ftime
              , r = i.code
              , a = i.currentUrl
              , s = n.ftime;
            this.loadCost = A - s,
            this.errCode = r,
            this.report({
                cmd: r === e.ErrorCode.SUC ? nI.load : nI.error,
                cdn: ts.getUrlParamByKey(a, "cdn"),
                durl: a
            }),
            this.startTick()
        }
        ,
        o.prototype.onBufferEnd = function(e) {
            var t = e.data
              , o = t.newVal
              , i = t.startEvent
              , n = o.ftime
              , A = i.ftime;
            this.bufferDuration += n - A,
            this.bufferCount += 1
        }
        ,
        o.prototype.onSetLevelStart = function() {
            this.lastSid = this.cachedVideoInfo.liveSid,
            this.tickImmediate()
        }
        ,
        o.prototype.onSetLevelEnd = function(t) {
            var o = t.data
              , i = o.newVal
              , n = o.startEvent
              , A = i.ftime
              , r = i.code
              , a = n.ftime;
            r === e.ErrorCode.SUC && (this.loadCost = A - a,
            this.report({
                cmd: nI.load,
                switch: this.lastSid
            }),
            this.startTick())
        }
        ,
        o.prototype.onSessionEnded = function(e) {
            var t, o = e.data.code;
            this.errCode = o,
            this.tickImmediate({
                durl: null === (t = this.player.currentVideoInfo) || void 0 === t ? void 0 : t.loadingUrl
            }),
            this.clearSessionData()
        }
        ,
        o.prototype.tick = function(t) {
            var o = this
              , i = o.errCode
              , n = o.player
              , A = o.currentPeriodStartTime;
            n.currentVideoInfo && (this.delay = n.currentVideoInfo.currentDelay || 0),
            this.report(S({
                cmd: i === e.ErrorCode.SUC ? nI.period : nI.error,
                fullecode: i,
                prdlength: Date.now() - A
            }, t)),
            this.onTickEnd()
        }
        ,
        o.prototype.clearTick = function() {
            this.periodTickTimer && (window.clearInterval(this.periodTickTimer),
            this.periodTickTimer = null)
        }
        ,
        o.prototype.onTickEnd = function() {
            this.bufferCount = 0,
            this.bufferDuration = 0,
            this.currentPeriodStartTime = Date.now()
        }
        ,
        o.prototype.tickImmediate = function(e) {
            this.clearTick(),
            this.tick(e)
        }
        ,
        o.prototype.startTick = function() {
            this.periodTickTimer || (this.currentPeriodStartTime = Date.now(),
            this.periodTickTimer = window.setInterval(this.tick.bind(this), EI))
        }
        ,
        o.prototype.clearSessionData = function() {
            this.redirectCost = 0,
            this.redirectStartTime = 0,
            this.currentPeriodStartTime = 0,
            this.cachedVideoInfo = dI(),
            this.loadCost = 0,
            this.reported = !1,
            this.seq = 0,
            this.delay = 0,
            this.errCode = e.ErrorCode.SUC
        }
        ,
        o.pluginName = "live-fly-reporter",
        o
    }(kE);
    !function(e) {
        e[e.load = 205] = "load",
        e[e.error = 150] = "error",
        e[e.period = 263] = "period"
    }(nI || (nI = {}));
    var cI, uI = "boss_cmd_player_hit_tap_process", EI = 6e4, dI = function() {
        return {
            liveChid: 0,
            livePid: 0,
            liveSid: 0,
            protocol: 1,
            format: 2,
            ispay: 0,
            isuserpay: 0,
            previewLength: 0,
            cdnName: "",
            clientIp: "0.0.0.0"
        }
    };
    function BI(e) {
        var t = function(e) {
            var t = 0
              , o = [];
            for (o[(e.length >> 2) - 1] = void 0,
            t = 0; t < o.length; t += 1)
                o[t] = 0;
            var i = 8 * e.length;
            for (t = 0; t < i; t += 8)
                o[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return o
        }(e)
          , o = 8 * e.length;
        t[o >> 5] |= 128 << o % 32,
        t[14 + (o + 64 >>> 9 << 4)] = o;
        for (var i = 1732584193, n = -271733879, A = -1732584194, r = 271733878, a = i, s = n, l = A, g = r, c = 0; c < t.length; c += 16)
            a = i,
            s = n,
            l = A,
            g = r,
            i = pI(i, n, A, r, t[c], 7, -680876936),
            r = pI(r, i, n, A, t[c + 1], 12, -389564586),
            A = pI(A, r, i, n, t[c + 2], 17, 606105819),
            n = pI(n, A, r, i, t[c + 3], 22, -1044525330),
            i = pI(i, n, A, r, t[c + 4], 7, -176418897),
            r = pI(r, i, n, A, t[c + 5], 12, 1200080426),
            A = pI(A, r, i, n, t[c + 6], 17, -1473231341),
            n = pI(n, A, r, i, t[c + 7], 22, -45705983),
            i = pI(i, n, A, r, t[c + 8], 7, 1770035416),
            r = pI(r, i, n, A, t[c + 9], 12, -1958414417),
            A = pI(A, r, i, n, t[c + 10], 17, -42063),
            n = pI(n, A, r, i, t[c + 11], 22, -1990404162),
            i = pI(i, n, A, r, t[c + 12], 7, 1804603682),
            r = pI(r, i, n, A, t[c + 13], 12, -40341101),
            A = pI(A, r, i, n, t[c + 14], 17, -1502002290),
            i = vI(i, n = pI(n, A, r, i, t[c + 15], 22, 1236535329), A, r, t[c + 1], 5, -165796510),
            r = vI(r, i, n, A, t[c + 6], 9, -1069501632),
            A = vI(A, r, i, n, t[c + 11], 14, 643717713),
            n = vI(n, A, r, i, t[c], 20, -373897302),
            i = vI(i, n, A, r, t[c + 5], 5, -701558691),
            r = vI(r, i, n, A, t[c + 10], 9, 38016083),
            A = vI(A, r, i, n, t[c + 15], 14, -660478335),
            n = vI(n, A, r, i, t[c + 4], 20, -405537848),
            i = vI(i, n, A, r, t[c + 9], 5, 568446438),
            r = vI(r, i, n, A, t[c + 14], 9, -1019803690),
            A = vI(A, r, i, n, t[c + 3], 14, -187363961),
            n = vI(n, A, r, i, t[c + 8], 20, 1163531501),
            i = vI(i, n, A, r, t[c + 13], 5, -1444681467),
            r = vI(r, i, n, A, t[c + 2], 9, -51403784),
            A = vI(A, r, i, n, t[c + 7], 14, 1735328473),
            i = fI(i, n = vI(n, A, r, i, t[c + 12], 20, -1926607734), A, r, t[c + 5], 4, -378558),
            r = fI(r, i, n, A, t[c + 8], 11, -2022574463),
            A = fI(A, r, i, n, t[c + 11], 16, 1839030562),
            n = fI(n, A, r, i, t[c + 14], 23, -35309556),
            i = fI(i, n, A, r, t[c + 1], 4, -1530992060),
            r = fI(r, i, n, A, t[c + 4], 11, 1272893353),
            A = fI(A, r, i, n, t[c + 7], 16, -155497632),
            n = fI(n, A, r, i, t[c + 10], 23, -1094730640),
            i = fI(i, n, A, r, t[c + 13], 4, 681279174),
            r = fI(r, i, n, A, t[c], 11, -358537222),
            A = fI(A, r, i, n, t[c + 3], 16, -722521979),
            n = fI(n, A, r, i, t[c + 6], 23, 76029189),
            i = fI(i, n, A, r, t[c + 9], 4, -640364487),
            r = fI(r, i, n, A, t[c + 12], 11, -421815835),
            A = fI(A, r, i, n, t[c + 15], 16, 530742520),
            i = II(i, n = fI(n, A, r, i, t[c + 2], 23, -995338651), A, r, t[c], 6, -198630844),
            r = II(r, i, n, A, t[c + 7], 10, 1126891415),
            A = II(A, r, i, n, t[c + 14], 15, -1416354905),
            n = II(n, A, r, i, t[c + 5], 21, -57434055),
            i = II(i, n, A, r, t[c + 12], 6, 1700485571),
            r = II(r, i, n, A, t[c + 3], 10, -1894986606),
            A = II(A, r, i, n, t[c + 10], 15, -1051523),
            n = II(n, A, r, i, t[c + 1], 21, -2054922799),
            i = II(i, n, A, r, t[c + 8], 6, 1873313359),
            r = II(r, i, n, A, t[c + 15], 10, -30611744),
            A = II(A, r, i, n, t[c + 6], 15, -1560198380),
            n = II(n, A, r, i, t[c + 13], 21, 1309151649),
            i = II(i, n, A, r, t[c + 4], 6, -145523070),
            r = II(r, i, n, A, t[c + 11], 10, -1120210379),
            A = II(A, r, i, n, t[c + 2], 15, 718787259),
            n = II(n, A, r, i, t[c + 9], 21, -343485551),
            i = yI(i, a),
            n = yI(n, s),
            A = yI(A, l),
            r = yI(r, g);
        return function(e) {
            for (var t = "0123456789abcdef", o = "", i = 0; i < e.length; i += 1) {
                var n = e.charCodeAt(i);
                o += t.charAt(n >>> 4 & 15) + t.charAt(15 & n)
            }
            return o
        }(function(e) {
            for (var t = "", o = 32 * e.length, i = 0; i < o; i += 8)
                t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
            return t
        }([i, n, A, r]))
    }
    function hI(e, t, o, i, n, A) {
        return yI((r = yI(yI(t, e), yI(i, A))) << (a = n) | r >>> 32 - a, o);
        var r, a
    }
    function pI(e, t, o, i, n, A, r) {
        return hI(t & o | ~t & i, e, t, n, A, r)
    }
    function vI(e, t, o, i, n, A, r) {
        return hI(t & i | o & ~i, e, t, n, A, r)
    }
    function fI(e, t, o, i, n, A, r) {
        return hI(t ^ o ^ i, e, t, n, A, r)
    }
    function II(e, t, o, i, n, A, r) {
        return hI(o ^ (t | ~i), e, t, n, A, r)
    }
    function yI(e, t) {
        var o = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (o >> 16) << 16 | 65535 & o
    }
    var CI, mI = .001, QI = ((cI = {
        3e3: 2e3,
        2e4: 15e3,
        12e4: 3e4,
        12e5: 6e4
    })[1 / 0] = 3e5,
    cI), wI = {
        uin: "",
        vid: Nc.vid,
        coverid: Nc.cid,
        pid: Nc.flowid,
        guid: Nc.guid,
        cmid: Nc.guid,
        unid: "",
        vt: Nc.cdnid,
        type: "",
        bi: Nc.duration,
        bt: "",
        version: Nc.playerver,
        platform: Nc.platform,
        format: Nc.fmt,
        defn: Nc.currentDefn,
        ptag: "",
        isvip: Nc.vip,
        tpid: "",
        pversion: "",
        hc_uin: "",
        hc_main_login: Nc.hc_main_login,
        hc_vuserid: Nc.hc_vuserid,
        hc_openid: Nc.hc_openid,
        hc_appid: Nc.hc_appid,
        hc_access_token: Nc.hc_access_token,
        hc_pvid: "",
        hc_ssid: "",
        hc_qq: "",
        ua: Nc.ua,
        hh_ua: Nc.ua,
        ckey: "",
        ckeyVer: "",
        iformat: Nc.fmt,
        hh_ref: Nc.topUrl,
        vurl: "",
        v_idx: "",
        rcd_info: "",
        extrainfo: "",
        bucket_id: Nc.testid,
        drm: Nc.drm,
        pay_type: "",
        pcplatform: "",
        drmtype: Nc.drmtype,
        insert_duration_ms: "",
        insert_flowid: "",
        vip_token: "",
        common_rcd_info: "",
        common_ext_info: "",
        common_json_info: "",
        qimei36: "",
        format_ua: "",
        triggerplay: "",
        tpay: "",
        cpay: "",
        dltype: Nc.dltype,
        cginame: "",
        vtype: "",
        p2pVer: Nc.p2pver,
        playertype: Nc.playertype,
        start_play_position: "",
        end_play_position: "",
        is_auto_play: "",
        randoms: "",
        h38: Nc.qimeiH38,
        uskey: Nc.uskey
    }, TI = function(t) {
        function o(o, i, n) {
            var A = t.call(this, o, i, n) || this;
            A.FLOW_DATA_KEY = "__thumbplayer_vod_flow_report__",
            A.UNSAFE_KEY = ["hh_ref", "vurl"],
            A.startPlayTime = 0,
            A.actualPlayTime = 0,
            A.lastPlayTimeStamp = 0,
            A.lastStep8PlayTime = 0,
            A.lastStep9PlayTime = 0,
            A.step8Seq = 0,
            A.firstLoadCost = 0,
            A.playStartPosition = 0,
            A.playEndPosition = 0,
            A.paused = !1,
            A.setEvtHandler = function() {
                A.msg.on(e.PLAY_EVENT_EXT.DATASET_STATE_UPDATE, A.onDataStateChange),
                A.player.on(e.H5_PLAY_EVENT.VIDEO_PLAYING, A.onFirstPlay),
                A.player.on(e.H5_PLAY_EVENT.AD_PLAYING, A.onAdPlaying),
                A.player.on(e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, A.onVideoTimeUpdate),
                A.player.on(e.PLAY_EVENT.STATE_CHANGE, A.onCoreStateChange),
                window.addEventListener("pagehide", A.onPageHide)
            }
            ,
            A.onPageHide = function() {
                var e;
                if ((null === (e = A.player) || void 0 === e ? void 0 : e.getCommonKv(Nc.flowid)) && !A.reportedEvt.step5) {
                    var t = A.collectDataForStep5(SI.interrupt);
                    "function" != typeof A.config.onBeforeReport ? A.handlePageHide(t) : A.handlePageHide(A.config.onBeforeReport(t))
                }
            }
            ,
            A.onAdPlaying = function() {
                A.step7()
            }
            ,
            A.onDatasetFirstPlay = function(e) {
                e.newVal.isContiguous && A.onFirstPlay({
                    data: {
                        isFirst: !0
                    }
                })
            }
            ,
            A.onFirstPlay = function(e) {
                e.data.isFirst && (A.lastPlayTimeStamp || (A.lastPlayTimeStamp = Date.now()),
                A.reportFirstPlaying())
            }
            ,
            A.reportFirstPlaying = function() {
                if (!A.reportedEvt.step6) {
                    A.reportedEvt.step6 = !0,
                    A.playStartPosition = A.player.playtime,
                    A.startPlayTime = Date.now();
                    var e = {
                        step: "6",
                        val: eI(A.firstLoadCost),
                        val1: A.reportedEvt.step7 ? 0 : 1,
                        val2: 1,
                        bi: 0,
                        bt: eI(A.player.getCommonKv(Nc.duration), !0)
                    };
                    A.report(e)
                }
            }
            ,
            A.onCoreStateChange = function(t) {
                var o = t.data
                  , i = o.new
                  , n = o.old
                  , r = Date.now();
                switch (i) {
                case e.VIDEO_STATE.PLAYING:
                    n !== e.VIDEO_STATE.PAUSE && n !== e.VIDEO_STATE.CANPLAY || (A.lastPlayTimeStamp = r),
                    A.paused = !1;
                    break;
                case e.VIDEO_STATE.IDLE:
                case e.VIDEO_STATE.END:
                case e.VIDEO_STATE.PAUSE:
                    i === e.VIDEO_STATE.PAUSE && (A.paused = !0),
                    n === e.VIDEO_STATE.PLAYING && A.lastPlayTimeStamp && (A.actualPlayTime += r - A.lastPlayTimeStamp)
                }
                i === e.VIDEO_STATE.PAUSE && A.step9()
            }
            ,
            A.onVideoTimeUpdate = function() {
                A.step8(),
                A.playEndPosition = A.player.playtime
            }
            ,
            A.onDataStateChange = function(t) {
                var o, i = t.data, n = i.key, r = ((o = {})[e.DATA_STATE.GET_INFO_END] = A.step4,
                o[e.DATA_STATE.SESSION_END] = A.step5,
                o[e.DATA_STATE.LOAD_END] = A.onLoaded,
                o[e.DATA_STATE.SESSION_START] = A.onSessionStart,
                o[e.DATA_STATE.FIRST_PLAY] = A.onDatasetFirstPlay,
                o);
                r[n] && r[n](i)
            }
            ,
            A.onLoaded = function(e) {
                var t = e.startEvent
                  , o = e.newVal;
                A.firstLoadCost = o.ftime - (null == t ? void 0 : t.ftime)
            }
            ,
            A.onSessionStart = function() {
                A.paused = !1,
                A.actualPlayTime = 0,
                A.firstLoadCost = 0,
                A.lastPlayTimeStamp = 0,
                A.startPlayTime = 0,
                A.lastStep8PlayTime = 0,
                A.lastStep9PlayTime = 0,
                A.reportedEvt = {},
                A.reportPrev(),
                A.step3()
            }
            ,
            A.step3 = function() {
                var e = {
                    step: "3",
                    val: 0 === A.player.currentVideoInfoIdx ? 1 : 2
                };
                A.report(e)
            }
            ,
            A.step7 = function() {
                A.reportedEvt.step7 || (A.reportedEvt.step7 = !0,
                A.report({
                    step: "7",
                    val: 0,
                    val1: 0
                }))
            }
            ,
            A.step4 = function() {
                if (!A.reportedEvt.step4) {
                    A.reportedEvt.step4 = !0;
                    var e = {
                        step: "4",
                        val: 1,
                        val1: 1,
                        bi: sd.pluginExists(Sg) ? 2 : 1
                    };
                    A.report(e)
                }
            }
            ,
            A.collectDataForStep5 = function(e) {
                var t = Date.now()
                  , o = A.startPlayTime ? t - A.startPlayTime : 0
                  , i = A.calculateActualPlayTime(e);
                return {
                    step: "5",
                    val: eI(o, !0),
                    val1: e,
                    bi: eI(i * mI, !0),
                    bt: eI(A.player.getCommonKv(Nc.duration), !0)
                }
            }
            ,
            A.step5 = function(t) {
                if (!A.reportedEvt.step5) {
                    A.reportedEvt.step5 = !0;
                    var o = t.newVal.code === e.ErrorCode.SUC ? SI.finish : SI.interrupt
                      , i = A.collectDataForStep5(o);
                    A.report(i),
                    A.step8(o),
                    A.step9(!0)
                }
            }
            ,
            A.step8 = function(e) {
                if (A.lastPlayTimeStamp) {
                    var t = Date.now()
                      , o = A.calculateActualPlayTime(e)
                      , i = +Object.keys(QI).find((function(e) {
                        return o < +e
                    }
                    ))
                      , n = o - A.lastStep8PlayTime;
                    if (e || n >= QI[i]) {
                        var r = {
                            step: "8",
                            val: eI(t - A.startPlayTime),
                            val1: e ? 1 : 4,
                            bi: eI(o * mI, !0),
                            bt: eI(A.player.getCommonKv(Nc.duration), !0),
                            insert_duration_ms: n
                        };
                        A.lastStep8PlayTime = o,
                        A.step8Seq += 1,
                        A.report(r)
                    }
                }
            }
            ,
            A.step9 = function(e) {
                if (void 0 === e && (e = !1),
                A.lastPlayTimeStamp && A.lastPlayTimeStamp !== A.lastStep9PlayTime) {
                    var t = {
                        step: "9",
                        val: eI((Date.now() - A.lastPlayTimeStamp) * mI, !0),
                        val1: e ? 1 : 4,
                        val2: 1,
                        bt: eI(A.player.getCommonKv(Nc.duration), !0)
                    };
                    A.report(t),
                    A.lastStep9PlayTime = A.lastPlayTimeStamp
                }
            }
            ;
            var r = o.config.vodFlowReporterConfig;
            (null == r ? void 0 : r.releaseDelay) && (A.RELEASE_DELAY = r.releaseDelay);
            var a = is.mobile ? {
                id: PI,
                token: FI
            } : {
                id: _I,
                token: DI
            }
              , s = a.id
              , l = a.token;
            A.reporterForPageHide = tI;
            var g = r || {}
              , c = g.id
              , u = g.token
              , E = g.devicePlatform
              , d = g.serviceURL
              , B = g.paramsKey
              , h = g.onBeforeReport
              , p = g.onAfterReport
              , v = g.forceImage
              , f = g.identifierWhenForceReport;
            return A.REPORT_URL = null != d ? d : "https://h.trace.qq.com/bosskv?",
            A.config = {
                paramsKey: S(S({}, wI), B || {}),
                onBeforeReport: h,
                onAfterReport: p,
                forceImage: v,
                id: null != c ? c : s,
                token: null != u ? u : l,
                devicePlatform: null != E ? E : is.mobile ? "mobile" : "desktop",
                forceReport: !1,
                identifierWhenForceReport: ""
            },
            A.checkForceReportConfig(r) && (A.config.forceReport = !0,
            A.config.identifierWhenForceReport = f,
            A.log("force report is enabled, vid will be reported as ".concat(f))),
            A.setEvtHandler(),
            A
        }
        return T(o, t),
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e, t, o, i, n, A, r = this.player, a = r.getCommonKv, s = r.dataset, l = r.currentVideoInfoIdx, g = r.videoSize, c = void 0 === g ? {
                    width: 0,
                    height: 0
                } : g, u = c.width, E = c.height, d = this.config, B = d.paramsKey, h = d.devicePlatform, p = s.visualStats, v = p.isPlayerInViewport, f = p.isTabFocused, I = (null === (e = this.player.currentVideoInfo) || void 0 === e ? void 0 : e.loadingUrl) || a(B.vurl), y = {
                    uin: this.getKvWithDefault(B.uin, Zf()),
                    vid: this.getKvWithDefault(B.vid, ""),
                    coverid: this.getKvWithDefault(B.coverid, ""),
                    pid: this.getKvWithDefault(B.pid, ""),
                    guid: this.getKvWithDefault(B.guid, ""),
                    cmid: this.getKvWithDefault(B.guid, ""),
                    unid: this.getKvWithDefault(B.unid, ""),
                    vt: this.getKvWithDefault(B.vt, ""),
                    type: this.getKvWithDefault(B.type, ""),
                    bi: this.getKvWithDefault(B.bi, 0),
                    bt: this.getKvWithDefault(B.bt, 0),
                    val: 0,
                    val1: 0,
                    val2: 0,
                    version: this.getKvWithDefault(B.version, ""),
                    platform: this.getKvWithDefault(B.platform, ""),
                    format: this.getKvWithDefault(B.format, ""),
                    defn: this.getKvWithDefault(B.defn, ""),
                    ptag: this.getKvWithDefault(B.ptag, $f()),
                    isvip: this.getKvWithDefault(B.isvip, -1),
                    tpid: this.getKvWithDefault(B.tpid, ""),
                    pversion: "thumbplayer",
                    hc_uin: this.getKvWithDefault(B.hc_uin, Zf()),
                    hc_main_login: (A = a(B.hc_main_login),
                    A ? "phone" === A ? "ph" : A : ""),
                    hc_vuserid: this.getKvWithDefault(B.hc_vuserid, ""),
                    hc_openid: this.getKvWithDefault(B.hc_openid, ""),
                    hc_appid: this.getKvWithDefault(B.hc_appid, ""),
                    hc_pvid: this.getKvWithDefault(B.hc_pvid, Xa.get("pgv_pvid")),
                    hc_ssid: this.getKvWithDefault(B.hc_ssid, ""),
                    hc_qq: this.getKvWithDefault(B.hc_qq, ""),
                    hc_access_token: this.getKvWithDefault(B.hc_access_token, ""),
                    ua: this.getKvWithDefault(B.ua, ""),
                    hh_ua: this.getKvWithDefault(B.hh_ua, ""),
                    ckey: this.getKvWithDefault(B.ckey, ""),
                    iformat: this.getKvWithDefault(B.iformat, ""),
                    hh_ref: this.getKvWithDefault(B.hh_ref, ""),
                    rcd_info: this.getKvWithDefault(B.rcd_info, ""),
                    extrainfo: this.getKvWithDefault(B.extrainfo, ""),
                    bucket_id: this.getKvWithDefault(B.bucket_id, ""),
                    pay_type: this.getKvWithDefault(B.pay_type, 0),
                    idx: l || 0,
                    diagonal: Math.round(Math.sqrt(Math.pow(u, 2) + Math.pow(E, 2))),
                    vurl: (null === (o = null === (t = this.player.config) || void 0 === t ? void 0 : t.vodFlowReporterConfig) || void 0 === o ? void 0 : o.obfuscate) ? null === (i = ts.obfuscatePathComponent) || void 0 === i ? void 0 : i.call(ts, I) : I,
                    v_idx: this.player.currentVideoInfoIdx || 0,
                    ctime: os.dateFormat(void 0, void 0),
                    url: document.URL,
                    ref_url: document.referrer,
                    attaid: this.config.id,
                    token: this.config.token,
                    isfocustab: f,
                    isvisible: v,
                    format_ua: this.getKvWithDefault(B.format_ua, oI()),
                    pcplatform: this.getKvWithDefault(B.pcplatform, "web"),
                    drm: a(B.drm) ? 1 : 0,
                    insert_flowid: this.step8Seq,
                    vip_token: this.getKvWithDefault(B.vip_token, 0),
                    tpay: this.getKvWithDefault(B.tpay, 0),
                    kernel: this.player.kernelName || "",
                    drmtype: this.getKvWithDefault(B.drmtype, 0)
                };
                return "mobile" === h && (y.common_rcd_info = this.getKvWithDefault(B.common_rcd_info, ""),
                y.common_ext_info = this.getKvWithDefault(B.common_ext_info, ""),
                y.common_json_info = this.getKvWithDefault(B.common_json_info, ""),
                y.qimei36 = this.getKvWithDefault(B.qimei36, "")),
                "desktop" !== h && "ott" !== h || (y.triggerplay = null !== (n = a(B.triggerplay)) && void 0 !== n ? n : 1,
                y.cpay = this.getKvWithDefault(B.cpay, 0),
                y.dltype = this.getKvWithDefault(B.dltype, 0),
                y.cginame = this.getKvWithDefault(B.cginame, ""),
                y.vtype = this.getKvWithDefault(B.vtype, ""),
                y.ckeyVer = this.getKvWithDefault(B.ckeyVer, ""),
                y.p2pVer = this.getKvWithDefault(B.p2pVer, ""),
                y.playertype = this.getKvWithDefault(B.playertype, ""),
                y.sdk_extrainfo = za.safelyStringify({
                    play_start_position: this.playStartPosition,
                    play_end_position: this.playEndPosition,
                    is_auto_play: this.getKvWithDefault(B.is_auto_play, 1),
                    randoms: BI("".concat(y.guid).concat(y.pid)),
                    uskey: this.getKvWithDefault(B.uskey, "")
                }),
                y.h38 = this.getKvWithDefault(B.h38, "")),
                y
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.destroy = function() {
            window.removeEventListener("pagehide", this.onPageHide),
            t.prototype.destroy.call(this)
        }
        ,
        o.prototype.report = function(e) {
            var o;
            if (o = this.getVidForReport()) {
                var i = S(S({}, e), {
                    vid: o
                });
                return "function" == typeof this.config.onBeforeReport ? t.prototype.report.call(this, this.config.onBeforeReport(i)) : t.prototype.report.call(this, i)
            }
        }
        ,
        o.prototype.getVidForReport = function() {
            var e = this.config.identifierWhenForceReport;
            return this.player.getCommonKv(Nc.vid) || e
        }
        ,
        o.prototype.calculateActualPlayTime = function(e) {
            void 0 === e && (e = SI.interrupt);
            var t = this.lastPlayTimeStamp > 0 ? Date.now() - this.lastPlayTimeStamp : 0;
            return e === SI.finish ? this.actualPlayTime : this.actualPlayTime + (this.paused ? 0 : t)
        }
        ,
        o.prototype.checkForceReportConfig = function(e) {
            void 0 === e && (e = {});
            var t = e.forceReport
              , o = e.identifierWhenForceReport;
            return !(!t || !o && (this.warn("forceReport is true, but identifierWhenForceReport is not set, please check"),
            1))
        }
        ,
        o.pluginName = "vod-flow-reporter",
        o
    }(kE), SI = {
        interrupt: 2,
        finish: 1
    }, _I = "z4900004298", DI = "4973349567", PI = "z3000002865", FI = "4135796792", LI = ((CI = {}).gpu = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, +!!navigator.gpu]
            }
            ))
        }
        ))
    }
    ,
    CI.concurrency = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, navigator.hardwareConcurrency || -1]
            }
            ))
        }
        ))
    }
    ,
    CI.memory = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, navigator.deviceMemory || -1]
            }
            ))
        }
        ))
    }
    ,
    CI.hdr = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, ja.isHDRSupported()]
            }
            ))
        }
        ))
    }
    ,
    CI.hevclv = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, ja.supportHevc() ? 28 : 0]
            }
            ))
        }
        ))
    }
    ,
    CI.wasm = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, +ja.isWasmSupported()]
            }
            ))
        }
        ))
    }
    ,
    CI["wasm-simd"] = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, +ja.isSimdSupported()]
            }
            ))
        }
        ))
    }
    ,
    CI.hwacc = function() {
        return P(void 0, void 0, void 0, (function() {
            return F(this, (function(e) {
                return [2, +ja.isHardwareAccelerated()]
            }
            ))
        }
        ))
    }
    ,
    CI), YI = "__tp-browser-features", RI = function() {
        function e() {}
        return e.enable = function() {
            this.enabled = !0
        }
        ,
        e.toReportObject = function() {
            if (!this.enabled)
                return {};
            var e = this.cache;
            return e.expire,
            function(e, t) {
                var o = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (o[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
                        t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (o[i[n]] = e[i[n]])
                }
                return o
            }(e, ["expire"])
        }
        ,
        e.detect = function() {
            return P(this, void 0, void 0, (function() {
                var e, t, o = this;
                return F(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return t = (e = this).detectionMethods,
                        !e.enabled || this.cache.expire > Date.now() ? [2] : [4, Promise.all(Object.keys(t).map((function(e) {
                            return P(o, void 0, void 0, (function() {
                                var o;
                                return F(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]),
                                        [4, t[e]()];
                                    case 1:
                                        return o = i.sent(),
                                        this.cache[e] = o,
                                        [3, 3];
                                    case 2:
                                        return i.sent(),
                                        [3, 3];
                                    case 3:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )))];
                    case 1:
                        return i.sent(),
                        this.cache.expire = Date.now() + 864e5,
                        Va.setData(YI, za.safelyStringify(this.cache)),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.configure = function(e, t) {
            this.detectionMethods[e] = t
        }
        ,
        e.readOrInitialize = function() {
            try {
                var e = JSON.parse(YI);
                if (e.expire < Date.now())
                    throw new Error("expired");
                return e
            } catch (e) {
                return S(S({}, function() {
                    var e, t;
                    return {
                        brand: null === (e = is.browser) || void 0 === e ? void 0 : e.browserName,
                        version: null === (t = is.browser) || void 0 === t ? void 0 : t.version
                    }
                }()), {
                    expire: 0
                })
            }
        }
        ,
        e.enabled = !1,
        e.cache = e.readOrInitialize(),
        e.detectionMethods = S({}, LI),
        e
    }(), bI = function(t) {
        function o(o, i, n) {
            var A, r, a, s, l, g, c = t.call(this, o, i, n) || this;
            c.seq = 0,
            c.videoInfoParams = {
                dltype: -1,
                defn: "",
                duration: 0,
                type: 0,
                clip: 0,
                status: 0
            },
            c.getinfoStartTime = null,
            c.getinfoEndTime = null,
            c.bufferReportCached = [],
            c.seekReportCached = [],
            c.playEndPosition = 0,
            c.playStartPosition = 0,
            c.videoFirstFrameTime = 0,
            c.lastFmtId = 0,
            c.reported = {},
            c.playDuration = 0,
            c.widevineSupportLevel = HI.none,
            c.performanceMetrics = null,
            c.onPageHide = function() {
                c.player.state !== e.VIDEO_STATE.IDLE && c.handlePageHide({
                    step: "50",
                    data: za.safelyStringify(S(S({}, c.prepareStep50Data()), {
                        reason: 2,
                        code: "0.0"
                    }))
                })
            }
            ,
            c.onDataSetStateUpdate = function(t) {
                var o, i = t.data.key, n = ((o = {})[e.DATA_STATE.LOAD_END] = c.step30,
                o[e.DATA_STATE.SET_LEVEL_END] = c.step45,
                o[e.DATA_STATE.BUFFER_END] = c.recordStep35,
                o[e.DATA_STATE.SEEK_END] = c.recordStep40,
                o[e.DATA_STATE.SUBTITLE_END] = c.step33,
                o[e.DATA_STATE.SESSION_END] = c.onDatasetSessionEnd,
                o);
                n[i] && n[i].call(c, t)
            }
            ,
            c.onPerformanceMetricsUpdate = function(e) {
                var t;
                c.performanceMetrics = null === (t = e.data) || void 0 === t ? void 0 : t.performanceMetrics
            }
            ,
            c.onGetinfoOver = function(e) {
                var t, o, i, n, A = e.data, r = A.parseData, a = A.resData, s = A.startTime, l = void 0 === s ? 0 : s, g = A.endTime, u = void 0 === g ? 0 : g, E = r || {}, d = E.definitionList, B = void 0 === d ? [] : d, h = E.vitem, p = void 0 === h ? {} : h, v = E.duration, f = void 0 === v ? 0 : v, I = p.fc, y = void 0 === I ? 0 : I, C = p.br, m = void 0 === C ? 0 : C, Q = p.vst, w = void 0 === Q ? 0 : Q, T = p.type, S = void 0 === T ? 0 : T, _ = (a || {}).dltype, D = void 0 === _ ? -1 : _, P = null == B ? void 0 : B.find((function(e) {
                    return e.sl
                }
                ));
                c.videoInfoParams = {
                    defn: null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : "",
                    dltype: D,
                    duration: f,
                    type: S,
                    clip: y,
                    status: w
                },
                c.firstLoadVideoInfoParam || (c.firstLoadVideoInfoParam = {
                    fmt: null !== (o = null == P ? void 0 : P.id) && void 0 !== o ? o : -1,
                    rate: m
                }),
                c.rawGetinfoData = a,
                null !== (i = c.getinfoStartTime) && void 0 !== i || (c.getinfoStartTime = l),
                null !== (n = c.getinfoEndTime) && void 0 !== n || (c.getinfoEndTime = u)
            }
            ,
            c.onVideoSetLevelStart = function() {
                c.lastFmtId = c.currentFmtId,
                c.reportStep35and40()
            }
            ,
            c.onVideoTimeUpdate = function() {
                c.playEndPosition = c.player.playtime,
                c.playDuration = Math.max(c.playDuration, c.player.dataset.getStats().playDuration)
            }
            ,
            c.onVideoLoadStart = function() {
                RI.detect(),
                c.performanceMetrics = null
            }
            ,
            c.onVideoFirstPlaying = function(e) {
                e.data.isFirst && (c.videoFirstFrameTime = Date.now())
            }
            ,
            c.onDatasetSessionEnd = function(t) {
                t.data.newVal.isContiguous && c.step50({
                    data: {
                        code: e.ErrorCode.SUC,
                        endState: e.END_STATE.NORMAL
                    }
                })
            }
            ,
            c.step50 = function(t) {
                if (!c.reported[50]) {
                    c.reported[50] = !0;
                    var o = t.data
                      , i = o.code
                      , n = o.endState;
                    c.report({
                        step: "50",
                        data: za.safelyStringify(S(S({}, c.prepareStep50Data()), {
                            reason: n === e.END_STATE.NORMAL ? 0 : 1,
                            code: "0.".concat(KI(i))
                        }))
                    }),
                    c.reportStep35and40(),
                    c.cleanUp()
                }
            }
            ,
            c.collectWidevineSupport(),
            c.keyMapping = S(S({}, kI), null === (A = o.config.vodFlyReporterConfig) || void 0 === A ? void 0 : A.paramsKey),
            c.signer = null !== (a = null === (r = o.config.vodFlyReporterConfig) || void 0 === r ? void 0 : r.signer) && void 0 !== a ? a : function() {
                return P(c, void 0, void 0, (function() {
                    return F(this, (function(e) {
                        return [2, {}]
                    }
                    ))
                }
                ))
            }
            ;
            var u = null === (s = o.config.vodFlyReporterConfig) || void 0 === s ? void 0 : s.isOversea
              , E = {
                appKey: u ? lI : sI,
                isOversea: u
            };
            return c.REPORT_KEY = E.appKey,
            c.config.onAfterReport = null === (l = o.config.vodFlyReporterConfig) || void 0 === l ? void 0 : l.onAfterReport,
            c.config.onBeforeReport = null === (g = o.config.vodFlyReporterConfig) || void 0 === g ? void 0 : g.onBeforeReport,
            c.bindEventHandlers(),
            GE.register(E),
            c.reporterForPageHide = GE.reportWhenPageHide,
            c.reporter = GE.report,
            c
        }
        return T(o, t),
        o.prototype.destroy = function() {
            this.unbindEventHandlers(),
            t.prototype.destroy.call(this)
        }
        ,
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e, t, o = this, i = Object.keys(this.keyMapping).reduce((function(e, t) {
                    return o.keyMapping[t] && (e[t] = o.player.getCommonKv(o.keyMapping[t]) || ""),
                    e
                }
                ), {});
                return S(S(S(S({}, i), this.videoInfoParams), this.firstLoadVideoInfoParam), {
                    widevinelevel: this.widevineSupportLevel,
                    proto: (null === (t = null === (e = this.player.currentVideoInfo) || void 0 === e ? void 0 : e.performance) || void 0 === t ? void 0 : t.protocol) || "",
                    downloadkit: +!!this.player.config.enableP2P,
                    seq: this.seq,
                    stepname: UI
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.report = function(e) {
            var t = this;
            if (this.player.getCommonKv(Nc.vid) && !is.spider) {
                var o = S(S({}, this.reportHeader), e);
                this.signer(o).then((function(e) {
                    t.reporter({
                        data: S(S({}, o), e),
                        url: t.REPORT_URL,
                        key: t.REPORT_KEY
                    }),
                    t.seq += 1
                }
                ))
            }
        }
        ,
        Object.defineProperty(o.prototype, "currentUrlInfo", {
            get: function() {
                var e, t, o;
                if (!this.player.currentVideoInfo || !this.rawGetinfoData)
                    return [-1, null];
                var i = (null === (o = null === (t = null === (e = this.rawGetinfoData.vl) || void 0 === e ? void 0 : e.vi[0]) || void 0 === t ? void 0 : t.ul) || void 0 === o ? void 0 : o.ui) || []
                  , n = ts.getDomainOfURL(this.player.currentVideoInfo.loadingUrl)
                  , A = null == i ? void 0 : i.findIndex((function(e) {
                    return ts.getDomainOfURL(e.url) === n
                }
                ));
                return [A, i[A]]
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(o.prototype, "currentFmtId", {
            get: function() {
                var e, t, o, i;
                return this.rawGetinfoData && null !== (i = null === (o = null === (t = null === (e = this.rawGetinfoData.fl) || void 0 === e ? void 0 : e.fi) || void 0 === t ? void 0 : t.find((function(e) {
                    return e.sl
                }
                ))) || void 0 === o ? void 0 : o.id) && void 0 !== i ? i : 0
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.bindEventHandlers = function() {
            this.msg.on(e.PLAY_EVENT_EXT.DATASET_STATE_UPDATE, this.onDataSetStateUpdate),
            this.msg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetinfoOver),
            this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.step50),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_LOAD_START, this.onVideoLoadStart),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoFirstPlaying),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, this.onVideoTimeUpdate),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.onVideoSetLevelStart),
            this.player.on(e.PLAY_EVENT.PERFORMANCE_METRICS_UPDATE, this.onPerformanceMetricsUpdate),
            window.addEventListener("pagehide", this.onPageHide)
        }
        ,
        o.prototype.unbindEventHandlers = function() {
            this.msg.off(e.PLAY_EVENT_EXT.DATASET_STATE_UPDATE, this.onDataSetStateUpdate),
            this.msg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetinfoOver),
            this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.step50),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_LOAD_START, this.onVideoLoadStart),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoFirstPlaying),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, this.onVideoTimeUpdate),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.onVideoSetLevelStart),
            this.player.off(e.PLAY_EVENT.PERFORMANCE_METRICS_UPDATE, this.onPerformanceMetricsUpdate),
            window.removeEventListener("pagehide", this.onPageHide)
        }
        ,
        o.prototype.collectWidevineSupport = function() {
            return P(this, void 0, void 0, (function() {
                return F(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return is.mobile ? [2] : [4, ja.isEncryptionSupported(WA.WidevineHardware)];
                    case 1:
                        return e.sent() ? (this.widevineSupportLevel = HI.l1,
                        [2]) : [4, ja.isEncryptionSupported(WA.Widevine)];
                    case 2:
                        return e.sent() ? (this.widevineSupportLevel = HI.l3,
                        [2]) : [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        o.prototype.step30 = function(e) {
            var t;
            if (!this.reported[30]) {
                this.reported[30] = !0;
                var o = e.data
                  , i = o.newVal
                  , n = o.startEvent
                  , A = n.ftime
                  , r = n.currentUrl
                  , a = i.ftime
                  , s = this.currentUrlInfo
                  , l = s[0]
                  , g = s[1]
                  , c = null == g ? void 0 : g.vt;
                this.playStartPosition = this.player.playtime,
                this.report({
                    step: "30",
                    data: za.safelyStringify(S({
                        stime: A,
                        etime: a,
                        pstime: this.playStartPosition,
                        vt: c,
                        urlindex: l,
                        reason: "",
                        code: "0.".concat(null !== (t = i.code) && void 0 !== t ? t : 0),
                        url: r
                    }, RI.toReportObject()))
                })
            }
        }
        ,
        o.prototype.step33 = function(e) {
            var t = e.data.newVal.ext;
            this.report({
                step: "33",
                data: za.safelyStringify(t)
            })
        }
        ,
        o.prototype.recordStep35 = function(e) {
            var t, o = e.data, i = o.newVal, n = o.startEvent, A = n.ftime, r = n.playbackRate, a = n.playtime, s = i.ftime, l = i.currentUrl, g = 1 !== r ? 2 : 1;
            this.bufferReportCached.push({
                stime: A,
                etime: s,
                ptime: a,
                format: this.currentFmtId,
                url: l,
                scene: g,
                reason: 0,
                code: "0.".concat(null !== (t = i.code) && void 0 !== t ? t : 0)
            })
        }
        ,
        o.prototype.recordStep40 = function(e) {
            var t, o = e.data, i = o.newVal, n = o.startEvent, A = n.ftime, r = n.playtime, a = i.ftime, s = i.playtime;
            this.seekReportCached.push({
                lstime: A,
                letime: a,
                pstime: r,
                petime: s,
                format: this.currentFmtId,
                code: "0.".concat(null !== (t = i.code) && void 0 !== t ? t : 0)
            })
        }
        ,
        o.prototype.step45 = function(e) {
            var t, o = e.data, i = o.newVal, n = o.startEvent, A = n.ftime, r = n.ext, a = n.playtime, s = i.ftime, l = i.playtime, g = i.currentUrl, c = r.mode, u = this.currentUrlInfo, E = u[0], d = u[1], B = null == d ? void 0 : d.vt;
            this.report({
                step: "45",
                data: za.safelyStringify({
                    stime: c === ra.SMOOTH ? s : A,
                    etime: s,
                    pstime: a,
                    petime: l,
                    auto: 1,
                    prefmt: this.lastFmtId,
                    postftm: this.currentFmtId,
                    url: g,
                    vt: B,
                    urlindex: E,
                    code: "0.".concat(null !== (t = i.code) && void 0 !== t ? t : 0)
                })
            })
        }
        ,
        o.prototype.reportStep35and40 = function() {
            var e = this.bufferReportCached
              , t = this.seekReportCached;
            if (e.length) {
                var o = e.reduce((function(e, t) {
                    return t.etime - t.stime <= MI ? e : [e[0] + 1, e[1] + (t.etime - t.stime)]
                }
                ), [0, 0])
                  , i = o[0]
                  , n = o[1];
                this.report({
                    step: "35",
                    data: za.safelyStringify({
                        tcount: i,
                        tduration: n,
                        val: this.bufferReportCached.slice(0, GI)
                    })
                })
            }
            if (t.length) {
                var A = t.reduce((function(e, t) {
                    return t.letime - t.lstime <= MI ? [e[0] + 1, e[1], e[2]] : [e[0] + 1, e[1] + 1, e[2] + (t.letime - t.lstime)]
                }
                ), [0, 0, 0])
                  , r = (i = A[0],
                A[1])
                  , a = A[2];
                this.report({
                    step: "40",
                    data: za.safelyStringify({
                        tcount: i,
                        tbcount: r,
                        tbduration: a,
                        val: this.seekReportCached.slice(0, NI)
                    })
                })
            }
            this.bufferReportCached = [],
            this.seekReportCached = []
        }
        ,
        o.prototype.prepareStep50Data = function() {
            return S({
                etime: Date.now(),
                pstime: this.playStartPosition,
                petime: this.playEndPosition,
                vinfostime: this.getinfoStartTime,
                vinfoetime: this.getinfoEndTime,
                video1stframestime: this.videoFirstFrameTime,
                playduration: this.playDuration,
                metrics: this.performanceMetrics ? "frameDropCount=".concat(this.performanceMetrics.videoHighFrameDropHistory.length, ", lowFrameRateCount=").concat(this.performanceMetrics.videoLowFrameRateHistory.length) : ""
            }, RI.toReportObject())
        }
        ,
        o.prototype.cleanUp = function() {
            this.bufferReportCached = [],
            this.seekReportCached = [],
            this.rawGetinfoData = null,
            this.firstLoadVideoInfoParam = null,
            this.videoInfoParams = null,
            this.seq = 0,
            this.playEndPosition = 0,
            this.playStartPosition = 0,
            this.playDuration = 0,
            this.getinfoStartTime = null,
            this.getinfoEndTime = null,
            this.videoFirstFrameTime = 0,
            this.lastFmtId = 0,
            this.reported = {}
        }
        ,
        o.pluginName = "vod-fly-reporter",
        o
    }(kE), kI = {
        stepname: "",
        seq: "",
        vuid: Nc.hc_vuserid,
        guid: Nc.guid,
        vip: "",
        online: "",
        p2p: Nc.p2p,
        downloadkit: "",
        resolution: Nc.resolution,
        testid: Nc.testid,
        osver: Nc.osver,
        playerver: Nc.playerver,
        playertype: Nc.playertype,
        uip: Nc.uip,
        cdnip: Nc.cdnip,
        cdnid: Nc.cdnid,
        cdnuip: Nc.uip,
        freetype: "",
        network: "",
        speed: "",
        device: Nc.device,
        appver: Nc.appVer,
        p2pver: Nc.p2pver,
        flowid: Nc.flowid,
        platform: Nc.platform,
        vid: Nc.vid,
        pid: Nc.fakeLivePid,
        chid: Nc.fakeLiveChid,
        bizid: "",
        proto: "",
        widevinelevel: "",
        url: Nc.url,
        refer: Nc.referrer,
        cid: Nc.cid,
        ua: Nc.ua,
        ptag: Nc.ptag,
        dltype: "",
        fmt: "",
        rate: "",
        clip: "",
        status: "",
        type: "",
        duration: "",
        ext: "",
        drm: "",
        purevid: "",
        defn: ""
    }, GI = 20, NI = 20, MI = 1200, UI = "boss_cmd_player_quality_feitian", OI = ["".concat(e.ErrorCode.GETINFO_SERVER_CODE_PREFIX, "083")];
    function KI(t) {
        return OI.find((function(e) {
            return t.startsWith(e)
        }
        )) ? e.ErrorCode.SUC : t
    }
    var xI, VI, HI = {
        none: "None",
        l1: "L1",
        l3: "L3"
    }, jI = function(t) {
        function o(e, o, i) {
            var n = t.call(this, e, o, i) || this;
            n.REPORT_URL = "https://trace.inlong.qq.com/atta3rd/dataproxy/message",
            n.metrics = null,
            n.startContentInfo = {
                fmt: "",
                defn: ""
            },
            n.currentDecodeMode = -1,
            n.videoPlayStartTimeMs = -1,
            n.onVideoCanplay = function() {
                n.getDecodeMode(),
                n.videoPlayStartTimeMs = performance.now()
            }
            ,
            n.onMetricsUpdated = function(e) {
                var t = e.data.performanceMetrics;
                n.metrics = t
            }
            ,
            n.onGetinfoOver = function(e) {
                var t, o = (((null === (t = e.data) || void 0 === t ? void 0 : t.data) || {}).parseData || {}).definitionList, i = void 0 === o ? [] : o, A = null == i ? void 0 : i.find((function(e) {
                    return e.sl
                }
                ));
                A && (n.startContentInfo = {
                    fmt: "".concat(A.id),
                    defn: A.name
                })
            }
            ,
            n.onSessionStart = function() {
                n.metrics = null,
                n.videoPlayStartTimeMs = -1,
                n.startContentInfo = {
                    fmt: "",
                    defn: ""
                }
            }
            ,
            n.onSessionEnd = function() {
                if (n.metrics) {
                    var e = n.metrics
                      , t = e.videoTotalFrameCount
                      , o = void 0 === t ? 0 : t
                      , i = e.videoTotalDroppedFrameCount
                      , A = void 0 === i ? 0 : i
                      , r = e.videoHighFrameDropHistory
                      , a = void 0 === r ? [] : r
                      , s = e.videoLowFrameRateHistory
                      , l = void 0 === s ? [] : s;
                    n.report({
                        dav_data: za.safelyStringify({
                            dav_metrics_data: {
                                video_rendered_frame_count: o,
                                video_dropped_frame_count: A,
                                video_high_drop_frame_ratio_count: a.length,
                                video_low_frame_rate_count: l.length
                            },
                            dav_web_trace_data: n.collectWebTraceReportPayload()
                        })
                    })
                }
            }
            ;
            var A = (e.config.vodMetricsReporterConfig || {}).paramsKey;
            return n.keyMapping = S(S({}, qI), A),
            n.reporter = iI,
            n.addPlayerListeners(),
            n
        }
        return T(o, t),
        o.prototype.destroy = function() {
            this.removePlayerListeners(),
            this.metrics = null,
            this.keyMapping = null,
            t.prototype.destroy.call(this)
        }
        ,
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e = this
                  , t = Object.keys(this.keyMapping).reduce((function(t, o) {
                    return e.keyMapping[o] && (t[o] = e.player.getCommonKv(e.keyMapping[o]) || ""),
                    t
                }
                ), {})
                  , o = this.startContentInfo.defn;
                return S(S({}, t), {
                    open_defn: o
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.report = function(e) {
            var t = this.encodeReportData(e);
            this.reporter({
                url: this.REPORT_URL,
                data: t
            })
        }
        ,
        o.prototype.collectWebTraceReportPayload = function() {
            var e, t = RI.toReportObject(), o = t.brand, i = t.version, n = t.hwacc, A = t.memory, r = t.concurrency;
            return {
                browser: o,
                browser_version: i,
                gpu: (null === (e = ja.collectGPUInfo()) || void 0 === e ? void 0 : e.renderer) || "",
                core: +r,
                memory: +A,
                hardware_acceleration: +n,
                decode_mode: this.currentDecodeMode,
                video_start_fmt: this.startContentInfo.fmt,
                video_play_duration: this.videoPlayStartTimeMs > 0 ? performance.now() - this.videoPlayStartTimeMs : 0
            }
        }
        ,
        o.prototype.getDecodeMode = function() {
            var e = this.player.currentVideoElement;
            this.currentDecodeMode = e ? e instanceof HTMLVideoElement ? 0 : 1 : -1
        }
        ,
        o.prototype.addPlayerListeners = function() {
            this.player.on(e.PLAY_EVENT.PERFORMANCE_METRICS_UPDATE, this.onMetricsUpdated),
            this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onSessionStart),
            this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onSessionEnd),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_REQ_INFO_END, this.onGetinfoOver),
            this.player.on(e.H5_PLAY_EVENT.VIDEO_CANPLAY, this.onVideoCanplay)
        }
        ,
        o.prototype.removePlayerListeners = function() {
            this.player.off(e.PLAY_EVENT.PERFORMANCE_METRICS_UPDATE, this.onMetricsUpdated),
            this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onSessionStart),
            this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onSessionEnd),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_REQ_INFO_END, this.onGetinfoOver),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_CANPLAY, this.onVideoCanplay)
        }
        ,
        o.prototype.encodeReportData = function(e) {
            var t = this.reportHeader
              , o = S(S({}, t), e)
              , i = WI.reduce((function(e, t) {
                var i;
                return e.push(encodeURIComponent(null !== (i = o[t]) && void 0 !== i ? i : "")),
                e
            }
            ), []).join("|")
              , n = S(S({}, JI), {
                body: i,
                cnt: "1"
            });
            return ts.object2string(n, "&")
        }
        ,
        o.pluginName = "vod-metrics-reporter",
        o
    }(kE), qI = {
        cpu_name: "",
        device_model: "",
        manufacturer: "",
        os_version: Nc.osver,
        tvk_version: Nc.appVer,
        qimei36: Nc.qimei36,
        platform: Nc.platform,
        testid: "",
        guid: Nc.guid,
        appver: Nc.appVer,
        drm_type: "",
        open_defn: "",
        open_video_format: "",
        scene_page_id: "",
        flow_id: Nc.flowid,
        has_pre_ad: "",
        cgi_retry_count: "",
        asset_type: ""
    }, WI = ["cpu_name", "device_model", "manufacturer", "os_version", "tvk_version", "qimei36", "platform", "testid", "guid", "appver", "dav_data", "flow_id", "scene_page_id", "drm_type", "open_defn", "cgi_retry_count", "has_pre_ad", "asset_type"], JI = {
        groupId: "gwe00032493017",
        streamId: "swe0000168338e"
    };
    sd.registerPlugin(TI.pluginName, TI),
    sd.registerPlugin(rI.pluginName, rI),
    sd.registerPlugin(bI.pluginName, bI),
    sd.registerPlugin(gI.pluginName, gI),
    sd.registerPlugin(jI.pluginName, jI),
    function(e) {
        e.FIRST_PLAYING = "firstPlaying",
        e.SEL_KERNEL = "selKernel",
        e.LIC_REQ_SET = "licReqSet",
        e.LIC_REQ = "licReq",
        e.LIC_RES_SET = "licResSet",
        e.ATTACH_MEDIA = "attachMedia",
        e.LOAD_MANIFAST = "loadManifest",
        e.LOAD_CHUNK = "loadChunk",
        e.TRANSMUX_CHUNK = "transmuxChunk",
        e.APPEND_CHUNK = "appendChunk"
    }(VI || (VI = {}));
    var zI = ((xI = {})[VI.SEL_KERNEL] = "s101",
    xI[VI.LIC_REQ] = "s102",
    xI[VI.LIC_REQ_SET] = "s103",
    xI[VI.LIC_RES_SET] = "s104",
    xI[VI.ATTACH_MEDIA] = "s105",
    xI[VI.LOAD_MANIFAST] = "s106",
    xI[VI.LOAD_CHUNK] = "s107",
    xI[VI.TRANSMUX_CHUNK] = "s108",
    xI[VI.APPEND_CHUNK] = "s109",
    xI)
      , XI = {
        useM3u8Direct: "s115",
        m3u8PrepareCostMs: "s116",
        wrapperMailCostMs: "s117",
        wrapperMailCount: "s118",
        wrapperHtmlDownloadCostMs: "s119",
        wrapperIframeReadyCostMs: "s120",
        wrapperShadowRootCostMs: "s121",
        iframePageMailCostMs: "s122",
        iframePageMailCount: "s123",
        iframePageDomCostMs: "s124",
        tpvIsModuleHot: "s125",
        tpvWorkerInitCostMs: "s126",
        tpvMailCostMs: "s127",
        tpvMailCount: "s128",
        tpvPreparedCostMs: "s129",
        tpvP2pFirstLoadCostMs: "s130",
        workerUseDbCache: "s131",
        workerDBOpenCostMs: "s132",
        workerWasmDownloadCostMs: "s133",
        workerWasmInitCostMs: "s134",
        workerEmInitCostMs: "s135",
        workerEmJSDownloadCostMs: "s136",
        workerMailCostMs: "s137",
        workerMailCount: "s138"
    };
    function ZI(e, t) {
        Object.keys(t).forEach((function(o) {
            e[t[o]] = e[o] || 0,
            delete e[o]
        }
        ))
    }
    var $I = !0
      , ey = function(t) {
        function o(o, i, n) {
            var A, r = t.call(this, o, i, n) || this;
            return r.REPORT_URL = "https://h.trace.qq.com/kv?attaid=01000076328&token=3117637266",
            r.isOnceHidden = !1,
            r.isPlayingRpted = !1,
            r.visibleChangeHandler = function() {
                "hidden" === document.visibilityState && (r.isOnceHidden = !0)
            }
            ,
            r.onAdPlaying = function(t) {
                t.data.adType === e.AD_TYPE.PRE && r.handlerSessionFirstPlaying(!0)
            }
            ,
            r.onVideoPlaying = function(e) {
                e.data.isFirst && r.handlerSessionFirstPlaying(!1)
            }
            ,
            r.onPlaySessionStart = function() {
                r.isPlayingRpted = !1
            }
            ,
            r.rptRate = (null === (A = o.config.stepTimeRpt) || void 0 === A ? void 0 : A.rptRate) || o.config.rptRate || 0,
            document.addEventListener("visibilitychange", r.visibleChangeHandler),
            r.player.on(e.H5_PLAY_EVENT.AD_PLAYING, r.onAdPlaying),
            r.player.on(e.H5_PLAY_EVENT.VIDEO_PLAYING, r.onVideoPlaying),
            r.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, r.onPlaySessionStart),
            r
        }
        return T(o, t),
        Object.defineProperty(o.prototype, "reportHeader", {
            get: function() {
                var e = function() {
                    var e = "";
                    try {
                        e = "1.49.4"
                    } catch (e) {}
                    return e
                }();
                return {
                    vid: this.player.vid,
                    cid: this.player.getCommonKv(Nc.cid) || "",
                    flowid: this.player.getCommonKv(Nc.flowid),
                    guid: this.player.getCommonKv(Nc.guid),
                    appver: "".concat(this.player.getCommonKv(Nc.appVer)).concat(e ? "_".concat(e) : ""),
                    sd: this.player.getCommonKv(Nc.isUseSrvData) ? 1 : 0,
                    hassd: this.player.getCommonKv(Nc.isSrvDataInvaild) ? 1 : 0,
                    expid: (null == Xa ? void 0 : Xa.get("tab_experiment_str")) || "",
                    platform: this.player.getCommonKv(Nc.platform) || ""
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        o.prototype.start = function() {
            Ln.start(VI.FIRST_PLAYING, this.player.instanceId),
            this.isOnceHidden = !1,
            this.visibleChangeHandler()
        }
        ,
        o.prototype.destroy = function() {
            document.removeEventListener("visibilitychange", this.visibleChangeHandler),
            this.player && (this.player.off(e.H5_PLAY_EVENT.AD_PLAYING, this.onAdPlaying),
            this.player.off(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoPlaying),
            this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onPlaySessionStart)),
            t.prototype.destroy.call(this)
        }
        ,
        o.prototype.handlerSessionFirstPlaying = function(e) {
            this.isPlayingRpted || (this.isPlayingRpted = !0,
            Ln.end(VI.FIRST_PLAYING, this.player.instanceId),
            this.end({
                hasAd: e ? 1 : 0
            }))
        }
        ,
        o.prototype.end = function(e) {
            return P(this, void 0, void 0, (function() {
                var t, o;
                return F(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return t = this.player.config.instanceId,
                        Ln.recordMap[t] ? [4, this.createReportInfo(e)] : [2];
                    case 1:
                        return o = i.sent(),
                        this.log("rpt=", o),
                        $I = !1,
                        Ln.clean(t),
                        Math.random() > this.rptRate || this.report(o),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        o.prototype.createReportInfo = function(t) {
            return P(this, void 0, void 0, (function() {
                var o, i, n, A, r, a, s, l, g, c, u, E, d, B, h;
                return F(this, (function(p) {
                    switch (p.label) {
                    case 0:
                        return o = this.player.config.instanceId,
                        i = $I ? Ln.timing() : void 0,
                        n = Ln.timing(o),
                        A = n,
                        this.player.kernelName !== e.KERNEL_NAME.WASM ? [3, 2] : [4, null === (B = (d = this.player.currentVideoInfo).getMetrics) || void 0 === B ? void 0 : B.call(d)];
                    case 1:
                        r = p.sent() || {},
                        A = S(S({}, A), (v = r,
                        Object.entries(v).reduce((function(e, t) {
                            var o, i = t[0], n = t[1], A = n;
                            return "number" == typeof n && n > 0 && /costMs$/i.test(i) && (A = 1e3 * n | 0),
                            "boolean" == typeof n && (A = n ? 1 : 0),
                            null === typeof n && (A = -1),
                            S(S({}, e), ((o = {})[i] = A,
                            o))
                        }
                        ), {}))),
                        p.label = 2;
                    case 2:
                        if (a = (this.player.config.stepTimeRpt || {}).rptKeyMap,
                        s = void 0 === a ? XI : a,
                        l = S(S({}, zI), s),
                        ZI(A, l),
                        g = S(S(S(S({}, t), i), A), {
                            isFirstVid: $I ? 1 : 0,
                            hided: this.isOnceHidden ? 1 : 0
                        }),
                        t.hasAd) {
                            c = 0,
                            u = void 0;
                            try {
                                u = Yg(o).getPlayerInstance(e.AD_TYPE.PRE),
                                c = null !== (h = u.currentVideoInfo.cacheSize) && void 0 !== h ? h : 0
                            } catch (e) {}
                            u && ((E = Ln.timing(u.config.instanceId)) && (ZI(E, l),
                            Object.assign(g, E)),
                            g.adKernel = u.kernelName === e.KERNEL_NAME.ORIGIN ? 1 : 0,
                            g.adCache = c > 0 ? 1 : 0)
                        } else
                            g.vKernel = this.player.kernelName;
                        return [2, g]
                    }
                    var v
                }
                ))
            }
            ))
        }
        ,
        o.pluginName = "steptime-rpt",
        o
    }(kE);
    sd.registerPlugin(ey.pluginName, ey);
    var ty, oy = /.*\.?qq\.com/g.test(ts.getDomainOfURL(location.href)), iy = (a(ty = {}, e.PLAY_MODE.VOD, [TI.pluginName, bI.pluginName]),
    a(ty, e.PLAY_MODE.LIVE, [rI.pluginName, gI.pluginName]),
    ty), ny = [TI.pluginName, bI.pluginName, rI.pluginName], Ay = function(o) {
        c(g, o);
        var A = Q(g);
        function g() {
            var e;
            return n(this, g),
            a(t(e = A.apply(this, arguments)), "ctrlbarPlugin", void 0),
            a(t(e), "onSessionStart", (function() {
                e.player.setCommonKv(ry, 1)
            }
            )),
            a(t(e), "onPlayBtnClick", (function(t) {
                var o;
                "play" === (null === (o = t.data) || void 0 === o ? void 0 : o.status) && e.player.setCommonKv(ry, 0)
            }
            )),
            e
        }
        return r(g, [{
            key: "init",
            value: function() {
                this.ctrlbarPlugin = this.player.plugins[up],
                this.mergePlayerConfig(),
                this.installReporter(),
                this.setupEventListeners()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeEventListeners(),
                l(s(g.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                var t;
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onSessionStart),
                null === (t = this.ctrlbarPlugin) || void 0 === t || t.on("ctrl:click-playbtn", this.onPlayBtnClick)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                var t;
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onSessionStart),
                null === (t = this.ctrlbarPlugin) || void 0 === t || t.off("ctrl:click-playbtn", this.onPlayBtnClick)
            }
        }, {
            key: "mergePlayerConfig",
            value: function() {
                var t, o, i, n, A, r, a = {}, s = this.player.config, l = s.type, g = this.player.getCommonKv(Nc.grayPlayerver), c = this.player.getCommonKv(Nc.platform), d = c === rp.vodVQQ || c === rp.vodHarmonyTxVideo;
                l === e.PLAY_MODE.VOD && (a.vodFlowReporterConfig = E(u({
                    forceImage: !oy
                }, null == s ? void 0 : s.vodFlowReporterConfig), {
                    paramsKey: u({
                        tpay: Pp.videoCharged,
                        vtype: Pp.videoType,
                        ckeyVer: Pp.ckeyVersion,
                        pay_type: Pp.userPayType,
                        vurl: Pp.vurl,
                        is_auto_play: ry,
                        uskey: dp
                    }, null == s || null === (t = s.vodFlowReporterConfig) || void 0 === t ? void 0 : t.paramsKey),
                    obfuscate: d
                }),
                a.vodFlyReporterConfig = E(u({}, null == s ? void 0 : s.vodFlyReporterConfig), {
                    paramsKey: u({
                        vip: Bp,
                        ext: "TEE_CONTEXT_DATA"
                    }, g ? {
                        playerver: Nc.grayPlayerver
                    } : void 0, null == s || null === (o = s.vodFlyReporterConfig) || void 0 === o ? void 0 : o.paramsKey),
                    obfuscate: d
                }),
                a.vodQaReporterConfig = E(u({}, null == s ? void 0 : s.vodQaReporterConfig), {
                    paramsKey: u({}, null == s || null === (i = s.vodQaReporterConfig) || void 0 === i ? void 0 : i.paramsKey),
                    obfuscate: d
                })),
                l === e.PLAY_MODE.LIVE && (a.liveQaReporterConfig = E(u({}, null == s ? void 0 : s.liveQaReporterConfig), {
                    paramsKey: u({
                        sid: Lv.livesid,
                        isuserpay: Lv.isuserpay,
                        playtime: Lv.playtime
                    }, null == s || null === (n = s.liveQaReporterConfig) || void 0 === n ? void 0 : n.paramsKey)
                })),
                (l === e.PLAY_MODE.LIVE || s.isFakeLive) && (a.liveFlowReporterConfig = E(u({
                    forceImage: !oy
                }, null == s ? void 0 : s.liveFlowReporterConfig), {
                    paramsKey: u({
                        sid: Lv.livesid,
                        cpay: Lv.isuserpay,
                        tpay: Lv.pay_type,
                        playtime: Lv.playtime,
                        rest_preview_cnt: Lv.restpreviewcnt
                    }, null == s || null === (A = s.liveFlowReporterConfig) || void 0 === A ? void 0 : A.paramsKey)
                })),
                l === e.PLAY_MODE.LIVE && (a.liveFlyReporterConfig = E(u({}, null == s ? void 0 : s.liveFlyReporterConfig), {
                    paramsKey: u({}, g ? {
                        fplayerver: Nc.grayPlayerver
                    } : void 0, null == s || null === (r = s.liveFlyReporterConfig) || void 0 === r ? void 0 : r.paramsKey)
                })),
                Object.assign(this.player.config, a)
            }
        }, {
            key: "installReporter",
            value: function() {
                if (this.player.config.type) {
                    var e = this.getReporterNames();
                    if (this.checkIfReporterExist(e))
                        this.warn("reporter already detected, skip install, probably due to <1.7.4 version of SuperPlayer");
                    else {
                        var t = this.player.getCommonKv(Nc.platform);
                        t !== rp.vodVQQ && t !== rp.vodHarmonyTxVideo || (RI.enable(),
                        RI.configure("deviceScore", i((function() {
                            return F(this, (function(e) {
                                return [2, Kf]
                            }
                            ))
                        }
                        ))),
                        e.push(jI.pluginName)),
                        this.player.createPlugins(e)
                    }
                }
            }
        }, {
            key: "checkIfReporterExist",
            value: function(e) {
                var t = this;
                return e.some((function(e) {
                    return !!t.player.plugins[e]
                }
                ))
            }
        }, {
            key: "getReporterNames",
            value: function() {
                if (!this.player.config.type)
                    return [];
                if (this.player.isFakeLive)
                    return ny;
                var t = iy[this.player.config.type]
                  , o = this.player.getCommonKv("businessId");
                return this.player.config.type !== e.PLAY_MODE.VOD || o !== ap.cover && o !== ap.page || t.push(ey.pluginName),
                t
            }
        }]),
        g
    }(hf);
    a(Ay, "moduleName", "reporter-controller");
    var ry = "tvx_is_auto_play"
      , ay = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var e;
            return n(this, A),
            a(t(e = i.apply(this, arguments)), "onPlaySessionEnd", e.suspiciousDeviceHandlerFactory("report")),
            a(t(e), "blockSuspiciousDevice", (function(t) {
                return e.warn("device score not pass, block play"),
                o = {
                    code: np.DEVICE_SCORE_NOT_PASS,
                    fatal: !0,
                    message: ns(op.DEVICE_SCORE_NOT_PASS),
                    detail: Kf,
                    debugMessage: "device score=".concat(Kf, ";mask=").concat(t)
                },
                new Fs("tvk",o);
                var o
            }
            )),
            a(t(e), "reportSuspiciousDevice", (function(t) {
                var o;
                return e.warn("device score not pass by mask value, upload log", {
                    mask: t
                }),
                null === (o = e.player.offlineLog) || void 0 === o || o.reportLogs({
                    reportSource: "tvk-device-score"
                }),
                null
            }
            )),
            e
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.patchPlayerConfig(),
                this.setupEventListeners(),
                this.player.setCommonKv(Nc.deviceScore, Kf)
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeEventListeners()
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onPlaySessionEnd)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onPlaySessionEnd)
            }
        }, {
            key: "patchPlayerConfig",
            value: function() {
                this.player.config.prerequisiteCheck = this.suspiciousDeviceHandlerFactory("block")
            }
        }, {
            key: "suspiciousDeviceHandlerFactory",
            value: function(e) {
                var t, o, i = this, n = this.tvk.config, A = n.scoreMaskForBlocking, r = n.scoreMaskForReporting, s = (a(t = {}, "block", this.blockSuspiciousDevice),
                a(t, "report", this.reportSuspiciousDevice),
                t), l = (a(o = {}, "block", A),
                a(o, "report", r),
                o);
                return function() {
                    return i.log("check score for ".concat(e, ", device score=").concat(Kf, ";mask=").concat(l[e])),
                    Kf & l[e] ? s[e](l[e]) : null
                }
            }
        }]),
        A
    }(hf);
    a(ay, "moduleName", "guard-controller");
    var sy = {};
    function ly(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }
    !function() {
        function e(e, t, o) {
            try {
                return e()
            } catch (e) {
                return "function" == typeof o ? o(e) : t
            }
        }
        "function" != typeof Object.assign && (Object.assign = function(e) {
            if (null == e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), o = 1; o < arguments.length; o++) {
                var i = arguments[o];
                if (null != i)
                    for (var n in i)
                        i.hasOwnProperty(n) && (t[n] = i[n])
            }
            return t
        }
        );
        var t = function(t) {
            return e((function() {
                if (!navigator.cookieEnabled)
                    return "";
                for (var e = "".concat(t, "="), o = document.cookie.split(";"), i = 0; i < o.length; i++) {
                    var n = o[i].trim();
                    if (0 === n.indexOf(e))
                        return n.substring(e.length, n.length)
                }
                return ""
            }
            ), "")
        }
          , o = function(e, t) {
            var o = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var o = [0, 0, 0, 0];
                return o[3] += e[3] + t[3],
                o[2] += o[3] >>> 16,
                o[3] &= 65535,
                o[2] += e[2] + t[2],
                o[1] += o[2] >>> 16,
                o[2] &= 65535,
                o[1] += e[1] + t[1],
                o[0] += o[1] >>> 16,
                o[1] &= 65535,
                o[0] += e[0] + t[0],
                o[0] &= 65535,
                [o[0] << 16 | o[1], o[2] << 16 | o[3]]
            }
              , i = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var o = [0, 0, 0, 0];
                return o[3] += e[3] * t[3],
                o[2] += o[3] >>> 16,
                o[3] &= 65535,
                o[2] += e[2] * t[3],
                o[1] += o[2] >>> 16,
                o[2] &= 65535,
                o[2] += e[3] * t[2],
                o[1] += o[2] >>> 16,
                o[2] &= 65535,
                o[1] += e[1] * t[3],
                o[0] += o[1] >>> 16,
                o[1] &= 65535,
                o[1] += e[2] * t[2],
                o[0] += o[1] >>> 16,
                o[1] &= 65535,
                o[1] += e[3] * t[1],
                o[0] += o[1] >>> 16,
                o[1] &= 65535,
                o[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
                o[0] &= 65535,
                [o[0] << 16 | o[1], o[2] << 16 | o[3]]
            }
              , n = function(e, t) {
                return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
                [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }
              , A = function(e, t) {
                return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }
              , r = function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }
              , a = function(e) {
                return e = r(e, [0, e[0] >>> 1]),
                e = i(e, [4283543511, 3981806797]),
                e = r(e, [0, e[0] >>> 1]),
                e = i(e, [3301882366, 444984403]),
                r(e, [0, e[0] >>> 1])
            };
            t = t || 0;
            for (var s = (e = e || "").length % 16, l = e.length - s, g = [0, t], c = [0, t], u = [0, 0], E = [0, 0], d = [2277735313, 289559509], B = [1291169091, 658871167], h = 0; h < l; h += 16)
                u = [255 & e.charCodeAt(h + 4) | (255 & e.charCodeAt(h + 5)) << 8 | (255 & e.charCodeAt(h + 6)) << 16 | (255 & e.charCodeAt(h + 7)) << 24, 255 & e.charCodeAt(h) | (255 & e.charCodeAt(h + 1)) << 8 | (255 & e.charCodeAt(h + 2)) << 16 | (255 & e.charCodeAt(h + 3)) << 24],
                E = [255 & e.charCodeAt(h + 12) | (255 & e.charCodeAt(h + 13)) << 8 | (255 & e.charCodeAt(h + 14)) << 16 | (255 & e.charCodeAt(h + 15)) << 24, 255 & e.charCodeAt(h + 8) | (255 & e.charCodeAt(h + 9)) << 8 | (255 & e.charCodeAt(h + 10)) << 16 | (255 & e.charCodeAt(h + 11)) << 24],
                u = n(u = i(u, d), 31),
                u = i(u, B),
                g = o(g = n(g = r(g, u), 27), c),
                g = o(i(g, [0, 5]), [0, 1390208809]),
                E = n(E = i(E, B), 33),
                E = i(E, d),
                c = o(c = n(c = r(c, E), 31), g),
                c = o(i(c, [0, 5]), [0, 944331445]);
            switch (u = [0, 0],
            E = [0, 0],
            s) {
            case 15:
                E = r(E, A([0, e.charCodeAt(h + 14)], 48));
            case 14:
                E = r(E, A([0, e.charCodeAt(h + 13)], 40));
            case 13:
                E = r(E, A([0, e.charCodeAt(h + 12)], 32));
            case 12:
                E = r(E, A([0, e.charCodeAt(h + 11)], 24));
            case 11:
                E = r(E, A([0, e.charCodeAt(h + 10)], 16));
            case 10:
                E = r(E, A([0, e.charCodeAt(h + 9)], 8));
            case 9:
                E = r(E, [0, e.charCodeAt(h + 8)]),
                E = n(E = i(E, B), 33),
                E = i(E, d),
                c = r(c, E);
            case 8:
                u = r(u, A([0, e.charCodeAt(h + 7)], 56));
            case 7:
                u = r(u, A([0, e.charCodeAt(h + 6)], 48));
            case 6:
                u = r(u, A([0, e.charCodeAt(h + 5)], 40));
            case 5:
                u = r(u, A([0, e.charCodeAt(h + 4)], 32));
            case 4:
                u = r(u, A([0, e.charCodeAt(h + 3)], 24));
            case 3:
                u = r(u, A([0, e.charCodeAt(h + 2)], 16));
            case 2:
                u = r(u, A([0, e.charCodeAt(h + 1)], 8));
            case 1:
                u = r(u, [e.charCodeAt(h)]),
                u = n(u = i(u, d), 31),
                u = i(u, B),
                g = r(g, u)
            }
            return g = o(g = r(g, [0, e.length]), c = r(c, [0, e.length])),
            c = o(c, g),
            g = o(g = a(g), c = a(c)),
            c = o(c, g),
            "00000000".concat((g[0] >>> 0).toString(16)).slice(-8) + "00000000".concat((g[1] >>> 0).toString(16)).slice(-8) + "00000000".concat((c[0] >>> 0).toString(16)).slice(-8) + "00000000".concat((c[1] >>> 0).toString(16)).slice(-8)
        };
        function i() {
            var t = {
                id: "",
                winding: !1,
                geometry: ""
            };
            return e((function() {
                var e = document.createElement("canvas");
                e.width = 1,
                e.height = 1;
                var i = e.getContext("2d");
                if (!i || !e.toDataURL)
                    return t;
                t.winding = function(e) {
                    return e.rect(0, 0, 10, 10),
                    e.rect(2, 2, 6, 6),
                    !e.isPointInPath(5, 5, "evenodd")
                }(i),
                e.width = 240,
                e.height = 60,
                i.textBaseline = "alphabetic",
                i.fillStyle = "#f60",
                i.fillRect(100, 1, 62, 20),
                i.fillStyle = "#069",
                i.font = '11pt "Times New Roman"',
                i.fillStyle = "rgba(102, 204, 0, 0.2)",
                i.font = "18pt Arial",
                i.fillText("qimei", 4, 45);
                var n = e.toDataURL();
                if (n !== e.toDataURL())
                    return t;
                t.id = o(n, 31),
                e.width = 122,
                e.height = 110,
                i.globalCompositeOperation = "multiply";
                for (var A = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; A < r.length; A++) {
                    var a = r[A];
                    i.fillStyle = a[0],
                    i.beginPath(),
                    i.arc(a[1], a[2], 40, 0, 2 * Math.PI, !0),
                    i.closePath(),
                    i.fill()
                }
                return i.fillStyle = "#f9c",
                i.arc(60, 60, 60, 0, 2 * Math.PI, !0),
                i.arc(60, 60, 20, 0, 2 * Math.PI, !0),
                i.fill("evenodd"),
                t.geometry = o(e.toDataURL(), 31),
                t
            }
            ), t)
        }
        var n = function() {
            return e((function() {
                var e, t = navigator;
                return {
                    cpuClass: t.cpuClass,
                    deviceMemory: t.deviceMemory,
                    hardwareConcurrency: t.hardwareConcurrency,
                    networkType: null == (e = t.connection) ? void 0 : e.effectiveType,
                    oscpu: t.oscpu,
                    pdfViewerEnabled: t.pdfViewerEnabled,
                    platform: t.platform,
                    productSub: t.productSub,
                    userAgent: t.userAgent,
                    vendor: t.vendor,
                    cookieEnabled: t.cookieEnabled
                }
            }
            ), {})
        }
          , A = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
            return e((function() {
                if ([/Android/i, /CCBrowser/i, /Trident\//i].some((function(e) {
                    return e.test(t)
                }
                )))
                    return !0;
                var e = t.match(/Chrome\/(\d+)/i);
                if (e && Number(e[1]) < 74)
                    return !0;
                var o = t.match(/Firefox\/(\d+)/i);
                return !!(o && Number(o[1]) < 68)
            }
            ), !1)
        }
          , r = {}
          , a = {
            getStorageItem: function(o) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return e((function() {
                    return localStorage.getItem(o) || (i ? t(o) : "")
                }
                ))
            },
            setStorageItem: function(t, o) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e((function() {
                    localStorage.setItem(t, null != o ? o : ""),
                    i && function(e, t) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365
                          , i = arguments.length > 3 ? arguments[3] : void 0
                          , n = arguments.length > 4 ? arguments[4] : void 0;
                        if (navigator.cookieEnabled) {
                            var A = i;
                            A || (A = function(e) {
                                var t = window.location
                                  , o = t.hostname
                                  , i = t.port
                                  , n = o.split(".")
                                  , A = n.length
                                  , r = o;
                                if (A > 1) {
                                    var a = n[A - 1]
                                      , s = n[A - 2];
                                    r = "".concat(s, ".").concat(a),
                                    e ? e.indexOf(r) > -1 && (r = "".concat(n[A - 3], ".").concat(r)) : A > 2 && a.length <= 2 && s.length <= 3 && (r = "".concat(n[A - 3], ".").concat(r))
                                }
                                return i && ["80", "443"].indexOf(i) < 0 && (r = "".concat(r, ":").concat(i)),
                                r
                            }(n));
                            var r = new Date;
                            r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
                            var a = "".concat(e, "=").concat(t, ";expires=").concat(r.toUTCString(), ";path=/;").concat(A ? "domain=".concat(A) : "");
                            document.cookie = a
                        }
                    }(t, o)
                }
                ))
            },
            getSessionItem: function(t) {
                return e((function() {
                    return sessionStorage.getItem(t)
                }
                ))
            },
            setSessionItem: function(t, o) {
                e((function() {
                    sessionStorage.setItem(t, null != o ? o : "")
                }
                ))
            },
            getTimestamp: function() {
                return "".concat(Math.floor((new Date).getTime() / 1e3))
            },
            autoTry: e,
            getFeature: function() {
                return {
                    canvas: i(),
                    screen: e((function() {
                        var e = [Math.floor(window.screen.width * window.devicePixelRatio), Math.floor(window.screen.height * window.devicePixelRatio)].sort().reverse().join("x")
                          , t = [Math.floor(window.screen.availWidth * window.devicePixelRatio), Math.floor(window.screen.availHeight * window.devicePixelRatio)].sort().reverse().join("x");
                        return {
                            colorDepth: window.screen.colorDepth,
                            resolution: e,
                            availResolution: t
                        }
                    }
                    ), {}),
                    navigator: n(),
                    indexedDB: e((function() {
                        return !!window.indexedDB
                    }
                    ), !1),
                    localStorage: e((function() {
                        return !!window.localStorage
                    }
                    ), !1),
                    sessionStorage: e((function() {
                        return !!window.sessionStorage
                    }
                    ), !1),
                    timezoneOffset: (new Date).getTimezoneOffset(),
                    webgl: e((function() {
                        var e = function() {
                            var e = document.createElement("canvas")
                              , t = null;
                            try {
                                t = e.getContext("webgl") || e.getContext("experimental-webgl")
                            } catch (e) {}
                            return t || (t = null),
                            t
                        }();
                        if (!e)
                            return null;
                        var t = e.getExtension("WEBGL_debug_renderer_info")
                          , o = [e.getParameter(t.UNMASKED_VENDOR_WEBGL), e.getParameter(t.UNMASKED_RENDERER_WEBGL)].join("~")
                          , i = e.getExtension("WEBGL_lose_context");
                        return null != i && i.loseContext(),
                        o
                    }
                    ))
                }
            },
            getLocalIP: function() {
                return new Promise((function(e) {
                    if (((null == navigator ? void 0 : navigator.webkitGetUserMedia) || (null == navigator ? void 0 : navigator.mozGetUserMedia)) && A()) {
                        var t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                        if (t)
                            try {
                                var o = new t({
                                    iceServers: []
                                });
                                o ? (o.createDataChannel("", {
                                    reliable: !1
                                }),
                                o.onicecandidate = function(t) {
                                    var i, n;
                                    if (t.candidate) {
                                        var A = t.candidate.candidate.match(/([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(\d{1,3}\.){3}\d{1,3}/);
                                        e(null != (i = null == A ? void 0 : A[0]) ? i : "")
                                    } else
                                        e("");
                                    null == (n = null == o ? void 0 : o.close) || n.call(o)
                                }
                                ,
                                o.createOffer().then((function(e) {
                                    o.setLocalDescription(e)
                                }
                                ), (function() {
                                    var t;
                                    e(""),
                                    null == (t = null == o ? void 0 : o.close) || t.call(o)
                                }
                                ))) : e("")
                            } catch (t) {
                                e("")
                            }
                        else
                            e("")
                    } else
                        e("")
                }
                ))
            },
            x64hash128: o,
            getNavigator: n,
            http: function(e) {
                return new Promise((function(t) {
                    try {
                        var o = new XMLHttpRequest
                          , i = !1
                          , n = setTimeout((function() {
                            t({
                                code: 600,
                                msg: "timeout",
                                data: ""
                            }),
                            i = !0,
                            o && (o.abort(),
                            o = null)
                        }
                        ), 1e4)
                          , A = function() {
                            if (!i)
                                if (clearTimeout(n),
                                i = !0,
                                o) {
                                    try {
                                        var e = function(e) {
                                            return e >= 200 && e < 300 ? 0 : 0 === e ? 600 : e
                                        }(o.status);
                                        if (0 === e) {
                                            var A = JSON.parse(o.responseText);
                                            t(A)
                                        } else
                                            t({
                                                code: e,
                                                msg: o.statusText,
                                                data: o.responseText
                                            })
                                    } catch (e) {
                                        t({
                                            code: 600,
                                            msg: e.message,
                                            data: e
                                        })
                                    }
                                    o = null
                                } else
                                    t({
                                        code: 600,
                                        msg: "timeout",
                                        data: ""
                                    })
                        };
                        o.timeout = 1e4,
                        o.open("POST", "https://snowflake.qq.com/ola/v2", !0),
                        o.setRequestHeader("Content-Type", "application/json"),
                        o.send(JSON.stringify(e)),
                        o.onload = function() {
                            A()
                        }
                        ,
                        o.onloadend = function() {
                            A()
                        }
                        ,
                        o.ontimeout = function() {
                            A()
                        }
                        ,
                        o.onerror = function() {
                            A()
                        }
                        ,
                        o.onabort = function() {
                            A()
                        }
                        ,
                        o.onreadystatechange = function() {
                            4 === (null == o ? void 0 : o.readyState) && A()
                        }
                    } catch (e) {
                        t({
                            code: 600,
                            msg: e.message,
                            data: e
                        })
                    }
                }
                ))
            },
            padStart: function(e, t, o) {
                if (e.length >= t || !o)
                    return e;
                for (var i = t - e.length, n = "", A = 0; A < Math.ceil(i / o.length); A++)
                    n += o;
                return (n = n.slice(0, i)) + e
            },
            getURLParams: function(e) {
                var t = null == e ? void 0 : e.split("?")[1]
                  , o = {};
                return null == t || t.split("&").reduce((function(e, t) {
                    var o = t.split("=");
                    return e[o[0]] = o[1],
                    e
                }
                ), o),
                o
            },
            getCookieQ36: function() {
                return t("q36cookiekey")
            },
            getCookieUUID: function() {
                return t("qmuuk")
            },
            promiseSingleton: function(e, t, o) {
                return new Promise((function(i, n) {
                    var A, a, s, l, g = null != o ? o : r;
                    g[t] || (g[t] = e()),
                    null == (l = null == (s = null == (a = null == (A = g[t]) ? void 0 : A.then) ? void 0 : a.call(A, (function(e) {
                        delete g[t],
                        i(e)
                    }
                    ))) ? void 0 : s.catch) || l.call(s, (function(e) {
                        delete g[t],
                        n(e)
                    }
                    ))
                }
                ))
            }
        };
        sy.tools = a
    }();
    var gy = function(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }
      , cy = function() {
        var e = function(e, t, o) {
            for (var i = [], n = 0; n++ < t; )
                i.push(e += o);
            return i
        }
          , t = function(e) {
            for (var t, o, i = String(e).replace(/[=]+$/, ""), A = i.length, r = 0, a = 0, s = []; a < A; a++)
                ~(o = n[i.charCodeAt(a)]) && (t = r % 4 ? 64 * t + o : o,
                r++ % 4) && s.push(255 & t >> (-2 * r & 6));
            return s
        }
          , o = function(e) {
            return e >> 1 ^ -(1 & e)
        }
          , i = []
          , n = e(0, 43, 0).concat([62, 0, 62, 0, 63]).concat(e(51, 10, 1)).concat(e(0, 8, 0)).concat(e(0, 25, 1)).concat([0, 0, 0, 0, 63, 0]).concat(e(25, 26, 1))
          , A = function(e) {
            for (var i = [], n = new Int8Array(t(e)), A = n.length, r = 0; A > r; ) {
                var a = n[r++]
                  , s = 127 & a;
                a >= 0 || (s |= (127 & (a = n[r++])) << 7,
                a >= 0 || (s |= (127 & (a = n[r++])) << 14,
                a >= 0 || (s |= (127 & (a = n[r++])) << 21,
                a >= 0 || (s |= (a = n[r++]) << 28)))),
                i.push(o(s))
            }
            return i
        };
        return function(e, t) {
            var o = A(e)
              , n = function(e, t, A, r, a) {
                return function s() {
                    for (var l, g, c, u = [A, r, t, this, arguments, s, o, 0], E = void 0, d = e, B = []; ; )
                        try {
                            for (; ; )
                                switch (o[++d]) {
                                case 0:
                                    u[o[++d]] += String.fromCharCode(o[++d]),
                                    u[o[++d]] = u[o[++d]][u[o[++d]]];
                                    break;
                                case 1:
                                    u[o[++d]][u[o[++d]]] = u[o[++d]];
                                    break;
                                case 2:
                                    u[o[++d]] = u[o[++d]] | u[o[++d]];
                                    break;
                                case 3:
                                case 62:
                                    u[o[++d]] = u[o[++d]] == u[o[++d]];
                                    break;
                                case 4:
                                    u[o[++d]] = u[o[++d]] % u[o[++d]];
                                    break;
                                case 5:
                                    u[o[++d]] = u[o[++d]][u[o[++d]]],
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]]);
                                    break;
                                case 6:
                                    u[o[++d]] = delete u[o[++d]][u[o[++d]]];
                                    break;
                                case 7:
                                    u[o[++d]] = gy(u[o[++d]]);
                                    break;
                                case 8:
                                    u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]]);
                                    break;
                                case 9:
                                    u[o[++d]] = ~u[o[++d]];
                                    break;
                                case 10:
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]]);
                                    break;
                                case 11:
                                    u[o[++d]] = "";
                                    break;
                                case 12:
                                    u[o[++d]] += String.fromCharCode(o[++d]),
                                    u[o[++d]] += String.fromCharCode(o[++d]);
                                    break;
                                case 13:
                                    u[o[++d]] = u[o[++d]].call(E, u[o[++d]]);
                                    break;
                                case 14:
                                    u[o[++d]] = u[o[++d]],
                                    B.push(d + o[++d]),
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 15:
                                case 34:
                                    u[o[++d]] = u[o[++d]] == u[o[++d]],
                                    u[o[++d]] = !u[o[++d]],
                                    d += u[o[++d]] ? o[++d] : o[(++d,
                                    ++d)];
                                    break;
                                case 16:
                                    u[o[++d]] = u[o[++d]][u[o[++d]]];
                                    break;
                                case 17:
                                    u[o[++d]] = u[o[++d]] | o[++d];
                                    break;
                                case 18:
                                    for (c in g = [],
                                    u[o[++d]])
                                        g.push(c);
                                    u[o[++d]] = g;
                                    break;
                                case 19:
                                    for (g = [],
                                    c = o[++d]; c > 0; c--)
                                        g.push(u[o[++d]]);
                                    u[o[++d]] = n(d + o[++d], g, A, r, a);
                                    try {
                                        Object.defineProperty(u[o[d - 1]], "length", {
                                            value: o[++d],
                                            configurable: !0,
                                            writable: !1,
                                            enumerable: !1
                                        })
                                    } catch (e) {}
                                    break;
                                case 20:
                                    u[o[++d]][o[++d]] = u[o[++d]],
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 21:
                                    g = u[o[++d]],
                                    (u[o[++d]] = !!g.length) ? u[o[++d]] = g.shift() : ++d;
                                    break;
                                case 22:
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]]);
                                    break;
                                case 23:
                                    d += o[++d];
                                    break;
                                case 24:
                                    u[o[++d]] += String.fromCharCode(o[++d]),
                                    u[o[++d]][u[o[++d]]] = u[o[++d]],
                                    u[o[++d]] = "";
                                    break;
                                case 25:
                                    u[o[++d]] = u[o[++d]],
                                    u[o[++d]] = u[o[++d]] - 0,
                                    u[o[++d]] = ++u[o[++d]];
                                    break;
                                case 26:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = u[o[++d]].call(E),
                                    u[o[++d]] = u[o[++d]];
                                    break;
                                case 27:
                                    u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]], u[o[++d]]);
                                    break;
                                case 28:
                                    u[o[++d]] = u[o[++d]],
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 29:
                                    u[o[++d]] = l;
                                    break;
                                case 30:
                                    u[o[++d]] = u[o[++d]];
                                    break;
                                case 31:
                                    u[o[++d]] = u[o[++d]]in u[o[++d]];
                                    break;
                                case 32:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = u[o[++d]].call(E, u[o[++d]]);
                                    break;
                                case 33:
                                    u[o[++d]] = u[o[++d]][u[o[++d]]],
                                    u[o[++d]] = u[o[++d]];
                                    break;
                                case 35:
                                    u[o[++d]] = !1;
                                    break;
                                case 36:
                                    d += u[o[++d]] ? o[++d] : o[(++d,
                                    ++d)];
                                    break;
                                case 37:
                                    u[o[++d]] = u[o[++d]] > u[o[++d]];
                                    break;
                                case 38:
                                    u[o[++d]] = null,
                                    u[o[++d]] = u[o[++d]] == u[o[++d]],
                                    d += u[o[++d]] ? o[++d] : o[(++d,
                                    ++d)];
                                    break;
                                case 39:
                                    u[o[++d]] = u[o[++d]] >= o[++d];
                                    break;
                                case 40:
                                    u[o[++d]] = E;
                                    break;
                                case 41:
                                    u[o[++d]] = u[o[++d]] > o[++d];
                                    break;
                                case 42:
                                    u[o[++d]] += String.fromCharCode(o[++d]),
                                    u[o[++d]][o[++d]] = u[o[++d]];
                                    break;
                                case 43:
                                    u[o[++d]] = u[o[++d]] - 0;
                                    break;
                                case 44:
                                    u[o[++d]] = new u[o[++d]];
                                    break;
                                case 45:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = Array(o[++d]),
                                    u[o[++d]][o[++d]] = u[o[++d]];
                                    break;
                                case 46:
                                    u[o[++d]] = u[o[++d]][u[o[++d]]],
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]]);
                                    break;
                                case 47:
                                    u[o[++d]] = u[o[++d]] & o[++d];
                                    break;
                                case 48:
                                    u[o[++d]] = ++u[o[++d]];
                                    break;
                                case 49:
                                    u[o[++d]] = u[o[++d]] + u[o[++d]];
                                    break;
                                case 50:
                                    u[o[++d]] = Array(o[++d]),
                                    u[o[++d]][o[++d]] = u[o[++d]],
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 51:
                                    u[o[++d]] = u[o[++d]] + o[++d];
                                    break;
                                case 52:
                                    u[o[++d]] = !0;
                                    break;
                                case 53:
                                    u[o[++d]] = u[o[++d]] === o[++d];
                                    break;
                                case 54:
                                    u[o[++d]] = null;
                                    break;
                                case 55:
                                    u[o[++d]] = u[o[++d]] < o[++d];
                                    break;
                                case 56:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 57:
                                    for (u[o[++d]] = u[o[++d]][u[o[++d]]],
                                    g = [],
                                    c = o[++d]; c > 0; c--)
                                        g.push(u[o[++d]]);
                                    u[o[++d]] = n(d + o[++d], g, A, r, a);
                                    try {
                                        Object.defineProperty(u[o[d - 1]], "length", {
                                            value: o[++d],
                                            configurable: !0,
                                            writable: !1,
                                            enumerable: !1
                                        })
                                    } catch (e) {}
                                    break;
                                case 58:
                                    u[o[++d]] = !u[o[++d]];
                                    break;
                                case 59:
                                    u[o[++d]] = u[o[++d]] >> o[++d];
                                    break;
                                case 60:
                                    u[o[++d]] = -u[o[++d]];
                                    break;
                                case 61:
                                    return u[o[++d]] = E,
                                    u[o[++d]];
                                case 63:
                                    for (g = [],
                                    c = o[++d]; c > 0; c--)
                                        g.push(u[o[++d]]);
                                    u[o[++d]] = u[o[++d]].apply(E, g);
                                    break;
                                case 64:
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]], u[o[++d]]);
                                    break;
                                case 65:
                                    u[o[++d]] = u[o[++d]] ^ u[o[++d]];
                                    break;
                                case 66:
                                    u[o[++d]] = u[o[++d]] < u[o[++d]];
                                    break;
                                case 67:
                                    u[o[++d]] = Array(o[++d]);
                                    break;
                                case 68:
                                    B.pop();
                                    break;
                                case 69:
                                    u[o[++d]] += String.fromCharCode(o[++d]),
                                    u[o[++d]] = u[o[++d]][o[++d]];
                                    break;
                                case 70:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = u[o[++d]];
                                    break;
                                case 71:
                                    u[o[++d]] = "",
                                    u[o[++d]] += String.fromCharCode(o[++d]);
                                    break;
                                case 72:
                                    u[o[++d]] = new u[o[++d]](u[o[++d]]);
                                    break;
                                case 73:
                                    return u[o[++d]];
                                case 74:
                                    u[o[++d]] = u[o[++d]] <= o[++d];
                                    break;
                                case 75:
                                    u[o[++d]] = u[o[++d]] << o[++d];
                                    break;
                                case 76:
                                    B.push(d + o[++d]);
                                    break;
                                case 77:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = {},
                                    u[o[++d]] = "";
                                    break;
                                case 78:
                                    u[o[++d]] = {};
                                    break;
                                case 79:
                                    u[o[++d]] = u[o[++d]] * u[o[++d]];
                                    break;
                                case 80:
                                    u[o[++d]] += String.fromCharCode(o[++d]);
                                    break;
                                case 81:
                                    u[o[++d]] = u[o[++d]][o[++d]],
                                    u[o[++d]] = "",
                                    u[o[++d]] += String.fromCharCode(o[++d]);
                                    break;
                                case 82:
                                    u[o[++d]] = u[o[++d]] - u[o[++d]];
                                    break;
                                case 83:
                                    u[o[++d]] = Array(o[++d]),
                                    u[o[++d]] = Array(o[++d]);
                                    break;
                                case 84:
                                    throw u[o[++d]];
                                case 85:
                                    u[o[++d]] = u[o[++d]].call(E);
                                    break;
                                case 86:
                                    u[o[++d]] = o[++d];
                                    break;
                                case 87:
                                    u[o[++d]] = u[o[++d]].call(u[o[++d]]);
                                    break;
                                case 88:
                                    u[o[++d]] = u[o[++d]] >>> o[++d];
                                    break;
                                case 89:
                                    u[o[++d]] = ly(u[o[++d]], u[o[++d]]);
                                    break;
                                case 90:
                                    u[o[++d]][o[++d]] = u[o[++d]];
                                    break;
                                case 91:
                                    u[o[++d]] = u[o[++d]],
                                    u[o[++d]] = u[o[++d]] < u[o[++d]],
                                    d += u[o[++d]] ? o[++d] : o[(++d,
                                    ++d)];
                                    break;
                                case 92:
                                    for (u[o[++d]][o[++d]] = u[o[++d]],
                                    g = [],
                                    c = o[++d]; c > 0; c--)
                                        g.push(u[o[++d]]);
                                    u[o[++d]] = n(d + o[++d], g, A, r, a);
                                    try {
                                        Object.defineProperty(u[o[d - 1]], "length", {
                                            value: o[++d],
                                            configurable: !0,
                                            writable: !1,
                                            enumerable: !1
                                        })
                                    } catch (e) {}
                                    break;
                                case 93:
                                    u[o[++d]] = u[o[++d]][o[++d]]
                                }
                        } catch (e) {
                            if (B.length > 0 && (i = []),
                            l = e,
                            i.push(d),
                            0 === B.length)
                                throw a ? a(e, u, i) : e;
                            d = B.pop(),
                            i.pop()
                        }
                }
            };
            return t ? void 0 : n
        }
    }();
    cy("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", !1)(6327, [], {
        get Object() {
            return "undefined" == typeof Object ? void 0 : Object
        },
        set Object(e) {
            Object = e
        },
        get moduleQimei() {
            return void 0 === sy ? void 0 : sy
        },
        set moduleQimei(e) {
            sy = e
        },
        get Uint32Array() {
            return "undefined" == typeof Uint32Array ? void 0 : Uint32Array
        },
        set Uint32Array(e) {
            Uint32Array = e
        },
        get window() {
            return "undefined" == typeof window ? void 0 : window
        },
        set window(e) {
            window = e
        },
        get String() {
            return "undefined" == typeof String ? void 0 : String
        },
        set String(e) {
            String = e
        },
        get Symbol() {
            return "undefined" == typeof Symbol ? void 0 : Symbol
        },
        set Symbol(e) {
            Symbol = e
        },
        get undefined() {},
        set undefined(e) {},
        get TypeError() {
            return "undefined" == typeof TypeError ? void 0 : TypeError
        },
        set TypeError(e) {
            TypeError = e
        },
        get Number() {
            return "undefined" == typeof Number ? void 0 : Number
        },
        set Number(e) {
            Number = e
        },
        get JSON() {
            return "undefined" == typeof JSON ? void 0 : JSON
        },
        set JSON(e) {
            JSON = e
        },
        get parseInt() {
            return "undefined" == typeof parseInt ? void 0 : parseInt
        },
        set parseInt(e) {
            parseInt = e
        },
        get Date() {
            return "undefined" == typeof Date ? void 0 : Date
        },
        set Date(e) {
            Date = e
        },
        get Array() {
            return "undefined" == typeof Array ? void 0 : Array
        },
        set Array(e) {
            Array = e
        },
        get Math() {
            return "undefined" == typeof Math ? void 0 : Math
        },
        set Math(e) {
            Math = e
        },
        get Promise() {
            return "undefined" == typeof Promise ? void 0 : Promise
        },
        set Promise(e) {
            Promise = e
        },
        get navigator() {
            return "undefined" == typeof navigator ? void 0 : navigator
        },
        set navigator(e) {
            navigator = e
        },
        get setTimeout() {
            return "undefined" == typeof setTimeout ? void 0 : setTimeout
        },
        set setTimeout(e) {
            setTimeout = e
        },
        get RegExp() {
            return "undefined" == typeof RegExp ? void 0 : RegExp
        },
        set RegExp(e) {
            RegExp = e
        }
    }, [!1, !0, void 0, null, 3988292384, .01], void 0)();
    var uy = sy.QimeiWebLite
      , Ey = function(e) {
        c(i, e);
        var o = Q(i);
        function i() {
            var e;
            return n(this, i),
            a(t(e = o.apply(this, arguments)), "qimeiClient", void 0),
            e
        }
        return r(i, [{
            key: "init",
            value: function() {
                this.initQimei()
            }
        }, {
            key: "initQimei",
            value: function() {
                this.qimeiClient = new uy({
                    appKey: "0WEB05IY85DVOASP"
                });
                var e = this.qimeiClient.getLocalQimei36()
                  , t = e.q36
                  , o = e.h38;
                this.player.setCommonKv(Nc.qimeiH38, o),
                this.player.setCommonKv(Nc.qimeiQ36, t),
                this.log("qimeiQ36=".concat(t, ", qimeiH38=").concat(o))
            }
        }, {
            key: "destroy",
            value: function() {
                this.qimeiClient = null,
                l(s(i.prototype), "destroy", this).call(this)
            }
        }]),
        i
    }(hf);
    a(Ey, "moduleName", "business-controller");
    var dy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "watermarkPlugin", void 0),
            a(t(o), "targetDefinition", void 0),
            a(t(o), "watermarks", {}),
            a(t(o), "checkDefinitions", (function(e) {
                var t = e.data.parseData;
                if (t) {
                    var i = t.definitionList;
                    if (i) {
                        o.targetDefinition = function(e) {
                            return e.find((function(e) {
                                return 1 === e.sl
                            }
                            ))
                        }(i);
                        var n = i.find(Iy);
                        n && o.setupSuhdWatermark(n.feature)
                    }
                }
            }
            )),
            a(t(o), "playSuhdWatermark", (function(e) {
                var t, i, n;
                (null === (t = e.data.level) || void 0 === t ? void 0 : t.defn) === Vd.suhd && (null === (i = o.watermarks[vy.suhdSwitchStart]) || void 0 === i || i.show(),
                null === (n = o.watermarks[vy.suhdSwitchStart]) || void 0 === n || n.play())
            }
            )),
            a(t(o), "changeSuhdWatermark", (function(t) {
                var i, n, A, r = t.data;
                null === (i = o.watermarks[vy.suhdSwitchStart]) || void 0 === i || i.hide(),
                Iy(o.targetDefinition) && r.code === e.ErrorCode.SUC && (null === (n = o.watermarks[vy.suhdSwitchEnd]) || void 0 === n || n.show(),
                null === (A = o.watermarks[vy.suhdSwitchEnd]) || void 0 === A || A.play())
            }
            )),
            o
        }
        return r(A, [{
            key: "isSuhdSet",
            get: function() {
                return !(!this.watermarks[vy.suhdSwitchStart] || !this.watermarks[vy.suhdSwitchEnd])
            }
        }, {
            key: "init",
            value: function() {
                var e = this.player.plugins["ui-watermark"];
                if (e)
                    return this.watermarkPlugin = e,
                    void this.setupEventHandlers();
                this.log("watermark plugin not found, skip init")
            }
        }, {
            key: "destroy",
            value: function() {
                this.watermarks = {},
                this.targetDefinition = void 0,
                this.watermarkPlugin = void 0,
                this.removeEventHandlers(),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setupEventHandlers",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.checkDefinitions),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.playSuhdWatermark),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.changeSuhdWatermark)
            }
        }, {
            key: "removeEventHandlers",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.checkDefinitions),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.playSuhdWatermark),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.changeSuhdWatermark)
            }
        }, {
            key: "setupSuhdWatermark",
            value: function(e) {
                var t = this.config
                  , o = t.suhdWatermarkUrls;
                if (t.enableSuhdWatermark && o) {
                    if (!this.isSuhdSet) {
                        var i = e & lB.aiEnhancedSuhd
                          , n = this.watermarkPlugin
                          , A = o.defaultStart
                          , r = o.defaultEnd
                          , a = o.aiEnhancedEnd;
                        if (A) {
                            var s = n.add({
                                id: fy[vy.suhdSwitchStart],
                                x: 0,
                                y: 0,
                                w: 0,
                                h: 0,
                                a: 100,
                                position: 1,
                                actionType: "lottie",
                                sizeReferenceMode: "container",
                                url: A,
                                keepAfterSessionEnd: !0
                            }, !1, !1);
                            this.watermarks[vy.suhdSwitchStart] = s
                        }
                        var l = i ? a : r;
                        if (l) {
                            var g = n.add({
                                id: fy[vy.suhdSwitchEnd],
                                x: 0,
                                y: 0,
                                w: 0,
                                h: 0,
                                a: 100,
                                position: 1,
                                actionType: "lottie",
                                sizeReferenceMode: "container",
                                url: l,
                                loop: !1,
                                keepAfterSessionEnd: !0
                            }, !1, !1);
                            this.watermarks[vy.suhdSwitchEnd] = g
                        }
                    }
                } else
                    this.log("suhd watermark not enabled, skip setup")
            }
        }]),
        A
    }(hf);
    a(dy, "moduleName", "watermark-controller");
    var By, hy, py, vy = {
        suhdSwitchStart: "suhd-switch-start",
        suhdSwitchEnd: "suhd-switch-end"
    }, fy = (a(By = {}, vy.suhdSwitchStart, "suhd-switch-start"),
    a(By, vy.suhdSwitchEnd, "suhd-switch-end"),
    By);
    function Iy(e) {
        return e.name === Vd.suhd
    }
    !function(e) {
        e[e.PRE = 1] = "PRE",
        e[e.PAUSE = 4] = "PAUSE"
    }(hy || (hy = {})),
    function(e) {
        e[e.UNSET = -1] = "UNSET",
        e[e.NO = 0] = "NO",
        e[e.YES = 1] = "YES"
    }(py || (py = {}));
    var yy, Cy, my, Qy, wy = {
        0: "unknown",
        1: "pre",
        2: "broadcast",
        3: "tail",
        4: "pause",
        5: "loading",
        6: "progress_preview",
        7: "video_resolution",
        8: "mid",
        9: "czc",
        10: "hls_mid",
        11: "corner",
        12: "plj",
        13: "video_in",
        14: "bs",
        15: "anchor_empty",
        16: "non_standard",
        17: "mid"
    };
    function Ty(e) {
        if (!e)
            return py.YES;
        var t;
        if (e.ad_scene === hy.PAUSE)
            return (null === (t = e.ad) || void 0 === t ? void 0 : t.pause) ? py.NO : py.YES;
        if (e.ad_scene === hy.PRE) {
            var o, i = {};
            null === (o = e.ads) || void 0 === o || o.forEach((function(e) {
                var t = wy[e.ad_type];
                if (t) {
                    i[t] || (i[t] = {
                        orders: 0
                    });
                    var o = e[t];
                    o && (i[t].orders = o.length)
                }
            }
            ));
            var n = i[wy[e.ad_scene]];
            return (null == n ? void 0 : n.orders) > 0 ? py.NO : py.YES
        }
        return py.YES
    }
    !function(e) {
        e[e.UNSET = 0] = "UNSET",
        e[e.SET_INFO = 1] = "SET_INFO",
        e[e.LOAD_AD = 2] = "LOAD_AD",
        e[e.LOAD_ASSET = 3] = "LOAD_ASSET",
        e[e.PLAY_AD = 4] = "PLAY_AD",
        e[e.PLAYING = 5] = "PLAYING"
    }(yy || (yy = {})),
    function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN",
        e[e.IMAGE = 1] = "IMAGE",
        e[e.VIDEO = 2] = "VIDEO"
    }(Cy || (Cy = {})),
    function(e) {
        e.SUCC = "0",
        e.UNKNOWN = "-1",
        e.CLOSE = "-2",
        e.NO_AD_CORE = "-3",
        e.DESTROY = "-4",
        e.AD_STATE_INVALID = "-5",
        e.PLAY_CAUGHT = "-6"
    }(my || (my = {}));
    var Sy = (a(Qy = {}, e.AdFinishType.AD_STATE_INVALID, "-5"),
    a(Qy, e.AdFinishType.PLAY_CAUGHT, "-6"),
    Qy)
      , _y = !1
      , Dy = function() {
        function t(o, i, A) {
            var r = this;
            n(this, t),
            a(this, "context", void 0),
            a(this, "adPlugin", void 0),
            a(this, "adPluginCore", void 0),
            a(this, "flags", []),
            a(this, "adEmptyState", py.UNSET),
            a(this, "logger", void 0),
            a(this, "loadStartTime", 0),
            a(this, "hasAdVideoEl", !0),
            a(this, "firstRenderingReported", !1),
            a(this, "isFirstPlay", !1),
            a(this, "isPreloadSession", !1),
            a(this, "isAdEventsBinded", !1),
            a(this, "rptCallback", void 0),
            a(this, "isDestroyed", !1),
            a(this, "hasAutoplayBlocked", !1),
            a(this, "onAdCoreAutoplayBlocked", (function() {
                r.hasAutoplayBlocked = !0
            }
            )),
            a(this, "onAdCoreStateChange", (function(t) {
                if (t.data.new === e.VIDEO_STATE.LOAD_START) {
                    r.loadStartTime = +new Date;
                    try {
                        var o = r.context.container;
                        r.hasAdVideoEl = !!o.querySelector('[data-role="creative-player-video-container"] video')
                    } catch (t) {}
                    r.setAdFunnelFlag(3)
                }
            }
            )),
            a(this, "onAdSessionStart", (function(e) {
                var t, o;
                e.data.adType === r.context.adType && (r.setAdCoreEvents(!1),
                r.adPluginCore = null === (o = r.adPlugin) || void 0 === o || null === (t = o.getPlayerInstance) || void 0 === t ? void 0 : t.call(o, r.context.adType),
                r.log("onAdSessionStart, adCore exist=".concat(!!r.adPluginCore)),
                r.adPluginCore ? r.setAdCoreEvents(!0) : r.reportFirstRenderingAd("-3"))
            }
            )),
            a(this, "onPauseAdImgAssetsLoaded", (function(e) {
                e.data.adType === r.context.adType && r.adEmptyState !== py.UNSET && 1 === e.data.materialType && (r.setAdFunnelFlag(5),
                r.reportFirstRenderingAd("0", !1, "", e.data.materialType))
            }
            )),
            a(this, "onPauseAdEnd", (function(t) {
                t.data.adType === r.context.adType && r.adEmptyState !== py.UNSET && r.finish({
                    type: e.AdFinishType.AD_END_EVT,
                    data: t.data
                })
            }
            )),
            a(this, "onAdFirstPlaying", (function() {
                r.setAdFunnelFlag(5),
                r.reportFirstRenderingAd("0")
            }
            )),
            a(this, "onPageHide", (function() {
                r.reportFirstRenderingAd("-2", !0)
            }
            )),
            this.adPlugin = o,
            this.context = i,
            this.rptCallback = A,
            this.logger = new ia(this.context.instanceid,"AdFunnel.".concat(this.context.adType)),
            this.context.adType === e.AD_TYPE.PRE && (this.isFirstPlay = !_y,
            _y = !0),
            this.setAdEvents(!0)
        }
        return r(t, [{
            key: "destroy",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.isDestroyed || (this.isDestroyed = !0,
                e ? this.close() : this.reportFirstRenderingAd("-4"),
                this.context = null,
                this.logger = null,
                this.adPlugin = null,
                this.adPluginCore = null,
                this.rptCallback = null)
            }
        }, {
            key: "reset",
            value: function() {
                this.adPluginCore = null,
                this.firstRenderingReported = !1,
                this.loadStartTime = 0,
                this.hasAdVideoEl = !0,
                this.adEmptyState = py.UNSET,
                this.flags = [],
                this.hasAutoplayBlocked = !1,
                this.setAdEvents(!0)
            }
        }, {
            key: "setAdInfo",
            value: function(e, t) {
                this.isPreloadSession = t,
                this.adEmptyState = this.reportSetInfo(e, t),
                this.setAdFunnelFlag(1),
                this.adEmptyState === py.NO && (window.addEventListener("pagehide", this.onPageHide),
                window.addEventListener("beforeunload", this.onPageHide))
            }
        }, {
            key: "loadAd",
            value: function() {
                this.setAdFunnelFlag(2)
            }
        }, {
            key: "playAd",
            value: function() {
                this.isPreloadSession && (this.loadStartTime = +new Date),
                this.setAdFunnelFlag(4)
            }
        }, {
            key: "finish",
            value: function(t) {
                var o = t || {}
                  , i = o.type
                  , n = o.data
                  , A = Sy[i]
                  , r = ""
                  , a = !1;
                if (i === e.AdFinishType.AD_END_EVT) {
                    var s, l = n || {}, g = l.reason, c = l.errors;
                    A = null == c || null === (s = c.map((function(e) {
                        return "false" === e ? "0" : e
                    }
                    ))) || void 0 === s ? void 0 : s.join(","),
                    r = g,
                    "浏览器关闭" === g && (a = !0,
                    A = "-2")
                } else
                    i === e.AdFinishType.AD_STATE_INVALID && (r = (n || {}).adLoadStatus);
                A || (A = "-1"),
                this.reportFirstRenderingAd(A, a, r)
            }
        }, {
            key: "setAdEvents",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.adPlugin && this.isAdEventsBinded !== t) {
                    this.isAdEventsBinded = t;
                    var o = t ? this.adPlugin.on : this.adPlugin.off;
                    o.call(this.adPlugin, "adPlayerSessionStartEvt", this.onAdSessionStart),
                    this.context.adType === e.AD_TYPE.ZT && (o.call(this.adPlugin, "AD_ASSETS_LOADED", this.onPauseAdImgAssetsLoaded),
                    o.call(this.adPlugin, "AD_END", this.onPauseAdEnd))
                }
            }
        }, {
            key: "setAdCoreEvents",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.adPluginCore) {
                    var o = t ? this.adPluginCore.on : this.adPluginCore.off;
                    o.call(this.adPluginCore, e.PLAY_EVENT.STATE_CHANGE, this.onAdCoreStateChange),
                    o.call(this.adPluginCore, e.PLAY_EVENT.FIRST_PLAYING, this.onAdFirstPlaying),
                    o.call(this.adPluginCore, e.PLAY_EVENT.AUTOPLAY_BLOCKED, this.onAdCoreAutoplayBlocked)
                }
            }
        }, {
            key: "setAdFunnelFlag",
            value: function(e) {
                this.log("set flag", e),
                this.flags.push(e)
            }
        }, {
            key: "reportSetInfo",
            value: function(e, t) {
                var o = Ty(e)
                  , i = (null == e ? void 0 : e.ads) || (null == e ? void 0 : e.ad) ? 1 : 0
                  , n = {
                    stime: +new Date,
                    flowid: this.context.flowid,
                    vid: this.context.vid,
                    isEmpty: o,
                    hasAds: i,
                    isPreload: t ? 1 : 0,
                    isfirst: this.isFirstPlay ? 1 : 0,
                    adType: this.context.adType,
                    hasBk: window.__adBlockEnabled ? 1 : 0
                };
                return this.log("report setAdInfo, rptData is", n),
                this.rptCallback({
                    type: "setAdInfo",
                    rptData: n
                }),
                o
            }
        }, {
            key: "reportFirstRenderingAd",
            value: function(e, t, o) {
                var i, n, A = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                if (!this.firstRenderingReported)
                    if (this.firstRenderingReported = !0,
                    this.adEmptyState !== py.YES) {
                        if (!t || !this.isPreloadSession) {
                            var r = (null === (i = this.adPluginCore) || void 0 === i ? void 0 : i.currentVideoInfo) || {}
                              , a = r.demuxKernelStats
                              , s = r.cacheSize
                              , l = ((null === (n = this.adPluginCore) || void 0 === n ? void 0 : n.currentVideoElement) || {}).readyState
                              , g = void 0 === l ? -1 : l
                              , c = (this.adPluginCore || {}).kernelName
                              , u = {
                                adType: this.context.adType,
                                flowid: this.context.flowid,
                                vid: this.context.vid,
                                code: e,
                                stime: this.loadStartTime,
                                etime: +new Date,
                                isEmpty: this.adEmptyState,
                                s0: this.hasAdVideoEl ? 1 : 0,
                                s1: window.__adBlockEnabled ? 1 : 0,
                                s2: this.flags.join(",") || "",
                                s3: o || "",
                                cached: s > 0 ? 1 : 0,
                                adKernel: c,
                                isfirst: this.isFirstPlay ? 1 : 0,
                                isPreload: this.isPreloadSession ? 1 : 0,
                                hasAutoplayBlocked: this.hasAutoplayBlocked ? 1 : 0,
                                adVideoState: g,
                                materialType: A,
                                demuxStats: a ? za.safelyStringify(a) : ""
                            };
                            this.rptCallback({
                                type: "firstRendering",
                                rptData: u,
                                isPageHide: t
                            }),
                            this.close()
                        }
                    } else
                        this.close()
            }
        }, {
            key: "close",
            value: function() {
                this.log("close"),
                this.setAdEvents(!1),
                this.setAdCoreEvents(!1),
                window.removeEventListener("pagehide", this.onPageHide),
                window.removeEventListener("beforeunload", this.onPageHide),
                this.adPluginCore = null
            }
        }, {
            key: "log",
            value: function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                var i;
                (i = this.logger).log.apply(i, ["[".concat(this.context.flowid.slice(0, 8), "]")].concat(C(t)))
            }
        }]),
        t
    }()
      , Py = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "pauseAdFunnel", void 0),
            a(t(o), "onAdReqOver", (function(t) {
                var i = t.data;
                i.adType === hy.PAUSE && (i.adType = e.AD_TYPE.ZT),
                i.adType === e.AD_TYPE.ZT && o.getPauseAdInfoOver(i)
            }
            )),
            a(t(o), "onPlaySessionStart", (function(e) {
                var t = e.data
                  , i = Yg(o.player.instanceId);
                if (i) {
                    var n = t.flowid
                      , A = t.playItem;
                    o.createPauseAdFunnel(i, n, A)
                }
            }
            )),
            a(t(o), "onPlaySessionEnd", (function() {
                var e;
                null === (e = o.pauseAdFunnel) || void 0 === e || e.destroy(!0)
            }
            )),
            o
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.player.config.type !== e.PLAY_MODE.LIVE && this.setupEventListeners()
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                this.removeEventListeners(),
                null === (e = this.pauseAdFunnel) || void 0 === e || e.destroy(!0),
                this.pauseAdFunnel = null
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GET_AD_INFO_OVER, this.onAdReqOver),
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onPlaySessionStart),
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onPlaySessionEnd)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GET_AD_INFO_OVER, this.onAdReqOver),
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.onPlaySessionStart),
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onPlaySessionEnd)
            }
        }, {
            key: "createPauseAdFunnel",
            value: function(t, o, i) {
                var n = this
                  , A = {
                    instanceid: this.player.instanceId,
                    flowid: o,
                    vid: i,
                    adType: e.AD_TYPE.ZT,
                    container: this.player.config.container
                };
                this.pauseAdFunnel = new Dy(t,A,(function(t) {
                    n.player.pluginMsg.emit(e.PLAY_EVENT_EXT.OPAQUE_FLOWNODE_EVT, {
                        eType: e.FlowNodeOpaqueEvtType.AD_FUNNEL,
                        eData: t
                    })
                }
                ))
            }
        }, {
            key: "getPauseAdInfoOver",
            value: function(t) {
                if (this.pauseAdFunnel) {
                    var o = t.adInfo;
                    this.player.pluginMsg.emit(e.PLAY_EVENT_EXT.OPAQUE_FLOWNODE_EVT, {
                        eType: e.FlowNodeOpaqueEvtType.GET_AD_INFO_OVER,
                        eData: E(u({}, t), {
                            isEmpty: Ty(o)
                        })
                    }),
                    this.pauseAdFunnel.reset(),
                    o && this.pauseAdFunnel.setAdInfo(o, !1)
                }
            }
        }]),
        A
    }(hf);
    a(Py, "moduleName", "ad-controller");
    var Fy, Ly = function(t) {
        c(i, t);
        var o = Q(i);
        function i() {
            return n(this, i),
            o.apply(this, arguments)
        }
        return r(i, [{
            key: "init",
            value: function() {
                if (this.config.decScriptUrl) {
                    if (!function(e) {
                        var t = ts.getDomainOfURL(e);
                        return !(!/woa\.com$/.test(t) && !/^blob:/.test(e))
                    }(this.config.decScriptUrl))
                        throw new Error("decScriptUrl must be vaild");
                    var t = this.player.config;
                    t.hlsjsKernelConfig = E(u({}, t.hlsjsKernelConfig), {
                        decScriptUrl: this.config.decScriptUrl
                    }),
                    t.type === e.PLAY_MODE.VOD ? t.getinfoConfig = E(u({}, t.getinfoConfig), {
                        enableTxEnc: !0
                    }) : t.getinfoLiveConfig = E(u({}, t.getinfoLiveConfig), {
                        enableTxEnc: !0
                    })
                }
            }
        }]),
        i
    }(hf);
    a(Ly, "moduleName", "dec-controller"),
    function(e) {
        e.SD = "sd",
        e.HD = "hd",
        e.SHD = "shd",
        e.FHD = "fhd",
        e.UHD = "uhd",
        e.DOLBY = "dolby",
        e.HDR10 = "hdr10",
        e.SFR_HDR = "sfr_hdr"
    }(Fy || (Fy = {}));
    var Yy, Ry, by = {
        AUTO: 0,
        H264: 1,
        H265: 2,
        O266: 3
    }, ky = (a(Yy = {}, e.VIDEO_CODEC.H265, [e.VIDEO_CODEC.H265]),
    a(Yy, e.VIDEO_CODEC.H266, [e.VIDEO_CODEC.H266, e.VIDEO_CODEC.H265]),
    Yy), Gy = ["full", "lt"];
    !function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN",
        e[e.FRAME_DROP = 1] = "FRAME_DROP",
        e[e.WASM_RENDER = 2] = "WASM_RENDER",
        e[e.WASM_SPT_ERR = 3] = "WASM_SPT_ERR",
        e[e.ORG_SPT_ERR = 4] = "ORG_SPT_ERR",
        e[e.USER = 5] = "USER",
        e[e.LAST = 6] = "LAST",
        e[e.AUDIO_VIVID_ERR = 7] = "AUDIO_VIVID_ERR"
    }(Ry || (Ry = {}));
    var Ny = "__thumbplayer_degradecodec_time"
      , My = function(e) {
        c(i, e);
        var o = Q(i);
        function i(e) {
            var A;
            return n(this, i),
            a(t(A = o.call(this, {
                config: e.config
            })), "player", void 0),
            a(t(A), "isRetryedInSession", !1),
            A.player = e,
            A
        }
        return r(i, [{
            key: "getRetryConfig",
            value: function(e, t) {
                var o = l(s(i.prototype), "getRetryConfig", this).call(this, e)
                  , n = t || {}
                  , A = n.degradeCodecExpireTime
                  , r = void 0 === A ? 0 : A
                  , a = n.degradeReason
                  , g = void 0 === a ? Ry.UNKNOWN : a;
                if (o && g !== Ry.UNKNOWN && this.canDegradeCodecDefn()) {
                    var c = o.updatePlayParam.videoReqInfoParam;
                    c.hevclv = yd.NOT_SPT,
                    c.sphevcfps = yd.NOT_SPT,
                    c.spav1 = 0
                } else
                    r = 0,
                    g = Ry.UNKNOWN;
                return E(u({}, o), {
                    degradeCodecExpireTime: r,
                    degradeReason: g
                })
            }
        }, {
            key: "canDegradeCodecDefn",
            value: function(e) {
                return e || (e = this.player.getCommonKv(Nc.currentDefn)),
                -1 !== [Fy.SD, Fy.HD, Fy.SHD, Fy.FHD].indexOf(e)
            }
        }]),
        i
    }(yE);
    a(My, "checkerName", "CheckSuperBase");
    var Uy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.ERROR),
            o
        }
        return r(A, [{
            key: "check",
            value: function(e) {
                var t, o = e.data.videoInfo, i = o.error;
                if (!(null === (t = this.player.config.tvkConfig) || void 0 === t ? void 0 : t.allowDRMDowngrade))
                    return null;
                if ((null == i ? void 0 : i.type) === ms.Encryption && i.errorCode !== us.HDCP_ERROR) {
                    var n = this.getRetryConfig(o);
                    return n.updatePlayParam.videoReqInfoParam.drm = 0,
                    n
                }
                return null
            }
        }]),
        A
    }(My);
    a(Uy, "checkerName", "CheckDRMRuntimeError");
    var Oy = function(o) {
        c(A, o);
        var i = Q(A);
        function A(o) {
            var r;
            return n(this, A),
            a(t(r = i.call(this, o)), "checkEvt", e.PLAY_EVENT.TIME_UPDATE),
            a(t(r), "checkerConfig", void 0),
            a(t(r), "lastCheckTime", 0),
            a(t(r), "lastQualityItem", null),
            a(t(r), "stalledQueue", []),
            a(t(r), "stalledCount", 0),
            a(t(r), "onVideoElChanged", (function() {
                r.logger.log("@onVideoElChanged() call this.reset()"),
                r.reset()
            }
            )),
            r.checkerConfig = r.mergeConfig(),
            r.bindEvts(!0),
            r
        }
        return r(A, [{
            key: "destroy",
            value: function() {
                this.bindEvts(!1)
            }
        }, {
            key: "check",
            value: function(e) {
                return this.needIgnore(e) || this.needIgnoreBecausePlayTimeCloseToBuffer() ? null : this.checkFrameDrop() ? (this.reset(),
                "hidden" === document.visibilityState ? (this.logger.log('Skip codec_downgrade due to document.visibility === "hidden".'),
                null) : this.getRetryConfig(e.data.videoInfo, {
                    degradeCodecExpireTime: this.player.config.maxDegradeCodecExpireTime,
                    degradeReason: Ry.FRAME_DROP
                })) : null
            }
        }, {
            key: "bindEvts",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? this.player.off.bind(this.player) : this.player.on.bind(this.player);
                t(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_END, this.onVideoElChanged),
                t(e.PLAY_EVENT.VIDEONODE_CHANGE, this.onVideoElChanged)
            }
        }, {
            key: "getRetryConfig",
            value: function(t, o) {
                var i = l(s(A.prototype), "getRetryConfig", this).call(this, t)
                  , n = t.config.videoCodec
                  , r = u({}, i.updatePlayParam.videoReqInfoParam);
                return i && this.canDegradeCodecDefn() ? (r.spvvc = Cd.NOT_SPT,
                this.logger.log("Remove spvvc param"),
                n === e.VIDEO_CODEC.H265 && (this.logger.log("Remove hevclv param"),
                r.hevclv = yd.NOT_SPT,
                r.sphevcfps = yd.NOT_SPT),
                this.logger.log("nextVideoReqParam = ".concat(za.safelyStringify(r))),
                i.updatePlayParam.videoReqInfoParam = r,
                u({}, i, o)) : l(s(A.prototype), "getRetryConfig", this).call(this, t, o)
            }
        }, {
            key: "reset",
            value: function() {
                this.lastQualityItem = null,
                this.stalledQueue = [],
                this.stalledCount = 0
            }
        }, {
            key: "needIgnore",
            value: function(t) {
                var o, i = t.data.videoInfo;
                return !(this.player.config.enableDegradeOnLowPerformance && (null === (o = this.player) || void 0 === o ? void 0 : o.currentVideoInfo) && i.config.videoCodec !== e.VIDEO_CODEC.H264 && this.canDegradeCodecDefn() && !this.isRetryedInSession)
            }
        }, {
            key: "needIgnoreBecausePlayTimeCloseToBuffer",
            value: function() {
                for (var e = this.player, t = e.playtime, o = e.videoBuffered, i = 0; i < o.length; i++)
                    if (Math.abs(o[i].end - t) < 3)
                        return !0;
                return !1
            }
        }, {
            key: "checkFrameDrop",
            value: function() {
                var e = performance.now();
                if (e - this.lastCheckTime < this.checkerConfig.checkInterval)
                    return !1;
                this.lastCheckTime = e;
                var t = this.player.currentVideoInfo.qualityInfo;
                return this.checkAverageDropPercent(t) ? (this.logger.warn("average frameDrop rate is too high", {
                    qualityInfo: t
                }),
                this.updateLastQualityItem(t),
                !0) : this.checkStalled(t) ? (this.updateLastQualityItem(t),
                this.logger.warn("Multiple stalled detected", {
                    qualityInfo: t,
                    stalledCount: this.stalledCount,
                    queue: this.stalledQueue.join(",")
                }),
                !0) : (this.updateLastQualityItem(t),
                !1)
            }
        }, {
            key: "updateLastQualityItem",
            value: function(e) {
                var t = e.droppedVideoFrames
                  , o = e.totalVideoFrames;
                this.lastQualityItem = {
                    droppedVideoFrames: t,
                    totalVideoFrames: o
                }
            }
        }, {
            key: "checkAverageDropPercent",
            value: function(e) {
                var t = this.checkerConfig
                  , o = t.stalledQueueSize
                  , i = t.avgFrameDropThreshold
                  , n = e.droppedVideoFrames / e.totalVideoFrames;
                return !(!Number.isFinite(n) || n < 0 || n > 1) && this.stalledQueue.length >= o && n >= i
            }
        }, {
            key: "checkStalled",
            value: function(e) {
                var t = this.checkerConfig
                  , o = t.stalledPrintThreshold
                  , i = t.stalledThreshold
                  , n = t.stalledQueueSize
                  , A = t.stalledCountThreshold
                  , r = this.lastQualityItem || {
                    droppedVideoFrames: 0,
                    totalVideoFrames: 1
                }
                  , a = r.droppedVideoFrames
                  , s = r.totalVideoFrames
                  , l = e.droppedVideoFrames - a
                  , g = e.totalVideoFrames - s
                  , c = l / g;
                return !(!Number.isFinite(c) || c < 0 || c > 1) && (c > o && this.logger.warn("Stall detected", {
                    fps: g - l,
                    frameDropped: l,
                    quality: e,
                    lastQuality: this.lastQualityItem
                }),
                c > i ? (this.stalledCount += 1,
                this.stalledQueue.push(1)) : this.stalledQueue.push(0),
                this.stalledQueue.length > n && this.stalledQueue.shift() && (this.stalledCount -= 1),
                this.stalledCount >= A || void 0)
            }
        }, {
            key: "mergeConfig",
            value: function() {
                var e, t = (null !== (e = this.player.config.tvkConfig) && void 0 !== e ? e : {}).frameDropCheckerConfig;
                return u({}, Ky, void 0 === t ? {} : t)
            }
        }]),
        A
    }(My);
    a(Oy, "checkerName", "CheckFrameDropRate");
    var Ky = {
        checkInterval: 1e3,
        avgFrameDropThreshold: .2,
        stalledQueueSize: 10,
        stalledThreshold: .4,
        stalledPrintThreshold: .4,
        stalledCountThreshold: 3
    }
      , xy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.ERROR),
            o
        }
        return r(A, [{
            key: "check",
            value: function(t) {
                var o, i, n = t.data.videoInfo, A = n.error, r = this.player.config.enableDegradeOnLowPerformance;
                if (this.isRetryedInSession)
                    return null;
                if (!n.config || n.config.videoCodec === e.VIDEO_CODEC.H264 || !r)
                    return null;
                var a = null === (i = A.code) || void 0 === i || null === (o = i.split) || void 0 === o ? void 0 : o.call(i, ".")[0];
                return a !== Ba.MEDIA_ERR_DECODE && a !== Ba.MEDIA_ERR_SRC_NOT_SUPPORTED ? null : (this.isRetryedInSession = !0,
                this.getRetryConfig(n, {
                    degradeCodecExpireTime: 0,
                    degradeReason: Ry.ORG_SPT_ERR
                }))
            }
        }]),
        A
    }(My);
    a(xy, "checkerName", "CheckNoH264Error");
    var Vy = function(t) {
        c(i, t);
        var o = Q(i);
        function i() {
            return n(this, i),
            o.apply(this, arguments)
        }
        return r(i, [{
            key: "getRetryConfig",
            value: function(t) {
                var o = l(s(i.prototype), "getRetryConfig", this).call(this, t)
                  , n = this.config.maxRetryGetinfoTimes
                  , A = o.degradeReason || Ry.UNKNOWN;
                if (this.retryTimes === n) {
                    var r = o.updatePlayParam.videoReqInfoParam;
                    this.logger.warn("degrade retry on last time[".concat(this.retryTimes, "/").concat(n, "]"), o),
                    r.hevclv = yd.NOT_SPT,
                    r.sphevcfps = yd.NOT_SPT,
                    r.spav1 = 0,
                    this.config.type === e.PLAY_MODE.VOD ? r.dtype = 1 : r.defn = "auto",
                    A = Ry.LAST
                }
                var a = t.error
                  , g = t.loadingUrl;
                return (null == a ? void 0 : a.type) === ms.Native && (null == a ? void 0 : a.errorCode) === ha.MEDIA_ERR_DECODE && "mp4" === ts.getFileExtension(g) && is.browser.chrome && t.config.kernelName === e.KERNEL_NAME.ORIGIN && t.config.videoCodec === e.VIDEO_CODEC.H264 && ja.supportMSE() && (this.logger.log("media decode error at video src= playback with h264 mp4, degrade kernel to demux2fmp4"),
                o.updatePlayParam.videoLoadParam.kernelName = e.KERNEL_NAME.DEMUX_2_FMP4,
                o.retryWithoutGetInfo = !0,
                o.videoInfo = t),
                E(u({}, o), {
                    degradeCodecExpireTime: 0,
                    degradeReason: A
                })
            }
        }]),
        i
    }(CE);
    a(Vy, "checkerName", "CheckSuperNormalError");
    var Hy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.ERROR),
            o
        }
        return r(A, [{
            key: "check",
            value: function(t) {
                var o, i = t.data.videoInfo, n = i.playtime, A = i.error;
                if (this.isRetryedInSession)
                    return null;
                var r = null == A || null === (o = A.code) || void 0 === o ? void 0 : o.split(".")[0];
                return !this.player.config.retryHevcByWasmIfOriginErr || !i.config || i.config.videoCodec !== e.VIDEO_CODEC.H265 || this.player.kernelName === e.KERNEL_NAME.WASM || r !== Ba.MEDIA_ERR_DECODE && r !== Ba.MEDIA_ERR_SRC_NOT_SUPPORTED ? null : (this.isRetryedInSession = !0,
                {
                    error: A,
                    updatePlayParam: {
                        videoLoadParam: {
                            startTime: n,
                            kernelName: e.KERNEL_NAME.WASM
                        }
                    }
                })
            }
        }]),
        A
    }(My);
    a(Hy, "checkerName", "CheckOriginPlayHevcError");
    var jy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.VIDEO_FRAME_RENDER),
            a(t(o), "lowRenderFrameCount", 0),
            a(t(o), "lowRenderFrameTimeCostArr", []),
            a(t(o), "renderTotalCount", 0),
            o
        }
        return r(A, [{
            key: "check",
            value: function(t) {
                var o = this.player.config.minRenderFrameRate
                  , i = this.player.config.maxLowRenderFrameRate
                  , n = this.player.config.enableDegradeOnLowPerformance
                  , A = this.player.config.maxDegradeCodecExpireTime
                  , r = this.player.playbackRate
                  , a = t.data.videoInfo;
                if (!n || !(o < 1 && o > 0 && i < 1 && i > 0) || this.player.kernelName !== e.KERNEL_NAME.WASM || !this.canDegradeCodecDefn() || is.os.windows)
                    return null;
                var s = (this.player.currentVideoInfo || {}).videoFrameRate;
                if (!s || s < 0)
                    return null;
                if (this.isRetryedInSession)
                    return null;
                var l = 1e3 / s * o / r
                  , g = t.data.renderCostTime;
                if (this.lowRenderFrameTimeCostArr.push(g),
                g < l && this.lowRenderFrameCount++,
                this.renderTotalCount++,
                this.renderTotalCount >= 1e3) {
                    var c = this.lowRenderFrameCount / this.renderTotalCount;
                    if (this.renderTotalCount = 0,
                    this.lowRenderFrameCount = 0,
                    c > i)
                        return this.logger.log("low render frame rate ".concat(c, " is more than ").concat(i)),
                        this.isRetryedInSession = !0,
                        this.getRetryConfig(a, {
                            degradeCodecExpireTime: A,
                            degradeReason: Ry.WASM_RENDER
                        })
                }
                return null
            }
        }, {
            key: "getRetryConfig",
            value: function(t, o) {
                var i = l(s(A.prototype), "getRetryConfig", this).call(this, t)
                  , n = t.config.videoCodec
                  , r = u({}, i.updatePlayParam.videoReqInfoParam);
                return i && this.canDegradeCodecDefn() ? (r.spvvc = Cd.NOT_SPT,
                n === e.VIDEO_CODEC.H265 && (r.hevclv = yd.NOT_SPT,
                r.sphevcfps = yd.NOT_SPT),
                i.updatePlayParam.videoReqInfoParam = r,
                u({}, i, o)) : l(s(A.prototype), "getRetryConfig", this).call(this, t, o)
            }
        }]),
        A
    }(My);
    a(jy, "checkerName", "CheckRenderPerformance");
    var qy = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.ERROR),
            o
        }
        return r(A, [{
            key: "check",
            value: function(t) {
                var o, i, n = t.data.videoInfo, A = n.playtime, r = n.error;
                if (this.isRetryedInSession)
                    return null;
                var a = null == r || null === (o = r.code) || void 0 === o ? void 0 : o.split(".")[0];
                return is.browser.safari && this.player.kernelName === e.KERNEL_NAME.HLS_JS && (null === (i = n.config) || void 0 === i ? void 0 : i.videoCodec) === e.VIDEO_CODEC.H264 && a === Ba.MEDIA_ERR_DECODE ? (this.isRetryedInSession = !0,
                {
                    error: r,
                    updatePlayParam: {
                        videoLoadParam: {
                            startTime: A,
                            kernelName: e.KERNEL_NAME.ORIGIN
                        }
                    }
                }) : null
            }
        }]),
        A
    }(My);
    a(qy, "checkerName", "CheckSafariHlsError");
    var Wy, Jy = {
        UNKNOWN: "70060000",
        LOAD_WASM_MAIN_SCRIPT: "70060001",
        LOAD_WASM_SPWAN_WORKER_SCRIPT: "70060002",
        NOT_SUPPROT: "70060003",
        LOAD_WASM: "70060004",
        NET_UNABLE: "70060005",
        NET_STATUS_CODE: "70060006",
        RUNTIME: "70060007",
        LOAD_IFRAME: "70060008",
        FILE_SIZE: "70060009",
        P2P_URL_NOT_MATCH: "70060020",
        P2P_LOAD_FAILED: "70060021",
        P2P_LOAD_TIMEOUT: "70060022",
        INIT_WASM_MODULE: "70060301",
        EMSCRIPTEN_RUNTIME_ERROR: "70060401"
    }, zy = [Jy.INIT_WASM_MODULE, Jy.LOAD_WASM_MAIN_SCRIPT, Jy.LOAD_WASM_SPWAN_WORKER_SCRIPT, Jy.LOAD_WASM, Jy.LOAD_IFRAME, Jy.NOT_SUPPROT, Jy.RUNTIME, Jy.EMSCRIPTEN_RUNTIME_ERROR], Xy = (a(Wy = {}, Jy.EMSCRIPTEN_RUNTIME_ERROR, 0),
    a(Wy, Jy.RUNTIME, 0),
    Wy), Zy = function(o) {
        c(A, o);
        var i = Q(A);
        function A(o) {
            var r;
            return n(this, A),
            a(t(r = i.call(this, o)), "checkEvt", e.PLAY_EVENT.ERROR),
            a(t(r), "showTipsFlag", !1),
            a(t(r), "onVideoPlaying", (function() {
                var e;
                r.showTipsFlag && (null === (e = r.player.plugins.tips) || void 0 === e || e.show(xa.tvk.AUDIO_VIVID_DEGRADE_TEXT)),
                r.showTipsFlag = !1
            }
            )),
            o.on(e.H5_PLAY_EVENT.VIDEO_PLAYING, r.onVideoPlaying),
            r
        }
        return r(A, [{
            key: "destroy",
            value: function() {
                this.player.off(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoPlaying),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "check",
            value: function(t) {
                var o = t.data.videoInfo
                  , i = o.error
                  , n = o.config.audioTrack
                  , A = i.code
                  , r = this.player
                  , a = r.currentVideoInfo;
                return r.kernelName === e.KERNEL_NAME.WASM_AUDIOVIVID && n && $y.includes(A) ? (this.showTipsFlag = !0,
                this.getRetryConfig(a, {
                    degradeCodecExpireTime: -1,
                    degradeReason: Ry.AUDIO_VIVID_ERR
                })) : null
            }
        }, {
            key: "getRetryConfig",
            value: function(t, o) {
                var i = l(s(A.prototype), "getRetryConfig", this).call(this, t);
                return o.degradeReason === Ry.AUDIO_VIVID_ERR && (i.updatePlayParam.videoReqInfoParam.track = "",
                this.player.setCommonKv(e.PersistedUserSettings.audioTrack, "")),
                u({}, i, o)
            }
        }]),
        A
    }(My);
    a(Zy, "checkerName", "CheckAudioVividError");
    var $y = C(Object.values(Jy)).concat(["70060030"])
      , eC = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "checkEvt", e.PLAY_EVENT.ERROR),
            o
        }
        return r(A, [{
            key: "check",
            value: function(e) {
                var t = e.data.videoInfo
                  , o = t.error.code;
                if (this.isRetryedInSession)
                    return null;
                if (!this.player.config.enableDegradeOnLowPerformance)
                    return null;
                if (!zy.includes(o))
                    return null;
                var i, n = this.config, A = n.maxWasmFatalErrorForbiddenTimeMs, r = void 0 === A ? 0 : A, a = n.wasmFatalErrorForbiddenTimeMap, s = void 0 === a ? Xy : a;
                return this.isRetryedInSession = !0,
                this.getRetryConfig(t, {
                    degradeCodecExpireTime: null !== (i = s[o]) && void 0 !== i ? i : r,
                    degradeReason: Ry.WASM_SPT_ERR,
                    degradeCode: o
                })
            }
        }, {
            key: "getRetryConfig",
            value: function(e, t) {
                var o = l(s(A.prototype), "getRetryConfig", this).call(this, e);
                return t.degradeReason === Ry.WASM_SPT_ERR && (o.updatePlayParam.videoReqInfoParam.spvvc = 0),
                u({}, o, t)
            }
        }]),
        A
    }(My);
    function tC() {
        var e, t, o = NaN, i = NaN, n = Ry.UNKNOWN;
        try {
            var A = Va.getData(Ny)
              , r = JSON.parse(A || "{}");
            o = +r.time,
            i = +r.degradeExpireTime,
            n = r.degradeReason,
            e = r.videoCodec,
            t = r.defn
        } catch (e) {}
        return Number.isNaN(o) || Number.isNaN(i) || Date.now() >= o + i ? {
            needDegrade: !1
        } : {
            needDegrade: !0,
            degradeReason: n,
            videoCodec: e,
            defn: t
        }
    }
    a(eC, "checkerName", "CheckWasmError");
    var oC = function() {
        function t(e) {
            n(this, t),
            a(this, "preloadLoop", void 0),
            a(this, "context", void 0),
            a(this, "urlConfigInner", void 0),
            a(this, "logger", void 0),
            this.context = e,
            this.logger = new ia(e.config.instanceId,"TvkVideoPreloader")
        }
        return r(t, [{
            key: "destroy",
            value: function() {
                var e;
                null === (e = this.preloadLoop) || void 0 === e || e.destroy(),
                this.preloadLoop = null,
                this.context = null,
                this.urlConfigInner = null
            }
        }, {
            key: "stop",
            value: function() {
                this.logger.log("stop, playitem=".concat(this.context.playItem)),
                this.preloadLoop.destroy(),
                xs.emit(Ca.STOP, {
                    instanceId: this.context.instanceId
                })
            }
        }, {
            key: "start",
            value: function(e) {
                var t = this;
                return i((function() {
                    var o, i, n, A, r;
                    return F(this, (function(a) {
                        return o = t.context,
                        i = o.instanceId,
                        n = o.corePlayParam,
                        A = o.config,
                        r = o.playItem,
                        t.logger.log("start, playitem=".concat(r)),
                        t.urlConfigInner = e,
                        xs.emit(Ca.START, {
                            urlConfig: e,
                            instanceId: i,
                            videoLoadParam: n,
                            playerConfig: A
                        }),
                        t.startUpdateRemainTime(),
                        [2]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "urlConfig",
            get: function() {
                return this.urlConfigInner
            }
        }, {
            key: "startUpdateRemainTime",
            value: function() {
                var e = this
                  , t = -1;
                this.preloadLoop = new jA((function() {
                    var o = e.context.remainTimeGetter();
                    -1 !== o && t !== o && (t = o,
                    e.logger.log("loop, remaintime=".concat(o)),
                    xs.emit(Ca.UPDATE, {
                        remainTime: o,
                        instanceId: e.context.instanceId
                    }),
                    o <= 0 && e.stop())
                }
                ),UA.RAF),
                this.preloadLoop.start()
            }
        }], [{
            key: "isSupported",
            value: function(t, o) {
                var i, n = (t.config.tvkConfig || {}).minPreloadTimeUseDownloadkit, A = void 0 === n ? 3 : n;
                return !t.isUrlMode && (null == o ? void 0 : o.kernelName) === e.KERNEL_NAME.HLS_JS && ((null === (i = t.remainTimeGetter) || void 0 === i ? void 0 : i.call(t)) || 0) > A
            }
        }]),
        t
    }();
    _([Mn, D("design:type", Function), D("design:paramtypes", []), D("design:returntype", void 0)], oC.prototype, "destroy", null),
    _([Mn, D("design:type", Function), D("design:paramtypes", []), D("design:returntype", void 0)], oC.prototype, "stop", null),
    _([Mn, D("design:type", Function), D("design:paramtypes", ["undefined" == typeof IUrlConfig ? Object : IUrlConfig]), D("design:returntype", Promise)], oC.prototype, "start", null);
    var iC = function(o) {
        c(g, o);
        var A = Q(g);
        function g(e, o) {
            var i, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n(this, g),
            a(t(i = A.call(this, o, {
                retryCheckers: [new Oy(e), new jy(e), new Zy(e), new eC(e), new Hy(e), new qy(e), new xy(e), new Uy(e), new Vy({
                    config: e.config
                })]
            })), "player", void 0),
            a(t(i), "videoPreloader", void 0),
            a(t(i), "isContiguous", !1),
            i.player = e,
            i.isContiguous = r,
            i
        }
        return r(g, [{
            key: "destroy",
            value: function() {
                var e;
                null === (e = this.videoPreloader) || void 0 === e || e.destroy(),
                this.videoPreloader = null,
                l(s(g.prototype), "destroy", this).call(this)
            }
        }, {
            key: "getIsContiguous",
            value: function() {
                return this.isContiguous
            }
        }, {
            key: "log",
            value: function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                    t[o] = arguments[o];
                var i;
                (i = l(s(g.prototype), "log", this)).call.apply(i, [this, "[".concat(this.context.playItem, "]")].concat(C(t)))
            }
        }, {
            key: "checkPreloadPostAd",
            value: function() {
                if (!this.player.isFakeLive) {
                    var e = this.player.previewDuration
                      , t = void 0 === e ? 0 : e
                      , o = this.corePlayer.playtime
                      , i = this.context.playParam.postAdReqLeftTime
                      , n = void 0 === i ? 10 : i;
                    if (is.mobile && 0 !== t) {
                        if (t > n && o + n >= t)
                            return void this.triggerPreloadNext()
                    } else
                        l(s(g.prototype), "checkPreloadPostAd", this).call(this)
                }
            }
        }, {
            key: "getLevelUrlConfig",
            value: function(t, o) {
                var n = this;
                return i((function() {
                    var i, A, r, a, s, l, g, c, u, E, d;
                    return F(this, (function(B) {
                        switch (B.label) {
                        case 0:
                            r = null === (i = n.corePlayer.currentVideoInfo) || void 0 === i ? void 0 : i.config,
                            n.context.updatePlayParam({
                                videoReqInfoParam: t
                            }),
                            B.label = 1;
                        case 1:
                            return B.trys.push([1, 3, , 4]),
                            [4, n.context.getVideoInfo()];
                        case 2:
                            return a = B.sent().getinfoRet,
                            [3, 4];
                        case 3:
                            throw s = B.sent(),
                            c = n.context.isLive ? null === (g = s.data) || void 0 === g || null === (l = g.params) || void 0 === l ? void 0 : l.msg : "",
                            {
                                code: s.code || e.ErrorCode.UNKNOWN,
                                message: c || s.message || ""
                            };
                        case 4:
                            return u = (a || {}).urlConfig,
                            E = u,
                            (null == o ? void 0 : o.setLevelMode) ? E.setLevelMode = o.setLevelMode : ((null == r ? void 0 : r.drmConfig) || E.drmConfig || E.chachaParam) && (E.setLevelMode = ra.HARD),
                            null !== (d = (A = E).setLevelMode) && void 0 !== d || (A.setLevelMode = ra.HARD),
                            [2, E]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "beforePrepareRetry",
            value: function(t) {
                var o, i, n = t.degradeCodecExpireTime, A = void 0 === n ? 0 : n, r = t.degradeReason, a = void 0 === r ? Ry.UNKNOWN : r, s = t.degradeCode;
                if (os.merge(t, {
                    updatePlayParam: {
                        videoReqInfoParam: u({}, null === (o = (i = this.player.config).getUserCookieForPlayback) || void 0 === o ? void 0 : o.call(i))
                    }
                }),
                this.reportCodecDegradeIfNeeded(t),
                A > 0) {
                    var l, g, c = ((null === (l = this.player.currentVideoInfo) || void 0 === l ? void 0 : l.config) || {}).videoCodec, E = void 0 === c ? e.VIDEO_CODEC.UNKNOWN : c, d = {
                        playerSize: Ja.getDomSize(this.player.container),
                        videoSize: this.player.videoSize,
                        url: location.href,
                        topUrl: ts.getTopFrameUrl(),
                        kernelName: this.player.kernelName,
                        flowid: this.player.getCommonKv(Nc.flowid),
                        guid: this.player.getCommonKv(Nc.guid),
                        defn: this.player.getCommonKv(Nc.currentDefn),
                        playtime: this.player.playtime,
                        duration: this.player.duration,
                        vid: this.player.vid,
                        loadingUrl: null === (g = this.player.currentVideoInfo) || void 0 === g ? void 0 : g.loadingUrl,
                        degradeCode: s,
                        videoCodec: E
                    };
                    this.log("start degrade retry, degradeReason=".concat(a, ", extraInfo="), d),
                    function(e, t, o) {
                        var i = JSON.stringify(u({
                            time: Date.now(),
                            degradeExpireTime: e,
                            degradeReason: t
                        }, o));
                        Va.setData(Ny, i)
                    }(A, a, d)
                }
            }
        }, {
            key: "preloadVod",
            value: function(e) {
                var t = this
                  , o = this;
                return i((function() {
                    return F(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return oC.isSupported(o.context, e) ? [4, o.preloadByDownloadKit(e)] : [3, 2];
                        case 1:
                            return i.sent(),
                            [2];
                        case 2:
                            return [2, l(s(g.prototype), "preloadVod", t).call(o, e)]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "startVod",
            value: function() {
                if (this.videoPreloader) {
                    var e = this.videoPreloader.urlConfig;
                    return this.destroyVideoPreloader(),
                    void this.corePlayer.play(e, this.context.corePlayParam)
                }
                return l(s(g.prototype), "startVod", this).call(this)
            }
        }, {
            key: "resetImpl",
            value: function() {
                this.destroyVideoPreloader(),
                l(s(g.prototype), "resetImpl", this).call(this)
            }
        }, {
            key: "preloadByDownloadKit",
            value: function(e) {
                var t = this;
                return i((function() {
                    return F(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return t.log("preload vod only videoData"),
                            t.videoPreloader = new oC(t.context),
                            [4, t.videoPreloader.start(e)];
                        case 1:
                            return o.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "reportCodecDegradeIfNeeded",
            value: function(e) {
                try {
                    var t, o, i = (this.player.config.tvkConfig || {}).codecDegradeReportConfig;
                    if (!i || "object" !== (void 0 === i ? "undefined" : d(i)) || is.spider)
                        return;
                    var n, A = e.degradeReason, r = void 0 === A ? Ry.UNKNOWN : A, a = e.degradeCode, s = null !== (n = i["".concat(r, ".").concat(a)]) && void 0 !== n ? n : i[r];
                    if (!s || Math.random() > s.rate)
                        return;
                    var l = s.codecIds
                      , g = this.player.getCommonKv(Nc.codecId);
                    if (l && l.length > 0 && !l.includes(g))
                        return;
                    var c = s.isFull
                      , u = void 0 !== c && c;
                    null === (o = this.player.offlineLog) || void 0 === o || null === (t = o.reportLogs({
                        downloadOnFailed: !1,
                        onlyCurrent: !u,
                        reportSource: "codecDegrade"
                    })) || void 0 === t || t.catch((function() {}
                    ))
                } catch (e) {
                    this.error("reportDegradeIfNeed skipped, error: ", e)
                }
            }
        }, {
            key: "destroyVideoPreloader",
            value: function() {
                this.videoPreloader && (this.videoPreloader.stop(),
                this.videoPreloader.destroy(),
                this.videoPreloader = null)
            }
        }]),
        g
    }(QE)
      , nC = function() {
        function e(t) {
            n(this, e),
            a(this, "vids", void 0),
            a(this, "logger", void 0),
            a(this, "player", void 0),
            a(this, "previewStartTime", 0),
            a(this, "isPreviewEnd", !1),
            this.player = t,
            this.logger = new ia(this.player.config.instanceId,"fakelive-preview")
        }
        return r(e, [{
            key: "destroy",
            value: function() {
                this.vids = null,
                this.logger = null,
                this.player = null
            }
        }, {
            key: "setVids",
            value: function(e) {
                this.vids = e
            }
        }, {
            key: "recordVidPreviewDuration",
            value: function(e, t) {
                var o = t.preview
                  , i = t.supplementaryInfo
                  , n = (null != i ? i : {}).contentInfo
                  , A = (null != n ? n : {}).preview
                  , r = null != A ? A : o;
                if (!(Number.isNaN(r) || r <= 0)) {
                    this.logger.log("vid=".concat(e, " 试看时长=").concat(r));
                    var a = this.vids.find((function(t) {
                        return t.vid === e
                    }
                    ));
                    a && (a.previewDuration = r)
                }
            }
        }, {
            key: "previewStart",
            value: function(e) {
                var t = e.vid
                  , o = e.previewDuration;
                if (o <= 0)
                    return this.isPreviewEnd = !0,
                    void (this.previewStartTime = 0);
                this.player.emit("previewStart", {
                    previewDuration: o,
                    vid: t
                }),
                this.isPreviewEnd = !1,
                this.previewStartTime = +new Date,
                this.vids.indexOf(e) > 0 && this.consumePreviewCnt(e)
            }
        }, {
            key: "checkPreviewOver",
            value: function(e) {
                var t = this
                  , o = e.vid
                  , i = e.previewDuration;
                this.previewStartTime <= 0 || this.isPreviewEnd || 1e3 * i - (+new Date - this.previewStartTime) > 0 || (this.isPreviewEnd = !0,
                setTimeout((function() {
                    t.player.emit("previewEnd", {
                        previewDuration: i,
                        vid: o
                    }),
                    t.player.stop("preview")
                }
                ), 0))
            }
        }, {
            key: "consumePreviewCnt",
            value: function(e) {
                this.logger.log("".concat(e.vid, " consume preview, req srv"));
                var t = ["pid=".concat(this.player.getCommonKv(Nc.fakeLivePid)), "logintoken=".concat(encodeURIComponent(vB().logintoken))]
                  , o = "1" === ts.getUrlParamByKey(location.href, "__testSrv")
                  , i = "".concat(o ? "https://testtxycdnauth.ilive.qq.com/tvk_rotation?" : "https://api.ilive.qq.com/tvk_rotation?").concat(t.join("&"));
                Wa.xhr({
                    responseType: "text",
                    method: "get",
                    url: i,
                    retryCount: 1
                })
            }
        }]),
        e
    }()
      , AC = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "vids", void 0),
            a(t(o), "vidIndex", 0),
            a(t(o), "pushVidIndex", 0),
            a(t(o), "canPushNextVid", !1),
            a(t(o), "transitionCanvas", void 0),
            a(t(o), "transitionCanvasCtx", void 0),
            a(t(o), "isVidListBuilded", !1),
            a(t(o), "previewLogic", void 0),
            a(t(o), "onSessionEnd", (function() {
                o.isVidListBuilded = !1
            }
            )),
            a(t(o), "onVideoSetLevelStart", (function(e) {
                var t, i = null === (t = e.data.level) || void 0 === t ? void 0 : t.defn;
                i && o.vids.forEach((function(e) {
                    var t;
                    return null == e || null === (t = e.ctx) || void 0 === t ? void 0 : t.updatePlayParam({
                        videoReqInfoParam: {
                            defn: i
                        }
                    })
                }
                ))
            }
            )),
            a(t(o), "onGetInfoOver", (function(e) {
                var t, i = e.data, n = i.error, A = i.parseData, r = i.urlConfig;
                if (!n && A && r) {
                    var a = A.vitem.vid
                      , s = A.vitem.pseudolive
                      , l = null == s || null === (t = s.playvidlist) || void 0 === t ? void 0 : t.length;
                    o.log("".concat(l > 0 ? "fakelive" : "contiguous/setLevel", " getinfo, vid=").concat(a)),
                    l > 0 && o.handleFirstVidGetinfo(a, s),
                    o.previewLogic.recordVidPreviewDuration(a, A)
                }
            }
            )),
            a(t(o), "onFlowNodeStart", (function(t) {
                if (t.data.name === e.FlowNodeName.PLAY_VIDEO) {
                    o.vidIndex = o.pushVidIndex;
                    var i = o.vids[o.vidIndex];
                    i.ctx = void 0,
                    o.log("start vid=".concat(i.vid)),
                    o.previewLogic.previewStart(i),
                    o.canPushNextVid = !0
                }
            }
            )),
            a(t(o), "onStateChange", (function(t) {
                var i = t.data;
                i.new === e.VIDEO_STATE.END ? o.showTransitionCanvas() : i.new === e.VIDEO_STATE.PLAYING && o.removeTransitionCanvas()
            }
            )),
            a(t(o), "onVideoTimeupdate", (function(t) {
                var i = t.data
                  , n = o.vids[o.vidIndex]
                  , A = i.playtime;
                if (o.canPushNextVid) {
                    var r = o.player.duration - (n.previewDuration <= 0 ? n.range.end : 0);
                    A + (r < 10 ? r - 1 : 10) >= r && (o.canPushNextVid = !1,
                    o.pushNextVid())
                }
                if (n.previewDuration <= 0) {
                    var a = o.player.duration - n.range.end;
                    n.range.end > 0 && A >= a && (o.log("skip vid=".concat(n.vid, ", tail=").concat(n.range.end, ", playtime=").concat(A)),
                    o.player.stopCurFlowNode({
                        endState: e.END_STATE.NORMAL
                    }))
                } else
                    o.previewLogic.checkPreviewOver(n)
            }
            )),
            o
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.setupListeners(),
                this.transitionCanvas = Ja.createDom('<canvas style="position:absolute;width:100%;height:100%;top:0px;left:0px;object-fit:cover;z-index:1"></canvas>'),
                this.transitionCanvasCtx = this.transitionCanvas.getContext("2d"),
                this.previewLogic = new nC(this.player)
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                this.removeTransitionCanvas(),
                this.removeListeners(),
                null === (e = this.previewLogic) || void 0 === e || e.destroy(),
                this.previewLogic = null,
                this.transitionCanvas = null,
                this.transitionCanvasCtx = null,
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setupListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.FLOW_NODE_START, this.onFlowNodeStart),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.onVideoSetLevelStart),
                this.player.on(e.PLAY_EVENT.STATE_CHANGE, this.onStateChange),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, this.onVideoTimeupdate),
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onSessionEnd)
            }
        }, {
            key: "removeListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.FLOW_NODE_START, this.onFlowNodeStart),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_SETLEVEL_START, this.onVideoSetLevelStart),
                this.player.off(e.PLAY_EVENT.STATE_CHANGE, this.onStateChange),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_TIMEUPDATE, this.onVideoTimeupdate),
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_END, this.onSessionEnd)
            }
        }, {
            key: "handleFirstVidGetinfo",
            value: function(e, t) {
                if (!this.isVidListBuilded) {
                    this.isVidListBuilded = !0,
                    this.log("vids=".concat(t.playvidlist, ", first vid=").concat(e));
                    var o = []
                      , i = [];
                    if (t.ext)
                        try {
                            var n = t.ext.replace("m3u8_head_time=", "").replace("m3u8_tail_time=", "").split("&");
                            o = JSON.parse(n[0]),
                            i = JSON.parse(n[1])
                        } catch (e) {}
                    this.log("vids range=[".concat(o, "], [").concat(i, "]")),
                    this.vidIndex = 0,
                    this.pushVidIndex = 0,
                    this.vids = [],
                    this.previewLogic.setVids(this.vids);
                    for (var A = 0; A < t.playvidlist.length; A++)
                        this.vids.push({
                            vid: t.playvidlist[A],
                            range: {
                                start: o[A] || 0,
                                end: i[A] || 0
                            },
                            previewDuration: 0
                        });
                    var r = +t.curplaypositions;
                    this.log("first startTime=".concat(r)),
                    r > 0 && this.player.updateReqInfo({
                        videoLoadParam: {
                            startTime: r
                        }
                    })
                }
            }
        }, {
            key: "pushNextVid",
            value: function() {
                var e = this;
                this.pushVidIndex = this.vidIndex + 1,
                this.pushVidIndex >= this.vids.length && (this.pushVidIndex = 0);
                var t = this.vids[this.pushVidIndex]
                  , o = t.vid
                  , i = t.range;
                this.log("push vid=".concat(o, ", pushVidIdx=").concat(this.pushVidIndex, ", vidIdx=").concat(this.vidIndex)),
                this.player.pushFlowNode((function(n) {
                    var A = n.context
                      , r = new dE({
                        flowid: os.createGUID(),
                        playItem: o,
                        playParam: JSON.parse(JSON.stringify(A.playParam)),
                        config: A.config,
                        isPreload: !1
                    });
                    r.updatePlayParam({
                        videoReqInfoParam: {
                            vid: o,
                            previd: "",
                            previd_type: ""
                        },
                        videoLoadParam: {
                            startTime: i.start || 0
                        }
                    }),
                    t.ctx = r;
                    var a = e.vids[e.vidIndex];
                    r.remainTimeGetter = function() {
                        var e = n.core
                          , t = e.duration - (a.range.end || 0);
                        return Math.floor(Math.max(t - e.playtime, 0))
                    }
                    ;
                    var s = new iC(e.player,r,!0);
                    return s.preload(),
                    s
                }
                ))
            }
        }, {
            key: "showTransitionCanvas",
            value: function() {
                var e = this.player.currentVideoElement;
                if (R(e, HTMLVideoElement)) {
                    var t = e.videoWidth
                      , o = e.videoHeight;
                    this.transitionCanvas.width = t,
                    this.transitionCanvas.height = o,
                    this.transitionCanvasCtx.drawImage(e, 0, 0, t, o);
                    var i = this.player.container.querySelector(".".concat(Ia));
                    Ja.append(i, this.transitionCanvas)
                }
            }
        }, {
            key: "removeTransitionCanvas",
            value: function() {
                this.transitionCanvas.parentNode && this.transitionCanvas.remove()
            }
        }]),
        A
    }(hf);
    a(AC, "moduleName", "fakelive-controller");
    var rC = function(t) {
        c(A, t);
        var o = Q(A);
        function A() {
            return n(this, A),
            o.apply(this, arguments)
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.player.config.createFlowNodesCallback = this.createFlowNodes.bind(this),
                this.player.config.preloadFlowNodesCallback = this.proceduralPreload.bind(this)
            }
        }, {
            key: "destroy",
            value: function() {
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "createFlowNodes",
            value: function(t) {
                var o = []
                  , i = this.player
                  , n = i.config
                  , A = i.vid
                  , r = Yg(n.instanceId);
                if (A) {
                    var a, s = this.tvk.config.isDelayParseGetinfo, l = !t.isLive && !(null === (a = n.getinfoConfig) || void 0 === a ? void 0 : a.path);
                    o.push(new pE(t,{
                        isDelayParse: l && !!s,
                        getAdIsEmptyCallback: Ty
                    }))
                }
                return r && A && o.push(new IE(t,{
                    AdFunnelClass: Dy
                })),
                o.push(new iC(this.player,t)),
                A && r && n.type === e.PLAY_MODE.VOD && !n.isFakeLive && o.push(new fE(t)),
                o
            }
        }, {
            key: "proceduralPreload",
            value: function(e, t, o) {
                var n = this;
                return i((function() {
                    var i, A, r, a, s, l, g, c, u;
                    return F(this, (function(E) {
                        switch (E.label) {
                        case 0:
                            return i = e.postAdNode,
                            A = t.getinfoNode,
                            r = t.preAdNode,
                            a = t.videoNode,
                            s = !1,
                            i ? (n.log("preloadSession, exec preload postAd"),
                            [4, i.preload()]) : [3, 2];
                        case 1:
                            E.sent(),
                            s = i.getOutput().hasAd,
                            n.log("preloadSession, postAd preloaded"),
                            E.label = 2;
                        case 2:
                            return n.log("preloadSession, exec preload getinfo"),
                            [4, A.preload()];
                        case 3:
                            return E.sent(),
                            n.log("preloadSession, getinfo preloaded"),
                            l = A.getOutput().getinfoCtx,
                            (null == r ? void 0 : r.getContext().isActive) ? (n.log("preloadSession, actived 1"),
                            [2]) : (g = !1,
                            s || !r ? [3, 5] : (n.log("preloadSession, preSession hasPostAd=", s),
                            r.setInput({
                                getinfoCtx: l
                            }),
                            n.log("preloadSession, exec preload preAd"),
                            [4, r.preload()]));
                        case 4:
                            return E.sent(),
                            n.log("preloadSession, preAd preloaded"),
                            c = r.getOutput().hasAd,
                            g = c,
                            [3, 6];
                        case 5:
                            n.log("preloadSession, skip preload preAd, hasPostAd=", s),
                            E.label = 6;
                        case 6:
                            return (u = a.getContext()).isActive ? (n.log("preloadSession, actived 2"),
                            [2]) : g ? [3, 8] : (a.setInput({
                                getinfoCtx: l
                            }),
                            u.remainTimeGetter = function() {
                                var t = e.core;
                                if (!t)
                                    return 0;
                                var i = o || t.duration;
                                return Math.floor(Math.max(i - t.playtime, 0))
                            }
                            ,
                            n.log("preloadSession, exec preload video"),
                            [4, a.preload()]);
                        case 7:
                            return E.sent(),
                            [3, 9];
                        case 8:
                            n.log("preloadSession, skip preload video, hasPreAd=", g),
                            E.label = 9;
                        case 9:
                            return [2]
                        }
                    }
                    ))
                }
                ))()
            }
        }]),
        A
    }(hf);
    a(rC, "moduleName", "flownode-controller");
    var aC = function(o) {
        c(A, o);
        var i = Q(A);
        function A() {
            var o;
            return n(this, A),
            a(t(o = i.apply(this, arguments)), "onGetInfoOver", (function(t) {
                var i = t.data;
                i && (o.player.config.type === e.PLAY_MODE.VOD ? o.updateVodKvs(i) : o.udpateLiveKvs(i))
            }
            )),
            a(t(o), "onVideoFirstPlaying", (function(e) {
                e.data.isFirst && o.player.currentVideoInfo && (o.player.currentVideoInfo.videoFrameRate = o.player.getCommonKv(Pp.videoFrameRate))
            }
            )),
            o
        }
        return r(A, [{
            key: "init",
            value: function() {
                this.setupEventListeners()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeEventListeners(),
                l(s(A.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                this.player.pluginMsg.on(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver, Number.MAX_SAFE_INTEGER),
                this.player.on(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoFirstPlaying)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.player.pluginMsg.off(e.PLAY_EVENT_EXT.GETINFO_OVER, this.onGetInfoOver),
                this.player.off(e.H5_PLAY_EVENT.VIDEO_PLAYING, this.onVideoFirstPlaying)
            }
        }, {
            key: "updateVodKvs",
            value: function(e) {
                var t, o, i, n, A, r, s, l = e.reqParams, g = void 0 === l ? {} : l, c = e.parseData, u = void 0 === c ? {} : c, E = e.resData, d = void 0 === E ? {} : E, B = e.cKeyCostTime, h = void 0 === B ? -1 : B, p = e.cKeyDowngrade, v = void 0 !== p && p, f = e.isUseSrvData, y = void 0 !== f && f, C = u.vtype, m = u.vtypeKey, Q = u.drmType, w = u.vitem, T = void 0 === w ? {} : w, S = g.cKey, _ = g.encryptVer, D = null === (t = u.definitionList) || void 0 === t ? void 0 : t.find((function(e) {
                    return e.sl
                }
                ));
                this.player.setCommonKv((a(s = {}, Pp.ckey, S),
                a(s, Pp.ckeyVersion, _),
                a(s, Nc.codec, C),
                a(s, Nc.codecId, m),
                a(s, Nc.uip, d.ip),
                a(s, Nc.hh_ip, d.ip),
                a(s, Pp.vipToken, function(e, t) {
                    var o = e.split("$").map((function(e) {
                        return e.split("=")
                    }
                    ))
                      , i = I(o.find((function(e) {
                        return "vip_token" === e[0]
                    }
                    )) || [], 2)
                      , n = i[1];
                    return +(void 0 === n ? "0" : n)
                }(d.report || "")),
                a(s, Pp.videoCharged, T.ch),
                a(s, Pp.userPayType, function(e, t) {
                    var o = 0;
                    return 8 === e ? o = 1 : 2 === e && (t > 0 ? o = 2 : 0 === t && (o = 0)),
                    o
                }(T.st, T.ch)),
                a(s, Pp.videoType, T.videotype),
                a(s, Nc.status, T.vst),
                a(s, Nc.type, T.type),
                a(s, "videoName", u.title),
                a(s, "byteRate", u.byteRate),
                a(s, Nc.duration, u.duration),
                a(s, "preview", u.preview),
                a(s, Nc.drm, Q),
                a(s, Nc.p2p, d.fp2p ? 1 : 0),
                a(s, Nc.fmt, null == D ? void 0 : D.id),
                a(s, Nc.testid, d.tstid),
                a(s, Nc.cdnid, null == T || null === (n = T.ul) || void 0 === n || null === (i = n.ui) || void 0 === i || null === (o = i[0]) || void 0 === o ? void 0 : o.vt),
                a(s, Nc.rate, u.byteRate),
                a(s, Nc.dltype, d.dltype),
                a(s, Nc.ckeytime, h),
                a(s, Nc.ckeydg, +v),
                a(s, Pp.vurl, null === (r = u.urls) || void 0 === r || null === (A = r[0]) || void 0 === A ? void 0 : A.url),
                a(s, Nc.isUseSrvData, y),
                a(s, Pp.videoFrameRate, null == D ? void 0 : D.vfps),
                s))
            }
        }, {
            key: "udpateLiveKvs",
            value: function(e) {
                var t, o, i = e.reqParams, n = void 0 === i ? {} : i, A = e.parseData, r = void 0 === A ? {} : A, s = e.resData, l = void 0 === s ? {} : s, g = r || {}, c = g.vtype, u = g.drmType, E = g.vitem, d = void 0 === E ? {} : E, B = n.ckey, h = n.encrypt_ver;
                this.player.setCommonKv((a(o = {}, Nc.livepid, l.pid),
                a(o, Pp.ckey, B),
                a(o, Pp.ckeyVersion, h),
                a(o, Nc.codec, c),
                a(o, "preview", r.preview),
                a(o, Nc.drm, u),
                a(o, Lv.isuserpay, l.isuserpay),
                a(o, Lv.livesid, d.sid),
                a(o, Lv.playtime, r.preview),
                a(o, Lv.pay_type, l.pay_type),
                a(o, Lv.restpreviewcnt, null === (t = l.preview_info) || void 0 === t ? void 0 : t.restpreviewcnt),
                o))
            }
        }]),
        A
    }(hf);
    a(aC, "moduleName", "kv-controller");
    var sC = function(o) {
        c(g, o);
        var A = Q(g);
        function g() {
            var e;
            n(this, g);
            var o = t(e = A.apply(this, arguments));
            return a(t(e), "computeCurrentUsKey", i((function() {
                var e, t, i, n, A, r;
                return F(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        if (o.player.setCommonKv(dp, ""),
                        !lC())
                            return o.log("txv module is not available"),
                            [2];
                        a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]),
                        e = o.config,
                        t = e.usKeyBusinessId,
                        i = e.usKeyDataSchema,
                        t && i ? (n = o.constructUsKeyData(i),
                        o.log("usKeyData=".concat(n)),
                        [4, self.txv.login.getUskeyInTXV(t, n)]) : (o.log("us key business id or us key data schema is not set"),
                        [2]);
                    case 2:
                        return A = a.sent(),
                        o.player.setCommonKv(dp, encodeURIComponent(A)),
                        [3, 4];
                    case 3:
                        return r = a.sent(),
                        o.log("compute current us key failed", r),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))),
            e
        }
        return r(g, [{
            key: "init",
            value: function() {
                this.setupEventListeners(),
                this.prepareVipInfo()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeEventListeners(),
                l(s(g.prototype), "destroy", this).call(this)
            }
        }, {
            key: "prepareVipInfo",
            value: function() {
                var e = this;
                return i((function() {
                    var t, o;
                    return F(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if (!lC())
                                return [2];
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]),
                            [4, self.txv.vip.getVipInfo()];
                        case 2:
                            return t = i.sent().vip,
                            e.player.setCommonKv(Bp, t),
                            [3, 4];
                        case 3:
                            return o = i.sent(),
                            e.log("fetch vip info failed", o),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "setupEventListeners",
            value: function() {
                this.player.on(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.computeCurrentUsKey)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.player.off(e.H5_PLAY_EVENT.PLAY_SESSION_START, this.computeCurrentUsKey)
            }
        }, {
            key: "constructUsKeyData",
            value: function(e) {
                var t = this;
                return Object.keys(e).sort().map((function(o) {
                    var i = t.player.getCommonKv(e[o]);
                    return i ? "".concat(o, "=").concat(i) : ""
                }
                )).filter(Boolean).join("&")
            }
        }]),
        g
    }(hf);
    function lC() {
        return !!window.txv
    }
    a(sC, "moduleName", "txv-controller");
    var gC, cC, uC = function() {
        function e(t, o) {
            n(this, e),
            a(this, "config", void 0),
            a(this, "logger", void 0),
            a(this, "controllers", []),
            a(this, "player", void 0),
            a(this, "message", new un),
            a(this, "destroyed", !1),
            this.player = t,
            this.config = this.prepareConfig(o),
            this.logger = new ia(t.config.instanceId,"tvk"),
            this.initializeAllControllers(),
            this.initDebugMode()
        }
        return r(e, [{
            key: "destroy",
            value: function() {
                this.controllers.forEach((function(e) {
                    return e.destroy()
                }
                )),
                this.player = null,
                this.controllers = null,
                this.destroyed = !0
            }
        }, {
            key: "initializeAllControllers",
            value: function() {
                var e = this;
                return i((function() {
                    var t, o, i;
                    return F(this, (function(n) {
                        return t = e.config,
                        o = e.player,
                        i = [Ey, sC, rC, Py, Ly, aC, qf, Ay, ay, Mf, dy, t.definitionController, t.audioTrackController].concat(C(t.customControllers || []), C(o.isFakeLive ? [AC] : [])).map((function(t) {
                            return t ? new t(o,e) : null
                        }
                        )).filter((function(e) {
                            return null !== e
                        }
                        )),
                        i.forEach((function(t) {
                            try {
                                e.initController(t)
                            } catch (o) {
                                e.initControllerFailed(t, o)
                            }
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "initController",
            value: function(e) {
                this.checkDestroyed(e),
                this.logger.log("".concat(e.constructor.moduleName, " ready")),
                e.init(),
                this.controllers.push(e)
            }
        }, {
            key: "initControllerFailed",
            value: function(e, t) {
                this.logger.error("".concat(e.constructor.moduleName, " failed, reason: ").concat(t))
            }
        }, {
            key: "checkDestroyed",
            value: function(e) {
                var t = e.constructor.moduleName;
                if (this.destroyed)
                    throw e.destroy(),
                    new Error("TVK has been destroyed, ".concat(t, " initialization is aborted"))
            }
        }, {
            key: "prepareConfig",
            value: function(e) {
                var t = xf;
                return Object.assign({}, t, e)
            }
        }, {
            key: "initDebugMode",
            value: function() {
                var e = !1;
                try {
                    e = !!Va.getData("__thumbplayer_tvk_debug")
                } catch (e) {
                    this.logger.log("failed to get debug mode from local storage")
                }
                (this.config.debug || e) && (window.tvk = this)
            }
        }, {
            key: "on",
            value: function(e, t) {
                this.message.on(e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                this.message.off(e, t)
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    o[i - 1] = arguments[i];
                var n, A;
                (n = this.message).emit.apply(n, [e].concat(C(o))),
                (A = this.player.pluginMsg).emit.apply(A, [e].concat(C(o)))
            }
        }, {
            key: "removeAllListeners",
            value: function() {
                this.message.removeAllListeners()
            }
        }]),
        e
    }();
    !function(e) {
        e.REQUIRE_CLIENT = "tvkRequireClient"
    }(gC || (gC = {})),
    function(e) {
        e.NOT_SUPPORT_UHD = "notSupportUHD"
    }(cC || (cC = {}));
    var EC = function() {
        function e() {
            n(this, e),
            a(this, "pluginMsg", void 0),
            a(this, "logger", void 0)
        }
        return r(e, [{
            key: "emitPluginEvts",
            value: function(e, t, o) {
                var i = this;
                o ? o.then((function() {
                    i.emitEvt(e, t)
                }
                )) : this.emitEvt(e, t)
            }
        }, {
            key: "emitEvt",
            value: function(e, t) {
                try {
                    this.pluginMsg.emit(e, t)
                } catch (t) {
                    this.logger.error("".concat(e, " err, "), t)
                }
            }
        }]),
        e
    }()
      , dC = pC;
    function BC() {
        var e = ["nZaWmtuWmdm", "mtHMre90u1q", "mJi1mtu2mLnwCgvZsq", "mJyYnZu2mMLiAhLcEG", "mJe5sgfRs01x", "nZu4nZztz0zrq04", "nZaWmtuWmdi", "Ahr0Chm6lY92zdyUBc5XCs5JB20VChjVEhLODhrW", "odGXndG1vxjly1D5", "ntzgEuDLCgO", "nZm4otrvtuPfD2O", "mZa3mJCWrhf4wu1d", "nZaWmtuWmde", "nJKWne51Ew9pEq", "Ahr0Chm6lY92As5SlNfXlMnVBs9WCM94EwH0Dha"];
        return (BC = function() {
            return e
        }
        )()
    }
    !function(e, t) {
        for (var o = pC, i = BC(); ; )
            try {
                if (853836 == -parseInt(o(405)) / 1 + -parseInt(o(397)) / 2 + -parseInt(o(399)) / 3 * (-parseInt(o(400)) / 4) + parseInt(o(403)) / 5 + parseInt(o(398)) / 6 + parseInt(o(404)) / 7 * (-parseInt(o(408)) / 8) + -parseInt(o(396)) / 9 * (-parseInt(o(406)) / 10))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var hC = {
        retryCount: 3,
        isReqRaw: !1
    };
    function pC(e, t) {
        var o = BC();
        return pC = function(t, i) {
            var n = o[t -= 394];
            void 0 === pC.WyPJNJ && (pC.RwyLEu = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            pC.WyPJNJ = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = pC.RwyLEu(n),
            e[A] = n),
            n
        }
        ,
        pC(e, t)
    }
    var vC = {
        COMMON: [dC(402), dC(394)]
    }
      , fC = {
        NET: dC(407),
        TIMEOUT: dC(401),
        RES_CODE: dC(395)
    };
    function IC(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, i = new Array(t); o < t; o++)
            i[o] = e[o];
        return i
    }
    function yC(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i, n, A = [], r = !0, a = !1;
                try {
                    for (o = o.call(e); !(r = (i = o.next()).done) && (A.push(i.value),
                    !t || A.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    n = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (a)
                            throw n
                    }
                }
                return A
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return IC(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === o && e.constructor && (o = e.constructor.name),
                "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? IC(e, t) : void 0
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var CC, mC = "object" == ("undefined" == typeof self ? "undefined" : (CC = self) && "undefined" != typeof Symbol && CC.constructor === Symbol ? "symbol" : typeof CC) ? self : globalThis, QC = function(e) {
        return function(e, t) {
            var o = function(t, o) {
                return e.set(o, t),
                t
            }
              , i = function(n) {
                if (e.has(n))
                    return e.get(n);
                var A = yC(t[n], 2)
                  , r = A[0]
                  , a = A[1];
                switch (r) {
                case 0:
                case -1:
                    return o(a, n);
                case 1:
                    var s = o([], n)
                      , l = !0
                      , g = !1
                      , c = void 0;
                    try {
                        for (var u, E = a[Symbol.iterator](); !(l = (u = E.next()).done); l = !0) {
                            var d = u.value;
                            s.push(i(d))
                        }
                    } catch (e) {
                        g = !0,
                        c = e
                    } finally {
                        try {
                            l || null == E.return || E.return()
                        } finally {
                            if (g)
                                throw c
                        }
                    }
                    return s;
                case 2:
                    var B = o({}, n)
                      , h = !0
                      , p = !1
                      , v = void 0;
                    try {
                        for (var f, I = a[Symbol.iterator](); !(h = (f = I.next()).done); h = !0) {
                            var y = yC(f.value, 2)
                              , C = y[0]
                              , m = y[1];
                            B[i(C)] = i(m)
                        }
                    } catch (e) {
                        p = !0,
                        v = e
                    } finally {
                        try {
                            h || null == I.return || I.return()
                        } finally {
                            if (p)
                                throw v
                        }
                    }
                    return B;
                case 3:
                    return o(new Date(a), n);
                case 4:
                    var Q = a.source
                      , w = a.flags;
                    return o(new RegExp(Q,w), n);
                case 5:
                    var T = o(new Map, n)
                      , S = !0
                      , _ = !1
                      , D = void 0;
                    try {
                        for (var P, F = a[Symbol.iterator](); !(S = (P = F.next()).done); S = !0) {
                            var L = yC(P.value, 2)
                              , Y = L[0]
                              , R = L[1];
                            T.set(i(Y), i(R))
                        }
                    } catch (e) {
                        _ = !0,
                        D = e
                    } finally {
                        try {
                            S || null == F.return || F.return()
                        } finally {
                            if (_)
                                throw D
                        }
                    }
                    return T;
                case 6:
                    var b = o(new Set, n)
                      , k = !0
                      , G = !1
                      , N = void 0;
                    try {
                        for (var M, U = a[Symbol.iterator](); !(k = (M = U.next()).done); k = !0) {
                            var O = M.value;
                            b.add(i(O))
                        }
                    } catch (e) {
                        G = !0,
                        N = e
                    } finally {
                        try {
                            k || null == U.return || U.return()
                        } finally {
                            if (G)
                                throw N
                        }
                    }
                    return b;
                case 7:
                    var K = a.name
                      , x = a.message;
                    return o(new mC[K](x), n);
                case 8:
                    return o(BigInt(a), n);
                case "BigInt":
                    return o(Object(BigInt(a)), n);
                case "ArrayBuffer":
                    return o(new Uint8Array(a).buffer, a);
                case "DataView":
                    var V = new Uint8Array(a).buffer;
                    return o(new DataView(V), a)
                }
                return o(new mC[r](a), n)
            };
            return i
        }(new Map, e)(0)
    };
    function wC(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, i = new Array(t); o < t; o++)
            i[o] = e[o];
        return i
    }
    function TC(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i, n, A = [], r = !0, a = !1;
                try {
                    for (o = o.call(e); !(r = (i = o.next()).done) && (A.push(i.value),
                    !t || A.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    n = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (a)
                            throw n
                    }
                }
                return A
            }
        }(e, t) || _C(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function SC(e) {
        return function(e) {
            if (Array.isArray(e))
                return wC(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || _C(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function _C(e, t) {
        if (e) {
            if ("string" == typeof e)
                return wC(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === o && e.constructor && (o = e.constructor.name),
            "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? wC(e, t) : void 0
        }
    }
    var DC = ""
      , PC = {}.toString
      , FC = Object.keys
      , LC = function(e) {
        var t = void 0 === e ? "undefined" : function(e) {
            return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        }(e);
        if ("object" !== t || !e)
            return [0, t];
        var o = PC.call(e).slice(8, -1);
        switch (o) {
        case "Array":
            return [1, DC];
        case "Object":
            return [2, DC];
        case "Date":
            return [3, DC];
        case "RegExp":
            return [4, DC];
        case "Map":
            return [5, DC];
        case "Set":
            return [6, DC];
        case "DataView":
            return [1, o]
        }
        return o.includes("Array") ? [1, o] : o.includes("Error") ? [7, o] : [2, o]
    }
      , YC = function(e) {
        var t = TC(e, 2)
          , o = t[0]
          , i = t[1];
        return 0 === o && ("function" === i || "symbol" === i)
    }
      , RC = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , o = t.json
          , i = t.lossy
          , n = [];
        return function(e, t, o, i) {
            var n = function(e, t) {
                var n = i.push(e) - 1;
                return o.set(t, n),
                n
            }
              , A = function(i) {
                if (o.has(i))
                    return o.get(i);
                var r = TC(LC(i), 2)
                  , a = r[0]
                  , s = r[1];
                switch (a) {
                case 0:
                    var l = i;
                    switch (s) {
                    case "bigint":
                        a = 8,
                        l = i.toString();
                        break;
                    case "function":
                    case "symbol":
                        if (e)
                            throw new TypeError("unable to serialize " + s);
                        l = null;
                        break;
                    case "undefined":
                        return n([-1], i)
                    }
                    return n([a, l], i);
                case 1:
                    if (s) {
                        var g = i;
                        return "DataView" === s ? g = new Uint8Array(i.buffer) : "ArrayBuffer" === s && (g = new Uint8Array(i)),
                        n([s, SC(g)], i)
                    }
                    var c = []
                      , u = n([a, c], i)
                      , E = !0
                      , d = !1
                      , B = void 0;
                    try {
                        for (var h, p = i[Symbol.iterator](); !(E = (h = p.next()).done); E = !0) {
                            var v = h.value;
                            c.push(A(v))
                        }
                    } catch (e) {
                        d = !0,
                        B = e
                    } finally {
                        try {
                            E || null == p.return || p.return()
                        } finally {
                            if (d)
                                throw B
                        }
                    }
                    return u;
                case 2:
                    if (s)
                        switch (s) {
                        case "BigInt":
                            return n([s, i.toString()], i);
                        case "Boolean":
                        case "Number":
                        case "String":
                            return n([s, i.valueOf()], i)
                        }
                    if (t && "toJSON"in i)
                        return A(i.toJSON());
                    var f = []
                      , I = n([a, f], i)
                      , y = !0
                      , C = !1
                      , m = void 0;
                    try {
                        for (var Q, w = FC(i)[Symbol.iterator](); !(y = (Q = w.next()).done); y = !0) {
                            var T = Q.value;
                            !e && YC(LC(i[T])) || f.push([A(T), A(i[T])])
                        }
                    } catch (e) {
                        C = !0,
                        m = e
                    } finally {
                        try {
                            y || null == w.return || w.return()
                        } finally {
                            if (C)
                                throw m
                        }
                    }
                    return I;
                case 3:
                    return n([a, i.toISOString()], i);
                case 4:
                    var S = i.source
                      , _ = i.flags;
                    return n([a, {
                        source: S,
                        flags: _
                    }], i);
                case 5:
                    var D = []
                      , P = n([a, D], i)
                      , F = !0
                      , L = !1
                      , Y = void 0;
                    try {
                        for (var R, b = i[Symbol.iterator](); !(F = (R = b.next()).done); F = !0) {
                            var k = TC(R.value, 2)
                              , G = k[0]
                              , N = k[1];
                            (e || !YC(LC(G)) && !YC(LC(N))) && D.push([A(G), A(N)])
                        }
                    } catch (e) {
                        L = !0,
                        Y = e
                    } finally {
                        try {
                            F || null == b.return || b.return()
                        } finally {
                            if (L)
                                throw Y
                        }
                    }
                    return P;
                case 6:
                    var M = []
                      , U = n([a, M], i)
                      , O = !0
                      , K = !1
                      , x = void 0;
                    try {
                        for (var V, H = i[Symbol.iterator](); !(O = (V = H.next()).done); O = !0) {
                            var j = V.value;
                            !e && YC(LC(j)) || M.push(A(j))
                        }
                    } catch (e) {
                        K = !0,
                        x = e
                    } finally {
                        try {
                            O || null == H.return || H.return()
                        } finally {
                            if (K)
                                throw x
                        }
                    }
                    return U
                }
                var q = i.message;
                return n([a, {
                    name: s,
                    message: q
                }], i)
            };
            return A
        }(!(o || i), !!o, new Map, n)(e),
        n
    }
      , bC = "function" == typeof structuredClone ? function(e, t) {
        return t && ("json"in t || "lossy"in t) ? QC(RC(e, t)) : structuredClone(e)
    }
    : function(e, t) {
        return QC(RC(e, t))
    }
    ;
    function kC(e, t) {
        var o = OC();
        return kC = function(t, i) {
            var n = o[t -= 478];
            void 0 === kC.aHeDYM && (kC.sMETwt = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            kC.aHeDYM = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = kC.sMETwt(n),
            e[A] = n),
            n
        }
        ,
        kC(e, t)
    }
    var GC = kC;
    !function(e, t) {
        for (var o = kC, i = OC(); ; )
            try {
                if (184282 == parseInt(o(496)) / 1 * (parseInt(o(518)) / 2) + -parseInt(o(514)) / 3 + parseInt(o(524)) / 4 * (parseInt(o(482)) / 5) + -parseInt(o(526)) / 6 * (parseInt(o(486)) / 7) + -parseInt(o(498)) / 8 + parseInt(o(516)) / 9 * (parseInt(o(501)) / 10) + parseInt(o(529)) / 11 * (parseInt(o(510)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var NC = function() {
        var e = kC;
        function t() {
            n(this, t)
        }
        return r(t, null, [{
            key: e(481),
            get: function() {
                var t = e;
                return new RegExp(KC)[t(503)](Function[t(517)][t(494)][t(497)](JSON[t(483)]))
            }
        }, {
            key: e(519),
            value: function() {
                var t, o = e;
                if (this[o(481)])
                    return JSON;
                if ((null === (t = this[o(480)]) || void 0 === t ? void 0 : t[o(513)]) && this[o(485)])
                    return this[o(485)];
                if (!this[o(480)]) {
                    var i = document[o(505)](o(500));
                    i[o(479)](o(487), ""[o(525)](UC(), o(521))[o(525)](UC())),
                    i.id = ""[o(525)](os[o(492)](10)),
                    this[o(480)] = i
                }
                !this[o(509)] && (this[o(509)] = function(e) {
                    var t = GC
                      , o = arguments[t(504)] > 1 && void 0 !== arguments[1] ? arguments[1] : 3
                      , i = document[t(505)](t(520));
                    i[t(487)][t(523)] = t(489);
                    for (var n = i, A = 0; A < o; A++) {
                        var r = document[t(505)](t(520));
                        n[t(530)](r),
                        n = r
                    }
                    return n[t(530)](e),
                    i
                }(this[o(480)])),
                !this[o(509)][o(513)] && document[o(502)][o(488)](o(528), this[o(509)]);
                var n = {}
                  , A = this[o(480)][o(507)][o(478)];
                return Object[o(493)](A)[o(515)]((function(e) {
                    var t = o;
                    n[e] = A[e][t(491)](A)
                }
                )),
                this[o(485)] = n,
                n
            }
        }, {
            key: e(483),
            value: function(o, i) {
                var n = e;
                try {
                    var A = t[n(519)]()[n(483)](o, i);
                    return this[n(481)] ? A : bC(A)
                } catch (e) {
                    return JSON[n(483)](o, i)
                }
            }
        }]),
        t
    }();
    a(NC, GC(485), null),
    a(NC, GC(480), null),
    a(NC, GC(509), null);
    var MC = [GC(484), GC(506), GC(522), GC(512), GC(527), GC(490)];
    function UC() {
        var e = GC
          , t = Math[e(499)](Math[e(511)]() * MC[e(504)]);
        return ""[e(525)](MC[t], e(508))
    }
    function OC() {
        var e = ["sLnptG", "C2v0qxr0CMLIDxrL", "AwzYyw1LrwW", "AxnuCNvZDgvKtMf0AxzLqvbj", "odGZntvfs1fezeW", "CgfYC2u", "Cg9ZAxrPB24", "AwzYyw1LsLnptG", "mJm3ntu2owjeEufquG", "C3r5Bgu", "Aw5Zzxj0qwrQywnLBNrfBgvTzw50", "BM9Uzq", "DMLZAwjPBgL0Eq", "yMLUza", "y3jLyxrLr1vjra", "z2v0t3DUuhjVCgvYDhLoyw1LCW", "Dg9tDhjPBMC", "zNvUy3rPB24GCgfYC2vCkfWPxhnCE1TCC1XUxsPCw25HDgL2zsbJB2rLxf1BxhnCBL0Qxh0", "ndmZzfzdEKDI", "y2fSBa", "mte2nJe0nhflzuvIwG", "zMXVB3i", "AwzYyw1L", "ntK2ndb6s0fOtNe", "yM9KEq", "DgvZDa", "BgvUz3rO", "y3jLyxrLrwXLBwvUDa", "Dg9W", "y29UDgvUDfDPBMrVDW", "oIbPBMHLCML0", "D3jHChbLCG", "ntq3nJHQuvjTBeq", "CMfUzg9T", "CMLNAhq", "AxndB25Uzwn0zwq", "mta3mJe4nufothz5AG", "zM9YrwfJAa", "mtH1zwPozMC", "ChjVDg90ExbL", "mZHVsw5LDwG", "z2v0vhj1C3rLzePtt05pyMPLy3q", "zgL2", "oYbKAxnWBgf5oIbUB25LoYa", "BgvMDa", "zgLZCgXHEq", "nZzNv2PkCKW", "y29Uy2f0", "nMLXvvvMzq", "yM90Dg9T", "yMvMB3jLzw5K", "mtyXn1fot3P2DW", "yxbWzw5Kq2HPBgq"];
        return (OC = function() {
            return e
        }
        )()
    }
    var KC = GC(495);
    function xC() {
        var e = ["zw1PDev2Dhm", "CMvXDwvZDa", "CMv0CNLdB3vUDa", "mtCXnNzUBe9NyG", "BgfIzwW", "mtfjwgXlEMe", "uMvXuhjVEhK", "C3rYAw5NAwz5", "ntuWmtq5vvb6Ew5b", "yxnZAwDU", "ywrWyxjHBq", "z2v0uMvXDwvZDfvYBa", "AxnszxfsyxC", "CMvXihbLCMyGzw50CNKSia", "mZuWwejsB3zS", "y2fUig5VDcbWyxjZzsbHzfn0CG", "igvYCIWG", "ChjVEhLiDhrWugf0Aa", "CMvXihn0yxj0lcbUDw09", "C3nWs2v5", "ksbYzxf1zxn0igvYCJO", "DMLUzM9Hza", "q09ntu9o", "C2vUDa", "zxjYB3i", "Bg9N", "CMvZrgf0yq", "ywqGCMvZpq", "z2v0u3nWs2v5", "ntiXmw9bzM9ozG", "zw5HyMXLvhj1C3rLzePtt04", "zgvZDhjVEq", "C3nWs2v5pq", "zxjYq29Kzq", "ufjpwfLFsfruuf9tvefsva", "CgX1z2LUtxnN", "ChvZAa", "y2fUig5VDcbWyxjZzsb2Aw5MB1n0CG", "Bg9Nz2vY", "ufjpwfLFsfruuf9qqvjtrv9fuLjpuG", "ChjVEhLODhrWkg51Bt0", "CgfYC2u", "DMLUzM8", "zgf0yq", "CMvXugfYyw1Z", "n1jiCvHRsa", "C2v0uMvZrgf0yq", "EgHYuMvXrgf0yq", "lcb1CMW9", "Cg9ZDa", "DhzR", "Dw5VyNnLCNzLCG", "Aw5ZDgfUy2vjza", "BgnbzenVB2TPzq", "CMvXugf0Aa", "zw1PDa", "ywXYzwfKEvjLDhj5q291BNq", "uKvtx0npreu", "Dhj5CW", "oda5mdC2zLrAyKfs", "Dgv4Da", "x3bYB3H5Ahr0Cf9Yzxe", "B2jZzxj2zxi", "CgXHEwvYsw5ZDgfUy2vjza", "EgHY", "ywjVCNq", "BgvUz3rO", "ufjpwfLFsfruuf9srvfFru5e", "ufjpwfLFsfruuf9ftKq", "lcbJB3n0pq", "tKvu", "ngrVwe9OEa", "mtCWnZiXmMDQCfzxta", "CMvXigvUzcWGBNvTpq", "CgfYC2vszxnWB25ZzurHDge", "BwvZC2fNzq", "CgfYC2veyxrH", "mJG3nduXmNHvAe1MBq", "Bwf0y2G", "mtmWodCYmJrqC1LiD04", "y29UzMLN", "BM93", "y29Uy2f0", "ywjVCNrLza", "DhzRq29UzMLN", "mJy2mgT2D0rcsG", "DIbYzxm9", "D2fYBG"];
        return (xC = function() {
            return e
        }
        )()
    }
    function VC(e, t) {
        var o = xC();
        return VC = function(t, i) {
            var n = o[t -= 369];
            void 0 === VC.WlwvWl && (VC.IeyDMu = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            VC.WlwvWl = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = VC.IeyDMu(n),
            e[A] = n),
            n
        }
        ,
        VC(e, t)
    }
    !function(e, t) {
        for (var o = VC, i = xC(); ; )
            try {
                if (920428 == parseInt(o(436)) / 1 + parseInt(o(449)) / 2 + parseInt(o(385)) / 3 * (-parseInt(o(448)) / 4) + parseInt(o(374)) / 5 * (parseInt(o(380)) / 6) + -parseInt(o(422)) / 7 * (-parseInt(o(454)) / 8) + parseInt(o(406)) / 9 * (parseInt(o(391)) / 10) + -parseInt(o(382)) / 11 * (parseInt(o(456)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();
    var HC = function() {
        var t = VC;
        function o(e, t) {
            var i = VC;
            n(this, o),
            a(this, i(369), void 0),
            a(this, i(415), void 0),
            a(this, i(372), void 0),
            a(this, i(412), void 0),
            a(this, i(440), void 0),
            this[i(369)] = e,
            this[i(372)] = !1,
            this[i(440)] = e[i(429)],
            this[i(415)] = new ia(this[i(440)],i(383)),
            this[i(412)] = t[i(412)]
        }
        return r(o, [{
            key: t(378),
            value: function(t, o, n) {
                var A = this;
                return i((function() {
                    var i, r, s, l, g, c, d, B;
                    return F(this, (function(h) {
                        var p = VC;
                        switch (h[p(381)]) {
                        case 0:
                            A[p(372)] = !1,
                            i = u({}, hC, n),
                            r = i[p(379)],
                            s = i[p(389)],
                            l = {},
                            t && Object[p(386)](t, function(e) {
                                var t;
                                return fB((a(t = {}, Sd.MAIN_LOGIN, "lt"),
                                a(t, Sd.OPENID, "opid"),
                                a(t, Sd.APPID, "appid"),
                                a(t, Sd.ACCESS_TOKEN, "atkn"),
                                a(t, Sd.VUSERID, "uid"),
                                a(t, Sd.VUSESSION, "tkn"),
                                t), e)
                            }()),
                            l[p(421)] = function(e, t) {
                                var o = t ? pn(t) : void 0
                                  , i = void 0
                                  , n = void 0;
                                if (null == e ? void 0 : e.adparam) {
                                    if (i = pn(e.adparam),
                                    e.sspAdParam)
                                        try {
                                            n = JSON.stringify(e.sspAdParam)
                                        } catch (e) {}
                                } else
                                    i = e ? pn(e) : void 0;
                                var A = n ? {
                                    sspAdParam: n,
                                    adparam: i
                                } : {
                                    adparam: i
                                };
                                return i && o ? u({
                                    buid: $h.vinfoad,
                                    vinfoparam: o
                                }, A) : i ? u({
                                    buid: $h.onlyad
                                }, A) : o ? {
                                    buid: $h.onlyvinfo,
                                    vinfoparam: o
                                } : void 0
                            }(t, o),
                            !s && A[p(377)](e.PLAY_EVENT_EXT[p(411)], l[p(421)]),
                            g = 0,
                            h[p(381)] = 1;
                        case 1:
                            if (!(g < r + 1))
                                return [3, 7];
                            h[p(381)] = 2;
                        case 2:
                            return h[p(435)][p(413)]([2, 4, , 5]),
                            l[p(431)] = A[p(388)](g),
                            A[p(415)][p(402)](p(395)[p(371)](g, p(425))[p(371)](l[p(431)])),
                            bs[p(439)](A[p(440)], {
                                url: l[p(431)],
                                tag: ""[p(371)](A[p(440)], p(438)),
                                callback: function(e) {
                                    var t = p;
                                    A[t(415)][t(402)](t(390), e)
                                }
                            }),
                            c = Date[p(370)](),
                            [4, Wa[p(441)]({
                                responseType: p(437),
                                timeout: 8e3,
                                withCredentials: !0,
                                method: p(426),
                                url: l[p(431)],
                                retryCount: 0,
                                body: JSON[p(384)](l[p(421)])
                            })];
                        case 3:
                            return d = h[p(400)](),
                            A[p(415)][p(402)](p(450)[p(371)](g, p(446))[p(371)](Date[p(370)]() - c, "ms")),
                            l[p(403)] = JSON[p(418)](d[p(420)]),
                            l[p(424)] = d[p(420)],
                            [3, 5];
                        case 4:
                            return B = h[p(400)](),
                            A[p(415)][p(402)](p(417)[p(371)](g, p(397)), B),
                            l[p(401)] = void 0,
                            [3, 5];
                        case 5:
                            if (A[p(372)])
                                return [2, new Promise((function() {}
                                ))];
                            if (l[p(433)] = g,
                            l[p(403)])
                                return [3, 7];
                            h[p(381)] = 6;
                        case 6:
                            return g++,
                            [3, 1];
                        case 7:
                            return !s && (A[p(377)](e.PLAY_EVENT_EXT[p(444)], E(u({}, l), {
                                getinfoReqParams: o
                            })),
                            A[p(451)](l),
                            A[p(377)](e.PLAY_EVENT_EXT[p(445)], l)),
                            [2, l]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(423),
            value: function(t) {
                var o = this;
                return i((function() {
                    var i;
                    return F(this, (function(n) {
                        var A = VC;
                        return o[A(377)](e.PLAY_EVENT_EXT[A(411)], {}),
                        (i = {
                            reqParams: {
                                buid: $h[A(398)],
                                adparam: A(409)[A(371)](t[A(396)])
                            }
                        })[A(403)] = t[A(403)],
                        o[A(451)](i),
                        o[A(377)](e.PLAY_EVENT_EXT[A(445)], i),
                        [2, i]
                    }
                    ))
                }
                ))()
            }
        }, {
            key: t(442),
            value: function() {
                this[t(372)] = !0
            }
        }, {
            key: t(408),
            value: function() {
                var e = t;
                bs[e(428)](this[e(440)], {
                    tag: ""[e(371)](this[e(440)], e(438))
                }),
                this[e(442)](),
                this[e(412)] = null,
                this[e(415)] = null
            }
        }, {
            key: t(377),
            value: function(e, o) {
                var i = t;
                try {
                    this[i(412)][i(432)](e, o)
                } catch (t) {
                    this[i(415)][i(401)](""[i(371)](e, i(393))[i(371)](t))
                }
            }
        }, {
            key: t(388),
            value: function(e) {
                var o = t
                  , i = this[o(369)][o(394)];
                if (i)
                    return i;
                var n = vC[o(399)];
                return n[e % n[o(443)]]
            }
        }, {
            key: t(451),
            value: function(e) {
                var o, i = t, n = (this[i(369)][i(373)] || {})[i(407)];
                if (e[i(403)])
                    if (0 === e[i(403)][i(410)]) {
                        e[i(453)] = {};
                        var A = this[i(405)](null === (o = e[i(421)]) || void 0 === o ? void 0 : o[i(387)])
                          , r = e[i(403)][A] || e[i(403)].ad;
                        if (r) {
                            try {
                                e[i(453)].ad = n ? NC[i(418)](r) : JSON[i(418)](r)
                            } catch (e) {
                                this[i(415)][i(376)](i(392), {
                                    adStr: r,
                                    message: null == e ? void 0 : e[i(452)]
                                })
                            }
                            this[i(415)][i(402)](i(404), e[i(453)].ad)
                        }
                        if (e[i(403)][i(419)]) {
                            try {
                                e[i(453)][i(419)] = JSON[i(418)](e[i(403)][i(419)])
                            } catch (t) {
                                this[i(415)][i(376)](i(414), {
                                    vinfoStr: e[i(403)][i(419)],
                                    message: null == t ? void 0 : t[i(452)]
                                })
                            }
                            this[i(415)][i(402)](i(375), e[i(453)][i(419)])
                        }
                        tp(e[i(403)][i(430)])
                    } else
                        e[i(401)] = {
                            code: fC[i(434)],
                            message: ns(xa[i(427)][i(416)], e[i(403)][i(410)])
                        };
                else
                    e[i(401)] = {
                        code: fC[i(447)]
                    }
            }
        }, {
            key: t(405),
            value: function(e) {
                if (!e)
                    return "";
                var o = e[t(455)](/\bsspKey=([^&]+)/);
                return (null == o ? void 0 : o[1]) || ""
            }
        }]),
        o
    }()
      , jC = function(o) {
        c(s, o);
        var A = Q(s);
        function s(e, o) {
            var i;
            return n(this, s),
            a(t(i = A.call(this)), "proxyHttp", void 0),
            a(t(i), "liveGetinfo", void 0),
            i.logger = new ia(e.instanceId,"LiveGetinfo"),
            i.proxyHttp = new HC(e,o),
            i.liveGetinfo = new Zv(e,o),
            i.pluginMsg = o.pluginMsg,
            i
        }
        return r(s, [{
            key: "request",
            value: function(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this;
                return i((function() {
                    var i, A, r, a, s, l, g;
                    return F(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return i = o.adParams,
                            A = o.vinfoParams,
                            r = o.emitEvtDefer,
                            a = o.emitEvtOpaque,
                            n.emitPluginEvts(e.PLAY_EVENT_EXT.GETINFO_START, {
                                emitEvtOpaque: a
                            }, r),
                            [4, n.liveGetinfo.request(t, A)];
                        case 1:
                            return s = c.sent(),
                            i && Object.keys(i).length > 0 ? [4, n.proxyHttp.request(i, void 0)] : [3, 3];
                        case 2:
                            g = c.sent(),
                            s.adInfo = null === (l = g.parseData) || void 0 === l ? void 0 : l.ad,
                            c.label = 3;
                        case 3:
                            return s.emitEvtOpaque = a,
                            n.emitPluginEvts(e.PLAY_EVENT_EXT.GETINFO_OVER, s, r),
                            n.emitPluginEvts(e.PLAY_EVENT_EXT.GETINFO_RESULT, s),
                            [2, s]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "requestAd",
            value: function(e) {
                var t = this;
                return i((function() {
                    var o, i;
                    return F(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, t.proxyHttp.request(e, void 0)];
                        case 1:
                            return i = n.sent(),
                            [2, null === (o = i.parseData) || void 0 === o ? void 0 : o.ad]
                        }
                    }
                    ))
                }
                ))()
            }
        }, {
            key: "abort",
            value: function() {
                this.proxyHttp.abort(),
                this.liveGetinfo.abort()
            }
        }, {
            key: "destroy",
            value: function() {
                var e, t;
                null === (e = this.liveGetinfo) || void 0 === e || e.destroy(),
                null === (t = this.proxyHttp) || void 0 === t || t.destroy(),
                this.liveGetinfo = null,
                this.proxyHttp = null,
                this.pluginMsg = null
            }
        }]),
        s
    }(EC);
    function qC(e, t) {
        var o = WC();
        return qC = function(t, i) {
            var n = o[t -= 446];
            void 0 === qC.LaTDoB && (qC.bnDfyi = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            qC.LaTDoB = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = qC.bnDfyi(n),
            e[A] = n),
            n
        }
        ,
        qC(e, t)
    }
    function WC() {
        var e = ["u1jwx0rbvefFsu5wquLmra", "CgfYC2veyxrH", "zw1WDhKGCMvZigvYCG", "mta5mdbWBvDkBM4", "BgfIzwW", "rKfjuLbmqvK", "mJrSAfLIsMu", "mJi2odG0uerwvLLA", "AxntChrizxzJ", "y2fUBM90ihbSyxKGzhjTigvYCG", "y2fUBM90ihbSyxKGAgv2yYbLCNi", "v0LervzjtKu", "nJKYnZr2CMzns2e", "CgfYC2uGCMvZigvYCG", "AxntChrnC2u", "y29Kzwm", "seXt", "C2vUDa", "CMvZrgf0yq", "y2fUBM90ihbSyxKGAgXZigvYCG", "ndCWntu3nKjyBevoqq", "zMLUza", "n2vyCxDMuG", "yxbWBhK", "zxHLBq", "sdi2nq", "ntu4mtq3mgzbs3PAsq", "ntiYovHUtevIvG", "mZG5mdi2nu1mzxfssG", "y2fUBM90ihbYzxzPzxCGzxjY", "ntfss09AALi", "AxntChrpCMLNAw5iBhm", "mJa0odC3mZftv2fzC2m", "zgX0ExbL", "zhjT", "zhjTvMfSDwu"];
        return (WC = function() {
            return e
        }
        )()
    }
    function JC(e) {
        return zC[qC(475)](this, arguments)
    }
    function zC() {
        var t = qC;
        return zC = i((function(t) {
            var o, i, n, A, r, a, s, l, g, c, u, E, d;
            return F(this, (function(B) {
                var h = qC;
                switch (B[h(456)]) {
                case 0:
                    return [4, KB()];
                case 1:
                    return n = B[h(469)](),
                    A = e.ErrorCode[h(452)],
                    r = {
                        noErrorPage: !0
                    },
                    s = (a = t || {})[h(470)],
                    l = a[h(453)],
                    s ? 82 === s.em && 1 === s[h(476)] ? [2, {
                        code: A,
                        data: r,
                        message: h(481)
                    }] : l ? (g = s[h(449)],
                    c = l[h(467)],
                    u = (null == s || null === (i = s.fl) || void 0 === i || null === (o = i.fi) || void 0 === o ? void 0 : o[h(473)]((function(e) {
                        return 1 === e.sl
                    }
                    )))[h(450)],
                    c !== Sa[h(477)] || n[h(460)] ? (E = u === lp[h(463)] && (n[h(451)] & Id[h(463)]) !== Id[h(463)],
                    d = u === lp[h(457)] && (n[h(451)] & Id[h(457)]) !== Id[h(457)],
                    E || d ? [2, {
                        code: A,
                        data: r,
                        message: h(461)
                    }] : g !== md[h(468)] || n[h(466)] || n[h(447)] ? [2, null] : [2, {
                        code: A,
                        data: r,
                        message: h(471)
                    }]) : [2, {
                        code: A,
                        data: r,
                        message: h(462)
                    }]) : [2, {
                        code: A,
                        data: r,
                        message: h(465)
                    }] : [2, {
                        code: A,
                        data: r,
                        message: h(454)
                    }]
                }
            }
            ))
        }
        )),
        zC[t(475)](this, arguments)
    }
    function XC(e, t) {
        var o = ZC();
        return XC = function(t, i) {
            var n = o[t -= 126];
            void 0 === XC.GuTwPO && (XC.ycOfLt = function(e) {
                for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? 64 * t + o : o,
                A++ % 4) ? i += String.fromCharCode(255 & t >> (-2 * A & 6)) : 0)
                    o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
                for (var a = 0, s = i.length; a < s; a++)
                    n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
                return decodeURIComponent(n)
            }
            ,
            e = arguments,
            XC.GuTwPO = !0);
            var A = t + o[0]
              , r = e[A];
            return r ? n = r : (n = XC.ycOfLt(n),
            e[A] = n),
            n
        }
        ,
        XC(e, t)
    }
    function ZC() {
        var e = ["CMvXugfYyw1Z", "C3rHCNq", "zxjYB3i", "nJa3mfj6Dhfzsa", "zw5KvgLTzq", "oti1n0fPALLTBa", "mZm3nZrdwKrRCha", "mtiXmtj4y1n1BK8", "r0vusu5gt19tvefsva", "AxndAgvJA1zHBgLK", "CgfYC2uGChjVEhLODhrWihnYDKrHDge", "C2vUDa", "ywrqyxjHBxm", "A2v5CW", "ntC3mdiYnLvUwwHprW", "nZy5mZKYofLYsNzUBa", "DMLUzM9qyxjHBxm", "AxnszxfsyxC", "r0vusu5gt19srvnvtfq", "CMvXDwvZDfjLC0rHDge", "zw1PDev2DerLzMvY", "r0vusu5gt19pvKvs", "Bg9N", "C3j2rgf0yq", "CgX1z2LUtxnN", "zw1PDev2De9Wyxf1zq", "vM9Kr2v0Aw5MBW", "AxnvC2vtCNzeyxrH", "mJm2n21qy2P0vG", "CMvZrgf0yq", "Bg9Nz2vY", "zw5K", "mtqYmty4otjou3fTveq", "CgfYC2veyxrH", "CgXHEwvYq29UzMLN", "mJuWC2PYsfPi", "ChjLCgfYzq", "ywrjBMzV", "mtKWCMjisfz0", "CgfYC2vszxneyxrH", "CMvZuMf3", "CMvXDwvZDefK", "ufjpwfLFuKvr", "ChjVEhLODhrWihnYDKrHDgeGAw52ywLSzd0", "B2PZB24", "DMLUzM8", "A2vLCefKuMvXv2L0Aen1C3rVBvbHDgG", "Cgf0Aa", "C2v0uMvZrgf0yq", "z2v0uMvXugfYyw1Z", "ywjVCNq", "DM9Kr2v0Aw5MBW", "zgvZDhjVEq", "C2v0vMLKzw9jBMzV", "Aw5ZDgfUy2vjza", "ywrjBMzVuMvXugfYyw1Z", "z2v0Aw5MB0nVBMzPzW", "zw1PDfbSDwDPBKv2Dhm", "ChjVEhLiDhrW", "BgvUz3rO", "AxndAgvJA1nYDKrHDgfwywXPza", "BgfIzwW", "y2fSBa", "oty5tMHSqLfO", "CMvXDwvZDa", "mtfivhfMv2i"];
        return (ZC = function() {
            return e
        }
        )()
    }
    !function(e, t) {
        for (var o = qC, i = WC(); ; )
            try {
                if (660257 == parseInt(o(464)) / 1 * (parseInt(o(458)) / 2) + parseInt(o(446)) / 3 * (-parseInt(o(459)) / 4) + -parseInt(o(480)) / 5 + parseInt(o(478)) / 6 * (parseInt(o(474)) / 7) + -parseInt(o(472)) / 8 + -parseInt(o(479)) / 9 * (parseInt(o(455)) / 10) + parseInt(o(448)) / 11)
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }(),
    function(e, t) {
        for (var o = XC, i = ZC(); ; )
            try {
                if (578138 == parseInt(o(168)) / 1 * (-parseInt(o(135)) / 2) + parseInt(o(160)) / 3 * (parseInt(o(170)) / 4) + -parseInt(o(132)) / 5 * (parseInt(o(169)) / 6) + parseInt(o(177)) / 7 + parseInt(o(178)) / 8 + -parseInt(o(191)) / 9 * (-parseInt(o(166)) / 10) + parseInt(o(162)) / 11 * (-parseInt(o(129)) / 12))
                    break;
                i.push(i.shift())
            } catch (e) {
                i.push(i.shift())
            }
    }();