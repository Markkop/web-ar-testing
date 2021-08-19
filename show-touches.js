// Credits: https://github.com/ipepe/show-touches-js
(function() {
  console.log("show-touch-js loaded!");
  var svg_body =
    "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cellipse opacity='0.65' ry='50' rx='50' id='svg_1' cy='100' cx='100' stroke-width='100' stroke='%23000' fill='%23000'/%3E%3Cellipse opacity='0.55' ry='35' rx='35' id='svg_2' cy='100' cx='100' stroke-width='100' stroke='%23FFF' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E";
  var img = document.createElement("img");
  img.src = svg_body;
  img.style.width = "3em";
  img.style.height = "3em";
  img.style.display = "none";
  img.style.position = "absolute";
  document.addEventListener("DOMContentLoaded", function() {
    document.body.append(img);
    var showButtonHandler = function(event) {
      img.style.display = "";
      img.style.left = "calc(" + event.touches[0].clientX + "px - 2em)";
      img.style.top = "calc(" + event.touches[0].clientY + "px - 1.5em)";
    };
    window.addEventListener("touchmove", showButtonHandler);
    window.addEventListener("touchstart", showButtonHandler);
    window.addEventListener("touchend", function(event) {
      img.style.display = "none";
    });
  });
})();
