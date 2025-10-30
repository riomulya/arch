'use client';

import Link from 'next/link';
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

const data = {
  facebookLink: 'https://www.facebook.com/ptarchcontinenttech',
  instaLink: 'https://www.instagram.com/ptarchcontinenttech',
  twitterLink: 'https://www.twitter.com/ptarchcontinenttech',
  githubLink: 'https://github.com/ptarchcontinenttech', 
  dribbbleLink: 'https://dribbble.com/ptarchcontinenttech',
  linkedinLink: 'https://www.linkedin.com/company/ptarchcontinenttech',
  services: {
    webdev: '/services',
    webdesign: '/services',
    marketing: '/services',
    googleads: '/services',
  },
  about: {
    history: '/about',
    team: '/about',
    handbook: '/about',
    careers: '/careers',
  },
  help: {
    faqs: '/faqs',
    support: '/contact',
    livechat: '/contact',
  },
  contact: {
    email: 'ptarchcontinenttech@gmail.com',
    phone: '+62 895-1402-4380',
    address:
      'JL WR Supratman GG Sukun, RT 003/RW 006, Cempaka Putih, Ciputat Timur, Tangerang Selatan, Banten 15141',
  },
  company: {
    name: 'PT ARCH CONTINENT TECH',
    description:
      'Perusahaan terpercaya yang bergerak di bidang perdagangan besar bahan konstruksi, perlengkapan teknis, dan jasa real estate.',
    logo: '/logo.png',
  },
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'Company History', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Employee Handbook', href: data.about.handbook },
  { text: 'Careers', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Perdagangan Besar Bahan Konstruksi', href: data.services.webdev },
  { text: 'Distribusi Perlengkapan Teknis', href: data.services.webdesign },
  { text: 'Jasa Agen & Komisioner', href: data.services.marketing },
  { text: 'Konsultasi Real Estat', href: data.services.googleads },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Live Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 mt-16 w-full place-self-end rounded-t-xl'>
      <div className='mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='text-blue-600 dark:text-blue-400 flex justify-center gap-2 sm:justify-start'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>ACT</span>
              </div>
              <span className='text-2xl font-semibold text-gray-900 dark:text-white'>
                {data.company.name}
              </span>
            </div>

            <p className='text-gray-600 dark:text-gray-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left'>
              {data.company.description}
            </p>

            <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition'
                  >
                    <span className='sr-only'>{label}</span>
                    <Icon className='size-6' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900 dark:text-white'>
                About Us
              </p>
              <ul className='mt-8 space-y-4 text-sm'>
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className='text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white'
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900 dark:text-white'>
                Our Services
              </p>
              <ul className='mt-8 space-y-4 text-sm'>
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className='text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white'
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900 dark:text-white'>
                Helpful Links
              </p>
              <ul className='mt-8 space-y-4 text-sm'>
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <span className='text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white'>
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className='relative flex size-2'>
                          <span className='bg-blue-600 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75' />
                          <span className='bg-blue-600 relative inline-flex size-2 rounded-full' />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-medium text-gray-900 dark:text-white'>
                Contact Us
              </p>
              <ul className='mt-8 space-y-4 text-sm'>
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className='flex items-center justify-center gap-1.5 sm:justify-start'
                      href={
                        isAddress
                          ? '#'
                          : text.includes('@')
                          ? `mailto:${text}`
                          : `tel:${text}`
                      }
                    >
                      <Icon className='text-blue-600 dark:text-blue-400 size-5 shrink-0 shadow-sm' />
                      {isAddress ? (
                        <address className='text-gray-600 dark:text-gray-400 -mt-0.5 flex-1 not-italic transition hover:text-gray-900 dark:hover:text-white'>
                          {text}
                        </address>
                      ) : (
                        <span className='text-gray-600 dark:text-gray-400 flex-1 transition hover:text-gray-900 dark:hover:text-white'>
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-gray-300 dark:border-gray-700 pt-6'>
          <div className='text-center sm:flex sm:justify-between sm:text-left'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              <span className='block sm:inline'>All rights reserved.</span>
            </p>

            <p className='text-gray-600 dark:text-gray-400 mt-4 text-sm transition sm:order-first sm:mt-0'>
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
