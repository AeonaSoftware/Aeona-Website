import "./globals.css";

export const metadata = {
  title: "Aeona",
  description:
    "Enabling businesses to streamline their logistics operations and enhance their overall efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
