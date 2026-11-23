# Zekeringindeling – revisie B (voorstel)

**Status:** voorstel, nog niet definitief. Rev A was de *Consumption Mapping Tool*. Rev B is gebaseerd op fabrieksgegevens en metingen uit de praktijk. Rev C wordt de definitieve indeling, nadat de verbruikers zijn vastgesteld en gemeten met een tangstroommeter of de Pekaway-shunt.

## Uitgangspunten

1. **De zekering beschermt de kabel, niet het apparaat.** De kabel moet minstens zo zwaar zijn als de zekering.
2. **Zekering ≥ 1,25 × de continue stroom.** Bij apparaten met een motor of gloeibougie kijk je ook naar de startpiek. Is die korter dan ±1 s, dan houdt een ATO-zekering die. Duurt de piek minuten (gloeifase van een kachel), dan moet de zekering boven die piek liggen.
3. **Lampen via de Dimmy PRO, schakelen via de IN-OUT-X PRO.** Zo krijgen de strips geen eigen Fusy-groep meer en komen er groepen vrij.
4. **In principe één verbruiker per groep.** Alleen kleine verbruikers met dezelfde functie op dezelfde plek mogen samen, en dan alleen als de zekering ook de dunste aftakking beschermt (bijv. de 2 waterkleppen, de 3 STR1-sensoren).
5. **Kritieke verbruikers apart:** CORE PRO, verwarming en koelkast. Een fout elders mag die niet uitschakelen.
6. **Spanningsval ≤ 3 %** heen en terug bij de maximale continue stroom.

## Gemeten en opgegeven waarden

| Apparaat | Continu | Start / piek | Bron |
|---|---|---|---|
| Autoterm Air 2D 24V | 10–29 W (0,4–1,2 A) | gloeibougie 2,5–3,4 A bij 18V (±60 W), 1–2 min | Autoterm-handleiding / reparatiehandleiding |
| Autoterm Flow 5D 24V | 42 W (1,75 A), incl. pomp | 120 W (5 A) tijdens de start (±100 s) | Autoterm-specificaties |
| Vitrifrigo Slim 150 (Secop BD) | nominaal 70 W | korte inschakelpiek (ms). Secop adviseert 7,5 A bij 24V | Vitrifrigo / Secop-datasheet |
| Ogo composttoilet (12V) | ventilator 20 mA. Roerwerk gemiddeld 1,8 A per cyclus van 45 s | roerwerk 5 A nominaal, piek 7,5 A. Advies: zekering 10 A | Ogo-handleiding |
| MaxxFan Deluxe (12V) | tot ±5 A op de hoogste stand | ±9 A bij het starten | etrailer / MaxxAir |
| MaxxFan Dome Plus (12V) | max 2 A (ventilator + licht) | interne zekering 5 A | etrailer / MaxxAir |
| Starlink Mini | 20–40 W gemiddeld, 15 W stand-by | 40–90 W de eerste 1–2 min. Heeft een USB-PD-bron van 100 W nodig | Starlink / metingen |
| Pekaway Delivery DUAL | max 145 W → ±6,7 A bij 24V | — | Pekaway |
| Pekaway IN-OUT-X PRO | module zelf: laag | relais 3× 10 A, 3× 16 A, 2× 40 A (potentiaalvrij) | Pekaway |
| Pekaway Dimmy (oude versie, ter referentie) | — | totaal max 30 A, voeding 4 mm² | Pekaway-documentatie |

## Voorstel per groep

### Fusy Maxi 1 – 24V

