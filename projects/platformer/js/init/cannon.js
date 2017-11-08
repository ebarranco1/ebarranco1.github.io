(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary to make your level challenging.
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onBottom(100);
        cannon.create.onTop(187.5)
        cannon.create.onBottom(275);
        cannon.create.onTop(362.5)
        cannon.create.onBottom(450);
        cannon.create.onTop(537.5);
        cannon.create.onBottom(625);
        cannon.create.onTop(712.5);
        cannon.create.onBottom(800);

        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);