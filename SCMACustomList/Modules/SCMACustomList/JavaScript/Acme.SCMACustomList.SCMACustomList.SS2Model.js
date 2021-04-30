// Model.js
// -----------------------
// @module Case
define("Acme.SCMACustomList.SCMACustomList.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/SCMACustomList/SuiteScript2/SCMACustomList.Service.ss"
            ),
            true
        )
});
});
