
export default {
  basePath: 'https://github.com/lucascruz772/Todo-list',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
