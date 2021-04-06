(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r = {};
  var f = [];
  var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function s(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function a(n2, l2, u2) {
    var i2, t2, o2, r2 = arguments, f2 = {};
    for (o2 in l2)
      o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
    if (arguments.length > 3)
      for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
        u2.push(r2[o2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
      for (o2 in n2.defaultProps)
        f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
    return v(n2, f2, i2, t2, null);
  }
  function v(l2, u2, i2, t2, o2) {
    var r2 = {type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n.__v : o2};
    return n.vnode != null && n.vnode(r2), r2;
  }
  function y(n2) {
    return n2.children;
  }
  function p(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function d(n2, l2) {
    if (l2 == null)
      return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? d(n2) : null;
  }
  function _(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return _(n2);
    }
  }
  function k(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
  }
  function b() {
    for (var n2; b.__r = u.length; )
      n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = c({}, t2)).__v = t2.__v + 1, I(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? d(t2) : o2, t2.__h), T(u2, t2), t2.__e != o2 && _(t2)));
      });
  }
  function m(n2, l2, u2, i2, t2, o2, e2, c2, s2, a2) {
    var h, p2, _2, k2, b2, m2, w, A2 = i2 && i2.__k || f, P2 = A2.length;
    for (u2.__k = [], h = 0; h < l2.length; h++)
      if ((k2 = u2.__k[h] = (k2 = l2[h]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" || typeof k2 == "bigint" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(y, {children: k2}, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[h]) === null || _2 && k2.key == _2.key && k2.type === _2.type)
          A2[h] = void 0;
        else
          for (p2 = 0; p2 < P2; p2++) {
            if ((_2 = A2[p2]) && k2.key == _2.key && k2.type === _2.type) {
              A2[p2] = void 0;
              break;
            }
            _2 = null;
          }
        I(n2, k2, _2 = _2 || r, t2, o2, e2, c2, s2, a2), b2 = k2.__e, (p2 = k2.ref) && _2.ref != p2 && (w || (w = []), _2.ref && w.push(_2.ref, null, k2), w.push(p2, k2.__c || b2, k2)), b2 != null ? (m2 == null && (m2 = b2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = x(n2, k2, _2, A2, b2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
      }
    for (u2.__e = m2, h = P2; h--; )
      A2[h] != null && (typeof u2.type == "function" && A2[h].__e != null && A2[h].__e == u2.__d && (u2.__d = d(i2, h + 1)), L(A2[h], A2[h]));
    if (w)
      for (h = 0; h < w.length; h++)
        z(w[h], w[++h], w[++h]);
  }
  function g(n2, l2, u2) {
    var i2, t2;
    for (i2 = 0; i2 < n2.__k.length; i2++)
      (t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? g(t2, l2, u2) : x(u2, t2, t2, n2.__k, t2.__e, l2));
    return l2;
  }
  function x(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (l2.__d !== void 0)
      r2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != o2 || t2.parentNode == null)
      n:
        if (o2 == null || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return r2 !== void 0 ? r2 : t2.nextSibling;
  }
  function A(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      o2 === "children" || o2 === "key" || o2 in l2 || C(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || C(n2, o2, l2[o2], u2[o2], i2);
  }
  function P(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e.test(l2) ? u2 : u2 + "px";
  }
  function C(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if (l2 === "style")
        if (typeof u2 == "string")
          n2.style.cssText = u2;
        else {
          if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || P(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || P(n2.style, l2, u2[l2]);
        }
      else if (l2[0] === "o" && l2[1] === "n")
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? H : $, o2) : n2.removeEventListener(l2, o2 ? H : $, o2);
      else if (l2 !== "dangerouslySetInnerHTML") {
        if (t2)
          l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
          try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
          } catch (n3) {
          }
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function $(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
  }
  function H(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
  }
  function I(l2, u2, i2, t2, o2, r2, f2, e2, s2) {
    var a2, v2, h, d2, _2, k2, b2, g2, w, x2, A2, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    i2.__h != null && (s2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = n.__b) && a2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (g2 = u2.props, w = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? w ? w.props.value : a2.__ : t2, i2.__c ? b2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new p(g2, x2), v2.constructor = P2, v2.render = M), w && w.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c({}, v2.__s)), c(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), d2 = v2.props, _2 = v2.state, h)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && g2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
              v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n2) {
                n2 && (n2.__ = u2);
              }), v2.__h.length && f2.push(v2);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(d2, _2, k2);
            });
          }
          v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = c(c({}, t2), v2.getChildContext())), h || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === y && a2.key == null ? a2.props.children : a2, m(l2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, o2, r2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), b2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = j(i2.__e, u2, i2, t2, o2, r2, f2, s2);
      (a2 = n.diffed) && a2(u2);
    } catch (l3) {
      u2.__v = null, (s2 || r2 != null) && (u2.__e = e2, u2.__h = !!s2, r2[r2.indexOf(e2)] = null), n.__e(l3, u2, i2);
    }
  }
  function T(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
      try {
        l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
          n2.call(u3);
        });
      } catch (l3) {
        n.__e(l3, u3.__v);
      }
    });
  }
  function j(n2, l2, u2, i2, t2, o2, e2, c2) {
    var a2, v2, h, y2, p2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
    if (_2 === "svg" && (t2 = true), o2 != null) {
      for (; k2 < o2.length; k2++)
        if ((a2 = o2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
          n2 = a2, o2[k2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (_2 === null)
        return document.createTextNode(d2);
      n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), o2 = null, c2 = false;
    }
    if (_2 === null)
      p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
      if (o2 = o2 && f.slice.call(n2.childNodes), v2 = (p2 = u2.props || r).dangerouslySetInnerHTML, h = d2.dangerouslySetInnerHTML, !c2) {
        if (o2 != null)
          for (p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
            p2[n2.attributes[y2].name] = n2.attributes[y2].value;
        (h || v2) && (h && (v2 && h.__html == v2.__html || h.__html === n2.innerHTML) || (n2.innerHTML = h && h.__html || ""));
      }
      if (A(n2, d2, p2, t2, c2), h)
        l2.__k = [];
      else if (k2 = l2.props.children, m(n2, Array.isArray(k2) ? k2 : [k2], l2, u2, i2, t2 && _2 !== "foreignObject", o2, e2, n2.firstChild, c2), o2 != null)
        for (k2 = o2.length; k2--; )
          o2[k2] != null && s(o2[k2]);
      c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C(n2, "value", k2, p2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C(n2, "checked", k2, p2.checked, false));
    }
    return n2;
  }
  function z(l2, u2, i2) {
    try {
      typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
      n.__e(l3, i2);
    }
  }
  function L(l2, u2, i2) {
    var t2, o2, r2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || z(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (l3) {
          n.__e(l3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = l2.__k)
      for (r2 = 0; r2 < t2.length; r2++)
        t2[r2] && L(t2[r2], u2, i2);
    o2 != null && s(o2);
  }
  function M(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function N(l2, u2, i2) {
    var t2, o2, e2;
    n.__ && n.__(l2, u2), o2 = (t2 = typeof i2 == "function") ? null : i2 && i2.__k || u2.__k, e2 = [], I(u2, l2 = (!t2 && i2 || u2).__k = a(y, null, [l2]), o2 || r, r, u2.ownerSVGElement !== void 0, !t2 && i2 ? [i2] : o2 ? null : u2.firstChild ? f.slice.call(u2.childNodes) : null, e2, !t2 && i2 ? i2 : o2 ? o2.__e : u2.firstChild, t2), T(e2, l2);
  }
  n = {__e: function(n2, l2) {
    for (var u2, i2, t2; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
            return u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }, __v: 0}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, p.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u2), this.props)), n2 && c(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
  }, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, o = 0;

  // src/model/session.ts
  function calcAverageOfN(ses, n2) {
    const num = Math.abs(n2);
    const ignoreSize = Math.ceil(num * 0.1);
    const array2 = [];
    for (const s2 of ses.solves) {
      array2.push(s2.time);
      if (array2.length >= n2) {
        s2.ao[n2] = average(array2.slice().sort().slice(ignoreSize, num - ignoreSize).map((v2) => parseFloat(v2)));
        array2.shift();
      }
    }
    ses.ao.push(n2);
    return ses;
  }
  function average(arr) {
    return arr.reduce((acc, v2) => acc + v2, 0) / arr.length;
  }
  function calcPercentile(ses, n2) {
    const percent = n2 * 0.01;
    const array2 = [];
    for (const s2 of ses.solves) {
      array2.push(s2.time);
      array2.sort();
      s2.percentile[n2] = array2[Math.ceil(array2.length * percent) - 1];
    }
    ses.percentile.push(n2);
    return ses;
  }
  function calcStatistics(ses) {
    const stats = [];
    const stat = _statistics("session", ses.solves.map((s2) => parseFloat(s2.time)));
    stats.push(stat);
    console.log(`${stat.name}: ${stat.avg.toFixed(3)}(+/-${stat.deviation.toFixed(3)}} min/max: ${stat.min}/${stat.max}`);
    for (let i2 = 0; i2 < ses.phases; i2++) {
      const array2 = ses.solves.map((s2) => parseFloat(s2.phases[i2]));
      const stat2 = _statistics(`phase${i2 + 1}`, array2);
      console.log(`${stat2.name}: ${stat2.avg.toFixed(3)}(+/-${stat2.deviation.toFixed(3)}} min/max: ${stat2.min}/${stat2.max}`);
      stats.push(stat2);
    }
    return stats;
  }
  function _statistics(name, array2) {
    const normalized = array2.filter((v2) => !isNaN(v2));
    const avg = average(normalized);
    const deviation = Math.sqrt(normalized.reduce((acc, t2) => acc + Math.pow(avg - t2, 2), 0) / normalized.length);
    const min = Math.min(...normalized);
    const max = Math.max(...normalized);
    return {
      name,
      avg,
      deviation,
      min,
      max
    };
  }

  // src/component/chart.ts
  function showChart(ses) {
    const data = new google.visualization.DataTable();
    data.addColumn("string", "No.");
    data.addColumn("number", "Time");
    array(ses.phases).forEach((_2, i2) => data.addColumn("number", `P.${i2 + 1}`));
    array(ses.ao.length).forEach((_2, i2) => {
      data.addColumn("number", `Ao${ses.ao[i2]}`);
    });
    array(ses.percentile.length).map((_2, i2) => {
      data.addColumn("number", `${ses.percentile[i2]}%`);
    });
    data.addRows(ses.solves.map((s2) => {
      return [
        s2.no,
        parseFloat(s2.time),
        ...array(ses.phases).map((_2, i2) => parseFloat(s2.phases[i2])),
        ...ses.ao.map((k2, i2) => s2.ao[k2]),
        ...ses.percentile.map((k2, i2) => parseFloat(s2.percentile[k2]))
      ];
    }));
    const view = new google.visualization.DataView(data);
    const options = {
      title: "Solves",
      vAxis: {title: "Time"},
      hAxis: {title: "No."},
      seriesType: "lines",
      interpolateNulls: true,
      chartArea: {height: "80%"}
    };
    const chart = new google.visualization.ComboChart(document.getElementById("chart"));
    google.visualization.events.addListener(chart, "select", () => {
      const selection = chart.getSelection();
      if (!selection[0].row) {
        console.log(selection[0]);
        view.hideColumns([view.columns[selection[0].column]]);
        chart.draw(view, options);
      }
    });
    chart.draw(view, options);
  }
  function array(length) {
    return [...Array(length)];
  }

  // src/component/statistics.tsx
  var SessionStatistics = class extends p {
    render({stats}) {
      return /* @__PURE__ */ a("table", null, /* @__PURE__ */ a("thead", null, /* @__PURE__ */ a("tr", null, /* @__PURE__ */ a("th", {
        scope: "col"
      }, "name"), /* @__PURE__ */ a("th", {
        scope: "col"
      }, "avg."), /* @__PURE__ */ a("th", {
        scope: "col"
      }, "deviation"), /* @__PURE__ */ a("th", {
        scope: "col"
      }, "min"), /* @__PURE__ */ a("th", {
        scope: "col"
      }, "max"))), /* @__PURE__ */ a("tbody", null, stats.map((s2) => {
        return /* @__PURE__ */ a("tr", null, /* @__PURE__ */ a("td", {
          scope: "row"
        }, s2.name), /* @__PURE__ */ a("td", null, s2.avg.toFixed(3)), /* @__PURE__ */ a("td", null, /* @__PURE__ */ a("span", {
          className: "pm"
        }, "+/-"), " ", s2.deviation.toFixed(3)), /* @__PURE__ */ a("td", null, s2.min.toFixed(3)), /* @__PURE__ */ a("td", null, s2.max.toFixed(3)));
      })));
    }
  };

  // src/utils.ts
  function toSeconds(time) {
    if (typeof time === "string") {
      const t2 = time.split(":");
      if (t2.length <= 1)
        return time;
      const seconds = t2[1].split(".");
      return `${parseInt(t2[0]) * 60 + parseInt(seconds[0])}.${seconds[1]}`;
    }
    return (time / 1e3).toString();
  }

  // src/converter/cstimer-converter.ts
  async function fromCsTimer(file) {
    if (file.type === "text/plane" || file.name.endsWith(".txt")) {
      return fromCsTimerExportText(file);
    }
    if (file.type === "text/csv" || file.name.endsWith(".csv")) {
      return fromCsTimerSessionCSV(file);
    }
    throw new Error(`This file format is not supported. file: ${file.name}`);
  }
  async function fromCsTimerSessionCSV(file) {
    const ln = /\r?\n/;
    const csv = /\s*(?:;|$)\s*/;
    const raw = await file.text();
    const split = raw.split(ln).map((l2) => l2.split(csv));
    if (split[0].length < 5) {
      alert("This file is not exported csv from csTimer.");
      throw new Error("This file is not exported csv from csTimer.");
    }
    const session = {
      name: file.name,
      headers: split[0],
      phases: split[0].length - 5,
      solves: split.filter((l2) => l2.length > 4).map((l2) => {
        return {
          no: l2[0],
          time: toSeconds(l2[1]),
          date: l2[4],
          phases: l2.slice(5).map((t2) => toSeconds(t2)),
          ao: [],
          percentile: []
        };
      }).slice(1),
      ao: [],
      percentile: []
    };
    return [session];
  }
  async function fromCsTimerExportText(file) {
    const data = JSON.parse(await file.text());
    const sessionData = JSON.parse(data.properties.sessionData);
    return [...Array(data.properties.session)].map((_2, i2) => {
      const num = (i2 + 1).toString();
      const session = {
        name: sessionData[num].name,
        headers: ["No.", "Time", "Comment", "Scramble", "Date", ...[...Array(sessionData[num].opt.phases)].map((_3, i3) => `P.${i3 + 1}`)],
        phases: sessionData[num].opt.phases || 0,
        solves: data[`session${num}`].map((v2, i3) => {
          return {
            no: i3.toString(),
            time: toSeconds(v2[0][1]),
            date: new Date(v2[3]).toString(),
            phases: arrayToPhases(v2[0]),
            ao: [],
            percentile: []
          };
        }),
        ao: [],
        percentile: []
      };
      return session;
    });
  }
  function arrayToPhases(array2) {
    const phases = array2.slice();
    phases.reverse();
    phases.pop();
    return phases.reduce((acc, val, i2) => {
      if (i2 === 0) {
        acc.push(val);
      } else {
        acc.push(phases[i2] - phases[i2 - 1]);
      }
      return acc;
    }, []).map(toSeconds);
  }

  // src/component/session-selector.tsx
  var SessionSelector = class extends p {
    constructor(props) {
      super(props);
      this.onChange = (ev) => {
        const sessionName = ev.currentTarget.value;
        console.log(`selected: ${sessionName}`);
        this.setState({selected: sessionName});
        const session = this.props.sessions.filter((s2) => s2.name === sessionName)[0];
        const stats = calcStatistics(session);
        N(/* @__PURE__ */ a(SessionStatistics, {
          stats
        }), document.getElementById("statistics"));
        showChart(session);
      };
      this.state = {
        selected: ""
      };
    }
    render({sessions}, {selected}) {
      return /* @__PURE__ */ a("select", {
        value: selected || sessions[0].name,
        onChange: this.onChange
      }, sessions.map((s2) => /* @__PURE__ */ a("option", {
        key: s2.name,
        value: s2.name
      }, s2.name)));
    }
  };

  // src/component/file-input.tsx
  var FileInput = class extends p {
    async onInput(ev) {
      console.log(ev);
      console.log(ev.currentTarget.files);
      let files = ev.currentTarget.files;
      if (files && files.length == 0) {
        console.log("No file selected");
        return;
      }
      const sessions = await fromCsTimer(files[0]);
      sessions.forEach((s2) => {
        calcAverageOfN(s2, 5);
        calcAverageOfN(s2, 12);
        calcPercentile(s2, 50);
        calcPercentile(s2, 10);
      });
      const stats = calcStatistics(sessions[0]);
      N(/* @__PURE__ */ a(SessionSelector, {
        sessions
      }), document.getElementById("sessions"));
      N(/* @__PURE__ */ a(SessionStatistics, {
        stats
      }), document.getElementById("statistics"));
      showChart(sessions[0]);
    }
    render() {
      return /* @__PURE__ */ a(y, null, /* @__PURE__ */ a("label", {
        for: "file"
      }, "File: "), /* @__PURE__ */ a("input", {
        id: "file",
        type: "file",
        accept: "text/csv,text/plain",
        onInput: this.onInput
      }));
    }
  };

  // src/google-charts-loader.ts
  var GOOGLE_CHATS_URL = "https://www.gstatic.com/charts/loader.js?chof=validate";
  function loadGoogleCharts(onload, onerror) {
    if (document.querySelector(`script[src*="gstatic.com/charts/"]`)) {
      onload();
      return;
    }
    const charts = document.createElement("script");
    charts.type = "text/javascript";
    charts.src = GOOGLE_CHATS_URL;
    charts.onload = (_2) => {
      onload();
    };
    charts.onerror = (_2) => onerror();
    document.body.append(charts);
  }

  // src/index.tsx
  N(/* @__PURE__ */ a(FileInput, null), document.body);
  loadGoogleCharts(() => {
    google.charts.load("current", {packages: ["corechart"]});
  }, () => {
    throw new Error("Failed to load google charts");
  });
})();
//# sourceMappingURL=index.js.map
