import { SocialLink } from "@components/kit/social-link";
import { Container } from "@components/ui/structure/container";
import { SOCIALS } from "@registry/socials";
import { useClasses } from "@styles";

function SocialsRow({ row }: { row: typeof SOCIALS[number] }) {
  return (
    <Container className={useClasses("socials-linklets")}>
      {row.map((social, index) => (
        <SocialLink
          key={index}
          icon={social.icon}
          title={social.title}
          url={social.url}
        />
      ))}
    </Container>
  );
}

export function Socials() {
  const socials = SOCIALS;

  return (
    <Container className={useClasses("socials-rows")}>
      {socials.map((row, index) => (
        <SocialsRow key={index} row={row} />
      ))}
    </Container>
  );
}

