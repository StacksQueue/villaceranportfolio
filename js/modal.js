var modal = document.getElementById("modal");
var modalcontent = document.getElementsByClassName("modal-content")[0];
var btnclose = document.getElementsByName("close")[0];
var projects = document.getElementsByClassName("project-wrapper");

Array.from(projects).forEach((project, index) => {
  let projectname = project.getAttribute("name");
  project.addEventListener("click", (evt) => {
    displayIframe(projectname)
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

function displayIframe(projectname) {
  var iframe= document.createElement('iframe');
    iframe.src= './project-vtuber.html';
    iframe.width="100%"
    iframe.height="100%"
    iframe.frameBorder = 0;
    modalcontent.appendChild(iframe);
}
