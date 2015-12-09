Ext.define('eims.view.UserList',{
	extend:'Ext.grid.Panel',
	alias:'widget.UserList',
        requires:['Ext.grid.Panel','eims.store.Users'],
	title:'用户',
	store:{type:'Users'},
	viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },
    layout:'fit',
	initComponent:function(){
        var me=this;

		me.columns=[{
            text     : '用户名',       
            width    : 120,     
            sortable : true,
            dataIndex: 'username'
        },
        {
            text     : '密码',
            width    : 120,
            sortable : true,            
            dataIndex: 'password'
        },{
            text     : '注册时间',           
            flex     : 1,
            sortable : false,           
            dataIndex: 'registertime'
        }];
        me.bbar=Ext.create('eims.common.Paging', {
            store: me.store,  
            dock : 'bottom',
            displayInfo : true,
            displayMsg: '当前显示 {0} - {1} 共 {2}',
            emptyMsg: "没有记录",
            refreshText:'刷新',
            prevText:'上一页',
            nextText:'下一页',
            firstText:'第一页',
            afterPageText:'页',
            beforePageText:'第',
            lastText:'最后页'          
        });
        me.on('afterrender',function(grid){
            grid.getStore().load();
            //grid.doLayout();
        });
       // me.doLayout();
        me.callParent([me]);
       
	}
});