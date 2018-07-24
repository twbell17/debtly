FROM node:9.8.0

# set working directory
RUN mkdir -p /src/api
WORKDIR /src/api

# add `/usr/src/api/node_modules/.bin` to $PATH
ENV PATH /src/api/node_modules/.bin:$PATH

# install and cache api dependencies
ADD package.json /src/api/package.json
RUN npm install --silent

# apk add --no-cache make gcc g++ python && \
# npm rebuild bcrypt --build-from-source && \
# apk del make gcc g++ python

# start api
CMD ["npm", "start"]
