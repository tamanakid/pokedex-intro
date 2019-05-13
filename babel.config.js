
module.exports = {
  presets: [
    "@babel/preset-env",
    '@vue/app'
  ]
}


/*
module.exports = function(babel) {
  babel.cache(true);
  
  return {
    "presets": [
      '@vue/app',
      ["@babel/preset-env", { "modules": "commonjs" }]
    ],
    "env": {
      "test": {
        "presets": [["@babel/env", { "targets": { "node": "current" } }]]
      }
    }
  };
};
*/


