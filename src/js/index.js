const btnSubmit = document.querySelector(".btn-submit");
const btnAll = document.querySelectorAll(".btn");

btnAll.forEach((botao) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".btn.selecionado");
    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
  });
});

function btnClicado(event) {
  let booleano = event;

  if (
    booleano === "1" ||
    booleano === "2" ||
    booleano === "3" ||
    booleano === "4" ||
    booleano === "5"
  ) {
    if (
      btnSubmit.addEventListener("click", () => {
        Swal.fire({
          titleText: `Thank you!
          You select ${booleano} out of 5`,
          icon: "success",
          background: "hsl(213, 19%, 18%)",
          color: "hsl(0, 0%, 100%)",
          imageWidth: 200,
          imageHeight: 100,
          text: "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
          imageAlt: "Custom image",
        });
      })
    );
  }
}
