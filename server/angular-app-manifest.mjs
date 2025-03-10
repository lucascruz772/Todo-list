
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lucascruz772.github.io/Todo-list/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Todo-list"
  },
  {
    "renderMode": 2,
    "route": "/Todo-list/tasks"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Todo-list",
    "route": "/Todo-list/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12102, hash: 'f2f51402207768ae887293b89cad1c2fa309e78bfbd7a9d9b8b83644a34b2bd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12430, hash: 'f5447ba6715bf89aae9028550412e8968a4c176eb75c00604668f822422f7d94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15308, hash: '0bd23a6b3290b9c83fc01e7dfc829a77dd0cda2e4f35df37ed65c00fb207c21a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 19306, hash: 'cdd80aeac7a2f385b3849f59f201847fa07f124e0b5577c763d58102587f4a04', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'styles-VTGM5HHG.css': {size: 60, hash: 'DCJyy8WbVcU', text: () => import('./assets-chunks/styles-VTGM5HHG_css.mjs').then(m => m.default)}
  },
};
