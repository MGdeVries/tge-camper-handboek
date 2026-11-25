# Aansluiten op het voertuig

Hoe het 24V-huishoudsysteem volgens de VW-opbouwrichtlijn op de TGE wordt aangesloten. Bron: *Aufbaurichtlinie Der neue Crafter (ab Modelljahr 2025), Ausgabe November 2024*, hoofdstuk 6 (Elektrik / Elektronik). De TGE is technisch een Crafter, en dit is de juiste editie voor modeljaar 2025. De editie 2023 geldt voor de Crafter vanaf MJ 2017.

!!! warning "Status: rev A – te controleren"
    Paginaverwijzingen zijn uit de editie 2024. Details die alleen in erWin of de KFG-documentatie staan (pinning van het eigen KFG, massapunten volgens stroomschema 801/1) moeten nog worden opgevraagd.

## Wat er af fabriek in zit

| PR | Wat | Belangrijk voor de ombouw |
|---|---|---|
| J0B | startaccu AGM 92 Ah / 520 A | alleen voor het voertuig |
| 8FE | 2e accu AGM 92 Ah, scheidingsrelais, bewaakt door het KFG. Zit in de motorruimte aan bestuurderszijde, achter de koplamp. | het officiële aftakpunt voor opbouw-verbruikers; max. 60 A continu, 190 A kort |
| 9G0 / NY4 | dynamo 230 A (14 V) | slimme dynamo met start-stop en remenergieterugwinning (7L6) |
| IS3 | klemmenstrook + KFG met opbouwerprogrammering + telematica | motor-aan-signaal en voertuigdata (CAN) voor de Pekaway |
| 9BA | geen accuhoofdschakelaar | |

## Regels uit de Aufbaurichtlinie

### Accu en laden (6.3, p. 101–109)
- Bij draaiende motor nooit accuklemmen losnemen. Langer dan 20 dagen stilstaan: accu's loskoppelen of bijladen.
- Permanente verbruikers horen op de 2e accu, niet op de startaccu (rustroom voertuig ≈20 mA; 100 mA extra kost de startaccu ≈2,4 Ah per dag).
- Het scheidingsrelais van 8FE gaat **open** zodra klem 15 (contact) of klem 50 (starten) actief wordt, en sluit pas weer na een kwalificatietijd.
- **Lithium als opbouwaccu (p. 108–109)** is alleen toegestaan als aan alle punten wordt voldaan:
    1. er is een bewaakte 2e accu af fabriek (8FE of 8FH) – ✅ aanwezig;
    2. het scheidingsrelais wordt vervangen door een geschikte **DC/DC-lader** – ✅ 2× Orion XS (12→24V);
    3. de **herkenning van externe lading wordt uitgeschakeld** en de waarschuwings- en uitschakelniveaus worden aangepast – ⬜ via de dealer;
    4. na inbouw codeert de dealer de after-sales-code **O1A** (2e accu Li-ion) – ⬜ via de dealer;
    5. **geen lithium in de motorruimte** – ✅ accu zit in de laadruimte;
    6. de lithiumaccu moet **vernetwerkt** zijn met een laadmanager (geen "domme" accu) – ⬜ zie BMS hieronder.
- Aanvraag van de codering via de MAN/VW-servicepartner (VW: NSC.Convert@volkswagen.de).

### Voertuig-CAN-bus (6.4.4, p. 117)
**Ingrijpen in de CAN-bus is verboden**: niet onderbreken, verlengen of aftakken, en ook **niet uitlezen of beschrijven**. Online-apparaten mogen niet op het KFG worden aangesloten.

➡ **Gevolg voor de Pekaway CORE PRO:** voertuigdata alleen via het **KFG** (IS3) halen, niet door op een CAN-lijn in de bus te tappen. Het KFG heeft een eigen CAN-interface naar de opbouw (CiA 447 en J1939). De telematica-interface staat standaard op 250 kBaud (ook 150 of 500), met een 12-polige connector achter het dashboardkastje aan de passagierszijde. Een OBD-dongle valt hier niet onder, maar is geen vaste aansluiting.

### KFG en klemmenstrook (6.4.1–6.4.3, p. 110–116)
- **Klemmenstrook**: achter de onderste A-stijlbekleding rechtsvoor, 2 groepen van 4 aansluitingen. Klem 30 = 12 V / 25 A, klem 15 = 12 V / 15 A.
- **KFG**: onder het dashboard achter het dashboardkastje, bereikbaar van onderaf. 16 digitale en 8 analoge ingangen, 24 uitgangen, ruim 3.000 voertuigsignalen beschikbaar. Overbelasting vernielt het KFG.
- **Programmeren** van extra functies (bijv. een uitgang "motor draait", start-stop tijdelijk uit) gaat via het VW CustomizedSolution-portaal of de dealer. Start-stop mag via het KFG **tijdelijk** worden uitgezet, **niet permanent**.
- **Standaardconfiguratie energiemanagement (p. 103):**
    - ingang **MFE 19** (stekker 3, pin 8, +12 V actief) = *"intern laadapparaat actief"*. Hiermee meld je een vast ingebouwde lader;
    - ingang **MFE 9** (stekker 3, pin 23, massa actief) = laadknop;
    - uitgang **MFA 07** (stekker 2, pin 1, max. 5 A) = terugmelding.

