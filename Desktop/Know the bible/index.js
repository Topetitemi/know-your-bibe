  const quoteContainer = document.getElementById('quote-container');
  const quote = document.getElementById('quote');
  const newQuoteBtn = document.getElementById('new-quote');
  const passage = document.getElementById('passage');
  const passageText = document.getElementById('passage-text');
  const submitBtn = document.getElementById('answer-btn');
  const message = document.getElementById('message');
  const loader = document.getElementById('loader');

  const showLoader = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  const complete = () => {
    if (loader) {
      quoteContainer.hidden = false;
      loader.hidden = true;
    }
  }

  const getQuote = async () => {
    showLoader();
   message.textContent = "welcome";
   message.style.borderColor = 'black'
   message.style.color = 'black';
    const proxyUrl = 'https://young-stream-22502.herokuapp.com/';
    const url = 'https://labs.bible.org/api/?passage=random&type=json';

    const response = await fetch(proxyUrl + url);
    const data = await response.json();
    try {
    quote.innerText = JSON.stringify(data[0].text);
    console.log(data);
    complete();
    } catch (error) {
    console.log('no quote', error);
    }
    passageText.value = '';
 
     submitBtn.addEventListener('click', () =>{
      // switchActive();
     if(passageText.value == data[0].bookname.toLowerCase()){
      message.textContent = "correct";
      message.style.borderColor = 'green'
      message.style.color = 'green';
     }else{
      message.textContent = data[0].bookname;
      message.style.borderColor = 'red';
      message.style.color = 'red';
    }
   });
} 


  //  submitBtn.disabled = true;
  //   const switchActive = () => {   
  //     // passageText.value.length === 0 ? submitBtn.disabled = true : submitBtn.disabled = false;
  //     if(passageText.value.length === 0){
  //       submitBtn.disabled = true;
  //     }else{
  //       submitBtn.disabled = false;
  //      }
  //    }

 newQuoteBtn.addEventListener('click',getQuote);
 passage.addEventListener('submit', (e) => e.preventDefault());
 showLoader();
 gegitQuote();


    // console.log( passageText.value, JSON.stringify(data[0].bookname));
    //  const {bookname,chapter, text, verse} = data;