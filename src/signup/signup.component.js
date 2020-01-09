import React from 'react'
export default class SignupComponent extends React.Component{




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
            <td>LastName</td>
            <td><input type="text"/></td>
            </tr>
            <tr>
            <td>LastName</td>
            <td><input type="text"/></td>
            </tr>
            <tr>
            <td>Email</td>
            <td><input type="text"/></td>
            </tr>
            <tr>
            <td>Phone Number</td>
            <td><input type="text"/></td>
            </tr>
            
            <tr>
                <td>Password</td>
                <td><input type="text"/></td>
                </tr>
                <tr>
            <td>Confirm Password</td>
            <td><input type="text"/></td>
            </tr>
                <tr>
                    <td><button>Signup</button></td>
                    <td><button>Cancel</button></td>
                    </tr>
                    </table>
                    )
    };
}