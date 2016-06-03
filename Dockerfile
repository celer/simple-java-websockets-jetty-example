FROM java

RUN wget https://github.com/celer/simple-java-websockets-jetty-example/archive/master.zip
RUN unzip master.zip
RUN (cd simp* && ./setup.sh)

EXPOSE 8080

CMD (cd simp* && ./run.sh)




