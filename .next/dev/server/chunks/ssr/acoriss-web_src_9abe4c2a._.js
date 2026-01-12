module.exports = [
"[project]/acoriss-web/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "delay",
    ()=>delay,
    "formatDate",
    ()=>formatDate,
    "formatPhoneNumber",
    ()=>formatPhoneNumber,
    "generateId",
    ()=>generateId,
    "isValidEmail",
    ()=>isValidEmail,
    "scrollToElement",
    ()=>scrollToElement,
    "truncateText",
    ()=>truncateText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPhoneNumber(phone) {
    return phone.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
}
function formatDate(date, locale = 'fr-FR') {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}
function scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}
}),
"[project]/acoriss-web/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/types/enums.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const variantStyles = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].PRIMARY]: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl',
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].SECONDARY]: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl',
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].OUTLINE]: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].GHOST]: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
};
const sizeStyles = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].SMALL]: 'px-4 py-2 text-sm',
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].MEDIUM]: 'px-6 py-3 text-base',
    [__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].LARGE]: 'px-8 py-4 text-lg'
};
const Button = ({ variant = __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].PRIMARY, size = __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].MEDIUM, children, icon, iconPosition = 'left', fullWidth = false, loading = false, className, disabled, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none', variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className),
        disabled: disabled || loading,
        ...props,
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-5 w-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/ui/Button.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/ui/Button.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/acoriss-web/src/components/ui/Button.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Chargement..."
                }, void 0, false, {
                    fileName: "[project]/acoriss-web/src/components/ui/Button.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                icon && iconPosition === 'left' && icon,
                children,
                icon && iconPosition === 'right' && icon
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/acoriss-web/src/components/ui/Button.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/acoriss-web/src/components/services/ServicesHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesHero",
    ()=>ServicesHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/types/enums.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
;
const ServicesHero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
                    }, void 0, false, {
                        fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
                    }, void 0, false, {
                        fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom relative z-10 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 mb-6 animate-fadeIn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4 text-primary-500"
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Solutions complètes pour votre entreprise"
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent",
                                children: "Nos Services"
                            }, void 0, false, {
                                fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slideUp animation-delay-200",
                            children: "Des solutions innovantes pour simplifier vos paiements, encaissements, et services automobiles en RDC."
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp animation-delay-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].PRIMARY,
                                    size: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].LARGE,
                                    onClick: ()=>{
                                        const element = document.getElementById('services-list');
                                        element?.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    },
                                    children: [
                                        "Découvrir nos services",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].OUTLINE,
                                    size: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].LARGE,
                                    onClick: ()=>window.location.href = '/contact',
                                    children: "Nous contacter"
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn animation-delay-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-bold text-primary-600 mb-2",
                                            children: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Services principaux"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-bold text-primary-600 mb-2",
                                            children: "24/7"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Support disponible"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-bold text-primary-600 mb-2",
                                            children: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Sécurisé"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-bold text-primary-600 mb-2",
                                            children: "5000+"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Clients satisfaits"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/acoriss-web/src/components/services/ServicesHero.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/acoriss-web/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONSULTING_SERVICES",
    ()=>CONSULTING_SERVICES,
    "RDCARD_FAQ",
    ()=>RDCARD_FAQ,
    "RDCARD_FEATURES",
    ()=>RDCARD_FEATURES,
    "RDCARD_TYPES",
    ()=>RDCARD_TYPES,
    "SERVICES",
    ()=>SERVICES,
    "TEAM_MEMBERS",
    ()=>TEAM_MEMBERS,
    "TESTIMONIALS",
    ()=>TESTIMONIALS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/types/enums.ts [app-ssr] (ecmascript)");
