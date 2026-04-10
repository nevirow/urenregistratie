# Urenregistratie Systeem

Een command-line applicatie in JavaScript (Node.js) om gewerkte uren te registreren en op te slaan in een CSV bestand.

## Beschrijving

De applicatie stelt een aantal vragen via de command prompt en slaat de antwoorden op in `uren.csv`. Dit bestand kan later worden geïmporteerd in een database.

## Vereisten

- [Node.js](https://nodejs.org) geïnstalleerd

## Uitvoeren

```bash
node uren.js
```

## Gebruik

```
================================
   URENREGISTRATIE SYSTEEM
================================

Naam medewerker    : Jan Jansen
Datum (DD-MM-JJJJ) : 09-04-2024
Projectnaam        : Website redesign
Aantal uren        : 6
Omschrijving       : Frontend ontwikkeling

>> Gegevens opgeslagen in uren.csv

Nog een registratie toevoegen? (j/n):
```

## CSV uitvoer

Het bestand `uren.csv` ziet er zo uit:

```
naam,datum,project,uren,omschrijving
Jan Jansen,09-04-2024,Website redesign,6,Frontend ontwikkeling
Marie Peters,09-04-2024,App ontwikkeling,8,Backend API
```

## Bestandsstructuur

```
urenregistratie/
├── src/
│   └── uren.js
├── .gitignore
└── README.md
```

## Auteur

Student — Periode 2, 2024