| Groep | Verbruiker | Rev A | **Rev B** | Kabel | Reden |
|---|---|---|---|---|---|
| 201 | CHX 1 | 10 A | **3 A** | 0,75 mm² | ventilator < 1 A |
| 202 | CHX 2 | 10 A | **3 A** | 0,75 mm² | idem |
| 203 | Starlink Mini (Delivery Starlink) | 15 A | **7,5 A** | 1,5 mm² | piek ±90 W ≈ 4 A |
| 204 | USB-C DUAL bank (3 m) | 15 A | **10 A** | 1,5 mm² | 6,7 A max |
| 205 | USB-C DUAL buitenkeuken (5 m) | 15 A | **10 A** | **2,5 mm²** | 1,5 mm² geeft 3,2 % val |
| 206 | USB-C DUAL slaapkamer (4 m) | 15 A | **10 A** | 1,5 mm² | 2,5 % val |
| 207 | USB-C DUAL keuken (5 m) | 15 A | **10 A** | **2,5 mm²** | idem als 205 |
| 208 | CORE PRO | 2 A | 2 A | 0,75 mm² | kritiek, apart houden |
| 209 | Dimmy PRO 1 (alle 24V-verlichting, deel 1) | 20 A | 20 A | 2,5 mm² | voedt ledstrips 401–405 |
| 210 | Dimmy PRO 2 | 20 A | 20 A | 2,5 mm² | idem |
| 211 | IN-OUT-X PRO (alleen module) | 20 A | **3 A** | 0,75 mm² | de relaiscontacten worden vanuit eigen groepen gevoed |
| 212 | Waterpomp | 10 A | 10 A | 1,5 mm² | model nog onbekend |
| 213–215 | Warmtelint 1–3 | 5 A | 5 A | 0,75 mm² | 2,1 A. Bij een zelfregelend lint is de koude inschakelstroom 3–5× hoger, dus 5 A houden |
| 216 | Koelkast Vitrifrigo Slim 150 (5 m) | 10 A | **7,5 A** | **2,5 mm²** | Secop-advies 7,5 A. Volgens de lengtetabel in de handleiding is 2,5 mm² nodig bij 5 m |
| 217 | Dashcam Viofo T340 | 5 A | **3 A** | 0,75 mm² | |
| 218 | 3× Simarine STR1 | 2 A | 2 A | 0,75 mm² | |

### Fusy Maxi 2 – 24V

| Groep | Verbruiker | Rev A | **Rev B** | Kabel | Reden |
|---|---|---|---|---|---|
| 401–405 | Ledstrips | 5–10 A per stuk | **→ Dimmy-uitgangen** | — | 5 groepen vrij |
| 406–407 | MaxxFan Dome-licht | 1 A | **→ Dimmy (RGBW)** | — | de originele koudwitte 12V-led wordt vervangen door 24V RGBWW. Groepen komen vrij |
| 408 | 2 kleppen water (vers + grijs, 24V) | — | **3 A** | 0,75 mm² | zelfde functie, via relais IN-OUT-X PRO |
| 409 | kleppen verwarming V1–V4 (24V, zie blad 4) | — | **3 A** | 0,75 mm² | apart van water: een fout aan de waterkant mag de verwarming niet stilleggen |
| 412 / 415 | Vloeistofpomp(en) | ? / 5 A | 5 A | 0,75 mm² | is dit de eigen pomp van de Flow 5D (zit in de 42 W)? |
| 413 | Air 2D | ? | **10 A** | 1,5 mm² | start ±3 A gedurende 1–2 min |
| 414 | Flow 5D | ? | **10 A** | 1,5 mm² | start 5 A gedurende ±100 s |
| 416 | Orion 24/12-30 | 20 A | 20 A | 4 mm² | |
| 417 | Ablemail AMT12-2 | 5 A | **3 A** | 0,75 mm² | 1,5 A |

### Fusy Standard 1 – 12V

| Groep | Verbruiker | Rev A | **Rev B** | Kabel | Reden |
|---|---|---|---|---|---|
| 301 | Ogo-toilet | 10 A | 10 A | 1,5 mm² | advies Ogo-dealer. Piek 7,5 A |
| 302 | MaxxFan Deluxe Compact | 5 A | **7,5 A** | 1,5 mm² | tot 5 A continu, ±9 A bij het starten. 5 A kan doorslaan |
| 303–304 | MaxxFan Dome (badkamer, keuken) | 5 A | **3 A** | 0,75 mm² | max 2 A, interne zekering 5 A |
| 305–306 | MoonBox | 5 A | 2 A | 0,75 mm² | |

