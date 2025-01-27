FROM node:20-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod
CMD [ "npx", "serve", "-s", "build" ]