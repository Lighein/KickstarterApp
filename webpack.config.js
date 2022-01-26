const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env", "@babel/preset-typescript",'@babel/react'
            ],
            plugins: ['react-hot-loader/babel']
          },
        },
        
        exclude: /node_modules/
      }, 
    ], 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
