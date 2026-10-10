---
publishDate: 2026-10-10T09:00:00Z
title: 'DHinfra.at is open to all: public launch on 12 October'
excerpt: Since 1 October 2026 the DHinfra cluster accepts project applications from all research and teaching in the humanities, cultural studies and the arts in Austria. Large open-weight language models run on the cluster itself, so data stays inside the academic network. Join the online public launch event on 12 October.
image: /images/posts/2026-10-10-public-launch/launch-card.png
category: News
tags:
  - infrastructure
  - GPU
  - LLM
  - event
author: DHinfra.at
---

In June we [presented the results of DHinfra.at](/2026-06-08-dhinfra-final-event-results). Since then, partner projects of DHinfra.at and CLARIAH-AT have been [working on the cluster](/2026-08-31-cluster-open-for-partners). As of 1 October, we accept project applications from all research and teaching in the humanities in Austria, and on 12 October we present DHinfra.at to the public.

## Public launch event: Monday, 12 October, 10:00 to 11:30 CEST

We first present the whole of DHinfra.at: multispectral imaging, robotic scanning, databases and servers, open-source tools and the GPU cluster. The focus then lies on the cluster and the language models it serves: what they can do, how to get in, and what already runs on them. No prior knowledge needed, with time for your questions.

The presentation is in German. The launch is aimed at the digital humanities in the German-speaking world and marks the opening of the cluster in Austria. Questions in English are welcome, and so are partners from abroad: they work on the cluster as members of a project led by researchers in Austria.

**Zoom:** [join the meeting](https://uni-graz.zoom.us/j/63796915567) (meeting ID 637 9691 5567). Please join with your full name so we can let you in from the waiting room. The University of Graz [privacy notice for Zoom guests](https://static.uni-graz.at/fileadmin/_files/_uniit/datenschutz/zoom/zoom_Datenschutzerklaerung_Gaeste.pdf) applies.

## Large language models inside the academic network

The [DHinfra cluster](/gpu-cluster) runs large open-weight language models with hundreds of billions of parameters. The line-up changes over time. The first season ran Qwen 3.5 with 397 billion parameters, a multimodal model for text and images. Since October, DeepSeek V4.1 Flash runs beside it, with a context of one million tokens. Users vote on the next ones; candidates include models from Kimi, GLM and Mistral. Smaller fast models and embedding models run alongside. Projects call them through an OpenAI-compatible API, so common AI tools and libraries work with it. Texts and images stay inside the academic network and are never sent to a commercial provider.

Models of this size are rarely available in academia. Using them usually means buying expensive hardware or sending data to a commercial service, and for archives, manuscripts and unpublished sources neither is often an option. In Austria, no other GPU and AI infrastructure is built specifically for the humanities.

## What you get

- **Language and vision models:** hosted endpoints for chat, vision, embeddings and reranking
- **GPUs:** powerful NVIDIA nodes (H200, RTX PRO 6000, L40S) on an InfiniBand interconnect
- **Interactive and batch work:** JupyterHub notebooks, SSH and SLURM batch jobs

## Who can use it

The cluster is open to research and teaching projects in Austria in the humanities, cultural heritage, the arts and adjacent social sciences. Partners from abroad take part as members of such a project. The [service policy](/policy) sets out what a project agrees to. Since 1 October the cluster is in regular operation, starting with an introductory phase until 31 December 2026: accepted projects use it free of charge until then. CLARIAH-AT and the DHinfra.at consortium will present the next steps for 2027 in good time.

## How to start

1. Log in at [login.dhinfra.uni-graz.at](https://login.dhinfra.uni-graz.at) with the eduID account of your home institution.
2. Apply for a project in the console. If you only want to look around, create a test project.
3. Read the documentation behind the login, then start working.

Compute time is allocated per project. For a course or a thesis, the instructor or supervisor applies, describes the planned work in the application, and invites the students in bulk. For sensitive or personal data, we are glad to advise you before you start.

## What already runs on it

The pipelines from the partner phase are open at [github.com/dhinfra-at/use-cases](https://github.com/dhinfra-at/use-cases): OCR on [historical newspapers](https://github.com/dhinfra-at/use-cases/tree/main/candidates/003-anno-newspaper-processing), [LLM processing of medieval account books](/2026-02-20-aldersbach-account-books), [text recognition for Latin inscriptions](/2026-06-26-use-case-inscriptions), and more. Use cases from your own work are welcome as a pull request.

## In the press

The University of Graz [announced the cluster](https://www.uni-graz.at/de/neuigkeiten/super-computer-einzigartige-ki-infrastruktur-fuer-geistes-und-kulturwissenschaften/) on 7 October. [ORF Steiermark](https://steiermark.orf.at/stories/3374244/), [news.at](https://www.news.at/technik/geistes-und-kulturwissenschaften-bekommen-ki-supercomputer-infrastruktur), [MeinBezirk](https://www.meinbezirk.at/steiermark/c-wirtschaft/forscher-erschaffen-oesterreichs-erste-ki-infrastruktur_a8941938), [5 Minuten](https://www.5min.at/graz/5202610071332/neuer-super-computer-fuer-oesterreichs-forschung-startet/), [MSN](https://www.msn.com/de-at/nachrichten/other/neuer-super-computer-f%C3%BCr-%C3%B6sterreichs-forschung-startet/ar-AA2dJWrr) and [UNI.at](https://www.uni.at/uni-fh/super-computer-einzigartige-ki-infrastruktur-fuer-geistes-und-kulturwissenschaften/) reported on it. All articles are listed on the [impact page](/impact#press).

## What comes next

On 9 November we present DHinfra.at at the CLARIAH-AT Roadshow 2026 in Vienna. New use cases and posts will follow here.

If you use the cluster, please name _Digital Humanities Infrastructure Austria (DHinfra.at)_ in what comes out of it; suggested wordings are on the [impact page](/impact#acknowledgement). Questions go to [dhinfra@uni-graz.at](mailto:dhinfra@uni-graz.at).

_With thanks to our partner institutions and their IT services, to CLARIAH-AT for supporting operations, and to the BMFWF and the EU Recovery and Resilience Facility (NextGenerationEU) for funding the build._
