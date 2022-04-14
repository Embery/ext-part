Ext.define('MyApp.utils.RestWithAuthProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.authedRest',
    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PATCH',
        destroy: 'DELETE'
    },
    type: 'rest',
    pageParam: '_page',
    limitParam: '_limit',
    reader: {
        type: 'json',
        rootProperty: 'data',
        totalProperty: 'total',
    },
    buildRequest(...args) {
        this.setHeaders({
            Authorization: `Bearer ${localStorage.getItem('bearer')}`
        });
        return this.callParent(args);
    }
});