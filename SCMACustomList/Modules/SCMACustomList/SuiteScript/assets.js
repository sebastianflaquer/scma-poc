function myAccountAssets(request, response) {

    // Parameter Controller
    var assetId = request.getParameter('assetid');
    var custid = request.getParameter('customerid');

    // Load Assets
    if (custid) {
        response.setContentType('JSON');

        var search = nlapiLoadSearch('customrecord_sdg_assets', 566);
        search.addFilter(new nlobjSearchFilter('custrecord_customer', null, 'is', custid));

        var resultSet = search.runSearch().getResults(0, 999);

        response.write(JSON.stringify(resultSet));
    }

    // if (assetId) {
    //     var objCustomer = nlapiLoadRecord('customer', custid);
    //     objCustomer.setFieldValue('custentity_lp_join_loyalty_program', "T");
    //     nlapiSubmitRecord(objCustomer, true);
    // }

}
