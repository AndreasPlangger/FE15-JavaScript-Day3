function checkValue(){
    var studentName = document.getElementById("input").value;
    console.log(studentName);

const students = ["John", "Jane", "Mary", "Bill", "Hades"];
const mathGrade = [75, 59, 89, 77, 100];

if (students.includes(studentName)) {
    let index = students.indexOf(studentName);
    let grade = mathGrade[index];

    switch (true) {
        case (grade==100):
            text = "Thats an outstanding result, congratulations!";
            break;

        case (grade>70):
            text = "Thats a very good result, keep it up!";
            break;

        case (grade>60):
            text = "You pass, keep working hard to improve further!";
            break;

        case (grade<=60):
            text = "Unfortunately, that is not enough to pass, please contact your teacher for further proceedings.";
            break;

        default:
            text ="Sorry, an error has occured, please try again later.";
    }

    document.getElementById("output").innerHTML="Hello " + studentName + ", your grade is: " + grade + " points. "+text;
} 
else {
    document.getElementById("output").innerHTML="Sorry " + studentName + ", you do not seem to be part of our programme.";
}




}








