
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.SCMACustomList.SCMACustomList.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.SCMACustomList.SCMACustomList.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}