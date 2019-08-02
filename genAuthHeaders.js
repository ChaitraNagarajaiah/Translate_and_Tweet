/* expects object
 * {
 *  reqMethod, baseUrl, callbackUrl, consumerKey, consumerSecret
 * }
*/
function genAuthHeaders(options) {
	const reqMethod = options.reqMethod.toUpperCase();
	const baseUrl = options.baseUrl;

	// Set up params
	const consumerKey = options.consumerKey;
	const consumerSecret = options.consumerSecret;
	const nonce = genNonce(32);
	const sigMethod = "HMAC-SHA1";
	const timestamp = Math.floor(Date.now() / 1000);
	const version = "1.0";

	const params = {
		oauth_consumer_key: consumerKey,
		oauth_nonce: nonce,
		oauth_signature_method: sigMethod,
		oauth_timestamp: timestamp,
		oauth_version: version,
	}

	if (options.callbackUrl) {
		params.oauth_callback = options.callbackUrl
	}

	if (options.oauthToken) {
		params.oauth_token = options.oauthToken
	}

	const queryString = genQueryString(params);

	const sigBaseString = `${reqMethod}&${encodeURIComponent(baseUrl)}&${encodeURIComponent(queryString)}`
	const signingKey = `${encodeURIComponent(consumerSecret)}&`;

	const hmacSig = CryptoJS.HmacSHA1(sigBaseString, signingKey);
	const oauthSig = CryptoJS.enc.Base64.stringify(hmacSig);

	let headers = "";
	for (let key in params) {
		if (key === "oauth_callback" || "oauth_token") {
			headers += `${key}="${encodeURIComponent(params[key])}", `;
		} else {
			headers += `${key}="${params[key]}",`;
		}
	}
	headers += `oauth_signature="${encodeURIComponent(oauthSig)}"`;

	return {
		Authorization: `OAuth ${headers}`
	};
}

function genNonce(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function genQueryString(params) {
	const keys = Object.keys(params)
		.map(key => encodeURIComponent(key))
		.sort();

	let queryString = "";
	keys.forEach(function (key) {
		let encodedVal = encodeURIComponent(params[key]);
		queryString += `${key}=${encodedVal}&`;
	});
	return queryString.slice(0, -1);
}