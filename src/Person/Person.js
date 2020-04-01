import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 80%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 700px){
        width: 450px;
     }
`;
const Person = (props) => {

    // const styles = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        //<div className="Person" style={styles}>
        <StyledDiv>
            < p onClick={props.click} > I'm {props.name}. My age is {props.age}.</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.change} value={props.name} />
        </StyledDiv>
    )
};

export default Person;

