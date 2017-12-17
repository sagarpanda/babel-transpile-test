module.exports = (ctx) => ({
  plugins: [
    require('postcss-modules')({
      getJSON: ctx.extractModules || (() => {}),
      //generateScopedName: '[hash:base64:10]',
    }),
    //require('postcss-import')({...options}),
    require('postcss-url')({ url: 'copy', useHash: true })
  ],
});
