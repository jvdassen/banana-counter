FROM node:19-alpine

WORKDIR /app
COPY . .
RUN npm i

CMD [ "ash", "start.sh" ]
VOLUME data