;
const SERVICES = [
    {
        id: 'encaissement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].ENCAISSEMENT,
        title: 'Encaissements pour entreprises',
        description: 'Solutions d\'encaissement sécurisées et efficaces pour votre entreprise. Gérez vos transactions en toute confiance.',
        icon: 'wallet',
        features: [
            'Encaissement multi-canaux',
            'Rapports en temps réel',
            'Sécurité maximale',
            'Support 24/7'
        ]
    },
    {
        id: 'paiement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].PAIEMENT,
        title: 'Paiements de factures',
        description: 'Payez vos factures facilement : eau, électricité, internet, et plus encore. Simple, rapide et sécurisé.',
        icon: 'credit-card',
        features: [
            'Paiement instantané',
            'Historique des transactions',
            'Notifications automatiques',
            'Multi-fournisseurs'
        ]
    },
    {
        id: 'change',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].CHANGE,
        title: 'Change & Retraits',
        description: 'Services de change de devises et retraits bancaires aux meilleurs taux. Transactions sécurisées et transparentes.',
        icon: 'banknote',
        features: [
            'Taux compétitifs',
            'Devises multiples',
            'Retraits rapides',
            'Traçabilité complète'
        ]
    },
    {
        id: 'organisation',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].ORGANISATION,
        title: 'Organisation de l\'Entreprise',
        description: 'Diagnostic, optimisation et restructuration de vos processus d\'entreprise pour une efficacité maximale.',
        icon: 'building',
        features: [
            'Diagnostic 360° et recommandations',
            'Optimisation des processus',
            'Conduite du changement',
            'Gestion des performances'
        ]
    },
    {
        id: 'developpement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].DEVELOPPEMENT,
        title: 'Développement de l\'Entreprise',
        description: 'Accompagnement dans vos projets de transformation digitale et solutions de paiement innovantes.',
        icon: 'trending-up',
        features: [
            'Gestion de projet en sous-traitance',
            'Transformation digitale',
            'Plateformes électroniques',
            'Solutions monétiques'
        ]
    },
    {
        id: 'rdcard',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].RDCARD,
        title: 'RdCard - Carte Intelligente',
        description: 'Notre carte intelligente multifonctionnelle pour une expérience de paiement sans contact et sécurisée.',
        icon: 'credit-card',
        features: [
            'Paiement sans contact',
            'Sécurité avancée',
            'Recharge instantanée',
            'Historique des transactions'
        ]
    },
    {
        id: 'numerique',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].NUMERIQUE,
        title: 'Solutions Numériques',
        description: 'Développement de solutions numériques innovantes pour digitaliser votre entreprise et optimiser vos processus.',
        icon: 'smartphone',
        features: [
            'Applications web et mobile',
            'Plateformes e-commerce',
            'Systèmes de gestion intégrés',
            'Solutions cloud'
        ]
    },
    {
        id: 'fintech',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceType"].FINTECH,
        title: 'Services Fintech',
        description: 'Solutions financières technologiques avancées pour moderniser vos opérations bancaires et de paiement.',
        icon: 'trending-up',
        features: [
            'Paiements digitaux',
            'Portefeuilles électroniques',
            'API bancaires',
            'Solutions blockchain'
        ]
    }
];
const CONSULTING_SERVICES = [
    // Organisation de l'Entreprise
    {
        id: 'diagnostic',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].DIAGNOSTIC,
        title: 'Diagnostic des pratiques existantes',
        description: 'Analyse approfondie de vos pratiques actuelles',
        icon: 'search',
        category: 'organisation'
    },
    {
        id: 'diagnostic-360',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].DIAGNOSTIC_360,
        title: 'Diagnostic 360° avec recommandations',
        description: 'Diagnostic complet avec pistes de solutions adaptées',
        icon: 'compass',
        category: 'organisation'
    },
    {
        id: 'procedures',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].PROCEDURES,
        title: 'Écriture des procédures et instructions',
        description: 'Rédaction de procédures, instructions et notes internes',
        icon: 'file-text',
        category: 'organisation'
    },
    {
        id: 'changement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].CHANGEMENT,
        title: 'Accompagnement dans la politique du changement',
        description: 'Support dans la gestion et l\'implémentation du changement',
        icon: 'refresh-cw',
        category: 'organisation'
    },
    {
        id: 'reunions',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].REUNIONS,
        title: 'Revue et recommandations sur les réunions',
        description: 'Optimisation des réunions de services et comités inter entités',
        icon: 'users',
        category: 'organisation'
    },
    {
        id: 'process',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].PROCESS,
        title: 'Amélioration et optimisation des process',
        description: 'Optimisation des processus opérationnels, techniques et de communication',
        icon: 'settings',
        category: 'organisation'
    },
    {
        id: 'cahiers-charge',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].CAHIERS_CHARGE,
        title: 'Écriture des cahiers de charge',
        description: 'Rédaction de cahiers de charge détaillés et professionnels',
        icon: 'clipboard',
        category: 'organisation'
    },
    {
        id: 'conduite-changement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].CONDUITE_CHANGEMENT,
        title: 'Organisation et développement de la Conduite du changement',
        description: 'Mise en place et développement de stratégies de conduite du changement',
        icon: 'arrow-right-circle',
        category: 'organisation'
    },
    {
        id: 'demandes-specifiques',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].DEMANDES_SPECIFIQUES,
        title: 'Prise en charge de demandes spécifiques',
        description: 'Solutions personnalisées pour vos besoins particuliers',
        icon: 'star',
        category: 'organisation'
    },
    {
        id: 'formation',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].FORMATION,
        title: 'Formation intégration - produits et outils',
        description: 'Formation sur les produits, politique commerciale et outils de gestion',
        icon: 'book-open',
        category: 'organisation'
    },
    {
        id: 'reorganisation',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].REORGANISATION,
        title: 'Réorganisation et restructuration',
        description: 'Restructuration complète de votre organisation',
        icon: 'git-branch',
        category: 'organisation'
    },
    {
        id: 'performances',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].PERFORMANCES,
        title: 'Supports de gestion des performances',
        description: 'Mise en place de supports de gestion, suivi et évaluation',
        icon: 'bar-chart',
        category: 'organisation'
    },
    {
        id: 'objectifs',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].OBJECTIFS,
        title: 'Identification et instauration d\'objectifs',
        description: 'Définition d\'objectifs par poste et par service',
        icon: 'target',
        category: 'organisation'
    },
    {
        id: 'risques',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].RISQUES,
        title: 'Dispositifs de gestion des risques',
        description: 'Mise en place de systèmes de gestion des risques',
        icon: 'shield',
        category: 'organisation'
    },
    {
        id: 'chartes',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].CHARTES,
        title: 'Définition de chartes d\'entreprise',
        description: 'Création de chartes et politique d\'esprit d\'entreprise',
        icon: 'award',
        category: 'organisation'
    },
    {
        id: 'communication',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].COMMUNICATION,
        title: 'Dispositifs de communication efficace',
        description: 'Mise en place de communication efficace inter services',
        icon: 'message-circle',
        category: 'organisation'
    },
    {
        id: 'charges',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].CHARGES,
        title: 'Conseils sur la maîtrise des charges',
        description: 'Recommandations sur la maîtrise des charges de fonctionnement',
        icon: 'dollar-sign',
        category: 'organisation'
    },
    {
        id: 'gouvernance-si',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].GOUVERNANCE_SI,
        title: 'Revue et refonte de la Gouvernance SI',
        description: 'Recommandations en matière de Gouvernance des Systèmes d\'Information',
        icon: 'server',
        category: 'organisation'
    },
    {
        id: 'outils-gestion',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].OUTILS_GESTION,
        title: 'Optimisation des outils de gestion',
        description: 'Amélioration de l\'utilisation des outils de gestion',
        icon: 'wrench',
        category: 'organisation'
    },
    {
        id: 'qualite',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].QUALITE,
        title: 'Conseil en gestion Qualité',
        description: 'Accompagnement dans la mise en place de systèmes qualité',
        icon: 'check-circle',
        category: 'organisation'
    },
    // Développement de l'Entreprise
    {
        id: 'sous-traitance',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].SOUS_TRAITANCE,
        title: 'Prise en charge en sous-traitance de gestion de projet',
        description: 'Gestion complète de vos projets en sous-traitance',
        icon: 'briefcase',
        category: 'developpement'
    },
    {
        id: 'transformation-digitale',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsultingServiceType"].TRANSFORMATION_DIGITALE,
        title: 'Accompagnement aux projets de transformation digitale',
        description: 'Collaboration et accompagnement dans la transformation digitale, plateformes électroniques et solutions monétiques',
        icon: 'zap',
        category: 'developpement'
    }
];
const RDCARD_FEATURES = [
    {
        id: 'paiement',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardFeature"].PAIEMENT_PREPAYE,
        title: 'Paiements Sécurisés',
        description: 'Rechargez votre carte et payez en toute sécurité chez nos partenaires. Transactions instantanées et traçables.',
        icon: 'credit-card'
    },
    {
        id: 'recharge',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardFeature"].PAIEMENT_PREPAYE,
        title: 'Rechargement Instantané',
        description: 'Rechargez votre RdCard à tout moment via notre application mobile ou chez nos agents agréés.',
        icon: 'zap'
    },
    {
        id: 'suivi',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardFeature"].PAIEMENT_PREPAYE,
        title: 'Suivi en Temps Réel',
        description: 'Consultez l\'historique de vos transactions et suivez vos dépenses en temps réel via l\'application.',
        icon: 'clock'
    }
];
const RDCARD_TYPES = [
    {
        id: 'prestige',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardType"].PRESTIGE,
        name: 'RdCard Prestige',
        description: 'Destinée aux utilisateurs privilégiés avec des plafonds adaptés aux besoins quotidiens.',
        dailyLimit: 500,
        features: [
            'Plafond journalier de 500 USD',
            'Paiements et retraits sécurisés',
            'Recharge instantanée',
            'Support prioritaire',
            'Transactions traçables'
        ],
        color: 'from-purple-500 to-indigo-600',
        icon: 'star'
    },
    {
        id: 'gold',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardType"].GOLD,
        name: 'RdCard Gold',
        description: 'Conçue pour les utilisateurs réguliers nécessitant des plafonds plus élevés.',
        dailyLimit: 2000,
        features: [
            'Plafond journalier de 2 000 USD',
            'Idéale pour usage professionnel',
            'Cashback sur transactions',
            'Assurance incluse',
            'Accès aux services premium'
        ],
        color: 'from-yellow-500 to-orange-500',
        icon: 'award',
        recommended: true
    },
    {
        id: 'enterprise',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardType"].ENTERPRISE,
        name: 'RdCard Enterprise',
        description: 'Carte destinée aux entreprises pour alimenter les cartes de leurs employés.',
        dailyLimit: 0,
        features: [
            'Gestion centralisée des employés',
            'Alimentation des cartes Associate',
            'Tableau de bord entreprise',
            'Rapports détaillés',
            'API d\'intégration'
        ],
        color: 'from-blue-600 to-cyan-600',
        icon: 'building'
    },
    {
        id: 'associate',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardType"].ASSOCIATE,
        name: 'RdCard Associate',
        description: 'Carte affiliée à une RdCard Enterprise, utilisée par les employés.',
        dailyLimit: 500,
        features: [
            'Liée à une carte Enterprise',
            'Réception de salaire',
            'Dépenses personnelles',
            'Plafond configurable',
            'Historique des transactions'
        ],
        color: 'from-green-500 to-teal-500',
        icon: 'users'
    },
    {
        id: 'business',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RdCardType"].BUSINESS,
        name: 'RdCard Business',
        description: 'Spécialement conçue pour les marchands avec gestion des flux financiers.',
        dailyLimit: 5000,
        features: [
            'Plafond journalier de 5 000 USD',
            'Application marchande dédiée',
            'Gestion des encaissements',
            'Statistiques en temps réel',
            'Intégration comptable'
        ],
        color: 'from-red-500 to-pink-500',
        icon: 'briefcase'
    }
];
const TESTIMONIALS = [
    {
        id: '1',
        name: 'Marie Kalala',
        role: 'Directrice Financière',
        company: 'Entreprise ABC',
        content: 'Acoriss a transformé notre gestion des paiements. La RdCard est un outil indispensable pour notre entreprise.',
        rating: 5
    },
    {
        id: '2',
        name: 'Jean Mukendi',
        role: 'Entrepreneur',
        company: 'StartUp XYZ',
        content: 'Service impeccable et support réactif. Je recommande vivement Acoriss pour tous vos besoins de paiement.',
        rating: 5
    },
    {
        id: '3',
        name: 'Grace Nzuzi',
        role: 'Gérante',
        company: 'Commerce GHI',
        content: 'La simplicité et la sécurité des services Acoriss nous ont convaincus. Un partenaire de confiance.',
        rating: 5
    }
];
const RDCARD_FAQ = [
    {
        id: '1',
        question: 'Qu\'est-ce que la RdCard ?',
        answer: 'La RdCard est une carte prépayée multifonction qui combine paiement, identification et pointage de présence. C\'est la solution tout-en-un pour simplifier votre quotidien.',
        category: 'Général'
    },
    {
        id: '2',
        question: 'Comment obtenir une RdCard ?',
        answer: 'Vous pouvez demander votre RdCard en remplissant le formulaire de contact ou en vous rendant dans nos bureaux à Kinshasa. L\'activation est rapide et simple.',
        category: 'Général'
    },
    {
        id: '3',
        question: 'Où puis-je utiliser ma RdCard ?',
        answer: 'La RdCard est acceptée chez tous nos partenaires à Kinshasa et dans toute la RDC. La liste des points d\'acceptation est en constante expansion.',
        category: 'Utilisation'
    },
    {
        id: '4',
        question: 'Comment recharger ma RdCard ?',
        answer: 'Vous pouvez recharger votre RdCard via notre application mobile, dans nos agences, ou chez nos partenaires agréés. Le rechargement est instantané.',
        category: 'Utilisation'
    },
    {
        id: '5',
        question: 'La RdCard est-elle sécurisée ?',
        answer: 'Absolument ! La RdCard utilise les dernières technologies de sécurité : cryptage des données, authentification biométrique et protection contre la fraude.',
        category: 'Sécurité'
    },
    {
        id: '6',
        question: 'Quel est le coût de la RdCard ?',
        answer: 'Le coût d\'acquisition de la RdCard est de 10 000 FC. Aucun frais mensuel. Seuls les frais de transaction s\'appliquent selon votre utilisation.',
        category: 'Tarification'
    }
];
const TEAM_MEMBERS = [
    {
        id: '1',
        name: 'Claudine Wenzi',
        role: 'Directrice Générale',
        bio: 'Experte en fintech avec plus de 15 ans d\'expérience dans le secteur financier.',
        avatar: '/images/team/claudine.png'
    },
    {
        id: '2',
        name: 'Sébastien Namèche',
        role: 'Consultant Senior',
        bio: 'Spécialiste en innovation digitale et systèmes de paiement.',
        avatar: '/images/team/sebastien.jpeg'
    },
    {
        id: '3',
        name: 'Jean-pierre Wenzi',
        role: 'Directeur Commercial',
        bio: 'Passionné par le développement des solutions adaptées aux besoins locaux.',
        avatar: '/images/team/jean-pierre.jpg'
    }
];
}),
"[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceDetailSection",
    ()=>ServiceDetailSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/types/enums.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Mapping des images pour chaque service (liens externes)
