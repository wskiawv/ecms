Ext.define('ecms.view.UserList',{
	extend:'Ext.grid.Panel',
	alias:'widget.UserList',
    requires:['Ext.grid.Panel','ecms.store.Users'],
	title:'用户',
	store:['ecms.store.Users'],
	viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

	initComponent:function(){
		this.columns=[{
            text     : '用户名',       
             width    : 75,     
            sortable : true,
            dataIndex: 'username'
        },
        {
            text     : '密码',
            width    : 75,
            sortable : true,
            renderer : 'usMoney',
            dataIndex: 'password'
        },{
            text     : '注册时间',           
            flex     : 1,
            sortable : false,
            renderer : 'usMoney',
            dataIndex: 'registertime'
        }];
        this.callParent();
	}
});