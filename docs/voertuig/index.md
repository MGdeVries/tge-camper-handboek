# Voertuig

Fabrieksgegevens volgens de PR-lijst (voertuigspecifieke informatie van MAN/VW). Codes zijn de **PR-nummers** zoals ze op het formulier staan, zodat je ze bij de dealer of in erWin kunt opzoeken. Kenteken en VIN worden bewust niet gepubliceerd.

## Basisgegevens

| Eigenschap | Waarde | PR-code |
|---|---|---|
| Model | MAN TGE 3.180 Kastenwagen (PaVan), lange wielbasis, 4Motion, automaat 8 | verkooptype UYCB8Z |
| Modeljaar / productie | MJ 2025 · geproduceerd 10-2024 | |
| Platform | VW Crafter (2e generatie, "Der neue Crafter" vanaf MJ 2025) | |
| Typegoedkeuring | e1\*2007/46\*1626\*35 · NL-typegoedkeuring · volledige N1-registratie | B31, 5EV |
| Toegestane massa | 3,5 t | 07H, 0WQ |
| Lengte / dak | L4 – lang · hoog dak H3 in carrosseriekleur | 0E2, 3R2 |
| Kleur | Indiumgrey metallic (lak LR7H), binnen Grey-Black | X3 |
| Carrosserie | bestelwagen, schuifdeur rechts (tussenstop, grote uitslag), links gesloten, achterdeuren zonder ruiten met vergrote openingshoek | K4A, 5R5, 5Q0, 3RD, 5V4 |
| Laadruimte af fabriek | geen scheidingswand, geen bekleding, geen ramen, geen C-rails, sjorogen, LED-verlichting | 3CA, 5BA–5DA, 6L0, 6B1, 9CW |

## Afmetingen en gewichten

Volgens het MANTED-datablad (TGE 3.180 4x4, Kasten, lange wielbasis, MJ25, tekening 7C0.000.011-MY25). Maten in mm, gewichten in kg.

| Maat | Code | Waarde |
|---|---|---|
| Lengte | L103 | **7.391** |
| Wielbasis | L101 | 4.490 |
| Overhang voor / achter | L104 / L105 | 1.000 / 1.901 |
| Breedte zonder / met spiegels | W103 / W144 | **2.040 / 2.425** |
| Hoogte carrosserie (beladen) | H100-B | **2.503** – onbeladen hoger; dakopbouw (zonnepanelen, MaxxFan) komt erbij |
| Laadlengte / op de vloer | L502-1 / L502-2 | 4.605 / 4.795 |
| Laadruimtebreedte max. / tussen de wielkasten | W200 / W202 | 1.770 / 1.380 |
| Laadruimtehoogte | H505 | 1.861 |
| Laadvolume | | 15,5 m³ |
| Doorgang achterdeuren b × h | W206 / H202 | 1.552 × 1.740 |
| Doorgang schuifdeur l × h | L508 / H508 | 1.311 × 1.722 |
| Laadvloerhoogte (beladen) | H196 | 573 |
| Overhanghoek voor / achter | A116-1 / A116-2 | 20,9° / 8,8° |
| Draaicirkel | D102 | 16,9 m |
| Leeggewicht af fabriek (voor / achter) | | **2.575** (1.545 / 1.030) |
| Toegestane massa | | 3.500 |
| Toegestane aslast voor / achter | | 1.800 / 2.100 |
| Laadvermogen af fabriek | | ±925 – hier gaat de hele ombouw vanaf |

## Aandrijving

| Eigenschap | Waarde | PR-code |
|---|---|---|
| Motor | 2.0 TDI 4-cilinder diesel, **130 kW / 177 pk** bij 3.600 t/min, **410 Nm** bij 1.300–2.000 t/min, motorcode DMZB | T3A, DJ8 |
| Emissie | Euro 6e (EA), met AdBlue/SCR | 4WG |
| Versnellingsbak | automaat 8 versnellingen 4x4, bakcode VPG | G1G |
| Aandrijving | 4x4 (4Motion) + handmatig inschakelbare mechanische sper op de achteras | 1X1, 1Y4 |
| Brandstoftank | 75 l diesel | 0M0, 0F3 |
| Start-stop | met remenergieterugwinning | 7L6 |
| Trekhaak | vast · aanhanger geremd 3.000 kg (tot 12 % helling), ongeremd 750 kg · kogeldruk 100–120 kg · treingewicht max. 6.000 kg (exacte waarden: kentekenpapieren) | 1D1 |
| Vulhoeveelheden | brandstof 75 l (PR 0M0) · AdBlue ±18 of ±30 l *(te bevestigen)* · ruitensproeier 6,9 l (met koplampsproeiers) | |

## Elektrisch systeem af fabriek

| Onderdeel | Specificatie | PR-code |
|---|---|---|
| **Startaccu** | AGM **92 Ah / 520 A** (EN), 278×190×175 mm, ±27,5 kg. Zit in de vloer links, vóór de bestuurdersstoel. | J0B |
| **2e accu** | AGM **92 Ah / 520 A**, cyclusvast, met **scheidingsrelais en accubewaking** door het energiemanagement in het KFG. Mag continu **60 A** leveren, kort (max. 15 min) **190 A**. | 8FE |
| Dynamo | **230 A** (14 V), "dynamo met verhoogde capaciteit". Geen voorbereiding voor een 2e dynamo. | 9G0, NY4, 8HA |
| Accuhoofdschakelaar | niet aanwezig | 9BA |
| Klemmenstrook + KFG | elektrische klemmenstrook en klantspecifiek functiestuurapparaat (KFG) met programmeermogelijkheid voor de opbouwer, incl. telematicavoorbereiding | IS3 |
| 230V-stopcontact | in het stoelframe links (300 W, ook kort zonder draaiende motor) | 9Z3 |
| 12V-aansluitingen | dashboard en linker stoelframe; 12V-contactdoos met sigarettenaansteker | EU4, 9JC |
| USB-C | data- en laadaansluitingen met verhoogd vermogen | U9E |

