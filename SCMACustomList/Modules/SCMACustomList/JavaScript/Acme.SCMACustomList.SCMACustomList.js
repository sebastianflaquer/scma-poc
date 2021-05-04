
define(
	'Acme.SCMACustomList.SCMACustomList'
,   [
		'SCMACustomList.Router'
	]
,   function (
		SCMACustomListRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var myMenu = container.getComponent('MyAccountMenu');

			if (myMenu) {
				myMenu.addGroup({
					id: "stored_assets",
					name: "Stored Assets",
					index: 3,
					url: 'stored-assets'
				});
				/*myMenu.addGroupEntry({
					id: 'ach_myaccount',
					groupid: 'mygroup',
					name: 'ACH',
					index: 1,
					url: 'ach-payment'
				});
				myMenu.addGroupEntry({
					id: 'check_myaccount',
					groupid: 'mygroup',
					name: 'Check',
					index: 2,
					url: 'check-payment'
				});*/
			}

			return new SCMACustomListRouter({
				container: container
			});

		}
	};
});
