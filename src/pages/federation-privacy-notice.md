---
title: 'Privacy Notice — Federated Login (REFEDS/GÉANT Codes of Conduct)'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 3 July 2026 · _Version_: 0.3

This privacy notice describes how **DHInfra.at** (including `dhinfra.uni-graz.at`) processes personal
data when you access the service via federated login (e.g. ACOnet/eduID, eduGAIN). It is intended to
meet the requirements of the **GÉANT Data Protection Code of Conduct (v1)**, the **REFEDS Data
Protection Code of Conduct (v2)**, and the entity categories **REFEDS Research & Scholarship** and
**REFEDS Personalized Access**, and it follows the **REFEDS Privacy Notice Template**.

This notice covers the operational platform and its federated login, including the Authentik‑based
identity gateway and connected applications (GPU compute, LLM APIs, storage, notebooks, and related
research workflows).

## 1. Name and Description of the Service

**Name of the service:** DHInfra.at

**Description of the service:** DHInfra.at provides shared GPU, LLM, storage, and support
infrastructure for digital humanities research and teaching. Users authenticate through institutional
or federated identity providers and receive access to approved project resources such as GPU compute,
LLM APIs, storage, notebooks, and related research workflows. Access is academic in scope and
typically granted through project or group membership.

## 1a. Commitments to Codes of Conduct and Entity Categories

DHInfra.at, as a federated Service Provider, commits to the **GÉANT Data Protection Code of Conduct
(v1)** and the **REFEDS Data Protection Code of Conduct (v2)**, and asserts the following entity
categories in its SAML metadata:

- **GÉANT Data Protection Code of Conduct v1** — `http://www.geant.net/uris/dataprotection-code-of-conduct/v1`
- **REFEDS Data Protection Code of Conduct v2** — `https://refeds.org/category/code-of-conduct/v2`
- **REFEDS Research & Scholarship (R&S)** — `http://refeds.org/category/research-and-scholarship`
- **REFEDS Personalized Access** — `https://refeds.org/category/personalized`

By committing to these codes and categories, DHInfra.at:

- requests and processes **only the minimum attributes** necessary for authentication, account linking
  and provisioning, communication with users and project leads, authorisation based on
  DHInfra‑internal project/group membership, and secure operation, monitoring, and reporting of the
  infrastructure;
- uses those attributes **solely** for the purposes described in this notice (purpose limitation) —
  not for unrelated profiling or marketing, and never sold;
- protects personal data in accordance with the **GDPR** and applicable Austrian/EEA data‑protection
  law.

DHInfra.at does **not** assert the REFEDS Anonymous or Pseudonymous Access categories; access is based
on identified academic users.

**Justification of need (Personalized Access):** DHInfra.at requires a stable, non‑reassignable
identifier, basic name and contact information, home organisation, scoped affiliation, and assurance
information in order to operate personalized accounts and project memberships across sessions and
institutions, provide support and incident handling, and meet accountability and reporting obligations
for a shared academic infrastructure. The requested attributes are limited to the union of the R&S and
Personalized Access bundles; **no entitlements or other authorisation attributes are requested** from
home organisations.

## 2. Data Controller and Contact

**Data controller:**

Universität Graz
Universitätsplatz 3
8010 Graz
Austria

**Operating unit:**

Institut für Digitale Geisteswissenschaften (Department of Digital Humanities), University of Graz

**Service contact (functional address):**

DHInfra Operations – DHInfra.at
E‑mail: [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at)

This functional address is monitored by the DHInfra operations team and is the contact point for
users, identity providers, and federation operators.

**Contact person / data steward for this service:**

Elisabeth Steiner, Data Steward, DHInfra.at / University of Graz (reachable via the functional
address: [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at))

The University of Graz is the **sole data controller** for DHInfra.at. DHInfra.at intends to include
further operational sites, whose authorised staff would then process personal data as part of service
operation under the governance and responsibility of the University of Graz as controller. **These
arrangements are not yet in effect**, and this notice will be updated accordingly before they are.

## 3. Data Protection Officer

Data Protection Officer of the University of Graz: **Nadine Probst**.

