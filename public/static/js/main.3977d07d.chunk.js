(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){e.exports={main:"ImageSlider_main__3aUJT",slider__container:"ImageSlider_slider__container__20IfH",slider__controls:"ImageSlider_slider__controls__1FiMf",slider__controls__buttons:"ImageSlider_slider__controls__buttons__1EdS_",slider__position__tracker:"ImageSlider_slider__position__tracker__3YTU2",tracker__circle:"ImageSlider_tracker__circle__wmdrx",circle__active:"ImageSlider_circle__active__3d0CF"}},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s,n,r,a,l=c(3),i=c(49),o=c(73),j=c(75),d=c(72),m=c(19),b=c(5),p=c(76),u=c(36),x=c(74),h=Object(x.a)(s||(s=Object(u.a)(["\n    query LaunchesQuery {\n        launches {\n            id\n            launchpad\n            flight_number\n            name\n            date_utc\n            date_local\n            success\n            details\n            rocket\n        }\n    }\n"]))),g=Object(x.a)(n||(n=Object(u.a)(["\n    query Launch($launchId: String!) {\n        launch(id: $launchId) {\n            id\n            flight_number\n            name\n            date_local\n            success\n            details\n            rocket\n            failures {\n                time\n                altitude\n                reason\n            }\n            links {\n                patch { small }\n                webcast\n                presskit\n                article\n                wikipedia\n            }\n        }\n        rockets {\n            id\n            name\n            country\n            company\n            first_flight\n            flickr_images\n            type\n        }  \n    }\n"]))),O=(Object(x.a)(r||(r=Object(u.a)(["\n    query RocketsQuery {\n        rockets {\n            id\n            name\n            type\n            active\n            stages\n            boosters\n            cost_per_launch\n            suucess_rate_pct\n            first_flight\n            country\n            company\n            wikipedia\n            desciption\n            flickr_images\n        }\n    }\n"]))),Object(x.a)(a||(a=Object(u.a)(["\n    query RocketQuery($rocketId: String!) {\n        rocket(id: $rocketId) {\n            id\n            name\n            type\n            stages\n            boosters\n            flickr_images\n            cost_per_launch\n            success_rate_pct\n            first_flight\n            country\n            company\n            wikipedia\n            description\n        }\n    }\n"])))),f=c(23),_=c.n(f),y=c(39),v=c.n(y),N=c(1);function w(e){var t=e.launch,c=t.id,s=t.name,n=t.date_local,r=t.success;return Object(N.jsx)("div",{className:"card card-body mb-3  opacity-4",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-md-9",children:[Object(N.jsxs)("h4",{children:["Mission: ","",Object(N.jsx)("span",{className:_()({"text-success":r,"text-danger":!r}),children:s})]}),Object(N.jsxs)("p",{children:["Date: ","",Object(N.jsx)(v.a,{format:"YYYY-MM-DD HH:mm",children:n})]})]}),Object(N.jsx)("div",{className:"col-md-3 mt-4",children:Object(N.jsx)(m.b,{to:"/launch/".concat(c),className:"shadow-sm btn btn-secondary",children:"Launch Details"})})]})})}function k(){return Object(N.jsxs)("div",{className:"my-3",children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}function E(){var e=Object(p.a)(h),t=e.loading,c=e.error,s=e.data;return console.log(s),t?Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"})]}):c?"Error! ".concat(c.message):Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(N.jsx)(k,{}),Object(N.jsx)(l.Fragment,{children:s.launches.map((function(e){return Object(N.jsx)(w,{launch:e},e.id)}))})]})}var S=c(27),I=c.p+"static/media/LogoSpaceX.66f924fc.png";function L(e){var t=e.rocket,c=t.id,s=t.name,n=(t.country,t.company),r=t.active,a=t.first_flight;return Object(N.jsx)("div",{className:"card card-body mb-3",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-md-9",children:[Object(N.jsxs)("h4",{children:["Name: ","",Object(N.jsx)("span",{className:_()({"text-success":r,"text-danger":!r}),children:s})]}),Object(N.jsxs)("p",{children:["First flight: ",""," ",a," "]}),Object(N.jsxs)("p",{children:["Conpany: ",""," ",n," "]})]}),Object(N.jsx)("div",{className:"col-md-3 mt-4",children:Object(N.jsx)(m.b,{to:"/rocket/".concat(c),className:"mt-4 shadow-sm btn btn-secondary",children:"Rocket Details"})})]})})}function F(){return Object(N.jsxs)("div",{className:"d-inline-flex",children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Active"]}),Object(N.jsx)("p",{className:"px-3",children:" "}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = No active"]})]})}var C,D,M,Y,R,P,B,H,X,q,z,A,$,J,Q,T,U=c(9),W=["title","titleId"];function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e},V.apply(this,arguments)}function G(e,t){if(null==e)return{};var c,s,n=function(e,t){if(null==e)return{};var c,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function K(e,t){var c=e.title,s=e.titleId,n=G(e,W);return l.createElement("svg",V({fill:"white",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.787 490.787",style:{enableBackground:"new 0 0 490.787 490.787"},xmlSpace:"preserve",ref:t,"aria-labelledby":s},n),c?l.createElement("title",{id:s},c):null,l.createElement("path",{style:{fill:"#F44336"},d:"M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006 c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083 c-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085 C368.236,489.664,365.511,490.792,362.671,490.787z"}),C||(C=l.createElement("path",{d:"M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256 c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262 L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"})),D||(D=l.createElement("g",null)),M||(M=l.createElement("g",null)),Y||(Y=l.createElement("g",null)),R||(R=l.createElement("g",null)),P||(P=l.createElement("g",null)),B||(B=l.createElement("g",null)),H||(H=l.createElement("g",null)),X||(X=l.createElement("g",null)),q||(q=l.createElement("g",null)),z||(z=l.createElement("g",null)),A||(A=l.createElement("g",null)),$||($=l.createElement("g",null)),J||(J=l.createElement("g",null)),Q||(Q=l.createElement("g",null)),T||(T=l.createElement("g",null)))}var Z,ee,te,ce,se,ne,re,ae,le,ie,oe,je,de,me,be,pe,ue=l.forwardRef(K),xe=(c.p,["title","titleId"]);function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e},he.apply(this,arguments)}function ge(e,t){if(null==e)return{};var c,s,n=function(e,t){if(null==e)return{};var c,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)c=r[s],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function Oe(e,t){var c=e.title,s=e.titleId,n=ge(e,xe);return l.createElement("svg",he({fill:"white",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.8 490.8",style:{enableBackground:"new 0 0 490.8 490.8"},xmlSpace:"preserve",ref:t,"aria-labelledby":s},n),c?l.createElement("title",{id:s},c):null,l.createElement("path",{style:{fill:"#F44336"},d:"M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82 l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262 c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"}),Z||(Z=l.createElement("path",{d:"M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115 L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667 c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"})),ee||(ee=l.createElement("g",null)),te||(te=l.createElement("g",null)),ce||(ce=l.createElement("g",null)),se||(se=l.createElement("g",null)),ne||(ne=l.createElement("g",null)),re||(re=l.createElement("g",null)),ae||(ae=l.createElement("g",null)),le||(le=l.createElement("g",null)),ie||(ie=l.createElement("g",null)),oe||(oe=l.createElement("g",null)),je||(je=l.createElement("g",null)),de||(de=l.createElement("g",null)),me||(me=l.createElement("g",null)),be||(be=l.createElement("g",null)),pe||(pe=l.createElement("g",null)))}var fe=l.forwardRef(Oe),_e=(c.p,c(25)),ye=c.n(_e);function ve(e){var t=e.srcArr,c=Object(l.useState)(0),s=Object(U.a)(c,2),n=s[0],r=s[1],a=function(e){r((function(t){return t+e}))};return t.length?Object(N.jsx)("div",{className:ye.a.main,children:Object(N.jsxs)("div",{className:ye.a.slider__container,children:[Object(N.jsx)("img",{src:t[n],alt:"Mission"}),Object(N.jsxs)("div",{className:ye.a.slider__controls,children:[Object(N.jsxs)("div",{className:ye.a.slider__controls__buttons,children:[Object(N.jsx)("div",{children:0!==n&&Object(N.jsx)("button",{onClick:function(){return a(-1)},children:Object(N.jsx)(ue,{})})}),Object(N.jsx)("div",{children:n!==t.length-1&&Object(N.jsx)("button",{onClick:function(){return a(1)},children:Object(N.jsx)(fe,{})})})]}),Object(N.jsx)("div",{className:ye.a.slider__position__tracker,children:t.map((function(e,t){return Object(N.jsx)("div",{className:"".concat(ye.a.tracker__circle," ").concat(t===n?ye.a.circle__active:ye.a.circle__inactive)},e)}))})]})]})}):null}function Ne(){var e=Object(b.g)().id,t=Object(p.a)(g,{variables:{launchId:e}}),c=t.loading,s=t.error,n=t.data;if(c)return Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"})]});if(s)return"Error! ".concat(s.message);var r=n.launch,a=(r.launchpad,r.flight_number),i=r.name,o=(r.date_utc,r.date_local),j=r.success,d=r.details,u=r.links,x=u.presskit,h=u.patch,O=h.small,f=(h.large,u.webcast),y=u.article,w=u.wikipedia,k=r.rocket,E=n.rockets,C=(E.id,E.type,E.country,E.first_flight,E.flickr_images,n.rockets.filter((function(e){return e.id==="".concat(k)}))),D=Object.assign.apply(Object,[{}].concat(Object(S.a)(C)));return Object(N.jsxs)(l.Fragment,{children:[Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"mb-3",style:{display:"flex",flexDirection:"row",alignContent:"flex-end",alignItems:"flex-end"},children:[Object(N.jsxs)("h1",{className:"display-4 my-3",children:[Object(N.jsx)("span",{className:"text-dark",children:"Mission:"})," ",i]}),Object(N.jsx)("img",{className:"mt-5 mr-4 mb-4 ml-auto",src:O||I,alt:"Mission Patch",style:{width:120}})]}),Object(N.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Flight Number: ",""," ",a]}),Object(N.jsxs)("li",{className:"list-group-item opacity-3",children:["Launch Date: ",""," ",Object(N.jsx)(v.a,{format:"YYYY-MM-DD HH:mm",children:o})]}),Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Launch Successful: ","",Object(N.jsxs)("span",{className:_()({"text-success":j,"text-danger":!j}),children:[j?"Yes":"No",Object(N.jsx)("p",{className:"pt-2",children:d})]})]})]}),Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(N.jsxs)("div",{className:"list-group-horizontal opacity-4",children:[Object(N.jsx)(F,{}),Object(N.jsx)(l.Fragment,{children:Object(N.jsx)(L,{rocket:D},k)})]})]}),Object(N.jsx)(ve,{srcArr:D.flickr_images.concat(D.flickr_images)}),Object(N.jsx)("h4",{className:"my-3",children:"Links"}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item text-truncate opacity-4",children:["Presskit: ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:x,title:"(open in a new tab)",children:[x," "]})]}),Object(N.jsxs)("li",{className:"list-group-item text-truncate opacity-5",children:["Article link: ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:y,title:"(open in a new tab)",children:[y," "]})]}),Object(N.jsxs)("li",{className:"list-group-item text-truncate opacity-4",children:["Wikipedia: ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:w,title:"(open in a new tab)",children:[w," "]})]}),Object(N.jsxs)("li",{className:"list-group-item text-truncate opacity-5",children:["Video: ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:f,title:"(open in a new tab)",children:[f," "]})]})]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)(m.b,{to:"/",className:"list-group-item btn btn-secondary opacity-4",children:"Back"}),Object(N.jsx)("hr",{})]})}function we(){var e=Object(b.g)().id,t=Object(p.a)(O,{variables:{rocketId:e}}),c=t.loading,s=t.error,n=t.data;if(c)return Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"}),Object(N.jsx)("div",{className:"spinner-grow spinner-grow-sm"})]});if(s)return"Error! ".concat(s.message);var r=n.rocket,a=r.name,i=r.type,o=r.active,j=r.stages,d=r.boosters,u=r.cost_per_launch,x=r.success_rate_pct,h=r.first_flight,g=r.country,f=r.company,y=r.wikipedia,v=r.description,w=r.flickr_images;return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"mb-3",style:{display:"flex",flexDirection:"row",alignContent:"flex-end",alignItems:"flex-end"},children:Object(N.jsx)("h1",{className:"display-4 my-3",children:Object(N.jsx)("span",{className:"text-dark",children:a})})}),Object(N.jsx)("h4",{className:"mb-3",children:"Rocket Details"}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Rocket active:  ","",Object(N.jsx)("span",{className:_()({"text-success":o,"text-danger":!o}),children:o?"Yes":"No"})]}),Object(N.jsxs)("li",{className:"list-group-item opacity-5",children:["Description: ","",v]}),Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Company: ","",f]}),Object(N.jsxs)("li",{className:"list-group-item opacity-5",children:["Country: ","",g]}),Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Rocket type: ","",i]}),Object(N.jsxs)("li",{className:"list-group-item opacity-5",children:["Stages: ","",j]}),Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Boosters: ","",d]}),Object(N.jsxs)("li",{className:"list-group-item opacity-5",children:["Cost per Launch: ","",u," $"]}),Object(N.jsxs)("li",{className:"list-group-item opacity-4",children:["Succes rate purcentage: ","",Object(N.jsxs)("span",{className:_()({"text-success":x>50,"text-danger":x<50}),children:[x," %"]})]}),Object(N.jsxs)("li",{className:"list-group-item opacity-5",children:["First flight: ","",h]}),Object(N.jsxs)("li",{className:"list-group-item text-truncate opacity-4",children:["Wikipedia:  ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",href:y,title:"(open in a new tab)",children:[y," "]})]})]}),Object(N.jsx)("div",{children:Object(N.jsx)(ve,{srcArr:w.concat(w)})}),Object(N.jsx)(m.b,{to:"/",className:"list-group-item shadow-sm btn btn-secondary opacity-4",children:"Home"}),Object(N.jsx)("hr",{})]})}var ke=c.p+"static/media/SpaceX.ca5e5400.svg",Ee=function(){return Object(N.jsxs)("footer",{children:[Object(N.jsx)("div",{className:"footer-container",children:Object(N.jsx)("img",{src:ke,alt:"Logo SpaceX",style:{width:200,display:"flex",margin:"auto"}})}),Object(N.jsx)("br",{})]})},Se=(c(63),c.p+"static/media/Spacex_3.0b8c9cde.png");var Ie=function(){return Object(N.jsxs)(m.a,{children:[Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("img",{src:Se,alt:"SpaceX",style:{width:600,display:"flex",margin:"auto"}})}),Object(N.jsxs)(b.c,{children:[Object(N.jsx)(b.a,{path:"/",element:Object(N.jsx)(E,{})}),Object(N.jsx)(b.a,{path:"/launch/:id",element:Object(N.jsx)(Ne,{})}),Object(N.jsx)(b.a,{path:"/rocket/:id",element:Object(N.jsx)(we,{})})]})]}),Object(N.jsx)(Ee,{})]})},Le=new o.a({uri:"http://localhost:4000/graphql",cache:new j.a});Object(i.render)(Object(N.jsx)(d.a,{client:Le,children:Object(N.jsx)(Ie,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.3977d07d.chunk.js.map