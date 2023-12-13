let count = 0;
function counter(){
    setTimeout(() => {
        count=count+1;
        console.log(count);
        counter();
    }, 1000);
}
counter();