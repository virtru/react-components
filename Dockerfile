FROM node:10

 # Create app directory
WORKDIR /usr/src/app

 # Install app dependencies
COPY package.json ./
COPY package-lock.json ./

 # RUN npm install

 # Bundle app source
COPY . .

EXPOSE 9001

CMD ["npm", "run", "storybook"] 
