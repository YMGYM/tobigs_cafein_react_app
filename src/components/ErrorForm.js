import React from 'react';

const ErrorForm = () => {
    return (
        <div>
            <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">오류 발생!</h2>
                        <hr className="divider divider-primary" />
                        <p className="mb-4">알 수 없는 오류가 발생했습니다.<br /> 잠시 후 다시 시도해 주세요.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default ErrorForm;
