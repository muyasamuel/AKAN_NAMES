//getting the elements from the html
const dateBorn = document.querySelector("#date-born");
const monthBorn = document.querySelector("#month-born");
const yearBorn = document.querySelector("#year-born");
const form = document.getElementById("form");
const btn = document.getElementById("submit");

//adding an array of the days of the week
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const femaleNames = ["Akosua", "Adwao", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];





//adding an event listener to the button
btn.addEventListener("click", validate);




//function to validate the inputs

function validate(e) {
       e.preventDefault()
    const dateInput = dateBorn.value;
    const monthInput = monthBorn.value;
    const yearInput = yearBorn.value;

    


    if(dateInput =="" ||monthInput =="" || yearInput ==""){
        alert("fill in the required spaces!!!")
    }

    else if(dateInput == ""){
        alert("please fill in your date section");
    }else if ( dateInput < 1  || dateInput > 31){
        alert("put a valid date!!!")

    }else if(monthInput == ""){
        alert("Please fill in the month section");
    }else if(monthInput < 1 || monthInput > 12){
        alert("please put a valid month");

    }else if(yearInput == ""){
        alert("Please fill in the year section");
    }else if(yearInput.length < 4 || yearInput.length > 4){
        alert("please put a valid year");
    }
    else if (female.checked !=true && male.checked !=true  ){
        alert("Please pick your gender");
    }
    else{
        //after all validations have been achieved a function to generate name is called
       generateName();
    }

   

}

function generateName(){
    //getting the exact users input date 
   const date = `${monthBorn.value}-${dateBorn.value}-${yearBorn.value}`

   const d = new Date(date);
   //getting the day born that is given as a number
   let day = d.getDay();
   //getting the exact name of the day 
   let exactDay = weekDays[day];
   

   //getting the male or female akan name after finding the exact day
   let maleAkanName = maleNames[day];
   let femaleAkanName = femaleNames[day];



//using if statements to give the exact name depending with the gender
   if(male.checked == true){
      const textContent = document.querySelector(".text-content");
      textContent.innerHTML = `You were born on a ${exactDay}. Your akan name is ${maleAkanName} `
      textContent.classList.add("active");
      
   }
   
   else{
    const textContent = document.querySelector(".text-content");
    textContent.innerHTML = `You were born on a ${exactDay}. Your akan name is ${femaleAkanName} ` 
    textContent.classList.add("active");
 }

   }
    

         



    


    

    

    




 


    
    
  
  


 
    

 
