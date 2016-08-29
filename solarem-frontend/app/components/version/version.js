'use strict';

angular.module('solaremFE.version', [
  'solaremFE.version.interpolate-filter',
  'solaremFE.version.version-directive'
])

.value('version', '0.1');
