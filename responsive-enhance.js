var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();

var responsiveEnhance = function(img, width, monitor) {
    if (img.length) {
        for (var i=0, len=img.length; i<len; i++) {
            responsiveEnhance(img[i], width, monitor);
        }
    } else {
        if (((' '+img.className+' ').replace(/[\n\t]/g, ' ').indexOf(' large ') == -1) && img.clientWidth > width) {
            var fullimg = new Image();
            addEvent(fullimg, 'load', function(e) {
                img.className += ' large';
                img.src = this.src;
            });
            fullimg.src = img.getAttribute('data-fullsrc');
        }
    }
    if (monitor != false) {
        addEvent(window, 'resize', function(e) {
            responsiveEnhance(img, width, false);
        });
        addEvent(img, 'load', function(e) {
            responsiveEnhance(img, width, false);
        });
    }
};