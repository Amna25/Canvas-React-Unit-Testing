import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  it('should add one to four', () => {
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const operator = container.find('#operator_add')
    button4.simulate('click');
    operator.simulate('click')
    button1.simulate('click');
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  // it('should substract number', () => {
  //   const operator = container.find('#operator-subtract')
  //   const button4 = container.find('#number7');
  //   const button1 = container.find('#number4');
  // })
  // it('should be able to multiply', () => {
  //   const operator = container.find('#operator-multiply')
  //   const button3 = container.find('#number3');
  //   const button5 = container.find('#number5');

  // })
  // it('should be able to divide', () => {

  //   const operator = container.find('#operator-divide')
  //   const button4 = container.find('#number21');
  //   const button1 = container.find('#number7');
  // })

  // it('should concatenate multiple number clicks', () => {
  //   const operator = container.find('#operator_add')
  //   const button3 = container.find('#number3');
  //   const button5 = container.find('#number5');
  //   const button1 = container.find('#number1');
  // })

  // it('should chain multiple operations', () => {
  //   const operator = container.find('#operator_add')
  //   const operator1 = container.find('#operator-divide')
  //   const button5 = container.find('#number20');
  //   const button1 = container.find('#number5');
  // })

  // it('should clear all the running total', () => {
  //   const clear = container.find('#clear')
  //   const operator1 = container.find('#operator-divide')
  //   const button5 = container.find('#number20');
  //   const button1 = container.find('#number5');

  // })



})
