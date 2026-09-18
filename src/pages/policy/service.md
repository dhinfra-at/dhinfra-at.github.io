---
title: 'Service and Acceptable Use Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 18 September 2026 · _Version_: 0.4.1

**Applies to:** the DHinfra.at cluster and its platform services at `dhinfra.uni-graz.at` —
GPU compute, LLM APIs, storage, notebooks, and the console. It does not cover the public
website at `dhinfra.at`, which has its own [privacy notice](/privacy-notice).

This policy states what users of the cluster may do, what they must not do, and what they
can and cannot expect from the service. It is the document a user accepts when requesting a
project, and it applies from that point on: by logging in, requesting access, receiving
project membership, using API keys, submitting jobs, or storing data, users accept this
policy and the privacy notice.

It is not a contract for a particular level of service, and it is not a technical manual.
How the cluster is governed and who decides what is in the **Governance Concept**. How the
platform implements these rules is in the **Technical Policy Appendix**. Operating detail
that changes often lives in the documentation on the cluster itself.

Related documents, in the versions this document was written against:

-   **Governance Concept** (v0.9.1) -- who decides what, and how the sites divide
    responsibility. Not public.
-   **[Technical Policy Appendix](/policy/technical)** (v0.4.1) -- how the platform
    implements the rules below.
-   **[Privacy Notice for Federated Login](/federation-privacy-notice)** (v0.3.1) -- what
    personal data is processed, on what basis, and for how long.

## 1. Service Scope

DHinfra.at provides shared infrastructure for digital humanities research and teaching,
including:

-   GPU compute through SLURM-managed resources.
-   LLM API access through DHinfra gateway services.
-   Project and user storage where offered by participating sites.
-   Jupyter, notebook, container, model-serving, or related research workflows where
    enabled.
-   Documentation and operational support from the Operations Team.

Availability of individual services, models, GPUs, storage paths, and interfaces may change
as the platform develops.

## 2. Eligible Users and Projects

DHinfra.at is primarily for academic and educational use. Users normally authenticate
through an institutional account, ACOnet/eduID federation, or another approved academic
identity source.

Eligible use includes digital humanities research, teaching, infrastructure work, and
related scholarly activity. A project normally qualifies when it supports at least one of
the following:

-   Humanities, cultural heritage, arts, or adjacent social-science research or teaching.
-   Processing, modelling, analysis, annotation, enrichment, preservation, or publication of
    scholarly data.
-   Development or evaluation of computational methods, datasets, models, or workflows for
    academic use.
-   Courses, theses, grants, public-interest research, or institutional research
    infrastructure.

Commercial, industry, or non-academic users may only use DHinfra.at when they act within an
academic collaboration and an academic institution remains responsible for the project.

## 3. Requesting Access

Every allocation is a **project**, and every project has a lead who is responsible for it.
The request is made by that person.

-   **Researchers and staff** request a project themselves and become its lead.
-   **Bachelor's, master's and doctoral students** should ask their supervisor to log in,
    create the project and invite them as a member. The supervisor vouches for the work and
    acts as the academic reviewer of the request, which is why the request comes from them
    rather than from the student.
-   **Teaching with a larger group of students** needs a project and a conversation. Log in,
    create the project, and contact the Operations Team so that capacity can be planned.
    There is no advance reservation yet, so a course that needs capacity at a fixed time is
    arranged by agreement rather than booked. Reservations are on the roadmap.

A project request records what the project is and what it needs: a description, the project
type and its funding situation, the grant or funding reference where there is one, the
services and hardware it expects to use, the number of members and the storage it expects,
and the compute it expects, as compute tokens over the project's duration and how that use
is spread over time. A request that names no compute volume receives the base allocation.
A supporting document can be attached. Do not include credentials, and do not
include personal data beyond what the request needs. Requests are reviewed on this basis, so a
description that does not let a reviewer judge the work will be sent back.

Submitting a request also means accepting this policy, including the expectation that the
infrastructure is credited in what the project produces (see 14).

Each request receives a reference number and is decided by an approver. A person may hold
only a limited number of undecided requests at a time.

A project may carry an end date. A project past its end date is archived, and its lead is
warned before that happens. Asking for a later end date is a normal request and is expected
to happen often.

## 4. Access and Authorization

Authentication identifies the user. Authorization is granted through project or group
membership. Logging in does not by itself grant compute, storage, or API access.

Users may only access resources assigned to their projects. They must not share accounts,
API keys, SSH keys, private-network devices, session cookies, or other credentials. Users
are responsible for activity performed under their credentials.

**Never send a password, an API key, a private SSH key, or a recovery code to anyone,
including the Operations Team, and least of all by mail.** Nobody operating DHinfra.at will
ask for one. Support does not need a credential to help, and a credential sent by mail
should be treated as compromised and rotated. The same applies to personal data: send only
what a request actually needs.

Project leads may request members, quota changes, key rotation, renewals, or suspension
changes according to operational procedures. A project lead may also revoke a member's API
keys for that project.

## 5. Fair Use and Resource Limits

