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

const mqLayouts = {
    mediaMlDown: ["mp", "ml"],
    mediaTpDown: ["mp", "ml", "tp"]
}

export { 
    mqConfig,
    mqLayouts 
};

/*
function queryMedia() {
    let mediaMlDown = ["mp", "ml"];
    let mediaTpDown =  ["mp", "ml", "tp"];

    function isMlDown(mq) {
        return (mediaMlDown.includes(mq)); 
    }

    function isTpDown(mq) {
        return (mediaTpDown.includes(mq)); 
    }

}

queryMedia {
    mediaMlDown: ["mp", "ml"],
    mediaTpDown: ["mp", "ml", "tp"]
}

*/
