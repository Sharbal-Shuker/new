FROM node:alpine

WORKDIR '/app'

COPY package.json
RUN install npm

COPY . .
CMD ["npm","start"]