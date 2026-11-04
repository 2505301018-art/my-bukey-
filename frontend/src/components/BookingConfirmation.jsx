import React from "react";

const BookingConfirmation = () => {
  const html = `<!DOCTYPE html>
<html class="dark" lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="web_standard" name="shell-type"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>first-child{margin-top:0!important;}main>last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style>
<script src="https://cdn.tailwindcss.com"></script>
<script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "on-primary-container": "#e48599", "tertiary": "#e2c383", "outline": "#a18c8e", "tertiary-fixed-dim": "#e2c383", "inverse-on-surface": "#3c2d29", "surface-container": "#2a1c19", "surface-tint": "#ffb1c0", "on-surface-variant": "#d9c1c4", "on-secondary": "#11372c", "secondary-fixed": "#c3ebdb", "inverse-primary": "#954458", "surface-dim": "#1d100d", "error": "#ffb4ab", "primary-fixed": "#ffd9df", "on-surface": "#f7ddd7", "secondary": "#a8cfc0", "surface": "#1d100d", "secondary-fixed-dim": "#a8cfc0", "on-primary": "#5b172b", "tertiary-fixed": "#ffdf9f", "on-tertiary-container": "#ba9d61", "surface-container-low": "#261815", "on-primary-fixed-variant": "#782d41", "background": "#1d100d", "on-error": "#690005", "on-error-container": "#ffdad6", "on-tertiary-fixed-variant": "#594310", "surface-bright": "#463532", "surface-container-highest": "#41312e", "on-tertiary-fixed": "#261a00", "tertiary-container": "#483402", "surface-variant": "#41312e", "surface-container-high": "#362623", "on-secondary-fixed-variant": "#294d42", "secondary-container": "#2c5044", "on-tertiary": "#402d00", "error-container": "#93000a", "on-secondary-fixed": "#002118", "on-background": "#f7ddd7", "surface-container-lowest": "#170b09", "primary-container": "#641e32", "primary": "#ffb1c0", "on-primary-fixed": "#3f0117", "outline-variant": "#534245", "inverse-surface": "#f7ddd7", "on-secondary-container": "#9ac1b2", "primary-fixed-dim": "#ffb1c0" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "space-xl": "3rem", "space-sm": "0.5rem", "gutter-desktop": "2.5rem", "margin": "1.25rem", "margin-desktop": "4rem", "space-xs": "0.25rem", "space-md": "1rem", "space-2xl": "5rem", "space-lg": "1.75rem", "gutter": "1.5rem" }, "fontFamily": { "headline-lg": ["Playfair Display"], "display-hero": ["Playfair Display"], "label-md": ["Plus Jakarta Sans"], "display-hero-mobile": ["Playfair Display"], "body-sm": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "headline-sm": ["Playfair Display"], "headline-lg-mobile": ["Playfair Display"], "label-caps": ["Plus Jakarta Sans"], "headline-md": ["Playfair Display"], "body-md": ["Plus Jakarta Sans"], "title-editorial": ["Playfair Display"] }, "fontSize": { "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "400" }], "display-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "400" }], "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.06em", "fontWeight": "500" }], "display-hero-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "400" }], "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }], "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "300" }], "headline-sm": ["22px", { "lineHeight": "30px", "fontWeight": "500" }], "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "400" }], "label-caps": ["11px", { "lineHeight": "16px", "letterSpacing": "0.18em", "fontWeight": "600" }], "headline-md": ["28px", { "lineHeight": "36px", "fontWeight": "500" }], "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }], "title-editorial": ["18px", { "lineHeight": "26px", "letterSpacing": "0.04em", "fontWeight": "600" }] } } } };
</script>
</head>
<body class="bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-primary">
<header class="fixed top-0 left-0 right-0 z-40 bg-primary-container/90 backdrop-blur-md border-b border-tertiary/20">
<div class="bg-surface-container-lowest text-tertiary border-b border-tertiary/20 py-1.5 px-margin md:px-margin-desktop text-center">
<div class="max-w-7xl mx-auto flex items-center justify-center gap-space-sm">
<span class="material-symbols-outlined text-[14px] text-tertiary">spa</span>
<p class="font-label-caps text-label-caps uppercase tracking-widest text-tertiary">Complimentary Parisian Floral Gift Box on all orders above ₹2,499 | Reserve Your Garden Table for High Tea</p>
<span class="material-symbols-outlined text-[14px] text-tertiary">spa</span>
</div>
</div>
<div class="h-20 max-w-7xl mx-auto px-margin md:px-margin-desktop flex items-center justify-between gap-space-md">
<div class="flex items-center gap-space-md">
<img alt="Bloom &amp; Brew Emblem" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB5HM8hMPi0PqBmd5UyFvGheoL-4dfPyGD1VHAL_vWd0EDCY3wh81UHbWS8vOzF0akqfr3V2o8P1NKDvzt5Y9uPLvEMAyOEDPwnKmoWuc7102qc6PwjJc6lppBnvxevbH7kiRQn_G4F10Y7LoFKxV2fAmlnEWKc0_-wtBzOQDP3vO1W8AA8LqvHWkPqUtVh3Gb0voqUFL7D1NbPERIiRrpZ_nIvaKDDPPmlhJqIg"/>
<a class="flex flex-col text-left" data-path="home" href="#">
<span class="font-headline-sm text-headline-sm tracking-tight text-on-surface font-headline-sm">BLOOM &amp; BREW</span>
<span class="font-label-caps text-label-caps tracking-widest text-tertiary uppercase">BOTANICAL CAFÉ &amp; ATELIER</span>
</a>
</div>
<nav class="hidden xl:flex items-center space-x-6" data-active-classes="text-tertiary border-b border-tertiary font-medium">
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="home" href="#">Home</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="our-story" href="#">Our Story</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="cafe-menu" href="#">Café Menu</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="flower-boutique" href="#">Flower Boutique</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="shop" href="#">Shop</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="gallery" href="#">Gallery</a>
<a class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors py-1" data-path="contact" href="#">Contact</a>
</nav>
<div class="flex items-center gap-space-sm">
<button aria-label="Search Atelier" class="p-2 text-on-surface-variant hover:text-tertiary transition-colors flex items-center justify-center" type="button"><span class="material-symbols-outlined text-[22px]">search</span></button>
<button aria-label="Shopping Cart" class="relative p-2 text-on-surface-variant hover:text-tertiary transition-colors flex items-center justify-center" onclick="document.getElementById('cart-drawer').classList.remove('translate-x-full')" type="button"><span class="material-symbols-outlined text-[22px]">shopping_bag</span><span class="absolute top-1 right-1 h-4 min-w-[16px] px-1 rounded-full bg-tertiary text-surface-container-lowest font-label-caps text-[10px] font-bold flex items-center justify-center leading-none">2</span></button>
<button class="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-tertiary/60 bg-primary-container text-tertiary font-label-caps text-label-caps uppercase tracking-widest shadow-[0_0_15px_rgba(226,195,131,0.2)] hover:bg-secondary-container hover:text-secondary-fixed transition-all" onclick="document.getElementById('reservation-modal').classList.remove('hidden')" type="button">Book a Table</button>
<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-2 border border-tertiary/40"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div>
</div>
</div>
</header>
<main class="w-full pt-28 bg-surface min-h-screen">
<div class="flex flex-col w-full text-on-surface">
<!-- HERO SECTION -->
<section class="relative w-full overflow-hidden -mt-28 pt-28 pb-space-2xl bg-surface-container-lowest">
<!-- Ambient Golden & Burgundy Glow Gradients -->
<div class="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-container/20 blur-[130px] pointer-events-none"></div>
<div class="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-tertiary/10 blur-[120px] pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<!-- Left Editorial Copy (7 cols) -->
<div class="lg:col-span-7 flex flex-col space-y-6">
<div class="inline-flex items-center gap-space-sm self-start px-3 py-1 bg-surface-container-high rounded-full shadow-sm">
<span class="material-symbols-outlined text-[15px] text-tertiary">filter_vintage</span>
<span class="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Haute Botanical Café &amp; Atelier</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Mumbai • Paris</span>
</div>
<h1 class="font-display-hero text-display-hero text-on-surface leading-[1.08] tracking-tight">Where Every Sip Blooms Into <span class="italic font-display-hero text-tertiary">Something Beautiful.</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">Exceptional Coffee. Exquisite Bouquets. Unforgettable Moments. An unhurried sensory sanctuary celebrating slow-roasted heirloom beans and morning-cut Parisian botanicals.</p>
<!-- CTAs -->
<div class="flex flex-wrap items-center gap-4 pt-4">
<a class="px-8 py-4 bg-tertiary text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-widest shadow-xl hover:bg-tertiary-fixed transition-all flex items-center gap-2 group" href="#signature-experience"><span>Explore Our Café</span><span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
<a class="px-8 py-4 bg-primary-container text-tertiary font-label-caps text-label-caps uppercase tracking-widest shadow-lg hover:bg-secondary-container hover:text-secondary-fixed transition-all flex items-center gap-2" href="#featured-products"><span class="material-symbols-outlined text-sm text-tertiary">local_florist</span><span>Shop Bouquets</span></a>
<button class="px-6 py-4 text-on-surface-variant hover:text-tertiary font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-2 transition-colors" onclick="document.getElementById('reservation-modal').classList.remove('hidden')" type="button"><span class="material-symbols-outlined text-base">calendar_month</span><span>Reserve High Tea</span></button>
</div>
<!-- Editorial Credential Badges -->
<div class="pt-8 flex items-center gap-8 text-on-surface-variant">
<div class="flex flex-col"><span class="font-headline-sm text-headline-sm text-tertiary font-semibold">100%</span><span class="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">Arabica Single Origin</span></div>
<div class="h-8 w-px bg-surface-container-highest"></div>
<div class="flex flex-col"><span class="font-headline-sm text-headline-sm text-tertiary font-semibold">06:00</span><span class="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">Daily Floral Harvest</span></div>
<div class="h-8 w-px bg-surface-container-highest"></div>
<div class="flex flex-col"><span class="font-headline-sm text-headline-sm text-tertiary font-semibold">4.9 ★</span><span class="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">Salon Connoisseurs</span></div>
</div>
</div>
<!-- Right Staged Imagery (5 cols) -->
<div class="lg:col-span-5 relative mt-6 lg:mt-0">
<div class="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-2xl bg-surface-container">
<img alt="Bloom and Brew Parisian Table with Coffee and Antique Floral Arrangement" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNI2huhGs99Xb2Qt7RRcouAP5kUFDwiSWKheiMOtllagSveltMmJDokJAlGBLgFvscPnRuI7L4k-2JpZ-DRHKpCZmo1fAjU8Mf-fxKVSahKh95oNI7LzRdtzgeFhcSFhUCAGfKicXNQeDlvCRn846bbiZNP_uGYlJzjmecwpUuXzVm5dt6WLkGiOW2yzosuZS2tdze-_df7mRx-hRGoEUArhA74K6RCiyz7-iXQA"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent"></div>
<!-- Floating Salon Note Plaque -->
<div class="absolute bottom-6 left-6 right-6 p-5 bg-surface-container-high/90 backdrop-blur-md rounded shadow-xl">
<div class="flex items-start justify-between">
<div>
<span class="font-label-caps text-[10px] uppercase text-tertiary tracking-widest block mb-1">Morning Salon Offering</span>
<p class="font-title-editorial text-title-editorial text-on-surface">Antique Brass Urn with Crimson Garden Roses</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Paired with Artisanal Ethiopian Yirgacheffe Flat White</p>
</div>
<span class="material-symbols-outlined text-tertiary text-2xl">local_cafe</span>
</div>
</div>
<!-- Decorative Floating Corner Seal -->
<div class="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary-container text-tertiary flex items-center justify-center shadow-lg p-2 text-center pointer-events-none">
<span class="font-label-caps text-[9px] uppercase tracking-tighter leading-tight font-bold">Paris • 1892 • Atelier</span>
</div>
</div>
</div>
</section>
</div>
</main>
</body>
</html>`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default BookingConfirmation;

