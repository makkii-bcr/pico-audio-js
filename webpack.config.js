module.exports = {
  mode: "development",
  //mode: 'production',
  context: __dirname + '/src',
  entry: {
    'dist/PicoAudio': './PicoAudio.js'
  },
  output: {
    path: __dirname,
    filename: './[name].js'
  },
  devServer: {
    contentBase: 'dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  }
};
