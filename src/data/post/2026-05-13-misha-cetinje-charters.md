---
publishDate: 2026-05-13T09:00:00Z
title: "Reading the unreadable: multispectral imaging of medieval Serbian charters"
excerpt: DHInfra coordinated a loan of TU Wien's portable MISHA system to recover faded Old Serbian text on damaged charters in Cetinje — here is how the process works.
image: /images/posts/misha-charter.jpg
category: Use Cases
tags:
  - digitization
  - multispectral imaging
  - MISHA
  - manuscripts
  - DHInfra
author: DHInfra.at
---

Nine of the medieval charters held by the State Archives in Cetinje, the former Montenegrin capital, were buried in the ground in the 20th century. The surface of the parchment is heavily damaged and the ink badly faded. In normal photography, much of the text is unreadable. Under multispectral imaging, some lines come back.

These charters are part of the corpus addressed by **MeSeCA** (_Medieval Serbian Charters Action — Towards a Digital Edition of the Royal Charters of Medieval Serbia_), a Marie Skłodowska-Curie Actions postdoctoral fellowship (2024–2026) led by **Dr. Žarko Vujošević** at the [University of Graz's Institute for Digital Humanities](https://digital-humanities.uni-graz.at), working alongside **DiDip** (_From Digital to Distant Diplomatics_) toward a digital edition of medieval Serbian rulers' charters. The full corpus holds around 600 diplomatic units, mostly in Old Serbian, scattered across archives outside Serbia. For the Cetinje material, plain digitisation wasn't going to cut it.

## Borrowing the equipment

DHInfra coordinated a loan of the **MISHA system** from TU Wien's Computer Vision Lab. MISHA — the Multispectral Imaging System for Historical Artefacts — is an open-source, LED-based multispectral imaging rig from the Rochester Institute of Technology, built for flat archival material and portable enough to travel to the archive instead of the other way around.

After contacting **Florian Kleber** at TU Wien CVL, the system was available within about two weeks. Handover included a training day: an introduction to MSI, hands-on capture training, a walkthrough of post-processing, and setup and packing instructions. Paperwork was a loan agreement and an insurance confirmation. For DHInfra partner institutions there is no loan fee — only training and insurance, which usually stay in the low three-digit range. For details, get in touch with TU Wien CVL.

## What multispectral imaging does

Multispectral imaging captures the same scene at many wavelengths of light, including some our eyes cannot see. Parchment, iron-gall ink, pigments, glues, mould and water damage each reflect and absorb light differently across the spectrum, so a faded or washed-out script — and underwriting in palimpsests — often re-emerges under UV or near-infrared light that no single ordinary photograph can capture. It is entirely non-invasive: only light and a camera, no physical contact and no chemicals.

MISHA is a monochrome camera paired with a sequence of narrow-band LED illumination panels, working inside a dark tent to keep ambient light out. It takes one exposure per wavelength — **16 bands per capture**: 2 ultraviolet, 12 visible, and 2 near-infrared (from 365 nm up to 940 nm).

## From 16 raw bands to a readable image

1. **Capture** — the MISHA system records 16 narrow-band exposures, stacked into a single ENVI image cube.
2. **Pre-process** — the MISHA Analyser handles flat-fielding, alignment and calibration.
3. **Decompose** — Principal Component Analysis (PCA) and Minimum Noise Fraction (MNF) separate the faint signal from the noise.
4. **Enhance** — local contrast equalization (CLAHE) pushes that faint signal into a readable range.

Different regions of a charter respond best to different post-processing, so the work is iterative: many areas become more legible, while some damage is simply too strong to reconstruct.

## First results

Processing is ongoing, but the first results are in. Text in Old Serbian that was barely visible on the parchment is now legible in the multispectral composite.

---

To borrow MISHA, contact **Florian Kleber** or **Robert Sablatnig** at TU Wien's Computer Vision Lab. See the [Resources page](/resources#digitization) for the full range of DHInfra digitization equipment.
