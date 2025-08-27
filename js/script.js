// utility functions
function gId(id) {
    return document.getElementById(id);
}


// make variables 

let heartCount = Number(gId('heart-count').innerText);
let coinCount = Number(gId('coin-count').innerText);
let copyCount = Number(gId('copy-count').innerText);

const cardsParent = gId('services-container');
const clearButton = gId('clear-button');
const historyContainer = gId('history-card-container');

// Getting local time
// const time = new Date().toLocaleTimeString('en-US', { hour12: true });



// service card functions
cardsParent.addEventListener("click", function (e) {
    const target = e.target;
    const copyButtonCheck = target.getAttribute("class").includes('card-copy-button');
    const callButtonCheck = target.getAttribute('class').includes('card-call-button');
    const heartButtonCheck = target.getAttribute('class').includes('heart-button');

    if (callButtonCheck) {
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
            
            // Getting local time
            const time = new Date().toLocaleTimeString('en-US', { hour12: true });
            // add history
            const newHistoryElement = document.createElement('div');
            newHistoryElement.innerHTML = `
            <div class="history-card my-5 p-4 rounded-lg bg-[#fafafa] flex justify-between items-center">
            <div class="left-card">
            <h1 class="font-semibold text-lg">${serviceName}</h1>
            <h4 class="text-lg text-[#5c5c5c]">${number}</h4>
            </div>
            <h1>${time}</h1>
            </div>`;
            historyContainer.appendChild(newHistoryElement); // History card added
        }
        
    } else if (copyButtonCheck) {
        // if copy button pressed, this code will run
        copyCount = copyCount + 1;
        gId('copy-count').innerText = copyCount;
        
        // Challenge Part
        const number = target.parentNode.parentNode.childNodes[7].innerText;
        navigator.clipboard.writeText(number).then(() => {
            console.log('text copied');
        }).catch(err => {
            console.log('an error occurred')
        } );

    } else if (heartButtonCheck) {
        // if heart button pressed, this code will run
        heartCount = heartCount + 1;
        gId('heart-count').innerText = heartCount;
    }
})

// Clear History function
clearButton.addEventListener("click", function (e) {
    console.log('clear button clicked');
    // if this button clicked, all history card will delete
    historyContainer.innerHTML = '';
})