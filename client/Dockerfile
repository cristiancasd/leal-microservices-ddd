FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8063
CMD ["yarn", "dev"] 
