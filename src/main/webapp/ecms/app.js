/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ecms',
    extend:'Ext.app.Application',
    //extend: 'ecms.Application',

    requires: [
       // 'ecms.view.main.Main',
        'ecms.App'
       // 'ecms.controller.UsersController',
      //  'ecms.view.UserList'
    ],
  // controllers:['ecms.controller.UsersController'],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'ecms.view.main.Main',
    init: function() {
        var app = new ecms.App();
    }
    /*launch:function(){
        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            items:[{
                xtype:'UserList'
            }]
        });
    }*/
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to ecms.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
