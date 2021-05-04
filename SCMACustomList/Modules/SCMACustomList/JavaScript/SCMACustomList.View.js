define('SCMACustomList.View', [
    'customlist_details.tpl',
    'Backbone',

    'jQuery',
    'underscore'
], function CustomListDetailsView(
    assetsDetailsTpl,
    Backbone,

    jQuery,
    _
) {
    'use strict';

    return Backbone.View.extend({

      template: assetsDetailsTpl,

      initialize: function initialize(options) {
          this.application = options.application;
          this.model = options.model;
          //this.params = options.params;
          this.Layout = options.application.getComponent('Layout');

          // load data
          var self = this,
              url = "/app/site/hosting/scriptlet.nl?script=1191&deploy=1";
              //data = { "customerid": parseInt(, 10) };

          jQuery.ajaxSetup({ cache: false });

          //var projects = jQuery.get(url, data).fail(function (data) {
          var assets = jQuery.get(url).fail(function (data) {
              console.log("Error:", data);
          });

          jQuery.when(assets).done(function(assets) {
              var myAssets = self.parseResults(assets);
              self.model.set({assets: myAssets});
debugger
              // Show the view with data
              return self.Layout.showContent(self, {});
          });
      },

      parseResults: function (searchResults) {
          return _.map(searchResults, function(result) {
              return {
                  id: result.columns.id,
                  name: result.columns.name,
                  image: result.columns.custrecord_image.name
              };
          });
      },

      getSelectedMenu: function getSelectedMenu() {
        return 'stored_assets';
      },

      events: {
          // 'click .invoice-details-button-make-a-payment': 'submitButton',
          // 'click [data-action="view-thank-page"]': 'submitButton'
      },

      // submitButton: function(e) {
      //     var $form = this.$(e.target);
      //     var $deferred = jQuery.Deferred();
      //     //show thank you page
      //     var thanks = new customThanksView({
      //         application: this.application
      //     });
      //     thanks.showContent();
      //     //thanks.render();
      //     e.stopPropagation();
      //     e.preventDefault();
      // }

        getContext: function ()
        {
            var assets = this.model.get('assets');
debugger;
            return {
                assets: assets
            };
        }

    });
});
