import React  from 'react';

const Footer = (props) => (
    <div className="container-fluid text-center footer">
        <span className="text-danger">{"Powerd by " + props.company}</span> { ", Contact: " + props.email}
    </div>
)

export default Footer;