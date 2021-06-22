# mini-webserver
Originally taken from this project, I modified to include CORS https://github.com/tobilg/docker-mini-webserver


### Example Docker run CMD

```docker
docker run -d --name=mini-web -p 3000:3000 -v /home/username/docker_dir/miniweb:/public brettdocker/mini-web-cors
```

Visit [http://localhost:8084/status](http://localhost:8084/status) to check if the webservers up!
