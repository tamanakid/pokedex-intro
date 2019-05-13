import PokedexLayout from '../PokedexLayout.vue'
import { shallow } from 'vue-test-utils'

describe("PokedexLayout", () => {

    let shallowComponent = shallow(PokedexLayout);

    it("Has expected HTML structure", () => {
        expect(shallowComponent.element).toMatchSnapshot();
    });

});