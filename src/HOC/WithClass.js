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
            {/* by using spread opperator we can pass props from persons.js to person.js */}
         <WrappedComponent {...props} />
     </div>
    );
}

export default withClass;