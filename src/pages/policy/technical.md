---
title: 'Technical Policy Appendix'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 31 August 2026 · _Version_: 0.3

**Applies to:** the DHinfra.at cluster and its platform services at `dhinfra.uni-graz.at` --
GPU compute, LLM APIs, storage, notebooks, and the console. It does not cover the public
website at `dhinfra.at`, which has its own [privacy notice](/privacy-notice).

This appendix maps the claims made in the **DHinfra.at Governance Concept** and the
**DHinfra.at Service and Acceptable Use Policy** onto the platform that implements them. It
exists so that a policy statement can be traced to a mechanism, and so that a change to the
platform shows up as a change to policy where one is needed.

Related documents:

-   **Governance Concept** (v0.8) -- who decides what. Not public.
-   **[Service and Acceptable Use Policy](/policy/service)** (v0.3) -- the rules this appendix maps.
-   **[Privacy Notice for Federated Login](/federation-privacy-notice)** (v0.3.1) --
    personal data and retention periods.

**This version refers to:** Governance Concept v0.8 · Service and Acceptable Use Policy
v0.3 · Technical Policy Appendix v0.3 · Privacy Notice for Federated Login v0.3.1. When one
of these is revised, check the others before treating a cross-reference as current.

It is not a user manual and not a developer specification. Operating detail that changes
from week to week -- exact limits, tiers, model lists, interface layout -- lives in the
platform documentation on the cluster. This appendix names the mechanism and its policy
consequence. Current parameter values belong in the platform documentation.

## 1. Identity and Login

Policy claim: users authenticate through institutional or federated identity; login alone
does not grant compute access.

Implementation:

-   Traefik terminates TLS and routes public services.
-   Authentik owns users, groups, login flows, the LDAP outpost, and webhooks.
-   Authentication is through institutional SSO and the ACOnet/eduID federation. Social
    login is not offered.
-   First login creates an identity record but no POSIX access, SLURM association, storage,
    or API key.

Policy implication:

-   ACOnet/eduID proves identity and home-organisation attributes.
-   DHinfra project membership proves authorization.
-   Users without active project membership remain limited to the portal and documentation.

## 2. Project and Group Authorization

Policy claim: access is project-scoped and group-based.

Implementation:

-   Authentik is the source of truth for users, groups, and memberships.
-   Project provisioning creates project groups, assigns members, and sets POSIX-related
    attributes through Authentik and system tools.
-   The gateway caches users, groups, and memberships for request-path performance and
    reconciles them against Authentik, issuing or revoking API keys accordingly.
-   Projects are requested through a structured application that records the project type,
    its funding situation, the resources expected, and a responsible project lead. Each
    request carries a reference number and is decided by an approver.

Policy implication:

-   Adding or removing a user from a project is the central authorization action.
-   Project leads manage membership only through the approved workflow.
-   Manual database edits are not a normal authorization path.
-   The number of undecided requests one person may hold at once is limited, so the review
    queue reflects real intent.

## 3. API Keys and LLM Access

Policy claim: LLM API access is project-scoped, budgeted, and revocable.

Implementation:

-   A member may hold several API keys for a project, each labelled, and each rotated or
    revoked on its own.
-   Key secrets are shown once and stored as a salted hash. The plaintext is never
    retrievable afterwards.
-   Rate limits are set per key. New keys start at a standard tier; a higher tier is
    requested per key and granted by an administrator, who may grant a different tier than
    the one requested.
-   Project leads can revoke all of a member's keys for their project. Members create
    replacements themselves.
-   The gateway checks key validity, group budget, model visibility, model access lists,
    and per-model concurrency before forwarding a request.
-   Private model names are not disclosed to unauthorized users.
-   Where a model supports prompt caching, the cached share of a prompt is accounted at a
    reduced rate, and the accounting is visible to the user.

Policy implication:

-   API keys are credentials and must not be shared, and a key identifies a person within a
    project rather than the project as a whole.
-   Removing project membership revokes that person's keys for the project.
-   Budget exhaustion or a policy suspension can stop API use without removing the user's
    identity.
-   Rate-limit tiers are an operational control that can be adjusted per key. They are not
    an entitlement.

## 4. Compute Scheduling

Policy claim: GPU compute is shared, fair-use, and schedulable.

Implementation:

-   SLURM is the resource authority for batch jobs and model-serving jobs.
-   Jobs run under project accounts and associations.
-   LLM model engines are launched as SLURM allocations.
-   Interactive work runs through JupyterHub, which places a session on the cluster through
    the same scheduler.
-   **Advance reservations are not implemented.** Work that has to happen at a particular
    time is arranged by agreement with the Operations Team, through the console and by
    mail. End-to-end reservations and maintenance windows are on the roadmap.

Policy implication:

-   Queueing, walltime, priority, and preemption are operational controls. Each one can be
    changed to keep the cluster usable for everyone.
-   GPU availability depends on SLURM state, maintenance, and competing workloads.
-   Until reservations exist, a course or workshop needing guaranteed capacity has to be
    planned with the Operations Team in advance, and what results is an agreement between
    people rather than a limit the scheduler enforces.

## 5. Storage

