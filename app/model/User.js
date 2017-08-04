Ext.define('Demo.model.User', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'}
	],
	proxy: {
		type: 'jsonp',
		url: 'http://echo.jsontest.com/id/1/name/alex'
	}
});