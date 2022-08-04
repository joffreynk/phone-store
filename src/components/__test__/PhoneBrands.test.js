import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
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

  it('When Phones component runs display latest phone as header', () => {
    render(
      <Provider store={store}>
        <App>
          <PhoneBrands />
        </App>
      </Provider>,
    );

    expect(screen.getByText(/loading/i)).toMatchSnapshot();
  });
});
