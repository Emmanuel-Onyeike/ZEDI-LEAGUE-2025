
  function revealContent() {
            document.getElementById("myModal").style.display = "flex";
        }

        // Function to close the modal
        function closeModal() {
            document.getElementById("myModal").style.display = "none";
        }
function sectionClicked(section) {
    alert(`You clicked the ${section} section!`);
}

// Modal open and close functions
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
