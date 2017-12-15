// require the dependecny 
var path = require('path')
var webpack = require('webpack')
// yay for pascal case
var BundleTracker = require("webpack-bundle-tracker")

// javascript object
module.exports = {
    // the base dir
    context: __dirname,
    // entry has to be in the static files of the app not the project
    // this can probably be changed with some setting but i just need to find it
    // basically django is serving files from root/app/static and not root/static like it did
    // in the tutorial

    // this is the way to have multiple entry points
    // entry: "./nobody_speak/static/js/index",
    entry:{
        mk_appt: "./nobody_speak/static/js/mk_appt",
        chk_appt: "./nobody_speak/static/js/chk_appt",
    },

    output: {
        path: path.resolve("./nobody_speak/static/bundles/"),
        filename: "[name]-[hash].js",
    },
    plugins: [
        // webpack-stats.json is the file where the webpack data is stored
        new BundleTracker({filename: "./webpack-stats.json"}),
        // making jquery availble in all modules
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        })
    ],

    module:{
        loaders: [
            // this must be a regex
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },

    resolve: {
        modules: ['node_modules'],
        // with webpack 2 we do not need quotes
        extensions: ['.js', '.jsx']
    }
}