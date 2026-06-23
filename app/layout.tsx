import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aleeya Balqis — A Friendship Website',
  description: 'A modern Apple-inspired friendship website made by Arsyad for Aleeya Balqis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
