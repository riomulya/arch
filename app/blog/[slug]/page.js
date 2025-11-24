import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogPosts,
} from '../../lib/blog';
import BlogPostClient from './BlogPostClient';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan | PT ARCH CONTINENT TECH',
    };
  }

  return {
    title: `${post.title} | Blog PT ARCH CONTINENT TECH`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <>
      <Header />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}
