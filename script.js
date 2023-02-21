const output=document.querySelector('.output')
let userInputArray=[]

function textarea(text){
    userInputArray=text.split(',') //taking values form input field & spliting the text wherever ',' is there
    userInputArray.map(val=>{
        return parseInt(val)//converting text values to intger values
    })
    console.log("this is new array int-values",userInputArray)
      
}
function carddesign(val){
       let box=document.createElement('div')
       box.classList.add('box')
       box.innerHTML=val
       output.appendChild(box)
}
function checkChildren(){
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
}
function traverse(){
    if(textarea==undefined){
        alert('plz insert values')//display the text if input box is empty==undefined
    }
    else{
            console.log(userInputArray)
            for(var i=0;i<userInputArray.length;++i){//running the loop for checking the value of array
                carddesign(userInputArray[i])// And now creating the card of array values
            }

        }
}
function insertion(){
    var pos = prompt("At what postion you want to insert")
    console.log(pos) //giving position for value

    var insertval=prompt("what value you want insert") //giving the value

       //postion of value| form 0|value to insert
      //                ^|   ^  |   ^
         userInputArray.splice(pos-1  ,  0   , insertval)

          checkChildren()//clear the previous array

            for(var i=0; i<userInputArray.length;++i){// Again creating card for new array
                carddesign(userInputArray[i])//And now creating the card of new array value
             }
             console.log("new array after insertion",userInputArray)
}

function search(){
    var searchVal=prompt("which value should be search")
    console.log(searchVal)//taking search value from user

    for(var i=0; i<userInputArray.length;++i){ //running the loop for checking the value of arr 
        
      if(searchVal != userInputArray[i]){  //if searchval is not-equal to arr value then

           checkChildren() // clear the output screen

           var err=document.createElement('p')//creating p tag which contains error msg

           err.innerText="The Search value is not fuond"//error msg

           output.appendChild(err);// display error text in output
          
        }
        else{ //if searchval is equal to arr value then

            checkChildren() //clear the output screen

            carddesign(userInputArray[i])// And now creating the card of search value
            return i
            break
            // var err=document.createElement('p')//creating p tag which contains error msg

            //   err.innerText="The Search value is not fuond"//error msg
    
            //  output.appendChild(err);// display error text in output
              
        }
    
    }

}

//By Atul
function searchDelVal(arr, srchVal){
    for(var i=0; i < arr.length ;++i){
        if(arr[i] == srchVal)
            return i;
    }
    return -1;
}

function deletee(){
                            //  deleting by position
    // let pos = prompt("At what postion you want to delete")
    // console.log(pos) //giving position for value

    //         arr.pop(pos-1);
    //         console.log(arr)
    //         checkChildren()
    //         for(var i=0; i<arr.length;++i){
    //             carddesign(arr[i])
    //         }


    var delVal=prompt("which value should be remove")
    var flag = false;

    //By Atul
    var indexOfDelVal = searchDelVal(userInputArray, delVal)  //first we search that element, if it is there or not, it it is present we received index of that element
     
    //if element is not there, print alert message
    if(indexOfDelVal < 0) {
        alert(`${delVal} is not present in array`)
    } else{
    // if element is there, then  delete it using splice method    
        userInputArray.splice(indexOfDelVal,1)
        checkChildren()
        for(var i=0; i<userInputArray.length;++i){
            carddesign(userInputArray[i])
        }
    }

    if(flag==true){

    }
    console.log("this is new array after deletion",userInputArray)
}