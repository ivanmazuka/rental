module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.dist.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env']
        }
      }
    ]
  },
};