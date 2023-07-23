//Steps:
//step-1 taking value from the input and check this if it's valid.
//setp-2 if it's valid the we need to create couple of option that user can choose one of them.
//step-3 Call Another Funtion Change
//step-4 Make the function calculate based on the changes

// const converter = document.getElementById('converter');
// converter.addEventListener("click", performOperations)

function performOperations() {
    const number = parseInt(document.getElementById('numInput').value);

    //Checking If The Input Is Valid 
    if (isNaN(number)) {
        alert("Kindly Put A Valid Number!!!");
        return;
    }

    //Create Option Once Click Into Convert
    const operationElemet = document.getElementById('operation');
    const html = '<h3>Choose A Options Form Here</h3>' +
        '<select id="operationSelect">' +
        '<option value="Auto Option">Select A Option</option>' +
        '<option value="square">Square</option>' +
        '<option value="binary">Binary</option>' +
        '</select>'
    operationElemet.innerHTML = html;

    //Taking value from select
    const selectOptions = document.getElementById('operationSelect');
    selectOptions.addEventListener('change', handleSelection);
}


function handleSelection() {
    console.log("Handle Selection Working");
}