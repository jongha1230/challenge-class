# Next.js에서 기억해야 할 사항

## 폴더 구조와 URL 경로

### 기본 원칙

- `app` 디렉터리 아래의 폴더 구조가 그대로 URL 경로가 된다.

### 예외 사항

1. **(폴더명)**
   - URL 경로에서 해당 폴더가 제외되지만, 라우팅 시스템 내부에 여전히 포함된다.
2. **\_폴더명**
   - URL 경로에서 해당 폴더가 제외되며, 라우팅 시스템 내부에서 완전히 제외된다.

### 예시

- `app/hello/page.tsx` -> `/hello`
- `app/(hello)/page.tsx` -> `/`
- `app/_hello/page.tsx` -> `/`

## 동적 라우팅

- 폴더명에 대괄호 `[]` 치기

## `use client`

- 언제 사용하나요?
  - 컴포넌트 내에서 hook을 사용할 때 (hook은 대부분 브라우저 환경에서만 작동하기 때문)
  - `window`, `document` 등 브라우저 환경에서만 존재하는 변수에 접근할 때

## SSG (Static Site Generation)

- 정적 사이트 생성
