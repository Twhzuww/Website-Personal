function welcomeAndSubmit() {
    const nameInput = document.querySelector('input[name="name"]');
    const name = nameInput.value;

    //Display the Alert 
    alert("Welcome To TechHive," + name + "!" );
    
    // Allow the form to be true
    return true;
}

let scrollAmount = 0;

function scrollMegasale(direction) {
    const megasale = document.querySelector('.megasale');
    const imageWidth = megasale.querySelector('img').clientWidth;


    //Calculate the new scroll position
    scrollAmount += direction * imageWidth;

    //Ensure the scroll position is within the bounds of the carousel
    scrollAmount = Math.max(0,Math.min(scrollAmount, megasale.scrollWidth - megasale.clientWidth));

    //Apply the new scroll positon 
    megasale.style.transform ='translateX(-${scrollAmount}px)';
    
}
