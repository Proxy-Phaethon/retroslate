import { SiteFooter } from "@/components/site-footer";

export function PageFrame({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      {children}
      {showFooter ? <SiteFooter /> : null}
    </>
  );
}