Further contact details and information are available at
[datenschutz.uni-graz.at](https://datenschutz.uni-graz.at).

## 4. Personal Data Received from Your Home Organisation (via SAML/OIDC)

DHInfra.at requests only attributes needed for authentication, account linking, communication,
assurance, and service operation. The service's SAML/OIDC metadata (`RequestedAttribute` elements)
matches this list. Depending on your home organisation's configuration, the following attributes may
be released.

### 4.1. Identifiers

DHInfra.at maintains an internal, immutable account identifier (UUID) for each user in its identity
system (Authentik). Federated identifiers are **linked** to this internal account and are **not** used
as the primary key. From your home organisation, DHInfra.at requests one stable identifier, in the
following order of preference — subject‑id → pairwise‑id → persistent NameID → eduPersonPrincipalName:

- **SAML subject‑id** (`urn:oasis:names:tc:SAML:attribute:subject-id`) or **pairwise‑id**
  (`urn:oasis:names:tc:SAML:attribute:pairwise-id`) — preferred; the standard general‑purpose or
  SP‑specific subject identifiers.
- **Persistent SAML NameID** (`urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`) — fallback where
  subject‑id/pairwise‑id are not released.
- **eduPersonPrincipalName (ePPN)** (`urn:oid:1.3.6.1.4.1.5923.1.1.1.6`) — a scoped identifier of the
  form `user@organisation.example`; used only where none of the above are available, and stored as a
  linked login identifier to the internal UUID to handle possible reassignment.

DHInfra.at does **not** use eduPersonTargetedID; this attribute is obsolete in modern SAML 2.0
deployments and is not requested.

### 4.2. Contact and Name

- **mail** (`urn:oid:0.9.2342.19200300.100.1.3`) — service notifications, support responses, and
  project‑related communication.
- **displayName** (`urn:oid:2.16.840.1.113730.3.1.241`) — your name in the web interface, project
  member lists, and support contexts. DHInfra.at uses displayName as the preferred presentation
  attribute and does not rely on `cn` (commonName), as its semantics are inconsistent across
  organisations.
- **givenName** (`urn:oid:2.5.4.42`) and **sn** (`urn:oid:2.5.4.4`) — optional; used where needed for
  support, project collaboration, or audit purposes and not already sufficiently covered by
  displayName.

### 4.3. Organisational Information

- **schacHomeOrganization** (`urn:oid:1.3.6.1.4.1.25178.1.2.9`) — home organisation domain (e.g.
  `uni-graz.at`, `donau-uni.ac.at`); used to identify your institution and for high‑level reporting on
  institutions supported.
- **eduPersonScopedAffiliation** (`urn:oid:1.3.6.1.4.1.5923.1.1.1.9`) — scoped affiliation values such
  as `student@edu.uni-graz.at` or `faculty@donau-uni.ac.at`; used to understand your role at your
  institution for eligibility and reporting. DHInfra.at always uses the scoped form; unscoped
  `eduPersonAffiliation` is not requested (where only the role part is needed, it is derived
  internally from the scoped value).

### 4.4. Assurance

- **eduPersonAssurance** (`urn:oid:1.3.6.1.4.1.5923.1.1.1.11`) — information about the assurance level
  of your identity and authentication, in line with the REFEDS Assurance Framework, where provided;
  used for security‑relevant decisions.

DHInfra.at does **not** request `eduPersonEntitlement` or other authorisation attributes from home
organisations. Authorisation to projects and resources is managed internally by DHInfra.at, based on
project and group membership (see Section 5).

DHInfra.at does not request attributes that are not relevant to service access, authorisation,
support, security, or reporting. The attributes listed above are required for user support, project
collaboration, accounting, and communication with users; DHInfra.at does not use them for other
purposes such as marketing or unrelated profiling.

## 5. Personal Data Generated or Provided During Use of the Service

In addition to attributes received from your home organisation, DHInfra.at may process:

- Service‑internal account identifier (UUID; Authentik account ID, used as the primary key for user
  records, with all federated identifiers stored as linked login identifiers)
- Project and group memberships (DHInfra‑specific project IDs, group names, membership lists, roles
  such as project lead or member)
- Project applications and related data (e.g. project names, descriptions, participating institutions,
  project leads, member lists)
- API key metadata (public key identifier, creation time, expiry time, revocation time, last‑use time;
  API key secrets are not stored in plain text)
- Authentication and access logs (timestamps, source IP addresses, user agent data, login events,
  failed logins, access decisions)
- SLURM job and resource usage records (user, project, timestamps, resource allocation, runtime,
  GPU/CPU/memory use, job status)
- Storage and quota metadata needed for operations (e.g. ownership, quotas, file‑system metadata
  relevant to support and incident handling)
- LLM API usage metadata (user, project, model, timestamps, token counts, status, accounting and quota
  information)
- Support requests, operational notes, incident records, and administrative actions
- Aggregated or anonymised reporting information about projects served, institutions supported, and
  resource use

**Content of LLM/API requests:** Normal LLM API request logs do not store prompts, uploaded content,
or generated content. Requests and responses may be held transiently in runtime memory or operational
caches while the service processes them. If content must exceptionally be inspected or retained for
debugging, abuse investigation, or incident response, this is minimised, access‑restricted,
documented, and deleted as soon as it is no longer needed.

## 6. Purposes of Processing

Personal data is processed for the following purposes:

- To authenticate users via institutional or federated login
- To link and maintain accounts across login sessions and, where applicable, across different identity
  providers
- To authorise access to project resources based on DHInfra‑internal project/group membership
- To provision and deprovision accounts, groups, API keys, storage, and compute access
- To operate GPU, storage, LLM API, notebook, and support services
- To enforce quotas, budgets, fair‑use limits, and security controls
- To detect, investigate, and respond to abuse, malfunction, and security incidents
- To communicate with users and project leads regarding service use, incidents, and relevant updates
- To produce internal governance, funding, and infrastructure reports (in aggregated and minimised
  form where possible)
- To fulfil legal, institutional, accounting, audit, and compliance obligations

Personal data is not used for profiling unrelated to service provision, and is not used for marketing.

## 7. Legal Basis

Processing of personal data by DHInfra.at is based on the following legal grounds under the GDPR, as
applicable to the specific context:

- **Art. 6(1)(e) GDPR – Task carried out in the public interest:** for the provision and operation of
  university research infrastructure and academic services by the University of Graz.
- **Art. 6(1)(f) GDPR – Legitimate interests of the controller or a third party:** for operational
  security, abuse prevention, incident response, logging, service improvement, and resource
  management.
- **Art. 6(1)(b) GDPR – Performance of a contract or pre‑contractual measures:** where access is
  provided under accepted service terms or a specific project/service arrangement with users or their
  institutions.
- **Art. 6(1)(c) GDPR – Compliance with a legal obligation:** where records must be kept for
  accounting, audit, or statutory compliance.

Where consent is used for optional attributes or optional processing, you may withdraw that consent at
any time. Withdrawing consent does not affect processing that is necessary for providing the core
service based on the legal grounds above.

## 8. Recipients and Third Parties

Personal data may be accessible to the following categories of recipients:

- DHInfra.at operations, service desk, and system administrators
- Authorised staff at further DHInfra.at operational sites, where required for service operation.
  **These arrangements are not yet in effect** (see Section 2)
- Your home organisation or identity provider, as part of authentication and attribute release
- ACOnet/eduID infrastructure and, if enabled, eduGAIN federation infrastructure, for federated
  identity operations (e.g. metadata distribution, discovery services)
- University of Graz IT services, security/CSIRT, legal, data protection, or audit functions where
  required
- Technical service providers (e.g. hosting, monitoring, backup, or related services) engaged to
  operate the infrastructure, under appropriate contracts and data‑processing agreements where
  required
- DHInfra.at intends to engage additional partner organisations as data processors acting on behalf of
  the University of Graz (as controller) for specific aspects of service operation. **These
  arrangements are not yet in effect.** Once such processors are engaged, they will process personal
  data only under documented instructions and appropriate data‑processing agreements as per Art. 28
  GDPR, and this notice will be updated accordingly to reflect the relevant processors and processing
  activities.

DHInfra.at does not sell personal data. Personal data is not made publicly available, except where:

- you or your project have separately and explicitly chosen to publish certain information, or
- minimal information is included in public project reporting that has been approved and appropriately
  minimised (e.g. a project title and participating institutions).

## 9. International Transfers

Core DHInfra.at infrastructure is intended to be operated in Austria or within the European Economic
Area (EEA). Federated authentication involves your home organisation and federation metadata services;
these typically operate within the EEA or countries deemed to have adequate data‑protection
safeguards.

If transfers of personal data outside the EEA become necessary (for example, through specific
technical service providers or eduGAIN participation), DHInfra.at will ensure appropriate safeguards
(such as adequacy decisions or standard contractual clauses) and will update this notice where
required.

## 10. Retention Periods

Personal data is retained only as long as necessary for the purposes described above and in line with
legal and institutional requirements. The current retention practice is:

- **Federation/account data:** for the duration of your service eligibility (e.g. active project
  membership, institutional affiliation), then deleted or deactivated within about 30 days, unless
  retention is required for audit, security, or reporting.
- **Access and authentication logs:** typically retained for 90 days for security, troubleshooting,
  and abuse detection. Longer retention is possible only for active incidents, legal obligations, or
  documented institutional requirements.
- **Security incident records:** retained for up to 3 years after incident closure, or longer if
  required by law or institutional policy.
- **SLURM, API key metadata, storage, quota, and LLM API usage records:** retained for up to 3 years
  for operations, accounting, capacity planning, and internal reporting.
- **Project records** needed for funding, public accountability, institutional reporting, or
  accounting (e.g. project descriptions, participating institutions, resource usage summaries):
  retained for up to 7 years after project closure, with data minimisation where possible.
- **Support tickets and operational correspondence:** retained for up to 3 years after ticket closure,
  unless needed for an active project, incident, or legal obligation.
- **Temporary content inspected for debugging or incident response:** deleted as soon as no longer
  needed, normally within 30 days.
- **Aggregated or anonymised statistics:** may be kept indefinitely, provided they do not allow
  re‑identification of individuals.

Retention periods may be adjusted to reflect updated legal requirements, institutional policies, or
operational needs. Changes will be reflected in an updated version of this notice.

## 11. Your Rights

Under the GDPR and applicable data‑protection law, you have the following rights in relation to your
personal data:

- Right of access (obtain confirmation and a copy of your personal data processed)
- Right to rectification (correct inaccurate or incomplete data)
- Right to erasure ("right to be forgotten"), where applicable
- Right to restriction of processing, where applicable
- Right to object to processing, where applicable (especially where processing is based on legitimate
  interests or public interest)
- Right to data portability, where applicable

To exercise these rights in relation to DHInfra.at, contact the service at
[dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at).

Requests concerning the accuracy or release of attributes provided by your home organisation (e.g.
your affiliation, e‑mail address, or name) should be addressed directly to your home organisation or
identity provider, as DHInfra.at usually cannot change those attributes at the source.

You may also contact the Data Protection Officer of the University of Graz (see Section 3) for issues
relating to the processing of personal data at the University.

## 12. Right to Lodge a Complaint

If you believe that your personal data has been processed in breach of data‑protection law, you have
the right to lodge a complaint with a supervisory authority.

For DHInfra.at, the competent supervisory authority is:

Österreichische Datenschutzbehörde
Barichgasse 40‑42
1030 Wien
Austria
Website: [dsb.gv.at](https://www.dsb.gv.at/)

You may also contact the supervisory authority in your country of residence or work.

## 13. Identity Provider Discovery (SeamlessAccess)

For selecting your home institution at login, DHInfra.at uses the **SeamlessAccess** discovery service.
The discovery component helps you select your home institution and may store your selected institution
in your browser (local storage) and load resources from `seamlessaccess.org`.

## 14. Changes to this Privacy Notice

DHInfra.at may update this privacy notice when:

- services, components, or infrastructure change,
- federated identity or attribute requirements change,
- operational processes (e.g. logging or retention) change, or
- legal or institutional requirements change.

The current version of this notice is published at a stable HTTPS URL
(`https://www.dhinfra.at/federation-privacy-notice/`) linked from the DHInfra.at service website and
referenced from the SAML/OIDC service metadata used in ACOnet/eduID (and, if applicable, eduGAIN) via
`mdui:PrivacyStatementURL`. Substantial changes will be communicated through appropriate channels
(e.g. service website, project contacts, or institutional announcements) where feasible.
