# Caveman-eduNL – Holenman voor de klas

Welkom in het holenklaslokaal.  
Deze skill voegt een onderwijslaag toe aan [`caveman-NL`](https://github.com/E-AI-MODEL/caveman-NL).  
De ingebouwde didactische filter is gebaseerd op een eigen set GAMMA-principes, ontwikkeld voor deze onderwijscontext.

## Waarom?

Holenman-praat is krachtig, maar in het onderwijs kan te veel compressie schadelijk zijn.  
Een leerling die de helft van de uitleg mist, bouwt schijnbegrip op.  
Deze skill zorgt dat je slim comprimeert: waar het kan, maar niet waar het leren schaadt.

## Snel starten

Installeer eerst de basislaag:

```bash
npx -y github:E-AI-MODEL/caveman-NL -- --with-init
```

Installeer daarna deze onderwijslaag:

```bash
npx -y github:E-AI-MODEL/Caveman-eduNL -- --with-init
```

Dit kopieert de onderwijs-skill naar:

```text
~/.caveman-nl/skills/caveman-edunl/SKILL.md
```

Met `--with-init` schrijft de installer ook een blok naar `AGENTS.md` in je huidige repo.

## Gebruik

```text
/caveman-teach fotosynthese
/caveman-check "Waarom heeft een plant licht nodig?"
/caveman-scaffold zwaartekracht
```

## Wat kun je ermee?

- **/caveman-teach** – didactisch verantwoorde uitleg, automatisch met scaffolding.
- **/caveman-check** – stel checkvragen en ontmasker schijnbegrip.
- **/caveman-scaffold** – bied uitleg in drie niveaus: vol, vuur, speer.
- **Leerling-modus** – veilig, volledig waar nodig.
- **Docent-modus** – krachtige compressie voor eigen hergebruik.

## Wat zit erin?

- `SKILL.md` – echte skill-entrypoint met YAML-frontmatter
- `bin/install.js` – Node-installer
- `install.sh` en `install.ps1` – lokale shims
- `package.json` – npx/bin metadata
- `commands/` – commanddocumentatie
- `rubrics/gamma-filter.md` – didactisch filter
- `ssot/caveman-edu.yaml` – specificatie

## Structuur

```text
Caveman-eduNL/
├── SKILL.md
├── bin/
│   └── install.js
├── ssot/
│   └── caveman-edu.yaml
├── skill-caveman-edu.md
├── commands/
│   ├── caveman-teach.md
│   ├── caveman-check.md
│   └── caveman-scaffold.md
├── rubrics/
│   └── gamma-filter.md
├── package.json
├── install.sh
├── install.ps1
└── README.md
```

## Verwijderen

```bash
npx -y github:E-AI-MODEL/Caveman-eduNL -- --uninstall
```

## Afhankelijkheid

Deze repo is de onderwijslaag. De basislaag staat hier:

- [`E-AI-MODEL/caveman-NL`](https://github.com/E-AI-MODEL/caveman-NL)

## Herkomst

- Originele maker van caveman: [Julius Brussee](https://github.com/JuliusBrussee)
- Originele repo: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
- Deze repo: Nederlandstalige onderwijsvariant bovenop `caveman-NL`

## Credits

- Caveman-concept: Julius Brussee.
- NL-variant en onderwijslaag: deze repo's.
- Didactisch model: eigen ontwikkeling voor `Caveman-eduNL`.

---

*Mond klein als het kan, maar het brein van de leerling altijd groot.*
