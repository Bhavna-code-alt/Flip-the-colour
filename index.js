document.addEventListener('DOMContentLoaded', () => {
    function changeColor() { 
        let red = Math.floor(Math.random() * 256); 
        let green = Math.floor(Math.random() * 256); 
        let blue = Math.floor(Math.random() * 256); 
        let color = "rgb(" + red + "," + green + "," + blue + ")"; 
        document.getElementsByTagName("body")[0].style.backgroundColor = color; 
    }
    window.changeColor = changeColor;

})
