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

        initialize: function initialize(options) {
            this.application = options.container;
        },

        viewAllAssets: function viewAllAssets(options) {
            //options = SC.Utils.parseUrlOptions(options);
            var model = new Model(),
                view = new CustomListView({
                    application: this.application,
                    model: model
                    //params: options
            });
            //var Layout = application.getComponent('Layout');
            //return view.showContent(view, {});
        }

    });
});
