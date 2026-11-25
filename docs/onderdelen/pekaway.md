# Pekaway-onderdelen

Alle Pekaway- (VAN PI-) onderdelen in het 24V-huishoudsysteem, met de rol van elk onderdeel in het systeem en de zekeringgroep uit [zekeringkast.md](../elektra/zekeringkast-rev-a.md).

- **Status:** `besteld` = geleverd op basis van een offerte. `te bestellen` = ligt in de winkelwagen.
- **Prijzen:** bestelde onderdelen staan met de offerteprijs **excl. btw**. Onderdelen in de winkelwagen staan met de webshopprijs **incl. 19% Duitse btw** (stand 22-11-2026).
- **SKU:** een SKU staat er alleen bij als hij op de offerte stond. Waar "—" staat, is de SKU niet bekend.

## Energie en verdeling

| # | Onderdeel | SKU | Variant | Aantal | Prijs/st | Totaal | Status | Rol in het systeem | Aansluiting / groep |
|---|---|---|---|---:|---:|---:|---|---|---|
| 1 | Pekaway Solar Charger 40A (MPPT S40, "Silent") | WAY-MPPT-S40 | 40A | 1 | € 67,21 ex | € 67,21 ex | besteld | MPPT-laadregelaar voor 4× 200 Wp in 2s2p. Max 55V PV (Voc koud ±53V) | Lynx B · 8 · zekering nader te bepalen (na kabellengte/-doorsnede) · 10 mm² |
| 2 | Pekaway Wireless Shunt 500A | WAY-SHU-ESP-500 | 500A | 1 | € 100,00 ex | € 100,00 ex | besteld | Accumonitor in de min tussen BMS P− en Lynx. Wi-Fi naar CORE PRO | Min-leiding accu |
| 3 | Pekaway FUSY zekeringblok (Mini) | WAY-FUS-MINI | Mini · 6 groepen | 1 | € 58,81 ex | € 58,81 ex | besteld | 24V-reserve | Lynx A · 4 · MEGA 40A (60 A controleren) · 10 mm² · groepen 501–506 |
| 4 | Pekaway FUSY zekeringblok (Standard) | WAY-FUS-100 | Standard · 12 groepen | 1 | € 84,02 ex | € 84,02 ex | besteld | 12V-verdeling (toilet, MaxxFans, MoonBox) | Via DC-DC 24→12V op groep 416 · groepen 401–412 |
| 5 | PEKAWAY FUSY – zekeringblok met originele WAGO-hendelklemmen | — | Maxi · 18 groepen | 2 | € 149,99 | € 299,98 | te bestellen | 24V-verdeling Maxi 1 en Maxi 2 | Lynx A · 2 en A · 3 · MEGA 100A · 25 mm² · groepen 201–218 en 301–318 |

FUSY in het kort: ATO-steekzekeringen, max 30A per groep, 12/24V, groepdraad 0,5–4 mm² via WAGO-klemmen. Het Standard- en Maxi-blok worden gevoed via een M6-boutaansluiting, het Mini-blok via een WAGO-klem.

## Besturing en data (VAN PI)

