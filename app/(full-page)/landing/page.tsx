'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Ripple } from 'primereact/ripple';
import { InputText } from 'primereact/inputtext';
import { StyleClass } from 'primereact/styleclass';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { PrimeReactContext } from 'primereact/api';
import type { ColorScheme, Page } from '@/types';
import { Divider } from 'primereact/divider';

const LandingPage: Page = () => {
    const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
    const { changeTheme } = useContext(PrimeReactContext);
    const router = useRouter();

    const homeRef = useRef(null);
    const homeButtonRef = useRef(null);
    const timesRef = useRef(null);
    const menu = useRef(null);
    const meetButtonRef = useRef(null);
    const promotionRef = useRef(null);
    const companyRef = useRef(null);
    const projectsRef = useRef(null);
    const pricingButtonRef = useRef(null);
    const directorsRef = useRef(null);
    const featuresButtonRef = useRef(null);
    const newsRef = useRef(null);

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
        <div ref={homeRef} className="landing-container" style={{ background: '#100e23' }}>
            <div id="header" className="landing-header flex flex-column w-full p-6" style={{ minHeight: '1000px', background: `url('/layout/images/landing/landing-header-2x.jpg') top left no-repeat`, backgroundSize: 'cover' }}>
                <div className="header-menu-container flex align-items-center justify-content-between">
                    <div className="header-left-elements flex align-items-center justify-content-between">
                        <div className="cursor-pointer layout-topbar-logo flex align-items-center" onClick={goHome}>
                            <img src="/layout/images/logo/temco_logo.webp" alt="layout" className="logo" style={{ height: '52px' }} />
                            {/* <img src="/layout/images/logo/appname-dark.png" alt="layout" className="appname ml-2" style={{ height: '12px' }} /> */}
                        </div>

                        <ul
                            ref={menu}
                            id="menu"
                            style={{ top: '0px', right: '0%' }}
                            className="list-none  lg:flex lg:flex-row flex-column align-items-start bg-white absolute lg:relative h-screen lg:h-auto lg:surface-ground m-0 z-5 w-full sm:w-6 lg:w-full py-6 lg:py-0"
                        >
                            <StyleClass nodeRef={timesRef} selector="@parent" enterClassName="hidden" enterActiveClassName="px-scalein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout">
                                <a ref={timesRef} className="p-ripple cursor-pointer block lg:hidden text-gray-800 font-medium line-height-3 hover:text-gray-800 absolute" style={{ top: '3rem', right: '2rem' }}>
                                    <i className="pi pi-times text-4xl"></i>
                                </a>
                            </StyleClass>

                            <li className="mt-5 lg:mt-0">
                                <StyleClass nodeRef={homeButtonRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={homeButtonRef} onClick={() => scrollToElement(homeRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">ටෙම්කෝ බැංකුව</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={meetButtonRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={meetButtonRef} onClick={() => scrollToElement(promotionRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">උසස්වීම් ව්‍යුහය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={featuresButtonRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={featuresButtonRef} onClick={() => scrollToElement(companyRef)} className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">ආයතනික ව්‍යුහය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={pricingButtonRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={pricingButtonRef} onClick={() => scrollToElement(projectsRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">ව්‍යාපෘති</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={directorsRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={directorsRef} onClick={() => scrollToElement(directorsRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">විධායක අධ්‍යක්ෂ මණ්ඩලය</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                            <li>
                                <StyleClass nodeRef={newsRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
                                    <a ref={newsRef} onClick={() => scrollToElement(newsRef)} className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                                        <span className="text-2xl">පුවත්</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right-elements flex align-items-center justify-content-between">
                        <a href="https://www.facebook.com/profile.php?id=100077908253377" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 cursor-pointer">
                            <i className="pi pi-facebook text-gray-700 hover:text-gray-900 mr-3 text-2xl"></i>
                        </a>

                        <a href="https://www.youtube.com/@temcodevelopmentbankingsoc8962" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 cursor-pointer">
                            <i className="pi pi-youtube text-gray-700 hover:text-gray-900 mr-3 text-2xl"></i>
                        </a>

                        <Button className="contact-button mr-3 p-button-outlined p-button-secondary p-button-text p-button p-component font-large border-round text-gray-700" style={{ background: 'rgba(68, 72, 109, 0.05)' }}>
                            <span aria-hidden="true" className="p-button-label">
                                Login
                            </span>
                        </Button>

                        <a className="p-ripple lg:hidden font-large text-gray-700 cursor-pointer">
                            <i className="pi pi-bars fs-xlarge"></i>
                        </a>
                    </div>
                </div>
                <div className="header-text" style={{ padding: '20px 0px 10px 0px', marginLeft: '-50px' }}>
                    {/* <h1 className="mb-0 text-gray-800" style={{ fontSize: '80px', lineHeight: '95px' }}>
                        This is Atlantis
                    </h1>
                    <h2 className="mt-0 font-medium text-4xl text-gray-700">Modern, fresh and groovy</h2>
                    <a href="/" className="p-button text-gray-700 bg-cyan-500 border-cyan-500 font-bold border-round" style={{ mixBlendMode: 'multiply', padding: ' 0.858rem 1.142rem' }}>
                        <span className="p-button-text">Live Demo</span>
                    </a> */}
                    <div className="w-screen overflow-hidden">
                        <img src="/layout/images/landing/main_background.webp" alt="Main Background" className="w-full h-[400px] object-cover" />
                    </div>
                </div>

                <div ref={companyRef} className="header-features" style={{ padding: '100px 60px' }}>
                    <div className="grid flex">
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center">
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center" style={{ minHeight: '300px', lineHeight: '1.5' }}>
                                <span className="title mb-3 block text-5xl">දර්ශනය</span>
                                <span className="content text-2xl">"තාක්ෂණයෙන් පිරිපුන් ව්‍යවසායකත්වයෙන් ඔප් නැංවුණු සහ කළමනාකරණයෙන් සවිබල ගැන්වුණු දේශීය ආර්ථිකයක් සහ සෞභාග්‍යමත් දේශයක්".</span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center">
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center" style={{ minHeight: '300px', lineHeight: '1.5' }}>
                                <span className="title mb-3 block text-5xl">මෙහෙවර</span>
                                <span className="content text-2xl">
                                    "තාක්ෂණය, ව්‍යවසායකත්වය සහ කළමනාකරණය තුළින් ගම ශක්තිමත් කරමින් විවිධ ක්ෂේත්‍රවල නිර්මාණ දේශීය සහ ජාත්‍යන්තර තලය වෙත ගෙන යමින් සාමාජිකයන්ගේ නිපුවතා සංවර්ධනයත් ජීවන තත්ත්වය උසස් කිරීමත් මගින් දේශය ගොඩනැංවීම"
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 flex justify-content-center items-center" style={{ minHeight: '300px', lineHeight: '1.5' }}>
                            <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white text-center">
                                <span className="title mb-3 block text-5xl">පරමාර්ථය</span>
                                <span className="content text-2xl">
                                    සමිතියේ පරමාර්ථය වනාහි සමූපකාර ප්‍රතිපත්ති අනුව සමූපකාර සමිතියක් ලෙස ක්‍රියාත්මක වෙමින් එහි සාමාජිකයන්ගේ ආර්ථික සමාජයීය සහ සංස්කෘතික අවශ්‍යතාවයන් සපුරාලීම සඳහා තාක්ෂණය ව්‍යවසායකත්වය සහ කළමනාකරණය දියුණු කරමින්
                                    සාමාජිකයන් තුළ සකසුරුවම්කම සහ අන්‍යෝන්‍යාධාරය සහ ආත්මාධාරය පිළිබඳ හැඟීම් සහ මාජිකයන් හිමිකාරීත්වය දරන ව්‍යාපාර සහ සමූපාකාර ව්‍යවහාරය දියුණු කිරීමත් දේශීයත්වය අගයන පරිසර හිතකාමී තිරසර සංවර්ධනයක් ඇති කිරීම සඳහා
                                    තාක්ෂණය මත පදනම් වූ සමූපාකාරික සමාජයක් ස්ථාපිත කිරීමත් වන්නේය.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="meet-atlantis" className="flex justify-content-center w-full bg-gray-900 relative" style={{ minHeight: '620px', paddingTop: '65px' }}>
                <div className="atlantis-modes w-auto px-5" style={{ zIndex: '10' }}>
                    <iframe
                        src="https://www.youtube.com/embed/CUyOx5ERX50"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: '8px',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>
                <div className="ellipsis-1 absolute right-0" style={{ zIndex: '11' }}>
                    {/* <img src="/layout/images/landing/ellipse-1.png" alt="atlantis" width="410" /> */}
                </div>
                <div className="ellipsis-2 absolute left-0" style={{ zIndex: '11', bottom: '-100px' }}>
                    {/* <img src="/layout/images/landing/ellipse-2.png" alt="atlantis" width="420" /> */}
                </div>
                <div className="ellipsis-3 absolute" style={{ zIndex: '11', filter: 'blur(20px)', left: '130px', top: '40px' }}>
                    <img src="/layout/images/landing/ellipse-3.png" alt="atlantis" width="300" />
                </div>
                <div className="ellipsis-4 absolute bottom-0" style={{ zIndex: '9', right: '310px' }}>
                    <img src="/layout/images/landing/ellipse-4.png" alt="atlantis" width="125" />
                </div>
            </div>
            <div ref={promotionRef} className="clip-background relative">
                <div className="landing-wrapper-back px-6 absolute w-full" style={{ color: 'black', background: 'linear-gradient(180deg, #f4f8fb 17.13%, #eeeefa 85.89%)' }}>
                    <div id="features" className="pr-8 features" style={{ paddingLeft: '2rem' }}>
                        <h3 className="font-medium text-5xl text-center text-800 mb-5">අධ්‍යක්ෂක මණ්ඩල උසස්වීම් ව්‍යුහය</h3>
                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '170px' }}>
                            <div className="col-12 md:col-6">
                                {/* <h3 className="font-medium text-3xl">Curabitur ullamcorper molesti</h3> */}
                                <p className="text-2xl text-justify" style={{ maxWidth: '700px' }}>
                                    සීමාසහිත තාක්ෂණ ව්‍යවසාය හා කළමනාකරණ සමුපකාර සංවරධන බැංකු සමිතිය පාතික මට්ටමේ විධායක සභාවකන්‌ හා ග්‍රාම නිලධාර මටටමේ සිට සකස්‌ වන කණ්ඩායමි ක්‍රමයකින්‌ සමන්චිත වේ. ටෙම්කෝ බැංකු සමිතියේ අභ්‍යන්තර ආයතනික ව්‍යුහය
                                    සකස්චන්නේ ප්‍රජාතන්ත්‍රවාදී නියෝපීත ක්‍රමයක්‌ හරහාය. මුලික වශයෙන්‌ කණ්ඩායම්‌ චල සභාපතිවරැන්‌ එක්වී තම ග්‍රාම නිලධාර මට්ටමේ ශාඛාව නිරීමාණය කර ගැනීම සිදුකරයි. වසර තුනකට වරක්‌ පැවැත්වෙන නිලවරණයෙදී එම ග්‍රාම නිලධාර
                                    මට්ටමේ ශාඛාවල සභාපතිවරැන්‌ හා සේවා, කරිමාන්ත හා කෘෂිකරිමාන්ත ක්ෂේතු නියෝජනය කරනු ලබන සාමාපජිකයින්‌ නියෝපතයන්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ ප්‍රාදේශිය ලේකමි මට්ටමේ ශාඛාචේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. ඒ ආකාරයෙන්ම ප්‍රාදේශීය
                                    ලේකමි කොට්ඨාස මට්ටමේ සභාපතිවරැන්‌ හා සේවා, කර්මාන්ත හා කෘෂිකර්මාන්ත ක්ෂේතු නියෝජනය කරනු ලබන සාමාපිකයින්‌ නියෝපීතයින්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ දිස්තුක්ක මටටමේ ශාබාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. ඒ අයුරන්ම දිස්තික්ක මටටමේ
                                    සභාපතිවරැන්‌ හා සේවා, කර්මාන්ත හා කෘෂිකරීමාන්ත ක්ෂේත නියෝජනය කරනු ලබන සාමාජිකයින්‌ නියෝපතයන්‌ ලෙස ඉදිරපත්‌ වෙමින්‌ පළාත්‌ මට්ටමේ ශාඛාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරාගනී. මෙම ක්‍රමවේදය හරහාම පළාත්‌ නවයක සුදුසුකමි සපුරාලන
                                    සභාපතිවරැන්‌, සේවා, කරමාන්ත හා කෘෂිකරමාන්ත ක්ෂේත නියෝජනය කරනු ලබන පිරස හා වරතමානයේ ජාතික විධායක සභාවේ සාමාජිකයන්‌ එක්ව විධායක සභාවේ අධ්‍යක්ෂ මණ්ඩලය තෝරා පත්කර ගනී. මීට අමතරව උපදේශක මණ්ඩලයක්‌ ද සමිතිය වෙනුවෙන්‌
                                    නිර්මාණය කරගැනීමට අතුරැ ව්‍යවස්ථාවෙන්‌ ප්‍රතිපාදන සලස්වා තිබේ.
                                </p>
                            </div>
                            <div className="col-12 md:col-6 flex flex-column relative">
                                <img
                                    src="/layout/images/pictures/Membership.webp"
                                    alt="Membership"
                                    className="w-full h-auto max-w-[500px]" // You can increase max-w as needed
                                />
                            </div>
                        </div>
                    </div>
                    <div id="features" className="pr-8 features" style={{ paddingLeft: '2rem' }}>
                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '170px' }}>
                            <div className="col-12 md:col-6 flex flex-column relative">
                                <img
                                    src="/layout/images/pictures/OrganizationChart.webp"
                                    alt="Membership"
                                    className="w-full h-auto max-w-[500px]" // You can increase max-w as needed
                                />
                            </div>
                            <div ref={companyRef} className="col-12 md:col-6">
                                <h2 className="font-medium text-5xl text-center text-800 mb-5">බැංකු සමිතියේ ආයතනික ව්‍යුහය</h2>
                                {/* <h3 className="font-medium text-3xl">Curabitur ullamcorper molesti</h3> */}
                                <p className="text-3xl text-justify" style={{ maxWidth: '700px' }}>
                                    ටෙම්කෝ බැංකු සමිතියේ ජාතික බැංකු ඒකකය ඇතුළු සියලු පළාත්‌, දිස්ත්‍රික්ක, ප්‍රාදේශීය ලේකම්‌ කොට්ඨාසය හා ග්‍රාම නිලධාර කොට්ඨාස මට්ටමේ බැංකු ඒකක සඳහා ඒකීය සංවිධාන ව්‍යහයක්‌ නිර්මාණය කොට තිබේ, මෙම බැංකු ඒකක සෑම විටම
                                    දෙපාරිතමේන්තු 13කින්‌ යුක්ත වන ලෙස නිර්මාණය කොට ඇත අතර බැංකු ඒකකයේ වර්ධනයත්‌ සමග සියලු දෙපාරතමේන්තු හා මානව සමිපත්‌ වර්ධනය සිදු කෙරෙනු ඇත.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={projectsRef} id="features" className="pr-8 features" style={{ paddingLeft: '2rem' }}>
                        <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '170px' }}>
                            <div className="col-12 md:col-7">
                                {/* <h3 className="font-medium text-3xl">Curabitur ullamcorper molesti</h3> */}
                                <h2 className="font-medium text-5xl text-center text-800 mb-5">බලයලත් ව්‍යවස්ථාපිත ව්‍යාපෘති</h2>
                                {/* <p className="text-2xl text-justify" style={{ maxWidth: '700px' }}> */}
                                <ul className="text-3xl text-justify list-disc pl-5" style={{ maxWidth: '700px' }}>
                                    <li>මූල්‍ය සහ බැංකු කටයුතු සේවා සහ වෙළඳ සම්බන්ධතා ව්‍යාපෘති</li>
                                    <li>අධ්‍යාපන සහ ව්‍යවස්ථායකත්ව සංවර්ධන ව්‍යාපෘතිය</li>
                                    <li>බෙදා හැරීම් ව්‍යාපෘතිය</li>
                                    <li>ට්‍රේනින් හවුස් ව්‍යාපෘතිය</li>
                                    <li>ඩිජිටල් තාක්ෂණ ව්‍යාපෘති</li>
                                    <li>වෙළඳ ප්‍රදර්ශන ව්‍යාපෘතිය</li>
                                    <li>මාධ්‍ය සහ ප්‍රචාරණ ව්‍යාපෘතිය</li>
                                    <li>රක්ෂණ ව්‍යාපෘතිය</li>
                                    <li>ඉදිකිරීම් හා උපදේශන</li>
                                    <li>ගණකාධිකරණ සහ විගණන සේවා</li>
                                    <li>අනෙකුත් ව්‍යාපෘති</li>
                                </ul>
                                {/* </p> */}
                            </div>
                            <div className="col-12 md:col-5 flex flex-column relative">
                                <img
                                    src="/layout/images/pictures/project.webp"
                                    alt="Membership"
                                    className="w-[200px] h-auto" // You can increase max-w as needed
                                />
                            </div>

                            <div id="features" className="pr-8 features mt-8" style={{ paddingLeft: '2rem' }}>
                                <h2 className="font-medium text-5xl text-center text-900 mb-5">ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීමේදී ඉහළ ප්‍රශංසා.</h2>
                                <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '120px' }}>
                                    <div className="col-12 md:col-6">
                                        {/* <h3 className="font-medium text-3xl">Curabitur ullamcorper molesti</h3> */}
                                        <p className="text-2xl text-justify" style={{ maxWidth: '600px' }}>
                                            2024 ජනවාරි 2 ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීම 2024 ජනවාරි 2 වන දින පැවැත්වූ අතර, සමූපකාර දෙපාර්තමේන්තුව නියෝජනය කරමින් සමූපකාර සමිති ප්‍රවර්ධන හා විමර්ශන නිලධාරිනී මාලනී සෙනෙවිරත්න මහත්මිය
                                            සහභාගී විය. රැස්වීමේදී සෙනෙවිරත්න මහත්මිය ටෙම්කෝ හි විශිෂ්ට කාර්යසාධනය සහ විනිවිද පරිපාලනය පිළිබඳව අවධාරණය කළාය. පහත දැක්වෙන්නේ ඇගේ සම්පූර්ණ ප්‍රකාශයයි: මං හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ
                                            සමිතියට හොඳ පිළිගැනී මක් තියෙනවා. ඉස්සරට වැඩිය ඇත්තටම දෙපාර්තමේන් දැන් ගොඩක් සුහදයි නේ. අනිත් සමිතිත් දැන් අහන්නව මොකක්ද ඒ සමිතිය, මොනවද වෙන්නේ කියලා අපි වෙන සමිති වලට ගියහම. ඔබ තුමා නිතරම කතා කරනවා ඉස්සරහට
                                            ඇවිල්ලා. ඉස්සරට වැඩිය අර ලොකු පැහැදීමක් තියෙනවා. දැන් මම දැන් අවුරුදු දෙකකට කිට්ටුද කොහෙද ඇවිල්ලා සමිතියට. මම හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනීමක් තියෙනවා ඔබතුමාලා ඇත්තටම කරන
                                            පොදු වැඩ වලදී සහයෝගය දීම සම්බන්ධයෙනුත් ගොඩක්...
                                            <a
                                                href="/news/temco-4th-annual-meeting" // Replace with your actual route or external URL
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline ml-1"
                                            >
                                                More
                                            </a>
                                        </p>
                                    </div>
                                    <div className="col-12 md:col-6 flex flex-column relative">
                                        <a href="/news/temco-4th-annual-meeting" target="_blank" rel="noopener noreferrer">
                                            <img src="/layout/images/news/02/Project2.webp" alt="Membership" className="w-full h-auto max-w-[500px] cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="features" className="pr-8 features" style={{ paddingLeft: '2rem' }}>
                                <h2 className="font-medium text-5xl text-center text-black text-900 mb-5">නව්‍ය උපාධි වැඩසටහන සඳහා TEMCO බැංකුව ප්‍රමුඛ අධ්‍යාපන ආයතන සමඟ අත්වැල් බැඳගනී.</h2>
                                <div className="grid feature-boxes feature-boxes-1" style={{ marginBottom: '17px' }}>
                                    <div className="col-12 md:col-6 flex flex-column relative">
                                        <a href="/news/temco-4th-annual-meeting" target="_blank" rel="noopener noreferrer">
                                            <img src="/layout/images/news/01/01.webp" alt="" className="w-full h-auto max-w-[500px] cursor-pointer" />
                                        </a>
                                    </div>
                                    <div className="col-12 md:col-6">
                                        {/* <h3 className="font-medium text-3xl">Curabitur ullamcorper molesti</h3> */}
                                        <p className="text-2xl text-justify" style={{ maxWidth: '600px' }}>
                                            2024 ජනවාරි 2 ටෙම්කෝ බැංකුවේ 4 වන වාර්ෂික මහා සභා රැස්වීම 2024 ජනවාරි 2 වන දින පැවැත්වූ අතර, සමූපකාර දෙපාර්තමේන්තුව නියෝජනය කරමින් සමූපකාර සමිති ප්‍රවර්ධන හා විමර්ශන නිලධාරිනී මාලනී සෙනෙවිරත්න මහත්මිය
                                            සහභාගී විය. රැස්වීමේදී සෙනෙවිරත්න මහත්මිය ටෙම්කෝ හි විශිෂ්ට කාර්යසාධනය සහ විනිවිද පරිපාලනය පිළිබඳව අවධාරණය කළාය. පහත දැක්වෙන්නේ ඇගේ සම්පූර්ණ ප්‍රකාශයයි: මං හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ
                                            සමිතියට හොඳ පිළිගැනී මක් තියෙනවා. ඉස්සරට වැඩිය ඇත්තටම දෙපාර්තමේන් දැන් ගොඩක් සුහදයි නේ. අනිත් සමිතිත් දැන් අහන්නව මොකක්ද ඒ සමිතිය, මොනවද වෙන්නේ කියලා අපි වෙන සමිති වලට ගියහම. ඔබ තුමා නිතරම කතා කරනවා ඉස්සරහට
                                            ඇවිල්ලා. ඉස්සරට වැඩිය අර ලොකු පැහැදීමක් තියෙනවා. දැන් මම දැන් අවුරුදු දෙකකට කිට්ටුද කොහෙද ඇවිල්ලා සමිතියට. මම හිතන්නේ දෙපාර්තමේන්තුව පැත්තෙන් ඔබතුමන්ලාගේ සමිතියට හොඳ පිළිගැනීමක් තියෙනවා ඔබතුමාලා ඇත්තටම කරන
                                            පොදු වැඩ වලදී සහයෝගය දීම සම්බන්ධයෙනුත් ගොඩක්......
                                            <a
                                                href="/news/temco-4th-annual-meeting" // Replace with your actual route or external URL
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline ml-1"
                                            >
                                                More
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={directorsRef} id="pricing" className="flex pricing flex-column pr-8" style={{ paddingLeft: '14rem', marginBottom: '8.5rem' }}>
                        <h2 className="font-medium text-5xl text-center text-800 mb-5">විධායක අධ්‍යක්ෂ මණ්ඩලය</h2>

                        <div className="grid pricing-content w-full">
                            <div className="col-12 lg:col-12">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h2 className="">සභාපති හා නිර්මාතෘ</h2>
                                        <img src="/layout/images/directors/Dr.Ishantha.webp" alt="Dr.Ishantha" className="w-3 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h3 className="flex align-items-center justify-content-center p-2 text-center">ආචාර්ය ඉශාන්ත සිරිබද්දන</h3>
                                        <p>
                                            PhD, DBA, PGDip(IT)
                                            <br />
                                            BSc(ChemSp). SCJP
                                        </p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ජාවා තාක්ෂණ හා උසස් අධ්‍යාපන ආයතනය</li>
                                    </ul>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        හිටපු උපදේශක
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ශ්‍රී ලංකා මහ බැංකුවේ මූල්‍ය ප්‍රතිපත්ති හා උපදේශන කමිටුව</li>
                                    </ul>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        හිටපු උපදේශක
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">සමූපකාර සංවර්ධන අමාත්‍යාංශය</li>
                                    </ul>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        හිටපු අධ්‍යක්ෂ මණ්ඩල සාමාජික
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ශ්‍රී ලංකා වෘත්තීය පුහුණු අධිකාරිය</li>
                                    </ul>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        හිටපු අධ්‍යක්ෂ මණ්ඩල සාමාජික
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ජාතික ආධුනිකත්ව හා කාර්මික පුහුණු අධිකාරිය</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">උප සභාපති</h4>
                                        <img src="/layout/images/directors/Mr.Upendra.webp" alt="Dr.Ishantha" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">උපේන්ද්‍ර කන්නංගර</h4>
                                        <p>NDESc, MIIE</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ගුඩ්විල් ග්‍රැනයිට් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ පරිපාලන/ලේකම්</h4>
                                        <img src="/layout/images/directors/Mr.Gamini.webp" alt="ගාමිණි දහනායක" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">ගාමිණි දහනායක</h4>
                                        <p>AAT</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ලීඩ්ස් ග්‍රැෆික්ස් (පුද්ගලික) සමාගම</li>
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ගිමාරා මෙඩිකල් හර්බ් සහ ටී (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ මූල්‍ය/භාණ්ඩාගාරික</h4>
                                        <img src="/layout/images/directors/Mr.Punyasoma.webp" alt="කන්දේ වෑවලගේ පුන්‍යසෝම" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">කන්දේ වෑවලගේ පුන්‍යසෝම</h4>
                                        <p>BComSP</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">වෑවලගේ සහ සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ අභ්‍යන්තර විගණන</h4>
                                        <img src="/layout/images/directors/Mr.Charith.webp" alt="චරිත් රණසිංහ" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">චරිත් රණසිංහ</h4>
                                        <p>BSc, BBA, MBA(UK) MA(UK)</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ටයිමෙක්ස් (පුද්ගලික) සමාගම</li>
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ස්මාර්ට් ලේබල්ස් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">කළමනාකාර අධ්‍යක්ෂ</h4>
                                        <img src="/layout/images/directors/Mr.Janaka.webp" alt="ජනක කුමාර" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">ජනක කුමාර</h4>
                                        <p>BSc, MBA(UK), MSc(UK)</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        කළමනාකාර අධ්‍යක්ෂ/ප්‍රධාන විධායක නිලධාරී
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ස්මාර්ට් ග්ලෝබල් (පුද්ගලික) සමාගම</li>
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">දන්කොටුව ඔයිල් මිල් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ ව්‍යාපෘති</h4>
                                        <img src="/layout/images/directors/Mr.Nuwan.webp" alt="නුවන් හෙට්ටිආරච්චි" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">නුවන් හෙට්ටිආරච්චි</h4>
                                        <p>BSc</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ගිගීස් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ තාක්ෂණ</h4>
                                        <img src="/layout/images/directors/Mr.Shiyan.webp" alt="ශියන් සංඛ අරඹවත්ත" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">ශියන් සංඛ අරඹවත්ත</h4>
                                        <p>BEng(SE), SCJP, MAD</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        නියෝජ්‍ය සභාපති
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">ජාවා තාක්ෂණ හා උසස් අධ්‍යාපන ආයතනය ගම්පහ (පුද්ගලික) සමාගම</li>
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">අඩ්රිනලින් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-3">
                                <div className="card p-0 mr-6 h-full bg-white w-full" style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}>
                                    <div className="flex flex-column align-items-center p-5">
                                        <h4 className="">අධ්‍යක්ෂ පර්යේෂණ සහ සංවර්ධන</h4>
                                        <img src="/layout/images/directors/Mr.Jalana.webp" alt="ජලන කන්නන්ගර" className="w-4 h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <h4 className="flex align-items-center justify-content-center text-center">ජලන කන්නන්ගර</h4>
                                        <p>BSc(SEng) Ungrad</p>
                                    </div>
                                    <Divider />
                                    <ul className="options py-0 px-5 mt-0 align-items-center justify-content-center text-center text-2xl">
                                        අධ්‍යක්ෂ
                                        <li className="flex align-items-center justify-content-center text-xl p-2 text-center">නීල් ග්‍රැනයිට් (පුද්ගලික) සමාගම</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={newsRef} id="pricing" className="flex pricing flex-column pr-8" style={{ paddingLeft: '14rem', marginBottom: '8.5rem' }}>
                        <h2 className="font-medium text-5xl text-center text-800 mb-5">පුවත්</h2>

                        <div className="grid pricing-content w-full">
                            <div className="col-12 lg:col-4">
                                <div
                                    className="card p-0 mr-6 h-full bg-white w-full cursor-pointer"
                                    style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}
                                    onClick={() => window.open('https://www.facebook.com/permalink.php?story_fbid=pfbid0At43Zhqbs9KexDLSgYbzxj4KRTtuSnLFDGFXtsqACxcHQAZxyrPAmNt2How6ooQZl&id=100077908253377&rdid=TLdmkUAaq3PFapwd', '_blank')}
                                >
                                    <div className="flex flex-column align-items-center p-5">
                                        <img src="/layout/images/news/3.webp" alt="" className="w-full h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <span className="type font-medium text-2xl pt-5 text-center">පර්චස් 10ක ගෙවත්තකින් මසකට රුපියල් 30,000/= සිට 65,000/=ක් දක්වා ආදායමක්</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div
                                    className="card p-0 mr-6 h-full bg-white w-full cursor-pointer"
                                    style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}
                                    onClick={() => window.open('https://www.facebook.com/permalink.php?story_fbid=pfbid02YF9fPxAMiRmz5jeghcZSsPrMosRckDKRqiYbcgdPE7Z7PSAip3JAey3wCCzzmS5Nl&id=100077908253377&rdid=jGLlxohLZYmj2H2I', '_blank')}
                                >
                                    <div className="flex flex-column align-items-center p-5">
                                        <img src="/layout/images/news/1.webp" alt="" className="w-full h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <span className="type font-medium text-2xl pt-5 text-center">ජාතික මට්ටමින් Blockchain ක්‍රියාත්මක කළ යුතුය</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-4">
                                <div
                                    className="card p-0 mr-6 h-full bg-white w-full cursor-pointer"
                                    style={{ borderRadius: '20px', boxShadow: '0px 10px 50px rgba(29, 15, 57, 0.13)' }}
                                    onClick={() => window.open('https://www.facebook.com/permalink.php?story_fbid=pfbid0At43Zhqbs9KexDLSgYbzxj4KRTtuSnLFDGFXtsqACxcHQAZxyrPAmNt2How6ooQZl&id=100077908253377&rdid=VqRs1JYaySwUHa7M', '_blank')}
                                >
                                    <div className="flex flex-column align-items-center p-5">
                                        <img src="/layout/images/news/2.webp" alt="" className="w-full h-auto mx-auto rounded-full object-cover shadow-lg" />
                                        <span className="type font-medium text-2xl pt-5 text-center">PLANTING FOR PROFIT: THE SIMPLE GUIDE TO TURNING YOUR 10 PCH GARDEN INTO A MONEY-MAKING MACHINE - EARN 30,000-65,000 RUPEES PER MONTH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-screen">
                                <button
                                    className="p-button p-component p-button-rounded"
                                    onClick={() => (window.location.href = 'https://www.temcobank.com/news')}
                                    style={{
                                        backgroundColor: '#2a5caa',
                                        color: 'white',
                                        marginTop: '10px',
                                        padding: '0.5rem 39rem',
                                        borderRadius: '20px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    More News
                                </button>
                            </div>
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
