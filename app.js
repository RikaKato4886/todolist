const mainEl = document.getElementById('main')
const btn = document.querySelector('.btn')
const answer = document.getElementById('answer')
const nextBtn = document.getElementById('next')

async function callApi (){
  const res = await fetch("http://jservice.io/api/random")
  const quiz = await res.json();
  console.log(quiz)
  mainEl.innerHTML = `
  <h1>TRIBIA QUIZ!!</h1>
  <h2>
  ${quiz[0].question}
  <h2>
  `
  btn.addEventListener('click', ()=> {
    answer.innerHTML = `
    <h2>
    ${quiz[0].answer}
    </h2>
    `
  })
}

nextBtn.addEventListener('click', ()=>{
  location.reload();
})

callApi()