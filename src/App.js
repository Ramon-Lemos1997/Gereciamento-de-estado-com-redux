import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './reducers/listReducer';

const SAVED_ITEMS = 'savedItems';

function App() {
  const [showModal, setShowModal] = useState(false);

  function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
  }

  function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
      return JSON.parse(actualState);
    } else {
      return [];
    }
  }

  const store = createStore(listReducer, loadState());

  store.subscribe(() => {
    persistState(store.getState());
  });

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className='container'>
      <Provider store={store}>
        <header>
          <h1>Todo</h1>
          <button onClick={() => setShowModal(true)}>+</button>
        </header>
        <List />
        <Modal show={showModal} onHideModal={onHideModal}>
          <TodoForm onHideModal={onHideModal} />
        </Modal>
      </Provider>
    </div>
  );
}

export default App;
