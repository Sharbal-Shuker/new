FROM node:alpine

WORKDIR /usr/scr/app

COPY package.json .
RUN install npm

COPY . .
CMD ["npm","start"]
