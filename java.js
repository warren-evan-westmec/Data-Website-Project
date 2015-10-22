/**
 * Created by session2 on 10/20/15.
 */
function  changeDescription (id){
    var newDescription =prompt("What is this going to say homie?");
    document.getElementById(id).innerHTML = newDescription;
}