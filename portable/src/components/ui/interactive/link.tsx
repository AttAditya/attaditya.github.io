import { ComponentChildren } from "preact";

import { Clickable } from "@components/ui/interactive/clickable";

interface LinkProps {
  url: string;
  className?: string;
  newTab?: boolean;
  children: ComponentChildren;
}

export function Link({ url, className, children, newTab = false }: LinkProps) {
  return (
    <Clickable
      className={className}

      onClick={() => {
        if (newTab) {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      }}
    >
      {children}
    </Clickable>
  );
}

