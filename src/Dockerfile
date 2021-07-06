
# Stage 1

FROM node:latest as node
WORKDIR /app/dist
COPY . .
RUN npm install 
RUN npm run build:prod

# Stage 2

FROM nginx:latest
COPY --from=node /app/dist  /usr/share/nginx/html
