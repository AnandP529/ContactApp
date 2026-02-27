import React from "react";
class ContactCard extends React.Component{
    constructor(props) {
      super(props)
    
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.selectedContact ? 
                    <React.Fragment>
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <div className="p-4"></div>
                                    </div>
                                    <div className="card-body text-center ">
                                        <img src={this.props.selectedContact.picture.medium} className="img-fluid img-thumbnail rounded-circle w-50 contact-img"/>
                                        <ul className="list-group text-left mt-3 ">
                                            <li className="list-group-item list-group-item-primary">
                                                Name :{this.props.selectedContact.name.first} {this.props.selectedContact.name.last}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Age :{this.props.selectedContact.dob.age}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Email :{this.props.selectedContact.email}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Location :{this.props.selectedContact.location.city}
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                        
                    </React.Fragment> : null    
                }
            </React.Fragment>
        );
    };
}
export default ContactCard;