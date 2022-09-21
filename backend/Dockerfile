FROM node:14.4-buster

RUN mkdir /srv/app
COPY package.json /srv/app/
COPY ormconfig.json /srv/app/
COPY tsconfig.json /srv/app/
WORKDIR /srv/app
RUN yarn install