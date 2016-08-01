
if [ ! -x lib ]
then
	if [ ! -f jetty.tgz ]
	then
		wget -O jetty.tgz "https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/9.3.9.v20160517/jetty-distribution-9.3.9.v20160517.tar.gz"
	fi

	tar -zxvf jetty.tgz 
	mv jetty*/lib lib
fi

export CLASSPATH=lib/jetty-server-9.3.9.v20160517.jar:lib/websocket/javax.websocket-api-1.0.jar:lib/websocket/javax-websocket-server-impl-9.3.9.v20160517.jar:lib/websocket/websocket-api-9.3.9.v20160517.jar:lib/websocket/websocket-server-9.3.9.v20160517.jar:lib/websocket/websocket-servlet-9.3.9.v20160517.jar:lib/jetty-util-9.3.9.v20160517.jar:lib/jetty-servlet-9.3.9.v20160517.jar:lib/servlet-api-3.1.jar:.:lib/annotations/javax.annotation-api-1.2.jar:lib/annotations/asm-5.0.1.jar:lib/jetty-http-9.3.9.v20160517.jar:lib/jetty-io-9.3.9.v20160517.jar:lib/websocket/websocket-common-9.3.9.v20160517.jar

javac WebSocketTest.java MyWebSocketHandler.java 
