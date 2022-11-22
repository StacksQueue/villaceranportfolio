var modal = document.getElementById("modal");
var btnclose = document.getElementsByName("close")[0];
var projects = document.getElementsByClassName("project-wrapper");

Array.from(projects).forEach((project) => {
  console.log(project);
  project.addEventListener("click", () => {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 1);
  });
});

btnclose.onclick = () => {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
};
