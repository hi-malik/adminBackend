// Randomly generate a fake allTables JSON file

const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 31; // 16 - 26 (exclusive)

let fakeTables = [];
for (i = 1; i < numTables; i++) {
  const chairs = Math.floor(Math.random() * 7) + 2; // 2-8 (exclusive)
  const name = `Table ${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const location = ["Sala 1", "Sala 2", "Sala 3", "Pedana", "Sala Vini"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  fakeTables.push({
    name: name,
    capacity: chairs,
    // isAvailable: availability,
    isAvailable: true,
    location: location
  });
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);
