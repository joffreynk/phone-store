import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PhoneBrands from '../PhoneBrands';
import App from '../../App';
import store from '../../redux/store';

describe(' Phone Brands Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App>
            <PhoneBrands />
          </App>
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
