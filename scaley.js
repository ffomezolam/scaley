/**
 * @module Scaley
 */
(function(name, root, factory) {
    if(typeof define === 'function' && define.amd) {
        define([], factory);
    } else if(typeof exports === 'object') {
        module.exports = factory();
    } else {
        root[name] = factory();
    }
}('Scaley', this, function() {
    /**
     * Scale an input from a range to another range
     */
    function scale(input, inmin, inmax, outmin, outmax) {
        if(inmin > inmax) {
            var tmp = inmin;
            inmin = inmax;
            inmax = tmp;
        }

        if(outmin > outmax) {
            var tmp = outmin;
            outmin = outmax;
            outmax = tmp;
        }

        if(input < inmin || input > inmax) throw "Input " + input + " out of range";

        inrange = inmax - inmin;
        outrange = outmax - outmin;
        
        if(!inrange) return outmin;
        return (((input - inmin) * outrange) / inrange) + outmin;
    }

    return scale;
}))
