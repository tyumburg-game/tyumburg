FROM node:16.13.1
WORKDIR /var/www
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["node", "server.js"]
