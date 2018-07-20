//Type your code here
//var httpclient = null;
function postToFacebook() {
    httpclient = new kony.net.HttpRequest();
    httpclient.open(constants.HTTP_METHOD_GET, "https://images.contentstack.io/v3/assets/blte699a6163cd8c122/bltf386045334d778f1/5ac327fd23d67a790b465814/download");
    httpclient.setRequestHeader("Content-type", "application/json");
    httpclient.setRequestHeader("Access-Control-Allow-Origin", "*");
    httpclient.onReadyStateChange = fnCallBack
    httpclient.send();
    // 	var rb = httpclient.response;
    //   alert(rb);
}

function fnCallBack() {
    if (httpclient.readyState == constants.HTTP_READY_STATE_DONE) alert(JSON.stringify(httpclient));
}