FROM node:14.4-buster

RUN mkdir /usr/app
WORKDIR /usr/app
COPY package.json ./
COPY ormconfig.json ./
COPY tsconfig.json ./
RUN npm install