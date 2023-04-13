import { v1, v4 } from 'uuid';

var getUUID = function(ver, hyphens) {
	var val = null;
	if (ver === "1") {
		val = v1();
	}
	if (ver === "4") {
		val = v4();
	}
	if (!hyphens) {
		val = val.replace(/-/g, "");
	}

	return val;
}

export { getUUID };