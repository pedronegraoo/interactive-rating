const btnSubmit = document.querySelector(".btn-submit");
const btnAll = document.querySelector(".btn-all");

//esse código abaixo foi para tentar colocar uma borda "permanente" no item clicado
// const btn = document.getElementById("destaque");

// btnAll.addEventListener("click", (e) => {
//   btn.classList.toggle("active");
//   let armazenar = e.target.id;
//   console.log(e);
//   btnClicado(armazenar);
// });

function btnClicado(event) {
  let booleano = event;

  console.log(booleano);

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
          imageUrl: "../images/illustration-thank-you.svg",
          imageWidth: 200,
          imageHeight: 100,
          text: "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
          imageAlt: "Custom image",
        });
      })
    );
  }
}
