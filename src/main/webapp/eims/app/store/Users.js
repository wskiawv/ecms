Ext.define('eims.store.Users',{
    extend:'Ext.data.Store',
    requires: [
        'Ext.data.Store',
        'eims.model.User'
    ],
    models:['eims.model.User'],
    alias:'store.Users',
    pageSize:20,
	proxy: {
        type: 'ajax',
        url: AppPath+'/user/search',
        reader: {
            type: 'json',
            root: 'result',
            totalProperty:'totalCount',
            rootProperty:'result',
            successProperty:'success',
            idProperty:'id'
        }
    }
    //autoLoad: true
});