window.onload = () => {
    /*---------- Form ----------*/      // (2020.09.04.) Arnold
    /*Szükséges konstansok és változók*/

    const ADD_BTN = document.querySelector('.add-btn');
    const CARD_CONTAINER = document.querySelector('.cards');
    let cardNumber = 1;

    /*Állat törlése*/
    function deleteCard(e) {
        e.target.parentElement.remove();
    };

    /*Állat hozzáadása*/    //(2020.09.04.) Arnold
    ADD_BTN.addEventListener('click', () => {           //vizsgáljuk az ADD gombot

        if (document.querySelector('.alert')) {          //Ha van figyelmeztetés
            document.querySelector('.alert').remove()
        };  //Akkor törölje (2020.09.05.) Arnold

        let NAME_IN = document.querySelector('#name').value || alert('Please enter the name of the Animal!');   //
        let SPEC_IN = document.querySelector('#spec').value || alert('Please enter what kind of Animal!');      //Ha nincs megadva érték hibát dob fel, de sajnos lefut.
        let AGE_IN = document.querySelector('#age').value || alert('Please enter the age of the Animal!');    //

        let cardContent = {     //Objektumként használom innentől
            sn: cardNumber,
            name: NAME_IN,
            spec: SPEC_IN,
            age: AGE_IN
        }; console.log(cardContent);    //Ki írja console-ba is

        if (cardContent.name && cardContent.spec && cardContent.age) { //Ha minden meg van adva, csak akkor hozza létre az adatlapot (2020.09.05.) Arnold

            let card = document.createElement('div');   //létrehozza az adatlapot (2020.09.04) Arnold
            CARD_CONTAINER.appendChild(card);   //Elhelyezi
            card.classList.add('card');
            card.setAttribute('data-id', cardContent.sn);        //CSS-hez így lesz egységes
            card.innerHTML = `<span>Serial Number: </span>${cardContent.sn}<br> <span>Name:</span> ${cardContent.name} <br> <span>Age:</span> ${cardContent.age} <br><span>Species:</span> ${cardContent.spec}`;
            //kitölti az adatlapot

            let cardDelete = document.createElement('input');      //létre hozza törlés gombot (2020.09.04) Arnold
            card.appendChild(cardDelete);       //Elhelyezi
            cardDelete.setAttribute('type', 'button');
            cardDelete.setAttribute('data-id', cardContent.sn);
            cardDelete.className = 'btn btn-default pull-right';  //Gomb stílus
            cardDelete.value = 'Delete'; //gomb ikon

            cardDelete.addEventListener('click', deleteCard);   //törlésgombot vizsgálja

            cardNumber += 1; //növeli a sorszámot

        } else {    //Ha nincs minden megadva, piros dobozt is feldob (2020.09.05) Arnold
            let warning = document.createElement('div');//létrehozza
            CARD_CONTAINER.appendChild(warning);        //Elhelyezi
            warning.className = 'alert alert-danger';   //Formázás
            warning.setAttribute('role', 'alert');
            warning.innerHTML = '<strong>Warning!</strong> Please type in all of the boxes.';
        };
        //nullázza a beviteli mezőt (2020.09.04.)
        document.querySelector('#name').value = '';
        document.querySelector('#spec').value = '';
        document.querySelector('#age').value = '';
    });
    /*---------- /Form ----------*/
};