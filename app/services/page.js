import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Layanan Kami - PT ARCH CONTINENT TECH',
  description:
    'Layanan profesional PT ARCH CONTINENT TECH meliputi distribusi bahan konstruksi, jasa agen/komisioner, konsultasi real estat, dan manufaktur presisi (Molding, CNC, Injection).',
  alternates: {
    canonical: 'https://archcontinenttech.com/services',
  },
};

export default function Page() {
  return <ServicesClient />;
}
