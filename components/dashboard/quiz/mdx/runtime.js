import e from 'react';
import { transform as r } from 'buble';
import n from '@mdx-js/mdx';
import { MDXProvider as o, mdx as t } from '@mdx-js/react';
export default function(c) {
  var i = c.scope;
  void 0 === i && (i = {});
  var p = c.components;
  void 0 === p && (p = {});
  var a = c.remarkPlugins;
  void 0 === a && (a = []);
  var s = c.rehypePlugins;
  void 0 === s && (s = []);
  var m = c.children,
    l = (function(e, r) {
      var n = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && -1 === r.indexOf(o) && (n[o] = e[o]);
      return n;
    })(c, ['scope', 'components', 'remarkPlugins', 'rehypePlugins', 'children']),
    d = Object.assign(
      {},
      {
        mdx: t,
        MDXProvider: o,
        components: p,
        props: l,
      },
      i,
    ),
    u = n
      .sync(m, {
        remarkPlugins: a,
        rehypePlugins: s,
        skipExport: !0,
      })
      .trim(),
    v = r(u, {
      objectAssign: 'Object.assign',
    }).code,
    f = Object.keys(d),
    y = Object.values(d);
  return new (Function.prototype.bind.apply(
    Function,
    [null].concat(['_fn'], ['React'], f, [
      v +
        '\n\n    return React.createElement(MDXProvider, { components },\n      React.createElement(MDXContent, props)\n    );',
    ]),
  ))().apply(void 0, [{}, e].concat(y));
}
