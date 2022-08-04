import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/store';

describe(' App Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
