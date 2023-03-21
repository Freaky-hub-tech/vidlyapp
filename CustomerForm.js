Ext.define('VidlyApp.view.CustomerForm', {
    extend: 'Ext.window.Window',
    alias: 'view.customerForm',
    requires: ['VidlyApp.model.Customer'],
    title: 'Customer',
    store: 'Customers',
    reference: 'customerGrid',
    modal: true,
    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Id',
            name: 'Id',
            allowBlank: false
        }, {
            fieldLabel: 'Name',
            name: 'Name'
        }]
    }],
    buttons: [{
        text: 'Save',
        handler: 'onSaveCustomer'
    }, {
        text: 'Cancel',
        handler: 'onCancelCustomer'
    }]
});