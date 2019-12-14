
const withCSS = require('@zeit/next-css');
module.exports = withCSS()

// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//     webpack(config) {
//         config.modules.rules.push({test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
//         use: {
//             loader: 'url-loader',
//             options: {
//                 limit: 8192,
//                 publicPath: "/_next/static/",
//                 outputPath: "/static/",
//                 name: "[name].[ext]"
//             }

//         }});
//         return config;
//     }
// });
