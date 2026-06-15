import { useAsset } from "@assets";
import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface ErrorViewProps {
  code?: number;
  message?: string;
}

export function ErrorView({
  code,
  message,
}: ErrorViewProps) {
  return (
    <Container className={useClasses("error-container")}>
      <Image
        src={useAsset("logo.png")}
        className={useClasses("error-image")}
      />

      <Container className={useClasses("error-content")}>
        <Container className={useClasses("error-meta")}>
          {code && <Heading
            className={useClasses("error-code")}
            size="large"
          >
            Error {code}
          </Heading>}

          <Heading size="max" className={useClasses("error-heading")}>
            Oh no!
          </Heading>
        </Container>

        {message && (
          <Text className={useClasses("error-message")}>
            {message}
          </Text>
        )}
      </Container>
    </Container>
  );
}

