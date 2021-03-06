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

RUN ls -R -Inode_modules
ADD ${TOKEN_DEFINITIONS_PATH} ./definitions
RUN npm install
RUN npm run build
RUN ls -R -Inode_modules

EXPOSE ${PORT}
CMD ["npm", "run", "prod" ]

