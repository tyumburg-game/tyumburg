FROM node:16.13.1
RUN apt update && apt install -y netcat
WORKDIR /var/www
COPY ssr/utils/wait-for.sh wait-for.sh
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN chmod +x ./wait-for.sh
