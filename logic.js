function calculateSum() {
    let x = 0;
    let total = 0;
    let level = parseInt(document.getElementById("level").value);
    let newLevel = parseInt(document.getElementById("newLevel").value);
    let loopValue = newLevel - level;
    // Validate input
    if (isNaN(level) || isNaN(newLevel) || newLevel <= level) {
        document.getElementById('result').innerText = "Please enter valid levels.";
        return;
    }

    // Calculating the total runes required
    for (let i = 0; i < (loopValue); i++) {
        x = ((level + 81) - 92) * 0.02;
        if (x < 0) x = 0;
        let runeCost = Math.floor(((x + 0.1) * (((level) + 81))**2) + 1);
        level += 1;
        total += runeCost;
    }

    let formattedTotal = total.toLocaleString();

    // Display the result
    document.getElementById('result').innerText = `You need ${formattedTotal} runes to get to level ${newLevel}.`;
}