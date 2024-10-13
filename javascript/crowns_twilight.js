function numberWithCommas(x) {
    if (x === "" || x === ",") {
        return "";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function removeCommas(x) {
    return x.toString().replace(/,/g, '');
}

function twilightBudget() {
    let population = parseFloat(removeCommas(document.getElementById("population").value)) || 0;
    let gdp = parseFloat(removeCommas(document.getElementById("gdp").value)) || 0;
    let taxation = parseFloat(removeCommas(document.getElementById("taxation").value)) / 100 || 0; // Divide by 100 to treat as a percentage
    let compliance = parseFloat(removeCommas(document.getElementById("compliance").value)) || 0;
    let budget = Math.round((population * compliance) * (gdp * taxation)); // Round the result
    document.getElementById("outputTwilightBudget").innerHTML = numberWithCommas(budget);
}


function formatInputValue(inputElement) {
    let value = removeCommas(inputElement.value);
    inputElement.value = numberWithCommas(value);
}

document.getElementById("population").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("gdp").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("taxation").addEventListener("input", function () {
    formatInputValue(this);
});
document.getElementById("compliance").addEventListener("input", function () {
    formatInputValue(this);
});