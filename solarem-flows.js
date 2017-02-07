[
    {
        "id": "cb5df121.9bf49",
        "type": "tab",
        "label": "Energian ohjaus"
    },
    {
        "id": "3b746ad6.76fd86",
        "type": "subflow",
        "name": "Energiamittari",
        "info": "Raakamittaukset",
        "in": [],
        "out": [
            {
                "x": 325,
                "y": 50,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 0
                    }
                ]
            },
            {
                "x": 422,
                "y": 105,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 13
                    }
                ]
            },
            {
                "x": 423,
                "y": 160,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 14
                    }
                ]
            },
            {
                "x": 439,
                "y": 219,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 1
                    }
                ]
            },
            {
                "x": 436,
                "y": 264,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 2
                    }
                ]
            },
            {
                "x": 436,
                "y": 316,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 3
                    }
                ]
            },
            {
                "x": 438,
                "y": 369,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 4
                    }
                ]
            },
            {
                "x": 443,
                "y": 420,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 5
                    }
                ]
            },
            {
                "x": 451,
                "y": 472,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 6
                    }
                ]
            },
            {
                "x": 446,
                "y": 546,
                "wires": [
                    {
                        "id": "9944c326.9c66a",
                        "port": 20
                    }
                ]
            }
        ]
    },
    {
        "id": "adcca95.886e458",
        "type": "subflow",
        "name": "Näyttöpaneli",
        "info": "",
        "in": [],
        "out": []
    },
    {
        "id": "cdf2c149.8fda9",
        "type": "ui_base",
        "name": "Solar",
        "theme": "theme-light"
    },
    {
        "id": "aaf9279c.184928",
        "type": "ui_tab",
        "z": "",
        "name": "Kulutus/Tuotto",
        "icon": "dashboard",
        "order": 1
    },
    {
        "id": "98fcfe8e.ca557",
        "type": "ui_tab",
        "z": "",
        "name": "Historia",
        "icon": "dashboard",
        "order": 2
    },
    {
        "id": "229beddd.27b5c2",
        "type": "ui_tab",
        "z": "",
        "name": "Releohjaus",
        "icon": "dashboard"
    },
    {
        "id": "96ec3856.46fc28",
        "type": "ui_group",
        "z": "",
        "name": "Käsiohjaus",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "3"
    },
    {
        "id": "d7913ae8.4f61f8",
        "type": "modbus-rtu-config",
        "z": "",
        "unit_id": "1",
        "serial_device": "/dev/ttyUSB0",
        "serial_speed": "9600",
        "serial_parity": "N",
        "serial_databits": "8",
        "serial_stopbits": "1",
        "modbus_end_packet_timeout": "40",
        "modbus_queue_timeout": "50",
        "modbus_response_timeout": "500"
    },
    {
        "id": "539af41d.751d4c",
        "type": "ui_group",
        "z": "3b746ad6.76fd86",
        "name": "Taajuus",
        "tab": "aaf9279c.184928",
        "disp": true,
        "width": "3"
    },
    {
        "id": "c034caf1.22f8a8",
        "type": "ui_group",
        "z": "",
        "name": "Loisteho",
        "tab": "aaf9279c.184928",
        "order": 3,
        "disp": true,
        "width": "3"
    },
    {
        "id": "49690565.80e26c",
        "type": "ui_group",
        "z": "",
        "name": "Pätöteho",
        "tab": "aaf9279c.184928",
        "order": 2,
        "disp": true,
        "width": "3"
    },
    {
        "id": "c7b3bad1.3ef778",
        "type": "ui_group",
        "z": "",
        "name": "Kokonaisteho",
        "tab": "aaf9279c.184928",
        "order": null,
        "disp": true,
        "width": "3"
    },
    {
        "id": "98c021d8.f6c6",
        "type": "ui_tab",
        "z": "",
        "name": "History",
        "icon": "dashboard",
        "order": 2
    },
    {
        "id": "32e5f85a.4464d8",
        "type": "ui_group",
        "z": "3b746ad6.76fd86",
        "name": "Trendi",
        "tab": "aaf9279c.184928",
        "disp": true,
        "width": "6"
    },
    {
        "id": "65144ad7.365b04",
        "type": "ui_group",
        "z": "",
        "name": "Käsiohjauksen salliminen",
        "tab": "229beddd.27b5c2",
        "order": 2,
        "disp": true,
        "width": "6"
    },
    {
        "id": "4e69368a.a272d8",
        "type": "ui_group",
        "z": "",
        "name": "Rele 1",
        "tab": "229beddd.27b5c2",
        "order": 3,
        "disp": true,
        "width": "2"
    },
    {
        "id": "286a0b41.996a74",
        "type": "ui_group",
        "z": "",
        "name": "Rele 2",
        "tab": "229beddd.27b5c2",
        "order": 4,
        "disp": true,
        "width": "2"
    },
    {
        "id": "8d4d7d72.38c63",
        "type": "ui_group",
        "z": "",
        "name": "Rele 3",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "eea939a8.3dda58",
        "type": "ui_group",
        "z": "",
        "name": "Rele 4",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "a237092.66debf8",
        "type": "ui_group",
        "z": "",
        "name": "Rele 5",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "bdcbc0eb.46d2d",
        "type": "ui_group",
        "z": "",
        "name": "Rele 6",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "ff0f0ad7.afaa58",
        "type": "ui_group",
        "z": "",
        "name": "Rele 7",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "d328d610.18b428",
        "type": "ui_group",
        "z": "",
        "name": "Rele 8",
        "tab": "229beddd.27b5c2",
        "disp": true,
        "width": "2"
    },
    {
        "id": "13f8b2b1.a1648d",
        "type": "modbus-rtu-in",
        "z": "3b746ad6.76fd86",
        "name": "Modbus-1",
        "modbusConnection": "d7913ae8.4f61f8",
        "x": 164,
        "y": 47,
        "wires": [
            [
                "9944c326.9c66a"
            ]
        ]
    },
    {
        "id": "9944c326.9c66a",
        "type": "epr04s",
        "z": "3b746ad6.76fd86",
        "name": "Meter-1",
        "pollingInterval": 10000,
        "x": 156,
        "y": 260,
        "wires": [
            [
                "13f8b2b1.a1648d"
            ],
            [
                "a10e7c63.1dd48"
            ],
            [
                "e9cffe8.c83ca"
            ],
            [
                "6642ea04.614a34"
            ],
            [
                "8e35281f.f40738"
            ],
            [
                "f2f03f68.26b17"
            ],
            [
                "b86ad127.af5eb"
            ],
            [],
            [],
            [],
            [],
            [],
            [],
            [
                "23e17079.4e026",
                "354c53ae.5aea0c"
            ],
            [
                "345a5626.1da01a",
                "2a2cbe6f.ca7d92"
            ],
            [],
            [],
            [],
            [],
            [],
            [
                "b03e0bd.8d682f8"
            ]
        ]
    },
    {
        "id": "ea002b39.362598",
        "type": "subflow:3b746ad6.76fd86",
        "z": "cb5df121.9bf49",
        "name": "Energiamittari-1",
        "x": 154.5,
        "y": 254.5,
        "wires": [
            [],
            [
                "9dcfdeb3.ebe67",
                "d77ea7f5.880f88",
                "30b6591f.9108d6"
            ],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    },
    {
        "id": "9dcfdeb3.ebe67",
        "type": "debug",
        "z": "cb5df121.9bf49",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 313,
        "y": 67,
        "wires": []
    },
    {
        "id": "b03e0bd.8d682f8",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "Taajuus",
        "group": "539af41d.751d4c",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Taajuus",
        "label": "Hz",
        "format": "{{value}}",
        "min": "45",
        "max": "55",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 506,
        "y": 511,
        "wires": []
    },
    {
        "id": "8e35281f.f40738",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L1",
        "group": "c034caf1.22f8a8",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L1",
        "label": "VAR",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 504,
        "y": 352,
        "wires": []
    },
    {
        "id": "f2f03f68.26b17",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L2",
        "group": "c034caf1.22f8a8",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L2",
        "label": "VAR",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 505,
        "y": 400,
        "wires": []
    },
    {
        "id": "b86ad127.af5eb",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L3",
        "group": "c034caf1.22f8a8",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L3",
        "label": "VAR",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 504,
        "y": 445,
        "wires": []
    },
    {
        "id": "a10e7c63.1dd48",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L1",
        "group": "49690565.80e26c",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L1",
        "label": "Watt",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 501,
        "y": 207,
        "wires": []
    },
    {
        "id": "e9cffe8.c83ca",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L2",
        "group": "49690565.80e26c",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L2",
        "label": "Watt",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 504,
        "y": 251,
        "wires": []
    },
    {
        "id": "6642ea04.614a34",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "L3",
        "group": "49690565.80e26c",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "L3",
        "label": "Watt",
        "format": "{{value}}",
        "min": "-3000",
        "max": "3000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 503,
        "y": 294,
        "wires": []
    },
    {
        "id": "23e17079.4e026",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "Total Import Active Power",
        "group": "c7b3bad1.3ef778",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Sisääntuleva",
        "label": "W",
        "format": "{{value}}",
        "min": "0",
        "max": "9000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 542,
        "y": 89,
        "wires": []
    },
    {
        "id": "345a5626.1da01a",
        "type": "ui_gauge",
        "z": "3b746ad6.76fd86",
        "name": "Total Export Active Power",
        "group": "c7b3bad1.3ef778",
        "order": 0,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Ulosmenevä",
        "label": "W",
        "format": "{{value}}",
        "min": 0,
        "max": "9000",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "x": 541,
        "y": 141,
        "wires": []
    },
    {
        "id": "354c53ae.5aea0c",
        "type": "ui_chart",
        "z": "3b746ad6.76fd86",
        "name": "Total import power",
        "group": "32e5f85a.4464d8",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "ymin": "0",
        "ymax": "9000",
        "removeOlder": "48",
        "removeOlderPoints": "500",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "x": 780,
        "y": 87,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "2a2cbe6f.ca7d92",
        "type": "ui_chart",
        "z": "3b746ad6.76fd86",
        "name": "Total export power",
        "group": "32e5f85a.4464d8",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "ymin": "0",
        "ymax": "9000",
        "removeOlder": "48",
        "removeOlderPoints": "500",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "x": 782,
        "y": 140,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "d77ea7f5.880f88",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-1-ohjaus",
        "lower_limit": "20",
        "upper_limit": "24",
        "range": "in",
        "initial_mode": "auto",
        "x": 559,
        "y": 98,
        "wires": [
            [
                "e11e57b3.056fa8"
            ]
        ]
    },
    {
        "id": "30b6591f.9108d6",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-2-ohjaus",
        "lower_limit": "20",
        "upper_limit": "24",
        "range": "out",
        "initial_mode": "auto",
        "x": 556,
        "y": 197,
        "wires": [
            [
                "49bff6a8.190668"
            ]
        ]
    },
    {
        "id": "108c5b50.2fbbc5",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-3-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 563,
        "y": 280,
        "wires": [
            [
                "523ecebb.f8ffe"
            ]
        ]
    },
    {
        "id": "78bb829b.3a4f0c",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-4-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 561,
        "y": 364,
        "wires": [
            [
                "d1d1a56f.0b6188"
            ]
        ]
    },
    {
        "id": "c7f1b15f.2a5e1",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-5-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 556,
        "y": 450,
        "wires": [
            [
                "ffdf7b02.3b8208"
            ]
        ]
    },
    {
        "id": "48bfbd21.545984",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-6-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 557,
        "y": 532,
        "wires": [
            [
                "4a2e4dd0.2afd74"
            ]
        ]
    },
    {
        "id": "91d8f0f0.57e4b",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-7-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 565,
        "y": 636,
        "wires": [
            [
                "180a12aa.274bfd"
            ]
        ]
    },
    {
        "id": "2c8c00a1.1cbd1",
        "type": "power-limit",
        "z": "cb5df121.9bf49",
        "name": "Rele-8-ohjaus",
        "lower_limit": "20",
        "upper_limit": "30",
        "range": "in",
        "initial_mode": "auto",
        "x": 567,
        "y": 736,
        "wires": [
            [
                "bb98fe0e.d994a"
            ]
        ]
    },
    {
        "id": "3e5a8e3e.63ae02",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Käsiohjaus",
        "label": "Käsiohjaus",
        "group": "65144ad7.365b04",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "topic": "Mode",
        "style": "",
        "onvalue": "manual",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "auto",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 165,
        "y": 390,
        "wires": [
            [
                "2c8c00a1.1cbd1",
                "91d8f0f0.57e4b",
                "48bfbd21.545984",
                "c7f1b15f.2a5e1",
                "78bb829b.3a4f0c",
                "108c5b50.2fbbc5",
                "30b6591f.9108d6",
                "d77ea7f5.880f88"
            ]
        ]
    },
    {
        "id": "e11e57b3.056fa8",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 1",
        "pin": "11",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 852,
        "y": 98,
        "wires": []
    },
    {
        "id": "57e26303.59f7cc",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 1",
        "label": "Rele 1",
        "group": "4e69368a.a272d8",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 529,
        "y": 49,
        "wires": [
            [
                "d77ea7f5.880f88"
            ]
        ]
    },
    {
        "id": "49bff6a8.190668",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 2",
        "pin": "12",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 850,
        "y": 197,
        "wires": []
    },
    {
        "id": "523ecebb.f8ffe",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 3",
        "pin": "13",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 856,
        "y": 278,
        "wires": []
    },
    {
        "id": "d1d1a56f.0b6188",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 4",
        "pin": "15",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 855,
        "y": 360,
        "wires": []
    },
    {
        "id": "ffdf7b02.3b8208",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 5",
        "pin": "16",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 851,
        "y": 449,
        "wires": []
    },
    {
        "id": "4a2e4dd0.2afd74",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 6",
        "pin": "18",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 851,
        "y": 528,
        "wires": []
    },
    {
        "id": "180a12aa.274bfd",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 7",
        "pin": "22",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 860,
        "y": 634,
        "wires": []
    },
    {
        "id": "bb98fe0e.d994a",
        "type": "rpi-gpio out",
        "z": "cb5df121.9bf49",
        "name": "Rele 8",
        "pin": "29",
        "set": true,
        "level": "1",
        "out": "out",
        "x": 861,
        "y": 733,
        "wires": []
    },
    {
        "id": "7ce9d07a.99e53",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 2",
        "label": "Rele 2",
        "group": "286a0b41.996a74",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 526,
        "y": 155,
        "wires": [
            [
                "30b6591f.9108d6"
            ]
        ]
    },
    {
        "id": "14ed0807.6632f8",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 3",
        "label": "Rele 3",
        "group": "8d4d7d72.38c63",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 533,
        "y": 245,
        "wires": [
            [
                "108c5b50.2fbbc5"
            ]
        ]
    },
    {
        "id": "3ced3c0b.ad5334",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 4",
        "label": "Rele 4",
        "group": "eea939a8.3dda58",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 529,
        "y": 329,
        "wires": [
            [
                "78bb829b.3a4f0c"
            ]
        ]
    },
    {
        "id": "42370127.f6644",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 5",
        "label": "Rele 5",
        "group": "a237092.66debf8",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 529,
        "y": 415,
        "wires": [
            [
                "c7f1b15f.2a5e1"
            ]
        ]
    },
    {
        "id": "39480f03.cbd43",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 6",
        "label": "Rele 6",
        "group": "bdcbc0eb.46d2d",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 528,
        "y": 497,
        "wires": [
            [
                "48bfbd21.545984"
            ]
        ]
    },
    {
        "id": "d45a6ae7.1577a8",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 7",
        "label": "Rele 7",
        "group": "ff0f0ad7.afaa58",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 535,
        "y": 595,
        "wires": [
            [
                "91d8f0f0.57e4b"
            ]
        ]
    },
    {
        "id": "f27585e1.9d7b38",
        "type": "ui_switch",
        "z": "cb5df121.9bf49",
        "name": "Rele 8",
        "label": "Rele 8",
        "group": "d328d610.18b428",
        "order": 0,
        "width": "0",
        "height": "0",
        "passthru": true,
        "topic": "ManualControl",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 535,
        "y": 696,
        "wires": [
            [
                "2c8c00a1.1cbd1"
            ]
        ]
    }
]