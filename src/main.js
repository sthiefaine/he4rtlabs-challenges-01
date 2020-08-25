var app = {

    errors: [],

    // Initialisation du module
    // Instructions de départ

    init: function () {
        console.log('init app');

        let valorProjetoField = document.querySelector('#valorProjeto');
        valorProjetoField.addEventListener('blur', app.handleCheckInput);

        let horasDiariasField = document.querySelector('#horasDiarias');
        horasDiariasField.addEventListener('change', app.handleCheckInput);

        let diasEfetivosField = document.querySelector('#diasEfetivos');
        diasEfetivosField.addEventListener('blur', app.handleCheckInput);

        let diasFeriasField = document.querySelector('#diasFerias');
        diasFeriasField.addEventListener('blur', app.handleCheckInput);
    },

   
    clearErrors: function () {
   
        app.errors = [];

        document.querySelector('#errors').innerHTML = '';
    },

 
    displayErrors: function () {

    },

    displayResult: function () {


        if(
            typeof app.errors['valorProjeto'] !== 'undefined'
            && typeof app.errors['horasDiarias'] !== 'undefined'
            && typeof app.errors['diasEfetivos'] !== 'undefined'
            && typeof app.errors['diasFerias'] !== 'undefined'
            && app.errors['valorProjeto']?.length <= 0 
            && app.errors['horasDiarias']?.length <= 0 
            && app.errors['diasEfetivos']?.length <= 0 
            && app.errors['diasFerias']?.length <= 0
            ){
            
                const valorProjeto = document.querySelector('#valorProjeto').value;
                const diasEfetivos = document.querySelector('#diasEfetivos').value;
                const horasDiarias = document.querySelector('#horasDiarias').value;
                const diasFerias = document.querySelector('#diasFerias').value;

                valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );

                // Element
                let resultElement = document.querySelector('#result');
                resultElement.innerHTML = valorHora + ' R$ / hora';


        }
    },


    displayErrorsBorder: function(inputField){

        //return event.target.style.border = '2px solid red'; 
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
       
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


        let key = inputField.id;

        if(app.errors[key] !== ''){
            console.log('found error', app.errors[key]);

            // Element
            let errorsElement = document.querySelector('#'+key+'Error');
            // delet previous error message
            errorsElement.innerHTML = '';

            // display error
            errorsElement.innerHTML += '<strong>' + app.errors[key]+ '</strong>';

        }

    },


    displayValidBorder: function(inputField){

        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
        
        let key = inputField.id;
    
        // Element
        let errorsElement = document.querySelector('#'+key+'Error');

        // delet previous error message
        errorsElement.innerHTML = '';

    },


    handleCheckInput: function (event) {
        console.log(event);
        
        let inputField = event.currentTarget;
        // let's check field
        app.checkField(inputField);
    },

    // this function let check if inputs are correct
    // push error message if needed
    checkField: function (inputField) {

        let key = inputField.id;
        // Ce qu'a saisi l'utilisateur
        var value = inputField.value;


        if(key == 'valorProjeto'){

            valorProjetoVerif = value;
            app.errors[key] = [];
            if(Number.isNaN(valorProjetoVerif)){
                app.errors[key] = 'not_a_number';
                app.displayErrorsBorder(inputField);

            }else if(valorProjetoVerif <= 0 ){

                app.errors[key] = 'too_short';
                app.displayErrorsBorder(inputField);

            }else{
                app.displayValidBorder(inputField);
            }
            
        }else if(key == 'horasDiarias'){
            
            horasDiariasVerif = value;
            app.errors[key] = [];

            if(Number.isNaN(horasDiariasVerif)){
                app.errors[key].push('not_a_number');
                app.displayErrorsBorder(inputField);

            }else if(horasDiariasVerif <= 0 ){
                app.errors[key].push('too_short');
                app.displayErrorsBorder(inputField);

            }else if(horasDiariasVerif >= 24){
                app.errors[key].push('too_long');
                app.displayErrorsBorder(inputField);

            }else{
                app.displayValidBorder(inputField);

            }

        }else if(key == 'diasEfetivos'){

            diasEfetivosVerif = value;
            app.errors[key] = [];
            if(Number.isNaN(diasEfetivosVerif)){

                app.errors[key].push('not_a_number');
                app.displayErrorsBorder(inputField);

            }else if(diasEfetivosVerif <= 0 ){

                app.errors[key].push('too_short');
                app.displayErrorsBorder(inputField);

            }else if(diasEfetivosVerif >= 8){

                app.errors[key].push('too_long');
                app.displayErrorsBorder(inputField);

            }else{

                app.displayValidBorder(inputField);
            }

        }else if(key == 'diasFerias'){


            diasFeriasVerif = value;
            app.errors[key] = [];

            if(Number.isNaN(diasFeriasVerif)){

                app.errors[key] = 'not_a_number';
                app.displayErrorsBorder(inputField);

            }else if(diasFeriasVerif < 0 ){

                app.errors[key] = 'too_short';
                app.displayErrorsBorder(inputField);

            }else if(diasFeriasVerif >= 8){
                
        
                app.errors[key].push('too_long');
                app.displayErrorsBorder(inputField);

            }else{
                app.displayValidBorder(inputField);
            }
        }

        /* app.displayErrors(); */

        app.displayResult();

       
        
    },

};
  

document.addEventListener('DOMContentLoaded', app.init); 
