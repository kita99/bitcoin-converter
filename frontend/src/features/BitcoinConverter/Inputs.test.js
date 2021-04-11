import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme'; 
import MockedSocket from 'socket.io-mock';

import { store } from '../../app/store';
import useSocket from '../../common/socketio/useSocket';
import Inputs from './Inputs';

jest.mock('../../common/socketio/useSocket');

describe('BitcoinConverterInputs', () => {
  let wrapper;
  let socket;
  let socketEmit;

  beforeEach(() => {
    socket = new MockedSocket();
    socketEmit = jest.spyOn(socket, 'emit');
    useSocket.mockReturnValue(socket);
    wrapper = mount(<Provider store={ store }><Inputs /></Provider>);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('establishes socket connection', () => {
    expect(useSocket).toHaveBeenCalled();
    expect(socket.socketClient.connected).toEqual(true);
  });

  it('emits an event to request the list of tickers', () => {
    expect(socketEmit.mock.calls).toContainEqual([ 'getTickerList' ]);
  });

  it('emits an event to change conversion params after value input change', () => {
    const valueInput = wrapper.find('#value').at(1);
    valueInput.simulate('change', { target: { value: '123' } })
    expect(socketEmit.mock.calls.some(call => call.includes('configure'))).toEqual(true);
  });

  it('has 2 inputs', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('has 1 select', () => {
    expect(wrapper.exists('select')).toEqual(true);
  });
});
