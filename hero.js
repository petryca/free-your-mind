(function () {
    
    let hero = Snap('#hero');
    let animation = hero.group();
    let logo = hero.group();
    let i = 120;
    
    let face = hero.circle('50%', '50%', 120).attr({
        fill: '#fff',
        stroke: '#222',
        strokeWidth: 20
    });
    
    let leftEye = hero.circle('50%', '50%', 20).attr({
        fill: '#222',
        transform: 'translate(-50, 0)'
    });
    
    let rightEye = hero.circle('50%', '50%', 20).attr({
        fill: '#222',
        transform: 'translate(50, 0)'
    });
    
    logo.add(face, leftEye, rightEye);
    
    function drawCircle() {
        
        let hue = i % 360;
        let color = Snap.hsl(hue, 100, 40);
        i = i + 15;
        
        let vw = window.innerWidth;
        let vh = window.innerHeight;
        let radius = Math.floor(Math.sqrt((vw ** 2) + (vh ** 2)) / 2) + 100;
        
        let circle = hero.circle('50%', '50%', 120).attr({
            fill: color
        });
        
        circle.animate({ r: radius }, 6000, function () {
            this.remove();
        });
        
        
        animation.add(circle);
    }
    
    
    let timer;
    
    new Waypoint.Inview({
        element: document.getElementById('hero'),
        enter() {
            timer = setInterval(drawCircle, 600);
        },
        exited() {
            clearInterval(timer);
        }
    });
    
    
    
    
    
    
})();