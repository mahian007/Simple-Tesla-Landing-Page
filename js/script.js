document.addEventListener('mousemove', function(e) {

    this.querySelectorAll('.item').forEach(item => {
        const speed = item.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed);
        const y = (window.innerHeight - e.pageY * speed);
        item.style.left = x;
        item.style.top = y;

    });

});