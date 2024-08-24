function handleEven(){
    console.log("number is even");
}
function handleOdd(){
    console.log("number is odd!");
}
function handleNum(num, callback1, callback2) {
 if(num % 2 === 0){
    callback1();
 } else {
    callback2();
 }
}

const mynumber = 16
const mynumber2 = 23
handleNum(mynumber, handleEven, handleOdd);
handleNum(mynumber2, handleEven, handleOdd);



