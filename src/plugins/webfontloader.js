/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

 export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    custom: {
      families: ['Apercu'],
      urls: ['@/assets/fonts/apercu/apercu.css'],
    },
  })
}
