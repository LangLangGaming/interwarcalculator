// Helper functions
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

    let output, populationChange;
    if (stability == 10) {
        populationChange = population * 0.06;
    } else if (stability == 9) {
        populationChange = population * 0.05;
    } else if (stability == 8) {
        populationChange = population * 0.04;
    } else if (stability == 7) {
        populationChange = population * 0.03;
    } else if (stability == 6) {
        populationChange = population * 0.02;
    } else if (stability == 5 || stability == 4) {
        populationChange = 0;
    } else if (stability == 3) {
        populationChange = population * -0.01;
    } else if (stability == 2) {
        populationChange = population * -0.02;
    } else if (stability == 1) {
        populationChange = population * -0.03;
    } else {
        populationChange = 0;
    }

    output = population + populationChange;
    let changeDescription = populationChange >= 0 ? "increase" : "decrease";
    document.getElementById('outputPopulation').innerHTML = numberWithCommas(output) + " with a " + numberWithCommas(Math.abs(populationChange)) + " " + changeDescription + " in population";
}

function bourbonBudget() {
    let population = parseFloat(removeCommas(document.getElementById('populationOriginalBudget').value)) || 0;
    let taxValue = parseFloat(removeCommas(document.getElementById('tax').value)) || 0;
    let tax = taxValue / 100;
    let devastationValue = parseFloat(removeCommas(document.getElementById('devastationValue').value)) || 0;
    let devastation = devastationValue / 100;

    // Ensure tax is not zero to avoid division by zero
    if (tax === 0) {
        document.getElementById('outputBourbonBudget').innerHTML = "Tax percentage cannot be 0";
        document.getElementById('outputStabilityDifference').innerHTML = "";
        return;
    }

    let budget;
    if (devastation === 0) {
        budget = population * tax;
    } else {
        budget = population * tax * (1 - devastation);
    }
let budgetcorrect = Math.round(budget)
    document.getElementById('outputBourbonBudget').innerHTML = numberWithCommas(budgetcorrect)

    let stabilityMessage;
    if (taxValue < 18) {
        let diff = 18 - taxValue;
        stabilityMessage = "Your implemented tax is lower than the default, therefore your citizens are happy and you receive a +" + diff + " stability";
    } else if (taxValue == 18) {
        stabilityMessage = "Your stability does not change.";
    } else {
        let diff = taxValue - 18;
        stabilityMessage = "Your implemented tax is higher than the default, therefore your citizens aren't that happy and you lose -" + diff + " stability";
    }

    document.getElementById('outputStabilityDifference').innerHTML = stabilityMessage;
}

function formatInputValue(inputElement) {
    let value = removeCommas(inputElement.value);
    inputElement.value = numberWithCommas(value);
}

// Event listeners
document.getElementById("populationOriginalGrowth").addEventListener("input", function () {
    formatInputValue(this);
    bourbonPopulation();
});

document.getElementById("stability").addEventListener("input", function () {
    formatInputValue(this);
    bourbonPopulation();
});

document.getElementById("populationOriginalBudget").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});

document.getElementById("tax").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});

document.getElementById("devastationValue").addEventListener("input", function () {
    formatInputValue(this);
    bourbonBudget();
});


