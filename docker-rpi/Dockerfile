# Hypriot rpi-node 7.4 used as the base.
FROM hypriot/rpi-node:7.4
MAINTAINER sofkaski <jyrkiokaski@gmail.com>

# Add node-red user so don't need to run as root.
RUN groupadd --gid 1001 red \
  && useradd --uid 1001 --gid red --shell /bin/bash --create-home red

USER red
WORKDIR /home/red

# Install node-red
RUN npm install node-red

# package.json contains Node-RED NPM module and node dependencies
COPY package.json /home/red/
RUN npm install

# Install modbus-RTU, EPR and power limit modules from solarem
COPY *.tgz /home/red/
RUN npm i node-red-contrib-modbus-rtu-0.1.0.tgz
RUN npm i epr04s-0.1.0.tgz
RUN npm i node-red-contrib-power-limit-0.1.0.tgz
RUN /bin/bash -c 'rm *.tgz'

# User configuration directory volume
VOLUME ["/solarem"]
EXPOSE 1880

CMD ["node-red", "/solarem/solarem-flows.json"]
