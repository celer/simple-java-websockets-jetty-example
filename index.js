var ws = new WebSocket("ws://"+document.location.hostname+":"+document.location.port+"/");

got=0
ws.onopen = function() {
    document.body.innerHTML+="<b>Opened</b><br>"
    i=0
    function sendMsg(){
	i++
	msg="Hello Server "+i
	ws.send(msg);
        document.body.innerHTML+="Sent "+msg+"</br>"
	if (i<10){
		setTimeout(function(){
		sendMsg()
		},500)
	} 	
    }

   sendMsg()

};

ws.onmessage = function (evt) {
    got++
    document.body.innerHTML+="<b>Got "+evt.data+"</b><br>"
    if(got>10){
    	document.body.innerHTML+="<b>Success</b><br>"
    }
};

ws.onclose = function() {
    document.body.innerHTML+="<b>Closed</b><br>"
};

ws.onerror = function(err) {
    document.body.innerHTML+="<b>Error:"+err+"</b><br>"
};
