'use client';
import React, { useContext, useEffect, useState } from 'react';
import { PrimeReactContext } from 'primereact/api';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import '@fontsource/noto-sans-sinhala';
import { InputText } from 'primereact/inputtext'; // Added InputText import

import { LayoutContext } from '@/layout/context/layoutcontext';

const NewsPage = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);
    const router = useRouter();

    const [isEnglish, setIsEnglish] = useState(true); // State to track language
    const goHome = () => {
        router.push('/');
    };

    const changeColorScheme = (colorScheme) => {
        changeTheme?.(layoutConfig.colorScheme, colorScheme, 'theme-link', () => {
            setLayoutConfig((prevState) => ({
                ...prevState,
                colorScheme,
                menuTheme: layoutConfig.colorScheme === 'dark' ? 'dark' : 'light'
            }));
        });
    };

    useEffect(() => {
        changeColorScheme('light');
        setLayoutConfig((prevState) => ({
            ...prevState,
            menuTheme: 'light'
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Toggle language function
    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <div className="news-page-container" style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
            {/* Header */}
            <div className="news-header flex align-items-center justify-content-between px-6 py-4" style={{ backgroundColor: '#44486d', color: '#fff' }}>
                <div className="cursor-pointer layout-topbar-logo flex align-items-center" onClick={goHome}>
                    <img src="/layout/images/logo/temco_logo.webp" alt="layout" className="logo" style={{ height: '50px' }} />
                </div>
                <h1 className="text-4xl font-bold">{isEnglish ? 'News' : 'පුවත්'}</h1>
                <Button label="Home" icon="pi pi-home" className="p-button-text p-button-light" onClick={goHome} />
                <Button label={isEnglish ? 'View Sinhala' : 'View English'} icon="pi pi-language" className="p-button-text p-button-light" onClick={toggleLanguage} />
            </div>

            {/* Language Toggle Button */}
            <div className="text-center mb-4"></div>

            {/* Content Section */}
            <div
                className="atlantis-modes w-full px-5"
                style={{
                    zIndex: '10',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '100%',
                    flexDirection: 'column',
                    marginTop: '50px'
                }}
            >
                <h2 className="text-center text-4xl font-bold mb-6" style={{ color: '#44486d' }}>
                    {isEnglish ? 'TEMCO BANK RECEIVES HIGH PRAISE AT 4TH ANNUAL GENERAL MEETING' : 'ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීමේදී ඉහළ ප්‍රශංසාවක් හිමිවේ'}
                </h2>
                <a href="https://drive.google.com/file/d/1vUZlBJ1Sto0kNEwg2HPRM0mwJVjlyiPX/view?ts=677922f9" target="_blank" rel="noopener noreferrer" style={{ display: 'block', position: 'relative', width: '100%' }}>
                    {/* YouTube Thumbnail */}
                    <img
                        src="/layout/images/news/02/Project2.webp"
                        style={{
                            width: '50%',
                            borderRadius: '8px',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </a>

                {/* Intro Section */}
                <div className="mb-6" style={{ textAlign: 'center' }}>
                    {/* Centers the text content */}
                    <span
                        style={{
                            marginTop: '50px',
                            fontSize: '22px',
                            lineHeight: '1.8',
                            color: '#555',
                            textAlign: 'justify',
                            display: 'block',
                            marginBottom: '20px',
                            padding: '0 15px'
                        }}
                    >
                        {isEnglish
                            ? "January 2, 2024 The TEMCO Bank held its 4th Annual General Meeting on January 2, 2024, with Mrs. Malini Senevirathna, Promotion and Investigation Officer of Cooperative Societies, representing the Department of Cooperatives. During the meeting, Mrs. Senevirathna highlighted TEMCO's exemplary performance and transparent operations. The following is her complete statement:"
                            : '2024 ජනවාරි 2 ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීම 2024 ජනවාරි 2 වන දින පැවැත්වූ අතර, සමූපකාර දෙපාර්තමේන්තුව නියෝජනය කරමින් සමූපකාර සමිති ප්‍රවර්ධන හා විමර්ශන නිලධාරිනී මාලනී සෙනෙවිරත්න මහත්මිය සහභාගී විය. රැස්වීමේදී සෙනෙවිරත්න මහත්මිය ටෙම්කෝ හි විශිෂ්ට කාර්යසාධනය සහ විනිවිද පරිපාලනය පිළිබඳව අවධාරණය කළාය. පහත දැක්වෙන්නේ ඇගේ සම්පූර්ණ ප්‍රකාශයයි:'}
                    </span>

                    <span
                        style={{
                            display: 'block',
                            marginBottom: '30px',
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: '#333'
                        }}
                    >
                        {isEnglish
                            ? '"I think there`s strong recognition for your society from the department. The department is much more cordial now compared to before. Other societies ask about your society and its activities when we attend different society meetings. You always speak up and come forward. There`s greater appreciation now compared to before. I`ve been with the society for almost two years now. I believe the department has good recognition for your society, and many societies discuss your cooperative support in public works. You speak up about the quality of these activities even when other societies don`t mention them. We truly value this because these are things that should happen at the department level. Many people pursue different objectives, but I`ve seen from the beginning that you always work towards common goals. Even when transactions happen transparently, all directors are informed about everything that takes place. That`s how it should be. As a cooperative society, then no one can challenge the activities being carried out. I believe that`s exactly how it should be. I pray that the society receives the courage to function even more successfully."'
                            : '"මං හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනී මක් තියෙනවා. ඉස්සරට වැඩිය ඇත්තටම දෙපාර්තමේන් දැන් ගොඩක් සුහදයි නේ. අනිත් සමිතිත් දැන් අහන්නව මොකක්ද ඒ සමිතිය, මොනවද වෙන්නේ කියලා අපි වෙන සමිති වලට ගියහම. ඔබ තුමා නිතරම කතා කරනවා ඉස්සරහට ඇවිල්ලා. ඉස්සරට වැඩිය අර ලොකු පැහැදීමක් තියෙනවා. දැන් මම දැන් අවුරුදු දෙකකට කිට්ටුද කොහෙද ඇවිල්ලා සමිතියට. මම හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනීමක් තියෙනවා ඔබතුමාලා ඇත්තටම කරන පොදු වැඩ වලදී සහයෝගය දීම සම්බන්ධයෙනුත් ගොඩක් සමිති කතා කරනවා. මේ කාර්යයන් වල ඉගුණාත්මක බව ඒවා ගැන අනිත් සමිති කතා කරන්නේ නැති අවස්ථාවලදී ඔබතුමා කතා කරනවා. ඒවා ඇත්තටම අපි අගය කරනවා මොකද දෙපාර්තමේන්තුව විදිහට ඒවා වෙන්න ඕනේ දේවල්. ගොඩක් අය යන්නේ වෙන වෙන අරමුනුත් එක්ක. ඒ උනාට මම මුල ඉඳන්ම දැක්කේ ඔබ තුමන්ලා එහෙම නැතිව ඒ කියන්නේ පොදු අරමුණු එක්ක තමයි යන්නේ හැම වෙලාවෙම .විනිවිධව ගනුදෙනුවක් සිද්ධ උනත් ඒක සියලුම අධ්‍යක්ෂකවරුන් දැනුවත් කරලා ඒ සිද්ධ වෙන හැමදේම දැනුවත් කරලා තියෙනවා. ඉතින් ඒක තමයි වෙන්න ඕනේ. සමුපකාර සමිතියක් විදියට විදිහට එතකොට කිසිම කෙනෙකුටත් අභියෝග කරන්න බැහැ මේ කරන කාර්යයන් සම්බන්ධයෙන්. මම දකින්නේ, ඇත්තටම ඒක තමයි වෙන්න ඕනේ. සමිතිය වඩාත් සාර්ථක අන්දමින් කටයුතු කරන්න හැකිවෙන්න දෛහිර්ය ලැබෙන්න කියලා මම ප්‍රාර්ථනා කරනවා."'}
                    </span>

                    <span
                        style={{
                            marginTop: '50px',
                            fontSize: '22px',
                            lineHeight: '1.8',
                            color: '#555',
                            textAlign: 'justify',
                            display: 'block',
                            marginBottom: '20px',
                            padding: '0 15px'
                        }}
                    >
                        {isEnglish
                            ? "The feedback emphasizes TEMCO's commitment to transparency, collaborative approach, and dedication to common goals, setting a benchmark for other cooperative societies in the region."
                            : 'මෙම ප්‍රතිපෝෂණය මගින් විනිවිදභාවය, සහයෝගීතා ප්‍රවේශය සහ පොදු අරමුණු සඳහා ටෙම්කෝහි කැපවීම අවධාරණය කරන අතර, කලාපයේ අනෙකුත් සමූපකාර සමිති සඳහා මිනුම් දණ්ඩක් සපයයි.'}
                    </span>
                </div>
            </div>
                <div id="footer" className="border-top-1 surface-border m-5">
                    <div className="flex align-items-center justify-content-between py-4 border-bottom-2 surface-border" style={{ mixBlendMode: 'multiply' }}>
                        <div className="flex align-items-center justify-content-between">
                            <div className="flex align-items-center" onClick={goHome}>
                                <img src="/layout/images/logo/temco_logo.webp" alt="atlantis-layout" className="logo" style={{ height: '32px' }} />
                                {/* <img src="/layout/images/logo/appname-dark.png" alt="atlantis-layout" className="appname ml-2" style={{ height: '12px' }} /> */}
                                <span className="text-gray-700 opacity-70" style={{ marginLeft: '2.5rem' }}>
                                    Copyright - TemcoBank
                                </span>
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-between">
                            <a href="https://www.facebook.com/profile.php?id=100077908253377" target="_blank" className="font-medium text-gray-700 cursor-pointer" rel="noopener noreferrer">
                                <i className="pi pi-facebook text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                            </a>
                            <a href="https://www.youtube.com/@temcodevelopmentbankingsoc8962" target="_blank" className="font-medium text-gray-700 cursor-pointer" rel="noopener noreferrer">
                                <i className="pi pi-youtube text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex align-items-center pt-5">
                        <div className="newsletter">
                            <span className="header font-medium text-xl opacity-60">Newsletter</span>
                            <p className="font-medium opacity-60">Join our newsletter to get notification about the new features</p>
                            <div className="p-inputgroup">
                                <InputText type="text" className="p-component p-inputtext" placeholder="Enter your email adress" />
                                <Button className="join-button p-button-outlined p-button-secondary p-button-text p-button p-component bg-bluegray-500" style={{ mixBlendMode: 'multiply', borderRadius: '0 8px 8px 0' }}>
                                    <span aria-hidden="true" className="p-button-label">
                                        Join
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default NewsPage;
