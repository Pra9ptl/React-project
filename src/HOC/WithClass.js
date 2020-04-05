import React from 'react';

//One Way
// const WithClass = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

//Second Way
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
         <WrappedComponent />
     </div>
    );
}

export default withClass;