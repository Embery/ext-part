 Ext.define('MyApp.view.mainTabPanel.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tabpanel',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.mainTabPanel.ProductModal',
        'MyApp.model.ProductModel',
        'MyApp.view.mainTabPanel.MainPanel'
    ],

    items: [
        {
            xtype: 'component',
            title: 'Описание',
            html: `
                <p style="text-align: center;">Добро пожаловать на фракенштейна, собранного из эксты и react + mobx + antd!<br>
                Здесь написанные с любовью компоненты экспортируются в виде глобальной переменной ReactLibrary<br>
                Можно прокидывать пропсы, можно прокидывать сторы, можно развлекаться как угодно, взяв это за основу<br>
                Ссылки: <a href="#" target="_blank">экстовая часть</a> и <a href="#" target="_blank">реактовая часть<a></p>
            `,
        },
        {
            xtype: 'mainpanel'
        },
    ],
});
