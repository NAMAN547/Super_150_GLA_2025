


const person = {

    name: "kartik",
    age: 24,
   favColor: ["blue","red","orange"],
   sayName:function(){

    console.log(this.name)
    return 1;
   },

   obj : {

    name: "john",
    age:20


   }
}

// console.log(person.name);

// console.log(person.favColor[1]);

// console.log(Object.keys(person))

// console.log(person.sayName());


// console.log(Object.values(person))



// console.log(person.obj.name);






function sayName(){


    console.log(this);
    return 1
}

sayName();



