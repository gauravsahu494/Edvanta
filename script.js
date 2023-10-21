// Get the DOM elements
const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");
const lockButton = document.getElementById("lock-button");
const codeContainer = document.getElementById("code-container");

// Add an event listener for the Copy button
copyButton.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.value = codeContainer.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
});

// Add an event listener for the Save button (you can implement your save logic here)
saveButton.addEventListener("click", () => {
    // Implement save functionality here
    alert("Saved!");
});

// Add an event listener for the Lock/Unlock button
lockButton.addEventListener("click", () => {
    codeContainer.contentEditable = !codeContainer.isContentEditable;
    lockButton.classList.toggle("locked");
    lockButton.textContent = codeContainer.isContentEditable ? "Lock" : "Unlock";
});
