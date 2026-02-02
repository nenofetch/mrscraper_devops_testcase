FROM node:lts-alpine3.23
WORKDIR /app
COPY app/ .
EXPOSE 3000
CMD ["npm", "start"]