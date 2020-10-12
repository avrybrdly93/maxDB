let deathBenefit = 99999;
let maxY = 0;
let dmaxYRounded = 2.5 * deathBenefit;

var slider = document.getElementById("myRange");
var output = document.getElementById("death-benefit");
let graphMax = document.getElementById("graph-limit");
let limitToDBRatio = document.getElementById("limit-ratio");
let limitToDBRatio2 = document.getElementById("limit-ratio2");
output.innerHTML = slider.value; // Display the default slider value

let slider2 = document.getElementById("myRange2");
var deathBenefitDisplay2 = document.getElementById("death-benefit2");
let graphMax2 = document.getElementById("graph-limit2");
output.innerHTML = slider2.value;

slider2.oninput = function () {
  findLimitProposed(this.value);
  deathBenefitDisplay2.innerHTML = this.value;
  graphMax2.innerHTML = maxY;
  limit = Math.round((maxY * 10) / this.value) / 10;
  limitToDBRatio2.innerHTML = limit;
};

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  findLimitCurrent(this.value);
  output.innerHTML = this.value;
  graphMax.innerHTML = maxY;
  limit = Math.round((maxY * 10) / this.value) / 10;
  limitToDBRatio.innerHTML = limit;
};

function findLimitCurrent(deathBenefit) {
  dmaxYRounded = 2.5 * deathBenefit;
  switch (true) {
    case dmaxYRounded >= 500000:
      maxY = Math.round((125001 + dmaxYRounded) / 500000) * 500000;
      break;
    case dmaxYRounded >= 250000:
      maxY = Math.round((62501 + dmaxYRounded) / 250000) * 250000;
      //console.log("this one");
      break;
    case dmaxYRounded >= 100000:
      maxY = Math.round((25001 + dmaxYRounded) / 100000) * 100000;
      // console.log(dmaxYRounded, 25001 + dmaxYRounded, maxY);
      // console.log("that one");
      break;
    case dmaxYRounded >= 50000:
      maxY = Math.round((15001 + dmaxYRounded) / 50000) * 50000;
      break;
    case dmaxYRounded >= 10000:
      maxY = Math.round((2501 + dmaxYRounded) / 10000) * 10000;
      break;
  }
}

function findLimitProposed(deathBenefit) {
  dmaxYRounded = 2.5 * deathBenefit;
  switch (true) {
    case dmaxYRounded >= 500000:
      maxY = Math.round((125001 + dmaxYRounded) / 500000) * 500000;
      break;
    case dmaxYRounded >= 250000:
      maxY = Math.round((62501 + dmaxYRounded) / 250000) * 250000;
      //console.log("this one");
      break;
    case dmaxYRounded >= 225000:
      maxY = 250000;
      break;
    case dmaxYRounded >= 100000:
      maxY = Math.round((25001 + dmaxYRounded) / 100000) * 100000;
      // console.log(dmaxYRounded, 25001 + dmaxYRounded, maxY);
      // console.log("that one");
      break;
    case dmaxYRounded >= 50000:
      maxY = Math.round((15001 + dmaxYRounded) / 50000) * 50000;
      break;
    case dmaxYRounded >= 10000:
      maxY = Math.round((2501 + dmaxYRounded) / 10000) * 10000;
      break;
  }
}

console.log(maxY);
