/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/moonpig-logo.png":
/*!*************************************!*\
  !*** ./src/assets/moonpig-logo.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0f135d92fcdb93d912bdc3c4ac55c5aa.png");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
const md_1 = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
const moonpig_logo_png_1 = __importDefault(__webpack_require__(/*! ../assets/moonpig-logo.png */ "./src/assets/moonpig-logo.png"));
const SearchIcon = () => {
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 28 28", width: "28px", height: "28px" },
        react_1.default.createElement("path", { clipRule: "evenodd", d: "M11 2a9 9 0 1 0 3.88 17.123l5.777 5.777a3 3 0 0 0 4.243-4.243l-5.777-5.777A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm14.032 5.618a9.054 9.054 0 0 1-1.414 1.414l5.453 5.453a1 1 0 0 0 1.414-1.414z", fill: "currentColor", fillRule: "evenodd" })));
};
const ClearIcon = ({ onClick }) => {
    return (react_1.default.createElement(md_1.MdOutlineClear, { onClick: onClick, size: 28 }));
};
const Header = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSearch = (event) => {
        navigate({
            pathname: "/",
            search: (0, react_router_dom_1.createSearchParams)({
                searchKey: event.target.value
            }).toString()
        });
    };
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const inputValue = searchParams.get('searchKey') || '';
    const clearAll = () => {
        navigate('/');
    };
    return (react_1.default.createElement("header", null,
        react_1.default.createElement("div", { className: "header-items" },
            react_1.default.createElement("img", { onClick: () => navigate('/'), src: moonpig_logo_png_1.default }),
            react_1.default.createElement("div", { className: "search-icon" },
                react_1.default.createElement("input", { value: inputValue, onChange: handleSearch, onBlur: handleSearch, placeholder: "Search for cards\u2026" }),
                inputValue ? react_1.default.createElement(ClearIcon, { onClick: () => clearAll() }) : react_1.default.createElement(SearchIcon, null)))));
};
exports["default"] = Header;


/***/ }),

/***/ "./src/components/ImageCarousel.tsx":
/*!******************************************!*\
  !*** ./src/components/ImageCarousel.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const fc_1 = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const handleClick = (goTo) => {
        setCurrentIndex(currentIndex + goTo);
    };
    const isFirstImage = currentIndex === 0;
    const isLastImage = images.length - 1 === currentIndex;
    return (react_1.default.createElement("div", { "data-testid": 'carousel', className: "img-carousel" },
        react_1.default.createElement("button", { "data-testid": 'goto-previous-image', className: 'carousel-buttons', disabled: isFirstImage, onClick: () => handleClick(-1) },
            react_1.default.createElement(fc_1.FcPrevious, null)),
        react_1.default.createElement("div", { className: 'image-container' },
            react_1.default.createElement("div", { className: 'image-display' },
                react_1.default.createElement("img", { "data-testid": 'preview-img', src: images[currentIndex].ImageUrl })),
            react_1.default.createElement("div", { "data-testid": 'dotted-toggle-option', className: 'dotted-toggle' }, images.map((image, index) => (react_1.default.createElement("button", { onClick: () => setCurrentIndex(index), style: { backgroundColor: index === currentIndex ? '#ce3356' : '#ffd7df' }, key: `dotted-toggle-${image.ImageNo}`, "data-testid": 'dotted-toggle-buttons', className: 'dotted-toggle-buttons' }))))),
        react_1.default.createElement("button", { "data-testid": 'goto-next-image', className: 'carousel-buttons', disabled: isLastImage, onClick: () => handleClick(1) },
            react_1.default.createElement(fc_1.FcNext, null))));
};
exports["default"] = ImageCarousel;


/***/ }),

/***/ "./src/components/Loading.tsx":
/*!************************************!*\
  !*** ./src/components/Loading.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Loading = ({ showLoading }) => {
    if (!showLoading)
        return null;
    return (react_1.default.createElement("div", { "data-testid": 'loading', className: "lds-ellipsis" }, Array.from(Array(4).keys()).map((num) => react_1.default.createElement("div", { key: `loading-${num}` }))));
};
exports["default"] = Loading;


/***/ }),

/***/ "./src/hooks/usePagination.ts":
/*!************************************!*\
  !*** ./src/hooks/usePagination.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const usePagination = (fetchCardsCallback) => {
    const [isFetching, setIsFetching] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight || isFetching)
            return;
        setIsFetching(true);
        fetchCardsCallback();
    };
    return [isFetching, setIsFetching];
};
exports["default"] = usePagination;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
const ListCards_1 = __importDefault(__webpack_require__(/*! ./pages/ListCards */ "./src/pages/ListCards/index.tsx"));
const Header_1 = __importDefault(__webpack_require__(/*! ./components/Header */ "./src/components/Header.tsx"));
const ViewCard_1 = __importDefault(__webpack_require__(/*! ./pages/ViewCard */ "./src/pages/ViewCard/index.tsx"));
__webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
function App() {
    console.log("development");
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: '/moonpig-assessment.github.io' },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { className: 'main-content' },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(ListCards_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/card/:id", element: react_1.default.createElement(ViewCard_1.default, null) })))));
}
const rootElement = document.getElementById('root');
const documentRoot = client_1.default.createRoot(rootElement);
documentRoot.render(react_1.default.createElement(App, null));


