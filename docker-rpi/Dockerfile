# Hypriot rpi-node 7.4 used as the base.
FROM hypriot/rpi-node:7.4

MAINTAINER sofkaski <jyrkiokaski@gmail.com>

# Set up directories
WORKDIR /root/.node-red
COPY start-node-red.sh /root/.node-red/
RUN chmod u+x /root/.node-red/start-node-red.sh
COPY settings.js /root/.node-red/

# Install node red and dashboard
RUN npm install --unsafe-perm node-red
RUN npm install node-red-dashboard

# Install modbus-RTU, EPR and power limit modules
COPY *.tgz /root/.node-red/
RUN npm i node-red-contrib-modbus-rtu-0.1.0.tgz
RUN npm i epr04s-0.1.0.tgz
RUN npm i epr04s-0.1.0.tgz
RUN /bin/bash -c 'rm *.tgz'

VOLUME /root/node-red
EXPOSE 1880

CMD /root/.node-red/start-node-red.sh
