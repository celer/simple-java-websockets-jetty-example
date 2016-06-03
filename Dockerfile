FROM java

RUN wget https://github.com/celer/simple-java-websockets-jetty-example/archive/master.zip
RUN unzip master.zip
RUN mv simpl*/* . 
RUN ./setup.sh

CMD ./run.sh




