import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

module.exports = {
  plugins: [
    purgeCSSPlugin({
      content: ['./src/**/*.html']
    })
  ]
}
