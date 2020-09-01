window.onload = () => {
    //creating data as an array of objects, normally this comes from a database (2020.08.31) Juli
    const articles = [{
        id: 1,
        title: 'Article 1',
        content: `
        <h2>Article 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolor quidem. Illum blanditiis, vel tenetur nemo totam similique temporibus quam esse at placeat. Tempora esse officiis ullam sapiente accusantium! Numquam.
        Eum error sunt quae doloribus, ab placeat inventore ipsam autem ullam expedita voluptatem accusantium voluptatum dolores reprehenderit ex temporibus necessitatibus at, laudantium harum a, ipsa est deleniti odio modi. Cumque.
        Illo suscipit amet atque eius laborum repellat totam officia mollitia ratione. Delectus, illum! Amet corporis autem, vel sequi excepturi minus necessitatibus nemo illo tempora debitis, atque possimus eius saepe neque.
        Optio eius illo dignissimos. Cupiditate quam ducimus, nostrum modi repellendus, eum sequi a perferendis ratione vero sit vitae inventore voluptas qui deserunt corrupti consectetur minus pariatur temporibus veritatis. Saepe, dolore.
        Quidem magnam dicta reiciendis, maxime aspernatur minima impedit vitae itaque perspiciatis fuga fugit consequatur blanditiis nesciunt est harum doloremque alias, minus odit dolore dignissimos recusandae ratione? Ratione explicabo sunt facilis!</p>
        <h4>Sub Heading</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
        <h4>Sub Heading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        `
    },
    {
        id: 2,
        title: 'Article 2',
        content: `<h2>Article 2</h2>
        <p>Placeat inventore ipsam autem ullam expedita voluptatem accusantium voluptatum dolores reprehenderit ex temporibus necessitatibus at, laudantium harum a, ipsa est deleniti odio modi. Cumque.
        Illo suscipit amet atque eius laborum repellat totam officia mollitia ratione. Delectus, illum! Amet corporis autem, vel sequi excepturi minus necessitatibus nemo illo tempora debitis, atque possimus eius saepe neque.
        Optio eius illo dignissimos. Cupiditate quam ducimus, nostrum modi repellendus, eum sequi a perferendis ratione vero sit vitae inventore voluptas qui deserunt corrupti consectetur minus pariatur temporibus veritatis. Saepe, dolore.
        Quidem magnam dicta reiciendis, maxime aspernatur minima impedit vitae itaque perspiciatis fuga fugit consequatur blanditiis nesciunt est harum doloremque alias, minus odit dolore dignissimos recusandae ratione? Ratione explicabo sunt facilis!</p>
        <h4>Sub Heading</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
        <h4>Sub Heading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        `
    },
    {
        id: 3,
        title: 'Article 3',
        content: `<h2>Article 3</h2>
        <p>Cupiditate quam ducimus, nostrum modi repellendus, eum sequi a perferendis ratione vero sit vitae inventore voluptas qui deserunt corrupti consectetur minus pariatur temporibus veritatis. Saepe, dolore.
        Quidem magnam dicta reiciendis, maxime aspernatur minima impedit vitae itaque perspiciatis fuga fugit consequatur blanditiis nesciunt est harum doloremque alias, minus odit dolore dignissimos recusandae ratione? Ratione explicabo sunt facilis!</p>
        <h4>Sub Heading</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
        <h4>Sub Heading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        `
    }
    ];


    //select the container of the active article (2020.08.31) Juli
    const articleContainer = document.querySelector(".page-content");
    //function to show an article based on the data-id (2020.08.31) Juli
    let showArticle = function (id) {
        articleContainer.innerHTML = articles[id - 1].content;
    }
    //DOM elements of the article title links (2020.08.31) Juli
    const articleLinks = document.querySelectorAll('.article-link');

    //after the click event change the content of the article container (2020.08.31) Juli
    for (let link of articleLinks) {
        link.addEventListener("click", (ev) => {
            showArticle(ev.target.getAttribute("data-id"))
        });
    }

    //form page 
    const animalsContainer = document.querySelector('.animals-container');

    const animals = [
        {
            id: 1,
            name: 'Lia',
            breed: 'Golden Retriever',
            age: 2
        },
        {
            id: 2,
            name: 'Nemo',
            breed: 'Clown Fish',
            age: 1
        }
    ];
    let animalInputGroups = '';

    for (let animal of animals) {
        animalInputGroups += `
        <div class="animal-form">
            <form action="#" >
            <div class="input-group">
                <span class="input-group-addon" id="animal-name">Name</span>
                <input type="text" class="form-control" placeholder=${animal.name} aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <span class="input-group-addon" id="animal-breed">Breed</span>
                <input type="text" class="form-control" placeholder="${animal.breed}" aria-describedby="basic-addon1">
            </div>  
            <div class="input-group">
                <span class="input-group-addon" id="animal-age">Age</span>
                <input type="number" class="form-control" placeholder="${animal.age}" aria-describedby="basic-addon1">
            </div>
                <input type="submit" value="DELETE"  data-id="${animal.id}" class="btn btn-default delete-button">  
            </form>
        </div>        
        `;
    }
    //if the container exists
    if (animalsContainer !== null) {
        animalsContainer.innerHTML = animalInputGroups;
        animalsContainer.addEventListener('click', (ev) => {
            //the id is useful if we want to delete from a database
            //console.log(ev.target.getAttribute("data-id"));

            //let's delete the parent of the button 
            ev.target.parentNode.parentNode.style.display = "none";
        });
    }



}