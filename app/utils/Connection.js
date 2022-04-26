Ext.define('MyApp.utils.Connection', {
    extend: 'Ext.data.Connection',
    singleton: true,
    request(options){
        const isLocalhost = /localhost/.test(location.host);
        const url = isLocalhost ? 
            options.url : 
            options.url.replace(/http:\/\/localhost:(\d+)/, 'https://ext-plus-react.herokuapp.com')
        return new Promise((resolve, reject) => {
            Ext.Ajax.request({
                ...options, 
                url,
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