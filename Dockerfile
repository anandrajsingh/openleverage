FROM node:20 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["server", "-s", "dist", "-l", "3000"]