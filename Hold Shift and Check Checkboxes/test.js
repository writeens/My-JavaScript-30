// DOM Manipulation
const chkboxes = document.querySelectorAll("input");

// Listen for all the checkboxes
chkboxes.forEach((chkbox) => { chkbox.addEventListener("click", active); });

// Variables
let firstCheckBox = "";


// Functions
function active(e) {
    let flag = false;

    if (e.shiftKey && this.checked) {
        chkboxes.forEach((chkbox) => {
            console.log(this);
            if (chkbox === firstCheckBox || chkbox === this) {
                flag = !flag;
            }
            if (flag) {
                chkbox.checked = true;
            }
        });
    }
    firstCheckBox = e.target;
}
