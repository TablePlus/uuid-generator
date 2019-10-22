'use strict';

import uuidv1 from 'uuid/v1';

var getUUID = function() {
	return uuidv1();
}

export { getUUID };