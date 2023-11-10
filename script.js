function myFunction() {
    let name = document.getElementById("myInput").value;
    let namee = name.toUpperCase();
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let mainbut = document.getElementById("main")

    if (namee == "ADVO" || namee == "ADVOCATE" || namee == "AAKRITI" || namee == "AKRITI" || namee == "PARI" || namee == "ADRI") {
        alert("Click The Heart.")
        img1.style.visibility = "visible";
        img2.style.visibility = "visible";
        mainbut.style.display = "block";
        alert("Click The Heart.")
    } if (namee == "") {
        alert("Please Enter your name.  ")
    } if (namee == "ABISHEK" || namee == "ABHISHEK" || namee == "MESS" || namee == "MESOZOIC" || namee == "MEHI" || namee == "ABHI") {
        alert("hey Mess you know all stuff inside this page so why time wasting  ")
    }



}
function main() {
    window.location.href = "main.html";

}
function loco(){
    alert("Loco is spanish word having meaning mad or crazy in english.and mad is created by Word Pari by adding M from 'Mess' and Ad from 'Advo' to keep the name of trip to Mustang  ")
}