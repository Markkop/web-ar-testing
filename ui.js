/* global AFRAME, THREE */

var placeholderText =
  "Across the centuries encyclopaedia galactica birth preserve and cherish that pale blue dot globular star cluster venture. A still more glorious dawn awaits from which we spring concept of the number one brain is the seed of intelligence Tunguska event a mote of dust suspended in a sunbeam. The carbon in our apple pies a mote of dust suspended in a sunbeam concept of the number one gathered by gravity a very small stage in a vast cosmic arena bits of moving fluff and billions upon billions upon billions upon billions upon billions upon billions upon billions.";

function createModalWithContent(elementId) {
  var modal = document.createElement("div");
  modal.classList.add("interface");

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal");
  modalContent.innerText = elementId + placeholderText;
  modal.appendChild(modalContent);

  var closeButton = document.createElement("button");
  closeButton.innerHTML = 'Close'
  closeButton.onclick = function closeModal() {
    modalContent.remove();
  };
  modalContent.appendChild(closeButton);

  document.body.prepend(modal);
}

AFRAME.registerComponent("modal", {
  schema: {},

  init: function() {
    var elementId = this.el.id
    this.el.addEventListener("click", function() {
      createModalWithContent(elementId);
    });
  },
});
