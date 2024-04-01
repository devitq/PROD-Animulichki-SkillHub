FROM node:lts-alpine3.19 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.17-slim

COPY --from=builder /app/dist /usr/share/nginx/html
