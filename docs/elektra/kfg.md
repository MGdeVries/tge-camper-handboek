# KFG – klantfunctie-gateway

Het **KFG** (Kundenspezifisches Funktionssteuergerät, Engelse naam CFCU – Customer Function Control Unit, 2e generatie) is het officiële koppelpunt tussen de bus en de opbouw. In deze bus zit het af fabriek, met programmeermogelijkheid voor de opbouwer en telematicavoorbereiding (PR **IS3**). Bron: MAN-document *KFG G2 E2024 V1.0* en de VW Aufbaurichtlinie.

## Plaats
Onder het dashboard achter het dashboardkastje (passagierszijde), bereikbaar van onderaf. De klemmenstrook zit achter de onderste A-stijlbekleding rechts.

## In- en uitgangen (versie voor opbouwers)

| Type | Aantal | Nominale stroom |
|---|---|---|
| Digitale ingang, low-actief, wekbaar | 8 | – |
| Digitale ingang, high-actief, wekbaar | 8 | – |
| Analoge ingang, wekbaar | 8 | – |
| Halve brug (PWM tot 300 Hz) | 4 | 5 A |
| High-side | 6 + 6 | 5 A |
| High-side | 2 | 10 A |
| Low-side (PWM tot 5 kHz) | 2 | 1 A |
| High-side (PWM tot 300 Hz) | 4 | 0,5 A |
| Low-side (PWM tot 300 Hz) | 4 | 0,5 A |
| Relais (wisselcontact, potentiaalvrij) | 2 | 1 A (min. 10 mA schakelstroom) |
| CAN | 3 | – |
| LIN | 2 | – |

## Grenswaarden

| Parameter | Waarde |
|---|---|
| Bedrijfsspanning | 9,0 – 16,0 V (absoluut 7–18 V; starthulp 28 V; load dump 35 V) |
| Totale stroom | max. 80 A absoluut, **77 A continu** verdeeld over alle uitgangen |
| Per pin | MCP 2,8 mm: 25 A (met 2,5 mm²) · MQS 0,64 mm: 4 A (met 0,5 mm²) |
| Rustroom | ±270 µA basis, +140 µA per wekbare low-ingang, +30 µA met wekbare CAN |
| Temperatuur | −40 tot 85 °C · IP5K1 |
| Beveiliging | temperatuurbewaking, over-/onderspanningsafschakeling, ompoolbeveiliging klem 30 |

## Communicatie
- **CANopen** (CiA 447), 125 kbit/s
- **SSM-CAN** (opbouwer-CAN), instelbaar op 125 / 250 / 500 kbit/s, afsluitweerstand 66,4 Ω
- **Telematica-interface**: 12-polige connector, standaard 250 kBaud
- LIN-master 19,2 kbit/s

!!! danger "Niet op de voertuig-CAN"
    De Aufbaurichtlinie verbiedt elke ingreep in de voertuig-CAN, ook alleen uitlezen. Voertuigdata voor de Pekaway CORE PRO gaat **alleen via het KFG** (SSM-CAN / CiA 447 / telematica).

## Programmeerbare functies
- Basis: configureerbare logica- en rekenblokken, vrij in te delen in- en uitgangen, lichtsturing, raambediening, taxi- en speciale functies.
- Uitgebreid: werktoerentalregeling, nevenaandrijving, snelheidsbegrenzer, **motor op afstand starten/stoppen**.
- Programmeren via het VW CustomizedSolution-portaal of de dealer.

## Standaardconfiguratie energiemanagement (2e accu 8FE)

| Signaal | KFG-pin | Functie |
|---|---|---|
| MFE 19 (ingang, +12 V actief) | stekker 3, pin 8 | intern laadapparaat actief |
| MFE 9 (ingang, massa actief) | stekker 3, pin 23 | laadknop |
| MFA 07 (uitgang, plus, 5 A) | stekker 2, pin 1 | terugmelding laadknop actief |

## Gewenst voor deze bus (aan te vragen bij de dealer)
- [ ] Uitgang **"motor draait"** (high-side 5 A) → Orion XS remote-ingangen + ingang CORE PRO
- [ ] Uitgang **"contact aan" (klem 15)** → CORE PRO
- [ ] SSM-CAN-berichten voor de CORE PRO: snelheid, brandstofniveau, buitentemperatuur, accuspanning, motor aan
- [ ] Ingang "intern laadapparaat actief" aansluiten als de Ablemail-druppellader vast wordt ingebouwd
- [ ] Na inbouw van de lithiumaccu: externe-ladingherkenning uit + code **O1A**
