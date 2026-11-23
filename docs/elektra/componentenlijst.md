# Componentenlijst

Systeemoverzicht van het elektrische systeem. Pekaway-onderdelen staan uitgebreid in [pekaway-onderdelen.md](../onderdelen/pekaway.md), de groepen in [zekeringkast.md](zekeringkast-rev-a.md).

## Voertuig

- MAN TGE 3.180 4x4 LWB, bouwjaar 11-2024
- Dynamo 250A, 12V startaccu
- Motor-aan-signaal via KFG/CAN, niet via D+

## Woonaccu 24V (zelfbouw, 8s1p)

| Eigenschap | Waarde |
|---|---|
| Cellen | 8× LiFePO4 3,2V 184Ah (datasheet SVOLT/EVL CL01, DOC-2005890 rev B; celmerk nog verifiëren) |
| Pakket | 25,6V nominaal · ±4,7 kWh · 16,0–29,2V |
| Aanbevolen SOC-bereik | 5–100% |
| Standaard laden | 61,3A (1/3C) tot 3,65V/cel, CV tot 9,2A |
| Laadtemperatuur | −20 tot 55°C; onder 0°C sterk beperkte laadstroom |
| Ontladen | 184A continu · 540A gedurende 30 s · 635A gedurende 10 s · −30 tot 55°C |
| Inwendige weerstand | ≤ 0,45 mΩ per cel |
| Gewicht cellen | 3,37 kg per stuk, ±27 kg totaal |
| BMS | JK-B2A8S30P (8S, 2A actieve balancer, 300A volgens typenaam) |
| Monitor | Pekaway Wireless Shunt 500A in de min |

## Hoofdverdeling

- F1 Class-T 250A, 70 mm² van accu naar Lynx
- Q1 hoofdschakelaar BEP 770-DP-EZ (400A continu / 600A 5 min / 1500A 10 s, 12–48V, M10, IP67, 13,5 Nm), alleen in de plus tussen F1 en Lynx +; tweede pool niet gebruikt
- 2× Victron Lynx Distributor M10 (1000A, elk 4× MEGA-zekering met bewaking)

| Lynx | Aansluiting | Zekering | Kabel |
|---|---|---|---|
| #1 L1-1 | Orion XS 1400 #1, uitgang | MEGA 40A | 6 mm² |
| #1 L1-2 | Orion XS 1400 #2, uitgang | MEGA 40A | 6 mm² |
| #1 L1-3 | Pekaway S40 MPPT | MEGA 40A | 10 mm² |
| #1 L1-4 | Fusy Mini (reserve) | MEGA 40A | 10 mm² |
| #2 L2-1 | Omvormer 3000 VA | MEGA 200A* | 50 mm²* |
| #2 L2-2 | Fusy Maxi 1 | MEGA 100A | 25 mm² |
| #2 L2-3 | Fusy Maxi 2 | MEGA 100A | 25 mm² |
| #2 L2-4 | reserve | — | — |

\* Nog controleren in de handleiding van het exacte omvormermodel. Alle kabeldoorsneden zijn voorlopig en gaan uit van korte lengtes. Na het meten narekenen.

## Min / chassis

- Lynx − rail → 50 mm² · ±1 m → chassispunt tussen linker achterwielkast en achterbumper
- Spanningsval retour: kabel 0,03V bij 80A (±2 W) + chassis/massaband van de fabriek; totale weg startaccu → Orion ±0,16V + chassis (±1% van 15,6V)
- Dit is de retourweg van de 12V-ingangsstroom van de Orions (±80A): startaccu − → chassis → chassispunt → Lynx − → Orion −
- Gevolg: de min van het 24V-huishoudsysteem zit vast aan het chassis (nodig bij een niet-geïsoleerde Orion XS)
- Na de inbouw meten: spanning tussen startaccu − en Lynx − bij 80A laden moet < 0,1V zijn

## Laden

