import { useAsset } from "src/assets/assets";

import { Socials } from "@components/block/socials";
import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { LimitWidth } from "@components/ui/structure/limit-width";
import { NodeBG } from "@components/ui/structure/node-bg";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function Hero() {
  return (
    <LimitWidth>
      <Container className={useClasses("hero")}>
        <Container className={useClasses("hero-background")}>
          <NodeBG rows={0} cols={0} />
        </Container>

        <Image
          alt="Aditya's Logo"
          src={useAsset("logo.png")}
          className={useClasses("hero-image")}
        />

        <Container className={useClasses("hero-content")}>
          <Container className={useClasses("hero-brand")}>
            <Heading size="max">
              AttAditya
            </Heading>

            <Container className={useClasses("hero-subtitle")}>
              <Heading size="medium">
                Software Craftsman
              </Heading>
            </Container>

            <Socials />
          </Container>
        </Container>
      </Container>
    </LimitWidth>
  );
}

