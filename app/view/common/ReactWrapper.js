Ext.define('view.ReactWrapper', {
    extend: 'Ext.Component',
    alias: 'widget.reactWrapper',
    listeners: {
      afterrender: function () {
        const ReactElement = React.createElement;
        try{
            const component  = ReactLibrary.default.lib[this.reactComponent];
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