import { Header } from '@/app/components/header';
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/app/components/footer';
import { MainProvider } from './GlobalRedux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Guardian api',
	description: 'Guardian api',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<MainProvider>
					<Header />
					{children}
					<Footer />
				</MainProvider>
			</body>
		</html>
	);
}
