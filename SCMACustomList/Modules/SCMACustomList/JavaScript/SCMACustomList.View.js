define('SCMACustomList.View', [
    'customlist_details.tpl',
    'Backbone',

    'jQuery'
], function CustomListDetailsView(
    assetsDetailsTpl,
    Backbone,

    jQuery,
) {
    'use strict';

    return Backbone.View.extend({

      template: assetsDetailsTpl,

      initialize: function initialize(options) {
          this.application = options.application;
          this.model = options.model;
          this.params = options.params;

          // load data
          var self = this,
              url = "/app/site/hosting/scriptlet.nl?script=1191&deploy=1"
              //data = { "salesorderid": parseInt(this.params.salesorderid, 10) };

          jQuery.ajaxSetup({ cache: false });

          //var projects = jQuery.get(url, data).fail(function (data) {
          var projects = jQuery.get(url).fail(function (data) {
              console.log("Error:", data);
          });

          jQuery.when(projects).done(function(assets) {
              self.model.set({assets: assets});
              // render the content
              self.showContent();
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
            // var label = this.model.get('label'),
            // company = (Configuration.get('siteSettings.registration.displaycompanyfield') === 'T') ? this.model.get('company') : null,
            // fullname = this.model.get('fullname');

            return {
                // model: this.model,
                // company: company
            };
        }

    });
});
