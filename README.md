# TGE Camper Handboek

Handboek en database van een **MAN TGE 3.180 4x4** camper (LWB, 2024): fabrieksspecificaties, aftermarket-onderdelen, elektra, verwarming en waar alles zit.

**Website:** https://mgdevries.github.io/tge-camper-handboek/

## Structuur

```
docs/
  voertuig/      fabrieksspecs, opties, maten, vloeistoffen
  elektra/       24V/12V-systeem, schema's, zekeringen, Pekaway
  verwarming/    Autoterm Flow 5D / Baltica, Air 2D
  onderdelen/    database van alle onderdelen (ID-systeem)
  locaties/      zones: waar zit wat
  onderhoud/     intervallen, meetpunten, storingen zoeken
  bronnen/       handleidingen en links
```

De site wordt gebouwd met [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) en automatisch gepubliceerd via GitHub Actions bij elke push naar `main`.

Lokaal bekijken: `pip install mkdocs-material && mkdocs serve`

## Disclaimer
Documentatie van een privé-ombouw, geen installatievoorschrift. Laat 24V/230V-installaties keuren door een erkend installateur.
