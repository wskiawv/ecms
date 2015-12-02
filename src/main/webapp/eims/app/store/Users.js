Ext.define('eims.store.Users',{
	extend:'Ext.data.Store',
    requires: [
        'Ext.data.Store',
        'eims.model.User'
    ],
	models:['eims.model.User'],
    alias:'Users',
    pageSize:20,
	proxy: {
        type: 'ajax',
        url: '/user/search',
        reader: {
            type: 'json',
            root: 'result'
        }
    },
    autoLoad: true
});