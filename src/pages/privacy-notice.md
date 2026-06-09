---
title: 'Privacy Notice — Federated Login (REFEDS CoCo)'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 9 June 2026

This privacy notice describes how **DHInfra.at** (and with this, `dhinfra.uni-graz.at`) processes
personal data when you access the service via federated login (e.g. ACOnet/eduID, eduGAIN). It is
intended to meet the requirements of the **REFEDS Data Protection Code of Conduct** and the REFEDS
Privacy Notice Template.

This notice covers the operational platform and its federated login. For the public, informational
website at `dhinfra.at`, see the separate [Privacy Policy](/privacy).

## 1. Name and Description of the Service

**Name of the service:** DHInfra.at

**Description of the service:** DHInfra.at provides shared GPU, LLM, storage, and support
infrastructure for digital humanities research and teaching. Users authenticate through institutional
or federated identity providers and receive access to approved project resources such as GPU compute,
LLM APIs, storage, notebooks, and related research workflows. Access is typically granted through
project or group membership.

## 2. Data Controller and Contact

**Data controller:**

Universität Graz
Universitätsplatz 3
8010 Graz
Austria

**Service contact (functional address):**

DHInfra Operations – DHInfra.at
E‑mail: [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at)

**Contact person for this service:**

Elisabeth Steiner, Data Steward, DHInfra.at / University of Graz (reachable via the functional
address: [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at))

Participating operational sites (currently including Graz and Krems) may process personal data as part
of service operation under the governance and responsibility of the University of Graz as controller.

## 3. Data Protection Officer

Data Protection Officer of the University of Graz: Mag.iur. Mag.phil. Nadine Probst.

