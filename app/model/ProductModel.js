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
        //Можно было бы задать относительный, но тогда не будет работать при запуске через sencha app watch
        url : `//${/localhost/.test(location.host) ? 'localhost:3000': 'ext-plus-react.herokuapp.com'}/products`,
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
        },
    }
})