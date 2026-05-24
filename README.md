# Caveman-eduNL – Holenman voor de klas

Welkom in het holenklaslokaal.  
Deze skill voegt een onderwijslaag toe aan [`caveman-NL`](https://github.com/E-AI-MODEL/caveman-NL).  
De ingebouwde didactische filter is gebaseerd op een eigen set GAMMA-principes, ontwikkeld voor deze onderwijscontext.

## Waarom?

Holenman-praat is krachtig, maar in het onderwijs kan te veel compressie schadelijk zijn.  
Een leerling die de helft van de uitleg mist, bouwt schijnbegrip op.  
Deze skill zorgt dat je slim comprimeert: waar het kan, maar niet waar het leren schaadt.

## Wat kun je ermee?

- **/caveman-teach** – didactisch verantwoorde uitleg, automatisch met scaffolding.
- **/caveman-check** – stel checkvragen en ontmasker schijnbegrip.
- **/caveman-scaffold** – bied uitleg in drie niveaus: vol, vuur, speer.
- **Leerling-modus** – veilig, volledig waar nodig.
- **Docent-modus** – krachtige compressie voor eigen gebruik.

## Structuur

```text
Caveman-eduNL/
├── ssot/
│   └── caveman-edu.yaml
├── skill-caveman-edu.md
├── commands/
│   ├── caveman-teach.md
│   ├── caveman-check.md
│   └── caveman-scaffold.md
├── rubrics/
│   └── gamma-filter.md
└── README.md
```

## Installatie

1. Clone of installeer [`caveman-NL`](https://github.com/E-AI-MODEL/caveman-NL) als basis-skill.
2. Voeg `skill-caveman-edu.md` toe aan je LLM-interface, apart of als aanvulling op `skill-caveman-nl.md`.
3. Optioneel: importeer `ssot/caveman-edu.yaml` in je eigen tools.

## Afhankelijkheid

Deze repo is de onderwijslaag. De basislaag staat hier:

- [`E-AI-MODEL/caveman-NL`](https://github.com/E-AI-MODEL/caveman-NL)

## Credits

- Holenman-architectuur: gebaseerd op [echohive42/caveman](https://github.com/echohive42/caveman), vertaald en uitgebreid in `caveman-NL`.
- Didactisch model: eigen ontwikkeling voor `Caveman-eduNL`.

---

*Mond klein als het kan, maar het brein van de leerling altijd groot.*
