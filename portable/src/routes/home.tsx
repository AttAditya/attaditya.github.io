import { Footer } from "@components/block/footer";
import { Parallax } from "@components/block/parallax";
import { Menu } from "@components/kit/menu";
import { MenuBrand } from "@components/kit/menu-brand";
import { ScrollTopButton } from "@components/kit/scroll-top-button";
import { ThemeButton } from "@components/kit/theme-button";
import { Container } from "@components/ui/structure/container";
import { Top } from "@components/ui/structure/top";
import { HomeView } from "@components/view/home-view";
import { ErrorView } from "@components/view/not-found-view";
import { AboutPage } from "@routes/about";
import { ProjectsPage } from "@routes/projects";
import { useForwarded } from "@utils/path";
import { type LayoutProps, useRouter } from "@utils/router";

function Layout({ forwarded, dynamic, children }: LayoutProps) {
  const path = `/${dynamic}/${forwarded?.join('/')}`;

  return <>
    <Parallax />
    <Container attributes={{ id: "main" }}>
      <Menu position="top-left">
        <MenuBrand />
      </Menu>

      <Menu position="top-right">
        <ThemeButton />
        <ScrollTopButton />
      </Menu>

      <Top />

      {!!children ? children : (
        !dynamic
          ? <HomeView />
          : <ErrorView
            code={404}
            message={`Can't reach: ${path}`}
          />
      )}

      <Footer />
    </Container>
  </>;
}

export function HomePage() {
  return useRouter(useForwarded(), Layout, {
    "projects": ProjectsPage,
    "about": AboutPage,
  });
}

