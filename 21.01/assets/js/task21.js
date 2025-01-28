//switch

//1)Discounts

let total = 70;

switch (true) {
    case total >= 100:
        console.log("membership level: Platinum");
        break;
    case total >= 80 && total < 100:
        console.log("membership level: Gold");
        break;
    case total >= 40 && total < 80:
        console.log("membership level: Silver");
        break;
    case total >= 20 && total < 40:
        console.log("membership level: Bronze");
        break;
    default:
        console.log("Invalid");

}

//2)Determine seasons based on month

// let january = 1;
// let february = 2;
// let march = 3;
// let april = 4;
// let may = 5;
// let june = 6;
// let july = 7;
// let august = 8;
// let september = 9;
// let october = 10;
// let november = 11;
// let december = 12;
let month = 4;


switch (true) {
    case month == 12 || month == 1 || month == 2:
        console.log("Winter Season");
        break;
    case month >= 3 && month <= 5:
        console.log("Summer Season");
        break;
    case month >= 6 && month <= 9:
        console.log("Monsoon Season");
        break;
    case month == 10 || month == 11:
        console.log("Autumn Season");
        break;
    default:
        console.log("invalid");


}

//3)Type of Vehicle based on no of wheels

let No_of_Wheels = 4;

switch (true) {
    case No_of_Wheels == 2:

        console.log("Your vehicle is a Bicycle or Motorcycle");
        break;
    case No_of_Wheels == 4:
        console.log("Your vehicle is a car");
        break;
    case No_of_Wheels == 12:
        console.log("Your vehicle is a Truck");
        break;
    default:
        console.log("invalid");
}

//4)Menu selection in restaurant

let option = "Fried Rice"

switch (true) {
    case option == "Tiffen":
        console.log("Idli");
        console.log("Dosa");
        console.log("Chapathi");
        break;
    case option == "Fried Rice":
        console.log("Veg Fried Rice");
        console.log("Egg Fried Rice");
        console.log("Chicken Fried Rice");
        console.log("Paneer Fried Rice");
        break;

    case option == "Chicken":
        console.log("Chicken 65");
        console.log("Chicken manchurian");
        console.log("Chicken Tandoori");
        break;
    default:
        console.log("Other items");


}

//5)Day of the Week planner

let input = "Tuesday";

switch (true) {
    case input == "Sunday":
        console.log("Morning=>rest");
        console.log("Evening=>Outing");
        break;
    case input == "Monday":
        console.log("Morning=>Java Class");
        console.log("Afternoon=>Work");
        break;
    case input == "Tuesday":
        console.log("Morning=>Dance Class");
        console.log("Afternoon=>Java Class");
        break;
    case input == "Wednesday":
        console.log("Morning=>Household Works");
        break;
    case input == "Thursady":
        console.log("Morning=>Yoga class");
        console.log("Afternoon=>Playtime");
        break;
    case input == "Friday":
        console.log("Morning=>Java Class");
        console.log("Afternoon=>Work");
        break;
    case input == "Saturday":
        console.log("Full day=>Outing");
        break;

}
//6)Student mark score card

let mark = 61;

switch (true) {
    case mark <= 100 && mark > 90:
        console.log("Grade S");
        break;
    case mark <= 90 && mark > 80:
        console.log("Grade A");
        break;
    case mark <= 80 && mark > 60:
        console.log("Grade B");
        break;
    case mark <= 60 && mark > 50:
        console.log("Grade C");
        break;
    case mark <= 50 && mark > 40:
        console.log("Grade D");
        break;
    case mark > 40:
        console.log("Grade E");
}

//Nested if

//7)Eligibility check for a loan

let income = 70000;
let cibil_score = "fair";

if (income >= 100000 && cibil_score == "Good") {
    console.log("You are eligible for loan");
    if (true) {
        loan = income * 50 / 100;
    }
    console.log(`Loan Amount => ${loan}`);
}
else if (false) {
    console.log("Not eligible");
}

else if (income >= 60000 && cibil_score == "Good") {
    console.log("You are eligible for loan");
    if (true) {
        loan = income * 50 / 100;
    }
    console.log(`Loan Amount => ${loan}`);
}
else {
    console.log("Not eligible");
}

//8)User Access Control Based on Role and Subscription Level

let Role = "Viewer";
let SL = "premium";

if (Role == "admin"  ) {
   
    if (SL == "premium") {
        console.log("Have all Access");
    }
    else {
        console.log("Have limited restrictions");
    
    }
}if (Role == "Editor"  ) {
    
    if (SL == "premium") {
        
        console.log("Have all Access for editing");
    }
    else {
        console.log("Have limited restrictions for editing");
    
    }
}  if (Role == "Viewer"  ) {
    
    if (SL == "premium") {
        console.log("Can have access to view contents");
    }else {
        console.log("Have limited restrictions to view contents");

    
    }
} 

//9)Student Mark Grade

let My_mark = 90;

if (My_mark <= 100 && My_mark > 90) {
    console.log("pass");
    if (true) {
        console.log("Grade S");

    }

}
else if (My_mark <= 90 && My_mark > 80) {
    console.log("pass");
    if (true) {
        console.log("Grade A");

    }
}
else if (My_mark <= 80 && My_mark > 70) {
    console.log("pass");
    if (true) {
        console.log("Grade B");

    }
}
else if (My_mark <= 70 && My_mark > 50) {
    console.log("pass");
    if (true) {
        console.log("Grade C");

    }
}
else if (My_mark <= 50 && My_mark > 40) {
    console.log("pass");
    if (true) {
        console.log("Grade D");

    }
}
else if (My_mark < 40) {
    console.log("fail");
    if (true) {
        console.log("Grade E");

    }

}

//10)User Role Authorization

let user = "editor"
if(user == "admin"){
    console.log("Can have full access");
    
}
else if(user == "editor"){
    console.log("have access only for editing");
    
}
else if(user == "viewer"){
    console.log("have access only to view");
    
}
else{
    console.log("access denied");
    
}