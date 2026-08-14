import { useCallback, useEffect, useState } from "preact/hooks";

import { MenuButton } from "@components/kit/menu-button";

export function ScrollTopButton() {
  const [canScroll, setCanScroll] = useState(false);

  const scrollToTop = useCallback(() => {
    document.documentElement?.scrollTo({
      top: 0, behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    let scrollableParent = document.documentElement;

    const handleScroll = () => {
      setCanScroll(!!scrollableParent?.scrollTop);
    };

    handleScroll();

    document.addEventListener(
      "scroll", handleScroll
    );

    return () => {
      document.removeEventListener(
        "scroll", handleScroll
      );
    };
  }, []);

  return (
    <MenuButton
      icon="ArrowUpRegular"
      onClick={scrollToTop}
      disabled={!canScroll}
    />
  );
}

