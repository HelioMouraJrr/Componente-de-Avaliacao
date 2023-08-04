let activeRatingNumber;
const resultadoDOM = document.querySelector('.resultnum')

function selecionarValue(number) {
   const ratingNumbersDOC = document.querySelectorAll('.num')
   const selectedRatingNumberDOC = ratingNumbersDOC[number-1]
   selectedRatingNumberDOC.classList.add('num--active')

   if(activeRatingNumber) {
    const activeRatingDOC = ratingNumbersDOC[activeRatingNumber-1]
    activeRatingDOC.classList.remove('num--active')
   }

   activeRatingNumber = number;
}

function submit() {
   if (activeRatingNumber) {
      document.getElementById('main-div').style.display="none";
      document.querySelector('.second-screen').style.display="block";
   }

   else {
      alert('Por favor, selecione um valor.')
   }

   resultadoDOM.textContent = activeRatingNumber;
}

