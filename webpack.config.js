const path = require('path');

module.exports = {
  entry: './Programacao/public/scriptPegaCarrinho.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'Programacao/public/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // o padrão para identificar os arquivos JavaScript
        exclude: /node_modules/, // o diretório que será ignorado pelo webpack
        use: {
          loader: 'babel-loader', // o carregador que será usado para processar os arquivos JavaScript
          options: {
            presets: ['@babel/preset-env'] // o conjunto de plugins do babel que será usado para transformar o código
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}