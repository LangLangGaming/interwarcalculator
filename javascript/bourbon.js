function numberWithCommas(x) {
    if (x === "" || x === ",") {
        return "";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function removeCommas(x) {
    return x.toString().replace(/,/g, '');
}

function bourbonPopulation() {
    let population = parseFloat(removeCommas(document.getElementById("populationOriginalGrowth").value)) || 0;
    let stability = parseFloat(removeCommas(document.getElementById("stability").value)) || 0;
    if (stability == 10) {
        let population10 = population * (6 / 100);
        let output = population + population10;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population10) + " increase in population";
    } else if (stability == 9) {
        let population9 = population * (5 / 100);
        let output = population + population9;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population9) + " increase in population";
    } else if (stability == 8) {
        let population8 = population * (4 / 100);
        let output = population + population8;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population8) + " increase in population";
    } else if (stability == 7) {
        let population7 = population * (3 / 100);
        let output = population + population7;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population7) + " increase in population";
    } else if (stability == 6) {
        let population6 = population * (2 / 100);
        let output = population + population6;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population6) + " increase in population";
    } else if (stability == 5) {
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(population) + " (There is no change in population).";
    } else if (stability == 4) {
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(population) + " (There is no change in population).";
    } else if (stability == 3) {
        let population3 = population * (1 / 100);
        let output = population - population3;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population3) + " decrease in population";
    } else if (stability == 2) {
        let population2 = population * (2 / 100);
        let output = population - population2;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population2) + " decrease in population";
    } else if (stability == 1) {
        let population1 = population * (3 / 100);
        let output = population - population1;
        document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(population1) + " decrease in population";
    }
}

function bourbonBudget() {
    let population = parseFloat(removeCommas(document.getElementById('populationOriginalBudget').value)) || 0;
    let taxValue = parseFloat(removeCommas(document.getElementById('tax').value));
    let tax = taxValue / 100;
    let provinceCount = parseFloat(removeCommas(document.getElementById('provinceCount').value)) || 0;
    
    // Ensure tax is not zero to avoid division by zero
    if (tax === 0) {
        document.getElementById('outputBourbonBudget').innerHTML = "Tax percentage cannot be 0";
        document.getElementById('outputStabilityDifference').innerHTML = "";
        return;
    }
    
    let taxation = (population / provinceCount) * tax;
    let budget = numberWithCommas(taxation * provinceCount)

    document.getElementById('outputBourbonBudget').innerHTML = budget;

    if (taxValue < 18) {
        let diff = 18 - taxValue;
        document.getElementById('outputStabilityDifference').innerHTML = "Your implemented tax is lower than the default, therefore your citizens are happy and you receive a +" + diff + " stability";
    } else if (taxValue == 18) {
        document.getElementById('outputStabilityDifference').innerHTML = "Your stability does not change.";
    } else if (taxValue > 18) {
        let diff = taxValue - 18;
        document.getElementById('outputStabilityDifference').innerHTML = "Your implemented tax is higher than the default, therefore your citizens aren't that happy and you lose -" + diff + " stability";
    }
}

function formatInputValue(inputElement) {
    let value = removeCommas(inputElement.value);
    inputElement.value = numberWithCommas(value);
}

document.getElementById("populationOriginalGrowth").addEventListener("input", function () {
    formatInputValue(this);
});

document.getElementById("stability").addEventListener("input", function () {
    formatInputValue(this);
});

document.getElementById("populationOriginalBudget").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});

document.getElementById("tax").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});

document.getElementById("provinceCount").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});
