
module.exports = {
	entry: "./src/index.js",
    output: {
        path: "./public/",
        filename: "app.js",
    },
    node: {
        fs: "empty"
    },
    module: {
       loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
        }
        ] 
    }
}