import React, {useState} from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';
import SuccessForm from './SuccessForm';
import ErrorForm from './ErrorForm';




const Main = () => {

    const [img, setImg] = useState(null);
    const [button, setButton] = useState(<div className="d-grid"><button className="btn btn-primary disabled btn-xl" id="submitButton" type="submit">테스트!</button></div>);
    const [resultPage, setResultPage] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);


    let formData = new FormData();


    const handleChange = (e) => {
        console.log("image detected.");
        console.log(e.target.files[0]);

        setImg(e.target.files[0]);
        setImgUrl(URL.createObjectURL(e.target.files[0]));

        if(typeof(e.target.files[0]) !== 'undefined'){
            setButton(<div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">테스트!</button></div>);
        }
        else{
            setButton(<div className="d-grid"><button className="btn btn-primary disabled btn-xl" id="submitButton" type="submit">테스트!</button></div>);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        formData.append('img', img);

        setResultPage(<SubmitForm></SubmitForm>)
        setButton(<div className="d-grid"><button className="btn btn-primary disabled btn-xl" id="submitButton" type="submit">테스트!</button></div>);

        axios.post('https://tobigs-cafein-nmvx.run.goorm.io/main/result', formData, {}).then(res=> {
            // 성공시 제출 버튼 활성화 후 결과 표시
            setButton(<div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">테스트!</button></div>);
            console.log('Inference Done');
            console.log(res.data);

            setResultPage(<SuccessForm query={imgUrl} cafes={res.data.value}></SuccessForm>)

        }).catch(err=> {
            console.log(formData);

            // 오류창 표시 후 제출 버튼 활성화
            setResultPage(<ErrorForm></ErrorForm>)
            setButton(<div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">테스트!</button></div>);
            console.log(err);
        })
    }

    
    return (

        <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand cafe24suk" href="#page-top"><i>Cafe-In</i></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#people">People</a></li>
                        <li className="nav-item"><a className="nav-link" href="#demo">Demo</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <img className='img-fluid' alt="cafeIn logo" src='logo_big_white.png' />
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">14&15 투빅이들이 개발한 이미지 기반 카페 추천 서비스. <br />당신이 생각하는 것과 비슷한 카페를 추천해 드립니다.  </p>
                        <a className="btn btn-primary btn-xl" href="#about">더 알아보기</a>
                    </div>
                </div>
            </div>
        </header>

        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">카페-인 추천 시스템에 관해서</h2>
                        <hr className="divider divider-light" />
                        <img className='img-fluid' alt="cafeIn_logo" src="cafe-in_info.png" />
                        <p className="text-white-75 mb-4">카페-인 모델은 이미지 기반 카페 추천 시스템입니다.<br />사용자의 이미지에서 분위기 태그를 유추하고 이미지에 맞는 리뷰를 추측하여 가장 잘 어울리는 카페를 추천해 주는 모델입니다.</p>
                        
                    </div>
                </div>
            </div>
        </section>
   
        <section className="page-section" id="people">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">함께 한 사람들</h2>
                <hr className="divider" />
                <h3 className="text-center mt-0">Tobigs 14기</h3>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/강재영.jpeg' />
                            <h3 className="h4 mb-2">강재영</h3>
                            <p className="text-muted mb-0">아이러브커피</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/박준영.jpeg' />
                            <h3 className="h4 mb-2">박준영</h3>
                            <p className="text-muted mb-0">"라떼"는 말이야~</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/박준영.jpeg' />
                            <h3 className="h4 mb-2">이원도</h3>
                            <p className="text-muted mb-0">여전히 인문학은 죽지 않아</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/한유진.jpeg' />
                            <h3 className="h4 mb-2">한유진</h3>
                            <p className="text-muted mb-0">커피 한잔할래요옹( ͡° ͜ʖ ͡°)</p>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
                <h3 className="text-center mt-0">Tobigs 15기</h3>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/강지우.jpeg' />
                            <h3 className="h4 mb-2">강지우</h3>
                            <p className="text-muted mb-0">컨바(컨퍼 바이)~~~~~~</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/김현지.jpeg' />
                            <h3 className="h4 mb-2">김현지</h3>
                            <p className="text-muted mb-0">철이 없었죠... 커피가 좋아서 카페 추천시스템을 만들었다는게</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/안민준.jpeg' />
                            <h3 className="h4 mb-2">안민준</h3>
                            <p className="text-muted mb-0">커피를 너무 많이 마셨나봐요🎶 심장이 막 두근대고 잠은 잘 수가 없어요🎶</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' alt="member_profile" src='profiles/이윤정.jpeg' />
                            <h3 className="h4 mb-2">이윤정</h3>
                            <p className="text-muted mb-0">커피는 낮에 땡기고, 술은 밤에 땡긴다. 🍻</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="page-section bg-warning text-black">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">자세한 정보는 아래 링크에서 확인하세요</h2>
                <div className='row'>
                    <div className='col-12'>
                        <a href='https://github.com/stillpsy/recsys_cafe'><img height="60" width="60" alt="github" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" /> </a>
                    </div>
                    
                </div>
            </div>
        </section>


        <section className="page-section" id="demo">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">데모 페이지</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">아래에 원하는 이미지를 넣고 제출 버튼을 누르기만 하면 끝</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        <form id="demoForm" onSubmit={handleSubmit} encType="multipart/form-data">
    
                            <div className='container'>
                              <input className="form-control form-control-lg form-floating"  onChange={handleChange} id="formFile" type="file" />
                            </div>
                            <br/>
                            
                            {button}

                            {resultPage}
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5"><div className="small text-center text-muted">2021 12회 투빅스 컨퍼런스</div><br /><div className="small text-center text-muted">Notion, Github icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></div></div>
        </footer>

    </div>
    </div>
    );
}

export default Main;
