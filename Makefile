config:
	docker-compose config

build:
	docker-compose build

bash:
	docker-compose run --service-ports app bash

down:
	docker-compose down
