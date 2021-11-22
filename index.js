const fs = require('fs');

const FILE_PARCELS = 'Fichier1.txt';
const FILE_NUMBER_PARCEL = 'Fichier2.txt';
const parcel = new Map();

const readContentAndRemoveCarriage = file => fs.readFileSync(file, 'utf8').split('\n');

const fake = readContentAndRemoveCarriage(FILE_PARCELS).flatMap( bee => bee.split(':'));
const realParcels = readContentAndRemoveCarriage(FILE_NUMBER_PARCEL).flatMap( bee => bee.split(':'));

for (let i = 1; i < fake.length; i++) {
  if (i % 2 !== 0) {
    parcel.set(fake[i - 1], fake[i]);
  }
}

for (const k of parcel.keys()) {
  if (!realParcels.includes(k)) {
    console.log(parcel.get(k));
  }
}
