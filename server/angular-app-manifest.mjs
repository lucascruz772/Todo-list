
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/lucascruz772/Todo-list',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lucascruz772/Todo-list"
  },
  {
    "renderMode": 2,
    "route": "/lucascruz772/Todo-list/tasks"
  },
  {
    "renderMode": 2,
    "redirectTo": "/lucascruz772/Todo-list",
    "route": "/lucascruz772/Todo-list/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12102, hash: 'e298f8dc597d9d7e046f31cc3440c7191db6cd926cbeddf28f64af74dab06c6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12430, hash: '17f574bef1990f06fcbbdb62c220427577d78b9800221236ee66e4c76ee8f5eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15311, hash: 'f9fa469f1849d9b685d3b92e21480c2aad7c4ca82fdd20c97ee49cde1db4630d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 19308, hash: 'e8e6bc3cbc30813428ecaafaee588cf4e2a027940781fdb25bac3694c7a05976', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'styles-VTGM5HHG.css': {size: 60, hash: 'DCJyy8WbVcU', text: () => import('./assets-chunks/styles-VTGM5HHG_css.mjs').then(m => m.default)}
  },
};
