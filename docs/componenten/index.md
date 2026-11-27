# Elektrische componenten

Overzicht van alle onderdelen in de bus, per systeem, met specificaties en de link naar de productpagina van de fabrikant. Doel: een onderdeel identificeren, de specs terugvinden als het product uit productie is, en een vervanger zoeken als er iets defect gaat.

Klik een niveau open om naar het detail te gaan.

**Legenda status:** ✅ ingebouwd · 🛒 besteld · 📥 op voorraad · 📦 nog te bestellen · ❓ onbekend

## 1. Voertuig

??? note "1.1 Aandrijving & start"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-101 | Dynamo | 230 A (PR 9G0, NY4), ±15,6 V bij laden | ✅ af fabriek |
    | EL-102 | Startaccu | AGM 92 Ah / 520 A (PR J0B), vloer links voor bestuurdersstoel | ✅ af fabriek |
    | EL-103 | 2e accu | AGM 92 Ah / 520 A, met scheidingsrelais en accubewaking (PR 8FE) | ✅ af fabriek |

??? note "1.2 Voertuigaansluiting"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-111 | KFG (klantfunctie-gateway) | Uitgang motor-aan-signaal, telematica (IS3) | ✅ af fabriek |
    | EL-112 | Klemmenstrook | IS1 / klem 15 | ✅ af fabriek |
    | EL-113 | 230V-stopcontact | Stoelframe links (PR 9Z3) | ✅ af fabriek |

    Aansluitregels: zie [Aansluiten op het voertuig](../elektra/voertuigaansluiting.md).

## 2. Elektra 24V

??? note "2.1 Woonaccu"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-201 | Cellen (8×) | LiFePO4 3,2 V 184 Ah, datasheet SVOLT/EVL CL01 (DOC-2005890 rev B). Celmerk nog te verifiëren. | 🛒 |
    | EL-202 | Pakket | 25,6 V nominaal, ±4,7 kWh, 16,0–29,2 V. Laden standaard 61,3 A tot 3,65 V/cel. Max continu ontladen 184 A. | — |
    | EL-203 | BMS | JK-B2A8S30P (8S, 2 A balancer). Huidige versie alleen Bluetooth; bedrade versie (RS485/CAN) nodig. VAN PI ondersteunt officieel alleen JBD. | 🛒 |
    | EL-204 | Accumonitor | Pekaway Wireless Shunt 500A (500 A / 50 mV, M10, 9–32 V) | 🛒 |

??? note "2.2 Hoofdverdeling"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-211 | F1 | Class-T 250 A, 70 mm² van accu naar Lynx | 📦 |
    | EL-212 | Q1 hoofdschakelaar | BEP 770-DP-EZ: 400 A continu / 600 A 5 min / 1500 A 10 s, 12–48 V, IP67 | 📦 |
    | EL-213 | Lynx Distributor M10 (2×) | 1000 A, 4× MEGA-zekering per Lynx. Lynx 1: besteld. Lynx 2: op voorraad. Productlink nog toe te voegen. | 🛒 / 📥 |
    | EL-214 | Blue Sea 6007 m-Series Mini Selector | 32 V, 300 A continu. Standen UIT / #1 / #2 / beide. Onderin B-stijl links achter bestuurdersstoel. | ❓ |

??? note "2.3 Laden"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-221 | Victron Orion XS 1400 DC-DC (2×) | Niet-geïsoleerd, geen VE.Direct. Ingang begrensd op ±40 A per stuk. Remote via relais CORE PRO. | 🛒 |
    | EL-222 | Pekaway MPPT S40 | 40 A, max PV 55 V, 800 Wp. Specsheet alleen voor S20: klemmen en vermogen nog controleren. | 🛒 |
    | EL-223 | Ablemail AMT12-2 | Druppellader startaccu, op Fusy Maxi 2 groep 417 | ❓ |
    | EL-224 | Victron Orion 24/12-30 | 360 W, 12V-zijde, op Fusy Maxi 2 groep 416 | 📦 |

