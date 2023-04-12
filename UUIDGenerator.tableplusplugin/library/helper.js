import { v1 as uuidv1 } from 'uuid';

var getUUID = function() {
	return uuidv1();
}

export { getUUID };