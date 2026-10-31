import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'TaskFlow | Gestão de tarefas', description: 'Dashboard de tarefas desenvolvido com Next.js' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
