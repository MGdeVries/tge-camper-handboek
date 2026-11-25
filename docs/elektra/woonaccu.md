# Woonaccu 24V

Zelfgebouwde LiFePO4-accu: **8 cellen in serie (8s1p), 25,6 V nominaal, ±4,7 kWh**, met vloeistofverwarming via de Autoterm Flow 5D.

## Cellen

| Eigenschap | Waarde |
|---|---|
| Type | LiFePO4 prismatisch 3,2 V / 184 Ah, datasheet EVL/SVOLT CL01 (DOC-2005890 rev B) |
| Capaciteit | ≥184 Ah bij 1/3C · ≥179 Ah bij 1C |
| Energie per cel | ≥588 Wh (1/3C) |
| Spanningsbereik | 2,0 – 3,65 V per cel → pakket 16,0 – 29,2 V |
| Aanbevolen SOC | 5 – 100 % |
| Standaard laden | 61,3 A (1/3C) tot 3,65 V, CV tot 9,2 A |
| Laadtemperatuur | −20 tot 55 °C (laden stopt direct daarbuiten) |
| Ontladen | 184 A continu · 540 A 30 s · 635 A 10 s · −30 tot 55 °C |
| Inwendige weerstand | ≤0,45 mΩ |
| Levensduur | ≥2500 cycli tot 80 % SOH (1C, 3–100 % SOC, 25 °C) |
| Gewicht | 3,37 kg per cel, ±27 kg aan cellen |

## BMS en meting
- **JK-B2A8S30P** (8S, 300 A, 2 A actieve balancer). Het aanwezige exemplaar is de versie met alleen Bluetooth; het plan is een bedrade versie (RS485/CAN).
- **Pekaway Wireless Shunt 500 A** in de min.

## Aansluitingen (pinout)

**Stekker 1 – vermogen 24 V**

| Pin | Functie | Kleur |
|---|---|---|
| 1 | + DC | rood |
| 2 | − DC | zwart |

**Stekker 2 – besturing en monitoring**

| Pin | Functie |
|---|---|
| 1 / 2 / 3 | 3-wegklep warme zijde: normally open / massa / normally closed |
| 4 / 5 / 6 | 3-wegklep koude zijde: normally open / massa / normally closed |
| 7 – 10 | BMS RS485 (1–4) |
| 11 / 12 | temperatuursensor 1: + rood / − zwart |
| 13 / 14 | temperatuursensor 2: + rood / − zwart |
| 15 / 16 | temperatuursensor 3: + rood / − zwart |

## Verwarming en isolatie
De accubak is geïsoleerd met **20 mm XPS**. Onder de cellen zit een **vloeistofwarmtewisselaar**, aangesloten op het Flow 5D-circuit. De koelvloeistof (±80 °C) komt in korte pulsen via het centrale kleppenblok; de pulsduur wordt empirisch bepaald. Zie [Verwarming](../verwarming/index.md).
