document.addEventListener("DOMContentLoaded", function() {
  const repos = [
    "repos/repo1.html",
    "repos/repo2.html"
  ];

  const reposContainer = document.getElementById("repos");

  repos.forEach(repo => {
    fetch(repo)
      .then(response => response.text())
      .then(data => {
        const repoElement = document.createElement("div");
        repoElement.className = "repo";
        repoElement.innerHTML = data;
        Prism.highlightAllUnder(repoElement);
        reposContainer.appendChild(repoElement);
      })
      .catch(error => console.error('Error loading repo:', error));
  });
});
