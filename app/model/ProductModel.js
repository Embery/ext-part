Ext.define('MyApp.model.ProductModel', {
    extend: 'Ext.data.Model',
    alias: 'model.productModel',
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
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PATCH',
            destroy: 'DELETE'
        },
        type: 'rest',
        pageParam: '_page',
        limitParam: '_limit',
        url : 'http://localhost:3000/products',
        headers: {
            authorization: `Bearer ${localStorage.getItem('bearer')}`
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
        },
    }
})