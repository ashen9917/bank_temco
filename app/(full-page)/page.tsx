'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Ripple } from 'primereact/ripple';
import { InputText } from 'primereact/inputtext';
import { StyleClass } from 'primereact/styleclass';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { PrimeReactContext } from 'primereact/api';
import type { ColorScheme, Page } from '@/types';
import '@fontsource/noto-sans-sinhala'; // Defaults to 400 weight

import { LayoutContext } from '@/layout/context/layoutcontext';

const LandingPage: Page = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);
    const router = useRouter();

    const homeRef = useRef(null);
    const temcoRef = useRef(null);
    const timesRef = useRef(null);
    const menuTitleRef = useRef(null);

    const homeTitleRef = useRef(null);
    const temcoTitleRef = useRef(null);
    const orgTitleRef = useRef(null);
    const visionTitleRef = useRef(null);
    const direTitleRef = useRef(null);
    const promotionTitleRef = useRef(null);
    const projectTitleRef = useRef(null);

    const menu = useRef(null);
    const meetButtonRef = useRef(null);
    const meetRef = useRef(null);
    const visionRef = useRef(null);
    const direRef = useRef(null);
    const orgnRef = useRef(null);
    const promotionRef = useRef(null);
    const projectRef = useRef(null);
    const graduateRef = useRef(null);
    const newsRef = useRef(null);
    const pricingRef = useRef(null);
    // const graduateTitleRef = useRef(null);
    const pricingButtonRef = useRef(null);
    const buyRef = useRef(null);
    const featuresButtonRef = useRef(null);

    const goHome = () => {
        router.push('/');
    };
    const scrollToElement = (el: React.MutableRefObject<any>) => {
        setTimeout(() => {
            el.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 200);
    };
    const changeColorScheme = (colorScheme: ColorScheme) => {
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

    return (
        <div ref={homeRef} className="landing-container" style={{ background: '#fff', zIndex: '1' }}>
            <div id="header" className="landing-header flex flex-column w-full p-4" style={{ minHeight: '900px', background: `url('/layout/images/landing/landing-header-2x.jpg') top left no-repeat`, backgroundSize: 'cover' }}>
                <div className="header-menu-container flex align-items-center justify-content-between">
                    <div className="header-left-elements flex align-items-center justify-content-between">
                        <div className="cursor-pointer layout-topbar-logo flex align-items-center" onClick={goHome}>
                            <img src="/layout/images/logo/temco_logo.webp" alt="layout" className="logo" style={{ height: '50px' }} />
                        </div>
                        <ul
                            ref={menu}
                            id="menu"
                            style={{ top: '0px', right: '0%' }}
                            className="list-none  lg:flex lg:flex-row flex-column align-items-start bg-white absolute lg:relative h-screen lg:h-auto lg:surface-ground m-0 z-5 w-full sm:w-6 lg:w-full py-6 lg:py-0"
                        >
                            {/* <StyleClass nodeRef={timesRef} selector='@parent'  leaveClassName='hidden' enterActiveClassName="px-scalein" leaveActiveClassName="px-fadeout" enterClassName='hidden'>
                                <a ref={timesRef} className="p-ripple cursor-pointer block lg:hidden text-gray-800 font-medium line-height-3 hover:text-gray-800 absolute" style={{ top: '3rem', right: '2rem' }}>
                                    <i className="pi pi-times text-4xl"></i>
                                </a>
                            </StyleClass> */}
                            <StyleClass nodeRef={timesRef} selector="@parent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                <a ref={timesRef} className="p-ripple cursor-pointer block lg:hidden text-gray-800 font-medium line-height-3 hover:text-gray-800 absolute" style={{ top: '3rem', right: '2rem' }}>
                                    <i className="pi pi-times text-4xl"></i>
                                </a>
                            </StyleClass>

                            {/* <li className="mt-5 lg:mt-0">
                                <StyleClass nodeRef={homeButtonRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={homeButtonRef} onClick={() => scrollToElement(homeRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span>Home</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li> */}
                            <li>
                                <StyleClass nodeRef={temcoTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={temcoTitleRef} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>ටෙම්කෝ බැංකුව</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={promotionTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={promotionTitleRef} onClick={() => scrollToElement(promotionRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>උසස්වීම් ව්‍යුහය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>

                            <li>
                                <StyleClass nodeRef={orgTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={orgTitleRef} onClick={() => scrollToElement(orgnRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>ආයතනික ව්‍යුහය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={projectTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={projectTitleRef} onClick={() => scrollToElement(projectRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>ව්‍යාපෘති</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            {/* <li>
                                <StyleClass nodeRef={graduateTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={graduateTitleRef} onClick={() => scrollToElement(graduateRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                    <span style={{ fontSize: '18px' }}>උපාධි වැඩසටහන</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li> */}
                            <li>
                                <StyleClass nodeRef={direTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={direTitleRef} onClick={() => scrollToElement(direRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>විධායක අධ්‍යක්ෂ මණ්ඩලය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={visionTitleRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                    <a ref={visionTitleRef} onClick={() => scrollToElement(newsRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span style={{ fontSize: '21px' }}>පුවත්</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right-elements flex align-items-center justify-content-between">
                        <a href="https://www.facebook.com/profile.php?id=100077908253377" target="_blank" className="font-medium text-gray-700 cursor-pointer" rel="noopener noreferrer">
                            <i className="pi pi-facebook text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                        </a>
                        <a href="https://www.youtube.com/@temcodevelopmentbankingsoc8962" target="_blank" className="font-medium text-gray-700 cursor-pointer" rel="noopener noreferrer">
                            <i className="pi pi-youtube text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                        </a>

                        <a href="/auth/login" style={{ textDecoration: 'none' }}>
                            <Button className="contact-button mr-3 p-button-outlined p-button-secondary p-button-text p-button p-component font-large border-round text-gray-700" style={{ background: 'rgba(68, 72, 109, 0.05)' }}>
                                <span aria-hidden="true" className="p-button-label">
                                    Login
                                </span>
                            </Button>
                        </a>

                        <StyleClass nodeRef={menuTitleRef} selector="#menu" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                            <a ref={menuTitleRef} className="p-ripple lg:hidden font-medium text-gray-700 cursor-pointer">
                                <i className="pi pi-bars fs-xlarge"></i>
                            </a>
                        </StyleClass>
                    </div>
                </div>

                <div
                    ref={temcoRef}
                    className="header-text"
                    style={{
                        marginLeft: '-40px', // Removed negative margin for better alignment
                        marginTop: '-25px',
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        padding: '0'
                    }}
                >
                    {/* Optional Content */}
                </div>

                <style jsx>{`
                    .header-text {
                        /* Default styles for larger screens (desktop) */
                        background: url('/layout/images/landing/main_background.webp');
                        background-size: contain; /* Shows the full image */
                        background-repeat: no-repeat;
                        background-position: center center;
                        height: 100vh; /* Fills the entire viewport height */
                    }

                    @media (max-width: 1024px) {
                        /* Tablet devices */
                        .header-text {
                            background: url('/layout/images/landing/main_background.webp'); /* Keeps the same background for tablets */
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center center;
                        }
                    }

                    @media (max-width: 768px) {
                        /* Mobile devices */
                        .header-text {
                            background: url('/layout/images/landing/mobile_background.webp') !important; /* Uses mobile background */
                            background-size: contain !important; /* Ensures full image display */
                            background-repeat: no-repeat !important;
                            background-position: center center !important;
                            height: 100vh !important; /* Ensures full viewport height */
                        }
                    }

                    @media (max-width: 480px) {
                        /* Small mobile devices */
                        .header-text {
                            height: auto; /* Ensures proper scaling on very small screens */
                            width: 100vw;
                        }
                    }
                `}</style>

                <div ref={visionRef} className="header-features" style={{ padding: '100px 60px' }}>
                    <div className="grid flex">
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center">
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center">
                                <span className="title mb-3 block text-4xl">දර්ශනය</span>
                                <span className="content text-large" style={{ lineHeight: 1.2, fontSize: '18px' }}>
                                    &quot;තාක්ෂණයෙන් පිරිපුන් ව්‍යවසායකත්වයෙන් ඔප් නැංවුණු සහ කළමනාකරණයෙන් සවිබල ගැන්වුණු දේශීය ආර්ථිකයක් සහ සෞභාග්‍යමත් දේශයක්&quot;.
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center">
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center">
                                <span className="title mb-3 block text-4xl">මෙහෙවර</span>
                                <span style={{ lineHeight: 1.2, fontSize: '18px' }} className="content text-large">
                                    &quot;තාක්ෂණය, ව්‍යවසායකත්වය සහ කළමනාකරණය තුළින් ගම ශක්තිමත් කරමින් විවිධ ක්ෂේත්‍රවල නිර්මාණ දේශීය සහ ජාත්‍යන්තර තලය වෙත ගෙන යමින් සාමාජිකයන්ගේ නිපුවතා සංවර්ධනයත් ජීවන තත්ත්වය උසස් කිරීමත් මගින් දේශය
                                    ගොඩනැංවීම&quot;
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center">
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center">
                                <span className="title mb-3 block text-4xl">පරමාර්ථය</span>
                                <span style={{ lineHeight: 1.2, fontSize: '18px' }} className="content text-large">
                                    සමිතියේ පරමාර්ථය වනාහි සමූපකාර ප්‍රතිපත්ති අනුව සමූපකාර සමිතියක් ලෙස ක්‍රියාත්මක වෙමින් එහි සාමාජිකයන්ගේ ආර්ථික සමාජයීය සහ සංස්කෘතික අවශ්‍යතාවයන් සපුරාලීම සඳහා තාක්ෂණය ව්‍යවසායකත්වය සහ කළමනාකරණය දියුණු කරමින්
                                    සාමාජිකයන් තුළ සකසුරුවම්කම සහ අන්‍යෝන්‍යාධාරය සහ ආත්මාධාරය පිළිබඳ හැඟීම් සහ මාජිකයන් හිමිකාරීත්වය දරන ව්‍යාපාර සහ සමූපාකාර ව්‍යවහාරය දියුණු කිරීමත් දේශීයත්වය අගයන පරිසර හිතකාමී තිරසර සංවර්ධනයක් ඇති කිරීම සඳහා
                                    තාක්ෂණය මත පදනම් වූ සමූපාකාරික සමාජයක් ස්ථාපිත කිරීමත් වන්නේය.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={meetRef} id="meet-atlantis" className="flex justify-content-center w-full bg-gray-900 relative" style={{ minHeight: '620px', paddingTop: '65px' }}>
                <div className="ellipsis-1 absolute right-0" style={{ zIndex: '11' }}>
                    <img src="/layout/images/landing/ellipse-1.png" alt="atlantis" width="410" />
                </div>
                <div className="ellipsis-2 absolute left-0" style={{ zIndex: '11', bottom: '-100px' }}>
                    <img src="/layout/images/landing/ellipse-2.png" alt="atlantis" width="420" />
                </div>
                <div className="ellipsis-3 absolute" style={{ zIndex: '11', filter: 'blur(20px)', left: '130px', top: '40px' }}>
                    <img src="/layout/images/landing/ellipse-3.png" alt="atlantis" width="300" />
                </div>
                <div className="ellipsis-4 absolute bottom-0" style={{ zIndex: '9', right: '310px' }}>
                    <img src="/layout/images/landing/ellipse-4.png" alt="atlantis" width="125" />
                </div>

                <div
                    className="atlantis-modes w-auto px-5"
                    style={{
                        zIndex: '10',
                        position: 'relative', // Ensures the play button can be positioned over the image
                        display: 'inline-block', // Keeps everything contained together
                        maxWidth: '900px'
                    }}
                >
                    {/* Clickable YouTube link */}
                    <a
                        href="https://www.youtube.com/watch?v=CUyOx5ERX50"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'block', position: 'relative' }} // Ensures the entire image is clickable
                    >
                        {/* YouTube Thumbnail */}
                        <img
                            src="https://img.youtube.com/vi/CUyOx5ERX50/maxresdefault.jpg"
                            alt="YouTube Thumbnail"
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                display: 'block'
                            }}
                        />

                        {/* Play Button */}
                        <span
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)', // Centers the play button
                                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background
                                borderRadius: '50%',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Play Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24" style={{ cursor: 'pointer' }}>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            <div ref={promotionRef} className="clip-background bg-gray-900 relative">
                <div className="landing-wrapper px-6 pb-8 absolute w-full" style={{ color: '#44486d', background: 'linear-gradient(180deg, #f4f8fb 17.13%, #eeeefa 65.89%)' }}>
                    <div id="features" className="pr-8 pl-8 features">
                        <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', marginTop: '150px', color: 'black', fontWeight: 'bold' }}>
                            අධ්‍යක්ෂක මණ්ඩල උසස්වීම් ව්‍යුහය
                        </h2>
                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '80px', marginTop: '15px' }}>
                            <div className="col-12 md:col-6">
                                {/* <h3 className="font-medium text-3xl">අධ්‍යක්ෂක මණ්ඩල උසස්වීම් ව්‍යුහය</h3> */}
                                <p style={{ marginTop: '20px', maxWidth: '700px', fontSize: '18px', color: 'black', textAlign: 'justify' }}>
                                    සීමාසහිත තාක්ෂණ ව්‍යවසාය හා කළමනාකරණ සමුපකාර සංවරධන බැංකු සමිතිය පාතික මට්ටමේ විධායක සභාවකන්‌ හා ග්‍රාම නිලධාර මටටමේ සිට සකස්‌ වන කණ්ඩායමි ක්‍රමයකින්‌ සමන්චිත වේ. ටෙම්කෝ බැංකු සමිතියේ අභ්‍යන්තර ආයතනික ව්‍යුහය
                                    සකස්චන්නේ ප්‍රජාතන්ත්‍රවාදී නියෝපීත ක්‍රමයක්‌ හරහාය. මුලික වශයෙන්‌ කණ්ඩායම්‌ චල සභාපතිවරැන්‌ එක්වී තම ග්‍රාම නිලධාර මට්ටමේ ශාඛාව නිරීමාණය කර ගැනීම සිදුකරයි. වසර තුනකට වරක්‌ පැවැත්වෙන නිලවරණයෙදී එම ග්‍රාම නිලධාර
                                    මට්ටමේ ශාඛාවල සභාපතිවරැන්‌ හා සේවා, කරිමාන්ත හා කෘෂිකරිමාන්ත ක්ෂේතු නියෝජනය කරනු ලබන සාමාපජිකයින්‌ නියෝපතයන්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ ප්‍රාදේශිය ලේකමි මට්ටමේ ශාඛාචේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. ඒ ආකාරයෙන්ම ප්‍රාදේශීය
                                    ලේකමි කොට්ඨාස මට්ටමේ සභාපතිවරැන්‌ හා සේවා, කර්මාන්ත හා කෘෂිකර්මාන්ත ක්ෂේතු නියෝජනය කරනු ලබන සාමාපිකයින්‌ නියෝපීතයින්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ දිස්තුක්ක මටටමේ ශාබාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. ඒ අයුරන්ම දිස්තික්ක මටටමේ
                                    සභාපතිවරැන්‌ හා සේවා, කර්මාන්ත හා කෘෂිකරීමාන්ත ක්ෂේත නියෝජනය කරනු ලබන සාමාජිකයින්‌ නියෝපතයන්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ පළාත්‌ මට්ටමේ ශාඛාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. මෙම ක්‍රමවේදය හරහාම පළාත්‌ නවයක සුදුසුකමි සපුරාලන
                                    සභාපතිවරැන්‌, සේවා, කරමාන්ත හා කෘෂිකරමාන්ත ක්ෂේත නියෝජනය කරනු ලබන පිරස හා වරතමානයේ ජාතික විධායක සභාවේ සාමාජිකයන්‌ එක්ව විධායක සභාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරා පත්කර ගනී. මීට අමතරව උපදේශක මණ්ඩලයක්‌ ද සමිතිය වෙනුවෙන්‌
                                    නිර්මාණය කරගැනීමට අතුරැ ව්‍යවස්ථාවෙන්‌ ප්‍රතිපාදන සලස්වා තිබේ.
                                </p>
                            </div>
                            <div className="col-12 md:col-6 flex flex-column">
                                <img src="/layout/images/pictures/Membership.webp" alt="layout" style={{ marginTop: '20px', height: '440px' }} />
                            </div>
                        </div>

                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '80px', marginTop: '15px' }}>
                            <div className="col-12 md:col-6 flex flex-row-reverse">
                                <img src="/layout/images/pictures/OrganizationChart.webp" alt="layout" className="w-full" style={{ marginTop: '0', height: '400px' }} />
                            </div>

                            <div ref={orgnRef} className="col-12 md:col-6 p-5">
                                <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold', textAlign: 'revert' }}>
                                    බැංකු සමිතියේ ආයතනික ව්‍යුහය
                                </h2>
                                <p style={{ marginTop: '20px', maxWidth: '710px', fontSize: '22px', color: 'black', textAlign: 'justify' }}>
                                    ටෙම්කෝ බැංකු සමිතියේ ජාතික බැංකු ඒකකය ඇතුළු සියලු පළාත්‌, දිස්ත්‍රික්ක, ප්‍රාදේශීය ලේකම්‌ කොට්ඨාසය හා ග්‍රාම නිලධාර කොට්ඨාස මට්ටමේ බැංකු ඒකක සඳහා ඒකීය සංවිධාන ව්‍යහයක්‌ නිර්මාණය කොට තිබේ, මෙම බැංකු ඒකක සෑම විටම
                                    දෙපාරිතමේන්තු 13කින්‌ යුක්ත වන ලෙස නිර්මාණය කොට ඇත අතර බැංකු ඒකකයේ වර්ධනයත්‌ සමග සියලු දෙපාරතමේන්තු හා මානව සමිපත්‌ වර්ධනය සිදු කෙරෙනු ඇත.
                                </p>
                            </div>
                        </div>

                        <div ref={projectRef} className="grid feature-boxes feature-boxes-3" style={{ marginBottom: '100px' }}>
                            <div className="col-12 md:col-7">
                                <h2 className="font-large text-4xl font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
                                    බලයලත් ව්‍යවස්ථාපිත ව්‍යාපෘති
                                </h2>
                                <ul className="pl-4" style={{ marginTop: '20px', color: 'black' }}>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>මූල්‍ය සහ බැංකු කටයුතු සේවා සහ වෙළඳ සම්බන්ධතා ව්‍යාපෘති</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>අධ්‍යාපන සහ ව්‍යවස්ථායකත්ව සංවර්ධන ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>බෙදා හැරීම් ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>ට්‍රේනින් හවුස් ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>ඩිජිටල් තාක්ෂණ ව්‍යාපෘති වෙළඳ ප්‍රදර්ශන ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>මාධ්‍ය සහ ප්‍රචාරණ ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>රක්ෂණ ව්‍යාපෘතිය</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>ඉදිකිරීම් හා උපදේශන</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>ගණකාධිකරණ සහ විගණන සේවා</li>
                                    <li style={{ fontSize: '20px', lineHeight: '1.8' }}>අනෙකුත් ව්‍යාපෘති</li>
                                </ul>
                            </div>
                            <div className="col-12 md:col-5 feature-widgets relative">
                                <img src="/layout/images/pictures/project.webp" alt="atlantis" className="chart-widget w-full" style={{ maxHeight: '360px', opacity: '1' }} />
                            </div>
                        </div>
                    </div>
                    <div id="features" ref={graduateRef} className="pr-8 pl-8 features">
                        <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
                            ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීමේදී ඉහළ ප්‍රශංසාවක් හිමිවේ{' '}
                        </h2>

                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '80px', marginTop: '15px' }}>
                            <div className="col-12 md:col-6 p-5">
                                <p style={{ marginTop: '20px', maxWidth: '700px', textAlign: 'justify', fontSize: '19px', color: 'black' }}>
                                    2024 ජනවාරි 2 ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීම 2024 ජනවාරි 2 වන දින පැවැත්වූ අතර, සමූපකාර දෙපාර්තමේන්තුව නියෝජනය කරමින් සමූපකාර සමිති ප්‍රවර්ධන හා විමර්ශන නිලධාරිනී මාලනී සෙනෙවිරත්න මහත්මිය සහභාගී විය.
                                    රැස්වීමේදී සෙනෙවිරත්න මහත්මිය ටෙම්කෝ හි විශිෂ්ට කාර්යසාධනය සහ විනිවිද පරිපාලනය පිළිබඳව අවධාරණය කළාය. පහත දැක්වෙන්නේ ඇගේ සම්පූර්ණ ප්‍රකාශයයි: මං හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනී මක්
                                    තියෙනවා. ඉස්සරට වැඩිය ඇත්තටම දෙපාර්තමේන් දැන් ගොඩක් සුහදයි නේ. අනිත් සමිතිත් දැන් අහන්නව මොකක්ද ඒ සමිතිය, මොනවද වෙන්නේ කියලා අපි වෙන සමිති වලට ගියහම. ඔබ තුමා නිතරම කතා කරනවා ඉස්සරහට ඇවිල්ලා. ඉස්සරට වැඩිය අර ලොකු
                                    පැහැදීමක් තියෙනවා. දැන් මම දැන් අවුරුදු දෙකකට කිට්ටුද කොහෙද ඇවිල්ලා සමිතියට. මම හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනීමක් තියෙනවා ඔබතුමාලා ඇත්තටම කරන පොදු වැඩ වලදී සහයෝගය දීම සම්බන්ධයෙනුත්
                                    ගොඩක්...
                                    <a href="news/02" rel="noopener noreferrer">
                                        More
                                    </a>
                                </p>
                            </div>
                            <div className="col-12 md:col-6 flex flex-row-reverse">
                                <a
                                    href="https://drive.google.com/file/d/1vUZlBJ1Sto0kNEwg2HPRM0mwJVjlyiPX/view?ts=677922f9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', position: 'relative' }} // Ensures the entire image is clickable
                                >
                                    {/* YouTube Thumbnail */}
                                    <img
                                        src="/layout/images/news/02/Project2.webp"
                                        alt="YouTube Thumbnail"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            display: 'block',
                                            marginTop: '40px'
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="features" ref={graduateRef} className="pr-8 pl-8 features">
                        <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
                            නව්‍ය උපාධි වැඩසටහන සඳහා TEMCO බැංකුව ප්‍රමුඛ අධ්‍යාපන ආයතන සමඟ අත්වැල් බැඳගනී.
                        </h2>

                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '80px', marginTop: '15px' }}>
                            <div className="col-12 md:col-6 flex flex-row-reverse">
                                <img src="/layout/images/pictures/Graduating.webp" alt="layout" className="w-full" style={{ marginTop: '50px', height: '80%' }} />
                            </div>

                            <div className="col-12 md:col-6 p-5">
                                <p style={{ marginTop: '20px', maxWidth: '700px', textAlign: 'justify', fontSize: '19px', color: 'black' }}>
                                    කොළඹ, 2024 දෙසැම්බර් 24 දින TEMCO බැංකුව විසින් ප්‍රමුඛ පෙළේ අධ්‍යාපන ආයතන කිහිපයක් සමඟ එක්ව අවුරුදු 4ක මෘදුකාංග ඉංජිනේරු උපාධි වැඩසටහනක් ආරම්භ කිරීම සඳහා සුවිශේෂී ගිවිසුමකට එළඹ තිබේ. මෙම අවබෝධතා ගිවිසුම (MOU)
                                    අත්සන් කිරීමේ උත්සවය සියලු සහභාගී ආයතනවල ප්‍රධාන නියෝජිතයින්ගේ සහභාගීත්වයෙන් පැවැත්විණි. මෙම වැඩසටහන යටතේ ජාවා ඉන්ස්ටිටියුට් හෝල්ඩිංග්ස්, ෂෙෆීල්ඩ් ජාත්‍යන්තර ආයතනය, සහ චාල්ස් නිවාස හා දේපළ සංවර්ධකයින් යන ආයතන එක්ව
                                    ශ්‍රී ලාංකික සිසුන් සඳහා උසස් තත්ත්වයේ අධ්‍යාපන අවස්ථා සැපයීමට කටයුතු කරනු ඇත. උත්සවයට TEMCO බැංකුවේ සභාපති ආචාර්ය ඉෂාන්ත සිරිබද්දන, ලේකම් ගාමිණී දහනායක සහ භාණ්ඩාගාරික පුණ්‍යසෝම වේවැලගේ යන මහත්වරුන් සහභාගී වූහ.
                                    එමෙන්ම ෂෙෆීල්ඩ් ජාත්‍යන්තර ආයතනයේ සභාපතිනි නිල්මිණි දිසානායක මහත්මිය, ජාවා ඉන්ස්ටිටියුට් හෝල්ඩිංග්ස් හි ප්‍රධාන විධායක නිලධාරී...
                                    <a href="news/01" rel="noopener noreferrer">
                                        More
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={direRef}
                        id="direRef"
                        className="flex pricing pr-8 pl-8"
                        style={{
                            display: 'contents',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '10vh', // Full viewport height
                            paddingLeft: '',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
                            විධායක අධ්‍යක්ෂ මණ්ඩලය
                        </h2>
                    </div>

                    <div
                        ref={direRef}
                        id="direRef"
                        className="pricing mb-8"
                        style={{
                            display: 'flow',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                            // height: '100vh', // Full viewport height
                        }}
                    >
                        <div className="grid pricing-content w-full" style={{ paddingTop: '2rem' }}>
                            <div className="col-12 lg:col-12 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-2xl text-center mb-4" style={{ color: '#333333' }}>
                                        සභාපති හා නිර්මාතෘ
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="/layout/images/directors/Dr.Ishantha.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-3xl" style={{ color: '#4A4A4A' }}>
                                            ආචාර්ය ඉශාන්ත සිරිබද්දන
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: 'black', lineHeight: '1.5' }}>
                                            PhD, DBA, PGDip(IT) <br /> BSc(ChemSp). SCJP
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'ජාවා තාක්ෂණ හා උසස් අධ්‍යාපන ආයතනය'
                                            },
                                            {
                                                title: 'හිටපු උපදේශක',
                                                description: 'ශ්‍රී ලංකා මහ බැංකුවේ මූල්‍ය ප්‍රතිපත්ති හා උපදේශන කමිටුව'
                                            },
                                            {
                                                title: 'හිටපු උපදේශක',
                                                description: 'සමූපකාර සංවර්ධන අමාත්‍යාංශය'
                                            },
                                            {
                                                title: 'හිටපු අධ්‍යක්ෂ මණ්ඩල සාමාජික',
                                                description: 'ශ්‍රී ලංකා වෘත්තීය පුහුණු අධිකාරිය'
                                            },
                                            {
                                                title: 'හිටපු අධ්‍යක්ෂ මණ්ඩල සාමාජික',
                                                description: 'ජාතික ආධුනිකත්ව හා කාර්මික පුහුණු අධිකාරිය'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '1.2rem', // Increased font size
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={pricingRef} id="pricing" className="flex pricing flex-column pr-8 pl-8" style={{ paddingLeft: '14rem', marginBottom: '2.5rem' }}>
                        <div className="grid pricing-content w-full">
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        උප සභාපති
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="/layout/images/directors/Mr.Upendra.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            උපේන්ද්‍ර කන්නංගර
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            NDESc, MIIE
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'ගුඩ්විල් ග්‍රැනයිට් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ පරිපාලන/ලේකම්
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="/layout/images/directors/Mr.Gamini.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            ගාමිණි දහනායක
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            AAT
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'ලීඩ්ස් ග්‍රැෆික්ස් (පුද්ගලික) සමාගම'
                                            },
                                            {
                                                title: 'සභාපති',
                                                description: 'ගිමාරා මෙඩිකල් හර්බ් සහ ටී (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ මූල්‍ය/භාණ්ඩාගාරික
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Punyasoma.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            කන්දේ වෑවලගේ පුන්‍යසෝම
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BComSP
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'වෑවලගේ සහ සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ අභ්‍යන්තර විගණන
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Charith.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            චරිත් රණසිංහ
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BSc, BBA, MBA(UK) MA(UK)
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'ටයිමෙක්ස් (පුද්ගලික) සමාගම'
                                            },
                                            {
                                                title: 'කළමනාකාර අධ්‍යක්ෂ',
                                                description: 'ස්මාර්ට් ලේබල්ස් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={pricingRef} id="pricing" className="flex pricing flex-column pr-8 pl-8" style={{ paddingLeft: '14rem', marginBottom: '2.5rem' }}>
                        <div className="grid pricing-content w-full">
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        කළමනාකාර අධ්‍යක්ෂ
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Janaka.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            ජනක කුමාර
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BSc, MBA(UK), MSc(UK)
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'කළමනාකාර අධ්‍යක්ෂ/ප්‍රධාන විධායක නිලධාරී',
                                                description: 'ස්මාර්ට් ග්ලෝබල් (පුද්ගලික) සමාගම'
                                            },
                                            {
                                                title: 'කළමනාකාර අධ්‍යක්ෂ/ප්‍රධාන විධායක නිලධාරී',
                                                description: 'දන්කොටුව ඔයිල් මිල් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ ව්‍යාපෘති
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Nuwan.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            නුවන් හෙට්ටිආරච්චි
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BSc
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'සභාපති',
                                                description: 'ගිගීස් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ තාක්ෂණ
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Shiyan.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            ශියන් සංඛ අරඹවත්ත
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BEng(SE), SCJP, MAD
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'නියෝජ්‍ය සභාපති',
                                                description: 'ජාවා තාක්ෂණ හා උසස් අධ්‍යාපන ආයතනය ගම්පහ (පුද්ගලික) සමාගම'
                                            },
                                            {
                                                title: 'සභාපති',
                                                description: 'අඩ්රිනලින් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-3 flex justify-content-center">
                                <div
                                    className="card h-full bg-white w-full flex flex-column align-items-center p-5"
                                    style={{
                                        borderRadius: '20px',
                                        boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Title */}
                                    <span className="type font-bold text-xl text-center mb-4" style={{ color: '#333333' }}>
                                        අධ්‍යක්ෂ පර්යේෂණ සහ සංවර්ධන
                                    </span>

                                    {/* Profile Image */}
                                    <img
                                        src="layout/images/directors/Mr.Jalana.webp"
                                        alt="atlantis"
                                        style={{
                                            maxHeight: '120px',
                                            borderRadius: '15px',
                                            marginBottom: '15px'
                                        }}
                                    />

                                    {/* Name & Title */}
                                    <div className="text-center mb-4">
                                        <span className="font-medium text-lg" style={{ color: '#4A4A4A' }}>
                                            ජලන කන්නන්ගර
                                        </span>
                                        <p className="text-sm mt-1" style={{ color: '#777777', lineHeight: '1.5' }}>
                                            BSc(SEng) Ungrad
                                        </p>
                                    </div>

                                    {/* List of Roles */}
                                    <ul className="options w-full p-0" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                        {[
                                            {
                                                title: 'අධ්‍යක්ෂ',
                                                description: 'නීල් ග්‍රැනයිට් (පුද්ගලික) සමාගම'
                                            }
                                        ].map((role, index) => (
                                            <li
                                                key={index}
                                                className="text-center py-2 px-3"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    borderBottom: index !== 4 ? '1px solid #eee' : 'none',
                                                    color: '#555555'
                                                }}
                                            >
                                                <b>{role.title}</b> <br />
                                                {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={newsRef} className="flex items-center justify-center mb-8 pt-5 px-4 overflow-hidden">
                        <div className="text-center w-full max-w-screen-md overflow-x-hidden">
                            <h2 className="font-large text-4xl text-center font-weight-900" style={{ marginBottom: '10px', color: 'black', fontWeight: 'bold' }}>
                                පුවත්
                            </h2>
                            <div className="grid pricing-content w-full">
                                {/* First News Card */}
                                <div className="col-12 lg:col-4 flex justify-content-center">
                                    <a
                                        href="https://www.facebook.com/share/p/Vcv9aqepJcYSHTga/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div
                                            className="card h-full w-full flex flex-column align-items-center p-5 hover-card"
                                            style={{
                                                borderRadius: '20px',
                                                border: '5px solid #d1d5db',
                                                transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                                                color: '#333333'
                                            }}
                                        >
                                            <img
                                                src="/layout/images/news/3.webp"
                                                alt="atlantis"
                                                style={{
                                                    maxHeight: '120px',
                                                    borderRadius: '15px',
                                                    marginBottom: '15px'
                                                }}
                                            />
                                            <div className="text-center mb-4">
                                                <span className="font-medium text-lg">පර්චස් 10ක ගෙවත්තකින් මසකට රුපියල් 30,000/= සිට 65,000/=ක් දක්වා ආදායමක්</span>
                                                <p
                                                    className="text-sm mt-5"
                                                    style={{
                                                        lineHeight: '1.5',
                                                        textAlign: 'justify'
                                                    }}
                                                >
                                                    පර්චස් 10ක ගෙවත්තකින් මසකට රුපියල් 30,000/= සිට 65,000/=ක් දක්වා ආදායමක් TEMCO සමුපකාර සංවර්ධන බැංකුව මගින් දියත් කරන ලද ඩයබි ඔර්ගනික් ඖෂධ පැල ව්‍යාපෘතිය මේ වන විට සාර්ථක ප්‍රතිඵල ලබා ගනිමින්
                                                    සිටී...
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Second News Card */}
                                <div className="col-12 lg:col-4 flex justify-content-center">
                                    <a
                                        href="https://www.facebook.com/share/p/Vcv9aqepJcYSHTga/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div
                                            className="card h-full w-full flex flex-column align-items-center p-5 hover-card"
                                            style={{
                                                borderRadius: '20px',
                                                border: '5px solid #d1d5db',
                                                transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                                                color: '#333333'
                                            }}
                                        >
                                            <img
                                                src="/layout/images/news/2.webp"
                                                alt="atlantis"
                                                style={{
                                                    maxHeight: '120px',
                                                    borderRadius: '15px',
                                                    marginBottom: '15px'
                                                }}
                                            />
                                            <div className="text-center mb-4">
                                                <span className="font-medium text-lg">PLANTING FOR PROFIT: THE SIMPLE GUIDE TO TURNING YOUR 10 PCH GARDEN INTO A MONEY-MAKING MACHINE - EARN 30,000-65,000 RUPEES PER MONTH</span>
                                                <p
                                                    className="text-sm mt-5"
                                                    style={{
                                                        lineHeight: '1.5',
                                                        textAlign: 'justify'
                                                    }}
                                                >
                                                    The Diabi Organic Medicinal Plant project, launched by TEMCO Cooperative Development Banking Society, is currently achieving successful results. Diabey Organic Medicinal Plant is a medicinal plant
                                                    that can grow in any climate in Sri Lanka. The medicinal plant leaves are traditionally used as medicine for various diseases. A member of our banking society has developed a new medicine for
                                                    diabetes using the leaves of this plant and obtained a patent for this formula.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Third News Card */}
                                <div className="col-12 lg:col-4 flex justify-content-center">
                                    <a
                                        href="https://www.facebook.com/share/p/igdHUja4uE6Le4Zk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div
                                            className="card h-full w-full flex flex-column align-items-center p-5 hover-card"
                                            style={{
                                                borderRadius: '20px',
                                                border: '5px solid #d1d5db',
                                                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                                                transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                                                color: '#333333'
                                            }}
                                        >
                                            <img
                                                src="/layout/images/news/1.webp"
                                                alt="atlantis"
                                                style={{
                                                    maxHeight: '115px',
                                                    borderRadius: '15px',
                                                    marginBottom: '15px'
                                                }}
                                            />
                                            <div className="text-center mb-4">
                                                <span className="font-medium text-lg">ජාතික මට්ටමින් Blockchain ක්‍රියාත්මක කළ යුතුය</span>
                                                <p
                                                    className="text-sm mt-5"
                                                    style={{
                                                        lineHeight: '1.5',
                                                        textAlign: 'justify'
                                                    }}
                                                >
                                                    Dont just think of blockchain as being limited to cryptocurrencies. It;s one of the revolutionary 5 technologies that can drive national development. Blockchain යනු ක්‍රිප්ටෝ මුදල්වලට පමණක් සීමා
                                                    වූවක් ලෙස නොසිතිය යුතුයි...;
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* "More" Button */}
                            <div className="flex items-center justify-content-center">
                                <a href="news" rel="noopener noreferrer" className="btn-more">
                                    More
                                </a>
                            </div>

                            <style jsx>{`
                                /* Default border and background colors */
                                .hover-card {
                                    border-color: #d1d5db;
                                    background-color: #e6e6e6;
                                }

                                /* Hover effect */
                                .hover-card:hover {
                                    background-color: #e3f2fd;
                                    border-color: #2196f3;
                                    transform: scale(1.01);
                                    color: #0d47a1;
                                }

                                /* Optional: Title hover color */
                                .hover-card:hover .type {
                                    color: #1565c0;
                                }

                                /* More button styles */
                                .btn-more {
                                    margin-top: 50px;
                                    padding: 20px 50px;
                                    background-color: #2196f3;
                                    color: white;
                                    font-size: 16px;
                                    font-weight: bold;
                                    border-radius: 25px;
                                    text-decoration: none;
                                    transition: background-color 0.3s ease, transform 0.3s ease;
                                }

                                .btn-more:hover {
                                    background-color: #0d47a1;
                                    transform: scale(1.007);
                                }
                            `}</style>
                        </div>
                    </div>

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
        </div>
    );
};

export default LandingPage;
