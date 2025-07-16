'use client';
import React, { useContext, useEffect } from 'react';
import { PrimeReactContext } from 'primereact/api';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'; // Added InputText import
import '@fontsource/noto-sans-sinhala'; // Defaults to 400 weight

import { LayoutContext } from '@/layout/context/layoutcontext';

const NewsPage = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);
    const router = useRouter();

    const goHome = () => {
        router.push('/');
    };

    const changeColorScheme = (colorScheme: 'light' | 'dark') => {
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

    return (
        <div className="news-page-container" style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
            {/* Header */}
            <div className="news-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', backgroundColor: '#44486d', color: '#fff' }}>
                <div className="cursor-pointer layout-topbar-logo" onClick={goHome}>
                    <img src="/layout/images/logo/temco_logo.webp" alt="layout" className="logo" style={{ height: '50px' }} />
                </div>
                <h1 className="text-4xl font-bold">පුවත්</h1>
                <Button label="Home" icon="pi pi-home" className="p-button-text p-button-light" onClick={goHome} />
            </div>

            {/* News Section */}
            <div className="news-content" style={{ padding: '20px' }}>
                <h2 className="text-center text-4xl font-bold mb-6" style={{ color: '#44486d' }}>
                    පුවත් අළුත්ම දැන්විම්
                </h2>

                {/* News Item 1 */}
                <div className="news-item">
                    <div
                        className="news-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Default for large screens
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        {/* Image */}
                        <div
                            className="news-image"
                            style={{
                                width: '48%',
                                marginBottom: '16px',
                                marginRight: '16px'
                            }}
                        >
                            <img
                                src="layout/images/news/02/Project2.webp"
                                alt="News 2"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="news-text"
                            style={{
                                width: '48%',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: '#333' }}>ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීමේදී ඉහළ ප්‍රශංසාවක් හිමිවේ</h3>
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '16px', textAlign: 'justify' }}>
                                2024 ජනවාරි 2 ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීම 2024 ජනවාරි 2 වන දින පැවැත්වූ අතර, සමූපකාර දෙපාර්තමේන්තුව නියෝජනය කරමින් සමූපකාර සමිති ප්‍රවර්ධන හා විමර්ශන නිලධාරිනී මාලනී සෙනෙවිරත්න මහත්මිය සහභාගී විය.
                                රැස්වීමේදී සෙනෙවිරත්න මහත්මිය ටෙම්කෝ හි විශිෂ්ට කාර්යසාධනය සහ විනිවිද පරිපාලනය පිළිබඳව අවධාරණය කළාය.
                            </p>
                            <a href="news/02" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button label="වැඩි විස්තර" className="p-button-outlined p-button-info" style={{ padding: '8px 16px' }} />
                            </a>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#ddd', margin: '24px 0' }} />
                </div>
                {/* News Item 1 */}
                <div className="news-item">
                    <div
                        className="news-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Default for large screens
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        {/* Image */}
                        <div
                            className="news-image"
                            style={{
                                width: '48%',
                                marginBottom: '16px',
                                marginRight: '16px'
                            }}
                        >
                            <img
                                src="/layout/images/news/01/01.webp"
                                alt="News 1"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="news-text"
                            style={{
                                width: '48%',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: '#333' }}>නව්‍ය උපාධි වැඩසටහන සඳහා TEMCO බැංකුව ප්‍රමුඛ අධ්‍යාපන ආයතන සමඟ අත්වැල් බැඳගනී.</h3>
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '16px', textAlign: 'justify' }}>
                                කොළඹ, 2024 දෙසැම්බර් 24 දින TEMCO බැංකුව විසින් ප්‍රමුඛ පෙළේ අධ්‍යාපන ආයතන කිහිපයක් සමඟ එක්ව අවුරුදු 4ක මෘදුකාංග ඉංජිනේරු උපාධි වැඩසටහනක් ආරම්භ කිරීම සඳහා සුවිශේෂී ගිවිසුමකට එළඹ තිබේ...
                            </p>
                            <a href="news/01" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button label="වැඩි විස්තර" className="p-button-outlined p-button-info" style={{ padding: '8px 16px' }} />
                            </a>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#ddd', margin: '24px 0' }} />
                </div>
                <div className="news-item">
                    <div
                        className="news-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Default for large screens
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        {/* Image */}
                        <div
                            className="news-image"
                            style={{
                                width: '48%',
                                marginBottom: '16px',
                                marginRight: '16px'
                            }}
                        >
                            <img
                                src="/layout/images/news/3.webp"
                                alt="News 4"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="news-text"
                            style={{
                                width: '48%',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: '#333' }}>පර්චස් 10ක ගෙවත්තකින් මසකට රුපියල් 30,000/= සිට 65,000/=ක් දක්වා ආදායමක්</h3>
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '16px', textAlign: 'justify' }}>
                                පර්චස් 10ක ගෙවත්තකින් මසකට රුපියල් 30,000/= සිට 65,000/=ක් දක්වා ආදායමක් TEMCO සමුපකාර සංවර්ධන බැංකුව මගින් දියත් කරන ලද ඩයබි ඔර්ගනික් ඖෂධ පැල ව්‍යාපෘතිය මේ වන විට සාර්ථක ප්‍රතිඵල ලබා ගනිමින් සිටී...
                            </p>
                            <a href="https://www.facebook.com/share/p/Vcv9aqepJcYSHTga/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button label="වැඩි විස්තර" className="p-button-outlined p-button-info" style={{ padding: '8px 16px' }} />
                            </a>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#ddd', margin: '24px 0' }} />
                </div>
                {/* News Item 2 */}
                <div className="news-item">
                    <div
                        className="news-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Default for large screens
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        {/* Image */}
                        <div
                            className="news-image"
                            style={{
                                width: '48%',
                                marginBottom: '16px',
                                marginRight: '16px'
                            }}
                        >
                            <img
                                src="/layout/images/news/2.webp"
                                alt="News 2"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="news-text"
                            style={{
                                width: '48%',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: '#333' }}>
                                PLANTING FOR PROFIT: THE SIMPLE GUIDE TO TURNING YOUR 10 PCH GARDEN INTO A MONEY-MAKING MACHINE - EARN 30,000-65,000 RUPEES PER MONTH
                            </h3>
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '16px', textAlign: 'justify' }}>
                                The Diabi Organic Medicinal Plant project, launched by TEMCO Cooperative Development Banking Society, is currently achieving successful results. Diabey Organic Medicinal Plant is a medicinal plant that can grow in any
                                climate in Sri Lanka...
                            </p>
                            <a href="https://web.facebook.com/share/p/bccFEuUbLheZaXvV/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button label="වැඩි විස්තර" className="p-button-outlined p-button-info" style={{ padding: '8px 16px' }} />
                            </a>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#ddd', margin: '24px 0' }} />
                </div>

                {/* News Item 3 */}
                <div className="news-item">
                    <div
                        className="news-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Default for large screens
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                    >
                        {/* Image */}
                        <div
                            className="news-image"
                            style={{
                                width: '48%',
                                marginBottom: '16px',
                                marginRight: '16px'
                            }}
                        >
                            <img
                                src="/layout/images/news/1.webp"
                                alt="News 3"
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="news-text"
                            style={{
                                width: '48%',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: '#333' }}>ජාතික මට්ටමින් Blockchain ක්‍රියාත්මක කළ යුතුය</h3>
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '16px', textAlign: 'justify' }}>
                                Blockchain යනු ක්‍රිප්ටෝ මුදල්වලට පමණක් සීමා වූවක් ලෙස නොසිතිය යුතුයි. එය ජාතික සංවර්ධනය වෙත රට යොමු කළ හැකි විප්ලවීය තාක්ෂණයන් පහෙන් එකකි. තරඟකාරීව සිටීමට ශ්‍රී ලංකාව ඉදිරි වසර 2 තුළ ජාතික මට්ටමින් Blockchain
                                ක්‍රියාත්මක කළ යුතුය.
                            </p>
                            <a href="https://www.facebook.com/share/p/igdHUja4uE6Le4Zk/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button label="වැඩි විස්තර" className="p-button-outlined p-button-info" style={{ padding: '8px 16px' }} />
                            </a>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#ddd', margin: '24px 0' }} />
                </div>

                {/* News Item 4 (New Item Added) */}
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
