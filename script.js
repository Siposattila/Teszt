window.onload = () => {
    /*---------- Index ----------*/     //(2020.09.04.) Arnold
    /*Szükséges konstansok.*/ 
    const ARTICLE_HERE = document.querySelector(".page-contents");   //Ahol megjelenik a szöveg
    const ARTICLE_PICK = document.querySelectorAll(".article");     //Cikk választó menüpontok 

    //Kis adatbázis, a "cikk" (article) választáshoz (2020.09.04.) Arnold
    const ARTICLES = [{
        id: 0,
        content: `<h2>Article 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolor quidem. Illum blanditiis, vel tenetur nemo totam similique temporibus quam esse at placeat. Tempora esse officiis ullam sapiente accusantium! Numquam.
        Eum error sunt quae doloribus, ab placeat inventore ipsam autem ullam expedita voluptatem accusantium voluptatum dolores reprehenderit ex temporibus necessitatibus at, laudantium harum a, ipsa est deleniti odio modi. Cumque.
        Illo suscipit amet atque eius laborum repellat totam officia mollitia ratione. Delectus, illum! Amet corporis autem, vel sequi excepturi minus necessitatibus nemo illo tempora debitis, atque possimus eius saepe neque.
        Optio eius illo dignissimos. Cupiditate quam ducimus, nostrum modi repellendus, eum sequi a perferendis ratione vero sit vitae inventore voluptas qui deserunt corrupti consectetur minus pariatur temporibus veritatis. Saepe, dolore.</p>
        <h4>Sub Heading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        `
    },
    {
        id: 1,
        content: `<h2>Article 2</h2>
        <p>Vivamus dapibus est a neque elementum, in interdum lorem laoreet. Donec finibus gravida purus mattis lobortis. Aenean et sapien consectetur, placerat ex ut, placerat dolor. Curabitur laoreet, est sit amet gravida convallis, neque dui aliquet velit,
         eget pellentesque augue sapien vel est. Quisque tristique erat sit amet viverra sollicitudin. Integer et neque arcu. Vivamus vel mollis leo, nec semper tellus.</p>
        `
    },
    {
        id: 2,
        content: `<h2>Article 3</h2>
        Fusce elementum ac libero non semper. Vestibulum porttitor interdum nisl quis molestie. Integer et ligula viverra leo pellentesque hendrerit vitae eget ligula. Ut sollicitudin venenatis vehicula. Mauris quis suscipit risus. Nullam sagittis diam mauris.
        Nunc blandit placerat auctor. Mauris vestibulum odio vitae eros tincidunt congue. Pellentesque ullamcorper orci eget turpis hendrerit, a tristique magna aliquam. Etiam id cursus metus. Nam purus sapien, cursus imperdiet laoreet ac, ullamcorper tristique lectus. 
        Fusce finibus a quam quis mattis.</p>`
    }
    ];
    /* Cikk váltás */   //(2020.09.04.) Arnold
    function articleChange(id) {
        for (let deactive of ARTICLE_PICK) {    //Deaktiválja az összes menüpontot
            deactive.classList.remove('active')
        }
        ARTICLE_HERE.innerHTML = ARTICLES[id].content;  //Megváltoztatja a tartalmat
        ARTICLE_PICK[id].className = 'article active'   //Aktiválja a tartalomhoz illő menüpontot
    }

    for (let clickable of ARTICLE_PICK) {   
        clickable.addEventListener('click',(e) => {     //Figyeli mire kattintasz és elkezdi a cikk váltást
            articleChange(e.target.getAttribute('data-id'))
        })
    }
    articleChange(0)    //Betöltésnél az Article 1 az alapértelmezett cikk
}
/*---------- /Index ----------*/