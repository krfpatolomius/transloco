"use strict";(self.webpackChunktransloco_playground=self.webpackChunktransloco_playground||[]).push([[332],{3332:(T,c,o)=>{o.r(c),o.d(c,{default:()=>h});var r=o(6814),s=o(6671),i=o(6111),t=o(2029),_=o(475),m=o(1337),p=o(2132),g=o(2440);function d(a,n){if(1&a&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}const Z=function(){return{dateStyle:"long",timeStyle:"long"}},y=function(){return{dateStyle:"full",timeStyle:"full"}},A=function(){return{timeZone:"UTC",timeStyle:"full"}},u=function(){return{dateStyle:"medium",timeStyle:"medium"}},U=function(){return{useGrouping:!1}},D=function(){return{minimumFractionDigits:0}};let h=(()=>{class a{constructor(e,l){this.localeService=e,this.date=new Date(2019,7,14,0,0,0,0),this.localeList=Object.keys(l)}setLocale(e){this.localeService.setLocale(e.target.value)}get currencySymbol(){return this.localeService.getCurrencySymbol()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.Z_),t.Y36(i.tz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-locale"]],standalone:!0,features:[t.jDz],decls:84,vars:54,consts:[["href","https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html","target","_blank"],["value","fr-FR",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"mtb"],[1,"list-group"],["data-cy","date-regular",1,"list-group-item"],["data-cy","date-long",1,"list-group-item"],["data-cy","date-full",1,"list-group-item"],["data-cy","date-full-utc",1,"list-group-item"],["data-cy","date-medium-unix",1,"list-group-item"],["data-cy","date-medium-string",1,"list-group-item"],["data-cy","number-decimal",1,"list-group-item"],["data-cy","number-decimal-grouped",1,"list-group-item"],["data-cy","number-percent",1,"list-group-item"],["data-cy","currency-symbol-only",1,"list-group-item"],["data-cy","currency-symbol",1,"list-group-item"],["data-cy","currency-name",1,"list-group-item"],["data-cy","currency-custom-digit",1,"list-group-item"],[3,"value"]],template:function(e,l){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Localization Support for Transloco"),t.qZA(),t.TgZ(2,"p"),t._uU(3," This library brings a localization support for Transloco lib, by using native Javascript's "),t.TgZ(4,"a",0),t._uU(5,"Internalization api"),t.qZA(),t._uU(6,".\n"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Select any locale from the list to see his format:"),t.qZA(),t.TgZ(9,"select",1),t.NdJ("change",function(b){return l.setLocale(b)}),t.YNc(10,d,2,2,"option",2),t.qZA(),t.TgZ(11,"h3",3),t._uU(12,"Date Format"),t.qZA(),t.TgZ(13,"ul",4)(14,"li",5)(15,"b"),t._uU(16,"Regular date: "),t.qZA(),t._uU(17),t.ALo(18,"translocoDate"),t.qZA(),t.TgZ(19,"li",6)(20,"b"),t._uU(21,"Long date: "),t.qZA(),t._uU(22),t.ALo(23,"translocoDate"),t.qZA(),t.TgZ(24,"li",7)(25,"b"),t._uU(26,"Full date: "),t.qZA(),t._uU(27),t.ALo(28,"translocoDate"),t.qZA(),t.TgZ(29,"li",8)(30,"b"),t._uU(31,"Date in timezone UTC: "),t.qZA(),t._uU(32),t.ALo(33,"translocoDate"),t.qZA(),t.TgZ(34,"li",9)(35,"b"),t._uU(36,"Unix timestamp time date: "),t.qZA(),t._uU(37),t.ALo(38,"translocoDate"),t.qZA(),t.TgZ(39,"li",10)(40,"b"),t._uU(41,"String format to date: "),t.qZA(),t._uU(42),t.ALo(43,"translocoDate"),t.qZA()(),t.TgZ(44,"h3",3),t._uU(45,"Number Format"),t.qZA(),t.TgZ(46,"ul",4)(47,"li",11)(48,"b"),t._uU(49,"Decimal number: "),t.qZA(),t._uU(50),t.ALo(51,"translocoDecimal"),t.qZA(),t.TgZ(52,"li",12)(53,"b"),t._uU(54,"Decimal without grouping: "),t.qZA(),t._uU(55),t.ALo(56,"translocoDecimal"),t.qZA(),t.TgZ(57,"li",13)(58,"b"),t._uU(59,"Percentage number: "),t.qZA(),t._uU(60),t.ALo(61,"translocoPercent"),t.qZA()(),t.TgZ(62,"h3",3),t._uU(63,"Currency Format"),t.qZA(),t.TgZ(64,"ul",4)(65,"li",14)(66,"b"),t._uU(67,"Symbol: "),t.qZA(),t._uU(68),t.qZA(),t.TgZ(69,"li",15)(70,"b"),t._uU(71,"Symbol currency: "),t.qZA(),t._uU(72),t.ALo(73,"translocoCurrency"),t.qZA(),t.TgZ(74,"li",16)(75,"b"),t._uU(76,"Name currency: "),t.qZA(),t._uU(77),t.ALo(78,"translocoCurrency"),t.qZA(),t.TgZ(79,"li",17)(80,"b"),t._uU(81,"Custom digit formatted currency: "),t.qZA(),t._uU(82),t.ALo(83,"translocoCurrency"),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("ngForOf",l.localeList),t.xp6(7),t.hij("",t.lcZ(18,14,l.date)," "),t.xp6(5),t.hij("",t.xi3(23,16,l.date,t.DdM(47,Z))," "),t.xp6(5),t.hij("",t.xi3(28,19,l.date,t.DdM(48,y))," "),t.xp6(5),t.hij("",t.xi3(33,22,l.date,t.DdM(49,A))," "),t.xp6(5),t.hij("",t.xi3(38,25,1,t.DdM(50,u))," "),t.xp6(5),t.hij("",t.xi3(43,28,"2019-02-08",t.DdM(51,u))," "),t.xp6(8),t.hij("",t.lcZ(51,31,1234567890)," "),t.xp6(5),t.hij("",t.xi3(56,33,1234567890,t.DdM(52,U))," "),t.xp6(5),t.hij("",t.lcZ(61,36,1)," "),t.xp6(8),t.hij("",l.currencySymbol," "),t.xp6(4),t.hij("",t.lcZ(73,38,1e6)," "),t.xp6(5),t.hij("",t.xi3(78,40,1e6,"name")," "),t.xp6(5),t.hij(" ",t.Dn7(83,43,1e6,"symbol",t.DdM(53,D))," "))},dependencies:[r.ez,r.sg,s.y4,i.ED,_.n,m.v,p.q,g.X],styles:[".form-control[_ngcontent-%COMP%]{width:120px;display:inline-block;margin-right:10px}"],changeDetection:0}),a})()}}]);