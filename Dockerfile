FROM node:alpine

WORKDIR /usr/scr/app

COPY package.json .
RUN install npm

COPY . .
EXPOSE 5000
CMD ["npm","start"]
