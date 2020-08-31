<?php include 'header.php' ?>

<div class="container-fluid form-background">
    <div class="page-heading">
    <!-- Page Heading -->
    <h2>Animals</h2>
    </div>
</div>
<section class="container-fluid">
    <div class="animal-form">
        <form action="#" >
        <div class="input-group">
            <span class="input-group-addon" id="animal-name">Név</span>
            <input type="text" class="form-control" placeholder="Lia" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="animal-breed">Fajta</span>
            <input type="text" class="form-control" placeholder="Golden Retriever" aria-describedby="basic-addon1">
        </div>  
        <div class="input-group">
            <span class="input-group-addon" id="animal-age">Életkor</span>
            <input type="number" class="form-control" placeholder="2 " aria-describedby="basic-addon1">
        </div>
            <input type="submit" value="DELETE" class="btn btn-default delete-button">  
        </form>
    </div>

</section>

<?php include 'footer.php' ?>