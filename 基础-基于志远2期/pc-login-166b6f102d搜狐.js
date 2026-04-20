window = global;
/*! For license information please see pc-login-166b6f102d.js.LICENSE.txt */
(self.webpackChunkmptcfe_fasttpl_components_pchome = self.webpackChunkmptcfe_fasttpl_components_pchome || []).push([[544], {
    6163: e => {
        window,
        e.exports = function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var r = t[i] = {
                    i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, n),
                r.l = !0,
                r.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var r in e)
                        n.d(i, r, function(t) {
                            return e[t]
                        }
                        .bind(null, r));
                return i
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "./",
            n(n.s = 0)
        }([function(e, t, n) {
            var i = n(1)
              , r = n(19)
              , o = n(10);
            e.exports = {
                loginBtnIndex: i,
                loginIndex: r,
                userModel: o
            }
        }
        , function(e, t, n) {
            (function(t, i, r) {
                n(6);
                var o = n(10)
                  , a = n(18)
                  , s = n(19)
                  , c = n(13)
                  , l = n(24)
                  , u = n(15);
                const {getQueryArgs: p} = n(25);
                e.exports = t.View.extend({
                    template: i.template(n(26)),
                    index_tpl: i.template(n(27)),
                    events: {
                        "click [data-role='login-btn']": "login",
                        "click [data-role='logout-btn']": "logout",
                        "click .my-center,.my-user": "_to_ucenter",
                        "click .my-ucenter": "_to_ucenter_head",
                        "click #wza": "wza",
                        "click #ghb": "ghb"
                    },
                    data: {
                        mark: "",
                        object: {},
                        noticeNum: 0,
                        ucenterUrl: "//www.sohu.com/ucenter"
                    },
                    initialize: function(e) {
                        var t = this;
                        this.type = e.type,
                        this.data.mark = e.mark,
                        this.cfgs = r.extend(this.cfgs, e.cfgs),
                        this.data.ucenterUrl = {
                            test: "//test-www.sohu.com/ucenter",
                            pre: "//pre-www.sohu.com/ucenter",
                            prod: "//www.sohu.com/ucenter"
                        }[u],
                        this.render();
                        var n = c.get("ppinf")
                          , i = c.get("umab_user_id");
                        o.on("get:userInfo", e => {
                            t.data.object = e,
                            s.user_info = e,
                            s.excFnList(s.get_user_info_cbs || [], e),
                            this.setUnreadNum(),
                            t.render()
                        }
                        ),
                        o.on("get:new_comment_count", function(e) {
                            t.render()
                        });
                        const l = n;
                        l && i ? o.fetch() : l && !i && a.login({
                            successFun: function(e) {
                                o.fetch()
                            }
                        }),
                        s.$el.on("login:success", function(e, t) {
                            o.fetch()
                        });
                        var d = p(location.href);
                        setTimeout( () => {
                            "000019_wzwza" === d._trans_ && "wza" === d.aria && aria && aria.start(),
                            "000019_wzwza" === d._trans_ && "ghb" === d.aria && aria && aria.oldFixedStart()
                        }
                        , 800)
                    },
                    render: function() {
                        "other" == this.type ? this.$el.html(this.template(this.data)) : this.$el.html(this.index_tpl(this.data)),
                        "other" == this.type && (this.data.object && this.data.object.nick ? this.$el.attr("class", "right login-after") : this.$el.attr("class", "right login")),
                        r(".login-after").hover(function() {
                            window.sohuSpm && "function" == typeof window.sohuSpm.sendAction && "function" == typeof window.sohuSpm.domDidChange && (window.sohuSpm.reScan(),
                            window.sohuSpm.sendAction({
                                acode: 8106
                            }))
                        }, function() {})
                    },
                    wza: function() {
                        aria.start(),
                        window.sohuSpm && window.sohuSpm.sendAction && window.sohuSpm.sendAction({
                            acode: 10693,
                            clkParam: "ariaType: wza"
                        })
                    },
                    ghb: function() {
                        aria.oldFixedStart(),
                        window.sohuSpm && window.sohuSpm.sendAction && window.sohuSpm.sendAction({
                            acode: 10693,
                            clkParam: "ariaType: ghb"
                        })
                    },
                    _to_ucenter: function() {
                        "index" == this.mark ? l.trigger(l.action_id.ucenter_index) : "channel" == this.mark || "news_channel" == this.mark ? l.trigger(l.action_id.ucenter_channel) : "article" == this.mark ? l.trigger(l.action_id.ucenter_article) : "pic_colloetions" == this.mark || this.mark,
                        this.render()
                    },
                    _to_ucenter_head: function() {
                        l.trigger(l.action_id.ucenter_head)
                    },
                    login: function() {
                        window.sohuSpm && "function" == typeof window.sohuSpm.sendAction && window.sohuSpm.sendAction({
                            acode: 8080
                        }),
                        s.login()
                    },
                    logout: function() {
                        window.sohuSpm && "function" == typeof window.sohuSpm.sendAction && window.sohuSpm.sendAction({
                            acode: 8088
                        });
                        var e = {
                            success: function(e, t) {
                                c.remove("umab_access_token", {
                                    domain: ".sohu.com",
                                    path: "/"
                                }),
                                c.remove("umab_refresh_token", {
                                    domain: ".sohu.com",
                                    path: "/"
                                }),
                                c.remove("umab_user_id", {
                                    domain: ".sohu.com",
                                    path: "/"
                                }),
                                window.location.reload()
                            },
                            error: function(e) {},
                            url: encodeURIComponent(window.location)
                        };
                        return o.logout(e),
                        !1
                    },
                    setUnreadNum: function() {
                        a.getUnreadNum({
                            successFun: e => {
                                this.data.noticeNum = e && e.data && e.data.unReadTotalNum,
                                this.render()
                            }
                            ,
                            failureFun: e => {}
                        })
                    }
                })
            }
            ).call(this, n(2), n(4), n(5))
        }
        , function(e, t, n) {
            (function(i) {
                var r, o, a;
                a = "object" == typeof self && self.self === self && self || "object" == typeof i && i.global === i && i,
                r = [n(4), n(5), t],
                o = function(e, t, n) {
                    a.Backbone = function(e, t, n, i) {
                        var r = e.Backbone
                          , o = Array.prototype.slice;
                        t.VERSION = "1.3.3",
                        t.$ = i,
                        t.noConflict = function() {
                            return e.Backbone = r,
                            this
                        }
                        ,
                        t.emulateHTTP = !1,
                        t.emulateJSON = !1;
                        var a = function(e, t, i) {
                            switch (e) {
                            case 1:
                                return function() {
                                    return n[t](this[i])
                                }
                                ;
                            case 2:
                                return function(e) {
                                    return n[t](this[i], e)
                                }
                                ;
                            case 3:
                                return function(e, r) {
                                    return n[t](this[i], c(e, this), r)
                                }
                                ;
                            case 4:
                                return function(e, r, o) {
                                    return n[t](this[i], c(e, this), r, o)
                                }
                                ;
                            default:
                                return function() {
                                    var e = o.call(arguments);
                                    return e.unshift(this[i]),
                                    n[t].apply(n, e)
                                }
                            }
                        }
                          , s = function(e, t, i) {
                            n.each(t, function(t, r) {
                                n[r] && (e.prototype[r] = a(t, r, i))
                            })
                        }
                          , c = function(e, t) {
                            return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? l(e) : n.isString(e) ? function(t) {
                                return t.get(e)
                            }
                            : e
                        }
                          , l = function(e) {
                            var t = n.matches(e);
                            return function(e) {
                                return t(e.attributes)
                            }
                        }
                          , u = t.Events = {}
                          , p = /\s+/
                          , d = function(e, t, i, r, o) {
                            var a, s = 0;
                            if (i && "object" == typeof i) {
                                void 0 !== r && "context"in o && void 0 === o.context && (o.context = r);
                                for (a = n.keys(i); s < a.length; s++)
                                    t = d(e, t, a[s], i[a[s]], o)
                            } else if (i && p.test(i))
                                for (a = i.split(p); s < a.length; s++)
                                    t = e(t, a[s], r, o);
                            else
                                t = e(t, i, r, o);
                            return t
                        };
                        u.on = function(e, t, n) {
                            return h(this, e, t, n)
                        }
                        ;
                        var h = function(e, t, n, i, r) {
                            return e._events = d(f, e._events || {}, t, n, {
                                context: i,
                                ctx: e,
                                listening: r
                            }),
                            r && ((e._listeners || (e._listeners = {}))[r.id] = r),
                            e
                        };
                        u.listenTo = function(e, t, i) {
                            if (!e)
                                return this;
                            var r = e._listenId || (e._listenId = n.uniqueId("l"))
                              , o = this._listeningTo || (this._listeningTo = {})
                              , a = o[r];
                            if (!a) {
                                var s = this._listenId || (this._listenId = n.uniqueId("l"));
                                a = o[r] = {
                                    obj: e,
                                    objId: r,
                                    id: s,
                                    listeningTo: o,
                                    count: 0
                                }
                            }
                            return h(e, t, i, this, a),
                            this
                        }
                        ;
                        var f = function(e, t, n, i) {
                            if (n) {
                                var r = e[t] || (e[t] = [])
                                  , o = i.context
                                  , a = i.ctx
                                  , s = i.listening;
                                s && s.count++,
                                r.push({
                                    callback: n,
                                    context: o,
                                    ctx: o || a,
                                    listening: s
                                })
                            }
                            return e
                        };
                        u.off = function(e, t, n) {
                            return this._events ? (this._events = d(g, this._events, e, t, {
                                context: n,
                                listeners: this._listeners
                            }),
                            this) : this
                        }
                        ,
                        u.stopListening = function(e, t, i) {
                            var r = this._listeningTo;
                            if (!r)
                                return this;
                            for (var o = e ? [e._listenId] : n.keys(r), a = 0; a < o.length; a++) {
                                var s = r[o[a]];
                                if (!s)
                                    break;
                                s.obj.off(t, i, this)
                            }
                            return this
                        }
                        ;
                        var g = function(e, t, i, r) {
                            if (e) {
                                var o, a = 0, s = r.context, c = r.listeners;
                                if (t || i || s) {
                                    for (var l = t ? [t] : n.keys(e); a < l.length; a++) {
                                        var u = e[t = l[a]];
                                        if (!u)
                                            break;
                                        for (var p = [], d = 0; d < u.length; d++) {
                                            var h = u[d];
                                            i && i !== h.callback && i !== h.callback._callback || s && s !== h.context ? p.push(h) : (o = h.listening) && 0 == --o.count && (delete c[o.id],
                                            delete o.listeningTo[o.objId])
                                        }
                                        p.length ? e[t] = p : delete e[t]
                                    }
                                    return e
                                }
                                for (var f = n.keys(c); a < f.length; a++)
                                    delete c[(o = c[f[a]]).id],
                                    delete o.listeningTo[o.objId]
                            }
                        };
                        u.once = function(e, t, i) {
                            var r = d(m, {}, e, t, n.bind(this.off, this));
                            return "string" == typeof e && null == i && (t = void 0),
                            this.on(r, t, i)
                        }
                        ,
                        u.listenToOnce = function(e, t, i) {
                            var r = d(m, {}, t, i, n.bind(this.stopListening, this, e));
                            return this.listenTo(e, r)
                        }
                        ;
                        var m = function(e, t, i, r) {
                            if (i) {
                                var o = e[t] = n.once(function() {
                                    r(t, o),
                                    i.apply(this, arguments)
                                });
                                o._callback = i
                            }
                            return e
                        };
                        u.trigger = function(e) {
                            if (!this._events)
                                return this;
                            for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++)
                                n[i] = arguments[i + 1];
                            return d(v, this._events, e, void 0, n),
                            this
                        }
                        ;
                        var v = function(e, t, n, i) {
                            if (e) {
                                var r = e[t]
                                  , o = e.all;
                                r && o && (o = o.slice()),
                                r && y(r, i),
                                o && y(o, [t].concat(i))
                            }
                            return e
                        }
                          , y = function(e, t) {
                            var n, i = -1, r = e.length, o = t[0], a = t[1], s = t[2];
                            switch (t.length) {
                            case 0:
                                for (; ++i < r; )
                                    (n = e[i]).callback.call(n.ctx);
                                return;
                            case 1:
                                for (; ++i < r; )
                                    (n = e[i]).callback.call(n.ctx, o);
                                return;
                            case 2:
                                for (; ++i < r; )
                                    (n = e[i]).callback.call(n.ctx, o, a);
                                return;
                            case 3:
                                for (; ++i < r; )
                                    (n = e[i]).callback.call(n.ctx, o, a, s);
                                return;
                            default:
                                for (; ++i < r; )
                                    (n = e[i]).callback.apply(n.ctx, t);
                                return
                            }
                        };
                        u.bind = u.on,
                        u.unbind = u.off,
                        n.extend(t, u);
                        var b = t.Model = function(e, t) {
                            var i = e || {};
                            t || (t = {}),
                            this.cid = n.uniqueId(this.cidPrefix),
                            this.attributes = {},
                            t.collection && (this.collection = t.collection),
                            t.parse && (i = this.parse(i, t) || {});
                            var r = n.result(this, "defaults");
                            i = n.defaults(n.extend({}, r, i), r),
                            this.set(i, t),
                            this.changed = {},
                            this.initialize.apply(this, arguments)
                        }
                        ;
                        n.extend(b.prototype, u, {
                            changed: null,
                            validationError: null,
                            idAttribute: "id",
                            cidPrefix: "c",
                            initialize: function() {},
                            toJSON: function(e) {
                                return n.clone(this.attributes)
                            },
                            sync: function() {
                                return t.sync.apply(this, arguments)
                            },
                            get: function(e) {
                                return this.attributes[e]
                            },
                            escape: function(e) {
                                return n.escape(this.get(e))
                            },
                            has: function(e) {
                                return null != this.get(e)
                            },
                            matches: function(e) {
                                return !!n.iteratee(e, this)(this.attributes)
                            },
                            set: function(e, t, i) {
                                if (null == e)
                                    return this;
                                var r;
                                if ("object" == typeof e ? (r = e,
                                i = t) : (r = {})[e] = t,
                                i || (i = {}),
                                !this._validate(r, i))
                                    return !1;
                                var o = i.unset
                                  , a = i.silent
                                  , s = []
                                  , c = this._changing;
                                this._changing = !0,
                                c || (this._previousAttributes = n.clone(this.attributes),
                                this.changed = {});
                                var l = this.attributes
                                  , u = this.changed
                                  , p = this._previousAttributes;
                                for (var d in r)
                                    t = r[d],
                                    n.isEqual(l[d], t) || s.push(d),
                                    n.isEqual(p[d], t) ? delete u[d] : u[d] = t,
                                    o ? delete l[d] : l[d] = t;
                                if (this.idAttribute in r && (this.id = this.get(this.idAttribute)),
                                !a) {
                                    s.length && (this._pending = i);
                                    for (var h = 0; h < s.length; h++)
                                        this.trigger("change:" + s[h], this, l[s[h]], i)
                                }
                                if (c)
                                    return this;
                                if (!a)
                                    for (; this._pending; )
                                        i = this._pending,
                                        this._pending = !1,
                                        this.trigger("change", this, i);
                                return this._pending = !1,
                                this._changing = !1,
                                this
                            },
                            unset: function(e, t) {
                                return this.set(e, void 0, n.extend({}, t, {
                                    unset: !0
                                }))
                            },
                            clear: function(e) {
                                var t = {};
                                for (var i in this.attributes)
                                    t[i] = void 0;
                                return this.set(t, n.extend({}, e, {
                                    unset: !0
                                }))
                            },
                            hasChanged: function(e) {
                                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                            },
                            changedAttributes: function(e) {
                                if (!e)
                                    return !!this.hasChanged() && n.clone(this.changed);
                                var t = this._changing ? this._previousAttributes : this.attributes
                                  , i = {};
                                for (var r in e) {
                                    var o = e[r];
                                    n.isEqual(t[r], o) || (i[r] = o)
                                }
                                return !!n.size(i) && i
                            },
                            previous: function(e) {
                                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                            },
                            previousAttributes: function() {
                                return n.clone(this._previousAttributes)
                            },
                            fetch: function(e) {
                                e = n.extend({
                                    parse: !0
                                }, e);
                                var t = this
                                  , i = e.success;
                                return e.success = function(n) {
                                    var r = e.parse ? t.parse(n, e) : n;
                                    if (!t.set(r, e))
                                        return !1;
                                    i && i.call(e.context, t, n, e),
                                    t.trigger("sync", t, n, e)
                                }
                                ,
                                q(this, e),
                                this.sync("read", this, e)
                            },
                            save: function(e, t, i) {
                                var r;
                                null == e || "object" == typeof e ? (r = e,
                                i = t) : (r = {})[e] = t;
                                var o = (i = n.extend({
                                    validate: !0,
                                    parse: !0
                                }, i)).wait;
                                if (r && !o) {
                                    if (!this.set(r, i))
                                        return !1
                                } else if (!this._validate(r, i))
                                    return !1;
                                var a = this
                                  , s = i.success
                                  , c = this.attributes;
                                i.success = function(e) {
                                    a.attributes = c;
                                    var t = i.parse ? a.parse(e, i) : e;
                                    if (o && (t = n.extend({}, r, t)),
                                    t && !a.set(t, i))
                                        return !1;
                                    s && s.call(i.context, a, e, i),
                                    a.trigger("sync", a, e, i)
                                }
                                ,
                                q(this, i),
                                r && o && (this.attributes = n.extend({}, c, r));
                                var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
                                "patch" !== l || i.attrs || (i.attrs = r);
                                var u = this.sync(l, this, i);
                                return this.attributes = c,
                                u
                            },
                            destroy: function(e) {
                                e = e ? n.clone(e) : {};
                                var t = this
                                  , i = e.success
                                  , r = e.wait
                                  , o = function() {
                                    t.stopListening(),
                                    t.trigger("destroy", t, t.collection, e)
                                };
                                e.success = function(n) {
                                    r && o(),
                                    i && i.call(e.context, t, n, e),
                                    t.isNew() || t.trigger("sync", t, n, e)
                                }
                                ;
                                var a = !1;
                                return this.isNew() ? n.defer(e.success) : (q(this, e),
                                a = this.sync("delete", this, e)),
                                r || o(),
                                a
                            },
                            url: function() {
                                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || R();
                                if (this.isNew())
                                    return e;
                                var t = this.get(this.idAttribute);
                                return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
                            },
                            parse: function(e, t) {
                                return e
                            },
                            clone: function() {
                                return new this.constructor(this.attributes)
                            },
                            isNew: function() {
                                return !this.has(this.idAttribute)
                            },
                            isValid: function(e) {
                                return this._validate({}, n.extend({}, e, {
                                    validate: !0
                                }))
                            },
                            _validate: function(e, t) {
                                if (!t.validate || !this.validate)
                                    return !0;
                                e = n.extend({}, this.attributes, e);
                                var i = this.validationError = this.validate(e, t) || null;
                                return !i || (this.trigger("invalid", this, i, n.extend(t, {
                                    validationError: i
                                })),
                                !1)
                            }
                        }),
                        s(b, {
                            keys: 1,
                            values: 1,
                            pairs: 1,
                            invert: 1,
                            pick: 0,
                            omit: 0,
                            chain: 1,
                            isEmpty: 1
                        }, "attributes");
                        var x = t.Collection = function(e, t) {
                            t || (t = {}),
                            t.model && (this.model = t.model),
                            void 0 !== t.comparator && (this.comparator = t.comparator),
                            this._reset(),
                            this.initialize.apply(this, arguments),
                            e && this.reset(e, n.extend({
                                silent: !0
                            }, t))
                        }
                          , w = {
                            add: !0,
                            remove: !0,
                            merge: !0
                        }
                          , k = {
                            add: !0,
                            remove: !1
                        }
                          , C = function(e, t, n) {
                            n = Math.min(Math.max(n, 0), e.length);
                            var i, r = Array(e.length - n), o = t.length;
                            for (i = 0; i < r.length; i++)
                                r[i] = e[i + n];
                            for (i = 0; i < o; i++)
                                e[i + n] = t[i];
                            for (i = 0; i < r.length; i++)
                                e[i + o + n] = r[i]
                        };
                        n.extend(x.prototype, u, {
                            model: b,
                            initialize: function() {},
                            toJSON: function(e) {
                                return this.map(function(t) {
                                    return t.toJSON(e)
                                })
                            },
                            sync: function() {
                                return t.sync.apply(this, arguments)
                            },
                            add: function(e, t) {
                                return this.set(e, n.extend({
                                    merge: !1
                                }, t, k))
                            },
                            remove: function(e, t) {
                                t = n.extend({}, t);
                                var i = !n.isArray(e);
                                e = i ? [e] : e.slice();
                                var r = this._removeModels(e, t);
                                return !t.silent && r.length && (t.changes = {
                                    added: [],
                                    merged: [],
                                    removed: r
                                },
                                this.trigger("update", this, t)),
                                i ? r[0] : r
                            },
                            set: function(e, t) {
                                if (null != e) {
                                    (t = n.extend({}, w, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                                    var i = !n.isArray(e);
                                    e = i ? [e] : e.slice();
                                    var r = t.at;
                                    null != r && (r = +r),
                                    r > this.length && (r = this.length),
                                    r < 0 && (r += this.length + 1);
                                    var o, a, s = [], c = [], l = [], u = [], p = {}, d = t.add, h = t.merge, f = t.remove, g = !1, m = this.comparator && null == r && !1 !== t.sort, v = n.isString(this.comparator) ? this.comparator : null;
                                    for (a = 0; a < e.length; a++) {
                                        o = e[a];
                                        var y = this.get(o);
                                        if (y) {
                                            if (h && o !== y) {
                                                var b = this._isModel(o) ? o.attributes : o;
                                                t.parse && (b = y.parse(b, t)),
                                                y.set(b, t),
                                                l.push(y),
                                                m && !g && (g = y.hasChanged(v))
                                            }
                                            p[y.cid] || (p[y.cid] = !0,
                                            s.push(y)),
                                            e[a] = y
                                        } else
                                            d && (o = e[a] = this._prepareModel(o, t)) && (c.push(o),
                                            this._addReference(o, t),
                                            p[o.cid] = !0,
                                            s.push(o))
                                    }
                                    if (f) {
                                        for (a = 0; a < this.length; a++)
                                            p[(o = this.models[a]).cid] || u.push(o);
                                        u.length && this._removeModels(u, t)
                                    }
                                    var x = !1
                                      , k = !m && d && f;
                                    if (s.length && k ? (x = this.length !== s.length || n.some(this.models, function(e, t) {
                                        return e !== s[t]
                                    }),
                                    this.models.length = 0,
                                    C(this.models, s, 0),
                                    this.length = this.models.length) : c.length && (m && (g = !0),
                                    C(this.models, c, null == r ? this.length : r),
                                    this.length = this.models.length),
                                    g && this.sort({
                                        silent: !0
                                    }),
                                    !t.silent) {
                                        for (a = 0; a < c.length; a++)
                                            null != r && (t.index = r + a),
                                            (o = c[a]).trigger("add", o, this, t);
                                        (g || x) && this.trigger("sort", this, t),
                                        (c.length || u.length || l.length) && (t.changes = {
                                            added: c,
                                            removed: u,
                                            merged: l
                                        },
                                        this.trigger("update", this, t))
                                    }
                                    return i ? e[0] : e
                                }
                            },
                            reset: function(e, t) {
                                t = t ? n.clone(t) : {};
                                for (var i = 0; i < this.models.length; i++)
                                    this._removeReference(this.models[i], t);
                                return t.previousModels = this.models,
                                this._reset(),
                                e = this.add(e, n.extend({
                                    silent: !0
                                }, t)),
                                t.silent || this.trigger("reset", this, t),
                                e
                            },
                            push: function(e, t) {
                                return this.add(e, n.extend({
                                    at: this.length
                                }, t))
                            },
                            pop: function(e) {
                                var t = this.at(this.length - 1);
                                return this.remove(t, e)
                            },
                            unshift: function(e, t) {
                                return this.add(e, n.extend({
                                    at: 0
                                }, t))
                            },
                            shift: function(e) {
                                var t = this.at(0);
                                return this.remove(t, e)
                            },
                            slice: function() {
                                return o.apply(this.models, arguments)
                            },
                            get: function(e) {
                                if (null != e)
                                    return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
                            },
                            has: function(e) {
                                return null != this.get(e)
                            },
                            at: function(e) {
                                return e < 0 && (e += this.length),
                                this.models[e]
                            },
                            where: function(e, t) {
                                return this[t ? "find" : "filter"](e)
                            },
                            findWhere: function(e) {
                                return this.where(e, !0)
                            },
                            sort: function(e) {
                                var t = this.comparator;
                                if (!t)
                                    throw new Error("Cannot sort a set without a comparator");
                                e || (e = {});
                                var i = t.length;
                                return n.isFunction(t) && (t = n.bind(t, this)),
                                1 === i || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t),
                                e.silent || this.trigger("sort", this, e),
                                this
                            },
                            pluck: function(e) {
                                return this.map(e + "")
                            },
                            fetch: function(e) {
                                var t = (e = n.extend({
                                    parse: !0
                                }, e)).success
                                  , i = this;
                                return e.success = function(n) {
                                    var r = e.reset ? "reset" : "set";
                                    i[r](n, e),
                                    t && t.call(e.context, i, n, e),
                                    i.trigger("sync", i, n, e)
                                }
                                ,
                                q(this, e),
                                this.sync("read", this, e)
                            },
                            create: function(e, t) {
                                var i = (t = t ? n.clone(t) : {}).wait;
                                if (!(e = this._prepareModel(e, t)))
                                    return !1;
                                i || this.add(e, t);
                                var r = this
                                  , o = t.success;
                                return t.success = function(e, t, n) {
                                    i && r.add(e, n),
                                    o && o.call(n.context, e, t, n)
                                }
                                ,
                                e.save(null, t),
                                e
                            },
                            parse: function(e, t) {
                                return e
                            },
                            clone: function() {
                                return new this.constructor(this.models,{
                                    model: this.model,
                                    comparator: this.comparator
                                })
                            },
                            modelId: function(e) {
                                return e[this.model.prototype.idAttribute || "id"]
                            },
                            _reset: function() {
                                this.length = 0,
                                this.models = [],
                                this._byId = {}
                            },
                            _prepareModel: function(e, t) {
                                if (this._isModel(e))
                                    return e.collection || (e.collection = this),
                                    e;
                                (t = t ? n.clone(t) : {}).collection = this;
                                var i = new this.model(e,t);
                                return i.validationError ? (this.trigger("invalid", this, i.validationError, t),
                                !1) : i
                            },
                            _removeModels: function(e, t) {
                                for (var n = [], i = 0; i < e.length; i++) {
                                    var r = this.get(e[i]);
                                    if (r) {
                                        var o = this.indexOf(r);
                                        this.models.splice(o, 1),
                                        this.length--,
                                        delete this._byId[r.cid];
                                        var a = this.modelId(r.attributes);
                                        null != a && delete this._byId[a],
                                        t.silent || (t.index = o,
                                        r.trigger("remove", r, this, t)),
                                        n.push(r),
                                        this._removeReference(r, t)
                                    }
                                }
                                return n
                            },
                            _isModel: function(e) {
                                return e instanceof b
                            },
                            _addReference: function(e, t) {
                                this._byId[e.cid] = e;
                                var n = this.modelId(e.attributes);
                                null != n && (this._byId[n] = e),
                                e.on("all", this._onModelEvent, this)
                            },
                            _removeReference: function(e, t) {
                                delete this._byId[e.cid];
                                var n = this.modelId(e.attributes);
                                null != n && delete this._byId[n],
                                this === e.collection && delete e.collection,
                                e.off("all", this._onModelEvent, this)
                            },
                            _onModelEvent: function(e, t, n, i) {
                                if (t) {
                                    if (("add" === e || "remove" === e) && n !== this)
                                        return;
                                    if ("destroy" === e && this.remove(t, i),
                                    "change" === e) {
                                        var r = this.modelId(t.previousAttributes())
                                          , o = this.modelId(t.attributes);
                                        r !== o && (null != r && delete this._byId[r],
                                        null != o && (this._byId[o] = t))
                                    }
                                }
                                this.trigger.apply(this, arguments)
                            }
                        }),
                        s(x, {
                            forEach: 3,
                            each: 3,
                            map: 3,
                            collect: 3,
                            reduce: 0,
                            foldl: 0,
                            inject: 0,
                            reduceRight: 0,
                            foldr: 0,
                            find: 3,
                            detect: 3,
                            filter: 3,
                            select: 3,
                            reject: 3,
                            every: 3,
                            all: 3,
                            some: 3,
                            any: 3,
                            include: 3,
                            includes: 3,
                            contains: 3,
                            invoke: 0,
                            max: 3,
                            min: 3,
                            toArray: 1,
                            size: 1,
                            first: 3,
                            head: 3,
                            take: 3,
                            initial: 3,
                            rest: 3,
                            tail: 3,
                            drop: 3,
                            last: 3,
                            without: 0,
                            difference: 0,
                            indexOf: 3,
                            shuffle: 1,
                            lastIndexOf: 3,
                            isEmpty: 1,
                            chain: 1,
                            sample: 3,
                            partition: 3,
                            groupBy: 3,
                            countBy: 3,
                            sortBy: 3,
                            indexBy: 3,
                            findIndex: 3,
                            findLastIndex: 3
                        }, "models");
                        var _ = t.View = function(e) {
                            this.cid = n.uniqueId("view"),
                            n.extend(this, n.pick(e, T)),
                            this._ensureElement(),
                            this.initialize.apply(this, arguments)
                        }
                          , S = /^(\S+)\s*(.*)$/
                          , T = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                        n.extend(_.prototype, u, {
                            tagName: "div",
                            $: function(e) {
                                return this.$el.find(e)
                            },
                            initialize: function() {},
                            render: function() {
                                return this
                            },
                            remove: function() {
                                return this._removeElement(),
                                this.stopListening(),
                                this
                            },
                            _removeElement: function() {
                                this.$el.remove()
                            },
                            setElement: function(e) {
                                return this.undelegateEvents(),
                                this._setElement(e),
                                this.delegateEvents(),
                                this
                            },
                            _setElement: function(e) {
                                this.$el = e instanceof t.$ ? e : t.$(e),
                                this.el = this.$el[0]
                            },
                            delegateEvents: function(e) {
                                if (e || (e = n.result(this, "events")),
                                !e)
                                    return this;
                                for (var t in this.undelegateEvents(),
                                e) {
                                    var i = e[t];
                                    if (n.isFunction(i) || (i = this[i]),
                                    i) {
                                        var r = t.match(S);
                                        this.delegate(r[1], r[2], n.bind(i, this))
                                    }
                                }
                                return this
                            },
                            delegate: function(e, t, n) {
                                return this.$el.on(e + ".delegateEvents" + this.cid, t, n),
                                this
                            },
                            undelegateEvents: function() {
                                return this.$el && this.$el.off(".delegateEvents" + this.cid),
                                this
                            },
                            undelegate: function(e, t, n) {
                                return this.$el.off(e + ".delegateEvents" + this.cid, t, n),
                                this
                            },
                            _createElement: function(e) {
                                return document.createElement(e)
                            },
                            _ensureElement: function() {
                                if (this.el)
                                    this.setElement(n.result(this, "el"));
                                else {
                                    var e = n.extend({}, n.result(this, "attributes"));
                                    this.id && (e.id = n.result(this, "id")),
                                    this.className && (e.class = n.result(this, "className")),
                                    this.setElement(this._createElement(n.result(this, "tagName"))),
                                    this._setAttributes(e)
                                }
                            },
                            _setAttributes: function(e) {
                                this.$el.attr(e)
                            }
                        }),
                        t.sync = function(e, i, r) {
                            var o = E[e];
                            n.defaults(r || (r = {}), {
                                emulateHTTP: t.emulateHTTP,
                                emulateJSON: t.emulateJSON
                            });
                            var a = {
                                type: o,
                                dataType: "json"
                            };
                            if (r.url || (a.url = n.result(i, "url") || R()),
                            null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json",
                            a.data = JSON.stringify(r.attrs || i.toJSON(r))),
                            r.emulateJSON && (a.contentType = "application/x-www-form-urlencoded",
                            a.data = a.data ? {
                                model: a.data
                            } : {}),
                            r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                                a.type = "POST",
                                r.emulateJSON && (a.data._method = o);
                                var s = r.beforeSend;
                                r.beforeSend = function(e) {
                                    if (e.setRequestHeader("X-HTTP-Method-Override", o),
                                    s)
                                        return s.apply(this, arguments)
                                }
                            }
                            "GET" === a.type || r.emulateJSON || (a.processData = !1);
                            var c = r.error;
                            r.error = function(e, t, n) {
                                r.textStatus = t,
                                r.errorThrown = n,
                                c && c.call(r.context, e, t, n)
                            }
                            ;
                            var l = r.xhr = t.ajax(n.extend(a, r));
                            return i.trigger("request", i, l, r),
                            l
                        }
                        ;
                        var E = {
                            create: "POST",
                            update: "PUT",
                            patch: "PATCH",
                            delete: "DELETE",
                            read: "GET"
                        };
                        t.ajax = function() {
                            return t.$.ajax.apply(t.$, arguments)
                        }
                        ;
                        var I = t.Router = function(e) {
                            e || (e = {}),
                            e.routes && (this.routes = e.routes),
                            this._bindRoutes(),
                            this.initialize.apply(this, arguments)
                        }
                          , N = /\((.*?)\)/g
                          , F = /(\(\?)?:\w+/g
                          , j = /\*\w+/g
                          , A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                        n.extend(I.prototype, u, {
                            initialize: function() {},
                            route: function(e, i, r) {
                                n.isRegExp(e) || (e = this._routeToRegExp(e)),
                                n.isFunction(i) && (r = i,
                                i = ""),
                                r || (r = this[i]);
                                var o = this;
                                return t.history.route(e, function(n) {
                                    var a = o._extractParameters(e, n);
                                    !1 !== o.execute(r, a, i) && (o.trigger.apply(o, ["route:" + i].concat(a)),
                                    o.trigger("route", i, a),
                                    t.history.trigger("route", o, i, a))
                                }),
                                this
                            },
                            execute: function(e, t, n) {
                                e && e.apply(this, t)
                            },
                            navigate: function(e, n) {
                                return t.history.navigate(e, n),
                                this
                            },
                            _bindRoutes: function() {
                                if (this.routes) {
                                    this.routes = n.result(this, "routes");
                                    for (var e, t = n.keys(this.routes); null != (e = t.pop()); )
                                        this.route(e, this.routes[e])
                                }
                            },
                            _routeToRegExp: function(e) {
                                return e = e.replace(A, "\\$&").replace(N, "(?:$1)?").replace(F, function(e, t) {
                                    return t ? e : "([^/?]+)"
                                }).replace(j, "([^?]*?)"),
                                new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                            },
                            _extractParameters: function(e, t) {
                                var i = e.exec(t).slice(1);
                                return n.map(i, function(e, t) {
                                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                                })
                            }
                        });
                        var L = t.History = function() {
                            this.handlers = [],
                            this.checkUrl = n.bind(this.checkUrl, this),
                            "undefined" != typeof window && (this.location = window.location,
                            this.history = window.history)
                        }
                          , P = /^[#\/]|\s+$/g
                          , M = /^\/+|\/+$/g
                          , D = /#.*$/;
                        L.started = !1,
                        n.extend(L.prototype, u, {
                            interval: 50,
                            atRoot: function() {
                                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
                            },
                            matchRoot: function() {
                                return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
                            },
                            decodeFragment: function(e) {
                                return decodeURI(e.replace(/%25/g, "%2525"))
                            },
                            getSearch: function() {
                                var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                                return e ? e[0] : ""
                            },
                            getHash: function(e) {
                                var t = (e || this).location.href.match(/#(.*)$/);
                                return t ? t[1] : ""
                            },
                            getPath: function() {
                                var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                                return "/" === e.charAt(0) ? e.slice(1) : e
                            },
                            getFragment: function(e) {
                                return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
                                e.replace(P, "")
                            },
                            start: function(e) {
                                if (L.started)
                                    throw new Error("Backbone.history has already been started");
                                if (L.started = !0,
                                this.options = n.extend({
                                    root: "/"
                                }, this.options, e),
                                this.root = this.options.root,
                                this._wantsHashChange = !1 !== this.options.hashChange,
                                this._hasHashChange = "onhashchange"in window && (void 0 === document.documentMode || document.documentMode > 7),
                                this._useHashChange = this._wantsHashChange && this._hasHashChange,
                                this._wantsPushState = !!this.options.pushState,
                                this._hasPushState = !(!this.history || !this.history.pushState),
                                this._usePushState = this._wantsPushState && this._hasPushState,
                                this.fragment = this.getFragment(),
                                this.root = ("/" + this.root + "/").replace(M, "/"),
                                this._wantsHashChange && this._wantsPushState) {
                                    if (!this._hasPushState && !this.atRoot()) {
                                        var t = this.root.slice(0, -1) || "/";
                                        return this.location.replace(t + "#" + this.getPath()),
                                        !0
                                    }
                                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                                        replace: !0
                                    })
                                }
                                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                                    this.iframe = document.createElement("iframe"),
                                    this.iframe.src = "javascript:0",
                                    this.iframe.style.display = "none",
                                    this.iframe.tabIndex = -1;
                                    var i = document.body
                                      , r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                                    r.document.open(),
                                    r.document.close(),
                                    r.location.hash = "#" + this.fragment
                                }
                                var o = window.addEventListener || function(e, t) {
                                    return attachEvent("on" + e, t)
                                }
                                ;
                                if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                                !this.options.silent)
                                    return this.loadUrl()
                            },
                            stop: function() {
                                var e = window.removeEventListener || function(e, t) {
                                    return detachEvent("on" + e, t)
                                }
                                ;
                                this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
                                this.iframe && (document.body.removeChild(this.iframe),
                                this.iframe = null),
                                this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                                L.started = !1
                            },
                            route: function(e, t) {
                                this.handlers.unshift({
                                    route: e,
                                    callback: t
                                })
                            },
                            checkUrl: function(e) {
                                var t = this.getFragment();
                                if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
                                t === this.fragment)
                                    return !1;
                                this.iframe && this.navigate(t),
                                this.loadUrl()
                            },
                            loadUrl: function(e) {
                                return !!this.matchRoot() && (e = this.fragment = this.getFragment(e),
                                n.some(this.handlers, function(t) {
                                    if (t.route.test(e))
                                        return t.callback(e),
                                        !0
                                }))
                            },
                            navigate: function(e, t) {
                                if (!L.started)
                                    return !1;
                                t && !0 !== t || (t = {
                                    trigger: !!t
                                }),
                                e = this.getFragment(e || "");
                                var n = this.root;
                                "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
                                var i = n + e;
                                if (e = this.decodeFragment(e.replace(D, "")),
                                this.fragment !== e) {
                                    if (this.fragment = e,
                                    this._usePushState)
                                        this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                                    else {
                                        if (!this._wantsHashChange)
                                            return this.location.assign(i);
                                        if (this._updateHash(this.location, e, t.replace),
                                        this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                                            var r = this.iframe.contentWindow;
                                            t.replace || (r.document.open(),
                                            r.document.close()),
                                            this._updateHash(r.location, e, t.replace)
                                        }
                                    }
                                    return t.trigger ? this.loadUrl(e) : void 0
                                }
                            },
                            _updateHash: function(e, t, n) {
                                if (n) {
                                    var i = e.href.replace(/(javascript:|#).*$/, "");
                                    e.replace(i + "#" + t)
                                } else
                                    e.hash = "#" + t
                            }
                        }),
                        t.history = new L;
                        var $ = function(e, t) {
                            var i, r = this;
                            return i = e && n.has(e, "constructor") ? e.constructor : function() {
                                return r.apply(this, arguments)
                            }
                            ,
                            n.extend(i, r, t),
                            i.prototype = n.create(r.prototype, e),
                            i.prototype.constructor = i,
                            i.__super__ = r.prototype,
                            i
                        };
                        b.extend = x.extend = I.extend = _.extend = L.extend = $;
                        var R = function() {
                            throw new Error('A "url" property or function must be specified')
                        }
                          , q = function(e, t) {
                            var n = t.error;
                            t.error = function(i) {
                                n && n.call(t.context, e, i, t),
                                e.trigger("error", e, i, t)
                            }
                        };
                        return t
                    }(a, n, e, t)
                }
                .apply(t, r),
                void 0 === o || (e.exports = o)
            }
            ).call(this, n(3))
        }
        , function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
        , function(e, t, n) {
            var i;
            (function() {
                function n(e) {
                    return function(t, n, i, r) {
                        n = k(n, r, 4);
                        var o = !N(t) && w.keys(t)
                          , a = (o || t).length
                          , s = e > 0 ? 0 : a - 1;
                        return arguments.length < 3 && (i = t[o ? o[s] : s],
                        s += e),
                        function(t, n, i, r, o, a) {
                            for (; o >= 0 && a > o; o += e) {
                                var s = r ? r[o] : o;
                                i = n(i, t[s], s, t)
                            }
                            return i
                        }(t, n, i, o, s, a)
                    }
                }
                function r(e) {
                    return function(t, n, i) {
                        n = C(n, i);
                        for (var r = I(t), o = e > 0 ? 0 : r - 1; o >= 0 && r > o; o += e)
                            if (n(t[o], o, t))
                                return o;
                        return -1
                    }
                }
                function o(e, t, n) {
                    return function(i, r, o) {
                        var a = 0
                          , s = I(i);
                        if ("number" == typeof o)
                            e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                        else if (n && o && s)
                            return i[o = n(i, r)] === r ? o : -1;
                        if (r != r)
                            return (o = t(h.call(i, a, s), w.isNaN)) >= 0 ? o + a : -1;
                        for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
                            if (i[o] === r)
                                return o;
                        return -1
                    }
                }
                function a(e, t) {
                    var n = P.length
                      , i = e.constructor
                      , r = w.isFunction(i) && i.prototype || u
                      , o = "constructor";
                    for (w.has(e, o) && !w.contains(t, o) && t.push(o); n--; )
                        (o = P[n])in e && e[o] !== r[o] && !w.contains(t, o) && t.push(o)
                }
                var s = this
                  , c = s._
                  , l = Array.prototype
                  , u = Object.prototype
                  , p = Function.prototype
                  , d = l.push
                  , h = l.slice
                  , f = u.toString
                  , g = u.hasOwnProperty
                  , m = Array.isArray
                  , v = Object.keys
                  , y = p.bind
                  , b = Object.create
                  , x = function() {}
                  , w = function(e) {
                    return e instanceof w ? e : this instanceof w ? void (this._wrapped = e) : new w(e)
                };
                e.exports && (t = e.exports = w),
                t._ = w,
                w.VERSION = "1.8.3";
                var k = function(e, t, n) {
                    if (void 0 === t)
                        return e;
                    switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        }
                        ;
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        }
                        ;
                    case 3:
                        return function(n, i, r) {
                            return e.call(t, n, i, r)
                        }
                        ;
                    case 4:
                        return function(n, i, r, o) {
                            return e.call(t, n, i, r, o)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                  , C = function(e, t, n) {
                    return null == e ? w.identity : w.isFunction(e) ? k(e, t, n) : w.isObject(e) ? w.matcher(e) : w.property(e)
                };
                w.iteratee = function(e, t) {
                    return C(e, t, 1 / 0)
                }
                ;
                var _ = function(e, t) {
                    return function(n) {
                        var i = arguments.length;
                        if (2 > i || null == n)
                            return n;
                        for (var r = 1; i > r; r++)
                            for (var o = arguments[r], a = e(o), s = a.length, c = 0; s > c; c++) {
                                var l = a[c];
                                t && void 0 !== n[l] || (n[l] = o[l])
                            }
                        return n
                    }
                }
                  , S = function(e) {
                    if (!w.isObject(e))
                        return {};
                    if (b)
                        return b(e);
                    x.prototype = e;
                    var t = new x;
                    return x.prototype = null,
                    t
                }
                  , T = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                }
                  , E = Math.pow(2, 53) - 1
                  , I = T("length")
                  , N = function(e) {
                    var t = I(e);
                    return "number" == typeof t && t >= 0 && E >= t
                };
                w.each = w.forEach = function(e, t, n) {
                    var i, r;
                    if (t = k(t, n),
                    N(e))
                        for (i = 0,
                        r = e.length; r > i; i++)
                            t(e[i], i, e);
                    else {
                        var o = w.keys(e);
                        for (i = 0,
                        r = o.length; r > i; i++)
                            t(e[o[i]], o[i], e)
                    }
                    return e
                }
                ,
                w.map = w.collect = function(e, t, n) {
                    t = C(t, n);
                    for (var i = !N(e) && w.keys(e), r = (i || e).length, o = Array(r), a = 0; r > a; a++) {
                        var s = i ? i[a] : a;
                        o[a] = t(e[s], s, e)
                    }
                    return o
                }
                ,
                w.reduce = w.foldl = w.inject = n(1),
                w.reduceRight = w.foldr = n(-1),
                w.find = w.detect = function(e, t, n) {
                    var i;
                    return void 0 !== (i = N(e) ? w.findIndex(e, t, n) : w.findKey(e, t, n)) && -1 !== i ? e[i] : void 0
                }
                ,
                w.filter = w.select = function(e, t, n) {
                    var i = [];
                    return t = C(t, n),
                    w.each(e, function(e, n, r) {
                        t(e, n, r) && i.push(e)
                    }),
                    i
                }
                ,
                w.reject = function(e, t, n) {
                    return w.filter(e, w.negate(C(t)), n)
                }
                ,
                w.every = w.all = function(e, t, n) {
                    t = C(t, n);
                    for (var i = !N(e) && w.keys(e), r = (i || e).length, o = 0; r > o; o++) {
                        var a = i ? i[o] : o;
                        if (!t(e[a], a, e))
                            return !1
                    }
                    return !0
                }
                ,
                w.some = w.any = function(e, t, n) {
                    t = C(t, n);
                    for (var i = !N(e) && w.keys(e), r = (i || e).length, o = 0; r > o; o++) {
                        var a = i ? i[o] : o;
                        if (t(e[a], a, e))
                            return !0
                    }
                    return !1
                }
                ,
                w.contains = w.includes = w.include = function(e, t, n, i) {
                    return N(e) || (e = w.values(e)),
                    ("number" != typeof n || i) && (n = 0),
                    w.indexOf(e, t, n) >= 0
                }
                ,
                w.invoke = function(e, t) {
                    var n = h.call(arguments, 2)
                      , i = w.isFunction(t);
                    return w.map(e, function(e) {
                        var r = i ? t : e[t];
                        return null == r ? r : r.apply(e, n)
                    })
                }
                ,
                w.pluck = function(e, t) {
                    return w.map(e, w.property(t))
                }
                ,
                w.where = function(e, t) {
                    return w.filter(e, w.matcher(t))
                }
                ,
                w.findWhere = function(e, t) {
                    return w.find(e, w.matcher(t))
                }
                ,
                w.max = function(e, t, n) {
                    var i, r, o = -1 / 0, a = -1 / 0;
                    if (null == t && null != e)
                        for (var s = 0, c = (e = N(e) ? e : w.values(e)).length; c > s; s++)
                            (i = e[s]) > o && (o = i);
                    else
                        t = C(t, n),
                        w.each(e, function(e, n, i) {
                            ((r = t(e, n, i)) > a || r === -1 / 0 && o === -1 / 0) && (o = e,
                            a = r)
                        });
                    return o
                }
                ,
                w.min = function(e, t, n) {
                    var i, r, o = 1 / 0, a = 1 / 0;
                    if (null == t && null != e)
                        for (var s = 0, c = (e = N(e) ? e : w.values(e)).length; c > s; s++)
                            i = e[s],
                            o > i && (o = i);
                    else
                        t = C(t, n),
                        w.each(e, function(e, n, i) {
                            r = t(e, n, i),
                            (a > r || 1 / 0 === r && 1 / 0 === o) && (o = e,
                            a = r)
                        });
                    return o
                }
                ,
                w.shuffle = function(e) {
                    for (var t, n = N(e) ? e : w.values(e), i = n.length, r = Array(i), o = 0; i > o; o++)
                        (t = w.random(0, o)) !== o && (r[o] = r[t]),
                        r[t] = n[o];
                    return r
                }
                ,
                w.sample = function(e, t, n) {
                    return null == t || n ? (N(e) || (e = w.values(e)),
                    e[w.random(e.length - 1)]) : w.shuffle(e).slice(0, Math.max(0, t))
                }
                ,
                w.sortBy = function(e, t, n) {
                    return t = C(t, n),
                    w.pluck(w.map(e, function(e, n, i) {
                        return {
                            value: e,
                            index: n,
                            criteria: t(e, n, i)
                        }
                    }).sort(function(e, t) {
                        var n = e.criteria
                          , i = t.criteria;
                        if (n !== i) {
                            if (n > i || void 0 === n)
                                return 1;
                            if (i > n || void 0 === i)
                                return -1
                        }
                        return e.index - t.index
                    }), "value")
                }
                ;
                var F = function(e) {
                    return function(t, n, i) {
                        var r = {};
                        return n = C(n, i),
                        w.each(t, function(i, o) {
                            var a = n(i, o, t);
                            e(r, i, a)
                        }),
                        r
                    }
                };
                w.groupBy = F(function(e, t, n) {
                    w.has(e, n) ? e[n].push(t) : e[n] = [t]
                }),
                w.indexBy = F(function(e, t, n) {
                    e[n] = t
                }),
                w.countBy = F(function(e, t, n) {
                    w.has(e, n) ? e[n]++ : e[n] = 1
                }),
                w.toArray = function(e) {
                    return e ? w.isArray(e) ? h.call(e) : N(e) ? w.map(e, w.identity) : w.values(e) : []
                }
                ,
                w.size = function(e) {
                    return null == e ? 0 : N(e) ? e.length : w.keys(e).length
                }
                ,
                w.partition = function(e, t, n) {
                    t = C(t, n);
                    var i = []
                      , r = [];
                    return w.each(e, function(e, n, o) {
                        (t(e, n, o) ? i : r).push(e)
                    }),
                    [i, r]
                }
                ,
                w.first = w.head = w.take = function(e, t, n) {
                    return null == e ? void 0 : null == t || n ? e[0] : w.initial(e, e.length - t)
                }
                ,
                w.initial = function(e, t, n) {
                    return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
                }
                ,
                w.last = function(e, t, n) {
                    return null == e ? void 0 : null == t || n ? e[e.length - 1] : w.rest(e, Math.max(0, e.length - t))
                }
                ,
                w.rest = w.tail = w.drop = function(e, t, n) {
                    return h.call(e, null == t || n ? 1 : t)
                }
                ,
                w.compact = function(e) {
                    return w.filter(e, w.identity)
                }
                ;
                var j = function(e, t, n, i) {
                    for (var r = [], o = 0, a = i || 0, s = I(e); s > a; a++) {
                        var c = e[a];
                        if (N(c) && (w.isArray(c) || w.isArguments(c))) {
                            t || (c = j(c, t, n));
                            var l = 0
                              , u = c.length;
                            for (r.length += u; u > l; )
                                r[o++] = c[l++]
                        } else
                            n || (r[o++] = c)
                    }
                    return r
                };
                w.flatten = function(e, t) {
                    return j(e, t, !1)
                }
                ,
                w.without = function(e) {
                    return w.difference(e, h.call(arguments, 1))
                }
                ,
                w.uniq = w.unique = function(e, t, n, i) {
                    w.isBoolean(t) || (i = n,
                    n = t,
                    t = !1),
                    null != n && (n = C(n, i));
                    for (var r = [], o = [], a = 0, s = I(e); s > a; a++) {
                        var c = e[a]
                          , l = n ? n(c, a, e) : c;
                        t ? (a && o === l || r.push(c),
                        o = l) : n ? w.contains(o, l) || (o.push(l),
                        r.push(c)) : w.contains(r, c) || r.push(c)
                    }
                    return r
                }
                ,
                w.union = function() {
                    return w.uniq(j(arguments, !0, !0))
                }
                ,
                w.intersection = function(e) {
                    for (var t = [], n = arguments.length, i = 0, r = I(e); r > i; i++) {
                        var o = e[i];
                        if (!w.contains(t, o)) {
                            for (var a = 1; n > a && w.contains(arguments[a], o); a++)
                                ;
                            a === n && t.push(o)
                        }
                    }
                    return t
                }
                ,
                w.difference = function(e) {
                    var t = j(arguments, !0, !0, 1);
                    return w.filter(e, function(e) {
                        return !w.contains(t, e)
                    })
                }
                ,
                w.zip = function() {
                    return w.unzip(arguments)
                }
                ,
                w.unzip = function(e) {
                    for (var t = e && w.max(e, I).length || 0, n = Array(t), i = 0; t > i; i++)
                        n[i] = w.pluck(e, i);
                    return n
                }
                ,
                w.object = function(e, t) {
                    for (var n = {}, i = 0, r = I(e); r > i; i++)
                        t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
                    return n
                }
                ,
                w.findIndex = r(1),
                w.findLastIndex = r(-1),
                w.sortedIndex = function(e, t, n, i) {
                    for (var r = (n = C(n, i, 1))(t), o = 0, a = I(e); a > o; ) {
                        var s = Math.floor((o + a) / 2);
                        n(e[s]) < r ? o = s + 1 : a = s
                    }
                    return o
                }
                ,
                w.indexOf = o(1, w.findIndex, w.sortedIndex),
                w.lastIndexOf = o(-1, w.findLastIndex),
                w.range = function(e, t, n) {
                    null == t && (t = e || 0,
                    e = 0),
                    n = n || 1;
                    for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; i > o; o++,
                    e += n)
                        r[o] = e;
                    return r
                }
                ;
                var A = function(e, t, n, i, r) {
                    if (!(i instanceof t))
                        return e.apply(n, r);
                    var o = S(e.prototype)
                      , a = e.apply(o, r);
                    return w.isObject(a) ? a : o
                };
                w.bind = function(e, t) {
                    if (y && e.bind === y)
                        return y.apply(e, h.call(arguments, 1));
                    if (!w.isFunction(e))
                        throw new TypeError("Bind must be called on a function");
                    var n = h.call(arguments, 2)
                      , i = function() {
                        return A(e, i, t, this, n.concat(h.call(arguments)))
                    };
                    return i
                }
                ,
                w.partial = function(e) {
                    var t = h.call(arguments, 1)
                      , n = function() {
                        for (var i = 0, r = t.length, o = Array(r), a = 0; r > a; a++)
                            o[a] = t[a] === w ? arguments[i++] : t[a];
                        for (; i < arguments.length; )
                            o.push(arguments[i++]);
                        return A(e, n, this, this, o)
                    };
                    return n
                }
                ,
                w.bindAll = function(e) {
                    var t, n, i = arguments.length;
                    if (1 >= i)
                        throw new Error("bindAll must be passed function names");
                    for (t = 1; i > t; t++)
                        e[n = arguments[t]] = w.bind(e[n], e);
                    return e
                }
                ,
                w.memoize = function(e, t) {
                    var n = function(i) {
                        var r = n.cache
                          , o = "" + (t ? t.apply(this, arguments) : i);
                        return w.has(r, o) || (r[o] = e.apply(this, arguments)),
                        r[o]
                    };
                    return n.cache = {},
                    n
                }
                ,
                w.delay = function(e, t) {
                    var n = h.call(arguments, 2);
                    return setTimeout(function() {
                        return e.apply(null, n)
                    }, t)
                }
                ,
                w.defer = w.partial(w.delay, w, 1),
                w.throttle = function(e, t, n) {
                    var i, r, o, a = null, s = 0;
                    n || (n = {});
                    var c = function() {
                        s = !1 === n.leading ? 0 : w.now(),
                        a = null,
                        o = e.apply(i, r),
                        a || (i = r = null)
                    };
                    return function() {
                        var l = w.now();
                        s || !1 !== n.leading || (s = l);
                        var u = t - (l - s);
                        return i = this,
                        r = arguments,
                        0 >= u || u > t ? (a && (clearTimeout(a),
                        a = null),
                        s = l,
                        o = e.apply(i, r),
                        a || (i = r = null)) : a || !1 === n.trailing || (a = setTimeout(c, u)),
                        o
                    }
                }
                ,
                w.debounce = function(e, t, n) {
                    var i, r, o, a, s, c = function() {
                        var l = w.now() - a;
                        t > l && l >= 0 ? i = setTimeout(c, t - l) : (i = null,
                        n || (s = e.apply(o, r),
                        i || (o = r = null)))
                    };
                    return function() {
                        o = this,
                        r = arguments,
                        a = w.now();
                        var l = n && !i;
                        return i || (i = setTimeout(c, t)),
                        l && (s = e.apply(o, r),
                        o = r = null),
                        s
                    }
                }
                ,
                w.wrap = function(e, t) {
                    return w.partial(t, e)
                }
                ,
                w.negate = function(e) {
                    return function() {
                        return !e.apply(this, arguments)
                    }
                }
                ,
                w.compose = function() {
                    var e = arguments
                      , t = e.length - 1;
                    return function() {
                        for (var n = t, i = e[t].apply(this, arguments); n--; )
                            i = e[n].call(this, i);
                        return i
                    }
                }
                ,
                w.after = function(e, t) {
                    return function() {
                        return --e < 1 ? t.apply(this, arguments) : void 0
                    }
                }
                ,
                w.before = function(e, t) {
                    var n;
                    return function() {
                        return --e > 0 && (n = t.apply(this, arguments)),
                        1 >= e && (t = null),
                        n
                    }
                }
                ,
                w.once = w.partial(w.before, 2);
                var L = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                  , P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                w.keys = function(e) {
                    if (!w.isObject(e))
                        return [];
                    if (v)
                        return v(e);
                    var t = [];
                    for (var n in e)
                        w.has(e, n) && t.push(n);
                    return L && a(e, t),
                    t
                }
                ,
                w.allKeys = function(e) {
                    if (!w.isObject(e))
                        return [];
                    var t = [];
                    for (var n in e)
                        t.push(n);
                    return L && a(e, t),
                    t
                }
                ,
                w.values = function(e) {
                    for (var t = w.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++)
                        i[r] = e[t[r]];
                    return i
                }
                ,
                w.mapObject = function(e, t, n) {
                    t = C(t, n);
                    for (var i, r = w.keys(e), o = r.length, a = {}, s = 0; o > s; s++)
                        a[i = r[s]] = t(e[i], i, e);
                    return a
                }
                ,
                w.pairs = function(e) {
                    for (var t = w.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++)
                        i[r] = [t[r], e[t[r]]];
                    return i
                }
                ,
                w.invert = function(e) {
                    for (var t = {}, n = w.keys(e), i = 0, r = n.length; r > i; i++)
                        t[e[n[i]]] = n[i];
                    return t
                }
                ,
                w.functions = w.methods = function(e) {
                    var t = [];
                    for (var n in e)
                        w.isFunction(e[n]) && t.push(n);
                    return t.sort()
                }
                ,
                w.extend = _(w.allKeys),
                w.extendOwn = w.assign = _(w.keys),
                w.findKey = function(e, t, n) {
                    t = C(t, n);
                    for (var i, r = w.keys(e), o = 0, a = r.length; a > o; o++)
                        if (t(e[i = r[o]], i, e))
                            return i
                }
                ,
                w.pick = function(e, t, n) {
                    var i, r, o = {}, a = e;
                    if (null == a)
                        return o;
                    w.isFunction(t) ? (r = w.allKeys(a),
                    i = k(t, n)) : (r = j(arguments, !1, !1, 1),
                    i = function(e, t, n) {
                        return t in n
                    }
                    ,
                    a = Object(a));
                    for (var s = 0, c = r.length; c > s; s++) {
                        var l = r[s]
                          , u = a[l];
                        i(u, l, a) && (o[l] = u)
                    }
                    return o
                }
                ,
                w.omit = function(e, t, n) {
                    if (w.isFunction(t))
                        t = w.negate(t);
                    else {
                        var i = w.map(j(arguments, !1, !1, 1), String);
                        t = function(e, t) {
                            return !w.contains(i, t)
                        }
                    }
                    return w.pick(e, t, n)
                }
                ,
                w.defaults = _(w.allKeys, !0),
                w.create = function(e, t) {
                    var n = S(e);
                    return t && w.extendOwn(n, t),
                    n
                }
                ,
                w.clone = function(e) {
                    return w.isObject(e) ? w.isArray(e) ? e.slice() : w.extend({}, e) : e
                }
                ,
                w.tap = function(e, t) {
                    return t(e),
                    e
                }
                ,
                w.isMatch = function(e, t) {
                    var n = w.keys(t)
                      , i = n.length;
                    if (null == e)
                        return !i;
                    for (var r = Object(e), o = 0; i > o; o++) {
                        var a = n[o];
                        if (t[a] !== r[a] || !(a in r))
                            return !1
                    }
                    return !0
                }
                ;
                var M = function(e, t, n, i) {
                    if (e === t)
                        return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t)
                        return e === t;
                    e instanceof w && (e = e._wrapped),
                    t instanceof w && (t = t._wrapped);
                    var r = f.call(e);
                    if (r !== f.call(t))
                        return !1;
                    switch (r) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t
                    }
                    var o = "[object Array]" === r;
                    if (!o) {
                        if ("object" != typeof e || "object" != typeof t)
                            return !1;
                        var a = e.constructor
                          , s = t.constructor;
                        if (a !== s && !(w.isFunction(a) && a instanceof a && w.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                            return !1
                    }
                    i = i || [];
                    for (var c = (n = n || []).length; c--; )
                        if (n[c] === e)
                            return i[c] === t;
                    if (n.push(e),
                    i.push(t),
                    o) {
                        if ((c = e.length) !== t.length)
                            return !1;
                        for (; c--; )
                            if (!M(e[c], t[c], n, i))
                                return !1
                    } else {
                        var l, u = w.keys(e);
                        if (c = u.length,
                        w.keys(t).length !== c)
                            return !1;
                        for (; c--; )
                            if (l = u[c],
                            !w.has(t, l) || !M(e[l], t[l], n, i))
                                return !1
                    }
                    return n.pop(),
                    i.pop(),
                    !0
                };
                w.isEqual = function(e, t) {
                    return M(e, t)
                }
                ,
                w.isEmpty = function(e) {
                    return null == e || (N(e) && (w.isArray(e) || w.isString(e) || w.isArguments(e)) ? 0 === e.length : 0 === w.keys(e).length)
                }
                ,
                w.isElement = function(e) {
                    return !(!e || 1 !== e.nodeType)
                }
                ,
                w.isArray = m || function(e) {
                    return "[object Array]" === f.call(e)
                }
                ,
                w.isObject = function(e) {
                    var t = typeof e;
                    return "function" === t || "object" === t && !!e
                }
                ,
                w.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                    w["is" + e] = function(t) {
                        return f.call(t) === "[object " + e + "]"
                    }
                }),
                w.isArguments(arguments) || (w.isArguments = function(e) {
                    return w.has(e, "callee")
                }
                ),
                "object" != typeof Int8Array && (w.isFunction = function(e) {
                    return "function" == typeof e || !1
                }
                ),
                w.isFinite = function(e) {
                    return isFinite(e) && !isNaN(parseFloat(e))
                }
                ,
                w.isNaN = function(e) {
                    return w.isNumber(e) && e !== +e
                }
                ,
                w.isBoolean = function(e) {
                    return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
                }
                ,
                w.isNull = function(e) {
                    return null === e
                }
                ,
                w.isUndefined = function(e) {
                    return void 0 === e
                }
                ,
                w.has = function(e, t) {
                    return null != e && g.call(e, t)
                }
                ,
                w.noConflict = function() {
                    return s._ = c,
                    this
                }
                ,
                w.identity = function(e) {
                    return e
                }
                ,
                w.constant = function(e) {
                    return function() {
                        return e
                    }
                }
                ,
                w.noop = function() {}
                ,
                w.property = T,
                w.propertyOf = function(e) {
                    return null == e ? function() {}
                    : function(t) {
                        return e[t]
                    }
                }
                ,
                w.matcher = w.matches = function(e) {
                    return e = w.extendOwn({}, e),
                    function(t) {
                        return w.isMatch(t, e)
                    }
                }
                ,
                w.times = function(e, t, n) {
                    var i = Array(Math.max(0, e));
                    t = k(t, n, 1);
                    for (var r = 0; e > r; r++)
                        i[r] = t(r);
                    return i
                }
                ,
                w.random = function(e, t) {
                    return null == t && (t = e,
                    e = 0),
                    e + Math.floor(Math.random() * (t - e + 1))
                }
                ,
                w.now = Date.now || function() {
                    return (new Date).getTime()
                }
                ;
                var D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }
                  , $ = w.invert(D)
                  , R = function(e) {
                    var t = function(t) {
                        return e[t]
                    }
                      , n = "(?:" + w.keys(e).join("|") + ")"
                      , i = RegExp(n)
                      , r = RegExp(n, "g");
                    return function(e) {
                        return e = null == e ? "" : "" + e,
                        i.test(e) ? e.replace(r, t) : e
                    }
                };
                w.escape = R(D),
                w.unescape = R($),
                w.result = function(e, t, n) {
                    var i = null == e ? void 0 : e[t];
                    return void 0 === i && (i = n),
                    w.isFunction(i) ? i.call(e) : i
                }
                ;
                var q = 0;
                w.uniqueId = function(e) {
                    var t = ++q + "";
                    return e ? e + t : t
                }
                ,
                w.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var O = /(.)^/
                  , H = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , B = /\\|'|\r|\n|\u2028|\u2029/g
                  , U = function(e) {
                    return "\\" + H[e]
                };
                w.template = function(e, t, n) {
                    !t && n && (t = n),
                    t = w.defaults({}, t, w.templateSettings);
                    var i = RegExp([(t.escape || O).source, (t.interpolate || O).source, (t.evaluate || O).source].join("|") + "|$", "g")
                      , r = 0
                      , o = "__p+='";
                    e.replace(i, function(t, n, i, a, s) {
                        return o += e.slice(r, s).replace(B, U),
                        r = s + t.length,
                        n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"),
                        t
                    }),
                    o += "';\n",
                    t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
                    o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    try {
                        var a = new Function(t.variable || "obj","_",o)
                    } catch (e) {
                        throw e.source = o,
                        e
                    }
                    var s = function(e) {
                        return a.call(this, e, w)
                    }
                      , c = t.variable || "obj";
                    return s.source = "function(" + c + "){\n" + o + "}",
                    s
                }
                ,
                w.chain = function(e) {
                    var t = w(e);
                    return t._chain = !0,
                    t
                }
                ;
                var z = function(e, t) {
                    return e._chain ? w(t).chain() : t
                };
                w.mixin = function(e) {
                    w.each(w.functions(e), function(t) {
                        var n = w[t] = e[t];
                        w.prototype[t] = function() {
                            var e = [this._wrapped];
                            return d.apply(e, arguments),
                            z(this, n.apply(w, e))
                        }
                    })
                }
                ,
                w.mixin(w),
                w.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                    var t = l[e];
                    w.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments),
                        "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                        z(this, n)
                    }
                }),
                w.each(["concat", "join", "slice"], function(e) {
                    var t = l[e];
                    w.prototype[e] = function() {
                        return z(this, t.apply(this._wrapped, arguments))
                    }
                }),
                w.prototype.value = function() {
                    return this._wrapped
                }
                ,
                w.prototype.valueOf = w.prototype.toJSON = w.prototype.value,
                w.prototype.toString = function() {
                    return "" + this._wrapped
                }
                ,
                void 0 === (i = function() {
                    return w
                }
                .apply(t, [])) || (e.exports = i)
            }
            ).call(this)
        }
        , function(e, t, n) {
            var i, r, o;
            r = "undefined" != typeof window ? window : this,
            o = function(n, r) {
                var o = []
                  , a = n.document
                  , s = o.slice
                  , c = o.concat
                  , l = o.push
                  , u = o.indexOf
                  , p = {}
                  , d = p.toString
                  , h = p.hasOwnProperty
                  , f = {}
                  , g = "1.12.4"
                  , m = function(e, t) {
                    return new m.fn.init(e,t)
                }
                  , v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                  , y = /^-ms-/
                  , b = /-([\da-z])/gi
                  , x = function(e, t) {
                    return t.toUpperCase()
                };
                function w(e) {
                    var t = !!e && "length"in e && e.length
                      , n = m.type(e);
                    return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                m.fn = m.prototype = {
                    jquery: g,
                    constructor: m,
                    selector: "",
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null != e ? e < 0 ? this[e + this.length] : this[e] : s.call(this)
                    },
                    pushStack: function(e) {
                        var t = m.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t.context = this.context,
                        t
                    },
                    each: function(e) {
                        return m.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(m.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice
                },
                m.extend = m.fn.extend = function() {
                    var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
                    for ("boolean" == typeof a && (l = a,
                    a = arguments[s] || {},
                    s++),
                    "object" == typeof a || m.isFunction(a) || (a = {}),
                    s === c && (a = this,
                    s--); s < c; s++)
                        if (null != (r = arguments[s]))
                            for (i in r)
                                e = a[i],
                                a !== (n = r[i]) && (l && n && (m.isPlainObject(n) || (t = m.isArray(n))) ? (t ? (t = !1,
                                o = e && m.isArray(e) ? e : []) : o = e && m.isPlainObject(e) ? e : {},
                                a[i] = m.extend(l, o, n)) : void 0 !== n && (a[i] = n));
                    return a
                }
                ,
                m.extend({
                    expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isFunction: function(e) {
                        return "function" === m.type(e)
                    },
                    isArray: Array.isArray || function(e) {
                        return "array" === m.type(e)
                    }
                    ,
                    isWindow: function(e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function(e) {
                        var t = e && e.toString();
                        return !m.isArray(e) && t - parseFloat(t) + 1 >= 0
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    isPlainObject: function(e) {
                        var t;
                        if (!e || "object" !== m.type(e) || e.nodeType || m.isWindow(e))
                            return !1;
                        try {
                            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype, "isPrototypeOf"))
                                return !1
                        } catch (e) {
                            return !1
                        }
                        if (!f.ownFirst)
                            for (t in e)
                                return h.call(e, t);
                        for (t in e)
                            ;
                        return void 0 === t || h.call(e, t)
                    },
                    type: function(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
                    },
                    globalEval: function(e) {
                        e && m.trim(e) && (n.execScript || function(e) {
                            n.eval.call(n, e)
                        }
                        )(e)
                    },
                    camelCase: function(e) {
                        return e.replace(y, "ms-").replace(b, x)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function(e, t) {
                        var n, i = 0;
                        if (w(e))
                            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                                ;
                        else
                            for (i in e)
                                if (!1 === t.call(e[i], i, e[i]))
                                    break;
                        return e
                    },
                    trim: function(e) {
                        return null == e ? "" : (e + "").replace(v, "")
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (w(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        var i;
                        if (t) {
                            if (u)
                                return u.call(t, e, n);
                            for (i = t.length,
                            n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                                if (n in t && t[n] === e)
                                    return n
                        }
                        return -1
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n; )
                            e[r++] = t[i++];
                        if (n != n)
                            for (; void 0 !== t[i]; )
                                e[r++] = t[i++];
                        return e.length = r,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                            !t(e[r], r) !== a && i.push(e[r]);
                        return i
                    },
                    map: function(e, t, n) {
                        var i, r, o = 0, a = [];
                        if (w(e))
                            for (i = e.length; o < i; o++)
                                null != (r = t(e[o], o, n)) && a.push(r);
                        else
                            for (o in e)
                                null != (r = t(e[o], o, n)) && a.push(r);
                        return c.apply([], a)
                    },
                    guid: 1,
                    proxy: function(e, t) {
                        var n, i, r;
                        if ("string" == typeof t && (r = e[t],
                        t = e,
                        e = r),
                        m.isFunction(e))
                            return n = s.call(arguments, 2),
                            i = function() {
                                return e.apply(t || this, n.concat(s.call(arguments)))
                            }
                            ,
                            i.guid = e.guid = e.guid || m.guid++,
                            i
                    },
                    now: function() {
                        return +new Date
                    },
                    support: f
                }),
                "function" == typeof Symbol && (m.fn[Symbol.iterator] = o[Symbol.iterator]),
                m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    p["[object " + t + "]"] = t.toLowerCase()
                });
                var k = function(e) {
                    var t, n, i, r, o, a, s, c, l, u, p, d, h, f, g, m, v, y, b, x = "sizzle" + 1 * new Date, w = e.document, k = 0, C = 0, _ = oe(), S = oe(), T = oe(), E = function(e, t) {
                        return e === t && (p = !0),
                        0
                    }, I = 1 << 31, N = {}.hasOwnProperty, F = [], j = F.pop, A = F.push, L = F.push, P = F.slice, M = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", q = "\\[" + $ + "*(" + R + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + $ + "*\\]", O = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", H = new RegExp($ + "+","g"), B = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), U = new RegExp("^" + $ + "*," + $ + "*"), z = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), W = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]","g"), J = new RegExp(O), X = new RegExp("^" + R + "$"), V = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + O),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + D + ")$","i"),
                        needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
                    }, Y = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)","ig"), ne = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, ie = function() {
                        d()
                    };
                    try {
                        L.apply(F = P.call(w.childNodes), w.childNodes),
                        F[w.childNodes.length].nodeType
                    } catch (e) {
                        L = {
                            apply: F.length ? function(e, t) {
                                A.apply(e, P.call(t))
                            }
                            : function(e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    function re(e, t, i, r) {
                        var o, s, l, u, p, f, v, y, k = t && t.ownerDocument, C = t ? t.nodeType : 9;
                        if (i = i || [],
                        "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                            return i;
                        if (!r && ((t ? t.ownerDocument || t : w) !== h && d(t),
                        t = t || h,
                        g)) {
                            if (11 !== C && (f = K.exec(e)))
                                if (o = f[1]) {
                                    if (9 === C) {
                                        if (!(l = t.getElementById(o)))
                                            return i;
                                        if (l.id === o)
                                            return i.push(l),
                                            i
                                    } else if (k && (l = k.getElementById(o)) && b(t, l) && l.id === o)
                                        return i.push(l),
                                        i
                                } else {
                                    if (f[2])
                                        return L.apply(i, t.getElementsByTagName(e)),
                                        i;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return L.apply(i, t.getElementsByClassName(o)),
                                        i
                                }
                            if (n.qsa && !T[e + " "] && (!m || !m.test(e))) {
                                if (1 !== C)
                                    k = t,
                                    y = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((u = t.getAttribute("id")) ? u = u.replace(ee, "\\$&") : t.setAttribute("id", u = x),
                                    s = (v = a(e)).length,
                                    p = X.test(u) ? "#" + u : "[id='" + u + "']"; s--; )
                                        v[s] = p + " " + ge(v[s]);
                                    y = v.join(","),
                                    k = Z.test(e) && he(t.parentNode) || t
                                }
                                if (y)
                                    try {
                                        return L.apply(i, k.querySelectorAll(y)),
                                        i
                                    } catch (e) {} finally {
                                        u === x && t.removeAttribute("id")
                                    }
                            }
                        }
                        return c(e.replace(B, "$1"), t, i, r)
                    }
                    function oe() {
                        var e = [];
                        return function t(n, r) {
                            return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                            t[n + " "] = r
                        }
                    }
                    function ae(e) {
                        return e[x] = !0,
                        e
                    }
                    function se(e) {
                        var t = h.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null
                        }
                    }
                    function ce(e, t) {
                        for (var n = e.split("|"), r = n.length; r--; )
                            i.attrHandle[n[r]] = t
                    }
                    function le(e, t) {
                        var n = t && e
                          , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || I) - (~e.sourceIndex || I);
                        if (i)
                            return i;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function ue(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function pe(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function de(e) {
                        return ae(function(t) {
                            return t = +t,
                            ae(function(n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--; )
                                    n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            })
                        })
                    }
                    function he(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = re.support = {},
                    o = re.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }
                    ,
                    d = re.setDocument = function(e) {
                        var t, r, a = e ? e.ownerDocument || e : w;
                        return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement,
                        g = !o(h),
                        (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)),
                        n.attributes = se(function(e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }),
                        n.getElementsByTagName = se(function(e) {
                            return e.appendChild(h.createComment("")),
                            !e.getElementsByTagName("*").length
                        }),
                        n.getElementsByClassName = G.test(h.getElementsByClassName),
                        n.getById = se(function(e) {
                            return f.appendChild(e).id = x,
                            !h.getElementsByName || !h.getElementsByName(x).length
                        }),
                        n.getById ? (i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                        ,
                        i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ) : (delete i.find.ID,
                        i.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ),
                        i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, i = [], r = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++]; )
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }
                        ,
                        i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        v = [],
                        m = [],
                        (n.qsa = G.test(h.querySelectorAll)) && (se(function(e) {
                            f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + $ + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || m.push("\\[" + $ + "*(?:value|" + D + ")"),
                            e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                            e.querySelectorAll(":checked").length || m.push(":checked"),
                            e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                        }),
                        se(function(e) {
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && m.push("name" + $ + "*[*^$|!~]?="),
                            e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            m.push(",.*:")
                        })),
                        (n.matchesSelector = G.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && se(function(e) {
                            n.disconnectedMatch = y.call(e, "div"),
                            y.call(e, "[s!='']:x"),
                            v.push("!=", O)
                        }),
                        m = m.length && new RegExp(m.join("|")),
                        v = v.length && new RegExp(v.join("|")),
                        t = G.test(f.compareDocumentPosition),
                        b = t || G.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                              , i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                        ,
                        E = t ? function(e, t) {
                            if (e === t)
                                return p = !0,
                                0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & i ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return p = !0,
                                0;
                            var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!r || !o)
                                return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                            if (r === o)
                                return le(e, t);
                            for (n = e; n = n.parentNode; )
                                a.unshift(n);
                            for (n = t; n = n.parentNode; )
                                s.unshift(n);
                            for (; a[i] === s[i]; )
                                i++;
                            return i ? le(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
                        }
                        ,
                        h) : h
                    }
                    ,
                    re.matches = function(e, t) {
                        return re(e, null, null, t)
                    }
                    ,
                    re.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== h && d(e),
                        t = t.replace(W, "='$1']"),
                        n.matchesSelector && g && !T[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                            try {
                                var i = y.call(e, t);
                                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return i
                            } catch (e) {}
                        return re(t, h, null, [e]).length > 0
                    }
                    ,
                    re.contains = function(e, t) {
                        return (e.ownerDocument || e) !== h && d(e),
                        b(e, t)
                    }
                    ,
                    re.attr = function(e, t) {
                        (e.ownerDocument || e) !== h && d(e);
                        var r = i.attrHandle[t.toLowerCase()]
                          , o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }
                    ,
                    re.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    re.uniqueSort = function(e) {
                        var t, i = [], r = 0, o = 0;
                        if (p = !n.detectDuplicates,
                        u = !n.sortStable && e.slice(0),
                        e.sort(E),
                        p) {
                            for (; t = e[o++]; )
                                t === e[o] && (r = i.push(o));
                            for (; r--; )
                                e.splice(i[r], 1)
                        }
                        return u = null,
                        e
                    }
                    ,
                    r = re.getText = function(e) {
                        var t, n = "", i = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += r(e)
                            } else if (3 === o || 4 === o)
                                return e.nodeValue
                        } else
                            for (; t = e[i++]; )
                                n += r(t);
                        return n
                    }
                    ,
                    i = re.selectors = {
                        cacheLength: 50,
                        createPseudo: ae,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne),
                                e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                                e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && J.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                }
                                : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = _[e + " "];
                                return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && _(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var r = re.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "",
                                    "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3)
                                  , a = "last" !== e.slice(-4)
                                  , s = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(t, n, c) {
                                    var l, u, p, d, h, f, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
                                    if (m) {
                                        if (o) {
                                            for (; g; ) {
                                                for (d = t; d = d[g]; )
                                                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                        return !1;
                                                f = g = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [a ? m.firstChild : m.lastChild],
                                        a && y) {
                                            for (b = (h = (l = (u = (p = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === k && l[1]) && l[2],
                                            d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || f.pop(); )
                                                if (1 === d.nodeType && ++b && d === t) {
                                                    u[e] = [k, h, b];
                                                    break
                                                }
                                        } else if (y && (b = h = (l = (u = (p = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === k && l[1]),
                                        !1 === b)
                                            for (; (d = ++h && d && d[g] || (b = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (p = d[x] || (d[x] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [k, b]),
                                            d !== t)); )
                                                ;
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                                return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                                i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                    for (var i, o = r(e, t), a = o.length; a--; )
                                        e[i = M(e, o[a])] = !(n[i] = o[a])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }
                                ) : r
                            }
                        },
                        pseudos: {
                            not: ae(function(e) {
                                var t = []
                                  , n = []
                                  , i = s(e.replace(B, "$1"));
                                return i[x] ? ae(function(e, t, n, r) {
                                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, r, o) {
                                    return t[0] = e,
                                    i(t, null, o, n),
                                    t[0] = null,
                                    !n.pop()
                                }
                            }),
                            has: ae(function(e) {
                                return function(t) {
                                    return re(e, t).length > 0
                                }
                            }),
                            contains: ae(function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                                }
                            }),
                            lang: ae(function(e) {
                                return X.test(e || "") || re.error("unsupported lang: " + e),
                                e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return !1 === e.disabled
                            },
                            disabled: function(e) {
                                return !0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: de(function() {
                                return [0]
                            }),
                            last: de(function(e, t) {
                                return [t - 1]
                            }),
                            eq: de(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: de(function(e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e
                            }),
                            odd: de(function(e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e
                            }),
                            lt: de(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0; )
                                    e.push(i);
                                return e
                            }),
                            gt: de(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t; )
                                    e.push(i);
                                return e
                            })
                        }
                    },
                    i.pseudos.nth = i.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        i.pseudos[t] = ue(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        i.pseudos[t] = pe(t);
                    function fe() {}
                    function ge(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++)
                            i += e[t].value;
                        return i
                    }
                    function me(e, t, n) {
                        var i = t.dir
                          , r = n && "parentNode" === i
                          , o = C++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[i]; )
                                if (1 === t.nodeType || r)
                                    return e(t, n, o)
                        }
                        : function(t, n, a) {
                            var s, c, l, u = [k, o];
                            if (a) {
                                for (; t = t[i]; )
                                    if ((1 === t.nodeType || r) && e(t, n, a))
                                        return !0
                            } else
                                for (; t = t[i]; )
                                    if (1 === t.nodeType || r) {
                                        if ((s = (c = (l = t[x] || (t[x] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[i]) && s[0] === k && s[1] === o)
                                            return u[2] = s[2];
                                        if (c[i] = u,
                                        u[2] = e(t, n, a))
                                            return !0
                                    }
                        }
                    }
                    function ve(e) {
                        return e.length > 1 ? function(t, n, i) {
                            for (var r = e.length; r--; )
                                if (!e[r](t, n, i))
                                    return !1;
                            return !0
                        }
                        : e[0]
                    }
                    function ye(e, t, n, i, r) {
                        for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)
                            (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                            l && t.push(s)));
                        return a
                    }
                    function be(e, t, n, i, r, o) {
                        return i && !i[x] && (i = be(i)),
                        r && !r[x] && (r = be(r, o)),
                        ae(function(o, a, s, c) {
                            var l, u, p, d = [], h = [], f = a.length, g = o || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++)
                                    re(e, t[i], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : ye(g, d, e, s, c), v = n ? r || (o ? e : f || i) ? [] : a : m;
                            if (n && n(m, v, s, c),
                            i)
                                for (l = ye(v, h),
                                i(l, [], s, c),
                                u = l.length; u--; )
                                    (p = l[u]) && (v[h[u]] = !(m[h[u]] = p));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (l = [],
                                        u = v.length; u--; )
                                            (p = v[u]) && l.push(m[u] = p);
                                        r(null, v = [], l, c)
                                    }
                                    for (u = v.length; u--; )
                                        (p = v[u]) && (l = r ? M(o, p) : d[u]) > -1 && (o[l] = !(a[l] = p))
                                }
                            } else
                                v = ye(v === a ? v.splice(f, v.length) : v),
                                r ? r(null, a, v, c) : L.apply(a, v)
                        })
                    }
                    function xe(e) {
                        for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], c = a ? 1 : 0, u = me(function(e) {
                            return e === t
                        }, s, !0), p = me(function(e) {
                            return M(t, e) > -1
                        }, s, !0), d = [function(e, n, i) {
                            var r = !a && (i || n !== l) || ((t = n).nodeType ? u(e, n, i) : p(e, n, i));
                            return t = null,
                            r
                        }
                        ]; c < o; c++)
                            if (n = i.relative[e[c].type])
                                d = [me(ve(d), n)];
                            else {
                                if ((n = i.filter[e[c].type].apply(null, e[c].matches))[x]) {
                                    for (r = ++c; r < o && !i.relative[e[r].type]; r++)
                                        ;
                                    return be(c > 1 && ve(d), c > 1 && ge(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(B, "$1"), n, c < r && xe(e.slice(c, r)), r < o && xe(e = e.slice(r)), r < o && ge(e))
                                }
                                d.push(n)
                            }
                        return ve(d)
                    }
                    return fe.prototype = i.filters = i.pseudos,
                    i.setFilters = new fe,
                    a = re.tokenize = function(e, t) {
                        var n, r, o, a, s, c, l, u = S[e + " "];
                        if (u)
                            return t ? 0 : u.slice(0);
                        for (s = e,
                        c = [],
                        l = i.preFilter; s; ) {
                            for (a in n && !(r = U.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                            c.push(o = [])),
                            n = !1,
                            (r = z.exec(s)) && (n = r.shift(),
                            o.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }),
                            s = s.slice(n.length)),
                            i.filter)
                                !(r = V[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(),
                                o.push({
                                    value: n,
                                    type: a,
                                    matches: r
                                }),
                                s = s.slice(n.length));
                            if (!n)
                                break
                        }
                        return t ? s.length : s ? re.error(e) : S(e, c).slice(0)
                    }
                    ,
                    s = re.compile = function(e, t) {
                        var n, r = [], o = [], s = T[e + " "];
                        if (!s) {
                            for (t || (t = a(e)),
                            n = t.length; n--; )
                                (s = xe(t[n]))[x] ? r.push(s) : o.push(s);
                            s = T(e, function(e, t) {
                                var n = t.length > 0
                                  , r = e.length > 0
                                  , o = function(o, a, s, c, u) {
                                    var p, f, m, v = 0, y = "0", b = o && [], x = [], w = l, C = o || r && i.find.TAG("*", u), _ = k += null == w ? 1 : Math.random() || .1, S = C.length;
                                    for (u && (l = a === h || a || u); y !== S && null != (p = C[y]); y++) {
                                        if (r && p) {
                                            for (f = 0,
                                            a || p.ownerDocument === h || (d(p),
                                            s = !g); m = e[f++]; )
                                                if (m(p, a || h, s)) {
                                                    c.push(p);
                                                    break
                                                }
                                            u && (k = _)
                                        }
                                        n && ((p = !m && p) && v--,
                                        o && b.push(p))
                                    }
                                    if (v += y,
                                    n && y !== v) {
                                        for (f = 0; m = t[f++]; )
                                            m(b, x, a, s);
                                        if (o) {
                                            if (v > 0)
                                                for (; y--; )
                                                    b[y] || x[y] || (x[y] = j.call(c));
                                            x = ye(x)
                                        }
                                        L.apply(c, x),
                                        u && !o && x.length > 0 && v + t.length > 1 && re.uniqueSort(c)
                                    }
                                    return u && (k = _,
                                    l = w),
                                    b
                                };
                                return n ? ae(o) : o
                            }(o, r)),
                            s.selector = e
                        }
                        return s
                    }
                    ,
                    c = re.select = function(e, t, r, o) {
                        var c, l, u, p, d, h = "function" == typeof e && e, f = !o && a(e = h.selector || e);
                        if (r = r || [],
                        1 === f.length) {
                            if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && n.getById && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                                    return r;
                                h && (t = t.parentNode),
                                e = e.slice(l.shift().value.length)
                            }
                            for (c = V.needsContext.test(e) ? 0 : l.length; c-- && (u = l[c],
                            !i.relative[p = u.type]); )
                                if ((d = i.find[p]) && (o = d(u.matches[0].replace(te, ne), Z.test(l[0].type) && he(t.parentNode) || t))) {
                                    if (l.splice(c, 1),
                                    !(e = o.length && ge(l)))
                                        return L.apply(r, o),
                                        r;
                                    break
                                }
                        }
                        return (h || s(e, f))(o, t, !g, r, !t || Z.test(e) && he(t.parentNode) || t),
                        r
                    }
                    ,
                    n.sortStable = x.split("").sort(E).join("") === x,
                    n.detectDuplicates = !!p,
                    d(),
                    n.sortDetached = se(function(e) {
                        return 1 & e.compareDocumentPosition(h.createElement("div"))
                    }),
                    se(function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }) || ce("type|href|height|width", function(e, t, n) {
                        if (!n)
                            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }),
                    n.attributes && se(function(e) {
                        return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }) || ce("value", function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue
                    }),
                    se(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || ce(D, function(e, t, n) {
                        var i;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }),
                    re
                }(n);
                m.find = k,
                m.expr = k.selectors,
                m.expr[":"] = m.expr.pseudos,
                m.uniqueSort = m.unique = k.uniqueSort,
                m.text = k.getText,
                m.isXMLDoc = k.isXML,
                m.contains = k.contains;
                var C = function(e, t, n) {
                    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (r && m(e).is(n))
                                break;
                            i.push(e)
                        }
                    return i
                }
                  , _ = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                  , S = m.expr.match.needsContext
                  , T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                  , E = /^.[^:#\[\.,]*$/;
                function I(e, t, n) {
                    if (m.isFunction(t))
                        return m.grep(e, function(e, i) {
                            return !!t.call(e, i, e) !== n
                        });
                    if (t.nodeType)
                        return m.grep(e, function(e) {
                            return e === t !== n
                        });
                    if ("string" == typeof t) {
                        if (E.test(t))
                            return m.filter(t, e, n);
                        t = m.filter(t, e)
                    }
                    return m.grep(e, function(e) {
                        return m.inArray(e, t) > -1 !== n
                    })
                }
                m.filter = function(e, t, n) {
                    var i = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType ? m.find.matchesSelector(i, e) ? [i] : [] : m.find.matches(e, m.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                }
                ,
                m.fn.extend({
                    find: function(e) {
                        var t, n = [], i = this, r = i.length;
                        if ("string" != typeof e)
                            return this.pushStack(m(e).filter(function() {
                                for (t = 0; t < r; t++)
                                    if (m.contains(i[t], this))
                                        return !0
                            }));
                        for (t = 0; t < r; t++)
                            m.find(e, i[t], n);
                        return (n = this.pushStack(r > 1 ? m.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
                        n
                    },
                    filter: function(e) {
                        return this.pushStack(I(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(I(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!I(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
                    }
                });
                var N, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
                (m.fn.init = function(e, t, n) {
                    var i, r;
                    if (!e)
                        return this;
                    if (n = n || N,
                    "string" == typeof e) {
                        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : F.exec(e)) || !i[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (t = t instanceof m ? t[0] : t,
                            m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : a, !0)),
                            T.test(i[1]) && m.isPlainObject(t))
                                for (i in t)
                                    m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        }
                        if ((r = a.getElementById(i[2])) && r.parentNode) {
                            if (r.id !== i[2])
                                return N.find(e);
                            this.length = 1,
                            this[0] = r
                        }
                        return this.context = a,
                        this.selector = e,
                        this
                    }
                    return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector,
                    this.context = e.context),
                    m.makeArray(e, this))
                }
                ).prototype = m.fn,
                N = m(a);
                var j = /^(?:parents|prev(?:Until|All))/
                  , A = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function L(e, t) {
                    do {
                        e = e[t]
                    } while (e && 1 !== e.nodeType);
                    return e
                }
                m.fn.extend({
                    has: function(e) {
                        var t, n = m(e, this), i = n.length;
                        return this.filter(function() {
                            for (t = 0; t < i; t++)
                                if (m.contains(this, n[t]))
                                    return !0
                        })
                    },
                    closest: function(e, t) {
                        for (var n, i = 0, r = this.length, o = [], a = S.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                        return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? m.inArray(this[0], m(e)) : m.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                m.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return C(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return C(e, "parentNode", n)
                    },
                    next: function(e) {
                        return L(e, "nextSibling")
                    },
                    prev: function(e) {
                        return L(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return C(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return C(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return C(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return C(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return _((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return _(e.firstChild)
                    },
                    contents: function(e) {
                        return m.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : m.merge([], e.childNodes)
                    }
                }, function(e, t) {
                    m.fn[e] = function(n, i) {
                        var r = m.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n),
                        i && "string" == typeof i && (r = m.filter(i, r)),
                        this.length > 1 && (A[e] || (r = m.uniqueSort(r)),
                        j.test(e) && (r = r.reverse())),
                        this.pushStack(r)
                    }
                });
                var P, M, D = /\S+/g;
                function $() {
                    a.addEventListener ? (a.removeEventListener("DOMContentLoaded", R),
                    n.removeEventListener("load", R)) : (a.detachEvent("onreadystatechange", R),
                    n.detachEvent("onload", R))
                }
                function R() {
                    (a.addEventListener || "load" === n.event.type || "complete" === a.readyState) && ($(),
                    m.ready())
                }
                for (M in m.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return m.each(e.match(D) || [], function(e, n) {
                            t[n] = !0
                        }),
                        t
                    }(e) : m.extend({}, e);
                    var t, n, i, r, o = [], a = [], s = -1, c = function() {
                        for (r = e.once,
                        i = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length; )
                                !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        r && (o = n ? [] : "")
                    }, l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1,
                            a.push(n)),
                            function t(n) {
                                m.each(n, function(n, i) {
                                    m.isFunction(i) ? e.unique && l.has(i) || o.push(i) : i && i.length && "string" !== m.type(i) && t(i)
                                })
                            }(arguments),
                            n && !t && c()),
                            this
                        },
                        remove: function() {
                            return m.each(arguments, function(e, t) {
                                for (var n; (n = m.inArray(t, o, n)) > -1; )
                                    o.splice(n, 1),
                                    n <= s && s--
                            }),
                            this
                        },
                        has: function(e) {
                            return e ? m.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                            this
                        },
                        disable: function() {
                            return r = a = [],
                            o = n = "",
                            this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return r = !0,
                            n || l.disable(),
                            this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n],
                            a.push(n),
                            t || c()),
                            this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                    return l
                }
                ,
                m.extend({
                    Deferred: function(e) {
                        var t = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
                          , n = "pending"
                          , i = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments),
                                this
                            },
                            then: function() {
                                var e = arguments;
                                return m.Deferred(function(n) {
                                    m.each(t, function(t, o) {
                                        var a = m.isFunction(e[t]) && e[t];
                                        r[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && m.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }),
                                    e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? m.extend(e, i) : i
                            }
                        }
                          , r = {};
                        return i.pipe = i.then,
                        m.each(t, function(e, o) {
                            var a = o[2]
                              , s = o[3];
                            i[o[1]] = a.add,
                            s && a.add(function() {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                            r[o[0]] = function() {
                                return r[o[0] + "With"](this === r ? i : this, arguments),
                                this
                            }
                            ,
                            r[o[0] + "With"] = a.fireWith
                        }),
                        i.promise(r),
                        e && e.call(r, r),
                        r
                    },
                    when: function(e) {
                        var t, n, i, r = 0, o = s.call(arguments), a = o.length, c = 1 !== a || e && m.isFunction(e.promise) ? a : 0, l = 1 === c ? e : m.Deferred(), u = function(e, n, i) {
                            return function(r) {
                                n[e] = this,
                                i[e] = arguments.length > 1 ? s.call(arguments) : r,
                                i === t ? l.notifyWith(n, i) : --c || l.resolveWith(n, i)
                            }
                        };
                        if (a > 1)
                            for (t = new Array(a),
                            n = new Array(a),
                            i = new Array(a); r < a; r++)
                                o[r] && m.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --c;
                        return c || l.resolveWith(i, o),
                        l.promise()
                    }
                }),
                m.fn.ready = function(e) {
                    return m.ready.promise().done(e),
                    this
                }
                ,
                m.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? m.readyWait++ : m.ready(!0)
                    },
                    ready: function(e) {
                        (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0,
                        !0 !== e && --m.readyWait > 0 || (P.resolveWith(a, [m]),
                        m.fn.triggerHandler && (m(a).triggerHandler("ready"),
                        m(a).off("ready"))))
                    }
                }),
                m.ready.promise = function(e) {
                    if (!P)
                        if (P = m.Deferred(),
                        "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll)
                            n.setTimeout(m.ready);
                        else if (a.addEventListener)
                            a.addEventListener("DOMContentLoaded", R),
                            n.addEventListener("load", R);
                        else {
                            a.attachEvent("onreadystatechange", R),
                            n.attachEvent("onload", R);
                            var t = !1;
                            try {
                                t = null == n.frameElement && a.documentElement
                            } catch (e) {}
                            t && t.doScroll && function e() {
                                if (!m.isReady) {
                                    try {
                                        t.doScroll("left")
                                    } catch (t) {
                                        return n.setTimeout(e, 50)
                                    }
                                    $(),
                                    m.ready()
                                }
                            }()
                        }
                    return P.promise(e)
                }
                ,
                m.ready.promise(),
                m(f))
                    break;
                f.ownFirst = "0" === M,
                f.inlineBlockNeedsLayout = !1,
                m(function() {
                    var e, t, n, i;
                    (n = a.getElementsByTagName("body")[0]) && n.style && (t = a.createElement("div"),
                    (i = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(t),
                    void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    f.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
                    e && (n.style.zoom = 1)),
                    n.removeChild(i))
                }),
                function() {
                    var e = a.createElement("div");
                    f.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        f.deleteExpando = !1
                    }
                    e = null
                }();
                var q, O = function(e) {
                    var t = m.noData[(e.nodeName + " ").toLowerCase()]
                      , n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
                }, H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, B = /([A-Z])/g;
                function U(e, t, n) {
                    if (void 0 === n && 1 === e.nodeType) {
                        var i = "data-" + t.replace(B, "-$1").toLowerCase();
                        if ("string" == typeof (n = e.getAttribute(i))) {
                            try {
                                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : H.test(n) ? m.parseJSON(n) : n)
                            } catch (e) {}
                            m.data(e, t, n)
                        } else
                            n = void 0
                    }
                    return n
                }
                function z(e) {
                    var t;
                    for (t in e)
                        if (("data" !== t || !m.isEmptyObject(e[t])) && "toJSON" !== t)
                            return !1;
                    return !0
                }
                function W(e, t, n, i) {
                    if (O(e)) {
                        var r, a, s = m.expando, c = e.nodeType, l = c ? m.cache : e, u = c ? e[s] : e[s] && s;
                        if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)
                            return u || (u = c ? e[s] = o.pop() || m.guid++ : s),
                            l[u] || (l[u] = c ? {} : {
                                toJSON: m.noop
                            }),
                            "object" != typeof t && "function" != typeof t || (i ? l[u] = m.extend(l[u], t) : l[u].data = m.extend(l[u].data, t)),
                            a = l[u],
                            i || (a.data || (a.data = {}),
                            a = a.data),
                            void 0 !== n && (a[m.camelCase(t)] = n),
                            "string" == typeof t ? null == (r = a[t]) && (r = a[m.camelCase(t)]) : r = a,
                            r
                    }
                }
                function J(e, t, n) {
                    if (O(e)) {
                        var i, r, o = e.nodeType, a = o ? m.cache : e, s = o ? e[m.expando] : m.expando;
                        if (a[s]) {
                            if (t && (i = n ? a[s] : a[s].data)) {
                                r = (t = m.isArray(t) ? t.concat(m.map(t, m.camelCase)) : t in i || (t = m.camelCase(t))in i ? [t] : t.split(" ")).length;
                                for (; r--; )
                                    delete i[t[r]];
                                if (n ? !z(i) : !m.isEmptyObject(i))
                                    return
                            }
                            (n || (delete a[s].data,
                            z(a[s]))) && (o ? m.cleanData([e], !0) : f.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                        }
                    }
                }
                m.extend({
                    cache: {},
                    noData: {
                        "applet ": !0,
                        "embed ": !0,
                        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    },
                    hasData: function(e) {
                        return !!(e = e.nodeType ? m.cache[e[m.expando]] : e[m.expando]) && !z(e)
                    },
                    data: function(e, t, n) {
                        return W(e, t, n)
                    },
                    removeData: function(e, t) {
                        return J(e, t)
                    },
                    _data: function(e, t, n) {
                        return W(e, t, n, !0)
                    },
                    _removeData: function(e, t) {
                        return J(e, t, !0)
                    }
                }),
                m.fn.extend({
                    data: function(e, t) {
                        var n, i, r, o = this[0], a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (r = m.data(o),
                            1 === o.nodeType && !m._data(o, "parsedAttrs"))) {
                                for (n = a.length; n--; )
                                    a[n] && 0 === (i = a[n].name).indexOf("data-") && U(o, i = m.camelCase(i.slice(5)), r[i]);
                                m._data(o, "parsedAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof e ? this.each(function() {
                            m.data(this, e)
                        }) : arguments.length > 1 ? this.each(function() {
                            m.data(this, e, t)
                        }) : o ? U(o, e, m.data(o, e)) : void 0
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            m.removeData(this, e)
                        })
                    }
                }),
                m.extend({
                    queue: function(e, t, n) {
                        var i;
                        if (e)
                            return t = (t || "fx") + "queue",
                            i = m._data(e, t),
                            n && (!i || m.isArray(n) ? i = m._data(e, t, m.makeArray(n)) : i.push(n)),
                            i || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = m.queue(e, t)
                          , i = n.length
                          , r = n.shift()
                          , o = m._queueHooks(e, t);
                        "inprogress" === r && (r = n.shift(),
                        i--),
                        r && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(e, function() {
                            m.dequeue(e, t)
                        }, o)),
                        !i && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return m._data(e, n) || m._data(e, n, {
                            empty: m.Callbacks("once memory").add(function() {
                                m._removeData(e, t + "queue"),
                                m._removeData(e, n)
                            })
                        })
                    }
                }),
                m.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                            var n = m.queue(this, e, t);
                            m._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            m.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, i = 1, r = m.Deferred(), o = this, a = this.length, s = function() {
                            --i || r.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; a--; )
                            (n = m._data(o[a], e + "queueHooks")) && n.empty && (i++,
                            n.empty.add(s));
                        return s(),
                        r.promise(t)
                    }
                }),
                f.shrinkWrapBlocks = function() {
                    return null != q ? q : (q = !1,
                    (t = a.getElementsByTagName("body")[0]) && t.style ? (e = a.createElement("div"),
                    (n = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    t.appendChild(n).appendChild(e),
                    void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    e.appendChild(a.createElement("div")).style.width = "5px",
                    q = 3 !== e.offsetWidth),
                    t.removeChild(n),
                    q) : void 0);
                    var e, t, n
                }
                ;
                var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , V = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$","i")
                  , Y = ["Top", "Right", "Bottom", "Left"]
                  , Q = function(e, t) {
                    return e = t || e,
                    "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e)
                };
                function G(e, t, n, i) {
                    var r, o = 1, a = 20, s = i ? function() {
                        return i.cur()
                    }
                    : function() {
                        return m.css(e, t, "")
                    }
                    , c = s(), l = n && n[3] || (m.cssNumber[t] ? "" : "px"), u = (m.cssNumber[t] || "px" !== l && +c) && V.exec(m.css(e, t));
                    if (u && u[3] !== l) {
                        l = l || u[3],
                        n = n || [],
                        u = +c || 1;
                        do {
                            u /= o = o || ".5",
                            m.style(e, t, u + l)
                        } while (o !== (o = s() / c) && 1 !== o && --a)
                    }
                    return n && (u = +u || +c || 0,
                    r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = l,
                    i.start = u,
                    i.end = r)),
                    r
                }
                var K, Z, ee, te = function(e, t, n, i, r, o, a) {
                    var s = 0
                      , c = e.length
                      , l = null == n;
                    if ("object" === m.type(n))
                        for (s in r = !0,
                        n)
                            te(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== i && (r = !0,
                    m.isFunction(i) || (a = !0),
                    l && (a ? (t.call(e, i),
                    t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(m(e), n)
                    }
                    )),
                    t))
                        for (; s < c; s++)
                            t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                    return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
                }, ne = /^(?:checkbox|radio)$/i, ie = /<([\w:-]+)/, re = /^$|\/(?:java|ecma)script/i, oe = /^\s+/, ae = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
                function se(e) {
                    var t = ae.split("|")
                      , n = e.createDocumentFragment();
                    if (n.createElement)
                        for (; t.length; )
                            n.createElement(t.pop());
                    return n
                }
                K = a.createElement("div"),
                Z = a.createDocumentFragment(),
                ee = a.createElement("input"),
                K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                f.leadingWhitespace = 3 === K.firstChild.nodeType,
                f.tbody = !K.getElementsByTagName("tbody").length,
                f.htmlSerialize = !!K.getElementsByTagName("link").length,
                f.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
                ee.type = "checkbox",
                ee.checked = !0,
                Z.appendChild(ee),
                f.appendChecked = ee.checked,
                K.innerHTML = "<textarea>x</textarea>",
                f.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue,
                Z.appendChild(K),
                (ee = a.createElement("input")).setAttribute("type", "radio"),
                ee.setAttribute("checked", "checked"),
                ee.setAttribute("name", "t"),
                K.appendChild(ee),
                f.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked,
                f.noCloneEvent = !!K.addEventListener,
                K[m.expando] = 1,
                f.attributes = !K.getAttribute(m.expando);
                var ce = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                };
                function le(e, t) {
                    var n, i, r = 0, o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                    if (!o)
                        for (o = [],
                        n = e.childNodes || e; null != (i = n[r]); r++)
                            !t || m.nodeName(i, t) ? o.push(i) : m.merge(o, le(i, t));
                    return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], o) : o
                }
                function ue(e, t) {
                    for (var n, i = 0; null != (n = e[i]); i++)
                        m._data(n, "globalEval", !t || m._data(t[i], "globalEval"))
                }
                ce.optgroup = ce.option,
                ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead,
                ce.th = ce.td;
                var pe = /<|&#?\w+;/
                  , de = /<tbody/i;
                function he(e) {
                    ne.test(e.type) && (e.defaultChecked = e.checked)
                }
                function fe(e, t, n, i, r) {
                    for (var o, a, s, c, l, u, p, d = e.length, h = se(t), g = [], v = 0; v < d; v++)
                        if ((a = e[v]) || 0 === a)
                            if ("object" === m.type(a))
                                m.merge(g, a.nodeType ? [a] : a);
                            else if (pe.test(a)) {
                                for (c = c || h.appendChild(t.createElement("div")),
                                l = (ie.exec(a) || ["", ""])[1].toLowerCase(),
                                p = ce[l] || ce._default,
                                c.innerHTML = p[1] + m.htmlPrefilter(a) + p[2],
                                o = p[0]; o--; )
                                    c = c.lastChild;
                                if (!f.leadingWhitespace && oe.test(a) && g.push(t.createTextNode(oe.exec(a)[0])),
                                !f.tbody)
                                    for (o = (a = "table" !== l || de.test(a) ? "<table>" !== p[1] || de.test(a) ? 0 : c : c.firstChild) && a.childNodes.length; o--; )
                                        m.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                                for (m.merge(g, c.childNodes),
                                c.textContent = ""; c.firstChild; )
                                    c.removeChild(c.firstChild);
                                c = h.lastChild
                            } else
                                g.push(t.createTextNode(a));
                    for (c && h.removeChild(c),
                    f.appendChecked || m.grep(le(g, "input"), he),
                    v = 0; a = g[v++]; )
                        if (i && m.inArray(a, i) > -1)
                            r && r.push(a);
                        else if (s = m.contains(a.ownerDocument, a),
                        c = le(h.appendChild(a), "script"),
                        s && ue(c),
                        n)
                            for (o = 0; a = c[o++]; )
                                re.test(a.type || "") && n.push(a);
                    return c = null,
                    h
                }
                !function() {
                    var e, t, i = a.createElement("div");
                    for (e in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    })
                        t = "on" + e,
                        (f[e] = t in n) || (i.setAttribute(t, "t"),
                        f[e] = !1 === i.attributes[t].expando);
                    i = null
                }();
                var ge = /^(?:input|select|textarea)$/i
                  , me = /^key/
                  , ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                  , ye = /^(?:focusinfocus|focusoutblur)$/
                  , be = /^([^.]*)(?:\.(.+)|)/;
                function xe() {
                    return !0
                }
                function we() {
                    return !1
                }
                function ke() {
                    try {
                        return a.activeElement
                    } catch (e) {}
                }
                function Ce(e, t, n, i, r, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (i = i || n,
                        n = void 0),
                        t)
                            Ce(e, s, n, i, t[s], o);
                        return e
                    }
                    if (null == i && null == r ? (r = n,
                    i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                    i = void 0) : (r = i,
                    i = n,
                    n = void 0)),
                    !1 === r)
                        r = we;
                    else if (!r)
                        return e;
                    return 1 === o && (a = r,
                    r = function(e) {
                        return m().off(e),
                        a.apply(this, arguments)
                    }
                    ,
                    r.guid = a.guid || (a.guid = m.guid++)),
                    e.each(function() {
                        m.event.add(this, t, r, i, n)
                    })
                }
                m.event = {
                    global: {},
                    add: function(e, t, n, i, r) {
                        var o, a, s, c, l, u, p, d, h, f, g, v = m._data(e);
                        if (v) {
                            for (n.handler && (n = (c = n).handler,
                            r = c.selector),
                            n.guid || (n.guid = m.guid++),
                            (a = v.events) || (a = v.events = {}),
                            (u = v.handle) || (u = v.handle = function(e) {
                                return void 0 === m || e && m.event.triggered === e.type ? void 0 : m.event.dispatch.apply(u.elem, arguments)
                            }
                            ,
                            u.elem = e),
                            s = (t = (t || "").match(D) || [""]).length; s--; )
                                h = g = (o = be.exec(t[s]) || [])[1],
                                f = (o[2] || "").split(".").sort(),
                                h && (l = m.event.special[h] || {},
                                h = (r ? l.delegateType : l.bindType) || h,
                                l = m.event.special[h] || {},
                                p = m.extend({
                                    type: h,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext: r && m.expr.match.needsContext.test(r),
                                    namespace: f.join(".")
                                }, c),
                                (d = a[h]) || ((d = a[h] = []).delegateCount = 0,
                                l.setup && !1 !== l.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))),
                                l.add && (l.add.call(e, p),
                                p.handler.guid || (p.handler.guid = n.guid)),
                                r ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                                m.event.global[h] = !0);
                            e = null
                        }
                    },
                    remove: function(e, t, n, i, r) {
                        var o, a, s, c, l, u, p, d, h, f, g, v = m.hasData(e) && m._data(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(D) || [""]).length; l--; )
                                if (h = g = (s = be.exec(t[l]) || [])[1],
                                f = (s[2] || "").split(".").sort(),
                                h) {
                                    for (p = m.event.special[h] || {},
                                    d = u[h = (i ? p.delegateType : p.bindType) || h] || [],
                                    s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    c = o = d.length; o--; )
                                        a = d[o],
                                        !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1),
                                        a.selector && d.delegateCount--,
                                        p.remove && p.remove.call(e, a));
                                    c && !d.length && (p.teardown && !1 !== p.teardown.call(e, f, v.handle) || m.removeEvent(e, h, v.handle),
                                    delete u[h])
                                } else
                                    for (h in u)
                                        m.event.remove(e, h + t[l], n, i, !0);
                            m.isEmptyObject(u) && (delete v.handle,
                            m._removeData(e, "events"))
                        }
                    },
                    trigger: function(e, t, i, r) {
                        var o, s, c, l, u, p, d, f = [i || a], g = h.call(e, "type") ? e.type : e, v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (c = p = i = i || a,
                        3 !== i.nodeType && 8 !== i.nodeType && !ye.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                        g = v.shift(),
                        v.sort()),
                        s = g.indexOf(":") < 0 && "on" + g,
                        (e = e[m.expando] ? e : new m.Event(g,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                        e.namespace = v.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = i),
                        t = null == t ? [e] : m.makeArray(t, [e]),
                        u = m.event.special[g] || {},
                        r || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                            if (!r && !u.noBubble && !m.isWindow(i)) {
                                for (l = u.delegateType || g,
                                ye.test(l + g) || (c = c.parentNode); c; c = c.parentNode)
                                    f.push(c),
                                    p = c;
                                p === (i.ownerDocument || a) && f.push(p.defaultView || p.parentWindow || n)
                            }
                            for (d = 0; (c = f[d++]) && !e.isPropagationStopped(); )
                                e.type = d > 1 ? l : u.bindType || g,
                                (o = (m._data(c, "events") || {})[e.type] && m._data(c, "handle")) && o.apply(c, t),
                                (o = s && c[s]) && o.apply && O(c) && (e.result = o.apply(c, t),
                                !1 === e.result && e.preventDefault());
                            if (e.type = g,
                            !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && O(i) && s && i[g] && !m.isWindow(i)) {
                                (p = i[s]) && (i[s] = null),
                                m.event.triggered = g;
                                try {
                                    i[g]()
                                } catch (e) {}
                                m.event.triggered = void 0,
                                p && (i[s] = p)
                            }
                            return e.result
                        }
                    },
                    dispatch: function(e) {
                        e = m.event.fix(e);
                        var t, n, i, r, o, a, c = s.call(arguments), l = (m._data(this, "events") || {})[e.type] || [], u = m.event.special[e.type] || {};
                        if (c[0] = e,
                        e.delegateTarget = this,
                        !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                            for (a = m.event.handlers.call(this, e, l),
                            t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                                for (e.currentTarget = r.elem,
                                n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                    e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                    e.data = o.data,
                                    void 0 !== (i = ((m.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (e.result = i) && (e.preventDefault(),
                                    e.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, i, r, o, a = [], s = t.delegateCount, c = e.target;
                        if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                            for (; c != this; c = c.parentNode || this)
                                if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                                    for (i = [],
                                    n = 0; n < s; n++)
                                        void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? m(r, this).index(c) > -1 : m.find(r, this, null, [c]).length),
                                        i[r] && i.push(o);
                                    i.length && a.push({
                                        elem: c,
                                        handlers: i
                                    })
                                }
                        return s < t.length && a.push({
                            elem: this,
                            handlers: t.slice(s)
                        }),
                        a
                    },
                    fix: function(e) {
                        if (e[m.expando])
                            return e;
                        var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
                        for (s || (this.fixHooks[r] = s = ve.test(r) ? this.mouseHooks : me.test(r) ? this.keyHooks : {}),
                        i = s.props ? this.props.concat(s.props) : this.props,
                        e = new m.Event(o),
                        t = i.length; t--; )
                            e[n = i[t]] = o[n];
                        return e.target || (e.target = o.srcElement || a),
                        3 === e.target.nodeType && (e.target = e.target.parentNode),
                        e.metaKey = !!e.metaKey,
                        s.filter ? s.filter(e, o) : e
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(e, t) {
                            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                            e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, t) {
                            var n, i, r, o = t.button, s = t.fromElement;
                            return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || a).documentElement,
                            n = i.body,
                            e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                            e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                            !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
                            e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                            e
                        }
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            trigger: function() {
                                if (this !== ke() && this.focus)
                                    try {
                                        return this.focus(),
                                        !1
                                    } catch (e) {}
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function() {
                                if (this === ke() && this.blur)
                                    return this.blur(),
                                    !1
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function() {
                                if (m.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                    return this.click(),
                                    !1
                            },
                            _default: function(e) {
                                return m.nodeName(e.target, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    },
                    simulate: function(e, t, n) {
                        var i = m.extend(new m.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        m.event.trigger(i, null, t),
                        i.isDefaultPrevented() && n.preventDefault()
                    }
                },
                m.removeEvent = a.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                : function(e, t, n) {
                    var i = "on" + t;
                    e.detachEvent && (void 0 === e[i] && (e[i] = null),
                    e.detachEvent(i, n))
                }
                ,
                m.Event = function(e, t) {
                    if (!(this instanceof m.Event))
                        return new m.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we) : this.type = e,
                    t && m.extend(this, t),
                    this.timeStamp = e && e.timeStamp || m.now(),
                    this[m.expando] = !0
                }
                ,
                m.Event.prototype = {
                    constructor: m.Event,
                    isDefaultPrevented: we,
                    isPropagationStopped: we,
                    isImmediatePropagationStopped: we,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = xe,
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = xe,
                        e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                        e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = xe,
                        e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                m.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    m.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, i = e.relatedTarget, r = e.handleObj;
                            return i && (i === this || m.contains(this, i)) || (e.type = r.origType,
                            n = r.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }),
                f.submit || (m.event.special.submit = {
                    setup: function() {
                        if (m.nodeName(this, "form"))
                            return !1;
                        m.event.add(this, "click._submit keypress._submit", function(e) {
                            var t = e.target
                              , n = m.nodeName(t, "input") || m.nodeName(t, "button") ? m.prop(t, "form") : void 0;
                            n && !m._data(n, "submit") && (m.event.add(n, "submit._submit", function(e) {
                                e._submitBubble = !0
                            }),
                            m._data(n, "submit", !0))
                        })
                    },
                    postDispatch: function(e) {
                        e._submitBubble && (delete e._submitBubble,
                        this.parentNode && !e.isTrigger && m.event.simulate("submit", this.parentNode, e))
                    },
                    teardown: function() {
                        if (m.nodeName(this, "form"))
                            return !1;
                        m.event.remove(this, "._submit")
                    }
                }),
                f.change || (m.event.special.change = {
                    setup: function() {
                        if (ge.test(this.nodeName))
                            return "checkbox" !== this.type && "radio" !== this.type || (m.event.add(this, "propertychange._change", function(e) {
                                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                            }),
                            m.event.add(this, "click._change", function(e) {
                                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                                m.event.simulate("change", this, e)
                            })),
                            !1;
                        m.event.add(this, "beforeactivate._change", function(e) {
                            var t = e.target;
                            ge.test(t.nodeName) && !m._data(t, "change") && (m.event.add(t, "change._change", function(e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || m.event.simulate("change", this.parentNode, e)
                            }),
                            m._data(t, "change", !0))
                        })
                    },
                    handle: function(e) {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                            return e.handleObj.handler.apply(this, arguments)
                    },
                    teardown: function() {
                        return m.event.remove(this, "._change"),
                        !ge.test(this.nodeName)
                    }
                }),
                f.focusin || m.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = function(e) {
                        m.event.simulate(t, e.target, m.event.fix(e))
                    };
                    m.event.special[t] = {
                        setup: function() {
                            var i = this.ownerDocument || this
                              , r = m._data(i, t);
                            r || i.addEventListener(e, n, !0),
                            m._data(i, t, (r || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this
                              , r = m._data(i, t) - 1;
                            r ? m._data(i, t, r) : (i.removeEventListener(e, n, !0),
                            m._removeData(i, t))
                        }
                    }
                }),
                m.fn.extend({
                    on: function(e, t, n, i) {
                        return Ce(this, e, t, n, i)
                    },
                    one: function(e, t, n, i) {
                        return Ce(this, e, t, n, i, 1)
                    },
                    off: function(e, t, n) {
                        var i, r;
                        if (e && e.preventDefault && e.handleObj)
                            return i = e.handleObj,
                            m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                        if ("object" == typeof e) {
                            for (r in e)
                                this.off(r, t, e[r]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = we),
                        this.each(function() {
                            m.event.remove(this, e, n, t)
                        })
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            m.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return m.event.trigger(e, t, n, !0)
                    }
                });
                var _e = / jQuery\d+="(?:null|\d+)"/g
                  , Se = new RegExp("<(?:" + ae + ")[\\s/>]","i")
                  , Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                  , Ee = /<script|<style|<link/i
                  , Ie = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Ne = /^true\/(.*)/
                  , Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
                  , je = se(a).appendChild(a.createElement("div"));
                function Ae(e, t) {
                    return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                }
                function Le(e) {
                    return e.type = (null !== m.find.attr(e, "type")) + "/" + e.type,
                    e
                }
                function Pe(e) {
                    var t = Ne.exec(e.type);
                    return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
                }
                function Me(e, t) {
                    if (1 === t.nodeType && m.hasData(e)) {
                        var n, i, r, o = m._data(e), a = m._data(t, o), s = o.events;
                        if (s)
                            for (n in delete a.handle,
                            a.events = {},
                            s)
                                for (i = 0,
                                r = s[n].length; i < r; i++)
                                    m.event.add(t, n, s[n][i]);
                        a.data && (a.data = m.extend({}, a.data))
                    }
                }
                function De(e, t) {
                    var n, i, r;
                    if (1 === t.nodeType) {
                        if (n = t.nodeName.toLowerCase(),
                        !f.noCloneEvent && t[m.expando]) {
                            for (i in (r = m._data(t)).events)
                                m.removeEvent(t, i, r.handle);
                            t.removeAttribute(m.expando)
                        }
                        "script" === n && t.text !== e.text ? (Le(t).text = e.text,
                        Pe(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                        f.html5Clone && e.innerHTML && !m.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                        t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }
                }
                function $e(e, t, n, i) {
                    t = c.apply([], t);
                    var r, o, a, s, l, u, p = 0, d = e.length, h = d - 1, g = t[0], v = m.isFunction(g);
                    if (v || d > 1 && "string" == typeof g && !f.checkClone && Ie.test(g))
                        return e.each(function(r) {
                            var o = e.eq(r);
                            v && (t[0] = g.call(this, r, o.html())),
                            $e(o, t, n, i)
                        });
                    if (d && (r = (u = fe(t, e[0].ownerDocument, !1, e, i)).firstChild,
                    1 === u.childNodes.length && (u = r),
                    r || i)) {
                        for (a = (s = m.map(le(u, "script"), Le)).length; p < d; p++)
                            o = u,
                            p !== h && (o = m.clone(o, !0, !0),
                            a && m.merge(s, le(o, "script"))),
                            n.call(e[p], o, p);
                        if (a)
                            for (l = s[s.length - 1].ownerDocument,
                            m.map(s, Pe),
                            p = 0; p < a; p++)
                                o = s[p],
                                re.test(o.type || "") && !m._data(o, "globalEval") && m.contains(l, o) && (o.src ? m._evalUrl && m._evalUrl(o.src) : m.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Fe, "")));
                        u = r = null
                    }
                    return e
                }
                function Re(e, t, n) {
                    for (var i, r = t ? m.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                        n || 1 !== i.nodeType || m.cleanData(le(i)),
                        i.parentNode && (n && m.contains(i.ownerDocument, i) && ue(le(i, "script")),
                        i.parentNode.removeChild(i));
                    return e
                }
                m.extend({
                    htmlPrefilter: function(e) {
                        return e.replace(Te, "<$1></$2>")
                    },
                    clone: function(e, t, n) {
                        var i, r, o, a, s, c = m.contains(e.ownerDocument, e);
                        if (f.html5Clone || m.isXMLDoc(e) || !Se.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (je.innerHTML = e.outerHTML,
                        je.removeChild(o = je.firstChild)),
                        !(f.noCloneEvent && f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                            for (i = le(o),
                            s = le(e),
                            a = 0; null != (r = s[a]); ++a)
                                i[a] && De(r, i[a]);
                        if (t)
                            if (n)
                                for (s = s || le(e),
                                i = i || le(o),
                                a = 0; null != (r = s[a]); a++)
                                    Me(r, i[a]);
                            else
                                Me(e, o);
                        return (i = le(o, "script")).length > 0 && ue(i, !c && le(e, "script")),
                        i = s = r = null,
                        o
                    },
                    cleanData: function(e, t) {
                        for (var n, i, r, a, s = 0, c = m.expando, l = m.cache, u = f.attributes, p = m.event.special; null != (n = e[s]); s++)
                            if ((t || O(n)) && (a = (r = n[c]) && l[r])) {
                                if (a.events)
                                    for (i in a.events)
                                        p[i] ? m.event.remove(n, i) : m.removeEvent(n, i, a.handle);
                                l[r] && (delete l[r],
                                u || void 0 === n.removeAttribute ? n[c] = void 0 : n.removeAttribute(c),
                                o.push(r))
                            }
                    }
                }),
                m.fn.extend({
                    domManip: $e,
                    detach: function(e) {
                        return Re(this, e, !0)
                    },
                    remove: function(e) {
                        return Re(this, e)
                    },
                    text: function(e) {
                        return te(this, function(e) {
                            return void 0 === e ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return $e(this, arguments, function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
                        })
                    },
                    prepend: function() {
                        return $e(this, arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ae(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return $e(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return $e(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) {
                            for (1 === e.nodeType && m.cleanData(le(e, !1)); e.firstChild; )
                                e.removeChild(e.firstChild);
                            e.options && m.nodeName(e, "select") && (e.options.length = 0)
                        }
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map(function() {
                            return m.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return te(this, function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , i = this.length;
                            if (void 0 === e)
                                return 1 === t.nodeType ? t.innerHTML.replace(_e, "") : void 0;
                            if ("string" == typeof e && !Ee.test(e) && (f.htmlSerialize || !Se.test(e)) && (f.leadingWhitespace || !oe.test(e)) && !ce[(ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = m.htmlPrefilter(e);
                                try {
                                    for (; n < i; n++)
                                        1 === (t = this[n] || {}).nodeType && (m.cleanData(le(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return $e(this, arguments, function(t) {
                            var n = this.parentNode;
                            m.inArray(this, e) < 0 && (m.cleanData(le(this)),
                            n && n.replaceChild(t, this))
                        }, e)
                    }
                }),
                m.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    m.fn[e] = function(e) {
                        for (var n, i = 0, r = [], o = m(e), a = o.length - 1; i <= a; i++)
                            n = i === a ? this : this.clone(!0),
                            m(o[i])[t](n),
                            l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
                var qe, Oe = {
                    HTML: "block",
                    BODY: "block"
                };
                function He(e, t) {
                    var n = m(t.createElement(e)).appendTo(t.body)
                      , i = m.css(n[0], "display");
                    return n.detach(),
                    i
                }
                function Be(e) {
                    var t = a
                      , n = Oe[e];
                    return n || ("none" !== (n = He(e, t)) && n || ((t = ((qe = (qe || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || qe[0].contentDocument).document).write(),
                    t.close(),
                    n = He(e, t),
                    qe.detach()),
                    Oe[e] = n),
                    n
                }
                var Ue = /^margin/
                  , ze = new RegExp("^(" + X + ")(?!px)[a-z%]+$","i")
                  , We = function(e, t, n, i) {
                    var r, o, a = {};
                    for (o in t)
                        a[o] = e.style[o],
                        e.style[o] = t[o];
                    for (o in r = n.apply(e, i || []),
                    t)
                        e.style[o] = a[o];
                    return r
                }
                  , Je = a.documentElement;
                !function() {
                    var e, t, i, r, o, s, c = a.createElement("div"), l = a.createElement("div");
                    function u() {
                        var u, p, d = a.documentElement;
                        d.appendChild(c),
                        l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        e = i = s = !1,
                        t = o = !0,
                        n.getComputedStyle && (p = n.getComputedStyle(l),
                        e = "1%" !== (p || {}).top,
                        s = "2px" === (p || {}).marginLeft,
                        i = "4px" === (p || {
                            width: "4px"
                        }).width,
                        l.style.marginRight = "50%",
                        t = "4px" === (p || {
                            marginRight: "4px"
                        }).marginRight,
                        (u = l.appendChild(a.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        u.style.marginRight = u.style.width = "0",
                        l.style.width = "1px",
                        o = !parseFloat((n.getComputedStyle(u) || {}).marginRight),
                        l.removeChild(u)),
                        l.style.display = "none",
                        (r = 0 === l.getClientRects().length) && (l.style.display = "",
                        l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        l.childNodes[0].style.borderCollapse = "separate",
                        (u = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        (r = 0 === u[0].offsetHeight) && (u[0].style.display = "",
                        u[1].style.display = "none",
                        r = 0 === u[0].offsetHeight)),
                        d.removeChild(c)
                    }
                    l.style && (l.style.cssText = "float:left;opacity:.5",
                    f.opacity = "0.5" === l.style.opacity,
                    f.cssFloat = !!l.style.cssFloat,
                    l.style.backgroundClip = "content-box",
                    l.cloneNode(!0).style.backgroundClip = "",
                    f.clearCloneStyle = "content-box" === l.style.backgroundClip,
                    (c = a.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                    l.innerHTML = "",
                    c.appendChild(l),
                    f.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
                    m.extend(f, {
                        reliableHiddenOffsets: function() {
                            return null == e && u(),
                            r
                        },
                        boxSizingReliable: function() {
                            return null == e && u(),
                            i
                        },
                        pixelMarginRight: function() {
                            return null == e && u(),
                            t
                        },
                        pixelPosition: function() {
                            return null == e && u(),
                            e
                        },
                        reliableMarginRight: function() {
                            return null == e && u(),
                            o
                        },
                        reliableMarginLeft: function() {
                            return null == e && u(),
                            s
                        }
                    }))
                }();
                var Xe, Ve, Ye = /^(top|right|bottom|left)$/;
                function Qe(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                n.getComputedStyle ? (Xe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n),
                    t.getComputedStyle(e)
                }
                ,
                Ve = function(e, t, n) {
                    var i, r, o, a, s = e.style;
                    return "" !== (a = (n = n || Xe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)),
                    n && !f.pixelMarginRight() && ze.test(a) && Ue.test(t) && (i = s.width,
                    r = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = i,
                    s.minWidth = r,
                    s.maxWidth = o),
                    void 0 === a ? a : a + ""
                }
                ) : Je.currentStyle && (Xe = function(e) {
                    return e.currentStyle
                }
                ,
                Ve = function(e, t, n) {
                    var i, r, o, a, s = e.style;
                    return null == (a = (n = n || Xe(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
                    ze.test(a) && !Ye.test(t) && (i = s.left,
                    (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left),
                    s.left = "fontSize" === t ? "1em" : a,
                    a = s.pixelLeft + "px",
                    s.left = i,
                    o && (r.left = o)),
                    void 0 === a ? a : a + "" || "auto"
                }
                );
                var Ge = /alpha\([^)]*\)/i
                  , Ke = /opacity\s*=\s*([^)]*)/i
                  , Ze = /^(none|table(?!-c[ea]).+)/
                  , et = new RegExp("^(" + X + ")(.*)$","i")
                  , tt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , nt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                }
                  , it = ["Webkit", "O", "Moz", "ms"]
                  , rt = a.createElement("div").style;
                function ot(e) {
                    if (e in rt)
                        return e;
                    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = it.length; n--; )
                        if ((e = it[n] + t)in rt)
                            return e
                }
                function at(e, t) {
                    for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
                        (i = e[a]).style && (o[a] = m._data(i, "olddisplay"),
                        n = i.style.display,
                        t ? (o[a] || "none" !== n || (i.style.display = ""),
                        "" === i.style.display && Q(i) && (o[a] = m._data(i, "olddisplay", Be(i.nodeName)))) : (r = Q(i),
                        (n && "none" !== n || !r) && m._data(i, "olddisplay", r ? n : m.css(i, "display"))));
                    for (a = 0; a < s; a++)
                        (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
                    return e
                }
                function st(e, t, n) {
                    var i = et.exec(t);
                    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
                }
                function ct(e, t, n, i, r) {
                    for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                        "margin" === n && (a += m.css(e, n + Y[o], !0, r)),
                        i ? ("content" === n && (a -= m.css(e, "padding" + Y[o], !0, r)),
                        "margin" !== n && (a -= m.css(e, "border" + Y[o] + "Width", !0, r))) : (a += m.css(e, "padding" + Y[o], !0, r),
                        "padding" !== n && (a += m.css(e, "border" + Y[o] + "Width", !0, r)));
                    return a
                }
                function lt(e, t, n) {
                    var i = !0
                      , r = "width" === t ? e.offsetWidth : e.offsetHeight
                      , o = Xe(e)
                      , a = f.boxSizing && "border-box" === m.css(e, "boxSizing", !1, o);
                    if (r <= 0 || null == r) {
                        if (((r = Ve(e, t, o)) < 0 || null == r) && (r = e.style[t]),
                        ze.test(r))
                            return r;
                        i = a && (f.boxSizingReliable() || r === e.style[t]),
                        r = parseFloat(r) || 0
                    }
                    return r + ct(e, t, n || (a ? "border" : "content"), i, o) + "px"
                }
                function ut(e, t, n, i, r) {
                    return new ut.prototype.init(e,t,n,i,r)
                }
                m.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ve(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        float: f.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    style: function(e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var r, o, a, s = m.camelCase(t), c = e.style;
                            if (t = m.cssProps[s] || (m.cssProps[s] = ot(s) || s),
                            a = m.cssHooks[t] || m.cssHooks[s],
                            void 0 === n)
                                return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                            if ("string" == (o = typeof n) && (r = V.exec(n)) && r[1] && (n = G(e, t, r),
                            o = "number"),
                            null != n && n == n && ("number" === o && (n += r && r[3] || (m.cssNumber[s] ? "" : "px")),
                            f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                            !a || !("set"in a) || void 0 !== (n = a.set(e, n, i))))
                                try {
                                    c[t] = n
                                } catch (e) {}
                        }
                    },
                    css: function(e, t, n, i) {
                        var r, o, a, s = m.camelCase(t);
                        return t = m.cssProps[s] || (m.cssProps[s] = ot(s) || s),
                        (a = m.cssHooks[t] || m.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
                        void 0 === o && (o = Ve(e, t, i)),
                        "normal" === o && t in nt && (o = nt[t]),
                        "" === n || n ? (r = parseFloat(o),
                        !0 === n || isFinite(r) ? r || 0 : o) : o
                    }
                }),
                m.each(["height", "width"], function(e, t) {
                    m.cssHooks[t] = {
                        get: function(e, n, i) {
                            if (n)
                                return Ze.test(m.css(e, "display")) && 0 === e.offsetWidth ? We(e, tt, function() {
                                    return lt(e, t, i)
                                }) : lt(e, t, i)
                        },
                        set: function(e, n, i) {
                            var r = i && Xe(e);
                            return st(0, n, i ? ct(e, t, i, f.boxSizing && "border-box" === m.css(e, "boxSizing", !1, r), r) : 0)
                        }
                    }
                }),
                f.opacity || (m.cssHooks.opacity = {
                    get: function(e, t) {
                        return Ke.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                    },
                    set: function(e, t) {
                        var n = e.style
                          , i = e.currentStyle
                          , r = m.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                          , o = i && i.filter || n.filter || "";
                        n.zoom = 1,
                        (t >= 1 || "" === t) && "" === m.trim(o.replace(Ge, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                        "" === t || i && !i.filter) || (n.filter = Ge.test(o) ? o.replace(Ge, r) : o + " " + r)
                    }
                }),
                m.cssHooks.marginRight = Qe(f.reliableMarginRight, function(e, t) {
                    if (t)
                        return We(e, {
                            display: "inline-block"
                        }, Ve, [e, "marginRight"])
                }),
                m.cssHooks.marginLeft = Qe(f.reliableMarginLeft, function(e, t) {
                    if (t)
                        return (parseFloat(Ve(e, "marginLeft")) || (m.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - We(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left
                        }) : 0)) + "px"
                }),
                m.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    m.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                                r[e + Y[i] + t] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    },
                    Ue.test(e) || (m.cssHooks[e + t].set = st)
                }),
                m.fn.extend({
                    css: function(e, t) {
                        return te(this, function(e, t, n) {
                            var i, r, o = {}, a = 0;
                            if (m.isArray(t)) {
                                for (i = Xe(e),
                                r = t.length; a < r; a++)
                                    o[t[a]] = m.css(e, t[a], !1, i);
                                return o
                            }
                            return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function() {
                        return at(this, !0)
                    },
                    hide: function() {
                        return at(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            Q(this) ? m(this).show() : m(this).hide()
                        })
                    }
                }),
                m.Tween = ut,
                ut.prototype = {
                    constructor: ut,
                    init: function(e, t, n, i, r, o) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = r || m.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = i,
                        this.unit = o || (m.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = ut.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = ut.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : ut.propHooks._default.set(this),
                        this
                    }
                },
                ut.prototype.init.prototype = ut.prototype,
                ut.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                ut.propHooks.scrollTop = ut.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                m.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                m.fx = ut.prototype.init,
                m.fx.step = {};
                var pt, dt, ht = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
                function gt() {
                    return n.setTimeout(function() {
                        pt = void 0
                    }),
                    pt = m.now()
                }
                function mt(e, t) {
                    var n, i = {
                        height: e
                    }, r = 0;
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = Y[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                    i
                }
                function vt(e, t, n) {
                    for (var i, r = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                        if (i = r[o].call(n, t, e))
                            return i
                }
                function yt(e, t, n) {
                    var i, r, o = 0, a = yt.prefilters.length, s = m.Deferred().always(function() {
                        delete c.elem
                    }), c = function() {
                        if (r)
                            return !1;
                        for (var t = pt || gt(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                            l.tweens[o].run(i);
                        return s.notifyWith(e, [l, i, n]),
                        i < 1 && a ? n : (s.resolveWith(e, [l]),
                        !1)
                    }, l = s.promise({
                        elem: e,
                        props: m.extend({}, t),
                        opts: m.extend(!0, {
                            specialEasing: {},
                            easing: m.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: pt || gt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(i),
                            i
                        },
                        stop: function(t) {
                            var n = 0
                              , i = t ? l.tweens.length : 0;
                            if (r)
                                return this;
                            for (r = !0; n < i; n++)
                                l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]),
                            s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                            this
                        }
                    }), u = l.props;
                    for (function(e, t) {
                        var n, i, r, o, a;
                        for (n in e)
                            if (r = t[i = m.camelCase(n)],
                            o = e[n],
                            m.isArray(o) && (r = o[1],
                            o = e[n] = o[0]),
                            n !== i && (e[i] = o,
                            delete e[n]),
                            (a = m.cssHooks[i]) && "expand"in a)
                                for (n in o = a.expand(o),
                                delete e[i],
                                o)
                                    n in e || (e[n] = o[n],
                                    t[n] = r);
                            else
                                t[i] = r
                    }(u, l.opts.specialEasing); o < a; o++)
                        if (i = yt.prefilters[o].call(l, e, u, l.opts))
                            return m.isFunction(i.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(i.stop, i)),
                            i;
                    return m.map(u, vt, l),
                    m.isFunction(l.opts.start) && l.opts.start.call(e, l),
                    m.fx.timer(m.extend(c, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                }
                m.Animation = m.extend(yt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return G(n.elem, e, V.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        m.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.match(D);
                        for (var n, i = 0, r = e.length; i < r; i++)
                            n = e[i],
                            yt.tweeners[n] = yt.tweeners[n] || [],
                            yt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, r, o, a, s, c, l, u = this, p = {}, d = e.style, h = e.nodeType && Q(e), g = m._data(e, "fxshow");
                        for (i in n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                        c = s.empty.fire,
                        s.empty.fire = function() {
                            s.unqueued || c()
                        }
                        ),
                        s.unqueued++,
                        u.always(function() {
                            u.always(function() {
                                s.unqueued--,
                                m.queue(e, "fx").length || s.empty.fire()
                            })
                        })),
                        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                        "inline" === ("none" === (l = m.css(e, "display")) ? m._data(e, "olddisplay") || Be(e.nodeName) : l) && "none" === m.css(e, "float") && (f.inlineBlockNeedsLayout && "inline" !== Be(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
                        n.overflow && (d.overflow = "hidden",
                        f.shrinkWrapBlocks() || u.always(function() {
                            d.overflow = n.overflow[0],
                            d.overflowX = n.overflow[1],
                            d.overflowY = n.overflow[2]
                        })),
                        t)
                            if (r = t[i],
                            ht.exec(r)) {
                                if (delete t[i],
                                o = o || "toggle" === r,
                                r === (h ? "hide" : "show")) {
                                    if ("show" !== r || !g || void 0 === g[i])
                                        continue;
                                    h = !0
                                }
                                p[i] = g && g[i] || m.style(e, i)
                            } else
                                l = void 0;
                        if (m.isEmptyObject(p))
                            "inline" === ("none" === l ? Be(e.nodeName) : l) && (d.display = l);
                        else
                            for (i in g ? "hidden"in g && (h = g.hidden) : g = m._data(e, "fxshow", {}),
                            o && (g.hidden = !h),
                            h ? m(e).show() : u.done(function() {
                                m(e).hide()
                            }),
                            u.done(function() {
                                var t;
                                for (t in m._removeData(e, "fxshow"),
                                p)
                                    m.style(e, t, p[t])
                            }),
                            p)
                                a = vt(h ? g[i] : 0, i, u),
                                i in g || (g[i] = a.start,
                                h && (a.end = a.start,
                                a.start = "width" === i || "height" === i ? 1 : 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
                    }
                }),
                m.speed = function(e, t, n) {
                    var i = e && "object" == typeof e ? m.extend({}, e) : {
                        complete: n || !n && t || m.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !m.isFunction(t) && t
                    };
                    return i.duration = m.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in m.fx.speeds ? m.fx.speeds[i.duration] : m.fx.speeds._default,
                    null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                    i.old = i.complete,
                    i.complete = function() {
                        m.isFunction(i.old) && i.old.call(this),
                        i.queue && m.dequeue(this, i.queue)
                    }
                    ,
                    i
                }
                ,
                m.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(Q).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var r = m.isEmptyObject(e)
                          , o = m.speed(t, n, i)
                          , a = function() {
                            var t = yt(this, m.extend({}, e), o);
                            (r || m._data(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a,
                        r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && !1 !== e && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0
                              , r = null != e && e + "queueHooks"
                              , o = m.timers
                              , a = m._data(this);
                            if (r)
                                a[r] && a[r].stop && i(a[r]);
                            else
                                for (r in a)
                                    a[r] && a[r].stop && ft.test(r) && i(a[r]);
                            for (r = o.length; r--; )
                                o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                                t = !1,
                                o.splice(r, 1));
                            !t && n || m.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each(function() {
                            var t, n = m._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = m.timers, a = i ? i.length : 0;
                            for (n.finish = !0,
                            m.queue(this, e, []),
                            r && r.stop && r.stop.call(this, !0),
                            t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                            for (t = 0; t < a; t++)
                                i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }),
                m.each(["toggle", "show", "hide"], function(e, t) {
                    var n = m.fn[t];
                    m.fn[t] = function(e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, i, r)
                    }
                }),
                m.each({
                    slideDown: mt("show"),
                    slideUp: mt("hide"),
                    slideToggle: mt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    m.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                }),
                m.timers = [],
                m.fx.tick = function() {
                    var e, t = m.timers, n = 0;
                    for (pt = m.now(); n < t.length; n++)
                        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
                    t.length || m.fx.stop(),
                    pt = void 0
                }
                ,
                m.fx.timer = function(e) {
                    m.timers.push(e),
                    e() ? m.fx.start() : m.timers.pop()
                }
                ,
                m.fx.interval = 13,
                m.fx.start = function() {
                    dt || (dt = n.setInterval(m.fx.tick, m.fx.interval))
                }
                ,
                m.fx.stop = function() {
                    n.clearInterval(dt),
                    dt = null
                }
                ,
                m.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                m.fn.delay = function(e, t) {
                    return e = m.fx && m.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, function(t, i) {
                        var r = n.setTimeout(t, e);
                        i.stop = function() {
                            n.clearTimeout(r)
                        }
                    })
                }
                ,
                function() {
                    var e, t = a.createElement("input"), n = a.createElement("div"), i = a.createElement("select"), r = i.appendChild(a.createElement("option"));
                    (n = a.createElement("div")).setAttribute("className", "t"),
                    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    e = n.getElementsByTagName("a")[0],
                    t.setAttribute("type", "checkbox"),
                    n.appendChild(t),
                    (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px",
                    f.getSetAttribute = "t" !== n.className,
                    f.style = /top/.test(e.getAttribute("style")),
                    f.hrefNormalized = "/a" === e.getAttribute("href"),
                    f.checkOn = !!t.value,
                    f.optSelected = r.selected,
                    f.enctype = !!a.createElement("form").enctype,
                    i.disabled = !0,
                    f.optDisabled = !r.disabled,
                    (t = a.createElement("input")).setAttribute("value", ""),
                    f.input = "" === t.getAttribute("value"),
                    t.value = "t",
                    t.setAttribute("type", "radio"),
                    f.radioValue = "t" === t.value
                }();
                var bt = /\r/g
                  , xt = /[\x20\t\r\n\f]+/g;
                m.fn.extend({
                    val: function(e) {
                        var t, n, i, r = this[0];
                        return arguments.length ? (i = m.isFunction(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (null == (r = i ? e.call(this, n, m(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : m.isArray(r) && (r = m.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        })) : r ? (t = m.valHooks[r.type] || m.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                    }
                }),
                m.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = m.find.attr(e, "value");
                                return null != t ? t : m.trim(m.text(e)).replace(xt, " ")
                            }
                        },
                        select: {
                            get: function(e) {
                                for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, c = r < 0 ? s : o ? r : 0; c < s; c++)
                                    if (((n = i[c]).selected || c === r) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = m(n).val(),
                                        o)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, i, r = e.options, o = m.makeArray(t), a = r.length; a--; )
                                    if (i = r[a],
                                    m.inArray(m.valHooks.option.get(i), o) > -1)
                                        try {
                                            i.selected = n = !0
                                        } catch (e) {
                                            i.scrollHeight
                                        }
                                    else
                                        i.selected = !1;
                                return n || (e.selectedIndex = -1),
                                r
                            }
                        }
                    }
                }),
                m.each(["radio", "checkbox"], function() {
                    m.valHooks[this] = {
                        set: function(e, t) {
                            if (m.isArray(t))
                                return e.checked = m.inArray(m(e).val(), t) > -1
                        }
                    },
                    f.checkOn || (m.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                    )
                });
                var wt, kt, Ct = m.expr.attrHandle, _t = /^(?:checked|selected)$/i, St = f.getSetAttribute, Tt = f.input;
                m.fn.extend({
                    attr: function(e, t) {
                        return te(this, m.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            m.removeAttr(this, e)
                        })
                    }
                }),
                m.extend({
                    attr: function(e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(),
                            r = m.attrHooks[t] || (m.expr.match.bool.test(t) ? kt : wt)),
                            void 0 !== n ? null === n ? void m.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = m.find.attr(e, t)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!f.radioValue && "radio" === t && m.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, i, r = 0, o = t && t.match(D);
                        if (o && 1 === e.nodeType)
                            for (; n = o[r++]; )
                                i = m.propFix[n] || n,
                                m.expr.match.bool.test(n) ? Tt && St || !_t.test(n) ? e[i] = !1 : e[m.camelCase("default-" + n)] = e[i] = !1 : m.attr(e, n, ""),
                                e.removeAttribute(St ? n : i)
                    }
                }),
                kt = {
                    set: function(e, t, n) {
                        return !1 === t ? m.removeAttr(e, n) : Tt && St || !_t.test(n) ? e.setAttribute(!St && m.propFix[n] || n, n) : e[m.camelCase("default-" + n)] = e[n] = !0,
                        n
                    }
                },
                m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = Ct[t] || m.find.attr;
                    Tt && St || !_t.test(t) ? Ct[t] = function(e, t, i) {
                        var r, o;
                        return i || (o = Ct[t],
                        Ct[t] = r,
                        r = null != n(e, t, i) ? t.toLowerCase() : null,
                        Ct[t] = o),
                        r
                    }
                    : Ct[t] = function(e, t, n) {
                        if (!n)
                            return e[m.camelCase("default-" + t)] ? t.toLowerCase() : null
                    }
                }),
                Tt && St || (m.attrHooks.value = {
                    set: function(e, t, n) {
                        if (!m.nodeName(e, "input"))
                            return wt && wt.set(e, t, n);
                        e.defaultValue = t
                    }
                }),
                St || (wt = {
                    set: function(e, t, n) {
                        var i = e.getAttributeNode(n);
                        if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                        i.value = t += "",
                        "value" === n || t === e.getAttribute(n))
                            return t
                    }
                },
                Ct.id = Ct.name = Ct.coords = function(e, t, n) {
                    var i;
                    if (!n)
                        return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
                }
                ,
                m.valHooks.button = {
                    get: function(e, t) {
                        var n = e.getAttributeNode(t);
                        if (n && n.specified)
                            return n.value
                    },
                    set: wt.set
                },
                m.attrHooks.contenteditable = {
                    set: function(e, t, n) {
                        wt.set(e, "" !== t && t, n)
                    }
                },
                m.each(["width", "height"], function(e, t) {
                    m.attrHooks[t] = {
                        set: function(e, n) {
                            if ("" === n)
                                return e.setAttribute(t, "auto"),
                                n
                        }
                    }
                })),
                f.style || (m.attrHooks.style = {
                    get: function(e) {
                        return e.style.cssText || void 0
                    },
                    set: function(e, t) {
                        return e.style.cssText = t + ""
                    }
                });
                var Et = /^(?:input|select|textarea|button|object)$/i
                  , It = /^(?:a|area)$/i;
                m.fn.extend({
                    prop: function(e, t) {
                        return te(this, m.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return e = m.propFix[e] || e,
                        this.each(function() {
                            try {
                                this[e] = void 0,
                                delete this[e]
                            } catch (e) {}
                        })
                    }
                }),
                m.extend({
                    prop: function(e, t, n) {
                        var i, r, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t,
                            r = m.propHooks[t]),
                            void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = m.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Et.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                f.hrefNormalized || m.each(["href", "src"], function(e, t) {
                    m.propHooks[t] = {
                        get: function(e) {
                            return e.getAttribute(t, 4)
                        }
                    }
                }),
                f.optSelected || (m.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex),
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    m.propFix[this.toLowerCase()] = this
                }),
                f.enctype || (m.propFix.enctype = "encoding");
                var Nt = /[\t\r\n\f]/g;
                function Ft(e) {
                    return m.attr(e, "class") || ""
                }
                m.fn.extend({
                    addClass: function(e) {
                        var t, n, i, r, o, a, s, c = 0;
                        if (m.isFunction(e))
                            return this.each(function(t) {
                                m(this).addClass(e.call(this, t, Ft(this)))
                            });
                        if ("string" == typeof e && e)
                            for (t = e.match(D) || []; n = this[c++]; )
                                if (r = Ft(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(Nt, " ")) {
                                    for (a = 0; o = t[a++]; )
                                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                    r !== (s = m.trim(i)) && m.attr(n, "class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, i, r, o, a, s, c = 0;
                        if (m.isFunction(e))
                            return this.each(function(t) {
                                m(this).removeClass(e.call(this, t, Ft(this)))
                            });
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ("string" == typeof e && e)
                            for (t = e.match(D) || []; n = this[c++]; )
                                if (r = Ft(n),
                                i = 1 === n.nodeType && (" " + r + " ").replace(Nt, " ")) {
                                    for (a = 0; o = t[a++]; )
                                        for (; i.indexOf(" " + o + " ") > -1; )
                                            i = i.replace(" " + o + " ", " ");
                                    r !== (s = m.trim(i)) && m.attr(n, "class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e;
                        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
                            m(this).toggleClass(e.call(this, n, Ft(this), t), t)
                        }) : this.each(function() {
                            var t, i, r, o;
                            if ("string" === n)
                                for (i = 0,
                                r = m(this),
                                o = e.match(D) || []; t = o[i++]; )
                                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                            else
                                void 0 !== e && "boolean" !== n || ((t = Ft(this)) && m._data(this, "__className__", t),
                                m.attr(this, "class", t || !1 === e ? "" : m._data(this, "__className__") || ""))
                        })
                    },
                    hasClass: function(e) {
                        var t, n, i = 0;
                        for (t = " " + e + " "; n = this[i++]; )
                            if (1 === n.nodeType && (" " + Ft(n) + " ").replace(Nt, " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                }),
                m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                    m.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }),
                m.fn.extend({
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                });
                var jt = n.location
                  , At = m.now()
                  , Lt = /\?/
                  , Pt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                m.parseJSON = function(e) {
                    if (n.JSON && n.JSON.parse)
                        return n.JSON.parse(e + "");
                    var t, i = null, r = m.trim(e + "");
                    return r && !m.trim(r.replace(Pt, function(e, n, r, o) {
                        return t && n && (i = 0),
                        0 === i ? e : (t = r || n,
                        i += !o - !r,
                        "")
                    })) ? Function("return " + r)() : m.error("Invalid JSON: " + e)
                }
                ,
                m.parseXML = function(e) {
                    var t;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        n.DOMParser ? t = (new n.DOMParser).parseFromString(e, "text/xml") : ((t = new n.ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        t.loadXML(e))
                    } catch (e) {
                        t = void 0
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e),
                    t
                }
                ;
                var Mt = /#.*$/
                  , Dt = /([?&])_=[^&]*/
                  , $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
                  , Rt = /^(?:GET|HEAD)$/
                  , qt = /^\/\//
                  , Ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
                  , Ht = {}
                  , Bt = {}
                  , Ut = "*/".concat("*")
                  , zt = jt.href
                  , Wt = Ot.exec(zt.toLowerCase()) || [];
                function Jt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                        t = "*");
                        var i, r = 0, o = t.toLowerCase().match(D) || [];
                        if (m.isFunction(n))
                            for (; i = o[r++]; )
                                "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                                (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                    }
                }
                function Xt(e, t, n, i) {
                    var r = {}
                      , o = e === Bt;
                    function a(s) {
                        var c;
                        return r[s] = !0,
                        m.each(e[s] || [], function(e, s) {
                            var l = s(t, n, i);
                            return "string" != typeof l || o || r[l] ? o ? !(c = l) : void 0 : (t.dataTypes.unshift(l),
                            a(l),
                            !1)
                        }),
                        c
                    }
                    return a(t.dataTypes[0]) || !r["*"] && a("*")
                }
                function Vt(e, t) {
                    var n, i, r = m.ajaxSettings.flatOptions || {};
                    for (i in t)
                        void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
                    return n && m.extend(!0, e, n),
                    e
                }
                function Yt(e) {
                    return e.style && e.style.display || m.css(e, "display")
                }
                m.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: zt,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ut,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": m.parseJSON,
                            "text xml": m.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Vt(Vt(e, m.ajaxSettings), t) : Vt(m.ajaxSettings, e)
                    },
                    ajaxPrefilter: Jt(Ht),
                    ajaxTransport: Jt(Bt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e,
                        e = void 0),
                        t = t || {};
                        var i, r, o, a, s, c, l, u, p = m.ajaxSetup({}, t), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? m(d) : m.event, f = m.Deferred(), g = m.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === x) {
                                    if (!u)
                                        for (u = {}; t = $t.exec(a); )
                                            u[t[1].toLowerCase()] = t[2];
                                    t = u[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return x || (e = b[n] = b[n] || e,
                                y[e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return x || (p.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (x < 2)
                                        for (t in e)
                                            v[t] = [v[t], e[t]];
                                    else
                                        k.always(e[k.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || w;
                                return l && l.abort(t),
                                C(0, t),
                                this
                            }
                        };
                        if (f.promise(k).complete = g.add,
                        k.success = k.done,
                        k.error = k.fail,
                        p.url = ((e || p.url || zt) + "").replace(Mt, "").replace(qt, Wt[1] + "//"),
                        p.type = t.method || t.type || p.method || p.type,
                        p.dataTypes = m.trim(p.dataType || "*").toLowerCase().match(D) || [""],
                        null == p.crossDomain && (i = Ot.exec(p.url.toLowerCase()),
                        p.crossDomain = !(!i || i[1] === Wt[1] && i[2] === Wt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Wt[3] || ("http:" === Wt[1] ? "80" : "443")))),
                        p.data && p.processData && "string" != typeof p.data && (p.data = m.param(p.data, p.traditional)),
                        Xt(Ht, p, t, k),
                        2 === x)
                            return k;
                        for (r in (c = m.event && p.global) && 0 == m.active++ && m.event.trigger("ajaxStart"),
                        p.type = p.type.toUpperCase(),
                        p.hasContent = !Rt.test(p.type),
                        o = p.url,
                        p.hasContent || (p.data && (o = p.url += (Lt.test(o) ? "&" : "?") + p.data,
                        delete p.data),
                        !1 === p.cache && (p.url = Dt.test(o) ? o.replace(Dt, "$1_=" + At++) : o + (Lt.test(o) ? "&" : "?") + "_=" + At++)),
                        p.ifModified && (m.lastModified[o] && k.setRequestHeader("If-Modified-Since", m.lastModified[o]),
                        m.etag[o] && k.setRequestHeader("If-None-Match", m.etag[o])),
                        (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                        k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : p.accepts["*"]),
                        p.headers)
                            k.setRequestHeader(r, p.headers[r]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(d, k, p) || 2 === x))
                            return k.abort();
                        for (r in w = "abort",
                        {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            k[r](p[r]);
                        if (l = Xt(Bt, p, t, k)) {
                            if (k.readyState = 1,
                            c && h.trigger("ajaxSend", [k, p]),
                            2 === x)
                                return k;
                            p.async && p.timeout > 0 && (s = n.setTimeout(function() {
                                k.abort("timeout")
                            }, p.timeout));
                            try {
                                x = 1,
                                l.send(y, C)
                            } catch (e) {
                                if (!(x < 2))
                                    throw e;
                                C(-1, e)
                            }
                        } else
                            C(-1, "No Transport");
                        function C(e, t, i, r) {
                            var u, y, b, w, C, _ = t;
                            2 !== x && (x = 2,
                            s && n.clearTimeout(s),
                            l = void 0,
                            a = r || "",
                            k.readyState = e > 0 ? 4 : 0,
                            u = e >= 200 && e < 300 || 304 === e,
                            i && (w = function(e, t, n) {
                                for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
                                    c.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (a in s)
                                        if (s[a] && s[a].test(r)) {
                                            c.unshift(a);
                                            break
                                        }
                                if (c[0]in n)
                                    o = c[0];
                                else {
                                    for (a in n) {
                                        if (!c[0] || e.converters[a + " " + c[0]]) {
                                            o = a;
                                            break
                                        }
                                        i || (i = a)
                                    }
                                    o = o || i
                                }
                                if (o)
                                    return o !== c[0] && c.unshift(o),
                                    n[o]
                            }(p, k, i)),
                            w = function(e, t, n, i) {
                                var r, o, a, s, c, l = {}, u = e.dataTypes.slice();
                                if (u[1])
                                    for (a in e.converters)
                                        l[a.toLowerCase()] = e.converters[a];
                                for (o = u.shift(); o; )
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    c = o,
                                    o = u.shift())
                                        if ("*" === o)
                                            o = c;
                                        else if ("*" !== c && c !== o) {
                                            if (!(a = l[c + " " + o] || l["* " + o]))
                                                for (r in l)
                                                    if ((s = r.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                        !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0],
                                                        u.unshift(s[1]));
                                                        break
                                                    }
                                            if (!0 !== a)
                                                if (a && e.throws)
                                                    t = a(t);
                                                else
                                                    try {
                                                        t = a(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: a ? e : "No conversion from " + c + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(p, w, k, u),
                            u ? (p.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (m.lastModified[o] = C),
                            (C = k.getResponseHeader("etag")) && (m.etag[o] = C)),
                            204 === e || "HEAD" === p.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state,
                            y = w.data,
                            u = !(b = w.error))) : (b = _,
                            !e && _ || (_ = "error",
                            e < 0 && (e = 0))),
                            k.status = e,
                            k.statusText = (t || _) + "",
                            u ? f.resolveWith(d, [y, _, k]) : f.rejectWith(d, [k, _, b]),
                            k.statusCode(v),
                            v = void 0,
                            c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? y : b]),
                            g.fireWith(d, [k, _]),
                            c && (h.trigger("ajaxComplete", [k, p]),
                            --m.active || m.event.trigger("ajaxStop")))
                        }
                        return k
                    },
                    getJSON: function(e, t, n) {
                        return m.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return m.get(e, void 0, t, "script")
                    }
                }),
                m.each(["get", "post"], function(e, t) {
                    m[t] = function(e, n, i, r) {
                        return m.isFunction(n) && (r = r || i,
                        i = n,
                        n = void 0),
                        m.ajax(m.extend({
                            url: e,
                            type: t,
                            dataType: r,
                            data: n,
                            success: i
                        }, m.isPlainObject(e) && e))
                    }
                }),
                m._evalUrl = function(e) {
                    return m.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }
                ,
                m.fn.extend({
                    wrapAll: function(e) {
                        if (m.isFunction(e))
                            return this.each(function(t) {
                                m(this).wrapAll(e.call(this, t))
                            });
                        if (this[0]) {
                            var t = m(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                    e = e.firstChild;
                                return e
                            }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return m.isFunction(e) ? this.each(function(t) {
                            m(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = m(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = m.isFunction(e);
                        return this.each(function(n) {
                            m(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                m.expr.filters.hidden = function(e) {
                    return f.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
                        if (!m.contains(e.ownerDocument || a, e))
                            return !0;
                        for (; e && 1 === e.nodeType; ) {
                            if ("none" === Yt(e) || "hidden" === e.type)
                                return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(e)
                }
                ,
                m.expr.filters.visible = function(e) {
                    return !m.expr.filters.hidden(e)
                }
                ;
                var Qt = /%20/g
                  , Gt = /\[\]$/
                  , Kt = /\r?\n/g
                  , Zt = /^(?:submit|button|image|reset|file)$/i
                  , en = /^(?:input|select|textarea|keygen)/i;
                function tn(e, t, n, i) {
                    var r;
                    if (m.isArray(t))
                        m.each(t, function(t, r) {
                            n || Gt.test(e) ? i(e, r) : tn(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                        });
                    else if (n || "object" !== m.type(t))
                        i(e, t);
                    else
                        for (r in t)
                            tn(e + "[" + r + "]", t[r], n, i)
                }
                m.param = function(e, t) {
                    var n, i = [], r = function(e, t) {
                        t = m.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                    if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional),
                    m.isArray(e) || e.jquery && !m.isPlainObject(e))
                        m.each(e, function() {
                            r(this.name, this.value)
                        });
                    else
                        for (n in e)
                            tn(n, e[n], t, r);
                    return i.join("&").replace(Qt, "+")
                }
                ,
                m.fn.extend({
                    serialize: function() {
                        return m.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = m.prop(this, "elements");
                            return e ? m.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !m(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !ne.test(e))
                        }).map(function(e, t) {
                            var n = m(this).val();
                            return null == n ? null : m.isArray(n) ? m.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Kt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Kt, "\r\n")
                            }
                        }).get()
                    }
                }),
                m.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
                    return this.isLocal ? sn() : a.documentMode > 8 ? an() : /^(get|post|head|put|delete|options)$/i.test(this.type) && an() || sn()
                }
                : an;
                var nn = 0
                  , rn = {}
                  , on = m.ajaxSettings.xhr();
                function an() {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) {}
                }
                function sn() {
                    try {
                        return new n.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                }
                n.attachEvent && n.attachEvent("onunload", function() {
                    for (var e in rn)
                        rn[e](void 0, !0)
                }),
                f.cors = !!on && "withCredentials"in on,
                (on = f.ajax = !!on) && m.ajaxTransport(function(e) {
                    var t;
                    if (!e.crossDomain || f.cors)
                        return {
                            send: function(i, r) {
                                var o, a = e.xhr(), s = ++nn;
                                if (a.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (o in e.xhrFields)
                                        a[o] = e.xhrFields[o];
                                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                                e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                i)
                                    void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                                a.send(e.hasContent && e.data || null),
                                t = function(n, i) {
                                    var o, c, l;
                                    if (t && (i || 4 === a.readyState))
                                        if (delete rn[s],
                                        t = void 0,
                                        a.onreadystatechange = m.noop,
                                        i)
                                            4 !== a.readyState && a.abort();
                                        else {
                                            l = {},
                                            o = a.status,
                                            "string" == typeof a.responseText && (l.text = a.responseText);
                                            try {
                                                c = a.statusText
                                            } catch (e) {
                                                c = ""
                                            }
                                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                        }
                                    l && r(o, c, l, a.getAllResponseHeaders())
                                }
                                ,
                                e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = rn[s] = t : t()
                            },
                            abort: function() {
                                t && t(void 0, !0)
                            }
                        }
                }),
                m.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return m.globalEval(e),
                            e
                        }
                    }
                }),
                m.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET",
                    e.global = !1)
                }),
                m.ajaxTransport("script", function(e) {
                    if (e.crossDomain) {
                        var t, n = a.head || m("head")[0] || a.documentElement;
                        return {
                            send: function(i, r) {
                                (t = a.createElement("script")).async = !0,
                                e.scriptCharset && (t.charset = e.scriptCharset),
                                t.src = e.url,
                                t.onload = t.onreadystatechange = function(e, n) {
                                    (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                                    t.parentNode && t.parentNode.removeChild(t),
                                    t = null,
                                    n || r(200, "success"))
                                }
                                ,
                                n.insertBefore(t, n.firstChild)
                            },
                            abort: function() {
                                t && t.onload(void 0, !0)
                            }
                        }
                    }
                });
                var cn = []
                  , ln = /(=)\?(?=&|$)|\?\?/;
                m.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = cn.pop() || m.expando + "_" + At++;
                        return this[e] = !0,
                        e
                    }
                }),
                m.ajaxPrefilter("json jsonp", function(e, t, i) {
                    var r, o, a, s = !1 !== e.jsonp && (ln.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                        return r = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(ln, "$1" + r) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        e.converters["script json"] = function() {
                            return a || m.error(r + " was not called"),
                            a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = n[r],
                        n[r] = function() {
                            a = arguments
                        }
                        ,
                        i.always(function() {
                            void 0 === o ? m(n).removeProp(r) : n[r] = o,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                            cn.push(r)),
                            a && m.isFunction(o) && o(a[0]),
                            a = o = void 0
                        }),
                        "script"
                }),
                m.parseHTML = function(e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                    t = !1),
                    t = t || a;
                    var i = T.exec(e)
                      , r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = fe([e], t, r),
                    r && r.length && m(r).remove(),
                    m.merge([], i.childNodes))
                }
                ;
                var un = m.fn.load;
                function pn(e) {
                    return m.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
                }
                m.fn.load = function(e, t, n) {
                    if ("string" != typeof e && un)
                        return un.apply(this, arguments);
                    var i, r, o, a = this, s = e.indexOf(" ");
                    return s > -1 && (i = m.trim(e.slice(s, e.length)),
                    e = e.slice(0, s)),
                    m.isFunction(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (r = "POST"),
                    a.length > 0 && m.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        o = arguments,
                        a.html(i ? m("<div>").append(m.parseHTML(e)).find(i) : e)
                    }).always(n && function(e, t) {
                        a.each(function() {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }
                    ),
                    this
                }
                ,
                m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    m.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }),
                m.expr.filters.animated = function(e) {
                    return m.grep(m.timers, function(t) {
                        return e === t.elem
                    }).length
                }
                ,
                m.offset = {
                    setOffset: function(e, t, n) {
                        var i, r, o, a, s, c, l = m.css(e, "position"), u = m(e), p = {};
                        "static" === l && (e.style.position = "relative"),
                        s = u.offset(),
                        o = m.css(e, "top"),
                        c = m.css(e, "left"),
                        ("absolute" === l || "fixed" === l) && m.inArray("auto", [o, c]) > -1 ? (a = (i = u.position()).top,
                        r = i.left) : (a = parseFloat(o) || 0,
                        r = parseFloat(c) || 0),
                        m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))),
                        null != t.top && (p.top = t.top - s.top + a),
                        null != t.left && (p.left = t.left - s.left + r),
                        "using"in t ? t.using.call(e, p) : u.css(p)
                    }
                },
                m.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function(t) {
                                m.offset.setOffset(this, e, t)
                            });
                        var t, n, i = {
                            top: 0,
                            left: 0
                        }, r = this[0], o = r && r.ownerDocument;
                        return o ? (t = o.documentElement,
                        m.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()),
                        n = pn(o),
                        {
                            top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : i) : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n = {
                                top: 0,
                                left: 0
                            }, i = this[0];
                            return "fixed" === m.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                            t = this.offset(),
                            m.nodeName(e[0], "html") || (n = e.offset()),
                            n.top += m.css(e[0], "borderTopWidth", !0),
                            n.left += m.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - n.top - m.css(i, "marginTop", !0),
                                left: t.left - n.left - m.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent; e && !m.nodeName(e, "html") && "static" === m.css(e, "position"); )
                                e = e.offsetParent;
                            return e || Je
                        })
                    }
                }),
                m.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = /Y/.test(t);
                    m.fn[e] = function(i) {
                        return te(this, function(e, i, r) {
                            var o = pn(e);
                            if (void 0 === r)
                                return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                            o ? o.scrollTo(n ? m(o).scrollLeft() : r, n ? r : m(o).scrollTop()) : e[i] = r
                        }, e, i, arguments.length, null)
                    }
                }),
                m.each(["top", "left"], function(e, t) {
                    m.cssHooks[t] = Qe(f.pixelPosition, function(e, n) {
                        if (n)
                            return n = Ve(e, t),
                            ze.test(n) ? m(e).position()[t] + "px" : n
                    })
                }),
                m.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    m.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, i) {
                        m.fn[i] = function(i, r) {
                            var o = arguments.length && (n || "boolean" != typeof i)
                              , a = n || (!0 === i || !0 === r ? "margin" : "border");
                            return te(this, function(t, n, i) {
                                var r;
                                return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                                Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? m.css(t, n, a) : m.style(t, n, i, a)
                            }, t, o ? i : void 0, o, null)
                        }
                    })
                }),
                m.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, i) {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                }),
                m.fn.size = function() {
                    return this.length
                }
                ,
                m.fn.andSelf = m.fn.addBack,
                void 0 === (i = function() {
                    return m
                }
                .apply(t, [])) || (e.exports = i);
                var dn = n.jQuery
                  , hn = n.$;
                return m.noConflict = function(e) {
                    return n.$ === m && (n.$ = hn),
                    e && n.jQuery === m && (n.jQuery = dn),
                    m
                }
                ,
                r || (n.jQuery = n.$ = m),
                m
            }
            ,
            "object" == typeof e.exports ? e.exports = r.document ? o(r, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return o(e)
            }
            : o(r)
        }
        , function(e, t, n) {
            var i = n(7);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            n(9)(i, {
                insert: "body"
            }),
            i.locals && (e.exports = i.locals)
        }
        , function(e, t, n) {
            (t = n(8)(!1)).push([e.i, ".article-login {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.article-login:hover {\n  cursor: pointer;\n}\n.article-login .login-sohu {\n  width: 52px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #FFFFFF !important;\n  line-height: 28px;\n  text-align: center;\n  transition: all 0.3s ease-in-out;\n}\n.article-login .login-sohu:hover {\n  background-color: hsla(0, 0%, 100%, 0.4);\n}\n.article-login .login-after {\n  width: 32px;\n  height: 32px;\n  font-size: 0px;\n}\n.article-login .login-after .user {\n  display: block;\n  font-size: 0px;\n  position: relative;\n}\n.article-login .login-after .user img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n}\n.article-login .login-after .user .num {\n  width: 14px;\n  height: 14px;\n  background: #F43640;\n  border-radius: 11px;\n  border: 1px solid #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  z-index: 2;\n  font-family: PingFangSC, PingFang SC;\n  font-weight: 600;\n  font-size: 10px;\n  color: #FFFFFF;\n  line-height: 14px;\n  text-align: center;\n  font-style: normal;\n}\n.article-login .login-after:hover .login-layer {\n  visibility: visible;\n  opacity: 1;\n  z-index: 999;\n}\n.article-login .login-layer {\n  width: 144px;\n  height: 115px;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.06), 0px 4px 10px -2px rgba(0, 0, 0, 0.07);\n  border: 1px solid rgba(0, 0, 0, 0.02);\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s ease-in;\n  padding: 6px 4px 4px 4px;\n  box-sizing: border-box;\n}\n.article-login .login-layer::after {\n  content: '';\n  position: absolute;\n  right: 50%;\n  top: -8px;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n  width: 0px;\n  height: 0px;\n  border-top: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid #FFFFFF;\n  border-left: 4px solid transparent;\n  z-index: 1;\n}\n.article-login .login-layer .item {\n  width: 100%;\n  height: 32px;\n  padding: 6px 8px;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n}\n.article-login .login-layer .item:hover {\n  background: #F8F8F8;\n  cursor: pointer;\n}\n.article-login .login-layer .item .icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 12px;\n}\n.article-login .login-layer .item .text {\n  height: 20px;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #666666;\n  line-height: 20px;\n}\n.article-login .login-layer .user-name {\n  padding: 6px 8px;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #111111;\n  line-height: 20px;\n  width: 100%;\n}\n.article-login .login-layer .divide-line {\n  width: 100%;\n  height: 1px;\n  background: #EBEBEB;\n  margin: 4px 0px;\n}\n.article-login .login-layer .my-center .user {\n  background: url('//statics.itc.cn/mptc-mpfe/img/pc-login/icon_user.png');\n  background-size: contain;\n}\n.article-login .login-layer .quit .quit {\n  background: url('//statics.itc.cn/mptc-mpfe/img/pc-login/icon_quit.png');\n  background-size: contain;\n}\n", ""]),
            e.exports = t
        }
        , function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n, i, r, o = e[1] || "", a = e[3];
                            if (!a)
                                return o;
                            if (t && "function" == typeof btoa) {
                                var s = (n = a,
                                i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                                r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
                                "/*# ".concat(r, " */"))
                                  , c = a.sources.map(function(e) {
                                    return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                });
                                return [o].concat(c).concat([s]).join("\n")
                            }
                            return [o].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    }).join("")
                }
                ,
                t.i = function(e, n, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var r = {};
                    if (i)
                        for (var o = 0; o < this.length; o++) {
                            var a = this[o][0];
                            null != a && (r[a] = !0)
                        }
                    for (var s = 0; s < e.length; s++) {
                        var c = [].concat(e[s]);
                        i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                        t.push(c))
                    }
                }
                ,
                t
            }
        }
        , function(e, t) {
            var n = {}
              , i = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)),
                    t
                }
            }
              , r = i(function() {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
            })
              , o = i(function() {
                return document.head || document.getElementsByTagName("head")[0]
            })
              , a = null
              , s = 0
              , c = [];
            function l(e, t) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i]
                      , o = n[r.id];
                    if (o) {
                        o.refs++;
                        for (var a = 0; a < o.parts.length; a++)
                            o.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++)
                            o.parts.push(f(r.parts[a], t))
                    } else {
                        var s = [];
                        for (a = 0; a < r.parts.length; a++)
                            s.push(f(r.parts[a], t));
                        n[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }
            function u(e) {
                for (var t = [], n = {}, i = 0; i < e.length; i++) {
                    var r = e[i]
                      , o = r[0]
                      , a = {
                        css: r[1],
                        media: r[2],
                        sourceMap: r[3]
                    };
                    n[o] ? n[o].parts.push(a) : t.push(n[o] = {
                        id: o,
                        parts: [a]
                    })
                }
                return t
            }
            function p(e, t) {
                var n = o()
                  , i = c[c.length - 1];
                if ("top" === e.insertAt)
                    i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    c.push(t);
                else {
                    if ("bottom" !== e.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(t)
                }
            }
            function d(e) {
                e.parentNode.removeChild(e);
                var t = c.indexOf(e);
                t >= 0 && c.splice(t, 1)
            }
            function h(e) {
                var t = document.createElement("style");
                return t.type = "text/css",
                p(e, t),
                t
            }
            function f(e, t) {
                var n, i, r;
                if (t.singleton) {
                    var o = s++;
                    n = a || (a = h(t)),
                    i = v.bind(null, n, o, !1),
                    r = v.bind(null, n, o, !0)
                } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                        var t = document.createElement("link");
                        return t.rel = "stylesheet",
                        p(e, t),
                        t
                    }(t),
                    i = b.bind(null, n),
                    r = function() {
                        d(n),
                        n.href && URL.revokeObjectURL(n.href)
                    }
                    ) : (n = h(t),
                    i = y.bind(null, n),
                    r = function() {
                        d(n)
                    }
                    );
                return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        i(e = t)
                    } else
                        r()
                }
            }
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                void 0 === (t = t || {}).singleton && (t.singleton = r()),
                void 0 === t.insertAt && (t.insertAt = "bottom");
                var i = u(e);
                return l(i, t),
                function(e) {
                    for (var r = [], o = 0; o < i.length; o++) {
                        var a = i[o];
                        (s = n[a.id]).refs--,
                        r.push(s)
                    }
                    for (e && l(u(e), t),
                    o = 0; o < r.length; o++) {
                        var s;
                        if (0 === (s = r[o]).refs) {
                            for (var c = 0; c < s.parts.length; c++)
                                s.parts[c]();
                            delete n[s.id]
                        }
                    }
                }
            }
            ;
            var g, m = (g = [],
            function(e, t) {
                return g[e] = t,
                g.filter(Boolean).join("\n")
            }
            );
            function v(e, t, n, i) {
                var r = n ? "" : i.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = m(t, r);
                else {
                    var o = document.createTextNode(r)
                      , a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                }
            }
            function y(e, t) {
                var n = t.css
                  , i = t.media;
                if (i && e.setAttribute("media", i),
                e.styleSheet)
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            function b(e, t) {
                var n = t.css
                  , i = t.sourceMap;
                i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var r = new Blob([n],{
                    type: "text/css"
                })
                  , o = e.href;
                e.href = URL.createObjectURL(r),
                o && URL.revokeObjectURL(o)
            }
        }
        , function(e, t, n) {
            var i = n(11)
              , r = n(12)
              , o = n(13)
              , a = n(14)
              , s = n(18);
            "" == document.cookie && o.set("itssohu", "true", {
                domain: ".sohu.com"
            });
            var c = a({
                appid: 116005
            })
              , l = new (i.extend({
                init: function() {
                    this.urls = {
                        get_captcha: "//passport.sohu.com/apiv2/picture_captcha?userid="
                    }
                },
                fetch: function() {
                    var e = this;
                    this._fetching || (this._fetching = !0,
                    s.getUserInfo({
                        successFun: function(t) {
                            e._fetching = !1;
                            try {
                                t ? e.trigger("get:userInfo", {
                                    nick: t && t.data && t.data.nickname,
                                    icon: t && t.data && t.data.avatar
                                }) : e.trigger("get:userInfo", {})
                            } catch (t) {
                                e.trigger("error")
                            }
                        },
                        failureFun: function() {
                            e.trigger("error"),
                            e._fetching = !1
                        }
                    }))
                },
                userLogin: function(e) {
                    c.login({
                        success: e.success,
                        error: e.error,
                        params: {
                            userid: e.userid,
                            password: e.password,
                            captcha: e.captcha,
                            persistentCookie: e.keep
                        }
                    })
                },
                userCaptcha: function() {
                    return c.getLoginPicture()
                },
                mobileLogin: function(e) {
                    c.mobileLogin({
                        success: e.success,
                        error: e.error,
                        params: {
                            mobile: e.mobile,
                            smcode: e.smcode,
                            persistentCookie: e.keep
                        }
                    })
                },
                pictureCaptcha: function() {
                    return c.getPhonePicture()
                },
                mobileSignInCaptcha: function(e) {
                    c.getSignInCaptcha({
                        success: e.success,
                        error: e.error,
                        params: {
                            mobile: e.mobile,
                            way: e.way,
                            captcha: e.captcha
                        }
                    })
                },
                getMobileCaptcha: function(e) {
                    c.getMobileCaptcha({
                        success: e.success,
                        error: e.error,
                        params: {
                            captchaType: e.captchaType,
                            mobile: e.mobile,
                            way: e.way,
                            captcha: e.captcha,
                            validate: ""
                        }
                    })
                },
                logout: function(e) {
                    r.removeItem("userinfo"),
                    c.logout({
                        success: e.success,
                        error: e.error
                    })
                },
                getThirdLoginUrl: function(e) {
                    return c.getThirdLoginUrl({
                        provider: e.provider,
                        ru: e.ru
                    })
                },
                getBindPhoneCaptcha: function(e) {
                    c.getBindPhoneCaptcha({
                        success: e.success,
                        error: e.error,
                        params: {
                            mobile: e.mobile,
                            way: e.way
                        }
                    })
                },
                bindPhone: function(e) {
                    c.bindPhone({
                        success: e.success,
                        error: e.error,
                        params: {
                            mobile: e.mobile,
                            smcode: e.smcode,
                            ru: e.ru
                        }
                    })
                },
                isLogin: function() {
                    var e = o.get("ppinf")
                      , t = o.get("umab_user_id");
                    return !!e && !!t
                },
                isThirdLogin: function() {
                    return !!o.get("thirdLoginSide")
                },
                isOkey: function() {
                    var e = o.get("ppok")
                      , t = o.get("ppinf");
                    return !(!e || t)
                },
                getCaptcha: function(e, t) {
                    var n = e && e.user_id;
                    return this.urls.get_captcha + n
                },
                getSpInstance: function() {
                    return c
                },
                checkLogin: function(e, t) {
                    const n = this;
                    s.checkLogin({
                        successFun: function(t) {
                            n.trigger("get:checkUser", t),
                            "function" == typeof e && e(t)
                        },
                        failureFun: function(e) {
                            n.trigger("get:checkUser", e),
                            "function" == typeof t && t(e)
                        }
                    })
                }
            }));
            e.exports = l
        }
        , function(e, t, n) {
            (function(t) {
                var n = function() {
                    this.url = "",
                    this._ev_callback = {},
                    this.init.apply(this, arguments)
                };
                n.prototype = {
                    init: function() {},
                    fetch: function(e) {
                        var n = e && e.data
                          , i = e && e.success || function(e) {
                            this.attrs = e,
                            o.trigger("sync", this.attrs)
                        }
                          , r = /\/\//g.test(this.url) ? this.url : "//api.beta.www.sohu.com/public-api/" + this.url
                          , o = this;
                        t.ajax({
                            url: r,
                            data: n,
                            method: e.method || "GET",
                            dataType: e.dataType || "jsonp",
                            contentType: e.contentType || "application/x-www-form-urlencoded",
                            success: i,
                            xhrFields: {
                                withCredentials: !0
                            },
                            error: function() {
                                o.trigger("error", arguments)
                            }
                        })
                    },
                    on: function(e, t) {
                        this._ev_callback[e] = this._ev_callback[e] || [],
                        this._ev_callback[e].push({
                            fn: t
                        })
                    },
                    one: function(e, t) {
                        this._ev_callback[e] = this._ev_callback[e] || [],
                        this._ev_callback[e].push({
                            fn: t,
                            one: !0
                        })
                    },
                    trigger: function(e, t) {
                        var n = this
                          , i = [];
                        this._ev_callback[e] && this._ev_callback[e].forEach(function(e) {
                            e.one && i.push(e.fn),
                            e.fn && e.fn.call(n, t)
                        }),
                        i && i.forEach(function(t) {
                            n.off(e, t)
                        })
                    },
                    off: function(e, t) {
                        this._ev_callback[e] = this._ev_callback[e] || [];
                        var n = -1;
                        this._ev_callback[e].forEach(function(e, i) {
                            e.fn === t && (n = i)
                        }),
                        n >= 0 && this._ev_callback[e].splice(n, 1)
                    }
                },
                n.extend = function(e) {
                    var n = this
                      , i = function() {
                        return n.apply(this, arguments)
                    };
                    return t.extend(i, n),
                    i.prototype = new n,
                    t.extend(i.prototype, e),
                    i.__super__ = n.prototype,
                    i
                }
                ,
                e.exports = n
            }
            ).call(this, n(5))
        }
        , function(e, t) {
            var n = {
                _store: {},
                setItem: function(e, t, n) {
                    this.removeItem(e);
                    var i = (new Date).getTime()
                      , r = {
                        _value: t
                    };
                    return n && (r._expire = i + n),
                    this.isSupportLocalStorage ? (localStorage.setItem(e, JSON.stringify(r)),
                    this._store[e] = JSON.stringify(r)) : this._store[e] = JSON.stringify(r),
                    r
                },
                getItem: function(e) {
                    var t = this.isSupportLocalStorage ? JSON.parse(localStorage.getItem(e)) : this._store[e] && JSON.parse(this._store[e])
                      , n = (new Date).getTime();
                    return t ? t._expire && n > t._expire ? (this.removeItem(e),
                    null) : t._value : null
                },
                removeItem: function(e) {
                    localStorage.removeItem(e)
                },
                isSupportLocalStorage: function() {
                    var e, t = "isSupportLocalStorage";
                    try {
                        e = window.localStorage
                    } catch (t) {
                        return e = null,
                        !1
                    }
                    if (e)
                        try {
                            return e.setItem(t, t),
                            e.removeItem(t),
                            !0
                        } catch (e) {
                            return !1
                        }
                    return !1
                }()
            };
            try {
                e.exports = n
            } catch (t) {
                e.exports = {}
            }
        }
        , function(e, t, n) {
            (function(t) {
                try {
                    e.exports = (n = {},
                    i = function(e, i, r) {
                        var o;
                        if ("undefined" != typeof document) {
                            if (arguments.length > 1) {
                                if ("number" == typeof (r = t.extend({
                                    path: "/"
                                }, n, r)).expires) {
                                    var a = new Date;
                                    a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                                    r.expires = a
                                }
                                try {
                                    o = JSON.stringify(i),
                                    /^[\{\[]/.test(o) && (i = o)
                                } catch (e) {}
                                return i = encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                                e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape),
                                document.cookie = [e, "=", i, r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                            }
                            e || (o = {});
                            for (var s = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, l = 0; l < s.length; l++) {
                                var u = s[l].split("=")
                                  , p = u.slice(1).join("=");
                                '"' === p.charAt(0) && (p = p.slice(1, -1));
                                try {
                                    var d = u[0].replace(c, decodeURIComponent);
                                    if (p = p.replace(c, decodeURIComponent),
                                    this.json)
                                        try {
                                            p = JSON.parse(p)
                                        } catch (e) {}
                                    if (e === d) {
                                        o = p;
                                        break
                                    }
                                    e || (o[d] = p)
                                } catch (e) {}
                            }
                            return o
                        }
                    }
                    ,
                    i.set = i,
                    i.get = function(e) {
                        return i.call(i, e)
                    }
                    ,
                    i.getJSON = function() {
                        return i.apply({
                            json: !0
                        }, [].slice.call(arguments))
                    }
                    ,
                    i.defaults = n,
                    i.remove = function(e, n) {
                        i(e, "", t.extend(n, {
                            expires: -1
                        }))
                    }
                    ,
                    i)
                } catch (t) {
                    e.exports = {}
                }
                var n, i
            }
            ).call(this, n(5))
        }
        , function(e, t, n) {
            var i = n(15);
            e.exports = function(e) {
                return new (n("prod" === i || "pre" === i ? 16 : 17))(e)
            }
        }
        , function(e, t) {
            var n, i, r, o = (n = "",
            i = window.location.host,
            r = window.RUNNINGENV && window.RUNNINGENV.toLowerCase(),
            /(test-www|test-app|beta|d[0-9]|test|dev)(\.m|\.www)?\.sohu(\.com)|(localhost|127.0.0.1)/.test(i) && (n = "test"),
            /(t3\.m|pre\.beta\.www|pre-www|pre-app)\.sohu(\.com)?/.test(i) && (n = "pre"),
            r && r.includes("test") ? n = "test" : r && r.includes("pre") ? n = "pre" : r && r.includes("prod") && (n = "prod"),
            n || "prod");
            e.exports = o
        }
        , function(e, t, n) {
            var i, r, o;
            r = window,
            o = function(e) {
                function t(e) {
                    var t = this;
                    e.onekeyId && (d.autoLoadScript("https://passportv4-web.bjcnc.scs.sohucs.com/crypto-js.min.js", function(e) {
                        t.cryptoLoaded = e
                    }),
                    d.autoLoadScript("https://www.cmpassport.com/h5/js/jssdk_auth/jssdk.min.js", function(e) {
                        t.ydrzLoaded = e
                    })),
                    this.options = d.extend({}, p, e || {}),
                    this._id = "passport" + o.replace(/\D/g, ""),
                    this.version = o,
                    this.appid = this.options.appid,
                    this.options.gidinf && this.options.serialno && (f("gidinf", this.options.gidinf),
                    f("srn", this.options.serialno)),
                    s ? f("t", a) : f("t", a, c),
                    this.setCommonCookie()
                }
                var n, i, r = (i = (n = e).opera ? opera.version().replace(/\d$/, "") - 0 : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]),
                {
                    ie: !!n.VBArray && Math.max(document.documentMode || 0, i),
                    firefox: !!n.netscape && i,
                    opera: !!n.opera && i,
                    chrome: !!n.chrome && i,
                    safari: /apple/i.test(navigator.vendor) && i
                }), o = "4.0.14", a = (new Date).getTime(), s = /\.sohu.com/.test(location.host), c = 2 == document.domain.split(".").length ? document.domain : document.domain.split(".").slice(document.domain.split(".").length - 2).join("."), l = r.ie && r.ie < 9 ? "https://v4.passport.sohu.com/i/".replace("https", "http") : s ? "https://v4.passport.sohu.com/i/" : "https://v4-passport.56.com/i/", u = "https://m.passport.sohu.com", p = {
                    appid: "",
                    url: {
                        commonCookie: l + "cookie/common",
                        challenge: l + "jf/code",
                        loginByUserId: l + "login",
                        loginRequireCaptcha: l + "login/require/captcha",
                        mobileLogin: l + "login/mobile",
                        quickLogin: l + "login/quick",
                        passportLogin: l + "login/passport",
                        scanCodeLogin: l + "login/token",
                        pictureCaptcha: l + "captcha/picture",
                        signInCaptcha: l + "smcode/mobile/signin",
                        registerCaptcha: l + "smcode/mobile/signup",
                        newRegisterCaptcha: l + "smcode/mobile/esignup",
                        bindPhoneCaptcha: l + "smcode/mobile/sblmobile",
                        logout: l + "logout",
                        register: l + "register",
                        registerUp: l + "register/v2",
                        bindPhone: l + "login/bind/mobile",
                        checkPhone: l + "verify/mobile/bind",
                        checkUserPhoneBind: l + "verify/user/mobile",
                        getPhoneCode: l + "mobile/phonecode",
                        getMobileCaptcha: l + "smcode/mobile/v2",
                        verifyMobileCaptcha: l + "verify/smcode/mobile",
                        getSecmobileCaptcha: l + "smcode/secmobile",
                        verifySecmobileCaptcha: l + "verify/smcode/secmobile",
                        queryCertificateStaus: l + "certificate/query/passport",
                        userCertificate: l + "certificate/create",
                        getAICaptcha: l + "captcha/npicture",
                        verifyAICaptcha: l + "captcha/nvalid",
                        resetPassword: l + "password/reset2",
                        updatePassword: l + "password/update2",
                        verifySecmobCaptcha: l + "login/security/secmob"
                    }
                }, d = {
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
                }, h = function(e) {
                    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(n)) ? unescape(t[2]) : null
                }, f = function(e, t, n) {
                    var i = new Date;
                    i.setTime(i.getTime() + 2592e6),
                    document.cookie = n ? e + "=" + escape(t) + ";domain=" + n + ";path=/;expires=" + i.toGMTString() : e + "=" + escape(t) + ";domain=sohu.com;path=/;expires=" + i.toGMTString()
                }, g = a + 1, m = a + 2, v = a + 3;
                return t.prototype = {
                    onekeyLogin: function(e) {
                        function t(e, t) {
                            var n, i, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
                            if (t = t || r.length,
                            e)
                                for (n = 0; n < e; n++)
                                    o[n] = r[0 | Math.random() * t];
                            else
                                for (o[8] = o[13] = o[18] = o[23] = "-",
                                o[14] = "4",
                                n = 0; n < 36; n++)
                                    o[n] || (i = 0 | 16 * Math.random(),
                                    o[n] = r[19 == n ? 3 & i | 8 : i]);
                            return o.join("")
                        }
                        function n(e, t) {
                            for (var n = String(e), i = t - n.length; i > 0; i--)
                                n = "0" + n;
                            return n
                        }
                        function i(n) {
                            var i = {
                                appid: a,
                                token: n.token,
                                traceid: t(32, 32),
                                userInformation: n.userInformation
                            };
                            s.quickLogin({
                                success: function(t, n) {
                                    e.success && e.success(t, n)
                                },
                                error: function(t) {
                                    e.error && e.error(t)
                                },
                                params: i
                            })
                        }
                        function r(t) {
                            e.getTokenError && e.getTokenError(t)
                        }
                        var o, a = this.appid, s = this, c = {
                            version: "2.0",
                            timestamp: (o = new Date,
                            n(o.getFullYear(), 4) + n(o.getMonth() + 1, 2) + n(o.getDate(), 2) + n(o.getHours(), 2) + n(o.getMinutes(), 2) + n(o.getSeconds(), 2) + n(o.getMilliseconds(), 3)),
                            appId: this.options.onekeyId,
                            appkey: this.options.onekeyKey,
                            businessType: "8",
                            openType: 1,
                            traceId: t(32, 32),
                            expandParams: "",
                            isTest: ""
                        }, l = 0;
                        !function e() {
                            if (s.cryptoLoaded && s.ydrzLoaded && CryptoJS && CryptoJS.MD5) {
                                var t = CryptoJS.MD5(c.appId + c.businessType + c.traceId + c.timestamp + c.traceId + c.version + c.appkey).toString();
                                YDRZ.getTokenInfo({
                                    data: {
                                        version: c.version,
                                        appId: c.appId,
                                        sign: t,
                                        traceId: c.traceId,
                                        timestamp: c.timestamp,
                                        openType: c.openType,
                                        expandParams: c.expandParams,
                                        isTest: c.isTest
                                    },
                                    success: i,
                                    error: r
                                })
                            } else
                                ++l < 30 && setTimeout(e, 100)
                        }()
                    },
                    getNetType: function(e, t) {
                        var n = this
                          , i = 0;
                        !function r() {
                            if (n.cryptoLoaded && n.ydrzLoaded) {
                                var o = YDRZ.getConnection(e);
                                t && t({
                                    netType: o.netType,
                                    platform: navigator.platform,
                                    userAgent: navigator.userAgent
                                })
                            } else
                                ++i < 30 && setTimeout(r, 100)
                        }()
                    },
                    setCommonCookie: function(e) {
                        if (s ? f("t", a) : f("t", a, c),
                        h("gidinf") && h("reqtype"))
                            e && e();
                        else {
                            var t = this.options.url.commonCookie
                              , n = {
                                callback: "?"
                            };
                            s || (n.domain = c),
                            t = d.url(t, n),
                            this.getJSONP(t, e)
                        }
                    },
                    bridging: function(e) {
                        var t = {
                            error: e.error,
                            success: e.success
                        }
                          , n = e.params || {};
                        return e.params && e.params.appid || (n.appid = this.options.appid),
                        n.callback = function(e) {
                            if (e) {
                                var n = e.body;
                                200 === Number(e.status) || 201 === Number(e.status) || 206 === Number(e.status) ? t.success && t.success(n, e.status) : t.error && t.error(e)
                            } else
                                t.error && t.error(e)
                        }
                        ,
                        n
                    },
                    randomName: function(e) {
                        return this._id + "_" + e + a++
                    },
                    getJSONP: function(t, n, i) {
                        var r, o = this.randomName("cb"), a = document.getElementsByTagName("head")[0], s = document.createElement("script"), c = (new Date).getTime();
                        r = (t = t.replace(/(=)\?(?=&|$)|\?\?/, "$1" + o)).replace(/([?&])_=[^&]*/, "$1_=" + c),
                        t = r + (r === t ? (/\?/.test(t) ? "&" : "?") + "_=" + c : ""),
                        e[o] = function(t) {
                            d.isFunction(n) && n(t),
                            setTimeout(function() {
                                e[o] = void 0,
                                a.removeChild(s)
                            }, 1)
                        }
                        ,
                        s.type = "text/javascript",
                        s.charset = i || "UTF-8",
                        s.src = t,
                        s.onerror = function(t) {
                            e[o]({
                                status: 500
                            })
                        }
                        ,
                        a.appendChild(s)
                    },
                    getMethod: function(e, t) {
                        var n = this.bridging(e)
                          , i = n.callback;
                        n.callback = "?",
                        t = d.url(t, n),
                        this.getJSONP(t, i)
                    },
                    getChallenge: function(t, n) {
                        s ? f("t", a) : f("t", a, c);
                        var i = this;
                        this.setCommonCookie(function() {
                            var r = {
                                callback: "?",
                                type: s ? 0 : 1
                            }
                              , o = d.url(i.options.url.challenge, r);
                            i.getJSONP(o, function(i) {
                                e.eval(i),
                                n.params = n.params || {},
                                !s && document._jv && (n.params._jv = document._jv),
                                t && t(n)
                            })
                        })
                    },
                    getChallengeWithoutCookieSet: function(t, n) {
                        var i = {
                            callback: "?",
                            type: s ? 0 : 1
                        }
                          , r = d.url(this.options.url.challenge, i);
                        this.getJSONP(r, function(i) {
                            e.eval(i),
                            n.params = n.params || {},
                            !s && document._jv && (n.params._jv = document._jv),
                            t && t(n)
                        })
                    },
                    createIFrame: function(e) {
                        var t;
                        return e = e || this.randomName("passportIframe"),
                        r.ie && r.ie < 9 ? t = document.createElement('<iframe src="about:blank" name="' + e + '"></iframe>') : (t = document.createElement("iframe")).setAttribute("name", e),
                        t.style.display = "none",
                        document.body.appendChild(t),
                        t
                    },
                    createForm: function(e, t) {
                        var n, i, r, o = document.createElement("form");
                        for (i in e)
                            r = e[i],
                            (n = document.createElement("input")).type = "hidden",
                            n.name = i,
                            n.value = r,
                            o.appendChild(n);
                        return o.style.display = "none",
                        t ? t.appendChild(o) : document.body.appendChild(o),
                        o
                    },
                    formData: function(e, t) {
                        var n = {};
                        for (var i in e)
                            e[i] && ("password" === i ? n.password = d.trim(e.password) : n[i] = d.trim(e[i]));
                        return n
                    },
                    ajax_post: function(t, n, i) {
                        var r = function(e) {
                            var t = [];
                            for (var n in e)
                                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                            return t.join("&")
                        }(n);
                        if (e.XMLHttpRequest)
                            var o = new XMLHttpRequest;
                        else
                            o = new ActiveXObject("Microsoft.XMLHTTP");
                        o.onreadystatechange = function() {
                            4 == o.readyState && i && i(JSON.parse(o.responseText))
                        }
                        ,
                        o.open("POST", t, !0),
                        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        o.withCredentials = !0,
                        o.send(r)
                    },
                    formToIFrame: function(e, t) {
                        var n;
                        e.nf = 1,
                        e.callback && (n = d.bind(e.callback, this)),
                        delete e.callback,
                        this.ajax_post(t, this.formData(e), n)
                    },
                    createIFrameQRCode: function(e) {
                        var t;
                        return e = e || this.randomName("passportIframe"),
                        r.ie && r.ie < 9 ? t = document.createElement('<iframe src="about:blank" name="' + e + '" width="150px" height="150px"></iframe>') : ((t = document.createElement("iframe")).setAttribute("name", e),
                        t.height = "150px",
                        t.width = "150px",
                        t.setAttribute("frameBorder", 0)),
                        t
                    },
                    getQRCode: function(e) {
                        var t = this
                          , n = {
                            success: function(n) {
                                n.qrurl = "https://usr.mb.hd.sohu.com/pc/getqr.json?qrtoken=cab088c91e9647599dd5dd5eca0bec1c&code=283ffbf7792f1565cbf5a3d927e48822",
                                n.qrtoken = "cab088c91e9647599dd5dd5eca0bec1c";
                                var i = t.createIFrameQRCode();
                                i.src = n.qrurl,
                                document.getElementById(e.params.id).appendChild(i),
                                t.queryQRCodeStatus()
                            },
                            error: function(e) {},
                            params: {
                                pagetoken: (new Date).getTime()
                            }
                        };
                        this.createQRCode(n)
                    },
                    createQRCode: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    queryQRCodeStatus: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    verifySecmobCaptcha: function(e) {
                        var t = this
                          , n = t.options.url.verifySecmobCaptcha + "/" + (e.params.appid || t.options.appid);
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    resetPassword: function(e) {
                        if (h("exp")) {
                            var t = this
                              , n = t.options.url.resetPassword;
                            t.formToIFrame(t.bridging(e), n)
                        }
                    },
                    updatePassword: function(e) {
                        var t = this
                          , n = t.options.url.updatePassword;
                        t.formToIFrame(t.bridging(e), n)
                    },
                    login: function(e) {
                        var t = this
                          , n = t.options.url.loginByUserId + "/" + (e.params.appid || t.options.appid);
                        e.params.password = d.md5(e.params.password),
                        e.params.captcha && (e.params.pagetoken = g),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    loginRequireCaptcha: function(e) {
                        this.getMethod(e, this.options.url.loginRequireCaptcha)
                    },
                    mobileLogin: function(e) {
                        var t = this
                          , n = t.options.url.mobileLogin + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    quickLogin: function(e) {
                        var t = this
                          , n = t.options.url.quickLogin + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getThirdLoginUrl: function(e) {
                        if ("weChat" === e.provider) {
                            var t = "";
                            return e.wxParams && (t = "&selfRedirect=" + (e.wxParams.self_redirect || "") + "&style=" + (e.wxParams.style || "") + "&href=" + (e.wxParams.href || "")),
                            "https://plus.sohu.com/spassport/bind/" + this.options.appid + "/wechat?ru=" + e.ru + (s ? "" : "&pua=true") + t
                        }
                        return "//passport.sohu.com/openlogin/request.action?provider=" + e.provider + "&appid=" + this.options.appid + "&ru=" + e.ru + (s ? "" : "&pua=true")
                    },
                    getWechatMPLoginUrl: function(e) {
                        return l.substring(0, l.length - 2) + "/oauth/loginurl?appid=" + this.options.appid + "&openkey=" + e.openkey + "&platform=wechat&ru=" + e.ru
                    },
                    logout: function(e) {
                        var t = this
                          , n = t.options.url.logout + "/" + t.options.appid;
                        t.getChallengeWithoutCookieSet(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getLoginPicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + g + "&random=" + this.randomName("sdk")
                    },
                    getPhonePicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + m + "&random=" + this.randomName("sdk")
                    },
                    getRegisterPicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + v + "&random=" + this.randomName("sdk")
                    },
                    getSignInCaptcha: function(e) {
                        e.params.pagetoken = m,
                        this.getMethod(e, this.options.url.signInCaptcha)
                    },
                    getRegisterCaptcha: function(e) {
                        e.params.pagetoken = v,
                        this.getMethod(e, this.options.url.registerCaptcha)
                    },
                    getNewRegisterCaptcha: function(e) {
                        e.params.pagetoken = v,
                        this.getMethod(e, this.options.url.newRegisterCaptcha)
                    },
                    getBindPhoneCaptcha: function(e) {
                        this.getMethod(e, this.options.url.bindPhoneCaptcha)
                    },
                    register: function(e) {
                        var t = this
                          , n = t.options.url.register + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    registerUp: function(e) {
                        var t = this
                          , n = t.options.url.registerUp + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    bindPhone: function(e) {
                        var t = this
                          , n = t.options.url.bindPhone + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    checkPhone: function(e) {
                        this.getMethod(e, this.options.url.checkPhone)
                    },
                    checkUserPhoneBind: function(e) {
                        var t = this.options.url.checkUserPhoneBind + "/" + this.options.appid;
                        this.getMethod(e, t)
                    },
                    passportLogin: function(e) {
                        var t = this
                          , n = t.options.url.passportLogin + "/" + t.options.appid;
                        e.params.password = d.md5(e.params.password),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    scanCodeLogin: function(e) {
                        var t = this
                          , n = t.options.url.scanCodeLogin + "/" + t.options.appid;
                        e.params.password = d.md5(e.params.password),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getPhoneCode: function(e) {
                        document.domain && "https://" + document.domain === u ? this.getMethod(e, u + "/i/mobile/phonecode") : this.getMethod(e, this.options.url.getPhoneCode)
                    },
                    getMobileCaptcha: function(e) {
                        e.params.pagetoken = m;
                        var t = this.options.url.getMobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    verifyMobileCaptcha: function(e) {
                        var t = this.options.url.verifyMobileCaptcha;
                        this.getMethod(e, t)
                    },
                    getSecmobileCaptcha: function(e) {
                        var t = this.options.url.getSecmobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    verifySecmobileCaptcha: function(e) {
                        var t = this.options.url.verifySecmobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    queryCertificateStaus: function(e) {
                        this.getMethod(e, this.options.url.queryCertificateStaus)
                    },
                    userCertificate: function(e) {
                        this.getMethod(e, this.options.url.userCertificate)
                    },
                    getAICaptcha: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    verifyAICaptcha: function(e) {
                        var t = this
                          , n = t.options.url.verifyAICaptcha;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    }
                },
                e.SohuPassport = t,
                t
            }
            ,
            e.exports ? e.exports = o(r) : void 0 === (i = function() {
                return o(r)
            }
            .call(t, n, t, e)) || (e.exports = i)
        }
        , function(e, t, n) {
            var i, r, o;
            r = window,
            o = function(e) {
                function t(e) {
                    var t = this;
                    e.onekeyId && (d.autoLoadScript("https://passportv4-web.bjcnc.scs.sohucs.com/crypto-js.min.js", function(e) {
                        t.cryptoLoaded = e
                    }),
                    d.autoLoadScript("https://www.cmpassport.com/h5/js/jssdk_auth/jssdk-1.0.0.min.js", function(e) {
                        t.ydrzLoaded = e
                    })),
                    this.options = d.extend({}, p, e || {}),
                    this._id = "passport" + o.replace(/\D/g, ""),
                    this.version = o,
                    this.appid = this.options.appid,
                    this.options.gidinf && this.options.serialno && (f("gidinf", this.options.gidinf),
                    f("srn", this.options.serialno)),
                    s ? f("t", a) : f("t", a, c),
                    this.setCommonCookie()
                }
                var n, i, r = (i = (n = e).opera ? opera.version().replace(/\d$/, "") - 0 : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]),
                {
                    ie: !!n.VBArray && Math.max(document.documentMode || 0, i),
                    firefox: !!n.netscape && i,
                    opera: !!n.opera && i,
                    chrome: !!n.chrome && i,
                    safari: /apple/i.test(navigator.vendor) && i
                }), o = "test", a = (new Date).getTime(), s = /\.sohu.com/.test(location.host), c = 2 == document.domain.split(".").length ? document.domain : document.domain.split(".").slice(document.domain.split(".").length - 2).join("."), l = r.ie && r.ie < 9 ? "https://tstm.passport.sohu.com/i/".replace("https", "http") : s ? "https://tstm.passport.sohu.com/i/" : "https://v4-passport.56.com/i/", u = "https://tstm.passport.sohu.com", p = {
                    appid: "",
                    url: {
                        commonCookie: l + "cookie/common",
                        challenge: l + "jf/code",
                        loginByUserId: l + "login",
                        loginRequireCaptcha: l + "login/require/captcha",
                        mobileLogin: l + "login/mobile",
                        quickLogin: l + "login/quick",
                        passportLogin: l + "login/passport",
                        scanCodeLogin: l + "login/token",
                        pictureCaptcha: l + "captcha/picture",
                        signInCaptcha: l + "smcode/mobile/signin",
                        registerCaptcha: l + "smcode/mobile/signup",
                        newRegisterCaptcha: l + "smcode/mobile/esignup",
                        bindPhoneCaptcha: l + "smcode/mobile/sblmobile",
                        logout: l + "logout",
                        register: l + "register",
                        registerUp: l + "register/v2",
                        bindPhone: l + "login/bind/mobile",
                        checkPhone: l + "verify/mobile/bind",
                        checkUserPhoneBind: l + "verify/user/mobile",
                        getPhoneCode: l + "mobile/phonecode",
                        getMobileCaptcha: l + "smcode/mobile/v2",
                        verifyMobileCaptcha: l + "verify/smcode/mobile",
                        getSecmobileCaptcha: l + "smcode/secmobile",
                        verifySecmobileCaptcha: l + "verify/smcode/secmobile",
                        queryCertificateStaus: l + "certificate/query/passport",
                        userCertificate: l + "certificate/create",
                        getAICaptcha: l + "captcha/npicture",
                        verifyAICaptcha: l + "captcha/nvalid",
                        resetPassword: l + "password/reset2",
                        updatePassword: l + "password/update2",
                        verifySecmobCaptcha: l + "login/security/secmob"
                    }
                }, d = {
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
                }, h = function(e) {
                    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(n)) ? unescape(t[2]) : null
                }, f = function(e, t, n) {
                    var i = new Date;
                    i.setTime(i.getTime() + 2592e6),
                    document.cookie = n ? e + "=" + escape(t) + ";domain=" + n + ";path=/;expires=" + i.toGMTString() : e + "=" + escape(t) + ";domain=sohu.com;path=/;expires=" + i.toGMTString()
                }, g = a + 1, m = a + 2, v = a + 3;
                return t.prototype = {
                    onekeyLogin: function(e) {
                        function t(e, t) {
                            var n, i, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
                            if (t = t || r.length,
                            e)
                                for (n = 0; n < e; n++)
                                    o[n] = r[0 | Math.random() * t];
                            else
                                for (o[8] = o[13] = o[18] = o[23] = "-",
                                o[14] = "4",
                                n = 0; n < 36; n++)
                                    o[n] || (i = 0 | 16 * Math.random(),
                                    o[n] = r[19 == n ? 3 & i | 8 : i]);
                            return o.join("")
                        }
                        function n(e, t) {
                            for (var n = String(e), i = t - n.length; i > 0; i--)
                                n = "0" + n;
                            return n
                        }
                        function i(n) {
                            var i = {
                                appid: a,
                                token: n.token,
                                traceid: t(32, 32),
                                userInformation: n.userInformation
                            };
                            s.quickLogin({
                                success: function(t, n) {
                                    e.success && e.success(t, n)
                                },
                                error: function(t) {
                                    e.error && e.error(t)
                                },
                                params: i
                            })
                        }
                        function r(t) {
                            e.getTokenError && e.getTokenError(t)
                        }
                        var o, a = this.appid, s = this, c = {
                            version: "2.0",
                            timestamp: (o = new Date,
                            n(o.getFullYear(), 4) + n(o.getMonth() + 1, 2) + n(o.getDate(), 2) + n(o.getHours(), 2) + n(o.getMinutes(), 2) + n(o.getSeconds(), 2) + n(o.getMilliseconds(), 3)),
                            appId: this.options.onekeyId,
                            appkey: this.options.onekeyKey,
                            onekeySwitchBackUrl: this.options.onekeySwitchBackUrl,
                            onekeySwitchBackInfo: this.options.onekeySwitchBackInfo,
                            businessType: "8",
                            openType: 1,
                            traceId: t(32, 32),
                            expandParams: "",
                            isTest: "",
                            authPageType: 3
                        }, l = 0;
                        !function e() {
                            if (s.cryptoLoaded && s.ydrzLoaded && CryptoJS && CryptoJS.MD5) {
                                var t = CryptoJS.MD5(c.appId + c.businessType + c.traceId + c.timestamp + c.traceId + c.version + c.appkey).toString();
                                c.onekeySwitchBackUrl && YDRZAuthLogin.authPageInit({
                                    customControlStyle: {
                                        ifShow: !0,
                                        width: "50%",
                                        height: "32px",
                                        high: "85%",
                                        left: "25%",
                                        url: c.onekeySwitchBackUrl,
                                        name: c.onekeySwitchBackInfo
                                    },
                                    returnBtnStyle: {
                                        width: "0.8rem",
                                        height: "1rem"
                                    }
                                }),
                                YDRZAuthLogin.getTokenInfo({
                                    data: {
                                        version: c.version,
                                        appId: c.appId,
                                        sign: t,
                                        traceId: c.traceId,
                                        timestamp: c.timestamp,
                                        openType: c.openType,
                                        expandParams: c.expandParams,
                                        isTest: c.isTest,
                                        authPageType: c.authPageType
                                    },
                                    success: i,
                                    error: r
                                })
                            }
                            ++l < 30 && setTimeout(e, 100)
                        }()
                    },
                    getNetType: function(e, t) {
                        var n = this
                          , i = 0;
                        !function r() {
                            if (n.cryptoLoaded && n.ydrzLoaded) {
                                var o = YDRZAuthLogin.getConnection(e);
                                t && t({
                                    netType: o.netType,
                                    platform: navigator.platform,
                                    userAgent: navigator.userAgent
                                })
                            } else
                                ++i < 30 && setTimeout(r, 100)
                        }()
                    },
                    setCommonCookie: function(e) {
                        if (s ? f("t", a) : f("t", a, c),
                        h("gidinf") && h("reqtype"))
                            e && e();
                        else {
                            var t = this.options.url.commonCookie
                              , n = {
                                callback: "?"
                            };
                            s || (n.domain = c),
                            t = d.url(t, n),
                            this.getJSONP(t, e)
                        }
                    },
                    bridging: function(e) {
                        var t = {
                            error: e.error,
                            success: e.success
                        }
                          , n = e.params || {};
                        return e.params && e.params.appid || (n.appid = this.options.appid),
                        n.callback = function(e) {
                            if (e) {
                                var n = e.body;
                                200 === Number(e.status) || 201 === Number(e.status) || 206 === Number(e.status) ? t.success && t.success(n, e.status) : t.error && t.error(e)
                            } else
                                t.error && t.error(e)
                        }
                        ,
                        n
                    },
                    randomName: function(e) {
                        return this._id + "_" + e + a++
                    },
                    getJSONP: function(t, n, i) {
                        var r, o = this.randomName("cb"), a = document.getElementsByTagName("head")[0], s = document.createElement("script"), c = (new Date).getTime();
                        r = (t = t.replace(/(=)\?(?=&|$)|\?\?/, "$1" + o)).replace(/([?&])_=[^&]*/, "$1_=" + c),
                        t = r + (r === t ? (/\?/.test(t) ? "&" : "?") + "_=" + c : ""),
                        e[o] = function(t) {
                            d.isFunction(n) && n(t),
                            setTimeout(function() {
                                e[o] = void 0,
                                a.removeChild(s)
                            }, 1)
                        }
                        ,
                        s.type = "text/javascript",
                        s.charset = i || "UTF-8",
                        s.src = t,
                        s.onerror = function(t) {
                            e[o]({
                                status: 500
                            })
                        }
                        ,
                        a.appendChild(s)
                    },
                    getMethod: function(e, t) {
                        var n = this.bridging(e)
                          , i = n.callback;
                        n.callback = "?",
                        t = d.url(t, n),
                        this.getJSONP(t, i)
                    },
                    getChallenge: function(t, n) {
                        s ? f("t", a) : f("t", a, c);
                        var i = this;
                        this.setCommonCookie(function() {
                            var r = {
                                callback: "?",
                                type: s ? 0 : 1
                            }
                              , o = d.url(i.options.url.challenge, r);
                            i.getJSONP(o, function(i) {
                                e.eval(i),
                                n.params = n.params || {},
                                !s && document._jv && (n.params._jv = document._jv),
                                t && t(n)
                            })
                        })
                    },
                    getChallengeWithoutCookieSet: function(t, n) {
                        var i = {
                            callback: "?",
                            type: s ? 0 : 1
                        }
                          , r = d.url(this.options.url.challenge, i);
                        this.getJSONP(r, function(i) {
                            e.eval(i),
                            n.params = n.params || {},
                            !s && document._jv && (n.params._jv = document._jv),
                            t && t(n)
                        })
                    },
                    createIFrame: function(e) {
                        var t;
                        return e = e || this.randomName("passportIframe"),
                        r.ie && r.ie < 9 ? t = document.createElement('<iframe src="about:blank" name="' + e + '"></iframe>') : (t = document.createElement("iframe")).setAttribute("name", e),
                        t.style.display = "none",
                        document.body.appendChild(t),
                        t
                    },
                    createForm: function(e, t) {
                        var n, i, r, o = document.createElement("form");
                        for (i in e)
                            r = e[i],
                            (n = document.createElement("input")).type = "hidden",
                            n.name = i,
                            n.value = r,
                            o.appendChild(n);
                        return o.style.display = "none",
                        t ? t.appendChild(o) : document.body.appendChild(o),
                        o
                    },
                    formData: function(e, t) {
                        var n = {};
                        for (var i in e)
                            e[i] && ("password" === i ? n.password = d.trim(e.password) : n[i] = d.trim(e[i]));
                        return n
                    },
                    ajax_post: function(t, n, i) {
                        var r = function(e) {
                            var t = [];
                            for (var n in e)
                                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                            return t.join("&")
                        }(n);
                        if (e.XMLHttpRequest)
                            var o = new XMLHttpRequest;
                        else
                            o = new ActiveXObject("Microsoft.XMLHTTP");
                        o.onreadystatechange = function() {
                            4 == o.readyState && i && i(JSON.parse(o.responseText))
                        }
                        ,
                        o.open("POST", t, !0),
                        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        o.withCredentials = !0,
                        o.send(r)
                    },
                    formToIFrame: function(e, t) {
                        var n;
                        e.nf = 1,
                        e.callback && (n = d.bind(e.callback, this)),
                        delete e.callback,
                        this.ajax_post(t, this.formData(e), n)
                    },
                    createIFrameQRCode: function(e) {
                        var t;
                        return e = e || this.randomName("passportIframe"),
                        r.ie && r.ie < 9 ? t = document.createElement('<iframe src="about:blank" name="' + e + '" width="150px" height="150px"></iframe>') : ((t = document.createElement("iframe")).setAttribute("name", e),
                        t.height = "150px",
                        t.width = "150px",
                        t.setAttribute("frameBorder", 0)),
                        t
                    },
                    getQRCode: function(e) {
                        var t = this
                          , n = {
                            success: function(n) {
                                n.qrurl = "https://usr.mb.hd.sohu.com/pc/getqr.json?qrtoken=cab088c91e9647599dd5dd5eca0bec1c&code=283ffbf7792f1565cbf5a3d927e48822",
                                n.qrtoken = "cab088c91e9647599dd5dd5eca0bec1c";
                                var i = t.createIFrameQRCode();
                                i.src = n.qrurl,
                                document.getElementById(e.params.id).appendChild(i),
                                t.queryQRCodeStatus()
                            },
                            error: function(e) {},
                            params: {
                                pagetoken: (new Date).getTime()
                            }
                        };
                        this.createQRCode(n)
                    },
                    createQRCode: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    queryQRCodeStatus: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    verifySecmobCaptcha: function(e) {
                        var t = this
                          , n = t.options.url.verifySecmobCaptcha + "/" + (e.params.appid || t.options.appid);
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    resetPassword: function(e) {
                        if (h("exp")) {
                            var t = this
                              , n = t.options.url.resetPassword;
                            t.formToIFrame(t.bridging(e), n)
                        }
                    },
                    updatePassword: function(e) {
                        var t = this
                          , n = t.options.url.updatePassword;
                        t.formToIFrame(t.bridging(e), n)
                    },
                    login: function(e) {
                        var t = this
                          , n = t.options.url.loginByUserId + "/" + (e.params.appid || t.options.appid);
                        e.params.password = d.md5(e.params.password),
                        e.params.captcha && (e.params.pagetoken = g),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    loginRequireCaptcha: function(e) {
                        this.getMethod(e, this.options.url.loginRequireCaptcha)
                    },
                    mobileLogin: function(e) {
                        var t = this
                          , n = t.options.url.mobileLogin + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    quickLogin: function(e) {
                        var t = this
                          , n = t.options.url.quickLogin + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getThirdLoginUrl: function(e) {
                        if ("weChat" === e.provider) {
                            var t = "";
                            return e.wxParams && (t = "&selfRedirect=" + (e.wxParams.self_redirect || "") + "&style=" + (e.wxParams.style || "") + "&href=" + (e.wxParams.href || "")),
                            "https://tstm.passport.sohu.com/spassport/bind/" + this.options.appid + "/wechat?ru=" + e.ru + (s ? "" : "&pua=true") + t
                        }
                        return "//tstm.passport.sohu.com/openlogin/request.action?provider=" + e.provider + "&appid=" + this.options.appid + "&ru=" + e.ru + (s ? "" : "&pua=true")
                    },
                    getWechatMPLoginUrl: function(e) {
                        return l.substring(0, l.length - 2) + "/oauth/loginurl?appid=" + this.options.appid + "&openkey=" + e.openkey + "&platform=wechat&ru=" + e.ru
                    },
                    logout: function(e) {
                        var t = this
                          , n = t.options.url.logout + "/" + t.options.appid;
                        t.getChallengeWithoutCookieSet(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getLoginPicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + g + "&random=" + this.randomName("sdk")
                    },
                    getPhonePicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + m + "&random=" + this.randomName("sdk")
                    },
                    getRegisterPicture: function() {
                        return this.options.url.pictureCaptcha + "?pagetoken=" + v + "&random=" + this.randomName("sdk")
                    },
                    getSignInCaptcha: function(e) {
                        e.params.pagetoken = m,
                        this.getMethod(e, this.options.url.signInCaptcha)
                    },
                    getRegisterCaptcha: function(e) {
                        e.params.pagetoken = v,
                        this.getMethod(e, this.options.url.registerCaptcha)
                    },
                    getNewRegisterCaptcha: function(e) {
                        e.params.pagetoken = v,
                        this.getMethod(e, this.options.url.newRegisterCaptcha)
                    },
                    getBindPhoneCaptcha: function(e) {
                        this.getMethod(e, this.options.url.bindPhoneCaptcha)
                    },
                    register: function(e) {
                        var t = this
                          , n = t.options.url.register + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    registerUp: function(e) {
                        var t = this
                          , n = t.options.url.registerUp + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    bindPhone: function(e) {
                        var t = this
                          , n = t.options.url.bindPhone + "/" + t.options.appid;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    checkPhone: function(e) {
                        this.getMethod(e, this.options.url.checkPhone)
                    },
                    checkUserPhoneBind: function(e) {
                        var t = this.options.url.checkUserPhoneBind + "/" + this.options.appid;
                        this.getMethod(e, t)
                    },
                    passportLogin: function(e) {
                        var t = this
                          , n = t.options.url.passportLogin + "/" + t.options.appid;
                        e.params.password = d.md5(e.params.password),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    scanCodeLogin: function(e) {
                        var t = this
                          , n = t.options.url.scanCodeLogin + "/" + t.options.appid;
                        e.params.password = d.md5(e.params.password),
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    },
                    getPhoneCode: function(e) {
                        document.domain && "https://" + document.domain === u ? this.getMethod(e, u + "/i/mobile/phonecode") : this.getMethod(e, this.options.url.getPhoneCode)
                    },
                    getMobileCaptcha: function(e) {
                        e.params.pagetoken = m;
                        var t = this.options.url.getMobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    verifyMobileCaptcha: function(e) {
                        var t = this.options.url.verifyMobileCaptcha;
                        this.getMethod(e, t)
                    },
                    getSecmobileCaptcha: function(e) {
                        var t = this.options.url.getSecmobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    verifySecmobileCaptcha: function(e) {
                        var t = this.options.url.verifySecmobileCaptcha + "/" + e.params.captchaType;
                        this.getMethod(e, t)
                    },
                    queryCertificateStaus: function(e) {
                        this.getMethod(e, this.options.url.queryCertificateStaus)
                    },
                    userCertificate: function(e) {
                        this.getMethod(e, this.options.url.userCertificate)
                    },
                    getAICaptcha: function(e) {
                        this.getMethod(e, this.options.url.getAICaptcha)
                    },
                    verifyAICaptcha: function(e) {
                        var t = this
                          , n = t.options.url.verifyAICaptcha;
                        t.getChallenge(function(e) {
                            t.formToIFrame(t.bridging(e), n)
                        }, e)
                    }
                },
                e.SohuPassport = t,
                t
            }
            ,
            e.exports ? e.exports = o(r) : void 0 === (i = function() {
                return o(r)
            }
            .call(t, n, t, e)) || (e.exports = i)
        }
        , function(e, t, n) {
            (function(t) {
                var i = n(15)
                  , r = n(11)
                  , o = n(12)
                  , a = new (r.extend({
                    init: function() {
                        this.baseUrl = {
                            test: "//test-uis.mp.sohu.com",
                            pre: "//pre-uis.mp.sohu.com",
                            prod: "//uis.mp.sohu.com"
                        }[i],
                        this.defaultDevice = "MPTCFEPCUSER",
                        this.defaultAppid = "100018"
                    },
                    login: function(e) {
                        var n = e && e.successFun || function() {}
                          , i = e && e.failureFun || function() {}
                          , r = e && e.device || this.defaultDevice
                          , o = {
                            appId: e && e.appId || this.defaultAppid,
                            device: r,
                            loginSide: e && e.loginSide || 3
                        };
                        t.ajax({
                            url: this.baseUrl + "/v3/uc/login",
                            type: "post",
                            data: JSON.stringify(o),
                            dataType: "json",
                            contentType: "application/json;charset=UTF-8",
                            xhrFields: {
                                withCredentials: !0
                            },
                            success: function(e) {
                                try {
                                    e && 1 == e.code ? n(e.data) : i(e.data)
                                } catch (e) {
                                    i(e)
                                }
                            },
                            error: function(e) {
                                i(e)
                            }
                        })
                    },
                    getUserInfo: function(e) {
                        var n = e.successFun
                          , i = e.failureFun
                          , r = {
                            appId: this.defaultAppid,
                            device: this.defaultDevice
                        };
                        t.ajax({
                            url: this.baseUrl + "/v3/uc/user/info",
                            type: "get",
                            data: r,
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            },
                            success: function(e) {
                                n(e)
                            },
                            error: function(e) {
                                i(e)
                            }
                        })
                    },
                    checkLogin: function(e) {
                        var n = e.successFun
                          , i = e.failureFun
                          , r = {
                            appId: this.defaultAppid,
                            device: this.defaultDevice
                        }
                          , o = this;
                        this.getUserInfo({
                            successFun: function(e) {
                                e && 1 == e.code ? n(e) : !e || 200001 != e.code && 200002 != e.code && 200003 != e.code && 200006 != e.code && 200007 != e.code ? i(e) : t.ajax({
                                    url: o.baseUrl + "/v3/uc/refresh/token",
                                    type: "get",
                                    data: r,
                                    dataType: "json",
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    success: function(e) {
                                        e && e.data && 1 == e.data.code ? n(e.data) : i(e.data)
                                    },
                                    error: function(e) {
                                        i(e)
                                    }
                                })
                            },
                            failureFun: function(e) {
                                i(e)
                            }
                        })
                    },
                    getUnreadNum: function(e) {
                        var n = e && e.successFun || function() {}
                          , i = e && e.failureFun || function() {}
                        ;
                        const r = {
                            appId: this.defaultAppid
                        };
                        t.ajax({
                            url: this.baseUrl + "/wap/api/message/unread_count",
                            type: "get",
                            data: r,
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            },
                            success: function(e) {
                                n(e)
                            },
                            error: function(e) {
                                i(e)
                            }
                        })
                    },
                    syncBrowseHistory: async function() {
                        const e = o.getItem("articleBrowseHistory");
                        e && t.ajax({
                            url: this.baseUrl + "/wap/personal/browse/add",
                            type: "post",
                            data: JSON.stringify(e),
                            dataType: "json",
                            contentType: "application/json;charset=UTF-8",
                            xhrFields: {
                                withCredentials: !0
                            },
                            success: function(e) {
                                e && e.data && o.removeItem("articleBrowseHistory")
                            },
                            error: function(e) {}
                        })
                    }
                }));
                e.exports = a
            }
            ).call(this, n(5))
        }
        , function(e, t, n) {
            (function(t, i, r) {
                n(20);
                var o = n(13)
                  , a = n(18);
                const {checkPhoneNumber: s, checkCaptcha: c} = n(22);
                var l = t.View.extend({
                    template: i.template(n(23)),
                    events: {
                        "click [data-role='login-close']": "close",
                        "click [data-role='body-shade']": "close",
                        "click [data-role='radio-protocol']": "set_protocol",
                        'click [data-role="user-captcha"] img': "getUserCaptcha",
                        'click [data-role="mobilenum-captcha"] img': "getPictureCaptcha",
                        'blur [data-role="user-secret"]': "blur_pwd",
                        'blur [data-role="user-passport"]': "blur_pwd",
                        'focus [data-role="user-secret"]': "hover_pwd",
                        'focus [data-role="user-passport"]': "hover_pwd",
                        'blur [data-role="mobilenum"]': "blur_pwd",
                        'blur [data-role="mobilenum-captcha"] input': "blur_pwd",
                        'focus [data-role="mobilenum"]': "hover_pwd",
                        'focus [data-role="mobilenum-captcha"] input': "hover_pwd",
                        'keydown [data-role="user-secret"]': "chk_key",
                        'keydown [data-role="user-passport"]': "chk_key",
                        "click [data-login]": "thirdLogin",
                        'click [data-role="submit-user"]': "submitUser",
                        'click [data-role="submit-mobile"]': "submitMobile",
                        'click [data-role="dynamic-get"]': "getMobileDynamic",
                        'click [data-role="yuyin-close"]': "closeYuin",
                        'click [data-role="yuyin-send"]': "sendYuin",
                        'click [data-role="account-login"]': "userLoginModel",
                        'click [data-role="mobile-login"]': "mobileLoginModel",
                        "click .pw-txt": "hover_pwd",
                        'click [data-role="bind-dynamic"]': "getBindDynamic",
                        'click [data-role="bind-yuyin"]': "getBindYuyin",
                        'click [data-role="submit-bind"]': "submitBind"
                    },
                    isAllowProtocol: !1,
                    needUserCaptcha: !1,
                    needMobileCaptcha: !1,
                    mobileDynamic: !0,
                    bindDynamic: !0,
                    login_success_callback: [],
                    initialize: function(e) {
                        var t = this;
                        if (this.model = n(10),
                        this.cfgs = r.extend(this.cfgs, e.cfgs),
                        this.placeholderSupported = this.placeholderSupported(),
                        this.$el.append(this.template(this.placeholderSupported)),
                        this.$shade_el = r('[data-role="body-shade"]'),
                        this.$login_el = r('[data-role="login-pop"]'),
                        this.$bind_el = r('[data-role="bind-pop"]'),
                        this.model.on("get:userInfo", function(e) {
                            t.user_info = e
                        }),
                        this.login_success_callback.push(function() {
                            a.syncBrowseHistory()
                        }),
                        this.model.isOkey() && this.bindMobile(),
                        this.model.isThirdLogin()) {
                            var i = o.get("thirdLoginSide");
                            this.thirdLoginSide = {
                                qq: 10,
                                sina: 2,
                                weChat: 9
                            }[i],
                            this.syncUcenter(this.thirdLoginSide)
                        }
                    },
                    syncUcenter: function(e=3) {
                        var t = this;
                        a.login({
                            loginSide: e,
                            successFun: function(e) {
                                o.remove("thirdLoginSide"),
                                t.successFn(e),
                                t.$el.trigger("login:success", e)
                            },
                            failureFun: function(n) {
                                t.sendAction({
                                    acode: 10025,
                                    param: `source:${e};type:ucenter;status:${n && n.code};message:${n && n.msg};body:${n && n.data};url:${window.location.href}`
                                }),
                                t.clearLoginCookie()
                            }
                        })
                    },
                    userLoginModel: function() {
                        this.$el.find(".err-info").hide(),
                        r("[data-role='mobile-box']").hide(),
                        this.$el.find(".account").hide(),
                        this.$el.find(".mobile").show(),
                        r("[data-role='user-box']").show()
                    },
                    getUserCaptcha: function() {
                        var e = this.model.userCaptcha();
                        this.$el.find('[data-role="user-captcha"]').find("img").replaceWith("<img class='captcha-pic' src=" + e + ">")
                    },
                    submitUser: function() {
                        this.submit(!0)
                    },
                    showCaptcha: function(e, t) {
                        e ? (this.$el.find('[data-role="user-captcha"]').show(),
                        t && this.$el.find('[data-role="user-captcha"]').find("img").attr("src", t)) : this.$el.find('[data-role="user-captcha"]').hide()
                    },
                    mobileLoginModel: function() {
                        this.$el.find(".err-info").hide(),
                        r("[data-role='user-box']").hide(),
                        this.$el.find(".mobile").hide(),
                        this.$el.find('[data-role="mobilenum-captcha"]').find("img").attr("src") || this.getPictureCaptcha(),
                        this.$el.find(".account").show(),
                        r("[data-role='mobile-box']").show()
                    },
                    getPictureCaptcha: function() {
                        var e = this.model.pictureCaptcha();
                        this.$el.find('[data-role="mobilenum-captcha"]').find("img").replaceWith("<img class='captcha-pic' src=" + e + ">")
                    },
                    getMobileDynamic: function(e, t) {
                        var n = this;
                        this.$el.find(".err-info").hide();
                        var i = this.$el.find('[data-role="mobilenum"]').removeClass("error").val()
                          , r = this.$el.find('[data-role="mobilenum-captcha"] input').removeClass("error").val();
                        if (!i)
                            return this.showErrorInfo("请输入手机号"),
                            this.$el.find('[data-role="mobilenum"]').addClass("error"),
                            !1;
                        if (this.needMobileCaptcha && !r)
                            return this.showErrorInfo("请输入图形验证码"),
                            r = this.$el.find('[data-role="mobilenum-captcha"] input').addClass("error"),
                            !1;
                        if (!this.mobileDynamic)
                            return this.showErrorInfo("获取验证码太频繁，请稍后再试"),
                            !1;
                        var o = t ? 1 : 0
                          , a = {
                            captchaType: "signin",
                            mobile: i,
                            way: o,
                            captcha: r,
                            success: function(e, t) {
                                n.getDynamicSuccess(e, t)
                            },
                            error: function(e) {
                                n.getDynamicError(e),
                                n.sendAction({
                                    acode: 10664,
                                    param: `source:getMobileDynamic;type:passport;way:${o};status:${e.status};message:${e.message};body:${e.body};url:${window.location.href}`
                                })
                            }
                        };
                        return this.model.getMobileCaptcha(a),
                        !1
                    },
                    getDynamicSuccess: function(e, t) {
                        this.mobileDynamic = !1;
                        var n = this
                          , i = 59
                          , r = this.$el.find('[data-role="dynamic-get"]');
                        r.removeClass("dynamic-btn-click"),
                        r.html("60s重新获取");
                        var o = setInterval(function() {
                            if (0 == i)
                                return r.html("获取验证码"),
                                r.addClass("dynamic-btn-click"),
                                n.mobileDynamic = !0,
                                void clearInterval(o);
                            i < 10 && i > 0 ? r.html("0" + i + "s重新获取") : r.html(i + "s重新获取"),
                            i--
                        }, 1e3)
                    },
                    closeYuin: function() {
                        return this.$el.find(".safe-hint").hide(),
                        !1
                    },
                    sendYuin: function() {
                        return o.get("ppok") && "none" != r(".safe-hint").css("display") ? this.getBindDynamic(null, !0) : (this.mobileDynamic = !0,
                        this.getMobileDynamic(null, !0)),
                        this.closeYuin(),
                        !1
                    },
                    submitMobile: function() {
                        this.submit(!1)
                    },
                    successFn: function(e) {
                        if (this.login_success_callback) {
                            for (var t = 0; t < this.login_success_callback.length; t++)
                                !function(t) {
                                    setTimeout(function() {
                                        t(e)
                                    }, 0)
                                }(this.login_success_callback[t]);
                            this.login_success_callback = []
                        }
                        this.close(null, !0)
                    },
                    showErrorInfo: function(e) {
                        this.$el.find(".err-info").text(e).show()
                    },
                    closeErrorInfo: function() {
                        this.$el.find(".err-info").hide()
                    },
                    chk_key: function(e) {
                        13 == e.keyCode && this.submitUser()
                    },
                    hover_pwd: function(e) {
                        if (!this.placeholderSupported) {
                            var t = r(e.target).attr("data-role");
                            "user-passport" == t || "user-secret" == t || "mobilenum" == t || "mobilenum-tip" == t ? r(e.target).siblings(".pw-txt").hide() : r(e.target).hide().siblings("input").focus()
                        }
                    },
                    blur_pwd: function(e) {
                        this.placeholderSupported || "" == e.target.value && r(e.target).siblings(".pw-txt").show()
                    },
                    clearLoginCookie: function() {
                        o.remove("ppinf", {
                            domain: "sohu.com",
                            path: "/"
                        }),
                        o.remove("pprdig", {
                            domain: "sohu.com",
                            path: "/"
                        }),
                        o.remove("umab_user_id", {
                            domain: "sohu.com",
                            path: "/"
                        }),
                        o.remove("umab_access_token", {
                            domain: "sohu.com",
                            path: "/"
                        }),
                        o.remove("umab_refresh_token", {
                            domain: "sohu.com",
                            path: "/"
                        })
                    },
                    submit: function(e) {
                        var t = this;
                        if (this.$el.find(".err-info").hide(),
                        this.clearLoginCookie(),
                        e) {
                            var n = this.$el.find('[data-role="user-passport"]').removeClass("error").val()
                              , i = this.$el.find('[data-role="user-secret"]').removeClass("error").val()
                              , r = this.$el.find('[data-role="user-captcha"] input').removeClass("error").val();
                            if (!n)
                                return this.$el.find('[data-role="user-passport"]').addClass("error"),
                                void this.showErrorInfo("请输入账号");
                            if (!i)
                                return this.$el.find('[data-role="user-secret"]').addClass("error"),
                                void this.showErrorInfo("请输入密码");
                            if (this.needUserCaptcha && !r)
                                return r = this.$el.find('[data-role="user-captcha"] input').addClass("error"),
                                void this.showErrorInfo("请输入图形验证码");
                            if (!this.isAllowProtocol) {
                                const e = document.getElementById("remindProtocol");
                                e && (e.style.visibility = "visible");
                                const t = setTimeout( () => {
                                    e && (e.style.visibility = "hidden"),
                                    clearTimeout(t)
                                }
                                , 3e3);
                                return
                            }
                            this.sendAction({
                                acode: 10020,
                                param: "source:account"
                            });
                            var o = {
                                userid: n,
                                password: i,
                                keep: 1,
                                captcha: r,
                                success: function(e, n) {
                                    n && 200 == n ? t.syncUcenter(3) : (t.sendAction({
                                        acode: 10025,
                                        param: `source:account;type:passport;status:${e && e.code};message:${e && e.msg};body:${e && e.data};url:${window.location.href}`
                                    }),
                                    t.clearLoginCookie())
                                },
                                error: function(e) {
                                    t.userErrorFn(e),
                                    t.sendAction({
                                        acode: 10025,
                                        param: `source:account;type:passport;status:${e.status};message:${e.message};body:${e.body};url:${window.location.href}`
                                    }),
                                    t.clearLoginCookie()
                                }
                            };
                            this.$el.find('[data-role="user-captcha"] input').val(""),
                            this.model.userLogin(o)
                        } else {
                            var a = this.$el.find('[data-role="mobilenum"]').removeClass("error").val()
                              , l = this.$el.find('[data-role="mobilenum-dynamic"]').removeClass("error").val();
                            if (!s(a))
                                return this.$el.find('[data-role="mobilenum"]').addClass("error"),
                                void this.showErrorInfo("请输入正确的手机号");
                            if (!c(l))
                                return this.$el.find('[data-role="mobilenum-dynamic"]').addClass("error"),
                                void this.showErrorInfo("请输入正确的手机验证码");
                            if (!this.isAllowProtocol) {
                                const e = document.getElementById("remindProtocol");
                                e && (e.style.visibility = "visible");
                                const t = setTimeout( () => {
                                    e && (e.style.visibility = "hidden"),
                                    clearTimeout(t)
                                }
                                , 3e3);
                                return
                            }
                            this.sendAction({
                                acode: 10020,
                                param: "source:mobile"
                            }),
                            o = {
                                mobile: a,
                                smcode: l,
                                keep: 1,
                                success: function() {
                                    t.syncUcenter(4)
                                },
                                error: function(e) {
                                    t.mobileErrorFn(e),
                                    t.sendAction({
                                        acode: 10025,
                                        param: `source:mobile;type:passport;status:${e.status};message:${e.message};body:${e.body};url:${window.location.href}`
                                    }),
                                    t.clearLoginCookie()
                                }
                            },
                            this.model.mobileLogin(o)
                        }
                    },
                    thirdLogin: function(e) {
                        var t = r(e.currentTarget).data("login")
                          , n = this.model.getThirdLoginUrl({
                            provider: t,
                            ru: encodeURIComponent(window.location)
                        });
                        return window.location.href = n,
                        o.set("thirdLoginSide", t, 36e5),
                        !1
                    },
                    set_protocol: function(e) {
                        r("[data-role='protocol']").find(".radio-icon").toggleClass("radio-icon-sel"),
                        this.isAllowProtocol = !this.isAllowProtocol
                    },
                    render: function() {},
                    is_login: function() {
                        return this.model.isLogin()
                    },
                    login: function(e) {
                        this.login_success_callback = this.login_success_callback || [],
                        e && this.login_success_callback.push(e),
                        this.mobileLoginModel(),
                        this.$shade_el.show(),
                        this.$login_el.show(),
                        window.sohuSpm && "function" == typeof window.sohuSpm.domDidChange && window.sohuSpm.domDidChange()
                    },
                    bindMobile: function() {
                        this.$shade_el.show(),
                        this.$bind_el.show()
                    },
                    close: function(e, t) {
                        this.$login_el.hide(),
                        this.$shade_el.hide(),
                        this.$bind_el.hide(),
                        t || (this.login_success_callback = [],
                        this.$el.trigger("login:cancel"))
                    },
                    placeholderSupported: function() {
                        return "placeholder"in document.createElement("input")
                    },
                    getUserInfo: function(e) {
                        this.user_info ? "function" == typeof e && e(this.user_info) : (this.get_user_info_cbs = this.get_user_info_cbs || [],
                        "function" == typeof e && this.get_user_info_cbs.push(e))
                    },
                    excFnList: function(e, t) {
                        e.forEach(function(e) {
                            setTimeout(function() {
                                e(t)
                            }, 0)
                        })
                    },
                    getBindDynamic: function(e, t) {
                        var n = this;
                        this.$el.find(".err-info").hide();
                        var i = this.$el.find('[data-role="bind-mobile"]').removeClass("error").val();
                        if (!i)
                            return this.showErrorInfo("请输入手机号"),
                            this.$el.find('[data-role="bind-mobile"]').addClass("error"),
                            !1;
                        if (!this.bindDynamic)
                            return this.showErrorInfo("获取验证码太频繁，请稍后再试"),
                            !1;
                        var r = {
                            mobile: i,
                            way: t ? 1 : 0,
                            success: function(e, t) {
                                n.bindDynamicSuccess(e, t)
                            },
                            error: function(e) {
                                n.bindDynamicError(e),
                                n.sendAction({
                                    acode: 10664,
                                    param: `source:getBindDynamic;type:passport;status:${e.status};message:${e.message};body:${e.body};url:${window.location.href}`
                                })
                            }
                        };
                        return this.model.getBindPhoneCaptcha(r),
                        !1
                    },
                    bindDynamicSuccess: function() {
                        this.bindDynamic = !1;
                        var e = this
                          , t = 59
                          , n = this.$el.find('[data-role="bind-dynamic"]');
                        n.removeClass("dynamic-btn-click"),
                        n.html("60s重新获取");
                        var i = setInterval(function() {
                            if (0 == t)
                                return n.html("获取验证码"),
                                n.addClass("dynamic-btn-click"),
                                e.bindDynamic = !0,
                                void clearInterval(i);
                            t < 10 && t > 0 ? n.html("0" + t + "s重新获取") : n.html(t + "s重新获取"),
                            t--
                        }, 1e3)
                    },
                    getBindYuyin: function() {
                        return this.bindDynamic = !0,
                        this.getBindDynamic(null, !0),
                        !1
                    },
                    submitBind: function() {
                        var e = this;
                        this.$el.find(".err-info").hide();
                        var t = this.$el.find('[data-role="bind-mobile"]').removeClass("error").val()
                          , n = this.$el.find('[data-role="bind-input"]').removeClass("error").val();
                        if (!t)
                            return this.showErrorInfo("请输入手机号"),
                            this.$el.find('[data-role="bind-mobile"]').addClass("error"),
                            !1;
                        if (!n)
                            return this.showErrorInfo("请输入手机验证码"),
                            this.$el.find('[data-role="bind-input"]').addClass("error"),
                            !1;
                        this.sendAction({
                            acode: 10024
                        });
                        var i = {
                            mobile: t,
                            smcode: n,
                            success: function() {
                                e.syncUcenter(this.thirdLoginSide)
                            },
                            error: function(t) {
                                e.bindError(t),
                                e.sendAction({
                                    acode: 10025,
                                    param: `source:bindPhone;type:passport;status:${t.status};message:${t.message};body:${t.body};url:${window.location.href}`
                                })
                            }
                        };
                        return this.model.bindPhone(i),
                        !1
                    },
                    userErrorFn: function(e) {
                        switch (e.status) {
                        case 400:
                            this.showErrorInfo("服务错误，请刷新页面再试");
                            break;
                        case 404:
                            this.showErrorInfo("用户名或密码错误");
                            break;
                        case 420:
                            this.showErrorInfo("图形验证码输入错误");
                            var t = this.model.userCaptcha();
                            this.needUserCaptcha = !0,
                            this.showCaptcha(!0, t);
                            break;
                        case 423:
                            this.showErrorInfo("账号未设置密码，请通过手机动态码登录"),
                            this.mobileLoginModel();
                            break;
                        case 450:
                            this.showErrorInfo("用户名或密码不能为空");
                            break;
                        case 453:
                            this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");
                            break;
                        case 461:
                            this.showErrorInfo("账号未绑定手机号"),
                            this.mobileLoginModel();
                            break;
                        case 465:
                            this.showErrorInfo("请输入图形验证码后登录"),
                            t = this.model.userCaptcha(),
                            this.needUserCaptcha = !0,
                            this.showCaptcha(!0, t);
                            break;
                        default:
                            this.showErrorInfo("发生未知错误，请稍后再试")
                        }
                    },
                    getDynamicError: function(e) {
                        switch (e.status) {
                        case 400:
                            this.showErrorInfo("非法请求，请刷新页面再试"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha();
                            break;
                        case 420:
                            this.showErrorInfo("图形验证码输入错误"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha();
                            break;
                        case 421:
                            this.showErrorInfo("验证码发送次数过多，请稍后再试"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha();
                            break;
                        case 450:
                            this.showErrorInfo("手机号与图形验证码不能为空"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.$el.find('[data-role="mobilenum-captcha"]').show(),
                            this.getPictureCaptcha();
                            break;
                        case 461:
                            this.showErrorInfo("请输入正确的手机号"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha();
                            break;
                        case 465:
                            this.showErrorInfo("为保证账号安全，请输入图形验证码后再获取验证码"),
                            this.needMobileCaptcha = !0,
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.$el.find('[data-role="mobilenum-captcha"]').show(),
                            this.getPictureCaptcha();
                            break;
                        case 474:
                            this.showErrorInfo("请通过语音验证码方式登录"),
                            this.$el.find(".safe-hint").show();
                            break;
                        case 482:
                            this.showErrorInfo("操作超时，请稍后再试"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha();
                            break;
                        default:
                            this.showErrorInfo("服务器繁忙，请稍后再试"),
                            this.$el.find('[data-role="mobilenum-captcha"] input').val(""),
                            this.getPictureCaptcha()
                        }
                    },
                    mobileErrorFn: function(e) {
                        switch (e.status) {
                        case 400:
                            this.showErrorInfo("服务错误，请刷新页面再试");
                            break;
                        case 427:
                            this.showErrorInfo("该手机号已经绑定多个账号，无法注册");
                            break;
                        case 422:
                            this.showErrorInfo("手机动态码输入错误");
                            break;
                        case 42201:
                            this.showErrorInfo("手机动态码不存在或已过期"),
                            this.mobileLoginModel();
                            break;
                        case 450:
                            this.showErrorInfo("手机号或动态码不能为空");
                            break;
                        case 453:
                            this.showErrorInfo("多次登录失败，账号已被封锁，请一小时后再试");
                            break;
                        default:
                            this.showErrorInfo("发生未知错误，请稍后再试")
                        }
                    },
                    bindDynamicError: function(e) {
                        switch (e.status) {
                        case 400:
                            this.showErrorInfo("非法请求，请刷新页面再试");
                            break;
                        case 421:
                            this.showErrorInfo("手机动态码发送次数过多，请稍后再试");
                            break;
                        case 450:
                            this.showErrorInfo("手机号不能为空");
                            break;
                        case 461:
                            this.showErrorInfo("请输入正确的手机号");
                            break;
                        case 474:
                            this.showErrorInfo("请通过语音验证码方式登录"),
                            this.$el.find(".safe-hint").show();
                            break;
                        default:
                            this.showErrorInfo("服务器繁忙，请稍后再试")
                        }
                    },
                    bindError: function(e) {
                        switch (e.status) {
                        case 427:
                            this.showErrorInfo("该手机号已经绑定多个账号，无法注册");
                            break;
                        case 422:
                            this.showErrorInfo("手机动态码输入错误");
                            break;
                        case 42201:
                            this.showErrorInfo("手机动态码不存在或已过期");
                            break;
                        case 450:
                            this.showErrorInfo("手机号不能为空");
                            break;
                        case 462:
                            this.showErrorInfo("当前账号已经绑定过登录手机");
                            break;
                        case 482:
                            this.showErrorInfo("操作超时，请稍后重试");
                            break;
                        default:
                            this.showErrorInfo("服务器繁忙，请稍后再试")
                        }
                    },
                    sendAction: function(e) {
                        window.sohuSpm && "function" == typeof window.sohuSpm.sendAction && window.sohuSpm.sendAction({
                            acode: e.acode,
                            clkParam: e.param
                        })
                    }
                });
                e.exports = new l({
                    el: "body"
                })
            }
            ).call(this, n(2), n(4), n(5))
        }
        , function(e, t, n) {
            var i = n(21);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            n(9)(i, {
                insert: "body"
            }),
            i.locals && (e.exports = i.locals)
        }
        , function(e, t, n) {
            (t = n(8)(!1)).push([e.i, '/* pop-layer */\n.body-shade {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  filter: alpha(opacity=50);\n  opacity: 0.5;\n  z-index: 120;\n}\n.pop-layer {\n  z-index: 130;\n  color: #333;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 418px;\n  background: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.pop-layer a {\n  color: #333;\n}\n.pop-layer a:hover {\n  color: #FDD000;\n}\n.pop-layer .title {\n  height: 64px;\n  box-shadow: inset 0px -1px 0px 0px rgba(235, 235, 235, 0.5);\n  font-size: 18px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #111111;\n  line-height: 64px;\n  padding-left: 24px;\n}\n.pop-layer .close-pop {\n  position: absolute;\n  top: 22px;\n  right: 20px;\n  display: block;\n  width: 20px;\n  height: 20px;\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_close_empty6@2x.png");\n  background-size: 20px 20px;\n}\n.pop-layer a:hover.close-pop {\n  background-position: 0 -20px;\n}\n.pop-layer .err-info {\n  height: 16px;\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #F43640;\n  line-height: 16px;\n  margin-top: 8px;\n  position: absolute;\n}\n.pop-layer .login {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 24px 40px 0px 40px;\n}\n.pop-layer .login ul {\n  overflow: hidden;\n}\n.pop-layer .login li {\n  height: 48px;\n  margin-top: 16px;\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.pop-layer .login li:first-child {\n  margin-top: 0px;\n}\n.pop-layer .login li input {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0px 14px 0px 14px;\n  background: #F8F8F8;\n  vertical-align: top;\n  float: left;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  color: #111111;\n  font-weight: 400;\n  border: 0;\n  outline: 0;\n}\n.pop-layer .login li input::-webkit-input-placeholder {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n}\n.pop-layer .login li input::-moz-placeholder {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n}\n.pop-layer .login li input::-ms-input-placeholder {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n}\n.pop-layer .login li input::placeholder {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n}\n.pop-layer .login li.short input {\n  width: 212px;\n}\n.pop-layer .login li.short img {\n  padding-left: 0;\n  float: right;\n  padding-top: 5px;\n}\n.pop-layer .login li input:focus {\n  border-color: #FDD000;\n  color: #111111;\n}\n.pop-layer .login li input.error {\n  border: 1px solid #FB1515;\n}\n.pop-layer .login li input.code-input-log {\n  width: 179px;\n}\n.pop-layer .login .close-btn {\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  background: #CACACA;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 1;\n}\n.pop-layer .login .gain-code {\n  position: absolute;\n  top: 9px;\n  right: 10px;\n  color: #FDD000;\n  font-size: 16px;\n  line-height: 30px;\n}\n.pop-layer .login .veri-code-img {\n  float: right;\n}\n.pop-layer .login .pw-txt {\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  color: #999999;\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  line-height: 1;\n}\n.pop-layer .remind-protocol {\n  height: 32px;\n  padding: 8px 12px;\n  box-sizing: border-box;\n  background: #333333;\n  font-size: 12px;\n  font-family: PingFangSC, PingFang SC;\n  font-weight: 400;\n  color: #FFFFFF;\n  line-height: 16px;\n  position: absolute;\n  bottom: 24px;\n  left: -8px;\n}\n.pop-layer .remind-protocol::after {\n  content: \'\';\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  bottom: -4px;\n  background: #333333;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: 10px;\n}\n.pop-layer .auto-login {\n  font-size: 14px;\n  line-height: 16px;\n  height: 16px;\n  position: relative;\n  margin: 8px 40px 0px 40px;\n}\n.pop-layer .radio-btn {\n  cursor: pointer;\n  font-size: 0;\n  height: 16px;\n  display: flex;\n  align-items: center;\n}\n.pop-layer .radio-icon {\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  background: url(//statics.itc.cn/mptc-mpfe/img/icon_right_empty6@2x.png) no-repeat;\n  background-size: 12px 12px;\n  margin: 2px 8px 2px 0px;\n  display: inline-block;\n  position: relative;\n}\n.pop-layer .radio-icon::after {\n  content: "";\n  position: absolute;\n  top: -10px;\n  bottom: -15px;\n  left: -30px;\n  right: -150px;\n}\n.pop-layer .radio-icon-sel {\n  background-position: 0 -20px;\n  border: 2px solid #CCCCCC;\n  box-sizing: border-box;\n}\n.pop-layer .radio-btn span {\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n  display: inline-block;\n  height: 16px;\n  line-height: 16px;\n  overflow: hidden;\n}\n.pop-layer .radio-btn a {\n  height: 16px;\n  font-size: 12px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 400;\n  color: #999999;\n  line-height: 16px;\n  text-decoration: underline;\n  margin: 0px 2px;\n}\n.pop-layer .agreement {\n  margin-top: 10px;\n  font-size: 14px;\n  line-height: 16px;\n  height: 16px;\n}\n.pop-layer .agreement a {\n  color: #FDD000;\n}\n.pop-layer .back-link {\n  position: absolute;\n  right: 0px;\n  height: 100%;\n  display: block;\n  margin-right: 14px;\n  color: #111111;\n  font-size: 14px;\n  line-height: 48px;\n  text-align: center;\n}\n.pop-layer .back-link:hover {\n  color: #666666;\n}\n.pop-layer .login-btn {\n  margin-top: 56px;\n}\n.pop-layer .login-btn .login-bn {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500;\n  color: #111111;\n  background: #FFD100;\n  cursor: pointer;\n  vertical-align: top;\n  text-align: center;\n  border: 0;\n}\n.pop-layer .login-btn .login-bn:hover {\n  background: #FFE561;\n}\n.pop-layer .third {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 32px;\n  height: 80px;\n  background: #F8F8F8;\n  padding: 28px 40px;\n}\n.pop-layer .third .other-way {\n  font-size: 14px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #666666;\n  height: 24px;\n  line-height: 24px;\n  vertical-align: top;\n}\n.pop-layer .third ul {\n  display: inline-block;\n}\n.pop-layer .third li {\n  position: relative;\n  float: left;\n  text-align: center;\n  margin-left: 12px;\n}\n.pop-layer .third li:first-child {\n  margin-left: 16px;\n}\n.pop-layer .third li:hover .remind-pop {\n  visibility: visible;\n}\n.pop-layer .third li a {\n  display: block;\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n}\n.pop-layer .third li .remind-pop {\n  visibility: hidden;\n  position: absolute;\n  top: -42px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 32px;\n  background: #333333;\n  box-sizing: border-box;\n  padding: 8px 12px;\n  font-size: 12px;\n  font-family: PingFangSC-Regular, PingFang SC;\n  font-weight: 400;\n  color: #FFFFFF;\n  line-height: 16px;\n  white-space: nowrap;\n}\n.pop-layer .third li .remind-pop::after {\n  content: \'\';\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  bottom: -4px;\n  background: #333333;\n  -webkit-transform: translateX(-50%) rotate(45deg);\n          transform: translateX(-50%) rotate(45deg);\n  left: 50%;\n}\n.pop-layer .third .sinat a {\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_weibo3@2x.png");\n  background-size: 24px 24px;\n}\n.pop-layer .third .wx a {\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_wechat3@2x.png");\n  background-size: 24px 24px;\n}\n.pop-layer .third .qq a {\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_qq3@2x.png");\n  background-size: 24px 24px;\n}\n.pop-layer .third .account a {\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_mail@2x.png");\n  background-size: 24px 24px;\n}\n.pop-layer .third .mobile a {\n  background: url("//statics.itc.cn/mptc-mpfe/img/icon_phone@2x.png");\n  background-size: 24px 24px;\n}\n.register-menu {\n  height: 33px;\n  padding: 40px 0 0;\n  width: 340px;\n  margin: 0 auto;\n}\n.register-menu li {\n  float: left;\n  width: 50%;\n  font-size: 20px;\n  line-height: 24px;\n  height: 28px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.register-menu li:last-child {\n  border-left: 2px #E8E8E8 solid;\n}\n.register-menu li .mail-reg {\n  background-position: 0 -30px;\n}\n.register-menu .now .phone-reg {\n  background-position: 0 -60px;\n}\n.register-menu .now .mail-reg {\n  background-position: 0 -90px;\n}\n.register-menu .now {\n  color: #FDD000;\n}\n.pop-layer .login .user-del:hover {\n  background-position: 0 -30px;\n}\n.pop-layer .history-user {\n  position: absolute;\n  top: 45px;\n  left: 0;\n  z-index: 100;\n  border: 1px #E7E7E7 solid;\n  width: 310px;\n  background: #fff;\n}\n.pop-layer .history-user dd {\n  height: 42px;\n  font-size: 14px;\n  line-height: 42px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n.pop-layer .history-user .history-user-del:hover {\n  background-position: 0 -20px;\n}\n.pop-layer .history-user dd:hover {\n  background: #F5F5F5;\n}\n.pop-layer .history-user dd:hover .history-user-del {\n  display: block;\n}\n.pop-layer .login .dynamic-code {\n  background: #F8F8F8;\n}\n.pop-layer .login .dynamic-code .dynamic-input {\n  width: 200px;\n}\n.pop-layer .login .dynamic-code .dynamic-btn {\n  height: 100%;\n  display: block;\n  float: right;\n  margin-right: 14px;\n  color: #999999;\n  font-size: 14px;\n  line-height: 48px;\n  text-align: center;\n  pointer-events: none;\n}\n.pop-layer .login .dynamic-code .dynamic-btn-click {\n  color: #111111;\n  cursor: pointer;\n  pointer-events: auto;\n}\n.pop-layer .login .dynamic-code .dynamic-btn-click:hover {\n  color: #666666;\n}\n.safe-hint {\n  display: none;\n  border: 1px #E7E7E7 solid;\n  background: #fff;\n  width: 372px;\n  height: 222px;\n  padding-top: 46px;\n  border-radius: 5px;\n  position: absolute;\n  top: 120px;\n  left: 78px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin: -100px 0 0 -186px;\n  z-index: 140;\n  box-shadow: 0 3px 3px rgba(231, 231, 231, 0.6);\n}\n.safe-tt {\n  text-align: center;\n  font-size: 18px;\n  color: #666;\n  height: 30px;\n  line-height: 30px;\n}\n.safe-tt .safe-icon {\n  width: 27px;\n  height: 29px;\n  background: url("//statics.itc.cn/mptc-mpfe/img/safe_icon.png");\n  margin-right: 9px;\n}\n.safe-hint .safe-info {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  padding: 19px 41px 0;\n}\n.safe-hint .safe-btn {\n  padding-top: 27px;\n  text-align: center;\n}\n.safe-hint .safe-btn a {\n  height: 45px;\n  border-radius: 4px;\n  background: #ECECEC;\n  color: #666;\n  text-align: center;\n  display: inline-block;\n  width: 110px;\n  font-size: 14px;\n  line-height: 45px;\n  margin: 0 5px;\n}\n.safe-hint .safe-btn a:hover {\n  background: #d4d4d4;\n  color: #666;\n}\n.safe-hint .safe-btn .btn-send {\n  color: #2f2f2f;\n  width: 180px;\n  background: #FDD000;\n}\n.safe-hint .safe-btn .btn-send:hover {\n  background: #F0C402;\n}\n.safe-pop {\n  padding-bottom: 40px;\n}\n.safe-pop .err-info {\n  padding: 20px 0px 0px 40px;\n}\n.safe-title {\n  padding-top: 44px;\n}\n.safe-title p {\n  font-size: 16px;\n  width: 100%;\n  line-height: 26px;\n  padding: 17px 0px 0px 40px;\n}\n.pop-layer .dynamic-hint {\n  font-size: 14px;\n  line-height: 18px;\n  padding-top: 6px;\n}\n.pop-layer .dynamic-hint a {\n  color: #FDD000;\n}\n.pop-layer .dynamic-hint a:hover {\n  color: #F0C402;\n}\n.pop-layer .captcha-pic {\n  cursor: pointer;\n}\n', ""]),
            e.exports = t
        }
        , function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, "checkPhoneNumber", function() {
                return i
            }),
            n.d(t, "checkCaptcha", function() {
                return r
            });
            const i = function(e) {
                return /^[1-9]\d{10}$/.test(e)
            }
              , r = function(e) {
                return /^\d{6}$/.test(e)
            }
        }
        , function(e, t) {
            e.exports = '<div data-role="body-shade" class="body-shade" style="display:none;"></div>\n<div data-role="login-pop" class="pop-layer login-pop" style="display:none;" data-spm="loginpop">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n    </a>\n    \x3c!-- 用户名登陆 --\x3e\n    <div data-role="user-box">\n        <div class="title">\n            邮箱账号登录\n        </div>\n        <div class="login user-login">\n            <ul>\n                <li><input type="text"  data-role="user-passport" class="user-input" placeholder="请输入邮箱" autocomplete="username" id="username"/>\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="passport-tip">请输入邮箱</span>\n                    <%}%>\n                </li>\n                <li>\n                    <input type="password" value="" data-role="user-secret" id="password" placeholder="请输入密码" autocomplete="current-password" name="username"/>\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="pw-tip">请输入密码</span>\n                    <%}%>\n                    <a href="https://v4.passport.sohu.com/fe/forgetPassword" target="_blank" class="back-link">忘记密码</a>\n                </li>\n                <li class="short" data-role="user-captcha" style="display:none">\n                    <input type="text" value="" placeholder="请输入图形验证码" />\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="mo-captcha">请输入图形验证码</span>\n                    <%}%>\n                    <img class="captcha-pic">\n                </li>\n            </ul>\n            <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n            <div class="login-btn">\n                <input data-role="submit-user" type="button" class="login-bn" value="登录" />\n            </div>\n        </div>\n    </div>\n    \x3c!-- 手机号登陆 --\x3e\n    <div data-role="mobile-box">\n        <div class="title">\n            手机号验证码登录\n        </div>\n        <div class="login mobile-login">\n            <ul>\n                <li>\n                    <input type="text" data-role="mobilenum" class="user-input" placeholder="请输入手机号">\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="mo-phone">请输入手机号</span>\n                    <%}%>\n                    \x3c!-- <a href="#" target="_blank" class="user-del"></a> --\x3e\n                </li>\n                <li class="short" data-role="mobilenum-captcha" style="display: none;">\n                    <input type="text" value="" data-role="mobilenum-tip" placeholder="请输入图形验证码">\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="mo-captcha">请输入图形验证码</span>\n                    <%}%>\n                    <img class="captcha-pic">\n                </li>\n                <li class="dynamic-code">\n                    <input data-role="mobilenum-dynamic" type="text" value="" class="dynamic-input" placeholder="请输入手机验证码">\n                    <% if(!this.placeholderSupported){%>\n                    <span class="pw-txt" data-role="mobilenum-dynamic">请输入手机验证码</span>\n                    <%}%>\n                    <a data-role="dynamic-get" href="javascript:void(0)" target="_blank" class="dynamic-btn dynamic-btn-click" data-spm-acode="8082">获取验证码</a>\n                </li>\n            </ul>\n            <div class="err-info" style="display:none"></div>\n            <div class="login-btn">\n                <input data-role="submit-mobile" type="button" class="login-bn" data-spm-acode="8083" value="登录/注册">\n            </div>\n        </div>\n    </div>\n    \x3c!--用户协议与隐私政策--\x3e\n    <div class="auto-login">\n        <span class="radio-btn" data-role="protocol">\n            <em data-role="radio-protocol" class="radio-icon radio-icon-sel" ></em>\n            <span class="normal-text">我已阅读并同意搜狐网</span>\n            <a class="link-text" href="//m.sohu.com/ucenter/WapService?isHideNav=true" target="_blank">用户服务协议</a>\n            <span class="normal-text">和</span>\n            <a class="link-text" href="https://www.sohu.com/xchannel/TURBd01EQXdNekky" target="_blank">隐私政策</a>\n        </span>\n        <span class="remind-protocol" id="remindProtocol" style="visibility: hidden;">\n            需阅读并勾选同意\n        </span>\n    </div>\n    \x3c!-- 第三方登陆 --\x3e\n    <div class="third">\n        <span class="other-way">其他方式</span>\n        <ul>\n            <li class="wx">\n                <a data-login="weChat" href="javascript:void(0)" data-spm-acode="8086"></a>\n                <div class="remind-pop">微信登录</div>\n            </li>\n            <li class="qq">\n                <a data-login="qq" href="javascript:void(0)" data-spm-acode="8084"></a>\n                <div class="remind-pop">qq登录</div>\n            </li>\n            <li class="sinat">\n                <a data-login="sina" href="javascript:void(0)" data-spm-acode="8085"></a>\n                <div class="remind-pop">微博登录</div>\n            </li>\n            <li class="account">\n                <a href="javascript:void(0)" data-role="account-login" data-spm-acode="8087" data-spm-click-pm="loginMode:account"></a>\n                <div class="remind-pop">账号密码登录</div>\n            </li>\n            <li class="mobile">\n                <a href="javascript:void(0)" data-role="mobile-login" data-spm-acode="8087" data-spm-click-pm="loginMode:mobile"></a>\n                <div class="remind-pop">手机号验证码登录</div>\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div data-role="bind-pop" class="pop-layer safe-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n    </a>\n    <div class="safe-title">\n        <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n        <p>为保证您的账户安全，建议您绑定手机号码</p>\n    </div>\n    <div class="err-info" style="display:none">请输入正确的登录账号或密码</div>\n    <div class="login">\n        <ul>\n            <li>\n                <input type="text" data-role="bind-mobile" class="user-input" placeholder="请输入手机号">\n            </li>\n            <li class="dynamic-code">\n                <input data-role="bind-input" type="text" value="" class="dynamic-input" placeholder="">\n                <a data-role="bind-dynamic" href="#" target="_blank" class="dynamic-btn dynamic-btn-click">获取动态码</a>\n            </li>\n        </ul>\n        <div class="dynamic-hint">收不到短信验证码？点击获取 <a data-role="bind-yuyin" href="#" target="_blank">语音验证码</a></div>\n        <div class="login-btn"><input data-role="submit-bind" type="button" class="login-bn" value="确定"></div>\n    </div>\n</div>\n\n\x3c!-- 语音验证提示 --\x3e\n<div class="safe-hint">\n    <div class="safe-tt"><i class="icon safe-icon"></i>安全提示</div>\n    <div class="safe-info">系统出于安全考虑，在点击“发送语音验证码”后，您将会收到一条来自950开头号码的语音验证码，请注意接听。</div>\n    <div class="safe-btn"><a data-role="yuyin-close" href="#" target="_blank" class="btn-send-no">暂不发送</a><a data-role="yuyin-send" href="#" target="_blank" class="btn-send">发送语音验证码</a></div>\n</div>\n\n<div data-role="register-pop" class="pop-layer register-pop" style="display:none;">\n    <a href="javascript:void(0)" data-role="login-close" class="close-pop">\n    </a>\n    <div class="register-menu">\n        <ul>\n            <li class="now"><em class="phone-reg"></em>手机注册</li>\n            <li><em class="mail-reg"></em>邮箱注册</li>\n        </ul>\n    </div>\n    <div class="login">\n        <ul>\n            <li><input type="text" value="手机号码" class="phone-input" /><a href="#" target="_blank" class="close-btn"></a></li>\n            <li><input type="text" value="设置密码" /><a href="#" target="_blank" class="keyboard"></a></li>\n            <li><input type="text" value="验证码" class="code-input" /><a href="#" target="_blank" class="gain-code">获取验证码</a></li>\n        </ul>\n        <div class="agreement"><span class="radio-btn radio-btn-clk"><input type="radio" /></span>同意<a href="#" target="_blank">《搜狐服务协议》</a></div>\n        <div class="login-btn"><input type="button" class="login-bn" value="立即注册" /></div>\n        <div class="login-oper"><a href="#" target="_blank" class="back-link">使用已有账号登录</a></div>\n    </div>\n</div>'
        }
        , function(e, t, n) {
            (function(t) {
                var i = n(13).get("SUV")
                  , r = {
                    action_id: {
                        sohuhao: "10220422",
                        ucenter_article: "10220423",
                        ucenter_index: "10220424",
                        ucenter_channel: "10220425",
                        ucenter_head: "10220447",
                        colloetion: "10220426",
                        information: "10220427",
                        safety: "10220428",
                        my_comment: "10220413",
                        comment_zan: "10220416",
                        comment_from: "10220417",
                        comment_remove: "10220421",
                        my_reply: "10220414",
                        reply_zan: "10220415",
                        reply_from: "10220420",
                        reply_reply: "10220418",
                        reply_reply_succ: "10220419"
                    },
                    trigger: function(e) {
                        var n = "//pv.sohu.com/action.gif?actionId=" + e + "&SUV=" + i;
                        t.getScript(n, function() {})
                    }
                };
                e.exports = r
            }
            ).call(this, n(5))
        }
        , function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, "getQueryArgs", function() {
                return i
            });
            const i = function(e) {
                const t = {}
                  , n = e.trim()
                  , i = n && n.split("?")[1]
                  , r = i && i.split("&") || [];
                for (const e of r) {
                    const [n,i] = e.split("=")
                      , r = decodeURIComponent(n)
                      , o = decodeURIComponent(i);
                    t[r] = o
                }
                return t
            }
        }
        , function(e, t) {
            e.exports = ' <div class="login article-login">\n <%if(object && object.nick){%>\n    <span class="login-after">\n        <a href="<%= ucenterUrl %> " target="_blank" class="user my-ucenter">\n            <img class="login-avatar" src="<%=object.icon%>" alt="用户头像">\n            <%if(Number(noticeNum) > 0){%>\n                <span class="num"><%= noticeNum %></span>\n            <%}%>\n        </a>\n        <div class="login-layer">\n            <div class="user-name"><%=object.nick%></div>\n            <div class="divide-line"></div>\n            <a class="my-center item" href="<%= ucenterUrl %>" target="_blank">\n                <span class="icon user"></span>\n                <span class="text">个人中心</span>\n            </a>\n            <a class="quit item" href="javascript:void(0)" target="" data-role="logout-btn">\n                <span class="icon quit"></span>\n                <span class="text">退出</span>\n            </a>\n        </div>\n    </span>\n\n    <%}else{%>\n    <a href="javascript:void(0)"  data-role="login-btn" class="login-sohu">登录</a>\n    <%}%>\n </div>\n\n'
        }
        , function(e, t) {
            e.exports = '<%if(object && object.nick){%>\n    <span class="login-after">\n        <a href="<%= ucenterUrl %>" target="_blank" class="user my-user">\n            <img src="<%=object.icon%>" alt="">\n            <%if(Number(noticeNum) > 0){%>\n                <span class="num"><%= noticeNum %></span>\n            <%}%>\n            <span class="user-name"><em class="name"><%=object.nick%></em></span>\n        </a>\n        <div class="login-layer">\n            <a href="<%= ucenterUrl %>" target="_blank" class="my-center">个人中心\n            </a>\n            <a href="javascript:void(0)" target="" class="quit" data-role="logout-btn">退出</a>\n        </div>\n    </span>\n<%}else{%>\n    <span class="login-before" data-spm-acode="8074"><a href="javascript:void(0)"  data-role="login-btn" class="login-sohu"><i class="icon-user"></i>登录</a></span>\n<%}%>'
        }
        ])
    }
}]);
//# sourceMappingURL=pc-login-8fc5953d81.js.map
