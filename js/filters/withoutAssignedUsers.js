/*
 * @copyright Copyright (c) 2017 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *  
 */
import app from '../app/App.js';

/* global app */
/* global angular */

/*
 * Remove all assignedUsers from users list
 */
app.filter('withoutAssignedUsers', function () {
	return function (users, assignedUsers) {
		var _result = [];
		angular.forEach(users, function (user) {
			var _found = false;
			angular.forEach(assignedUsers, function (assignedUser) {
				if (assignedUser.participant.uid === user.uid) {
					_found = true;
				}
			});
			if (_found === false) {
				_result.push(user);
			}
		});
		return _result;
	};
});