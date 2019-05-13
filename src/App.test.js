import App from './App.vue'
import { shallow } from 'vue-test-utils'

describe("App", () => {

    let shallowComponent = shallow(App);

    it("Has expected HTML structure", () => {
        expect(shallowComponent.element).toMatchSnapshot();
    });

});