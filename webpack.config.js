const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    entry: './public/entry.js' // Archivo de entrada
  },   
  output: {
    path: path.resolve(__dirname, 'public/dist'), // Directorio de salida
    filename: 'bundle.js' // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar a archivos con extensión .js
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader' // Utilizar Babel para transpilar código
        },
      },
      {
        test: /\.css$/, // Aplicar a archivos con extensión .css
        use: ['style-loader', 'css-loader'], // Usa style-loader para inyectar CSS en el DOM y css-loader para interpretar archivos CSS
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[id].css',
    }),
  ]
};