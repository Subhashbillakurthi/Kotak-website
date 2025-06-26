function setupDropdownTrigger(idName,className) {
  const savingsLink = document.getElementById(idName); 
  const dropdown = document.querySelector(className);

  if (savingsLink && dropdown) {
    // Show dropdown on hover
    savingsLink.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });

    // Hide dropdown when mouse leaves the link or dropdown
    savingsLink.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) {
          dropdown.style.display = "none";
        }
      }, 200);
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });

    dropdown.addEventListener("mouseenter", () => {
      dropdown.style.display = "flex";
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setupDropdownTrigger("dom-drop-1", ".drop-acc");
  setupDropdownTrigger("dom-drop-2", ".drop-acc-1");
  setupDropdownTrigger("dom-drop-3", ".drop-acc-2");
  setupDropdownTrigger("dom-drop-4", ".drop-acc-3");
  setupDropdownTrigger("dom-drop-5", ".drop-acc-4");
  setupDropdownTrigger("dom-drop-6", ".drop-acc-5");
  setupDropdownTrigger("dom-drop-7", ".drop-acc-6");
});