??? note "2.4 Besturing & data (Pekaway VAN PI)"
    | ID | Onderdeel | Specificatie | Link |
    |---|---|---|---|
    | EL-231 | CORE PRO | 8–32 V, 3–6 W, 8 relais, 4 tankingangen, 4× DS18B20, 8 ingangen, 2× MultiCom | [pekaway.de](https://pekaway.de/products/core-pro) |
    | EL-232 | IN-OUT-X PRO | 8 ingangen, 8 relais (3× 16 A, 3× 10 A, 2× 40 A), voeding 5 A | [pekaway.de](https://pekaway.de/products/in-out-x-pro) |
    | EL-233 | Dimmy PRO (2×) | 8 kanalen RGBW, MultiCom. Ledstrips 30 A per kanaal, max 40 A. | [pekaway.de](https://pekaway.de/products/dimmy-pro) |
    | EL-234 | Touchdisplay Pro | Display met CORE PRO RJ45-adapter | [pekaway.de](https://pekaway.de/products/pekaway-touchdisplay) |
    | EL-235 | Touchdisplay Surface-Mount Case | Montagebehuizing | [pekaway.de](https://pekaway.de/products/pekaway-touchdisplay-surface-mount-case) |
    | EL-236 | LTE Bridge 4G+ | Met accu (tot 24 uur reserve), GPS, USB-C 5 V/3 A voeding | [pekaway.de](https://pekaway.de/products/van-pi-iot-bridge-2g) |
    | EL-237 | Inprojal 4-voudige taster 30420 (3×) | 12 V/24 V, inclusief frame | [pekaway.de](https://pekaway.de/products/inprojal-4-fach-taster-30420-12-24v-inklusive-rahmen) |
    | EL-238 | DS18B20 temperatuursensor (4×) | Digitale temperatuursensor | [pekaway.de](https://pekaway.de/products/van-pi-temperatursensor-ds18b20) |
    | EL-239 | RuuviTag Pro 3-in-1 (4×) | Bluetooth-sensor. Docs: maximaal 3 per systeem. | [pekaway.de](https://pekaway.de/products/ruuvitag-pro-3in1) |
    | EL-240 | Victron MultiPlus-II | 24/3000/70, GX-versie. Op voorraad. | 📥 |

??? note "2.5 Omvormer 230V"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-251 | Victron MultiPlus-II 3000 VA | 24 V, GX-versie. Op voorraad. Zekering en kabel per exact model nog controleren. | 📥 |
    | EL-252 | AC-groepen | 101 inductie 2000 W, 102 waterkoker/airfryer, 103 buitenkeuken, 104 e-bikes. Alle 10 A, 3× 2,5 mm². | ✅ |

??? note "2.6 Zekeringen en relais"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-261 | Pekaway Fusy Maxi (2×) | 24 V, 18 kanalen, 100 A dauerlast, 200 A piek. [pekaway.de](https://pekaway.de/products/pekaway-fusy) | 🛒 |
    | EL-262 | Pekaway Fusy Standard | 12 V/24 V, 12 kanalen, 100 A dauerlast | 🛒 |
    | EL-263 | Pekaway Fusy Mini | 24 V, 6 kanalen, 40 A dauerlast, één kanaal met 30 A-zekering. | 🛒 |

??? note "2.7 12V-zijde"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-271 | MaxxFan Deluxe | 12 V, 5 A, 9 A bij start. RJ45-adapter voor CORE PRO. | ❓ |
    | EL-272 | Ogo composttoilet | 12 V, piek 7,5 A | ❓ |

## 3. Verwarming & water

??? note "3.1 Verwarming"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-301 | Autoterm Air 2D | 2 kW, 12/24 V, max 29 W | ❓ |
    | EL-302 | Autoterm Flow 5D | 24 V, 42 W, start 120 W | ❓ |
    | EL-303 | Serielus | Met 4× 3-wegklep 24 V | ❓ |

??? note "3.2 Tanks"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-311 | Dieseltank | 75 l, STR1-radarniveaumeter | 📦 |
    | EL-312 | Verswatertank | 133 l, STR1-radarniveaumeter | 📦 |
    | EL-313 | Grijswatertank | STR1-radarniveaumeter | 📦 |

## 4. Carrosserie

??? note "4.1 Bodywork-aanpassingen"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-401 | Rear window pods (links en rechts) | Opbouw achterramen, geplakt en geschroefd (fabrikantinstructie VW Crafter). Inclusief raam en steunstrip. | ✅ |

    Voor de montage is de VW-instructie gebruikt. Die is niet in de publieke repo geplaatst.

## 5. Interieur

??? note "5.1 Vloer en verlichting"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-501 | RGBWW-ledstrip | 24 V, via Dimmy PRO. Blauw ±61 W per 4 m. | 📦 |

## 6. Exterieur

??? note "6.1 Zonnepanelen"
    | ID | Onderdeel | Specificatie | Status |
    |---|---|---|---|
    | EL-601 | Craig Solar 200 Wp (4×) | Vmp 19,5 V, Voc 23,6 V, Isc 11,5 A. 2s2p = 800 Wp. | 🛒 |
    | EL-602 | DC-scheider | Tussen panelen en MPPT | ❓ |

??? note "6.2 Overig buiten"
    Nog in te vullen.
