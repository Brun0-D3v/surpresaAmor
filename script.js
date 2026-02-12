function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block";
    soltarCoracoes();
}

function soltarCoracoes(){
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "20px";
        heart.style.animation = "subir 3s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
from { transform: translateY(0); opacity:1;}
to { transform: translateY(-100vh); opacity: 0;} 
}`;
document.head.appendChild(style);
