$(document).on({        
    mouseenter: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen1.jpeg'); },
    mouseleave: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen2.jpeg'); }
}, '#img');

$(document).on({    
    mouseenter: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen3.jpeg'); },
    mouseleave: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen4.jpeg'); }
    }, '#img1');

$(document).on({    
    mouseenter: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen2.jpeg'); },
    mouseleave: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen1.jpeg'); }
    }, '#img2');

$(document).on({    
    mouseenter: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen4.jpeg'); },
    mouseleave: function() { $(this).attr('src', '/Volumes/YILLIAM/PROGRAMACIÓN/JQuery/cursor/imagen3.jpeg'); }
    }, '#img3');