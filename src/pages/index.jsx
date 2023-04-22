import Link from 'next/link';
import { client } from '../libs/client';

const Home = (props) => {
  return (
    <div>
      <p>{`記事の総数: ${props.totalCount}`}</p>
      <ul>
        {props.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// データをテンプレートに受け渡す処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: data,
  };
};
export default Home;
