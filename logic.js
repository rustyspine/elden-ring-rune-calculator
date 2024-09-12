/*function calculateSum() {
    let x = 0;
    let total = 0;
    let level = parseInt(document.getElementById("level").value);
    let newLevel = parseInt(document.getElementById("newLevel").value);

    // Validate input
    if (isNaN(level) || isNaN(newLevel) || newLevel <= level) {
        document.getElementById('result').innerText = "Please enter valid levels.";
        return;
    }

    // Calculating the total runes required
    for (let i = 0; i < (newLevel - level); i++) {
        x = ((level + 81) - 92) * 0.02;
        if (x < 0) x = 0;
        let runeCost = Math.floor(((x + 0.1) * (((level) + 81))**2) + 1);
        level += 1;
        total += runeCost;
    }

    // Display the result
    document.getElementById('result').innerText = `You need ${total} runes to get to level ${newLevel}.`;
}*/
let level = 1
let newLevel = 500
let x = 0;
let total = 0;
let count = 0;
for (let i = 0; i < (newLevel - level); i++) {
    count++;
    x = ((level + 81) - 92) * 0.02;
    if (x < 0) x = 0;
    let runeCost = Math.floor(((x + 0.1) * (((level) + 81))**2) + 1);
    level += 0;
    total += runeCost;
}
console.log(total , count)