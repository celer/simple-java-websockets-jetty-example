
var q = {};
if(document.location.href && document.location.href.split('?').length>1){
	document.location.href.split('?')[1].split('&').forEach(function(i){
	    q[i.split('=')[0]]=i.split('=')[1];
	});
}

console.log(q)

host=q["host"]||document.location.hostname
port=q["port"]||document.location.port

url="ws://"+host+":"+port+"/"

document.body.innerHTML+="WS URL "+url+"</br>"

var ws = new WebSocket("ws://"+host+":"+port+"/");

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
