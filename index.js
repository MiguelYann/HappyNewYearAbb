const fs = require("fs");

const FILE_PARCELS = "Fichier1.txt";
const FILE_NUMBER_PARCEL = "Fichier2.txt";
const parcel = new Map();
const trackParcels = () => fs.readFileSync(FILE_PARCELS, "utf8");

const datas = trackParcels().split("\n");

const fake = datas.flatMap((bee) => bee.split(":"));
for (let i = 1; i < fake.length; i++) {
    if (i % 2 !== 0) {
        parcel.set(fake[i - 1], fake[i]);
    }
}

const trackNumbersOfParcel = () => fs.readFileSync(FILE_NUMBER_PARCEL, "utf8");

const keys = trackNumbersOfParcel().split("\n");
const keyMap = parcel.keys();

for (const k of keyMap) {
    const isThere = keys.includes(k);
    if (!isThere) {
        console.log(parcel.get(k));
    }
}