const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['vue', 'jquery'],
  },

  output: {
    path: path.resolve(__dirname, 'source'),
    filename: '[name].bundle.js',
  },

  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src/component/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.vue', '.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      // Css Loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
       //Load gif png
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      },
       //Load font
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.less$/,
         use: [{
             loader: "style-loader" // creates style nodes from JS strings
         }, {
             loader: "css-loader" // translates CSS into CommonJS
         }, {
             loader: "less-loader" // compiles Less to CSS
         }]
       },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      },
      // Babel
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      //Typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      //Vue loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
    ],
  },
};
