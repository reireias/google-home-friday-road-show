FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY . .

CMD ["node", "/app/src/main.js"]
