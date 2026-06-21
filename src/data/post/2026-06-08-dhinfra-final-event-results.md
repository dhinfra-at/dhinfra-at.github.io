---
publishDate: 2026-06-08T12:00:00Z
title: "Three and a half years of DHInfra.at: results, and the handover to regular operations"
excerpt: On 8 June 2026 DHInfra.at presented the results of three and a half years of building shared DH infrastructure across Austria. As the project closes at the end of June, a CLARIAH-AT follow-up takes over the rollout into live operations.
image: ~/assets/images/dhinfra-og.png
category: News
tags:
  - report
  - infrastructure
  - GPU
  - digitization
  - open source
  - governance
  - CLARIAH-AT
author: DHInfra.at
---

Today, at our closing event, we presented the results of three and a half years of work. This post is a written summary of what we showed — a snapshot as DHInfra.at reaches the end of its funding this month and the work moves from a project into regular operations.

## DHInfra.at by the numbers

DHInfra.at ran from **2023 to 2026** as an **infrastructure project — not a research project** — under the funding programme _"(Digital) Research Infrastructures"_, supported by the BMFWF and the ERC Recovery and Resilience Facility (NextGenerationEU). In that time it brought together:

- **9 institutions** across Austria, coordinated by the University of Graz
- **4 working groups** and **8 work packages**, against **28 milestones**
- **50+ members** and **100+ associates**

The goal was to close gaps that individual institutions could not close alone: standard digitization in libraries, archives and museums; generic repositories and databases; and access to high-performance computing _outside_ the natural, technical and life sciences. DHInfra.at addressed this in four areas.

## What was built

### 1. Advanced digitization and data capture

Two portable **multispectral imaging (MSI) systems** — XpeCAM and MISHA — were acquired and are made available to partner projects through a loan-and-training model, backed by GPU hardware for processing (see the [digitization resources](/digitization)). They have already recovered text from heavily damaged material, including the [medieval charters of Cetinje, Montenegro](/2026-05-13-misha-cetinje-charters). On the high-throughput end, a [**robotic scanning line**](/2025-09-29-robotic-scanning-presentation) reached production use, capturing **400,000+ historical registration slips at an error rate below 1%**.

### 2. Databases, repositories, IaaS and SaaS

The University of Salzburg's **Database Research Cluster** (Proxmox + Ceph) now provides DH projects with virtual machines, database backends, and reproducible development and test environments via an integrated toolchain (Ansible provisioning, CI/Git runners) — see [servers, services and storage](/saas). Test cases ranged from the long-running [**MHDBDB**](/2024-11-07-mhdbdb-use-case) medieval-German database to the **Pangloss** prosopographical prototype, validating the cluster for real DH workloads under load.

### 3. Domain-affine machine learning and compute

[**GPU clusters in Graz and Krems**](/gpu-cluster) were procured, installed and brought online — state-of-the-art NVIDIA nodes (H200, RTX Pro 6000, L40S) on an InfiniBand interconnect, reachable across the academic network; the [Graz cluster install](/2025-08-28-graz-gpu-cluster-install) is documented in its own post. Beyond classic HPC elements (single sign-on, SLURM batch scheduling, interactive JupyterHub), the distinguishing feature is a cloud layer: containerization plus **hosted, OpenAI-compatible LLM and embedding APIs** backed by large open-weight models — so projects can call AI services without their data leaving the academic network.

The use cases are concrete: LLM-based [information extraction from medieval accounts](/2026-02-20-aldersbach-account-books) and from the _Managing Maximilian_ corpus, [LLM fine-tuning and inference](/2025-11-24-oeaw-llm-training-use-case) for historical research, OCR and segmentation for newspapers (the ÖNB's [ANNO corpus](https://anno.onb.ac.at/)) and [historical job ads](https://historical-job-ads.uni-graz.at/en/about-the-project/), cadastral-map segmentation, the _Unlocking the Schematismus_ pipeline, and experimental from-scratch model training such as the _HabsburgLLM_ teaser.

### 4. Free and open-source software

Three DH tools received sustained investment — clearer documentation, easier setup, and active development (overview on the [open-source software](/software) page):

- [**Pletka**](https://beta.pletka.io/) — collaborative ontology editing with a unified format and export to RDFS, SHACL and more
- [**QLever**](https://docs.qlever.dev/) — a high-performance SPARQL engine, with a complete documentation rewrite, unified use-case Qleverfiles, and official packages for Debian/Ubuntu/macOS
- [**liiive.now**](https://liiive.now) — real-time collaborative IIIF annotation, self-hostable and MIT-licensed

## Where things stand now

Right now, **almost all of the planned infrastructure building blocks are already heavily in use.** The GPU cluster and the LLM/embedding APIs are on the verge of rollout to CLARIAH-AT partners, and the governance core — operating concepts, a sustainable business model, and a helpdesk approach — is in place. The dhinfra.at site itself is being relaunched as the internal test phase ends.

## What comes next

The DHInfra.at project closes at the **end of June 2026**. From July, a CLARIAH-AT–funded follow-up — **DHInfra-Gov** — takes the work from "project" to "regular operations," focused on governance, rollout and **live deployment** of the infrastructure to partners. Further milestones on the horizon include a clariah.at relaunch later in 2026, national sustainability via CLARIAH-AT and dedicated service desks, and an international route via HORIZON.

There is no public platform link to share just yet — **stay tuned.** In the meantime, questions are welcome at [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at).

_With thanks to the IT services of all partner institutions, the wider ASHPC and DHd communities, and the BMFWF and ERC-RRF for making the project possible._
