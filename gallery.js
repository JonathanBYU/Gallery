const gallerySelection = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImg = modal.querySelector("img");
const closeViewer = modal.querySelector(".close-viewer");

gallerySelection.addEventListener('click', (event) => {
    if (event.target.src) {
        modalImg.src = event.target.src.replace("-sm", "-full");
        modal.showModal();
    }
});

closeViewer.addEventListener('click', function() {
    modal.close();
});

document.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.close();
    }
})