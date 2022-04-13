 Ext.define('MyApp.view.mainTabPanel.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tabpanel',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.ProductModal',
        'MyApp.model.ProductModel',
        'MyApp.view.mainTabPanel.MainPanel'
    ],

    items: [{
        xtype: 'mainpanel'
    }]
});
