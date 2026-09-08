---
publishDate: 2026-08-31T09:00:00Z
title: "After the summer break: the cluster now accepts all DHinfra.at and CLARIAH-AT partners"
excerpt: The DHinfra.at project ended in June after internal testing phases with partner projects. DHinfra-Gov has taken over, the firewalls are open, and the GPU and LLM cluster in Graz now accepts all members of the DHinfra.at consortium and CLARIAH-AT partner institutions. Further opening starts in October.
image: /images/posts/2026-08-31-cluster-open-for-partners/login-page.jpg
category: News
tags:
  - infrastructure
  - GPU
  - LLM
  - use-cases
  - CLARIAH-AT
author: DHinfra.at
---

Until the DHinfra.at project [ended in June 2026](/2026-06-08-dhinfra-final-event-results), the [GPU and LLM cluster](/gpu-cluster) in Graz ran through internal testing phases with partner projects. Some of that work has appeared here, from [information extraction on medieval account books](/2026-02-20-aldersbach-account-books) and the [DHd2026 workshop](/2026-02-23-dhd-workshop-ocr-postcorrection) to [video retrieval on a H200](/2026-03-16-gpu4u-koeppen-video-retrieval) and [HTR for Latin inscriptions](/2026-06-26-use-case-inscriptions).

After the summer break, DHinfra-Gov has taken over: the CLARIAH-AT follow-up project [*Governance und Verstetigung DH-Infra.at*](https://clariah.at/de/projects/governance-und-verstetigung-dh-infra-at/), which carries the cluster from a project into regular operations.

## Who can log in now

The firewalls are open. The cluster now accepts all members of the DHinfra.at consortium and of CLARIAH-AT partner institutions. Log in at [login.dhinfra.uni-graz.at](https://login.dhinfra.uni-graz.at) with the eduID account of your home institution, apply for a project in the console, and work: JupyterHub notebooks, SLURM batch jobs, shared storage, and a hosted, OpenAI-compatible API for language models, embeddings and reranking. The documentation sits behind the login, so log in first, then read the docs. The [service policy](/policy) is the document a project accepts when it applies, and the cluster status is at [status.dhinfra.uni-graz.at](https://status.dhinfra.uni-graz.at).

If your institution is not part of DHinfra.at or CLARIAH-AT, please be patient. Further opening starts in October. Stay tuned.

## Use cases you can open today

The pipelines that run on the cluster are collected at [github.com/dhinfra-at/use-cases](https://github.com/dhinfra-at/use-cases): notebooks, scripts and small sample datasets. Most of them are not tied to our cluster. They run on any Linux machine with NVIDIA GPUs, or against any OpenAI-compatible endpoint, so they are worth a look even before you have a project with us.

- [Historical newspapers](https://github.com/dhinfra-at/use-cases/tree/main/candidates/003-anno-newspaper-processing). Scanned Fraktur pages from [ANNO](https://anno.onb.ac.at/), the digitised newspaper collection of the Austrian National Library, turned into searchable PAGE-XML: layout analysis with eynollah, OCR with Tesseract 5, optional post-correction, several GPU jobs in parallel. Two parts of the same work sit beside it, a [parallel IIIF downloader](https://github.com/dhinfra-at/use-cases/tree/main/candidates/002-anno-download) for the page images and the [job-ads pipeline](https://github.com/dhinfra-at/use-cases/tree/main/candidates/001-job-ads) of the [Historical Job Ads](https://historical-job-ads.uni-graz.at/en/about-the-project/) project, which reads the Austrian labour market of 1850 to 1950 from newspaper advertisements.
- [Kraken HTR for Latin inscriptions](https://github.com/dhinfra-at/use-cases/tree/main/candidates/004-kraken-training-inscription). Fine-tune a text-recognition model on 50 real inscriptions and 500 synthetic carved stones, four training recipes, minutes on a GPU. The generator for the synthetic stones is included. Background in the [inscriptions post](/2026-06-26-use-case-inscriptions).
- [LLM processing of medieval account books](https://github.com/dhinfra-at/use-cases/tree/main/candidates/005-llmprocessing-medieval-accountingbooks). Latin entries from the account books of Aldersbach Abbey go to the model API and come back as RDF/XML, scored against a manually encoded ground truth. Twenty evaluation reports from three open models are included. Background in the [Aldersbach post](/2026-02-20-aldersbach-account-books).

Use cases from your own institution are welcome as a pull request. The repository README has the template and the checklist.

If you use the cluster, please name *Digital Humanities Infrastructure Austria (DHinfra.at)* in what comes out of it; the wording is on the [impact page](/impact#acknowledgement). Questions go to [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at).