DHinfra.at is a shared infrastructure. Users must not monopolize GPUs, storage, network, API
capacity, model-serving capacity, or staff time in ways that materially harm other users.

Base access is best-effort and governed by fair use. Requests beyond the base allocation
require review and may be approved, limited, scheduled, charged, or rejected. Larger
reservations need advance planning and operational approval.

A single project is expected to stay within a share of the cluster that leaves it usable
for the other partners. The current share, and the arrangement for short larger bursts, are
stated in the platform documentation. Sustained use above that share is agreed in advance,
bounded in time, reviewed, and may be limited or charged. Work whose scale exceeds what the
cluster can carry is referred to national and European HPC providers; DHinfra.at can host a
pilot that produces the measurements such a proposal needs.

DHinfra.at may apply:

-   SLURM limits, quality of service, queue policies, and job time limits.
-   Storage quotas, read-only states, archival states, and deletion after retention.
-   API budgets, model access controls, key expiry, rate limits, and concurrency limits.
-   Manual intervention for runaway, idle, abusive, or technically harmful workloads.

Idle, abusive, or excessive use may be throttled, stopped, or suspended.

Work that has to happen at a particular time cannot be booked in advance at present. Batch
jobs are scheduled by SLURM, and interactive work runs through JupyterHub. Where timing
matters, contact the Operations Team through the console or by mail so that it can be
planned.

## 6. API Keys and LLM Use

LLM API access is project-scoped and controlled through API keys, group budgets, per-model
access control lists, model visibility, and concurrency limits.

A member may hold more than one API key for a project, each with its own label, so that
separate uses can be rotated or revoked independently. A key secret is shown once and cannot
be retrieved afterwards.

Rate limits are set per key. A new key starts at the standard tier. A higher tier is
requested for a specific key and granted by an administrator, who may grant a different tier
than the one requested. A tier is an operational setting rather than an entitlement, and it
can be changed.

Users must not use the API to bypass resource allocation, overload models, evade accounting,
or process data that is incompatible with this policy. Users are responsible for reviewing
model outputs before scholarly, public, administrative, or operational reliance.

Unless explicitly stated otherwise, DHinfra.at does not guarantee the availability,
accuracy, reproducibility, safety, or suitability of any model output.

## 7. Prohibited Use

Users must not:

-   Use the service for illegal activity under Austrian, EU, or applicable institutional
    law.
-   Attempt to access, infer, disrupt, modify, or exfiltrate other users' data, jobs,
    credentials, memory, containers, storage, or API traffic.
-   Circumvent authentication, authorization, accounting, quotas, rate limits, monitoring, or
    security measures.
-   Run cryptocurrency mining or unrelated resource-intensive workloads.
-   Deliberately deploy malware, exploit code, credential harvesting, spam,
    denial-of-service activity, or unauthorized scanning.
-   Process data whose legal, contractual, ethical, or security requirements are
    incompatible with DHinfra.at's baseline without prior approval.
-   Upload, generate, or distribute content that the user is not legally permitted to
    process.

## 8. Security and Sensitive Data

DHinfra.at is a trusted multi-tenant academic HPC and LLM environment. It is not a
zero-trust, isolated single-tenant, or confidential-computing environment.

The service provides a standard security baseline: institutional SSO, group-based
authorization, POSIX and SLURM isolation, storage permissions, project-scoped API keys,
monitoring, logging, and administrative controls. DHinfra.at does not guarantee absolute
protection against malicious workloads, side channels, GPU memory attacks, hardware leakage,
vulnerabilities in user software, or vulnerabilities in upstream infrastructure.

Users who intend to process sensitive, confidential, personal, legally restricted,
export-controlled, contractually restricted, or otherwise high-risk data must describe those
requirements before using the service. DHinfra.at may reject, suspend, or require a separate
arrangement for such projects.

## 9. Data, Storage, and Backups

Users are responsible for their own research data, code, outputs, and backups unless a
written arrangement says otherwise.

DHinfra.at may provide project storage, home directories, scratch storage, model storage, or
archival storage depending on the site and service. Storage may be quota-managed, made
read-only, archived, or deleted after the applicable retention period.

Users must not store data that exceeds approved project scope, storage quota, legal basis, or
security compatibility.

## 10. AI Act and AI Governance

DHinfra.at is research infrastructure. It has self-assessed its position under the EU AI
Act and concluded that the services it operates are neither prohibited nor high-risk, and
that they fall within the Act's exclusion for systems put into service for scientific
research and development. Staff involved in operating or approving AI-enabled services
maintain a working level of AI literacy regardless.

That assessment covers the infrastructure. It does not extend to what users build on it, and
it is not a certification: none exists for a system that is not high-risk.

DHinfra.at provides academic infrastructure and, where enabled, access to hosted AI models
and APIs. It does not by default certify that a user's project, model, dataset, downstream
application, or publication workflow complies with the EU AI Act or other AI governance
rules.

