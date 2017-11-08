var products = [];
products.synace_p =
    {
        img: 'default-img.jpg',
        ingredients: 'Aceclofenac 100mg+ </br> Paracetamol 325mg Tabs'
    };
products.synace_sp =
    {
        img: 'default-img.jpg',
        ingredients: 'Aceclofenac 100mg+ </br> Paracetamol 325mg+</br>Serratiopeptidase 15mg Tabs'
    };
products.synace_th =
    {
        img: 'default-img.jpg',
        ingredients: 'Aceclofenac 100mg+ </br> Thicolchicoside 4mg+</br> Paracetamol 325mg Tabs'
    };
    products.synace_gel =
    {
        img: 'default-img.jpg',
        ingredients: 'Diclofenac1.16% w/w, </br> LinseadOil 3.00% w/w, </br> Methylsalicylate 10.00% w/w & </br> Menthol 5.00% w/w '
    };
    products.sydol_p =
    {
        img: 'default-img.jpg',
        ingredients: 'Tramadol 37.5mg + </br> Paracetamol 325mg Tabs'
    };
    products.tbru_d =
    {
        img: 'default-img.jpg',
        ingredients: 'Trypsin  48mg+ </br> Bromelain 90mg+ </br> Retoside 100mg+ </br> Diclofenac 50mg Tabs'
    };

showProductList = function (listVal) {
    $('.category-list, .products-list').hide();
    $('.products-list-' + listVal).show();

}

showDesc = function(key){
    $('.prod-desc').show();
    $('.prod-img img').attr('src', './images/'+products[key].img);
    $('.prod-inc .ing').html(products[key].ingredients);
}

showProductDetails = function (listVal) {
    $('.category-list, .products-list').hide();
    $('.products-list-' + listVal).show();
}

backToProducts = function () {
    $('.products-list').hide();
    $('.category-list').show();
}

