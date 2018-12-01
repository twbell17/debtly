FROM node:9.5.0-alpine

# set working directory
RUN mkdir -p /src/app
WORKDIR /src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /src/app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start", "--no-shrinkwrap"]
