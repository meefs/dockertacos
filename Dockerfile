FROM node:14

WORKDIR /app

COPY web-app/package*.json ./
RUN npm install

COPY web-app/. .

EXPOSE 3000

CMD ["npm", "start"]