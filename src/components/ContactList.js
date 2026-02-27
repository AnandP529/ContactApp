import React from "react";
class ContactList extends React.Component{
    constructor(props) {
      super(props)
    
    }
    clickContact =(contact)=>{
        this.props.pushContact(contact);
    };
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <table className="table table-primary table-striped table-hover text-center">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Sno</th>
                                <th>Image</th>
                                <th>Tittle</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(this.props).length !==0 ?
                                <React.Fragment>
                                    {
                                        this.props.contacts.map((contact)=>{
                                            return(
                                                <tr onClick={this.clickContact.bind(this,contact)}>
                                                    <td>{contact.login.uuid.substr(contact.login.uuid.length-4)}</td>
                                                    <td>
                                                        <img src={contact.picture.medium} width="50" height="50"/>
                                                    </td>
                                                    <td>{contact.name.title}</td>
                                                    <td>{contact.name.first}</td>
                                                    <td>{contact.name.last}</td>
                                                    <td>{contact.dob.age} Yrs</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    };
}
export default ContactList;