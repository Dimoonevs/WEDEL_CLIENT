FROM node:20.0.0-alpine as build
WORKDIR /usr/src/app
EXPOSE 3000
COPY package.json package-lock.json ./
COPY /particles.js ./
RUN npm install
RUN rm -rf /usr/src/app/particles.js
COPY . .
RUN npm install
RUN node_modules/.bin/ng build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/wedel-client /etc/nginx/html