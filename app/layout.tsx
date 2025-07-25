'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link id="theme-link" href={`/theme/theme-dark/magenta/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <div style={{ minHeight: '100vh' }}>
                    <PrimeReactProvider>
                        <LayoutProvider>{children}</LayoutProvider>
                    </PrimeReactProvider>
                </div>
            </body>
        </html>
    );
}
