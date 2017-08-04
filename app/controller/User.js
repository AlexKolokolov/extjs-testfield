Ext.define('Demo.controller.User',{
	extend: 'Ext.app.Controller',
	models: ['User'],
	init: function() {
		console.log('init');
		this.callParent(arguments);
	}
});