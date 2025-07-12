const foo = {
  "DESCRIPTION": "Root",
  "FULL_PATH": "",
  "ACCESS": 0,
  "CONTENTS": {
    "modules": {
      "DESCRIPTION": "Modules",
      "FULL_PATH": "/modules",
      "ACCESS": 0,
      "CONTENTS": {
        "madMapper": {
          "DESCRIPTION": "MadMapper",
          "FULL_PATH": "/modules/madMapper",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/modules/madMapper/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/modules/madMapper/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "logIncoming": {
              "DESCRIPTION": "Log Incoming",
              "FULL_PATH": "/modules/madMapper/logIncoming",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "logOutgoing": {
              "DESCRIPTION": "Log Outgoing",
              "FULL_PATH": "/modules/madMapper/logOutgoing",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/modules/madMapper/parameters",
              "ACCESS": 0,
              "CONTENTS": {
                "keepValuesOnSync": {
                  "DESCRIPTION": "Keep Values On Sync",
                  "FULL_PATH": "/modules/madMapper/parameters/keepValuesOnSync",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "syncData": {
                  "DESCRIPTION": "Sync Data",
                  "FULL_PATH": "/modules/madMapper/parameters/syncData",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "serverName": {
                  "DESCRIPTION": "Server Name",
                  "FULL_PATH": "/modules/madMapper/parameters/serverName",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    ""
                  ],
                  "EXTENDED_TYPE": [
                    "String"
                  ]
                },
                "onlySyncFromSameName": {
                  "DESCRIPTION": "Only sync from same name",
                  "FULL_PATH": "/modules/madMapper/parameters/onlySyncFromSameName",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "useAddressForNaming": {
                  "DESCRIPTION": "Use address for naming",
                  "FULL_PATH": "/modules/madMapper/parameters/useAddressForNaming",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "isConnected": {
                  "DESCRIPTION": "Is Connected",
                  "FULL_PATH": "/modules/madMapper/parameters/isConnected",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "listenToAll": {
                  "DESCRIPTION": "Listen to all",
                  "FULL_PATH": "/modules/madMapper/parameters/listenToAll",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "listenToNone": {
                  "DESCRIPTION": "Listen to none",
                  "FULL_PATH": "/modules/madMapper/parameters/listenToNone",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "output": {
                  "DESCRIPTION": "Output",
                  "FULL_PATH": "/modules/madMapper/parameters/output",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/modules/madMapper/parameters/output/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "local": {
                      "DESCRIPTION": "Local",
                      "FULL_PATH": "/modules/madMapper/parameters/output/local",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "remoteHost": {
                      "DESCRIPTION": "Remote Host",
                      "FULL_PATH": "/modules/madMapper/parameters/output/remoteHost",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "127.0.0.1"
                      ],
                      "EXTENDED_TYPE": [
                        "String"
                      ]
                    },
                    "remotePort": {
                      "DESCRIPTION": "Remote port",
                      "FULL_PATH": "/modules/madMapper/parameters/output/remotePort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "VALUE": [
                        8010
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "customOSCPort": {
                      "DESCRIPTION": "Custom OSC Port",
                      "FULL_PATH": "/modules/madMapper/parameters/output/customOSCPort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "ATTRIBUTES": {
                        "enabled": false
                      },
                      "VALUE": [
                        8010
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "customWebsocketPort": {
                      "DESCRIPTION": "Custom Websocket Port",
                      "FULL_PATH": "/modules/madMapper/parameters/output/customWebsocketPort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "ATTRIBUTES": {
                        "enabled": false
                      },
                      "VALUE": [
                        8010
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "oscFeedbackPort": {
                      "DESCRIPTION": "OSC Feedback Port",
                      "FULL_PATH": "/modules/madMapper/parameters/output/oscFeedbackPort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "ATTRIBUTES": {
                        "enabled": false
                      },
                      "VALUE": [
                        8011
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    }
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "values": {
              "DESCRIPTION": "Values",
              "FULL_PATH": "/modules/madMapper/values",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Container"
            },
            "scripts": {
              "DESCRIPTION": "Scripts",
              "FULL_PATH": "/modules/madMapper/scripts",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "commandTester": {
              "DESCRIPTION": "Command Tester",
              "FULL_PATH": "/modules/madMapper/commandTester",
              "ACCESS": 0,
              "CONTENTS": {
                "enabled": {
                  "DESCRIPTION": "Enabled",
                  "FULL_PATH": "/modules/madMapper/commandTester/enabled",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "trigger": {
                  "DESCRIPTION": "Trigger",
                  "FULL_PATH": "/modules/madMapper/commandTester/trigger",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "autoTrigger": {
                  "DESCRIPTION": "Auto Trigger",
                  "FULL_PATH": "/modules/madMapper/commandTester/autoTrigger",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                }
              },
              "TYPE": "BaseItem"
            },
            "templates": {
              "DESCRIPTION": "Templates",
              "FULL_PATH": "/modules/madMapper/templates",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Set Value",
                "/Go to Value",
                "/Trigger",
                "/Custom Message"
              ]
            }
          },
          "TYPE": "MadMapper"
        },
        "dmx": {
          "DESCRIPTION": "DMX",
          "FULL_PATH": "/modules/dmx",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/modules/dmx/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/modules/dmx/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "logIncoming": {
              "DESCRIPTION": "Log Incoming",
              "FULL_PATH": "/modules/dmx/logIncoming",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "logOutgoing": {
              "DESCRIPTION": "Log Outgoing",
              "FULL_PATH": "/modules/dmx/logOutgoing",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/modules/dmx/parameters",
              "ACCESS": 0,
              "CONTENTS": {
                "dmxType": {
                  "DESCRIPTION": "DMX Type",
                  "FULL_PATH": "/modules/dmx/parameters/dmxType",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    "Open DMX"
                  ],
                  "RANGE": [
                    {
                      "VALS": [
                        "Open DMX",
                        "Enttec DMX Pro",
                        "Enttec DMX MkII",
                        "Art-Net",
                        "sACN/E1.31"
                      ]
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Enum"
                  ]
                },
                "sendRate": {
                  "DESCRIPTION": "Send Rate",
                  "FULL_PATH": "/modules/dmx/parameters/sendRate",
                  "ACCESS": 3,
                  "TYPE": "i",
                  "VALUE": [
                    40
                  ],
                  "RANGE": [
                    {
                      "MIN": 1,
                      "MAX": 200
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Integer"
                  ]
                },
                "sendOnChangeOnly": {
                  "DESCRIPTION": "Send On Change Only",
                  "FULL_PATH": "/modules/dmx/parameters/sendOnChangeOnly",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "useMulticast": {
                  "DESCRIPTION": "Use Multicast",
                  "FULL_PATH": "/modules/dmx/parameters/useMulticast",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "autoAdd": {
                  "DESCRIPTION": "Auto Add",
                  "FULL_PATH": "/modules/dmx/parameters/autoAdd",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "openDMX": {
                  "DESCRIPTION": "OpenDMX",
                  "FULL_PATH": "/modules/dmx/parameters/openDMX",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "port": {
                      "DESCRIPTION": "Port",
                      "FULL_PATH": "/modules/dmx/parameters/openDMX/port",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        ""
                      ],
                      "RANGE": [
                        {
                          "VALS": null
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    },
                    "connected": {
                      "DESCRIPTION": "Connected",
                      "FULL_PATH": "/modules/dmx/parameters/openDMX/connected",
                      "ACCESS": 1,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "output": {
                      "DESCRIPTION": "Output",
                      "FULL_PATH": "/modules/dmx/parameters/openDMX/output",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "enabled": {
                          "DESCRIPTION": "Enabled",
                          "FULL_PATH": "/modules/dmx/parameters/openDMX/output/enabled",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            true
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    }
                  },
                  "TYPE": "Container"
                },
                "outputUniverses": {
                  "DESCRIPTION": "Output Universes",
                  "FULL_PATH": "/modules/dmx/parameters/outputUniverses",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "universe": {
                      "DESCRIPTION": "Universe",
                      "FULL_PATH": "/modules/dmx/parameters/outputUniverses/universe",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "net": {
                          "DESCRIPTION": "Net",
                          "FULL_PATH": "/modules/dmx/parameters/outputUniverses/universe/net",
                          "ACCESS": 3,
                          "TYPE": "i",
                          "VALUE": [
                            0
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 15
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Integer"
                          ]
                        },
                        "subnet": {
                          "DESCRIPTION": "Subnet",
                          "FULL_PATH": "/modules/dmx/parameters/outputUniverses/universe/subnet",
                          "ACCESS": 3,
                          "TYPE": "i",
                          "VALUE": [
                            0
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 15
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Integer"
                          ]
                        },
                        "universe": {
                          "DESCRIPTION": "Universe",
                          "FULL_PATH": "/modules/dmx/parameters/outputUniverses/universe/universe",
                          "ACCESS": 3,
                          "TYPE": "i",
                          "VALUE": [
                            1
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 2147483647
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Integer"
                          ]
                        }
                      },
                      "TYPE": "DMXUniverse"
                    }
                  },
                  "TYPE": "Manager",
                  "EXTENDED_TYPE": [
                    ""
                  ]
                },
                "pass_through": {
                  "DESCRIPTION": "Pass-through",
                  "FULL_PATH": "/modules/dmx/parameters/pass_through",
                  "ACCESS": 0,
                  "CONTENTS": {
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "values": {
              "DESCRIPTION": "Values",
              "FULL_PATH": "/modules/dmx/values",
              "ACCESS": 0,
              "CONTENTS": {
                "universes": {
                  "DESCRIPTION": "Universes",
                  "FULL_PATH": "/modules/dmx/values/universes",
                  "ACCESS": 0,
                  "CONTENTS": {
                  },
                  "TYPE": "Manager",
                  "EXTENDED_TYPE": [
                    ""
                  ]
                }
              },
              "TYPE": "Container"
            },
            "scripts": {
              "DESCRIPTION": "Scripts",
              "FULL_PATH": "/modules/dmx/scripts",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "commandTester": {
              "DESCRIPTION": "Command Tester",
              "FULL_PATH": "/modules/dmx/commandTester",
              "ACCESS": 0,
              "CONTENTS": {
                "enabled": {
                  "DESCRIPTION": "Enabled",
                  "FULL_PATH": "/modules/dmx/commandTester/enabled",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "trigger": {
                  "DESCRIPTION": "Trigger",
                  "FULL_PATH": "/modules/dmx/commandTester/trigger",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "autoTrigger": {
                  "DESCRIPTION": "Auto Trigger",
                  "FULL_PATH": "/modules/dmx/commandTester/autoTrigger",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                }
              },
              "TYPE": "BaseItem"
            },
            "templates": {
              "DESCRIPTION": "Templates",
              "FULL_PATH": "/modules/dmx/templates",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Black out",
                "/Set value",
                "/Set value 16bit",
                "/Set range",
                "/Set all",
                "/Set custom values",
                "/Set Color",
                "/Set Color 16bit"
              ]
            }
          },
          "TYPE": "DMX"
        },
        "soundCard": {
          "DESCRIPTION": "Sound Card",
          "FULL_PATH": "/modules/soundCard",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/modules/soundCard/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/modules/soundCard/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "logIncoming": {
              "DESCRIPTION": "Log Incoming",
              "FULL_PATH": "/modules/soundCard/logIncoming",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "logOutgoing": {
              "DESCRIPTION": "Log Outgoing",
              "FULL_PATH": "/modules/soundCard/logOutgoing",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/modules/soundCard/parameters",
              "ACCESS": 0,
              "CONTENTS": {
                "inputGain": {
                  "DESCRIPTION": "Input Gain",
                  "FULL_PATH": "/modules/soundCard/parameters/inputGain",
                  "ACCESS": 3,
                  "TYPE": "f",
                  "VALUE": [
                    1.0
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 10.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "activityThreshold": {
                  "DESCRIPTION": "Activity Threshold",
                  "FULL_PATH": "/modules/soundCard/parameters/activityThreshold",
                  "ACCESS": 3,
                  "TYPE": "f",
                  "VALUE": [
                    0.1000000014901161
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 1.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "keepValues": {
                  "DESCRIPTION": "Keep Values",
                  "FULL_PATH": "/modules/soundCard/parameters/keepValues",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "outVolume": {
                  "DESCRIPTION": "Out Volume",
                  "FULL_PATH": "/modules/soundCard/parameters/outVolume",
                  "ACCESS": 3,
                  "TYPE": "f",
                  "VALUE": [
                    1.0
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 10.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "pitchDetectionMethod": {
                  "DESCRIPTION": "Pitch Detection Method",
                  "FULL_PATH": "/modules/soundCard/parameters/pitchDetectionMethod",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    "None"
                  ],
                  "RANGE": [
                    {
                      "VALS": [
                        "None",
                        "MPM",
                        "YIN"
                      ]
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Enum"
                  ]
                },
                "inputVolumes": {
                  "DESCRIPTION": "Input Volumes",
                  "FULL_PATH": "/modules/soundCard/parameters/inputVolumes",
                  "ACCESS": 0,
                  "CONTENTS": {
                  },
                  "TYPE": "Container"
                },
                "outputVolumes": {
                  "DESCRIPTION": "Output Volumes",
                  "FULL_PATH": "/modules/soundCard/parameters/outputVolumes",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "output1Gain": {
                      "DESCRIPTION": "Output 1 Gain",
                      "FULL_PATH": "/modules/soundCard/parameters/outputVolumes/output1Gain",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        1.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0.0,
                          "MAX": 3.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "output2Gain": {
                      "DESCRIPTION": "Output 2 Gain",
                      "FULL_PATH": "/modules/soundCard/parameters/outputVolumes/output2Gain",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        1.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0.0,
                          "MAX": 3.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    }
                  },
                  "TYPE": "Container"
                },
                "monitor": {
                  "DESCRIPTION": "Monitor",
                  "FULL_PATH": "/modules/soundCard/parameters/monitor",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/modules/soundCard/parameters/monitor/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "monitorVolume": {
                      "DESCRIPTION": "Monitor Volume",
                      "FULL_PATH": "/modules/soundCard/parameters/monitor/monitorVolume",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        1.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0.0,
                          "MAX": 10.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "monitorOutLeft": {
                      "DESCRIPTION": "Monitor Out : Left",
                      "FULL_PATH": "/modules/soundCard/parameters/monitor/monitorOutLeft",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "monitorOutRight": {
                      "DESCRIPTION": "Monitor Out : Right",
                      "FULL_PATH": "/modules/soundCard/parameters/monitor/monitorOutRight",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    }
                  },
                  "TYPE": "Container"
                },
                "fftAnalysis": {
                  "DESCRIPTION": "FFT Analysis",
                  "FULL_PATH": "/modules/soundCard/parameters/fftAnalysis",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/modules/soundCard/parameters/fftAnalysis/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "minDB": {
                      "DESCRIPTION": "Min DB",
                      "FULL_PATH": "/modules/soundCard/parameters/fftAnalysis/minDB",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        -100.0
                      ],
                      "RANGE": [
                        {
                          "MIN": -100.0,
                          "MAX": 20.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "maxDB": {
                      "DESCRIPTION": "Max DB",
                      "FULL_PATH": "/modules/soundCard/parameters/fftAnalysis/maxDB",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.0
                      ],
                      "RANGE": [
                        {
                          "MIN": -100.0,
                          "MAX": 20.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    }
                  },
                  "TYPE": "Manager",
                  "EXTENDED_TYPE": [
                    ""
                  ]
                },
                "ltc": {
                  "DESCRIPTION": "LTC",
                  "FULL_PATH": "/modules/soundCard/parameters/ltc",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/modules/soundCard/parameters/ltc/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "fps": {
                      "DESCRIPTION": "FPS",
                      "FULL_PATH": "/modules/soundCard/parameters/ltc/fps",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "30"
                      ],
                      "RANGE": [
                        {
                          "VALS": [
                            "24",
                            "25",
                            "30"
                          ]
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    },
                    "ltcChannel": {
                      "DESCRIPTION": "LTC Channel",
                      "FULL_PATH": "/modules/soundCard/parameters/ltc/ltcChannel",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "VALUE": [
                        1
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 64
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "useLTCDate": {
                      "DESCRIPTION": "Use LTC Date",
                      "FULL_PATH": "/modules/soundCard/parameters/ltc/useLTCDate",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    }
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "hardwareSettings": {
              "DESCRIPTION": "Hardware Settings",
              "FULL_PATH": "/modules/soundCard/hardwareSettings",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Container"
            },
            "values": {
              "DESCRIPTION": "Values",
              "FULL_PATH": "/modules/soundCard/values",
              "ACCESS": 0,
              "CONTENTS": {
                "volume": {
                  "DESCRIPTION": "Volume",
                  "FULL_PATH": "/modules/soundCard/values/volume",
                  "ACCESS": 1,
                  "TYPE": "f",
                  "VALUE": [
                    0.0
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 1.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "pitchDetection": {
                  "DESCRIPTION": "Pitch Detection",
                  "FULL_PATH": "/modules/soundCard/values/pitchDetection",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "freq": {
                      "DESCRIPTION": "Freq",
                      "FULL_PATH": "/modules/soundCard/values/pitchDetection/freq",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0.0,
                          "MAX": 2000.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "pitch": {
                      "DESCRIPTION": "Pitch",
                      "FULL_PATH": "/modules/soundCard/values/pitchDetection/pitch",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "VALUE": [
                        0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 300
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "note": {
                      "DESCRIPTION": "Note",
                      "FULL_PATH": "/modules/soundCard/values/pitchDetection/note",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "-"
                      ],
                      "RANGE": [
                        {
                          "VALS": [
                            "-",
                            "C",
                            "C#",
                            "D",
                            "D#",
                            "E",
                            "F",
                            "F#",
                            "G",
                            "G#",
                            "A",
                            "A#",
                            "B"
                          ]
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    },
                    "octave": {
                      "DESCRIPTION": "Octave",
                      "FULL_PATH": "/modules/soundCard/values/pitchDetection/octave",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "VALUE": [
                        0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 10
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    }
                  },
                  "TYPE": "Container"
                },
                "fftEnveloppes": {
                  "DESCRIPTION": "FFT Enveloppes",
                  "FULL_PATH": "/modules/soundCard/values/fftEnveloppes",
                  "ACCESS": 0,
                  "CONTENTS": {
                  },
                  "TYPE": "Container"
                },
                "ltc": {
                  "DESCRIPTION": "LTC",
                  "FULL_PATH": "/modules/soundCard/values/ltc",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "isLTCPlaying": {
                      "DESCRIPTION": "Is LTC Playing",
                      "FULL_PATH": "/modules/soundCard/values/ltc/isLTCPlaying",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "ltcTime": {
                      "DESCRIPTION": "LTC Time",
                      "FULL_PATH": "/modules/soundCard/values/ltc/ltcTime",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.0
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    }
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "scripts": {
              "DESCRIPTION": "Scripts",
              "FULL_PATH": "/modules/soundCard/scripts",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "commandTester": {
              "DESCRIPTION": "Command Tester",
              "FULL_PATH": "/modules/soundCard/commandTester",
              "ACCESS": 0,
              "CONTENTS": {
                "enabled": {
                  "DESCRIPTION": "Enabled",
                  "FULL_PATH": "/modules/soundCard/commandTester/enabled",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "trigger": {
                  "DESCRIPTION": "Trigger",
                  "FULL_PATH": "/modules/soundCard/commandTester/trigger",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "autoTrigger": {
                  "DESCRIPTION": "Auto Trigger",
                  "FULL_PATH": "/modules/soundCard/commandTester/autoTrigger",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                }
              },
              "TYPE": "BaseItem"
            },
            "templates": {
              "DESCRIPTION": "Templates",
              "FULL_PATH": "/modules/soundCard/templates",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Play audio file"
              ]
            }
          },
          "TYPE": "Sound Card"
        },
        "oSCQuery": {
          "DESCRIPTION": "OSCQuery",
          "FULL_PATH": "/modules/oSCQuery",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/modules/oSCQuery/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/modules/oSCQuery/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "logIncoming": {
              "DESCRIPTION": "Log Incoming",
              "FULL_PATH": "/modules/oSCQuery/logIncoming",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "logOutgoing": {
              "DESCRIPTION": "Log Outgoing",
              "FULL_PATH": "/modules/oSCQuery/logOutgoing",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/modules/oSCQuery/parameters",
              "ACCESS": 0,
              "CONTENTS": {
                "keepValuesOnSync": {
                  "DESCRIPTION": "Keep Values On Sync",
                  "FULL_PATH": "/modules/oSCQuery/parameters/keepValuesOnSync",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "syncData": {
                  "DESCRIPTION": "Sync Data",
                  "FULL_PATH": "/modules/oSCQuery/parameters/syncData",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "serverName": {
                  "DESCRIPTION": "Server Name",
                  "FULL_PATH": "/modules/oSCQuery/parameters/serverName",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    ""
                  ],
                  "EXTENDED_TYPE": [
                    "String"
                  ]
                },
                "onlySyncFromSameName": {
                  "DESCRIPTION": "Only sync from same name",
                  "FULL_PATH": "/modules/oSCQuery/parameters/onlySyncFromSameName",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "useAddressForNaming": {
                  "DESCRIPTION": "Use address for naming",
                  "FULL_PATH": "/modules/oSCQuery/parameters/useAddressForNaming",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "isConnected": {
                  "DESCRIPTION": "Is Connected",
                  "FULL_PATH": "/modules/oSCQuery/parameters/isConnected",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "listenToAll": {
                  "DESCRIPTION": "Listen to all",
                  "FULL_PATH": "/modules/oSCQuery/parameters/listenToAll",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "listenToNone": {
                  "DESCRIPTION": "Listen to none",
                  "FULL_PATH": "/modules/oSCQuery/parameters/listenToNone",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "output": {
                  "DESCRIPTION": "Output",
                  "FULL_PATH": "/modules/oSCQuery/parameters/output",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "local": {
                      "DESCRIPTION": "Local",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/local",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "remoteHost": {
                      "DESCRIPTION": "Remote Host",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/remoteHost",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "127.0.0.1"
                      ],
                      "EXTENDED_TYPE": [
                        "String"
                      ]
                    },
                    "remotePort": {
                      "DESCRIPTION": "Remote port",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/remotePort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "VALUE": [
                        5678
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "customOSCPort": {
                      "DESCRIPTION": "Custom OSC Port",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/customOSCPort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "ATTRIBUTES": {
                        "enabled": false
                      },
                      "VALUE": [
                        5678
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    },
                    "customWebsocketPort": {
                      "DESCRIPTION": "Custom Websocket Port",
                      "FULL_PATH": "/modules/oSCQuery/parameters/output/customWebsocketPort",
                      "ACCESS": 3,
                      "TYPE": "i",
                      "ATTRIBUTES": {
                        "enabled": false
                      },
                      "VALUE": [
                        5678
                      ],
                      "RANGE": [
                        {
                          "MIN": 1,
                          "MAX": 65535
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Integer"
                      ]
                    }
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "values": {
              "DESCRIPTION": "Values",
              "FULL_PATH": "/modules/oSCQuery/values",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Container"
            },
            "scripts": {
              "DESCRIPTION": "Scripts",
              "FULL_PATH": "/modules/oSCQuery/scripts",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "commandTester": {
              "DESCRIPTION": "Command Tester",
              "FULL_PATH": "/modules/oSCQuery/commandTester",
              "ACCESS": 0,
              "CONTENTS": {
                "enabled": {
                  "DESCRIPTION": "Enabled",
                  "FULL_PATH": "/modules/oSCQuery/commandTester/enabled",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "trigger": {
                  "DESCRIPTION": "Trigger",
                  "FULL_PATH": "/modules/oSCQuery/commandTester/trigger",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "autoTrigger": {
                  "DESCRIPTION": "Auto Trigger",
                  "FULL_PATH": "/modules/oSCQuery/commandTester/autoTrigger",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                }
              },
              "TYPE": "BaseItem"
            },
            "templates": {
              "DESCRIPTION": "Templates",
              "FULL_PATH": "/modules/oSCQuery/templates",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Set Value",
                "/Go to Value",
                "/Trigger",
                "/Custom Message"
              ]
            }
          },
          "TYPE": "OSCQuery"
        }
      },
      "TYPE": "Manager",
      "EXTENDED_TYPE": [
        "Protocol/OSC",
        "Protocol/OSCQuery",
        "Protocol/MIDI",
        "Protocol/DMX",
        "Protocol/Serial",
        "Protocol/UDP",
        "Protocol/TCP Client",
        "Protocol/TCP Server",
        "Protocol/HTTP",
        "Protocol/WebSocket Client",
        "Protocol/WebSocket Server",
        "Protocol/MQTT Client",
        "Protocol/PJLink",
        "Protocol/PosiStageNet",
        "Protocol/Ableton Link",
        "Hardware/Sound Card",
        "Hardware/Wiimote",
        "Hardware/JoyCon",
        "Hardware/Keyboard",
        "Hardware/Mouse",
        "Hardware/KinectV2",
        "Hardware/Gamepad",
        "Hardware/Stream Deck",
        "Hardware/Loupedeck",
        "Hardware/GPIO",
        "Software/DLight",
        "Software/HeavyM",
        "Software/Ableton Live",
        "Software/MadMapper",
        "Software/Millumin",
        "Software/QLab",
        "Software/Reaper",
        "Software/Resolume",
        "Software/Watchout",
        "Software/PowerPoint",
        "Generator/Metronome",
        "Generator/Signal",
        "System/Time",
        "System/OS",
        "Custom/Empty",
        "Augmenta/Augmenta OSC",
        "Software/BlinderKitten",
        "Open Pose/OpenPose",
        "Protocol/FreeD",
        "Hardware/Leap Motion",
        "Transcription/Speech to text",
        "Software/VLC"
      ]
    },
    "states": {
      "DESCRIPTION": "States",
      "FULL_PATH": "/states",
      "ACCESS": 0,
      "CONTENTS": {
        "snapGridMode": {
          "DESCRIPTION": "Snap Grid Mode",
          "FULL_PATH": "/states/snapGridMode",
          "ACCESS": 3,
          "TYPE": "T",
          "VALUE": [
            false
          ],
          "RANGE": [
            {
              "MIN": 0,
              "MAX": 1
            }
          ],
          "EXTENDED_TYPE": [
            "Boolean"
          ]
        },
        "showSnapGrid": {
          "DESCRIPTION": "Show Snap Grid",
          "FULL_PATH": "/states/showSnapGrid",
          "ACCESS": 3,
          "TYPE": "T",
          "VALUE": [
            false
          ],
          "RANGE": [
            {
              "MIN": 0,
              "MAX": 1
            }
          ],
          "EXTENDED_TYPE": [
            "Boolean"
          ]
        },
        "snapGridSize": {
          "DESCRIPTION": "Snap Grid Size",
          "FULL_PATH": "/states/snapGridSize",
          "ACCESS": 3,
          "TYPE": "i",
          "VALUE": [
            20
          ],
          "RANGE": [
            {
              "MIN": 4,
              "MAX": 1000
            }
          ],
          "EXTENDED_TYPE": [
            "Integer"
          ]
        },
        "lights": {
          "DESCRIPTION": "Lights",
          "FULL_PATH": "/states/lights",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/states/lights/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/states/lights/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff363636"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "active": {
              "DESCRIPTION": "Active",
              "FULL_PATH": "/states/lights/active",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "onLoadBehavior": {
              "DESCRIPTION": "On Load Behavior",
              "FULL_PATH": "/states/lights/onLoadBehavior",
              "ACCESS": 3,
              "TYPE": "s",
              "VALUE": [
                "Restore last state"
              ],
              "RANGE": [
                {
                  "VALS": [
                    "Restore last state",
                    "Activate",
                    "Deactivate"
                  ]
                }
              ],
              "EXTENDED_TYPE": [
                "Enum"
              ]
            },
            "checkTransitionsOnActivate": {
              "DESCRIPTION": "Check transitions on activate",
              "FULL_PATH": "/states/lights/checkTransitionsOnActivate",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "focusOnLastAction": {
              "DESCRIPTION": "Focus on Last Action",
              "FULL_PATH": "/states/lights/focusOnLastAction",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "processors": {
              "DESCRIPTION": "Processors",
              "FULL_PATH": "/states/lights/processors",
              "ACCESS": 0,
              "CONTENTS": {
                "livingRoomColor": {
                  "DESCRIPTION": "Living room color",
                  "FULL_PATH": "/states/lights/processors/livingRoomColor",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "color": {
                      "DESCRIPTION": "Color",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/color",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ff7c343b"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    },
                    "inputs": {
                      "DESCRIPTION": "Inputs",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/inputs",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "inputValue": {
                          "DESCRIPTION": "Input Value",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/inputs/inputValue",
                          "ACCESS": 0,
                          "CONTENTS": {
                            "triggersProcess": {
                              "DESCRIPTION": "Triggers Process",
                              "FULL_PATH": "/states/lights/processors/livingRoomColor/inputs/inputValue/triggersProcess",
                              "ACCESS": 3,
                              "TYPE": "T",
                              "VALUE": [
                                true
                              ],
                              "RANGE": [
                                {
                                  "MIN": 0,
                                  "MAX": 1
                                }
                              ],
                              "EXTENDED_TYPE": [
                                "Boolean"
                              ]
                            },
                            "inputValue": {
                              "DESCRIPTION": "Input Value",
                              "FULL_PATH": "/states/lights/processors/livingRoomColor/inputs/inputValue/inputValue",
                              "ACCESS": 3,
                              "TYPE": "s",
                              "VALUE": [
                                "/customVariables/customVariables/values/outputs/livingRoomColor"
                              ],
                              "EXTENDED_TYPE": [
                                "Target"
                              ]
                            }
                          },
                          "TYPE": "Input Value"
                        }
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        "/Input Value",
                        "Manual/Input Float",
                        "Manual/Input Integer",
                        "Manual/Input Boolean",
                        "Manual/Input Point2D",
                        "Manual/Input Point3D",
                        "Manual/Input String"
                      ]
                    },
                    "parameters": {
                      "DESCRIPTION": "Parameters",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "updateRate": {
                          "DESCRIPTION": "Update rate",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/updateRate",
                          "ACCESS": 3,
                          "TYPE": "i",
                          "VALUE": [
                            50
                          ],
                          "RANGE": [
                            {
                              "MIN": 1,
                              "MAX": 500
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Integer"
                          ]
                        },
                        "forceContinuousProcess": {
                          "DESCRIPTION": "Force Continuous Process",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/forceContinuousProcess",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnInputChangeOnly": {
                          "DESCRIPTION": "Send On Input Change Only",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/sendOnInputChangeOnly",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnOutputChangeOnly": {
                          "DESCRIPTION": "Send On Output Change Only",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/sendOnOutputChangeOnly",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            true
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendAfterLoad": {
                          "DESCRIPTION": "Send After Load",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/sendAfterLoad",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnActivate": {
                          "DESCRIPTION": "Send on Activate",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/parameters/sendOnActivate",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    },
                    "filters": {
                      "DESCRIPTION": "Filters",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/filters",
                      "ACCESS": 0,
                      "CONTENTS": {
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        "Remap/Remap",
                        "Remap/Curve Map",
                        "Remap/Math",
                        "Remap/Inverse",
                        "Remap/Crop",
                        "Conversion/Convert To Integer",
                        "Conversion/Convert To Float",
                        "Conversion/Convert To Boolean",
                        "Conversion/Convert To String",
                        "Conversion/Convert To Point2D",
                        "Conversion/Convert To Point3D",
                        "Conversion/Convert To Color",
                        "Conversion/Merge",
                        "Conversion/Mega Converter",
                        "Time/Smooth",
                        "Time/Damping",
                        "Time/One Euro",
                        "Time/FPS",
                        "Time/Delay",
                        "Time/Speed",
                        "Time/Freeze",
                        "Color/HSV Adjust",
                        "Color/Color Remap",
                        "String/String Slice",
                        "String/String Replace",
                        "String/String Offset",
                        "/Condition",
                        "/Script"
                      ]
                    },
                    "outputs": {
                      "DESCRIPTION": "Outputs",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/outputs",
                      "ACCESS": 0,
                      "CONTENTS": {
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        ""
                      ]
                    },
                    "outValues": {
                      "DESCRIPTION": "Out Values",
                      "FULL_PATH": "/states/lights/processors/livingRoomColor/outValues",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "out1": {
                          "DESCRIPTION": "Out 1",
                          "FULL_PATH": "/states/lights/processors/livingRoomColor/outValues/out1",
                          "ACCESS": 1,
                          "TYPE": "r",
                          "VALUE": [
                            "ff0dffca"
                          ],
                          "EXTENDED_TYPE": [
                            "Color"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    }
                  },
                  "TYPE": "Mapping"
                },
                "bedroomColor": {
                  "DESCRIPTION": "Bedroom color",
                  "FULL_PATH": "/states/lights/processors/bedroomColor",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        false
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "color": {
                      "DESCRIPTION": "Color",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/color",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ff7c343b"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    },
                    "inputs": {
                      "DESCRIPTION": "Inputs",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/inputs",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "inputValue": {
                          "DESCRIPTION": "Input Value",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/inputs/inputValue",
                          "ACCESS": 0,
                          "CONTENTS": {
                            "triggersProcess": {
                              "DESCRIPTION": "Triggers Process",
                              "FULL_PATH": "/states/lights/processors/bedroomColor/inputs/inputValue/triggersProcess",
                              "ACCESS": 3,
                              "TYPE": "T",
                              "VALUE": [
                                true
                              ],
                              "RANGE": [
                                {
                                  "MIN": 0,
                                  "MAX": 1
                                }
                              ],
                              "EXTENDED_TYPE": [
                                "Boolean"
                              ]
                            },
                            "inputValue": {
                              "DESCRIPTION": "Input Value",
                              "FULL_PATH": "/states/lights/processors/bedroomColor/inputs/inputValue/inputValue",
                              "ACCESS": 3,
                              "TYPE": "s",
                              "VALUE": [
                                "/customVariables/customVariables/values/outputs/livingRoomColor"
                              ],
                              "EXTENDED_TYPE": [
                                "Target"
                              ]
                            }
                          },
                          "TYPE": "Input Value"
                        }
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        "/Input Value",
                        "Manual/Input Float",
                        "Manual/Input Integer",
                        "Manual/Input Boolean",
                        "Manual/Input Point2D",
                        "Manual/Input Point3D",
                        "Manual/Input String"
                      ]
                    },
                    "parameters": {
                      "DESCRIPTION": "Parameters",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/parameters",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "updateRate": {
                          "DESCRIPTION": "Update rate",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/updateRate",
                          "ACCESS": 3,
                          "TYPE": "i",
                          "VALUE": [
                            50
                          ],
                          "RANGE": [
                            {
                              "MIN": 1,
                              "MAX": 500
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Integer"
                          ]
                        },
                        "forceContinuousProcess": {
                          "DESCRIPTION": "Force Continuous Process",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/forceContinuousProcess",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnInputChangeOnly": {
                          "DESCRIPTION": "Send On Input Change Only",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/sendOnInputChangeOnly",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnOutputChangeOnly": {
                          "DESCRIPTION": "Send On Output Change Only",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/sendOnOutputChangeOnly",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            true
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendAfterLoad": {
                          "DESCRIPTION": "Send After Load",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/sendAfterLoad",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        },
                        "sendOnActivate": {
                          "DESCRIPTION": "Send on Activate",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/parameters/sendOnActivate",
                          "ACCESS": 3,
                          "TYPE": "T",
                          "VALUE": [
                            false
                          ],
                          "RANGE": [
                            {
                              "MIN": 0,
                              "MAX": 1
                            }
                          ],
                          "EXTENDED_TYPE": [
                            "Boolean"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    },
                    "filters": {
                      "DESCRIPTION": "Filters",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/filters",
                      "ACCESS": 0,
                      "CONTENTS": {
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        "Remap/Remap",
                        "Remap/Curve Map",
                        "Remap/Math",
                        "Remap/Inverse",
                        "Remap/Crop",
                        "Conversion/Convert To Integer",
                        "Conversion/Convert To Float",
                        "Conversion/Convert To Boolean",
                        "Conversion/Convert To String",
                        "Conversion/Convert To Point2D",
                        "Conversion/Convert To Point3D",
                        "Conversion/Convert To Color",
                        "Conversion/Merge",
                        "Conversion/Mega Converter",
                        "Time/Smooth",
                        "Time/Damping",
                        "Time/One Euro",
                        "Time/FPS",
                        "Time/Delay",
                        "Time/Speed",
                        "Time/Freeze",
                        "Color/HSV Adjust",
                        "Color/Color Remap",
                        "String/String Slice",
                        "String/String Replace",
                        "String/String Offset",
                        "/Condition",
                        "/Script"
                      ]
                    },
                    "outputs": {
                      "DESCRIPTION": "Outputs",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/outputs",
                      "ACCESS": 0,
                      "CONTENTS": {
                      },
                      "TYPE": "Manager",
                      "EXTENDED_TYPE": [
                        ""
                      ]
                    },
                    "outValues": {
                      "DESCRIPTION": "Out Values",
                      "FULL_PATH": "/states/lights/processors/bedroomColor/outValues",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "out1": {
                          "DESCRIPTION": "Out 1",
                          "FULL_PATH": "/states/lights/processors/bedroomColor/outValues/out1",
                          "ACCESS": 1,
                          "TYPE": "r",
                          "VALUE": [
                            "ff0dffca"
                          ],
                          "EXTENDED_TYPE": [
                            "Color"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    }
                  },
                  "TYPE": "Mapping"
                }
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Action",
                "/Mapping",
                "/Multiplex",
                "/Conductor"
              ]
            }
          },
          "TYPE": "State"
        },
        "transitions": {
          "DESCRIPTION": "Transitions",
          "FULL_PATH": "/states/transitions",
          "ACCESS": 0,
          "CONTENTS": {
          },
          "TYPE": "Manager",
          "EXTENDED_TYPE": [
            ""
          ]
        },
        "comments": {
          "DESCRIPTION": "Comments",
          "FULL_PATH": "/states/comments",
          "ACCESS": 0,
          "CONTENTS": {
          },
          "TYPE": "Manager",
          "EXTENDED_TYPE": [
            ""
          ]
        }
      },
      "TYPE": "Manager",
      "EXTENDED_TYPE": [
        "State"
      ]
    },
    "sequences": {
      "DESCRIPTION": "Sequences",
      "FULL_PATH": "/sequences",
      "ACCESS": 0,
      "CONTENTS": {
        "playAll": {
          "DESCRIPTION": "Play All",
          "FULL_PATH": "/sequences/playAll",
          "ACCESS": 3,
          "TYPE": "N"
        },
        "stopAll": {
          "DESCRIPTION": "Stop All",
          "FULL_PATH": "/sequences/stopAll",
          "ACCESS": 3,
          "TYPE": "N"
        },
        "onlyOneSequencePlaying": {
          "DESCRIPTION": "Only one sequence playing",
          "FULL_PATH": "/sequences/onlyOneSequencePlaying",
          "ACCESS": 3,
          "TYPE": "T",
          "VALUE": [
            false
          ],
          "RANGE": [
            {
              "MIN": 0,
              "MAX": 1
            }
          ],
          "EXTENDED_TYPE": [
            "Boolean"
          ]
        },
        "isOneSequencePlaying": {
          "DESCRIPTION": "Is one sequence playing",
          "FULL_PATH": "/sequences/isOneSequencePlaying",
          "ACCESS": 1,
          "TYPE": "T",
          "VALUE": [
            false
          ],
          "RANGE": [
            {
              "MIN": 0,
              "MAX": 1
            }
          ],
          "EXTENDED_TYPE": [
            "Boolean"
          ]
        },
        "ambient": {
          "DESCRIPTION": "Ambient",
          "FULL_PATH": "/sequences/ambient",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/sequences/ambient/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "isPlaying": {
              "DESCRIPTION": "Is Playing",
              "FULL_PATH": "/sequences/ambient/isPlaying",
              "ACCESS": 1,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "play": {
              "DESCRIPTION": "Play",
              "FULL_PATH": "/sequences/ambient/play",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "stop": {
              "DESCRIPTION": "Stop",
              "FULL_PATH": "/sequences/ambient/stop",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "finish": {
              "DESCRIPTION": "Finish",
              "FULL_PATH": "/sequences/ambient/finish",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "pause": {
              "DESCRIPTION": "Pause",
              "FULL_PATH": "/sequences/ambient/pause",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "togglePlay": {
              "DESCRIPTION": "TogglePlay",
              "FULL_PATH": "/sequences/ambient/togglePlay",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "playAtLoad": {
              "DESCRIPTION": "Play at Load",
              "FULL_PATH": "/sequences/ambient/playAtLoad",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "saveCurrentTime": {
              "DESCRIPTION": "Save Current Time",
              "FULL_PATH": "/sequences/ambient/saveCurrentTime",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "currentTime": {
              "DESCRIPTION": "Current Time",
              "FULL_PATH": "/sequences/ambient/currentTime",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                0.0
              ],
              "RANGE": [
                {
                  "MIN": 0.0,
                  "MAX": 30.0
                }
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "totalTime": {
              "DESCRIPTION": "Total Time",
              "FULL_PATH": "/sequences/ambient/totalTime",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                30.0
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "playSpeed": {
              "DESCRIPTION": "Play Speed",
              "FULL_PATH": "/sequences/ambient/playSpeed",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                1.0
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "fps": {
              "DESCRIPTION": "FPS",
              "FULL_PATH": "/sequences/ambient/fps",
              "ACCESS": 3,
              "TYPE": "i",
              "VALUE": [
                50
              ],
              "RANGE": [
                {
                  "MIN": 1,
                  "MAX": 500
                }
              ],
              "EXTENDED_TYPE": [
                "Integer"
              ]
            },
            "loop": {
              "DESCRIPTION": "Loop",
              "FULL_PATH": "/sequences/ambient/loop",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "bpmPreview": {
              "DESCRIPTION": "BPM Preview",
              "FULL_PATH": "/sequences/ambient/bpmPreview",
              "ACCESS": 3,
              "TYPE": "f",
              "ATTRIBUTES": {
                "enabled": true
              },
              "VALUE": [
                120.0
              ],
              "RANGE": [
                {
                  "MIN": 1.0,
                  "MAX": 999.0
                }
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "beatsPerBar": {
              "DESCRIPTION": "Beats Per Bar",
              "FULL_PATH": "/sequences/ambient/beatsPerBar",
              "ACCESS": 3,
              "TYPE": "i",
              "VALUE": [
                4
              ],
              "RANGE": [
                {
                  "MIN": 1,
                  "MAX": 32
                }
              ],
              "EXTENDED_TYPE": [
                "Integer"
              ]
            },
            "autoSnap": {
              "DESCRIPTION": "Auto Snap",
              "FULL_PATH": "/sequences/ambient/autoSnap",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "evaluateOnSeek": {
              "DESCRIPTION": "Evaluate on Seek",
              "FULL_PATH": "/sequences/ambient/evaluateOnSeek",
              "ACCESS": 3,
              "TYPE": "s",
              "VALUE": [
                "When Playing Only"
              ],
              "RANGE": [
                {
                  "VALS": [
                    "When Playing Only",
                    "When Not Playing",
                    "Always",
                    "Never"
                  ]
                }
              ],
              "EXTENDED_TYPE": [
                "Enum"
              ]
            },
            "prevCue": {
              "DESCRIPTION": "Prev Cue",
              "FULL_PATH": "/sequences/ambient/prevCue",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "nextCue": {
              "DESCRIPTION": "Next Cue",
              "FULL_PATH": "/sequences/ambient/nextCue",
              "ACCESS": 3,
              "TYPE": "N"
            },
            "viewStartTime": {
              "DESCRIPTION": "View start time",
              "FULL_PATH": "/sequences/ambient/viewStartTime",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                0.0
              ],
              "RANGE": [
                {
                  "MIN": 0.0,
                  "MAX": 29.98999977111816
                }
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "viewEndTime": {
              "DESCRIPTION": "View end time",
              "FULL_PATH": "/sequences/ambient/viewEndTime",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                30.0
              ],
              "RANGE": [
                {
                  "MIN": 0.009999999776482582,
                  "MAX": 30.0
                }
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "minimumViewRange": {
              "DESCRIPTION": "Minimum view range",
              "FULL_PATH": "/sequences/ambient/minimumViewRange",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                1.0
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "viewFollowTime": {
              "DESCRIPTION": "View follow time",
              "FULL_PATH": "/sequences/ambient/viewFollowTime",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/sequences/ambient/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff363636"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "syncDevices": {
              "DESCRIPTION": "Sync Devices",
              "FULL_PATH": "/sequences/ambient/syncDevices",
              "ACCESS": 3,
              "TYPE": "?",
              "ATTRIBUTES": {
                "enabled": false
              },
              "VALUE": [
                "MIDI Devices to send and/or receive MTC to sync the sequence with external systems.",
                "",
                ""
              ],
              "EXTENDED_TYPE": [
                "MIDIDevice"
              ]
            },
            "mtcFramerate": {
              "DESCRIPTION": "MTC Framerate",
              "FULL_PATH": "/sequences/ambient/mtcFramerate",
              "ACCESS": 3,
              "TYPE": "s",
              "VALUE": [
                "30"
              ],
              "RANGE": [
                {
                  "VALS": [
                    "30",
                    "30 drop",
                    "25",
                    "24"
                  ]
                }
              ],
              "EXTENDED_TYPE": [
                "Enum"
              ]
            },
            "ltcSyncModule": {
              "DESCRIPTION": "LTC Sync Module",
              "FULL_PATH": "/sequences/ambient/ltcSyncModule",
              "ACCESS": 3,
              "TYPE": "s",
              "ATTRIBUTES": {
                "enabled": false
              },
              "VALUE": [
                ""
              ],
              "EXTENDED_TYPE": [
                "Target"
              ]
            },
            "ltcMode": {
              "DESCRIPTION": "LTC Mode",
              "FULL_PATH": "/sequences/ambient/ltcMode",
              "ACCESS": 3,
              "TYPE": "s",
              "VALUE": [
                "Receive"
              ],
              "RANGE": [
                {
                  "VALS": [
                    "Receive",
                    "Send",
                    "Both"
                  ]
                }
              ],
              "EXTENDED_TYPE": [
                "Enum"
              ]
            },
            "sendFPS": {
              "DESCRIPTION": "Send FPS",
              "FULL_PATH": "/sequences/ambient/sendFPS",
              "ACCESS": 3,
              "TYPE": "s",
              "VALUE": [
                "30"
              ],
              "RANGE": [
                {
                  "VALS": [
                    "24",
                    "25",
                    "30 (525_60)",
                    "30 (1125_60)"
                  ]
                }
              ],
              "EXTENDED_TYPE": [
                "Enum"
              ]
            },
            "syncOffset": {
              "DESCRIPTION": "Sync Offset",
              "FULL_PATH": "/sequences/ambient/syncOffset",
              "ACCESS": 3,
              "TYPE": "f",
              "VALUE": [
                0.0
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "reverseOffset": {
              "DESCRIPTION": "Reverse Offset",
              "FULL_PATH": "/sequences/ambient/reverseOffset",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "resetOnMTCStop": {
              "DESCRIPTION": "Reset on MTC Stop",
              "FULL_PATH": "/sequences/ambient/resetOnMTCStop",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "cues": {
              "DESCRIPTION": "Cues",
              "FULL_PATH": "/sequences/ambient/cues",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            }
          },
          "TYPE": "Sequence"
        }
      },
      "TYPE": "Manager",
      "EXTENDED_TYPE": [
        "Sequence"
      ]
    },
    "customVariables": {
      "DESCRIPTION": "Custom Variables",
      "FULL_PATH": "/customVariables",
      "ACCESS": 0,
      "CONTENTS": {
        "outputs": {
          "DESCRIPTION": "Outputs",
          "FULL_PATH": "/customVariables/outputs",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/customVariables/outputs/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/customVariables/outputs/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "interpolationProgress": {
              "DESCRIPTION": "Interpolation Progress",
              "FULL_PATH": "/customVariables/outputs/interpolationProgress",
              "ACCESS": 1,
              "TYPE": "f",
              "VALUE": [
                0.0
              ],
              "RANGE": [
                {
                  "MIN": 0.0,
                  "MAX": 1.0
                }
              ],
              "EXTENDED_TYPE": [
                "Float"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/customVariables/outputs/parameters",
              "ACCESS": 0,
              "CONTENTS": {
                "controlMode": {
                  "DESCRIPTION": "Control Mode",
                  "FULL_PATH": "/customVariables/outputs/parameters/controlMode",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    "Free"
                  ],
                  "RANGE": [
                    {
                      "VALS": [
                        "Free",
                        "Weights",
                        "2D Voronoi"
                      ]
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Enum"
                  ]
                },
                "randomize": {
                  "DESCRIPTION": "Randomize",
                  "FULL_PATH": "/customVariables/outputs/parameters/randomize",
                  "ACCESS": 3,
                  "TYPE": "N"
                }
              },
              "TYPE": "Container"
            },
            "variables": {
              "DESCRIPTION": "Variables",
              "FULL_PATH": "/customVariables/outputs/variables",
              "ACCESS": 0,
              "CONTENTS": {
                "bedroomColor": {
                  "DESCRIPTION": "Bedroom color",
                  "FULL_PATH": "/customVariables/outputs/variables/bedroomColor",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/bedroomColor/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "bedroomColor": {
                      "DESCRIPTION": "Bedroom color",
                      "FULL_PATH": "/customVariables/outputs/variables/bedroomColor/bedroomColor",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ffff0000"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    }
                  },
                  "TYPE": "Color Parameter"
                },
                "livingRoomColor": {
                  "DESCRIPTION": "Living room color",
                  "FULL_PATH": "/customVariables/outputs/variables/livingRoomColor",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/livingRoomColor/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "livingRoomColor": {
                      "DESCRIPTION": "Living room color",
                      "FULL_PATH": "/customVariables/outputs/variables/livingRoomColor/livingRoomColor",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ff0dffca"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    }
                  },
                  "TYPE": "Color Parameter"
                },
                "audioVolume": {
                  "DESCRIPTION": "Audio volume",
                  "FULL_PATH": "/customVariables/outputs/variables/audioVolume",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/audioVolume/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "audioVolume": {
                      "DESCRIPTION": "Audio volume",
                      "FULL_PATH": "/customVariables/outputs/variables/audioVolume/audioVolume",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.626086950302124
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    }
                  },
                  "TYPE": "Float Parameter"
                },
                "videoProjection": {
                  "DESCRIPTION": "Video Projection",
                  "FULL_PATH": "/customVariables/outputs/variables/videoProjection",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/videoProjection/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "videoProjection": {
                      "DESCRIPTION": "Video Projection",
                      "FULL_PATH": "/customVariables/outputs/variables/videoProjection/videoProjection",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "snow"
                      ],
                      "RANGE": [
                        {
                          "VALS": [
                            "fire",
                            "snow",
                            "water",
                            "forest",
                            "none"
                          ]
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    }
                  },
                  "TYPE": "Enum Parameter"
                },
                "projectionOpacity": {
                  "DESCRIPTION": "Projection Opacity",
                  "FULL_PATH": "/customVariables/outputs/variables/projectionOpacity",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/projectionOpacity/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "projectionOpacity": {
                      "DESCRIPTION": "Projection Opacity",
                      "FULL_PATH": "/customVariables/outputs/variables/projectionOpacity/projectionOpacity",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.3429999947547913
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    }
                  },
                  "TYPE": "Float Parameter"
                },
                "run": {
                  "DESCRIPTION": "Run",
                  "FULL_PATH": "/customVariables/outputs/variables/run",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "enabled": {
                      "DESCRIPTION": "Enabled",
                      "FULL_PATH": "/customVariables/outputs/variables/run/enabled",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    },
                    "run": {
                      "DESCRIPTION": "Run",
                      "FULL_PATH": "/customVariables/outputs/variables/run/run",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    }
                  },
                  "TYPE": "Bool Parameter"
                }
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "/Float Parameter",
                "/Int Parameter",
                "/Bool Parameter",
                "/String Parameter",
                "/Color Parameter",
                "/Point2D Parameter",
                "/Point3D Parameter",
                "/Enum Parameter",
                "/Target Parameter"
              ]
            },
            "presets": {
              "DESCRIPTION": "Presets",
              "FULL_PATH": "/customVariables/outputs/presets",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "defaultPresetInterpolation": {
              "DESCRIPTION": "Default Preset Interpolation",
              "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation",
              "ACCESS": 0,
              "CONTENTS": {
                "length": {
                  "DESCRIPTION": "Length",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/length",
                  "ACCESS": 1,
                  "TYPE": "f",
                  "VALUE": [
                    1.0
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "position": {
                  "DESCRIPTION": "Position",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/position",
                  "ACCESS": 3,
                  "TYPE": "f",
                  "VALUE": [
                    0.0
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "value": {
                  "DESCRIPTION": "Value",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/value",
                  "ACCESS": 1,
                  "TYPE": "f",
                  "VALUE": [
                    0.0
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 1.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Float"
                  ]
                },
                "viewValueRange": {
                  "DESCRIPTION": "View Value Range",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/viewValueRange",
                  "ACCESS": 3,
                  "TYPE": "ff",
                  "VALUE": [
                    0.0,
                    1.0
                  ],
                  "RANGE": [
                    {
                      "MIN": 0.0,
                      "MAX": 1.0
                    },
                    {
                      "MIN": 0.0,
                      "MAX": 1.0
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Point2D"
                  ]
                },
                "range": {
                  "DESCRIPTION": "Range",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/range",
                  "ACCESS": 3,
                  "TYPE": "ff",
                  "ATTRIBUTES": {
                    "enabled": true
                  },
                  "VALUE": [
                    0.0,
                    1.0
                  ],
                  "EXTENDED_TYPE": [
                    "Point2D"
                  ]
                },
                "rangeRemapMode": {
                  "DESCRIPTION": "Range Remap Mode",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/rangeRemapMode",
                  "ACCESS": 3,
                  "TYPE": "s",
                  "VALUE": [
                    "Absolute"
                  ],
                  "RANGE": [
                    {
                      "VALS": [
                        "Absolute",
                        "Proportional"
                      ]
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Enum"
                  ]
                },
                "key": {
                  "DESCRIPTION": "Key",
                  "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "position": {
                      "DESCRIPTION": "Position",
                      "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/position",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        1.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "value": {
                      "DESCRIPTION": "Value",
                      "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/value",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        1.0
                      ],
                      "RANGE": [
                        {
                          "MIN": 0.0,
                          "MAX": 1.0
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "easingType": {
                      "DESCRIPTION": "Easing Type",
                      "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/easingType",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "Bezier"
                      ],
                      "RANGE": [
                        {
                          "VALS": [
                            "Linear",
                            "Bezier",
                            "Hold",
                            "Sine",
                            "Elastic",
                            "Bounce",
                            "Steps",
                            "Noise",
                            "Perlin"
                          ]
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    },
                    "easing": {
                      "DESCRIPTION": "Easing",
                      "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/easing",
                      "ACCESS": 0,
                      "CONTENTS": {
                        "anchor1": {
                          "DESCRIPTION": "Anchor 1",
                          "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/easing/anchor1",
                          "ACCESS": 3,
                          "TYPE": "ff",
                          "VALUE": [
                            0.0,
                            0.0
                          ],
                          "EXTENDED_TYPE": [
                            "Point2D"
                          ]
                        },
                        "anchor2": {
                          "DESCRIPTION": "Anchor 2",
                          "FULL_PATH": "/customVariables/outputs/defaultPresetInterpolation/key/easing/anchor2",
                          "ACCESS": 3,
                          "TYPE": "ff",
                          "VALUE": [
                            0.0,
                            0.0
                          ],
                          "EXTENDED_TYPE": [
                            "Point2D"
                          ]
                        }
                      },
                      "TYPE": "Container"
                    }
                  },
                  "TYPE": "Key"
                }
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                "AutomationKey"
              ]
            }
          },
          "TYPE": "CVGroup"
        },
        "customVariables": {
          "DESCRIPTION": "Custom Variables",
          "FULL_PATH": "/customVariables/customVariables",
          "ACCESS": 0,
          "CONTENTS": {
            "enabled": {
              "DESCRIPTION": "Enabled",
              "FULL_PATH": "/customVariables/customVariables/enabled",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                true
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "color": {
              "DESCRIPTION": "Color",
              "FULL_PATH": "/customVariables/customVariables/color",
              "ACCESS": 3,
              "TYPE": "r",
              "VALUE": [
                "ff474747"
              ],
              "EXTENDED_TYPE": [
                "Color"
              ]
            },
            "logIncoming": {
              "DESCRIPTION": "Log Incoming",
              "FULL_PATH": "/customVariables/customVariables/logIncoming",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "logOutgoing": {
              "DESCRIPTION": "Log Outgoing",
              "FULL_PATH": "/customVariables/customVariables/logOutgoing",
              "ACCESS": 3,
              "TYPE": "T",
              "VALUE": [
                false
              ],
              "RANGE": [
                {
                  "MIN": 0,
                  "MAX": 1
                }
              ],
              "EXTENDED_TYPE": [
                "Boolean"
              ]
            },
            "parameters": {
              "DESCRIPTION": "Parameters",
              "FULL_PATH": "/customVariables/customVariables/parameters",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Container"
            },
            "values": {
              "DESCRIPTION": "Values",
              "FULL_PATH": "/customVariables/customVariables/values",
              "ACCESS": 0,
              "CONTENTS": {
                "outputs": {
                  "DESCRIPTION": "Outputs",
                  "FULL_PATH": "/customVariables/customVariables/values/outputs",
                  "ACCESS": 0,
                  "CONTENTS": {
                    "bedroomColor": {
                      "DESCRIPTION": "Bedroom color",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/bedroomColor",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ffff0000"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    },
                    "livingRoomColor": {
                      "DESCRIPTION": "Living room color",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/livingRoomColor",
                      "ACCESS": 3,
                      "TYPE": "r",
                      "VALUE": [
                        "ff0dffca"
                      ],
                      "EXTENDED_TYPE": [
                        "Color"
                      ]
                    },
                    "audioVolume": {
                      "DESCRIPTION": "Audio volume",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/audioVolume",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.626086950302124
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "videoProjection": {
                      "DESCRIPTION": "Video Projection",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/videoProjection",
                      "ACCESS": 3,
                      "TYPE": "s",
                      "VALUE": [
                        "snow"
                      ],
                      "RANGE": [
                        {
                          "VALS": [
                            "fire",
                            "snow",
                            "water",
                            "forest",
                            "none"
                          ]
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Enum"
                      ]
                    },
                    "projectionOpacity": {
                      "DESCRIPTION": "Projection Opacity",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/projectionOpacity",
                      "ACCESS": 3,
                      "TYPE": "f",
                      "VALUE": [
                        0.3429999947547913
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Float"
                      ]
                    },
                    "run": {
                      "DESCRIPTION": "Run",
                      "FULL_PATH": "/customVariables/customVariables/values/outputs/run",
                      "ACCESS": 3,
                      "TYPE": "T",
                      "VALUE": [
                        true
                      ],
                      "RANGE": [
                        {
                          "MIN": 0,
                          "MAX": 1
                        }
                      ],
                      "EXTENDED_TYPE": [
                        "Boolean"
                      ]
                    }
                  },
                  "TYPE": "Container"
                }
              },
              "TYPE": "Container"
            },
            "scripts": {
              "DESCRIPTION": "Scripts",
              "FULL_PATH": "/customVariables/customVariables/scripts",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": [
                ""
              ]
            },
            "commandTester": {
              "DESCRIPTION": "Command Tester",
              "FULL_PATH": "/customVariables/customVariables/commandTester",
              "ACCESS": 0,
              "CONTENTS": {
                "enabled": {
                  "DESCRIPTION": "Enabled",
                  "FULL_PATH": "/customVariables/customVariables/commandTester/enabled",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    true
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                },
                "trigger": {
                  "DESCRIPTION": "Trigger",
                  "FULL_PATH": "/customVariables/customVariables/commandTester/trigger",
                  "ACCESS": 3,
                  "TYPE": "N"
                },
                "autoTrigger": {
                  "DESCRIPTION": "Auto Trigger",
                  "FULL_PATH": "/customVariables/customVariables/commandTester/autoTrigger",
                  "ACCESS": 3,
                  "TYPE": "T",
                  "VALUE": [
                    false
                  ],
                  "RANGE": [
                    {
                      "MIN": 0,
                      "MAX": 1
                    }
                  ],
                  "EXTENDED_TYPE": [
                    "Boolean"
                  ]
                }
              },
              "TYPE": "BaseItem"
            },
            "templates": {
              "DESCRIPTION": "Templates",
              "FULL_PATH": "/customVariables/customVariables/templates",
              "ACCESS": 0,
              "CONTENTS": {
              },
              "TYPE": "Manager",
              "EXTENDED_TYPE": null
            }
          },
          "TYPE": "CustomVariables"
        }
      },
      "TYPE": "Manager",
      "EXTENDED_TYPE": [
        "CVGroup"
      ]
    }
  },
  "TYPE": "Container"
}