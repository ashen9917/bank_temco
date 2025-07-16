'use client'
import AppConfig from '../../layout/AppConfig';
import React from 'react';
import "../../styles/globals.css"

interface FullPageLayoutProps {
    children: React.ReactNode;
}

export default function FullPageLayout({ children }: FullPageLayoutProps) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}