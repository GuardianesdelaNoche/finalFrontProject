import React from 'react';
import { shallowWithIntl } from '../../helpers/intlHelper'

import RegisterForm from './RegisterForm';





describe('RegisterForm', () => {
    

  const render = () => shallowWithIntl(<RegisterForm />); 

   test('should render', () => {
       const wrapper = render ();
       expect(wrapper.exists()).toBe(true);
//       expect(wrapper.find('Form').props().className).toBe('form-signin');
   });
})