Users remain responsible for assessing whether their own use is a prohibited, high-risk,
transparency-relevant, general-purpose, or otherwise regulated AI use. Projects involving
biometric identification or categorisation, emotion recognition, social scoring, predictive
policing, access to essential services, employment, education assessment, law enforcement,
migration, justice, democratic processes, safety components, medical use, or other
potentially high-risk contexts must be disclosed before use and may require separate review
or rejection.

For systems that interact directly with people or generate synthetic text, image, audio, or
video content, users are responsible for appropriate disclosure, labelling, review, and
downstream documentation where required. DHinfra.at may require projects to document
intended purpose, model provenance, user-facing transparency measures, and risk controls
before granting or continuing access.

Where a project publishes synthetic text, image, audio or video, marking and disclosure are
the responsibility of whoever publishes it. DHinfra.at does not mark model output: for text
served through an API there is no robust or interoperable method at the current state of the
art, which is the condition the Act itself attaches to that obligation. The position is
revisited when a workable method exists.

## 11. Service Level and Warranty

Standard access is provided on a best-effort basis. DHinfra.at does not guarantee:

-   Continuous availability.
-   Particular queue times or response times.
-   Specific GPU, model, storage, or API availability.
-   Persistence of scratch data.
-   Suitability for sensitive or regulated workloads.
-   Error-free operation or uninterrupted support.

Individual service level agreements are not used for ordinary DH academic use. Separate
agreements may be required for paid priority access, unusual data protection requirements,
courses or workshops with reservations, contractual projects, or infrastructure
partnerships.

## 12. Monitoring, Logs, and Reporting

DHinfra.at may monitor and log authentication, access, job execution, storage use, API use,
quota use, security events, support requests, and administrative actions for service
operation, security, accounting, reporting, and compliance.

The cluster is auditable by design. Identity events, job accounting, API accounting, storage
and quota state, and administrative actions are each recorded, so who used what, when, and
under which project can be reconstructed, and so can approvals, quota overrides, suspensions
and revocations. This is what allows fair use to be enforced, incidents to be investigated,
and usage to be reported to funders.

Usage and project information may be summarized for internal governance, funding reports,
infrastructure planning, and public impact reporting. Public reporting avoids unnecessary
personal data.

Personal data processing, including how long each kind of record is kept, is described in
the [Privacy Notice for Federated Login](/federation-privacy-notice).

## 13. Suspension and Revocation

DHinfra.at may suspend or revoke access when:

-   A user or project violates this policy.
-   A project ends, expires, loses eligibility, or exceeds approved scope.
-   Credentials are compromised or suspected to be compromised.
-   A security incident, operational risk, or legal concern requires action.
-   Required project information is incomplete or misleading.
-   The project appears to involve prohibited, undisclosed high-risk, or otherwise
    incompatible AI use.

Possible actions include warning, throttling, job termination, API key rotation, API key
revocation, project suspension, read-only storage, deprovisioning, or permanent exclusion.

Suspension is reversible. Archival and purge are lifecycle states with published retention
periods.

## 14. Acknowledgment

Users should acknowledge the infrastructure in publications, presentations, teaching
material, datasets, software, and other outputs it substantially supported. Whatever
sentence you write, keep one string intact:

> Digital Humanities Infrastructure Austria (DHinfra.at)

The full name together with the abbreviation is what makes the acknowledgment findable,
which is what the acknowledgment is for. Suggested wordings for compute, digitization and
storage, and the wording to use when the infrastructure covered only part of the work, are
on <https://www.dhinfra.at/impact#acknowledgement> and in the console documentation.

Where the GPU systems were used, please also cite:

Atzenhofer-Baumgartner, Florian, David Fleischhacker, Max Resch, Lukas Waldhofer, and
Michael Otto. 2026. "Design and Operation of a Federated GPU Cluster for Digital Humanities
within DHinfra.at." In *Austrian-Slovenian HPC Meeting 2026 (ASHPC26) Booklet*, edited by
Ivan Vialov. Vienna: EuroCC Austria. <https://doi.org/10.25365/phaidra.765>

## 15. Contact and Communication

The Operations Team communicates through mail to **dhinfra@uni-graz.at** and through the
console. Mail is the channel of record. Requests that belong to a project -- membership,
quota changes, key rotation, an end-date extension -- are made through the console, so that
they are recorded against the project.

Announcements are published through the channels appropriate to what is announced: the
status page, the console, the service website, and mail to affected users. Wider news may
also go to the digital humanities mailing lists.

A chat room is also provided for general discussion among users. It is not a support
channel, nothing agreed there is binding, and account or project matters do not belong in
it. Its address, the conditions for joining, and what may be said in it are in the
documentation on the cluster.

Support is read during Austrian office hours on working days and is best-effort. No response
time is guaranteed. Requests indicating a security incident or a compromised credential are
treated ahead of the queue. The documentation and FAQ on the cluster answer most questions,
and users are asked to check them first.

## 16. Changes

DHinfra.at may update this policy. Changes are decided as set out in the Governance Concept,
section 12, including its transitional provision. Material changes are announced through the
channels named in section 15 with an effective date. Continued use after a policy change
means acceptance of the updated policy. From version 1.0 on, earlier versions stay
available.
