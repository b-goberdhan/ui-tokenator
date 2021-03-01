FROM node:14
ENV THEME_DEFINITIONS_PATH='./definitions'
ENV PORT=8080
ENV NODE_ENV='production'
WORKDIR /theme/app

COPY package*.json ./
COPY ./schema/schema.js ./schema/schema.js
COPY app.js app.js
COPY config.js config.js

ADD ${THEME_DEFINITIONS_PATH} ${THEME_DEFINITIONS_PATH}
RUN npm install

EXPOSE ${PORT}
CMD ["npm", "run", "start" ]