!!! info "Wat betekent dit voor de ombouw"
    Zie [Aansluiten op het voertuig](../elektra/voertuigaansluiting.md): hoe het 24V-systeem volgens de VW-opbouwrichtlijn op de 2e accu, het KFG en de massapunten wordt aangesloten.

## Wielen, remmen en onderstel

| Eigenschap | Waarde | PR-code |
|---|---|---|
| Banden | 235/65 R16C 115/113 R, allseason, lage rolweerstand | Q70, VG1 |
| Velgen | 4× staal 6½J×16, draagvermogen 1.200 kg, zwart, wieldop met chroom embleem | C0E, 1NP |
| Remmen | schijfremmen voor 16" · elektronische parkeerrem · hill hold en bergafrijhulp | 1LA, UH2, UG5 |
| Vering | basisveren en -dempers, versterkte stabilisator · vooras versterkt | 2MF, VV8 |
| Bandenreparatie | 12V-compressor + afdichtmiddel (geen reservewiel af fabriek) | 1G8 |
| Bandenspanningscontrole | TPMS | 7K3 |
| Overig | één sleepoog voor · krik en boordgereedschap | 1F3, 1S1 |

## Klimaat en verwarming

| Onderdeel | Specificatie | PR-code |
|---|---|---|
| Airco | Climatronic in de cabine | 9AK |
| Standkachel | water-hulpverwarming met afstandsbediening (alleen motor/cabine) | 7VL |
| Verwarmd | voorruit, stoelen bestuurder + bijrijder, stuurwiel, ruitensproeiers | 4GX, 4A3, 2FT, 8X1 |
| 2e warmtewisselaar | niet aanwezig | 6AA |

## Cabine en comfort

| Onderdeel | Specificatie | PR-code |
|---|---|---|
| Stoelen | geveerde ergoActive-stoelen links en rechts, stof 'Toronto Grid', max. 3 zitplaatsen, geen 2e zitrij | 3TK, 3SK, N0V, 3M2, 3UA |
| Infotainment | MAN Media Van Navigation Business 12,9", virtual cockpit, DAB+, spraakbesturing, SmartLink, MAN Connect | 8DG, 7J2, QV3, QH1, 9WJ, EL5 |
| Telefoon | draadloze lader met LTE-buitenantenne-aansluiting | 9IJ |
| Dak cabine | dakreling met opbergvakken, twee 1-DIN-schachten en leeslampje | QE4 |
| Sleutels | 4 radiografische sleutels, keyless start | 8QL, 4I7 |
| Geluidsisolatie | premium | 3W6 |

## Licht en zicht

LED-koplampen met LED-dagrijlicht (8IT), grootlichtassistent (8G1), mistlampen met bochtverlichting (8WH), licht- en regensensor (8N6), koplampreiniging (8X1), elektrisch verstelbare, verwarmde en inklapbare buitenspiegels (6XP), zijmarkeringslichten (8F1), tredeverlichting (9N2).

## Rijhulpsystemen

ACC (8T3), Front Assist (8J3), Lane Assist en Emergency Assist (6I6), Side Assist (7Y1), Park Assist met PDC voor en achter en flankbescherming (7X5), achteruitrijcamera (KA2), multifunctionele frontcamera (QK1), verkeersbordherkenning (QR9), zijwindassistent (KJ1), afslaan- en wegrijwaarschuwing (BR3), vermoeidheidsherkenning (EM2), Cruise Assist Plus (RMX), voorbereiding alcoholslot (GV1).

!!! warning "Let op bij de ombouw"
    De frontcamera (QK1), de radar (ACC/Front Assist) en de regensensor mogen niet worden afgedekt of verplaatst. Zie hoofdstuk 4.2.12 van de Aufbaurichtlinie.

## Pakketten

Comfortpakket Plus (ZMK), Pakket licht & zicht (ZML), Winterpakket (ZW1), Rijassistentiepakket City (ZMD), Lion Commander (ZPS), chroompakket (QJ1).

## Onderhoud

Onderhoudsmelding variabel, 50.000 km of 2 jaar (VI4).

## Identificatie
- VIN zichtbaar door een kijkvenster linksonder in de voorruit; typeplaatje op de B-stijl.
- Zekeringhouders af fabriek: voetenruimte bestuurderszijde en linker stoelframe (zie [Reparatie-informatie](../onderhoud/reparatie.md)).

## Nog op te nemen
- [ ] Motorolie- en koelvloeistofspecificatie en inhoud
- [ ] Indeling zekeringhouders af fabriek
- [ ] Bandenspanning (sticker in de deurstijl)
- [ ] Gewogen gewicht na de ombouw (voor / achter)
- [ ] Exacte plek van de 2e accu (8FE) en de zekeringdoos in de bestuurdersstoelbak