### Kabels en zekeringen (6.4.5–6.4.7, p. 118–119)
- Kabels volgens DIN 72551 / ISO 6722-3, loodvrij, temperatuurklasse **≥105 °C**. Niet langs scherpe randen, bewegende delen of remleidingen. Waterdichte verbindingen.
- Elk extra circuit met een eigen zekering. Relais en magneetkleppen met **vrijloopdiode**. Geen spanningspieken boven 150 V in het boordnet.
- Geen extra verbruikers op bestaande zekeringen en geen snijklemmen op voertuigkabels.

| Stroom | Zekering | Doorsnede |
|---|---|---|
| tot 4 A | 5 A | 0,35 mm² |
| 4–8 A | 10 A | 0,5 mm² |
| 8–12 A | 15 A | 1 mm² |
| 12–16 A | 20 A | 1,5 mm² |
| 16–24 A | 30 A | 2,5 mm² |
| 24–32 A | 40 A | 4 mm² |
| 32–40 A | 50 A | 6 mm² |
| 40–80 A | 100 A | 10 mm² |
| 80–100 A | 125 A | 16 mm² |
| 100–140 A | 175 A | 25 mm² |
| 140–180 A | 225 A | 35 mm² |
| 180–240 A | 300 A | 50 mm² |

*Dit is de VW-tabel voor de 12V-voertuigkant (maximale zekering per doorsnede). Onze 24V-groepen volgen [zekeringen rev B](zekeringen-rev-b.md) en blijven daar ruim binnen.*

### Massa (6.4.9 en 6.4.14, p. 124–128)
- Minpool van opbouwapparaten naar een **door VW voorgeschreven carrosseriemassapunt**, niet naar de min van de accu. Ook de min van een lader moet op een massapunt van het voertuig.
- Maximaal **4 kabelschoenen** per massapunt. Massapunten van veiligheidssystemen (airbag e.d.) niet gebruiken.
- Bekend punt: klem 31 achter de onderste A-stijlbekleding rechts, naast de klemmenstrook. Volledig overzicht: stroomschema 801/1 (erWin).

### Dynamo (6.4.10, p. 125)
Varianten 140 / 180 / **230 A** (9G0). Een extra of grotere dynamo alleen als VW-goedgekeurde uitvoering.

## Toetsing van ons ontwerp

| # | Ons ontwerp (blad 1) | Richtlijn | Status / actie |
|---|---|---|---|
| 1 | Orions gevoed vanaf de **startaccu** via MEGA 100A en Blue Sea 6007 | Opbouw hoort op de 2e accu (8FE). Bij lithium: het scheidingsrelais vervangen door de DC/DC-lader. | ⚠ **Te bespreken.** Voeding van de Orions verplaatsen naar de 8FE-kant, of de dealer laten bevestigen dat aftakken vanaf de startaccu met O1A-codering is toegestaan. |
| 2 | 2 Orions samen ≈80 A uit de 12V-kant | 8FE: max. 60 A continu, 190 A max. 15 min | ⚠ Als de Orions op de 8FE-uitgang komen: samen begrenzen tot **≤ 60 A** (bijv. 2× 30 A ingang ≈ 2× 16 A uit op 24V), of 8FH (200 A) laten beoordelen. |
| 3 | Motor-aan via "CAN-bus / KFG" | CAN-bus uitlezen verboden; via KFG wel | ✅ Via een KFG-uitgang "motor draait" (programmeren) of klem 15 op de klemmenstrook, naar de Orion remote-ingangen en de CORE PRO. |
| 4 | Pekaway CAN-integratie | alleen via KFG-interface (CiA 447 / J1939 / telematica) | ⬜ Uitzoeken welke berichten het KFG levert en of de CORE PRO J1939/FMS kan lezen. |
| 5 | Lynx-min 50 mm² naar Earth point 762 (massa 24V/230V, linker langsligger achter) | alleen VW-massapunten, max. 4 kabelschoenen | ◐ Earth point 762 (9 Nm), zie [Massapunten](massapunten.md). Studmaat en vrije plek ter plekke controleren. |
| 6 | Lithium in de laadruimte | niet in de motorruimte | ✅ |
| 7 | Lithiumaccu vernetwerkt met laadmanager | vereist | ⬜ Bedrade BMS (RS485/CAN) → CORE PRO / Orions. De BT-versie voldoet hier niet. |
| 8 | Codering O1A + uitschakelen externe-ladingherkenning | vereist | ⬜ Laten uitvoeren door de dealer na inbouw. |
| 9 | Kabels: welk type? | ≥105 °C, DIN 72551 / ISO 6722-3 | ⬜ Bij aanschaf op letten (bijv. FLRY-B / tinned marine kabel met 105 °C-classificatie). |
| 10 | Spoelen kleppen/relais (Baltica 24V-kleppen) | vrijloopdiode | ⬜ Controleren of ze een ingebouwde diode hebben. |

## BMS

Geplaatst: **JK-B2A8S30P** (8S, 300 A, 2 A actieve balancer). Het huidige exemplaar heeft **alleen Bluetooth**; het plan is een **bedrade versie** (RS485/CAN). Die is nodig om te voldoen aan punt 7 hierboven en om de accu aan de CORE PRO te koppelen. Let op: de Pekaway VAN PI ondersteunt officieel alleen JBD-BMS'en. JK-integratie loopt dan via Node-RED/RS485 of de Wireless Shunt.
