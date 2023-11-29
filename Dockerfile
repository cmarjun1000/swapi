FROM node:latest
RUN echo "Build the application"

COPY . .

WORKDIR .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm","run","dev"]