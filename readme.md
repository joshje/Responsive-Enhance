Responsive Enhance
==================

This script will check whether an image is larger than a specified width and load a full resolution image if necessary.

    <img id="demo" src="http://dummyimage.com/400x300" alt="Responsive Image" data-fullsrc="http://dummyimage.com/800x600">
    <script>responsiveEnhance(document.getElementById('demo'), 400);</script>
    
This will replace the image with the image defined in the `data-fullsrc` when the image is wider than 400 pixels.