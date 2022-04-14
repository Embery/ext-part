 Ext.define('MyApp.view.mainTabPanel.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'main-tabpanel',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.mainTabPanel.ProductModal',
        'MyApp.model.ProductModel',
        'MyApp.view.mainTabPanel.MainPanel'
    ],

    items: [{
        xtype: 'mainpanel'
    }]
});
