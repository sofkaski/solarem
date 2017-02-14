FROM node:7.5

MAINTAINER sofkaski <jyrkiokaski@gmail.com>

# Home directory for Node-RED application source code.
RUN mkdir -p /usr/src/node-red

# User data directory, contains flows, config and nodes.
RUN mkdir /data

WORKDIR /usr/src/node-red

# Add node-red user so we aren't running as root.
RUN useradd --home-dir /usr/src/node-red --no-create-home node-red \
    && chown -R node-red:node-red /data \
    && chown -R node-red:node-red /usr/src/node-red

USER node-red

# package.json contains Node-RED NPM module and node dependencies
COPY package.json /usr/src/node-red/
RUN npm install
COPY start-node-red.sh /usr/src/node-red/
RUN chmod u+x /usr/src/node-red/start-node-red.sh
COPY settings.js /usr/src/node-red/
COPY solarem-flows.json /usr/src/node-red/

# Install modbus-RTU, EPR and power limit modules
COPY *.tgz /usr/src/node-red/
RUN npm i node-red-contrib-modbus-rtu-0.1.0.tgz
RUN npm i epr04s-0.1.0.tgz
RUN npm i epr04s-0.1.0.tgz
RUN /bin/bash -c 'rm *.tgz'

# User configuration directory volume
VOLUME ["/data"]
EXPOSE 1880

# Environment variable holding file path for flows configuration
ENV FLOWS=flows.json

CMD ["node-red", "--settings", "/usr/src/node-red/settings.js", "/usr/src/node-red/solarem-flows.json"]