| Bron | Details |
|---|---|
| Dynamo via DC-DC | 2× Victron Orion XS 1400. Ingangsstroom softwarematig begrensd op ±40A per stuk (dynamo ±15,6V) → ±620 W, ±21A uit per stuk; samen ±1,2 kW / ±43A in de accu, ±80A uit de dynamo. Niet-geïsoleerd. Remote on/off via CORE PRO. 12V-zijde: startaccu → MEGA 100A (direct achter de accu, enige zekering aan 12V-zijde; beschermt ook de 25 mm²-aftakkingen) → 50 mm² (0,4 m accu→zekering + 0,7 m zekering→6007) → gemeenschappelijke aansluiting Blue Sea 6007 m-Series Mini Selector (300A continu, onderin de B-stijl links achter de bestuurdersstoel) → uitgang 1: 25 mm² · 3,5 m naar Orion XS #1, uitgang 2: 25 mm² · 3,5 m naar Orion XS #2. Spanningsval plus-zijde ±0,13V (50 mm² bij 80A: 0,03V; 25 mm² bij 40A: 0,10V). Standen: UIT / alleen #1 / alleen #2 / beide |
| Zon | 4× Craig Solar 200 Wp mono all-black (Vmp 19,5V · Imp 10,8A · Voc 23,6V · Isc 11,5A · 147×67×3 cm · 10,5 kg) in 2s2p = 800 Wp, DC-scheider, 6 mm², Pekaway S40 |
| Startaccu bijladen | Ablemail AMT12-2 vanuit de woonaccu (groep 417) |
| Walstroom | nog niet besloten |

## 12V-zijde

- Victron Orion 24/12-30 (360 W) op Fusy Maxi 2 groep 416 (20A) → 40A/6 mm² → Fusy Standard 1
- Last bij alles tegelijk aan: ±208 W ≈ 17,5A (toilet 120 W, MaxxFan Deluxe Compact 20 W, 2× MaxxFan Dome 24 W, MoonBox 2× 10 W)

## 230V

- Victron omvormer 3000 VA, 24V
- AC-groepen 101–104, zie [zekeringkast.md](zekeringkast-rev-a.md)

## Verwarming (Autoterm)

| Onderdeel | Spanning | Aantal |
|---|---|---:|
| Air 2D luchtverwarming + Comfort Control Panel AT0050 | 24V | 1 |
| Baltica-systeem (vloeistof, Flow 5D) | 24V | 1 |
| CHX warmtewisselaar met ventilator AT3-CHX24-S | 24V | 2 |
| Elektrische 3-wegklep (24V-versie, in ontwikkeling bij Autoterm; wordt gekocht zodra leverbaar) | 24V | 4 |
| Instelbare thermostatische mengklep AT0062 | — | 1 |

## Tankniveau

3× Simarine STR1 radar-tankniveausensor (analoog + Bluetooth). Deze sensor wordt aan de buitenkant op de tank gemonteerd en meet contactloos door de wand heen. Geschikt voor kunststof- en glasvezeltanks met een wanddikte tot 10 mm en een tankhoogte van 150–2000 mm. De uitgangen zijn 0–180 Ω, 240–30 Ω en 0–5V tegelijk, en de sensor wordt ingesteld via de Simarine Connect-app.

| Tank | Sensor | Uitlezing |
|---|---|---|
| Dieseltank voertuig | STR1 #1 | 0–5V naar Pekaway-ingang + Bluetooth |
| Verswater 133 L | STR1 #2 | 0–5V naar Pekaway-ingang + Bluetooth |
| Grijswater | STR1 #3 | 0–5V naar Pekaway-ingang + Bluetooth |

Voorstel voeding: Fusy Maxi 1, groep 218 (nu vrij), 2A.

## Overige verbruikers

- Koelkast Vitrifrigo Slim 150L CHR
- MaxxFan: 2× Dome, 1× Deluxe Compact
- Ogo composttoilet, VanderMoon MoonBox IO, Viofo T340 dashcam, Starlink Mini
- Waterpomp, 3× warmtelint, 4× kogelkraan

## Open punten

- [ ] Celmerk verifiëren (SVOLT of BYD Blade)
- [ ] Maximale PV-spanning van de S40 bevestigen (55V tegen ±53V Voc bij −20°C)
- [ ] Orion XS is niet-geïsoleerd. Afstemmen met de eis van chassisscheiding bij zakelijk gebruik
- [ ] Orion 24/12-30 bestellen. Groep 416 naar 20A/4 mm², uitgang 40A/6 mm². Piekvermogen van het Ogo-toilet controleren
- [ ] 24V-versie van de Autoterm 3-wegkleppen bestellen zodra die leverbaar is
- [ ] Ablemail AMT12-2: 24V-ingang?
- [ ] Zekering en kabel van de omvormer per exact model
- [ ] STR1: wanddikte, materiaal en montageplek van de dieseltank controleren (buitenkant onder de bus: vocht, vuil, steenslag)
- [ ] STR1: voedingsspanning (24V?) en welke Pekaway-ingang 0–5V inleest
