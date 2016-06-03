FROM java

RUN wget https://github.com/celer/simple-java-websockets-jetty-example/archive/master.zip
RUN unzip master.zip
RUN (cd simple* && ./run.sh)




