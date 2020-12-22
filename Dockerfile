FROM node:14

WORKDIR /user/app

COPY package*.json ./

# ENV NODE_ENV=production

#--silent
RUN npm install

COPY . .

RUN npm run build

RUN echo $(ls -a)

EXPOSE 3000

CMD ["npm", "start"]