Policy claim: storage is project-scoped, quota-managed, and not a blanket backup guarantee.

Implementation:

-   Project and home datasets are managed through ZFS and exposed through NFS or
    site-specific mounts.
-   Quotas are set during project provisioning and adjusted through an approved
    quota-change workflow.
-   Suspension may set project storage read-only.
-   Archival keeps project storage read-only until retention expiry; purge deletes datasets
    after the retention period.

Policy implication:

-   Users remain responsible for research-data backup unless a written arrangement says
    otherwise.
-   Storage contributed by Krems or another site follows the same project and quota
    principles, so a user requests capacity rather than a site. The Krems integration is in
    progress: that capacity is not yet available to projects, and until the technical and
    data-protection arrangements are concluded no site-specific storage guarantee is stated
    or implied. Further detail will follow.

## 6. Project Lifecycle

Policy claim: a project is the unit of allocation, and it has a beginning and an end.

Implementation:

-   A project may carry an end date, set when it is requested.
-   A project past its end date is archived automatically. Its lead is warned in advance and
    can request a new end date, which an administrator approves.
-   Archival is reversible for a defined recovery window before purge applies.

Policy implication:

-   Allocation is not open-ended. A project that is no longer active releases its resources
    without an administrator having to notice.
-   The end date is a planning instrument. Extending it is a normal request and is expected
    to happen often.

## 7. Logs, Usage, and Reporting

Policy claim: DHinfra processes operational data for access control, security, accounting,
reporting, and support.

Implementation:

-   Authentik records identity and login-related events.
-   The gateway records API key metadata, usage windows, request metadata, token
    accounting, model, user, project, and status.
-   SLURM records job accounting and resource usage.
-   Operations records track project approval, quota changes, suspension, archival, and
    deprovisioning.
-   Monitoring compares gateway, model-serving, SLURM, storage, and service health.
-   Administrative actions are recorded with the account that performed them, so approvals,
    quota overrides, suspensions and revocations can be reconstructed after the fact.

Policy implication:

-   Usage reports can be produced per project, institution, service, and time window.
-   Public reports aggregate or minimise personal data.
-   Prompt and generated content are not retained in normal request logs. Content may be
    inspected during a security or performance incident that cannot be resolved otherwise;
    such access is time-limited, restricted to the people handling the incident, recorded,
    and deleted as soon as it is no longer needed. Retention periods for everything that is
    retained are published in the privacy notice.

## 8. Quotas and Budgets

Policy claim: base access is fair-use; additional capacity can be reviewed, limited,
scheduled, or charged.

Implementation:

-   Gateway budgets are attached to groups rather than individual users.
-   Token budgets can scale with member count and can be overridden by administrators.
-   SLURM accounts and associations enforce compute-side limits; ZFS quotas enforce
    storage-side limits.
-   Budget and quota changes are auditable administrative actions.

Policy implication:

-   Project size affects default capacity but does not create an unlimited entitlement.
-   Overrides carry a recorded reason, for reporting and governance review.
-   Membership churn does not retroactively rewrite a current budget window.

## 9. Security Boundary

Policy claim: DHinfra is a trusted multi-tenant academic environment. It does not implement
zero-trust or confidential computing.

Implementation:

-   Public routes are TLS-terminated and authenticated through Traefik, Authentik, and
    gateway checks.
-   Internal services such as the databases, caches, and model-serving APIs are not public.
-   Model-management interfaces are internal or admin-gated.
-   Administrative and self-service interfaces are not reachable from the open internet.
    Access runs over a WireGuard-based private network, with out-of-band hardware access
    through BMC/IPMI on a separate management path.
-   The head node is the single externally reachable SSH entry point and requires a second
    factor in addition to the SSH key. Worker nodes are internal only and additionally gate
    on having a running job.
-   Administrative accounts are separate from user accounts, and administrative actions are
    recorded against the account that performed them.
-   POSIX permissions, SSSD, SLURM accounts, project groups, API key scoping, and model
    access lists provide normal isolation.

Policy implication:

-   The service is appropriate for ordinary academic workloads and most DH research
    workflows.
-   Sensitive or regulated workloads require prior review.
-   DHinfra does not promise protection against all side channels, GPU-memory attacks,
    malicious user code, or upstream vulnerabilities.
-   Compromise of a user account does not yield administrative reach, and administrative
    access to data during an incident is attributable after the fact.

## 10. Suspension, Archival, and Deprovisioning

Policy claim: access can be suspended or revoked without deleting identity immediately.

Implementation:

-   Project suspension pauses the SLURM account, disables project API keys, and can make
    storage read-only while preserving memberships for reinstatement.
-   Project archival disables SLURM access, revokes API keys, removes members from project
    groups, and keeps storage read-only until retention expiry.
-   Project purge deletes storage datasets, removes SLURM accounts, and deletes project
    groups after the retention period.
-   User deprovisioning removes cluster access when the user has no active projects, while
    retaining identifiers needed to avoid UID/GID reuse conflicts.

Policy implication:

-   Suspension is reversible; archival and purge are lifecycle states.
-   Retention periods are published in the privacy notice.
-   Abuse blacklisting is recorded in the audit trail and prevents UID/GID reuse where
    relevant.
