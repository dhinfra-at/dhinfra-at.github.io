---
publishDate: 2026-02-20T09:00:00Z
title: "Information Extraction from Monastery Account Books"
excerpt: Testing the DHInfra.at inference API on the account books of Aldersbach Abbey — open models, matched against commercial ones.
category: Use Cases
tags:
  - use-cases
  - LLM
  - information-extraction
  - inference
  - API
author: DHInfra.at
---

How well can a language model automatically classify and extract information from early-modern
monastic account books? A team working on the **Rechnungsbücher of Aldersbach Abbey** put this to
the test on the DHInfra.at infrastructure.

The pipeline is straightforward: prepare the data, send it to the inference API, receive structured
output, and feed the results back into research and edition work. The GPU cluster processes the
requests on demand.

## Direct API access as an easy substitute

During the development phase we deliberately kept access simple: researchers reached the cluster's
OpenAI-compatible inference API directly (an SSH port-forward standing in for the eventual direct
HTTPS endpoint). A **single key** is enough to identify the project — everything else runs remotely.
No cluster login, no local GPU, no heavyweight setup.

The results were encouraging: outputs from open, state-of-the-art models were **on par with or
better than** commercial offerings, and a single set of experiments saved several hundred euros
compared to paid APIs. The main node comfortably produces several thousand tokens per second.

## What comes next

We are turning this into a **reusable playbook**: documentation on our GitHub on how to run this kind
of API-based information extraction yourself, and a ready-made standard notebook on the cluster so
new projects can start from a working example rather than from scratch.

This use case was presented at DHd2026 (Vogeltanz, Vogeler, Klugseder, Rufin, Unterholzner, Spoerer,
Pößniker, Kern, Kröll & Lübbers: _Kloster trifft KI_,
[DOI 10.5281/zenodo.18702943](https://doi.org/10.5281/zenodo.18702943)).
