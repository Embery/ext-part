/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    requires: [
        'MyApp.view.main.Loader',
        'MyApp.view.main.Login',
        'MyApp.view.main.Main'
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
                afterrender: (window) => {
                    fetch('http://localhost:3000/auth', {
                        headers: {
                            Authorization: 'Bearer '+localStorage.getItem('bearer')
                        }
                    }).then((response) => {
                        if(response.status === 200){
                            Ext.widget('app-main');
                        } else {
                            Ext.widget('login');
                        }
                        window.destroy();
                    }).catch((err) => {
                        setTimeout(() => window.fireEvent('afterrender', window), 2000);
                    });
                }
            }
        })
    }
});
