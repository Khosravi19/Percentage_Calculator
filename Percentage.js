let button = document.querySelector("button");
let total = document.querySelector("#total");
let False = document.querySelector("#false");
let True = document.querySelector("#true");

True.addEventListener("change", function () {
  true_value = Number(True.value);
});

False.addEventListener("change", function () {
  false_value = Number(False.value);
});

total.addEventListener("change", function () {
  all_value = Number(total.value);
});

button.addEventListener("click", function () {
  if (false_value + true_value == all_value) {
    document.getElementById("Percentage").style.display = "block";
    document.getElementById("Percentage").innerHTML =
      (true_value / all_value) * 100 + " %";
    document.body.style.backgroundColor = "#1a29a3";
  } else {
    document.body.style.backgroundColor = "red";
    alert("لطفا تعداد پاسخ صحیح و غلط را بررسی کنید");
  }
});

button.addEventListener("blur", function () {
  document.getElementById("Percentage").style.display = "none";
});
