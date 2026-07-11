// Hardware and facilities registered in the national research-infrastructure
// database (FI DB, BMBWF), rendered on the Resources page.

export type FacilityGroup = 'compute' | 'digitization';

export interface FacilityEntry {
  name: string;
  /** Institution abbreviation: KFUG, UWK, TUW, PLUS, UIBK. */
  institution: string;
  /** Internal; not rendered. */
  contact?: string;
  group: FacilityGroup;
  desc?: string;
  /** FI DB entry URL. Omit when the entry is only requested. */
  link?: string;
  /** 'requested' = entry applied for but not yet live. */
  fidbStatus: 'listed' | 'requested';
}

export const facilityGroups: { group: FacilityGroup; heading: string }[] = [
  { group: 'compute', heading: 'Compute' },
  { group: 'digitization', heading: 'Digitization & imaging' },
];

export const facilities: FacilityEntry[] = [
  // Compute
  {
    name: 'GPU Cluster for Digital Humanities',
    institution: 'KFUG',
    contact: 'Florian Atzenhofer-Baumgartner',
    group: 'compute',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/gpu-cluster-fur-digital-humanities_6267',
    fidbStatus: 'listed',
  },
  {
    name: 'GPU Cluster for Digital Humanities',
    institution: 'UWK',
    contact: 'Max Resch',
    group: 'compute',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/gpu-cluster-fur-digital-humanities_6591',
    fidbStatus: 'listed',
  },
  {
    name: 'Database Research Cluster',
    institution: 'PLUS',
    contact: 'Daniel Kocher',
    group: 'compute',
    desc: 'Database-as-a-Service and test/development infrastructure-as-a-Service for DH.',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/database-research-cluster_3914',
    fidbStatus: 'listed',
  },
  {
    name: 'GPU Server / Storage',
    institution: 'TUW',
    contact: 'Robert Sablatnig',
    group: 'compute',
    desc: 'Processing of captured imaging data via deep learning and other methods.',
    fidbStatus: 'requested',
  },
  // Digitization & imaging
  {
    name: 'ScanRobot (robotic scanner for loose sheets)',
    institution: 'UIBK',
    contact: 'Günter Mühlberger',
    group: 'digitization',
    desc: 'Prototype robotic scanner for loose sheets up to A4; optimised for early-20th-century registration forms.',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/scanrobot-fur-lose-blattsammlungen_6269',
    fidbStatus: 'listed',
  },
  {
    name: 'Canon imageFORMULA DR-G2090 production scanner',
    institution: 'UIBK',
    contact: 'Günter Mühlberger',
    group: 'digitization',
    desc: 'Production document scanner; currently digitising a 1.5M index-card catalogue (Univ. Wien Numismatics × Univ. Innsbruck).',
    fidbStatus: 'requested',
  },
  {
    name: '5 repro stands with Sony ILX-LR1 cameras',
    institution: 'UIBK',
    contact: 'Günter Mühlberger',
    group: 'digitization',
    desc: '61 MP repro camera rigs for fast, high-quality archival document capture.',
    fidbStatus: 'requested',
  },
  {
    name: '2 NVIDIA DGX Spark',
    institution: 'UIBK',
    contact: 'Günter Mühlberger',
    group: 'digitization',
    desc: 'On-prem inference for small/medium models — for privacy-sensitive archive digitization.',
    fidbStatus: 'requested',
  },
  {
    name: 'XpeCAM multispectral imaging system',
    institution: 'TUW',
    contact: 'Robert Sablatnig',
    group: 'digitization',
    desc: 'Mobile, filter-based multispectral capture (350–1200 nm, 30 filters); no darkroom required.',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/xpecam_5829',
    fidbStatus: 'listed',
  },
  {
    name: 'MISHA multispectral imaging system',
    institution: 'TUW',
    contact: 'Robert Sablatnig',
    group: 'digitization',
    desc: 'Mobile multispectral imaging for archives (flat objects); used for the Cetinje charters.',
    link: 'https://forschungsinfrastruktur.bmfwf.gv.at/en/fi/misha-open-source-msi-system-rochester-institute-of-technology_5830',
    fidbStatus: 'listed',
  },
];
