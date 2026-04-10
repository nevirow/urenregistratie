/*********************************************************************
 * Author: Student
 * Date: 20240409
 * Description: Urenregistratie systeem - slaat gewerkte uren op in CSV
 * Usage: node uren.js
 **********************************************************************/

const readline = require('readline');
const fs       = require('fs');

// Bestandsnaam voor de CSV
const bestandsnaam = 'uren.csv';

// Maak readline interface aan voor command prompt input
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

// Functie: stel een vraag en geef het antwoord terug via Promise
function vraag(tekst) {
    return new Promise((resolve) => {
        rl.question(tekst, (antwoord) => {
            resolve(antwoord);
        });
    });
}

// Functie: schrijf header als CSV nog niet bestaat
function schrijfHeader() {
    if (!fs.existsSync(bestandsnaam)) {
        fs.writeFileSync(bestandsnaam, 'naam,datum,project,uren,omschrijving\n');
    }
}

// Functie: sla een rij op in het CSV bestand
function slaOpInCSV(naam, datum, project, uren, omschrijving) {
    const regel = `${naam},${datum},${project},${uren},${omschrijving}\n`;
    fs.appendFileSync(bestandsnaam, regel);
    console.log(`\n>> Gegevens opgeslagen in ${bestandsnaam}\n`);
}

// Hoofd async functie
async function main() {

    schrijfHeader();

    console.log('================================');
    console.log('   URENREGISTRATIE SYSTEEM');
    console.log('================================\n');

    // While loop: blijf registraties toevoegen tot gebruiker stopt
    while (true) {

        // Vragen stellen via command prompt
        const naam         = await vraag('Naam medewerker    : ');
        const datum        = await vraag('Datum (DD-MM-JJJJ) : ');
        const project      = await vraag('Projectnaam        : ');
        const uren         = await vraag('Aantal uren        : ');
        const omschrijving = await vraag('Omschrijving       : ');

        // Sla op in CSV
        slaOpInCSV(naam, datum, project, uren, omschrijving);

        // If / else: doorgaan of stoppen
        const nogEen = await vraag('Nog een registratie toevoegen? (j/n): ');

        if (nogEen === 'j' || nogEen === 'J') {
            console.log('\n--------------------------------\n');
        } else {
            break; // stop de while loop
        }
    }

    console.log(`\nKlaar! Gegevens staan in: ${bestandsnaam}`);
    console.log('Dit bestand kun je importeren in een database.\n');

    rl.close();
}

// Start het programma
main();
