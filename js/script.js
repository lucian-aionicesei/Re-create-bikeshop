// fetch data

fetch("https://graphite.dk/bike_shop/wp-json/wp/v2/categories?_fields=name")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleNavMenu(data);
    });

function handleNavMenu(data) {
    // console.log(data);
    data.forEach(showBrand);
}

function showBrand(brand) {
    console.log(brand.name);
    const template = document.querySelector('.listItem_template').content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent = brand.name;
    copy.querySelector("a").href = `index.html?brandname=${brand.name}`;
    const parent = document.querySelector('.menu_options');
    parent.appendChild(copy);
    console.log(parent);
}


fetch("https://graphite.dk/bike_shop/wp-json/wp/v2/product")
    .then(function (resource) {
        return resource.json();
    })
    .then(function (data) {
        handleProductList(data);
    });

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    //grab the template
    const template = document.querySelector(".productdisplay_template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector(".brand_name").textContent = product.product_brand;
    copy.querySelector(".product_title").textContent = product.title.rendered;
    copy.querySelector(".product_price").textContent = `$${product.price}`;
    copy.querySelector(".in_stock_number").textContent = product.instock;

    // copy.querySelector(".product_display_img").src = ``;

    // copy.querySelector("a").setAttribute("href", "product_detail.html?id=" + product.id);

    // copy.querySelector(".product_brand").textContent = `${product.articletype} | ${product.brandname}`;
    // copy.querySelector(".price").textContent = `DKK ${product.price},-`;

    // if(product.soldout) {
    //   copy.querySelector("article").classList.add("soldOut")
    // }
    //grab parent
    const parent = document.querySelector(".product_list_content");
    //append
    parent.appendChild(copy);
}

/* <template class="productdisplay_template">
        <article class="product_display">
                        <img class="product_display_img" src="https://picsum.photos/seed/picsum/400/300" alt="bike">
                        <p class="brand_name">State</p>
                        <h2 class="product_title">Warhawk</h2>
                        <div class="product_info">
                            <p class="price">Price - <span class="product_price">$579 - $679</span></p>
                            <div class="colours">
                                <p>Colours - </p>
                                <div class="colour_choices">
                                    <!-- <div class="product_color red"></div> -->
                                    <p class="not_aplicable">N/A</p>
                                </div>
                            </div>
                            <p class="in_stock">In Stock - <span class="in_stock_number">1</span></p>
                            <a href="#" class="button">Full specs</a>
                        </div>
        </article>
    </template> */