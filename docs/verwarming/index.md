# Verwarming

- **Autoterm Flow 5D** (24V, 5 kW, diesel) met Baltica-componenten: vloeistofcircuit naar interieur, woonaccu en tanks
- **Autoterm Air 2D** (24V, 2 kW): luchtverwarming, los circuit
- **Vloeistof-standkachel af fabriek**: alleen motorcircuit

## Blad 4 – Verwarmingscircuit

![Blad 4 – Verwarmingscircuit](blad4-verwarmingscircuit.svg)

Eén serielus: per apparaat een 24V-3-wegklep (apparaat óf bypass), retour direct terug op de hoofdleiding. De accu krijgt alleen gemengd water van 30–35°C via mengklep AT0062.

## Regeling (CORE PRO)

| Klep | Naar apparaat als | Naar bypass als | Zonder stroom |
|---|---|---|---|
| V1 interieur | T5 < instelling | temperatuur bereikt / zomer | n.v.t. |
| V2 accu | T1 < 5°C | T1 > 15–20°C **of** T2 > 40°C | **bypass (verplicht)** |
| V3 verswater | T3 < 3°C | T3 > 8°C | bypass |
| V4 grijswater | T4 < 3°C | T4 > 8°C | bypass |

## Open punten
- [ ] 24V-kleppen Autoterm: leverbaar? stand zonder stroom?
- [ ] 2-wegkranen tanks: in het koelvloeistofcircuit of aftapkranen?
- [ ] Extra vloeistofpomp nodig naast de pomp van de Flow 5D?
