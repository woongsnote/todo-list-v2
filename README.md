# My Todo List v2

## features(구현해야 하는 기능들)

- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

## 요구 사항

- 공통

  - todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리.
  - todos 모듈은 `Ducks 패턴` 으로 구현.
  - 컴포넌트 구조는 자유롭게 구현.

    ※ Ducks 패턴: 액션 타입, 액션 생성 함수, 리듀서를 각각 별도의 파일(심지어는 별도의 폴더)에 분리하여 작성하기 보다는, 그 셋을 하나의 모듈처럼 한 파일 안에 작성하자는 제안. By Erik Rasmussen)

- 메인 페이지

  - 디자인과 화면 구성은 자유롭게 구현.
  - Todo의 상태에 "완료"그룹과 "진행중" 그룹을 나뉘어서 보이도록 구현.
  - Todo를 추가하면 제목 `input` 과 내용 `input`은 다시 빈 값이 되도록 구현.
  - input에 값이 있는 상태에서 상세 페이지로 이동하는 경우, input의 value가 초기화 되도록 구현.
  - Todo의 완료 상태가 `true` 이면, 상태 버튼의 라벨을 취소, `false`이면 라벨을 "완료"로 보이도록 구현.
  - 전체 화면의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 컨텐츠를 화면의 가운데로 배치.
  - `상세보기` 클릭하면 Todo의 상세 페이지로 이동.

- 상세 페이지

  - 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
      - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면, 리스트 화면으로 되돌아감.

- 제한 사항
  - map을 사용할 때, 반드시 key 를 넣어아 하며, `map`의 `index` 사용을 금지합니다.
  - Todo Id 생성 시, `todos.length` 를 사용해서 생성하지 않습니다. `todos.length`를 사용해서 id 생성 시 발생할 수 있는 문제점에 대해 고민해보시기 바랍니다.

## 컴포넌트 구성

- `Layout`

  - 전체 레이아웃을 감싸는 컴포넌트이다.
  - `Header`와 `children` 을 포함한다.
  - `Layout`에서 `Header`를 가지고 있는 이유는 메인 페이지와 상세 페이지 모두 `Header`를 포함하기 때문이다.

- `Header`

  - 타이틀을 표현하기 위한 컴포넌트이다.

- `AddForm`

  - 새 Todo를 작성하기 위한 컴포넌트이다.
  - 메인 페이지에서만 사용하나, 코드 정리를 위해 컴포넌트로 구성했다.

- `TodoList`

  - 작성한 `TodoList` 의 목록을 보여주는 컴포넌트이다.
  - 코드 중복을 줄이고자, props에 status라는 이름으로, boolean 값을 추가했다.
  - Todo의 isDone상태와 status를 비교해서, Working, Done 두 개의 목록으로 나뉜다.

- `Todo`

  - `TodoList` 에 들어가는 각각의 `Todo` 이다.
  - 반복되어야 하므로 컴포넌트로 구성했다.

## 사용한 패키지 List

- `styled-components` : CSS 를 위한 패키지
- `redux` : 상태 관리를 위한 패키지
- `react-router-dom` : 메인 페이지, 상세 페이지를 이동하기 위한 패키지
- `react-id-generator`: 각각의 Todo에 대한 고유 Id를 부여하기 위한 패키지
- `gh-pages` : github pages와 연동하여 배포하기 위한 패키지

## 구현 결과
https://woongsnote.github.io/todo-list-v2


