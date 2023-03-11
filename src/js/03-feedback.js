import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

console.log(btnEl)

let feedbackObj = {
    email: '',
    message: '',
};
reloidForm  ()

formEl.addEventListener('input', throttle(onInput, 500));
function onInput () { 
localStorage.setItem("feedback-form-state", JSON.stringify({...feedbackObj, email:emailEl.value, message:messageEl.value}));

};
formEl.addEventListener('submit', (event) =>{
    event.preventDefault();
    const {
        elements: { email, message }
      } = event.currentTarget;
      console.log(`email: ${email.value}, Message: ${message.value}`);
      event.currentTarget.reset();
      localStorage.removeItem("feedback-form-state");
    }
    );
    function reloidForm  () {
        let data = JSON.parse(localStorage.getItem("feedback-form-state"));
            if (data) {
                emailEl.value = data.email || '';
                messageEl.value = data.message || '';
              }
        ;
        }
    
