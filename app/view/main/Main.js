/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
    ],

    viewModel: 'main',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    items: [{
        title: 'Experimental',
        iconCls: 'fa-user',
        items: [
            {
                xtype: 'reactWrapper',
                reactComponent: 'TestComponent',
                props: {
                    name: 'Айти гуру'
                }
            },
            {
                xtype: 'button',
                text: 'Добавить',
                handler: (btn) => {
                    const table = btn.up('tabpanel').down('reactWrapper[reactComponent=ReactTable]');
                    const store = table.props.store;
                    store.totalCount++;
                    store.add({
                        id: store.data.items.length,
                        name: 'Azaza',
                        age: store.data.items.length,
                    });
                }
            },
            {
                xtype: 'reactWrapper',
                reactComponent: 'ReactTable',
                props: {
                    store: Ext.create('Ext.data.Store', {
                        pageSize: 5,
                        autoLoad: true,
                        proxy: {
                            type: 'rest',
                            pageParam: '_page',
                            limitParam: '_limit',
                            url : 'https://jsonplaceholder.typicode.com/users'
                        },
                    }),
                    columns: [
                        {
                            dataIndex: 'id',
                            title: '#',
                        },
                        {
                            dataIndex: 'name',
                            title: 'Имя'
                        },
                        {
                            dataIndex: 'username',
                            title: 'Ник'
                        },
                        {

                        }
                    ]
                }
            }
        ]
    },{
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
