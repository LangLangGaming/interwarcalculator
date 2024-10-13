function numberWithCommas(x) {
    if (x === "" || x === ",") {
        return "";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function removeCommas(x) {
    return x.toString().replace(/,/g, '');
}

function calculatePopulation() {
    let populationOriginal = parseFloat(removeCommas(document.getElementById("populationOriginal").value)) || 0;
    let multiplier = parseFloat(removeCommas(document.getElementById("multiplier").value)) / 100 || 0; // Convert multiplier to percentage
    let popAdd = populationOriginal * multiplier;
    let totalPop = numberWithCommas(populationOriginal + popAdd);
    document.getElementById("outputPopulation").innerHTML = totalPop || 0;
}

function calculateBudget() {
    let population = parseFloat(removeCommas(document.getElementById("population").value)) || 0;
    let gdp = parseFloat(removeCommas(document.getElementById("gdp").value)) || 0;
    let total = population * gdp;
    let totalBudget = total * 2.5;
    let formattedBudget = numberWithCommas(totalBudget);
    document.getElementById("outputBudget").innerHTML = formattedBudget || 0;
}

function calculateCore() {
    let corepopulation = parseFloat(removeCommas(document.getElementById("corepopulation").value)) || 0;
    let noncorepopulation = parseFloat(removeCommas(document.getElementById("noncorepopulation").value)) || 0;
    let coregdp = parseFloat(removeCommas(document.getElementById("coregdp").value)) || 0;
    let noncoregdp = parseFloat(removeCommas(document.getElementById("noncoregdp").value)) || 0;
    let coreadded = corepopulation * coregdp;
    let coretotal = coreadded * 2.5;
    let noncoreadded = noncorepopulation * noncoregdp;
    let noncoretotal = noncoreadded * 1.5;
    let totalNonCoreBudget = numberWithCommas(coretotal + noncoretotal);
    document.getElementById("outputNonCoreBudget").innerHTML = totalNonCoreBudget || 0;
}

function formatInputValue(inputElement) {
    let value = removeCommas(inputElement.value);
    inputElement.value = numberWithCommas(value);
}

document.getElementById("populationOriginal").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("multiplier").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("population").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("gdp").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("corepopulation").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("noncorepopulation").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("coregdp").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("noncoregdp").addEventListener("input", function () {
    formatInputValue(this);
});
