const container = document.querySelector(".container");
const qrCodeButton = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img")

//eventos

function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;

    qrCodeButton.innerText = `Gerando código...`;

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeButton.innerText = `Código criado`
    })

}

qrCodeButton.addEventListener("click", () => {
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
})

//Limpar QR Code

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeButton.innerText = `Gerar QR Code`
    }
})