| # | Onderdeel | SKU | Variant | Aantal | Prijs/st | Totaal | Status | Rol in het systeem | Aansluiting / groep |
|---|---|---|---|---:|---:|---:|---|---|---|
| 6 | CORE PRO | — | 16 GB · 128 GB High Endurance SD | 1 | € 1.215,00 | € 1.215,00 | te bestellen | Centrale besturing (VAN PI OS). Stuurt de Orion XS-laders aan op motor-aan via CAN/KFG en leest shunt, MPPT en BMS uit | Maxi 1 · 208 · 2A |
| 7 | Pekaway LTE Bridge 4G | — | 4G+ | 1 | € 299,00 | € 299,00 | te bestellen | Toegang op afstand en aansturing buiten wifi-bereik | via CORE PRO |
| 8 | Pekaway Touchdisplay | — | met CORE PRO RJ45 Display Adapter | 1 | € 239,90 | € 239,90 | te bestellen | Bedieningspaneel in de woonruimte | RJ45 naar CORE PRO |
| 9 | Pekaway Touchdisplay Surface-Mount Case | — | — | 1 | € 39,90 | € 39,90 | te bestellen | Opbouwbehuizing voor het display | — |
| 10 | Dimmy PRO | — | — | 2 | € 299,00 | € 598,00 | te bestellen | Dimmers voor de led-verlichting | Maxi 1 · 209 en 210 · 20A |
| 11 | IN-OUT-X PRO | — | — | 1 | € 279,00 | € 279,00 | te bestellen | Schakelende in- en uitgangen (kleppen, pompen, tasters) | Maxi 1 · 211 · 20A |
| 12 | Inprojal 4-voudige taster 30420 12V/24V incl. raam | — | — | 3 | € 29,99 | € 89,97 | te bestellen | Wandtasters | IN-OUT-X PRO |
| 13 | VAN PI temperatuursensor DS18B20 | — | — | 4 | € 14,90 | € 59,60 | te bestellen | Bekabelde temperatuurmeting (accu, techniekruimte, water) | CORE PRO 1-wire |
| 14 | RuuviTag Pro 3-in-1 Bluetooth-sensor | — | — | 4 | € 49,00 | € 196,00 | te bestellen | Draadloze temperatuur, luchtvochtigheid en luchtdruk | BLE naar CORE PRO |
| 15 | VAN PI USB JST (voor Autoterm) | — | — | 2 | € 29,99 | € 59,98 | te bestellen | Koppeling van de CORE PRO met de Autoterm Air 2D en Flow 5D | USB op CORE PRO |
| 16 | Adapter MaxxFan RJ45 naar MultiCom | — | — | 1 | € 34,99 | € 34,99 | te bestellen | Sturing van de MaxxFan via de CORE PRO | CORE PRO |
| 17 | MaxxFan RJ45-kabel 5 m SuperSlim | — | 5 m | 1 | € 12,99 | € 12,99 | te bestellen | Kabel voor de MaxxFan-adapter | — |

## USB-C-voeding

| # | Onderdeel | SKU | Variant | Aantal | Prijs/st | Totaal | Status | Rol in het systeem | Aansluiting / groep |
|---|---|---|---|---:|---:|---:|---|---|---|
| 18 | Pekaway Delivery DUAL (12V/24V USB-C 145W) | WAY-DLY-MB-14 | zwart · zonder rand ("OHNE") | 1 | € 100,00 ex | € 100,00 ex | besteld | USB-PD-aansluiting | Maxi 1 · een van 204–207 · 15A |
| 19 | Pekaway Delivery DUAL (12V/24V USB-C 145W) | — | metalen bus · zwart | 3 | € 119,00 | € 357,00 | te bestellen | USB-PD-aansluitingen bank, buiten, slaapkamer en keuken | Maxi 1 · 204–207 · 15A |
| 20 | Pekaway Delivery USB-C – Starlink Mini Edition | — | complete set · 100W-voeding + kabel | 1 | € 84,98 | € 84,98 | te bestellen | Voeding Starlink Mini | Maxi 1 · 203 · 15A |

## Totalen

| | Bedrag |
|---|---:|
| Besteld (offerte, excl. btw, incl. € 12,39 verzending) | € 422,43 |
| Te bestellen (webshop, incl. btw) | € 3.866,29 |

## Bewust niet besteld

- Votronic Tankelektrode 15-50K (5545), 3×, en Votronic Tanksensor FL (5530), 3×: uit de bestelling gehaald. Tankniveau wordt gemeten met 3× Simarine STR1 (zie [componentenlijst.md](../elektra/componentenlijst.md)).

## Open punten

- Specificaties van de Dimmy PRO en IN-OUT-X PRO (aantal kanalen, stroom per kanaal) toevoegen.
- Nagaan welke Pekaway-ingang (CORE PRO of IN-OUT-X PRO) het 0–5V-signaal van de Simarine STR1 kan inlezen.
- Controleren dat de S40 bij de laagste verwachte temperatuur onder 55V PV blijft.
