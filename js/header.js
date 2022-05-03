let basketCount = document.querySelector(".counter");
let basketButton = document.querySelector(".basket-button");
let buttons = document.querySelectorAll(".product__item-button");
let basketTable = document.querySelector(".basket_table");
let basketTablediv = document.querySelector(".header__basket__table");
let basketTotal = document.querySelector(".basket-total");


let orders;
let neworders = [];
buttons.forEach(element => {
    element.addEventListener('click', function(){
        
        let buttonParentNode = element.parentNode;
        let idButtonProduct = element.id;
        let nameProduct = buttonParentNode.querySelector('.products__item-title').textContent;
        let priceProduct = buttonParentNode.querySelector('.products__item-price').textContent;

        orders = document.querySelectorAll(".product_id");
        
        if(orders.length == ""){
            basketCount.textContent++;
            basketTable.insertAdjacentHTML('beforeend',`<tr><td class="product_id">${idButtonProduct}</td>
                                                            <td>${nameProduct}</td>
                                                            <td class="countProduct">1</td>
                                                            <td>${priceProduct}</td>
                                                            <td class="totalpriceProduct">${priceProduct}</td>
                                                        </tr>`);
            basketTotal.innerText = priceProduct;
            alert("add!");
        }
        else{
            orders.forEach(item => {
                if(!neworders.includes(item.innerText)){
                    neworders.push(item.innerText);
                }
                if(neworders.includes(idButtonProduct)){
                    if(item.innerText == idButtonProduct){
                        alert("include!  ", idButtonProduct);
                        basketCount.textContent++;
                        item.parentNode.querySelector(".countProduct").innerText++;
                        item.parentNode.querySelector(".totalpriceProduct").innerText = Number(item.parentNode.querySelector(".totalpriceProduct").innerText) + Number(priceProduct);
                        basketTotal.innerText = Number(basketTotal.innerText) + Number(priceProduct);
                    }
                }
                else if(!neworders.includes(idButtonProduct)){
                    alert('add', idButtonProduct);
                    neworders.push(idButtonProduct);
                    basketCount.textContent++;
                    basketTable.insertAdjacentHTML('beforeend',`<tr><td class="product_id">${idButtonProduct}</td>
                                                                    <td>${nameProduct}</td>
                                                                    <td class="countProduct">1</td>
                                                                    <td class="priceProduct">${priceProduct}</td>
                                                                    <td class="totalpriceProduct">${priceProduct}</td>
                                                                </tr>`);
                    basketTotal.innerText = Number(basketTotal.innerText) + Number(priceProduct);
                }
            })
        }
    });
});


basketButton.addEventListener('mouseover', function(){
    basketTablediv.style.display = "block";
});
basketButton.addEventListener('mouseout', function(){
    basketTablediv.style.display = "none";
});



