let body = document.getElementById('container');
let header = document.getElementById('header-container');
let emergencyTasks = document.getElementsByClassName('emergency-tasks');
let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
let footer = document.getElementById('footer-container');

body.setAttribute('style', 'background-color: #f3f3f3');
header.setAttribute('style', 'background-color: #00b069');
footer.setAttribute('style', 'background-color: #003533');

for(let emergencyTask of emergencyTasks) {
    emergencyTask.setAttribute('style', 'background-color: #ff9f84');

    let headers = emergencyTask.querySelectorAll('h3');

    for(let header of headers) {
        header.setAttribute('style', 'background-color: #a500f3');
    }
}

for(let noEmergencyTask of noEmergencyTasks) {
    noEmergencyTask.setAttribute('style', 'background-color: #f9db5e');

    let headers = noEmergencyTask.querySelectorAll('h3');

    for(let header of headers) {
        header.setAttribute('style', 'background-color: #232525');
    }
}