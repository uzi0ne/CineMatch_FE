const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

   devServer: {
    port: 3000,
     proxy:{
      "/search": {"target": "http://localhost:8080",
      "changeOrigin": true}
     } 
   },
})

