const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        publicPath : ' ',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
      },
      
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    // الكود ده لحل مشكلة ظهور شاشة عليها تحذيرات باحجام الملفات الكبيرة عند تشغيل المشروع

      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              // Creates `style` nodes from JS strings
              {
                loader:MiniCssExtractPlugin.loader,
                options: {
                  publicPath:'../',
                }
              },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath:'images',
                },
              },
            ],
          },
          
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath:'fonts',
                },
              },
            ],
          },

          {
            test: /\.html$/i,
            loader: "html-loader",
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        // compress: true,
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true,
            stats:'errors-only',
          }
      },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/project-details.html',
      filename: 'project-details.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/blog-details.html',
      filename: 'blog-details.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/add-blog.html',
      filename: 'add-blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
    }),
    new MiniCssExtractPlugin({
        filename: 'css/style.css',
    }),
  ],
};