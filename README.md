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
 * Build first both submodules: 
    * cd to sub-module directory
    * gulp publish
    * npm pack
    * cd ..
 * Local build:
   * (TBD)
 * Docker:
   * gulp docker
 
# Installation
 * cd ~
 * Install node-red:
   * npm install --unsafe-perm node-red
 * cd .node-red
 * Install dashboard:
   * npm install node-red-dashboard
 * Install node-red-modbus-rtu and epr04 nodes
   * For both nodes: npm install <path to the tar of the node package in sub-module directory> 

# Running locally
 * node-red-pi
