if (confirm("Are you 18+ or Not") == true) {
    // document.getElementById('Load_website')
}
else {
    document.getElementById('Load_website').innerHTML = ("<center>" + "<h1>" + "you are not Eligible to surf this website." + "</h1>" + "</center>");
}

document.getElementById("Book_now-Submit").addEventListener("click", function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Form_for_Booking").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "Success.html", true);
    xhttp.send();
});

document.getElementById("Book_now-Submit").addEventListener("click",function(){
    document.getElementById("Book_now-Submit").style.display = "none";
});