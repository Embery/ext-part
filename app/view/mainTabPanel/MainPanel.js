Ext.define('MyApp.view.mainTabPanel.MainPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel',

    title: 'Товары',
    requires: ['MyApp.store.Products'],
    tbar: [
        '->',
        {
            xtype: 'button',
            text: 'Добавить',
            handler: (btn) => {
                const table = btn.up('tabpanel').down('reactWrapper[reactComponent=ReactTable]');
                const store = table.props.store;
                const record = Ext.create('MyApp.model.ProductModel');
                Ext.widget('productModal', {
                    viewModel: {
                        data: {
                            record,
                            store
                        }
                    }
                });
            }
        },
    ],
    items: [
        {
            xtype: 'reactWrapper',
            reactComponent: 'ReactTable',
            props: {
                size: 'small',
                scroll: { y: 300 },
                tableLayout: 'fixed',
                rowKey: 'id',
                columns: [
                    {
                        dataIndex: 'id',
                        title: '#',
                        width: 10,
                    },
                    {
                        dataIndex: 'name',
                        title: 'Название',
                        width: 50,
                        onCell: (record, rowIndex) => {
                            return {
                              onClick: event => {
                                const extRecord = record.rec;
                                const store = extRecord.store;
                                Ext.widget('productModal', {
                                    viewModel: {
                                        data: {
                                            record: extRecord,
                                            store
                                        }
                                    }
                                });
                              },
                            };
                        }
                    },
                    {
                        dataIndex: 'description',
                        title: 'Описание',
                        width: 60,
                    },
                    {
                        dataIndex: 'price',
                        title: 'Цена',
                        width: 25,
                    },
                    {
                        dataIndex: 'amount',
                        title: 'Количество',
                        width: 25,
                        render(text) {
                            if(text) return text;
                            return ReactLibrary.default.createReactDiv({
                                content: String(text),
                                style: {
                                    background: 'red',
                                    padding: '8px',
                                    margin: '-8px',
                                }
                            });
                        }
                    }
                ]
            }
        }
    ],
    initComponent() {
        const store = Ext.create('MyApp.store.Products');
        this.items[0].props.store = store;
        this.callParent();
    }
})