/***/ }),

/***/ "./src/pages/ListCards/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/ListCards/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const usePagination_1 = __importDefault(__webpack_require__(/*! ../../hooks/usePagination */ "./src/hooks/usePagination.ts"));
const bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
const Loading_1 = __importDefault(__webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
const removeSpaceSpecialCharactersAndLowerCaseString = (val) => val.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const filterData = (cards, searchParam) => {
    if (!searchParam)
        return cards;
    const filteredCards = cards.filter((card) => {
        const title = removeSpaceSpecialCharactersAndLowerCaseString(card.Title);
        const searchKey = removeSpaceSpecialCharactersAndLowerCaseString(searchParam);
        return title.includes(searchKey);
    });
    return filteredCards;
};
function ListCards() {
    const [cards, setCards] = (0, react_1.useState)([]);
    const [error, setIsError] = (0, react_1.useState)(false);
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const searchKey = searchParams.get('searchKey') || '';
    const filteredData = filterData(cards, searchKey);
    const [pageInfo, setPageInfo] = (0, react_1.useState)({
        currentPage: 1,
        entriesPerPage: 20
    });
    const fetchMoreCards = () => {
        setTimeout(() => {
            setPageInfo((previousState) => {
                const currentPage = previousState.currentPage + 1;
                return ({
                    currentPage,
                    entriesPerPage: currentPage * 20
                });
            });
            setIsFetching(false);
        }, 2000);
    };
    const goToImageView = (productId) => {
        navigate(`/card/${productId}`);
    };
    const [isFetching, setIsFetching] = (0, usePagination_1.default)(fetchMoreCards);
    (0, react_1.useEffect)(() => {
        fetch('https://moonpig.github.io/tech-test-frontend/search.json')
            .then((response) => response.json())
            .then((data) => {
            setCards(data.Products);
        }).catch((error) => {
            console.log(error);
            setIsError(true);
        });
    }, []);
    const dataToDisplay = filteredData.slice(0, pageInfo.entriesPerPage);
    if (error)
        return (react_1.default.createElement("div", { "data-testid": 'error-msg', className: 'error-display' },
            react_1.default.createElement(bi_1.BiMessageError, { color: '#ffa2c1', size: '10em' }),
            react_1.default.createElement("div", null, "Sorry, we are currently encountering issues, we\u2018ll be back soon!")));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        searchKey ? (react_1.default.createElement("div", { className: 'results-info', "data-testid": 'results-info' },
            "Found ",
            react_1.default.createElement("span", null, filteredData.length),
            " results related to ",
            react_1.default.createElement("span", null, searchParams.get('searchKey')))) : null,
        cards.length ? react_1.default.createElement("div", { "data-testid": 'cards-list', className: 'cards' }, dataToDisplay.map((product) => (react_1.default.createElement("div", { onClick: () => goToImageView(product.MoonpigProductNo), "data-testid": 'card-info', className: 'card', key: product.ProductId },
            react_1.default.createElement("img", { className: 'card-image', alt: product.Title, src: product.ProductImage.Link.Href }))))) : null,
        dataToDisplay.length < filteredData.length ? react_1.default.createElement(Loading_1.default, { showLoading: isFetching }) : null));
}
exports["default"] = ListCards;


/***/ }),

/***/ "./src/pages/ViewCard/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/ViewCard/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Loading_1 = __importDefault(__webpack_require__(/*! ../../components/Loading */ "./src/components/Loading.tsx"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
const ImageCarousel_1 = __importDefault(__webpack_require__(/*! ../../components/ImageCarousel */ "./src/components/ImageCarousel.tsx"));
function ViewCard() {
    const [cardInfo, setCardInfo] = (0, react_1.useState)();
    const [loading, setIsLoading] = (0, react_1.useState)(true);
    const { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        fetch(`https://moonpig.github.io/tech-test-frontend/product/${id}.json`)
            .then((response) => response.json())
            .then((data) => {
            setIsLoading(false);
            setCardInfo(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    if (loading && !cardInfo)
        return react_1.default.createElement(Loading_1.default, { showLoading: loading });
    return (react_1.default.createElement("div", { "data-testid": 'card-view-container', className: 'card-view-container' },
        react_1.default.createElement("div", { className: 'image-section' },
            react_1.default.createElement(ImageCarousel_1.default, { images: (cardInfo === null || cardInfo === void 0 ? void 0 : cardInfo.ImageUrls) || [] })),
        react_1.default.createElement("div", { className: 'content-section' },
            react_1.default.createElement("h3", { "data-testid": 'title', className: 'card-title' }, cardInfo === null || cardInfo === void 0 ? void 0 : cardInfo.Title),
            react_1.default.createElement("button", { className: 'purchase-button' }, "Buy now"))));
}
exports["default"] = ViewCard;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmoonpig_frontend_test"] = self["webpackChunkmoonpig_frontend_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-icons_bi_index_esm_js-node_module-ef6209"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;