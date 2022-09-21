FROM node:14-slim

RUN mkdir /srv/app
WORKDIR /srv/app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn install