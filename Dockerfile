FROM node:18-alpine
RUN mkdir /app
WORKDIR /app
ADD package.json /app/
RUN yarn
ADD . /app/
