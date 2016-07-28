function openCourse(Course) {
    var i, x, y;
    x = document.getElementsByClassName("schedule");
    y = document.getElementById(Course);
    for(i=0;i<x.length;i++){
        x[i].style.display = 'none';
    }
    y.style.display = "block";
    y.className = y.className + ' ' + Course.toLowerCase();
}
