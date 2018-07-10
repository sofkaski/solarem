ARG NODE_VERSION=8
FROM arm32v7/node:${NODE_VERSION}

# add support for gpio library
RUN apt-get update
RUN apt-get install -y python-pip python-dev
RUN pip install -U RPi.GPIO
#RUN apt-get install python-rpi.gpio

# Home directory for Node-RED application source code.
RUN mkdir -p /usr/src/node-red

# User data directory, contains flows, config and nodes.
RUN mkdir /data

WORKDIR /usr/src/node-red

# package.json contains Node-RED NPM module and node dependencies
COPY package.json /usr/src/node-red/
RUN npm i npm@latest -g
RUN npm install

# Install modbus-RTU, EPR and power limit modules from solarem
COPY *.tgz ./
RUN npm i node-red-contrib-modbus-rtu-v0.1.2.tgz \
  epr04s-v0.1.1.tgz \
  node-red-contrib-power-limit-v0.1.1.tgz \
  node-red-contrib-gpio

RUN /bin/bash -c 'rm *.tgz'

# expose port
EXPOSE 1880

# Environment variable holding file path for flows configuration
ENV FLOWS=flows.json
ENV NODE_PATH=/usr/src/node-red/node_modules:/data/node_modules

CMD ["npm", "start", "--", "--userDir", "/data"]
