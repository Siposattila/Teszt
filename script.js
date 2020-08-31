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


}