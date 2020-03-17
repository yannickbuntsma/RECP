const webpack = require('webpack')
const withPWA = require('next-pwa')

require('dotenv').config()

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})

