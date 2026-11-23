# Pekaway – technische specificaties en documentatie

Samengevat uit de officiële Pekaway-specsheets (Canva, 55 pagina's) en de VAN PI-documentatie op GitBook (stand 23-11-2026). Per onderdeel: specificaties, en wat dat betekent voor deze bus.

Bronnen:
- Specsheets: https://www.canva.com/design/DAGipMbBoJY/jEhIXF38jMmxMzk4PXYAIQ/view
- Documentatie: https://pekaway.gitbook.io/van-pi-dokumentation (index: `/llms.txt`)

---

## CORE PRO
| | |
|---|---|
| Voeding | 8–32V DC · **aanbevolen zekering 5A** · voedingsdraad max 2,5 mm², relaiszijde max 4 mm² |
| Verbruik | 3–6 W |
| Processor | Raspberry Pi 5-klasse (BCM2712, 4 GB), 128 GB NVMe, Wi-Fi 2,4/5 GHz, BT 5.0 / BLE, Gigabit Ethernet |
| Relais aan boord | **4× Omron NO 16A + 4× Omron NO/NC 10A** (potentiaalvrij) |
| Tankingangen | 4, capacitief of weerstand, **per paar instelbaar** (1&2, 3&4) |
| Temperatuur | **max 4× DS18B20** (1-wire) + via Bluetooth tot 3 RuuviTags |
| Digitale ingangen | 8, galvanisch gescheiden, 6–30V |
| Aansluitingen | 2× MultiCom (I²C, CAN, RS485, UART) · 4× USB · RJ45 display (UART + 1-wire + LIN, alleen met PRO-adapter) · RJ12 LIN-master (CI-bus) |
| Bedrijfstemperatuur | −25 tot 60°C |
| Afmetingen | 245 × 115 × 45 mm |

**Gevolgen voor de bus:** groep 208 van 2A → **5A**. De CORE PRO heeft zelf al 8 relais en 8 ingangen naast de IN-OUT-X PRO. Alle 4 DS18B20-plaatsen zijn op blad 4 al gebruikt (T1–T4).

## IN-OUT-X PRO
| | |
|---|---|
| Voeding | 9–32V DC · **aanbevolen zekering 5A** |
| Verbruik | ±0,05 W (relais af) · ±4 W (alle relais aan) |
| Relais | 3× Omron NO 16A (4 mm²) · 3× Omron NO/NC 10A (4 mm²) · 2× NO/NC 40A, auto-relais, verwisselbaar (10 mm²) — alle potentiaalvrij |
| Ingangen | 8× digitaal, galvanisch gescheiden (6–32V) |
| Communicatie | MultiCom (I²C) |
| Temperatuur | bedrijf max 50°C, opslag max 55°C |
| Afmetingen | 210 × 96 × 47 mm |

**Gevolgen voor de bus:** groep 211 → **5A**. De verbruikers krijgen hun stroom uit hun eigen groep en gaan via de relaiscontacten. Monteer de module niet in een warme techniekruimte (max 50°C).

## DIMMY PRO
| | |
|---|---|
| Voeding | 9–32V DC · **aanbevolen zekering 30A, max 40A** · aansluiting tot 4/10 mm² |
| Kanalen | **6× 50 W + 2× 120 W continu** (PWM, uitgangsspanning = ingangsspanning) |
| RGBW | **2× RGBW low-side, 30 W** |
| Beveiliging | intelligente lastbewaking, overbelastingsbeveiliging per uitgang |
| Instellingen | PWM-max % (begrenzing), gamma (2,2 aanbevolen), RGBW aan/uit (4- of 3-kanaals) |
| Afmetingen | 160 × 91 × 30 mm |

**Gevolgen voor de bus — belangrijk:**
- Gemeten op een RGBWW-strip van 4 m bij 24V: blauw **61 W** per kleur, rood ±30 W. Dat past **niet** op een RGBW-uitgang van 30 W, en blauw past zelfs niet op een kanaal van 50 W.
- Oplossing: zet de RGBW-uitgang van de Dimmy op een **externe 24V-RGBW(W)-versterker** (gemeenschappelijke anode, ≥5 A per kanaal). Die versterker krijgt zijn voeding uit een eigen Fusy-groep. Per plafondstrip één versterker.
- De gewone kanalen (bank, keuken, garage, ±10 W per stuk) kunnen rechtstreeks op de Dimmy.
- RGBWW heeft 5 kleuren, de RGBW-functie 4. Ofwel een RGBW-strip kiezen, ofwel de tweede wit-ader via een gewoon kanaal (dan ook via de versterker).

## FUSY-zekeringblokken
| | Mini | Standard ("FUSY") | Maxi |
|---|---|---|---|
| Groepen | 6 | 12 | 18 |
| Continu | 40A | 60A | 100A |
| Piek | 60A (30 min) | 100A (30 min) | 200A (30 min) |
| Per groep | max 30A (ATO) | max 30A | max 30A |
| Groepdraad | 0,5–4 mm² | 0,5–4 mm² | 10× tot 4 mm², **8× tot 10 mm²** |
| Voeding | WAGO tot 16 mm² | M6 (5 Nm) | M6 (5 Nm) |
| Temperatuur | −25 tot 50°C | −25 tot 65°C | −25 tot 65°C |
| Artikel | WAY-FUS-MINI | WAY-FUS-100 | WAY-FUS-MAX |

- **Mini:** slechts één groep mag een zekering van 30A hebben.
- **Overige modellen:** groepen met 30A moeten minstens 3 posities uit elkaar zitten.
- M6-aansluitingen aanhalen met exact 5 Nm (momentsleutel).
- De Maxi heeft bidirectionele status-leds en ziet ook een doorgeslagen zekering aan de kant van een lader.

## Wireless Shunt 500A
| | |
|---|---|
| Spanning | 9–32V (12/24V) |
| Shunt | 500 A / 50 mV, **M10**-aansluitingen |
| Eigen verbruik | 30 mA |
| Communicatie | BLE + Wi-Fi (ESP32-C3), MQTT, Home Assistant, Pekaway Blue-app |
| Meegeleverd | houder + **zekering 0,5A in de kabel** (meetdraad) |
| Afmetingen | 120 × 86 × 41 mm |

Configuratie: capaciteit 184 Ah, laadrendement 98–99 % (LFP), volle-accudetectie instellen op 24V-waarden, bijv. 28,4V / 5A / 5 min.

## MPPT S20 / S40
De specsheet beschrijft alleen de **S20**. Voor de S40 is geen aparte sheet gevonden.

| (S20) | |
|---|---|
| Stroom | 20A · 12/24V |
| Max PV | **55V** · 260 W (12V) / 520 W (24V) |
| Laadspanning 24V | boost 28,0–29,6V · float 26,0–29,0V · lithium-doelspanning instelbaar 10–32V |
| Rendement | MPPT 99,9 % · omzetting 98 % |
| Eigen verbruik | 5 mA |
| Klemmen | **tot 5 mm²** |
| Overig | Bluetooth, IP54, 700 g, 164 × 107 × 32 mm |

**Gevolgen voor de bus:**
- Je hebt 800 Wp. Een S20 kan op 24V maar 520 W aan. Zorg dus dat het echt de **S40** is.
- De klemmen van de S20 nemen maar 5 mm². Ik had 6 mm² (PV) en 10 mm² (accu) getekend. Controleer de klemmaat van de S40, en gebruik anders een verloop of kortere 4 mm²-stukjes bij de regelaar.
- Koppeling met de VAN PI alleen via Bluetooth. Pekaway raadt een USB-Bluetooth-dongle aan als er veel BLE-apparaten zijn.

## Delivery (USB-C)
| | |
|---|---|
| Ingang | 9–32V DC · max 12A ingangsstroom |
| Uitgang | 100 W (5V/9V/12V/15V–3A, 20V–5A) · PD 3.0, QC 3.0 |
| **Aanbevolen zekering** | **15A** |
| Temperatuur | −10 tot 40°C bij vol vermogen |
| Kabels | aansluitkabel 1,5 m · kabel USB-C-bus ±1 m |
| Starlink-set | USB-C naar Starlink-DC-jack, waterdicht, 2 m |

De DUAL 145W staat niet in de specsheets. Ga voorlopig uit van dezelfde ingang (9–32V) en zekering (15A).
**Gevolg:** in rev B had ik 7,5–10A voorgesteld. Pekaway schrijft **15A** voor. Ik houd me aan de fabrikant, met 1,5 mm² (≤ 4 m) of 2,5 mm² (5 m).

## Touchdisplay (RJ45)
- 7", voeding en data over één RJ45-kabel (minimaal CAT 6A, bij voorkeur CAT 7). Patchkabel van 3 m meegeleverd. Geen eigen voeding of zekering nodig.
- Ingebouwde realtime-klok (houdt de tijd bij voor timers).
- **Alleen de CORE PRO RJ45 Display Adapter** gebruiken. De gewone UART-adapter kan de CORE PRO beschadigen.
- De adapter levert 5V en brengt ook 1-wire (DS18B20) en LIN (Truma CI) naar buiten.
- Afmetingen 181 × 108 × 9,3 mm.

## LTE Bridge 4G / 4G+
- **Voeding: USB-C 5V / 3A**.
- LTE CAT1, ingebouwde simkaart (abonnement nodig), gps.
- Maakt verbinding met de VAN PI via **Wi-Fi**. Het is geen router: alleen de VAN PI komt online, je kunt er niet op internetten.
- 4G+: ingebouwde back-upaccu (schakelaar staat standaard op *Batt OFF*). Plaatsbepaling tot 24 uur na uitval van de accu.

**Gevolg:** in de groepenindeling ontbreekt nog een **USB-C-voeding van 5V/3A** voor de bridge. Bijvoorbeeld een poort van een Delivery DUAL, of een kleine 24V→USB-C-adapter op een eigen groep van 2A. De CORE PRO-USB is hiervoor niet bedoeld.

## Autoterm-koppeling (VAN PI USB JST)
- USB naar 5-polige JST, 1 m. Air 2D/4D: het standaard bedieningspaneel moet eraf, de kabel komt op dezelfde connector.
- **Flow 5D:** andere pinbezetting (gele draad van pin 4 naar pin 5), vanaf VAN PI OS 2.1.2. **Alleen via Node-RED**, nog geen app, display of webinterface.
- Bij het instellen van de 5D moet de groep "Autoterm 2D/4D" in Node-RED **uit**.

**Gevolg:** **vraag Pekaway of de Air 2D en de Flow 5D tegelijk werken** (twee USB-poorten). Volgens de documentatie lijkt het één van de twee. Daarnaast heeft de Air 2D een binnentemperatuursensor nodig voor de thermostaatfunctie.

## MaxxFan via MultiCom
- Adapter in de RJ45-MultiCom-bus van de **MaxxFan (Deluxe)**. MaxxFan-kabel RJ45 superslim, 5 m.
- Monteer de adapter zo dicht mogelijk bij de CORE PRO. De lange kabel loopt naar de ventilator.
- Functies: 10 snelheden, aan/uit, in/uit, kap open/dicht, automatische temperatuurregeling.
- **Alleen zenden, geen terugmelding.** Wat je met de afstandsbediening instelt, ziet het systeem niet.

## Temperatuursensoren
- DS18B20: **max 4** op de CORE PRO. Er is 1 meegeleverd met de CORE PRO, en je bestelt er 4 (= 5 totaal, 1 reserve).
- RuuviTag Pro (temperatuur, luchtvochtigheid; IP67, ook in de koelkast te gebruiken): de documentatie noemt **tot 3** extra Bluetooth-sensoren. Je bestelt er 4 → vraag Pekaway of de vierde ondersteund wordt.

## Tankniveau – Simarine STR1
| | |
|---|---|
| Voeding | 8–35V DC · IP67 · −20 tot 70°C |
| Uitgangen | wit 0–190 Ω (EU) · geel 240–30 Ω (VS) · groen 0–5V · blauw = COM (gescheiden van GND) |
| Aansluiting VAN PI | **wit (0–190 Ω) naar de tankingang van de CORE PRO**, blauw naar GND. Instelling: weerstand, leeg 0 Ω, vol 190 Ω |
| Montage | wand ≤ 10 mm, **haaks op het vloeistofoppervlak, vrij zicht op de tankbodem**, ≥150 mm tot de vloeistof, tankhoogte 150–2000 mm. Lijm: 24 uur uitharden |
| Kalibratie | eerst de STR1 zelf (2 punten, of meerdere bij een onregelmatige tank), daarna in VAN PI OS |

**Gevolgen:** 3 sensoren op tankingang 1–3, en beide paren (1&2, 3&4) op "weerstand". **Dieseltank:** de sensor moet bovenop de tank, met de bovenkant naar boven. Controleer of dat onder de bus kan.

## Accu / BMS
- VAN PI ondersteunt via Bluetooth **BMS'en op JBD-basis** (Liontron, Power Queen, enz.). **JK BMS wordt niet genoemd.**
- **Gevolg:** de SoC komt van de Pekaway-shunt (dat raadt Pekaway sowieso aan). De JK-BMS lees je apart uit met de JK-app, of de community/Node-RED lost het op.

## Victron
- VAN PI leest Victron via **VE.Direct** (USB-JST-kabel): SmartSolar 75/15, SmartShunt 500 en Phoenix 250 W plug-and-play. Andere apparaten via Node-RED.
- **De Orion XS heeft geen VE.Direct** (alleen Bluetooth). Die kun je dus niet uitlezen. Aansturen gaat via de remote-ingang, met een relais van de CORE PRO of IN-OUT-X.
- Controleer of je Victron-omvormer VE.Direct heeft. Dan kun je die wel uitlezen.

---

## Aanpassingen voor rev C (samengevat)
1. Groep 208 CORE PRO: 2A → **5A**
2. Groep 211 IN-OUT-X PRO: → **5A**
3. Groepen 209/210 Dimmy PRO: belasting zonder de RGBWW-strips is laag. Zekering volgens de werkelijke belasting, maximaal **30A** (fabrikant).
4. **RGBWW-plafond- en dakrekstrips via externe RGBW(W)-versterkers**, elk op een eigen Fusy-groep
5. USB-C (Delivery): **15A** (fabrikant)
6. **Nieuw:** voeding LTE Bridge 5V/3A USB-C
7. S40: klemmaat en vermogen controleren
8. Autoterm: Air 2D + Flow 5D tegelijk? → Pekaway
9. 4e RuuviTag → Pekaway
10. STR1 dieseltank: montage bovenop de tank mogelijk?
