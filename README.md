# 1주차 과제

<aside>
💛 1주차 과제는 **구구단, 끝말잇기** 입니다.
모임 하루 전날까지 React 버전을 깃허브에 업로드 후 체크 리스트에 표시해주세요.

시간이 남은 경우 TS를 미리 작업하셔도 좋습니다!
TS 제출은 모임 주 일요일까지 입니다.

</aside>

## 1. 구구단

- 🚩 필수 조건

  - [x] 랜덤으로 문제가 출력 됩니다.
  - [x] 답을 입력할 경우 결과를 알려주고, 새 문제를 출력합니다.

- 🌟 추가 조건

  - [x] 2부터 9까지 단을 선택할 수 있게 합니다.
    - ex. 2단 선택 시 2 곱하기 \*는? 으로 문제를 출력
  - [x] 숫자 외 다른 것이 입력되면 결과창에 ‘숫자만 입력하세요’를 출력 합니다.
  - [x] 그 외 구현하고 싶은 기능을 구현 해주세요.

- 추가 기능
  - [x] 구구단 단수 버튼 클릭시 현재 구구단 앞자리수 변경되어 원하는 구구단 풀기 가능
  - [x] 두번째 자리수가 [2, 4, 5, 9] 속할시 '는' '은' 으로 변경

## 2. 끝말잇기

- 🚩 필수 조건

  - [x] 고정된 제시어로 시작합니다.
  - [x] 다음 단어를 입력하고 버튼을 눌렀을 때,
    - [x] 올바른 단어를 입력한 경우, 해당 단어를 제시어로 출력 합니다.
    - [x] 올바르지 않은 단어를 입력한 경우, 제시어는 유지되고 입력칸 하단에 ‘틀렸습니다’를 출력합니다.

- [x] 🌟 추가 조건

  - [ ] 입력창이 비어있으면 입력칸 하단에 ‘글자를 입력하세요’를 출력합니다.
  - [x] 그 외 구현하고 싶은 기능을 구현해주세요.

- 추가 기능

  - [x] 우리말샘 api 이용 사전정의 보여주기
  - [x] api 호출까지 로딩화면 구현
  - [x] 사전에 정의되지 않은 단어일 시에는 게임 진행 x

- API 호출 위해서 Allow CORS extension 사용해야함. ( 키면 유투브 안나옴 )

## 3. 숫자야구게임

- 🚩 필수 조건
- [] 랜덤으로 정답이 지정됩니다.
  - [] 정답은 3자리 이상으로 설정해주세요.
- [] 답을 입력할 경우 결과를 알려줍니다.

  - [] Ball, Strike의 수를 알려줍니다.
  - [] 모두 Strike인 경우 새 문제를 출력합니다.

- [x] 🌟 추가 조건
  - [] 작성했던 답을 히스토리로 보여줍니다.
  - [] 중복 여부나 자릿수를 선택할 수 있게 합니다.
  - [] 10회 실패 시 게임을 리셋합니다.
  - [] 그 외 구현하고 싶은 기능을 구현 해주세요.
