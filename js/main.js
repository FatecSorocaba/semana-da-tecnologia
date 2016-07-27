function openCourse(Course) {
    var i, x;
    x = document.getElementsByClassName("schedule");
    for(i=0;i<x.length;i++){
        x[i].style.display = 'none';
    }
    document.getElementById(Course).style.display = "block";
}
