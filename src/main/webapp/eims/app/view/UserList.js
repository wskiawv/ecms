Ext.define('eims.view.UserList',{
	extend:'Ext.grid.Panel',
	alias:'widget.UserList',
        requires:['Ext.grid.Panel','eims.store.Users'],
	title:'用户',
	store:['eims.store.Users'],
	viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },

	initComponent:function(){
        var me=this;
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
        this.bbar=Ext.create('Ext.PagingToolbar', {
            store: me.store,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display"           
        });
        this.callParent();
       
	}
});