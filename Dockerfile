FROM node:18-alpine

WORKDIR /DailyMoodTracker/

COPY package.json .

RUN npm install

COPY . .



CMD ["npm","run","dev"]
