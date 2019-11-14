document.addEventListener("DOMContentLoaded", run)

function run() {
    /* var name = 'joe';
    var location = 'southamoton';
    var age = "18";
    var plus = "10";
    var agePlusTenYears = parseInt(age) + parseInt(plus)
    console.log(name + ' is currently in ' + location);
    console.log('hello world');
    alert('Sup dudebros');
    console.log(agePlusTenYears); */

    document.querySelector('.button').addEventListener('click', buttonClick);

    function buttonClick(e) {
        e.preventDefault();
        console.log('button clicked');
        let name = document.querySelector('input').value;

        if (name == "") {
            alert('enter a name');
            return false;
        } 
        document.querySelector('#result').innerHTML = "Hello " + name;
    }
}