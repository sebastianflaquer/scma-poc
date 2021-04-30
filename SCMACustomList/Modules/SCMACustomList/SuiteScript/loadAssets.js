function myAccountAssets(request, response) {

    // Parameter Controller
    var balance = request.getParameter('balance');
    var history = request.getParameter('history');
    var custid = request.getParameter('customerid');
    var points = request.getParameter('points');
    var terms = request.getParameter('terms');

    if (balance && balance === "T") {

        var lpthreshold = nlapiGetContext().getSetting('SCRIPT', 'custscript_lp_threshold_value')

        var objCustomer = nlapiLoadRecord('customer', custid);

        nlapiLogExecution("debug", "info", objCustomer.getFieldValue('custentity_lp_points_balance'));

        var lTerms = objCustomer.getFieldValue('custentity_lp_join_loyalty_program');
        var lPoints = objCustomer.getFieldValue('custentity_lp_points_balance');

        if (lTerms === "F") {
            response.write('false|0|0')
        } else {
            response.write('true|' + lPoints + "|" + lpthreshold)
        }
    }


    // Get Customer Points History
    if (history && history === "T") {

        response.setContentType('JSON');

        var search = nlapiLoadSearch('customrecord_lp_redemption_form', 566);
        search.addFilter(new nlobjSearchFilter('custrecord_lprf_customer', null, 'is', custid));

        var resultSet = search.runSearch().getResults(0, 999);

        response.write(JSON.stringify(resultSet));

    }

    if (points) {

        var record = nlapiCreateRecord('customrecord_lp_redemption_form');
        record.setFieldValue('custrecord_lprf_customer', custid);
        record.setFieldValue('custrecord_lprf_customerid', custid);
        record.setFieldValue('custrecord_lprf_redemption', points);
        id = nlapiSubmitRecord(record, true, true);

    }

    if (terms && terms === "T") {

        var objCustomer = nlapiLoadRecord('customer', custid);
        objCustomer.setFieldValue('custentity_lp_join_loyalty_program', "T");
        nlapiSubmitRecord(objCustomer, true);

    }

}
