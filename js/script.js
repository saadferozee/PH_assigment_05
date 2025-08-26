// utility functions
function gId(id) {
    return document.getElementById(id);
}


// make variables 

let heartCount = Number(gId('heart-count').innerText);
let coinCount = Number(gId('coin-count').innerText);
let copyCount = Number(gId('copy-count').innerText);

const cardsParent = gId('services-container');



// make functions
cardsParent.addEventListener("click", function (e) {
    const target = e.target;
    const copyButtonCheck = target.getAttribute("class").includes('card-copy-button');
    const callButtonCheck = target.getAttribute('class').includes('card-call-button');
    const heartButtonCheck = target.getAttribute('class').includes('heart-button');

    if (copyButtonCheck) {
        console.log('copy button clicked');
        // Challenge Part
        // if copy button pressed, this code will run

    } else if (callButtonCheck) {
        // if call button pressed, this code will run
        if (coinCount < 20) {
            alert("You don't have enough coin to make this call, please recharge");
        } else {
            coinCount = coinCount - 20;
            gId('coin-count').innerText = coinCount;

            // show alert
            const number = target.parentNode.parentNode.childNodes[7].innerText;
            const serviceName = target.parentNode.parentNode.childNodes[3].innerText;
            const alertTemplate = 'Calling ' + serviceName + ' ' + number + ' ....';
            alert(alertTemplate);
        }

    } else if (heartButtonCheck) {
        console.log('heart button clicked');
        // if heart button pressed, this code will run
        heartCount = heartCount + 1;
        gId('heart-count').innerText = heartCount;
    }
})