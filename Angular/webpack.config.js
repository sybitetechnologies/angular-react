/*
var webpack = require('webpack');
var path = require('path');

module.exports={
 entry:[
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './App/app.js',
        './App/src/About/about.controller.js',
        './App/src/Home/home.controller.js',
        './App/src/Contact/contact.controller.js'
 ],
 output:{
        path: path.join(__dirname,'./App/build/'),
        publicPath: "/build/",
		filename:"bundle.js"
},
       node: {
        fs: "empty"
    },
 plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
 ],
 devServer:{
      contentBase: path.join(__dirname,'./App'),
      inline:true,
      stats:'errors-only'
    }
};
*/

module.exports = {
    entry: [
        "./App/app.js",
        './App/src/About/about.controller.js',
        './App/src/Home/home.controller.js',
        './App/src/Contact/contact.controller.js'
        ],
    output: {
        path: "./App/build/",
        filename: "bundle.js",
    },
    node: {
        fs: "empty"
    }
}