## Verlichting via 2× Dimmy PRO (voorstel, rev B2)

**Eigen meting RGBWW-strip, 4 m bij 24V:** blauw 61 W (2,5 A), rood ±30 W (1,3 A). Groen, warm wit en koud wit nog meten.
De mappingtool rekende met 100 W voor 2 plafondstrips samen. Dat is veel te laag: alleen blauw op 2 strips is al 122 W (5,1 A).
Schatting als alle 5 kanalen vol aan staan (groen ≈ blauw, wit ≈ 50 W per kanaal): ±250 W per strip van 4 m (±10 A).

De Dimmy PRO heeft 8 dimkanalen + 2 RGBW-kanalen. Met twee Dimmy's zijn er 16 gewone en 4 RGBW-uitgangen.

| Dimmy | Uitgang | Lamp | Max (schatting) |
|---|---|---|---:|
| 1 | RGBW 1 | RGBWW-plafondstrip A (4 m) | ±250 W / 10 A |
| 1 | RGBW 2 | RGBWW-ledstrip dakrek | lengte? |
| 1 | kanaal 1–2 | ledstrip bank, ledstrip keuken | 20 W |
| 2 | RGBW 1 | RGBWW-plafondstrip B (4 m), in de software gekoppeld aan A | ±250 W / 10 A |
| 2 | RGBW 2 | MaxxFan Dome keuken + badkamer (RGBWW, parallel) | ±10 W |
| 2 | kanaal 1–2 | 2× ledstrip garage | 10 W |

- **Plafond verdeeld over 2 Dimmy's in plaats van parallel op één uitgang.** Parallel is ±500 W / 20 A op één uitgang en één groep van 20 A. Dat is te krap. Bijkomend voordeel: valt één Dimmy uit, dan heb je nog licht.
- Per Dimmy dan ±10–15 A bij vol wit + kleur. Groepen 209/210 op 20 A met 2,5 mm² blijven goed.
- In de praktijk staat zelden alles op 100 %. Met een PWM-limiet van ±85 % (nodig vanwege de 28,4V laadspanning) zakt het maximum ook.
- **RGBWW heeft 5 aders**, een RGBW-uitgang heeft er 4. Dus óf de tweede wit-ader op een gewoon kanaal zetten en in de software koppelen, óf RGBW-strips kiezen. Vraag aan Pekaway of dat kan, en hoeveel stroom een RGBW-kanaal maximaal mag leveren.

## Effect op de 12V-kant als alles tegelijk aan staat

Rev A ging uit van ±208 W. Met de werkelijke maximale waarden wordt het:

| Verbruiker | Continu max | Kortstondig |
|---|---:|---:|
| Ogo (roerwerk) | 5 A | 7,5 A |
| MaxxFan Deluxe | 5 A | 9 A |
| 2× MaxxFan Dome Plus | 4 A | 4 A |
| MoonBox 2× | 1,7 A | 1,7 A |
| **Totaal** | **±16 A** | **±22 A** (als alles tegelijk start) |

→ De Orion 24/12-30 blijft de juiste keuze. Met 30 A vangt hij ook de gelijktijdige startpieken op.

## Te doen voor rev C

- [ ] Model van de waterpomp (212) en de vloeistofpompen (412/415)
- [ ] Zijn de 24V-kleppen leverbaar? Stroom per klep
- [ ] Dimmy PRO: stroom per RGBW-kanaal en of een 5e (wit) kanaal te koppelen is
- [ ] RGBWW meten: groen, warm wit, koud wit (per 4 m), en alles tegelijk op 100 %
- [ ] Lengte van de dakrekstrip
- [ ] Specsheets van de Dimmy PRO en IN-OUT-X PRO opvragen (stroom per kanaal, aanbevolen voedingszekering)
- [ ] Na de inbouw per groep meten (continu + start) en zekeringen bijstellen
