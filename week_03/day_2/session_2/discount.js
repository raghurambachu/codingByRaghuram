var total=70;

if(total < 300){
    console.log('Discount is Invalid. Final price:'+total)
}else{
    discount=0.10 * total

    if(discount <= 100){
        console.log('Final price: Rs ' + (total - discount)+', Discount price: Rs'+ discount)
    }else{
        console.log('Final price: Rs ' + (total - 100)+', Discount price: Rs'+ 100)
    }
}