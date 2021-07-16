# 투빅스 카체-인 리액트 앱

투빅스 카페-인 모델 데모용 리액트 프론트 앱 입니다.
전체 모델 코드와 설명은 [여기](https://github.com/stillpsy/recsys_cafe)에 작성해 놓았습니다.

# 프로젝트 구조
- `src/components/Main.js` 가 기본 DOM으로 동작합니다. 이 곳에서 백엔드 서버로 API요청을 보내서 결과를 표시합니다.
- `src/components/ErrorForm.js` 는 네트워크 통신(axios)이 실패한 경우 표시됩니다.
- `src/components/SuccessForm.js` 는 네트워크 통신(axios)이 성공한 경우 표시됩니다. 여기서 -`src/components/CafeResult.js` 를 호출하여 설명합니다.
- `src/components/SubmitForm.js` 는 네트워크 통신(axios) 중에 표시됩니다. 로딩 바와 안내 메시지가 표시됩니다.

# 실행 방법

1. 본 프로젝트를 클론합니다.
2. `npm start`


