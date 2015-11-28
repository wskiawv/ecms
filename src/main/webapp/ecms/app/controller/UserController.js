Ext.define('ecms.controller.UsersController', {
    extend: 'Ext.app.Controller',
    stores: ['ecms.store.Users'],
    models: ['ecms.model.User'],
    views:[
    	'UserList',
    	'UserEdit'
    ],
   
    init:function(){
    	this.control({
    		'UserList':{
    			itemdblclick:this.editUser
    		},
            'UserEdit button[action=save':{
                clcik:this.updateUser
            }
    	})
    },
    editUser:function(grid,record){
    	var view=Ext.widget('UserList');
    	view.down('form').loadRecord(record);
    },
    updateUser:function(button){
        var win =button.up('window'),
            form=win.down('form'),
            record=form.getRecord(),
            values=form.getValues();
        record.set(values);
        win.close();
    }
    
});