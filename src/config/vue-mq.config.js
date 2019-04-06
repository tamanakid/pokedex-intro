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

export { mqConfig as default };