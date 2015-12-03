Ext.define('ecms.store.Users',{
	extend:'Ext.data.Store',
    requires: [
        'Ext.data.Store',
        'ecms.model.User'
    ],
	models:['ecms.model.User'],
    alias:'Users',
    
    constructor:function(){
        var config=Ext.apply(this,{
            proxy: {
                type: 'ajax',
                url: '/user/search',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            },
            pageSize:20
            // autoLoad: true
        });
        this.callParent([config]);
    }
	
});