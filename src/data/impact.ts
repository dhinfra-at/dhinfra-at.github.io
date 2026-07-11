// Data for the /impact page: projects that used the infrastructure and the
// outputs produced with it. Plain data so entries can be added by pull request;
// only `title` (and, for a project, `kind`) is required.
//
// A row is public only with `listingConfirmed: true`. Person names appear only
// inside a citation, or via `pi` when `consent` is recorded — never otherwise,
// including course instructors.

export type Infrastructure =
  | 'gpu-cluster' // GPU & LLM cluster (Graz)
  | 'digitization' // scanning / digitization
  | 'saas' // SaaS / IaaS & storage
  | 'software'; // open-source software (QLever, liiive.now, Zellij)

export type Kind =
  | 'project' // a funded research project / group
  | 'individual' // a named researcher or student
  | 'course'; // a university course / seminar taught on the infrastructure

export type Funder = 'FWF' | 'EU' | 'DFG' | 'CLARIAH-AT' | 'FFG';

/** Grant reference for cross-linking to FWF research radar / CORDIS. */
export interface FunderRef {
  agency: Funder;
  /** Co-funding agencies for joint grants, e.g. "DFG", "DFG/SNSF" (FWF Weave). */
  co?: string;
  /** Programme / scheme, e.g. "ERC Advanced Grant", "Weave", "SFB". Not rendered. */
  programme?: string;
  /** Grant identifier as displayed, e.g. "P35783", "101019327". */
  grantId?: string;
  /** Canonical funder page — FWF research radar or CORDIS. */
  url?: string;
}

/** When, how and by whom consent to name a person publicly was given. */
export interface Consent {
  basis: 'application-checkbox' | 'email' | 'pr' | 'use-case-post';
  /** ISO date, e.g. "2026-03-16". */
  date: string;
  by?: string;
}

export const infraLabel: Record<Infrastructure, string> = {
  'gpu-cluster': 'GPU & LLM cluster',
  digitization: 'Digitization',
  saas: 'SaaS / storage',
  software: 'Open source software',
};

export interface ProjectEntry {
  /** Project title as "Full title (ABBR)", or a short description for an individual/course. */
  title: string;
  kind: Kind;
  /** Principal investigator / responsible person. Rendered only with `consent`. */
  pi?: string;
  /** Required before `pi` is shown publicly. See the person-name rule above. */
  consent?: Consent;
  /** Institution (and city), e.g. "Austrian Academy of Sciences (ÖAW)". */
  institution?: string;
  /** Which infrastructure was used. Optional while still being captured. */
  infrastructure?: Infrastructure;
  /** Term, for courses — e.g. "Winter semester 2025/26". Optional. */
  term?: string;
  /** External project homepage or relevant link. Optional. */
  link?: string;
  /** Funder + grant identifier, for cross-linking to FWF / CORDIS. Optional. */
  funder?: FunderRef;
  /** Link to a write-up on this site (a Use Cases & News post). Optional. */
  useCaseHref?: string;
  /** Must be true for the entry to render publicly. See disclosure rule above. */
  listingConfirmed: boolean;
}

// A thesis is a publication; software lives under Resources; courses are
// projects (kind 'course').
export type OutputType = 'publication' | 'talk' | 'workshop' | 'dataset';

export type OutputStatus = 'published' | 'accepted' | 'in-press' | 'under-review' | 'in-preparation' | 'planned';

export interface OutputEntry {
  type: OutputType;
  title: string;
  /** Authors / presenters, free text. Optional. */
  authors?: string;
  /** Venue, journal, course host, or repository. Optional. */
  venue?: string;
  /** Human-readable date, e.g. "April 2026". Optional. */
  date?: string;
  /** DOI or URL (external), or an on-site path (a use-case post). Optional. */
  link?: string;
  status?: OutputStatus;
  /** Title of the related project, if any. Optional. */
  relatedProject?: string;
  listingConfirmed: boolean;
}

