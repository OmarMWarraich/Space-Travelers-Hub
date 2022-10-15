import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Rockets from '../features/rockets/Rockets';

it('Rockets page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
