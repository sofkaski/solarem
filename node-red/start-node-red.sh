#!/bin/bash

node-red-pi -v --max-old-space-size=128 --settings /root/node-red/settings.js /root/node-red/user-dir/flows.js
