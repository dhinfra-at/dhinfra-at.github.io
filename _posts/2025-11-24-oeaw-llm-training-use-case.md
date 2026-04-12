---
layout: post
title: "LLM Fine-Tuning and Inference for Historical Research"
subtitle: Secure model training and deployment for DH applications
tags: [use-cases, infrastructure, GPU, LLM, fine-tuning, ÖAW]
---

A researcher from the Austrian Academy of Sciences (ÖAW) reached out with requirements for local LLM training and inference capabilities. After completing an AI study program and extensive hands-on experience with prompting, RAG systems, and local LLMs, they are now looking to scale beyond what is possible with consumer hardware.

## Requirements

The use case centers on three core needs:

**Fine-tuning and Continued Pre-Training**: Moving beyond prompting to create more reliable, domain-specific LLM applications. While prompting has limitations, fine-tuned models with custom instructions and guardrails are essential for agentic workflows, RAG systems, and web-based applications. Current work with a personal RTX 4090 is limited to smaller models.

**Secure Local Inference**: Deploying RAG systems and chatbots on web servers with proper security considerations. Current concerns include handling off-domain queries, bias issues, and prompt injection attacks. Until these security aspects are properly addressed, production deployments remain too risky.

**Development Environment**: A space to experiment with different model architectures (decoder-only via frameworks like Llama Factory, seq2seq models like BART and ByT5) without relying on commercial cloud services.

## Infrastructure Approach

The DHInfra GPU cluster could address these needs through several capabilities currently being developed:

**Multi-GPU Training**: The cluster's H200 and L40S GPUs with high-bandwidth InfiniBand interconnect can enable fine-tuning and continued pre-training of larger models that exceed single-GPU memory limits.

**Containerized Workflows**: Simplified job submission through container support would allow researchers to bring their own environments (Llama Factory, custom HuggingFace Transformer workflows) without complex setup procedures.

**Resource Allocation**: A job scheduling system provides fair access to GPU resources with (minimum) quotas and accounting, which makes it feasible to support multiple research projects simultaneously.

For production inference workloads, the security and deployment model is still being explored. Initial focus will be on supporting the training and development workflows that currently require external cloud services or are limited by local hardware constraints.

The researcher's background as a "low-coder" with practical AI experience represents an important user profile for DHInfra infrastructure, i.e., they are almost always domain experts who are able to deeply understand their research needs but benefit from simplified access to computational resources.

