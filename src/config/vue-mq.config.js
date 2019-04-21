import Vue from 'vue'
import VueMq from 'vue-mq'

const mqConfig = () => {
    Vue.use(VueMq, {
        breakpoints: {
            mp: 426,
            ml: 768,
            tp: 992,
            tl: 1200,
            d: Infinity
        }
    });
}


const mediaMlDown = ["mp", "ml"];
const mediaTpDown =  ["mp", "ml", "tp"];

const queryMedia = {

    isMobile: function(mq) {
        return (mediaMlDown.includes(mq)); 
    },

    isTabletPortraitDown: function(mq) {
        return (mediaTpDown.includes(mq)); 
    },

    isDesktop: function(mq) {
        return (mq === 'd');
    }
}


export { 
    mqConfig,
    queryMedia
};