Further contact details and information are available at
[datenschutz.uni-graz.at](https://datenschutz.uni-graz.at/de/ueber-uns/).

## 4. Personal Data Processed

### 4.1. Personal data received from your Home Organisation (via SAML/OIDC)

DHInfra.at requests only attributes needed for authentication, authorisation, communication, and
service operation. Depending on your home organisation's configuration, the following attributes may
be released:

**Required where available:**

- A stable user identifier, preferably a pairwise or persistent identifier (e.g. persistent SAML
  NameID, eduPersonTargetedID, or equivalent)
- E‑mail address
- Display name or common name
- Home organisation identifier
- Affiliation or role at the home organisation (e.g. student, staff, faculty, member)
- Entitlement or group‑related authorisation attributes where required for access decisions

**Optional where available:**

- Given name and surname, if not already covered by display name and needed for user support or
  project collaboration

DHInfra.at does not request attributes that are not relevant to service access, authorisation,
support, or reporting.

### 4.2. Personal data generated or provided during use of the service

In addition to attributes received from your home organisation, DHInfra.at may process:

- Service‑internal account and identifiers (e.g. Authentik or federation account ID)
- Project and group memberships
- Project applications and related data (e.g. project names, descriptions, participating
  institutions, project leads, member lists)
- API key metadata (public key identifier, creation time, expiry time, revocation time, last‑use
  time; API key secrets are not stored in plain text)
- Authentication and access logs (timestamps, source IP addresses, user agent data, login events,
  failed logins, access decisions)
- SLURM job and resource usage records (user, project, timestamps, resource allocation, runtime,
  GPU/CPU/memory use, job status)
- Storage and quota metadata needed for operations (e.g. ownership, quotas, file‑system metadata
  relevant to support and incident handling)
- LLM API usage metadata (user, project, model, timestamps, token counts, status, accounting and
  quota information)
- Support requests, operational notes, incident records, and administrative actions
- Aggregated or anonymised reporting information about projects served, institutions supported, and
  resource use

**Content of LLM/API requests:** Normal LLM API request logs do not store prompts, uploaded content,
or generated content. Requests and responses may be held transiently in runtime memory or operational
caches while the service processes them. If content must exceptionally be inspected or retained for
debugging, abuse investigation, or incident response, this is minimised, access‑restricted,
documented, and deleted as soon as it is no longer needed.

## 5. Purposes of Processing

Personal data is processed for the following purposes:

- To authenticate users via institutional or federated login
- To authorise access to project resources and specific services
- To provision and deprovision accounts, groups, API keys, storage, and compute access
- To operate GPU, storage, LLM API, notebook, and support services
- To enforce quotas, budgets, fair‑use limits, and security controls
- To detect, investigate, and respond to abuse, malfunction, and security incidents
- To communicate with users and project leads regarding service use, incidents, and relevant updates
- To produce internal governance, funding, and infrastructure reports (in aggregated and minimised
  form where possible)
- To fulfil legal, institutional, accounting, audit, and compliance obligations

Personal data is not used for profiling unrelated to service provision, and is not used for marketing.

## 6. Legal Basis

Processing of personal data by DHInfra.at is based on the following legal grounds under the GDPR, as
applicable to the specific context:

- **Art. 6(1)(e) GDPR – Task carried out in the public interest:** For the provision and operation of
  university research infrastructure and academic services by the University of Graz.
- **Art. 6(1)(f) GDPR – Legitimate interests of the controller or a third party:** For operational
  security, abuse prevention, incident response, logging, service improvement, and resource
  management.
- **Art. 6(1)(b) GDPR – Performance of a contract or pre‑contractual measures:** Where access is
  provided under accepted service terms or a specific project/service arrangement with users or their
  institutions.
- **Art. 6(1)(c) GDPR – Compliance with a legal obligation:** Where records must be kept for
  accounting, audit, or statutory compliance.

Where consent is used for optional attributes or optional processing, you may withdraw that consent at
any time. Withdrawing consent does not affect processing that is necessary for providing the core
service based on the legal grounds above.

## 7. Recipients and Third Parties

Personal data may be accessible to the following categories of recipients:

- DHInfra.at operations, service desk, and system administrators
- Authorised staff at participating operational sites (currently including Graz and Krems) where
  required for service operation
- Your home organisation or identity provider, as part of authentication and attribute release
- ACOnet/eduID infrastructure and, if enabled, eduGAIN federation infrastructure, for federated
  identity operations
- University of Graz IT services, security/CSIRT, legal, data protection, or audit functions where
  required
- Technical service providers (e.g. hosting, monitoring, backup, or related services) engaged to
  operate the infrastructure, under appropriate contracts and data‑processing agreements where
  required

DHInfra.at does not sell personal data. Personal data is not made publicly available, except where:

- you or your project have separately and explicitly chosen to publish certain information, or
- minimal information is included in public project reporting that has been approved and appropriately
  minimised.

## 8. International Transfers

Core DHInfra.at infrastructure is intended to be operated in Austria or within the European Economic
Area (EEA). Federated authentication involves your home organisation and federation metadata services;
these typically operate within the EEA or countries deemed to have adequate data‑protection
safeguards.

If transfers of personal data outside the EEA become necessary (for example, through specific
technical service providers), DHInfra.at will ensure appropriate safeguards (such as adequacy
decisions or standard contractual clauses) and will update this notice where required.

## 9. Retention Periods

Personal data is retained only as long as necessary for the purposes described above and in line with
legal and institutional requirements. The current retention practice is:

- **Federation/account data:** For the duration of your service eligibility (e.g. active project
  membership, institutional affiliation), then deleted or deactivated within about 30 days, unless
  retention is required for audit, security, or reporting.
- **Access and authentication logs:** Typically retained for 90 days for security, troubleshooting,
  and abuse detection. Longer retention is possible only for active incidents, legal obligations, or
  documented institutional requirements.
- **Security incident records:** Retained for up to 3 years after incident closure, or longer if
  required by law or institutional policy.
- **SLURM, API key metadata, storage, quota, and LLM API usage records:** Retained for up to 3 years
  for operations, accounting, capacity planning, and internal reporting.
- **Project records needed for funding, public accountability, institutional reporting, or
  accounting** (e.g. project descriptions, participating institutions, resource usage summaries):
  Retained for up to 7 years after project closure, with data minimisation where possible.
- **Support tickets and operational correspondence:** Retained for up to 3 years after ticket closure,
  unless needed for an active project, incident, or legal obligation.
- **Temporary content inspected for debugging or incident response:** Deleted as soon as no longer
  needed, normally within 30 days.
- **Aggregated or anonymised statistics:** May be kept indefinitely, provided they do not allow
  re‑identification of individuals.

Retention periods may be adjusted to reflect updated legal requirements, institutional policies, or
operational needs. Changes will be reflected in an updated version of this notice.

## 10. Your Rights

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

## 11. Right to Lodge a Complaint

If you believe that your personal data has been processed in breach of data‑protection law, you have
the right to lodge a complaint with a supervisory authority.

For DHInfra.at, the competent supervisory authority is:

Österreichische Datenschutzbehörde
Barichgasse 40‑42
1030 Wien
Austria
Website: [dsb.gv.at](https://www.dsb.gv.at/)

You may also contact the supervisory authority in your country of residence or work.

## 12. Changes to this Privacy Notice

DHInfra.at may update this privacy notice when:

- services, components, or infrastructure change,
- federated identity or attribute requirements change,
- operational processes (e.g. logging or retention) change, or
- legal or institutional requirements change.

The current version of this notice is published at a stable HTTPS URL linked from the DHInfra.at
service website and the SAML/OIDC service metadata used in ACOnet/eduID (and, if applicable,
eduGAIN). Substantial changes will be communicated through appropriate channels (e.g. service website,
project contacts, or institutional announcements) where feasible.
