docker run \
  --name mongodb \
  -p 27017:27017 \
  -d \
  mongo:4

docker ps # listar os containers ativos
docker stop # parar container

docker exec -it mongodb mongo admin # executar o container e entrar no mongo

#volume
docker volume create --name nodemodules

#api
docker build -t smartschools-api .

docker run \
  --name smartschools-api \
  --link mongodb \
  -e MONGO_URL=mongodb \
  -e PORT=4000 \
  -p 4000:4000 \
  -v `pwd`/src:/src \
  -v nodemodules:/src/node_modules \
  smartschools-api npm run dev

#remover tudo
docker rm smartschools-api
docker volume rm nodemodules
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -a -q)

docker-compose up --build

docker-compose down


docker run -p 3000:3000 smartschools-api
docker run -p 3000:3000 -d smartschools-api
