
export default {
  basePath: 'https://lucascruz772.github.io/Todo-list',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
