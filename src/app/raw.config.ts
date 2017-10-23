/**
 * Created by tangweiqiang on 2017/9/1.
 */

export class RawDevice {
  id: string;
  type: string;
  subs?: RawDevice[];
  attrs?: any;
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
      "id": "CX311_2X",
      "type": "CX311",
      "attrs": {
        'pod': 'E54',
        'OS': 'CentOS',
      },
      "subs": [
        {
          "id": "MX510",
          "type": "MX510"
        },
        {
          "id": "以太交换",
          "type": "ETH"
        }
      ]
    },
    {
      "id": "CX311_3X",
      "type": "CX311",
      "subs": [
        {
          "id": "MX510",
          "type": "MX510"
        },
        {
          "id": "以太交换",
          "type": "ETH"
        }
      ]
    },
    {
      "id": "CH121_1",
      "type": "CH121",
      "subs": [
        {
          "id": "MZ510_1",
          "type": "MZ510"
        },
        {
          "id": "MZ510_2",
          "type": "MZ510"
        },
        {
          "id": "DIMM_1",
          "type": "DIMM"
        },
        {
          "id": "DIMM_2",
          "type": "DIMM"
        },
        {
          "id": "CPU_1",
          "type": "CPU"
        },
        {
          "id": "CPU_2",
          "type": "CPU"
        },
        {
          "id": "PCIE_SLOT",
          "type": "PCIE_SLOT"
        },
        {
          "id": "HDD/SSD_1",
          "type": "HDD"
        },
        {
          "id": "HDD/SSD_2",
          "type": "HDD/SSD"
        },
        {
          "id": "RAID-Card",
          "type": "RAID_Card"
        },
        {
          "id": "Patsburg-A",
          "type": "RAID_Card"
        },
        {
          "id": "iMana",
          "type": "iMana"
        },
        {
          "id": "MAC",
          "type": "MAC"
        }
      ]
    },
    {
      "id": "CH121_2",
      "type": "CH121",
      "subs": [
        {
          "id": "MZ510_1",
          "type": "MZ510"
        },
        {
          "id": "MZ510_2",
          "type": "MZ510"
        },
        {
          "id": "DIMM_1",
          "type": "DIMM"
        },
        {
          "id": "DIMM_2",
          "type": "DIMM"
        },
        {
          "id": "CPU_1",
          "type": "CPU"
        },
        {
          "id": "CPU_2",
          "type": "CPU"
        },
        {
          "id": "PCIE_SLOT",
          "type": "PCIE_SLOT"
        },
        {
          "id": "HDD/SSD_1",
          "type": "HDD"
        },
        {
          "id": "HDD/SSD_2",
          "type": "HDD/SSD"
        },
        {
          "id": "RAID-Card",
          "type": "RAID_Card"
        },
        {
          "id": "Patsburg-A",
          "type": "RAID_Card"
        },
        {
          "id": "iMana",
          "type": "iMana"
        },
        {
          "id": "MAC",
          "type": "MAC"
        }
      ]
    },
    {
      "id": "CH121_3",
      "type": "CH121",
      "subs": [
        {
          "id": "MZ510_1",
          "type": "MZ510"
        },
        {
          "id": "MZ510_2",
          "type": "MZ510"
        },
        {
          "id": "DIMM_1",
          "type": "DIMM"
        },
        {
          "id": "DIMM_2",
          "type": "DIMM"
        },
        {
          "id": "CPU_1",
          "type": "CPU"
        },
        {
          "id": "CPU_2",
          "type": "CPU"
        },
        {
          "id": "PCIE_SLOT",
          "type": "PCIE_SLOT"
        },
        {
          "id": "HDD/SSD_1",
          "type": "HDD"
        },
        {
          "id": "HDD/SSD_2",
          "type": "HDD/SSD"
        },
        {
          "id": "RAID-Card",
          "type": "RAID_Card"
        },
        {
          "id": "Patsburg-A",
          "type": "RAID_Card"
        },
        {
          "id": "iMana",
          "type": "iMana"
        },
        {
          "id": "MAC",
          "type": "MAC"
        }
      ]
    }
  ],
  "connections": [
    {
      "from": "CX311_2X",
      "to": "CX311_3X",
      "link_type": "stack"
    },
    {
      "from": "CX311_2X",
      "to": "CH121_1",
      "link_type": "融合链路"
    },
    {
      "from": "CX311_2X",
      "to": "CH121_2",
      "link_type": "融合链路"
    },
    {
      "from": "CX311_2X",
      "to": "CH121_3",
      "link_type": "融合链路"
    },
    {
      "from": "CX311_3X",
      "to": "CH121_1",
      "link_type": "融合链路"
    },
    {
      "from": "CX311_3X",
      "to": "CH121_2",
      "link_type": "融合链路"
    },
    {
      "from": "CX311_3X",
      "to": "CH121_3",
      "link_type": "融合链路"
    },
    {
      "from": "CH121_1.DIMM_2",
      "to": "CH121_1.CPU_2",
      "link_type": ""
    },
    {
      "from": "CH121_1.DIMM_1",
      "to": "CH121_1.CPU_1",
      "link_type": ""
    },
    {
      "from": "CH121_1.CPU_2",
      "to": "CH121_1.PCIE_SLOT",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_1.CPU_1",
      "to": "CH121_1.CPU_2",
      "link_type": "QPI"
    },
    {
      "from": "CH121_1.HDD/SSD_1",
      "to": "CH121_1.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_1.HDD/SSD_2",
      "to": "CH121_1.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_1.HDD/SSD_1",
      "to": "CH121_1.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_1.HDD/SSD_2",
      "to": "CH121_1.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_1.RAID-Card",
      "to": "CH121_1.CPU_1",
      "link_type": "x8 PCIE"
    },
    {
      "from": "CH121_1.RAID-Card",
      "to": "CH121_1.Patsburg-A",
      "link_type": "SAS"
    },
    {
      "from": "CH121_1.CPU_1",
      "to": "CH121_1.Patsburg-A",
      "link_type": "DMI2"
    },
    {
      "from": "CH121_1.Patsburg-A",
      "to": "CH121_1.MAC",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_1.CPU_1",
      "to": "CH121_1.MZ510_1",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_1.CPU_1",
      "to": "CH121_1.MZ510_2",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_2.DIMM_2",
      "to": "CH121_2.CPU_2",
      "link_type": ""
    },
    {
      "from": "CH121_2.DIMM_1",
      "to": "CH121_2.CPU_1",
      "link_type": ""
    },
    {
      "from": "CH121_2.CPU_2",
      "to": "CH121_2.PCIE_SLOT",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_2.CPU_1",
      "to": "CH121_2.CPU_2",
      "link_type": "QPI"
    },
    {
      "from": "CH121_2.HDD/SSD_1",
      "to": "CH121_2.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_2.HDD/SSD_2",
      "to": "CH121_2.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_2.HDD/SSD_1",
      "to": "CH121_2.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_2.HDD/SSD_2",
      "to": "CH121_2.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_2.RAID-Card",
      "to": "CH121_2.CPU_1",
      "link_type": "x8 PCIE"
    },
    {
      "from": "CH121_2.RAID-Card",
      "to": "CH121_2.Patsburg-A",
      "link_type": "SAS"
    },
    {
      "from": "CH121_2.CPU_1",
      "to": "CH121_2.Patsburg-A",
      "link_type": "DMI2"
    },
    {
      "from": "CH121_2.Patsburg-A",
      "to": "CH121_2.MAC",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_2.CPU_1",
      "to": "CH121_2.MZ510_1",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_2.CPU_1",
      "to": "CH121_2.MZ510_2",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_3.DIMM_2",
      "to": "CH121_3.CPU_2",
      "link_type": ""
    },
    {
      "from": "CH121_3.DIMM_1",
      "to": "CH121_3.CPU_1",
      "link_type": ""
    },
    {
      "from": "CH121_3.CPU_2",
      "to": "CH121_3.PCIE_SLOT",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_3.CPU_1",
      "to": "CH121_3.CPU_2",
      "link_type": "QPI"
    },
    {
      "from": "CH121_3.HDD/SSD_1",
      "to": "CH121_3.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_3.HDD/SSD_2",
      "to": "CH121_3.CPU_2",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_3.HDD/SSD_1",
      "to": "CH121_3.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_3.HDD/SSD_2",
      "to": "CH121_3.RAID-Card",
      "link_type": "SAS"
    },
    {
      "from": "CH121_3.RAID-Card",
      "to": "CH121_3.CPU_1",
      "link_type": "x8 PCIE"
    },
    {
      "from": "CH121_3.RAID-Card",
      "to": "CH121_3.Patsburg-A",
      "link_type": "SAS"
    },
    {
      "from": "CH121_3.CPU_1",
      "to": "CH121_3.Patsburg-A",
      "link_type": "DMI2"
    },
    {
      "from": "CH121_3.Patsburg-A",
      "to": "CH121_3.MAC",
      "link_type": "x4 PCIE"
    },
    {
      "from": "CH121_3.CPU_1",
      "to": "CH121_3.MZ510_1",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CH121_3.CPU_1",
      "to": "CH121_3.MZ510_2",
      "link_type": "x16 PCIE"
    },
    {
      "from": "CX311_2X.MX510",
      "to": "CX311_2X.以太交换",
      "link_type": "10GE"
    },
    {
      "from": "CX311_3X.MX510",
      "to": "CX311_3X.以太交换",
      "link_type": "10GE"
    },
  ]
};
