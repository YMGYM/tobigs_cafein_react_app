import React from 'react';
import CafeResult from './CafeResult';

const SuccessForm = (props) => {
    return (
        <div>
            <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">결과</h2>
                        <hr className="divider divider-primary" />
                        <p className="mb-4">당신에게 추천하는 카페 목록은..</p>
                        <ul>
                        {props.cafes.map((value, index) => {
                            return(<li key={index} ><CafeResult cafe={value}></CafeResult></li>);
                        })}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default SuccessForm;
