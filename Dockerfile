FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build

FROM lipanski/docker-static-website:latest
COPY --from=build /app/out .

CMD ["/busybox", "httpd", "-f", "-v", "-p", "3000", "-c", "httpd.conf"]