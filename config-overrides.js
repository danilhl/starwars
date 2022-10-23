
const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env){
    alias({
      "@components": "src/components",
      "@constants": "src/constants",
      "@hoc-helpers": "src/hoc-helpers",
      "@services": "src/services",
      "@utils": "src/utils",
      "@containers": "src/containers",
      "@styles" : "src/styles",
      "@routes" : "src/routes",
      "@static" : "src/static",
      "@hooks" : "src/hooks",
      "@UI-Kit" : "src/components/UI-Kit",
      "@store" : "src/store",
      "@context" : "src/context"

    })(config)

    return config;
}

