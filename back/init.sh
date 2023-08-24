# Run docker compose
docker-compose up -d

# Wait for the container to start
sleep 5

# Create database
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all
