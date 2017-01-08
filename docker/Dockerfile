# Hypriot rpi-node 7.4 used as the base.
FROM hypriot/rpi-node:7.4

MAINTAINER sofkaski <jyrkiokaski@gmail.com>

# Install node red
RUN npm install -g --unsafe-perm node-red

# Set up directories
RUN mkdir -p /root/node-red/user-dir
COPY start-node-red.sh /root/node-red
RUN chmod u+x /root/node-red/start-node-red.sh
COPY settings.js /root/node-red/

# Install dashboard
RUN /bin/bash -c 'cd /root/node-red/user-dir; npm i node-red-dashboard'

VOLUME /root/node-red/user-dir
EXPOSE 1880

CMD /root/node-red/start-node-red.sh


