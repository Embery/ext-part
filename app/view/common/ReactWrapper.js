Ext.define('view.ReactWrapper', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reactWrapper',
    listeners: {
      afterrender: function () {
        const ReactElement = React.createElement;
        try{
            const component  = ReactLibrary.default[this.reactComponent];
            ReactDOM.render(
                ReactElement(component, {
                    ...(this.props || {}),
                    extComponent: this
                }),
                this.el.dom
            );
        } catch(e){
            console.error(e);
        }
      }
    },
});