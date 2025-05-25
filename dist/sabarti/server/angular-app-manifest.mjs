
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sabarti-front-end/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WU5AEPKO.js"
    ],
    "route": "/sabarti-front-end"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5162, hash: '3546ad91f21c1facd7c1bf17527c44f3712058610235d94ef1bbb41cf22e50a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2900, hash: '8663bb1d650dbc87fe3c581cc65c7d898465b407ae9cb07cf01f9706363ae851', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31579, hash: 'a5f18692a13ada8d9320a0a7e828adeb6c7f7499063a1f2ada1d0f105fc3e185', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZYJICVS6.css': {size: 20622, hash: 'xAN+ASCeMQs', text: () => import('./assets-chunks/styles-ZYJICVS6_css.mjs').then(m => m.default)},
    'swiper.css': {size: 2944, hash: 'FIaPgIqA014', text: () => import('./assets-chunks/swiper_css.mjs').then(m => m.default)}
  },
};
