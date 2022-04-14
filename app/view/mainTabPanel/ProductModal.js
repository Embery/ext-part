Ext.define('MyApp.view.mainTabPanel.ProductModal', {
    extend: 'Ext.window.Window',
    alias: 'widget.productModal',
    modal: true,
    closable: true,
    autoShow: true,
    width: 300,
    height: 210,
    viewModel: {
        data: {
            record: null
        },
        formulas: {
            title: function(get) {
                const record = get('record');
                if(record.phantom) return 'Карточка нового товара';
                return record.get('name');
            },
            confirmText: function(get) {
                const record = get('record');
                if(record.phantom) return 'Добавить';
                return 'Сохранить';

            }
        }
    },
    bind: {
        title: '{title}'
    },
    layout: 'fit',
    items: [
        {
            xtype: 'form',
            defaults: {
                padding: '5px 10px',
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'ID',
                    bind: {
                        value: '{record.id}',
                        hidden: '{record.phantom}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Наименование',
                    bind: {
                        value: '{record.description}',
                        hidden: '{record.phantom}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Наименование',
                    bind: {
                        value: '{record.name}',
                        hidden: '{!record.phantom}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Описание',
                    bind: {
                        value: '{record.description}',
                        hidden: '{!record.phantom}'
                    }
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена',
                    bind: {
                        value: '{record.price}'
                    }
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во',
                    validator: (val) => +val >= 0 ? true : 'Количество не может быть отрицательным',
                    bind: {
                        value: '{record.amount}'
                    }
                }
            ],
            bbar: [
                '->',
                {
                    text: 'Отменить',
                    xtype: 'button',
                    handler: (btn) => btn.up('window').close(),
                },
                {
                    xtype: 'button',
                    bind: {
                        text: '{confirmText}'
                    },
                    handler: (btn) => {
                        const vm = btn.up('window').getViewModel();
                        vm.get('record').save({success: (record, operation, success) => {
                            const store = vm.get('store');
                            store.load();
                            btn.up('window').close();
                        }});
                    },
                }
            ]
        }
    ]
})