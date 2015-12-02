Ext.define('ecms.store.Users',{
	extend:'Ext.data.Store',
    requires: [
        'Ext.data.Store',
        'ecms.model.User'
    ],
	models:['ecms.model.User'],
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