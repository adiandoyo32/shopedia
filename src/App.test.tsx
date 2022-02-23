import { render } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store"

const MockApp = () => {
  return <Provider store={store}>
    <App />
  </Provider>
}

test('renders learn react link', () => {
  render(<MockApp />);
});