// Grant IDs / DOIs come from the FWF research radar (10.55776/…) and CORDIS.
export const projects: ProjectEntry[] = [
  {
    title: 'Historical Job Ads',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    link: 'https://historical-job-ads.uni-graz.at/en/about-the-project/',
    funder: {
      agency: 'FWF',
      grantId: 'P35783',
      programme: 'Standalone Project',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/P35783',
    },
    listingConfirmed: true,
  },
  {
    title: 'Austrian Newspapers Online (ANNO)',
    kind: 'project',
    institution: 'Austrian National Library (ÖNB)',
    infrastructure: 'gpu-cluster',
    link: 'https://anno.onb.ac.at/',
    listingConfirmed: true,
  },
  {
    title: 'Unlocking the Schematismus',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    funder: {
      agency: 'FWF',
      grantId: 'FG3100',
      programme: 'Research Groups',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/FG3100',
    },
    listingConfirmed: true,
  },
  {
    title: 'From Digital to Distant Diplomatics (DiDip)',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    link: 'https://didip.eu/',
    funder: {
      agency: 'EU',
      grantId: '101019327',
      programme: 'ERC Advanced Grant',
      url: 'https://cordis.europa.eu/project/id/101019327',
    },
    listingConfirmed: true,
  },
  {
    title: 'Managing Maximilian (ManMax)',
    kind: 'project',
    institution: 'Austrian Academy of Sciences (ÖAW)',
    infrastructure: 'gpu-cluster',
    link: 'https://manmax.hypotheses.org/',
    funder: {
      agency: 'FWF',
      grantId: 'F92',
      programme: 'Special Research Area (SFB)',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/F92',
    },
    listingConfirmed: true,
  },
  {
    title: 'Aldersbach Abbey account books',
    kind: 'project',
    institution: 'Austrian Academy of Sciences (ÖAW) · University of Graz',
    infrastructure: 'gpu-cluster',
    link: 'https://www.oeaw.ac.at/acdh/research/musicology/research/documentation-source-studies/aldersbach-the-accounts',
    funder: {
      agency: 'FWF',
      co: 'DFG',
      grantId: 'PIN2678923',
      programme: 'Weave',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/PIN2678923',
    },
    useCaseHref: '/2026-02-20-aldersbach-account-books',
    listingConfirmed: true,
  },
  {
    // Multispectral imaging with TU Wien's MISHA (loaned) plus cluster processing.
    title: 'Medieval Serbian Charters Action (MeSeCa)',
    kind: 'project',
    institution: 'University of Graz · MISHA imaging (TU Wien)',
    infrastructure: 'gpu-cluster',
    funder: {
      agency: 'EU',
      grantId: '101154457',
      programme: 'MSCA Postdoctoral Fellowship',
      url: 'https://cordis.europa.eu/project/id/101154457',
    },
    useCaseHref: '/2026-05-13-misha-cetinje-charters',
    listingConfirmed: true,
  },
  {
    title: 'German Arithmetical Treatises in Manuscripts of the Late Middle Ages (ARITHMETIC)',
    kind: 'project',
    institution: 'University of Innsbruck',
    infrastructure: 'gpu-cluster',
    link: 'https://www.arithmetic-project.org/',
    funder: {
      agency: 'EU',
      grantId: '101039572',
      programme: 'ERC Starting Grant',
      url: 'https://cordis.europa.eu/project/id/101039572',
    },
    listingConfirmed: true,
  },
  {
    title: 'Celtic and Latin Glossing Traditions (GLOSSIT)',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    funder: {
      agency: 'EU',
      grantId: '101123203',
      programme: 'ERC Consolidator Grant',
      url: 'https://cordis.europa.eu/project/id/101123203',
    },
    listingConfirmed: true,
  },
  {
    title: 'Moving in Space and Time (MoST)',
    kind: 'project',
    institution: 'University of Graz · TU Graz',
    infrastructure: 'gpu-cluster',
    funder: {
      agency: 'FWF',
      grantId: 'PAT1763723',
      programme: 'Standalone Project (PAT)',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/PAT1763723',
    },
    listingConfirmed: true,
  },
  {
    // FWF Weave trilateral grant, co-funded with DFG (DE) and SNSF (CH).
    title: 'Tartinians in Europe',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    link: 'https://tartinians.uni-graz.at/',
    funder: {
      agency: 'FWF',
      co: 'DFG/SNSF',
      grantId: 'PIN5035023',
      programme: 'Weave',
      url: 'https://www.fwf.ac.at/en/research-radar/10.55776/PIN5035023',
    },
    listingConfirmed: true,
  },
  {
    // CLARIAH-AT small-scale project (BMFWF). Digitization of a library catalogue.
    title: 'Autor:innenbibliotheken als Wissensräume: Digitalisierung des Katalogs der Arnim-Bibliothek',
    kind: 'project',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    funder: {
      agency: 'CLARIAH-AT',
      programme: 'Small-Scale Project',
      url: 'https://clariah.at/de/news/small-scale-projects-announced/',
    },
    listingConfirmed: true,
  },
  // Courses taught on the infrastructure. Instructors are not named without consent.
  {
    title: 'Course Project in Artificial Intelligence and Cybersecurity',
    kind: 'course',
    institution: 'University of Klagenfurt (AAU)',
    infrastructure: 'gpu-cluster',
    term: 'Winter semester 2025/26',
    listingConfirmed: true,
  },
  {
    title: 'Projektseminar (project seminar)',
    kind: 'course',
    institution: 'University of Graz',
    infrastructure: 'gpu-cluster',
    term: 'Summer semester 2026',
    listingConfirmed: true,
  },
];

