Ext.define('MyApp.model.ProductModel', {
    extend: 'Ext.data.Model',
    alias: 'model.productModel',

    requires: ['MyApp.utils.RestWithAuthProxy'],
    fields: [
        {
            name: 'id',
            type: 'int',
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'price',
            type: 'float'
        },
        {
            name: 'amount',
            type: 'int'
        }
    ],
    proxy: {
        type: 'authedRest',
        url : 'http://localhost:3000/products',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
        },
    }
})