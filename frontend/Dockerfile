FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .

RUN npx next telemetry disable
RUN npm run build

FROM node:alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs
EXPOSE 3000
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next

RUN npx next telemetry disable
CMD ["node_modules/.bin/next", "start"]
