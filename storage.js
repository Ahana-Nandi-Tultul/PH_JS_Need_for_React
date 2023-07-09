const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    
    // check truthy
    if(id && value){

        localStorage.setItem(id, value);
    }
    valueInput.value = '';
    idInput.value = '';
}

const friends = ['abul', 'babul', 'tabul']
localStorage.setItem('friends', JSON.stringify(friends));

const pen = {price: 5, color: 'red'};
localStorage.setItem('pen', JSON.stringify(pen));