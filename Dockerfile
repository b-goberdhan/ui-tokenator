FROM node:14
ENV NODE_ENV='production'
ENV USE_PLACE_HOLDER_DEFINITION=true
ENV GENERATE_JSON=true
ENV GENERATE_CSS=true
ENV GENERATE_SASS=true
ENV PORT=8080

WORKDIR /theme/app

COPY package*.json ./
COPY ./ ./
ADD ./api ./api
ADD ./build-tools ./build-tools
ADD ./constants ./constants

COPY ./definitions/_placehlder.yaml ./definitions/_placeholder.yaml
RUN npm install

EXPOSE ${PORT}
CMD ["npm", "run", "prod" ]
