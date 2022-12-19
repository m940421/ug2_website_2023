var ddmenuOptions = {
    menuId: "ddmenu",
    linkIdToMenuHtml: "ddmenuLink",
    open: "onmouseover", // or "onclick"
    delay: 50,
    speed: 400,
    keysNav: true,
    license: "6c0l68"
};

var ddmenu = new Ddmenu(ddmenuOptions);

/* Menucool Drop Down Menu v2015.10.26 Copyright www.menucool.com */
function Ddmenu(k) {
    "use strict";
    var p = function(a, b) {
            return a.getElementsByTagName(b)
        },
        o = navigator,
        F = function(a, c) {
            if (typeof getComputedStyle != "undefined") var b = getComputedStyle(a, null);
            else if (a.currentStyle) b = a.currentStyle;
            else b = a.style;
            return b[c]
        },
        s = function(a) {
            if (a && a.stopPropagation) a.stopPropagation();
            else if (window.event) window.event.cancelBubble = true
        },
        gb = function(b) {
            var a = b ? b : window.event;
            if (a.preventDefault) a.preventDefault();
            else if (a) a.returnValue = false
        },
        i, e, w, g = document,
        m = "className",
        a = "length",
        A = "addEventListener",
        mb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        B = "offsetWidth",
        C = "zIndex",
        j = "onclick",
        b = [],
        y = -1,
        l = 0,
        H = function(a) {
            if (l) l[e][w] = a ? "block" : "none"
        },
        f, ob, c, h = function() {
            return c && c[B]
        },
        r = function(a, c, b) {
            if (a[A]) a[A](c, b, false);
            else a.attachEvent && a.attachEvent("on" + c, b)
        },
        E = function(a, b) {
            if (b) K(a, "over");
            else J(a, "over");
            a[e][C] = b ? 2 : 1
        },
        cb = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        T = (o.msPointerEnabled || o.pointerEnabled) && (o.msMaxTouchPoints || o.maxTouchPoints);
    if (T)
        if (o.msPointerEnabled) var O = "MSPointerOver",
            P = "MSPointerOut";
        else {
            O = "pointerover";
            P = "pointerout"
        }
    var n = function(e) {
            for (var c = p(g, "li"), b = 0, f = c[a]; b < f; b++)
                if (d(c[b], "over")) e != c[b] && E(c[b], 0);
            H(e)
        },
        lb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        nb = function(a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        eb = function() {
            var c = 50,
                b = o.userAgent,
                a;
            if ((a = b.indexOf("MSIE ")) != -1) c = parseInt(b.substring(a + 5, b.indexOf(".", a)));
            return c
        },
        X = function() {
            f = {
                a: k.license,
                b: k.menuId,
                d: k.delay,
                e: k.linkIdToMenuHtml,
                f: k.speed,
                g: k.open.toLowerCase(),
                h: k.keysNav
            }
        },
        t = eb(),
        z = function(e) {
            var b = e.childNodes,
                d = [];
            if (b)
                for (var c = 0, f = b[a]; c < f; c++) b[c].nodeType == 1 && d.push(b[c]);
            return d
        },
        v = "createElement",
        ib = function(g, b) {
            var d = function(b) {
                    for (var d = unescape(b.substr(0, b[a] - 1)), f = b.substr(b[a] - 1, 1), e = "", c = 0; c < d[a]; c++) e += String.fromCharCode(d.charCodeAt(c) - f);
                    return unescape(e)
                },
                c = Math.random(),
                e = d(nb(document.domain)),
                f = "%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%3";
            if (L(b + c)[a] % (e[a] + 1) > 8) try {
                b = (new Function("$", "_", "e", "a", "b", "c", L(f, c[a]))).apply(this, [e, b, c, d, g, v])
            } catch (h) {}
        },
        q = function(a, b) {
            return b ? g[a](b) : g[a]
        },
        L = function(e, b) {
            for (var d = [], c = 0; c < e[a]; c++) d[d[a]] = String.fromCharCode(e.charCodeAt(c) - (b && b > 7 ? b : 3));
            return d.join("")
        },
        hb = function(b, d) {
            var c = b[a];
            while (c--)
                if (b[c] === d) return true;
            return false
        },
        d = function(a, c) {
            var b = false;
            if (a[m]) b = hb(a[m].split(" "), c);
            return b
        },
        K = function(a, b) {
            if (!d(a, b))
                if (a[m] == "") a[m] = b;
                else a[m] += " " + b
        },
        J = function(d, f) {
            if (d[m]) {
                for (var e = "", c = d[m].split(" "), b = 0, g = c[a]; b < g; b++)
                    if (c[b] !== f) e += c[b] + " ";
                d[m] = e.replace(/^\s+|\s+$/g, "")
            }
        },
        Y = function(e) {
            if (!h())
                for (var c = 0, f = b[a]; c < f; c++)
                    if (e != b[c].a && d(b[c].a, "over")) return 1;
            return 0
        },
        M = function(a) {
            return a.pointerType == a.MSPOINTER_TYPE_MOUSE || a.pointerType == "mouse"
        },
        S = function(b) {
            var a = this;
            a.a = b;
            a.b = null;
            a.k()
        },
        V = function(a) {
            this.a(a);
            this.b(a)
        };
    S.prototype = {
        l: function(b) {
            var a = this;
            clearTimeout(a.b);
            if (b) {
                a.f();
                H(1)
            } else a.b = setTimeout(function() {
                a.f()
            }, Y(a.a) ? 0 : f.d)
        },
        f: function() {
            E(this.a, 1);
            if (!h() && F(this.a, "position") == "static") this.a.dd[e].top = this.a.offsetTop + this.a.offsetHeight + "px";
            else this.a.dd[e].top = ""
        },
        g: function() {
            var a = this;
            clearTimeout(a.b);
            a.b = setTimeout(function() {
                E(a.a, 0)
            }, f.d + 50)
        },
        i: function(g) {
            if (t < 9) {
                var b = z(g),
                    c = b[a];
                if (c) {
                    b = z(b[0]);
                    c = b[a];
                    if (c) {
                        var f = b[c - 1];
                        if (d(f, "column")) f[e].borderRight = "none"
                    }
                }
            }
        },
        j: function(b) {
            var a = this;
            s(b);
            if (d(a.a, "over")) {
                a.g();
                !h() && H(0)
            } else a.c(b)
        },
        k: function() {
            var c = this,
                b = this.a,
                g = z(b),
                k = g[a];
            if (t < 7)
                if (d(g[0], "top-heading")) g[0][e].zoom = 1;
            while (k--)
                if (d(g[k], "dropdown")) var i = g[k];
            if (i) {
                d(g[0], "top-heading") && g[0].setAttribute("aria-haspopup", "true");
                c.i(i);
                b.dd = i;
                b.setAttribute("tabindex", 0);
                if (d(b, "full-width")) i[e][C] = 2;
                i[j] = s;
                if (f.g == j) b[j] = function(a) {
                    c.j(a)
                };
                else if (T) {
                    b[j] = function(a) {
                        if (h()) c.j(a);
                        else s(a)
                    };
                    r(b, O, function(a) {
                        if (!h())
                            if (M(a)) c.l(a);
                            else {
                                s(a);
                                c.c(a)
                            }
                    });
                    r(b, P, function(a) {
                        !h() && M(a) && c.g()
                    })
                } else {
                    b[j] = function(a) {
                        c.j(a)
                    };
                    b.onmouseover = function() {
                        !h() && !l && c.l(0)
                    };
                    b.onmouseout = function() {
                        !h() && !l && c.g()
                    }
                }
            } else {
                b.onmouseover = function() {
                    K(this, "over")
                };
                b.onmouseout = function() {
                    J(this, "over")
                }
            }
        },
        c: function() {
            !h() && n(this.a);
            this.l(1)
        }
    };
    V.prototype = {
        a: function(a) {
            ib(a, f.a)
        },
        b: function(j) {
            if (cb && /(iPad|iPhone|iPod)/g.test(o.userAgent)) {
                l = q(v, "div");
                j.insertBefore(l, j.childNodes[0]);
                var d = l[e];
                d.position = "fixed";
                d.left = d.right = d.bottom = d.top = "0px";
                d[w] = "none";
                d[C] = -1
            }
            if (!G) {
                r(g, "click", function() {
                    n(0)
                });
                r(window, "resize", function() {
                    var a = h();
                    if (y != a)
                        if (y == -1) y = a;
                        else {
                            y = a;
                            n(0)
                        }
                })
            }
            for (var p = z(j), m = 0, s = p[a]; m < s; m++) p[m].nodeName == "LI" && b.push(new S(p[m]));
            (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", function(d) {
                for (var c = [], b = 0, e = d[a]; b < e; b++) c[c[a]] = String.fromCharCode(d.charCodeAt(b) - 4);
                return c.join("")
            }("jyrgxmsr$N,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/e,}_6a-/}_4a/e,}_5a-/e,}_4a-\u0081jyrgxmsr$O,-zev$tAQexl_g,+yhukvt+-a,-?mj,tB2:-zev$uAk,g,+jylh{l[l{Uvkl+-0g,+kktlu|'{yphs'}lyzpvu+--0vAm_oa0wAv_oa?mj,tB2=-wAk,+fsh}+-?mj,tB2<-w_oa_g,+puzly{Ilmvyl+-a,u0w-?ipwi$w_g,+puzly{Ilmvyl+-a,u0v-\u0081\u0081?mj,j-j2wx}pi2~Mrhi|Am2~m|/5?zev$qAe2e\u0080\u0080+::+0rAtevwiMrx,q2glevEx,4--\u0080\u0080:0zAk,g,+kvthpu+--?mj,z2pirkxl@8\u0080\u0080z2vitpegi,z2wpmgi,5015-0++-AA+px+-zev$sAq?ipwi$sAN,r/+g+0z2vitpegi,h_r16a0l_r16a-2wtpmx,++--?s2mrhi|Sj,q-AA15**O,-?mj,f-f2srgpmgoAjyrgxmsr,-mj,i,-**q%As-O,-\u0081"))).apply(this, [f, l, L, lb, h, c, q, mb, j, 0, i]);
            !G && f.h && k.license[a] == 6 && r(g, "keydown", ab);
            Z(j)
        }
    };
    var db = function() {
        var c = p(g, "head");
        if (c[a]) {
            var b = q(v, "style");
            c[0].appendChild(b);
            return b.sheet ? b.sheet : b.styleSheet
        } else return 0
    };

    function Z(d) {
        if (typeof d[e].webkitAnimationName != "undefined") var c = "-webkit-";
        else if (typeof d[e].animationName != "undefined") c = "";
        else return;
        var h = "@" + c + "keyframes ddFadeIn {from{opacity:0;} to{opacity:1;}}",
            i = "#" + f.b + " li.over .dropdown {" + c + "animation: ddFadeIn " + f.f + "ms;}";
        if (g.styleSheets && g.styleSheets[a]) {
            var b = db();
            if (b && b.insertRule) {
                b.insertRule(i, 0);
                b.insertRule(h, 0)
            }
        }
    }
    var N;

    function ab(e) {
        var j = e.which || e.keyCode;
        if (!/^(37|38|39|40|27|9)$/.test(j)) return;
        var h = g.activeElement;
        if (h == c && t > 8 && j == 9 && e.shiftKey) {
            x();
            return
        }
        for (var f = 0; f < b[a]; f++)
            if (h == c || h == b[f].a || d(b[f].a, "over") || h[i] == b[f].a) {
                if (j != 9) {
                    gb(e);
                    s(e)
                }
                break
            }
        clearTimeout(N);
        N = setTimeout(function() {
            jb(e, j)
        }, 10)
    }

    function u(c, b, e) {
        b = b + e;
        if (b < 0) b = c[a] - 1;
        if (b >= c[a]) b = 0;
        if (c[b].a.getAttribute("tabindex") != null) {
            c[b].a.focus();
            D(c[b], c[b].a)
        } else {
            var d = p(c[b].a, "a");
            if (d[a]) {
                d[0].focus();
                D(c[b], c[b].a)
            } else u(c, b, e)
        }
    }

    function bb(b, a) {
        return !a || a.nodeType != 1 ? 0 : a[i] == b ? 1 : a[i] && a[i][i] == b ? 1 : 0
    }

    function D(a) {
        n(0);
        a.l(1)
    }

    function x() {
        d(c, "menu-icon-active") && c[j]()
    }

    function jb(s, e) {
        var f = g.activeElement;
        if (f == c) {
            if (e == 9) !d(c, "menu-icon-active") && c[j]();
            if (e == 27) {
                x();
                c.blur()
            }
            e == 40 && u(b, -1, 1);
            return
        }
        var h = -1;
        if (f)
            for (var m = 0; m < b[a]; m++)
                if (f == b[m].a || d(b[m].a, "over") || f[i] == b[m].a) {
                    h = m;
                    break
                }
        if (h != -1) {
            var l = b[h].a;
            if (e == 27) {
                n(0);
                l.blur();
                x();
                return
            }
            if (e == 37) u(b, h, -1);
            else if (e == 39) u(b, h, 1);
            else {
                var o = p(l, "a"),
                    k = -1;
                if (!o[a]) return;
                for (var q = 0; q < o[a]; q++)
                    if (f == o[q]) {
                        k = q;
                        break
                    }
                if (e == 38) k--;
                else if (e == 40 && k < o[a] - 1) k++;
                else if (e == 9) {
                    if (f && !d(l, "over")) D(b[h], l);
                    else if (k == -1 && f != l)
                        if (bb(l[i], f)) {
                            if (t < 9) var r = 1;
                            else r = s.shiftKey ? -1 : 1;
                            u(b, h, r)
                        } else {
                            n(0);
                            x()
                        }
                    return
                }
                k >= 0 && o[k].focus()
            }
        }
    }
    var W = function(b) {
            var a;
            if (window.XMLHttpRequest) a = new XMLHttpRequest;
            else a = new ActiveXObject("Microsoft.XMLHTTP");
            a.onreadystatechange = function() {
                if (a.readyState == 4 && a.status == 200) {
                    var d = a.responseText,
                        f = /^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;
                    if (f.test(d)) d = d.replace(f, "$1");
                    var c = q(v, "div");
                    c[e].padding = c[e].margin = "0";
                    b[i].insertBefore(c, b);
                    c.innerHTML = d;
                    b[e][w] = "none";
                    Q()
                }
            };
            a.open("GET", b.href, true);
            a.send()
        },
        R = function() {
            i = "parentNode", e = "style", w = "display";
            if (f.e) {
                var a = q("getElementById", f.e);
                if (a) W(a);
                else alert('Cannot find the anchor (id="' + f.e + '")')
            } else Q()
        },
        I = 0,
        G = 0,
        Q = function() {
            if (!I) {
                var b = q("getElementById", f.b);
                if (b) {
                    for (var i = p(b, "*"), h = 0; h < i[a]; h++)
                        if (d(i[h], "menu-icon")) {
                            c = i[h];
                            break
                        }
                    b = p(b, "ul");
                    if (b[a]) {
                        b = b[0];
                        if (c) {
                            if (t < 9 && c[B]) f.g = j;
                            c[j] = function(a) {
                                b[e][w] = b[B] == 0 ? "block" : "";
                                if (b[B] == 0) {
                                    n(0);
                                    J(this, "menu-icon-active")
                                } else K(this, "menu-icon-active");
                                s(a)
                            };
                            var g = F(b, "z-index") || F(b, C);
                            if (g == "auto" || g == "") g = 1e10;
                            b.zix = g;
                            c.setAttribute("tabindex", 0)
                        }
                        new V(b);
                        I = G = 1
                    }
                }
            }
        },
        fb = function(c) {
            var a = 0;

            function b() {
                if (a) return;
                a = 1;
                setTimeout(c, 4)
            }
            if (g[A]) g[A]("DOMContentLoaded", b, false);
            else r(window, "load", b)
        };
    if (t < 9) {
        var kb = q(v, "nav"),
            U = p(g, "head");
        if (!U[a]) return;
        U[0].appendChild(kb)
    }
    X();
    fb(R);
    return {
        init: function() {
            I = 0;
            R()
        }
    }
}