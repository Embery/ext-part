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
                click: (btn) => {
                    const form = btn.up('form');
                    const values = form.getValues();
                    fetch('http://localhost:3000/auth/login', {
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(values)
                    }).then((response) => {
                        const status = response.status;
                        response.json().then((data) => {
                            if(status === 200){
                                localStorage.setItem('bearer', data.accessToken);
                                Ext.widget('app-main');
                                btn.up('window').destroy();
                            }
                            else {
                                form.items.items.forEach(field => field.markInvalid(data.message))
                            }
                        });
                    });
                }
            }
        }]
    }
});