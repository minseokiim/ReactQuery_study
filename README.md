Hooks(함수들)은 값의 재사용이 아니라, 로직의 재사용을 위해 만들어짐

- 리액트 쿼리
  https://tanstack.com/query/latest

1. 설치
   npm i @tanstack/react-query

2. https://tanstack.com/query/latest/docs/react/quick-start
   //app.js에서
   import {
   QueryClient,
   QueryClientProvider,
   } from '@tanstack/react-query'

const queryClient = new QueryClient()
...
return (
<QueryClientProvider client={queryClient}>
<MainProducts />
</QueryClientProvider>
);

3. https://tanstack.com/query/latest/docs/react/reference/useQuery 참고
