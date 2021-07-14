import React from 'react';

const CafeResult = (props) => {
    console.log(props);
    return (
        <div>
            <a target="_blank" href={props.cafe.link}>
            <img className="resultImg" src={"https://tobigs-cafein-nmvx.run.goorm.io/main/getImg?imgId=" + encodeURIComponent(props.cafe.imgname_123)} />
            <p>{props.cafe.review_cafename}</p>
            </a>
        </div>
    );
}

export default CafeResult;
