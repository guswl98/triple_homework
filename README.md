# 신현지 트리플 프론트엔드 과제


<img src="https://user-images.githubusercontent.com/43779313/136010049-d5869992-1b12-4e4b-add1-3beaefb9601f.gif" width="800"/>

## 프로젝트 구성

```
├─ pulic
│ ├─ index.html     : DOM root
│ └─ manifest.json
├─ src
│ ├─ assets         : imgs
│ ├─ components     : React components
│ │  └─ common      : Common components
│ ├─ constants      : Constants for strings
│ ├─ styles         : css files
│ ├─ utils          : Functions
│ └─ index.tsx
├─ tsconfig.json
├─ package.json
├─ .eslintrc.js
└─ .prettierrc
```

## Dependencies

- Git
- yarn or NPM

## Clone the Repository

```
$ git clone https://github.com/guswl98/triple_homework.git
```

## Execute

```
$ yarn install
$ yarn start
```

or

```
$ npm install
$ npm start
```

## 기술 스택

### FrontEnd

<p float="left">
  <img src="https://user-images.githubusercontent.com/43779313/135983313-e320aee3-b618-460f-b422-8d14f8f5ddd4.png" alt="TypeScript" height="100"/>
  <img src="https://user-images.githubusercontent.com/43779313/135983684-6de2d329-481b-4f3a-b3f1-30e15db4b217.png" alt="React" height="100"/>
</p>

- React

- TypeScript

  TypeScript는 정적 타입을 지원하므로 컴파일 타임에서 오류를 잡아낼 수 있고, 명시적으로 타입을 지정해 JavaScript보다 좀 더 명확하게 개발자의 의도를 전달합니다. 런타임까지 가지 않아도 타입과 관련한 오류를 제거할 수 있고, 다른 사람이 개발한 기능을 해당 개발자의 의도에 맞게 사용할 수 있으므로 협업을 진행할 때 빠른 개발이 가능합니다. 실제로 대규모 프로젝트를 개발할 때 TypeScript를 사용함으로써 다른 개발자들이 개발해놓은 기능을 파악하고 사용하는 데 편리했고, 백엔드와의 통신에서도 타입을 적용해 컴파일 타임에서 오류를 잡아낼 수 있어 효율적인 개발이 가능했던 경험이 있습니다.

### Formatting

<p float="left">
  <img src="https://user-images.githubusercontent.com/43779313/135983962-0c23e229-394f-420a-b861-ff501a61bf0a.png" alt="Eslint" height="100"/>
  <img src="https://raw.githubusercontent.com/prettier/prettier-logo/e638a708b41a176a46cfbbf9d3ed4910132df265/images/prettier-avatar-dark.svg" alt="Prettier" height="100"/>
</p>

- eslint
- prettier
