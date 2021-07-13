import React from 'react';

const CafeResult = (props) => {
    console.log(props);
    return (
        <div>
            <a target="_blank" href={props.cafe.link}>{props.cafe.review_cafename}</a>
        </div>
    );
}

export default CafeResult;
