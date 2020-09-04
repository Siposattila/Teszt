window.onload = () => {
    /*---------- Form ----------*/      // (2020.09.04.) Arnold
    /*Szükséges konstansok és változók*/

    const ADD_BTN = document.querySelector('.add-btn');

    const CARD_CONTAINER = document.querySelector('.cards')

    let cardNumber = 1;
    function deleteCard(e){
        e.target.parentElement.parentElement.remove()
    }
    /*Állat hozzáadása*/    //(2020.09.04.) Arnold
    ADD_BTN.addEventListener('click', () => {           //vizsgáljuk az ADD gombot
        let NAME_IN   = document.querySelector('#name').value || alert('Please delete this card enter the name of the Animal!');   //
        let SPEC_IN   = document.querySelector('#spec').value || alert('Please delete this card enter what kind of Animal!');      //Ha nincs megadva érték hibát dob fel, de sajnos lefut.
        let AGE_IN    = document.querySelector('#age').value  || alert('Please delete this card enter the age of the Animal!');    //

        let cardContent = {
            sn: cardNumber,
            name: NAME_IN,
            spec: SPEC_IN,
            age: AGE_IN
        }; console.log(cardContent);

        let card = document.createElement('div');   //létrehozza az adatlapot

        CARD_CONTAINER.appendChild(card);   //Elhelyezi
        card.classList.add('card');         //CSS-hez így lesz egységes
        card.innerHTML = `${cardContent.sn}<br> <span>Name:</span> ${cardContent.name} <br> <span>Age:</span> ${cardContent.age} <br><span>Species:</span> ${cardContent.spec}`
        //kitölti az adatlapot


        let cardDelete = document.createElement('button');      //létre hozza törlés gombot
        card.appendChild(cardDelete);       //Elhelyezi
        cardDelete.className = 'btn btn-default'  //Gomb stílus
        cardDelete.innerHTML = '<span class="glyphicon glyphicon-remove-sign"></span>'; //gomb ikon

        cardDelete.addEventListener('click', deleteCard)    //törlésgombot vizsgálja

        //nullázza a beviteli mezőt
        document.querySelector('#name').value = ''
        document.querySelector('#spec').value = ''
        document.querySelector('#age').value = ''
        //növeli a sorszámot
        cardNumber += 1
    })

    




    /*---------- /Form ----------*/
}