//let buttonCart=document.querySelectorAll('.btn-primary');
const buttonCart = document.getElementsByClassName('btn-primary')
const showBody=document.getElementsByTagName('tbody')[0];
const quantify=document.getElementsByClassName('num');
const deleteCart=document.getElementsByClassName('uk-button-danger');




for(let i=0; i < buttonCart.length; i++){

    buttonCart[i].addEventListener('click', addCart);
}


function addCart(event) {
    let btn=event.target;
    let bigParent=btn.parentElement.parentElement;  
    let lessParent=btn.parentElement;  
    let itemImage= bigParent.querySelector('.card-img-top').src;
    let itemName= lessParent.children[0].textContent;
    let itemPrice= lessParent.children[1].innerText;


    let render=document.createElement('tr');
    render.innerHTML=`
                    <td><input class="uk-checkbox" type="checkbox"></td>
                    <td><img class="uk-preserve-width uk-border-circle " src=${itemImage} width="40" alt=""></td>
                    <td class="uk-table-link">
                        <h3 class = "item-name">${itemName}</h3>
                    </td>
                    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
                    <td><input type = 'number' class = 'num' value = '1'></td>
                    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
                    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>

    `
    showBody.append(render);

    for(let i =0; i < quantify.length;i++){
        quantify[i].value=1;
        quantify[i].addEventListener('change',totalCont);
    }

   for(let i =0;i < deleteCart.length;i++){
        deleteCart[i].addEventListener('click',removeCart);
    }

   grandTotal();



}

function totalCont(event){
    let improve=event.target;
    let parent=improve.parentElement.parentElement;
    let itemPrice=parent.getElementsByClassName('item-price')[0];
    let totalPrice=parent.getElementsByClassName('total-price')[0];
    let itemPriceContent=itemPrice.innerText.replace('$', '');
    totalPrice.children[0].innerHTML='$'+ improve.value*itemPriceContent;
    grandTotal();
    if(isNaN(improve.value) || improve.value <= 0){

        improve.value=1
    }
}

function grandTotal(){
    let total=0;
    let grand_Total=document.getElementsByClassName('grand-total')[0];
    let total_price=document.getElementsByClassName('total-price');

    for(let i=0;i < total_price.length;i++){
        let itemPriceTotal=Number(total_price[i].innerText.replace('$', ''))
        total +=itemPriceTotal;
    
    }
    
    grand_Total.children[0].innerText='$' + total;
    grand_Total.children[0].style.fontWeight='bold';
    console.log(total);


}

function removeCart(event){
    rem=event.target;
    let parent=rem.parentElement.parentElement;
    parent.remove();
}