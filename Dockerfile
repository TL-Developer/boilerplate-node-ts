FROM node:14

WORKDIR /app

COPY package*.json ./

#--silent
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
