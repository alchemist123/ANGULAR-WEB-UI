FROM node:16.13.0-alpine as builder
WORKDIR /ANGULAR-WEB-UI
COPY . .
RUN npm install && npm run ng build


FROM nginx:1.17.10-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/ANGULAR-WEB_UI .
ENTRYPOINT [ "nginx","-g","daemon off;" ]