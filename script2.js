// function performOperations() {
//     const number = parseInt(document.getElementById('numInput').value);
//     if (isNaN(number)) {
//         alert('Please enter a valid number.');
//         return;
//     }

//     const operationElement = document.getElementById('operation');
//     const options = '<h3>Choose an operation:</h3>' +
//         '<select id="operationSelect">' +
//         '<option value="select a option">Select A Option</option>' +
//         '<option value="square">Square</option>' +
//         '<option value="binary">Binary</option>' +
//         '</select>';

//     operationElement.innerHTML = options;

//     document.getElementById('operationSelect').addEventListener('change', handleOperationSelection);
// }

// function handleOperationSelection() {
//     const number = parseInt(document.getElementById('numInput').value);
//     const selectedOperation = document.getElementById('operationSelect').value;

//     let result = '';
//     if (selectedOperation === 'square') {
//         result = `Square of ${number} is ${number * number}`;
//     } else if (selectedOperation === 'binary') {
//         result = `Binary of ${number} is ${decimalToBinary(number)}`;
//     }
//     document.getElementById('result').innerHTML = result;
// }

// function resetAction() {
//     document.getElementById('numInput').value = '';
//     document.getElementById('operation').innerHTML = '';
//     document.getElementById('result').innerHTML = '';
// }

// function decimalToBinary(number) {
//     return number.toString(2);
// }
