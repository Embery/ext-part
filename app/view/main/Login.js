Ext.define('MyApp.view.main.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    title: 'Авторизация',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        defaults: {
            padding: 10,
        },
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            listeners: {
                click: async (btn) => {
                    const form = btn.up('form');
                    const values = form.getValues();
                    try {
                        const { response } = await MyApp.utils.Connection.request({
                            url: 'http://localhost:3000/auth/login',
                            method: 'POST',
                            jsonData: {
                                ...values
                            },
                        });
                        const { data } = response;
                        localStorage.setItem('bearer', data.accessToken);
                        Ext.widget('app-main');
                        btn.up('window').destroy();
                    } catch (e) {
                        const { response } = e;
                        if(response.status){
                            form.items.items.forEach(field => field.markInvalid(response.data.message));
                            ReactLibrary.default.notify({
                                type: 'error',
                                message: 'Упс :с',
                                description: response.data.message,
                            });
                        }
                    }
                }
            }
        }]
    }
});