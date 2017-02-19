# solarem
Solar energy monitoring and control application based on Node-Red.
Application is run in a Docker container on Raspberry Pi.

Application uses Entes EPR-04S energy meter as the source of used/produced energy data.
Application controls relays that can be used to switch on and off loads consuming solar energy.

# Requirements

## Development dependencies
 * Nodejs (4.7.2 or newer)
 * npm (2.15.11 or newer)
 * Docker (1.12.5 or newer)

## Runtime dependencies

(TBD)

# Building
Docker image build for Rasbpberry:
 * gulp docker-rpi

Builds recursively sub-modules and then the docker image

# Installation
 * Install docker (from [raspberrypi.org](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)):
   * curl -sSL https://get.docker.com | sh
 * make a directory for node-red flow file
   * cd ~
   * mkdir solarem

# Running in docker
 * docker run --name solarem -p1880:1880 -d --cap-add SYS_RAWIO --device /dev/ttyUSB0 --device /dev/mem -v &lt;path to the flow file directory&gt;:/solarem &lt;name of the image&gt;:latest
