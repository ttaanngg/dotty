let rawRoutes = [
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "blade 1",
      "device_name_b": "switch 2",
      "port_id_a": "7c765079-4198-4121-a9ce-5cda9e78d040",
      "port_id_b": "3bb76028-7341-4894-969b-fcd62a988ecf",
      "port_name_a": "P2",
      "port_name_b": "S2P1",
      "tag": false
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 2",
      "device_name_b": "switch 3",
      "port_id_a": "955f14c6-adfb-43ac-9a44-90c446c6abfe",
      "port_id_b": "869ac1a0-9e7d-40d1-bd33-a3370fbd8a77",
      "port_name_a": "S2P4",
      "port_name_b": "S3P4",
      "tag": true
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "blade 1",
      "device_name_b": "switch 2",
      "port_id_a": "7c765079-4198-4121-a9ce-5cda9e78d040",
      "port_id_b": "3bb76028-7341-4894-969b-fcd62a988ecf",
      "port_name_a": "P2",
      "port_name_b": "S2P1"
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 2",
      "device_name_b": "switch 3",
      "port_id_a": "52a22123-cc82-4d71-afe7-496424dd2d81",
      "port_id_b": "ea365cc1-3b37-4036-8d4c-3c99d04a4f62",
      "port_name_a": "S2P3",
      "port_name_b": "S3P3",
      "tag": true
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "blade 1",
      "device_name_b": "switch 2",
      "port_id_a": "7c765079-4198-4121-a9ce-5cda9e78d040",
      "port_id_b": "3bb76028-7341-4894-969b-fcd62a988ecf",
      "port_name_a": "P2",
      "port_name_b": "S2P1"
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "switch 2",
      "device_name_b": "switch 1",
      "port_id_a": "8573b826-9ca2-499f-9a7f-3101c9e3bff9",
      "port_id_b": "bf758cb1-2381-4795-b5b9-b5811c75ab73",
      "port_name_a": "S2P5",
      "port_name_b": "S1P5",
      "tag": false
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 1",
      "device_name_b": "switch 3",
      "port_id_a": "4bb4715d-6edb-4310-9476-0e4345090099",
      "port_id_b": "7959638a-6962-4610-9b62-bb5bd1b0cf17",
      "port_name_a": "S1P4",
      "port_name_b": "S3P2",
      "tag": true
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "blade 1",
      "device_name_b": "switch 2",
      "port_id_a": "7c765079-4198-4121-a9ce-5cda9e78d040",
      "port_id_b": "3bb76028-7341-4894-969b-fcd62a988ecf",
      "port_name_a": "P2",
      "port_name_b": "S2P1"
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "switch 2",
      "device_name_b": "switch 1",
      "port_id_a": "8573b826-9ca2-499f-9a7f-3101c9e3bff9",
      "port_id_b": "bf758cb1-2381-4795-b5b9-b5811c75ab73",
      "port_name_a": "S2P5",
      "port_name_b": "S1P5"
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 1",
      "device_name_b": "switch 3",
      "port_id_a": "8a08f17f-3df8-4b0e-81e2-b7902932e12e",
      "port_id_b": "66d9b0d1-9646-4e70-b8d7-b2f22c736a36",
      "port_name_a": "S1P3",
      "port_name_b": "S3P1",
      "tag": true
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "blade 1",
      "device_name_b": "switch 1",
      "port_id_a": "8b8052f9-3043-43f2-9467-05b25e2ba014",
      "port_id_b": "2f61a572-29b3-49ab-b2ea-7ac1be207dc7",
      "port_name_a": "P1",
      "port_name_b": "S1P1",
      "tag": false
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 1",
      "device_name_b": "switch 3",
      "port_id_a": "4bb4715d-6edb-4310-9476-0e4345090099",
      "port_id_b": "7959638a-6962-4610-9b62-bb5bd1b0cf17",
      "port_name_a": "S1P4",
      "port_name_b": "S3P2"
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "blade 1",
      "device_name_b": "switch 1",
      "port_id_a": "8b8052f9-3043-43f2-9467-05b25e2ba014",
      "port_id_b": "2f61a572-29b3-49ab-b2ea-7ac1be207dc7",
      "port_name_a": "P1",
      "port_name_b": "S1P1"
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 1",
      "device_name_b": "switch 3",
      "port_id_a": "8a08f17f-3df8-4b0e-81e2-b7902932e12e",
      "port_id_b": "66d9b0d1-9646-4e70-b8d7-b2f22c736a36",
      "port_name_a": "S1P3",
      "port_name_b": "S3P1"
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "blade 1",
      "device_name_b": "switch 1",
      "port_id_a": "8b8052f9-3043-43f2-9467-05b25e2ba014",
      "port_id_b": "2f61a572-29b3-49ab-b2ea-7ac1be207dc7",
      "port_name_a": "P1",
      "port_name_b": "S1P1"
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "switch 1",
      "device_name_b": "switch 2",
      "port_id_a": "bf758cb1-2381-4795-b5b9-b5811c75ab73",
      "port_id_b": "8573b826-9ca2-499f-9a7f-3101c9e3bff9",
      "port_name_a": "S1P5",
      "port_name_b": "S2P5"
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 2",
      "device_name_b": "switch 3",
      "port_id_a": "955f14c6-adfb-43ac-9a44-90c446c6abfe",
      "port_id_b": "869ac1a0-9e7d-40d1-bd33-a3370fbd8a77",
      "port_name_a": "S2P4",
      "port_name_b": "S3P4"
    }
  ],
  [
    {
      "device_id_a": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "device_id_b": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_name_a": "blade 1",
      "device_name_b": "switch 1",
      "port_id_a": "8b8052f9-3043-43f2-9467-05b25e2ba014",
      "port_id_b": "2f61a572-29b3-49ab-b2ea-7ac1be207dc7",
      "port_name_a": "P1",
      "port_name_b": "S1P1"
    },
    {
      "device_id_a": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "device_id_b": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_name_a": "switch 1",
      "device_name_b": "switch 2",
      "port_id_a": "bf758cb1-2381-4795-b5b9-b5811c75ab73",
      "port_id_b": "8573b826-9ca2-499f-9a7f-3101c9e3bff9",
      "port_name_a": "S1P5",
      "port_name_b": "S2P5"
    },
    {
      "device_id_a": "abceaae7-f7e9-4309-8354-8479944e5780",
      "device_id_b": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "device_name_a": "switch 2",
      "device_name_b": "switch 3",
      "port_id_a": "52a22123-cc82-4d71-afe7-496424dd2d81",
      "port_id_b": "ea365cc1-3b37-4036-8d4c-3c99d04a4f62",
      "port_name_a": "S2P3",
      "port_name_b": "S3P3"
    }
  ]
];


export let routesSet = rawRoutes;
