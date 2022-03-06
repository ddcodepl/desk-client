FROM node:14-alpine3.11

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 4173

CMD [ "npm", "run", "preview" ]
