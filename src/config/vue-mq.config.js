import Vue from 'vue'
import VueMq from 'vue-mq'

const mqConfig = () => {
    Vue.use(VueMq, {
        breakpoints: {
            xs: 426,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: Infinity
        }
    });
}

export { mqConfig as default };