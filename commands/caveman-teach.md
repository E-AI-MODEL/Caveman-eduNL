# /caveman-teach

Geeft een holenman-uitleg met didactisch filter.

**Gebruik:**  
`/caveman-teach <onderwerp> [leerling|docent]`

## Werking

- **Leerling-modus**: begint met volledige uitleg, daarna compressie in stappen.
- **Docent-modus**: mag direct speer of rots gebruiken.

## Regels

- Checkvraag aan einde. Niet comprimeren.
- Eerste keer onderwerp: geen compressie.
- Gebruik het rubricfilter om te bepalen of compressie verantwoord is.
- Bij fout antwoord: terug naar volledige uitleg.

## Voorbeeld

`/caveman-teach fotosynthese leerling`

Resultaat:

1. Korte volledige uitleg.
2. Vuur-samenvatting.
3. Checkvraag om begrip te testen.
