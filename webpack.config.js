const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
//de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //el optimizador de css
module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js', // nombre del archivo js resultante
        publicPath: '/'
    },
    mode: 'development',
    resolve: { // extensión de archivos a tomar en cuenta
        extensions: ['.js', '.jsx'],
        alias: {//alias
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
        }
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                use: [{
                    loader: 'html-loader' // loader para usar
                }]
            },
            { //loader de css sass
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
            }
            // ahora es super sencillo porque webpack 5 por defecto ya puede manejar  sin necesidad de loaders
            // extensiones de imágenes
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4
        // ahora en Webpack 5 se usa allowedHosts
        // créditos al compañero Fabian Rivera Restrepo
        port: 3007,
        compress: true,
        historyApiFallback: true,
    }
}