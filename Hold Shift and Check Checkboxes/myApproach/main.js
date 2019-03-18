// DOM Manipulation
const chkboxes = document.querySelectorAll("input");

// Variables
let [firstCheckBox, secondCheckBox] = ["", ""];
let click = 1;
let flag = false;
// Event Listeners
window.addEventListener("keydown", selectmultiple);
chkboxes.forEach((chkbox) => { chkbox.addEventListener("click", active); });

// Functions
function selectmultiple() {
    flag = true;
}

// listen to the checkboxes
function active() {
    if (click % 2 !== 0) {
        firstCheckBox = parseInt(this.dataset.position, 10);
    } else {
        secondCheckBox = parseInt(this.dataset.position, 10);
        if (flag) {
            if (firstCheckBox < secondCheckBox) {
                for (let i = (firstCheckBox + 1); i < secondCheckBox; i += 1) {
                    chkboxes[i].checked = true;
                }
            } else if (firstCheckBox > secondCheckBox) {
                for (let i = (firstCheckBox - 1); i > secondCheckBox; i -= 1) {
                    chkboxes[i].checked = true;
                }
            }
        }
    }
    click += 1;
    flag = false;
}
