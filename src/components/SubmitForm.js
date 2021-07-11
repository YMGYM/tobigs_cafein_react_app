import React from 'react';

const SubmitForm = () => {
    return (
        <div>
            <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">결과를 로딩 중입니다..</h2>
                        <hr className="divider divider-light" />
                        <div className="loader"></div>
                        <hr className="divider divider-light" />
                        <p className="mb-4">서버 상태에 따라 조금 걸릴 수 있습니다.<br />잠시만 기다려 주세요<br/></p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default SubmitForm;
