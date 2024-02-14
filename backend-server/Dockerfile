FROM node:16 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/backend-server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]