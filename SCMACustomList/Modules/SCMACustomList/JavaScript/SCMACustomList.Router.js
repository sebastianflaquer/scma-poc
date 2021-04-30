define('SCMACustomList.Router', [
    'SCMACustomList.View',
    'SCMACustomList.Model',

    'Backbone',
    'Utils',

    'underscore'
], function CustomListRouter(
    CustomListView,
    Model,

    Backbone,
    Utils,

    _
) {
    'use strict';

    return Backbone.Router.extend({
        routes: {
            //'ach-payment': 'achpayment',
            'stored-assets': 'viewAllAssets'
        },

        initialize: function initialize(application) {
            this.application = application;
        },

        // achpayment: function achpayment() {
        //     var view = new CustomListDetailsAchView({
        //         application: this.application
        //     });
        //
        //     return view.showContent();
        // },
        viewAllAssets: function viewAllAssets(options) {
            //options = SC.Utils.parseUrlOptions(options);
            var model = new Model(),
                view = new CustomListView({
                    application: this.application,
                    model: model
                    //params: options
            });

            return view.showContent();
        }
    });
});
