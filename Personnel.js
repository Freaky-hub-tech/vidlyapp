Ext.define('VidlyApp.model.Personnel', {
    extend: 'VidlyApp.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'Name', type: 'string' }
    ],
    proxy: {
        type: 'rest',
        url: 'https://localhost:44390/api/customers',
        reader: {
            type: 'json',
            rootProperty: 'ArrayofCustomer'
        }
    }
});
