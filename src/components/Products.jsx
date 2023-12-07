import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);

  //@tanstack/react-query의 버전 5 이상에서는 쿼리 관련 함수를 호출할 때 오직 "Object" 형태만 허용
  //배열 형태로 사용하던 useQuery의 인자를 객체 형태로 바꿔야 함
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

  //const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <p>{error}</p>;
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
