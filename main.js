const btn1 = document.querySelector('.b1')
const btn2 = document.querySelector('.b2')
const btn3 = document.querySelector('.b3')
const btn4 = document.querySelector('.b4')
const btn5 = document.querySelector('.b5')
const text = document.querySelector('.box')

const b = (x) => {
    const filter = x.map(
      (y) => `
      <article class="div">
      <div class="all">
      <img src="${y.rasm}" class="img" />
      <div class="main">
        <div class="border">
          <h3 class="name">${y.nom}</h3>
          <span class="spn1">${y.narx}</span>
        </div>
        <p class="text">${y.matn}</p>
        <button class="btn6">${y.tur}</button>
      </div>
      </div>
    </article>
  `);
       
    text.innerHTML = filter.join("")
};
b(taomlar);

btn2.addEventListener('click', () =>{
    const natija = taomlar.filter(taom => taom.tur === "nonushta");
    b(natija);
})
btn3.addEventListener('click', () =>{
    const natija = taomlar.filter(taom => taom.tur === "tushlik");
    b(natija);
})
btn4.addEventListener('click', () =>{
    const natija = taomlar.filter(taom => taom.tur === "kechki ovqat");
    b(natija);
})
btn5.addEventListener('click', () =>{
    const natija = taomlar.filter(taom => taom.tur === "salatlar");
    b(natija);
})
btn1.addEventListener('click', () =>{
        b(taomlar);
})