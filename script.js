const price = document.querySelectorAll('h5');
const checkbox = document.querySelector('#check');


// addEventListener

checkbox.addEventListener('change', function(e) {
        if(checkbox.checked) {
            price[0].innerText ='$19.99';
            price[1].innerText ='$24.99';
            price[2].innerText ='$39.99';
        }
        else {
            price[0].innerText ='$199.99';
            price[1].innerText ='$249.99';
            price[2].innerText ='$399.99';    
        }
});













 

