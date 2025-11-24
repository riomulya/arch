import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog & Artikel - PT ARCH CONTINENT TECH',
  description:
    'Dapatkan wawasan terbaru seputar industri konstruksi, teknologi manufaktur, dan tips teknis dari para ahli kami.',
  alternates: {
    canonical: 'https://archcontinenttech.com/blog',
  },
};

export default function Page() {
  return <BlogClient />;
}
