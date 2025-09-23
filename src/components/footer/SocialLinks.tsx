import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinksData = [
  { icon: <Github className="h-5 w-5" />, href: '#', name: 'GitHub' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinksData.map((link) => (
        <a
          key={link.name}
          href={link.href}
          aria-label={link.name}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;