const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    // this sets two alternatives for a particular variable
    // it handles the "undefined case" for when there is no
    // dataset for any html element
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(item => item.addEventListener("change", handleUpdate));
inputs.forEach(item => item.addEventListener("mousemove", handleUpdate));
