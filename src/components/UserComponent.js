import React from "react";
import UserServices from "../services/UserServices";

class UserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
 //       alert("start!")
        UserServices.getUsers().then((res) => {
            const users = res.data;
            this.setState({ users });
        });
 //       alert("end")
    }

    render(){
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>First Name</td>
                            <td>last Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )


                        }
                    </tbody>
                </table>


            </div>


        )
    }
}

export default UserComponent;