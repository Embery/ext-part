Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    requires: [
        'MyApp.view.main.Loader',
        'MyApp.view.main.Login',
        'MyApp.view.main.Main',
        'MyApp.utils.Connection'
    ],
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    launch() {
        Ext.widget('loader', {
            listeners: {
                afterrender: async (window) => {
                    try{
                        const { response } = await MyApp.utils.Connection.request({
                            url: 'http://localhost:3000/auth',
                        });
                        if(response.status === 200){
                            Ext.widget('app-main');
                        } else {
                            Ext.widget('login');
                        }
                    } catch (e) {
                        if(e.response.status) {
                            Ext.widget('login');
                        } else {
                            setTimeout(() => window.fireEvent('afterrender', window), 2000);
                        }
                    } finally {
                        window.destroy();
                    }
                }
            }
        })
    }
});
