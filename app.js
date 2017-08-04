Ext.application({
	name: 'Demo',
	appFolder: 'app',
	controllers: ['User'],
	launch: function() {
		Ext.create('Ext.container.Viewport',{
			layout: 'fit',
			items: [
				{
					title: 'Hello, ExtJS!',
					html: 'Hello, new ExtJS Developer!'	
				}
			]
		});
	}
});