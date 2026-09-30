---
publishDate: 2026-10-02T09:00:00Z
title: 'Pletka, formerly Zellij, is now open source'
excerpt: The core of Pletka, a platform for building semantic data models together, is released under the Apache 2.0 licence. DHinfra.at funded its storage backend, admin dashboard and generators. With it, the last of the three open-source tools we invested in is released, after QLever and liiive.now.
category: News
tags:
  - software
  - open-source
  - semantic-web
author: DHinfra.at
---

The core of Pletka is now open source under the Apache 2.0 licence, at [github.com/pletka-io/pletka](https://github.com/pletka-io/pletka). The project, its roadmap and its community are at [The Pletka Project](https://pletkaproject.org) (pletkaproject.org).

Pletka is the new version of Zellij, a tool for documenting semantic data models. A project describes its data as fields, collections and models, based on ontologies such as CIDOC CRM and Linked Art. Pletka then generates what an implementation needs from that one description: RDF and JSON-LD, SPARQL queries, X3ML mappings, and files for systems such as ResearchSpace.

DHinfra.at funded three parts of the rebuild: a storage backend on PostgreSQL with project versioning, which replaces Airtable; a web admin dashboard for organizations, users and projects; and the generators, now called derivatives. Pletka is designed by Takin.solutions, engineered by Delving BV, and developed together with the Swiss Art Research Infrastructure (SARI, ARDEAH project) and DHinfra.at.

The hosted service at [pletka.io](https://pletka.io) already holds more than 40 public models, built with Zellij in earlier years and moved over. Among them are [Releven](https://pletka.io/projects/RLV) at the Austrian Academy of Sciences, the SARI reference data models, and Linked Art. If your project works with CIDOC CRM, Linked Art, WissKI, Arches or ResearchSpace, you can start from these patterns.

With the conclusion of DHinfra.at, we now see the last of the three open-source tools we invested in released: after [QLever](/software#qlever) and [liiive.now](/software#liiive), Pletka. All three are described on our [open-source software page](/software).
