(function () {
    
    var color;
    var hue = 0;
    
    function generateColor() {
        color = Snap.hsl(hue, 100, 50);
        hue = (hue + 1) % 360;
        setTimeout(generateColor, 100);
    }
    
    generateColor();
    
    const li = document.querySelectorAll('#lineup li');
    
    for (const item of li.values()) {
        
        item.onmouseover = function () {
            this.style.backgroundColor = color;
        };
        
        item.onmouseout = function () {
            this.style.backgroundColor = 'transparent';
        };
        
    }
    
    
    
    
})();