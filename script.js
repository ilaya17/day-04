let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
let res = Object.keys(obj1);
let check = true; 
for(var i of res){
    if(obj1[i]!=obj2[i]){
        check = false;
    }
}
console.log(check);

//output
//  if properties are same chech is true  or propertiesare different check is false.
