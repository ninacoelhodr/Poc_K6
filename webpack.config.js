const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'api'),
  entry: {
    start: './start.js' ,  
    script: './script.js' , 
    script2: './script2.js' ,  
    script3: './script3.js' ,      
  },
  output: {
    path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs',
        filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};
