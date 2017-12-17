## Test: Transpile jsx and module css for the library

#### Used npm module
* presets: es2015, react
* babelrc plugin: babel-plugin-transform-postcss
* postcss.config: postcss, postcss-cli, postcss-modules, postcss-url

```sh
# Build JSX and Module CSS
npm run build

# Run App
npm start
```
#### Todo
- [ ] use of @import within css
- [ ] url path resolve in css
- [ ] yet to find a solution to import css file after transpile `var _Button = require('./Button.css');`
