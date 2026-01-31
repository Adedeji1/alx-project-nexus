module.exports = [
"[project]/services/movieApi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMovieById",
    ()=>getMovieById,
    "getPopularMovies",
    ()=>getPopularMovies
]);
const API_KEY = ("TURBOPACK compile-time value", "3b649a2914798d4124c42091eed6c69c");
const BASE_URL = ("TURBOPACK compile-time value", "https://api.themoviedb.org/3");
async function fetchFromTMDB(endpoint) {
    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
async function getPopularMovies() {
    const data = await fetchFromTMDB("/movie/popular");
    return data.results;
}
async function getMovieById(id) {
    return fetchFromTMDB(`/movie/${id}`);
}
}),
"[project]/components/movie/MovieDetail.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieDetail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function MovieDetail({ movie }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: `${("TURBOPACK compile-time value", "https://image.tmdb.org/t/p/w500")}${movie.poster_path}`,
                className: "rounded-xl",
                alt: movie.title
            }, void 0, false, {
                fileName: "[project]/components/movie/MovieDetail.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: movie.title
                    }, void 0, false, {
                        fileName: "[project]/components/movie/MovieDetail.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 mb-4",
                        children: movie.overview
                    }, void 0, false, {
                        fileName: "[project]/components/movie/MovieDetail.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: [
                            "Release Date: ",
                            movie.release_date
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/movie/MovieDetail.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: [
                            "Rating: ⭐ ",
                            movie.vote_average.toFixed(1)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/movie/MovieDetail.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "mt-6 px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700",
                        onClick: ()=>{
                            const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
                            localStorage.setItem("favorites", JSON.stringify([
                                ...saved,
                                movie
                            ]));
                        },
                        children: "Add to Watchlist"
                    }, void 0, false, {
                        fileName: "[project]/components/movie/MovieDetail.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/movie/MovieDetail.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie/MovieDetail.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/movie/[id].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoviePage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$movieApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/movieApi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$movie$2f$MovieDetail$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/movie/MovieDetail.tsx [ssr] (ecmascript)");
;
;
;
function MoviePage({ movie }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "px-10 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$movie$2f$MovieDetail$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            movie: movie
        }, void 0, false, {
            fileName: "[project]/pages/movie/[id].tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/movie/[id].tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
const getServerSideProps = async ({ params })=>{
    const movie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$movieApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getMovieById"])(params?.id);
    return {
        props: {
            movie
        }
    };
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0e948f5._.js.map