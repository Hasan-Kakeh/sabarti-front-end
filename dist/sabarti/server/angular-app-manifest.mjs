
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sabarti/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WU5AEPKO.js"
    ],
    "route": "/sabarti"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5152, hash: '8fc87206b30820cc94d8aac3dac3411c3d3ef8dedf34cc9321298e4c55c96775', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2890, hash: '19e0ef0529230c774eccdeaa3c104ba1be3ce9d130840e87a2d1a7a44efb71b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31569, hash: '74337b2621a749e2250471229d23535ebfa9a3bcb62a0760053644bd4ed6fe31', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZYJICVS6.css': {size: 20622, hash: 'xAN+ASCeMQs', text: () => import('./assets-chunks/styles-ZYJICVS6_css.mjs').then(m => m.default)},
    'swiper.css': {size: 2944, hash: 'FIaPgIqA014', text: () => import('./assets-chunks/swiper_css.mjs').then(m => m.default)}
  },
};
