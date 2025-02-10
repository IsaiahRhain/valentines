import "./globals.css";


export const metadata = {
  title: "Valentines 2025",
  description: "Bodsie sent you a letter!",
  metadataBase: new URL('https://bodsie.com/valentines'),
  openGraph: {
    images: 'heart.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
