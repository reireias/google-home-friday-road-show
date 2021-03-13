FROM node:14 AS builder

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install --production

COPY . .

FROM gcr.io/distroless/nodejs:14

COPY --from=builder /app /app

CMD ["/app/src/main.js"]
