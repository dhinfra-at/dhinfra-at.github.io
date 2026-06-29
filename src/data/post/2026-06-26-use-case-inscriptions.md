---
publishDate: 2026-06-26T16:00:00Z
title: "HTR for Latin stone inscriptions: a use-case on the cluster"
excerpt: A digital epigraphy project as an example of what the cluster's GPU nodes can be used for — from a single training run to a systematic parameter search.
image: /images/posts/inscription_use-case.jpg
category: Use Cases
tags:
  - use-cases 
  - GPU
  - machine-learning
  - OCR
  - HTR
author: DHInfra.at
---

Reading Latin stone inscriptions by machine is hard: weathered surfaces, ligatures, capitals with no spaces between words (*scriptio continua*), lots of abbreviations and gaps. A standard handwritten text recognition (HTR) model essentially can't read inscriptions like these without any further training. In our case the baseline character error rate (CER) started out at 56 %.

To improve on that, we fine-tuned an existing model (CATMuS-Print Large, Kraken) on real inscriptions from the *Epigraphic Database Heidelberg*. The catch: only ~150 annotated examples. So we additionally generated synthetic training images. For this we rendered "stones" built from real transcriptions, with relief lighting, stone surfaces, erosion and camera effects. These images then served as extra training material.


## What we used the cluster for

The compute-heavy part is training and evaluation. This is exactly what we used the DHInfra GPU nodes for. Concretely:

- **Training runs as GPU jobs.** Each fine-tuning run runs as a SLURM job on a GPU node, controlled by a simple batch script.
- **A systematic search rather than a single attempt.** The interesting question wasn't "does it work," but how much synthetic data and which weighting of the real data is optimal. Comparisons like that consist of many independent runs. Especially this task is well suited to being dispatched as parallel jobs on the cluster.
- **Cross-validation.** Evaluating with 5-fold cross-validation multiplies the number of runs again; that, too, spreads across several jobs.

So it's a fairly typical machine-learning use-case: individual jobs are moderately sized, but you need a lot of them.

## Results

We evaluated each strategy with 5-fold cross-validation. The parameter search varied two things: **n**, the number of synthetic images added, and **r**, how strongly the real inscriptions are weighted against them.

| Strategy | CER (%) |
|---|---|
| stock (zero-shot) | 56.00 ± 4.02 |
| real-only | 18.32 ± 2.94 |
| n500, r1 | 20.17 ± 7.17 † |
| n2500, r1 | 16.92 ± 1.48 |
| n5000, r1 | 16.76 ± 1.79 |
| n5000, r3 | 15.88 ± 1.23 |
| **n5000, r5** ⭐ | **15.32 ± 1.34** |
| n5000, r8 | 15.48 ± 1.53 |
| pretrain | 15.65 ± 1.67 |

*n = number of synthetic images, r = weighting of the real data; pretrain = pre-trained on synthetic first, then fine-tuned on real. ⭐ best run, † large spread across folds. Lower CER is better; values are mean ± standard deviation over the 5 folds.*

Two side observations: more synthetic data isn't automatically better. In this use-case we had to weight the few real inscriptions up a little, otherwise they get drowned out. And a single train/test split looked too good at first; only the grouped cross-validation showed what actually generalizes. Both observations could only be settled in a reasonably quick time because the necessary runs ran in parallel on the cluster.
This was about feasibility, not a finished project: testing whether synthetic data can compensate for scarce annotations, not delivering a usable inscription-reading model. The ~15 % CER won't transcribe stones for you yet, but it's a promising starting point.

---
*Image: public domain, via [Wikimedia Commons](https://commons.wikimedia.org/).*