import { Link } from 'react-router-dom';

type FooterLink = {
  name: string;
  href: string;
};

type FooterLinkColumnProps = {
  title: string;
  links: FooterLink[];
};

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;