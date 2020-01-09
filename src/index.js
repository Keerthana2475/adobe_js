

import {AppComponent} from './app/app.component'
import LoginComponent from './login/login.component' // if we want to import the default export flower braces are not used 

//import SignupComponent from'./signup/signup.component'


import ReactDom from 'react-dom'
import React from 'react'

ReactDom.render(<LoginComponent/>,document.getElementById('root'))
//ReactDom.render(<SignupComponent/>,document.getElementById('root'))

