
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sabarti-front-end/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IWYPGMRI.js"
    ],
    "route": "/sabarti-front-end"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8944, hash: '7554048090976474c82f6f919a152a5668d50732b5cd2c9e6a86d3406a65faf4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2900, hash: '139e69d5000a1485a69816a114c06dd78620a5b42a8a03028103e1e159583e19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46509, hash: '5cd1557117f39b0611c20ec94d70cfee36ac10005790ec85833d2e66ad8e588b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SNE5HGWN.css': {size: 60041, hash: 'MEnQqxKKjxs', text: () => import('./assets-chunks/styles-SNE5HGWN_css.mjs').then(m => m.default)},
    'swiper.css': {size: 2944, hash: 'FIaPgIqA014', text: () => import('./assets-chunks/swiper_css.mjs').then(m => m.default)}
  },
};
