document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("conferenceForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const papersInput = document.getElementById("papersInput").files[0];
    const sessionInput = document.getElementById("sessionInput").value;
    const speakerInput = document.getElementById("speakerInput").value;

    if (!papersInput || sessionInput === "" || speakerInput === "") {
      alert("Please fill in all fields.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const csvContent = e.target.result;
      const formData = {
        papers: csvContent, // Store the CSV file content
        session: sessionInput,
        speakers: speakerInput,
      };
      localStorage.setItem("conferenceData", JSON.stringify(formData));

      window.location.href = "schedule.html";
    };
    reader.readAsText(papersInput);
  });
});
