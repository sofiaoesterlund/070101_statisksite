const url= "https://kea-alt-del.dk/t7/api/products";
fetch(url)
    .then((response) => response.json())
    .then(dataReceived);

    function dataReceived(data) {
    //WE HAVE THE DATA
    console.log(data);
    data.forEach(productList);
}

function productList(oneProduct){
    console.log("productList");
    const myProductList = document.querySelector("template").content;
    const myClone = myProductList.cloneNode(true);

    myClone.querySelector(".productdisplayname").textContent = oneProduct.productdisplayname;
    myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${oneProduct.id}.webp`;
    myClone.querySelector(".subcategory").textContent = oneProduct.subcategory;
    myClone.querySelector(".price").textContent = oneProduct.price;
    
    
    
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myClone);
}

function product(singleProduct){
    console.log("productInfo");
    const myProductList = document.querySelector("grid_1-2").content;
    const myClone = myProductList.cloneNode(true);

    myClone.querySelector(".productdisplayname").textContent = singleProduct.productdisplayname;
    myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${singleProduct.id}.webp`;
    myClone.querySelector(".subcategory").textContent = singleProduct.subcategory;
    myClone.querySelector(".price").textContent = singleProduct.price;
    myClone.querySelector(".id").textContent = singleProduct.id;
    
    
    
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myClone);
}

