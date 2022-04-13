Ext.define('MyApp.view.main.Loader', {
    extend: 'Ext.window.Window',
    xtype: 'loader',

    bodyPadding: 10,
    title: 'Идет загрузка',
    closable: false,
    autoShow: true,
    width: 200,
    height: 70,
    modal: true,
    resizable: false,
    draggable: false,

    items: {
        xtype: 'component',
        html: 'Пожалуйста, подождите'
    }
});