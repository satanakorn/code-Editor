function display_result() {
    let codehtml = document.getElementById("html").value;
    let codecss = document.getElementById("css").value;
    let codejs = document.getElementById("js").value;
    let resultE1 = document.getElementById("result");

    try {
        let iframeDoc = resultE1.contentDocument || resultE1.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`${codehtml}<style>${codecss}</style>`);
        iframeDoc.close();
        resultE1.contentWindow.eval(codejs);
    } catch (e) {
        console.error("Error displaying result:", e);
    }
}

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
    display_result();
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("html").value = "<h1>Hello World</h1>";
    document.getElementById("css").value = "h1 { color: red; }";
    document.getElementById("js").value = "console.log('Hello World');";
    display_result();
});

document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.toggle("dark-mode");
    });
});
