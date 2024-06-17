import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
// useState는 함수.
// 함수의 타입은 input output 두 가지만 정하면 된다.
// 이 때 이 함수의 타입을 보다 다양하게 재사용하기 위해서
// 함수의 타입을 제네릭하게 미리 구성해 둘 수 있다.

function Posts() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint).then((res) => res.data),
  });
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;
