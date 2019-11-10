ARG NODE_VERSION_TAG=${NODE_VERSION_TAG}
FROM node:${NODE_VERSION_TAG}

RUN npm install -g yarn
RUN apt-get update \
  && apt-get install -y git
RUN npm install -g gatsby-cli
