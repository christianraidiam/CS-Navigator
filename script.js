document.addEventListener("DOMContentLoaded", function () {
  const openTabButton = document.getElementById("openTabButton");

  openTabButton.addEventListener("click", function () {
    const selector = document.getElementById("selector").value;
    const option = document.getElementById("option").value;
    const id = document.getElementById("idField").value;

    let url;

    if (selector === "OPF CS") {
      if (option === "Test Module") {
        url = `https://web.conformance.directory.openbankingbrasil.org.br/log-detail.html?log=${id}`;
      } else if (option === "Test Plan") {
        url = `https://web.conformance.directory.openbankingbrasil.org.br/plan-detail.html?plan=${id}`;
      }
    } else if (selector === "OPIN CS") {
      if (option === "Test Module") {
        url = `https://web.conformance.directory.opinbrasil.com.br/log-detail.html?log=${id}`;
      } else if (option === "Test Plan") {
        url = `https://web.conformance.directory.opinbrasil.com.br/plan-detail.html?plan=${id}`;
      }
    }

    if (url) window.open(url, "_blank");
  });
});
