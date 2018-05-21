# solarem
Solar energy monitoring and control application based on Node-Red.
Application is run in a Docker container on Raspberry Pi.

Application uses Entes EPR-04S energy meter as the source of used/produced energy data.
Application controls relays that can be used to switch on and off loads consuming solar energy.

# Requirements

## Development dependencies
 * Nodejs (8.11.1 or newer)
 * yarn (1.6.1 or newer)
 * Docker (1.12.5 or newer)


# Building
Docker image build for Raspberry (in Raspberry):
 * yarn run gulp docker-rpi

Builds recursively sub-modules and then the docker image

# Installation in RPI
 * Install docker (from [raspberrypi.org](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)):
   * curl -sSL https://get.docker.com | sh
 * make a directory for node-red flow file
   * cd ~
   * mkdir solarem

# Running in docker
 * Example of running
`docker run --restart unless-stopped --name solarem -p1880:1880 -d --cap-add SYS_RAWIO --device /dev/ttyUSB0 --device /dev/gpiomem -v /home/pi/solarem:/data --log-opt max-size=10m --log-opt max-file=3 --env FLOWS=solarem-flows.json sofkaski/solarem-rpi:1.0`