// Outputs produced with the infrastructure.
export const outputs: OutputEntry[] = [
  {
    type: 'publication',
    title: 'HPC and DHinfra',
    authors: 'Atzenhofer-Baumgartner',
    venue: 'ASHPC24 (Austrian–Slovenian HPC Meeting), Grundlsee',
    date: '2024',
    status: 'published',
    listingConfirmed: true,
  },
  {
    type: 'publication',
    title: 'Design and Operation of a Federated GPU Cluster for Digital Humanities within DHinfra.at',
    authors: 'Atzenhofer-Baumgartner, Fleischhacker, Resch, Waldhofer, Otto',
    venue: 'ASHPC26 (Austrian–Slovenian HPC Meeting), Vienna',
    date: 'April 2026',
    status: 'published',
    listingConfirmed: true,
  },
  {
    // Volume and pages follow once the ICDAR 2026 proceedings appear.
    type: 'publication',
    title: 'Line Extraction on Medieval Charters with Mask R-CNN',
    authors: 'Renet, Nicolaou, Vogeler',
    venue:
      "HIP'26 — 8th International Workshop on Historical Document Imaging and Processing, at ICDAR 2026, Vienna · LNCS, Springer",
    date: 'September 2026',
    status: 'accepted',
    relatedProject: 'From Digital to Distant Diplomatics (DiDip)',
    listingConfirmed: true,
  },
  {
    type: 'publication',
    title: 'Design and Operation of a Federated GPU Cluster for Digital Humanities within DHinfra.at — extended version',
    authors: 'Atzenhofer-Baumgartner, Fleischhacker, Resch, Waldhofer, Otto',
    venue: 'in preparation (arXiv)',
    status: 'in-preparation',
    listingConfirmed: true,
  },
  {
    type: 'publication',
    title: 'Evaluation and Funding of Free and Open Source Software for Digital Humanities within DHinfra.at',
    authors: 'Atzenhofer-Baumgartner, Heine, Trognitz, Wachter, Waldhofer, Scholger, Schlögl, Ďurčo, Vogeler, Wallnig',
    venue: 'in preparation',
    status: 'in-preparation',
    listingConfirmed: true,
  },
  {
    type: 'workshop',
    title: 'First DHInfra.at LLM Workshop — OCR post-correction with LLMs',
    venue: 'DHd2026, Universität Wien',
    date: '23 Feb 2026',
    link: '/2026-02-23-dhd-workshop-ocr-postcorrection',
    status: 'published',
    listingConfirmed: true,
  },
  {
    type: 'publication',
    title: 'Open-source tooling for video retrieval with Vision Language Models',
    authors: 'Ferdinand Köppen',
    venue: "University of Klagenfurt (AAU), master's thesis",
    listingConfirmed: true,
  },
  // Datasets/models (Zenodo, Hugging Face) go here as type 'dataset' — none yet.
];
