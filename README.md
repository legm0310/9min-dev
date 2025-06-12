# 9min.dev

Lee Gyumin personal website

## Stack

- Next.js, Static Site Generation
- Tailwind, pnpm

## Build, Run

- `pnpm build`
- `pnpm start`
- `pnpm dev`

## Script

### 1. 게시물 생성

- `pnpm gen-post [categoryName] [slugName]`

### 2. frontmatter 필드 추가

- `pnpm fix-frontmatter add [fieldName1]=[defaultValue1] [fieldName2]=[defaultValue2]`
- 필드와 초기값을 입력, 여러개 입력 가능
- 입력된 필드가 이미 있으면 아무 동작도 하지 않음, 없으면 추가

### 3. frontmatter 필드 수정

- `pnpm fix-frontmatter modify [fieldName1]=[defaultValue1] [fieldName2]=[defaultValue2]`
- 필드와 초기값을 입력, 여러개 입력 가능
- 입력된 필드가 존재하지만 다를 경우 변경, 없으면 추가

### 4. frontmatter 필드 삭제

- `pnpm fix-frontmatter remove [fieldName1] [fieldName2]`
- 삭제할 필드를 입력, 여러개 입력 가능
