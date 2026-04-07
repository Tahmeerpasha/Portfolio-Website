import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Tahmeer Pasha | Backend Software Engineer',
  description:
    'Backend Software Engineer with 1+ year of experience building production-grade Java + Spring Boot microservices and AWS event-driven pipelines. Open to SDE roles at product-based companies.',
  keywords: [
    'Backend Engineer',
    'Spring Boot',
    'Java',
    'AWS',
    'Full Stack Developer',
    'Tahmeer Pasha',
  ],
  authors: [{ name: 'Tahmeer Pasha', url: 'https://github.com/Tahmeerpasha' }],
  openGraph: {
    title: 'Tahmeer Pasha | Backend Software Engineer',
    description: 'Building scalable systems — Spring Boot, AWS, Kafka, Elasticsearch.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
