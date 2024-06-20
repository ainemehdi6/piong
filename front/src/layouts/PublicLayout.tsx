import { PropsWithChildren } from "react";

type PublicLayoutProps = PropsWithChildren;

function PublicLayout({ children }: PublicLayoutProps) {
  return <>{children}</>;
}

export default PublicLayout;
