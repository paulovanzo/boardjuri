FROM node:14.4-buster
RUN mkdir /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN yarn
EXPOSE 5000

CMD yarn dev