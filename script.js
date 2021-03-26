




/*-- Задание 2 -- */
let minNum;
function getMin(arr){
    minNum = arr[0];
    for(var i = 1; i < arr.length; i++){     
        if(minNum > arr[i]){
            minNum = arr[i];
        }
    }
    return minNum;   
}
getMin([2,4,5,7,9,4,1,16]);
console.log(minNum);

/*-- Задание 3 -- */
/*function getEven(arr){
    var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            arr1.push(arr[i]);
        }
    }
    arr = arr1;
    console.log(arr1);
} 
getEven([2,4,5,7,9,4,1,16]);*/

/*function getEven(arr){    
    for(var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            arr.splice(i, 1);
            i--; 
        }
    }   
    console.log(arr);
} 
getEven([2,4,5,7,9,4,1,16]);*/

function getEven(arr){    
    let outResult = arr.filter(function(item, index, array){
        return item % 2 == 0;
    }); 
    console.log(outResult);
} 
getEven([2,4,5,7,9,4,1,16]);


/*-- Задание 4 -- */
var arr = [
    {name:`Jonny Walker`, birhDate: `1995-12-17`},
    {name:`Andrew`, birhDate: `2001-10-29`},
    {name:`Viktor`, birhDate: `1998-11-09`},
    {name:`Andrew`, birhDate: `2011-05-09`},
];
function searchByName(name){
    let outResult = arr.filter(function(item, index, array){
        return item.name == [name];
    }); 
    console.log(outResult);
}
searchByName(`Andrew`);

/*function searchByName(name){
    var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i].name == name){
            arr1.push(arr[i]);
        }
    }
    console.log(arr1);
}
searchByName(`Andrew`);*/

