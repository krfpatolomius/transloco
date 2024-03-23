"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[7937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"FAQ",description:"FAQ | Transloco Angular i18n"},l=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ",description:"FAQ | Transloco Angular i18n",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/transloco/docs/faq",draft:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ",description:"FAQ | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Blog Posts",permalink:"/transloco/docs/blog-posts"},next:{title:"Validator",permalink:"/transloco/docs/tools/validator"}},c={},d=[{value:"I&#39;m calling the <code>translate</code> function inside <code>ngOnInit</code> but it says the translation is missing and when I use the structural directive it works fine, why?",id:"im-calling-the-translate-function-inside-ngoninit-but-it-says-the-translation-is-missing-and-when-i-use-the-structural-directive-it-works-fine-why",level:3},{value:"Is it possible to use an Angular component inside my translation string?",id:"is-it-possible-to-use-an-angular-component-inside-my-translation-string",level:3},{value:"<code>getBrowserLang</code> in SSR?",id:"getbrowserlang-in-ssr",level:3},{value:"Can I use HTML markings inside a translation?",id:"can-i-use-html-markings-inside-a-translation",level:3},{value:"I want to use the structural directive in my app, but isn&#39;t calling a function from the template a bad practice?",id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice",level:3},{value:"Why values don&#39;t get translated when using the <code>translate</code> in unit tests?",id:"why-values-dont-get-translated-when-using-the-translate-in-unit-tests",level:3},{value:"Why does querying an element inside the <code>*transloco</code> directive using <code>@ViewChild()</code> not working?",id:"why-does-querying-an-element-inside-the-transloco-directive-using-viewchild-not-working",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A collection of common questions and their answers."),(0,r.kt)("h3",{id:"im-calling-the-translate-function-inside-ngoninit-but-it-says-the-translation-is-missing-and-when-i-use-the-structural-directive-it-works-fine-why"},"I'm calling the ",(0,r.kt)("inlineCode",{parentName:"h3"},"translate")," function inside ",(0,r.kt)("inlineCode",{parentName:"h3"},"ngOnInit")," but it says the translation is missing and when I use the structural directive it works fine, why?"),(0,r.kt)("p",null,"Loading the translations is an asynchronous task while ",(0,r.kt)("inlineCode",{parentName:"p"},"translate")," is a synchronous function.\nYou have 2 options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscribe to the transloco service events and use ",(0,r.kt)("inlineCode",{parentName:"li"},"translate")," inside the subscription."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"selectTranslate")," instead.")),(0,r.kt)("p",null,"The structural directive is waiting for the translation to load on its own, that's why it's working in the template."),(0,r.kt)("h3",{id:"is-it-possible-to-use-an-angular-component-inside-my-translation-string"},"Is it possible to use an Angular component inside my translation string?"),(0,r.kt)("p",null,"You can't do it using while AOT compilation, but there are 2 alternatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transform your component into a web component using ",(0,r.kt)("inlineCode",{parentName:"li"},"@angular/elements")," and use the HTML tag in your translation."),(0,r.kt)("li",{parentName:"ul"},"Separate your translation into 2 parts and insert the desired component between.")),(0,r.kt)("h3",{id:"getbrowserlang-in-ssr"},(0,r.kt)("inlineCode",{parentName:"h3"},"getBrowserLang")," in SSR?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getBrowserLang")," function will only returns a value when executed in browser context, if you are using SSR you should add a desired default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const defaultLang = getBrowserLang() || 'en';\n")),(0,r.kt)("h3",{id:"can-i-use-html-markings-inside-a-translation"},"Can I use HTML markings inside a translation?"),(0,r.kt)("p",null,"Yes, you can! Pass the translated string in an ",(0,r.kt)("inlineCode",{parentName:"p"},"innerHTML")," binding."),(0,r.kt)("h3",{id:"i-want-to-use-the-structural-directive-in-my-app-but-isnt-calling-a-function-from-the-template-a-bad-practice"},"I want to use the structural directive in my app, but isn't calling a function from the template a bad practice?"),(0,r.kt)("p",null,"Using a structural directive is the recommended approach. It\u2019s DRY and efficient, as it creates one subscription per template."),(0,r.kt)("p",null,"Moreover, the t function is ",(0,r.kt)("inlineCode",{parentName:"p"},"memoized"),", It means that given the same key, it will return the result directly from the cache."),(0,r.kt)("p",null,"Furthermore, when using on push change detection strategy (which is recommended) the change detection cycles should greatly reduce."),(0,r.kt)("h3",{id:"why-values-dont-get-translated-when-using-the-translate-in-unit-tests"},"Why values don't get translated when using the ",(0,r.kt)("inlineCode",{parentName:"h3"},"translate")," in unit tests?"),(0,r.kt)("p",null,"As stated beneath the function, even in tests, it's you responsibility to make sure the translation are loaded\nbefore calling it.  "),(0,r.kt)("p",null,"You can make sure you translations are loaded before your test executes by simply setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"preloadLangs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the options passed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoTestingModule.forRoot"),".  "),(0,r.kt)("h3",{id:"why-does-querying-an-element-inside-the-transloco-directive-using-viewchild-not-working"},"Why does querying an element inside the ",(0,r.kt)("inlineCode",{parentName:"h3"},"*transloco")," directive using ",(0,r.kt)("inlineCode",{parentName:"h3"},"@ViewChild()")," not working?"),(0,r.kt)("p",null,"The transloco structural directive has an async operation in its internals which is fetching the translations."),(0,r.kt)("p",null,"Because of that, the contents of the directive won't be available until the translations are fetched, so you can't access\nthe element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngOnInit")," nor the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngAfterViewInit"),"."),(0,r.kt)("p",null,"The simplest way you can gain access to the element on render is by making the ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewChild")," a setter."))}h.isMDXComponent=!0}}]);