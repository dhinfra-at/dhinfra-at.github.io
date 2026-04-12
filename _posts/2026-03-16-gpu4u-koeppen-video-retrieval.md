---
layout: post
title: "GPU4U in Action: Large-Scale Video Retrieval with Vision Language Models"
subtitle: "How Ferdinand Köppen used a H200 GPU to describe nearly a million video keyframes for his master thesis"
tags: [use-cases, GPU4U, GPU, students, LLM, VLM, CLARIAH-AT, video-retrieval]
---

The [GPU4U pilot](/2025-09-09-gpu4u-pilot-use-case/) set out to give students access to high-performance GPUs for their research. Ferdinand Köppen, a master's student at the University of Klagenfurt (AAU), was one of five students selected at the GPU4U First Selection Workshop to receive temporary access to the [DHInfra.at GPU cluster](/2025-08-28-graz-gpu-cluster-install/). His project: building open-source tooling for video retrieval using image and text embeddings from Vision Language Models (VLMs). With a single H200 GPU, he analyzed **968,307 keyframes** extracted from roughly 7,100 videos (~1.3 TB).

## The Problem: Finding a Needle in a Video Haystack

Imagine you have a massive video archive and you're looking for a specific scene — say, "a red car and then a person riding a bike." How do you find it without manually scrubbing through thousands of hours of footage?

Köppen's approach: have a VLM describe every keyframe in the dataset with a short natural language caption. These captions are then embedded so that a researcher can write a free-text query and retrieve matching videos and keyframes — even capturing temporal relationships between scenes. This kind of text-based video retrieval is relevant for researchers working with large audiovisual archives, the kind of collections that Digital Humanities projects increasingly deal with.

## Systematic Model Evaluation on the Cluster

Before processing the full dataset, Köppen compared five VLMs: **BLIP-2**, **LLaVA**, **Moondream3**, **Qwen2-VL-7B**, and **Qwen2-VL-72B**. The goal: assess **stability** (how consistent are the captions across repeated runs?) and **textual precision** (how well does the output capture the salient visual content?).

<img src="/assets/img/posts/2026-03-16-gpu4u-koeppen/gpu4u-koeppen-bike.png" class="img-responsive" alt="Test image: a street scene with BMX riders in various poses and visible storefront text">
<span class="caption">The test image: a street scene with people in different poses, bicycles in various configurations, and visible text.</span>

Each model was run 1,000 times per output length configuration (short: 10–30 tokens, medium: 30–150, long: 150–300). Pairwise cosine similarity across the resulting embeddings measured semantic consistency:

| Model | Short | Medium | Long |
|---|---|---|---|
| BLIP-2 | 0.587 ± 0.151 | 0.698 ± 0.131 | 0.702 ± 0.122 |
| LLaVA | 0.654 ± 0.116 | 0.682 ± 0.144 | 0.740 ± 0.096 |
| Qwen2-VL-7B | **1.000 ± 0.000** | 0.919 ± 0.065 | 0.985 ± 0.010 |
| Qwen2-VL-72B | **1.000 ± 0.000** | **1.000 ± 0.000** | 0.987 ± 0.011 |
| Moondream 3 | 0.838 ± 0.078 | 0.831 ± 0.057 | 0.861 ± 0.043 |

Qwen2-VL scored highest on consistency, but consistency alone isn't everything. A qualitative analysis showed that **Moondream3 offered the best balance of description quality and speed**. An example caption from Moondream3-short:

> *A young man in a black and white striped shirt performs a trick on his BMX bike on a city sidewalk, with a storefront displaying "poltronesofa" and a "20%" sign in the background.*

Concise, yet capturing the most distinctive features — suitable for downstream retrieval. The full analysis is available at [master-analysis.deployments.ferdinand-koeppen.tech](https://master-analysis.deployments.ferdinand-koeppen.tech/).

## Why the H200 Mattered

Köppen was allocated one H200 GPU from the DHInfra.at cluster. Two things would not have been possible without it:

1. **Testing the largest model**: Qwen2-VL-72B used 127 GB of the H200's 140 GB VRAM during inference. No consumer or typical academic GPU has that kind of memory.

2. **Processing the full dataset**: With Moondream3-short selected as the production model, the H200's throughput allowed all 968,307 keyframes to be processed within the project timeline. A smaller GPU would have forced a compromise on model quality.

## Cross-Institutional Access via CLARIAH-AT

The University of Klagenfurt is not a direct DHInfra.at partner — but it is part of the [CLARIAH-AT](https://clariah.at) consortium, which is responsible for the long-term integration and sustainability (*Verstetigung*) of digital research infrastructure in Austria. Through this connection, Köppen could access the DHInfra.at GPU cluster hosted at the University of Graz via direct SSH over a private VPN, with smooth support and collaboration between the teams.
