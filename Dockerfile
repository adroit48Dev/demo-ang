
# Stage 1
FROM node:12.16.1-alpine As builder
#RUN mkdir /usr/src/app
WORKDIR  /usr/src/app
COPY package.json package-lock.json ./

RUN npm install -g @angular/cli
RUN npm install
RUN npm audit fix
COPY . .
#ENV MONGODB_URI mongodb://mongo:27017/angularfullstack
#RUN npm run build --dev
CMD [ "ng", "serve", "--host", "0.0.0.0" ]
