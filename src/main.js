var app = {

    //Data de mes possibles erreurs de formulaire
    data_errors : {
        'name_short' : 'Votre identifiant est trop court.',
    },

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
        console.log(app.errors);

         console.log('ici');
        if (app.errors.length > 0) {
            // Notre element
            let errorsElement = document.querySelector('#errors');
            
            // On boucle sur les erreurs
            for (index in app.errors) {
                // On ajoute un paragraphe p avec le messages, dans la div #errors
                errorsElement.innerHTML += '<p>' + app.data_errors[app.errors[index]] + '</p>';
            }

        }else{


        }
    },

    displayErrorsBorder: function(inputField){


        //return event.target.style.border = '2px solid red'; 
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

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
            valorProjetoVerif = value;

            if(Number.isNaN(valorProjetoVerif)){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'not_a_number';

            }else if(valorProjetoVerif <= 0 ){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_short';

            }else{

                inputField.classList.add('valid');
                inputField.classList.remove('invalid');
            }
            

        }else if(key == 'horasDiarias'){

            app.errors[key] = '';
            horasDiariasVerif = value;

            if(Number.isNaN(horasDiariasVerif)){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'not_a_number';

            }else if(horasDiariasVerif <= 0 ){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_short';

            }else if(horasDiariasVerif >= 24){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_long';

            }else{

                inputField.classList.add('valid');
                inputField.classList.remove('invalid');
            }
            
        


        }else if(key == 'diasEfetivos'){

            app.errors[key] = '';
            diasEfetivosVerif = value;

            if(Number.isNaN(diasEfetivosVerif)){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'not_a_number';

            }else if(diasEfetivosVerif <= 0 ){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_short';

            }else if(diasEfetivosVerif >= 8){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_long';

            }else{

                inputField.classList.add('valid');
                inputField.classList.remove('invalid');
            }

        }else if(key == 'diasFerias'){

            app.errors[key] = '';
            diasFeriasVerif = value;

            if(Number.isNaN(diasFeriasVerif)){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'not_a_number';

            }else if(diasFeriasVerif < 0 ){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_short';

            }else if(diasFeriasVerif >= 8){

                app.displayErrorsBorder(inputField);

                app.errors[key] = 'too_long';

            }else{

                inputField.classList.add('valid');
                inputField.classList.remove('invalid');
            }
        }

        app.displayErrors();



            console.log('test 1:');
            console.log(app.errors);
            console.log('fin test 1:');


    },

};
  

document.addEventListener('DOMContentLoaded', app.init); 
