Ext.define('MyApp.utils.Connection', {
    extend: 'Ext.data.Connection',
    singleton: true,
    request(options){
        return new Promise((resolve, reject) => {
            Ext.Ajax.request({
                ...options, 
                headers: {
                    ...(options.headers || {}),
                    Authorization: `Bearer ${localStorage.getItem('bearer')}`
                },
                success: (response, options) => {
                    response.data = JSON.parse(response.responseText || '{}')
                    resolve({response, options})
                },
                failure: (response, options) => {
                    response.data = JSON.parse(response.responseText || '{}')
                    reject({response, options})
                },
            });
        });
    },
});