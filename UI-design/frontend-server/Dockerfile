FROM node:16 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/frontend-server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]