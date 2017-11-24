// Higher order component HOC - a component that renders other components

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) =>
    (
        <div>
            <h1>info</h1>
            <p>info: {props.info}</p>
        </div>
    );

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Thisi s private info.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated? <WrappedComponent {...props}/> : <p>Jelentkezzé be</p>}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="ASD" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="ASD" />, document.getElementById("app"));