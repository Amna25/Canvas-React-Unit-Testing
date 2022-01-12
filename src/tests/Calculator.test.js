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
  // Add number 4 to 1
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
// Subtract 4 from 7
  it('should substract number', () => {
    const button7 = container.find('#number7');
    const operator = container.find('#operator-subtract')
    const button4 = container.find('#number4');
    button7.simulate('click');
    operator.simulate('click')
    button4.simulate('click');
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })
  // multiply 3 to 5
  it('should be able to multiply', () => {
    const operator = container.find('#operator-multiply')
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    button3.simulate('click');
    operator.simulate('click')
    button5.simulate('click');
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');

  })
  // Divide 21 to 7
  it('should be able to divide', () => {

    const operator = container.find('#operator-divide')
    const button8 = container.find('#number8');
    const button4= container.find('#number4');
    button8.simulate('click');
    operator.simulate('click')
    button4.simulate('click');
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('2');
  })
  // Concatination of multiple strings
  it('should concatenate multiple number clicks', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const button1 = container.find('#number1');
    button3.simulate('click');
    button5.simulate('click');
    button1.simulate('click');
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('351');
  })
  // Multiple Operations togather
  it('should chain multiple operations', () => {
    const button6 = container.find('#number6');
    const operator1 = container.find('#operator-divide')
    const button3 = container.find('#number3');
    const operator = container.find('#operator_add')
    const button2 = container.find('#number2');
    
    button6.simulate('click');
    operator1.simulate('click')
    button3.simulate('click');
    operator.simulate('click')
    button2.simulate('click');
 
    const equal = container.find('#operator-equals')
    equal.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('4');
  })

  // Clear all running total

  it('should clear all the running total', () => {
    const button1 = container.find('#number5');
    const clear = container.find('#clear')

    button1.simulate('click')
    clear.simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('0');

  })
})
