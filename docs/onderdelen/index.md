# Onderdelen

Database van alle onderdelen in de bus – **af fabriek** en **aftermarket**. Elk onderdeel krijgt een vaste ID zodat het in schema's, locaties en onderhoud terug te vinden is.

## ID-systeem

| Prefix | Systeem | Voorbeeld |
|---|---|---|
| `VT` | Voertuig af fabriek | VT-001 Startaccu |
| `EL` | Elektra 24V/12V | EL-010 Lynx Distributor #1 |
| `AC` | 230V | AC-001 Omvormer |
| `VW` | Verwarming | VW-001 Autoterm Flow 5D |
| `WA` | Water (vers/grijs) | WA-001 Verswatertank |
| `GS` | Gas *(n.v.t.)* | |
| `IN` | Interieur & meubels | IN-001 Schnierle VanX-stoel |
| `CH` | Chassis, wielen, ophanging | CH-001 Luchtvering |
| `CT` | Data & besturing | CT-001 Pekaway CORE PRO |
| `EX` | Exterieur (dak, ramen, verlichting) | EX-001 Zonnepanelen |

## Velden per onderdeel
Zie [sjabloon](sjabloon.md): ID · naam · merk/type · artikelnr. · af fabriek/aftermarket · locatie (zone) · aansluiting/zekering · specificaties · documentatie · status · datum.

## Overzichten
- [Pekaway-onderdelen](pekaway.md)
- Elektra: [componentenlijst](../elektra/componentenlijst.md)

*De volledige database wordt opgebouwd zodra de structuur vastligt.*
