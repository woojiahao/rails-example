FROM node:16.13.1
WORKDIR /client
COPY "package.json" .
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["npm", "start"]
