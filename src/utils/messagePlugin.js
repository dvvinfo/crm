
export default {
    install:( app,options) => {
        app.config.globalProperties.$message = function(text) {
            window.M.toast({html: text})
        }
        app.config.globalProperties.$error = function(html) {
            window.M.toast({html: `[Ошибка]: ${html}`})
        }
        app.provide('messagePlugin', options)
    }
    
}