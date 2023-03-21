 Ext.define('VidlyApp.view.CustomerGrid',{
     extend: 'Ext.grid.Panel',
     alias:'view.customerGrid',
     requires:['VidlyApp.model.Customer','VidlyApp.store.Customer'],
     xtype: 'customerGrid',
     controller: 'customer',
    
     
     store: {
         type: 'Customer'
     },
     
     title: 'Customers', 
     columns:[
         {text: 'Id', dataIndex: 'Id', flex: 1},
         {text: 'Name', dataIndex: 'Name', flex: 1}
     ],
     dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add User',
            handler: 'onAddCustomer'
        }, {
            xtype: 'button',
            text: 'Delete User',
            reference: 'deleteButton',
            handler: 'onDeleteUser',
            disabled: true
        }]
    }],
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    
 });