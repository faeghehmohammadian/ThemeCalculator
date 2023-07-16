const themeBtn = document.querySelector(".menu");
let themeCounter = 0;
const root = document.querySelector(":root");
changeTheme();
function changeTheme() {
    switch (themeCounter) {
        //black ⇩
        case 0:
            root.style.cssText = `
                --font-family: sans-serif;
                --text-coler:black;
                --main-bgcolor:rgb(245, 245, 245);
                --btn-color:rgb(255, 255, 255);
                --btn-hover:rgb(225, 225, 225);
                --btncolor-color:rgb(235, 235, 235);
                --equalbtn:rgb(48, 82, 196);
                --equalbtn-hover: rgb(62, 95, 202);
                --radius-btns: 4px;
                `;
            break;
        //white ⇩
        case 1:
            root.style.cssText = `
                --font-family: monospace;
                --main-bgcolor:#D6EE73;
                --btn-color: #98D42A;
                --btn-hover:#36A533;
                --btncolor-color:#72D429;
                --equalbtn:rgb(48, 82, 196);
                --equalbtn-hover: rgb(62, 95, 202);
                --radius-btns: 20px;
                `;
            break;
        case 2:
            root.style.cssText = `
                --font-family: cursive;
                --main-bgcolor:#C0ECFB;
                --btn-color:  #73D6F3;
                --btn-hover: #006CBF;
                --btncolor-color:#1AC8F2;
                --equalbtn:rgb(48, 82, 196);
                --equalbtn-hover: rgb(62, 95, 202);
                --radius-btns: 15px 0;
                `;
            break;
        case 3:
            root.style.cssText = `
                --text-coler:rgb(252, 251, 251);
                --font-family:serif;
                --main-bgcolor:rgb(63, 58, 58);
                --btn-color:rgb(88, 84, 84);
                --btn-hover:rgb(119, 107, 107);
                --btncolor-color:rgb(82, 62, 62);
                --radius-btns: 0 20px;
                `;
            break;
    }
}
themeBtn.addEventListener("click", function () {
    if (themeCounter > 2) {
        themeCounter = 0;
        localStorage.setItem("localTheme", 0);
    } else themeCounter++;
    changeTheme();
});