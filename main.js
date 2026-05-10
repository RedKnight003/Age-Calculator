document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ageForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const birthDateInput = document.getElementById("birthDate").value;
    if (!birthDateInput) {
      resultDiv.textContent = "⚠️Please enter a valid birth date.";
      return;
    }

    const birthDate = luxon.DateTime.fromISO(birthDateInput);
    const now = luxon.DateTime.now();

    if (birthDate > now) {
      resultDiv.textContent = "⚠️ Birth date cannot be in the future!";
      return;
    }

    const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

    resultDiv.innerHTML = `<p><strong>Age:</strong></p>
    <p>${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, ${Math.floor(diff.days)} days</p>`;
  });
});
