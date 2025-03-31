import Link from 'next/link';
// import Image from 'next/image';

export default function SocialIcons() {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/franRov13', icon: '/icons/twitter.svg' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ogdmaster215/about', icon: '/icons/youtube.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/fran_rov1/', icon: '/icons/instagram.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/francisco-a-rovira-landron-9b5136226/', icon: '/icons/linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com/franRov13', icon: '/icons/github.svg' },
  ];

  return (
    <div className="flex space-x-4 items-center">
      {socialLinks.map((social) => (
        <Link 
          key={social.name} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="sr-only">{social.name}</span>
          {/* You'll need to add these icons to your public/icons directory */}
          {/* For now using placeholder sizing */}
          <div className="w-6 h-6">
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}