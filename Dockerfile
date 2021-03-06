FROM node:14
ENV TOKEN_DEFINITIONS_PATH='./definitions'
ENV PORT=8080
ENV NODE_ENV='production'
WORKDIR /theme/app

COPY package*.json ./
COPY ./ ./
ADD ./api ./api
ADD ./build-tools ./build-tools
ADD ./constants ./constants
ADD ./generator ./generator
ADD ./validator ./validator

ADD ${TOKEN_DEFINITIONS_PATH} ./definitions
RUN npm install

EXPOSE ${PORT}
CMD ["npm", "run", "prod" ]

