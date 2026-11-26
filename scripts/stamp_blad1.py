#!/usr/bin/env python3
"""Zet de datum in de statusbox van blad 1 op de datum van vandaag.

Draai dit vlak voor het publiceren van blad 1 (repo en artifact).
"""
import datetime
import pathlib
import re
import sys

SVG = pathlib.Path(__file__).resolve().parent.parent / "docs/elektra/schema/blad1-energie-laden.svg"
vandaag = datetime.date.today().strftime("%d-%m-%Y")
tekst = SVG.read_text(encoding="utf-8")
nieuw, n = re.subn(r"Datum: \d{2}-\d{2}-\d{4}", f"Datum: {vandaag}", tekst)
if n != 1:
    sys.exit("statusbox-datum niet gevonden")
if nieuw != tekst:
    SVG.write_text(nieuw, encoding="utf-8")
    print(f"blad 1 datum -> {vandaag}")
else:
    print(f"blad 1 datum was al {vandaag}")
