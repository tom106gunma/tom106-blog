import { client } from '../../libs/client';
import dayjs from 'dayjs';

const BlogId = ({ blog }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <time dateTime={blog.publishedAt} className="mt-2 block">
        {dayjs(blog.publishedAt).format('YYYY/MM/DD')}
      </time>
      <article
        className="prose prose-sm mt-4"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  );
};

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  // 記事のpath
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
