FROM node:14.16.0-alpine
WORKDIR /usr/src/app/frontend
COPY ./package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]
