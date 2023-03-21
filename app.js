/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'VidlyApp.Application',

    name: 'VidlyApp',

    requires: [
        // This will automatically load all classes in the VidlyApp namespace
        // so that application classes do not need to require each other.
        'VidlyApp.*'
    ],
    launch: function () {
        // This code might fail if the Viewport is not yet ready
        // Ext.Viewport.add({
        //     xtype: 'customerGrid'
        // });

        console.log('Application launch called');
    },

    onLaunch: function () {
        // This code will execute after all required components are initialized
        // Ext.Viewport.add({
        //     xtype: 'customerGrid'
        // });

        console.log('Application onLaunch called');
    },

    // The name of the initial view to create.
    mainView: 'VidlyApp.view.main.Main',
});
