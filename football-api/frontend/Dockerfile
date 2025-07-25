# frontend/Dockerfile

FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Angular dev server exposes on port 4200
EXPOSE 4200

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

