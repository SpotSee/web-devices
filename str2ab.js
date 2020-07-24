function str2ab (str) {
		var buf = new ArrayBuffer(str.length*1); // 2 bytes for each char
		var bufView = new Uint8Array(buf);
		for (var i=0, strLen=str.length; i < strLen; i++) {
			bufView[i] = str.charCodeAt(i);
		}
	return buf;
	};