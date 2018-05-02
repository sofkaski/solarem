# Hypriot rpi-node 8.1 used as the base.
FROM hypriot/rpi-node:8.1
MAINTAINER sofkaski <jyrkiokaski@gmail.com>

# Install rpi GPIO pyhton modules
RUN apt-get update && apt-get install python-rpi.gpio python3-rpi.gpio

# Add node-red user so don't need to run as root.
#RUN groupadd --gid 1001 red \
#  && useradd --uid 1001 --gid red --shell /bin/bash --create-home red

#USER red
RUN mkdir /home/solarem
WORKDIR /home/solarem

# Install node-red
RUN npm install node-red

# package.json contains Node-RED NPM module and node dependencies
COPY package.json /home/solarem
RUN npm install

# Install modbus-RTU, EPR and power limit modules from solarem
COPY *.tgz /home/solarem/
RUN npm i node-red-contrib-modbus-rtu-0.1.0.tgz epr04s-0.1.0.tgz node-red-contrib-power-limit-0.1.0.tgz
RUN /bin/bash -c 'rm *.tgz'

# User configuration directory volume
RUN mkdir /home/solarem/flows
VOLUME ["/home/solarem/flows"]
EXPOSE 1880

CMD ["./node_modules/node-red/bin/node-red-pi", "./flows/solarem-flows.json"]
