import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';
import SuccessForm from './SuccessForm';
import ErrorForm from './ErrorForm';




const Main = () => {

    const [img, setImg] = useState(null);
    const [button, setButton] = useState(<div className="d-grid"><button className="btn btn-primary disabled btn-xl" id="submitButton" type="submit">테스트!</button></div>);
    const [resultPage, setResultPage] = useState(null);



    const handleChange = (e) => {
        console.log("image detected.");
        console.log(e.target.files[0]);

        setImg(e.target.files[0]);
        
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

        const sendImg = img;
        setResultPage(<SubmitForm></SubmitForm>)
        setButton(<div className="d-grid"><button className="btn btn-primary disabled btn-xl" id="submitButton" type="submit">테스트!</button></div>);

        axios.get('http://naver.com', sendImg).then(res=> {
            setResultPage(<SuccessForm></SuccessForm>)
        }).catch(err=> {
            // 오류창 표시 후 제출 버튼 활성화
            // setResultPage(<ErrorForm></ErrorForm>)
            // setButton(<div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">테스트!</button></div>);
            console.log(err);
        })
    }

    
    return (

        <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Cafe-In</a>
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
                        {/* <h1 className="text-white font-weight-bold">Tobigs CafeIn</h1> */}
                        <img src='logo_big_white.png' />
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
                        <h2 className="text-white mt-0">카페인 추천 시스템에 관해서</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">카페인 모델은 이미지 기반 추천 시스템입니다.<br />사용자의 이미지의 분위기를 분류하는 모델과 이미지에 맞는 리뷰를 생성하는 모델을 통과해 예측에 사용합니다.<br/> 이미지 추가 예정 </p>
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
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/67720742?v=4' />
                            <h3 className="h4 mb-2">강재영</h3>
                            <p className="text-muted mb-0">커피를 너무</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/63541608?s=200&v=4' />
                            <h3 className="h4 mb-2">박준영</h3>
                            <p className="text-muted mb-0">많이 마셨나봐요</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/63541608?s=200&v=4' />
                            <h3 className="h4 mb-2">이원도</h3>
                            <p className="text-muted mb-0">심장이 막 두근대고</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/63541608?s=200&v=4' />
                            <h3 className="h4 mb-2">한유진</h3>
                            <p className="text-muted mb-0">잠은 잘 수가 없어요</p>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
                <h3 className="text-center mt-0">Tobigs 15기</h3>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/63541608?s=200&v=4' />
                            <h3 className="h4 mb-2">강지우</h3>
                            <p className="text-muted mb-0">한참 뒤에 별빛이 내리면</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/63541608?s=200&v=4' />
                            <h3 className="h4 mb-2">김현지</h3>
                            <p className="text-muted mb-0">난 다시 잠들 순 없겠죠</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/122186002_2805390756346422_7766817196706331709_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PvKN57ik_joAX9QvLaq&tn=sYEfSPsGgEQr3EOd&_nc_ht=scontent-ssn1-1.xx&oh=54137345d79850534136f067528b7d08&oe=60EEC49F' />
                            <h3 className="h4 mb-2">안민준</h3>
                            <p className="text-muted mb-0">지나간 새벽을 다새면</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <img className='profileImg' src='https://avatars.githubusercontent.com/u/69336270?v=4' />
                            <h3 className="h4 mb-2">이윤정</h3>
                            <p className="text-muted mb-0">다시 네 곁에 잠들겠죠</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="page-section bg-warning text-black">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">자세한 정보는 아래 링크에서 확인하세요</h2>
                <div className='row'>
                    <div className='col-6'>
                        <a href='https://github.com/stillpsy/recsys_cafe'><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" /></a>
                    </div>
                    <div className='col-6'>
                        <a href='https://www.notion.so/12-9f8f3661b92b403cb21cc531f0e777a9'><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/notion.svg" /></a>
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
                        <form id="demoForm" onSubmit={handleSubmit}>
    
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
            <div className="container px-4 px-lg-5"><div className="small text-center text-muted">2021 12회 투빅스 컨퍼런스</div><br /><div className="small text-center text-muted"><a target="_blank" href="https://icons8.com/icon/eZLBUovU50qY/coffee">Coffee</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div></div>
        </footer>

    </div>
    </div>
    );
}

export default Main;
