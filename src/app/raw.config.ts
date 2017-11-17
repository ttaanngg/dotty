/**
 * Created by tangweiqiang on 2017/9/1.
 */

export class RawDevice {
  id: string;
  type: string;
  name: string;
  subs?: RawDevice[];
  attrs?: {};
}

export class RawLink {
  from: string;
  to: string;
  link_type: string;
  attrs?: any;
}

export class RawConfig {
  devices: RawDevice[];
  connections: RawLink[];
}

export let rawConfig: RawConfig = {
  "devices": [
    {
      "id": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "type": "server",
      "name": "blade 1",
      "attrs": {
        "uuid": "1",
        "model_type": "blade",
        "vlan": "{\"vlan_id\": \"10\", \"vlan_type\": \"interface\", \"ports\": [{\"port_id\": \"7c765079-4198-4121-a9ce-5cda9e78d040\", \"link_type\": \"access\"}]}"
      }
    },
    {
      "id": "b1882889-ce4e-4c9b-b4b7-1d6d967302a0",
      "type": "server",
      "name": "blade 2",
      "attrs": {
        "uuid": "2",
        "model_type": "blade"
      }
    },
    {
      "id": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "type": "switch",
      "name": "switch 1",
      "attrs": {
        "uuid": "8f6b0db2-0d79-49e3-af83-6043bce2b134",
        "model_type": "switchPlane"
      }
    }, {
      "id": "abceaae7-f7e9-4309-8354-8479944e5780",
      "type": "switch",
      "name": "switch 2",
      "attrs": {
        "uuid": "4ff9a0f8-ce77-4229-824e-b97ba0c4aec4",
        "model_type": "switchPlane",
        "vlan": "{\"vlan_id\": \"10\", \"vlan_type\": \"interface\", \"ports\": [{\"port_id\": \"eth-trunk 1\", \"link_type\": \"trunk\"}]}",
        "trunk": "{\"trunk_port\": [{\"trunk_id\": \"1\", \"physical_port\": [\"955f14c6-adfb-43ac-9a44-90c446c6abfe\", \"52a22123-cc82-4d71-afe7-496424dd2d81\"]}]}"
      }
    }, {
      "id": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
      "type": "switch",
      "name": "switch 3",
      "attrs": {
        "uuid": "c0b40bb1-2af4-4713-9615-6b7900c9b3ed",
        "model_type": "switchPlane",
        "trunk": "{\"trunk_port\": [{\"trunk_id\": \"1\", \"physical_port\": [\"869ac1a0-9e7d-40d1-bd33-a3370fbd8a77\", \"ea365cc1-3b37-4036-8d4c-3c99d04a4f62\"]}]}",
        "vlan": "{\"vlan_id\": \"10\", \"vlan_type\": \"interface\", \"ports\": [{\"port_id\": \"eth-trunk 1\", \"link_type\": \"trunk\"}]}"
      }
    }],
  "connections": [{
    "from": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
    "to": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
    "link_type": null,
    "attrs": {
      "port_a": "8a08f17f-3df8-4b0e-81e2-b7902932e12e",
      "port_b": "66d9b0d1-9646-4e70-b8d7-b2f22c736a36",
      "bandwidth": 5,
      "unit": "GB",
      "tag": true
    }
  }, {
    "from": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
    "to": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
    "link_type": null,
    "attrs": {
      "port_a": "4bb4715d-6edb-4310-9476-0e4345090099",
      "port_b": "7959638a-6962-4610-9b62-bb5bd1b0cf17",
      "bandwidth": 5,
      "unit": "GB",
      "tag": true
    }
  },
    {
    "from": "abceaae7-f7e9-4309-8354-8479944e5780",
    "to": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
    "link_type": null,
    "attrs": {
      "port_a": "955f14c6-adfb-43ac-9a44-90c446c6abfe",
      "port_b": "869ac1a0-9e7d-40d1-bd33-a3370fbd8a77",
      "bandwidth": 5,
      "unit": "GB",
      "tag": true
    }
  },
    {
    "from": "abceaae7-f7e9-4309-8354-8479944e5780",
    "to": "168f6ef7-cbea-4ba6-bd83-ff4253d4435f",
    "link_type": null,
    "attrs": {
      "port_a": "52a22123-cc82-4d71-afe7-496424dd2d81",
      "port_b": "ea365cc1-3b37-4036-8d4c-3c99d04a4f62",
      "bandwidth": 5,
      "unit": "GB",
      "tag": true
    }
  },
    {
    "from": "aacd1583-f880-4fbe-8a32-548ddf420a85",
    "to": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
    "link_type": null,
    "attrs": {
      "port_a": "8b8052f9-3043-43f2-9467-05b25e2ba014",
      "port_b": "2f61a572-29b3-49ab-b2ea-7ac1be207dc7",
      "bandwidth": 10,
      "unit": "GB",
      "tag": false
    }
  },
    {
    "from": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
    "to": "abceaae7-f7e9-4309-8354-8479944e5780",
    "link_type": null,
    "attrs": {
      "port_a": "bf758cb1-2381-4795-b5b9-b5811c75ab73",
      "port_b": "8573b826-9ca2-499f-9a7f-3101c9e3bff9",
      "bandwidth": 10,
      "unit": "GB",
      "tag": false
    }
  },
    {
      "from": "aacd1583-f880-4fbe-8a32-548ddf420a85",
      "to": "abceaae7-f7e9-4309-8354-8479944e5780",
      "link_type": null,
      "attrs": {
        "port_a": "7c765079-4198-4121-a9ce-5cda9e78d040",
        "port_b": "3bb76028-7341-4894-969b-fcd62a988ecf",
        "bandwidth": 10,
        "unit": "GB",
        "tag": false
      }
    },
    {
      "from": "b1882889-ce4e-4c9b-b4b7-1d6d967302a0",
      "to": "abceaae7-f7e9-4309-8354-8479944e5780",
      "link_type": null,
      "attrs": {
        "port_a": "624b11de-f6dc-4fab-90de-d68293a2dd70",
        "port_b": "c9a01ad1-eb7a-41cd-968b-4b8e763ad334",
        "bandwidth": 10,
        "unit": "GB",
        "tag": false
      }
    },
    {
      "from": "b1882889-ce4e-4c9b-b4b7-1d6d967302a0",
      "to": "24b5650c-c745-41ef-81c3-44abcb6ae6d2",
      "link_type": null,
      "attrs": {
        "port_a": "624b11de-f6dc-4fab-90de-d68293a2dd70",
        "port_b": "82424730-27af-4c9c-8c6a-cbc78fe0b79c",
        "bandwidth": 10,
        "unit": "GB",
        "tag": false
      }
    }]
};
