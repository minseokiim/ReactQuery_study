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

3. https://tanstack.com/query/latest/docs/react/reference/useQuery 참고하여 사용
   //products.jsx에서
   const {
   isLoading,
   error,
   data: products,
   } = useQuery({
   queryKey: "products",
   queryFn: async () => {
   console.log("fetching");
   return fetch(`data/products.json`).then((res) => res.json());
   },
   });

4. dev tools 설치
   https://tanstack.com/query/latest/docs/react/devtools

npm i @tanstack/react-query-devtools

5. dev tools 사용
   //app.js에서
   import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
   ...
   return (
   <QueryClientProvider client={queryClient}>
   {/_ The rest of your application _/}
   <ReactQueryDevtools initialIsOpen={true} /> //추가
   </QueryClientProvider>
   )...

=> ![Alt text](image.png)
