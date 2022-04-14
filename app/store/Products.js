Ext.define('MyApp.store.Products', {
    extend: 'Ext.data.Store', 
    alias: 'store.products',
    pageSize: 10,
    autoLoad: true,
    model: Ext.create('MyApp.model.ProductModel'),
})