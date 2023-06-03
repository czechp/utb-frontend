FROM node:19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src .
EXPOSE 4200
CMD ["npm", "start"]
