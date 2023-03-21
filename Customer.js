Ext.define('VidlyApp.view.Customer', {
    extend: 'Ext.app.ViewController',
    xtype: 'customerGridController',
    alias: 'controller.customer',
    
    init: function() {
        this.customerForm = null;
    },
    
    onAddCustomer: function() {
        this.showCustomerForm('Add Customer', {}, true);
    },
    
    onSaveCustomer: function() {
        var form = this.customerForm.down('form'),
            record = form.getRecord(),
            values = form.getValues(),
            grid = this.getView().lookupReference('customerGrid'),
            store = grid ? grid.getStore() : null;
            console.log('grid:', grid);
        if (!form.isValid()) {
            return;
        }
        
        if (record) {
            record.set(values);
        } else {
            record = Ext.create('VidlyApp.model.Customer', values);
            if (store) { // Add a check to ensure that store is not null before calling add
                store.add(record);
            }
        }
        
        if (store) { // Add a check to ensure that store is not null before calling sync
            store.sync({
                success: function() {
                    form.reset();
                    this.customerForm.hide();
                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to save customer.');
                },
                scope: this
            });
        }
    
    },
    
    onCancelCustomer: function() {
        this.customerForm.hide();
    },
    
    onSelectionChange: function(grid, selected, eOpts) {
        var deleteButton = this.lookupReference('deleteButton');
        
        if (selected.length) {
            deleteButton.enable();
        } else {
            deleteButton.disable();
        }
    },
    
    onDeleteCustomer: function() {
        var selected = this.getView().getSelection(),
            store = this.getView().getStore();
        
        if (selected.length) {
            store.remove(selected);
            store.sync({
                success: function() {
                    this.getView().getSelectionModel().deselectAll();
                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to delete customer.');
                },
                scope: this
            });
        }
    },
    
    showCustomerForm: function(title, record, isCreate) {
        var form = this.customerForm,
            values = {},
            items;
        
        if (!form) {
            form = this.customerForm = Ext.create('VidlyApp.view.CustomerForm', {
                controller: this
            });
        }
        
        form.setTitle(title);
        
        if (!isCreate) {
            values = record.getData();
        }
        
        items = form.down('form').items;
        
        Ext.each(items.items, function(item) {
            var name = item.getName();
            item.setValue(values[name]);
        });
        
        form.show();
    }
});