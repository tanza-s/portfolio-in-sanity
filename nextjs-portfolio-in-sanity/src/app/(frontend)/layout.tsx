import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import VisualEditingComponent from "@/components/VisualEditing";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <>
      {children}
      {isEnabled && <VisualEditingComponent />}
      <SanityLive />
    </>
  );
}