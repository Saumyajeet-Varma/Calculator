let key0 = document.querySelector("#b0");
let key1 = document.querySelector("#b1");
let key2 = document.querySelector("#b2");
let key3 = document.querySelector("#b3");
let key4 = document.querySelector("#b4");
let key5 = document.querySelector("#b5");
let key6 = document.querySelector("#b6");
let key7 = document.querySelector("#b7");
let key8 = document.querySelector("#b8");
let key9 = document.querySelector("#b9");
let add = document.querySelector("#add");
let sub = document.querySelector("#subtract");
let mlp = document.querySelector("#multiply");
let div = document.querySelector("#divide");
let prt = document.querySelector("#percentage");
let dec = document.querySelector("#decimal");
let del = document.querySelector("#del");
let clr = document.querySelector("#clr");
let eql = document.querySelector("#result");
let opspace = document.querySelector("#output-space");
let modebtn = document.querySelector("#mode");
let page = document.querySelector("#page");
let main = document.querySelector("#main");
let btns = document.querySelectorAll("button");

let mode = "light";

key0.addEventListener("click", () => {
    opspace.value += '0';
});
key1.addEventListener("click", () => {
    opspace.value += '1';
});
key2.addEventListener("click", () => {
    opspace.value += '2';
});
key3.addEventListener("click", () => {
    opspace.value += '3';
});
key4.addEventListener("click", () => {
    opspace.value += '4';
});
key5.addEventListener("click", () => {
    opspace.value += '5';
});
key6.addEventListener("click", () => {
    opspace.value += '6';
});
key7.addEventListener("click", () => {
    opspace.value += '7';
});
key8.addEventListener("click", () => {
    opspace.value += '8';
});
key9.addEventListener("click", () => {
    opspace.value += '9';
});
add.addEventListener("click", () => {
    opspace.value += '+';
});
sub.addEventListener("click", () => {
    opspace.value += '-';
});
mlp.addEventListener("click", () => {
    opspace.value += '*';
});
div.addEventListener("click", () => {
    opspace.value += '/';
});
prt.addEventListener("click", () => {
    opspace.value += '%';
});
dec.addEventListener("click", () => {
    opspace.value += '.';
});

del.addEventListener("click", () => {
    opspace.value = opspace.value.slice(0, -1);
});

clr.addEventListener("click", () => {
    opspace.value = '';
});

eql.addEventListener("click", () => {
    try {
        opspace.value = eval(opspace.value)
    }
    catch (err) {
        alert("INVALID");
    }
});

modebtn.addEventListener("click", () => {
    if (mode == "dark") {
        page.classList.replace("container-dark", "container-light");

        main.classList.replace("calculator-dark", "calculator-light");

        opspace.classList.replace("input-dark", "input-light");

        btns.forEach((btn) => {
            btn.classList.replace("btn-dark", "btn-light");
        })

        eql.classList.replace("equal-dark", "equal-light");

        modebtn.classList.replace("mode-dark", "mode-light");
        modebtn.innerText = "Dark Mode";

        mode = "light";
    }
    else {
        page.classList.replace("container-light", "container-dark");

        main.classList.replace("calculator-light", "calculator-dark");

        opspace.classList.replace("input-light", "input-dark");

        btns.forEach((btn) => {
            btn.classList.replace("btn-light", "btn-dark");
        })

        eql.classList.replace("equal-light", "equal-dark");

        modebtn.classList.replace("mode-light", "mode-dark");
        modebtn.innerText = "Light Mode";

        mode = "dark";
    }
});