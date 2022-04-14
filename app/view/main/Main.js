/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    renderTo: Ext.getBody(),
    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.mainTabPanel.ProductModal',
        'MyApp.model.ProductModel',
        'MyApp.view.mainTabPanel.MainTabPanel'
    ],

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Главное окно',
            flex: 0
        },
    },

    items: [
        {
            xtype: 'main-tabpanel'
        }
    ],

    tbar: [
        '->',
        {
            xtype: 'button',
            text: 'Товары',
            handler: (btn) => {
                const tabpanel = btn.up('app-main').down('tabpanel');
                tabpanel.add(Ext.create('MyApp.view.mainTabPanel.MainPanel'));
            }
        },
        {
            xtype: 'button',
            text: 'Выход',
            handler: (btn) => {
                localStorage.removeItem('bearer');
                Ext.widget('login');
                btn.up('app-main').destroy();
            }
        }
    ],
});
