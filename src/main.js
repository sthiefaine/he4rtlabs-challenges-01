var app = {

    errors: [],

    // Initialisation du module
    // Instructions de départ
    init: function () {
        console.log('init app');

        let valorProjetoField = document.querySelector('#valorProjeto');
        valorProjetoField.addEventListener('blur', app.handleCheckInput);

        let horasDiariasField = document.querySelector('#horasDiarias');
        horasDiariasField.addEventListener('blur', app.handleCheckInput);

        let diasEfetivosField = document.querySelector('#diasEfetivos');
        diasEfetivosField.addEventListener('blur', app.handleCheckInput);

        let diasFeriasField = document.querySelector('#diasFerias');
        diasFeriasField.addEventListener('blur', app.handleCheckInput);

    },

   
    clearErrors: function () {
   
        app.errors = {};

        document.querySelector('#errors').innerHTML = '';
    },

 
    displayErrors: function () {
  

    },

    displayErrorsBorder: function(inputField){

        //return event.target.style.border = '2px solid red'; 
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


        let key = inputField.id;

        if(app.errors[key] !=''){
            console.log('erreur trouvée');
            console.log(app.errors[key]);
     
            // Notre element
            let errorsElement = document.querySelector('#'+key+'Error');
            // on supprime le message d'erreur precedent
            errorsElement.innerHTML = '';

            // On affiche notre erreur
            errorsElement.innerHTML += '<strong>' + app.errors[key]+ '</strong>';

        }else{

        }

    },


    displayValidBorder: function(inputField){

        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
        
        let key = inputField.id;
    
        // Notre element
        let errorsElement = document.querySelector('#'+key+'Error');

        // On supprime notre erreur
        errorsElement.innerHTML = '';


    },


    handleCheckInput: function (event) {
        console.log(event);
        
        let inputField = event.currentTarget;
        // On appelle la méthode qui vérifie le champ
        app.checkField(inputField);
    },

    // Cette fonction se charge de vérifier si le champ est valide
    // et retourn true ou false en conséquence
    checkField: function (inputField) {

        let key = inputField.id;
        // Ce qu'a saisi l'utilisateur
        var value = inputField.value;


        if(key == 'valorProjeto'){

            valorProjetoVerif = value;

            app.errors[key] = '';

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

            app.errors.pop(key);

            if(Number.isNaN(horasDiariasVerif)){
                app.errors[key] = 'not_a_number';
                app.displayErrorsBorder(inputField);

            }else if(horasDiariasVerif <= 0 ){
                app.errors[key] = 'too_short';
                app.displayErrorsBorder(inputField);

            }else if(horasDiariasVerif >= 24){
                app.errors[key] = ['too_long'];
                app.displayErrorsBorder(inputField);

            }else{
                app.displayValidBorder(inputField);

            }
            
        }else if(key == 'diasEfetivos'){

            app.errors[key] = '';
            diasEfetivosVerif = value;

            if(Number.isNaN(diasEfetivosVerif)){

                app.errors[key] = 'not_a_number';
                app.displayErrorsBorder(inputField);

            }else if(diasEfetivosVerif <= 0 ){

                app.errors[key] = 'too_short';
                app.displayErrorsBorder(inputField);

            }else if(diasEfetivosVerif >= 8){

                app.errors[key] = 'too_long';
                app.displayErrorsBorder(inputField);

            }else{

                app.displayValidBorder(inputField);
            }

        }else if(key == 'diasFerias'){

            app.errors[key] = '';
            diasFeriasVerif = value;

            if(Number.isNaN(diasFeriasVerif)){

                app.errors[key] = 'not_a_number';
                app.displayErrorsBorder(inputField);

            }else if(diasFeriasVerif < 0 ){

                app.errors[key] = 'too_short';
                app.displayErrorsBorder(inputField);

            }else if(diasFeriasVerif >= 8){
                
                app.errors[key] = 'too_long';
                app.displayErrorsBorder(inputField);

            }else{

                app.displayValidBorder(inputField);
            }
        }

        app.displayErrors();

        
    },

};
  

document.addEventListener('DOMContentLoaded', app.init); 
