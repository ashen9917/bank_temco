'use client';
import React, { useContext, useEffect, useState } from 'react';
import { PrimeReactContext } from 'primereact/api';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import '@fontsource/noto-sans-sinhala';

import { LayoutContext } from '@/layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext'; // Added InputText import

const NewsPage = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);
    const router = useRouter();

    // State to track language
    const [isEnglish, setIsEnglish] = useState(true);

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

            {/* News Section */}
            <div className="news-content px-4 lg:px-8 py-6">
                {/* English Content */}
                {isEnglish && (
                    <>
                        <h2 className="text-center text-4xl font-bold mb-6" style={{ color: '#44486d' }}>
                            TEMCO Bank Partners with Leading Educational Institutions to Launch Foundation for Innovative Degree Program
                        </h2>
                        <div className="mb-6">
                            <img src="/layout/images/news/01/01.webp" alt="TEMCO Partnership" style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                            <p style={{ fontSize: '22px', lineHeight: '1.8', color: '#555' }}>
                                December 24, 2024 - Colombo, Sri Lanka TEMCO Bank (Technology Entrepreneurship and Management Cooperative Development Banking Society Ltd) has entered into a groundbreaking partnership with several prestigious
                                institutions to establish a comprehensive 4-year Software Engineering Degree program. The Memorandum of Understanding (MOU) was signed at a ceremony attended by key stakeholders from all participating organizations...
                            </p>
                        </div>

                        {/* Program Details */}
                        <div className="program-details mb-6">
                            <h3 style={{ fontFamily: 'Balto-Medium.woff', fontSize: '26px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                                The Software Engineering degree program operates under a comprehensive regulatory and quality assurance framework, including:
                            </h3>
                            <ul style={{ fontSize: '20px', listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                                <li>BEng (Hons) Software Engineering in partnership with IIC University of Technology</li>
                                <li>Approved and registered by the Tertiary and Vocational Education Commission (TVEC) of Sri Lanka</li>
                                <li>Birmingham City University partnership for BSc (Hons) Software Engineering Top-Up program</li>
                                <li>Three Software Engineering Courses are conducted offered by OFQUAL (The Office of Qualifications and Examinations Regulation, UK)</li>
                                <li>Operating under UK Government educational standards under the governance of UK Awards and Skills Education Group.</li>
                            </ul>
                        </div>

                        <div className="stakeholders mb-6">
                            <img src="/layout/images/news/01/03.webp" alt="Key Stakeholders" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                            <p style={{ fontSize: '22px', lineHeight: '1.8', color: '#555' }}>
                                This multi-tiered accreditation and governance structure ensures the program delivers internationally recognized qualifications while maintaining compliance with both Sri Lankan and British educational standards...
                            </p>
                        </div>
                    </>
                )}

                {/* Sinhala Content */}
                {!isEnglish && (
                    <>
                        <h2 className="text-center text-4xl font-bold mb-6" style={{ color: '#44486d' }}>
                            නව්‍ය උපාධි වැඩසටහනක් සඳහා TEMCO බැංකුව ප්‍රමුඛ අධ්‍යාපන ආයතන සමඟ අත්වැල් බැඳගනී.
                        </h2>
                        <div className="mb-6">
                            <img src="/layout/images/news/01/01.webp" alt="TEMCO Partnership" style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                                කොළඹ, 2024 දෙසැම්බර් 24 දින TEMCO බැංකුව විසින් ප්‍රමුඛ පෙළේ අධ්‍යාපන ආයතන කිහිපයක් සමඟ එක්ව අවුරුදු 4ක මෘදුකාංග ඉංජිනේරු උපාධි වැඩසටහනක් ආරම්භ කිරීම සඳහා සුවිශේෂී ගිවිසුමකට එළඹ තිබේ...
                            </p>
                        </div>

                        {/* Program Details */}
                        <div className="program-details mb-6">
                            <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>මෙම උපාධි වැඩසටහන ක්‍රියාත්මක වන්නේ ජාත්‍යන්තර පිළිගැනීම සහිත පහත සඳහන් රාමුව යටතේය:</h3>
                            <ul style={{ fontSize: '18px', listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
                                <li>IIC තාක්ෂණ විශ්වවිද්‍යාලය සමඟ BEng (Hons) මෘදුකාංග ඉංජිනේරු උපාධිය.</li>
                                <li>ශ්‍රී Lanka තෘතීයික හා වෘත්තීය අධ්‍යාපන කොමිෂන් සභාවේ (TVEC) අනුමැතිය</li>
                                <li>බර්මින්හැම් සිටි විශ්වවිද්‍යාලය සමඟ BSc (Hons) මෘදුකාංග ඉංජිනේරු Top-Up වැඩසටහන</li>
                                <li>එක්සත් රාජධානියේ OFQUAL ආයතනය යටතේ පිරිනමන මෘදුකාංග ඉංජිනේරු පාඨමාලා තුනක්</li>
                                <li>එක්සත් රාජධානියේ Awards and Skills Education Group හි අධීක්ෂණය යටතේ ක්‍රියාත්මක වීම</li>
                            </ul>
                        </div>

                        <div className="stakeholders mb-6">
                            <img src="/layout/images/news/01/03.webp" alt="Key Stakeholders" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                            <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#555' }}>
                                ණය පහසුකම් පිලිබඳ වැඩි විස්තර සඳහා ආසන්නතම TEMCO බැංකු ශාඛාවට පැමිණීමෙන්, secretary@temcobank.com වෙත විද්‍යුත් තැපෑලක් යැවීමෙන් හෝ 0777570403 අංකය ඇමතීමෙන් සම්බන්ධ විය හැකිය...
                            </p>
                        </div>
                    </>
                )}
            <div id="footer" className="border-top-1 surface-border">
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
        </div>
    );
};

export default NewsPage;
