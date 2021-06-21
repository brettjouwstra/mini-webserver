FROM mhart/alpine-node:8
	
RUN mkdir -p /app && mkdir -p /app/public && mkdir -p /app/file_directory

ADD package.json /app/package.json 
ADD mini-webserver.js /app/mini-webserver.js

RUN cd /app && npm install

VOLUME ["/app/public"]
VOLUME ["/app/file_directory"]

EXPOSE 3000

CMD ["node", "/app/mini-webserver.js"]
