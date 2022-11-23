var modal = document.getElementById("modal");
var modalcontent = document.getElementsByClassName("modal-content")[0];
var btnclose = document.getElementsByName("close")[0];
var projects = document.getElementsByClassName("project-wrapper");

Array.from(projects).forEach((project) => {
  let projectname = project.getAttribute("name");
  project.addEventListener("click", () => {
    displayIframe(projectname);
    modal.style.display = "block";
  });
});

btnclose.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function displayIframe(projectname) {
  var frame = modal.querySelector("iframe");

  if (frame) frame.remove();
  var iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = 0;

  switch (projectname) {
    case "vtuber":
      iframe.src = "./project-vtuber.html";
      break;
    case "borrow-system-front":
      iframe.src = "./project-borrowsystem-front.html";
      break;
    case "borrow-system-back":
      iframe.src = "./project-borrowsystem-back.html";
      break;
    case "creator-recruitment":
      iframe.src = "./project-recruitment.html";
      break;
    case "threed-model-viewer":
      iframe.src = "./project-3d-viewer.html";
      break;
    case "school-mis":
      iframe.src = "./project-school-mis.html";
      break;
  }

  modalcontent.appendChild(iframe);
}
