function configureListeners() {
    let images = document.getElementsByTagName('img');// select img elements  


     for (var i = 0; i < images.length; i++) {        
        images[i].addEventListener('mouseover', function(event) {
            event.target.classList.add('hovered');
        });
        
        images[i].addEventListener('mouseout', function(event) {
            event.AT_TARGET.classList.remove('hovered');
        });// iterate over images and add mouseover event listeners      
    } 
}
configureListeners();

function addOpacity(event) {
   let element = document.getElementById('color-price');
   element.classList.add('dim') // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    let element = document.getElementById('color-price');
    element.classList.remove('dim'); //remove appropriate CSS class

    let color = document.getElementById('color-name');
        color.textContent = 'colorName'; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
           price = '$14.99';
           colorName = 'Lime-Green';
           updatePrice(colorName, price); // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$11.99';
            colorName = 'Medium Brown';
            updatePrice(colorName, price);
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue'
            updatePrice(colorName, price);
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(colorName, price);
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = '$8.22'; 
            colorName = 'Solid Cyan';
            updatePrice(colorName, price);
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
           price = '$11.99';
           colorName = 'Solid Purple';
           updatePrice(colorName, price); // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$13.42';
            colorName = 'Solid Red';
            updatePrice(colorName, price);// set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(colorName, price);
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = '$14.99'; 
            colorName = 'Solid Yellow';
            updatePrice(colorName, price);// set variables for price and color name and invoke a function to update the price 
            break;   
          default: 
          console.log('Invalid Paint Selection');             
    }

    function updatePrice(colorName, price) {
          
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = 'price';
        // select element with corresponding id
        // display price
        
        let colorName = document.getElementById('color-name')
        colorName.textContent = 'colorName';// select element with corresponding id
        //display color name
    }
    
}
    