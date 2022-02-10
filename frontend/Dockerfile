FROM node:latest
WORKDIR /app

COPY package*.json ./
COPY ./ ./
RUN npm install
RUN npm i -S react-scripts
EXPOSE 3000
CMD ["npm","start"]