const serviceImages = {
    encaissement: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    paiement: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    change: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop',
    organisation: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    developpement: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    rdcard: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    numerique: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    fintech: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop'
};
const ServiceDetailSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services-list",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent",
                                children: "Services Principaux"
                            }, void 0, false, {
                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Découvrez nos solutions complètes pour répondre à tous vos besoins"
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-20",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].map((service, index)=>{
                        const isEven = index % 2 === 0;
                        const imageUrl = serviceImages[service.id] || '/images/services/default.jpg';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl overflow-hidden shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full h-[400px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: imageUrl,
                                                            alt: service.title,
                                                            fill: true,
                                                            className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4",
                                                children: [
                                                    "Service #",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-600 mb-6 leading-relaxed",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-8",
                                                children: service.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-4 h-4 text-green-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].PRIMARY,
                                                size: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].MEDIUM,
                                                onClick: ()=>window.location.href = '/contact',
                                                children: "En savoir plus"
                                            }, void 0, false, {
                                                fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, service.id, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/acoriss-web/src/components/services/ServiceDetailSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultingServicesSection",
    ()=>ConsultingServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/compass.js [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-ssr] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightCircle$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/arrow-right-circle.js [app-ssr] (ecmascript) <export default as ArrowRightCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/bar-chart.js [app-ssr] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/server.js [app-ssr] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/acoriss-web/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/acoriss-web/src/types/enums.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const iconMap = {
    search: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
    compass: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
    'file-text': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    'refresh-cw': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
    users: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    settings: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    clipboard: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"],
    'arrow-right-circle': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightCircle$3e$__["ArrowRightCircle"],
    star: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    'book-open': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    'git-branch': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
    'bar-chart': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"],
    target: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    shield: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
    award: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
    'message-circle': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
    'dollar-sign': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
    server: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
    wrench: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    'check-circle': __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
    briefcase: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    zap: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
};
const ConsultingServicesSection = ()=>{
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredServices = activeCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSULTING_SERVICES"] : __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSULTING_SERVICES"].filter((service)=>service.category === activeCategory);
    const organisationServices = __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSULTING_SERVICES"].filter((s)=>s.category === 'organisation');
    const developpementServices = __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSULTING_SERVICES"].filter((s)=>s.category === 'developpement');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gradient-to-br from-gray-50 to-primary-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4",
                            children: "Services de Conseil"
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent",
                                children: "Expertise & Accompagnement"
                            }, void 0, false, {
                                fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Solutions complètes pour l'organisation et le développement de votre entreprise"
                        }, void 0, false, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-4 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory('all'),
                            className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'all' ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                            children: [
                                "Tous les services (",
                                __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSULTING_SERVICES"].length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory('organisation'),
                            className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'organisation' ? 'bg-primary-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                            children: [
                                "Organisation (",
                                organisationServices.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory('developpement'),
                            className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'developpement' ? 'bg-secondary-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                            children: [
                                "Développement (",
                                developpementServices.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: filteredServices.map((service)=>{
                        const Icon = iconMap[service.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"];
                        const isOrganisation = service.category === 'organisation';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4",
                            style: {
                                borderTopColor: isOrganisation ? '#1c9292' : '#46a1c5'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity",
                                                    style: {
                                                        background: isOrganisation ? 'linear-gradient(135deg, #1c9292, #46a1c5)' : 'linear-gradient(135deg, #46a1c5, #1c9292)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-xl p-3 flex items-center justify-center",
                                                    style: {
                                                        background: isOrganisation ? 'linear-gradient(135deg, rgba(28, 146, 146, 0.1), rgba(70, 161, 197, 0.1))' : 'linear-gradient(135deg, rgba(70, 161, 197, 0.1), rgba(28, 146, 146, 0.1))'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-8 h-8",
                                                        style: {
                                                            color: isOrganisation ? '#1c9292' : '#46a1c5'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium px-2 py-1 rounded-full",
                                            style: {
                                                backgroundColor: isOrganisation ? 'rgba(28, 146, 146, 0.1)' : 'rgba(70, 161, 197, 0.1)',
                                                color: isOrganisation ? '#1c9292' : '#46a1c5'
                                            },
                                            children: isOrganisation ? 'Organisation' : 'Développement'
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 leading-relaxed line-clamp-3",
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = '/contact',
                                    className: "mt-4 text-sm font-medium hover:gap-2 transition-all inline-flex items-center gap-1 group/link",
                                    style: {
                                        color: isOrganisation ? '#1c9292' : '#46a1c5'
                                    },
                                    children: [
                                        "En savoir plus",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "group-hover/link:translate-x-1 transition-transform",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, service.id, true, {
                            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto border-t-4 border-primary-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold mb-4 text-gray-900",
                                children: "Besoin d'un accompagnement personnalisé ?"
                            }, void 0, false, {
                                fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 mb-8",
                                children: "Nos experts sont à votre disposition pour analyser vos besoins et vous proposer des solutions sur mesure"
                            }, void 0, false, {
                                fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].PRIMARY,
                                        size: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].LARGE,
                                        onClick: ()=>window.location.href = '/contact',
                                        children: "Demander un diagnostic"
                                    }, void 0, false, {
                                        fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonVariant"].OUTLINE,
                                        size: __TURBOPACK__imported__module__$5b$project$5d2f$acoriss$2d$web$2f$src$2f$types$2f$enums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonSize"].LARGE,
                                        onClick: ()=>window.location.href = 'tel:+243828280000',
                                        children: "Appeler maintenant"
                                    }, void 0, false, {
                                        fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/acoriss-web/src/components/services/ConsultingServicesSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=acoriss-web_src_9abe4c2a._.js.map