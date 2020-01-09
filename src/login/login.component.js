import React from 'react'
export default class LoginComponent extends React.Component{




constructor(){
    super();
}
render ()
{
    return(<table>
        <tr>
            <td>UserName</td>
            <td><input type="text"/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text"/></td>
                </tr>
                <tr>
                    <td><button>Login</button></td>
                    <td><button>Cancel</button></td>
                    </tr>
                    </table>
                    )
    };
}