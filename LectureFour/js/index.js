let allStudents = [];


addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    if(age >= 18){
       allStudents.push({
        studentFirst: first, 
        studentLast: last, 
        studentAge: age, 
        studentSubject: subject
       });

        alert("Student: " + first + " " + last + ", has been added to " + subject);
    } else {
        
        alert("Student is not old enough for this course");
    }

    console.log(allStudents)

    document.getElementById("StudentForm").reset();
}

let pizzaOrder = [];
pizzaOrder.push({
    pizzaName: pizzaName,
    pizzaSize: size,
    pizzaBase: baseValue,
    pizzaToppings: topArray,
    totalCosts: pizzaCost
}
)

console.log(pizzaOrder)
.document.getElementById("pizzaForm").reset();

makePizza = () =>{
    
    let pizzaCost = 0;
     let pizzaName = document.getElementById("pizzaName").value;
     let size = document.getElementById("size").value;

     if (size === "Small"){
        pizzaCost = pizzCost + 20;
     } else if(pizzaCost === "Medium") {
        pizzaCost = pizzCost + 40;
     } else if(pizzaCost === "Large") {
        pizzaCost = pizzCost + 60;
     }

     // Get Radio Options
    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
            pizzaCost = pizzaCost + +baseOption[i].dataset.cost
        }
    }
    let toppingOptions = getElementsByName("toppings");
    let topArray = [];

    for(let i = 0; i < toppingOptions.length; i++){
        if (toppingsOptions[i].checked){
            topArray.push(toppingsOptions[i].value)
            pizzaCost = pizzaCost + +toppingOptions[i].dataset.cost
        }
    }
    console.log(topArray);
    console.log(pizzaCost);
}

                                                      

                                                                                           

               