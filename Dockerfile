#I need the latest node.js
FROM node:latest

#Get package files and install modules
COPY ./myapp/package*.json .
RUN npm install

#Copy the other things
COPY ./myapp/public ./public
COPY ./myapp/src ./src

#an entry point for the application
ENTRYPOINT ["npm","start"]
