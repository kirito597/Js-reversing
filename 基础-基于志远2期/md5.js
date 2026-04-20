d = {
    extend: function() {
        var e, t, n, i, r = arguments[0] || {}, o = arguments.length;
        for (e = 1; e < o; e++)
            if (null !== (n = arguments[e]))
                for (t in n)
                    void 0 !== (i = n[t]) && (r[t] = i);
        return r
    },
    inArray: function(e, t) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e)
                return n;
        return -1
    },
    isString: function(e) {
        return "string" == typeof e
    },
    isFunction: function(e) {
        return "function" == typeof e
    },
    isBool: function(e) {
        return "boolean" == typeof e
    },
    bind: function(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    },
    trim: function(e) {
        return this.isString(e) ? e.replace(/^\s+/, "").replace(/\s+$/, "") : e
    },
    param: function(e) {
        var t = [];
        for (var n in e)
            t.push(n + "=" + e[n]);
        return t.join("&")
    },
    url: function(e, t) {
        return e + (/\?/.test(e) ? "&" : "?") + this.param(t)
    },
    md5: function(e) {
        function t(e, t, n, i, r, o) {
            return a((s = a(a(t, e), a(i, o))) << (c = r) | s >>> 32 - c, n);
            var s, c
        }
        function n(e, n, i, r, o, a, s) {
            return t(n & i | ~n & r, e, n, o, a, s)
        }
        function i(e, n, i, r, o, a, s) {
            return t(n & r | i & ~r, e, n, o, a, s)
        }
        function r(e, n, i, r, o, a, s) {
            return t(n ^ i ^ r, e, n, o, a, s)
        }
        function o(e, n, i, r, o, a, s) {
            return t(i ^ (n | ~r), e, n, o, a, s)
        }
        function a(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        var s, c = 0, l = 8;
        return function(e) {
            for (var t = c ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * e.length; i++)
                n += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
            return n
        }(function(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var s = 1732584193, c = -271733879, l = -1732584194, u = 271733878, p = 0; p < e.length; p += 16) {
                var d = s
                  , h = c
                  , f = l
                  , g = u;
                s = n(s, c, l, u, e[p + 0], 7, -680876936),
                u = n(u, s, c, l, e[p + 1], 12, -389564586),
                l = n(l, u, s, c, e[p + 2], 17, 606105819),
                c = n(c, l, u, s, e[p + 3], 22, -1044525330),
                s = n(s, c, l, u, e[p + 4], 7, -176418897),
                u = n(u, s, c, l, e[p + 5], 12, 1200080426),
                l = n(l, u, s, c, e[p + 6], 17, -1473231341),
                c = n(c, l, u, s, e[p + 7], 22, -45705983),
                s = n(s, c, l, u, e[p + 8], 7, 1770035416),
                u = n(u, s, c, l, e[p + 9], 12, -1958414417),
                l = n(l, u, s, c, e[p + 10], 17, -42063),
                c = n(c, l, u, s, e[p + 11], 22, -1990404162),
                s = n(s, c, l, u, e[p + 12], 7, 1804603682),
                u = n(u, s, c, l, e[p + 13], 12, -40341101),
                l = n(l, u, s, c, e[p + 14], 17, -1502002290),
                s = i(s, c = n(c, l, u, s, e[p + 15], 22, 1236535329), l, u, e[p + 1], 5, -165796510),
                u = i(u, s, c, l, e[p + 6], 9, -1069501632),
                l = i(l, u, s, c, e[p + 11], 14, 643717713),
                c = i(c, l, u, s, e[p + 0], 20, -373897302),
                s = i(s, c, l, u, e[p + 5], 5, -701558691),
                u = i(u, s, c, l, e[p + 10], 9, 38016083),
                l = i(l, u, s, c, e[p + 15], 14, -660478335),
                c = i(c, l, u, s, e[p + 4], 20, -405537848),
                s = i(s, c, l, u, e[p + 9], 5, 568446438),
                u = i(u, s, c, l, e[p + 14], 9, -1019803690),
                l = i(l, u, s, c, e[p + 3], 14, -187363961),
                c = i(c, l, u, s, e[p + 8], 20, 1163531501),
                s = i(s, c, l, u, e[p + 13], 5, -1444681467),
                u = i(u, s, c, l, e[p + 2], 9, -51403784),
                l = i(l, u, s, c, e[p + 7], 14, 1735328473),
                s = r(s, c = i(c, l, u, s, e[p + 12], 20, -1926607734), l, u, e[p + 5], 4, -378558),
                u = r(u, s, c, l, e[p + 8], 11, -2022574463),
                l = r(l, u, s, c, e[p + 11], 16, 1839030562),
                c = r(c, l, u, s, e[p + 14], 23, -35309556),
                s = r(s, c, l, u, e[p + 1], 4, -1530992060),
                u = r(u, s, c, l, e[p + 4], 11, 1272893353),
                l = r(l, u, s, c, e[p + 7], 16, -155497632),
                c = r(c, l, u, s, e[p + 10], 23, -1094730640),
                s = r(s, c, l, u, e[p + 13], 4, 681279174),
                u = r(u, s, c, l, e[p + 0], 11, -358537222),
                l = r(l, u, s, c, e[p + 3], 16, -722521979),
                c = r(c, l, u, s, e[p + 6], 23, 76029189),
                s = r(s, c, l, u, e[p + 9], 4, -640364487),
                u = r(u, s, c, l, e[p + 12], 11, -421815835),
                l = r(l, u, s, c, e[p + 15], 16, 530742520),
                s = o(s, c = r(c, l, u, s, e[p + 2], 23, -995338651), l, u, e[p + 0], 6, -198630844),
                u = o(u, s, c, l, e[p + 7], 10, 1126891415),
                l = o(l, u, s, c, e[p + 14], 15, -1416354905),
                c = o(c, l, u, s, e[p + 5], 21, -57434055),
                s = o(s, c, l, u, e[p + 12], 6, 1700485571),
                u = o(u, s, c, l, e[p + 3], 10, -1894986606),
                l = o(l, u, s, c, e[p + 10], 15, -1051523),
                c = o(c, l, u, s, e[p + 1], 21, -2054922799),
                s = o(s, c, l, u, e[p + 8], 6, 1873313359),
                u = o(u, s, c, l, e[p + 15], 10, -30611744),
                l = o(l, u, s, c, e[p + 6], 15, -1560198380),
                c = o(c, l, u, s, e[p + 13], 21, 1309151649),
                s = o(s, c, l, u, e[p + 4], 6, -145523070),
                u = o(u, s, c, l, e[p + 11], 10, -1120210379),
                l = o(l, u, s, c, e[p + 2], 15, 718787259),
                c = o(c, l, u, s, e[p + 9], 21, -343485551),
                s = a(s, d),
                c = a(c, h),
                l = a(l, f),
                u = a(u, g)
            }
            return Array(s, c, l, u)
        }(function(e) {
            for (var t = Array(), n = (1 << l) - 1, i = 0; i < e.length * l; i += l)
                t[i >> 5] |= (e.charCodeAt(i / l) & n) << i % 32;
            return t
        }(s = e), s.length * l))
    },

    autoLoadScript: function(e, t) {
        var n = document.createElement("script")
          , i = document.getElementsByTagName("head")[0];
        n.charset = "UTF-8",
        n.async = !0,
        n.onerror = function() {
            t && t(!1)
        }
        ;
        var r = !1;
        n.onload = n.onreadystatechange = function() {
            r || n.readyState && "loaded" !== n.readyState && "complete" !== n.readyState || (r = !0,
            t && t(!0))
        }
        ,
        n.src = e,
        i.appendChild(n)
    }
}