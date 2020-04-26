const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/alvaro-resume-vue' : '/',
    configureWebpack: {
        plugins: [
            new GoogleFontsPlugin('./src/fonts.json')
        ]
    }
}