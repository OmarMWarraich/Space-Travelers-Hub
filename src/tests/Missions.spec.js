import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Missions from '../features/missions/Missions';

it('Mission page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
